const mineButton = document.getElementById('mineButton');
const minerImage = document.getElementById('minerImage');
const statusMessage = document.getElementById('statusMessage');

// Configura el botón como activado desde el inicio
mineButton.disabled = false;

mineButton.addEventListener('click', () => {
  // Cambiar mensaje y animar al enano
  statusMessage.textContent = "Jeje estoy minando, ¡espera!";
  minerImage.style.animation = "mining 0.5s infinite";

  // Inicia la minería por 30 segundos
  setTimeout(() => {
    minerImage.style.animation = "none";
    alert("Minería completada exitosamente.");
    
    // Inicia un cronómetro de 24 horas
    startCooldown();
  }, 30000);
});

function startCooldown() {
  mineButton.disabled = true;
  let countdown = 24 * 60 * 60; // 24 horas en segundos

  const interval = setInterval(() => {
    countdown--;
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    mineButton.textContent = `Esperando ${hours}h ${minutes}m ${seconds}s`;

    if (countdown <= 0) {
      clearInterval(interval);
      mineButton.disabled = false;
      mineButton.textContent = "Iniciar Minería";
    }
  }, 1000);
}
