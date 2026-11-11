/*
 * Runs a complete test suite in one isolated worker using the in-browser
 * Clang/WASI toolchain. The parent terminates this worker on suite timeout.
 */
'use strict';
importScripts('wasm-clang/shared.js');
function readBuffer(filename) {
  return fetch(filename, {cache:'force-cache'}).then(response => {
    if (!response.ok) throw new Error('Could not load ' + filename + ' (HTTP ' + response.status + ').');
    return response.arrayBuffer();
  });
}
function compileStreaming(filename) {
  return readBuffer(filename).then(buffer => WebAssembly.compile(buffer));
}
function cleanAnsi(value) {
  return String(value || '').replace(/\x1b\[[0-9;]*m/g, '').replace(/\r/g, '');
}
self.onmessage = async event => {
  const message = event.data || {};
  if (message.id !== 'run-suite') return;
  let currentOutput = '';
  let skipCommandEcho = false;
  try {
    const module = message.data?.module;
    const tests = message.data?.tests || [];
    if (!(module instanceof WebAssembly.Module)) throw new Error('Compiled C++ module missing.');
    const api = new API({
      readBuffer,
      compileStreaming,
      hostWrite:chunk => { if(skipCommandEcho){skipCommandEcho=false;return;} currentOutput += String(chunk ?? ''); },
      clang:'../wasm/clang',
      lld:'../wasm/lld',
      memfs:'../wasm/memfs',
      sysroot:'../wasm/sysroot.tar'
    });
    await api.ready;
    for (let i=0;i<tests.length;i++) {
      currentOutput = '';
      skipCommandEcho = true;
      api.memfs.setStdinStr(String(tests[i].input ?? ''));
      try {
        await api.run(module,'main');
        self.postMessage({id:'case',data:{index:i,status:'success',stdout:cleanAnsi(currentOutput),stderr:''}});
      } catch (error) {
        const messageText=cleanAnsi(error?.message || String(error));
        const exitMatch=messageText.match(/process exited with code (-?\d+)/);
        self.postMessage({id:'case',data:{
          index:i,status:'runtime_error',stdout:cleanAnsi(currentOutput),
          stderr:messageText,exitCode:exitMatch?Number(exitMatch[1]):null
        }});
      }
    }
    self.postMessage({id:'suite-done'});
  } catch (error) {
    self.postMessage({id:'fatal',data:{message:cleanAnsi(error?.message || String(error))}});
  }
};