// Referencia al formulario y al botón
const button = document.getElementById("button-btn");
const montoInput = document.getElementById("monto");
const balanceDisponible = document.querySelector(".perfil p strong:first-child");
const balanceRetiro = document.querySelector(".perfil p strong:nth-child(2)");

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
  event.preventDefault(); // Prevenir que el formulario se envíe automáticamente

  const monto = parseFloat(montoInput.value); // Obtener el valor ingresado
  const balanceActual = parseFloat(balanceDisponible.textContent.replace("$", "").replace(" USDT", ""));

  if (monto <= 0 || isNaN(monto)) {
    alert("Por favor, ingrese un monto válido.");
    return;
  }

  if (monto > balanceActual) {
    alert("El monto ingresado excede el balance disponible.");
    return;
  }

  // Actualizar balance
  const nuevoBalance = (balanceActual - monto).toFixed(2);
  balanceDisponible.textContent = `$${nuevoBalance} USDT`;
  balanceRetiro.textContent = `$${monto.toFixed(2)} USDT`;

  // Mostrar mensaje de éxito
  alert("Su retiro está en proceso.");
});
