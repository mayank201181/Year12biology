import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "a3-a4-unity-organisms-ecosystems",
  title: "Theme A (3–4): Unity & Diversity — Organisms & Ecosystems",
  strand: "Theme A: Unity & Diversity",
  icon: "🌿",
  level: "SL",
  summary:
    "How shared genomes, homologous anatomy, and common ancestry unite all living organisms — and how mutation, speciation, cladistics [HL], and conservation shape biodiversity across ecosystems.",
  intro:
    "Look closely at a human hand, a bat's wing, and a dolphin's flipper: three wildly different tools built from the exact same five-digit skeleton. Look inside their cells and you find homologous chromosomes, shared genes, and molecular histories written in DNA. In **Theme A (3–4)** of IB Biology (FA2025), you move from the organism scale up to whole ecosystems: defining species and reading karyograms (**A3.1**), reconstructing evolutionary trees with cladistics and molecular clocks (**A3.2 [HL]**), explaining how isolation and polyploidy forge new species (**A4.1**), and measuring and protecting global biodiversity against the sixth mass extinction (**A4.2**).",
  guide: [
    // =========================================================================
    // SECTION 1: A3.1 (SL + HL extensions)
    // =========================================================================
    {
      id: "diversity-genomes-karyograms",
      heading: "A3.1 Variation, Species Concept, Genomes & Dichotomous Keys",
      level: "SL",
      discovery: {
        problem:
          "A domestic horse (*Equus ferus caballus*, {{2n = 64}}) and a donkey (*Equus africanus*, {{2n = 62}}) can mate to produce a strong, healthy mule. Yet mules are almost always sterile. How many chromosomes are in a mule's body cells, why does that number disrupt meiosis, and what challenge does this pose for defining a 'species'?",
        idea:
          "The horse contributes a haploid gamete of {{n = 32}} chromosomes and the donkey contributes {{n = 31}}, so a mule has **63 chromosomes** in every somatic cell. Because 63 is odd (and horse and donkey chromosomes differ structurally), chromosomes cannot pair into matching homologous bivalents during prophase I of meiosis, so viable gametes almost never form. That supports classifying horses and donkeys as separate biological species — yet notice how the boundary between species can be blurry when hybrids survive or occasionally backcross.",
      },
      body: `### Variation: Continuous vs Discontinuous
Individuals within any population differ in measurable traits (**variation**):
- **Continuous variation** shows a smooth, unbroken range of phenotypes (typically a bell-shaped normal distribution) controlled by **many genes (polygenic)** plus **environmental influence** — e.g. human height, leaf length, or blood pressure.
- **Discontinuous variation** falls into discrete, non-overlapping categories controlled by **one or a few genes** with minimal environmental effect — e.g. human ABO blood groups (A, B, AB, O) or pea seed coat texture.

### The Biological Species Concept & Binomial Nomenclature
Under Ernst Mayr's **biological species concept**, a **species** is a group of organisms that can interbreed (or potentially interbreed) in nature to produce **fertile offspring**.

Every recognised species carries a universal two-part Latin name under Linnaeus's **binomial system**:
- **Genus** (capitalised) followed by **species epithet** (lowercase), *italicised* in print or underlined by hand — e.g. *Homo sapiens*, *Pan troglodytes*, *Rafflesia arnoldii*.
- Two organisms sharing the same genus name (e.g. *Pan troglodytes* and *Pan paniscus*) are more closely related than organisms in different genera.

**Why the biological species concept has limitations:**
1. **Asexual organisms** (bacteria, many fungi, parthenogenetic lizards) do not interbreed, so fertility tests cannot apply.
2. **Horizontal gene transfer (HGT)** in prokaryotes swaps DNA across distantly related bacterial lineages via plasmids.
3. **Extinct fossil organisms** cannot be tested for interbreeding; palaeontologists rely on morphological species criteria.
4. **Hybrids & geographically isolated populations**: closely related species occasionally produce viable or partially fertile hybrids (e.g. *Quercus* oak species, grolar bears), and physically separated populations may never meet naturally.

### Diploid Chromosome Numbers & Karyograms
Eukaryotic somatic cells are **diploid ({{2n}})**, carrying pairs of **homologous chromosomes** (one maternal, one paternal) with identical gene loci in the same order, though possibly different alleles. Gametes produced by meiosis are **haploid ({{n}})**.

- Each species has a characteristic chromosome number — e.g. *Drosophila melanogaster* ({{2n = 8}}), rice *Oryza sativa* ({{2n = 24}}), humans *Homo sapiens* ({{2n = 46}}), chimpanzees *Pan troglodytes* ({{2n = 48}}), and the adder's-tongue fern *Ophioglossum reticulatum* ({{2n = 1260}}). **Chromosome count does not correlate with organism complexity.**
- A **karyogram** is a photograph of stained metaphase chromosomes cut out and arranged in homologous pairs by **decreasing size**, **centromere position**, and **G-banding pattern**.
- **Clinical uses of karyograms**:
  1. **Sex determination**: females carry two matching large sex chromosomes (**XX**); males carry one X and one much smaller **Y** chromosome (**XY**).
  2. **Diagnosing chromosomal abnormalities (aneuploidy)**: **non-disjunction** during meiosis produces a gamete with an extra chromosome ({{n + 1}}). Fertilisation yields **trisomy**, such as **Down syndrome (trisomy 21 — 47 chromosomes total)**, visible as three copies at pair 21.

### Unity & Diversity of Genomes
A **genome** is the entire set of genetic information (all DNA base sequences) of an organism:
- **Unity**: all members of a species share the same genes at the same chromosomal loci.
- **Diversity**: different individuals carry different **alleles** and millions of **single nucleotide polymorphisms (SNPs)** — single-base differences at specific DNA positions.
- **Genome size** (measured in Mbp or Gbp) varies dramatically across taxa and shows **no simple link to complexity** (the C-value paradox: *E. coli* ≈ 4.6 Mbp; *Homo sapiens* ≈ 3.1 Gbp; the Japanese canopy plant *Paris japonica* ≈ 149 Gbp).

### Dichotomous Keys
A **dichotomous key** identifies unknown specimens through a numbered sequence of **paired contrasting observable traits (couplets)**. Each choice branches either to the next couplet or directly to a species name. Good keys use objective, unambiguous, measurable morphological traits rather than vague colours or behaviours.

### [HL] DNA Barcoding, Environmental DNA (eDNA) & Chromosome Fusion
- **DNA barcoding [HL]**: taxonomists sequence a short, standardised marker gene — typically mitochondrial ***COI*** (cytochrome c oxidase I) in animals or chloroplast ***rbcL*** / ***matK*** in plants — to match unknown specimens against reference databases and uncover morphologically identical **cryptic species**.
- **Environmental DNA (eDNA) [HL]**: organisms shed skin cells, mucus, scales, faeces, and pollen into water, soil, or air. Filtering and sequencing trace eDNA lets ecologists detect rare, nocturnal, or invasive species non-invasively without capturing a single animal.
- **Chromosome fusion & speciation [HL]**: humans have {{2n = 46}} chromosomes whereas chimpanzees, gorillas, and orangutans all have {{2n = 48}}. Molecular cytogenetics proves that **human chromosome 2** arose from an **end-to-end telomeric fusion** of two ancestral great-ape acrocentric chromosomes (**2A** and **2B**). Three lines of evidence confirm this: (1) matching G-banding patterns along human 2p/2q and ape 2A/2B, (2) **vestigial internal telomere sequences** (head-to-head TTAGGG repeats) at band 2q13, and (3) a **second inactivated centromere** alongside the active centromere.`,
      diagram: `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Human karyogram excerpt showing trisomy 21 and XX vs XY sex chromosomes alongside great-ape chromosome 2A and 2B fusion into human chromosome 2">
  <rect x="0" y="0" width="640" height="270" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="160" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">A. Karyogram Excerpt (SL)</text>
  <text x="480" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">B. Chromosome 2 Fusion (HL)</text>
  <line x1="320" y1="16" x2="320" y2="254" stroke="#cbd5e1" stroke-dasharray="4 4" stroke-width="1.5"/>

  <!-- Pair 1 -->
  <g transform="translate(28,46)">
    <rect x="0" y="0" width="16" height="86" rx="7" fill="#dbeafe" stroke="#2563eb" stroke-width="1.6"/>
    <rect x="0" y="14" width="16" height="9" fill="#1d4ed8"/>
    <rect x="0" y="54" width="16" height="12" fill="#1d4ed8"/>
    <circle cx="8" cy="40" r="4" fill="#0f172a"/>
    <rect x="24" y="0" width="16" height="86" rx="7" fill="#dbeafe" stroke="#2563eb" stroke-width="1.6"/>
    <rect x="24" y="14" width="16" height="9" fill="#1d4ed8"/>
    <rect x="24" y="54" width="16" height="12" fill="#1d4ed8"/>
    <circle cx="32" cy="40" r="4" fill="#0f172a"/>
    <text x="20" y="104" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">Pair 1</text>
  </g>

  <!-- Trisomy 21 box -->
  <rect x="96" y="42" width="100" height="114" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
  <g transform="translate(110,72)">
    <rect x="0" y="0" width="14" height="38" rx="6" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="0" y="18" width="14" height="7" fill="#b91c1c"/>
    <circle cx="7" cy="11" r="3" fill="#0f172a"/>
    <rect x="22" y="0" width="14" height="38" rx="6" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="22" y="18" width="14" height="7" fill="#b91c1c"/>
    <circle cx="29" cy="11" r="3" fill="#0f172a"/>
    <rect x="44" y="0" width="14" height="38" rx="6" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="44" y="18" width="14" height="7" fill="#b91c1c"/>
    <circle cx="51" cy="11" r="3" fill="#0f172a"/>
  </g>
  <text x="146" y="60" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b91c1c">Trisomy 21</text>
  <text x="146" y="130" text-anchor="middle" font-size="10" fill="#7f1d1d">3 copies (47 total)</text>
  <text x="146" y="144" text-anchor="middle" font-size="10" fill="#7f1d1d">Down syndrome</text>

  <!-- Sex chromosomes -->
  <g transform="translate(216,50)">
    <rect x="0" y="0" width="15" height="62" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
    <circle cx="7.5" cy="24" r="3.5" fill="#0f172a"/>
    <rect x="22" y="34" width="13" height="28" rx="5" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
    <circle cx="28.5" cy="43" r="3" fill="#0f172a"/>
    <text x="18" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">XY (Male)</text>
    <text x="18" y="96" text-anchor="middle" font-size="10" fill="#475569">vs XX (Female)</text>
  </g>

  <text x="160" y="190" text-anchor="middle" font-size="10.5" fill="#334155">Arranged by size, centromere position &amp; G-bands</text>
  <text x="160" y="210" text-anchor="middle" font-size="10.5" fill="#475569">Normal human somatic cell: 2n = 46 (22 autosome pairs + XX/XY)</text>
  <text x="160" y="230" text-anchor="middle" font-size="10.5" fill="#b91c1c">Non-disjunction in meiosis → n+1 gamete → trisomy (2n+1 = 47)</text>

  <!-- Panel B: Chromosome 2 fusion -->
  <g transform="translate(352,48)">
    <!-- Ape 2A -->
    <rect x="0" y="0" width="22" height="74" rx="9" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.6"/>
    <rect x="0" y="0" width="22" height="9" rx="4" fill="#f59e0b"/>
    <rect x="0" y="65" width="22" height="9" rx="4" fill="#f59e0b"/>
    <rect x="0" y="26" width="22" height="10" fill="#4338ca"/>
    <circle cx="11" cy="20" r="4.5" fill="#0f172a"/>
    <text x="11" y="90" text-anchor="middle" font-size="10.5" font-weight="700" fill="#312e81">Ape 2A</text>

    <!-- Ape 2B -->
    <rect x="44" y="0" width="22" height="84" rx="9" fill="#fce7f3" stroke="#be185d" stroke-width="1.6"/>
    <rect x="44" y="0" width="22" height="9" rx="4" fill="#f59e0b"/>
    <rect x="44" y="75" width="22" height="9" rx="4" fill="#f59e0b"/>
    <rect x="44" y="42" width="22" height="12" fill="#be185d"/>
    <circle cx="55" cy="24" r="4.5" fill="#0f172a"/>
    <text x="55" y="100" text-anchor="middle" font-size="10.5" font-weight="700" fill="#831843">Ape 2B</text>
    <text x="33" y="122" text-anchor="middle" font-size="10" fill="#475569">Chimpanzee 2n = 48</text>

    <!-- Arrow -->
    <line x1="80" y1="54" x2="122" y2="54" stroke="#0f172a" stroke-width="2"/>
    <polygon points="122,49 132,54 122,59" fill="#0f172a"/>
    <text x="104" y="44" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">Fusion</text>

    <!-- Human Chr 2 -->
    <rect x="148" y="-6" width="24" height="152" rx="10" fill="#f1f5f9" stroke="#0f172a" stroke-width="1.8"/>
    <rect x="148" y="-6" width="24" height="68" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.2"/>
    <rect x="148" y="64" width="24" height="82" rx="8" fill="#fce7f3" stroke="#be185d" stroke-width="1.2"/>
    <rect x="148" y="-6" width="24" height="8" rx="4" fill="#f59e0b"/>
    <rect x="148" y="59" width="24" height="9" fill="#f59e0b"/>
    <rect x="148" y="138" width="24" height="8" rx="4" fill="#f59e0b"/>
    <rect x="148" y="20" width="24" height="10" fill="#4338ca"/>
    <rect x="148" y="106" width="24" height="12" fill="#be185d"/>
    <circle cx="160" cy="14" r="4.5" fill="#0f172a"/>
    <circle cx="160" cy="88" r="4.5" fill="#94a3b8" stroke="#475569" stroke-dasharray="2 1" stroke-width="1.2"/>

    <!-- Annotations -->
    <text x="180" y="18" font-size="10" font-weight="600" fill="#0f172a">Active centromere</text>
    <text x="180" y="67" font-size="10" font-weight="700" fill="#b45309">Internal telomere</text>
    <text x="180" y="92" font-size="10" fill="#475569">Inactive centromere</text>
    <text x="160" y="164" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Human Chr 2 (2n = 46)</text>
  </g>
</svg>`,
      diagramCaption:
        "Left: Karyograms sort homologous metaphase chromosomes by length, centromere position, and G-banding to diagnose trisomy 21 and identify XX/XY sex chromosomes. Right [HL]: End-to-end fusion of ancestral ape chromosomes 2A and 2B formed human chromosome 2, leaving internal telomere repeats and a vestigial centromere.",
      workedExamples: [
        {
          title: "Interpreting a Karyogram & Diploid/Haploid Numbers",
          problem:
            "A prenatal karyogram shows 21 normal homologous pairs of autosomes, three chromosomes at position 21, and two identical large sex chromosomes. State the total chromosome number, biological sex, and genetic condition of the fetus, and explain how this karyotype arose.",
          steps: [
            "Count total chromosomes: 21 normal autosome pairs (42) + 3 copies of chromosome 21 (3) + 2 sex chromosomes (2) = **47 chromosomes**.",
            "Identify sex chromosomes: two identical large chromosomes = **XX (biological female)**.",
            "Identify abnormality: three copies of chromosome 21 = **trisomy 21 (Down syndrome)**.",
            "Explain mechanism: **non-disjunction** (failure of homologous pair 21 to separate in meiosis I, or sister chromatids in meiosis II) formed an {{n + 1 = 24}} gamete, which fused with a normal {{n = 23}} gamete.",
          ],
          answer: "47 chromosomes, female (XX), trisomy 21 (Down syndrome) caused by meiotic non-disjunction.",
          yourTurn: {
            question:
              "Domestic dogs (*Canis lupus familiaris*) have a diploid chromosome number of {{2n = 78}}. How many chromosomes are present in a single normal haploid sperm cell?",
            answer: { type: "number", value: 39, display: "39" },
            solution: "Meiosis halves the diploid number: {{n = 78 / 2 = 39}} chromosomes.",
          },
        },
        {
          title: "Using a Dichotomous Key & [HL] Chromosome Fusion",
          problem:
            "A student examines an invertebrate with jointed legs, 3 pairs of legs, and two pairs of membranous wings without scales. Use the couplets: 1a. Jointed legs absent → *Lumbricus*; 1b. Jointed legs present → go to 2; 2a. 4 pairs of legs → *Araneus*; 2b. 3 pairs of legs → go to 3; 3a. Wings covered in scales → *Papilio*; 3b. Wings membranous without scales → *Apis*. Identify the genus and write a properly formatted binomial if its species epithet is *mellifera*.",
          steps: [
            "Start at couplet 1: jointed legs are present → follow 1b to couplet 2.",
            "At couplet 2: 3 pairs of legs → follow 2b to couplet 3.",
            "At couplet 3: membranous wings without scales → **Genus *Apis***.",
            "Format the binomial with capitalised genus, lowercase species epithet, and italics: ***Apis mellifera***.",
          ],
          answer: "*Apis mellifera*",
          yourTurn: {
            question:
              "[HL] Great apes such as chimpanzees have {{2n = 48}} chromosomes. After the ancestral end-to-end fusion of chromosomes 2A and 2B produced human chromosome 2, how many chromosomes are found in a normal haploid human ovum?",
            answer: { type: "number", value: 23, display: "23" },
            solution:
              "Fusion of two pairs into one pair reduced diploid count from {{2n = 48}} to {{2n = 46}}, so a haploid human ovum contains {{n = 46 / 2 = 23}} chromosomes.",
          },
        },
      ],
      keyPoints: [
        "Continuous variation is polygenic + environmental; discontinuous variation is controlled by one or a few genes with distinct categories.",
        "Binomial names follow *Genus species* (capitalised genus, lowercase species, italicised in print).",
        "The biological species concept fails for asexual organisms, fossils, horizontal gene transfer, and partially fertile hybrids.",
        "Karyograms display metaphase chromosomes ordered by size, centromere position, and G-banding to reveal sex (XX/XY) and aneuploidies (e.g. trisomy 21).",
        "[HL] DNA barcoding (*COI*, *rbcL*) and eDNA allow rapid, non-invasive species detection; human chromosome 2 carries internal telomere repeats and an inactive centromere proving ancestral fusion of ape 2A + 2B.",
      ],
      whyItWorks:
        "Chromosomes are only tightly condensed and visibly banded during **metaphase** of mitosis, which is why karyograms are prepared by arresting dividing cells in metaphase with colchicine before staining. Similarly, mitochondrial *COI* works as a DNA barcode because it mutates fast enough to distinguish closely related animal species yet slowly enough to stay nearly constant within a single species.",
      strategies: [
        "When checking a karyogram in Paper 1B/2, ALWAYS check Pair 21 for trisomy AND Pair 23 for XX vs XY before writing your diagnosis.",
        "Never assume a larger chromosome count or larger genome means a more 'advanced' organism — quote *Ophioglossum* fern ({{2n = 1260}}) or *Paris japonica* (149 Gbp) as counterexamples.",
        "In binomial questions, double-check capitalisation: *Panthera leo* is right; *Panthera Leo* or *panthera leo* loses a formatting mark.",
      ],
      thinkDeeper:
        "If an ancestral hominid individual first carried one fused chromosome 2 alongside unfused 2A and 2B (heterozygous karyotype, 47 chromosomes), how could that balanced carrier still produce viable gametes during meiosis and allow the fused chromosome to become fixed in a small isolated population?",
    },

    // =========================================================================
    // SECTION 2: A3.2 [HL]
    // =========================================================================
    {
      id: "classification-cladistics-hl",
      heading: "A3.2 Classification, Three Domains & Cladistics",
      level: "HL",
      discovery: {
        problem:
          "For over 200 years, botanists placed foxgloves (*Digitalis*), snapdragons (*Antirrhinum*), and mulleins (*Verbascum*) in the same figwort family (Scrophulariaceae) because their flowers looked strikingly alike. When DNA sequencing arrived, over 80% of those genera were moved into completely different plant families. Why did flower morphology deceive botanists — and what evidence overrode it?",
        idea:
          "Shared pollinators (such as bees) exerted identical selection pressures on unrelated plant lineages, causing **convergent evolution** of similar tubular flower shapes (**analogous structures**). Chloroplast DNA sequences revealed true evolutionary ancestry instead, allowing taxonomists to split the artificial polyphyletic family into genuine **monophyletic clades**.",
      },
      body: `### Traditional Hierarchy vs Cladistics
Traditional Linnaean taxonomy sorts organisms into nested ranks (**Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species**). However, traditional morphology-based classification suffers from two major flaws:
1. **Arbitrary ranks**: a "family" of birds and a "family" of beetles do not represent equal evolutionary age or genetic divergence.
2. **Convergent misgrouping**: grouping organisms by superficial physical traits can unite unrelated taxa that evolved similar adaptations independently (**polyphyletic** groups) or exclude descendants of a common ancestor (**paraphyletic** groups, such as traditional "Reptilia" excluding birds).

**Cladistics** resolves this by classifying organisms strictly by **shared evolutionary ancestry**:
- A **clade** is a **monophyletic group** consisting of **one ancestral species and ALL of its descendants**.
- **One-snip test**: if you can sever a single branch on a cladogram and every taxon above the cut belongs to your group (with none left behind), it is a true clade.
- Clades are defined by **shared derived characteristics (synapomorphies)** — traits inherited from the clade's most recent common ancestor — and increasingly by **DNA, RNA, and amino acid sequences**.

### The Three Domains of Life (Carl Woese)
Comparison of **ribosomal RNA (16S / 18S rRNA)** base sequences revealed a deep evolutionary split among prokaryotes that morphology missed, replacing the five-kingdom system with **three domains**:

| Feature | Bacteria | Archaea | Eukarya |
|---|---|---|---|
| Nuclear membrane & organelles | Absent | Absent | Present |
| Ribosome size | 70S | 70S | 80S (cytoplasmic) |
| Cell wall peptidoglycan | Present | Absent | Absent (cellulose/chitin if present) |
| Membrane lipid linkage | Ester-linked unbranched | Ether-linked branched | Ester-linked unbranched |
| Histones & introns | Absent (rare introns) | Present in many lineages | Present |

Crucially, rRNA and genetic evidence show that **Archaea share a more recent common ancestor with Eukarya than with Bacteria**, even though Bacteria and Archaea both look like small prokaryotic cells under a microscope.

### Reading & Constructing Cladograms
A **cladogram** is a branching tree diagram showing inferred evolutionary relationships:
- **Root**: the base representing the earliest common ancestor of all taxa in the diagram.
- **Internal node**: a branching point representing a **speciation event** and the **most recent common ancestor (MRCA)** of all lineages emerging from it. A strictly bifurcating rooted cladogram with {{k}} terminal taxa has {{k - 1}} internal nodes.
- **Sister taxa**: two lineages sharing an immediate common node (closest living relatives on the tree).
- **Outgroup**: a distantly related reference taxon included to root the cladogram and distinguish ancestral traits from derived traits.
- **Rotation invariance**: freely spinning the two branches at any internal node **does not change** the evolutionary relationships — always trace back to the nodes, never judge relatedness by how close two names sit along the top edge!
- **Principle of parsimony**: when multiple trees are possible, cladists select the tree requiring the **fewest evolutionary changes** (fewest mutations or independent gains/losses of a trait).

### Molecular Clocks
Because neutral mutations in DNA (and silent/conservative substitutions in proteins such as cytochrome *c* or haemoglobin) accumulate at an **approximately constant average rate** over long geological timescales, the number of base or amino-acid differences between two species is **proportional to the time elapsed since they diverged from their MRCA**:
- Pairwise clock formula: {{t = d / r}}, where {{d}} is the number of sequence differences between two species and {{r}} is the **pairwise** divergence rate (substitutions per million years).
- **Watch the factor of 2!** If a question quotes a **per-lineage** mutation rate {{r_L}} (mutations accumulating independently along *each* of the two diverging branches), then {{d = 2 r_L t}}, so {{t = d / (2 r_L)}}.
- **Calibration & limitations**: molecular clocks must be calibrated against **radiometrically dated fossils**. Rates can vary across genes (strongly conserved genes tick slowly; non-coding regions tick rapidly), generation times, and lineages under strong natural selection.

### Homology, Analogy & Reclassification (Figworts)
- **Homologous structures** arise by **divergent evolution** from a shared ancestor (e.g. pentadactyl limbs of mammals, birds, and lizards) — valid evidence for cladistics.
- **Analogous structures** arise by **convergent evolution** under similar environmental pressures (e.g. wings of bees vs birds; succulent spines of American cacti vs African euphorbias) — **misleading** if used for classification.
- **Reclassification of *Scrophulariaceae* (Figworts)**: chloroplast DNA sequencing (*rbcL*, *ndhF*, *rps2*) demonstrated that the traditional figwort family was **polyphyletic** — its shared floral morphology was analogous. Over 80% of genera were reassigned (e.g. *Digitalis* foxgloves and *Antirrhinum* snapdragons moved to Plantaginaceae), leaving a much smaller, genuinely monophyletic *Scrophulariaceae*.`,
      diagram: `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rooted vertebrate cladogram highlighting monophyletic amniote clade and synapomorphies alongside a calibrated molecular clock graph">
  <rect x="0" y="0" width="640" height="270" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="175" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">A. Rooted Cladogram &amp; Clades</text>
  <text x="495" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">B. Calibrated Molecular Clock</text>
  <line x1="352" y1="16" x2="352" y2="254" stroke="#cbd5e1" stroke-dasharray="4 4" stroke-width="1.5"/>

  <!-- Monophyletic clade highlight box (Amniotes: Mammal, Lizard, Bird) -->
  <rect x="170" y="40" width="166" height="140" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-dasharray="5 3" stroke-width="1.6"/>
  <text x="253" y="55" text-anchor="middle" font-size="10" font-weight="700" fill="#047857">Amniote Clade (Monophyletic)</text>

  <!-- Cladogram branches -->
  <!-- Root -->
  <line x1="56" y1="242" x2="56" y2="216" stroke="#0f172a" stroke-width="2.4"/>
  <!-- Node 1 (56,216) -> Shark (48,76) and Tetrapods (130,178) -->
  <line x1="56" y1="216" x2="42" y2="76" stroke="#475569" stroke-width="2.2"/>
  <line x1="56" y1="216" x2="132" y2="174" stroke="#0f172a" stroke-width="2.4"/>
  <!-- Node 2 (132,174) -> Frog (118,76) and Amniotes (204,134) -->
  <line x1="132" y1="174" x2="112" y2="76" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="132" y1="174" x2="206" y2="136" stroke="#0f172a" stroke-width="2.4"/>
  <!-- Node 3 (206,136) -> Mammal (192,76) and Sauropsids (268,104) -->
  <line x1="206" y1="136" x2="192" y2="76" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="206" y1="136" x2="270" y2="106" stroke="#0f172a" stroke-width="2.4"/>
  <!-- Node 4 (270,106) -> Lizard (254,76) and Bird (316,76) -->
  <line x1="270" y1="106" x2="254" y2="76" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="270" y1="106" x2="314" y2="76" stroke="#0f172a" stroke-width="2.2"/>

  <!-- Nodes -->
  <circle cx="56" cy="216" r="4.5" fill="#2563eb"/>
  <circle cx="132" cy="174" r="4.5" fill="#2563eb"/>
  <circle cx="206" cy="136" r="4.5" fill="#059669"/>
  <circle cx="270" cy="106" r="4.5" fill="#059669"/>

  <!-- Synapomorphy tick marks -->
  <line x1="88" y1="188" x2="100" y2="200" stroke="#dc2626" stroke-width="2.5"/>
  <text x="104" y="206" font-size="9.5" font-weight="700" fill="#b91c1c">4 limbs</text>
  <line x1="164" y1="148" x2="174" y2="160" stroke="#dc2626" stroke-width="2.5"/>
  <text x="176" y="168" font-size="9.5" font-weight="700" fill="#b91c1c">Amniotic egg</text>
  <line x1="234" y1="115" x2="244" y2="127" stroke="#dc2626" stroke-width="2.5"/>
  <text x="247" y="132" font-size="9.5" font-weight="700" fill="#b91c1c">Keratin scales</text>

  <!-- Taxa labels -->
  <text x="42" y="68" text-anchor="middle" font-size="10.5" font-weight="700" fill="#475569">Shark</text>
  <text x="42" y="54" text-anchor="middle" font-size="9" fill="#64748b">(outgroup)</text>
  <text x="112" y="68" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Frog</text>
  <text x="192" y="70" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Mammal</text>
  <text x="254" y="70" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Lizard</text>
  <text x="314" y="70" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Bird</text>

  <text x="56" y="256" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">Root (MRCA)</text>
  <text x="230" y="236" text-anchor="middle" font-size="9.8" fill="#334155">Lizard &amp; Bird = sister taxa (node 4)</text>
  <text x="230" y="251" text-anchor="middle" font-size="9.8" fill="#475569">5 taxa → 4 internal nodes (k − 1)</text>

  <!-- Panel B: Molecular clock graph -->
  <g transform="translate(396,46)">
    <!-- Axes -->
    <line x1="0" y1="168" x2="216" y2="168" stroke="#0f172a" stroke-width="1.8"/>
    <line x1="0" y1="168" x2="0" y2="10" stroke="#0f172a" stroke-width="1.8"/>
    <!-- Gridlines -->
    <line x1="0" y1="128" x2="216" y2="128" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="0" y1="88" x2="216" y2="88" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="0" y1="48" x2="216" y2="48" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="65" y1="168" x2="65" y2="10" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="130" y1="168" x2="130" y2="10" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="195" y1="168" x2="195" y2="10" stroke="#e2e8f0" stroke-width="1"/>

    <!-- Regression line: slope = 0.5 diff/Ma -> at 60 Ma = 30 diffs -->
    <line x1="0" y1="168" x2="195" y2="48" stroke="#2563eb" stroke-width="2.4"/>

    <!-- Calibration fossil point: (40 Ma, 20 diffs) -> x=130, y=88 -->
    <circle cx="130" cy="88" r="5" fill="#1d4ed8"/>
    <text x="136" y="82" font-size="9.5" font-weight="700" fill="#1d4ed8">Fossil cal.</text>
    <text x="136" y="94" font-size="9" fill="#334155">(40 Ma, 20 bp)</text>

    <!-- Unknown pair interpolation: 14 diffs -> 28 Ma (x=91, y=112) -->
    <line x1="0" y1="112" x2="91" y2="112" stroke="#dc2626" stroke-dasharray="4 3" stroke-width="1.6"/>
    <line x1="91" y1="112" x2="91" y2="168" stroke="#dc2626" stroke-dasharray="4 3" stroke-width="1.6"/>
    <circle cx="91" cy="112" r="4.5" fill="#dc2626"/>
    <text x="6" y="106" font-size="9.5" font-weight="700" fill="#b91c1c">14 bp</text>
    <text x="91" y="182" text-anchor="middle" font-size="9.5" font-weight="700" fill="#b91c1c">28 Ma</text>

    <!-- Axis tick labels -->
    <text x="0" y="182" text-anchor="middle" font-size="9.5" fill="#475569">0</text>
    <text x="65" y="182" text-anchor="middle" font-size="9.5" fill="#475569">20</text>
    <text x="130" y="182" text-anchor="middle" font-size="9.5" fill="#475569">40</text>
    <text x="195" y="182" text-anchor="middle" font-size="9.5" fill="#475569">60</text>

    <text x="-8" y="131" text-anchor="end" font-size="9.5" fill="#475569">10</text>
    <text x="-8" y="91" text-anchor="end" font-size="9.5" fill="#475569">20</text>
    <text x="-8" y="51" text-anchor="end" font-size="9.5" fill="#475569">30</text>

    <text x="108" y="201" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f172a">Divergence Time (Ma)</text>
    <text x="-28" y="90" text-anchor="middle" font-size="10" font-weight="600" fill="#0f172a" transform="rotate(-90 -28 90)">DNA Differences (bp)</text>
  </g>
</svg>`,
      diagramCaption:
        "Left: A rooted vertebrate cladogram showing synapomorphies, internal nodes, and the monophyletic amniote clade (Mammal + Lizard + Bird). Notice Lizard and Bird are sister taxa. Right: A fossil-calibrated molecular clock relates pairwise DNA differences linearly to divergence time.",
      workedExamples: [
        {
          title: "Inferring a Cladogram from a DNA Difference Matrix",
          problem:
            "A conserved 500 bp DNA locus is compared across four primates: Human–Chimpanzee differ at 6 bases; Human–Gorilla differ at 10 bases; Chimpanzee–Gorilla differ at 10 bases; and Orangutan differs from all three by 18–19 bases. Identify the sister taxa, the outgroup, and why Gorilla + Orangutan alone cannot form a clade.",
          steps: [
            "Smallest genetic difference (6 bp) is between **Human and Chimpanzee** → they share the most recent common ancestor and are **sister taxa**.",
            "**Gorilla** differs equally from both Human and Chimpanzee (10 bp each) → Gorilla joins the node just below the Human–Chimpanzee clade.",
            "**Orangutan** has the greatest divergence (18–19 bp) from all others → Orangutan is the **outgroup** branching from the deepest root node.",
            "Any common ancestor of Gorilla and Orangutan is also an ancestor of Human and Chimpanzee; excluding Human and Chimpanzee leaves a **paraphyletic** group, not a true clade.",
          ],
          answer: "Sister taxa: Human & Chimpanzee; outgroup: Orangutan; Gorilla + Orangutan excludes descendants (Human & Chimpanzee), violating monophyly.",
          yourTurn: {
            question:
              "A strictly bifurcating rooted cladogram displays 7 terminal species at its tips. How many internal branching nodes (speciation events) does this cladogram contain?",
            answer: { type: "number", value: 6, display: "6" },
            solution: "A strictly bifurcating rooted cladogram with {{k}} terminal taxa always has {{k - 1 = 7 - 1 = 6}} internal nodes.",
          },
        },
        {
          title: "Fossil-Calibrated Molecular Clock Calculation",
          problem:
            "Fossil radiometric dating shows that Species A and Species B diverged {{40}} million years ago (Ma). Their sequences for a conserved nuclear gene differ by {{20}} nucleotides. Species C and Species D differ by {{14}} nucleotides in the same gene. Estimate the divergence time of Species C and D assuming a constant molecular clock.",
          steps: [
            "Find the pairwise substitution rate from the calibration pair: {{r = 20 / 40 = 0.50}} substitutions per Ma.",
            "Apply the clock rate to Species C and D: {{t = d / r = 14 / 0.50 = 28}} Ma.",
            "Check reasonableness: 14 differences is less than 20, so the divergence time must be less than 40 Ma ({{14/20 * 40 = 28}} Ma).",
          ],
          answer: "28 Ma (28 million years ago)",
          yourTurn: {
            question:
              "Using the same calibrated gene ({{0.50}} pairwise substitutions per million years), Species E and Species F differ by {{32}} nucleotides. Estimate how many million years ago Species E and F diverged.",
            answer: { type: "number", value: 64, display: "64 Ma" },
            solution: "{{t = 32 / 0.50 = 64}} million years ago.",
          },
        },
      ],
      keyPoints: [
        "A clade is strictly monophyletic: one common ancestor plus ALL of its descendants.",
        "Carl Woese's rRNA sequencing established three domains — Bacteria, Archaea, and Eukarya — with Archaea more closely related to Eukarya than to Bacteria.",
        "Cladogram nodes represent hypothetical MRCAs/speciation events; rotating branches around a node never alters evolutionary relationships.",
        "Molecular clocks use neutral mutation accumulation calibrated by fossils to estimate divergence times; always distinguish pairwise vs per-lineage rates.",
        "The figwort family (*Scrophulariaceae*) was reclassified after chloroplast DNA revealed its shared floral morphology was analogous (convergent).",
      ],
      whyItWorks:
        "Ribosomal RNA (16S/18S rRNA) was the ideal molecule for Carl Woese's universal tree of life because **every cellular organism makes ribosomes** (so the gene is universally homologous) and rRNA mutates **extremely slowly**, preserving deep evolutionary signals across billions of years without becoming randomised by repeated back-mutations.",
      strategies: [
        "To test whether two species are closest relatives on a cladogram, NEVER measure horizontal distance between tip labels — trace downward to find the **highest (most recent) shared node**.",
        "In molecular-clock problems, read carefully for the phrase **'per lineage'** vs **'between two species'**: if rate is per lineage, double it before dividing the total pairwise differences!",
        "When justifying reclassification (like *Scrophulariaceae*), name BOTH what failed (**analogous/convergent floral morphology**) AND what replaced it (**chloroplast DNA base sequences** showing monophyletic clades).",
      ],
      thinkDeeper:
        "Why do biologists prefer neutral (synonymous or non-coding) DNA substitutions rather than strongly selected amino-acid sites when building a molecular clock — and what happens to a molecular clock over very deep timescales (>1 billion years) when the same nucleotide site mutates multiple times ('saturation')?",
    },

    // =========================================================================
    // SECTION 3: A4.1 (SL + HL extensions)
    // =========================================================================
    {
      id: "evolution-speciation",
      heading: "A4.1 Evidence for Evolution & Mechanisms of Speciation",
      level: "SL",
      discovery: {
        problem:
          "North of the wide Congo River live common chimpanzees (*Pan troglodytes*); immediately south of the river live bonobos (*Pan paniscus*). Neither ape can swim, and their forest habitats look remarkably similar — yet today they differ sharply in skeleton, vocalisations, social structure, and DNA. How could a single river transform one ancestral ape population into two separate species?",
        idea:
          "When the Congo River carved a permanent barrier ~1–2 million years ago, **gene flow** between the northern and southern ape populations stopped completely. Isolated from one another, the two populations accumulated independent random mutations, genetic drift, and slightly different natural selection pressures until they diverged into distinct species (**allopatric speciation**).",
      },
      body: `### Evolution as Heritable Change Over Generations
**Evolution** is the cumulative change in the **heritable characteristics** (allele frequencies) of a population over successive generations. Darwin and Wallace independently proposed **natural selection** as the driving mechanism: heritable variation exists within populations, more offspring are born than can survive, and individuals carrying advantageous alleles leave more surviving offspring.
- **Golden rule**: *individuals do not evolve during their lifetime; populations evolve across generations.*

### Four Key Lines of Evidence for Evolution
1. **Molecular sequence data**: universal genetic code and nested similarities in DNA, mRNA, and amino-acid sequences confirm common descent.
2. **Selective breeding (artificial selection)**: humans deliberately choose parents with desired heritable traits over generations — transforming wild mustard (*Brassica oleracea*) into broccoli, cabbage, kale, cauliflower, and Brussels sprouts, or domesticating grey wolves into hundreds of dog breeds. This demonstrates rapid, large-scale heritable change driven by selection.
3. **Homologous structures & divergent evolution**: structures sharing the same underlying anatomical plan inherited from a common ancestor, modified for different functions. The classic IB example is the **tetrapod pentadactyl limb** (one upper bone *humerus*, two lower bones *radius/ulna*, wrist *carpals*, palm *metacarpals*, five digits *phalanges*) adapted for grasping (human), flying (bat), swimming (whale/dolphin), and running (horse).
4. **Convergent evolution & analogous structures**: unrelated lineages facing similar ecological selection pressures independently evolve superficially similar structures — e.g. the fusiform streamlined bodies and dorsal fins of sharks (cartilaginous fish), ichthyosaurs (extinct reptiles), and dolphins (mammals); or the wings of insects (chitinous cuticle), birds (feathered forelimb), and bats (skin stretched across elongated digits).

### Speciation via Reproductive Isolation
**Speciation** occurs when one ancestral species splits into two or more species because **reproductive isolation** halts **gene flow** between subpopulations. Over time, independent **mutations**, **differential natural selection**, and **genetic drift** cause the gene pools to diverge until the populations can no longer interbreed to produce fertile offspring.

- **Allopatric speciation (Geographical isolation) [SL]**: a physical barrier — river, mountain uplift, desert, ocean strait, or glacier — physically divides a population (e.g. *Pan troglodytes* vs *Pan paniscus* separated by the Congo River; snapping shrimp pairs separated by the rise of the Isthmus of Panama).

### [HL] Temporal & Behavioural Isolation, Sympatric Speciation & Adaptive Radiation
Speciation can also happen **within the same geographic area** (**sympatric speciation**) when reproductive barriers evolve without a physical wall:
- **Temporal isolation [HL]**: subpopulations breed at different times of day, season, or year — e.g. on tiny Lord Howe Island, two palm species (*Howea forsteriana* on calcareous soil and *Howea belmoreana* on volcanic soil) diverged because soil pH shifted their flowering times by ~6 weeks, preventing cross-pollination.
- **Behavioural isolation [HL]**: divergence in courtship songs, mating dances, plumage, or pheromones prevents mate recognition (e.g. Hawaiian *Drosophila* courtship dances, East African cichlid mate-colour preferences).
- **Adaptive radiation [HL]**: rapid evolution of many diverse species from a single common ancestor colonising vacant ecological niches — famously **Darwin's finches** on the Galápagos Islands, where one ancestral mainland finch radiated into >14 species with specialised beaks (heavy crushing beaks for hard seeds, slender probing beaks for insects and cactus nectar).

### [HL] Hybridization & Polyploidy in Plants
Interspecific hybrids between two species with different chromosome sets are normally **sterile** because their chromosomes lack homologous partners for synapsis in meiosis I. However, in plants, **non-disjunction** (failure of chromosomes to separate during meiosis or mitosis) can double the entire chromosome complement (**polyploidy**):
- **Autopolyploidy**: chromosome doubling within a single species ({{2n -> 4n}}).
- **Allopolyploidy**: two different species hybridise (producing a sterile hybrid with {{n_A + n_B}} chromosomes), and spontaneous genome doubling restores pairs for every chromosome ({{2(n_A + n_B)}}), creating an **instantaneously fertile new species** in a single generation!
- **Reproductive isolation**: if a tetraploid ({{4n}}) plant crosses back with a diploid ({{2n}}) parent, the offspring is **triploid ({{3n}})** and sterile (odd chromosome set fails meiosis), locking in instant sympatric speciation. Classic IB examples include **bread wheat (*Triticum aestivum*, hexaploid {{6n = 42}})**, ***Allium*** species (onions/leeks/chives), and Japanese knotweed (*Fallopia* / *Persicaria*).`,
      diagram: `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of allopatric speciation across a river barrier versus sympatric speciation by allopolyploidy in plants">
  <rect x="0" y="0" width="640" height="270" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="158" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">A. Allopatric Speciation (SL)</text>
  <text x="480" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">B. Sympatric Allopolyploidy (HL)</text>
  <line x1="318" y1="16" x2="318" y2="254" stroke="#cbd5e1" stroke-dasharray="4 4" stroke-width="1.5"/>

  <!-- Panel A: Allopatric -->
  <!-- Stage 1: Single ancestral population -->
  <rect x="78" y="38" width="160" height="44" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="158" y="56" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e3a8a">Ancestral Population</text>
  <text x="158" y="72" text-anchor="middle" font-size="9.5" fill="#1d4ed8">Continuous gene flow</text>

  <line x1="158" y1="82" x2="158" y2="104" stroke="#0f172a" stroke-width="1.8"/>
  <polygon points="153,104 163,104 158,111" fill="#0f172a"/>

  <!-- Stage 2: Barrier splits -->
  <rect x="24" y="114" width="108" height="54" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="78" y="135" text-anchor="middle" font-size="10" font-weight="700" fill="#166534">North Subpop.</text>
  <text x="78" y="150" text-anchor="middle" font-size="9" fill="#15803d">Distinct mutations</text>
  <text x="78" y="162" text-anchor="middle" font-size="9" fill="#15803d">&amp; selection</text>

  <!-- River barrier -->
  <path d="M 154 112 Q 164 134 152 152 Q 144 168 158 184" fill="none" stroke="#0284c7" stroke-width="10" stroke-linecap="round"/>
  <text x="158" y="106" text-anchor="middle" font-size="9" font-weight="700" fill="#0369a1">Barrier</text>
  <text x="158" y="198" text-anchor="middle" font-size="9" font-weight="700" fill="#0369a1">No gene flow</text>

  <rect x="184" y="114" width="110" height="54" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="239" y="135" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">South Subpop.</text>
  <text x="239" y="150" text-anchor="middle" font-size="9" fill="#b45309">Independent drift</text>
  <text x="239" y="162" text-anchor="middle" font-size="9" fill="#b45309">&amp; selection</text>

  <!-- Stage 3: Two species -->
  <line x1="78" y1="168" x2="78" y2="206" stroke="#16a34a" stroke-width="1.8"/>
  <polygon points="73,206 83,206 78,213" fill="#16a34a"/>
  <line x1="239" y1="168" x2="239" y2="206" stroke="#d97706" stroke-width="1.8"/>
  <polygon points="234,206 244,206 239,213" fill="#d97706"/>

  <rect x="24" y="216" width="114" height="38" rx="9" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
  <text x="81" y="233" text-anchor="middle" font-size="10" font-weight="700" fill="#14532d">Species A</text>
  <text x="81" y="246" text-anchor="middle" font-size="9" font-style="italic" fill="#166534">Pan troglodytes</text>

  <rect x="180" y="216" width="114" height="38" rx="9" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
  <text x="237" y="233" text-anchor="middle" font-size="10" font-weight="700" fill="#78350f">Species B</text>
  <text x="237" y="246" text-anchor="middle" font-size="9" font-style="italic" fill="#92400e">Pan paniscus</text>

  <text x="159" y="238" text-anchor="middle" font-size="12" font-weight="800" fill="#dc2626">≠</text>

  <!-- Panel B: Sympatric allopolyploidy -->
  <rect x="342" y="38" width="116" height="44" rx="9" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
  <text x="400" y="56" text-anchor="middle" font-size="10" font-weight="700" fill="#312e81">Species P (2n = 14)</text>
  <text x="400" y="72" text-anchor="middle" font-size="9.5" fill="#4338ca">Gamete: n = 7</text>

  <text x="480" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">×</text>

  <rect x="502" y="38" width="116" height="44" rx="9" fill="#fce7f3" stroke="#be185d" stroke-width="1.5"/>
  <text x="560" y="56" text-anchor="middle" font-size="10" font-weight="700" fill="#831843">Species Q (2n = 16)</text>
  <text x="560" y="72" text-anchor="middle" font-size="9.5" fill="#be185d">Gamete: n = 8</text>

  <line x1="400" y1="82" x2="458" y2="112" stroke="#0f172a" stroke-width="1.6"/>
  <line x1="560" y1="82" x2="502" y2="112" stroke="#0f172a" stroke-width="1.6"/>
  <polygon points="475,110 485,110 480,117" fill="#0f172a"/>

  <!-- Sterile hybrid -->
  <rect x="372" y="118" width="216" height="44" rx="9" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="480" y="136" text-anchor="middle" font-size="10.5" font-weight="700" fill="#991b1b">Sterile F₁ Hybrid (7 + 8 = 15)</text>
  <text x="480" y="152" text-anchor="middle" font-size="9.5" fill="#b91c1c">Unpaired chromosomes fail meiosis I</text>

  <line x1="480" y1="162" x2="480" y2="188" stroke="#0f172a" stroke-width="1.8"/>
  <polygon points="475,188 485,188 480,195" fill="#0f172a"/>
  <text x="556" y="182" text-anchor="middle" font-size="9.5" font-weight="700" fill="#047857">Non-disjunction (×2)</text>

  <!-- Fertile allotetraploid -->
  <rect x="352" y="198" width="256" height="56" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="1.8"/>
  <text x="480" y="218" text-anchor="middle" font-size="10.5" font-weight="700" fill="#065f46">Fertile Allotetraploid (4n = 30)</text>
  <text x="480" y="234" text-anchor="middle" font-size="9.5" fill="#047857">15 homologous pairs → normal meiosis</text>
  <text x="480" y="247" text-anchor="middle" font-size="9.2" fill="#065f46">Instant sympatric speciation (backcrosses sterile)</text>
</svg>`,
      diagramCaption:
        "Left: Allopatric speciation divides gene flow via a physical barrier such as the Congo River. Right [HL]: In plants, genome doubling after hybridisation restores homologous pairing, creating a fertile allopolyploid species reproductively isolated from both diploid parents in a single generation.",
      workedExamples: [
        {
          title: "Distinguishing Homology, Analogy & Speciation Modes",
          problem:
            "Compare the evolutionary origin of (i) a bat's wing and a whale's flipper versus (ii) a bat's wing and a dragonfly's wing. Explain how each pair provides evidence for evolution.",
          steps: [
            "(i) Bat's wing and whale's flipper both contain the **pentadactyl limb** bone plan (humerus, radius/ulna, carpals, metacarpals, phalanges) inherited from a common mammalian/tetrapod ancestor → **homologous structures** formed by **divergent evolution** (adaptive radiation into flying vs swimming niches).",
            "(ii) Bat's wing (endoskeletal tetrapod forelimb + skin membrane) and dragonfly's wing (chitinous exoskeletal outgrowth) share **no winged common ancestor** → **analogous structures** formed by **convergent evolution** under similar aerodynamic selection pressures.",
            "Both support evolution: homology demonstrates descent with modification from common ancestry; analogy demonstrates how natural selection independently shapes optimal solutions to similar physical constraints.",
          ],
          answer:
            "Bat wing & whale flipper = homologous (divergent evolution from common tetrapod ancestor); bat wing & dragonfly wing = analogous (convergent evolution under aerodynamic selection).",
          yourTurn: {
            question:
              "Dolphins (mammals) and sharks (cartilaginous fish) both evolved streamlined fusiform bodies and dorsal fins independently in marine habitats. What single biological adjective describes structures that have similar functions via convergent evolution rather than shared ancestry?",
            answer: {
              type: "text",
              accept: ["analogous", "analogous structures", "analogous traits"],
              display: "analogous",
            },
            solution:
              "Structures shaped independently by similar selection pressures in unrelated lineages are **analogous**.",
          },
        },
        {
          title: "[HL] Allopolyploid Speciation Chromosome Accounting",
          problem:
            "Wild grass species P ({{2n = 14}}) hybridises with grass species Q ({{2n = 16}}). Explain why the F₁ hybrid is sterile, state the chromosome number of the fertile allopolyploid produced after spontaneous genome doubling, and explain why the new species cannot interbreed successfully with species P.",
          steps: [
            "Gametes carry haploid sets: species P contributes {{n_P = 7}} chromosomes; species Q contributes {{n_Q = 8}} chromosomes.",
            "F₁ hybrid somatic cells have {{7 + 8 = 15}} chromosomes. Because the 7 P chromosomes and 8 Q chromosomes are non-homologous, they cannot pair into bivalents in meiosis I → **sterile**.",
            "Spontaneous **non-disjunction / genome doubling** doubles every chromosome: {{2 * 15 = 30}} chromosomes (15 matching homologous pairs → fertile gametes with {{15}} chromosomes).",
            "Backcrossing with species P combines a {{15}}-chromosome gamete with a {{7}}-chromosome gamete, producing a {{22}}-chromosome hybrid whose 8 Q chromosomes still lack homologues → sterile offspring (**postzygotic reproductive isolation**).",
          ],
          answer: "Sterile F₁ has 15 unpaired chromosomes; fertile allotetraploid has 30 chromosomes; backcross with P gives sterile 22-chromosome offspring.",
          yourTurn: {
            question:
              "[HL] Plant species X ({{2n = 10}}) hybridises with plant species Y ({{2n = 18}}). Following spontaneous genome doubling (allopolyploidy) that restores fertility, how many chromosomes are present in a somatic cell of the new fertile species?",
            answer: { type: "number", value: 28, display: "28" },
            solution:
              "Gametes have {{n_X = 5}} and {{n_Y = 9}}; sterile F₁ hybrid has {{5 + 9 = 14}}; genome doubling gives {{2 * 14 = 28}} chromosomes.",
          },
        },
      ],
      keyPoints: [
        "Evolution is heritable change in populations across generations; selective breeding, sequence data, and homology all confirm descent with modification.",
        "Homologous structures (e.g. pentadactyl limbs) show divergent evolution from a shared ancestor; analogous structures (e.g. insect vs bird wings) show convergent evolution.",
        "Allopatric speciation begins with geographical isolation halting gene flow (e.g. chimpanzees and bonobos across the Congo River).",
        "[HL] Sympatric speciation occurs without a physical barrier via temporal isolation (*Howea* palms), behavioural isolation, or instant chromosomal polyploidy.",
        "[HL] Adaptive radiation (e.g. Darwin's finches) rapidly diversifies one ancestral lineage into many ecological niches; allopolyploidy restores fertility in interspecific plant hybrids (*Triticum*, *Allium*).",
      ],
      whyItWorks:
        "Why is polyploidy common in flowering plants (estimated >30% of extant angiosperms) yet extremely rare in mammals? Plants can often **self-pollinate** or reproduce vegetatively — so a single newly doubled tetraploid plant can found a breeding population without needing a second rare tetraploid mate — whereas mammals rely on precise X/Y sex-chromosome dosage balance that breaks down if whole chromosome sets double.",
      strategies: [
        "When writing an IB speciation explanation, hit the exact 4-step chain: **(1) isolation halts gene flow → (2) different mutations & selection pressures act on each subpopulation → (3) allele frequencies diverge over generations → (4) reproductive isolation prevents fertile interbreeding even if reunited**.",
        "Never say an organism 'needed to adapt' or 'chose to evolve' — mutations arise randomly, and natural selection filters heritable variation.",
        "For [HL] polyploidy questions, always trace **gamete chromosome counts ({{n}})** first before summing hybrids and doubling!",
      ],
      thinkDeeper:
        "If two previously allopatric populations of birds come back into geographic contact after 500,000 years and produce hybrids with reduced survival, how could natural selection actually accelerate the evolution of stronger **behavioural isolation** (a process called reinforcement)?",
    },

    // =========================================================================
    // SECTION 4: A4.2 (SL)
    // =========================================================================
    {
      id: "conservation-biodiversity",
      heading: "A4.2 Biodiversity Crisis, Simpson's Index & Conservation",
      level: "SL",
      discovery: {
        problem:
          "Two rainforest plots each contain exactly 5 tree species and 100 trees total. Plot A has 20 trees of every species; Plot B has 80 trees of one invasive species and 5 trees each of the other four. Both have the same species richness (5). If a specialist fungal blight kills the single dominant species, which plot collapses — and how can a single number capture this hidden vulnerability?",
        idea:
          "Plot B loses 80% of its canopy in a single blight outbreak, whereas Plot A retains 80% of its trees! Biodiversity therefore depends on BOTH **species richness** (number of species) AND **species evenness** (how equitably individuals are distributed across species). **Simpson's reciprocal diversity index ({{D}})** combines both: Plot A scores {{D = 5.21}}, while dominated Plot B scores only {{D = 1.55}}.",
      },
      body: `### Three Levels of Biodiversity
**Biodiversity** encompasses the variety of life across three nested levels:
1. **Ecosystem diversity**: the range of habitats, communities, and abiotic environments within a region or across the biosphere (e.g. mangroves, coral reefs, peat swamps, primary dipterocarp forests).
2. **Species diversity**: combines **species richness** (the count of different species present, {{S}}) and **species evenness** (the relative abundance of each species).
3. **Genetic diversity**: the variety of alleles and genotypes within populations of a species — essential for evolutionary resilience against novel pathogens and environmental change.

### The Anthropogenic Biodiversity Crisis
Over the past ~540 million years, fossil records show biodiversity generally rising despite five natural mass extinctions (such as the End-Cretaceous asteroid impact 66 Ma ago). Today, however, global assessments (IPBES, IUCN Red List) document extinction rates **100 to 1,000 times** higher than natural background rates — driven by human activity:
- **Documented anthropogenic extinctions & ecosystem losses**: the North Island giant moa (*Dinornis novaezealandiae*, overhunted in New Zealand), the Caribbean monk seal (*Neomonachus tropicalis*, overexploited and disturbed), and massive clearance of mixed dipterocarp tropical rainforests in Southeast Asia for agriculture and logging.
- **Five major drivers (HIPPO)**:
  1. **Habitat destruction & fragmentation** (deforestation, agriculture, urbanisation — the single largest driver).
  2. **Invasive alien species** (outcompeting or preying on naive native species, e.g. brown tree snake in Guam, cane toad in Australia).
  3. **Pollution** (eutrophication, plastics, pesticides, oil spills, ocean acidification).
  4. **Overexploitation** (overfishing, illegal wildlife trade/poaching, unsustainable logging).
  5. **Climate change** (shifting thermal/rainfall envelopes, marine heatwaves causing coral bleaching).

### Simpson's Reciprocal Diversity Index ({{D}})
IB Biology uses **Simpson's reciprocal diversity index** to quantify species diversity from quadrat or transect counts:

{{D = (N(N - 1)) / (Σ n(n - 1))}}
where:
- {{N}} = total number of individuals of **all** species counted ({{N = Σ n}})
- {{n}} = number of individuals of each individual species

**How to interpret {{D}}:**
- The **minimum** value is {{D = 1}} (a monoculture with only one species present).
- A **higher {{D}}** indicates **greater species diversity** (higher richness and/or higher evenness) — typically associated with an undisturbed, mature, resilient ecosystem.
- A **lower {{D}}** indicates dominance by one or a few tolerant species — often signalling pollution, recent disturbance, extreme abiotic stress, or monoculture agriculture.
- Always compare {{D}} across **similar habitat types and standardised sampling effort** (same quadrat area, season, and taxonomic scope).

### Conservation Strategies: In-Situ vs Ex-Situ
Because no single approach rescues every threatened species, conservation biology combines **in-situ** and **ex-situ** strategies:

| Approach | Core Examples | Major Strengths | Key Limitations |
|---|---|---|---|
| **In-situ** (within natural habitat) | National parks, marine protected areas (MPAs), habitat corridors, invasive-species control, **rewilding** | Preserves intact ecosystems, food webs, natural behaviours, evolutionary adaptation, and larger populations | Vulnerable to climate change, poaching, edge effects, and funding/enforcement gaps |
| **Ex-situ** (outside natural habitat) | **Seed banks** (e.g. Svalbard Global Seed Vault), botanical gardens, zoos, captive breeding studbooks, cryopreservation | Protects critically tiny populations from imminent extinction; stores massive plant genetic diversity compactly | Expensive for animals; genetic bottlenecks/inbreeding; loss of wild foraging/predator-avoidance behaviours; recalcitrant tropical seeds cannot be frozen easily |

- **Rewilding** restores natural ecosystem processes and trophic cascades (e.g. reintroducing keystone predators or herbivores, removing dams/drainage ditches) so ecosystems become self-sustaining with minimal ongoing human management.

### EDGE of Existence Prioritization
Conservation budgets cannot save every population simultaneously. The **EDGE** programme targets species that are both:
- **E**volutionarily **D**istinct: sitting on long, isolated branches of the phylogenetic tree with few or no close living relatives (losing them erases tens of millions of years of irreplaceable evolutionary history), AND
- **G**lobally **E**ndangered: listed as Critically Endangered, Endangered, or Vulnerable on the IUCN Red List.
Notable EDGE species include the **Sunda pangolin (*Manis javanica*)**, **Chinese giant salamander**, **pygmy hippopotamus**, and **kakapo**.`,
      diagram: `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Simpson's reciprocal diversity index D between an even woodland plot with D equals 5.21 and a dominated plot with D equals 1.55">
  <rect x="0" y="0" width="640" height="270" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="160" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Plot A: Even Community (D = 5.21)</text>
  <text x="480" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#991b1b">Plot B: Dominated Community (D = 1.55)</text>
  <line x1="320" y1="16" x2="320" y2="254" stroke="#cbd5e1" stroke-dasharray="4 4" stroke-width="1.5"/>

  <!-- Plot A bars (scale: max 80 -> 136px height; 1.7 px per tree; baseline y=184) -->
  <g transform="translate(36,0)">
    <line x1="0" y1="184" x2="252" y2="184" stroke="#334155" stroke-width="1.6"/>
    <line x1="0" y1="184" x2="0" y2="44" stroke="#334155" stroke-width="1.6"/>
    <line x1="0" y1="150" x2="252" y2="150" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="0" y1="116" x2="252" y2="116" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="0" y1="48" x2="252" y2="48" stroke="#e2e8f0" stroke-width="1"/>
    <text x="-6" y="153" text-anchor="end" font-size="9.5" fill="#64748b">20</text>
    <text x="-6" y="119" text-anchor="end" font-size="9.5" fill="#64748b">40</text>
    <text x="-6" y="51" text-anchor="end" font-size="9.5" fill="#64748b">80</text>

    <rect x="16" y="150" width="32" height="34" rx="4" fill="#10b981"/>
    <rect x="64" y="150" width="32" height="34" rx="4" fill="#0ea5e9"/>
    <rect x="112" y="150" width="32" height="34" rx="4" fill="#8b5cf6"/>
    <rect x="160" y="150" width="32" height="34" rx="4" fill="#f59e0b"/>
    <rect x="208" y="150" width="32" height="34" rx="4" fill="#ec4899"/>

    <text x="32" y="144" text-anchor="middle" font-size="10" font-weight="700" fill="#065f46">20</text>
    <text x="80" y="144" text-anchor="middle" font-size="10" font-weight="700" fill="#0369a1">20</text>
    <text x="128" y="144" text-anchor="middle" font-size="10" font-weight="700" fill="#5b21b6">20</text>
    <text x="176" y="144" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">20</text>
    <text x="224" y="144" text-anchor="middle" font-size="10" font-weight="700" fill="#9d174d">20</text>

    <text x="32" y="198" text-anchor="middle" font-size="9.5" fill="#334155">Sp 1</text>
    <text x="80" y="198" text-anchor="middle" font-size="9.5" fill="#334155">Sp 2</text>
    <text x="128" y="198" text-anchor="middle" font-size="9.5" fill="#334155">Sp 3</text>
    <text x="176" y="198" text-anchor="middle" font-size="9.5" fill="#334155">Sp 4</text>
    <text x="224" y="198" text-anchor="middle" font-size="9.5" fill="#334155">Sp 5</text>

    <rect x="10" y="209" width="234" height="44" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
    <text x="127" y="226" text-anchor="middle" font-size="10" font-weight="700" fill="#065f46">S = 5, N = 100, Σn(n−1) = 5 × 380 = 1900</text>
    <text x="127" y="243" text-anchor="middle" font-size="10.5" font-weight="800" fill="#047857">D = 9900 / 1900 = 5.21 (High resilience)</text>
  </g>

  <!-- Plot B bars -->
  <g transform="translate(356,0)">
    <line x1="0" y1="184" x2="252" y2="184" stroke="#334155" stroke-width="1.6"/>
    <line x1="0" y1="184" x2="0" y2="44" stroke="#334155" stroke-width="1.6"/>
    <line x1="0" y1="150" x2="252" y2="150" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="0" y1="116" x2="252" y2="116" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="0" y1="48" x2="252" y2="48" stroke="#e2e8f0" stroke-width="1"/>
    <text x="-6" y="153" text-anchor="end" font-size="9.5" fill="#64748b">20</text>
    <text x="-6" y="119" text-anchor="end" font-size="9.5" fill="#64748b">40</text>
    <text x="-6" y="51" text-anchor="end" font-size="9.5" fill="#64748b">80</text>

    <rect x="16" y="48" width="32" height="136" rx="4" fill="#ef4444"/>
    <rect x="64" y="175" width="32" height="9" rx="3" fill="#0ea5e9"/>
    <rect x="112" y="175" width="32" height="9" rx="3" fill="#8b5cf6"/>
    <rect x="160" y="175" width="32" height="9" rx="3" fill="#f59e0b"/>
    <rect x="208" y="175" width="32" height="9" rx="3" fill="#ec4899"/>

    <text x="32" y="42" text-anchor="middle" font-size="10" font-weight="700" fill="#b91c1c">80</text>
    <text x="80" y="169" text-anchor="middle" font-size="10" font-weight="700" fill="#0369a1">5</text>
    <text x="128" y="169" text-anchor="middle" font-size="10" font-weight="700" fill="#5b21b6">5</text>
    <text x="176" y="169" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">5</text>
    <text x="224" y="169" text-anchor="middle" font-size="10" font-weight="700" fill="#9d174d">5</text>

    <text x="32" y="198" text-anchor="middle" font-size="9.5" fill="#334155">Sp 1</text>
    <text x="80" y="198" text-anchor="middle" font-size="9.5" fill="#334155">Sp 2</text>
    <text x="128" y="198" text-anchor="middle" font-size="9.5" fill="#334155">Sp 3</text>
    <text x="176" y="198" text-anchor="middle" font-size="9.5" fill="#334155">Sp 4</text>
    <text x="224" y="198" text-anchor="middle" font-size="9.5" fill="#334155">Sp 5</text>

    <rect x="10" y="209" width="234" height="44" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.2"/>
    <text x="127" y="226" text-anchor="middle" font-size="10" font-weight="700" fill="#991b1b">S = 5, N = 100, Σn(n−1) = 6320 + 80 = 6400</text>
    <text x="127" y="243" text-anchor="middle" font-size="10.5" font-weight="800" fill="#b91c1c">D = 9900 / 6400 = 1.55 (Low evenness)</text>
  </g>
</svg>`,
      diagramCaption:
        "Both plots share identical species richness (S = 5) and total sample size (N = 100), yet Plot A's even abundances yield a Simpson's reciprocal index more than three times higher than dominated Plot B.",
      workedExamples: [
        {
          title: "Calculating Simpson's Reciprocal Diversity Index (D)",
          problem:
            "Students sample a rocky-shore tide pool and record 12 limpets, 10 barnacles, 8 periwinkles, and 10 sea anemones. Calculate Simpson's reciprocal diversity index {{D}} to 2 decimal places.",
          steps: [
            "Find total number of individuals: {{N = 12 + 10 + 8 + 10 = 40}}.",
            "Calculate the numerator: {{N(N - 1) = 40 * 39 = 1560}}.",
            "Calculate {{n(n - 1)}} for each species: limpets {{12 * 11 = 132}}; barnacles {{10 * 9 = 90}}; periwinkles {{8 * 7 = 56}}; anemones {{10 * 9 = 90}}.",
            "Sum the denominator: {{Σ n(n - 1) = 132 + 90 + 56 + 90 = 368}}.",
            "Divide: {{D = 1560 / 368 = 4.239... ≈ 4.24}}.",
          ],
          answer: "{{D = 4.24}}",
          yourTurn: {
            question:
              "A clean freshwater stream quadrat contains 6 mayfly larvae, 4 caddisfly larvae, and 2 stonefly larvae. Calculate Simpson's reciprocal diversity index {{D}}.",
            answer: { type: "number", value: 3, tolerance: 0.02, display: "3" },
            solution:
              "{{N = 6 + 4 + 2 = 12}}, so {{N(N - 1) = 12 * 11 = 132}}. {{Σ n(n - 1) = (6 * 5) + (4 * 3) + (2 * 1) = 30 + 12 + 2 = 44}}. Thus {{D = 132 / 44 = 3}}.",
          },
        },
        {
          title: "Evaluating In-Situ, Ex-Situ & EDGE Conservation",
          problem:
            "The Sunda pangolin (*Manis javanica*) is Critically Endangered due to poaching and habitat fragmentation in Southeast Asia, and pangolins are the sole surviving family in order Pholidota. Justify why it receives top EDGE priority and suggest one in-situ and one ex-situ measure.",
          steps: [
            "**EDGE justification**: It is both **Evolutionarily Distinct** (few close living relatives in order Pholidota, representing millions of years of unique phylogeny) AND **Globally Endangered** (IUCN Critically Endangered).",
            "**In-situ measure**: Establish wildlife corridors (e.g. eco-bridges over roads like Singapore's Eco-Link@BKE) and strengthen anti-poaching enforcement inside protected primary forest reserves.",
            "**Ex-situ measure**: Maintain veterinary rescue/rehabilitation centres and international captive-breeding studbooks (plus cryopreserved genetic tissue banks) to safeguard genetic diversity while wild threats are reduced.",
          ],
          answer:
            "High EDGE priority due to phylogenetic uniqueness (order Pholidota) + Critically Endangered status; combine forest reserves/eco-bridges (in-situ) with captive breeding/cryopreservation (ex-situ).",
          yourTurn: {
            question:
              "What two-word term describes conservation methods carried out outside an organism's natural habitat, such as seed banks or captive breeding zoos?",
            answer: {
              type: "text",
              accept: ["ex-situ", "ex situ", "ex-situ conservation", "ex situ conservation"],
              display: "ex-situ",
            },
            solution:
              "**Ex-situ** conservation protects species outside their natural ecosystems (whereas *in-situ* protects them within natural habitats).",
          },
        },
      ],
      keyPoints: [
        "Biodiversity operates at three levels: ecosystem diversity, species diversity (richness + evenness), and genetic diversity.",
        "Current anthropogenic extinction rates exceed natural background rates by 100–1,000×, driven mainly by habitat loss, invasive species, pollution, overexploitation, and climate change.",
        "Simpson's reciprocal diversity index {{D = (N(N - 1)) / (Σ n(n - 1))}} starts at 1 (monoculture) and increases with both higher species richness and greater evenness.",
        "Effective conservation blends in-situ approaches (protected reserves, corridors, rewilding) with ex-situ safety nets (seed banks, zoos, cryopreservation).",
        "EDGE prioritizes species that are simultaneously Evolutionarily Distinct and Globally Endangered.",
      ],
      whyItWorks:
        "Look closely at the probability inside Simpson's formula: {{(Σ n(n - 1)) / (N(N - 1))}} is the exact probability that two individuals picked at random without replacement belong to the **same species**. Taking its reciprocal turns that 'same-species chance' into an **effective number of equally abundant species** — which is why 5 perfectly even species give {{D ≈ 5}} while a dominated plot drops near 1!",
      strategies: [
        "Always check your Simpson's {{D}} answer with a sanity bound: {{D}} can NEVER be less than 1, and for large {{N}} it should be close to or slightly above the number of abundant species (never 0.23 — if you get less than 1, you inverted the fraction!).",
        "Make a tidy three-column scratch table (`Species | n | n(n−1)`) before dividing — the #1 arithmetic slip in Paper 2 is mis-adding {{N}} or forgetting to subtract 1.",
        "In 'Evaluate conservation strategies' 6–8 mark questions, ALWAYS weigh **both** in-situ and ex-situ strengths and limitations, and link back to **genetic diversity** and **long-term habitat viability**.",
      ],
      thinkDeeper:
        "Why do tropical rainforest seeds (such as dipterocarps and mangoes) often fail in frozen ex-situ seed banks like Svalbard, making **in-situ forest protection** irreplaceable for equatorial biomes?",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Define a species under the biological species concept, and name two limitations.",
        back: "A group of organisms that can interbreed in nature to produce **fertile offspring**. Limitations: fails for asexual organisms (e.g. bacteria), extinct fossils, horizontal gene transfer, and partially fertile hybrids.",
        level: "SL",
      },
      {
        front: "What are the formatting rules of Linnaeus's binomial nomenclature?",
        back: "*Genus species*: Genus capitalised, species epithet lowercase, *italicised* in print (or underlined when handwritten), e.g. *Homo sapiens*.",
        level: "SL",
      },
      {
        front: "How is a karyogram constructed, and what two major clinical features does it reveal?",
        back: "Stained **metaphase** chromosomes are paired and ordered by size, centromere position, and G-banding. Reveals **biological sex** (XX vs XY) and **aneuploidies** such as trisomy 21 (Down syndrome, 47 chromosomes).",
        level: "SL",
      },
      {
        front: "Distinguish continuous from discontinuous variation.",
        back: "**Continuous**: unbroken range (normal curve), polygenic + environmental influence (e.g. height). **Discontinuous**: discrete categories, one or a few genes, little environmental effect (e.g. ABO blood group).",
        level: "SL",
      },
      {
        front: "What three cytogenetic pieces of evidence show human chromosome 2 formed by fusing ape chromosomes 2A and 2B?",
        back: "(1) Matching G-banding patterns with ape 2A & 2B, (2) **vestigial internal telomere repeats** (TTAGGG) at band 2q13, and (3) a **second inactivated centromere** alongside the active centromere.",
        level: "HL",
      },
      {
        front: "Distinguish DNA barcoding from environmental DNA (eDNA).",
        back: "**DNA barcoding**: sequencing a short standardised marker gene (*COI* in animals, *rbcL* in plants) to identify specimens. **eDNA**: extracting shed trace DNA from water/soil/air to detect species non-invasively.",
        level: "HL",
      },
      {
        front: "Define a clade and explain the 'one-snip test'.",
        back: "A **monophyletic group** comprising a single ancestral species and **all** of its descendants. Cutting one branch on a cladogram removes every member of the clade and nothing else.",
        level: "HL",
      },
      {
        front: "What molecular evidence established the Three Domains (Bacteria, Archaea, Eukarya), and which two are closest?",
        back: "**16S / 18S rRNA** base sequences (Carl Woese). **Archaea and Eukarya** share a more recent common ancestor than either shares with Bacteria.",
        level: "HL",
      },
      {
        front: "How do Archaea and Bacteria differ in cell wall and membrane chemistry?",
        back: "**Bacteria**: peptidoglycan cell walls and ester-linked unbranched membrane lipids. **Archaea**: no peptidoglycan and ether-linked branched membrane lipids.",
        level: "HL",
      },
      {
        front: "State the principle of parsimony and the rule of node-rotation invariance in cladistics.",
        back: "**Parsimony**: choose the cladogram requiring the fewest evolutionary changes. **Rotation invariance**: spinning branches around an internal node does not alter evolutionary relationships.",
        level: "HL",
      },
      {
        front: "Why was the figwort family (*Scrophulariaceae*) reclassified?",
        back: "Chloroplast DNA sequencing showed its traditional floral similarities were **analogous** (convergent evolution); >80% of genera were moved into other families to preserve monophyletic clades.",
        level: "HL",
      },
      {
        front: "Contrast homologous and analogous structures with one classic IB example each.",
        back: "**Homologous**: shared ancestry, divergent evolution — e.g. tetrapod **pentadactyl limb**. **Analogous**: no shared trait ancestor, convergent evolution — e.g. wings of insects vs birds, or streamlined bodies of sharks vs dolphins.",
        level: "SL",
      },
      {
        front: "Contrast allopatric and sympatric speciation.",
        back: "**Allopatric**: physical/geographical barrier halts gene flow (e.g. Congo River splitting chimpanzees & bonobos). **Sympatric [HL]**: reproductive isolation arises in the same habitat via temporal/behavioural isolation or polyploidy.",
        level: "SL",
      },
      {
        front: "Explain why an allopolyploid plant is fertile while its initial F₁ interspecific hybrid is sterile.",
        back: "The F₁ hybrid inherits unpaired non-homologous chromosomes ({{n_A + n_B}}) that fail meiosis I. Spontaneous **genome doubling** gives every chromosome a homologous partner ({{2(n_A + n_B)}}), restoring meiosis and creating instant reproductive isolation.",
        level: "HL",
      },
      {
        front: "Write Simpson's reciprocal diversity index formula and explain what a high value means.",
        back: "{{D = (N(N - 1)) / (Σ n(n - 1))}}. Minimum is 1 (monoculture). A **higher {{D}}** reflects greater species richness and/or higher evenness, indicating a more diverse, resilient community.",
        level: "SL",
      },
      {
        front: "What does EDGE stand for in conservation prioritization, and why is it used?",
        back: "**E**volutionarily **D**istinct and **G**lobally **E**ndangered. Prioritises threatened species with few close living relatives (e.g. Sunda pangolin, Chinese giant salamander) to conserve irreplaceable evolutionary history.",
        level: "SL",
      },
    ],
    mustKnow: [
      "Diploid somatic cells carry homologous pairs ({{2n}}); haploid gametes carry one set ({{n}}). Neither chromosome number nor genome size predicts organism complexity.",
      "Trisomy 21 (Down syndrome, 47 chromosomes) results from meiotic non-disjunction producing an {{n + 1}} gamete, diagnosed from a stained metaphase karyogram.",
      "Evolution is heritable change in allele frequencies of a population across generations — evidenced by DNA/protein sequences, selective breeding, homologous pentadactyl limbs, and convergent analogous traits.",
      "Allopatric speciation requires a physical barrier stopping gene flow, followed by independent mutation, drift, and natural selection until reproductive isolation is complete.",
      "[HL] Cladistics groups taxa strictly into monophyletic clades using synapomorphies and sequence data; Archaea are sister to Eukarya based on rRNA sequencing.",
      "[HL] Molecular clocks assume an approximately constant neutral mutation rate calibrated by dated fossils; distinguish pairwise vs per-lineage substitution rates.",
      "[HL] Sympatric speciation occurs without geographic barriers via temporal/behavioural isolation (e.g. *Howea* palms) or rapid plant polyploidy (*Triticum*, *Allium*).",
      "Biodiversity has three levels: ecosystem, species (richness + evenness), and genetic diversity.",
      "Simpson's reciprocal diversity index {{D = (N(N - 1)) / (Σ n(n - 1))}} is always {{>= 1}}; higher {{D}} means greater richness and/or more even species abundances.",
      "Effective conservation combines in-situ protection (reserves, corridors, rewilding) with ex-situ backups (seed banks, captive breeding) and EDGE prioritisation.",
    ],
    misconceptions: [
      {
        wrong: "Species with more chromosomes or larger genomes are more complex and 'more evolved'.",
        right: "Chromosome number and genome size do NOT reflect complexity: humans have {{2n = 46}} (~3.1 Gbp), whereas the adder's-tongue fern has {{2n = 1260}} and *Paris japonica* has ~149 Gbp.",
        level: "SL",
      },
      {
        wrong: "Because Bacteria and Archaea are both prokaryotes, they are each other's closest evolutionary relatives.",
        right: "rRNA sequencing shows **Archaea and Eukarya** share a more recent common ancestor than either shares with Bacteria; 'prokaryote' is a paraphyletic grade, not a clade.",
        level: "HL",
      },
      {
        wrong: "Two taxa printed side-by-side at the top of a cladogram must be closest relatives.",
        right: "Tip adjacency is meaningless because branches rotate freely around nodes. Always trace downward to find the **most recent shared internal node**.",
        level: "HL",
      },
      {
        wrong: "Individual animals evolve new adaptations because they 'need' them to survive a new environment.",
        right: "Individuals cannot alter their own genome to meet a need; random mutations create heritable variation, and **populations** evolve over generations via differential survival and reproduction.",
        level: "SL",
      },
      {
        wrong: "Wings of insects, birds, and bats are homologous structures because they all perform flight.",
        right: "Insect wings (chitinous cuticle) and vertebrate wings (tetrapod forelimbs) evolved independently — they are **analogous** (convergent). Note that bird and bat forelimbs are homologous *as tetrapod limbs*, though powered flight evolved independently in each!",
        level: "SL",
      },
      {
        wrong: "Higher species richness automatically guarantees a higher Simpson's diversity index {{D}}.",
        right: "Simpson's {{D}} depends on **both** richness and **evenness**: a 4-species plot with equal counts ({{D ≈ 4.1}}) beats a 6-species plot heavily dominated by one invasive species ({{D ≈ 1.4}}).",
        level: "SL",
      },
      {
        wrong: "Ex-situ conservation (zoos and seed banks) is always better than in-situ reserves because organisms are protected from predators.",
        right: "In-situ conservation is preferred as the primary strategy because it maintains whole ecosystems, natural behaviours, evolutionary interactions, and recalcitrant tropical species; ex-situ is a vital emergency supplement.",
        level: "SL",
      },
      {
        wrong: "A sterile interspecific plant hybrid is an evolutionary dead end that can never produce a new species.",
        right: "Spontaneous **non-disjunction / genome doubling (allopolyploidy)** supplies every chromosome with a homologous partner, turning a sterile hybrid into a fertile new species in one generation.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Writing binomial names with both words capitalised (*Homo Sapiens*) or neither underlined/italicised — always capitalise ONLY the genus (*Homo sapiens*).",
      "Inverting Simpson's reciprocal index to get a decimal below 1 (computing {{Σ n(n - 1) / N(N - 1)}}) or forgetting the {{− 1}} in {{N(N - 1)}} and {{n(n - 1)}}.",
      "Counting a karyogram with trisomy 21 as '46 + 3 = 49 chromosomes' instead of replacing one pair of 2 with a triplet of 3 (**47 total**).",
      "Confusing **homologous** (divergent evolution, shared ancestor) with **analogous** (convergent evolution, similar selection pressure) when discussing marine mammals vs fish or cacti vs euphorbias.",
      "In cladistics [HL], calling a group containing a common ancestor plus only *some* of its descendants a 'clade' — it MUST include **all** descendants to be monophyletic.",
      "Forgetting to double a **per-lineage** molecular-clock substitution rate when computing time from **pairwise** differences between two species.",
      "Describing allopatric speciation without explicitly stating that the barrier **halts gene flow** and that populations eventually become **reproductively isolated**.",
      "Conflating species richness (count of species) with biodiversity as a whole — IB mark schemes expect explicit mention of **evenness**, **genetic diversity**, and **ecosystem diversity** where relevant.",
    ],
    mnemonics: [
      {
        topic: "Linnaean Taxonomic Hierarchy",
        device: "Dear King Philip Came Over For Good Soup",
        explanation: "**D**omain → **K**ingdom → **P**hylum → **C**lass → **O**rder → **F**amily → **G**enus → **S**pecies.",
        level: "SL",
      },
      {
        topic: "Five Anthropogenic Biodiversity Drivers",
        device: "HIPPO (+ Climate)",
        explanation: "**H**abitat loss, **I**nvasive species, **P**ollution, **P**opulation growth, **O**verexploitation — amplified by **Climate change**.",
        level: "SL",
      },
      {
        topic: "Three Domains Membrane & Wall Chemistry",
        device: "Bacteria = Ester + Peptidoglycan; Archaea = Ether + Extremophiles",
        explanation: "Link **A**rchaea with **E**ther-linked branched lipids (no peptidoglycan) and closer ancestry to **E**ukarya.",
        level: "HL",
      },
      {
        topic: "Conservation Prioritization",
        device: "EDGE = Unique Branch + High Risk",
        explanation: "**E**volutionarily **D**istinct (isolated phylogenetic branch) + **G**lobally **E**ndangered (IUCN threat category).",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Bukit Timah Nature Reserve & the Sunda Pangolin (Singapore)",
        detail:
          "Just 163 hectares of primary dipterocarp rainforest in Singapore's Bukit Timah Nature Reserve contain more native tree species than the entire North American continent. The Eco-Link@BKE wildlife bridge reconnects Bukit Timah with the Central Catchment to restore gene flow for EDGE-listed **Sunda pangolins (*Manis javanica*)**.",
        emoji: "🌳",
      },
      {
        title: "The Congo River Ape Divide",
        detail:
          "Bonobos (*Pan paniscus*) and common chimpanzees (*Pan troglodytes*) live on opposite banks of the Congo River in Central Africa. Because neither species crosses deep rivers, allopatric divergence over ~1–2 million years created starkly different social behaviours — matriarchal, peaceful bonobos vs patriarchal, territorial chimpanzees.",
        emoji: "🦍",
      },
      {
        title: "Svalbard Global Seed Vault (Arctic Ex-Situ Backup)",
        detail:
          "Buried 120 metres inside frozen Arctic sandstone on Spitsbergen, Svalbard stores over 1.2 million duplicate seed samples from national gene banks at −18 °C — safeguarding crop genetic diversity against war, natural disasters, and climate change.",
        emoji: "❄️",
      },
      {
        title: "eDNA Metabarcoding on Tropical Coral Reefs",
        detail:
          "Marine biologists now sample 2 litres of seawater across Southeast Asian reefs and sequence shed mitochondrial DNA (*COI* / 12S rRNA), detecting cryptic sharks, eels, and endangered rays that traditional visual scuba transects miss.",
        emoji: "🐠",
      },
      {
        title: "Bread Wheat: Hexaploid Powerhouse (*Triticum aestivum*)",
        detail:
          "Modern bread wheat ({{6n = 42}}) arose ~8,000–10,000 years ago through two successive natural hybridisations and genome doublings (allopolyploidy) among three diploid wild grass species ({{2n = 14}} each), producing large, nutrient-rich grains that feed billions.",
        emoji: "🌾",
      },
      {
        title: "The Figwort Family DNA Shake-Up",
        detail:
          "Chloroplast DNA sequencing revealed that traditional *Scrophulariaceae* lumped unrelated flowers shaped by similar bee pollinators. Reclassifying foxgloves (*Digitalis*) and snapdragons (*Antirrhinum*) into Plantaginaceae became the textbook proof that cladistics overrides superficial morphology.",
        emoji: "🌸",
      },
    ],
    videos: [
      {
        title: "IB Biology A3.1 Diversity of Organisms (FA2025)",
        channel: "Sirius Revision / Alex Lee",
        url: "https://www.youtube.com/results?search_query=IB+Biology+A3.1+diversity+of+organisms+karyograms+genomes",
      },
      {
        title: "IB Biology A3.2 Classification & Cladistics HL (FA2025)",
        channel: "Cheryl Hickman / IB Biology",
        url: "https://www.youtube.com/results?search_query=IB+Biology+A3.2+classification+cladistics+molecular+clocks",
      },
      {
        title: "IB Biology A4.1 Evolution, Speciation & Polyploidy",
        channel: "Bozeman Science / IB Biology",
        url: "https://www.youtube.com/results?search_query=IB+Biology+A4.1+evolution+speciation+polyploidy+adaptive+radiation",
      },
      {
        title: "IB Biology A4.2 Conservation & Simpson's Reciprocal Diversity Index",
        channel: "Amoeba Sisters / IB Biology",
        url: "https://www.youtube.com/results?search_query=IB+Biology+A4.2+conservation+biodiversity+Simpsons+diversity+index",
      },
      {
        title: "Human Chromosome 2 Fusion Explained",
        channel: "Stated Clearly",
        url: "https://www.youtube.com/results?search_query=human+chromosome+2+fusion+evidence+telomeres+centromere",
      },
    ],
    formulas: [
      {
        name: "Simpson's Reciprocal Diversity Index",
        formula: "{{D = (N(N - 1)) / (Σ n(n - 1))}}",
        note: "N = total organisms of all species; n = count of each species. Always D ≥ 1; higher D = greater richness and/or evenness.",
        level: "SL",
      },
      {
        name: "Diploid–Haploid Relationship",
        formula: "{{n = (2n) / 2}}",
        note: "Meiosis halves diploid somatic chromosome number (2n) to produce haploid gametes (n).",
        level: "SL",
      },
      {
        name: "Trisomy Chromosome Count",
        formula: "{{2n + 1}}",
        note: "Produced by fusion of a non-disjunction gamete (n + 1) with a normal gamete (n), e.g. Down syndrome = 47.",
        level: "SL",
      },
      {
        name: "Sterile Interspecific Hybrid Count",
        formula: "{{n_A + n_B}}",
        note: "Sum of one haploid set from Species A and one from Species B (e.g. horse 32 + donkey 31 = mule 63).",
        level: "SL",
      },
      {
        name: "Fertile Allotetraploid Chromosome Count",
        formula: "{{2(n_A + n_B)}}",
        note: "Genome doubling restores homologous pairs for every chromosome, creating instant sympatric speciation in plants.",
        level: "HL",
      },
      {
        name: "Pairwise Molecular-Clock Divergence Time",
        formula: "{{t = d / r}}",
        note: "d = observed pairwise sequence differences; r = pairwise substitution rate (differences per Ma), calibrated by fossils.",
        level: "HL",
      },
      {
        name: "Per-Lineage Molecular-Clock Formula",
        formula: "{{t = d / (2 r_L)}}",
        note: "Use when substitution rate r_L is given per single lineage (two branches diverge simultaneously for time t).",
        level: "HL",
      },
      {
        name: "Bifurcating Cladogram Internal Nodes",
        formula: "{{nodes = k - 1}}",
        note: "A strictly bifurcating rooted cladogram with k terminal taxa always has k − 1 internal speciation nodes.",
        level: "HL",
      },
      {
        name: "Percentage Sequence Identity",
        formula: "{{% identity = ((L - d) / L) * 100}}",
        note: "L = aligned sequence length (bp or amino acids); d = number of differing positions.",
        level: "HL",
      },
      {
        name: "Maximum Simpson's D (Even Community)",
        formula: "{{D_max ≈ S}}",
        note: "For large N with S equally abundant species, D approaches S (exact finite-sample value is S(N−1)/(N−S)).",
        level: "SL",
      },
    ],
  },
};
