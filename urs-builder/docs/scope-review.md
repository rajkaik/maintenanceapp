# Bioreactor URS - scope review

Generated from `data/bioreactor.js` by `tools/build-review.mjs`. Do not edit by hand: change the question bank and re-run the script.

Template version: 0.1 (draft, scope review pending)

For every answer option, decide whether it is within our supply scope:

- **IN SCOPE** - standard supply, shown to the customer as "Standard"
- **CONDITIONAL** - possible on request / after engineering review, shown as "On request"
- **OUT OF SCOPE** - we do not supply this, shown as "Outside standard scope"
- **NOT REVIEWED** - not yet decided, nothing shown to the customer

Also check that each proposed solution is what we would actually offer.

## Status

| Scope status | Items |
| --- | ---: |
| NOT REVIEWED | 164 |
| IN SCOPE | 0 |
| CONDITIONAL | 0 |
| OUT OF SCOPE | 0 |
| Numeric ranges reviewed | 0 of 2 |

## GEN - General & regulatory

Intended use, target markets and the environment the bioreactor will be installed in. These answers set the compliance basis for every other section.

### GEN-01 Intended use (GMP)

**Question:** What is the intended use of the bioreactor?  
_Standards:_ EudraLex Vol. 4, 21 CFR 210/211, ICH Q7

- **Research / process development (non-GMP)** - NOT REVIEWED  
  Supplier-standard documentation (manuals, drawings, certificates). Qualification protocols optional. Basic data-integrity functions recommended to ease later technology transfer.
- **Clinical manufacturing (GMP, Phase I-III)** - NOT REVIEWED  
  Equipment designed, documented and qualified for GMP use: risk-based C&Q, GAMP 5 software validation, data integrity per 21 CFR Part 11 / EU GMP Annex 11, full material traceability.  
  _Standards:_ EU GMP Annex 15, ASTM E2500, ISPE GAMP 5 (2nd ed.), 21 CFR Part 11
- **Commercial GMP manufacturing** - NOT REVIEWED  
  As clinical GMP, plus lifecycle support: change notification, spare-part and obsolescence management, periodic review support and a long-term service agreement.  
  _Standards:_ EU GMP Annex 15, ASTM E2500, ISPE GAMP 5 (2nd ed.), 21 CFR Part 11, ICH Q9(R1)
- **Food, feed or industrial biotech (non-pharma)** - NOT REVIEWED  
  Hygienic design per EHEDG; food-contact material compliance where applicable. GMP qualification not required.  
  _Standards:_ EHEDG Doc. 8, Regulation (EC) 1935/2004, 21 CFR 177

### GEN-02 Target markets

**Question:** In which markets will the equipment be installed?

- **EU / EEA (CE marking)** - NOT REVIEWED  
  CE marking under the Machinery Directive 2006/42/EC, or Machinery Regulation (EU) 2023/1230 for equipment placed on the market from 20 Jan 2027. Pressure vessel per PED 2014/68/EU, EMC 2014/30/EU. Electrical design to EN 60204-1, risk assessment to EN ISO 12100.  
  _Standards:_ Machinery Directive 2006/42/EC, Regulation (EU) 2023/1230, PED 2014/68/EU, EMC Directive 2014/30/EU, EN/IEC 60204-1, EN ISO 12100
- **USA / Canada** - NOT REVIEWED  
  Pressure vessel to ASME BPVC Section VIII Div. 1 (U-stamp) where required by the jurisdiction. Control panels to UL 508A / CSA C22.2 No. 286. Electrical installation to NFPA 79 / NFPA 70.  
  _Standards:_ ASME BPVC Sec. VIII Div. 1, UL 508A / CSA C22.2 No. 286, NFPA 79 / NFPA 70
- **United Kingdom** - NOT REVIEWED  
  UKCA or CE marking (CE is currently recognised in Great Britain - confirm at order). Same technical basis as EU.  
  _Standards:_ EN ISO 12100, EN/IEC 60204-1
- **Other (specify in details)** - NOT REVIEWED  
  Local approvals (e.g. China GB, EAC, KC) to be specified by the customer and confirmed by the supplier.

### GEN-03 Biosafety level (GMP)

**Question:** What biosafety / containment level applies to the process?  
_Standards:_ WHO Laboratory Biosafety Manual, NIH Guidelines, Appendix K, Directive 2000/54/EC, Directive 2009/41/EC

- **BSL-1 / Good Large Scale Practice (non-pathogenic, e.g. CHO, E. coli K-12)** - NOT REVIEWED  
  Closed operation with sterile-grade 0.2 µm inlet and exhaust gas filtration. No additional containment measures.
- **BSL-2 / BL2-LS** - NOT REVIEWED  
  Closed system designed to prevent release: magnetic drive or double mechanical seal, integrity-testable exhaust filtration, closed sampling, inactivation (SIP kill cycle or chemical) before opening, contained drain routing to a kill system.
- **BSL-3 / BL3-LS** - NOT REVIEWED  
  As BSL-2 plus redundant exhaust filtration, validated decontamination of all effluents, safety relief routed to containment and installation in a BSL-3 suite. Requires a dedicated engineering study.

### GEN-04 Installation area classification (GMP)

