import type { ExamPaper } from "../types.ts";

const SVG_PALISADE_SCALE_Q01 = `<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Micrograph schematic of a plant palisade cell containing a chloroplast measuring 15 mm on the image alongside a 10 micrometre scale bar measuring 25 mm on the image">
  <rect x="0" y="0" width="440" height="230" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="220" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Electron Micrograph Schematic — Palisade Mesophyll Cell</text>
  <!-- Outer cell wall -->
  <rect x="44" y="38" width="352" height="132" rx="22" fill="#ecfdf5" stroke="#15803d" stroke-width="4.5"/>
  <!-- Inner plasma membrane -->
  <rect x="52" y="46" width="336" height="116" rx="16" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.4"/>
  <!-- Large central vacuole -->
  <rect x="132" y="64" width="184" height="80" rx="24" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="224" y="108" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#0369a1">Central vacuole</text>
  <!-- Nucleus -->
  <circle cx="350" cy="104" r="24" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/>
  <circle cx="354" cy="102" r="7" fill="#7c3aed"/>
  <text x="350" y="142" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#5b21b6">Nucleus</text>
  <!-- Highlighted Chloroplast (image length = 15 mm) -->
  <ellipse cx="92" cy="96" rx="27" ry="15" fill="#22c55e" stroke="#14532d" stroke-width="1.8"/>
  <line x1="74" y1="92" x2="110" y2="92" stroke="#14532d" stroke-width="1.4"/>
  <line x1="74" y1="96" x2="110" y2="96" stroke="#14532d" stroke-width="1.4"/>
  <line x1="74" y1="100" x2="110" y2="100" stroke="#14532d" stroke-width="1.4"/>
  <!-- Measurement bracket for chloroplast -->
  <line x1="65" y1="68" x2="119" y2="68" stroke="#b91c1c" stroke-width="1.6"/>
  <line x1="65" y1="63" x2="65" y2="73" stroke="#b91c1c" stroke-width="1.6"/>
  <line x1="119" y1="63" x2="119" y2="73" stroke="#b91c1c" stroke-width="1.6"/>
  <text x="92" y="61" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#b91c1c">Chloroplast (15 mm)</text>
  <!-- Scale bar (printed length = 25 mm, represents 10 um) -->
  <line x1="255" y1="196" x2="345" y2="196" stroke="#0f172a" stroke-width="3.5"/>
  <line x1="255" y1="190" x2="255" y2="202" stroke="#0f172a" stroke-width="2"/>
  <line x1="345" y1="190" x2="345" y2="202" stroke="#0f172a" stroke-width="2"/>
  <text x="300" y="216" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">Scale bar = 10 μm (image length: 25 mm)</text>
</svg>`;

const SVG_SPIROMETER_Q05 = `<svg viewBox="0 0 460 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spirometer lung volume trace showing resting ventilation with 0.50 dm^3 tidal volume and exercise ventilation with 1.80 dm^3 tidal volume">
  <rect x="0" y="0" width="460" height="245" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="235" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Spirometer Trace — Rest vs Moderate Exercise</text>
  <!-- Gridlines -->
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="65" y1="45" x2="435" y2="45"/>
    <line x1="65" y1="80" x2="435" y2="80"/>
    <line x1="65" y1="115" x2="435" y2="115"/>
    <line x1="65" y1="150" x2="435" y2="150"/>
    <line x1="65" y1="185" x2="435" y2="185"/>
  </g>
  <!-- Axes -->
  <line x1="65" y1="38" x2="65" y2="205" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="65" y1="205" x2="438" y2="205" stroke="#0f172a" stroke-width="1.8"/>
  <!-- Y labels (35px per 1.0 dm3, y=205 is 1.0 dm3) -->
  <text x="58" y="49" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#334155">5.5</text>
  <text x="58" y="84" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#334155">4.5</text>
  <text x="58" y="119" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#334155">3.5</text>
  <text x="58" y="154" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#334155">2.5</text>
  <text x="58" y="189" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#334155">1.5</text>
  <text x="18" y="122" text-anchor="middle" transform="rotate(-90 18 122)" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">Lung volume (dm³)</text>
  <text x="250" y="228" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">Time</text>
  <!-- Rest region divider -->
  <line x1="220" y1="38" x2="220" y2="205" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="5,4"/>
  <text x="142" y="58" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d">Rest (12 breaths min⁻¹)</text>
  <text x="330" y="58" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8">Exercise (25 breaths min⁻¹)</text>
  <!-- Rest wave: amplitude 0.50 dm3 (17.5px) around y=141 -->
  <path d="M 70 150 Q 82 132 95 132 Q 108 132 120 150 Q 132 132 145 132 Q 158 132 170 150 Q 182 132 195 132 Q 208 132 220 150" fill="none" stroke="#16a34a" stroke-width="2.6"/>
  <!-- Exercise wave: amplitude 1.80 dm3 (63px, from y=160 to y=97) -->
  <path d="M 220 150 Q 230 97 240 97 Q 250 97 260 160 Q 270 97 280 97 Q 290 97 300 160 Q 310 97 320 97 Q 330 97 340 160 Q 350 97 360 97 Q 370 97 380 160 Q 390 97 400 97 Q 410 97 420 160" fill="none" stroke="#2563eb" stroke-width="2.6"/>
  <!-- Amplitude callouts -->
  <line x1="95" y1="132" x2="95" y2="150" stroke="#15803d" stroke-width="1.6"/>
  <text x="142" y="176" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#15803d">Tidal volume = 0.50 dm³</text>
  <line x1="360" y1="97" x2="360" y2="160" stroke="#b91c1c" stroke-width="1.6" stroke-dasharray="3,2"/>
  <text x="330" y="182" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#1d4ed8">Tidal volume = 1.80 dm³</text>
</svg>`;

