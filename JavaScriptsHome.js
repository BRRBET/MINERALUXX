// Mostrar alerta al entrar a la página
window.onload = function() {
  if (!localStorage.getItem('alertShown')) {
    const alertMessage = `
      Bienvenido a nuestra plataforma.
      Aquí puedes adquirir robots desde 15 USDT.
      Cada robot genera 3 USDT diarios.
      Por cada referido activo ganas el 10% de sus ganancias.
    `;

    setTimeout(() => {
      alert(alertMessage.trim());
      localStorage.setItem('alertShown', 'true');
    }, 500); // Retraso de medio segundo para mostrar la alerta
  }
};
