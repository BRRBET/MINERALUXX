// Validar y enviar formulario de registro
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password1 = document.getElementById('password1').value;
  const password2 = document.getElementById('password2').value;
  const password3 = document.getElementById('password3').value;
  const password4 = document.getElementById('password4').value;

  if (!email || !password1 || !password2 || !password3 || !password4) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  alert('Registro exitoso. Redirigiendo...');
  window.location.href = 'success.html'; // Cambia a la página de éxito
});

// Redirigir al iniciar sesión
document.getElementById('login').addEventListener('click', function () {
  window.location.href = 'login.html'; // Cambia a la página de inicio de sesión
});
