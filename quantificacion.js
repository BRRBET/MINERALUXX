let startButton = document.getElementById("startButton");
let statusMessage = document.getElementById("statusMessage");
let timerElement = document.getElementById("timer");
let animation = document.getElementById("animation");
let withdrawalsContainer = document.getElementById("withdrawals");

let withdrawalData = [
  "⭐️Tjds********Nu. Retiro de 19 USDT",
  "⭐️TBFH********Uv. Retiro de 10 USDT",
  "⭐️TLHG********UC. Retiro de 25 USDT",
  "⭐️TNBJ********UT. Retiro de 50 USDT",
  "⭐️Tdsg********UH Retiro de 75 USDT"
];

// Función de Cuantificación
function startQuantification() {
  // Deshabilitar el botón
  startButton.disabled = true;
  startButton.textContent = "Cuantificación en proceso...";

  // Mostrar mensaje de inicio
  statusMessage.textContent = "Iniciando cuantificación... Espere la terminación de su cuantificación...";

  // Activar la animación de carga
  animation.style.display = "block";

  // Simular proceso de cuantificación (30 segundos)
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

    // Detener la animación de// Detener la animación de cuantificación una vez completada
    animation.style.display = "none";

    // Mostrar historial de retiros
    let i = 0;
    setInterval(() => {
      if (i < withdrawalData.length) {
        let withdrawalItem = document.createElement("div");
        withdrawalItem.classList.add("withdrawal-item");
        withdrawalItem.textContent = withdrawalData[i];
        withdrawalsContainer.appendChild(withdrawalItem);
        i++;
      }
    }, 2000); // Se añade un nuevo retiro cada 2 segundos

  }, 30000); // La cuantificación dura 30 segundos

}
