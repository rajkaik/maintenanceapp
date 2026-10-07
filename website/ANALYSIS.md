# Belach website migration analysis

**From:** new.belach.se (WordPress + WooCommerce, Uncode theme)
**To:** Fabrecor-style site (rebuilt as static HTML in `website/`)
**Content captured:** 7 October 2026

## Summary

- **Almost everything on the current site can move to the new layout.** That
  covers 18 product pages, the services, maintenance, rental and contact
  pages, the 61-pin reference map and the 44 customer logos. The template has
  a slot for all of it.
- **The template was built for a photo-led factory brand.** Its biggest gaps
  for Belach are real photography and customer testimonials. Belach has
  neither on the site today.
- **About 30 content and technical faults were fixed in the prototype.**
  These include broken menu links, product text pasted into the wrong product,
  inconsistent volumes and names, a contact form that loses the company
  field, and missing alt texts. They are listed under
  [What was fixed](#what-was-fixed-during-the-migration).
- **The reference map is the strongest asset on the old site, and it is
  barely visible there.** Each pin is a delivered system: 61 installations,
  44 customers, 13 countries. The new site uses it for its projects,
  statistics and references sections.
- **Before launch, Belach needs to supply or decide on 12 items:**
  photography, testimonials, two product drafts, standard references,
  response times and more. They are listed under
  [Decisions needed](#decisions-needed-from-belach).

## 1. The two sites at a glance

| | Current site (new.belach.se) | Template (fabrecor.webflow.io) |
| --- | --- | --- |
| Platform | WordPress 7.1, WooCommerce, Uncode theme, LayerSlider (loaded, unused), WP MAPIT, Contact Form 7, reCAPTCHA | Webflow, GSAP animations |
| Structure | Homepage with long intro text, four product carousels, contact form and references; 12 pages, 18 products | 7 page types: home, about, services, pricing, blog, contact, project detail |
| Look | White pages, Roboto/Poppins, small type; AI-generated "40th anniversary" banners behind the carousels | Cream and black sections, huge condensed uppercase type (Oswald), one strong accent colour, large photos |
| Calls to action | "Read more" and "Send" only | Quote button in hero, after every section, and a phone number in the header |
| Trust signals | Reference map and logo carousel at the bottom of the homepage | Statistics, projects slider, testimonials, industries list |

**Colour.** The template's orange (#DC5734) sits close to the Belach logo red
(#ED1B24), so the template palette carries over with the accent switched to
Belach red. The prototype uses #E01E26, slightly darkened so that white
button text and red text on cream pass WCAG AA contrast. The cream, sand and
black surfaces stay as in the template.

## 2. What the current site contains

| Content | Amount | Where it went |
| --- | --- | --- |
| Company introduction (40+ years, glass and stainless steel, industries, global reach) | Homepage text | Home hero, About page, section intros |
| Bioreactors | 8 published products (0.2 L to 1000 L) + 1 hidden ("Web Based Bioreactor") | Products page, 8 product pages, home slider |
| Decontamination systems | 3 products + category text (/decontamination-systems/, not linked in the menu) | Products page, 3 product pages, home accordion |
| Bioprocess control systems | 3 products + category text (menu link returns 404) | Products page, 3 product pages, home "one control platform" section |
| Bioreactor rental | 2 products + 1 hidden 26 L unit, rental page | Rental page, 2 product pages |
| Services | Customizable equipment, basic engineering, regular maintenance, support (+ an unlinked 2022 draft with troubleshooting and spare-parts text) | Service & support page, home process cards |
| "Engineering excellence & system modernization" | Paragraph on /bioreactors/ (re-automation, P&ID, URS, SAT) | Products page band, services page |
| Unique solutions | Unlinked page (titanium/plastic systems, cGMP) | Services page, "Materials" |
| Reference map | 61 pins: customer and delivered system, with coordinates | Home references section, References page (list by country + interactive map) |
| Customer logos | 44 companies (87 files), all linking to "#" | Home marquee, References "Also trusted by" |
| Contact | Address, phone, info@ and service@ e-mail, three forms | Header, footer, Contact page, service request form |
| Documents | Data protection notice, terms, service price list (linked); ISO 9001 certificate (in media library, never linked) | Footer and service pages, all four linked |
| Archive (old belach.se, 2016–2018) | Founding year 1985, tagline "The bioneers of fermentation", mission, vision, "what makes us unique", service agreement terms, management team | About page (mission, vision, history), hero badge |

## 3. Template sections mapped to Belach content

Status key:
- **Carried over:** the content moved as is (facts verbatim).
- **Adapted:** the facts are from the old site; headings and linking sentences
  are new.
- **New:** a new feature; see the decisions section.
- **Needs input:** the slot is empty until Belach supplies content.

### Home

| Template section | Belach version | Source | Status |
| --- | --- | --- | --- |
| Hero word "INDUSTRY", tagline, paragraph | "BIOPROCESS", H1 "Customized bioreactors, bioprocess equipment and control systems", 40 years text | Homepage title and intro | Adapted |
| Rotating badge "Request a manufacturing quote" | "Request a quote · Bioprocess engineering since 1985" | Archive (founding year) | Adapted |
| Hero background photo | Multifermentor photo from the media library (unused today) | Media library | Needs input: best real photo |
| Four process cards | Consultation & URS → Basic engineering → Build & commissioning → Maintenance & support | /services/, /bioreactors/ | Adapted |
| "Manufacturing excellence" split + highlights | "Bioprocess excellence backed by 40 years" + ISO 9001, 0.2–1000 L, 21 CFR Part 11 | Homepage, archive, ISO badge | Adapted |
| Dark "solutions under one roof" accordion | Bioreactors, decontamination, control systems, rental, service | Category pages | Adapted |
| Statistics (82 %, 7K+, 22+, 91 %) | 40+ years · 1000 L max. volume · 61 installations · 30 fermentations a week with one operator | Homepage, product pages, reference map | Carried over (real figures) |
| "Projects" slider | "Products" slider with all 14 purchasable products | Product pages | Adapted |
| Check-list with round icon | "Built around your process": customized, automated, aseptic, long-term partner | Services, /bioreactors/ | Adapted |
| "Industries we serve" giant words with hover cards | Pharmaceuticals, vaccines, food, agriculture, biotech, research | Homepage list, "Fields of application" | Adapted |
| "Reliable manufacturing" split + benefits | "Global reach with local support" + service list | Homepage | Carried over |
| Video with cycling cards | BioPhantom© screenshot with cycling feature cards | BioPhantom page | Adapted; needs input: a short screen recording or reactor video |
| Testimonials (three columns) | Delivered-system cards (Valneva, Ivyfarm, KTH, Fork and Good, Kemikalia…) + customer name marquee | Reference map, logo carousel | Adapted; needs input: real quotes |
| Footer with giant wordmark | Address, phone, e-mail, LinkedIn, documents, "BELACH" wordmark | Contact page | Carried over |

### Other pages

| Template page | Belach page | Notes |
| --- | --- | --- |
| About | About: "The bioneers of fermentation" | Mission and vision tiles (archive text updated from "30 years" to 40), what makes us unique, scale cards (lab, pilot, production), industries, ISO 9001 |
| Service One | Products overview | Category intros from the category pages, cards for every product, re-automation band |
| Portfolio / project detail | 16 product pages | Hero, **key-facts row** (four numbers per product), gallery, specification table, features, applications, product enquiry form, related products |
| Service Two / Three | Service & support, Rental | Lifecycle steps, engineering deliverables, maintenance and support cards, FAQ, service request form with response time and terms (as on the current maintenance page) |
| Testimonials + Our works | References | 61 installations listed by country, interactive map (loads only after a click), customers from the logo wall |
| Contact One | Contact | Form, address, phone, both e-mail addresses, ISO 9001 |
| Pricing | Not used | Belach does not publish prices; the service price list PDF is linked instead |
| Blog | Blog listing + 6 articles (added October 2026) | The current site has no blog. Articles on scale-up, single-use vs stainless steel, effluent decontamination, 21 CFR Part 11, parallel bioreactors and cultivated meat, each linked to the matching products |

## 4. What was fixed during the migration

### Broken or misleading links

- The main-menu item "Bioprocess Control Systems" points to
  `/product-category/bioprocess-systems/`, which returns a **404 page**.
- The footer link "External Drain Collection System" silently redirects to
  Sink Type EDS.
- The ISO 9001 badge links to a page that redirects to the homepage, while the
  certificate PDF sits unlinked in the media library.
- All 175 customer-logo links and the 404 page's "Back Homepage" button point
  to "#".

### Text in the wrong place

- The External Decontamination System page contains the full Pilot EDS
  description ("The Pilot EDS (Dual Vessels) system operates in batch mode…").
  In the new site it moved to the Pilot EDS page, where it was missing.
- The BioPhantom text is repeated on /bioprocess-systems/ ("Key Benefits"
  twice). Homepage carousel cards contain the full product descriptions.
  /services-2/ shows "Basic engineering" twice.

### Inconsistent names and numbers (unified, but please confirm)

- Lab-scale multi-parallel system: "250ml-1000ml" (menu), "150ml-1000ml"
  (footer, also spelled "Paralell"), "0.2–1 L" (product page). The new site
  uses the product page value.
- "Biogas Reactor System" (menu) vs "Automated Twin Biogas Reactor System"
  (product page); the reference map calls it "Dolly Biogas Reactor".
- EDS is spelled out as both "Effluent" and "External" Decontamination
  System. F₀ is written "F₀ > 25" and "Fzero>25". The raw category slug
  "bioreactors-rental" is shown as a heading.
- Rental image file names do not match the products ("rental-50-L.png" on the
  100 L unit, "10L-1.png" on the 26 L unit).

### Typos and encoding

- On the site: "Biorectors", "Paralell", "etc..", "— – Leasing",
  "and[General Terms and Conditions]and".
- In the map pins: "Hydrolisis" (×3), "Satinless", "Treatmant", "Bencthop",
  and broken characters ("Bor�s H�gskolan", "Ume� University",
  "K�ppalaf�rbundet"). All corrected in the new data.

### Structure and search

- Most pages have no H1, and the homepage has two.
- Meta descriptions are auto-generated, for example "BIOREACTORS",
  "info@belach.se", and product descriptions of up to 2,661 characters.
- The sitemap lists about 100 theme demo blocks and the unlinked pages
  /unique-solutions/, /services-2/, /csat-survey/ and /page-404-custom/.
- **New site:** one H1 per page, written titles and descriptions, a clean
  sitemap, and a `_redirects` file that maps every old URL to its new page so
  search rankings carry over.

### Forms

- On the contact form, "Your Name" and "What company do you work for?" use
  the same field name (`your-name`), so **one of the two values is lost** on
  every submission.
- None of the contact forms has a privacy consent checkbox.
- **New site:** separate fields, a consent checkbox linking the data
  protection notice, a honeypot instead of the reCAPTCHA puzzle, and a
  product field.

### Accessibility

- 398 of 433 images have no alt text, and the LinkedIn icon has no label.
- **New site:** alt text on every image, labelled icons, a skip link, visible
  keyboard focus, and reduced-motion support.

### Images that should not be migrated

- **AI-generated banners** behind the product carousels and on the contact and
  maintenance pages show garbled text ("EXPALITED DIAGRAN", "Anniversary 20").
  Product images are illustrations rather than photos: the benchtop image is
  named as an AI render ("Benchtop-Bioreactor-Systems-gpt-1.png") and the
  airlift image as "stilizalt" (Hungarian for stylised). Confirm which product
  images show real equipment.
- **Third-party images in the media library:**
  - A Sartorius BIOSTAT product photo ("Product range, Biostat B-DCU, UniVessel
    SU, UniVessel glass").
  - A HAL 9000 film still ("belach 9000").
  - Service icons from free stock sites (kisspng, pngtree), which is a
    **licensing risk**.
- **Not migrated:** none of these appear on the new site.

### Missing basics

- No address, phone or e-mail in the header or footer.
- **New site:** the phone number in the header, full contact details in the
  footer, and a quote button in the hero, after the main sections and on
  every product page.

## 5. What the new site adds

- **One product structure for all 16 products:** four key facts, a
  specification table, features, applications, options and an enquiry form.
  Today every product page has a different layout.
- **References worth reading:** installations grouped by country, a
  click-to-load interactive map, and the real figures (61 installations, 44
  customers, 13 countries) used as statistics.
- **Company story restored:** founding year, mission, vision and "what makes
  us unique" from the old belach.se archive, updated to 40 years.
- **Service request carried over** with response time and terms acceptance,
  plus an FAQ written only from facts already on the site.
- **Privacy:**
  - Fonts are self-hosted (no requests to Google).
  - The OpenStreetMap map only loads after a click.
  - No reCAPTCHA (which sends data to Google).
- **Performance:**
  - No WordPress, jQuery or slider plugin.
  - One CSS and one JS file.
  - The logo is a single inline SVG.
  - The homepage is about 70 KB of HTML before images.
- **Easy to change:** company facts, products and references live in three
  data files (`src/site.mjs`, `src/products.mjs`, `src/images.mjs`), and one
  command regenerates all 24 pages.

## Decisions needed from Belach

| # | Item | Why it matters |
| --- | --- | --- |
| 1 | **Photography.** Hero image, 3–4 wide photos (workshop, installed pilot plant, engineers at a control tower, BioPhantom screen), plus real product photos to replace the illustrated product images | The template's impact comes from large photos. The media library has a few real photos (multifermentor, in-situ bioreactor, 300 L system), 640–1920 px wide; most of them are not used on any page |
| 2 | **Testimonials.** 3–6 quotes with name, role and permission | The template has a full testimonials section. The prototype shows delivered systems instead |
| 3 | **Reference permissions and names.** Confirm customers may be named. Several have been renamed or merged (Statoil → Equinor, Biovitrum and Swedish Orphan → Sobi, Crucell → Janssen, Phadia → Thermo Fisher, Bioforsk → NIBIO). Identify the two anonymised "international" entries | References are public claims |
| 4 | **Product family names.** The map uses Greta (multifermenter), Dolly (biogas) and Vibroferm, but the product pages never mention them | Customers may know the products by these names |
| 5 | **Two hidden products.** "Web Based Bioreactor (ANT)" and the 26 L rental unit are in the data as drafts | Publish or retire |
| 6 | **Standards wording.** Product pages say "EU-13311/EN13312"; the decontamination overview says "EN 13311-5 and PED" | Kept verbatim; needs a correct reference |
| 7 | **Response times.** The 2022 draft says 8 / 24 / 72 hours; the current support text says 24 hours for contracted customers; the form offers 72 h normal or 24 h troubleshooting | The prototype uses the current text only |
| 8 | **Address format and organisation number.** "Lyftkransvägen 7/a" was written as "7A, 142 50 Skogås"; the org. number is not published anywhere | Footer and legal pages |
| 9 | **ISO 9001.** The certificate PDF is from 2021 | Confirm it is current before linking it prominently |
| 10 | **People.** The 2016 site had a management team with photos and direct numbers | A team or contact-person section would add trust; needs current names and permission |
| 11 | **Language.** Customers are mostly Scandinavian | A Swedish version could be added later; the build supports it with a second data set |
| 12 | **Platform.** (a) Buy the Fabrecor Webflow licence and rebuild in Webflow from this prototype; (b) host this static site (cheapest, fastest, needs a developer for edits); (c) WordPress with a block theme styled like this | Decides who can edit content later |

## Recommended next steps

1. Review the prototype pages and the new copy (headings and linking
   sentences are new; all facts come from the current site).
2. Decide items 5–9 in the table above. Each takes minutes but changes
   published facts.
3. Book a half-day photo shoot (item 1) and ask three or four customers for a
   quote (item 2).
4. Choose the platform (item 12).
5. Copy the images and PDFs to the new host (`node tools/fetch-images.mjs`).
6. Connect the form endpoint, set up the redirects, and launch.
