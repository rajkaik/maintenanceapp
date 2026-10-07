/*
 * Bioreactor URS question bank.
 *
 * Structure
 *   sections[].questions[]   what the customer answers
 *   sections[].baseline[]    requirements always included in the URS
 *
 * Question fields
 *   id         stable requirement ID used in the URS document (never reuse)
 *   topic      short requirement name shown in the URS document
 *   type       'single' | 'multi' | 'number' | 'text'
 *   gmp        true when the requirement can affect product quality / patient safety
 *   standards  keys from data/standards.js that apply to the question
 *   showIf     { q: '<question id>', in: [values] } - hidden otherwise
 *              (shown while the referenced question is unanswered)
 *
 * Option fields
 *   solution   recommended design solution / design basis for that answer
 *   scope      supplier scope status, set during internal review:
 *                'tbd'         not yet reviewed (not shown to the customer)
 *                'in'          standard supply scope
 *                'conditional' possible, subject to engineering review / extra cost
 *                'out'         outside our supply scope
 *   scopeNote  internal comment from the scope review
 *
 * Number questions use `bands` (solution by value range) and `scopeRange`
 * ({ min, max } in the question unit; null = not yet reviewed). `turndownOf`
 * names the maximum-volume question used to show the turndown ratio.
 */
window.URS_TEMPLATE = {
  id: 'bioreactor',
  title: 'Bioreactor',
  documentTitle: 'User Requirements Specification - Bioreactor',
  version: '0.1 (draft, scope review pending)',
  sections: [
    // =========================================================================
    {
      id: 'GEN',
      title: 'General & regulatory',
      intro: 'Intended use, target markets and the environment the bioreactor will be installed in. These answers set the compliance basis for every other section.',
      questions: [
        {
          id: 'GEN-01',
          topic: 'Intended use',
          type: 'single',
          gmp: true,
          text: 'What is the intended use of the bioreactor?',
          help: 'Sets the depth of qualification, the documentation package and the software compliance level.',
          standards: ['EU-GMP', 'CFR-211', 'ICH-Q7'],
          options: [
            {
              value: 'rd',
              label: 'Research / process development (non-GMP)',
              solution: 'Supplier-standard documentation (manuals, drawings, certificates). Qualification protocols optional. Basic data-integrity functions recommended to ease later technology transfer.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'clinical',
              label: 'Clinical manufacturing (GMP, Phase I-III)',
              solution: 'Equipment designed, documented and qualified for GMP use: risk-based C&Q, GAMP 5 software validation, data integrity per 21 CFR Part 11 / EU GMP Annex 11, full material traceability.',
              standards: ['EU-GMP-A15', 'ASTM-E2500', 'GAMP5', 'CFR-11'],
              scope: 'tbd'
            },
            {
              value: 'commercial',
              label: 'Commercial GMP manufacturing',
              solution: 'As clinical GMP, plus lifecycle support: change notification, spare-part and obsolescence management, periodic review support and a long-term service agreement.',
              standards: ['EU-GMP-A15', 'ASTM-E2500', 'GAMP5', 'CFR-11', 'ICH-Q9'],
              scope: 'tbd'
            },
            {
              value: 'nonpharma',
              label: 'Food, feed or industrial biotech (non-pharma)',
              solution: 'Hygienic design per EHEDG; food-contact material compliance where applicable. GMP qualification not required.',
              standards: ['EHEDG-8', 'EU-1935', 'CFR-177'],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'GEN-02',
          topic: 'Target markets',
          type: 'multi',
          gmp: false,
          text: 'In which markets will the equipment be installed?',
          help: 'Determines conformity marking, pressure-vessel code and electrical standards.',
          standards: [],
          options: [
            {
              value: 'eu',
              label: 'EU / EEA (CE marking)',
              solution: 'CE marking under the Machinery Directive 2006/42/EC, or Machinery Regulation (EU) 2023/1230 for equipment placed on the market from 20 Jan 2027. Pressure vessel per PED 2014/68/EU, EMC 2014/30/EU. Electrical design to EN 60204-1, risk assessment to EN ISO 12100.',
              standards: ['MD', 'MR', 'PED', 'EMCD', 'EN-60204', 'ISO-12100'],
              scope: 'tbd'
            },
            {
              value: 'us',
              label: 'USA / Canada',
              solution: 'Pressure vessel to ASME BPVC Section VIII Div. 1 (U-stamp) where required by the jurisdiction. Control panels to UL 508A / CSA C22.2 No. 286. Electrical installation to NFPA 79 / NFPA 70.',
              standards: ['ASME-VIII', 'UL-508A', 'NFPA-79'],
              scope: 'tbd'
            },
            {
              value: 'uk',
              label: 'United Kingdom',
              solution: 'UKCA or CE marking (CE is currently recognised in Great Britain - confirm at order). Same technical basis as EU.',
              standards: ['ISO-12100', 'EN-60204'],
              scope: 'tbd'
            },
            {
              value: 'other',
              label: 'Other (specify in details)',
              solution: 'Local approvals (e.g. China GB, EAC, KC) to be specified by the customer and confirmed by the supplier.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'GEN-03',
          topic: 'Biosafety level',
          type: 'single',
          gmp: true,
          text: 'What biosafety / containment level applies to the process?',
          help: 'Based on the organism and any viral vectors used. Drives seal type, exhaust filtration and decontamination.',
          standards: ['WHO-LBM', 'NIH-GL', 'EU-2000-54', 'EU-2009-41'],
          options: [
            {
              value: 'bsl1',
              label: 'BSL-1 / Good Large Scale Practice (non-pathogenic, e.g. CHO, E. coli K-12)',
              solution: 'Closed operation with sterile-grade 0.2 µm inlet and exhaust gas filtration. No additional containment measures.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'bsl2',
              label: 'BSL-2 / BL2-LS',
              solution: 'Closed system designed to prevent release: magnetic drive or double mechanical seal, integrity-testable exhaust filtration, closed sampling, inactivation (SIP kill cycle or chemical) before opening, contained drain routing to a kill system.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'bsl3',
              label: 'BSL-3 / BL3-LS',
              solution: 'As BSL-2 plus redundant exhaust filtration, validated decontamination of all effluents, safety relief routed to containment and installation in a BSL-3 suite. Requires a dedicated engineering study.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'GEN-04',
          topic: 'Installation area classification',
          type: 'single',
          gmp: true,
          text: 'What is the cleanroom classification of the installation area?',
          help: 'Sets surface, enclosure and cleaning-agent compatibility requirements for the skid.',
          standards: ['ISO-14644', 'EU-GMP-A1'],
          options: [
            {
              value: 'cnc',
              label: 'Unclassified / controlled not classified (CNC)',
              solution: 'Industrial finish acceptable; cleanable external surfaces.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'gradeD',
              label: 'ISO 8 / EU GMP Grade D',
              solution: 'Cleanroom-compatible design: stainless steel frame and covers, smooth cleanable surfaces, minimal horizontal ledges, enclosures IP65 or better, resistance to the site cleaning agents and sporicides.',
              standards: ['IEC-60529'],
              scope: 'tbd'
            },
            {
              value: 'gradeC',
              label: 'ISO 7 / EU GMP Grade C',
              solution: 'As Grade D, plus low particle shedding, sealed cable entries and compatibility with VHP / H2O2 room decontamination where used.',
              standards: ['IEC-60529'],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'GEN-05',
          topic: 'Hazardous area classification',
          type: 'single',
          gmp: false,
          text: 'Is the installation area a hazardous (explosive atmosphere) zone?',
          help: 'Relevant e.g. for methanol-fed Pichia processes or solvent handling nearby.',
          standards: ['ATEX', 'IEC-60079'],
          options: [
            {
              value: 'none',
              label: 'Non-hazardous (safe area)',
              solution: 'Standard electrical design.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'zone2',
              label: 'Zone 2 (or Class I Div. 2)',
              solution: 'Ex-rated motors, instruments and enclosures, or control panel placed outside the zone; equipment marking per ATEX / IECEx.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'zone1',
              label: 'Zone 1 (or Class I Div. 1)',
              solution: 'Zone 1 rated equipment throughout, purged/pressurised enclosures. Requires engineering review.',
              standards: [],
              scope: 'tbd'
            }
          ]
        }
      ],
      baseline: [
        {
          id: 'GEN-B1',
          text: 'The supplier operates a documented quality management system and provides a project quality plan.',
          standards: [],
          scope: 'tbd'
        },
        {
          id: 'GEN-B2',
          text: 'The supplier performs and documents a machinery risk assessment and supplies a declaration of conformity (or incorporation) for the target market.',
          standards: ['ISO-12100'],
          scope: 'tbd'
        }
      ]
    },

    // =========================================================================
    {
      id: 'PRC',
      title: 'Process',
      intro: 'The biology and operating mode define mixing, oxygen transfer, heat removal and feeding requirements.',
      questions: [
        {
          id: 'PRC-01',
          topic: 'Organism / cell type',
          type: 'single',
          gmp: true,
          text: 'Which organism or cell type will be cultivated?',
          help: 'Choose the main application. Use the details field if several cell types must be supported.',
          standards: ['ISPE-BIO'],
          options: [
            {
              value: 'mammalian',
              label: 'Mammalian cells (e.g. CHO, HEK293, hybridoma)',
              solution: 'Low-shear design: axial-flow impeller(s) (pitched blade / marine), tip speed typically ≤ 1.5-2 m/s, power input typically 10-100 W/m³. Micro-sparger for O2 plus macro-sparger for CO2 stripping, low gas flow (≤ 0.1 vvm). pH control with CO2 and base, 30-37 °C.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'bacteria',
              label: 'Bacteria (e.g. E. coli)',
              solution: 'High oxygen-transfer design: 2-3 radial (Rushton) impellers with baffles, power input typically 1-5 kW/m³, aeration up to 1-2 vvm with O2 enrichment. High cooling capacity (metabolic heat ≈ 460 kJ per mol O2 consumed, Cooney\'s rule). Liquid acid/base pH control, foam control, exhaust condenser.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'yeast',
              label: 'Yeast / fungi (e.g. Pichia, S. cerevisiae, filamentous fungi)',
              solution: 'As bacteria. Methanol-fed Pichia: methanol feed with safety interlocks and an ATEX assessment. Filamentous fungi: viscous broth - consider up-pumping hydrofoils and higher drive torque.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'insect',
              label: 'Insect cells (e.g. Sf9, High Five)',
              solution: 'Low-shear design as for mammalian cells, operation at 27-28 °C (cooling needed below ambient). pH usually monitored only. Baculovirus infection step - confirm biosafety level.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'adherent',
              label: 'Adherent or stem cells on microcarriers (cell & gene therapy)',
              solution: 'Very gentle mixing just above microcarrier suspension speed, low gas flows (headspace or micro-sparging), closed aseptic processing, typically single-use. Settling/media exchange and harvest functions.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'PRC-02',
          topic: 'Operating modes',
          type: 'multi',
          gmp: false,
          text: 'Which operating modes are required?',
          help: 'Select all modes the bioreactor must support.',
          standards: [],
          options: [
            {
              value: 'batch',
              label: 'Batch',
              solution: 'Standard control loops; additions limited to pH correction and antifoam.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'fedbatch',
              label: 'Fed-batch',
              solution: 'Feed pump(s) with flow or gravimetric (balance/load-cell) control; feed profiles in the recipe (constant, linear, exponential, DO-stat or pH-stat).',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'perfusion',
              label: 'Perfusion (with cell retention)',
              solution: 'Interface to a cell-retention device (ATF/TFF or acoustic settler), continuous media feed plus harvest and bleed pumps under weight control. Capacitance biomass probe recommended for bleed control. Design for long runs (sensor drift, sterile boundary robustness).',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'continuous',
              label: 'Continuous (chemostat / turbidostat)',
              solution: 'Constant weight or level control with continuous feed and harvest; sterile media supply for long runs; turbidity probe for turbidostat operation.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'PRC-03',
          topic: 'Process temperature range',
          type: 'single',
          gmp: true,
          text: 'What process temperature range is required?',
          help: 'Sterilisation temperatures are covered in the cleaning & sterilisation section.',
          standards: [],
          options: [
            {
              value: 'cellculture',
              label: '25-40 °C (cell culture)',
              solution: 'Jacket with temperature control unit (TCU); control accuracy typically ±0.2 °C at setpoint.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'microbial',
              label: '20-45 °C with high heat load (microbial)',
              solution: 'Jacket, plus internal coils at large scale if the jacket area is insufficient. Cooling capacity sized from maximum OUR and agitation power; chilled water supply.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'extended',
              label: 'Extended range (e.g. 4-60 °C, cold hold or heat inactivation)',
              solution: 'TCU with chiller/glycol and heater. Specify required heat-up and cool-down times in the details field; check sensor and material limits.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'PRC-04',
          topic: 'Oxygen transfer capacity',
          type: 'single',
          gmp: false,
          text: 'What oxygen-transfer capacity (kLa) is required?',
          help: 'If unknown, choose based on the organism. kLa is verified at FAT/SAT with the gassing-out method in water or model medium.',
          standards: [],
          options: [
            {
              value: 'low',
              label: 'Low - cell culture (kLa typically ≤ 20 h⁻¹)',
              solution: 'Micro- or drilled-pipe sparger, gas flow ≤ 0.1 vvm, O2 enrichment.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'medium',
              label: 'Medium - high-density cell culture / yeast (kLa ≈ 20-200 h⁻¹)',
              solution: 'Hybrid impeller set or Rushton turbines, gas flow up to ~1 vvm, O2 enrichment.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'high',
              label: 'High - high-cell-density microbial (kLa > 200 h⁻¹)',
              solution: 'Multiple Rushton turbines, high power input, gas flow up to 2 vvm, O2 enrichment, operation at elevated head pressure (e.g. +0.5 barg) to increase O2 solubility.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'PRC-05',
          topic: 'Process description',
          type: 'text',
          gmp: false,
          text: 'Briefly describe the process.',
          help: 'Product, media, typical run duration, critical process parameters and anything unusual.',
          standards: [],
          placeholder: 'e.g. CHO fed-batch, 14 days, chemically defined media, daily bolus feed, target 20 × 10⁶ cells/mL'
        }
      ],
      baseline: []
    },

    // =========================================================================
    {
      id: 'VES',
      title: 'Vessel & materials',
      intro: 'Vessel technology, size and materials of construction.',
      questions: [
        {
          id: 'VES-01',
          topic: 'Vessel technology',
          type: 'single',
          gmp: true,
          text: 'Which vessel technology is required?',
          help: 'This choice changes which follow-up questions apply.',
          standards: ['ASME-BPE'],
          options: [
            {
              value: 'ss',
              label: 'Stainless steel (reusable, cleaned and sterilised in place)',
              solution: '316L product-contact parts, hygienic design per ASME BPE (fully drainable, dead legs L/D ≤ 2), CIP spray devices, SIP with clean steam, pressure-rated vessel (PED / ASME VIII).',
              standards: ['ASME-BPE', 'PED', 'ASME-VIII'],
              scope: 'tbd'
            },
            {
              value: 'su',
              label: 'Single-use (bag in a rigid holder)',
              solution: 'Pre-sterilised bag assembly (gamma, ISO 11137, SAL 10⁻⁶). Film and components USP <87>/<88> Class VI, extractables data per USP <665> / BioPhorum protocol, integrity assurance per ASTM E3244. Stainless holder with heating jacket and load cells; supply and change-notification agreement for the bag.',
              standards: ['ISO-11137', 'USP-88', 'USP-665', 'BPOG-EX', 'ASTM-E3051', 'ASTM-E3244'],
              scope: 'tbd'
            },
            {
              value: 'glass',
              label: 'Glass vessel (autoclavable, bench scale)',
              solution: 'Borosilicate glass 3.3 vessel with 316L headplate, sterilised by autoclave. Bench controller to IEC 61010-1.',
              standards: ['ISO-3585', 'IEC-61010'],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'VES-02',
          topic: 'Maximum working volume',
          type: 'number',
          gmp: false,
          text: 'Maximum working volume',
          unit: 'L',
          min: 0.1,
          max: 50000,
          step: 'any',
          help: 'Largest liquid volume at the end of the process (including feeds).',
          standards: [],
          bands: [
            { max: 20, label: 'Bench scale', solution: 'Autoclavable glass or single-use bench system with a benchtop controller.' },
            { max: 250, label: 'Pilot scale', solution: 'Skid-mounted SIP-capable stainless steel or single-use system; mobile skid possible. Total vessel volume typically 1.25-1.5 × working volume.' },
            { max: 2000, label: 'Clinical / small commercial scale', solution: 'Fixed stainless steel or single-use system (single-use is common up to 2,000 L). Total vessel volume typically 1.25-1.5 × working volume.' },
            { max: null, label: 'Large commercial scale', solution: 'Typically stainless steel; single-use options are limited at this scale. Structural design, access platforms and agitator removal space to be included.' }
          ],
          scopeRange: { min: null, max: null, note: '' }
        },
        {
          id: 'VES-03',
          topic: 'Minimum working volume',
          type: 'number',
          gmp: false,
          text: 'Minimum working volume',
          unit: 'L',
          min: 0.05,
          max: 50000,
          step: 'any',
          turndownOf: 'VES-02',
          help: 'Smallest volume at which mixing, aeration and all probes must work (e.g. at inoculation).',
          standards: [],
          bands: [
            { max: null, label: 'Turndown', solution: 'Minimum volume is limited by lowest-impeller and probe submergence. Turndown of about 1:5 is typical; larger turndown needs a dedicated vessel and probe design.' }
          ],
          scopeRange: { min: null, max: null, note: '' }
        },
        {
          id: 'VES-04',
          topic: 'Design pressure / temperature',
          type: 'single',
          gmp: true,
          text: 'What design pressure and temperature does the vessel need?',
          help: 'SIP at 121-125 °C means roughly 1.0-1.3 barg of steam pressure.',
          standards: ['PED', 'ASME-VIII', 'EN-13445'],
          showIf: { q: 'VES-01', in: ['ss'] },
          options: [
            {
              value: 'standard',
              label: 'Full vacuum / +3 barg at 150 °C (standard)',
              solution: 'Covers SIP up to 134 °C and vacuum during cool-down. PED category assessment with notified body as required; ASME U-stamp for North America where required.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'minimum',
              label: 'Full vacuum / +2.5 barg at 140 °C (minimum for SIP)',
              solution: 'Sufficient for SIP at 121-125 °C. Lower wall thickness, smaller safety devices.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'elevated',
              label: 'Higher pressure (> +3 barg, pressurised fermentation)',
              solution: 'Increased wall thickness, safety valve / rupture disc sizing for the higher pressure. Requires engineering review.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'VES-05',
          topic: 'Product-contact surface finish',
          type: 'single',
          gmp: true,
          text: 'Which product-contact surface finish is required?',
          help: 'Applies to the vessel, piping and wetted components. Non-product-contact surfaces are typically Ra ≤ 1.6 µm or bead-blasted.',
          standards: ['ASME-BPE', 'ASTM-A967', 'ASTM-A380'],
          showIf: { q: 'VES-01', in: ['ss'] },
          options: [
            {
              value: 'ra08',
              label: 'Ra ≤ 0.8 µm, mechanically polished (≈ ASME BPE SF3, ≤ 0.76 µm)',
              solution: 'Common EU practice for cell culture and microbial service. Passivated after fabrication; roughness measurement report.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'ra05',
              label: 'Ra ≤ 0.5 µm, mechanically polished (ASME BPE SF1, ≤ 0.51 µm)',
              solution: 'Improved cleanability. Passivated after fabrication; roughness measurement report.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'ra04ep',
              label: 'Ra ≤ 0.4 µm, polished and electropolished (ASME BPE SF4, ≤ 0.38 µm)',
              solution: 'Highest cleanability and corrosion resistance, lower rouging tendency. Electropolishing of vessel internals and tubing; longer lead time and higher cost.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'VES-06',
          topic: 'Product-contact metallic material',
          type: 'single',
          gmp: true,
          text: 'Which metallic material is required for product-contact parts?',
          help: '316L suits almost all culture media. Higher alloys are only needed for aggressive (e.g. high-chloride) media.',
          standards: ['ASME-BPE', 'EN-10204'],
          showIf: { q: 'VES-01', in: ['ss', 'glass'] },
          options: [
            {
              value: '316l',
              label: '316L stainless steel (standard)',
              solution: '316L (1.4404 / 1.4435) with ASME BPE sulfur range for weldability; 304 or better for non-product contact. EN 10204 3.1 certificates for product-contact parts.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'highalloy',
              label: 'Higher alloy (e.g. 6Mo super-austenitic, Hastelloy)',
              solution: 'Selected for corrosive media; longer lead times, special welding procedures. Requires engineering review.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'VES-07',
          topic: 'Elastomer and polymer compliance',
          type: 'multi',
          gmp: true,
          text: 'Which compliance evidence is required for product-contact elastomers and polymers?',
          help: 'Seals, diaphragms, tubing, filters and single-use components.',
          standards: ['ASME-BPE'],
          options: [
            {
              value: 'usp',
              label: 'USP <87>/<88> Class VI',
              solution: 'Certificates of compliance per material and supplier.',
              standards: ['USP-88'],
              scope: 'tbd'
            },
            {
              value: 'fda',
              label: 'FDA 21 CFR 177 conformance',
              solution: 'Statement of conformity per material (e.g. 21 CFR 177.2600 for elastomers).',
              standards: ['CFR-177'],
              scope: 'tbd'
            },
            {
              value: 'tse',
              label: 'TSE/BSE-free (animal-derived-ingredient-free) statement',
              solution: 'ADI-free / TSE statement per EMA/410/01 for all product-contact materials.',
              standards: ['EMA-TSE'],
              scope: 'tbd'
            },
            {
              value: 'el',
              label: 'Extractables data for the customer\'s leachables risk assessment',
              solution: 'Extractables data generated per USP <665> / BioPhorum protocol for single-use and polymeric components.',
              standards: ['USP-665', 'BPOG-EX'],
              scope: 'tbd'
            },
            {
              value: 'food',
              label: 'EU food-contact compliance',
              solution: 'Declaration of compliance per Regulation (EC) 1935/2004 and applicable specific measures.',
              standards: ['EU-1935'],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'VES-08',
          topic: 'Single-use bag sourcing',
          type: 'single',
          gmp: true,
          text: 'How should single-use bags be sourced?',
          help: 'Bag supply security matters for commercial processes.',
          standards: ['ASTM-E3051'],
          showIf: { q: 'VES-01', in: ['su'] },
          options: [
            {
              value: 'standard',
              label: 'Supplier-standard bag platform',
              solution: 'Bags from the supplier\'s qualified film and assembly platform; supply agreement with change notification and safety stock.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'customer',
              label: 'Customer-specified bag / film platform',
              solution: 'Holder, sensors and connections adapted to the customer\'s bag. Requires compatibility review and joint qualification.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'dual',
              label: 'Dual sourcing required',
              solution: 'Holder designed for two qualified bag suppliers; comparability data for both. Requires engineering review.',
              standards: [],
              scope: 'tbd'
            }
          ]
        }
      ],
      baseline: [
        {
          id: 'VES-B1',
          text: 'Product-contact stainless steel tubing is orbitally welded; welds are documented (weld log, weld map) and inspected per ASME BPE Part MJ.',
          standards: ['ASME-BPE'],
          showIf: { q: 'VES-01', in: ['ss'] },
          scope: 'tbd'
        },
        {
          id: 'VES-B2',
          text: 'Product-contact systems are fully drainable with no dead legs exceeding L/D = 2.',
          standards: ['ASME-BPE', 'EHEDG-8'],
          showIf: { q: 'VES-01', in: ['ss'] },
          scope: 'tbd'
        }
      ]
    },

    // =========================================================================
    {
      id: 'AGI',
      title: 'Mixing & agitation',
      intro: 'Drive, shaft sealing and impeller configuration. Single-use systems use the bag-integrated agitator.',
      questions: [
        {
          id: 'AGI-01',
          topic: 'Agitator drive and shaft seal',
          type: 'single',
          gmp: true,
          text: 'Which agitator drive and shaft seal is preferred?',
          help: 'The seal is part of the sterile boundary.',
          standards: ['ASME-BPE'],
          showIf: { q: 'VES-01', in: ['ss', 'glass'] },
          options: [
            {
              value: 'magnetic',
              label: 'Bottom-mounted magnetic drive',
              solution: 'No shaft penetration: highest sterility and containment assurance, no seal support system. Torque-limited - confirm suitability for high-power microbial service.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'mechseal',
              label: 'Top-mounted with double mechanical seal',
              solution: 'Double mechanical seal with sterile barrier medium (condensate or sterile water), seal support system with pressure/flow monitoring and alarm. Suitable for high power input.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'supplier',
              label: 'Supplier recommendation',
              solution: 'Supplier selects the drive based on scale, power input and containment level.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'AGI-02',
          topic: 'Impeller configuration',
          type: 'single',
          gmp: false,
          text: 'Which impeller configuration is preferred?',
          help: 'If unknown, choose "Supplier recommendation" - the organism and kLa answers are used as the design basis.',
          standards: [],
          options: [
            {
              value: 'axial',
              label: 'Axial flow (pitched blade, marine, hydrofoil)',
              solution: 'Low shear and good bulk mixing for cell culture; typical tip speed ≤ 1.5-2 m/s.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'radial',
              label: 'Radial flow (Rushton turbine)',
              solution: 'High gas dispersion and kLa for microbial processes; used with baffles.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'combined',
              label: 'Combination (Rushton bottom, axial top)',
              solution: 'Gas dispersion at the sparger plus good top-to-bottom mixing; common for flexible multi-purpose units.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'supplier',
              label: 'Supplier recommendation',
              solution: 'Supplier proposes impeller type, number and spacing with a mixing / kLa design calculation.',
              standards: [],
              scope: 'tbd'
            }
          ]
        }
      ],
      baseline: [
        {
          id: 'AGI-B1',
          text: 'Agitator speed is variable (frequency converter) with speed feedback, indicated and recorded in the control system.',
          standards: [],
          scope: 'tbd'
        }
      ]
    },

    // =========================================================================
    {
      id: 'GAS',
      title: 'Aeration & gassing',
      intro: 'Process gases, sparging and exhaust gas handling.',
      questions: [
        {
          id: 'GAS-01',
          topic: 'Process gases',
          type: 'multi',
          gmp: true,
          text: 'Which process gases are required?',
          help: 'Each gas is supplied through a mass flow controller and a sterile-grade filter.',
          standards: ['ISPE-GAS', 'ISO-8573', 'PDA-TR40'],
          options: [
            {
              value: 'air',
              label: 'Air',
              solution: 'Thermal mass flow controller (MFC); oil-free, dry supply with ISO 8573-1 purity class agreed with the customer; 0.2 µm hydrophobic sterile filter, integrity-testable.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'o2',
              label: 'Oxygen (enrichment)',
              solution: 'Dedicated MFC; all O2-wetted parts cleaned for oxygen service and made of oxygen-compatible materials; O2 shut-off on alarm.',
              standards: ['ASTM-G93', 'EIGA-33'],
              scope: 'tbd'
            },
            {
              value: 'n2',
              label: 'Nitrogen',
              solution: 'MFC for DO control below saturation, headspace inerting and DO-probe zero calibration.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'co2',
              label: 'Carbon dioxide',
              solution: 'MFC for pH control (acid side) in bicarbonate-buffered media, via sparger or headspace.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'GAS-02',
          topic: 'Gas entry points',
          type: 'multi',
          gmp: false,
          text: 'Which gas entry points are required?',
          help: 'Select all that apply.',
          standards: [],
          options: [
            {
              value: 'micro',
              label: 'Micro-sparger (sintered / fine pores)',
              solution: 'Small bubbles for efficient O2 transfer at low gas flow; standard for cell culture.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'macro',
              label: 'Macro-sparger (ring, open or drilled pipe)',
              solution: 'Larger bubbles for CO2 stripping in cell culture or high gas flow in microbial processes; placed below the lowest impeller.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'overlay',
              label: 'Headspace overlay',
              solution: 'Separate overlay line with flow control and sterile filter; used for CO2 removal and early culture phases.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'GAS-03',
          topic: 'Maximum gas flow',
          type: 'single',
          gmp: false,
          text: 'What maximum gas flow rate is required?',
          help: 'vvm = gas volume per liquid volume per minute.',
          standards: [],
          options: [
            {
              value: 'low',
              label: 'Low - up to 0.1 vvm (cell culture)',
              solution: 'MFCs sized for low flows; two MFCs per gas (low/high range) if a wide turndown is needed.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'medium',
              label: 'Medium - up to 0.5 vvm',
              solution: 'MFCs and exhaust filter sized accordingly.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'high',
              label: 'High - up to 1-2 vvm (microbial)',
              solution: 'Large MFCs, exhaust condenser and adequately sized exhaust filter to limit pressure drop and filter wetting.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'GAS-04',
          topic: 'Exhaust gas handling',
          type: 'single',
          gmp: true,
          text: 'How should the exhaust gas be handled?',
          help: 'The exhaust filter is part of the sterile boundary and, for BSL-2+, of the containment.',
          standards: ['PDA-TR40'],
          options: [
            {
              value: 'heated',
              label: 'Heated exhaust filter',
              solution: 'Electrically heated 0.2 µm hydrophobic filter to prevent blinding by condensate; in-situ integrity testable; exhaust pressure monitoring.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'condenser',
              label: 'Exhaust condenser + heated filter',
              solution: 'Cooled condenser returns moisture and reduces evaporation losses; needed at high gas flow.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'redundant',
              label: 'Redundant (double) exhaust filtration',
              solution: 'Two sterile-grade filters in series for containment; both integrity-testable.',
              standards: ['NIH-GL'],
              scope: 'tbd'
            }
          ]
        }
      ],
      baseline: [
        {
          id: 'GAS-B1',
          text: 'All gas inlets and the exhaust are protected by sterile-grade (0.2 µm) hydrophobic filters that can be integrity-tested.',
          standards: ['PDA-TR40'],
          scope: 'tbd'
        }
      ]
    },

    // =========================================================================
    {
      id: 'INS',
      title: 'Measurement & control',
      intro: 'Control loops, sensors, additions and foam control.',
      questions: [
        {
          id: 'INS-01',
          topic: 'pH control',
          type: 'single',
          gmp: true,
          text: 'How should pH be controlled?',
          help: '',
          standards: [],
          options: [
            {
              value: 'co2base',
              label: 'CO2 (acid side) + liquid base - cell culture',
              solution: 'pH probe (SIP/autoclave-capable glass electrode, or pre-calibrated optical sensor for single-use), configurable dead band to limit base addition, base pump.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'acidbase',
              label: 'Liquid acid + liquid base - microbial',
              solution: 'Two addition pumps; ammonia solution as base also supplies nitrogen (ventilation / exposure review needed).',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'monitor',
              label: 'Monitoring only',
              solution: 'pH probe with indication, alarm and recording.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'INS-02',
          topic: 'Dissolved oxygen control',
          type: 'single',
          gmp: true,
          text: 'How should dissolved oxygen (DO) be controlled?',
          help: 'Optical (luminescence) DO sensors are recommended: no polarisation time, low maintenance.',
          standards: [],
          options: [
            {
              value: 'cascade',
              label: 'Cascade: agitation → air flow → O2 enrichment (microbial)',
              solution: 'Configurable cascade with limits per stage; optical DO sensor.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'cellculture',
              label: 'O2 via sparger, N2 to lower DO (cell culture)',
              solution: 'Constant agitation and air/overlay, O2 added on demand, N2 to strip; optical DO sensor.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'monitor',
              label: 'Monitoring only',
              solution: 'DO sensor with indication, alarm and recording.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'INS-03',
          topic: 'Additional measurements',
          type: 'multi',
          gmp: false,
          text: 'Which additional measurements are required?',
          help: 'Temperature, pH and DO are always included.',
          standards: ['FDA-PAT', 'ICH-Q8'],
          options: [
            {
              value: 'pressure',
              label: 'Headspace pressure',
              solution: 'Hygienic pressure transmitter; required for SIP control and over-pressure protection.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'weight',
              label: 'Weight (load cells)',
              solution: 'Load cells under the vessel or holder for volume, feed and perfusion control.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'redundant',
              label: 'Redundant pH and DO probes',
              solution: 'Second pH and DO probe for comparison and failover during long runs.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'biomass',
              label: 'Viable biomass (capacitance)',
              solution: 'In-line capacitance probe for viable cell density; used for perfusion bleed and feed control.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'od',
              label: 'Optical density / turbidity',
              solution: 'In-line turbidity probe for total biomass in microbial processes.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'offgas',
              label: 'Off-gas O2 / CO2 analysis',
              solution: 'Exhaust analyser for OUR, CER and respiratory quotient calculation.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'pat',
              label: 'Spare ports for PAT (e.g. Raman, NIR)',
              solution: 'Hygienic 25 mm / Ingold ports reserved for spectroscopic probes, with data interface to the control system.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'INS-04',
          topic: 'Liquid additions and feeds',
          type: 'single',
          gmp: false,
          text: 'How many liquid addition / feed lines are required?',
          help: 'Count acid, base, antifoam and all feeds.',
          standards: [],
          options: [
            {
              value: 'two',
              label: 'Up to 2 (e.g. base and antifoam)',
              solution: 'Integrated peristaltic pumps with sterile addition ports.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'four',
              label: '3-4 (base, antifoam, 1-2 feeds)',
              solution: 'Integrated pumps; feeds with flow or gravimetric control.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'many',
              label: '5 or more, incl. controlled feeds',
              solution: 'Additional external pumps or addition skid with gravimetric control; recipe-based feed profiles.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'INS-05',
          topic: 'Foam control',
          type: 'single',
          gmp: false,
          text: 'How should foam be controlled?',
          help: '',
          standards: [],
          options: [
            {
              value: 'probe',
              label: 'Antifoam addition via foam probe',
              solution: 'Conductive/capacitive foam probe triggering timed antifoam doses; dose counting and limits.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'mechanical',
              label: 'Mechanical foam breaker',
              solution: 'Shaft-mounted foam breaker above the liquid; reduces antifoam use. Top-drive only.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'none',
              label: 'Not required',
              solution: 'No foam control; headspace sized accordingly.',
              standards: [],
              scope: 'tbd'
            }
          ]
        }
      ],
      baseline: [
        {
          id: 'INS-B1',
          text: 'Process temperature is measured with Pt100 class A sensors.',
          standards: ['IEC-60751'],
          scope: 'tbd'
        },
        {
          id: 'INS-B2',
          text: 'GMP-critical instruments are calibrated before delivery with certificates traceable to national standards.',
          standards: ['ISO-17025'],
          scope: 'tbd'
        }
      ]
    },

    // =========================================================================
    {
      id: 'STE',
      title: 'Cleaning & sterilisation',
      intro: 'Applies to stainless steel systems. Single-use bags arrive pre-sterilised; glass vessels are autoclaved.',
      questions: [
        {
          id: 'STE-01',
          topic: 'Cleaning',
          type: 'single',
          gmp: true,
          text: 'How will the vessel be cleaned?',
          help: '',
          standards: ['ASME-BPE'],
          showIf: { q: 'VES-01', in: ['ss'] },
          options: [
            {
              value: 'cipplant',
              label: 'Automated CIP from the plant CIP system',
              solution: 'Spray devices with coverage verified by riboflavin test (ASME BPE Part SD), CIP supply/return connections, CIP sequences in the control system, interface to the plant CIP skid.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'cipskid',
              label: 'Automated CIP with dedicated CIP skid in supply scope',
              solution: 'As above, plus a CIP skid (tanks, pump, heat exchanger, conductivity and temperature control) in the supplier\'s scope.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'manual',
              label: 'Manual cleaning',
              solution: 'Design for manual access and cleaning (removable parts, accessible internals). Only suitable for small vessels.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'STE-02',
          topic: 'Sterilisation in place',
          type: 'single',
          gmp: true,
          text: 'How will the vessel be sterilised in place (SIP)?',
          help: '',
          standards: ['ISO-17665', 'PDA-TR1', 'EN-285'],
          showIf: { q: 'VES-01', in: ['ss'] },
          options: [
            {
              value: 'auto',
              label: 'Automated SIP of vessel and all connected lines',
              solution: 'Automated sequence (heat-up, hold with temperature verification at cold points, cool-down under sterile gas overpressure); steam traps and temperature sensors at condensate drains; F0 calculation. Clean steam quality per EN 285.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'semi',
              label: 'Semi-automated SIP (manual valve sequence)',
              solution: 'Manual valve operation guided by the HMI; automated temperature/time hold monitoring and recording.',
              standards: [],
              scope: 'tbd'
            }
          ]
        }
      ],
      baseline: []
    },

    // =========================================================================
    {
      id: 'TRF',
      title: 'Sampling, inoculation & harvest',
      intro: 'Every connection to the vessel is a potential breach of the sterile boundary.',
      questions: [
        {
          id: 'TRF-01',
          topic: 'Sampling',
          type: 'single',
          gmp: true,
          text: 'How will samples be taken?',
          help: '',
          standards: ['EU-GMP-A1', 'ASME-BPE'],
          options: [
            {
              value: 'valve',
              label: 'Steam-sterilisable sampling valve',
              solution: 'Hygienic sampling valve sterilised before and after each sample.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'su',
              label: 'Closed single-use sampling system',
              solution: 'Pre-sterilised sampling manifold with bags or syringes; no steam needed.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'auto',
              label: 'Automated sampling to an at-line analyser',
              solution: 'Automated aseptic sampling device with interface to the analyser and control system. Requires engineering review.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'TRF-02',
          topic: 'Aseptic connections',
          type: 'multi',
          gmp: true,
          text: 'Which aseptic connection methods are required for inoculation and transfers?',
          help: '',
          standards: ['EU-GMP-A1'],
          options: [
            {
              value: 'sip',
              label: 'SIP-able transfer line with steam-block valves',
              solution: 'Hard-piped transfer line sterilised together with the vessel.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'connector',
              label: 'Aseptic single-use connectors',
              solution: 'Pre-sterilised aseptic connectors on bag/tubing assemblies; steam-to-connect adaptors for stainless steel.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'weld',
              label: 'Sterile tube welding / sealing',
              solution: 'Thermoplastic tubing compatible with the customer\'s tube welder and sealer.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'septum',
              label: 'Septum / needle port (bench scale)',
              solution: 'Septum port for syringe inoculation and additions.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'TRF-03',
          topic: 'Harvest',
          type: 'single',
          gmp: true,
          text: 'How will the vessel be harvested?',
          help: '',
          standards: ['ASME-BPE'],
          options: [
            {
              value: 'bottom',
              label: 'Bottom outlet valve',
              solution: 'Zero-dead-leg (radial diaphragm) bottom valve, fully drainable.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'diptube',
              label: 'Dip tube / pump-out',
              solution: 'Dip tube with transfer pump or pressure transfer.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'downstream',
              label: 'Direct transfer to downstream equipment',
              solution: 'Controlled harvest flow to centrifuge or depth filtration, with interface signals to the downstream unit.',
              standards: [],
              scope: 'tbd'
            }
          ]
        }
      ],
      baseline: []
    },

    // =========================================================================
    {
      id: 'AUT',
      title: 'Automation & data integrity',
      intro: 'Control system, recipes, electronic records and connectivity.',
      questions: [
        {
          id: 'AUT-01',
          topic: 'Control system',
          type: 'single',
          gmp: false,
          text: 'Which control system is required?',
          help: '',
          standards: ['IEC-61131', 'ISA-101'],
          options: [
            {
              value: 'standard',
              label: 'Supplier-standard PLC + HMI (stand-alone)',
              solution: 'Supplier-standard control platform with local HMI and integrated data storage.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'customer',
              label: 'Customer-specified PLC / HMI brand',
              solution: 'Control system on the customer\'s preferred platform (specify brand and versions in details). Requires engineering review.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'dcs',
              label: 'Integration into the plant DCS',
              solution: 'Supplier delivers instruments and I/O to the DCS, or a skid controller with a defined DCS interface. Interface specification and responsibility split to be agreed.',
              standards: ['ISA-88'],
              scope: 'tbd'
            },
            {
              value: 'mtp',
              label: 'Modular integration via NAMUR MTP',
              solution: 'Skid controller exposing services and HMI via Module Type Package to the process orchestration layer.',
              standards: ['MTP', 'OPC-UA'],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'AUT-02',
          topic: 'Recipe and batch management',
          type: 'single',
          gmp: false,
          text: 'What level of recipe / batch management is required?',
          help: '',
          standards: ['ISA-88'],
          options: [
            {
              value: 'manual',
              label: 'Manual setpoints',
              solution: 'Operator enters setpoints; all changes recorded.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'recipe',
              label: 'Recipe management (ISA-88 phases)',
              solution: 'Version-controlled recipes built from ISA-88 phases (e.g. SIP, fill, inoculate, run, harvest); batch reports.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'mes',
              label: 'MES-driven batch execution / electronic batch record',
              solution: 'Recipe download and batch data upload via ISA-95 interface to the customer MES.',
              standards: ['ISA-95'],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'AUT-03',
          topic: 'Electronic records and data integrity',
          type: 'single',
          gmp: true,
          text: 'What level of electronic records / data integrity compliance is required?',
          help: 'Required for GMP use. Software is validated following GAMP 5.',
          standards: ['CFR-11', 'EU-GMP-A11', 'GAMP5', 'DI-GUIDE'],
          options: [
            {
              value: 'full',
              label: 'Full 21 CFR Part 11 / EU GMP Annex 11 compliance',
              solution: 'Unique user IDs with role-based access, secure audit trail (who / what / when / why), electronic signatures, time synchronisation, protected data storage with backup and restore, human-readable export. Supplier validation documentation per GAMP 5.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'basic',
              label: 'Basic data integrity (audit trail, user levels, no e-signatures)',
              solution: 'User management and audit trail; batch reports signed on paper.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'none',
              label: 'Not required (non-GMP)',
              solution: 'Supplier-standard data logging and export.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'AUT-04',
          topic: 'System interfaces',
          type: 'multi',
          gmp: false,
          text: 'Which interfaces to other systems are required?',
          help: '',
          standards: [],
          options: [
            {
              value: 'opcua',
              label: 'OPC UA server',
              solution: 'OPC UA server exposing process values, alarms and batch data.',
              standards: ['OPC-UA'],
              scope: 'tbd'
            },
            {
              value: 'historian',
              label: 'Plant historian',
              solution: 'Data transfer to the customer historian (e.g. via OPC UA); the local buffer covers network outages.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'mes',
              label: 'MES',
              solution: 'ISA-95 based interface for orders, recipes and batch data.',
              standards: ['ISA-95'],
              scope: 'tbd'
            },
            {
              value: 'remote',
              label: 'Remote support access',
              solution: 'Secure, customer-controlled remote access (VPN, session approval, logging).',
              standards: ['IEC-62443'],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'AUT-05',
          topic: 'Cybersecurity',
          type: 'single',
          gmp: false,
          text: 'What cybersecurity requirements apply?',
          help: 'The EU Machinery Regulation and Cyber Resilience Act add cybersecurity obligations from 2027.',
          standards: ['IEC-62443', 'MR', 'CRA'],
          options: [
            {
              value: 'standard',
              label: 'Supplier-standard hardening',
              solution: 'No default passwords, unused services and ports disabled, documented patch and antivirus policy.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'sl1',
              label: 'IEC 62443-3-3 Security Level 1',
              solution: 'Security requirements documented per IEC 62443-3-3 SL 1; network segmentation concept.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'sl2',
              label: 'IEC 62443-3-3 Security Level 2 + customer OT policy',
              solution: 'SL 2 controls, compliance with the customer IT/OT security policy, joint security review.',
              standards: [],
              scope: 'tbd'
            }
          ]
        }
      ],
      baseline: [
        {
          id: 'AUT-B1',
          text: 'Alarms are prioritised, require acknowledgement and are stored in an alarm history.',
          standards: ['ISA-18'],
          scope: 'tbd'
        },
        {
          id: 'AUT-B2',
          text: 'The control system and data storage are protected by a UPS for controlled shutdown and data retention on power loss.',
          standards: [],
          scope: 'tbd'
        }
      ]
    },

    // =========================================================================
    {
      id: 'UTL',
      title: 'Utilities & installation',
      intro: 'What the site provides and the physical constraints of the installation.',
      questions: [
        {
          id: 'UTL-01',
          topic: 'Electrical supply',
          type: 'single',
          gmp: false,
          text: 'Which main electrical supply is available?',
          help: '',
          standards: ['EN-60204'],
          options: [
            {
              value: '400',
              label: '400 V, 3-phase, 50 Hz',
              solution: 'Control panel to EN 60204-1.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: '480',
              label: '480 V, 3-phase, 60 Hz',
              solution: 'Control panel to UL 508A / NFPA 79.',
              standards: ['UL-508A', 'NFPA-79'],
              scope: 'tbd'
            },
            {
              value: '208',
              label: '208 V, 3-phase, 60 Hz',
              solution: 'Control panel to UL 508A / NFPA 79.',
              standards: ['UL-508A', 'NFPA-79'],
              scope: 'tbd'
            },
            {
              value: '230',
              label: '230 V, single-phase (bench systems)',
              solution: 'Laboratory equipment to IEC 61010-1.',
              standards: ['IEC-61010'],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'UTL-02',
          topic: 'Clean steam',
          type: 'single',
          gmp: true,
          text: 'Is clean steam available at the installation point?',
          help: 'Needed for SIP of stainless steel systems.',
          standards: ['EN-285'],
          showIf: { q: 'VES-01', in: ['ss'] },
          options: [
            {
              value: 'plant',
              label: 'Yes, plant clean steam',
              solution: 'Clean steam connection with pressure regulation and condensate return; quality per EN 285 (non-condensable gases ≤ 3.5 %, dryness ≥ 0.95, superheat ≤ 25 K).',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'generator',
              label: 'No - include a clean steam generator',
              solution: 'Clean steam generator (plant steam or electric heated) in the supplier\'s scope, fed with purified water.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'UTL-03',
          topic: 'Cooling medium',
          type: 'single',
          gmp: false,
          text: 'Which cooling medium is available?',
          help: 'Required cooling capacity follows from the heat-load calculation.',
          standards: [],
          options: [
            {
              value: 'cw',
              label: 'Cooling water (e.g. 20-25 °C)',
              solution: 'Heat exchanger in the TCU loop; may limit the minimum process temperature.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'chw',
              label: 'Chilled water (e.g. 6-12 °C)',
              solution: 'Heat exchanger in the TCU loop; suitable for most processes.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'glycol',
              label: 'Glycol / brine (below 0 °C)',
              solution: 'Needed for cold hold or low-temperature condenser.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'none',
              label: 'None - include a chiller',
              solution: 'Integrated or stand-alone chiller in the supplier\'s scope; heat rejected to the room or to cooling water.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'UTL-04',
          topic: 'Fixed or mobile',
          type: 'single',
          gmp: false,
          text: 'Should the system be fixed or mobile?',
          help: '',
          standards: [],
          options: [
            {
              value: 'fixed',
              label: 'Fixed skid',
              solution: 'Skid anchored to the floor with hard-piped utilities.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'mobile',
              label: 'Mobile on castors',
              solution: 'Skid on lockable castors with flexible utility connections and quick couplings.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'UTL-05',
          topic: 'Installation constraints',
          type: 'text',
          gmp: false,
          text: 'Describe any installation constraints.',
          help: 'Footprint, ceiling height, door and lift sizes, floor load, distance to utilities.',
          standards: [],
          placeholder: 'e.g. max. footprint 3 × 2 m, ceiling 3.2 m, door 1.2 × 2.1 m, floor load 1,000 kg/m²'
        }
      ],
      baseline: []
    },

    // =========================================================================
    {
      id: 'DOC',
      title: 'Qualification, documentation & service',
      intro: 'What the supplier delivers besides the equipment.',
      questions: [
        {
          id: 'DOC-01',
          topic: 'Qualification support',
          type: 'single',
          gmp: true,
          text: 'What qualification support is required?',
          help: '',
          standards: ['EU-GMP-A15', 'ASTM-E2500', 'ISPE-CQ'],
          options: [
            {
              value: 'standard',
              label: 'Supplier-standard FAT and SAT',
              solution: 'FAT and SAT to supplier procedures with reports. Customer performs qualification.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'protocols',
              label: 'Risk-based C&Q documents (DQ support, FAT/SAT and IQ/OQ protocols)',
              solution: 'Requirements traceability, design review support, pre-approved FAT/SAT protocols, IQ/OQ protocols for customer execution.',
              standards: ['GAMP5'],
              scope: 'tbd'
            },
            {
              value: 'execution',
              label: 'Full IQ/OQ execution by the supplier on site',
              solution: 'As above, plus execution of IQ/OQ by supplier personnel and final reports.',
              standards: ['GAMP5'],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'DOC-02',
          topic: 'Documentation package',
          type: 'multi',
          gmp: true,
          text: 'Which documents are required?',
          help: 'Operating manual, P&ID, GA drawing and electrical schematics are always included.',
          standards: [],
          options: [
            {
              value: 'specs',
              label: 'Functional and design specifications (FS, HDS, SDS)',
              solution: 'Specifications traceable to this URS.',
              standards: ['GAMP5'],
              scope: 'tbd'
            },
            {
              value: 'materials',
              label: 'Material certificates EN 10204 3.1',
              solution: 'For all product-contact metallic parts.',
              standards: ['EN-10204'],
              scope: 'tbd'
            },
            {
              value: 'surface',
              label: 'Surface finish and passivation certificates',
              solution: 'Roughness measurement report and passivation certificate.',
              standards: ['ASTM-A967', 'ASTM-A380'],
              scope: 'tbd'
            },
            {
              value: 'welding',
              label: 'Welding documentation',
              solution: 'Weld procedures and qualifications, weld log, weld map, inspection records.',
              standards: ['ASME-BPE'],
              scope: 'tbd'
            },
            {
              value: 'calibration',
              label: 'Calibration certificates',
              solution: 'Traceable certificates for all calibrated instruments.',
              standards: ['ISO-17025'],
              scope: 'tbd'
            },
            {
              value: 'risk',
              label: 'Risk assessments',
              solution: 'Machinery risk assessment and support for the customer\'s quality risk assessment.',
              standards: ['ISO-12100', 'ICH-Q9'],
              scope: 'tbd'
            },
            {
              value: 'spares',
              label: 'Spare parts and maintenance plan',
              solution: 'Recommended spare parts list and preventive maintenance schedule.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'DOC-03',
          topic: 'Documentation language',
          type: 'single',
          gmp: false,
          text: 'In which language should documentation be supplied?',
          help: '',
          standards: [],
          options: [
            {
              value: 'en',
              label: 'English',
              solution: 'All documents in English.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'local',
              label: 'Local language (specify in details)',
              solution: 'Operating manual and HMI texts in the local language; technical documents in English.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'both',
              label: 'English and local language',
              solution: 'All user-facing documents in both languages.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'DOC-04',
          topic: 'Training',
          type: 'multi',
          gmp: false,
          text: 'Which training is required?',
          help: '',
          standards: [],
          options: [
            {
              value: 'operator',
              label: 'Operator training',
              solution: 'On-site training on operation, recipes, cleaning and sterilisation, with attendance records.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'maintenance',
              label: 'Maintenance training',
              solution: 'Preventive maintenance, seal and probe changes, calibration.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'admin',
              label: 'Automation / system administrator training',
              solution: 'User management, backup and restore, audit trail review.',
              standards: [],
              scope: 'tbd'
            }
          ]
        },
        {
          id: 'DOC-05',
          topic: 'Service and lifecycle support',
          type: 'multi',
          gmp: false,
          text: 'Which service and lifecycle support is required?',
          help: '',
          standards: [],
          options: [
            {
              value: 'warranty',
              label: 'Extended warranty',
              solution: 'Warranty beyond the standard period (specify duration in details).',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'pm',
              label: 'Preventive maintenance contract',
              solution: 'Scheduled maintenance visits including calibration and wear-part replacement.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'spares',
              label: 'Commissioning and 2-year spare parts package',
              solution: 'Spare parts delivered with the equipment.',
              standards: [],
              scope: 'tbd'
            },
            {
              value: 'remote',
              label: 'Remote support / hotline',
              solution: 'Defined response times for technical support.',
              standards: [],
              scope: 'tbd'
            }
          ]
        }
      ],
      baseline: []
    }
  ],

  // Sample answers behind the "Fill with an example project" button.
  example: {
    project: {
      customer: 'Example customer',
      site: 'Example site',
      project: 'Example - clinical mAb line, 500 L',
      contact: '',
      email: '',
      docNo: 'URS-EXAMPLE-001',
      revision: 'A',
      date: ''
    },
    answers: {
      'GEN-01': { value: 'clinical' },
      'GEN-02': { value: ['eu'] },
      'GEN-03': { value: 'bsl1' },
      'GEN-04': { value: 'gradeC' },
      'GEN-05': { value: 'none' },
      'PRC-01': { value: 'mammalian' },
      'PRC-02': { value: ['fedbatch'] },
      'PRC-03': { value: 'cellculture' },
      'PRC-04': { value: 'low' },
      'PRC-05': { value: 'CHO fed-batch, 14 days, chemically defined media, daily bolus feeds, target 20 × 10⁶ cells/mL.' },
      'VES-01': { value: 'su' },
      'VES-02': { value: 500 },
      'VES-03': { value: 100 },
      'VES-07': { value: ['usp', 'tse', 'el'] },
      'VES-08': { value: 'standard' },
      'AGI-02': { value: 'supplier' },
      'GAS-01': { value: ['air', 'o2', 'n2', 'co2'] },
      'GAS-02': { value: ['micro', 'macro', 'overlay'] },
      'GAS-03': { value: 'low' },
      'GAS-04': { value: 'heated' },
      'INS-01': { value: 'co2base' },
      'INS-02': { value: 'cellculture' },
      'INS-03': { value: ['weight', 'biomass'] },
      'INS-04': { value: 'four', notes: 'Two feeds (Feed A and Feed B) with gravimetric control.' },
      'INS-05': { value: 'probe' },
      'TRF-01': { value: 'su' },
      'TRF-02': { value: ['connector', 'weld'] },
      'TRF-03': { value: 'downstream' },
      'AUT-01': { value: 'standard' },
      'AUT-02': { value: 'recipe' },
      'AUT-03': { value: 'full' },
      'AUT-04': { value: ['opcua', 'historian'] },
      'AUT-05': { value: 'sl1' },
      'UTL-01': { value: '400' },
      'UTL-03': { value: 'chw' },
      'UTL-04': { value: 'mobile' },
      'UTL-05': { value: 'Max. footprint 3 × 2 m, ceiling height 3.2 m, door 1.4 × 2.2 m.' },
      'DOC-01': { value: 'protocols' },
      'DOC-02': { value: ['specs', 'calibration', 'risk', 'spares'] },
      'DOC-03': { value: 'en' },
      'DOC-04': { value: ['operator', 'maintenance'] },
      'DOC-05': { value: ['pm', 'spares'] }
    }
  }
};
