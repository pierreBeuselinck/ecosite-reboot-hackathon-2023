function setupTitleHangAnimation() {
  document.querySelectorAll('.click-hang').forEach(element => {
    element.addEventListener('click', function() {
      this.classList.add('click-hang-animate');
    });
  });
}

function setupTitleFalldownAnimation() {
  document.querySelectorAll('.click-falldown').forEach(triggerElement => {
    triggerElement.addEventListener('click', function() {
      document.querySelectorAll('.click-falldown-target').forEach(targetElement => {
        targetElement.classList.add('click-falldown-animation');
      });
    });
  });
}

function setupAvisFalldownAnimation() {
  document.querySelectorAll('.click-falldown-faq').forEach(element => {
    element.addEventListener('click', function() {
      this.classList.add('click-falldown-faq-animation');
    });
  });
}

function setupParagrapheFalldownAnimation() {
  document.querySelectorAll('.click-letterFalldown').forEach(button => {
    button.addEventListener('click', function() {
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
}

function setupImageSwitchOnClick() {
  document.querySelectorAll('.click-switchImg').forEach(button => {
    button.addEventListener('click', function() {
      const imageContainers = document.querySelectorAll('.c-product-page__visual-wrapper');
      imageContainers.forEach(imageContainer => {
        const oldImage = imageContainer.querySelector('.click-switchImg-animation');
        if (oldImage) {
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
        }
      });
    });
  });
}

function setupHeaderButtonExplosion() {
  const explosionTrigger = document.querySelector('.click-headerCart-explosion-trigger');
  if (explosionTrigger) {
    explosionTrigger.addEventListener('click', function() {
      this.classList.add('click-headerCart-explosion');
    });
  }
}

function setupShootingStarsAnimation() {
  document.querySelectorAll('.shooting-stars').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          targetElement.classList.add('animate-stars');
        }, 500);
      }
    });
  });
}

function setupProductCardHangAnimation() {
  document.querySelectorAll('.hp-product-cards-hang-btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          document.querySelectorAll('.dp-card .dp-title button').forEach(button => {
            button.classList.add('hp-product-cards-hang-btn-animation');
          });
        }, 500);
      }
    });
  });
}

function setupHpImageSwitchOnClick() {
  const hpImageSwitch = document.querySelector('.hp-click-switchImg');
  if (hpImageSwitch) {
    hpImageSwitch.addEventListener('click', function() {
      document.querySelectorAll('.dp-card-img-wrapper').forEach(container => {
        const oldImage = container.querySelector('.hp-click-switchImg-animation');
        if (oldImage) {
          const newImage = document.createElement('img');
          newImage.src = 'images/sapin-sans-epine.png';
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
        }
      });
    });
  }
}

function setupHeaderTooltips() {
  const logoContainer = document.getElementById('logoContainer');
  if (logoContainer) {
    logoContainer.addEventListener('mouseover', function() {
      const tooltip = this.querySelector('.tooltip');
      if (tooltip) {
        tooltip.style.display = tooltip.style.display === 'none' ? 'block' : 'none';
      }
    });
  }
}

function setupModalEntry() {
  const modal = document.getElementById('myModal');
  if (modal) {
    window.onload = function () {
      modal.style.display = "block";
    }

    const closeModalElements = document.querySelectorAll('.close, .agree');
    closeModalElements.forEach(element => {
      element.addEventListener('click', function () {
        modal.style.display = "none";
      });
    });
  }
}

function setupCamionPaiementClick() {
  const sidebar = document.getElementById("animSidebar");
  const camionPaiement = document.querySelectorAll(".barre-avancement-camion");
  if (sidebar) {
    camionPaiement.forEach(element => {
      element.addEventListener('click', function () {
        this.classList.add('anim-rotate');
        sidebar.classList.add('anim-rotate-bar');
      });
    });
  }
}

function setupPaiementClickChoice() {
  const btnRadioElements = [
    { radio: 'radio1', parent: 'btn1' },
    { radio: 'radio2', parent: 'btn2' },
    { radio: 'radio3', parent: 'btn3' },
  ];

  btnRadioElements.forEach(({ radio, parent }) => {
    const btnRadio = document.getElementById(radio);
    const parentBtnRadio = document.getElementById(parent);

    if (btnRadio && parentBtnRadio) {
      btnRadio.addEventListener('change', function () {
        btnRadioElements.forEach(({ parent }) => {
          const parentElement = document.getElementById(parent);
          if (parentElement) {
            parentElement.classList.remove('inputChecked');
          }
        });
        parentBtnRadio.classList.add('inputChecked');
      });

      // Au chargement initial de la page
      if (btnRadio.checked) {
        parentBtnRadio.classList.add('inputChecked');
      }
    }
  });
}

function animationInit() {
  setupTitleHangAnimation();
  setupTitleFalldownAnimation();
  setupAvisFalldownAnimation();
  setupParagrapheFalldownAnimation();
  setupImageSwitchOnClick();
  setupHeaderButtonExplosion();
  setupShootingStarsAnimation();
  setupProductCardHangAnimation();
  setupHpImageSwitchOnClick();
  setupHeaderTooltips();
  setupModalEntry();
  setupCamionPaiementClick();
  setupPaiementClickChoice();
}

export { animationInit };
