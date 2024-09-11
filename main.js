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
    item.addEventListener('click', function() {
      // Alternar la clase 'active' en el elemento clicado
      this.classList.toggle('active');
    });

    // Remueve la clase 'active' cuando el mouse sale del elemento
    item.addEventListener('mouseleave', function() {
      this.classList.remove('active');
    });
  });
});

