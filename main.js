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
