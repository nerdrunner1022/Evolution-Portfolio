// js/theme.js
// Handles Light / Dark theme toggling and persistence

function initTheme() {
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;

  // Check saved preference or fallback to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  root.setAttribute('data-theme', currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', activeTheme);
      localStorage.setItem('theme', activeTheme);
    });
  }
}

