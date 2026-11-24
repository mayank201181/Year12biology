import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "How can a 100-metre giant redwood haul tonnes of water into the sky without a single mechanical pump, why do two tiny metres of DNA fold neatly inside a 6 μm human nucleus, and how did an ancient engulfed bacterium end up powering every heartbeat you take? Welcome to Theme A (1–2) — where polar water molecules, universal nucleic acids, nanoscale electron beams, deep-sea vents, and hijacking viruses expose both the astonishing unity and wild diversity of life.",
  didYouKnow: [
    "Every diploid human cell holds roughly **2 metres** of linear DNA (~{{6 * 10^9}} base pairs) coiled around ~30 million **nucleosome** beads inside a nucleus only ~{{6}} μm wide! Stretched end-to-end, all the DNA in your ~{{3 * 10^{13}}} nucleated cells would span more than **100 round trips** between Earth and the Sun.",
    "Because water's **thermal conductivity** is ~25 times higher than air's, an unprotected human loses heat fast enough in 4 °C seawater to develop hypothermia in under 30 minutes — yet Arctic **ringed seals** (*Pusa hispida*) swim comfortably for hours insulated by blubber up to 5 cm thick.",
    "The catalytic core of every ribosome in every living species — the peptidyl transferase site that forges every peptide bond in your body — is made entirely of **ribosomal RNA (rRNA)**, not protein! You carry a 4-billion-year-old **RNA World ribozyme** inside every cell.",
    "The giant marine green alga ***Acetabularia*** (mermaid's wineglass) grows up to **10 cm tall** with a root-like rhizoid, stalk, and umbrella cap — yet the entire organism is **one single eukaryotic cell** controlled by a single nucleus in its base!",
    "When **HIV** replicates inside an untreated host, error-prone reverse transcriptase generates roughly {{10^9}}–{{10^{10}}} virions per day — meaning every possible single-point mutation across HIV's 9700-nucleotide genome arises multiple times *every single day* inside one patient.",
    "In 2003, biologists discovered **Mimivirus**, a giant DNA virus measuring **750 nm** across — larger than some parasitic bacteria and visible under a high-power light microscope — reigniting the debate over the **regressive origin** of giant viruses!",
  ],
  activities: [
    {
      title: "Surface Tension & Hydrogen-Bond Breakdown Coin Lab",
      emoji: "💧",
      materials: [
        "A clean, flat coin (e.g. a Singapore 50-cent or $1 coin) and a plastic dropper / pipette",
        "Two small cups: one with plain tap water, one with tap water plus 2 drops of washing-up liquid",
        "A paper towel and ruler to measure the coin diameter",
      ],
      steps: [
        "Dry the coin completely and lay it flat on a level table. Carefully count how many single drops of **plain water** fit on the coin before the bulging dome finally spills over the rim.",
        "Sketch the curved dome from eye level right before it bursts — notice how **cohesion** (water–water H-bonds) pulls the dome inward while **adhesion** anchors the rim to the metal.",
        "Dry the coin, then repeat the exact same drop count using **soapy water**. Amphipathic soap molecules crowd the air–water interface and disrupt the hydrogen-bond network.",
        "Run 3 trials for each liquid and calculate the mean drop count and percentage drop reduction caused by surfactant disruption.",
      ],
      maths:
        "Measure the coin radius {{r}} in cm, calculate surface area {{A = pi r^2}}, and express cohesion capacity as **drops per cm²**. Compare the ratio {{N_{water} / N_{soap}}} — plain water typically holds **2–3× more drops** before collapsing!",
    },
    {
      title: "Kitchen Strawberry DNA Extraction (Membranes, Charge & Precipitation)",
      emoji: "🍓",
      materials: [
        "2 ripe strawberries (octoploid — 8 copies of every chromosome!), zip-lock bag, coffee filter/strainer",
        "Extraction buffer: 100 mL tap water + 1 teaspoon dishwashing detergent + 1/2 teaspoon table salt (NaCl)",
        "Ice-cold rubbing alcohol (70–99% ethanol or isopropanol, chilled in a freezer for 30 min) and a clear glass",
      ],
      steps: [
        "Mash the strawberries thoroughly inside the sealed zip-lock bag for 2 minutes to mechanically break the **cellulose cell walls**.",
        "Add 2 tablespoons of extraction buffer and squish gently (avoid excess foam) for 1 minute: **detergent** dissolves amphipathic phospholipid plasma and nuclear membranes, while **{{Na^+}} ions** shield the negatively charged DNA phosphate groups so strands can clump together.",
        "Filter the pink mash through a coffee filter into a clear glass to remove solid cell debris.",
        "Slowly tilt the glass and pour an equal volume of **ice-cold alcohol** down the side so it forms a clear layer on top. Watch cloudy white threads of **precipitated DNA** rise at the interface (DNA is polar and insoluble in less-polar cold alcohol!).",
      ],
      maths:
        "Strawberries are octoploid ({{8n = 56}} chromosomes per nucleus), giving **4× more DNA per cell** than diploid human cells! If each cell yields ~{{2.0 * 10^(-12)}} g of DNA, a visible {{10}} mg clump represents roughly {{(10 * 10^(-3)) / (2.0 * 10^(-12)) = 5 * 10^9}} lysed strawberry cells.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Logarithmic Scale of Biology (0.1 nm to 10 cm) & Microscope Resolution Limits",
      caption:
        "Every step on this logarithmic ruler multiplies actual size by 10×. Visible light microscopes hit a physical diffraction wall at ~200 nm — explaining why viruses, ribosomes, and DNA require TEM or cryo-EM.",
      svg: `<svg viewBox="0 0 640 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logarithmic scale of biological sizes from 0.1 nanometres to 10 centimetres showing water molecules, DNA diameter, ribosomes, viruses, bacteria, eukaryotic cells, and resolution cutoffs for TEM, SEM, light microscopes, and the unaided eye.">
  <rect x="0" y="0" width="640" height="225" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="320" y="24" font-size="13.5" font-weight="700" text-anchor="middle" fill="#0f172a">Logarithmic Scale of Life &amp; Microscope Resolution Cutoffs</text>
  <!-- Resolution bands -->
  <rect x="36" y="40" width="568" height="24" rx="5" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.2"/>
  <text x="210" y="56" font-size="10.5" font-weight="700" text-anchor="middle" fill="#5b21b6">TEM / Cryo-EM (≥ 0.1–0.2 nm)</text>
  <rect x="260" y="68" width="344" height="22" rx="5" fill="#dbeafe" stroke="#2563eb" stroke-width="1.2"/>
  <text x="432" y="83" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1d4ed8">Light Microscope (≥ 200 nm)</text>
  <rect x="444" y="94" width="160" height="20" rx="5" fill="#dcfce7" stroke="#16a34a" stroke-width="1.2"/>
  <text x="524" y="108" font-size="10" font-weight="700" text-anchor="middle" fill="#166534">Unaided Eye (≥ 100 μm)</text>
  <!-- Main axis line: x=36 (0.1 nm = 10^-10 m) to x=604 (10 cm = 10^-1 m) => 9 decades => 63.1 px/decade -->
  <line x1="36" y1="142" x2="604" y2="142" stroke="#0f172a" stroke-width="2.5"/>
  <!-- Decade ticks -->
  <line x1="36" y1="135" x2="36" y2="149" stroke="#0f172a" stroke-width="2"/>
  <text x="36" y="164" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">0.1 nm</text>
  <line x1="99" y1="135" x2="99" y2="149" stroke="#0f172a" stroke-width="2"/>
  <text x="99" y="164" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">1 nm</text>
  <line x1="162" y1="135" x2="162" y2="149" stroke="#0f172a" stroke-width="2"/>
  <text x="162" y="164" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">10 nm</text>
  <line x1="225" y1="135" x2="225" y2="149" stroke="#0f172a" stroke-width="2"/>
  <text x="225" y="164" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">100 nm</text>
  <line x1="288" y1="135" x2="288" y2="149" stroke="#0f172a" stroke-width="2"/>
  <text x="288" y="164" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">1 μm</text>
  <line x1="351" y1="135" x2="351" y2="149" stroke="#0f172a" stroke-width="2"/>
  <text x="351" y="164" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">10 μm</text>
  <line x1="414" y1="135" x2="414" y2="149" stroke="#0f172a" stroke-width="2"/>
  <text x="414" y="164" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">100 μm</text>
  <line x1="477" y1="135" x2="477" y2="149" stroke="#0f172a" stroke-width="2"/>
  <text x="477" y="164" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">1 mm</text>
  <line x1="540" y1="135" x2="540" y2="149" stroke="#0f172a" stroke-width="2"/>
  <text x="540" y="164" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">1 cm</text>
  <line x1="604" y1="135" x2="604" y2="149" stroke="#0f172a" stroke-width="2"/>
  <text x="604" y="164" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">10 cm</text>
  <!-- Biological markers -->
  <circle cx="65" cy="142" r="5" fill="#0ea5e9"/><text x="65" y="184" font-size="9.2" font-weight="600" text-anchor="middle" fill="#0369a1">H₂O</text><text x="65" y="196" font-size="8.5" text-anchor="middle" fill="#64748b">0.3 nm</text>
  <circle cx="118" cy="142" r="5" fill="#6366f1"/><text x="118" y="184" font-size="9.2" font-weight="600" text-anchor="middle" fill="#4338ca">DNA</text><text x="118" y="196" font-size="8.5" text-anchor="middle" fill="#64748b">2 nm</text>
  <circle cx="187" cy="142" r="5" fill="#8b5cf6"/><text x="187" y="184" font-size="9.2" font-weight="600" text-anchor="middle" fill="#6d28d9">Ribosome</text><text x="187" y="196" font-size="8.5" text-anchor="middle" fill="#64748b">25 nm</text>
  <circle cx="225" cy="142" r="5" fill="#dc2626"/><text x="225" y="210" font-size="9.2" font-weight="600" text-anchor="middle" fill="#b91c1c">Virus (100 nm)</text>
  <circle cx="307" cy="142" r="5" fill="#d97706"/><text x="307" y="184" font-size="9.2" font-weight="600" text-anchor="middle" fill="#b45309">E. coli / Mito</text><text x="307" y="196" font-size="8.5" text-anchor="middle" fill="#64748b">2 μm</text>
  <circle cx="385" cy="142" r="5" fill="#16a34a"/><text x="385" y="184" font-size="9.2" font-weight="600" text-anchor="middle" fill="#15803d">Plant Cell</text><text x="385" y="196" font-size="8.5" text-anchor="middle" fill="#64748b">40 μm</text>
  <circle cx="572" cy="142" r="5" fill="#0d9488"/><text x="562" y="184" font-size="9.2" font-weight="600" text-anchor="middle" fill="#0f766e">Acetabularia</text><text x="562" y="196" font-size="8.5" text-anchor="middle" fill="#64748b">5 cm (1 cell!)</text>
  <!-- 200 nm dashed vertical cutoff -->
  <line x1="244" y1="68" x2="244" y2="142" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3"/>
</svg>`,
    },
    {
      title: "Hershey–Chase Blender Experiment (1952) [HL]: ³²P DNA vs ³⁵S Protein",
      caption:
        "Parallel radioisotope tracking cleanly separated viral DNA (phosphorus-rich, entering E. coli in the pellet) from viral protein coats (sulfur-rich, sheared into the supernatant).",
      svg: `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart of the 1952 Hershey-Chase experiment contrasting sulfur-35 labelled phage proteins remaining in the supernatant with phosphorus-32 labelled phage DNA entering E. coli cells in the centrifuged pellet.">
  <rect x="0" y="0" width="640" height="220" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="320" y="24" font-size="13.5" font-weight="700" text-anchor="middle" fill="#0f172a">Hershey–Chase Experiment (1952): Proving DNA Is Genetic Material [HL]</text>
  <!-- Row 1: 35S Protein track -->
  <rect x="16" y="42" width="136" height="68" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="84" y="62" font-size="11" font-weight="700" text-anchor="middle" fill="#92400e">Batch 1: ³⁵S Phage</text>
  <text x="84" y="80" font-size="9.8" text-anchor="middle" fill="#78350f">Labels Protein Coat</text>
  <text x="84" y="96" font-size="9.2" text-anchor="middle" fill="#78350f">(Sulfur in amino acids)</text>
  <path d="M 154 76 L 176 76" stroke="#475569" stroke-width="2"/><polygon points="176,71 184,76 176,81" fill="#475569"/>
  <rect x="186" y="42" width="132" height="68" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.3"/>
  <text x="252" y="64" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0f172a">Infect + Blend</text>
  <text x="252" y="82" font-size="9.5" text-anchor="middle" fill="#475569">Shears empty ³⁵S</text>
  <text x="252" y="96" font-size="9.5" text-anchor="middle" fill="#475569">capsids off E. coli</text>
  <path d="M 320 76 L 342 76" stroke="#475569" stroke-width="2"/><polygon points="342,71 350,76 342,81" fill="#475569"/>
  <rect x="352" y="42" width="272" height="68" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
  <text x="488" y="62" font-size="11" font-weight="700" text-anchor="middle" fill="#92400e">Centrifuge → ³⁵S in SUPERNATANT</text>
  <text x="488" y="80" font-size="9.8" text-anchor="middle" fill="#334155">Pellet (bacteria) is non-radioactive</text>
  <text x="488" y="97" font-size="9.8" font-weight="700" text-anchor="middle" fill="#b45309">→ Protein does NOT enter host cell</text>

  <!-- Row 2: 32P DNA track -->
  <rect x="16" y="124" width="136" height="68" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="84" y="144" font-size="11" font-weight="700" text-anchor="middle" fill="#1e40af">Batch 2: ³²P Phage</text>
  <text x="84" y="162" font-size="9.8" text-anchor="middle" fill="#1e3a8a">Labels Viral DNA</text>
  <text x="84" y="178" font-size="9.2" text-anchor="middle" fill="#1e3a8a">(Phosphate backbone)</text>
  <path d="M 154 158 L 176 158" stroke="#475569" stroke-width="2"/><polygon points="176,153 184,158 176,163" fill="#475569"/>
  <rect x="186" y="124" width="132" height="68" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.3"/>
  <text x="252" y="146" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0f172a">Infect + Blend</text>
  <text x="252" y="164" font-size="9.5" text-anchor="middle" fill="#475569">³²P DNA injected</text>
  <text x="252" y="178" font-size="9.5" text-anchor="middle" fill="#475569">inside E. coli cells</text>
  <path d="M 320 158 L 342 158" stroke="#475569" stroke-width="2"/><polygon points="342,153 350,158 342,163" fill="#475569"/>
  <rect x="352" y="124" width="272" height="68" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
  <text x="488" y="144" font-size="11" font-weight="700" text-anchor="middle" fill="#1e40af">Centrifuge → ³²P in PELLET (Cells)</text>
  <text x="488" y="162" font-size="9.8" text-anchor="middle" fill="#334155">³²P passed on to progeny bacteriophages</text>
  <text x="488" y="179" font-size="9.8" font-weight="700" text-anchor="middle" fill="#1d4ed8">→ DNA IS the hereditary material!</text>
  <text x="320" y="210" font-size="10" font-weight="600" text-anchor="middle" fill="#475569">Memory Anchor: ³⁵S → Shell Protein → Supernatant  |  ³²P → Phage DNA → Pellet</text>
</svg>`,
    },
  ],
  history: {
    title: "Fifteen Rejections and a Revolution: Lynn Margulis & Endosymbiosis",
    story:
      "In 1966, a young American biologist named **Lynn Margulis** submitted a radical manuscript proposing that eukaryotic **mitochondria** and **chloroplasts** were once free-living bacteria engulfed by ancestral cells — turning evolutionary cooperation into the engine of complex life. Leading biology journals rejected her paper **fifteen times in a row**; one reviewer dismissed it outright as 'utter nonsense'. Yet Margulis persisted until the *Journal of Theoretical Biology* published it in 1967. Within fifteen years, rapid advances in electron microscopy and DNA sequencing vindicated her completely: mitochondrial and chloroplast genomes turned out to be **circular naked DNA** closely related to α-proteobacteria and cyanobacteria, translated on bacterial **70S ribosomes**! Like Erwin Chargaff dismantling the tetranucleotide dogma and Rosalind Franklin's sharp X-ray diffraction Photo 51 unlocking DNA's antiparallel helix, Margulis proved how stubborn empirical evidence eventually overturns even the most entrenched scientific orthodoxy.",
  },
};
