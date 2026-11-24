import type { ExamPaper } from "../types.ts";

const SVG_CLADOGRAM_Q06 = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cladogram showing evolutionary branching relationships among species P, Q, R, and S">
  <rect x="0" y="0" width="420" height="220" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="210" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Cladogram of Four Vertebrate Species (P, Q, R, S)</text>
  <!-- Root -->
  <line x1="40" y1="185" x2="105" y2="185" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="105" cy="185" r="4.5" fill="#16a34a"/>
  <text x="95" y="204" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#475569">Root node</text>
  <!-- Branch to P -->
  <line x1="105" y1="185" x2="105" y2="62" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="105" y1="62" x2="145" y2="62" stroke="#0f172a" stroke-width="2.5"/>
  <text x="155" y="66" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Species P</text>
  <!-- Branch to Node 1 -->
  <line x1="105" y1="185" x2="205" y2="185" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="205" cy="185" r="4.5" fill="#16a34a"/>
  <text x="205" y="204" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#475569">Node 1</text>
  <!-- Branch to Q -->
  <line x1="205" y1="185" x2="205" y2="100" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="205" y1="100" x2="245" y2="100" stroke="#0f172a" stroke-width="2.5"/>
  <text x="255" y="104" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Species Q</text>
  <!-- Branch to Node 2 -->
  <line x1="205" y1="185" x2="295" y2="185" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="295" cy="185" r="4.5" fill="#16a34a"/>
  <text x="295" y="204" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#475569">Node 2</text>
  <!-- Branch to R and S -->
  <line x1="295" y1="185" x2="295" y2="132" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="295" y1="132" x2="340" y2="132" stroke="#0f172a" stroke-width="2.5"/>
  <text x="348" y="136" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Species R</text>
  <line x1="295" y1="185" x2="295" y2="165" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="295" y1="165" x2="340" y2="165" stroke="#0f172a" stroke-width="2.5"/>
  <text x="348" y="169" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Species S</text>
  <!-- Time arrow -->
  <line x1="40" y1="42" x2="375" y2="42" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>
  <polygon points="375,38 384,42 375,46" fill="#64748b"/>
  <text x="385" y="45" font-family="system-ui, sans-serif" font-size="10" fill="#475569">Present</text>
