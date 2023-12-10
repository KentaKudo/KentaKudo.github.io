import { useCallback, useRef } from "react";

export const RayTracerCanvas = () => {
  const canvasRef = useRef(null);

  const run = useCallback(() => {
    // draw in canvas
    const myWorker = new Worker("/worker.js");
    myWorker.postMessage(["hello", "world"]);
    myWorker.onmessage = (e) => {
      console.log(`Message received from worker: ${e.data}`);
    };
  }, []);

  return (
    <div>
      <button onClick={run}>Run</button>
      <canvas ref={canvasRef} />
    </div>
  );
};
