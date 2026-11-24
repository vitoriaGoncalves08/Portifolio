/* Animações: letras blur→nítido, reveal, scroll dinâmico, marquee reativo, contadores, tilt, cursor, spotlight */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  // título do hero dividido em letras (refeito quando o idioma muda)
  function splitHero() {
    $$('[data-split]').forEach((el, k) => {
      if (el.querySelector('.ch')) return;
      const txt = el.textContent;
      el.setAttribute('aria-hidden', 'true');
      el.innerHTML = [...txt].map((c, i) => `<span class="ch" style="--i:${i + k * 6}">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
    });
  }
  splitHero();

  // faixa em loop (conteúdo vem de DATA.marquee, se existir; senão, skills)
  const items = window.DATA.marquee || window.DATA.skills.flatMap((g) => g.items);
  const row = items.map((i) => `<span>${i}</span>`).join('');
  $('#marquee').innerHTML = row + row;

  // frase que acende palavra por palavra (re-executa após troca de idioma)
  function splitWords() {
    $$('.statement').forEach((el) => {
      if (el.querySelector('.w')) return;
      el.setAttribute('aria-label', el.textContent);
      el.innerHTML = el.textContent.split(' ').map((w) => `<span class="w" aria-hidden="true">${w}</span>`).join(' ');
    });
  }
  function refresh() { splitHero(); splitWords(); markDynamic(); update(); }
  window.fx = { refresh };

  /* ---- itens dinâmicos (cards, skills, timeline...) entram em cascata ---- */
  const riObs = reduce ? null : new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); riObs.unobserve(e.target); }
  }), { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
  const DYN = ['#skillsGrid', '#projectGrid', '#timeline', '#servicesGrid', '#certGrid', '#testiGrid', '#apps', '#hobbies', '#badgeGrid'];
  function markDynamic() {
    if (reduce) return;
    DYN.forEach((sel) => {
      const box = $(sel); if (!box) return;
      [...box.children].forEach((el, i) => {
        if (el.classList.contains('rv-i')) return;
        el.classList.add('rv-i'); el.style.setProperty('--d', (i % 4) * 90 + 'ms'); riObs.observe(el);
      });
    });
  }
  if (!reduce) {
    DYN.forEach((sel) => { const b = $(sel); if (b) new MutationObserver(markDynamic).observe(b, { childList: true }); });
  }

  /* ---- scroll: barra, ano gigante, hero, títulos, frase ---- */
  const bar = $('.progress'), big = $('#bigYear'), heroIn = $('.hero-in'), photo = $('.photo');
  function update() {
    if (reduce) return;
    const h = document.documentElement, y = scrollY, vh = innerHeight;
    bar.style.transform = `scaleX(${y / (h.scrollHeight - h.clientHeight || 1)})`;
    big.style.transform = `translateY(${y * 0.28}px) scale(${1 + y / 4000})`;
    if (y < vh * 1.3) {
      heroIn.style.transform = `translateY(${y * 0.2}px)`;
      heroIn.style.opacity = clamp(1 - y / (vh * 0.8));
    }
    $$('.sec h2').forEach((t) => {
      const r = t.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      t.style.translate = `${((r.top + r.height / 2 - vh / 2) / vh) * -70}px 0`;
      t.style.setProperty('--f', clamp((vh * 0.88 - r.top) / (vh * 0.4)) * 100 + '%');
    });
    const tl = $('#timeline');
    if (tl) {
      const r = tl.getBoundingClientRect(), line = vh * 0.55;
      tl.style.setProperty('--p', clamp((line - r.top) / r.height).toFixed(3));
      $$('.tl-i', tl).forEach((li) => li.classList.toggle('act', $('.node', li).getBoundingClientRect().top + 10 < line));
    }
    $$('.proj-card .mock').forEach((m) => {
      const r = m.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return;
      m.style.setProperty('--py', ((r.top + r.height / 2 - vh / 2) / vh * -26).toFixed(1) + 'px');
    });
    $$('.statement').forEach((s) => {
      const words = $$('.w', s), r = s.getBoundingClientRect();
      const p = clamp((vh * 0.88 - r.top) / (vh * 0.48 + r.height));
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('lit', i < n));
    });
  }
  let queued = false;
  const onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; update(); }); } };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);

  refresh();

  /* menu: destaca a seção visível */
  const links = $$('#menu a');
  const spy = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.classList.toggle('act', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach((a) => { const s = $(a.getAttribute('href')); if (s) spy.observe(s); });

  if (reduce) return;

  /* ---- faixa que reage ao scroll: acelera e inverte conforme a rolagem ---- */
  const track = $('#marquee'); let x = 0, last = scrollY, v = 0, hover = false;
  track.parentElement.addEventListener('mouseenter', () => (hover = true));
  track.parentElement.addEventListener('mouseleave', () => (hover = false));
  (function loop() {
    const d = scrollY - last; last = scrollY;
    v += (d - v) * 0.08;
    const half = track.scrollWidth / 2 || 1;
    x += hover ? 0 : -0.7 - v * 0.6;
    if (x < -half) x += half; if (x > 0) x -= half;
    track.style.transform = `translate3d(${x}px,0,0)`;
    requestAnimationFrame(loop);
  })();

  /* ---- reveal das seções ---- */
  const rv = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); }
  }), { threshold: 0.12 });
  $$('.sec .wrap > *:not(.cards):not(.skills):not(.timeline):not(.statement):not(.proj-layout):not(.stats):not(.svc-list)').forEach((el, i) => {
    el.classList.add('rv'); el.style.transitionDelay = (i % 3) * 90 + 'ms'; rv.observe(el);
  });
  $$('.proj-side, #stats').forEach((el) => { el.classList.add('rv'); rv.observe(el); });

  /* ---- contadores ---- */
  new IntersectionObserver((es, ob) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    ob.disconnect();
    $$('b', e.target).forEach((b) => {
      const m = b.textContent.match(/^(\d+)(.*)$/); if (!m) return;
      const end = +m[1], suf = m[2], t0 = performance.now();
      (function tick(t) {
        const p = Math.min((t - t0) / 1400, 1);
        b.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }), { threshold: 0.6 }).observe($('#stats'));

  if (!fine) return;

  /* ---- spotlight + cursor + tilt ---- */
  const cur = $('.cursor'); document.body.classList.add('has-cursor');
  addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mx', e.clientX + 'px');
    document.documentElement.style.setProperty('--my', e.clientY + 'px');
    cur.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; cur.classList.add('on');
  });
  document.addEventListener('mouseover', (e) => cur.classList.toggle('big', !!e.target.closest('a,button,.card')));
  document.addEventListener('mousemove', (e) => {
    const c = e.target.closest('.card'); if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--ry', ((e.clientX - r.left) / r.width - 0.5) * 8 + 'deg');
    c.style.setProperty('--rx', (0.5 - (e.clientY - r.top) / r.height) * 8 + 'deg');
  });
  document.addEventListener('mouseout', (e) => {
    const c = e.target.closest('.card'); if (c) { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); }
  });
})();
