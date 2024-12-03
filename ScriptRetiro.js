function validarRetiro() {
  // Obtener los valores de los campos
  const saldoDisponible = parseFloat(document.getElementById('balanceDisponible').innerText);
  const montoRetiro = parseFloat(document.getElementById('montoRetiro').value);

  // Validar si el monto de retiro es menor que el saldo disponible
  if (isNaN(montoRetiro) || montoRetiro < 2 || montoRetiro > saldoDisponible) {
    alert('Saldo insuficiente. Actualice su VIP para poder retirar.');
  } else {
    alert('Retiro realizado exitosamente.');
  }
}
