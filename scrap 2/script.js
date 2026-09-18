document.addEventListener('DOMContentLoaded', () => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Scroll progress + nav state (condenses to logo pill like recording) ---------- */
  const prog = document.getElementById('scrollProgress');
  const nav = document.querySelector('.nav-wrap');
  function onScrollBar() {
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    if (prog) prog.style.transform = `scaleX(${p})`;
    const y = h.scrollTop;
    nav.classList.toggle('scrolled', y > 40);
    nav.classList.toggle('condensed', y > 120);
  }
  addEventListener('scroll', onScrollBar, { passive: true }); onScrollBar();

  /* ---------- Reveal on scroll (staggered) ---------- */
  const revealMap = [
    ['.sec-h', 'rv', 0],
    ['.feats > div', 'rv', 90],
    ['.step', 'rv', 0],
    ['.browser', 'rv-scale', 120],
    ['.case-hero', 'rv-scale', 0],
    ['.case-split, .invoice', 'rv', 0],
    ['.testi', 'rv', 0],
    ['.rev', 'rv', 60],
    ['.logo-grid > span', 'rv', 25],
    ['.juste', 'rv', 0],
    ['.cal', 'rv-scale', 0],
    ['.faq-r .acc, .faq-r h4', 'rv', 40],
    ['.book-head', 'rv', 0],
    ['.cta-center', 'rv', 0],
  ];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  revealMap.forEach(([sel, cls, stagger]) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add(cls);
      if (stagger) el.style.transitionDelay = Math.min(i * stagger, 600) + 'ms';
      io.observe(el);
    });
  });
  // clear entrance fill so later transforms (magnetic/parallax) win
  document.querySelectorAll('.hero-h1, .hero-sub, .hero-cta, .hero-stage, .nav-wrap').forEach(el => {
    el.addEventListener('animationend', e => {
      if (e.animationName === 'heroUp' || e.animationName === 'heroScale') el.style.animation = 'none';
    });
  });
  // case-hero inview for image zoom-out
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('inview');
  }), { threshold: 0.3 });
  document.querySelectorAll('.case-hero').forEach(el => cio.observe(el));

  /* ---------- Hero mouse parallax + tilt (section 1) ---------- */
  const stage = document.querySelector('.hero-stage');
  const video = document.querySelector('.hero-video');
  const cardL = document.querySelector('.fc-left');
  const cardI = document.querySelector('.fc-info');
  const cardF = document.querySelector('.fc-file');
  const fine = matchMedia('(pointer:fine)').matches;
  const mouseOwned = stage && !reduce && fine; // rAF loop owns card translate
  let mCX = 0, mCY = 0;
  if (stage && !reduce && fine) {
    let tx = 0, ty = 0, cx = 0, cy = 0;
    addEventListener('mousemove', e => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / r.width;
      const py = (e.clientY - (r.top + r.height / 2)) / r.height;
      tx = Math.max(Math.min(px, 1), -1); ty = Math.max(Math.min(py, 1), -1);
    });
    const cardScroll = (el, speed) => {
      if (!el || reduce) return 0;
      const r = el.getBoundingClientRect();
      return -((r.top + r.height / 2 - innerHeight / 2) * speed);
    };
    (function loop() {
      cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
      mCX = cx; mCY = cy;
      if (video) video.style.transform = `perspective(1200px) rotateY(${(cx * 4).toFixed(2)}deg) rotateX(${(-cy * 4).toFixed(2)}deg)`;
      // translate property composes with rotate() transform + margin drift — no fights.
      // mouse offset + scroll-parallax offset combined so the two never overwrite each other.
      if (cardL) cardL.style.translate = `${(cx * -26).toFixed(1)}px ${(cy * -18 + cardScroll(cardL, -0.08)).toFixed(1)}px`;
      if (cardI) cardI.style.translate = `${(cx * 24).toFixed(1)}px ${(cy * 14 + cardScroll(cardI, 0.12)).toFixed(1)}px`;
      if (cardF) cardF.style.translate = `${(cx * 30).toFixed(1)}px ${(cy * 20 + cardScroll(cardF, -0.1)).toFixed(1)}px`;
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- Section-1 scroll parallax: layers drift at own speeds ---------- */
  const plxEls = [...document.querySelectorAll('#hero [data-plx]')];
  const heroH1 = document.querySelector('.hero-h1');
  const heroSub = document.querySelector('.hero-sub');
  const heroCta = document.querySelector('.hero-cta');
  function heroParallax() {
    if (reduce) return;
    const vh = innerHeight;
    plxEls.forEach(el => {
      if (el.classList.contains('float-card') && mouseOwned) return; // owned by mouse loop (combined)
      const r = el.getBoundingClientRect();
      const off = (r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.plx || 0);
      el.style.translate = `0px ${(-off).toFixed(1)}px`;
    });
    // headline fades + rises faster as video scrolls (matches recording)
    const hr = document.querySelector('.hero-stage').getBoundingClientRect();
    const p = Math.min(Math.max(-hr.top / vh + 0.15, 0), 1);
    const fade = Math.max(1 - p * 1.6, 0);
    [heroH1, heroSub, heroCta].forEach(el => { if (el) el.style.opacity = fade.toFixed(2); });
  }
  addEventListener('scroll', heroParallax, { passive: true });

  /* ---------- Scroll-linked effects (rAF) ---------- */
  const caseHeros = [...document.querySelectorAll('.case-hero')];
  const heroStage = document.querySelector('.hero-stage');
  const glow = document.getElementById('pageGlow');
  let mx = innerWidth / 2, my = 0;
  addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  function raf() {
    const vh = innerHeight;
    if (heroStage && !reduce) {
      const r = heroStage.getBoundingClientRect();
      const p = Math.min(Math.max(-r.top / vh, 0), 1);
      heroStage.style.scale = `${1 - p * 0.04}`;
    }
    caseHeros.forEach(el => {
      const r = el.getBoundingClientRect();
      const p = Math.min(Math.max((vh - r.top) / (vh + r.height), 0), 1); // 0..1
      const tilt = -6 + p * 6; // -6deg -> 0 like pilea scroll-straighten
      el.style.setProperty('--tilt', tilt.toFixed(2) + 'deg');
      el.style.setProperty('--lift', ((1 - p) * 30).toFixed(1) + 'px');
    });
    // scroll-velocity skew on work rows
    if (glow) { glow.style.setProperty('--mx', (mx / innerWidth * 100) + '%'); glow.style.setProperty('--my', (my / 600 * 100) + '%'); }
    requestAnimationFrame(raf);
  }
  if (!reduce) requestAnimationFrame(raf);

  // skew work tracks with scroll velocity
  let lastSY = scrollY, skew = 0;
  const tracks = document.querySelectorAll('.w-track, .mq-track');
  addEventListener('scroll', () => {
    const v = scrollY - lastSY; lastSY = scrollY;
    skew += v * 0.02;
  }, { passive: true });
  (function skewLoop() {
    skew *= 0.92;
    tracks.forEach(t => { t.style.skewX = `${Math.max(Math.min(skew, 6), -6)}deg`; });
    requestAnimationFrame(skewLoop);
  })();

  /* ---------- Method timeline progress + active step ---------- */
  const method = document.querySelector('.method');
  const steps = [...document.querySelectorAll('.step')];
  if (method) {
    const bar = document.createElement('div'); bar.id = 'stepProgress'; method.appendChild(bar);
    const line = () => {
      const mr = method.getBoundingClientRect();
      const top = 220, bottom = mr.height - 120;
      const p = Math.min(Math.max((innerHeight * 0.55 - mr.top) / mr.height, 0), 1);
      bar.style.top = top + 'px'; bar.style.height = (bottom - top) * p + 'px';
    };
    const sio = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { steps.forEach(s => s.classList.remove('active')); e.target.classList.add('active'); }
    }), { threshold: 0.45 });
    steps.forEach(s => sio.observe(s));
    addEventListener('scroll', line, { passive: true }); line();
  }

  /* ---------- Magnetic buttons ---------- */
  if (matchMedia('(pointer:fine)').matches && !reduce) {
    document.querySelectorAll('.hero-cta .cta-white, .nav-btn, .dark-pill').forEach(el => {
      el.classList.add('mag');
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- Count-up invoice numbers ---------- */
  const cio2 = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target; cio2.unobserve(el);
    const txt = el.textContent;
    const m = txt.replace(/\s/g, '').match(/(\d[\d\s]*)/);
    if (!m) return;
    const target = parseInt(m[1].replace(/\s/g, ''), 10);
    if (!target || target < 50) return;
    const t0 = performance.now(), dur = 1400;
    (function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const e2 = 1 - Math.pow(1 - p, 3);
      el.textContent = txt.replace(m[1], Math.round(target * e2).toLocaleString('fr-FR'));
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }), { threshold: 0.6 });
  document.querySelectorAll('.inv-grid div').forEach(el => cio2.observe(el));

  /* ---------- FAQ (smooth, single-open per group heading) ---------- */
  document.querySelectorAll('.faq-r .acc > button').forEach(b => b.addEventListener('click', () => {
    const item = b.parentElement;
    const was = item.classList.contains('open');
    item.parentElement.querySelectorAll('.acc.open').forEach(x => x.classList.remove('open'));
    if (!was) item.classList.add('open');
  }));

  /* ---------- Modal spring ---------- */
  const modal = document.getElementById('modal');
  const openM = e => { if (e) e.preventDefault(); modal.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const closeM = () => { modal.classList.remove('open'); document.body.style.overflow = ''; };
  document.querySelectorAll('[data-modal-open]').forEach(el => el.addEventListener('click', openM));
  document.getElementById('mClose').addEventListener('click', closeM);
  modal.addEventListener('click', e => { if (e.target === modal) closeM(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') closeM(); });
  document.getElementById('toTop').addEventListener('click', e => { e.preventDefault(); scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });

  /* ---------- Calendar ---------- */
  const daysEl = document.getElementById('days'), daysEl2 = document.getElementById('days2');
  const slotsEl = document.getElementById('slots'), slotsEl2 = document.getElementById('slots2');
  const slotDay = document.getElementById('slotDay');
  let selDay = 24; const highlighted = new Set([21, 22, 23, 24, 25, 5, 6, 7, 8, 9]);
  function renderDays() {
    [daysEl, daysEl2].forEach(el => {
      if (!el) return; el.innerHTML = '';
      el.appendChild(document.createElement('span'));
      for (let d = 1; d <= 30; d++) {
        const b = document.createElement('button'); b.textContent = d;
        if (d < 8) b.classList.add('dim');
        if (highlighted.has(d)) b.classList.add('hl');
        if (d === 18) b.innerHTML = '18<br style="line-height:0">•';
        if (d === selDay) b.classList.add('sel');
        b.addEventListener('click', () => { selDay = d; renderDays(); renderSlots(); });
        el.appendChild(b);
      }
      for (let d = 1; d <= 11; d++) {
        const b = document.createElement('button'); b.textContent = d;
        b.classList.add(d <= 9 && highlighted.has(d) ? 'hl' : 'dim');
        if ([5, 6, 7, 8, 9].includes(d)) b.classList.remove('dim');
        el.appendChild(b);
      }
    });
  }
  const times = ['12:30pm', '12:45pm', '1:00pm', '1:15pm', '1:30pm', '1:45pm', '3:00pm', '3:15pm', '3:30pm', '3:45pm'];
  let selTime = '1:15pm';
  function renderSlots() {
    if (slotDay) slotDay.textContent = 'Thu ' + selDay + 'th';
    [slotsEl, slotsEl2].forEach(el => {
      if (!el) return; el.innerHTML = '';
      times.forEach(t => {
        const b = document.createElement('button'); b.textContent = t;
        if (t === selTime) b.classList.add('sel');
        b.addEventListener('click', () => { selTime = t; renderSlots(); });
        el.appendChild(b);
      });
    });
  }
  renderDays(); renderSlots();

  /* ---------- Lazy image fade ---------- */
  document.querySelectorAll('img').forEach(img => {
    if (img.complete) return;
    img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
  });
});
