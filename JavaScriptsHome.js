// Redirigir a otra página
function redirectTo(url) {
  window.location.href = url;
}

// Carrusel de imágenes
const carousel = document.getElementById('carousel');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;

setInterval(() => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}, 5000);
