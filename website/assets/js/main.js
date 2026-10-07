/* Belach Bioteknik website: progressive enhancements.
   Every page is fully readable without this file; scripts only add motion
   and interaction on top of server-rendered HTML. */
(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- header pins after the hero ---------- */
  const header = $('.site-header');
  const firstBlock = $('.hero, .page-hero');
  if (header && !header.classList.contains('site-header--solid')) {
    const threshold = () => (firstBlock ? firstBlock.offsetHeight * 0.6 : 200);
    let ticking = false;
    const update = () => {
      header.classList.toggle('is-stuck', window.scrollY > threshold());
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------- dropdown menus (touch + keyboard) ---------- */
  $$('.nav__item').forEach((item) => {
    const btn = $('.nav__toggle', item);
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const open = !item.classList.contains('is-open');
      $$('.nav__item.is-open').forEach((o) => { o.classList.remove('is-open'); $('.nav__toggle', o).setAttribute('aria-expanded', 'false'); });
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__item')) {
      $$('.nav__item.is-open').forEach((o) => { o.classList.remove('is-open'); $('.nav__toggle', o).setAttribute('aria-expanded', 'false'); });
    }
  });

  /* ---------- mobile menu ---------- */
  const menu = $('.mobile-menu');
  let lastFocus = null;
  const setMenu = (open) => {
    if (!menu) return;
    menu.classList.toggle('is-open', open);
    menu.toggleAttribute('inert', !open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
    $$('[data-menu-open]').forEach((b) => b.setAttribute('aria-expanded', String(open)));
    if (open) { lastFocus = document.activeElement; $('[data-menu-close]', menu)?.focus(); }
    else if (lastFocus) { lastFocus.focus(); }
  };
  $$('[data-menu-open]').forEach((b) => b.addEventListener('click', () => setMenu(true)));
  $$('[data-menu-close]').forEach((b) => b.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (menu?.classList.contains('is-open')) setMenu(false);
    $$('.nav__item.is-open').forEach((o) => { o.classList.remove('is-open'); $('.nav__toggle', o).setAttribute('aria-expanded', 'false'); });
  });

  /* ---------- reveal on scroll ---------- */
  const canObserve = 'IntersectionObserver' in window;
  if (canObserve && !reduceMotion) {
    const targets = $$('[data-reveal]');
    // Elements already on screen at load stay visible: no flash, complete first frame.
    const offscreen = targets.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92);
    if (offscreen.length) {
      root.classList.add('reveal-ready');
      targets.forEach((el) => { if (!offscreen.includes(el)) el.classList.add('is-in'); });
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      offscreen.forEach((el) => io.observe(el));
    }
  }

  /* ---------- fanned process deck ---------- */
  $$('.deck').forEach((deck) => {
    if (!canObserve || reduceMotion) return;
    if (deck.getBoundingClientRect().top < window.innerHeight * 0.8) return;
    deck.classList.add('is-stacked');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { setTimeout(() => deck.classList.remove('is-stacked'), 150); io.disconnect(); }
      });
    }, { threshold: 0.45 });
    io.observe(deck);
  });

  /* ---------- solutions accordion with media swap ---------- */
  $$('[data-acc]').forEach((acc) => {
    const items = $$('.acc__item', acc);
    const scope = acc.closest('[data-acc-scope]') || acc.parentElement;
    const media = $$('[data-media]', scope);
    const open = (idx) => {
      items.forEach((it, i) => {
        const on = i === idx;
        it.classList.toggle('is-open', on);
        $('.acc__btn', it).setAttribute('aria-expanded', String(on));
      });
      media.forEach((m) => m.classList.toggle('is-active', m.dataset.media === String(idx)));
    };
    items.forEach((it, i) => $('.acc__btn', it).addEventListener('click', () => open(i)));
  });

  /* ---------- FAQ ---------- */
  $$('.faq__item').forEach((it) => {
    const q = $('.faq__q', it);
    q.addEventListener('click', () => {
      const on = !it.classList.contains('is-open');
      it.classList.toggle('is-open', on);
      q.setAttribute('aria-expanded', String(on));
    });
  });

  /* ---------- counters ---------- */
  const counters = $$('[data-count]');
  if (counters.length && canObserve && !reduceMotion) {
    const fmt = (n, dec) => n.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: false });
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const dec = (el.dataset.count.split('.')[1] || '').length;
      const t0 = performance.now();
      const dur = 1600;
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased, dec);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counters.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) io.observe(el);
    });
  }

  /* ---------- horizontal sliders ---------- */
  $$('[data-slider]').forEach((wrap) => {
    const track = $('.slider', wrap);
    const prev = $('[data-prev]', wrap);
    const next = $('[data-next]', wrap);
    if (!track) return;
    const step = () => {
      const card = track.firstElementChild;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
    };
    const sync = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max;
    };
    prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: reduceMotion ? 'auto' : 'smooth' }));
    next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: reduceMotion ? 'auto' : 'smooth' }));
    track.addEventListener('scroll', () => requestAnimationFrame(sync), { passive: true });
    window.addEventListener('resize', sync);
    sync();
  });

  /* ---------- industries (tap to reveal on touch / small screens) ---------- */
  $$('.industries__item').forEach((item) => {
    const word = $('.industries__word', item);
    word?.addEventListener('click', () => {
      const on = !item.classList.contains('is-active');
      $$('.industries__item.is-active').forEach((o) => o.classList.remove('is-active'));
      item.classList.toggle('is-active', on);
      word.setAttribute('aria-expanded', String(on));
    });
  });

  /* ---------- cycling feature cards ---------- */
  $$('[data-cycle]').forEach((box) => {
    const cards = $$('.feature-card', box);
    const dots = $$('.feature-dots button', box);
    const pauseBtn = $('.feature-pause', box);
    if (cards.length < 2) return;
    let i = 0;
    let timer = null;
    let paused = reduceMotion;
    let visible = true;
    const show = (n) => {
      i = (n + cards.length) % cards.length;
      cards.forEach((c, k) => { c.classList.toggle('is-active', k === i); c.setAttribute('aria-hidden', String(k !== i)); });
      dots.forEach((d, k) => d.setAttribute('aria-current', String(k === i)));
    };
    const stop = () => { clearInterval(timer); timer = null; };
    const start = () => { stop(); if (!paused && visible) timer = setInterval(() => show(i + 1), 4500); };
    const syncPause = () => {
      if (!pauseBtn) return;
      pauseBtn.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
      pauseBtn.innerHTML = paused
        ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>';
    };
    dots.forEach((d, k) => d.addEventListener('click', () => { show(k); start(); }));
    pauseBtn?.addEventListener('click', () => { paused = !paused; syncPause(); start(); });
    if (canObserve) {
      new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting; start();
      }, { threshold: 0.2 }).observe(box);
    }
    show(0); syncPause(); start();
  });

  /* ---------- product gallery ---------- */
  $$('[data-gallery]').forEach((g) => {
    const main = $('.gallery__main img', g);
    $$('.gallery__thumbs button', g).forEach((b) => {
      b.addEventListener('click', () => {
        const img = $('img', b);
        main.src = b.dataset.full || img.src;
        main.alt = img.alt;
        $$('.gallery__thumbs button', g).forEach((o) => o.setAttribute('aria-pressed', String(o === b)));
      });
    });
  });

  /* ---------- contact / quote form ----------
     No form backend is connected yet. If the form carries data-endpoint, the
     data is POSTed there as JSON (Formspree, Netlify, a Webflow/WordPress
     endpoint...). Without one, the visitor gets a prepared e-mail instead. */
  $$('form[data-contact]').forEach((form) => {
    const status = $('.form-status', form);
    const showError = (field, msg) => {
      const input = form.elements[field];
      if (!input) return;
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      const err = $(`#${input.id}-error`, form);
      if (err) err.textContent = msg || '';
    };
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (data.website) return; // honeypot
      let ok = true;
      const req = $$('[required]', form);
      req.forEach((el) => {
        let msg = '';
        if (el.type === 'checkbox' && !el.checked) msg = 'Please accept to continue.';
        else if (el.type !== 'checkbox' && !el.value.trim()) msg = 'This field is required.';
        else if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim())) msg = 'Enter a valid e-mail address, e.g. name@company.com.';
        showError(el.name, msg);
        if (msg) ok = false;
      });
      if (!ok) { $('[aria-invalid="true"]', form)?.focus(); return; }

      const endpoint = form.dataset.endpoint;
      if (endpoint) {
        try {
          const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
          if (!res.ok) throw new Error(String(res.status));
          status.hidden = false;
          status.innerHTML = '<strong>Thank you.</strong> Your message has been sent. We usually reply within one working day.';
          form.reset();
        } catch (err) {
          status.hidden = false;
          status.innerHTML = `<strong>Sending failed.</strong> Please e-mail us directly at <a href="mailto:${form.dataset.mailto}">${form.dataset.mailto}</a>.`;
        }
        return;
      }
      const to = form.dataset.mailto;
      const subject = data.subject || `Website enquiry from ${data.company || data.name}`;
      const lines = [
        data.message || '',
        '',
        '--',
        data.name,
        data.company ? `Company: ${data.company}` : '',
        data.email ? `E-mail: ${data.email}` : '',
        data.phone ? `Phone: ${data.phone}` : '',
        data.product ? `Product of interest: ${data.product}` : '',
      ].filter((l, k) => l !== '' || k < 2);
      const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
      status.hidden = false;
      status.innerHTML = `<strong>Almost done.</strong> Your message is ready. <a href="${href}">Open it in your e-mail app</a> to send it to ${to}.`;
    });
    $$('input, textarea', form).forEach((el) => el.addEventListener('input', () => {
      if (el.getAttribute('aria-invalid') === 'true') showError(el.name, '');
    }));
  });


  /* ---------- reference map (loads Leaflet + OpenStreetMap only on request) ---------- */
  $$('[data-ref-map]').forEach((box) => {
    const btnLoad = $('[data-ref-map-load]', box);
    const live = $('.ref-map__live', box);
    const dataEl = $('#ref-map-data', box);
    if (!btnLoad || !live || !dataEl) return;
    const LEAFLET = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/';
    const load = (tag, attrs) => new Promise((res, rej) => {
      const el = document.createElement(tag);
      Object.assign(el, attrs);
      el.onload = res; el.onerror = rej;
      document.head.appendChild(el);
    });
    btnLoad.addEventListener('click', async () => {
      btnLoad.disabled = true;
      try {
        await load('link', { rel: 'stylesheet', href: `${LEAFLET}leaflet.min.css` });
        await load('script', { src: `${LEAFLET}leaflet.min.js` });
      } catch (err) {
        btnLoad.disabled = false;
        $('.ref-map__bar p', box).textContent = 'The map could not be loaded. Check your connection and try again.';
        return;
      }
      const pins = JSON.parse(dataEl.textContent);
      live.hidden = false;
      $('.ref-map__static', box).hidden = true;
      $('.ref-map__bar', box).hidden = true;
      const map = window.L.map(live, { scrollWheelZoom: false });
      window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      const esc = (t) => t.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
      const layer = pins.map((p) => window.L.circleMarker([p.lat, p.lng], {
        radius: 7, color: '#fff', weight: 2, fillColor: '#e01e26', fillOpacity: 1,
      }).bindPopup(`<strong>${esc(p.customer)}</strong><br>${p.systems.map(esc).join('<br>')}`));
      const group = window.L.featureGroup(layer).addTo(map);
      map.fitBounds(group.getBounds(), { padding: [30, 30] });
    });
  });

  /* ---------- footer year ---------- */
  $$('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });
})();
