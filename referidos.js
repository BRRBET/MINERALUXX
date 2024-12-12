// Función para generar un código único de referido de 6 caracteres alfanuméricos
function generateReferralCode() {
  let referralCode = localStorage.getItem("referralCode");

  if (!referralCode) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let isUnique = false;

    // Verificar unicidad del código generado
    while (!isUnique) {
      referralCode = '';
      for (let i = 0; i < 6; i++) {
        referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      // Validar contra la lista de referidos existentes
      const referrals = JSON.parse(localStorage.getItem("referrals")) || {};
      if (!referrals[referralCode]) {
        isUnique = true;
      }
    }

    // Guardar el código único en localStorage
    localStorage.setItem("referralCode", referralCode);
    let referrals = JSON.parse(localStorage.getItem("referrals")) || {};
    referrals[referralCode] = 0; // Inicializar el contador de referidos
    localStorage.setItem("referrals", JSON.stringify(referrals));
  }

  return referralCode;
}

// Función para mostrar el enlace de referido y el código
function displayReferralLink() {
  const referralCode = generateReferralCode(); // Obtener el código de referido
  const referralLink = `https://brrbet.github.io/MINERALUXPLUX/Registro.html?ref=${referralCode}`;

  // Mostrar el código de referido
  const referralCodeElement = document.getElementById("random-id");
  if (referralCodeElement) {
    referralCodeElement.textContent = referralCode;
  }

  // Mostrar el enlace de referido en un input para copiar
  const referralLinkContainer = document.querySelector(".share-box");
  if (referralLinkContainer) {
    referralLinkContainer.innerHTML = `
      <input type="text" id="referral-link" value="${referralLink}" readonly>
      <button id="copy-btn">Copiar</button>
    `;
  }

  // Funcionalidad para copiar el enlace al portapapeles
  const copyButton = document.getElementById("copy-btn");
  if (copyButton) {
    copyButton.addEventListener("click", () => {
      const referralLinkElement = document.getElementById("referral-link");
      if (referralLinkElement) {
        referralLinkElement.select();
        document.execCommand("copy");
        alert("¡Enlace copiado al portapapeles!");
      }
    });
  }
}

// Función para manejar el registro de un nuevo usuario
function handleNewUserRegistration() {
  const urlParams = new URLSearchParams(window.location.search);
  const referralCode = urlParams.get("ref"); // Obtener el código de referido desde la URL

  if (referralCode) {
    let referrals = JSON.parse(localStorage.getItem("referrals")) || {};

    // Validar si el código existe
    if (referrals.hasOwnProperty(referralCode)) {
      referrals[referralCode] += 1; // Incrementar el contador de referidos
      localStorage.setItem("referrals", JSON.stringify(referrals));
      localStorage.setItem("referralCode", referralCode);
      alert("¡Registro exitoso con el código de invitación!");
    } else {
      alert("Código de invitación inválido. Por favor, verifica el enlace.");
    }
  }
}

// Función para mostrar estadísticas de referidos
function displayReferralStats() {
  const referralCode = localStorage.getItem("referralCode"); // Código del usuario actual
  const referrals = JSON.parse(localStorage.getItem("referrals")) || {};
  const nivel1Count = referrals[referralCode] || 0; // Número de referidos directos

  // Mostrar el contador en la página
  const nivel1CounterElement = document.querySelector(".nivel1-counter");
  if (nivel1CounterElement) {
    nivel1CounterElement.textContent = nivel1Count;
  }
}

// Inicializar la página y gestionar el flujo
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar el enlace de referido
  displayReferralLink();

  // Manejar el registro si es una página de registro
  const isRegistrationPage = window.location.pathname.includes("Registro.html");
  if (isRegistrationPage) {
    handleNewUserRegistration();
  }

  // Mostrar estadísticas si corresponde
  displayReferralStats();
});
