const carousel = document.querySelector('.carousel');
const slides = Array.from(carousel.querySelectorAll('.carousel-item'));
const slideCount = slides.length;
let currentIndex = 0;

function showSlide(index) {
  slides[currentIndex].classList.remove('active');
  slides[index].classList.add('active');
  currentIndex = index;
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % slideCount;
  showSlide(nextIndex);
}

setInterval(nextSlide, 2000);

for (const slide of slides) {
  const image = slide.querySelector('img');
  image.classList.add('transform', 'transition', 'duration-500', 'ease-out');
  image.addEventListener('mouseenter', () => {
    image.classList.remove('scale-100');
    image.classList.add('scale-110');
  });
  image.addEventListener('mouseleave', () => {
    image.classList.remove('scale-110');
    image.classList.add('scale-100');
});

// Function to change the slide every 2 seconds
function changeSlide() {
    // Remove the current slide
    slides[currentSlide].classList.remove('opacity-100', 'translate-x-0');
    // Increment the current slide index
    currentSlide = (currentSlide + 1) % slides.length;
    // Add the new slide
    slides[currentSlide].classList.add('opacity-100', 'translate-x-0');
    }
    
    // Set an interval to change the slide every 2 seconds
    setInterval(changeSlide, 2000);
