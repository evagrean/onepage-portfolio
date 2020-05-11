// Toggle menu on small screens

function toggleMenu() {
  let menu = document.querySelector('.menu-container');
  menu.classList.toggle('visible');
}

let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleMenu);
