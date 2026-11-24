"use client";
import { useMemo, useState } from "react";
import { M, Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: DNA → mRNA → Polypeptide Codon & Mutation Sandbox [SL]
// =============================================================================
type Base = "A" | "T" | "C" | "G";
type MutMode = "sub" | "ins" | "del";

const CODON_TABLE: Record<string, string> = {
  UUU: "Phe", UUC: "Phe", UUA: "Leu", UUG: "Leu",
  CUU: "Leu", CUC: "Leu", CUA: "Leu", CUG: "Leu",
  AUU: "Ile", AUC: "Ile", AUA: "Ile", AUG: "Met",
  GUU: "Val", GUC: "Val", GUA: "Val", GUG: "Val",
  UCU: "Ser", UCC: "Ser", UCA: "Ser", UCG: "Ser",
  CCU: "Pro", CCC: "Pro", CCA: "Pro", CCG: "Pro",
  ACU: "Thr", ACC: "Thr", ACA: "Thr", ACG: "Thr",
  GCU: "Ala", GCC: "Ala", GCA: "Ala", GCG: "Ala",
  UAU: "Tyr", UAC: "Tyr", UAA: "STOP", UAG: "STOP",
  CAU: "His", CAC: "His", CAA: "Gln", CAG: "Gln",
  AAU: "Asn", AAC: "Asn", AAA: "Lys", AAG: "Lys",
  GAU: "Asp", GAC: "Asp", GAA: "Glu", GAG: "Glu",
  UGU: "Cys", UGC: "Cys", UGA: "STOP", UGG: "Trp",
  CGU: "Arg", CGC: "Arg", CGA: "Arg", CGG: "Arg",
  AGU: "Ser", AGC: "Ser", AGA: "Arg", AGG: "Arg",
  GGU: "Gly", GGC: "Gly", GGA: "Gly", GGG: "Gly",
};

const COMP_RNA: Record<string, string> = { A: "U", T: "A", C: "G", G: "C" };
const COMP_DNA: Record<string, string> = { A: "T", T: "A", C: "G", G: "C" };
const COMP_TRNA: Record<string, string> = { A: "U", U: "A", C: "G", G: "C" };

// Wild-type 3'→5' antisense (template) strand:
// Codons: TAC (AUG=Met), CCA (GGU=Gly), CTC (GAG=Glu, sickle locus!), CTC (GAG=Glu), ATT (UAA=STOP)
const WILD_ANTISENSE = "TACCCACTCCTCATT";

interface CodonRow {
  index: number;
  antisense: string;
  sense: string;
  mrna: string;
  anticodon: string;
  aa: string;
  isComplete: boolean;
  terminatedBefore: boolean;
  changedFromWild: boolean;
}

function translateAntisense(seq: string): {
  codons: Array<{ antisense: string; sense: string; mrna: string; anticodon: string; aa: string; isComplete: boolean }>;
  aaChain: string[];
  hasStop: boolean;
} {
  const codons: Array<{ antisense: string; sense: string; mrna: string; anticodon: string; aa: string; isComplete: boolean }> = [];
  const aaChain: string[] = [];
  let stopped = false;
  let hasStop = false;
  for (let i = 0; i < seq.length; i += 3) {
    const anti = seq.slice(i, i + 3);
    const sense = anti.split("").map((b) => COMP_DNA[b] ?? "?").join("");
    const mrna = anti.split("").map((b) => COMP_RNA[b] ?? "?").join("");
    const isComplete = anti.length === 3;
    const aa = isComplete ? (CODON_TABLE[mrna] ?? "?") : "—";
    const anticodon = isComplete && aa !== "STOP"
      ? mrna.split("").map((b) => COMP_TRNA[b] ?? "?").join("")
      : "—";
    codons.push({ antisense: anti, sense, mrna, anticodon, aa, isComplete });
    if (isComplete && !stopped) {
      if (aa === "STOP") {
        stopped = true;
        hasStop = true;
      } else {
        aaChain.push(aa);
      }
    }
  }
  return { codons, aaChain, hasStop };
}

function CodonMutationSandbox() {
  const [mode, setMode] = useState<MutMode>("sub");
  const [pos, setPos] = useState<number>(8); // 1-based position (8 = middle base of codon 3 CTC→CAC sickle-cell!)
  const [base, setBase] = useState<Base>("A");

  const wild = useMemo(() => translateAntisense(WILD_ANTISENSE), []);

  const { mutatedSeq, mutResult, rows, mutClass, mutTone, changedCount, summary } = useMemo(() => {
    const idx = pos - 1;
    let seq = WILD_ANTISENSE;
    if (mode === "sub") {
      seq = WILD_ANTISENSE.slice(0, idx) + base + WILD_ANTISENSE.slice(idx + 1);
    } else if (mode === "ins") {
      seq = WILD_ANTISENSE.slice(0, idx) + base + WILD_ANTISENSE.slice(idx);
    } else {
      seq = WILD_ANTISENSE.slice(0, idx) + WILD_ANTISENSE.slice(idx + 1);
    }

    const res = translateAntisense(seq);
    const firstStopIdx = res.codons.findIndex((c) => c.isComplete && c.aa === "STOP");
    const builtRows: CodonRow[] = res.codons.map((c, ci) => {
      const wildAa = wild.codons[ci]?.aa ?? "—";
      const terminatedBefore = firstStopIdx >= 0 && ci > firstStopIdx;
      const changedFromWild = !terminatedBefore && c.aa !== wildAa;
      return {
        index: ci + 1,
        ...c,
        terminatedBefore,
        changedFromWild,
      };
    });

    const isUnchangedSeq = seq === WILD_ANTISENSE;
    const wildChain = wild.aaChain;
    const mutChain = res.aaChain;
    const maxLen = Math.max(wildChain.length, mutChain.length);
    let diffs = 0;
    for (let i = 0; i < maxLen; i++) {
      if (wildChain[i] !== mutChain[i]) diffs++;
    }

    let cls = "Wild-type (No Mutation)";
    let tone: "brand" | "good" | "bad" | "ink" = "good";
    let cap =
      "No mutation applied: the 3'→5' antisense template transcribes into 5'-AUG-GGU-GAG-GAG-UAA-3', translating a normal 4-amino-acid Met–Gly–Glu–Glu chain before terminating at UAA.";

    if (!isUnchangedSeq) {
      if (mode === "ins" || mode === "del") {
        cls = "Frameshift (Indel)";
        tone = "bad";
        cap =
          `${mode === "ins" ? `Inserting ${base}` : `Deleting base ${WILD_ANTISENSE[idx]}`} at position ${pos} shifts the non-overlapping triplet reading frame for every downstream codon, altering ${diffs} amino acid position${diffs === 1 ? "" : "s"} and disrupting the original terminal stop codon.`;
      } else if (res.aaChain.length < wildChain.length) {
        cls = "Nonsense (Premature STOP)";
        tone = "bad";
        cap =
          `Substituting position ${pos} (${WILD_ANTISENSE[idx]} → ${base}) converts codon ${Math.floor(idx / 3) + 1} into a premature STOP codon (${res.codons[Math.floor(idx / 3)]?.mrna}), truncating the polypeptide from ${wildChain.length} to ${res.aaChain.length} amino acids!`;
      } else if (diffs === 0 && res.hasStop === wild.hasStop) {
        cls = "Silent (Synonymous)";
        tone = "good";
        const cNum = Math.floor(idx / 3);
        cap =
          `Substituting position ${pos} (${WILD_ANTISENSE[idx]} → ${base}) changes mRNA codon ${cNum + 1} from ${wild.codons[cNum]?.mrna} to ${res.codons[cNum]?.mrna}, yet both code for **${res.codons[cNum]?.aa}** thanks to the **degeneracy** of the genetic code — zero change to primary structure!`;
      } else if (!res.hasStop && wild.hasStop) {
        cls = "Readthrough (Stop Lost)";
        tone = "bad";
        const cNum = Math.floor(idx / 3);
        cap =
          `Substituting position ${pos} mutates the terminal STOP codon (${wild.codons[cNum]?.mrna}) into ${res.codons[cNum]?.mrna} (${res.codons[cNum]?.aa}), causing the ribosome to read past the normal end of the gene!`;
      } else {
        cls = "Missense Substitution";
        tone = "brand";
        const cNum = Math.floor(idx / 3);
        const wAa = wild.codons[cNum]?.aa;
        const mAa = res.codons[cNum]?.aa;
        const isSickle = pos === 8 && base === "A";
        cap = isSickle
          ? `Classic **sickle-cell β-globin** missense mutation! Changing antisense CTC → CAC alters mRNA GAG → GUG, replacing hydrophilic **Glu** with hydrophobic **Val** so deoxy-haemoglobin aggregates into rigid fibres.`
          : `Substituting position ${pos} (${WILD_ANTISENSE[idx]} → ${base}) changes mRNA codon ${cNum + 1} from ${wild.codons[cNum]?.mrna} (${wAa}) to ${res.codons[cNum]?.mrna} (${mAa}), swapping a single amino acid in the polypeptide.`;
      }
    }

    return {
      mutatedSeq: seq,
      mutResult: res,
      rows: builtRows,
      mutClass: cls,
      mutTone: tone,
      changedCount: diffs,
      summary: cap,
    };
  }, [base, mode, pos, wild]);

  const applyPreset = (m: MutMode, p: number, b: Base) => {
    setMode(m);
    setPos(p);
    setBase(b);
  };

  return (
    <WidgetFrame
      title="DNA → mRNA → Polypeptide Codon & Mutation Sandbox [SL]"
      tryThis={[
        "Click **Sickle-cell Missense** (pos 8, T → A) and verify mRNA changes `GAG → GUG` (Glu → Val).",
        "Click **Silent Wobble** (pos 6, A → G) to see degeneracy keep Gly unchanged despite a mutated base.",
        "Compare **Premature Nonsense** with **Frameshift Deletion** at position 4.",
      ]}
      caption={
        <div>
          <p className="font-bold text-ink">{mutClass}</p>
          <p className="mt-1 text-ink-2">{summary.replace(/\*\*/g, "")}</p>
          <p className="mt-1.5 text-xs text-ink-2">
            Active antisense template (3&apos;→5&apos;): <code className="font-mono font-bold text-ink">{mutatedSeq}</code> ({mutatedSeq.length} nt)
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        {/* Preset buttons */}
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => applyPreset("sub", 8, "T")}
            className="chip px-2.5 py-1 text-xs font-bold hover:bg-brand-soft hover:text-brand"
          >
            Wild-type Reset
          </button>
          <button
            type="button"
            onClick={() => applyPreset("sub", 8, "A")}
            className="chip px-2.5 py-1 text-xs font-bold hover:bg-brand-soft hover:text-brand"
          >
            Sickle-cell Missense
          </button>
          <button
            type="button"
            onClick={() => applyPreset("sub", 6, "G")}
            className="chip px-2.5 py-1 text-xs font-bold hover:bg-brand-soft hover:text-brand"
          >
            Silent Wobble
          </button>
          <button
            type="button"
            onClick={() => applyPreset("sub", 7, "A")}
            className="chip px-2.5 py-1 text-xs font-bold hover:bg-brand-soft hover:text-brand"
          >
            Premature Nonsense
          </button>
          <button
            type="button"
            onClick={() => applyPreset("del", 4, "C")}
            className="chip px-2.5 py-1 text-xs font-bold hover:bg-brand-soft hover:text-brand"
          >
            Frameshift Deletion
          </button>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 gap-3 rounded-xl bg-surface-2 p-3 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Mutation Type</div>
            <Segmented<MutMode>
              label="Mutation type"
              value={mode}
              onChange={setMode}
              options={[
                { value: "sub", label: "Substitute" },
                { value: "ins", label: "Insert" },
                { value: "del", label: "Delete" },
              ]}
            />
          </div>
          <div className="space-y-2">
            <Stepper
              label={`DNA Base Position (wild: ${WILD_ANTISENSE[pos - 1]})`}
              value={pos}
              min={1}
              max={WILD_ANTISENSE.length}
              onChange={setPos}
            />
            {mode !== "del" ? (
              <div className="flex items-center justify-between gap-2 pt-1">
                <span className="text-xs font-bold uppercase tracking-wide text-ink-2">
                  {mode === "sub" ? "New Base" : "Inserted Base"}
                </span>
                <Segmented<Base>
                  label="DNA base"
                  value={base}
                  onChange={setBase}
                  options={[
                    { value: "A", label: "A" },
                    { value: "T", label: "T" },
                    { value: "C", label: "C" },
                    { value: "G", label: "G" },
                  ]}
                />
              </div>
            ) : null}
          </div>
        </div>

        {/* Clickable antisense base strip */}
        <div className="space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            Tap any base on Wild-type Antisense DNA (3&apos; → 5&apos;) to target mutation:
          </div>
          <div className="grid grid-cols-5 gap-1 sm:grid-cols-[repeat(15,minmax(0,1fr))]">
            {WILD_ANTISENSE.split("").map((b, i) => {
              const isSelected = i + 1 === pos;
              return (
                <button
                  key={`${i}-${b}`}
                  type="button"
                  onClick={() => setPos(i + 1)}
                  aria-label={`Select base position ${i + 1} (${b})`}
                  className={`flex flex-col items-center rounded-lg border px-1 py-1 text-xs font-extrabold transition ${
                    isSelected
                      ? "border-brand bg-brand text-white shadow-sm"
                      : "border-line bg-surface text-ink hover:border-brand"
                  }`}
                >
                  <span className="text-[10px] opacity-75">{i + 1}</span>
                  <span className="font-mono text-sm">{b}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Codon-by-codon translation cards (wraps cleanly at 390px) */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {rows.map((r) => {
            const cardStyle = r.terminatedBefore
              ? "border-line bg-surface-2 opacity-55"
              : r.aa === "STOP"
                ? "border-red-400 bg-red-50/70 dark:bg-red-950/30"
                : r.changedFromWild
                  ? "border-amber-400 bg-amber-50/80 dark:bg-amber-950/30"
                  : "border-line bg-surface";
            return (
              <div key={r.index} className={`rounded-xl border p-2.5 text-center ${cardStyle}`}>
                <div className="text-[10px] font-bold uppercase tracking-wide text-ink-2">Codon {r.index}</div>
                <div className="mt-1 space-y-0.5 font-mono text-xs">
                  <div className="text-ink-2">3&apos; {r.antisense} 5&apos;</div>
                  <div className="text-[11px] text-ink-2">5&apos; {r.sense} 3&apos;</div>
                  <div className="font-extrabold text-brand">mRNA: {r.mrna}</div>
                  <div className="text-[11px] text-ink-2">tRNA: {r.anticodon}</div>
                </div>
                <div
                  className={`mt-2 rounded-lg px-2 py-1 text-xs font-extrabold ${
                    r.terminatedBefore
                      ? "bg-surface text-ink-2"
                      : r.aa === "STOP"
                        ? "bg-red-600 text-white"
                        : r.changedFromWild
                          ? "bg-amber-500 text-white"
                          : "bg-emerald-600 text-white"
                  }`}
                >
                  {r.terminatedBefore ? "Untranslated" : r.aa}
                </div>
              </div>
            );
          })}
        </div>

        {/* Readouts */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Mutation Class" value={mutClass.split(" ")[0]} tone={mutTone} />
          <Readout label="Polypeptide Length" value={`${mutResult.aaChain.length} aa`} tone="ink" />
          <Readout
            label="Altered AA Positions"
            value={changedCount}
            tone={changedCount === 0 ? "good" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: Water Potential (Ψ = Ψ_s + Ψ_p) & Plant Osmosis Simulator [HL]
// =============================================================================
type CellKind = "plant" | "animal";

function WaterPotentialSimulator() {
  const [cellKind, setCellKind] = useState<CellKind>("plant");
  const [psiExt, setPsiExt] = useState<number>(0);
  const [psiS, setPsiS] = useState<number>(-600);

  const state = useMemo(() => {
    // Compare external solution against an initially flaccid cell (Ψ_init = Ψ_s, Ψ_p = 0)
    const diff = psiExt - psiS; // > 0 => hypotonic (water IN); == 0 => isotonic; < 0 => hypertonic (water OUT)
    if (cellKind === "plant") {
      if (diff > 0) {
        const eqPsiP = diff; // equilibrium Ψ_cell = Ψ_ext => Ψ_s + Ψ_p = Ψ_ext
        const eqPsiCell = psiS + eqPsiP;
        return {
          tonicity: "Hypotonic Bath",
          cellStatus: psiExt === 0 ? "Full Turgor" : "Turgid",
          shortOutcome: "Turgid",
          tone: "good" as const,
          eqPsiP,
          eqPsiCell,
          flowDir: "in" as const,
          caption: `External solution (${psiExt} kPa) has a higher (less negative) water potential than the cell's solute potential (${psiS} kPa). Net water enters by osmosis, swelling the vacuole until inward cellulose wall pressure reaches Ψ_p = +${eqPsiP} kPa and total Ψ_cell = ${eqPsiCell} kPa.`,
        };
      }
      if (diff === 0) {
        return {
          tonicity: "Isotonic Bath",
          cellStatus: "Incipient Plasmolysis",
          shortOutcome: "Flaccid",
          tone: "brand" as const,
          eqPsiP: 0,
          eqPsiCell: psiS,
          flowDir: "eq" as const,
          caption: `External Ψ (${psiExt} kPa) exactly matches internal Ψ_s (${psiS} kPa). At incipient plasmolysis, Ψ_p = 0 kPa and Ψ_cell = Ψ_s = ${psiS} kPa: water crosses both ways at equal rates with zero NET flow.`,
        };
      }
      return {
        tonicity: "Hypertonic Bath",
        cellStatus: "Plasmolysed",
        shortOutcome: "Plasmolysed",
        tone: "bad" as const,
        eqPsiP: 0,
        eqPsiCell: psiExt,
        flowDir: "out" as const,
        caption: `External Ψ (${psiExt} kPa) is lower (more negative) than the cell (${psiS} kPa). Net water leaves the vacuole by osmosis, Ψ_p stays 0 kPa, and the plasma membrane pulls away from the cellulose wall (plasmolysis) until vacuole solutes concentrate to ${psiExt} kPa.`,
      };
    }

    // Animal RBC (no cellulose wall => Ψ_p ≈ 0 always)
    if (diff > 0) {
      return {
        tonicity: "Hypotonic Bath",
        cellStatus: "Lysis (Bursts!)",
        shortOutcome: "Lysis!",
        tone: "bad" as const,
        eqPsiP: 0,
        eqPsiCell: psiS,
        flowDir: "in" as const,
        caption: `External Ψ (${psiExt} kPa) is higher than erythrocyte cytoplasm (${psiS} kPa). Net water enters rapidly by osmosis; lacking a rigid cell wall to generate +Ψ_p, the red blood cell swells and ruptures (lysis / haemolysis)!`,
      };
    }
    if (diff === 0) {
      return {
        tonicity: "Isotonic Bath",
        cellStatus: "Normal (Dynamic Eq.)",
        shortOutcome: "Normal",
        tone: "good" as const,
        eqPsiP: 0,
        eqPsiCell: psiS,
        flowDir: "eq" as const,
        caption: `External Ψ (${psiExt} kPa) equals erythrocyte Ψ (${psiS} kPa) — just like 0.9% medical IV saline. Water moves inward and outward at equal rates (zero net osmotic flow), preserving normal biconcave shape.`,
      };
    }
    return {
      tonicity: "Hypertonic Bath",
      cellStatus: "Crenated (Shrivelled)",
      shortOutcome: "Crenated",
      tone: "bad" as const,
      eqPsiP: 0,
      eqPsiCell: psiExt,
      flowDir: "out" as const,
      caption: `External Ψ (${psiExt} kPa) is more negative than erythrocyte cytoplasm (${psiS} kPa). Net water exits by osmosis, causing the wall-less red blood cell to shrink and crumple (crenation).`,
    };
  }, [cellKind, psiExt, psiS]);

  // Map water potential [0 .. -1200] kPa to vertical SVG coordinate y [28 .. 176]
  const yOfPsi = (v: number) => 28 + (Math.min(1200, Math.max(0, -v)) / 1200) * 148;
  const yExt = yOfPsi(psiExt);
  const yInit = yOfPsi(psiS);

  // Number of external solute dots scales visually with |Ψ_ext|
  const soluteDots = Math.round((Math.abs(psiExt) / 1200) * 24);
  const dotCoords: Array<[number, number]> = [
    [22, 34], [46, 26], [238, 30], [262, 42], [24, 174], [52, 184],
    [232, 182], [258, 170], [20, 92], [266, 98], [26, 134], [260, 136],
    [82, 24], [142, 22], [198, 25], [88, 186], [146, 188], [202, 185],
    [34, 62], [250, 68], [32, 156], [252, 152], [116, 28], [174, 184],
  ];

  // Plant protoplast geometry shrinks dynamically with state
  const inset = state.flowDir === "in" ? 5 : state.flowDir === "eq" ? 11 : 25;
  const vacPad = state.flowDir === "in" ? 13 : state.flowDir === "eq" ? 24 : 38;

  return (
    <WidgetFrame
      title="Water Potential (Ψ = Ψ_s + Ψ_p) & Osmosis Simulator [HL]"
      tryThis={[
        "Set **External Ψ = 0 kPa** (pure water) and toggle between **Plant Cell** and **Animal RBC** to see why walls prevent lysis.",
        "Match **External Ψ** exactly to **Cell Ψ_s** to hit **incipient plasmolysis** ({{Ψ_p = 0}}, {{Ψ = Ψ_s}}).",
        "Drag **External Ψ** below **Cell Ψ_s** (e.g. −1000 kPa vs −600 kPa) and check the downhill arrow on the Ψ thermometer.",
      ]}
      caption={
        <div>
          <p className="font-bold text-ink">
            {state.tonicity} → {state.cellStatus}
          </p>
          <p className="mt-1 text-ink-2">{state.caption}</p>
        </div>
      }
    >
      <div className="space-y-4">
        {/* Cell type toggle + bath presets */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<CellKind>
            label="Cell type"
            value={cellKind}
            onChange={setCellKind}
            options={[
              { value: "plant", label: "Plant Cell (Wall)" },
              { value: "animal", label: "Animal RBC (No Wall)" },
            ]}
          />
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setPsiExt(0)}
              className="chip px-2.5 py-1 text-xs font-bold hover:bg-brand-soft hover:text-brand"
            >
              Pure Water (0)
            </button>
            <button
              type="button"
              onClick={() => setPsiExt(psiS)}
              className="chip px-2.5 py-1 text-xs font-bold hover:bg-brand-soft hover:text-brand"
            >
              Isotonic ({psiS})
            </button>
            <button
              type="button"
              onClick={() => setPsiExt(-1000)}
              className="chip px-2.5 py-1 text-xs font-bold hover:bg-brand-soft hover:text-brand"
            >
              Hypertonic (−1000)
            </button>
          </div>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 gap-3 rounded-xl bg-surface-2 p-3 sm:grid-cols-2">
          <Slider
            label={<span>External Solution <M>{"Ψ_ext"}</M></span>}
            value={psiExt}
            min={-1200}
            max={0}
            step={50}
            onChange={setPsiExt}
            format={(v) => `${v === 0 ? "0" : `−${Math.abs(v)}`} kPa`}
          />
          <Slider
            label={<span>Initial Cell Solute <M>{"Ψ_s"}</M></span>}
            value={psiS}
            min={-1000}
            max={-200}
            step={50}
            onChange={setPsiS}
            format={(v) => `−${Math.abs(v)} kPa`}
          />
        </div>

        {/* Live biophysical SVG */}
        <div className="overflow-hidden rounded-xl border border-line bg-surface">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 420 205"
            className="h-auto w-full"
            role="img"
            aria-label={`${cellKind} cell in ${state.tonicity} with external water potential ${psiExt} kPa and cell solute potential ${psiS} kPa showing ${state.cellStatus}`}
          >
            {/* Bathing chamber */}
            <rect x="8" y="10" width="272" height="185" rx="12" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="144" y="24" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0369a1">
              Bathing Solution: Ψ_ext = {psiExt === 0 ? "0" : `−${Math.abs(psiExt)}`} kPa
            </text>

            {/* Solute particles in bath */}
            {dotCoords.slice(0, soluteDots).map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.2" fill="#0284c7" opacity="0.55" />
            ))}

            {/* Cell visual */}
            {cellKind === "plant" ? (
              <g>
                {/* Rigid cellulose cell wall */}
                <rect x="64" y="46" width="160" height="114" rx="14" fill="#fef3c7" stroke="#15803d" strokeWidth="5" />
                {/* Protoplast / plasma membrane */}
                <rect
                  x={64 + inset}
                  y={46 + inset}
                  width={160 - inset * 2}
                  height={114 - inset * 2}
                  rx={state.flowDir === "out" ? 22 : 10}
                  fill="#bbf7d0"
                  stroke={state.flowDir === "out" ? "#dc2626" : "#16a34a"}
                  strokeWidth="2"
                  strokeDasharray={state.flowDir === "eq" ? "4 2" : undefined}
                />
                {/* Central vacuole */}
                <rect
                  x={64 + vacPad}
                  y={46 + vacPad}
                  width={Math.max(36, 160 - vacPad * 2)}
                  height={Math.max(26, 114 - vacPad * 2)}
                  rx="10"
                  fill="#38bdf8"
                  stroke="#0284c7"
                  strokeWidth="1.5"
                />
                <text x="144" y="106" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0c4a6e">
                  {state.flowDir === "in" ? "Turgid Vacuole" : state.flowDir === "eq" ? "Flaccid" : "Plasmolysed"}
                </text>
              </g>
            ) : (
              <g>
                {state.flowDir === "in" ? (
                  /* Lysed bursting RBC */
                  <g>
                    <circle cx="144" cy="103" r="46" fill="#fecaca" stroke="#dc2626" strokeWidth="3" strokeDasharray="12 6 8 5" />
                    <path d="M102 74 L86 60 M186 72 L202 58 M188 134 L204 148 M100 132 L84 146" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
                    <text x="144" y="106" textAnchor="middle" fontSize="11" fontWeight="800" fill="#991b1b">
                      LYSIS (BURST!)
                    </text>
                  </g>
                ) : state.flowDir === "eq" ? (
                  /* Normal biconcave RBC */
                  <g>
                    <ellipse cx="144" cy="103" rx="48" ry="36" fill="#ef4444" stroke="#991b1b" strokeWidth="2.5" />
                    <ellipse cx="144" cy="103" rx="22" ry="14" fill="#fca5a5" opacity="0.7" />
                    <text x="144" y="107" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7f1d1d">
                      Normal RBC
                    </text>
                  </g>
                ) : (
                  /* Crenated spiky RBC */
                  <g>
                    <polygon
                      points="144,68 156,82 178,76 168,94 186,104 166,114 174,132 154,124 144,138 134,124 114,132 122,114 102,104 120,94 110,76 132,82"
                      fill="#dc2626"
                      stroke="#7f1d1d"
                      strokeWidth="2"
                    />
                    <text x="144" y="107" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#ffffff">
                      Crenated
                    </text>
                  </g>
                )}
              </g>
            )}

            {/* Directional water arrows */}
            {state.flowDir === "in" ? (
              <g>
                <line x1="28" y1="103" x2="58" y2="103" stroke="#0284c7" strokeWidth="3" />
                <polygon points="56,97 66,103 56,109" fill="#0284c7" />
                <line x1="260" y1="103" x2="230" y2="103" stroke="#0284c7" strokeWidth="3" />
                <polygon points="232,97 222,103 232,109" fill="#0284c7" />
                <text x="144" y="182" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0369a1">
                  Net H₂O moves IN (down Ψ gradient)
                </text>
              </g>
            ) : state.flowDir === "out" ? (
              <g>
                <line x1="62" y1="103" x2="32" y2="103" stroke="#dc2626" strokeWidth="3" />
                <polygon points="34,97 24,103 34,109" fill="#dc2626" />
                <line x1="226" y1="103" x2="256" y2="103" stroke="#dc2626" strokeWidth="3" />
                <polygon points="254,97 264,103 254,109" fill="#dc2626" />
                <text x="144" y="182" textAnchor="middle" fontSize="10" fontWeight="700" fill="#b91c1c">
                  Net H₂O moves OUT (down Ψ gradient)
                </text>
              </g>
            ) : (
              <text x="144" y="182" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f766e">
                Dynamic equilibrium: H₂O IN = H₂O OUT (zero net flow)
              </text>
            )}

            {/* Right panel: Vertical Water Potential Number Line */}
            <rect x="290" y="10" width="122" height="185" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="351" y="23" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#334155">
              Ψ Scale (kPa)
            </text>
            <line x1="336" y1="28" x2="336" y2="176" stroke="#64748b" strokeWidth="2" />
            {[0, -400, -800, -1200].map((tick) => {
              const ty = yOfPsi(tick);
              return (
                <g key={tick}>
                  <line x1="331" y1={ty} x2="341" y2={ty} stroke="#64748b" strokeWidth="1.5" />
                  <text x="328" y={ty + 3} textAnchor="end" fontSize="8.5" fill="#475569">
                    {tick === 0 ? "0" : `−${Math.abs(tick)}`}
                  </text>
                </g>
              );
            })}

            {/* Marker for External Ψ */}
            <circle cx="336" cy={yExt} r="5" fill="#0284c7" />
            <text x="346" y={yExt + 3} fontSize="8.5" fontWeight="700" fill="#0369a1">
              Bath ({psiExt === 0 ? "0" : `−${Math.abs(psiExt)}`})
            </text>

            {/* Marker for Initial Cell Ψ_s */}
            <circle cx="336" cy={yInit} r="5" fill="#16a34a" />
            <text x="346" y={yInit + (Math.abs(yInit - yExt) < 12 ? 12 : 3)} fontSize="8.5" fontWeight="700" fill="#15803d">
              Cell Ψs (−{Math.abs(psiS)})
            </text>

            {/* Downhill gradient arrow */}
            {Math.abs(yExt - yInit) >= 12 ? (
              <g>
                <line
                  x1="404"
                  y1={Math.min(yExt, yInit) + 4}
                  x2="404"
                  y2={Math.max(yExt, yInit) - 4}
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                <polygon
                  points={`400,${Math.max(yExt, yInit) - 6} 408,${Math.max(yExt, yInit) - 6} 404,${Math.max(yExt, yInit) + 1}`}
                  fill="#dc2626"
                />
              </g>
            ) : null}
            <text x="351" y="190" textAnchor="middle" fontSize="8" fill="#64748b">
              H₂O flows downhill ↓
            </text>
          </svg>
        </div>

        {/* Quantitative readouts */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Cell Ψ_s" value={`−${Math.abs(psiS)} kPa`} tone="ink" />
          <Readout
            label="Equilibrium Ψ_p"
            value={state.eqPsiP > 0 ? `+${state.eqPsiP} kPa` : "0 kPa"}
            tone={state.eqPsiP > 0 ? "good" : "ink"}
          />
          <Readout
            label="Equilibrium Ψ_cell"
            value={`${state.eqPsiCell === 0 ? "0" : `−${Math.abs(state.eqPsiCell)}`} kPa`}
            tone="brand"
          />
          <Readout label="Cell Outcome" value={state.shortOutcome} tone={state.tone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "codon-mutation-sandbox",
    title: "DNA → mRNA → Polypeptide Codon & Mutation Sandbox [SL]",
    blurb:
      "Mutate any base on a 15-nucleotide antisense DNA template by substitution, insertion, or deletion and watch codons, tRNA anticodons, and amino acids respond live.",
    Component: CodonMutationSandbox,
  },
  {
    id: "water-potential-simulator",
    title: "Water Potential (Ψ = Ψ_s + Ψ_p) & Plant Osmosis Simulator [HL]",
    blurb:
      "Adjust external water potential and cell solute potential across plant and animal cells to explore turgor, incipient plasmolysis, plasmolysis, lysis, and crenation.",
    Component: WaterPotentialSimulator,
  },
];

export default widgets;
