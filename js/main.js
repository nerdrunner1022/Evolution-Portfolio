// js/main.js
// App entry point. Keeps index.html clean by wiring up all behavior here.
// Loaded as a plain script (not type="module") so the whole site still
// works when opened directly from disk (file://) and not just via a server.
// nav.js, reveal.js, and projects-render.js must be included
// as <script> tags BEFORE this file — see index.html.

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderProjects();
  initReveal();

  // set current year in footer
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
