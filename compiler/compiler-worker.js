/*
 * PPS Lab browser compiler worker.
 * Toolchain: wasm-clang (Apache-2.0), fetched into the Pages artifact at deploy time.
 * This worker compiles once and transfers a WebAssembly.Module to the main page.
 */
'use strict';
self.importScripts('wasm-clang/shared.js');

const WASM_BASE = '../wasm/';
const ARROW = '\x1b[1;93m>\x1b[0m ';
const BUILTINS = 'lib/clang/8.0.1/lib/wasi/libclang_rt.builtins-wasm32.a';
const LIBDIR = 'lib/wasm32-wasi';
let api = null;
let phase = 'idle';
let diagnostics = '';
let logBuffer = '';
let inLog = false;

function cleanAnsi(value) {
  return String(value || '').replace(/\x1b\[[0-9;]*m/g, '').replace(/\r/g, '');
}
function post(id, data) { self.postMessage({id, data}); }
function hostWrite(chunk) {
  const value = String(chunk ?? '');
  if (value.startsWith(ARROW)) inLog = true;
  if (inLog) {
    logBuffer += value;
    if (logBuffer.includes('\n')) {
      const line = cleanAnsi(logBuffer.slice(ARROW.length)).trim();
      logBuffer = '';
      inLog = false;
      if (line) post('progress', {phase, message:line});
    }
    return;
  }
  diagnostics += value;
}
async function readBuffer(filename) {
  const response = await fetch(filename, {cache:'force-cache'});
  if (!response.ok) throw new Error('Could not load compiler asset ' + filename + ' (HTTP ' + response.status + ').');
  return response.arrayBuffer();
}
async function compileStreaming(filename) {
  return WebAssembly.compile(await readBuffer(filename));
}
async function ensureApi() {
  if (api) return api;
  api = new API({
    readBuffer,
    compileStreaming,
    hostWrite,
    clang:WASM_BASE + 'clang',
    lld:WASM_BASE + 'lld',
    memfs:WASM_BASE + 'memfs',
    sysroot:WASM_BASE + 'sysroot.tar'
  });
  api.clangCommonArgs.push('-std=c++17');
  await api.ready;
  // A small GNU-header compatibility shim helps with common CodeTantra-style
  // beginner submissions that start with #include <bits/stdc++.h>.
  try { api.memfs.addDirectory('include/bits'); } catch (_) {}
  try {
    api.memfs.addFile('include/bits/stdc++.h', [
      '#include <algorithm>','#include <array>','#include <bitset>','#include <cassert>',
      '#include <cctype>','#include <climits>','#include <cmath>','#include <cstdio>',
      '#include <cstdlib>','#include <cstring>','#include <ctime>','#include <deque>',
      '#include <exception>','#include <fstream>','#include <functional>','#include <iomanip>',
      '#include <iostream>','#include <iterator>','#include <limits>','#include <list>',
      '#include <map>','#include <numeric>','#include <queue>','#include <set>',
      '#include <sstream>','#include <stack>','#include <string>','#include <tuple>',
      '#include <type_traits>','#include <unordered_map>','#include <unordered_set>',
      '#include <utility>','#include <vector>'
    ].join('\n') + '\n');
  } catch (_) {}
  return api;
}
async function link(a, objectFile, wasmFile) {
  const lld = await a.getModule(a.lldFilename);
  return a.run(lld, 'wasm-ld', '--no-threads', '--export-dynamic',
    '-z', 'stack-size=1048576', '-L' + LIBDIR, LIBDIR + '/crt1.o',
    objectFile, '-lc', '-lc++', '-lc++abi', '-lcanvas', BUILTINS, '-o', wasmFile);
}
function isProcExit(error) {
  return error && typeof error.code === 'number' && /process exited with code/.test(error.message || '');
}
async function compileSource(source) {
  diagnostics = '';
  phase = 'loading';
  post('phase', {phase, message:'Loading the local C++17 toolchain…'});
  try {
    const a = await ensureApi();
    a.memfs.stdinHook = null;
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2,7);
    const input = 'pps_' + id + '.cc';
    const objectFile = 'pps_' + id + '.o';
    const wasmFile = 'pps_' + id + '.wasm';

    phase = 'compiling';
    post('phase', {phase, message:'Compiling C++17 source with Clang…'});
    await a.compile({input, contents:String(source || ''), obj:objectFile});

    phase = 'linking';
    post('phase', {phase, message:'Linking the program…'});
    await link(a, objectFile, wasmFile);

    phase = 'module';
    post('phase', {phase, message:'Preparing isolated program runner…'});
    const module = await WebAssembly.compile(a.memfs.getFileContents(wasmFile));
    post('compiled', {module});
  } catch (error) {
    const compilePhase = phase === 'compiling' || phase === 'linking' || phase === 'module';
    const message = cleanAnsi(diagnostics).trim() || cleanAnsi(error?.message || String(error));
    post('failed', {
      status:compilePhase ? 'compile_error' : 'compiler_error',
      phase,
      message,
      exitCode:isProcExit(error) ? error.code : null
    });
  } finally {
    phase = 'idle';
  }
}
self.onmessage = event => {
  const message = event.data || {};
  if (message.id === 'compile') compileSource(message.data?.source);
};