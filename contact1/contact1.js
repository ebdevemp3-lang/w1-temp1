/* ============================================
   CONTACT — Interactive JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  var animElements = document.querySelectorAll('.ebci20-anim-up');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('ebci20-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    animElements.forEach(function (el) {
      el.classList.add('ebci20-visible');
    });
  }
});
