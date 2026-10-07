// Company facts, navigation and shared copy.
// Everything here comes from new.belach.se (captured 2026-10-07) unless marked NEW.
// Items marked VERIFY need a decision from Belach before going live.

const WP = 'https://new.belach.se/wp-content/uploads/';

export const site = {
  name: 'Belach Bioteknik',
  legalName: 'Belach Bioteknik AB',
  orgNo: '', // VERIFY: add organisation number (not published on the current site)
  url: 'https://www.belach.se/', // VERIFY: final production domain
  founded: 1985,
  tagline: 'Customized bioreactors, bioprocess equipment and control systems',
  phone: '+46 8 470 92 50',
  phoneHref: '+4684709250',
  email: 'info@belach.se',
  serviceEmail: 'service@belach.se',
  address: ['Lyftkransvägen 7A', '142 50 Skogås', 'Stockholm, Sweden'],
  mapsUrl: 'https://www.openstreetmap.org/search?query=Lyftkransv%C3%A4gen%207A%2C%20Skog%C3%A5s',
  socials: [
    { label: 'Belach Bioteknik on LinkedIn', href: 'https://www.linkedin.com/company/belach-bioteknik-ab', icon: 'linkedin' },
  ],
  documents: {
    // Linked from the current site; move these PDFs to the new host before launch.
    dataProtection: `${WP}2024/10/Belach-data-protection-notice.pdf`,
    terms: `${WP}2021/02/Belach-Bioteknik-General-Terms-and-Conditions.pdf`,
    servicePrices: `${WP}2026/02/Service.pdf`,
    iso9001: `${WP}2021/04/Belach-Bioteknik-AB-ISO-9001.pdf`, // in the media library but never linked on the current site
  },
};

site.footerLinks = [
  { label: 'Data protection notice', href: site.documents.dataProtection, external: true },
  { label: 'Terms and conditions', href: site.documents.terms, external: true },
  { label: 'ISO 9001 certificate', href: site.documents.iso9001, external: true },
  { label: 'Service price list', href: site.documents.servicePrices, external: true },
];

export const categories = [
  { id: 'bioreactors', label: 'Bioreactors', note: '0.2 – 1000 L', href: 'products.html#bioreactors' },
  { id: 'decontamination', label: 'Decontamination systems', note: 'BSL 1–3', href: 'products.html#decontamination' },
  { id: 'control', label: 'Bioprocess control systems', note: 'BioPhantom©', href: 'products.html#control' },
  { id: 'rental', label: 'Bioreactor rental', note: '10 – 100 L', href: 'rental.html' },
];

export const nav = [
  { id: 'home', label: 'Home', href: 'index.html' },
  { id: 'about', label: 'About', href: 'about.html' },
  { id: 'products', label: 'Products', href: 'products.html', children: categories.map((c) => ({ ...c, id: c.id === 'rental' ? 'rental' : `cat-${c.id}` })) },
  { id: 'services', label: 'Service & support', href: 'services.html' },
  { id: 'references', label: 'References', href: 'references.html' },
  { id: 'blog', label: 'Blog', href: 'blog.html' },
  { id: 'contact', label: 'Contact', href: 'contact.html' },
];

site.footerNav = [
  { label: 'Home', href: 'index.html' },
  { label: 'About us', href: 'about.html' },
  { label: 'Products', href: 'products.html' },
  { label: 'Rental', href: 'rental.html' },
  { label: 'Service', href: 'services.html' },
  { label: 'References', href: 'references.html' },
  { label: 'Blog', href: 'blog.html' },
  { label: 'Contact', href: 'contact.html' },
];

// Industries, from the homepage list and the "Fields of application" line.
export const industries = [
  { word: 'Pharmaceuticals', title: 'Human and veterinary pharmaceuticals', text: 'Stainless-steel and glass bioreactors for microbial and cell culture processes, from R&D to production scale.', image: 'pilot' },
  { word: 'Vaccines', title: 'Vaccine production', text: 'In-situ sterilizable systems and effluent decontamination for BSL 1–3 vaccine research and manufacturing.', image: 'inSitu' },
  { word: 'Food', title: 'Food, beverage and cultured meat', text: 'Fermentation and cell cultivation for FoodTech, including cultured meat and probiotic starter cultures.', image: 'multiPilot' },
  { word: 'Agriculture', title: 'Agriculture and animal health', text: 'Bioprocess equipment for agricultural research, animal health and nutrition.', image: 'biogas' },
  { word: 'Biotech', title: 'Biotech and microbial production', text: 'Multi-parallel systems that run up to 30 fermentations per week with one operator.', image: 'multiLab' },
  { word: 'Research', title: 'Academic and industrial research', text: 'Universities and research institutes across Scandinavia, Europe and the USA run Belach systems.', image: 'benchtop' },
];

