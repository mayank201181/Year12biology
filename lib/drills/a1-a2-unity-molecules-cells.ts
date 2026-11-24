import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

// -----------------------------------------------------------------------------
// Helper tables for realistic IB Biology scenarios
// -----------------------------------------------------------------------------
const MICRO_SPECIMENS_UM = [
  { name: "an *Escherichia coli* bacterium", minUm: 1, maxUm: 5 },
  { name: "a mitochondrion", minUm: 1, maxUm: 4 },
  { name: "a chloroplast", minUm: 4, maxUm: 8 },
  { name: "a human red blood cell", minUm: 6, maxUm: 9 },
  { name: "a budding yeast cell", minUm: 5, maxUm: 10 },
  { name: "a white blood cell", minUm: 10, maxUm: 20 },
  { name: "an onion epidermal cell", minUm: 40, maxUm: 90 },
  { name: "a leaf palisade mesophyll cell", minUm: 30, maxUm: 80 },
  { name: "an *Amoeba* cell", minUm: 60, maxUm: 150 },
] as const;

const NANO_SPECIMENS_NM = [
  { name: "a prokaryotic 70S ribosome", minNm: 20, maxNm: 28 },
  { name: "a eukaryotic 80S ribosome", minNm: 25, maxNm: 35 },
  { name: "a bacteriophage λ head", minNm: 50, maxNm: 70 },
  { name: "an influenza virion", minNm: 80, maxNm: 120 },
  { name: "a SARS-CoV-2 virion", minNm: 90, maxNm: 140 },
  { name: "an HIV virion", minNm: 100, maxNm: 150 },
  { name: "a secretory vesicle", minNm: 120, maxNm: 350 },
] as const;

const DNA_BASES = ["A", "T", "C", "G"] as const;
const DNA_COMP: Record<string, string> = { A: "T", T: "A", C: "G", G: "C" };
const RNA_COMP: Record<string, string> = { A: "U", T: "A", C: "G", G: "C" };

function randDnaSeq(rng: Rng, len: number): string {
  let out = "";
  for (let i = 0; i < len; i++) out += rng.pick(DNA_BASES);
  return out;
}

function revCompDna(seq: string): string {
  return seq
    .split("")
    .reverse()
    .map((b) => DNA_COMP[b])
    .join("");
}

function alignedCompDna(seq: string): string {
  return seq
    .split("")
    .map((b) => DNA_COMP[b])
    .join("");
}

function alignedCompRna(seq: string): string {
  return seq
    .split("")
    .map((b) => RNA_COMP[b])
    .join("");
}

