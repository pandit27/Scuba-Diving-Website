/* window loader start */
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 600);
});
/* window loader end */

/* header start */
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const button = document.querySelector('.nav-button');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenu.classList.add('hidden');
    }
});
/* header end */