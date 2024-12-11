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

// Función para mostrar el enlace de referido
function displayReferralLink() {
  const referralCode = generateReferralCode(); // Obtener el código de referido
  const referralLink = `https://brrbet.github.io/MINERALUXPLUX/Registro.html?ref=${referralCode}`;

  // Actualizar el enlace de referido dentro del apartado "Enlace para compartir"
  const referralLinkContainer = document.getElementById("referral-container");
  if (referralLinkContainer) {
    referralLinkContainer.innerHTML = `
      <input type="text" id="ref-link" value="${referralLink}" readonly>
      <button id="copy-btn">Copiar</button>
    `;
  }

  // Agregar funcionalidad al botón para copiar el enlace al portapapeles
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

  // Llamar a la función para mostrar el enlace de referido
  displayReferralLink();
});
