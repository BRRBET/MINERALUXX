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

// Función para mostrar el enlace de referido y el código en su lugar correspondiente
function displayReferralLink() {
  const referralCode = generateReferralCode(); // Obtener el código de referido
  const referralLink = `https://brrbet.github.io/MINERALUXPLUX/Registro.html?ref=${referralCode}`;

  // Mostrar el código de referido en el apartado ID
  const referralCodeElement = document.getElementById("random-id");
  if (referralCodeElement) {
    referralCodeElement.textContent = referralCode; // Mostrar el código único
  }

  // Mostrar el enlace dentro del apartado "Enlace para compartir"
  const referralLinkContainer = document.querySelector(".share-box");
  if (referralLinkContainer) {
    referralLinkContainer.innerHTML = `
      <input type="text" id="referral-link" value="${referralLink}" readonly>
      <button id="copy-btn">Copiar</button>
    `;
  }

  // Agregar funcionalidad al botón para copiar el enlace al portapapeles
  const copyButton = document.getElementById("copy-btn");
  if (copyButton) {
    copyButton.addEventListener("click", () => {
      const referralLinkElement = document.getElementById("referral-link");
      if (referralLinkElement) {
        referralLinkElement.select(); // Seleccionar el contenido
        document.execCommand("copy"); // Copiar al portapapeles
        alert("Enlace copiado al portapapeles!");
      }
    });
  }
}

// Función para manejar el registro de un nuevo usuario y actualizar el contador
function handleNewUserRegistration() {
  const urlParams = new URLSearchParams(window.location.search);
  const referralCode = urlParams.get("ref"); // Obtener el código de referido de la URL

  if (referralCode) {
    // Incrementar el contador de referidos para el código correspondiente
    let referrals = JSON.parse(localStorage.getItem("referrals")) || {};

    // Si es la primera vez que se ve este código, inicializarlo
    if (!referrals[referralCode]) {
      referrals[referralCode] = 0;
    }

    // Incrementar el contador de referidos
    referrals[referralCode] += 1;

    // Guardar el contador actualizado de referidos en localStorage
    localStorage.setItem("referrals", JSON.stringify(referrals));

    // Guardar el código de referido de este usuario en localStorage
    localStorage.setItem("referralCode", referralCode);
  }
}

// Función para mostrar el contador de referidos en el home
function displayReferralStats() {
  const referralCode = localStorage.getItem("referralCode"); // Obtener el código del usuario actual
  const referrals = JSON.parse(localStorage.getItem("referrals")) || {};
  const nivel1Count = referrals[referralCode] || 0; // Número de referidos de Nivel 1

  // Actualizar el contador en la página
  const nivel1CounterElement = document.querySelector(".nivel1-counter");
  if (nivel1CounterElement) {
    nivel1CounterElement.textContent = nivel1Count; // Mostrar el contador de referidos
  }
}

// Ejecutar funciones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  // Llamar a la función para manejar el registro de nuevos usuarios
  handleNewUserRegistration();

  // Llamar a la función para mostrar el enlace y el código
  displayReferralLink();

  // Llamar a la función para mostrar las estadísticas en el home
  displayReferralStats();
});
