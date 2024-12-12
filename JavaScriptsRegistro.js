// Código de referido permanente
const permanentReferralCode = '7WDLSM';

// Función para mostrar el código de referencia en el formulario de registro
function displayReferralCodeInForm() {
  const referralCode = permanentReferralCode; // Usar el código permanente
  const referralCodeField = document.getElementById('invitationCode'); // Obtener el campo "Código de referencia"
  referralCodeField.value = referralCode; // Mostrar el código en el campo de texto
}

// Función para manejar el registro de nuevos usuarios y almacenar el código de invitación
function handleNewUserRegistration() {
  const urlParams = new URLSearchParams(window.location.search);
  const referralCode = urlParams.get('ref'); // Obtener el código de referido de la URL

  if (referralCode) {
    // Si el código de referido está presente en la URL
    localStorage.setItem('referralCodeFromURL', referralCode); // Guardar el código de referido en localStorage
  }
}

// Validar y enviar formulario de registro
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();  // Evitar que el formulario se envíe y recargue la página

  const email = document.getElementById('email').value;
  const password1 = document.getElementById('password1').value;
  const password2 = document.getElementById('password2').value;
  const invitationCode = document.getElementById('invitationCode').value;

  // Validar si algún campo está vacío
  if (!email || !password1 || !password2 || !invitationCode) {
    alert('Por favor, completa todos los campos.');
    return;  // Detener la ejecución si falta algún campo
  }

  // Validar si las contraseñas coinciden
  if (password1 !== password2) {
    alert('Las contraseñas no coinciden.');
    return;  // Detener si las contraseñas no coinciden
  }

  // Verificar si el código de invitación coincide con el código de referido almacenado
  const storedReferralCode = localStorage.getItem('referralCodeFromURL');
  if (storedReferralCode && invitationCode !== storedReferralCode) {
    alert('El código de invitación no es válido.');
    return;  // Detener si el código no coincide
  }

  // Si todo está correcto, mostrar mensaje y redirigir
  alert('Registro exitoso. Redirigiendo...');
  window.location.href = "Home.html"; // Cambia a la página de éxito
});

// Redirigir al iniciar sesión
document.getElementById('login').addEventListener('click', function () {
  window.location.href = 'Login.html'; // Cambia a la página de inicio de sesión
});

// Llamar a la función para manejar el registro de nuevos usuarios al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar el código de referido en el formulario
  displayReferralCodeInForm();

  // Llamar a la función para manejar el registro de nuevos usuarios
  handleNewUserRegistration();
});
