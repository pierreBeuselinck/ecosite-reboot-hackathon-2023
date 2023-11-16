

function animationInit() {

  // FP : Title
  document.querySelectorAll('.click-hang').forEach(element => {
    element.addEventListener('click', function () {
      this.classList.add('click-hang-animate');
    });
  });

  //FP : Title falldown
  document.querySelectorAll('.click-falldown').forEach(triggerElement => {
    triggerElement.addEventListener('click', function () {
      document.querySelectorAll('.click-falldown-target').forEach(targetElement => {
        targetElement.classList.add('click-falldown-animation');
      });
    });
  });

  //FP: Avis falldown 

  document.querySelectorAll('.click-falldown-faq').forEach(element => {
    element.addEventListener('click', function () {
      this.classList.add('click-falldown-faq-animation');
    });
  });

  //FP : Parapgraphe Falldown

  document.querySelectorAll('.click-letterFalldown').forEach(button => {
    button.addEventListener('click', function () {
      document.querySelectorAll('.click-letterFalldown-target').forEach(textElement => {
        const text = textElement.textContent;
        textElement.innerHTML = '';

        const length = text.length;
        for (let i = 0; i < length; i++) {
          let span = document.createElement('span');
          span.textContent = text[i];
          span.style.animationDelay = `${(length - i) * 0.05}s`;
          textElement.appendChild(span);
        }

        setTimeout(() => {
          textElement.querySelectorAll('span').forEach(span => {
            span.classList.add('click-letter-falldown-animation');
          });
        }, 100);
      });
    });
  });


  //FP : changement de l'image au clique

  document.querySelectorAll('.click-switchImg').forEach(button => {
    button.addEventListener('click', function () {
      const imageContainer = document.querySelector('.c-product-page__visual-wrapper');
      const oldImage = imageContainer.querySelector('.click-switchImg-animation');

      const newImage = document.createElement('img');
      newImage.src = 'images/sapin-sans-epine.png';
      newImage.alt = 'Image';
      newImage.classList.add('click-switchImg-animation', 'click-switchImg-hide');

      imageContainer.appendChild(newImage);

      setTimeout(() => {
        oldImage.classList.add('click-switchImg-hide');
        newImage.classList.remove('click-switchImg-hide');
      }, 100);

      oldImage.addEventListener('transitionend', () => {
        oldImage.remove();
      });
    });
  });

  // Paiement : click sur camion
  var sidebar = document.getElementById("animSidebar");
  var camionPaiement = document.querySelectorAll(".barre-avancement-camion");
  camionPaiement.forEach(element => {
    element.addEventListener('click', function () {
      this.classList.add('anim-rotate');
      sidebar.classList.add('anim-rotate-bar');
    });
  });

  // Paiement : click choix
  var btnRadio1 = document.getElementById('radio1');
  var btnRadio2 = document.getElementById('radio2');
  var btnRadio3 = document.getElementById('radio3');
  var ParentbtnRadio1 = document.getElementById('btn1');
  var ParentbtnRadio2 = document.getElementById('btn2');
  var ParentbtnRadio3 = document.getElementById('btn3');
  
  // Fonction pour retirer la classe 'inputChecked' de tous les éléments parents
  function removeInputCheckedClassFromAll() {
      ParentbtnRadio1.classList.remove('inputChecked');
      ParentbtnRadio2.classList.remove('inputChecked');
      ParentbtnRadio3.classList.remove('inputChecked');
  }
  
  // Fonction pour mettre à jour la classe de l'élément parent selon l'état du bouton radio
  function updateParentClass(btnRadio, parentElement) {
      if (btnRadio.checked) {
          removeInputCheckedClassFromAll(); // Retire la classe de tous les éléments parents
          parentElement.classList.add('inputChecked');
      }
  }
  
  // Ajout d'écouteurs d'événements de type 'change' pour les boutons radio
  btnRadio1.addEventListener('change', function() {
      updateParentClass(btnRadio1, ParentbtnRadio1);
  });
  
  btnRadio2.addEventListener('change', function() {
      updateParentClass(btnRadio2, ParentbtnRadio2);
  });
  
  btnRadio3.addEventListener('change', function() {
      updateParentClass(btnRadio3, ParentbtnRadio3);
  });
  
  // Au chargement initial de la page, vérifier et appliquer les classes correctement
  updateParentClass(btnRadio1, ParentbtnRadio1);
  updateParentClass(btnRadio2, ParentbtnRadio2);
  updateParentClass(btnRadio3, ParentbtnRadio3);
  


  //Header : bouton explosion 

  document.querySelector('.click-headerCart-explosion-trigger').addEventListener('click', function () {
    this.classList.add('click-headerCart-explosion');
  });

  // Homepage : étoile de la cover

  document.querySelectorAll('.shooting-stars').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Déclencher l'animation après le défilement
        setTimeout(() => {
          targetElement.classList.add('animate-stars');
        }, 500); // Ajustez ce délai en fonction du temps de défilement
      }
    });
  });


  //Homepage : product card hang btn


  document.querySelectorAll('.hp-product-cards-hang-btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Déclenchez l'animation après le défilement
        setTimeout(() => {
          document.querySelectorAll('.dp-card .dp-title button').forEach(button => {
            button.classList.add('hp-product-cards-hang-btn-animation');
          });
        }, 500); // Ce délai devrait être ajusté en fonction de la durée du défilement
      }
    });
  });

  //HP : changement de l'image au clique

  document.querySelector('.hp-click-switchImg').addEventListener('click', function () {
    document.querySelectorAll('.dp-card-img-wrapper').forEach(container => {
      const oldImage = container.querySelector('.hp-click-switchImg-animation');

      const newImage = document.createElement('img');
      newImage.src = 'images/sapin-sans-epine.png'; // Mettez à jour avec le nouveau chemin d'image
      newImage.alt = 'Nouvelle Image';
      newImage.classList.add('hp-click-switchImg-animation', 'hp-click-switchImg-hide');

      container.appendChild(newImage);

      setTimeout(() => {
        oldImage.classList.add('hp-click-switchImg-hide');
        newImage.classList.remove('hp-click-switchImg-hide');
      }, 500);

      oldImage.addEventListener('transitionend', () => {
        oldImage.remove();
      });
    });
  });

  // Header : tooltips

  document.getElementById('logoContainer').addEventListener('mouseover', function () {
    const tooltip = this.querySelector('.tooltip');
    tooltip.style.display = tooltip.style.display === 'none' ? 'block' : 'none';
  });

  // HP: modal d'entree

  // Ouvrir la modale au chargement de la page
  window.onload = function () {
    document.getElementById('myModal').style.display = "block";
  }

  // Fermer la modale lorsque l'utilisateur clique sur le symbole (×)
  document.getElementsByClassName('close')[0].addEventListener('click', function () {
    document.getElementById('myModal').style.display = "none";
  });


}

export { animationInit };