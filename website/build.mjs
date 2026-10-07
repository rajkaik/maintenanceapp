// Static site generator for the Belach Bioteknik website. No dependencies.
//
//   node build.mjs
//
// Reads src/ (data, components, page templates) and writes the finished HTML
// pages next to this file, plus sitemap.xml, robots.txt and _redirects.
import { writeFile, mkdir, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { layout } from './src/components.mjs';
import { site } from './src/site.mjs';
import { published, products } from './src/products.mjs';
import { remoteCount } from './src/images.mjs';
import { posts, postUrl } from './src/blog.mjs';

const root = new URL('./', import.meta.url);
const pageDir = new URL('./src/pages/', import.meta.url);

const pageModules = [];
for (const f of (await readdir(pageDir)).sort()) {
  if (!f.endsWith('.mjs') || f === 'product.mjs' || f === 'post.mjs') continue;
  pageModules.push(await import(new URL(f, pageDir)));
}
const productPage = existsSync(new URL('product.mjs', pageDir)) ? await import(new URL('product.mjs', pageDir)) : null;
const postPage = await import(new URL('post.mjs', pageDir));

// Generated product and article pages are rebuilt from scratch, so pages of
// renamed or deleted products/articles do not linger.
for (const dir of ['products/', 'blog/']) {
  const u = new URL(dir, root);
  if (!existsSync(u)) continue;
  for (const f of await readdir(u)) if (f.endsWith('.html')) await rm(new URL(f, u));
}

const written = [];
const write = async (file, html) => {
  const url = new URL(file, root);
  await mkdir(new URL('./', url), { recursive: true });
  await writeFile(url, html);
  written.push(file);
};

for (const mod of pageModules) {
  const { meta } = mod;
  const rel = meta.rel ?? '';
  await write(meta.file, layout({
    rel,
    id: meta.id,
    title: meta.title,
    description: meta.description,
    heroless: meta.heroless,
    canonical: meta.file === 'index.html' || meta.file === '404.html' ? '' : meta.file,
    head: typeof meta.head === 'function' ? meta.head() : (meta.head || ''),
    body: mod.default({ rel }),
  }));
}

if (productPage) {
  for (const product of published) {
    const rel = '../';
    const file = `products/${product.slug}.html`;
    await write(file, layout({
      rel,
      id: product.category === 'rental' ? 'rental' : `cat-${product.category}`,
      title: `${product.name} | Belach Bioteknik`,
      description: productPage.describe(product),
      canonical: file,
      body: productPage.default({ rel, product }),
    }));
  }
}

for (const post of posts) {
  const file = postUrl(post);
  await write(file, layout({
    rel: '../',
    id: 'blog',
    title: post.seoTitle || `${post.title} | Belach Bioteknik`,
    description: post.description,
    canonical: file,
    ogType: 'article',
    ogImage: `assets/img/blog/${post.slug}.png`,
    head: postPage.head(post),
    body: postPage.default({ rel: '../', post }),
  }));
}

// sitemap + robots
const lastmod = Object.fromEntries(posts.map((p) => [postUrl(p), p.updated]));
const pages = written.filter((f) => f !== '404.html');
await writeFile(new URL('sitemap.xml', root), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((f) => `  <url><loc>${site.url}${f === 'index.html' ? '' : f}</loc>${lastmod[f] ? `<lastmod>${lastmod[f]}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`);

// RSS feed for the blog
const xml = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
await mkdir(new URL('blog/', root), { recursive: true });
await writeFile(new URL('blog/feed.xml', root), `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Belach Bioteknik blog</title>
  <link>${site.url}blog.html</link>
  <atom:link href="${site.url}blog/feed.xml" rel="self" type="application/rss+xml"/>
  <description>Articles on bioreactors, scale-up, biosafety and bioprocess control from Belach Bioteknik.</description>
  <language>en</language>
${posts.map((p) => `  <item>
    <title>${xml(p.title)}</title>
    <link>${site.url}${postUrl(p)}</link>
    <guid isPermaLink="true">${site.url}${postUrl(p)}</guid>
    <pubDate>${new Date(`${p.date}T08:00:00Z`).toUTCString()}</pubDate>
    <category>${xml(p.topic)}</category>
    <description>${xml(p.description)}</description>
  </item>`).join('\n')}
</channel>
</rss>
`);
await writeFile(new URL('robots.txt', root), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}sitemap.xml\n`);

// 301 redirects from the current WordPress URLs (Netlify / Cloudflare Pages format;
// translate to .htaccess or the host's redirect settings if hosting elsewhere).
const pageRedirects = [
  ['/bioreactors/', '/products.html#bioreactors'],
  ['/product-category/bioreactor/', '/products.html#bioreactors'],
  ['/product-category/fermentors/', '/products.html#bioreactors'],
  ['/decontamination-systems/', '/products.html#decontamination'],
  ['/product-category/decontamination-systems/', '/products.html#decontamination'],
  ['/bioprocess-systems/', '/products.html#control'],
  ['/product-category/bioprocess-control-systems/', '/products.html#control'],
  ['/product-category/bioprocess-systems/', '/products.html#control'],
  ['/product-category/bioreactors-rental/', '/rental.html'],
  ['/belach-bioteknik-bioreactor-rental/', '/rental.html'],
  ['/unique-solutions/', '/services.html'],
  ['/services/', '/services.html'],
  ['/services-2/', '/services.html'],
  ['/maintenance-support-contact/', '/services.html#service-request'],
  ['/contact-belach/', '/contact.html'],
  ['/belach-bioteknik-ab-iso-9001/', '/about.html#quality'],
  ['/product/external-drain-collection-system/', '/products/external-decontamination-system.html'],
];
const productRedirects = products.map((p) => [
  new URL(p.old).pathname,
  p.draft ? '/products.html' : `/products/${p.slug}.html`,
]);
await writeFile(new URL('_redirects', root), [...pageRedirects, ...productRedirects]
  .map(([from, to]) => `${from.padEnd(96)} ${to}  301`).join('\n') + '\n');

console.log(`Built ${written.length} pages.`);
const remote = remoteCount();
if (remote) {
  console.log(`Note: ${remote} images are still loaded from new.belach.se. Run "node tools/fetch-images.mjs", then build again.`);
}
