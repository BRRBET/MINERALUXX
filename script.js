document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  const form = document.getElementById('login-form');

  // Evento para el botón de login
  loginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí podrías agregar la lógica para validar el login
    console.log(`Login con correo: ${email} y contraseña: ${password}`);
  });

  // Evento para el botón de registro
  registerBtn.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'registro.html';  // Redirige a la página de registro
  });
});
