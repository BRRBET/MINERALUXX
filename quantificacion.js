document.getElementById("start-mining").addEventListener("click", () => {
  const miningStatus = document.getElementById("mining-status");
  miningStatus.textContent = "Estoy minando por ti, espera 30 segundos...";
  
  setTimeout(() => {
    miningStatus.textContent = "He terminado la minería. ¡Puedes ver tu balance!";
    start24HourTimer();
  }, 30000);
});

function start24HourTimer() {
  const miningStatus = document.getElementById("mining-status");
  let timeRemaining = 24 * 60 * 60; // 24 hours in seconds

  const timerInterval = setInterval(() => {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    miningStatus.textContent = `Espera ${hours}h ${minutes}m ${seconds}s para volver a minar.`;
    timeRemaining--;

    if (timeRemaining < 0) {
      clearInterval(timerInterval);
      miningStatus.textContent = "¡Puedes volver a minar ahora!";
    }
  }, 1000);
}
