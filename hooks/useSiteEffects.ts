"use client";

import { useEffect } from "react";

/**
 * Faithful port of scrap/script.js behaviours that are DOM/scroll driven:
 * scroll progress, condensing nav, staggered reveals, hero entrance cleanup,
 * mouse parallax + tilt, scroll parallax layers, case straightening,
 * scroll-velocity skew, method progress line, magnetic buttons, count-up,
 * lazy image fade. Modal / calendar / FAQ / back-to-top live in React state.
 */
export function useSiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const cleanups: (() => void)[] = [];
    const on = (
      target: Window | Document | Element,
      type: string,
      fn: EventListener,
      opts?: AddEventListenerOptions
    ) => {
      target.addEventListener(type, fn, opts);
      cleanups.push(() => target.removeEventListener(type, fn, opts));
    };

    /* ---------- Scroll progress + nav state ---------- */
    const prog = document.getElementById("scrollProgress");
    const nav = document.querySelector(".nav-wrap");
    const onScrollBar = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (prog) prog.style.transform = `scaleX(${p})`;
      const y = h.scrollTop;
      nav?.classList.toggle("scrolled", y > 40);
      nav?.classList.toggle("condensed", y > 120);
    };
    on(window, "scroll", onScrollBar, { passive: true });
    onScrollBar();

    /* ---------- Reveal on scroll (staggered) ---------- */
    const revealMap: [string, string, number][] = [
      [".sec-h", "rv", 0],
      [".feats > div", "rv", 90],
      [".step", "rv", 0],
      [".browser", "rv-scale", 120],
      [".case-hero", "rv-scale", 0],
      [".case-split, .invoice", "rv", 0],
      [".testi", "rv", 0],
      [".rev", "rv", 60],
      [".logo-grid > span", "rv", 25],
      [".juste", "rv", 0],
      [".cal", "rv-scale", 0],
      [".faq-r .acc, .faq-r h4", "rv", 40],
      [".book-head", "rv", 0],
      [".cta-center", "rv", 0],
    ];
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealMap.forEach(([sel, cls, stagger]) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        const html = el as HTMLElement;
        html.classList.add(cls);
        if (stagger)
          html.style.transitionDelay = Math.min(i * stagger, 600) + "ms";
        io.observe(el);
      });
    });
    cleanups.push(() => io.disconnect());

    // clear entrance fill so later transforms (magnetic/parallax) win
    const clearFill = (e: Event) => {
      const ae = e as AnimationEvent;
      if (ae.animationName === "heroUp" || ae.animationName === "heroScale")
        (e.target as HTMLElement).style.animation = "none";
    };
    document
      .querySelectorAll(".hero-h1, .hero-sub, .hero-cta, .hero-stage, .nav-wrap")
      .forEach((el) => el.addEventListener("animationend", clearFill));
    cleanups.push(() =>
      document
        .querySelectorAll(".hero-h1, .hero-sub, .hero-cta, .hero-stage, .nav-wrap")
        .forEach((el) => el.removeEventListener("animationend", clearFill))
    );

    // case-hero inview for image zoom-out
    const cio = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("inview");
        }),
      { threshold: 0.3 }
    );
    document.querySelectorAll(".case-hero").forEach((el) => cio.observe(el));
    cleanups.push(() => cio.disconnect());

    /* ---------- Hero mouse parallax + tilt ---------- */
    const stage = document.querySelector(".hero-stage");
    const video = document.querySelector(".hero-video");
    const cardL = document.querySelector(".fc-left");
    const cardI = document.querySelector(".fc-info");
    const cardF = document.querySelector(".fc-file");
    const mouseOwned = !!(stage && !reduce && fine);
    let rafMouse = 0;
    if (mouseOwned) {
      let tx = 0,
        ty = 0,
        cx = 0,
        cy = 0;
      const onMove = (e: Event) => {
        const me = e as MouseEvent;
        const r = (stage as HTMLElement).getBoundingClientRect();
        const px = (me.clientX - (r.left + r.width / 2)) / r.width;
        const py = (me.clientY - (r.top + r.height / 2)) / r.height;
        tx = Math.max(Math.min(px, 1), -1);
        ty = Math.max(Math.min(py, 1), -1);
      };
      on(window, "mousemove", onMove);
      const cardScroll = (el: Element | null, speed: number) => {
        if (!el || reduce) return 0;
        const r = el.getBoundingClientRect();
        return -((r.top + r.height / 2 - window.innerHeight / 2) * speed);
      };
      const loop = () => {
        cx += (tx - cx) * 0.06;
        cy += (ty - cy) * 0.06;
        if (video)
          (video as HTMLElement).style.transform = `perspective(1200px) rotateY(${(
            cx * 4
          ).toFixed(2)}deg) rotateX(${(-cy * 4).toFixed(2)}deg)`;
        const setT = (el: Element | null, x: number, y: number) => {
          if (el) (el as HTMLElement).style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
        };
        setT(cardL, cx * -26, cy * -18 + cardScroll(cardL, -0.08));
        setT(cardI, cx * 24, cy * 14 + cardScroll(cardI, 0.12));
        setT(cardF, cx * 30, cy * 20 + cardScroll(cardF, -0.1));
        rafMouse = requestAnimationFrame(loop);
      };
      rafMouse = requestAnimationFrame(loop);
    }

    /* ---------- Section-1 scroll parallax ---------- */
    const plxEls = [...document.querySelectorAll("#hero [data-plx]")];
    const heroH1 = document.querySelector(".hero-h1");
    const heroSub = document.querySelector(".hero-sub");
    const heroCta = document.querySelector(".hero-cta");
    const heroStage = document.querySelector(".hero-stage");
    const heroParallax = () => {
      if (reduce) return;
      const vh = window.innerHeight;
      plxEls.forEach((el) => {
        if (el.classList.contains("float-card") && mouseOwned) return;
        const r = el.getBoundingClientRect();
        const off =
          (r.top + r.height / 2 - vh / 2) *
          parseFloat((el as HTMLElement).dataset.plx || "0");
        (el as HTMLElement).style.translate = `0px ${(-off).toFixed(1)}px`;
      });
      if (heroStage) {
        const hr = heroStage.getBoundingClientRect();
        const p = Math.min(Math.max(-hr.top / vh + 0.15, 0), 1);
        const fade = Math.max(1 - p * 1.6, 0).toFixed(2);
        [heroH1, heroSub, heroCta].forEach((el) => {
          if (el) (el as HTMLElement).style.opacity = fade;
        });
      }
    };
    on(window, "scroll", heroParallax, { passive: true });

    /* ---------- Scroll-linked rAF: hero scale, case tilt, glow ---------- */
    const caseHeros = [...document.querySelectorAll(".case-hero")];
    const glow = document.getElementById("pageGlow");
    let mx = window.innerWidth / 2,
      my = 0;
    const onMouse = (e: Event) => {
      const me = e as MouseEvent;
      mx = me.clientX;
      my = me.clientY;
    };
    on(window, "mousemove", onMouse, { passive: true });
    let raf = 0;
    const tick = () => {
      const vh = window.innerHeight;
      if (heroStage && !reduce) {
        const r = heroStage.getBoundingClientRect();
        const p = Math.min(Math.max(-r.top / vh, 0), 1);
        (heroStage as HTMLElement).style.scale = `${1 - p * 0.04}`;
      }
      caseHeros.forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = Math.min(Math.max((vh - r.top) / (vh + r.height), 0), 1);
        (el as HTMLElement).style.setProperty("--tilt", (-6 + p * 6).toFixed(2) + "deg");
        (el as HTMLElement).style.setProperty("--lift", ((1 - p) * 30).toFixed(1) + "px");
      });
      if (glow) {
        glow.style.setProperty("--mx", (mx / window.innerWidth) * 100 + "%");
        glow.style.setProperty("--my", (my / 600) * 100 + "%");
      }
      raf = requestAnimationFrame(tick);
    };
    if (!reduce) raf = requestAnimationFrame(tick);

    // skew marquee rows with scroll velocity (applied to the wrapper rows,
    // since the inner tracks are driven by a transform animation)
    let lastSY = window.scrollY,
      skew = 0;
    const tracks = document.querySelectorAll(
      ".work-row, .marquee, .logo-strip, .face-strip"
    );
    const onSkewScroll = () => {
      const v = window.scrollY - lastSY;
      lastSY = window.scrollY;
      skew += v * 0.02;
    };
    on(window, "scroll", onSkewScroll, { passive: true });
    let rafSkew = 0;
    const skewLoop = () => {
      skew *= 0.92;
      const deg = Math.max(Math.min(skew, 6), -6).toFixed(2);
      tracks.forEach((t) => {
        (t as HTMLElement).style.transform = `skewX(${deg}deg)`;
      });
      rafSkew = requestAnimationFrame(skewLoop);
    };
    rafSkew = requestAnimationFrame(skewLoop);

    /* ---------- Method timeline progress + active step ---------- */
    const method = document.querySelector(".method");
    const steps = [...document.querySelectorAll(".step")];
    let sio: IntersectionObserver | null = null;
    if (method) {
      const mEl = method as HTMLElement;
      const bar = document.createElement("div");
      bar.id = "stepProgress";
      mEl.appendChild(bar);
      cleanups.push(() => bar.remove());
      // Measure the real badge centers so the line runs through the
      // middle of every Jour badge on any viewport (no magic numbers).
      const measure = () => {
        const first = steps[0]?.querySelector(".jour");
        const last = steps[steps.length - 1]?.querySelector(".jour");
        if (!first || !last) return null;
        const mRect = mEl.getBoundingClientRect();
        const f = first.getBoundingClientRect();
        const l = last.getBoundingClientRect();
        const x = f.left + f.width / 2 - mRect.left;
        const top = f.top + f.height / 2 - mRect.top;
        const h = Math.max(l.top + l.height / 2 - mRect.top - top, 0);
        mEl.style.setProperty("--tl-x", `${x.toFixed(1)}px`);
        mEl.style.setProperty("--tl-top", `${top.toFixed(1)}px`);
        mEl.style.setProperty("--tl-h", `${h.toFixed(1)}px`);
        return { top, h };
      };
      const line = () => {
        const geo = measure();
        if (!geo || geo.h <= 0) return;
        const mr = mEl.getBoundingClientRect();
        // fill completes exactly as the viewport anchor travels the line
        const anchor = window.innerHeight * 0.55 - mr.top;
        const p = Math.min(Math.max((anchor - geo.top) / geo.h, 0), 1);
        bar.style.height = `${geo.h * p}px`;
      };
      on(window, "scroll", line, { passive: true });
      on(window, "resize", line);
      on(window, "load", line);
      if (document.fonts?.ready) document.fonts.ready.then(line);
      line();
      sio = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              steps.forEach((s) => s.classList.remove("active"));
              e.target.classList.add("active");
            }
          }),
        { threshold: 0.45 }
      );
      steps.forEach((s) => sio!.observe(s));
    }

    /* ---------- Magnetic buttons ---------- */
    if (fine && !reduce) {
      const mags = document.querySelectorAll(
        ".hero-cta .cta-white, .nav-btn, .dark-pill"
      );
      const moveFns = new Map<Element, EventListener>();
      const leaveFns = new Map<Element, EventListener>();
      mags.forEach((el) => {
        el.classList.add("mag");
        const mv = (e: Event) => {
          const me = e as MouseEvent;
          const r = (el as HTMLElement).getBoundingClientRect();
          const x = me.clientX - r.left - r.width / 2;
          const y = me.clientY - r.top - r.height / 2;
          (el as HTMLElement).style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
        };
        const lv = () => ((el as HTMLElement).style.transform = "");
        el.addEventListener("mousemove", mv);
        el.addEventListener("mouseleave", lv);
        moveFns.set(el, mv);
        leaveFns.set(el, lv);
      });
      cleanups.push(() =>
        mags.forEach((el) => {
          el.removeEventListener("mousemove", moveFns.get(el)!);
          el.removeEventListener("mouseleave", leaveFns.get(el)!);
        })
      );
    }

    /* ---------- Count-up invoice numbers ---------- */
    const cio2 = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          cio2.unobserve(el);
          const txt = el.textContent || "";
          const m = txt.replace(/\s/g, "").match(/(\d[\d\s]*)/);
          if (!m) return;
          const target = parseInt(m[1].replace(/\s/g, ""), 10);
          if (!target || target < 50) return;
          const t0 = performance.now(),
            dur = 1400;
          const stepFn = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = txt.replace(
              m[1],
              Math.round(target * eased).toLocaleString("fr-FR")
            );
            if (p < 1) requestAnimationFrame(stepFn);
          };
          requestAnimationFrame(stepFn);
        }),
      { threshold: 0.6 }
    );
    document.querySelectorAll(".inv-grid div").forEach((el) => cio2.observe(el));
    cleanups.push(() => cio2.disconnect());

    /* ---------- Lazy image fade ---------- */
    const lazyFns = new Map<HTMLImageElement, EventListener>();
    document.querySelectorAll("img").forEach((img) => {
      const im = img as HTMLImageElement;
      if (im.complete) return;
      const fn = () => im.classList.add("loaded");
      im.addEventListener("load", fn, { once: true });
      lazyFns.set(im, fn);
    });
    cleanups.push(() =>
      lazyFns.forEach((fn, im) => im.removeEventListener("load", fn))
    );

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(rafMouse);
      cancelAnimationFrame(rafSkew);
      sio?.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);
}
