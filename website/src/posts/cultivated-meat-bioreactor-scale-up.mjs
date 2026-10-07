// Research brief and verified source texts: scratchpad blog-research/cultivated-meat (not in the repo).
const c = (...ns) => `<sup>${ns.map((n) => `<a href="#src-${n}">${n}</a>`).join(', ')}</sup>`;

export default {
  slug: 'cultivated-meat-bioreactor-scale-up',
  order: 6,
  date: '2026-10-07',
  topic: 'Cultivated meat',
  title: 'Cultivated meat bioreactors and the scale-up challenge',
  seoTitle: 'Cultivated Meat Bioreactors: The Scale-Up Challenge',
  description: 'What it takes to scale up a cultivated meat bioreactor: reactor formats, cell density, cost models, food-grade design, sterility and 2020–2026 regulation.',
  excerpt: 'Cultivated meat may need animal cell cultures an order of magnitude larger than any running today, at food prices. Here is what the engineering, the cost models and the regulators say about scaling up.',
  keywords: ['cultivated meat bioreactor', 'bioreactor for cultured meat', 'cultivated meat scale-up', 'cell-cultivated meat', 'stirred-tank vs airlift bioreactor', 'microcarriers', 'perfusion bioreactor', 'food-grade bioreactor', 'cultivated meat cost', 'lab-grown meat bioreactor'],
  cover: 'cultivated-meat',
  coverAlt: 'Line drawing of a stirred-tank bioreactor with a magnified microcarrier bead covered in cells',
  products: ['pilot-and-production-bioreactors', 'sterilizable-stainless-steel-bioreactors', 'rental-bioreactor-100-l'],
  takeaways: [
    'Biopharma grows animal cells in stirred tanks of up to about 20,000 L, while some cost models say cultivated meat may need 200,000 L or more.',
    'Published cost models disagree on the best reactor size, from about 50 m³ to over 200,000 L, and their results depend on assumptions about media prices, cell density and financing.',
    'Sterile design, steam sterilization and closed, automated operation let producers work without antibiotics; the first two products cleared in the US were made that way.',
    'Staged scale-up through pilot scale, with validated data at each step, protects capital at a time when investment in the sector has fallen.',
  ],
  body: `
<p>Cultivated meat, also called cultured or cell-cultivated meat, is grown from animal cells instead of animals, and nearly every hard question about it leads to one piece of equipment. A <strong>cultivated meat bioreactor</strong> must keep fragile animal cells sterile, fed and oxygenated, as biopharma bioreactors do, but at food volumes and food prices. This article looks at what it takes to scale one up.</p>

<h2 id="bottleneck">Why bioreactor capacity is the bottleneck</h2>
<p>Biopharma grows animal cells in stainless-steel stirred tanks of up to about 20,000 L,${c(1, 2)} and animal cells have not been grown commercially beyond 25,000 L.${c(3)} A 2024 UC Davis thesis on scaling up cultivated meat puts the gap plainly:</p>
<blockquote><p>Achieving this may require culturing animal cells in bioreactors with volumes of 200,000 L or more—an order of magnitude beyond any current animal cell culture processes.</p><footer>Kiviat, UC Davis master's thesis (2024)${c(3)}</footer></blockquote>
<p>Even McKinsey's high-growth 2021 scenario, as summarized by the nonprofit Good Food Institute (GFI), puts the industry's 2030 output at 0.4% of global meat and seafood production.${c(4)} The largest cultivated meat plant, Vow's facility in Sydney, produces at 20,000 L scale with 35,000 L of total capacity.${c(5)}</p>

<h3>Cell density matters as much as volume</h3>
<p>In David Humbird's techno-economic analysis, viscosity caps a suspension culture at about 86 million cells/mL, or 258 g/L of wet cells, for a 3,000 pg cell. In fed-batch, ammonia stops an unoptimized cell line at 7 g/L, a metabolically enhanced line reaches 110 g/L, and above 20 m³ the difficulty of removing CO<sub>2</sub> lowers the reachable density further.${c(1)} Most companies in GFI's survey observed 20–100 g/L, and larger producers aimed for over 50 million cells/mL.${c(4)} Believer Meats researchers reported 130 million cells/mL, or 43% w/v (430 g/L, our conversion), with continuous tangential flow filtration,${c(6)} though GFI noted that the company's earlier high-yield result needed perfusion rates that may be too costly at scale.${c(4)}</p>
<p>Cell counts mislead when cell size differs, so GFI recommends reporting yield in g/L.${c(4)} Smaller cells reach higher number densities but the same maximum mass density.${c(1)} At 3,000 pg per cell, 50 million cells/mL is about 150 g/L (our calculation).</p>

<h2 id="reactor-types">Cultivated meat bioreactor types and cell formats</h2>
<p>Stirred tanks dominate: 20 of 22 companies in GFI's survey used them for proliferation, while 10 reported airlift, rocking-bed, fixed-bed or hollow-fiber reactors.${c(4)} According to GFI, they also keep sterility better and bubble less than airlift reactors at scale.${c(2)}</p>
<div class="table-scroll"><table>
  <thead><tr><th scope="col">Reactor</th><th scope="col">Working volume per kg of adherent cells (2019 estimate)</th><th scope="col">Strengths</th><th scope="col">Limits</th></tr></thead>
  <tbody>
    <tr><th scope="row">Stirred tank</th><td>About 570 L</td><td>Most know-how; single cells, aggregates or microcarriers</td><td>Shear from impellers and bubbles; CO<sub>2</sub> removal at very large volume</td></tr>
    <tr><th scope="row">Airlift</th><td>Not estimated</td><td>No moving parts, lower shear and power use; proposed for very large volumes</td><td>Little animal-cell data; mixing and oxygen transfer may be too low</td></tr>
    <tr><th scope="row">Packed (fixed) bed</th><td>About 110 L</td><td>Compact, perfused culture of adherent cells</td><td>Reported densities come from 1–5 L units; harvesting adherent cells is hard</td></tr>
    <tr><th scope="row">Hollow fiber</th><td>About 1.4 L</td><td>Very high density, low mechanical stress</td><td>Complex, clogs, limited oxygenation, hard to scale, costly</td></tr>
  </tbody>
</table></div>
<p>The volumes come from a 2019 back-of-the-envelope calculation at each format's theoretical maximum density; seed-train vessels come on top, and the medium needed far exceeds the working volume.${c(7)} Strengths and limits draw on GFI and a 2023 review.${c(2, 4, 8)}</p>
<p>Most meat cell types are anchorage-dependent, so they need a surface or must be adapted to suspension, as CHO cells were.${c(2)} Counts are from 23 companies in GFI's survey; the other entries draw on GFI and two reviews:${c(2, 4, 7, 8)}</p>
<div class="table-scroll"><table>
  <thead><tr><th scope="col">Cell format</th><th scope="col">Companies</th><th scope="col">Advantages</th><th scope="col">Challenges</th></tr></thead>
  <tbody>
    <tr><th scope="row">Single-cell suspension</th><td>13</td><td>Scales like biopharma culture; common among larger producers</td><td>Cells must be adapted to grow without a surface</td></tr>
    <tr><th scope="row">Aggregates</th><td>9</td><td>No carrier; also common among larger producers</td><td>Shear-sensitive; large aggregates can develop necrotic cores</td></tr>
    <tr><th scope="row">Microcarriers</th><td>10</td><td>A surface for adherent cells inside a stirred tank</td><td>Detaching cells can be inefficient or kill them</td></tr>
    <tr><th scope="row">Scaffolds</th><td>4</td><td>Structure and texture; edible ones stay in the product</td><td>Usually made outside the reactor; edible scaffolds that keep cells viable remain hard</td></tr>
  </tbody>
</table></div>
<p>Computational fluid dynamics (CFD) simulations from 200 L to 200,000 L suggest that, at constant power per volume and gas velocity, conditions stay acceptable for suspended cells, but the smallest turbulent eddies may damage cells on microcarriers or in large aggregates.${c(3)}</p>

<h2 id="economics">What the cost models conclude, and where they disagree</h2>
<p>Techno-economic analyses (TEAs) are models, not measurements: each result depends on assumed media prices, cell density, equipment grade and financing, and three published studies make quite different choices.</p>
<div class="table-scroll"><table>
  <thead><tr><th scope="col">Study</th><th scope="col">Plant modeled</th><th scope="col">Production cost</th><th scope="col">Key assumptions</th></tr></thead>
  <tbody>
    <tr><th scope="row">Humbird (2021)${c(1)}</th><td>24 × 20 m³ fed-batch stirred tanks; 6.8 kt/yr; $328 million</td><td>$37/kg; $22/kg with plant hydrolysate media; perfusion $51/kg</td><td>316L to ASME BPE; Class 8 clean rooms; metabolically enhanced cells</td></tr>
    <tr><th scope="row">UC Davis (2023)${c(9)}</th><td>Stirred tanks of about 42,000 L or 211,000 L, or 262,000 L airlifts</td><td>$35, $25 and $17/kg</td><td>Food-grade 304 steel; 100 g/L; no antibiotics</td></tr>
    <tr><th scope="row">CE Delft (2021, corrected)${c(10)}</th><td>10 kt/yr; about $450 million in the baseline</td><td>$6.43/kg best case</td><td>Food-grade hygiene, no clean rooms; growth factors over 1,000 times cheaper; 30-year payback</td></tr>
  </tbody>
</table></div>
<p>CE Delft's November 2021 corrigendum dropped a scenario that proved physically impossible under its assumptions, leaving a best case of $6.43/kg. That case also needs far cheaper recombinant proteins, shorter runs and larger cells; with a commercial four-year payback it rises to about $13.40/kg.${c(10)} The studies also disagree on reactor size. Humbird finds an optimum near 50 m³, because in bigger tanks the density lost to CO<sub>2</sub> outweighs the economy of scale.${c(1)} In the UC Davis model, costs fell as reactors grew,${c(9)} and a later UC Davis thesis notes that stirred tanks reached price parity with beef only above 200,000 L.${c(3)} No one has yet grown animal cells commercially at that scale, so the question is unresolved.</p>
<p>In a 2020 GFI analysis, growth factors made up over 99% of the $377/L bench-scale cost of Essential 8, a widely used animal-free medium, and its scenarios reached $0.24/L; experts expected media to be 55% to over 95% of marginal cost.${c(11)} Survey respondents reported about $100,000 per 100 L of bioreactor capacity, from only six responses, with 6–12-month lead times.${c(4)}</p>
<p>Money is tighter too. Cultivated meat and seafood companies raised $73.9 million in 2025, down from $144 million in 2024,${c(5)} and Believer Meats, despite US regulatory clearance and a new plant in North Carolina, ceased operations in December 2025.${c(12)} GFI also reports that operating capacity, sustained output and run reliability improved in 2025.${c(5)} Capital efficiency, meaning validated output per dollar of steel, now matters as much as the modeled cost per kilogram.</p>

<h2 id="food-grade">Food-grade design and sterility without antibiotics</h2>
<h3>Food-grade or pharma-grade equipment?</h3>
<p>Humbird assumed full-vacuum 316L vessels to ASME BPE and Class 8 clean rooms, noting that <q>Equipment and facilities with adequate microbial contamination safeguards have high capital costs.</q>${c(1)} The other two models assume leaner plants: food-grade 304 stainless steel at UC Davis, and food-grade hygiene without clean rooms at CE Delft.${c(9, 10)} Industry practice is mixed: of 25 companies in GFI's survey, five used only food-grade equipment, four only pharmaceutical-grade and seven both.${c(4)}</p>
<blockquote><p>The most common reason reported for using pharmaceutical-grade equipment was a lack of high-quality food-grade options.</p><footer>GFI, Trends in cultivated meat scale-up and bioprocessing (2024)${c(4)}</footer></blockquote>
<p>GFI adds that the difference sometimes lies in certifications rather than material quality. Grade 316 resists acids, alkalis and chlorides better than 304 but costs about 40% more; whether 304 survives long-term production and harsh CIP chemicals is still open.${c(4)}</p>
<h3>Sterility without antibiotics</h3>
<p>In biopharma, contamination accounts for about 3% of batch failures, and that industry often grows cells without antibiotics at significant scale.${c(4)} Antibiotics can also slow growth: primary bovine myoblasts proliferate significantly less with them. GFI argues that aseptic technique, preventive controls and sterilization <q>make antibiotic and/or antimycotic use in cell culture mediums unnecessary</q>.${c(2)} Of 23 companies surveyed, 11 used none, nine used them only for cell line development or banking, and three also in production; the first two products cleared in the US were made without them.${c(4)} Sterility then rests on equipment and procedure:</p>
<ul>
  <li>Media: nearly all of 21 respondents filtered media at 0.2 µm; mycoplasma needs 0.1 µm, and high-temperature short-time (HTST) treatment can damage heat-sensitive vitamins and proteins.${c(4)}</li>
  <li>Vessels and lines: cleaning, then steam sterilization, usually at 121 °C or more, with sterile filters on inlets and positive pressure afterwards.${c(2)}</li>
  <li>Viruses: nanofiltration is likely too costly, so testing before cell banking carries the load.${c(4)}</li>
</ul>

<h2 id="regulation">Regulation, 2020–2026</h2>
<p>Regulators review the process, not only the product: the FDA's second consultation covered cell lines and banks, manufacturing controls and all inputs. In the FDA's words, the voluntary pre-market consultation <q>is not an approval process</q>; it ends when the agency has no further questions about the firm's safety conclusion. USDA's Food Safety and Inspection Service then grants inspection of the plant and a mark of inspection for the product.${c(13)} Milestones as of October 2026:</p>
<div class="table-scroll"><table>
  <thead><tr><th scope="col">Year</th><th scope="col">Where</th><th scope="col">Milestone</th></tr></thead>
  <tbody>
    <tr><th scope="row">2020</th><td>Singapore</td><td>Sale of Eat Just's cultivated chicken approved (December)${c(14)}</td></tr>
    <tr><th scope="row">2022–2025</th><td>United States</td><td>FDA completes consultations for UPSIDE Foods (November 2022) and GOOD Meat (March 2023), then three more in 2025 (pork fat, salmon, chicken); USDA grants the first two inspection and label approval (June 2023)${c(13, 15, 16, 17)}</td></tr>
    <tr><th scope="row">2023, 2025</th><td>Italy, Hungary</td><td>Parliaments ban production and sale (Italy, November 2023; Hungary, reported December 2025)${c(18, 19)}</td></tr>
    <tr><th scope="row">2024</th><td>Israel</td><td>No-questions letter for Aleph Farms' beef process (January), subject to labeling rules and a GMP inspection${c(20)}</td></tr>
    <tr><th scope="row">2024–2025</th><td>United Kingdom</td><td>Meatly cleared for cultivated chicken in pet food (July 2024); first dog treats on sale (February 2025)${c(21, 22)}</td></tr>
    <tr><th scope="row">2024–2025</th><td>European Union</td><td>First applications: Gourmey's foie gras (July 2024), Mosa Meat's beef fat (January 2025)${c(23, 24)}</td></tr>
    <tr><th scope="row">2024–2026</th><td>US states</td><td>Florida and Alabama bans (2024); seven states by June 2025, Texas until September 2027; appeals court declines to block Florida's ban (March 2026)${c(25, 26, 27, 28)}</td></tr>
    <tr><th scope="row">2025</th><td>Australia, New Zealand</td><td>FSANZ approves cell-cultured quail (April); Food Standards Code amendments registered (June)${c(29, 30)}</td></tr>
  </tbody>
</table></div>
<p>GFI's April 2026 report lists Singapore, the United States and Australia as the markets where cultivated meat can be sold.${c(5)} The EU safety assessment by EFSA is expected to take at least 18 months,${c(23)} and the European Commission has said Italy's ban breached an EU scrutiny procedure.${c(31)} In the UK, two human-food applications are in risk assessment, with completion targeted for February 2027.${c(32)} Confirm the requirements for your market with your QA team and the regulator.</p>

<h2 id="engineering">What it means for bioreactor design</h2>
<h3>Hygienic design, CIP and SIP</h3>
<p>Proliferation usually runs one to four weeks, so the sterile boundary must hold for a long time; 16 of 22 companies in GFI's survey used CIP, SIP or both.${c(4)} Even CE Delft's lean food-grade standard includes frequent cleaning, steam sterilization of reactors and piping above 135 °C, electropolished and passivated surfaces, pressurized vessels and automated cleaning.${c(10)} GFI doubts that single-use bags make economic sense for cultivated meat unless they become much cheaper (see <a href="single-use-vs-stainless-steel-bioreactors.html">single-use versus stainless-steel bioreactors</a>).${c(2)}</p>
<h3>Automation and data</h3>
<p>Automation cuts labor, contamination risk and batch-to-batch variation, and works best when designed in from the start.${c(2)} Operator error was the leading cause of commercial biopharma batch failures in 2022; cultivated meat companies most often automate feeding, pH and dissolved oxygen control, online measurements, CIP and SIP. All 22 respondents tracked pH, and most also glucose, lactate, ammonium, pO<sub>2</sub> and pCO<sub>2</sub>.${c(4)}</p>
<h3>Staged scale-up through pilot scale</h3>
<p>Because many factors change with scale, GFI recommends validating models and gathering new data before each step up, through bench (below 25 L), pre-pilot (25–100 L), pilot (100–1,000 L), demonstration (1,000–50,000 L) and commodity scale (above 50,000 L of production volume).${c(4)} Scale-down models and CFD can test shear, gassing and mixing before steel is ordered; our guide to <a href="bioreactor-scale-up.html">bioreactor scale-up</a> explains the criteria.${c(2, 3)} Before specifying a cultivated meat bioreactor, settle:</p>
<ul>
  <li>The cell format, which decides the reactor type and shear limits.</li>
  <li>The target density in g/L, the operating mode and the medium volume per kilogram.</li>
  <li>Oxygen supply and CO<sub>2</sub> removal at the final scale.</li>
  <li>Where 316L is needed and where 304 could do.</li>
  <li>The sterile boundary: SIP, media sterilization, positive pressure, no antibiotics.</li>
  <li>Sensors that survive sterilization, a central batch record and an audit trail.</li>
  <li>The pilot results that will justify the next step and investment.</li>
</ul>

<h2 id="faq">Frequently asked questions</h2>
<h3>How big does a cultivated meat bioreactor need to be?</h3>
<p>There is no settled answer. Biopharma's largest animal cell reactors hold about 20,000 L, Humbird's cost model puts the optimum near 50 m³, and UC Davis modeling favors 200,000 L or more.</p>
<h3>Can cultivated meat be made without antibiotics?</h3>
<p>Yes. Biopharma does it at large scale, 11 of 23 surveyed companies used none, and the first two products cleared in the US were made without them. It takes sterile design, steam sterilization and filtered media.</p>
<h3>Does cultivated meat need pharmaceutical-grade equipment?</h3>
<p>Not necessarily. Recent cost models assume food-grade hygiene and 304 steel, but many companies still use pharma-grade equipment for lack of good food-grade options. Check what your process needs with your QA team and regulator.</p>
<h3>Where can cultivated meat be sold?</h3>
<p>GFI's April 2026 report lists Singapore, the United States and Australia. Israel has cleared one process with conditions and EU applications are under review, while Italy, Hungary and several US states ban it.</p>

<h2 id="belach">Bioreactors for cultured meat from Belach</h2>
<p>Belach Bioteknik builds bioreactor systems for FoodTech, including cultured meat. Our <a href="../products/sterilizable-stainless-steel-bioreactors.html">in-situ sterilizable stainless-steel bioreactors</a> cover 5–1,000 L working volume, with a hygienic bottom magnetic coupled stirrer and steam sterilization in place, and list cultured meat among their fields of application. The <a href="../products/pilot-and-production-bioreactors.html">pilot and production systems</a> (10–1,000 L) are made for R&amp;D, pilot runs and early-stage production. Both are controlled by BioPhantom©, the same software from lab to production scale. For 100 L data on your own site without a large down payment, you can rent our <a href="../products/rental-bioreactor-100-l.html">100 L cell culture bioreactor</a>. <a href="../contact.html#quote">Tell us about your process</a>.</p>
`,
  sources: [
    { n: 1, title: 'Humbird D. Scale-up economics for cultured meat', publisher: 'Biotechnology and Bioengineering', year: 2021, url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8362201/' },
    { n: 2, title: 'Cultivated meat bioprocess design (deep dive)', publisher: 'The Good Food Institute', year: '', url: 'https://gfi.org/deep-dive-cultivated-meat-bioprocess-design/' },
    { n: 3, title: 'Kiviat K. Integration of CFD bioreactor models with cell growth models for the scale-up of cultivated meat (master\'s thesis)', publisher: 'University of California, Davis', year: 2024, url: 'https://escholarship.org/uc/item/1kq0r745' },
    { n: 4, title: 'Trends in cultivated meat scale-up and bioprocessing', publisher: 'The Good Food Institute', year: 2024, url: 'https://gfi.org/cm-bioprocessing-survey-pdf' },
    { n: 5, title: '2026 State of the Industry report: cultivated meat, seafood, and ingredients', publisher: 'The Good Food Institute', year: 2026, url: 'https://gfi.org/resource/cultivated-meat-and-seafood-state-of-the-industry-report/' },
    { n: 6, title: 'Pasitka L et al. Empirical economic analysis shows cost-effective continuous manufacturing of cultivated chicken using animal-free medium', publisher: 'Nature Food', year: 2024, url: 'https://pubmed.ncbi.nlm.nih.gov/39179871/' },
    { n: 7, title: 'Allan SJ, De Bank PA, Ellis MJ. Bioprocess design considerations for cultured meat production with a focus on the expansion bioreactor', publisher: 'Frontiers in Sustainable Food Systems', year: 2019, url: 'https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2019.00044/full' },
    { n: 8, title: 'Kulus M et al. Bioreactors, scaffolds and microcarriers and in vitro meat production—current obstacles and potential solutions', publisher: 'Frontiers in Nutrition', year: 2023, url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10513094/' },
    { n: 9, title: 'Negulescu PG et al. Techno-economic modeling and assessment of cultivated meat: impact of production bioreactor scale (abstract; engineering assumptions from the 2022 engrXiv preprint)', publisher: 'Biotechnology and Bioengineering', year: 2023, url: 'https://pubmed.ncbi.nlm.nih.gov/36581609/' },
    { n: 10, title: 'Vergeer R, Sinke P, Odegard I. TEA of cultivated meat: future projections of different scenarios (corrigendum)', publisher: 'CE Delft', year: 2021, url: 'https://gfieurope.org/wp-content/uploads/2022/04/CE_Delft_190254_TEA_of_Cultivated_Meat_FINAL_corrigendum.pdf' },
    { n: 11, title: 'Specht L. An analysis of culture medium costs and production volumes for cultivated meat', publisher: 'The Good Food Institute', year: 2020, url: 'https://gfi.org/wp-content/uploads/2021/01/clean-meat-production-volume-and-medium-cost.pdf' },
    { n: 12, title: 'Believer Meats makes "difficult decision" to cease operations', publisher: 'AgFunderNews', year: 2025, url: 'https://agfundernews.com/breaking-believer-meats-ceases-operations-but-setback-does-not-mean-cultivated-meat-sector-is-doomed-insists-amps' },
    { n: 13, title: 'FDA Completes Second Pre-Market Consultation for Human Food Made Using Animal Cell Culture Technology', publisher: 'U.S. Food and Drug Administration', year: 2023, url: 'https://www.fda.gov/food/hfp-constituent-updates/fda-completes-second-pre-market-consultation-human-food-made-using-animal-cell-culture-technology' },
    { n: 14, title: 'Singapore Approves Sale of Lab-Grown Meat', publisher: 'VOA Learning English (adapted from Reuters)', year: 2020, url: 'https://learningenglish.voanews.com/a/singapore-approves-sale-of-lab-grown-meat/5687330.html' },
    { n: 15, title: 'BREAKING NEWS: U.S. FDA Completes First Pre-Market Consultation for Food Made by Cultured Animal Cells', publisher: 'Keller and Heckman LLP', year: 2022, url: 'https://khlaw.com/insights/breaking-news-us-fda-completes-first-pre-market-consultation-food-made-cultured-animal' },
    { n: 16, title: 'Inventory of Completed Pre-market Consultations for Human Food Made with Cultured Animal Cells', publisher: 'U.S. Food and Drug Administration', year: 2025, url: 'https://www.fda.gov/food/human-food-made-cultured-animal-cells/inventory-completed-pre-market-consultations-human-food-made-cultured-animal-cells' },
    { n: 17, title: 'USDA approves 1st ever \'cell-cultivated meat\' for 2 American manufacturers', publisher: 'ABC News', year: 2023, url: 'https://abcnews.go.com/food/story/fda-approves-1st-cell-cultivated-meat-upside-foods-100278334' },
    { n: 18, title: 'Italy \'risks infraction procedure\' over cultivated-meat ban', publisher: 'ANSA', year: 2023, url: 'https://www.ansa.it/english/news/politics/2023/11/17/italy-risks-infraction-procedure-over-cultivated-meat-ban_3c485f0e-160b-4cb3-9400-e900951e1cad.html' },
    { n: 19, title: 'Hungary Bans Cultured Meat', publisher: 'ESM Magazine', year: 2025, url: 'https://www.esmmagazine.com/fresh-produce/hungary-bans-cultured-meat-300997' },
    { n: 20, title: 'Aleph Farms\' cultivated beef process receives blessing from Israeli government', publisher: 'TechCrunch', year: 2024, url: 'https://techcrunch.com/2024/01/17/aleph-farms-cultivated-beef-process-regulatory-approval-israel/' },
    { n: 21, title: 'Meatly gets UK approval for use of cultivated meat in pet food', publisher: 'FoodNavigator', year: 2024, url: 'https://www.foodnavigator.com/Article/2024/07/17/Meatly-gets-UK-approval-for-use-of-cultivated-meat-in-pet-food/' },
    { n: 22, title: 'World\'s first cultivated meat dog treat goes on sale at Pets at Home', publisher: 'Food Manufacture', year: 2025, url: 'https://www.foodmanufacture.co.uk/Article/2025/02/06/meatly-and-the-pack-launch-pet-treats-made-from-lab-grown-meat-into-pets-at-home' },
    { n: 23, title: 'A French company has filed the first application to sell cultivated meat in Europe', publisher: 'Eunews', year: 2024, url: 'https://www.eunews.it/en/2024/07/26/french-sell-cultivated-meat-europe/' },
    { n: 24, title: 'Mosa Meat submits cultivated fat application to EU', publisher: 'FoodNavigator', year: 2025, url: 'https://www.foodnavigator.com/Article/2025/01/22/mosa-meat-submits-application-to-eu/' },
    { n: 25, title: 'Governor DeSantis Signs Legislation to Keep Lab-Grown Meat Out of Florida', publisher: 'Executive Office of the Governor of Florida', year: 2024, url: 'https://www.flgov.com/eog/news/press/2024/governor-desantis-signs-legislation-keep-lab-grown-meat-out-florida' },
    { n: 26, title: 'Alabama SB23, enrolled act (Act 2024-252)', publisher: 'Alabama Legislature (copy hosted by the Penn State Center for Agricultural and Shale Law)', year: 2024, url: 'https://aglaw.psu.edu/wp-content/uploads/2024/05/03-AL-SB23-5.7.24.pdf' },
    { n: 27, title: 'Texas Becomes Seventh State to Ban Cultivated Meat', publisher: 'Food Safety Magazine', year: 2025, url: 'https://www.food-safety.com/articles/10473-texas-becomes-seventh-state-to-ban-cultivated-meat' },
    { n: 28, title: 'Federal appeals court upholds Florida\'s ban on lab-grown meat', publisher: 'WUSF (News Service of Florida)', year: 2026, url: 'https://www.wusf.org/health-news-florida/2026-03-25/federal-appeals-court-upholds-floridas-ban-on-lab-grown-meat' },
    { n: 29, title: 'First cell-cultured food approved by FSANZ Board', publisher: 'Food Standards Australia New Zealand', year: 2025, url: 'https://www.foodstandards.gov.au/news/first-cell-cultured-food-approved-fsanz-board' },
    { n: 30, title: 'Explanatory statement: Food Standards (Application A1269 – Cultured quail as a novel food – Consequential Amendments) Variation', publisher: 'Federal Register of Legislation (Australia)', year: 2025, url: 'https://www.legislation.gov.au/F2025L00689/asmade/2025-06-18/es/original/pdf' },
    { n: 31, title: 'Italy bans lab-grown meat, violating EU procedure', publisher: 'Osborne Clarke', year: 2024, url: 'https://osborneclarke.com/insights/italy-bans-lab-grown-meat-violating-eu-procedure' },
    { n: 32, title: 'Regulatory Sandbox for Cell-Cultivated Products (CCPs), Business Committee paper', publisher: 'Food Standards Agency', year: 2026, url: 'https://www.gov.uk/government/publications/fsa-bc-260308-regulatory-sandbox-for-cell-cultivated-products-ccps/regulatory-sandbox-for-cell-cultivated-products-ccps' },
  ],
};
