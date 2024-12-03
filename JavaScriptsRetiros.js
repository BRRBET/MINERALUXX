document.getElementById("withdrawBtn").addEventListener("click", function() {
  // Obtener los valores del formulario
  const amount = parseFloat(document.getElementById("amount").value);
  const password = document.getElementById("password").value;
  const balance = parseFloat(document.getElementById("withdrawalBalance").textContent);

  // Limpiar mensaje de error anterior
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = ''; 

  // Verificar si el monto de retiro es menor que el mínimo
  if (amount < 2) {
    alert("Mejora tu VIP para poder retirar el balance que tengas.");
    return;
  }

  // Verificar si el balance es insuficiente
  if (balance <= 0) {
    alert("No tienes balance suficiente para realizar el retiro.");
    return;
  }

  // Verificar si el monto solicitado es mayor que el saldo disponible
  if (amount > balance) {
    errorMessage.textContent = "Saldo insuficiente para realizar el retiro.";
    return;
  }

  // Si todo es correcto, realizar el retiro
  alert("Retiro realizado exitosamente.");

  // Actualizar el balance de retiro después de la transacción
  document.getElementById("withdrawalBalance").textContent = (balance - amount).toFixed(2) + " USDT";
});
