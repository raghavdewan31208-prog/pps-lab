/*
 * One isolated execution per test case. The parent can terminate this worker
 * on timeout without freezing or killing the PPS Lab page.
 */
'use strict';
self.importScripts('wasm-clang/shared.js');

async function readBuffer(filename) {
  const response = await fetch(filename, {cache:'force-cache'});
  if (!response.ok) throw new Error('Could not load runner asset ' + filename + ' (HTTP ' + response.status + ').');
  return response.arrayBuffer();
}
async function compileStreaming(filename) {
  return WebAssembly.compile(await readBuffer(filename));
}
function cleanAnsi(value) {
  return String(value || '').replace(/\x1b\[[0-9;]*m/g, '').replace(/\r/g, '');
}
self.onmessage = async event => {
  const message = event.data || {};
  if (message.id !== 'run') return;
  let output = '';
  try {
    const module = message.data?.module;
    if (!(module instanceof WebAssembly.Module)) throw new Error('The compiled C++ module was not received by the runner.');
    const memfs = new API.MemFS({
      compileStreaming,
      hostWrite:chunk => {
        output += String(chunk ?? '');
        if (output.length > 200000) throw new Error('Output limit exceeded (200 KB).');
      },
      memfsFilename:'wasm/memfs'
    });
    await memfs.ready;
    memfs.setStdinStr(String(message.data?.stdin ?? ''));
    const app = new API.App(module, memfs, 'main');
    await app.run();
    self.postMessage({id:'result',data:{status:'success',stdout:output,stderr:''}});
  } catch (error) {
    const text = cleanAnsi(output);
    const runtimeStatus = /Output limit exceeded/.test(error?.message || '') ? 'output_limit' : 'runtime_error';
    self.postMessage({
      id:'result',
      data:{
        status:runtimeStatus,
        stdout:text,
        stderr:cleanAnsi(error?.message || String(error)),
        exitCode:API.isProcExit && API.isProcExit(error) ? error.code : null
      }
    });
  }
};