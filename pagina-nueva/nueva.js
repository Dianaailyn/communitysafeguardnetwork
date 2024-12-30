const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('show');
});

/**************************PÁGINA PRINCIPAL***************************** */
/*CARRUSEL */

let currentIndex = 0; // Índice actual del slide
const slides = document.querySelectorAll('.slider-box ul li'); // Slides del carrusel
const slider = document.querySelector('.slider-box ul'); // Contenedor de los slides
const dotsContainer = document.querySelector('.dots'); // Contenedor de puntos
const totalSlides = slides.length; // Total de slides
let autoSlide; // Intervalo para la reproducción automática

// Crear puntos dinámicamente
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.dataset.index = index; // Asigna el índice al punto
  dot.addEventListener('click', () => {
    clearInterval(autoSlide); // Detener reproducción automática temporalmente
    goToSlide(index); // Mover al slide correspondiente
    startAutoSlide(); // Reiniciar la reproducción automática
  });
  dotsContainer.appendChild(dot);
});

// Ir al slide específico
function goToSlide(index) {
  currentIndex = index;
  slider.style.transition = 'margin-left 0.5s ease'; // Animación suave
  slider.style.marginLeft = `-${currentIndex * 100}%`; // Desplazamiento al slide correspondiente
  updateDots();
}

// Actualizar clase activa en los puntos
function updateDots() {
  document.querySelectorAll('.dots span').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

/******Menu hamburguesa logo****/

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const logo = document.querySelector(".logo");
  const menu = document.querySelector(".menu");

  hamburgerMenu.addEventListener("click", function () {
    // Toggle la clase 'active' en el menú
    menu.classList.toggle("active");

    // Si el menú está activo, agrega la clase 'hidden' al logo (solo en pantallas pequeñas)
    if (menu.classList.contains("active")) {
      logo.classList.add("hidden");
    } else {
      logo.classList.remove("hidden");
    }
  });
});


