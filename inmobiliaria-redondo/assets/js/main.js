/* main.js — comportamientos de interfaz globales */

/* ── Header scroll shadow ─────────────────────────────────── */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  const update = () => header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ── Mobile nav ───────────────────────────────────────────── */
function initMobileNav() {
  const toggle    = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!toggle || !mobileNav) return;

  const open = () => {
    toggle.classList.add('open');
    mobileNav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    toggle.classList.remove('open');
    mobileNav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () =>
    mobileNav.classList.contains('open') ? close() : open()
  );
  mobileNav.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── Active nav link ──────────────────────────────────────── */
function initActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop();
    const isActive = href === current;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

/* ── Language buttons ─────────────────────────────────────── */
function initLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => window.I18n?.setLang(btn.dataset.lang));
  });
}

/* ── Scroll-reveal animation ──────────────────────────────── */
function initAnimations() {
  const els = document.querySelectorAll('[data-animate], .reveal');
  if (!els.length || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('reveal')) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.add('animate-fade-up');
        }
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => io.observe(el));
}

/* ── Counter animation ────────────────────────────────────── */
function animateCounter(el, target, duration) {
  duration = duration || 1400;
  const start = performance.now();
  const step = now => {
    const p   = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * ease).toLocaleString('es-ES') + (el.dataset.suffix || '');
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseInt(entry.target.dataset.counter, 10));
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => io.observe(el));
}

/* ── FAQ accordion ────────────────────────────────────────── */
function initFaqAccordion() {
  var triggers = document.querySelectorAll('.faq-trigger');
  if (!triggers.length) return;

  triggers.forEach(function (trigger) {
    var item = trigger.closest('.faq-item');
    var body = item.querySelector('.faq-body');

    trigger.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      /* Cierra todos los abiertos */
      document.querySelectorAll('.faq-item.open').forEach(function (open) {
        open.classList.remove('open');
        open.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        var b = open.querySelector('.faq-body');
        b.style.maxHeight = '0';
        b.setAttribute('aria-hidden', 'true');
      });

      /* Abre el pulsado si estaba cerrado */
      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
        body.setAttribute('aria-hidden', 'false');
      }
    });
  });
}

/* ── Map overlay: click to interact ──────────────────────── */
function initMapOverlay() {
  const overlay = document.getElementById('map-overlay');
  if (!overlay) return;
  const activate = () => overlay.classList.add('is-active');
  overlay.addEventListener('click', activate);
  overlay.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') activate();
  });
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  initHeaderScroll();
  initMobileNav();
  initActiveNav();
  initLangButtons();
  initAnimations();
  initCounters();
  initFaqAccordion();
  initMapOverlay();
});
