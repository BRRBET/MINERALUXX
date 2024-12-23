

  // Referencia al botón y al balance
  const button = document.getElementById("button-btn");
  const balance = document.getElementById("balance");

  // Al hacer clic en el botón
  button.addEventListener("click", function () {
    // Mostrar mensaje de retiro en proceso
    alert("Su retiro está en proceso");

    // Cambiar el balance a 0
    balance.textContent = "Balance: $0";
  });

  // Referencia al icono y al modal
  const icono = document.querySelector(".icono-superior-izquierdo");
  const modal = document.getElementById("modal");
  const modalAceptar = document.getElementById("modal-aceptar");

  // Mostrar el modal al hacer clic en el icono
  icono.addEventListener("click", function () {
    modal.style.display = "flex"; // Mostrar el modal
  });

  // Ocultar el modal al hacer clic en el botón "Aceptar"
  modalAceptar.addEventListener("click", function () {
    modal.style.display = "none"; // Ocultar el modal
  });
