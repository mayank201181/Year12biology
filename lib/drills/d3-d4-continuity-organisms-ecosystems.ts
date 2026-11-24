import type { Drill, Rng } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

const TOPIC = "d3-d4-continuity-organisms-ecosystems";

// =============================================================================
// 1. SL — MENDELIAN, ABO & SEX-LINKED PUNNETT PROBABILITIES (Level 1, SL Sprint)
// =============================================================================
const RECESSIVE_TRAITS = [
  { name: "cystic fibrosis", dom: "unaffected", rec: "affected with cystic fibrosis", sym: "C" },
  { name: "oculocutaneous albinism", dom: "pigmented", rec: "albino", sym: "A" },
  { name: "phenylketonuria (PKU)", dom: "unaffected", rec: "affected with PKU", sym: "P" },
  { name: "pea stem height", dom: "tall", rec: "dwarf", sym: "T" },
  { name: "pea seed shape", dom: "round-seeded", rec: "wrinkled-seeded", sym: "R" },
  { name: "pea flower colour", dom: "purple-flowered", rec: "white-flowered", sym: "B" },
  { name: "fruit fly wing length", dom: "long-winged", rec: "vestigial-winged", sym: "L" },
  { name: "mouse coat colour", dom: "agouti-coated", rec: "white-coated", sym: "G" },
] as const;

const ABO_CROSSES = [
  { p1: "I^A i", l1: "A", p2: "I^B i", l2: "B", probs: { A: 25, B: 25, AB: 25, O: 25 } },
  { p1: "I^A I^B", l1: "AB", p2: "ii", l2: "O", probs: { A: 50, B: 50, AB: 0, O: 0 } },
  { p1: "I^A i", l1: "A", p2: "I^A i", l2: "A", probs: { A: 75, B: 0, AB: 0, O: 25 } },
  { p1: "I^B i", l1: "B", p2: "I^B i", l2: "B", probs: { A: 0, B: 75, AB: 0, O: 25 } },
  { p1: "I^A I^B", l1: "AB", p2: "I^A i", l2: "A", probs: { A: 50, B: 25, AB: 25, O: 0 } },
  { p1: "I^A I^B", l1: "AB", p2: "I^B i", l2: "B", probs: { A: 25, B: 50, AB: 25, O: 0 } },
  { p1: "I^A I^B", l1: "AB", p2: "I^A I^B", l2: "AB", probs: { A: 25, B: 25, AB: 50, O: 0 } },
  { p1: "I^A i", l1: "A", p2: "ii", l2: "O", probs: { A: 50, B: 0, AB: 0, O: 50 } },
  { p1: "I^B i", l1: "B", p2: "ii", l2: "O", probs: { A: 0, B: 50, AB: 0, O: 50 } },
] as const;

const XLINK_TRAITS = [
  { name: "haemophilia", sym: "H" },
  { name: "red–green colour blindness", sym: "B" },
  { name: "Duchenne muscular dystrophy", sym: "D" },
] as const;

