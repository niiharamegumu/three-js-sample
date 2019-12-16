import * as THREE from "three";

const generateRenderer = (width, height, selector) => {
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector(selector)
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    return renderer;
}

const init = () => {

    const width = window.innerWidth;
    const height = window.innerHeight;

    const renderer = generateRenderer(width, height, "#canvas");

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(100, width / height, 10000, 100);
    camera.updateProjectionMatrix();
    camera.position.set(1, 1, +1000);

    const geometry = new THREE.SphereGeometry();
    const SIZE = 2000;
    const LENGTH = 4000;
    for (let i = 0; i < LENGTH; i++) {
        geometry.vertices.push(new THREE.Vector3(
            SIZE * (Math.random() - 0.5),
            SIZE * (Math.random() - 0.5),
            SIZE * (Math.random() - 0.5),
        ));
    }
    const material = new THREE.PointsMaterial({
        size: 3,
        color: 0xFFFFFF,
    });

    const mesh = new THREE.Points(geometry, material);
    scene.add(mesh);

    run();

    function run() {
        mesh.rotation.y += 0.0001;
        // mesh.rotation.x += 0.0001;
        renderer.render(scene, camera);

        requestAnimationFrame(run);
    }
}

  window.addEventListener('load', init);