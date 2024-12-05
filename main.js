// Selecciona elementos del DOM (Document Object Model) para manipularlos
let menu = document.querySelector('#menu-icon'); // Icono del menú (probablemente un botón para abrir/cerrar un menú desplegable)
let navbar = document.querySelector('.navbar'); // Barra de navegación principal
let header = document.querySelector('header'); // Elemento de encabezado de la página

// Evento para manejar el clic en el icono del menú
menu.onclick = () => 
{
    // Alterna las clases CSS 'bx-x' y 'active'
    // 'bx-x' podría cambiar la apariencia del icono del menú (por ejemplo, cambiarlo a una 'X')
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active'); // 'active' podría mostrar/ocultar el menú
}

// Evento para manejar el desplazamiento de la ventana (scroll)
window.onscroll = () =>
{
    // Elimina las clases CSS cuando se realiza un desplazamiento
    menu.classList.remove('bx-x');
    navbar.classList.remove('active'); // Asegura que el menú se cierra al desplazarse
}

// Agrega un efecto de sombra al encabezado cuando la página se desplaza
window.addEventListener('scroll', () => {
    // Agrega o elimina la clase 'shadow' dependiendo de si la página está desplazada
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Configuración de animaciones con la biblioteca ScrollReveal
const sr = ScrollReveal (
    {
        distance: '60px', // Distancia de desplazamiento de los elementos durante la animación
        duration: 2500,   // Duración de la animación en milisegundos
        delay: 400,       // Retardo antes de que comience la animación
        reset: true       // Permite que las animaciones se reinicien al hacer scroll nuevamente
    }
)

// Aplica animaciones a diferentes elementos del DOM
sr.reveal('.home-text', {delay: 200, origin: 'top'}); // Aparece desde la parte superior con un retraso de 200ms
sr.reveal('.home-img', {delay: 400, origin: 'top'}); // Imagen en la sección de inicio, aparece desde arriba con retraso
sr.reveal('.about-title, .about-text, .heading, .box, input, textarea, .social a', {
    delay: 200, 
    origin: 'top'
}); // Aplica la misma configuración a múltiples elementos como títulos, cajas de texto y enlaces sociales
