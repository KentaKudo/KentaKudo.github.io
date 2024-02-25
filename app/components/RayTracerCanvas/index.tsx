import type { FC } from "react";
import { useCallback, useRef, useState } from "react";
import { render } from "./raytracer";

export const RayTracerCanvas: FC = () => {
  const [status, setStatus] = useState<"notRunYet" | "running" | "hasRun">(
    "notRunYet"
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const run = useCallback(
    () =>
      Promise.resolve(() => setStatus("running"))
        .then(() => render(400, 255))
        .then(
          (imageData) =>
            imageData &&
            canvasRef.current?.getContext("2d")?.putImageData(imageData, 0, 0)
        )
        .finally(() => setStatus("hasRun")),
    []
  );

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
