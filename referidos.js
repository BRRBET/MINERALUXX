// Seleccionamos los elementos relacionados con el contador de Nivel 1
const nivel1CounterElement = document.querySelector(".referido-card:nth-child(1) .proncentage");
const nivel1TotalElement = document.querySelector(".referido-card:nth-child(1) .porcentage");

// Obtenemos el contador actual desde el almacenamiento local o inicializamos en 0
let nivel1Counter = parseInt(localStorage.getItem("nivel1Counter")) || 0;

// Función para manejar el registro
function registerUser() {
  // Simula que el usuario se ha registrado con éxito
  const isRegistered = confirm("¿El usuario se ha registrado exitosamente?");

  if (isRegistered) {
    nivel1Counter += 1; // Incrementa en 1 solo si el registro es exitoso
    localStorage.setItem("nivel1Counter", nivel1Counter); // Guardar en almacenamiento local

    // Actualizar la visualización
    nivel1CounterElement.textContent = nivel1Counter;
  }

  // Las ganancias siempre permanecen en cero
  nivel1TotalElement.textContent = "0.00";
}

// Ejecutamos la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar el valor actual del contador
  nivel1CounterElement.textContent = nivel1Counter;
  nivel1TotalElement.textContent = "0.00"; // Ganancia inicial en cero

  // Llamar a la función de registro (simulación)
  registerUser();
});
