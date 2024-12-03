document.getElementById("withdrawBtn").addEventListener("click", function() {
  // Obtener los valores del formulario
  const amount = parseFloat(document.getElementById("amount").value); // Monto ingresado
  const password = document.getElementById("password").value; // Contraseña (si se requiere)
  const balance = parseFloat(document.getElementById("withdrawalBalance").textContent); // Balance disponible

  // Limpiar mensaje de error anterior
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = ''; // Limpiar error previo

  // Verificar si el monto de retiro es menor que el mínimo
  if (amount < 2) {
    errorMessage.textContent = "El monto mínimo de retiro es 2 USDT.";
    return; // No proceder si el monto es menor al mínimo
  }

  // Verificar si el balance es insuficiente
  if (balance <= 0) {
    errorMessage.textContent = "No tienes balance suficiente para realizar el retiro.";
    return; // No proceder si el balance es 0 o negativo
  }

  // Verificar si el monto solicitado es mayor que el saldo disponible
  if (amount > balance) {
    errorMessage.textContent = "Saldo insuficiente para realizar el retiro.";
    return; // No proceder si el monto excede el saldo disponible
  }

  // Si todo es correcto, realizar el retiro
  alert("Retiro realizado exitosamente.");

  // Actualizar el balance de retiro después de la transacción
  document.getElementById("withdrawalBalance").textContent = (balance - amount).toFixed(2) + " USDT";

  // Opcional: Limpiar el campo de monto después de un retiro exitoso
  document.getElementById("amount").value = '';
});
