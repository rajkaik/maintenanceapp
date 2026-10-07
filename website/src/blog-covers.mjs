// Cover illustrations for blog articles: line drawings on a dark panel, drawn as
// inline SVG (1200 × 630, the Open Graph image ratio). The dark background comes
// from the .cover CSS class so the same markup works in cards, heroes and the
// PNG exports in assets/img/blog/ (see tools/render-covers.mjs).

const R = '#dfcac4'; // rose line colour
const A = '#e01e26'; // accent red
const W = '#ffffff';
const line = `fill="none" stroke="${R}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"`;
const thin = `fill="none" stroke="${R}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".7"`;

// A stirred-tank vessel: dished bottom, lid, motor, shaft, impeller, baffles, liquid level.
function vessel(cx, baseY, w, h, { bubbles = 0, level = true } = {}) {
  const x0 = cx - w / 2;
  const x1 = cx + w / 2;
  const y0 = baseY - h;
  const r = w * 0.2;
  const imp = baseY - h * 0.24;
  const motorH = Math.max(18, h * 0.11);
  const motorW = Math.max(26, w * 0.24);
  let s = `<path d="M${x0} ${y0}V${baseY - r}A${r} ${r} 0 0 0 ${x0 + r} ${baseY}H${x1 - r}A${r} ${r} 0 0 0 ${x1} ${baseY - r}V${y0}" ${line}/>`;
  s += `<path d="M${x0 - 8} ${y0}H${x1 + 8}" ${line}/>`;
  s += `<rect x="${cx - motorW / 2}" y="${y0 - 14 - motorH}" width="${motorW}" height="${motorH}" rx="4" ${line}/>`;
  s += `<path d="M${cx} ${y0 - 14}V${imp}" ${line}/>`;
  s += `<path d="M${cx - w * 0.2} ${imp}H${cx + w * 0.2}" ${line}/>`;
  s += `<rect x="${cx - w * 0.2 - 4}" y="${imp - 9}" width="8" height="18" rx="2" fill="${A}"/><rect x="${cx + w * 0.2 - 4}" y="${imp - 9}" width="8" height="18" rx="2" fill="${A}"/>`;
  s += `<path d="M${x0 + w * 0.08} ${y0 + h * 0.3}V${baseY - h * 0.18}M${x1 - w * 0.08} ${y0 + h * 0.3}V${baseY - h * 0.18}" ${thin}/>`;
  if (level) {
    const ly = y0 + h * 0.2;
    const seg = w / 6;
    let d = `M${x0 + 6} ${ly}`;
    for (let i = 0; i < 6; i++) d += `q${seg / 2} ${i % 2 ? 6 : -6} ${seg} 0`;
    s += `<path d="${d}" ${thin} stroke-dasharray="1 9"/>`;
  }
  for (let i = 0; i < bubbles; i++) {
    const bx = cx + ((i * 37) % (w * 0.6)) - w * 0.3;
    const by = imp - 20 - ((i * 53) % (h * 0.45));
    s += `<circle cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="${3 + (i % 3) * 2}" ${thin}/>`;
  }
  return s;
}

const label = (text, x = 72, y = 104) => `<text x="${x}" y="${y}" class="cover__label">${text}</text>`;
const detail = (text, x = 72, y = 566) => `<text x="${x}" y="${y}" class="cover__detail">${text}</text>`;

