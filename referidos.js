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

  // Mostrar el enlace en el campo de texto
  const referralLinkElement = document.getElementById("ref-link");
  referralLinkElement.value = referralLink;  // Mostrar el enlace de referido en el campo de texto

  // Mostrar el mismo código en el ID
  const randomIdElement = document.getElementById("random-id");
  randomIdElement.textContent = referralCode; // Mostrar el código en el elemento ID

  // Función para copiar al portapapeles
  function copyReferralLink() {
    referralLinkElement.select();  // Seleccionar el contenido del campo de texto
    document.execCommand("copy");  // Copiar al portapapeles
    alert("Enlace copiado al portapapeles!");
  }

  // Agregar el evento de clic al botón de copiar
  document.getElementById("copy-btn").addEventListener("click", copyReferralLink);
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

  // Llamar a la función para mostrar el enlace de referido y el ID
  displayReferralLink();
});