const punnettGenetics: Drill = {
  id: `${TOPIC}.punnett-genetics`,
  topicId: TOPIC,
  title: "Mendelian, ABO & Sex-Linked Punnett Probabilities",
  level: 1,
  ibLevel: "SL",
  guideRef: "inheritance-linked-chi",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    if (tier === 1) {
      if (rng.bool(0.55)) {
        const t = rng.pick(RECESSIVE_TRAITS);
        const A = t.sym;
        const a = t.sym.toLowerCase();
        const crossKind = rng.pick(["het_het", "het_rec", "dom_rec"] as const);
        const ask = rng.pick(["rec", "dom", "het"] as const);
        const crossStr = crossKind === "het_het" ? `${A}${a} × ${A}${a}` : crossKind === "het_rec" ? `${A}${a} × ${a}${a}` : `${A}${A} × ${a}${a}`;
        const pct =
          crossKind === "het_het"
            ? ask === "rec" ? 25 : ask === "dom" ? 75 : 50
            : crossKind === "het_rec"
              ? ask === "rec" ? 50 : 50
              : ask === "rec" ? 0 : 100;
        const targetText =
          ask === "rec"
            ? `shows the recessive phenotype (${t.rec}, \`${a}${a}\`)`
            : ask === "dom"
              ? `shows the dominant phenotype (${t.dom})`
              : `is heterozygous (\`${A}${a}\`)`;
        return {
          prompt: `For autosomal ${t.name} (\`${A}\` dominant, \`${a}\` recessive), two parents with genotypes **${crossStr}** are crossed. What percentage (\`%\`) of offspring are expected to be an individual that ${targetText}?`,
          answer: { type: "number", value: pct, display: `${pct}%` },
          hint: `Draw the 2 × 2 Punnett grid for ${crossStr} and count how many of the 4 boxes match the target.`,
          solution: [
            `Cross: ${crossStr}.`,
            crossKind === "het_het"
              ? `Genotypes: 1 \`${A}${A}\` (25%) : 2 \`${A}${a}\` (50%) : 1 \`${a}${a}\` (25%).`
              : crossKind === "het_rec"
                ? `Genotypes: 2 \`${A}${a}\` (50%) : 2 \`${a}${a}\` (50%).`
                : `All 4 offspring are \`${A}${a}\` (100% heterozygous dominant phenotype, 0% recessive).`,
            `Therefore the expected percentage is **${pct}%**.`,
          ],
        };
      }
      const abo = rng.pick(ABO_CROSSES);
      const group = rng.pick(["A", "B", "AB", "O"] as const);
      const pct = abo.probs[group];
      return {
        prompt: `In ABO blood group inheritance, a parent of genotype \`${abo.p1}\` (group ${abo.l1}) and a parent of genotype \`${abo.p2}\` (group ${abo.l2}) have a child. What is the percentage probability (\`%\`) the child has **blood group ${group}**?`,
        answer: { type: "number", value: pct, display: `${pct}%` },
        hint: `Remember \`I^A\` and \`I^B\` are codominant and both are dominant over \`i\`. Draw the 2 × 2 Punnett grid.`,
        solution: [
          `Cross \`${abo.p1} × ${abo.p2}\` using a 2 × 2 Punnett grid.`,
          `Blood group probabilities: A = ${abo.probs.A}%, B = ${abo.probs.B}%, AB = ${abo.probs.AB}%, O = ${abo.probs.O}%.`,
          `Probability of blood group ${group} = **${pct}%**.`,
        ],
      };
    }

    if (tier === 2) {
      if (rng.bool(0.55)) {
        const t = rng.pick(RECESSIVE_TRAITS);
        const A = t.sym;
        const a = t.sym.toLowerCase();
        const N = rng.pick([40, 60, 80, 100, 120, 160, 200, 240, 280, 320, 360, 400, 480]);
        const isHetHet = rng.bool(0.6);
        const ask = rng.pick(["rec", "dom", "het"] as const);
        const fracNum = isHetHet ? (ask === "rec" ? 1 : ask === "dom" ? 3 : 2) : 2;
        const ans = (N * fracNum) / 4;
        const targetText =
          ask === "rec"
            ? `${t.rec} (\`${a}${a}\`)`
            : ask === "dom"
              ? `${t.dom} (dominant phenotype)`
              : `heterozygous (\`${A}${a}\`)`;
        const crossStr = isHetHet ? `${A}${a} × ${A}${a}` : `${A}${a} × ${a}${a}`;
        return {
          prompt: `In a monohybrid cross **${crossStr}** for ${t.name}, **${N}** offspring are produced. Calculate the expected number of offspring that are ${targetText}.`,
          answer: { type: "number", value: ans, display: `${ans}` },
          hint: `Find the expected fraction from ${crossStr} (${fracNum}/4) and multiply by ${N}.`,
          solution: [
            `From ${crossStr}, the expected fraction of ${targetText} offspring is {{${fracNum}/4}}.`,
            `Expected count = {{(${fracNum}/4) * ${N} = ${ans}}}.`,
          ],
        };
      }
      const x = rng.pick(XLINK_TRAITS);
      const H = x.sym;
      const h = x.sym.toLowerCase();
      const scenarios = [
        {
          desc: `a carrier mother (\`X^${H} X^${h}\`) and an unaffected father (\`X^${H} Y\`)`,
          ask: "their **sons** are affected",
          pct: 50,
          trap: 25,
          trapMsg: "25% is the chance out of ALL children; 50% of SONS inherit X^" + h + " from the carrier mother.",
          detail: `Sons inherit \`Y\` from father and either \`X^${H}\` (50%) or \`X^${h}\` (50%) from mother.`,
        },
        {
          desc: `a carrier mother (\`X^${H} X^${h}\`) and an unaffected father (\`X^${H} Y\`)`,
          ask: "**all their children** are affected sons",
          pct: 25,
          trap: 50,
          trapMsg: "50% is the chance among sons only; out of ALL children, affected sons (`X^" + h + " Y`) are 1 in 4 (25%).",
          detail: `Four equally likely genotypes: \`X^${H}X^${H}\`, \`X^${H}X^${h}\`, \`X^${H}Y\`, \`X^${h}Y\` → 1/4 = 25%.`,
        },
        {
          desc: `a carrier mother (\`X^${H} X^${h}\`) and an affected father (\`X^${h} Y\`)`,
          ask: "their **daughters** are affected",
          pct: 50,
          trap: 25,
          trapMsg: "25% is out of all children; among daughters specifically, 50% are `X^" + h + " X^" + h + "`.",
          detail: `Daughters receive \`X^${h}\` from father and either \`X^${H}\` (50%) or \`X^${h}\` (50%) from mother.`,
        },
        {
          desc: `a homozygous unaffected mother (\`X^${H} X^${H}\`) and an affected father (\`X^${h} Y\`)`,
          ask: "their **daughters** are carriers",
          pct: 100,
          trap: 50,
          trapMsg: "Every daughter inherits `X^" + h + "` from the affected father and `X^" + H + "` from the mother (100% of daughters).",
          detail: `All daughters are \`X^${H} X^${h}\` (100% obligate carriers).`,
        },
        {
          desc: `a homozygous unaffected mother (\`X^${H} X^${H}\`) and an affected father (\`X^${h} Y\`)`,
          ask: "their **sons** are affected",
          pct: 0,
          trap: 50,
          trapMsg: "A father passes his Y chromosome — never his X chromosome — to his sons.",
          detail: `All sons receive \`Y\` from father and \`X^${H}\` from mother → 0% affected.`,
        },
        {
          desc: `an affected mother (\`X^${h} X^${h}\`) and an unaffected father (\`X^${H} Y\`)`,
          ask: "their **sons** are affected",
          pct: 100,
          trap: 50,
          trapMsg: "Every son inherits his sole X chromosome from his affected mother (`X^" + h + "`), so 100% of sons are affected.",
          detail: `All sons are \`X^${h} Y\` (100% affected).`,
        },
      ] as const;
      const sc = rng.pick(scenarios);
      return {
        prompt: `${x.name[0].toUpperCase() + x.name.slice(1)} is X-linked recessive (\`X^${h}\`). For ${sc.desc}, what percentage (\`%\`) of ${sc.ask}?`,
        answer: { type: "number", value: sc.pct, display: `${sc.pct}%` },
        traps: [{ spec: { type: "number", value: sc.trap }, feedback: sc.trapMsg }],
        hint: `Write the X and Y alleles for both parents and check whether the question restricts to sons, daughters, or all children.`,
        solution: [sc.detail, `Answer: **${sc.pct}%**.`],
      };
    }

    // Tier 3: conditional carrier & two-step expected counts
    const mode = rng.pick(["cond_carrier", "cond_child", "abo_count"] as const);
    if (mode === "cond_carrier") {
      const t = rng.pick(RECESSIVE_TRAITS);
      const A = t.sym;
      const a = t.sym.toLowerCase();
      const mult = rng.pick([12, 18, 24, 30, 36, 42, 48, 60, 72, 90, 120]);
      const ans = (mult * 2) / 3;
      return {
        prompt: `In a large cohort of **${mult}** healthy, **${t.dom}** offspring born to heterozygous parents (\`${A}${a} × ${A}${a}\`) for autosomal ${t.name}, how many are expected to be heterozygous carriers (\`${A}${a}\`)?`,
        answer: { type: "number", value: ans, display: `${ans}` },
        traps: [
          {
            spec: { type: "number", value: mult / 2 },
            feedback: "Because all individuals in the cohort are already known to be unaffected (dominant phenotype), `aa` is excluded — leaving 2/3 carriers, not 1/2!",
          },
        ],
        hint: `Among unaffected offspring of \`${A}${a} × ${A}${a}\`, the ratio of \`${A}${A}\` : \`${A}${a}\` is 1 : 2 (so 2/3 are carriers).`,
        solution: [
          `Excluding \`${a}${a}\`, the remaining 3 equally likely genotypes are \`${A}${A}\`, \`${A}${a}\`, \`${A}${a}\`.`,
          `Carrier fraction = {{2/3}}. Expected carriers = {{(2/3) * ${mult} = ${ans}}}.`,
        ],
      };
    }
    if (mode === "cond_child") {
      const t = rng.pick(RECESSIVE_TRAITS.slice(0, 3));
      const A = t.sym;
      const a = t.sym.toLowerCase();
      const partnerHet = rng.bool(0.6);
      const pct = partnerHet ? 16.7 : 33.3;
      const partnerDesc = partnerHet ? `a known heterozygous carrier (\`${A}${a}\`)` : `an affected partner (\`${a}${a}\`)`;
      const fracStr = partnerHet ? "1/4" : "1/2";
      const prodStr = partnerHet ? "1/6" : "1/3";
      return {
        prompt: `Two heterozygous carrier parents (\`${A}${a} × ${A}${a}\`) for autosomal recessive ${t.name} have an **unaffected** child who later marries ${partnerDesc}. Calculate the percentage probability (\`%\`, to 1 d.p.) that their first child inherits ${t.name} (\`${a}${a}\`).`,
        answer: { type: "number", value: pct, tolerance: 0.15, display: `${pct}%` },
        hint: `Multiply P(unaffected child is a carrier = 2/3) by P(offspring is \`${a}${a}\` given carrier = ${fracStr}).`,
        solution: [
          `Given the child is unaffected, P(carrier \`${A}${a}\`) = {{2/3}}.`,
          `If a carrier mates with ${partnerDesc}, P(offspring \`${a}${a}\`) = {{${fracStr}}}.`,
          `Combined probability = {{(2/3) * (${fracStr}) = ${prodStr} ≈ ${pct}%}}.`,
        ],
      };
    }
    const abo = rng.pick(ABO_CROSSES);
    const group = rng.pick(["A", "B", "AB", "O"] as const);
    const N = rng.pick([40, 80, 120, 160, 200, 240, 280, 320, 400]);
    const ans = clean((N * abo.probs[group]) / 100);
    return {
      prompt: `Across **${N}** children born to couples with genotypes \`${abo.p1} × ${abo.p2}\` (blood groups ${abo.l1} × ${abo.l2}), calculate the expected number of children with **blood group ${group}**.`,
      answer: { type: "number", value: ans, display: `${ans}` },
      hint: `Find the Punnett probability for blood group ${group} (${abo.probs[group]}%) and multiply by ${N}.`,
      solution: [
        `Cross \`${abo.p1} × ${abo.p2}\` gives ${abo.probs[group]}% blood group ${group}.`,
        `Expected number = {{(${abo.probs[group]}/100) * ${N} = ${ans}}}.`,
      ],
    };
  },
};