// "Our references" map on the current homepage: all 61 pins with their stored
// coordinates (rounded). Broken characters repaired and typos fixed; the country
// is derived from the coordinates. [customer, delivered system, country, lat, lng]
export const references = [
  ['Affibody', 'Greta multifermenter', 'Sweden', 59.3471, 18.0221],
  ['Affibody', 'Heat treatment system', 'Sweden', 59.3471, 18.0221],
  ['Alpha-Zyme', 'Greta multifermenter', 'USA', 26.8877, -80.1087],
  ['Anicon', '6 × 5 L standalone microbial reactors', 'Germany', 52.8606, 8.1329],
  ['AquaTeam', 'Dolly biogas reactor', 'Norway', 59.9268, 10.7966],
  ['Bergen University', 'Dolly biogas reactor', 'Norway', 60.3876, 5.322],
  ['BiotechPharma', 'Greta multifermenter', 'Lithuania', 54.7528, 25.2661],
  ['Högskolan i Borås', '2 × benchtop airlift reactors', 'Sweden', 57.7252, 12.9397],
  ['Chalmers', 'Benchtop airlift bioreactors', 'Sweden', 57.6897, 11.9745],
  ['Charles River Laboratories', '15–30 L single-use enzymatic hydrolysis reactor', 'United Kingdom', 53.0039, -2.2718],
  ['Charles River Laboratories', '15–30 L single-use enzymatic hydrolysis reactor', 'United Kingdom', 53.2766, -2.2323],
  ['Christian Hansen', '4 × 5 L standalone microbial reactors', 'Denmark', 55.8726, 12.4875],
  ['CREA PCM', 'Dolly biogas reactor', 'Italy', 41.7183, 12.5963],
  ['Diagon Kft', 'Cell culture and microbial reactors', 'Hungary', 47.605, 19.106],
  ['Elephant', 'Sterilizable media preparation tank', 'France', 43.3313, 3.2073],
  ['Etvax', 'Standalone SIP bioreactor', 'Sweden', 59.3594, 18.016],
  ['Fork and Good Inc.', '11 × 10 L pilot-scale Vibroferm reactors', 'USA', 40.7154, -74.0362],
  ['Ghent University', 'Benchtop microbial bioreactors', 'Belgium', 51.047, 3.7275],
  ['Gryyab', '5 × Dolly biogas reactors', 'Sweden', 57.6969, 11.8927],
  ['International commercial production facility', '2 × Greta multifermenter', 'Sweden', 59.854, 17.6672],
  ['International commercial production facility', 'Multiple standalone microbial reactors', 'Sweden', 59.854, 17.6672],
  ['International commercial production facility', '300 L pilot plant with heat treatment unit', 'Sweden', 59.854, 17.6672],
  ['International pharmaceutical company', '5 × standalone microbial reactors', 'Sweden', 59.3569, 17.0355],
  ['Ivyfarm', '600 L cell culture reactor', 'United Kingdom', 51.7289, -1.2096],
  ['Jästbolaget', '2 × 12 L microbial reactors', 'Sweden', 59.4718, 17.922],
  ['Kemikalia', '1000 L pilot plant', 'Sweden', 55.4787, 13.4987],
  ['KTH Royal Institute of Technology', '600 L pilot plant', 'Sweden', 59.3532, 18.0641],
  ['KTH Royal Institute of Technology', 'Multiple lab-scale bioreactors (3–20 L)', 'Sweden', 59.3532, 18.0641],
  ['KTH Royal Institute of Technology', 'Greta multifermenter', 'Sweden', 59.3532, 18.0641],
  ['Käppalaförbundet', 'Dolly biogas reactor', 'Sweden', 59.3561, 18.2294],
  ['Linköping University', 'Dolly biogas reactor', 'Sweden', 58.3978, 15.5757],
  ['Linköping University Hospital', 'Sink type EDS', 'Sweden', 58.4002, 15.6198],
  ['Linköping University Hospital', 'External decontamination system', 'Sweden', 58.4002, 15.6198],
  ['Lund University', 'Benchtop airlift bioreactors', 'Sweden', 55.7118, 13.2036],
  ['Lund University', 'Sink type EDS', 'Sweden', 55.7118, 13.2036],
  ['Lund University', 'External decontamination system', 'Sweden', 55.7118, 13.2036],
  ['MetGen', '600 L pilot plant', 'Finland', 60.4168, 22.3816],
  ['NIBIO', '4 × Dolly biogas reactors', 'Norway', 59.9093, 10.7535],
  ['Novozymes', 'Benchtop microbial bioreactors', 'Denmark', 55.6969, 12.5345],
  ['NREL', 'Dolly biogas reactor', 'USA', 39.7403, -105.1698],
  ['Octapharma', '20 L cell culture reactor', 'Sweden', 59.3381, 18.0041],
  ['Octapharma', 'Media preparation tanks', 'Sweden', 59.3381, 18.0041],
  ['Ohly GmbH', 'Stainless-steel benchtop bioreactors', 'Germany', 53.576, 10.0769],
  ['Phadia', '12 L microbial reactor', 'Sweden', 59.8485, 17.7094],
  ['Phadia', 'External decontamination system', 'Sweden', 59.8485, 17.7094],
  ['Phadia', 'Multiple benchtop microbial reactors (5–20 L)', 'Sweden', 59.8485, 17.7094],
  ['Phadia', '7 L microbial reactor', 'Sweden', 59.8485, 17.7094],
  ['PHARMAQ', 'Wastewater treatment plant', 'Norway', 60.0837, 11.1459],
  ['Previwo', '1000 L pilot plant', 'Norway', 59.932, 10.736],
  ['RISE Processum', '600 L pilot plant', 'Sweden', 63.2713, 18.7014],
  ['RISE Processum', '50 L enzymatic hydrolysis reactor', 'Sweden', 63.2713, 18.7014],
  ['RISE Processum', '4 × glass benchtop reactors', 'Sweden', 63.2713, 18.7014],
  ['RISE Processum', '4 × stainless-steel benchtop reactors', 'Sweden', 63.2713, 18.7014],
  ['RISE Processum', 'Greta multifermenter', 'Sweden', 63.2713, 18.7014],
  ['SLU Uppsala', 'Multiple Dolly biogas reactors', 'Sweden', 59.815, 17.6625],
  ['Smobya', '20 L microbial reactor', 'Hungary', 47.4477, 19.0953],
  ['Testa Center', '200 L pilot plant', 'Sweden', 59.8543, 17.6696],
  ['TFTAK', 'Benchtop airlift bioreactor', 'Estonia', 59.3969, 24.6576],
  ['Umeå University', 'Benchtop photobioreactor', 'Sweden', 63.8201, 20.3055],
  ['Valneva', 'Human vaccine production plant', 'Sweden', 59.3533, 18.0101],
  ['VEAS', 'Dolly biogas reactor', 'Norway', 59.7933, 10.4997],
];

