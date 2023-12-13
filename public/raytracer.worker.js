// import { render } from "wasm-raytracer";

onmessage = async (e) => {
  // const { render } = await import("wasm-raytracer");
  console.log(`Message received from main script: ${JSON.stringify(e.data)}`);
  postMessage(42);
};
