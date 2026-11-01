// js/projects-render.js
// Builds the project cards from SITE_DATA.projects (see data/content.js)

function renderProjects() {
  const grid = document.querySelector('[data-projects-grid]');
  if (!grid || typeof SITE_DATA === 'undefined') return;

  grid.innerHTML = SITE_DATA.projects
    .map(
      (project) => `
        <article class="project-card reveal">
          <div class="project-card__header">
            <span class="folder" aria-hidden="true">📁</span>
            <h3 class="project-card__title">${project.name}</h3>
          </div>
          <p class="project-card__desc">${project.description}</p>
          <div class="project-card__tags">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <a class="project-card__link" href="${project.link}" target="_blank" rel="noopener noreferrer">
            View Project <span class="arrow">-&gt;</span>
          </a>
        </article>
      `
    )
    .join('');
}
