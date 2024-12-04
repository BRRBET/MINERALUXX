// Selección de elementos
const startMiningButton = document.getElementById("start-mining");
const messageContainer = document.createElement("div");
messageContainer.className = "message";
document.body.appendChild(messageContainer);

let miningTimer;
let cooldownTimer;

// Función para iniciar la minería
function startMining() {
  // Desactivar el botón durante la minería
  startMiningButton.disabled = true;
  startMiningButton.innerText = "Minando...";

  // Mostrar mensaje inicial
  showMessage("💬 Estoy minando por ti, espera 30 segundos mientras mino tus ganancias...");

  // Iniciar animación del pico
  const pickaxe = document.querySelector(".pickaxe");
  pickaxe.style.animationPlayState = "running";

  // Simular el proceso de minería durante 30 segundos
  miningTimer = setTimeout(() => {
    // Detener animación del pico
    pickaxe.style.animationPlayState = "paused";

    // Mostrar mensaje de minería completada
    showMessage("✅ He terminado la minería, puedes ver tu balance.");

    // Iniciar el cooldown de 24 horas
    startCooldown();
  }, 30000);
}

// Función para iniciar el cooldown
function startCooldown() {
  const countdownTime = 86400; // 24 horas en segundos
  let remainingTime = countdownTime;

  // Actualizar el texto del botón
  startMiningButton.innerText = "En espera...";
  startMiningButton.disabled = true;

  // Mostrar cronómetro de cuenta regresiva
  showMessage(`⏳ Espera 24 horas para volver a minar.`);

  cooldownTimer = setInterval(() => {
    remainingTime -= 1;
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    // Actualizar mensaje con el cronómetro
    showMessage(`⏳ Tiempo restante: ${hours}h ${minutes}m ${seconds}s`);

    // Cuando el tiempo se agote, reactivar el botón
    if (remainingTime <= 0) {
      clearInterval(cooldownTimer);
      startMiningButton.disabled = false;
      startMiningButton.innerText = "Iniciar Minería";
      showMessage("🚀 ¡Puedes volver a minar!");
    }
  }, 1000);
}

// Función para mostrar mensajes
function showMessage(text) {
  messageContainer.innerText = text;
}

// Asignar el evento al botón
startMiningButton.addEventListener("click", startMining);

// Inicializar animación pausada del pico
const pickaxe = document.querySelector(".pickaxe");
pickaxe.style.animationPlayState = "paused";
