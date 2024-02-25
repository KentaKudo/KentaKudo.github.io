//@ts-expect-error: TODO: check wasm-raytracer npm package settings
import init, { render as wasmRender } from "wasm-raytracer";
import wasm from "wasm-raytracer/binary.wasm?init";

export const render = async (width: number, height: number) => {
  await init(wasm);
  const rendered = wasmRender(width, height);
  return new ImageData(rendered, width);
};
