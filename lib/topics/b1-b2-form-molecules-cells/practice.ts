// ---------------------------------------------------------------------------
// Practice Questions for Theme B (1–2): Form & Function — Molecules & Cells
// quiz (10) · papers p1 (15) & p2 (15) · challenge (8) = 48 questions
// ---------------------------------------------------------------------------
import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // =========================================================================
  // DIAGNOSTIC QUIZ (10 questions: warmup + core mix across all 4 sections)
  // 4 MCQs with answerIndex [0, 2, 1, 3] keeping topic MCQ balance exact
  // =========================================================================
  quiz: [
    {
      id: "b1-b2-form-molecules-cells-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "carbohydrates-lipids-proteins",
      strategy: "Linear polypeptide condensation count (n − 1)",
      question: "A single linear polypeptide chain is assembled from 48 amino acids by condensation. How many **peptide bonds** are present in this chain? Give an integer.",
      answer: { type: "number", value: 47 },
      traps: [
        { spec: { type: "number", value: 48 }, feedback: "There are 48 amino acids, so only 48 − 1 = 47 links join them in an open chain." },
        { spec: { type: "number", value: 46 }, feedback: "Subtract 1 (not 2) from the monomer count for a single linear polypeptide." },
      ],
      hints: [
        "Each peptide bond links two adjacent amino acids.",
        "For one open chain of `n` monomers, the number of covalent links is `n − 1`.",
      ],
      solution: [
        "A single unbranched polypeptide of `n` amino acids contains `n − 1` peptide bonds.",
        "{{48 - 1 = 47}} peptide bonds.",
      ],
      commonError: "Answering 48 instead of 47 by equating monomer count with bond count.",
    },
    {
      id: "b1-b2-form-molecules-cells-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Define",
      guideRef: "membranes-transport",
      strategy: "Osmosis direction & aquaporin acceleration",
      question: "Which statement accurately describes osmosis across a selectively permeable plasma membrane?",
      options: [
        "Passive net movement of water from lower solute concentration to higher solute concentration",
        "Active pumping of water molecules from high solute concentration to low solute concentration",
        "Bulk engulfment of dissolved polar solutes inside clathrin-coated endocytic vesicles",
        "Passive movement of hydrated sodium ions through hydrophobic fatty-acid tails",
      ],
      answerIndex: 0,
      hints: [
        "Osmosis moves water down its water potential gradient without spending ATP.",
        "Higher water potential corresponds to lower solute concentration (more free water molecules).",
      ],
      explanation:
        "**Osmosis** is the **passive** net diffusion of water across a selectively permeable membrane from a region of lower solute concentration (higher water potential) to higher solute concentration (lower water potential), accelerated by aquaporin channels. It never requires ATP.",
    },
    {
      id: "b1-b2-form-molecules-cells-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "cell-specialization-sav",
      strategy: "Cube SA:V = 6 / L",
      question: "A cuboidal cell is modelled as a cube of side length `4 μm`. Calculate its surface-area-to-volume ratio (in μm⁻¹). Give a decimal.",
      answer: { type: "number", value: 1.5, tolerance: 0.01 },
      traps: [
        { spec: { type: "number", value: 0.67, tolerance: 0.02 }, feedback: "You inverted the ratio (V / SA) — divide Surface Area by Volume: 6 / L." },
        { spec: { type: "number", value: 96 }, feedback: "96 μm² is the surface area alone; now divide by volume (64 μm³)." },
        { spec: { type: "number", value: 64 }, feedback: "64 μm³ is the volume alone; divide surface area (96 μm²) by volume." },
      ],
      hints: [
        "For a cube of side `L`, `SA = 6L²` and `V = L³`, so `SA / V = 6 / L`.",
        "Evaluate {{6 / 4}}.",
      ],
      solution: [
        "Surface area: {{6 * 4^2 = 96}} μm²; Volume: {{4^3 = 64}} μm³.",
        "Surface-area-to-volume ratio: {{96 / 64 = 6 / 4 = 1.5}} μm⁻¹.",
      ],
      commonError: "Computing volume divided by surface area (`4/6 = 0.67`) instead of `SA / V`.",
    },
    {
      id: "b1-b2-form-molecules-cells-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "organelles-compartmentalization",
      strategy: "Matching organelle to biosynthetic output",
      question: "Which organelle modifies polypeptides received from transport vesicles and packages them into secretory vesicles for exocytosis?",
      options: [
        "Smooth endoplasmic reticulum",
        "Mitochondrial cristae",
        "Golgi apparatus",
        "Chloroplast stroma",
      ],
      answerIndex: 2,
      hints: [
        "Look for the curved stack of flattened cisternae that processes and sorts cargo from the rough ER.",
      ],
      explanation:
        "The **Golgi apparatus** receives transport vesicles from the rough ER at its *cis* face, modifies proteins (such as glycosylation), and packages them into secretory vesicles or lysosomes at its *trans* face.",
    },
    {
      id: "b1-b2-form-molecules-cells-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "carbohydrates-lipids-proteins",
      strategy: "Triglyceride ester-bond stoichiometry (3 per molecule)",
      question: "An adipocyte synthesizes 7 triglyceride molecules from glycerol and fatty acids. How many **ester bonds** are formed in total? Give an integer.",
      answer: { type: "number", value: 21 },
      traps: [
        { spec: { type: "number", value: 7 }, feedback: "Each triglyceride contains 3 fatty acids attached to glycerol, so 3 ester bonds form per molecule." },
        { spec: { type: "number", value: 14 }, feedback: "Phospholipids have 2 fatty-acid ester bonds; triglycerides have 3 fatty-acid ester bonds each." },
      ],
      hints: [
        "How many fatty-acid chains condense with one glycerol molecule to make a single triglyceride?",
        "Multiply 3 ester bonds per triglyceride by 7 molecules.",
      ],
      solution: [
        "Each triglyceride forms 3 ester bonds (1 glycerol + 3 fatty acids → 1 triglyceride + 3 H₂O).",
        "For 7 triglycerides: {{7 * 3 = 21}} ester bonds.",
      ],
    },
    {
      id: "b1-b2-form-molecules-cells-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Explain",
      guideRef: "membranes-transport",
      strategy: "Fatty acid unsaturation & membrane fluidity [HL]",
      question: "Why does increasing the proportion of cis-unsaturated fatty-acid tails in phospholipids make a plasma membrane more fluid?",
      options: [
        "Cis double bonds covalently cross-link adjacent phosphate heads into chains",
        "Cis double bonds introduce bends that hinder close hydrophobic tail packing",
        "Cis double bonds remove the hydrophilic phosphate head from each phospholipid",
        "Cis double bonds supply ATP energy to speed lateral lipid diffusion",
      ],
      answerIndex: 1,
      hints: [
        "Compare the linear shape of saturated tails against the bent shape of cis-unsaturated tails.",
        "More space between tails weakens hydrophobic Van der Waals attractions.",
      ],
      explanation:
        "**Cis double bonds** put rigid kinks into fatty-acid tails, preventing phospholipids from packing closely together, weakening intermolecular attractions, and increasing **membrane fluidity**.",
    },
    {
      id: "b1-b2-form-molecules-cells-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "membranes-transport",
      strategy: "Na⁺/K⁺-ATPase stoichiometry (2 K⁺ in per ATP) [HL]",
      question: "During active ion pumping across a neuronal membrane, Na⁺/K⁺-ATPase hydrolyses 18 molecules of ATP. How many **K⁺ ions** are pumped INTO the cell? Give an integer.",
      answer: { type: "number", value: 36 },
      traps: [
        { spec: { type: "number", value: 54 }, feedback: "54 is the number of Na⁺ ions pumped OUT (3 per ATP); K⁺ ions move IN at 2 per ATP." },
        { spec: { type: "number", value: 18 }, feedback: "18 is the net charge exported (3 − 2 = 1 per ATP), whereas 2 K⁺ ions enter per ATP." },
      ],
      hints: [
        "Recall the Na⁺/K⁺ pump ratio per ATP: 3 Na⁺ out, 2 K⁺ in.",
        "Multiply 18 ATP cycles by 2 K⁺ ions per cycle.",
      ],
      solution: [
        "Each ATP hydrolysed by Na⁺/K⁺-ATPase imports 2 K⁺ ions (and exports 3 Na⁺ ions).",
        "{{18 * 2 = 36}} K⁺ ions pumped into the cell.",
      ],
    },
    {
      id: "b1-b2-form-molecules-cells-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "cell-specialization-sav",
      strategy: "Adult stem-cell potency classification",
      question: "Haematopoietic stem cells residing in human red bone marrow divide to produce erythrocytes, lymphocytes, phagocytes, and platelets, but cannot produce neurons or liver cells. Which term describes their potency?",
      options: [
        "Totipotent",
        "Pluripotent",
        "Unipotent",
        "Multipotent",
      ],
      answerIndex: 3,
      hints: [
        "Can these bone-marrow cells generate an entire organism (totipotent) or every tissue of the body (pluripotent)?",
        "They generate several related blood lineages within one tissue system.",
      ],
      explanation:
        "Adult haematopoietic stem cells in bone marrow are **multipotent**: they differentiate into a restricted family of related cell types (all blood lineages) rather than every tissue type (pluripotent) or whole embryo + placenta (totipotent).",
    },
    {
      id: "b1-b2-form-molecules-cells-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Outline",
      guideRef: "organelles-compartmentalization",
      strategy: "Pair each organelle ultrastructural feature with its exact biochemical advantage",
      marks: 2,
      question: "Outline TWO structural adaptations of a mitochondrion that increase the efficiency of aerobic ATP synthesis.",
      modelAnswer:
        "The inner membrane is heavily folded into cristae, providing a large surface area for electron transport chains and ATP synthase. The intermembrane space has a very small volume so pumping protons rapidly builds a steep H⁺ concentration gradient for chemiosmosis.",
      markScheme: [
        {
          point: "Inner membrane folded into cristae to provide a large surface area for electron transport chain / ATP synthase / oxidative phosphorylation.",
          keywords: ["cristae", "folded inner membrane"],
        },
        {
          point: "Small volume of the intermembrane space allows rapid buildup of a steep proton / H⁺ concentration gradient (OR matrix concentrates Krebs cycle enzymes).",
          keywords: ["intermembrane space", "proton gradient", "h+ gradient", "matrix"],
        },
      ],
      hints: [
        "Think about the shape of the inner membrane and what protein complexes sit in it.",
        "Think about the size of the narrow compartment between the inner and outer membranes.",
      ],
      commonError: "Naming 'cristae' without stating why folding helps (increased surface area for ETC/ATP synthase).",
    },
    {
      id: "b1-b2-form-molecules-cells-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "carbohydrates-lipids-proteins",
      strategy: "Compare monomer isomer, bonding geometry, and biological role",
      marks: 3,
      question: "Distinguish between **amylose** and **cellulose** in terms of monomer structure, chain arrangement, and biological function in plants.",
      modelAnswer:
        "Amylose is a polymer of alpha-glucose linked by alpha-1,4 glycosidic bonds, whereas cellulose is a polymer of beta-glucose linked by beta-1,4 glycosidic bonds with alternating monomers inverted 180 degrees. Amylose coils into a compact helix, whereas cellulose forms straight parallel chains cross-linked by hydrogen bonds into microfibrils. Consequently, amylose acts as an osmotically inactive energy store, while cellulose provides high tensile strength in plant cell walls.",
      markScheme: [
        {
          point: "Monomer & bond: amylose uses α-glucose (α-1,4 glycosidic bonds) whereas cellulose uses β-glucose (β-1,4 bonds with alternate monomers flipped 180°).",
          keywords: ["alpha-glucose", "α-glucose", "beta-glucose", "β-glucose"],
        },
        {
          point: "Chain shape: amylose coils into a helix whereas cellulose forms straight parallel chains cross-linked by hydrogen bonds into microfibrils.",
          keywords: ["helix", "helical", "microfibril", "hydrogen bond"],
        },
        {
          point: "Function: amylose functions as a compact energy store whereas cellulose provides structural tensile strength in plant cell walls.",
          keywords: ["energy store", "energy storage", "tensile strength", "cell wall"],
        },
      ],
      hints: [
        "Contrast the C1 −OH orientation of α-glucose vs β-glucose.",
        "Connect α-1,4 curvature to helices and β-1,4 inversion to straight H-bonded microfibrils.",
        "Finish with energy storage vs structural cell-wall strength.",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS: P1 (15 Qs) & P2 (15 Qs)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER 1: Structured Core & HL Practice (15 questions)
    // -----------------------------------------------------------------------
    {
      id: "b1-b2-form-molecules-cells-p1",
      title: "Practice Paper 1: Structured Molecules, Membranes & Cells",
      level: "SL",
      questions: [
        {
          id: "b1-b2-form-molecules-cells-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "carbohydrates-lipids-proteins",
          strategy: "Hydrolysis consumes 1 H₂O per broken glycosidic bond",
          question: "An unbranched amylose chain containing 125 α-glucose monomers is completely hydrolysed into free glucose monomers by digestive enzymes. How many **water molecules** are consumed? Give an integer.",
          answer: { type: "number", value: 124 },
          traps: [
            { spec: { type: "number", value: 125 }, feedback: "125 monomers are linked by 125 − 1 = 124 glycosidic bonds, so 124 H₂O molecules are consumed." },
          ],
          hints: [
            "Each hydrolysis reaction adds one H₂O molecule to break one glycosidic bond.",
            "How many glycosidic bonds join 125 monomers in a single open chain?",
          ],
          solution: [
            "Number of glycosidic bonds in a linear chain of 125 monomers = {{125 - 1 = 124}}.",
            "Breaking all 124 bonds by hydrolysis consumes **124** water molecules.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q02",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "membranes-transport",
          strategy: "Link amphipathic polarity directly to bilayer orientation and selective permeability",
          marks: 3,
          question: "Explain how the chemical structure of phospholipids causes them to assemble into a selectively permeable membrane in aqueous environments.",
          modelAnswer:
            "Phospholipids are amphipathic, possessing a hydrophilic polar phosphate head and two hydrophobic non-polar fatty-acid tails. In water, the hydrophilic heads orient outward to form hydrogen bonds with aqueous extracellular fluid and cytoplasm, while the hydrophobic tails cluster inward away from water to form a dry non-polar core. This hydrophobic core blocks charged ions and large polar molecules while permitting small non-polar molecules such as O₂ and CO₂ to diffuse across.",
          markScheme: [
            {
              point: "Phospholipids are amphipathic with a hydrophilic (polar) phosphate head and two hydrophobic (non-polar) fatty-acid tails.",
              keywords: ["amphipathic", "phosphate head", "fatty-acid tail", "fatty acid tail"],
            },
            {
              point: "Hydrophilic heads face external/cytosolic water while hydrophobic tails point inward forming a non-polar bilayer core.",
              keywords: ["hydrophobic core", "non-polar core", "tails cluster inward", "point inward"],
            },
            {
              point: "The non-polar interior blocks ions / large polar solutes while allowing small non-polar molecules to cross (selective permeability).",
              keywords: ["blocks charged", "blocks ions", "impermeable to ions", "small non-polar"],
            },
          ],
          hints: [
            "Start with the term **amphipathic** and identify both regions of a phospholipid.",
            "Describe how water drives the two leaflets into a bilayer orientation.",
            "Conclude by linking the non-polar core to what can and cannot cross freely.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "cell-specialization-sav",
          strategy: "Sphere SA:V = 3 / r",
          question: "Model a unicellular green alga as a sphere of radius `r = 15 μm`. Calculate its surface-area-to-volume ratio (in μm⁻¹). Give a decimal.",
          answer: { type: "number", value: 0.2, tolerance: 0.005 },
          traps: [
            { spec: { type: "number", value: 5 }, feedback: "You computed r / 3 (V / SA) instead of 3 / r (SA / V)." },
            { spec: { type: "number", value: 0.4 }, feedback: "6 / L is for a cube; for a sphere of radius r, SA:V = 3 / r." },
          ],
          hints: [
            "For a sphere, {{SA = 4 pi r^2}} and {{V = (4/3) pi r^3}}, which simplifies to {{SA / V = 3 / r}}.",
            "Substitute `r = 15` into {{3 / r}}.",
          ],
          solution: [
            "Simplify sphere ratio: {{SA / V = (4 pi r^2) / ((4/3) pi r^3) = 3 / r}}.",
            "Substitute `r = 15 μm`: {{3 / 15 = 0.2}} μm⁻¹.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q04",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "organelles-compartmentalization",
          strategy: "Trace the chronological endomembrane secretory route",
          marks: 3,
          question: "Outline the intracellular pathway taken by a digestive enzyme from translation of its polypeptide chain to its release outside a pancreatic acinar cell.",
          modelAnswer:
            "The polypeptide is synthesized by 80S ribosomes attached to the rough endoplasmic reticulum and folds inside the rER lumen. It is packaged into a transport vesicle that buds off and fuses with the Golgi apparatus, where the enzyme is chemically modified and sorted. Finally, the Golgi packages the enzyme into a secretory vesicle that moves to the plasma membrane and fuses with it to release the enzyme by exocytosis.",
          markScheme: [
            {
              point: "Translated by 80S ribosomes bound to the rough endoplasmic reticulum (rER) and enters the rER lumen.",
              keywords: ["rough endoplasmic reticulum", "rough er", "rer"],
            },
            {
              point: "Carried in a transport vesicle to the Golgi apparatus for chemical modification / glycosylation / sorting.",
              keywords: ["golgi", "modified", "modification"],
            },
            {
              point: "Packaged into a secretory vesicle that fuses with the plasma membrane to release the enzyme via exocytosis.",
              keywords: ["secretory vesicle", "exocytosis"],
            },
          ],
          hints: [
            "Where are secreted proteins translated (free ribosomes or bound ribosomes)?",
            "Name the intermediate vesicle and the modifying stack of cisternae.",
            "Name the final bulk-release mechanism at the plasma membrane.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "carbohydrates-lipids-proteins",
          strategy: "Macronutrient energy yield (lipid 38 kJ g⁻¹ vs carb 17 kJ g⁻¹)",
          question: "During an endurance race, a runner oxidizes `25 g` of lipid (energy yield `38 kJ g⁻¹`) and `40 g` of carbohydrate (energy yield `17 kJ g⁻¹`). Calculate the total chemical energy released, in **kJ**. Give an integer.",
          answer: { type: "number", value: 1630 },
          traps: [
            { spec: { type: "number", value: 1945 }, feedback: "Check which energy density belongs to lipid (38 kJ g⁻¹) vs carbohydrate (17 kJ g⁻¹)." },
          ],
          hints: [
            "Compute energy from lipid: {{25 * 38}} kJ.",
            "Compute energy from carbohydrate: {{40 * 17}} kJ, then add both totals.",
          ],
          solution: [
            "Lipid energy = {{25 * 38 = 950}} kJ.",
            "Carbohydrate energy = {{40 * 17 = 680}} kJ.",
            "Total energy released = {{950 + 680 = 1630}} kJ.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "carbohydrates-lipids-proteins",
          strategy: "Distinguishing the four levels of protein structure [HL]",
          question: "Name the level of protein structure (primary, secondary, tertiary, or quaternary) that includes α-helices and β-pleated sheets stabilized solely by hydrogen bonds along the polypeptide backbone.",
          answer: { type: "text", accept: ["secondary", "secondary structure", "2°", "2nd"] },
          hints: [
            "Primary is the linear amino-acid sequence; tertiary involves R-group interactions.",
            "Which level sits directly between primary and tertiary?",
          ],
          solution: [
            "**Secondary** structure consists of regular α-helices and β-pleated sheets stabilized by hydrogen bonds between backbone C=O and N–H groups.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "membranes-transport",
          strategy: "Include BOTH fatty-acid unsaturation AND bidirectional temperature buffering by cholesterol [HL]",
          marks: 4,
          question: "Explain how fatty-acid tail composition and cholesterol together maintain appropriate fluidity in animal cell membranes across fluctuating temperatures.",
          modelAnswer:
            "Cis-unsaturated fatty-acid tails contain C=C double bonds that introduce kinks, keeping neighbouring phospholipids further apart, weakening intermolecular attractions, and increasing fluidity. Saturated fatty-acid tails are straight and pack tightly together, reducing fluidity. Cholesterol sits between phospholipid tails and acts as a bidirectional fluidity buffer: at high temperatures its rigid steroid rings restrict excessive lateral movement to prevent leakiness, while at low temperatures it disrupts regular packing to prevent the bilayer from solidifying.",
          markScheme: [
            {
              point: "Cis-unsaturated fatty acids have double-bond kinks that prevent tight packing and increase fluidity.",
              keywords: ["kink", "unsaturated", "prevent tight packing", "further apart"],
            },
            {
              point: "Saturated fatty acids are straight, pack closely together, and decrease membrane fluidity.",
              keywords: ["saturated", "pack tightly", "straight"],
            },
            {
              point: "At high temperatures, cholesterol restricts excessive phospholipid movement, reducing excess fluidity.",
              keywords: ["high temperature", "restricts", "excessive"],
            },
            {
              point: "At low temperatures, cholesterol disrupts close tail packing and prevents crystallization / solidification.",
              keywords: ["low temperature", "solidif", "crystalliz", "prevents packing"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant biological knowledge shown.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Describes either fatty-acid saturation OR one direction of cholesterol's effect only.",
              indicators: ["Mentions unsaturated kinks OR cholesterol stiffening without dual temperature buffering."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly explains both saturated vs cis-unsaturated tail packing AND cholesterol's dual buffering at both high and low temperatures.",
              indicators: ["Covers tail packing physics and both thermal extremes for cholesterol."],
            },
          ],
          hints: [
            "Compare straight saturated tails against kinked cis-unsaturated tails.",
            "Remember cholesterol does NOT act in just one direction — explain its high-temperature effect.",
            "Then explain cholesterol's opposite low-temperature anti-freezing effect.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q08",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "cell-specialization-sav",
          strategy: "Total surface area of a cube = 6L²",
          question: "In a diffusion practical, a student cuts a cubic agar block of side length `3 cm`. Calculate its total surface area in **cm²**. Give an integer.",
          answer: { type: "number", value: 54 },
          traps: [
            { spec: { type: "number", value: 27 }, feedback: "27 cm³ is the volume (L³); surface area is 6L²." },
            { spec: { type: "number", value: 18 }, feedback: "Remember to square the side length before multiplying by 6 faces: 6 × 3² = 54." },
          ],
          hints: [
            "A cube has 6 square faces, each with area `L²`.",
            "Compute {{6 * 3^2}}.",
          ],
          solution: [
            "Each face has area {{3 * 3 = 9}} cm².",
            "Six faces give total surface area {{6 * 9 = 54}} cm².",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "cell-specialization-sav",
          strategy: "Include BOTH similarities and clear structural/functional contrasts",
          marks: 4,
          question: "Compare and contrast the structure and functions of **Type I** and **Type II pneumocytes** in the mammalian alveolus.",
          modelAnswer:
            "Both Type I and Type II pneumocytes are specialized epithelial cells lining the alveolar wall that together sustain gas exchange. However, Type I pneumocytes are extremely thin, broad, flattened squamous cells covering roughly 95% of the alveolar surface to minimize diffusion distance for O₂ and CO₂. In contrast, Type II pneumocytes are thicker, cuboidal secretory cells packed with lamellar bodies that release pulmonary surfactant by exocytosis to reduce surface tension and prevent alveolar collapse. Additionally, Type II pneumocytes retain the ability to divide by mitosis and differentiate into new Type I pneumocytes to repair lung damage.",
          markScheme: [
            {
              point: "Similarity: both are specialized epithelial cells lining the alveolar wall that maintain efficient gas exchange.",
              keywords: ["both", "alveolar wall", "epithelial"],
            },
            {
              point: "Type I structure & function: extremely thin / flattened squamous cells providing a minimal diffusion distance for gas exchange.",
              keywords: ["flattened", "squamous", "thin", "diffusion distance"],
            },
            {
              point: "Type II structure & surfactant: cuboidal secretory cells (with lamellar bodies) secreting pulmonary surfactant to lower surface tension and prevent alveolar collapse.",
              keywords: ["cuboidal", "surfactant", "surface tension", "collapse"],
            },
            {
              point: "Repair capacity: Type II pneumocytes can divide by mitosis and differentiate to replace damaged Type I pneumocytes.",
              keywords: ["divide", "mitosis", "repair", "replace"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid comparison or contrast of pneumocytes.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies thinness of Type I or surfactant secretion of Type II without a full paired comparison.",
              indicators: ["Missing similarity or missing repair/surface-tension mechanism."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explicitly states a similarity and links Type I geometry, Type II surfactant physics, and tissue-repair capacity.",
              indicators: ["All four structural–functional points clearly linked."],
            },
          ],
          hints: [
            "For 'Compare and contrast', always start with at least ONE clear similarity.",
            "Contrast shape: flattened squamous sheet (Type I) vs cuboidal secretory cell (Type II).",
            "Explain how surfactant prevents collapse AND mention Type II cells regenerating Type I cells.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "membranes-transport",
          strategy: "Na⁺/K⁺ pump ratio 3 Na⁺ : 2 K⁺ [HL]",
          question: "In a resting neuron, Na⁺/K⁺-ATPase pumps actively import `90` K⁺ ions into the cytoplasm. How many **Na⁺ ions** were simultaneously pumped OUT of the neuron? Give an integer.",
          answer: { type: "number", value: 135 },
          traps: [
            { spec: { type: "number", value: 60 }, feedback: "You used 2/3 instead of 3/2 — more Na⁺ leaves (3) than K⁺ enters (2)." },
            { spec: { type: "number", value: 45 }, feedback: "45 is the number of ATP molecules hydrolysed; multiply by 3 to get Na⁺ ions exported." },
          ],
          hints: [
            "First find the number of ATP pump cycles: each cycle imports 2 K⁺ ions, so cycles = {{90 / 2}}.",
            "Multiply the number of cycles by 3 Na⁺ ions exported per cycle.",
          ],
          solution: [
            "Pump cycles completed = {{90 / 2 = 45}} cycles (consuming 45 ATP).",
            "Na⁺ ions exported = {{45 * 3 = 135}} Na⁺ ions.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "carbohydrates-lipids-proteins",
          strategy: "Kinetic vibration → weak bonds break → active site distorts → peptide bonds stay intact",
          marks: 3,
          question: "Explain why heating a globular enzyme far above its optimum temperature destroys its catalytic activity while leaving its primary amino-acid sequence unchanged.",
          modelAnswer:
            "High thermal kinetic energy causes atoms in the enzyme to vibrate violently, breaking weak intramolecular interactions such as hydrogen bonds, ionic bonds, and hydrophobic interactions. Losing these stabilizing interactions unfolds the enzyme's native 3D tertiary conformation and distorts the active site so the substrate can no longer bind (denaturation). However, the covalent peptide bonds linking adjacent amino acids are far stronger and do not break, so the primary amino-acid sequence remains intact.",
          markScheme: [
            {
              point: "Increased thermal kinetic energy / vibration breaks weak non-covalent bonds (hydrogen, ionic, hydrophobic interactions).",
              keywords: ["kinetic energy", "hydrogen bond", "ionic", "weak"],
            },
            {
              point: "3D / tertiary conformation unfolds and the active site changes shape so the substrate can no longer bind (denaturation).",
              keywords: ["active site", "denaturation", "3d", "tertiary"],
            },
            {
              point: "Strong covalent peptide bonds are not broken, so the linear sequence of amino acids remains intact.",
              keywords: ["covalent", "peptide bond", "not broken", "intact"],
            },
          ],
          hints: [
            "Name the weak bonds broken by excess kinetic energy.",
            "Connect loss of 3D conformation to the shape of the active site.",
            "Explain why primary structure survives heat.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q12",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "organelles-compartmentalization",
          strategy: "Organelle identification from ultrastructural function",
          question: "Name the single-membrane eukaryotic organelle that maintains an acidic interior (pH ~5) filled with hydrolytic enzymes to digest engulfed pathogens and recycle worn-out organelles.",
          answer: { type: "text", accept: ["lysosome", "lysosomes"] },
          hints: [
            "It buds off from the Golgi apparatus and carries acid hydrolases.",
          ],
          solution: [
            "**Lysosomes** are single-membrane organelles housing hydrolytic enzymes active at acidic pH ~5.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "organelles-compartmentalization",
          strategy: "Cover enzyme concentration, incompatible pH/gradients, membrane area, and separated transcription/translation [HL]",
          marks: 4,
          question: "Explain FOUR functional advantages of internal membrane compartmentalization in eukaryotic cells.",
          modelAnswer:
            "First, enclosing enzymes and substrates inside small organelle volumes increases local concentration and collision frequency, accelerating reaction rates. Second, internal membranes isolate incompatible chemical conditions such as acidic lysosomal hydrolases at pH 5 away from neutral cytosol at pH 7.2, preventing self-digestion. Third, extensive folded internal membranes like cristae and thylakoids provide huge surface areas and tiny enclosed spaces to establish steep H⁺ gradients for ATP synthesis. Fourth, the nuclear envelope separates transcription from translation, allowing pre-mRNA intron splicing and post-transcriptional regulation before mature mRNA reaches cytoplasmic 80S ribosomes.",
          markScheme: [
            {
              point: "Concentrates enzymes and substrates in small volumes, raising collision rates and metabolic efficiency.",
              keywords: ["concentrat", "collision", "local"],
            },
            {
              point: "Isolates incompatible pH microenvironments or harmful hydrolytic enzymes (e.g. lysosomal pH 5 vs neutral cytosol) preventing cell self-digestion.",
              keywords: ["isolate", "incompatible", "lysosom", "self-digestion"],
            },
            {
              point: "Provides extensive internal membrane surface area and small compartments (cristae/thylakoids) to maintain proton gradients for chemiosmosis.",
              keywords: ["surface area", "cristae", "thylakoid", "gradient"],
            },
            {
              point: "Nuclear envelope separates transcription from translation, enabling pre-mRNA splicing / post-transcriptional modification before translation.",
              keywords: ["splicing", "intron", "post-transcriptional", "separates transcription"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid compartmentalization advantage explained.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States one or two general advantages without connecting to specific organelles or gene-expression separation.",
              indicators: ["Vague statements such as 'keeps things organized' score low unless linked to biochemistry."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explains 3–4 distinct biochemical advantages including pH isolation, gradient/surface area, and nuclear splicing separation.",
              indicators: ["Concrete biochemical mechanism given for each point."],
            },
          ],
          hints: [
            "Think about local substrate concentration inside a small compartment.",
            "Think about lysosomes (pH 5) vs cytosol (pH 7.2), and proton gradients in mitochondria/chloroplasts.",
            "Include the HL highlight: why eukaryotes separate nuclear transcription from cytoplasmic translation.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q14",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "carbohydrates-lipids-proteins",
          strategy: "BMI = mass / height²",
          question: "Calculate the Body Mass Index (in kg m⁻², to 1 decimal place) of an adult with body mass `78.4 kg` and height `1.75 m`.",
          answer: { type: "number", value: 25.6, tolerance: 0.05 },
          traps: [
            { spec: { type: "number", value: 44.8, tolerance: 0.1 }, feedback: "You divided mass by height without squaring height first (1.75² = 3.0625)." },
          ],
          hints: [
            "Square height in metres first: {{1.75^2 = 3.0625}}.",
            "Divide `78.4` by `3.0625`.",
          ],
          solution: [
            "{{h^2 = 1.75^2 = 3.0625}} m².",
            "{{BMI = 78.4 / 3.0625 = 25.6}} kg m⁻².",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare",
          guideRef: "cell-specialization-sav",
          strategy: "Define all three potency levels with sources + explain adult stem-cell niche",
          marks: 5,
          question: "Compare **totipotent**, **pluripotent**, and **multipotent** stem cells in terms of developmental potential and biological source, and explain the role of an adult stem-cell niche.",
          modelAnswer:
            "All three classes of stem cells are undifferentiated cells capable of self-renewal by mitosis and differentiation into specialized lineages. Totipotent stem cells, found in the zygote and early morula (up to ~8-cell stage), can differentiate into every embryonic body cell plus extra-embryonic tissues such as the placenta. Pluripotent stem cells, derived from the blastocyst inner cell mass, can form any body tissue cell type across all three germ layers but cannot generate placental tissues. Multipotent stem cells are restricted to a related family of cell types within one organ system, such as haematopoietic stem cells in red bone marrow producing all blood cell types or hair-follicle stem cells regenerating hair and epidermis. An adult stem-cell niche provides a localized microenvironment of chemical signals and anchorage that maintains these multipotent cells in a self-renewing pool for ongoing tissue growth and repair.",
          markScheme: [
            {
              point: "Shared property: all stem cells can self-renew via mitosis and differentiate into specialized cell types.",
              keywords: ["self-renew", "mitosis", "undifferentiated"],
            },
            {
              point: "Totipotent: zygote / early morula; forms all embryonic body cells AND extra-embryonic / placental tissues.",
              keywords: ["zygote", "morula", "placenta", "extra-embryonic"],
            },
            {
              point: "Pluripotent: embryonic inner cell mass (blastocyst); forms any body tissue cell type but NOT placenta / whole organism.",
              keywords: ["inner cell mass", "blastocyst", "any body", "germ layer"],
            },
            {
              point: "Multipotent: adult niches (bone marrow / hair follicle); forms a limited family of related cell types (e.g. blood cells).",
              keywords: ["bone marrow", "hair follicle", "limited", "related"],
            },
            {
              point: "Role of niche: specialized microenvironment supplying signals/anchorage to maintain stem cells for tissue repair and renewal.",
              keywords: ["microenvironment", "signals", "repair", "renewal"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No accurate stem-cell potency distinctions provided.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Mentions potency names with partial accuracy but omits sources or confuses pluripotent with totipotent.",
              indicators: ["Missing placenta distinction or missing niche role."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately distinguishes all three potency levels with sources OR covers two plus a clear niche explanation.",
              indicators: ["Minor omission of shared property or one specific source."],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Comprehensive comparison stating shared stem-cell traits, exact potency/source hierarchy, and niche function.",
              indicators: ["All five mark points thoroughly addressed."],
            },
          ],
          hints: [
            "Open with what all stem cells share (self-renewal + ability to differentiate).",
            "Distinguish totipotent (zygote, includes placenta) from pluripotent (blastocyst ICM, no placenta) and multipotent (bone marrow / hair follicle).",
            "Finish by describing how the stem-cell niche regulates maintenance and tissue repair.",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER 2: Data-Based (Paper 1B) & Extended Response (Paper 2) — 15 Qs
    // -----------------------------------------------------------------------
    {
      id: "b1-b2-form-molecules-cells-p2",
      title: "Practice Paper 2: Data-Based & Extended IB Responses",
      level: "HL",
      questions: [
        {
          id: "b1-b2-form-molecules-cells-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "carbohydrates-lipids-proteins",
          strategy: "Subtract mass of (n − 1) water molecules lost in condensation",
          question: "A single linear polypeptide consists of 180 amino acids with an average molecular mass of `128 Da` each. Given that each water molecule removed during condensation has a mass of `18 Da`, calculate the exact molecular mass (in **Da**) of the finished polypeptide. Give an integer.",
          answer: { type: "number", value: 19818 },
          traps: [
            { spec: { type: "number", value: 23040 }, feedback: "You forgot to subtract the mass of the 179 water molecules lost during condensation!" },
            { spec: { type: "number", value: 19800 }, feedback: "You subtracted 180 water molecules instead of 180 − 1 = 179 water molecules." },
          ],
          hints: [
            "First calculate the uncondensed mass of 180 amino acids: {{180 * 128}}.",
            "Condensing 180 amino acids into one chain releases `179` water molecules (`179 × 18 Da`). Subtract this mass.",
          ],
          solution: [
            "Mass of 180 free amino acids = {{180 * 128 = 23040}} Da.",
            "Water lost during condensation = {{179 * 18 = 3222}} Da.",
            "Polypeptide mass = {{23040 - 3222 = 19818}} Da.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q02",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "membranes-transport",
          strategy: "Use gradient direction, saturation, and ATP-inhibitor sensitivity to classify each solute",
          marks: 4,
          question:
            "The table shows uptake data for three solutes (P, Q, and R) entering mammalian cells across the plasma membrane:\n\n" +
            "| Solute | Movement vs gradient | Rate vs external concentration | Effect of cyanide (blocks ATP) |\n" +
            "|---|---|---|---|\n" +
            "| **P** | Down gradient | Linear increase (no plateau) | No change |\n" +
            "| **Q** | Down gradient | Hyperbolic curve reaching plateau | No change |\n" +
            "| **R** | Against gradient | Hyperbolic curve reaching plateau | Drops to zero |\n\n" +
            "Deduce the membrane transport mechanism for **each** of solutes P, Q, and R, justifying each deduction from the data.",
          modelAnswer:
            "Solute P enters by simple diffusion directly through the phospholipid bilayer because it moves down its concentration gradient, requires no ATP (unaffected by cyanide), and shows a linear rate with no carrier saturation. Solute Q enters by facilitated diffusion via specific channel or carrier proteins because it is passive (down gradient, unaffected by cyanide) yet reaches a maximum plateau as transport proteins become saturated. Solute R enters by active transport via protein pumps because it moves uphill against its concentration gradient, shows protein saturation, and ceases completely when cyanide blocks ATP synthesis.",
          markScheme: [
            {
              point: "Solute P = simple diffusion, justified by linear non-saturating rate down gradient with no ATP sensitivity.",
              keywords: ["simple diffusion", "linear", "no saturation", "phospholipid"],
            },
            {
              point: "Solute Q = facilitated diffusion, justified by passive down-gradient movement with no cyanide effect.",
              keywords: ["facilitated diffusion"],
            },
            {
              point: "Plateau in Q explained by saturation of a finite number of channel or carrier proteins.",
              keywords: ["saturat", "carrier", "channel"],
            },
            {
              point: "Solute R = active transport, justified by movement against concentration gradient AND stopping when cyanide blocks ATP.",
              keywords: ["active transport", "blocks atp", "atp synthesis", "uphill"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No correct transport mechanism identified.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Correctly names the three mechanisms with minimal or incomplete use of the table evidence.",
              indicators: ["Fails to explain why Q plateaus or why cyanide stops R."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Correctly deduces all three mechanisms and links every deduction explicitly to gradient, saturation kinetics, and ATP dependence.",
              indicators: ["Explicitly explains protein saturation for Q and ATP dependence for R."],
            },
          ],
          hints: [
            "Check ATP sensitivity first: cyanide stops only the ATP-requiring mechanism.",
            "Next distinguish the two passive mechanisms using the shape of the rate-vs-concentration curve.",
            "Link the plateau of Q directly to a finite number of binding/channel proteins.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "cell-specialization-sav",
          strategy: "Volume scales as r³, so dividing volume by 8 halves the radius",
          question: "A spherical embryonic cell of radius `20 μm` undergoes three cleavage divisions without overall growth, forming `8` identical smaller spherical cells of equal combined volume. Calculate the radius (in **μm**) of each daughter cell. Give an integer.",
          answer: { type: "number", value: 10 },
          traps: [
            { spec: { type: "number", value: 2.5 }, feedback: "Volume scales as r³, not r — dividing volume by 8 divides radius by the cube root of 8 (which is 2)." },
            { spec: { type: "number", value: 5 }, feedback: "Check the cube root of 8: 2³ = 8, so r_small = 20 / 2 = 10 μm." },
          ],
          hints: [
            "Each daughter cell has `1/8` of the parent cell's volume.",
            "Since {{V = (4/3) pi r^3}}, take the cube root of `1/8`: {{cbrt(8) = 2}}.",
          ],
          solution: [
            "Each daughter cell volume is {{V_small = V_parent / 8}}.",
            "Since `V ∝ r³`, {{r_small / r_parent = cbrt(1/8) = 1/2}}.",
            "Therefore {{r_small = 20 / 2 = 10}} μm (doubling the embryo's SA:V ratio!).",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q04",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Compare and contrast",
          guideRef: "carbohydrates-lipids-proteins",
          strategy: "Compare polypeptide/quaternary nature, then contrast shape, R-group polarity, solubility, amino-acid sequence, and function [HL]",
          marks: 6,
          question: "Compare and contrast the molecular structure and biological functions of **haemoglobin** and **collagen**.",
          modelAnswer:
            "Both haemoglobin and collagen are proteins built from amino acids joined by peptide bonds, and both exhibit quaternary structure composed of multiple polypeptide subunits. However, haemoglobin is a compact, spherical globular protein made of four polypeptide chains (two alpha and two beta subunits) each bound to a non-polypeptide iron-containing haem prosthetic group, whereas collagen is an elongated fibrous protein formed from three left-handed helical polypeptides wound into a tight right-handed triple helix with no prosthetic group. Haemoglobin has an irregular amino-acid sequence with hydrophilic R-groups positioned on its exterior and hydrophobic R-groups buried in its core, making it water-soluble for reversible oxygen transport inside red blood cells. Conversely, collagen has a highly repetitive Gly–X–Y sequence with many exposed non-polar residues and covalent cross-links between triple helices, making it insoluble in water with immense tensile strength to reinforce tendons, skin, and blood-vessel walls.",
          markScheme: [
            {
              point: "Similarity: both are proteins of amino acids linked by peptide bonds AND both possess quaternary structure (multiple polypeptide subunits).",
              keywords: ["quaternary", "peptide bond", "both"],
            },
            {
              point: "Overall shape & class: haemoglobin is rounded/globular whereas collagen is elongated/fibrous.",
              keywords: ["globular", "fibrous"],
            },
            {
              point: "Subunit composition: haemoglobin has 4 subunits (2 α + 2 β) plus Fe²⁺-containing haem prosthetic groups; collagen has 3 polypeptides in a triple helix without haem.",
              keywords: ["haem", "triple helix", "prosthetic"],
            },
            {
              point: "Sequence & R-group placement: haemoglobin has irregular sequence with outer hydrophilic / inner hydrophobic R-groups; collagen has repetitive (Gly–X–Y) sequence.",
              keywords: ["hydrophilic", "repetitive", "gly"],
            },
            {
              point: "Solubility contrast: haemoglobin is water-soluble whereas collagen is insoluble in water.",
              keywords: ["soluble", "insoluble"],
            },
            {
              point: "Function contrast: haemoglobin reversibly transports oxygen in erythrocytes whereas collagen provides high tensile strength in connective tissues (tendons/skin/vessels).",
              keywords: ["oxygen", "tensile strength", "tendon"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid structural or functional comparison.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies globular vs fibrous or O₂ transport vs strength with superficial structural detail.",
              indicators: ["No mention of subunit count, haem, triple helix, or R-group polarity."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly contrasts subunit architecture, solubility, and function, with minor omissions in similarity or R-group distribution.",
              indicators: ["Covers 3–4 mark points accurately."],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Thorough, accurate HL comparison integrating quaternary subunits, haem vs triple helix, R-group polarity/solubility, repetitive vs irregular sequence, and physiological roles.",
              indicators: ["Includes explicit similarity plus all key contrasts."],
            },
          ],
          hints: [
            "Open with a structural similarity (peptide bonds + quaternary multi-subunit structure).",
            "Contrast 4 chains + 4 haem prosthetic groups vs 3 chains in a triple helix.",
            "Contrast outer hydrophilic R-groups (water-soluble) vs repetitive sequence/insolubility, and link directly to O₂ binding vs tensile strength.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "membranes-transport",
          strategy: "Secondary active glucose absorption [HL]",
          question: "Name the apical membrane transport protein in intestinal epithelial cells that couples downhill Na⁺ influx to uphill glucose absorption.",
          answer: {
            type: "text",
            accept: [
              "sglt1",
              "sglt",
              "sodium-glucose cotransporter",
              "sodium glucose cotransporter",
              "sodium-glucose symporter",
              "sodium glucose symporter",
              "na+/glucose cotransporter",
            ],
          },
          hints: [
            "It simultaneously moves two solutes in the same direction (a cotransporter / symporter).",
            "Think of the acronym combining Sodium, GLucose, and Transporter.",
          ],
          solution: [
            "The **sodium–glucose cotransporter (SGLT1)** mediates secondary active absorption of glucose driven by the inward Na⁺ gradient.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q06",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "membranes-transport",
          strategy: "Link basolateral Na⁺/K⁺ pump → low cytosolic [Na⁺] → apical SGLT1 → basolateral GLUT2 [HL]",
          marks: 4,
          question: "Explain how active transport and facilitated diffusion cooperate across opposite membranes of an intestinal epithelial cell to absorb glucose from the gut lumen into the bloodstream.",
          modelAnswer:
            "On the basolateral membrane facing blood capillaries, Na⁺/K⁺-ATPase pumps hydrolyse ATP to export 3 Na⁺ ions out and import 2 K⁺ ions into the epithelial cell, maintaining a very low intracellular sodium concentration. This establishes a steep electrochemical Na⁺ gradient across the apical microvilli membrane facing the gut lumen. Sodium ions then flow down their gradient through the apical sodium–glucose cotransporter (SGLT1), providing energy to carry glucose uphill against its concentration gradient into the cell (indirect active transport). Finally, accumulated intracellular glucose exits passively down its concentration gradient across the basolateral membrane into capillaries via GLUT2 facilitated-diffusion carrier proteins.",
          markScheme: [
            {
              point: "Basolateral Na⁺/K⁺-ATPase actively pumps 3 Na⁺ out (and 2 K⁺ in) using ATP, keeping intracellular [Na⁺] low.",
              keywords: ["basolateral", "3 na+", "low intracellular", "atp"],
            },
            {
              point: "Establishes a steep inward electrochemical Na⁺ concentration gradient across the apical membrane.",
              keywords: ["gradient", "apical", "inward"],
            },
            {
              point: "Apical SGLT1 cotransporter couples downhill Na⁺ entry to uphill glucose uptake (secondary / indirect active transport).",
              keywords: ["sglt", "cotransporter", "secondary", "indirect", "uphill"],
            },
            {
              point: "High intracellular glucose diffuses passively out of the basolateral membrane into blood capillaries via GLUT2 carrier proteins (facilitated diffusion).",
              keywords: ["glut", "facilitated diffusion", "capillar", "carrier"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No accurate transport pathway described.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Mentions SGLT1 or Na⁺/K⁺ pump in isolation without linking the gradient across opposite cell faces.",
              indicators: ["Does not explain how ATP on one membrane drives glucose entry on the other."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly traces basolateral Na⁺/K⁺-ATPase → inward Na⁺ gradient → apical SGLT1 secondary active transport → basolateral facilitated diffusion.",
              indicators: ["Both membranes and energy coupling accurately explained."],
            },
          ],
          hints: [
            "Start on the **basolateral** side: what pump keeps cytosolic [Na⁺] low using ATP?",
            "Move to the **apical** microvilli: how does SGLT1 exploit that Na⁺ gradient?",
            "Finish on the **basolateral** side: how does concentrated intracellular glucose leave into blood?",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q07",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "organelles-compartmentalization",
          strategy: "Chloroplast compartmentalization",
          question: "Name the enzyme-rich fluid compartment inside a chloroplast surrounding the thylakoid grana where the Calvin cycle fixes CO₂ into carbohydrates.",
          answer: { type: "text", accept: ["stroma", "chloroplast stroma"] },
          hints: [
            "Do not confuse this with leaf epidermal 'stomata' (pores) — check the spelling carefully!",
          ],
          solution: [
            "The **stroma** is the fluid compartment of the chloroplast housing RuBisCO, Calvin-cycle enzymes, circular DNA, 70S ribosomes, and starch grains.",
          ],
          commonError: "Writing 'stomata' (leaf gas-exchange pores) instead of 'stroma'.",
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "organelles-compartmentalization",
          strategy: "Ligand-receptor binding → clathrin lattice invagination → vesicle budding/uncoating → hypercholesterolaemia consequence [HL]",
          marks: 4,
          question: "Describe how **clathrin-coated vesicles** mediate endocytosis of LDL cholesterol particles, and explain why a mutation preventing LDL receptors from associating with clathrin elevates blood cholesterol.",
          modelAnswer:
            "Extracellular LDL cholesterol particles bind specifically to transmembrane LDL receptors on the plasma membrane. On the cytosolic face, adaptor proteins recruit clathrin triskelions that assemble into a curved basket-like lattice, pulling the plasma membrane inward to form a clathrin-coated pit. The neck of the pit pinches off into the cytoplasm as a clathrin-coated vesicle, after which the clathrin coat disassembles so the bare vesicle can fuse with an endosome/lysosome to release cholesterol. If mutated receptors cannot recruit clathrin, coated pits fail to invaginate and internalize LDL, leaving cholesterol-rich LDL particles trapped at high levels in the bloodstream.",
          markScheme: [
            {
              point: "LDL ligands bind specifically to transmembrane LDL receptor proteins on the cell surface.",
              keywords: ["receptor", "bind", "ligand"],
            },
            {
              point: "Clathrin triskelions assemble into a curved cytosolic lattice, pulling the membrane inward to form a coated pit.",
              keywords: ["lattice", "basket", "coated pit", "invaginat"],
            },
            {
              point: "Pit pinches off as a clathrin-coated vesicle and subsequently uncoats to fuse with endosome/lysosome.",
              keywords: ["pinches off", "uncoat", "disassemble", "endosome"],
            },
            {
              point: "Mutated receptors cannot trigger clathrin-mediated endocytosis, so LDL cannot enter cells and accumulates in blood plasma.",
              keywords: ["accumulates", "trapped", "cannot enter", "fail to internalize"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid description of clathrin endocytosis.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies endocytosis generally without detailing the clathrin lattice mechanism or linking to blood LDL buildup.",
              indicators: ["Missing coated-pit assembly or uncoating."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately traces receptor binding, clathrin lattice invagination, vesicle pinching/uncoating, and the pathological effect of defective binding.",
              indicators: ["Clear mechanistic link to elevated plasma LDL."],
            },
          ],
          hints: [
            "Start with specific receptor–LDL binding on the outer membrane.",
            "Explain how clathrin on the **cytosolic** face bends the membrane into a pit and pinches off a vesicle.",
            "Connect failed receptor–clathrin coupling directly to uncleared blood LDL.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "carbohydrates-lipids-proteins",
          strategy: "O atoms in n-hexose polysaccharide = 6n − (n − 1) = 5n + 1",
          question: "An unbranched polysaccharide is formed by condensing 25 glucose (`C₆H₁₂O₆`) monomers. How many **oxygen atoms** are present in one complete molecule of this polysaccharide? Give an integer.",
          answer: { type: "number", value: 126 },
          traps: [
            { spec: { type: "number", value: 150 }, feedback: "150 is 25 × 6 before condensation; subtract 24 oxygen atoms lost in 24 H₂O molecules." },
            { spec: { type: "number", value: 125 }, feedback: "Only 25 − 1 = 24 water molecules are removed (not 25), leaving 150 − 24 = 126 O atoms." },
          ],
          hints: [
            "Before condensation, 25 glucose molecules hold {{25 * 6 = 150}} oxygen atoms.",
            "Condensing 25 monomers into a linear chain releases `24` H₂O molecules, removing `24` oxygen atoms.",
          ],
          solution: [
            "Initial oxygen atoms in 25 glucose monomers = {{25 * 6 = 150}}.",
            "Water molecules released = {{25 - 1 = 24}}, removing 24 oxygen atoms.",
            "Remaining oxygen atoms = {{150 - 24 = 126}} (formula `5n + 1 = 5(25) + 1 = 126`).",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "cell-specialization-sav",
          strategy: "Link size/cytoplasm, motility/mitochondria, and fertilization vesicles (acrosome vs cortical granules)",
          marks: 4,
          question: "Distinguish between the specialized cellular structures of human **spermatozoa** and **ova (egg cells)**, explaining how each adaptation supports fertilization and early development.",
          modelAnswer:
            "Spermatozoa are tiny, streamlined cells with minimal cytoplasm to reduce drag and maximize swimming speed, whereas ova are very large, spherical, non-motile cells containing abundant cytoplasm and lipid/yolk nutrients to nourish early embryo cleavage divisions. Sperm possess a microtubule flagellum powered by ATP from a densely packed spiral of mitochondria in the midpiece for active motility through the female reproductive tract, whereas ova lack a flagellum and are transported passively by oviduct cilia. At the tip of the sperm head sits an acrosome containing hydrolytic enzymes to digest through the egg's outer glycoprotein zona pellucida. Conversely, the ovum is surrounded by the protective zona pellucida and contains cortical granules beneath its plasma membrane that undergo exocytosis after one sperm fuses, hardening the coat to prevent polyspermy.",
          markScheme: [
            {
              point: "Size & cytoplasm: sperm are tiny/streamlined with minimal cytoplasm for speed, whereas ova are large with abundant yolk/cytoplasmic nutrient reserves for early cleavage.",
              keywords: ["streamlined", "nutrient", "yolk", "cleavage"],
            },
            {
              point: "Motility & energy: sperm have a flagellum and mitochondrial midpiece for ATP-driven swimming, whereas ova are non-motile.",
              keywords: ["flagellum", "midpiece", "mitochondria", "non-motile"],
            },
            {
              point: "Sperm acrosome: vesicle of hydrolytic enzymes at the head tip that digests the egg coat / zona pellucida.",
              keywords: ["acrosome", "hydrolytic", "digest"],
            },
            {
              point: "Ovum cortical granules & zona pellucida: exocytosis hardens the zona pellucida after fertilization to block polyspermy.",
              keywords: ["cortical granule", "zona pellucida", "polyspermy"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid structural contrast between sperm and ovum.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Contrasts size and motility only, omitting acrosome and cortical-granule mechanisms.",
              indicators: ["Mentions flagellum and yolk without fertilization-coat enzymes/polyspermy block."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly contrasts size/reserves, flagellum/midpiece vs immotility, acrosome enzymes, and cortical-granule polyspermy block.",
              indicators: ["All four structure–function links clearly articulated."],
            },
          ],
          hints: [
            "Contrast size and cytoplasmic volume (drag reduction vs nutrient storage).",
            "Contrast locomotion machinery (flagellum + mitochondrial midpiece vs non-motile).",
            "Contrast the specialized vesicles: **acrosome** in sperm vs **cortical granules** in ova.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "organelles-compartmentalization",
          strategy: "Base-10 logarithmic pH difference = 10^(ΔpH)",
          question: "In bright sunlight, active proton pumping lowers a chloroplast's thylakoid lumen to `pH 5.0` while the surrounding stroma sits at `pH 8.0`. How many times greater is `[H⁺]` in the thylakoid lumen than in the stroma? Give an integer.",
          answer: { type: "number", value: 1000 },
          traps: [
            { spec: { type: "number", value: 3 }, feedback: "3 is the pH difference; pH is a base-10 log scale, so compute 10³." },
            { spec: { type: "number", value: 30 }, feedback: "Each 1-unit pH shift multiplies [H⁺] by 10 (not adds 10): 10 × 10 × 10 = 1000." },
            { spec: { type: "number", value: 100 }, feedback: "Check the difference: 8.0 − 5.0 = 3.0 pH units, giving 10³ = 1000." },
          ],
          hints: [
            "Subtract the two pH values: {{8.0 - 5.0 = 3.0}}.",
            "Raise 10 to that power: {{10^3}}.",
          ],
          solution: [
            "Difference in pH = {{8.0 - 5.0 = 3.0}} units.",
            "Fold increase in `[H⁺]` = {{10^3 = 1000}} times greater inside the tiny thylakoid lumen.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "cell-specialization-sav",
          strategy: "Include shared striation/mitochondria + contrast shape, nuclei, branching, and intercalated discs",
          marks: 4,
          question: "Compare and contrast the cellular structure of **striated skeletal muscle fibres** and **cardiac muscle cells**, linking structural differences to their functions.",
          modelAnswer:
            "Both striated skeletal muscle fibres and cardiac muscle cells contain regularly repeating actin–myosin sarcomeres producing visible striations and abundant mitochondria to supply ATP for contraction. However, skeletal muscle fibres are very long, unbranched, cylindrical syncytia containing many peripheral nuclei formed by cell fusion, maximizing linear pulling force along whole voluntary muscles. In contrast, cardiac muscle cells are shorter, branched, and usually uninucleate, interlocking into a three-dimensional myocardial network. Cardiac cells are also connected end-to-end by specialized intercalated discs containing gap junctions and desmosomes so electrical impulses spread rapidly between cells for synchronized, involuntary rhythmic heartbeats.",
          markScheme: [
            {
              point: "Similarity: both are striated (repeating sarcomeres / myofibrils) and rich in mitochondria for ATP-driven contraction.",
              keywords: ["both", "sarcomere", "myofibril", "mitochondria"],
            },
            {
              point: "Skeletal fibres: long, cylindrical, unbranched, multinucleated (syncytium) for strong directional voluntary contraction.",
              keywords: ["multinucleated", "cylindrical", "unbranched", "voluntary"],
            },
            {
              point: "Cardiac cells: shorter, branched, typically uninucleate forming a 3D interconnected wall.",
              keywords: ["branched", "uninucleate", "single nucleus"],
            },
            {
              point: "Intercalated discs (with gap junctions) link cardiac cells to conduct electrical impulses rapidly for synchronized contraction.",
              keywords: ["intercalated disc", "gap junction", "synchronized", "impulse"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid muscle structure comparison.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Mentions voluntary vs involuntary or multinucleated vs branched without linking to intercalated discs or shared striations.",
              indicators: ["Missing similarity or missing impulse-conduction role of intercalated discs."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear similarity plus accurate structural and functional contrasts across nuclei, branching, and intercalated discs.",
              indicators: ["All four points explicitly tied to function."],
            },
          ],
          hints: [
            "Start with a similarity: both are **striated** and packed with **mitochondria**.",
            "Contrast nuclei count and branching (long multinucleated cylinders vs shorter branched uninucleate cells).",
            "Name the specialized junctions (**intercalated discs / gap junctions**) that synchronize heart contraction.",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q13",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "cell-specialization-sav",
          strategy: "Rectangular prism SA = 2(lw + lh + wh), V = lwh",
          question: "A flattened squamous epithelial cell is modelled as a rectangular prism measuring `20 μm × 20 μm × 2 μm`. Calculate its surface-area-to-volume ratio (in μm⁻¹). Give a decimal.",
          answer: { type: "number", value: 1.2, tolerance: 0.01 },
          traps: [
            { spec: { type: "number", value: 0.83, tolerance: 0.02 }, feedback: "You divided volume by surface area (800 / 960); divide SA by V instead." },
            { spec: { type: "number", value: 0.6 }, feedback: "Remember each pair of opposite faces occurs twice: SA = 2(400 + 40 + 40) = 960 μm²." },
          ],
          hints: [
            "Calculate total surface area: {{SA = 2(20*20 + 20*2 + 20*2)}} μm².",
            "Calculate volume: {{V = 20 * 20 * 2 = 800}} μm³, then divide `SA / V`.",
          ],
          solution: [
            "Surface area = {{2 * (400 + 40 + 40) = 2 * 480 = 960}} μm².",
            "Volume = {{20 * 20 * 2 = 800}} μm³.",
            "SA:V ratio = {{960 / 800 = 1.2}} μm⁻¹ (nearly double that of a cube of equal volume!).",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "carbohydrates-lipids-proteins",
          strategy: "Evaluate energy density, hydration mass, osmolarity, mobilization speed, and anaerobic respiration",
          marks: 5,
          question: "Discuss why mammals use **both** triglycerides (adipose lipid) and glycogen (carbohydrate) for energy storage rather than relying exclusively on one.",
          modelAnswer:
            "Both glycogen and triglycerides are insoluble, osmotically inactive polymers/molecules that store energy without raising cellular osmotic pressure. Triglycerides are superior for long-term energy storage because they release roughly 38 kJ g⁻¹ — more than twice the ~17 kJ g⁻¹ of carbohydrates — and because they are hydrophobic and stored anhydrously without bound water weight, minimizing body mass while also providing thermal insulation and organ cushioning. However, lipids are broken down more slowly and fatty acids can only be respired aerobically in mitochondria. Glycogen is retained for short-term energy needs because its highly branched α-1,6 structure provides numerous terminal ends for rapid enzymatic hydrolysis into soluble glucose. Crucially, glucose mobilized from glycogen can fuel both fast aerobic respiration and anaerobic glycolysis during intense sprinting when oxygen supply is limiting.",
          markScheme: [
            {
              point: "Shared osmotic advantage: both glycogen and triglycerides are insoluble and therefore osmotically inactive in cells.",
              keywords: ["insoluble", "osmotic"],
            },
            {
              point: "Lipid energy density: triglycerides yield ~38 kJ g⁻¹ vs ~17 kJ g⁻¹ for carbs (over twice as much energy per gram).",
              keywords: ["38", "17", "twice", "double", "energy per gram"],
            },
            {
              point: "Lipid anhydrous storage & secondary benefits: hydrophobic storage carries no bound water weight (plus thermal insulation / cushioning).",
              keywords: ["anhydrous", "without water", "no bound water", "insulation"],
            },
            {
              point: "Glycogen rapid mobilization: highly branched structure exposes many terminal ends for rapid hydrolysis to glucose.",
              keywords: ["branched", "rapid", "terminal ends", "hydrolysis"],
            },
            {
              point: "Anaerobic flexibility: glucose from glycogen can be respired anaerobically during bursts of intense exercise, whereas lipids require oxygen (aerobic only).",
              keywords: ["anaerobic", "aerobic", "oxygen"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid comparison of glycogen and triglycerides.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Mentions higher energy in lipids or fast energy in carbs without biochemical mechanisms.",
              indicators: ["Omits hydration mass, branching, and anaerobic metabolism."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly compares energy density, anhydrous mass advantage, and fast branched glycogen mobilization.",
              indicators: ["Misses either osmotic neutrality or aerobic-only lipid limitation."],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Balanced IB evaluation covering osmotic neutrality, ~38 vs ~17 kJ g⁻¹, anhydrous mass/insulation, branched rapid hydrolysis, and anaerobic respiration.",
              indicators: ["All five points integrated coherently."],
            },
          ],
          hints: [
            "Start with why BOTH are better than storing free dissolved glucose (osmolarity!).",
            "Give TWO advantages of triglycerides (energy per gram ~38 vs 17 kJ g⁻¹, plus anhydrous storage / insulation).",
            "Give TWO advantages of glycogen (highly branched rapid hydrolysis + ability to fuel **anaerobic** respiration).",
          ],
        },
        {
          id: "b1-b2-form-molecules-cells-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "membranes-transport",
          strategy: "Extended IB Paper 2 essay integrating bilayer self-assembly, transport proteins, fluidity/cholesterol, vesicles, and CAMs [HL]",
          marks: 7,
          question: "Discuss how the molecular architecture of the fluid mosaic plasma membrane enables **selective transport**, **thermal stability**, **vesicular exchange**, and **tissue cohesion**.",
          modelAnswer:
            "The plasma membrane consists of an amphipathic phospholipid bilayer in which hydrophilic phosphate heads face aqueous fluids and hydrophobic fatty-acid tails form an impermeable non-polar core, blocking charged ions and large polar solutes while allowing simple diffusion of small non-polar gases like O₂ and CO₂. Selective transport of polar molecules and ions is achieved by integral transmembrane proteins anchored by non-polar outer helices: passive channel and carrier proteins (including aquaporins and voltage- or ligand-gated channels) mediate facilitated diffusion down gradients, while ATP-driven pumps such as Na⁺/K⁺-ATPase (3 Na⁺ out, 2 K⁺ in per ATP) actively transport ions uphill and power secondary active cotransporters like SGLT1. Thermal stability relies on balancing cis-unsaturated fatty-acid kinks (which prevent tight packing and boost fluidity) against saturated tails, regulated by amphipathic cholesterol acting as a bidirectional buffer that restricts excessive lipid motion at high temperatures and prevents solidification at low temperatures. Because phospholipids are held together only by weak hydrophobic interactions, the bilayer remains fluid enough to bend, pinch off inward during endocytosis (such as clathrin-coated vesicle uptake), and fuse smoothly during exocytosis without rupturing. Finally, extracellular-facing glycoproteins mediate cell recognition, while specialized transmembrane cell adhesion molecules (CAMs, such as cadherins) physically link adjacent cells together to maintain stable multicellular tissues.",
          markScheme: [
            {
              point: "Amphipathic phospholipid bilayer forms a hydrophobic core permitting simple diffusion of small non-polar molecules while blocking ions/polar solutes.",
              keywords: ["amphipathic", "hydrophobic", "simple diffusion", "non-polar"],
            },
            {
              point: "Integral channel/carrier proteins (e.g. aquaporins, gated channels) enable passive facilitated diffusion down gradients.",
              keywords: ["integral", "facilitated diffusion", "aquaporin", "gated"],
            },
            {
              point: "Primary/secondary active pumps (Na⁺/K⁺-ATPase 3 Na⁺ out : 2 K⁺ in; SGLT1) transport solutes uphill against gradients using ATP / Na⁺ gradient.",
              keywords: ["na+/k+", "3 na+", "sglt", "against"],
            },
            {
              point: "Cis-unsaturated fatty-acid kinks increase fluidity whereas saturated tails pack tightly and decrease fluidity.",
              keywords: ["unsaturated", "kink", "saturated"],
            },
            {
              point: "Cholesterol buffers fluidity across temperatures: restricts excessive movement at high T and prevents solidification at low T.",
              keywords: ["cholesterol", "high temperature", "low temperature", "buffer"],
            },
            {
              point: "Weak hydrophobic interactions make the bilayer fluid, allowing membranes to bend, pinch off, and reseal during endocytosis (clathrin) and exocytosis.",
              keywords: ["endocytosis", "exocytosis", "reseal", "clathrin"],
            },
            {
              point: "Cell adhesion molecules (CAMs / cadherins) and glycoproteins mediate cell recognition and bind cells into cohesive tissues.",
              keywords: ["cell adhesion", "cam", "cadherin", "glycoprotein"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response contains no relevant membrane biology.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic recall of phospholipid bilayer and diffusion/active transport with minimal structural detail.",
              indicators: ["Omits fluidity regulation, vesicle dynamics, and CAMs."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explains selective permeability and passive/active proteins plus at least one of thermal buffering, vesicular fusion, or tissue adhesion.",
              indicators: ["Accurate SL core with partial HL integration."],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Strong structured synthesis covering three of the four themes in full HL detail, or all four with minor omission.",
              indicators: ["Includes Na⁺/K⁺ pump stoichiometry, cholesterol dual role, and CAMs/clathrin."],
            },
            {
              band: "7",
              marks: [7, 7],
              descriptor: "Comprehensive, examiner-level IB synthesis linking every molecular component across all four required functions without inaccuracy.",
              indicators: ["All seven mark points seamlessly connected."],
            },
          ],
          hints: [
            "Organize your answer into four crisp paragraphs matching the four bold themes in the prompt.",
            "Under selective transport, contrast lipid core (simple), channels/carriers/gated (facilitated), and Na⁺/K⁺ + SGLT1 (active).",
            "Under thermal stability, cover BOTH cis-unsaturated kinks AND cholesterol's two-way buffering.",
            "Conclude with membrane fluidity for endo-/exocytosis and CAMs/glycoproteins for tissue cohesion.",
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 questions — ALL difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "b1-b2-form-molecules-cells-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "carbohydrates-lipids-proteins",
      strategy: "Multi-chain quaternary protein: peptide bonds = total amino acids − number of chains [HL]",
      question: "Adult human haemoglobin (HbA) is a quaternary tetramer composed of two α-globin chains (`141` amino acids each) and two β-globin chains (`146` amino acids each). Calculate the exact total number of **peptide bonds** in one complete haemoglobin molecule. Give an integer.",
      answer: { type: "number", value: 570 },
      traps: [
        { spec: { type: "number", value: 573 }, feedback: "You treated all 574 amino acids as one single chain (574 − 1); haemoglobin has 4 separate chains, so subtract 4." },
        { spec: { type: "number", value: 574 }, feedback: "574 is the total number of amino acids; each of the 4 chains has n − 1 peptide bonds." },
      ],
      hints: [
        "First find the total amino acids across all 4 chains: {{2 * 141 + 2 * 146}}.",
        "Each separate polypeptide chain has `n − 1` peptide bonds.",
        "Subtract the number of separate chains (4) from the total amino-acid count (574).",
      ],
      solution: [
        "Total amino acids = {{2 * 141 + 2 * 146 = 282 + 292 = 574}}.",
        "Peptide bonds across 4 chains = {{2 * 140 + 2 * 145 = 280 + 290 = 570}} (equivalently {{574 - 4 = 570}}).",
      ],
    },
    {
      id: "b1-b2-form-molecules-cells-ch-q02",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Explain",
      guideRef: "carbohydrates-lipids-proteins",
      strategy: "Connect 1° substitution → outer hydrophobic patch → quaternary polymerization → erythrocyte sickling [HL]",
      marks: 5,
      question: "In sickle-cell anaemia, a single base substitution replaces a negatively charged hydrophilic glutamate (Glu) with a non-polar hydrophobic valine (Val) at position 6 on the outer surface of haemoglobin's β-chains. Explain, with reference to protein structural levels and R-group chemistry, how this tiny primary change alters erythrocytes under low oxygen.",
      modelAnswer:
        "Replacing hydrophilic glutamate with non-polar valine alters the primary amino-acid sequence of the β-globin polypeptide without destroying its α-helical secondary backbone folds. In normal soluble globular haemoglobin, hydrophilic R-groups occupy the exterior surface to interact with cytosolic water; placing hydrophobic valine on the outside creates an exposed non-polar sticky patch in tertiary structure. When oxygen dissociates in respiring capillaries, deoxy-haemoglobin changes quaternary conformation, exposing a complementary hydrophobic pocket on adjacent tetramers. Driven by hydrophobic exclusion from water, the valine patch docks into neighbouring haemoglobin molecules, polymerizing tetramers into long rigid insoluble fibres. These fibrous polymers distort the flexible biconcave red blood cell into a rigid sickle shape that blocks capillaries and impairs O₂ delivery.",
      markScheme: [
        {
          point: "Alters primary sequence (Glu → Val) while leaving peptide backbone / secondary α-helices largely intact.",
          keywords: ["primary", "secondary", "backbone", "sequence"],
        },
        {
          point: "Normal soluble globular proteins place hydrophilic R-groups outside; substituting non-polar valine creates an exposed hydrophobic patch on the surface.",
          keywords: ["hydrophobic patch", "non-polar", "surface", "exterior"],
        },
        {
          point: "Low oxygen alters quaternary deoxy-haemoglobin conformation, exposing a complementary hydrophobic binding pocket.",
          keywords: ["quaternary", "deoxy", "conformation", "pocket"],
        },
        {
          point: "Hydrophobic interactions cause haemoglobin tetramers to aggregate / polymerize into long insoluble rigid fibres.",
          keywords: ["polymeriz", "aggregat", "insoluble", "fibre"],
        },
        {
          point: "Fibres deform biconcave erythrocytes into rigid sickle cells that occlude capillaries / reduce O₂ transport.",
          keywords: ["biconcave", "sickle", "capillar", "deform"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant protein-folding explanation.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States that the mutation changes haemoglobin shape and sickles RBCs without R-group polarity or polymerization mechanics.",
          indicators: ["Does not explain why a hydrophobic exterior causes sticking."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly links non-polar surface patch to hydrophobic aggregation and red-blood-cell sickling under low O₂.",
          indicators: ["Covers 3–4 mark points accurately."],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete HL mechanistic trace across primary, tertiary surface polarity, deoxy quaternary shift, hydrophobic polymerization, and capillary blockage.",
          indicators: ["All five points cleanly integrated."],
        },
      ],
      hints: [
        "Contrast where polar vs non-polar R-groups normally belong on a water-soluble globular protein.",
        "Explain what thermodynamic force pushes two exposed hydrophobic patches together in watery cytoplasm.",
        "Connect fibre polymerization to the deformation of biconcave red blood cells.",
      ],
    },
    {
      id: "b1-b2-form-molecules-cells-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "membranes-transport",
      strategy: "Total Na⁺ = pumps × cycles s⁻¹ × time × 3 Na⁺/cycle [HL]",
      question: "A patch of unmyelinated axon membrane contains `500` active Na⁺/K⁺-ATPase pumps, each completing `60` cycles per second. Calculate the total number of **Na⁺ ions exported** across this membrane patch in `10` seconds. Give an integer.",
      answer: { type: "number", value: 900000 },
      traps: [
        { spec: { type: "number", value: 300000 }, feedback: "300,000 is the total number of ATP cycles; remember each cycle exports 3 Na⁺ ions!" },
        { spec: { type: "number", value: 600000 }, feedback: "600,000 is the number of K⁺ ions imported (2 per cycle); Na⁺ exports 3 per cycle." },
      ],
      hints: [
        "First find total pump cycles in 10 seconds: {{500 * 60 * 10}}.",
        "Multiply total cycles by 3 Na⁺ ions exported per cycle.",
      ],
      solution: [
        "Total pump cycles = {{500 * 60 * 10 = 300000}} cycles.",
        "Total Na⁺ ions exported = {{300000 * 3 = 900000}} ions.",
      ],
    },
    {
      id: "b1-b2-form-molecules-cells-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "cell-specialization-sav",
      strategy: "Calculate unpenetrated core % quantitatively, link to SA:V = 6/L, and generalize to multicellular exchange surfaces",
      marks: 5,
      question:
        "Three phenolphthalein-stained alkaline agar cubes of side lengths `1.0 cm`, `2.0 cm`, and `3.0 cm` are immersed in dilute HCl for 10 minutes. In every cube, HCl diffuses exactly `0.3 cm` inward from all six faces (leaving an unpenetrated pink central cube of side `L − 0.6 cm`).\n\n" +
        "Analyse how the **percentage of total volume reached by HCl** changes with cube size, and explain how this physical limit shapes the anatomy of large multicellular organisms.",
      modelAnswer:
        "Even though diffusion distance (0.3 cm) is identical in all three cubes, the unpenetrated core side length is 0.4 cm (V = 0.064 cm³) in the 1 cm cube, 1.4 cm (V = 2.744 cm³) in the 2 cm cube, and 2.4 cm (V = 13.824 cm³) in the 3 cm cube. Thus the percentage of volume reached by acid falls sharply from 93.6% (1 cm cube) to 65.7% (2 cm cube) and just 48.8% (3 cm cube). This happens because surface area grows only as L² while volume grows as L³, causing the SA:V ratio (6/L) to drop from 6.0 to 3.0 to 2.0 cm⁻¹ as diffusion distance to the centre increases. In large living cells, passive diffusion alone would starve central organelles of oxygen and fail to clear toxic metabolic waste such as CO₂ and heat. Consequently, cells stay microscopic and large multicellular animals evolve specialized high-SA:V exchange organs (such as alveoli with thin Type I pneumocytes and intestinal microvilli) coupled to circulatory mass-transport systems.",
      markScheme: [
        {
          point: "Correctly calculates percentage volume penetrated for at least two cubes (93.6% for 1 cm, 65.7% for 2 cm, 48.8% for 3 cm).",
          keywords: ["93.6", "65.7", "48.8"],
        },
        {
          point: "States clear inverse trend: despite identical diffusion depth, the proportion of volume reached drops sharply as cube size increases.",
          keywords: ["falls", "drops", "decreases", "identical"],
        },
        {
          point: "Explains mathematically via SA:V = 6/L falling (6 → 3 → 2 cm⁻¹) because volume (L³) outpaces surface area (L²).",
          keywords: ["sa:v", "6/l", "outpaces", "l³", "volume"],
        },
        {
          point: "Links to cellular metabolic failure: large cells cannot supply oxygen/nutrients or remove CO₂/metabolic waste fast enough by diffusion alone.",
          keywords: ["metabolic", "oxygen", "waste", "diffusion alone", "starve"],
        },
        {
          point: "Links to multicellular adaptations: specialized high-SA exchange surfaces (alveoli/pneumocytes/microvilli) and internal circulatory transport.",
          keywords: ["alveoli", "microvilli", "circulatory", "exchange"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid analysis of diffusion data or SA:V limits.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States that bigger cubes have lower SA:V without calculating core volumes or connecting to organ-level adaptations.",
          indicators: ["Purely qualitative with no volume-percentage calculation."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Performs core-volume calculations accurately and links falling SA:V to metabolic limits or exchange adaptations.",
          indicators: ["Covers 3–4 mark points cleanly."],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Rigorous quantitative analysis (93.6% → 65.7% → 48.8%) fully linked to L² vs L³ scaling, cellular metabolism, and multicellular exchange + circulation.",
          indicators: ["All five points verified and clearly communicated."],
        },
      ],
      hints: [
        "Find the unpenetrated inner cube's side `(L − 0.6)` cm and volume `(L − 0.6)³` for each cube.",
        "Calculate `% penetrated = 100 × (L³ − (L − 0.6)³) / L³`.",
        "Explain WHY the percentage plummets using `SA:V = 6/L`, then connect to alveoli, microvilli, and blood circulation.",
      ],
    },
    {
      id: "b1-b2-form-molecules-cells-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "cell-specialization-sav",
      strategy: "Subdividing a cube of side L into k³ cubes of side L/k increases total SA by factor k",
      question: "A solid cubic tissue block of side length `4 cm` (volume `64 cm³`) is divided completely into `64` identical smaller cubes of side length `1 cm` (preserving total volume). By what factor does the **total combined surface area** increase? Give an integer.",
      answer: { type: "number", value: 4 },
      traps: [
        { spec: { type: "number", value: 64 }, feedback: "There are 64 cubes, but each smaller cube has 1/16th the surface area of the original cube: 64 / 16 = 4." },
        { spec: { type: "number", value: 16 }, feedback: "Original SA = 96 cm² and new total SA = 64 × 6 = 384 cm²; compute 384 / 96." },
      ],
      hints: [
        "Original surface area of the `4 cm` cube: {{6 * 4^2 = 96}} cm².",
        "Each `1 cm` cube has surface area `6 cm²`, so `64` cubes have total surface area {{64 * 6 = 384}} cm².",
        "Divide new total SA by original SA: {{384 / 96}}.",
      ],
      solution: [
        "Original SA = {{6 * 4^2 = 96}} cm².",
        "New combined SA = {{64 * (6 * 1^2) = 384}} cm².",
        "Increase factor = {{384 / 96 = 4}} (this explains why multicellular organisms divide into trillions of tiny cells!).",
      ],
    },
    {
      id: "b1-b2-form-molecules-cells-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Predict",
      guideRef: "membranes-transport",
      strategy: "Compare Arctic (0 °C) vs tropical (28 °C) cis-unsaturation, chain length, cholesterol, and thermal shock [HL]",
      marks: 6,
      question: "Arctic cod live permanently in `0 °C` polar seas whereas tropical reef groupers live in `28 °C` coral reefs. Predict and explain **three** differences in plasma-membrane lipid composition between these two ectothermic fish species, and predict the cellular consequences if Arctic cod cells were abruptly warmed to `28 °C`.",
      modelAnswer:
        "First, Arctic cod membranes will contain a significantly higher proportion of cis-polyunsaturated fatty-acid tails than tropical grouper membranes, because cis C=C double bonds introduce kinks that prevent close packing and preserve fluidity despite low kinetic energy at 0 °C. Second, Arctic cod phospholipids will have shorter fatty-acid acyl chain lengths (whereas tropical groupers have longer, more saturated chains), because shorter tails experience weaker intermolecular Van der Waals attractions and resist freezing at low temperatures. Third, both species tune cholesterol content to buffer fluidity, with cholesterol preventing gel crystallization in cold Arctic membranes while restraining excessive motion in warm tropical membranes. If Arctic cod cells were abruptly heated to 28 °C, their highly kinked short-chain bilayers would become hyper-fluid and overly permeable, leaking ions (collapsing Na⁺/K⁺ gradients and resting potentials) while integral enzymes and pumps destabilize and denature.",
      markScheme: [
        {
          point: "Higher proportion of cis-unsaturated / polyunsaturated fatty-acid tails in Arctic cod vs more saturated tails in tropical grouper.",
          keywords: ["polyunsaturated", "cis", "unsaturated", "saturated"],
        },
        {
          point: "Explains cis kinks prevent tight packing / reduce dispersion forces to maintain fluidity at 0 °C.",
          keywords: ["kink", "packing", "fluidity"],
        },
        {
          point: "Shorter fatty-acid chain lengths in Arctic cod (longer in grouper) to weaken hydrophobic intermolecular attractions at low temperature.",
          keywords: ["shorter", "chain length", "van der waals", "intermolecular"],
        },
        {
          point: "Cholesterol buffering role across temperature regimes (prevents crystallization at 0 °C; restricts motion at 28 °C).",
          keywords: ["cholesterol", "crystallization", "restrict"],
        },
        {
          point: "Thermal shock consequence 1: abrupt warming to 28 °C makes Arctic membranes hyper-fluid / excessively permeable / leaky to ions.",
          keywords: ["hyper-fluid", "leaky", "permeable", "ion"],
        },
        {
          point: "Thermal shock consequence 2: collapse of electrochemical gradients AND/OR denaturation of cold-adapted membrane proteins/pumps.",
          keywords: ["gradient", "denatur", "pump", "enzyme"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid predictions regarding membrane composition or warming.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Predicts higher unsaturation in cold fish with minimal explanation or omits thermal-shock consequences.",
          indicators: ["Missing chain length, cholesterol, or membrane leakage."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explains unsaturated kinks and warming hyper-fluidity/leakiness, with partial coverage of chain length or cholesterol.",
          indicators: ["Covers 3–4 mark points accurately."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Comprehensive HL biophysical analysis covering cis-unsaturation, acyl chain length, cholesterol buffering, ion leakage, and protein destabilization.",
          indicators: ["All six mark points clearly connected."],
        },
      ],
      hints: [
        "Consider three lipid levers: (1) cis-unsaturated double bonds, (2) fatty-acid chain length, and (3) cholesterol.",
        "At 0 °C molecules move slowly — what prevents solidification? At 28 °C they move fast — what prevents melting/leakiness?",
        "For abrupt warming of cold-adapted membranes, think about both lipid bilayer integrity (ion leaks) and integral protein stability.",
      ],
    },
    {
      id: "b1-b2-form-molecules-cells-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Compare and contrast",
      guideRef: "organelles-compartmentalization",
      strategy: "Contrast coupled prokaryotic vs separated eukaryotic gene expression, plus plasma-membrane vs cristae/thylakoid chemiosmosis [HL]",
      marks: 6,
      question: "Compare and contrast how **gene expression** and **ATP generation by chemiosmosis** are compartmentalized in a prokaryotic cyanobacterium versus a eukaryotic plant palisade mesophyll cell.",
      modelAnswer:
        "Both cyanobacteria and eukaryotic palisade cells transcribe DNA into mRNA for translation by ribosomes and generate ATP via membrane-embedded electron transport chains pumping H⁺ to drive ATP synthase. However, in the cyanobacterium, circular naked DNA lies freely in the nucleoid with no nuclear envelope, so transcription and translation by 70S ribosomes occur simultaneously (coupled) in the cytoplasm with minimal mRNA processing. In the eukaryotic palisade cell, linear histone-bound chromosomes are enclosed inside a double nuclear envelope, separating nuclear transcription from cytoplasmic 80S translation; this enables post-transcriptional pre-mRNA intron splicing and alternative exon combinations before export through nuclear pores. For chemiosmosis, cyanobacteria use internal thylakoid/plasma infoldings within one shared cytoplasm, whereas palisade cells isolate photosynthesis inside double-membrane chloroplasts (tiny thylakoid lumen vs stroma) and aerobic respiration inside double-membrane mitochondria (folded cristae and tiny intermembrane space), both containing their own 70S ribosomes and circular DNA. This spatial segregation prevents conflicting redox/pH gradients and supports far higher metabolic specialization.",
      markScheme: [
        {
          point: "Shared features: both transcribe DNA → mRNA → protein at ribosomes AND use membrane H⁺ gradients / ATP synthase for chemiosmosis.",
          keywords: ["both", "atp synthase", "chemiosmosis"],
        },
        {
          point: "Prokaryotic gene expression: no nuclear envelope → coupled/simultaneous transcription and 70S translation in the cytoplasm/nucleoid.",
          keywords: ["coupled", "simultaneous", "nucleoid", "70s"],
        },
        {
          point: "Eukaryotic gene expression: double nuclear envelope separates nuclear transcription from cytoplasmic 80S translation.",
          keywords: ["nuclear envelope", "80s", "separat"],
        },
        {
          point: "Regulatory advantage: separation permits pre-mRNA intron removal, alternative splicing, and controlled export via nuclear pores.",
          keywords: ["splicing", "intron", "nuclear pore"],
        },
        {
          point: "Eukaryotic bioenergetic organelles: double-membrane chloroplasts (thylakoids/stroma) AND mitochondria (cristae/intermembrane space) isolate photosynthesis and respiration.",
          keywords: ["chloroplast", "mitochondri", "cristae", "thylakoid"],
        },
        {
          point: "Advantage of organelle segregation: tiny lumen/intermembrane spaces build steep H⁺ gradients without disturbing cytosolic pH or competing pathways.",
          keywords: ["lumen", "intermembrane space", "cytosolic", "segregat"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid prokaryotic–eukaryotic comparison.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States basic presence/absence of nucleus and organelles without explaining coupled transcription or chemiosmotic compartments.",
          indicators: ["No mention of splicing or proton-gradient compartments."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Contrasts nuclear separation/splicing OR bioenergetic organelles well, with partial coverage of the second area.",
          indicators: ["Covers 3–4 mark points cleanly."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Authoritative HL synthesis contrasting coupled 70S expression vs nuclear splicing/80S translation alongside isolated chloroplast and mitochondrial proton-gradient compartments.",
          indicators: ["All six points integrated seamlessly."],
        },
      ],
      hints: [
        "State a similarity first (DNA → mRNA → protein + membrane chemiosmosis).",
        "Contrast coupled prokaryotic transcription/70S translation vs eukaryotic nuclear envelope + intron splicing + 80S translation.",
        "Contrast prokaryotic membrane infoldings vs separate eukaryotic mitochondria (cristae/intermembrane space) and chloroplasts (thylakoid lumen/stroma).",
      ],
    },
    {
      id: "b1-b2-form-molecules-cells-ch-q08",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "carbohydrates-lipids-proteins",
      strategy: "Convert kg ↔ g consistently and compare 38 kJ g⁻¹ vs 17 kJ g⁻¹",
      question: "A desert camel mobilizes `1.50 kg` of stored hump triglyceride (energy density `38 kJ g⁻¹`). What mass of dry carbohydrate (in **kg**, to 2 decimal places, energy density `17 kJ g⁻¹`) would be required to supply the exact same total energy?",
      answer: { type: "number", value: 3.35, tolerance: 0.02 },
      traps: [
        { spec: { type: "number", value: 3353, tolerance: 5 }, feedback: "You gave the answer in grams — convert to kilograms by dividing by 1000 (3.35 kg)." },
        { spec: { type: "number", value: 0.67, tolerance: 0.02 }, feedback: "Carbohydrates carry LESS energy per gram than lipids, so you need MORE mass of carbohydrate (multiply by 38/17, not 17/38)." },
      ],
      hints: [
        "Compute total energy stored in `1.50 kg = 1500 g` of lipid: {{1500 * 38 = 57000}} kJ.",
        "Divide total energy by `17 kJ g⁻¹` to get grams of carbohydrate.",
        "Convert grams to kilograms and round to 2 decimal places.",
      ],
      solution: [
        "Total energy = {{1500 * 38 = 57000}} kJ.",
        "Mass of carbohydrate = {{57000 / 17 = 3352.94}} g = {{3.3529}} kg.",
        "Rounded to 2 decimal places: **3.35 kg** (over double the lipid mass!).",
      ],
    },
  ],
};