// =============================================================================
// 2. HL — HARDY–WEINBERG EQUILIBRIUM CALCULATIONS (Level 2, HL Sprint)
// =============================================================================
const HW_SPECIES = [
  { org: "woodland moths", rec: "light-winged", dom: "dark-winged", sym: "D" },
  { org: "alpine wildflowers", rec: "white-petalled", dom: "purple-petalled", sym: "W" },
  { org: "island sheep", rec: "black-fleeced", dom: "white-fleeced", sym: "B" },
  { org: "coastal beetles", rec: "unspotted", dom: "spotted", sym: "S" },
  { org: "field mice", rec: "albino", dom: "brown-furred", sym: "A" },
  { org: "garden snails", rec: "unbanded", dom: "banded", sym: "G" },
] as const;

const hardyWeinberg: Drill = {
  id: `${TOPIC}.hardy-weinberg`,
  topicId: TOPIC,
  title: "Hardy–Weinberg Equilibrium (p, q, 2pq) Calculations",
  level: 2,
  ibLevel: "HL",
  guideRef: "natural-selection-hardy-weinberg",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const sp = rng.pick(HW_SPECIES);
    const A = sp.sym;
    const a = sp.sym.toLowerCase();

    if (tier === 1) {
      if (rng.bool(0.45)) {
        const q = rng.pick([0.05, 0.1, 0.12, 0.15, 0.18, 0.2, 0.22, 0.25, 0.28, 0.3, 0.35, 0.4, 0.45, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85]);
        const p = roundTo(1 - q, 2);
        const askP = rng.bool(0.5);
        return {
          prompt: askP
            ? `In a population of ${sp.org}, the recessive allele \`${a}\` has frequency **q = ${num(q)}**. Calculate the dominant allele frequency **p** (as a decimal).`
            : `In a population of ${sp.org}, the dominant allele \`${A}\` has frequency **p = ${num(p)}**. Calculate the recessive allele frequency **q** (as a decimal).`,
          answer: { type: "number", value: askP ? p : q, tolerance: 0.005, display: num(askP ? p : q) },
          hint: `Allele frequencies at a two-allele locus satisfy p + q = 1.`,
          solution: [
            `Using {{p + q = 1}}:`,
            askP ? `{{p = 1 - ${num(q)} = ${num(p)}}}.` : `{{q = 1 - ${num(p)} = ${num(q)}}}.`,
          ],
        };
      }
      const q = rng.pick([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
      const p = roundTo(1 - q, 2);
      const q2pct = roundTo(q * q * 100, 0);
      const askP = rng.bool(0.5);
      const ans = askP ? p : q;
      return {
        prompt: `In a Hardy–Weinberg population of ${sp.org}, **${q2pct}%** show the recessive ${sp.rec} phenotype (\`${a}${a}\`). Calculate the frequency of the ${askP ? `dominant allele (\`${A}\`, **p**)` : `recessive allele (\`${a}\`, **q**)`} as a decimal.`,
        answer: { type: "number", value: ans, tolerance: 0.005, display: num(ans) },
        traps: [
          {
            spec: { type: "number", value: roundTo(askP ? 1 - q * q : q * q, 2) },
            feedback: `${q2pct}% is q² (genotype frequency), NOT q (allele frequency) — take √q² first!`,
          },
        ],
        hint: `Set q² = ${num(roundTo(q * q, 2))}, take √q² to get q, then use p = 1 − q if asked for p.`,
        solution: [
          `{{q^2 = ${num(roundTo(q * q, 2))}}} → {{q = sqrt(${num(roundTo(q * q, 2))}) = ${num(q)}}}.`,
          askP ? `{{p = 1 - ${num(q)} = ${num(p)}}}.` : `Recessive allele frequency **q = ${num(q)}**.`,
        ],
      };
    }

    if (tier === 2) {
      const q = rng.pick([0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, 0.8, 0.9]);
      const p = roundTo(1 - q, 2);
      const q2pct = roundTo(q * q * 100, 2);
      const hetPct = roundTo(2 * p * q * 100, 2);
      const homDomPct = roundTo(p * p * 100, 2);
      const askHet = rng.bool(0.7);
      const ans = askHet ? hetPct : homDomPct;
      return {
        prompt: `In a Hardy–Weinberg population of ${sp.org}, **${num(q2pct)}%** are ${sp.rec} (\`${a}${a}\`). Calculate the percentage (\`%\`) of individuals that are ${askHet ? `heterozygous carriers (\`${A}${a}\`)` : `homozygous dominant (\`${A}${A}\`)`}.`,
        answer: { type: "number", value: ans, tolerance: 0.1, display: `${num(ans)}%` },
        traps: askHet
          ? [{ spec: { type: "number", value: roundTo(p * q * 100, 2) }, feedback: "Heterozygote frequency is 2pq — do not forget to multiply pq by 2!" }]
          : [{ spec: { type: "number", value: roundTo(p * 100, 2) }, feedback: "p is the allele frequency — homozygous dominant genotype frequency is p²!" }],
        hint: `Find q = √q², then p = 1 − q, then compute ${askHet ? "2pq × 100%" : "p² × 100%"}.`,
        solution: [
          `{{q^2 = ${num(roundTo(q * q, 4))}}} → {{q = ${num(q)}}} and {{p = 1 - ${num(q)} = ${num(p)}}}.`,
          askHet
            ? `Heterozygotes {{2pq = 2 * ${num(p)} * ${num(q)} = ${num(roundTo(2 * p * q, 4))}}} = **${num(hetPct)}%**.`
            : `Homozygous dominant {{p^2 = (${num(p)})^2 = ${num(roundTo(p * p, 4))}}} = **${num(homDomPct)}%**.`,
        ],
      };
    }

    // Tier 3: exact population counts OR direct allele counting
    if (rng.bool(0.65)) {
      const combos: Array<[number, number]> = [
        [1000, 0.1], [1000, 0.2], [1000, 0.3], [1000, 0.4], [1000, 0.6], [1000, 0.7],
        [2000, 0.1], [2000, 0.2], [2000, 0.3], [2000, 0.4], [2000, 0.6],
        [2500, 0.04], [2500, 0.08], [2500, 0.12], [2500, 0.2], [2500, 0.4],
        [4000, 0.05], [4000, 0.15], [4000, 0.25], [4000, 0.35],
        [5000, 0.08], [5000, 0.1], [5000, 0.2], [5000, 0.3],
        [10000, 0.03], [10000, 0.05], [10000, 0.07], [10000, 0.12], [10000, 0.15],
      ];
      const [N, q] = rng.pick(combos);
      const p = roundTo(1 - q, 4);
      const kRec = Math.round(N * q * q);
      const kHet = Math.round(N * 2 * p * q);
      const kHomDom = Math.round(N * p * p);
      const askHet = rng.bool(0.7);
      const ans = askHet ? kHet : kHomDom;
      return {
        prompt: `In a Hardy–Weinberg population of **${N}** ${sp.org}, **${kRec}** individuals are ${sp.rec} (\`${a}${a}\`). Calculate the expected number of ${askHet ? `heterozygous carriers (\`${A}${a}\`)` : `homozygous dominant individuals (\`${A}${A}\`)`}.`,
        answer: { type: "number", value: ans, display: `${ans}` },
        traps: askHet
          ? [{ spec: { type: "number", value: Math.round(kHet / 2) }, feedback: "Multiply by 2pq, not pq!" }]
          : undefined,
        hint: `Compute q² = ${kRec}/${N}, take √q² for q, find p = 1 − q, then multiply ${askHet ? "2pq" : "p²"} by ${N}.`,
        solution: [
          `{{q^2 = ${kRec} / ${N} = ${num(roundTo(q * q, 6))}}} → {{q = ${num(q)}}} and {{p = ${num(p)}}}.`,
          askHet
            ? `Expected carriers = {{2pq * ${N} = 2 * ${num(p)} * ${num(q)} * ${N} = ${kHet}}}.`
            : `Expected \`${A}${A}\` = {{p^2 * ${N} = (${num(p)})^2 * ${N} = ${kHomDom}}}.`,
        ],
      };
    }

    // Direct allele counting (no HWE assumed)
    const N = rng.pick([100, 200, 250, 500]);
    const aa = rng.int(Math.round(N * 0.08), Math.round(N * 0.32));
    const Aa = rng.int(Math.round(N * 0.2), Math.round(N * 0.48));
    const AA = N - aa - Aa;
    const qExact = roundTo((Aa + 2 * aa) / (2 * N), 3);
    return {
      prompt: `A biologist genotypes **${N}** ${sp.org} directly and counts **${AA} \`${A}${A}\`**, **${Aa} \`${A}${a}\`**, and **${aa} \`${a}${a}\`**. Without assuming Hardy–Weinberg equilibrium, calculate the exact frequency of the recessive allele \`${a}\` (**q**, to 3 d.p.).`,
      answer: { type: "number", value: qExact, tolerance: 0.002, display: num(qExact) },
      hint: `Count total alleles (2 × ${N} = ${2 * N}) and count every \`${a}\` allele (${Aa} + 2 × ${aa}).`,
      solution: [
        `Total alleles = {{2 * ${N} = ${2 * N}}}.`,
        `Count of \`${a}\` alleles = {{${Aa} + 2 * ${aa} = ${Aa + 2 * aa}}}.`,
        `{{q = ${Aa + 2 * aa} / ${2 * N} = ${num(qExact)}}}.`,
      ],
    };
  },
};

// =============================================================================
// 3. HL — DIHYBRID χ² GOODNESS-OF-FIT & LINKED-GENE RF (Level 3, HL)
// =============================================================================
const LINK_SPECIES = [
  { org: "Drosophila", p1: "grey long", p2: "black vestigial", r1: "grey vestigial", r2: "black long", geno: "GL / gl × gl / gl" },
  { org: "maize plants", p1: "purple smooth", p2: "yellow shrunken", r1: "purple shrunken", r2: "yellow smooth", geno: "PS / ps × ps / ps" },
  { org: "sweet peas", p1: "purple long-pollen", p2: "red round-pollen", r1: "purple round-pollen", r2: "red long-pollen", geno: "PL / pl × pl / pl" },
  { org: "tomato plants", p1: "tall smooth-fruit", p2: "dwarf peach-fruit", r1: "tall peach-fruit", r2: "dwarf smooth-fruit", geno: "TS / ts × ts / ts" },
] as const;

const chiSquaredLinkage: Drill = {
  id: `${TOPIC}.chi-squared-linkage`,
  topicId: TOPIC,
  title: "Dihybrid χ² Goodness-of-Fit & Recombination Frequency",
  level: 3,
  ibLevel: "HL",
  guideRef: "inheritance-linked-chi",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    if (tier === 1) {
      if (rng.bool(0.75)) {
        const k = rng.int(5, 45);
        const N = 16 * k;
        const cat = rng.pick([
          { label: "both dominant traits (`A_B_`)", num: 9 },
          { label: "dominant A and recessive b (`A_bb`)", num: 3 },
          { label: "recessive a and dominant B (`aaB_`)", num: 3 },
          { label: "both recessive traits (`aabb`)", num: 1 },
        ] as const);
        const ans = cat.num * k;
        return {
          prompt: `An unlinked F₂ dihybrid cross (\`AaBb × AaBb\`) yields **${N}** offspring. Under Mendel's 9 : 3 : 3 : 1 ratio, calculate the expected number showing ${cat.label}.`,
          answer: { type: "number", value: ans, display: `${ans}` },
          hint: `Divide ${N} by 16 first (to get 1/16 = ${k}), then multiply by ${cat.num}.`,
          solution: [
            `Expected fraction = {{${cat.num}/16}}.`,
            `Expected count = {{(${cat.num}/16) * ${N} = ${ans}}}.`,
          ],
        };
      }
      const nCat = rng.int(2, 9);
      const org = rng.pick(["pea plants", "fruit flies", "maize kernels", "wildflowers", "beetles", "snails"]);
      return {
        prompt: `A genetics investigation scores **${nCat}** distinct phenotypic categories in ${org} for a χ² goodness-of-fit test. State the degrees of freedom (**df**).`,
        answer: { type: "number", value: nCat - 1, display: `${nCat - 1}` },
        traps: [{ spec: { type: "number", value: nCat }, feedback: "Remember df = n − 1 (subtract 1 from the number of categories)." }],
        hint: `Goodness-of-fit degrees of freedom = number of categories minus 1.`,
        solution: [`{{df = n - 1 = ${nCat} - 1 = ${nCat - 1}}}.`],
      };
    }

    if (tier === 2) {
      const sp = rng.pick(LINK_SPECIES);
      const N = rng.pick([200, 400, 500, 800, 1000]);
      const rfPct = rng.int(6, 26); // exact integer percentage!
      const totalRec = Math.round((N * rfPct) / 100);
      const r1 = Math.floor(totalRec / 2) + rng.int(-3, 3);
      const r2 = totalRec - r1;
      const totalPar = N - totalRec;
      const p1 = Math.floor(totalPar / 2) + rng.int(-6, 6);
      const p2 = totalPar - p1;
      return {
        prompt: `A test cross of linked genes (\`${sp.geno}\`) in **${N}** ${sp.org} produces: **${p1}** ${sp.p1}, **${p2}** ${sp.p2}, **${r1}** ${sp.r1}, and **${r2}** ${sp.r2}. Calculate the recombination frequency (\`%\`).`,
        answer: { type: "number", value: rfPct, tolerance: 0.05, display: `${rfPct}%` },
        traps: [
          {
            spec: { type: "number", value: 100 - rfPct },
            feedback: `${100 - rfPct}% is the parental percentage — recombination frequency uses the two smallest (recombinant) counts.`,
          },
        ],
        hint: `Sum the two rare recombinant counts (${r1} + ${r2}), divide by ${N}, and multiply by 100%.`,
        solution: [
          `Total recombinants = {{${r1} + ${r2} = ${totalRec}}}.`,
          `{{RF = (${totalRec} / ${N}) * 100% = ${rfPct}%}}.`,
        ],
      };
    }

    // Tier 3: full 4-class χ² calculation against 1:1:1:1 test cross
    const sp = rng.pick(LINK_SPECIES);
    const E = rng.pick([25, 40, 50, 100]);
    const N = 4 * E;
    const d1 = rng.int(3, Math.min(18, Math.floor(E * 0.45)));
    const d2 = rng.int(2, Math.min(15, Math.floor(E * 0.35)));
    const o1 = E + d1;
    const o2 = E - d1;
    const o3 = E + d2;
    const o4 = E - d2;
    const sumSq = 2 * d1 * d1 + 2 * d2 * d2;
    const chi2 = roundTo(sumSq / E, 2);
    return {
      prompt: `A dihybrid test cross of **${N}** ${sp.org} tests an unlinked 1 : 1 : 1 : 1 ratio (expected \`E = ${E}\` each). Observed counts are **${o1}, ${o2}, ${o3}, and ${o4}**. Calculate **χ²** (to 2 decimal places).`,
      answer: { type: "number", value: chi2, tolerance: 0.02, display: num(chi2) },
      hint: `Compute (O − ${E})² for all four classes, sum them, and divide by E = ${E}.`,
      solution: [
        `Deviations (O − E): +${d1}, −${d1}, +${d2}, −${d2}.`,
        `Sum of squared deviations = {{${d1}^2 + ${d1}^2 + ${d2}^2 + ${d2}^2 = ${sumSq}}}.`,
        `{{χ^2 = ${sumSq} / ${E} = ${num(chi2)}}} (df = 3, crit = 7.815 → ${chi2 > 7.815 ? "reject H₀" : "fail to reject H₀"}).`,
      ],
    };
  },
};

// =============================================================================
// 4. SL — REPRODUCTION, MENSTRUAL CYCLE & HOMEOSTASIS (Level 1, SL Sprint)
// =============================================================================
const reproductionHomeostasis: Drill = {
  id: `${TOPIC}.reproduction-homeostasis-rates`,
  topicId: TOPIC,
  title: "Menstrual Hormones, Homeostasis & Osmoregulation",
  level: 1,
  ibLevel: "SL",
  guideRef: "reproduction-homeostasis",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    if (tier === 1) {
      const pick = rng.int(1, 4);
      if (pick === 1) {
        // Blood glucose deviation -> insulin or glucagon (high variety of readings & contexts)
        const high = rng.bool(0.5);
        const context = rng.pick(["after eating rice", "after drinking fruit juice", "30 minutes after breakfast", "after a high-starch lunch", "following a glucose tolerance drink"]);
        const fastCtx = rng.pick(["after an overnight fast", "after 90 minutes of running", "after skipping breakfast", "during prolonged endurance cycling", "after 14 hours without food"]);
        if (high) {
          const g = roundTo(rng.int(74, 128) / 10, 1);
          return {
            prompt: `A healthy student's blood glucose rises to **${num(g)} mmol dm⁻³** ${context}. State the **hormone** secreted by pancreatic β cells to restore the setpoint.`,
            answer: { type: "text", accept: ["insulin"], display: "Insulin" },
            hint: `β cells lower elevated blood glucose by promoting cellular uptake and hepatic glycogenesis.`,
            solution: [
              `Blood glucose (${num(g)} mmol dm⁻³) is above the ~5.0 mmol dm⁻³ setpoint.`,
              `Pancreatic β cells secrete **insulin** to stimulate glucose uptake and glycogenesis.`,
            ],
          };
        }
        const g = roundTo(rng.int(27, 39) / 10, 1);
        return {
          prompt: `A healthy athlete's blood glucose drops to **${num(g)} mmol dm⁻³** ${fastCtx}. State the **hormone** secreted by pancreatic α cells to restore the setpoint.`,
          answer: { type: "text", accept: ["glucagon"], display: "Glucagon" },
          hint: `When glucose is GONE (low), α cells release this hormone to stimulate liver glycogenolysis.`,
          solution: [
            `Blood glucose (${num(g)} mmol dm⁻³) is below the ~5.0 mmol dm⁻³ setpoint.`,
            `Pancreatic α cells secrete **glucagon** to trigger hepatic glycogenolysis and gluconeogenesis.`,
          ],
        };
      }
      if (pick === 2) {
        // Thermoregulation vasodilation / vasoconstriction across varied temperatures
        const hot = rng.bool(0.5);
        const env = hot
          ? rng.pick(["in a 38 °C tropical courtyard", "after sprinting in humid heat", "inside a hot greenhouse", "during a midday football match"])
          : rng.pick(["in freezing alpine wind", "while swimming in 12 °C water", "waiting outdoors at −4 °C", "climbing a snow-covered ridge"]);
        const temp = hot ? roundTo(rng.int(377, 392) / 10, 1) : roundTo(rng.int(351, 363) / 10, 1);
        return {
          prompt: `Core body temperature reaches **${num(temp)} °C** ${env}. Does the hypothalamus trigger **vasodilation** or **vasoconstriction** of skin arterioles?`,
          answer: hot
            ? { type: "text", accept: ["vasodilation"], display: "Vasodilation" }
            : { type: "text", accept: ["vasoconstriction"], display: "Vasoconstriction" },
          hint: hot
            ? `To lose excess heat by radiation, more warm blood should flow near the skin surface.`
            : `To conserve core heat, blood flow near the cold skin surface must be restricted.`,
          solution: [
            `Core temperature (${num(temp)} °C) is ${hot ? "above" : "below"} 37.0 °C.`,
            `Hypothalamus triggers **${hot ? "vasodilation" : "vasoconstriction"}** of skin arterioles to ${hot ? "increase heat radiation" : "reduce heat loss"}.`,
          ],
        };
      }
      if (pick === 3) {
        // Menstrual cycle day -> dominant hormone or key event
        const phase = rng.pick(["ovulation", "luteal", "follicular"] as const);
        if (phase === "ovulation") {
          const peakE = rng.int(220, 380);
          return {
            prompt: `On Day 13–14 of a 28-day menstrual cycle, sustained follicle oestrogen peaks at ${peakE} pg cm⁻³ and flips to positive feedback. State the **anterior pituitary hormone** whose sharp surge triggers ovulation.`,
            answer: { type: "text", accept: ["LH", "luteinising hormone", "luteinizing hormone"], display: "LH" },
            hint: `This gonadotropin shows the narrowest, tallest spike on Day 14.`,
            solution: [`High oestrogen exerts positive feedback triggering the **LH** surge, causing ovulation.`],
          };
        }
        if (phase === "luteal") {
          const day = rng.int(17, 24);
          return {
            prompt: `On **Day ${day}** of a 28-day menstrual cycle, the corpus luteum maintains a thick vascular endometrium while inhibiting FSH and LH via negative feedback. State the **main ovarian hormone** responsible.`,
            answer: { type: "text", accept: ["progesterone"], display: "Progesterone" },
            hint: `This steroid hormone peaks during the luteal phase (Days 15–26).`,
            solution: [`The corpus luteum secretes **progesterone**, maintaining the endometrium and inhibiting FSH/LH.`],
          };
        }
        const day = rng.int(6, 11);
        return {
          prompt: `On **Day ${day}** of a 28-day menstrual cycle, anterior pituitary FSH stimulates a growing follicle to secrete a steroid hormone that repairs and thickens the endometrium. Name that **ovarian hormone**.`,
          answer: { type: "text", accept: ["oestrogen", "estrogen", "oestradiol", "estradiol"], display: "Oestrogen" },
          hint: `This hormone repairs the endometrium after menstruation and rises to a peak before Day 14.`,
          solution: [`Developing follicles secrete **oestrogen** (oestradiol), repairing the uterine lining.`],
        };
      }
      // Clean SL germination percentage
      const total = rng.pick([20, 25, 40, 50, 80, 100, 200]);
      const pct = rng.pick([35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]);
      const germ = Math.round((total * pct) / 100);
      const exactPct = roundTo((germ / total) * 100, 1);
      const seed = rng.pick(["barley", "wheat", "mung bean", "radish", "pea", "cress"]);
      return {
        prompt: `In a seed-germination trial with water and oxygen at 22 °C, **${germ}** out of **${total}** ${seed} seeds germinate within 72 hours. Calculate the percentage germination (\`%\`).`,
        answer: { type: "number", value: exactPct, tolerance: 0.1, display: `${num(exactPct)}%` },
        hint: `Divide germinated seeds by total seeds and multiply by 100%.`,
        solution: [`{{(${germ} / ${total}) * 100% = ${num(exactPct)}%}}.`],
      };
    }

    if (tier === 2) {
      if (rng.bool(0.5)) {
        // Blood glucose percentage drop after insulin response
        const start = rng.pick([8.0, 9.0, 10.0, 11.0, 12.0, 12.5, 14.0, 15.0]);
        const dropPct = rng.pick([20, 25, 30, 40, 50, 60]);
        const end = roundTo(start * (1 - dropPct / 100), 2);
        return {
          prompt: `Following insulin release after a meal, a patient's blood glucose falls from **${num(start)} mmol dm⁻³** to **${num(end)} mmol dm⁻³** over two hours. Calculate the **percentage decrease** (\`%\`) in blood glucose concentration.`,
          answer: { type: "number", value: dropPct, tolerance: 0.1, display: `${dropPct}%` },
          hint: `Percentage decrease = ((initial − final) ÷ initial) × 100%.`,
          solution: [
            `Change = {{${num(start)} - ${num(end)} = ${num(roundTo(start - end, 2))}}} mmol dm⁻³.`,
            `Percentage decrease = {{(${num(roundTo(start - end, 2))} / ${num(start)}) * 100% = ${dropPct}%}}.`,
          ],
        };
      }
      // Sweat evaporative heat loss (2.4 kJ per gram of evaporated water)
      const grams = rng.int(15, 95) * 5; // 75 g .. 475 g
      const kj = roundTo(grams * 2.4, 1);
      const sport = rng.pick(["a 10 km run", "a badminton match", "a rowing session", "an outdoor cycle", "a hot-weather hike"]);
      return {
        prompt: `Evaporating 1 g of sweat from human skin removes **2.4 kJ** of thermal energy. During ${sport}, an athlete evaporates **${grams} g** of sweat. Calculate the total thermal energy lost in **kJ**.`,
        answer: { type: "number", value: kj, tolerance: 0.2, display: `${num(kj)} kJ` },
        hint: `Multiply the mass of evaporated sweat (g) by 2.4 kJ g⁻¹.`,
        solution: [`Energy lost = {{${grams} * 2.4 = ${num(kj)}}} kJ.`],
      };
    }

    // Tier 3: HL-aligned nephron GFR urine rate OR diabetic glycosuria excretion rate
    if (rng.bool(0.55)) {
      const gfr = rng.pick([100, 110, 120, 125, 130, 140, 150]);
      const unreabPct = rng.pick([0.4, 0.5, 0.6, 0.8, 1.0, 1.2, 1.5, 1.6, 2.0]);
      const reabPct = roundTo(100 - unreabPct, 1);
      const urine = roundTo((gfr * unreabPct) / 100, 2);
      return {
        prompt: `A patient's kidneys form glomerular filtrate at **${gfr} cm³ min⁻¹**. Along the nephron and collecting duct, **${num(reabPct)}%** of the filtrate volume is reabsorbed. Calculate the urine production rate in **cm³ min⁻¹** (to 2 d.p.).`,
        answer: { type: "number", value: urine, tolerance: 0.02, display: `${num(urine)}` },
        traps: [
          {
            spec: { type: "number", value: roundTo(gfr - urine, 2) },
            feedback: "That is the volume reabsorbed — subtract from GFR (or multiply GFR by the unreabsorbed percentage).",
          },
        ],
        hint: `Unreabsorbed percentage = 100% − ${num(reabPct)}% = ${num(unreabPct)}%. Multiply by ${gfr}.`,
        solution: [
          `Unreabsorbed fraction = {{100% - ${num(reabPct)}% = ${num(unreabPct)}% = ${num(roundTo(unreabPct / 100, 4))}}}.`,
          `Urine production rate = {{${gfr} * ${num(roundTo(unreabPct / 100, 4))} = ${num(urine)}}} cm³ min⁻¹.`,
        ],
      };
    }
    const gfr = rng.pick([100, 110, 120, 125, 130]);
    const gluc = rng.pick([2.8, 3.0, 3.2, 3.4, 3.6, 4.0]);
    const tmax = rng.pick([280, 300, 320]);
    const filtered = roundTo(gfr * gluc, 1);
    const exc = roundTo(filtered - tmax, 1);
    if (exc <= 0) {
      // Guarantee positive glycosuria by raising gluc
      const g2 = 3.8;
      const f2 = roundTo(gfr * g2, 1);
      const e2 = roundTo(f2 - tmax, 1);
      return {
        prompt: `In an untreated diabetic patient, GFR is **${gfr} cm³ min⁻¹** and plasma glucose is **${num(g2)} mg cm⁻³**. If PCT Na⁺-glucose cotransporters saturate at **${tmax} mg min⁻¹**, calculate the rate of urinary glucose excretion (**mg min⁻¹**).`,
        answer: { type: "number", value: e2, tolerance: 0.2, display: `${num(e2)}` },
        hint: `Filtered glucose load = GFR × plasma glucose; subtract the PCT transport maximum (${tmax}).`,
        solution: [
          `Filtered glucose = {{${gfr} * ${num(g2)} = ${num(f2)}}} mg min⁻¹.`,
          `Urinary excretion = {{${num(f2)} - ${tmax} = ${num(e2)}}} mg min⁻¹.`,
        ],
      };
    }
    return {
      prompt: `In an untreated diabetic patient, GFR is **${gfr} cm³ min⁻¹** and plasma glucose is **${num(gluc)} mg cm⁻³**. If PCT Na⁺-glucose cotransporters saturate at **${tmax} mg min⁻¹**, calculate the rate of urinary glucose excretion (**mg min⁻¹**).`,
      answer: { type: "number", value: exc, tolerance: 0.2, display: `${num(exc)}` },
      hint: `Filtered glucose load = GFR × plasma glucose; subtract the PCT transport maximum (${tmax}).`,
      solution: [
        `Filtered glucose = {{${gfr} * ${num(gluc)} = ${num(filtered)}}} mg min⁻¹.`,
        `Urinary excretion = {{${num(filtered)} - ${tmax} = ${num(exc)}}} mg min⁻¹.`,
      ],
    };
  },
};

