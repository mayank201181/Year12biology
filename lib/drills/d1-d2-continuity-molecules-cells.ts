import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

const TOPIC_ID = "d1-d2-continuity-molecules-cells";
const DNA_BASES = ["A", "T", "C", "G"] as const;
const COMP_RNA: Record<string, string> = { A: "U", T: "A", C: "G", G: "C" };
const COMP_DNA: Record<string, string> = { A: "T", T: "A", C: "G", G: "C" };

function randDna(rng: Rng, len: number, mustHaveBase?: "A" | "T"): string {
  const arr: string[] = [];
  for (let i = 0; i < len; i++) arr.push(rng.pick(DNA_BASES));
  if (mustHaveBase) {
    // Guarantee >= 3 occurrences including index 0 or 1 so T↔U traps are never mistaken for typos
    if (arr[0] !== mustHaveBase && arr[1] !== mustHaveBase) arr[rng.int(0, 1)] = mustHaveBase;
    let count = arr.filter((b) => b === mustHaveBase).length;
    while (count < 3) {
      const idx = rng.int(2, len - 1);
      if (arr[idx] !== mustHaveBase) {
        arr[idx] = mustHaveBase;
        count++;
      }
    }
  }
  return arr.join("");
}

function splitTriplets(seq: string): string {
  const out: string[] = [];
  for (let i = 0; i < seq.length; i += 3) out.push(seq.slice(i, i + 3));
  return out.join("-");
}

function transcribeAntisense(dna: string): string {
  return dna.split("").map((b) => COMP_RNA[b]).join("");
}

function complementDna(dna: string): string {
  return dna.split("").map((b) => COMP_DNA[b]).join("");
}

