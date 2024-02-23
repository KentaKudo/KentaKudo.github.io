import type { FC } from "react";
import { useCallback, useRef, useState } from "react";
import { render } from "./raytracer.client";

// import { render } from "wasm-raytracer";

export const RayTracerCanvas: FC = () => {
  const [status, setStatus] = useState<"notRunYet" | "running" | "hasRun">(
    "notRunYet"
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const run = useCallback(async () => {
    if (!canvasRef.current) return;

    setStatus("running");
    // const myWorker = new Worker("/raytracer.worker.js");
    // myWorker.postMessage(["hello", "world"]);
    // myWorker.onmessage = (e) => {
    //   console.log(`Message received from worker: ${e.data}`);
    // };
    // const { render } = await import("wasm-raytracer");
    // const rendered = render(400, 255);
    // const imageData = new ImageData(rendered, 400);
    const imageData = await render(400, 255);

    canvasRef.current?.getContext("2d")?.putImageData(imageData, 0, 0);
    setStatus("hasRun");
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-items-center gap-2">
        {status === "notRunYet" && (
          <>
            <p>⚠️ This operation blocks the main thread.</p>
            <button
              className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
              onClick={run}
            >
              Run
            </button>
          </>
        )}
        {status === "running" && <p>running...</p>}
      </div>

      <canvas className="w-full max-w-screen-sm aspect-video" ref={canvasRef} />
    </div>
  );
};
