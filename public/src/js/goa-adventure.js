/* window loader start */
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 600);
});
/* window loader end */

/* carousel start */
import {
    Carousel,
    initTE,
} from "tw-elements";

initTE({ Carousel });
/* carousel end */ 