document.addEventListener("DOMContentLoaded", function() {
  // Obtener los elementos de los botones
  const registerButton = document.getElementById("register");
  const loginButton = document.getElementById("login");

  // Evento al hacer clic en "Registrarse"
  registerButton.addEventListener("click", function(event) {
    event.preventDefault(); // Evita el envío del formulario para manejar la redirección

    // Validar los campos (si es necesario, por ejemplo, comprobar si las contraseñas coinciden)
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    // Comprobar si los campos están completos y si las contraseñas coinciden
    if (email && password1 && password2 && password1 === password2) {
      // Redirigir a la página de inicio (Home.html)
      window.location.href = "Home.html";
    } else {
      // Si hay algún error, puedes mostrar un mensaje (opcional)
      alert("Por favor, completa todos los campos y asegúrate de que las contraseñas coincidan.");
    }
  });

  // Evento al hacer clic en "Iniciar Sesión"
  loginButton.addEventListener("click", function() {
    // Redirigir a la página de inicio de sesión (Logon.html)
    window.location.href = "Login.html";
  });
});
