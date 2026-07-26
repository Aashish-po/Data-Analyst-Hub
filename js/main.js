/* ═══════════════════════════════════════════════════════════════════
   DATA ANALYST WEBSITE — MAIN JAVASCRIPT
   Navigation, mobile menu, filters, form handling, smooth scroll
   ═══════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── MOBILE NAV TOGGLE ── */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.innerHTML = isOpen ? '✕' : '☰';
    });
  }

  /* ── SMOOTH SCROLL FOR ANCHOR LINKS ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', targetId);
      }
    });
  });

  /* ── FILTER BUTTONS ── */
  document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filterGroup = this.closest('.filter-bar');
      if (filterGroup) {
        filterGroup.querySelectorAll('.filter-btn').forEach(function (b) {
          b.classList.remove('active');
        });
      }
      this.classList.add('active');
      filterResources(this.getAttribute('data-filter'));
    });
  });

  /* ── RESOURCE FILTER LOGIC ── */
  window.filterResources = function (filter) {
    var items = document.querySelectorAll('.filterable-item');
    var visibleCount = 0;

    items.forEach(function (item) {
      if (filter === 'all') {
        item.style.display = '';
        visibleCount++;
      } else {
        var tags = (item.getAttribute('data-tags') || '').split(',');
        if (tags.indexOf(filter) !== -1) {
          item.style.display = '';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      }
    });

    var noResults = document.querySelector('.filter-no-results');
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? '' : 'none';
    }
  };

  /* ── CONTACT FORM HANDLING ── */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      var name = contactForm.querySelector('#contact-name');
      var email = contactForm.querySelector('#contact-email');
      var message = contactForm.querySelector('#contact-message');

      if (name && !name.value.trim()) {
        showFieldError(name, 'Name is required.');
        valid = false;
      } else { clearFieldError(name); }

      if (email && !email.value.trim()) {
        showFieldError(email, 'Email is required.');
        valid = false;
      } else if (email && !isValidEmail(email.value)) {
        showFieldError(email, 'Please enter a valid email address.');
        valid = false;
      } else { clearFieldError(email); }

      if (message && !message.value.trim()) {
        showFieldError(message, 'Message is required.');
        valid = false;
      } else { clearFieldError(message); }

      if (valid) {
        var successMsg = contactForm.querySelector('.form-success');
        if (successMsg) {
          successMsg.classList.add('visible');
          contactForm.reset();
          setTimeout(function () {
            successMsg.classList.remove('visible');
          }, 5000);
        }
      }
    });
  }

  /* ── FEEDBACK FORM HANDLING ── */
  var feedbackForm = document.getElementById('feedback-form');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      var name = feedbackForm.querySelector('#feedback-name');
      var email = feedbackForm.querySelector('#feedback-email');
      var rating = feedbackForm.querySelector('#feedback-rating');
      var comments = feedbackForm.querySelector('#feedback-comments');

      if (name && !name.value.trim()) {
        showFieldError(name, 'Name is required.');
        valid = false;
      } else { clearFieldError(name); }

      if (email && !email.value.trim()) {
        showFieldError(email, 'Email is required.');
        valid = false;
      } else if (email && !isValidEmail(email.value)) {
        showFieldError(email, 'Please enter a valid email address.');
        valid = false;
      } else { clearFieldError(email); }

      if (rating && !rating.value) {
        showFieldError(rating, 'Please select a rating.');
        valid = false;
      } else { clearFieldError(rating); }

      if (valid) {
        var successMsg = feedbackForm.querySelector('.form-success');
        if (successMsg) {
          successMsg.classList.add('visible');
          feedbackForm.reset();
          setTimeout(function () {
            successMsg.classList.remove('visible');
          }, 5000);
        }
      }
    });
  }

  /* ── ACTIVE NAV LINK HIGHLIGHT ── */
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── HELPER: SHOW FIELD ERROR ── */
  function showFieldError(field, message) {
    field.classList.add('invalid');
    var errorEl = field.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = 'block';
    }
  }

  /* ── HELPER: CLEAR FIELD ERROR ── */
  function clearFieldError(field) {
    field.classList.remove('invalid');
    var errorEl = field.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.style.display = 'none';
    }
  }

  /* ── HELPER: VALIDATE EMAIL ── */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

});