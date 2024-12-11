const miningProgressKey = 'miningProgress'; // Clave para almacenar el progreso de la minería
const timerKey = 'timerProgress'; // Clave para almacenar el temporizador
const balanceKey = 'balance'; // Clave para almacenar el balance

// Inicialización del progreso de minería
function initializeMining() {
  const miningProgress = localStorage.getItem(miningProgressKey);
  const timerProgress = localStorage.getItem(timerKey);

  // Si hay progreso guardado y tiempo restante en el temporizador
  if (miningProgress && timerProgress) {
    const progressData = JSON.parse(miningProgress);
    startMiningWithProgress(progressData.progress, parseInt(timerProgress));
  } else {
    // Si no hay datos guardados, prepara el botón de minería
    const startButton = document.getElementById("start-mining");
    startButton.addEventListener("click", startMining);
    startButton.disabled = false; // Habilitar el botón inicialmente
    startButton.style.backgroundColor = "#00b3ff";
  }
}

// Función para iniciar la minería
function startMining() {
  const miningMessage = document.getElementById("mining-message");
  const progressBar = document.querySelector(".progress-bar");
  const startButton = document.getElementById("start-mining");
  const miningCircle = document.querySelector(".mining-circle");
  const countdownTimer = document.getElementById("countdown-timer");

  // Deshabilitar el botón de minería
  startButton.disabled = true;
  startButton.style.backgroundColor = "red";

  // Mostrar mensaje de minería
  miningMessage.textContent = "¡Estoy minando por ti, espera 24 horas!";
  miningCircle.style.animation = "rotate 24h linear infinite"; // Animación de minería

  // Mostrar y comenzar el temporizador de 24 horas
  countdownTimer.style.display = 'block'; // Mostrar el temporizador
  start24HourTimer();

  // Iniciar el progreso de minería
  startMiningProgress();
}

// Función para el progreso de minería
function startMiningProgress() {
  const progressBar = document.querySelector(".progress-bar");
  let width = 0;
  const totalTime = 24 * 60 * 60; // 24 horas en segundos

  const interval = setInterval(() => {
    width += 100 / totalTime; // Incrementar lentamente la barra
    progressBar.style.width = `${width}%`;

    localStorage.setItem(miningProgressKey, JSON.stringify({ progress: width }));

    if (width >= 100) {
      clearInterval(interval);
      document.getElementById("reward-message").textContent = "¡He minado por ti, reclama tu recompensa de 0.1 USDT!";
      document.getElementById("mining-message").style.display = 'none';
      updateBalance(0.1);
    }
  }, 1000); // Actualizar cada segundo
}

// Función para iniciar el temporizador de 24 horas
function start24HourTimer() {
  let timeRemaining = 24 * 60 * 60; // 24 horas en segundos
  const countdownTimer = document.getElementById("countdown-timer");
  const startButton = document.getElementById("start-mining");

  const timerInterval = setInterval(() => {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    countdownTimer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeRemaining--;

    localStorage.setItem(timerKey, timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      countdownTimer.textContent = "¡Puedes volver a minar ahora!";
      startButton.disabled = false; // Habilitar el botón de minería
      startButton.style.backgroundColor = "#00b3ff";
    }
  }, 1000);
}

// Función para continuar con el progreso guardado
function startMiningWithProgress(savedProgress, savedTime) {
  const miningMessage = document.getElementById("mining-message");
  const progressBar = document.querySelector(".progress-bar");
  const startButton = document.getElementById("start-mining");
  const miningCircle = document.querySelector(".mining-circle");

  miningMessage.textContent = "¡Estoy minando por ti, espera 24 horas!";
  progressBar.style.width = `${savedProgress}%`;
  miningCircle.style.animation = "rotate 24h linear infinite";

  // Continuar el temporizador con el tiempo guardado
  start24HourTimerWithSavedTime(savedTime);
}

// Función para continuar el temporizador guardado
function start24HourTimerWithSavedTime(savedTime) {
  let timeRemaining = savedTime;
  const countdownTimer = document.getElementById("countdown-timer");
  const startButton = document.getElementById("start-mining");

  const timerInterval = setInterval(() => {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    countdownTimer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeRemaining--;

    localStorage.setItem(timerKey, timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      countdownTimer.textContent = "¡Puedes volver a minar ahora!";
      startButton.disabled = false;
      startButton.style.backgroundColor = "#00b3ff";
    }
  }, 1000);
}

// Función para actualizar el balance
function updateBalance(amount) {
  let currentBalance = parseFloat(localStorage.getItem(balanceKey)) || 0;
  currentBalance += amount;
  localStorage.setItem(balanceKey, currentBalance.toFixed(2));
}

// Inicializar la minería al cargar la página
initializeMining();
