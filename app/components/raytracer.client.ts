import init, { render as wasmRender } from "wasm-raytracer";
import wasm from "wasm-raytracer/binary.wasm";

export const render = async () => {
  await init(wasm);
  const rendered = wasmRender(400, 255);
  return new ImageData(rendered, 400);
};
