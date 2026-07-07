// js/projects-render.js
// Builds the project cards from SITE_DATA.projects (see data/content.js),
// so adding/removing a project only requires editing that data file.

function renderProjects() {
  const grid = document.querySelector('[data-projects-grid]');
  if (!grid || typeof SITE_DATA === 'undefined') return;

  grid.innerHTML = SITE_DATA.projects
    .map(
      (project) => `
        <article class="project-card reveal">
          <h3 class="project-card__title">
            <span class="folder" aria-hidden="true">📁</span> ${project.name}
          </h3>
          <p class="project-card__desc">${project.description}</p>
          <div class="project-card__tags">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <a class="btn btn--primary" href="${project.link}">View Project &gt;</a>
        </article>
      `
    )
    .join('');
}
