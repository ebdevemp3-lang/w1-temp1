/* ============================================
   FLOATING BUTTONS — Interactive JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  var wrapper = document.querySelector('.ebctad20-wrapper');

  if (wrapper) {
    // Hide initially via class
    wrapper.classList.add('ebctad20-hidden');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        wrapper.classList.remove('ebctad20-hidden');
        wrapper.classList.add('ebctad20-show');
      } else {
        wrapper.classList.remove('ebctad20-show');
        wrapper.classList.add('ebctad20-hidden');
      }
    });
  }
});
