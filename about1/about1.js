document.addEventListener('DOMContentLoaded', () => {
  /* ============================================
     1. INTERACTIVE TABS SWITCHER
     ============================================ */
  const tabBtns = document.querySelectorAll('.ebabo20-tab-btn');
  const tabPanels = document.querySelectorAll('.ebabo20-tab-panel');

  if (tabBtns.length > 0 && tabPanels.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        // Remove active state from all buttons
        tabBtns.forEach(b => b.classList.remove('ebabo20-tab-active'));
        // Hide all panels
        tabPanels.forEach(p => p.classList.remove('ebabo20-panel-active'));

        // Add active state to clicked button
        btn.classList.add('ebabo20-tab-active');

        // Show target panel
        const activePanel = document.getElementById(`ebabo20-tab-${targetTab}`);
        if (activePanel) {
          activePanel.classList.add('ebabo20-panel-active');
        }
      });
    });
  }

  /* ============================================
     2. NUMERICAL STATS COUNTER ANIMATION
     ============================================ */
  const statNumbers = document.querySelectorAll('.ebabo20-sc-num');

  if (statNumbers.length > 0) {
    const observerOptions = {
      root: null,
      threshold: 0.2
    };

    const countUpObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);

          if (!isNaN(target)) {
            let start = 0;
            const duration = 1800; // ms
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                el.textContent = target;
                clearInterval(timer);
              } else {
                el.textContent = Math.floor(start);
              }
            }, stepTime);
          }
          // Stop observing once animated
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    statNumbers.forEach(num => countUpObserver.observe(num));
  }

  /* ============================================
     3. IMAGE HOVER TILT / PARALLAX MICRO-EFFECT
     ============================================ */
  const imgContainer = document.querySelector('.ebabo20-img-wrapper');
  if (imgContainer) {
    imgContainer.addEventListener('mousemove', (e) => {
      const rect = imgContainer.getBoundingClientRect();
      const x = e.clientX - rect.left - (rect.width / 2);
      const y = e.clientY - rect.top - (rect.height / 2);
      
      const tiltX = (y / rect.height) * -8;
      const tiltY = (x / rect.width) * 8;

      imgContainer.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.01, 1.01, 1.01)`;
    });

    imgContainer.addEventListener('mouseleave', () => {
      imgContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }
});
