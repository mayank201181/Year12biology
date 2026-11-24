import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1 — Core Foundations (SL & HL Mix)
  // =========================================================================
  {
    id: "a3-a4-unity-organisms-ecosystems-m1",
    title: "MCQ Paper 1 — Species, Karyograms, Speciation & Diversity",
    questions: [
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "diversity-genomes-karyograms",
        question: "Which entry shows the scientific name of the Asian elephant written according to Linnaeus's binomial rules?",
        options: [
          "*elephas maximus* — both genus and species lowercase, italicised",
          "*Elephas Maximus* — both genus and species capitalised, italicised",
          "*Elephas maximus* — capitalised genus, lowercase species, italicised",
          "*Maximus elephas* — species epithet written before genus, italicised",
        ],
        answerIndex: 2,
        explanation:
          "Binomial nomenclature places the genus first with an initial capital letter, followed by the species epithet entirely in lower case, with both words italicised in print (or underlined by hand): *Elephas maximus*. Capitalising the species epithet or lowercasing the genus breaks the universal taxonomic convention.",
        hints: [
          "Recall the exact order: Genus first, species epithet second.",
          "Only the very first letter of the genus name is capitalised; the species epithet is entirely lowercase.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "diversity-genomes-karyograms",
        question: "Which row correctly contrasts continuous variation with discontinuous variation in a natural population?",
        options: [
          "Continuous: polygenic with environmental influence; Discontinuous: one or few genes with discrete categories",
          "Continuous: controlled by one gene locus only; Discontinuous: controlled by many additive genes and diet",
          "Continuous: produces distinct non-overlapping bars; Discontinuous: produces a smooth bell-shaped distribution",
          "Continuous: unaffected by abiotic conditions; Discontinuous: strongly reshaped by local temperature and light",
        ],
        answerIndex: 0,
        explanation:
          "Continuous variation (such as height or leaf length) arises from the combined action of many genes (polygenic inheritance) plus environmental factors, creating an unbroken normal curve. Discontinuous variation (such as ABO blood group) is governed by one or a few genes with discrete, non-overlapping phenotypes.",
        hints: [
          "Think of human height (continuous) versus human ABO blood groups (discontinuous).",
          "Polygenic traits plus environmental effects produce a smooth unbroken range rather than fixed categories.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "diversity-genomes-karyograms",
        question:
          "A fetal karyogram prepared from amniocentesis displays 21 normal homologous autosome pairs, three chromosomes at pair 21, and one large X chromosome paired with one small Y chromosome. What can be deduced?",
        options: [
          "The fetus is a biological female with 46 chromosomes and normal autosomal pairs.",
          "The fetus is a biological male with 46 chromosomes resulting from mitotic error.",
          "The fetus is a biological female with 47 chromosomes caused by chromosome deletion.",
          "The fetus is a biological male with 47 chromosomes caused by meiotic non-disjunction.",
        ],
        answerIndex: 3,
        explanation:
          "Counting gives 21 pairs (42) + 3 copies of chromosome 21 + 2 sex chromosomes (XY) = 47 chromosomes in total. XY denotes a biological male, and trisomy 21 (Down syndrome) results from meiotic non-disjunction producing an {{n + 1}} gamete.",
        hints: [
          "Count carefully: 21 normal pairs = 42, plus three copies at position 21, plus XY (2).",
          "XY indicates a biological male, and an extra whole chromosome arises from non-disjunction during meiosis.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "diversity-genomes-karyograms",
        question: "Why is the biological species concept difficult to apply to prokaryotic bacteria such as *Escherichia coli*?",
        options: [
          "Bacteria lack DNA mutations and therefore remain genetically identical across habitats.",
          "Bacteria reproduce asexually by binary fission and exchange DNA via horizontal gene transfer.",
          "Bacterial cells contain diploid homologous pairs that fail to synapse during mitosis.",
          "Bacterial populations never experience natural selection or ecological niche divergence.",
        ],
        answerIndex: 1,
        explanation:
          "The biological species concept defines a species by sexual interbreeding to produce fertile offspring. Because bacteria reproduce asexually via binary fission and transfer plasmids horizontally even between distant lineages, interbreeding criteria cannot be applied.",
        hints: [
          "Recall how the biological species concept tests whether two organisms belong to the same species.",
          "Bacteria do not undergo sexual reproduction with meiosis and fertilisation, and they swap genes via plasmids.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "diversity-genomes-karyograms",
        question:
          "A plains zebra (*Equus quagga*, {{2n = 44}}) mates with a domestic horse (*Equus ferus caballus*, {{2n = 64}}) to produce a hybrid zorse. How many chromosomes are present in a somatic cell of the zorse?",
        options: [
          "44 chromosomes",
          "64 chromosomes",
          "54 chromosomes",
          "108 chromosomes",
        ],
        answerIndex: 2,
        explanation:
          "Meiosis halves each parent's diploid count: the zebra gamete carries {{n = 44 / 2 = 22}} chromosomes and the horse gamete carries {{n = 64 / 2 = 32}} chromosomes. Fertilisation combines these haploid sets to give {{22 + 32 = 54}} chromosomes in each zorse somatic cell. Summing the diploid numbers (108) forgets that gametes are haploid.",
        hints: [
          "Gametes are haploid (n), carrying half of each parent's diploid (2n) chromosome count.",
          "Calculate {{n_zebra = 44 / 2}} and {{n_horse = 64 / 2}}, then add the two haploid counts.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "evolution-speciation",
        question:
          "Human arms, bat wings, and dolphin flippers all share the pentadactyl bone pattern (humerus, radius/ulna, carpals, metacarpals, and phalanges). What does this anatomical pattern exemplify?",
        options: [
          "Analogous structures formed by convergent evolution in unrelated aquatic ancestors.",
          "Vestigial organs that have completely lost all mechanical function in modern mammals.",
          "Acquired characteristics passed directly from parents to offspring after repeated exercise.",
          "Homologous structures formed by divergent evolution from a shared tetrapod ancestor.",
        ],
        answerIndex: 3,
        explanation:
          "Pentadactyl limbs share the same underlying skeletal blueprint inherited from a common tetrapod ancestor, modified by divergent evolution (adaptive radiation) for grasping, flight, or swimming — the classic textbook example of homology. Analogous traits instead arise independently without a shared structural ancestor.",
        hints: [
          "Ask whether the shared bone arrangement comes from a common ancestor or independent evolution.",
          "Shared ancestry + different modified functions = homologous structures via divergent evolution.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "evolution-speciation",
        question:
          "Bottlenose dolphins (mammals) and great white sharks (cartilaginous fish) both possess streamlined fusiform bodies and dorsal fins. Which evolutionary explanation accounts for this resemblance?",
        options: [
          "Convergent evolution under similar marine drag pressures produced analogous traits.",
          "Divergent evolution from a streamlined mammalian ancestor retained homologous fins.",
          "Horizontal gene transfer between marine fish and cetaceans transferred dorsal-fin alleles.",
          "Artificial selection by coastal fisheries bred identical body silhouettes in both groups.",
        ],
        answerIndex: 0,
        explanation:
          "Dolphins evolved from terrestrial four-legged mammals whereas sharks belong to ancient cartilaginous fish. Similar hydrodynamic selection pressures in open water independently shaped streamlined bodies and stabilising dorsal fins — **convergent evolution** creating **analogous structures**.",
        hints: [
          "Did the most recent common ancestor of sharks and terrestrial-derived dolphins have a dolphin-like dorsal fin?",
          "Independent evolution of similar adaptations in unrelated lineages is convergent evolution.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "evolution-speciation",
        question:
          "Common chimpanzees (*Pan troglodytes*) live north of the Congo River, while bonobos (*Pan paniscus*) live south of it. Which sequence best explains how these two species diverged?",
        options: [
          "Individuals chose new diets on opposite banks, then passed learned habits directly into gametes.",
          "A river barrier halted gene flow, allowing separate mutations and selection to cause reproductive isolation.",
          "Spontaneous chromosome doubling occurred in bonobos, preventing them from crossing shallow rivers.",
          "Identical selection pressures on both banks forced rapid interbreeding until two genera emerged.",
        ],
        answerIndex: 1,
        explanation:
          "Because neither ape swims across the wide Congo River, geographical isolation stopped gene flow between northern and southern populations. Independent mutations, genetic drift, and differing local selection pressures diverged their gene pools until reproductive isolation completed **allopatric speciation**.",
        hints: [
          "A physical barrier like a river drives allopatric speciation.",
          "Trace the chain: physical barrier → halted gene flow → independent mutation/selection/drift → reproductive isolation.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "State",
        guideRef: "conservation-biodiversity",
        question: "Which combination lists the three biological levels at which biodiversity is measured?",
        options: [
          "Cellular diversity, organ diversity, and atmospheric diversity",
          "Biome diversity, trophic diversity, and fossil diversity",
          "Population density, carrying capacity, and biomass diversity",
          "Ecosystem diversity, species diversity, and genetic diversity",
        ],
        answerIndex: 3,
        explanation:
          "Biodiversity spans three nested biological levels: **ecosystem diversity** (variety of habitats and ecological processes), **species diversity** (species richness and evenness), and **genetic diversity** (variety of alleles within populations).",
        hints: [
          "Think from the largest ecological scale down to the DNA inside a single population.",
          "The three levels are ecosystem, species, and genetic diversity.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "conservation-biodiversity",
        question:
          "A quadrat in a botanical meadow records three plant species with counts of 5, 5, and 5 individuals. Using {{D = (N(N - 1)) / (Σ n(n - 1))}}, what is Simpson's reciprocal diversity index?",
        options: [
          "0.29",
          "3.00",
          "3.50",
          "4.20",
        ],
        answerIndex: 2,
        explanation:
          "Total individuals {{N = 5 + 5 + 5 = 15}}, so {{N(N - 1) = 15 * 14 = 210}}. For each species, {{n(n - 1) = 5 * 4 = 20}}, giving {{Σ n(n - 1) = 3 * 20 = 60}}. Therefore {{D = 210 / 60 = 3.50}}. Getting 0.29 inverts the fraction, while 3.00 forgets to subtract 1 from N and n.",
        hints: [
          "First find {{N = 5 + 5 + 5 = 15}} and compute {{N(N - 1) = 15 * 14}}.",
          "Compute {{n(n - 1) = 5 * 4}} for each of the three species, sum them, and divide {{210}} by that sum.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "conservation-biodiversity",
        question:
          "Woodland X contains four tree species with counts 25, 25, 25, and 25. Woodland Y contains the same four species with counts 91, 3, 3, and 3. How do the two woodlands compare?",
        options: [
          "Both have identical species richness, but Woodland X has higher evenness and a higher Simpson's D.",
          "Woodland Y has higher species richness and therefore achieves a higher Simpson's D than Woodland X.",
          "Both woodlands have identical Simpson's D because both contain 100 trees across four species.",
          "Woodland X has lower genetic stability because no single dominant species controls the canopy.",
        ],
        answerIndex: 0,
        explanation:
          "Both woodlands have species richness {{S = 4}} and sample size {{N = 100}}, but Woodland X distributes individuals equally across all four species (high evenness, {{D = 9900 / 2400 = 4.13}}), whereas Woodland Y is heavily dominated by one species (low evenness, {{D = 9900 / 8208 = 1.21}}).",
        hints: [
          "Check both components of species diversity: species richness (number of species) and evenness (balance of counts).",
          "Simpson's reciprocal index D rewards higher evenness as well as higher richness.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "conservation-biodiversity",
        question:
          "The Svalbard Global Seed Vault stores duplicate seeds from over one million crop varieties inside frozen Arctic vaults at −18 °C. Which conservation strategy does this represent?",
        options: [
          "In-situ conservation through natural ecosystem rewilding",
          "Ex-situ conservation preserving plant genetic diversity off-site",
          "In-situ conservation via marine and terrestrial habitat corridors",
          "Active habitat restoration eliminating invasive weed species",
        ],
        answerIndex: 1,
        explanation:
          "Storing seeds in cold vaults outside their native ecosystems is **ex-situ conservation**, safeguarding plant genetic diversity as an off-site insurance backup against habitat destruction, conflict, or climate disasters.",
        hints: [
          "Recall the Latin roots: *in-situ* = in its natural place; *ex-situ* = outside its natural place.",
          "Seeds stored inside an Arctic freezer vault are removed from their natural habitats.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "State",
        guideRef: "classification-cladistics-hl",
        question:
          "Which molecular evidence did Carl Woese primarily analyse to replace the five-kingdom system with the three domains Bacteria, Archaea, and Eukarya?",
        options: [
          "Base sequences of ribosomal RNA (16S and 18S rRNA) conserved across all cellular life",
          "Amino acid sequences of mammalian haemoglobin and collagen across vertebrate classes",
          "Total haploid genome sizes measured in gigabase pairs across multicellular plants",
          "Stained metaphase karyogram banding patterns prepared from bacterial cell cultures",
        ],
        answerIndex: 0,
        explanation:
          "Every cellular organism produces ribosomes, and rRNA genes mutate very slowly, preserving ancient evolutionary divergences. Comparing 16S/18S rRNA sequences revealed that Archaea form a distinct domain separate from Bacteria and closer to Eukarya.",
        hints: [
          "The molecule must exist in ALL cellular life — both prokaryotes and eukaryotes — and evolve slowly.",
          "Think of the nucleic acid inside ribosomes (16S / 18S).",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "classification-cladistics-hl",
        question: "In cladistics, which criterion strictly defines a valid clade (monophyletic group)?",
        options: [
          "Any group of organisms sharing an identical trophic level within the same biome",
          "A collection of species possessing similar analogous adaptations for locomotion",
          "An ancestral species together with its most morphologically similar living descendants only",
          "A single common ancestral species together with all of its evolutionary descendants",
        ],
        answerIndex: 3,
        explanation:
          "A clade must be strictly **monophyletic**: one ancestral species plus **every** descendant lineage (passing the 'one-snip test' on a cladogram). Omitting any descendant creates an invalid paraphyletic group, and grouping by analogous traits creates a polyphyletic group.",
        hints: [
          "Apply the 'one-snip rule' on a branching cladogram.",
          "A true clade can never leave out one of the ancestor's descendant branches.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "diversity-genomes-karyograms",
        question:
          "Chimpanzees have {{2n = 48}} chromosomes whereas humans have {{2n = 46}}. Which cytogenetic evidence confirms that human chromosome 2 formed by end-to-end fusion of two ancestral ape chromosomes?",
        options: [
          "Human chromosome 2 lacks telomeres at both ends and carries no protein-coding genes.",
          "Human chromosome 2 replicates twice per cell cycle using prokaryotic circular origins.",
          "Human chromosome 2 contains vestigial internal telomere repeats and a second inactive centromere.",
          "Human chromosome 2 is identical in length to chimpanzee chromosome 21 and lacks G-bands.",
        ],
        answerIndex: 2,
        explanation:
          "Head-to-head telomeric fusion of ancestral ape chromosomes 2A and 2B left unmistakable molecular scars inside human chromosome 2: internal telomere repeats (TTAGGG) at band 2q13, a second vestigial inactivated centromere, and matching G-banding patterns along both arms.",
        hints: [
          "Picture gluing two linear chromosomes together end-to-end: what normally sits at the ends and middle of each chromosome?",
          "Joining two chromosomes puts telomere DNA in the interior and creates two centromere regions (one inactivated).",
        ],
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 2 — Data, Cladograms & Speciation (SL & HL)
  // =========================================================================
  {
    id: "a3-a4-unity-organisms-ecosystems-m2",
    title: "MCQ Paper 2 — Keys, Cladograms, Molecular Clocks & Polyploidy",
    questions: [
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "diversity-genomes-karyograms",
        question:
          "Use the dichotomous key to identify a plant specimen with parallel leaf veins, floral parts in multiples of three, and a bulb underground:\n\n1a. Net-like branching leaf veins → go to 2\n1b. Parallel leaf veins → go to 3\n2a. Woody stem → *Quercus*\n2b. Herbaceous stem → *Ranunculus*\n3a. Underground bulb present → *Lilium*\n3b. Underground fibrous rhizome, no bulb → *Zingiber*",
        options: [
          "*Quercus*",
          "*Lilium*",
          "*Ranunculus*",
          "*Zingiber*",
        ],
        answerIndex: 1,
        explanation:
          "Parallel leaf veins lead from 1b directly to couplet 3. The presence of an underground bulb matches 3a, identifying the genus as *Lilium*. Checking couplet 2 is an error because net-like leaf veins were absent.",
        hints: [
          "Start at couplet 1: does the specimen have net-like veins or parallel veins?",
          "Follow 1b to couplet 3, then check whether an underground bulb is present.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "diversity-genomes-karyograms",
        question:
          "Approximate haploid genome sizes are: *E. coli* 0.0046 Gbp, rice (*Oryza sativa*) 0.43 Gbp, humans (*Homo sapiens*) 3.1 Gbp, and the Japanese plant *Paris japonica* 149 Gbp. Which conclusion is supported by these data?",
        options: [
          "Multicellular animals always possess larger genomes than all flowering plant species.",
          "Humans carry nearly 50 times more genes than *Paris japonica* despite smaller DNA mass.",
          "Prokaryotes and eukaryotes maintain nearly identical genome sizes per chromosome.",
          "Total eukaryotic genome size does not correlate directly with organismal complexity.",
        ],
        answerIndex: 3,
        explanation:
          "The flowering plant *Paris japonica* has a genome almost 50 times larger than the human genome, demonstrating that total DNA content (much of which is repetitive non-coding DNA and polyploid copies) does not scale linearly with organismal complexity.",
        hints: [
          "Compare *Homo sapiens* (3.1 Gbp) with *Paris japonica* (149 Gbp).",
          "Does having almost 50 times more DNA make a canopy plant 50 times more complex than a human?",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "diversity-genomes-karyograms",
        question:
          "Conservation ecologists filter two litres of stream water in a rainforest reserve, extract shed trace DNA, and sequence a short mitochondrial marker to confirm whether an elusive nocturnal salamander lives upstream. Which technique are they using?",
        options: [
          "Environmental DNA (eDNA) sampling combined with DNA barcoding",
          "Metaphase karyogram staining combined with gel chromosomal fusion",
          "Morphological dichotomous keying combined with captive breeding",
          "Artificial selection combined with whole-organism radiography",
        ],
        answerIndex: 0,
        explanation:
          "Collecting shed trace DNA directly from water, soil, or air without capturing organisms is **environmental DNA (eDNA)** sampling; matching its short conserved mitochondrial marker (such as *COI* or 12S rRNA) against a reference library is **DNA barcoding**.",
        hints: [
          "Notice that no animal was captured — DNA was filtered straight from stream water.",
          "Shed DNA in water/soil is eDNA, and short marker-gene matching is DNA barcoding.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "classification-cladistics-hl",
        question: "Which pair of biochemical features accurately distinguishes domain Archaea from domain Bacteria?",
        options: [
          "Archaea possess 80S cytoplasmic ribosomes and double-membrane nuclei; Bacteria possess 70S ribosomes.",
          "Archaea build cell walls from peptidoglycan and ester-linked lipids; Bacteria lack peptidoglycan.",
          "Archaea lack peptidoglycan in cell walls and have ether-linked branched membrane lipids.",
          "Archaea lack ribosomes entirely and replicate genomes solely inside eukaryotic host cells.",
        ],
        answerIndex: 2,
        explanation:
          "Both Bacteria and Archaea are prokaryotes with 70S ribosomes and no nucleus, but Archaea **lack peptidoglycan** in their cell walls and have **ether-linked branched membrane lipids** (helping many extremophiles survive extreme heat or acidity), whereas Bacteria have peptidoglycan and ester-linked unbranched lipids.",
        hints: [
          "Remember both Bacteria and Archaea are prokaryotes (no nucleus, 70S ribosomes).",
          "Check cell wall peptidoglycan and ester vs ether membrane lipid linkages.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "classification-cladistics-hl",
        diagram: `<svg viewBox="0 0 360 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rooted cladogram with four taxa W, X, Y, and Z showing nodes 1, 2, and 3">
  <rect x="0" y="0" width="360" height="175" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4"/>
  <line x1="62" y1="158" x2="62" y2="138" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="62" y1="138" x2="48" y2="42" stroke="#475569" stroke-width="2"/>
  <line x1="62" y1="138" x2="152" y2="108" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="152" y1="108" x2="138" y2="42" stroke="#0f172a" stroke-width="2"/>
  <line x1="152" y1="108" x2="244" y2="78" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="244" y1="78" x2="220" y2="42" stroke="#0f172a" stroke-width="2"/>
  <line x1="244" y1="78" x2="296" y2="42" stroke="#0f172a" stroke-width="2"/>
  <circle cx="62" cy="138" r="4.5" fill="#2563eb"/>
  <circle cx="152" cy="108" r="4.5" fill="#2563eb"/>
  <circle cx="244" cy="78" r="4.5" fill="#059669"/>
  <text x="80" y="144" font-size="10.5" font-weight="700" fill="#1e3a8a">Node 1</text>
  <text x="172" y="114" font-size="10.5" font-weight="700" fill="#1e3a8a">Node 2</text>
  <text x="264" y="84" font-size="10.5" font-weight="700" fill="#047857">Node 3</text>
  <text x="48" y="32" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Taxon W</text>
  <text x="138" y="32" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Taxon X</text>
  <text x="220" y="32" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Taxon Y</text>
  <text x="296" y="32" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Taxon Z</text>
</svg>`,
        question: "Which statement accurately interprets the rooted cladogram shown?",
        options: [
          "Taxon X is more closely related to Taxon Y than to Taxon Z because X and Y sit adjacent.",
          "Taxon X is equally closely related to Taxon Y and Taxon Z via their shared ancestor at Node 2.",
          "Rotating branches Y and Z around Node 3 changes Taxon Y into the outgroup of the tree.",
          "Grouping Taxon W and Taxon X without Y and Z forms a valid monophyletic clade.",
        ],
        answerIndex: 1,
        explanation:
          "Tracing down from X and Y reaches Node 2, and tracing down from X and Z ALSO reaches Node 2 — so X shares the exact same most recent common ancestor with both Y and Z! Tip proximity along the top edge never determines relatedness because branches rotate freely around Node 3.",
        hints: [
          "Never measure relatedness by horizontal spacing along the top — trace down to the most recent shared node.",
          "Find the shared node for Taxon X and Taxon Y, then compare it with the shared node for Taxon X and Taxon Z.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "classification-cladistics-hl",
        question:
          "Fossil dating shows that Species P and Species Q diverged 30 million years ago (Ma) and differ at 18 nucleotide sites in a conserved gene. Species R and Species S differ at 27 nucleotide sites in the same gene. Assuming a constant molecular clock, when did R and S diverge?",
        options: [
          "45 Ma ago",
          "20 Ma ago",
          "39 Ma ago",
          "54 Ma ago",
        ],
        answerIndex: 0,
        explanation:
          "First compute the pairwise substitution rate: {{r = 18 / 30 = 0.60}} substitutions per Ma. Next divide the 27 differences between R and S by this rate: {{t = 27 / 0.60 = 45}} Ma. Notice that 27 is {{1.5 * 18}}, so the divergence time is {{1.5 * 30 = 45}} Ma.",
        hints: [
          "Calculate the pairwise clock rate from the calibration pair: {{r = 18 / 30}} differences per Ma.",
          "Divide 27 differences by {{0.60}} differences per Ma (or scale {{30 * (27 / 18)}}).",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "classification-cladistics-hl",
        question: "Why did taxonomists reclassify over 80% of genera originally placed in the figwort family (*Scrophulariaceae*)?",
        options: [
          "Fossil pollen showed that all former figwort species evolved simultaneously from one hybrid plant.",
          "Karyogram staining proved that foxgloves and snapdragons lacked homologous chromosome pairs.",
          "Field pollination surveys showed that figworts reproduced exclusively by asexual vegetative runners.",
          "Chloroplast DNA sequences revealed that shared flower shapes were analogous rather than homologous.",
        ],
        answerIndex: 3,
        explanation:
          "Sequencing conserved chloroplast genes revealed that traditional *Scrophulariaceae* was polyphyletic: similar tubular flowers had evolved convergently under shared pollinator pressures (analogous traits). Reassigning genera such as *Digitalis* and *Antirrhinum* restored true monophyletic families.",
        hints: [
          "Traditional classification grouped figworts by flower shape; what molecular data tested that grouping?",
          "Convergent evolution produces analogous structures that mislead morphology-only classification.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "evolution-speciation",
        question:
          "Wild mustard (*Brassica oleracea*) has been selectively bred by farmers into broccoli, cabbage, kale, cauliflower, and Brussels sprouts. How does this provide evidence for evolution?",
        options: [
          "It proves that environmental nutrients directly rewrite plant DNA to match farmer preferences.",
          "It demonstrates that selection on heritable variation can cause major phenotypic change over generations.",
          "It confirms that each vegetable arose from an independent prokaryotic endosymbiosis event.",
          "It shows that reproductive isolation is impossible unless two continents drift apart geographically.",
        ],
        answerIndex: 1,
        explanation:
          "Artificial selection (selective breeding) chooses individuals with desirable heritable traits to breed across successive generations, proving that selection acting on heritable genetic variation can reshape anatomy dramatically within relatively short timescales.",
        hints: [
          "Compare what farmers do in artificial selection with what nature does in natural selection.",
          "Both act on existing heritable variation across generations to shift allele frequencies and phenotypes.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "evolution-speciation",
        question:
          "Two palm species on tiny Lord Howe Island (*Howea forsteriana* and *Howea belmoreana*) grow within wind-pollination distance of each other, yet diverged because differing soil pH shifted their flowering seasons six weeks apart. Which isolating mechanism drove this sympatric speciation?",
        options: [
          "Geographical isolation by a physical ocean barrier",
          "Mechanical incompatibility of insect pollinators",
          "Temporal isolation preventing overlapping reproduction",
          "Hybrid inviability caused by viral gene transfer",
        ],
        answerIndex: 2,
        explanation:
          "Because the palms share the same island within pollen-dispersal range (sympatric) yet release pollen and flower in non-overlapping seasons, **temporal reproductive isolation** halted gene flow between the two populations.",
        hints: [
          "Notice the key cue: 'flowering seasons six weeks apart'.",
          "Differences in the timing of mating or flowering constitute temporal isolation.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "evolution-speciation",
        question:
          "Two diploid wild grass species (both {{2n = 14}}) cross-pollinate to form a sterile F₁ hybrid. Spontaneous genome doubling (allopolyploidy) then restores fertility. What is the somatic chromosome number of the new fertile allopolyploid species?",
        options: [
          "28 chromosomes",
          "14 chromosomes",
          "21 chromosomes",
          "42 chromosomes",
        ],
        answerIndex: 0,
        explanation:
          "Each diploid parent contributes a haploid gamete of {{n = 7}} chromosomes, giving a sterile F₁ hybrid with {{7 + 7 = 14}} unpaired chromosomes. Spontaneous genome doubling multiplies this by 2 to produce a fertile allotetraploid with {{2 * 14 = 28}} chromosomes (14 homologous pairs).",
        hints: [
          "Find the haploid gamete count from each {{2n = 14}} parent and add them to get the F₁ hybrid count.",
          "Genome doubling multiplies the F₁ hybrid chromosome count by 2.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Outline",
        guideRef: "evolution-speciation",
        question: "Which statement best defines adaptive radiation, as illustrated by Darwin's finches on the Galápagos Islands?",
        options: [
          "Unrelated bird families independently evolving identical webbed feet on distant continents",
          "Gradual reduction of genetic diversity within a single uniform island habitat over time",
          "Exchange of beak-shape genes between mainland sparrows and finches via retroviruses",
          "Rapid diversification of one ancestral lineage into multiple species occupying distinct ecological niches",
        ],
        answerIndex: 3,
        explanation:
          "**Adaptive radiation** occurs when a single ancestral species rapidly diversifies into many descendant species adapted to exploit different unoccupied niches — such as Galápagos finches evolving crushing, probing, and insect-catching beaks.",
        hints: [
          "Think of one ancestral finch arriving on volcanic islands with many empty feeding niches.",
          "Adaptive radiation is divergent evolution multiplied rapidly across diverse niches.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "conservation-biodiversity",
        question:
          "A mangrove mudflat quadrat yields 8 fiddler crabs, 6 mudskippers, 4 mangrove snails, and 2 hermit crabs. Calculate Simpson's reciprocal diversity index {{D}}.",
        options: [
          "0.26",
          "3.33",
          "3.80",
          "4.00",
        ],
        answerIndex: 2,
        explanation:
          "First find {{N = 8 + 6 + 4 + 2 = 20}}, so {{N(N - 1) = 20 * 19 = 380}}. Next compute {{Σ n(n - 1) = (8 * 7) + (6 * 5) + (4 * 3) + (2 * 1) = 56 + 30 + 12 + 2 = 100}}. Dividing gives {{D = 380 / 100 = 3.80}}. Getting 3.33 omits the {{− 1}} terms, while 0.26 inverts the ratio.",
        hints: [
          "Sum all counts to find {{N = 20}}, then calculate {{N(N - 1) = 20 * 19 = 380}}.",
          "Compute {{n(n - 1)}} for 8, 6, 4, and 2 separately, add those four products, and divide 380 by the sum.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "conservation-biodiversity",
        question:
          "According to global IPBES and IUCN Red List assessments, what is currently the single largest direct anthropogenic driver of terrestrial biodiversity loss worldwide?",
        options: [
          "Natural asteroid impacts and volcanic winter episodes",
          "Habitat destruction and fragmentation from land-use change",
          "Over-collection of plant specimens for botanical seed banks",
          "Natural seasonal migration of temperate bird populations",
        ],
        answerIndex: 1,
        explanation:
          "While invasive species, overexploitation, pollution, and climate change all severely threaten ecosystems, **habitat loss and fragmentation** (driven primarily by agricultural expansion, logging, and urbanisation) remains the #1 direct cause of terrestrial biodiversity decline.",
        hints: [
          "Recall the first letter of the HIPPO biodiversity-threats mnemonic.",
          "Deforestation, agricultural conversion, and urban sprawl directly remove living space for species.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "conservation-biodiversity",
        question: "Why does the EDGE conservation framework assign unusually high priority to the Sunda pangolin (*Manis javanica*)?",
        options: [
          "It sits on an isolated evolutionary branch with few close relatives and faces critical extinction risk.",
          "It reproduces faster than any other mammal and serves as an indicator of polluted urban streams.",
          "It is closely related to dozens of common rodents and thrives in cleared monoculture plantations.",
          "It is already extinct in the wild and exists solely as cryopreserved embryos in Arctic seed banks.",
        ],
        answerIndex: 0,
        explanation:
          "**EDGE** stands for **E**volutionarily **D**istinct and **G**lobally **E**ndangered. Pangolins represent the sole living family in order Pholidota (very few close relatives) and *Manis javanica* is Critically Endangered — losing it would erase millions of years of unique evolutionary history.",
        hints: [
          "Unpack the acronym E-D-G-E: Evolutionarily Distinct and Globally Endangered.",
          "Both phylogenetic uniqueness (isolated branch) and high IUCN threat status are required.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "conservation-biodiversity",
        question:
          "How does building a vegetated wildlife corridor (such as Singapore's Eco-Link@BKE) between two isolated forest reserves strengthen in-situ conservation?",
        options: [
          "It halts all random mutation so endangered species maintain fixed unchanging allele frequencies.",
          "It excludes native predators completely so herbivore populations can grow without density limits.",
          "It restores dispersal and gene flow between fragments, lowering inbreeding and maintaining genetic diversity.",
          "It converts both tropical forest fragments into controlled ex-situ enclosures managed by zookeepers.",
        ],
        answerIndex: 2,
        explanation:
          "Small fragmented reserves trap small isolated populations prone to genetic drift and inbreeding depression. Wildlife corridors allow animals and pollen/seeds to disperse between reserves, restoring **gene flow** and boosting effective population size and **genetic diversity**.",
        hints: [
          "Think about the genetic consequence of splitting one continuous forest into two disconnected islands.",
          "Reconnecting fragments allows individuals to move and interbreed across both patches.",
        ],
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 3 — IB Paper 1A Mastery & HL Synthesis
  // =========================================================================
  {
    id: "a3-a4-unity-organisms-ecosystems-m3",
    title: "MCQ Set 3 — IB Paper 1A Mastery & HL Synthesis",
    questions: [
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "diversity-genomes-karyograms",
        question: "Which statement accurately captures both the unity and the diversity of genomes across the human species?",
        options: [
          "Every human inherits unique genes at different loci, while non-coding DNA stays 100% identical.",
          "Humans share identical single nucleotide polymorphisms (SNPs), but carry different numbers of autosome pairs.",
          "Each human ethnic group possesses a distinct set of protein-coding genes absent from other populations.",
          "All humans share the same genes at identical chromosomal loci, while differing in alleles and SNPs.",
        ],
        answerIndex: 3,
        explanation:
          "Genomic **unity** within a species means all individuals share the same complement of genes positioned at the same loci on homologous chromosomes. Genomic **diversity** arises from different **alleles** and millions of **single nucleotide polymorphisms (SNPs)**.",
        hints: [
          "Separate gene *loci* (which genes are where) from *alleles/SNPs* (sequence variants at those sites).",
          "Unity = same genes at same loci; diversity = different alleles and SNPs.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "diversity-genomes-karyograms",
        question:
          "Why do cytogeneticists treat dividing fetal cells with a spindle inhibitor to arrest them in **metaphase** rather than interphase before preparing a karyogram?",
        options: [
          "Homologous chromosomes only replicate their DNA during metaphase, making diploid counts accurate.",
          "Chromosomes are maximally condensed in metaphase, allowing clear pairing by size, centromere, and G-bands.",
          "Nuclear membranes thicken during metaphase, protecting fragile sex chromosomes from staining enzymes.",
          "Crossing over between homologous pairs occurs in mitotic metaphase, revealing trisomy 21 clearly.",
        ],
        answerIndex: 1,
        explanation:
          "During interphase, DNA is decondensed chromatin invisible as discrete rods under a light microscope. Arresting cells in **metaphase** captures chromosomes at peak supercoiling so each chromosome's length, centromere position, and G-banding pattern can be matched accurately.",
        hints: [
          "Recall what chromatin looks like during interphase versus metaphase of mitosis.",
          "You can only measure chromosome length and G-banding when chromosomes are tightly condensed.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "diversity-genomes-karyograms",
        question:
          "What is a major scientific advantage of sequencing the mitochondrial *COI* DNA barcode over relying solely on a morphological dichotomous key?",
        options: [
          "It requires no laboratory equipment and works purely from low-resolution field photographs.",
          "It sequences the entire 3 Gbp nuclear genome of every animal specimen in under five minutes.",
          "It reliably distinguishes cryptic species and identifies damaged tissues or larval life stages.",
          "It eliminates the need for reference sequence databases because species names are encoded directly in *COI*.",
        ],
        answerIndex: 2,
        explanation:
          "Dichotomous keys fail when specimens are damaged, juvenile larvae, or **cryptic species** (genetically distinct yet morphologically indistinguishable). Matching a short standardised *COI* barcode against curated reference libraries resolves all three cases reliably.",
        hints: [
          "Consider what happens when a field ecologist finds only a fish fin clip, a caterpillar, or two lookalike mosquito species.",
          "A short standardised DNA marker identifies any life stage or tissue fragment against reference libraries.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "classification-cladistics-hl",
        question:
          "On a vertebrate cladogram, crocodiles share a more recent common ancestor with birds than with lizards or turtles. Why does the traditional class 'Reptilia' (lizards, turtles, and crocodiles, excluding birds) fail to qualify as a clade?",
        options: [
          "It is paraphyletic because it excludes birds, which descended from the same common ancestor.",
          "It is monophyletic because all cold-blooded scaly vertebrates share an identical metabolic rate.",
          "It is polyphyletic because crocodiles and lizards evolved amniotic eggs independently without ancestry.",
          "It violates parsimony because birds lost four-chambered hearts after diverging from amphibians.",
        ],
        answerIndex: 0,
        explanation:
          "Any single ancestor of lizards, turtles, and crocodiles is also an ancestor of birds. Excluding birds leaves a **paraphyletic** group rather than a complete monophyletic clade — which is why modern cladistics places birds inside Dinosauria/Sauropsida.",
        hints: [
          "Apply the clade definition: one ancestral species + ALL of its descendants.",
          "If birds descend from the crocodile–lizard common ancestor, what is missing when birds are excluded?",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "classification-cladistics-hl",
        question:
          "Which statement accurately represents the evolutionary branching order of the Three Domains inferred from rRNA and core genetic machinery?",
        options: [
          "Bacteria and Archaea form a monophyletic prokaryote clade sister to domain Eukarya.",
          "Bacteria and Eukarya diverged last after Archaea split away as the earliest outgroup.",
          "All three domains arose independently from separate abiotic origins without a common ancestor.",
          "Archaea and Eukarya share a more recent common ancestor with each other than with Bacteria.",
        ],
        answerIndex: 3,
        explanation:
          "Woese's rRNA phylogeny and shared transcriptional machinery (RNA polymerase structure, histones, introns) demonstrate that **Bacteria** branched off first from LUCA, and **Archaea + Eukarya** form sister lineages sharing a more recent common ancestor.",
        hints: [
          "Check whether 'prokaryotes' (Bacteria + Archaea) is a true clade on the three-domain tree.",
          "Archaea share histones and transcription similarities with Eukarya, placing Archaea closer to Eukarya than to Bacteria.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "classification-cladistics-hl",
        question:
          "A conserved vertebrate protein accumulates neutral amino-acid substitutions at a constant rate of **0.25 substitutions per lineage per million years**. Two mammal species differ at 15 amino-acid positions in this protein. Estimate how long ago they diverged.",
        options: [
          "15 million years ago",
          "30 million years ago",
          "60 million years ago",
          "7.5 million years ago",
        ],
        answerIndex: 1,
        explanation:
          "Because mutations accumulate independently along **both** diverging lineages after the split, the pairwise divergence rate is {{2 * 0.25 = 0.50}} substitutions per Ma. Therefore {{t = 15 / 0.50 = 30}} Ma. Dividing directly by 0.25 (60 Ma) forgets that both lineages mutate simultaneously.",
        hints: [
          "Read the wording carefully: the rate is given **per lineage** per million years.",
          "Two diverging species evolve along two separate branches simultaneously, so pairwise divergence rate = {{2 * 0.25 = 0.50}} per Ma.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "classification-cladistics-hl",
        question: "Why must molecular-clock divergence estimates be treated as approximations and calibrated using dated fossils?",
        options: [
          "Neutral DNA mutations stop occurring completely whenever two populations become isolated.",
          "Radiometric fossil dates are identical across all rock strata and never require stratigraphic testing.",
          "Mutation rates vary across genes, generation times, and lineages experiencing different selection.",
          "Ribosomal RNA sequences undergo rapid horizontal shuffling between animals during every generation.",
        ],
        answerIndex: 2,
        explanation:
          "Molecular clocks are not perfectly metronomic: substitution rates differ between fast-evolving non-coding regions and conserved genes, and vary with generation time, metabolic rate, DNA repair fidelity, and natural selection — so fossil calibration points anchor the timescale.",
        hints: [
          "Ask whether every gene in every organism mutates at the exact same fixed rate forever.",
          "Think about differences in generation time (mice vs elephants) and selective constraints on different genes.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "evolution-speciation",
        question:
          "How should an evolutionary biologist classify (i) insect wings vs bird wings, and (ii) the forelimb skeleton of a bird vs the forelimb skeleton of a bat?",
        options: [
          "(i) Analogous structures from convergent evolution; (ii) homologous forelimbs from a tetrapod ancestor",
          "(i) Homologous structures from a winged ancestor; (ii) analogous bones from convergent evolution",
          "(i) Both pairs are purely homologous because all three animals evolved powered flight together",
          "(i) Both pairs are purely analogous because birds, bats, and insects share no vertebrate ancestry",
        ],
        answerIndex: 0,
        explanation:
          "Insect wings (chitinous cuticle outgrowths) and bird wings share no winged common ancestor and are strictly **analogous**. In contrast, bird and bat forelimb skeletons both derive from the ancestral tetrapod **pentadactyl limb** (homologous as forelimbs, even though powered flight evolved convergently).",
        hints: [
          "Compare insect chitin wings with vertebrate bony forelimbs first.",
          "Both birds and bats are tetrapod vertebrates sharing the ancestral pentadactyl forelimb skeleton.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "evolution-speciation",
        question:
          "In an African crater lake with no physical barriers, two colour morphs of cichlid fish occupy the same shallow rocky zone, but females of each morph only mate with males displaying their own colour and courtship display. What process is occurring?",
        options: [
          "Allopatric speciation driven by tectonic uplift separating two isolated watersheds",
          "Sympatric speciation driven by behavioural isolation restricting gene flow within one habitat",
          "Convergent evolution fusing two previously separate fish families into a single gene pool",
          "Artificial selection eliminating sexual dimorphism across both cichlid subpopulations",
        ],
        answerIndex: 1,
        explanation:
          "Because both morphs inhabit the same lake without any geographical barrier, speciation is **sympatric**. Divergent mate choice based on courtship display and colouration creates **behavioural reproductive isolation**, halting gene flow between the morphs.",
        hints: [
          "Check the setting first: same crater lake with no physical barriers → sympatric, not allopatric.",
          "Mate preference for specific displays/colouration is behavioural isolation.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "evolution-speciation",
        question:
          "Modern bread wheat (*Triticum aestivum*) is a fertile allohexaploid ({{6n = 42}}) formed by sequential hybridisation and genome doubling of three diploid wild grass species ({{2n = 14}} each). How many chromosomes are in a bread-wheat pollen grain, and why is it fertile?",
        options: [
          "7 chromosomes; each chromosome pairs simultaneously with five identical homologues during meiosis.",
          "14 chromosomes; non-disjunction discards one full ancestral genome during every pollen mitosis.",
          "42 chromosomes; wheat reproduces solely by asexual cloning and completely bypasses meiosis.",
          "21 chromosomes; each of the three ancestral genomes is doubled, providing 21 homologous pairs.",
        ],
        answerIndex: 3,
        explanation:
          "Meiosis halves the somatic count of {{6n = 42}} to produce gametes (pollen grains and ovules) with {{3n = 21}} chromosomes. Because each ancestral grass genome ({{A, B, D}} of 7 chromosomes each) is present in duplicate ({{AABBDD}}), chromosomes form 21 matching homologous bivalents in meiosis I, ensuring full fertility.",
        hints: [
          "Meiosis always halves the somatic chromosome count: what is half of 42?",
          "Fertility requires every chromosome to have a homologous partner (21 matching pairs from AABBDD).",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "evolution-speciation",
        question: "Why does polyploidy generate new species far more commonly in flowering plants than in mammals?",
        options: [
          "Flowering plants lack spindle fibres during meiosis and double chromosomes every season.",
          "Mammalian gametes carry no homologous chromosomes and cannot undergo non-disjunction.",
          "Plants can self-fertilise or propagate vegetatively and tolerate whole-genome doubling.",
          "Mammals inhabit aquatic ecosystems where extra chromosomes dissolve rapidly in water.",
        ],
        answerIndex: 2,
        explanation:
          "A newly formed tetraploid plant can often **self-pollinate** or spread vegetatively to establish a fertile breeding population without finding a second rare polyploid mate. Mammals, by contrast, require sexual mates and rely on delicate X/Y sex-chromosome dosage regulation that breaks down under polyploidy.",
        hints: [
          "Imagine a single newly doubled 4n organism appearing in a 2n population: how does it reproduce?",
          "Plants frequently self-pollinate or clone vegetatively and lack strict mammalian X/Y dosage lethality.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "conservation-biodiversity",
        question:
          "Students sample macroinvertebrates upstream and downstream of a farm discharge pipe ({{N = 24}} at each site). Upstream counts are 6, 6, 6, and 6 across four species; downstream counts are 21, 1, 1, and 1. What are Simpson's reciprocal diversity index values ({{D}}) upstream and downstream to 2 d.p.?",
        options: [
          "Upstream 4.00; Downstream 1.00",
          "Upstream 4.60; Downstream 1.31",
          "Upstream 0.22; Downstream 0.76",
          "Upstream 3.80; Downstream 2.15",
        ],
        answerIndex: 1,
        explanation:
          "At both sites, {{N = 24}}, so {{N(N - 1) = 24 * 23 = 552}}. Upstream: {{Σ n(n - 1) = 4 * (6 * 5) = 120}}, giving {{D = 552 / 120 = 4.60}}. Downstream: {{Σ n(n - 1) = (21 * 20) + 0 + 0 + 0 = 420}}, giving {{D = 552 / 420 = 1.314... ≈ 1.31}}. Notice how organic pollution lets one tolerant species dominate, collapsing {{D}}.",
        hints: [
          "Compute {{N(N - 1) = 24 * 23 = 552}} first — it is the numerator for BOTH sites.",
          "For species with {{n = 1}}, notice {{1 * (1 - 1) = 0}}! So downstream {{Σ n(n - 1) = 21 * 20 = 420}}.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "conservation-biodiversity",
        question:
          "Why can ex-situ seed banks like Svalbard not completely replace in-situ rainforest reserves for conserving Southeast Asian dipterocarp trees?",
        options: [
          "Many tropical rainforest trees produce recalcitrant seeds that die when dried and frozen.",
          "Dipterocarp trees reproduce solely via haploid fungal spores that cannot be stored in vaults.",
          "Frozen storage increases chromosome fusion rates and transforms dipterocarps into invasive weeds.",
          "Seed banks cannot legally store plant species that have diploid numbers above 24.",
        ],
        answerIndex: 0,
        explanation:
          "Unlike dry-tolerant 'orthodox' crop seeds (wheat, rice, beans), many equatorial rainforest trees — including dipterocarps, rubber, and mangoes — produce **recalcitrant seeds** that lose viability rapidly if desiccated or frozen at −18 °C, making **in-situ primary forest conservation** irreplaceable.",
        hints: [
          "Think about how seed banks store seeds: severe drying followed by freezing at −18 °C.",
          "Can wet tropical rainforest tree seeds survive desiccation and deep freezing?",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "conservation-biodiversity",
        question:
          "Why do zoo captive-breeding programmes carefully exchange individuals between zoos using international studbooks rather than breeding only a few local animals repeatedly?",
        options: [
          "To trigger spontaneous polyploidy so offspring double their body mass within one generation",
          "To prevent natural selection from acting once animals are released into wild protected reserves",
          "To force convergent evolution between unrelated endangered mammal families kept in captivity",
          "To minimise inbreeding depression and retain high genetic diversity for future disease resilience",
        ],
        answerIndex: 3,
        explanation:
          "Repeated mating among closely related individuals in small captive groups increases homozygosity for harmful recessive alleles (**inbreeding depression**) and erodes **genetic diversity**, leaving reintroduced populations vulnerable to pathogens and environmental shifts.",
        hints: [
          "What happens genetically when a tiny founder population breeds only with close relatives?",
          "Studbooks pair unrelated mates to keep allele diversity high and reduce inbreeding depression.",
        ],
      },
      {
        id: "a3-a4-unity-organisms-ecosystems-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "conservation-biodiversity",
        question:
          "How does the present-day anthropogenic biodiversity crisis compare with long-term patterns observed in the geological fossil record?",
        options: [
          "Current extinction rates are 100–1,000× background rates, far outpacing natural speciation recovery.",
          "Background biodiversity has declined steadily since the Cambrian, so modern extinctions are average.",
          "Previous mass extinctions were all caused by human overexploitation before flowering plants evolved.",
          "Natural speciation now replaces extinct vertebrate species within two to five human generations.",
        ],
        answerIndex: 0,
        explanation:
          "Over ~540 Ma, global biodiversity generally rose despite five natural mass extinctions, whose recoveries took millions of years. Today's human-driven extinction rate is estimated at **100–1,000 times** natural background rates — vastly faster than evolution can replace lost species.",
        hints: [
          "Compare today's extinction pace (centuries) with the geological timescale of speciation (hundreds of thousands to millions of years).",
          "IPBES estimates modern extinction rates at 100–1,000× background levels.",
        ],
      },
    ],
  },
];
