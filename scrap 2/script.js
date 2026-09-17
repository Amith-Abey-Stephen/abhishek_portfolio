/**
 * PILEA AGENCY CLONE - INTERACTIVE JAVASCRIPT
 * Handles tabs, video modal, calendar booking, FAQ accordion & smooth scrolling
 */

document.addEventListener('DOMContentLoaded', () => {
  initVideoModal();
  initMethodTabs();
  initBookingCalendar();
  initFaqAccordion();
  initBackToTop();
  initHeaderScroll();
});

/* ==========================================================================
   1. VIDEO MODAL PLAYER
   ========================================================================== */
function initVideoModal() {
  const modalBackdrop = document.getElementById('videoModal');
  const modalVideoFrame = document.getElementById('modalVideoFrame');
  const closeBtn = document.getElementById('modalCloseBtn');
  const triggers = document.querySelectorAll('[data-video-trigger]');

  const defaultVideo = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const videoSrc = trigger.getAttribute('data-video-src') || defaultVideo;
      openModal(videoSrc);
    });
  });

  function openModal(src) {
    if (!modalBackdrop || !modalVideoFrame) return;
    modalVideoFrame.src = src;
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop || !modalVideoFrame) return;
    modalBackdrop.classList.remove('open');
    modalVideoFrame.src = '';
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   2. METHOD IN 4 STEPS (TABS)
   ========================================================================== */
function initMethodTabs() {
  const tabButtons = document.querySelectorAll('.mockup-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update button active state
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update pane active state
      tabPanes.forEach(pane => {
        if (pane.getAttribute('id') === targetTab) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });
}

/* ==========================================================================
   3. CALENDAR BOOKING WIDGET
   ========================================================================== */
function initBookingCalendar() {
  const dayButtons = document.querySelectorAll('.calendar-day-btn:not(.disabled)');
  const slotButtons = document.querySelectorAll('.slot-item-btn');
  const bookingSummary = document.getElementById('bookingSelectedSummary');

  let selectedDay = '18';
  let selectedSlot = '6:00pm';

  function updateSummary() {
    if (bookingSummary) {
      bookingSummary.textContent = `Sélectionné : ${selectedDay} Octobre à ${selectedSlot}`;
    }
  }

  dayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dayButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedDay = btn.textContent.trim();
      updateSummary();
    });
  });

  slotButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      slotButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSlot = btn.textContent.trim();
      updateSummary();
    });
  });
}

/* ==========================================================================
   4. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Optional: Close others
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('open');
      });

      if (isOpen) {
        item.classList.remove('open');
      } else {
        item.classList.add('open');
      }
    });
  });
}

/* ==========================================================================
   5. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* ==========================================================================
   6. HEADER SCROLL EFFECT
   ========================================================================== */
function initHeaderScroll() {
  const headerWrapper = document.querySelector('.header-wrapper');
  if (!headerWrapper) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      headerWrapper.style.transform = 'translateY(-4px)';
    } else {
      headerWrapper.style.transform = 'translateY(0)';
    }
  });
}
