// Copies every image listed in src/images.mjs from the current WordPress media
// library into assets/img/, so the site no longer depends on new.belach.se.
//
//   node tools/fetch-images.mjs      (then: node build.mjs)
//
// Run it from a normal office or home connection. The current host shows a
// bot challenge to some cloud/data-centre addresses; when that happens the
// script reports which files failed so they can be saved by hand instead
// (open the URL in a browser, "Save image as…", use the listed file name).
import { mkdir, writeFile, access } from 'node:fs/promises';
import { images } from '../src/images.mjs';

const dir = new URL('../assets/img/', import.meta.url);
await mkdir(dir, { recursive: true });

const failed = [];
let saved = 0;
let skipped = 0;
for (const [key, im] of Object.entries(images)) {
  const target = new URL(im.file, dir);
  try { await access(target); skipped++; continue; } catch { /* not downloaded yet */ }
  try {
    const res = await fetch(im.remote, { headers: { 'User-Agent': 'Mozilla/5.0 (belach-site image migration)' } });
    const type = res.headers.get('content-type') || '';
    if (!res.ok || !type.startsWith('image/')) throw new Error(`${res.status} ${type || 'no content-type'}`);
    await writeFile(target, Buffer.from(await res.arrayBuffer()));
    saved++;
    console.log(`saved   ${im.file}`);
  } catch (err) {
    failed.push({ key, file: im.file, url: im.remote, reason: err.message });
    console.log(`FAILED  ${im.file}  (${err.message})`);
  }
}
console.log(`\n${saved} saved, ${skipped} already present, ${failed.length} failed.`);
if (failed.length) {
  console.log('\nSave these manually into website/assets/img/ with the given file name:');
  failed.forEach((f) => console.log(`  ${f.file}  <-  ${f.url}`));
  process.exitCode = 1;
} else {
  console.log('Now run: node build.mjs');
}
