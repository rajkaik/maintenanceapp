// Research brief and verified source texts: scratchpad blog-research/part11 (not in the repo).
const c = (...ns) => `<sup>${ns.map((n) => `<a href="#src-${n}">${n}</a>`).join(', ')}</sup>`;

export default {
  slug: '21-cfr-part-11-compliance-bioreactor-software',
  order: 5,
  date: '2026-10-07',
  topic: 'Compliance',
  title: '21 CFR Part 11 compliance and data integrity for bioreactor control software',
  seoTitle: '21 CFR Part 11 Compliance Checklist for Bioreactor Software',
  description: 'What 21 CFR Part 11 compliance means for bioreactor software: scope, audit trails, e-signatures, ALCOA+, EU Annex 11 and a practical evaluation checklist.',
  excerpt: 'Bioreactor control software can support 21 CFR Part 11 compliance, but it cannot deliver it alone. Here is what the US and EU rules expect, how ALCOA+ fits in, and what to check before you buy or validate a system.',
  keywords: ['21 CFR Part 11 compliance', 'bioreactor software', 'data integrity', 'ALCOA+', 'audit trail review', 'EU GMP Annex 11 revision', 'electronic signatures', 'computer system validation', 'bioprocess SCADA', 'Part 11 checklist'],
  cover: 'part11',
  coverAlt: 'Line drawing of a control-software screen with audit-trail rows and a shield symbol',
  products: ['biophantom-control', 'bio-pilot-control'],
  takeaways: [
    '21 CFR Part 11 is a US regulation. It applies to electronic records and signatures required under other FDA rules, the predicate rules, and FDA’s enforcement discretion for some provisions is not an exemption.',
    'No software is Part 11 compliant on its own, and FDA does not certify electronic signature systems. Software can support compliance, but validation, procedures, training and audit trail review remain the regulated user’s job.',
    'FDA uses ALCOA; MHRA, PIC/S and WHO add complete, consistent, enduring and available (ALCOA+). As of October 2026, the 2025 draft revision of EU GMP Annex 11 is not in force.',
    'When you evaluate bioreactor software, check user accounts, audit trail, e-signatures and batch reports, time synchronization, backup and restore, alarms, validation documents and the supplier.',
  ],
  body: `
<p>A bioreactor run leaves a trail of electronic data: set points, trends, alarms, operator actions and a batch report. When the run is part of drug or biologics manufacturing under FDA rules, the records those rules require fall under <strong>21 CFR Part 11</strong> if you keep them electronically.${c(1, 2)} So what does bioreactor control software contribute to 21 CFR Part 11 compliance? It can support compliance, but only the company that uses it can achieve it.</p>
<p>FDA and WHO both report more data integrity problems in inspections.${c(3, 4)} This article summarizes the documents and is not legal advice: confirm your requirements with your QA department and, where needed, your regulator.</p>

<h2 id="part-11">What 21 CFR Part 11 covers</h2>
<p>Part 11 is a US federal regulation, in effect since August 20, 1997. It sets the criteria under which FDA considers electronic records and signatures trustworthy, reliable and generally equivalent to paper records and handwritten signatures.${c(1, 2)}</p>

<h3>Predicate rules decide what is in scope</h3>
<p>Part 11 does not decide which records you must keep. It applies to electronic records kept to meet other FDA requirements, called <strong>predicate rules</strong>, such as the drug CGMP regulations in 21 CFR Part 211, and to electronic records submitted to FDA.${c(1, 2)} Records that no predicate rule requires are not Part 11 records. Printing the batch report does not necessarily take the data out of scope: if you rely on the electronic record, FDA may consider you to be using it. FDA recommends deciding and documenting which records are Part 11 records.${c(2)}</p>

<h3>Controls for closed systems and signatures</h3>
<p>In a closed system, access is controlled by the people responsible for the records; open systems need extra measures such as encryption.${c(1)} A bioreactor control system on a site network, run by the manufacturer, will normally be closed (our reading; let QA confirm it). For closed systems, §11.10 requires validation, accurate and complete copies, record protection, limited access, system checks, training, accountability policies, documentation control and secure, computer-generated, time-stamped audit trails. Changes must never obscure earlier entries.${c(1)}</p>
<p>Electronic signatures must show the signer's name, the date and time and the meaning, be linked to their records and belong to one person. The organization must also certify to FDA that they are intended as the legally binding equivalent of handwritten signatures.${c(1)}</p>

<h3>Enforcement discretion is not an exemption</h3>
<p>In 2003, FDA said it would interpret Part 11 narrowly and use <strong>enforcement discretion</strong> for its validation, audit trail, record retention and record copying requirements, and, under certain conditions, for systems in use before August 20, 1997. It would keep enforcing the rest, including access limits, training and the signature rules.${c(2)}</p>
<blockquote><p>Note that part 11 remains in effect and that this exercise of enforcement discretion applies only as identified in this guidance.</p><footer>FDA, Part 11 Scope and Application guidance (2003)${c(2)}</footer></blockquote>
<p>The predicate rules apply in full. For drugs, 21 CFR 211.68(b) requires that only authorized personnel change records, that computer input and output are checked, and that backups are exact, complete and secure.${c(5)} FDA's 2018 guidance adds that each CGMP workflow on a computer system is an intended use to be validated, and that audit trails are reviewed with the records they belong to.${c(3)}</p>

<h2 id="alcoa">Data integrity: ALCOA and ALCOA+</h2>
<p>FDA's 2018 data integrity guidance, which covers drugs including biologics, expects data to be attributable, legible, contemporaneously recorded, original or a true copy, and accurate: <strong>ALCOA</strong>, an acronym coined at FDA in the early 1990s.${c(3, 6)} EMA's 2010 reflection paper on clinical trial source data listed nine attributes, the ALCOA five plus complete, consistent, enduring and available, without using the label ALCOA+.${c(7)} MHRA, PIC/S, WHO and the 2025 draft Annex 11 define <strong>ALCOA+</strong> as ALCOA plus those four.${c(8, 9, 4, 10)} MHRA adds that its expectations are the same whichever acronym is used.${c(8)}</p>
<div class="table-scroll"><table>
  <thead><tr><th scope="col">Attribute</th><th scope="col">Set</th><th scope="col">In a bioreactor control system</th></tr></thead>
  <tbody>
    <tr><th scope="row">Attributable</th><td>ALCOA</td><td>Each set-point change or alarm acknowledgment is linked to a person and a time.</td></tr>
    <tr><th scope="row">Legible</th><td>ALCOA</td><td>Trends, events and reports are readable and unambiguous.</td></tr>
    <tr><th scope="row">Contemporaneous</th><td>ALCOA</td><td>Data are saved when events happen, not after the run.</td></tr>
    <tr><th scope="row">Original</th><td>ALCOA</td><td>The database record is kept, not only a printout.</td></tr>
    <tr><th scope="row">Accurate</th><td>ALCOA</td><td>Sensors are calibrated, calculations validated, entries checked.</td></tr>
    <tr><th scope="row">Complete</th><td>Plus</td><td>Nothing is lost or deleted, including aborted runs and metadata.</td></tr>
    <tr><th scope="row">Consistent</th><td>Plus</td><td>Time stamps, units and dates follow one convention.</td></tr>
    <tr><th scope="row">Enduring</th><td>Plus</td><td>Records stay intact for the whole retention period.</td></tr>
    <tr><th scope="row">Available</th><td>Plus</td><td>Records can be retrieved for review or inspection.</td></tr>
  </tbody>
</table></div>
<p>The attributes follow PIC/S; the bioreactor examples are ours.${c(9)}</p>

<h2 id="annex-11">EU GMP Annex 11, the 2025 draft and GAMP 5</h2>
<p>In the EU, computerized systems in GMP manufacturing fall under <strong>Annex 11</strong>, guidance for interpreting the EU GMP principles that has applied in its current form since June 30, 2011. Compared with Part 11, it adds life-cycle risk management, supplier assessment, a risk-based audit trail that records the reason for GMP-relevant changes and is regularly reviewed, and batch release printouts that flag changed data.${c(11)}</p>

<h3>The 2025 draft is not in force</h3>
<p>From July 7 to October 7, 2025, the European Commission consulted on a 19-page revised Annex 11, drafted by EMA's GMDP inspectors working group with PIC/S, alongside a revised Chapter 4 and a new Annex 22 on artificial intelligence.${c(12, 10)} The draft adds sections on alarms and on identity and access management, and proposes multi-factor authentication for remote access to critical systems and audit trail review before batch release, unless a later review can be justified.${c(10)} As of October 2026, the draft is not in force: the EudraLex Volume 4 index still lists the January 2011 revision of Annex 11 and no Annex 22, and the 2026 PIC/S news announces no adoption.${c(13, 14)}</p>

<h3>GAMP 5 and computer software assurance</h3>
<p>ISPE's GAMP 5 (second edition, July 2022) is industry good practice, not a regulation; it stresses critical thinking and drawing on supplier documentation where possible.${c(15)} FDA's computer software assurance (CSA) guidance, reissued in February 2026, is written for medical-device production and quality management system software.${c(16)}</p>

<h2 id="warning-letters">What recent FDA warning letters show</h2>
<p>Three recent FDA warning letters to drug manufacturers outside the United States show what investigators find:</p>
<ul>
  <li>A 2025 letter to a sterile drug manufacturer found that operators reported a passing production filter integrity test without recording earlier failures; one series of nine tests included five failures and three aborted tests. FDA's verdict: <q>Your Production and QU did not review electronic raw data and audit trails to ensure data integrity prior to batch release.</q>${c(17)}</li>
  <li>A 2024 letter to a hand sanitizer manufacturer described a gas chromatograph with no audit trail or individual logins and a shared password kept in an unsecured drawer. A plan that included a supplier software upgrade was inadequate, partly because it did not cover user access levels or interim controls.${c(18)}</li>
  <li>A third, also from 2024, found a release-testing spectrophotometer without an audit trail or defined user access levels. A quote for new software was not enough; FDA wanted a timeframe, security features, access levels and interim measures.${c(19)}</li>
</ul>
<p>All three cite 21 CFR 211.68(b), not Part 11, and in two of them FDA judged plans built on new or upgraded software inadequate.${c(17, 18, 19)} For process control, WHO names SCADA, HMI and PLC systems in production among the automated data capture it recommends, and MHRA expects GMP sites with PLC-based equipment to work toward individual logins and audit trails.${c(4, 8)}</p>

<h2 id="software-alone">Why software alone cannot deliver 21 CFR Part 11 compliance</h2>
<p>FDA's 2024 Q&amp;A on electronic systems in clinical investigations answers a question buyers often ask:</p>
<blockquote><p>No. FDA does not certify electronic systems and methods used to obtain electronic signatures.</p><footer>FDA, Electronic Systems, Electronic Records, and Electronic Signatures in Clinical Investigations (2024)${c(20)}</footer></blockquote>
<p>FDA judges whether records and signatures meet Part 11, whatever the technology or brand.${c(20)} Even one instrument vendor's compliance FAQ says that vendors, itself included, cannot provide software that complies with all Part 11 requirements.${c(21)} The draft Annex 11 keeps the regulated user fully responsible when relying on a vendor's qualification, and PIC/S warns against sole reliance on vendor qualification packages.${c(10, 9)} MHRA explains the limits of vendor testing:</p>
<blockquote><p>In isolation from the intended process or end-user IT infrastructure, vendor testing is likely to be limited to functional verification only and may not fulfil the requirements for performance qualification.</p><footer>MHRA, GXP Data Integrity Guidance and Definitions (2018)${c(8)}</footer></blockquote>
<div class="table-scroll"><table>
  <thead><tr><th scope="col">Part 11 control</th><th scope="col">The software can provide</th><th scope="col">The regulated user must</th></tr></thead>
  <tbody>
    <tr><th scope="row">Validation, §11.10(a)</th><td>A testable design and supplier test records</td><td>Validate the configured system for its intended use</td></tr>
    <tr><th scope="row">Access and authority checks, §11.10(d), (g)</th><td>Individual accounts, roles, password rules</td><td>Assign roles, review access, keep administrators independent</td></tr>
    <tr><th scope="row">Audit trail, §11.10(e)</th><td>A secure, time-stamped log users cannot change</td><td>Review it with the batch record</td></tr>
    <tr><th scope="row">Copies and retention, §11.10(b), (c)</th><td>Reports, exports, backup functions</td><td>Run and test backups, archive the records</td></tr>
    <tr><th scope="row">Training, §11.10(i)</th><td>No software function</td><td>Ensure staff are qualified</td></tr>
    <tr><th scope="row">Accountability, §11.10(j)</th><td>No software function</td><td>Write and enforce e-signature policies</td></tr>
    <tr><th scope="row">Certification, §11.100(c)</th><td>No software function</td><td>Certify e-signatures to FDA</td></tr>
  </tbody>
</table></div>
<p>Table sources: Part 11, FDA's 2018 guidance and Annex 11.${c(1, 3, 11)} The accurate claim for bioreactor software is therefore that it supports 21 CFR Part 11 compliance, not that it is compliant on its own.</p>

<h2 id="checklist">A Part 11 checklist for bioreactor software</h2>
<p>Use these points to compare bioreactor software or other bioprocess SCADA systems, write a user requirements specification or audit a supplier, and ask to see each function working.</p>

<h3>User accounts</h3>
<ul>
  <li>Individual logins for everyone; shared accounts only for read-only viewing.${c(3, 10)}</li>
  <li>Roles for operators, reviewers and administrators, with administrators independent of those responsible for the records.${c(3, 9)}</li>
  <li>Enforced password rules, lockout after failed logins and automatic logout when idle.${c(1, 10)}</li>
  <li>Multi-factor authentication for remote access to critical systems, as the 2025 draft proposes.${c(10)}</li>
</ul>
<p>FDA explains why: <q>When login credentials are shared, a unique individual cannot be identified through the login and the system would not conform to the CGMP requirements in parts 211 and 212.</q>${c(3)}</p>

<h3>Audit trail</h3>
<ul>
  <li>Always on; users cannot edit or disable it, and changes to its settings or to the system clock are logged.${c(4, 10)}</li>
  <li>Every manual action is captured: set-point and recipe changes, calibrations, alarm acknowledgments, signatures.${c(10)}</li>
  <li>Each entry shows who, what, when and why, with old and new values and a reason the system prompts for.${c(10)}</li>
  <li>Searchable and exportable, so that QA can review it before batch release.${c(10, 3)}</li>
</ul>

<h3>E-signatures and batch reports</h3>
<ul>
  <li>Printed name, date and time and meaning shown on screen and in print, with the signature linked to its record.${c(1)}</li>
  <li>At least two components, such as user ID and password.${c(1)}</li>
  <li>Accurate and complete copies of a batch in human-readable and electronic form.${c(1)}</li>
  <li>Batch release printouts that show data changed after entry.${c(11)}</li>
</ul>

<h3>Time synchronization</h3>
<ul>
  <li>Clocks of the control PC, database server, controllers and analyzers synchronized, preferably with an official time source.${c(9, 4)}</li>
  <li>Only authorized administrators can change the time or time zone, and changes are logged.${c(9, 4, 10)}</li>
  <li>The time zone reference is documented, especially when data from several sites are combined.${c(2, 8)}</li>
</ul>

<h3>Backup and restore</h3>
<ul>
  <li>True copies of data and metadata, stored apart from the original; a temporary crash copy does not count.${c(3, 10)}</li>
  <li>Restores tested during validation and periodically afterwards.${c(11, 4)}</li>
  <li>Archived batches still readable after software, PC or database upgrades.${c(11)}</li>
</ul>

<h3>Alarms</h3>
<ul>
  <li>Alarm limits within validated ranges, changeable only by authorized users.${c(10)}</li>
  <li>An alarm log that users cannot edit, with the alarm name, alarm and acknowledgment times, user and role, and a comment.${c(10)}</li>
</ul>
<p>These points come from the 2025 draft; the 2011 Annex 11 has no alarm section. FDA's 2018 guidance lists alert records among audit trails to review based on risk.${c(10, 11, 3)}</p>

<h3>Validation documents</h3>
<ul>
  <li>Your own user requirements specification, based on risk and traced to tests.${c(11, 10)}</li>
  <li>Computer system validation evidence (FAT, SAT, IQ, OQ and PQ as needed) for your configuration and intended use.${c(9, 3)}</li>
  <li>Tests of access privileges, audit trail, alarms, calculations and restore from backup.${c(10)}</li>
  <li>Change control, periodic review and qualified IT infrastructure.${c(11)}</li>
</ul>

<h3>Supplier assessment</h3>
<ul>
  <li>A risk-based audit or assessment of the supplier's quality system and its grasp of GMP and data integrity.${c(11, 10, 9)}</li>
  <li>Written agreements on responsibilities, remote maintenance, new versions and your control of the data.${c(11, 10)}</li>
  <li>Supplier quality and audit information available to inspectors on request.${c(11)}</li>
</ul>

<h2 id="faq">Frequently asked questions</h2>
<h3>Does Part 11 apply to research and process development data?</h3>
<p>Only where a predicate rule requires the records; other records are not Part 11 records.${c(2)} Development data can still matter later: one 2024 warning letter asked for long-term retention of source data from development studies that support design, qualification and validation.${c(19)} If you run <a href="parallel-bioreactors-design-of-experiments.html">design-of-experiments studies in parallel bioreactors</a>, decide early how those records will be kept.</p>
<h3>Can bioreactor software be FDA-certified?</h3>
<p>No. FDA states that it does not certify electronic systems and methods for electronic signatures.${c(20)} Software can support compliance, but validation, procedures, training and review remain the user's job.</p>
<h3>How often should audit trails be reviewed?</h3>
<p>As often as the data they belong to. Where CGMP requires data review before batch release, review the audit trail then too; otherwise, set the frequency by risk assessment.${c(3)}</p>
<h3>Is the revised Annex 11 in force?</h3>
<p>Not as of October 2026. The consultation closed on October 7, 2025, and the EudraLex index still lists the 2011 version.${c(12, 13)} Check the current status with your QA department.</p>

<h2 id="belach">Bioreactor control software from Belach</h2>
<p>Belach Bioteknik's <a href="../products/biophantom-control.html">BioPhantom© Control</a> is SCADA software for MS Windows and MS SQL Server that runs one to eight bioreactors from one PC. It is designed to support 21 CFR Part 11 compliance, with multi-level password protection, operator event logging, a searchable audit trail, a prioritized alarm system, detailed batch reports with operator notes and a central database. For complete plants, <a href="../products/bio-pilot-control.html">Bio-Pilot Control</a> offers ISA S88 batch management and electronic data handling in an MS SQL Server database. <a href="../contact.html#quote">Ask us about validation support for your project</a>.</p>
`,
  sources: [
    { n: 1, title: '21 CFR Part 11, Electronic Records; Electronic Signatures', publisher: 'Electronic Code of Federal Regulations (eCFR), current text', year: '', url: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11' },
    { n: 2, title: 'Guidance for Industry. Part 11, Electronic Records; Electronic Signatures – Scope and Application', publisher: 'U.S. Food and Drug Administration', year: 2003, url: 'https://www.fda.gov/media/75414/download' },
    { n: 3, title: 'Data Integrity and Compliance With Drug CGMP: Questions and Answers. Guidance for Industry', publisher: 'U.S. Food and Drug Administration', year: 2018, url: 'https://www.fda.gov/media/119267/download' },
    { n: 4, title: 'Annex 4: Guideline on data integrity. WHO Technical Report Series No. 1033', publisher: 'World Health Organization', year: 2021, url: 'https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf' },
    { n: 5, title: '21 CFR 211.68, Automatic, mechanical, and electronic equipment', publisher: 'Electronic Code of Federal Regulations (eCFR), current text', year: '', url: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-D/section-211.68' },
    { n: 6, title: 'Woollen SW. Data Quality and the Origin of ALCOA', publisher: 'The Compass, Southern Regional Chapter of the Society of Quality Assurance', year: 2010, url: 'https://rx-360.org/wp-content/uploads/2018/08/Data-Quality-and-the-Origin-of-ALCOA-by-Stan-Woolen-2010.pdf' },
    { n: 7, title: 'Reflection paper on expectations for electronic source data and data transcribed to electronic data collection tools in clinical trials (superseded)', publisher: 'European Medicines Agency', year: 2010, url: 'https://www.ema.europa.eu/system/files/documents/regulatory-procedural-guideline/reflection-paper-expectations-electronic-source-data-data-transcribed-electronic-data-collection_en.pdf' },
    { n: 8, title: '‘GXP’ Data Integrity Guidance and Definitions, Revision 1', publisher: 'Medicines and Healthcare products Regulatory Agency (MHRA)', year: 2018, url: 'https://assets.publishing.service.gov.uk/media/5aa2b9ede5274a3e391e37f3/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf' },
    { n: 9, title: 'PI 041-1 Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments', publisher: 'Pharmaceutical Inspection Co-operation Scheme (PIC/S)', year: 2021, url: 'https://picscheme.org/docview/4234' },
    { n: 10, title: 'Annex 11: Computerised Systems. Draft revised version for public consultation', publisher: 'European Commission; EMA GMDP Inspectors Working Group with PIC/S', year: 2025, url: 'https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en?filename=mp_vol4_chap4_annex11_consultation_guideline_en.pdf' },
    { n: 11, title: 'EudraLex Volume 4, Good Manufacturing Practice, Annex 11: Computerised Systems', publisher: 'European Commission', year: 2011, url: 'https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf' },
    { n: 12, title: 'Stakeholders’ Consultation on EudraLex Volume 4 – Good Manufacturing Practice Guidelines: Chapter 4, Annex 11 and New Annex 22', publisher: 'European Commission', year: 2025, url: 'https://health.ec.europa.eu/consultations/stakeholders-consultation-eudralex-volume-4-good-manufacturing-practice-guidelines-chapter-4-annex_en' },
    { n: 13, title: 'EudraLex – Volume 4 – Good Manufacturing Practice (GMP) guidelines (index page, accessed October 7, 2026)', publisher: 'European Commission', year: 2026, url: 'https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en' },
    { n: 14, title: 'PIC/S news, 2026 archive (accessed October 7, 2026)', publisher: 'Pharmaceutical Inspection Co-operation Scheme (PIC/S)', year: 2026, url: 'https://picscheme.org/en/news?dateselect=2026' },
    { n: 15, title: 'ISPE GAMP 5 Guide: A Risk-Based Approach to Compliant GxP Computerized Systems (Second Edition), publication page', publisher: 'International Society for Pharmaceutical Engineering (ISPE)', year: 2022, url: 'https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition' },
    { n: 16, title: 'Computer Software Assurance for Production and Quality Management System Software. Guidance for Industry and FDA Staff', publisher: 'U.S. Food and Drug Administration', year: 2026, url: 'https://www.fda.gov/media/188844/download' },
    { n: 17, title: 'Warning Letter 320-25-46, Aspen Pharmacare Holdings Limited', publisher: 'U.S. Food and Drug Administration', year: 2025, url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/aspen-pharmacare-holdings-limited-701671-02242025' },
    { n: 18, title: 'Warning Letter 320-24-43, Landy International', publisher: 'U.S. Food and Drug Administration', year: 2024, url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/landy-international-679066-06122024' },
    { n: 19, title: 'Warning Letter 320-24-62, MMC Healthcare Ltd.', publisher: 'U.S. Food and Drug Administration', year: 2024, url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/mmc-healthcare-ltd-684644-09242024' },
    { n: 20, title: 'Electronic Systems, Electronic Records, and Electronic Signatures in Clinical Investigations: Questions and Answers. Guidance for Industry', publisher: 'U.S. Food and Drug Administration', year: 2024, url: 'https://www.fda.gov/media/166215/download' },
    { n: 21, title: 'Compliance Services FAQs (vendor article)', publisher: 'Thermo Fisher Scientific', year: '', url: 'https://www.thermofisher.com/au/en/home/products-and-services/services/instrument-qualification-services/compliance-and-validation/compliance-concierge.html' },
  ],
};
