/* ============================================
   HEADER & TOPBAR — Interactive JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('ebhdr20-navToggle');
  var navMenu = document.getElementById('ebhdr20-navMenu');
  var navClose = document.getElementById('ebhdr20-navClose');
  var dropdownToggle = document.querySelector('.ebhdr20-dropdown-toggle');
  var navDropdown = document.querySelector('.ebhdr20-nav-dropdown');

  // Toggle mobile menu drawer (Open / Close)
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Close mobile menu drawer via X button
  if (navClose && navMenu && navToggle) {
    navClose.addEventListener('click', function () {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  }

  // Close mobile menu when clicking outside of it
  document.addEventListener('click', function (e) {
    if (navMenu && navMenu.classList.contains('active')) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        if (navToggle) {
          navToggle.classList.remove('active');
        }
      }
    }
  });

  // Mobile Dropdown toggle click
  if (dropdownToggle && navDropdown) {
    dropdownToggle.addEventListener('click', function (e) {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        e.stopPropagation();
        navDropdown.classList.toggle('active');
      }
    });
  }

  // Close mobile menu when clicking any nav link
  var navLinks = document.querySelectorAll('.ebhdr20-nav-link:not(.ebhdr20-dropdown-toggle), .ebhdr20-dropdown-item a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenu) {
        navMenu.classList.remove('active');
      }
      if (navToggle) {
        navToggle.classList.remove('active');
      }
    });
  });
});
