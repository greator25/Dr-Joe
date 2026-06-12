/* ============================================================
   Texas Lung Specialists — interactivity
   ============================================================ */
(function () {
  'use strict';

  /* ---- Sticky header shadow ---- */
  var header = document.getElementById('header');
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav ---- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var answer = item.querySelector('.faq-a');
      var isOpen = item.classList.toggle('open');
      answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : '0px';
    });
  });

  /* ---- Appointment form (front-end demo handler) ---- */
  var form = document.getElementById('apptForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = document.getElementById('formSuccess');
      if (success) {
        success.classList.add('show');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Condition panel ---- */
  var conditionOverlay = document.getElementById('conditionOverlay');
  var conditionButtons = document.querySelectorAll('.condition-action');
  var templatesWrap = document.getElementById('conditionTemplates');
  var panelContent = conditionOverlay ? conditionOverlay.querySelector('.condition-panel-content') : null;
  var closeCondition = function () {
    if (!conditionOverlay) return;
    conditionOverlay.classList.remove('show');
    conditionOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (panelContent) panelContent.innerHTML = '';
  };
  conditionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (!conditionOverlay || !templatesWrap || !panelContent) return;
      var id = button.getAttribute('data-condition');
      var tpl = templatesWrap.querySelector('.condition-template[data-condition="' + id + '"]');
      if (!tpl) return;
      // copy template content into panel
      panelContent.innerHTML = tpl.innerHTML;
      // ensure the panel title has the expected id for aria
      var h2 = panelContent.querySelector('h2');
      if (h2) h2.id = 'conditionPanelTitle';
      conditionOverlay.classList.add('show');
      conditionOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // focus close button for accessibility
      var closeBtn = conditionOverlay.querySelector('.close-btn');
      if (closeBtn) closeBtn.focus();
    });
  });
  if (conditionOverlay) {
    conditionOverlay.addEventListener('click', function (event) {
      if (event.target === conditionOverlay) {
        closeCondition();
      }
    });
    var closeBtn = conditionOverlay.querySelector('.close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeCondition);
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && conditionOverlay.classList.contains('show')) {
        closeCondition();
      }
    });
  }

  /* ---- Photo slideshow ---- */
  var slideshow = document.getElementById('slideshow');
  if (slideshow) {
    var slides = Array.prototype.slice.call(slideshow.querySelectorAll('.slide'));
    var dotsWrap = slideshow.querySelector('.slide-dots');
    var prevBtn = slideshow.querySelector('.slide-nav.prev');
    var nextBtn = slideshow.querySelector('.slide-nav.next');
    var current = 0;
    var timer = null;
    var INTERVAL = 2000;

    if (slides.length > 1) {
      // Build dots
      slides.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', function () { goTo(i); restart(); });
        dotsWrap.appendChild(dot);
      });
      var dots = Array.prototype.slice.call(dotsWrap.children);

      var goTo = function (i) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (i + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
      };
      var next = function () { goTo(current + 1); };
      var prev = function () { goTo(current - 1); };
      var start = function () { timer = window.setInterval(next, INTERVAL); };
      var restart = function () { window.clearInterval(timer); start(); };

      if (nextBtn) nextBtn.addEventListener('click', function () { next(); restart(); });
      if (prevBtn) prevBtn.addEventListener('click', function () { prev(); restart(); });
      slideshow.addEventListener('mouseenter', function () { window.clearInterval(timer); });
      slideshow.addEventListener('mouseleave', start);

      start();
    } else {
      // Single slide: hide controls
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
    }
  }
})();
