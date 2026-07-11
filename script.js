// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  
  // Year footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    // Toggle menu on hamburger click
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      mainNav.classList.toggle('open');
      const isOpen = mainNav.classList.contains('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.site-header')) {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      status.textContent = 'Message sent! We\'ll be in touch soon.';
      contactForm.reset();
      setTimeout(() => {
        status.textContent = '';
      }, 3000);
    });
  }

});
