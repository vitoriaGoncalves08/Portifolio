(function () {
  const D = window.DATA;
  const $ = (s, r = document) => r.querySelector(s);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  const nav = (navigator.language || 'pt').toLowerCase();
  let lang = store.get('lang') || (nav.startsWith('en') ? 'en' : nav.startsWith('es') ? 'es' : 'pt');
  if (!['pt', 'en', 'es'].includes(lang)) lang = 'pt';
  let filter = 'all', tlKey = 'all', query = '';
  const tagSel = new Set();

  /* ícones das tecnologias (devicon via CDN). Sem ícone → bolinha. */
  const ICONS = {
    'Java': 'java', 'Spring Boot': 'spring', 'Kafka': 'apachekafka', 'JPA/Hibernate': 'hibernate',
    'Angular': 'angular', 'TypeScript': 'typescript', 'RxJS': 'rxjs', 'HTML/CSS': 'html5',
    'PostgreSQL': 'postgresql', 'MongoDB': 'mongodb', 'Redis': 'redis', 'Docker': 'docker', 'Git': 'git',
    'CI/CD': 'githubactions', 'React.js': 'react', 'JavaScript': 'javascript', 'Node.js': 'nodejs', 'SASS': 'sass', 'Material UI': 'materialui', 'Figma': 'figma', 'MySQL': 'mysql', 'SQL Server': 'microsoftsqlserver', 'Module Federation': 'webpack', 'Micro-frontends': 'angularjs'
  };
  const iconUrl = (n) => ICONS[n] ? `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${ICONS[n]}/${ICONS[n]}-original.svg` : '';
  const icon = (n) => iconUrl(n) ? `<img src="${iconUrl(n)}" alt="" loading="lazy" onerror="this.remove()">` : '<i class="d"></i>';
  const chip = (n) => `<span class="chip">${icon(n)}${esc(n)}</span>`;
  const chipBig = (n, i) => `<span class="chip big" style="--o:${((i * 37) % 5 - 2) * 7}px;--r:${((i * 53) % 7 - 3)}deg;--dl:${-(i % 6)}s">${icon(n)}${esc(n)}</span>`;
  const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  const tr = (x) => (x && typeof x === 'object' ? (x[lang] ?? x.pt) : x);
  const T = (k) => D.i18n[lang][k] || D.i18n.pt[k] || k;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- renderers ---------- */
  function renderStatic() {
    document.documentElement.lang = { pt: 'pt-BR', en: 'en', es: 'es' }[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => (el.textContent = T(el.dataset.i18n)));
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => (el.placeholder = T(el.dataset.i18nPh)));
    document.querySelectorAll('#langSel button').forEach((b) => { b.classList.toggle('on', b.dataset.l === lang); b.setAttribute('aria-pressed', b.dataset.l === lang); });
    renderCv();
    $('#year').textContent = new Date().getFullYear();
  }

  /* CV conforme o idioma; se o arquivo do idioma não existir, usa o português */
  const cvOk = {};
  async function cvHref(l) {
    if (!(l in cvOk)) { try { cvOk[l] = (await fetch(D.cv[l], { method: 'HEAD' })).ok; } catch (e) { cvOk[l] = false; } }
    return cvOk[l] ? D.cv[l] : D.cv.pt;
  }
  function renderCv() {
    const l = lang;
    cvHref(l).then((h) => { if (l === lang) document.querySelectorAll('.cv-link').forEach((a) => (a.href = h)); });
  }

  function renderAbout() {
    $('#stats').innerHTML = D.stats.map((s) => `<div class="stat"><b>${s.n}</b><span>${tr(s.l)}</span></div>`).join('');
    $('#langs').innerHTML = D.languages.map((l) => `<li>${tr(l)}</li>`).join('');
    $('#hobbies').innerHTML = D.hobbies.map((h, i) => {
      const label = tr(h.t).toUpperCase(), reps = Math.max(2, Math.round(24 / (label.length + 3)));
      const ring = Array(reps).fill(label + ' • ').join('');
      return `<div class="stamp" tabindex="0" aria-label="${tr(h.t)}: ${tr(h.d)}">
        <svg viewBox="0 0 120 120" aria-hidden="true"><defs><path id="hc${i}" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"/></defs>
          <circle class="o" cx="60" cy="60" r="57"/><circle class="o" cx="60" cy="60" r="33"/>
          <g class="ring"><text><textPath href="#hc${i}" textLength="280" lengthAdjust="spacing">${ring}</textPath></text></g>
          <g class="ic" transform="translate(60 60) scale(.42) translate(-60 -60)">${h.svg}</g></svg>
        <span class="tip">${tr(h.d)}</span></div>`;
    }).join('');
  }

  function renderSkills() {
    let k = 0;
    $('#skillsGrid').innerHTML = D.skills.map((g, gi) =>
      `<div class="sk-row"><h3><small>0${gi + 1}</small>${tr(g.t)}</h3><div class="chips">${g.items.map((n) => chipBig(n, k++)).join('')}</div></div>`).join('');
  }

  function renderFilters() {
    const cats = ['all', ...new Set(D.projects.map((p) => p.cat))];
    $('#filters').innerHTML = cats.map((c) =>
      `<button data-c="${c}" class="${c === filter ? 'on' : ''}" aria-pressed="${c === filter}">${c === 'all' ? T('all') : c}</button>`).join('');
    const tags = [...new Set(D.projects.flatMap((p) => p.tags))].sort();
    $('#tagFilters').innerHTML = tags.map((t) =>
      `<button data-t="${esc(t)}" class="${tagSel.has(t) ? 'on' : ''}" aria-pressed="${tagSel.has(t)}">${icon(t)}${esc(t)}</button>`).join('');
  }

  const GR = [['#55524a', '#171715'], ['#8a7d63', '#1d1a14'], ['#3f4857', '#0f1217'], ['#6a5d52', '#181512']];
  const shot = (p) => {
    const i = D.projects.indexOf(p), g = GR[i % GR.length];
    return `<div class="shot" style="--g1:${g[0]};--g2:${g[1]}"><i class="blob b1"></i><i class="blob b2"></i><span class="num">0${i + 1}</span><span class="cat">${esc(p.cat)}</span>
      <div class="mock"><div class="bar"><b></b><b></b><b></b><em>${esc(p.id)}.dev</em></div><div class="scr">${p.img ? `<img src="${p.img}" alt="" loading="lazy">` : `<span class="emo">${p.emoji}</span>`}</div></div></div>`;
  };

  function renderProjects() {
    renderFilters();
    const words = norm(query).split(/\s+/).filter(Boolean);
    const list = D.projects.filter((p) => {
      if (filter !== 'all' && p.cat !== filter) return false;
      for (const t of tagSel) if (!p.tags.includes(t)) return false;
      const hay = norm([p.title, tr(p.desc), p.cat, p.tags.join(' ')].join(' '));
      return words.every((w) => hay.includes(w));
    });
    $('#count').textContent = `${list.length} / ${D.projects.length} ${T('found')}`;
    $('#projectGrid').innerHTML = list.length ? list.map((p) => `
      <button class="card click proj-card" data-id="${p.id}">
        ${shot(p)}
        <div class="body"><h3>${esc(p.title)}</h3><p>${tr(p.desc)}</p>
        <div class="chips">${p.tags.map(chip).join('')}</div><span class="more">${T('more')}</span></div>
      </button>`).join('') : `<p class="empty" style="grid-column:1/-1">${T('no_results')}</p>`;
  }

  function openProject(id) {
    const p = D.projects.find((x) => x.id === id);
    if (!p) return;
    const sec = (k, v) => `<h4>${T(k)}</h4><p>${tr(v)}</p>`;
    $('#mBody').innerHTML = `
      <div class="m-shot">${shot(p)}</div>
      <div class="m-in"><h3 style="margin-top:0">${esc(p.title)}</h3>
        <div class="chips">${p.tags.map(chip).join('')}</div>
        ${sec('m_problem', p.problem)}${sec('m_solution', p.solution)}${sec('m_arch', p.arch)}${sec('m_challenges', p.challenges)}${sec('m_result', p.result)}
        <div class="links">
          ${p.demo ? `<a class="btn primary" href="${p.demo}" target="_blank" rel="noopener">${T('m_demo')}</a>` : ''}
          ${p.code ? `<a class="btn" href="${p.code}" target="_blank" rel="noopener">${T('m_code')}</a>` : ''}
        </div></div>`;
    $('#modal').showModal();
  }

  function openCert(i) {
    const c = D.certs[i];
    $('#mBody').innerHTML = `<div class="lightbox"><img src="${c.img}" alt="${esc(c.t)}"></div>
      <div class="m-in"><h3 style="margin-top:0">${esc(c.t)}</h3><span class="meta">${esc(c.org)} · ${c.date}</span>
      ${c.url ? `<div class="links"><a class="btn primary" href="${c.url}" target="_blank" rel="noopener">${T('cert_view')}</a></div>` : ''}</div>`;
    $('#modal').showModal();
  }

  function renderTimeline() {
    $('#tlTabs').querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.k === tlKey));
    const end = (w) => { const m = String(w).match(/\d{4}|hoje|hoy|today|now|present/gi); const l = m ? m[m.length - 1] : ''; return /\d/.test(l) ? +l : 9999; };
    const items = ['work', 'edu'].filter((k) => tlKey === 'all' || tlKey === k)
      .flatMap((k) => D.timeline[k].map((i) => ({ ...i, k, when: tr(i.when), t: tr(i.t) }))).sort((a, b) => end(b.when) - end(a.when));
    $('#timeline').innerHTML = items.map((i) =>
      `<li class="tl-i"><span class="yr" aria-hidden="true">${(String(i.when).match(/\d{4}/) || [''])[0]}</span><span class="node"></span>
        <div class="tl-card"><span class="tag">${T(i.k === 'work' ? 'tl_work' : 'tl_edu')}</span><span class="when">${i.when}</span>
        <h3>${esc(i.t)}</h3><span class="meta">${esc(i.org)}</span><p>${tr(i.d)}</p>${i.hl ? `<span class="hl">★ ${tr(i.hl)}</span>` : ''}</div></li>`).join('');
  }

  function renderLists() {
    $('#servicesGrid').innerHTML = D.services.map((s) =>
      `<div class="svc"><span class="n">0${D.services.indexOf(s) + 1}</span><h3>${tr(s.t)}</h3><p>${tr(s.d)}</p><span class="go">→</span></div>`).join('');
    $('#badgeGrid').innerHTML = D.badges.map((b) => {
      const tag = b.url ? 'a' : 'div', attrs = b.url ? ` href="${b.url}" target="_blank" rel="noopener"` : '';
      return `<${tag} class="badge"${attrs}><span class="medal">${b.img ? `<img src="${b.img}" alt="">` : `<b>${esc(b.ab)}</b>`}</span><strong>${esc(b.t)}</strong><span class="meta">${esc(b.org)} · ${b.date}</span></${tag}>`;
    }).join('') + Array.from({ length: D.badgeSlots || 0 }, () =>
      `<div class="badge soon"><span class="medal">+</span><span class="meta">${T('badge_soon')}</span></div>`).join('');
    $('#certGrid').innerHTML = D.certs.map((c, i) =>
      `<button class="card cert click" data-cert="${i}"><div class="thumb"><img src="${c.img}" alt="${esc(c.t)}" loading="lazy"></div>
        <div class="body"><h3>${esc(c.t)}</h3><span class="meta">${esc(c.org)} · ${c.date}</span></div></button>`).join('');
    $('#testiGrid').innerHTML = D.testimonials.map((t) =>
      `<div class="card testi"><div class="body"><p class="quote">“${tr(t.q)}”</p><div class="who"><span class="av">${esc(t.who[0])}</span><div><strong>${esc(t.who)}</strong><span class="meta" style="display:block">${esc(t.role)}</span></div></div></div></div>`).join('');
  }

  function renderApps() {
    $('#apps').innerHTML = D.contacts.map((c) =>
      `<a class="app" href="${c.url}" target="_blank" rel="noopener"><span class="lg"><i style="--i:url(https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons/${c.slug}.svg)"></i></span><span><b>${c.n}</b><small>${esc(c.h)}</small></span></a>`).join('');
  }

  function renderAll() {
    renderStatic(); renderAbout(); renderSkills(); renderProjects(); renderTimeline(); renderLists(); renderApps(); renderSuggestions();
    const first = $('#chatLog .msg');
    if (first && !first.dataset.user) first.textContent = T('chat_hi');
    if (window.fx) window.fx.refresh();
  }

  /* ---------- chat ---------- */
  const CHAT_ENDPOINT = ''; // ex.: 'https://seu-backend/api/chat' — recebe {message, lang}, devolve {reply}
  function addMsg(text, me) {
    const m = document.createElement('div');
    m.className = 'msg' + (me ? ' me' : '');
    if (me) m.dataset.user = '1';
    m.textContent = text;
    $('#chatLog').appendChild(m);
    $('#chatLog').scrollTop = 1e9;
  }
  function localAnswer(q) {
    q = q.toLowerCase();
    const hit = D.faq.find((f) => f.k.some((k) => q.includes(k)));
    return hit ? tr(hit.a) : T('chat_fallback');
  }
  async function ask(q) {
    if (!q.trim()) return;
    addMsg(q, true);
    let r;
    if (CHAT_ENDPOINT) {
      try {
        const res = await fetch(CHAT_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: q, lang }) });
        r = (await res.json()).reply;
      } catch (e) { r = T('chat_fallback'); }
    } else r = localAnswer(q);
    addMsg(r, false);
  }
  function renderSuggestions() {
    $('#chatSug').innerHTML = D.suggestions[lang].map((s) => `<button type="button">${s}</button>`).join('');
  }

  /* ---------- eventos ---------- */
  document.addEventListener('click', (e) => {
    const f = e.target.closest('#filters button'); if (f) { filter = f.dataset.c; renderProjects(); return; }
    const tg = e.target.closest('#tagFilters button');
    if (tg) { const t = tg.dataset.t; tagSel.has(t) ? tagSel.delete(t) : tagSel.add(t); renderProjects(); return; }
    if (e.target.closest('#clearF')) { filter = 'all'; query = ''; tagSel.clear(); $('#q').value = ''; renderProjects(); return; }
    const ct = e.target.closest('.card[data-cert]'); if (ct) { openCert(+ct.dataset.cert); return; }
    const c = e.target.closest('.card.click'); if (c) { openProject(c.dataset.id); return; }
    const t = e.target.closest('#tlTabs button'); if (t) { tlKey = t.dataset.k; renderTimeline(); return; }
    const s = e.target.closest('#chatSug button'); if (s) { ask(s.textContent); return; }
    const lb = e.target.closest('#langSel button'); if (lb) { lang = lb.dataset.l; store.set('lang', lang); renderAll(); return; }
    if (e.target.closest('#menu a')) $('#menu').classList.remove('open');
    if (e.target === $('#modal')) $('#modal').close();
  });
  $('#q').addEventListener('input', (e) => { query = e.target.value; renderProjects(); });
  $('#mClose').onclick = () => $('#modal').close();
  $('#burger').onclick = () => $('#menu').classList.toggle('open');
  $('#theme').onclick = () => {
    const cur = document.documentElement.dataset.theme || 'light';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next; store.set('theme', next);
  };
  $('#chatFab').onclick = () => { $('#chat').hidden = !$('#chat').hidden; if (!$('#chat').hidden) $('#chatIn').focus(); };
  $('#chatClose').onclick = () => ($('#chat').hidden = true);
  $('#chatForm').onsubmit = (e) => { e.preventDefault(); const v = $('#chatIn').value; $('#chatIn').value = ''; ask(v); };
  $('#form').onsubmit = (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    location.href = 'mailto:vigoncalvesp@gmail.com?subject=' + encodeURIComponent('Contato via portfólio — ' + d.get('name')) +
      '&body=' + encodeURIComponent(d.get('msg') + '\n\n' + d.get('email'));
  };

  addMsg('', false);
  renderAll();
})();