// =============================================================================
// DRILL 1 (SL, Level 1 — Sprint-ready): Transcription, Codons & PCR Math
// =============================================================================
const transcriptionPcrDrill: Drill = {
  id: `${TOPIC_ID}.transcription-pcr`,
  topicId: TOPIC_ID,
  title: "DNA→mRNA Transcription, Codons & PCR Amplification",
  level: 1,
  ibLevel: "SL",
  guideRef: "dna-replication-protein-synthesis",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const mode = rng.int(1, 3);
      if (mode === 1) {
        const dna = randDna(rng, 6, "A");
        const mrna = transcribeAntisense(dna);
        const dnaT = splitTriplets(dna);
        const mrnaT = splitTriplets(mrna);
        const dnaTrap = complementDna(dna);
        return {
          prompt: `Transcribe the **antisense (template) DNA** sequence \`3'-${dnaT}-5'\` into its complementary **mRNA** sequence (5'→3', letters only).`,
          answer: {
            type: "text",
            accept: [mrna, mrnaT, `5'-${mrna}-3'`, `5'-${mrnaT}-3'`],
            display: mrna,
          },
          traps: [{ spec: { type: "text", accept: [dnaTrap, splitTriplets(dnaTrap)] }, feedback: "RNA uses uracil (U) instead of thymine (T)!" }],
          hint: "Pair each antisense base with its RNA complement: A→U, T→A, C→G, G→C.",
          solution: [
            `Apply complementary RNA pairing (A→U, T→A, C→G, G→C) to \`3'-${dnaT}-5'\`.`,
            `Resulting 5'→3' mRNA: \`${mrnaT}\` (${mrna}).`,
          ],
        };
      }
      if (mode === 2) {
        const n0 = rng.int(1, 10);
        const cycles = rng.int(3, 7);
        const ans = n0 * 2 ** cycles;
        const traps = [
          { spec: { type: "number" as const, value: n0 * 2 * cycles }, feedback: "PCR doubles exponentially ({{N_0 * 2^n}}), not linearly ({{N_0 * 2 * n}})." },
        ];
        if (n0 > 1) {
          traps.push({ spec: { type: "number" as const, value: 2 ** cycles }, feedback: `Multiply {{2^${cycles} = ${2 ** cycles}}} by the initial ${n0} copies.` });
        }
        return {
          prompt: `A PCR reaction begins with **${n0}** target DNA ${n0 === 1 ? "copy" : "copies"}. How many copies exist after **${cycles}** complete cycles (100% efficiency)?`,
          answer: { type: "number", value: ans, display: String(ans) },
          traps,
          hint: "Use {{N = N_0 * 2^n}}.",
          solution: [
            `Substitute {{N_0 = ${n0}}} and {{n = ${cycles}}} into {{N = N_0 * 2^n}}.`,
            `{{N = ${n0} * 2^${cycles} = ${n0} * ${2 ** cycles} = ${ans}}} copies.`,
          ],
        };
      }
      const aa = rng.int(12, 85);
      const bases = aa * 3;
      return {
        prompt: `An mRNA coding segment contains **${bases}** nucleotides (excluding any stop codon). How many **amino acids** does it encode?`,
        answer: { type: "number", value: aa, display: String(aa) },
        traps: [
          { spec: { type: "number", value: bases * 3 }, feedback: "3 nucleotides form 1 codon, so divide by 3 rather than multiplying." },
        ],
        hint: "Each non-overlapping codon consists of 3 mRNA nucleotides.",
        solution: [`Divide nucleotides by 3: {{${bases} / 3 = ${aa}}} amino acids.`],
      };
    }

    if (tier === 2) {
      const mode = rng.int(1, 3);
      if (mode === 1) {
        const useSense = rng.bool(0.5);
        const dna = randDna(rng, 9);
        const dnaT = splitTriplets(dna);
        if (useSense) {
          // Make sure at least one T exists so sense-to-mRNA actually tests T→U.
          const sense = dna.includes("T") ? dna : "T" + dna.slice(1);
          const senseT = splitTriplets(sense);
          const mrna = sense.replace(/T/g, "U");
          const mrnaT = splitTriplets(mrna);
          const wrongComp = transcribeAntisense(sense);
          return {
            prompt: `A gene's **sense (coding) DNA strand** reads \`5'-${senseT}-3'\`. Write the resulting **mRNA** sequence (5'→3', letters only).`,
            answer: {
              type: "text",
              accept: [mrna, mrnaT, `5'-${mrna}-3'`, `5'-${mrnaT}-3'`],
              display: mrna,
            },
            traps: wrongComp !== mrna
              ? [{ spec: { type: "text", accept: [wrongComp, splitTriplets(wrongComp)] }, feedback: "This is the SENSE (coding) strand, not the antisense template — simply swap T → U." }]
              : undefined,
            hint: "The sense (coding) strand matches mRNA in sequence except DNA has T where mRNA has U.",
            solution: [
              "Because the given strand is the 5'→3' sense (coding) strand, replace every T with U.",
              `\`5'-${senseT}-3'\` → \`5'-${mrnaT}-3'\` (${mrna}).`,
            ],
          };
        }
        const mrna = transcribeAntisense(dna);
        const mrnaT = splitTriplets(mrna);
        return {
          prompt: `An **antisense (template) DNA strand** reads \`3'-${dnaT}-5'\`. Write the complementary **mRNA** sequence (5'→3', letters only).`,
          answer: {
            type: "text",
            accept: [mrna, mrnaT, `5'-${mrna}-3'`, `5'-${mrnaT}-3'`],
            display: mrna,
          },
          hint: "Pair each antisense DNA base with its RNA complement: A→U, T→A, C→G, G→C.",
          solution: [
            `Transcribe \`3'-${dnaT}-5'\` using A→U, T→A, C→G, G→C.`,
            `Resulting 5'→3' mRNA: \`${mrnaT}\` (${mrna}).`,
          ],
        };
      }
      if (mode === 2) {
        const n0 = rng.int(2, 12);
        const cycles = rng.int(5, 10);
        const ans = n0 * 2 ** cycles;
        return {
          prompt: `A forensic swab contains **${n0}** copies of an STR target sequence. Calculate the total target copies after **${cycles}** PCR cycles at 100% efficiency.`,
          answer: { type: "number", value: ans, display: String(ans) },
          traps: [
            { spec: { type: "number", value: 2 ** cycles }, feedback: `Don't forget to multiply {{2^${cycles}}} by the starting {{N_0 = ${n0}}} copies.` },
          ],
          hint: "Evaluate {{N = N_0 * 2^n}}.",
          solution: [
            `{{2^${cycles} = ${2 ** cycles}}}.`,
            `{{N = ${n0} * ${2 ** cycles} = ${ans}}} copies.`,
          ],
        };
      }
      const codons = rng.int(35, 220);
      const bases = codons * 3;
      const aa = codons - 1;
      const stop = rng.pick(["UAA", "UAG", "UGA"]);
      return {
        prompt: `A mature mRNA coding region is **${bases}** nucleotides long, starting with \`AUG\` and ending with one stop codon (\`${stop}\`). How many **amino acids** are in the translated polypeptide?`,
        answer: { type: "number", value: aa, display: String(aa) },
        traps: [
          { spec: { type: "number", value: codons }, feedback: `Subtract 1 from ${codons} codons because the terminal stop codon (\`${stop}\`) does not code for an amino acid.` },
        ],
        hint: "Divide total coding bases by 3, then subtract 1 for the stop codon.",
        solution: [
          `Total codons = {{${bases} / 3 = ${codons}}}.`,
          `Subtract 1 terminal stop codon (\`${stop}\`): {{${codons} - 1 = ${aa}}} amino acids.`,
        ],
      };
    }

    // Tier 3: multi-step intron splicing / reverse PCR / antisense→sense
    const mode = rng.int(1, 3);
    if (mode === 1) {
      const aa = rng.int(60, 260);
      const exonBases = (aa + 1) * 3;
      const i1 = rng.int(40, 140) * 3;
      const i2 = rng.int(30, 120) * 3;
      const preLen = exonBases + i1 + i2;
      return {
        prompt: `A eukaryotic pre-mRNA is **${preLen}** nucleotides long and contains two introns of **${i1}** and **${i2}** nucleotides. The remaining spliced exon bases start with \`AUG\` and end with one stop codon. How many **amino acids** are translated?`,
        answer: { type: "number", value: aa, display: String(aa) },
        traps: [
          { spec: { type: "number", value: aa + 1 }, feedback: "Remember to subtract 1 for the terminal stop codon after dividing by 3." },
          { spec: { type: "number", value: preLen / 3 - 1 }, feedback: "Introns are non-coding and must be excised before translation!" },
        ],
        hint: "First subtract both introns from pre-mRNA length, then divide by 3 and subtract 1 stop codon.",
        solution: [
          `Mature coding exon length = {{${preLen} - (${i1} + ${i2}) = ${exonBases}}} nucleotides.`,
          `Codons = {{${exonBases} / 3 = ${aa + 1}}}.`,
          `Amino acids (excluding stop codon) = {{${aa + 1} - 1 = ${aa}}}.`,
        ],
      };
    }
    if (mode === 2) {
      const n0 = rng.int(2, 15);
      const cycles = rng.int(4, 12);
      const target = n0 * 2 ** cycles;
      return {
        prompt: `Starting with **${n0}** template DNA copies at 100% PCR efficiency, how many complete thermal cycles are needed to reach exactly **${target}** copies?`,
        answer: { type: "number", value: cycles, display: String(cycles) },
        traps: [
          { spec: { type: "number", value: 2 ** cycles }, feedback: `{{${2 ** cycles}}} is the doubling factor ({{2^n}}) — find the exponent n.` },
        ],
        hint: `Divide ${target} by ${n0} to find {{2^n}}, then count how many doublings give that number.`,
        solution: [
          `{{2^n = ${target} / ${n0} = ${2 ** cycles}}}.`,
          `Since {{2^${cycles} = ${2 ** cycles}}}, exactly **${cycles}** PCR cycles are required.`,
        ],
      };
    }
    const dna = randDna(rng, 9, "A");
    const sense = complementDna(dna);
    const dnaT = splitTriplets(dna);
    const senseT = splitTriplets(sense);
    const mrnaTrap = transcribeAntisense(dna);
    return {
      prompt: `Given the **antisense (template) DNA strand** \`3'-${dnaT}-5'\`, write the complementary **sense (coding) DNA strand** (5'→3', letters only).`,
      answer: {
        type: "text",
        accept: [sense, senseT, `5'-${sense}-3'`, `5'-${senseT}-3'`],
        display: sense,
      },
      traps: [{ spec: { type: "text", accept: [mrnaTrap, splitTriplets(mrnaTrap)] }, feedback: "Watch the question: it asks for the sense DNA strand (using T), not mRNA (using U)!" }],
      hint: "Pair DNA-to-DNA bases: A↔T and C↔G.",
      solution: [
        `Pair each base in \`3'-${dnaT}-5'\` with its DNA complement (A↔T, C↔G).`,
        `Sense DNA (5'→3'): \`${senseT}\` (${sense}).`,
      ],
    };
  },
};

// =============================================================================
// DRILL 2 (SL, Level 1 — Sprint-ready): Mitotic Index & Division Counts
// =============================================================================
const ORGANISMS = [
  "fruit fly",
  "garden pea",
  "onion",
  "maize",
  "honeybee",
  "mosquito",
  "frog",
  "mouse",
  "house cat",
  "red fox",
  "chimpanzee",
  "potato",
] as const;

