
// Variables globales
let isQuantifying = false; // Para controlar si el proceso de cuantificación está activo
let quantificationEndTime = 0; // Para almacenar el tiempo de fin de la cuantificación
let hasUpdatedVip = false; // Variable para controlar si el usuario ha actualizado a VIP
let balance = 5; // Suponiendo que el balance inicial es 5 USDT (puedes cambiarlo a tu lógica real)

// Iniciar el proceso de cuantificación
function startQuantification() {
  if (isQuantifying) return; // Si ya está en proceso, no permitir que inicie otra cuantificación

  // Si el usuario no ha actualizado a VIP, mostrar alerta y terminar
  if (!hasUpdatedVip) {
    alert("¡Debes actualizar a VIP para realizar la cuantificación!");
    return;
  }

  // Verificar el balance para cuantificar
  if (balance < 10) {
    alert("El saldo es insuficiente. El mínimo de recarga es 10 USDT.");
    return;
  }

  // Activar la animación del círculo de minería
  document.getElementById("mining-circle").style.display = 'block';
  document.getElementById("status").innerText = "Minería en proceso...";

  // Simular la minería durante 30 segundos
  setTimeout(() => {
    isQuantifying = true;
    document.getElementById("status").innerText = "Minería exitosa!";
    startCooldown(); // Iniciar el cronómetro de 24 horas
    document.getElementById("mining-circle").style.display = 'none'; // Ocultar el círculo

    // Actualizar el balance y mostrar los resultados
    balance += 20; // Ejemplo: la cuantificación aumenta el balance
    showWithdrawals(); // Mostrar el historial de retiros
    alert("¡Minería completada con éxito! El saldo ha sido actualizado.");
  }, 30000); // 30 segundos de minería
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
    document.getElementById("status").innerText = "Puedes volver a cuantificar!";
    document.getElementById("countdown").style.display = 'none'; // Ocultar el cronómetro
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

  const withdrawals = [
    { amount: "19 USDT", description: "Retiro de Tjfjsjskskfk" },
    { amount: "50 USDT", description: "Retiro de Qwertyuiop" },
    { amount: "30 USDT", description: "Retiro de Asdfghjkl" }
  ];

  withdrawals.forEach(withdrawal => {
    const withdrawalItem = document.createElement("div");
    withdrawalItem.classList.add("withdrawal-item");
    withdrawalItem.innerHTML = `
      <strong>${withdrawal.amount}</strong> - ${withdrawal.description}
    `;
    container.appendChild(withdrawalItem);
  });
}

// Función para actualizar el estado de VIP
function updateVipStatus() {
  hasUpdatedVip = true;
  alert("¡Ahora eres VIP! Puedes comenzar a cuantificar.");
}
