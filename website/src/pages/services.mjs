import { site } from '../site.mjs';
import { btn, icons, img, pageHero, esc } from '../components.mjs';
import { contactForm } from '../blocks.mjs';
import { resolve } from '../images.mjs';

export const meta = {
  id: 'services',
  file: 'services.html',
  title: 'Service & support | Engineering, maintenance and spare parts | Belach Bioteknik',
  description: 'Customizable equipment, basic engineering, yearly maintenance, calibration, spare parts and 24-hour priority support for Belach bioreactors and bioprocess systems.',
};

export default function services({ rel }) {
  const im = (key, opts) => img(rel, resolve(key), opts);
  const steps = [
    { title: 'Customizable equipment', text: 'In addition to our standard product line, we bring your own design to life from a sketch, or modify our products to suit your needs.' },
    { title: 'Basic engineering', text: 'We design the bioprocess, the equipment and its accessories with you, and make budget planning predictable.' },
    { title: 'Regular maintenance', text: 'Yearly maintenance packages keep your systems available, calibrated and compliant with operational standards.' },
    { title: 'Continuous support', text: 'Spare parts, troubleshooting and priority response, long after the system has been delivered.' },
  ];
  const faq = [
    { q: 'Can you modify a standard product to suit our process?', a: 'Yes. In addition to our standard product line, we can bring your unique design to life from a sketch, or modify one of our products to suit your needs. We can also change the equipment or the control system later on.' },
    { q: 'What does the yearly maintenance package include?', a: 'A comprehensive inspection of all hardware and control components, proactive replacement of wear parts, calibration of sensors and instruments, and verification of all critical software functions, sequences and alarms.' },
    { q: 'How fast do you respond if a system stops?', a: 'For contracted customers, emergency support and on-site repair can be guaranteed within 24 hours. Troubleshooting can often be handled by remote access.' },
    { q: 'Can you upgrade the control system of an older bioreactor?', a: 'Yes. We re-automate existing vessels and upgrade legacy hardware with modern BioPhantom© control units to enhance performance and compliance.' },
    { q: 'Do you supply spare parts?', a: 'Yes. We serve clients from stock or order the parts and accessories. If further technical specification is needed we contact you, and we inform you about prices and the expected delivery date.' },
    { q: 'Can we rent a bioreactor instead of buying one?', a: 'Yes. We lease stainless-steel bioreactors for cell cultivation. They are not newly manufactured, but they are equipped with new instruments and tested before handover.' },
  ];

  return `
    ${pageHero({ rel, title: 'We cover your needs <span class="hl">from design to maintenance</span>', lead: 'Belach provides professional support from the beginning of your project, and long after delivery.', crumbs: [{ label: 'Home', href: 'index.html' }, { label: 'Service & support' }], image: resolve('photo300L') })}

    <section class="section">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <h2>One partner <span class="hl">for the whole lifecycle</span></h2>
          <p class="text">Many of our customers intend to buy not only equipment or systems but reliable, workable solutions that meet their needs in the long run. Our services follow your system from the first sketch to daily operation.</p>
        </div>
        <ol class="steps" role="list">
          ${steps.map((s, i) => `
          <li class="step" data-reveal>
            <span class="step__n">0${i + 1}</span>
            <h3>${s.title}</h3>
            <p>${s.text}</p>
          </li>`).join('')}
        </ol>
      </div>
    </section>

    <section class="section section--flush-top" id="engineering">
      <div class="container split">
        <div class="split__media" data-reveal>${im('photoInSitu')}</div>
        <div class="split__body" data-reveal>
          <div class="split__top">
            <span class="eyebrow">Customizable equipment</span>
            <h2>Your design, <span class="hl">our engineering</span></h2>
            <p class="text">Belach gives you the possibility to realize your own ideas. In addition to our standard product line, we can bring your unique design to life from a sketch, or just modify our product to suit your needs. You get equipment tailored to the process you really need, with the possibility to develop it further in the long run.</p>
            <p class="text">Belach can be a long-term partner for your needs, whether that means modifying the equipment or changing the control system.</p>
          </div>
          <div class="highlights">
            <h3 class="h4">Materials</h3>
            <p class="text">Stainless-steel and glass reactors, and for extreme conditions systems built from titanium or plastics. Manually driven or fully automated, fulfilling cGMP requirements with our process control software.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--flush-top">
      <div class="container split split--reverse">
        <div class="split__media" data-reveal>${im('bioPhantom3')}</div>
        <div class="split__body" data-reveal>
          <div class="split__top">
            <span class="eyebrow">Basic engineering</span>
            <h2>A basic technical concept <span class="hl">before you invest</span></h2>
            <p class="text">To support project planning, our team can design the bioprocess, the equipment and the appropriate accessories with you, and ease decision-making by providing predictable, well-established budget planning.</p>
          </div>
          <ul class="ticks">
            <li>Design of the bioprocess based on your URS, or creating the final URS in consultation with you as customer or end user</li>
            <li>Description of the bioprocess and the SIP/CIP procedure</li>
            <li>Preliminary P&amp;ID drawing</li>
            <li>Description of the equipment and data sheets</li>
            <li>3D models and 2D layout plan</li>
            <li>Site acceptance testing (SAT) and full commissioning support</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section section--dark" id="maintenance">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <h2>Maintenance <span class="hl">and support</span></h2>
          <div class="stack">
            <p class="text">Our yearly maintenance package is designed to maximize system availability, prevent unexpected failures and guarantee compliance with operational standards. On top of preventive maintenance, we provide flexible on-demand support.</p>
            <a class="text-link" href="${site.documents.servicePrices}" target="_blank" rel="noopener" style="color:var(--white)">Maintenance price list (PDF) ${icons.right()}</a>
          </div>
        </div>
        <div class="feature-grid feature-grid--4">
          <article class="f-card" data-reveal>
            ${icons.gauge()}
            <h3>Regular maintenance</h3>
            <ul>
              <li>Comprehensive inspection of all hardware and control components</li>
              <li>Proactive replacement of consumable and ageing wear parts</li>
              <li>Calibration of sensors and instruments</li>
              <li>Verification of critical software functions, sequences and alarms</li>
            </ul>
          </article>
          <article class="f-card" data-reveal>
            ${icons.clock()}
            <h3>Priority response</h3>
            <p>For contracted customers, emergency support and on-site repair can be guaranteed within 24 hours.</p>
            <p>Direct access to our qualified service engineers for quick problem resolution.</p>
          </article>
          <article class="f-card" data-reveal>
            ${icons.monitor()}
            <h3>Troubleshooting</h3>
            <p>Corrective maintenance and fault repair to minimize downtime. Troubleshooting is managed by remote access or, when it is a must, in person in Europe.</p>
          </article>
          <article class="f-card" data-reveal>
            ${icons.wrench()}
            <h3>Spare parts</h3>
            <p>Fast and reliable availability of original components. We serve you from stock or order the parts and accessories, and tell you the price and expected delivery date.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="split__media" data-reveal>${im('photoMVC')}</div>
        <div class="split__body" data-reveal>
          <div class="split__top">
            <span class="eyebrow">System modernization</span>
            <h2>Re-automation <span class="hl">of existing vessels</span></h2>
            <p class="text">Beyond new installations, we specialize in the re-automation of existing vessels. We upgrade legacy hardware with modern BioPhantom© control units to enhance performance and compliance.</p>
            ${btn({ href: `${rel}products/biophantom-control.html`, label: 'BioPhantom© Control' })}
          </div>
          <div class="highlights">
            <h3 class="h4">Also available</h3>
            <p class="text">Bioreactors for rent: a contractual agreement to use our equipment on your own site for a specific period in exchange for set payments. <a class="text-link" href="${rel}rental.html">Rental ${icons.right()}</a></p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--sand">
      <div class="container split split--faq">
        <div class="stack stack--md" data-reveal>
          <h2>Questions <span class="hl">we often hear</span></h2>
          <p class="text">Can’t find your answer? Call us on <a href="tel:${site.phoneHref}">${site.phone}</a> or write to <a href="mailto:${site.serviceEmail}">${site.serviceEmail}</a>.</p>
        </div>
        <div class="faq" data-reveal>
          ${faq.map((f, i) => `
          <div class="faq__item${i === 0 ? ' is-open' : ''}">
            <h3 class="faq__h"><button class="faq__q" type="button" aria-expanded="${i === 0}" aria-controls="faq-${i}">${esc(f.q)}<span class="faq__icon" aria-hidden="true"></span></button></h3>
            <div class="faq__a" id="faq-${i}"><div><p>${esc(f.a)}</p></div></div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <section class="section" id="service-request">
      <div class="container">
        <div class="contact-wrap">
          <div class="contact-wrap__media contact-wrap__media--info">
            <div class="info-panel">
              <span class="eyebrow">Maintenance &amp; support</span>
              <h2 class="h3">Service request</h2>
              <p>For systems you already own. Choose the response time you need; the request is handled according to our service pricing.</p>
              <ul class="info-list">
                <li>${icons.mail()}<a href="mailto:${site.serviceEmail}">${site.serviceEmail}</a></li>
                <li>${icons.phone()}<a href="tel:${site.phoneHref}">${site.phone}</a></li>
                <li>${icons.doc()}<a href="${site.documents.servicePrices}" target="_blank" rel="noopener">Maintenance price list</a></li>
                <li>${icons.doc()}<a href="${site.documents.terms}" target="_blank" rel="noopener">General terms and conditions</a></li>
              </ul>
            </div>
          </div>
          <div class="contact-wrap__form">
            ${contactForm({ id: 'service-form', heading: 'Describe the issue', productOptions: false, service: true })}
          </div>
        </div>
      </div>
    </section>
  `;
}
