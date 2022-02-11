<template>
  <div class="wrapper">
    <button v-if="!hasRun" @click="run">Run</button>
    <loading-spinner v-if="isRunning" color="#868e96" class="spinner" />
    <canvas ref="canvas" />
  </div>
</template>

<script>
import RayTracerWorker from "~/assets/js/raytracer.worker.js";
import LoadingSpinner from "../LoadingSpinner.vue";

const WIDTH = 400;
const HEIGHT = 255;

export default {
  name: "RayTracerCanvas",
  components: { LoadingSpinner },
  async mounted() {
    this.$refs.canvas.width = WIDTH;
    this.$refs.canvas.height = HEIGHT;
  },
  data() {
    return { isRunning: false, hasRun: false };
  },
  methods: {
    run() {
      this.hasRun = true;
      this.isRunning = true;
      if (window.Worker) {
        const w = new RayTracerWorker();
        w.postMessage([WIDTH, HEIGHT]);
        w.onmessage = ({ data: rendered }) => {
          this.isRunning = false;
          const imageData = new ImageData(rendered, WIDTH);
          this.$refs.canvas.getContext("2d").putImageData(imageData, 0, 0);
        };
      }
    },
  },
};
</script>

<style scoped>
div.wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

button {
  width: 100%;
  max-width: 80px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #868e9620;
  border: 2px solid #868e96;
  border-radius: 2px;
  color: #868e96;
  padding: 8px 16px;
  font-weight: 500;
}

canvas {
  margin: 0 auto;
  background: #f8f9fa;
}
</style>
