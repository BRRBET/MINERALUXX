// Variables
let startButton = document.getElementById("startButton");
let statusMessage = document.getElementById("statusMessage");
let timerElement = document.getElementById("timer");

// Función de activación de VIP
function unlockButton() {
  startButton.disabled = false; // Desbloquear el botón
  startButton.textContent = "Iniciar Cuantificación";
}

// Función de Cuantificación
function startQuantification() {
  startButton.disabled = true;
  startButton.textContent = "Cuantificación en proceso...";

  // Mostrar mensaje de inicio
  statusMessage.textContent = "Iniciando cuantificación... Espere la terminación de su cuantificación...";

  // Animación de cuantificación (30 segundos)
  setTimeout(() => {
    statusMessage.textContent = "Cuantificación completada.";

    // Iniciar cronómetro de 24 horas
    let endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 horas en milisegundos

    function updateTimer() {
      let currentTime = new Date().getTime();
      let timeLeft = endTime - currentTime;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "¡El tiempo ha terminado! Puede volver a cuantificar.";
        startButton.disabled = false;
        startButton.textContent = "Iniciar Cuantificación";
      } else {
        let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        let seconds = Math.floor((timeLeft / 1000) % 60);
        timerElement.textContent = `Cronómetro: ${hours}h ${minutes}m ${seconds}s`;
      }
    }

    // Actualizar el cronómetro cada segundo
    let timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Inicializar el cronómetro inmediatamente
  }, 30000); // 30 segundos para completar la cuantificación
}

// Llamada para simular desbloqueo del botón al ingresar como VIP
// Esto es solo un ejemplo. Debes integrar el método real para verificar si el usuario es VIP.
setTimeout(unlockButton, 2000); // Después de 2 segundos, desbloquear el botón

// Event listener para iniciar cuantificación al presionar el botón
startButton.addEventListener("click", startQuantification);
