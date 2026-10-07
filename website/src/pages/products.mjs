import { productCategories, byCategory } from '../products.mjs';
import { btn, icons, img, pageHero, esc } from '../components.mjs';
import { productCard, ctaBand } from '../blocks.mjs';
import { resolve } from '../images.mjs';

export const meta = {
  id: 'products',
  file: 'products.html',
  title: 'Products | Bioreactors, decontamination and control systems | Belach Bioteknik',
  description: 'Bioreactors from 0.2 to 1000 L, effluent decontamination systems for BSL 1–3, BioPhantom© control software and rental bioreactors from Belach Bioteknik.',
};

export default function productsPage({ rel }) {
  const cats = productCategories.filter((c) => c.id !== 'rental');
  return `
    ${pageHero({ rel, title: 'Bioprocess <span class="hl">equipment</span>', lead: 'Bioreactors, decontamination systems and control software, customized to the requirements of each client.', crumbs: [{ label: 'Home', href: 'index.html' }, { label: 'Products' }], image: resolve('heroMultifermentor') })}

    <section class="section">
      <div class="container">
        <nav class="cat-nav" aria-label="Product categories">
          ${productCategories.map((c) => `<a href="${c.id === 'rental' ? `${rel}rental.html` : `#${c.id}`}">${c.title} <span aria-hidden="true">· ${c.kicker}</span></a>`).join('')}
        </nav>

        ${cats.map((c) => `
        <div class="cat-block" id="${c.id}">
          <div class="cat-block__head" data-reveal>
            <div class="stack">
              <span class="eyebrow">${esc(c.kicker)}</span>
              <h2>${c.title}</h2>
            </div>
            <div class="stack">
              <p class="text">${esc(c.intro)}</p>
              ${c.note ? `<p class="text cat-note">${esc(c.note)}</p>` : ''}
            </div>
          </div>
          <div class="card-grid">
            ${byCategory(c.id).map((p) => productCard(rel, p)).join('')}
          </div>
        </div>`).join('')}
      </div>
    </section>

    <section class="section section--dark">
      <div class="container split">
        <div class="split__media" data-reveal>${img(rel, resolve('photoMVC'))}</div>
        <div class="split__body" data-reveal>
          <div class="split__top">
            <span class="eyebrow">Engineering & modernization</span>
            <h2>New control <span class="hl">for existing vessels</span></h2>
            <p class="text">Beyond new installations, we specialize in the re-automation of existing vessels. We upgrade legacy hardware with modern BioPhantom© control units to enhance performance and compliance.</p>
          </div>
          <ul class="ticks">
            <li>P&amp;ID development and 3D modeling</li>
            <li>User requirement specification (URS) analysis</li>
            <li>Site acceptance testing (SAT) and full commissioning support</li>
          </ul>
          <div class="cluster">${btn({ href: `${rel}services.html`, label: 'Engineering services', variant: 'light' })}</div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cat-block__head" data-reveal>
          <div class="stack">
            <span class="eyebrow">10 – 100 L</span>
            <h2>Bioreactor <span class="hl">rental</span></h2>
          </div>
          <div class="stack">
            <p class="text">Use a Belach bioreactor on your own site for a specific period, in exchange for set payments and without a large down payment.</p>
            ${btn({ href: `${rel}rental.html`, label: 'Rental bioreactors' })}
          </div>
        </div>
        <div class="card-grid card-grid--2">
          ${byCategory('rental').map((p) => productCard(rel, p)).join('')}
        </div>
      </div>
    </section>

    ${ctaBand(rel, { title: 'Not sure which system <span class="hl-light">fits your process?</span>', text: 'Send us your volumes, organism and process requirements. We design the bioprocess and equipment with you, from the URS to the layout plan.' })}
  `;
}
