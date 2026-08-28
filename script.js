/* ═══════════════════════════════════════════════════════════
   USMAN.SYS — Portfolio Interactions & 3D Ambient Engine
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // ─── AMBIENT 3D PARTICLES ───
  initAmbientCanvas();

  // ─── 3D CARD TILT ───
  init3DCardTilt();

  // ─── LOADING SCREEN ───
  initLoader();

  // ─── NAVBAR ───
  initNavbar();

  // ─── SCROLL REVEALS ───
  initScrollReveals();

  // ─── TERMINAL TYPING ───
  initTerminalTyping();

  // ─── CUSTOM CURSOR ───
  initCustomCursor();

  // ─── SMOOTH SCROLL (ONLY HASH ANCHORS) ───
  initSmoothScroll();

  // ─── ACTIVE SECTION TRACKING ───
  initSectionTracking();

  // ─── EASTER EGG ───
  initEasterEgg();
});

/* ═══════════════════════════════════════════════════════════
   3D AMBIENT CANVAS PARTICLES
   ═══════════════════════════════════════════════════════════ */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  const particleCount = Math.min(Math.floor(window.innerWidth / 20), 45);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.5 + 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.color = Math.random() > 0.4 ? 'rgba(96, 108, 56, 0.45)' : 'rgba(221, 161, 94, 0.5)';
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse parallax force
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          let force = (mouse.radius - distance) / mouse.radius;
          let directionX = (dx / distance) * force * 3;
          let directionY = (dy / distance) * force * 3;
          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function connect() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 140) {
          let opacity = (1 - distance / 140) * 0.22;
          ctx.strokeStyle = `rgba(96, 108, 56, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    connect();
    requestAnimationFrame(animate);
  }
  animate();
}

/* ═══════════════════════════════════════════════════════════
   3D CARD TILT ON HOVER
   ═══════════════════════════════════════════════════════════ */
function init3DCardTilt() {
  const cards = document.querySelectorAll('.project-card, .domain, .hero__terminal');
  const isFinePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
  if (!isFinePointer) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   LOADING SCREEN
   ═══════════════════════════════════════════════════════════ */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  document.body.classList.add('loading');

  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.classList.remove('loading');

    setTimeout(() => {
      document.querySelectorAll('.hero .reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('revealed'), i * 120);
      });
    }, 200);
  }, 1200);
}

/* ═══════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (!navbar || !toggle || !menu) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  menu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   SCROLL REVEAL
   ═══════════════════════════════════════════════════════════ */
function initScrollReveals() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal:not(.hero .reveal)').forEach(el => {
    observer.observe(el);
  });
}

/* ═══════════════════════════════════════════════════════════
   TERMINAL TYPING EFFECT
   ═══════════════════════════════════════════════════════════ */
function initTerminalTyping() {
  const terminalBody = document.querySelector('.terminal__body');
  if (!terminalBody) return;

  const lines = terminalBody.querySelectorAll('.terminal__line, .terminal__output, .terminal__status');

  lines.forEach((line) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(6px)';
  });

  setTimeout(() => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        line.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
      }, i * 150);
    });
  }, 1600);
}

/* ═══════════════════════════════════════════════════════════
   CUSTOM CURSOR
   ═══════════════════════════════════════════════════════════ */
function initCustomCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  const isFinePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isFinePointer || prefersReducedMotion) {
    cursor.style.display = 'none';
    return;
  }

  let mouseX = -100, mouseY = -100;
  let cursorX = -100, cursorY = -100;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const hoverTargets = document.querySelectorAll('a, button, [data-cursor]');
  const cursorLabel = cursor.querySelector('.cursor__label');

  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor--hover');
      const label = target.getAttribute('data-cursor');
      if (label && cursorLabel) {
        cursorLabel.textContent = label;
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

/* ═══════════════════════════════════════════════════════════
   SMOOTH SCROLL (ONLY FOR SAME-PAGE ANCHORS)
   ═══════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#' || targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   ACTIVE SECTION TRACKING
   ═══════════════════════════════════════════════════════════ */
function initSectionTracking() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.25,
    rootMargin: '-70px 0px -40% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/* ═══════════════════════════════════════════════════════════
   EASTER EGG (Konami Code)
   ═══════════════════════════════════════════════════════════ */
function initEasterEgg() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateDevMode();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

function activateDevMode() {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #283618;
    color: #FEFAE0;
    padding: 2rem 3rem;
    border-radius: 14px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    letter-spacing: 0.15em;
    text-align: center;
    z-index: 99999;
    border: 1px solid #DDA15E;
    box-shadow: 0 20px 60px rgba(40, 54, 24, 0.4);
    animation: devModeIn 0.4s ease, devModeOut 0.4s ease 2s forwards;
  `;
  notification.innerHTML = `
    <div style="color: #DDA15E; margin-bottom: 0.5rem;">[DEVELOPER MODE: ROOT ACCESS]</div>
    <div>USMAN.SYS KERNEL ENGAGED</div>
  `;

  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 2500);
}