// =============================================================================
// DRILL 1 [SL, Level 1]: Microscopy Magnification, Scale Bars & Unit Conversions
// =============================================================================
const microscopyScaleDrill: Drill = {
  id: "a1-a2-unity-molecules-cells.microscopy-scale",
  topicId: "a1-a2-unity-molecules-cells",
  title: "Microscopy Magnification, Scale Bars & Unit Conversions",
  level: 1,
  ibLevel: "SL",
  guideRef: "cell-structure-microscopy",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const mode = rng.int(1, 3);
      if (mode === 1) {
        // mm -> um conversion
        const um = rng.int(8, 250);
        const mm = clean(um / 1000);
        const spec = rng.pick(MICRO_SPECIMENS_UM);
        return {
          prompt: `Under a microscope, ${spec.name} has an actual length of **${num(mm)} mm**. Convert this length into **micrometres (μm)**.`,
          answer: { type: "number", value: um, display: `${num(um)} μm` },
          hint: "1 mm = 1000 μm, so multiply millimetres by 1000.",
          traps: [
            {
              spec: { type: "number", value: clean(mm / 1000), tolerance: 1e-9 },
              feedback: "You divided by 1000 instead of multiplying — micrometres are smaller than millimetres.",
            },
          ],
          solution: [
            `Multiply by {{1000}} to convert mm to μm: {{${num(mm)} * 1000 = ${num(um)}}} μm.`,
          ],
        };
      }
      if (mode === 2) {
        // um -> nm or nm -> um
        if (rng.bool()) {
          const nm = rng.int(20, 480);
          const um = clean(nm / 1000);
          const spec = rng.pick(NANO_SPECIMENS_NM);
          return {
            prompt: `${spec.name.charAt(0).toUpperCase() + spec.name.slice(1)} measures **${num(nm)} nm** across. Express this diameter in **micrometres (μm)**.`,
            answer: { type: "number", value: um, tolerance: 0.0005, display: `${num(um)} μm` },
            hint: "1 μm = 1000 nm, so divide nanometres by 1000.",
            traps: [
              {
                spec: { type: "number", value: nm * 1000 },
                feedback: "Divide by 1000 when converting nanometres up to micrometres.",
              },
            ],
            solution: [
              `Divide nanometres by {{1000}}: {{${num(nm)} / 1000 = ${num(um)}}} μm.`,
            ],
          };
        }
        const tenths = rng.int(2, 45);
        const um = clean(tenths / 10);
        const nm = clean(um * 1000);
        const spec = rng.pick(MICRO_SPECIMENS_UM.slice(0, 5));
        return {
          prompt: `An electron micrograph shows ${spec.name} measuring **${num(um)} μm** wide. Convert this width into **nanometres (nm)**.`,
          answer: { type: "number", value: nm, display: `${num(nm)} nm` },
          hint: "1 μm = 1000 nm, so multiply micrometres by 1000.",
          traps: [
            {
              spec: { type: "number", value: clean(um / 1000), tolerance: 1e-8 },
              feedback: "Multiply by 1000 when converting micrometres down to nanometres.",
            },
          ],
          solution: [
            `Multiply micrometres by {{1000}}: {{${num(um)} * 1000 = ${num(nm)}}} nm.`,
          ],
        };
      }
      // Direct M = I / A with clean integer answer
      const actualUm = rng.int(2, 50);
      const mult = rng.pick([100, 200, 400, 500, 1000, 2000, 5000]);
      const imgMm = clean((actualUm * mult) / 1000);
      const spec = rng.pick(MICRO_SPECIMENS_UM);
      return {
        prompt: `In a micrograph, ${spec.name} has an actual diameter of **${num(actualUm)} μm** and its printed image measures **${num(imgMm)} mm**. Calculate the magnification (number only).`,
        answer: { type: "number", value: mult, display: `${num(mult)}` },
        hint: "Convert the printed image length from mm to μm (× 1000), then divide I by A.",
        traps: [
          {
            spec: { type: "number", value: clean(imgMm / actualUm), tolerance: 1e-6 },
            feedback: "Remember to convert mm to μm first before computing M = I / A!",
          },
        ],
        solution: [
          `Convert image size to μm: {{I = ${num(imgMm)} * 1000 = ${num(clean(imgMm * 1000))}}} μm.`,
          `Calculate magnification: {{M = I / A = ${num(clean(imgMm * 1000))} / ${num(actualUm)} = ${num(mult)}}}.`,
        ],
      };
    }

    if (tier === 2) {
      if (rng.bool()) {
        // Actual size from M and image mm
        const spec = rng.pick(MICRO_SPECIMENS_UM);
        const actualUm = rng.int(spec.minUm, spec.maxUm);
        const mag = rng.pick([200, 400, 500, 800, 1000, 2000, 4000, 5000]);
        const imgMm = clean((actualUm * mag) / 1000);
        const wrongMm = clean(imgMm / mag);
        return {
          prompt: `A micrograph printed at **×${num(mag)}** shows ${spec.name} measuring **${num(imgMm)} mm** across on the page. Calculate its **actual size** in **micrometres (μm)**.`,
          answer: { type: "number", value: actualUm, display: `${num(actualUm)} μm` },
          hint: "Convert image size from mm to μm (× 1000), then apply A = I / M.",
          traps:
            wrongMm !== actualUm
              ? [
                  {
                    spec: { type: "number", value: wrongMm, tolerance: Math.max(1e-7, wrongMm * 0.01) },
                    feedback: "That value is in millimetres — multiply by 1000 to convert to micrometres (μm).",
                  },
                ]
              : undefined,
          solution: [
            `Convert image length to μm: {{I = ${num(imgMm)} * 1000 = ${num(clean(imgMm * 1000))}}} μm.`,
            `Rearrange {{M = I / A}} to {{A = I / M = ${num(clean(imgMm * 1000))} / ${num(mag)} = ${num(actualUm)}}} μm.`,
          ],
        };
      }
      // Magnification from scale bar in nm or um
      if (rng.bool()) {
        const barNm = rng.pick([100, 200, 250, 400, 500]);
        const barMm = rng.int(10, 50);
        const mag = clean((barMm * 1_000_000) / barNm);
        const spec = rng.pick(NANO_SPECIMENS_NM);
        return {
          prompt: `A TEM micrograph of ${spec.name} displays a scale bar labelled **${num(barNm)} nm**. Measured with a ruler, the scale bar is **${num(barMm)} mm** long. Calculate the magnification (number only).`,
          answer: { type: "number", value: mag, display: `${num(mag)}` },
          hint: "Convert 1 mm = 1 000 000 nm (or convert both lengths to μm) before dividing I by A.",
          traps: [
            {
              spec: { type: "number", value: clean(mag / 1000) },
              feedback: "You are off by a factor of 1000 — remember 1 mm = 10⁶ nm (not 10³ nm)!",
            },
          ],
          solution: [
            `Convert scale bar image length to nm: {{I = ${num(barMm)} * 10^6 = ${num(barMm * 1_000_000)}}} nm.`,
            `Calculate magnification: {{M = I / A = ${num(barMm * 1_000_000)} / ${num(barNm)} = ${num(mag)}}}.`,
          ],
        };
      }
      const barUm = rng.pick([0.5, 1, 2, 5, 10, 20]);
      const barMm = rng.int(12, 48);
      const mag = clean((barMm * 1000) / barUm);
      const spec = rng.pick(MICRO_SPECIMENS_UM);
      return {
        prompt: `A micrograph of ${spec.name} has a scale bar labelled **${num(barUm)} μm** that measures **${num(barMm)} mm** long on the page. Calculate the magnification (number only).`,
        answer: { type: "number", value: mag, display: `${num(mag)}` },
        hint: "Convert the scale bar's printed length from mm to μm (× 1000), then divide by the scale-bar label.",
        traps: [
          {
            spec: { type: "number", value: clean(barMm / barUm), tolerance: 0.01 },
            feedback: "You forgot to convert mm to μm (× 1000) before dividing!",
          },
        ],
        solution: [
          `Convert scale bar image length to μm: {{I = ${num(barMm)} * 1000 = ${num(barMm * 1000)}}} μm.`,
          `Calculate magnification: {{M = I / A = ${num(barMm * 1000)} / ${num(barUm)} = ${num(mag)}}}.`,
        ],
      };
    }

    // Tier 3: Two-step scale bar -> actual specimen size OR size ratio across two magnifications
    if (rng.bool()) {
      const barMm = rng.pick([10, 15, 20, 25, 30, 40]);
      const barNm = rng.pick([100, 200, 400, 500, 600]);
      const multRatio = rng.pick([0.4, 0.5, 0.6, 0.8, 1.2, 1.5, 1.8, 2.0, 2.4, 2.5]);
      const specMm = clean(barMm * multRatio);
      const actualNm = clean(barNm * multRatio);
      const spec = rng.pick(NANO_SPECIMENS_NM);
      return {
        prompt: `On an electron micrograph of ${spec.name}, a scale bar labelled **${num(barNm)} nm** measures **${num(barMm)} mm** long. The specimen itself measures **${num(specMm)} mm** across. Calculate the **actual diameter** of the specimen in **nanometres (nm)**.`,
        answer: { type: "number", value: actualNm, tolerance: 0.5, display: `${num(actualNm)} nm` },
        hint: "Either calculate M from the scale bar first and then A = I / M, or use direct proportion: (specimen mm ÷ bar mm) × bar label.",
        traps: [
          {
            spec: { type: "number", value: clean(actualNm / 1000), tolerance: 0.001 },
            feedback: "That value is in micrometres — give your answer in nanometres (nm) as requested.",
          },
        ],
        solution: [
          `Proportion ratio: {{${num(specMm)} / ${num(barMm)} = ${num(multRatio)}}} scale bars.`,
          `Actual specimen diameter: {{${num(multRatio)} * ${num(barNm)} = ${num(actualNm)}}} nm.`,
        ],
      };
    }
    // Two micrographs size ratio
    const actualA = rng.int(1, 5); // bacterium in um
    const ratio = rng.int(2, 9);
    const actualB = actualA * ratio; // eukaryotic cell in um
    const magA = rng.pick([5000, 10000, 15000, 20000]);
    const magB = rng.pick([1000, 2000, 2500, 4000]);
    const imgA = clean((actualA * magA) / 1000);
    const imgB = clean((actualB * magB) / 1000);
    const rawRatio = roundTo(imgB / imgA, 2);
    return {
      prompt: `A bacterial cell measures **${num(imgA)} mm** on a micrograph at **×${num(magA)}**, while a eukaryotic cell measures **${num(imgB)} mm** on a second micrograph at **×${num(magB)}**. How many times longer is the **actual** eukaryotic cell than the **actual** bacterium?`,
      answer: { type: "number", value: ratio, display: `${num(ratio)}` },
      hint: "Compute each cell's actual length in μm separately using A = I / M, then divide the two actual sizes.",
      traps:
        Math.abs(rawRatio - ratio) > 0.05
          ? [
              {
                spec: { type: "number", value: rawRatio, tolerance: 0.02 },
                feedback: "You divided the raw printed image lengths without correcting for the two different magnifications!",
              },
            ]
          : undefined,
      solution: [
        `Actual bacterium length: {{A_1 = (${num(imgA)} * 1000) / ${num(magA)} = ${num(actualA)}}} μm.`,
        `Actual eukaryotic cell length: {{A_2 = (${num(imgB)} * 1000) / ${num(magB)} = ${num(actualB)}}} μm.`,
        `Ratio: {{${num(actualB)} / ${num(actualA)} = ${num(ratio)}}} times longer.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 2 [SL, Level 2]: Chargaff Ratios, Antiparallel Pairing & DNA H-Bonds
// =============================================================================
const chargaffPairingDrill: Drill = {
  id: "a1-a2-unity-molecules-cells.chargaff-base-pairing",
  topicId: "a1-a2-unity-molecules-cells",
  title: "Chargaff's Ratios, Base Pairing & DNA Hydrogen Bonds",
  level: 2,
  ibLevel: "SL",
  guideRef: "water-nucleic-acids",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const organisms = [
      "a human liver cell",
      "a *Thermus aquaticus* bacterium",
      "a yeast chromosome",
      "a wheat leaf nucleus",
      "a marine archaeon",
      "a bacteriophage λ genome",
    ];

    if (tier === 1) {
      if (rng.bool(0.65)) {
        // Chargaff percentage
        const pctGiven = rng.int(12, 38);
        const givenBase = rng.pick(["adenine (A)", "thymine (T)", "cytosine (C)", "guanine (G)"]);
        const isAT = givenBase.includes("(A)") || givenBase.includes("(T)");
        const askOppositePair = rng.bool(0.75);
        let askBase: string;
        let ans: number;
        if (askOppositePair) {
          askBase = isAT ? rng.pick(["cytosine (C)", "guanine (G)"]) : rng.pick(["adenine (A)", "thymine (T)"]);
          ans = 50 - pctGiven;
        } else {
          askBase = givenBase.includes("(A)")
            ? "thymine (T)"
            : givenBase.includes("(T)")
              ? "adenine (A)"
              : givenBase.includes("(C)")
                ? "guanine (G)"
                : "cytosine (C)";
          ans = pctGiven;
        }
        const org = rng.pick(organisms);
        const trapSum = 100 - 2 * pctGiven;
        return {
          prompt: `Double-stranded DNA extracted from ${org} contains **${pctGiven}%** ${givenBase}. What percentage of its bases are **${askBase}**?`,
          answer: { type: "number", value: ans, display: `${ans}%` },
          hint: "In double-stranded DNA, %A = %T, %C = %G, and (%A + %G) = 50%.",
          traps:
            askOppositePair && trapSum !== ans
              ? [
                  {
                    spec: { type: "number", value: trapSum },
                    feedback: `${trapSum}% is the combined percentage of both complementary bases — divide by 2!`,
                  },
                ]
              : undefined,
          solution: askOppositePair
            ? [
                `The complementary partner also makes up {{${pctGiven}%}}, so that pair totals {{${2 * pctGiven}%}}.`,
                `Remaining pair = {{100% - ${2 * pctGiven}% = ${trapSum}%}}, so ${askBase} = {{${trapSum}% / 2 = ${ans}%}}.`,
              ]
            : [
                `By Chargaff's complementary base pairing, ${askBase} equals ${givenBase}, giving **${ans}%**.`,
              ],
        };
      }
      // 5-base template 3'->5' to 5'->3' mRNA or DNA
      const seq = randDnaSeq(rng, 5);
      const isRna = rng.bool();
      const ans = isRna ? alignedCompRna(seq) : alignedCompDna(seq);
      const wrongDna = alignedCompDna(seq);
      return {
        prompt: `A DNA template strand reads \`3'-${seq}-5'\`. Write the complementary **${isRna ? "mRNA" : "DNA"}** strand in the \`5' → 3'\` direction (5 capital letters only).`,
        answer: { type: "text", accept: [ans, `5'-${ans}-3'`, `5-${ans}-3`], display: ans },
        hint: isRna
          ? "Pair directly left-to-right (3'→5' template builds 5'→3' mRNA): G↔C, T→A, and A→U (uracil!)."
          : "Pair directly left-to-right (3'→5' template pairs with 5'→3' partner): A↔T and C↔G.",
        traps:
          isRna && wrongDna !== ans
            ? [
                {
                  spec: { type: "text", accept: [wrongDna] },
                  feedback: "RNA uses uracil (U) instead of thymine (T) opposite adenine!",
                },
              ]
            : undefined,
        solution: [
          `Because the template runs \`3' → 5'\`, the antiparallel complementary ${isRna ? "mRNA" : "DNA"} strand runs \`5' → 3'\` left-to-right.`,
          `Base-by-base pairing gives \`5'-${ans}-3'\` (**${ans}**).`,
        ],
      };
    }

    if (tier === 2) {
      if (rng.bool()) {
        // Count specific nucleotides from base pairs & percentage
        const bp = rng.pick([200, 300, 400, 500, 600, 800, 1000, 1200, 1500]);
        const totalNuc = bp * 2;
        const pctGiven = rng.int(14, 36);
        const givenBase = rng.pick(["adenine (A)", "thymine (T)", "cytosine (C)", "guanine (G)"]);
        const isAT = givenBase.includes("(A)") || givenBase.includes("(T)");
        const askBase = isAT ? rng.pick(["cytosine (C)", "guanine (G)"]) : rng.pick(["adenine (A)", "thymine (T)"]);
        const pctAsk = 50 - pctGiven;
        const ans = clean((pctAsk / 100) * totalNuc);
        const halfTrap = clean((pctAsk / 100) * bp);
        return {
          prompt: `A double-stranded DNA fragment contains **${bp} base pairs** (${totalNuc} nucleotides total), of which **${pctGiven}%** of all bases are ${givenBase}. How many **${askBase}** nucleotides are in this fragment?`,
          answer: { type: "number", value: ans, display: `${num(ans)}` },
          hint: "Find the percentage of the requested base using Chargaff's rules (50% − given%), then multiply by total nucleotides (2 × bp).",
          traps: [
            {
              spec: { type: "number", value: halfTrap },
              feedback: `Careful: ${bp} base pairs contains ${totalNuc} total nucleotides, not ${bp}!`,
            },
          ],
          solution: [
            `Percentage of ${askBase} = {{50% - ${pctGiven}% = ${pctAsk}%}}.`,
            `Total nucleotides = {{2 * ${bp} = ${totalNuc}}}.`,
            `Count of ${askBase} = {{${num(clean(pctAsk / 100))} * ${totalNuc} = ${num(ans)}}}.`,
          ],
        };
      }
      // HL/SL Antiparallel 5'->3' DNA complement requiring reversal (ensure non-palindromic!)
      let seq = randDnaSeq(rng, 6);
      while (revCompDna(seq) === alignedCompDna(seq)) seq = randDnaSeq(rng, 6);
      const ans = revCompDna(seq);
      const unreversed = alignedCompDna(seq);
      return {
        prompt: `One strand of a DNA double helix reads \`5'-${seq}-3'\`. Write the complementary DNA strand in the **\`5' → 3'\`** direction (6 capital letters only).`,
        answer: { type: "text", accept: [ans, `5'-${ans}-3'`, `5-${ans}-3`], display: ans },
        hint: "Write the direct complement (3' → 5') first, then REVERSE the order of letters so it reads 5' → 3'!",
        traps: [
          {
            spec: { type: "text", accept: [unreversed, `3'-${unreversed}-5'`] },
            feedback: `${unreversed} runs 3' → 5' — reverse the letters to give the 5' → 3' direction!`,
          },
        ],
        solution: [
          `Direct antiparallel complement aligned under \`5'-${seq}-3'\` is \`3'-${unreversed}-5'\`.`,
          `Reversing to read \`5' → 3'\` gives **\`5'-${ans}-3'\`** (${ans}).`,
        ],
      };
    }

    // Tier 3: Total H-bonds OR reverse Chargaff from H-bonds!
    if (rng.bool()) {
      const bp = rng.pick([100, 150, 200, 250, 300, 400, 500, 600]);
      const pctG = rng.int(12, 38);
      // Number of G bases = pctG% of (2 * bp) = (2 * pctG / 100) * bp = number of G-C pairs!
      // Ensure integer pairs: pctG * 2 * bp divisible by 100 -> since bp is multiple of 50, 2*bp is multiple of 100! Always integer!
      const gcPairs = clean((pctG * 2 * bp) / 100);
      const atPairs = bp - gcPairs;
      const hBonds = 3 * gcPairs + 2 * atPairs;
      const wrongGc = clean((pctG * bp) / 100);
      const wrongH = clean(3 * wrongGc + 2 * (bp - wrongGc));
      return {
        prompt: `A double-stranded DNA segment has **${bp} base pairs** (${2 * bp} nucleotides total) in which **${pctG}%** of all bases are **guanine (G)**. Calculate the **total number of hydrogen bonds** holding the two strands together.`,
        answer: { type: "number", value: hBonds, display: `${hBonds}` },
        hint: "Remember: %G of all bases × (2 × bp) gives the number of G bases — and each G forms one G–C base pair (3 H-bonds)!",
        traps:
          wrongH !== hBonds
            ? [
                {
                  spec: { type: "number", value: wrongH, tolerance: 0.5 },
                  feedback: `You took ${pctG}% of ${bp} base pairs instead of ${pctG}% of ${2 * bp} nucleotides — G–C pairs make up ${2 * pctG}% of all base pairs!`,
                },
              ]
            : undefined,
        solution: [
          `Total nucleotides = {{${2 * bp}}}. Number of G bases = {{${pctG}% * ${2 * bp} = ${gcPairs}}}, forming **${gcPairs} G–C base pairs**.`,
          `Remaining A–T base pairs = {{${bp} - ${gcPairs} = ${atPairs}}}.`,
          `Total H-bonds = {{(${gcPairs} * 3) + (${atPairs} * 2) = ${3 * gcPairs} + ${2 * atPairs} = ${hBonds}}}.`,
        ],
      };
    }
    // Reverse: given bp and total H-bonds -> find %G
    const bp = rng.pick([200, 250, 400, 500, 1000, 2000]);
    const pctG = rng.int(12, 38);
    const gcPairs = clean((pctG * 2 * bp) / 100);
    const atPairs = bp - gcPairs;
    const hBonds = 3 * gcPairs + 2 * atPairs;
    return {
      prompt: `A double-stranded DNA plasmid has **${bp} base pairs** (${2 * bp} nucleotides) and is stabilized by exactly **${hBonds} hydrogen bonds** between strands. Calculate the **percentage of guanine (G)** bases in this plasmid.`,
      answer: { type: "number", value: pctG, display: `${pctG}%` },
      hint: "Let a + g = bp and 2a + 3g = H. Subtracting 2×bp from H gives g (the number of G–C pairs = number of G bases)!",
      traps: [
        {
          spec: { type: "number", value: 2 * pctG },
          feedback: `${2 * pctG}% is the combined %G + %C (percentage of G–C base pairs) — divide by 2 for %G alone!`,
        },
      ],
      solution: [
        `Since {{a + g = ${bp}}} and {{2a + 3g = ${hBonds}}}, subtracting {{2(${bp}) = ${2 * bp}}} gives {{g = ${hBonds} - ${2 * bp} = ${gcPairs}}} G–C base pairs.`,
        `Thus there are {{${gcPairs}}} G bases out of {{${2 * bp}}} total nucleotides: {{%G = (${gcPairs} / ${2 * bp}) * 100 = ${pctG}%}}.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 3 [HL, Level 2]: Origins of Cells, RNA Sequence Space & Deep-Time Clocks
// =============================================================================
const originsRnaLucaDrill: Drill = {
  id: "a1-a2-unity-molecules-cells.origins-rna-luca",
  topicId: "a1-a2-unity-molecules-cells",
  title: "RNA World Sequence Space, Protocells & Molecular Clocks [HL]",
  level: 2,
  ibLevel: "HL",
  guideRef: "origins-of-cells-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const rnaContexts = [
      "a prebiotic ribozyme binding core",
      "a catalytic RNA hairpin loop",
      "an early RNA World template motif",
      "a mineral-clay adsorbed RNA oligomer",
      "a self-cleaving ribozyme active site",
      "a protocell RNA aptamer sequence",
    ];

    if (tier === 1) {
      if (rng.bool(0.55)) {
        // 4^n RNA sequence diversity (n = 2..6)
        const n = rng.int(2, 6);
        const ans = Math.pow(4, n);
        const ctx = rng.pick(rnaContexts);
        const linearTrap = 4 * n;
        return {
          prompt: `In an RNA World simulation, ${ctx} is **${n} nucleotides** long. How many distinct single-stranded **RNA sequences** of length ${n} are possible?`,
          answer: { type: "number", value: ans, display: `${ans}` },
          hint: "Each RNA position has 4 choices (A, U, C, G), giving 4^n possible sequences.",
          traps:
            linearTrap !== ans
              ? [
                  {
                    spec: { type: "number", value: linearTrap },
                    feedback: `You computed 4 × ${n} instead of 4^${n} — multiply 4 by itself ${n} times!`,
                  },
                ]
              : undefined,
          solution: [
            `Each of the ${n} sites can hold A, U, C, or G (4 choices), giving {{4^${n} = ${ans}}} distinct RNA sequences.`,
          ],
        };
      }
      // Protocell vesicle doubling (binary fission / spontaneous splitting)
      const n0 = rng.int(2, 15);
      const gens = rng.int(2, 6);
      const ans = n0 * Math.pow(2, gens);
      const env = rng.pick([
        "an alkaline hydrothermal vent pore",
        "a warm geothermal tidal pool",
        "a lipid-rich montmorillonite clay chamber",
        "a laboratory fatty-acid protocell flask",
      ]);
      return {
        prompt: `A population of **${n0}** self-assembling fatty-acid protocell vesicles in ${env} doubles in number every division cycle. How many protocell vesicles exist after **${gens}** division cycles?`,
        answer: { type: "number", value: ans, display: `${ans}` },
        hint: "Use exponential doubling: N = N₀ × 2^k.",
        traps:
          n0 * 2 * gens !== ans
            ? [
                {
                  spec: { type: "number", value: n0 * 2 * gens },
                  feedback: "Doubling is exponential (N₀ × 2^k), not linear multiplication!",
                },
              ]
            : undefined,
        solution: [
          `Apply {{N = N_0 * 2^k = ${n0} * 2^${gens} = ${n0} * ${Math.pow(2, gens)} = ${ans}}} vesicles.`,
        ],
      };
    }

    if (tier === 2) {
      if (rng.bool(0.65)) {
        // Molecular clock dating of early life / LUCA
        const ageTenths = rng.int(18, 42); // 1.8 to 4.2 Ga
        const ageGa = clean(ageTenths / 10);
        const rateClean = rng.pick([10, 20, 30, 40, 50]);
        const diffs = clean((rateClean * ageTenths) / 10);
        const cladePair = rng.pick([
          "two deeply branching bacterial and archaeal lineages",
          "a thermophilic archaeon and an ancient cyanobacterium",
          "two hydrothermal-vent prokaryotic clades",
          "a methanogenic archaeon and an α-proteobacterium",
        ]);
        const gene = rng.pick(["16S rRNA", "ribosomal protein", "ATP synthase", "RNA polymerase"]);
        return {
          prompt: `Comparing a conserved **${gene}** gene between ${cladePair} reveals **${diffs}** neutral base differences. If neutral substitutions accumulate between the two lineages at a combined molecular-clock rate of **${rateClean}** substitutions per billion years (Ga), estimate the age of their common ancestor in **Ga** (to 1 decimal place).`,
          answer: { type: "number", value: ageGa, tolerance: 0.05, display: `${num(ageGa)}` },
          hint: "Divide the observed number of neutral substitutions by the combined substitution rate per Ga.",
          traps:
            clean(rateClean / diffs) !== ageGa
              ? [
                  {
                    spec: { type: "number", value: roundTo(rateClean / diffs, 2), tolerance: 0.02 },
                    feedback: "You inverted the ratio — divide total differences by rate (differences ÷ substitutions per Ga).",
                  },
                ]
              : undefined,
          solution: [
            `Molecular-clock divergence age: {{t = ${diffs} / ${rateClean} = ${num(ageGa)}}} Ga (${num(ageGa)} billion years ago).`,
          ],
        };
      }
      // Larger RNA sequence space (n = 5..8)
      const n = rng.int(5, 8);
      const ans = Math.pow(4, n);
      const ctx = rng.pick(rnaContexts);
      return {
        prompt: `How many distinct single-stranded **RNA sequences** can be formed for ${ctx} spanning **${n} nucleotides**?`,
        answer: { type: "number", value: ans, display: `${ans}` },
        hint: "Raise 4 (the four RNA bases A, U, C, G) to the power of the nucleotide length n.",
        solution: [
          `Total distinct RNA sequences = {{4^${n} = ${ans}}}.`,
        ],
      };
    }

    // Tier 3: Two-step molecular clock from gene length + % difference, OR Miller-Urey amino-acid yield / nucleosome-free vs LUCA genome comparison
    if (rng.bool(0.6)) {
      const geneLen = rng.pick([500, 1000, 1500, 2000, 2500]);
      const pctDiff = rng.pick([4, 6, 8, 10, 12, 16, 20]);
      const diffs = clean((geneLen * pctDiff) / 100);
      const rate = rng.pick([20, 25, 40, 50, 80, 100]);
      const ageGa = roundTo(diffs / rate, 2);
      const gene = rng.pick(["16S rRNA", "elongation factor Tu", "tRNA synthetase", "cytochrome"]);
      return {
        prompt: `A conserved **${gene}** gene of length **${geneLen} nucleotides** differs at **${pctDiff}%** of its sites between two ancient prokaryotic domains. Assuming a combined neutral divergence rate of **${rate}** substitutions per billion years (Ga), estimate how long ago their last common ancestor lived in **Ga** (give your answer to 2 decimal places).`,
        answer: { type: "number", value: ageGa, tolerance: 0.02, display: `${num(ageGa)}` },
        hint: "Step 1: calculate the actual number of differing nucleotide sites (% × gene length). Step 2: divide by the rate per Ga.",
        traps:
          Math.abs(roundTo(pctDiff / rate, 2) - ageGa) > 0.03
            ? [
                {
                  spec: { type: "number", value: roundTo(pctDiff / rate, 2), tolerance: 0.02 },
                  feedback: `First convert ${pctDiff}% of ${geneLen} nucleotides into an absolute count of ${diffs} differences before dividing by ${rate}!`,
                },
              ]
            : undefined,
        solution: [
          `Number of differing nucleotide sites = {{${pctDiff}% * ${geneLen} = ${diffs}}}.`,
          `Estimated divergence age = {{${diffs} / ${rate} = ${num(ageGa)}}} Ga.`,
        ],
      };
    }
    // Two-step RNA sequence space ratio: how many times more sequences exist when lengthening from n1 to n2?
    const n1 = rng.int(4, 12);
    const delta = rng.int(2, 6);
    const n2 = n1 + delta;
    const ans = Math.pow(4, delta);
    const ctx = rng.pick(rnaContexts);
    return {
      prompt: `Extending ${ctx} from **${n1} nucleotides** to **${n2} nucleotides** expands the number of possible RNA sequences. How many **times** more distinct RNA sequences exist at length ${n2} than at length ${n1}?`,
      answer: { type: "number", value: ans, display: `${ans}` },
      hint: "Use index laws: 4^(n₂) ÷ 4^(n₁) = 4^(n₂ − n₁).",
      traps: [
        {
          spec: { type: "number", value: clean(n2 / n1), tolerance: 0.02 },
          feedback: "Sequence space grows exponentially (4^n), so compare 4^(n₂) / 4^(n₁) = 4^(n₂ − n₁), not n₂ / n₁!",
        },
      ],
      solution: [
        `Ratio of sequence spaces = {{4^${n2} / 4^${n1} = 4^(${n2} - ${n1}) = 4^${delta} = ${ans}}} times more sequences.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 4 [HL, Level 3]: Viral Lytic Kinetics, Retroviruses & RNA Mutation Rates
// =============================================================================
const virusesReplicationDrill: Drill = {
  id: "a1-a2-unity-molecules-cells.viruses-replication-cycles",
  topicId: "a1-a2-unity-molecules-cells",
  title: "Viral Lytic Kinetics, Burst Amplification & RNA Mutation Rates [HL]",
  level: 3,
  ibLevel: "HL",
  guideRef: "viruses-diversity-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      if (rng.bool(0.55)) {
        // Single lytic burst yield
        const n0 = rng.int(2, 25);
        const burst = rng.pick([30, 40, 50, 60, 80, 100, 120, 150, 200]);
        const ans = n0 * burst;
        const host = rng.pick(["*Escherichia coli* cells", "bacterial host cells", "cultured epithelial cells", "helper T-lymphocytes"]);
        const virus = rng.pick(["bacteriophage λ", "a lytic bacteriophage", "SARS-CoV-2", "influenza A"]);
        return {
          prompt: `During one lytic replication cycle of **${virus}**, **${n0}** infected ${host} each burst to release **${burst}** new virions. How many progeny virions are released in total?`,
          answer: { type: "number", value: ans, display: `${ans}` },
          hint: "Multiply the number of infected host cells by the burst size per cell.",
          solution: [
            `Total progeny virions = {{${n0} * ${burst} = ${ans}}}.`,
          ],
        };
      }
      // Retrovirus cDNA nucleotide count from +ssRNA genome length
      const kbTenths = rng.int(70, 140); // 7.0 to 14.0 kb
      const rnaLen = kbTenths * 100; // e.g., 9700 nt
      const ans = rnaLen * 2; // double-stranded cDNA total nucleotides!
      const retro = rng.pick(["an HIV-1 isolate", "a lentivirus strain", "a retrovirus variant", "a simian retrovirus"]);
      return {
        prompt: `Reverse transcriptase copies one single-stranded RNA genome of ${retro} (**${rnaLen} nucleotides** long) into a **double-stranded complementary DNA (ds-cDNA)** provirus before integration. How many **total DNA nucleotides** (across both strands) are in the integrated ds-cDNA?`,
        answer: { type: "number", value: ans, display: `${ans}` },
        hint: "Double-stranded cDNA has TWO complementary strands of equal length.",
        traps: [
          {
            spec: { type: "number", value: rnaLen },
            feedback: `${rnaLen} is the number of base PAIRS (one strand only) — multiply by 2 for total DNA nucleotides across both strands!`,
          },
        ],
        solution: [
          `The single-stranded RNA (${rnaLen} nt) is copied into ${rnaLen} base pairs of double-stranded cDNA.`,
          `Total DNA nucleotides = {{2 * ${rnaLen} = ${ans}}}.`,
        ],
      };
    }

    if (tier === 2) {
      if (rng.bool(0.5)) {
        // Multi-cycle exponential lytic amplification N = N0 * B^k
        const n0 = rng.int(1, 8);
        const k = rng.pick([2, 3]);
        const burst = k === 2 ? rng.pick([20, 30, 40, 50, 60, 80, 100]) : rng.pick([10, 20, 30, 40, 50]);
        const ans = n0 * Math.pow(burst, k);
        const linearTrap = n0 * burst * k;
        return {
          prompt: `Starting from **${n0}** bacteriophage λ virion${n0 === 1 ? "" : "s"} in an abundant *E. coli* broth, the phage completes **${k}** consecutive lytic cycles with a burst size of **${burst}** virions per infected cell (assume every released phage infects a fresh cell). Calculate the total number of virions after cycle ${k}.`,
          answer: { type: "number", value: ans, display: `${ans}` },
          hint: "Use exponential viral amplification: N = N₀ × B^k.",
          traps:
            linearTrap !== ans
              ? [
                  {
                    spec: { type: "number", value: linearTrap },
                    feedback: "Viral lytic cycles amplify exponentially (N₀ × B^k), not linearly!",
                  },
                ]
              : undefined,
          solution: [
            `Apply {{N = N_0 * B^k = ${n0} * ${burst}^${k} = ${n0} * ${Math.pow(burst, k)} = ${ans}}} virions.`,
          ],
        };
      }
      // Expected point mutations per RNA genome copy E = mu * L
      const virusChoice = rng.pick([
        { name: "an HIV-1 strain", len: rng.pick([9000, 9500, 9600, 9800, 10000]), rateMant: rng.pick([2, 3, 4, 5]), exp: -5 },
        { name: "an influenza A strain", len: rng.pick([12000, 13000, 13500, 14000, 15000]), rateMant: rng.pick([1, 2, 3]), exp: -4 },
        { name: "a coronavirus variant", len: rng.pick([28000, 29000, 30000, 31000]), rateMant: rng.pick([2, 3, 4, 5]), exp: -5 },
      ]);
      const expected = roundTo(virusChoice.len * virusChoice.rateMant * Math.pow(10, virusChoice.exp), 2);
      return {
        prompt: `${virusChoice.name.charAt(0).toUpperCase() + virusChoice.name.slice(1)} carries an RNA genome of **${virusChoice.len} nucleotides** and replicates with an error rate of **{{${virusChoice.rateMant}.0 * 10^(${virusChoice.exp})}}** mutations per nucleotide copied. Calculate the expected average number of point mutations per newly copied genome (to 2 decimal places).`,
        answer: { type: "number", value: expected, tolerance: 0.015, display: `${num(expected)}` },
        hint: "Multiply genome length L by error rate μ per nucleotide: E = μ × L.",
        solution: [
          `Expected mutations per genome = {{${virusChoice.len} * ${virusChoice.rateMant}.0 * 10^(${virusChoice.exp}) = ${num(expected)}}}.`,
        ],
      };
    }

    // Tier 3: Daily drug-resistant virions OR total point mutations generated in one full viral burst
    if (rng.bool(0.55)) {
      const dailyMant = rng.int(2, 9); // e.g. 4 x 10^8 or 4 x 10^9
      const dailyExp = rng.pick([8, 9]);
      const pMant = rng.int(1, 5);
      const pExp = rng.pick([-5, -6]);
      const ans = clean(dailyMant * pMant * Math.pow(10, dailyExp + pExp));
      const drug = rng.pick(["a single reverse-transcriptase inhibitor", "a single protease inhibitor", "a single integrase inhibitor"]);
      return {
        prompt: `An untreated HIV patient produces **{{${dailyMant}.0 * 10^${dailyExp}}}** new virions per day. If the probability of a virion acquiring a point mutation conferring resistance to ${drug} is **{{${pMant}.0 * 10^(${pExp})}}**, calculate the expected number of resistant virions generated **each day** under single-drug therapy.`,
        answer: { type: "number", value: ans, display: `${num(ans)}` },
        hint: "Multiply the daily virion production by the per-virion resistance probability using index laws.",
        solution: [
          `Expected resistant virions/day = {{(${dailyMant}.0 * 10^${dailyExp}) * (${pMant}.0 * 10^(${pExp})) = ${dailyMant * pMant} * 10^${dailyExp + pExp} = ${num(ans)}}}.`,
        ],
      };
    }
    // Total new point mutations across an entire viral burst
    const len = rng.pick([10000, 12000, 14000, 15000, 20000, 30000]);
    const rateMant = rng.pick([1, 2, 3, 4]);
    const burst = rng.pick([50, 80, 100, 150, 200, 250]);
    // E_per_genome = len * rateMant * 1e-4; total = burst * E_per_genome
    const perGenome = clean(len * rateMant * 1e-4);
    const totalMut = clean(burst * perGenome);
    const virus = rng.pick(["influenza A", "an error-prone RNA virus", "a respiratory ssRNA virus"]);
    return {
      prompt: `A single host cell infected by **${virus}** (genome length **${len} nt**, RNA polymerase error rate **{{${rateMant}.0 * 10^(-4)}}** mutations per nt) releases a burst of **${burst}** progeny virions. Calculate the expected **total number of new point mutations** summed across all ${burst} progeny genomes.`,
      answer: { type: "number", value: totalMut, tolerance: 0.5, display: `${num(totalMut)}` },
      hint: "First calculate expected mutations per single genome (μ × L), then multiply by the burst size B.",
      traps:
        perGenome !== totalMut
          ? [
              {
                spec: { type: "number", value: perGenome, tolerance: 0.05 },
                feedback: `${num(perGenome)} is the expected mutations per ONE genome — multiply by all ${burst} progeny virions in the burst!`,
              },
            ]
          : undefined,
      solution: [
        `Expected mutations per genome = {{${len} * ${rateMant}.0 * 10^(-4) = ${num(perGenome)}}}.`,
        `Across ${burst} progeny virions: {{${burst} * ${num(perGenome)} = ${num(totalMut)}}} total point mutations.`,
      ],
    };
  },
};

export const drills: Drill[] = [
  microscopyScaleDrill,
  chargaffPairingDrill,
  originsRnaLucaDrill,
  virusesReplicationDrill,
];
