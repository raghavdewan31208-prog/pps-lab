#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { performance } = require('node:perf_hooks');

const root = process.cwd();

function makeWorker(scriptRelativePath) {
  const scriptPath = path.resolve(root, scriptRelativePath);
  const baseDir = path.dirname(scriptPath);
  const context = vm.createContext({
    console,
    WebAssembly,
    performance,
    TextEncoder,
    TextDecoder,
    URL,
    Date,
    Math,
    setTimeout,
    clearTimeout,
    queueMicrotask,
    fetch: async resource => {
      const filename = path.resolve(baseDir, String(resource));
      let bytes;
      try {
        bytes = fs.readFileSync(filename);
      } catch (error) {
        throw new Error('Missing worker asset "' + filename + '": ' + error.message);
      }
      const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
      return {
        ok: true,
        status: 200,
        arrayBuffer: async () => buffer
      };
    }
  });

  context.self = context;
  context.importScripts = (...resources) => {
    for (const resource of resources) {
      const filename = path.resolve(baseDir, resource);
      const code = fs.readFileSync(filename, 'utf8');
      vm.runInContext(code, context, { filename });
    }
  };
  vm.runInContext(fs.readFileSync(scriptPath, 'utf8'), context, { filename: scriptPath });
  return context;
}

function normalize(value) {
  return String(value ?? '').replace(/\r\n?/g, '\n').trim().split(/\s+/).filter(Boolean).join(' ');
}

function compileSource(worker, source) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Compiler smoke test timed out.')), 120000);
    worker.postMessage = message => {
      if (message.id === 'compiled') {
        clearTimeout(timer);
        resolve(message.data.module);
      } else if (message.id === 'failed' || message.id === 'fatal') {
        clearTimeout(timer);
        reject(new Error(message.data?.message || 'Compilation failed.'));
      }
    };
    worker.onmessage({ data: { id: 'compile', data: { source } } });
  });
}

function runCases(worker, module, tests) {
  return new Promise((resolve, reject) => {
    const results = [];
    const timer = setTimeout(() => reject(new Error('Execution smoke test timed out.')), 30000);
    worker.postMessage = message => {
      if (message.id === 'case') results[message.data.index] = message.data;
      else if (message.id === 'suite-done') {
        clearTimeout(timer);
        resolve(results);
      } else if (message.id === 'fatal') {
        clearTimeout(timer);
        reject(new Error(message.data?.message || 'Execution failed.'));
      }
    };
    worker.onmessage({ data: { id: 'run-suite', data: { module, tests } } });
  });
}

(async () => {
  const source = [
    '#include <iostream>',
    'using namespace std;',
    'int main() {',
    '  int n, x, sum = 0;',
    '  cin >> n;',
    '  for (int i = 0; i < n; i++) { cin >> x; sum += x; }',
    '  cout << sum << "\\n";',
    '  return 0;',
    '}'
  ].join('\n');

  const tests = [
    { input: '1\n8\n', expected: '8' },
    { input: '4\n1 2 3 4\n', expected: '10' },
    { input: '3\n-2 0 5\n', expected: '3' }
  ];

  const compiler = makeWorker('compiler/compiler-worker.js');
  const runner = makeWorker('compiler/run-worker.js');
  const module = await compileSource(compiler, source);
  const results = await runCases(runner, module, tests);

  for (let i = 0; i < tests.length; i++) {
    const result = results[i];
    if (!result || result.status !== 'success' || normalize(result.stdout) !== normalize(tests[i].expected)) {
      throw new Error('WASM smoke test ' + (i + 1) + ' failed. Expected "' +
        normalize(tests[i].expected) + '", got "' + normalize(result?.stdout) +
        '". Status: ' + (result?.status || 'no result') + '. ' + (result?.stderr || ''));
    }
    console.log('✓ WebAssembly test case ' + (i + 1) + ' passed.');
  }

  console.log('Local Clang/WASI compiler and execution worker passed all ' + tests.length + ' smoke tests.');
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
