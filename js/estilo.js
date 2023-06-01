// Obtener elementos del DOM
const menuTecnologia = document.querySelector('.menu-tecnologia');
const menuDeportes = document.querySelector('.menu-deportes');
const menuSalud = document.querySelector('.menu-salud');
const menuEntretenimiento = document.querySelector('.menu-entretenimiento');
const sectionTecnologia = document.querySelector('.tecnologia');
const sectionDeportes = document.querySelector('.deportes');
const sectionSalud = document.querySelector('.salud');
const sectionEntretenimiento = document.querySelector('.entretenimiento');
const horaActual = document.querySelector('#hora-actual');

// Función para mostrar la hora actual
function mostrarHoraActual() {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  horaActual.textContent = `Hora actual: ${hora}:${minutos < 10 ? '0' : ''}${minutos}`;
}

// Función para resaltar la sección activa
function resaltarSeccionActiva() {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos < sectionDeportes.offsetTop) {
    resaltarMenu(menuTecnologia);
    resaltarSection(sectionTecnologia);
  } else if (currentScrollPos >= sectionDeportes.offsetTop && currentScrollPos < sectionSalud.offsetTop) {
    resaltarMenu(menuDeportes);
    resaltarSection(sectionDeportes);
  } else if (currentScrollPos >= sectionSalud.offsetTop && currentScrollPos < sectionEntretenimiento.offsetTop) {
    resaltarMenu(menuSalud);
    resaltarSection(sectionSalud);
  } else {
    resaltarMenu(menuEntretenimiento);
    resaltarSection(sectionEntretenimiento);
  }
}

// Función para resaltar el menú
function resaltarMenu(menu) {
  const menus = document.querySelectorAll('nav a');
  menus.forEach(m => m.classList.remove('active'));
  menu.classList.add('active');
}

// Función para resaltar la sección
function resaltarSection(section) {
  const sections = document.querySelectorAll('section');
  sections.forEach(s => s.classList.remove('active'));
  section.classList.add('active');
}

// Evento para resaltar el menú y la sección activa
window.addEventListener('scroll', resaltarSeccionActiva);

// Mostrar la hora actual
mostrarHoraActual();
setInterval(mostrarHoraActual, 1000);
