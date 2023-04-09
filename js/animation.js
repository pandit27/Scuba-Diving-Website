// define the observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // apply the animation class to the element
        entry.target.classList.add('animated');
      } else {
        // remove the animation class from the element
        entry.target.classList.remove('animated');
      }
    });
  });
  
  // select the elements to observe
  const slideInDown = document.querySelector('.slide-in-down');
  const zoomIn = document.querySelector('.zoom-in');
  const slideInLeft = document.querySelector('.slide-in-left');
  const slideInRight = document.querySelector('.slide-in-right');
  
  // observe the elements
  observer.observe(slideInDown);
  observer.observe(zoomIn);
  observer.observe(slideInLeft);
  observer.observe(slideInRight);
  