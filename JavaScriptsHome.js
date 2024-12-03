// Función para mostrar el alert con la información de cómo funciona
function showAlert() {
  const infoMessage = `
    ¡Bienvenido a nuestra plataforma de robots!
    En nuestra página puedes invertir en robots para obtener ganancias pasivas.
    Cada robot tiene un precio de 15 USDT y genera 3 USDT diariamente.
    Además, al referir amigos podrás ganar comisiones adicionales.
    
    ¡Únete ahora y empieza a ganar!
  `;

  // Muestra la alerta con el mensaje de cómo funciona
  alert(infoMessage);
}

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
