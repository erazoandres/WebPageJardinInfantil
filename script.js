// Seleccionar todos los elementos de video
const videos = document.querySelectorAll('.service-card video');

// Función para pausar todos los videos
function pauseAllVideos() {
  videos.forEach(video => {
    if (!video.paused) { // Si el video está reproduciéndose
      video.pause();     // Pausa el video
      video.currentTime = 0; // Vuelve al inicio
    }
  });
}

// Agregar un evento de reproducción a cada video
videos.forEach(video => {
  video.addEventListener('play', function() {
    // Pausar todos los videos cuando uno empiece a reproducirse
    pauseAllVideos();
    this.play(); // Reproducir el video actual
  });
});

// Seleccionar todos los elementos de video
const videos = document.querySelectorAll('.service-card video');

// Función para pausar todos los videos
function pauseAllVideos() {
  videos.forEach(video => {
    if (!video.paused) { // Si el video está reproduciéndose
      video.pause();     // Pausa el video
      video.currentTime = 0; // Vuelve al inicio
    }
  });
}

// Agregar un evento de reproducción a cada video
videos.forEach(video => {
  video.addEventListener('play', function() {
    // Pausar todos los videos cuando uno empiece a reproducirse
    pauseAllVideos();
    this.play(); // Reproducir el video actual
  });
});

