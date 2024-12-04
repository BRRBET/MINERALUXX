document.addEventListener("DOMContentLoaded", () => {
  const mineButton = document.getElementById("mineButton");
  const minerImage = document.getElementById("minerImage");

  let isVip = false; // Cambiar a true para activar el botón

  if (isVip) {
    mineButton.disabled = false;
  }

  mineButton.addEventListener("click", () => {
    mineButton.disabled = true;
    mineButton.textContent = "Minería en progreso...";

    minerImage.style.animation = "mining 0.5s infinite";

    setTimeout(() => {
      mineButton.textContent = "Iniciar Minería";
      mineButton.disabled = false;
      minerImage.style.animation = "idle 1s infinite alternate";
      alert("Minería exitosa. ¡Recibe tus ganancias ahora!");
    }, 30000); // 30 segundos
  });
});
