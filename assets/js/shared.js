/* LITA — shared.js
   Navigation, placeholder images, and shared utilities */

document.addEventListener('DOMContentLoaded', () => {

  // ── Active nav link ────────────────────────────────────
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') && path.includes(a.getAttribute('href').replace('../', '').replace('index.html', ''))) {
      a.classList.add('active');
    }
  });

  // ── Scroll: add shadow to nav ──────────────────────────
  const nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 20
        ? '0 4px 24px rgba(0,0,0,0.35)'
        : 'none';
    });
  }

  // ── Lazy fade-in for sections ──────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.observe').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // ── Placeholder image injection ────────────────────────
  // Replaces any <div class="img-placeholder"> with a styled SVG placeholder
  // showing what image category goes here.
  // In production, replace the parent element with a real <img> tag.
  document.querySelectorAll('.img-placeholder').forEach(el => {
    const label = el.dataset.label || 'Image';
    el.innerHTML = `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="40" height="32" rx="2" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="16" cy="19" r="4" stroke="currentColor" stroke-width="1.5"/>
        <path d="M4 34 L14 24 L22 32 L30 23 L44 36" stroke="currentColor" stroke-width="1.5"/>
      </svg>
      <span>${label}</span>
    `;
  });

});

// ── Utility: root-relative path helper ─────────────────────
// Usage: rootPath('assets/css/style.css')
function rootPath(rel) {
  const depth = window.location.pathname.split('/').filter(Boolean).length;
  const prefix = depth <= 1 ? '' : '../'.repeat(depth - 1);
  return prefix + rel;
}
