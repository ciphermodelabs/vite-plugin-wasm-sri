# vite-plugin-wasm-sri


It's base don vite-plugin-wasm which adds WebAssembly ESM integration (aka. Webpack's `asyncWebAssembly`) to Vite and support `wasm-pack` generated modules.
In addition to vite-plugin-wasm functionalities, it provides subresource integrity check for Wasm modules.

## Installation

```bash
npm install --save-dev github:ciphermode/vite-plugin-wasm-sri
```

## Usage

```typescript
import wasm from "vite-plugin-wasm-sri";

export default defineConfig({
  plugins: [
    wasm(),
  ]
});
```
