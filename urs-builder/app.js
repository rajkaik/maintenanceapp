/*
 * URS builder - renders the question bank in data/<template>.js as a
 * questionnaire and turns the answers into a URS document.
 *
 * Answers are kept in localStorage (per browser) and can be downloaded /
 * loaded as a JSON file so the customer can send them to us.
 */
(function () {
  'use strict';

  var T = window.URS_TEMPLATE;
  var STD = window.URS_STANDARDS || {};
  var STORAGE_KEY = 'urs-builder.' + T.id + '.v1';
  var PROJECT_ID = 'PROJECT';

  var PROJECT_FIELDS = [
    { id: 'customer', label: 'Customer / company' },
    { id: 'site', label: 'Installation site' },
    { id: 'project', label: 'Project name' },
    { id: 'contact', label: 'Contact person' },
    { id: 'email', label: 'Contact e-mail', type: 'email' },
    { id: 'docNo', label: 'URS document number' },
    { id: 'revision', label: 'Revision' },
    { id: 'date', label: 'Date', type: 'date' }
  ];

  // Customer-facing wording for the supplier scope status of an answer.
  // 'tbd' (not yet reviewed internally) is deliberately not shown.
  var SCOPE = {
    in: { label: 'Standard', note: 'Part of our standard supply scope.' },
    conditional: { label: 'On request', note: 'Possible on request. Subject to technical review and quoted separately.' },
    out: { label: 'Outside standard scope', note: 'Outside our standard supply scope. We will contact you to discuss alternatives.' }
  };

  var QUESTIONS = {};
  T.sections.forEach(function (s, si) {
    s.questions.forEach(function (q) {
      QUESTIONS[q.id] = { q: q, section: s, index: si };
    });
  });

  var state = loadState() || blankState();
  if (sectionOrder().indexOf(state.section) === -1) state.section = PROJECT_ID;

  // ---------------------------------------------------------------- state

  function blankState() {
    return { project: {}, answers: {}, section: PROJECT_ID, view: 'form' };
  }

  function loadState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      if (!s || typeof s !== 'object') return null;
      return {
        project: s.project || {},
        answers: s.answers || {},
        section: s.section || PROJECT_ID,
        view: s.view === 'urs' ? 'urs' : 'form'
      };
    } catch (e) {
      return null;
    }
  }

  var saveTimer = null;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveNow, 250);
  }

  function saveNow() {
    clearTimeout(saveTimer);
    saveTimer = null;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      setText('#save-status', 'Saved in this browser');
    } catch (e) {
      setText('#save-status', 'Not saved in this browser. Download your answers to keep them.');
    }
  }

  // Flush a pending save when the tab is hidden or closed.
  window.addEventListener('pagehide', function () { if (saveTimer) saveNow(); });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden' && saveTimer) saveNow();
  });

  function answer(id) {
    if (!state.answers[id]) state.answers[id] = {};
    return state.answers[id];
  }

  function valueOf(id) {
    var a = state.answers[id];
    return a ? a.value : undefined;
  }

  function hasValue(v) {
    if (v === undefined || v === null) return false;
    if (Array.isArray(v)) return v.length > 0;
    if (typeof v === 'number') return isFinite(v);
    return String(v).trim() !== '';
  }

  // Shown unless the referenced question is answered with a value outside `in`.
  function isVisible(item) {
    if (!item.showIf) return true;
    var v = valueOf(item.showIf.q);
    if (!hasValue(v)) return true;
    var vals = Array.isArray(v) ? v : [v];
    return vals.some(function (x) { return item.showIf.in.indexOf(x) !== -1; });
  }

  function visibleQuestions(s) {
    return s.questions.filter(isVisible);
  }

  function sectionProgress(s) {
    var qs = visibleQuestions(s);
    var done = qs.filter(function (q) { return hasValue(valueOf(q.id)); }).length;
    return { done: done, total: qs.length };
  }

  function projectProgress() {
    var done = PROJECT_FIELDS.filter(function (f) { return hasValue(state.project[f.id]); }).length;
    return { done: done, total: PROJECT_FIELDS.length };
  }

  function selectedOptions(q) {
    var v = valueOf(q.id);
    if (!hasValue(v) || !q.options) return [];
    var vals = Array.isArray(v) ? v : [v];
    return q.options.filter(function (o) { return vals.indexOf(o.value) !== -1; });
  }

  function bandFor(q, v) {
    if (!q.bands) return null;
    for (var i = 0; i < q.bands.length; i++) {
      if (q.bands[i].max === null || q.bands[i].max === undefined || v <= q.bands[i].max) return q.bands[i];
    }
    return null;
  }

  function numberScope(q, v) {
    var r = q.scopeRange;
    if (!r || (r.min === null && r.max === null)) return 'tbd';
    if (r.min !== null && v < r.min) return 'out';
    if (r.max !== null && v > r.max) return 'out';
    return 'in';
  }

  function numberChecks(q, v) {
    var notes = [];
    if (q.turndownOf) {
      var maxV = valueOf(q.turndownOf);
      if (hasValue(maxV) && v > 0) {
        if (v > maxV) {
          notes.push({ kind: 'crit', text: 'The minimum volume is larger than the maximum working volume (' + fmt(maxV) + ' ' + q.unit + ').' });
        } else {
          notes.push({ kind: 'info', text: 'Turndown 1:' + fmt(Math.round((maxV / v) * 10) / 10) + ' (' + fmt(v) + ' to ' + fmt(maxV) + ' ' + q.unit + ').' });
        }
      }
    }
    return notes;
  }

  // -------------------------------------------------------------- helpers

  function $(sel, root) { return (root || document).querySelector(sel); }

  function setText(sel, text) {
    var el = $(sel);
    if (el) el.textContent = text;
  }

  function esc(v) {
    return String(v === undefined || v === null ? '' : v).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function fmt(n) {
    return Number(n).toLocaleString('en-GB', { maximumFractionDigits: 2 });
  }

  function stdChips(keys) {
    return (keys || []).map(function (k) {
      var s = STD[k];
      return s ? '<span class="std" title="' + esc(s.title) + '">' + esc(s.code) + '</span>' : '';
    }).join('');
  }

  function stdCodes(keys) {
    return (keys || []).filter(function (k) { return STD[k]; }).map(function (k) { return esc(STD[k].code); }).join('<br>');
  }

  function scopeBadge(scope) {
    var s = SCOPE[scope];
    return s ? '<span class="scope scope-' + scope + '">' + esc(s.label) + '</span>' : '';
  }

  function sectionOrder() {
    return [PROJECT_ID].concat(T.sections.map(function (s) { return s.id; }));
  }

  function sectionTitle(id) {
    if (id === PROJECT_ID) return 'Project information';
    for (var i = 0; i < T.sections.length; i++) if (T.sections[i].id === id) return T.sections[i].title;
    return id;
  }

  var toastTimer = null;
  function toast(msg) {
    var el = $('#toast');
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.hidden = true; }, 2800);
  }

  // ----------------------------------------------------------- questionnaire

  function renderNav() {
    var h = '<ol class="nav-list">';
    h += navItem(PROJECT_ID, 'PRJ', 'Project information', projectProgress());
    T.sections.forEach(function (s) { h += navItem(s.id, s.id, s.title, sectionProgress(s)); });
    h += '</ol>';
    var nav = $('#sidenav');
    nav.innerHTML = h;
    var cur = nav.querySelector('.is-current');
    var list = nav.querySelector('.nav-list');
    if (cur && list.scrollWidth > list.clientWidth) list.scrollLeft = cur.offsetLeft - 16;
  }

  function navItem(id, code, title, p) {
    var current = state.section === id;
    var complete = p.total > 0 && p.done === p.total;
    return '<li><button type="button" class="nav-item' + (current ? ' is-current' : '') + (complete ? ' is-complete' : '') + '"' +
      ' data-goto="' + id + '"' + (current ? ' aria-current="step"' : '') + '>' +
      '<span class="nav-code">' + esc(code) + '</span>' +
      '<span class="nav-title">' + esc(title) + '</span>' +
      '<span class="nav-count">' + p.done + '/' + p.total + '</span></button></li>';
  }

  function renderSection() {
    var el = $('#form-content');
    if (state.section === PROJECT_ID) {
      el.innerHTML = projectHtml();
      return;
    }
    var si = sectionOrder().indexOf(state.section) - 1;
    el.innerHTML = sectionHtml(T.sections[si], si);
  }

  function projectHtml() {
    var h = '<div class="sec-head"><p class="eyebrow">Start here</p><h2>Project information</h2>' +
      '<p class="intro">This questionnaire collects the basic requirements for your bioreactor. Each answer shows the design solution we recommend and the standards behind it. The answers are compiled into a User Requirements Specification (URS) you can review, print and send to us.</p></div>';
    h += '<div class="example"><span>Want to see a completed URS first?</span>' +
      '<button type="button" class="btn" data-action="example">Fill with an example project</button></div>';
    h += '<div class="pgrid">' + PROJECT_FIELDS.map(function (f) {
      return '<label class="field" for="pf-' + f.id + '"><span>' + esc(f.label) + '</span>' +
        '<input id="pf-' + f.id + '" type="' + (f.type || 'text') + '" data-kind="project" data-field="' + f.id + '" value="' + esc(state.project[f.id]) + '" autocomplete="off"></label>';
    }).join('') + '</div>';
    h += '<ol class="steps">' +
      '<li><strong>Answer the questions</strong> section by section. Leave a question open if you are unsure. It will be listed as an open item.</li>' +
      '<li><strong>Review the URS document</strong> generated from your answers.</li>' +
      '<li><strong>Download your answers and print the URS as PDF</strong>, then send both to us. We will confirm each requirement or propose an alternative.</li>' +
      '</ol>';
    h += sectionNavHtml();
    return h;
  }

  function sectionHtml(s, si) {
    var h = '<div class="sec-head"><p class="eyebrow">Section ' + (si + 1) + ' of ' + T.sections.length + ' · ' + s.id + '</p>' +
      '<h2>' + esc(s.title) + '</h2><p class="intro">' + esc(s.intro) + '</p></div>';
    var base = s.baseline || [];
    if (base.length) {
      h += '<details class="baseline"><summary>Included as standard <span class="count" id="baseline-count"></span></summary><ul>' +
        base.map(function (b) {
          return '<li data-bid="' + b.id + '"><span class="qid">' + b.id + '</span> ' + esc(b.text) +
            (b.standards.length ? ' <span class="chips">' + stdChips(b.standards) + '</span>' : '') + '</li>';
        }).join('') + '</ul></details>';
    }
    h += '<ol class="qlist">' + s.questions.map(questionHtml).join('') + '</ol>';
    h += sectionNavHtml();
    return h;
  }

  function sectionNavHtml() {
    var order = sectionOrder();
    var i = order.indexOf(state.section);
    var prev = order[i - 1];
    var next = order[i + 1];
    return '<div class="sec-nav">' +
      (prev ? '<button type="button" class="btn" data-goto="' + prev + '">← ' + esc(sectionTitle(prev)) + '</button>' : '<span></span>') +
      (next ? '<button type="button" class="btn btn-primary" data-goto="' + next + '">' + esc(sectionTitle(next)) + ' →</button>'
        : '<button type="button" class="btn btn-primary" data-view="urs">Review the URS document →</button>') +
      '</div>';
  }

  function questionHtml(q) {
    var a = state.answers[q.id] || {};
    var h = '<li class="q" id="q-' + q.id + '">';
    h += '<div class="q-meta"><span class="qid">' + q.id + '</span>' +
      (q.gmp ? '<span class="tag-gmp" title="May affect product quality or patient safety">GMP</span>' : '') +
      (q.standards.length ? '<span class="chips">' + stdChips(q.standards) + '</span>' : '') + '</div>';
    h += '<h3 class="q-text" id="qt-' + q.id + '">' + esc(q.text) +
      (q.type === 'number' ? ' <span class="unit">(' + esc(q.unit) + ')</span>' : '') + '</h3>';
    if (q.help) h += '<p class="q-help">' + esc(q.help) + '</p>';
    h += inputHtml(q, a);
    h += '<div class="q-feedback" id="fb-' + q.id + '"></div>';
    if (q.type !== 'text') {
      h += '<details class="notes"' + (hasValue(a.notes) ? ' open' : '') + '><summary>Add details</summary>' +
        '<textarea id="note-' + q.id + '" rows="2" data-kind="notes" data-qid="' + q.id + '" aria-label="Details for ' + q.id + '" placeholder="Specific values, preferences or constraints">' + esc(a.notes) + '</textarea></details>';
    }
    return h + '</li>';
  }

  function inputHtml(q, a) {
    if (q.type === 'single' || q.type === 'multi') {
      var type = q.type === 'single' ? 'radio' : 'checkbox';
      var vals = Array.isArray(a.value) ? a.value : (hasValue(a.value) ? [a.value] : []);
      return '<fieldset class="opts" aria-labelledby="qt-' + q.id + '">' + q.options.map(function (o, i) {
        var checked = vals.indexOf(o.value) !== -1;
        var id = 'opt-' + q.id + '-' + i;
        return '<label class="opt' + (checked ? ' is-checked' : '') + '" for="' + id + '">' +
          '<input type="' + type + '" id="' + id + '" name="ans-' + q.id + '" value="' + esc(o.value) + '" data-kind="answer" data-qid="' + q.id + '"' + (checked ? ' checked' : '') + '>' +
          '<span class="opt-text">' + esc(o.label) + '</span>' + scopeBadge(o.scope) + '</label>';
      }).join('') + '</fieldset>';
    }
    if (q.type === 'number') {
      return '<div class="num"><input type="number" id="num-' + q.id + '" inputmode="decimal" data-kind="answer" data-qid="' + q.id + '"' +
        ' min="' + q.min + '" max="' + q.max + '" step="' + q.step + '" value="' + (hasValue(a.value) ? a.value : '') + '" aria-labelledby="qt-' + q.id + '">' +
        '<span class="unit">' + esc(q.unit) + '</span></div>';
    }
    return '<textarea id="txt-' + q.id + '" rows="3" data-kind="answer" data-qid="' + q.id + '" aria-labelledby="qt-' + q.id + '" placeholder="' + esc(q.placeholder) + '">' + esc(a.value) + '</textarea>';
  }

  function feedbackHtml(q) {
    var parts = [];
    if (q.type === 'number') {
      var v = valueOf(q.id);
      if (!hasValue(v)) return '';
      var b = bandFor(q, v);
      if (b) parts.push(basisItem(b.label, b.solution, [], null));
      if (numberScope(q, v) === 'out') {
        parts.push('<p class="notice notice-out">' + esc(SCOPE.out.note) + (q.scopeRange.note ? ' ' + esc(q.scopeRange.note) : '') + '</p>');
      }
      numberChecks(q, v).forEach(function (n) { parts.push('<p class="notice notice-' + n.kind + '">' + esc(n.text) + '</p>'); });
    } else if (q.options) {
      selectedOptions(q).forEach(function (o) { parts.push(basisItem(o.label, o.solution, o.standards, o.scope)); });
    }
    if (!parts.length) return '';
    return '<div class="basis"><p class="eyebrow">Recommended design basis</p>' + parts.join('') + '</div>';
  }

  function basisItem(label, solution, standards, scope) {
    var notice = (scope === 'conditional' || scope === 'out') ? '<p class="notice notice-' + scope + '">' + esc(SCOPE[scope].note) + '</p>' : '';
    return '<div class="basis-item"><p class="basis-label">' + esc(label) + '</p><p>' + esc(solution) + '</p>' +
      (standards && standards.length ? '<p class="chips">' + stdChips(standards) + '</p>' : '') + notice + '</div>';
  }

  // Updates everything that depends on answers without rebuilding inputs,
  // so typing never loses focus.
  function refreshSection() {
    if (state.section === PROJECT_ID) return;
    var s = QUESTIONS_BY_SECTION[state.section];
    s.questions.forEach(function (q) {
      var card = document.getElementById('q-' + q.id);
      if (!card) return;
      card.hidden = !isVisible(q);
      card.classList.toggle('is-answered', hasValue(valueOf(q.id)));
      var fb = document.getElementById('fb-' + q.id);
      if (fb) fb.innerHTML = feedbackHtml(q);
    });
    var visibleBase = 0;
    (s.baseline || []).forEach(function (b) {
      var li = document.querySelector('[data-bid="' + b.id + '"]');
      if (!li) return;
      li.hidden = !isVisible(b);
      if (!li.hidden) visibleBase++;
    });
    var count = $('#baseline-count');
    if (count) count.textContent = visibleBase;
  }

  var QUESTIONS_BY_SECTION = {};
  T.sections.forEach(function (s) { QUESTIONS_BY_SECTION[s.id] = s; });

  function updateProgress() {
    var done = 0;
    var total = 0;
    T.sections.forEach(function (s) {
      var p = sectionProgress(s);
      done += p.done;
      total += p.total;
    });
    $('#progress-fill').style.width = (total ? Math.round((done / total) * 100) : 0) + '%';
    setText('#progress-text', done + ' of ' + total + ' questions answered');
    renderNavCounts();
  }

  function renderNavCounts() {
    var items = document.querySelectorAll('#sidenav .nav-item');
    for (var i = 0; i < items.length; i++) {
      var id = items[i].getAttribute('data-goto');
      var p = id === PROJECT_ID ? projectProgress() : sectionProgress(QUESTIONS_BY_SECTION[id]);
      items[i].querySelector('.nav-count').textContent = p.done + '/' + p.total;
      items[i].classList.toggle('is-complete', p.total > 0 && p.done === p.total);
    }
  }

  function goTo(id) {
    state.section = id;
    renderSection();
    refreshSection();
    renderNav();
    window.scrollTo(0, 0);
    save();
  }

  // ------------------------------------------------------------ URS document

  function ursHtml() {
    var p = state.project;
    var cited = {};
    var openItems = [];
    var clarify = [];
    var answered = 0;
    var total = 0;

    function cite(keys) {
      (keys || []).forEach(function (k) { if (STD[k]) cited[k] = true; });
    }

    var sectionsHtml = T.sections.map(function (s, si) {
      var rows = '';
      (s.baseline || []).filter(isVisible).forEach(function (b) {
        cite(b.standards);
        rows += '<tr class="is-baseline"><td>' + b.id + '</td><td><span class="rq-topic">Standard requirement</span><span class="rq-answer">' + esc(b.text) + '</span></td>' +
          '<td>-</td><td class="rq-std">' + stdCodes(b.standards) + '</td></tr>';
      });
      visibleQuestions(s).forEach(function (q) {
        total++;
        var a = state.answers[q.id] || {};
        var reqHtml;
        var basisHtml = '-';
        var refs = q.standards.slice();
        if (!hasValue(a.value)) {
          openItems.push(q);
          reqHtml = '<span class="rq-open">Open - to be specified</span>';
        } else {
          answered++;
          if (q.type === 'number') {
            reqHtml = '<span class="rq-answer">' + fmt(a.value) + ' ' + esc(q.unit) + '</span>';
            var b = bandFor(q, a.value);
            var checks = numberChecks(q, a.value).map(function (n) { return '<div class="rq-basis-item">' + esc(n.text) + '</div>'; }).join('');
            basisHtml = (b ? '<div class="rq-basis-item"><strong>' + esc(b.label) + ':</strong> ' + esc(b.solution) + '</div>' : '') + checks;
            if (numberScope(q, a.value) === 'out') clarify.push({ q: q, answer: fmt(a.value) + ' ' + q.unit, scope: 'out' });
          } else if (q.type === 'text') {
            reqHtml = '<span class="rq-answer">' + esc(a.value) + '</span>';
          } else {
            var opts = selectedOptions(q);
            reqHtml = opts.map(function (o) { return '<span class="rq-answer">' + esc(o.label) + '</span>'; }).join('');
            basisHtml = opts.map(function (o) {
              refs = refs.concat(o.standards || []);
              if (o.scope === 'conditional' || o.scope === 'out') clarify.push({ q: q, answer: o.label, scope: o.scope });
              return '<div class="rq-basis-item">' + (opts.length > 1 ? '<strong>' + esc(o.label) + ':</strong> ' : '') + esc(o.solution) + '</div>';
            }).join('');
          }
          cite(refs);
        }
        if (hasValue(a.notes)) reqHtml += '<span class="rq-note">Customer note: ' + esc(a.notes) + '</span>';
        rows += '<tr><td>' + q.id + (q.gmp ? '<br><span class="tag-gmp">GMP</span>' : '') + '</td>' +
          '<td><span class="rq-topic">' + esc(q.topic) + '</span>' + reqHtml + '</td>' +
          '<td>' + basisHtml + '</td><td class="rq-std">' + stdCodes(dedupe(refs)) + '</td></tr>';
      });
      return '<h3>3.' + (si + 1) + ' ' + esc(s.title) + '</h3>' +
        '<div class="table-wrap"><table class="rq"><thead><tr><th>ID</th><th>Requirement</th><th>Design basis (supplier recommendation)</th><th>Standards</th></tr></thead>' +
        '<tbody>' + rows + '</tbody></table></div>';
    }).join('');

    var meta = [
      ['Customer', p.customer], ['Installation site', p.site], ['Project', p.project], ['Contact', [p.contact, p.email].filter(hasValue).join(', ')],
      ['Document no.', p.docNo], ['Revision', p.revision], ['Date', p.date], ['Template', T.title + ' v' + T.version]
    ];

    var h = '<header class="doc-head"><p class="eyebrow">User Requirements Specification</p><h1>' + esc(T.title) + (hasValue(p.project) ? ' · ' + esc(p.project) : '') + '</h1>' +
      '<dl class="doc-meta">' + meta.map(function (m) { return '<div><dt>' + m[0] + '</dt><dd>' + (hasValue(m[1]) ? esc(m[1]) : '-') + '</dd></div>'; }).join('') + '</dl></header>';

    h += '<section><h2>1 Purpose and scope</h2>' +
      '<p>This User Requirements Specification (URS) defines the customer\'s requirements for a ' + esc(T.title.toLowerCase()) + ' system. It is the basis for the supplier\'s quotation, the functional and design specifications, and the verification activities during FAT, SAT and qualification.</p>' +
      '<p>The design basis column states the solution the supplier recommends for each requirement. It becomes binding only once confirmed in the quotation. Requirements marked GMP may affect product quality or patient safety and are verified during qualification. Unless stated otherwise, the latest edition of each referenced standard applies.</p></section>';

    h += '<section><h2>2 Summary</h2><div class="summary-grid">' +
      summaryCell(answered + ' / ' + total, 'questions answered') +
      summaryCell(openItems.length, 'open items') +
      summaryCell(clarify.length, 'items for supplier clarification') +
      summaryCell(Object.keys(cited).length, 'standards referenced') +
      '</div></section>';

    h += '<section><h2>3 Requirements</h2>' + sectionsHtml + '</section>';

    h += '<section><h2>4 Open items</h2>' + (openItems.length
      ? '<ul>' + openItems.map(function (q) { return '<li><strong>' + q.id + '</strong> ' + esc(q.topic) + '</li>'; }).join('') + '</ul>'
      : '<p>None. All applicable questions are answered.</p>') + '</section>';

    h += '<section><h2>5 Items for supplier clarification</h2>' + (clarify.length
      ? '<ul>' + clarify.map(function (c) { return '<li><strong>' + c.q.id + '</strong> ' + esc(c.q.topic) + ': ' + esc(c.answer) + ' (' + esc(SCOPE[c.scope].label.toLowerCase()) + ')</li>'; }).join('') + '</ul>'
      : '<p>None identified.</p>') + '</section>';

    var stdKeys = Object.keys(STD).filter(function (k) { return cited[k]; });
    h += '<section><h2>6 Referenced standards and guidelines</h2>' + (stdKeys.length
      ? '<div class="table-wrap"><table class="std-table"><thead><tr><th>Reference</th><th>Title</th></tr></thead><tbody>' +
        stdKeys.map(function (k) { return '<tr><td>' + esc(STD[k].code) + '</td><td>' + esc(STD[k].title) + '</td></tr>'; }).join('') + '</tbody></table></div>'
      : '<p>No standards referenced yet.</p>') + '</section>';

    h += '<section><h2>7 Approval</h2><div class="table-wrap"><table class="sign-table"><thead><tr><th>Role</th><th>Name</th><th>Function</th><th>Date</th><th>Signature</th></tr></thead><tbody>' +
      ['Prepared by (customer)', 'Reviewed by (customer QA)', 'Approved by (customer)', 'Acknowledged by (supplier)'].map(function (r) {
        return '<tr><td>' + r + '</td><td></td><td></td><td></td><td></td></tr>';
      }).join('') + '</tbody></table></div></section>';

    return h;
  }

  function summaryCell(value, label) {
    return '<div class="summary-cell"><b>' + esc(value) + '</b><span>' + esc(label) + '</span></div>';
  }

  function dedupe(arr) {
    return arr.filter(function (x, i) { return arr.indexOf(x) === i; });
  }

  // ------------------------------------------------------------------ views

  function showView(view) {
    state.view = view;
    $('#view-form').hidden = view !== 'form';
    $('#view-urs').hidden = view !== 'urs';
    $('#tab-form').setAttribute('aria-selected', String(view === 'form'));
    $('#tab-urs').setAttribute('aria-selected', String(view === 'urs'));
    if (view === 'urs') $('#urs-doc').innerHTML = ursHtml();
    save();
  }

  function renderAll() {
    renderNav();
    renderSection();
    refreshSection();
    updateProgress();
    showView(state.view);
  }

  // ------------------------------------------------------------- file I/O

  function exportPayload() {
    return {
      template: T.id,
      templateVersion: T.version,
      exportedAt: new Date().toISOString(),
      project: state.project,
      answers: state.answers
    };
  }

  function download() {
    var name = (state.project.docNo || state.project.project || 'answers').replace(/[^A-Za-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '');
    var blob = new Blob([JSON.stringify(exportPayload(), null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'URS-' + T.id + '-' + (name || 'answers') + '.json';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    toast('Answers downloaded');
  }

  function load(file) {
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var data = JSON.parse(reader.result);
        if (!data || data.template !== T.id) {
          toast('This file is not a ' + T.title.toLowerCase() + ' URS answer file.');
          return;
        }
        state.project = data.project || {};
        state.answers = data.answers || {};
        renderAll();
        toast('Answers loaded from ' + file.name);
      } catch (e) {
        toast('Could not read the file. Choose a .json file downloaded from this questionnaire.');
      }
    };
    reader.readAsText(file);
  }

  function loadExample() {
    var ex = JSON.parse(JSON.stringify(T.example));
    state.project = ex.project;
    state.answers = ex.answers;
    renderAll();
    toast('Example loaded. Reset to start your own.');
  }

  var resetArmed = null;
  function reset(btn) {
    if (!resetArmed) {
      btn.textContent = 'Click again to clear all answers';
      btn.classList.add('btn-danger');
      resetArmed = setTimeout(function () {
        resetArmed = null;
        btn.textContent = 'Reset';
        btn.classList.remove('btn-danger');
      }, 4000);
      return;
    }
    clearTimeout(resetArmed);
    resetArmed = null;
    btn.textContent = 'Reset';
    btn.classList.remove('btn-danger');
    state = blankState();
    renderAll();
    window.scrollTo(0, 0);
    toast('All answers cleared');
  }

  // ----------------------------------------------------------------- events

  var form = $('#form-content');

  form.addEventListener('change', function (e) {
    var t = e.target;
    if (t.getAttribute('data-kind') !== 'answer' || (t.type !== 'radio' && t.type !== 'checkbox')) return;
    var q = QUESTIONS[t.getAttribute('data-qid')].q;
    var a = answer(q.id);
    if (t.type === 'radio') {
      a.value = t.value;
    } else {
      var checked = [];
      var boxes = document.querySelectorAll('input[name="ans-' + q.id + '"]');
      for (var i = 0; i < boxes.length; i++) if (boxes[i].checked) checked.push(boxes[i].value);
      a.value = checked;
    }
    var labels = document.querySelectorAll('#q-' + q.id + ' .opt');
    for (var j = 0; j < labels.length; j++) labels[j].classList.toggle('is-checked', labels[j].querySelector('input').checked);
    refreshSection();
    updateProgress();
    save();
  });

  form.addEventListener('input', function (e) {
    var t = e.target;
    var kind = t.getAttribute('data-kind');
    if (kind === 'project') {
      state.project[t.getAttribute('data-field')] = t.value;
      renderNavCounts();
      save();
    } else if (kind === 'notes') {
      answer(t.getAttribute('data-qid')).notes = t.value;
      save();
    } else if (kind === 'answer' && (t.type === 'number' || t.tagName === 'TEXTAREA')) {
      var a = answer(t.getAttribute('data-qid'));
      if (t.type === 'number') {
        var n = t.value === '' ? NaN : Number(t.value);
        a.value = isFinite(n) ? n : null;
      } else {
        a.value = t.value;
      }
      refreshSection();
      updateProgress();
      save();
    }
  });

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-goto], [data-view], [data-action]');
    if (!el) return;
    if (el.hasAttribute('data-goto')) {
      goTo(el.getAttribute('data-goto'));
    } else if (el.hasAttribute('data-view')) {
      showView(el.getAttribute('data-view'));
      window.scrollTo(0, 0);
    } else {
      var action = el.getAttribute('data-action');
      if (action === 'download') download();
      else if (action === 'print') { showView('urs'); window.print(); }
      else if (action === 'reset') reset(el);
      else if (action === 'example') loadExample();
    }
  });

  $('#file-load').addEventListener('change', function (e) {
    if (e.target.files && e.target.files[0]) load(e.target.files[0]);
    e.target.value = '';
  });

  renderAll();
})();
