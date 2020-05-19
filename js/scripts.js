// Toggle menu on small screens

function toggleMenu() {
  let menu = document.querySelector('.menu-container');
  menu.classList.toggle('visible');
}

let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleMenu);


// toggle read more chatapp

function readMoreChatapp() {
  let moreChatapp = document.querySelector('.read-more-chatapp');
  let chatappBtn = document.querySelector('.btn-toggle-chatapp');
  moreChatapp.classList.toggle('visible');

  if (moreChatapp.classList.contains('visible')) {
    chatappBtn.innerHTML = 'Read less';
  } else {
    chatappBtn.innerHTML = 'Read more';
  }
}

let chatappBtn = document.querySelector('.btn-toggle-chatapp');

chatappBtn.addEventListener('click', readMoreChatapp);

// toggle read more myflix

function readMoreMyflix() {
  let moreMyflix = document.querySelector('.read-more-myflix');
  let myflixBtn = document.querySelector('.btn-toggle-myflix');
  moreMyflix.classList.toggle('visible');

  if (moreMyflix.classList.contains('visible')) {
    myflixBtn.innerHTML = 'Read less';
  } else {
    myflixBtn.innerHTML = 'Read more';
  }
}

let myflixBtn = document.querySelector('.btn-toggle-myflix');

myflixBtn.addEventListener('click', readMoreMyflix);

