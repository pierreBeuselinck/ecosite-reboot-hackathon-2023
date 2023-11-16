

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
      

      //FP : changement de l'image au clique

      document.querySelectorAll('.click-switchImg').forEach(button => {
        button.addEventListener('click', function() {
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
      

}

export { animationInit };