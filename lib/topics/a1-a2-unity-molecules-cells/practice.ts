import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK DIAGNOSTIC QUIZ (10 questions: 4 MCQ balanced 0/1/2/3, 4 short, 2 written)
  // ===========================================================================
  quiz: [
    {
      id: "a1-a2-unity-molecules-cells-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "water-nucleic-acids",
      question:
        "Pond skaters (water striders) walk smoothly across the surface of calm freshwater lakes without sinking. Which property of water produces the elastic surface tension that supports their hydrophobic legs?",
      options: [
        "High thermal conductivity distributing solar heat rapidly across the lake",
        "Cohesion created by extensive hydrogen bonding between surface water molecules",
        "Low viscosity allowing insect legs to glide with zero frictional resistance",
        "Non-polar covalent bonding between water molecules and atmospheric nitrogen",
      ],
      answerIndex: 1,
      hints: [
        "Think about the force pulling water molecules inward and sideways toward neighbouring water molecules.",
      ],
      explanation:
        "Water molecules at the air–water interface form strong **cohesive hydrogen bonds** with adjacent and underlying water molecules, creating high **surface tension** capable of supporting lightweight insects.",
    },
    {
      id: "a1-a2-unity-molecules-cells-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "cell-structure-microscopy",
      question:
        "A leaf palisade mesophyll cell has an actual length of **0.045 mm**. Convert this length into **micrometres (μm)**.",
      answer: { type: "number", value: 45, display: "45 μm" },
      traps: [
        {
          spec: { type: "number", value: 0.000045, tolerance: 1e-8 },
          feedback: "You divided by 1000 instead of multiplying — micrometres are smaller than millimetres, so the numerical value gets larger.",
        },
        {
          spec: { type: "number", value: 450 },
          feedback: "Check your powers of ten: 1 mm = 1000 μm (shift the decimal point three places right, not four).",
        },
      ],
      hints: ["Recall that 1 mm = 1000 μm."],
      solution: [
        "Multiply millimetres by {{1000}} to convert to micrometres: {{0.045 * 1000 = 45}} μm.",
      ],
      commonError: "Dividing by 1000 instead of multiplying when stepping down from mm to μm.",
    },
    {
      id: "a1-a2-unity-molecules-cells-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "water-nucleic-acids",
      question:
        "A sample of double-stranded DNA contains **34%** adenine (A). Calculate the percentage of **cytosine (C)** in this DNA sample (enter the number only).",
      answer: { type: "number", value: 16, display: "16%" },
      traps: [
        {
          spec: { type: "number", value: 34 },
          feedback: "Adenine pairs with thymine (34%), not cytosine.",
        },
        {
          spec: { type: "number", value: 32 },
          feedback: "32% is the combined total of C + G — divide by 2 to get cytosine alone.",
        },
      ],
      hints: [
        "In double-stranded DNA, %T = %A = 34%.",
        "Subtract (%A + %T) from 100%, then split the remainder equally between C and G.",
      ],
      solution: [
        "{{%T = %A = 34%}}, so {{%A + %T = 68%}}.",
        "{{%C + %G = 100% - 68% = 32%}}.",
        "Since {{%C = %G}}, {{%C = 32% / 2 = 16%}}.",
      ],
    },
    {
      id: "a1-a2-unity-molecules-cells-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "cell-structure-microscopy",
      question:
        "Which structural combination confirms that a cell imaged by transmission electron microscopy is **prokaryotic** rather than eukaryotic?",
      options: [
        "Double-membrane nucleus, rough endoplasmic reticulum, and 80S ribosomes",
        "Cellulose cell wall, chloroplasts with grana, and a large central vacuole",
        "Mitochondria with folded cristae, Golgi apparatus, and linear histone chromosomes",
        "Naked circular DNA in a nucleoid region, 70S ribosomes, and no membrane-bound organelles",
      ],
      answerIndex: 3,
      hints: [
        "Prokaryotes lack internal compartmentalization by membrane-bound organelles.",
      ],
      explanation:
        "Prokaryotes are distinguished ultrastructurally by **naked circular DNA in a nucleoid**, smaller **70S ribosomes**, and absence of a nuclear envelope or membrane-bound organelles.",
    },
    {
      id: "a1-a2-unity-molecules-cells-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "cell-structure-microscopy",
      question:
        "A white blood cell image measures **48 mm** across on a light micrograph printed at a magnification of **×1200**. Calculate the **actual diameter** of the cell in **micrometres (μm)**.",
      answer: { type: "number", value: 40, display: "40 μm" },
      traps: [
        {
          spec: { type: "number", value: 0.04, tolerance: 0.001 },
          feedback: "0.04 is in millimetres — multiply by 1000 to convert to micrometres (μm).",
        },
      ],
      hints: [
        "Convert image length to micrometres first: 48 mm × 1000 = 48 000 μm.",
        "Use A = I / M.",
      ],
      solution: [
        "Convert image size to μm: {{I = 48 * 1000 = 48000}} μm.",
        "Calculate actual size: {{A = I / M = 48000 / 1200 = 40}} μm.",
      ],
    },
    {
      id: "a1-a2-unity-molecules-cells-quiz-q06",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "water-nucleic-acids",
      marks: 2,
      question:
        "Distinguish between the molecular composition of **DNA** and **RNA** across **two** structural features.",
      hints: [
        "Compare the pentose sugar present in each polynucleotide.",
        "Compare either their nitrogenous bases or the number of polynucleotide strands.",
      ],
      modelAnswer:
        "DNA contains the pentose sugar deoxyribose whereas RNA contains ribose. In addition, DNA uses the base thymine and forms a double-stranded helix, whereas RNA uses uracil and is typically single-stranded.",
      markScheme: [
        {
          point: "DNA contains deoxyribose sugar whereas RNA contains ribose sugar.",
          keywords: ["deoxyribose", "ribose"],
        },
        {
          point: "DNA contains thymine (or is double-stranded) whereas RNA contains uracil (or is single-stranded).",
          keywords: ["uracil", "thymine", "double-stranded", "single-stranded"],
        },
      ],
    },
    {
      id: "a1-a2-unity-molecules-cells-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "origins-of-cells-hl",
      question:
        "Why do biologists view the peptide-bond-forming **rRNA core of modern ribosomes** as living molecular evidence for the **RNA World hypothesis**?",
      options: [
        "It confirms that RNA can act as a catalytic ribozyme as well as storing sequence information",
        "It demonstrates that ribosomal proteins synthesize deoxyribose sugars directly from methane",
        "It proves that eukaryotic nuclei evolved earlier than prokaryotic plasmids in hydrothermal vents",
        "It shows that double-stranded DNA directly catalyses amino acid condensation without enzymes",
      ],
      answerIndex: 0,
      hints: [
        "Recall what a ribozyme is and which biomolecule forms the catalytic centre of the ribosome.",
        "Connect catalysis + genetic information storage to resolving the prebiotic origin paradox.",
      ],
      explanation:
        "Peptidyl transferase inside every living ribosome is an **rRNA ribozyme**, demonstrating that RNA can perform enzymatic catalysis in addition to base-pair information storage — the core premise of the RNA World hypothesis.",
    },
    {
      id: "a1-a2-unity-molecules-cells-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "water-nucleic-acids",
      question:
        "One strand of a DNA molecule has the base sequence **`5'-CGAATC-3'`**. Type the complementary DNA strand in the **`5' → 3'`** direction (enter the 6 capital letters only).",
      answer: { type: "text", accept: ["GATTCG", "5'-GATTCG-3'", "5-GATTCG-3"], display: "GATTCG" },
      traps: [
        {
          spec: { type: "text", accept: ["GCTTAG", "3'-GCTTAG-5'"] },
          feedback: "GCTTAG is the complementary strand in the 3' → 5' direction — reverse it to read 5' → 3'!",
        },
      ],
      hints: [
        "First write the aligned antiparallel partner from 3' to 5' directly below 5'-CGAATC-3'.",
        "Reverse the letter order so the 5' end comes first.",
      ],
      solution: [
        "Aligned antiparallel complement of `5'-CGAATC-3'` is `3'-GCTTAG-5'`.",
        "Reversing to read `5' → 3'` gives **`5'-GATTCG-3'`** (`GATTCG`).",
      ],
    },
    {
      id: "a1-a2-unity-molecules-cells-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "viruses-diversity-hl",
      question:
        "What term describes the dormant viral DNA of **bacteriophage lambda (λ)** once it has integrated into the circular chromosome of an *E. coli* host cell?",
      options: ["Capsomere", "Retrovirus", "Prophage", "Ribozyme"],
      answerIndex: 2,
      hints: [
        "During lysogeny, viral DNA becomes a silent guest replicated alongside the host bacterial chromosome.",
        "Look for the prefix 'pro-' combined with 'phage'.",
      ],
      explanation:
        "Integrated bacteriophage DNA inside a bacterial host chromosome during the lysogenic cycle is called a **prophage**. A capsomere is a capsid protein subunit, a retrovirus is an RNA virus using reverse transcriptase, and a ribozyme is catalytic RNA.",
    },
    {
      id: "a1-a2-unity-molecules-cells-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "HL",
      commandTerm: "Outline",
      guideRef: "cell-structure-microscopy",
      marks: 3,
      question:
        "Outline **three** structural or reproductive features of **chloroplasts** that support their evolutionary origin by **endosymbiosis**.",
      hints: [
        "Consider the number of enclosing membranes around the organelle.",
        "Recall the ribosome size, DNA topology, and division mechanism inside chloroplasts.",
      ],
      modelAnswer:
        "Chloroplasts are enclosed by a double membrane (an inner bacterial membrane and an outer host-derived vesicle membrane). They contain their own circular naked DNA lacking histone proteins and possess smaller prokaryotic-type 70S ribosomes. They also replicate independently of mitosis by binary fission.",
      markScheme: [
        {
          point: "Surrounded by a double membrane (consistent with engulfment by endocytosis).",
          keywords: ["double membrane", "two membranes"],
        },
        {
          point: "Contain circular naked DNA (lacking histones) like prokaryotes.",
          keywords: ["circular", "naked dna"],
        },
        {
          point: "Contain 70S ribosomes (or divide independently by binary fission / bacterial size ~1–10 μm).",
          keywords: ["70s", "binary fission"],
        },
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS P1 (15 Qs SL Core) & P2 (15 Qs HL Extension)
  // ===========================================================================
  papers: [
    {
      id: "a1-a2-unity-molecules-cells-p1",
      title: "Paper 1B & Paper 2 (SL Core) · Data Analysis, Microscopy & Structured Responses",
      level: "SL",
      questions: [
        {
          id: "a1-a2-unity-molecules-cells-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "cell-structure-microscopy",
          question:
            "An influenza virion has an actual diameter of **85 nm**. Express this diameter in **micrometres (μm)**.",
          answer: { type: "number", value: 0.085, tolerance: 0.0005, display: "0.085 μm" },
          traps: [
            {
              spec: { type: "number", value: 85000 },
              feedback: "You multiplied by 1000 instead of dividing — 1 μm = 1000 nm, so nm → μm divides by 1000.",
            },
          ],
          hints: ["1 μm = 1000 nm, so divide nanometres by 1000."],
          solution: [
            "Divide by {{1000}}: {{85 / 1000 = 0.085}} μm.",
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "cell-structure-microscopy",
          question:
            "A transmission electron micrograph of *Escherichia coli* includes a scale bar labelled **`1.0 μm`**. When measured with a ruler, the printed scale bar is **35 mm** long. Calculate the magnification of the micrograph (enter the number only).",
          answer: { type: "number", value: 35000, display: "35000" },
          traps: [
            {
              spec: { type: "number", value: 35 },
              feedback: "You forgot to convert 35 mm into micrometres (35 mm = 35 000 μm) before dividing by 1.0 μm.",
            },
          ],
          hints: [
            "Convert 35 mm into micrometres (× 1000).",
            "Apply M = I / A using matching units.",
          ],
          solution: [
            "Convert image length of scale bar to μm: {{I = 35 * 1000 = 35000}} μm.",
            "Apply {{M = I / A = 35000 / 1.0 = 35000}} (×35 000).",
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "cell-structure-microscopy",
          question:
            "In the electron micrograph schematic below, the scale bar represents **`500 nm`** and measures **25 mm** long, while the circular secretory vesicle measures **15 mm** in diameter. Calculate the **actual diameter** of the vesicle in **nanometres (nm)**.",
          diagram: `<svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Secretory vesicle micrograph diagram showing a 15 mm vesicle diameter and a 25 mm scale bar representing 500 nm.">
  <rect x="0" y="0" width="380" height="140" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <circle cx="120" cy="70" r="42" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
  <circle cx="120" cy="70" r="36" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="78" y1="70" x2="162" y2="70" stroke="#0f172a" stroke-width="1.6"/>
  <text x="120" y="63" font-size="11" font-weight="700" text-anchor="middle" fill="#0f172a">15 mm</text>
  <text x="120" y="128" font-size="10.5" font-weight="600" text-anchor="middle" fill="#334155">Secretory vesicle</text>
  <!-- Scale bar -->
  <line x1="210" y1="78" x2="350" y2="78" stroke="#b91c1c" stroke-width="4"/>
  <text x="280" y="66" font-size="11.5" font-weight="700" text-anchor="middle" fill="#b91c1c">500 nm</text>
  <text x="280" y="98" font-size="10.5" text-anchor="middle" fill="#475569">(measured length = 25 mm)</text>
</svg>`,
          answer: { type: "number", value: 300, display: "300 nm" },
          traps: [
            {
              spec: { type: "number", value: 0.3, tolerance: 0.01 },
              feedback: "0.3 is in micrometres — multiply by 1000 to give your answer in nanometres (nm) as requested.",
            },
            {
              spec: { type: "number", value: 833, tolerance: 2 },
              feedback: "Check which length is smaller: the vesicle (15 mm) is smaller than the scale bar (25 mm), so its actual diameter must be less than 500 nm.",
            },
          ],
          hints: [
            "First find the magnification from the scale bar (or use direct ratio of measured lengths).",
            "Since 15 mm is 15/25 = 0.6 of the 25 mm scale bar, multiply 0.6 by 500 nm.",
          ],
          solution: [
            "Method 1 (magnification): {{25}} mm = {{25000000}} nm, so {{M = 25000000 / 500 = 50000}}. Actual vesicle diameter = {{15000000 / 50000 = 300}} nm.",
            "Method 2 (proportion): {{(15 / 25) * 500 = 0.6 * 500 = 300}} nm.",
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "water-nucleic-acids",
          question:
            "A double-stranded DNA gene segment contains **600 base pairs** (**1200 nucleotides** in total). If **26%** of all nitrogenous bases are **thymine (T)**, calculate the number of **guanine (G)** nucleotides in the segment.",
          answer: { type: "number", value: 288, display: "288" },
          traps: [
            {
              spec: { type: "number", value: 144 },
              feedback: "Careful: 600 base pairs equals 1200 total nucleotides, not 600 nucleotides!",
            },
            {
              spec: { type: "number", value: 576 },
              feedback: "576 is the combined count of C + G nucleotides — divide by 2 for guanine alone.",
            },
          ],
          hints: [
            "Use Chargaff's rules to find %G first: %A = %T = 26%.",
            "Multiply the decimal fraction of G by 1200 total nucleotides.",
          ],
          solution: [
            "{{%A = %T = 26%}}, so {{%A + %T = 52%}}.",
            "{{%C + %G = 100% - 52% = 48%}}, giving {{%G = 24%}}.",
            "Number of guanine nucleotides = {{0.24 * 1200 = 288}}.",
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q05",
          kind: "short",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "water-nucleic-acids",
          question:
            "A double-stranded DNA fragment has **300 base pairs** (600 nucleotides total) in which **35%** of all bases are **cytosine (C)**. Calculate the **total number of hydrogen bonds** holding the two complementary strands together.",
          answer: { type: "number", value: 810, display: "810" },
          traps: [
            {
              spec: { type: "number", value: 705 },
              feedback: "Watch out! 35% of 600 nucleotides is 210 C bases (forming 210 G–C base pairs, or 70% of all base pairs — not 35% of base pairs!).",
            },
          ],
          hints: [
            "Find the number of cytosine bases out of 600 total nucleotides: each C forms one G–C base pair!",
            "Subtract the number of G–C base pairs from 300 to get the number of A–T base pairs.",
            "Use 3 H-bonds per G–C pair and 2 H-bonds per A–T pair.",
          ],
          solution: [
            "Total nucleotides = {{300 * 2 = 600}}. Number of C bases = {{0.35 * 600 = 210}}, which pair with 210 G bases to form **210 G–C base pairs**.",
            "Remaining A–T base pairs = {{300 - 210 = 90}} (check: 15% of 600 = 90 A and 90 T).",
            "Total hydrogen bonds = {{(210 * 3) + (90 * 2) = 630 + 180 = 810}}.",
          ],
          commonError: "Taking 35% of 300 base pairs instead of 35% of 600 total bases (forgetting that %C + %G = 70% of base pairs).",
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "water-nucleic-acids",
          question:
            "A continuous mRNA coding region consists of **456 nucleotides**, ending with a single stop codon that does not specify an amino acid. How many **amino acids** are present in the translated polypeptide?",
          answer: { type: "number", value: 151, display: "151" },
          traps: [
            {
              spec: { type: "number", value: 152 },
              feedback: "456 / 3 = 152 triplet codons in total — remember to subtract 1 for the stop codon!",
            },
          ],
          hints: [
            "Each mRNA codon contains 3 nucleotides.",
            "Remember the final stop codon terminates translation without adding an amino acid.",
          ],
          solution: [
            "Total triplet codons = {{456 / 3 = 152}}.",
            "Subtract the 1 stop codon: {{152 - 1 = 151}} amino acids.",
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "water-nucleic-acids",
          question:
            "A rocky-shore tide pool contains **200 g** of liquid water (specific heat capacity {{c = 4.18}} J g⁻¹ °C⁻¹). Calculate the thermal energy in **kilojoules (kJ)** required to raise its temperature by **5.0 °C** (give your answer to 2 decimal places).",
          answer: { type: "number", value: 4.18, tolerance: 0.02, display: "4.18 kJ" },
          traps: [
            {
              spec: { type: "number", value: 4180, tolerance: 5 },
              feedback: "4180 is in joules (J) — divide by 1000 to convert to kilojoules (kJ).",
            },
          ],
          hints: [
            "Use Q = m c ΔT to calculate thermal energy in joules.",
            "Convert joules to kilojoules by dividing by 1000.",
          ],
          solution: [
            "{{Q = 200 * 4.18 * 5.0 = 4180}} J.",
            "Convert to kilojoules: {{4180 / 1000 = 4.18}} kJ.",
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "water-nucleic-acids",
          marks: 3,
          question:
            "Explain how the molecular properties of water allow continuous upward transport of sap through plant **xylem vessels** during transpiration.",
          hints: [
            "Begin with polarity and hydrogen bonding between water molecules.",
            "Connect cohesion (pulling an unbroken column) and adhesion (clinging to polar cellulose walls).",
          ],
          modelAnswer:
            "Water is a polar molecule that forms intermolecular hydrogen bonds between adjacent H₂O molecules. This produces strong cohesion, holding water in continuous unbroken columns pulled upward under tension as water evaporates from leaf mesophyll. Adhesion between polar water molecules and hydrophilic cellulose cell walls helps resist gravity and drives capillary action inside narrow xylem tubes.",
          markScheme: [
            {
              point: "Water is polar and forms hydrogen bonds between adjacent molecules.",
              keywords: ["hydrogen bond", "polar"],
            },
            {
              point: "Cohesion maintains continuous water columns under transpiration tension without breaking.",
              keywords: ["cohesion", "tension"],
            },
            {
              point: "Adhesion to polar/hydrophilic cellulose xylem walls resists gravity / assists capillary rise.",
              keywords: ["adhesion", "cellulose"],
            },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "water-nucleic-acids",
          marks: 4,
          question:
            "Compare and contrast how the physical properties of **water** and **air** influence locomotion and heat retention in the **ringed seal** (*Pusa hispida*) and the **black-throated loon** (*Gavia arctica*).",
          hints: [
            "Compare buoyancy in dense water versus low-density air.",
            "Compare viscosity/drag and streamlined body adaptations.",
            "Compare thermal conductivity and insulating adaptations (blubber vs feathers).",
          ],
          modelAnswer:
            "Water has much higher density and buoyancy than air, supporting the heavy body of the ringed seal effortlessly during diving, whereas air provides minimal buoyancy so the loon requires hollow lightweight bones and wings for flight. However, water has far greater viscosity than air, generating high drag that both animals overcome with streamlined bodies and flippers or webbed feet. Finally, water has roughly 25 times greater thermal conductivity than air, accelerating heat loss; seals counter this with thick insulating blubber while loons trap warm air inside oil-waterproofed feathers.",
          markScheme: [
            {
              point: "Higher buoyancy in water supports body weight (seal), whereas low buoyancy in air requires lightweight/hollow bones or lift (loon).",
              keywords: ["buoyancy"],
            },
            {
              point: "Higher viscosity in water creates greater drag than air, selecting for streamlined shapes / flippers / webbed feet.",
              keywords: ["viscosity", "streamlined"],
            },
            {
              point: "Higher thermal conductivity of water causes faster heat loss than air.",
              keywords: ["thermal conductivity", "heat loss"],
            },
            {
              point: "Named insulating adaptations: thick blubber in seals and oiled/trapped-air plumage in loons.",
              keywords: ["blubber", "feathers", "plumage"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant physical properties of water or air described." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies 1–2 physical differences between water and air with limited link to organism adaptations." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly contrasts buoyancy, viscosity, and thermal conductivity of water vs air and explicitly links them to adaptations in the ringed seal and black-throated loon." },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "water-nucleic-acids",
          marks: 3,
          question:
            "Explain how the molecular architecture of **DNA** makes it ideal for stable, high-capacity hereditary information storage.",
          hints: [
            "Think about how many sequences of 4 bases are possible (4^n).",
            "Explain why strong covalent backbone bonds plus weak complementary base-pair H-bonds work together.",
          ],
          modelAnswer:
            "Any of four nitrogenous bases can occupy every position along long DNA molecules, giving 4^n possible sequences and virtually limitless coding capacity. Strong covalent phosphodiester bonds along the sugar–phosphate backbone and the lack of a reactive 2'-hydroxyl on deoxyribose make the strand chemically stable. Complementary base pairing (A=T, C≡G) across two strands protects the bases internally and provides a built-in template for accurate copying and repair.",
          markScheme: [
            {
              point: "Limitless base-sequence diversity (4^n combinations) provides massive coding capacity.",
              keywords: ["sequence", "coding capacity", "4^n", "combinations"],
            },
            {
              point: "Covalent phosphodiester backbone (and deoxyribose stability) resists chemical breakdown.",
              keywords: ["phosphodiester", "covalent", "deoxyribose"],
            },
            {
              point: "Complementary base pairing across two strands enables faithful replication / proofreading template.",
              keywords: ["complementary", "template"],
            },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "cell-structure-microscopy",
          marks: 4,
          question:
            "Compare and contrast **light microscopy** and **transmission electron microscopy (TEM)** for investigating cell structure.",
          hints: [
            "State one similarity (both magnify specimens to visualize cells).",
            "Contrast radiation source & wavelength → resolution limit (~200 nm vs ~0.1–1 nm).",
            "Contrast living/colour specimens versus dead vacuum-mounted thin sections.",
          ],
          modelAnswer:
            "Both techniques magnify cellular specimens, yet they differ sharply in resolution and preparation. Light microscopy uses visible light with longer wavelengths, limiting resolution to roughly 200 nm, whereas TEM uses short-wavelength electron beams achieving around 0.1–1 nm resolution to reveal internal ultrastructure such as ribosomes and cristae. Light microscopes can view living cells in colour, whereas TEM requires dead, dehydrated ultrathin sections placed in a vacuum, producing greyscale images.",
          markScheme: [
            {
              point: "Similarity: both magnify images to visualize cells/structures (or focus beams using lenses).",
              keywords: ["both", "magnify"],
            },
            {
              point: "TEM has far higher resolution (~0.1–1 nm vs ~200 nm) because electrons have a much shorter wavelength than visible light.",
              keywords: ["resolution", "shorter wavelength"],
            },
            {
              point: "Light microscopes can view living cells (and natural colour), whereas TEM requires dead dehydrated samples in a vacuum.",
              keywords: ["living", "vacuum", "dead"],
            },
            {
              point: "TEM reveals fine 2D internal ultrastructure (e.g. cristae, ribosomes, nuclear pores) invisible under LM.",
              keywords: ["ultrastructure", "ribosomes", "cristae"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid comparison or contrast of light and electron microscopy." },
            { band: "1–2", marks: [1, 2], descriptor: "States basic differences (e.g. living vs dead) without explaining wavelength/resolution clearly." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately compares and contrasts wavelength, resolution limits, specimen state (living vs dead/vacuum), and ultrastructural detail." },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "cell-structure-microscopy",
          marks: 3,
          question:
            "Outline how **three** named atypical eukaryotic examples challenge the simplistic idea that every cell is a small compartment containing one nucleus.",
          hints: [
            "Name striated skeletal muscle fibres, aseptate fungal hyphae, and giant algae (Acetabularia).",
            "For each, state the exact atypical trait (multinucleated, continuous cytoplasm, or huge single-cell size).",
          ],
          modelAnswer:
            "Striated skeletal muscle fibres are unusually long cells formed by fusion and contain many nuclei within a shared sarcoplasm. Aseptate fungal hyphae lack dividing cross-walls, creating continuous tubular cytoplasm containing numerous nuclei. The giant marine alga Acetabularia grows several centimetres tall with complex body parts yet consists of just one single cell governed by a single nucleus.",
          markScheme: [
            {
              point: "Striated skeletal muscle fibres: very large/long and multinucleated.",
              keywords: ["muscle", "multinucleated", "many nuclei"],
            },
            {
              point: "Aseptate fungal hyphae: lack cross-walls/septa, forming continuous cytoplasm with many nuclei.",
              keywords: ["aseptate", "hyphae"],
            },
            {
              point: "Giant algae (Acetabularia): very large (several cm) complex single cell with one nucleus (or anucleate mature mammalian erythrocytes / phloem sieve tubes).",
              keywords: ["acetabularia", "giant", "erythrocyte"],
            },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "cell-structure-microscopy",
          marks: 4,
          question:
            "Distinguish between **prokaryotic** and **eukaryotic** cells across **four** structural or reproductive features.",
          hints: [
            "Compare DNA location/packaging, ribosome size, internal organelles, and division method.",
            "Use explicit comparative words ('whereas') in every point.",
          ],
          modelAnswer:
            "Prokaryotes keep naked circular DNA free in a nucleoid region without histones, whereas eukaryotes store linear DNA bound to histone proteins inside a double-membrane nucleus. Prokaryotes lack membrane-bound organelles such as mitochondria or ER, whereas eukaryotes possess compartmentalized membrane-bound organelles. Prokaryotes have smaller 70S ribosomes whereas eukaryotes have larger 80S cytoplasmic ribosomes. Finally, prokaryotes divide by binary fission whereas eukaryotes divide their nuclei by mitosis or meiosis.",
          markScheme: [
            {
              point: "DNA: prokaryotic circular naked DNA in nucleoid vs eukaryotic linear histone-bound DNA inside a nucleus.",
              keywords: ["nucleoid", "circular", "histone"],
            },
            {
              point: "Organelles: prokaryotes lack membrane-bound organelles vs eukaryotes possess them (mitochondria, ER, Golgi).",
              keywords: ["membrane-bound organelles", "compartmentalized"],
            },
            {
              point: "Ribosomes: 70S in prokaryotes vs 80S in eukaryotic cytoplasm.",
              keywords: ["70s", "80s"],
            },
            {
              point: "Cell division: binary fission in prokaryotes vs mitosis/meiosis in eukaryotes.",
              keywords: ["binary fission", "mitosis"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid distinctions stated." },
            { band: "1–2", marks: [1, 2], descriptor: "Gives 1–2 accurate direct contrasts between prokaryotes and eukaryotes." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly contrasts 3–4 features (DNA/nucleus, organelles, 70S vs 80S ribosomes, binary fission vs mitosis) using precise IB terminology." },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "cell-structure-microscopy",
          marks: 3,
          question:
            "Distinguish **plant**, **animal**, and **fungal** eukaryotic cells based on cell wall composition, presence of chloroplasts, and vacuole structure.",
          hints: [
            "Check polysaccharide walls: cellulose vs chitin vs none.",
            "Only plants carry chloroplasts; compare vacuoles across the three kingdoms.",
          ],
          modelAnswer:
            "Plant cells have a cellulose cell wall, fungal cells have a chitin cell wall, and animal cells have no cell wall. Photosynthetic plant cells contain chloroplasts whereas both animal and fungal cells lack chloroplasts. Mature plant cells possess a large permanent central vacuole maintaining turgor, fungal cells typically have vacuoles, and animal cells have only small temporary vacuoles or vesicles.",
          markScheme: [
            {
              point: "Cell walls: plant = cellulose, fungus = chitin, animal = absent.",
              keywords: ["cellulose", "chitin"],
            },
            {
              point: "Chloroplasts: present in photosynthetic plant cells, absent in both animal and fungal cells.",
              keywords: ["chloroplasts"],
            },
            {
              point: "Vacuoles: large permanent central vacuole in plants vs small temporary vacuoles/vesicles in animals.",
              keywords: ["central vacuole", "turgor", "temporary"],
            },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "water-nucleic-acids",
          marks: 6,
          question:
            "Explain how the **solvent** and **thermal** properties of liquid water support cellular metabolism, blood transport, and aquatic ecosystem stability.",
          hints: [
            "Explain polarity and hydration shells dissolving hydrophilic ions/glucose/amino acids in cytoplasm and plasma.",
            "Contrast hydrophobic lipids requiring lipoprotein carriers.",
            "Explain high specific heat capacity (hydrogen bond network) buffering body and ocean temperatures.",
            "Mention high latent heat of vaporization (sweating/transpiration cooling) or stable enzyme kinetics.",
          ],
          modelAnswer:
            "Because water molecules are polar with partial charges on O (δ−) and H (δ+), they form hydration shells around charged ions (Na⁺, Cl⁻) and polar solutes (glucose, amino acids, urea). This makes aqueous cytoplasm an ideal medium for dissolved enzymes and substrates to collide and catalyse metabolic reactions. In vertebrate blood plasma, hydrophilic solutes dissolve directly for circulatory transport, whereas non-polar hydrophobic lipids like cholesterol and triglycerides are packaged inside amphipathic lipoprotein complexes. Extensive intermolecular hydrogen bonds also give water a very high specific heat capacity (4.18 J g⁻¹ °C⁻¹), because substantial heat energy is absorbed breaking H-bonds before temperature rises. Consequently, aquatic habitats such as oceans and lakes experience gradual seasonal temperature shifts, and water-rich organisms buffer internal body temperature to keep enzyme-catalysed reactions near their optimum without denaturation.",
          markScheme: [
            {
              point: "Water polarity allows hydration shells to form around ions and polar solutes.",
              keywords: ["hydration shell", "polar"],
            },
            {
              point: "Cytoplasm acts as a reaction medium enabling dissolved enzymes and substrates to collide.",
              keywords: ["cytoplasm", "enzymes", "substrates"],
            },
            {
              point: "Hydrophilic solutes (glucose, amino acids, NaCl) dissolve in blood plasma for transport.",
              keywords: ["plasma", "glucose", "amino acids"],
            },
            {
              point: "Hydrophobic lipids (cholesterol/triglycerides) are insoluble and transported inside lipoproteins.",
              keywords: ["lipoprotein", "hydrophobic"],
            },
            {
              point: "High specific heat capacity due to extensive hydrogen bonds buffers temperature changes.",
              keywords: ["specific heat capacity", "hydrogen bond"],
            },
            {
              point: "Stabilizes aquatic ecosystems and internal organismal temperatures, preventing enzyme denaturation.",
              keywords: ["denaturation", "aquatic", "optimum"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant biological explanation of water's solvent or thermal roles." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions dissolving or heat buffering superficially without linking to molecular polarity or hydrogen bonding." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains solvent and thermal mechanisms with hydrogen bonding and gives valid examples in cells, blood, or habitats." },
            { band: "5–6", marks: [5, 6], descriptor: "Comprehensive IB response integrating hydration shells, cytoplasmic metabolism, plasma vs lipoprotein transport, high specific heat capacity, and enzyme/habitat thermal stability." },
          ],
        },
      ],
    },

    // =========================================================================
    // PAPER P2: HL Extension — Molecular Genetics, Endosymbiosis, Origins & Viruses (15 Qs)
    // =========================================================================
    {
      id: "a1-a2-unity-molecules-cells-p2",
      title: "Paper 2 (HL Extension) · Molecular Genetics, Endosymbiosis, Origins & Viruses",
      level: "HL",
      questions: [
        {
          id: "a1-a2-unity-molecules-cells-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "water-nucleic-acids",
          question:
            "One strand of a DNA duplex reads **`5'-TTACGAG-3'`**. Deduce the complementary DNA strand written in the **`5' → 3'`** direction (type the 7 capital letters only).",
          answer: { type: "text", accept: ["CTCGTAA", "5'-CTCGTAA-3'", "5-CTCGTAA-3"], display: "CTCGTAA" },
          traps: [
            {
              spec: { type: "text", accept: ["AATGCTC", "3'-AATGCTC-5'"] },
              feedback: "AATGCTC runs 3' → 5' — reverse the sequence to write it in the 5' → 3' direction!",
            },
          ],
          hints: [
            "Write the direct antiparallel complement beneath 5'-TTACGAG-3' (running 3' → 5').",
            "Reverse the letters completely so the 5' end is on the left.",
          ],
          solution: [
            "Aligned antiparallel partner of `5'-TTACGAG-3'` is `3'-AATGCTC-5'`.",
            "Reading from `5'` to `3'` (right to left) yields **`5'-CTCGTAA-3'`** (`CTCGTAA`).",
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "water-nucleic-acids",
          question:
            "A segment of eukaryotic DNA measuring **5400 bp** is packaged into regular nucleosomes with a repeat spacing of **180 bp** per nucleosome (147 bp core + 33 bp linker DNA). Calculate the number of **nucleosomes** formed along this DNA segment.",
          answer: { type: "number", value: 30, display: "30" },
          traps: [
            {
              spec: { type: "number", value: 240 },
              feedback: "240 is the number of individual core histone proteins (30 × 8), whereas the question asks for the number of nucleosomes.",
            },
          ],
          hints: [
            "Each nucleosome plus its adjacent linker accounts for 180 bp along the chromatin fibre.",
            "Divide the total DNA length (5400 bp) by the repeat length per nucleosome (180 bp).",
          ],
          solution: [
            "Number of nucleosomes = {{5400 / 180 = 30}}.",
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "origins-of-cells-hl",
          question:
            "Calculate the total number of distinct single-stranded **RNA sequences** possible for a prebiotic oligonucleotide containing **7 nucleotides**.",
          answer: { type: "number", value: 16384, display: "16384" },
          traps: [
            {
              spec: { type: "number", value: 28 },
              feedback: "Multiply 4 by itself 7 times (4⁷), rather than multiplying 4 × 7.",
            },
          ],
          hints: [
            "Each nucleotide site has 4 base options (A, U, C, G).",
            "Evaluate 4⁷.",
          ],
          solution: [
            "Possible RNA sequences = {{4^7 = 16384}}.",
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Estimate",
          guideRef: "origins-of-cells-hl",
          question:
            "Two deeply branching prokaryotic clades differ at **76** neutral nucleotide positions in a conserved gene. If neutral substitutions accumulate between the two lineages at a combined rate of **20** substitutions per billion years (Ga), estimate how long ago (in **Ga**, to 1 decimal place) their common ancestor lived.",
          answer: { type: "number", value: 3.8, tolerance: 0.05, display: "3.8" },
          hints: [
            "A molecular clock assumes neutral substitutions accumulate at an approximately steady average rate over time.",
            "Divide total nucleotide differences (76) by the combined substitution rate (20 per Ga).",
          ],
          solution: [
            "Estimated divergence time = {{76 / 20 = 3.8}} Ga (3.8 billion years ago).",
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "viruses-diversity-hl",
          question:
            "Three bacteriophage λ virions each infect a separate *E. coli* cell and complete **3** consecutive lytic cycles with a burst size of **40** virions per infected host cell (assume every released virion infects a new cell). Calculate the total number of virions at the end of the 3rd cycle.",
          answer: { type: "number", value: 192000, display: "192000" },
          traps: [
            {
              spec: { type: "number", value: 64000 },
              feedback: "64 000 is the yield starting from 1 phage — remember to multiply by the 3 initial virions!",
            },
            {
              spec: { type: "number", value: 360 },
              feedback: "Lytic amplification is exponential (N₀ × B^k), not linear (N₀ × B × k).",
            },
          ],
          hints: [
            "Use N = N₀ × B^k with N₀ = 3, B = 40, and k = 3.",
            "First compute 40³ = 64 000, then multiply by 3.",
          ],
          solution: [
            "{{N = 3 * 40^3 = 3 * 64000 = 192000}} virions.",
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "viruses-diversity-hl",
          question:
            "An influenza A virus has an RNA genome of **13 500** nucleotides and an RNA-dependent RNA polymerase error rate of {{2.0 * 10^(-4)}} mutations per nucleotide copied. Calculate the expected average number of point mutations per newly replicated viral genome (to 1 decimal place).",
          answer: { type: "number", value: 2.7, tolerance: 0.05, display: "2.7" },
          hints: [
            "Expected mutations per replication cycle = genome length × error rate per nucleotide.",
            "Multiply 13 500 by 0.0002 (2.0 × 10⁻⁴).",
          ],
          solution: [
            "Expected mutations per genome = {{13500 * 2.0 * 10^(-4) = 2.7}}.",
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "water-nucleic-acids",
          marks: 4,
          question:
            "Explain how the **Hershey–Chase experiment (1952)** used radioisotopes to falsify the hypothesis that proteins serve as the hereditary material.",
          hints: [
            "Identify which macromolecule contains phosphorus (³²P) versus sulfur (³⁵S).",
            "Explain the roles of the blender (shearing coats) and centrifugation (separating pellet vs supernatant).",
            "State the final radioactivity locations and conclusion.",
          ],
          modelAnswer:
            "Hershey and Chase grew two batches of bacteriophage T2: one with radioactive ³⁵S, which labels sulfur-containing amino acids in protein coats only, and another with ³²P, which labels phosphate groups in viral DNA only. After allowing phages to infect E. coli, they agitated cultures in a blender to shear empty viral capsids off bacterial surfaces and centrifuged to separate dense bacterial cells (pellet) from liquid medium (supernatant). Most ³⁵S remained in the supernatant while ³²P concentrated inside the bacterial pellet and passed to progeny phages, proving that viral DNA rather than protein directs heredity.",
          markScheme: [
            {
              point: "³⁵S labels protein coats (sulfur in amino acids) while ³²P labels DNA (phosphates) exclusively.",
              keywords: ["35s", "32p", "sulfur", "phosphate"],
            },
            {
              point: "Blending shears empty phage coats from bacteria and centrifugation separates cells (pellet) from liquid (supernatant).",
              keywords: ["blender", "centrifug", "pellet", "supernatant"],
            },
            {
              point: "³⁵S stays in the supernatant whereas ³²P enters the bacterial pellet.",
              keywords: ["supernatant", "pellet"],
            },
            {
              point: "Concludes DNA (not protein) enters the host cell and carries genetic instructions for progeny.",
              keywords: ["progeny", "dna", "genetic"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No accurate description of isotopes or experimental outcomes." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies the isotopes or conclusion but omits the blender/centrifugation separation or reverses pellet/supernatant." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly links ³²P/³⁵S elemental specificity, blender shearing, centrifugation into pellet vs supernatant, and falsification of protein heredity." },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "water-nucleic-acids",
          marks: 4,
          question:
            "Describe the molecular organization of eukaryotic **nucleosomes** and explain their roles in chromosomal packaging and gene regulation.",
          hints: [
            "Name the histone octamer (8 core histones), H1 linker histone, and ~146–147 bp wrapped DNA.",
            "Explain the electrostatic attraction between negatively charged phosphate groups and positively charged histones.",
            "Connect tight supercoiling to mitosis and chromatin accessibility to transcription.",
          ],
          modelAnswer:
            "Each eukaryotic nucleosome consists of roughly 146–147 base pairs of DNA wrapped about 1.65 turns around an octamer of eight core histone proteins, stabilized externally by an H1 linker histone. Binding is stabilized by electrostatic attraction between negatively charged DNA phosphate groups and positively charged basic amino acids (lysine/arginine) on histones. Nucleosomes coil chromatin into compact supercoiled chromosomes for safe segregation during mitosis and regulate transcription by physically restricting or exposing promoters to RNA polymerase.",
          markScheme: [
            {
              point: "Octamer of 8 core histone proteins wrapped by ~146–147 bp (~1.65–2 turns) of DNA.",
              keywords: ["octamer", "146", "147"],
            },
            {
              point: "H1 linker histone stabilizes the wrapped DNA and linker DNA joins adjacent beads.",
              keywords: ["h1", "linker"],
            },
            {
              point: "Electrostatic attraction between negatively charged phosphate backbone and positively charged histones.",
              keywords: ["negatively charged", "positively charged", "electrostatic"],
            },
            {
              point: "Enables chromosome supercoiling/compaction (mitosis) and controls promoter accessibility for transcription.",
              keywords: ["supercoil", "transcription", "compact"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid structural or functional details of nucleosomes." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions DNA wrapped around histones without octamer/H1 detail or charge mechanism." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately details histone octamer, H1 linker, electrostatic phosphate–histone attraction, supercoiling, and transcriptional regulation." },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "cell-structure-microscopy",
          marks: 4,
          question:
            "Explain how **endosymbiotic theory** accounts for the origin of **mitochondria**, and provide **three** independent lines of evidence supporting this theory.",
          hints: [
            "Describe engulfment of a free-living aerobic bacterium by an ancestral host cell without digestion (mutualism).",
            "Cite double membranes, circular naked DNA, 70S ribosomes, binary fission, or sequence homology.",
          ],
          modelAnswer:
            "Endosymbiotic theory proposes that a large ancestral anaerobic host cell engulfed a free-living aerobic bacterium by endocytosis without digesting it, forming a mutualistic partnership supplying ATP in exchange for shelter and nutrients. Supporting evidence includes: (1) a double membrane (inner bacterial plasma membrane plus outer host vesicle), (2) circular naked DNA lacking histones, and (3) bacterial-sized 70S ribosomes alongside autonomous division by binary fission.",
          markScheme: [
            {
              point: "Ancestral host cell engulfed an aerobic prokaryote by endocytosis without digesting it, establishing mutualism.",
              keywords: ["engulfed", "aerobic", "endocytosis", "mutualis"],
            },
            {
              point: "Double membrane (inner bacterial, outer host vesicle).",
              keywords: ["double membrane"],
            },
            {
              point: "Circular naked DNA without histones.",
              keywords: ["circular", "naked dna"],
            },
            {
              point: "70S ribosomes (or division by binary fission / bacterial size / α-proteobacterial DNA homology).",
              keywords: ["70s", "binary fission"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No accurate statement of endosymbiosis or supporting evidence." },
            { band: "1–2", marks: [1, 2], descriptor: "States basic engulfment concept or lists 1–2 pieces of evidence without precision." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains engulfment of an aerobic prokaryote plus three precise prokaryotic hallmarks (double membrane, circular naked DNA, 70S ribosomes / binary fission)." },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Outline",
          guideRef: "water-nucleic-acids",
          marks: 3,
          question:
            "Outline the leading scientific explanation for the origin and retention of liquid water on early Earth, and explain why astronomers prioritize the **Goldilocks zone** when searching for extraterrestrial life.",
          hints: [
            "Mention delivery via colliding water-rich asteroids/chondrites.",
            "Mention Earth's gravitational retention and moderate temperature range.",
            "Link liquid water in the Goldilocks zone to solvent-based cellular metabolism.",
          ],
          modelAnswer:
            "Water is thought to have been delivered largely by colliding water-rich asteroids (carbonaceous chondrites) after Earth cooled. Earth retained its oceans because its strong gravitational pull prevents water vapour from escaping to space and moderate temperatures keep H₂O liquid. Astrobiologists target exoplanets in a star's habitable zone because surface temperatures there allow stable liquid water to act as a metabolic solvent.",
          markScheme: [
            {
              point: "Extraplanetary delivery by colliding water-rich asteroids / comets.",
              keywords: ["asteroid", "chondrite", "comet"],
            },
            {
              point: "Retained by sufficient gravitational pull preventing escape of water vapour.",
              keywords: ["gravit"],
            },
            {
              point: "Habitable zone provides temperatures supporting stable liquid water required as a solvent for life.",
              keywords: ["liquid water", "solvent", "temperature"],
            },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "origins-of-cells-hl",
          marks: 4,
          question:
            "Evaluate the **Miller–Urey experiment (1953)** as scientific evidence for the abiotic origin of carbon compounds on prebiotic Earth.",
          hints: [
            "Outline what the apparatus simulated (warm water, reducing gases, electrical sparks for lightning) and what it yielded (amino acids).",
            "Provide a clear strength (proof of concept for spontaneous abiotic synthesis).",
            "Provide two limitations (uncertain prebiotic gas composition; formed simple monomers rather than self-replicating polymers/cells).",
          ],
          modelAnswer:
            "Miller and Urey passed electrical sparks (simulating lightning) through heated water vapour mixed with methane, ammonia, and hydrogen, successfully generating several amino acids abiotically within days. A major strength is that it experimentally demonstrated inorganic gases can spontaneously form biological monomers under anoxic prebiotic energy inputs. However, a key limitation is uncertainty over early Earth's exact atmosphere, which geochemists now suspect held more CO₂ and N₂ and fewer strongly reducing gases. Furthermore, producing simple amino acid monomers does not explain subsequent polymerization into functional proteins, nucleic acids, or membrane-bound cells.",
          markScheme: [
            {
              point: "Apparatus simulated lightning (sparks) in warm water vapour and reducing gases (CH₄, NH₃, H₂) yielding amino acids.",
              keywords: ["sparks", "amino acids", "methane"],
            },
            {
              point: "Strength: provides experimental proof of concept for spontaneous abiotic formation of organic monomers.",
              keywords: ["strength", "monomers", "spontaneously", "proof"],
            },
            {
              point: "Limitation 1: exact gas composition of early Earth's atmosphere is uncertain (may have been less reducing / more CO₂ & N₂).",
              keywords: ["uncertain", "co2", "reducing", "composition"],
            },
            {
              point: "Limitation 2: yielded only simple monomers, not functional polymers, self-replicating nucleic acids, or cells.",
              keywords: ["polymer", "polymers", "cells"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant description or evaluation of Miller–Urey." },
            { band: "1–2", marks: [1, 2], descriptor: "Describes the apparatus/result without balanced strengths and limitations." },
            { band: "3–4", marks: [3, 4], descriptor: "Provides balanced evaluation combining experimental design, proof-of-concept strength, atmospheric uncertainty, and the monomer-to-polymer gap." },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "origins-of-cells-hl",
          marks: 4,
          question:
            "Explain how the **RNA World hypothesis** resolves the prebiotic origin paradox, and why **DNA** and **proteins** eventually took over their modern cellular functions.",
          hints: [
            "Explain BOTH roles of RNA (information storage/template replication + ribozyme catalysis).",
            "Cite modern ribosomal rRNA peptidyl transferase as evidence.",
            "Explain why DNA replaced RNA for storage (greater stability, double-stranded repair) and why proteins replaced ribozymes (20 diverse R-groups).",
          ],
          modelAnswer:
            "Modern cells depend on DNA to encode enzymes and enzymes to replicate DNA, creating a chicken-and-egg paradox. The RNA World hypothesis resolves this because RNA can both store heritable sequences via complementary base pairing and fold into catalytic ribozymes — still preserved today in the rRNA active site of ribosomes. Later, DNA replaced RNA as the genetic archive because deoxyribose lacks the reactive 2'-OH group and double-stranded DNA permits accurate error repair. Proteins took over most catalysis because twenty chemically diverse amino acid R-groups provide far greater catalytic versatility and speed than four RNA nucleotides.",
          markScheme: [
            {
              point: "RNA can store genetic information and guide complementary template replication.",
              keywords: ["complementary", "store", "heritable", "template"],
            },
            {
              point: "RNA can fold into catalytic ribozymes (evidenced by rRNA catalysis in modern ribosomes).",
              keywords: ["ribozyme", "rrna"],
            },
            {
              point: "DNA later replaced RNA for storage due to superior chemical stability (deoxyribose / double-stranded repair).",
              keywords: ["stability", "deoxyribose", "repair"],
            },
            {
              point: "Proteins replaced most ribozymes because 20 diverse amino acid R-groups confer greater catalytic versatility.",
              keywords: ["20", "twenty", "r-groups", "versatility"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid explanation of RNA World or transition to DNA/proteins." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions one role of RNA or vaguely notes DNA stability without explaining the paradox." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains dual informational + ribozyme roles of RNA (with rRNA evidence) and clearly justifies the evolutionary shift to stable DNA and versatile protein enzymes." },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Compare and contrast",
          guideRef: "viruses-diversity-hl",
          marks: 4,
          question:
            "Compare and contrast the **lytic** and **lysogenic** cycles of **bacteriophage lambda (λ)** infecting *Escherichia coli*.",
          hints: [
            "State a shared opening step (attachment via tail fibres and injection of viral dsDNA).",
            "Contrast host chromosome fate (degraded vs integrated prophage).",
            "Contrast host survival/release (rapid lysis vs dormant copying via binary fission) and stress induction.",
          ],
          modelAnswer:
            "Both pathways begin when phage tail fibres bind E. coli surface receptors and inject linear dsDNA into the cytoplasm while leaving the protein capsid outside. In the lytic cycle, host DNA is degraded, host ribosomes immediately manufacture phage DNA and capsids, and lysozyme bursts (lyses) the bacterium to release new virions. In contrast, during the lysogenic cycle phage DNA integrates into the host chromosome as a dormant prophage silenced by a repressor protein, allowing the bacterium to survive and copy the prophage during binary fission. Environmental stress such as UV radiation can induce prophage excision, switching the virus into the lytic pathway.",
          markScheme: [
            {
              point: "Similarity: both begin with tail-fibre attachment and injection of phage dsDNA into the bacterium.",
              keywords: ["inject", "tail"],
            },
            {
              point: "Lytic cycle degrades host DNA, synthesizes/assembles virions, and bursts (lyses) the host cell.",
              keywords: ["lysis", "lyses", "bursts", "degraded"],
            },
            {
              point: "Lysogenic cycle integrates viral DNA as a dormant prophage copied vertically during host binary fission.",
              keywords: ["prophage", "binary fission"],
            },
            {
              point: "Host stress (e.g. UV damage/starvation) triggers prophage excision/induction into the lytic pathway.",
              keywords: ["excision", "stress", "repressor"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid comparison of lytic and lysogenic cycles." },
            { band: "1–2", marks: [1, 2], descriptor: "Distinguishes immediate cell death from dormancy but omits prophage integration or shared injection." },
            { band: "3–4", marks: [3, 4], descriptor: "Includes shared attachment/injection, lytic biosynthesis & lysis, lysogenic prophage vertical inheritance, and stress-induced switching." },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "viruses-diversity-hl",
          marks: 6,
          question:
            "Explain the molecular and population factors causing rapid evolution in **influenza** and **HIV**, and discuss the resulting clinical challenges for vaccination and drug therapy.",
          hints: [
            "Name short generation times, huge burst sizes, and error-prone viral enzymes lacking proofreading (RdRp / reverse transcriptase).",
            "Distinguish influenza antigenic drift (point mutations in HA/NA) and antigenic shift (segmented genome reassortment).",
            "Explain HIV gp120 variation blocking vaccine efficacy and why multi-drug combination therapy (HAART) is required against drug resistance.",
          ],
          modelAnswer:
            "Both influenza and HIV evolve exceptionally fast because they combine short replication cycles, enormous viral population sizes, and RNA genomes copied by enzymes lacking 3'→5' exonuclease proofreading — RNA-dependent RNA polymerase in influenza and reverse transcriptase in HIV. In influenza, rapid point mutations alter surface haemagglutinin (HA) and neuraminidase (NA) proteins through antigenic drift, enabling escape from existing host antibodies and forcing annual vaccine reformulation. In addition, influenza's 8-segment RNA genome undergoes reassortment during co-infection (antigenic shift), abruptly generating pandemic strains. In HIV, error-prone reverse transcription continually alters envelope gp120 epitopes, thwarting long-lasting vaccine development, and rapidly generates enzyme mutants resistant to single antiretroviral drugs. Clinicians therefore prescribe multi-drug combination therapy (HAART) targeting several viral enzymes simultaneously so that simultaneous resistance mutations become vanishingly improbable.",
          markScheme: [
            {
              point: "Short generation times and huge viral burst/population sizes generate abundant variation.",
              keywords: ["generation", "population", "burst"],
            },
            {
              point: "Viral RNA polymerase / reverse transcriptase lack proofreading, yielding high mutation rates.",
              keywords: ["proofreading", "reverse transcriptase"],
            },
            {
              point: "Influenza antigenic drift (point mutations in HA/NA) evades antibodies and requires updated annual vaccines.",
              keywords: ["antigenic drift", "annual"],
            },
            {
              point: "Influenza antigenic shift (reassortment of segmented RNA genomes during co-infection) creates pandemic strains.",
              keywords: ["antigenic shift", "reassortment", "segmented"],
            },
            {
              point: "HIV rapid mutation of gp120 epitopes prevents effective durable vaccines and drives drug resistance.",
              keywords: ["gp120", "resistance"],
            },
            {
              point: "Combination antiretroviral therapy (HAART) targets multiple viral enzymes simultaneously to prevent escape mutants.",
              keywords: ["combination", "haart", "multiple"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant explanation of viral mutation or clinical consequences." },
            { band: "1–2", marks: [1, 2], descriptor: "Notes that viruses mutate rapidly without explaining lack of proofreading or linking to influenza/HIV management." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains error-prone RNA replication and discusses either influenza antigenic drift/shift or HIV drug resistance clearly." },
            { band: "5–6", marks: [5, 6], descriptor: "Thorough HL synthesis covering lack of proofreading in RdRp/reverse transcriptase, influenza drift & shift, annual vaccines, HIV gp120 variation, and combination HAART rationale." },
          ],
        },
        {
          id: "a1-a2-unity-molecules-cells-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "origins-of-cells-hl",
          marks: 8,
          question:
            "Discuss the molecular and geological evidence for the **Last Universal Common Ancestor (LUCA)**, and explain how **alkaline hydrothermal vents** could have provided the chemical and energetic conditions needed for early cellular life.",
          hints: [
            "Clarify that LUCA was the last shared ancestor of all surviving cellular domains (~3.8–4.2 Ga), NOT the very first protocell.",
            "Cite universal molecular traits: genetic code, ATP, L-amino acids, phospholipid membranes, ~355 conserved genes.",
            "Cite geological/chronological evidence: stromatolites (~3.5–3.7 Ga), ¹²C isotopic enrichment (~3.7–4.1 Ga), molecular clocks.",
            "Explain alkaline hydrothermal vent advantages: H₂/CO₂, catalytic Fe–S minerals, UV shelter, and natural transmembrane H⁺ gradients across mineral pores.",
          ],
          modelAnswer:
            "The Last Universal Common Ancestor (LUCA) was the most recent shared cellular ancestor of Bacteria, Archaea, and Eukarya — not the very first protocell, since earlier rival lineages left no surviving descendants. Strong molecular evidence for LUCA includes the universal genetic code shared across all domains, universal reliance on ATP for energy transfer, identical homochirality (L-amino acids and D-sugars), and roughly 355 conserved core genes shared by deeply branching bacteria and archaea. Chronological and geological evidence dates early microbial life and LUCA to approximately 3.8–4.2 billion years ago through fossilized stromatolites (3.4–3.7 Ga), preferential biological enrichment of lighter ¹²C isotopes in ancient graphite (~3.7–4.1 Ga), and molecular clock phylogenies of conserved rRNA genes. Phylogenetic reconstruction indicates LUCA was an anaerobic, heat-loving chemoautotroph utilizing H₂, CO₂, and iron–sulfur clusters. Deep-sea alkaline hydrothermal vents match these traits remarkably well: warm alkaline vent fluid (pH ~10) meeting mildly acidic early seawater (pH ~5–6) created natural proton (H⁺) gradients across thin porous mineral walls — mimicking modern chemiosmosis without light. Meanwhile, Fe–S mineral surfaces catalysed abiotic carbon fixation while overlying deep ocean water shielded fragile protocells from lethal prebiotic UV radiation.",
          markScheme: [
            {
              point: "Distinguishes LUCA as the last shared ancestor of all surviving life (not the very first protocell).",
              keywords: ["surviving", "not the very first", "extinct"],
            },
            {
              point: "Universal genetic code across Bacteria, Archaea, and Eukarya supports common ancestry.",
              keywords: ["universal genetic code"],
            },
            {
              point: "Shared biochemistry: ATP, L-amino acids, or ~355 conserved core genes across deep clades.",
              keywords: ["atp", "355", "l-amino"],
            },
            {
              point: "Fossilized stromatolites (~3.4–3.7 Ga) provide morphological geological evidence of ancient prokaryotes.",
              keywords: ["stromatolite"],
            },
            {
              point: "Biological ¹²C isotopic enrichment (and/or molecular clock dating placing LUCA at ~3.8–4.2 Ga).",
              keywords: ["12c", "isotop", "molecular clock"],
            },
            {
              point: "LUCA's conserved genes indicate an anaerobic, thermophilic, H₂-using chemoautotroph.",
              keywords: ["anaerobic", "thermophil", "chemoautotroph"],
            },
            {
              point: "Alkaline vents provide natural transmembrane proton (H⁺) gradients across porous mineral walls powering early chemiosmosis.",
              keywords: ["proton", "h+", "gradient", "chemiosmosis"],
            },
            {
              point: "Fe–S mineral surfaces catalyse carbon fixation while deep water shields early life from lethal UV radiation.",
              keywords: ["fe-s", "iron", "uv"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant discussion of LUCA or hydrothermal vents." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies LUCA as a common ancestor or mentions vents vaguely without supporting evidence." },
            { band: "3–5", marks: [3, 5], descriptor: "Combines molecular universality (genetic code, ATP) with geological dating (stromatolites/isotopes) or vent chemistry, though some mechanisms lack depth." },
            { band: "6–8", marks: [6, 8], descriptor: "Authoritative IB HL synthesis distinguishing LUCA from first protocells, integrating universal molecular homologies, stromatolites, ¹²C enrichment, molecular clocks, and alkaline vent H⁺ gradients, Fe–S catalysis, and UV protection." },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 synoptic, high-demand IB questions — ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "a1-a2-unity-molecules-cells-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "cell-structure-microscopy",
      question:
        "Two micrographs are printed at different magnifications: a bacterial rod measures **30 mm** on a TEM image at **×15 000**, while a eukaryotic yeast cell measures **48 mm** on an image at **×6000**. How many times longer is the **actual** yeast cell than the **actual** bacterium?",
      answer: { type: "number", value: 4, display: "4" },
      traps: [
        {
          spec: { type: "number", value: 1.6, tolerance: 0.05 },
          feedback: "1.6 is the ratio of the printed image sizes (48 / 30), ignoring that the two micrographs have different magnifications!",
        },
      ],
      hints: [
        "Calculate the actual length of each cell separately in μm using A = I / M.",
        "Bacterium: 30 000 μm ÷ 15 000; Yeast: 48 000 μm ÷ 6000.",
        "Divide the actual yeast length by the actual bacterial length.",
      ],
      solution: [
        "Actual bacterium length = {{30000 / 15000 = 2.0}} μm.",
        "Actual yeast length = {{48000 / 6000 = 8.0}} μm.",
        "Ratio = {{8.0 / 2.0 = 4}} times longer.",
      ],
      strategy: "Compare actual sizes, never raw printed image lengths",
    },
    {
      id: "a1-a2-unity-molecules-cells-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "water-nucleic-acids",
      question:
        "A double-stranded circular bacterial plasmid consists of **2500 base pairs** (5000 nucleotides) and contains exactly **6100 hydrogen bonds** linking its two strands. Determine the **percentage of guanine (G)** bases in this plasmid (enter the number only).",
      answer: { type: "number", value: 22, display: "22%" },
      traps: [
        {
          spec: { type: "number", value: 44 },
          feedback: "44% is the percentage of G–C base pairs (which equals %G + %C) — divide by 2 to get %G alone!",
        },
      ],
      hints: [
        "Let a = number of A–T base pairs and g = number of G–C base pairs, so a + g = 2500.",
        "Total hydrogen bonds obey 2a + 3g = 6100.",
        "Subtract 2(a + g) = 5000 from 2a + 3g = 6100 to find g directly, then divide by 5000 total bases!",
      ],
      solution: [
        "Set {{a + g = 2500}} and {{2a + 3g = 6100}}.",
        "Eliminate {{a}}: {{(2a + 3g) - 2(a + g) = 6100 - 5000}}, giving {{g = 1100}} G–C base pairs (hence 1100 G bases and 1100 C bases).",
        "Out of {{5000}} total nucleotides, {{%G = (1100 / 5000) * 100 = 22%}}.",
      ],
      strategy: "Simultaneous equations on base pairs and hydrogen bonds",
    },
    {
      id: "a1-a2-unity-molecules-cells-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "water-nucleic-acids",
      question:
        "A eukaryotic chromosome arm of length {{6.0 * 10^7}} bp is packaged uniformly into nucleosomes spaced every **200 bp**, with **147 bp** wrapped around each histone octamer and **53 bp** of linker DNA. Calculate the **percentage** of the chromosome's DNA that is directly wrapped around histone octamers (give your answer to 1 decimal place).",
      answer: { type: "number", value: 73.5, tolerance: 0.1, display: "73.5%" },
      traps: [
        {
          spec: { type: "number", value: 26.5, tolerance: 0.1 },
          feedback: "26.5% is the proportion of linker DNA (53 / 200) — the question asks for the DNA wrapped around histone octamers!",
        },
      ],
      hints: [
        "Notice that every 200 bp repeating unit has the exact same fraction of wrapped core DNA.",
        "Calculate (147 ÷ 200) × 100%.",
      ],
      solution: [
        "Because the packaging repeat is uniform, the overall wrapped fraction equals the fraction inside a single 200 bp repeat unit.",
        "{{(147 / 200) * 100 = 73.5%}}.",
      ],
      strategy: "Unit-repeat invariance",
    },
    {
      id: "a1-a2-unity-molecules-cells-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "viruses-diversity-hl",
      question:
        "In an untreated HIV-positive patient, approximately {{1.0 * 10^9}} new virions are produced each day. If the probability of reverse transcriptase creating a point mutation conferring resistance to a single antiretroviral drug is {{1.0 * 10^(-5)}} per virion, calculate the expected number of drug-resistant virions produced **each day** under single-drug therapy.",
      answer: { type: "number", value: 10000, display: "10000" },
      hints: [
        "Multiply daily virions produced (10⁹) by the per-virion resistance probability (10⁻⁵).",
        "Use index laws: 10⁹ × 10⁻⁵ = 10^(9 − 5).",
      ],
      solution: [
        "Expected resistant virions per day = {{1.0 * 10^9 * 1.0 * 10^(-5) = 1.0 * 10^4 = 10000}}.",
        "By contrast, under triple-drug HAART targeting three independent sites simultaneously, the probability drops to {{(10^(-5))^3 = 10^(-15)}}, giving only {{10^(-6)}} resistant virions per day!",
      ],
      strategy: "Multiplicative mutation probability in viral populations",
    },
    {
      id: "a1-a2-unity-molecules-cells-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "water-nucleic-acids",
      marks: 5,
      question:
        "Virologists isolate genetic material from a newly discovered respiratory pathogen and measure its base composition: **31% A**, **19% U**, **27% C**, and **23% G**. Deduce the **chemical identity** and **strandedness** of this genome, justify both deductions using Chargaff's rules, and predict one evolutionary consequence for vaccine design.",
      hints: [
        "Look at the presence of uracil (U) rather than thymine (T).",
        "Compare %A vs %U and %C vs %G — do they obey Chargaff's equality?",
        "Connect an RNA viral genome to error-prone RNA-dependent RNA polymerase lacking proofreading.",
      ],
      modelAnswer:
        "The genome is RNA rather than DNA because it contains the pyrimidine base uracil (U) instead of thymine (T). It must be single-stranded rather than double-stranded because it violates Chargaff's pairing equalities: %A (31%) does not equal %U (19%) and %C (27%) does not equal %G (23%), showing no complementary partner strand is present. Because single-stranded RNA viruses replicate using RNA-dependent RNA polymerase lacking proofreading, this pathogen is predicted to accumulate rapid point mutations (antigenic drift), making durable single-shot vaccine design difficult and likely requiring periodically updated boosters.",
      markScheme: [
        {
          point: "Deduces the genome is RNA based on the presence of uracil (and absence of thymine).",
          keywords: ["rna", "uracil"],
        },
        {
          point: "Deduces the genome is single-stranded.",
          keywords: ["single-stranded"],
        },
        {
          point: "Justifies strandedness quantitatively: %A (31%) ≠ %U (19%) and/or %C (27%) ≠ %G (23%), violating complementary pairing ratios.",
          keywords: ["31%", "19%", "violat", "not equal"],
        },
        {
          point: "Predicts high mutation rate because viral RNA polymerase lacks proofreading.",
          keywords: ["proofreading", "mutation"],
        },
        {
          point: "Links rapid antigenic drift to vaccine escape / need for updated vaccine formulations.",
          keywords: ["antigenic drift", "updated", "boosters", "escape"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Incorrect nucleic acid identification and no valid reasoning." },
        { band: "1–2", marks: [1, 2], descriptor: "Identifies RNA or single-strandedness without quantitative justification or evolutionary link." },
        { band: "3–4", marks: [3, 4], descriptor: "Correctly deduces ssRNA using uracil and unequal base percentages, with a basic mutation/vaccine link." },
        { band: "5", marks: [5, 5], descriptor: "Complete quantitative deduction of ssRNA plus mechanistic link to error-prone RdRp, antigenic drift, and vaccine updating." },
      ],
    },
    {
      id: "a1-a2-unity-molecules-cells-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Predict",
      guideRef: "cell-structure-microscopy",
      marks: 5,
      question:
        "The antibiotic **chloramphenicol** specifically binds and inhibits bacterial **70S ribosomes** while leaving eukaryotic **80S cytoplasmic ribosomes** unaffected. Predict and explain the biochemical effect of exposing actively dividing human cells to high doses of chloramphenicol, linking your answer to **endosymbiotic theory**.",
      hints: [
        "Ask: where inside a human cell do 70S ribosomes actually exist?",
        "What essential respiratory proteins are translated inside mitochondria?",
        "Explain the downstream effect on aerobic ATP production and dividing-cell energy supply.",
      ],
      modelAnswer:
        "Although human cytoplasmic 80S ribosomes continue functioning normally, chloramphenicol enters human mitochondria and inhibits their prokaryotic-type 70S ribosomes. According to endosymbiotic theory, mitochondria descend from engulfed aerobic bacteria and therefore retain bacterial 70S ribosomes alongside circular naked DNA to translate essential inner-membrane electron-transport proteins. Blocking mitochondrial translation impairs oxidative phosphorylation, sharply reducing aerobic ATP synthesis and starving rapidly dividing human tissues (such as bone marrow stem cells) of energy.",
      markScheme: [
        {
          point: "Cytoplasmic 80S translation continues unaffected, but mitochondrial 70S ribosomes are inhibited.",
          keywords: ["mitochondri", "70s", "inhibit"],
        },
        {
          point: "Links mitochondrial 70S ribosomes to endosymbiotic ancestry from engulfed aerobic bacteria.",
          keywords: ["endosymbi", "engulfed", "bacteria"],
        },
        {
          point: "Mitochondrial synthesis of essential inner-membrane respiratory / electron-transport proteins drops.",
          keywords: ["electron-transport", "respiratory", "translation"],
        },
        {
          point: "Aerobic ATP synthesis (oxidative phosphorylation) declines sharply.",
          keywords: ["atp", "aerobic", "oxidative"],
        },
        {
          point: "High-energy / actively dividing human tissues (e.g. bone marrow) suffer energy depletion / toxicity.",
          keywords: ["energy", "bone marrow", "starving", "toxicity"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Claims human cells are completely unaffected or confuses 70S with 80S." },
        { band: "1–2", marks: [1, 2], descriptor: "Recognizes mitochondria have 70S ribosomes without explaining ATP drop or endosymbiotic link." },
        { band: "3–4", marks: [3, 4], descriptor: "Explains mitochondrial 70S inhibition and reduced ATP production clearly, linked to endosymbiosis." },
        { band: "5", marks: [5, 5], descriptor: "Integrates 80S immunity, mitochondrial 70S inhibition via bacterial ancestry, impaired respiratory protein translation, reduced aerobic ATP, and cellular toxicity." },
      ],
    },
    {
      id: "a1-a2-unity-molecules-cells-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "origins-of-cells-hl",
      marks: 6,
      question:
        "Critically evaluate the claim: *\"Because Pasteur's swan-neck flask experiment proved that cells arise only from pre-existing cells, living cells could never have originated from non-living chemistry on early Earth.\"*",
      hints: [
        "Explain what Pasteur's experiment ACTUALLY demonstrated (disproving rapid spontaneous generation in sterilized broth under modern conditions).",
        "Contrast modern Earth conditions (O₂-rich oxidizing atmosphere, ozone shield, ubiquitous microbial scavengers) with prebiotic Earth (~4.2 Ga).",
        "Outline the multi-step prebiotic pathway (abiotic monomers → amphipathic vesicles → RNA World → LUCA) operating over hundreds of millions of years.",
      ],
      modelAnswer:
        "The claim is scientifically flawed because it conflates Pasteur's demonstration under modern Earth conditions with the radically different environment of prebiotic Earth ~4.2 billion years ago. Pasteur's swan-neck flasks proved that sterilized broth exposed to dust-free air does not spontaneously generate complex modern microorganisms within days, establishing that cells arise only from pre-existing cells today. Spontaneous abiogenesis is currently blocked because free atmospheric O₂ rapidly oxidizes organic precursors and existing microbes immediately consume free organics. In contrast, early Earth had an anoxic reducing atmosphere lacking O₂ and ozone, allowing intense UV radiation, lightning, and hydrothermal energy to drive abiotic monomer synthesis (as modelled by Miller–Urey). Over hundreds of millions of years, self-assembling amphipathic fatty-acid vesicles and catalytic RNA ribozymes could gradually bridge non-living chemistry to the earliest protocells and eventually LUCA.",
      markScheme: [
        {
          point: "Correctly evaluates the claim as flawed / invalid due to contrasting modern vs prebiotic conditions.",
          keywords: ["flawed", "conflates", "modern", "prebiotic"],
        },
        {
          point: "Accurately states Pasteur's swan-neck result: sterilized broth remained microbe-free, disproving spontaneous generation today.",
          keywords: ["sterilized", "broth", "microbe"],
        },
        {
          point: "Explains modern barrier 1: oxidizing O₂-rich atmosphere breaks down abiotic organic molecules.",
          keywords: ["oxidiz", "o2", "oxygen"],
        },
        {
          point: "Explains modern barrier 2: existing living organisms immediately consume any free organic monomers.",
          keywords: ["consume", "scavenge", "existing"],
        },
        {
          point: "Contrasts early Earth's anoxic atmosphere, intense UV/lightning/geothermal energy enabling abiotic synthesis (Miller–Urey).",
          keywords: ["anoxic", "uv", "miller"],
        },
        {
          point: "Notes gradual multi-step transition (amphipathic vesicles, RNA ribozymes) over vast geological timescales.",
          keywords: ["vesicles", "ribozyme", "millions of years", "timescale"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Accepts the flawed claim uncritically or gives no relevant biological reasoning." },
        { band: "1–2", marks: [1, 2], descriptor: "States early Earth was different from today without explaining Pasteur's scope or modern O₂/microbial barriers." },
        { band: "3–4", marks: [3, 4], descriptor: "Clearly contrasts Pasteur's modern conditions with anoxic prebiotic Earth and identifies at least one modern barrier to abiogenesis." },
        { band: "5–6", marks: [5, 6], descriptor: "Rigorous IB NOS evaluation delineating Pasteur's scope, oxidizing O₂ & microbial consumption today, anoxic prebiotic energy sources, and gradual vesicle/RNA World emergence over deep time." },
      ],
    },
    {
      id: "a1-a2-unity-molecules-cells-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Discuss",
      guideRef: "viruses-diversity-hl",
      marks: 6,
      question:
        "Discuss the evidence supporting **multiple convergent origins** of viruses, contrasting the virosphere with cellular domains descended from **LUCA** and comparing structural diversity across **bacteriophage λ**, **SARS-CoV-2**, and **HIV**.",
      hints: [
        "Contrast universal cellular homologies (rRNA, genetic code linking Bacteria/Archaea/Eukarya to LUCA) with the total absence of any single gene shared across all viruses.",
        "Compare the three IB viral models: non-enveloped dsDNA phage λ, enveloped +ssRNA SARS-CoV-2, enveloped diploid ssRNA retrovirus HIV.",
        "Outline at least two evolutionary origin hypotheses (progressive escape, regressive reduction, virus-first) and explain convergent parasitism.",
      ],
      modelAnswer:
        "All cellular domains — Bacteria, Archaea, and Eukarya — share universal ribosomal RNA genes and translational machinery tracing back to a single Last Universal Common Ancestor (LUCA). By contrast, no single universal gene is conserved across all viral families, strongly indicating that viruses arose multiple times independently rather than from one common viral ancestor. This polyphyletic origin is reflected in extreme structural diversity across the three IB model viruses: bacteriophage lambda is a non-enveloped complex head-and-tail virus carrying linear dsDNA; SARS-CoV-2 is a spherical enveloped +ssRNA virus studded with spike glycoproteins; and HIV is an enveloped retrovirus carrying two +ssRNA copies plus reverse transcriptase inside a conical capsid. Three complementary hypotheses explain distinct viral lineages: progressive (escape) origins from mobile transposons acquiring capsids, regressive reduction from ancient cellular parasites shedding ribosomes (fitting giant DNA viruses), and virus-first pre-cellular replicators. Shared traits such as small fixed size, protein capsids, and obligate intracellular parasitism therefore represent convergent evolution toward efficient host-cell hijacking.",
      markScheme: [
        {
          point: "Cellular life shares universal rRNA / translational genes pointing to a single LUCA.",
          keywords: ["rrna", "universal", "luca"],
        },
        {
          point: "No single gene is shared across all viral families, rejecting a single common viral ancestor.",
          keywords: ["no single", "universal gene", "polyphyletic", "independently"],
        },
        {
          point: "Contrasts bacteriophage λ (non-enveloped dsDNA head-tail) with SARS-CoV-2 (enveloped +ssRNA with spikes).",
          keywords: ["dsdna", "spike", "non-enveloped"],
        },
        {
          point: "Includes HIV structural uniqueness (enveloped diploid ssRNA retrovirus carrying reverse transcriptase).",
          keywords: ["retrovirus", "reverse transcriptase", "conical"],
        },
        {
          point: "Outlines at least two viral origin hypotheses (progressive/escape transposons, regressive reduction, or virus-first).",
          keywords: ["progressive", "regressive", "escape", "transposon"],
        },
        {
          point: "Concludes shared capsid/size/obligate parasitism reflects convergent evolution.",
          keywords: ["convergent", "obligate"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant discussion of viral origins or structural diversity." },
        { band: "1–2", marks: [1, 2], descriptor: "Describes basic viral structures without addressing convergent origins or contrast with LUCA." },
        { band: "3–4", marks: [3, 4], descriptor: "Contrasts absence of a universal viral gene with LUCA and accurately compares 2–3 viral models." },
        { band: "5–6", marks: [5, 6], descriptor: "Comprehensive HL discussion contrasting cellular LUCA homologies against viral polyphyly, comparing phage λ/SARS-CoV-2/HIV accurately, and integrating progressive/regressive/virus-first hypotheses with convergent evolution." },
      ],
    },
  ],
};
