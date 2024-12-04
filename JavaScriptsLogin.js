document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const registerButton = document.getElementById("register");

  // Validar y procesar inicio de sesión
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir el envío del formulario

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validar que los campos no estén vacíos
    if (!email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Si todo está correcto, redirigir
    alert("Inicio de sesión exitoso!");
    window.location.href = "Home.html";
  });

  // Redirigir a la página de registro
  registerButton.addEventListener("click", () => {
    window.location.href = "Registro.html";
  });
});
