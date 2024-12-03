document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login");
  const registerButton = document.getElementById("register");

  // Redirigir al dashboard
  loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Inicio de sesión exitoso!");
    window.location.href = "Home.html";
  });

  // Redirigir a registro
  registerButton.addEventListener("click", () => {
    window.location.href = "Registro.html";
  });
});
