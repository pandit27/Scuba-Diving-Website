/* window loader start */
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 200);
});
/* window loader end */

/* header start */
// Get the navbar toggler and the navbar collapse element
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Add an event listener to the navbar toggler to toggle the visibility of the navbar collapse element
navbarToggler.addEventListener('click', function () {
  navbarCollapse.classList.toggle('show');
});

// Add an event listener to the window to hide the navbar collapse element when the user clicks outside of it
window.addEventListener('click', function (event) {
  if (!event.target.matches('.navbar-toggler')) {
    navbarCollapse.classList.remove('show');
  }
});
/* header end */

/* carousel start */
let defaultTransform = 0;
const slider = document.getElementById("slider");
const slideWidth = 398; // Width of each slide
const autoSlideInterval = 2000; // Interval in milliseconds for auto slide
let autoSlideTimer; // Timer for auto slide

function goNext() {
    defaultTransform -= slideWidth;
    if (Math.abs(defaultTransform) >= slider.scrollWidth - slider.clientWidth) {
        defaultTransform = 0;
    }
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
        goNext();
    }, autoSlideInterval);
}


function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
prev.addEventListener("click", goPrev);
// Start auto slide on page load
startAutoSlide();
/* carousel end */

