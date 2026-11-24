import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER M1: Core SL — Water, Nucleic Acids & Cell Structure (15 MCQs)
  // answerIndex target spread: [2, 0, 3, 1, 0, 3, 2, 1, 3, 0, 1, 2, 0, 3, 1]
  // ===========================================================================
  {
    id: "a1-a2-unity-molecules-cells-m1",
    title: "Paper 1A · Core SL: Water, Nucleic Acids & Cell Structure",
    level: "SL",
    questions: [
      {
        id: "a1-a2-unity-molecules-cells-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "water-nucleic-acids",
        question:
          "Which type of attraction forms **between** neighbouring water molecules and directly accounts for water's cohesive strength in plant xylem vessels?",
        options: [
          "Non-polar covalent bonds formed by equal sharing of electron pairs",
          "Ionic attractions formed by complete transfer of valence electrons",
          "Hydrogen bonds between partially positive H and partially negative O atoms",
          "Hydrophobic interactions caused by exclusion of non-polar hydrocarbon tails",
        ],
        answerIndex: 2,
        hints: [
          "Distinguish intramolecular bonds inside one H₂O molecule from intermolecular attractions between two H₂O molecules.",
        ],
        explanation:
          "Unequal electronegativity inside each H₂O molecule creates a polar dipole (δ− on O, δ+ on H), allowing intermolecular **hydrogen bonds** to link adjacent water molecules into continuous cohesive columns. Covalent bonds occur *within* a single water molecule, not between separate water molecules.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "water-nucleic-acids",
        question:
          "Water climbs upward through narrow cellulose pores in plant leaf cell walls and porous soil even against gravity. Which property of water is primarily responsible for water clinging to the polar cellulose walls?",
        options: [
          "Adhesion of polar water molecules to hydrophilic charged or polar surfaces",
          "Low thermal conductivity preventing evaporation from the mesophyll surface",
          "High specific heat capacity stabilizing the temperature of soil water",
          "Hydrophobic repulsion driving water molecules away from cellulose microfibrils",
        ],
        answerIndex: 0,
        hints: [
          "Compare water attracting itself (cohesion) with water attracting a different polar substance (adhesion).",
        ],
        explanation:
          "**Adhesion** is hydrogen bonding between water molecules and polar/charged surfaces such as cellulose fibres or soil particles, driving capillary action. Cohesion binds water to water, while specific heat capacity governs thermal buffering rather than surface clinging.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "water-nucleic-acids",
        question:
          "Why does a ringed seal (*Pusa hispida*) swimming in Arctic seawater require a much thicker insulating layer of blubber than a terrestrial mammal of similar body mass living in air of the exact same temperature?",
        options: [
          "Liquid water has lower buoyancy than air, forcing continuous muscle exertion",
          "Liquid water has a lower specific heat capacity than air, cooling the skin faster",
          "Liquid water has lower viscosity than air, increasing convective wind chill",
          "Liquid water has much higher thermal conductivity than air, conducting body heat away rapidly",
        ],
        answerIndex: 3,
        hints: [
          "Compare the rate of heat transfer through closely packed liquid water molecules versus sparse gas molecules in air.",
          "Remember that water's thermal conductivity is roughly 25 times greater than that of air.",
        ],
        explanation:
          "Water conducts heat roughly 25 times faster than air because its hydrogen-bonded molecules are densely packed, causing rapid heat loss from warm-blooded marine animals. Water actually has *higher* buoyancy, *higher* viscosity, and *higher* specific heat capacity than air.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "water-nucleic-acids",
        question:
          "Which substance is **least** soluble in blood plasma and must therefore be packaged inside lipoprotein complexes for efficient circulatory transport?",
        options: [
          "Glucose molecules carrying multiple polar hydroxyl groups",
          "Cholesterol and triglycerides composed mainly of non-polar hydrocarbon chains",
          "Sodium and chloride ions carrying full positive and negative charges",
          "Polar amino acids with ionized amine and carboxyl groups",
        ],
        answerIndex: 1,
        hints: [
          "Water forms hydration shells around charged ions and polar molecules.",
          "Hydrophobic lipids lack polar regions capable of forming hydrogen bonds with water.",
        ],
        explanation:
          "**Cholesterol and triglycerides** are largely non-polar and hydrophobic, so water molecules cannot form stabilizing hydration shells around them; they travel inside lipoprotein droplets. Glucose, polar amino acids, and Na⁺/Cl⁻ ions all dissolve readily in aqueous plasma.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "water-nucleic-acids",
        question:
          "Which combination correctly lists the three chemical components covalently bonded to form a single **RNA nucleotide**?",
        options: [
          "Ribose pentose sugar, one phosphate group, and either A, U, C, or G",
          "Deoxyribose pentose sugar, one phosphate group, and either A, T, C, or G",
          "Ribose pentose sugar, one amino acid R-group, and either A, U, C, or G",
          "Deoxyribose pentose sugar, one fatty acid chain, and either A, U, C, or G",
        ],
        answerIndex: 0,
        hints: [
          "Recall the pentose sugar and pyrimidine base unique to RNA compared with DNA.",
        ],
        explanation:
          "An RNA nucleotide consists of the five-carbon sugar **ribose** (with an –OH on C2'), a **phosphate group** on C5', and a nitrogenous base (**A, U, C, or G**) on C1'. Deoxyribose and thymine (T) belong to DNA nucleotides, not RNA.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "water-nucleic-acids",
        question:
          "Chemical analysis of a double-stranded DNA sample shows that **29%** of all nitrogenous bases are **guanine (G)**. What percentage of the bases in this DNA sample are **thymine (T)**?",
        options: ["29%", "42%", "58%", "21%"],
        answerIndex: 3,
        hints: [
          "In double-stranded DNA, cytosine equals guanine (%C = %G).",
          "Subtract (%C + %G) from 100%, then divide equally between A and T.",
        ],
        explanation:
          "Because C pairs exclusively with G, %C = %G = 29%, giving %C + %G = 58%. The remaining 100% − 58% = 42% is split equally between A and T, so **%T = 21%**. Choosing 42% forgets to divide the A + T total by 2.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "water-nucleic-acids",
        question:
          "How is the **sugar–phosphate backbone** of a single DNA strand formed during polynucleotide synthesis?",
        options: [
          "Hydrogen bonds link the nitrogenous base of one nucleotide to the sugar of the next",
          "Hydrolysis reactions join adjacent deoxyribose rings directly by glycosidic bonds",
          "Condensation reactions form covalent phosphodiester bonds between 3' sugars and 5' phosphates",
          "Ionic attractions bind negatively charged phosphate groups directly to one another",
        ],
        answerIndex: 2,
        hints: [
          "Polymers in biology are built by removing a water molecule to forge a covalent bond.",
          "The backbone alternates sugar–phosphate–sugar–phosphate along each strand.",
        ],
        explanation:
          "Each step in polynucleotide elongation is a **condensation reaction** forming a strong covalent **phosphodiester bond** between the 3'-OH of one pentose sugar and the 5'-phosphate of the incoming nucleotide. Hydrogen bonds link opposite strands across bases, not the backbone.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "water-nucleic-acids",
        question:
          "When the human insulin gene is inserted into *Escherichia coli* bacteria, the bacterial ribosomes translate the exact same human insulin amino acid sequence. What fundamental feature of life does this demonstrate?",
        options: [
          "Prokaryotes and eukaryotes possess identical 80S ribosomes and nuclear envelopes",
          "The genetic code is universal across organisms, providing evidence of common ancestry",
          "Bacterial DNA lacks thymine and substitutes uracil during protein translation",
          "Human chromosomes are circular and naked like bacterial plasmids",
        ],
        answerIndex: 1,
        hints: [
          "Ask why an mRNA codon like AUG or GCU specifies the same amino acid in both bacteria and humans.",
          "Theme A connects universal molecular traits to shared evolutionary ancestry.",
        ],
        explanation:
          "Virtually every organism decodes the same 64 mRNA triplet codons into the same 20 amino acids (**universality of the genetic code**), strongly supporting descent from a common ancestor. Bacteria still use 70S (not 80S) ribosomes and lack a nuclear envelope.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "cell-structure-microscopy",
        question:
          "In a transmission electron micrograph printed at a magnification of **×6000**, a rod-shaped bacterium measures **24 mm** in length. What is the **actual length** of the bacterium?",
        options: ["0.25 μm", "0.40 μm", "40 μm", "4.0 μm"],
        answerIndex: 3,
        hints: [
          "Convert 24 mm to micrometres first: 1 mm = 1000 μm.",
          "Rearrange M = I / A to A = I / M.",
        ],
        explanation:
          "Convert image size to micrometres: I = 24 mm × 1000 = 24 000 μm. Then A = I / M = 24 000 / 6000 = **4.0 μm**, a realistic bacterial length. Dividing 24 by 6000 without unit conversion gives 0.004 mm (= 4.0 μm), whereas slipping by a factor of 10 produces 0.40 μm or 40 μm.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "cell-structure-microscopy",
        question:
          "Why can a **transmission electron microscope (TEM)** distinguish internal mitochondrial cristae and 25 nm ribosomes that remain completely invisible under a compound light microscope?",
        options: [
          "Electrons have a much shorter wavelength than visible light, giving far higher resolution",
          "Electron beams pass harmlessly through living cells without requiring dehydration",
          "TEM uses glass lenses with thicker curvature to refract visible light at higher angles",
          "TEM illuminates specimens with fluorescent antibodies that glow larger than 200 nm",
        ],
        answerIndex: 0,
        hints: [
          "Focus on the physical wave property that sets the limit of resolution.",
          "Visible light wavelengths are 400–700 nm, limiting light microscopes to ~200 nm resolution.",
        ],
        explanation:
          "**Resolution** depends on wavelength: fast-moving electrons have wavelengths thousands of times shorter than visible light, pushing TEM resolution down to ~0.1–1 nm. TEM specimens must be dead, dehydrated, and placed in a vacuum, and electron beams are focused by electromagnets rather than glass lenses.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "cell-structure-microscopy",
        question:
          "Which set of four structures is present in **all** living prokaryotic and eukaryotic cells?",
        options: [
          "Nuclear envelope, mitochondria, cytoplasm, and 80S ribosomes",
          "Plasma membrane, cytoplasm, DNA, and ribosomes",
          "Cellulose cell wall, plasma membrane, linear chromosomes, and Golgi apparatus",
          "Peptidoglycan cell wall, plasmids, nucleoid, and chloroplasts",
        ],
        answerIndex: 1,
        hints: [
          "Eliminate any structure restricted to eukaryotes (like nuclei or mitochondria) or restricted to plants/bacteria (like cellulose or peptidoglycan walls).",
        ],
        explanation:
          "Every living cell — prokaryotic or eukaryotic — has a **plasma membrane**, **cytoplasm**, **DNA**, and **ribosomes** (70S in prokaryotes, 80S in eukaryotic cytoplasm). Animal cells lack cell walls, and prokaryotes lack membrane-bound nuclei and mitochondria.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "cell-structure-microscopy",
        question:
          "A student examines an unknown eukaryotic organism under a microscope. Its cells contain a **chitin cell wall**, membrane-bound nuclei, mitochondria, and glycogen granules, but **no chloroplasts**. To which group does this organism belong?",
        options: [
          "Photosynthetic vascular plants",
          "Gram-positive prokaryotic bacteria",
          "Heterotrophic eukaryotic fungi",
          "Multicellular eukaryotic animals",
        ],
        answerIndex: 2,
        hints: [
          "Match the cell wall polysaccharide: plants use cellulose, bacteria use peptidoglycan, and fungi use chitin.",
          "Remember that animals lack cell walls altogether.",
        ],
        explanation:
          "**Fungi** are heterotrophic eukaryotes characterized by **chitin** cell walls, glycogen storage, membrane-bound nuclei, and absence of chloroplasts. Plants have cellulose walls and chloroplasts; bacteria are prokaryotic with peptidoglycan walls; animals lack cell walls.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "cell-structure-microscopy",
        question:
          "A scale bar on a high-power electron micrograph of a viral capsid is labelled **`200 nm`** and measures **`40 mm`** long with a ruler. What is the magnification of the micrograph?",
        options: ["×200 000", "×20 000", "×5000", "×2 000 000"],
        answerIndex: 0,
        hints: [
          "Convert both 40 mm and 200 nm into the exact same unit — e.g. both in μm or both in nm.",
          "40 mm = 40 000 μm and 200 nm = 0.2 μm.",
        ],
        explanation:
          "Converting both lengths to micrometres: I = 40 mm = 40 000 μm and A = 200 nm = 0.2 μm. Therefore M = I / A = 40 000 / 0.2 = **×200 000** (equivalently 40 000 000 nm / 200 nm). Misplacing one power of ten gives ×20 000 or ×2 000 000.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "cell-structure-microscopy",
        question:
          "Why are **aseptate fungal hyphae** and **striated skeletal muscle fibres** cited as atypical examples in cell theory?",
        options: [
          "They completely lack DNA and cannot synthesize structural proteins",
          "They divide exclusively by prokaryotic binary fission instead of nuclear division",
          "They possess peptidoglycan walls and 70S cytoplasmic ribosomes",
          "They contain many nuclei sharing a large continuous cytoplasm without dividing cell membranes",
        ],
        answerIndex: 3,
        hints: [
          "Cell theory's simplest textbook stereotype imagines each small cell containing a single nucleus inside its own membrane.",
          "Think about how muscle fibres form by fusing many embryonic cells and how aseptate hyphae lack cross-walls.",
        ],
        explanation:
          "Both **striated skeletal muscle fibres** and **aseptate fungal hyphae** are unusually large and **multinucleated** within continuous cytoplasm, challenging the simplistic rule that organisms are built strictly from small discrete single-nucleus cells. Both are true eukaryotes with DNA and 80S ribosomes.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "cell-structure-microscopy",
        question:
          "How do bacterial prokaryotic cells such as *Escherichia coli* reproduce asexually to produce two genetically identical daughter cells?",
        options: [
          "By mitosis using spindle microtubules attached to histone-bound linear chromosomes",
          "By binary fission after replicating their circular DNA and pinching inward",
          "By meiosis reducing diploid linear chromosomes to haploid gametes",
          "By budding enveloped virions directly from the nuclear pore complex",
        ],
        answerIndex: 1,
        hints: [
          "Mitosis and meiosis require a eukaryotic mitotic spindle and linear chromosomes.",
          "Recall the simple prokaryotic fission process in which circular DNA replicates and the cell pinches in two.",
        ],
        explanation:
          "Prokaryotes replicate their single circular naked chromosome and divide by **binary fission**, elongating the cell and pinching the plasma membrane and cell wall inward. Mitosis and meiosis occur exclusively in eukaryotes.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M2: SL & HL Extension — Microscopy, Molecular Evidence & Endosymbiosis (15 MCQs)
  // answerIndex target spread: [1, 3, 0, 2, 1, 0, 3, 2, 0, 2, 3, 1, 2, 0, 3]
  // ===========================================================================
  {
    id: "a1-a2-unity-molecules-cells-m2",
    title: "Paper 1A · SL & HL Extension: Ultrastructure, Endosymbiosis & Molecular Evidence",
    level: "SL",
    questions: [
      {
        id: "a1-a2-unity-molecules-cells-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "water-nucleic-acids",
        question:
          "Why do astrobiologists define the **Goldilocks (habitable) zone** around a star specifically in terms of orbital distance and surface temperature?",
        options: [
          "It marks the narrow distance where solar wind delivers gaseous methane and ammonia",
          "It defines the temperature range where liquid water can remain stable on a planet's surface",
          "It identifies the only orbital zone where radioactive phosphorus exists for DNA",
          "It indicates the exact distance where planetary gravity drops low enough to prevent oceans",
        ],
        answerIndex: 1,
        hints: [
          "Metabolic reactions as we know them depend on water being in one particular physical state.",
          "Too close to a star boils water away; too far freezes it solid.",
        ],
        explanation:
          "The **Goldilocks zone** is the range of distances from a host star where a rocky planet with suitable atmospheric pressure and gravity can maintain **liquid water** at its surface — too hot boils water to vapour, too cold locks it as ice. Sufficient gravity is actually required to *retain* water, not lose it.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "water-nucleic-acids",
        question:
          "In the **Hershey–Chase experiment (1952)**, bacteriophage T2 grown in medium containing radioactive **³²P** infected *E. coli*, was agitated in a blender, and centrifuged. Where was most ³²P radioactivity detected, and what did it prove?",
        options: [
          "In the liquid supernatant, proving phage protein coats stay outside the bacterium",
          "In the bacterial pellet, proving sulfur-containing viral enzymes direct phage assembly",
          "Equally split between pellet and supernatant, proving both protein and DNA enter together",
          "In the bacterial pellet, proving viral DNA enters the host cell as the genetic material",
        ],
        answerIndex: 3,
        hints: [
          "Phosphorus is abundant in the DNA sugar–phosphate backbone but absent from phage capsid proteins.",
          "Centrifugation spins dense bacterial cells down into the pellet while light empty phage coats stay in the supernatant.",
        ],
        explanation:
          "Because **³²P** labels DNA's phosphate backbone (not protein), finding **³²P concentrated inside the bacterial pellet** — and later in progeny phages — proved that **DNA** enters the host cell and carries genetic instructions. In the parallel trial, **³⁵S**-labelled protein remained in the supernatant.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "water-nucleic-acids",
        question:
          "How did Erwin **Chargaff's** biochemical measurements of base composition across multiple species falsify the **tetranucleotide hypothesis**?",
        options: [
          "They showed that (A + T) : (C + G) ratios vary widely across species rather than staying fixed at 25% each",
          "They showed that RNA contains deoxyribose rather than ribose in mammalian liver nuclei",
          "They showed that total purines always exceed total pyrimidines by a 2 : 1 ratio in eukaryotes",
          "They showed that bacterial DNA contains uracil paired covalently with guanine",
        ],
        answerIndex: 0,
        hints: [
          "The tetranucleotide hypothesis claimed DNA was a monotonous repeating unit of A-T-C-G with 25% of each base.",
          "Chargaff found %A = %T and %C = %G, yet species differed dramatically in %GC vs %AT.",
        ],
        explanation:
          "The tetranucleotide hypothesis predicted identical 25% proportions of A, T, C, and G in all organisms (implying DNA was too repetitive to store complex genes). Chargaff proved that while %A = %T and %C = %G, the **(A + T) : (C + G) ratio varies greatly between species**, confirming DNA has sequence diversity.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "water-nucleic-acids",
        question:
          "A short double-stranded DNA duplex contains **120 base pairs**, of which **45 base pairs** are **G–C pairs**. How many hydrogen bonds hold the two strands together across the entire duplex?",
        options: ["240", "255", "285", "315"],
        answerIndex: 2,
        hints: [
          "Find the number of A–T base pairs by subtracting 45 from 120.",
          "Multiply A–T pairs by 2 hydrogen bonds and G–C pairs by 3 hydrogen bonds.",
        ],
        explanation:
          "There are 45 G–C base pairs and 120 − 45 = 75 A–T base pairs. Total hydrogen bonds = (45 × 3) + (75 × 2) = 135 + 150 = **285**. Counting 2 H-bonds for every pair gives 240, while swapping 2 and 3 gives 315.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "water-nucleic-acids",
        question:
          "Why must a **purine** always pair with a **pyrimidine** across the DNA double helix?",
        options: [
          "Purines carry positively charged phosphates that attract negatively charged pyrimidines",
          "Pairing a two-ring base with a one-ring base preserves a uniform helix diameter (~2.0 nm)",
          "Only purines contain covalent phosphodiester bonds capable of attaching to deoxyribose",
          "Pyrimidines always form four hydrogen bonds whenever paired with another pyrimidine",
        ],
        answerIndex: 1,
        hints: [
          "Compare the number of carbon–nitrogen rings in purines (A, G) versus pyrimidines (T, C).",
          "Imagine what would happen to the spacing between the two sugar–phosphate backbones if two big rings or two small rings paired.",
        ],
        explanation:
          "Purines (adenine and guanine) have **two fused rings** and pyrimidines (thymine and cytosine) have **one ring**. Pairing one purine with one pyrimidine spans three rings across every rung, maintaining a **uniform ~2.0 nm helix width** without bulges (purine–purine) or pinches (pyrimidine–pyrimidine).",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Describe",
        guideRef: "water-nucleic-acids",
        question:
          "Which statement accurately describes the structure and electrostatic stabilization of a **eukaryotic nucleosome**?",
        options: [
          "Negatively charged DNA wraps ~1.65 turns around an octamer of positively charged histones, stabilized by H1",
          "Positively charged DNA wraps around four negatively charged phospholipid subunits inside the nucleoid",
          "Single-stranded RNA wraps around bacterial 70S ribosomal proteins to prevent transcription",
          "Histone proteins form covalent peptide bonds directly to nitrogenous bases inside the double helix",
        ],
        answerIndex: 0,
        hints: [
          "Recall the electric charge on DNA's phosphate groups versus basic lysine/arginine amino acids in histones.",
          "Count the core histones in the bead (octamer = 8) plus the external linker histone.",
        ],
        explanation:
          "In eukaryotic chromatin, ~146–147 bp of **negatively charged DNA** (due to phosphate groups) wraps ~1.65 turns around an **octamer of 8 positively charged histone proteins**, clamped by an **H1 linker histone**. Histones bind electrostatically, not via covalent bonds to bases.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "cell-structure-microscopy",
        question:
          "A cell biologist wants to determine the atomic-level **3D native structure** of a fragile viral surface protein in aqueous solution without growing protein crystals or coating it in heavy metal. Which microscopy advance is best suited?",
        options: [
          "Bright-field compound light microscopy using methylene blue stain",
          "Scanning electron microscopy (SEM) of a gold-sputtered specimen",
          "Simple phase-contrast microscopy of living tissue culture",
          "Cryogenic electron microscopy (cryo-EM) of flash-frozen vitrified samples",
        ],
        answerIndex: 3,
        hints: [
          "Look for the technique that rapidly freezes samples in vitreous ice to preserve native protein conformations at sub-nanometre resolution.",
          "Contrast standard SEM surface metal coating against cryogenic flash-freezing.",
        ],
        explanation:
          "**Cryogenic electron microscopy (cryo-EM)** flash-freezes aqueous protein complexes at ~−180 °C in non-crystalline ice and reconstructs near-atomic 3D native structures without crystal growth or metal coating. SEM resolves 3D surfaces at ~3–10 nm and requires metal sputter-coating; light microscopy is limited to ~200 nm.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "water-nucleic-acids",
        question:
          "One strand of a double-stranded DNA molecule has the base sequence **`5'-GCTATG-3'`**. What is the sequence of the complementary DNA strand written in the **`5' → 3'`** direction?",
        options: [
          "5'-CGATAC-3'",
          "5'-GUAUGC-3'",
          "5'-CATAGC-3'",
          "5'-GTATCG-3'",
        ],
        answerIndex: 2,
        hints: [
          "First pair each base directly beneath the given strand to get the antiparallel 3' → 5' strand.",
          "Then reverse the string completely so you read it from 5' to 3'!",
        ],
        explanation:
          "Pairing antiparallel beneath `5'-GCTATG-3'` yields `3'-CGATAC-5'`. Reversing that strand so it reads in the **`5' → 3'`** direction gives **`5'-CATAGC-3'`**. Choosing `5'-CGATAC-3'` is the classic mistake of forgetting to reverse the antiparallel strand.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "cell-structure-microscopy",
        question:
          "Which microscopy technique splits a rapidly frozen cell membrane along its **hydrophobic phospholipid tail interior**, revealing embedded integral transmembrane proteins as bumps and pits?",
        options: [
          "Freeze-fracture electron microscopy",
          "Standard bright-field light microscopy",
          "Immunofluorescence antibody staining",
          "Gram-stain oil-immersion microscopy",
        ],
        answerIndex: 0,
        hints: [
          "The hydrophobic middle of the phospholipid bilayer is the mechanically weakest plane when frozen tissue is fractured with a cold knife.",
          "Splitting along this frozen plane leaves transmembrane proteins visible as bumps and pits.",
        ],
        explanation:
          "**Freeze-fracture electron microscopy** cleaves frozen cells along the weak hydrophobic plane between the two phospholipid monolayers, providing historic visual proof of integral proteins spanning the fluid mosaic membrane. Immunofluorescence tracks specific tagged proteins with fluorescent dyes.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "cell-structure-microscopy",
        question:
          "Which observation provides the **strongest** direct evidence that **mitochondria** originated from engulfed free-living aerobic prokaryotes?",
        options: [
          "Mitochondria synthesize ATP exclusively during anaerobic glycolysis in the cytoplasm",
          "Mitochondria contain linear histone-bound chromosomes enclosed by nuclear pore complexes",
          "Mitochondria possess double membranes, circular naked DNA, 70S ribosomes, and divide by binary fission",
          "Mitochondria are surrounded by a rigid peptidoglycan wall identical to plant cell walls",
        ],
        answerIndex: 2,
        hints: [
          "Recall the prokaryotic hallmarks still preserved inside eukaryotic mitochondria and chloroplasts.",
          "Check ribosome size (70S vs 80S), DNA topology, membrane count, and division mechanism.",
        ],
        explanation:
          "Endosymbiotic theory is strongly supported by mitochondria retaining **double membranes** (inner bacterial + outer host vesicle), **circular naked DNA**, **70S ribosomes**, and independent **binary fission**. Mitochondria have neither peptidoglycan walls nor linear histone-bound chromosomes.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "cell-structure-microscopy",
        question:
          "Biologists infer that **mitochondria** were acquired by ancestral eukaryotes *before* **chloroplasts**. Which evolutionary distribution best supports this sequence?",
        options: [
          "All living bacteria possess chloroplasts, whereas only archaea possess aerobic mitochondria",
          "Chloroplasts divide by eukaryotic mitosis, whereas mitochondria divide by bacterial fission",
          "Plant cells permanently discard all mitochondria once chloroplasts mature inside green leaves",
          "Almost all eukaryotes possess mitochondria, whereas only photosynthetic lineages possess chloroplasts",
        ],
        answerIndex: 3,
        hints: [
          "Think about which organelle is universally shared across animals, fungi, plants, and protists versus restricted to one subset.",
          "A trait shared by virtually all eukaryotes was acquired earlier in the common eukaryotic ancestor.",
        ],
        explanation:
          "Because almost **all eukaryotes** (animals, fungi, plants, algae) possess mitochondria (or mitochondrial remnants), aerobic endosymbiosis must have occurred early in the common ancestor of eukaryotes, whereas **chloroplasts** were acquired later in a lineage leading to algae and plants.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "cell-structure-microscopy",
        question:
          "A human motor neuron and a human pancreatic beta cell carry the exact same nuclear genome, yet look and function completely differently. What process accounts for this **cell differentiation**?",
        options: [
          "Each cell deletes the unused genes permanently from its chromosomes during mitosis",
          "Different subsets of genes are switched on or off via differential gene expression",
          "Neurons receive maternal DNA only while pancreatic cells receive paternal DNA only",
          "Pancreatic cells replace their 80S ribosomes with prokaryotic 70S ribosomes",
        ],
        answerIndex: 1,
        hints: [
          "All diploid somatic cells retain the complete genome (totipotent cloning proves genes are not deleted).",
          "Focus on which genes are transcribed and translated in each specialized tissue.",
        ],
        explanation:
          "**Cell differentiation** occurs via **differential gene expression**: regulatory transcription factors and epigenetic signals activate specific genes (e.g. insulin in pancreatic beta cells; neurotransmitter channels in neurons) while silencing others, even though the DNA sequence remains identical.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "cell-structure-microscopy",
        question:
          "The schematic below represents a transmission electron micrograph of a chloroplast showing measured printed lengths on the page. What is the **actual length** of the chloroplast?",
        diagram: `<svg viewBox="0 0 420 155" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chloroplast micrograph schematic showing measured chloroplast length of 55 millimetres and a printed scale bar of 20 millimetres representing 2 micrometres.">
  <rect x="0" y="0" width="420" height="155" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <ellipse cx="210" cy="64" rx="135" ry="34" fill="#dcfce7" stroke="#15803d" stroke-width="2.5"/>
  <ellipse cx="210" cy="64" rx="128" ry="28" fill="none" stroke="#16a34a" stroke-width="1.2"/>
  <!-- Grana stacks -->
  <rect x="135" y="48" width="24" height="6" rx="2" fill="#15803d"/><rect x="135" y="56" width="24" height="6" rx="2" fill="#15803d"/><rect x="135" y="64" width="24" height="6" rx="2" fill="#15803d"/>
  <rect x="198" y="50" width="24" height="6" rx="2" fill="#15803d"/><rect x="198" y="58" width="24" height="6" rx="2" fill="#15803d"/><rect x="198" y="66" width="24" height="6" rx="2" fill="#15803d"/>
  <rect x="260" y="48" width="24" height="6" rx="2" fill="#15803d"/><rect x="260" y="56" width="24" height="6" rx="2" fill="#15803d"/><rect x="260" y="64" width="24" height="6" rx="2" fill="#15803d"/>
  <line x1="159" y1="60" x2="198" y2="60" stroke="#166534" stroke-width="1.6"/>
  <line x1="222" y1="60" x2="260" y2="60" stroke="#166534" stroke-width="1.6"/>
  <!-- Dimension line for chloroplast = 55 mm -->
  <line x1="75" y1="112" x2="345" y2="112" stroke="#0f172a" stroke-width="1.6"/>
  <line x1="75" y1="106" x2="75" y2="118" stroke="#0f172a" stroke-width="1.6"/>
  <line x1="345" y1="106" x2="345" y2="118" stroke="#0f172a" stroke-width="1.6"/>
  <text x="210" y="128" font-size="11.5" font-weight="700" text-anchor="middle" fill="#0f172a">Measured image length = 55 mm</text>
  <!-- Scale bar = 20 mm representing 2 um -->
  <line x1="295" y1="22" x2="393" y2="22" stroke="#b91c1c" stroke-width="3.5"/>
  <text x="344" y="15" font-size="10.5" font-weight="700" text-anchor="middle" fill="#b91c1c">2 μm (measures 20 mm)</text>
</svg>`,
        options: ["2.75 μm", "11.0 μm", "5.5 μm", "0.55 μm"],
        answerIndex: 2,
        hints: [
          "First find the magnification from the scale bar: M = 20 000 μm ÷ 2 μm.",
          "Alternatively, use direct proportion: (55 mm ÷ 20 mm) × 2 μm.",
        ],
        explanation:
          "From the scale bar, M = 20 000 μm / 2 μm = ×10 000. Thus the chloroplast's actual length is A = 55 000 μm / 10 000 = **5.5 μm** (or directly (55 / 20) × 2 μm = 5.5 μm). Forgetting to multiply by 2 μm gives 2.75 μm.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "cell-structure-microscopy",
        question:
          "Why does a plant cell retain rigidity when placed in fresh rainwater, whereas an animal red blood cell bursts (lyses)?",
        options: [
          "The plant cell has a high-tensile cellulose cell wall that resists osmotic expansion",
          "The plant plasma membrane is completely impermeable to liquid water molecules",
          "Animal red blood cells have large permanent central vacuoles that overfill rapidly",
          "Plant cells lack internal cytoplasm and therefore cannot experience osmotic water influx",
        ],
        answerIndex: 0,
        hints: [
          "Compare the outermost structural layer surrounding a plant cell versus an animal cell.",
          "Think about which polysaccharide gives plant cells high tensile strength to withstand turgor pressure.",
        ],
        explanation:
          "Water enters both cells by osmosis in hypotonic rainwater, but the plant cell's strong **cellulose cell wall** exerts inward wall pressure (turgor) preventing lysis. Animal cells lack cell walls, so unchecked swelling ruptures the plasma membrane.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "cell-structure-microscopy",
        question:
          "Phylogenetic analyses reveal that **multicellularity** evolved independently in animals, land plants, fungi, and several algal clades. Which evolutionary advantage best explains why multicellularity evolved repeatedly?",
        options: [
          "Multicellular organisms eliminate all genetic mutations during DNA replication",
          "Multicellularity allows cells to abandon eukaryotic organelles and revert to binary fission",
          "Multicellular organisms require no energy input because surface area exceeds volume",
          "Specialization enables division of labour, larger predator-evading size, and longer lifespan",
        ],
        answerIndex: 3,
        hints: [
          "Think of what differentiated tissues can achieve together that a lone microscopic cell cannot.",
          "Consider predator avoidance, cell replacement, and metabolic division of labour.",
        ],
        explanation:
          "Repeated independent evolution of multicellularity was favoured by **division of labour** among differentiated cell types, **larger body size** (reducing predation by phagocytic unicells), and **longer organismal lifespan** through replacement of damaged cells. Multicellularity actually *decreases* overall SA:V ratio and still requires ATP.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M3: HL Mastery — Origins of Cells, Viruses & Experimental Data (15 MCQs)
  // answerIndex target spread: [3, 1, 2, 0, 2, 1, 0, 3, 1, 2, 0, 3, 1, 2, 0]
  // ===========================================================================
  {
    id: "a1-a2-unity-molecules-cells-m3",
    title: "Paper 1A · HL Mastery: Origins of Cells, Viruses & Experimental Data",
    level: "HL",
    questions: [
      {
        id: "a1-a2-unity-molecules-cells-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "origins-of-cells-hl",
        question:
          "Why could simple carbon compounds form spontaneously on **prebiotic Earth (~4.2 Ga)** yet cannot accumulate abiotically to generate brand-new cells on Earth today?",
        options: [
          "Prebiotic Earth had an ozone shield and abundant oxygen that accelerated monomer formation",
          "Modern Earth lacks liquid water and volcanic heat sources needed for chemical reactions",
          "Prebiotic Earth had abundant bacterial decomposers that synthesized amino acids in oceans",
          "Modern Earth has an oxidizing O₂-rich atmosphere and existing microbes that rapidly degrade or consume free organics",
        ],
        answerIndex: 3,
        hints: [
          "Compare two modern barriers to spontaneous abiogenesis: atmospheric chemistry and existing living organisms.",
          "Early Earth lacked both free O₂ (an oxidizing agent) and living scavengers.",
        ],
        explanation:
          "Early Earth's anoxic atmosphere (no free O₂ or ozone) allowed UV radiation and lightning to drive abiotic monomer synthesis without oxidative breakdown. Today, **free atmospheric O₂** oxidizes exposed organic precursors and **ubiquitous living microbes** immediately consume any free organic molecules.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "origins-of-cells-hl",
        question:
          "In the **Miller–Urey experiment (1953)**, electrical sparks discharged through water vapour, {{CH_4}}, {{NH_3}}, and {{H_2}} produced amino acids. What is a major scientific **limitation** when extrapolating this result to the origin of the first cells?",
        options: [
          "The experiment accidentally produced living bacteria rather than non-living organic molecules",
          "The exact reducing gas mix of early Earth is uncertain, and simple monomers alone do not form self-replicating polymers or cells",
          "The experiment failed to produce any carbon-containing organic molecules after one week",
          "The glass apparatus excluded water vapour, preventing condensation reactions from being tested",
        ],
        answerIndex: 1,
        hints: [
          "Think about both the assumed prebiotic atmospheric gases AND the gap between individual amino acids and living cells.",
          "Geochemists now debate whether early Earth had a strongly reducing atmosphere or more CO₂ and N₂.",
        ],
        explanation:
          "While Miller–Urey proved organic monomers (amino acids) can form abiotically, geochemical models debate whether early Earth's atmosphere was as strongly reducing as assumed (it may have held more CO₂ and N₂), and forming **monomers** is only the first step toward **polymerization, membranes, and heredity**.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "origins-of-cells-hl",
        question:
          "Why was the spontaneous self-assembly of **amphipathic fatty acids** into bilayer vesicles a decisive step toward the first living cells?",
        options: [
          "Fatty acid vesicles directly encode triplet codons for translating ribosomal proteins",
          "Fatty acid membranes synthesize atmospheric oxygen by splitting water under UV light",
          "Compartmentalization separates an internal aqueous chemistry from the environment and concentrates reactants",
          "Amphipathic lipids form rigid cellulose walls that block all small molecules from entering",
        ],
        answerIndex: 2,
        hints: [
          "What does enclosing a droplet of water inside a hydrophobic bilayer accomplish for early chemical reactions?",
          "Contrast reacting molecules diffusing freely in a vast ocean with reactants trapped inside a tiny membrane compartment.",
        ],
        explanation:
          "Amphipathic molecules spontaneously orient hydrophilic heads outward and hydrophobic tails inward to form **vesicles (protocells)**, establishing a **distinct internal chemical environment**, concentrating reacting molecules, and enabling growth and division. Lipids do not encode codons or generate O₂.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "origins-of-cells-hl",
        question:
          "Which **dual capability** makes **RNA** the leading candidate for the first genetic system in the **RNA World hypothesis**?",
        options: [
          "RNA can store heritable sequence information by base pairing AND catalyse reactions as ribozymes",
          "RNA is chemically more stable than double-stranded DNA AND contains twenty distinct amino acid side chains",
          "RNA forms amphipathic lipid bilayers spontaneously AND transports oxygen across hydrothermal chimneys",
          "RNA contains thymine for error-proof repair AND divides autonomously by binary fission",
        ],
        answerIndex: 0,
        hints: [
          "Recall the DNA–protein chicken-and-egg paradox: early life needed ONE molecule that could play both roles.",
          "Remember what kind of molecule forms peptide bonds inside modern ribosomes!",
        ],
        explanation:
          "The **RNA World** solves the chicken-and-egg paradox because RNA both **stores genetic sequences** (enabling complementary template copying) and folds into **catalytic ribozymes** (still preserved in the rRNA peptidyl transferase core of modern ribosomes). DNA is more stable than RNA, not vice versa.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "origins-of-cells-hl",
        question:
          "How many distinct single-stranded **RNA sequences** are possible for a short prebiotic oligomer containing **5 nucleotides**?",
        options: ["20", "625", "1024", "4096"],
        answerIndex: 2,
        hints: [
          "There are 4 possible RNA bases (A, U, C, G) at each of the 5 positions.",
          "Compute 4⁵ = 4 × 4 × 4 × 4 × 4.",
        ],
        explanation:
          "With 4 independent choices (A, U, C, G) at each of 5 positions, there are 4⁵ = **1024** distinct sequences. Choosing 20 multiplies 4 × 5 instead of raising to a power, 625 reverses base and exponent (5⁴), and 4096 is 4⁶.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "origins-of-cells-hl",
        question:
          "Why do many biologists identify **alkaline deep-sea hydrothermal vents** as the most plausible habitat for the **Last Universal Common Ancestor (LUCA)**?",
        options: [
          "Alkaline vents receive intense ultraviolet light needed to drive plant-like oxygenic photosynthesis",
          "Alkaline vents provide H₂, Fe–S mineral catalysts, UV shelter, and natural proton (H⁺) gradients across mineral pores",
          "Alkaline vents are completely sterile today, preserving fossilized eukaryotic nuclei from 4.0 Ga",
          "Alkaline vents maintain sub-zero temperatures that freeze organic monomers in protective ice",
        ],
        answerIndex: 1,
        hints: [
          "Reconstructed LUCA genes indicate an anaerobic, heat-loving chemoautotroph using H₂, CO₂, and iron–sulfur chemistry.",
          "Think about the pH difference between alkaline vent fluid (pH ~10) and mildly acidic early seawater (pH ~5–6).",
        ],
        explanation:
          "Alkaline hydrothermal vents supply warm mineral-rich **H₂**, catalytic **Fe–S surfaces**, protection from surface UV bombardment, and **natural transmembrane H⁺ gradients** across porous mineral chimneys that could power early carbon fixation and chemiosmosis.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "origins-of-cells-hl",
        question:
          "Which statement accurately distinguishes **LUCA** from the very first protocell on Earth?",
        options: [
          "LUCA was already a cellular organism with DNA, ribosomes, and the universal code, whereas earlier rival lineages went extinct",
          "LUCA was a naked non-cellular amino acid monomer formed directly inside a lightning bolt",
          "LUCA was the first eukaryotic cell to engulf both mitochondria and chloroplasts simultaneously",
          "LUCA lived only 500 million years ago after multicellular animals colonized land",
        ],
        answerIndex: 0,
        hints: [
          "Read the word 'Last' in Last Universal Common Ancestor very carefully!",
          "Every surviving domain shares DNA, ribosomes, membranes, and ATP — so LUCA already had all of those.",
        ],
        explanation:
          "**LUCA** (~3.8–4.2 Ga) was NOT the first protocell; it was the *last* shared ancestor of all *surviving* cellular life (Bacteria, Archaea, Eukarya), meaning it already possessed DNA, ribosomes, membranes, and the universal genetic code while earlier pre-LUCA lineages left no surviving descendants.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "viruses-diversity-hl",
        question:
          "Which combination of features is shared by **bacteriophage lambda (λ)**, **SARS-CoV-2**, and **HIV**?",
        options: [
          "Host-derived phospholipid envelope, spike glycoproteins, and reverse transcriptase enzyme",
          "Linear double-stranded DNA genome, helical tail sheath, and peptidoglycan-digesting lysozyme",
          "70S ribosomes, circular naked chromosome, and autonomous ATP generation by glycolysis",
          "Small fixed size, nucleic acid genetic material, protein capsid, and obligate intracellular parasitism",
        ],
        answerIndex: 3,
        hints: [
          "Check which features apply to ALL THREE viruses rather than just one or two of them.",
          "Remember phage λ has NO lipid envelope and SARS-CoV-2 has NO reverse transcriptase.",
        ],
        explanation:
          "All viruses — including phage λ, SARS-CoV-2, and HIV — share a **small fixed size**, a **nucleic acid genome** (DNA or RNA), a **protein capsid**, and **obligate intracellular parasitism** (lacking ribosomes and independent metabolism). Phage λ is non-enveloped dsDNA, whereas HIV and SARS-CoV-2 are enveloped RNA viruses.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "viruses-diversity-hl",
        question:
          "During the **lysogenic cycle** of **bacteriophage lambda (λ)** inside *E. coli*, what happens to the injected viral DNA?",
        options: [
          "It immediately triggers lysozyme synthesis and bursts the host cell within twenty minutes",
          "It integrates into the host bacterial chromosome as a dormant prophage replicated during binary fission",
          "It is reverse-transcribed from single-stranded RNA into complementary DNA inside the host nucleus",
          "It remains outside the bacterium attached to the empty protein capsid on the peptidoglycan wall",
        ],
        answerIndex: 1,
        hints: [
          "Contrast immediate host destruction (lytic) with dormant vertical inheritance (lysogenic).",
          "Recall the name given to integrated bacteriophage DNA inside a bacterial chromosome.",
        ],
        explanation:
          "In the **lysogenic cycle**, bacteriophage λ DNA integrates into the *E. coli* chromosome as a **prophage**. A phage repressor protein prevents lytic gene expression so the bacterium divides normally, passing the prophage to every daughter cell until stress induces excision into the lytic cycle.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "viruses-diversity-hl",
        question:
          "Why does **HIV** require the viral enzyme **reverse transcriptase** inside an infected human helper T-cell?",
        options: [
          "To hydrolyse the peptidoglycan wall of the helper T-cell prior to viral entry",
          "To translate viral mRNA directly into capsid proteins without using host 80S ribosomes",
          "To synthesize complementary viral DNA (cDNA) from its single-stranded RNA genome prior to host-genome integration",
          "To proofread viral RNA strands and eliminate all point mutations in envelope gp120",
        ],
        answerIndex: 2,
        hints: [
          "HIV is a retrovirus carrying an RNA genome, yet it integrates permanently into the host cell's nuclear DNA.",
          "Host cells lack an enzyme that copies an RNA template backward into DNA.",
        ],
        explanation:
          "**Reverse transcriptase** catalyses the synthesis of double-stranded complementary **DNA (cDNA)** from HIV's **+ssRNA** genome so that viral integrase can insert it into the helper T-cell's nuclear DNA. Importantly, reverse transcriptase *lacks* proofreading, causing high mutation rates.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "viruses-diversity-hl",
        question:
          "Two bacteriophage λ virions each infect a separate *E. coli* cell and complete **2** consecutive lytic cycles with a burst size of **50** virions per infected host cell (assuming every released virion infects a fresh cell). How many total virions are present at the end of the 2nd cycle?",
        options: ["200", "2500", "10 000", "5000"],
        answerIndex: 3,
        hints: [
          "Use exponential lytic amplification: N = N₀ × B^k.",
          "After cycle 1: 2 × 50 = 100 virions. Each of those 100 virions then produces 50 more!",
        ],
        explanation:
          "Using N = N₀ × B^k = 2 × 50² = 2 × 2500 = **5000** virions. Computing 50² = 2500 forgets the 2 initial virions, while 2 × 50 × 2 = 200 treats exponential multiplication as linear.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "viruses-diversity-hl",
        question:
          "What genomic observation provides the **strongest evidence** that viruses originated **multiple times independently (convergent evolution)** rather than from a single common ancestral virus?",
        options: [
          "Every known virus shares an identical 16S ribosomal RNA sequence inherited from LUCA",
          "All viruses possess double-stranded DNA genomes packaged inside lipid envelopes",
          "Viruses infect exclusively prokaryotic hosts and never enter eukaryotic nuclei",
          "No single gene is conserved across all viral families, which span diverse genome and capsid types",
        ],
        answerIndex: 3,
        hints: [
          "Compare cellular life (where universal rRNA genes link all three domains to LUCA) with the virosphere.",
          "Ask whether all known viruses share any single universal conserved gene or identical nucleic acid chemistry.",
        ],
        explanation:
          "Unlike cellular domains united by universal rRNA and core translational genes, **no single gene is conserved across all viral families**, and viruses use wildly divergent nucleic acid strategies (dsDNA, ssDNA, dsRNA, +ssRNA, −ssRNA, retroviruses) — pointing to **multiple independent convergent origins** (progressive escape, regressive reduction, and/or virus-first pathways).",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "viruses-diversity-hl",
        question:
          "Why must public-health agencies reformulate seasonal **influenza vaccines** almost every year?",
        options: [
          "Influenza DNA polymerase inserts extra histone proteins that shield the capsid from antibodies",
          "Error-prone viral RNA polymerase lacks proofreading, causing rapid antigenic drift in surface HA and NA glycoproteins",
          "Human B-lymphocytes permanently lose all memory cells within thirty days of vaccination",
          "Antibiotics prescribed for winter colds mutate the influenza peptidoglycan cell wall",
        ],
        answerIndex: 1,
        hints: [
          "Influenza is an RNA virus whose surface proteins (haemagglutinin HA and neuraminidase NA) are recognized by host antibodies.",
          "Think about the proofreading ability of viral RNA-dependent RNA polymerase.",
        ],
        explanation:
          "Influenza's **RNA-dependent RNA polymerase** lacks 3'→5' proofreading, so rapid point mutations continuously alter surface **HA and NA glycoprotein** shapes (**antigenic drift**), allowing new strains to evade antibodies elicited by previous vaccines.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "water-nucleic-acids",
        question:
          "A linear segment of eukaryotic nuclear DNA is **4000 bp** long and folds into nucleosomes with a regular repeat spacing of **200 bp** per nucleosome (147 bp wrapped around the core octamer plus 53 bp of linker DNA). Excluding H1 linker histones, how many **individual core histone protein molecules** are bound along this segment?",
        options: ["20", "80", "160", "200"],
        answerIndex: 2,
        hints: [
          "First divide the total DNA length (4000 bp) by the repeat length per nucleosome (200 bp) to find the number of nucleosomes.",
          "Each nucleosome core is a histone OCTAMER — 8 individual histone proteins per bead.",
        ],
        explanation:
          "Number of nucleosomes = 4000 bp / 200 bp = 20 nucleosomes. Because each nucleosome core consists of a **histone octamer** (8 histone proteins: 2 each of H2A, H2B, H3, H4), the total number of core histone molecules is 20 × 8 = **160**. Selecting 20 gives the nucleosome count rather than individual histone proteins.",
      },
      {
        id: "a1-a2-unity-molecules-cells-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "viruses-diversity-hl",
        question:
          "When two distinct **influenza A** strains co-infect the same host cell in a pig, progeny virions can inherit whole RNA segments mixed from both parent viruses, abruptly creating a pandemic strain. What is this mechanism called?",
        options: [
          "Antigenic shift via reassortment of segmented viral RNA genomes",
          "Lysogenic induction via excision of a dormant DNA prophage",
          "Antigenic drift via single-base substitution during DNA proofreading",
          "Horizontal conjugation via bacterial sex pili and circular plasmids",
        ],
        answerIndex: 0,
        hints: [
          "Distinguish gradual point mutations (drift) from abrupt swapping of whole genome segments during co-infection (shift).",
          "Influenza A carries 8 separate RNA genome segments that can reassort inside a co-infected host cell.",
        ],
        explanation:
          "Influenza A carries an 8-segment RNA genome. During co-infection, swapping entire RNA segments between two strains causes **antigenic shift (reassortment)**, producing sudden major changes in surface HA/NA antigens to which human populations have little prior immunity.",
      },
    ],
  },
];
