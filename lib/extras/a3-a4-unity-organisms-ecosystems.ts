import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Step onto the main trail of Singapore's **Bukit Timah Nature Reserve** — just 163 hectares of primary dipterocarp rainforest — and you are standing among **more native tree species than grow across the entire continent of North America**. Yet look inside the DNA of every tree, beetle, pangolin, and human walking that trail, and you will uncover the exact same four DNA bases, homologous chromosomes, and branching molecular family tree linking every living organism back to a single ancestor.",
  didYouKnow: [
    "The tiny adder's-tongue fern (*Ophioglossum reticulatum*) packs an astonishing **{{2n = 1260}}** chromosomes into every somatic cell — over 27 times more than a human ({{2n = 46}}) — thanks to repeated ancient rounds of plant polyploidy!",
    "The rare Japanese canopy flower *Paris japonica* holds one of the largest known eukaryotic genomes at roughly **149 billion base pairs (149 Gbp)** — almost 50 times larger than the human genome (3.1 Gbp) — proving genome size does not equal organismal complexity.",
    "Humans and chimpanzees share ~98.8% of aligned DNA sequence, and **human chromosome 2** still carries a fossilised molecular scar right in its middle (band 2q13): head-to-head telomere repeats and a second inactivated centromere left over when ancestral ape chromosomes 2A and 2B fused end-to-end.",
    "When botanists sequenced chloroplast DNA in the late 1990s, over **80% of the genera** in the classic figwort family (*Scrophulariaceae*) — including foxgloves (*Digitalis*) and snapdragons (*Antirrhinum*) — were expelled into other plant families because their shared flower shapes turned out to be convergent analogies.",
    "Because wet equatorial rainforest trees such as Southeast Asian dipterocarps produce **recalcitrant seeds** that die when dried and frozen at −18 °C, frozen vaults like Svalbard cannot back them up — making intact **in-situ** reserves irreplaceable.",
    "The Critically Endangered **Sunda pangolin (*Manis javanica*)** ranks among the world's top **EDGE** mammals because pangolins are the sole surviving family in order Pholidota; Singapore's **Eco-Link@BKE** vegetated bridge over the Bukit Timah Expressway was built specifically to restore gene flow across fragmented forest reserves.",
  ],
  activities: [
    {
      title: "Two-Cup Biodiversity Lab: Evenness vs Dominance",
      emoji: "🥣",
      materials: [
        "1 bag of mixed dried beans, coloured beads, or wrapped sweets (5 distinct types)",
        "2 paper cups labelled 'Primary Forest (Plot A)' and 'Plantation Edge (Plot B)'",
        "Calculator and notebook",
      ],
      steps: [
        "Fill **Plot A** with 20 items total spread evenly across 5 'species' (4, 4, 4, 4, 4).",
        "Fill **Plot B** with 20 items total across the same 5 'species', heavily dominated by one invasive type (16, 1, 1, 1, 1).",
        "Without looking, draw two items in a row without replacement from Plot A, record whether they match, replace them, and repeat 20 times. Repeat 20 trials for Plot B.",
        "Calculate the exact Simpson's reciprocal diversity index {{D = (N(N - 1)) / (Σ n(n - 1))}} for both plots and compare it with your experimental matching frequency!",
      ],
      maths:
        "Both cups have {{S = 5}} and {{N = 20}} ({{N(N - 1) = 380}}). Plot A gives {{Σ n(n - 1) = 5 * 12 = 60}}, so {{D = 380 / 60 = 6.33}}. Plot B gives {{Σ n(n - 1) = 16 * 15 = 240}}, so {{D = 380 / 240 = 1.58}} — matching how frequently you drew two identical beads from Plot B ({{240 / 380 = 63%}}) vs Plot A ({{60 / 380 = 16%}})!",
    },
    {
      title: "Cladistics & Node-Rotation Challenge with Everyday Fasteners",
      emoji: "🔩",
      materials: [
        "6 distinct small hardware/desk items: wooden toothpick (outgroup), plain metal nail, flathead screw, Phillips-head screw, metal bolt with hex head, and bolt with hex head + washer",
        "Sticky notes and pen",
      ],
      steps: [
        "Build a presence/absence character table of shared derived traits (synapomorphies): metal body, helical thread, slotted/cross drive head, hexagonal head, detachable washer.",
        "Sketch the most parsimonious rooted cladogram placing the wooden toothpick as the outgroup and marking each derived trait as a tick mark on its branch.",
        "Test **node rotation**: spin the two branches at any internal node 180° and verify that every pair of items still shares the exact same most recent common node.",
        "Now add a plastic thumbtack (analogous sharp point, completely different material) and discuss why convergent traits break morphological trees.",
      ],
      maths:
        "A strictly bifurcating rooted tree of {{k = 6}} items always contains {{k - 1 = 5}} internal branching nodes, and rotating any of those 5 nodes generates {{2^5 = 32}} visually different drawings of the **exact same** cladogram!",
    },
    {
      title: "Campus Leaf Dichotomous Key & Cryptic-Species Stress Test",
      emoji: "🍃",
      materials: [
        "6 fallen leaves from different trees or shrubs around school or a park",
        "Ruler and hand lens (or phone macro camera)",
      ],
      steps: [
        "List measurable, objective morphological traits only: parallel vs net venation, simple vs compound blade, serrated vs smooth margin, petiole length (> 2 cm vs ≤ 2 cm), and drip-tip present vs absent.",
        "Draft a numbered dichotomous key using paired contrasting statements ('couplets') so any classmate can identify all 6 leaves unambiguously.",
        "Swap keys with a partner and test whether a torn half-leaf or two closely related *Ficus* leaves break the key — illustrating why ecologists turn to **DNA barcoding (*rbcL*/*matK*)** when morphology is damaged or cryptic.",
      ],
      maths:
        "To separate {{S}} species uniquely, a dichotomous key requires exactly {{S - 1}} decision couplets — for 6 leaf species, exactly 5 couplets separate every leaf cleanly.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Carl Woese's Three Domains of Life (16S / 18S rRNA Phylogeny)",
      svg: `<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three Domains cladogram from LUCA showing Bacteria branching first and Archaea sharing a more recent common ancestor with Eukarya">
  <rect x="0" y="0" width="640" height="245" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">Three Domains Tree of Life (rRNA Sequence Phylogeny — HL)</text>

  <!-- Tree lines -->
  <line x1="150" y1="216" x2="150" y2="184" stroke="#0f172a" stroke-width="3"/>
  <!-- Bacteria branch -->
  <line x1="150" y1="184" x2="96" y2="86" stroke="#2563eb" stroke-width="3"/>
  <!-- Archaea + Eukarya shared stem -->
  <line x1="150" y1="184" x2="310" y2="138" stroke="#0f172a" stroke-width="3"/>
  <!-- Archaea branch -->
  <line x1="310" y1="138" x2="310" y2="86" stroke="#d97706" stroke-width="3"/>
  <!-- Eukarya branch -->
  <line x1="310" y1="138" x2="520" y2="86" stroke="#059669" stroke-width="3"/>

  <!-- Nodes -->
  <circle cx="150" cy="184" r="6" fill="#0f172a"/>
  <text x="150" y="232" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">LUCA (Last Universal Common Ancestor)</text>

  <circle cx="310" cy="138" r="6" fill="#059669"/>
  <text x="390" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="#047857">MRCA of Archaea &amp; Eukarya</text>
  <text x="390" y="169" text-anchor="middle" font-size="9.2" fill="#475569">(histones, introns, similar RNA pol.)</text>

  <!-- Domain Cards -->
  <rect x="20" y="38" width="160" height="48" rx="9" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="100" y="56" text-anchor="middle" font-size="12" font-weight="800" fill="#1e3a8a">BACTERIA</text>
  <text x="100" y="70" text-anchor="middle" font-size="9.2" fill="#1d4ed8">70S · Peptidoglycan wall</text>
  <text x="100" y="81" text-anchor="middle" font-size="9.2" fill="#1d4ed8">Ester unbranched lipids</text>

  <rect x="225" y="38" width="174" height="48" rx="9" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="312" y="56" text-anchor="middle" font-size="12" font-weight="800" fill="#92400e">ARCHAEA</text>
  <text x="312" y="70" text-anchor="middle" font-size="9.2" fill="#b45309">70S · No peptidoglycan</text>
  <text x="312" y="81" text-anchor="middle" font-size="9.2" fill="#b45309">Ether branched lipids</text>

  <rect x="436" y="38" width="184" height="48" rx="9" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
  <text x="528" y="56" text-anchor="middle" font-size="12" font-weight="800" fill="#065f46">EUKARYA</text>
  <text x="528" y="70" text-anchor="middle" font-size="9.2" fill="#047857">80S · Nucleus &amp; organelles</text>
  <text x="528" y="81" text-anchor="middle" font-size="9.2" fill="#047857">Ester lipids · Histone DNA</text>
</svg>`,
      caption:
        "Even though Bacteria and Archaea both lack a nucleus, 16S/18S rRNA phylogenetics proves Archaea and Eukarya share a more recent common ancestor than either shares with Bacteria.",
    },
    {
      title: "Homologous Pentadactyl Forelimbs vs Analogous Insect Wing",
      svg: `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram contrasting homologous pentadactyl limb bones in human, bat, and dolphin against an analogous chitinous insect wing">
  <rect x="0" y="0" width="640" height="230" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="235" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#1e3a8a">Homologous Structures (Divergent Evolution)</text>
  <text x="545" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#991b1b">Analogous (Convergent)</text>
  <line x1="454" y1="14" x2="454" y2="216" stroke="#cbd5e1" stroke-dasharray="4 4" stroke-width="1.5"/>

  <!-- Legend -->
  <g transform="translate(24,196)">
    <rect x="0" y="0" width="12" height="10" rx="2" fill="#2563eb"/>
    <text x="16" y="9" font-size="9.5" fill="#334155">Humerus</text>
    <rect x="76" y="0" width="12" height="10" rx="2" fill="#0ea5e9"/>
    <text x="92" y="9" font-size="9.5" fill="#334155">Radius / Ulna</text>
    <rect x="174" y="0" width="12" height="10" rx="2" fill="#f59e0b"/>
    <text x="190" y="9" font-size="9.5" fill="#334155">Carpals</text>
    <rect x="242" y="0" width="12" height="10" rx="2" fill="#10b981"/>
    <text x="258" y="9" font-size="9.5" fill="#334155">Metacarpals &amp; 5 Digits</text>
  </g>

  <!-- Human arm -->
  <g transform="translate(36,42)">
    <rect x="30" y="4" width="16" height="44" rx="6" fill="#2563eb"/>
    <rect x="24" y="52" width="10" height="42" rx="4" fill="#0ea5e9"/>
    <rect x="40" y="52" width="10" height="42" rx="4" fill="#0ea5e9"/>
    <rect x="24" y="98" width="26" height="12" rx="4" fill="#f59e0b"/>
    <line x1="22" y1="112" x2="14" y2="132" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
    <line x1="30" y1="112" x2="27" y2="138" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
    <line x1="37" y1="112" x2="37" y2="140" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
    <line x1="44" y1="112" x2="47" y2="138" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
    <line x1="51" y1="112" x2="57" y2="133" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
    <text x="38" y="154" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Human (Grasp)</text>
  </g>

  <!-- Bat wing -->
  <g transform="translate(166,42)">
    <path d="M 16 14 L 52 54 L 116 32 L 122 104 L 84 128 L 46 118 Z" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.2"/>
    <line x1="16" y1="14" x2="38" y2="48" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/>
    <line x1="38" y1="48" x2="64" y2="38" stroke="#0ea5e9" stroke-width="6" stroke-linecap="round"/>
    <circle cx="66" cy="38" r="6" fill="#f59e0b"/>
    <line x1="68" y1="36" x2="64" y2="22" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
    <line x1="70" y1="38" x2="116" y2="32" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
    <line x1="70" y1="40" x2="120" y2="66" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
    <line x1="68" y1="42" x2="108" y2="104" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
    <line x1="66" y1="43" x2="82" y2="122" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
    <text x="68" y="154" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Bat (Flight)</text>
  </g>

  <!-- Dolphin flipper -->
  <g transform="translate(328,42)">
    <path d="M 24 8 Q 76 16 82 90 Q 66 138 36 138 Q 10 110 18 16 Z" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.4"/>
    <rect x="34" y="16" width="20" height="24" rx="6" fill="#2563eb"/>
    <rect x="28" y="44" width="14" height="20" rx="4" fill="#0ea5e9"/>
    <rect x="46" y="44" width="14" height="20" rx="4" fill="#0ea5e9"/>
    <rect x="28" y="68" width="32" height="12" rx="4" fill="#f59e0b"/>
    <line x1="28" y1="84" x2="22" y2="104" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
    <line x1="36" y1="84" x2="36" y2="124" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
    <line x1="45" y1="84" x2="48" y2="126" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
    <line x1="54" y1="84" x2="60" y2="114" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
    <line x1="60" y1="84" x2="68" y2="98" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
    <text x="48" y="154" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Dolphin (Swim)</text>
  </g>

  <!-- Insect wing -->
  <g transform="translate(476,46)">
    <path d="M 10 66 Q 58 8 136 30 Q 144 68 88 94 Q 34 104 10 66 Z" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
    <line x1="12" y1="66" x2="128" y2="36" stroke="#b91c1c" stroke-width="1.6"/>
    <line x1="14" y1="68" x2="112" y2="68" stroke="#b91c1c" stroke-width="1.4"/>
    <line x1="16" y1="70" x2="82" y2="90" stroke="#b91c1c" stroke-width="1.2"/>
    <line x1="64" y1="53" x2="86" y2="26" stroke="#b91c1c" stroke-width="1.1"/>
    <line x1="64" y1="68" x2="84" y2="88" stroke="#b91c1c" stroke-width="1.1"/>
    <text x="72" y="128" text-anchor="middle" font-size="10.5" font-weight="700" fill="#991b1b">Insect Wing (Flight)</text>
    <text x="72" y="144" text-anchor="middle" font-size="9.5" fill="#7f1d1d">Chitin cuticle + veins</text>
    <text x="72" y="158" text-anchor="middle" font-size="9.5" fill="#7f1d1d">NO pentadactyl bones!</text>
  </g>
</svg>`,
      caption:
        "Human arms, bat wings, and dolphin flippers are homologous modifications of the same five-digit tetrapod blueprint, whereas an insect wing achieves flight through a completely independent chitinous exoskeleton (analogy).",
    },
  ],
  history: {
    title: "Alfred Russel Wallace, Bukit Timah & the Malay Archipelago (1854–1862)",
    story:
      "In April 1854, a 31-year-old British naturalist named **Alfred Russel Wallace** stepped ashore in Singapore and immediately began collecting beetles and butterflies on the forested slopes of **Bukit Timah** — gathering over 700 beetle species within two months from a single patch of primary rainforest! Over the next eight years sailing across the Malay Archipelago (Borneo, Bali, Lombok, Sulawesi, and Maluku), Wallace noticed a dramatic invisible biogeographical boundary: just 35 kilometres of deep ocean strait between Bali and Lombok separated Asian tigers, woodpeckers, and dipterocarps from Australian cockatoos and marsupials. That deep ocean trench — never bridged even during Ice Age low sea levels — acted as an ancient geographical barrier driving **allopatric speciation** on opposite sides (now celebrated as the **Wallace Line**). While recovering from malaria on the spice island of Ternate in February 1858, Wallace wrote out the complete theory of **evolution by natural selection** in a feverish burst of insight and mailed his manuscript straight to Charles Darwin — prompting their historic joint paper to the Linnean Society of London in July 1858 and launching modern evolutionary biology and island biogeography.",
  },
};
