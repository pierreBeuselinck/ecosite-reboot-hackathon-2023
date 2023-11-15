// fetch('../../data/data.json')
//   .then(response => response.json())
//   .then(produits => {
//     produits.forEach(produit => {
//       console.log(`Nom: ${produit.nom}, Prix: ${produit.prix}`);
//     });
//   })
//   .catch(error => console.error('Erreur lors du chargement des produits:', error));

//----------------------------------------

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.HemisphereLight(0xffffff, 0x444444);
light.position.set(0, 20, 0);
scene.add(light);

const loader = new GLTFLoader();
loader.load('/assets/model3d/greatsword-of-artorias/source/model.gltf', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

camera.position.set(0, 1, 2);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
