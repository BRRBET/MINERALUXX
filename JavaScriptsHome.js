// Mostrar alerta solo una vez
window.onload = function() {
  // Verificar si ya se mostró la alerta
  if (!localStorage.getItem('alertShown')) {
    // Mostrar la alerta
    const alertBox = document.getElementById('alertBox');
    alertBox.style.display = 'block';
    
    // Cuando el usuario haga clic en el botón Aceptar
    document.getElementById('acceptButton').addEventListener('click', function() {
      alertBox.style.display = 'none';
      // Marcar que ya se mostró la alerta
      localStorage.setItem('alertShown', 'true');
    });
  }
};
