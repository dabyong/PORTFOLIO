// ==========================================================================
// Mobile nav toggle
// ==========================================================================
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the menu after tapping a link (mobile)
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ==========================================================================
// Highlight the current section in the nav while scrolling
// ==========================================================================
const sections = document.querySelectorAll('main section[id], header[id]');
const navLinks = document.querySelectorAll('[data-nav]');

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const target = link.getAttribute('href').replace('#', '');
    link.classList.toggle('is-active', target === id);
  });
};

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );
  sections.forEach((section) => observer.observe(section));
}

// ==========================================================================
// Footer year
// ==========================================================================
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
