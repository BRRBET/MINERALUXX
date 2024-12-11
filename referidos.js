// Función para generar un código único de referido de 6 dígitos
function generateReferralCode() {
  let referralCode = localStorage.getItem("referralCode");

  if (!referralCode) {
    // Generar un código aleatorio de 6 caracteres alfanuméricos
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    referralCode = '';
    for (let i = 0; i < 6; i++) {
      referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    localStorage.setItem("referralCode", referralCode); // Guardar en localStorage
  }

  return referralCode;
}

// Función para mostrar el enlace de referido y el código de ID
function displayReferralLink() {
  const referralCode = generateReferralCode(); // Obtener el código de referido
  const referralLink = `https://brrbet.github.io/MINERALUXPLUX/Registro.html?ref=${referralCode}`;

  // Mostrar el enlace en el campo de texto
  const referralLinkElement = document.getElementById("ref-link");
  if (referralLinkElement) {
    referralLinkElement.value = referralLink; // Mostrar el enlace en el campo de texto
  }

  // Mostrar el código de referido en el elemento con ID "random-id"
  const randomIdElement = document.getElementById("random-id");
  if (randomIdElement) {
    randomIdElement.textContent = referralCode; // Mostrar el código en el elemento
  }

  // Función para copiar el enlace al portapapeles
  const copyButton = document.getElementById("copy-btn");
  if (copyButton) {
    copyButton.addEventListener("click", () => {
      if (referralLinkElement) {
        referralLinkElement.select(); // Seleccionar el contenido
        document.execCommand("copy"); // Copiar al portapapeles
        alert("Enlace copiado al portapapeles!");
      }
    });
  }
}

// Función para actualizar el contador de referidos (Nivel 1)
function updateReferralCount(referralCode) {
  const storedReferralCode = localStorage.getItem("referralCode");

  // Validar si el código de referido coincide con el del usuario actual
  if (referralCode === storedReferralCode) {
    let nivel1Counter = parseInt(localStorage.getItem("nivel1Counter")) || 0;
    nivel1Counter += 1; // Incrementar el contador
    localStorage.setItem("nivel1Counter", nivel1Counter); // Guardar el nuevo valor

    // Actualizar la visualización en la página
    const nivel1CounterElement = document.querySelector(".referido-card:nth-child(1) .proncentage");
    if (nivel1CounterElement) {
      nivel1CounterElement.textContent = nivel1Counter;
    }
  }
}

// Función para manejar el registro de un nuevo usuario
function handleNewUserRegistration() {
  const urlParams = new URLSearchParams(window.location.search);
  const referralCode = urlParams.get("ref"); // Obtener el código de referido de la URL

  if (referralCode) {
    updateReferralCount(referralCode); // Actualizar el contador de referidos
  }
}

// Ejecutar las funciones cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar el enlace de referido y el ID
  displayReferralLink();

  // Manejar el registro de nuevos usuarios
  handleNewUserRegistration();
});
