import { site, industries, references } from '../site.mjs';
import { byCategory } from '../products.mjs';
import { btn, icons, img, pageHero } from '../components.mjs';
import { stats, ctaBand, productUrl } from '../blocks.mjs';
import { resolve } from '../images.mjs';

export const meta = {
  id: 'about',
  file: 'about.html',
  title: 'About Belach Bioteknik | Bioprocess engineering since 1985',
  description: 'Belach Bioteknik AB was founded in 1985 in Stockholm. We design, manufacture and maintain customized, fully automated bioprocess equipment for research and production.',
};

export default function about({ rel }) {
  const im = (key, opts) => img(rel, resolve(key), opts);
  const years = new Date().getFullYear() - site.founded;
  const decades = Math.floor(years / 10) * 10;
  const uniqueCustomers = new Set(references.map((r) => r[0])).size;

  const scales = [
    { title: 'Laboratory', range: '0.2 – 3 L', text: 'Benchtop glass and stainless-steel bioreactors and six-reactor multi-parallel systems for early-stage R&D and process optimization.', items: ['benchtop-bioreactor-systems', 'lab-scale-multi-parallel-bioreactors', 'airlift-bioreactors'], image: 'benchtop' },
    { title: 'Pilot', range: '5 – 50 L', text: 'Multi-parallel pilot reactors, biogas and enzymatic hydrolysis systems for scale-up, substrate studies and parallel experimentation.', items: ['pilot-scale-multi-parallel-bioreactors', 'twin-biogas-reactor-system', 'enzymatic-hydrolysis-bioreactors'], image: 'multiPilot' },
    { title: 'Production', range: 'up to 1000 L', text: 'In-situ sterilizable stainless-steel plants with integrated thermo-control, load cells and full SIP for stable, large-scale production.', items: ['sterilizable-stainless-steel-bioreactors', 'pilot-and-production-bioreactors'], image: 'pilot' },
  ];
  const named = (slug) => byCategory('bioreactors').find((p) => p.slug === slug);

  return `
    ${pageHero({ rel, title: 'The bioneers <span class="hl">of fermentation</span>', lead: `Designing, manufacturing and maintaining bioprocess systems in Stockholm since ${site.founded}.`, crumbs: [{ label: 'Home', href: 'index.html' }, { label: 'About' }], image: resolve('heroMultifermentor') })}

    <section class="section">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <h2>${decades} years of bioprocess engineering <span class="hl">for research and production</span></h2>
          <div class="stack">
            <p class="text">With over ${decades} years of experience, Belach Bioteknik is a trusted partner in designing, manufacturing and maintaining reliable, fully automated biotechnological equipment and bioprocess systems.</p>
            <p class="text">We specialize in user-friendly glass and stainless-steel bioreactors for microbial and cell cultures, as well as supporting units such as media tanks, harvest tanks, acid/base tanks, decontamination equipment and advanced bioprocess control systems.</p>
          </div>
        </div>
        <div class="tiles">
          <article class="tile" data-reveal>
            <div>
              <span class="eyebrow">Our mission</span>
              <h3 style="margin-top:.75rem">Reliable, robust and flexible systems</h3>
              <p>Our commitment is to combine our ${decades} years of biotech experience, engineering and innovation skills and serve our partners with long-term reliable, robust and flexible bioprocess systems. Applying the highest quality and state-of-the-art components, we build and maintain user-friendly, intuitive equipment.</p>
            </div>
            <div class="tile__media">${im('photo300L')}</div>
          </article>
          <article class="tile" data-reveal>
            <div>
              <span class="eyebrow">Our vision</span>
              <h3 style="margin-top:.75rem">Knowledge, experience and engineering</h3>
              <p>The key to success in biotechnology is theoretical knowledge, practical experience and a reliable technical background. We combine engineering skills in bioprocess technology, automation, IT, mechanical and electrical design to develop state-of-the-art bioprocess equipment.</p>
            </div>
            <div class="tile__media">${im('bioPhantom')}</div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--flush-top">
      <div class="container split">
        <div class="split__media" data-reveal>${im('photoInSitu')}</div>
        <div class="split__body" data-reveal>
          <div class="split__top">
            <h2>What makes us <span class="hl">unique</span></h2>
            <p class="text">Founding members established Belach Bioteknik AB in ${site.founded} to supply the market with high-quality, innovative biotech equipment. Since then we have designed, manufactured and installed computer-controlled bioreactor systems for cell and microbial cultivation, used in research and production.</p>
            <p class="text">We offer customized solutions and support our customers from the planning phase through system implementation to operation and maintenance. With our engineering skills we provide a solution that fulfils your needs one hundred percent, rather than selling a series product that may force constraints on your process design.</p>
          </div>
          <div class="highlights">
            <h3 class="h4">How we work</h3>
            <ul class="ticks ticks--2">
              <li>Process design from your URS</li>
              <li>P&amp;ID, 3D models and layouts</li>
              <li>In-house automation software</li>
              <li>SAT and commissioning</li>
              <li>Yearly maintenance</li>
              <li>Spare parts from stock</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container">
        <div class="section-head section-head--center" data-reveal>
          <h2>Tailored solutions <span class="hl">for every scale</span></h2>
          <p class="text">From lab-scale experimental setups to pilot and production bioreactor systems, our products are customized to meet the unique requirements of each client, ensuring optimal performance and process flexibility.</p>
        </div>
        <div class="feature-grid">
          ${scales.map((s) => `
          <article class="f-card scale-card" data-reveal>
            <div class="scale-card__media">${img(rel, resolve(s.image), { cls: 'is-cutout' })}</div>
            <span class="scale-card__range">${s.range}</span>
            <h3>${s.title}</h3>
            <p>${s.text}</p>
            <ul>${s.items.map((slug) => named(slug)).filter(Boolean).map((p) => `<li><a href="${rel}${productUrl(p)}">${p.name}</a></li>`).join('')}</ul>
          </article>`).join('')}
        </div>
        ${stats([
          { num: String(site.founded), label: 'Founded in<br>Stockholm' },
          { count: decades, suffix: '+', label: 'Years of<br>experience' },
          { count: references.length, label: 'Installations on our<br>reference map' },
          { num: 'ISO', suffix: ' 9001', label: 'Certified quality<br>management' },
        ])}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <h2>Serving clients <span class="hl">across industries</span></h2>
          <p class="text">Belach Bioteknik provides solutions for small and mid-sized companies, academic and industrial research institutes, and laboratories in pharmaceuticals and vaccines, food, agriculture and animal health, and biotech and microbial production.</p>
        </div>
        <div class="card-grid">
          ${industries.map((ind) => `
          <article class="contact-card industry-card" data-reveal>
            ${icons[{ Pharmaceuticals: 'flask', Vaccines: 'shield', Food: 'drop', Agriculture: 'globe', Biotech: 'reactor', Research: 'layers' }[ind.word] || 'reactor']()}
            <h3>${ind.title}</h3>
            <p>${ind.text}</p>
          </article>`).join('')}
        </div>
      </div>
    </section>

    <section class="section section--flush-top" id="quality">
      <div class="container split split--reverse">
        <div class="split__media split__media--contain quality-media" data-reveal>${im('iso9001')}</div>
        <div class="split__body" data-reveal>
          <div class="split__top">
            <h2>Certified <span class="hl">quality</span></h2>
            <p class="text">Belach Bioteknik AB is certified to ISO 9001. Our control software is designed to support GMP/GAMP environments and FDA 21 CFR Part 11 requirements, including secure data logging, audit trails and automated batch reporting.</p>
            <div class="cluster">
              ${btn({ href: site.documents.iso9001, label: 'ISO 9001 certificate (PDF)', attrs: ' target="_blank" rel="noopener"' })}
            </div>
          </div>
          <div class="highlights">
            <h3 class="h4">Global reach with local support</h3>
            <p class="text">We serve clients across Scandinavia, Europe and the USA, with annual maintenance, technical support and spare parts supply for smooth, long-term operation.</p>
          </div>
        </div>
      </div>
    </section>

    ${ctaBand(rel)}
  `;
}
