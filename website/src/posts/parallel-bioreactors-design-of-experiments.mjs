// Research brief and verified source texts: scratchpad blog-research/parallel-doe (not in the repo).
const c = (n) => `<sup><a href="#src-${n}">${n}</a></sup>`;

export default {
  slug: 'parallel-bioreactors-design-of-experiments',
  order: 3,
  date: '2026-10-07',
  topic: 'Process development',
  title: 'Parallel bioreactors and design of experiments: faster bioprocess development',
  seoTitle: 'Parallel Bioreactors and DoE: Faster Bioprocess Development',
  description: 'How parallel bioreactors and design of experiments (DoE) speed up strain screening and bioprocess development, and support QbD and scale-down models.',
  excerpt: 'Running bioreactors side by side and planning the runs with design of experiments can shrink months of process development into weeks. Here is what makes it work, and where it goes wrong.',
  keywords: ['parallel bioreactors', 'parallel bioreactor system', 'multi-parallel bioreactor system', 'design of experiments', 'DoE fermentation', 'Quality by Design', 'design space', 'scale-down model', 'definitive screening design', 'high-throughput process development'],
  cover: 'parallel-doe',
  coverAlt: 'Six identical bioreactors in a row next to a cube representing an experimental design space',
  products: ['lab-scale-multi-parallel-bioreactors', 'pilot-scale-multi-parallel-bioreactors', 'biophantom-control'],
  takeaways: [
    'Parallel bioreactors test many conditions at once under controlled pH, dissolved oxygen and feeding, which shake flasks cannot provide.',
    'Design of experiments finds interactions that one-factor-at-a-time testing misses. A definitive screening design covers six factors in 13 runs.',
    'A small-scale model is only useful once it has been qualified against large-scale data, and regulators expect that justification.',
    'Published case studies report process characterization in weeks or months instead of a year, but platform knowledge and analytical capacity matter as much as the hardware.',
  ],
  body: `
<p>Process development is a race against the number of experiments you can afford. Every new strain, clone, medium or feeding strategy raises the same question: which combination of temperature, pH, dissolved oxygen (DO), feed rate and induction time gives the best and most robust result? Answering it one bioreactor run at a time takes months. <strong>Parallel bioreactors</strong> combined with <strong>design of experiments (DoE)</strong> change the arithmetic. You run several controlled cultivations at once, and you choose those runs so that each one carries as much information as possible.</p>
<p>This article explains how the two fit together, which parallel platform suits which job, and what it takes for small-scale results to hold at production scale.</p>

<h2 id="why-parallel">Why run bioreactors in parallel?</h2>
<p>The obvious gain is throughput: six or eight vessels finish six or eight experiments in the time of one. The less obvious gain is comparability. Runs that share the same inoculum, the same media batch and the same day remove a large part of the noise that creeps in when experiments are spread over weeks.</p>
<p>The third gain is realism. Strain and clone screening is often done in shake flasks or microtiter plates because they are cheap and easy to multiply. But, as the authors of a 2018 study of an automated microbial mini-bioreactor system note, <q>While shake flask systems have been widely used for strain/product screening, they have the disadvantage in that they lack automated feeding, pH and oxygen control</q>.${c(1)} The candidates that win in an uncontrolled batch are not always the ones that win under fed-batch production conditions. A 2024 study on <i>E. coli</i> screening describes how</p>
<blockquote><p>unexpected outcomes arise during scale-up when the best candidates from the batch screenings are transferred to the fed-batch conditions</p><footer>Kemmer et al., Bioengineering (2024)${c(2)}</footer></blockquote>
<p>A parallel bioreactor system closes that gap. Each vessel gets its own control loops for temperature, pH and DO, and its own feed, so you can screen under the conditions the process will actually run in.</p>

<h2 id="doe">Design of experiments versus one factor at a time</h2>
<p>The traditional approach changes one factor while holding the others constant. It is intuitive, but it cannot see interactions: the optimal pH may depend on the temperature, and the best feed rate may depend on the DO set point. The ICH Q8(R2) guideline on pharmaceutical development explicitly contrasts this one-variable-at-a-time approach with multivariate experiments.${c(3)}</p>
<p>Design of experiments varies several factors together according to a statistical plan, so that main effects, interactions and curvature can be separated with a known number of runs. The number of runs depends on the design and on how much you need to learn:</p>
<div class="table-scroll"><table>
  <thead><tr><th scope="col">Design</th><th scope="col">6 factors</th><th scope="col">10 factors</th><th scope="col">What it tells you</th></tr></thead>
  <tbody>
    <tr><th scope="row">Full factorial, 2 levels</th><td>64 runs</td><td>1,024 runs</td><td>All main effects and interactions</td></tr>
    <tr><th scope="row">Fractional factorial, 2 levels</th><td>32, 16 or 8 runs</td><td>128 down to 16 runs</td><td>Main effects, some interactions, depending on resolution</td></tr>
    <tr><th scope="row">Definitive screening design, 3 levels</th><td>13 runs</td><td>21 runs</td><td>Main effects plus curvature; full models for a few active factors</td></tr>
  </tbody>
</table></div>
<p>The two-level counts follow the NIST/SEMATECH engineering statistics handbook.${c(4)} A definitive screening design needs 2<i>m</i> + 1 runs for <i>m</i> factors, as described by Jones and Nachtsheim, who introduced the method in 2011.${c(5)}</p>

<h3>Screening, then optimization</h3>
<p>Development usually moves in two steps. A screening design sorts the few factors that matter from the many that might. A response surface design, such as a central composite design, then maps those factors in detail to find an optimum and a robust operating window. In one published monoclonal antibody example, a risk assessment narrowed the list to four factors, which were then studied in a 33-run central composite design on a parallel mini-bioreactor system.${c(6)}</p>
<p>Definitive screening designs blur the boundary between the two steps, because they also estimate curvature. An industry case study published in BioProcess International reported that a 15-run definitive screening design gave models equivalent to a 31-run fractional factorial design with axial points for a five-factor plasmid DNA fermentation.${c(7)} Bristol-Myers Squibb used a 10-factor definitive screening design on a 24-bioreactor system to characterize an <i>E. coli</i> process.${c(8)} The trade-off is that a definitive screening design assumes that only a few factors are really active. When many factors interact, a larger follow-up design is still needed.${c(5)}</p>

<h2 id="qbd">Quality by Design: CQAs, CPPs and the design space</h2>
<p>DoE is also the working tool behind Quality by Design (QbD). The vocabulary comes from ICH Q8(R2), and ICH Q11 applies the same thinking to drug substances, including biotechnology products:</p>
<ul>
  <li><strong>Critical quality attributes (CQAs)</strong> are the product properties that must stay within limits, such as purity, glycosylation or potency.</li>
  <li>A <strong>critical process parameter (CPP)</strong> is, in the words of the guideline, <q>a process parameter whose variability has an impact on a critical quality attribute</q>.${c(3)}</li>
  <li>The <strong>design space</strong> is the combination of input variables and process parameters shown to assure quality. Working inside an approved design space <q>is not considered as a change</q>, which gives manufacturers operational flexibility.${c(3)}</li>
</ul>
<p>A design space has to come from multivariate data, which is exactly what DoE produces. The guideline makes the point directly:</p>
<blockquote><p>A combination of proven acceptable ranges does not constitute a design space.</p><footer>ICH Q8(R2) Pharmaceutical Development${c(3)}</footer></blockquote>

<h2 id="platforms">Choosing a parallel bioreactor platform</h2>
<p>Parallel systems range from microtiter plates to pilot-scale vessels. They differ less in the number of runs than in how closely each vessel resembles the production process.</p>
<div class="table-scroll"><table>
  <thead><tr><th scope="col">Platform</th><th scope="col">Control per vessel</th><th scope="col">Best for</th><th scope="col">Watch out for</th></tr></thead>
  <tbody>
    <tr><th scope="row">Microtiter plates and shake flasks</th><td>None or limited</td><td>Simple, very high-throughput screens</td><td>No fed-batch, pH or DO control</td></tr>
    <tr><th scope="row">Mini bioreactors (about 15–250 mL)</th><td>Automated pH, DO and feeding; some actuators shared</td><td>Clone screening and large DoE studies</td><td>Small sampling volumes, evaporation, shared stirring</td></tr>
    <tr><th scope="row">Benchtop parallel stirred tanks (about 0.2–3 L)</th><td>Fully independent</td><td>Process development and scale-down models</td><td>Fewer vessels, more media per run</td></tr>
    <tr><th scope="row">Pilot-scale parallel systems (5–15 L)</th><td>Fully independent, with CIP/SIP</td><td>Confirmation runs, scale-up studies, material supply</td><td>Footprint and running cost</td></tr>
  </tbody>
</table></div>
<p>The details matter. In one automated 24-vessel microbial system, the twelve vessels of each culture station share one stirring setting. Under one of the DO control cascades, <q>the vessel with the faster growing cells drives the impeller speed</q>, and the maximum growth rate under that cascade differed significantly from the other cascade and from 1 L fermenters. Growth across the 24 vessels varied with a coefficient of variation of 3–7%, and evaporation reached 5% of the culture volume.${c(1)} In a mammalian cell culture comparison, the final antibody titer in 15 mL vessels was 15% lower than in 2 L bioreactors.${c(9)} None of this rules out small systems; it means you need to know their quirks before you trust their rankings.</p>
<p>Benchtop and pilot-scale parallel stirred tanks sit closer to production equipment. They use the same type of impellers, sensors and gassing as larger vessels and give each reactor fully independent control, at the price of fewer vessels per system.</p>

<h2 id="scale-down">Qualifying the scale-down model</h2>
<p>A parallel system is only as useful as the link between its results and the manufacturing scale. Regulators expect that link to be demonstrated, not assumed. The European Medicines Agency's guideline on process validation for biotechnology-derived active substances states:</p>
<blockquote><p>A small scale model must be designed and executed, and ultimately justified, as an appropriate representation of the manufacturing process.</p><footer>European Medicines Agency${c(10)}</footer></blockquote>
<p>ICH Q11 adds that small-scale models <q>should account for scale effects</q>,${c(11)} and the EMA guideline allows approaches such as correction factors for DoE data, provided they are well documented and justified.${c(10)}</p>
<p>In practice, qualification means running the small-scale model at the same process conditions as the production scale and comparing growth, metabolites, titer and quality attributes statistically. In the COVID-19 antibody case study described below, the 5 L model was qualified against 2,000 L batches with two one-sided t-tests (TOST) for equivalence.${c(12)} Matching the right engineering parameters helps. In the microbial mini-bioreactor study mentioned above, growth matched 1 L fermenters when the two were compared at equal power per unit volume.${c(1)} (Our article on <a href="bioreactor-scale-up.html">bioreactor scale-up</a> explains these criteria.)</p>

<h2 id="case-studies">How much time do parallel bioreactors save?</h2>
<p>Several published case studies give an idea of the potential:</p>
<ul>
  <li><strong>Biogen</strong> performed a cell culture process characterization on a 15 mL mini-bioreactor system in <q>less than a month</q>, against several months normally, after benchmarking the model against data from 15,000 L manufacturing scale. The authors note that such studies <q>typically span several months and are considered time and resource intensive</q>.${c(13)}</li>
  <li><strong>A 2022 case study on two COVID-19 antibodies</strong> describes late-stage process characterization completed in about four months instead of the usual twelve. The work included a production DoE in 23 parallel 5 L bioreactors.${c(12)}</li>
  <li>A 2011 review by Merck scientists projected that 20 or more parallel reactions with automated sampling and integrated purification would improve development timelines four- to fivefold. That figure is a projection rather than a measured result.${c(14)}</li>
</ul>
<p>These numbers should be read with care. The COVID-19 antibody timeline also relied on platform knowledge from earlier antibodies and on running activities in parallel that are usually sequential.${c(12)} Parallel hardware removes one bottleneck, and the next one usually appears in the analytical lab.</p>

<h2 id="variability">Variability, analytics and data</h2>
<p>Parallel vessels are not identical just because they are built identically. Sensor calibration, inoculation, sampling and evaporation all add vessel-to-vessel differences, and the analytics add their own: in the COVID-19 antibody study, seven cell counters in the same laboratory produced a 16.8% range in final cell viability.${c(12)} Good practice from statistics applies directly. The NIST handbook sums it up as <q>Block what you can, randomize what you cannot.</q>${c(4)} Spread factor levels across vessels and days, include center points to measure the noise, and avoid putting all high-level runs on the same station.</p>
<p>Data handling decides how quickly the results become decisions. Set points should flow from the DoE software to the control system, and trends, offline results and batch records should land in one database where they can be analyzed together.</p>

<h2 id="checklist">A practical checklist</h2>
<ul>
  <li>Define the question and the responses first: titer, yield, quality attributes, robustness.</li>
  <li>Use prior knowledge and a risk assessment to shortlist factors before screening.</li>
  <li>Pick the platform for the decision you need to make: plates for coarse screens, controlled parallel bioreactors for fed-batch ranking and design-space work.</li>
  <li>Characterize the vessels (mixing, oxygen transfer, evaporation) and calibrate sensors before the DoE, not after.</li>
  <li>Randomize and block runs across vessels and days, and add center points.</li>
  <li>Plan analytical capacity for the number of samples a parallel campaign produces.</li>
  <li>Qualify the scale-down model against large-scale data before relying on it.</li>
</ul>

<h2 id="faq">Frequently asked questions</h2>
<h3>What is a parallel bioreactor system?</h3>
<p>Several bioreactors that run side by side, each with independent control of temperature, pH, dissolved oxygen and feeding, operated and recorded from one control system. Because the vessels share inoculum, media and timing, their results can be compared directly.</p>
<h3>How many runs does a DoE need?</h3>
<p>It depends on the number of factors and on what you need to estimate. For six factors, a definitive screening design needs 13 runs, two-level fractional factorials 8 to 32 runs, and a full two-level factorial 64 runs.</p>
<h3>Do results from small parallel bioreactors scale up?</h3>
<p>They do when the small-scale model has been qualified against production data and scale-dependent parameters, such as power per volume or oxygen transfer, are matched. Without that qualification, small-scale rankings can mislead.</p>

<h2 id="belach">Parallel bioreactors from Belach</h2>
<p>Belach Bioteknik builds parallel systems at two scales. The <a href="../products/lab-scale-multi-parallel-bioreactors.html">lab-scale multi-parallel system</a> runs six independently controlled 0.2–1 L stainless-steel reactors with automated CIP and SIP, for up to 30 fermentations a week with one operator. The <a href="../products/pilot-scale-multi-parallel-bioreactors.html">pilot-scale system</a> runs up to eight 5, 10 or 15 L reactors. Both are controlled by <a href="../products/biophantom-control.html">BioPhantom©</a>, the same software we use on our production bioreactors, with recipe management and open connectivity to LIMS and DoE tools. <a href="../contact.html#quote">Tell us about your development program</a> and we will suggest a configuration.</p>
`,
  sources: [
    { n: 1, title: 'Velez-Suberbie ML et al. High throughput automated microbial bioreactor system used for clone selection and rapid scale-down process optimization', publisher: 'Biotechnology Progress', year: 2018, url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5836883/' },
    { n: 2, title: 'Kemmer A et al. Enzyme-mediated exponential glucose release: a model-based strategy for continuous defined fed-batch in small-scale cultivations', publisher: 'Bioengineering', year: 2024, url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10886149/' },
    { n: 3, title: 'ICH Q8(R2) Pharmaceutical Development', publisher: 'International Council for Harmonisation', year: 2009, url: 'https://database.ich.org/sites/default/files/Q8%28R2%29%20Guideline.pdf' },
    { n: 4, title: 'NIST/SEMATECH e-Handbook of Statistical Methods, section 5.3.3', publisher: 'National Institute of Standards and Technology', year: '', url: 'https://www.itl.nist.gov/div898/handbook/pri/section3/pri334.htm' },
    { n: 5, title: 'Jones B, Nachtsheim CJ. A class of three-level designs for definitive screening in the presence of second-order effects', publisher: 'Journal of Quality Technology', year: 2011, url: 'https://cours.polymtl.ca/mth6301/WEB-mth8301/D/Jones-Definitive_Screening_Designs.pdf' },
    { n: 6, title: 'Wohlenberg OJ et al. Optimization of a mAb production process with regard to robustness and product quality using quality by design principles', publisher: 'Engineering in Life Sciences', year: 2022, url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9288990/' },
    { n: 7, title: 'Characterization of a biomanufacturing fermentation process using a new DoE approach: definitive screening designs (sponsored poster)', publisher: 'BioProcess International', year: 2012, url: 'https://www.bioprocessintl.com/expression-platforms/characterization-of-a-biomanufacturing-fermentation-process-using-a-new-doe-approach-definitive-screening-designs' },
    { n: 8, title: 'Tai M et al. Efficient high-throughput biological process characterization: definitive screening design with the ambr250 bioreactor system', publisher: 'Biotechnology Progress', year: 2015, url: 'https://pubmed.ncbi.nlm.nih.gov/26138048/' },
    { n: 9, title: 'Delouvroy F et al. Evaluation of the advanced micro-scale bioreactor (ambr™) as a highthroughput tool for cell culture process development', publisher: 'BMC Proceedings', year: 2013, url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3981575/' },
    { n: 10, title: 'Guideline on process validation for the manufacture of biotechnology-derived active substances and data to be provided in the regulatory submission', publisher: 'European Medicines Agency', year: 2016, url: 'https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-process-validation-manufacture-biotechnology-derived-active-substances-and-data-be-provided-regulatory-submission_en.pdf' },
    { n: 11, title: 'ICH Q11 Development and Manufacture of Drug Substances', publisher: 'International Council for Harmonisation', year: 2012, url: 'https://database.ich.org/sites/default/files/Q11%20Guideline.pdf' },
    { n: 12, title: 'Xu J et al. Upstream cell culture process characterization and in-process control strategy development at pandemic speed', publisher: 'mAbs', year: 2022, url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8986202/' },
    { n: 13, title: 'Janakiraman V et al. Application of high-throughput mini-bioreactor system for systematic scale-down modeling, process characterization, and control strategy development', publisher: 'Biotechnology Progress', year: 2015, url: 'https://pubmed.ncbi.nlm.nih.gov/26317495/' },
    { n: 14, title: 'Bareither R, Pollard D. A review of advanced small-scale parallel bioreactor technology for accelerated process development: current state and future need', publisher: 'Biotechnology Progress', year: 2011, url: 'https://pubmed.ncbi.nlm.nih.gov/21312350/' },
  ],
};
