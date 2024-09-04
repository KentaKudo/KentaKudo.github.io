"use client";

import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.getElementById("webgl");
if (!canvas) {
  throw new Error("No canvas found");
}

const scene = new THREE.Scene();

// const axisHelper = new THREE.AxesHelper();
// scene.add(axisHelper);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 6.5;
scene.add(camera);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const tick = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

const gaussianRandom = (mean: number = 0, stdev: number = 1) => {
  const u = 1 - Math.random(); // Converting [0,1) to (0,1]
  const v = Math.random();
  const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  // Transform to the desired mean and standard deviation:
  return z * stdev + mean;
};

// ----------------------------------------------------------------

const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("images/matcap.png");
matcapTexture.colorSpace = THREE.SRGBColorSpace;

const fontLoader = new FontLoader();

fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
  // Material
  //   const material = new THREE.MeshBasicMaterial({ color: "dodgerblue" });
  //   material.transparent = true;
  //   material.opacity = 0.5;
  const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
  material.transparent = true;
  material.opacity = 0.5;
  //   const material = new THREE.MeshPhysicalMaterial();
  //   material.metalness = 0;
  //   material.roughness = 0.15;
  //   material.transmission = 1;
  //   material.ior = 1.5;
  //   material.thickness = 0.5;

  // Text
  const textGeometry = new TextGeometry("Hi! I'm Kenta Kudo", {
    font: font,
    size: 0.5,
    depth: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  textGeometry.center();

  const text = new THREE.Mesh(textGeometry, material);
  scene.add(text);

  // Donuts
  const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 32, 64);

  for (let i = 0; i < 300; i++) {
    const donut = new THREE.Mesh(donutGeometry, material);
    donut.position.x = gaussianRandom(0, 10);
    donut.position.y = gaussianRandom(0, 10);
    donut.position.z = gaussianRandom(0, 10);
    donut.rotation.x = Math.random() * Math.PI;
    donut.rotation.y = Math.random() * Math.PI;
    const scale = Math.random();
    donut.scale.set(scale, scale, scale);

    scene.add(donut);
  }
});

// ----------------------------------------------------------------

tick();
