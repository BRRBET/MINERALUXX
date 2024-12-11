// Variables de progreso
const miningProgressKey = 'miningProgress'; 
const timerKey = 'timerProgress'; 

// Función de minería
function startMining() {
  const miningMessage = document.getElementById("mining-message");
  const progressBar = document.querySelector(".progress-bar");
  const startButton = document.getElementById("start-mining");

  // Desactivar el botón y cambiar su color a rojo
  startButton.disabled = true;
  startButton.style.backgroundColor = "red";

  miningMessage.textContent = "¡Estoy minando por ti, espera 24 horas!";
  miningMessage.style.opacity = 1; // Asegurar que el mensaje sea visible

  // Comenzar el progreso de minería
  startMiningProgress();

  // Iniciar el temporizador de 24 horas
  start24HourTimer();
}

function startMiningProgress() {
  const progressBar = document.querySelector(".progress-bar");
  let width = 0;
  let totalTime = 24 * 60 * 60; // 24 horas en segundos

  // Guardar el progreso de la minería
  const interval = setInterval(() => {
    width += (100 / totalTime); // Incrementar la barra en función del tiempo
    progressBar.style.width = width + "%";

    // Guardar el progreso en localStorage
    localStorage.setItem(miningProgressKey, JSON.stringify({ progress: width, timeRemaining: totalTime }));

    if (width >= 100) {
      clearInterval(interval);
      document.getElementById("reward-message").textContent = "¡He minado por ti, reclama tu recompensa de 0.1 USDT!";
      document.getElementById("mining-message").style.display = 'none'; // Esconde el mensaje

      // Actualizar el saldo al completarse la minería (por ejemplo, 0.1 USDT)
      const currentBalance = parseFloat(localStorage.getItem("userBalance")) || 0;
      const newBalance = currentBalance + 0.1; // Añadir la recompensa
      localStorage.setItem("userBalance", newBalance.toFixed(2));  // Guardar el nuevo saldo
    }
  }, 1000); // Actualizar cada segundo
}

function start24HourTimer() {
  let timeRemaining = 24 * 60 * 60; // 24 horas en segundos
  const countdownTimer = document.getElementById("countdown-timer");
  const startButton = document.getElementById("start-mining");

  // Si hay un temporizador guardado en localStorage, reiniciar el valor
  if (localStorage.getItem(timerKey)) {
    timeRemaining = parseInt(localStorage.getItem(timerKey), 10);
  }

  // Iniciar la cuenta regresiva
  const timerInterval = setInterval(() => {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    countdownTimer.textContent = `${hours}:${minutes}:${seconds}`;
    timeRemaining--;

    // Guardar el tiempo restante en localStorage
    localStorage.setItem(timerKey, timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      countdownTimer.textContent = "¡Puedes volver a minar ahora!";

      // Reactivar el botón y restaurar su color
      startButton.disabled = false;
      startButton.style.backgroundColor = "#00b3ff"; // Restaurar color original
    }
  }, 1000);
}

// Función para cargar el saldo desde localStorage y actualizar el perfil
function updateBalanceFromLocalStorage() {
  // Recuperar el saldo del usuario desde localStorage
  const userBalance = parseFloat(localStorage.getItem("userBalance")) || 0;

  // Actualizar el balance en la página del perfil
  const balanceElement = document.querySelector(".perfil-balance .balance-item strong");
  balanceElement.textContent = `$${userBalance.toFixed(2)}`;
}

// Llamar a la función para cargar el balance cuando se carga la página
document.addEventListener("DOMContentLoaded", updateBalanceFromLocalStorage);
