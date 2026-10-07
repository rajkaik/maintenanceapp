# Belach Bioteknik website (prototype)

A rebuild of the Belach Bioteknik website using the layout, typography and
section patterns of the **Fabrecor** industrial template
(https://fabrecor.webflow.io/), filled with the content of the current site
(https://new.belach.se/).

The HTML, CSS and JavaScript are written from scratch. No code, images or
other assets were copied from the template. If you decide to build the
production site on the original Webflow template instead, it has to be
licensed from its author (Radiant Templates). This prototype then serves as
the content and structure blueprint.

The migration analysis (what was carried over, what was fixed, what is still
missing) is in [`ANALYSIS.md`](ANALYSIS.md).

## View it

Open `website/index.html` in a browser, or serve the folder:

```bash
cd website
python3 -m http.server 8000     # then open http://localhost:8000
```

Product photos are still loaded from the current site (see *Images* below), so
the pages need an internet connection until the images are copied.

## Pages

| Page | File | Template section it is based on |
| --- | --- | --- |
| Home | `index.html` | Fabrecor Home One |
| About | `about.html` | About |
| Products overview | `products.html` | Service One |
| 16 product pages | `products/*.html` | Portfolio detail |
| Bioreactor rental | `rental.html` | Service Two |
| Service & support | `services.html` | Service Three (process, FAQ) |
| References | `references.html` | Testimonials + Our works |
| Contact | `contact.html` | Contact One |
| Blog | `blog.html` | Blog One / Blog Two |
| Articles | `blog/*.html` | Blog post |
| 404 | `404.html` | 404 |

## Edit and rebuild

All pages are generated from `src/` by a dependency-free Node script
(Node 18 or newer):

```bash
cd website
node build.mjs
```

| What to change | Where |
| --- | --- |
| Address, phone, e-mail, navigation, references, industries | `src/site.mjs` |
| Products: names, specifications, images, categories | `src/products.mjs` |
| Page text and layout | `src/pages/*.mjs` |
| Header, footer, buttons, icons | `src/components.mjs` |
| Product cards, contact form, call-to-action band | `src/blocks.mjs` |
| Image list (one entry per picture) | `src/images.mjs` |
| Colours, type, spacing | `assets/css/main.css` (tokens at the top) |
| Animations and interactions | `assets/js/main.js` |
| Blog articles | `src/posts/*.mjs` (one file per article) |
| Article cover drawings | `src/blog-covers.mjs` |

Generated files (`*.html`, `products/*.html`, `sitemap.xml`, `robots.txt`,
`_redirects`) are committed, so the folder can be uploaded to any static host
as is. Products marked `draft: true` in `src/products.mjs` are kept in the
data but not published.

## Blog

Each article is one file in `src/posts/`. Copy an existing article and change:

| Field | What it is |
| --- | --- |
| `slug` | URL: `blog/<slug>.html` |
| `title`, `seoTitle`, `description` | Headline, browser title (max ~60 characters) and meta description (max ~155) |
| `date`, `updated` | Publication and last-change dates (`YYYY-MM-DD`) |
| `topic`, `keywords` | Category shown on cards; search keywords |
| `cover`, `coverAlt` | Cover drawing from `src/blog-covers.mjs` and its description |
| `excerpt`, `takeaways` | Card summary; bullet list at the top of the article |
| `products` | Product slugs the article links to (shown as "Related equipment" and as "Further reading" on those product pages) |
| `body` | The article as HTML. Every `<h2 id="…">` becomes an entry in the table of contents |
| `sources` | Numbered references shown at the end, in order of first citation; cite them in the text with the helper at the top of each article file: `${c(1)}` or `${c(2, 5)}` |

`node build.mjs` adds new articles to the blog page, the homepage, the sitemap
and the RSS feed (`blog/feed.xml`). Each article page carries `BlogPosting`
and breadcrumb structured data for search engines. After adding an article,
run `node tools/render-covers.mjs` to create its social preview image in
`assets/img/blog/` (needs Playwright, installed locally or globally with
`NODE_PATH` pointing to the global modules).

The six launch articles were written from published sources, with every quote
and figure checked against the source text. Have a Belach specialist read each
one before the site goes live, and update `updated` when an article changes.

## Images

The current WordPress host shows a bot challenge to cloud servers, so the
original files could not be copied while building this prototype. Until they
are, every image is loaded directly from `new.belach.se`. To make the site
self-contained, run this once from an office or home connection:

```bash
cd website
node tools/fetch-images.mjs   # saves all originals into assets/img/
node build.mjs                # pages now point at the local copies
```

If a file fails, the script prints the URL and the file name to save it
under. To replace a picture, put a new file in `assets/img/` and point the
entry in `src/images.mjs` at it.

## Before going live

- **Photography.** The template is built around large photos. Replace the
  illustrated product images and add real photos of systems, the workshop
  and the team (see the analysis for the shot list).
- **Logo.** `assets/brand/logo.svg` is a vector redraw made for this
  prototype. Replace it with the official vector logo if one exists.
- **Forms.** Without a backend the forms prepare an e-mail in the visitor's
  mail program. To receive submissions directly, add
  `data-endpoint="https://…"` to the `<form>` (Formspree, Netlify Forms, a
  WordPress or Webflow endpoint, …); the data is POSTed as JSON. Add spam
  protection on the endpoint side (the forms already include a honeypot field).
- **Map tiles.** The references map loads OpenStreetMap tiles only after a
  click. For a commercial site, consider a tile provider with an API key (per
  the OpenStreetMap tile usage policy).
- **Documents.** Data protection notice, terms, service price list and the ISO
  9001 certificate are linked from `new.belach.se`. Copy them to the new host
  and update `src/site.mjs`.
- **Redirects.** `_redirects` maps every old WordPress URL to its new page
  (Netlify / Cloudflare Pages format). Translate it for other hosts.
- **Fill in** the organisation number and the final domain in `src/site.mjs`.

## Fonts

Oswald (display), Plus Jakarta Sans (text) and Inter (buttons and labels) are
self-hosted from `assets/fonts/` under the SIL Open Font License, so no
visitor data is sent to Google.
