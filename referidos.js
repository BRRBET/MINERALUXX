// Seleccionamos los elementos relacionados con el contador de Nivel 1
const nivel1CounterElement = document.querySelector(".referido-card:nth-child(1) .proncentage");
const nivel1TotalElement = document.querySelector(".referido-card:nth-child(1) .porcentage");

// Inicializamos el contador en 0 para asegurar que siempre comience desde cero
let nivel1Counter = 0;

// Función para incrementar el contador de referidos cuando el usuario esté en Home.html
function incrementReferidos() {
  // Si el usuario está en la página Home.html
  if (window.location.href === "https://brrbet.github.io/MINERALUXPLUX/Home.html") {
    nivel1Counter += 1; // Incrementa en 1
    localStorage.setItem("nivel1Counter", nivel1Counter); // Guardar en almacenamiento local

    // Actualizar la visualización
    nivel1CounterElement.textContent = nivel1Counter;
    nivel1TotalElement.textContent = "0.00"; // Ganancia permanece en cero
  }
}

// Ejecutamos la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar el valor actual del contador (si está en cero, se mostrará cero siempre)
  nivel1CounterElement.textContent = nivel1Counter;
  nivel1TotalElement.textContent = "0.00"; // Ganancia inicial en cero

  // Llamar a la función para incrementar referidos si el usuario está en Home.html
  incrementReferidos();
});
