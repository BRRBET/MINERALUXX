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
