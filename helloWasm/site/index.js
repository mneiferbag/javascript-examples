const js = import("./node_modules/mhn-hello-wasm/mhn_hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
