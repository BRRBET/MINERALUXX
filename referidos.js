// Función para generar un código único de referido de 6 caracteres alfanuméricos
function generateReferralCode() {
  let referralCode = localStorage.getItem("referralCode");

  if (!referralCode) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let isUnique = false;

    while (!isUnique) {
      referralCode = Array.from({ length: 6 }, () =>
        characters.charAt(Math.floor(Math.random() * characters.length))
      ).join('');

      // Obtener la lista de referidos existentes
      const referrals = JSON.parse(localStorage.getItem("referrals")) || {};
      if (!referrals[referralCode]) {
        isUnique = true;
      }
    }

    // Guardar el código único en localStorage
    localStorage.setItem("referralCode", referralCode);

    const referrals = JSON.parse(localStorage.getItem("referrals")) || {};
    referrals[referralCode] = 0; // Inicializar contador de referidos
    localStorage.setItem("referrals", JSON.stringify(referrals));
  }

  return referralCode;
}

// Función para mostrar el enlace de referido y el código
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
  }

  const copyButton = document.getElementById("copy-btn");
  if (copyButton) {
    copyButton.addEventListener("click", () => {
      const referralLinkElement = document.getElementById("referral-link");
      if (referralLinkElement) {
        navigator.clipboard.writeText(referralLinkElement.value)
          .then(() => alert("¡Enlace copiado al portapapeles!"))
          .catch(() => alert("Error al copiar el enlace."));
      }
    });
  }
}

// Función para manejar el registro de un nuevo usuario
function handleNewUserRegistration() {
  const urlParams = new URLSearchParams(window.location.search);
  const referralCode = urlParams.get("ref");

  if (referralCode) {
    // Obtener la lista de referidos desde localStorage
    const referrals = JSON.parse(localStorage.getItem("referrals")) || {};
    console.log("Referidos actuales:", referrals); // Depuración para verificar los referidos

    // Validar si el código existe en la lista de referidos
    if (referrals[referralCode] !== undefined) {
      referrals[referralCode] += 1; // Incrementar el contador de referidos
      localStorage.setItem("referrals", JSON.stringify(referrals));
      alert("¡Registro exitoso con el código de invitación!");
    } else {
      console.error("Código no encontrado:", referralCode); // Depuración si el código no existe
      alert("Código de invitación inválido. Por favor, verifica el enlace.");
    }
  } else {
    console.warn("No se encontró ningún código en la URL."); // Depuración si no hay código en la URL
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

// Inicializar la página
document.addEventListener("DOMContentLoaded", () => {
  displayReferralLink();

  // Si estamos en la página de registro, manejar el proceso de registro
  if (window.location.pathname.includes("Registro.html")) {
    handleNewUserRegistration();
  }

  // Mostrar estadísticas de referidos
  displayReferralStats();
});
