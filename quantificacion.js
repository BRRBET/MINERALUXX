const miner = document.getElementById("miner");
const mineButton = document.getElementById("mineButton");

function startMining() {
  // Activar la animación del minero
  miner.style.animation = "mine 0.5s infinite";

  // Simular minería por 30 segundos
  mineButton.disabled = true; // Desactivar el botón mientras mina
  setTimeout(() => {
    alert("¡Minería completada con éxito!");
    miner.style.animation = "none"; // Detener la animación
    mineButton.disabled = false; // Reactivar el botón
  }, 30000); // 30 segundos
}
