// Obtener elementos necesarios
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-item:not(:first-child)");

// Función para mostrar/ocultar el menú desplegable
function toggleMenu() {
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
  if (isSmallScreen) {
    const isMenuOpen = nav.classList.contains("nav__menu--open");
    navItems.forEach((item) => {
      item.style.display = isMenuOpen ? "none" : "block";
    });

    nav.classList.toggle("nav__menu--open");
  }
}

// Evento para el botón de menú
const navLogo = document.querySelector(".logo");
navLogo.addEventListener("click", toggleMenu);
