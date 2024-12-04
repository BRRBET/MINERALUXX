// Validar y enviar formulario de registro
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();  // Evitar que el formulario se envíe y recargue la página

  const email = document.getElementById('email').value;
  const password1 = document.getElementById('password1').value;
  const password2 = document.getElementById('password2').value;
  const password3 = document.getElementById('password3').value;
  const password4 = document.getElementById('password4').value;

  // Validar si algún campo está vacío
  if (!email || !password1 || !password2 || !password3 || !password4) {
    alert('Por favor, completa todos los campos.');
    return;  // Detener la ejecución si falta algún campo
  }

  // Validar si las contraseñas coinciden
  if (password1 !== password2 || password3 !== password4) {
    alert('Las contraseñas no coinciden.');
    return;  // Detener si las contraseñas no coinciden
  }

  // Si todo está correcto, mostrar mensaje y redirigir
  alert('Registro exitoso. Redirigiendo...');
  window.location.href = "Home.html"; // Cambia a la página de éxito
});

// Redirigir al iniciar sesión
document.getElementById('login').addEventListener('click', function () {
  window.location.href = 'Login.html'; // Cambia a la página de inicio de sesión
});
