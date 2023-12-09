import { useCallback, useRef } from "react";

export const RayTracerCanvas = () => {
  const canvasRef = useRef(null);

  const run = useCallback(() => {
    console.log("run!");
    // draw in canvas
  }, []);

  return (
    <div>
      <button onClick={run}>Run</button>
      <canvas ref={canvasRef} />
    </div>
  );
};
