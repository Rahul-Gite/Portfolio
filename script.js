// ── HAMBURGER MENU ──
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}

// ── SCROLL FADE-IN ANIMATION ──
// Adds class="fade-in" to all major elements, then watches them
const fadeTargets = document.querySelectorAll(
  'section h2, .skill-card, .project-card, .about-grid, .hero-tag, .hero-title, .hero-sub, .hero-cta'
);

fadeTargets.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Small delay so cards appear one by one
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeTargets.forEach(el => observer.observe(el));

// ── ACTIVE NAV LINK (highlights current section) ──
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) {
      current = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    }
  });
});

// ── SCROLL PHOTO ROTATION ──
const scrollPhoto = document.querySelector('.scroll-rotate, .photo-placeholder-fallback');

// window.addEventListener('scroll', () => {
//   if (!scrollPhoto) return;
//   const rotation = window.scrollY * 0.08; // speed — increase for faster spin
//   scrollPhoto.style.transform = `rotate(${rotation}deg)`;
// });
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});