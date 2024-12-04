let miningActive = false;
let timer = 24 * 60 * 60; // 24 hours in seconds

function startMining() {
  // Desactivar el botón de minería mientras está en proceso
  document.getElementById("start-mining").disabled = true;

  // Mostrar mensaje de inicio de minería
  document.getElementById("mining-status").textContent = "Jeje, estoy picando... ¡Espérame!";
  
  // Iniciar la animación del enano picando
  document.getElementById("miner").style.animationPlayState = "running";

  // Esperar 30 segundos simulando minería
  setTimeout(() => {
    // Detener la animación y cambiar el mensaje
    document.getElementById("miner").style.animationPlayState = "paused";
    document.getElementById("mining-status").textContent = "Minería completada. ¡Cargando cronómetro!";

    // Empezar el cronómetro de 24 horas
    startTimer();
  }, 30000); // 30 segundos de minería
}

function startTimer() {
  // Iniciar el cronómetro de 24 horas
  const countdownInterval = setInterval(() => {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    // Mostrar el tiempo restante
    document.getElementById("timer").textContent = `Siguiente minería en: ${hours}:${minutes}:${seconds}`;

    // Reducir el contador en un segundo
    if (timer > 0) {
      timer--;
    } else {
      clearInterval(countdownInterval);
      document.getElementById("start-mining").disabled = false;
      document.getElementById("mining-status").textContent = "¡Listo para minar nuevamente!";
    }
  }, 1000);
}
