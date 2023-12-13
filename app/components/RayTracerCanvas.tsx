import { useCallback, useRef } from "react";
import { render } from "./raytracer.client";
// import { render } from "wasm-raytracer";

export const RayTracerCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const run = useCallback(async () => {
    // draw in canvas
    // const myWorker = new Worker("/raytracer.worker.js");
    // myWorker.postMessage(["hello", "world"]);
    // myWorker.onmessage = (e) => {
    //   console.log(`Message received from worker: ${e.data}`);
    // };
    // const { render } = await import("wasm-raytracer");
    // const rendered = render(400, 255);
    // const imageData = new ImageData(rendered, 400);
    const imageData = await render();
    canvasRef.current?.getContext("2d")?.putImageData(imageData, 0, 0);
  }, []);

  return (
    <div>
      <button onClick={run}>Run</button>
      <canvas ref={canvasRef} />
    </div>
  );
};
