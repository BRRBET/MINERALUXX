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

// Función para mostrar el enlace de referido en la página
function displayReferralLink() {
  const referralCode = generateReferralCode(); // Obtener el código de referido
  const referralLink = `https://brrbet.github.io/MINERALUXPLUX/Registro.html?ref=${referralCode}`;

  // Mostrar el enlace en la página (puedes modificar el ID para tu estructura de HTML)
  const referralLinkElement = document.getElementById("referral-link");
  referralLinkElement.textContent = referralLink;  // Mostrar el enlace de referido
  referralLinkElement.href = referralLink;  // Establecer el href del enlace
}

// Función para incrementar el contador de referidos cuando el usuario esté en Home.html
const nivel1CounterElement = document.querySelector(".referido-card:nth-child(1) .proncentage");
const nivel1TotalElement = document.querySelector(".referido-card:nth-child(1) .porcentage");

let nivel1Counter = parseInt(localStorage.getItem("nivel1Counter")) || 0;  // Obtener el contador de referidos

function incrementReferidos() {
  // Si el usuario está en la página Home.html
  if (window.location.href === "https://brrbet.github.io/MINERALUXPLUX/Home.html") {
    nivel1Counter += 1; // Incrementa en 1
    localStorage.setItem("nivel1Counter", nivel1Counter); // Guardar en almacenamiento local

    // Actualizar la visualización
    nivel1CounterElement.textContent = nivel1Counter;
    nivel1TotalElement.textContent = "0.00"; // Ganancia permanece en cero
  }
}

// Ejecutamos la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  // Llamar a la función para incrementar referidos si el usuario está en Home.html
  incrementReferidos();

  // Llamar a la función para mostrar el enlace de referido
  displayReferralLink();
});
