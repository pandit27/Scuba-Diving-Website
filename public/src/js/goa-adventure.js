/* window loader start */
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 200);
});
/* window loader end */

/* carousel start */
let defaultTransform = 0;
const slider = document.getElementById("slider");
const slideWidth = 398; // Width of each slide
const autoSlideInterval = 2000; // Interval in milliseconds for auto slide
let autoSlideTimer; // Timer for auto slide

function goNext() {
    defaultTransform -= slideWidth;
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

function goPrev() {
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform += slideWidth;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
        goNext();
    }, autoSlideInterval);
}

function stopAutoSlide() {
    clearInterval(autoSlideTimer);
}

// Add event listeners for previous and next buttons
document.getElementById("next").addEventListener("click", () => {
    stopAutoSlide();
    goNext();
});

document.getElementById("prev").addEventListener("click", () => {
    stopAutoSlide();
    goPrev();
});

// Start auto slide on page load
startAutoSlide();

/* carousel end */ 