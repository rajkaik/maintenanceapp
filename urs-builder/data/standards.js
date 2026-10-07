/*
 * Standards and guidelines register for the URS builder.
 *
 * Questions and answer options reference these entries by key. The URS
 * document lists every standard cited by the customer's answers in its
 * "Referenced standards" chapter. Latest editions apply unless a question
 * states otherwise.
 */
window.URS_STANDARDS = {
  // --- Hygienic design, materials, pressure equipment -----------------------
  'ASME-BPE': { code: 'ASME BPE', title: 'Bioprocessing Equipment (Parts SD, SF, MJ, SG, PM, PI, SU)' },
  'ASME-VIII': { code: 'ASME BPVC Sec. VIII Div. 1', title: 'Rules for Construction of Pressure Vessels' },
  'EN-13445': { code: 'EN 13445', title: 'Unfired pressure vessels' },
  'PED': { code: 'PED 2014/68/EU', title: 'Pressure Equipment Directive' },
  'EHEDG-8': { code: 'EHEDG Doc. 8', title: 'Hygienic Equipment Design Criteria' },
  'EN-10204': { code: 'EN 10204', title: 'Metallic products - Types of inspection documents (3.1 certificates)' },
  'ASTM-A967': { code: 'ASTM A967', title: 'Chemical Passivation Treatments for Stainless Steel Parts' },
  'ASTM-A380': { code: 'ASTM A380', title: 'Cleaning, Descaling, and Passivation of Stainless Steel Parts, Equipment, and Systems' },
  'ISO-3585': { code: 'ISO 3585', title: 'Borosilicate glass 3.3 - Properties' },
  'ASTM-G93': { code: 'ASTM G93', title: 'Cleanliness Levels and Cleaning Methods for Materials and Equipment Used in Oxygen-Enriched Environments' },
  'EIGA-33': { code: 'EIGA Doc. 33', title: 'Cleaning of Equipment for Oxygen Service' },

  // --- Polymers and single-use ----------------------------------------------
  'USP-88': { code: 'USP <87>/<88>', title: 'Biological Reactivity Tests, In Vitro / In Vivo (Class VI)' },
  'USP-665': { code: 'USP <665>/<1665>', title: 'Plastic Components and Systems Used to Manufacture Pharmaceutical Drug Products and Biopharmaceutical Drug Substances and Products (official 1 May 2026)' },
  'BPOG-EX': { code: 'BioPhorum (BPOG)', title: 'Standardized Extractables Testing Protocol for Single-Use Systems in Biomanufacturing' },
  'ASTM-E3051': { code: 'ASTM E3051', title: 'Specification, Design, Verification, and Application of Single-Use Systems in Pharmaceutical and Biopharmaceutical Manufacturing' },
  'ASTM-E3244': { code: 'ASTM E3244', title: 'Integrity Assurance and Testing of Single-Use Systems' },
  'CFR-177': { code: '21 CFR 177', title: 'Indirect Food Additives: Polymers (incl. 177.2600 rubber articles)' },
  'EMA-TSE': { code: 'EMA/410/01 rev.3', title: 'Minimising the Risk of Transmitting Animal Spongiform Encephalopathy Agents via Medicinal Products' },
  'EU-1935': { code: 'Regulation (EC) 1935/2004', title: 'Materials and articles intended to come into contact with food' },

  // --- Sterilisation, filtration, cleaning ------------------------------------
  'ISO-17665': { code: 'ISO 17665', title: 'Sterilization of health care products - Moist heat' },
  'PDA-TR1': { code: 'PDA TR 1', title: 'Validation of Moist Heat Sterilization Processes' },
  'EN-285': { code: 'EN 285', title: 'Sterilization - Steam sterilizers - Large sterilizers (clean steam quality)' },
  'ISO-11137': { code: 'ISO 11137', title: 'Sterilization of health care products - Radiation' },
  'PDA-TR40': { code: 'PDA TR 40', title: 'Sterilizing Filtration of Gases' },

  // --- GMP, quality, validation -----------------------------------------------
  'EU-GMP': { code: 'EudraLex Vol. 4', title: 'EU Guidelines for Good Manufacturing Practice' },
  'EU-GMP-A1': { code: 'EU GMP Annex 1', title: 'Manufacture of Sterile Medicinal Products (2022)' },
  'EU-GMP-A11': { code: 'EU GMP Annex 11', title: 'Computerised Systems (revision drafted 2025 - check current status)' },
  'EU-GMP-A15': { code: 'EU GMP Annex 15', title: 'Qualification and Validation' },
  'CFR-211': { code: '21 CFR 210/211', title: 'Current Good Manufacturing Practice for Finished Pharmaceuticals' },
  'CFR-11': { code: '21 CFR Part 11', title: 'Electronic Records; Electronic Signatures' },
  'ICH-Q7': { code: 'ICH Q7', title: 'Good Manufacturing Practice for Active Pharmaceutical Ingredients' },
  'ICH-Q8': { code: 'ICH Q8(R2)', title: 'Pharmaceutical Development' },
  'ICH-Q9': { code: 'ICH Q9(R1)', title: 'Quality Risk Management' },
  'GAMP5': { code: 'ISPE GAMP 5 (2nd ed.)', title: 'A Risk-Based Approach to Compliant GxP Computerized Systems' },
  'ASTM-E2500': { code: 'ASTM E2500', title: 'Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment' },
  'ISPE-CQ': { code: 'ISPE Baseline Guide Vol. 5', title: 'Commissioning and Qualification (2nd ed.)' },
  'ISPE-BIO': { code: 'ISPE Baseline Guide Vol. 6', title: 'Biopharmaceutical Manufacturing Facilities' },
  'ISPE-GAS': { code: 'ISPE Good Practice Guide', title: 'Process Gases' },
  'DI-GUIDE': { code: 'MHRA GxP DI / PIC/S PI 041-1', title: 'Data Integrity guidance (ALCOA+)' },
  'FDA-PAT': { code: 'FDA PAT Guidance', title: 'PAT - A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance' },
  'ISO-17025': { code: 'ISO/IEC 17025', title: 'General requirements for the competence of testing and calibration laboratories' },

  // --- Biosafety --------------------------------------------------------------
  'WHO-LBM': { code: 'WHO Laboratory Biosafety Manual', title: '4th edition' },
  'NIH-GL': { code: 'NIH Guidelines, Appendix K', title: 'Physical Containment for Large Scale Uses of Organisms Containing Recombinant or Synthetic Nucleic Acid Molecules' },
  'EU-2000-54': { code: 'Directive 2000/54/EC', title: 'Protection of workers from risks related to exposure to biological agents at work' },
  'EU-2009-41': { code: 'Directive 2009/41/EC', title: 'Contained use of genetically modified micro-organisms' },

  // --- Machinery, electrical, area classification ----------------------------
  'MD': { code: 'Machinery Directive 2006/42/EC', title: 'Machinery (replaced by Regulation (EU) 2023/1230 from 20 Jan 2027)' },
  'MR': { code: 'Regulation (EU) 2023/1230', title: 'Machinery Regulation (applies from 20 Jan 2027)' },
  'EMCD': { code: 'EMC Directive 2014/30/EU', title: 'Electromagnetic compatibility' },
  'LVD': { code: 'LVD 2014/35/EU', title: 'Low Voltage Directive' },
  'ISO-12100': { code: 'EN ISO 12100', title: 'Safety of machinery - General principles for design - Risk assessment and risk reduction' },
  'EN-60204': { code: 'EN/IEC 60204-1', title: 'Safety of machinery - Electrical equipment of machines' },
  'IEC-61010': { code: 'IEC 61010-1', title: 'Safety requirements for electrical equipment for measurement, control, and laboratory use' },
  'NFPA-79': { code: 'NFPA 79 / NFPA 70', title: 'Electrical Standard for Industrial Machinery / National Electrical Code' },
  'UL-508A': { code: 'UL 508A / CSA C22.2 No. 286', title: 'Industrial Control Panels' },
  'ATEX': { code: 'ATEX 2014/34/EU', title: 'Equipment for potentially explosive atmospheres' },
  'IEC-60079': { code: 'IEC 60079 series', title: 'Explosive atmospheres' },
  'IEC-60529': { code: 'IEC 60529', title: 'Degrees of protection provided by enclosures (IP code)' },
  'IEC-60751': { code: 'IEC 60751', title: 'Industrial platinum resistance thermometers (Pt100)' },
  'ISO-14644': { code: 'ISO 14644-1', title: 'Cleanrooms - Classification of air cleanliness by particle concentration' },
  'ISO-8573': { code: 'ISO 8573-1', title: 'Compressed air - Contaminants and purity classes' },

  // --- Automation, data, cybersecurity ---------------------------------------
  'ISA-88': { code: 'ISA-88 / IEC 61512', title: 'Batch control' },
  'ISA-95': { code: 'ISA-95 / IEC 62264', title: 'Enterprise-control system integration' },
  'ISA-18': { code: 'ISA-18.2 / IEC 62682', title: 'Management of alarm systems for the process industries' },
  'ISA-101': { code: 'ISA-101.01', title: 'Human machine interfaces for process automation systems' },
  'IEC-61131': { code: 'IEC 61131-3', title: 'Programmable controllers - Programming languages' },
  'OPC-UA': { code: 'IEC 62541', title: 'OPC Unified Architecture' },
  'MTP': { code: 'VDI/VDE/NAMUR 2658', title: 'Module Type Package (MTP) for modular plants' },
  'IEC-62443': { code: 'IEC 62443', title: 'Security for industrial automation and control systems' },
  'CRA': { code: 'Regulation (EU) 2024/2847', title: 'Cyber Resilience Act (main obligations from 11 Dec 2027)' }
};
