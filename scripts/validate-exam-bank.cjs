#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const file = path.join(process.cwd(), 'exam-bank.js');
const source = fs.readFileSync(file, 'utf8');
const marker = 'window.__PPS_EXAM_QUESTION_BANK =';
const markerAt = source.indexOf(marker);
if (markerAt < 0) throw new Error('Exam question bank declaration was not found.');
const arrayStart = source.indexOf('[', markerAt + marker.length);
const arrayEnd = source.lastIndexOf('];');
if (arrayStart < 0 || arrayEnd < arrayStart) throw new Error('Exam question bank JSON could not be located.');
const bank = JSON.parse(source.slice(arrayStart, arrayEnd + 1));

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
    if (q.mode !== 'full') continue;
    if (!q.solution || !Array.isArray(q.tests) || q.tests.length < 4) {
      fail(q.id + ': expected a solution and at least four test cases.');
      continue;
    }

    const sampleInputs = new Set((q.samples || []).map(sample => String(sample.input ?? '')));
    const hiddenCount = q.tests.filter(test => !sampleInputs.has(String(test.input ?? ''))).length;
    if (hiddenCount < 2) fail(q.id + ': expected at least two hidden test cases.');

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

console.log('Validated ' + bank.length + ' bank entries; ' + passed + '/' + checked + ' reference-solution tests passed.');
if (process.exitCode) process.exit(process.exitCode);