const art = {
  'scale-up': () => [
    label('SCALE-UP'),
    detail('P/V · kLa · tip speed', 72, 150),
    vessel(530, 520, 110, 150, { bubbles: 3 }),
    vessel(735, 520, 180, 250, { bubbles: 6 }),
    vessel(990, 520, 260, 370, { bubbles: 12 }),
    `<text x="530" y="584" class="cover__num" text-anchor="middle">1 L</text>`,
    `<text x="735" y="584" class="cover__num" text-anchor="middle">50 L</text>`,
    `<text x="990" y="584" class="cover__num" text-anchor="middle">1000 L</text>`,
  ].join(''),

  'single-use': () => {
    // single-use bag in a holder (left) versus a jacketed stainless vessel (right)
    const bag = `<rect x="300" y="190" width="230" height="300" rx="46" ${line}/>
      <path d="M330 190V520M500 190V520M300 520H530M318 520v30M512 520v30" ${thin}/>
      <path d="M360 190c0-40 30-56 50-56M470 190c0-30 40-40 70-60M415 190v-40" ${line}/>
      <circle cx="415" cy="148" r="8" fill="${A}"/><circle cx="410" cy="134" r="6" ${line}/>
      <path d="M330 300c40 18 130 18 170 0" ${thin} stroke-dasharray="1 9"/>`;
    const steel = `<path d="M760 170V430A90 90 0 0 0 850 520H950A90 90 0 0 0 1040 430V170" ${line}/>
      <path d="M740 170V440A110 110 0 0 0 850 550H950A110 110 0 0 0 1060 440V170" ${thin}/>
      <path d="M736 170C780 120 1020 120 1064 170Z" ${line}/>
      <rect x="880" y="118" width="40" height="22" rx="4" ${line}/>
      <path d="M790 550v34M1010 550v34" ${line}/>
      <path d="M770 260H1030" ${thin} stroke-dasharray="1 9"/>
      <circle cx="1060" cy="300" r="7" fill="${A}"/>`;
    return [label('EQUIPMENT CHOICE'), detail('Single-use bag  ·  stainless steel, SIP', 72, 600), bag, steel,
      `<text x="640" y="380" class="cover__vs" text-anchor="middle">VS</text>`].join('');
  },

  eds: () => {
    // kill tank with heating jacket + a time–temperature curve with the F0 area
    const tank = `<path d="M210 210V440A70 70 0 0 0 280 510H390A70 70 0 0 0 460 440V210" ${line}/>
      <path d="M210 210C240 170 430 170 460 210" ${line}/>
      <path d="M196 260h278M196 300h278M196 340h278M196 380h278M196 420h278" ${thin}/>
      <path d="M335 175v-40M300 135h70" ${line}/>
      <circle cx="335" cy="534" r="8" fill="${A}"/><path d="M335 510v16" ${line}/>`;
    const ox = 560;
    const oy = 520;
    const curve = `M${ox} ${oy - 20}C${ox + 80} ${oy - 30} ${ox + 120} ${oy - 250} ${ox + 200} ${oy - 290}H${ox + 420}C${ox + 470} ${oy - 290} ${ox + 520} ${oy - 60} ${ox + 580} ${oy - 40}`;
    const chart = `<path d="M${ox} 150V${oy}H${ox + 600}" ${line}/>
      <path d="M${ox + 200} ${oy - 290}H${ox + 420}V${oy}H${ox + 200}Z" fill="${A}" opacity=".22"/>
      <path d="${curve}" fill="none" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
      <path d="M${ox} ${oy - 290}H${ox + 190}" ${thin} stroke-dasharray="2 10"/>
      <text x="${ox + 14}" y="${oy - 304}" class="cover__small">121.1 °C</text>
      <text x="${ox + 310}" y="${oy - 130}" class="cover__num" text-anchor="middle">F₀</text>
      <text x="${ox + 600}" y="${oy + 40}" class="cover__small" text-anchor="end">time</text>`;
    return [label('BIOSAFETY'), detail('Thermal inactivation · BSL-2 / BSL-3', 72, 594), tank, chart].join('');
  },

  part11: () => {
    const screen = `<rect x="230" y="150" width="520" height="330" rx="14" ${line}/>
      <path d="M440 480l-20 60h140l-20-60M400 540h180" ${line}/>
      <path d="M262 420C320 380 350 300 410 310S500 400 560 360S650 230 718 220" fill="none" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
      <path d="M262 440C330 430 380 400 440 410S560 380 610 330S690 310 718 300" ${thin}/>
      <path d="M262 190h120M262 214h80" ${thin}/>`;
    let rows = '';
    for (let i = 0; i < 7; i++) {
      const y = 170 + i * 46;
      rows += `<rect x="810" y="${y}" width="56" height="24" rx="4" ${thin}/><path d="M884 ${y + 12}h${150 - (i % 3) * 30}" ${line}/>`;
    }
    const shield = `<path d="M1010 380l70 26v62c0 52-30 84-70 98-40-14-70-46-70-98v-62z" fill="${A}"/>
      <path d="M978 468l22 22 42-46" fill="none" stroke="${W}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`;
    return [label('DATA INTEGRITY'), detail('21 CFR Part 11 · EU GMP Annex 11 · ALCOA+'), screen, rows, shield].join('');
  },

  'parallel-doe': () => {
    let v = '';
    for (let i = 0; i < 6; i++) v += vessel(150 + i * 120, 540, 76, 118, { bubbles: 2, level: true });
    // design-space cube with corner points and centre point
    const cx = 960;
    const cy = 300;
    const s = 150;
    const o = 70;
    const P = [[cx - s, cy - s + o], [cx + s - o, cy - s + o], [cx + s - o, cy + s], [cx - s, cy + s], [cx - s + o, cy - s], [cx + s, cy - s], [cx + s, cy + s - o], [cx - s + o, cy + s - o]];
    const edge = (a, b) => `M${P[a][0]} ${P[a][1]}L${P[b][0]} ${P[b][1]}`;
    const cube = `<path d="${[edge(0, 1), edge(1, 2), edge(2, 3), edge(3, 0), edge(4, 5), edge(5, 6), edge(0, 4), edge(1, 5), edge(2, 6)].join('')}" ${line}/>
      <path d="${[edge(6, 7), edge(7, 4), edge(3, 7)].join('')}" ${thin} stroke-dasharray="4 8"/>
      ${P.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="10" fill="${A}"/>`).join('')}
      <circle cx="${(P[0][0] + P[6][0]) / 2}" cy="${(P[0][1] + P[6][1]) / 2}" r="10" fill="${W}"/>`;
    return [label('PROCESS DEVELOPMENT'), detail('6 parallel runs · design of experiments', 72, 600), v, cube].join('');
  },

  'cultivated-meat': () => {
    const big = vessel(860, 540, 300, 400, { bubbles: 0 });
    let beads = '';
    const pts = [[790, 300], [880, 270], [940, 340], [820, 380], [900, 420], [980, 280], [760, 440], [960, 470], [850, 470]];
    pts.forEach(([x, y], i) => {
      beads += `<circle cx="${x}" cy="${y}" r="16" ${line}/>`;
      if (i % 2 === 0) beads += `<circle cx="${x + 13}" cy="${y - 10}" r="5" fill="${A}"/><circle cx="${x - 14}" cy="${y + 6}" r="5" fill="${A}"/>`;
    });
    // magnified microcarrier covered with cells
    const lens = `<circle cx="380" cy="340" r="150" ${line}/>
      <path d="M486 446L560 520" ${line}/>
      <circle cx="380" cy="340" r="72" fill="none" stroke="${W}" stroke-width="4"/>
      ${Array.from({ length: 14 }, (_, i) => {
        const a = (i / 14) * Math.PI * 2;
        const x = 380 + Math.cos(a) * 92;
        const y = 340 + Math.sin(a) * 92;
        return `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="20" ry="11" transform="rotate(${((a * 180) / Math.PI + 90).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})" fill="${A}" opacity="${i % 3 ? 0.9 : 0.55}"/>`;
      }).join('')}
      <path d="M560 520L700 400" ${thin} stroke-dasharray="2 10"/>`;
    return [label('CULTIVATED MEAT'), detail('Cells on microcarriers · stirred tank'), big, beads, lens].join('');
  },
};

export const coverIds = Object.keys(art);

export function cover(id, { alt = '', cls = '' } = {}) {
  if (!art[id]) throw new Error(`Unknown blog cover: ${id}`);
  return `<div class="cover ${cls}"${alt ? ` role="img" aria-label="${alt.replace(/"/g, '&quot;')}"` : ' aria-hidden="true"'}><svg viewBox="0 0 1200 630" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${art[id]()}</svg></div>`;
}
