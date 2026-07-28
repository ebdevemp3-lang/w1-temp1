/**
 * ============================================================================
 * SERVICE HERO COMPONENT JAVASCRIPT — ebhro-serv20
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initEbhroServ20TiltEffect();
  initEbhroServ20ScrollAnimations();
});

/**
 * 3D Tilt Effect on Media Card
 */
function initEbhroServ20TiltEffect() {
  const mediaCard = document.getElementById('ebhro-serv20-mediaCard');
  if (!mediaCard) return;

  mediaCard.addEventListener('mousemove', (e) => {
    const rect = mediaCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    mediaCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  mediaCard.addEventListener('mouseleave', () => {
    mediaCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

/**
 * Intersection Observer for Entrance Animations
 */
function initEbhroServ20ScrollAnimations() {
  const animatedElements = document.querySelectorAll('.ebhro-serv20-anim-up');
  if (!animatedElements.length) return;

  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ebhro-serv20-appeared');
      }
    });
  }, { threshold: 0.15 });

  animatedElements.forEach(el => animObserver.observe(el));
}
