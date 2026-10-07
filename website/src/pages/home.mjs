import { site, industries, featuredProjects, logoCustomers, references } from '../site.mjs';
import { published } from '../products.mjs';
import { btn, icons, img, esc } from '../components.mjs';
import { productCard, projectCard, stats, ctaBand, catLabel } from '../blocks.mjs';
import { resolve } from '../images.mjs';

export const meta = {
  id: 'home',
  file: 'index.html',
  title: 'Belach Bioteknik | Customized bioreactors, bioprocess equipment and control systems',
  description: 'Belach Bioteknik in Stockholm designs, manufactures and maintains fully automated bioreactors, decontamination systems and BioPhantom© control software, from 0.2 L to 1000 L.',
};

const years = new Date().getFullYear() - site.founded;

export default function home({ rel }) {
  const im = (key, opts) => img(rel, resolve(key), opts);
  const uniqueCustomers = new Set(references.map((r) => r[0])).size;

  const solutions = [
    { title: 'Bioreactors', text: 'Glass and stainless-steel bioreactors for microbial and cell cultures, from 0.2 L multi-parallel lab systems to 1000 L in-situ sterilizable production plants.', href: 'products.html#bioreactors', link: 'All bioreactors', media: 'photo300L' },
    { title: 'Decontamination systems', text: 'Effluent decontamination systems for BSL 1–3 facilities: batch heat treatment at 120–140 °C with F₀ monitoring, from 42 L sink units to 2000 L dual-vessel plants.', href: 'products.html#decontamination', link: 'All decontamination systems', media: 'externalEds', cutout: true },
    { title: 'Bioprocess control systems', text: 'BioPhantom© SCADA software, Bio-Pilot plant control and Bel-IoT cloud access. One platform from lab reactor to production, compliant with FDA 21 CFR Part 11.', href: 'products.html#control', link: 'All control systems', media: 'bioPhantom' },
    { title: 'Bioreactor rental', text: 'Lease a tested stainless-steel bioreactor, equipped with new instruments, for a specific period on your own site, without a large down payment.', href: 'rental.html', link: 'Rental bioreactors', media: 'rental100', cutout: true },
    { title: 'Service & maintenance', text: 'Yearly maintenance packages, calibration, spare parts, troubleshooting and re-automation of existing vessels with modern BioPhantom© control units.', href: 'services.html', link: 'Service & support', media: 'photoMVC' },
  ];

  const deck = [
    { icon: 'clipboard', title: 'Consultation & URS', text: 'Design of the bioprocess based on your URS, or creating the final URS together with you.' },
    { icon: 'layers', title: 'Basic engineering', text: 'Preliminary P&ID, equipment data sheets, 3D models and a 2D layout plan.' },
    { icon: 'wrench', title: 'Build & commissioning', text: 'Customized systems automated with BioPhantom©, with site acceptance testing (SAT) and commissioning support.' },
    { icon: 'headset', title: 'Maintenance & support', text: 'Yearly maintenance, calibration, spare parts and 24-hour priority response for contracted customers.' },
  ];

  const checks = [
    { title: 'Customized, not catalogue', text: 'We bring your own design to life from a sketch, or modify one of our standard products to suit your process.' },
    { title: 'Fully automated and reproducible', text: 'Every system runs on BioPhantom©, with advanced control loops, recipes, batch reports and audit trails.' },
    { title: 'Aseptic by design', text: 'Magnetic coupled stirrers keep the vessel hermetically sealed, eliminating contamination risks.' },
    { title: 'A long-term partner', text: 'Yearly maintenance, calibration and spare parts from the team that built your system.' },
  ];

  const cycle = [
    { icon: 'monitor', title: 'Advanced control loops', text: 'PID, GAP and custom cascade control algorithms for measured and calculated values.' },
    { icon: 'doc', title: 'Batch reports & audit trail', text: 'Detailed batch reports with operator notes, event logging and a searchable audit trail.' },
    { icon: 'shield', title: 'FDA 21 CFR Part 11', text: 'Secure, auditable data handling with multi-level password protection.' },
    { icon: 'globe', title: 'Remote access', text: 'Monitor and manage your processes via local network or internet, from anywhere.' },
  ];

  const sliderProducts = published.filter((p) => p.category !== 'rental');
  const half = Math.ceil(logoCustomers.length / 2);

  return `
    <section class="hero">
      <div class="hero__media">${im('heroMultifermentor', { loading: 'eager' })}</div>
      <div class="container hero__inner">
        <p class="hero__word" aria-hidden="true">Bioprocess</p>
        <div class="hero__bottom">
          <a class="badge-spin" href="${rel}contact.html#quote" aria-label="Request a quote">
            <svg class="badge-spin__ring" viewBox="0 0 160 160" aria-hidden="true">
              <defs><path id="badge-circle" d="M80 80m-62 0a62 62 0 1 1 124 0a62 62 0 1 1-124 0"/></defs>
              <text><textPath href="#badge-circle" textLength="386" lengthAdjust="spacing">Request a quote &#8226; Bioprocess engineering since ${site.founded} &#8226;</textPath></text>
            </svg>
            <span class="badge-spin__icon">${icons.reactor()}</span>
          </a>
          <div class="hero__copy">
            <h1 class="hero__title">Customized bioreactors, bioprocess equipment and control systems</h1>
            <p class="hero__text">With over ${Math.floor(years / 10) * 10} years of experience, Belach Bioteknik designs, manufactures and maintains reliable, fully automated bioprocess systems.</p>
            <div class="hero__actions">
              ${btn({ href: `${rel}products.html`, label: 'Explore products' })}
              ${btn({ href: `${rel}contact.html`, label: 'Contact us', variant: 'light' })}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="process">
      <div class="container">
        <div class="intro-head" data-reveal>
          <h2>From user requirements <span class="hl">to reliable operation</span></h2>
          <p class="text">Many of our customers buy not only equipment but reliable, workable solutions that meet their needs in the long run. We support you from the first specification to yearly maintenance.</p>
        </div>
        <ol class="deck" role="list">
          ${deck.map((d, i) => `
          <li class="deck__card">
            <span class="deck__step">0${i + 1}</span>
            <span class="deck__icon">${icons[d.icon]()}</span>
            <div>
              <h3>${d.title}</h3>
              <p>${d.text}</p>
            </div>
          </li>`).join('')}
        </ol>
      </div>
    </section>

    <section class="section section--flush-top">
      <div class="container split">
        <div class="split__media" data-reveal>${im('photoInSitu')}</div>
        <div class="split__body" data-reveal>
          <div class="split__top">
            <h2>Bioprocess excellence <span class="hl">backed by ${Math.floor(years / 10) * 10} years</span></h2>
            <p class="text">Since ${site.founded} we have designed, manufactured and installed computer-controlled bioreactor systems for cell and microbial cultivation, used in research and production. All our systems are fully automated to ensure reproducible, efficient operation.</p>
            ${btn({ href: `${rel}about.html`, label: 'About Belach' })}
          </div>
          <div class="highlights">
            <h3 class="h4">Highlights</h3>
            <ul class="ticks ticks--2">
              <li>ISO 9001 certified</li>
              <li>Customized to each client</li>
              <li>From 0.2 L to 1000 L</li>
              <li>FDA 21 CFR Part 11 compliant software</li>
              <li>Glass and stainless steel</li>
              <li>Maintenance and spare parts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--dark" data-acc-scope>
      <div class="container">
        <div class="solutions">
          <div class="solutions__list">
            <h2>Complete bioprocess solutions <span class="hl">under one roof</span></h2>
            <div class="acc" data-acc>
              ${solutions.map((s, i) => `
              <div class="acc__item${i === 0 ? ' is-open' : ''}">
                <h3 class="acc__heading"><button class="acc__btn" type="button" aria-expanded="${i === 0}" aria-controls="sol-${i}">${s.title}<span class="arrow-box">${icons.arrow()}</span></button></h3>
                <div class="acc__panel" id="sol-${i}">
                  <div>
                    <p>${s.text}</p>
                    <a class="text-link" href="${rel}${s.href}">${s.link} ${icons.right()}</a>
                  </div>
                </div>
              </div>`).join('')}
            </div>
          </div>
          <div class="solutions__media">
            ${solutions.map((s, i) => img(rel, resolve(s.media), { cls: `${i === 0 ? 'is-active' : ''}${s.cutout ? ' is-cutout' : ''}`.trim() }).replace('<img', `<img data-media="${i}"`)).join('')}
          </div>
        </div>
        ${stats([
          { count: Math.floor(years / 10) * 10, suffix: '+', label: 'Years of<br>experience' },
          { count: 1000, suffix: ' L', label: 'Max. working<br>volume' },
          { count: references.length, label: 'Installations on our<br>reference map' },
          { count: 30, label: 'Fermentations a week<br>with one operator' },
        ])}
      </div>
    </section>

    <section class="section section--stone" data-slider>
      <div class="container">
        <div class="slider-head">
          <h2 class="giant">Products</h2>
          <div class="slider-head__ctrl">
            <button class="circle-btn" type="button" data-prev aria-label="Previous products">${icons.left()}</button>
            <button class="circle-btn" type="button" data-next aria-label="Next products">${icons.right()}</button>
          </div>
        </div>
        <div class="slider" tabindex="0" aria-label="Products">
          ${sliderProducts.map((p) => productCard(rel, p)).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container checklist-wrap">
        <div data-reveal>
          <h2>Built around <span class="hl">your process</span>, not a catalogue</h2>
          <ul class="checklist">
            ${checks.map((c) => `
            <li>
              <span class="checklist__icon">${icons.check()}</span>
              <div><h3>${c.title}</h3><p>${c.text}</p></div>
            </li>`).join('')}
          </ul>
          ${btn({ href: `${rel}contact.html#quote`, label: 'Request a quote' })}
        </div>
        <div class="orbit" aria-hidden="true">
          <span class="orbit__ring"></span>
          <span class="orbit__ring"></span>
          <span class="orbit__core">${icons.reactor()}</span>
          ${['SIP / CIP', '21 CFR Part 11', 'GMP / GAMP', 'ISO 9001', 'BSL 1–3'].map((t, i, a) => {
            const ang = (i / a.length) * Math.PI * 2 - Math.PI / 2;
            const r = 40;
            return `<span class="orbit__dot"><span class="orbit__pos" style="left:${(50 + Math.cos(ang) * r).toFixed(1)}%;top:${(50 + Math.sin(ang) * r).toFixed(1)}%"><span class="orbit__label">${t}</span></span></span>`;
          }).join('')}
        </div>
      </div>
    </section>

    <section class="section section--flush-top">
      <div class="container">
        <div class="section-head section-head--center" data-reveal>
          <h2>Industries <span class="hl">we serve</span></h2>
          <p class="text">Solutions for small and mid-sized companies, academic and industrial research institutes, and laboratories.</p>
        </div>
        <ul class="industries" role="list">
          ${industries.map((ind) => `
          <li class="industries__item">
            <button class="industries__word" type="button" aria-expanded="false">${ind.word}</button>
            <div class="industries__card">
              ${img(rel, resolve(ind.image), { cls: 'is-cutout' })}
              <h3>${ind.title}</h3>
              <p>${ind.text}</p>
            </div>
          </li>`).join('')}
        </ul>
      </div>
    </section>

    <section class="section section--flush-top">
      <div class="container split split--reverse">
        <div class="split__media" data-reveal>${im('photo300L')}</div>
        <div class="split__body" data-reveal>
          <div class="split__top">
            <h2>Global reach <span class="hl">with local support</span></h2>
            <p class="text">We serve clients across Scandinavia, Europe and the USA, offering not only high-quality automated bioprocess equipment but also reliable annual maintenance, technical support and spare parts supply to ensure smooth, long-term operation.</p>
            ${btn({ href: `${rel}services.html`, label: 'Service & support' })}
          </div>
          <div class="highlights">
            <h3 class="h4">Service</h3>
            <ul class="ticks ticks--2">
              <li>Yearly maintenance packages</li>
              <li>Calibration of sensors</li>
              <li>Original spare parts</li>
              <li>24-hour priority response</li>
              <li>Remote troubleshooting</li>
              <li>Re-automation of old vessels</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--flush-top">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <h2>One control platform <span class="hl">from lab to production</span></h2>
          <div class="stack">
            <p class="text">BioPhantom© is our open, PC-based SCADA software. The same look-and-feel and control functions run on lab reactors, pilot plants and production bioreactors, so scale-up is smooth.</p>
            <a class="text-link" href="${rel}products/biophantom-control.html">About BioPhantom© ${icons.right()}</a>
          </div>
        </div>
        <div class="feature-media" data-cycle data-reveal>
          ${im('bioPhantom2')}
          <div class="feature-cards">
            ${cycle.map((c, i) => `
            <div class="feature-card${i === 0 ? ' is-active' : ''}" aria-hidden="${i !== 0}">
              ${icons[c.icon]()}
              <h3>${c.title}</h3>
              <p>${c.text}</p>
            </div>`).join('')}
          </div>
          <div class="feature-dots">${cycle.map((c, i) => `<button type="button" aria-label="Show: ${esc(c.title)}" aria-current="${i === 0}"></button>`).join('')}</div>
          <button class="feature-pause" type="button" aria-label="Pause slideshow">${icons.pause()}</button>
        </div>
      </div>
    </section>

    <section class="section section--sand">
      <div class="container">
        <div class="section-head section-head--center" data-reveal>
          <h2>Trusted by <span class="hl">research and industry</span></h2>
          <p class="text">A selection of systems delivered to universities, research institutes and companies across Scandinavia, Europe and the USA.</p>
        </div>
        <div class="ref-grid">
          <div class="ref-col">${featuredProjects.slice(0, 2).map((p) => projectCard(p)).join('')}</div>
          <div class="ref-col">
            <article class="ref-card ref-card--dark ref-card--feature">
              <span class="ref-card__kicker">Reference map</span>
              <span class="ref-card__count">${references.length}</span>
              <div>
                <h3>Installations on our reference map</h3>
                <p class="ref-card__text">${uniqueCustomers} customers in ${new Set(references.map((r) => r[2])).size} countries, from single benchtop reactors to 1000 L pilot plants and vaccine production.</p>
              </div>
              ${btn({ href: `${rel}references.html`, label: 'All references', variant: 'light' })}
            </article>
            ${featuredProjects.slice(2, 3).map((p) => projectCard(p)).join('')}
          </div>
          <div class="ref-col">${featuredProjects.slice(3, 5).map((p) => projectCard(p)).join('')}</div>
        </div>
      </div>
      <div class="marquees" aria-label="Customers who use Belach systems">
        <div class="marquee"><div class="marquee__track">${[...logoCustomers.slice(0, half), ...logoCustomers.slice(0, half)].map((n, i) => `<span class="marquee__item"${i >= half ? ' aria-hidden="true"' : ''}>${esc(n)}</span>`).join('')}</div></div>
        <div class="marquee marquee--reverse"><div class="marquee__track">${[...logoCustomers.slice(half), ...logoCustomers.slice(half)].map((n, i) => `<span class="marquee__item"${i >= logoCustomers.length - half ? ' aria-hidden="true"' : ''}>${esc(n)}</span>`).join('')}</div></div>
      </div>
    </section>

    ${ctaBand(rel)}
  `;
}
