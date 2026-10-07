// Reusable page sections built from the shared components.
import { site } from './site.mjs';
import { productCategories, published } from './products.mjs';
import { btn, icons, img, esc } from './components.mjs';
import { resolve } from './images.mjs';

export const productUrl = (p) => `products/${p.slug}.html`;
export const catLabel = (id) => productCategories.find((c) => c.id === id)?.title || id;

export const productCard = (rel, p, { headingLevel = 3, eager = false } = {}) => `
  <a class="p-card" href="${rel}${productUrl(p)}">
    <span class="p-card__media">
      ${img(rel, resolve(p.image), { loading: eager ? 'eager' : 'lazy' })}
      <span class="p-card__tag">${esc(catLabel(p.category))}</span>
    </span>
    <span class="p-card__body">
      <span class="p-card__spec">${esc(p.figure)}</span>
      <h${headingLevel}>${esc(p.name)}</h${headingLevel}>
      <span class="p-card__text">${esc(p.card)}</span>
      <span class="btn"><span>View product</span><span class="btn__chip">${icons.arrow()}</span></span>
    </span>
  </a>`;

export const projectCard = (pr, { dark = false } = {}) => `
  <article class="ref-card${dark ? ' ref-card--dark' : ''}">
    <span class="ref-card__kicker">${esc(pr.type)}</span>
    ${pr.figure ? `<span class="ref-card__count">${esc(pr.figure).replace(/ L$/, '<em> L</em>')}</span>` : `<span class="ref-card__icon">${icons[pr.icon || 'reactor']()}</span>`}
    <div>
      <h3>${esc(pr.customer)}</h3>
      <p class="ref-card__text">${esc(pr.system)}</p>
    </div>
  </article>`;

export const stats = (items, cls = '') => `
  <div class="stats ${cls}">
    ${items.map((s) => `
    <div class="stat" data-reveal>
      <span class="stat__num">${s.count != null ? `<span data-count="${s.count}">${s.count}</span>` : esc(s.num)}${s.suffix ? `<em>${s.suffix}</em>` : ''}</span>
      <span class="stat__label">${s.label}</span>
    </div>`).join('')}
  </div>`;

