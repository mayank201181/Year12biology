import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "a1-a2-unity-molecules-cells",
  title: "Theme A (1–2): Unity & Diversity — Molecules & Cells",
  strand: "Theme A: Unity & Diversity",
  icon: "🔬",
  level: "SL",
  summary:
    "Explore why hydrogen-bonded water makes life physically possible, how universal DNA and RNA store and pass on genetic information, how microscopy reveals prokaryotic and eukaryotic cell ultrastructure, and [HL] how early protocells, LUCA, and fast-evolving viruses reshape our view of life's unity and diversity.",
  intro:
    "Every living organism on Earth — from a thermophilic archaeon at a deep-sea hydrothermal vent to a towering tropical dipterocarp tree in Singapore — shares two molecular foundations: liquid **water** as the medium of metabolism and **nucleic acids** as the universal hereditary code. In Theme A (Levels 1 & 2), you will connect nanoscale chemistry (polar covalent bonds, base-pairing geometry, and nucleosome packaging) directly to cell-scale architecture (prokaryotes, eukaryotes, microscopy resolution, and endosymbiosis), before extending at HL to the abiotic origins of the first cells and the structural diversity and rapid evolution of viruses.",

  guide: [
    // =========================================================================
    // SECTION 1: A1.1–A1.2 Water Properties & Nucleic Acids [SL + HL]
    // =========================================================================
    {
      id: "water-nucleic-acids",
      heading: "A1.1–A1.2 Water Properties & Nucleic Acids (DNA & RNA)",
      level: "SL",
      discovery: {
        problem:
          "Compare two tiny molecules with almost identical molar mass: **water** ({{H_2O}}, {{18}} g mol⁻¹) and **methane** ({{CH_4}}, {{16}} g mol⁻¹). Methane boils at −161.5 °C and is a gas across all of Earth's surface, yet water remains a liquid from 0 °C to 100 °C and can climb 100 m up a redwood xylem vessel without a mechanical pump. What single molecular asymmetry explains both miracles?",
        idea:
          "Oxygen is far more electronegative than hydrogen, pulling shared electrons closer to itself inside the bent {{H_2O}} molecule (104.5°). This creates a **polar dipole** (partial negative {{δ^-}} on O, partial positive {{δ^+}} on each H). Electrostatic attractions called **hydrogen bonds** then link neighbouring water molecules into a dynamic network — requiring large thermal energy to break (high boiling point and specific heat capacity) and pulling water columns together by **cohesion**. Non-polar {{CH_4}} lacks dipoles and hydrogen bonds.",
      },
      body: `### A1.1 Water as the Medium of Life [SL]

Life originated in aqueous solution, and every metabolic reaction inside cytoplasm still takes place in water. All of water's life-sustaining properties arise from its **polar covalent O–H bonds** and the **intermolecular hydrogen bonds** formed between the partial negative oxygen ({{δ^-}}) of one molecule and the partial positive hydrogen ({{δ^+}}) of an adjacent molecule.

| Property of water | Molecular cause | Biological consequence |
|---|---|---|
| **Cohesion** | Hydrogen bonds pull adjacent water molecules together | Continuous columns of water pulled under tension up plant **xylem**; high **surface tension** supports habitats like water striders (*Gerridae*) |
| **Adhesion** | Water molecules form H-bonds with polar or charged surfaces | **Capillary action** draws water through porous soil and hydrophilic cellulose plant cell walls, keeping mesophyll walls moist for gas exchange |
| **Solvent of life** | Polar water forms **hydration shells** around ions and polar solutes | Dissolves glucose, amino acids, {{Na^+}}, {{Cl^-}}, and urea for transport in **blood plasma** and **phloem sap**, and lets enzymes collide with substrates in cytoplasm. Non-polar lipids are hydrophobic and travel in blood inside **lipoprotein** droplets |
| **High specific heat capacity** ({{4.18}} J g⁻¹ °C⁻¹) | Extensive H-bonds absorb heat energy before molecular kinetic energy rises | Aquatic habitats (oceans, ponds) and water-rich organisms buffer rapid temperature swings, stabilizing enzyme rates |
| **High thermal conductivity** | Closely packed H-bonded molecules transfer kinetic energy rapidly (~25× faster than air) | Marine endotherms lose heat quickly in cold water and need thick blubber (ringed seal) or trapped-air feathers (black-throated loon) |
| **Buoyancy & viscosity** | High density (~{{1000}} kg m⁻³) gives upward buoyant force; H-bonds resist shear flow | Supports large aquatic organisms against gravity (reducing skeletal load), while demanding streamlined bodies (ringed seal, loon) to overcome drag |

**Contrasting physical properties in air vs water (IB case study):** Compare the **black-throated loon** (*Gavia arctica*) and the **ringed seal** (*Pusa hispida*). In water, high buoyancy supports body mass effortlessly, whereas air provides negligible buoyancy — forcing the loon to rely on lightweight hollow bones and large wings for lift. Conversely, water's high viscosity creates substantial drag (solved by streamlined flippers and webbed feet placed posteriorly) and its high thermal conductivity drains body heat rapidly (countered by seal blubber and oil-waterproofed plumage).

#### Extraplanetary Origin of Water & the Goldilocks Zone [HL]
Earth formed ~4.5 billion years ago at temperatures too high to retain volatile surface water initially. Most planetary scientists explain Earth's abundant oceans through delivery by water-rich **asteroids** (carbonaceous chondrites) during the Late Heavy Bombardment, retained because Earth has sufficient **gravitational pull** to prevent water vapour escaping to space and moderate temperatures that keep water liquid. Astrobiologists searching for extraterrestrial life therefore prioritize exoplanets orbiting within their star's **habitable ("Goldilocks") zone** — the orbital distance range where surface temperatures permit stable **liquid water**.

---

### A1.2 Nucleic Acids: Universal Information Storage [SL]

**DNA** (deoxyribonucleic acid) and **RNA** (ribonucleic acid) are polynucleotides built from repeating **nucleotide** monomers. Each nucleotide has three covalently bonded parts:
1. A negatively charged **phosphate group** attached to the **5' carbon** of the pentose sugar.
2. A five-carbon **pentose sugar** (**deoxyribose** in DNA, lacking an oxygen on C2'; **ribose** in RNA, carrying a reactive –OH group on C2').
3. A **nitrogenous base** attached to the **1' carbon** — either a two-ring **purine** (adenine A, guanine G) or a one-ring **pyrimidine** (cytosine C, thymine T in DNA, uracil U in RNA).

Nucleotides link by **condensation reactions** between the 3' hydroxyl (–OH) of one pentose and the 5' phosphate of the next, forming strong covalent **phosphodiester bonds** along the alternating **sugar–phosphate backbone**.

| Feature | DNA | RNA |
|---|---|---|
| Pentose sugar | **Deoxyribose** (H on C2' — chemically more stable) | **Ribose** (OH on C2' — more chemically reactive) |
| Nitrogenous bases | A, T, C, G | A, **U**, C, G |
| Strand structure | **Double-stranded** antiparallel right-handed helix | Typically **single-stranded** (may fold locally) |
| Primary role | Long-term hereditary genetic repository | Transcription (mRNA), translation (tRNA, rRNA), ribozyme catalysis |

**Complementary base pairing** stabilizes the DNA double helix via hydrogen bonds: **A pairs with T** (or U in RNA) via **2 hydrogen bonds**, and **C pairs with G** via **3 hydrogen bonds**. Because a sequence of length {{n}} can place any of 4 bases at each position, there are {{4^n}} possible sequences — giving DNA near-limitless information storage capacity. Remarkably, the **genetic code is universal**: almost every organism from *E. coli* to humans translates the exact same mRNA triplet codons into the same 20 amino acids, providing compelling molecular evidence for **common ancestry**.

---

### Molecular Directionality, Evidence & Packaging [HL]

1. **Antiparallel 5' → 3' directionality [HL]:** Every polynucleotide strand has a free phosphate at its **5' end** and a free –OH group at its **3' end**. The two strands of DNA run in opposite orientations (one \`5' → 3'\`, its partner \`3' ← 5'\`), which is geometrically required for complementary hydrogen bonds to align properly and forces DNA and RNA polymerases to synthesize new strands strictly in the **5' → 3'** direction.
2. **Purine–pyrimidine pairing & Chargaff's data [HL]:** Pairing one double-ring purine (A or G) with one single-ring pyrimidine (T or C) keeps the helix width uniform (~{{2.0}} nm) across the entire chromosome. Erwin Chargaff's biochemical assays revealed that across diverse species **%A = %T** and **%C = %G** (so purines = pyrimidines = 50%), while the \`(A + T) : (C + G)\` ratio varied markedly between species. This **falsified the tetranucleotide hypothesis** (which predicted equal 25% proportions of all four bases in a monotonous repeat incapable of encoding genetic diversity).
3. **Hershey–Chase experiment (1952) [HL]:** Before 1952, many biologists assumed **proteins** (20 amino acids) rather than DNA (4 bases) carried heredity. Alfred Hershey and Martha Chase labelled bacteriophage T2 using two radioisotopes: **³⁵S** (incorporated exclusively into **protein** cysteine/methionine, absent from DNA) and **³²P** (incorporated exclusively into **DNA** phosphate groups, absent from phage protein coats). After allowing phages to infect *E. coli*, agitating them in a kitchen blender to shear off empty viral coats, and centrifuging:
   - **³⁵S radioactivity** remained overwhelmingly in the **supernatant** (empty protein capsids outside cells).
   - **³²P radioactivity** concentrated in the **pellet** (infected bacterial cells) and passed to progeny phages.
   - Conclusion: **DNA, not protein, is the genetic material.**
4. **Nucleosomes in eukaryotes [HL]:** Eukaryotic nuclear DNA is tightly packaged with positively charged **histone proteins** (rich in basic lysine and arginine residues that electrostatically attract the negatively charged phosphate backbone). Approximately **146–147 base pairs** of DNA wrap roughly **1.65 turns** (often simplified as ~2 turns) around an **octamer of 8 histone proteins** (two copies each of H2A, H2B, H3, and H4), stabilized externally by an **H1 linker histone**. Adjacent nucleosomes are joined by short stretches of **linker DNA**, creating "beads on a string" that supercoil into dense mitotic chromosomes and regulate gene accessibility. Prokaryotes have **naked DNA** lacking histones (some archaea possess histone-like proteins).`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: Hydrogen bonding between polar water molecules showing partial charges. Right: Antiparallel DNA double helix showing 5-prime to 3-prime directionality, purine-pyrimidine A-T two H-bonds and C-G three H-bonds.">
  <rect x="0" y="0" width="640" height="260" rx="12" fill="#f8fafc"/>
  <!-- Left Panel: Polar Water & H-bonding -->
  <rect x="14" y="14" width="275" height="232" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="151" y="36" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">Polar Water &amp; Hydrogen Bonds</text>
  <!-- Water molecule 1 (top-left) -->
  <line x1="88" y1="95" x2="55" y2="128" stroke="#334155" stroke-width="3"/>
  <line x1="88" y1="95" x2="128" y2="112" stroke="#334155" stroke-width="3"/>
  <circle cx="88" cy="95" r="20" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
  <text x="88" y="99" font-size="12" font-weight="700" text-anchor="middle" fill="#ffffff">O</text>
  <text x="88" y="69" font-size="11" font-weight="700" text-anchor="middle" fill="#b91c1c">δ−</text>
  <circle cx="55" cy="128" r="12" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="55" y="132" font-size="10" font-weight="700" text-anchor="middle" fill="#ffffff">H</text>
  <text x="34" y="140" font-size="11" font-weight="700" fill="#1d4ed8">δ+</text>
  <circle cx="128" cy="112" r="12" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="128" y="116" font-size="10" font-weight="700" text-anchor="middle" fill="#ffffff">H</text>
  <text x="128" y="95" font-size="11" font-weight="700" text-anchor="middle" fill="#1d4ed8">δ+</text>
  <!-- H-bond dashed line -->
  <line x1="142" y1="117" x2="185" y2="132" stroke="#0ea5e9" stroke-width="2.5" stroke-dasharray="5,4"/>
  <text x="166" y="112" font-size="10" font-weight="700" text-anchor="middle" fill="#0284c7">H-bond</text>
  <!-- Water molecule 2 (bottom-right) -->
  <line x1="205" y1="142" x2="242" y2="124" stroke="#334155" stroke-width="3"/>
  <line x1="205" y1="142" x2="225" y2="184" stroke="#334155" stroke-width="3"/>
  <circle cx="205" cy="142" r="20" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
  <text x="205" y="146" font-size="12" font-weight="700" text-anchor="middle" fill="#ffffff">O</text>
  <text x="180" y="160" font-size="11" font-weight="700" fill="#b91c1c">δ−</text>
  <circle cx="242" cy="124" r="12" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="242" y="128" font-size="10" font-weight="700" text-anchor="middle" fill="#ffffff">H</text>
  <text x="262" y="120" font-size="11" font-weight="700" fill="#1d4ed8">δ+</text>
  <circle cx="225" cy="184" r="12" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="225" y="188" font-size="10" font-weight="700" text-anchor="middle" fill="#ffffff">H</text>
  <text x="245" y="192" font-size="11" font-weight="700" fill="#1d4ed8">δ+</text>
  <text x="151" y="218" font-size="10.5" text-anchor="middle" fill="#475569">Solid = polar covalent · Dashed = H-bond</text>
  <text x="151" y="234" font-size="10.5" text-anchor="middle" fill="#475569">Drives cohesion, adhesion &amp; high c</text>

  <!-- Right Panel: Antiparallel DNA Pairing -->
  <rect x="303" y="14" width="323" height="232" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="464" y="36" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">Antiparallel DNA Base Pairing (~2.0 nm)</text>
  <!-- Left sugar-phosphate backbone (5' top -> 3' bottom) -->
  <line x1="348" y1="60" x2="348" y2="210" stroke="#6366f1" stroke-width="4"/>
  <text x="330" y="64" font-size="12" font-weight="700" fill="#4338ca">5′</text>
  <text x="330" y="214" font-size="12" font-weight="700" fill="#4338ca">3′</text>
  <!-- Right sugar-phosphate backbone (3' top <- 5' bottom) -->
  <line x1="580" y1="60" x2="580" y2="210" stroke="#0d9488" stroke-width="4"/>
  <text x="592" y="64" font-size="12" font-weight="700" fill="#0f766e">3′</text>
  <text x="592" y="214" font-size="12" font-weight="700" fill="#0f766e">5′</text>
  <!-- Row 1: Purine A (2 rings) = 2 H-bonds = Pyrimidine T (1 ring) -->
  <circle cx="348" cy="92" r="9" fill="#eef2ff" stroke="#4338ca" stroke-width="1.5"/>
  <text x="348" y="96" font-size="9" font-weight="700" text-anchor="middle" fill="#4338ca">S</text>
  <rect x="364" y="79" width="76" height="26" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="402" y="96" font-size="11" font-weight="700" text-anchor="middle" fill="#166534">A (purine)</text>
  <line x1="444" y1="88" x2="496" y2="88" stroke="#64748b" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="444" y1="96" x2="496" y2="96" stroke="#64748b" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="470" y="81" font-size="9.5" font-weight="700" text-anchor="middle" fill="#475569">2 H-bonds</text>
  <rect x="500" y="79" width="64" height="26" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="532" y="96" font-size="11" font-weight="700" text-anchor="middle" fill="#991b1b">T (pyr)</text>
  <circle cx="580" cy="92" r="9" fill="#f0fdfa" stroke="#0f766e" stroke-width="1.5"/>
  <text x="580" y="96" font-size="9" font-weight="700" text-anchor="middle" fill="#0f766e">S</text>
  <!-- Phosphate beads between sugars -->
  <circle cx="348" cy="130" r="7" fill="#f59e0b"/>
  <text x="348" y="133" font-size="8.5" font-weight="700" text-anchor="middle" fill="#ffffff">P</text>
  <circle cx="580" cy="130" r="7" fill="#f59e0b"/>
  <text x="580" y="133" font-size="8.5" font-weight="700" text-anchor="middle" fill="#ffffff">P</text>
  <!-- Row 2: Pyrimidine C (1 ring) ≡ 3 H-bonds ≡ Purine G (2 rings) -->
  <circle cx="348" cy="168" r="9" fill="#eef2ff" stroke="#4338ca" stroke-width="1.5"/>
  <text x="348" y="172" font-size="9" font-weight="700" text-anchor="middle" fill="#4338ca">S</text>
  <rect x="364" y="155" width="64" height="26" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="396" y="172" font-size="11" font-weight="700" text-anchor="middle" fill="#92400e">C (pyr)</text>
  <line x1="432" y1="162" x2="484" y2="162" stroke="#64748b" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="432" y1="168" x2="484" y2="168" stroke="#64748b" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="432" y1="174" x2="484" y2="174" stroke="#64748b" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="458" y="154" font-size="9.5" font-weight="700" text-anchor="middle" fill="#475569">3 H-bonds</text>
  <rect x="488" y="155" width="76" height="26" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="526" y="172" font-size="11" font-weight="700" text-anchor="middle" fill="#1e40af">G (purine)</text>
  <circle cx="580" cy="168" r="9" fill="#f0fdfa" stroke="#0f766e" stroke-width="1.5"/>
  <text x="580" y="172" font-size="9" font-weight="700" text-anchor="middle" fill="#0f766e">S</text>
  <text x="464" y="218" font-size="10.5" text-anchor="middle" fill="#475569">Purine (2 rings) + Pyrimidine (1 ring) = constant width</text>
  <text x="464" y="234" font-size="10.5" text-anchor="middle" fill="#475569">Phosphodiester bonds (S–P) are covalent; base pairs are H-bonds</text>
</svg>`,
      diagramCaption:
        "Hydrogen bonds govern both water's emergent physical properties (left) and the selective, reversible pairing of antiparallel DNA strands (right).",
      workedExamples: [
        {
          title: "Chargaff's Ratios & Hydrogen-Bond Counting [SL/HL]",
          problem:
            "A double-stranded DNA fragment contains **400 base pairs** (800 nucleotides in total). Biochemical analysis reveals that **22%** of all bases in the fragment are **adenine (A)**. Calculate (a) the percentage of guanine (G), (b) the number of cytosine (C) nucleotides, and (c) the total number of hydrogen bonds between the two strands.",
          steps: [
            "By Chargaff's complementary pairing rules in double-stranded DNA, {{%T = %A = 22%}}. Therefore {{%A + %T = 44%}}.",
            "The remaining bases must be C and G in equal proportions: {{%C + %G = 100% - 44% = 56%}}, so {{%G = %C = 56% / 2 = 28%}}.",
            "Number of cytosine nucleotides out of 800 total bases: {{0.28 * 800 = 224}} C nucleotides (and 224 G nucleotides, forming **224 G–C base pairs**).",
            "Number of A–T base pairs: {{0.22 * 800 = 176}} A nucleotides paired with 176 T nucleotides, forming **176 A–T base pairs**. Check: {{176 + 224 = 400}} base pairs.",
            "Count hydrogen bonds (2 per A–T pair, 3 per G–C pair): {{(176 * 2) + (224 * 3) = 352 + 672 = 1024}} hydrogen bonds.",
          ],
          answer: "(a) 28% guanine; (b) 224 cytosine nucleotides; (c) 1024 hydrogen bonds.",
          yourTurn: {
            question:
              "A double-stranded DNA molecule has **500 base pairs** (1000 nucleotides) and contains **18%** cytosine (C). How many **adenine (A)** nucleotides are present in the molecule?",
            answer: { type: "number", value: 320, display: "320" },
            solution:
              "%G = %C = 18%, so %C + %G = 36%. That leaves 100% − 36% = 64% for A + T, giving %A = 64% / 2 = 32%. Out of 1000 nucleotides, 0.32 × 1000 = 320 adenine nucleotides.",
          },
        },
        {
          title: "Writing Antiparallel 5' → 3' Complementary Strands [HL]",
          problem:
            "One strand of a DNA duplex has the sequence `5'-ATGCAAGT-3'`. Determine the complementary DNA strand written in the standard **`5' → 3'`** direction.",
          steps: [
            "Write the complementary base directly beneath each base (A↔T, C↔G), remembering that the partner strand runs **antiparallel** (`3' → 5'`): `3'-TACGTTCA-5'`.",
            "Reverse the string so you read from the **5' end** (right) to the **3' end** (left): `5'-ACTTGCAT-3'`.",
            "Verify the ends: the 5' A on the new strand pairs with the 3' T of the original, and the 3' T on the new strand pairs with the 5' A of the original.",
          ],
          answer: "`5'-ACTTGCAT-3'`",
          yourTurn: {
            question:
              "A DNA template strand reads `3'-GCTAGTA-5'`. Write the complementary **mRNA** strand in the `5' → 3'` direction (type the 7 capital letters only, e.g. without dashes).",
            answer: { type: "text", accept: ["CGAUCAU", "5'-CGAUCAU-3'", "5-CGAUCAU-3"], display: "CGAUCAU" },
            solution:
              "Because the template already runs 3' → 5', the complementary mRNA synthesized antiparallel runs 5' → 3' left-to-right. Pair G→C, C→G, T→A, A→U (RNA uses uracil, not thymine): 5'-CGAUCAU-3'.",
          },
        },
      ],
      keyPoints: [
        "Water's bent polar geometry creates intermolecular hydrogen bonds responsible for cohesion, adhesion, high specific heat capacity, high thermal conductivity, buoyancy, and solvent polarity.",
        "DNA (deoxyribose, A/T/C/G, double-stranded) and RNA (ribose, A/U/C/G, single-stranded) share a covalent sugar–phosphate backbone linked by phosphodiester condensation bonds.",
        "Complementary base pairing (A=T with 2 H-bonds; C≡G with 3 H-bonds) pairs a purine with a pyrimidine, preserving a uniform 2.0 nm helix diameter and enabling faithful replication.",
        "[HL] Hershey–Chase (³²P in pellet vs ³⁵S in supernatant) proved DNA is the genetic material; Chargaff's ratios falsified the tetranucleotide hypothesis.",
        "[HL] Eukaryotic DNA wraps ~1.65 turns (146–147 bp) around a positively charged histone octamer plus an H1 linker histone to form nucleosomes.",
      ],
      whyItWorks:
        "Why does biology use **strong covalent phosphodiester bonds** along each DNA strand yet **weak hydrogen bonds** between the two strands? Covalent bonds lock the linear sequence of letters permanently so the genetic message does not scramble, while thousands of individually weak hydrogen bonds act like a zipper: collectively very stable at physiological temperatures, yet easily unzipped locally by helicase or RNA polymerase whenever a gene must be copied or transcribed.",
      strategies: [
        "In **water property** exam questions, always trace the three-link chain: *unequal O–H electronegativity → intermolecular hydrogen bonding → specific biological consequence* (never confuse covalent bonds inside one water molecule with H-bonds between molecules!).",
        "In **Chargaff** calculations, first check whether the question gives **total nucleotides** or **base pairs** (1 base pair = 2 nucleotides!), and note that `%G–C pairs` equals `%G + %C` (twice `%G`).",
        "When writing an antiparallel **5' → 3'** DNA complement, ALWAYS write the aligned `3' → 5'` complement first, then reverse it carefully letter-by-letter to prevent direction slips.",
        "For **Hershey–Chase**, anchor the isotopes to molecular elements: **P**hosphate in DNA (³²P → **P**ellet) and **S**ulfur in protein amino acids (³⁵S → **S**upernatant).",
      ],
      thinkDeeper:
        "Single-stranded RNA molecules do NOT have to obey Chargaff's rule (%A = %U, %C = %G) — why? If an astrobiologist isolated an unknown nucleic acid from an extraterrestrial sample with 31% A, 19% U, 27% C, and 23% G, what two structural conclusions could they immediately deduce?",
    },

    // =========================================================================
    // SECTION 2: A2.2 Cell Structure, Microscopy & Endosymbiosis [SL + HL]
    // =========================================================================
    {
      id: "cell-structure-microscopy",
      heading: "A2.2 Cell Structure, Microscopy & Endosymbiosis",
      level: "SL",
      discovery: {
        problem:
          "A student tries to inspect a 25 nm ribosome using a research-grade light microscope by stacking extra magnifying lenses to reach 10 000× magnification. Even with perfect glass lenses, the ribosome remains completely invisible — just an empty blur. Why does cranking up magnification fail to reveal smaller details?",
        idea:
          "Magnification only enlarges an image; **resolution** is the minimum distance at which two adjacent points can still be distinguished as separate. Light waves have wavelengths of ~400–700 nm, so diffraction physically limits light microscopy to a resolution of roughly **200 nm**. Any object much smaller than half a wavelength blurs together. Electron microscopes overcome this limit by firing **electron beams** with wavelengths thousands of times shorter than visible light, pushing resolution down to ~0.1–1 nm.",
      },
      body: `### Cell Theory & Atypical Cell Structures [SL]

Cell theory states that all living organisms are composed of cells, the cell is the smallest unit of life, and new cells arise only from pre-existing cells. All cells share four universal features: a **plasma membrane**, **cytoplasm**, **DNA**, and **ribosomes** for protein synthesis.

However, IB Biology emphasizes **atypical eukaryotic structures** that challenge a simplistic "one cell = one small compartment with one nucleus" stereotype:
- **Striated skeletal muscle fibres:** Huge cylindrical cells (up to 30+ mm long) formed by fusion of embryonic myoblasts, containing **hundreds of nuclei** (multinucleated / syncytial) in a shared sarcoplasm.
- **Aseptate fungal hyphae:** Continuous tubular filaments lacking cross-walls (septa), so cytoplasm and many nuclei flow freely along the hypha.
- **Giant algae (*Acetabularia*):** Single-celled marine green algae growing up to 5–10 cm tall with complex rhizoid, stalk, and cap morphology — yet governed by a **single nucleus** at the base.
- *(Also note mature mammalian **red blood cells** and plant **phloem sieve tube elements**, which lose their nuclei during differentiation to maximize haemoglobin or sap transport.)*

---

### Microscopy, Resolution & Magnification Math [SL]

| Technique | Radiation & specimen | Max resolution | Typical use & key advantage |
|---|---|---|---|
| **Light microscope (LM)** | Visible light; living or dead, stained or unstained | ~200 nm | Observe **living cells**, colour, mitosis, cytoplasmic streaming |
| **Transmission EM (TEM)** | Electron beam through ultrathin section (dead, in vacuum) | ~0.1–1 nm | High-resolution **2D internal ultrastructure** (cristae, thylakoids, 70S/80S ribosomes) |
| **Scanning EM (SEM)** | Electrons scanned across metal-coated surface (dead, in vacuum) | ~3–10 nm | High-depth-of-field **3D surface topography** (pollen, cilia, microvilli) |
| **Freeze-fracture EM** | Rapidly frozen sample split along hydrophobic core of lipid bilayer | ~1–2 nm | Exposes embedded **transmembrane proteins** inside membranes |
| **Cryogenic EM (cryo-EM)** | Flash-frozen aqueous sample at −180 °C (no crystals needed) | ~0.2 nm (atomic) | 3D native structure of fragile **protein complexes & viruses** |
| **Fluorescence / Immunofluorescence** | UV/laser excites fluorophores attached to **antibodies** | ~200 nm (higher in super-res) | Pinpoints **specific proteins or organelles** in living or fixed cells |

**Magnification equation:** {{M = I / A}}, where {{M}} is magnification (no units, e.g. ×2500), {{I}} is measured image size, and {{A}} is actual specimen size — **both {{I}} and {{A}} MUST be in the same units!**
- {{1}} m = {{1000}} mm = {{10^6}} μm = {{10^9}} nm
- {{1}} mm = {{1000}} μm; {{1}} μm = {{1000}} nm

---

### Prokaryotic vs Eukaryotic Ultrastructure [SL]

**Prokaryotes** (Bacteria & Archaea, typically {{0.5}}–{{5}} μm) lack a true membrane-bound nucleus and lack membrane-bound organelles. Key ultrastructure visible in TEM micrographs:
- **Nucleoid region:** Contains a single circular chromosome of **naked DNA** (not associated with histone proteins in bacteria).
- **70S ribosomes:** Smaller than eukaryotic 80S ribosomes; synthesize proteins directly in the cytoplasm.
- **Cell wall** (peptidoglycan in bacteria), **plasma membrane**, **cytoplasm**, plus optional **plasmids** (small accessory DNA rings), **pili** (adhesion/conjugation), **flagella** (motility), and outer **capsule**.
- Divide asexually by **binary fission** (circular DNA replicates, cell elongates, plasma membrane & wall pinch inward).

**Eukaryotes** (Animals, Plants, Fungi, Protists; typically {{10}}–{{100}} μm) compartmentalize reactions inside **membrane-bound organelles**: nucleus with double envelope and nuclear pores, rough endoplasmic reticulum (rER, studded with **80S ribosomes** for secreted/membrane proteins), smooth ER (lipid synthesis), Golgi apparatus (protein modification and vesicle packaging), mitochondria (aerobic respiration), lysosomes (hydrolytic enzymes), vacuoles, and cytoskeleton.

| Feature | Animal cell | Plant cell | Fungal cell |
|---|---|---|---|
| **Cell wall** | Absent | **Cellulose** cell wall | **Chitin** cell wall |
| **Plastids / chloroplasts** | Absent | Present in photosynthetic tissues | Absent (heterotrophic) |
| **Vacuoles** | Small, temporary (if present) | Large permanent **central vacuole** (turgor) | Present (often large vacuoles) |
| **Centrioles** | Present (in centrosome) | Absent in most flowering plants | Absent in most higher fungi |
| **Carbohydrate store** | Glycogen | Starch | Glycogen |

---

### Endosymbiotic Theory & Multicellularity [HL]

**Endosymbiotic theory [HL]** explains how **mitochondria** and **chloroplasts** originated roughly 1.5–2.0 billion years ago when a large ancestral anaerobic host cell engulfed smaller free-living prokaryotes by endocytosis — first an **aerobic bacterium** (evolving into the mitochondrion) and later, in the plant/algal lineage, a **photosynthetic cyanobacterium** (evolving into the chloroplast) — without digesting them, establishing a mutualistic symbiosis.

**Six lines of structural and molecular evidence supporting endosymbiosis [HL]:**
1. **Double membrane:** The inner membrane matches bacterial plasma membranes (carrying electron-transport enzymes), while the outer membrane resembles the host's endocytic vesicle.
2. **Circular naked DNA:** Both organelles possess their own circular DNA molecules lacking histones, just like bacteria.
3. **70S ribosomes:** Organelle ribosomes match prokaryotic 70S size and structure (and are inhibited by bacteria-targeting antibiotics like chloramphenicol), distinct from host 80S cytoplasmic ribosomes.
4. **Independent division by binary fission:** Mitochondria and chloroplasts replicate semi-autonomously by fission before host cell division.
5. **Prokaryotic size:** Both measure ~{{1}}–{{10}} μm, matching typical bacterial dimensions.
6. **Phylogenetic sequence homology:** Mitochondrial DNA/rRNA clusters closely with α-proteobacteria; chloroplast DNA/rRNA clusters with cyanobacteria.

**Cell differentiation & evolution of multicellularity [HL]:** Every somatic cell in a multicellular organism inherits the exact same genome, yet cells **differentiate** into distinct types (neurons, palisade mesophyll, epithelial cells) through **differential gene expression** (switching different subsets of genes on or off in response to chemical gradients and transcription factors). **Multicellularity evolved independently multiple times** across eukaryotes (animals, land plants, fungi, red algae, brown algae, green algae), conferring major selective advantages: larger body size (escaping microscopic predators), **division of labour** among specialized tissues, and longer organismal lifespan even as individual cells die and are replaced.`,
      diagram: `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side-by-side ultrastructure comparison of a prokaryotic bacterial cell with nucleoid and 70S ribosomes versus a eukaryotic cell showing double-membrane nucleus, 80S ribosomes, rough ER, Golgi, and endosymbiotic mitochondrion with circular DNA and 70S ribosomes.">
  <rect x="0" y="0" width="640" height="270" rx="12" fill="#f8fafc"/>
  <!-- Left Panel: Prokaryote -->
  <rect x="14" y="14" width="268" height="242" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="148" y="36" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">Prokaryotic Cell (0.5–5 μm)</text>
  <!-- Cell wall & plasma membrane -->
  <rect x="44" y="64" width="186" height="114" rx="52" fill="#fef3c7" stroke="#b45309" stroke-width="4"/>
  <rect x="52" y="72" width="170" height="98" rx="44" fill="#ecfeff" stroke="#0891b2" stroke-width="2"/>
  <!-- Flagellum -->
  <path d="M 230 121 Q 248 100 258 121 T 275 121" fill="none" stroke="#475569" stroke-width="2.5"/>
  <!-- Nucleoid tangled circular DNA -->
  <path d="M 92 105 C 110 85 150 92 145 118 C 140 144 98 148 95 122 C 92 98 135 96 158 112 C 175 124 152 152 122 144" fill="none" stroke="#7c3aed" stroke-width="2.2"/>
  <!-- Plasmid -->
  <circle cx="188" cy="100" r="10" fill="none" stroke="#db2777" stroke-width="2"/>
  <!-- 70S Ribosomes -->
  <circle cx="76" cy="106" r="3" fill="#0f172a"/><circle cx="72" cy="134" r="3" fill="#0f172a"/>
  <circle cx="184" cy="138" r="3" fill="#0f172a"/><circle cx="198" cy="126" r="3" fill="#0f172a"/>
  <circle cx="156" cy="90" r="3" fill="#0f172a"/>
  <!-- Labels -->
  <text x="148" y="200" font-size="10.5" font-weight="600" text-anchor="middle" fill="#7c3aed">Nucleoid (naked circular DNA)</text>
  <text x="148" y="216" font-size="10.5" text-anchor="middle" fill="#b45309">Peptidoglycan wall · Plasma membrane</text>
  <text x="148" y="232" font-size="10.5" text-anchor="middle" fill="#0f172a">70S ribosomes · Plasmids · Binary fission</text>
  <text x="148" y="246" font-size="10" text-anchor="middle" fill="#64748b">No nucleus or membrane-bound organelles</text>

  <!-- Right Panel: Eukaryote + Endosymbiotic Mitochondrion -->
  <rect x="296" y="14" width="330" height="242" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="461" y="36" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">Eukaryotic Cell (10–100 μm) &amp; Endosymbiosis [HL]</text>
  <!-- Cell boundary -->
  <rect x="314" y="50" width="294" height="148" rx="22" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/>
  <!-- Nucleus (double membrane) -->
  <circle cx="378" cy="116" r="38" fill="#ede9fe" stroke="#6d28d9" stroke-width="3" stroke-dasharray="14,3"/>
  <circle cx="378" cy="116" r="32" fill="#ddd6fe" stroke="#6d28d9" stroke-width="1.2"/>
  <circle cx="378" cy="116" r="11" fill="#5b21b6"/>
  <text x="378" y="168" font-size="10" font-weight="700" text-anchor="middle" fill="#5b21b6">Nucleus (histone DNA)</text>
  <!-- Rough ER & 80S Ribosomes -->
  <path d="M 424 84 Q 445 96 426 112 Q 448 124 426 142" fill="none" stroke="#0284c7" stroke-width="3"/>
  <circle cx="436" cy="92" r="2.8" fill="#0f172a"/><circle cx="439" cy="110" r="2.8" fill="#0f172a"/><circle cx="438" cy="128" r="2.8" fill="#0f172a"/>
  <text x="454" y="76" font-size="9.5" font-weight="700" fill="#0284c7">rER + 80S</text>
  <!-- Golgi -->
  <path d="M 446 154 Q 470 146 494 154" fill="none" stroke="#d97706" stroke-width="3"/>
  <path d="M 448 164 Q 470 156 492 164" fill="none" stroke="#d97706" stroke-width="3"/>
  <path d="M 452 174 Q 470 167 488 174" fill="none" stroke="#d97706" stroke-width="3"/>
  <text x="470" y="188" font-size="9.5" font-weight="700" text-anchor="middle" fill="#b45309">Golgi</text>
  <!-- Endosymbiotic Mitochondrion zoomed highlight -->
  <ellipse cx="544" cy="114" rx="48" ry="28" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M 504 114 Q 514 96 524 114 T 544 114 T 564 114 T 584 114" fill="none" stroke="#991b1b" stroke-width="2"/>
  <!-- Circular DNA & 70S inside mitochondrion -->
  <circle cx="534" cy="126" r="6" fill="none" stroke="#7c3aed" stroke-width="1.6"/>
  <circle cx="556" cy="103" r="2.2" fill="#0f172a"/><circle cx="564" cy="125" r="2.2" fill="#0f172a"/>
  <text x="544" y="156" font-size="9.5" font-weight="700" text-anchor="middle" fill="#b91c1c">Mitochondrion</text>
  <text x="544" y="168" font-size="8.8" text-anchor="middle" fill="#991b1b">2 membranes · 70S · ring DNA</text>
  <!-- Bottom summary -->
  <text x="461" y="218" font-size="10.5" font-weight="600" text-anchor="middle" fill="#0f172a">Compartmentalized organelles + 80S cytoplasmic ribosomes</text>
  <text x="461" y="234" font-size="10.5" text-anchor="middle" fill="#b91c1c">[HL] Mitochondria &amp; chloroplasts retain bacterial 70S &amp; circular DNA</text>
  <text x="461" y="248" font-size="10" text-anchor="middle" fill="#64748b">Linear histone-bound chromosomes · Mitosis</text>
</svg>`,
      diagramCaption:
        "Prokaryotes (left) keep naked circular DNA and 70S ribosomes in a single compartment; eukaryotes (right) compartmentalize organelles and harbour endosymbiotic mitochondria/chloroplasts retaining bacterial features.",
      workedExamples: [
        {
          title: "Magnification & Actual Size from an Electron Micrograph Scale Bar [SL]",
          problem:
            "A transmission electron micrograph of a mitochondrion displays a scale bar labelled **`0.5 μm`**. When measured with a ruler, the scale bar is **`25 mm`** long and the mitochondrion image measures **`60 mm`** from end to end. Calculate (a) the magnification of the micrograph and (b) the actual length of the mitochondrion in micrometres (μm).",
          steps: [
            "Convert the measured scale bar length from mm to μm so both lengths share identical units: {{25 * 1000 = 25000}} μm.",
            "Apply {{M = I / A}} to the scale bar: {{M = 25000 / 0.5 = 50000}} (magnification is ×50 000).",
            "Convert the measured mitochondrion image length to μm: {{60 * 1000 = 60000}} μm.",
            "Rearrange to find actual size {{A = I / M = 60000 / 50000 = 1.2}} μm.",
            "Sanity check by direct proportion: the mitochondrion image is {{60 / 25 = 2.4}} times the length of the {{0.5}} μm scale bar, and {{2.4 * 0.5 = 1.2}} μm — realistic for a mitochondrion!",
          ],
          answer: "(a) ×50 000; (b) 1.2 μm.",
          yourTurn: {
            question:
              "A light micrograph of an onion epidermal cell has a magnification of **×400**. The cell image measures **32 mm** long on the printed page. Calculate the actual length of the cell in micrometres (μm).",
            answer: { type: "number", value: 80, display: "80 μm" },
            solution:
              "Convert image size to μm: I = 32 mm × 1000 = 32 000 μm. Divide by magnification: A = I / M = 32 000 / 400 = 80 μm.",
          },
        },
      ],
      keyPoints: [
        "Electron microscopes (TEM for 2D internal ultrastructure; SEM for 3D surfaces) vastly outperform light microscopes in resolution (~0.1 nm vs ~200 nm) because electrons have much shorter wavelengths than visible light.",
        "Always convert image size (I) and actual size (A) into the same unit before using M = I / A (1 mm = 1000 μm = 10⁶ nm).",
        "Prokaryotes contain naked circular DNA in a nucleoid, 70S ribosomes, and a peptidoglycan wall (bacteria), dividing by binary fission; eukaryotes possess a double-membrane nucleus, 80S ribosomes, and membrane-bound organelles.",
        "Atypical cells (multinucleated striated muscle fibres, aseptate fungal hyphae, giant single-celled Acetabularia) show the diversity of cellular organization.",
        "[HL] Endosymbiosis is evidenced by mitochondria and chloroplasts having double membranes, circular naked DNA, 70S ribosomes, binary fission, bacterial size, and prokaryotic sequence homology.",
      ],
      whyItWorks:
        "Why does compartmentalization inside eukaryotic cells pay off despite the energy cost of building internal membranes? Separating incompatible reactions into organelles allows **localized optimal pH** (acidic pH ~4.5 inside lysosomes protects cytoplasmic proteins from digestion), concentrates **enzymes and substrates** to accelerate reaction rates, and provides vast folded **membrane surface area** (mitochondrial cristae, chloroplast thylakoids) for chemiosmotic ATP synthesis.",
      strategies: [
        "For EVERY magnification question, write the **MIA triangle** (`M = I / A`) and convert mm → μm (`× 1000`) or μm → nm (`× 1000`) *before* dividing — then run a **biological realism check** (bacteria ~1–5 μm, mitochondria ~1–3 μm, animal/plant cells ~10–100 μm, viruses ~20–300 nm).",
        "Never write that an electron microscope has 'better clarity' or 'zooms in more' — IB mark schemes specifically award marks for **higher resolution** (ability to distinguish two close points) due to the **shorter wavelength** of electrons.",
        "When identifying unknown TEM micrographs, check for a **nuclear envelope** and **mitochondria/ER** first: if absent with a dark diffuse central region, it is prokaryotic; if a thick wall plus chloroplasts/large vacuole appear, it is a plant cell.",
        "For [HL] **endosymbiosis** questions, cite at least **three structural/molecular traits** shared by mitochondria/chloroplasts and prokaryotes (double membrane, circular naked DNA, 70S ribosomes, binary fission) rather than merely saying 'they were eaten'.",
      ],
      thinkDeeper:
        "If mitochondria evolved from free-living bacteria, why can a purified mitochondrion no longer survive and reproduce independently in nutrient broth outside a eukaryotic cell? (Hint: think about gene transfer over 1.5 billion years of co-evolution!)",
    },

    // =========================================================================
    // SECTION 3: A2.1 Origins of Cells, RNA World & LUCA [HL]
    // =========================================================================
    {
      id: "origins-of-cells-hl",
      heading: "A2.1 Origins of Cells, RNA World & LUCA",
      level: "HL",
      discovery: {
        problem:
          "Modern cells face an evolutionary **chicken-and-egg paradox**: you need **DNA** to encode instructions for building **protein enzymes**, yet you need **protein enzymes** (DNA polymerase, helicase, RNA polymerase) to replicate and read **DNA**. Neither can operate without the other. How could the very first self-replicating molecular system get started before either DNA or modern protein enzymes existed?",
        idea:
          "Look at **RNA**! Unlike rigid double-stranded DNA, single-stranded RNA can both **store sequence information** (and guide complementary base-pairing replication) AND fold into complex 3D shapes that **catalyse chemical reactions** — called **ribozymes** (in fact, the peptide-bond-forming core of every modern ribosome is still an rRNA ribozyme, not a protein!). An early **RNA World** could both store blueprints and catalyse its own assembly until more stable DNA and more versatile proteins evolved.",
      },
      body: `### Prebiotic Earth & Abiotic Synthesis of Carbon Compounds [HL]

About 4.0–4.5 billion years ago (Ga), early Earth looked utterly alien compared to today:
- **No free atmospheric oxygen ({{O_2}}):** The atmosphere was anoxic/reducing (rich in water vapour, {{CO_2}}, {{N_2}}, {{CH_4}}, {{NH_3}}, {{H_2}}, and volcanic gases).
- **No ozone ({{O_3}}) layer:** Intense **ultraviolet (UV) radiation** bombarded Earth's surface alongside frequent **lightning**, meteorite impacts, and intense **volcanic/geothermal heat**.

These high-energy, oxygen-free conditions enabled the **spontaneous abiotic formation** of organic carbon compounds (amino acids, sugars, fatty acids, nitrogenous bases) that would immediately oxidize today.

**The Miller–Urey Experiment (1953):** Stanley Miller and Harold Urey simulated prebiotic Earth in a sealed glass apparatus:
1. Boiled water in a lower flask to generate steam (simulating warm primordial oceans).
2. Mixed water vapour with methane ({{CH_4}}), ammonia ({{NH_3}}), and hydrogen ({{H_2}}) in an upper chamber.
3. Discharged continuous electrical **sparks** across electrodes (simulating lightning).
4. Condensed the mixture back into a collection trap. Within one week, the clear liquid turned amber-brown and contained multiple **amino acids** and simple organic monomers.
*Evaluation / NOS:* Later geochemical evidence suggests Earth's early atmosphere may have been less strongly reducing (richer in {{CO_2}} and {{N_2}}), yet subsequent experiments under revised gas mixtures and volcanic-plume conditions still yield organic monomers — and carbonaceous meteorites also deliver amino acids from space.

---

### Why Spontaneous Generation Cannot Occur Today [HL]

Cells are the smallest units of self-sustaining life. **Louis Pasteur's swan-neck flask experiment (1859)** demonstrated that sterilized nutrient broth exposed to air (while dust-borne microbes stayed trapped in the curved glass neck) remained sterile indefinitely, proving that on modern Earth, **cells arise only from pre-existing cells**. Spontaneous origin of new cellular life is now prevented because:
1. Earth's **oxidizing {{O_2}}-rich atmosphere** rapidly breaks down exposed organic polymers.
2. Existing living microorganisms immediately consume any free organic monomers before complex protocells could assemble.

---

### Protocells, Membranes & the RNA World [HL]

For abiogenesis to transition from loose organic chemistry to a living cell, four milestones were required:
1. **Spontaneous synthesis** of simple organic monomers (amino acids, nucleotides, fatty acids).
2. **Polymerization** of monomers into polymers (likely catalysed on hot mineral clay surfaces like montmorillonite, which concentrate monomers and exclude water to favour condensation).
3. **Self-assembly of vesicles (protocells):** **Amphipathic** fatty acids (hydrophilic carboxyl head + hydrophobic hydrocarbon tail) spontaneously coalesce in water into **bilayer vesicles** enclosing an internal aqueous compartment. Compartmentalization maintains a distinct internal chemistry, concentrates reactants, and allows selective growth and division.
4. **Origin of self-replicating heredity (RNA World):** **RNA** acted as both the first genetic template (complementary base pairing) and the first biological catalyst (**ribozymes**, still preserved in the rRNA catalytic centre of all ribosomes today). Over evolutionary time, **DNA** replaced RNA for long-term genetic storage because deoxyribose lacks the reactive 2'-OH group and double-stranded DNA permits error-checking repair; **proteins** took over most catalysis because 20 chemically diverse amino acid R-groups offer far broader catalytic power than 4 nucleotides.

---

### LUCA, Hydrothermal Vents & Deep-Time Dating [HL]

All cellular life — Bacteria, Archaea, and Eukarya — descends from the **Last Universal Common Ancestor (LUCA)**, an already cellular organism (not the very first protocell, but the most recent shared ancestor of all surviving lineages, since rival early lineages went extinct).

- **Evidence for LUCA:** The **universal genetic code** (same triplet codons → same amino acids), universal use of **ATP** as energy currency, identical chirality (**L-amino acids** and **D-sugars**), shared core metabolic pathways (glycolysis), and conserved homologous genes (~355 core genes shared between deep bacterial and archaeal clades).
- **Alkaline hydrothermal vents ("white smokers"):** Genomic reconstruction of LUCA's conserved genes suggests LUCA was an **obligate anaerobe**, **thermophile** (heat-loving), and **chemoautotroph** fixing {{CO_2}} using {{H_2}} and iron–sulfur clusters. Deep-sea alkaline hydrothermal vents naturally provide warm, mineral-rich fluid, catalytic Fe–S surfaces, protection from lethal UV radiation, and **natural proton ({{H^+}}) concentration gradients** across thin porous mineral walls — mirroring modern chemiosmosis!
- **Estimating the timing of early life & LUCA:**
  - **Stromatolites** (layered fossilized microbial mats built by ancient prokaryotes): well-documented back to **~3.4–3.7 billion years ago (Ga)**.
  - **Isotopic carbon signatures:** Living enzymes preferentially fix lighter **¹²C** over **¹³C**; carbon-12-enriched graphite inclusions in ancient zircon/sedimentary rocks hint at biological carbon fixation by **~3.7–4.1 Ga**.
  - **Molecular clocks:** Comparing mutation accumulation in highly conserved ribosomal RNA and core genes places **LUCA** around **3.8–4.2 Ga**, soon after Earth's oceans stabilized.`,
      diagram: `<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-stage abiogenesis pathway from prebiotic Earth and Miller-Urey monomers, through amphipathic vesicle protocells and RNA World ribozymes, to LUCA at alkaline hydrothermal vents around 3.8 to 4.2 billion years ago.">
  <rect x="0" y="0" width="640" height="250" rx="12" fill="#f8fafc"/>
  <text x="320" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#0f172a">From Prebiotic Chemistry to LUCA (Abiogenesis Timeline) [HL]</text>
  <!-- Stage 1 -->
  <rect x="16" y="48" width="136" height="154" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="84" y="68" font-size="11.5" font-weight="700" text-anchor="middle" fill="#991b1b">1. Abiotic Monomers</text>
  <text x="84" y="84" font-size="9.5" text-anchor="middle" fill="#7f1d1d">~4.4–4.2 Ga</text>
  <polygon points="84,96 74,116 86,116 78,136 102,110 88,110" fill="#f59e0b"/>
  <text x="84" y="154" font-size="10" text-anchor="middle" fill="#334155">No O₂ · UV &amp; sparks</text>
  <text x="84" y="170" font-size="10" text-anchor="middle" fill="#334155">Miller–Urey: amino</text>
  <text x="84" y="184" font-size="10" text-anchor="middle" fill="#334155">acids &amp; organics</text>
  <!-- Arrow 1->2 -->
  <path d="M 156 125 L 172 125" stroke="#475569" stroke-width="2.5"/>
  <polygon points="172,120 180,125 172,130" fill="#475569"/>
  <!-- Stage 2 -->
  <rect x="182" y="48" width="136" height="154" rx="10" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="250" y="68" font-size="11.5" font-weight="700" text-anchor="middle" fill="#92400e">2. Vesicle Protocells</text>
  <text x="250" y="84" font-size="9.5" text-anchor="middle" fill="#78350f">Compartmentalization</text>
  <circle cx="250" cy="118" r="24" fill="#fef3c7" stroke="#d97706" stroke-width="4" stroke-dasharray="4,2"/>
  <circle cx="250" cy="118" r="15" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
  <text x="250" y="156" font-size="10" text-anchor="middle" fill="#334155">Amphipathic fatty</text>
  <text x="250" y="170" font-size="10" text-anchor="middle" fill="#334155">acid bilayers trap</text>
  <text x="250" y="184" font-size="10" text-anchor="middle" fill="#334155">internal chemistry</text>
  <!-- Arrow 2->3 -->
  <path d="M 322 125 L 338 125" stroke="#475569" stroke-width="2.5"/>
  <polygon points="338,120 346,125 338,130" fill="#475569"/>
  <!-- Stage 3 -->
  <rect x="348" y="48" width="136" height="154" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="416" y="68" font-size="11.5" font-weight="700" text-anchor="middle" fill="#166534">3. RNA World</text>
  <text x="416" y="84" font-size="9.5" text-anchor="middle" fill="#14532d">Heredity + Catalysis</text>
  <path d="M 392 126 C 392 98 416 94 416 112 C 416 128 438 128 438 106" fill="none" stroke="#16a34a" stroke-width="3"/>
  <circle cx="404" cy="105" r="4" fill="#15803d"/><circle cx="428" cy="122" r="4" fill="#15803d"/>
  <text x="416" y="154" font-size="10" text-anchor="middle" fill="#334155">Template replication</text>
  <text x="416" y="170" font-size="10" text-anchor="middle" fill="#334155">+ catalytic ribozymes</text>
  <text x="416" y="184" font-size="10" text-anchor="middle" fill="#334155">→ later DNA &amp; proteins</text>
  <!-- Arrow 3->4 -->
  <path d="M 488 125 L 504 125" stroke="#475569" stroke-width="2.5"/>
  <polygon points="504,120 512,125 504,130" fill="#475569"/>
  <!-- Stage 4 -->
  <rect x="514" y="48" width="110" height="154" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
  <text x="569" y="68" font-size="11.5" font-weight="700" text-anchor="middle" fill="#1e40af">4. LUCA</text>
  <text x="569" y="84" font-size="9.5" text-anchor="middle" fill="#1e3a8a">~3.8–4.2 Ga</text>
  <!-- Hydrothermal chimney -->
  <polygon points="548,138 560,104 578,104 590,138" fill="#64748b"/>
  <circle cx="569" cy="96" r="5" fill="#93c5fd"/><circle cx="563" cy="89" r="3" fill="#bfdbfe"/>
  <text x="569" y="154" font-size="9.8" text-anchor="middle" fill="#334155">Alkaline vents</text>
  <text x="569" y="168" font-size="9.8" text-anchor="middle" fill="#334155">Universal code</text>
  <text x="569" y="182" font-size="9.8" text-anchor="middle" fill="#334155">H⁺ gradients</text>
  <!-- Footer -->
  <text x="320" y="226" font-size="10.5" font-weight="600" text-anchor="middle" fill="#475569">Evidence: Stromatolites (~3.5–3.7 Ga) · ¹²C isotopic enrichment (~3.7–4.1 Ga) · 355+ conserved LUCA genes</text>
</svg>`,
      diagramCaption:
        "Abiogenesis progressed from abiotic monomer synthesis and fatty-acid protocells through a catalytic RNA World to LUCA at mineral-rich alkaline hydrothermal vents.",
      workedExamples: [
        {
          title: "RNA Sequence Space & Molecular-Clock Divergence [HL]",
          problem:
            "(a) Calculate the total number of distinct sequences possible for a prebiotic RNA oligonucleotide **10 nucleotides** long. (b) Two deeply branching prokaryotic clades differ at **60** neutral nucleotide sites in a conserved gene. Assuming a combined divergence rate of **15** substitutions per billion years (Ga) between the two lineages, estimate how long ago their last common ancestor lived.",
          steps: [
            "(a) Each of the 10 positions can hold any of **4** RNA bases (A, U, C, or G), so the total number of possible sequences is {{4^{10}}}.",
            "Compute {{4^{10} = 2^{20} = 1048576}} distinct RNA sequences — showing that even a tiny 10-base oligomer explores over a million structural variants!",
            "(b) Divide the observed neutral differences by the combined divergence rate: {{t = 60 / 15 = 4.0}} Ga (4.0 billion years ago).",
          ],
          answer: "(a) 1 048 576 distinct RNA sequences; (b) 4.0 Ga (4.0 billion years ago).",
          yourTurn: {
            question:
              "A catalytic ribozyme active site requires a specific core motif of **6** RNA nucleotides. How many distinct 6-nucleotide RNA sequences exist?",
            answer: { type: "number", value: 4096, display: "4096" },
            solution:
              "With 4 possible bases (A, U, C, G) at each of 6 positions, the number of distinct sequences is 4⁶ = 4096.",
          },
        },
      ],
      keyPoints: [
        "Prebiotic Earth was anoxic (no free O₂ or ozone), experiencing intense UV radiation, lightning, and volcanic heat that drove abiotic organic synthesis.",
        "Miller–Urey demonstrated that electrical sparks in a reducing gas mixture produce amino acids, though the exact prebiotic gas mix remains debated.",
        "Amphipathic fatty acids self-assemble into bilayer vesicles (protocells), maintaining an internal chemistry separated from external surroundings.",
        "RNA World resolves the DNA–protein paradox because RNA both stores genetic information and catalyses reactions as ribozymes (such as rRNA in modern ribosomes).",
        "LUCA (~3.8–4.2 Ga) is supported by the universal genetic code, ATP, shared metabolic pathways, alkaline hydrothermal vent proton gradients, stromatolites, and ¹²C enrichment.",
      ],
      whyItWorks:
        "Why do biologists consider **alkaline hydrothermal vents** more promising cradles for LUCA than sunlit surface puddles? Warm alkaline vent fluids ({{pH ≈ 9–11}}) emerging into mildly acidic early ocean water ({{pH ≈ 5–6}}) automatically create a **natural transmembrane {{H^+}} gradient** across iron–sulfur mineral pores — supplying continuous free energy for carbon fixation and protocell metabolism without needing light or evolved proton pumps.",
      strategies: [
        "Distinguish carefully between **LUCA** and the **first living cell**: LUCA was NOT the very first cell ever formed; it was the *last* common ancestor shared by all *surviving* lineages (Bacteria, Archaea, Eukarya), already possessing DNA, ribosomes, membranes, and the universal genetic code.",
        "In **RNA World** explanations, ALWAYS state BOTH roles explicitly: (1) **information storage / template replication** via complementary base pairing AND (2) **catalysis** via folded **ribozymes** (citing peptidyl transferase rRNA as a living molecular fossil).",
        "When evaluating **Miller–Urey**, balance its strength (experimental proof that organic monomers can form abiotically from simple inorganic gases) with a critical limitation (the exact reducing composition of early Earth's atmosphere is uncertain; polymers like proteins/nucleic acids were not directly formed).",
      ],
      thinkDeeper:
        "Modern DNA replication uses deoxyribonucleotides, yet cells synthesize deoxyribonucleotides *by chemically modifying ribonucleotides* using the enzyme ribonucleotide reductase — and DNA replication still requires short **RNA primers**! How do these two quirky biochemical facts reinforce the RNA World hypothesis?",
    },

    // =========================================================================
    // SECTION 4: A2.3 Structural Diversity & Rapid Evolution of Viruses [HL]
    // =========================================================================
    {
      id: "viruses-diversity-hl",
      heading: "A2.3 Structural Diversity, Replication & Rapid Evolution of Viruses",
      level: "HL",
      discovery: {
        problem:
          "Antibiotics such as penicillin and streptomycin kill bacteria effectively, yet doctors refuse to prescribe them for influenza or COVID-19. Even more puzzling, a bacteriophage can sit inert in a crystal jar for years without consuming ATP or dividing, yet destroy an entire flask of *E. coli* within an hour of meeting living cells. What structural absences explain both facts?",
        idea:
          "Viruses are **non-cellular obligate intracellular parasites**: they possess a **nucleic acid genome** enclosed in a **protein capsid**, but completely lack **peptidoglycan cell walls**, **70S ribosomes**, **cytoplasm**, and independent **metabolic enzymes**. Antibiotics target bacterial walls or 70S ribosomes that viruses do not have — and outside a living host cell, a virion cannot transcribe genes, synthesize proteins, or generate ATP on its own.",
      },
      body: `### Common Features & Structural Diversity of Viruses [HL]

Despite enormous structural variety, all viruses share key features:
- Very **small fixed size** (typically {{20}}–{{300}} nm, well below light-microscope resolution).
- **Genetic material** made of either **DNA or RNA** (never both), either **single-stranded (ss)** or **double-stranded (ds)**, linear or circular, sometimes segmented.
- A protective protein shell (**capsid**) built from repeating protein subunits (**capsomeres**).
- Complete dependence on a living host cell's ribosomes, tRNA, amino acids, nucleotides, and ATP (**obligate intracellular parasites**).

**Three IB Diploma Viral Case Studies:**

| Virus | Genome type | Envelope & surface features | Key structural & replication traits |
|---|---|---|---|
| **Bacteriophage lambda (λ)** | Linear **dsDNA** | **Non-enveloped**; icosahedral head, helical tail sheath, tail fibres | Infects *E. coli*; injects DNA through bacterial wall while capsid stays outside; switches between **lytic** and **lysogenic** cycles |
| **Coronavirus (SARS-CoV-2)** | Positive-sense **+ssRNA** (~30 kb) | **Enveloped** (host-derived phospholipid bilayer) studded with **spike (S) glycoproteins** | Spike binds host **ACE2** receptor; +ssRNA acts immediately as mRNA on host ribosomes; replicated by viral RNA-dependent RNA polymerase |
| **HIV (retrovirus)** | Two copies of **+ssRNA** (diploid) inside conical capsid | **Enveloped** with **gp120 / gp41** glycoproteins | Infects CD4⁺ **helper T-cells**; carries **reverse transcriptase** (synthesizes viral cDNA from RNA) and **integrase** (inserts viral DNA into host chromosome as a provirus) |

---

### Lytic vs Lysogenic Cycles in Bacteriophage Lambda [HL]

Bacteriophage λ is a **temperate phage** capable of two alternative replication pathways inside *E. coli*:

1. **Lytic cycle (rapid host destruction):**
   - **Attachment & entry:** Tail fibres bind specific *E. coli* surface receptors; viral dsDNA is injected into the cytoplasm.
   - **Biosynthesis:** Host chromosome is degraded; host RNA polymerase and 70S ribosomes transcribe and translate viral genes to copy phage DNA and assemble capsid/tail proteins.
   - **Assembly & lysis:** New virions self-assemble; phage **lysozyme** digests the peptidoglycan cell wall, bursting (lysing) the bacterium and releasing dozens to hundreds of progeny phages.
2. **Lysogenic cycle (dormant vertical transmission):**
   - After DNA injection, phage integrase inserts viral DNA directly into the host bacterial chromosome, forming a dormant **prophage**.
   - A phage **repressor protein** silences lytic genes so the bacterium survives and divides normally by binary fission, copying the prophage into every daughter cell.
   - Under host **stress** (e.g. UV damage, nutrient depletion), the repressor breaks down, the prophage **excises** from the host chromosome, and the phage switches into the **lytic cycle** to escape a dying host!

---

### Evidence for Multiple Convergent Origins of Viruses [HL]

Unlike cellular organisms — which all trace back to LUCA via universal ribosomal RNA genes — **no single gene is shared across all viral families**. Instead, viruses display radically different genome types (dsDNA, ssDNA, dsRNA, +ssRNA, −ssRNA, retroviruses), capsid geometries, and replication enzymes. This provides strong evidence for **multiple independent (convergent) origins**:
- **Progressive (escape) hypothesis:** Some viruses (especially retroviruses and small RNA viruses) evolved from mobile genetic elements (transposons / retrotransposons) that acquired protein coats and escaped cells.
- **Regressive (reduction) hypothesis:** Giant DNA viruses (e.g. Mimivirus, Pandoravirus) may have evolved by extreme reductive evolution from once-independent cellular parasites that shed ribosomes and metabolism.
- **Virus-first hypothesis:** Some ancient viral lineages may trace back to pre-cellular self-replicating nucleic acid elements co-evolving alongside protocells before LUCA.

---

### Rapid Evolution of Viruses: Influenza & HIV [HL]

Viruses evolve orders of magnitude faster than cellular organisms due to **huge population sizes**, **short replication cycles** (hours), and **high mutation rates**. Crucially, **RNA viruses** (influenza, HIV, SARS-CoV-2) mutate roughly 100–10 000× faster than DNA organisms because **RNA-dependent RNA polymerase (RdRp)** and **reverse transcriptase** lack **3' → 5' exonuclease proofreading** activity.

- **Influenza:** High point-mutation rate in genes encoding surface **haemagglutinin (HA)** and **neuraminidase (NA)** glycoproteins causes **antigenic drift** — gradually altering surface epitopes so antibodies from last year's infection or vaccine no longer bind effectively (requiring updated annual flu vaccines). Because influenza has a **segmented** (8-segment) RNA genome, co-infection of one host cell (e.g. in a pig or bird) by two distinct influenza strains allows **reassortment** of whole RNA segments — **antigenic shift** — abruptly generating novel pandemic strains.
- **HIV:** Reverse transcriptase makes ~1 error every 1–3 replication cycles across its ~9.7 kb genome, generating a genetically diverse swarm of variants inside a single patient within weeks. Mutations rapidly alter envelope **gp120** epitopes (evading antibodies and blocking vaccine design) and alter viral enzyme active sites (producing drug resistance). Clinicians therefore treat HIV with **combination antiretroviral therapy (ART / HAART)** — targeting multiple viral enzymes simultaneously so the probability of one virion evolving resistance to all drugs at once becomes vanishingly small.`,
      diagram: `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of three viral architectures (bacteriophage lambda, enveloped coronavirus, and HIV retrovirus with reverse transcriptase) alongside bacteriophage lambda lytic versus lysogenic replication pathways.">
  <rect x="0" y="0" width="640" height="270" rx="12" fill="#f8fafc"/>
  <!-- Left Panel: Structural Diversity -->
  <rect x="14" y="14" width="290" height="242" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="159" y="36" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">Viral Structural Diversity [HL]</text>
  <!-- 1. Bacteriophage Lambda -->
  <polygon points="62,58 84,70 84,96 62,108 40,96 40,70" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <path d="M 52 76 Q 62 70 72 76 T 52 90" fill="none" stroke="#1e40af" stroke-width="1.8"/>
  <rect x="57" y="108" width="10" height="34" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="57" y1="142" x2="36" y2="162" stroke="#1e3a8a" stroke-width="2"/>
  <line x1="67" y1="142" x2="88" y2="162" stroke="#1e3a8a" stroke-width="2"/>
  <line x1="62" y1="142" x2="46" y2="166" stroke="#1e3a8a" stroke-width="2"/>
  <line x1="62" y1="142" x2="78" y2="166" stroke="#1e3a8a" stroke-width="2"/>
  <text x="62" y="186" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1e40af">Phage λ</text>
  <text x="62" y="200" font-size="9.5" text-anchor="middle" fill="#475569">dsDNA</text>
  <text x="62" y="213" font-size="9.5" text-anchor="middle" fill="#475569">No envelope</text>

  <!-- 2. Coronavirus -->
  <circle cx="159" cy="110" r="34" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
  <path d="M 138 110 Q 148 94 159 110 T 180 110" fill="none" stroke="#b45309" stroke-width="2.2"/>
  <!-- Spike glycoproteins -->
  <line x1="159" y1="76" x2="159" y2="62" stroke="#dc2626" stroke-width="2.5"/><circle cx="159" cy="60" r="4" fill="#dc2626"/>
  <line x1="159" y1="144" x2="159" y2="158" stroke="#dc2626" stroke-width="2.5"/><circle cx="159" cy="160" r="4" fill="#dc2626"/>
  <line x1="125" y1="110" x2="111" y2="110" stroke="#dc2626" stroke-width="2.5"/><circle cx="109" cy="110" r="4" fill="#dc2626"/>
  <line x1="193" y1="110" x2="207" y2="110" stroke="#dc2626" stroke-width="2.5"/><circle cx="209" cy="110" r="4" fill="#dc2626"/>
  <line x1="135" y1="86" x2="125" y2="76" stroke="#dc2626" stroke-width="2.5"/><circle cx="123" cy="74" r="4" fill="#dc2626"/>
  <line x1="183" y1="86" x2="193" y2="76" stroke="#dc2626" stroke-width="2.5"/><circle cx="195" cy="74" r="4" fill="#dc2626"/>
  <text x="159" y="186" font-size="10.5" font-weight="700" text-anchor="middle" fill="#b45309">SARS-CoV-2</text>
  <text x="159" y="200" font-size="9.5" text-anchor="middle" fill="#475569">+ssRNA</text>
  <text x="159" y="213" font-size="9.5" text-anchor="middle" fill="#475569">Envelope + S</text>

  <!-- 3. HIV Retrovirus -->
  <circle cx="254" cy="110" r="34" fill="#fce7f3" stroke="#db2777" stroke-width="2.5"/>
  <polygon points="244,88 264,88 259,132 249,132" fill="#f9a8d4" stroke="#9d174d" stroke-width="1.6"/>
  <path d="M 250 96 Q 254 108 250 122" fill="none" stroke="#831843" stroke-width="1.8"/>
  <path d="M 258 96 Q 254 108 258 122" fill="none" stroke="#831843" stroke-width="1.8"/>
  <circle cx="254" cy="126" r="3.5" fill="#0f172a"/>
  <circle cx="254" cy="72" r="3.5" fill="#9d174d"/><circle cx="254" cy="148" r="3.5" fill="#9d174d"/>
  <circle cx="288" cy="96" r="3.5" fill="#9d174d"/><circle cx="288" cy="124" r="3.5" fill="#9d174d"/>
  <text x="254" y="186" font-size="10.5" font-weight="700" text-anchor="middle" fill="#9d174d">HIV</text>
  <text x="254" y="200" font-size="9.5" text-anchor="middle" fill="#475569">2× ssRNA + RT</text>
  <text x="254" y="213" font-size="9.5" text-anchor="middle" fill="#475569">Envelope + gp120</text>
  <text x="159" y="242" font-size="10" text-anchor="middle" fill="#64748b">No universal viral gene → multiple convergent origins</text>

  <!-- Right Panel: Lytic vs Lysogenic Switch -->
  <rect x="316" y="14" width="310" height="242" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="471" y="36" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">Phage λ: Lytic vs Lysogenic Cycles [HL]</text>
  <!-- Injection box -->
  <rect x="401" y="48" width="140" height="32" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
  <text x="471" y="68" font-size="11" font-weight="700" text-anchor="middle" fill="#1e40af">1. Injects dsDNA</text>
  <!-- Split arrows -->
  <path d="M 435 80 L 392 104" stroke="#dc2626" stroke-width="2"/>
  <path d="M 507 80 L 550 104" stroke="#16a34a" stroke-width="2"/>
  <!-- Lytic column -->
  <rect x="330" y="106" width="128" height="106" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="394" y="124" font-size="11" font-weight="700" text-anchor="middle" fill="#991b1b">Lytic Cycle</text>
  <text x="394" y="143" font-size="9.8" text-anchor="middle" fill="#334155">Host DNA degraded</text>
  <text x="394" y="160" font-size="9.8" text-anchor="middle" fill="#334155">Copy phage DNA &amp; coats</text>
  <text x="394" y="177" font-size="9.8" text-anchor="middle" fill="#334155">Assemble virions</text>
  <text x="394" y="196" font-size="10" font-weight="700" text-anchor="middle" fill="#dc2626">Host lysis → release</text>
  <!-- Lysogenic column -->
  <rect x="484" y="106" width="128" height="106" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="548" y="124" font-size="11" font-weight="700" text-anchor="middle" fill="#166534">Lysogenic Cycle</text>
  <text x="548" y="143" font-size="9.8" text-anchor="middle" fill="#334155">Integrates as prophage</text>
  <text x="548" y="160" font-size="9.8" text-anchor="middle" fill="#334155">Repressor silences lysis</text>
  <text x="548" y="177" font-size="9.8" text-anchor="middle" fill="#334155">Copied by binary fission</text>
  <text x="548" y="196" font-size="10" font-weight="700" text-anchor="middle" fill="#15803d">Dormant daughter cells</text>
  <!-- Induction arrow -->
  <path d="M 484 188 L 462 188" stroke="#d97706" stroke-width="2.5"/>
  <polygon points="462,183 454,188 462,193" fill="#d97706"/>
  <text x="471" y="232" font-size="10" font-weight="700" text-anchor="middle" fill="#b45309">Host stress (UV / starvation) induces excision → Lytic cycle</text>
  <text x="471" y="246" font-size="9.8" text-anchor="middle" fill="#64748b">RNA viruses lack proofreading → rapid antigenic drift &amp; resistance</text>
</svg>`,
      diagramCaption:
        "Viruses span diverse nucleic acid and envelope architectures (left); bacteriophage lambda toggles between rapid lytic destruction and dormant lysogenic prophage integration (right).",
      workedExamples: [
        {
          title: "Viral Lytic Amplification & RNA Polymerase Error Rate [HL]",
          problem:
            "(a) A single bacteriophage λ infects a dense *E. coli* culture and completes **3** consecutive lytic cycles with a burst size of **100** virions per infected host cell (assume every released virion infects a new cell). Calculate the total number of virions produced. (b) SARS-CoV-2 has a genome of **30 000** nucleotides and an RNA polymerase error rate of {{1.0 * 10^(-4)}} mutations per nucleotide copied. Calculate the expected average number of mutations per genome copy.",
          steps: [
            "(a) After {{k}} consecutive lytic cycles from {{N_0}} initial phage with burst size {{B}}, the virion count is {{N = N_0 * B^k}}.",
            "Substitute {{N_0 = 1}}, {{B = 100}}, {{k = 3}}: {{N = 1 * 100^3 = 1000000}} ({{1.0 * 10^6}}) virions.",
            "(b) Expected mutations per genome = genome length × error rate per nucleotide: {{30000 * 1.0 * 10^(-4) = 3.0}} mutations per copied genome.",
            "Note: real coronaviruses carry a rare partial proofreading enzyme (ExoN) that lowers their effective error rate slightly compared to influenza or HIV, yet massive global host numbers still generate rapid variant evolution.",
          ],
          answer: "(a) 1 000 000 virions; (b) 3.0 mutations per genome copy.",
          yourTurn: {
            question:
              "HIV has an RNA genome of **9700** nucleotides and reverse transcriptase introduces approximately {{3.0 * 10^(-5)}} errors per nucleotide copied. Calculate the expected average number of mutations per genome replication (give your answer to **2 decimal places**).",
            answer: { type: "number", value: 0.29, tolerance: 0.01, display: "0.29" },
            solution:
              "Expected mutations = 9700 × 3.0 × 10⁻⁵ = 0.291, which rounds to 0.29 mutations per replication cycle (nearly 1 in every 3 new HIV genomes carries a brand-new mutation!).",
          },
        },
      ],
      keyPoints: [
        "Viruses are small (20–300 nm) obligate intracellular parasites with a DNA or RNA genome and a protein capsid, lacking cytoplasm, ribosomes, and independent metabolism.",
        "Compare the three IB case studies: bacteriophage λ (non-enveloped dsDNA, complex head-tail), SARS-CoV-2 (enveloped +ssRNA with spike glycoproteins), and HIV (enveloped diploid ssRNA retrovirus carrying reverse transcriptase).",
        "Bacteriophage λ alternates between the lytic cycle (biosynthesis, assembly, host lysis) and the lysogenic cycle (prophage integration copied via host binary fission until stress triggers induction).",
        "Lack of any universal shared viral gene and extreme structural diversity support multiple convergent evolutionary origins of viruses.",
        "Rapid viral evolution arises from short generation times, huge burst sizes, and error-prone RNA polymerases / reverse transcriptase lacking proofreading — driving influenza antigenic drift/shift and HIV drug resistance.",
      ],
      whyItWorks:
        "Why does **combination antiretroviral therapy (HAART)** succeed against HIV where single-drug therapy fails within weeks? If resistance to one drug arises with probability {{10^(-5)}} per replication, millions of daily replications inside an infected host virtually guarantee resistant mutants will appear. Combining **three independent drugs** targeting different viral enzymes (e.g. reverse transcriptase, integrase, protease) forces a single virion to acquire three specific mutations simultaneously — reducing probability toward {{10^(-15)}}, which virtually halts viral escape.",
      strategies: [
        "Never describe HIV's enzyme as 'RNA polymerase' — write **reverse transcriptase** (which synthesizes complementary **DNA** from an **RNA** template, reversing the usual central-dogma direction).",
        "Distinguish **antigenic drift** (gradual accumulation of point mutations in HA/NA or spike proteins) from **antigenic shift** (abrupt reassortment of whole segmented RNA genomes during co-infection, e.g. influenza).",
        "When comparing **lytic** vs **lysogenic** cycles, explicitly name the **prophage** (integrated phage DNA in the host chromosome) and explain *why* lysogeny is advantageous when host bacteria are scarce or slowly dividing.",
      ],
      thinkDeeper:
        "Viruses carry genetic material and evolve by natural selection, yet most biologists classify them as non-living. Evaluate BOTH sides of this debate using cell theory and the properties of living organisms — could a giant DNA virus with >1000 genes blur the boundary?",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Why is a water molecule polar, and how do hydrogen bonds form between water molecules?",
        back: "Oxygen is more electronegative than hydrogen, creating unequal sharing of electrons (δ− on O, δ+ on H) in a bent molecule. A hydrogen bond is the weak electrostatic attraction between the δ+ hydrogen of one H₂O and the δ− oxygen of an adjacent H₂O.",
        level: "SL",
      },
      {
        front: "Distinguish cohesion from adhesion in water, giving one biological example of each.",
        back: "Cohesion is H-bonding between water molecules (enables continuous transpiration pull in xylem & surface tension for water striders). Adhesion is H-bonding between water and polar/charged surfaces (drives capillary action in soil and cellulose plant cell walls).",
        level: "SL",
      },
      {
        front: "How do buoyancy, viscosity, and thermal conductivity of water differ from air for marine mammals and diving birds?",
        back: "Water has much higher buoyancy (supports weight), higher viscosity (increases drag → streamlined bodies/flippers), and ~25× higher thermal conductivity (faster heat loss → blubber in ringed seal, insulating oil-coated plumage in black-throated loon).",
        level: "SL",
      },
      {
        front: "Compare the chemical structure of DNA and RNA across three features.",
        back: "1) Sugar: deoxyribose (H on C2') in DNA vs ribose (OH on C2') in RNA. 2) Bases: thymine (T) in DNA vs uracil (U) in RNA (both have A, C, G). 3) Strands: double-stranded antiparallel helix in DNA vs single-stranded in RNA.",
        level: "SL",
      },
      {
        front: "How do purines and pyrimidines pair in DNA, and how many hydrogen bonds hold each pair?",
        back: "Two-ring purines (A, G) always pair with one-ring pyrimidines (T, C) to keep helix diameter constant (~2.0 nm). A=T has 2 hydrogen bonds; C≡G has 3 hydrogen bonds.",
        level: "SL",
      },
      {
        front: "What did the Hershey–Chase experiment (1952) prove, and what isotopes were used?",
        back: "It proved DNA (not protein) is the genetic material. Phage protein coats were labelled with ³⁵S (stayed in supernatant after blending/centrifugation) and phage DNA with ³²P (entered E. coli cells in the pellet and passed to progeny).",
        level: "HL",
      },
      {
        front: "What is the structure and function of a eukaryotic nucleosome?",
        back: "~146–147 bp of negatively charged DNA wrapped ~1.65 turns around an octamer of 8 positively charged histone proteins, stabilized by an H1 linker histone. Compacts DNA into chromosomes and regulates transcription access.",
        level: "HL",
      },
      {
        front: "State the magnification formula and the metric conversions between mm, μm, and nm.",
        back: "M = I / A (Magnification = Image size ÷ Actual size, in identical units). 1 mm = 1000 μm (10³ μm); 1 μm = 1000 nm; 1 mm = 1 000 000 nm (10⁶ nm).",
        level: "SL",
      },
      {
        front: "Compare Light Microscopy, TEM, and SEM in resolution, specimen state, and image type.",
        back: "LM: ~200 nm resolution, living or dead specimens, colour. TEM: ~0.1–1 nm resolution, dead ultrathin sections in vacuum, 2D internal ultrastructure. SEM: ~3–10 nm resolution, dead metal-coated surfaces, 3D surface topography.",
        level: "SL",
      },
      {
        front: "Give three atypical eukaryotic structures that challenge the simplest view of cell theory.",
        back: "1) Striated skeletal muscle fibres (very long, multinucleated). 2) Aseptate fungal hyphae (continuous cytoplasm with many nuclei, no cross-walls). 3) Giant alga Acetabularia (huge 5–10 cm single cell with one nucleus).",
        level: "SL",
      },
      {
        front: "State four structural/molecular features that support the endosymbiotic origin of mitochondria and chloroplasts.",
        back: "1) Double membranes (inner prokaryotic, outer host vesicle). 2) Circular naked DNA lacking histones. 3) 70S ribosomes (bacterial size). 4) Semi-autonomous division by binary fission (plus ~1–10 μm bacterial size & sequence homology).",
        level: "HL",
      },
      {
        front: "Why does the RNA World hypothesis solve the DNA–protein origin paradox?",
        back: "RNA can simultaneously store hereditary sequence information (guiding complementary replication) AND fold into catalytic enzymes called ribozymes (still seen in rRNA forming peptide bonds in modern ribosomes).",
        level: "HL",
      },
      {
        front: "What is LUCA, and why are alkaline hydrothermal vents proposed as its habitat?",
        back: "LUCA is the Last Universal Common Ancestor of all surviving life (~3.8–4.2 Ga), evidenced by the universal genetic code and ~355 shared core genes. Alkaline vents provided heat, H₂/CO₂, Fe–S catalysts, UV shelter, and natural H⁺ gradients across mineral pores.",
        level: "HL",
      },
      {
        front: "Contrast the lytic and lysogenic cycles of bacteriophage lambda.",
        back: "Lytic: phage injects dsDNA, degrades host DNA, uses host machinery to build virions, and lyses (bursts) the bacterium. Lysogenic: phage DNA integrates into host chromosome as a dormant prophage copied during binary fission until stress induces excision into the lytic cycle.",
        level: "HL",
      },
      {
        front: "Why do RNA viruses like HIV and influenza evolve much faster than DNA organisms?",
        back: "Short replication cycles, huge burst sizes, and error-prone viral enzymes (RNA-dependent RNA polymerase / reverse transcriptase) that lack 3'→5' exonuclease proofreading — causing rapid antigenic drift and drug resistance.",
        level: "HL",
      },
      {
        front: "How does HIV replicate its genetic material inside a helper T-cell?",
        back: "HIV binds CD4 via gp120, fuses its envelope, releases two +ssRNA copies and reverse transcriptase, synthesizes viral double-stranded cDNA from RNA, and integrates it into host nuclear DNA using integrase.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Hydrogen bonds form BETWEEN adjacent polar water molecules (intermolecular), whereas polar covalent bonds hold O and H together WITHIN one water molecule.",
      "Cohesion = water-to-water (xylem pull, surface tension); Adhesion = water-to-polar-surface (capillary action in cell walls/soil).",
      "DNA uses deoxyribose, A/T/C/G, and is double-stranded antiparallel (5'→3' paired with 3'←5'); RNA uses ribose, A/U/C/G, and is single-stranded.",
      "A–T pairs have 2 H-bonds; C–G pairs have 3 H-bonds; purines (A, G — 2 rings) always pair with pyrimidines (T, C, U — 1 ring).",
      "Always convert mm, μm, and nm to the SAME unit before applying M = I / A (1 mm = 1000 μm; 1 μm = 1000 nm).",
      "Electron microscopes achieve ~1000× better resolution than light microscopes because electrons have a much shorter wavelength than visible light.",
      "Prokaryotes have naked circular DNA in a nucleoid, 70S ribosomes, peptidoglycan wall (bacteria), and divide by binary fission; eukaryotes have a double-membrane nucleus, histone-bound linear DNA, 80S ribosomes, and membrane-bound organelles.",
      "[HL] Endosymbiosis evidence: mitochondria and chloroplasts have double membranes, 70S ribosomes, circular naked DNA, and divide by binary fission.",
      "[HL] RNA World: RNA is both genetic template and catalytic ribozyme; LUCA (~3.8–4.2 Ga) is supported by the universal genetic code and conserved vent-adapted genes.",
      "[HL] Viruses are non-cellular obligate intracellular parasites (DNA or RNA + protein capsid); RNA viruses mutate rapidly because reverse transcriptase and RdRp lack proofreading.",
    ],
    misconceptions: [
      {
        wrong: "Hydrogen bonds are the covalent bonds holding oxygen and hydrogen together inside a single H₂O molecule.",
        right: "The O–H bonds inside one H₂O molecule are polar covalent bonds. Hydrogen bonds are weaker intermolecular attractions between the δ+ H of one water molecule and the δ− O of a neighbouring water molecule.",
        level: "SL",
      },
      {
        wrong: "Increasing the magnification of a light microscope indefinitely lets you see viruses and ribosomes.",
        right: "Resolution — not magnification — limits the smallest detail visible. Because visible light has wavelengths of 400–700 nm, light microscopes cannot resolve objects smaller than ~200 nm regardless of magnification.",
        level: "SL",
      },
      {
        wrong: "If a double-stranded DNA molecule has 20% guanine (G), then 20% of its base pairs are G–C base pairs.",
        right: "If 20% of all nucleotides are G, then another 20% are C — so G + C = 40% of all bases, meaning 40% of the base pairs are G–C pairs (and 60% are A–T pairs).",
        level: "SL",
      },
      {
        wrong: "Prokaryotes have no DNA or ribosomes because they lack organelles.",
        right: "All cells possess DNA and ribosomes. Prokaryotes have circular naked DNA in a nucleoid region (no nuclear envelope) and 70S ribosomes (smaller than eukaryotic 80S ribosomes).",
        level: "SL",
      },
      {
        wrong: "LUCA was the very first living cell to arise from abiotic chemistry on Earth.",
        right: "LUCA (Last Universal Common Ancestor) was already a relatively complex cellular organism with DNA, ribosomes, and membranes; earlier protocells and competing early lineages existed before LUCA and went extinct.",
        level: "HL",
      },
      {
        wrong: "All viruses descended from one single ancestral 'proto-virus' just as cells descended from LUCA.",
        right: "Viruses share no universal core gene across all families and have wildly different genome chemistries (dsDNA, ssRNA, retroviruses), pointing to multiple independent convergent origins.",
        level: "HL",
      },
      {
        wrong: "Antibiotics cure viral infections like influenza or COVID-19 by bursting the viral capsid.",
        right: "Antibiotics target prokaryotic structures and enzymes (peptidoglycan cell walls, 70S ribosomes) that viruses completely lack — so antibiotics have zero effect on viruses.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Forgetting to convert millimetres (mm) to micrometres (μm) in M = I / A — producing an answer that is off by a factor of 1000!",
      "Saying 'electron microscopes have higher magnification' when the IB mark scheme asks why ultrastructure is visible — ALWAYS state **higher resolution** due to **shorter wavelength** of electrons.",
      "Writing the complementary DNA strand in the 3' → 5' orientation when an HL question explicitly asks for the 5' → 3' sequence (forgetting to reverse the string).",
      "Mixing up Hershey–Chase isotopes: remember **³²P = DNA (Pellet)** and **³⁵S = Protein (Supernatant)**.",
      "Writing 'mitochondria have DNA' without specifying **circular naked DNA** (eukaryotic nuclei also have DNA — the endosymbiotic evidence is that mitochondrial DNA is *circular and lacks histones*, plus *70S ribosomes* and a *double membrane*).",
      "Describing RNA World solely as 'RNA came before DNA' without stating BOTH properties that make it viable: **information storage/replication** AND **catalytic ribozyme activity**.",
      "Confusing **antigenic drift** (point mutations via error-prone RNA polymerase) with **antigenic shift** (reassortment of segmented genomes during co-infection).",
      "Writing 'prokaryotes reproduce by mitosis' — prokaryotes divide by **binary fission**, never mitosis.",
    ],
    mnemonics: [
      {
        topic: "Purines vs Pyrimidines",
        device: "PURE As Gold (A, G = 2 rings) · CUT the PY (C, U, T = 1 ring)",
        explanation: "Purines (Adenine, Guanine) have 2 fused carbon–nitrogen rings; Pyrimidines (Cytosine, Uracil, Thymine) have 1 single ring — and notice 'Thymine', 'Cytosine', and 'Pyrimidine' all contain the letter Y!",
        level: "SL",
      },
      {
        topic: "Magnification Triangle",
        device: "I AM (I = A × M)",
        explanation: "Image size = Actual size × Magnification, so M = I / A and A = I / M. Always put I and A in the same units first!",
        level: "SL",
      },
      {
        topic: "Hershey–Chase Isotopes",
        device: "³²P → Phage DNA → Pellet  |  ³⁵S → Shell protein → Supernatant",
        explanation: "Both P-words go together (Phosphate in DNA ends up inside bacteria in the Pellet); both S-words go together (Sulfur in protein Shell stays outside in the Supernatant).",
        level: "HL",
      },
      {
        topic: "Endosymbiosis Evidence",
        device: "MAD-70B (Membranes ×2, Autonomous fission, DNA circular naked, 70S ribosomes, Bacterial size)",
        explanation: "Five quick exam-ready marks whenever an IB Paper 2 question asks you to outline the evidence for endosymbiotic origin of mitochondria or chloroplasts.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Transpiration up 100-Metre Giant Redwoods",
        detail: "Hydrogen-bonded cohesion holds unbroken water columns under negative pressure (tension) from California roots to sunlit needles over 100 m up, aided by adhesion to hydrophilic cellulose xylem walls.",
        emoji: "🌲",
      },
      {
        title: "Cryo-EM & Rapid COVID-19 Spike Structure Mapping",
        detail: "Within weeks of SARS-CoV-2 sequencing in early 2020, structural biologists used cryogenic electron microscopy (cryo-EM) at −180 °C to map the spike glycoprotein at ~0.35 nm resolution, guiding mRNA vaccine design.",
        emoji: "❄️",
      },
      {
        title: "Lost City Alkaline Hydrothermal Field (Mid-Atlantic Ridge)",
        detail: "Discovered in 2000, the towering carbonate chimneys of Lost City vent warm alkaline H₂-rich fluid into cooler ocean water — a modern living analogue of the natural proton-gradient chemistry proposed for LUCA.",
        emoji: "🌋",
      },
      {
        title: "Combination Antiretroviral Therapy (HAART) Against HIV",
        detail: "Because HIV reverse transcriptase lacks proofreading and mutates relentlessly, combining three drugs targeting distinct viral enzymes suppresses viral load below detection and prevents multi-drug resistance.",
        emoji: "💊",
      },
      {
        title: "James Webb Space Telescope & Habitable-Zone Water Signatures",
        detail: "Astrobiologists analyse starlight filtering through exoplanet atmospheres in the Goldilocks zone for water vapour absorption spectra — testing whether liquid water exists beyond Earth.",
        emoji: "🔭",
      },
    ],
    videos: [
      {
        title: "IB Biology A1.1 Water Properties & A1.2 Nucleic Acids (FA2025)",
        channel: "Cheryl Hickman / Sirius Revision",
        url: "https://www.youtube.com/results?search_query=IB+Biology+A1.1+Water+A1.2+Nucleic+Acids+2025",
      },
      {
        title: "IB Biology A2.2 Cell Structure, Microscopy & Magnification Calculations",
        channel: "Alex Lee / Revision Village",
        url: "https://www.youtube.com/results?search_query=IB+Biology+A2.2+Cell+Structure+Microscopy+Magnification",
      },
      {
        title: "IB Biology A2.1 Origins of Cells, Miller–Urey, RNA World & LUCA (HL)",
        channel: "Bioninja / Sirius Revision",
        url: "https://www.youtube.com/results?search_query=IB+Biology+A2.1+Origins+of+Cells+RNA+World+LUCA+HL",
      },
      {
        title: "IB Biology A2.3 Viruses: Lytic, Lysogenic Cycles, HIV & Rapid Evolution (HL)",
        channel: "Amoeba Sisters / IB Biology HL",
        url: "https://www.youtube.com/results?search_query=IB+Biology+A2.3+Viruses+Lytic+Lysogenic+HIV+HL",
      },
    ],
    formulas: [
      {
        name: "Magnification formula",
        formula: "{{M = I / A}}",
        note: "M = magnification (dimensionless); I = image size; A = actual size (must share identical units).",
        level: "SL",
      },
      {
        name: "Microscopy metric conversions",
        formula: "{{1}} mm = {{10^3}} μm = {{10^6}} nm",
        note: "Multiply by 1000 stepping down (mm → μm → nm); divide by 1000 stepping up (nm → μm → mm).",
        level: "SL",
      },
      {
        name: "Chargaff's base-pairing identities (dsDNA)",
        formula: "{{%A = %T}},  {{%C = %G}},  {{%A + %G = %T + %C = 50%}}",
        note: "Applies strictly to double-stranded DNA; single-stranded RNA/DNA need not satisfy %A = %U/%T.",
        level: "SL",
      },
      {
        name: "DNA hydrogen-bond count",
        formula: "{{H = 2N_{AT} + 3N_{GC}}}",
        note: "Each A–T base pair contributes 2 H-bonds; each G–C base pair contributes 3 H-bonds.",
        level: "SL",
      },
      {
        name: "Nucleic acid sequence diversity",
        formula: "{{N_{seq} = 4^n}}",
        note: "Number of distinct DNA or RNA sequences of length n nucleotides (4 base choices per site).",
        level: "SL",
      },
      {
        name: "Specific heat capacity of liquid water",
        formula: "{{c = 4.18}} J g⁻¹ °C⁻¹  ({{Q = m c ΔT}})",
        note: "High c buffers aquatic habitats and body temperatures against rapid thermal fluctuations.",
        level: "SL",
      },
      {
        name: "Microscope resolution limits (reference)",
        formula: "LM ≈ {{200}} nm  |  SEM ≈ {{3}}–{{10}} nm  |  TEM ≈ {{0.1}}–{{1}} nm",
        note: "Electron microscopes resolve ~1000× finer detail than light microscopes due to shorter wavelength.",
        level: "SL",
      },
      {
        name: "Nucleosome packaging repeat [HL]",
        formula: "{{L_{repeat} = 147 + L_{linker}}}",
        note: "146–147 bp wrapped ~1.65 turns around an 8-histone octamer + H1 linker histone + ~20–80 bp linker DNA.",
        level: "HL",
      },
      {
        name: "Exponential lytic viral amplification [HL]",
        formula: "{{N = N_0 * B^k}}",
        note: "Virion count after k consecutive lytic cycles from N₀ initial virions with burst size B per cell.",
        level: "HL",
      },
      {
        name: "Expected viral mutations per replication [HL]",
        formula: "{{E = μ * L}}",
        note: "Error rate μ (mutations per nucleotide copied) multiplied by viral genome length L (nucleotides).",
        level: "HL",
      },
    ],
  },
};
