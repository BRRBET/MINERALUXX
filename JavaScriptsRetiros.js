document.getElementById('retiroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const monto = parseFloat(document.getElementById('monto').value);
  const minimoRetiro = 2.00;

  if (monto < minimoRetiro) {
    alert(`El monto mínimo de retiro es ${minimoRetiro} USDT. ¡Considera comprar una mejora de retiro!`);
  } else {
    alert('Retiro procesado con éxito!');
    // Aquí puedes agregar la lógica para procesar el retiro
  }
});
