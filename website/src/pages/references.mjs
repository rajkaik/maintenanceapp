import { references, logoCustomers } from '../site.mjs';
import { btn, icons, img, pageHero, esc } from '../components.mjs';
import { stats, ctaBand } from '../blocks.mjs';
import { resolve } from '../images.mjs';

export const meta = {
  id: 'references',
  file: 'references.html',
  title: 'References | Belach bioreactor installations in 13 countries | Belach Bioteknik',
  description: 'Belach bioreactors, pilot plants and decontamination systems run at universities, research institutes and companies in Scandinavia, Europe and the USA.',
};

export default function referencesPage({ rel }) {
  // group pins: country -> customer -> systems
  const byCountry = new Map();
  for (const [customer, system, country] of references) {
    if (!byCountry.has(country)) byCountry.set(country, new Map());
    const cust = byCountry.get(country);
    if (!cust.has(customer)) cust.set(customer, []);
    if (!cust.get(customer).includes(system)) cust.get(customer).push(system);
  }
  const countries = [...byCountry.entries()].sort((a, b) => b[1].size - a[1].size || a[0].localeCompare(b[0]));
  const customers = new Set(references.map((r) => r[0]));
  const norm = (n) => n.toLowerCase().replace(/ (gmbh|kft|inc\.|uppsala|processum|royal institute of technology)$/, '').replace(/^kth.*/, 'kth');
  const pinNames = new Set([...customers].map(norm));
  const alsoTrusted = logoCustomers.filter((n) => !pinNames.has(norm(n)));

  // markers for the interactive map: one per location, popups list every system
  const markers = new Map();
  for (const [customer, system, , lat, lng] of references) {
    const key = `${customer}|${lat}|${lng}`;
    if (!markers.has(key)) markers.set(key, { customer, lat, lng, systems: [] });
    const m = markers.get(key);
    if (!m.systems.includes(system)) m.systems.push(system);
  }

  return `
    ${pageHero({ rel, title: 'Trusted by <span class="hl">research and industry</span>', lead: 'Belach systems run at universities, research institutes and companies across Scandinavia, Europe and the USA.', crumbs: [{ label: 'Home', href: 'index.html' }, { label: 'References' }], image: resolve('heroMultifermentor') })}

    <section class="section">
      <div class="container">
        ${stats([
          { count: references.length, label: 'Installations on our<br>reference map' },
          { count: customers.size, label: 'Customers on<br>the map' },
          { count: byCountry.size, label: 'Countries in Europe<br>and the USA' },
          { count: customers.size + alsoTrusted.length, label: 'Customers and partners<br>in total' },
        ], 'stats--flush')}

        <div class="ref-map" data-ref-map>
          <div class="ref-map__static">
            ${img(rel, resolve('referenceMap'))}
          </div>
          <div class="ref-map__live" id="ref-map-live" hidden></div>
          <div class="ref-map__bar">
            <p>The interactive map loads tiles from OpenStreetMap, which receives your IP address.</p>
            <button class="btn btn--dark" type="button" data-ref-map-load><span>Show interactive map</span><span class="btn__chip">${icons.pin()}</span></button>
          </div>
          <script type="application/json" id="ref-map-data">${JSON.stringify([...markers.values()]).replace(/</g, '\\u003c')}</script>
        </div>
      </div>
    </section>

    <section class="section section--flush-top">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <h2>Installations <span class="hl">by country</span></h2>
          <p class="text">The systems below are taken from our reference map: from single benchtop reactors and biogas reactors to 1000 L pilot plants, decontamination systems and a human vaccine production plant.</p>
        </div>
        <div class="country-list">
          ${countries.map(([country, cust]) => `
          <section class="country" data-reveal>
            <header class="country__head">
              <h3>${esc(country)}</h3>
              <span class="country__count">${cust.size} ${cust.size === 1 ? 'customer' : 'customers'}</span>
            </header>
            <ul class="country__rows" role="list">
              ${[...cust.entries()].sort((a, b) => a[0].localeCompare(b[0], 'sv')).map(([name, systems]) => `
              <li>
                <span class="country__name">${esc(name)}</span>
                <span class="country__systems">${systems.map(esc).join('<br>')}</span>
              </li>`).join('')}
            </ul>
          </section>`).join('')}
        </div>
      </div>
    </section>

    <section class="section section--sand">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <h2>Also <span class="hl">trusted by</span></h2>
          <p class="text">Companies and institutes from our customer logo wall that are not yet on the map.</p>
        </div>
        <ul class="name-cloud" role="list">
          ${alsoTrusted.map((n) => `<li>${esc(n)}</li>`).join('')}
        </ul>
      </div>
    </section>

    ${ctaBand(rel, { title: 'Want to see a system <span class="hl-light">like yours in operation?</span>', text: 'Tell us about your process. We can tell you about comparable installations and how they were configured.' })}
  `;
}
