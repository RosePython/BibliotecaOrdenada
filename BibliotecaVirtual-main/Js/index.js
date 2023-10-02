//CAROUSEL 1
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-1");
  const carouselItems = document.querySelectorAll(".carousel-item-1");
  const prevButton = document.querySelector(".prev-button-1");
  const nextButton = document.querySelector(".next-button-1");
  let currentIndex = 0;

  function showSlide(index) {
      const offset = -index * (carouselItems[0].clientWidth + 16); // Incluye la separación
      carousel.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  

  showSlide(currentIndex);


});


//CAROUSEL 2

document.addEventListener("DOMContentLoaded", function () {
const carousel = document.querySelector(".carousel-2");
const carouselItems = document.querySelectorAll(".carousel-item-2");
const prevButton = document.querySelector(".prev-button-2");
const nextButton = document.querySelector(".next-button-2");
let currentIndex = 0;

function showSlide(index) {
    const offset = -index * (carouselItems[0].clientWidth + 16); // Incluye la separación
    carousel.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);



showSlide(currentIndex);
});


//CAROUSEL 3
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-3");
  const carouselItems = document.querySelectorAll(".carousel-item-3");
  const prevButton = document.querySelector(".prev-button-3");
  const nextButton = document.querySelector(".next-button-3");
  let currentIndex = 0;
  
  function showSlide(index) {
      const offset = -index * (carouselItems[0].clientWidth + 16); // Incluye la separación
      carousel.style.transform = `translateX(${offset}px)`;
  }
  
  function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
  }
  
  function prevSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
  }
  
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);
  
  
  
  showSlide(currentIndex);
  });


// redireccion a traves del buscador

const campo = document.getElementById('campo');

campo.addEventListener('click', function () {
  // redireccion
  window.location.href = './Html/buscador.html';
});

// redireccion al libro prueba

const libro = document.getElementById('libroImg');

libro.addEventListener('click', function (){
  // redireccion
  window.location.href = './Html/libros.html';
});