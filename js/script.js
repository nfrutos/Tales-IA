window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('navbar-scroll', window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const dialogBox = document.querySelector('.dialog-box-2');

    dialogBox.addEventListener('animationend', () => {
        typeWriter();
    });

    const text = "En Tales IA, se embarcarán en un viaje hacia mundos imaginarios y experiencias narrativas únicas, donde cada cuento es una obra maestra generada por inteligencia artificial. Estos relatos están diseñados meticulosamente para capturar y estimular la imaginación, ofreciendo una variedad de géneros y estilos que se adaptan a todos los gustos. Desde aventuras emocionantes hasta historias profundas y reflexivas, Tales IA es el destino perfecto para aquellos que buscan alimentar su curiosidad y pasión por la lectura. Cada historia es una puerta a un universo desconocido, esperando ser explorado por mentes ávidas de conocimiento y aventura. Aquí, la magia de la narrativa se une con el poder de la tecnología para crear experiencias de lectura inolvidables y enriquecedoras.";
    const typingSpeed = 35; // ajusta la velocidad de "escritura"
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typed-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
});


let paginaActual = 1;
const totalPaginas = 50;

function cambiarPagina(direccion, modalId) {
    let nuevaPagina = paginaActual + direccion;
    if (nuevaPagina < 1 || nuevaPagina > totalPaginas) {
        return; // No hacer nada si estamos en el límite de las páginas
    }

    let modalPaginas = document.querySelectorAll("#" + modalId + " .pagina");
    modalPaginas[paginaActual - 1].style.display = 'none';
    modalPaginas[nuevaPagina - 1].style.display = 'block';
    paginaActual = nuevaPagina;
}

// Llamar a cambiarPagina con el ID del modal activo
// Por ejemplo: cambiarPagina(1, 'mi-modal-uno');

document.addEventListener("DOMContentLoaded", function() {
    // Respuestas correctas para cada juego
    const respuestasCorrectas = {
        "div-juego-1": "Miguel de Cervantes",
        // ... Añadir las respuestas para los demás juegos
    };

    // El elemento de feedback global
    const feedbackGlobal = document.querySelector('.feedback-global');

    // Buscar todos los elementos de juego
    const juegos = document.querySelectorAll('[class^="div-juego-"]');

    juegos.forEach(juego => {
        const botones = juego.querySelectorAll('.respuesta');
        botones.forEach(boton => {
            boton.addEventListener('click', function() {
                const respuestaSeleccionada = boton.textContent;
                const divId = juego.className;
                const respuestaCorrecta = respuestasCorrectas[divId];

                if (respuestaSeleccionada === respuestaCorrecta) {
                    feedbackGlobal.textContent = '¡Correcto!';
                    feedbackGlobal.style.color = 'green';
                } else {
                    feedbackGlobal.textContent = 'Incorrecto. Intenta de nuevo.';
                    feedbackGlobal.style.color = 'red';
                }
            });
        });
    });
});
