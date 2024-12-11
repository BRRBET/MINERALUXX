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

// Función para mostrar el enlace de referido y el ID
function displayReferralLink() {
  const referralCode = generateReferralCode(); // Obtener el código de referido
  const referralLink = `https://brrbet.github.io/MINERALUXPLUX/Registro.html?ref=${referralCode}`;

  // Mostrar el enlace en el campo de texto
  const referralLinkElement = document.getElementById("ref-link");
  referralLinkElement.value = referralLink;  // Mostrar el enlace de referido en el campo de texto

  // Mostrar el código de referido en el elemento con ID "random-id"
  const randomIdElement = document.getElementById("random-id");
  if (randomIdElement) {
    randomIdElement.textContent = referralCode; // Mostrar el código en el elemento ID
  }

  // Función para copiar al portapapeles
  function copyReferralLink() {
    referralLinkElement.select();  // Seleccionar el contenido del campo de texto
    document.execCommand("copy");  // Copiar al portapapeles
    alert("Enlace copiado al portapapeles!");
  }

  // Agregar el evento de clic al botón de copiar
  document.getElementById("copy-btn").addEventListener("click", copyReferralLink);
}

// Función para manejar el registro de un nuevo usuario
function handleNewUserRegistration() {
  const urlParams = new URLSearchParams(window.location.search);
  const referralCode = urlParams.get("ref"); // Obtener el código de referido de la URL

  if (referralCode) {
    localStorage.setItem("referralCodeFromURL", referralCode); // Guardar el código de referido desde la URL
  }
}

// Ejecutamos la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  // Llamar a la función para manejar el registro de nuevos usuarios
  handleNewUserRegistration();

  // Llamar a la función para mostrar el enlace de referido y el código en el ID
  displayReferralLink();
});
