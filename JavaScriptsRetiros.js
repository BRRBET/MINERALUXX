
document.getElementById("withdrawBtn").addEventListener("click", function() {
  // Obtener los valores del formulario
  const amount = parseFloat(document.getElementById("amount").value);
  const password = document.getElementById("password").value;
  const balance = parseFloat(document.getElementById("withdrawalBalance").textContent);

  // Validaciones
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = ''; // Limpiar mensaje de error

  // Verificar si el balance es suficiente
  if (amount < 2) {
    errorMessage.textContent = "El monto mínimo de retiro es 2 USDT.";
    return;
  }
  if (amount > balance) {
    errorMessage.textContent = "Saldo insuficiente para realizar el retiro.";
    return;
  }

  // Realizar retiro (aquí agregarías el código para procesar el retiro)
  alert("Retiro realizado exitosamente.");

  // Actualizar balance de retiro
  document.getElementById("withdrawalBalance").textContent = (balance - amount).toFixed(2) + " USDT";
});
