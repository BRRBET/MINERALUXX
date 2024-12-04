// Generar un ID aleatorio al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const randomId = Math.floor(100000 + Math.random() * 900000); // ID aleatorio de 6 dígitos
  document.getElementById("random-id").textContent = randomId;

  // Copiar enlace al portapapeles
  const copyBtn = document.getElementById("copy-btn");
  const refLink = document.getElementById("ref-link");

  copyBtn.addEventListener("click", () => {
    refLink.select();
    refLink.setSelectionRange(0, 99999); // Para dispositivos móviles
    navigator.clipboard.writeText(refLink.value);
    alert("Enlace copiado al portapapeles.");
  });
});
