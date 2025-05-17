
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animation On Scroll)
  AOS.init();

  // Initialize Swiper
  new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 2500 },
    breakpoints: {
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 }
    }
  });

  const swiperContainer = document.querySelector('.swiper-container');
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  // Function to clone the slides
  function cloneSlides() {
    const slides = swiperWrapper.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
      const clone = slide.cloneNode(true); // Clone each slide
      swiperWrapper.appendChild(clone); // Append the clone to the end
    });
  }

  // Clone slides when the page loads
  window.addEventListener('load', cloneSlides);

  // Reset the position of the container after the scroll ends
  swiperContainer.addEventListener('animationiteration', () => {
    swiperWrapper.style.transform = 'translateX(0)'; // Reset the transform
  });
});

// Function for smooth scrolling to the menu
function scrollToMenu() {
  document.getElementById('menu').scrollIntoView({
    behavior: 'smooth'
  });
}

// Expose the scroll function to global scope
window.scrollToMenu = scrollToMenu;
