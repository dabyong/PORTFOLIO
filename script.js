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


// Compact expandable portfolio projects.
// Keep the existing project case study intact, and move it behind an accessible
// native <details> control with a lightweight summary and dashboard preview.
(() => {
  const projectGrids = [...document.querySelectorAll('#projects .section-inner > .project-grid')];
  projectGrids.forEach((grid, index) => {
    const card = grid.querySelector('.project-card-featured');
    if (!card) return;
    const projectTitle = card.querySelector('.project-featured-content h3');
    const description = projectTitle?.nextElementSibling;
    const fileLabel = card.querySelector('.project-file');
    if (!projectTitle || !description) return;

    const gallery = grid.nextElementSibling?.classList.contains('project-gallery')
      ? grid.nextElementSibling
      : null;
    const details = document.createElement('details');
    details.className = 'project-disclosure';
    details.id = 'project-' + String(index + 1).padStart(2, '0');
    const summary = document.createElement('summary');
    summary.className = 'project-disclosure-summary';

    const copy = document.createElement('div');
    copy.className = 'project-summary-copy';
    const overline = document.createElement('span');
    overline.className = 'project-summary-overline';
    overline.textContent = fileLabel?.textContent || 'PROJECT ' + (index + 1);
    const heading = document.createElement('span');
    heading.className = 'project-summary-title';
    heading.setAttribute('role', 'heading');
    heading.setAttribute('aria-level', '3');
    heading.textContent = projectTitle.textContent;
    const body = document.createElement('span');
    body.className = 'project-summary-description';
    body.textContent = description.textContent.replace(/\s+/g, ' ').trim();
    const hint = document.createElement('span');
    hint.className = 'project-summary-action';
    hint.textContent = 'View project details +';
    copy.append(overline, heading, body, hint);

    const visual = document.createElement('div');
    visual.className = 'project-summary-visual';
    const existingImg = card.querySelector('.project-featured-visual img');
    if (existingImg) {
      const img = existingImg.cloneNode(true);
      if (index === 2) {
        // The first NYC Taxi dashboard page is Demand Overview.
        img.src = 'https://raw.githubusercontent.com/dabyong/nyc-taxi-demand-forecasting/main/assets/screenshots/01_demand_overview.png';
        img.alt = 'NYC Taxi Power BI Demand Overview dashboard, page one';
      }
      img.loading = 'lazy';
      visual.appendChild(img);
    } else {
      // Project 4's original default image is its CSS-drawn Streamlit preview.
      const demoPanel = card.querySelector('.project4-demo-panel');
      if (demoPanel) visual.appendChild(demoPanel.cloneNode(true));
    }
    summary.append(copy, visual);
    const expanded = document.createElement('div');
    expanded.className = 'project-disclosure-expanded';
    grid.before(details);
    details.append(summary, expanded);
    expanded.appendChild(grid);
    if (gallery) expanded.appendChild(gallery);
    details.addEventListener('toggle', () => {
      hint.textContent = details.open ? 'Hide project details −' : 'View project details +';
    });
  });
})();
