import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "d1-d2-continuity-molecules-cells",
  title: "Theme D (1–2): Continuity & Change — Molecules & Cells",
  strand: "Theme D: Continuity & Change",
  icon: "🧬",
  level: "SL",
  summary:
    "How cells copy DNA faithfully, translate genes into proteins, mutate, divide by mitosis and meiosis, regulate chromatin epigenetically [HL], and maintain osmotic balance via water potential.",
  intro:
    "Life balances two opposing demands: **continuity** (passing exact genetic instructions from cell to cell and generation to generation) and **change** (mutations, meiosis, gene regulation, and dynamic osmotic responses). In Theme D (Levels 1–2) you move from the molecular machinery of DNA replication, PCR, transcription, translation, and mutation, up to whole-cell mitosis, meiosis, cancer biology, epigenetic chromatin switching [HL], and quantitative water potential ({{Ψ = Ψ_s + Ψ_p}}).",
  guide: [
    // =========================================================================
    // SECTION 1: D1.1–D1.2 DNA Replication, PCR & Protein Synthesis
    // =========================================================================
    {
      id: "dna-replication-protein-synthesis",
      heading: "D1.1–D1.2 DNA Replication, PCR & Protein Synthesis",
      level: "SL",
      discovery: {
        problem:
          "Meselson and Stahl grew *E. coli* for many generations in heavy nitrogen (¹⁵N) so every DNA strand was dense. They then transferred the bacteria into light nitrogen (¹⁴N) medium and spun extracted DNA in a density-gradient centrifuge after **1** and **2** rounds of replication. Before reading on: what banding pattern would you predict after Generation 1 and Generation 2 if replication were **conservative** versus **semi-conservative**?",
        idea:
          "After **Generation 1**, semi-conservative replication produces a **single intermediate hybrid band** (100% ¹⁵N/¹⁴N) — immediately ruling out conservative replication (which predicted two bands: 50% heavy + 50% light). After **Generation 2**, semi-conservative replication splits into **two equal bands**: 50% intermediate (¹⁵N/¹⁴N) and 50% light (¹⁴N/¹⁴N), which also rules out dispersive replication (which predicted one lighter hybrid band).",
      },
      body: `Every time a cell divides, its entire genome must be copied accurately. **DNA replication** is **semi-conservative**: each newly formed double helix retains **one original parental template strand** paired with **one newly synthesized complementary strand**.

### Core DNA Replication Machinery (SL) & Replication Fork Details [HL]
1. **Helicase** unwinds the double helix at the replication fork and breaks **hydrogen bonds** between complementary base pairs (A=T, C≡G), exposing two single-stranded templates.
2. Free **deoxyribonucleoside triphosphates (dNTPs)** pair with exposed bases by complementary base pairing.
3. **DNA polymerase** links incoming nucleotides via **phosphodiester bonds** (condensation reactions, releasing pyrophosphate).
4. **[HL] Polarity & Leading vs Lagging Strands:** DNA polymerase can **only** add a nucleotide to a free **3'-OH** group, so every new strand grows strictly in the **5'→3' direction** (reading the template **3'→5'**). Because DNA strands are **antiparallel**:
   - The **leading strand** is synthesized **continuously** towards the replication fork from a single RNA primer.
   - The **lagging strand** is synthesized **discontinuously** away from the fork in short **Okazaki fragments**, each started by an **RNA primer** synthesized by **RNA primase**.
   - **DNA polymerase III** elongates primers 5'→3' and uses **3'→5' exonuclease proofreading** to excise mismatched bases immediately.
   - **DNA polymerase I** removes RNA primers and replaces them with DNA nucleotides.
   - **DNA ligase** catalyses phosphodiester bonds to seal nicks between adjacent Okazaki fragments. *(DNA gyrase / topoisomerase relieves supercoiling strain ahead of helicase.)*

### PCR & Gel Electrophoresis DNA Profiling (SL)
- **Polymerase Chain Reaction (PCR)** amplifies tiny DNA samples in vitro using repeated thermal cycles:
  1. **Denaturation (~95 °C):** Heat breaks hydrogen bonds, separating dsDNA into single-stranded templates.
  2. **Annealing (~50–65 °C):** Short synthetic DNA primers bind to complementary sequences flanking the target region.
  3. **Extension (~72 °C):** Thermostable **Taq DNA polymerase** (from *Thermus aquaticus*) extends primers 5'→3' using dNTPs.
  After *n* cycles starting from {{N_0}} target molecules, total DNA copies equal {{N = N_0 * 2^n}}.
- **Gel electrophoresis** separates negatively charged DNA fragments (from phosphate groups) pulled through agarose pores towards the **positive anode**. Shorter fragments migrate faster and farther. Comparing variable-length **short tandem repeats (STRs / VNTRs)** produces DNA profiles for forensics and paternity analysis (every band in a child's profile must match either the mother or the biological father).

### Transcription & Translation (SL) + Eukaryotic Processing [HL]
| Feature | DNA Replication | Transcription | Translation |
|---|---|---|---|
| **Template** | Both DNA strands | **Antisense** DNA strand (3'→5') | Mature **mRNA** (5'→3') |
| **Main enzyme / complex** | DNA polymerase | **RNA polymerase** | **Ribosome** (rRNA + proteins) & tRNA |
| **Product** | Two identical dsDNA helices | Single-stranded **mRNA** (U replaces T) | **Polypeptide** chain (peptide bonds) |
| **Location (eukaryote)** | Nucleus | Nucleus | Cytoplasm (free ribosomes) or RER |

- **Sense vs Antisense DNA:** RNA polymerase reads the **antisense (template) strand (3'→5')** to build **mRNA (5'→3')**. Consequently, the **sense (coding) strand (5'→3')** has the **exact same base sequence as mRNA**, except with **T** instead of **U**.
- **Translation at the Ribosome:** mRNA is read in non-overlapping 3-base **codons** from the start codon (**AUG**, coding for Met) to a stop codon (**UAA, UAG, UGA** — no amino acid). Each **tRNA** carries a specific amino acid at its 3' CCA end (loaded by an ATP-dependent **tRNA-activating enzyme** [HL]) and pairs its complementary **anticodon** with the mRNA codon inside the ribosome's **A (aminoacyl), P (peptidyl), and E (exit)** sites. Peptidyl transferase (catalytic rRNA) forms peptide bonds via condensation as the ribosome translocates 5'→3'.
- **Properties of the Genetic Code:** Triplet, **universal** (nearly identical across all domains — enabling human insulin synthesis in transgenic bacteria), **degenerate/redundant** (61 sense codons encode 20 amino acids, cushioning silent mutations), and non-overlapping.
- **[HL] Eukaryotic RNA Processing & Post-Translational Control:** RNA polymerase binds a **promoter** sequence. Eukaryotic pre-mRNA receives a 5' cap and 3' poly-A tail, while spliceosomes remove non-coding **introns** and join coding **exons**. **Alternative splicing** joins different exon combinations so one gene can yield multiple protein isoforms. Multiple ribosomes translating one mRNA simultaneously form a **polysome**. After synthesis, polypeptides fold and undergo **post-translational modification** (e.g., **preproinsulin → proinsulin → active insulin** via proteolytic cleavage and disulfide bridge formation), while worn-out proteins are tagged with **ubiquitin** and recycled into amino acids by the **proteasome**.`,
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" role="img" aria-label="DNA replication fork showing leading and lagging strands on the left and ribosomal translation of mRNA codons by tRNA anticodons on the right"><rect width="680" height="280" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="175" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">DNA Replication Fork [SL + HL]</text><line x1="345" y1="16" x2="345" y2="264" stroke="#cbd5e1" stroke-dasharray="5 4" stroke-width="1.5"/><text x="515" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Ribosome Translation (5\' to 3\')</text><path d="M24 135 L108 135 Q138 135 162 84 L320 84" fill="none" stroke="#1e3a8a" stroke-width="3.5"/><path d="M24 147 L108 147 Q138 147 162 198 L320 198" fill="none" stroke="#1e3a8a" stroke-width="3.5"/><polygon points="122,124 148,141 122,158" fill="#0d9488" opacity="0.9"/><text x="128" y="114" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f766e">Helicase</text><text x="26" y="126" font-size="10" font-weight="700" fill="#1e3a8a">5\'</text><text x="26" y="162" font-size="10" font-weight="700" fill="#1e3a8a">3\'</text><text x="316" y="76" font-size="10" font-weight="700" fill="#1e3a8a">3\'</text><text x="316" y="214" font-size="10" font-weight="700" fill="#1e3a8a">5\'</text><line x1="312" y1="98" x2="174" y2="98" stroke="#dc2626" stroke-width="3.5"/><polygon points="174,92 162,98 174,104" fill="#dc2626"/><text x="242" y="116" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b91c1c">Leading strand (5\'→3\' continuous)</text><text x="316" y="102" font-size="9.5" font-weight="700" fill="#b91c1c">5\'</text><line x1="176" y1="184" x2="196" y2="184" stroke="#d97706" stroke-width="4"/><line x1="196" y1="184" x2="238" y2="184" stroke="#7c3aed" stroke-width="3.5"/><polygon points="236,178 247,184 236,190" fill="#7c3aed"/><line x1="255" y1="184" x2="273" y2="184" stroke="#d97706" stroke-width="4"/><line x1="273" y1="184" x2="314" y2="184" stroke="#7c3aed" stroke-width="3.5"/><polygon points="312,178 323,184 312,190" fill="#7c3aed"/><text x="244" y="170" text-anchor="middle" font-size="10" font-weight="700" fill="#6d28d9">Okazaki fragments (5\'→3\')</text><text x="186" y="232" text-anchor="middle" font-size="9.5" fill="#b45309">Orange = RNA primer (Primase)</text><text x="186" y="248" text-anchor="middle" font-size="9.5" fill="#475569">DNA Pol III extends · Pol I replaces · Ligase seals</text><ellipse cx="515" cy="118" rx="108" ry="58" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><ellipse cx="515" cy="184" rx="88" ry="26" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/><rect x="438" y="96" width="38" height="44" rx="6" fill="#ffffff" stroke="#93c5fd"/><text x="457" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">E</text><rect x="496" y="96" width="38" height="44" rx="6" fill="#fef3c7" stroke="#f59e0b"/><text x="515" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">P</text><rect x="554" y="96" width="38" height="44" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="573" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">A</text><line x1="366" y1="168" x2="660" y2="168" stroke="#0f766e" stroke-width="4"/><text x="366" y="160" font-size="10" font-weight="700" fill="#0f766e">5\'</text><text x="652" y="160" font-size="10" font-weight="700" fill="#0f766e">3\' mRNA</text><text x="457" y="183" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">UUU</text><text x="515" y="183" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">AUG</text><text x="573" y="183" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">GAG</text><text x="515" y="135" text-anchor="middle" font-size="10" font-weight="700" fill="#b45309">UAC</text><text x="573" y="135" text-anchor="middle" font-size="10" font-weight="700" fill="#15803d">CUC</text><circle cx="515" cy="76" r="14" fill="#f59e0b"/><text x="515" y="80" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Met</text><circle cx="484" cy="60" r="13" fill="#fb923c"/><text x="484" y="64" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">Val</text><line x1="495" y1="67" x2="504" y2="71" stroke="#78350f" stroke-width="2.5"/><circle cx="573" cy="76" r="14" fill="#16a34a"/><text x="573" y="80" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Glu</text><path d="M527 72 Q544 58 560 70" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 2"/><text x="515" y="232" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">Ribosome moves 5\' → 3\' along mRNA</text><text x="515" y="248" text-anchor="middle" font-size="9.5" fill="#475569">tRNA anticodon pairs codon · peptide bond formed</text></svg>',
      diagramCaption:
        "Left: Antiparallel DNA strands force discontinuous Okazaki fragment synthesis on the lagging strand because DNA polymerase only extends 5'→3'. Right: Ribosomal A, P, and E sites coordinate codon–anticodon pairing and peptide bond formation.",
      workedExamples: [
        {
          title: "Transcribing Antisense DNA to mRNA & Counting Amino Acids",
          problem:
            "A section of a gene's **antisense (template) strand** reads `3'-TAC-CTC-GGA-TTT-ATT-5'`. Deduce (a) the complementary **mRNA** sequence (5'→3'), (b) the **sense (coding)** DNA sequence (5'→3'), and (c) the number of amino acids in the resulting polypeptide (given `UAA` is a stop codon).",
          steps: [
            "Pair every base on the 3'→5' antisense DNA template with its RNA complement (A→U, T→A, C→G, G→C): `3'-TAC-CTC-GGA-TTT-ATT-5'` transcribes into `5'-AUG-GAG-CCU-AAA-UAA-3'`.",
            "Obtain the 5'→3' sense (coding) DNA strand directly by replacing every U in mRNA with T: `5'-ATG-GAG-CCT-AAA-TAA-3'`.",
            "Count codons: there are 5 codons total (`AUG`, `GAG`, `CCU`, `AAA`, `UAA`). Because `UAA` is a STOP codon (binds a release factor rather than a tRNA carrying an amino acid), the polypeptide contains {{5 - 1 = 4}} amino acids (Met–Glu–Pro–Lys).",
          ],
          answer: "mRNA: `5'-AUG-GAG-CCU-AAA-UAA-3'`; Sense DNA: `5'-ATG-GAG-CCT-AAA-TAA-3'`; 4 amino acids.",
          yourTurn: {
            question:
              "An antisense (template) DNA strand reads `3'-TAC-GGA-CCA-TTC-5'`. Write the resulting **mRNA** base sequence (5'→3', letters only, no hyphens).",
            answer: {
              type: "text",
              accept: ["AUGCCUGGUAAG", "5'-AUGCCUGGUAAG-3'", "AUG-CCU-GGU-AAG", "AUG CCU GGU AAG"],
              display: "AUGCCUGGUAAG",
            },
            solution:
              "Apply complementary RNA pairing to `3'-TAC-GGA-CCA-TTC-5'` (T→A, A→U, C→G, G→C): `TAC→AUG`, `GGA→CCU`, `CCA→GGU`, `TTC→AAG`, giving `5'-AUGCCUGGUAAG-3'`.",
          },
        },
        {
          title: "PCR Exponential Amplification & Meselson–Stahl Fractions",
          problem:
            "A crime-scene swab contains **4** intact copies of a target STR DNA sequence. Calculate the number of copies after **8 PCR cycles**, assuming 100% efficiency.",
          steps: [
            "Each complete PCR cycle doubles the number of target DNA molecules: {{N = N_0 * 2^n}}.",
            "Substitute {{N_0 = 4}} and {{n = 8}}: {{N = 4 * 2^8 = 4 * 256}}.",
            "Multiply to find total target copies: {{4 * 256 = 1024}} DNA copies.",
          ],
          answer: "1024 copies",
          yourTurn: {
            question:
              "Starting with **5** target DNA molecules, how many copies are present after **6** complete cycles of PCR (100% efficiency)?",
            answer: { type: "number", value: 320, display: "320" },
            solution: "Use {{N = N_0 * 2^n = 5 * 2^6 = 5 * 64 = 320}} copies.",
          },
        },
      ],
      keyPoints: [
        "DNA replication is **semi-conservative**: each daughter helix contains one old template strand and one new strand (proven by Meselson–Stahl's 100% hybrid Gen 1 and 50:50 hybrid:light Gen 2 bands).",
        "DNA and RNA polymerases **only** add nucleotides to a free **3'-OH**, so all nucleic acid synthesis runs **5'→3'** along the new strand.",
        "[HL] Leading strand = continuous synthesis towards the fork; lagging strand = discontinuous **Okazaki fragments** away from the fork requiring **primase**, **DNA Pol III**, **DNA Pol I**, and **DNA ligase**.",
        "RNA polymerase transcribes the **antisense (template)** strand; the **sense (coding)** strand matches mRNA with T instead of U.",
        "The genetic code is **triplet, universal, degenerate, and non-overlapping**; stop codons (`UAA`, `UAG`, `UGA`) terminate translation without adding an amino acid.",
        "[HL] Eukaryotic **intron splicing** and **alternative splicing** enable a single gene to encode multiple distinct polypeptides.",
      ],
      whyItWorks:
        "Nucleoside triphosphates (dNTPs / rNTPs) carry their own high-energy phosphate tail on the **5' carbon**. Breaking off pyrophosphate (PPᵢ) powers phosphodiester bond formation onto the growing **3'-OH** end. If synthesis ran 3'→5' instead, proofreading removal of a mismatched base would leave a dead monophosphate end that could never be re-extended — so 5'→3' growth is essential for high-fidelity proofreading!",
      strategies: [
        "Always check strand labels first: **antisense/template** requires complementary pairing (`A→U, T→A, C→G, G→C`), whereas **sense/coding** simply swaps `T → U`.",
        "When computing polypeptide length from base counts, divide by 3 first, then check whether the prompt includes a **stop codon** (subtract 1 amino acid if included) or **introns** (subtract intron bases before dividing by 3).",
        "For Meselson–Stahl ratios after {{n >= 1}} rounds in ¹⁴N, exactly **2** original ¹⁵N strands remain among {{2^n}} total duplexes, so hybrid fraction = {{2 / 2^n = 1 / 2^(n-1)}}.",
      ],
      thinkDeeper:
        "Why does PCR use **Taq polymerase** rather than human DNA polymerase, and why do primers have to be added in massive excess before thermal cycling starts?",
    },

    // =========================================================================
    // SECTION 2: D1.3 & D2.1 Mutations, CRISPR, Mitosis, Meiosis & Tumours
    // =========================================================================
    {
      id: "mutations-division-cancer",
      heading: "D1.3 & D2.1 Mutations, CRISPR, Mitosis, Meiosis & Tumours",
      level: "SL",
      discovery: {
        problem:
          "Compare two DNA errors inside codon 2 of a 100-codon gene: **Mutation X** changes the third base of codon 2 (`CCU → CCC`), while **Mutation Y** deletes a single base inside codon 2. Which mutation is far more likely to destroy the protein's 3D tertiary structure, and why?",
        idea:
          "**Mutation X** is a **silent (synonymous) substitution**: due to degeneracy of the genetic code, both `CCU` and `CCC` code for proline, leaving the amino-acid sequence untouched. **Mutation Y** is a **frameshift deletion**: because codons are read in non-overlapping triplets, removing one base shifts the reading frame for **all 98 downstream codons**, scrambling almost every amino acid and frequently creating a premature stop codon.",
      },
      body: [
        "### Gene Mutations & Gene Editing (D1.3)",
        "Mutations are random, permanent changes to the DNA base sequence arising spontaneously (DNA replication errors) or from **mutagens** (ionizing X-rays/gamma rays, UV light forming thymine dimers, or mutagenic chemicals such as tobacco tar and benzene).",
        "- **Base substitution** (replaces one nucleotide with another):",
        "  - **Silent:** New codon still encodes the **same** amino acid (degeneracy of the genetic code).",
        "  - **Missense:** New codon encodes a **different** amino acid. Classic IB example: **Sickle-cell anaemia** — a single substitution in the *HBB* β-globin gene changes sense DNA `GAG → GTG` (antisense `CTC → CAC`), altering mRNA `GAG → GUG` and replacing hydrophilic **glutamic acid (Glu)** with hydrophobic **valine (Val)** at position 6. Deoxygenated haemoglobin molecules stick together into rigid fibres, distorting erythrocytes into sickles that block capillaries.",
        "  - **Nonsense:** Converts an amino-acid codon into a **STOP codon** (`UAA`, `UAG`, `UGA`), truncating the polypeptide.",
        "- **Insertion / Deletion (Indel):** Adding or removing bases not in multiples of 3 causes a **frameshift**, altering every downstream codon.",
        "- **Somatic vs Germ-line:** **Somatic** mutations occur in body cells (not passed to offspring; may trigger tumours). **Germ-line** mutations occur in gametes or gamete-forming cells and are **heritable**, providing the ultimate source of new alleles for natural selection.",
        "- **[HL] CRISPR–Cas9 & Conserved Sequences:** Scientists study gene function via **gene knockouts** (inactivating a target gene to observe lost traits). **CRISPR–Cas9**, adapted from bacterial viral defence, uses a custom **guide RNA (gRNA)** to direct the **Cas9 endonuclease** to an exact complementary DNA locus adjacent to a PAM motif, creating a double-strand break that either knocks out the gene or inserts a corrected sequence. Across evolutionary time, **highly conserved sequences** (such as histone genes, rRNA genes, and developmental *HOX* genes) change very little because almost any mutation impairs vital function and is removed by purifying selection.",
        "",
        "### Mitosis, Cytokinesis & Mitotic Index (D2.1)",
        "During **Interphase**, cells grow and synthesize organelles (**G₁**), replicate DNA semi-conservatively so each chromosome consists of two identical sister chromatids (**S**), and complete growth/repair (**G₂**).",
        "- **Mitosis (PMAT)** produces **two genetically identical diploid (2n) nuclei**:",
        "  - **Prophase:** Chromatin supercoils/condenses into visible chromosomes (aided by histones); spindle microtubules assemble; nuclear envelope breaks down.",
        "  - **Metaphase:** Chromosomes line up singly along the **equator**; spindle microtubules attach to **centromeres**.",
        "  - **Anaphase:** Centromeres divide; spindle microtubules shorten, pulling **sister chromatids** (now individual chromosomes) to opposite poles.",
        "  - **Telophase:** Nuclear envelopes reform around each chromosome set; chromosomes uncoil back into chromatin.",
        "- **Cytokinesis** divides the cytoplasm: **animal cells** pinch inward using an actin–myosin **cleavage furrow**; **plant cells** fuse Golgi vesicles along the equator to construct a **cell plate** (new cellulose wall). *(Note: cytokinesis can also be **unequal**, as in mammalian oogenesis producing polar bodies or yeast budding.)*",
        "- **Mitotic Index:** Measures proliferative activity in tissue samples (e.g., root tips or tumour biopsies): {{MI = (\"cells in mitosis (P + M + A + T)\") / (\"total cells observed\")}}, often expressed as a percentage by multiplying by 100.",
        "",
        "### Meiosis & Genetic Variation (D2.1)",
        "**Meiosis** is a two-stage **reduction division** producing **four genetically distinct haploid (n) gametes** from one diploid (2n) cell:",
        "- **Meiosis I (2n → n):** Homologous chromosomes pair up (**synapsis**) in **Prophase I**, forming bivalents and exchanging segments between **non-sister chromatids** at **chiasmata** (**crossing over**). In **Metaphase I**, homologous pairs align by **random orientation** along the equator, generating {{2^n}} possible combinations (in humans, {{2^23}} ≈ 8.4 million per gamete, before crossing over!). **Anaphase I** separates **homologous chromosomes** (centromeres stay intact).",
        "- **Meiosis II:** Separates **sister chromatids** (centromeres divide in Anaphase II), yielding four haploid gametes.",
        "- **Non-disjunction:** Failure of homologous chromosomes (Meiosis I) or sister chromatids (Meiosis II) to separate produces aneuploid gametes ({{n + 1}} or {{n - 1}}). Fertilization of an {{n + 1}} gamete carrying an extra chromosome 21 causes **Down syndrome (trisomy 21)**, whose incidence rises with maternal age.",
        "",
        "### Cell-Cycle Control & Cancer [HL]",
        "- **Cyclins (D, E, A, B)** accumulate and degrade in rhythmic waves, binding **cyclin-dependent kinases (CDKs)**. Active cyclin–CDK complexes phosphorylate target proteins to authorize progression past the **G₁/S**, **G₂/M**, and **M (spindle)** checkpoints.",
        "- **Proto-oncogenes** normally stimulate regulated division; a gain-of-function mutation converts them into overactive **oncogenes**.",
        "- **Tumour suppressor genes** (e.g., *TP53* encoding p53) halt the cycle for DNA repair or trigger apoptosis; loss-of-function mutations remove braking control.",
        "- Uncontrolled mitosis creates a **primary tumour**. Unlike encapsulated benign tumours, **malignant** tumour cells invade adjacent tissues and travel through blood or lymph to establish **secondary tumours** (**metastasis**).",
      ].join("\n"),
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" role="img" aria-label="Meiosis I crossing over at chiasmata on the left and cyclin concentration waves driving cell cycle checkpoints on the right"><rect width="680" height="280" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="168" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Meiosis I: Crossing Over (Prophase I)</text><line x1="336" y1="16" x2="336" y2="264" stroke="#cbd5e1" stroke-dasharray="5 4" stroke-width="1.5"/><text x="508" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Cyclin Waves &amp; Checkpoints [HL]</text><path d="M55 62 L55 186 M75 62 L75 186" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/><circle cx="65" cy="112" r="6" fill="#1e3a8a"/><path d="M105 62 L105 186 M125 62 L125 186" stroke="#dc2626" stroke-width="7" stroke-linecap="round"/><circle cx="115" cy="112" r="6" fill="#991b1b"/><path d="M75 142 Q90 154 105 166" fill="none" stroke="#2563eb" stroke-width="5"/><path d="M105 142 Q90 154 75 166" fill="none" stroke="#dc2626" stroke-width="5"/><circle cx="90" cy="154" r="5" fill="#facc15" stroke="#854d0e" stroke-width="1.5"/><text x="90" y="208" text-anchor="middle" font-size="10.5" font-weight="700" fill="#854d0e">Chiasma (non-sister swap)</text><text x="160" y="130" text-anchor="middle" font-size="18" font-weight="700" fill="#475569">→</text><path d="M196 62 L196 186" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/><path d="M216 62 L216 150" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/><path d="M216 154 L216 186" stroke="#dc2626" stroke-width="7" stroke-linecap="round"/><circle cx="206" cy="112" r="6" fill="#1e3a8a"/><path d="M250 62 L250 150" stroke="#dc2626" stroke-width="7" stroke-linecap="round"/><path d="M250 154 L250 186" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/><path d="M270 62 L270 186" stroke="#dc2626" stroke-width="7" stroke-linecap="round"/><circle cx="260" cy="112" r="6" fill="#991b1b"/><text x="233" y="208" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f766e">2 recombinant chromatids</text><text x="168" y="232" text-anchor="middle" font-size="9.5" fill="#475569">Anaphase I separates homologous pairs (2n→n)</text><text x="168" y="248" text-anchor="middle" font-size="9.5" fill="#475569">Anaphase II separates sister chromatids</text><line x1="366" y1="212" x2="654" y2="212" stroke="#334155" stroke-width="2"/><line x1="366" y1="54" x2="366" y2="212" stroke="#334155" stroke-width="2"/><text x="355" y="134" text-anchor="middle" font-size="10" font-weight="700" fill="#334155" transform="rotate(-90 355 134)">[Cyclin]</text><rect x="368" y="216" width="84" height="18" rx="3" fill="#e0f2fe"/><text x="410" y="229" text-anchor="middle" font-size="10" font-weight="700" fill="#0369a1">G1</text><rect x="454" y="216" width="76" height="18" rx="3" fill="#fef3c7"/><text x="492" y="229" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">S</text><rect x="532" y="216" width="60" height="18" rx="3" fill="#ede9fe"/><text x="562" y="229" text-anchor="middle" font-size="10" font-weight="700" fill="#6d28d9">G2</text><rect x="594" y="216" width="58" height="18" rx="3" fill="#fee2e2"/><text x="623" y="229" text-anchor="middle" font-size="10" font-weight="700" fill="#b91c1c">M</text><path d="M368 206 Q420 142 520 138 Q590 136 650 164" fill="none" stroke="#0284c7" stroke-width="2.5"/><path d="M398 208 Q448 82 478 206" fill="none" stroke="#d97706" stroke-width="2.5"/><path d="M460 208 Q544 74 606 206" fill="none" stroke="#7c3aed" stroke-width="2.5"/><path d="M534 208 Q604 62 634 206" fill="none" stroke="#dc2626" stroke-width="3"/><line x1="453" y1="54" x2="453" y2="212" stroke="#64748b" stroke-dasharray="3 3"/><line x1="593" y1="54" x2="593" y2="212" stroke="#64748b" stroke-dasharray="3 3"/><text x="453" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#475569">G1/S</text><text x="593" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#475569">G2/M</text><text x="404" y="138" font-size="9.5" font-weight="700" fill="#0284c7">D</text><text x="448" y="102" font-size="9.5" font-weight="700" fill="#d97706">E</text><text x="540" y="96" font-size="9.5" font-weight="700" fill="#7c3aed">A</text><text x="612" y="84" font-size="9.5" font-weight="700" fill="#dc2626">B</text><text x="510" y="254" text-anchor="middle" font-size="9.5" fill="#475569">Cyclins bind CDKs → threshold phosphorylation triggers transition</text></svg>',
      diagramCaption:
        "Left: Crossing over between non-sister chromatids at chiasmata creates recombinant chromosomes during Prophase I. Right: Sequential peaks of Cyclins D, E, A, and B activate CDKs to drive G₁/S and G₂/M checkpoints [HL].",
      workedExamples: [
        {
          title: "Calculating Mitotic Index from an Onion Root Tip Squash",
          problem:
            "A student counts **150** onion root-tip cells under a light microscope: 126 in interphase, 11 in prophase, 5 in metaphase, 4 in anaphase, and 4 in telophase. Calculate the **mitotic index** (a) as a decimal and (b) as a percentage.",
          steps: [
            "Sum the cells actively undergoing mitosis (P + M + A + T): {{11 + 5 + 4 + 4 = 24}} cells.",
            "Divide by the total number of cells observed (150): {{24 / 150 = 0.16}}.",
            "Convert to a percentage: {{0.16 * 100 = 16}}%.",
          ],
          answer: "0.16 (or 16%)",
          yourTurn: {
            question:
              "In a tissue biopsy of **180** cells, 12 are in prophase, 6 in metaphase, 5 in anaphase, and 4 in telophase. Calculate the **mitotic index as a percentage** (%).",
            answer: { type: "number", value: 15, display: "15%" },
            solution:
              "Dividing cells = {{12 + 6 + 5 + 4 = 27}}. Mitotic index = {{(27 / 180) * 100 = 15}}%.",
          },
        },
        {
          title: "Tracking Chromosomes & Chromatids in Mitosis vs Meiosis",
          problem:
            "A diploid mammal has {{2n = 16}} chromosomes in a G₁ somatic cell. State the number of (a) **chromatids** per cell at G₂, (b) **chromosomes** per daughter cell after mitosis, (c) **chromosomes** per gamete after meiosis, and (d) genetically distinct combinations from **random orientation** alone.",
          steps: [
            "During S phase, each of the 16 chromosomes replicates into 2 sister chromatids, giving {{16 * 2 = 32}} chromatids (still 16 chromosomes joined at centromeres) in G₂.",
            "Mitosis preserves ploidy, so each daughter cell receives {{2n = 16}} chromosomes.",
            "Meiosis halves ploidy to haploid gametes: {{n = 16 / 2 = 8}} chromosomes per gamete.",
            "Random orientation of {{n = 8}} homologous pairs gives {{2^8 = 256}} possible maternal/paternal combinations per gamete.",
          ],
          answer: "(a) 32 chromatids; (b) 16 chromosomes; (c) 8 chromosomes; (d) 256 combinations.",
          yourTurn: {
            question:
              "A diploid plant has {{2n = 14}} chromosomes. How many genetically distinct gamete combinations can arise from **random orientation** of homologous pairs alone (ignoring crossing over)?",
            answer: { type: "number", value: 128, display: "128" },
            solution:
              "Haploid number {{n = 14 / 2 = 7}}. Number of combinations = {{2^7 = 128}}.",
          },
        },
      ],
      keyPoints: [
        "Base substitutions yield **silent** (same amino acid), **missense** (different amino acid, e.g. sickle-cell Glu→Val), or **nonsense** (premature STOP) mutations; non-multiple-of-3 indels cause **frameshifts**.",
        "Only **germ-line** mutations are inherited by offspring; **somatic** mutations affect only the individual.",
        "**Mitosis** maintains ploidy (2 identical 2n cells) by separating sister chromatids; **Meiosis** halves ploidy (4 distinct n gametes) via **crossing over** (Prophase I) and **random orientation** (Metaphase I).",
        "Animal cytokinesis uses a **cleavage furrow** (actin–myosin ring); plant cytokinesis builds a **cell plate** from Golgi vesicles.",
        "[HL] **Cyclin–CDK** complexes control checkpoints; **oncogenes** (mutated proto-oncogenes) accelerate division while mutated **tumour suppressor genes** remove brakes, leading to malignant **metastasis**.",
      ],
      whyItWorks:
        "Meiosis solves two problems simultaneously: first, halving the chromosome number from {{2n}} to {{n}} stops chromosome number from doubling every time two gametes fuse at fertilization; second, crossing over plus {{2^n}} random orientations shuffles parental alleles into vast genetic diversity for natural selection to act upon.",
      strategies: [
        "Count **centromeres** to count chromosomes! One replicated chromosome in Metaphase has 1 centromere and **2 chromatids**; the instant centromeres split in Anaphase, each chromatid counts as an independent chromosome.",
        "In **Mitotic Index** questions, NEVER include interphase cells in the numerator — include ONLY prophase + metaphase + anaphase + telophase — and DO include all cells (including interphase) in the denominator.",
        "Distinguish **Anaphase I** (homologous chromosomes separate, sister chromatids remain joined) from **Anaphase II / Mitotic Anaphase** (centromeres divide, sister chromatids separate).",
      ],
      thinkDeeper:
        "Why do most sporadic human cancers require multiple independent mutations (both oncogene activation and loss of both alleles of a tumour suppressor gene) across decades before a malignant tumour appears?",
    },

    // =========================================================================
    // SECTION 3: D2.2 Epigenetics & Regulation of Gene Expression [HL]
    // =========================================================================
    {
      id: "gene-expression-epigenetics-hl",
      heading: "D2.2 Epigenetics & Regulation of Gene Expression",
      level: "HL",
      discovery: {
        problem:
          "A human pancreatic β-cell secretes insulin, while a retinal photoreceptor absorbs light using rhodopsin — yet sequencing both cells proves their **3.2 billion DNA base pairs are 100% identical**. Furthermore, two 60-year-old **monozygotic (identical) twins** who grew up apart have identical DNA yet only one develops Type 2 diabetes. How can identical DNA sequences produce radically different cell types and diverging adult phenotypes?",
        idea:
          "Cells differentiate by **differential gene expression** — selectively switching specific genes ON or OFF without altering the DNA sequence. Over a lifetime, different environments (diet, exercise, stress, pollutants) reshape **epigenetic chemical tags** (DNA methylation and histone acetylation) on identical genomes, driving phenotypic divergence between identical twins.",
      },
      body: `### Differential Gene Expression & Transcriptional Control [HL]
Although every diploid somatic cell inherits the **exact same genome** from the fertilized zygote via mitosis, specialized cells express only a small tissue-specific subset of genes (their **transcriptome** and **proteome**).
- **Transcription factors** are regulatory proteins that bind specific DNA sequences:
  - **Promoters** lie directly upstream of a gene; general transcription factors recruit **RNA polymerase**.
  - **Enhancers** (often thousands of base pairs away) bind **activator** proteins; DNA bends into a loop so activators contact the promoter complex and sharply boost transcription rate. **Silencers** bind **repressors** to block transcription.
- **Intracellular hormone receptors** (e.g., for steroid hormones such as oestradiol or testosterone) act directly as ligand-activated transcription factors once inside the nucleus.

### The Epigenome: DNA Methylation vs Histone Acetylation [HL]
**Epigenetics** is the study of heritable changes in gene expression and phenotype that occur **without altering the underlying DNA nucleotide sequence**. The **epigenome** consists of reversible chemical tags attached to DNA or histone proteins inside **nucleosomes**:

| Epigenetic Tag | Target Site | Effect on Chromatin | Effect on Transcription |
|---|---|---|---|
| **DNA Methylation** ({{-CH_3}}) | **Cytosine** bases (especially CpG islands in promoters) | Recruits condensing proteins → tight **heterochromatin** | **Silences / decreases** transcription (blocks RNA polymerase & TFs) |
| **Histone Tail Acetylation** ({{-COCH_3}}) | Positively charged **lysine** residues on histone tails | Neutralizes (+) charge → weakens attraction to (−) DNA → loose **euchromatin** | **Activates / increases** transcription (exposes promoter) |

*(Note: Histone tail **methylation** can either activate or repress transcription depending on which specific amino acid residue is tagged, whereas **DNA methylation** overwhelmingly represses and **histone acetylation** activates.)*

### Epigenetic Reprogramming, Imprinting & Environmental Effects [HL]
- **Mitotic Stability:** When a differentiated liver cell divides by mitosis, DNA methyltransferases copy methylation tags onto the newly synthesized daughter strands — preserving cell identity across cell divisions.
- **Reprogramming vs Transgenerational Inheritance:** During gamete formation and early embryonic development, most epigenetic tags are **erased (reprogrammed)** to restore **totipotency** in the zygote. However, a small subset of loci escape erasure:
  - **Genomic imprinting:** Certain genes are silenced specifically on either the maternal or paternal allele. For instance, crossing a male lion with a female tiger produces a giant **liger**, whereas a male tiger × female lion produces a smaller **tigon**, because paternal growth-promoting and maternal growth-limiting imprinted alleles differ between species.
  - **Environmental triggers:** Diet (methyl-donor nutrients like folate and vitamin B₁₂, shown famously in **agouti mice**), maternal famine/stress (e.g., the **Dutch Hunger Winter** cohort), smoking, and air pollution alter DNA methylation patterns and disease risk — occasionally persisting across generations.
- **Monozygotic (MZ) Twins:** Because MZ twins begin with identical DNA and near-identical epigenomes, comparing epigenetic profiles in young versus elderly twins provides natural proof of **epigenetic drift**: young twins show tightly overlapping methylation profiles, while older twins living in different environments display widespread methylation differences that correlate with discordant phenotypes.`,
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" role="img" aria-label="Comparison of silenced heterochromatin with DNA methylation versus active euchromatin with histone tail acetylation"><rect width="680" height="280" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="340" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">Epigenetic Control of Chromatin Accessibility [HL]</text><rect x="20" y="38" width="640" height="104" rx="10" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/><text x="36" y="58" font-size="12" font-weight="700" fill="#b91c1c">GENE SILENCED (OFF): Tightly Coiled Heterochromatin</text><text x="644" y="58" text-anchor="end" font-size="10.5" font-weight="700" fill="#991b1b">DNA Methylated (CH3) · Histones Deacetylated (+)</text><circle cx="120" cy="100" r="22" fill="#94a3b8" stroke="#475569" stroke-width="2"/><text x="120" y="104" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Histone</text><circle cx="176" cy="100" r="22" fill="#94a3b8" stroke="#475569" stroke-width="2"/><text x="176" y="104" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Histone</text><circle cx="232" cy="100" r="22" fill="#94a3b8" stroke="#475569" stroke-width="2"/><text x="232" y="104" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Histone</text><circle cx="288" cy="100" r="22" fill="#94a3b8" stroke="#475569" stroke-width="2"/><text x="288" y="104" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Histone</text><path d="M84 96 C96 72 144 72 152 100 C160 128 192 128 204 100 C216 72 248 72 260 100 C272 128 308 128 326 98" fill="none" stroke="#1e3a8a" stroke-width="3.5"/><circle cx="148" cy="79" r="7" fill="#dc2626"/><text x="148" y="82" text-anchor="middle" font-size="7.5" font-weight="700" fill="#ffffff">Me</text><circle cx="204" cy="121" r="7" fill="#dc2626"/><text x="204" y="124" text-anchor="middle" font-size="7.5" font-weight="700" fill="#ffffff">Me</text><circle cx="260" cy="79" r="7" fill="#dc2626"/><text x="260" y="82" text-anchor="middle" font-size="7.5" font-weight="700" fill="#ffffff">Me</text><rect x="370" y="76" width="268" height="48" rx="8" fill="#ffffff" stroke="#f87171"/><text x="504" y="96" text-anchor="middle" font-size="10.5" font-weight="700" fill="#991b1b">RNA Polymerase &amp; TFs BLOCKED</text><text x="504" y="113" text-anchor="middle" font-size="9.5" fill="#475569">Strong (+) histone to (−) DNA attraction</text><rect x="20" y="156" width="640" height="108" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/><text x="36" y="176" font-size="12" font-weight="700" fill="#15803d">GENE ACTIVE (ON): Open, Accessible Euchromatin</text><text x="644" y="176" text-anchor="end" font-size="10.5" font-weight="700" fill="#166534">Histone Tails Acetylated (Ac) · DNA Unmethylated</text><circle cx="96" cy="222" r="20" fill="#0d9488" stroke="#0f766e" stroke-width="2"/><text x="96" y="226" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">Histone</text><circle cx="242" cy="222" r="20" fill="#0d9488" stroke="#0f766e" stroke-width="2"/><text x="242" y="226" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">Histone</text><circle cx="576" cy="222" r="20" fill="#0d9488" stroke="#0f766e" stroke-width="2"/><text x="576" y="226" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">Histone</text><line x1="56" y1="222" x2="636" y2="222" stroke="#1e3a8a" stroke-width="3.5"/><circle cx="116" cy="198" r="8" fill="#16a34a"/><text x="116" y="201" text-anchor="middle" font-size="8" font-weight="700" fill="#ffffff">Ac</text><circle cx="262" cy="198" r="8" fill="#16a34a"/><text x="262" y="201" text-anchor="middle" font-size="8" font-weight="700" fill="#ffffff">Ac</text><circle cx="596" cy="198" r="8" fill="#16a34a"/><text x="596" y="201" text-anchor="middle" font-size="8" font-weight="700" fill="#ffffff">Ac</text><rect x="304" y="206" width="62" height="24" rx="5" fill="#fde047" stroke="#ca8a04"/><text x="335" y="222" text-anchor="middle" font-size="9.5" font-weight="700" fill="#713f12">TFs</text><ellipse cx="430" cy="216" rx="52" ry="20" fill="#2563eb" opacity="0.9"/><text x="430" y="220" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">RNA Pol</text><path d="M454 202 Q486 184 526 190" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="518" y="186" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">mRNA →</text></svg>',
      diagramCaption:
        "Top: DNA methylation (Me) and unacetylated positive histone tails pack DNA into heterochromatin, blocking transcription. Bottom: Histone acetylation (Ac) neutralizes positive charges, relaxing nucleosomes into euchromatin so transcription factors and RNA polymerase transcribe mRNA.",
      workedExamples: [
        {
          title: "Predicting Chromatin State & Transcriptional Rate from Epigenetic Drugs",
          problem:
            "A tumour suppressor gene *CDKN2A* is abnormally silenced in a lung tumour biopsy. Sequencing reveals **zero base mutations**, but 85% of CpG cytosines in its promoter are methylated and surrounding histones are hypoacetylated. Predict the effect of applying a **histone deacetylase (HDAC) inhibitor** to these cells.",
          steps: [
            "Identify what HDAC normally does: histone deacetylase **removes** acetyl groups from histone tails, restoring positive charges on lysine residues and tightening chromatin.",
            "Blocking HDAC keeps acetyl groups attached (**hyperacetylation**), neutralizing positive charges on histone tails and weakening electrostatic binding to negatively charged DNA phosphate groups.",
            "Chromatin relaxes from condensed **heterochromatin** into accessible **euchromatin**, allowing transcription factors and RNA polymerase to bind the *CDKN2A* promoter and **increase transcription** of the tumour suppressor protein.",
          ],
          answer:
            "Histone acetylation remains high → chromatin relaxes into euchromatin → transcription of *CDKN2A* increases, restoring cell-cycle braking.",
          yourTurn: {
            question:
              "Which epigenetic modification adds acetyl groups to positively charged lysine residues on histone tails to loosen chromatin into euchromatin?",
            answer: {
              type: "text",
              accept: ["histone acetylation", "acetylation", "histone tail acetylation"],
              display: "histone acetylation",
            },
            solution:
              "**Histone acetylation** (catalysed by histone acetyltransferases) neutralizes the positive charge on lysine tails, relaxing DNA–histone packing into euchromatin.",
          },
        },
        {
          title: "Quantifying Promoter Methylation Divergence in Monozygotic Twins",
          problem:
            "Researchers analyse **40** CpG sites in the promoter of a stress-response gene in 50-year-old monozygotic twins. Twin A (low chronic stress) has **8** methylated sites; Twin B (high chronic stress) has **26** methylated sites. Calculate the percentage methylation for each twin and state which twin expresses **more** mRNA from this gene.",
          steps: [
            "Twin A methylation: {{(8 / 40) * 100 = 20}}%.",
            "Twin B methylation: {{(26 / 40) * 100 = 65}}% (a 45 percentage-point increase despite identical DNA sequence).",
            "Because DNA methylation silences promoter transcription, **Twin A** (lower methylation, 20%) expresses **more** mRNA than Twin B.",
          ],
          answer: "Twin A = 20% methylated (higher mRNA expression); Twin B = 65% methylated (silenced).",
          yourTurn: {
            question:
              "A gene promoter contains **50** CpG sites, of which **34** are methylated in a liver cell. What percentage (%) of these CpG sites are methylated?",
            answer: { type: "number", value: 68, display: "68%" },
            solution: "Percentage methylated = {{(34 / 50) * 100 = 68}}%.",
          },
        },
      ],
      keyPoints: [
        "All somatic cells share the **same DNA genome**; specialization arises from **differential gene expression** controlled by transcription factors, enhancers, and epigenetic tags.",
        "**Epigenetic changes** alter gene expression **without changing the DNA base sequence**.",
        "**DNA methylation** (at promoter cytosines) condenses chromatin (**heterochromatin**) and **silences** transcription.",
        "**Histone tail acetylation** neutralizes (+) charges on lysines, relaxing chromatin (**euchromatin**) and **activating** transcription.",
        "Most epigenetic tags are **reprogrammed (erased)** in gametes/early embryos, except **imprinted genes** (e.g. liger vs tigon) and rare transgenerational loci.",
        "Ageing **monozygotic twins** show increasing epigenetic divergence due to different environmental exposures (diet, stress, pollutants).",
      ],
      whyItWorks:
        "DNA's sugar–phosphate backbone carries a strong **negative charge**, whereas lysine-rich histone tails carry a **positive charge** — creating electrostatic glue that winds DNA tightly into nucleosomes. Adding neutral **acetyl groups** masks that positive charge, automatically loosening the spool so bulky RNA polymerase enzymes can physically reach the promoter.",
      strategies: [
        "Use the charge-and-spool mental check: **Acetylation** = **A**ctivates (**A**ccessible euchromatin); **Methylation (DNA)** = **M**utes (**M**uffles transcription).",
        "In IB data-based epigenetics questions, always state explicitly that the **DNA base sequence remains unchanged** — examiners frequently reserve a dedicated mark for this distinction from genetic mutation!",
      ],
      thinkDeeper:
        "Why is epigenetic reprogramming in the early embryo evolutionarily beneficial, yet why might partial retention of stress- or diet-induced tags occasionally help offspring survive?",
    },

    // =========================================================================
    // SECTION 4: D2.3 Osmolarity, Tonicity & Water Potential (Ψ = Ψ_s + Ψ_p)
    // =========================================================================
    {
      id: "water-potential-osmosis",
      heading: "D2.3 Osmolarity, Tonicity & Water Potential (Ψ = Ψ_s + Ψ_p)",
      level: "SL",
      discovery: {
        problem:
          "Place a human red blood cell and a crisp celery parenchyma cell side-by-side into a beaker of **pure distilled water**. Within seconds the red blood cell bursts violently, yet the celery cell simply becomes firmer and stops swelling. What single structural and physical difference explains both outcomes?",
        idea:
          "Both cells initially take in water by **osmosis** down a water potential gradient. The red blood cell has no cell wall, so membrane tension exceeds its breaking strength (**lysis**). The celery cell's rigid **cellulose cell wall** pushes back with a rising positive **pressure potential** ({{Ψ_p > 0}}) until total cell water potential equals pure water ({{Ψ_s + Ψ_p = 0}}), halting further net influx!",
      },
      body: [
        "### Osmosis, Osmolarity & Tonicity (SL)",
        "**Osmosis** is the passive net movement of water molecules across a partially permeable membrane from a region of **lower solute concentration** (higher water potential) to a region of **higher solute concentration** (lower water potential), often accelerated by **aquaporin** water-channel proteins.",
        "- **Osmolarity** measures the total concentration of osmotically active solute particles per litre (`mol dm⁻³` or `osmol dm⁻³`).",
        "- **Tonicity** compares an external solution's osmolarity to the cell cytoplasm:",
        "",
        "| External Solution | Net Water Movement | Animal Cell (No Wall) | Plant Cell (Cellulose Wall) |",
        "|---|---|---|---|",
        "| **Hypotonic** (lower solute, higher Ψ) | **Into** cell | Swells and bursts (**lysis** / haemolysis) | Vacuole swells; cell becomes **turgid** ({{Ψ_p > 0}}) |",
        "| **Isotonic** (equal solute, equal Ψ) | **Zero net** movement (dynamic equilibrium) | Normal shape maintained | Flaccid / **incipient plasmolysis** ({{Ψ_p = 0}}) |",
        "| **Hypertonic** (higher solute, lower Ψ) | **Out of** cell | Shrinks and shrivels (**crenation**) | Protoplast pulls away from wall (**plasmolysis**) |",
        "",
        "- **Medical Applications (SL):** Intravenous (**IV**) saline drips (`0.9% NaCl`, ~0.30 osmol dm⁻³) and **organ-transplant bathing solutions** must be **isotonic** with human tissues. A hypotonic IV drip would lyse red blood cells, while a hypertonic drip would crenate and dehydrate cells.",
        "- **Estimating Tissue Osmolarity:** Potato or beetroot cylinders are massed before and after immersion in a serial dilution of sucrose (`0.0–1.0 mol dm⁻³`): {{%Δm = ((m_f - m_i) / m_i) * 100%}}. Plotting `%Δm` against sucrose concentration gives the **isotonic osmolarity** at the **x-intercept** where `%Δm = 0%`.",
        "",
        "### Quantitative Water Potential [HL]",
        "**Water potential (Ψ)** quantifies the potential energy of water per unit volume relative to **pure water at standard atmospheric pressure**, which is defined as **{{Ψ = 0}} kPa** (units: **kPa** or **MPa**, where `1 MPa = 1000 kPa`):",
        "",
        "{{Ψ = Ψ_s + Ψ_p}}",
        "",
        "- **Solute potential ({{Ψ_s}}):** Always **negative or zero** ({{Ψ_s <= 0}}). Dissolving solutes binds free water into hydration shells, lowering water's free kinetic energy; **higher solute concentration = more negative {{Ψ_s}}**.",
        "- **Pressure potential ({{Ψ_p}}):** Hydrostatic pressure exerted on water.",
        "  - Open beaker: {{Ψ_p = 0}}.",
        "  - Turgid plant cell: inward wall pressure creates **positive** {{Ψ_p > 0}}.",
        "  - **Incipient plasmolysis:** plasma membrane just starts detaching from the cell wall → **{{Ψ_p = 0}}**, so **{{Ψ = Ψ_s}}**.",
        "  - **Full turgor** (equilibrium in pure water, {{Ψ = 0}}): **{{Ψ_p = -Ψ_s}}**.",
        "  - **Xylem vessels** under transpirational tension: **negative** pressure potential ({{Ψ_p < 0}}), pulling water upward!",
        "- **Direction of Net Osmosis:** Water ALWAYS moves spontaneously from **higher (less negative) Ψ** to **lower (more negative) Ψ** — for example, from **−300 kPa** to **−550 kPa** (because {{−300 > −550}}).",
      ].join("\n"),
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" role="img" aria-label="Three plant cells illustrating turgid state in hypotonic solution, incipient plasmolysis in isotonic solution, and plasmolysed state in hypertonic solution with water potential values"><rect width="680" height="280" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="340" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">Plant Cell Water Potential Spectrum (Ψ = Ψs + Ψp)</text><rect x="24" y="42" width="196" height="222" rx="10" fill="#ecfeff" stroke="#06b6d4" stroke-width="1.5"/><text x="122" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="#0e7490">1. Turgid (Hypotonic)</text><text x="122" y="78" text-anchor="middle" font-size="10" fill="#155e75">External Ψ = 0 kPa (pure water)</text><rect x="52" y="90" width="140" height="92" rx="12" fill="#86efac" stroke="#15803d" stroke-width="4"/><rect x="58" y="96" width="128" height="80" rx="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/><rect x="66" y="104" width="112" height="64" rx="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/><text x="122" y="133" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0c4a6e">Swollen Vacuole</text><text x="122" y="148" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0c4a6e">Wall pushes back (+Ψp)</text><text x="122" y="204" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">Ψs = −600 · Ψp = +600</text><text x="122" y="220" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0e7490">Ψcell = 0 kPa (full turgor)</text><text x="122" y="244" text-anchor="middle" font-size="9.5" fill="#475569">Initial flow: H2O IN → stops at Ψ=0</text><rect x="242" y="42" width="196" height="222" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/><text x="340" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="#a16207">2. Incipient Plasmolysis</text><text x="340" y="78" text-anchor="middle" font-size="10" fill="#854d0e">External Ψ = −600 kPa (isotonic)</text><rect x="270" y="90" width="140" height="92" rx="12" fill="#fef08a" stroke="#15803d" stroke-width="4"/><rect x="280" y="100" width="120" height="72" rx="10" fill="#dcfce7" stroke="#ca8a04" stroke-width="2" stroke-dasharray="4 2"/><rect x="294" y="112" width="92" height="48" rx="8" fill="#7dd3fc" stroke="#0284c7" stroke-width="1.5"/><text x="340" y="139" text-anchor="middle" font-size="10" font-weight="700" fill="#0c4a6e">Flaccid Vacuole</text><text x="340" y="204" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">Ψs = −600 · Ψp = 0</text><text x="340" y="220" text-anchor="middle" font-size="10.5" font-weight="700" fill="#a16207">Ψcell = −600 kPa (Ψ = Ψs)</text><text x="340" y="244" text-anchor="middle" font-size="9.5" fill="#475569">Dynamic equilibrium: net flow = 0</text><rect x="460" y="42" width="196" height="222" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/><text x="558" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="#b91c1c">3. Plasmolysed (Hypertonic)</text><text x="558" y="78" text-anchor="middle" font-size="10" fill="#991b1b">External Ψ = −1000 kPa</text><rect x="488" y="90" width="140" height="92" rx="12" fill="#fee2e2" stroke="#15803d" stroke-width="4"/><path d="M518 112 Q558 104 598 112 Q606 136 596 160 Q558 168 520 160 Q510 136 518 112 Z" fill="#dcfce7" stroke="#dc2626" stroke-width="2"/><ellipse cx="558" cy="136" rx="28" ry="16" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/><text x="558" y="140" text-anchor="middle" font-size="9.5" font-weight="700" fill="#991b1b">Shrunk</text><path d="M558 164 L558 184" stroke="#dc2626" stroke-width="2.5"/><polygon points="552,178 564,178 558,187" fill="#dc2626"/><text x="558" y="204" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">Ψp = 0 · Protoplast detached</text><text x="558" y="220" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b91c1c">Net H2O OUT (−600 → −1000)</text><text x="558" y="244" text-anchor="middle" font-size="9.5" fill="#475569">External solution fills wall gap</text></svg>',
      diagramCaption:
        "Three osmotic states of a plant cell with initial Ψs = −600 kPa: turgid in pure water (Ψp = +600 kPa), incipient plasmolysis in isotonic solution (Ψp = 0), and plasmolysed in hypertonic solution (−1000 kPa) where water exits.",
      workedExamples: [
        {
          title: "Calculating Percentage Change in Mass & Interpreting Tonicity",
          problem:
            "A potato cylinder has an initial mass of **4.00 g**. After 45 minutes in `0.6 mol dm⁻³` sucrose solution, its blotted final mass is **3.64 g**. Calculate the **percentage change in mass** and identify whether the sucrose solution was hypotonic, isotonic, or hypertonic.",
          steps: [
            "Compute mass change: {{m_f - m_i = 3.64 - 4.00 = -0.36}} g.",
            "Divide by initial mass and multiply by 100%: {{(-0.36 / 4.00) * 100 = -9.0}}%.",
            "Because the potato lost mass, net water moved **out** of the cells by osmosis → the `0.6 mol dm⁻³` sucrose solution was **hypertonic** relative to the potato cytoplasm.",
          ],
          answer: "−9.0%; hypertonic solution.",
          yourTurn: {
            question:
              "A carrot strip starts at **5.00 g** and reaches **5.45 g** after soaking in dilute glucose solution. Calculate its **percentage change in mass** (%).",
            answer: { type: "number", value: 9, display: "+9%" },
            solution:
              "{{((5.45 - 5.00) / 5.00) * 100 = (0.45 / 5.00) * 100 = +9}}%.",
          },
        },
        {
          title: "Computing Water Potential & Predicting Flow Between Adjacent Cells [HL]",
          problem:
            "Two adjacent plant parenchyma cells have the following values:\n- **Cell A:** {{Ψ_s = -720}} kPa, {{Ψ_p = +320}} kPa\n- **Cell B:** {{Ψ_s = -680}} kPa, {{Ψ_p = +130}} kPa\nCalculate {{Ψ}} for each cell and predict the direction of net water movement.",
          steps: [
            "Apply {{Ψ = Ψ_s + Ψ_p}} to Cell A: {{Ψ_A = -720 + 320 = -400}} kPa.",
            "Apply {{Ψ = Ψ_s + Ψ_p}} to Cell B: {{Ψ_B = -680 + 130 = -550}} kPa.",
            "Compare signed water potentials: {{−400 > −550}}, so Cell A has the **higher (less negative)** water potential.",
            "Net water moves passively by osmosis from **Cell A to Cell B** (down the water potential gradient).",
          ],
          answer: "Cell A = −400 kPa; Cell B = −550 kPa; net water moves from Cell A → Cell B.",
          yourTurn: {
            question:
              "A turgid leaf mesophyll cell has {{Ψ_s = -850}} kPa and {{Ψ_p = +300}} kPa. Calculate its total water potential **Ψ** (in kPa, including the sign).",
            answer: { type: "number", value: -550, display: "−550 kPa" },
            solution:
              "Using {{Ψ = Ψ_s + Ψ_p = -850 + 300 = -550}} kPa.",
          },
        },
      ],
      keyPoints: [
        "**Osmosis** is passive net movement of water across a partially permeable membrane from **higher (less negative) Ψ** (lower solute) to **lower (more negative) Ψ** (higher solute).",
        "Animal cells **lyse** in hypotonic solutions and **crenate** in hypertonic solutions; plant cells become **turgid** or **plasmolysed** thanks to their cellulose cell wall.",
        "IV saline and donor-organ bathing solutions must be **isotonic** to maintain zero net osmotic flow.",
        "[HL] {{Ψ = Ψ_s + Ψ_p}}: pure water at atmospheric pressure has {{Ψ = 0}} kPa; {{Ψ_s <= 0}} always; at incipient plasmolysis {{Ψ_p = 0}} so {{Ψ = Ψ_s}}.",
        "[HL] Always compare **signed** values when predicting water flow: e.g., {{−200 > −500}}, so water moves from −200 kPa to −500 kPa.",
      ],
      whyItWorks:
        "Dissolved solute ions and polar molecules form **hydration shells** that trap water molecules, reducing the proportion of free, mobile water molecules colliding with the membrane. Water therefore diffuses down its chemical-potential (free-energy) gradient — unless physical wall pressure ({{+Ψ_p}}) boosts free energy back up to match the outside.",
      strategies: [
        "Always sketch a vertical number line with **0 kPa at the top** and **−1000 kPa at the bottom**: water always flows **downhill** from a higher number to a lower (more negative) number!",
        "Never write 'water stops moving' at isotonic equilibrium — examiners expect **'no NET movement of water'** (water crosses in both directions at equal rates).",
        "Always divide by **initial mass** (not final mass!) when computing `%Δm`, and keep the `+` or `−` sign.",
      ],
      thinkDeeper:
        "In tall redwood trees, leaf mesophyll water potential can drop to −2.0 MPa while moist soil sits near −0.05 MPa. How does negative pressure potential ({{Ψ_p < 0}}) inside xylem vessels bridge that gap without collapsing the xylem tubes?",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "What evidence from the Meselson–Stahl experiment proves DNA replication is semi-conservative?",
        back: "After 1 round in ¹⁴N, 100% of DNA forms a single intermediate (¹⁵N/¹⁴N) band (falsifying conservative). After 2 rounds, 50% is intermediate and 50% is light (¹⁴N/¹⁴N) (falsifying dispersive).",
        level: "SL",
      },
      {
        front: "Compare the roles of helicase and DNA polymerase in DNA replication.",
        back: "Helicase unwinds the double helix and breaks hydrogen bonds between base pairs. DNA polymerase aligns complementary dNTPs and forms phosphodiester bonds along the new strand (5'→3').",
        level: "SL",
      },
      {
        front: "Why is the lagging strand synthesized discontinuously as Okazaki fragments?",
        back: "DNA strands are antiparallel, and DNA polymerase III can ONLY add nucleotides to a free 3'-OH (5'→3' growth), so the strand running away from the fork must be built in short primed segments sealed by DNA ligase.",
        level: "HL",
      },
      {
        front: "State the three thermal steps of one PCR cycle and the enzyme used.",
        back: "1. Denaturation (~95 °C, breaks H-bonds); 2. Annealing (~55 °C, primers bind); 3. Extension (~72 °C, thermostable Taq DNA polymerase builds new DNA 5'→3').",
        level: "SL",
      },
      {
        front: "Distinguish the antisense (template) DNA strand from the sense (coding) DNA strand.",
        back: "RNA polymerase reads the 3'→5' antisense strand to build complementary 5'→3' mRNA. The 5'→3' sense strand has the same base sequence as mRNA except T replaces U.",
        level: "SL",
      },
      {
        front: "Why does the degeneracy of the genetic code buffer some base substitutions?",
        back: "Because 61 sense codons specify only 20 amino acids, multiple codons code for the same amino acid; a third-base wobble change often produces a silent mutation with no amino-acid change.",
        level: "SL",
      },
      {
        front: "How does alternative splicing allow ~20,000 human genes to produce >100,000 proteins?",
        back: "Spliceosomes excise introns and join different subsets of exons from the same pre-mRNA transcript, generating multiple distinct mature mRNAs and protein isoforms from one gene.",
        level: "HL",
      },
      {
        front: "Describe the exact molecular mutation causing sickle-cell anaemia.",
        back: "A missense substitution in HBB changes sense DNA GAG → GTG (mRNA GAG → GUG), replacing hydrophilic glutamic acid (Glu) with hydrophobic valine (Val) at position 6 of β-globin.",
        level: "SL",
      },
      {
        front: "Outline the roles of guide RNA (gRNA) and Cas9 in CRISPR–Cas9 gene editing.",
        back: "Guide RNA base-pairs with a specific complementary target DNA sequence; Cas9 endonuclease cuts both DNA strands at that exact locus to allow gene knockout or insertion.",
        level: "HL",
      },
      {
        front: "How does cytokinesis differ between animal and plant cells?",
        back: "Animal cells form an inward-pinching cleavage furrow via an actin–myosin contractile ring; plant cells fuse Golgi vesicles at the equator to form a cell plate and new cellulose wall.",
        level: "SL",
      },
      {
        front: "What two events in Meiosis I create genetic variation in gametes?",
        back: "1. Crossing over between non-sister chromatids at chiasmata in Prophase I (recombinant chromosomes). 2. Random orientation of homologous pairs in Metaphase I (2ⁿ combinations).",
        level: "SL",
      },
      {
        front: "Contrast proto-oncogenes and tumour suppressor genes in cancer development.",
        back: "Proto-oncogenes stimulate normal division (gain-of-function → oncogenes accelerate mitosis). Tumour suppressor genes inhibit division/trigger DNA repair or apoptosis (loss-of-function removes brakes).",
        level: "HL",
      },
      {
        front: "Contrast the effects of DNA methylation and histone tail acetylation on gene expression.",
        back: "DNA methylation (at cytosines) condenses heterochromatin and silences transcription; histone acetylation neutralizes (+) lysine charges, opening euchromatin and activating transcription.",
        level: "HL",
      },
      {
        front: "Why do monozygotic twins diverge phenotypically more as they age?",
        back: "Although their DNA sequence stays identical, differing diets, stresses, and pollutants alter DNA methylation and histone acetylation (epigenetic drift), changing which genes are expressed.",
        level: "HL",
      },
      {
        front: "Why must intravenous (IV) medical saline be isotonic with human blood plasma?",
        back: "Hypotonic fluid causes net water influx and erythrocyte lysis; hypertonic fluid causes net water efflux and crenation. Isotonic saline (0.9% NaCl) maintains zero net osmotic movement.",
        level: "SL",
      },
      {
        front: "Define water potential (Ψ = Ψ_s + Ψ_p) and state Ψ_p at incipient plasmolysis.",
        back: "Ψ is the free potential energy of water relative to pure water (0 kPa). Solute potential Ψ_s ≤ 0; pressure potential Ψ_p ≥ 0 in turgid cells. At incipient plasmolysis, Ψ_p = 0 so Ψ = Ψ_s.",
        level: "HL",
      },
    ],
    mustKnow: [
      "DNA replication is **semi-conservative**, runs **5'→3'** (adding to the 3'-OH), and uses **helicase** + **DNA polymerase** (plus primase, Pol III, Pol I, and ligase at HL).",
      "In **PCR**, DNA doubles every thermal cycle ({{N = N_0 * 2^n}}) using heat-stable **Taq polymerase**; **gel electrophoresis** separates negatively charged DNA fragments by size towards the positive anode.",
      "RNA polymerase transcribes the **antisense (template)** strand into **mRNA** (U instead of T); ribosomes translate mRNA codons (5'→3') via complementary **tRNA anticodons** until a **stop codon** (`UAA`, `UAG`, `UGA`).",
      "**Substitutions** cause silent, missense (sickle cell: `GAG→GUG`, Glu→Val), or nonsense mutations; non-multiple-of-3 **indels** cause **frameshifts**; only **germ-line** mutations are heritable.",
      "**Mitosis** yields 2 genetically identical 2n cells (separating sister chromatids); **Meiosis** yields 4 genetically distinct n gametes (separating homologous chromosomes in Meiosis I, sister chromatids in Meiosis II).",
      "**Mitotic index** = dividing cells (P+M+A+T) ÷ total cells observed — high values indicate actively dividing meristems or tumours.",
      "[HL] **Cyclin–CDK** thresholds drive cell-cycle checkpoints; mutations in **proto-oncogenes** and **tumour suppressor genes** can lead to malignant **metastasis**.",
      "[HL] **Epigenetics** modifies gene expression without altering the DNA base sequence: **DNA methylation silences** (heterochromatin), while **histone acetylation activates** (euchromatin).",
      "**Osmosis** moves water passively from **higher (less negative) Ψ** (lower solute) to **lower (more negative) Ψ** (higher solute); animal cells lyse/crenate while plant cells become turgid/plasmolysed.",
      "[HL] {{Ψ = Ψ_s + Ψ_p}}: pure water = 0 kPa; {{Ψ_s <= 0}}; at incipient plasmolysis {{Ψ_p = 0}}; at full turgor in pure water {{Ψ_p = -Ψ_s}}.",
    ],
    misconceptions: [
      {
        wrong: "DNA polymerase synthesizes the lagging strand in the 3'→5' direction.",
        right: "DNA polymerase ONLY synthesizes in the 5'→3' direction on BOTH strands! On the lagging strand it synthesizes short 5'→3' Okazaki fragments moving away from the replication fork.",
        level: "HL",
      },
      {
        wrong: "Stop codons (UAA, UAG, UGA) code for a special 'stop amino acid' at the end of a polypeptide.",
        right: "Stop codons do NOT code for any amino acid. They bind a release factor protein that disassembles the ribosome and frees the completed polypeptide, so a coding sequence of 300 bases including 1 stop codon makes 99 amino acids, not 100.",
        level: "SL",
      },
      {
        wrong: "DNA replication happens during Prophase of mitosis.",
        right: "DNA replication occurs during the **S phase of Interphase**, well before Prophase begins. By Prophase, every chromosome already consists of two sister chromatids.",
        level: "SL",
      },
      {
        wrong: "Crossing over swaps DNA between sister chromatids of the same chromosome.",
        right: "Sister chromatids are identical copies, so swapping them would change nothing! Crossing over occurs strictly between **non-sister chromatids** of homologous chromosomes during Prophase I.",
        level: "SL",
      },
      {
        wrong: "Epigenetic methylation mutates cytosine into another base in the DNA sequence.",
        right: "Epigenetic tags attach chemically to cytosines or histone tails **without changing the DNA nucleotide sequence** (C remains C); they only alter chromatin packing and transcriptional accessibility.",
        level: "HL",
      },
      {
        wrong: "Water flows from a cell at −500 kPa into a solution at −200 kPa because 500 is bigger than 200.",
        right: "Water potential values are signed! Because {{−200 > −500}}, −200 kPa is the **higher** water potential, so net water flows from **−200 kPa to −500 kPa**.",
        level: "HL",
      },
      {
        wrong: "At isotonic equilibrium, water molecules stop crossing the plasma membrane.",
        right: "Water molecules continue moving across the membrane in both directions at **equal rates**, resulting in **zero NET water movement** (dynamic equilibrium).",
        level: "SL",
      },
    ],
    examMistakes: [
      "Forgetting to convert **T → U** when writing an mRNA sequence from DNA (any 'T' in an mRNA answer loses the mark immediately).",
      "Confusing the **sense** (coding) and **antisense** (template) DNA strands — check whether the stem gives the template or coding strand before pairing!",
      "Including **interphase** cells in the numerator of the **mitotic index**, or forgetting to include mitotic cells in the total denominator.",
      "Writing 'chromosomes' instead of **'homologous chromosomes'** in Meiosis I or **'sister chromatids'** in Mitosis / Meiosis II.",
      "Calling a cell **'plasmolysed'** in an animal-cell question (animal cells lack cell walls — use **crenated** / shrivelled, and **lysed** instead of turgid!).",
      "Omitting the **negative sign** on water potential (`Ψ`) or solute potential (`Ψ_s`) answers (writing `450 kPa` instead of `−450 kPa`).",
      "[HL] Writing that histone methylation always silences genes — stick to **DNA methylation silences** and **histone acetylation activates** unless data in the stem specifies a histone methylation residue.",
      "Computing percentage mass change using **final mass** in the denominator instead of **initial mass** ({{(m_f - m_i) / m_i}}).",
    ],
    mnemonics: [
      {
        topic: "Mitosis Phases",
        device: "IPMAT-C (Interphase → Prophase → Metaphase → Anaphase → Telophase → Cytokinesis)",
        explanation: "P = Pack/Prepare, M = Middle (equator), A = Apart (poles), T = Two new nuclei, C = Cut cytoplasm.",
        level: "SL",
      },
      {
        topic: "DNA Replication Enzymes [HL]",
        device: "He-Pri-3-1-Lig (Helicase → Primase → Pol III → Pol I → Ligase)",
        explanation: "Follows the exact chronological assembly line on the lagging strand from unwinding to sealing Okazaki fragments.",
        level: "HL",
      },
      {
        topic: "Epigenetic Tags [HL]",
        device: "Acetyl = Access (Active Euchromatin) · Methyl = Mute (Heterochromatin)",
        explanation: "Histone Acetylation opens Access (turns genes ON); DNA Methylation Mutes promoters (turns genes OFF).",
        level: "HL",
      },
      {
        topic: "Tonicity Memory Anchor",
        device: "HYPO = HIPPO (cells swell up!) · HYPER = skinny/shrivelled",
        explanation: "In a hypotonic bath, water enters so cells swell like a hippo (turgid in plants, lysis in animals); in hypertonic baths water leaves.",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Forensic STR Profiling & Innocence Exonerations",
        detail: "PCR amplification of 13–20 variable STR loci followed by capillary electrophoresis can match a single hair root with a random match probability below 1 in 10 billion.",
        emoji: "🔎",
      },
      {
        title: "CRISPR–Cas9 Therapy for Sickle-Cell Anaemia (Casgevy)",
        detail: "Approved in 2023–2024, the world's first CRISPR therapy edits patients' bone-marrow stem cells to reactivate fetal haemoglobin (HbF), compensating for the HBB Glu→Val mutation.",
        emoji: "✂️",
      },
      {
        title: "Dutch Hunger Winter & Epigenetic Epidemiology",
        detail: "Children conceived during the 1944–1945 Netherlands famine showed altered DNA methylation at the *IGF2* growth-regulation gene six decades later, linking early prenatal nutrition to adult metabolic health.",
        emoji: "🧬",
      },
      {
        title: "0.9% Isotonic IV Saline & Transplant Preservation Fluids",
        detail: "Hospital IV drips are carefully calibrated to ~300 mOsm dm⁻³ (0.9% NaCl) to match human plasma osmolarity so red blood cells neither lyse nor crenate during rehydration or surgery.",
        emoji: "🏥",
      },
      {
        title: "Halophyte Salt-Marsh Plants & Osmotic Adjustment",
        detail: "Coastal mangroves and glasswort actively pump solutes into root vacuoles to drive their solute potential (Ψ_s) below seawater (−2.5 MPa), keeping water flowing inward by osmosis.",
        emoji: "🌿",
      },
    ],
    videos: [
      {
        title: "IB Biology D1.1 DNA Replication & Meselson–Stahl (SL & HL)",
        channel: "Alex Lee / IB Biology Revision",
        url: "https://www.youtube.com/results?search_query=IB+Biology+D1.1+DNA+replication+HL+Okazaki+Meselson+Stahl",
      },
      {
        title: "IB Biology D1.2–D1.3 Transcription, Translation & Mutations",
        channel: "Cheryl Hickman / IB Biology",
        url: "https://www.youtube.com/results?search_query=IB+Biology+D1.2+protein+synthesis+D1.3+mutations+CRISPR",
      },
      {
        title: "IB Biology D2.1–D2.2 Cell Division, Cyclins & Epigenetics (HL)",
        channel: "Bioninja / Sirius Revision",
        url: "https://www.youtube.com/results?search_query=IB+Biology+D2.1+mitosis+meiosis+D2.2+epigenetics+HL",
      },
      {
        title: "IB Biology D2.3 Water Potential (Ψ = Ψs + Ψp) & Osmosis Calculations",
        channel: "Bozeman Science / IB Biology",
        url: "https://www.youtube.com/results?search_query=IB+Biology+D2.3+water+potential+osmosis+plasmolysis",
      },
    ],
    formulas: [
      {
        name: "PCR Exponential Amplification",
        formula: "{{N = N_0 * 2^n}}",
        note: "Copies N after n thermal cycles from N₀ initial target DNA molecules (100% efficiency).",
        level: "SL",
      },
      {
        name: "Meselson–Stahl Hybrid DNA Fraction",
        formula: "{{f = 2 / 2^n = 1 / 2^(n-1)}}",
        note: "Fraction of intermediate (¹⁵N/¹⁴N) duplexes after n ≥ 1 rounds of replication in ¹⁴N.",
        level: "SL",
      },
      {
        name: "Polypeptide Amino-Acid Length",
        formula: "{{AA = (B / 3) - 1}}",
        note: "When B coding mRNA bases include 1 terminal stop codon (omit −1 if stop codon is already excluded).",
        level: "SL",
      },
      {
        name: "Mitotic Index",
        formula: "{{MI = N_mitosis / N_total}}",
        note: "N_mitosis = cells in P + M + A + T (exclude interphase); multiply by 100 for percentage.",
        level: "SL",
      },
      {
        name: "Meiotic Random Orientation Combinations",
        formula: "{{C = 2^n}}",
        note: "Distinct maternal/paternal chromosome combinations per gamete for haploid number n (before crossing over).",
        level: "SL",
      },
      {
        name: "Mitotic Population Growth",
        formula: "{{N = N_0 * 2^k}}",
        note: "Number of cells after k synchronous rounds of mitosis from N₀ starting cells.",
        level: "SL",
      },
      {
        name: "Percentage Change in Mass (Osmosis)",
        formula: "{{%Δm = ((m_f - m_i) / m_i) * 100}}",
        note: "Always divide by initial mass m_i; x-intercept (%Δm = 0) gives isotonic osmolarity.",
        level: "SL",
      },
      {
        name: "Water Potential Equation",
        formula: "{{Ψ = Ψ_s + Ψ_p}}",
        note: "Total water potential (kPa or MPa); pure water at standard atmospheric pressure = 0 kPa; Ψ_s ≤ 0.",
        level: "HL",
      },
      {
        name: "Incipient Plasmolysis Condition",
        formula: "{{Ψ_p = 0, Ψ = Ψ_s}}",
        note: "Protoplast just stops pressing the cell wall (flaccid point where internal Ψ equals solute potential).",
        level: "HL",
      },
      {
        name: "Full Turgor in Pure Water",
        formula: "{{Ψ = 0 => Ψ_p = -Ψ_s}}",
        note: "At equilibrium in pure water (Ψ_ext = 0), positive wall pressure exactly balances negative solute potential.",
        level: "HL",
      },
    ],
  },
};
