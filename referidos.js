// Función para generar un código único de referido de 6 dígitos
function generateReferralCode() {
  let referralCode = localStorage.getItem("referralCode");

  if (!referralCode) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    referralCode = "";
    for (let i = 0; i < 6; i++) {
      referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    localStorage.setItem("referralCode", referralCode);
  }

  return referralCode;
}

// Función para mostrar el enlace de referido y el código en su lugar correspondiente
function displayReferralLink() {
  const referralCode = generateReferralCode();
  const referralLink = `https://brrbet.github.io/MINERALUXPLUX/Registro.html?ref=${referralCode}`;

  const referralCodeElement = document.getElementById("random-id");
  if (referralCodeElement) {
    referralCodeElement.textContent = referralCode;
  }

  const referralLinkContainer = document.querySelector(".share-box");
  if (referralLinkContainer) {
    referralLinkContainer.innerHTML = `
      <input type="text" id="referral-link" value="${referralLink}" readonly>
      <button id="copy-btn">Copiar</button>
    `;

    const copyButton = document.getElementById("copy-btn");
    if (copyButton) {
      copyButton.addEventListener("click", () => {
        const referralLinkElement = document.getElementById("referral-link");
        if (referralLinkElement) {
          referralLinkElement.select();
          document.execCommand("copy");
          alert("Enlace copiado al portapapeles!");
        }
      });
    }
  }
}

// Función para manejar el registro de un nuevo usuario y actualizar el contador
function handleNewUserRegistration() {
  const urlParams = new URLSearchParams(window.location.search);
  const referralCode = urlParams.get("ref");

  let referrals = JSON.parse(localStorage.getItem("referrals")) || {};

  if (referralCode) {
    if (!referrals[referralCode]) {
      referrals[referralCode] = 0;
    }

    referrals[referralCode] += 1;

    localStorage.setItem("referrals", JSON.stringify(referrals));
    localStorage.setItem("referralCode", referralCode);
  }
}

// Función para mostrar estadísticas de referidos
function displayReferralStats() {
  const referralCode = localStorage.getItem("referralCode");
  const referrals = JSON.parse(localStorage.getItem("referrals")) || {};
  const nivel1Count = referrals[referralCode] || 0;

  const nivel1CounterElement = document.querySelector(".nivel1-counter");
  if (nivel1CounterElement) {
    nivel1CounterElement.textContent = nivel1Count;
  }
}

// Función para mostrar la información del usuario
function displayUserInfo() {
  const referralCode = localStorage.getItem("referralCode");
  const referralCodeElement = document.getElementById("random-id");

  if (referralCodeElement) {
    referralCodeElement.textContent = referralCode;
  }

  displayReferralStats();
}

// Función para gestionar el comportamiento de la página
function handleRegistrationPage() {
  handleNewUserRegistration();
  displayReferralLink();
  displayReferralStats();
}

// Inicialización de la página
function initializePage() {
  handleRegistrationPage();
  displayUserInfo();
}

// Ejecutar al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  initializePage();
});
