import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK DIAGNOSTIC QUIZ (10 Qs)
  // =========================================================================
  quiz: [
    {
      id: "a3-a4-unity-organisms-ecosystems-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "diversity-genomes-karyograms",
      question:
        "Domestic cats (*Felis catus*) have a diploid somatic chromosome number of {{2n = 38}}. How many chromosomes are present in a single normal haploid ovum?",
      answer: { type: "number", value: 19, display: "19" },
      traps: [
        {
          spec: { type: "number", value: 76 },
          feedback: "Meiosis halves the diploid chromosome number rather than doubling it.",
        },
        {
          spec: { type: "number", value: 38 },
          feedback: "38 is the diploid somatic count (2n); a haploid gamete (n) contains half as many chromosomes.",
        },
      ],
      solution: [
        "Meiosis reduces the diploid chromosome number {{2n}} by half to form haploid gametes ({{n}}).",
        "{{n = 38 / 2 = 19}} chromosomes.",
      ],
      hints: [
        "Gametes are haploid (n), carrying exactly half of the diploid (2n) chromosome count.",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "diversity-genomes-karyograms",
      question:
        "A human karyogram shows 47 chromosomes in total, including three copies of chromosome 21. What genetic condition and cellular error does this indicate?",
      options: [
        "Turner syndrome caused by mitotic cytokinesis arrest",
        "Sickle-cell anaemia caused by a single base substitution",
        "Down syndrome caused by meiotic non-disjunction",
        "Cystic fibrosis caused by chromosomal end-to-end fusion",
      ],
      answerIndex: 2,
      explanation:
        "Three copies of chromosome 21 (**trisomy 21**, total 47 chromosomes) causes **Down syndrome**, arising when chromosome 21 fails to separate properly during meiosis (**non-disjunction**).",
      hints: [
        "Three copies at chromosome pair 21 is called trisomy 21.",
        "Failure of chromosomes or chromatids to separate during meiosis is non-disjunction.",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "evolution-speciation",
      question:
        "Whale flippers and bat wings share the same underlying pentadactyl bone layout inherited from a common tetrapod ancestor. What single biological adjective describes structures that share evolutionary ancestry despite serving different functions?",
      answer: {
        type: "text",
        accept: ["homologous", "homologous structures", "homologous traits"],
        display: "homologous",
      },
      traps: [
        {
          spec: { type: "text", accept: ["analogous", "analogous structures"] },
          feedback: "Analogous structures arise by convergent evolution without a shared structural ancestor; shared ancestry with divergent function is homologous.",
        },
      ],
      solution: [
        "Structures built from the same ancestral body plan modified for different roles by divergent evolution are **homologous**.",
      ],
      hints: [
        "Contrast traits derived from a common ancestor (divergent evolution) with traits evolved independently (convergent evolution).",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Predict",
      guideRef: "conservation-biodiversity",
      question:
        "A grassland plot contains 4 plant species and 100 individuals total. Which ecological change will increase Simpson's reciprocal diversity index {{D}} while keeping {{N = 100}} unchanged?",
      options: [
        "Individuals become distributed more evenly across all four species rather than dominated by one.",
        "One invasive grass expands to 95 individuals while the other three species shrink to tiny counts.",
        "Three species go locally extinct so all 100 individuals belong to a single resistant species.",
        "The total sample area is doubled while keeping exact species proportions identical.",
      ],
      answerIndex: 0,
      explanation:
        "Simpson's reciprocal index {{D = (N(N - 1)) / (Σ n(n - 1))}} increases with both greater **species richness** and greater **species evenness**. Spreading the 100 individuals more equally shrinks {{Σ n(n - 1)}}, raising {{D}}.",
      hints: [
        "Look at the denominator {{Σ n(n - 1)}}: does concentrating counts into one huge species make the denominator bigger or smaller?",
        "A smaller denominator gives a larger value of {{D}}.",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "conservation-biodiversity",
      question:
        "A pond quadrat contains four aquatic insect species with counts of 4, 4, 4, and 4 individuals. Calculate Simpson's reciprocal diversity index {{D}} as a whole number.",
      answer: { type: "number", value: 5, tolerance: 0.01, display: "5" },
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "Check the formula: you used {{N^2 / Σ n^2}} instead of {{N(N - 1) / Σ n(n - 1)}}.",
        },
        {
          spec: { type: "number", value: 0.2, tolerance: 0.01 },
          feedback: "You calculated the inverted probability {{Σ n(n - 1) / N(N - 1)}} instead of the reciprocal index {{D}} (which is always ≥ 1).",
        },
      ],
      solution: [
        "Total organisms: {{N = 4 + 4 + 4 + 4 = 16}}, so {{N(N - 1) = 16 * 15 = 240}}.",
        "Denominator: each species gives {{4 * 3 = 12}}, so {{Σ n(n - 1) = 4 * 12 = 48}}.",
        "{{D = 240 / 48 = 5}}.",
      ],
      hints: [
        "Find {{N = 16}}, then compute {{N(N - 1) = 16 * 15}}.",
        "Compute {{4 * (4 * 3) = 48}}, then divide 240 by 48.",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "classification-cladistics-hl",
      question: "Based on 16S and 18S ribosomal RNA phylogenies, which domain shares the most recent common ancestor with Eukarya?",
      options: [
        "Bacteria, because bacterial mitochondria resemble eukaryotic organelles",
        "Protista, because single-celled eukaryotes split directly from viruses",
        "Prokaryota, because all non-nucleated organisms form one single clade",
        "Archaea, because Archaea and Eukarya share derived transcriptional machinery",
      ],
      answerIndex: 3,
      explanation:
        "Woese's rRNA tree shows Bacteria diverging first from LUCA, while **Archaea** and **Eukarya** form sister domains sharing histone-like proteins, introns in some genes, and homologous RNA polymerase subunits.",
      hints: [
        "Do NOT assume 'prokaryotes' (Bacteria + Archaea) form a clade.",
        "Which prokaryotic domain shares histones and transcriptional enzymes most similar to eukaryotes?",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "classification-cladistics-hl",
      question:
        "A strictly bifurcating rooted cladogram displays 9 terminal species at its tips. How many internal branching nodes (speciation events) does the cladogram contain?",
      answer: { type: "number", value: 8, display: "8" },
      traps: [
        {
          spec: { type: "number", value: 9 },
          feedback: "A rooted bifurcating tree with k tips always has k − 1 internal nodes, not k.",
        },
        {
          spec: { type: "number", value: 10 },
          feedback: "There are fewer internal nodes than terminal tips: use {{k - 1}}.",
        },
      ],
      solution: [
        "Each speciation split increases the number of lineages by 1, starting from 1 root lineage.",
        "To reach {{k = 9}} terminal species requires {{k - 1 = 9 - 1 = 8}} internal nodes.",
      ],
      hints: [
        "Test small trees first: 2 tips need 1 node; 3 tips need 2 nodes; 4 tips need 3 nodes.",
        "Apply the pattern {{nodes = k - 1}} for {{k = 9}}.",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "evolution-speciation",
      question:
        "Two closely related palm species coexist on Lord Howe Island within wind-pollination range, yet avoid interbreeding because differing soil types shifted their flowering peaks six weeks apart. Which speciation mode and barrier apply?",
      options: [
        "Allopatric speciation driven by a physical mountain barrier",
        "Sympatric speciation driven by temporal reproductive isolation",
        "Allopatric speciation driven by behavioural courtship differences",
        "Sympatric speciation driven by artificial selective breeding",
      ],
      answerIndex: 1,
      explanation:
        "Because the populations share the same geographic area within dispersal range, speciation is **sympatric**. Non-overlapping flowering seasons create **temporal isolation**.",
      hints: [
        "Same island within pollination range means no geographic barrier → sympatric.",
        "Non-overlapping breeding or flowering times represent temporal isolation.",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      guideRef: "diversity-genomes-karyograms",
      marks: 2,
      question: "State two limitations of Ernst Mayr's biological species concept when classifying living and extinct organisms.",
      modelAnswer:
        "First, the biological species concept cannot be applied to asexual organisms such as bacteria or parthenogenetic lineages because they do not interbreed sexually (and prokaryotes also exchange DNA via horizontal gene transfer). Second, it cannot be tested directly on extinct fossil organisms or geographically separated populations, and some distinct species occasionally produce viable or partially fertile hybrids.",
      markScheme: [
        {
          point: "Cannot classify asexual organisms (e.g. bacteria/fungi) or prokaryotes undergoing horizontal gene transfer.",
          keywords: ["asexual", "binary fission", "horizontal gene transfer", "do not interbreed"],
        },
        {
          point: "Cannot test interbreeding in extinct fossils (or geographically separated populations / partially fertile hybrids).",
          keywords: ["fossil", "extinct", "hybrid", "geographically separated"],
        },
      ],
      hints: [
        "Ask: which huge groups of organisms never reproduce sexually?",
        "Also think about museum specimens millions of years old or closely related organisms that produce hybrids.",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "conservation-biodiversity",
      marks: 3,
      question:
        "Distinguish between species richness and species evenness, and explain why a community with high evenness is more resilient to a species-specific pathogen.",
      modelAnswer:
        "Species richness is the total number of different species present in a community, whereas species evenness measures how equally individual organisms are distributed among those species. In an even community, no single species makes up the vast majority of biomass, so if a specialist pathogen wipes out one species, most of the community and its ecological functions remain intact.",
      markScheme: [
        {
          point: "Species richness is the count/number of different species present in a habitat.",
          keywords: ["number of different species", "total number of species", "count of species"],
        },
        {
          point: "Species evenness is the relative abundance / how equally individuals are distributed among species.",
          keywords: ["relative abundance", "equally", "distributed", "proportion"],
        },
        {
          point: "High evenness prevents collapse because losing one species leaves most biomass/functions intact (not dominated by one species).",
          keywords: ["intact", "biomass", "dominant", "collapse", "ecological function", "most of the community"],
        },
      ],
      hints: [
        "Define richness (how many species?) separately from evenness (how balanced are the counts?).",
        "Imagine a specialist disease killing the most abundant tree in a plot with counts [96, 1, 1, 1, 1] versus [20, 20, 20, 20, 20].",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (p1: 15 Qs SL Core, p2: 15 Qs HL & Synthesis)
  // =========================================================================
  papers: [
    {
      id: "a3-a4-unity-organisms-ecosystems-p1",
      title: "Practice Paper 1 — SL Core & Data-Based Questions (A3.1, A4.1, A4.2)",
      level: "SL",
      questions: [
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "diversity-genomes-karyograms",
          question:
            "A pollen grain of cultivated rice (*Oryza sativa*) contains {{n = 12}} chromosomes. State the diploid chromosome number ({{2n}}) in a rice leaf mesophyll cell.",
          answer: { type: "number", value: 24, display: "24" },
          traps: [
            {
              spec: { type: "number", value: 6 },
              feedback: "A pollen grain is already haploid (n); double it to find the diploid somatic count (2n).",
            },
          ],
          solution: [
            "Pollen grains carry haploid gametes ({{n = 12}}).",
            "Somatic leaf cells are diploid: {{2n = 2 * 12 = 24}} chromosomes.",
          ],
          hints: ["Pollen carries haploid gametes (n), while leaf mesophyll cells are diploid (2n)."],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "diversity-genomes-karyograms",
          question:
            "A male donkey (*Equus africanus*, {{2n = 62}}) mates with a female horse (*Equus ferus caballus*, {{2n = 64}}) to produce a mule. Calculate the total number of chromosomes in a single somatic cell of the mule.",
          answer: { type: "number", value: 63, display: "63" },
          traps: [
            {
              spec: { type: "number", value: 126 },
              feedback: "You added the two diploid numbers! Remember gametes undergo meiosis and contribute haploid sets (n).",
            },
          ],
          solution: [
            "Donkey sperm carries {{n = 62 / 2 = 31}} chromosomes.",
            "Horse ovum carries {{n = 64 / 2 = 32}} chromosomes.",
            "Mule zygote and somatic cells carry {{31 + 32 = 63}} chromosomes.",
          ],
          hints: [
            "Halve each parent's diploid chromosome count to find the gamete chromosome numbers.",
            "Add {{31 + 32}} to get the mule's somatic chromosome number.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "diversity-genomes-karyograms",
          question:
            "Use the dichotomous key to identify the genus of a terrestrial arthropod with jointed legs, four pairs of walking legs, no antennae, and silk-spinning spinnerets:\n\n1a. Jointed legs absent → *Lumbricus*\n1b. Jointed legs present → go to 2\n2a. Three pairs of walking legs; antennae present → go to 3\n2b. Four pairs of walking legs; antennae absent → go to 4\n3a. Forewings hardened into protective cases → *Lucanus*\n3b. All wings membranous → *Apis*\n4a. Segmented tail ending in venomous stinger → *Pandinus*\n4b. Unsegmented abdomen with silk spinnerets → *Araneus*\n\nType the genus name only.",
          answer: {
            type: "text",
            accept: ["Araneus", "*Araneus*"],
            display: "*Araneus*",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Pandinus", "*Pandinus*"] },
              feedback: "Re-read couplet 4: *Pandinus* has a segmented venomous tail, whereas this specimen has silk spinnerets.",
            },
          ],
          solution: [
            "1b (jointed legs present) → go to 2.",
            "2b (four pairs of walking legs, no antennae) → go to 4.",
            "4b (silk spinnerets present) → ***Araneus***.",
          ],
          hints: [
            "Follow couplet 1 → 2 using the number of walking leg pairs.",
            "At couplet 4, match the silk-spinning spinnerets.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q04",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "diversity-genomes-karyograms",
          marks: 3,
          question:
            "Explain how a chromosomal error during meiosis can cause Down syndrome, and outline how a clinical karyogram confirms both this condition and biological sex.",
          modelAnswer:
            "During meiosis, non-disjunction occurs when homologous chromosome pair 21 fails to separate in anaphase I (or sister chromatids fail to separate in anaphase II), producing an abnormal gamete with an extra copy of chromosome 21 (n + 1 = 24). Fusion with a normal haploid gamete yields a zygote with three copies of chromosome 21 (trisomy 21, 47 chromosomes total). On a stained metaphase karyogram arranged by size and G-banding, trisomy 21 appears as three chromosomes at position 21, while the 23rd pair reveals XX for a female or XY (one large, one small) for a male.",
          markScheme: [
            {
              point: "Non-disjunction (failure of pair 21 / sister chromatids to separate in meiosis) produces an n + 1 gamete.",
              keywords: ["non-disjunction", "nondisjunction", "fail to separate", "fails to separate"],
            },
            {
              point: "Fertilisation with a normal gamete produces trisomy 21 (three copies at position 21; 47 chromosomes total).",
              keywords: ["trisomy 21", "three copies", "47"],
            },
            {
              point: "Karyogram pairs metaphase chromosomes by size/banding to confirm pair 21 triplet and identifies XX (female) vs XY (male).",
              keywords: ["xx", "xy", "metaphase", "g-banding", "banding"],
            },
          ],
          hints: [
            "Name the meiotic separation failure and the resulting abnormal gamete count.",
            "Explain how three copies at pair 21 and the 23rd sex-chromosome pair appear visually on the karyogram.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q05",
          kind: "written",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "diversity-genomes-karyograms",
          marks: 2,
          question: "Distinguish between continuous variation and discontinuous variation, giving one named biological example of each.",
          modelAnswer:
            "Continuous variation exhibits an unbroken spectrum of phenotypes (often a bell-shaped normal distribution) controlled by many polygenic loci interacting with environmental factors, such as human adult height or leaf length. Discontinuous variation falls into discrete, non-overlapping phenotypic categories controlled by one or a few genes with minimal environmental modification, such as human ABO blood groups.",
          markScheme: [
            {
              point: "Continuous: unbroken range / polygenic + environmental influence, with a valid example (e.g. height, mass, leaf length).",
              keywords: ["polygenic", "environmental", "normal distribution", "height", "leaf length"],
            },
            {
              point: "Discontinuous: discrete categories / single or few genes, with a valid example (e.g. ABO blood group, pea seed shape).",
              keywords: ["discrete", "categories", "abo", "blood group", "few genes", "single gene"],
            },
          ],
          hints: [
            "Mention both the genetic basis (many genes + environment vs single/few genes) and one concrete example of each.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "State",
          guideRef: "evolution-speciation",
          question:
            "North American desert cacti (*Cactaceae*) and southern African euphorbias (*Euphorbiaceae*) belong to distantly related plant families, yet both independently evolved thick green water-storing stems and protective spines. State the two-word evolutionary process responsible for these analogous adaptations.",
          answer: {
            type: "text",
            accept: ["convergent evolution", "convergence"],
            display: "convergent evolution",
          },
          traps: [
            {
              spec: { type: "text", accept: ["divergent evolution", "adaptive radiation"] },
              feedback: "Divergent evolution modifies a shared ancestral trait into different forms; independent evolution of similar traits in unrelated lineages is convergent evolution.",
            },
          ],
          solution: [
            "Similar arid desert selection pressures independently shaped water-storing succulent stems and spines in unrelated families — **convergent evolution**.",
          ],
          hints: [
            "Unrelated lineages evolving similar adaptations under matching environmental pressures.",
            "Analogous structures are produced by ____ evolution.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "evolution-speciation",
          marks: 3,
          question:
            "Explain how the skeletal anatomy of the pentadactyl limb across mammals, birds, and amphibians provides evidence for evolution.",
          modelAnswer:
            "Tetrapod vertebrates share the exact same underlying five-digit bone arrangement (humerus, radius and ulna, carpals, metacarpals, and phalanges) despite using their forelimbs for drastically different tasks such as grasping, flying, and swimming. It is implausible that completely unrelated organisms would independently construct identical bone plans for opposite mechanical demands; instead, this homology reflects divergent evolution (descent with modification) from a single ancestral tetrapod as lineages adapted to diverse ecological niches.",
          markScheme: [
            {
              point: "Names the conserved pentadactyl bone layout (e.g. humerus, radius/ulna, carpals, metacarpals, phalanges) across tetrapods.",
              keywords: ["humerus", "radius", "ulna", "carpals", "phalanges", "five-digit", "bone arrangement"],
            },
            {
              point: "Links shared underlying structure with differing functions (grasping, flying, swimming) as homologous structures.",
              keywords: ["homolog", "different function", "grasping", "flying", "swimming"],
            },
            {
              point: "Concludes divergent evolution / descent with modification from a shared tetrapod common ancestor.",
              keywords: ["common ancestor", "divergent", "descent with modification", "ancestral tetrapod"],
            },
          ],
          hints: [
            "List key conserved bones of the pentadactyl limb and contrast their shared plan with their diverse functions.",
            "Connect homology explicitly to divergent evolution from a common tetrapod ancestor.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "evolution-speciation",
          marks: 4,
          question:
            "Explain the sequence of evolutionary events by which the formation of the Congo River caused one ancestral ape population to split into common chimpanzees (*Pan troglodytes*) and bonobos (*Pan paniscus*).",
          modelAnswer:
            "Because neither ape species can swim across the wide Congo River, its formation created a physical barrier dividing one ancestral population into northern and southern subpopulations, halting gene flow between them. Independent random mutations arose in each isolated gene pool, and genetic drift together with slightly different local food resources and predator selection pressures favoured different heritable alleles on opposite banks. Over hundreds of thousands of generations, allele frequencies and behavioural, anatomical, and genetic traits diverged sufficiently that reproductive isolation became established, preventing the two lineages from interbreeding to produce fertile offspring even if reunited (allopatric speciation).",
          markScheme: [
            {
              point: "Physical barrier (non-swimmable river) divides ancestral population and halts gene flow.",
              keywords: ["gene flow", "barrier", "isolated", "subpopulations"],
            },
            {
              point: "Independent random mutations and genetic drift occur separately in each isolated gene pool.",
              keywords: ["mutation", "genetic drift", "gene pool"],
            },
            {
              point: "Different environmental selection pressures shift allele frequencies in divergent directions.",
              keywords: ["selection pressure", "allele frequenc", "natural selection", "different"],
            },
            {
              point: "Accumulated genetic/behavioural divergence establishes reproductive isolation (allopatric speciation; cannot interbreed to form fertile offspring).",
              keywords: ["reproductive isolation", "allopatric", "fertile offspring", "interbreed"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant biological mechanism stated.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies geographical separation by the river and mentions change over time, without linking halted gene flow, mutation/selection, and reproductive isolation.",
              indicators: ["Mentions physical barrier or different habitats", "Lacks gene flow or allele-frequency mechanism"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Complete causal chain from physical barrier halting gene flow through independent mutation, drift/selection, and allele-frequency divergence to reproductive isolation (allopatric speciation).",
              indicators: ["Explicitly links halted gene flow to divergent selection/mutation", "Concludes with reproductive isolation / fertile offspring test"],
            },
          ],
          hints: [
            "Start with what the river stops immediately: movement of alleles between opposite banks (gene flow).",
            "Include random mutations, differential natural selection / genetic drift, shifting allele frequencies, and final reproductive isolation.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "conservation-biodiversity",
          question:
            "A coral reef belt transect records four reef-fish species: 10 damselfish, 8 butterflyfish, 6 wrasses, and 6 parrotfish. Calculate Simpson's reciprocal diversity index {{D}} to 2 decimal places.",
          answer: { type: "number", value: 4.22, tolerance: 0.02, display: "4.22" },
          traps: [
            {
              spec: { type: "number", value: 0.24, tolerance: 0.02 },
              feedback: "You inverted the formula! Divide {{N(N - 1)}} by {{Σ n(n - 1)}} so {{D >= 1}}.",
            },
            {
              spec: { type: "number", value: 3.81, tolerance: 0.02 },
              feedback: "You computed {{N^2 / Σ n^2}} — remember to subtract 1 from N and from every species count n.",
            },
          ],
          solution: [
            "Sum total individuals: {{N = 10 + 8 + 6 + 6 = 30}}, so {{N(N - 1) = 30 * 29 = 870}}.",
            "Compute {{n(n - 1)}} for each species: {{10 * 9 = 90}}, {{8 * 7 = 56}}, {{6 * 5 = 30}}, {{6 * 5 = 30}}.",
            "Sum denominator: {{Σ n(n - 1) = 90 + 56 + 30 + 30 = 206}}.",
            "{{D = 870 / 206 = 4.223... ≈ 4.22}}.",
          ],
          hints: [
            "First find {{N = 10 + 8 + 6 + 6 = 30}} and calculate {{N(N - 1) = 30 * 29 = 870}}.",
            "Compute {{n(n - 1)}} for 10, 8, 6, and 6, add those four products, and divide 870 by the sum.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q10",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "conservation-biodiversity",
          question:
            "A cleared agricultural plantation contains 250 trees, all belonging to a single crop species (*Elaeis guineensis*). State the exact value of Simpson's reciprocal diversity index {{D}} for this monoculture.",
          answer: { type: "number", value: 1, display: "1" },
          traps: [
            {
              spec: { type: "number", value: 0 },
              feedback: "Simpson's reciprocal index has a minimum value of 1, not 0, because {{N(N - 1) / N(N - 1) = 1}}.",
            },
          ],
          solution: [
            "With only one species, {{n_1 = N = 250}}.",
            "{{D = (250 * 249) / (250 * 249) = 1}} (the theoretical minimum of Simpson's reciprocal index).",
          ],
          hints: ["Substitute {{n_1 = N = 250}} directly into {{D = (N(N - 1)) / (Σ n(n - 1))}}."],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "conservation-biodiversity",
          question:
            "Two woodland quadrats each contain {{N = 15}} beetles across three species. Site Alpha has counts 5, 5, and 5; Site Beta has counts 13, 1, and 1. Calculate how much higher Simpson's {{D}} is at Site Alpha than at Site Beta ({{D_Alpha - D_Beta}}), giving your answer to 2 decimal places.",
          answer: { type: "number", value: 2.15, tolerance: 0.02, display: "2.15" },
          traps: [
            {
              spec: { type: "number", value: 3.5, tolerance: 0.02 },
              feedback: "3.50 is {{D_Alpha}} alone — now subtract {{D_Beta}} (1.35) to find the difference.",
            },
            {
              spec: { type: "number", value: 1.35, tolerance: 0.02 },
              feedback: "1.35 is {{D_Beta}} alone — subtract it from {{D_Alpha}} (3.50).",
            },
          ],
          solution: [
            "Both sites have {{N = 15}}, so {{N(N - 1) = 15 * 14 = 210}}.",
            "Site Alpha: {{Σ n(n - 1) = 3 * (5 * 4) = 60}}, giving {{D_Alpha = 210 / 60 = 3.50}}.",
            "Site Beta: {{Σ n(n - 1) = (13 * 12) + 0 + 0 = 156}}, giving {{D_Beta = 210 / 156 = 1.346... ≈ 1.35}}.",
            "Difference: {{3.50 - 1.346 = 2.154 ≈ 2.15}}.",
          ],
          hints: [
            "Compute {{D_Alpha}} and {{D_Beta}} separately using numerator {{15 * 14 = 210}}.",
            "Remember that for {{n = 1}}, {{1 * (1 - 1) = 0}}.",
            "Subtract {{D_Beta}} from {{D_Alpha}} and round to 2 decimal places.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "conservation-biodiversity",
          marks: 3,
          question:
            "Outline three distinct human-driven causes currently accelerating species loss well above natural background extinction rates.",
          modelAnswer:
            "First, habitat destruction and fragmentation (such as clearing tropical forests for agriculture or urban expansion) reduces carrying capacity and isolates small populations. Second, overexploitation through overfishing, poaching, and unsustainable timber harvesting removes individuals faster than populations can reproduce. Third, introducing invasive alien species disrupts food webs as non-native predators or competitors displace native fauna (additional valid drivers include pollution such as eutrophication/plastics and anthropogenic climate change causing coral bleaching and range shifts).",
          markScheme: [
            {
              point: "Habitat loss / deforestation / fragmentation reducing living area and isolating populations.",
              keywords: ["habitat", "deforestation", "fragmentation", "land-use"],
            },
            {
              point: "Overexploitation (overfishing, poaching, illegal trade, unsustainable harvesting).",
              keywords: ["overexploitation", "overfishing", "poaching", "overhunting", "harvesting"],
            },
            {
              point: "Invasive alien species, pollution, or anthropogenic climate change with a clear biological impact.",
              keywords: ["invasive", "pollution", "eutrophication", "climate change", "bleaching"],
            },
          ],
          hints: [
            "Recall the HIPPO + Climate framework to select three distinct anthropogenic drivers.",
            "For each driver, briefly explain HOW it directly lowers population size or destroys habitat (e.g. fragmentation, overfishing, invasive predators).",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Justify",
          guideRef: "conservation-biodiversity",
          marks: 4,
          question:
            "Explain the two criteria used by the EDGE conservation programme, and justify why conserving a Critically Endangered Sunda pangolin (*Manis javanica*) may be prioritised over a vulnerable rodent that has thirty close living relatives.",
          modelAnswer:
            "The EDGE programme scores species by combining Evolutionary Distinctiveness (how isolated a species is on the phylogenetic tree, with few or no close living relatives) and Global Endangerment (its extinction risk category on the IUCN Red List). Pangolins are the only surviving members of order Pholidota, meaning they represent tens of millions of years of unique evolutionary traits and genetic history, and *Manis javanica* is Critically Endangered. If the Sunda pangolin disappears, an entire deep evolutionary branch is permanently erased, whereas losing one rodent out of thirty closely related congeners retains much of that lineage's shared evolutionary heritage.",
          markScheme: [
            {
              point: "Defines Evolutionary Distinctiveness: few/no close living relatives on an isolated phylogenetic branch.",
              keywords: ["evolutionarily distinct", "evolutionary distinctiveness", "few", "isolated", "phylogenetic"],
            },
            {
              point: "Defines Global Endangerment: high extinction risk on the IUCN Red List.",
              keywords: ["globally endangered", "iucn", "red list", "extinction risk"],
            },
            {
              point: "Applies criteria to Sunda pangolin: sole family in order Pholidota / unique traits + Critically Endangered status.",
              keywords: ["pholidota", "unique", "critically endangered", "millions of years"],
            },
            {
              point: "Contrasts evolutionary loss: losing the pangolin erases an irreplaceable branch, whereas the rodent's relatives preserve shared ancestry.",
              keywords: ["irreplaceable", "erased", "branch", "shared", "relatives"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant EDGE criteria or justification provided.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Correctly unpacks EDGE or states that the pangolin is rarer, without explaining phylogenetic distinctiveness or comparing evolutionary loss.",
              indicators: ["Mentions 'endangered' or 'rare'", "Does not explain phylogenetic branch isolation"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly defines both EDGE criteria and builds a rigorous phylogenetic justification comparing unique evolutionary history lost.",
              indicators: ["Links both IUCN threat level and isolated phylogenetic lineage", "Explicitly contrasts with closely related rodent clade"],
            },
          ],
          hints: [
            "Unpack both halves of EDGE: Evolutionarily Distinct AND Globally Endangered.",
            "Compare how much unique branch length on the tree of life disappears if each species goes extinct.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "conservation-biodiversity",
          marks: 6,
          question:
            "Evaluate the effectiveness of combining in-situ conservation and ex-situ conservation strategies to protect threatened tropical rainforest biodiversity.",
          modelAnswer:
            "In-situ conservation protects species inside their native habitats via national parks, wildlife corridors, and rewilding. Its major strength is preserving intact food webs, co-evolved mutualisms (such as pollinators and mycorrhizae), natural wild behaviours, and recalcitrant tropical tree seeds that cannot be frozen; corridors also restore gene flow between forest fragments. However, in-situ reserves remain vulnerable to poaching, edge effects, climate shifts, and weak enforcement. Ex-situ conservation — including botanical gardens, tissue culture, captive breeding studbooks, and cryopreservation — provides an essential emergency safety net when wild habitats are devastated or populations fall critically low, allowing genetic rescue and future reintroduction. Yet ex-situ methods are costly for animals, suffer from genetic bottlenecks, inbreeding depression, and loss of wild foraging/predator-avoidance behaviours, and standard frozen seed banks fail for many wet-tropical recalcitrant seeds. Overall, in-situ protection must remain the primary foundation to conserve ecosystem processes, backed selectively by ex-situ insurance programmes for critically endangered taxa.",
          markScheme: [
            {
              point: "In-situ strength 1: preserves whole ecosystems, food webs, mutualisms, and natural behaviours/evolution.",
              keywords: ["food web", "intact", "natural behaviour", "mutualism", "ecosystem"],
            },
            {
              point: "In-situ strength 2: wildlife corridors/rewilding maintain large populations, gene flow, and recalcitrant tropical plants.",
              keywords: ["corridor", "rewilding", "gene flow", "recalcitrant"],
            },
            {
              point: "In-situ limitation: vulnerable to poaching, climate change, edge effects, or funding/enforcement shortfalls.",
              keywords: ["poaching", "edge effect", "enforcement", "climate"],
            },
            {
              point: "Ex-situ strength: emergency insurance for critically tiny populations via captive breeding, studbooks, botanical gardens, or cryopreservation.",
              keywords: ["safety net", "insurance", "captive breeding", "studbook", "cryopreservation", "botanical"],
            },
            {
              point: "Ex-situ limitation: high cost, inbreeding/genetic bottleneck, loss of wild survival behaviours, or recalcitrant seeds dying when frozen.",
              keywords: ["bottleneck", "inbreeding", "recalcitrant", "foraging", "predator-avoidance", "costly"],
            },
            {
              point: "Balanced judgement: in-situ is the indispensable primary strategy, complemented by targeted ex-situ backups.",
              keywords: ["primary", "foundation", "complement", "overall", "combine"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant evaluation of conservation strategies.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Defines in-situ and ex-situ with brief examples, but presents mostly one-sided points without genuine evaluation.",
              indicators: ["Lists parks and zoos", "Lacks clear strengths AND limitations of both approaches"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Discusses both strengths and limitations for in-situ and ex-situ methods with accurate biology, though rainforest specificity or synthesis is limited.",
              indicators: ["Covers gene flow or inbreeding", "Some specific limitations identified"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Thorough, balanced IB evaluation specific to tropical rainforests (e.g. recalcitrant seeds, corridors, studbooks, co-evolved interactions) ending with a reasoned overall judgement.",
              indicators: ["Mentions recalcitrant seeds and ecological interactions", "Reaches a clear integrated conservation conclusion"],
            },
          ],
          hints: [
            "Structure into four tight blocks: in-situ strengths, in-situ limits, ex-situ strengths, ex-situ limits, then an overall judgement.",
            "Include tropical-specific biology: recalcitrant seeds in frozen seed banks, wildlife corridors for gene flow, and studbooks against inbreeding.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "evolution-speciation",
          marks: 4,
          question:
            "Compare and contrast selective breeding (artificial selection) and natural selection as processes changing heritable traits in populations.",
          modelAnswer:
            "Both selective breeding and natural selection act on pre-existing heritable genetic variation within populations and cause allele frequencies and mean phenotypes to shift over successive generations through differential reproduction. However, in natural selection, environmental abiotic and biotic pressures determine which individuals survive and reproduce best (increasing adaptive fitness in nature), whereas in selective breeding, humans intentionally choose parents displaying desired traits (such as higher milk yield or larger broccoli heads in *Brassica oleracea*). Furthermore, selective breeding usually operates much more rapidly over tens to hundreds of generations, often reduces genetic diversity via inbreeding, and can favour traits that would lower survival in the wild.",
          markScheme: [
            {
              point: "Similarity: both rely on pre-existing heritable genetic variation and shift allele frequencies across generations.",
              keywords: ["heritable", "allele frequenc", "generations", "genetic variation"],
            },
            {
              point: "Difference in selecting agent: environmental survival/fitness pressures vs deliberate human choice.",
              keywords: ["human", "environmental", "fitness", "intentionally", "desired"],
            },
            {
              point: "Difference in timescale or outcome: selective breeding acts faster (shorter timescale) and may produce traits maladaptive in the wild.",
              keywords: ["rapid", "faster", "wild", "maladaptive", "lower survival"],
            },
            {
              point: "Genetic consequence or named example (e.g. inbreeding/reduced genetic diversity in domesticated crops/breeds like *Brassica oleracea*).",
              keywords: ["inbreeding", "reduced genetic diversity", "brassica", "domesticated"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid comparison or contrast.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies human vs nature as the selecting agent, without clearly stating similarities or genetic/timescale contrasts.",
              indicators: ["One basic contrast only", "Misses shared mechanism of heritable variation"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explicitly covers both similarities (heritable variation, allele-frequency change) and contrasts (selecting agent, speed, wild fitness/genetic diversity).",
              indicators: ["Balances similarities and differences", "Uses precise evolutionary terminology"],
            },
          ],
          hints: [
            "Remember 'Compare and contrast' MUST include BOTH similarities and differences.",
            "Compare the raw material (heritable variation) and outcome (allele shifts), then contrast the selecting agent, speed, and effect on wild fitness/genetic diversity.",
          ],
        },
      ],
    },

    // =========================================================================
    // PRACTICE PAPER 2 — HL Cladistics, Molecular Clocks, Polyploidy & Synthesis (15 Qs)
    // =========================================================================
    {
      id: "a3-a4-unity-organisms-ecosystems-p2",
      title: "Practice Paper 2 — HL Cladistics, Molecular Clocks, Polyploidy & Synthesis",
      level: "HL",
      questions: [
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "State",
          guideRef: "diversity-genomes-karyograms",
          question:
            "Following the ancestral fusion of ape chromosomes 2A and 2B, humans have {{2n = 46}} chromosomes. How many **homologous pairs of autosomes** are present in a normal human somatic cell?",
          answer: { type: "number", value: 22, display: "22" },
          traps: [
            {
              spec: { type: "number", value: 23 },
              feedback: "23 is the TOTAL number of chromosome pairs — remember pair 23 consists of sex chromosomes (XX/XY), leaving 22 autosome pairs.",
            },
            {
              spec: { type: "number", value: 44 },
              feedback: "44 is the number of individual autosomes; the question asks for the number of PAIRS.",
            },
          ],
          solution: [
            "Humans have {{46 / 2 = 23}} total chromosome pairs.",
            "Subtracting the 1 pair of sex chromosomes (XX or XY) leaves **22 pairs of autosomes**.",
          ],
          hints: [
            "First find the total number of pairs in {{2n = 46}}.",
            "Subtract the single pair of sex chromosomes to leave autosome pairs only.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q02",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Outline",
          guideRef: "diversity-genomes-karyograms",
          marks: 3,
          question:
            "Outline three cytogenetic or molecular lines of evidence confirming that human chromosome 2 formed by end-to-end fusion of two ancestral ape chromosomes (2A and 2B).",
          modelAnswer:
            "First, G-banding patterns along the short and long arms of human chromosome 2 match the banding sequences of chimpanzee chromosomes 2A and 2B aligned end-to-end. Second, DNA sequencing reveals vestigial head-to-head internal telomere repeat sequences (TTAGGG) deep inside chromosome 2 at band 2q13 where the tips fused. Third, human chromosome 2 contains a second inactivated vestigial centromere sequence in addition to its single functional centromere.",
          markScheme: [
            {
              point: "Matching G-banding patterns / gene order between human chromosome 2 arms and ape chromosomes 2A and 2B.",
              keywords: ["g-banding", "banding", "gene order", "matching"],
            },
            {
              point: "Vestigial internal telomere repeat sequences (TTAGGG) at the fusion site (2q13).",
              keywords: ["internal telomere", "telomere", "ttaggg", "2q13"],
            },
            {
              point: "Presence of a second inactivated / vestigial centromere alongside the active centromere.",
              keywords: ["inactivated", "inactive", "vestigial centromere", "second centromere"],
            },
          ],
          hints: [
            "Think about what normally sits at chromosome tips (telomeres), near the middle (centromeres), and along the arms (G-bands).",
            "Joining two chromosomes end-to-end leaves distinctive molecular scars for all three features.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q03",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Compare",
          guideRef: "diversity-genomes-karyograms",
          marks: 4,
          question:
            "Compare DNA barcoding and environmental DNA (eDNA) analysis in biodiversity monitoring, including one specific advantage and one limitation of eDNA.",
          modelAnswer:
            "DNA barcoding sequences a short, standardised conserved marker gene (such as mitochondrial *COI* in animals or *rbcL* in plants) extracted from an individual specimen to match against a reference library and identify species, including cryptic species. Environmental DNA (eDNA) applies barcoding directly to shed trace DNA filtered from water, soil, or air without capturing or disturbing organisms. A major advantage of eDNA is non-invasive, highly sensitive detection of rare, nocturnal, or elusive aquatic species at low cost. However, a key limitation is that eDNA degrades rapidly in warm/UV-exposed water, can drift downstream from its source, and cannot easily determine exact population abundance, age, or whether the organism is currently alive.",
          markScheme: [
            {
              point: "Defines DNA barcoding: short standardised marker gene (e.g. COI or rbcL) matched to reference database.",
              keywords: ["coi", "rbcl", "marker", "reference", "standardised"],
            },
            {
              point: "Explains eDNA link: collects shed trace DNA from water/soil/air without capturing specimens.",
              keywords: ["shed", "trace", "water", "soil", "without capturing"],
            },
            {
              point: "Advantage of eDNA: non-invasive and detects rare, cryptic, or elusive species sensitively.",
              keywords: ["non-invasive", "elusive", "rare", "sensitive", "cryptic"],
            },
            {
              point: "Limitation of eDNA: degrades over time, drifts in currents, or cannot easily measure abundance/age/living status.",
              keywords: ["degrade", "drift", "abundance", "alive", "biomass"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant biology on barcoding or eDNA.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic definitions of barcoding or eDNA without clearly linking them or evaluating an advantage and limitation.",
              indicators: ["Mentions sequencing DNA from water", "Missing reference marker or limitation"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately links standardised barcoding markers (*COI*/*rbcL*) with trace eDNA extraction and provides both a clear advantage and biological limitation.",
              indicators: ["Names marker genes and non-invasive sampling", "Gives realistic ecological limitation (drift/degradation/abundance)"],
            },
          ],
          hints: [
            "First explain how barcoding identifies a specimen using a short conserved gene (*COI* / *rbcL*).",
            "Then explain how eDNA collects DNA straight from the environment, plus one clear strength and one caveat (e.g. DNA drift or abundance).",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "classification-cladistics-hl",
          question:
            "A conserved 400-base-pair DNA segment is aligned between two tropical hornbill species and differs at 24 base positions. Calculate the percentage sequence identity between the two species.",
          answer: { type: "number", value: 94, display: "94%" },
          traps: [
            {
              spec: { type: "number", value: 6 },
              feedback: "6% is the percentage DIFFERENCE — subtract from 100% to get percentage IDENTITY.",
            },
          ],
          solution: [
            "Number of identical base pairs: {{400 - 24 = 376}}.",
            "Percentage identity: {{(376 / 400) * 100 = 94}}%.",
          ],
          hints: [
            "Find how many of the 400 bases are IDENTICAL ({{400 - 24}}).",
            "Divide the identical bases by 400 and multiply by 100.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "classification-cladistics-hl",
          question:
            "Radiometric fossil dating shows that two fruit-bat species diverged 25 million years ago (Ma) and differ at 15 nucleotide sites in a conserved gene. Two other fruit-bat species differ at 21 nucleotide sites in the same gene. Assuming a constant molecular clock, estimate how many million years ago the second pair diverged.",
          answer: { type: "number", value: 35, tolerance: 0.05, display: "35 Ma" },
          traps: [
            {
              spec: { type: "number", value: 17.86, tolerance: 0.1 },
              feedback: "You inverted the ratio! More differences (21 > 15) must correspond to an OLDER divergence time (> 25 Ma).",
            },
            {
              spec: { type: "number", value: 12.6, tolerance: 0.1 },
              feedback: "Divide differences by the substitution rate ({{21 / 0.6}}), rather than multiplying.",
            },
          ],
          solution: [
            "Calibrate the pairwise substitution rate: {{r = 15 / 25 = 0.60}} differences per Ma.",
            "Estimate divergence time for 21 differences: {{t = 21 / 0.60 = 35}} Ma.",
          ],
          hints: [
            "Calculate the pairwise substitution rate from the calibration pair: {{r = 15 / 25}}.",
            "Divide 21 differences by {{0.60}} differences per Ma.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "classification-cladistics-hl",
          question:
            "A neutral mitochondrial gene accumulates base substitutions at a constant rate of **0.4 substitutions per lineage per million years**. Two gecko species differ at 24 nucleotide sites in this gene. Estimate how many million years ago the two species diverged.",
          answer: { type: "number", value: 30, tolerance: 0.05, display: "30 Ma" },
          traps: [
            {
              spec: { type: "number", value: 60 },
              feedback: "Watch out! The rate is given PER LINEAGE — mutations accumulate along BOTH diverging lineages simultaneously, so divide by {{2 * 0.4 = 0.8}}.",
            },
          ],
          solution: [
            "Because substitutions accumulate independently along both branches after divergence, the pairwise divergence rate is {{2 * 0.4 = 0.8}} substitutions per Ma.",
            "Divergence time: {{t = 24 / 0.8 = 30}} Ma.",
          ],
          hints: [
            "Check whether the quoted rate is pairwise or per single lineage.",
            "With two diverging lineages, pairwise differences accumulate at {{2 * 0.4 = 0.8}} substitutions per Ma.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "classification-cladistics-hl",
          diagram: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rooted plant cladogram comparing five taxa: Moss, Fern, Pine, Lily, and Rose">
  <rect x="0" y="0" width="420" height="180" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4"/>
  <line x1="60" y1="162" x2="60" y2="142" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="60" y1="142" x2="46" y2="42" stroke="#475569" stroke-width="2"/>
  <line x1="60" y1="142" x2="140" y2="116" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="140" y1="116" x2="128" y2="42" stroke="#0f172a" stroke-width="2"/>
  <line x1="140" y1="116" x2="224" y2="90" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="224" y1="90" x2="210" y2="42" stroke="#0f172a" stroke-width="2"/>
  <line x1="224" y1="90" x2="316" y2="66" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="316" y1="66" x2="292" y2="42" stroke="#0f172a" stroke-width="2"/>
  <line x1="316" y1="66" x2="364" y2="42" stroke="#0f172a" stroke-width="2"/>
  <line x1="94" y1="123" x2="104" y2="135" stroke="#dc2626" stroke-width="2.4"/>
  <text x="108" y="142" font-size="9.5" font-weight="700" fill="#b91c1c">Vascular tissue</text>
  <line x1="178" y1="98" x2="188" y2="110" stroke="#dc2626" stroke-width="2.4"/>
  <text x="192" y="116" font-size="9.5" font-weight="700" fill="#b91c1c">Seeds</text>
  <line x1="264" y1="73" x2="274" y2="85" stroke="#dc2626" stroke-width="2.4"/>
  <text x="279" y="92" font-size="9.5" font-weight="700" fill="#b91c1c">Flowers</text>
  <text x="46" y="32" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Moss</text>
  <text x="128" y="32" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Fern</text>
  <text x="210" y="32" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Pine</text>
  <text x="292" y="32" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Lily</text>
  <text x="364" y="32" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Rose</text>
</svg>`,
          question:
            "Examine the rooted plant cladogram above. Identify the single plant group that serves as the **outgroup** lacking all three derived traits marked on the tree.",
          answer: {
            type: "text",
            accept: ["Moss", "moss", "mosses"],
            display: "Moss",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Fern", "fern"] },
              feedback: "Fern sits above the 'Vascular tissue' synapomorphy tick mark — look one node closer to the root.",
            },
          ],
          solution: [
            "**Moss** diverges from the deepest basal node before the evolution of vascular tissue, seeds, and flowers, serving as the outgroup.",
          ],
          hints: [
            "Trace down to the deepest basal root node of the cladogram.",
            "The outgroup branches off BEFORE the first red synapomorphy tick mark ('Vascular tissue').",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Compare",
          guideRef: "classification-cladistics-hl",
          marks: 4,
          question:
            "Compare the three domains Bacteria, Archaea, and Eukarya with reference to rRNA evolutionary relationships, ribosome size, cell-wall composition, and membrane lipid structure.",
          modelAnswer:
            "Based on 16S and 18S rRNA sequencing, Archaea share a more recent common ancestor with Eukarya than with Bacteria. Both Bacteria and Archaea are prokaryotes with 70S ribosomes and no membrane-bound nucleus, whereas Eukarya have 80S cytoplasmic ribosomes and nuclei. However, bacterial cell walls contain peptidoglycan while archaeal and eukaryotic cell walls lack peptidoglycan (plants use cellulose and fungi use chitin). In plasma membranes, Archaea possess unique ether-linked branched lipids conferring stability in extreme environments, whereas both Bacteria and Eukarya have ester-linked unbranched phospholipids.",
          markScheme: [
            {
              point: "Phylogeny from rRNA: Archaea and Eukarya share a more recent common ancestor than either shares with Bacteria.",
              keywords: ["more recent common ancestor", "closer to eukarya", "archaea and eukarya", "rrna"],
            },
            {
              point: "Ribosomes: Bacteria and Archaea have 70S ribosomes whereas Eukarya have 80S cytoplasmic ribosomes.",
              keywords: ["70s", "80s"],
            },
            {
              point: "Cell wall: Bacteria contain peptidoglycan, whereas Archaea (and Eukarya) lack peptidoglycan.",
              keywords: ["peptidoglycan"],
            },
            {
              point: "Membrane lipids: Archaea have ether-linked branched lipids vs ester-linked unbranched lipids in Bacteria and Eukarya.",
              keywords: ["ether", "ester", "branched"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No accurate domain comparisons provided.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Contrasts prokaryotes vs eukaryotes (nucleus/ribosomes) but omits key Bacteria vs Archaea biochemistry or rRNA branching order.",
              indicators: ["Mentions 70S vs 80S or nucleus", "Missing peptidoglycan or ether/ester lipids"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Covers all four molecular/structural comparisons accurately across all three domains, including Archaea–Eukarya sister relationship.",
              indicators: ["Includes peptidoglycan and ether vs ester linkages", "Correctly states Archaea closer to Eukarya"],
            },
          ],
          hints: [
            "Start with the evolutionary branching order from rRNA: which two domains share the most recent common ancestor?",
            "Then contrast all three domains across ribosome size (70S vs 80S), cell wall peptidoglycan, and ether vs ester membrane lipids.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "classification-cladistics-hl",
          marks: 4,
          question:
            "Explain why molecular evidence forced taxonomists to reclassify the figwort family (*Scrophulariaceae*), referring to clades, convergent evolution, and analogous structures.",
          modelAnswer:
            "Traditionally, botanists grouped over 275 genera into the figwort family based on shared tubular flower shapes adapted to similar insect pollinators. When taxonomists sequenced conserved chloroplast DNA genes (such as *rbcL* and *ndhF*), they discovered that these genera actually belonged to at least five separate evolutionary lineages, making the old family polyphyletic rather than a true monophyletic clade (one ancestor plus all descendants). The shared floral structures were analogous traits shaped independently by convergent evolution rather than homologous inheritance. Over 80% of genera (including foxgloves and snapdragons) were therefore moved into other families such as Plantaginaceae so every family represents a genuine clade.",
          markScheme: [
            {
              point: "Traditional grouping relied on floral morphology, which proved misleading.",
              keywords: ["flower", "floral", "morphology", "pollinator"],
            },
            {
              point: "Chloroplast DNA sequencing showed the old family was polyphyletic (not a single monophyletic clade).",
              keywords: ["chloroplast", "polyphyletic", "monophyletic", "clade"],
            },
            {
              point: "Shared flower shapes were analogous traits produced by convergent evolution.",
              keywords: ["analogous", "convergent"],
            },
            {
              point: "Majority of genera (e.g. foxgloves/snapdragons) were reassigned into other families (e.g. Plantaginaceae) to restore true clades.",
              keywords: ["reassigned", "moved", "plantaginaceae", "foxglove", "snapdragon", "80%"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant explanation of figwort reclassification.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States that DNA differed from flower appearance, without explaining polyphyly, analogy, or convergent evolution.",
              indicators: ["Mentions DNA sequencing", "Lacks analogous/convergent/monophyletic vocabulary"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Full cladistic explanation linking chloroplast DNA sequences, convergent evolution of analogous flowers, polyphyly, and reassignment to monophyletic families.",
              indicators: ["Uses both analogous and convergent accurately", "Explains reassignment into true clades"],
            },
          ],
          hints: [
            "Contrast what old botanists looked at (flower shape) with what cladists sequenced (chloroplast DNA).",
            "Weave in the exact terms: polyphyletic/monophyletic clade, analogous, and convergent evolution.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "evolution-speciation",
          question:
            "Wild diploid onion species M ({{2n = 16}}) hybridises with diploid species N ({{2n = 18}}) to form a sterile F₁ hybrid. Spontaneous non-disjunction then doubles the entire chromosome set to produce a fertile allopolyploid. Calculate the somatic chromosome number of this new fertile species.",
          answer: { type: "number", value: 34, display: "34" },
          traps: [
            {
              spec: { type: "number", value: 17 },
              feedback: "17 is the sterile F₁ hybrid count — remember to double it after spontaneous genome doubling!",
            },
            {
              spec: { type: "number", value: 68 },
              feedback: "Halve each diploid parent to get gametes (8 and 9) before summing and doubling.",
            },
          ],
          solution: [
            "Haploid gametes carry {{n_M = 16 / 2 = 8}} and {{n_N = 18 / 2 = 9}} chromosomes.",
            "Sterile F₁ hybrid has {{8 + 9 = 17}} unpaired chromosomes.",
            "Spontaneous chromosome doubling produces {{2 * 17 = 34}} chromosomes (17 homologous pairs).",
          ],
          hints: [
            "Find the haploid gamete count from each parent first: {{16 / 2}} and {{18 / 2}}.",
            "Sum the gametes to get the sterile hybrid, then multiply by 2 for genome doubling.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "evolution-speciation",
          question:
            "A fertile autotetraploid flowering plant ({{4n = 28}}) cross-pollinates with its original diploid parent species ({{2n = 14}}). Calculate the somatic chromosome number of the resulting sterile triploid ({{3n}}) offspring.",
          answer: { type: "number", value: 21, display: "21" },
          traps: [
            {
              spec: { type: "number", value: 42 },
              feedback: "Gametes undergo meiosis first! Halve both 28 and 14 before adding.",
            },
          ],
          solution: [
            "Meiosis halves the tetraploid count to produce diploid gametes ({{2n = 28 / 2 = 14}}).",
            "Meiosis halves the diploid parent to produce haploid gametes ({{n = 14 / 2 = 7}}).",
            "Fertilisation produces a triploid zygote with {{14 + 7 = 21}} chromosomes (odd ploidy → sterile).",
          ],
          hints: [
            "Meiosis halves the somatic count of EVERY parent: {{28 / 2 = 14}} and {{14 / 2 = 7}}.",
            "Add the two gamete chromosome counts together.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "evolution-speciation",
          marks: 5,
          question:
            "Explain how sympatric speciation can occur within a single continuous habitat without geographical barriers, contrasting temporal or behavioural isolation with plant allopolyploidy.",
          modelAnswer:
            "Sympatric speciation generates new species while subpopulations remain in the same geographic area, relying on non-geographic barriers that halt gene flow. In temporal isolation, subpopulations reproduce at different seasons or times — for instance, *Howea* palms on Lord Howe Island growing on different soil pH regimes flower six weeks apart, preventing cross-pollination — whereas in behavioural isolation, diverging courtship songs or mating displays stop mate recognition (such as crater-lake cichlids), gradually allowing divergent selection and mutation to complete speciation over many generations. By contrast, allopolyploidy in plants (such as *Triticum* wheat or *Allium*) occurs abruptly in a single generation: two species hybridise to produce a sterile F₁ with unpaired chromosomes, and spontaneous meiotic non-disjunction doubles the entire genome so every chromosome gains a homologous partner. The resulting fertile polyploid is immediately reproductively isolated from both diploid parents because backcrosses produce sterile odd-ploidy (triploid) offspring.",
          markScheme: [
            {
              point: "Defines sympatric speciation: reproductive isolation halting gene flow within the same geographic area.",
              keywords: ["same geographic", "same area", "gene flow", "without geographical"],
            },
            {
              point: "Explains temporal (e.g. *Howea* palm flowering seasons) or behavioural (courtship/mate choice) prezygotic barrier.",
              keywords: ["temporal", "howea", "flowering", "behavioural", "courtship"],
            },
            {
              point: "Explains plant allopolyploidy mechanism: interspecific hybridisation followed by non-disjunction / genome doubling restoring homologous pairing.",
              keywords: ["non-disjunction", "doubling", "homologous", "allopolyploid"],
            },
            {
              point: "Explains instant reproductive isolation of polyploids via sterile triploid/odd-ploidy backcrosses.",
              keywords: ["triploid", "backcross", "sterile", "reproductively isolated"],
            },
            {
              point: "Contrasts timescale: temporal/behavioural divergence is gradual across generations whereas polyploidy creates a new species abruptly in one generation.",
              keywords: ["single generation", "abruptly", "instant", "gradual"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant sympatric speciation mechanism described.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Defines sympatric speciation and names one barrier, but lacks chromosomal mechanics of allopolyploidy or a clear contrast.",
              indicators: ["Mentions 'same area'", "Superficial mention of polyploidy without meiosis/fertility link"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explains both ecological/temporal/behavioural isolation and chromosomal genome doubling with named examples, though missing either backcross sterility or timescale contrast.",
              indicators: ["Accurate examples (*Howea*, *Triticum*, cichlids)", "Explains homologous pairing restoration"],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Complete, rigorous HL account contrasting gradual prezygotic isolation with single-generation allopolyploidy, homologous pairing, and sterile backcross isolation.",
              indicators: ["Explicit timescale contrast", "All five marking criteria clearly met"],
            },
          ],
          hints: [
            "Start with what unites all sympatric mechanisms: halting gene flow WITHOUT a physical barrier.",
            "Contrast gradual prezygotic isolation (temporal *Howea* palms / behavioural cichlids) with instant postzygotic isolation via plant genome doubling and sterile triploid backcrosses.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "evolution-speciation",
          marks: 4,
          question:
            "Explain how adaptive radiation produced the diversity of beak shapes observed among Darwin's finches across the Galápagos archipelago.",
          modelAnswer:
            "A small ancestral finch population colonised the volcanic Galápagos Islands, where few competing bird species existed, leaving many unoccupied ecological niches (such as hard seeds, soft fruits, cactus nectar, and tree-bark insects). Different islands offered distinct food sources and limited gene flow across ocean channels. Heritable variation in beak depth and length meant individuals whose beaks best matched local food availability survived better and left more offspring through directional natural selection. Over successive generations, isolated subpopulations diverged genetically and behaviourally into over fourteen distinct species with specialised beaks — rapid diversification from one common ancestor known as adaptive radiation.",
          markScheme: [
            {
              point: "Single ancestral colonising finch lineage encounters abundant unoccupied ecological niches / low competition.",
              keywords: ["ancestral", "unoccupied", "niche", "vacant", "colonis"],
            },
            {
              point: "Heritable genetic variation in beak size/shape exists among individuals.",
              keywords: ["heritable", "beak", "variation"],
            },
            {
              point: "Different food resources across islands create divergent natural selection favouring specialised beaks (differential survival/reproduction).",
              keywords: ["natural selection", "food", "seeds", "insects", "differential", "survive"],
            },
            {
              point: "Limited gene flow across islands leads to reproductive isolation and rapid speciation into multiple specialised species.",
              keywords: ["reproductive isolation", "speciation", "rapid", "gene flow", "diverged"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid evolutionary explanation.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States that finches have different beaks for different foods, without linking ancestral colonisation, vacant niches, and selection/isolation.",
              indicators: ["Mentions seeds vs insects", "Misses adaptive radiation / reproductive isolation"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Full HL explanation linking single ancestral colonist, vacant niches, heritable beak variation, divergent natural selection, and speciation across islands.",
              indicators: ["Explicitly connects unoccupied niches to divergent selection", "Avoids Lamarckian 'needing to adapt' phrasing"],
            },
          ],
          hints: [
            "Mention the starting condition: one ancestral species colonising islands with many vacant feeding niches.",
            "Trace heritable beak variation → divergent natural selection on different food sources → reproductive isolation.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q14",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "conservation-biodiversity",
          question:
            "A degraded coastal wetland sampled before rewilding held 4 bird species with counts 18, 2, 2, and 2 ({{N = 24}}). Three years after habitat restoration, counts across the four species shifted to 8, 6, 6, and 4 ({{N = 24}}). Calculate Simpson's reciprocal diversity index {{D}} **after restoration** to 2 decimal places.",
          answer: { type: "number", value: 4.31, tolerance: 0.02, display: "4.31" },
          traps: [
            {
              spec: { type: "number", value: 1.77, tolerance: 0.02 },
              feedback: "1.77 is Simpson's D BEFORE restoration — recalculate using the post-restoration counts 8, 6, 6, and 4.",
            },
            {
              spec: { type: "number", value: 0.23, tolerance: 0.02 },
              feedback: "You inverted the ratio! Divide {{N(N - 1)}} by {{Σ n(n - 1)}}.",
            },
          ],
          solution: [
            "Use the post-restoration counts (8, 6, 6, 4): {{N = 24}}, so {{N(N - 1) = 24 * 23 = 552}}.",
            "Compute {{Σ n(n - 1) = (8 * 7) + (6 * 5) + (6 * 5) + (4 * 3) = 56 + 30 + 30 + 12 = 128}}.",
            "{{D = 552 / 128 = 4.3125 ≈ 4.31}} (up dramatically from 1.77 before restoration).",
          ],
          hints: [
            "Make sure you pick the AFTER restoration dataset: 8, 6, 6, and 4.",
            "Compute {{N(N - 1) = 24 * 23 = 552}} and divide by {{56 + 30 + 30 + 12 = 128}}.",
          ],
        },
        {
          id: "a3-a4-unity-organisms-ecosystems-p2-q15",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "classification-cladistics-hl",
          marks: 6,
          question:
            "Discuss the advantages and limitations of relying on molecular sequence data and molecular clocks, rather than morphological traits alone, when constructing cladograms and estimating divergence dates.",
          modelAnswer:
            "Molecular sequences (DNA, rRNA, and amino acids) provide objective, quantitative character matrices spanning thousands of nucleotide sites and allow direct comparison across vastly distant organisms lacking shared anatomy — such as Carl Woese comparing 16S/18S rRNA across Bacteria, Archaea, and Eukarya. Unlike morphological traits, sequence comparisons uncover cryptic species and detect convergent evolution of analogous structures (as demonstrated by the reclassification of *Scrophulariaceae* figworts), while calibrated molecular clocks can estimate divergence ages even when fossil strata are sparse. Nevertheless, molecular approaches carry important limitations: substitution rates vary across genes, lineages, and generation times, so molecular clocks are only approximations requiring radiometrically dated fossil anchors. Over very deep timescales, repeated mutations at the same nucleotide site (mutational saturation) obscure true divergence counts, and horizontal gene transfer in prokaryotes or incomplete lineage sorting in single-gene trees can conflict with the true species phylogeny. Consequently, robust cladistics integrates multiple independent nuclear/organellar loci alongside fossil and morphological evidence.",
          markScheme: [
            {
              point: "Advantage 1: objective, quantitative large datasets comparing organisms with no comparable anatomy (e.g. rRNA across three domains).",
              keywords: ["objective", "quantitative", "rrna", "domains", "comparable anatomy"],
            },
            {
              point: "Advantage 2: exposes convergent evolution / analogous morphology (e.g. figwort reclassification) and resolves cryptic species.",
              keywords: ["convergent", "analogous", "figwort", "scrophulariaceae", "cryptic"],
            },
            {
              point: "Advantage 3: molecular clocks estimate divergence dates where fossil records are incomplete.",
              keywords: ["divergence", "fossil", "estimate", "sparse", "incomplete"],
            },
            {
              point: "Limitation 1: molecular clocks are non-uniform (mutation rates vary across genes, generation times, or selection) and need fossil calibration.",
              keywords: ["vary", "generation time", "calibrat", "approximation", "selection"],
            },
            {
              point: "Limitation 2: mutational saturation over deep time, horizontal gene transfer, or single-gene tree discordance (or cost/DNA degradation in fossils).",
              keywords: ["saturation", "horizontal gene transfer", "degrad", "single-gene", "multiple mutations"],
            },
            {
              point: "Balanced synthesis: best practice integrates multi-gene molecular data with fossil calibration and homologous morphology.",
              keywords: ["integrat", "multiple", "combine", "consequently"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant discussion of molecular cladistics or clocks.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States that DNA is more accurate than appearance, with minimal detail on molecular clocks or limitations.",
              indicators: ["One-sided advantages only", "No mention of clock calibration or rate variation"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Presents valid strengths (avoiding analogy, rRNA domains) and at least one real limitation (variable mutation rates or fossil calibration).",
              indicators: ["Mentions convergent evolution", "Identifies uneven clock rates"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Comprehensive HL discussion weighing quantitative power, convergence detection, and molecular clocks against rate variation, saturation/HGT, and fossil calibration needs.",
              indicators: ["Names concrete IB examples (Woese rRNA, figworts)", "Concludes with multi-evidence integration"],
            },
          ],
          hints: [
            "Balance three concrete advantages (objectivity across domains, catching convergent analogy like figworts, dating splits) with two or three real limitations.",
            "Think about why molecular clocks fail without fossil anchors: unequal generation times, selection, mutational saturation, and HGT.",
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 Qs — ALL difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "a3-a4-unity-organisms-ecosystems-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "conservation-biodiversity",
      question:
        "A freshwater ecologist counts {{N = 25}} macroinvertebrates across several species in a stream kick-sample and records Simpson's reciprocal diversity index as {{D = 4.00}}. Rearrange the formula {{D = (N(N - 1)) / (Σ n(n - 1))}} to calculate the exact value of {{Σ n(n - 1)}}.",
      answer: { type: "number", value: 150, display: "150" },
      traps: [
        {
          spec: { type: "number", value: 2400 },
          feedback: "Rearranging {{D = N(N - 1) / Σ}} gives {{Σ = N(N - 1) / D}}, so divide 600 by 4 rather than multiplying.",
        },
        {
          spec: { type: "number", value: 156.25, tolerance: 0.1 },
          feedback: "Use {{N(N - 1) = 25 * 24 = 600}}, not {{N^2 = 625}}.",
        },
      ],
      solution: [
        "Compute the numerator: {{N(N - 1) = 25 * 24 = 600}}.",
        "Rearrange Simpson's formula: {{Σ n(n - 1) = (N(N - 1)) / D}}.",
        "Substitute values: {{Σ n(n - 1) = 600 / 4.00 = 150}}.",
      ],
      hints: [
        "First compute {{N(N - 1)}} for {{N = 25}}.",
        "Multiply both sides by {{Σ n(n - 1)}} and divide by {{D}}.",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "classification-cladistics-hl",
      question:
        "Fossil stratigraphy dates the divergence of two mammal lineages to 40 million years ago (Ma). Across an aligned 1,500-base-pair neutral intron, the two living species now differ at 3.2% of base positions. Calculate the **per-lineage** substitution rate in nucleotide substitutions per million years (give your answer to 1 decimal place).",
      answer: { type: "number", value: 0.6, tolerance: 0.01, display: "0.6" },
      traps: [
        {
          spec: { type: "number", value: 1.2, tolerance: 0.01 },
          feedback: "1.2 substitutions per Ma is the PAIRWISE divergence rate across both lineages combined — divide by 2 for the per-lineage rate.",
        },
      ],
      solution: [
        "Find total pairwise nucleotide differences: {{d = 0.032 * 1500 = 48}} substitutions.",
        "Find pairwise divergence rate: {{r = 48 / 40 = 1.2}} substitutions per Ma.",
        "Because both lineages evolved independently for 40 Ma (80 Ma of combined branch time), the per-lineage rate is {{r_L = 1.2 / 2 = 0.6}} substitutions per lineage per Ma.",
      ],
      hints: [
        "Convert 3.2% of 1,500 bp into an exact count of nucleotide differences.",
        "Divide differences by 40 Ma to get the pairwise divergence rate.",
        "Remember two diverging branches accumulate mutations independently, so halve the pairwise rate to get the per-lineage rate.",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "evolution-speciation",
      question:
        "Allotetraploid pasta wheat (*Triticum turgidum*, {{4n = 28}}) hybridised in ancient Near Eastern fields with wild diploid goat grass (*Aegilops tauschii*, {{2n = 14}}). Spontaneous genome doubling of the sterile hybrid then created fertile bread wheat (*Triticum aestivum*). Calculate the somatic chromosome number of bread wheat.",
      answer: { type: "number", value: 42, display: "42" },
      traps: [
        {
          spec: { type: "number", value: 21 },
          feedback: "21 is the sterile triploid hybrid count (14 + 7) — remember to double it after spontaneous allopolyploid genome doubling!",
        },
        {
          spec: { type: "number", value: 84 },
          feedback: "Halve both parent somatic counts via meiosis before forming the hybrid zygote and doubling.",
        },
      ],
      solution: [
        "*Triticum turgidum* ({{4n = 28}}) produces gametes with {{28 / 2 = 14}} chromosomes.",
        "*Aegilops tauschii* ({{2n = 14}}) produces gametes with {{14 / 2 = 7}} chromosomes.",
        "The sterile hybrid has {{14 + 7 = 21}} unpaired chromosomes; spontaneous genome doubling creates fertile allohexaploid bread wheat with {{2 * 21 = 42}} chromosomes ({{6n = 42}}).",
      ],
      hints: [
        "Meiosis halves each parent's somatic count: {{28 -> 14}} and {{14 -> 7}}.",
        "Add the two gamete counts to form the sterile hybrid, then multiply by 2 for spontaneous genome doubling.",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "conservation-biodiversity",
      question:
        "Before a marine heatwave, a coral-reef quadrat held 5 coral species with equal counts of 5 colonies each (5, 5, 5, 5, 5; {{N = 25}}). After bleaching killed three sensitive species completely, a single heat-tolerant species expanded so the quadrat held counts of 20, 5, 0, 0, and 0 (keeping {{N = 25}}). Calculate the **percentage decrease** in Simpson's reciprocal diversity index {{D}}.",
      answer: { type: "number", value: 75, tolerance: 0.1, display: "75%" },
      traps: [
        {
          spec: { type: "number", value: 4.5, tolerance: 0.05 },
          feedback: "4.50 is the absolute drop in D (6.00 − 1.50); now divide by the original D (6.00) and multiply by 100%.",
        },
        {
          spec: { type: "number", value: 25, tolerance: 0.1 },
          feedback: "25% is the fraction of D remaining (1.50 / 6.00); the percentage DECREASE is {{100% - 25% = 75%}}.",
        },
      ],
      solution: [
        "Numerator for both surveys ({{N = 25}}): {{N(N - 1) = 25 * 24 = 600}}.",
        "Before bleaching: {{Σ n(n - 1) = 5 * (5 * 4) = 100}}, so {{D_before = 600 / 100 = 6.00}}.",
        "After bleaching: {{Σ n(n - 1) = (20 * 19) + (5 * 4) = 380 + 20 = 400}}, so {{D_after = 600 / 400 = 1.50}}.",
        "Percentage decrease: {{((6.00 - 1.50) / 6.00) * 100 = (4.50 / 6.00) * 100 = 75}}%.",
      ],
      hints: [
        "Calculate {{D_before}} using counts [5, 5, 5, 5, 5] and {{N(N - 1) = 600}}.",
        "Calculate {{D_after}} using counts [20, 5] (zero counts contribute 0 to the sum).",
        "Apply {{% decrease = ((D_before - D_after) / D_before) * 100}}.",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Explain",
      guideRef: "diversity-genomes-karyograms",
      marks: 6,
      question:
        "Explain the chromosomal origin of the difference between the human karyotype ({{2n = 46}}) and that of chimpanzees and gorillas ({{2n = 48}}), detailing the cytogenetic evidence for this event and how chromosomal fusions can act as a barrier to gene flow during speciation.",
      modelAnswer:
        "The reduction from {{2n = 48}} in ancestral great apes to {{2n = 46}} in *Homo sapiens* arose from a single end-to-end telomeric fusion of two ancestral acrocentric chromosomes (2A and 2B) into modern human chromosome 2. Three cytogenetic hallmarks confirm this fusion: first, the G-banding patterns and gene loci along human chromosome 2 correspond sequentially to chimpanzee chromosomes 2A and 2B; second, inverted head-to-head telomeric TTAGGG repeat sequences persist internally at band 2q13; and third, a second inactivated vestigial centromere remains alongside the single functional centromere. During speciation, a heterozygous fusion carrier (47 chromosomes) forms a trivalent structure in meiosis I; misalignment frequently produces unbalanced aneuploid gametes with missing or extra chromosome arms, lowering hybrid fertility (postzygotic isolation). Once the fused chromosome becomes homozygous ({{2n = 46}}) in a small isolated subpopulation through genetic drift, reduced hybrid fertility against {{2n = 48}} populations restricts gene flow and reinforces reproductive isolation.",
      markScheme: [
        {
          point: "Identifies end-to-end telomeric fusion of ancestral ape chromosomes 2A and 2B forming human chromosome 2.",
          keywords: ["end-to-end", "fusion", "2a", "2b", "chromosome 2"],
        },
        {
          point: "Evidence 1: matching G-banding patterns / gene sequences along human chromosome 2 and ape 2A/2B.",
          keywords: ["g-banding", "banding", "gene loci", "matching"],
        },
        {
          point: "Evidence 2: vestigial internal telomere repeats (TTAGGG) at fusion site (2q13).",
          keywords: ["internal telomere", "telomeric", "ttaggg", "2q13"],
        },
        {
          point: "Evidence 3: second inactivated / vestigial centromere.",
          keywords: ["inactivated", "vestigial centromere", "second centromere"],
        },
        {
          point: "Meiotic mechanism: heterozygotes (47) risk unbalanced/aneuploid gametes during meiosis I pairing, lowering hybrid fertility.",
          keywords: ["unbalanced", "aneuploid", "trivalent", "meiosis", "fertility"],
        },
        {
          point: "Evolutionary consequence: fixation of homozygous fused karyotype (e.g. via drift) restricts gene flow / contributes to postzygotic reproductive isolation.",
          keywords: ["gene flow", "postzygotic", "reproductive isolation", "drift", "homozygous"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant cytogenetic or evolutionary explanation.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States that two ape chromosomes fused to form human chromosome 2, with one piece of evidence and no meiotic/speciation link.",
          indicators: ["Names fusion", "Missing internal telomeres or centromere or meiosis disruption"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Presents all three cytogenetic lines of evidence accurately, with a brief mention of reduced hybrid fertility.",
          indicators: ["Covers G-bands, internal telomeres, and inactive centromere", "Partial speciation link"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Complete HL synthesis covering all three molecular markers plus meiotic pairing failure in heterozygotes, unbalanced gametes, and restricted gene flow during speciation.",
          indicators: ["Explains unbalanced gametes in meiosis I", "Links fixation/drift to postzygotic isolation"],
        },
      ],
      hints: [
        "Structure into two halves: (1) the three cytogenetic markers of chromosome 2 fusion, and (2) what happens during meiosis I in a 47-chromosome heterozygote.",
        "Connect unbalanced gametes → reduced hybrid fertility → restricted gene flow (postzygotic barrier).",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "classification-cladistics-hl",
      marks: 6,
      question:
        "A phylogenetic team reconstructs two conflicting evolutionary trees for a group of tropical insects: Tree 1 uses wing venation and colouration, whereas Tree 2 uses aligned mitochondrial *COI* and nuclear rRNA sequences. Evaluate why molecular cladistics is generally prioritised over morphology, while examining two specific scenarios in which molecular data alone can still mislead cladists.",
      modelAnswer:
        "Molecular cladistics (Tree 2) is generally prioritised because DNA and rRNA sequences yield thousands of discrete, objective nucleotide characters rather than a handful of subjective physical features. Morphological traits such as wing colouration and shape are highly vulnerable to convergent evolution (producing analogous mimicry or aerodynamic traits across unrelated insects) and phenotypic plasticity, whereas neutral sequence changes reflect true shared descent and resolve monophyletic clades — just as chloroplast DNA overturned morphology in *Scrophulariaceae*. Furthermore, applying the principle of parsimony across independent nuclear and mitochondrial loci reduces random error. Nevertheless, molecular data alone can still mislead taxonomists in two key scenarios: first, over very deep evolutionary timescales, fast-evolving loci like mitochondrial *COI* suffer mutational saturation (multiple hits at the same nucleotide site reversing or masking earlier changes), underestimating true divergence; second, reliance on a single gene can conflict with the true species tree due to horizontal gene transfer, hybridisation/introgression of mitochondrial DNA, or unequal mutation rates across lineages. Robust systematics therefore combines multi-locus molecular phylogenetics with homologous morphology and fossil calibration.",
      markScheme: [
        {
          point: "Molecular strength 1: provides vast, objective, quantitative nucleotide characters across loci.",
          keywords: ["objective", "thousands", "quantitative", "discrete"],
        },
        {
          point: "Molecular strength 2: avoids misleading analogous traits from convergent evolution (mimicry/flight) or phenotypic plasticity.",
          keywords: ["analogous", "convergent", "mimicry", "plasticity"],
        },
        {
          point: "Cladistic method: applies parsimony across independent loci to identify true monophyletic clades (with example such as figworts).",
          keywords: ["parsimony", "monophyletic", "clade", "scrophulariaceae", "figwort"],
        },
        {
          point: "Molecular pitfall 1: mutational saturation (multiple substitutions at the same site) in fast-evolving genes like COI.",
          keywords: ["saturation", "multiple hits", "multiple mutations", "underestimat"],
        },
        {
          point: "Molecular pitfall 2: horizontal gene transfer, hybridisation/introgression, unequal substitution rates, or single-gene discordance.",
          keywords: ["horizontal gene transfer", "introgression", "hybridisation", "unequal", "single gene"],
        },
        {
          point: "Balanced judgement: combine multi-locus nuclear/mitochondrial data with homologous anatomy and fossils.",
          keywords: ["multi-locus", "combine", "fossil", "homologous"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant evaluation of molecular vs morphological cladistics.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Prefers DNA over wing appearance without explaining convergence, parsimony, or concrete molecular pitfalls.",
              indicators: ["General statement that DNA is more accurate", "No molecular caveats"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explains convergence/analogy and objectivity of DNA, plus at least one valid molecular limitation.",
          indicators: ["Mentions convergent evolution", "Identifies uneven mutation rate or single-gene error"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "High-level HL evaluation balancing molecular advantages (parsimony, monophyly, convergence avoidance) against two technical pitfalls (saturation, introgression/HGT/rate variation) and integrative conclusion.",
          indicators: ["Covers mutational saturation and HGT/introgression", "Integrates multiple lines of evidence"],
        },
      ],
      hints: [
        "Explain why wing colouration/venation is prone to convergent mimicry and analogous overlap.",
        "Then examine two genuine technical pitfalls of DNA trees: mutational saturation in fast mitochondrial genes like *COI*, and single-gene discordance (hybridisation/introgression or HGT).",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Compare and contrast",
      guideRef: "evolution-speciation",
      marks: 7,
      question:
        "Compare and contrast allopatric speciation, sympatric speciation via temporal or behavioural isolation, and sympatric speciation via allopolyploidy in terms of gene-flow barriers, timescale, meiotic mechanics, and prevalence across animals and plants.",
      modelAnswer:
        "All three mechanisms share the fundamental requirement of speciation: halting gene flow between populations so that distinct gene pools achieve reproductive isolation and can no longer interbreed to produce fertile offspring. However, they differ sharply in barrier origin, timescale, genetics, and taxonomic prevalence. Allopatric speciation initiates with an external physical barrier (such as the Congo River separating chimpanzees and bonobos), followed gradually over thousands to millions of generations by independent mutations, drift, and divergent natural selection. Sympatric speciation via temporal isolation (*Howea* palms flowering weeks apart on Lord Howe Island) or behavioural isolation (crater-lake cichlid mate-colour preference) operates within one continuous geographic range, relying on prezygotic ecological or courtship barriers that likewise diverge gradually over many generations. In stark contrast, allopolyploidy occurs instantaneously in a single generation via postzygotic chromosomal change: two plant species hybridise into a sterile F₁ lacking homologous pairs, and spontaneous non-disjunction doubles the entire genome so every chromosome regains a homologue for meiosis (e.g. hexaploid bread wheat *Triticum aestivum*, 6n = 42), while backcrosses with diploid parents yield sterile odd-ploidy offspring. Finally, while allopatric and behavioural isolation occur widely across animals and plants, polyploid speciation is common in flowering plants — which can self-pollinate or propagate vegetatively — but exceedingly rare in mammals because whole-genome doubling disrupts X/Y sex-chromosome dosage balance.",
      markScheme: [
        {
          point: "Core similarity: all three halt gene flow and establish reproductive isolation between diverging species.",
          keywords: ["gene flow", "reproductive isolation", "fertile offspring"],
        },
        {
          point: "Allopatric mechanism: physical/geographical barrier (e.g. Congo River apes) + gradual mutation, drift, and divergent selection.",
          keywords: ["physical barrier", "congo", "chimpanzee", "bonobo", "geographical"],
        },
        {
          point: "Ecological sympatric mechanism: same habitat; prezygotic temporal (*Howea* palms) or behavioural (cichlids) isolation.",
          keywords: ["temporal", "howea", "behavioural", "cichlid", "prezygotic"],
        },
        {
          point: "Allopolyploid mechanism: interspecific hybridisation + non-disjunction genome doubling restoring homologous pairing in meiosis (e.g. *Triticum* / *Allium*).",
          keywords: ["non-disjunction", "doubling", "homologous", "triticum", "allium"],
        },
        {
          point: "Backcross isolation in polyploids: odd-ploidy / triploid backcrosses fail meiosis and are sterile (postzygotic barrier).",
          keywords: ["postzygotic", "backcross", "odd-ploidy", "triploid", "sterile"],
        },
        {
          point: "Timescale contrast: allopatric and temporal/behavioural speciation unfold gradually across many generations vs instant single-generation polyploidy.",
          keywords: ["single generation", "instantaneous", "gradual", "thousands"],
        },
        {
          point: "Taxonomic prevalence: polyploidy thrives in self-pollinating/vegetative plants but is rare in mammals due to X/Y dosage balance.",
          keywords: ["self-pollinat", "vegetative", "dosage", "mammals", "prevalent"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant comparison of speciation mechanisms.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Defines allopatric vs sympatric broadly with minimal distinction between ecological sympatric barriers and polyploidy.",
          indicators: ["Mentions physical vs no physical barrier", "Lacks meiotic/timescale/taxonomic depth"],
        },
        {
          band: "3–5",
          marks: [3, 5],
          descriptor: "Covers all three mechanisms accurately with named examples and highlights similarities plus most contrasts (timescale or plant/animal prevalence).",
          indicators: ["Accurate examples for at least two mechanisms", "Explains genome doubling restoring fertility"],
        },
        {
          band: "6–7",
          marks: [6, 7],
          descriptor: "Authoritative HL synthesis integrating similarities (gene flow/isolation) and all four contrast axes (barrier type, timescale, meiosis/backcrosses, plant vs mammal prevalence).",
          indicators: ["Explains X/Y dosage and self-pollination contrast", "Contrasts prezygotic gradualism vs postzygotic single-generation speciation"],
        },
      ],
      hints: [
        "Begin with the overarching similarity (halting gene flow → reproductive isolation) before contrasting all four requested axes.",
        "Use concrete IB examples (*Pan* apes, *Howea* palms / cichlids, *Triticum* wheat) and explain why mammals rarely speciate by polyploidy.",
      ],
    },
    {
      id: "a3-a4-unity-organisms-ecosystems-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Discuss",
      guideRef: "conservation-biodiversity",
      marks: 8,
      question:
        "A Southeast Asian nation must allocate a finite conservation budget across three options: (i) expanding in-situ protected dipterocarp rainforest reserves linked by wildlife corridors, (ii) constructing an ex-situ seed bank and captive-breeding zoo, and (iii) funding EDGE-focused protection for Critically Endangered species such as the Sunda pangolin (*Manis javanica*). Discuss an evidence-based strategy that evaluates all three options across ecosystem, species, and genetic levels of biodiversity.",
      modelAnswer:
        "An evidence-based national strategy should allocate the largest share of funding to **in-situ protected dipterocarp reserves connected by wildlife corridors**, supplemented selectively by **EDGE prioritisation** and targeted **ex-situ backups**. Protecting large tracts of primary dipterocarp forest directly safeguards **ecosystem diversity** (intact canopies, hydrological cycles, and nutrient cycling) alongside thousands of interdependent plants, pollinators, fungi, and vertebrates simultaneously, keeping Simpson's species diversity (richness and evenness) high. Linking fragmented reserves with vegetated wildlife corridors (like Singapore's Eco-Link@BKE) restores dispersal and **gene flow**, mitigating genetic drift and inbreeding depression in isolated populations; furthermore, in-situ protection is indispensable because dipterocarp rainforest trees produce **recalcitrant seeds** that die if dried and frozen in conventional seed banks. However, reserves alone face severe ongoing threats from poaching, edge effects, and climate shifts. Allocating a focused tier of funding via the **EDGE framework** ensures high-impact rescue of Evolutionarily Distinct and Globally Endangered taxa like the Sunda pangolin (*Manis javanica*), preventing the irreversible erasure of millions of years of unique phylogenetic history (order Pholidota) while often acting as a flagship species whose anti-poaching enforcement protects entire shared forest habitats. Finally, **ex-situ captive breeding, veterinary rescue, tissue culture, and cryopreservation** should receive targeted emergency funding rather than dominating the budget: while zoos and studbooks provide a vital insurance buffer against imminent wild extinction and can maintain genetic diversity for future reintroduction, they are expensive per species, cannot house whole ecosystems, risk loss of wild survival behaviours, and fail for recalcitrant tropical seeds. Integrating in-situ corridors as the structural backbone, EDGE targeting for irreplaceable lineages, and ex-situ rescue as a safety net maximises protection across ecosystem, species, and genetic diversity.",
      markScheme: [
        {
          point: "In-situ strength (ecosystem & species level): conserves intact dipterocarp ecosystems, trophic webs, and high Simpson's richness/evenness simultaneously.",
          keywords: ["intact", "ecosystem diversity", "richness", "evenness", "interdependent", "canopies"],
        },
        {
          point: "In-situ strength (genetic level): wildlife corridors reconnect fragments, restoring gene flow and preventing inbreeding/drift.",
          keywords: ["corridor", "gene flow", "inbreeding", "genetic drift", "fragments"],
        },
        {
          point: "Tropical rainforest constraint: dipterocarps produce recalcitrant seeds that cannot survive freezing/desiccation in standard seed banks.",
          keywords: ["recalcitrant", "desiccat", "frozen", "die"],
        },
        {
          point: "In-situ limitation: reserves remain vulnerable to poaching, edge effects, enforcement costs, or climate change.",
          keywords: ["poaching", "edge effect", "enforcement", "climate"],
        },
        {
          point: "EDGE rationale: targets both Evolutionarily Distinct lineages (order Pholidota) and Globally Endangered status, avoiding irreversible phylogenetic loss (plus flagship co-benefits).",
          keywords: ["evolutionarily distinct", "globally endangered", "pholidota", "phylogenetic", "flagship"],
        },
        {
          point: "Ex-situ strength: emergency safety net via captive breeding studbooks, veterinary rescue, tissue culture, or cryopreservation for critically tiny populations.",
          keywords: ["safety net", "studbook", "tissue culture", "cryopreservation", "insurance"],
        },
        {
          point: "Ex-situ limitation: high cost per species, genetic bottlenecks, loss of wild behaviours, or inability to conserve whole ecosystems.",
          keywords: ["expensive", "bottleneck", "wild behaviour", "survival behaviour", "whole ecosystem"],
        },
        {
          point: "Integrated strategic judgement: prioritises in-situ corridors as primary backbone, layered with EDGE targeting and selective ex-situ backup across all three biodiversity levels.",
          keywords: ["backbone", "integrated", "largest share", "targeted", "three"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant biological discussion of conservation allocation.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Describes parks, zoos, or pangolins superficially with little evaluation or link to genetic/species/ecosystem diversity.",
          indicators: ["Basic definitions only", "No budget trade-offs or limitations"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Addresses all three options with some valid biological points, but treats them separately without deep tropical-forest constraints or cross-level synthesis.",
          indicators: ["Covers in-situ and ex-situ pros/cons", "Limited EDGE or recalcitrant seed reasoning"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Strong, balanced evaluation of all three approaches across ecosystem, species, and genetic levels with clear regional relevance (corridors, EDGE, captive studbooks).",
          indicators: ["Connects corridors to gene flow", "Explains EDGE phylogenetic value"],
        },
        {
          band: "7–8",
          marks: [7, 8],
          descriptor: "Exemplary IB Paper 2 extended response integrating all three biodiversity levels, Southeast Asian recalcitrant-seed biology, flagship/EDGE synergy, ex-situ limitations, and a coherent prioritised funding allocation.",
          indicators: ["Explicitly synthesises ecosystem, species, and genetic diversity", "Justifies relative budget priority with rigorous biological trade-offs"],
        },
      ],
      hints: [
        "Map each of the three budget options onto the three levels of biodiversity: ecosystem, species (richness/evenness), and genetic diversity.",
        "Include the decisive Southeast Asian biological constraint: dipterocarp trees have recalcitrant seeds that die in frozen seed banks.",
        "End with an explicit allocation recommendation explaining how in-situ corridors, EDGE targeting, and ex-situ rescue reinforce one another.",
      ],
    },
  ],
};
