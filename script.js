// Seleccionar todos los elementos de video dentro de "service-card"
const serviceCards = document.querySelectorAll('.service-card');

// Función para pausar todos los videos y reiniciarlos
function pauseAllVideos() {
  serviceCards.forEach(card => {
    const video = card.querySelector('video');
    if (!video.paused) {
      video.pause();
      video.currentTime = 0; // Reinicia el video
    }
  });
}

// Agregar un evento de clic a cada tarjeta de servicio
serviceCards.forEach(card => {
  card.addEventListener('click', function() {
    const video = this.querySelector('video'); // Obtener el video dentro de la tarjeta

    // Pausar otros videos antes de reproducir el seleccionado
    pauseAllVideos();

    // Si el video está en silencio (muted), activamos el sonido
    video.muted = false;

    // Reproducir el video si no se está reproduciendo ya
    if (video.paused) {
      video.play();
    }
  });
});
