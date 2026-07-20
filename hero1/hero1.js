/* ============================================
   HERO — Interactive JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Stat counter animation ---- */
  var statNumbers = document.querySelectorAll('.ebhro20-stat-number');

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var duration = 2000;
    var start = performance.now();

    function tick(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---- Slide-up entrance animation ---- */
  var animElements = document.querySelectorAll('.ebhro20-anim-up');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('ebhro20-visible');

          /* If it's a stat number, animate it */
          var nums = entry.target.querySelectorAll('.ebhro20-stat-number');
          nums.forEach(function (n) { animateCounter(n); });

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animElements.forEach(function (el) { observer.observe(el); });

    /* Also observe standalone stat numbers not inside anim-up */
    statNumbers.forEach(function (el) {
      if (!el.closest('.ebhro20-anim-up')) {
        observer.observe(el);
      }
    });
  } else {
    animElements.forEach(function (el) { el.classList.add('ebhro20-visible'); });
    statNumbers.forEach(function (el) { animateCounter(el); });
  }

  /* ---- Parallax mouse move on visual block ---- */
  var visualBlock = document.querySelector('.ebhro20-visual-block');
  var hero = document.querySelector('.ebhro20-hero');

  if (visualBlock && hero && window.innerWidth > 768) {
    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;

      var cards = visualBlock.querySelectorAll('.ebhro20-float-card');
      cards.forEach(function (card, i) {
        var depth = (i + 1) * 8;
        card.style.transform = 'translate(' + (x * depth) + 'px, ' + (y * depth) + 'px)';
      });
    });
  }
});
