window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('navbar-scroll', window.scrollY > 0);
});

// "Escribe" el texto
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

// Llamar a cambiarPagina con el ID del modal activo
// Por ejemplo: cambiarPagina(1, 'mi-modal-uno');
let paginaActual = 1;
const totalPaginas = 50;

function cambiarPagina(direccion, modalId) {
    let nuevaPagina = paginaActual + direccion;
    if (nuevaPagina < 1 || nuevaPagina > totalPaginas) {
        return; // No hacer nada si llegó en el límite de las páginas
    }

    let modalPaginas = document.querySelectorAll("#" + modalId + " .pagina");
    modalPaginas[paginaActual - 1].style.display = 'none';
    modalPaginas[nuevaPagina - 1].style.display = 'block';
    paginaActual = nuevaPagina;
}


// Para "devolver" un evento al pulsar una opción 
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



document.querySelectorAll('.box-card').forEach(function(card) {
    card.addEventListener('click', function() {
        const genero = this.querySelector('.text-generos').textContent;

        let enlaces = `<a href="/">Inicio</a>`; // Default links

        switch (genero) {
            case 'Ciencia Ficción':
                enlaces = `
                <a href="/ciencia-ficcion/novelas">Novelas</a>
                <a href="/ciencia-ficcion/cuentos">Cuentos</a>
                <a href="/ciencia-ficcion/autores">Autores</a>
                `;
                break;
            case 'Aventura':

                enlaces = `
                <a href="/aventura/exploraciones">Exploraciones</a>
                <a href="/aventura/tesoros">Tesoros</a>
                <a href="/aventura/autores">Autores</a>
                `;
                break;
            case 'Romance':
                break; 
            case 'Poesía':
                break;
            case 'Policiales':
                break;   
            case 'Terror':
                break;
        }

        // Configuración del menú de navegación y overlay
        const menuGeneros = document.getElementById('menu-generos');
        menuGeneros.innerHTML = `<h2>${genero}</h2><nav>${enlaces}</nav>`;
        menuGeneros.style.display = 'block';
        menuGeneros.style.transform = 'translateX(0)';
        document.getElementById('overlay').style.display = 'block';

        // Configuración del botón "Cerrar"
        const closeButton = document.createElement('button');
        closeButton.classList.add('btn-modal');
        closeButton.textContent = 'Cerrar';
        closeButton.onclick = function() {
            // Lógica para ocultar menú, overlay y detener el video
            document.querySelector('.section-contenido-destacado-generos').classList.remove('column-layout');
            document.querySelectorAll('.box-card').forEach(c => c.classList.remove('card-out'));
            menuGeneros.style.transform = 'translateX(100%)';
            setTimeout(() => menuGeneros.style.display = 'none', 500);
            document.getElementById('overlay').style.display = 'none';
        };
        menuGeneros.appendChild(closeButton);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  var navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', function() {
    // Obtiene todos los enlaces del menú desplegable
    var menuLinks = document.querySelectorAll('.nav-link');
    
    // Aplica las clases de animación de forma alternada
    menuLinks.forEach(function(link, index) {
      // Remueve clases previas para permitir que la animación se ejecute nuevamente
      link.classList.remove('shakeUp', 'shakeDown');
      
      // Aplica la clase de animación alternando entre shakeUp y shakeDown
      if(index % 2 === 0) {
        link.classList.add('shakeUp');
      } else {
        link.classList.add('shakeDown');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var navbarToggler = document.querySelector('.navbar-toggler');

  navbarToggler.addEventListener('click', function () {
    if (!this.classList.contains('stopped-animation')) {
      this.classList.add('stopped-animation');
    } else {
      this.classList.remove('stopped-animation'); // Opcional: Remover si deseas que la animación continúe después de cerrar
    }
  });
});



