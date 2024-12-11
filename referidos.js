// Seleccionamos los elementos relacionados con el contador de Nivel 1
const nivel1CounterElement = document.querySelector(".referido-card:nth-child(1) .proncentage");
const nivel1TotalElement = document.querySelector(".referido-card:nth-child(1) .porcentage");

// Inicializamos el contador en 0 para asegurar que siempre comience desde cero
let nivel1Counter = 0;

// Función para generar un código único de referido
function generateReferralCode() {
  // Verificar si ya existe un código de referido almacenado
  let referralCode = localStorage.getItem("referralCode");

  if (!referralCode) {
    // Si no existe, generar un nuevo código único (por ejemplo, un ID aleatorio)
    referralCode = "REF" + Math.random().toString(36).substr(2, 9);  // Genera un código aleatorio
    localStorage.setItem("referralCode", referralCode);  // Guardar el código en localStorage
  }

  return referralCode;
}

// Función para mostrar el enlace de referido
function displayReferralLink() {
  const referralCode = generateReferralCode();
  const referralLink = `https://brrbet.github.io/MINERALUXPLUX/Registro.html?ref=${referralCode}`;

  // Mostrar el enlace en la página (puedes modificar el ID para tu estructura de HTML)
  const referralLinkElement = document.getElementById("referral-link");
  referralLinkElement.textContent = referralLink;  // Mostrar el enlace de referido
  referralLinkElement.href = referralLink;  // Establecer el href del enlace
}

// Función para incrementar el contador de referidos cuando el usuario esté en Home.html
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
  // Mostrar el valor actual del contador (si está en cero, se mostrará cero siempre)
  nivel1CounterElement.textContent = nivel1Counter;
  nivel1TotalElement.textContent = "0.00"; // Ganancia inicial en cero

  // Llamar a la función para incrementar referidos si el usuario está en Home.html
  incrementReferidos();

  // Llamar a la función para mostrar el enlace de referido
  displayReferralLink();
});
