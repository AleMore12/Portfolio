// Efecto desplazamiento en nav con las sections

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-link');

    window.addEventListener('scroll', function() {
        const fromTop = window.scrollY;

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (
                section.offsetTop <= fromTop + 50 &&
                section.offsetTop + section.offsetHeight > fromTop + 50
            ) {
                link.classList.add('active');
                animation.classList.add('start-' + link.innerHTML.toLowerCase());
            } else {
                link.classList.remove('active');
            }
        });
    });
});
// ---------------------------------------- CARDS  ----------------------------------- //

// CARDS ---CONOCIMIENTOS
document.addEventListener('scroll', function() {
    const seccion = document.getElementById('section_conocimientos');
    const distanciaDesdeLaParteSuperior = seccion.offsetTop;
    const distanciaDeLaVentana = window.scrollY;
    const alturaDeLaVentana = window.innerHeight;

    if (distanciaDeLaVentana > distanciaDesdeLaParteSuperior - alturaDeLaVentana / 2) {
        // Cuando el usuario está a mitad de camino dentro de la sección, activa la animación
        seccion.querySelector('.conocimientos').classList.add('cardBlur');
    } else {
        // Cuando el usuario está fuera de la sección, desactiva la animación
        seccion.querySelector('.conocimientos').classList.remove('cardBlur');
    }
});
// CARDS ---SERVICIOS
document.addEventListener('scroll', function() {
    const seccion = document.getElementById('section_servicios');
    const distanciaDesdeLaParteSuperior2 = seccion.offsetTop;
    const distanciaDeLaVentana2 = window.scrollY;
    const alturaDeLaVentana2 = window.innerHeight;

    if (distanciaDeLaVentana2 > distanciaDesdeLaParteSuperior2 - alturaDeLaVentana2 / 2) {
        // Cuando el usuario está a mitad de camino dentro de la sección, activa la animación
        seccion.querySelector('.servicios').classList.add('cardBlur');
    } else {
        // Cuando el usuario está fuera de la sección, desactiva la animación
        seccion.querySelector('.servicios').classList.remove('cardBlur');
    }
});

// -------------CARGA------------

window.addEventListener('load', function() {
    var areaDeCarga = document.getElementById('area-de-carga');
    // Retrasa la ocultación del área de carga para una transición suave
    setTimeout(function() {
        areaDeCarga.style.opacity = '0';
        areaDeCarga.style.visibility = 'hidden';
    }, 500); // Asegura que la animación de carga dure al menos 0.5 segundos
});













