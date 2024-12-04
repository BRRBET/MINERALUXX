// Variables globales
let isQuantifying = false; // Para controlar si el proceso de cuantificación está activo
let quantificationEndTime = 0; // Para almacenar el tiempo de fin de la cuantificación
let withdrawals = [
  { amount: "19 USDT", description: "Retiro de T*FJ****sjs**V" },
  { amount: "50 USDT", description: "Retiro de T*JS****UnS**NU" },
  { amount: "30 USDT", description: "Retiro de T*NV****UNS**TU" }
];

// Iniciar el proceso de cuantificación
function startQuantification() {
  if (isQuantifying) return; // Si ya está en proceso, no permitir que inicie otra cuantificación

  // Desactivar el botón y mostrar la animación
  document.getElementById("start-btn").disabled = true;
  document.getElementById("loading").style.display = 'block';
  document.getElementById("status").innerText = "Iniciando cuantificación... Espere.";

  // Simular un proceso de cuantificación de 30 segundos
  setTimeout(() => {
    isQuantifying = true;
    document.getElementById("status").innerText = "Cuantificación completada!";
    startCooldown(); // Iniciar el cooldown de 24 horas

    // Mostrar los resultados del retiro después de la cuantificación
    showWithdrawals();
  }, 30000); // 30 segundos de simulación
}

// Iniciar el cronómetro de 24 horas
function startCooldown() {
  quantificationEndTime = Date.now() + 24 * 60 * 60 * 1000; // 24 horas en milisegundos

  // Mostrar el cronómetro
  document.getElementById("countdown").style.display = 'block';
  updateCountdown();

  // Habilitar el botón después de 24 horas
  setInterval(updateCountdown, 1000);
}

// Actualizar el cronómetro en la página
function updateCountdown() {
  let remainingTime = quantificationEndTime - Date.now();
  if (remainingTime <= 0) {
    document.getElementById("start-btn").disabled = false; // Rehabilitar el botón después de 24 horas
    document.getElementById("loading").style.display = 'none'; // Ocultar la animación de carga
    document.getElementById("countdown").style.display = 'none'; // Ocultar el cronómetro
    document.getElementById("status").innerText = "Puedes volver a cuantificar!";
  } else {
    let hours = Math.floor(remainingTime / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
}

// Función para rellenar los números con ceros en el cronómetro
function pad(number) {
  return number < 10 ? '0' + number : number;
}

// Mostrar el historial de retiros
function showWithdrawals() {
  const container = document.getElementById("withdrawals-container");
  container.innerHTML = ''; // Limpiar el contenedor

  withdrawals.forEach(withdrawal => {
    const withdrawalItem = document.createElement("div");
    withdrawalItem.classList.add("withdrawal-item");
    withdrawalItem.innerHTML = `
      <strong>${withdrawal.amount}</strong> - ${withdrawal.description}
    `;
    container.appendChild(withdrawalItem);
  });
}

// Llamar a la función de retiro infinita para mostrarla en pantalla
function showInfiniteWithdrawals() {
  let i = 0;
  setInterval(() => {
    let withdrawal = withdrawals[i % withdrawals.length];
    let withdrawalItem = document.createElement("div");
    withdrawalItem.classList.add("withdrawal-item");
    withdrawalItem.innerHTML = `
      ⭐️ ${withdrawal.amount} - ${withdrawal.description}
    `;
    document.getElementById("withdrawals-container").appendChild(withdrawalItem);
    i++;
  }, 3000); // Intervalo de 3 segundos entre cada retiro
}

showInfiniteWithdrawals(); // Iniciar la animación infinita de los retiros
