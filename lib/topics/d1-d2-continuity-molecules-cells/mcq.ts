import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER M1: Replication, PCR, Protein Synthesis & Mutations (15 MCQs)
  // answerIndex sequence: [2, 0, 3, 1, 0, 2, 1, 3, 2, 0, 3, 1, 0, 2, 3]
  // ===========================================================================
  {
    id: "d1-d2-continuity-molecules-cells-m1",
    title: "Paper 1A · Replication, Protein Synthesis & Mutations (SL & HL)",
    level: "SL",
    questions: [
      {
        id: "d1-d2-continuity-molecules-cells-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "dna-replication-protein-synthesis",
        strategy: "Meselson–Stahl density tracking",
        question:
          "In the Meselson–Stahl experiment, *E. coli* DNA fully labelled with heavy nitrogen (¹⁵N) was transferred to light nitrogen (¹⁴N) medium for **two** complete rounds of replication. Which CsCl density-gradient banding pattern confirms semi-conservative replication?",
        options: [
          "100% single intermediate hybrid band (¹⁵N/¹⁴N) with no light DNA",
          "25% heavy band (¹⁵N/¹⁵N) and 75% light band (¹⁴N/¹⁴N) with no hybrid",
          "50% intermediate hybrid band (¹⁵N/¹⁴N) and 50% light band (¹⁴N/¹⁴N)",
          "50% heavy band (¹⁵N/¹⁵N) and 50% intermediate hybrid band (¹⁵N/¹⁴N)",
        ],
        answerIndex: 2,
        hints: [
          "After 1 round in ¹⁴N, all duplexes are ¹⁵N/¹⁴N hybrids. Now unwind each hybrid strand and build a new ¹⁴N partner.",
        ],
        explanation:
          "At Generation 1, both strands of the single ¹⁵N/¹⁵N parent pair with new ¹⁴N strands, yielding two ¹⁵N/¹⁴N hybrids. At Generation 2, separating those four strands gives two ¹⁵N/¹⁴N hybrids (50%) and two ¹⁴N/¹⁴N light duplexes (50%). A single 100% hybrid band occurs at Generation 1, not Generation 2, and conservative replication would have left a heavy ¹⁵N/¹⁵N band.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "State",
        guideRef: "dna-replication-protein-synthesis",
        strategy: "Replication enzyme matching",
        question: "What is the primary biochemical function of **helicase** at a DNA replication fork?",
        options: [
          "Unwinding the DNA double helix and breaking hydrogen bonds between base pairs",
          "Catalysing phosphodiester bonds between incoming deoxyribonucleotides on templates",
          "Sealing nicks in the sugar–phosphate backbone between adjacent Okazaki fragments",
          "Synthesizing short complementary RNA primers to expose a free 3'-hydroxyl group",
        ],
        answerIndex: 0,
        hints: [
          "Before nucleotides can pair with a template, the two complementary strands must first be zipped apart.",
        ],
        explanation:
          "Helicase unwinds the double helix and breaks hydrogen bonds linking complementary bases (A–T, C–G), exposing single-stranded templates. Forming phosphodiester bonds is the role of DNA polymerase, sealing nicks is DNA ligase, and making RNA primers is RNA primase.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "dna-replication-protein-synthesis",
        strategy: "Antiparallel 5'→3' synthesis rule",
        question:
          "Why must the **lagging strand** be synthesized discontinuously as Okazaki fragments during DNA replication?",
        options: [
          "Helicase only unwinds the lagging template in isolated bursts behind the fork",
          "DNA ligase cannot form phosphodiester bonds unless strands are built in fragments",
          "RNA primase can only bind nucleotides along the 5'→3' template strand direction",
          "DNA strands are antiparallel and DNA polymerase III only adds bases to a 3'-OH end",
        ],
        answerIndex: 3,
        hints: [
          "Which carbon on the growing DNA strand accepts the next incoming dNTP?",
          "Apply the 5'→3' synthesis constraint to two antiparallel template strands running in opposite directions at the fork.",
        ],
        explanation:
          "Because DNA polymerase III can only catalyse nucleotide addition onto a free 3'-OH group (5'→3' synthesis), the strand oriented opposite to fork progression must be built backwards away from the fork in short primed Okazaki fragments. Helicase unwinds both strands smoothly together.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "dna-replication-protein-synthesis",
        strategy: "Lagging-strand assembly line",
        question:
          "Which enzyme removes the short RNA primers from Okazaki fragments and replaces them with DNA nucleotides?",
        options: [
          "DNA polymerase III",
          "DNA polymerase I",
          "RNA primase",
          "DNA gyrase",
        ],
        answerIndex: 1,
        hints: [
          "Distinguish the main elongating polymerase from the primer-replacing polymerase.",
          "Remember the lagging-strand sequence: Primase → Pol III → Pol I → Ligase.",
        ],
        explanation:
          "DNA polymerase I excises RNA primer nucleotides and replaces them with complementary DNA nucleotides before DNA ligase seals the final sugar–phosphate nick. DNA polymerase III performs main 5'→3' elongation and proofreading, whereas primase creates the RNA primers.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Outline",
        guideRef: "dna-replication-protein-synthesis",
        strategy: "PCR thermal cycling stages",
        question:
          "During the **Polymerase Chain Reaction (PCR)**, why is the reaction mixture heated to approximately **95 °C** at the start of each cycle?",
        options: [
          "To break hydrogen bonds and denature double-stranded DNA into single templates",
          "To activate thermostable Taq polymerase at its optimal extension temperature",
          "To allow short synthetic DNA primers to anneal cleanly to flanking sequences",
          "To break covalent phosphodiester bonds and cut target DNA into short fragments",
        ],
        answerIndex: 0,
        hints: [
          "Which bonds hold two complementary DNA strands together versus holding one backbone together?",
          "Recall the three PCR temperatures: ~95 °C (denaturation), ~55 °C (annealing), ~72 °C (extension).",
        ],
        explanation:
          "Heating to ~95 °C supplies thermal energy to disrupt hydrogen bonds between complementary bases, separating double-stranded DNA into single-stranded templates without breaking covalent phosphodiester backbones. Annealing occurs around 50–65 °C and Taq polymerase extends maximally at ~72 °C.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "dna-replication-protein-synthesis",
        strategy: "PCR exponential doubling",
        question:
          "A forensic sample starts with **3** intact copies of a target STR region. Assuming 100% amplification efficiency, how many copies exist after **5** complete PCR cycles?",
        options: [
          "30 copies",
          "48 copies",
          "96 copies",
          "243 copies",
        ],
        answerIndex: 2,
        hints: [
          "Each PCR cycle doubles the total number of target DNA copies.",
          "Evaluate {{N = N_0 * 2^n}} with {{N_0 = 3}} and {{n = 5}}.",
        ],
        explanation:
          "Using {{N = N_0 * 2^n}}, substitute {{N_0 = 3}} and {{n = 5}}: {{3 * 2^5 = 3 * 32 = 96}} copies. Computing {{3^5 = 243}} confuses the base with the initial copy count, while {{3 * 2 * 5 = 30}} treats exponential doubling as linear multiplication.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "dna-replication-protein-synthesis",
        strategy: "Electrophoresis charge & size mobility",
        question:
          "During agarose **gel electrophoresis** of digested STR DNA samples, which statement accurately describes fragment migration?",
        options: [
          "Positively charged fragments migrate toward the negative cathode; larger pieces move farthest",
          "Negatively charged fragments migrate toward the positive anode; smaller pieces move farthest",
          "Negatively charged fragments migrate toward the positive anode; larger pieces move farthest",
          "Neutral DNA fragments diffuse radially from wells at rates proportional to base composition",
        ],
        answerIndex: 1,
        hints: [
          "What electrical charge do the phosphate groups on the DNA backbone carry?",
          "Does a small molecule or a huge tangled molecule weave more easily through gel pores?",
        ],
        explanation:
          "Phosphate groups give DNA a net negative charge, pulling fragments through the gel towards the positive anode. Smaller fragments encounter less friction in the agarose mesh and therefore migrate faster and farther than larger fragments.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "dna-replication-protein-synthesis",
        strategy: "Antisense-to-mRNA base pairing",
        question:
          "A short segment of the **antisense (template) DNA strand** has the base sequence `3'-TAC-GCA-TTC-5'`. What is the complementary **mRNA** sequence transcribed from this template?",
        options: [
          "`5'-ATG-CGT-AAG-3'`",
          "`5'-UAC-GCA-UUC-3'`",
          "`5'-AUG-CGU-TTG-3'`",
          "`5'-AUG-CGU-AAG-3'`",
        ],
        answerIndex: 3,
        hints: [
          "Because the given strand is the antisense template, pair every base with its RNA complement (A→U, T→A, C→G, G→C).",
          "Check that your mRNA contains U instead of T throughout.",
        ],
        explanation:
          "Complementary RNA transcription of `3'-TAC-GCA-TTC-5'` converts `TAC → AUG`, `GCA → CGU`, and `TTC → AAG`, producing `5'-AUG-CGU-AAG-3'`. Sequences containing T represent DNA rather than mRNA, and copying `UAC-GCA-UUC` treats the antisense template as if it were the sense strand.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "dna-replication-protein-synthesis",
        strategy: "Properties of the genetic code",
        question:
          "What does it mean that the genetic code is **degenerate (redundant)**, and what biological consequence follows?",
        options: [
          "A single codon can specify several amino acids, increasing protein diversity per gene",
          "Nearly all organisms share identical codon assignments, permitting transgenic gene transfer",
          "Several different codons specify the same amino acid, buffering many third-base substitutions",
          "Adjacent codons share overlapping nucleotides, compressing gene length inside small nuclei",
        ],
        answerIndex: 2,
        hints: [
          "There are 61 amino-acid coding codons but only 20 standard amino acids.",
          "Think about why a third-base change like `CCU → CCC` can be completely silent.",
        ],
        explanation:
          "Degeneracy means multiple synonymous codons encode the same amino acid (for example, four codons specify proline), which buffers organisms against many point mutations via silent substitutions. Sharing codons across species describes universality, and the code is unambiguous (one codon never encodes two different amino acids) and non-overlapping.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "dna-replication-protein-synthesis",
        strategy: "Eukaryotic pre-mRNA splicing",
        question:
          "How does **alternative splicing** enable the ~20,000 protein-coding genes in the human genome to generate over 100,000 distinct proteins?",
        options: [
          "Spliceosomes excise introns and join different combinations of exons from one pre-mRNA",
          "Ribosomes read the same mature mRNA in three shifted reading frames simultaneously",
          "RNA polymerase transcribes both the sense and antisense strands of every structural gene",
          "Introns are selectively translated into variable polypeptide domains inside the cytosol",
        ],
        answerIndex: 0,
        hints: [
          "Which regions of pre-mRNA are kept in mature mRNA (exons) versus removed (introns)?",
          "Can the same pre-mRNA transcript keep exon 3 in one tissue and skip exon 3 in another?",
        ],
        explanation:
          "During alternative splicing, spliceosomes remove introns and splice together different subsets of exons from the same pre-mRNA, yielding tissue-specific mature mRNAs and distinct protein isoforms. Introns are non-coding regions removed prior to translation.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Describe",
        guideRef: "dna-replication-protein-synthesis",
        strategy: "Post-translational activation",
        question:
          "How is newly translated **preproinsulin** converted into biologically active human **insulin**?",
        options: [
          "Spliceosomes remove an intron from preproinsulin mRNA inside the rough ER lumen",
          "Ribosomes attach a ubiquitin chain that folds preproinsulin into an active monomer",
          "Two separate genes are translated on free ribosomes and joined by peptide bonds",
          "Proteolytic cleavage removes signal and C-peptides, leaving A and B chains linked by disulfide bonds",
        ],
        answerIndex: 3,
        hints: [
          "Is insulin activated before translation (RNA level) or after translation (polypeptide level)?",
          "Recall how mature insulin consists of two short polypeptide chains linked together by covalent disulfide bridges.",
        ],
        explanation:
          "Active insulin is produced by post-translational modification: the signal peptide is removed to form proinsulin, disulfide bonds form between cysteine residues, and proteases cleave out the central C-peptide leaving the linked A and B chains. Ubiquitin instead tags proteins for proteasome degradation.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "mutations-division-cancer",
        strategy: "Sickle-cell molecular genetics",
        question:
          "Which molecular change in the *HBB* β-globin gene directly causes **sickle-cell anaemia**?",
        options: [
          "A single-base deletion causing a frameshift from codon 6 to the end of β-globin",
          "A missense substitution changing mRNA GAG to GUG, replacing glutamic acid with valine",
          "A nonsense substitution converting codon 6 into UAG, producing a truncated β-globin",
          "A silent substitution changing mRNA GAG to GAA, altering haemoglobin folding rate",
        ],
        answerIndex: 1,
        hints: [
          "Does sickle-cell anaemia involve a single swapped amino acid or a truncated/frameshifted protein?",
          "Recall the exact hydrophilic-to-hydrophobic swap at amino acid position 6.",
        ],
        explanation:
          "Sickle-cell anaemia results from a single-base missense substitution (sense DNA `GAG → GTG`, mRNA `GAG → GUG`) that replaces charged hydrophilic glutamic acid with non-polar hydrophobic valine at position 6, causing deoxy-haemoglobin molecules to stick together into rigid fibres.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Define",
        guideRef: "mutations-division-cancer",
        strategy: "Classifying point mutations",
        question: "What characterizes a **nonsense** point mutation inside a protein-coding exon?",
        options: [
          "A base substitution converts an amino-acid codon into a premature stop codon, truncating translation",
          "A base substitution replaces one codon with a synonym encoding the exact same amino acid",
          "A single nucleotide insertion shifts every downstream triplet reading frame along the mRNA",
          "A base substitution occurs inside a non-coding intron without modifying exon splicing sites",
        ],
        answerIndex: 0,
        hints: [
          "Compare the three point-substitution outcomes: silent, missense, and nonsense.",
          "What happens if `UAC` (Tyr) mutates to `UAA`?",
        ],
        explanation:
          "A nonsense mutation replaces an amino-acid codon with one of the three stop codons (`UAA`, `UAG`, `UGA`), terminating translation early and yielding a shortened, usually non-functional polypeptide. Replacing a codon with a synonym is a silent mutation, and inserting one base causes a frameshift.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "mutations-division-cancer",
        strategy: "Reading-frame arithmetic",
        question:
          "Why is deleting **one** nucleotide near the start of a coding sequence typically far more disruptive to protein function than deleting **three** consecutive nucleotides in the same region?",
        options: [
          "Deleting one nucleotide halts RNA polymerase immediately, whereas three nucleotides allow transcription",
          "Deleting one nucleotide breaks DNA ligase repair, whereas three nucleotides are excised by Pol I",
          "Deleting one nucleotide shifts all downstream codons, whereas three nucleotides omit one amino acid",
          "Deleting one nucleotide converts a somatic mutation into a heritable germ-line mutation in gametes",
        ],
        answerIndex: 2,
        hints: [
          "How many bases make up one mRNA codon?",
          "Trace the reading frame downstream of a 1-base deletion versus a 3-base deletion.",
        ],
        explanation:
          "Because codons are non-overlapping triplets, a 1-base deletion causes a frameshift that alters virtually every amino acid downstream (and often introduces a premature stop codon). Deleting 3 consecutive bases removes a single amino acid while leaving the downstream reading frame intact.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "mutations-division-cancer",
        strategy: "CRISPR–Cas9 mechanism",
        question:
          "How does the **CRISPR–Cas9** system achieve high target specificity when editing a chosen eukaryotic gene?",
        options: [
          "Cas9 alone recognizes unique 20-base protein motifs without requiring any nucleic acid guide",
          "DNA ligase targets methylated promoter cytosines and cuts out whole exons spontaneously",
          "Taq polymerase amplifies the mutated exon while helicase selectively deletes the faulty allele",
          "A synthetic guide RNA base-pairs with the complementary DNA locus and directs Cas9 cleavage",
        ],
        answerIndex: 3,
        hints: [
          "Which component provides sequence specificity and which component actually cuts the DNA?",
          "Think about complementary RNA–DNA base pairing guiding an endonuclease.",
        ],
        explanation:
          "In CRISPR–Cas9 editing, a programmable guide RNA (gRNA) binds by complementary base pairing to the exact target DNA sequence next to a PAM motif, guiding the Cas9 endonuclease to make a precise double-strand cut for gene knockout or homology-directed repair.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M2: Cell Division, Cancer & Epigenetics (15 MCQs)
  // answerIndex sequence: [1, 3, 0, 2, 1, 0, 3, 2, 1, 3, 0, 1, 2, 0, 3]
  // ===========================================================================
  {
    id: "d1-d2-continuity-molecules-cells-m2",
    title: "Paper 1A · Cell Division, Cancer & Epigenetics (SL & HL)",
    level: "SL",
    questions: [
      {
        id: "d1-d2-continuity-molecules-cells-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "State",
        guideRef: "mutations-division-cancer",
        strategy: "Cell-cycle phase sequence",
        question:
          "During which stage of the eukaryotic cell cycle does semi-conservative DNA replication double the chromatid content of each chromosome?",
        options: [
          "Prophase of mitosis",
          "S phase of interphase",
          "G₁ phase of interphase",
          "Metaphase of mitosis",
        ],
        answerIndex: 1,
        hints: [
          "DNA must already be copied before nuclear division (mitosis) begins.",
        ],
        explanation:
          "Semi-conservative DNA replication occurs during the S (synthesis) phase of interphase so each chromosome consists of two identical sister chromatids before the cell enters G₂ and mitosis. Prophase condenses already-replicated chromatin.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "mutations-division-cancer",
        strategy: "PMAT distinguishing features",
        question: "Which set of events specifically defines **Anaphase** of mitosis?",
        options: [
          "Chromatin supercoils into visible chromosomes and the nuclear envelope disintegrates",
          "Replicated chromosomes align singly along the cell equator attached to spindle fibres",
          "Nuclear envelopes reform around chromosome clusters and chromosomes decondense",
          "Centromeres divide and shortening spindle microtubules pull sister chromatids to opposite poles",
        ],
        answerIndex: 3,
        hints: [
          "Remember IPMAT: A = Apart! Which structures separate in mitotic anaphase?",
        ],
        explanation:
          "In mitotic anaphase, centromeres split and shortening spindle microtubules pull sister chromatids (now independent daughter chromosomes) to opposite poles. Equator alignment is metaphase, nuclear breakdown is prophase, and nuclear reformation is telophase.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "mutations-division-cancer",
        strategy: "Plant vs animal cytokinesis",
        question:
          "How does **cytokinesis** in a typical plant meristem cell differ from cytokinesis in an animal cell?",
        options: [
          "Plant cells fuse Golgi vesicles at the equator to form a cell plate; animal cells pinch a cleavage furrow",
          "Plant cells constrict an actin–myosin cleavage furrow; animal cells build a cellulose cell plate",
          "Plant cells divide the cytoplasm during prophase; animal cells divide it only during interphase",
          "Plant cells perform cytokinesis without spindle fibres; animal cells require centrioles for DNA copying",
        ],
        answerIndex: 0,
        hints: [
          "Why can a flexible animal plasma membrane pinch inward while a rigid cellulose plant wall cannot?",
          "Match Golgi vesicles + cell plate to plant cells, and actin–myosin contractile ring to animal cells.",
        ],
        explanation:
          "Because rigid cellulose cell walls prevent inward pinching, plant cells deliver Golgi-derived vesicles along the equator that fuse into a cell plate and new cell wall. Animal cells use a contractile ring of actin and myosin to draw the plasma membrane inward as a cleavage furrow.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "mutations-division-cancer",
        strategy: "Mitotic index formula",
        question:
          "In a microscope field of **200** onion root-tip cells, **162** are in interphase and **38** are in prophase, metaphase, anaphase, or telophase. What is the **mitotic index**?",
        options: [
          "0.23 (23%)",
          "0.81 (81%)",
          "0.19 (19%)",
          "0.38 (38%)",
        ],
        answerIndex: 2,
        hints: [
          "Mitotic index = (cells in mitosis) ÷ (total cells observed).",
          "Divide 38 by 200 — do NOT divide by 162!",
        ],
        explanation:
          "Mitotic index = {{38 / 200 = 0.19}} (or 19%). Dividing 38 by 162 gives 0.23 (the common error of leaving dividing cells out of the denominator), while 0.81 is the proportion of non-dividing interphase cells.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "mutations-division-cancer",
        strategy: "Meiosis I crossing-over mechanics",
        question:
          "Which chromatids exchange DNA segments during **crossing over**, and in which meiotic stage does this occur?",
        options: [
          "Sister chromatids of the same chromosome exchange segments during Metaphase II",
          "Non-sister chromatids of homologous chromosomes exchange segments at chiasmata in Prophase I",
          "Non-homologous chromosomes exchange segments randomly along the equator in Metaphase I",
          "Sister chromatids of replicated chromosomes exchange segments during Anaphase I",
        ],
        answerIndex: 1,
        hints: [
          "Swapping identical sister chromatids would not generate new allele combinations.",
          "Crossing over occurs while homologous bivalents are synapsed early in Meiosis I.",
        ],
        explanation:
          "During Prophase I, homologous chromosomes synapse into bivalents and **non-sister chromatids** break and rejoin at **chiasmata**, generating recombinant chromosomes with novel allele combinations. Sister chromatids are genetically identical clones.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "mutations-division-cancer",
        strategy: "Anaphase I vs Anaphase II",
        question:
          "What is pulled to opposite poles during **Anaphase I** of meiosis, reducing chromosome number from diploid (2n) to haploid (n)?",
        options: [
          "Whole homologous chromosomes, while sister chromatids remain attached at centromeres",
          "Individual sister chromatids after centromeres split cleanly at the cell equator",
          "Randomly broken chromosomal fragments produced during telophase recombination",
          "Unreplicated single-stranded DNA templates separated directly by DNA helicase",
        ],
        answerIndex: 0,
        hints: [
          "Why is Meiosis I called the reduction division?",
          "Centromeres do NOT divide until Anaphase II.",
        ],
        explanation:
          "In Anaphase I, spindle fibres pull intact homologous chromosomes (each still composed of two sister chromatids joined at its centromere) to opposite poles, halving the chromosome number from 2n to n. Sister chromatids separate later in Anaphase II.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "mutations-division-cancer",
        strategy: "Non-disjunction & aneuploidy",
        question:
          "How does **non-disjunction** during meiosis lead to an offspring with **trisomy 21 (Down syndrome)**?",
        options: [
          "Crossing over transfers an entire extra copy of chromosome 21 onto chromosome 1",
          "Mitotic cytokinesis fails in the adult ovary, doubling all 46 chromosomes in somatic cells",
          "DNA polymerase replicates chromosome 21 twice during S phase of the fertilized zygote",
          "Homologous pair 21 or sister chromatids fail to separate, yielding an n+1 gamete fertilized normally",
        ],
        answerIndex: 3,
        hints: [
          "Count the chromosomes in the abnormal gamete versus the normal partner gamete.",
          "24 (n+1) + 23 (n) = 47 chromosomes (trisomy 21).",
        ],
        explanation:
          "Non-disjunction is the failure of homologous chromosomes (Anaphase I) or sister chromatids (Anaphase II) to separate. A gamete receiving two copies of chromosome 21 (n + 1 = 24) fused with a normal gamete (n = 23) produces a zygote with three copies of chromosome 21 (2n + 1 = 47).",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "mutations-division-cancer",
        strategy: "Random orientation power of 2",
        question:
          "A diploid insect species has {{2n = 12}} chromosomes. Ignoring crossing over, how many genetically distinct chromosome combinations can be generated per gamete by **random orientation** in Metaphase I?",
        options: [
          "24 combinations",
          "36 combinations",
          "64 combinations",
          "4096 combinations",
        ],
        answerIndex: 2,
        hints: [
          "Find the haploid number n (number of homologous pairs) before raising 2 to that power.",
          "With {{2n = 12}}, {{n = 6}}, so calculate {{2^6}}.",
        ],
        explanation:
          "Each of the {{n = 6}} homologous chromosome pairs can orient independently in 2 ways on the Metaphase I equator, giving {{2^6 = 64}} distinct gamete combinations. Raising 2 to the diploid count ({{2^12 = 4096}}) mistakenly doubles the exponent.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "mutations-division-cancer",
        strategy: "Cyclin–CDK checkpoint control",
        question:
          "How do **cyclins** control progression past eukaryotic cell-cycle checkpoints (such as G₁/S and G₂/M)?",
        options: [
          "Cyclins unwind chromatin directly by breaking hydrogen bonds at replication origins",
          "Cyclins bind and activate cyclin-dependent kinases (CDKs) to phosphorylate target proteins",
          "Cyclins hydrolyse spindle microtubules so chromatids separate rapidly into daughter cells",
          "Cyclins methylate tumour suppressor promoters whenever DNA damage occurs in interphase",
        ],
        answerIndex: 1,
        hints: [
          "Cyclins themselves are regulatory subunits — which partner enzymes do they activate?",
          "Active CDKs transfer phosphate groups onto downstream regulatory targets.",
        ],
        explanation:
          "As each cyclin accumulates past a threshold concentration, it binds and activates its partner cyclin-dependent kinase (CDK). The active cyclin–CDK complex phosphorylates specific target proteins that trigger progression into S phase or mitosis.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Compare and contrast",
        guideRef: "mutations-division-cancer",
        strategy: "Accelerator vs brake cancer model",
        question:
          "Which statement accurately contrasts **oncogenes** and mutated **tumour suppressor genes** in tumorigenesis?",
        options: [
          "Oncogenes halt mitosis permanently, while mutated tumour suppressors accelerate cyclin breakdown",
          "Both oncogenes and mutated tumour suppressors must lose both alleles to stimulate mitosis",
          "Oncogenes arise from tumour suppressor deletions, whereas proto-oncogenes trigger apoptosis",
          "Oncogenes are hyperactive division accelerators from proto-oncogenes; lost tumour suppressors remove cycle brakes",
        ],
        answerIndex: 3,
        hints: [
          "Map proto-oncogenes to the car's accelerator pedal and tumour suppressors (like p53) to the brake pedal.",
          "Does activating an oncogene require a gain-of-function or loss-of-function mutation?",
        ],
        explanation:
          "Gain-of-function mutations convert normal growth-promoting proto-oncogenes into permanently active oncogenes (stuck accelerator), whereas loss-of-function mutations in tumour suppressor genes such as *TP53* disable DNA-repair arrest and apoptosis (failed brakes).",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "gene-expression-epigenetics-hl",
        strategy: "Same genome, distinct proteome",
        question:
          "Why do a human pancreatic β-cell and a skeletal muscle fibre synthesize completely different sets of specialized proteins despite originating from the same zygote?",
        options: [
          "Differential gene expression switches cell-specific genes on or off on identical genomes",
          "Differentiated cells permanently delete all unused genes during embryonic mitotic divisions",
          "Muscle fibres and β-cells use different genetic codes with distinct codon–amino acid rules",
          "Each tissue receives a separate haploid subset of chromosomes after embryonic fertilization",
        ],
        answerIndex: 0,
        hints: [
          "Do somatic cells discard unused DNA, or do they keep the full genome and control transcription?",
        ],
        explanation:
          "Every diploid somatic cell retains the exact same genome from mitosis. Specialized phenotypes arise via differential gene expression — tissue-specific transcription factors, enhancers, and epigenetic tags selectively activate only the genes required for that cell's function.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "gene-expression-epigenetics-hl",
        strategy: "DNA methylation mechanism",
        question:
          "What is the typical transcriptional consequence of heavy **DNA methylation** across CpG islands in a gene's promoter region?",
        options: [
          "Methylated cytosines convert into uracil, creating missense codons during translation",
          "Methyl tags hinder transcription factors and condense chromatin, silencing transcription",
          "Methyl tags neutralize histone lysines, opening euchromatin and boosting RNA polymerase",
          "Methylated promoters recruit spliceosomes that excise exons before transcription initiates",
        ],
        answerIndex: 1,
        hints: [
          "Use the anchor: DNA Methylation = Mute!",
          "Does epigenetic methylation alter the base identity (C→U) or only chromatin accessibility?",
        ],
        explanation:
          "Adding methyl groups (`−CH₃`) directly to promoter cytosines blocks activator binding and recruits chromatin-condensing complexes, compacting DNA into heterochromatin and silencing transcription without altering the underlying nucleotide sequence.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "gene-expression-epigenetics-hl",
        strategy: "Electrostatic charge in nucleosomes",
        question:
          "By what electrostatic mechanism does **histone tail acetylation** increase the rate of gene transcription?",
        options: [
          "Acetyl groups add negative charges directly to cytosine bases, repelling repressor proteins",
          "Acetyl groups break covalent phosphodiester bonds so DNA unwraps permanently from histones",
          "Acetyl groups neutralize positively charged lysines, loosening attraction to negatively charged DNA",
          "Acetyl groups increase positive charge on histone tails, tightening heterochromatin around promoters",
        ],
        answerIndex: 2,
        hints: [
          "What electrical charge does the DNA phosphate backbone carry, and what charge do unacetylated lysine tails carry?",
          "What happens to electrostatic attraction when positive charges on histone tails are neutralized?",
        ],
        explanation:
          "DNA's sugar–phosphate backbone is negatively charged while unmodified histone lysine tails are positively charged. Histone acetyltransferases add neutral acetyl groups to lysines, reducing electrostatic attraction so nucleosomes loosen into open euchromatin accessible to RNA polymerase.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "gene-expression-epigenetics-hl",
        strategy: "Epigenetic drift in twins",
        question:
          "Genome-wide studies show that 55-year-old **monozygotic (identical) twins** who lived in different cities exhibit far greater differences in DNA methylation and disease risk than 3-year-old identical twins. What best explains this observation?",
        options: [
          "Different lifetime diets, stresses, and pollutants alter epigenetic tags without changing DNA sequence",
          "Older identical twins undergo meiosis in somatic organs, scrambling alleles across tissues",
          "DNA methylation tags are erased completely every decade, causing random base-pair deletions",
          "Identical twins inherit different nuclear genomes from the start but diverge only after puberty",
        ],
        answerIndex: 0,
        hints: [
          "Do monozygotic twins start with identical DNA sequences from one fertilized zygote?",
          "How do distinct environments reshape the epigenome over decades?",
        ],
        explanation:
          "Monozygotic twins share 100% identical DNA from one zygote, but distinct lifetime environmental factors (diet, smoking, stress, air pollution) accumulate divergent DNA methylation and histone modification patterns (epigenetic drift), driving phenotypic differences.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "gene-expression-epigenetics-hl",
        strategy: "Genomic imprinting & reprogramming escape",
        question:
          "Crossing a male lion with a female tiger yields a giant **liger**, whereas crossing a male tiger with a female lion yields a much smaller **tigon**, even though both hybrids carry one lion and one tiger chromosome set. Which epigenetic phenomenon explains this parent-of-origin size difference?",
        options: [
          "Complete epigenetic reprogramming erases every parental chemical tag at fertilization",
          "Random X-chromosome deletion removes growth genes exclusively in male tigon embryos",
          "Mitochondrial DNA from the father drives faster ribosomal translation inside liger muscle",
          "Genomic imprinting preserves parent-specific silencing tags on growth-regulating alleles",
        ],
        answerIndex: 3,
        hints: [
          "Both hybrids have 50% lion nuclear DNA and 50% tiger nuclear DNA — what differs is WHICH parent contributed which set.",
          "Which epigenetic marks escape embryonic reprogramming to enforce maternal versus paternal allele silencing?",
        ],
        explanation:
          "Genomic imprinting retains specific parent-of-origin methylation marks across gamete formation and fertilization. Lions (polygynous) carry strong paternal growth-promoting and maternal growth-limiting imprints; a liger inherits lion paternal growth promotion without lion maternal inhibition, driving extreme growth.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M3: Water Potential, Osmosis & Theme D Synthesis (15 MCQs)
  // answerIndex sequence: [3, 1, 2, 0, 2, 3, 0, 1, 3, 2, 1, 0, 2, 1, 0]
  // ===========================================================================
  {
    id: "d1-d2-continuity-molecules-cells-m3",
    title: "Paper 1A · Water Potential, Osmosis & Theme D Synthesis (SL & HL)",
    level: "SL",
    questions: [
      {
        id: "d1-d2-continuity-molecules-cells-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Define",
        guideRef: "water-potential-osmosis",
        strategy: "Precise IB osmosis definition",
        question: "Which statement is the most accurate biological definition of **osmosis**?",
        options: [
          "Active pumping of water molecules against their gradient using ATP hydrolysis",
          "Net diffusion of dissolved solute particles from high to low solute concentration",
          "Passive movement of water from high solute concentration to low solute concentration",
          "Passive net movement of water across a partially permeable membrane from higher to lower water potential",
        ],
        answerIndex: 3,
        hints: [
          "Check three essentials: passive (no ATP), partially permeable membrane, and direction of water potential.",
        ],
        explanation:
          "Osmosis is the passive net diffusion of water across a partially permeable membrane from a region of higher (less negative) water potential (lower solute concentration) to a region of lower (more negative) water potential (higher solute concentration).",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "water-potential-osmosis",
        strategy: "Animal cell tonicity outcome",
        question:
          "What happens to human erythrocytes (red blood cells) when immersed in a beaker of **pure distilled water**?",
        options: [
          "Net water leaves by osmosis, causing the erythrocytes to shrink and crenate",
          "Net water enters rapidly by osmosis, causing the erythrocytes to swell and lyse",
          "Water enters until the cell wall builds turgor pressure, keeping the cells turgid",
          "No net water movement occurs because haemoglobin balances external pure water",
        ],
        answerIndex: 1,
        hints: [
          "Pure water is strongly hypotonic compared to cytoplasm, and animal cells lack a cell wall.",
        ],
        explanation:
          "Distilled water has a higher water potential (0 kPa) than erythrocyte cytoplasm, so water enters rapidly by osmosis. Lacking a rigid cellulose wall to generate balancing pressure potential, the plasma membrane ruptures (lysis / haemolysis).",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "water-potential-osmosis",
        strategy: "Plant cell wall turgor mechanism",
        question:
          "Why does a plant parenchyma cell placed in pure water become **turgid** instead of bursting?",
        options: [
          "Aquaporin channels seal permanently the instant water begins entering the central vacuole",
          "Active transport pumps water molecules back out faster than osmosis can bring them in",
          "The rigid cellulose cell wall resists expansion and exerts an inward positive pressure potential",
          "Sucrose diffuses freely out through the plasma membrane until internal solute equals zero",
        ],
        answerIndex: 2,
        hints: [
          "What structural component distinguishes plant cells from animal cells under osmotic swelling?",
          "Link wall resistance to positive pressure potential ({{+Ψ_p}}) stopping net water influx.",
        ],
        explanation:
          "As water enters the vacuole by osmosis, the protoplast presses against the strong cellulose cell wall. The wall pushes back with a rising positive pressure potential ({{Ψ_p}}) until internal water potential equals 0 kPa, halting further net influx without bursting.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "water-potential-osmosis",
        strategy: "Medical isotonicity rationale",
        question:
          "Why are donor kidneys packed in chilled **isotonic** buffered solution during transport for transplantation?",
        options: [
          "Isotonic fluid prevents net osmotic water flow that would cause cell lysis or crenation",
          "Isotonic fluid drives rapid water entry to keep kidney epithelial cells fully turgid",
          "Isotonic fluid dehydrates cells slightly so plasma membranes cannot freeze during transit",
          "Isotonic fluid eliminates all molecular motion of water across kidney cell membranes",
        ],
        answerIndex: 0,
        hints: [
          "Compare what hypotonic or hypertonic bathing solutions would do to wall-less human organ cells.",
          "Remember dynamic equilibrium: zero NET flow, not zero molecular motion.",
        ],
        explanation:
          "Because animal organ cells lack cell walls, hypotonic fluid would cause lethal lysis and hypertonic fluid would cause crenation. Matching tissue osmolarity ensures zero net osmotic movement while chilling reduces metabolic oxygen demand.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "water-potential-osmosis",
        strategy: "Reading potato osmolarity curves",
        question:
          "A student plots percentage change in mass (`%Δm`) of sweet-potato strips against bathing sucrose concentration (`0.0–0.8 mol dm⁻³`). How should the tissue's **isotonic osmolarity** be determined from the best-fit curve?",
        options: [
          "Read the y-intercept where sucrose concentration equals 0.0 mol dm⁻³",
          "Find the steepest negative gradient between the two highest sucrose concentrations",
          "Read the x-intercept where percentage change in mass equals 0%",
          "Calculate the mean of the highest positive and lowest negative mass changes",
        ],
        answerIndex: 2,
        hints: [
          "What is the net change in tissue mass when the external bathing solution is isotonic with the cells?",
          "Find where `%Δm = 0` on the graph.",
        ],
        explanation:
          "When external sucrose osmolarity equals the tissue's internal osmolarity (isotonic), there is zero net water movement and therefore 0% change in mass — located directly at the x-intercept of the `%Δm` versus concentration curve.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "water-potential-osmosis",
        strategy: "Percentage mass change formula",
        question:
          "A blotted potato cylinder has an initial mass of **2.50 g**. After soaking in concentrated sucrose solution, its final mass is **2.20 g**. What is its **percentage change in mass**?",
        options: [
          "−13.6%",
          "+12.0%",
          "−0.30%",
          "−12.0%",
        ],
        answerIndex: 3,
        hints: [
          "Use {{%Δm = ((m_f - m_i) / m_i) * 100}}.",
          "Keep the negative sign for mass loss, and divide by initial mass (2.50 g), not final mass (2.20 g).",
        ],
        explanation:
          "Subtract initial from final mass: {{2.20 - 2.50 = -0.30}} g. Divide by initial mass: {{(-0.30 / 2.50) * 100 = -12.0}}%. Dividing by final mass (2.20 g) gives the distractor −13.6%.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "water-potential-osmosis",
        strategy: "Applying Ψ = Ψ_s + Ψ_p",
        question:
          "A leaf palisade cell has a solute potential {{Ψ_s = -780}} kPa and a pressure potential {{Ψ_p = +230}} kPa. What is the cell's total **water potential (Ψ)**?",
        options: [
          "−550 kPa",
          "−1010 kPa",
          "+550 kPa",
          "−230 kPa",
        ],
        answerIndex: 0,
        hints: [
          "Substitute directly into {{Ψ = Ψ_s + Ψ_p}}, watching both signs carefully.",
          "Compute {{-780 + 230}}.",
        ],
        explanation:
          "Using {{Ψ = Ψ_s + Ψ_p}}, total water potential is {{-780 + 230 = -550}} kPa. Adding magnitudes as −1010 kPa ignores the positive sign of wall pressure, while +550 kPa drops the negative sign.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "State",
        guideRef: "water-potential-osmosis",
        strategy: "Incipient plasmolysis boundary",
        question:
          "Which water-potential relationship holds at the exact point of **incipient plasmolysis** in a plant cell?",
        options: [
          "{{Ψ_s = 0}} kPa, so total water potential equals pressure potential ({{Ψ = Ψ_p}})",
          "{{Ψ_p = 0}} kPa, so total water potential equals solute potential ({{Ψ = Ψ_s}})",
          "{{Ψ = 0}} kPa, so pressure potential equals the negative solute potential ({{Ψ_p = -Ψ_s}})",
          "{{Ψ_p}} becomes strongly negative, pulling water rapidly inward across the tonoplast",
        ],
        answerIndex: 1,
        hints: [
          "At incipient plasmolysis, the plasma membrane is *just* losing contact with the cell wall.",
          "If the protoplast no longer pushes against the cell wall, what is {{Ψ_p}}?",
        ],
        explanation:
          "At incipient plasmolysis, the protoplast exerts zero outward force on the cell wall, so {{Ψ_p = 0}} kPa and therefore {{Ψ = Ψ_s + 0 = Ψ_s}}. Full turgor in pure water corresponds to {{Ψ = 0}} and {{Ψ_p = -Ψ_s}}.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "water-potential-osmosis",
        strategy: "Signed water-potential comparison",
        question:
          "Adjacent plant cells X and Y have total water potentials {{Ψ_X = -320}} kPa and {{Ψ_Y = -580}} kPa. In which direction will **net water movement** occur, and why?",
        options: [
          "From Cell Y to Cell X, because 580 has a larger numerical magnitude than 320",
          "No net water movement occurs, because both cells carry negative water potentials",
          "From Cell Y to Cell X, because solutes always pull water toward higher pressure",
          "From Cell X to Cell Y, because −320 kPa is higher (less negative) than −580 kPa",
        ],
        answerIndex: 3,
        hints: [
          "Compare signed numbers on a number line: which number is closer to 0 (higher)?",
          "Water always moves from higher (less negative) Ψ to lower (more negative) Ψ.",
        ],
        explanation:
          "Because {{−320 > −580}}, Cell X has a higher (less negative) water potential than Cell Y, so net water diffuses passively from Cell X into Cell Y down the water potential gradient.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "water-potential-osmosis",
        strategy: "Full turgor equilibrium math",
        question:
          "A flaccid onion epidermal cell with solute potential {{Ψ_s = -640}} kPa is placed in pure water ({{Ψ = 0}} kPa) until equilibrium is reached. Assuming dilution of {{Ψ_s}} is negligible, what is its equilibrium **pressure potential ({{Ψ_p}})**?",
        options: [
          "−640 kPa",
          "0 kPa",
          "+640 kPa",
          "+320 kPa",
        ],
        answerIndex: 2,
        hints: [
          "At equilibrium with pure water, what must the cell's total water potential {{Ψ_cell}} equal?",
          "Solve {{0 = -640 + Ψ_p}} for {{Ψ_p}}.",
        ],
        explanation:
          "Net water enters until internal water potential matches external pure water ({{Ψ_cell = 0}} kPa). Substituting into {{Ψ = Ψ_s + Ψ_p}} gives {{0 = -640 + Ψ_p}}, so {{Ψ_p = +640}} kPa at full turgor.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "water-potential-osmosis",
        strategy: "Negative pressure potential in xylem",
        question:
          "What is the sign of the **pressure potential ({{Ψ_p}})** inside xylem vessels during active daytime transpiration, and why?",
        options: [
          "Positive, because root cells pump water upward using ATP hydrostatic push alone",
          "Negative, because evaporation from leaves pulls the cohesive water column under tension",
          "Zero, because open-ended lignified xylem tubes sit directly at atmospheric pressure",
          "Positive, because dissolved mineral ions exert outward turgor against lignin rings",
        ],
        answerIndex: 1,
        hints: [
          "Is water in transpiring xylem being pushed (compression) or pulled (tension)?",
          "Tension corresponds to a hydrostatic pressure below atmospheric pressure.",
        ],
        explanation:
          "Transpiration from leaf mesophyll generates strong pulling tension transmitted down cohesive water columns in xylem vessels, producing a negative pressure potential ({{Ψ_p < 0}}) that lowers xylem water potential below root water potential.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "dna-replication-protein-synthesis",
        strategy: "Meselson–Stahl general formula",
        question:
          "Following the Meselson–Stahl protocol, heavy ¹⁵N/¹⁵N bacterial DNA undergoes **three** complete rounds of semi-conservative replication in ¹⁴N medium. What percentage of the resulting DNA duplexes are ¹⁵N/¹⁴N hybrids?",
        options: [
          "25% intermediate hybrid (¹⁵N/¹⁴N) and 75% light (¹⁴N/¹⁴N)",
          "50% intermediate hybrid (¹⁵N/¹⁴N) and 50% light (¹⁴N/¹⁴N)",
          "12.5% intermediate hybrid (¹⁵N/¹⁴N) and 87.5% light (¹⁴N/¹⁴N)",
          "33.3% intermediate hybrid (¹⁵N/¹⁴N) and 66.7% light (¹⁴N/¹⁴N)",
        ],
        answerIndex: 0,
        hints: [
          "After 3 rounds starting from 1 duplex, how many total duplexes exist ({{2^3}})?",
          "Only the 2 original ¹⁵N single strands remain, each in its own hybrid duplex: compute {{2 / 8}}.",
        ],
        explanation:
          "After {{n = 3}} rounds, 1 parental duplex becomes {{2^3 = 8}} duplexes. The 2 original ¹⁵N strands occupy 2 hybrid duplexes (2/8 = 25%), leaving 6 fully light ¹⁴N/¹⁴N duplexes (75%). 12.5% corresponds to Generation 4, and 50% to Generation 2.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "dna-replication-protein-synthesis",
        strategy: "Coding bases to polypeptide length",
        question:
          "After intron splicing, the protein-coding region of a mature eukaryotic mRNA is **453** nucleotides long, starting with `AUG` and ending with one terminal stop codon (`UGA`). How many amino acids are assembled into the newly translated polypeptide?",
        options: [
          "151 amino acids",
          "1359 amino acids",
          "150 amino acids",
          "149 amino acids",
        ],
        answerIndex: 2,
        hints: [
          "Divide 453 nucleotides by 3 to find the total number of codons.",
          "Does the terminal stop codon (`UGA`) add an amino acid to the polypeptide?",
        ],
        explanation:
          "Dividing 453 nucleotides by 3 gives {{453 / 3 = 151}} codons. Subtracting the single terminal stop codon (which binds a release factor rather than a tRNA) yields {{151 - 1 = 150}} amino acids.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "mutations-division-cancer",
        strategy: "Purifying selection on conserved genes",
        question:
          "The amino-acid sequence of histone H4 differs by only 2 out of 102 amino acids between garden peas and domestic cattle, despite over a billion years of separate evolution. Why is this gene **highly conserved**?",
        options: [
          "Histone genes are completely shielded from UV mutagens and DNA polymerase errors",
          "Purifying selection eliminates mutations because almost any change disrupts essential nucleosome packing",
          "Horizontal gene transfer continually copies cattle histone genes into terrestrial plant genomes",
          "Histone mRNA lacks codons susceptible to frameshift or nonsense substitutions during replication",
        ],
        answerIndex: 1,
        hints: [
          "Do mutations fail to occur in conserved genes, or do organisms carrying those mutations fail to survive?",
          "Think about how sensitive DNA packaging in nucleosomes is to structural changes in histones.",
        ],
        explanation:
          "Mutations still occur randomly in histone genes, but because histone H4 plays an indispensable structural role in packaging eukaryotic DNA into nucleosomes, virtually any non-silent mutation is lethal or strongly deleterious and is purged by purifying (stabilizing) selection.",
      },
      {
        id: "d1-d2-continuity-molecules-cells-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "gene-expression-epigenetics-hl",
        strategy: "Linking epigenetics to cancer",
        question:
          "In certain sporadic colorectal cancers, the tumour suppressor gene *MLH1* contains zero base-sequence mutations yet produces no functional protein. How can an **epigenetic** change cause this same cancer-promoting outcome?",
        options: [
          "Promoter hypermethylation condenses local chromatin and silences transcription of the intact gene",
          "Histone hyperacetylation strips histones away and triggers frameshift deletions inside exons",
          "Alternative splicing permanently removes the promoter sequence from nuclear genomic DNA",
          "Non-disjunction removes methyl groups from oncogenes while mutating every cyclin gene",
        ],
        answerIndex: 0,
        hints: [
          "What epigenetic mark turns a gene OFF without mutating its DNA base sequence?",
          "Link loss of a tumour suppressor protein to uncontrolled cell-cycle progression.",
        ],
        explanation:
          "Abnormal hypermethylation of CpG islands in the *MLH1* promoter compacts chromatin into heterochromatin and blocks RNA polymerase, silencing the tumour suppressor gene just as effectively as a loss-of-function DNA mutation — while leaving the nucleotide sequence unchanged.",
      },
    ],
  },
];
