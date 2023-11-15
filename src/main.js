import { sword } from './js/threeManager';
// import { loadData } from './dataManager';
// import { startAnimation } from './animationManager';


// Importez les fichiers CSS ou Sass nécessaires
import './main.css'; // Importez votre fichier de styles principal

// Fonction pour initialiser votre application
function initApp() {
  // Votre logique d'initialisation ici
  console.log('L\'application a été initialisée.');

  // Par exemple, vous pouvez ajouter du code JavaScript pour manipuler le DOM
  // ou interagir avec l'API Web ici.
}

// Attendez que le DOM soit chargé avant d'initialiser l'application
document.addEventListener('DOMContentLoaded', initApp);


// Initialiser chaque module
sword();
// loadData();
// startAnimation();
