import { site } from '../site.mjs';
import { icons, img, pageHero } from '../components.mjs';
import { contactForm } from '../blocks.mjs';
import { resolve } from '../images.mjs';

export const meta = {
  id: 'contact',
  file: 'contact.html',
  title: 'Contact Belach Bioteknik | Skogås, Stockholm',
  description: 'Contact Belach Bioteknik AB in Skogås, Stockholm: +46 8 470 92 50, info@belach.se. Request a quote for bioreactors, decontamination systems or control software.',
};

export default function contact({ rel }) {
  return `
    ${pageHero({ rel, title: 'Contact <span class="hl">us</span>', lead: 'We value your enquiry, whether it is about a Belach system you already own or about a future project.', crumbs: [{ label: 'Home', href: 'index.html' }, { label: 'Contact' }], image: resolve('photoMVC') })}

    <section class="section" id="quote">
      <div class="container">
        <div class="contact-wrap contact-wrap--raised">
          <div class="contact-wrap__media">${img(rel, resolve('photoInSitu'))}</div>
          <div class="contact-wrap__form">
            ${contactForm({ id: 'contact-form', heading: 'Let’s get in touch' })}
          </div>
        </div>
      </div>
    </section>

    <section class="section section--flush-top">
      <div class="container">
        <div class="contact-cards">
          <article class="contact-card" data-reveal>
            ${icons.pin()}
            <h2 class="h5">Visit</h2>
            <address>${site.legalName}<br>${site.address.join('<br>')}</address>
            <a href="${site.mapsUrl}" target="_blank" rel="noopener">Open in map</a>
          </article>
          <article class="contact-card" data-reveal>
            ${icons.phone()}
            <h2 class="h5">Call</h2>
            <p><a href="tel:${site.phoneHref}">${site.phone}</a></p>
            <p>Switchboard for sales, projects and service.</p>
          </article>
          <article class="contact-card" data-reveal>
            ${icons.mail()}
            <h2 class="h5">E-mail</h2>
            <p>New enquiries<br><a href="mailto:${site.email}">${site.email}</a></p>
            <p>Maintenance &amp; support<br><a href="mailto:${site.serviceEmail}">${site.serviceEmail}</a></p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--flush-top">
      <div class="container split split--reverse">
        <div class="split__media split__media--contain quality-media" data-reveal>${img(rel, resolve('iso9001'))}</div>
        <div class="split__body" data-reveal>
          <div class="split__top">
            <h2>We welcome <span class="hl">all inquiries</span></h2>
            <p class="text">Planning a new process, extending an existing plant or looking for spare parts? Our engineers answer questions about bioreactors, decontamination systems and BioPhantom© control software.</p>
            <p class="text">Customers with an existing system can send a <a class="text-link" href="${rel}services.html#service-request">service request ${icons.right()}</a></p>
          </div>
          <ul class="ticks">
            <li>ISO 9001 certified quality management</li>
            <li>We handle your details according to our <a href="${site.documents.dataProtection}" target="_blank" rel="noopener" style="text-decoration:underline">data protection notice</a></li>
          </ul>
        </div>
      </div>
    </section>
  `;
}
