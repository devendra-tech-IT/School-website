// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav after clicking a link
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form (front-end only — no backend wired up yet)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    status.textContent = 'Please fill in every field before sending.';
    status.style.color = '#A93226';
    return;
  }
  if (!emailPattern.test(email)) {
    status.textContent = 'Please enter a valid email address.';
    status.style.color = '#A93226';
    return;
  }

  // No backend connected yet — replace with a real submit handler later.
  status.textContent = `Thanks, ${name} — your message is ready to send once this form is connected to a backend.`;
  status.style.color = '#0A4F45';
  form.reset();
});
