// Product detail template, rendered once per published product by build.mjs.
import { productCategories, byCategory } from '../products.mjs';
import { btn, icons, img, esc } from '../components.mjs';
import { productCard, ctaBand, contactForm } from '../blocks.mjs';
import { postsForProduct, postUrl } from '../blog.mjs';
import { resolve } from '../images.mjs';

const strip = (s) => s.replace(/<[^>]+>/g, '');

export const describe = (p) => {
  const text = `${p.name}: ${strip(p.card)} ${p.meta.map(([k, v]) => `${k}: ${v}`).join(', ')}.`;
  return text.length > 158 ? `${text.slice(0, 155).replace(/[ ,;:]+\S*$/, '')}…` : text;
};

export default function product({ rel, product: p }) {
  const cat = productCategories.find((c) => c.id === p.category);
  const catHref = p.category === 'rental' ? 'rental.html' : `products.html#${p.category}`;
  const gallery = (p.gallery?.length ? p.gallery : [p.image]).map((k) => resolve(k));
  const related = byCategory(p.category).filter((x) => x.slug !== p.slug);
  const relatedList = related.length >= 2 ? related : [...related, ...byCategory('control').filter((x) => x.slug !== p.slug)].slice(0, 3);

  const section = (s) => `
    <article class="f-card" data-reveal>
      <h3>${s.title}</h3>
      ${s.text && !s.items ? `<p>${s.text}</p>` : ''}
      ${s.items ? `<ul>${s.items.map((i) => `<li>${i}</li>`).join('')}</ul>` : ''}
      ${s.text && s.items ? `<p>${s.text}</p>` : ''}
    </article>`;

  return `
    <section class="page-hero page-hero--product">
      <div class="container page-hero__inner">
        <nav aria-label="Breadcrumb"><ol class="breadcrumbs">
          <li><a href="${rel}index.html">Home</a></li>
          <li><a href="${rel}products.html">Products</a></li>
          <li><a href="${rel}${catHref}">${esc(cat.title)}</a></li>
        </ol></nav>
        <h1>${esc(p.name)}</h1>
        <p class="lead">${esc(p.headline)}</p>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <dl class="meta-row">
          ${p.meta.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}
        </dl>
      </div>
      <div class="container product-top" style="margin-top:var(--gap-lg)">
        <div class="gallery" data-gallery>
          <div class="gallery__main">${img(rel, gallery[0], { loading: 'eager' })}</div>
          ${gallery.length > 1 ? `<div class="gallery__thumbs">${gallery.map((g, i) => `<button type="button" aria-pressed="${i === 0}" aria-label="Show image ${i + 1}: ${esc(g.alt)}" data-full="${/^https?:/.test(g.src) ? g.src : rel + g.src}">${img(rel, g)}</button>`).join('')}</div>` : ''}
        </div>
        <div class="product-summary">
          <span class="eyebrow">${esc(cat.title)}</span>
          ${p.intro.map((t) => `<p class="lead">${t}</p>`).join('')}
          ${p.specs.length ? `
          <div class="spec-wrap">
            <h2 class="h4">Specifications</h2>
            <table class="spec-table">
              <tbody>
                ${p.specs.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${v}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>` : ''}
          <div class="cluster">
            ${btn({ href: '#enquiry', label: p.category === 'rental' ? 'Ask about rental' : 'Request a quote' })}
            <a class="text-link" href="${rel}${catHref}">More ${esc(cat.title.toLowerCase())} ${icons.right()}</a>
          </div>
        </div>
      </div>
    </section>

    ${p.sections.length ? `
    <section class="section section--sand section--tight">
      <div class="container">
        <div class="feature-grid${p.sections.length === 1 ? ' feature-grid--single' : ''}">
          ${p.sections.map(section).join('')}
        </div>
      </div>
    </section>` : ''}

    ${postsForProduct(p.slug).length ? `
    <section class="section section--tight">
      <div class="container reading">
        <h2 class="h4">Further reading</h2>
        <ul class="reading__list" role="list">
          ${postsForProduct(p.slug).map((x) => `<li><a href="${rel}${postUrl(x)}"><span class="reading__topic">${esc(x.topic)}</span><span class="reading__title">${esc(x.title)}</span><span class="reading__more">${x.minutes} min read ${icons.right()}</span></a></li>`).join('')}
        </ul>
      </div>
    </section>` : ''}

    <section class="section" id="enquiry">
      <div class="container">
        <div class="contact-wrap">
          <div class="contact-wrap__media">${img(rel, resolve(p.image), { cls: 'is-cutout' })}</div>
          <div class="contact-wrap__form">
            <p class="eyebrow">Questions about this product?</p>
            ${contactForm({ id: 'product-form', heading: `Ask us about the ${esc(p.name.replace(/ \(.*\)$/, '').toLowerCase())}`, productOptions: false, product: p.name })}
          </div>
        </div>
      </div>
    </section>

    ${relatedList.length ? `
    <section class="section section--stone section--tight" data-slider>
      <div class="container">
        <div class="slider-head">
          <h2 class="giant giant--sm">Related</h2>
          <div class="slider-head__ctrl">
            <button class="circle-btn" type="button" data-prev aria-label="Previous products">${icons.left()}</button>
            <button class="circle-btn" type="button" data-next aria-label="Next products">${icons.right()}</button>
          </div>
        </div>
        <div class="slider" tabindex="0" aria-label="Related products">
          ${relatedList.map((x) => productCard(rel, x)).join('')}
        </div>
      </div>
    </section>` : ''}
  `;
}
