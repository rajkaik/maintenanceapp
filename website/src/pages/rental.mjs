import { byCategory } from '../products.mjs';
import { btn, icons, img, pageHero } from '../components.mjs';
import { productCard, ctaBand } from '../blocks.mjs';
import { resolve } from '../images.mjs';

export const meta = {
  id: 'rental',
  file: 'rental.html',
  title: 'Bioreactor rental | Stainless-steel bioreactors for lease | Belach Bioteknik',
  description: 'Lease a tested stainless-steel bioreactor for cell cultivation from Belach Bioteknik and use it on your own site, without a large down payment.',
};

export default function rental({ rel }) {
  const units = byCategory('rental');
  return `
    ${pageHero({ rel, title: 'Bioreactor <span class="hl">rental</span>', lead: 'We offer different sizes of bioreactors for use under leasing agreements.', crumbs: [{ label: 'Home', href: 'index.html' }, { label: 'Products', href: 'products.html' }, { label: 'Rental' }], image: resolve('photo300L') })}

    <section class="section">
      <div class="container split">
        <div class="split__media split__media--contain" data-reveal>${img(rel, resolve('rental100'))}</div>
        <div class="split__body" data-reveal>
          <div class="split__top">
            <h2>Rent the bioreactor, <span class="hl">keep the budget</span></h2>
            <p class="text">A contractual agreement between Belach Bioteknik and your company, if you want to use the equipment for a specific period on your own site in exchange for set payments.</p>
            ${btn({ href: `${rel}contact.html#quote`, label: 'Ask about availability' })}
          </div>
          <div class="highlights">
            <h3 class="h4">Why lease</h3>
            <ul class="ticks">
              <li>Lease equipment without making a large down payment</li>
              <li>Use your budget for additional purchases or operating expenses</li>
              <li>Reduce upfront costs and keep the cash flow your experiments or production need</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--stone">
      <div class="container">
        <div class="cat-block__head" data-reveal>
          <div class="stack">
            <span class="eyebrow">Available now</span>
            <h2>Rental <span class="hl">bioreactors</span></h2>
          </div>
          <p class="text">The bioreactors are not newly manufactured. They are equipped with new instruments and tested before being handed over for operation. An equipment description and operator manual are available.</p>
        </div>
        <div class="card-grid card-grid--2">
          ${units.map((p) => productCard(rel, p)).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <ol class="steps steps--3" role="list">
          <li class="step" data-reveal>${icons.calendar()}<h3>Tell us your period</h3><p>Send the volume, the process and the period you need the bioreactor for.</p></li>
          <li class="step" data-reveal>${icons.wrench()}<h3>New instruments, tested</h3><p>We equip the bioreactor with new instruments and test it before handover.</p></li>
          <li class="step" data-reveal>${icons.reactor()}<h3>Use it on your site</h3><p>Run your process for the agreed period, with the equipment description and operator manual.</p></li>
        </ol>
      </div>
    </section>

    ${ctaBand(rel, { title: 'Need a bioreactor <span class="hl-light">for a limited period?</span>', text: 'Send us a message with the volume and the period you need, and we will tell you what is available.' })}
  `;
}