export const ctaBand = (rel, { title = 'Planning a new bioprocess <span class="hl-light">or upgrading an old one?</span>', text = 'Tell us about your process and your requirements. Our engineers will get back to you with a solution, from a single benchtop reactor to a complete pilot plant.' } = {}) => `
  <section class="section section--tight">
    <div class="container">
      <div class="cta-band" data-reveal>
        <div>
          <h2>${title}</h2>
          <p>${text}</p>
        </div>
        <div class="cluster">
          ${btn({ href: `${rel}contact.html#quote`, label: 'Request a quote', variant: 'light' })}
          <a class="btn btn--dark" href="tel:${site.phoneHref}"><span>${site.phone}</span><span class="btn__chip">${icons.phone()}</span></a>
        </div>
      </div>
    </div>
  </section>`;

// Contact / quote form. Field names are unique (the current site's form posts the
// name and the company in the same field, so one of them is lost).
export const contactForm = ({ id = 'contact-form', heading = 'Let’s get in touch', productOptions = true, service = false, product = '' } = {}) => {
  const f = (name) => `${id}-${name}`;
  const options = published.filter((p) => p.category !== 'rental');
  return `
  <form class="form" id="${id}" data-contact data-mailto="${service ? site.serviceEmail : site.email}" novalidate>
    ${heading ? `<h2 class="field--full h3">${heading}</h2>` : ''}
    ${product ? `<input type="hidden" name="product" value="${esc(product)}">` : ''}
    <div class="field">
      <label for="${f('name')}">Your name <span>*</span></label>
      <input id="${f('name')}" name="name" type="text" autocomplete="name" placeholder="First and last name" required aria-describedby="${f('name')}-error">
      <span class="field__error" id="${f('name')}-error" aria-live="polite"></span>
    </div>
    <div class="field">
      <label for="${f('company')}">Company or institute <span>*</span></label>
      <input id="${f('company')}" name="company" type="text" autocomplete="organization" placeholder="Where do you work?" required aria-describedby="${f('company')}-error">
      <span class="field__error" id="${f('company')}-error" aria-live="polite"></span>
    </div>
    <div class="field">
      <label for="${f('email')}">Company e-mail <span>*</span></label>
      <input id="${f('email')}" name="email" type="email" autocomplete="email" placeholder="name@company.com" required aria-describedby="${f('email')}-error">
      <span class="field__error" id="${f('email')}-error" aria-live="polite"></span>
    </div>
    <div class="field">
      <label for="${f('phone')}">Phone</label>
      <input id="${f('phone')}" name="phone" type="tel" autocomplete="tel" placeholder="+46 …">
    </div>
    ${service ? `
    <div class="field field--full">
      <label for="${f('response')}">Response time <span>*</span></label>
      <select id="${f('response')}" name="response" required aria-describedby="${f('response')}-error">
        <option value="72 hrs normal">72 hours, normal</option>
        <option value="24 hrs troubleshooting">24 hours, troubleshooting</option>
      </select>
      <span class="field__error" id="${f('response')}-error" aria-live="polite"></span>
    </div>` : ''}
    ${productOptions ? `
    <div class="field field--full">
      <label for="${f('product')}">Product of interest</label>
      <select id="${f('product')}" name="product">
        <option value="">Not sure yet / general enquiry</option>
        ${productCategories.map((c) => {
          const items = c.id === 'rental' ? published.filter((p) => p.category === 'rental') : options.filter((p) => p.category === c.id);
          return `<optgroup label="${esc(c.title)}">${items.map((p) => `<option>${esc(p.name)}${c.id === 'rental' ? ' (rental)' : ''}</option>`).join('')}</optgroup>`;
        }).join('')}
      </select>
    </div>` : ''}
    <div class="field field--full">
      <label for="${f('subject')}">Subject</label>
      <input id="${f('subject')}" name="subject" type="text" placeholder="${service ? 'System, serial number or issue' : 'What is it about?'}">
    </div>
    <div class="field field--full">
      <label for="${f('message')}">Message <span>*</span></label>
      <textarea id="${f('message')}" name="message" placeholder="${service ? 'Describe the issue or the service you need' : 'Tell us about your process, volumes and requirements'}" required aria-describedby="${f('message')}-error"></textarea>
      <span class="field__error" id="${f('message')}-error" aria-live="polite"></span>
    </div>
    <div class="field field--full" hidden>
      <label for="${f('website')}">Leave this empty</label>
      <input id="${f('website')}" name="website" type="text" tabindex="-1" autocomplete="off">
    </div>
    <div class="field field--full">
      <label class="check" for="${f('consent')}" style="font-family:inherit;text-transform:none;font-weight:400;font-size:.88rem">
        <input id="${f('consent')}" name="consent" type="checkbox" required aria-describedby="${f('consent')}-error">
        <span>${service
          ? `By sending this message I confirm that I have read and accept the <a href="${site.documents.terms}" target="_blank" rel="noopener">General Terms and Conditions</a> and <a href="${site.documents.servicePrices}" target="_blank" rel="noopener">Service Pricing</a> of Belach Bioteknik AB. This message is qualified as a purchase order.`
          : `I have read the <a href="${site.documents.dataProtection}" target="_blank" rel="noopener">data protection notice</a> and agree that Belach Bioteknik stores my details to answer this enquiry.`}</span>
      </label>
      <span class="field__error" id="${f('consent')}-error" aria-live="polite"></span>
    </div>
    <div class="form__foot">
      <button class="btn" type="submit"><span>Send message</span><span class="btn__chip">${icons.arrow()}</span></button>
      <span class="form-hint">Or e-mail <a href="mailto:${service ? site.serviceEmail : site.email}">${service ? site.serviceEmail : site.email}</a></span>
    </div>
    <p class="form-note form-status" role="status" hidden></p>
  </form>`;
};

/* ---------- blog ---------- */
import { cover } from './blog-covers.mjs';
import { postUrl, fmtDate } from './blog.mjs';

const postMeta = (p) => `<span class="post-meta"><time datetime="${p.date}">${fmtDate(p.date)}</time><span aria-hidden="true">·</span><span>${p.minutes} min read</span></span>`;

export const postCard = (rel, p, { headingLevel = 3 } = {}) => `
  <article class="post-card" data-topic-item="${esc(p.topic)}">
    <a class="post-card__link" href="${rel}${postUrl(p)}">
      <span class="post-card__media">${cover(p.cover)}<span class="post-card__topic">${esc(p.topic)}</span></span>
      <span class="post-card__body">
        ${postMeta(p)}
        <h${headingLevel}>${esc(p.title)}</h${headingLevel}>
        <span class="post-card__excerpt">${esc(p.excerpt)}</span>
        <span class="post-card__more">Read article ${icons.right()}</span>
      </span>
    </a>
  </article>`;

export const featuredPost = (rel, p) => `
  <article class="post-feature" data-topic-item="${esc(p.topic)}" data-reveal>
    <a class="post-feature__link" href="${rel}${postUrl(p)}">
      <span class="post-feature__media">${cover(p.cover)}<span class="post-card__topic">${esc(p.topic)}</span></span>
      <span class="post-feature__body">
        <span class="eyebrow">Latest article</span>
        ${postMeta(p)}
        <h3>${esc(p.title)}</h3>
        <span class="post-card__excerpt">${esc(p.excerpt)}</span>
        <span class="btn"><span>Read article</span><span class="btn__chip">${icons.arrow()}</span></span>
      </span>
    </a>
  </article>`;
