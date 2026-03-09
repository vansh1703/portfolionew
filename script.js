/* ============================================
   VANSH VARUN — PORTFOLIO SCRIPT
   ============================================ */

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- Mobile hamburger ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ---- Fade-up scroll animations ----
const fadeTargets = document.querySelectorAll(
  '.exp-card, .client-card, .edu-card, .skill-group, .about-grid, .startup-hero, .contact-box'
);

fadeTargets.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeTargets.forEach(el => observer.observe(el));

// ---- Staggered children fade for cards ----
document.querySelectorAll('.startup-features-grid, .client-cards').forEach(container => {
  const children = container.children;
  Array.from(children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 80}ms`;
  });
});

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const sTop = section.offsetTop;
    const sH = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= sTop && scrollY < sTop + sH) {
      links.forEach(a => a.classList.remove('active-nav'));
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active-nav');
    }
  });
});

// ---- Hero title stagger on load ----
window.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.hero-title .line');
  lines.forEach((line, i) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(20px)';
    line.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    setTimeout(() => {
      line.style.opacity = '1';
      line.style.transform = 'translateY(0)';
    }, 200 + i * 150);
  });

  const heroEl = ['.hero-badge', '.hero-role', '.hero-desc', '.hero-actions', '.hero-stats'];
  heroEl.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 400 + i * 120);
  });

  const floats = document.querySelectorAll('.hero-card-float');
  floats.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transition = 'opacity 0.8s ease';
    setTimeout(() => {
      card.style.opacity = '1';
    }, 900 + i * 200);
  });
});