document.getElementById("start-mining").addEventListener("click", () => {
  const miningStatus = document.getElementById("mining-status");
  
  // Si la minería está activada, no hacer nada
  if (localStorage.getItem("miningActive") === "true") {
    miningStatus.textContent = "Ya estás minando, por favor espera.";
    return;
  }

  miningStatus.textContent = "Estoy minando por ti, espera 30 segundos...";

  setTimeout(() => {
    miningStatus.textContent = "He terminado la minería. ¡Puedes ver tu balance!";
    
    // Activar minería y configurar el cronómetro
    localStorage.setItem("miningActive", "true");
    localStorage.setItem("miningStartTime", Date.now()); // Guardar la hora de inicio
    start24HourTimer();
  }, 30000); // Simula que la minería dura 30 segundos
});

function start24HourTimer() {
  const miningStatus = document.getElementById("mining-status");
  let timeRemaining = 24 * 60 * 60; // 24 hours in seconds

  // Recuperamos el tiempo restante desde el almacenamiento local si la minería está activa
  const miningStartTime = parseInt(localStorage.getItem("miningStartTime"));
  if (miningStartTime) {
    const elapsedTime = Math.floor((Date.now() - miningStartTime) / 1000); // Tiempo pasado en segundos
    timeRemaining -= elapsedTime;
  }

  const timerInterval = setInterval(() => {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    miningStatus.textContent = `Espera ${hours}h ${minutes}m ${seconds}s para volver a minar.`;
    timeRemaining--;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      miningStatus.textContent = "¡Puedes volver a minar ahora!";
      localStorage.setItem("miningActive", "false"); // Desactivar minería
      localStorage.removeItem("miningStartTime"); // Eliminar el tiempo de inicio
    }
  }, 1000);

  // Asegura que el cronómetro se guarda en localStorage para persistencia
  localStorage.setItem("timeRemaining", timeRemaining);
}

// Función para comprobar si la minería está activa al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const miningStatus = document.getElementById("mining-status");

  // Comprobar si la minería está activa
  if (localStorage.getItem("miningActive") === "true") {
    const miningStartTime = parseInt(localStorage.getItem("miningStartTime"));
    let timeRemaining = 24 * 60 * 60; // 24 horas en segundos

    const elapsedTime = Math.floor((Date.now() - miningStartTime) / 1000);
    timeRemaining -= elapsedTime;

    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    miningStatus.textContent = `Espera ${hours}h ${minutes}m ${seconds}s para volver a minar.`;

    if (timeRemaining <= 0) {
      miningStatus.textContent = "¡Puedes volver a minar ahora!";
      localStorage.setItem("miningActive", "false");
      localStorage.removeItem("miningStartTime");
    }
  } else {
    miningStatus.textContent = "Puedes empezar a minar cuando quieras.";
  }
});
