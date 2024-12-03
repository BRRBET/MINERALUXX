document.getElementById('retiroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener el monto de retiro ingresado
  const monto = parseFloat(document.getElementById('monto').value);
  const balanceDisponible = 1000.00; // Este valor debe ser dinámico según el balance real del usuario

  if (monto < 2) {
    alert("El monto mínimo de retiro es 2 USDT. Por favor, compra una mejora de retiro.");
  } else if (monto > balanceDisponible) {
    alert("No tienes suficiente saldo disponible para este retiro.");
  } else {
    alert("Retiro procesado exitosamente.");
    // Aquí deberías agregar la lógica para procesar el retiro
  }
});
