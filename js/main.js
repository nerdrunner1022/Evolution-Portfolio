// js/main.js
// App entry point. Keeps index.html clean by wiring up all behavior here.

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  renderProjects();
  initReveal();

  // set current year in footer
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
