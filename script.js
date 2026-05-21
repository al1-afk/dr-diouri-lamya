/* =========================================================
   Dr DIOURI Lamya — Interactions & Animations
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------- Loader -------------------- */
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 800);
  });

  /* -------------------- Year -------------------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* -------------------- Custom Cursor -------------------- */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  let mouseX = 0, mouseY = 0;
  let followX = 0, followY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  const animateFollower = () => {
    followX += (mouseX - followX) * 0.12;
    followY += (mouseY - followY) * 0.12;
    follower.style.left = followX + 'px';
    follower.style.top = followY + 'px';
    requestAnimationFrame(animateFollower);
  };
  animateFollower();

  const hoverables = document.querySelectorAll('a, button, .service-card, .expertise-card, .testimonial-card, .feature-card, .resource-card, input, select, textarea');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      follower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      follower.classList.remove('hover');
    });
  });

  /* -------------------- Progress Bar -------------------- */
  const progressBar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
  });

  /* -------------------- Navbar Scroll -------------------- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* -------------------- Mobile Menu -------------------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  /* -------------------- Active Nav Link on Scroll -------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  });

  /* -------------------- Reveal on Scroll -------------------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.revealDelay || 0;
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* -------------------- Counter Animation -------------------- */
  const counters = document.querySelectorAll('[data-count]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.count;
        const duration = 2000;
        const startTime = performance.now();

        const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

        const update = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutQuart(progress);
          const value = Math.round(target * eased);
          el.textContent = value.toLocaleString('fr-FR');
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => countObserver.observe(c));

  /* -------------------- Smooth Scroll -------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* -------------------- Form -------------------- */
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      success.classList.add('active');
      form.reset();
      setTimeout(() => success.classList.remove('active'), 6000);
    });
  }

  /* -------------------- Parallax Hero -------------------- */
  const heroImageFrame = document.querySelector('.hero-image-frame');
  const floatingCards = document.querySelectorAll('.floating-card');
  if (heroImageFrame && window.innerWidth > 1024) {
    document.querySelector('.hero').addEventListener('mousemove', (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroImageFrame.style.transform = `perspective(1200px) rotateY(${-4 - x * 4}deg) rotateX(${2 - y * 3}deg)`;

      floatingCards.forEach((card, i) => {
        const factor = (i + 1) * 8;
        card.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    });
  }
});
