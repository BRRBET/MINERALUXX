const miningProgressKey = 'miningProgress'; // Clave para almacenar el progreso de la minería
const timerKey = 'timerProgress'; // Clave para almacenar el temporizador
const balanceKey = 'balance'; // Clave para almacenar el balance

// Inicialización del progreso de minería
function initializeMining() {
  const miningProgress = localStorage.getItem(miningProgressKey);
  const timerProgress = localStorage.getItem(timerKey);

  if (miningProgress && timerProgress) {
    const progressData = JSON.parse(miningProgress);
    startMiningWithProgress(progressData.progress, parseInt(timerProgress));
  } else {
    const startButton = document.getElementById("start-mining");
    startButton.addEventListener("click", startMining);
    startButton.disabled = false;
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

  startButton.disabled = true;
  startButton.style.backgroundColor = "red";

  // Mostrar mensaje de minería permanente
  miningMessage.textContent = "¡Estoy minando por ti, espera 24 horas!";

  // Iniciar animación del círculo girando lentamente
  miningCircle.style.animation = "rotate 60s linear infinite";

  // Mostrar y comenzar el temporizador de minería
  countdownTimer.style.display = 'block';
  startRealTimeTimer(24 * 60 * 60); // 24 horas en segundos

  // Iniciar progreso de minería
  startRealTimeMiningProgress(24 * 60 * 60);
}

// Progreso de minería en tiempo real
function startRealTimeMiningProgress(totalTime) {
  const progressBar = document.querySelector(".progress-bar");
  let width = 0;

  const interval = setInterval(() => {
    width += 100 / totalTime; // Incrementar el progreso lentamente
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

// Temporizador en tiempo real
function startRealTimeTimer(totalTime) {
  let timeRemaining = totalTime;
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
  }, 1000); // Actualizar cada segundo
}

// Continuar con progreso guardado
function startMiningWithProgress(savedProgress, savedTime) {
  const miningMessage = document.getElementById("mining-message");
  const progressBar = document.querySelector(".progress-bar");
  const miningCircle = document.querySelector(".mining-circle");

  miningMessage.textContent = "¡Estoy minando por ti, espera 24 horas!";
  progressBar.style.width = `${savedProgress}%`;
  miningCircle.style.animation = "rotate 60s linear infinite";

  startRealTimeTimer(savedTime);
}

// Actualizar balance
function updateBalance(amount) {
  let currentBalance = parseFloat(localStorage.getItem(balanceKey)) || 0;
  currentBalance += amount;
  localStorage.setItem(balanceKey, currentBalance.toFixed(2));
}

// Inicializar la minería al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  initializeMining();
});
