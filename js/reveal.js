// js/reveal.js
// Fades/slides elements marked with class "reveal" into view as they
// enter the viewport. Respects prefers-reduced-motion via CSS.
//
// Progressive enhancement: elements are visible by default (see utilities.css).
// This script is the ONLY thing that ever hides them (by adding "reveal-armed"),
// right before observing them. If JS fails to load for any reason, content
// simply stays visible instead of being stuck invisible.

function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    // no IO support — leave elements in their default visible state
    return;
  }

  targets.forEach((el) => el.classList.add('reveal-armed'));

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}
