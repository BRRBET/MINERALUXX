const miningProgressKey = 'miningProgress'; // Clave para almacenamiento local
  const timerKey = 'timerProgress'; // Clave para la cuenta regresiva
  const balanceKey = 'balance'; // Clave para el balance de la cuenta

  // Inicialización del progreso de la minería si ya existe
  if (localStorage.getItem(miningProgressKey)) {
    const progressData = JSON.parse(localStorage.getItem(miningProgressKey));
    startMiningWithProgress(progressData.progress, progressData.timeRemaining);
  } else {
    // Activar el evento de click para iniciar la minería
    document.getElementById("start-mining").addEventListener("click", startMining);
  }

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

    // Guarda el progreso de la minería
    const interval = setInterval(() => {
      width += (100 / totalTime); // Incrementar la barra en función del tiempo
      progressBar.style.width = width + "%";

      // Guardar el progreso en localStorage
      localStorage.setItem(miningProgressKey, JSON.stringify({ progress: width, timeRemaining: totalTime }));

      if (width >= 100) {
        clearInterval(interval);
        document.getElementById("reward-message").textContent = "¡He minado por ti, reclama tu recompensa de 0.1 USDT!";
        document.getElementById("mining-message").style.display = 'none'; // Esconde el mensaje

        // Actualizar balance
        updateBalance(0.1); // Añadir recompensa de 0.1 USDT
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

  function updateBalance(amount) {
    let currentBalance = parseFloat(localStorage.getItem(balanceKey)) || 0;
    currentBalance += amount;
    localStorage.setItem(balanceKey, currentBalance.toFixed(2));
  }

  // Función para continuar con el progreso guardado de minería
  function startMiningWithProgress(savedProgress, savedTime) {
    const miningMessage = document.getElementById("mining-message");
    const progressBar = document.querySelector(".progress-bar");
    const startButton = document.getElementById("start-mining");

    miningMessage.textContent = "¡Estoy minando por ti, espera 24 horas!";
    miningMessage.style.opacity = 1; // Asegura que el mensaje sea visible
    progressBar.style.width = savedProgress + "%";

    // Continuar la cuenta regresiva desde el tiempo guardado
    start24HourTimerWithSavedTime(savedTime);
  }

  // Función para continuar con el temporizador guardado
  function start24HourTimerWithSavedTime(savedTime) {
    let timeRemaining = savedTime; // Utilizar el tiempo restante guardado
    const countdownTimer = document.getElementById("countdown-timer");
    const startButton = document.getElementById("start-mining");

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