**Question:** What is the cleanroom classification of the installation area?  
_Standards:_ ISO 14644-1, EU GMP Annex 1

- **Unclassified / controlled not classified (CNC)** - NOT REVIEWED  
  Industrial finish acceptable; cleanable external surfaces.
- **ISO 8 / EU GMP Grade D** - NOT REVIEWED  
  Cleanroom-compatible design: stainless steel frame and covers, smooth cleanable surfaces, minimal horizontal ledges, enclosures IP65 or better, resistance to the site cleaning agents and sporicides.  
  _Standards:_ IEC 60529
- **ISO 7 / EU GMP Grade C** - NOT REVIEWED  
  As Grade D, plus low particle shedding, sealed cable entries and compatibility with VHP / H2O2 room decontamination where used.  
  _Standards:_ IEC 60529

### GEN-05 Hazardous area classification

**Question:** Is the installation area a hazardous (explosive atmosphere) zone?  
_Standards:_ ATEX 2014/34/EU, IEC 60079 series

- **Non-hazardous (safe area)** - NOT REVIEWED  
  Standard electrical design.
- **Zone 2 (or Class I Div. 2)** - NOT REVIEWED  
  Ex-rated motors, instruments and enclosures, or control panel placed outside the zone; equipment marking per ATEX / IECEx.
- **Zone 1 (or Class I Div. 1)** - NOT REVIEWED  
  Zone 1 rated equipment throughout, purged/pressurised enclosures. Requires engineering review.

### GEN baseline requirements (always included)

- **GEN-B1** - NOT REVIEWED  
  The supplier operates a documented quality management system and provides a project quality plan.
- **GEN-B2** - NOT REVIEWED  
  The supplier performs and documents a machinery risk assessment and supplies a declaration of conformity (or incorporation) for the target market.  
  _Standards:_ EN ISO 12100

## PRC - Process

The biology and operating mode define mixing, oxygen transfer, heat removal and feeding requirements.

### PRC-01 Organism / cell type (GMP)

**Question:** Which organism or cell type will be cultivated?  
_Standards:_ ISPE Baseline Guide Vol. 6

- **Mammalian cells (e.g. CHO, HEK293, hybridoma)** - NOT REVIEWED  
  Low-shear design: axial-flow impeller(s) (pitched blade / marine), tip speed typically ≤ 1.5-2 m/s, power input typically 10-100 W/m³. Micro-sparger for O2 plus macro-sparger for CO2 stripping, low gas flow (≤ 0.1 vvm). pH control with CO2 and base, 30-37 °C.
