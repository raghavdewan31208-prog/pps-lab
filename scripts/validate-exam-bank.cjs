#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

function extractAssignedArray(source, marker, endMarker) {
  const markerAt = source.indexOf(marker);
  if (markerAt < 0) throw new Error('Question bank declaration was not found: ' + marker);
  const arrayStart = source.indexOf('[', markerAt + marker.length);
  const arrayEnd = endMarker ? source.indexOf(endMarker, arrayStart) : source.lastIndexOf('];');
  if (arrayStart < 0 || arrayEnd < arrayStart) throw new Error('Question bank JSON could not be located: ' + marker);
  const jsonEnd = endMarker ? arrayEnd : arrayEnd + 1;
  return JSON.parse(source.slice(arrayStart, jsonEnd));
}

const html = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
const legacy = extractAssignedArray(html, 'window.__PPS_PRIVATE_BANK=', ';window.__PPS_PUBLIC_BANK=');
const examSource = fs.readFileSync(path.join(process.cwd(), 'exam-bank.js'), 'utf8');
const added = extractAssignedArray(examSource, 'window.__PPS_EXAM_QUESTION_BANK =');
const bank = [...legacy, ...added];

function normalize(value) {
  return String(value ?? '').replace(/\r\n?/g, '\n').trim().split(/\s+/).filter(Boolean).join(' ');
}

function fail(message) {
  console.error('✗ ' + message);
  process.exitCode = 1;
}

const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'pps-exam-bank-'));
let checked = 0;
let passed = 0;
try {
  for (const q of bank) {
    if (q.mode === 'predict') continue;
    const minimumCases = q.id.startsWith('EX') ? 4 : 3;
    const minimumHidden = q.id.startsWith('EX') ? 2 : 1;
    if (!q.solution || !Array.isArray(q.tests) || q.tests.length < minimumCases) {
      fail(q.id + ': expected a solution and at least ' + minimumCases + ' test cases.');
      continue;
    }

    const sampleInputs = new Set((q.samples || []).map(sample => String(sample.input ?? '')));
    const hiddenCount = q.tests.filter(test => !sampleInputs.has(String(test.input ?? ''))).length;
    if (hiddenCount < minimumHidden) fail(q.id + ': expected at least ' + minimumHidden + ' hidden test case(s).');

    const sourceFile = path.join(temp, q.id + '.cpp');
    const executable = path.join(temp, q.id);
    fs.writeFileSync(sourceFile, q.solution);

    const compile = spawnSync('g++', ['-std=c++17', '-O2', '-pipe', sourceFile, '-o', executable], {
      encoding: 'utf8', timeout: 30000, maxBuffer: 2 * 1024 * 1024
    });
    if (compile.error || compile.status !== 0) {
      fail(q.id + ': reference solution did not compile. ' + (compile.stderr || compile.error?.message || 'Unknown compiler error'));
      continue;
    }

    for (let i = 0; i < q.tests.length; i++) {
      checked++;
      const test = q.tests[i];
      const run = spawnSync(executable, [], {
        input: String(test.input ?? ''),
        encoding: 'utf8',
        timeout: 3000,
        maxBuffer: 1024 * 1024
      });
      if (run.error || run.status !== 0) {
        fail(q.id + ' test ' + (i + 1) + ': reference solution did not run successfully. ' + (run.stderr || run.error?.message || 'Exit status ' + run.status));
        continue;
      }
      if (normalize(run.stdout) !== normalize(test.expected)) {
        fail(q.id + ' test ' + (i + 1) + ': expected "' + normalize(test.expected) + '" but got "' + normalize(run.stdout) + '".');
        continue;
      }
      passed++;
    }
  }
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}

console.log('Validated ' + bank.length + ' bank entries (' + (bank.length - 12) + ' coding tasks); ' + passed + '/' + checked + ' reference-solution tests passed.');
if (process.exitCode) process.exit(process.exitCode);