</svg>`;

const SVG_ACTION_POTENTIAL_Q15 = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Action potential oscilloscope trace showing membrane potential in millivolts against time with Phase X marking the falling repolarization slope from +30 mV to -70 mV">
  <rect x="0" y="0" width="420" height="220" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="220" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Axon Membrane Potential During an Action Potential</text>
  <!-- Axes -->
  <line x1="65" y1="36" x2="65" y2="188" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="65" y1="188" x2="395" y2="188" stroke="#0f172a" stroke-width="1.8"/>
  <!-- Grid & labels -->
  <line x1="65" y1="54" x2="390" y2="54" stroke="#e2e8f0" stroke-width="1"/>
  <text x="58" y="58" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#334155">+30</text>
  <line x1="65" y1="90" x2="390" y2="90" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="58" y="94" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#334155">0</text>
  <line x1="65" y1="142" x2="390" y2="142" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="58" y="146" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#b45309">−55</text>
  <line x1="65" y1="158" x2="390" y2="158" stroke="#e2e8f0" stroke-width="1"/>
  <text x="58" y="162" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#334155">−70</text>
  <text x="18" y="114" text-anchor="middle" transform="rotate(-90 18 114)" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">Potential (mV)</text>
  <text x="230" y="209" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">Time (ms)</text>
  <!-- Action potential curve -->
  <path d="M 70 158 L 135 158 Q 152 156 164 142 L 195 54 Q 204 42 214 54 L 248 168 Q 262 178 282 166 Q 305 158 380 158" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
  <!-- Highlight Phase X -->
  <line x1="214" y1="54" x2="248" y2="168" stroke="#dc2626" stroke-width="3.2"/>
  <rect x="256" y="88" width="68" height="24" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.2"/>
  <text x="290" y="104" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#b91c1c">Phase X</text>
  <line x1="256" y1="100" x2="233" y2="108" stroke="#dc2626" stroke-width="1.4"/>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-p1a",
  title: "Mock Paper 1A — Multiple Choice (SL & HL)",
  level: "SL",
  paperType: "Paper 1A · Multiple Choice (SL & HL)",
  calculator: true,
  minutes: 45,
  questions: [
    // ==================== THEME A1–A2 (2 SL + 1 HL) ========================
    {
      id: "exam-p1a-q01",
      kind: "mcq",
      topicId: "a1-a2-unity-molecules-cells",
      guideRef: "water-nucleic-acids",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Explain",
      strategy: "Physical properties of water vs air (A1.1)",
      question:
        "Marine mammals such as the ringed seal (*Pusa hispida*) possess a thick subcutaneous blubber layer compared with terrestrial mammals of comparable body mass living at the same ambient temperature. Which physical property of water best explains this adaptation?",
      options: [
        "Water has a lower specific heat capacity than air, so seawater cools rapidly whenever a marine mammal dives below the surface.",
        "Water has a lower buoyant force than air, so marine mammals require lipid stores mainly to prevent sinking during dives.",
        "Water has a much higher thermal conductivity than air, so body heat transfers rapidly from skin into surrounding cold seawater.",
        "Water has a lower viscosity than air, so turbulent boundary layers rapidly strip away insulating pockets of air around the fur.",
      ],
      answerIndex: 2,
      hints: [
        "Compare the physical properties of liquid water and air: buoyancy, viscosity, specific heat capacity, and thermal conductivity.",
        "Blubber is a thermal insulator that reduces the rate of heat loss from a warm endotherm to cold surroundings.",
      ],
      explanation:
        "Liquid water conducts heat roughly 20–25 times faster than air because of its high thermal conductivity, causing rapid heat loss from warm-blooded marine animals unless insulated by thick blubber. Water actually has a higher specific heat capacity, higher buoyancy, and higher viscosity than air, ruling out the competing claims.",
    },
    {
      id: "exam-p1a-q02",
      kind: "mcq",
      topicId: "a1-a2-unity-molecules-cells",
      guideRef: "cell-structure-microscopy",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Unit conversion mm → μm before applying A = I / M",
      question:
        "A transmission electron micrograph shows a mitochondrion with an image length of `36 mm`. The micrograph was captured at a magnification of `×15 000`. What is the actual length of the mitochondrion in micrometres (`μm`)?",
      options: [
        "2.4 μm",
        "0.24 μm",
        "24 μm",
        "5.4 μm",
      ],
      answerIndex: 0,
      hints: [
        "Convert the image length from millimetres to micrometres first (`1 mm = 1000 μm`).",
        "Rearrange `M = I / A` to `A = I / M` and divide `36 000 μm` by `15 000`.",
      ],
      explanation:
        "Converting `36 mm` gives `36 × 1000 = 36 000 μm`. Applying `A = I / M` gives {{36000/15000}} `= 2.4 μm`, which sits squarely in the typical `1–5 μm` size range for mitochondria. Values such as `0.24 μm` or `24 μm` arise from a tenfold unit-conversion slip.",
    },
    {
      id: "exam-p1a-q03",
      kind: "mcq",
      topicId: "a1-a2-unity-molecules-cells",
      guideRef: "viruses-diversity-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Distinguish",
      strategy: "Retrovirus replication vs temperate bacteriophage cycle (A2.3 HL)",
      question:
        "Which feature accurately distinguishes the replication cycle of HIV (a retrovirus) from the lysogenic cycle of bacteriophage lambda?",
      options: [
        "HIV injects double-stranded DNA through a contractile tail sheath while leaving its protein capsid outside the host cell.",
        "HIV relies exclusively on host DNA polymerase to replicate a single-stranded DNA genome inside a bacterial nucleoid.",
        "HIV lyses host helper T-cells immediately upon viral entry without ever integrating viral sequences into host chromosomes.",
        "HIV uses reverse transcriptase to synthesise complementary DNA from an RNA genome before integrating into host DNA.",
      ],
      answerIndex: 3,
      hints: [
        "Recall the genome type of HIV versus bacteriophage lambda.",
        "Which viral enzyme converts RNA into complementary DNA (`cDNA`) in retroviruses?",
      ],
      explanation:
        "HIV carries an RNA genome and packages its own enzyme, reverse transcriptase, to synthesise double-stranded viral DNA from RNA so integrase can insert it into host helper T-cell chromosomes. By contrast, bacteriophage lambda already has a double-stranded DNA genome injected through a tail assembly into a bacterium.",
    },

    // ==================== THEME A3–A4 (2 SL + 1 HL) ========================
    {
      id: "exam-p1a-q04",
      kind: "mcq",
      topicId: "a3-a4-unity-organisms-ecosystems",
      guideRef: "diversity-genomes-karyograms",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Deduce",
      strategy: "Karyogram analysis: autosome count and sex chromosomes",
      question:
        "A human karyogram prepared from fetal amniocentesis cells shows `47` chromosomes in total, including three copies of chromosome `21` and a matched pair of `X` chromosomes. What can be deduced from this karyogram?",
      options: [
        "The fetus is genetically male and has trisomy 21 caused by a single base substitution during DNA replication.",
        "The fetus is genetically female and has trisomy 21 caused by non-disjunction during parental meiosis.",
        "The fetus is genetically female and has monosomy 21 caused by unequal cytokinesis during early mitosis.",
        "The fetus is genetically male and carries an extra sex chromosome caused by crossing over in prophase I.",
      ],
      answerIndex: 1,
      hints: [
        "Count the sex chromosomes (`XX` vs `XY`) to identify biological sex.",
        "Three copies of an autosome (`trisomy`) occur when homologous chromosomes or sister chromatids fail to separate in meiosis.",
      ],
      explanation:
        "Two `X` chromosomes (`XX`) denote a genetically female fetus, and three copies of chromosome 21 indicate trisomy 21 (Down syndrome), caused by non-disjunction during anaphase I or II of parental meiosis. Base substitutions alter nucleotide sequence rather than chromosome number, and monosomy means having only one copy.",
    },
    {
      id: "exam-p1a-q05",
      kind: "mcq",
      topicId: "a3-a4-unity-organisms-ecosystems",
      guideRef: "evolution-speciation",
      level: "SL",
      difficulty: "core",
      commandTerm: "Distinguish",
      strategy: "Convergent evolution vs adaptive radiation (A4.1)",
      question:
        "Sharks (cartilaginous fish) and dolphins (placental mammals) evolved remarkably similar streamlined hydrofoil body shapes and dorsal fins independently. How are these shared features classified?",
      options: [
        "Homologous structures inherited from a recent common marine ancestor through adaptive radiation.",
        "Vestigial structures retained after terrestrial ancestors lost functional limbs in open ocean habitats.",
        "Polyploid traits generated when chromosomal non-disjunction doubled genome size in aquatic vertebrates.",
        "Analogous structures produced by convergent evolution under similar hydrodynamic selection pressures.",
      ],
      answerIndex: 3,
      hints: [
        "Did sharks and dolphins inherit their streamlined fins from a shared streamlined ancestor, or evolve them independently?",
        "Distinguish traits sharing common ancestry (homologous) from traits sharing only similar function and selection pressures (analogous).",
      ],
      explanation:
        "Dolphins evolved from four-limbed terrestrial mammals, whereas sharks belong to a distant cartilaginous fish lineage. Their matching streamlined shapes are analogous structures produced by convergent evolution under the same hydrodynamic drag selection pressures, unlike pentadactyl limbs which are homologous.",
    },
    {
      id: "exam-p1a-q06",
      kind: "mcq",
      topicId: "a3-a4-unity-organisms-ecosystems",
      guideRef: "classification-cladistics-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Deduce",
      strategy: "Cladogram node reading and monophyletic clades (A3.2 HL)",
      diagram: SVG_CLADOGRAM_Q06,
      question:
        "Based on the cladogram shown above, which statement is correct regarding evolutionary relationships among species P, Q, R, and S?",
      options: [
        "Species R and S share a more recent common ancestor with each other than either shares with species Q.",
        "Species P and Q together form a complete monophyletic clade that validly excludes species R and S.",
        "Species Q evolved directly into species R before giving rise to species S at the terminal node.",
        "Species P is more closely related to species Q than species P is related to species R or species S.",
      ],
      answerIndex: 0,
      hints: [
        "Trace backwards from each pair of species to find their most recent shared branching node.",
        "Remember that a clade must include an ancestor and ALL of its descendants; branches can also rotate freely around any node.",
      ],
      explanation:
        "Species R and S meet at Node 2, which is more recent than Node 1 where their lineage joins Species Q. A classic cladogram error is assuming P is closer to Q because they are drawn adjacent — in fact, P meets Q, R, and S at the exact same root node, so P is equally related to all three.",
    },

    // ==================== THEME B1–B2 (3 SL + 1 HL) ========================
    {
      id: "exam-p1a-q07",
      kind: "mcq",
      topicId: "b1-b2-form-molecules-cells",
      guideRef: "carbohydrates-lipids-proteins",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Distinguish",
      strategy: "Structure–function links in polysaccharides (B1.1)",
      question:
        "Which structural feature enables cellulose to form high-tensile-strength microfibrils in plant cell walls?",
      options: [
        "Frequent 1,6-glycosidic branching between α-glucose monomers creates compact coils that cross-link neighbouring cell walls.",
        "Covalent disulphide bridges between adjacent monosaccharide rings lock parallel polysaccharide strands into rigid sheets.",
        "Alternating orientation of β-glucose monomers linked by 1,4-glycosidic bonds lets straight chains form hydrogen bonds.",
        "Helical coiling of unbranched α-glucose chains traps water molecules inside hollow cores to generate turgor pressure.",
      ],
      answerIndex: 2,
      hints: [
        "Identify the monomer of cellulose (`α-glucose` vs `β-glucose`) and whether cellulose chains are branched or straight.",
        "How do parallel cellulose chains stick together into strong microfibrils?",
      ],
      explanation:
        "In cellulose, successive `β-glucose` monomers are inverted `180°` relative to each other across `1,4-glycosidic` bonds, producing straight unbranched chains that pack closely and cross-link via numerous intermolecular hydrogen bonds into microfibrils. Starch and glycogen use `α-glucose` helices/branches for energy storage rather than tensile strength.",
    },
    {
      id: "exam-p1a-q08",
      kind: "mcq",
      topicId: "b1-b2-form-molecules-cells",
      guideRef: "membranes-transport",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Facilitated diffusion channels vs active transport pumps (B2.1)",
      question:
        "How do integral channel proteins differ from active transport protein pumps embedded within the eukaryotic plasma membrane?",
      options: [
        "Channel proteins bind cholesterol to stiffen the bilayer, whereas pumps dissolve phospholipids to permit bulk vesicle fusion.",
        "Channel proteins permit passive movement down a concentration gradient, whereas pumps hydrolyse ATP to move solutes against a gradient.",
        "Channel proteins transport only nonpolar steroid hormones, whereas pumps move water molecules across membranes exclusively by osmosis.",
        "Channel proteins always require ATP phosphorylation to open, whereas pumps operate exclusively down an electrochemical gradient.",
      ],
      answerIndex: 1,
      hints: [
        "Distinguish passive facilitated diffusion from active transport in terms of energy source and gradient direction.",
        "Channel proteins provide a hydrophilic pore; pumps undergo conformational changes powered by ATP.",
      ],
      explanation:
        "Channel proteins (such as aquaporins and ion channels) mediate passive facilitated diffusion down a concentration or electrochemical gradient without ATP input, whereas protein pumps (such as the `Na⁺/K⁺` pump) hydrolyse ATP to drive conformational shifts that move solutes against their gradient.",
    },
    {
      id: "exam-p1a-q09",
      kind: "mcq",
      topicId: "b1-b2-form-molecules-cells",
      guideRef: "cell-specialization-sav",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Cube scaling law: SA:V = 6 / s (B2.3)",
      question:
        "A cuboidal epithelial cell has side length `10 μm`. If it grew into a cube of side length `40 μm` without forming microvilli, how would its surface-area-to-volume (`SA:V`) ratio change?",
      options: [
        "It decreases by a factor of 4, from 0.60 μm⁻¹ to 0.15 μm⁻¹.",
        "It decreases by a factor of 16, from 0.60 μm⁻¹ to 0.0375 μm⁻¹.",
        "It decreases by a factor of 64, from 0.60 μm⁻¹ to 0.0094 μm⁻¹.",
        "It increases by a factor of 4, from 0.15 μm⁻¹ to 0.60 μm⁻¹.",
      ],
      answerIndex: 0,
      hints: [
        "For a cube of side `s`, `SA = 6s²` and `V = s³`, so `SA:V = 6 / s`.",
        "Evaluate `6 / 10` and `6 / 40`, then compare the two values.",
      ],
      explanation:
        "For a cube of side `s`, `SA / V = 6s² / s³ = 6 / s`. Increasing side length fourfold from `10 μm` to `40 μm` multiplies surface area by `16` and volume by `64`, so `SA:V` drops by `64 / 16 = 4`, from `0.60 μm⁻¹` to `0.15 μm⁻¹` — illustrating why larger cells require foldings such as microvilli.",
    },
    {
      id: "exam-p1a-q10",
      kind: "mcq",
      topicId: "b1-b2-form-molecules-cells",
      guideRef: "carbohydrates-lipids-proteins",
      level: "HL",
      difficulty: "core",
      commandTerm: "Identify",
      strategy: "Secondary backbone H-bonds vs tertiary R-group interactions (B1.2 HL)",
      question:
        "Which pair of interactions specifically stabilises the tertiary structure of a folded globular polypeptide rather than its regular α-helix secondary structure?",
      options: [
        "Peptide bonds and phosphodiester linkages formed between adjacent α-carbon atoms along the primary backbone.",
        "Hydrogen bonds formed solely between the carboxyl C=O and amino N–H groups of the polypeptide backbone.",
        "Ester bonds formed between hydrophobic fatty acid chains and glycerol molecules inside the protein core.",
        "Ionic bonds and covalent disulphide bridges formed between amino acid R-groups along the folded chain.",
      ],
      answerIndex: 3,
      hints: [
        "Recall what distinguishes secondary structure (backbone-to-backbone) from tertiary structure (side-chain interactions).",
        "Which bonds form specifically between charged or cysteine R-groups?",
      ],
      explanation:
        "Tertiary folding is driven by interactions among variable amino-acid R-groups: ionic attractions between acidic and basic side chains, covalent disulphide bridges between cysteines, hydrophobic clustering, and side-chain hydrogen bonds. Backbone `C=O···H–N` hydrogen bonds stabilise secondary `α-helices` and `β-pleated` sheets.",
    },

    // ==================== THEME B3–B4 (2 SL + 1 HL) ========================
    {
      id: "exam-p1a-q11",
      kind: "mcq",
      topicId: "b3-b4-form-organisms-ecosystems",
      guideRef: "gas-exchange-haemoglobin",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Antagonistic ventilation muscles & Boyle's law (B3.1)",
      question:
        "Which sequence of events directly causes air to flow into human lungs during normal inspiration?",
      options: [
        "Internal intercostal muscles contract while the diaphragm domes upward, decreasing thoracic volume and raising alveolar pressure above atmospheric pressure.",
        "External intercostal muscles and the diaphragm contract, increasing thoracic volume and lowering alveolar pressure below atmospheric pressure.",
        "External intercostal muscles and the diaphragm relax, increasing thoracic volume and drawing air inward by active diffusion across alveoli.",
        "Abdominal muscles contract to compress the ribcage inward, decreasing alveolar pressure below atmospheric pressure during passive inhalation.",
      ],
      answerIndex: 1,
      hints: [
        "Air flows passively down a pressure gradient from higher atmospheric pressure to lower alveolar pressure.",
        "Which pair of muscles contracts to pull the ribcage upward/outward and flatten the diaphragm?",
      ],
      explanation:
        "During inspiration, the external intercostal muscles contract (moving the ribcage up and out) and the diaphragm contracts and flattens, expanding thoracic volume. By Boyle's law, alveolar pressure falls below atmospheric pressure, so air flows down the pressure gradient into the lungs. Internal intercostals and abdominal muscles assist forced expiration.",
    },
    {
      id: "exam-p1a-q12",
      kind: "mcq",
      topicId: "b3-b4-form-organisms-ecosystems",
      guideRef: "transport-circulation-plants",
      level: "SL",
      difficulty: "core",
      commandTerm: "Outline",
      strategy: "Cohesion–tension theory of xylem transport (B3.2)",
      question:
        "What generates the primary driving tension that pulls a continuous column of water upward through xylem vessels in tall trees?",
      options: [
        "Active pumping of sucrose from root companion cells into dead xylem vessels generates positive hydrostatic pressure pushing water to the canopy.",
        "Rhythmic contraction of lignified xylem vessel walls squeezes water molecules upward in pulses synchronized with stomatal opening.",
        "Evaporation of water from spongy mesophyll cell walls creates negative pressure transmitted down hydrogen-bonded water columns.",
        "Osmotic uptake of glucose by root hairs raises xylem water potential above atmospheric pressure, forcing water out through leaf stomata.",
      ],
      answerIndex: 2,
      hints: [
        "Xylem vessel elements are dead, lignified tubes — they cannot contract or actively pump solutes.",
        "Think about where water evaporates in the leaf and how hydrogen bonding transmits tension downward.",
      ],
      explanation:
        "Transpiration from wet spongy mesophyll cell walls into substomatal air spaces creates curved menisci and negative pressure (tension). Cohesion between hydrogen-bonded water molecules and adhesion to hydrophilic xylem walls transmit this continuous pull down to the roots. Active sucrose loading applies to living phloem sieve tubes, not dead xylem.",
    },
    {
      id: "exam-p1a-q13",
      kind: "mcq",
      topicId: "b3-b4-form-organisms-ecosystems",
      guideRef: "muscle-motility-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      strategy: "Sarcomere banding geometry during sliding filament contraction (B3.3 HL)",
      question:
        "During skeletal muscle contraction according to the sliding filament theory, which changes occur within a sarcomere?",
      options: [
        "The A-band and H-zone shorten equally as myosin filaments compress, while the I-band widens and calcium ions bind directly to myosin heads.",
        "Both actin and myosin filaments decrease in length simultaneously as Z-lines move closer, requiring ATP only for initial calcium release.",
        "The I-band widens and the A-band narrows as tropomyosin pulls Z-lines inward, while ATP binds to troponin to detach actin filaments.",
        "The H-zone and I-band narrow as actin slides over myosin, while A-band length stays constant and ATP hydrolysis drives cross-bridge cycling.",
      ],
      answerIndex: 3,
      hints: [
        "Neither actin nor myosin protein filaments shorten; they slide past each other.",
        "The A-band spans the full length of thick myosin filaments — what happens to the actin-only I-band and myosin-only H-zone?",
      ],
      explanation:
        "As myosin heads pull thin actin filaments inward toward the M-line, Z-lines move closer together, narrowing both the light I-band (actin only) and the central H-zone (myosin only). Because myosin filaments themselves do not shorten, the dark A-band remains constant in length, while ATP binding breaks cross-bridges and ATP hydrolysis recocks myosin heads.",
    },

    // ==================== THEME C1–C2 (2 SL + 1 HL) ========================
    {
      id: "exam-p1a-q14",
      kind: "mcq",
      topicId: "c1-c2-interaction-molecules-cells",
      guideRef: "enzymes-metabolism",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Explain",
      strategy: "Thermal denaturation of globular tertiary structure (C1.1)",
      question:
        "Why does the rate of an enzyme-catalysed reaction drop sharply when temperature increases well above the enzyme's optimum?",
      options: [
        "Increased thermal vibration disrupts weak intramolecular bonds, distorting the three-dimensional active site so substrate can no longer bind.",
        "Elevated kinetic energy hydrolyses covalent peptide bonds along the primary sequence, breaking the enzyme into free amino acid monomers.",
        "Higher temperatures reduce the collision frequency between substrate and enzyme molecules, lowering the rate of enzyme–substrate complex formation.",
        "Thermal energy converts competitive inhibitors into irreversible activators that permanently block product release from the active site.",
      ],
      answerIndex: 0,
      hints: [
        "Distinguish weak intramolecular interactions (hydrogen/ionic bonds) from strong covalent peptide bonds.",
        "What specifically loses its complementary shape during denaturation?",
      ],
      explanation:
        "Above the optimum temperature, excessive kinetic energy vibrates atoms enough to break hydrogen, ionic, and hydrophobic interactions maintaining tertiary structure. The active site changes shape (denaturation) and loses complementarity to its substrate. Peptide bonds of the primary structure remain intact at normal biological denaturation temperatures.",
    },
    {
      id: "exam-p1a-q15",
      kind: "mcq",
      topicId: "c1-c2-interaction-molecules-cells",
      guideRef: "neural-signaling",
      level: "SL",
      difficulty: "core",
      commandTerm: "Describe",
      strategy: "Voltage-gated Na⁺ vs K⁺ channels during an action potential (C2.2)",
      diagram: SVG_ACTION_POTENTIAL_Q15,
      question:
        "Which ion movement directly causes the rapid repolarization phase labelled Phase X on the action potential trace above?",
      options: [
        "Voltage-gated sodium (Na⁺) channels remain fully open while chloride pumps actively export negative ions out of the axoplasm.",
        "Voltage-gated calcium (Ca²⁺) channels open along the node of Ranvier, allowing Ca²⁺ ions to diffuse rapidly into the myelin sheath.",
        "Voltage-gated potassium (K⁺) channels open while voltage-gated sodium (Na⁺) channels close, allowing K⁺ ions to diffuse out of the axon.",
        "Voltage-gated potassium (K⁺) channels close while sodium–potassium pumps transport three Na⁺ ions inward for every two K⁺ ions outward.",
      ],
      answerIndex: 2,
      hints: [
        "During Phase X, the inside of the axon drops rapidly from `+30 mV` back to `−70 mV`, meaning positive charge is leaving the cell.",
        "Which positively charged ion is more concentrated inside the resting axon and diffuses outward through voltage-gated channels?",
      ],
      explanation:
        "Near the `+30 mV` peak, voltage-gated `Na⁺` channels inactivate and voltage-gated `K⁺` channels open. Because intracellular `[K⁺]` is high, `K⁺` diffuses rapidly out of the axon down its electrochemical gradient, restoring the negative internal potential (repolarization). Note also that the `Na⁺/K⁺` pump exports `3 Na⁺` and imports `2 K⁺` (not the reverse).",
    },
    {
      id: "exam-p1a-q16",
      kind: "mcq",
      topicId: "c1-c2-interaction-molecules-cells",
      guideRef: "chemical-signaling-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Compare",
      strategy: "Hydrophilic GPCR second-messenger vs hydrophobic steroid receptor (C2.1 HL)",
      question:
        "How does the cellular signalling mechanism of epinephrine (adrenaline) in liver hepatocytes differ from that of oestradiol in target uterine cells?",
      options: [
        "Epinephrine diffuses directly through the phospholipid bilayer to activate nuclear RNA polymerase, whereas hydrophilic oestradiol binds a membrane channel to trigger calcium influx.",
        "Epinephrine binds a membrane G-protein coupled receptor to elevate intracellular cAMP, whereas hydrophobic oestradiol diffuses into the cell to bind an intracellular transcription regulator.",
        "Epinephrine permanently methylates nuclear DNA to silence glycogen genes, whereas oestradiol binds a tyrosine kinase receptor that inhibits adenylyl cyclase activity.",
        "Epinephrine activates an extracellular enzyme that digests glycogen directly outside the cell, whereas oestradiol requires clathrin-coated endocytosis to cross the nuclear envelope.",
      ],
      answerIndex: 1,
      hints: [
        "Compare the solubility of epinephrine (water-soluble amine) and oestradiol (lipid-soluble steroid derived from cholesterol).",
        "Which hormone needs a transmembrane receptor and second messenger, and which passes freely through the phospholipid bilayer?",
      ],
      explanation:
        "Hydrophilic epinephrine cannot cross the hydrophobic bilayer core; it binds a transmembrane GPCR, activating a G-protein and adenylyl cyclase to generate the second messenger cAMP for rapid enzyme cascade activation. Lipid-soluble oestradiol diffuses across the plasma membrane and binds an intracellular receptor that regulates gene transcription directly.",
    },

    // ==================== THEME C3–C4 (2 SL + 1 HL) ========================
    {
      id: "exam-p1a-q17",
      kind: "mcq",
      topicId: "c3-c4-interaction-organisms-ecosystems",
      guideRef: "defense-against-disease",
      level: "SL",
      difficulty: "core",
      commandTerm: "Outline",
      strategy: "Primary vs secondary adaptive immune response (C3.2)",
      question:
        "Why does a booster vaccination produce a much faster and higher antibody concentration in blood plasma than the primary exposure?",
      options: [
        "Residual vaccine antigens remain bound to skin macrophages for years and continuously synthesise identical antibodies without cell division.",
        "Antibiotics administered alongside the vaccine eliminate competing gut bacteria so phagocytes can secrete immunoglobulins directly.",
        "Platelets convert circulating fibrinogen into fibrin strands that trap pathogens and trigger passive antibody release from red blood cells.",
        "Long-lived memory B-lymphocytes recognise the specific antigen immediately and divide rapidly into antibody-secreting plasma cells.",
      ],
      answerIndex: 3,
      hints: [
        "What specialised lymphocytes persist in the body long after the primary immune response finishes?",
        "Distinguish clonal expansion of memory cells from innate phagocytosis or blood clotting.",
      ],
      explanation:
        "Clonal selection during the primary response produces long-lived memory B- and T-lymphocytes specific to the antigen. Upon booster exposure, these memory B-cells immediately proliferate and differentiate into large clones of plasma cells, generating a faster, larger, and longer-lasting antibody surge.",
    },
    {
      id: "exam-p1a-q18",
      kind: "mcq",
      topicId: "c3-c4-interaction-organisms-ecosystems",
      guideRef: "transfers-energy-matter",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Sequential trophic energy transfer multiplication (C4.2)",
      question:
        "In a temperate grassland, primary producers fix `42 000 kJ m⁻² yr⁻¹` as net primary productivity. If trophic transfer efficiency is `10%` from producers to primary consumers and `12%` from primary consumers to secondary consumers, how much energy is assimilated by secondary consumers?",
      options: [
        "50.4 kJ m⁻² yr⁻¹",
        "420 kJ m⁻² yr⁻¹",
        "504 kJ m⁻² yr⁻¹",
        "5040 kJ m⁻² yr⁻¹",
      ],
      answerIndex: 2,
      hints: [
        "Calculate energy at the primary consumer level first: `10%` of `42 000 kJ m⁻² yr⁻¹`.",
        "Then take `12%` of that primary consumer value to obtain energy reaching secondary consumers.",
      ],
      explanation:
        "Primary consumers assimilate `0.10 × 42 000 = 4200 kJ m⁻² yr⁻¹`. Secondary consumers assimilate `0.12 × 4200 = 504 kJ m⁻² yr⁻¹`. Multiplying `42 000 × 0.12 = 5040` omits the first trophic loss, whereas `420` mistakenly applies `10%` twice.",
    },
    {
      id: "exam-p1a-q19",
      kind: "mcq",
      topicId: "c3-c4-interaction-organisms-ecosystems",
      guideRef: "integration-body-systems",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "PIN3 auxin efflux pumps & acid-growth hypothesis (C3.1 HL)",
      question:
        "During positive phototropism in a plant shoot illuminated from one side, how do PIN3 auxin efflux pumps cause the stem to bend toward the light?",
      options: [
        "PIN3 proteins relocate laterally to pump auxin toward the shaded side, activating proton pumps that acidify and loosen cell walls for elongation.",
        "PIN3 proteins concentrate auxin on the illuminated side of the shoot, stimulating rapid mitosis while inhibiting water uptake in shaded cells.",
        "PIN3 proteins transport auxin downward into the roots only during darkness, triggering ethylene release that stiffens lignin in shaded xylem vessels.",
        "PIN3 proteins pump potassium ions out of guard cells on the shaded side, causing asymmetric loss of turgor that bends the stem toward light.",
      ],
      answerIndex: 0,
      hints: [
        "For a shoot to bend toward a light source, which side must elongate faster — the shaded side or the lit side?",
        "Connect auxin redistribution to `H⁺` proton pumps, cell-wall loosening (expansins), and turgor-driven elongation.",
      ],
      explanation:
        "Unilateral blue light causes PIN3 efflux carriers to redistribute auxin horizontally toward the shaded side of the shoot. Higher auxin activates plasma-membrane `H⁺`-ATPase proton pumps, lowering apoplastic pH to activate wall-loosening expansins; osmotic water entry then elongates shaded cells faster than lit cells, bending the shoot toward light.",
    },

    // ==================== THEME D1–D2 (2 SL + 1 HL) ========================
    {
      id: "exam-p1a-q20",
      kind: "mcq",
      topicId: "d1-d2-continuity-molecules-cells",
      guideRef: "dna-replication-protein-synthesis",
      level: "SL",
      difficulty: "core",
      commandTerm: "Deduce",
      strategy: "Antiparallel complementary RNA base pairing (A→U, T→A, C→G, G→C)",
      question:
        "A short segment of the antisense (template) strand of DNA has the base sequence `3'-TAC GGA CTT-5'`. What is the base sequence of the mRNA transcript synthesised from this template?",
      options: [
        "5'-ATG CCT GAA-3'",
        "5'-AUG CCU GAA-3'",
        "5'-UAC GGA CUU-3'",
        "5'-AAG UCC GUA-3'",
      ],
      answerIndex: 1,
      hints: [
        "RNA polymerase reads the `3' → 5'` antisense strand and synthesises mRNA in the `5' → 3'` direction.",
        "Match each DNA template base with its RNA complement: `T → A`, `A → U`, `C → G`, `G → C` (RNA contains uracil, not thymine).",
      ],
      explanation:
        "Pairing complementary RNA bases antiparallel to `3'-TAC GGA CTT-5'` gives `T→A`, `A→U`, `C→G` (`AUG`), `G→C`, `G→C`, `A→U` (`CCU`), and `C→G`, `T→A`, `T→A` (`GAA`), yielding `5'-AUG CCU GAA-3'`. Writing `ATG CCT GAA` forgets to replace thymine with uracil, while `UAC GGA CUU` fails to complement the template strand.",
    },
    {
      id: "exam-p1a-q21",
      kind: "mcq",
      topicId: "d1-d2-continuity-molecules-cells",
      guideRef: "mutations-division-cancer",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Mitotic index = (P + M + A + T) / total cells (D2.1)",
      question:
        "A student examines a stained onion root-tip squash under a light microscope and counts `168` cells in interphase, `14` in prophase, `7` in metaphase, `6` in anaphase, and `5` in telophase. What is the mitotic index of this root-tip sample?",
      options: [
        "0.07 (7%)",
        "0.19 (19%)",
        "0.84 (84%)",
        "0.16 (16%)",
      ],
      answerIndex: 3,
      hints: [
        "Add only the four stages of mitosis (prophase, metaphase, anaphase, telophase) for the numerator.",
        "Divide by the TOTAL number of cells counted (interphase + mitosis), NOT just interphase cells.",
      ],
      explanation:
        "Cells in mitosis `= 14 + 7 + 6 + 5 = 32`. Total cells counted `= 168 + 32 = 200`. Thus mitotic index `=` {{32/200}} `= 0.16` (`16%`). Dividing `32` by `168` gives the classic trap value `0.19`, while `0.84` is the fraction in interphase.",
    },
    {
      id: "exam-p1a-q22",
      kind: "mcq",
      topicId: "d1-d2-continuity-molecules-cells",
      guideRef: "gene-expression-epigenetics-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      strategy: "DNA methylation silences vs histone acetylation activates (D2.2 HL)",
      question:
        "Which combination of epigenetic modifications typically increases the rate of transcription of a specific eukaryotic gene?",
      options: [
        "Increased methylation of promoter DNA combined with decreased acetylation of histone tails, condensing chromatin into tightly packed heterochromatin.",
        "Increased methylation of both promoter DNA and histone tails, recruiting repressor proteins that physically block RNA polymerase binding.",
        "Decreased methylation of promoter DNA combined with increased acetylation of histone tails, loosening chromatin structure for transcription factors.",
        "Decreased acetylation of histone tails combined with removal of introns from promoter sequences before DNA helicase unwinds the double helix.",
      ],
      answerIndex: 2,
      hints: [
        "Remember the memory cue: DNA **M**ethylation **M**utes (silences) transcription, whereas histone **A**cetylation **A**ctivates it.",
        "Acetyl groups neutralise positive charges on histone lysines, loosening DNA wrapping around nucleosomes.",
      ],
      explanation:
        "Adding acetyl groups to positively charged lysine residues on histone tails reduces electrostatic attraction to negatively charged DNA, opening chromatin into accessible euchromatin; simultaneously, low promoter DNA methylation permits transcription factors and RNA polymerase to bind. High promoter methylation and deacetylation condense chromatin and repress transcription.",
    },

    // ==================== THEME D3–D4 (2 SL + 1 HL) ========================
    {
      id: "exam-p1a-q23",
      kind: "mcq",
      topicId: "d3-d4-continuity-organisms-ecosystems",
      guideRef: "inheritance-linked-chi",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "X-linked recessive Punnett grid (D3.2)",
      question:
        "Red-green colour blindness is inherited as an X-linked recessive allele (`Xᵇ`). A carrier woman (`XᴮXᵇ`) and a man with normal colour vision (`XᴮY`) have a child. What is the probability that their child is a boy who has red-green colour blindness?",
      options: [
        "25% (1 in 4)",
        "50% (1 in 2)",
        "0% (impossible)",
        "75% (3 in 4)",
      ],
      answerIndex: 0,
      hints: [
        "Draw a `2 × 2` Punnett grid crossing maternal gametes (`Xᴮ`, `Xᵇ`) with paternal gametes (`Xᴮ`, `Y`).",
        "Notice the question asks for the probability among ALL possible children (both boys and girls), not conditioned on already knowing the child is a boy.",
      ],
      explanation:
        "The cross `XᴮXᵇ × XᴮY` yields four equally probable offspring genotypes: `XᴮXᴮ` (normal girl), `XᴮXᵇ` (carrier girl), `XᴮY` (normal boy), and `XᵇY` (colour-blind boy). Therefore, `1` out of `4` (`25%`) of all children are expected to be colour-blind boys. Choosing `50%` is the chance among sons only, not among all births.",
    },
    {
      id: "exam-p1a-q24",
      kind: "mcq",
      topicId: "d3-d4-continuity-organisms-ecosystems",
      guideRef: "stability-climate-change",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Ice–albedo positive climate feedback loop (D4.3)",
      question:
        "Why does the rapid melting of Arctic sea ice act as a positive feedback loop that accelerates global warming?",
      options: [
        "Melting sea ice releases large quantities of dissolved oxygen into the atmosphere, thickening the ozone layer and trapping extra infrared radiation.",
        "Replacing high-albedo reflective ice with darker ocean water increases solar energy absorption, raising sea temperatures and causing further melt.",
        "Exposing dark seawater reflects a higher fraction of incoming short-wave solar radiation back into space, cooling polar currents and slowing warming.",
        "Freshwater from melted ice raises ocean pH sharply, stimulating calcifying phytoplankton blooms that release methane as they photosynthesise.",
      ],
      answerIndex: 1,
      hints: [
        "Compare the reflectivity (albedo) of bright white snow/ice versus dark open ocean water.",
        "In a positive feedback loop, an initial change (warming and ice melt) amplifies itself further.",
      ],
      explanation:
        "Bright ice and snow have high albedo, reflecting most incoming solar radiation back to space. When warming melts sea ice, darker ocean water with much lower albedo is exposed, absorbing more solar radiation, raising water and air temperatures further, and accelerating additional ice loss.",
    },
    {
      id: "exam-p1a-q25",
      kind: "mcq",
      topicId: "d3-d4-continuity-organisms-ecosystems",
      guideRef: "natural-selection-hardy-weinberg",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      strategy: "Hardy–Weinberg: q = √(q²), p = 1 − q, heterozygotes = 2pq (D4.1 HL)",
      question:
        "In a large randomly mating population of beetles in Hardy–Weinberg equilibrium, `9%` of individuals exhibit the autosomal recessive pale-wing phenotype (`aa`). What percentage of this population is expected to be heterozygous carriers (`Aa`)?",
      options: [
        "18%",
        "21%",
        "49%",
        "42%",
      ],
      answerIndex: 3,
      hints: [
        "Start from the homozygous recessive frequency `q² = 0.09`, and take its square root to find the recessive allele frequency `q`.",
        "Find `p = 1 − q`, then calculate the heterozygote frequency `2pq` (do not forget the factor of `2`!).",
      ],
      explanation:
        "Since `q² = 0.09`, `q =` {{sqrt(0.09)}} `= 0.30` and `p = 1 − 0.30 = 0.70`. The heterozygous carrier frequency is `2pq = 2 × 0.70 × 0.30 = 0.42`, or `42%`. Computing `pq = 0.21` (`21%`) misses the factor of `2`, while `p² = 0.49` (`49%`) gives homozygous dominant individuals (`AA`).",
    },
  ],
};