const mitoticDivisionDrill: Drill = {
  id: `${TOPIC_ID}.mitotic-index-division`,
  topicId: TOPIC_ID,
  title: "Mitotic Index, Ploidy & Chromatid Counts",
  level: 1,
  ibLevel: "SL",
  guideRef: "mutations-division-cancer",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const mode = rng.int(1, 3);
      if (mode === 1) {
        const totals = [50, 100, 150, 200, 250] as const;
        const total = rng.pick(totals);
        const pct = rng.int(8, 38);
        // Ensure dividing count is an exact integer for chosen total
        const step = total === 50 ? 2 : total === 150 ? 2 : total === 250 ? 2 : 1;
        const cleanPct = Math.max(6, Math.round(pct / step) * step);
        const div = Math.round((cleanPct * total) / 100);
        const exactPct = clean((div / total) * 100);
        const traps = [
          { spec: { type: "number" as const, value: clean(div / total), tolerance: 0.002 }, feedback: "That is the decimal ratio — multiply by 100 to give the percentage (%)." },
        ];
        return {
          prompt: `In a root-tip squash of **${total}** cells, **${div}** cells are undergoing mitosis (P+M+A+T). Calculate the **mitotic index as a percentage** (%).`,
          answer: { type: "number", value: exactPct, tolerance: 0.05, display: `${num(exactPct)}%` },
          traps,
          hint: "Mitotic index (%) = (cells in mitosis ÷ total cells) × 100.",
          solution: [
            `{{MI = (${div} / ${total}) * 100 = ${num(exactPct)}}}%.`,
          ],
        };
      }
      if (mode === 2) {
        const org = rng.pick(ORGANISMS);
        const n = rng.int(4, 38);
        const twoN = 2 * n;
        const askMeiosis = rng.bool(0.65);
        if (askMeiosis) {
          return {
            prompt: `A diploid ${org} has {{2n = ${twoN}}} chromosomes in a G₁ somatic cell. How many chromosomes are in one **haploid gamete** after meiosis?`,
            answer: { type: "number", value: n, display: String(n) },
            traps: [
              { spec: { type: "number", value: twoN }, feedback: `${twoN} is the diploid (2n) count — meiosis halves chromosome number to haploid (n).` },
            ],
            hint: "Meiosis halves the diploid chromosome count: {{n = 2n / 2}}.",
            solution: [`{{n = ${twoN} / 2 = ${n}}} chromosomes per gamete.`],
          };
        }
        return {
          prompt: `A diploid ${org} has {{2n = ${twoN}}} chromosomes in G₁. How many chromosomes are in each daughter cell immediately after **mitosis**?`,
          answer: { type: "number", value: twoN, display: String(twoN) },
          traps: [
            { spec: { type: "number", value: n }, feedback: `${n} is the haploid count from meiosis — mitosis preserves the diploid (2n) chromosome count.` },
          ],
          hint: "Mitosis produces genetically identical diploid (2n) daughter cells.",
          solution: [`Mitosis preserves ploidy, giving {{2n = ${twoN}}} chromosomes per daughter cell.`],
        };
      }
      const n0 = rng.int(1, 9);
      const rounds = rng.int(3, 7);
      const ans = n0 * 2 ** rounds;
      return {
        prompt: `Starting with **${n0}** somatic ${n0 === 1 ? "cell" : "cells"}, how many daughter cells exist after **${rounds}** synchronous rounds of mitosis?`,
        answer: { type: "number", value: ans, display: String(ans) },
        traps: [
          { spec: { type: "number", value: n0 * 2 * rounds }, feedback: "Each mitotic round doubles the population ({{N_0 * 2^k}}), not linearly." },
        ],
        hint: "Use {{N = N_0 * 2^k}}.",
        solution: [`{{N = ${n0} * 2^${rounds} = ${n0} * ${2 ** rounds} = ${ans}}} cells.`],
      };
    }

    if (tier === 2) {
      const mode = rng.int(1, 3);
      if (mode === 1) {
        const total = rng.pick([100, 125, 200, 250] as const);
        const p = rng.int(6, 22);
        const m = rng.int(3, 12);
        const a = rng.int(2, 10);
        const t = rng.int(2, 10);
        const div = p + m + a + t;
        const inter = total - div;
        const pct = roundTo((div / total) * 100, 1);
        const wrongInterOnly = roundTo((div / inter) * 100, 1);
        return {
          prompt: `A tissue slide contains **${inter}** cells in interphase, **${p}** in prophase, **${m}** in metaphase, **${a}** in anaphase, and **${t}** in telophase. Calculate the **mitotic index (%)** to 1 d.p.`,
          answer: { type: "number", value: pct, tolerance: 0.1, display: `${num(pct)}%` },
          traps: wrongInterOnly !== pct
            ? [{ spec: { type: "number", value: wrongInterOnly, tolerance: 0.1 }, feedback: `Divide dividing cells (${div}) by ALL ${total} cells observed, not just interphase (${inter}).` }]
            : undefined,
          hint: "Sum P + M + A + T for the numerator, and include interphase + mitotic cells in the denominator.",
          solution: [
            `Dividing cells = {{${p} + ${m} + ${a} + ${t} = ${div}}}; total cells = {{${inter} + ${div} = ${total}}}.`,
            `Mitotic index = {{(${div} / ${total}) * 100 = ${num(pct)}}}%.`,
          ],
        };
      }
      if (mode === 2) {
        const org = rng.pick(ORGANISMS);
        const n = rng.int(4, 34);
        const twoN = 2 * n;
        const chromatids = 4 * n;
        return {
          prompt: `A diploid ${org} has {{2n = ${twoN}}} chromosomes in a G₁ somatic cell. How many **sister chromatids** are present in total inside one cell at **Metaphase of mitosis**?`,
          answer: { type: "number", value: chromatids, display: String(chromatids) },
          traps: [
            { spec: { type: "number", value: twoN }, feedback: `${twoN} is the number of replicated chromosomes — each has 2 sister chromatids after S phase!` },
          ],
          hint: "After S phase, each of the 2n chromosomes consists of 2 sister chromatids.",
          solution: [`Total chromatids = {{2 * ${twoN} = ${chromatids}}}.`],
        };
      }
      const org = rng.pick(ORGANISMS);
      const n = rng.int(3, 12);
      const twoN = 2 * n;
      const combos = 2 ** n;
      return {
        prompt: `A diploid ${org} has {{2n = ${twoN}}} chromosomes. Ignoring crossing over, how many distinct gamete combinations can arise from **random orientation** in Metaphase I?`,
        answer: { type: "number", value: combos, display: String(combos) },
        traps: [
          { spec: { type: "number", value: twoN }, feedback: "Compute {{2^n}} using the haploid pair count n, not 2n." },
        ],
        hint: `Find haploid pair count {{n = ${twoN} / 2 = ${n}}}, then calculate {{2^${n}}}.`,
        solution: [
          `Haploid number {{n = ${twoN} / 2 = ${n}}}.`,
          `Random orientation combinations = {{2^${n} = ${combos}}}.`,
        ],
      };
    }

    // Tier 3: inverse MI (interphase cells), non-disjunction zygote, chromatids after Meiosis I
    const mode = rng.int(1, 3);
    if (mode === 1) {
      const total = rng.pick([120, 150, 160, 200, 240, 250, 300] as const);
      const pctChoices = total === 120 ? [15, 20, 25, 30, 35] : total === 160 ? [15, 20, 25, 30, 35] : [12, 16, 18, 22, 24, 28, 32, 36];
      const pct = rng.pick(pctChoices);
      const mitotic = Math.round((pct * total) / 100);
      const interphase = total - mitotic;
      return {
        prompt: `A biopsy of **${total}** epithelial cells has a mitotic index of **${pct}%**. How many of these cells are in **interphase**?`,
        answer: { type: "number", value: interphase, display: String(interphase) },
        traps: [
          { spec: { type: "number", value: mitotic }, feedback: `${mitotic} is the number of cells in mitosis — subtract from ${total} to find interphase cells!` },
        ],
        hint: `Find the mitotic cells (${pct}% of ${total}), then subtract from ${total}.`,
        solution: [
          `Mitotic cells = {{(${pct} / 100) * ${total} = ${mitotic}}}.`,
          `Interphase cells = {{${total} - ${mitotic} = ${interphase}}}.`,
        ],
      };
    }
    if (mode === 2) {
      const org = rng.pick(ORGANISMS);
      const n = rng.int(6, 36);
      const twoN = 2 * n;
      const trisomy = rng.bool(0.5);
      const gamete = trisomy ? n + 1 : n - 1;
      const zygote = gamete + n;
      const label = trisomy ? "trisomic (2n + 1)" : "monosomic (2n − 1)";
      const gamLabel = trisomy ? "n + 1" : "n − 1";
      return {
        prompt: `In a diploid ${org} ({{2n = ${twoN}}}), non-disjunction of one homologous pair occurs during Anaphase I. If a resulting **${gamLabel}** gamete fuses with a normal haploid gamete, how many chromosomes are in the **${label} zygote**?`,
        answer: { type: "number", value: zygote, display: String(zygote) },
        traps: [
          { spec: { type: "number", value: gamete }, feedback: `${gamete} is the aneuploid gamete alone — add the ${n} chromosomes from the normal partner gamete!` },
        ],
        hint: `Normal haploid count is {{n = ${n}}}. Add the aneuploid gamete (${gamete}) and the normal gamete (${n}).`,
        solution: [
          `Haploid count {{n = ${twoN} / 2 = ${n}}}.`,
          `Aneuploid gamete has ${gamete} chromosomes; normal gamete has ${n}.`,
          `Zygote chromosome count = {{${gamete} + ${n} = ${zygote}}}.`,
        ],
      };
    }
    const org = rng.pick(ORGANISMS);
    const n = rng.int(5, 32);
    const twoN = 2 * n;
    return {
      prompt: `A diploid ${org} cell ({{2n = ${twoN}}}) completes **Meiosis I** and enters **Metaphase II**. How many **chromatids** are inside ONE of the two haploid daughter cells at Metaphase II?`,
      answer: { type: "number", value: twoN, display: String(twoN) },
      traps: [
        { spec: { type: "number", value: n }, feedback: `${n} is the number of chromosomes in Metaphase II — centromeres have not divided yet, so each has 2 chromatids!` },
        { spec: { type: "number", value: 4 * n }, feedback: `${4 * n} was the total chromatid count before Meiosis I split the cell into two.` },
      ],
      hint: `Each Metaphase II cell holds {{n = ${n}}} replicated chromosomes, and each chromosome still has 2 sister chromatids.`,
      solution: [
        `After Meiosis I, each haploid cell holds {{n = ${n}}} chromosomes, each still composed of 2 sister chromatids.`,
        `Total chromatids per Metaphase II cell = {{2 * ${n} = ${twoN}}}.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 3 (SL/HL, Level 2 — Sprint-ready): Water Potential & Osmosis
// =============================================================================
const TISSUES = ["potato", "carrot", "beetroot", "sweet-potato", "apple", "celery"] as const;

const waterPotentialDrill: Drill = {
  id: `${TOPIC_ID}.water-potential-osmosis`,
  topicId: TOPIC_ID,
  title: "Water Potential (Ψ = Ψ_s + Ψ_p) & Osmotic Mass Change",
  level: 2,
  ibLevel: "SL",
  guideRef: "water-potential-osmosis",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const mode = rng.int(1, 3);
      if (mode === 1) {
        const sMag = rng.int(32, 96) * 10; // -320 to -960
        const psiS = -sMag;
        const psiP = rng.int(4, Math.floor(sMag / 10) - 4) * 10;
        const psi = psiS + psiP; // strictly negative
        return {
          prompt: `A plant cell has solute potential {{Ψ_s = ${psiS}}} kPa and pressure potential {{Ψ_p = +${psiP}}} kPa. Calculate its total water potential **Ψ** (in kPa, including sign).`,
          answer: { type: "number", value: psi, display: `${num(psi)} kPa` },
          traps: [
            { spec: { type: "number", value: Math.abs(psi) }, feedback: "Watch the negative sign! Since {{Ψ_s}} is more negative than {{+Ψ_p}}, total Ψ is negative." },
            { spec: { type: "number", value: psiS - psiP }, feedback: "Add positive {{Ψ_p}} to {{Ψ_s}} rather than subtracting it." },
          ],
          hint: "Substitute into {{Ψ = Ψ_s + Ψ_p}} keeping both signs.",
          solution: [`{{Ψ = ${psiS} + ${psiP} = ${psi}}} kPa.`],
        };
      }
      if (mode === 2) {
        const tissue = rng.pick(TISSUES);
        const mInit = rng.pick([2.0, 2.5, 4.0, 5.0, 8.0, 10.0] as const);
        const sign = rng.bool(0.5) ? 1 : -1;
        const stepPct = mInit === 2.0 ? 2 : mInit === 4.0 ? 2 : 1;
        const pctMag = rng.int(4, 22);
        const pct = sign * Math.max(2, Math.round(pctMag / stepPct) * stepPct);
        const mFinal = roundTo(mInit * (1 + pct / 100), 2);
        const actualPct = roundTo(((mFinal - mInit) / mInit) * 100, 1);
        return {
          prompt: `A ${tissue} strip starts at **${mInit.toFixed(2)} g** and finishes at **${mFinal.toFixed(2)} g** after soaking in sucrose solution. Calculate the **percentage change in mass** (%, include sign).`,
          answer: { type: "number", value: actualPct, tolerance: 0.1, display: `${actualPct > 0 ? "+" : ""}${num(actualPct)}%` },
          traps: [
            { spec: { type: "number", value: -actualPct, tolerance: 0.1 }, feedback: `Check the sign: mass went from ${mInit.toFixed(2)} g to ${mFinal.toFixed(2)} g.` },
          ],
          hint: "Use {{%Δm = ((m_f - m_i) / m_i) * 100}}.",
          solution: [
            `Mass change = {{${mFinal.toFixed(2)} - ${mInit.toFixed(2)} = ${num(roundTo(mFinal - mInit, 2))}}} g.`,
            `{{%Δm = (${num(roundTo(mFinal - mInit, 2))} / ${mInit.toFixed(2)}) * 100 = ${num(actualPct)}}}%.`,
          ],
        };
      }
      const sMag = rng.int(30, 95) * 10;
      const psiS = -sMag;
      return {
        prompt: `A flaccid plant cell with {{Ψ_s = ${psiS}}} kPa is placed into pure water ({{Ψ = 0}} kPa) until equilibrium is reached (negligible dilution of {{Ψ_s}}). State its equilibrium **pressure potential ({{Ψ_p}})** in kPa.`,
        answer: { type: "number", value: sMag, display: `+${sMag} kPa` },
        traps: [
          { spec: { type: "number", value: psiS }, feedback: "In a swollen turgid cell, inward wall pressure potential {{Ψ_p}} is POSITIVE." },
        ],
        hint: "At equilibrium in pure water, {{Ψ_cell = 0}}, so solve {{0 = Ψ_s + Ψ_p}}.",
        solution: [`{{0 = ${psiS} + Ψ_p}} → {{Ψ_p = +${sMag}}} kPa.`],
      };
    }

    if (tier === 2) {
      const mode = rng.int(1, 3);
      if (mode === 1) {
        const sMag = rng.int(45, 98) * 10;
        const psiS = -sMag;
        const psiP = rng.int(8, Math.floor(sMag / 10) - 10) * 10;
        const psi = psiS + psiP;
        const askSolute = rng.bool(0.5);
        if (askSolute) {
          return {
            prompt: `A leaf mesophyll cell has total water potential {{Ψ = ${psi}}} kPa and pressure potential {{Ψ_p = +${psiP}}} kPa. Calculate its **solute potential ({{Ψ_s}})** in kPa (include sign).`,
            answer: { type: "number", value: psiS, display: `${num(psiS)} kPa` },
            traps: [
              { spec: { type: "number", value: psi + psiP }, feedback: "Rearrange {{Ψ = Ψ_s + Ψ_p}} carefully: {{Ψ_s = Ψ - Ψ_p}}." },
              { spec: { type: "number", value: sMag }, feedback: "Solute potential {{Ψ_s}} is ALWAYS negative (≤ 0)." },
            ],
            hint: "Rearrange {{Ψ = Ψ_s + Ψ_p}} to {{Ψ_s = Ψ - Ψ_p}}.",
            solution: [`{{Ψ_s = ${psi} - ${psiP} = ${psiS}}} kPa.`],
          };
        }
        return {
          prompt: `A turgid parenchyma cell has total water potential {{Ψ = ${psi}}} kPa and solute potential {{Ψ_s = ${psiS}}} kPa. Calculate its **pressure potential ({{Ψ_p}})** in kPa.`,
          answer: { type: "number", value: psiP, display: `+${psiP} kPa` },
          traps: [
            { spec: { type: "number", value: -psiP }, feedback: "Wall turgor pressure in a turgid cell is positive: {{Ψ_p = Ψ - Ψ_s}}." },
          ],
          hint: "Rearrange {{Ψ = Ψ_s + Ψ_p}} to {{Ψ_p = Ψ - Ψ_s}}.",
          solution: [`{{Ψ_p = ${psi} - (${psiS}) = +${psiP}}} kPa.`],
        };
      }
      if (mode === 2) {
        const psiSA = -rng.int(45, 88) * 10;
        const psiPA = rng.int(5, 35) * 10;
        const psiA = psiSA + psiPA;
        let psiSB = -rng.int(45, 88) * 10;
        const psiPB = rng.int(5, 35) * 10;
        let psiB = psiSB + psiPB;
        if (psiA === psiB) {
          psiSB -= 60;
          psiB = psiSB + psiPB;
        }
        const gainer = psiA > psiB ? "B" : "A";
        const loser = gainer === "B" ? "A" : "B";
        return {
          prompt: `Two adjacent plant cells have: **Cell A** ({{Ψ_s = ${psiSA}}} kPa, {{Ψ_p = +${psiPA}}} kPa) and **Cell B** ({{Ψ_s = ${psiSB}}} kPa, {{Ψ_p = +${psiPB}}} kPa). Which cell (**A** or **B**) has a net **gain** of water by osmosis?`,
          answer: { type: "text", accept: [gainer, `Cell ${gainer}`], display: `Cell ${gainer}` },
          traps: [
            { spec: { type: "text", accept: [loser, `Cell ${loser}`] }, feedback: `Water moves from higher (less negative) Ψ to lower (more negative) Ψ: Cell A = ${num(psiA)} kPa, Cell B = ${num(psiB)} kPa.` },
          ],
          hint: "Compute {{Ψ = Ψ_s + Ψ_p}} for both cells; water moves into the cell with the LOWER (more negative) Ψ.",
          solution: [
            `Cell A: {{Ψ_A = ${psiSA} + ${psiPA} = ${psiA}}} kPa; Cell B: {{Ψ_B = ${psiSB} + ${psiPB} = ${psiB}}} kPa.`,
            `Since {{${Math.max(psiA, psiB)} > ${Math.min(psiA, psiB)}}}, net water enters **Cell ${gainer}**.`,
          ],
        };
      }
      const tissue = rng.pick(TISSUES);
      const mInit = rng.pick([3.2, 3.6, 4.5, 4.8, 6.4, 7.5] as const);
      const delta = rng.nonZero(-18, 18) * 0.05;
      const mFinal = roundTo(mInit + delta, 2);
      const pct = roundTo(((mFinal - mInit) / mInit) * 100, 1);
      return {
        prompt: `A ${tissue} cylinder of initial mass **${mInit.toFixed(2)} g** has a final mass of **${mFinal.toFixed(2)} g** after osmosis. Calculate the **percentage change in mass** (%) to 1 d.p.`,
        answer: { type: "number", value: pct, tolerance: 0.15, display: `${pct > 0 ? "+" : ""}${num(pct)}%` },
        hint: "Subtract initial from final mass, divide by initial mass, and multiply by 100.",
        solution: [
          `{{Δm = ${mFinal.toFixed(2)} - ${mInit.toFixed(2)} = ${num(roundTo(mFinal - mInit, 2))}}} g.`,
          `{{%Δm = (${num(roundTo(mFinal - mInit, 2))} / ${mInit.toFixed(2)}) * 100 = ${num(pct)}}}%.`,
        ],
      };
    }

    // Tier 3: Equilibrium Ψ_p in sucrose bath, MPa↔kPa mixed units, linear isotonic interpolation
    const mode = rng.int(1, 3);
    if (mode === 1) {
      const psiS = -rng.int(65, 110) * 10; // e.g., -850 kPa
      const psiPInit = rng.int(25, 55) * 10;
      const psiExt = -rng.int(20, Math.abs(psiS) / 10 - 15) * 10; // between psiS and 0
      const psiPEq = psiExt - psiS; // strictly positive!
      return {
        prompt: `A turgid plant cell ({{Ψ_s = ${psiS}}} kPa, initial {{Ψ_p = +${psiPInit}}} kPa) is placed in a sucrose bath at {{Ψ_ext = ${psiExt}}} kPa until equilibrium (negligible change in {{Ψ_s}}). Calculate its equilibrium **pressure potential ({{Ψ_p}})** in kPa.`,
        answer: { type: "number", value: psiPEq, display: `+${psiPEq} kPa` },
        traps: [
          { spec: { type: "number", value: 0 }, feedback: `Because {{Ψ_ext (${psiExt}) > Ψ_s (${psiS})}}, the cell remains partially turgid ({{Ψ_p > 0}}), not plasmolysed.` },
        ],
        hint: `At equilibrium, {{Ψ_cell = Ψ_ext = ${psiExt}}} kPa. Solve {{${psiExt} = ${psiS} + Ψ_p}}.`,
        solution: [
          `At equilibrium, {{Ψ_cell = ${psiExt}}} kPa.`,
          `{{Ψ_p = ${psiExt} - (${psiS}) = +${psiPEq}}} kPa.`,
        ],
      };
    }
    if (mode === 2) {
      const sMPa = -roundTo(rng.int(42, 118) / 100, 2); // -0.42 to -1.18 MPa
      const sKPa = Math.round(sMPa * 1000);
      const pKPa = rng.int(8, Math.floor(Math.abs(sKPa) / 10) - 6) * 10;
      const psiKPa = sKPa + pKPa;
      return {
        prompt: `A guard cell has solute potential {{Ψ_s = ${sMPa.toFixed(2)}}} MPa and pressure potential {{Ψ_p = +${pKPa}}} kPa. Calculate its total water potential **Ψ** in **kPa** (including sign).`,
        answer: { type: "number", value: psiKPa, display: `${num(psiKPa)} kPa` },
        traps: [
          { spec: { type: "number", value: Math.abs(psiKPa) }, feedback: "Keep the negative sign on total water potential!" },
        ],
        hint: "Convert MPa to kPa first (1 MPa = 1000 kPa), then apply {{Ψ = Ψ_s + Ψ_p}}.",
        solution: [
          `Convert {{${sMPa.toFixed(2)}}} MPa = {{${sKPa}}} kPa.`,
          `{{Ψ = ${sKPa} + ${pKPa} = ${psiKPa}}} kPa.`,
        ],
      };
    }
    // Linear isotonic concentration interpolation with exact 2 d.p. x-intercept
    const tissue = rng.pick(TISSUES);
    const c1 = roundTo(rng.int(10, 30) / 100, 2);
    const stepC = roundTo(rng.int(2, 6) * 0.05, 2); // 0.10 to 0.30
    const isoOffset = roundTo(rng.int(2, Math.round(stepC * 100) - 2) / 100, 2);
    const cIso = roundTo(c1 + isoOffset, 2);
    const c2 = roundTo(c1 + stepC, 2);
    const slope = rng.pick([40, 50, 60, 80, 100] as const); // % per mol dm^-3
    const p1 = roundTo(slope * (cIso - c1), 1);
    const p2 = roundTo(-slope * (c2 - cIso), 1);
    return {
      prompt: `In a ${tissue} osmosis experiment, strips gain **+${p1.toFixed(1)}%** mass at \`${c1.toFixed(2)} mol dm⁻³\` sucrose and lose **${num(p2)}%** mass at \`${c2.toFixed(2)} mol dm⁻³\`. Using linear interpolation, calculate the estimated **isotonic sucrose concentration** (in \`mol dm⁻³\`, to 2 d.p.).`,
      answer: { type: "number", value: cIso, tolerance: 0.006, display: `${cIso.toFixed(2)} mol dm⁻³` },
      hint: `Find gradient {{(${num(p2)} - ${p1.toFixed(1)}) / (${c2.toFixed(2)} - ${c1.toFixed(2)})}}, then solve for the concentration where %Δm = 0.`,
      solution: [
        `Gradient = {{(${num(p2)} - ${p1.toFixed(1)}) / (${c2.toFixed(2)} - ${c1.toFixed(2)}) = -${slope}}} % per mol dm⁻³.`,
        `Rise in concentration to drop +${p1.toFixed(1)}% to 0%: {{${p1.toFixed(1)} / ${slope} = ${isoOffset.toFixed(2)}}} mol dm⁻³.`,
        `Isotonic concentration = {{${c1.toFixed(2)} + ${isoOffset.toFixed(2)} = ${cIso.toFixed(2)}}} mol dm⁻³.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 4 (HL, Level 3): Epigenetics, Splicing & Lagging-Strand Quantitative HL
// =============================================================================
const GENES = ["BRCA1", "TP53", "INS", "HBB", "IGF2", "PAX6", "MYOD1", "ALB", "SOX2", "FOXP3", "CDKN2A", "MLH1"] as const;
const CELL_TYPES = ["hepatocyte", "pancreatic β-cell", "motor neuron", "cardiomyocyte", "T-lymphocyte", "epithelial cell"] as const;
const ENV_FACTORS = ["chronic stress", "folate-rich diet", "air pollution", "tobacco smoke", "endurance exercise", "prenatal famine"] as const;

const epigeneticsReplicationHlDrill: Drill = {
  id: `${TOPIC_ID}.epigenetics-replication-hl`,
  topicId: TOPIC_ID,
  title: "Epigenetic Regulation, Splicing & Okazaki Synthesis [HL]",
  level: 3,
  ibLevel: "HL",
  guideRef: "gene-expression-epigenetics-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const mode = rng.int(1, 3);
      if (mode === 1) {
        const gene = rng.pick(GENES);
        const cell = rng.pick(CELL_TYPES);
        const totalSites = rng.pick([20, 25, 40, 50, 80, 100] as const);
        const step = totalSites === 40 ? 2 : totalSites === 80 ? 4 : 1;
        const meth = Math.min(totalSites - step, Math.max(step, Math.round(rng.int(3, totalSites - 3) / step) * step));
        const pct = clean((meth / totalSites) * 100);
        return {
          prompt: `In a human ${cell}, **${meth}** of **${totalSites}** CpG cytosines in the *${gene}* promoter carry methyl tags. Calculate the **percentage (%)** of methylated CpG sites.`,
          answer: { type: "number", value: pct, tolerance: 0.05, display: `${num(pct)}%` },
          hint: "Divide methylated CpG sites by total CpG sites, then multiply by 100.",
          solution: [`{{(${meth} / ${totalSites}) * 100 = ${num(pct)}}}%.`],
        };
      }
      if (mode === 2) {
        const gene = rng.pick(GENES);
        const cell = rng.pick(CELL_TYPES);
        const env = rng.pick(ENV_FACTORS);
        const isAcetyl = rng.bool(0.5);
        if (isAcetyl) {
          return {
            prompt: `In a ${cell} exposed to ${env}, histone acetyltransferases add acetyl groups to positively charged lysine tails around the *${gene}* promoter. Does chromatin shift toward **euchromatin** or **heterochromatin**?`,
            answer: { type: "text", accept: ["euchromatin"], display: "euchromatin" },
            traps: [
              { spec: { type: "text", accept: ["heterochromatin"] }, feedback: "Histone acetylation neutralizes (+) lysine charges, loosening packing into open euchromatin!" },
            ],
            hint: "Acetylation weakens (+) histone to (−) DNA attraction, opening chromatin.",
            solution: [
              "Histone tail acetylation neutralizes positive lysine charges, weakening electrostatic attraction to negatively charged DNA.",
              "Chromatin relaxes into transcriptionally active **euchromatin**.",
            ],
          };
        }
        return {
          prompt: `In a ${cell} exposed to ${env}, heavy DNA methylation occurs across promoter CpG islands of the *${gene}* gene. Does local chromatin condense into **euchromatin** or **heterochromatin**?`,
          answer: { type: "text", accept: ["heterochromatin"], display: "heterochromatin" },
          traps: [
            { spec: { type: "text", accept: ["euchromatin"] }, feedback: "Promoter DNA methylation recruits condensing complexes, compacting DNA into silenced heterochromatin." },
          ],
          hint: "DNA Methylation = Mute (compact, inaccessible chromatin).",
          solution: [
            "Promoter cytosine methylation blocks transcription factors and compacts nucleosomes into silenced **heterochromatin**.",
          ],
        };
      }
      const lenKb = rng.int(6, 48);
      const fragBp = rng.pick([1000, 2000] as const);
      const safeLen = fragBp === 2000 && lenKb % 2 !== 0 ? lenKb + 1 : lenKb;
      const primers = (safeLen * 1000) / fragBp;
      return {
        prompt: `A bacterial lagging-strand template is **${safeLen} kb** (${safeLen * 1000} bp) long and is synthesized in Okazaki fragments averaging **${fragBp} bp** each. How many **RNA primers** must RNA primase synthesize along this template?`,
        answer: { type: "number", value: primers, display: String(primers) },
        hint: "Each Okazaki fragment requires 1 RNA primer; convert kb to bp (× 1000) and divide by fragment length.",
        solution: [
          `Template length = {{${safeLen} * 1000 = ${safeLen * 1000}}} bp.`,
          `RNA primers needed = {{${safeLen * 1000} / ${fragBp} = ${primers}}}.`,
        ],
      };
    }

    if (tier === 2) {
      const mode = rng.int(1, 3);
      if (mode === 1) {
        const gene = rng.pick(GENES);
        const total = rng.pick([25, 40, 50, 80, 100] as const);
        const step = total === 40 ? 2 : total === 80 ? 4 : 1;
        const mA = Math.max(step, Math.round(rng.int(4, Math.floor(total * 0.4)) / step) * step);
        const mB = Math.min(total - step, Math.round(rng.int(Math.floor(total * 0.55), total - 4) / step) * step);
        const pA = clean((mA / total) * 100);
        const pB = clean((mB / total) * 100);
        const diff = clean(pB - pA);
        return {
          prompt: `In 55-year-old monozygotic twins, **${total}** CpG sites in the *${gene}* promoter are assayed: Twin A has **${mA}** methylated sites and Twin B has **${mB}** methylated sites. Calculate the **difference in percentage methylation** (percentage points) between Twin B and Twin A.`,
          answer: { type: "number", value: diff, tolerance: 0.1, display: `${num(diff)}%` },
          hint: "Compute % methylated for each twin (or divide the site difference by total sites × 100).",
          solution: [
            `Twin A = {{(${mA} / ${total}) * 100 = ${num(pA)}}}%; Twin B = {{(${mB} / ${total}) * 100 = ${num(pB)}}}%.`,
            `Difference = {{${num(pB)} - ${num(pA)} = ${num(diff)}}} percentage points.`,
          ],
        };
      }
      if (mode === 2) {
        const lenKb = rng.int(6, 42) * 2; // 12..84 kb even
        const fragBp = rng.pick([150, 200, 250] as const);
        const safeLen = fragBp === 150 ? Math.round(lenKb / 3) * 3 : lenKb;
        const frags = Math.round((safeLen * 1000) / fragBp);
        return {
          prompt: `A bidirectional eukaryotic replicon spans **${safeLen} kb** (${safeLen * 1000} bp), unwinding symmetrically into two opposing replication forks (${safeLen / 2} kb per fork). With average eukaryotic Okazaki fragments of **${fragBp} bp**, how many **Okazaki fragments** are synthesized in total across **both** lagging strands?`,
          answer: { type: "number", value: frags, display: String(frags) },
          traps: [
            { spec: { type: "number", value: frags / 2 }, feedback: `{{${frags / 2}}} is only ONE fork's lagging arm — sum BOTH opposing forks (${safeLen / 2} + ${safeLen / 2} = ${safeLen} kb)!` },
          ],
          hint: "Each fork builds one lagging arm of half the replicon length, so total lagging length across both forks equals the full replicon length.",
          solution: [
            `Combined lagging-strand length across both forks = {{${safeLen / 2} + ${safeLen / 2} = ${safeLen}}} kb = ${safeLen * 1000} bp.`,
            `Total Okazaki fragments = {{${safeLen * 1000} / ${fragBp} = ${frags}}}.`,
          ],
        };
      }
      const gene = rng.pick(GENES);
      const e1 = rng.int(20, 65) * 3;
      const e2 = rng.int(25, 70) * 3;
      const e3 = rng.int(18, 55) * 3;
      const e4 = rng.int(22, 60) * 3;
      const keptBases = e1 + e2 + e4;
      const aa = keptBases / 3 - 1;
      return {
        prompt: `Alternative splicing of *${gene}* pre-mRNA joins Exons 1, 2, and 4 while skipping Exon 3. Exon lengths are: Exon 1 = **${e1}** nt, Exon 2 = **${e2}** nt, Exon 3 = **${e3}** nt, Exon 4 = **${e4}** nt. If the joined exons begin with \`AUG\` and end with one stop codon, how many **amino acids** are in this isoform?`,
        answer: { type: "number", value: aa, display: String(aa) },
        traps: [
          { spec: { type: "number", value: aa + 1 }, feedback: "Subtract 1 for the terminal stop codon after dividing by 3." },
          { spec: { type: "number", value: (keptBases + e3) / 3 - 1 }, feedback: "Remember that Exon 3 is skipped in this spliced isoform!" },
        ],
        hint: "Sum only Exons 1 + 2 + 4, divide by 3, and subtract 1 stop codon.",
        solution: [
          `Spliced exon length = {{${e1} + ${e2} + ${e4} = ${keptBases}}} nt.`,
          `Amino acids = {{(${keptBases} / 3) - 1 = ${keptBases / 3} - 1 = ${aa}}}.`,
        ],
      };
    }

    // Tier 3: HDAC/methylation transcription rate shift, isoform AA difference, Pol I RNA nucleotide replacement
    const mode = rng.int(1, 3);
    if (mode === 1) {
      const gene = rng.pick(GENES);
      const cell = rng.pick(CELL_TYPES);
      const r0 = rng.pick([40, 50, 60, 80, 100, 120, 150, 200] as const);
      const boost = rng.bool(0.5);
      const pct = rng.pick([15, 20, 25, 30, 40, 50, 60, 75] as const);
      const delta = clean((r0 * pct) / 100);
      const r1 = clean(boost ? r0 + delta : r0 - delta);
      if (boost) {
        return {
          prompt: `A ${cell} transcribes *${gene}* at **${r0} mRNA min⁻¹**. Applying an HDAC inhibitor increases histone acetylation and boosts transcription rate by **${pct}%**. Calculate the new transcription rate (in mRNA min⁻¹).`,
          answer: { type: "number", value: r1, tolerance: 0.05, display: num(r1) },
          traps: delta !== r1
            ? [{ spec: { type: "number", value: delta }, feedback: `${num(delta)} is the increase alone — add it to the baseline ${r0} mRNA min⁻¹.` }]
            : undefined,
          hint: `Multiply ${r0} by {{1 + ${pct / 100}}}.`,
          solution: [
            `Increase = {{${r0} * (${pct} / 100) = ${num(delta)}}}.`,
            `New rate = {{${r0} + ${num(delta)} = ${num(r1)}}} mRNA min⁻¹.`,
          ],
        };
      }
      return {
        prompt: `A ${cell} transcribes *${gene}* at **${r0} mRNA min⁻¹**. Promoter CpG hypermethylation condenses local chromatin and decreases transcription rate by **${pct}%**. Calculate the new transcription rate (in mRNA min⁻¹).`,
        answer: { type: "number", value: r1, tolerance: 0.05, display: num(r1) },
        traps: delta !== r1
          ? [{ spec: { type: "number", value: delta }, feedback: `${num(delta)} is the decrease alone — subtract it from ${r0} mRNA min⁻¹.` }]
          : undefined,
        hint: `Multiply ${r0} by {{1 - ${pct / 100}}}.`,
        solution: [
          `Decrease = {{${r0} * (${pct} / 100) = ${num(delta)}}}.`,
          `New rate = {{${r0} - ${num(delta)} = ${num(r1)}}} mRNA min⁻¹.`,
        ],
      };
    }
    if (mode === 2) {
      const gene = rng.pick(GENES);
      const e2 = rng.int(15, 65) * 3;
      const e3 = rng.int(12, 55) * 3;
      const diffAa = (e2 + e3) / 3;
      return {
        prompt: `Full-length *${gene}* mRNA includes Exons 1–5, whereas a neuron-specific alternative isoform skips Exon 2 (**${e2}** nt) and Exon 3 (**${e3}** nt) without shifting the reading frame. How many **fewer amino acids** does the neuron-specific isoform contain?`,
        answer: { type: "number", value: diffAa, display: String(diffAa) },
        traps: [
          { spec: { type: "number", value: e2 + e3 }, feedback: `${e2 + e3} is the difference in nucleotides — divide by 3 nucleotides per amino acid!` },
        ],
        hint: "Sum the skipped exon nucleotides and divide by 3 (both isoforms still end with 1 stop codon).",
        solution: [
          `Skipped coding nucleotides = {{${e2} + ${e3} = ${e2 + e3}}} nt.`,
          `Fewer amino acids = {{${e2 + e3} / 3 = ${diffAa}}}.`,
        ],
      };
    }
    const lenKb = rng.int(6, 36) * 2;
    const fragBp = rng.pick([200, 250] as const);
    const primerNt = rng.pick([10, 12] as const);
    const frags = Math.round((lenKb * 1000) / fragBp);
    const totalNt = frags * primerNt;
    return {
      prompt: `Across both lagging arms of a **${lenKb} kb** bidirectional eukaryotic replicon, Okazaki fragments average **${fragBp} bp** and each starts with a **${primerNt}-nucleotide** RNA primer. How many total **RNA primer nucleotides** must be excised and replaced with DNA nucleotides across the lagging strands?`,
      answer: { type: "number", value: totalNt, display: String(totalNt) },
      traps: [
        { spec: { type: "number", value: frags }, feedback: `${frags} is the number of Okazaki fragments (primers) — multiply by ${primerNt} nucleotides per primer!` },
      ],
      hint: `Find total Okazaki fragments ({{${lenKb * 1000} / ${fragBp}}}), then multiply by ${primerNt} nt per primer.`,
      solution: [
        `Total Okazaki fragments across both lagging strands = {{${lenKb * 1000} / ${fragBp} = ${frags}}}.`,
        `Total RNA primer nucleotides replaced = {{${frags} * ${primerNt} = ${totalNt}}} nucleotides.`,
      ],
    };
  },
};

export const drills: Drill[] = [
  transcriptionPcrDrill,
  mitoticDivisionDrill,
  waterPotentialDrill,
  epigeneticsReplicationHlDrill,
];
