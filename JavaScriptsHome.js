// Función para redirigir a otra página con confirmación
function navigate(page) {
    const confirmation = confirm("¿Estás seguro de que quieres ir a esta página?");
    if (confirmation) {
        window.location.href = page;
    }
}

// Función para manejar clics en los íconos sociales
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.preventDefault(); // Evita redirección inmediata
        const socialPlatform = icon.classList[1]; // Toma el nombre de la clase (como 'facebook', 'telegram', etc.)
        alert(`Redirigiendo a ${socialPlatform}...`);
        // Aquí puedes definir las URLs de cada red social según corresponda
        switch (socialPlatform) {
            case 'x':
                window.open('https://twitter.com', '_blank');
                break;
            case 'facebook':
                window.open('https://facebook.com', '_blank');
                break;
            case 'telegram':
                window.open('https://telegram.org', '_blank');
                break;
            case 'linkedin':
                window.open('https://linkedin.com', '_blank');
                break;
            case 'whatsapp':
                window.open('https://web.whatsapp.com', '_blank');
                break;
            default:
                alert('Plataforma no reconocida.');
        }
    });
});

// Animaciones al hacer clic en los botones
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });

    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Cargar un mensaje dinámico al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header h1');
    header.innerHTML = `Bienvenido a <strong>TRX.VC</strong>`;
    console.log("Página cargada correctamente.");
});
