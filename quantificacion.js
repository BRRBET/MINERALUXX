let mineButton = document.getElementById('mineButton');
let miner = document.getElementById('miner');
let warningMessage = document.getElementById('warningMessage');

function startMining() {
  if (mineButton.disabled) {
    alert('Debes activar tu VIP para minar con ganancias.');
    return;
  }

  // Habilitar la animación del minero
  miner.style.animation = 'mine-animation 0.5s infinite alternate';

  // Mostrar el mensaje de inicio de minería
  setTimeout(() => {
    alert('¡Minería exitosa! Has minado criptomonedas.');
    stopMining();
  }, 30000); // La minería dura 30 segundos
}

function stopMining() {
  miner.style.animation = ''; // Detener la animación
  mineButton.disabled = true; // Desactivar el botón nuevamente
  warningMessage.textContent = '💬 ¡Minado exitoso! Para continuar, espera 24 horas para la siguiente minería. 💬';
  startCooldown(); // Iniciar el contador de 24 horas
}

function startCooldown() {
  let countdown = 24 * 60 * 60; // 24 horas en segundos
  let interval = setInterval(() => {
    countdown--;
    let hours = Math.floor(countdown / 3600);
    let minutes = Math.floor((countdown % 3600) / 60);
    let seconds = countdown % 60;

    // Mostrar el cronómetro
    document.getElementById('timer').innerHTML = `Tiempo restante para la próxima minería: ${hours}:${minutes}:${seconds}`;

    if (countdown <= 0) {
      clearInterval(interval);
      mineButton.disabled = false; // Rehabilitar el botón para iniciar minería nuevamente
      warningMessage.textContent = '💬 Puedes empezar a minar nuevamente. ¡Aprovecha tus ganancias! 💬';
    }
  }, 1000); // Actualizar cada segundo
}

// Mostrar el mensaje inicial
document.getElementById('timer').innerHTML = 'Tiempo restante para la próxima minería: 24:00:00';
