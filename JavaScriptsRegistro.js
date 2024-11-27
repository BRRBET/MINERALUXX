// Evento para enviar el código por correo
document.getElementById('sendCode').addEventListener('click', function () {
  const email = document.getElementById('email').value;

  if (email) {
    // Simula el envío del correo con el código de verificación
    const verificationCode = Math.floor(1000 + Math.random() * 9000); // Genera un código de 4 dígitos
    alert(`Código de verificación enviado a: ${email}`);
    console.log(`Código generado: ${verificationCode}`); // Solo para pruebas, eliminar en producción

    // Aquí puedes integrar un servicio real de envío de correos
    // Ejemplo: Llamar a una API con Fetch o Axios para enviar el código al correo
  } else {
    alert('Por favor, ingresa un correo electrónico válido.');
  }
});

// Evento para manejar el inicio de sesión
document.getElementById('login').addEventListener('click', function () {
  // Redirige a la página de inicio de sesión
  window.location.href = 'login.html'; // Cambia 'login.html' por la ruta correcta
});
