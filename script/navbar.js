const nav = document.querySelector(".nav");
const navBurger = document.querySelector(".nav-bar-burger");
const navBar = document.querySelector(".nav-links");

navBurger.addEventListener("click", () => {
  // Toggle Nav
  nav.classList.toggle("show");
  navBar.classList.toggle("show");
  navBurger.classList.toggle("nav-bar-burger-inc");
});