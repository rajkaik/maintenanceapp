#!/usr/bin/env node
/*
 * Validates the question bank and writes docs/scope-review.md, the sheet we
 * use to review every answer option against our supply scope.
 *
 *   node tools/build-review.mjs            validate + write the review sheet
 *   node tools/build-review.mjs --check    validate only
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const template = 'bioreactor';

const sandbox = { window: {} };
vm.createContext(sandbox);
for (const file of ['data/standards.js', `data/${template}.js`]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });
}
const STD = sandbox.window.URS_STANDARDS;
const T = sandbox.window.URS_TEMPLATE;

// ------------------------------------------------------------- validation

const SCOPES = ['tbd', 'in', 'conditional', 'out'];
const TYPES = ['single', 'multi', 'number', 'text'];
const problems = [];
const ids = new Set();
const questions = {};

const checkStandards = (where, keys = []) => {
  for (const k of keys) if (!STD[k]) problems.push(`${where}: unknown standard "${k}"`);
};

for (const s of T.sections) {
  for (const q of s.questions) {
    if (ids.has(q.id)) problems.push(`duplicate id ${q.id}`);
    ids.add(q.id);
    questions[q.id] = q;
    if (!q.id.startsWith(s.id + '-')) problems.push(`${q.id}: id does not match section ${s.id}`);
    if (!TYPES.includes(q.type)) problems.push(`${q.id}: unknown type "${q.type}"`);
    if (!q.topic) problems.push(`${q.id}: missing topic`);
    checkStandards(q.id, q.standards);
    if (q.type === 'single' || q.type === 'multi') {
      const values = new Set();
      for (const o of q.options || []) {
        if (values.has(o.value)) problems.push(`${q.id}: duplicate option value "${o.value}"`);
        values.add(o.value);
        if (!o.solution) problems.push(`${q.id}/${o.value}: missing solution`);
        if (!SCOPES.includes(o.scope)) problems.push(`${q.id}/${o.value}: invalid scope "${o.scope}"`);
        checkStandards(`${q.id}/${o.value}`, o.standards);
      }
      if (!values.size) problems.push(`${q.id}: no options`);
    }
    if (q.type === 'number' && !q.unit) problems.push(`${q.id}: number question without unit`);
  }
  for (const b of s.baseline || []) {
    if (ids.has(b.id)) problems.push(`duplicate id ${b.id}`);
    ids.add(b.id);
    if (!SCOPES.includes(b.scope)) problems.push(`${b.id}: invalid scope "${b.scope}"`);
    checkStandards(b.id, b.standards);
  }
}

const checkShowIf = (item) => {
  if (!item.showIf) return;
  const ref = questions[item.showIf.q];
  if (!ref) return problems.push(`${item.id}: showIf references unknown question ${item.showIf.q}`);
  for (const v of item.showIf.in) {
    if (!ref.options?.some((o) => o.value === v)) problems.push(`${item.id}: showIf value "${v}" not an option of ${ref.id}`);
  }
};
for (const s of T.sections) [...s.questions, ...(s.baseline || [])].forEach(checkShowIf);

for (const [id, a] of Object.entries(T.example?.answers || {})) {
  const q = questions[id];
  if (!q) { problems.push(`example: unknown question ${id}`); continue; }
  const vals = Array.isArray(a.value) ? a.value : [a.value];
  if (q.options) for (const v of vals) if (!q.options.some((o) => o.value === v)) problems.push(`example ${id}: "${v}" is not an option`);
}

if (problems.length) {
  console.error(`Question bank has ${problems.length} problem(s):\n  - ` + problems.join('\n  - '));
  process.exit(1);
}

const counts = Object.fromEntries(SCOPES.map((s) => [s, 0]));
let numberRanges = 0;
let numberRangesSet = 0;
for (const s of T.sections) {
  for (const q of s.questions) {
    for (const o of q.options || []) counts[o.scope]++;
    if (q.scopeRange) {
      numberRanges++;
      if (q.scopeRange.min !== null || q.scopeRange.max !== null) numberRangesSet++;
    }
  }
  for (const b of s.baseline || []) counts[b.scope]++;
}
const questionCount = T.sections.reduce((n, s) => n + s.questions.length, 0);
console.log(`OK: ${T.sections.length} sections, ${questionCount} questions, ` +
  `scope items - ${counts.tbd} not reviewed, ${counts.in} in, ${counts.conditional} conditional, ${counts.out} out`);

if (process.argv.includes('--check')) process.exit(0);

// ----------------------------------------------------------- review sheet

const LABEL = { tbd: 'NOT REVIEWED', in: 'IN SCOPE', conditional: 'CONDITIONAL', out: 'OUT OF SCOPE' };
const codes = (keys = []) => keys.map((k) => STD[k].code).join(', ');
const range = (r) => (r.min === null && r.max === null ? 'NOT REVIEWED' : `${r.min ?? '-'} to ${r.max ?? '-'}`);

const out = [];
out.push(`# ${T.title} URS - scope review`);
out.push('');
out.push(`Generated from \`data/${template}.js\` by \`tools/build-review.mjs\`. Do not edit by hand: change the question bank and re-run the script.`);
out.push('');
out.push(`Template version: ${T.version}`);
out.push('');
out.push('For every answer option, decide whether it is within our supply scope:');
out.push('');
out.push('- **IN SCOPE** - standard supply, shown to the customer as "Standard"');
out.push('- **CONDITIONAL** - possible on request / after engineering review, shown as "On request"');
out.push('- **OUT OF SCOPE** - we do not supply this, shown as "Outside standard scope"');
out.push('- **NOT REVIEWED** - not yet decided, nothing shown to the customer');
out.push('');
out.push('Also check that each proposed solution is what we would actually offer.');
out.push('');
out.push('## Status');
out.push('');
out.push('| Scope status | Items |');
out.push('| --- | ---: |');
for (const s of SCOPES) out.push(`| ${LABEL[s]} | ${counts[s]} |`);
out.push(`| Numeric ranges reviewed | ${numberRangesSet} of ${numberRanges} |`);
out.push('');

for (const s of T.sections) {
  out.push(`## ${s.id} - ${s.title}`);
  out.push('');
  out.push(s.intro);
  out.push('');
  for (const q of s.questions) {
    out.push(`### ${q.id} ${q.topic}${q.gmp ? ' (GMP)' : ''}`);
    out.push('');
    const head = [`**Question:** ${q.text}${q.type === 'number' ? ` [${q.unit}]` : ''}`];
    if (q.showIf) head.push(`_Only shown when ${q.showIf.q} is: ${q.showIf.in.join(', ')}_`);
    if (q.standards.length) head.push(`_Standards:_ ${codes(q.standards)}`);
    out.push(head.join('  \n'));
    out.push('');
    if (q.type === 'number') {
      for (const b of q.bands || []) {
        out.push(`- **${b.label}${b.max !== null ? ` (up to ${b.max} ${q.unit})` : ''}**  \n  ${b.solution}`);
      }
      out.push(`- **Supply scope range:** ${range(q.scopeRange)} ${q.unit}${q.scopeRange.note ? ` - ${q.scopeRange.note}` : ''}`);
    } else if (q.type === 'text') {
      out.push('- Free text, no scope decision needed.');
    } else {
      for (const o of q.options) {
        out.push(`- **${o.label}** - ${LABEL[o.scope]}  \n  ${o.solution}` +
          (o.standards?.length ? `  \n  _Standards:_ ${codes(o.standards)}` : '') +
          (o.scopeNote ? `  \n  _Review note:_ ${o.scopeNote}` : ''));
      }
    }
    out.push('');
  }
  if (s.baseline?.length) {
    out.push(`### ${s.id} baseline requirements (always included)`);
    out.push('');
    for (const b of s.baseline) {
      out.push(`- **${b.id}** - ${LABEL[b.scope]}  \n  ${b.text}` + (b.standards.length ? `  \n  _Standards:_ ${codes(b.standards)}` : ''));
    }
    out.push('');
  }
}

const target = path.join(root, 'docs', 'scope-review.md');
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, out.join('\n'));
console.log(`Wrote ${path.relative(root, target)}`);
