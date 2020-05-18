// Toggle menu on small screens

function toggleMenu() {
  let menu = document.querySelector('.menu-container');
  menu.classList.toggle('visible');
}

let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleMenu);


// toggle read more chatapp

function toggleChatapp() {
  let readChatapp = document.querySelector('.read-more-chatapp');
  readChatapp.classList.toggle('visible');
}

let chatappBtn = document.querySelector('.btn-toggle-chatapp');

chatappBtn.addEventListener('click', toggleChatapp);

// toggle read more myflix

function toggleMyflix() {
  let readMyflix = document.querySelector('.read-more-myflix');
  readMyflix.classList.toggle('visible');
}

let myflixBtn = document.querySelector('.btn-toggle-myflix');

myflixBtn.addEventListener('click', toggleMyflix);

