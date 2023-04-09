$(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  });
  