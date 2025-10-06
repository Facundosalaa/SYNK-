// ========================================
// MENÚ HAMBURGUESA MÓVIL
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  
  // Crear el botón hamburguesa dinámicamente
  const header = document.querySelector('.site-header');
  const headerInner = document.querySelector('.header-inner');
  const nav = document.querySelector('.nav');
  
  // Crear botón hamburguesa
  const btnHamburguesa = document.createElement('button');
  btnHamburguesa.className = 'btn-hamburguesa';
  btnHamburguesa.setAttribute('aria-label', 'Abrir menú');
  btnHamburguesa.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  
  // Insertar el botón después del logo
  const brand = document.querySelector('.brand');
  brand.parentNode.insertBefore(btnHamburguesa, brand.nextSibling);
  
  // Toggle del menú
  btnHamburguesa.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
    btnHamburguesa.classList.toggle('active');
    document.body.classList.toggle('menu-abierto');
    
    // Cambiar aria-label
    const isOpen = nav.classList.contains('nav-active');
    btnHamburguesa.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });
  
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('nav-active');
      btnHamburguesa.classList.remove('active');
      document.body.classList.remove('menu-abierto');
    });
  });
  
  document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && !btnHamburguesa.contains(e.target)) {
      nav.classList.remove('nav-active');
      btnHamburguesa.classList.remove('active');
      document.body.classList.remove('menu-abierto');
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && nav.classList.contains('nav-active')) {
      nav.classList.remove('nav-active');
      btnHamburguesa.classList.remove('active');
      document.body.classList.remove('menu-abierto');
    }
  });
  
});