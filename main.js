document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      // Aquí puedes añadir un lightbox o un efecto de ampliación de la imagen
      alert('Imagen seleccionada');
    });
  });
  
window.addEventListener('scroll', function() {
  const imageContainer = document.querySelector('.image-container');
  const rect = imageContainer.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top <= windowHeight && rect.bottom >= 0) {
    imageContainer.classList.add('scrolled');
  } else {
    imageContainer.classList.remove('scrolled');
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



//SCRIPT DE EFECTO
document.addEventListener('DOMContentLoaded', function() {
  // Animación del texto desde la derecha hacia el centro
  ScrollReveal().reveal('.introduction-text', {
    origin: 'right', // El texto viene desde la derecha
    distance: '200px', // Distancia desde donde comienza el desplazamiento
    duration: 1200, // Duración de la animación en milisegundos
    easing: 'ease-in-out', // Suavizado de la animación
    reset: true, // Vuelve a animarse si se vuelve a hacer scroll
  });

  // Animación de la imagen desde la izquierda hacia el centro
  ScrollReveal().reveal('.introduction-image', {
    origin: 'left', // La imagen viene desde la izquierda
    distance: '200px',
    duration: 1200,
    easing: 'ease-in-out',
    reset: true,
  });
});