// =============================================================================
// 5. SL — BIOMAGNIFICATION, ALBEDO & CLIMATE FEEDBACKS (Level 2, SL Sprint)
// =============================================================================
const TOXINS = ["DDT", "methylmercury", "PCBs", "dieldrin", "persistent microplastics"] as const;
const CHAINS = [
  ["phytoplankton", "zooplankton", "small fish", "tuna"],
  ["algae", "krill", "herring", "harbour seal"],
  ["phytoplankton", "mussels", "crab", "osprey"],
  ["aquatic plants", "mayfly larvae", "minnow", "heron"],
] as const;

const biomagnificationClimate: Drill = {
  id: `${TOPIC}.biomagnification-climate`,
  topicId: TOPIC,
  title: "Biomagnification, Albedo & Climate Feedbacks",
  level: 2,
  ibLevel: "SL",
  guideRef: "stability-climate-change",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    if (tier === 1) {
      if (rng.bool(0.55)) {
        const toxin = rng.pick(TOXINS);
        const chain = rng.pick(CHAINS);
        const base = rng.pick([0.002, 0.004, 0.005, 0.01, 0.02, 0.025, 0.05]);
        const bmf = rng.pick([200, 400, 500, 800, 1000, 1500, 2000, 2500, 4000, 5000]);
        const top = clean(base * bmf);
        return {
          prompt: `In a wetland food web, ${chain[0]} contain **${num(base)} ppm** of ${toxin}, whereas apex ${chain[3]} tissue contains **${num(top)} ppm**. Calculate the overall biomagnification factor (**BMF**).`,
          answer: { type: "number", value: bmf, display: `${bmf}` },
          hint: `BMF = predator concentration ÷ producer concentration.`,
          solution: [`{{BMF = ${num(top)} / ${num(base)} = ${bmf}}}.`],
        };
      }
      const inc = rng.pick([200, 250, 300, 350, 400, 450, 500]);
      const surf = rng.pick([
        { name: "fresh Arctic sea ice", a: 0.85 },
        { name: "clean Greenland snow", a: 0.8 },
        { name: "melting glacier ice", a: 0.6 },
        { name: "boreal tundra", a: 0.2 },
        { name: "tropical rainforest canopy", a: 0.12 },
        { name: "open dark Arctic seawater", a: 0.06 },
      ] as const);
      const absorbed = roundTo(inc * (1 - surf.a), 1);
      return {
        prompt: `Incoming sunlight delivers **${inc} W m⁻²** onto ${surf.name} (albedo **${num(surf.a)}**). Calculate the solar power **absorbed** by the surface in **W m⁻²**.`,
        answer: { type: "number", value: absorbed, tolerance: 0.2, display: `${num(absorbed)}` },
        traps: [
          {
            spec: { type: "number", value: roundTo(inc * surf.a, 1) },
            feedback: "Albedo is the fraction REFLECTED — multiply by (1 − albedo) to find energy ABSORBED.",
          },
        ],
        hint: `Fraction absorbed = 1 − ${num(surf.a)} = ${num(roundTo(1 - surf.a, 2))}. Multiply by ${inc}.`,
        solution: [
          `Absorbed fraction = {{1 - ${num(surf.a)} = ${num(roundTo(1 - surf.a, 2))}}}.`,
          `Power absorbed = {{${inc} * ${num(roundTo(1 - surf.a, 2))} = ${num(absorbed)}}} W m⁻².`,
        ],
      };
    }

    if (tier === 2) {
      if (rng.bool(0.5)) {
        const toxin = rng.pick(TOXINS);
        const chain = rng.pick(CHAINS);
        const base = rng.pick([0.01, 0.02, 0.03, 0.04, 0.05]);
        const step = rng.pick([5, 8, 10, 12, 15, 20]);
        const top = roundTo(base * step * step * step, 2);
        return {
          prompt: `In the 4-level food chain **${chain[0]} → ${chain[1]} → ${chain[2]} → ${chain[3]}**, ${chain[0]} contain **${num(base)} ppm** of ${toxin} and each trophic transfer multiplies concentration by **${step}**. Calculate the concentration in **${chain[3]}** (in \`ppm\`).`,
          answer: { type: "number", value: top, tolerance: 0.05, display: `${num(top)}` },
          traps: [
            {
              spec: { type: "number", value: roundTo(base * step * step * step * step, 2) },
              feedback: "A 4-level chain has 3 trophic transfers (multiply by factor³), not 4 transfers.",
            },
          ],
          hint: `There are 3 feeding transfers across 4 trophic levels: multiply ${num(base)} by ${step}³.`,
          solution: [
            `3 trophic transfers → multiplier = {{${step}^3 = ${step * step * step}}}.`,
            `Concentration in ${chain[3]} = {{${num(base)} * ${step * step * step} = ${num(top)}}} ppm.`,
          ],
        };
      }
      const inc = rng.pick([200, 250, 300, 350, 400, 500]);
      const aHigh = rng.pick([0.75, 0.8, 0.85, 0.9]);
      const aLow = rng.pick([0.05, 0.06, 0.1, 0.15, 0.2]);
      const diff = roundTo(inc * (aHigh - aLow), 1);
      return {
        prompt: `Arctic summer sunlight strikes at **${inc} W m⁻²**. When sea ice (albedo **${num(aHigh)}**) melts to expose dark open water (albedo **${num(aLow)}**), calculate the **increase** in absorbed solar power (**W m⁻²**).`,
        answer: { type: "number", value: diff, tolerance: 0.2, display: `${num(diff)}` },
        hint: `Compute absorbed power for both surfaces, or directly calculate ${inc} × (${num(aHigh)} − ${num(aLow)}).`,
        solution: [
          `Ice absorbs {{${inc} * ${num(roundTo(1 - aHigh, 2))} = ${num(roundTo(inc * (1 - aHigh), 1))}}} W m⁻².`,
          `Dark water absorbs {{${inc} * ${num(roundTo(1 - aLow, 2))} = ${num(roundTo(inc * (1 - aLow), 1))}}} W m⁻².`,
          `Increase = **${num(diff)} W m⁻²** (positive ice–albedo feedback).`,
        ],
      };
    }

    // Tier 3: Carbon sequestration (afforestation/peatland) OR eutrophication dissolved O₂ drop
    if (rng.bool(0.5)) {
      const strategy = rng.pick([
        { name: "tropical reforestation", rate: rng.pick([8, 10, 12, 14, 15]) },
        { name: "temperate afforestation", rate: rng.pick([5, 6, 7, 8, 9]) },
        { name: "rewetted tropical peatland restoration", rate: rng.pick([16, 18, 20, 22, 25]) },
      ] as const);
      const area = rng.pick([50, 80, 120, 150, 200, 250, 300, 400]);
      const years = rng.pick([5, 8, 10, 12, 15, 20]);
      const total = strategy.rate * area * years;
      return {
        prompt: `A ${strategy.name} project prevents or sequesters **${strategy.rate} tonnes CO₂ ha⁻¹ yr⁻¹** across **${area} hectares** over **${years} years**. Calculate the total mass of CO₂ mitigated in **tonnes**.`,
        answer: { type: "number", value: total, display: `${total}` },
        hint: `Multiply annual rate per hectare × total hectares × number of years.`,
        solution: [
          `Annual total = {{${strategy.rate} * ${area} = ${strategy.rate * area}}} tonnes CO₂ yr⁻¹.`,
          `Over ${years} years = {{${strategy.rate * area} * ${years} = ${total}}} tonnes CO₂.`,
        ],
      };
    }
    const o2Start = rng.pick([8.0, 9.0, 10.0, 11.0, 12.0]);
    const dropPct = rng.pick([45, 50, 55, 60, 65, 70, 75, 80]);
    const o2End = roundTo(o2Start * (1 - dropPct / 100), 2);
    const lake = rng.pick(["a shallow agricultural reservoir", "an urban freshwater pond", "a coastal estuary", "a lowland lake"]);
    return {
      prompt: `Following fertiliser runoff into ${lake}, saprotrophic bacterial decomposition drops dissolved O₂ from **${num(o2Start)} mg dm⁻³** to **${num(o2End)} mg dm⁻³**. Calculate the **percentage decrease** (\`%\`) in dissolved oxygen.`,
      answer: { type: "number", value: dropPct, tolerance: 0.1, display: `${dropPct}%` },
      hint: `Percentage decrease = ((${num(o2Start)} − ${num(o2End)}) ÷ ${num(o2Start)}) × 100%.`,
      solution: [
        `Drop = {{${num(o2Start)} - ${num(o2End)} = ${num(roundTo(o2Start - o2End, 2))}}} mg dm⁻³.`,
        `Percentage decrease = {{(${num(roundTo(o2Start - o2End, 2))} / ${num(o2Start)}) * 100% = ${dropPct}%}}.`,
      ],
    };
  },
};

export const drills: Drill[] = [
  reproductionHomeostasis,
  punnettGenetics,
  hardyWeinberg,
  chiSquaredLinkage,
  biomagnificationClimate,
];
