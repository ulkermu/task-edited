const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  nav.classList.toggle('toggle-height')
})