- **Bacteria (e.g. E. coli)** - NOT REVIEWED  
  High oxygen-transfer design: 2-3 radial (Rushton) impellers with baffles, power input typically 1-5 kW/m³, aeration up to 1-2 vvm with O2 enrichment. High cooling capacity (metabolic heat ≈ 460 kJ per mol O2 consumed, Cooney's rule). Liquid acid/base pH control, foam control, exhaust condenser.
- **Yeast / fungi (e.g. Pichia, S. cerevisiae, filamentous fungi)** - NOT REVIEWED  
  As bacteria. Methanol-fed Pichia: methanol feed with safety interlocks and an ATEX assessment. Filamentous fungi: viscous broth - consider up-pumping hydrofoils and higher drive torque.
- **Insect cells (e.g. Sf9, High Five)** - NOT REVIEWED  
  Low-shear design as for mammalian cells, operation at 27-28 °C (cooling needed below ambient). pH usually monitored only. Baculovirus infection step - confirm biosafety level.
- **Adherent or stem cells on microcarriers (cell & gene therapy)** - NOT REVIEWED  
  Very gentle mixing just above microcarrier suspension speed, low gas flows (headspace or micro-sparging), closed aseptic processing, typically single-use. Settling/media exchange and harvest functions.

### PRC-02 Operating modes

**Question:** Which operating modes are required?

- **Batch** - NOT REVIEWED  
  Standard control loops; additions limited to pH correction and antifoam.
- **Fed-batch** - NOT REVIEWED  
  Feed pump(s) with flow or gravimetric (balance/load-cell) control; feed profiles in the recipe (constant, linear, exponential, DO-stat or pH-stat).
- **Perfusion (with cell retention)** - NOT REVIEWED  
  Interface to a cell-retention device (ATF/TFF or acoustic settler), continuous media feed plus harvest and bleed pumps under weight control. Capacitance biomass probe recommended for bleed control. Design for long runs (sensor drift, sterile boundary robustness).
- **Continuous (chemostat / turbidostat)** - NOT REVIEWED  
  Constant weight or level control with continuous feed and harvest; sterile media supply for long runs; turbidity probe for turbidostat operation.

### PRC-03 Process temperature range (GMP)

**Question:** What process temperature range is required?

- **25-40 °C (cell culture)** - NOT REVIEWED  
  Jacket with temperature control unit (TCU); control accuracy typically ±0.2 °C at setpoint.
- **20-45 °C with high heat load (microbial)** - NOT REVIEWED  
  Jacket, plus internal coils at large scale if the jacket area is insufficient. Cooling capacity sized from maximum OUR and agitation power; chilled water supply.
- **Extended range (e.g. 4-60 °C, cold hold or heat inactivation)** - NOT REVIEWED  
  TCU with chiller/glycol and heater. Specify required heat-up and cool-down times in the details field; check sensor and material limits.

### PRC-04 Oxygen transfer capacity

**Question:** What oxygen-transfer capacity (kLa) is required?

- **Low - cell culture (kLa typically ≤ 20 h⁻¹)** - NOT REVIEWED  
  Micro- or drilled-pipe sparger, gas flow ≤ 0.1 vvm, O2 enrichment.
- **Medium - high-density cell culture / yeast (kLa ≈ 20-200 h⁻¹)** - NOT REVIEWED  
  Hybrid impeller set or Rushton turbines, gas flow up to ~1 vvm, O2 enrichment.
- **High - high-cell-density microbial (kLa > 200 h⁻¹)** - NOT REVIEWED  
  Multiple Rushton turbines, high power input, gas flow up to 2 vvm, O2 enrichment, operation at elevated head pressure (e.g. +0.5 barg) to increase O2 solubility.

### PRC-05 Process description

**Question:** Briefly describe the process.

- Free text, no scope decision needed.

## VES - Vessel & materials

Vessel technology, size and materials of construction.

### VES-01 Vessel technology (GMP)

**Question:** Which vessel technology is required?  
_Standards:_ ASME BPE

- **Stainless steel (reusable, cleaned and sterilised in place)** - NOT REVIEWED  
  316L product-contact parts, hygienic design per ASME BPE (fully drainable, dead legs L/D ≤ 2), CIP spray devices, SIP with clean steam, pressure-rated vessel (PED / ASME VIII).  
  _Standards:_ ASME BPE, PED 2014/68/EU, ASME BPVC Sec. VIII Div. 1
- **Single-use (bag in a rigid holder)** - NOT REVIEWED  
  Pre-sterilised bag assembly (gamma, ISO 11137, SAL 10⁻⁶). Film and components USP <87>/<88> Class VI, extractables data per USP <665> / BioPhorum protocol, integrity assurance per ASTM E3244. Stainless holder with heating jacket and load cells; supply and change-notification agreement for the bag.  
  _Standards:_ ISO 11137, USP <87>/<88>, USP <665>/<1665>, BioPhorum (BPOG), ASTM E3051, ASTM E3244
- **Glass vessel (autoclavable, bench scale)** - NOT REVIEWED  
  Borosilicate glass 3.3 vessel with 316L headplate, sterilised by autoclave. Bench controller to IEC 61010-1.  
  _Standards:_ ISO 3585, IEC 61010-1

### VES-02 Maximum working volume

**Question:** Maximum working volume [L]

- **Bench scale (up to 20 L)**  
  Autoclavable glass or single-use bench system with a benchtop controller.
- **Pilot scale (up to 250 L)**  
  Skid-mounted SIP-capable stainless steel or single-use system; mobile skid possible. Total vessel volume typically 1.25-1.5 × working volume.
- **Clinical / small commercial scale (up to 2000 L)**  
  Fixed stainless steel or single-use system (single-use is common up to 2,000 L). Total vessel volume typically 1.25-1.5 × working volume.
- **Large commercial scale**  
  Typically stainless steel; single-use options are limited at this scale. Structural design, access platforms and agitator removal space to be included.
- **Supply scope range:** NOT REVIEWED L

### VES-03 Minimum working volume

**Question:** Minimum working volume [L]

- **Turndown**  
  Minimum volume is limited by lowest-impeller and probe submergence. Turndown of about 1:5 is typical; larger turndown needs a dedicated vessel and probe design.
- **Supply scope range:** NOT REVIEWED L

### VES-04 Design pressure / temperature (GMP)

**Question:** What design pressure and temperature does the vessel need?  
_Only shown when VES-01 is: ss_  
_Standards:_ PED 2014/68/EU, ASME BPVC Sec. VIII Div. 1, EN 13445

- **Full vacuum / +3 barg at 150 °C (standard)** - NOT REVIEWED  
  Covers SIP up to 134 °C and vacuum during cool-down. PED category assessment with notified body as required; ASME U-stamp for North America where required.
- **Full vacuum / +2.5 barg at 140 °C (minimum for SIP)** - NOT REVIEWED  
  Sufficient for SIP at 121-125 °C. Lower wall thickness, smaller safety devices.
- **Higher pressure (> +3 barg, pressurised fermentation)** - NOT REVIEWED  
  Increased wall thickness, safety valve / rupture disc sizing for the higher pressure. Requires engineering review.

### VES-05 Product-contact surface finish (GMP)

**Question:** Which product-contact surface finish is required?  
_Only shown when VES-01 is: ss_  
_Standards:_ ASME BPE, ASTM A967, ASTM A380

- **Ra ≤ 0.8 µm, mechanically polished (≈ ASME BPE SF3, ≤ 0.76 µm)** - NOT REVIEWED  
  Common EU practice for cell culture and microbial service. Passivated after fabrication; roughness measurement report.
- **Ra ≤ 0.5 µm, mechanically polished (ASME BPE SF1, ≤ 0.51 µm)** - NOT REVIEWED  
  Improved cleanability. Passivated after fabrication; roughness measurement report.
- **Ra ≤ 0.4 µm, polished and electropolished (ASME BPE SF4, ≤ 0.38 µm)** - NOT REVIEWED  
  Highest cleanability and corrosion resistance, lower rouging tendency. Electropolishing of vessel internals and tubing; longer lead time and higher cost.

### VES-06 Product-contact metallic material (GMP)

**Question:** Which metallic material is required for product-contact parts?  
_Only shown when VES-01 is: ss, glass_  
_Standards:_ ASME BPE, EN 10204

- **316L stainless steel (standard)** - NOT REVIEWED  
  316L (1.4404 / 1.4435) with ASME BPE sulfur range for weldability; 304 or better for non-product contact. EN 10204 3.1 certificates for product-contact parts.
- **Higher alloy (e.g. 6Mo super-austenitic, Hastelloy)** - NOT REVIEWED  
  Selected for corrosive media; longer lead times, special welding procedures. Requires engineering review.

### VES-07 Elastomer and polymer compliance (GMP)

**Question:** Which compliance evidence is required for product-contact elastomers and polymers?  
_Standards:_ ASME BPE

- **USP <87>/<88> Class VI** - NOT REVIEWED  
  Certificates of compliance per material and supplier.  
  _Standards:_ USP <87>/<88>
- **FDA 21 CFR 177 conformance** - NOT REVIEWED  
  Statement of conformity per material (e.g. 21 CFR 177.2600 for elastomers).  
  _Standards:_ 21 CFR 177
- **TSE/BSE-free (animal-derived-ingredient-free) statement** - NOT REVIEWED  
  ADI-free / TSE statement per EMA/410/01 for all product-contact materials.  
  _Standards:_ EMA/410/01 rev.3
- **Extractables data for the customer's leachables risk assessment** - NOT REVIEWED  
  Extractables data generated per USP <665> / BioPhorum protocol for single-use and polymeric components.  
  _Standards:_ USP <665>/<1665>, BioPhorum (BPOG)
- **EU food-contact compliance** - NOT REVIEWED  
  Declaration of compliance per Regulation (EC) 1935/2004 and applicable specific measures.  
  _Standards:_ Regulation (EC) 1935/2004

### VES-08 Single-use bag sourcing (GMP)

**Question:** How should single-use bags be sourced?  
_Only shown when VES-01 is: su_  
_Standards:_ ASTM E3051

- **Supplier-standard bag platform** - NOT REVIEWED  
  Bags from the supplier's qualified film and assembly platform; supply agreement with change notification and safety stock.
- **Customer-specified bag / film platform** - NOT REVIEWED  
  Holder, sensors and connections adapted to the customer's bag. Requires compatibility review and joint qualification.
- **Dual sourcing required** - NOT REVIEWED  
  Holder designed for two qualified bag suppliers; comparability data for both. Requires engineering review.

### VES baseline requirements (always included)

- **VES-B1** - NOT REVIEWED  
  Product-contact stainless steel tubing is orbitally welded; welds are documented (weld log, weld map) and inspected per ASME BPE Part MJ.  
  _Standards:_ ASME BPE
- **VES-B2** - NOT REVIEWED  
  Product-contact systems are fully drainable with no dead legs exceeding L/D = 2.  
  _Standards:_ ASME BPE, EHEDG Doc. 8

## AGI - Mixing & agitation

Drive, shaft sealing and impeller configuration. Single-use systems use the bag-integrated agitator.

### AGI-01 Agitator drive and shaft seal (GMP)

**Question:** Which agitator drive and shaft seal is preferred?  
_Only shown when VES-01 is: ss, glass_  
_Standards:_ ASME BPE

- **Bottom-mounted magnetic drive** - NOT REVIEWED  
  No shaft penetration: highest sterility and containment assurance, no seal support system. Torque-limited - confirm suitability for high-power microbial service.
- **Top-mounted with double mechanical seal** - NOT REVIEWED  
  Double mechanical seal with sterile barrier medium (condensate or sterile water), seal support system with pressure/flow monitoring and alarm. Suitable for high power input.
- **Supplier recommendation** - NOT REVIEWED  
  Supplier selects the drive based on scale, power input and containment level.

### AGI-02 Impeller configuration

**Question:** Which impeller configuration is preferred?

- **Axial flow (pitched blade, marine, hydrofoil)** - NOT REVIEWED  
  Low shear and good bulk mixing for cell culture; typical tip speed ≤ 1.5-2 m/s.
- **Radial flow (Rushton turbine)** - NOT REVIEWED  
  High gas dispersion and kLa for microbial processes; used with baffles.
- **Combination (Rushton bottom, axial top)** - NOT REVIEWED  
  Gas dispersion at the sparger plus good top-to-bottom mixing; common for flexible multi-purpose units.
- **Supplier recommendation** - NOT REVIEWED  
  Supplier proposes impeller type, number and spacing with a mixing / kLa design calculation.

### AGI baseline requirements (always included)

- **AGI-B1** - NOT REVIEWED  
  Agitator speed is variable (frequency converter) with speed feedback, indicated and recorded in the control system.

## GAS - Aeration & gassing

Process gases, sparging and exhaust gas handling.

### GAS-01 Process gases (GMP)

**Question:** Which process gases are required?  
_Standards:_ ISPE Good Practice Guide, ISO 8573-1, PDA TR 40

- **Air** - NOT REVIEWED  
  Thermal mass flow controller (MFC); oil-free, dry supply with ISO 8573-1 purity class agreed with the customer; 0.2 µm hydrophobic sterile filter, integrity-testable.
- **Oxygen (enrichment)** - NOT REVIEWED  
  Dedicated MFC; all O2-wetted parts cleaned for oxygen service and made of oxygen-compatible materials; O2 shut-off on alarm.  
  _Standards:_ ASTM G93, EIGA Doc. 33
- **Nitrogen** - NOT REVIEWED  
  MFC for DO control below saturation, headspace inerting and DO-probe zero calibration.
- **Carbon dioxide** - NOT REVIEWED  
  MFC for pH control (acid side) in bicarbonate-buffered media, via sparger or headspace.

### GAS-02 Gas entry points

**Question:** Which gas entry points are required?

- **Micro-sparger (sintered / fine pores)** - NOT REVIEWED  
  Small bubbles for efficient O2 transfer at low gas flow; standard for cell culture.
- **Macro-sparger (ring, open or drilled pipe)** - NOT REVIEWED  
  Larger bubbles for CO2 stripping in cell culture or high gas flow in microbial processes; placed below the lowest impeller.
- **Headspace overlay** - NOT REVIEWED  
  Separate overlay line with flow control and sterile filter; used for CO2 removal and early culture phases.

### GAS-03 Maximum gas flow

**Question:** What maximum gas flow rate is required?

- **Low - up to 0.1 vvm (cell culture)** - NOT REVIEWED  
  MFCs sized for low flows; two MFCs per gas (low/high range) if a wide turndown is needed.
- **Medium - up to 0.5 vvm** - NOT REVIEWED  
  MFCs and exhaust filter sized accordingly.
- **High - up to 1-2 vvm (microbial)** - NOT REVIEWED  
  Large MFCs, exhaust condenser and adequately sized exhaust filter to limit pressure drop and filter wetting.

### GAS-04 Exhaust gas handling (GMP)

**Question:** How should the exhaust gas be handled?  
_Standards:_ PDA TR 40

- **Heated exhaust filter** - NOT REVIEWED  
  Electrically heated 0.2 µm hydrophobic filter to prevent blinding by condensate; in-situ integrity testable; exhaust pressure monitoring.
- **Exhaust condenser + heated filter** - NOT REVIEWED  
  Cooled condenser returns moisture and reduces evaporation losses; needed at high gas flow.
- **Redundant (double) exhaust filtration** - NOT REVIEWED  
  Two sterile-grade filters in series for containment; both integrity-testable.  
  _Standards:_ NIH Guidelines, Appendix K

### GAS baseline requirements (always included)

- **GAS-B1** - NOT REVIEWED  
  All gas inlets and the exhaust are protected by sterile-grade (0.2 µm) hydrophobic filters that can be integrity-tested.  
  _Standards:_ PDA TR 40

## INS - Measurement & control

Control loops, sensors, additions and foam control.

### INS-01 pH control (GMP)

**Question:** How should pH be controlled?

- **CO2 (acid side) + liquid base - cell culture** - NOT REVIEWED  
  pH probe (SIP/autoclave-capable glass electrode, or pre-calibrated optical sensor for single-use), configurable dead band to limit base addition, base pump.
- **Liquid acid + liquid base - microbial** - NOT REVIEWED  
  Two addition pumps; ammonia solution as base also supplies nitrogen (ventilation / exposure review needed).
- **Monitoring only** - NOT REVIEWED  
  pH probe with indication, alarm and recording.

### INS-02 Dissolved oxygen control (GMP)

**Question:** How should dissolved oxygen (DO) be controlled?

- **Cascade: agitation → air flow → O2 enrichment (microbial)** - NOT REVIEWED  
  Configurable cascade with limits per stage; optical DO sensor.
- **O2 via sparger, N2 to lower DO (cell culture)** - NOT REVIEWED  
  Constant agitation and air/overlay, O2 added on demand, N2 to strip; optical DO sensor.
- **Monitoring only** - NOT REVIEWED  
  DO sensor with indication, alarm and recording.

### INS-03 Additional measurements

**Question:** Which additional measurements are required?  
_Standards:_ FDA PAT Guidance, ICH Q8(R2)

- **Headspace pressure** - NOT REVIEWED  
  Hygienic pressure transmitter; required for SIP control and over-pressure protection.
- **Weight (load cells)** - NOT REVIEWED  
  Load cells under the vessel or holder for volume, feed and perfusion control.
- **Redundant pH and DO probes** - NOT REVIEWED  
  Second pH and DO probe for comparison and failover during long runs.
- **Viable biomass (capacitance)** - NOT REVIEWED  
  In-line capacitance probe for viable cell density; used for perfusion bleed and feed control.
- **Optical density / turbidity** - NOT REVIEWED  
  In-line turbidity probe for total biomass in microbial processes.
- **Off-gas O2 / CO2 analysis** - NOT REVIEWED  
  Exhaust analyser for OUR, CER and respiratory quotient calculation.
- **Spare ports for PAT (e.g. Raman, NIR)** - NOT REVIEWED  
  Hygienic 25 mm / Ingold ports reserved for spectroscopic probes, with data interface to the control system.

### INS-04 Liquid additions and feeds

**Question:** How many liquid addition / feed lines are required?

- **Up to 2 (e.g. base and antifoam)** - NOT REVIEWED  
  Integrated peristaltic pumps with sterile addition ports.
- **3-4 (base, antifoam, 1-2 feeds)** - NOT REVIEWED  
  Integrated pumps; feeds with flow or gravimetric control.
- **5 or more, incl. controlled feeds** - NOT REVIEWED  
  Additional external pumps or addition skid with gravimetric control; recipe-based feed profiles.

### INS-05 Foam control

**Question:** How should foam be controlled?

- **Antifoam addition via foam probe** - NOT REVIEWED  
  Conductive/capacitive foam probe triggering timed antifoam doses; dose counting and limits.
- **Mechanical foam breaker** - NOT REVIEWED  
  Shaft-mounted foam breaker above the liquid; reduces antifoam use. Top-drive only.
- **Not required** - NOT REVIEWED  
  No foam control; headspace sized accordingly.

### INS baseline requirements (always included)

- **INS-B1** - NOT REVIEWED  
  Process temperature is measured with Pt100 class A sensors.  
  _Standards:_ IEC 60751
- **INS-B2** - NOT REVIEWED  
  GMP-critical instruments are calibrated before delivery with certificates traceable to national standards.  
  _Standards:_ ISO/IEC 17025

## STE - Cleaning & sterilisation

Applies to stainless steel systems. Single-use bags arrive pre-sterilised; glass vessels are autoclaved.

### STE-01 Cleaning (GMP)

**Question:** How will the vessel be cleaned?  
_Only shown when VES-01 is: ss_  
_Standards:_ ASME BPE

- **Automated CIP from the plant CIP system** - NOT REVIEWED  
  Spray devices with coverage verified by riboflavin test (ASME BPE Part SD), CIP supply/return connections, CIP sequences in the control system, interface to the plant CIP skid.
- **Automated CIP with dedicated CIP skid in supply scope** - NOT REVIEWED  
  As above, plus a CIP skid (tanks, pump, heat exchanger, conductivity and temperature control) in the supplier's scope.
- **Manual cleaning** - NOT REVIEWED  
  Design for manual access and cleaning (removable parts, accessible internals). Only suitable for small vessels.

### STE-02 Sterilisation in place (GMP)

**Question:** How will the vessel be sterilised in place (SIP)?  
_Only shown when VES-01 is: ss_  
_Standards:_ ISO 17665, PDA TR 1, EN 285

- **Automated SIP of vessel and all connected lines** - NOT REVIEWED  
  Automated sequence (heat-up, hold with temperature verification at cold points, cool-down under sterile gas overpressure); steam traps and temperature sensors at condensate drains; F0 calculation. Clean steam quality per EN 285.
- **Semi-automated SIP (manual valve sequence)** - NOT REVIEWED  
  Manual valve operation guided by the HMI; automated temperature/time hold monitoring and recording.

## TRF - Sampling, inoculation & harvest

Every connection to the vessel is a potential breach of the sterile boundary.

### TRF-01 Sampling (GMP)

**Question:** How will samples be taken?  
_Standards:_ EU GMP Annex 1, ASME BPE

- **Steam-sterilisable sampling valve** - NOT REVIEWED  
  Hygienic sampling valve sterilised before and after each sample.
- **Closed single-use sampling system** - NOT REVIEWED  
  Pre-sterilised sampling manifold with bags or syringes; no steam needed.
- **Automated sampling to an at-line analyser** - NOT REVIEWED  
  Automated aseptic sampling device with interface to the analyser and control system. Requires engineering review.

### TRF-02 Aseptic connections (GMP)

**Question:** Which aseptic connection methods are required for inoculation and transfers?  
_Standards:_ EU GMP Annex 1

- **SIP-able transfer line with steam-block valves** - NOT REVIEWED  
  Hard-piped transfer line sterilised together with the vessel.
- **Aseptic single-use connectors** - NOT REVIEWED  
  Pre-sterilised aseptic connectors on bag/tubing assemblies; steam-to-connect adaptors for stainless steel.
- **Sterile tube welding / sealing** - NOT REVIEWED  
  Thermoplastic tubing compatible with the customer's tube welder and sealer.
- **Septum / needle port (bench scale)** - NOT REVIEWED  
  Septum port for syringe inoculation and additions.

### TRF-03 Harvest (GMP)

**Question:** How will the vessel be harvested?  
_Standards:_ ASME BPE

- **Bottom outlet valve** - NOT REVIEWED  
  Zero-dead-leg (radial diaphragm) bottom valve, fully drainable.
- **Dip tube / pump-out** - NOT REVIEWED  
  Dip tube with transfer pump or pressure transfer.
- **Direct transfer to downstream equipment** - NOT REVIEWED  
  Controlled harvest flow to centrifuge or depth filtration, with interface signals to the downstream unit.

## AUT - Automation & data integrity

Control system, recipes, electronic records and connectivity.

### AUT-01 Control system

**Question:** Which control system is required?  
_Standards:_ IEC 61131-3, ISA-101.01

- **Supplier-standard PLC + HMI (stand-alone)** - NOT REVIEWED  
  Supplier-standard control platform with local HMI and integrated data storage.
- **Customer-specified PLC / HMI brand** - NOT REVIEWED  
  Control system on the customer's preferred platform (specify brand and versions in details). Requires engineering review.
- **Integration into the plant DCS** - NOT REVIEWED  
  Supplier delivers instruments and I/O to the DCS, or a skid controller with a defined DCS interface. Interface specification and responsibility split to be agreed.  
  _Standards:_ ISA-88 / IEC 61512
- **Modular integration via NAMUR MTP** - NOT REVIEWED  
  Skid controller exposing services and HMI via Module Type Package to the process orchestration layer.  
  _Standards:_ VDI/VDE/NAMUR 2658, IEC 62541

### AUT-02 Recipe and batch management

**Question:** What level of recipe / batch management is required?  
_Standards:_ ISA-88 / IEC 61512

- **Manual setpoints** - NOT REVIEWED  
  Operator enters setpoints; all changes recorded.
- **Recipe management (ISA-88 phases)** - NOT REVIEWED  
  Version-controlled recipes built from ISA-88 phases (e.g. SIP, fill, inoculate, run, harvest); batch reports.
- **MES-driven batch execution / electronic batch record** - NOT REVIEWED  
  Recipe download and batch data upload via ISA-95 interface to the customer MES.  
  _Standards:_ ISA-95 / IEC 62264

### AUT-03 Electronic records and data integrity (GMP)

**Question:** What level of electronic records / data integrity compliance is required?  
_Standards:_ 21 CFR Part 11, EU GMP Annex 11, ISPE GAMP 5 (2nd ed.), MHRA GxP DI / PIC/S PI 041-1

- **Full 21 CFR Part 11 / EU GMP Annex 11 compliance** - NOT REVIEWED  
  Unique user IDs with role-based access, secure audit trail (who / what / when / why), electronic signatures, time synchronisation, protected data storage with backup and restore, human-readable export. Supplier validation documentation per GAMP 5.
- **Basic data integrity (audit trail, user levels, no e-signatures)** - NOT REVIEWED  
  User management and audit trail; batch reports signed on paper.
- **Not required (non-GMP)** - NOT REVIEWED  
  Supplier-standard data logging and export.

### AUT-04 System interfaces

**Question:** Which interfaces to other systems are required?

- **OPC UA server** - NOT REVIEWED  
  OPC UA server exposing process values, alarms and batch data.  
  _Standards:_ IEC 62541
- **Plant historian** - NOT REVIEWED  
  Data transfer to the customer historian (e.g. via OPC UA); the local buffer covers network outages.
- **MES** - NOT REVIEWED  
  ISA-95 based interface for orders, recipes and batch data.  
  _Standards:_ ISA-95 / IEC 62264
- **Remote support access** - NOT REVIEWED  
  Secure, customer-controlled remote access (VPN, session approval, logging).  
  _Standards:_ IEC 62443

### AUT-05 Cybersecurity

**Question:** What cybersecurity requirements apply?  
_Standards:_ IEC 62443, Regulation (EU) 2023/1230, Regulation (EU) 2024/2847

- **Supplier-standard hardening** - NOT REVIEWED  
  No default passwords, unused services and ports disabled, documented patch and antivirus policy.
- **IEC 62443-3-3 Security Level 1** - NOT REVIEWED  
  Security requirements documented per IEC 62443-3-3 SL 1; network segmentation concept.
- **IEC 62443-3-3 Security Level 2 + customer OT policy** - NOT REVIEWED  
  SL 2 controls, compliance with the customer IT/OT security policy, joint security review.

### AUT baseline requirements (always included)

- **AUT-B1** - NOT REVIEWED  
  Alarms are prioritised, require acknowledgement and are stored in an alarm history.  
  _Standards:_ ISA-18.2 / IEC 62682
- **AUT-B2** - NOT REVIEWED  
  The control system and data storage are protected by a UPS for controlled shutdown and data retention on power loss.

## UTL - Utilities & installation

What the site provides and the physical constraints of the installation.

### UTL-01 Electrical supply

**Question:** Which main electrical supply is available?  
_Standards:_ EN/IEC 60204-1

- **400 V, 3-phase, 50 Hz** - NOT REVIEWED  
  Control panel to EN 60204-1.
- **480 V, 3-phase, 60 Hz** - NOT REVIEWED  
  Control panel to UL 508A / NFPA 79.  
  _Standards:_ UL 508A / CSA C22.2 No. 286, NFPA 79 / NFPA 70
- **208 V, 3-phase, 60 Hz** - NOT REVIEWED  
  Control panel to UL 508A / NFPA 79.  
  _Standards:_ UL 508A / CSA C22.2 No. 286, NFPA 79 / NFPA 70
- **230 V, single-phase (bench systems)** - NOT REVIEWED  
  Laboratory equipment to IEC 61010-1.  
  _Standards:_ IEC 61010-1

### UTL-02 Clean steam (GMP)

**Question:** Is clean steam available at the installation point?  
_Only shown when VES-01 is: ss_  
_Standards:_ EN 285

- **Yes, plant clean steam** - NOT REVIEWED  
  Clean steam connection with pressure regulation and condensate return; quality per EN 285 (non-condensable gases ≤ 3.5 %, dryness ≥ 0.95, superheat ≤ 25 K).
- **No - include a clean steam generator** - NOT REVIEWED  
  Clean steam generator (plant steam or electric heated) in the supplier's scope, fed with purified water.

### UTL-03 Cooling medium

**Question:** Which cooling medium is available?

- **Cooling water (e.g. 20-25 °C)** - NOT REVIEWED  
  Heat exchanger in the TCU loop; may limit the minimum process temperature.
- **Chilled water (e.g. 6-12 °C)** - NOT REVIEWED  
  Heat exchanger in the TCU loop; suitable for most processes.
- **Glycol / brine (below 0 °C)** - NOT REVIEWED  
  Needed for cold hold or low-temperature condenser.
- **None - include a chiller** - NOT REVIEWED  
  Integrated or stand-alone chiller in the supplier's scope; heat rejected to the room or to cooling water.

### UTL-04 Fixed or mobile

**Question:** Should the system be fixed or mobile?

- **Fixed skid** - NOT REVIEWED  
  Skid anchored to the floor with hard-piped utilities.
- **Mobile on castors** - NOT REVIEWED  
  Skid on lockable castors with flexible utility connections and quick couplings.

### UTL-05 Installation constraints

**Question:** Describe any installation constraints.

- Free text, no scope decision needed.

## DOC - Qualification, documentation & service

What the supplier delivers besides the equipment.

### DOC-01 Qualification support (GMP)

**Question:** What qualification support is required?  
_Standards:_ EU GMP Annex 15, ASTM E2500, ISPE Baseline Guide Vol. 5

- **Supplier-standard FAT and SAT** - NOT REVIEWED  
  FAT and SAT to supplier procedures with reports. Customer performs qualification.
- **Risk-based C&Q documents (DQ support, FAT/SAT and IQ/OQ protocols)** - NOT REVIEWED  
  Requirements traceability, design review support, pre-approved FAT/SAT protocols, IQ/OQ protocols for customer execution.  
  _Standards:_ ISPE GAMP 5 (2nd ed.)
- **Full IQ/OQ execution by the supplier on site** - NOT REVIEWED  
  As above, plus execution of IQ/OQ by supplier personnel and final reports.  
  _Standards:_ ISPE GAMP 5 (2nd ed.)

### DOC-02 Documentation package (GMP)

**Question:** Which documents are required?

- **Functional and design specifications (FS, HDS, SDS)** - NOT REVIEWED  
  Specifications traceable to this URS.  
  _Standards:_ ISPE GAMP 5 (2nd ed.)
- **Material certificates EN 10204 3.1** - NOT REVIEWED  
  For all product-contact metallic parts.  
  _Standards:_ EN 10204
- **Surface finish and passivation certificates** - NOT REVIEWED  
  Roughness measurement report and passivation certificate.  
  _Standards:_ ASTM A967, ASTM A380
- **Welding documentation** - NOT REVIEWED  
  Weld procedures and qualifications, weld log, weld map, inspection records.  
  _Standards:_ ASME BPE
- **Calibration certificates** - NOT REVIEWED  
  Traceable certificates for all calibrated instruments.  
  _Standards:_ ISO/IEC 17025
- **Risk assessments** - NOT REVIEWED  
  Machinery risk assessment and support for the customer's quality risk assessment.  
  _Standards:_ EN ISO 12100, ICH Q9(R1)
- **Spare parts and maintenance plan** - NOT REVIEWED  
  Recommended spare parts list and preventive maintenance schedule.

### DOC-03 Documentation language

**Question:** In which language should documentation be supplied?

- **English** - NOT REVIEWED  
  All documents in English.
- **Local language (specify in details)** - NOT REVIEWED  
  Operating manual and HMI texts in the local language; technical documents in English.
- **English and local language** - NOT REVIEWED  
  All user-facing documents in both languages.

### DOC-04 Training

**Question:** Which training is required?

- **Operator training** - NOT REVIEWED  
  On-site training on operation, recipes, cleaning and sterilisation, with attendance records.
- **Maintenance training** - NOT REVIEWED  
  Preventive maintenance, seal and probe changes, calibration.
- **Automation / system administrator training** - NOT REVIEWED  
  User management, backup and restore, audit trail review.

### DOC-05 Service and lifecycle support

**Question:** Which service and lifecycle support is required?

- **Extended warranty** - NOT REVIEWED  
  Warranty beyond the standard period (specify duration in details).
- **Preventive maintenance contract** - NOT REVIEWED  
  Scheduled maintenance visits including calibration and wear-part replacement.
- **Commissioning and 2-year spare parts package** - NOT REVIEWED  
  Spare parts delivered with the equipment.
- **Remote support / hotline** - NOT REVIEWED  
  Defined response times for technical support.