const SVG_PEDIGREE_Q12 = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-generation pedigree chart for an autosomal recessive trait where unaffected parents I-1 and I-2 have unaffected children II-1 and II-3 and affected daughter II-2">
  <rect x="0" y="0" width="420" height="220" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="210" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Pedigree Chart — Autosomal Recessive Condition (a)</text>
  <!-- Generation labels -->
  <text x="30" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#475569">I</text>
  <text x="30" y="148" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#475569">II</text>
  <!-- Generation I: I-1 male (square) & I-2 female (circle), both unaffected -->
  <rect x="130" y="50" width="28" height="28" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
  <text x="144" y="44" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">I-1</text>
  <line x1="158" y1="64" x2="222" y2="64" stroke="#0f172a" stroke-width="2"/>
  <circle cx="236" cy="64" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
  <text x="236" y="44" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">I-2</text>
  <!-- Descent lines -->
  <line x1="190" y1="64" x2="190" y2="104" stroke="#0f172a" stroke-width="2"/>
  <line x1="104" y1="104" x2="276" y2="104" stroke="#0f172a" stroke-width="2"/>
  <line x1="104" y1="104" x2="104" y2="128" stroke="#0f172a" stroke-width="2"/>
  <line x1="190" y1="104" x2="190" y2="128" stroke="#0f172a" stroke-width="2"/>
  <line x1="276" y1="104" x2="276" y2="128" stroke="#0f172a" stroke-width="2"/>
  <!-- Generation II: II-1 unaffected male, II-2 affected female (shaded), II-3 unaffected male -->
  <rect x="90" y="128" width="28" height="28" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
  <text x="104" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">II-1</text>
  <circle cx="190" cy="142" r="14" fill="#15803d" stroke="#0f172a" stroke-width="2"/>
  <text x="190" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d">II-2 (affected)</text>
  <rect x="262" y="128" width="28" height="28" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
  <text x="276" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">II-3</text>
  <!-- Key -->
  <rect x="30" y="186" width="360" height="24" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="44" y="193" width="10" height="10" fill="#ffffff" stroke="#0f172a" stroke-width="1.4"/>
  <text x="60" y="202" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Unaffected male</text>
  <circle cx="160" cy="198" r="5" fill="#ffffff" stroke="#0f172a" stroke-width="1.4"/>
  <text x="170" y="202" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Unaffected female</text>
  <circle cx="282" cy="198" r="5" fill="#15803d" stroke="#0f172a" stroke-width="1.4"/>
  <text x="292" y="202" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Affected individual</text>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-p2-sl",
  title: "Mock Paper 2 (SL) — Structured & Extended Response",
  level: "SL",
  paperType: "Paper 2 (SL) · Structured & Extended",
  calculator: true,
  minutes: 90,
  questions: [
    // =============== SECTION A: STRUCTURED QUESTIONS (Q01–Q12) ===============
    {
      id: "exam-p2-sl-q01",
      kind: "short",
      topicId: "a1-a2-unity-molecules-cells",
      guideRef: "cell-structure-microscopy",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Compute magnification from scale bar, then actual size A = I / M",
      diagram: SVG_PALISADE_SCALE_Q01,
      question:
        "In the palisade mesophyll micrograph schematic above, the `10 μm` scale bar measures `25 mm` on the printed image, and the highlighted chloroplast measures `15 mm` in length on the same image. Calculate the actual length of the chloroplast in micrometres (`μm`).",
      answer: {
        type: "number",
        value: 6,
        tolerance: 0.1,
        display: "6 μm",
      },
      traps: [
        {
          spec: { type: "number", value: 16.7, tolerance: 0.2 },
          feedback: "Check the ratio: the chloroplast (`15 mm`) is SHORTER than the `10 μm` scale bar (`25 mm`), so its actual length must be less than `10 μm`.",
        },
        {
          spec: { type: "number", value: 6000, tolerance: 10 },
          feedback: "Convert `mm` to `μm` consistently — `25 mm = 25 000 μm`, giving `M = ×2500`, and `15 000 μm ÷ 2500 = 6 μm`.",
        },
      ],
      hints: [
        "First calculate magnification from the scale bar: convert `25 mm` to `25 000 μm` and divide by `10 μm`.",
        "Alternatively, use direct proportion: the chloroplast is `15 / 25` of the length of a `10 μm` scale bar.",
      ],
      solution: [
        "Magnification from scale bar: `M =` {{25000/10}} `= ×2500`.",
        "Actual length of chloroplast: `A =` {{15000/2500}} `= 6 μm` (equivalently, {{15/25}} `× 10 μm = 6 μm`).",
      ],
      commonError: "Inverting the scale-bar proportion (`25/15 × 10`) instead of checking whether the organelle is smaller or larger than the scale bar.",
    },
    {
      id: "exam-p2-sl-q02",
      kind: "written",
      topicId: "a3-a4-unity-organisms-ecosystems",
      guideRef: "evolution-speciation",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Geographical barrier → no gene flow → differential selection → reproductive isolation",
      marks: 4,
      question:
        "Explain how geographical isolation can lead to allopatric speciation in two separated island populations of finches originating from a single mainland ancestral population.",
      hints: [
        "Explain what the physical barrier (open ocean) prevents between the two populations.",
        "Link pre-existing heritable variation and differing island food sources/selection pressures to diverging allele frequencies.",
        "State the criterion that confirms two distinct species have formed.",
      ],
      modelAnswer:
        "A physical barrier such as open ocean separates the two island populations, preventing interbreeding and halting gene flow between them. Each isolated population already possesses heritable genetic variation arising from random mutation and meiosis, and encounters different abiotic conditions or food sources (such as hard seeds versus insects) imposing distinct natural selection pressures. Over many generations, individuals with advantageous beak alleles survive and reproduce more successfully, causing allele frequencies and phenotypes to diverge on each island (assisted by genetic drift). Eventually, accumulated genetic, behavioural, or anatomical differences create reproductive isolation so that even if the birds reunite, they can no longer interbreed to produce fertile offspring, forming separate species.",
      markScheme: [
        {
          point: "Physical barrier prevents interbreeding / stops gene flow between the isolated populations.",
          keywords: ["gene flow", "barrier", "interbreed"],
        },
        {
          point: "Populations contain heritable genetic variation (from mutation/meiosis) and experience different environmental selection pressures.",
          keywords: ["selection pressure", "variation", "mutation", "different"],
        },
        {
          point: "Differential survival and reproduction cause allele frequencies to diverge over generations.",
          keywords: ["allele frequenc", "diverge", "differential survival", "generations"],
        },
        {
          point: "Reproductive isolation develops so populations can no longer interbreed to produce fertile offspring.",
          keywords: ["reproductive isolation", "fertile offspring"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant evolutionary mechanism for allopatric speciation.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Mentions geographical separation and adaptation, but omits gene flow, allele-frequency divergence, or reproductive isolation.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Presents a complete causal sequence from barrier/halted gene flow through differential selection and allele divergence to reproductive isolation.",
        },
      ],
      commonError: "Implying finches 'adapt on purpose' or mutate because they need a new beak shape — mutations are random and natural selection acts on pre-existing variation.",
    },
    {
      id: "exam-p2-sl-q03",
      kind: "short",
      topicId: "b1-b2-form-molecules-cells",
      guideRef: "cell-specialization-sav",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "For a cube of side s: SA = 6s², V = s³, SA:V = 6 / s",
      question:
        "A cube-shaped bacterial cell has a side length of `2.5 μm`. Calculate its surface-area-to-volume (`SA:V`) ratio (numerical value in `μm⁻¹`, to one decimal place).",
      answer: {
        type: "number",
        value: 2.4,
        tolerance: 0.05,
        display: "2.4",
      },
      traps: [
        {
          spec: { type: "number", value: 0.42, tolerance: 0.02 },
          feedback: "That is `V / SA` (`2.5 / 6`); invert the ratio so surface area is in the numerator (`6 / 2.5`).",
        },
        {
          spec: { type: "number", value: 37.5, tolerance: 0.1 },
          feedback: "`37.5 μm²` is only the surface area (`6 × 2.5²`) — divide by the volume (`2.5³ = 15.625 μm³`).",
        },
      ],
      hints: [
        "Calculate surface area `SA = 6 × 2.5²` and volume `V = 2.5³`, or simplify `6s² / s³ = 6 / s`.",
        "Divide `6` by `2.5`.",
      ],
      solution: [
        "Surface area `SA = 6 × (2.5)² = 37.5 μm²`; volume `V = (2.5)³ = 15.625 μm³`.",
        "`SA:V =` {{37.5/15.625}} `=` {{6/2.5}} `= 2.4 μm⁻¹`.",
      ],
      commonError: "Computing `SA` or `V` alone without dividing `SA` by `V`, or computing `V : SA` upside down.",
    },
    {
      id: "exam-p2-sl-q04",
      kind: "written",
      topicId: "b1-b2-form-molecules-cells",
      guideRef: "membranes-transport",
      level: "SL",
      difficulty: "core",
      commandTerm: "Compare and contrast",
      strategy: "State similarities first, then contrast gradient direction, ATP usage, and carrier mechanics",
      marks: 4,
      question:
        "Compare and contrast facilitated diffusion and active transport across a eukaryotic plasma membrane.",
      hints: [
        "Include at least one explicit similarity (both use specific transmembrane proteins to move polar/charged solutes unable to cross the hydrophobic core).",
        "Contrast direction relative to the concentration gradient (down vs against).",
        "Contrast energy requirement (passive thermal energy vs ATP hydrolysis) and give an example of each.",
      ],
      modelAnswer:
        "Both facilitated diffusion and active transport rely on specific integral transmembrane proteins to move polar or charged solutes (such as ions or glucose) that cannot diffuse directly across the hydrophobic phospholipid bilayer core. However, facilitated diffusion is a passive process that requires no metabolic ATP and moves particles down their concentration gradient (high to low) via channel or carrier proteins, such as potassium leak channels or aquaporins. In contrast, active transport requires ATP hydrolysis by protein pumps to drive conformational changes that move solutes against their concentration gradient (low to high), such as root-hair mineral uptake or the sodium–potassium pump.",
      markScheme: [
        {
          point: "Similarity: both require specific integral/transmembrane proteins (or both transport polar/charged/hydrophilic molecules unable to cross the lipid core).",
          keywords: ["both", "transmembrane", "integral", "specific", "hydrophobic"],
        },
        {
          point: "Direction contrast: facilitated diffusion moves solutes down a concentration gradient (high to low), whereas active transport moves solutes against the gradient (low to high).",
          keywords: ["down", "against", "high to low", "low to high"],
        },
        {
          point: "Energy contrast: facilitated diffusion is passive (no ATP), whereas active transport requires ATP hydrolysis.",
          keywords: ["passive", "no atp", "hydrolysis", "requires atp"],
        },
        {
          point: "Protein type / named example contrast: channels/carriers (e.g. aquaporins, ion channels) vs ATP-driven protein pumps (e.g. sodium–potassium pump, mineral ion pump).",
          keywords: ["channel", "pump", "aquaporin", "conformational"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid similarities or differences identified.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States differences only (missing similarity) or confuses energy/gradient direction.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly states both a shared feature and accurate contrasts in gradient direction, ATP usage, and membrane protein mechanisms.",
        },
      ],
      commonError: "Listing only differences when the command term is 'Compare and contrast' — IB mark schemes require at least one explicit similarity.",
    },
    {
      id: "exam-p2-sl-q05",
      kind: "short",
      topicId: "b3-b4-form-organisms-ecosystems",
      guideRef: "gas-exchange-haemoglobin",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Ventilation rate = tidal volume × breathing rate",
      diagram: SVG_SPIROMETER_Q05,
      question:
        "Using the spirometer trace above, calculate the pulmonary ventilation rate of the subject during **exercise** in `dm³ min⁻¹`.",
      answer: {
        type: "number",
        value: 45,
        tolerance: 0.2,
        display: "45 dm³ min⁻¹",
      },
      traps: [
        {
          spec: { type: "number", value: 6, tolerance: 0.2 },
          feedback: "`6.0 dm³ min⁻¹` (`0.50 × 12`) is the RESTING ventilation rate — use the EXERCISE values (`1.80 dm³` and `25 breaths min⁻¹`).",
        },
        {
          spec: { type: "number", value: 21.6, tolerance: 0.2 },
          feedback: "Match the exercise tidal volume (`1.80 dm³`) with the exercise breathing rate (`25 breaths min⁻¹`), not the resting rate (`12`).",
        },
      ],
      hints: [
        "Pulmonary ventilation rate equals tidal volume (`dm³ breath⁻¹`) multiplied by breathing rate (`breaths min⁻¹`).",
        "Read the two exercise values on the right side of the trace: `1.80 dm³` and `25 breaths min⁻¹`.",
      ],
      solution: [
        "Ventilation rate `= tidal volume × breathing frequency`.",
        "During exercise: `1.80 dm³ × 25 breaths min⁻¹ = 45 dm³ min⁻¹` (compared with `0.50 × 12 = 6.0 dm³ min⁻¹` at rest).",
      ],
      commonError: "Accidentally substituting resting tidal volume or resting breathing rate instead of reading the exercise section.",
    },
    {
      id: "exam-p2-sl-q06",
      kind: "written",
      topicId: "b3-b4-form-organisms-ecosystems",
      guideRef: "adaptation-biomes-niches",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Link each structural xerophyte feature directly to reducing water-vapour diffusion gradient",
      marks: 3,
      question:
        "Explain three structural adaptations of xerophytic plants (such as marram grass, *Ammophila arenaria*, or cacti) that minimise transpirational water loss in arid environments.",
      hints: [
        "Consider cuticular barriers (waxy cuticle), stomatal positioning (sunken stomata, rolled leaves, trichomes/hairs), and surface-area reduction (spines).",
        "For EVERY adaptation, explain HOW it lowers evaporation — e.g. trapping humid boundary-layer air to flatten the water-vapour concentration gradient.",
      ],
      modelAnswer:
        "First, a thick waxy cuticle covers the epidermis with waterproof lipids, drastically lowering non-stomatal cuticular evaporation. Second, rolled leaves and sunken stomata lined with tiny epidermal hairs (trichomes) trap a still, humid boundary layer of moist air directly outside stomatal pores, flattening the water-vapour concentration gradient and slowing diffusion out of the leaf. Third, reduced leaf surface area (such as narrow needles or spines in cacti) cuts the total area exposed to hot, dry air and wind while photosynthetic stems store water.",
      markScheme: [
        {
          point: "Thick waxy cuticle creates a waterproof lipid barrier that reduces cuticular evaporation.",
          keywords: ["cuticle", "waterproof", "wax"],
        },
        {
          point: "Sunken stomata, rolled leaves, or trichomes/hairs trap humid still air, reducing the water-vapour concentration gradient.",
          keywords: ["humid", "boundary layer", "sunken", "rolled", "trichome", "hairs"],
        },
        {
          point: "Reduced leaf surface area (needles/spines) lowers total area available for transpiration (or CAM nocturnal stomatal opening / deep extensive roots).",
          keywords: ["surface area", "spines", "needles", "cam", "night"],
        },
      ],
      commonError: "Listing structures ('thick cuticle, sunken stomata, spines') without explaining the physiological mechanism by which each reduces evaporation.",
    },
    {
      id: "exam-p2-sl-q07",
      kind: "short",
      topicId: "c1-c2-interaction-molecules-cells",
      guideRef: "cell-respiration-photosynthesis",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "R_f = pigment distance / solvent front distance (always between 0 and 1)",
      question:
        "On a thin-layer chromatogram separating spinach leaf photosynthetic pigments, the solvent front travelled `12.0 cm` from the origin line, while the chlorophyll *a* spot migrated `7.8 cm` from the same origin line. Calculate the `R_f` value of chlorophyll *a* to 2 decimal places.",
      answer: {
        type: "number",
        value: 0.65,
        tolerance: 0.005,
        display: "0.65",
      },
      traps: [
        {
          spec: { type: "number", value: 1.54, tolerance: 0.02 },
          feedback: "`R_f` can NEVER exceed `1.0` — divide pigment distance (`7.8 cm`) by solvent front distance (`12.0 cm`), not the reverse.",
        },
        {
          spec: { type: "number", value: 0.35, tolerance: 0.01 },
          feedback: "Measure pigment distance from the ORIGIN line (`7.8 cm`), not down from the solvent front (`12.0 − 7.8 = 4.2 cm`).",
        },
      ],
      hints: [
        "Apply `R_f = (distance travelled by pigment) / (distance travelled by solvent front)`.",
        "Divide `7.8` by `12.0`; verify your result is unitless and lies between `0` and `1`.",
      ],
      solution: [
        "`R_f =` {{7.8/12.0}} `= 0.65` (unitless).",
      ],
      commonError: "Inverting the fraction to obtain a value greater than `1.0` or adding `cm` units to the dimensionless `R_f` ratio.",
    },
    {
      id: "exam-p2-sl-q08",
      kind: "written",
      topicId: "c1-c2-interaction-molecules-cells",
      guideRef: "neural-signaling",
      level: "SL",
      difficulty: "core",
      commandTerm: "Outline",
      strategy: "Ca²⁺ influx → exocytosis of ACh → postsynaptic Na⁺ channel opening → acetylcholinesterase breakdown",
      marks: 4,
      question:
        "Outline the sequence of events at a cholinergic synapse from the arrival of an action potential at the presynaptic knob through postsynaptic depolarization and signal termination.",
      hints: [
        "Name the specific ion (`Ca²⁺`) that enters the presynaptic knob and triggers vesicle fusion.",
        "Name the neurotransmitter (acetylcholine) and explain how it crosses the synaptic cleft and opens postsynaptic ion channels.",
        "Explain how the synapse resets so stimulation does not continue indefinitely.",
      ],
      modelAnswer:
        "When an action potential arrives at the presynaptic terminal, voltage-gated calcium (`Ca²⁺`) channels open and `Ca²⁺` ions diffuse inward. Elevated intracellular `Ca²⁺` stimulates synaptic vesicles containing acetylcholine (ACh) to fuse with the presynaptic membrane, releasing ACh into the synaptic cleft by exocytosis. Acetylcholine diffuses across the cleft and binds to complementary ligand-gated `Na⁺` channel receptors on the postsynaptic membrane, causing `Na⁺` influx and depolarizing the postsynaptic neuron toward threshold. Finally, the enzyme acetylcholinesterase hydrolyses ACh into acetate and choline (which are reabsorbed into the presynaptic neuron), closing postsynaptic `Na⁺` channels and terminating the signal.",
      markScheme: [
        {
          point: "Action potential opens presynaptic voltage-gated Ca²⁺ channels, causing Ca²⁺ influx.",
          keywords: ["ca2+", "ca²+", "calcium"],
        },
        {
          point: "Vesicles fuse with presynaptic membrane and release acetylcholine by exocytosis.",
          keywords: ["exocytosis", "vesicle", "acetylcholine", "ach"],
        },
        {
          point: "Neurotransmitter diffuses across cleft and binds postsynaptic receptors, opening Na⁺ channels to depolarize the membrane.",
          keywords: ["receptor", "na+", "na⁺", "sodium", "diffuses"],
        },
        {
          point: "Acetylcholinesterase breaks down/hydrolyses acetylcholine so channels close and signal stops.",
          keywords: ["acetylcholinesterase", "hydrolys", "breaks down", "choline"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid synaptic transmission steps described.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Describes neurotransmitter diffusion broadly, but omits `Ca²⁺`, exocytosis, `Na⁺` channels, or enzymatic breakdown.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Traces the full chronological chain accurately with named ions (`Ca²⁺`, `Na⁺`), acetylcholine, exocytosis, and acetylcholinesterase.",
        },
      ],
      commonError: "Stating that an electrical impulse jumps directly across the chemical synaptic cleft instead of chemical diffusion of acetylcholine.",
    },
    {
      id: "exam-p2-sl-q09",
      kind: "short",
      topicId: "c3-c4-interaction-organisms-ecosystems",
      guideRef: "transfers-energy-matter",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "NPP = GPP − R (autotrophic respiration)",
      question:
        "In a tropical rainforest study plot, gross primary productivity (`GPP`) is `48 500 kJ m⁻² yr⁻¹` and plant autotrophic respiration (`R`) is `29 500 kJ m⁻² yr⁻¹`. Calculate the net primary productivity (`NPP`) available to primary consumers in `kJ m⁻² yr⁻¹`.",
      answer: {
        type: "number",
        value: 19000,
        tolerance: 1,
        display: "19000 kJ m⁻² yr⁻¹",
      },
      traps: [
        {
          spec: { type: "number", value: 78000, tolerance: 1 },
          feedback: "Respiration (`R`) is energy LOST as metabolic heat, so subtract `R` from `GPP` (`NPP = GPP − R`), do not add it.",
        },
      ],
      hints: [
        "Recall the productivity equation `NPP = GPP − R`.",
        "Subtract autotrophic respiration (`29 500`) from gross primary productivity (`48 500`).",
      ],
      solution: [
        "`NPP = GPP − R`.",
        "`NPP = 48 500 − 29 500 = 19 000 kJ m⁻² yr⁻¹`.",
      ],
      commonError: "Adding `GPP` and `R` instead of subtracting respiratory energy loss from gross photosynthesis.",
    },
    {
      id: "exam-p2-sl-q10",
      kind: "written",
      topicId: "c3-c4-interaction-organisms-ecosystems",
      guideRef: "defense-against-disease",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Prokaryotic targets absent in viruses + random mutation/selection for AMR",
      marks: 4,
      question:
        "Explain why antibiotics such as penicillin treat bacterial infections effectively yet fail against viral infections such as influenza, and explain how natural selection leads to antibiotic-resistant bacterial strains.",
      hints: [
        "Which prokaryotic structures or processes (peptidoglycan cell walls, 70S ribosomes, bacterial metabolic enzymes) do antibiotics target that viruses completely lack?",
        "Trace the Darwinian steps in a bacterial population exposed to an antibiotic: pre-existing random mutation (or plasmid transfer) → differential survival → rapid binary fission.",
      ],
      modelAnswer:
        "Antibiotics block prokaryotic-specific structures or metabolic pathways—for example, penicillin inhibits peptidoglycan cell-wall cross-linking and other antibiotics block bacterial 70S ribosomes—whereas viruses are acellular, lack cell walls and their own ribosomes, and hijack eukaryotic host cell machinery that antibiotics do not target. Within a large bacterial population, random DNA mutations or horizontal plasmid transfer occasionally confer resistance to an antibiotic before exposure. When the antibiotic is applied, it acts as a strong selection pressure killing susceptible bacteria while resistant mutants survive, divide rapidly by binary fission, and pass resistance genes to offspring, increasing the frequency of resistant strains across the population.",
      markScheme: [
        {
          point: "Antibiotics target prokaryotic structures/pathways (peptidoglycan cell walls, 70S ribosomes, bacterial enzymes).",
          keywords: ["peptidoglycan", "cell wall", "70s", "prokaryotic"],
        },
        {
          point: "Viruses are acellular / lack cell walls and own metabolism/ribosomes, using eukaryotic host machinery instead.",
          keywords: ["acellular", "lack cell wall", "host", "eukaryotic"],
        },
        {
          point: "Random mutation (or plasmid gene transfer) generates pre-existing antibiotic-resistant variants.",
          keywords: ["random", "mutation", "plasmid", "variant"],
        },
        {
          point: "Antibiotic acts as a selection pressure; resistant bacteria survive and reproduce (binary fission), increasing resistance allele frequency.",
          keywords: ["selection pressure", "survive", "binary fission", "frequency"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid distinction between bacterial and viral targets or resistance mechanism.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States viruses lack cell walls OR describes resistance loosely without random mutation and differential reproduction.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly identifies prokaryotic antibiotic targets vs acellular viral replication AND explains resistance via pre-existing mutation and Darwinian selection.",
        },
      ],
      commonError: "Writing that 'bacteria become immune to antibiotics' or 'the antibiotic causes the bacteria to mutate' (resistance is genetic and arises randomly before selection, and immunity applies to host immune systems, not bacteria).",
    },
    {
      id: "exam-p2-sl-q11",
      kind: "short",
      topicId: "d1-d2-continuity-molecules-cells",
      guideRef: "dna-replication-protein-synthesis",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Triplet codon rule (3 bases per codon) minus 1 terminal stop codon",
      question:
        "A mature spliced eukaryotic mRNA coding sequence is transcribed from `1800` base pairs of exonic coding DNA. Assuming the sequence ends with a single `3`-base stop codon that does not code for an amino acid, calculate the maximum number of amino acids in the translated polypeptide.",
      answer: {
        type: "number",
        value: 599,
        tolerance: 0,
        display: "599 amino acids",
      },
      traps: [
        {
          spec: { type: "number", value: 600, tolerance: 0 },
          feedback: "Subtract `1` for the terminal stop codon (`600 − 1 = 599`), because stop codons signal termination rather than adding an amino acid.",
        },
        {
          spec: { type: "number", value: 299, tolerance: 1 },
          feedback: "`1800` base pairs means `1800` nucleotides along ONE template strand (producing `1800` mRNA bases), not `900`.",
        },
      ],
      hints: [
        "One strand of `1800` base pairs yields an mRNA transcript of `1800` nucleotides.",
        "Divide `1800` bases by `3` bases per codon, then subtract `1` for the stop codon.",
      ],
      solution: [
        "Total codons in `1800`-base mRNA `=` {{1800/3}} `= 600` codons.",
        "Subtract the single non-coding stop codon: `600 − 1 = 599` amino acids.",
      ],
      commonError: "Forgetting to subtract the stop codon or dividing base pairs by `6` instead of `3`.",
    },
    {
      id: "exam-p2-sl-q12",
      kind: "short",
      topicId: "d3-d4-continuity-organisms-ecosystems",
      guideRef: "inheritance-linked-chi",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Deduce carrier parents (Aa × Aa) from affected child (aa), then Punnett grid",
      diagram: SVG_PEDIGREE_Q12,
      question:
        "In the pedigree chart above for an autosomal recessive genetic condition (`a`), unaffected parents `I-1` and `I-2` have an affected daughter `II-2`. Deduce the genotypes of `I-1` and `I-2`, and calculate the **percentage probability** that their next child will be an unaffected **heterozygous carrier (`Aa`)**.",
      answer: {
        type: "number",
        value: 50,
        tolerance: 0.1,
        display: "50%",
      },
      traps: [
        {
          spec: { type: "number", value: 25, tolerance: 0.1 },
          feedback: "`25%` is the chance of an AFFECTED child (`aa`) or homozygous dominant child (`AA`); heterozygous carriers (`Aa`) make up `2` out of `4` (`50%`) of the Punnett grid.",
        },
        {
          spec: { type: "number", value: 75, tolerance: 0.1 },
          feedback: "`75%` is the chance of being unaffected overall (`AA` or `Aa`); the question specifically asks for a heterozygous carrier (`Aa`).",
        },
      ],
      hints: [
        "Because affected daughter `II-2` is `aa`, she must have inherited one `a` allele from each unaffected parent, proving both `I-1` and `I-2` are `Aa`.",
        "Draw the `Aa × Aa` Punnett grid (`AA, Aa, Aa, aa`) and find the percentage of outcomes that are `Aa`.",
      ],
      solution: [
        "Affected daughter `II-2` (`aa`) requires both unaffected parents `I-1` and `I-2` to be heterozygous carriers (`Aa`).",
        "Cross `Aa × Aa` produces `1 AA : 2 Aa : 1 aa`.",
        "Probability that their next child is a carrier (`Aa`) `=` {{2/4}} `× 100 = 50%`.",
      ],
      commonError: "Confusing the `25%` chance of inheriting the recessive condition (`aa`) with the `50%` chance of being a heterozygous carrier (`Aa`).",
    },

    // =============== SECTION B: EXTENDED-RESPONSE QUESTIONS (Q13–Q15) ===============
    {
      id: "exam-p2-sl-q13",
      kind: "written",
      topicId: "d1-d2-continuity-molecules-cells",
      guideRef: "mutations-division-cancer",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Compare and contrast",
      strategy: "Section B (6m): 1–2 similarities + 3–4 structural contrasts + 2 meiosis variation mechanisms",
      marks: 6,
      question:
        "**Section B Extended Response (6 marks):** Compare and contrast mitosis and meiosis in eukaryotic organisms, and explain how **two** distinct events during meiosis generate genetic variation in gametes.",
      hints: [
        "Start with clear similarities: both follow interphase DNA replication and use spindle microtubules to separate chromosomes.",
        "Contrast number of divisions (`1` vs `2`), number of daughter cells (`2` vs `4`), ploidy (`2n → 2n` vs `2n → n`), genetic identity (identical vs unique), and biological roles (growth/repair vs sexual gamete formation).",
        "Explain BOTH crossing over (prophase I, exchange of alleles between non-sister chromatids at chiasmata) AND random orientation of bivalents (metaphase I, `2ⁿ` combinations).",
      ],
      modelAnswer:
        "**Similarities:** Both mitosis and meiosis are preceded by S-phase DNA replication during interphase, involve chromosome condensation, nuclear envelope breakdown, and separation of chromosomes by spindle microtubules attached to centromeres.\n\n**Differences:** Mitosis comprises a single nuclear division producing two diploid (`2n`), genetically identical daughter cells used for growth, tissue repair, and asexual reproduction, without pairing of homologous chromosomes. In contrast, meiosis comprises two successive divisions (meiosis I and II) producing four haploid (`n`), genetically distinct gametes for sexual reproduction, with homologous chromosomes pairing into bivalents during prophase I.\n\n**Generating genetic variation:** First, during **prophase I**, non-sister chromatids of paired homologous chromosomes overlap at chiasmata and perform **crossing over**, exchanging corresponding DNA segments to create recombinant chromatids carrying novel allele combinations on the same chromosome. Second, during **metaphase I**, homologous pairs align along the cell equator via **random orientation** (independent assortment), so maternal and paternal chromosomes segregate independently into daughter cells, yielding {{2^n}} possible chromosome combinations (over `8.3 million` in humans) even before fertilisation.",
      markScheme: [
        {
          point: "States a valid similarity: both follow interphase DNA replication / both use spindle fibres to move chromosomes.",
          keywords: ["both", "interphase", "spindle", "dna replication"],
        },
        {
          point: "Contrasts division count and cell output: 1 division yielding 2 cells (mitosis) vs 2 divisions yielding 4 cells (meiosis).",
          keywords: ["two", "four", "single", "two successive"],
        },
        {
          point: "Contrasts ploidy and identity: diploid (2n) genetically identical somatic cells vs haploid (n) genetically distinct gametes.",
          keywords: ["diploid", "haploid", "identical", "gametes"],
        },
        {
          point: "Explains crossing over in prophase I: exchange of DNA/alleles between non-sister chromatids at chiasmata forming recombinant chromatids.",
          keywords: ["crossing over", "prophase i", "non-sister", "chiasmata", "recombinant"],
        },
        {
          point: "Explains random orientation (independent assortment) of homologous pairs along the equator in metaphase I.",
          keywords: ["random orientation", "independent assortment", "metaphase i", "equator"],
        },
        {
          point: "Links independent segregation of maternal/paternal chromosomes to large combination diversity (2^n gametes).",
          keywords: ["maternal", "paternal", "combinations", "2^n"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant biological comparison or variation mechanism.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Basic comparison of cell count or ploidy, with vague or missing explanation of meiotic variation.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clear similarities and differences plus one well-explained variation mechanism (or both named superficially).",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Comprehensive, accurate comparison (including similarity) and precise molecular explanations of both prophase I crossing over (non-sister chromatids) and metaphase I random orientation.",
          indicators: ["Distinguishes non-sister chromatids from sister chromatids and names exact stages (prophase I, metaphase I)."],
        },
      ],
      commonError: "Writing that crossing over occurs between 'sister chromatids' (which are identical copies) instead of 'non-sister chromatids of homologous chromosomes'.",
    },
    {
      id: "exam-p2-sl-q14",
      kind: "written",
      topicId: "d3-d4-continuity-organisms-ecosystems",
      guideRef: "reproduction-homeostasis",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Explain",
      strategy: "Section B (7m): Negative feedback definition + Insulin pathway + Glucagon pathway + Type 1 vs Type 2 diabetes",
      marks: 7,
      question:
        "**Section B Extended Response (7 marks):** Explain how negative feedback regulates human blood glucose concentration following both a carbohydrate-rich meal and prolonged fasting, and distinguish the underlying physiological causes of Type 1 and Type 2 diabetes.",
      hints: [
        "Name the exact pancreatic islet cells: `β`-cells secrete insulin when glucose rises; `α`-cells secrete glucagon when glucose falls.",
        "Explain the cellular effects on liver and skeletal muscle (glucose transporter channel uptake, glycogenesis vs glycogenolysis) and how this returns blood glucose to the set point (~`5 mmol dm⁻³`).",
        "Contrast Type 1 (autoimmune destruction of pancreatic `β`-cells → insulin deficiency) with Type 2 (insulin resistance / reduced sensitivity of target cell receptors).",
      ],
      modelAnswer:
        "Blood glucose homeostasis operates via **negative feedback**, in which deviations from the set point (~`5 mmol dm⁻³`) trigger hormonal corrections that oppose the change and restore stability.\n\n**After a carbohydrate-rich meal (hyperglycaemia):** Rising blood glucose is detected by **β-cells** in the islets of Langerhans of the pancreas, which secrete **insulin** into the bloodstream. Insulin binds receptors on liver, skeletal muscle, and adipose cells, stimulating insertion of glucose transport channels to increase cellular glucose uptake and activating enzymes that convert glucose into insoluble **glycogen** (**glycogenesis**), lowering blood glucose back to the set point and switching off further insulin release.\n\n**During prolonged fasting (hypoglycaemia):** Falling blood glucose stimulates pancreatic **α-cells** to secrete **glucagon**. Glucagon acts primarily on liver hepatocytes to activate **glycogenolysis** (hydrolysis of stored glycogen into glucose) and release glucose back into the blood, restoring normal concentration.\n\n**Type 1 vs Type 2 diabetes:** **Type 1 diabetes** is an autoimmune disorder (typically early-onset) in which the body's immune system destroys pancreatic β-cells, resulting in little or no insulin production and requiring insulin injections. **Type 2 diabetes** (often associated with genetic predisposition, obesity, and sedentary lifestyle) occurs when target liver and muscle cells develop **insulin resistance**—their receptors fail to respond adequately to insulin even though β-cells initially still produce it—and is managed primarily through diet, exercise, and insulin-sensitising medication.",
      markScheme: [
        {
          point: "Defines negative feedback as a corrective response opposing deviation to restore a set point.",
          keywords: ["negative feedback", "set point", "oppose", "restore"],
        },
        {
          point: "High glucose stimulates pancreatic β-cells (islets of Langerhans) to secrete insulin.",
          keywords: ["β-cells", "beta", "islets of langerhans", "insulin"],
        },
        {
          point: "Insulin increases glucose uptake into liver/muscle cells and promotes conversion of glucose to glycogen (glycogenesis).",
          keywords: ["glycogenesis", "glycogen", "uptake", "channel"],
        },
        {
          point: "Low glucose stimulates pancreatic α-cells to secrete glucagon.",
          keywords: ["α-cells", "alpha", "glucagon"],
        },
        {
          point: "Glucagon triggers liver glycogenolysis (breakdown of glycogen into glucose released into blood).",
          keywords: ["glycogenolysis", "hydrolysis", "breakdown", "hepatocyte"],
        },
        {
          point: "Type 1 diabetes: autoimmune destruction of β-cells causing lack of insulin production.",
          keywords: ["autoimmune", "destroys", "destruction", "lack of insulin", "no insulin"],
        },
        {
          point: "Type 2 diabetes: target cell receptors lose sensitivity / develop insulin resistance (despite insulin presence).",
          keywords: ["resistance", "receptors", "sensitivity", "respond"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No accurate physiological explanation of glucose regulation or diabetes.",
        },
        {
          band: "1–3",
          marks: [1, 3],
          descriptor: "Names insulin and glucagon correctly but confuses α/β cells, glycogen/glucagon spelling, or diabetes mechanisms.",
        },
        {
          band: "4–5",
          marks: [4, 5],
          descriptor: "Explains both hormonal pathways clearly with liver/glycogen links and gives a basic distinction between Type 1 and Type 2 diabetes.",
        },
        {
          band: "6–7",
          marks: [6, 7],
          descriptor: "Integrates negative feedback, exact α/β-cell sites, glycogenesis vs glycogenolysis, and precise autoimmune vs receptor-resistance causes of diabetes.",
          indicators: ["Never confuses the hormone 'glucagon' with the storage polysaccharide 'glycogen'."],
        },
      ],
      commonError: "Confusing 'glucagon' (a peptide hormone) with 'glycogen' (a storage polysaccharide), or swapping α-cells and β-cells.",
    },
    {
      id: "exam-p2-sl-q15",
      kind: "written",
      topicId: "d3-d4-continuity-organisms-ecosystems",
      guideRef: "stability-climate-change",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Discuss",
      strategy: "Section B (8m): 4 ecological impacts + positive feedback + balanced evaluation of 2 sequestration strategies",
      marks: 8,
      question:
        "**Section B Extended Response (8 marks):** Discuss the ecological consequences of anthropogenic climate change on marine and terrestrial ecosystems, and evaluate **two** nature-based carbon-sequestration strategies (such as reforestation/afforestation and peatland restoration) for mitigating atmospheric `CO₂` rise.",
      hints: [
        "Cover marine impacts explicitly: warming causes coral bleaching (expulsion of photosynthetic *Symbiodinium* zooxanthellae), while dissolved `CO₂` forms carbonic acid (`H₂CO₃`), lowering ocean pH and carbonate ions needed for calcifying shells/reefs.",
        "Cover terrestrial impacts: poleward/upslope range shifts, phenological mismatch (e.g. caterpillar peak shifting earlier than migratory bird breeding), and positive feedbacks (permafrost thawing releasing `CH₄`, ice–albedo decline).",
        "Evaluate BOTH reforestation/afforestation AND peatland restoration by weighing their carbon-storage strengths against realistic limitations (land competition, monoculture biodiversity loss, wildfire risk, slow peat accumulation).",
      ],
      modelAnswer:
        "**Marine impacts:** Rising sea-surface temperatures stress reef-building corals, triggering **coral bleaching** in which polyps expel their mutualistic photosynthetic zooxanthellae algae, depriving corals of fixed carbon and leading to reef collapse. Simultaneously, increased atmospheric `CO₂` dissolves into seawater to form carbonic acid, lowering ocean pH (**ocean acidification**) and reducing carbonate ion (`CO₃²⁻`) availability needed by corals, molluscs, and calcifying plankton to build `CaCO₃` skeletons.\n\n**Terrestrial impacts & feedbacks:** Warming drives **poleward and upslope range shifts** as temperate species expand into alpine/polar zones, squeezing cold-adapted endemics toward extinction. Differential warming cues also cause **phenological mismatch**—for example, spring insects or plants emerging earlier than migratory birds arrive to breed, reducing chick survival. Positive feedbacks amplify warming further, including thawing Arctic **permafrost** releasing potent methane (`CH₄`) and melting ice lowering surface **albedo**.\n\n**Evaluating sequestration strategies:**\n1. **Reforestation / afforestation:** Growing native forest trees absorbs `CO₂` via photosynthesis into long-lived woody biomass and soils while restoring habitats. However, planting non-native monocultures harms biodiversity, trees take decades to mature, land competes with food production, and intensifying droughts/wildfires can abruptly re-release stored carbon.\n2. **Peatland restoration (rewetting drained bogs):** Waterlogged, anaerobic, acidic peatlands inhibit saprotrophic decomposition, locking vast carbon stores beneath the ground for millennia and immediately halting `CO₂` emissions from oxidising drained peat. However, newly rewetted bogs can temporarily emit methane (`CH₄`), restoration requires reversing drainage infrastructure across agricultural land, and new peat accumulates very slowly. Consequently, both nature-based strategies are valuable complements but cannot substitute for rapid fossil-fuel emission cuts.",
      markScheme: [
        {
          point: "Coral bleaching: elevated ocean temperature causes corals to expel symbiotic zooxanthellae algae, causing starvation/mortality.",
          keywords: ["bleaching", "zooxanthellae", "expel"],
        },
        {
          point: "Ocean acidification: dissolved CO₂ forms carbonic acid, lowering pH and carbonate ions required for CaCO₃ calcification.",
          keywords: ["acidification", "carbonic acid", "carbonate", "calcif"],
        },
        {
          point: "Terrestrial range shifts (poleward or higher altitude) displacing cold-adapted/alpine species.",
          keywords: ["poleward", "upslope", "altitude", "range shift"],
        },
        {
          point: "Phenological mismatch: altered seasonal timing decouples interacting species (e.g. pollinators/plants or migratory birds/prey).",
          keywords: ["phenological", "mismatch", "timing", "migratory"],
        },
        {
          point: "Positive climate feedback explained (e.g. permafrost thaw releasing methane CH₄ OR ice–albedo decrease).",
          keywords: ["permafrost", "methane", "albedo", "positive feedback"],
        },
        {
          point: "Reforestation/afforestation strength (photosynthetic woody biomass sink) balanced with a limitation (monoculture, wildfire risk, land competition, slow growth).",
          keywords: ["woody", "monoculture", "wildfire", "land"],
        },
        {
          point: "Peatland restoration mechanism: rewetting restores anaerobic/acidic waterlogged conditions suppressing saprotrophic decay.",
          keywords: ["waterlogged", "anaerobic", "saprotroph", "rewetting"],
        },
        {
          point: "Peatland limitation (slow accumulation, temporary CH₄ release, land-use conflict) or reasoned overarching conclusion that sequestration must pair with fossil-fuel cuts.",
          keywords: ["slowly", "fossil", "drained", "complement", "substitute"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No accurate ecological impacts or mitigation evaluation presented.",
        },
        {
          band: "1–3",
          marks: [1, 3],
          descriptor: "Describes general warming effects vaguely without molecular/ecological mechanisms or balanced evaluation.",
        },
        {
          band: "4–6",
          marks: [4, 6],
          descriptor: "Explains several marine and terrestrial consequences clearly and outlines two sequestration strategies with partial strengths/limitations.",
        },
        {
          band: "7–8",
          marks: [7, 8],
          descriptor: "Thoroughly integrates marine (bleaching + acidification) and terrestrial (range shifts, phenological mismatch, positive feedbacks) mechanisms with a balanced, critical evaluation of both reforestation and peatland restoration.",
          indicators: ["Explicitly distinguishes warming-induced bleaching from CO₂-driven acidification and weighs trade-offs for both carbon sinks."],
        },
      ],
      commonError: "Conflating coral bleaching (primarily heat-stress expulsion of zooxanthellae) with ocean acidification (dissolved `CO₂` reducing `CO₃²⁻` for calcification), or listing only benefits of tree planting without evaluating limitations.",
    },
  ],
};