// Customer logos in the current "Our references" carousel (names resolved from file names / old alt texts).
export const logoCustomers = [
  'Active Biotech', 'Affibody', 'AstraZeneca', 'Biovian', 'Biovitrum', 'Bioforsk', 'BioRefFuture', 'Chalmers',
  'Cobra Biologics', 'Crucell', 'Diagon', 'Fujirebio', 'GE Healthcare', 'Gedeon Richter', 'Ghent University',
  'Göteborg Energi', 'Högskolan i Borås', 'JTI', 'Karolinska Institutet', 'KTH', 'Lantmännen', 'Linköping University',
  'Linköping University Hospital', 'Lund University', 'MetGen', 'Nordic Paper', 'Novozymes', 'Octapharma', 'Ohly',
  'Pfizer', 'Phadia', 'Pharem', 'PHARMAQ', 'Probi', 'Protista', 'RISE', 'Sekab', 'SLU', 'Statoil', 'Swedish Orphan',
  'University of Oulu', 'Uppsala University', 'Valneva', 'Vegafish',
];

// Featured deliveries for the "Projects" slider: real map pins. There are no
// installation photos yet, so cards are typographic and lead with the system's
// scale. `type` is derived from the delivered system, not from the customer.
export const featuredProjects = [
  { customer: 'Valneva', system: 'Human vaccine production plant', type: 'Production plant', figure: '', icon: 'shield' },
  { customer: 'Ivyfarm', system: '600 L cell culture reactor', type: 'Cell culture', figure: '600 L' },
  { customer: 'Fork and Good Inc.', system: '11 × 10 L pilot-scale Vibroferm reactors', type: 'Parallel pilot reactors', figure: '11 × 10 L' },
  { customer: 'KTH Royal Institute of Technology', system: '600 L pilot plant, lab-scale bioreactors (3–20 L) and a Greta multifermenter', type: 'Pilot plant', figure: '600 L' },
  { customer: 'Kemikalia', system: '1000 L pilot plant', type: 'Pilot plant', figure: '1000 L' },
  { customer: 'Lund University', system: 'Sink type EDS, external decontamination system and benchtop airlift bioreactors', type: 'Biosafety', figure: '', icon: 'drop' },
  { customer: 'Octapharma', system: '20 L cell culture reactor and media preparation tanks', type: 'Cell culture', figure: '20 L' },
  { customer: 'Testa Center', system: '200 L pilot plant', type: 'Pilot plant', figure: '200 L' },
];
