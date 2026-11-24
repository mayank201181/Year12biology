import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Every single human cell packs **2 metres of DNA** inside a nucleus only 6 μm wide, copies all 6.4 billion base pairs in a few hours with fewer than one error per billion bases, edits RNA transcripts into over 100,000 proteins, remembers which genes to silence via epigenetic tags [HL], and fights relentless osmotic water pressure across membranes only 7 nm thick. Welcome to the molecular and cellular engine of biological continuity and change.",

  didYouKnow: [
    "In 1958, Matthew Meselson and Franklin Stahl proved semi-conservative DNA replication in what historian Frederic Holmes called **'the most beautiful experiment in biology'** — using nothing more than heavy ¹⁵N isotopes and a tabletop ultracentrifuge.",
    "The thermostable **Taq DNA polymerase** that powers modern PCR tests was discovered in 1969 inside *Thermus aquaticus*, a pink heat-loving bacterium thriving at 75 °C in Mushroom Spring, Yellowstone National Park.",
    "Humans have only ~20,000 protein-coding genes (fewer than a rice plant!), yet **alternative splicing** and post-translational modifications expand the human proteome past 100,000 distinct functional proteins.",
    "The **CRISPR–Cas9** gene-editing revolution began as a curiosity in yogurt-making bacteria (*Streptococcus thermophilus*): scientists noticed bacteria archiving tiny viral DNA spacers inside their own genome as an adaptive immune memory.",
    "Identical (monozygotic) twins share 100% of their nuclear DNA at birth, yet by age 50 their **epigenomes** differ at thousands of CpG methylation loci — explaining why one twin can develop asthma or diabetes while the other stays healthy.",
    "At the top of a 100-metre giant coastal redwood (*Sequoia sempervirens*), leaf mesophyll water potential drops past **−2.0 MPa (−2000 kPa)**, pulling continuous water columns upward under negative xylem pressure potential ({{Ψ_p < 0}}).",
  ],

  activities: [
    {
      title: "Potato-Cylinder Osmolarity & Water Potential Curve",
      emoji: "🥔",
      materials: [
        "1 firm potato, cork borer (or knife + ruler), paper towels",
        "Electronic kitchen/lab balance (±0.01 g)",
        "6 cups with serial sucrose dilutions: 0.0, 0.2, 0.4, 0.6, 0.8, 1.0 mol dm⁻³",
        "Timer (45 min) and graph paper or spreadsheet",
      ],
      steps: [
        "Cut 18 uniform potato cylinders (3 replicates per concentration, 4 cm long). Blot gently dry and record each initial mass {{m_i}}.",
        "Submerge 3 cylinders in each sucrose cup for exactly 45 minutes at room temperature.",
        "Remove, blot gently dry, and record each final mass {{m_f}}.",
        "Calculate mean percentage change in mass for each concentration and plot `%Δm` (y-axis) versus sucrose molarity (x-axis).",
        "Read the x-intercept where `%Δm = 0%`: that molarity equals the isotonic osmolarity of your potato tissue!",
      ],
      maths:
        "{{%Δm = ((m_f - m_i) / m_i) * 100%}}; linear interpolation between the bracketing positive and negative means estimates the exact isotonic point where {{Ψ_cell = Ψ_solution}} and {{Ψ_p = 0}}.",
    },
    {
      title: "Paper-Strip Frameshift vs Silent Mutation Lab",
      emoji: "✂️",
      materials: [
        "Strip of squared paper and marker pens (4 colours for A, U, C, G)",
        "Scissors and sticky tape",
        "Standard mRNA codon table",
      ],
      steps: [
        "Write the 15-base mRNA strip `5'-AUG-CCU-GAG-GGU-UAA-3'` and draw vertical bars separating every 3-base codon (`Met–Pro–Glu–Gly–STOP`).",
        "Test a **silent substitution**: change base 6 (`U → C`, making `CCC`). Notice the polypeptide stays `Met–Pro–Glu–Gly–STOP`.",
        "Test a **missense substitution** (sickle-cell model): change base 8 (`A → U`, making `GUG`). Only amino acid 3 swaps (`Glu → Val`).",
        "Reset, then physically snip out base 4 (`C`) with scissors and slide the strip left! Redraw codon triplet bars every 3 bases from the left and watch every downstream codon scramble.",
      ],
      maths:
        "Deleting {{k}} bases preserves the downstream reading frame if and only if {{k}} is a multiple of 3 (mod 3 = 0); any deletion with {{k}} not divisible by 3 shifts all remaining {{(B - i) / 3}} codons.",
    },
    {
      title: "Kitchen Strawberry DNA Precipitation & PCR Growth Model",
      emoji: "🍓",
      materials: [
        "2 ripe strawberries (octoploid, 8n!) in a zip-lock bag",
        "10 mL chilled washing-up liquid + pinch of table salt in 90 mL water",
        "Coffee filter, clear glass, and 30 mL ice-cold 70–95% rubbing alcohol (isopropanol/ethanol)",
      ],
      steps: [
        "Mash strawberries thoroughly in the bag for 2 minutes to mechanically break cellulose cell walls.",
        "Add 20 mL detergent–salt extraction buffer and mix gently for 1 minute (detergent dissolves phospholipid membranes; Na⁺ shields negative DNA phosphates).",
        "Filter the red liquid through a coffee filter into a clear glass.",
        "Tilt the glass and slowly pour ice-cold alcohol down the side so it forms a clear top layer. Watch pale white DNA strands precipitate at the interface within 2 minutes!",
      ],
      maths:
        "Strawberries are octoploid ({{8n = 56}} chromosomes per cell), yielding 4× more DNA per nucleus than diploid cells. If you amplified just 1 extracted gene copy by PCR for 30 cycles, you would generate {{2^30 = 1073741824}} (over 1 billion) copies!",
    },
  ],

  bonusDiagrams: [
    {
      title: "Meselson–Stahl CsCl Density-Gradient Centrifugation (Generations 0–3)",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 240" role="img" aria-label="Meselson and Stahl centrifuge tubes for generations 0, 1, 2, and 3 showing heavy, hybrid, and light DNA bands"><rect width="660" height="240" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="330" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">Meselson–Stahl Semi-Conservative Evidence (¹⁵N → ¹⁴N)</text><rect x="52" y="54" width="66" height="128" rx="20" fill="#ffffff" stroke="#475569" stroke-width="2"/><rect x="56" y="144" width="58" height="10" rx="3" fill="#1e3a8a"/><text x="85" y="46" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Gen 0</text><text x="85" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">100% Heavy</text><text x="85" y="214" text-anchor="middle" font-size="9.5" fill="#475569">¹⁵N / ¹⁵N</text><rect x="208" y="54" width="66" height="128" rx="20" fill="#ffffff" stroke="#475569" stroke-width="2"/><rect x="212" y="114" width="58" height="10" rx="3" fill="#7c3aed"/><text x="241" y="46" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Gen 1 (¹⁴N)</text><text x="241" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="#6d28d9">100% Hybrid</text><text x="241" y="214" text-anchor="middle" font-size="9.5" fill="#475569">Falsifies conservative</text><rect x="364" y="54" width="66" height="128" rx="20" fill="#ffffff" stroke="#475569" stroke-width="2"/><rect x="368" y="84" width="58" height="9" rx="3" fill="#0d9488"/><rect x="368" y="114" width="58" height="9" rx="3" fill="#7c3aed"/><text x="397" y="46" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Gen 2 (¹⁴N)</text><text x="397" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="#0f766e">50% Light · 50% Hybrid</text><text x="397" y="214" text-anchor="middle" font-size="9.5" fill="#475569">Falsifies dispersive</text><rect x="520" y="54" width="66" height="128" rx="20" fill="#ffffff" stroke="#475569" stroke-width="2"/><rect x="524" y="84" width="58" height="11" rx="3" fill="#0d9488"/><rect x="524" y="115" width="58" height="6" rx="3" fill="#7c3aed"/><text x="553" y="46" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Gen 3 (¹⁴N)</text><text x="553" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="#0f766e">75% Light · 25% Hybrid</text><text x="553" y="214" text-anchor="middle" font-size="9.5" fill="#475569">Hybrid = 2 / 2ⁿ</text><line x1="126" y1="88" x2="606" y2="88" stroke="#99f6e4" stroke-dasharray="3 3"/><line x1="126" y1="119" x2="606" y2="119" stroke="#ddd6fe" stroke-dasharray="3 3"/><line x1="126" y1="149" x2="606" y2="149" stroke="#bfdbfe" stroke-dasharray="3 3"/><text x="614" y="92" font-size="9" font-weight="700" fill="#0f766e">Light</text><text x="614" y="123" font-size="9" font-weight="700" fill="#6d28d9">Hybrid</text><text x="614" y="153" font-size="9" font-weight="700" fill="#1e3a8a">Heavy</text></svg>',
      caption:
        "Generation 1's single hybrid band immediately refutes conservative replication; Generation 2's 50:50 split into light and hybrid bands refutes dispersive replication. By Generation n, hybrid fraction equals 2 / 2ⁿ.",
    },
    {
      title: "PCR Thermal Cycling Profile (Denaturation, Annealing, Extension)",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 230" role="img" aria-label="PCR thermal cycler graph showing denaturation at 95 degrees Celsius, annealing at 55 degrees Celsius, and Taq extension at 72 degrees Celsius"><rect width="660" height="230" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="330" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">PCR Thermal Cycle Profile (1 Cycle Doubles Target DNA)</text><line x1="64" y1="186" x2="626" y2="186" stroke="#334155" stroke-width="2"/><line x1="64" y1="44" x2="64" y2="186" stroke="#334155" stroke-width="2"/><text x="26" y="116" text-anchor="middle" font-size="10.5" font-weight="700" fill="#334155" transform="rotate(-90 26 116)">Temp (°C)</text><text x="56" y="64" text-anchor="end" font-size="10" font-weight="700" fill="#dc2626">95°C</text><text x="56" y="102" text-anchor="end" font-size="10" font-weight="700" fill="#16a34a">72°C</text><text x="56" y="142" text-anchor="end" font-size="10" font-weight="700" fill="#2563eb">55°C</text><line x1="64" y1="60" x2="620" y2="60" stroke="#fecaca" stroke-dasharray="4 3"/><line x1="64" y1="98" x2="620" y2="98" stroke="#bbf7d0" stroke-dasharray="4 3"/><line x1="64" y1="138" x2="620" y2="138" stroke="#bfdbfe" stroke-dasharray="4 3"/><polyline points="72,60 176,60 212,138 320,138 352,98 486,98 518,60 612,60" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-linejoin="round"/><rect x="82" y="42" width="112" height="16" rx="4" fill="#fee2e2"/><text x="138" y="54" text-anchor="middle" font-size="9.5" font-weight="700" fill="#b91c1c">1. Denaturation (95°C)</text><text x="138" y="76" text-anchor="middle" font-size="9" fill="#991b1b">H-bonds break → ssDNA</text><rect x="210" y="144" width="114" height="16" rx="4" fill="#dbeafe"/><text x="267" y="156" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1d4ed8">2. Annealing (55°C)</text><text x="267" y="172" text-anchor="middle" font-size="9" fill="#1e40af">Primers bind 3\' flanks</text><rect x="358" y="78" width="124" height="16" rx="4" fill="#dcfce7"/><text x="420" y="90" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">3. Extension (72°C)</text><text x="420" y="114" text-anchor="middle" font-size="9" fill="#166534">Taq Pol synthesizes 5\'→3\'</text><text x="565" y="50" text-anchor="middle" font-size="9.5" font-weight="700" fill="#64748b">Next cycle repeats</text><text x="345" y="208" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">Time (typically 30–35 cycles → N = N₀ × 2ⁿ)</text></svg>',
      caption:
        "Each PCR thermal cycle separates DNA strands at ~95 °C, anneals flanking primers at ~55 °C, and lets thermostable Taq polymerase extend complementary strands at ~72 °C.",
    },
  ],

  history: {
    title: "From Meselson & Stahl (1958) to Doudna & Charpentier's CRISPR Nobel (2020)",
    story:
      "When Watson and Crick proposed the DNA double helix in 1953, they famously added one understated sentence: *'It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism.'* Five years later, two young researchers at Caltech—**Matthew Meselson** and **Franklin Stahl**—settled the debate between conservative, semi-conservative, and dispersive copying using heavy ¹⁵N isotopes and CsCl density centrifugation. Sixty-two years later, **Jennifer Doudna** and **Emmanuelle Charpentier** won the 2020 Nobel Prize in Chemistry for showing how a humble bacterial antiviral system (**CRISPR–Cas9**) could be reprogrammed with a single synthetic guide RNA to edit almost any gene on Earth—transforming humanity from passive readers of DNA continuity into precise authors of genetic change.",
  },
};
