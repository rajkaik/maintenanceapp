// Research brief and verified source texts: scratchpad blog-research/single-use (not in the repo).
const c = (...ns) => `<sup>${ns.map((n) => `<a href="#src-${n}">${n}</a>`).join(', ')}</sup>`;

export default {
  slug: 'single-use-vs-stainless-steel-bioreactors',
  order: 2,
  date: '2026-10-07',
  topic: 'Equipment',
  title: 'Single-use vs stainless steel bioreactors: how to choose',
  seoTitle: 'Single-Use vs Stainless Steel Bioreactors: How to Choose',
  description: 'Single-use vs stainless steel bioreactor: compare capital and running costs, changeover, scale, microbial limits, leachables and the latest carbon data.',
  excerpt: 'Single-use has taken over much of clinical manufacturing, but stainless steel still runs the largest and most demanding processes. Here is how cost, scale, heat and oxygen transfer, validation and carbon data should guide you.',
  keywords: ['single-use vs stainless steel bioreactor', 'single-use bioreactor', 'stainless steel bioreactor', 'single-use bioreactor advantages and disadvantages', 'bioreactor total cost of ownership', 'single-use life cycle assessment', 'single-use fermenter', 'extractables and leachables', 'USP 665', 'hybrid bioprocessing facility'],
  cover: 'single-use',
  coverAlt: 'Line drawing of a single-use bioreactor bag in its holder next to a jacketed stainless-steel bioreactor',
  products: ['sterilizable-stainless-steel-bioreactors', 'pilot-and-production-bioreactors', 'benchtop-bioreactor-systems'],
  takeaways: [
    'Single-use bioreactors suit multiproduct clinical supply, fast capacity additions and mammalian cell culture up to about 2,000 L; stainless steel (and glass at the bench) remains stronger for high-density microbial fermentation, very large volumes and long-running products.',
    'Published cost models disagree, so model the crossover for your own annual demand, utilization and number of products instead of relying on a headline savings figure.',
    'Early life cycle assessments favored single-use, but a 2026 study at Roche sites found steel lower in carbon for the operations it compared, under low-carbon energy and updated plastic data, and its authors call for a new, complete assessment.',
    'Single-use shifts validation toward suppliers, leachables and bag integrity, and USP &lt;665&gt; now covers plastic parts in reusable equipment too.',
  ],
  body: `
<p>Few equipment decisions shape a biomanufacturing plant as much as the choice of single-use vs stainless steel bioreactor. Single-use has taken much of the clinical market: in BioPlan Associates' survey for 2023, single-use equipment was used in 64.0% of upstream clinical production processes, up from 45.0% in 2021.${c(1)} Yet most high-volume commercial production still relies on stainless steel, including bioreactors of more than 10,000 L.${c(2)}</p>
<p>A disclosure: Belach builds reusable glass and stainless-steel bioreactors, not single-use systems, so we have tried to say plainly where single-use is the better choice.</p>

<h2 id="short-answer">Single-use vs stainless steel bioreactor: the short answer</h2>
<p><strong>Single-use bioreactors</strong> are usually the better fit for multiproduct clinical supply, for adding capacity quickly and for mammalian cell culture at up to about 2,000 L. <strong>Stainless-steel bioreactors</strong>, and glass ones at the bench, usually win for high-density microbial fermentation, for volumes well beyond 2,000 L and for long-running, high-demand products, where heat and oxygen transfer, pressure tolerance and steam sterilization pay off. Many plants combine the two.</p>
<div class="table-scroll"><table>
  <thead><tr><th scope="col">Factor</th><th scope="col">Single-use</th><th scope="col">Stainless steel</th><th scope="col">Hybrid</th></tr></thead>
  <tbody>
    <tr><th scope="row">Capital and time to capacity</th><td>Lower; months to add capacity</td><td>Higher; built for peak capacity</td><td>Builds on existing steel</td></tr>
    <tr><th scope="row">Running costs</th><td>Driven by consumables</td><td>Driven by utilities, cleaning and labor</td><td>A mix, with fewer large bags</td></tr>
    <tr><th scope="row">Changeover (one 200 L example)</th><td>Under 3 h</td><td>Over 24 h</td><td>Depends on what stays in steel</td></tr>
    <tr><th scope="row">Validation focus</th><td>Suppliers, leachables, bag integrity</td><td>Cleaning and steam-in-place (SIP)</td><td>Both</td></tr>
    <tr><th scope="row">Utilities and waste</th><td>Less water and steam; plastic waste</td><td>Water, steam, cleaning chemicals</td><td>Less plastic than full single-use</td></tr>
    <tr><th scope="row">Practical maximum volume</th><td>Typically 2,000 L; 6,000 L from one supplier</td><td>Over 10,000 L; microbial up to 2,000,000 L</td><td>Depends on the bioreactor chosen</td></tr>
    <tr><th scope="row">High-density microbial work</th><td>Purpose-built fermenters, up to about 1,000 L</td><td>Yes: jacket cooling, pressure, SIP</td><td>Steel or purpose-built single-use</td></tr>
    <tr><th scope="row">Best fit</th><td>Multiproduct clinical supply, cell culture</td><td>High-demand, long-running products; microbial work</td><td>Bulk media and buffer in steel</td></tr>
  </tbody>
</table></div>

<h2 id="cost">Cost and total cost of ownership</h2>
<h3>Capital and time to capacity</h3>
<p>A 2001 University College London (UCL) model of an <i>E. coli</i> antibody-fragment process put the capital for a disposables-based plant at under 60% of a conventional one.${c(3)} A 2016 review by authors at Natrix Separations, a membrane chromatography company, cites a model in which thirty 2,000 L single-use bioreactors needed $250 million of capital against $352 million for equivalent stainless steel.${c(4)} EMD Millipore, another supplier, reported adding single-use capacity in two to three months against 6–12 months for steel,${c(5)} and in the UCL model, launching nine months earlier made the two plants' net present values equal.${c(3)}</p>
<h3>Running costs</h3>
<p>Here the evidence conflicts. The UCL model found running costs 70% higher for disposables.${c(3)} The Natrix review cites one model with 22% lower operating cost per gram for single-use and another with 51% higher consumables costs, and notes that many manufacturers share cost data only at conferences.${c(4)} Treat any single savings figure as a scenario, not a fact. Even John Puglia, who directs single-use R&amp;D at Thermo Fisher Scientific, says: <q>Though stainless-steel has higher upfront cost, if you have a blockbuster drug, it could provide more long-term savings because of its durability</q>.${c(6)}</p>
<h3>Where the crossover sits</h3>
<ul>
  <li><strong>Annual demand.</strong> A 2021 UCL model found that single-use continuous plants cut cost of goods by about 35% against stainless-steel batch plants at 100–500 kg a year, but differed by only about ±10% at 1–3 metric tons (the comparison also changes the process mode).${c(7)}</li>
  <li><strong>Utilization.</strong> A steel plant is built for peak capacity,${c(6)} which is wasted if demand falls short,${c(4)} while high, steady demand spreads its cost over many batches.${c(6)}</li>
  <li><strong>Number of products.</strong> Each changeover in steel means cleaning and downtime. ABEC, which sells both technologies, sees multiproduct facilities, smaller quantities and higher titers as favoring single-use, though not absolutely.${c(8)}</li>
</ul>
<p>For existing plants, Lorenz Hasler of KBI Biopharma notes: <q>With the cost of construction, commissioning, and automation, it often doesn’t make financial sense to convert an entire facility.</q>${c(6)}</p>

<h2 id="validation">Changeover, validation and supply</h2>
<p>Single-use moves validation work rather than removing it. At EMD Millipore's single-use facility in France, changeover of a 200 L seed bioreactor fell from more than 24 hours in stainless steel to under three hours, with no carryover.${c(5)} A steel bioreactor needs validated cleaning, as the FDA has long expected,${c(9)} and steam-in-place sterilization that EU GMP Annex 1 expects to be validated and monitored for temperature, pressure and time.${c(10)}</p>
<h3>Supplier qualification and bag integrity</h3>
<p>Single-use shifts part of the sterility assurance to the supplier. Annex 1 calls supplier assessment critical, wants evidence of sterilization checked for every unit on receipt, and lists risks specific to single-use, including leachables, leaks and particles. Its second item reads:</p>
<blockquote><p>The fragile nature of the system compared with fixed reusable systems.</p><footer>EU GMP Annex 1 (2022)${c(10)}</footer></blockquote>
<p>A 2026 study based on Roche sites counted defects such as perforated film and broken stirrer blades in 11% of bioreactor bags and 2% of mixing bags over three years.${c(11)} The bags were discarded before use, so this is not a batch-failure rate, and the authors stress that the rates are specific to those sites. Budget for spares and incoming inspection anyway.</p>
<h3>Supply risk</h3>
<p>In 2021, ABEC reported that other suppliers' lead times for single-use bags and tube sets had reached 10–12 months,${c(12)} and contract manufacturers overordered equipment and consumables to protect themselves.${c(1)} Switching bag supplier is not quick either: under USP &lt;665&gt;, a new component needs its own assessment unless equivalence to a qualified one can be shown.${c(13)}</p>

<h2 id="leachables">Extractables and leachables</h2>
<p>Plastics can release compounds into the process stream. A well-documented case is bDtBPP, formed from the polyethylene antioxidant Irgafos 168, which harmed several mammalian cell lines at well below one part per million; experiments suggest that irradiation is important for its formation.${c(14)} Single-use bags are presterilized by irradiation, at 25–40 kGy in one supplier's data sheet.${c(15)}</p>
<p>Yet almost all process equipment contains some polymer that can touch the product.${c(13)} USP &lt;665&gt;, official since 1 May 2026, covers both single-use systems, such as bioreactor bags and tubing, and reusable plastic parts such as the O-rings, gaskets and filters of a steel bioreactor; rubber elastomers fall under USP &lt;381&gt;. It is risk-based, sets requirements for products made or sold in the United States, and makes the drug manufacturer, not the equipment supplier, responsible.${c(13)} Confirm the implications with your own QA function.</p>

<h2 id="microbial">Scale, oxygen and heat: microbial fermentation vs cell culture</h2>
<p>In 2019, most suppliers stopped at 2,000 L when ABEC launched a single-use bioreactor with working volumes up to 6,000 L; liquid weight and pressure on the bag have traditionally set the limit.${c(8)} Industrial microbial fermenters, by contrast, range from 20,000 to 2,000,000 L.${c(16)}</p>
<h3>Oxygen transfer</h3>
<p>The claim that single-use cannot do microbial work is out of date, but a standard cell-culture bag cannot. In a 2015 vendor article, Thermo Fisher wrote that the k<sub>L</sub>a of single-use cell-culture bioreactors invariably falls below 20 h⁻¹, while steam-in-place fermenters can exceed 400 h⁻¹, and reported over 600 h⁻¹ for its own single-use fermenter.${c(17)} Researchers at Sartorius Stedim Biotech named the problem:</p>
<blockquote><p>The main limitations are a relatively low oxygen transfer rate and cooling capacity.</p><footer>Dreher et al., Advances in Biochemical Engineering/Biotechnology (2014)${c(18)}</footer></blockquote>
<p>Even so, by staying within a control space derived from engineering measurements, they reached 60.8 g/L dry cell weight with <i>E. coli</i> and 381 g/L wet cell weight with <i>Pichia pastoris</i>, comparable to stainless steel.${c(18)}</p>
<p>Check vendor figures independently. A 2021 study at Ipsen measured a maximum k<sub>L</sub>a of 47 h⁻¹ in a small single-use vessel for which its manufacturer reported 2,500 h⁻¹, a 53-fold gap the authors attribute to the sulfite method behind the vendor figure. Their advice: measure k<sub>L</sub>a in your own vessels, whoever made them.${c(19)}</p>
<h3>Heat, pressure and sterilization</h3>
<p>Amgen engineers estimated that a microbial culture taking up about 300 mmol/L/h of oxygen generates about 150 kJ/kg/h of heat,${c(20)} roughly 42 W/kg (our calculation). One supplier's 500 L single-use bioreactor for cell culture is specified for a nominal heating and cooling load of 5,000 W, about 10 W/L (our calculation), with a maximum bag pressure of 0.03 bar and operation up to 40 °C.${c(15)} Steel fermenters can raise headspace pressure to improve oxygen transfer and sterilize media in place, although their cooling surface per unit volume shrinks as they grow.${c(20)} Our article on <a href="bioreactor-scale-up.html">bioreactor scale-up</a> explains why.</p>
<p>Purpose-built single-use fermenters, such as the 30 L and 300 L units Thermo Fisher launched in 2014, add water jackets, high-flow exhaust and more agitation; the supplier reported cell densities typical of steel fermenters.${c(17)} A 2025 review lists single-use fermenters at 50–1,000 L,${c(2)} far below industrial scale.</p>

<h2 id="environment">Environmental footprint: the evidence is unsettled</h2>
<p>Single-use was long seen as the greener option.</p>
<h3>The early life cycle assessments</h3>
<p>A 2008 study by Sinclair and colleagues found that a disposables-based antibody facility used 13,524 L of water per batch against 104,534 L for stainless steel, and emitted 25% less CO<sub>2</sub>, partly because its single-use plant design was 38% smaller.${c(21)} A 2011 assessment by GE Healthcare and BioPharm Services, done to ISO 14040/14044 and critically reviewed, found 34% lower global warming potential and 32% lower energy demand for a 2,000 L single-use antibody process train. It assumed an average US grid and water for injection made mainly from fuel oil and natural gas, and used GE's own equipment; an EU grid did not change the ranking.${c(22)}</p>
<h3>The 2026 re-evaluations</h3>
<p>Reiners and colleagues took apart and weighed single-use consumables to quantify the plastic in a 2,000 L batch at two Roche sites. A commercial process in an almost fully single-use facility used 822 kg of consumables plus 128 kg of packaging per batch, about 6.5 t CO<sub>2</sub>e; a clinical process in a hybrid facility used 360 kg plus packaging, about 2.9 t.${c(11)} These figures cover consumables only, not the steam and water of the hybrid's steel equipment. The authors, who abbreviate single-use technology as SUT, conclude that</p>
<blockquote><p>the CO<sub>2</sub> footprint of SUT is significantly higher than previously assumed</p><footer>Reiners et al., Biotechnology and Bioengineering (2026)${c(11)}</footer></blockquote>
<p>For a 2,000 L bioreactor run and a 1,200 L buffer preparation done both ways at the hybrid site, the steel versions could emit less than half the CO<sub>2</sub> of the single-use ones, with SIP steam 87% of the steel bioreactor's footprint. The key assumptions:${c(11)}</p>
<ul>
  <li>Energy used the site's market-based emission factors, reflecting substantial renewable purchasing (77 g CO<sub>2</sub>e/kWh cited for Penzberg); steel stayed ahead even with fossil-gas steam.</li>
  <li>Plastic emission factors were updated; commodity plastic footprints are estimated to be about 30% higher.</li>
  <li>HVAC and process energy were excluded as equal; the authors argue that commercial-scale single-use plants are not inherently smaller, given consumable warehousing.</li>
  <li>Defects were counted for 11% of bioreactor bags, and only two operations were compared; the authors call for a new, complete life cycle assessment.</li>
</ul>
<p>A 2026 laboratory-scale study using data from a GSK facility in Italy found the opposite: 8.7 kg CO<sub>2</sub>e per gram of protein for a 40 L single-use bioreactor against 14.9 kg for a 20 L steel unit, on the Italian grid. The authors attribute the gap mainly to the larger single-use volume, which halved the number of batches, and call the result specific to that protein and scale.${c(23)}</p>
<p>Single-use waste is mostly incinerated or landfilled, since mixed plastics and possible biohazard pretreatment limit recycling;${c(4)} steel uses water, steam and cleaning chemicals instead.${c(22)} Model your own energy mix, volumes and utilization, and ask suppliers for component-level emission data.</p>

<h2 id="hybrid">Hybrid facilities and how to decide</h2>
<p>In a hybrid facility, single-use handles the steps where flexibility pays and steel handles high-volume, low-complexity work. At the Roche hybrid site, media are prepared in existing steel vessels and filtered into the bioreactor, harvest goes to a 2,000 L steel tank, and buffers are made as concentrates in steel and diluted inline from small, mobile bags. For new plants, the authors recommend steel for large-volume buffer and media preparation and at least the option of cleaning and sterilizing in place.${c(11)}</p>
<h3>A decision checklist</h3>
<ul>
  <li><strong>Demand:</strong> annual kilograms per product, how certain the forecast is, and changeovers per year.</li>
  <li><strong>Peak load:</strong> oxygen uptake and heat load against measured, not quoted, k<sub>L</sub>a and cooling capacity.</li>
  <li><strong>Volume:</strong> the working volume you need, including minimum fill.</li>
  <li><strong>Conditions:</strong> overpressure, media sterilization in place or temperatures above 40 °C.</li>
  <li><strong>Validation:</strong> cleaning and SIP for steel; supplier qualification and incoming inspection for single-use; USP &lt;665&gt; assessments for both.</li>
  <li><strong>Supply:</strong> lead times, second sources, change notification and safety stock.</li>
  <li><strong>Utilities and waste:</strong> steam, water for injection and power, their carbon intensity, and waste routes.</li>
</ul>

<h2 id="faq">Frequently asked questions</h2>
<h3>Is a single-use bioreactor cheaper than stainless steel?</h3>
<p>It is usually cheaper to buy and faster to install, but consumables raise the cost of each batch, and published models disagree on the total. The crossover depends on annual demand, utilization and the number of products.</p>
<h3>Can single-use bioreactors run high-density <i>E. coli</i> or yeast fermentations?</h3>
<p>Standard cell-culture bags cannot, because their oxygen transfer, cooling and pressure ratings are too low. Purpose-built single-use fermenters, up to about 1,000 L, have reached high cell densities in supplier studies, but verify k<sub>L</sub>a and heat removal yourself.</p>
<h3>Is single-use more sustainable than stainless steel?</h3>
<p>The evidence is not settled. Studies from 2008 to 2011 favored single-use for its water and steam savings. In 2026, a study at Roche sites found steel lower in carbon for the operations it compared, while a laboratory-scale GSK study favored single-use.</p>

<h2 id="belach">Reusable bioreactors from Belach</h2>
<p>Belach Bioteknik builds reusable glass and stainless-steel bioreactors rather than single-use systems. For early R&amp;D, our <a href="../products/benchtop-bioreactor-systems.html">benchtop systems</a> use autoclavable Duran glass or stainless-steel vessels with 1–3 L working volume, standalone or 2–6 in parallel. Our <a href="../products/sterilizable-stainless-steel-bioreactors.html">in-situ sterilizable stainless-steel bioreactors</a> cover 5–1,000 L for cell or microbial cultivation, and our <a href="../products/pilot-and-production-bioreactors.html">pilot and production systems</a> cover 10–1,000 L, with control of parameters including DO, pH and pressure. All run on BioPhantom© control software. <a href="../contact.html#quote">Tell us about your process</a> and we will help you weigh the options.</p>
`,
  sources: [
    { n: 1, title: 'Friedman EL. Top trends in global biomanufacturing', publisher: 'BioProcess International', year: 2024, url: 'https://eu-assets.contentstack.com/v3/assets/blt0a48a1f3edca9eb0/blt5436bbe9894980ad/65c53618bd5f65040ab0bb09/22-1-2-Friedman.pdf' },
    { n: 2, title: 'Goggin M et al. Exploring the sustainability of single use plastics in the biopharmaceuticals sector: a scoping review of challenges, opportunities, and impacts', publisher: 'Frontiers in Sustainability', year: 2025, url: 'https://doi.org/10.3389/frsus.2025.1536382' },
    { n: 3, title: 'Novais JL et al. Economic comparison between conventional and disposables-based technology for the production of biopharmaceuticals', publisher: 'Biotechnology and Bioengineering', year: 2001, url: 'https://doi.org/10.1002/bit.1182' },
    { n: 4, title: 'Jacquemart R et al. A single-use strategy to enable manufacturing of affordable biologics (vendor article)', publisher: 'Computational and Structural Biotechnology Journal', year: 2016, url: 'https://doi.org/10.1016/j.csbj.2016.06.007' },
    { n: 5, title: 'Pearce R. Development of a full process train, single-use facility (vendor article)', publisher: 'BioPharm International', year: 2012, url: 'https://www.biopharminternational.com/view/development-full-process-train-single-use-facility' },
    { n: 6, title: 'Mirasol F. Evaluating uses for both single-use and stainless-steel bioreactors', publisher: 'BioPharm International', year: 2024, url: 'https://www.biopharminternational.com/view/evaluating-uses-for-both-single-use-and-stainless-steel-bioreactors' },
    { n: 7, title: 'Mahal H et al. End-to-end continuous bioprocessing: impact on facility design, cost of goods, and cost of development for monoclonal antibodies', publisher: 'Biotechnology and Bioengineering', year: 2021, url: 'https://doi.org/10.1002/bit.27774' },
    { n: 8, title: 'Stanton D. ABEC breaks plastic ceiling again with 6,000 L single-use bioreactor', publisher: 'BioProcess Insider (BioProcess International)', year: 2019, url: 'https://www.bioprocessintl.com/upstream-downstream-processing/abec-breaks-plastic-ceiling-again-with-6-000-l-single-use-bioreactor' },
    { n: 9, title: 'Guide to Inspections: Validation of Cleaning Processes', publisher: 'US Food and Drug Administration', year: 1993, url: 'https://www.fda.gov/validation-cleaning-processes-793' },
    { n: 10, title: 'EU Guidelines for Good Manufacturing Practice for Medicinal Products for Human and Veterinary Use, Annex 1: Manufacture of Sterile Medicinal Products', publisher: 'European Commission', year: 2022, url: 'https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf' },
    { n: 11, title: 'Reiners J et al. Revisiting the carbon footprint of single-use technologies in biomanufacturing: a bottom-up analysis reveals a paradigm shift', publisher: 'Biotechnology and Bioengineering', year: 2026, url: 'https://doi.org/10.1002/bit.70297' },
    { n: 12, title: 'Stanton D. Single-use lead times up to 12 months as COVID takes its toll', publisher: 'BioProcess Insider (BioProcess International)', year: 2021, url: 'https://www.bioprocessintl.com/upstream-downstream-processing/single-use-lead-times-up-to-12-months-as-covid-takes-its-toll' },
    { n: 13, title: 'Ensuring drug product safety compliance strategies under USP 665 and 1665', publisher: 'Pharmaceutical Engineering (ISPE)', year: 2025, url: 'https://ispe.org/pharmaceutical-engineering/september-october-2025/ensuring-drug-product-safety-compliance' },
    { n: 14, title: 'Hammond M et al. Identification of a leachable compound detrimental to cell growth in single-use bioprocess containers', publisher: 'PDA Journal of Pharmaceutical Science and Technology', year: 2013, url: 'https://doi.org/10.5731/pdajpst.2013.00905' },
    { n: 15, title: 'HyPerforma 2:1 500 L Single-Use Bioreactor (vendor data sheet)', publisher: 'Thermo Fisher Scientific', year: '', url: 'https://documents.thermofisher.com/TFS-Assets/LSG/brochures/hyperforma-2-1-500l-single-use-bioreactor-data-sheet.pdf' },
    { n: 16, title: 'Crater JS, Lievense JC. Scale-up of industrial microbial processes', publisher: 'FEMS Microbiology Letters', year: 2018, url: 'https://doi.org/10.1093/femsle/fny138' },
    { n: 17, title: 'Jones N. Single-use processing for microbial fermentations (vendor article)', publisher: 'BioProcess International', year: 2015, url: 'https://www.bioprocessintl.com/microbial-cell-culture/single-use-processing-for-microbial-fermentations' },
    { n: 18, title: 'Dreher T et al. Microbial high cell density fermentations in a stirred single-use bioreactor (vendor article)', publisher: 'Advances in Biochemical Engineering/Biotechnology', year: 2014, url: 'https://doi.org/10.1007/10_2013_189' },
    { n: 19, title: 'Olughu W et al. Does the BioBLU 0.3f single-use scale to the BioFlo® 320 reuseable bioreactor on a matched volumetric oxygen mass transfer coefficient?', publisher: 'World Journal of Microbiology and Biotechnology', year: 2021, url: 'https://doi.org/10.1007/s11274-020-02968-2' },
    { n: 20, title: 'Hayda K et al. Best practices for microbial fermenter equipment characterization', publisher: 'BioPharm International', year: 2010, url: 'https://www.biopharminternational.com/view/best-practices-microbial-fermenter-equipment-characterization' },
    { n: 21, title: 'Bush L. The environmental impact of disposables (editorial summarizing Sinclair A et al.)', publisher: 'BioPharm International', year: 2008, url: 'https://www.biopharminternational.com/view/environmental-impact-disposables-0' },
    { n: 22, title: 'Pietrzykowski M et al. An environmental life cycle assessment comparing single-use and conventional process technology (vendor article)', publisher: 'BioPharm International', year: 2011, url: 'https://www.biopharminternational.com/view/environmental-life-cycle-assessment-comparing-single-use-and-conventional-process-technology' },
    { n: 23, title: 'Gonzalez Monroy MA et al. Comparative life cycle assessment of stainless steel and single-use bioreactor units: a laboratory scale case study', publisher: 'Journal of Cleaner Production', year: 2026, url: 'https://doi.org/10.1016/j.jclepro.2026.148858' },
  ],
};
