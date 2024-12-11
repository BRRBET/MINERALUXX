// Función para generar un código único de referido de 6 dígitos
function generateReferralCode() {
  let referralCode = localStorage.getItem("referralCode");

  if (!referralCode) {
    // Genera un código aleatorio de 6 caracteres alfanuméricos
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    referralCode = '';
    for (let i = 0; i < 6; i++) {
      referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    localStorage.setItem("referralCode", referralCode); // Guardar en localStorage
  }

  return referralCode;
}

// Función para mostrar el enlace de referido y el código en su lugar
function displayReferralLink() {
  const referralCode = generateReferralCode(); // Obtener el código de referido
  const referralLink = `https://brrbet.github.io/MINERALUXPLUX/Registro.html?ref=${referralCode}`;

  // Actualizar el código de referido en el apartado superior
  const referralCodeElement = document.getElementById("random-id");
  if (referralCodeElement) {
    referralCodeElement.textContent = referralCode; // Mostrar el código de referido
  }

  // Actualizar el enlace de referido dentro del mismo apartado
  const referralContainer = document.getElementById("referral-container");
  if (referralContainer) {
    referralContainer.innerHTML = `
      <input type="text" id="ref-link" value="${referralLink}" readonly>
      <button id="copy-btn">Copiar enlace</button>
    `;
  }

  // Función para copiar al portapapeles
  const copyButton = document.getElementById("copy-btn");
  if (copyButton) {
    copyButton.addEventListener("click", () => {
      const referralLinkElement = document.getElementById("ref-link");
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

  // Validar si el código de referido coincide con el código del usuario actual
  if (referralCode === storedReferralCode) {
    let nivel1Counter = parseInt(localStorage.getItem("nivel1Counter")) || 0;
    nivel1Counter += 1; // Incrementar el contador
    localStorage.setItem("nivel1Counter", nivel1Counter); // Guardar el nuevo valor

    // Actualizar la visualización en la página
    const nivel1CounterElement = document.querySelector(".referido-card:nth-child(1) .proncentage");
    nivel1CounterElement.textContent = nivel1Counter;
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

// Ejecutamos la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  // Llamar a la función para manejar el registro de nuevos usuarios
  handleNewUserRegistration();

  // Llamar a la función para mostrar el enlace de referido y el ID
  displayReferralLink();
});
