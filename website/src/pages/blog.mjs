import { site } from '../site.mjs';
import { posts, topics } from '../blog.mjs';
import { pageHero, esc } from '../components.mjs';
import { postCard, featuredPost, ctaBand } from '../blocks.mjs';
import { resolve } from '../images.mjs';

export const meta = {
  id: 'blog',
  file: 'blog.html',
  title: 'Bioprocess blog | Bioreactors, scale-up and biosafety | Belach Bioteknik',
  description: 'Articles from Belach Bioteknik on bioreactor scale-up, single-use vs stainless steel, effluent decontamination, 21 CFR Part 11 and bioprocess development.',
  head: () => `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Belach Bioteknik blog',
    url: `${site.url}blog.html`,
    inLanguage: 'en',
    publisher: { '@type': 'Organization', name: site.legalName, url: site.url },
    blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${site.url}blog/${p.slug}.html`, datePublished: p.date })),
  }).replace(/</g, '\\u003c')}</script>`,
};

export default function blog({ rel }) {
  const [first, ...rest] = posts;
  return `
    ${pageHero({ rel, title: 'Bioprocess knowledge <span class="hl">for better decisions</span>', lead: 'Practical articles on bioreactors, scale-up, biosafety and process control, written by the team that has built bioprocess equipment since 1985.', crumbs: [{ label: 'Home', href: 'index.html' }, { label: 'Blog' }], image: resolve('photo300L') })}

    <section class="section">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <h2>Bioprocess <span class="hl">journal</span></h2>
          <div class="stack">
            <p class="text">Engineering notes for scientists, process engineers and lab managers who specify, run or maintain bioreactors and biosafety equipment.</p>
            <div class="topic-filter" role="group" aria-label="Filter articles by topic" data-topic-filter hidden>
              <button type="button" aria-pressed="true" data-topic="">All</button>
              ${topics.map((t) => `<button type="button" aria-pressed="false" data-topic="${esc(t)}">${esc(t)}</button>`).join('')}
            </div>
          </div>
        </div>
        ${first ? featuredPost(rel, first) : ''}
        <div class="post-grid" data-post-grid>
          ${rest.map((p) => postCard(rel, p)).join('')}
        </div>
      </div>
    </section>

    ${ctaBand(rel, { title: 'Have a question <span class="hl-light">about your own process?</span>', text: 'Our engineers answer questions about bioreactors, scale-up, decontamination and control systems. Tell us what you are working on.' })}
  `;
}
