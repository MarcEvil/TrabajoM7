// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log("Script de front-end cargado correctamente desde /public/js/script.js");

    // Ejemplo: Mostrar una alerta al hacer clic en un botón (si decides agregarlo)
    const botones = document.querySelectorAll('button');
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            alert('¡Interactividad funcionando!');
        });
    });
});