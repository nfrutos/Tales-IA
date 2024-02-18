window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('navbar-scroll', window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', () => {
    // Función para iniciar la escritura en un elemento específico
    function startTyping(elementId) {
        const element = document.getElementById(elementId);
        if (element) { // Verifica si el elemento existe
            const text = element.getAttribute('data-text');
            typeWriter(element, text);
        }
    }

    // Función de escritura
    function typeWriter(element, text, i = 0) {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(element, text, i), 35); // Ajusta la velocidad de escritura aquí
        }
    }
    startTyping('typed-text-1');
    startTyping('typed-text-2');
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

document.addEventListener('DOMContentLoaded', () => {
  const text = '¿Repasamos un poco de historia juntos?';
  const container = document.getElementById('animatedCaida');

  // Procesar el texto para insertarlo con spans alrededor de cada letra
  const html = text.split(' ').map(word => 
    `<span class="word">${[...word].map(letter => 
      `<span class="text-caida">${letter}</span>`
    ).join('')}</span> `
  ).join('');

  container.innerHTML = html;

  // Aplicar animación con retraso a cada letra
  document.querySelectorAll('.text-caida').forEach((span, index) => {
    // Este retraso asegura que las letras no caigan todas al mismo tiempo
    span.style.animationDelay = `${index * 0.1}s`;
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var myCarousel = document.querySelector('#carouselExampleIndicators');
  var carousel = new bootstrap.Carousel(myCarousel);
});





