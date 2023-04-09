const headerCarousel = document.querySelector('#header-carousel');
let startX, startY, isDragging = false;

headerCarousel.addEventListener('mousedown', e => {
  startX = e.pageX - headerCarousel.offsetLeft;
  startY = e.pageY - headerCarousel.offsetTop;
  isDragging = true;
});

headerCarousel.addEventListener('mousemove', e => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - headerCarousel.offsetLeft;
  const walk = (x - startX) * 3;
  headerCarousel.scrollLeft = headerCarousel.scrollLeft - walk;
});

headerCarousel.addEventListener('mouseup', () => {
  isDragging = false;
});
