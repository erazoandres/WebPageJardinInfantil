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

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form form');
  const modal = document.getElementById('success-modal');
  const closeButton = document.querySelector('.close-button');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío real del formulario (para demostración)

    // Aquí podrías agregar la lógica para enviar el formulario a un servidor, si es necesario

    modal.style.display = 'block'; // Mostrar el modal
  });

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none'; // Ocultar el modal cuando se hace clic en el botón de cerrar
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none'; // Ocultar el modal cuando se hace clic fuera del modal
    }
  });
});