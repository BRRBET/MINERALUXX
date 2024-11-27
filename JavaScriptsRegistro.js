// Simula el envío del código por correo
document.getElementById('sendCode').addEventListener('click', function () {
  const email = document.getElementById('email').value;

  if (email) {
    alert(`Código de verificación enviado a ${email}`);
    // Simulación de generación de código (integrar backend para producción)
    const verificationCode = Math.floor(1000 + Math.random() * 9000);
    console.log(`Código generado: ${verificationCode}`);
  } else {
    alert('Por favor, ingresa un correo electrónico válido.');
  }
});

// Validar el formulario
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!email || !password || !confirmPassword) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  alert('Registro exitoso. Redirigiendo...');
  window.location.href = 'success.html'; // Cambia a la página de éxito
});

// Redirigir a Iniciar Sesión
document.getElementById('login').addEventListener('click', function () {
  window.location.href = 'login.html'; // Cambia a la página de inicio de sesión
});
