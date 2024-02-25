export const render: (
  width: number,
  height: number
) => Promise<ImageData | null> = async (width, height) => {
  if (!window.Worker) return Promise.resolve(null);

  return new Promise((resolve) => {
    const worker = new Worker(
      new URL("/js/raytracer.worker.js", import.meta.url)
    );
    worker.postMessage([width, height]);
    worker.onmessage = ({ data: rendered }: { data: Uint8ClampedArray }) => {
      const imageData = new ImageData(rendered, width);
      resolve(imageData);
    };
  });
};
