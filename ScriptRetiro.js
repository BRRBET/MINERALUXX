// Referencia al botón y al formulario
const button = document.getElementById("button-btn");
const montoInput = document.getElementById("monto");
const balanceDisponible = document.querySelector(".perfil p:nth-of-type(1) strong");
const balanceRetiro = document.querySelector(".perfil p:nth-of-type(2) strong");

// Referencia al icono y al modal
const icono = document.querySelector(".icono-superior-izquierdo");
const modal = document.getElementById("modal");
const modalAceptar = document.getElementById("modal-aceptar");

// Mostrar el modal al hacer clic en el icono
icono.addEventListener("click", function () {
  modal.style.display = "flex"; // Mostrar el modal
});

// Ocultar el modal al hacer clic en el botón "Aceptar"
modalAceptar.addEventListener("click", function () {
  modal.style.display = "none"; // Ocultar el modal
});

// Funcionalidad del botón "Retirar"
button.addEventListener("click", function (event) {
  event.preventDefault(); // Prevenir el envío automático del formulario

  // Obtener el monto ingresado
  const monto = parseFloat(montoInput.value);
  const balanceActual = parseFloat(balanceDisponible.textContent.replace("$", "").replace(" USDT", ""));

  // Validaciones
  if (isNaN(monto) || monto <= 0) {
    alert("Por favor, ingrese un monto válido.");
    return;
  }

  if (monto < 8) {
    alert("El monto mínimo de retiro es de 8 USDT.");
    return;
  }

  if (monto > balanceActual) {
    alert("El monto ingresado excede el balance disponible.");
    return;
  }

  // Actualizar balances
  const nuevoBalance = (balanceActual - monto).toFixed(2);
  balanceDisponible.textContent = `$${nuevoBalance} USDT`;
  balanceRetiro.textContent = `$${monto.toFixed(2)} USDT`;

  // Mostrar mensaje de éxito
  alert("Su retiro está en proceso.");
});
