import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

const scene = new Scene();
const renderer = new WebGLRenderer();
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial();

const init = () => {
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  document.body.style.margin = "0";

  const cube = new Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function render() {
    requestAnimationFrame(render);

    cube.rotation.x += 0.001;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  render();
};

export { init };
