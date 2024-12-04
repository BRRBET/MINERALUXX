let miningActive = false;
let timer = 24 * 60 * 60; // 24 hours in seconds
let miningTimeout; // Variable for the mining timeout
let countdownInterval; // Variable for the countdown timer interval

// Function to start mining
function startMining() {
  // Disable the mining button while mining
  document.getElementById("start-mining").disabled = true;

  // Display the "mining in progress" message
  document.getElementById("mining-status").textContent = "Jeje, estoy picando... ¡Espérame!";

  // Start the miner animation (picking action)
  document.getElementById("miner").style.animationPlayState = "running";

  // Simulate mining for 30 seconds
  miningTimeout = setTimeout(() => {
    // Stop the miner animation and change the status message
    document.getElementById("miner").style.animationPlayState = "paused";
    document.getElementById("mining-status").textContent = "Minería completada. ¡Cargando cronómetro!";

    // Start the 24-hour countdown timer
    startTimer();
  }, 30000); // 30 seconds of mining
}

// Function to start the 24-hour countdown timer
function startTimer() {
  countdownInterval = setInterval(() => {
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    // Update the timer display
    document.getElementById("timer").textContent = `Siguiente minería en: ${hours}:${minutes}:${seconds}`;

    // Decrease the timer by one second
    if (timer > 0) {
      timer--;
    } else {
      // When the timer reaches 0, enable the mining button again
      clearInterval(countdownInterval); // Stop the countdown
      document.getElementById("start-mining").disabled = false;
      document.getElementById("mining-status").textContent = "¡Listo para minar nuevamente!";
    }
  }, 1000); // Update every second
}

// Function to reset everything (can be triggered by a reset button if desired)
function resetMining() {
  clearTimeout(miningTimeout); // Clear any ongoing mining timeout
  clearInterval(countdownInterval); // Clear the countdown timer

  // Reset the UI to the initial state
  timer = 24 * 60 * 60; // Reset timer to 24 hours
  document.getElementById("start-mining").disabled = false; // Enable mining button
  document.getElementById("mining-status").textContent = "ATENCIÓN💬 Podrás minar gratis, pero no obtendrás ganancias. Para obtenerlas, deberás activar VIP.💬";
  document.getElementById("timer").textContent = "";
  document.getElementById("miner").style.animationPlayState = "paused"; // Stop the mining animation
}
