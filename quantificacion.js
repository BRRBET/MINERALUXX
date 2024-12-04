let timer = 24 * 60 * 60; // 24 hours in seconds
let miningTimeout; // Variable for the mining timeout
let countdownInterval; // Variable for the countdown timer interval

// Función para iniciar la minería
function startMining() {
  // Deshabilitar el botón mientras se está minando
  const miningButton = document.getElementById("start-mining");
  miningButton.disabled = true;

  // Actualizar el estado y simular minería
  document.getElementById("mining-status").textContent = "Jeje, estoy picando... ¡Espérame!";

  // Simular minería por 30 segundos
  miningTimeout = setTimeout(() => {
    // Cambiar el mensaje una vez finalice la minería
    document.getElementById("mining-status").textContent = "Minería completada. ¡Cargando cronómetro!";

    // Iniciar el cronómetro de 24 horas
    startTimer();
  }, 30000); // 30 segundos
}

// Función para iniciar el cronómetro de 24 horas
function startTimer() {
  countdownInterval = setInterval(() => {
    // Calcular horas, minutos y segundos
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    // Actualizar el texto del cronómetro
    document.getElementById("timer").textContent = `Siguiente minería en: ${hours}:${minutes}:${seconds}`;

    // Disminuir el tiempo en un segundo
    if (timer > 0) {
      timer--;
    } else {
      // Cuando el cronómetro llegue a cero, habilitar el botón de minería nuevamente
      clearInterval(countdownInterval); // Detener el cronómetro
      document.getElementById("start-mining").disabled = false;
      document.getElementById("mining-status").textContent = "¡Listo para minar nuevamente!";
    }
  }, 1000); // Actualizar cada segundo
}
