// Blog article template, rendered once per article by build.mjs.
import { site } from '../site.mjs';
import { posts, fmtDate, headings, postUrl } from '../blog.mjs';
import { bySlug } from '../products.mjs';
import { btn, icons, esc } from '../components.mjs';
import { postCard, ctaBand, productUrl } from '../blocks.mjs';
import { cover } from '../blog-covers.mjs';

export const head = (p) => {
  const url = `${site.url}${postUrl(p)}`;
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      image: `${site.url}assets/img/blog/${p.slug}.png`,
      datePublished: p.date,
      dateModified: p.updated,
      inLanguage: 'en',
      wordCount: p.words,
      articleSection: p.topic,
      keywords: p.keywords.join(', '),
      mainEntityOfPage: url,
      author: { '@type': 'Organization', name: site.legalName, url: site.url },
      publisher: { '@type': 'Organization', name: site.legalName, url: site.url, logo: { '@type': 'ImageObject', url: `${site.url}assets/brand/logo.png` } },
      citation: p.sources.map((s) => s.url),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}blog.html` },
        { '@type': 'ListItem', position: 3, name: p.title, item: url },
      ],
    },
  ];
  return [
    `<meta property="article:published_time" content="${p.date}">`,
    `<meta property="article:modified_time" content="${p.updated}">`,
    `<meta property="article:section" content="${esc(p.topic)}">`,
    ...p.keywords.map((k) => `<meta property="article:tag" content="${esc(k)}">`),
    `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`,
  ].join('\n  ');
};

export default function post({ rel, post: p }) {
  const toc = headings(p.body);
  const related = posts.filter((x) => x.slug !== p.slug)
    .sort((a, b) => (b.topic === p.topic) - (a.topic === p.topic))
    .slice(0, 3);
  const products = (p.products || []).map(bySlug).filter((x) => x && !x.draft);

  return `
    <section class="page-hero page-hero--post">
      <div class="container page-hero__inner">
        <nav aria-label="Breadcrumb"><ol class="breadcrumbs">
          <li><a href="${rel}index.html">Home</a></li>
          <li><a href="${rel}blog.html">Blog</a></li>
          <li><span aria-current="page">${esc(p.topic)}</span></li>
        </ol></nav>
        <h1>${esc(p.title)}</h1>
        <p class="lead">${esc(p.excerpt)}</p>
        <p class="post-hero-meta"><time datetime="${p.date}">${fmtDate(p.date)}</time><span aria-hidden="true">·</span><span>${p.minutes} min read</span><span aria-hidden="true">·</span><span>Belach Bioteknik</span></p>
      </div>
    </section>

    <div class="container post-cover">${cover(p.cover, { alt: p.coverAlt })}</div>

    <section class="section section--tight">
      <div class="container post-layout">
        <aside class="post-aside">
          ${toc.length ? `
          <nav class="toc" aria-label="On this page">
            <p class="toc__title">On this page</p>
            <ol>${toc.map((h) => `<li><a href="#${h.id}">${esc(h.text)}</a></li>`).join('')}<li><a href="#sources">Sources</a></li></ol>
          </nav>` : ''}
          ${products.length ? `
          <div class="aside-card">
            <p class="toc__title">Related equipment</p>
            <ul>${products.map((x) => `<li><a href="${rel}${productUrl(x)}">${esc(x.name)} ${icons.right()}</a></li>`).join('')}</ul>
          </div>` : ''}
        </aside>

        <article class="article">
          ${p.takeaways?.length ? `
          <div class="takeaways">
            <p class="takeaways__title">Key takeaways</p>
            <ul>${p.takeaways.map((t) => `<li>${t}</li>`).join('')}</ul>
          </div>` : ''}
          ${p.body}
          <section class="sources" id="sources">
            <h2>Sources</h2>
            <ol>
              ${p.sources.map((s) => `<li id="src-${s.n}">${esc(s.title)}. ${esc(s.publisher)}${s.year ? `, ${s.year}` : ''}. <a href="${s.url}" target="_blank" rel="noopener">${esc(s.url.replace(/^https?:\/\//, '').replace(/\/$/, ''))}</a></li>`).join('')}
            </ol>
          </section>
          <div class="author-box">
            <span class="author-box__mark"><svg viewBox="0 0 100 120" aria-hidden="true"><use href="#belach-mark"/></svg></span>
            <div>
              <p class="author-box__label">Written by</p>
              <p class="author-box__name">Belach Bioteknik</p>
              <p>Belach Bioteknik AB in Stockholm has designed, built and maintained bioreactors, decontamination systems and bioprocess control software since ${site.founded}. Questions about this article? Write to <a href="mailto:${site.email}">${site.email}</a>.</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    ${related.length ? `
    <section class="section section--umber">
      <div class="container">
        <div class="section-head section-head--split">
          <h2>More from <span class="hl-rose">the journal</span></h2>
          <div class="stack">${btn({ href: `${rel}blog.html`, label: 'All articles', variant: 'light' })}</div>
        </div>
        <div class="post-grid">${related.map((x) => postCard(rel, x)).join('')}</div>
      </div>
    </section>` : ''}

    ${ctaBand(rel)}
  `;
}
