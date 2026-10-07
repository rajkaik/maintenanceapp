// Blog articles: one module per article in src/posts/. Each exports a default
// object (see the README for the fields). Articles marked draft: true are skipped.
import { readdirSync, existsSync } from 'node:fs';

const dir = new URL('./posts/', import.meta.url);
const files = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.mjs')).sort() : [];
const loaded = await Promise.all(files.map((f) => import(new URL(f, dir))));

const strip = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');

export const posts = loaded
  .map((m) => m.default)
  .filter((p) => !p.draft)
  .map((p) => {
    const words = strip(`${p.body} ${(p.takeaways || []).join(' ')}`).split(/\s+/).filter(Boolean).length;
    return { ...p, words, minutes: Math.max(3, Math.round(words / 220)), updated: p.updated || p.date };
  })
  .sort((a, b) => b.date.localeCompare(a.date) || (a.order ?? 99) - (b.order ?? 99));

export const topics = [...new Set(posts.map((p) => p.topic))];
export const postUrl = (p) => `blog/${p.slug}.html`;
export const postsForProduct = (slug) => posts.filter((p) => (p.products || []).includes(slug));

export const fmtDate = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', {
  day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
});

// h2 elements with an id become the table of contents.
export const headings = (html) => [...html.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)]
  .map(([, id, text]) => ({ id, text: text.replace(/<[^>]+>/g, '') }));
