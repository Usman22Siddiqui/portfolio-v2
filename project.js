/* ═══════════════════════════════════════════════════════════
   USMAN.SYS — Project Case Study Controller
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCustomCursor();
  renderProjectDetail();

  window.addEventListener('hashchange', () => {
    renderProjectDetail();
    bindCursorHoverTargets();
  });
  window.addEventListener('popstate', () => {
    renderProjectDetail();
    bindCursorHoverTargets();
  });
});

function initNavbar() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  menu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('active');
    });
  });
}

function getActiveProjectId() {
  // 1. Check URL query param ?id=...
  const urlParams = new URLSearchParams(window.location.search);
  const paramId = urlParams.get('id');
  if (paramId && PROJECTS_DATA[paramId]) {
    try { localStorage.setItem('active_project', paramId); } catch(e) {}
    return paramId;
  }

  // 2. Check URL hash #...
  const hashId = window.location.hash.replace('#', '').trim();
  if (hashId && PROJECTS_DATA[hashId]) {
    try { localStorage.setItem('active_project', hashId); } catch(e) {}
    return hashId;
  }

  // 3. Check localStorage
  try {
    const storedId = localStorage.getItem('active_project');
    if (storedId && PROJECTS_DATA[storedId]) {
      return storedId;
    }
  } catch(e) {}

  return 'clinicflo-ai';
}

function renderProjectDetail() {
  const container = document.getElementById('project-detail-container');
  if (!container) return;

  const projectId = getActiveProjectId();
  const project = PROJECTS_DATA[projectId] || PROJECTS_DATA['clinicflo-ai'];

  const projectKeys = Object.keys(PROJECTS_DATA);
  const currentIndex = projectKeys.indexOf(projectId) >= 0 ? projectKeys.indexOf(projectId) : 0;
  const prevId = projectKeys[(currentIndex - 1 + projectKeys.length) % projectKeys.length];
  const nextId = projectKeys[(currentIndex + 1) % projectKeys.length];
  const prevProject = PROJECTS_DATA[prevId];
  const nextProject = PROJECTS_DATA[nextId];

  // Update Page Title
  document.title = `${project.title} — Case Study | Muhammad Usman Siddiqui`;

  container.innerHTML = `
    <!-- Hero Header -->
    <div class="project-hero">
      <div class="project-hero__bg-image" aria-hidden="true">
        <img src="case-study-bg.jpg" alt="" loading="eager">
      </div>
      <div class="project-hero__inner">
        <a href="index.html#work" class="project-back">← BACK TO WORK OVERVIEW</a>
        <span class="project-hero__type">${project.subtitle}</span>
        <h1 class="project-hero__title">${project.title}</h1>
        <p class="project-hero__tagline">${project.tagline}</p>
        <div class="project-hero__actions">
          ${project.liveUrl && project.liveUrl !== '#' ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn--accent">LAUNCH LIVE APP <span class="btn__arrow">↗</span></a>
          ` : ''}
          ${project.githubUrl && !project.isPrivate ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn--repo">VIEW REPOSITORY <span class="btn__arrow">↗</span></a>
          ` : `
            <span class="tag" style="background: rgba(221, 161, 94, 0.2); color: var(--gold); padding: 0.85rem 1.6rem; font-size: 0.78rem; font-family: var(--font-mono); font-weight: 600; border: 1.5px solid var(--gold); border-radius: 6px; letter-spacing: 0.12em; box-shadow: 0 4px 16px rgba(221, 161, 94, 0.15);">CONFIDENTIAL // PRIVATE ENTERPRISE CODEBASE</span>
          `}
        </div>
      </div>
    </div>

    <!-- Main Case Study Body -->
    <div class="project-body">
      <div class="project-body__inner">
        <div class="project-main-col">
          <!-- Overview -->
          <section class="project-section">
            <h2 class="project-section__title">EXECUTIVE OVERVIEW</h2>
            <p class="project-section__p">${project.overview}</p>
          </section>

          <!-- Key Features -->
          <section class="project-section">
            <h2 class="project-section__title">KEY SYSTEM ARCHITECTURE &amp; CAPABILITIES</h2>
            <div class="project-feature-list">
              ${project.features.map((f, i) => `
                <div class="project-feature-item">
                  <span style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--gold); letter-spacing: 0.15em; display: block; margin-bottom: 0.2rem;">MODULE 0${i + 1}</span>
                  <strong>${f.title}</strong>
                  <p>${f.desc}</p>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- Engineering Challenges & Solutions -->
          <section class="project-section">
            <h2 class="project-section__title">ENGINEERING CHALLENGES &amp; SOLUTIONS</h2>
            <div class="project-feature-list">
              ${project.challenges.map((c, i) => `
                <div class="project-feature-item" style="border-left-color: var(--gold);">
                  <span style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--burnt); letter-spacing: 0.15em; display: block; margin-bottom: 0.2rem;">CHALLENGE 0${i + 1}</span>
                  <strong>${c.title}</strong>
                  <p>${c.desc}</p>
                </div>
              `).join('')}
            </div>
          </section>
        </div>

        <!-- Sidebar / Architecture Meta -->
        <aside class="project-sidebar">
          <!-- Tech Stack -->
          <div class="sidebar-card">
            <h3 class="sidebar-card__title">TECHNOLOGY STACK</h3>
            <div class="sidebar-tech-pills">
              ${project.tags.map(t => `<span>${t}</span>`).join('')}
            </div>
          </div>

          <!-- Architecture Breakdown -->
          <div class="sidebar-card">
            <h3 class="sidebar-card__title">SYSTEM ARCHITECTURE PIPELINE</h3>
            <div class="architecture__diagram" style="margin-top: 0.5rem;">
              ${project.architecture.map((a, idx) => `
                <div class="arch__layer" style="flex-direction: column; align-items: flex-start; gap: 0.3rem; background: var(--cream-dark); border-color: var(--border);">
                  <span class="arch__label" style="color: var(--olive); font-size: 0.65rem;">${a.layer}</span>
                  <p style="font-size: 0.75rem; color: var(--forest); line-height: 1.4;">${a.desc}</p>
                </div>
                ${idx < project.architecture.length - 1 ? '<div class="arch__connector" style="color: var(--olive);">↓</div>' : ''}
              `).join('')}
            </div>
          </div>

          <!-- Project Meta -->
          <div class="sidebar-card">
            <h3 class="sidebar-card__title">ENGINEERING SPECIFICATIONS</h3>
            <div style="font-family: var(--font-mono); font-size: 0.72rem; display: flex; flex-direction: column; gap: 0.6rem; color: var(--forest);">
              <div><strong style="color: var(--olive);">DISCIPLINE:</strong> Full Stack &amp; Systems Engineering</div>
              <div><strong style="color: var(--olive);">STATE:</strong> Production Ready // Active</div>
              <div><strong style="color: var(--olive);">CATEGORY:</strong> ${project.category}</div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- Next / Prev Case Navigation -->
    <div class="project-nav">
      <div class="project-nav__inner">
        <a href="project.html?id=${prevId}#${prevId}" class="btn btn--secondary" onclick="navigateToProject(event, '${prevId}')">← PREVIOUS: ${prevProject.title}</a>
        <a href="project.html?id=${nextId}#${nextId}" class="btn btn--primary" onclick="navigateToProject(event, '${nextId}')">NEXT: ${nextProject.title} →</a>
      </div>
    </div>
  `;

  window.scrollTo(0, 0);
  bindCursorHoverTargets();
}

function navigateToProject(event, id) {
  event.preventDefault();
  try { localStorage.setItem('active_project', id); } catch(e) {}
  history.pushState(null, '', `project.html?id=${id}#${id}`);
  renderProjectDetail();
}

/* ═══════════════════════════════════════════════════════════
   CUSTOM CURSOR ENGINE
   ═══════════════════════════════════════════════════════════ */
function initCustomCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  if ('ontouchstart' in window && window.innerWidth <= 768) {
    cursor.style.display = 'none';
    return;
  }

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;
  let isMoving = false;

  const dot = cursor.querySelector('.cursor__dot');
  const ring = cursor.querySelector('.cursor__ring');
  const label = cursor.querySelector('.cursor__label');

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isMoving) {
      isMoving = true;
      ringX = mouseX;
      ringY = mouseY;
      document.body.classList.add('cursor-active');
    }

    if (dot) {
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    if (isMoving) cursor.style.opacity = '1';
  });

  function renderRing() {
    if (isMoving && ring) {
      ringX += (mouseX - ringX) * 0.35;
      ringY += (mouseY - ringY) * 0.35;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      if (label) {
        label.style.transform = `translate3d(${ringX}px, ${ringY + 24}px, 0) translateX(-50%)`;
      }
    }
    requestAnimationFrame(renderRing);
  }
  renderRing();

  bindCursorHoverTargets();
}

function bindCursorHoverTargets() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
  const cursorLabel = cursor.querySelector('.cursor__label');
  const hoverTargets = document.querySelectorAll('a, button, [data-cursor], .project-card, .btn');

  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor--hover');
      const labelText = target.getAttribute('data-cursor');
      if (labelText && cursorLabel) {
        cursorLabel.textContent = labelText;
      } else if (cursorLabel) {
        cursorLabel.textContent = target.tagName === 'A' ? 'OPEN' : '';
      }
    });

    target.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor--hover');
      if (cursorLabel) cursorLabel.textContent = '';
    });
  });
}
