let dot = document.querySelector(".dot");
let dot1 = document.querySelector(".dot1");
let dot2 = document.querySelector(".dot2");
let dot3 = document.querySelector(".dot3");
let dot4 = document.querySelector(".dot4");
let dot5 = document.querySelector(".dot5");
let dot6 = document.querySelector(".dot6");

let slideIndex = 1;
showSlides(slideIndex);
dot1.classList.add("bg-y")

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));

  if(n === 1 && !dot1.classList.contains("bg")) {
    dot1.classList.add("bg-y");
    dot2.classList.remove("bg-y");
    dot3.classList.remove("bg-y");
    dot4.classList.remove("bg-y");
    dot5.classList.remove("bg-y");
    dot6.classList.remove("bg-y");
  } else if (n === 2 ) {
    dot2.classList.add("bg-y");
    dot1.classList.remove("bg-y");
    dot3.classList.remove("bg-y");
    dot4.classList.remove("bg-y");
    dot5.classList.remove("bg-y");
    dot6.classList.remove("bg-y");
  } else if (n === 3 ) {
    dot3.classList.add("bg-y");
    dot1.classList.remove("bg-y");
    dot2.classList.remove("bg-y");
    dot4.classList.remove("bg-y");
    dot5.classList.remove("bg-y");
    dot6.classList.remove("bg-y");
  } else if (n === 4 ) {
    dot4.classList.add("bg-y");
    dot1.classList.remove("bg-y");
    dot2.classList.remove("bg-y");
    dot3.classList.remove("bg-y");
    dot5.classList.remove("bg-y");
    dot6.classList.remove("bg-y");
  } else if (n === 5 ) {
    dot5.classList.add("bg-y");
    dot1.classList.remove("bg-y");
    dot2.classList.remove("bg-y");
    dot3.classList.remove("bg-y");
    dot4.classList.remove("bg-y");
    dot6.classList.remove("bg-y");
  } else if (n === 6 ) {
    dot6.classList.add("bg-y");
    dot1.classList.remove("bg-y");
    dot2.classList.remove("bg-y");
    dot3.classList.remove("bg-y");
    dot4.classList.remove("bg-y");
    dot5.classList.remove("bg-y");
  }
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

