// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Botón de registro
  const registerButton = document.getElementById("login");

  // Evento para redirigir a otra página
  registerButton.addEventListener("click", () => {
    // Cambia 'register.html' al archivo que deseas cargar
    window.location.href = "register.html";
  });

  // Botón de iniciar sesión
  const loginButton = document.getElementById("register");

  // Evento para redirigir a la página de inicio de sesión
  loginButton.addEventListener("click", () => {
    // Cambia 'login.html' al archivo que deseas cargar
    window.location.href = "login.html";
  });
});
