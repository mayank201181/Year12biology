import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // DIAGNOSTIC QUIZ (10 questions: 7 auto-marked short + 3 short written)
  // ===========================================================================
  quiz: [
    {
      id: "d1-d2-continuity-molecules-cells-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Deduce",
      guideRef: "dna-replication-protein-synthesis",
      strategy: "Antisense-to-mRNA base pairing",
      question:
        "A section of the **antisense (template) DNA strand** reads `3'-TAC-CCA-GGT-5'`. Type the transcribed **mRNA** base sequence (5'→3', letters only).",
      answer: {
        type: "text",
        accept: ["AUGGGUCCA", "5'-AUGGGUCCA-3'", "AUG-GGU-CCA", "AUG GGU CCA"],
        display: "AUGGGUCCA",
      },
      traps: [
        {
          spec: { type: "text", accept: ["ATGGGTCCA", "ATG-GGT-CCA"] },
          feedback: "Remember RNA uses uracil (U) instead of thymine (T)!",
        },
        {
          spec: { type: "text", accept: ["UACCCAGGU", "UAC-CCA-GGU"] },
          feedback: "That copies the template with T→U as if it were the sense strand; pair each antisense base with its RNA complement.",
        },
      ],
      hints: ["Pair every base on the 3'→5' antisense strand with its RNA complement: A→U, T→A, C→G, G→C."],
      solution: [
        "Apply RNA base-pairing rules (A→U, T→A, C→G, G→C) triplet by triplet.",
        "`TAC → AUG`, `CCA → GGU`, `GGT → CCA`.",
        "Combined 5'→3' mRNA sequence: `AUGGGUCCA`.",
      ],
    },
    {
      id: "d1-d2-continuity-molecules-cells-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "dna-replication-protein-synthesis",
      strategy: "PCR exponential doubling",
      question:
        "A PCR tube starts with **2** copies of a target DNA sequence. Assuming 100% efficiency, how many copies are present after **7** complete thermal cycles?",
      answer: { type: "number", value: 256, display: "256" },
      traps: [
        {
          spec: { type: "number", value: 128 },
          feedback: "You calculated 2⁷ = 128 — remember to multiply by the initial 2 copies (N₀ = 2).",
        },
        {
          spec: { type: "number", value: 14 },
          feedback: "PCR doubles exponentially (N₀ × 2ⁿ), not linearly (2 × 7).",
        },
      ],
      hints: ["Use {{N = N_0 * 2^n}} with {{N_0 = 2}} and {{n = 7}}."],
      solution: [
        "Substitute into {{N = N_0 * 2^n}}.",
        "{{N = 2 * 2^7 = 2 * 128 = 256}} copies.",
      ],
    },
    {
      id: "d1-d2-continuity-molecules-cells-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "mutations-division-cancer",
      strategy: "Mitotic index percentage",
      question:
        "In a root-tip squash of **140** total cells, **21** cells are in prophase, metaphase, anaphase, or telophase. Calculate the **mitotic index as a percentage** (%).",
      answer: { type: "number", value: 15, display: "15%" },
      traps: [
        {
          spec: { type: "number", value: 0.15, tolerance: 0.005 },
          feedback: "0.15 is the decimal ratio — multiply by 100 to give the percentage (%).",
        },
      ],
      hints: ["Divide dividing cells (21) by total cells observed (140), then multiply by 100."],
      solution: [
        "Mitotic index = {{(21 / 140) * 100}}.",
        "{{21 / 140 = 3 / 20 = 0.15}}, which equals **15%**.",
      ],
    },
    {
      id: "d1-d2-continuity-molecules-cells-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      guideRef: "mutations-division-cancer",
      strategy: "Diploid to haploid reduction",
      question:
        "A diploid red fox has {{2n = 34}} chromosomes in a G₁ somatic cell. How many chromosomes are present in one haploid sperm cell formed by meiosis?",
      answer: { type: "number", value: 17, display: "17" },
      traps: [
        {
          spec: { type: "number", value: 34 },
          feedback: "34 is the diploid (2n) somatic number — meiosis halves chromosome number to haploid (n).",
        },
        {
          spec: { type: "number", value: 68 },
          feedback: "68 is the number of chromatids after S phase, not chromosomes in a haploid gamete.",
        },
      ],
      hints: [
        "Meiosis is a reduction division from diploid (2n) to haploid (n).",
        "Divide 34 by 2.",
      ],
      solution: ["Haploid chromosome number {{n = 2n / 2 = 34 / 2 = 17}} chromosomes."],
    },
    {
      id: "d1-d2-continuity-molecules-cells-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "dna-replication-protein-synthesis",
      strategy: "Replication fork enzyme recall",
      question:
        "Name the enzyme that joins adjacent Okazaki fragments on the lagging strand by catalysing phosphodiester bonds to seal backbone nicks.",
      answer: {
        type: "text",
        accept: ["DNA ligase", "ligase"],
        display: "DNA ligase",
      },
      hints: [
        "Think of the enzyme that 'glues' or seals gaps after DNA polymerase I replaces RNA primers.",
        "Its name comes from the Latin verb meaning 'to tie together'.",
      ],
      solution: ["**DNA ligase** catalyses covalent phosphodiester bonds between adjacent Okazaki fragments."],
    },
    {
      id: "d1-d2-continuity-molecules-cells-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "gene-expression-epigenetics-hl",
      strategy: "Epigenetic silencing mark",
      question:
        "Name the epigenetic modification that attaches `−CH₃` groups to promoter cytosine bases, compacting chromatin into heterochromatin and silencing transcription.",
      answer: {
        type: "text",
        accept: ["DNA methylation", "methylation"],
        display: "DNA methylation",
      },
      hints: [
        "Remember the pair: histone acetylation activates, while this tag mutes promoters.",
        "The chemical group `−CH₃` is a methyl group.",
      ],
      solution: ["**DNA methylation** adds methyl (`−CH₃`) groups to cytosines at CpG islands, silencing transcription."],
    },
    {
      id: "d1-d2-continuity-molecules-cells-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "water-potential-osmosis",
      strategy: "Applying Ψ = Ψ_s + Ψ_p",
      question:
        "A plant mesophyll cell has {{Ψ_s = -650}} kPa and {{Ψ_p = +210}} kPa. Calculate its total water potential **Ψ** (in kPa, including the sign).",
      answer: { type: "number", value: -440, display: "−440 kPa" },
      traps: [
        {
          spec: { type: "number", value: 440 },
          feedback: "Check the sign! Solute potential is −650 kPa, so the sum −650 + 210 is negative (−440 kPa).",
        },
        {
          spec: { type: "number", value: -860 },
          feedback: "Pressure potential is POSITIVE (+210 kPa), so it raises water potential toward 0 rather than lowering it.",
        },
      ],
      hints: [
        "Use {{Ψ = Ψ_s + Ψ_p}}.",
        "Add {{-650 + 210}} carefully keeping the negative sign.",
      ],
      solution: ["{{Ψ = Ψ_s + Ψ_p = -650 + 210 = -440}} kPa."],
    },
    {
      id: "d1-d2-continuity-molecules-cells-quiz-q08",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Outline",
      guideRef: "dna-replication-protein-synthesis",
      strategy: "Enzyme–bond specificity",
      marks: 2,
      question:
        "Outline the distinct functions of **helicase** and **DNA polymerase** during semi-conservative DNA replication. [2]",
      hints: [
        "Specify which bond helicase breaks to open the double helix.",
        "Specify how DNA polymerase links complementary incoming nucleotides together.",
      ],
      modelAnswer:
        "Helicase unwinds the double helix by breaking hydrogen bonds between complementary nitrogenous bases to expose single-stranded templates. DNA polymerase then aligns free complementary nucleotides and links them with covalent phosphodiester bonds along the growing 5'→3' strand.",
      markScheme: [
        {
          point: "Helicase unwinds the double helix and breaks hydrogen bonds between complementary base pairs.",
          keywords: ["hydrogen bond", "unwinds"],
        },
        {
          point: "DNA polymerase links complementary nucleotides via phosphodiester (covalent) bonds in the 5'→3' direction.",
          keywords: ["phosphodiester", "covalent", "5'"],
        },
      ],
    },
    {
      id: "d1-d2-continuity-molecules-cells-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "mutations-division-cancer",
      strategy: "Point mutation impact on primary structure",
      marks: 2,
      question:
        "Distinguish between a **silent** base substitution and a **missense** base substitution in terms of polypeptide primary structure. [2]",
      hints: [
        "How does degeneracy of the genetic code affect the amino acid encoded after a silent change?",
        "What happens to the amino-acid chain after a missense change?",
      ],
      modelAnswer:
        "Because the genetic code is degenerate, a silent change produces a synonymous codon that still specifies the identical amino acid, leaving the primary sequence unchanged. By contrast, a missense change creates a codon specifying a different amino acid, altering primary structure and potentially disrupting tertiary folding.",
      markScheme: [
        {
          point: "Silent substitution yields a synonymous codon coding for the same amino acid (due to code degeneracy), so sequence is unchanged.",
          keywords: ["same amino acid", "identical amino acid", "degenerate", "unchanged"],
        },
        {
          point: "Missense substitution alters the codon so a different amino acid is inserted into the polypeptide.",
          keywords: ["different amino acid", "altered", "altering"],
        },
      ],
    },
    {
      id: "d1-d2-continuity-molecules-cells-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "water-potential-osmosis",
      strategy: "Clinical isotonicity & RBC integrity",
      marks: 2,
      question:
        "Explain why hospital intravenous (IV) saline must match the osmolarity of human blood plasma. [2]",
      hints: [
        "What happens to red blood cells if the drip fluid is hypotonic?",
        "What happens to red blood cells if the drip fluid is hypertonic?",
      ],
      modelAnswer:
        "Matching plasma osmolarity ensures zero net osmotic water movement across erythrocyte membranes. If the fluid were hypotonic, net water influx would cause red blood cells to swell and lyse (burst), whereas a hypertonic fluid would draw water out causing crenation (shrinking).",
      markScheme: [
        {
          point: "Hypotonic fluid causes net water entry and cell lysis / bursting of red blood cells.",
          keywords: ["lyse", "lysis", "burst"],
        },
        {
          point: "Hypertonic fluid causes net water loss and crenation / shrinking; matched fluid maintains zero net movement.",
          keywords: ["crenation", "shrink", "zero net", "no net"],
        },
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS P1 & P2 (15 questions each)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER P1: Molecular Continuity & Data Analysis (D1.1–D1.3, 15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "d1-d2-continuity-molecules-cells-p1",
      title: "Paper 1B & Paper 2 · Replication, Protein Synthesis & Mutations (SL & HL)",
      level: "SL",
      questions: [
        {
          id: "d1-d2-continuity-molecules-cells-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "dna-replication-protein-synthesis",
          strategy: "Sense strand to mRNA T→U rule",
          question:
            "A gene's **sense (coding) DNA strand** has the sequence `5'-ATG-TTC-GCA-TAA-3'`. Type the resulting **mRNA** base sequence (5'→3', letters only).",
          answer: {
            type: "text",
            accept: ["AUGUUCGCAUAA", "5'-AUGUUCGCAUAA-3'", "AUG-UUC-GCA-UAA", "AUG UUC GCA UAA"],
            display: "AUGUUCGCAUAA",
          },
          traps: [
            {
              spec: { type: "text", accept: ["UACAAGCGUAUU", "UAC-AAG-CGU-AUU"] },
              feedback: "Watch the strand label! This is the SENSE (coding) strand, so mRNA matches it directly with T replaced by U (do not base-pair it).",
            },
          ],
          hints: ["The sense (coding) strand has the same 5'→3' sequence as mRNA except DNA has T where mRNA has U."],
          solution: [
            "Because the given sequence is the 5'→3' sense (coding) strand, replace every T with U.",
            "`ATG-TTC-GCA-TAA` → `AUG-UUC-GCA-UAA` (`AUGUUCGCAUAA`).",
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "dna-replication-protein-synthesis",
          strategy: "Codons minus terminal stop codon",
          question:
            "A mature mRNA coding region is **366** nucleotides long, beginning with `AUG` and ending with one terminal stop codon (`UAG`). Calculate the number of **amino acids** in the translated polypeptide.",
          answer: { type: "number", value: 121, display: "121" },
          traps: [
            {
              spec: { type: "number", value: 122 },
              feedback: "122 is the total number of codons — subtract 1 because the terminal stop codon (`UAG`) does not code for an amino acid.",
            },
            {
              spec: { type: "number", value: 1098 },
              feedback: "3 bases form 1 codon, so divide by 3 rather than multiplying by 3.",
            },
          ],
          hints: [
            "Divide 366 nucleotides by 3 to get the total number of codons.",
            "Remember that `UAG` terminates translation without adding an amino acid.",
          ],
          solution: [
            "Total codons = {{366 / 3 = 122}}.",
            "Subtract 1 terminal stop codon: {{122 - 1 = 121}} amino acids.",
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "dna-replication-protein-synthesis",
          strategy: "Meselson–Stahl generation ratio",
          question:
            "In a Meselson–Stahl experiment, heavy ¹⁵N/¹⁵N bacterial DNA completes **4** rounds of semi-conservative replication in ¹⁴N medium. What **percentage (%)** of the resulting DNA duplexes are intermediate ¹⁵N/¹⁴N hybrids?",
          answer: { type: "number", value: 12.5, tolerance: 0.05, display: "12.5%" },
          traps: [
            {
              spec: { type: "number", value: 25 },
              feedback: "25% is the hybrid percentage after 3 rounds (2/8); after 4 rounds there are 2⁴ = 16 duplexes.",
            },
            {
              spec: { type: "number", value: 6.25 },
              feedback: "6.25% is 1/16, which forgets that BOTH original ¹⁵N strands survive into 2 separate hybrid duplexes.",
            },
          ],
          hints: [
            "After 4 rounds, 1 parental duplex becomes {{2^4 = 16}} duplexes.",
            "Only 2 of those 16 duplexes contain an original ¹⁵N strand: calculate {{(2 / 16) * 100}}.",
          ],
          solution: [
            "Total DNA duplexes after 4 rounds = {{2^4 = 16}}.",
            "Number of ¹⁵N/¹⁴N hybrid duplexes remains 2 (one for each original parental strand).",
            "Percentage hybrid = {{(2 / 16) * 100 = 12.5}}%.",
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "dna-replication-protein-synthesis",
          strategy: "PCR exponential copy formula",
          question:
            "A diagnostic swab initially contains **6** copies of a viral target DNA sequence. Assuming 100% PCR efficiency, calculate the number of target copies after **9** thermal cycles.",
          answer: { type: "number", value: 3072, display: "3072" },
          traps: [
            {
              spec: { type: "number", value: 512 },
              feedback: "512 equals 2⁹ — multiply by the initial 6 template copies (N₀ = 6).",
            },
          ],
          hints: [
            "Apply {{N = N_0 * 2^n}} with {{N_0 = 6}} and {{n = 9}}.",
            "Compute {{2^9 = 512}}, then multiply by 6.",
          ],
          solution: [
            "{{2^9 = 512}}.",
            "{{N = 6 * 512 = 3072}} DNA copies.",
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "dna-replication-protein-synthesis",
          strategy: "Replication initiation on lagging strand",
          question:
            "Name the enzyme that synthesizes short complementary RNA primers on the lagging-strand DNA template to provide a free 3'-OH end for DNA polymerase III.",
          answer: {
            type: "text",
            accept: ["RNA primase", "primase"],
            display: "RNA primase",
          },
          hints: [
            "DNA polymerase III cannot start a brand-new strand from scratch.",
            "Which enzyme lays down the RNA 'primer' at the start of every Okazaki fragment?",
          ],
          solution: ["**RNA primase** synthesizes short RNA primers providing a free 3'-OH group for DNA Pol III."],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q06",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "dna-replication-protein-synthesis",
          strategy: "Subtract introns before dividing codons",
          question:
            "A eukaryotic pre-mRNA transcript measures **1260** nucleotides and contains two non-coding introns of **240** and **180** nucleotides. Assuming all remaining spliced exon bases form the coding region starting with `AUG` and ending with one stop codon, calculate the number of **amino acids** in the newly translated polypeptide.",
          answer: { type: "number", value: 279, display: "279" },
          traps: [
            {
              spec: { type: "number", value: 280 },
              feedback: "280 is the total number of spliced codons — remember to subtract 1 for the terminal stop codon.",
            },
            {
              spec: { type: "number", value: 419 },
              feedback: "You forgot to excise the two introns (240 + 180 = 420 bases) before translating!",
            },
          ],
          hints: [
            "First subtract both excised introns ({{240 + 180 = 420}} bases) from 1260.",
            "Divide the remaining mature mRNA bases by 3, then subtract 1 terminal stop codon.",
          ],
          solution: [
            "Exon coding length = {{1260 - (240 + 180) = 1260 - 420 = 840}} nucleotides.",
            "Total codons = {{840 / 3 = 280}}.",
            "Polypeptide length (excluding 1 stop codon) = {{280 - 1 = 279}} amino acids.",
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "mutations-division-cancer",
          strategy: "Sickle-cell amino-acid swap",
          question:
            "In sickle-cell anaemia, a missense mutation changes codon 6 of β-globin mRNA from `GAG` (glutamic acid) to `GUG`. Name the hydrophobic amino acid encoded by `GUG`.",
          answer: {
            type: "text",
            accept: ["valine", "val"],
            display: "valine",
          },
          hints: [
            "Recall the classic IB β-globin swap: hydrophilic glutamic acid is replaced by a non-polar hydrophobic amino acid.",
            "Its three-letter abbreviation is `Val`.",
          ],
          solution: ["`GUG` encodes **valine**, creating a hydrophobic sticky patch on deoxy-haemoglobin."],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "mutations-division-cancer",
          strategy: "CRISPR molecular scissors",
          question:
            "Name the bacterial endonuclease enzyme guided by a custom synthetic gRNA to cleave both strands of a target DNA sequence in CRISPR gene editing.",
          answer: {
            type: "text",
            accept: ["Cas9", "Cas9 endonuclease", "Cas9 nuclease"],
            display: "Cas9",
          },
          hints: [
            "The technology is named CRISPR–____.",
            "It is an RNA-guided DNA endonuclease from *Streptococcus pyogenes*.",
          ],
          solution: ["**Cas9** (CRISPR-associated protein 9) cuts both DNA strands at the sequence matched by gRNA."],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "dna-replication-protein-synthesis",
          strategy: "Experimental falsification logic",
          marks: 3,
          question:
            "Explain how the banding patterns observed in the Meselson–Stahl CsCl density-gradient experiment after **1** and **2** rounds of replication in ¹⁴N medium ruled out both the conservative and dispersive hypotheses. [3]",
          hints: [
            "State the exact Gen 1 band observed and why conservative replication fails immediately.",
            "State the exact Gen 2 bands observed and why dispersive replication fails.",
          ],
          modelAnswer:
            "After one round in light nitrogen, DNA formed a single intermediate hybrid band containing one heavy and one light strand, eliminating the conservative hypothesis which predicted two separate heavy and light bands. After two rounds, two equal bands appeared—half intermediate hybrid and half fully light—falsifying the dispersive hypothesis which predicted only one progressively lighter mixed band.",
          markScheme: [
            {
              point: "Generation 1 produced a single intermediate (hybrid ¹⁵N/¹⁴N) band.",
              keywords: ["single intermediate", "hybrid band", "one intermediate"],
            },
            {
              point: "This falsified conservative replication, which predicted separate heavy and light bands at Generation 1.",
              keywords: ["separate heavy", "heavy and light", "eliminating the conservative"],
            },
            {
              point: "Generation 2 produced 50% intermediate and 50% light bands, falsifying dispersive replication (which predicted one single lighter band).",
              keywords: ["half light", "fully light", "lighter mixed", "single lighter"],
            },
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "dna-replication-protein-synthesis",
          strategy: "PCR steps + thermostability",
          marks: 3,
          question:
            "Outline the three temperature stages of one PCR cycle and state why **Taq polymerase** is essential for this technique. [3]",
          hints: [
            "Include approximate temperatures and molecular events for denaturation, annealing, and extension.",
            "Explain what happens to normal human DNA polymerase at 95 °C.",
          ],
          modelAnswer:
            "First, denaturation at around 95 °C breaks hydrogen bonds to separate double-stranded DNA into single strands. Second, cooling to roughly 55 °C allows short primers to anneal to complementary flanking sequences. Third, extension at 72 °C lets thermostable Taq polymerase synthesize new strands without denaturing during repeated 95 °C heating cycles.",
          markScheme: [
            {
              point: "Denaturation (~95 °C) breaks hydrogen bonds separating dsDNA into single strands.",
              keywords: ["denaturation", "95", "hydrogen bond"],
            },
            {
              point: "Annealing (~50–65 °C) binds complementary primers, followed by extension (~72 °C) synthesizing new DNA.",
              keywords: ["anneal", "72", "extension"],
            },
            {
              point: "Taq polymerase is thermostable and does not denature at 95 °C (unlike mammalian DNA polymerase).",
              keywords: ["thermostable", "without denaturing", "heat-stable"],
            },
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "dna-replication-protein-synthesis",
          strategy: "5'→3' polarity & enzyme choreography",
          marks: 4,
          question:
            "Explain why DNA replication is continuous on the leading strand yet discontinuous on the lagging strand, and outline how the lagging strand is completed into a continuous DNA molecule. [4]",
          hints: [
            "Start with antiparallel strands and the 5'→3' restriction of DNA polymerase III.",
            "Trace the lagging-strand enzymes in sequence: RNA primase → DNA Pol III → DNA Pol I → DNA ligase.",
          ],
          modelAnswer:
            "DNA duplexes are antiparallel, and DNA polymerase III can only add deoxyribonucleotides to a free 3'-OH group, forcing all growth strictly in the 5'→3' direction. Therefore the leading strand grows smoothly toward the unwinding fork, whereas the opposite strand must grow away from the fork in short Okazaki fragments, each initiated by an RNA primer from primase. Next, DNA polymerase I excises every RNA primer and replaces it with DNA nucleotides, and DNA ligase seals the sugar–phosphate nicks with phosphodiester bonds.",
          markScheme: [
            {
              point: "Strands are antiparallel and DNA polymerase III only synthesizes 5'→3' (adding nucleotides to a free 3'-OH).",
              keywords: ["antiparallel", "3'-oh", "5'"],
            },
            {
              point: "Lagging template runs away from the fork, forcing short Okazaki fragments initiated by RNA primase.",
              keywords: ["okazaki", "primase", "rna primer"],
            },
            {
              point: "DNA polymerase I removes RNA primers and replaces them with DNA nucleotides.",
              keywords: ["polymerase i", "replaces", "excises"],
            },
            {
              point: "DNA ligase catalyses phosphodiester bonds sealing nicks between fragments.",
              keywords: ["ligase", "phosphodiester", "seals"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No biologically accurate explanation of strand polarity or lagging-strand completion." },
            { band: "1–2", marks: [1, 2], descriptor: "States 5'→3' directionality or names Okazaki fragments, but omits enzyme roles or antiparallel logic." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly links antiparallel 5'→3' polarity to continuous vs Okazaki synthesis and sequences primase, Pol III, Pol I, and ligase accurately." },
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Describe",
          guideRef: "dna-replication-protein-synthesis",
          strategy: "Ribosome A/P/E cycle step-by-step",
          marks: 4,
          question:
            "Describe the mechanism of **translation** on a ribosome from initiation through polypeptide release. [4]",
          hints: [
            "Start with mRNA binding the small subunit and the start codon AUG.",
            "Include complementary codon–anticodon pairing, A/P/E sites, peptide bond formation, translocation, and stop codon termination.",
          ],
          modelAnswer:
            "The small ribosomal subunit binds mRNA near its 5' end and locates the AUG start codon, where initiator tRNA pairs its UAC anticodon in the P site before the large subunit joins. Next, aminoacyl-tRNAs enter the A site by complementary codon–anticodon base pairing, and peptidyl transferase catalyses a peptide bond via condensation between adjacent amino acids. The ribosome translocates three bases 5'→3', shifting uncharged tRNAs out through the E site until a stop codon (UAA, UAG, or UGA) enters the A site and triggers release of the completed polypeptide.",
          markScheme: [
            {
              point: "Ribosome assembles at the AUG start codon with initiator tRNA in the P site.",
              keywords: ["aug", "start codon", "p site"],
            },
            {
              point: "Complementary pairing occurs between mRNA codons and tRNA anticodons inside the A site.",
              keywords: ["anticodon", "a site", "codon"],
            },
            {
              point: "Peptide bonds form by condensation between adjacent amino acids as the ribosome translocates 5'→3' (exiting via E site).",
              keywords: ["peptide bond", "condensation", "translocates", "e site"],
            },
            {
              point: "A stop codon (UAA/UAG/UGA) terminates elongation and releases the finished chain.",
              keywords: ["stop codon", "uaa", "uag", "uga"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No accurate description of ribosomal translation." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions codons/anticodons or peptide bonds without full initiation-to-termination sequence." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately traces initiation at AUG, complementary tRNA entry (A/P/E sites), condensation peptide bonds, 5'→3' translocation, and stop-codon termination." },
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "mutations-division-cancer",
          strategy: "Gene → protein → cell → symptom chain",
          marks: 3,
          question:
            "Explain how a point substitution in the β-globin gene produces the physiological symptoms of sickle-cell anaemia. [3]",
          hints: [
            "Name the exact codon change (GAG → GUG) and amino-acid replacement (Glu → Val).",
            "Explain the R-group polarity shift and how deoxy-haemoglobin behaves inside red blood cells.",
          ],
          modelAnswer:
            "Replacing adenine with thymine in sense DNA changes mRNA codon 6 from GAG to GUG, substituting non-polar hydrophobic valine in place of polar hydrophilic glutamic acid. Under low oxygen, mutant deoxy-haemoglobin molecules stick together via hydrophobic patches into insoluble rigid fibres. These fibres distort erythrocytes into crescent sickle shapes that rupture rapidly (causing anaemia) and clog narrow capillaries, restricting tissue oxygen delivery.",
          markScheme: [
            {
              point: "mRNA GAG changes to GUG, replacing hydrophilic glutamic acid with hydrophobic valine.",
              keywords: ["valine", "glutamic acid", "hydrophobic", "gug"],
            },
            {
              point: "Deoxygenated haemoglobin polymerizes/sticks together into insoluble rigid fibres.",
              keywords: ["fibre", "fiber", "polymeriz", "stick together"],
            },
            {
              point: "Sickled erythrocytes block capillaries (restricting O₂ transport) and lyse prematurely causing anaemia.",
              keywords: ["capillar", "clog", "oxygen", "crescent"],
            },
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "mutations-division-cancer",
          strategy: "Point-by-point biological comparison",
          marks: 3,
          question:
            "Compare and contrast **somatic** and **germ-line** DNA mutations in multicellular animals. [3]",
          hints: [
            "State one shared similarity (both alter DNA base sequence randomly).",
            "Contrast which cell types are affected, whether offspring inherit them, and their roles in cancer vs evolution.",
          ],
          modelAnswer:
            "Both somatic and germ-line changes permanently modify the nucleotide sequence of DNA randomly or after mutagen exposure. However, somatic changes arise in non-reproductive body cells and cannot be transmitted to offspring, though they may drive local tumour growth in the affected individual. Conversely, germ-line changes arise in gametes or gamete-producing cells, are inherited by every cell of the offspring, and supply new heritable alleles for natural selection.",
          markScheme: [
            {
              point: "Similarity: both are random permanent alterations to the DNA nucleotide sequence.",
              keywords: ["both", "nucleotide sequence", "mutagen"],
            },
            {
              point: "Somatic mutations occur in body cells, are not inherited by offspring, and may cause cancer in the individual.",
              keywords: ["body cell", "not inherited", "cannot be transmitted", "tumour"],
            },
            {
              point: "Germ-line mutations occur in gametes/gonads, are passed to offspring, and generate heritable variation for evolution.",
              keywords: ["gamete", "inherited", "natural selection", "heritable"],
            },
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "dna-replication-protein-synthesis",
          strategy: "Pre-mRNA to mature proteome pipeline",
          marks: 6,
          question:
            "Explain how eukaryotic cells process **pre-mRNA** after transcription and modify newly translated **polypeptides** to expand proteome diversity and control protein lifespan. [6]",
          hints: [
            "Cover 5' capping, 3' poly-A tailing, intron splicing, and alternative exon combinations.",
            "Include post-translational folding/cleavage (e.g., proinsulin → active insulin), RER vs free ribosomes, and ubiquitin–proteasome recycling.",
          ],
          modelAnswer:
            "In the eukaryotic nucleus, newly transcribed pre-mRNA receives a 5' methylated cap and 3' poly-A tail to protect against enzymatic degradation and aid nuclear export. Spliceosomes then excise non-coding introns and join coding exons; through alternative splicing, different exon combinations produce multiple distinct mature mRNAs and protein isoforms from a single gene. After nuclear export, polysomes translate mRNA rapidly—on free ribosomes for cytosolic use or on rough ER ribosomes for secretion. Emerging chains undergo post-translational modification such as chaperone-assisted folding, glycosylation, disulfide cross-linking, and proteolytic cleavage—for example, removing signal and C-peptides from preproinsulin to yield active A- and B-chain insulin. Finally, damaged or unneeded proteins are tagged with ubiquitin and degraded into reusable amino acids by the proteasome.",
          markScheme: [
            {
              point: "Pre-mRNA gains a 5' cap and 3' poly-A tail for stability/export.",
              keywords: ["5' methylated cap", "5' cap", "poly-a tail"],
            },
            {
              point: "Spliceosomes remove non-coding introns and join coding exons.",
              keywords: ["spliceosome", "intron", "exon"],
            },
            {
              point: "Alternative splicing combines different exons from one gene to produce multiple protein isoforms.",
              keywords: ["alternative splicing", "isoform", "multiple"],
            },
            {
              point: "Post-translational modifications include folding, disulfide bridges, glycosylation, or phosphorylation.",
              keywords: ["disulfide", "glycosylation", "chaperone", "folding"],
            },
            {
              point: "Named proteolytic cleavage example: preproinsulin / proinsulin cleaved (C-peptide removed) to form active insulin.",
              keywords: ["preproinsulin", "proinsulin", "c-peptide", "insulin"],
            },
            {
              point: "Protein lifespan controlled by ubiquitin tagging and proteasome degradation into reusable amino acids.",
              keywords: ["ubiquitin", "proteasome", "reusable amino"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant account of eukaryotic RNA processing or post-translational modification." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies intron removal or basic protein folding without mechanistic detail or examples." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains splicing/alternative splicing and at least two post-translational modifications accurately." },
            { band: "5–6", marks: [5, 6], descriptor: "Comprehensive HL explanation integrating 5' cap/poly-A tail, alternative splicing, insulin cleavage, and ubiquitin–proteasome recycling." },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER P2: Cell Division, Cancer, Epigenetics & Water Potential (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "d1-d2-continuity-molecules-cells-p2",
      title: "Paper 2 · Cell Division, Epigenetics & Water Potential (SL & HL)",
      level: "SL",
      questions: [
        {
          id: "d1-d2-continuity-molecules-cells-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "mutations-division-cancer",
          strategy: "Sum P+M+A+T over total cells",
          question:
            "In a garlic root-tip slide of **250** cells, 205 are in interphase, 21 in prophase, 11 in metaphase, 7 in anaphase, and 6 in telophase. Calculate the **mitotic index as a decimal** (to 2 d.p.).",
          answer: { type: "number", value: 0.18, tolerance: 0.005, display: "0.18" },
          traps: [
            {
              spec: { type: "number", value: 18 },
              feedback: "18% is the percentage — give the mitotic index as a decimal (0.18).",
            },
            {
              spec: { type: "number", value: 0.22, tolerance: 0.005 },
              feedback: "You divided 45 by 205 (interphase only) — always divide by ALL 250 cells observed.",
            },
          ],
          hints: ["Sum prophase + metaphase + anaphase + telophase, then divide by 250."],
          solution: [
            "Mitotic cells = {{21 + 11 + 7 + 6 = 45}}.",
            "Mitotic index = {{45 / 250 = 0.18}}.",
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "mutations-division-cancer",
          strategy: "Post-S-phase chromatid doubling",
          question:
            "A diploid fruit fly (*Drosophila melanogaster*) has {{2n = 8}} chromosomes in a G₁ somatic cell. How many **sister chromatids** are present in total inside one somatic cell at Metaphase of mitosis?",
          answer: { type: "number", value: 16, display: "16" },
          traps: [
            {
              spec: { type: "number", value: 8 },
              feedback: "8 is the number of replicated chromosomes (centromeres) — each chromosome contains 2 sister chromatids after S phase!",
            },
            {
              spec: { type: "number", value: 4 },
              feedback: "4 is the haploid number n, not the metaphase chromatid count.",
            },
          ],
          hints: [
            "During S phase of interphase, every chromosome replicates into two identical sister chromatids.",
            "Multiply 8 chromosomes by 2 chromatids per chromosome.",
          ],
          solution: ["After S phase, each of the 8 chromosomes consists of 2 sister chromatids: {{8 * 2 = 16}} chromatids."],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "mutations-division-cancer",
          strategy: "Meiotic random orientation 2ⁿ",
          question:
            "A diploid frog species has {{2n = 20}} chromosomes. Ignoring crossing over, how many genetically distinct gamete chromosome combinations can result from **random orientation** of homologous pairs in Metaphase I?",
          answer: { type: "number", value: 1024, display: "1024" },
          traps: [
            {
              spec: { type: "number", value: 1048576 },
              feedback: "1,048,576 is 2²⁰ — use the haploid pair count n = 10, not 2n = 20.",
            },
            {
              spec: { type: "number", value: 20 },
              feedback: "Each independent homologous pair doubles the combinations, so compute 2ⁿ rather than 2 × n.",
            },
          ],
          hints: [
            "Find the haploid number of homologous pairs: {{n = 20 / 2 = 10}}.",
            "Evaluate {{2^10}}.",
          ],
          solution: [
            "Haploid number {{n = 20 / 2 = 10}}.",
            "Distinct combinations = {{2^10 = 1024}}.",
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "gene-expression-epigenetics-hl",
          strategy: "Promoter CpG methylation percentage",
          question:
            "Epigenomic sequencing of a breast tumour biopsy detects methyl tags on **36** out of **45** CpG sites in the *BRCA1* promoter. Calculate the **percentage (%)** of methylated CpG sites.",
          answer: { type: "number", value: 80, display: "80%" },
          hints: [
            "Divide methylated sites (36) by total CpG sites assayed (45).",
            "Multiply {{36 / 45 = 4 / 5}} by 100.",
          ],
          solution: ["Percentage methylated = {{(36 / 45) * 100 = 0.8 * 100 = 80}}%."],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "water-potential-osmosis",
          strategy: "Percentage change in mass",
          question:
            "A beetroot cylinder has an initial mass of **3.20 g** and reaches a final mass of **3.68 g** after 40 minutes in dilute sucrose solution. Calculate its **percentage change in mass** (%).",
          answer: { type: "number", value: 15, display: "+15%" },
          traps: [
            {
              spec: { type: "number", value: 13.0, tolerance: 0.1 },
              feedback: "13.0% comes from dividing by final mass (3.68 g) — always divide by INITIAL mass (3.20 g).",
            },
            {
              spec: { type: "number", value: -15 },
              feedback: "The cylinder gained mass (3.20 g → 3.68 g), so the percentage change is positive (+15%).",
            },
          ],
          hints: [
            "Find mass gained: {{3.68 - 3.20 = +0.48}} g.",
            "Divide by initial mass (3.20 g) and multiply by 100%.",
          ],
          solution: [
            "Mass change = {{3.68 - 3.20 = +0.48}} g.",
            "{{%Δm = (0.48 / 3.20) * 100 = +15}}%.",
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "water-potential-osmosis",
          strategy: "Water potential summation",
          question:
            "A root cortex cell has solute potential {{Ψ_s = -540}} kPa and pressure potential {{Ψ_p = +190}} kPa. Calculate its total water potential **Ψ** (in kPa, including sign).",
          answer: { type: "number", value: -350, display: "−350 kPa" },
          traps: [
            {
              spec: { type: "number", value: 350 },
              feedback: "Do not omit the negative sign: −540 + 190 = −350 kPa.",
            },
            {
              spec: { type: "number", value: -730 },
              feedback: "Add +190 kPa to −540 kPa rather than subtracting it.",
            },
          ],
          hints: ["Substitute directly into {{Ψ = Ψ_s + Ψ_p}}.", "Calculate {{-540 + 190}}."],
          solution: ["{{Ψ = Ψ_s + Ψ_p = -540 + 190 = -350}} kPa."],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "water-potential-osmosis",
          strategy: "Full turgor equilibrium in pure water",
          question:
            "A flaccid plant cell with {{Ψ_s = -720}} kPa is immersed in pure distilled water ({{Ψ = 0}} kPa) until equilibrium is reached. Assuming dilution of {{Ψ_s}} is negligible, state its equilibrium **pressure potential ({{Ψ_p}})** in kPa.",
          answer: { type: "number", value: 720, display: "+720 kPa" },
          traps: [
            {
              spec: { type: "number", value: -720 },
              feedback: "Wall turgor pressure potential in a swollen plant cell is POSITIVE (+720 kPa), balancing −720 kPa to give Ψ = 0.",
            },
          ],
          hints: [
            "At equilibrium in pure water, internal total water potential equals {{0}} kPa.",
            "Solve {{0 = -720 + Ψ_p}}.",
          ],
          solution: [
            "At equilibrium, {{Ψ_cell = Ψ_ext = 0}} kPa.",
            "{{0 = -720 + Ψ_p}}, giving {{Ψ_p = +720}} kPa.",
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "mutations-division-cancer",
          strategy: "Structured mitosis vs meiosis table points",
          marks: 4,
          question:
            "Compare and contrast the process and genetic products of **mitosis** and **meiosis** in a diploid eukaryote. [4]",
          hints: [
            "Include at least one clear similarity (e.g., both preceded by S-phase DNA replication and use spindle microtubules).",
            "Contrast number of divisions, daughter cell count/ploidy, and genetic identity vs variation.",
          ],
          modelAnswer:
            "Both nuclear divisions follow DNA replication during S phase and rely on spindle microtubules to move chromosomes. However, mitosis involves a single nuclear division separating sister chromatids to yield two genetically identical diploid (2n) daughter cells for growth and repair. In contrast, meiosis involves two successive divisions—separating homologous pairs first and sister chromatids second—producing four genetically distinct haploid (n) gametes through crossing over and random orientation.",
          markScheme: [
            {
              point: "Similarity: both are preceded by S-phase DNA replication and use spindle microtubules.",
              keywords: ["both", "s phase", "spindle"],
            },
            {
              point: "Mitosis has one division producing two diploid (2n) daughter cells; meiosis has two divisions producing four haploid (n) cells.",
              keywords: ["two", "diploid", "four", "haploid"],
            },
            {
              point: "Mitosis produces genetically identical clones, whereas meiosis generates genetically distinct gametes.",
              keywords: ["identical", "distinct"],
            },
            {
              point: "Meiosis features synapsis/crossing over and separates homologous chromosomes in Meiosis I, unlike mitosis.",
              keywords: ["homologous", "crossing over", "random orientation"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid similarity or distinction between mitosis and meiosis." },
            { band: "1–2", marks: [1, 2], descriptor: "States cell counts or ploidy differences but omits similarities or homologous pairing." },
            { band: "3–4", marks: [3, 4], descriptor: "Includes similarity plus clear, matched contrasts of divisions, ploidy, genetic identity, and crossing over." },
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "mutations-division-cancer",
          strategy: "Meiosis I diversity mechanisms",
          marks: 3,
          question:
            "Explain how **crossing over** and **random orientation** during Meiosis I create genetic diversity in sexually reproducing populations. [3]",
          hints: [
            "State the exact stage and chromatids involved in crossing over.",
            "State the exact stage and mathematical consequence ({{2^n}}) of random orientation.",
          ],
          modelAnswer:
            "During Prophase I, homologous chromosomes synapse into bivalents and non-sister chromatids exchange DNA segments at chiasmata, generating recombinant chromosomes with novel allele combinations. During Metaphase I, each homologous pair aligns independently on the cell equator with either maternal or paternal homologue facing either pole. This produces 2ⁿ independent chromosome assortments per gamete (over 8 million in humans), vastly expanding heritable variation.",
          markScheme: [
            {
              point: "Prophase I: non-sister chromatids of homologous bivalents exchange segments at chiasmata.",
              keywords: ["prophase i", "non-sister", "chiasmata", "bivalent"],
            },
            {
              point: "Crossing over produces recombinant chromatids with new combinations of alleles.",
              keywords: ["recombinant", "allele combinations", "novel allele"],
            },
            {
              point: "Metaphase I: independent equatorial alignment of maternal/paternal homologues generates 2ⁿ gamete combinations.",
              keywords: ["metaphase i", "equator", "2ⁿ", "maternal", "paternal"],
            },
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "mutations-division-cancer",
          strategy: "Checkpoints → oncogenes → metastasis",
          marks: 4,
          question:
            "Explain how **cyclins** regulate eukaryotic cell-cycle progression and how mutations in **proto-oncogenes** and **tumour suppressor genes** drive malignant cancer. [4]",
          hints: [
            "Explain cyclin–CDK binding and target phosphorylation at checkpoints.",
            "Distinguish gain-of-function oncogenes from loss-of-function tumour suppressors, and define metastasis.",
          ],
          modelAnswer:
            "Different cyclins accumulate rhythmically and bind cyclin-dependent kinases (CDKs); active cyclin–CDK complexes phosphorylate regulatory target proteins to authorize passage across G₁/S and G₂/M checkpoints. Gain-of-function changes convert growth-promoting proto-oncogenes into permanently active oncogenes that accelerate division continuously. Meanwhile, loss-of-function inactivation of tumour suppressors such as TP53 removes DNA-repair arrest and apoptosis brakes, enabling uncontrolled proliferation and eventual detachment of malignant cells through blood or lymph to seed secondary tumours (metastasis).",
          markScheme: [
            {
              point: "Cyclins bind and activate CDKs, phosphorylating target proteins to trigger checkpoint transitions.",
              keywords: ["cdk", "phosphorylat", "checkpoint"],
            },
            {
              point: "Proto-oncogenes mutate into overactive oncogenes that stimulate continuous uncontrolled division.",
              keywords: ["oncogene", "accelerate", "overactive"],
            },
            {
              point: "Inactivated tumour suppressor genes (e.g., TP53/p53) fail to halt the cycle for DNA repair or trigger apoptosis.",
              keywords: ["tp53", "apoptosis", "dna-repair", "brakes"],
            },
            {
              point: "Malignant cells detach and migrate via blood/lymph forming secondary tumours (metastasis).",
              keywords: ["metastasis", "secondary tumour", "lymph"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No accurate account of cell-cycle control or cancer genetics." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions cyclins or uncontrolled mitosis without explaining CDK phosphorylation or oncogene/suppressor contrast." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately links cyclin–CDK phosphorylation, oncogene activation, tumour suppressor loss, and metastasis." },
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Compare and contrast",
          guideRef: "gene-expression-epigenetics-hl",
          strategy: "Site, chromatin state, electrostatic effect",
          marks: 4,
          question:
            "Compare and contrast **DNA methylation** and **histone tail acetylation** as epigenetic regulators of transcription. [4]",
          hints: [
            "Start with what both share (reversible chemical tags altering expression without mutating DNA sequence).",
            "Contrast target site (cytosine vs lysine tail), chromatin packing (heterochromatin vs euchromatin), and transcription rate.",
          ],
          modelAnswer:
            "Both processes attach reversible chemical tags that alter gene transcription without changing the underlying nucleotide sequence. DNA methylation adds methyl groups directly to cytosine bases in CpG islands, recruiting condensing complexes that compact nucleosomes into dense heterochromatin and silence transcription. Conversely, histone acetylation adds acetyl groups to positively charged lysine tails, neutralizing electrostatic attraction to the negatively charged DNA backbone so chromatin relaxes into open euchromatin and boosts RNA polymerase access.",
          markScheme: [
            {
              point: "Similarity: both add reversible chemical tags modifying expression without altering DNA nucleotide sequence.",
              keywords: ["without changing", "nucleotide sequence", "reversible"],
            },
            {
              point: "DNA methylation targets cytosine bases (CpG islands), forming condensed heterochromatin and silencing transcription.",
              keywords: ["cytosine", "heterochromatin", "silence"],
            },
            {
              point: "Histone acetylation targets positively charged lysine residues on histone tails, neutralizing charge attraction to negative DNA.",
              keywords: ["lysine", "neutraliz", "negative"],
            },
            {
              point: "Histone acetylation relaxes chromatin into accessible euchromatin, increasing RNA polymerase binding and transcription.",
              keywords: ["euchromatin", "rna polymerase", "relaxes"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Confuses methylation and acetylation or claims they mutate DNA bases." },
            { band: "1–2", marks: [1, 2], descriptor: "States opposite transcriptional outcomes (silences vs activates) without target sites or chromatin charge mechanism." },
            { band: "3–4", marks: [3, 4], descriptor: "Precisely contrasts cytosine methylation (heterochromatin/silencing) and lysine acetylation (charge neutralization/euchromatin/activation) alongside their shared non-sequence nature." },
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "gene-expression-epigenetics-hl",
          strategy: "Identical genome + environmental epigenome drift",
          marks: 3,
          question:
            "Explain why 60-year-old monozygotic (identical) twins frequently display discordant health traits—such as only one developing Type 2 diabetes—despite developing from the same zygote. [3]",
          hints: [
            "Confirm that both twins retain identical nuclear DNA sequences.",
            "Link distinct environmental factors (diet, stress, pollutants) to epigenetic drift in DNA methylation/histone tags.",
          ],
          modelAnswer:
            "Monozygotic twins inherit an identical nuclear genome and begin life with nearly identical epigenomes. Over decades, differing environmental exposures—such as diet, physical activity, smoking, chronic stress, or air pollution—induce distinct DNA methylation and histone acetylation shifts (epigenetic drift). These divergent tags alter transcription of metabolic genes without changing DNA base sequences, generating different adult phenotypes and disease risks.",
          markScheme: [
            {
              point: "Both twins share an identical genome (DNA base sequence remains unchanged).",
              keywords: ["identical nuclear genome", "without changing", "same dna"],
            },
            {
              point: "Differing lifetime environmental exposures (diet, stress, smoking, pollution) modify chemical epigenetic tags.",
              keywords: ["diet", "stress", "pollution", "environmental exposure"],
            },
            {
              point: "Divergent DNA methylation/histone acetylation alters gene transcription (epigenetic drift), producing discordant phenotypes.",
              keywords: ["epigenetic drift", "methylation", "acetylation", "transcription"],
            },
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "water-potential-osmosis",
          strategy: "Wall vs wall-less hypotonic response",
          marks: 3,
          question:
            "Compare and contrast what happens to a human erythrocyte and a plant leaf cell after each is transferred into pure distilled water. [3]",
          hints: [
            "State the shared initial direction of net osmosis down the water potential gradient.",
            "Contrast the final structural outcome (lysis vs turgidity) by referencing the cellulose cell wall.",
          ],
          modelAnswer:
            "Both cells initially take in water by passive osmosis because distilled water has a higher water potential than their cytoplasm. Lacking a cell wall, the human erythrocyte swells until membrane tension ruptures the plasma membrane (lysis). In contrast, the plant leaf cell's rigid cellulose cell wall resists expansion, building an inward positive turgor pressure potential that halts further net water entry and keeps the cell firm and turgid without bursting.",
          markScheme: [
            {
              point: "Similarity: net water moves into both cells by osmosis from higher to lower water potential.",
              keywords: ["both", "higher water potential", "take in water"],
            },
            {
              point: "Erythrocyte has no cell wall, so it swells and bursts (undergoes lysis/haemolysis).",
              keywords: ["lysis", "rupture", "no cell wall", "lacking a cell wall"],
            },
            {
              point: "Plant cell's cellulose cell wall generates positive turgor pressure potential preventing bursting (cell becomes turgid).",
              keywords: ["cellulose", "turgor", "turgid", "pressure potential"],
            },
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Design",
          guideRef: "water-potential-osmosis",
          strategy: "IB practical experimental design",
          marks: 4,
          question:
            "Outline a controlled laboratory method using potato tissue cylinders to determine the **isotonic sucrose osmolarity** of potato cells, including how the data should be processed. [4]",
          hints: [
            "Include uniform cylinder dimensions, blotting dry before/after weighing, and a range of sucrose concentrations (e.g., 0.0–1.0 mol dm⁻³) with replicates.",
            "Explain calculating `%Δm` and reading the x-intercept at 0% mass change.",
          ],
          modelAnswer:
            "Cut equal-sized potato cylinders using a cork borer and ruler, blot each gently with paper towel to remove surface moisture, and record initial mass on an electronic balance. Immerse replicated cylinders (at least five per treatment) for a fixed duration (e.g. 45 minutes) at constant temperature across a serial dilution of sucrose solutions from 0.0 to 1.0 mol dm⁻³. Blot and record final mass, calculate percentage change in mass ((final − initial)/initial × 100%) to standardize for small initial mass differences, and plot mean %Δm against sucrose concentration; the x-intercept where %Δm equals zero estimates the isotonic osmolarity.",
          markScheme: [
            {
              point: "Prepare uniform cylinders, blot dry, and weigh initial and final masses across a serial dilution of sucrose (e.g. 0.0–1.0 mol dm⁻³).",
              keywords: ["cork borer", "blot", "serial dilution", "initial mass"],
            },
            {
              point: "Control key variables (immersion time, temperature, volume) and include replicates for reliability.",
              keywords: ["constant temperature", "fixed duration", "replicate"],
            },
            {
              point: "Calculate percentage change in mass ((final − initial)/initial × 100%) to normalize starting mass variation.",
              keywords: ["percentage change", "standardize", "normalize"],
            },
            {
              point: "Plot %Δm vs sucrose concentration and read the x-intercept (0% change) as the isotonic osmolarity.",
              keywords: ["x-intercept", "equals zero", "0%"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Method cannot determine tissue osmolarity." },
            { band: "1–2", marks: [1, 2], descriptor: "Places potato pieces in sucrose solutions and weighs them, but lacks controls, blotting, or %Δm graphing." },
            { band: "3–4", marks: [3, 4], descriptor: "Complete controlled protocol with replicates, blotting, %Δm normalization, and x-intercept interpolation." },
          ],
        },
        {
          id: "d1-d2-continuity-molecules-cells-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "water-potential-osmosis",
          strategy: "Quantitative Ψ equilibrium trajectory",
          marks: 5,
          question:
            "A turgid plant parenchyma cell with {{Ψ_s = -800}} kPa and {{Ψ_p = +450}} kPa is placed into an open beaker of sucrose solution whose water potential is {{Ψ_ext = -650}} kPa. Assuming {{Ψ_s}} changes negligibly, explain quantitatively the direction of net water movement, the final equilibrium {{Ψ_p}}, and whether the cell becomes plasmolysed. [5]",
          hints: [
            "First calculate the cell's initial total water potential {{Ψ_cell = -800 + 450}}.",
            "Compare {{−350}} kPa with {{−650}} kPa to determine flow direction.",
            "At equilibrium, {{Ψ_cell}} must match {{−650}} kPa — solve {{-650 = -800 + Ψ_p}} to check whether {{Ψ_p}} stays positive or hits zero!",
          ],
          modelAnswer:
            "Initially the cell's total water potential is Ψ = −800 + 450 = −350 kPa. Because −350 kPa is higher (less negative) than the external sucrose bath (−650 kPa), net water exits the cell by osmosis down the water potential gradient. As water leaves the vacuole, outward force on the cell wall declines, dropping pressure potential until equilibrium is reached at Ψ_cell = −650 kPa. Solving −650 = −800 + Ψ_p gives a final equilibrium Ψ_p of +150 kPa. Because Ψ_p remains strictly positive (+150 kPa > 0), the protoplast still presses lightly against the cell wall, so the cell becomes less turgid rather than plasmolysed.",
          markScheme: [
            {
              point: "Correctly computes initial cell water potential: Ψ = −800 + 450 = −350 kPa.",
              keywords: ["-350", "−350"],
            },
            {
              point: "Identifies net water moves OUT of the cell because −350 kPa is higher (less negative) than −650 kPa.",
              keywords: ["exits", "leaves", "less negative", "higher"],
            },
            {
              point: "States that loss of vacuole water decreases pressure potential (Ψ_p) until Ψ_cell equals −650 kPa.",
              keywords: ["declines", "decreases", "equilibrium"],
            },
            {
              point: "Solves −650 = −800 + Ψ_p to obtain final equilibrium Ψ_p = +150 kPa.",
              keywords: ["+150", "150 kpa"],
            },
            {
              point: "Concludes cell is NOT plasmolysed (remains slightly turgid) because final Ψ_p > 0 kPa.",
              keywords: ["less turgid", "rather than plasmolysed", "still presses", "strictly positive"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Incorrect water potential arithmetic and flow direction." },
            { band: "1–2", marks: [1, 2], descriptor: "Computes −350 kPa and predicts outward flow, but assumes plasmolysis without solving equilibrium Ψ_p." },
            { band: "3–4", marks: [3, 4], descriptor: "Calculates −350 kPa, outward flow, and +150 kPa equilibrium Ψ_p with minor omission in physical interpretation." },
            { band: "5", marks: [5, 5], descriptor: "Full quantitative reasoning from −350 kPa to +150 kPa equilibrium, explicitly proving cell remains weakly turgid and unplasmolysed." },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 synoptic / HL-stretch questions — all difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "d1-d2-continuity-molecules-cells-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "dna-replication-protein-synthesis",
      strategy: "Inverse PCR doubling cycles",
      question:
        "A PCR reaction begins with **12** copies of a target gene and runs at 100% efficiency. How many complete thermal cycles are required to produce exactly **3072** copies?",
      answer: { type: "number", value: 8, display: "8" },
      traps: [
        {
          spec: { type: "number", value: 256 },
          feedback: "256 is the amplification factor (2ⁿ = 3072 / 12) — now find n where 2ⁿ = 256!",
        },
      ],
      hints: [
        "Divide final copies (3072) by initial copies (12) to find {{2^n}}.",
        "{{3072 / 12 = 256}}: which power of 2 equals 256?",
      ],
      solution: [
        "Set {{12 * 2^n = 3072}}.",
        "Divide both sides by 12: {{2^n = 3072 / 12 = 256}}.",
        "Since {{2^8 = 256}}, exactly **8** PCR cycles are required.",
      ],
    },
    {
      id: "d1-d2-continuity-molecules-cells-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "mutations-division-cancer",
      strategy: "Non-disjunction karyotype tracking",
      question:
        "In a diploid mammal with {{2n = 24}} chromosomes, non-disjunction of one homologous pair occurs during **Anaphase I** of spermatogenesis, while Meiosis II separates sister chromatids normally. If one resulting {{n + 1}} sperm fertilizes a normal haploid egg, how many **chromosomes** will the trisomic zygote contain?",
      answer: { type: "number", value: 25, display: "25" },
      traps: [
        {
          spec: { type: "number", value: 13 },
          feedback: "13 is the chromosome count of the n + 1 sperm alone — add the 12 chromosomes from the normal haploid egg!",
        },
        {
          spec: { type: "number", value: 26 },
          feedback: "Only ONE parent had non-disjunction (13 + 12 = 25), not both parents.",
        },
      ],
      hints: [
        "Find normal haploid count: {{n = 24 / 2 = 12}}.",
        "Add the aneuploid sperm ({{n + 1 = 13}}) and normal egg ({{n = 12}}).",
      ],
      solution: [
        "Normal haploid count {{n = 24 / 2 = 12}}.",
        "Aneuploid sperm has {{12 + 1 = 13}} chromosomes; normal egg has 12.",
        "Fertilized trisomic zygote has {{13 + 12 = 25}} chromosomes ({{2n + 1}}).",
      ],
    },
    {
      id: "d1-d2-continuity-molecules-cells-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "water-potential-osmosis",
      strategy: "Linear x-intercept interpolation",
      question:
        "In a potato-strip osmosis assay, cylinders in `0.20 mol dm⁻³` sucrose show a mean mass change of **+6.0%**, while cylinders in `0.50 mol dm⁻³` sucrose show **−9.0%**. Assuming linearity between these two points, calculate the estimated **isotonic sucrose concentration** (in `mol dm⁻³`, to 2 d.p.).",
      answer: { type: "number", value: 0.32, tolerance: 0.005, display: "0.32 mol dm⁻³" },
      traps: [
        {
          spec: { type: "number", value: 0.35, tolerance: 0.005 },
          feedback: "0.35 is the midpoint of 0.20 and 0.50, which only works when +Δm and −Δm have equal magnitudes — interpolate proportionally!",
        },
      ],
      hints: [
        "Find the gradient: {{(-9.0 - 6.0) / (0.50 - 0.20) = -15.0 / 0.30 = -50}} % per mol dm⁻³.",
        "Determine how much concentration must rise above `0.20` for `%Δm` to drop from `+6.0%` down to `0%`.",
      ],
      solution: [
        "Gradient = {{(-9.0 - 6.0) / (0.50 - 0.20) = -50}} % per mol dm⁻³.",
        "Concentration step needed to fall by 6.0%: {{6.0 / 50 = 0.12}} mol dm⁻³.",
        "Isotonic concentration = {{0.20 + 0.12 = 0.32}} mol dm⁻³.",
      ],
    },
    {
      id: "d1-d2-continuity-molecules-cells-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "dna-replication-protein-synthesis",
      strategy: "Continuity vs versatility synthesis",
      marks: 5,
      question:
        "Evaluate how **DNA polymerase proofreading**, **degenerate genetic coding**, and **alternative RNA splicing** balance the competing cellular demands of genetic continuity and proteome versatility. [5]",
      hints: [
        "Link DNA polymerase III 3'→5' exonuclease proofreading to low replication error rates (continuity).",
        "Explain how code degeneracy absorbs third-base mutations as silent changes.",
        "Explain how alternative splicing expands protein variety without mutating the genome, plus one limitation/cost (e.g. splice-site mutations).",
      ],
      modelAnswer:
        "During S phase, DNA polymerase III uses 3'→5' exonuclease proofreading to excise mismatched nucleotides immediately, preserving extraordinary sequence fidelity across mitotic generations. Even when rare base substitutions escape repair, degeneracy of the genetic code cushions continuity by allowing synonymous third-base changes to encode the identical amino acid. Meanwhile, eukaryotic cells achieve massive proteome versatility without mutating nuclear DNA by using spliceosomes for alternative splicing—recombining different exons from one gene into tissue-specific protein isoforms. However, this complexity introduces vulnerability: mutations at intron–exon splice junctions can trigger exon skipping and severe disease, showing an evolutionary trade-off between fidelity and versatility.",
      markScheme: [
        {
          point: "DNA polymerase III 3'→5' exonuclease proofreading excises mismatched bases, upholding sequence continuity.",
          keywords: ["exonuclease", "proofreading", "mismatched"],
        },
        {
          point: "Degeneracy buffers point mutations via synonymous codons coding for the same amino acid.",
          keywords: ["synonymous", "identical amino acid", "degeneracy"],
        },
        {
          point: "Alternative splicing combines different exons from one gene to create diverse protein isoforms without changing DNA.",
          keywords: ["alternative splicing", "exon", "isoform"],
        },
        {
          point: "Links both halves: protects stable nuclear genome while expanding specialized cell proteomes.",
          keywords: ["fidelity", "tissue-specific", "without mutating"],
        },
        {
          point: "Evaluative trade-off/limitation (e.g., splice-junction mutations cause misfolding/disease, or ATP cost of splicing).",
          keywords: ["trade-off", "splice junction", "vulnerability", "exon skipping"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant discussion of replication fidelity, degeneracy, or splicing." },
        { band: "1–2", marks: [1, 2], descriptor: "Describes one or two mechanisms in isolation without evaluating continuity versus versatility." },
        { band: "3–4", marks: [3, 4], descriptor: "Clearly explains proofreading, degeneracy, and alternative splicing with partial evaluative synthesis." },
        { band: "5", marks: [5, 5], descriptor: "Tightly integrated HL evaluation balancing proofreading fidelity, wobble buffering, alternative splicing, and evolutionary trade-offs." },
      ],
    },
    {
      id: "d1-d2-continuity-molecules-cells-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Discuss",
      guideRef: "mutations-division-cancer",
      strategy: "Mechanism + therapeutic benefit + bioethics",
      marks: 6,
      question:
        "Discuss the molecular mechanism of **CRISPR–Cas9** gene editing, its therapeutic promise for single-gene disorders such as sickle-cell anaemia, and two key biological or ethical concerns regarding human germ-line editing. [6]",
      hints: [
        "Explain synthetic gRNA base pairing, PAM recognition, Cas9 double-strand cleavage, and NHEJ knockout vs HDR correction.",
        "Contrast somatic stem-cell editing (non-heritable) with germ-line embryo editing (heritable, off-target risks, consent/equity).",
      ],
      modelAnswer:
        "CRISPR–Cas9 adapts bacterial immunity by pairing a custom guide RNA (gRNA) with the Cas9 endonuclease. The gRNA hybridizes to a complementary 20-nucleotide DNA target adjacent to a PAM motif, prompting Cas9 to make a precise double-strand break; cellular repair then either disables a gene via non-homologous end joining (knockout) or inserts a corrected sequence using a donor template (homology-directed repair). For monogenic disorders like sickle-cell anaemia, editing a patient's own somatic bone-marrow stem cells can correct HBB or reactivate fetal haemoglobin, offering a durable cure without donor rejection. However, applying CRISPR to human germ-line embryos raises major hazards: off-target cuts elsewhere in the genome could cause unintended mutations or cancer, and any edits are passed permanently to all future descendants who cannot give informed consent, alongside societal risks of unequal access and non-medical enhancement.",
      markScheme: [
        {
          point: "Programmable guide RNA (gRNA) base-pairs with a complementary target DNA sequence adjacent to a PAM motif.",
          keywords: ["grna", "complementary", "pam"],
        },
        {
          point: "Cas9 endonuclease cleaves both strands (double-strand break).",
          keywords: ["cas9", "double-strand break", "endonuclease"],
        },
        {
          point: "DNA repair achieves gene knockout (NHEJ) or template-guided insertion/correction (HDR).",
          keywords: ["knockout", "template", "repair"],
        },
        {
          point: "Therapeutic advantage for sickle-cell anaemia: somatic bone-marrow editing corrects beta-globin or reactivates fetal haemoglobin permanently.",
          keywords: ["bone-marrow", "fetal haemoglobin", "somatic"],
        },
        {
          point: "Biological limitation: off-target cleavage causing unintended mutations, mosaicism, or oncogenesis.",
          keywords: ["off-target", "unintended", "cancer"],
        },
        {
          point: "Ethical concern: heritable germ-line changes affect future generations without consent / equity or enhancement risks.",
          keywords: ["consent", "descendant", "future generation", "unequal"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No accurate description of CRISPR–Cas9 or its implications." },
        { band: "1–2", marks: [1, 2], descriptor: "Names CRISPR cutting DNA with vague ethical comment; lacks molecular specificity." },
        { band: "3–4", marks: [3, 4], descriptor: "Accurately outlines gRNA/Cas9 mechanism and one medical benefit plus one valid limitation." },
        { band: "5–6", marks: [5, 6], descriptor: "Balanced, rigorous HL discussion covering gRNA/PAM/Cas9 cleavage, NHEJ/HDR repair, somatic sickle-cell therapy, off-target risks, and heritable ethical dilemmas." },
      ],
    },
    {
      id: "d1-d2-continuity-molecules-cells-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Discuss",
      guideRef: "gene-expression-epigenetics-hl",
      strategy: "Epigenetic switching + reprogramming vs imprinting",
      marks: 6,
      question:
        "Discuss how epigenetic modifications regulate eukaryotic gene expression, why most epigenetic tags are erased during early development, and how **genomic imprinting** or **environmental factors** can still produce transgenerational phenotypic effects. [6]",
      hints: [
        "Explain promoter DNA methylation vs histone acetylation without DNA mutation.",
        "Explain embryonic reprogramming restoring zygote totipotency.",
        "Discuss escaping erasure via genomic imprinting (liger vs tigon) and prenatal nutrition/famine (Dutch Hunger Winter or agouti mice).",
      ],
      modelAnswer:
        "Epigenetic marks control phenotype without modifying nucleotide sequences: cytosine methylation at CpG promoters recruits condensing factors forming heterochromatin that blocks RNA polymerase, whereas histone tail acetylation neutralizes lysine positive charges to open accessible euchromatin. Although mitotic copying maintains specialized identities in somatic tissues, most parental epigenetic tags undergo genome-wide reprogramming (erasure) during gametogenesis and early embryogenesis so the zygote regains totipotency capable of differentiating into every cell lineage. Nevertheless, specific imprinted loci escape erasure, preserving parent-of-origin silencing—for example, a male lion × female tiger produces a giant liger whereas a male tiger × female lion yields a smaller tigon due to opposing maternal and paternal growth-gene imprints. Similarly, severe environmental stressors such as prenatal famine (Dutch Hunger Winter) or maternal methyl-donor diets in agouti mice alter offspring methylation patterns and metabolic phenotypes across generations.",
      markScheme: [
        {
          point: "Epigenetics alters transcription without changing DNA base sequence via DNA methylation (silences/heterochromatin) and histone acetylation (activates/euchromatin).",
          keywords: ["heterochromatin", "euchromatin", "without modifying"],
        },
        {
          point: "Mitotic maintenance copies epigenetic marks across somatic divisions to preserve cell differentiation.",
          keywords: ["mitotic", "differentiation", "somatic"],
        },
        {
          point: "Embryonic/gametic reprogramming erases most tags to restore zygote totipotency.",
          keywords: ["reprogramming", "erasure", "totipotency"],
        },
        {
          point: "Genomic imprinting escapes erasure, retaining parent-of-origin allele silencing.",
          keywords: ["escape", "parent-of-origin", "imprinted"],
        },
        {
          point: "Named imprinting example (e.g., liger vs tigon growth-gene imprints).",
          keywords: ["liger", "tigon"],
        },
        {
          point: "Environmental persistence example (e.g., Dutch Hunger Winter famine / IGF2 or agouti mouse methyl-donor diet).",
          keywords: ["dutch hunger winter", "agouti", "famine", "methyl-donor"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant discussion of epigenetics or reprogramming." },
        { band: "1–2", marks: [1, 2], descriptor: "Defines epigenetics briefly without explaining reprogramming or named examples." },
        { band: "3–4", marks: [3, 4], descriptor: "Explains methylation/acetylation and reprogramming accurately, with one relevant example." },
        { band: "5–6", marks: [5, 6], descriptor: "Authoritative HL synthesis integrating chromatin tags, totipotency reprogramming, imprinting (liger/tigon), and environmental cohorts." },
      ],
    },
    {
      id: "d1-d2-continuity-molecules-cells-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "mutations-division-cancer",
      strategy: "Translating biopsy MI data into clinical biology",
      marks: 5,
      question:
        "A colon tissue biopsy displays a **mitotic index of 0.42** compared to **0.06** in adjacent normal mucosa, and biopsied cells continue entering S phase immediately after UV DNA damage. Analyse what these findings indicate about cell-cycle regulation, tumour development, and the distinction between benign and malignant disease. [5]",
      hints: [
        "Quantify the fold-increase (`0.42 / 0.06 = 7×`) in actively dividing cells.",
        "Connect failure to arrest after UV damage to loss of checkpoint control (e.g., mutated tumour suppressors / oncogenes).",
        "Distinguish localized primary benign growth from invasive malignant metastasis—note what extra evidence is needed to confirm malignancy.",
      ],
      modelAnswer:
        "A mitotic index of 0.42 indicates that 42% of biopsied cells are actively undergoing mitosis—seven times higher than the 6% baseline in healthy mucosa—signalling rapid, uncontrolled proliferation typical of a primary tumour. Continuing straight into S phase despite UV-induced thymine dimers demonstrates failure of the G₁/S DNA-damage checkpoint, consistent with loss-of-function mutations in tumour suppressor genes (such as TP53) and/or oncogene activation. Because damaged DNA is replicated unchecked, additional mutations accumulate rapidly. However, an elevated mitotic index alone confirms rapid division rather than definitive malignancy: diagnosing a malignant cancer requires histological evidence that abnormal cells have invaded surrounding basement membranes or metastasized via blood or lymph into secondary organs, unlike a localized, encapsulated benign tumour.",
      markScheme: [
        {
          point: "Quantifies 7-fold higher proportion of cells in mitosis (42% vs 6%), indicating rapid uncontrolled proliferation / tumour formation.",
          keywords: ["seven times", "7", "42%", "uncontrolled proliferation"],
        },
        {
          point: "Entering S phase after UV damage shows failure of G₁/S checkpoint arrest and DNA repair.",
          keywords: ["checkpoint", "thymine dimer", "dna-damage"],
        },
        {
          point: "Infers mutation in tumour suppressor genes (e.g. TP53) and/or oncogenes accumulating further genetic instability.",
          keywords: ["tumour suppressor", "tp53", "oncogene"],
        },
        {
          point: "Distinguishes benign (localized, encapsulated, non-invasive) from malignant (invasive, capable of metastasis).",
          keywords: ["encapsulated", "localized", "metastas"],
        },
        {
          point: "Critical analytical caveat: high mitotic index alone does not prove metastasis without evidence of tissue invasion / secondary tumours.",
          keywords: ["invaded", "secondary organ", "basement membrane", "alone"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid quantitative or biological analysis of the biopsy data." },
        { band: "1–2", marks: [1, 2], descriptor: "Notes faster cell division indicating cancer without quantifying 7× rise or distinguishing benign vs malignant." },
        { band: "3–4", marks: [3, 4], descriptor: "Quantifies the 7× mitotic index rise, links UV failure to checkpoints, and defines metastasis." },
        { band: "5", marks: [5, 5], descriptor: "Sharp clinical analysis quantifying 7× proliferation, checkpoint/tumour-suppressor failure, and explicitly noting invasion evidence required to distinguish malignant from benign." },
      ],
    },
    {
      id: "d1-d2-continuity-molecules-cells-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Explain",
      guideRef: "water-potential-osmosis",
      strategy: "Whole-plant Ψ gradient + halophyte adaptation",
      marks: 6,
      question:
        "Explain how a continuous water-potential gradient ({{Ψ = Ψ_s + Ψ_p}}) drives passive water movement from moist soil ({{Ψ = -50}} kPa) into roots and up transpiring xylem vessels, and explain why coastal halophytes must actively concentrate solutes in root vacuoles to survive seawater ({{Ψ = -2500}} kPa). [6]",
      hints: [
        "Trace decreasing (increasingly negative) Ψ values from soil → root hair → cortex → xylem → leaf air space.",
        "Explain how transpiration generates negative pressure potential ({{Ψ_p < 0}}) inside xylem.",
        "Show mathematically why an ordinary root (`Ψ = −600 kPa`) loses water to seawater (`−2500 kPa`) unless halophytes drive {{Ψ_s < -2500}} kPa by active transport.",
      ],
      modelAnswer:
        "Water moves passively down a continuous gradient from higher (less negative) to lower (more negative) total water potential. Root epidermal cells maintain lower water potential than moist soil (−50 kPa) by accumulating dissolved mineral ions (negative Ψ_s), drawing water inward by osmosis across root membranes and cortex cells. In leaves, evaporation from mesophyll cell walls into drier air creates steep negative water potentials that pull cohesive xylem water columns under tension, generating a negative pressure potential (Ψ_p < 0) inside xylem vessels that maintains continuous upward flow. By contrast, seawater has an extremely negative water potential of −2500 kPa, which is far lower than typical land-plant roots (roughly −500 kPa) and would rapidly pull water out causing lethal plasmolysis. Coastal halophytes overcome this by using ATP-driven active transport to pump compatible solutes and ions into root vacuoles, driving internal Ψ_s below −2500 kPa so net osmosis continues inward.",
      markScheme: [
        {
          point: "Water moves passively from higher (less negative) Ψ to lower (more negative) Ψ along a continuous soil–plant–atmosphere gradient.",
          keywords: ["continuous gradient", "less negative", "more negative"],
        },
        {
          point: "Root cells maintain lower Ψ than soil (−50 kPa) via dissolved solutes (negative Ψ_s), enabling passive osmotic uptake.",
          keywords: ["mineral ion", "negative ψ_s", "osmosis"],
        },
        {
          point: "Evaporation/transpiration in leaves places cohesive xylem water under tension, creating negative pressure potential (Ψ_p < 0).",
          keywords: ["tension", "negative pressure potential", "cohesive"],
        },
        {
          point: "Seawater (−2500 kPa) is strongly hypertonic / much lower Ψ than typical roots, causing net water loss and plasmolysis.",
          keywords: ["plasmolysis", "hypertonic", "pull water out"],
        },
        {
          point: "Halophytes use ATP-driven active transport to accumulate solutes/ions in root vacuoles.",
          keywords: ["active transport", "atp", "vacuole"],
        },
        {
          point: "This lowers internal solute potential Ψ_s below −2500 kPa, restoring a downward Ψ gradient for inward osmosis.",
          keywords: ["below −2500", "below -2500", "inward"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No accurate application of water potential to roots, xylem, or halophytes." },
        { band: "1–2", marks: [1, 2], descriptor: "States water enters roots by osmosis and seawater dehydrates plants without quantitative Ψ reasoning." },
        { band: "3–4", marks: [3, 4], descriptor: "Accurately applies Ψ = Ψ_s + Ψ_p to root uptake and negative xylem Ψ_p, OR clearly explains halophyte solute accumulation." },
        { band: "5–6", marks: [5, 6], descriptor: "Complete HL biophysical explanation linking soil→root→negative-Ψ_p xylem flow with active halophyte osmotic adjustment below −2500 kPa." },
      ],
    },
  ],
};
