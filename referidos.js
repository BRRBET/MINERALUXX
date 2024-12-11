// Seleccionamos los elementos relacionados con el contador de Nivel 1
const nivel1CounterElement = document.querySelector(".referido-card:nth-child(1) .proncentage");
const nivel1TotalElement = document.querySelector(".referido-card:nth-child(1) .porcentage");

// Obtenemos el contador actual desde el almacenamiento local o inicializamos en 0
let nivel1Counter = parseInt(localStorage.getItem("nivel1Counter")) || 0;

// Función para incrementar el contador
function incrementCounter() {
  nivel1Counter += 1; // Incrementa en 1
  localStorage.setItem("nivel1Counter", nivel1Counter); // Guardar en almacenamiento local

  // Actualizar la visualización
  nivel1CounterElement.textContent = nivel1Counter;
  nivel1TotalElement.textContent = (nivel1Counter * 15).toFixed(2); // Simulación de ganancia
}

// Ejecutamos la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar el valor actual del contador
  nivel1CounterElement.textContent = nivel1Counter;
  nivel1TotalElement.textContent = (nivel1Counter * 15).toFixed(2); // Ganancia inicial

  // Simular que un usuario nuevo accedió
  incrementCounter();
});
