document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      // Aquí puedes añadir un lightbox o un efecto de ampliación de la imagen
      alert('Imagen seleccionada');
    });
  });
  
  let ticking = false;

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const imageContainer = document.querySelector('.image-container');
        const rect = imageContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
        if (rect.top <= windowHeight && rect.bottom >= 50) {
          imageContainer.classList.add('scrolled');
        } else {
          imageContainer.classList.remove('scrolled');
        }
  
        ticking = false;
      });
  
      ticking = true;
    }
  });
  


document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  

  galleryItems.forEach(item => {
    // Añade la clase 'active' al hacer clic
    item.addEventListener('click', function() {
      this.classList.add('active');
    });

    // Remueve la clase 'active' cuando el mouse sale del elemento
    item.addEventListener('mouseleave', function() {
      this.classList.remove('active');
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const itemCount = items.length;
  let index = 0;

  function updateCarousel() {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  nextButton.addEventListener('click', function() {
    index = (index + 1) % itemCount;
    updateCarousel();
  });

  prevButton.addEventListener('click', function() {
    index = (index - 1 + itemCount) % itemCount;
    updateCarousel();
  });

  // Auto-play el carrusel cada 3 segundos
  setInterval(() => {
    nextButton.click();
  }, 7000);
});

