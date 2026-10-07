// Shared building blocks for every page. Each function returns an HTML string.
// `rel` is the relative path prefix from the page to the site root ('' or '../').
import { readFileSync } from 'node:fs';
import { site, nav } from './site.mjs';

const brandDir = new URL('../assets/brand/', import.meta.url);
const logoFile = readFileSync(new URL('logo.svg', brandDir), 'utf8');
const logoViewBox = logoFile.match(/viewBox="([^"]+)"/)[1];
const logoInner = logoFile.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
// The logo is defined once per page as a <symbol> and referenced with <use>.
const markInner = readFileSync(new URL('mark.svg', brandDir), 'utf8').replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const logoSymbol = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="belach-logo" viewBox="${logoViewBox}">${logoInner}</symbol><symbol id="belach-mark" viewBox="0 0 100 120">${markInner}</symbol></svg>`;

export const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------- icons (24px line icons, stroke = currentColor) ---------- */
const stroke = (d, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"${extra}>${d}</svg>`;
const fill = (d) => `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">${d}</svg>`;

export const icons = {
  arrow: () => stroke('<path d="M7 17 17 7M8 7h9v9"/>', ' stroke-width="2.2"'),
  left: () => stroke('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
  right: () => stroke('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  chevron: () => stroke('<path d="m6 9 6 6 6-6"/>', ' stroke-width="2.2"'),
  check: () => stroke('<path d="m5 12.5 4.5 4.5L19 7.5"/>', ' stroke-width="2.2"'),
  menu: () => stroke('<path d="M4 7h16M4 12h16M4 17h16"/>', ' stroke-width="2"'),
  close: () => stroke('<path d="M6 6l12 12M18 6 6 18"/>', ' stroke-width="2"'),
  phone: () => stroke('<path d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.6A1.5 1.5 0 0 1 5 4Z"/><path d="M14.5 3.5a6 6 0 0 1 6 6M14.5 7a2.5 2.5 0 0 1 2.5 2.5"/>'),
  mail: () => stroke('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>'),
  pin: () => stroke('<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.4"/>'),
  clock: () => stroke('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
  reactor: () => stroke('<path d="M10 2.5h4M12 2.5v13"/><path d="M5.5 6.5h13"/><path d="M6.5 6.5v9A5.5 5.5 0 0 0 12 21a5.5 5.5 0 0 0 5.5-5.5v-9"/><path d="M9.5 15.5h5"/><path d="M6.5 11h3.5M14 11h3.5"/>'),
  flask: () => stroke('<path d="M9 3h6M10 3v5.5L4.8 18a2 2 0 0 0 1.8 3h10.8a2 2 0 0 0 1.8-3L14 8.5V3"/><path d="M7 15h10"/>'),
  clipboard: () => stroke('<rect x="5" y="4.5" width="14" height="16.5" rx="2"/><path d="M9 4.5V3h6v1.5M8.5 10h7M8.5 13.5h7M8.5 17h4"/>'),
  layers: () => stroke('<path d="m12 3 9 4.5-9 4.5-9-4.5Z"/><path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5"/>'),
  wrench: () => stroke('<path d="M14.5 6.5a4 4 0 0 0 5.2 5.2l-8.4 8.4a2.1 2.1 0 0 1-3-3l8.4-8.4a4 4 0 0 0-2.2-2.2Z"/><path d="M14.5 6.5 17 4l3 3-2.5 2.5"/>'),
  headset: () => stroke('<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3.5" y="13.5" width="4" height="6" rx="1.5"/><rect x="16.5" y="13.5" width="4" height="6" rx="1.5"/><path d="M18.5 19.5c0 1-1.5 2-4 2H12"/>'),
  shield: () => stroke('<path d="M12 3 5 6v5.5c0 4.5 3 8 7 9.5 4-1.5 7-5 7-9.5V6Z"/><path d="m9 12 2 2 4-4"/>'),
  monitor: () => stroke('<rect x="3" y="4" width="18" height="12.5" rx="1.5"/><path d="M8 20.5h8M12 16.5v4"/><path d="m6.5 12 3-3 2.5 2 4.5-4.5"/>'),
  cloud: () => stroke('<path d="M7 18.5h10.5a4 4 0 0 0 .5-8 6 6 0 0 0-11.6 1.6A3.3 3.3 0 0 0 7 18.5Z"/><path d="M12 12v4M10 14h4"/>'),
  calendar: () => stroke('<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 9.5h17M8 3v4M16 3v4M8 13.5h2M14 13.5h2M8 17h2"/>'),
  gauge: () => stroke('<path d="M4.5 17a8.5 8.5 0 1 1 15 0"/><path d="m12 13 3.5-4"/><circle cx="12" cy="13.5" r="1.3"/>'),
  drop: () => stroke('<path d="M12 3.5s-6 6.4-6 10.6a6 6 0 0 0 12 0C18 9.9 12 3.5 12 3.5Z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>'),
  gear: () => stroke('<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.8 12h2.4M18.8 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7"/>'),
  globe: () => stroke('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 3.6 5.5 3.6 8.5s-1.1 5.9-3.6 8.5c-2.5-2.6-3.6-5.5-3.6-8.5S9.5 6.1 12 3.5Z"/>'),
  doc: () => stroke('<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4M9 12h6M9 15.5h6"/>'),
  play: () => fill('<path d="M8 5v14l11-7z"/>'),
  pause: () => fill('<path d="M7 5h4v14H7zM13 5h4v14h-4z"/>'),
  linkedin: () => fill('<path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.92 1.96 1.96 0 0 0 5.25 3ZM20.44 13.4c0-3.12-1.67-5.15-4.38-5.15a3.78 3.78 0 0 0-3.4 1.87V8.5H9.4V20h3.38v-6.05c0-1.6.6-2.82 2.16-2.82 1.5 0 2.12 1.2 2.12 2.88V20h3.38v-6.6Z"/>'),
  facebook: () => fill('<path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z"/>'),
  youtube: () => fill('<path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3Z"/>'),
};

/* ---------- small pieces ---------- */
export const logo = () => `<svg viewBox="${logoViewBox}" fill="currentColor" aria-hidden="true" focusable="false"><use href="#belach-logo"/></svg>`;

export const btn = ({ href, label, variant = '', attrs = '' }) =>
  `<a class="btn${variant ? ` btn--${variant}` : ''}" href="${href}"${attrs}><span>${label}</span><span class="btn__chip">${icons.arrow()}</span></a>`;

export const img = (rel, image, { cls = '', loading = 'lazy', sizes = '' } = {}) => {
  if (!image) return '';
  const w = image.w ? ` width="${image.w}" height="${image.h}"` : '';
  const src = /^https?:/.test(image.src) ? image.src : rel + image.src;
  return `<img${cls ? ` class="${cls}"` : ''} src="${src}" alt="${esc(image.alt || '')}"${w} loading="${loading}" decoding="async"${sizes ? ` sizes="${sizes}"` : ''}>`;
};

// A neutral illustrated panel used where Belach has no suitable photograph yet.
// It draws a schematic of a stirred-tank bioreactor so the layout reads correctly.
export const art = (cls = '', label = '') => `<div class="art ${cls}"${label ? ` role="img" aria-label="${esc(label)}"` : ' aria-hidden="true"'}>
  <svg viewBox="0 0 400 420" fill="none" stroke="currentColor" stroke-width="1.4">
    <rect x="150" y="18" width="100" height="44" rx="6"/>
    <path d="M200 62v260"/>
    <path d="M110 96h180M118 96v190c0 50 37 86 82 86s82-36 82-86V96"/>
    <path d="M118 160c27 10 55 10 82 0s55-10 82 0" stroke-dasharray="5 6"/>
    <path d="M168 300h64M176 250h48"/>
    <path d="M286 130h56v120h-56M300 150h28M300 175h28M300 200h28"/>
    <path d="M114 130H62v170h52M76 150h24M76 180h24M76 210h24"/>
    <circle cx="160" cy="220" r="5"/><circle cx="238" cy="196" r="4"/><circle cx="214" cy="232" r="3"/><circle cx="182" cy="182" r="3.5"/>
    <path d="M150 372l-16 30M250 372l16 30M120 402h160"/>
  </svg>
</div>`;

/* ---------- document ---------- */
const navLinks = (rel, current) => nav.map((n) => {
  if (n.children) {
    const isCur = n.children.some((c) => c.id === current) || n.id === current;
    return `<li class="nav__item${isCur ? ' nav__item--current' : ''}">
        <button class="nav__toggle" type="button" aria-expanded="false" aria-haspopup="true">${n.label}${icons.chevron()}</button>
        <div class="nav__menu">${n.children.map((c) => `<a href="${rel}${c.href}"${c.id === current ? ' aria-current="page"' : ''}>${c.label}${c.note ? `<small>${c.note}</small>` : ''}</a>`).join('')}</div>
      </li>`;
  }
  return `<li class="nav__item"><a class="nav__link" href="${rel}${n.href}"${n.id === current ? ' aria-current="page"' : ''}>${n.label}</a></li>`;
}).join('');

const headerBar = (rel, current, withMenu = true) => `
    <div class="container site-header__bar">
      <a class="brand" href="${rel}index.html" aria-label="${esc(site.name)}, home">${logo()}</a>
      ${withMenu ? `<nav class="main-nav" aria-label="Main"><ul class="nav" role="list">${navLinks(rel, current)}</ul></nav>` : ''}
      <a class="header-cta" href="tel:${site.phoneHref}"><span class="header-cta__icon">${icons.phone()}</span><span class="header-cta__num">${site.phone}</span></a>
      <button class="menu-btn" type="button" data-menu-open aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">${icons.menu()}</button>
    </div>`;

const mobileMenu = (rel, current) => `
  <div class="mobile-menu" id="mobile-menu" aria-hidden="true" inert>
    <div class="mobile-menu__top">
      <a class="brand" href="${rel}index.html" aria-label="${esc(site.name)}, home">${logo()}</a>
      <button class="menu-btn" type="button" data-menu-close aria-label="Close menu" style="display:grid">${icons.close()}</button>
    </div>
    <nav aria-label="Mobile">
      ${nav.map((n) => n.children
        ? `<a href="${rel}${n.href}"${n.id === current ? ' aria-current="page"' : ''}>${n.label}</a>${n.children.map((c) => `<a class="is-sub" href="${rel}${c.href}"${c.id === current ? ' aria-current="page"' : ''}>${c.label}</a>`).join('')}`
        : `<a href="${rel}${n.href}"${n.id === current ? ' aria-current="page"' : ''}>${n.label}</a>`).join('')}
    </nav>
    <div class="mobile-menu__foot">
      <a href="tel:${site.phoneHref}">${site.phone}</a>
      <a href="mailto:${site.email}">${site.email}</a>
      <span>${site.address.join(', ')}</span>
    </div>
  </div>`;

export const footer = (rel) => `
  <footer class="site-footer">
    <div class="container">
      <div class="site-footer__grid">
        <div class="site-footer__left">
          <div>
            <address class="site-footer__address">${site.address.map((l) => `<span>${esc(l)}</span>`).join('')}</address>
            <div class="site-footer__contact">
              <a href="tel:${site.phoneHref}">${site.phone}</a>
              <a href="mailto:${site.email}">${site.email}</a>
            </div>
            ${site.socials.length ? `<div class="socials">${site.socials.map((s) => `<a href="${s.href}" aria-label="${s.label}" rel="noopener" target="_blank">${icons[s.icon]()}</a>`).join('')}</div>` : ''}
          </div>
          <ul class="small-links" role="list">
            ${site.footerLinks.map((l) => `<li><a href="${l.external ? l.href : rel + l.href}"${l.external ? ' rel="noopener" target="_blank"' : ''}>${l.label}</a></li>`).join('')}
          </ul>
        </div>
        <nav aria-label="Footer">
          <ul class="footer-nav" role="list">
            ${site.footerNav.map((l) => `<li><a href="${rel}${l.href}">${l.label}</a></li>`).join('')}
          </ul>
        </nav>
      </div>
    </div>
    <div class="container">
      <div class="site-footer__bottom">
        <span>&copy; <span data-year>${new Date().getFullYear()}</span> ${esc(site.legalName)}${site.orgNo ? ` &middot; Org. no. ${site.orgNo}` : ''}</span>
        <span>Customized bioreactors, bioprocess equipment and control systems</span>
      </div>
    </div>
    <span class="footer-word" aria-hidden="true">Belach</span>
  </footer>`;

export const pageHero = ({ rel, title, lead = '', crumbs = [], image = null }) => `
  <section class="page-hero">
    ${image ? `<div class="page-hero__media">${img(rel, image, { loading: 'eager' })}</div>` : ''}
    <div class="container page-hero__inner">
      ${crumbs.length ? `<nav aria-label="Breadcrumb"><ol class="breadcrumbs">${crumbs.map((c) => (c.href ? `<li><a href="${rel}${c.href}">${c.label}</a></li>` : `<li><span aria-current="page">${c.label}</span></li>`)).join('')}</ol></nav>` : ''}
      <h1>${title}</h1>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
    </div>
  </section>`;

export const layout = ({ rel = '', id, title, description, body, heroless = false, canonical = '', head = '', ogType = 'website', ogImage = '' }) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  ${canonical ? `<link rel="canonical" href="${site.url}${canonical}">` : ''}
  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="${esc(site.name)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  ${canonical ? `<meta property="og:url" content="${site.url}${canonical}">` : ''}
  ${ogImage ? `<meta property="og:image" content="${site.url}${ogImage}">\n  <meta property="og:image:width" content="1200">\n  <meta property="og:image:height" content="630">\n  <meta name="twitter:card" content="summary_large_image">` : ''}
  <meta name="theme-color" content="#000000">
  <link rel="alternate" type="application/rss+xml" title="Belach Bioteknik blog" href="${rel}blog/feed.xml">${head ? `\n  ${head}` : ''}
  <link rel="icon" href="${rel}assets/brand/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="${rel}assets/fonts/oswald-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="${rel}assets/css/fonts.css">
  <link rel="stylesheet" href="${rel}assets/css/main.css">
</head>
<body>
  ${logoSymbol}
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header${heroless ? ' site-header--solid' : ''}">${headerBar(rel, id)}</header>
  ${mobileMenu(rel, id)}
  <main id="main">
${body}
  </main>
${footer(rel)}
  <script src="${rel}assets/js/main.js" defer></script>
</body>
</html>
`;
