// Alerta al entrar a la página
window.onload = function () {
  if (!localStorage.getItem('alertShown')) {
    alert(
      'Bienvenido a nuestra plataforma. Puedes adquirir robots desde 15 USDT, generando ganancias diarias de 3 USDT.'
    );
    localStorage.setItem('alertShown', 'true');
  }
};

// Función del carrusel de imágenes
let carouselIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
  images.forEach((img, index) => {
    img.style.opacity = index === carouselIndex ? '1' : '0';
  });
  carouselIndex = (carouselIndex + 1) % images.length;
}

setInterval(showNextImage, 5000);

// Función de botones de compra
const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Has seleccionado un robot. ¡Completa tu compra en la página de pagos!');
  });
});

// Función de navegación de los botones inferiores
document.querySelectorAll('.button-circle').forEach((button, index) => {
  button.addEventListener('click', () => {
    const pages = [
      'Home.html',
      'Retiros.html',
      'CompraRobots.html',
      'Invitados.html',
      'Perfil.html',
    ];
    window.location.href = pages[index];
  });
});
