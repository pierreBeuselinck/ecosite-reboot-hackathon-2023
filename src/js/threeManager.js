// src/js/threeManager.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function sword() {
    const scene = new THREE.Scene();
    const container = document.getElementById('sword-model'); // Emplacement du rendu : Obtenez la div par ID
    const containerWidth = container.clientWidth; // Obtenez la largeur de la div
    const containerHeight = container.clientHeight; // Obtenez la hauteur de la div

    const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    // Définissez la taille du rendu en fonction de la taille de la div
    renderer.setSize(containerWidth, containerHeight);
    container.appendChild(renderer.domElement);

    renderer.setClearColor(0x000000, 0); // background et l'opacité

    const light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(0, 20, 0);
    scene.add(light);

    let swordModel; // Variable to hold the GLTF model

    const loader = new GLTFLoader();
    loader.load('/model3d/greatsword-of-artorias/source/model.gltf', function (gltf) {
        swordModel = gltf.scene;
        swordModel.rotation.y = Math.PI / 2; // Rotate the sword 90 degrees
        scene.add(swordModel);
    }, undefined, function (error) {
        console.error(error);
    });

    camera.position.set(0, 1, 2);
    scene.add(camera);

    function onWindowResize() {
        const newWidth = container.clientWidth; // Utilisez la largeur de la div
        const newHeight = container.clientHeight; // Utilisez la hauteur de la div

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth, newHeight);
    }

    window.addEventListener('resize', onWindowResize);

    function animate() {
        requestAnimationFrame(animate);

        // If the sword model is loaded, rotate it
        if (swordModel) {
            swordModel.rotation.y += 0.01;
        }

        renderer.render(scene, camera);
    }

    animate();
}

export { sword };
