/// <reference types="jest-extended" />

import { createRequire } from "module";
import { parseWasm } from "./wasm-parser.js";
import "jest-extended";

// @ts-ignore this file is ESM
const require = createRequire(import.meta.url);

describe("WASM parser", () => {
  it("should parse `wasm-bindgen` generated WASM files correctly", async () => {
    const filename = require.resolve("@syntect/wasm/dist/syntect_bg.wasm");
    const result = await parseWasm(filename);
    expect(result).toStrictEqual({
      "digest": "\"sha384-3whpiQaJDU3UFPTw4GYjJHLMT2Euv7EnDkgREHj9VtILF3Rk5Tua7tYCuFB1cLiR\"",
      imports: [{ from: "./syntect_bg.js", names: ["__wbindgen_throw"] }],
      exports: [
        "memory",
        "__wbg_getcssresult_free",
        "__wbg_get_getcssresult_css",
        "__wbg_set_getcssresult_css",
        "__wbg_get_getcssresult_error",
        "__wbg_set_getcssresult_error",
        "getCSS",
        "highlight",
        "__wbg_set_highlightresult_html",
        "__wbg_set_highlightresult_language",
        "__wbg_highlightresult_free",
        "__wbg_get_highlightresult_html",
        "__wbg_get_highlightresult_language",
        "__wbindgen_add_to_stack_pointer",
        "__wbindgen_free",
        "__wbindgen_malloc",
        "__wbindgen_realloc"
      ]
    });
  });

  it("should throw error for an invalid WASM file", async () => {
    const filename = require.resolve("@syntect/wasm/dist/syntect_bg.js");
    await expect(parseWasm(filename)).toReject();
  });
});
