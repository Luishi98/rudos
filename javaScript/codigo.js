/*
// Obtener elementos necesarios
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-item:not(:first-child)");
const contenedor = document.querySelector(".contenedor");

// Función para mostrar/ocultar el menú desplegable
function toggleMenu() {
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
  if (isSmallScreen) {
    const isMenuOpen = nav.classList.contains("nav__menu--open");
    navItems.forEach((item) => {
      item.style.display = isMenuOpen ? "none" : "block";
    });

    nav.classList.toggle("nav__menu--open");

    contenedor.style.position = isMenuOpen ? "static" : "relative";
  }
}
*/


/*Prueba para mensaje en dispositivo movil*/

const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-item:not(:first-child)");
const contenedor = document.querySelector(".contenedor");
const cartel = document.getElementById('cartel');

// Función para mostrar/ocultar el menú desplegable
function toggleMenu() {
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
  if (isSmallScreen) {
    const isMenuOpen = nav.classList.contains("nav__menu--open");
    navItems.forEach((item) => {
      item.style.display = isMenuOpen ? "none" : "block";
    });

    nav.classList.toggle("nav__menu--open");

    contenedor.style.position = isMenuOpen ? "static" : "relative";

    // Mostrar/ocultar el cartel según el menú esté abierto o cerrado
    cartel.style.display = isMenuOpen ? "none" : "block";
  }
}

// Agregar evento para mostrar/ocultar el menú al hacer clic
nav.addEventListener('click', toggleMenu);

// Función para mostrar el cartel si el ancho de la pantalla es menor a 768px y aún no se ha mostrado
function showCartelIfSmallScreen() {
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
  const cartelAlreadyShown = localStorage.getItem('cartelShown');

  if (isSmallScreen && !cartelAlreadyShown) {
    cartel.style.display = "block";
    localStorage.setItem('cartelShown', 'true');
  }
}

// Mostrar el cartel al cargar la página si es una pantalla pequeña y aún no se ha mostrado
showCartelIfSmallScreen();

// Agregar evento para ocultar el cartel al hacer clic fuera de .nav
document.addEventListener('click', function(event) {
  cartel.style.display = 'none';
});


/*fin prueba*/