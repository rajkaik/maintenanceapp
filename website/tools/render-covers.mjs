// Renders each blog cover to assets/img/blog/<slug>.png (1200 × 630, used as the
// social preview image) and the logo to assets/brand/logo.png (for structured data).
//
//   node tools/render-covers.mjs
//
// Needs Playwright with Chromium: npm i -D playwright && npx playwright install chromium
import { mkdir, readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { posts } from '../src/blog.mjs';
import { cover } from '../src/blog-covers.mjs';

// A local install is found by import(); a global one via require(), which honours NODE_PATH.
let chromium;
try { ({ chromium } = await import('playwright')); } catch {
  try { ({ chromium } = createRequire(import.meta.url)('playwright')); } catch {
    console.error('Playwright is not installed. Run: npm i -D playwright && npx playwright install chromium');
    process.exit(1);
  }
}
const root = new URL('../', import.meta.url);
await mkdir(new URL('assets/img/blog/', root), { recursive: true });
const css = await readFile(new URL('assets/css/main.css', root), 'utf8');
const fonts = (await readFile(new URL('assets/css/fonts.css', root), 'utf8')).replaceAll('../fonts/', new URL('assets/fonts/', root).href);
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
const frame = (inner) => `<!doctype html><html><head><style>${fonts}${css}body{margin:0;background:#000}.cover{border-radius:0;width:1200px;height:630px}</style></head><body>${inner}</body></html>`;
for (const p of posts) {
  await page.setContent(frame(cover(p.cover)), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: new URL(`assets/img/blog/${p.slug}.png`, root).pathname });
  console.log(`saved assets/img/blog/${p.slug}.png`);
}
const logo = await readFile(new URL('assets/brand/logo.svg', root), 'utf8');
await page.setViewportSize({ width: 640, height: 200 });
await page.setContent(`<!doctype html><html><body style="margin:0;background:#fff;display:grid;place-items:center;width:640px;height:200px;color:#ed1b24"><div style="width:560px">${logo.replace('<svg ', '<svg style="width:100%;height:auto" ')}</div></body></html>`);
await page.screenshot({ path: new URL('assets/brand/logo.png', root).pathname });
console.log('saved assets/brand/logo.png');
await browser.close();
