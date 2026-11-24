"use client";

import { useMemo, useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: HARDY–WEINBERG EQUILIBRIUM & SELECTION SIMULATOR [HL]
// =============================================================================
type SelectionMode = "equilibrium" | "directional" | "stabilizing" | "disruptive";

interface GenPoint {
  gen: number;
  p: number;
  q: number;
  p2: number;
  twoPQ: number;
  q2: number;
}

function simulateHW(q0: number, mode: SelectionMode, s: number, generations: number): GenPoint[] {
  const wAA = mode === "stabilizing" ? 1 - 0.6 * s : 1;
  const wAa = mode === "disruptive" ? 1 - s : 1;
  const waa = mode === "directional" || mode === "stabilizing" ? 1 - s : 1;

  const pts: GenPoint[] = [];
  let q = q0;
  for (let gen = 0; gen <= generations; gen++) {
    const p = 1 - q;
    pts.push({ gen, p, q, p2: p * p, twoPQ: 2 * p * q, q2: q * q });
    if (mode !== "equilibrium") {
      const wBar = p * p * wAA + 2 * p * q * wAa + q * q * waa;
      q = wBar > 0 ? (p * q * wAa + q * q * waa) / wBar : q;
      q = Math.max(0.0001, Math.min(0.9999, q));
    }
  }
  return pts;
}

function HardyWeinbergSelectionSim() {
  const [mode, setMode] = useState<SelectionMode>("equilibrium");
  const [q0, setQ0] = useState(0.4);
  const [s, setS] = useState(0.5);
  const [gens, setGens] = useState(25);
  const [popSize, setPopSize] = useState(2000);

  const series = useMemo(() => simulateHW(q0, mode, s, gens), [q0, mode, s, gens]);
  const last = series[series.length - 1];

  const px = (g: number) => 42 + (gens > 0 ? (g / gens) * 288 : 0);
  const py = (v: number) => 184 - v * 150;

  const pathOf = (fn: (pt: GenPoint) => number) =>
    series.map((pt, i) => `${i === 0 ? "M" : "L"}${px(pt.gen).toFixed(1)} ${py(fn(pt)).toFixed(1)}`).join(" ");

  const nAA = Math.round(last.p2 * popSize);
  const nAa = Math.round(last.twoPQ * popSize);
  const naa = Math.max(0, popSize - nAA - nAa);

  const modeSummary =
    mode === "equilibrium"
      ? `No selection acts (all fitnesses = 1.00), so allele frequencies stay frozen at p = ${last.p.toFixed(2)} and q = ${last.q.toFixed(2)} across all ${gens} generations (Hardy–Weinberg Equilibrium).`
      : mode === "directional"
        ? `Directional selection against homozygous recessive aa (fitness ${(1 - s).toFixed(2)}) reduces q from ${q0.toFixed(2)} to ${last.q.toFixed(2)}. Notice how elimination slows dramatically once q is small because remaining recessive alleles hide inside ${nAa.toLocaleString()} heterozygous carriers (2pq = ${(last.twoPQ * 100).toFixed(1)}%).`
        : mode === "stabilizing"
          ? `Heterozygote advantage (Aa fitness 1.00 vs AA ${(1 - 0.6 * s).toFixed(2)}, aa ${(1 - s).toFixed(2)}) drives the gene pool toward a balanced polymorphism at q* = 0.375 — similar to sickle-cell trait in malaria-endemic zones.`
          : `Disruptive selection against heterozygotes (Aa fitness ${(1 - s).toFixed(2)}) creates an unstable threshold at q = 0.50: starting at q₀ = ${q0.toFixed(2)} pushes q toward ${q0 < 0.5 ? "0 (loss of a)" : q0 > 0.5 ? "1 (fixation of a)" : "the knife-edge 0.50 balance"}.`;

  return (
    <WidgetFrame
      title="Hardy–Weinberg Equilibrium & Selection Simulator [HL]"
      tryThis={[
        "Set **HWE (No Selection)** and drag {{q_0 = 0.50}} — confirm heterozygotes {{2pq}} peak at **0.50** (50% carriers).",
        "Switch to **Directional vs aa** with strength {{s = 0.80}} over 35 generations — watch {{q}} drop fast at first, then linger inside hidden carriers.",
        "Try **Heterozygote Adv.** from both {{q_0 = 0.10}} and {{q_0 = 0.85}} — observe both converge toward **q ≈ 0.38**.",
      ]}
      caption={modeSummary}
    >
      <div className="space-y-4">
        <Segmented
          label="Selection mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "equilibrium", label: "HWE (None)" },
            { value: "directional", label: "Directional vs aa" },
            { value: "stabilizing", label: "Heterozygote Adv." },
            { value: "disruptive", label: "Disruptive vs Aa" },
          ]}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider label="Initial recessive allele q₀" value={q0} min={0.05} max={0.95} step={0.05} onChange={setQ0} format={(v) => v.toFixed(2)} />
          <Slider label="Population size N" value={popSize} min={1000} max={10000} step={1000} onChange={setPopSize} format={(v) => v.toLocaleString()} />
          {mode !== "equilibrium" ? (
            <Slider label="Selection strength s" value={s} min={0.1} max={0.9} step={0.05} onChange={setS} format={(v) => v.toFixed(2)} />
          ) : null}
          <Stepper label="Generations" value={gens} min={5} max={40} step={5} onChange={setGens} />
        </div>

        <div className="rounded-xl border border-line bg-surface-2/60 p-2 sm:p-3">
          <svg
            viewBox="0 0 560 230"
            className="h-auto w-full"
            role="img"
            aria-label={`Hardy-Weinberg trajectory over ${gens} generations ending at p equals ${last.p.toFixed(2)}, q equals ${last.q.toFixed(2)}, and carrier frequency 2pq equals ${last.twoPQ.toFixed(2)}`}
          >
            {/* Left panel: allele & 2pq trajectories */}
            <rect x="42" y="34" width="288" height="150" rx="6" className="fill-surface stroke-line" />
            {[0, 0.25, 0.5, 0.75, 1].map((y) => (
              <g key={y}>
                <line x1="42" x2="330" y1={py(y)} y2={py(y)} className="stroke-line" strokeDasharray={y === 0 || y === 1 ? undefined : "3 3"} />
                <text x="36" y={py(y) + 3} fontSize="9.5" textAnchor="end" className="fill-ink-2">
                  {y.toFixed(2)}
                </text>
              </g>
            ))}
            <text x="186" y="20" fontSize="11" fontWeight="700" textAnchor="middle" className="fill-ink">
              Allele &amp; Carrier Frequencies Over Time
            </text>
            <path d={pathOf((pt) => pt.p)} fill="none" stroke="var(--good)" strokeWidth="2.5" />
            <path d={pathOf((pt) => pt.q)} fill="none" stroke="var(--bad)" strokeWidth="2.5" />
            <path d={pathOf((pt) => pt.twoPQ)} fill="none" stroke="var(--info)" strokeWidth="2.2" strokeDasharray="5 3" />

            <text x="42" y="199" fontSize="9.5" textAnchor="middle" className="fill-ink-2">Gen 0</text>
            <text x="186" y="199" fontSize="9.5" textAnchor="middle" className="fill-ink-2">Gen {Math.round(gens / 2)}</text>
            <text x="330" y="199" fontSize="9.5" textAnchor="middle" className="fill-ink-2">Gen {gens}</text>

            {/* Legend */}
            <line x1="56" y1="216" x2="72" y2="216" stroke="var(--good)" strokeWidth="2.5" />
            <text x="76" y="219" fontSize="9.5" className="fill-ink">p (A)</text>
            <line x1="126" y1="216" x2="142" y2="216" stroke="var(--bad)" strokeWidth="2.5" />
            <text x="146" y="219" fontSize="9.5" className="fill-ink">q (a)</text>
            <line x1="196" y1="216" x2="214" y2="216" stroke="var(--info)" strokeWidth="2.2" strokeDasharray="5 3" />
            <text x="218" y="219" fontSize="9.5" className="fill-ink">2pq (Aa carriers)</text>

            {/* Right panel: Gen G genotype bar chart */}
            <text x="456" y="20" fontSize="11" fontWeight="700" textAnchor="middle" className="fill-ink">
              Gen {gens} Genotypes (N = {popSize.toLocaleString()})
            </text>
            <line x1="364" y1="184" x2="548" y2="184" className="stroke-ink-2" strokeWidth="1.2" />
            {[
              { label: "AA (p²)", val: last.p2, count: nAA, x: 376, fill: "var(--good)" },
              { label: "Aa (2pq)", val: last.twoPQ, count: nAa, x: 436, fill: "var(--info)" },
              { label: "aa (q²)", val: last.q2, count: naa, x: 496, fill: "var(--bad)" },
            ].map((b) => {
              const h = Math.max(2, b.val * 140);
              return (
                <g key={b.label}>
                  <rect x={b.x} y={184 - h} width="40" height={h} rx="4" fill={b.fill} opacity="0.88" />
                  <text x={b.x + 20} y={184 - h - 5} fontSize="9.5" fontWeight="700" textAnchor="middle" className="fill-ink">
                    {(b.val * 100).toFixed(1)}%
                  </text>
                  <text x={b.x + 20} y="198" fontSize="9.5" fontWeight="700" textAnchor="middle" className="fill-ink">
                    {b.label}
                  </text>
                  <text x={b.x + 20} y="212" fontSize="8.8" textAnchor="middle" className="fill-ink-2">
                    {b.count.toLocaleString()}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="p (Dominant A)" value={last.p.toFixed(3)} tone="good" />
          <Readout label="q (Recessive a)" value={last.q.toFixed(3)} tone="bad" />
          <Readout label="2pq (Carriers)" value={`${(last.twoPQ * 100).toFixed(1)}%`} tone="brand" />
          <Readout label="Carrier Count" value={nAa.toLocaleString()} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: MENSTRUAL CYCLE & HOMEOSTASIS FEEDBACK GRAPHER [SL / HL]
// =============================================================================
type SystemTab = "menstrual" | "glucose" | "osmoregulation";
type CycleCondition = "normal" | "pregnant" | "pill";
type DiabetesCondition = "healthy" | "type1" | "type2";

function gauss(x: number, mu: number, sigma: number): number {
  const z = (x - mu) / sigma;
  return Math.exp(-0.5 * z * z);
}

function menstrualHormones(day: number, cond: CycleCondition) {
  if (cond === "pill") {
    return {
      fsh: 0.14,
      lh: 0.12,
      oestrogen: 0.42,
      progesterone: 0.56,
      endometrium: 0.48,
    };
  }
  const fsh = 0.24 + 0.24 * gauss(day, 5.5, 3.2) + 0.4 * gauss(day, 14, 1.1) + (cond === "normal" ? 0.16 * gauss(day, 28, 2.0) : 0);
  const lh = 0.15 + 0.82 * gauss(day, 14, 0.85);
  const oestrogen =
    0.16 +
    0.66 * gauss(day, 12.6, 2.4) +
    (cond === "pregnant" ? 0.45 * (1 / (1 + Math.exp(-(day - 18) / 2.2))) : 0.34 * gauss(day, 21.5, 3.3));
  const progesterone =
    cond === "pregnant"
      ? 0.08 + 0.82 * (1 / (1 + Math.exp(-(day - 16.5) / 1.5)))
      : 0.08 + 0.78 * gauss(day, 21.5, 3.6) * (day > 13.5 ? 1 : 0.15);
  const endometrium =
    day <= 5
      ? 0.72 - (day - 1) * 0.13
      : cond === "pregnant"
        ? Math.min(0.95, 0.22 + (day - 5) * 0.042)
        : day <= 25
          ? Math.min(0.88, 0.2 + (day - 5) * 0.036)
          : 0.88 - (day - 25) * 0.08;
  return { fsh, lh, oestrogen, progesterone, endometrium };
}

function MenstrualHomeostasisGrapher() {
  const [tab, setTab] = useState<SystemTab>("menstrual");
  const [day, setDay] = useState(14);
  const [cycleCond, setCycleCond] = useState<CycleCondition>("normal");
  const [carbLoad, setCarbLoad] = useState(70);
  const [diabCond, setDiabCond] = useState<DiabetesCondition>("healthy");
  const [fluidBal, setFluidBal] = useState(-1.0);

  // Menstrual data points
  const cyclePts = useMemo(() => {
    const arr: Array<{ d: number; fsh: number; lh: number; est: number; prog: number; endo: number }> = [];
    for (let d = 1; d <= 28; d += 0.5) {
      const h = menstrualHormones(d, cycleCond);
      arr.push({ d, fsh: h.fsh, lh: h.lh, est: h.oestrogen, prog: h.progesterone, endo: h.endometrium });
    }
    return arr;
  }, [cycleCond]);

  const curH = menstrualHormones(day, cycleCond);
  const cx = (d: number) => 42 + ((d - 1) / 27) * 494;
  const cy = (v: number) => 156 - v * 124;
  const cPath = (fn: (p: (typeof cyclePts)[number]) => number) =>
    cyclePts.map((p, i) => `${i === 0 ? "M" : "L"}${cx(p.d).toFixed(1)} ${cy(fn(p)).toFixed(1)}`).join(" ");

  const phaseLabel =
    cycleCond === "pill"
      ? "Suppressed"
      : day <= 5
        ? "Menstruation"
        : day <= 12
          ? "Follicular"
          : day <= 15
            ? "Ovulation"
            : cycleCond === "pregnant" && day >= 22
              ? "Pregnancy"
              : "Luteal";

  const feedbackLabel =
    cycleCond === "pill"
      ? "Negative"
      : day >= 12 && day <= 14
        ? "Positive"
        : "Negative";

  // Blood glucose curve (0..240 min)
  const glucosePts = useMemo(() => {
    const arr: Array<{ t: number; g: number }> = [];
    for (let t = 0; t <= 240; t += 10) {
      let g = 4.9;
      if (carbLoad === 0) {
        g = diabCond === "healthy" ? 4.4 - 0.3 * Math.sin((t / 240) * Math.PI) : diabCond === "type1" ? 7.8 : 6.8;
      } else {
        const amp = (carbLoad / 100) * (diabCond === "healthy" ? 3.2 : diabCond === "type1" ? 9.5 : 6.8);
        const tau = diabCond === "healthy" ? 42 : diabCond === "type1" ? 185 : 115;
        const base = diabCond === "healthy" ? 4.8 : diabCond === "type1" ? 7.6 : 6.6;
        g = base + amp * (t / 45) * Math.exp(1 - t / tau) * (t === 0 ? 0 : 1);
      }
      arr.push({ t, g: Math.max(3.2, Math.min(17.5, g)) });
    }
    return arr;
  }, [carbLoad, diabCond]);

  const peakG = Math.max(...glucosePts.map((p) => p.g));
  const gx = (t: number) => 46 + (t / 240) * 340;
  const gy = (g: number) => 176 - ((g - 2) / 16) * 144;
  const gPath = glucosePts.map((p, i) => `${i === 0 ? "M" : "L"}${gx(p.t).toFixed(1)} ${gy(p.g).toFixed(1)}`).join(" ");
  const insulinLevel = carbLoad === 0 ? 0.15 : diabCond === "type1" ? 0.04 : diabCond === "type2" ? 0.92 : 0.78 * (carbLoad / 100);
  const glucagonLevel = carbLoad === 0 ? 0.82 : 0.14;

  // Osmoregulation (HL)
  const osmolarity = Math.round(290 - fluidBal * 9); // 272 (overhydrated) .. 308 (dehydrated)
  const adhNorm = Math.max(0.08, Math.min(0.96, 0.5 - fluidBal * 0.22));
  const aquaCount = Math.max(1, Math.min(9, Math.round(adhNorm * 9)));
  const urineOsm = Math.round(120 + adhNorm * 1060); // 200 .. 1140 mOsm
  const urineRate = +(2.6 - adhNorm * 2.15).toFixed(2); // cm3/min

  const liveCaption =
    tab === "menstrual"
      ? cycleCond === "pill"
        ? "Synthetic oestrogen and progesterone in the combined pill maintain constant negative feedback on the hypothalamus and pituitary, suppressing FSH and LH so no follicle matures and ovulation is prevented."
        : day >= 12 && day <= 14
          ? `Day ${day}: Sustained high oestrogen from the Graafian follicle flips hypothalamic–pituitary control to positive feedback, triggering the sharp LH surge that causes ovulation on Day 14.`
          : day >= 24 && cycleCond === "pregnant"
            ? `Day ${day} (Pregnancy): Embryonic hCG rescues the corpus luteum so progesterone remains high, preventing menstruation and preserving the vascular endometrium.`
            : day >= 16
              ? `Day ${day} (Luteal Phase): The corpus luteum secretes progesterone, maintaining a thick secretory endometrium and exerting negative feedback to suppress FSH and LH.`
              : day <= 5
                ? `Day ${day} (Menstruation): Low progesterone and oestrogen after corpus luteum degeneration cause endometrial shedding while lifting negative feedback so FSH rises again.`
                : `Day ${day} (Follicular Phase): Rising FSH grows a dominant follicle, whose rising oestrogen repairs the endometrium and inhibits extra follicles via negative feedback.`
      : tab === "glucose"
        ? carbLoad === 0
          ? "Fasting state: low blood glucose stimulates pancreatic α cells to secrete glucagon, driving hepatic glycogenolysis and gluconeogenesis to prevent hypoglycaemia."
          : diabCond === "healthy"
            ? `Healthy post-meal response (${carbLoad} g carbs): pancreatic β cells secrete insulin, opening GLUT4 glucose uptake channels and stimulating liver glycogenesis to bring blood glucose swiftly back into 4.0–5.5 mmol dm⁻³.`
            : diabCond === "type1"
              ? `Type 1 diabetes: autoimmune destruction of pancreatic β cells eliminates insulin production — blood glucose spikes to ${peakG.toFixed(1)} mmol dm⁻³ and remains dangerously elevated (exceeding the kidney renal threshold → glycosuria).`
              : `Type 2 diabetes: β cells still secrete abundant insulin, but target-cell receptors show insulin resistance, delaying glucose clearance and keeping blood glucose elevated.`
        : fluidBal < 0
          ? `Dehydration (${fluidBal.toFixed(1)} L): blood osmolarity rises to ${osmolarity} mOsm kg⁻¹ → hypothalamic osmoreceptors trigger posterior pituitary ADH release → ${aquaCount} active aquaporin channels inserted into collecting duct membranes → water reabsorbed into hypertonic medulla → small volume (${urineRate} cm³ min⁻¹) of hypertonic urine (${urineOsm} mOsm kg⁻¹).`
          : fluidBal > 0
            ? `Overhydration (+${fluidBal.toFixed(1)} L): low blood osmolarity (${osmolarity} mOsm kg⁻¹) inhibits posterior pituitary ADH → few aquaporins remain in the collecting duct → minimal water reabsorption → large volume (${urineRate} cm³ min⁻¹) of dilute hypotonic urine (${urineOsm} mOsm kg⁻¹).`
            : "Balanced hydration (0.0 L): blood osmolarity sits right at the ~290 mOsm kg⁻¹ setpoint with baseline ADH maintaining isotonic fluid balance.";

  return (
    <WidgetFrame
      title="Menstrual Cycle & Homeostasis Feedback Grapher [SL / HL]"
      tryThis={[
        "Scrub to **Day 13–14** in Menstrual Cycle to locate the **oestrogen → LH positive feedback** switch.",
        "Toggle **Pregnancy (+hCG)** vs **Normal** at Day 27 to compare progesterone trajectories.",
        "Switch to **Blood Glucose** or **ADH & Nephron [HL]** to test diabetes responses and dehydration osmoregulation.",
      ]}
      caption={liveCaption}
    >
      <div className="space-y-4">
        <Segmented
          label="Homeostatic system"
          value={tab}
          onChange={setTab}
          options={[
            { value: "menstrual", label: "Menstrual Cycle" },
            { value: "glucose", label: "Blood Glucose" },
            { value: "osmoregulation", label: "ADH & Nephron [HL]" },
          ]}
        />

        {tab === "menstrual" ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Segmented
                label="Cycle condition"
                value={cycleCond}
                onChange={setCycleCond}
                options={[
                  { value: "normal", label: "Normal" },
                  { value: "pregnant", label: "Pregnancy (+hCG)" },
                  { value: "pill", label: "Combined Pill" },
                ]}
              />
            </div>
            <Slider label="Day of Cycle" value={day} min={1} max={28} step={1} onChange={setDay} format={(v) => `Day ${v}`} />

            <div className="rounded-xl border border-line bg-surface-2/60 p-2 sm:p-3">
              <svg
                viewBox="0 0 560 225"
                className="h-auto w-full"
                role="img"
                aria-label={`Menstrual cycle hormone graph on day ${day} under ${cycleCond} condition showing FSH, LH, oestrogen, progesterone, and endometrium thickness`}
              >
                <rect x="42" y="22" width="494" height="134" rx="6" className="fill-surface stroke-line" />
                <line x1={cx(14)} x2={cx(14)} y1="22" y2="156" stroke="var(--bad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                <path d={cPath((p) => p.fsh)} fill="none" stroke="var(--info)" strokeWidth="2.1" />
                <path d={cPath((p) => p.lh)} fill="none" stroke="var(--bad)" strokeWidth="2.5" />
                <path d={cPath((p) => p.est)} fill="none" stroke="var(--good)" strokeWidth="2.3" />
                <path d={cPath((p) => p.prog)} fill="none" stroke="#8b5cf6" strokeWidth="2.5" />

                {/* Active day cursor */}
                <line x1={cx(day)} x2={cx(day)} y1="18" y2="198" className="stroke-ink" strokeWidth="1.8" />
                <circle cx={cx(day)} cy={cy(curH.lh)} r="4" fill="var(--bad)" />
                <circle cx={cx(day)} cy={cy(curH.oestrogen)} r="4" fill="var(--good)" />
                <circle cx={cx(day)} cy={cy(curH.progesterone)} r="4" fill="#8b5cf6" />

                {/* Endometrium thickness bar */}
                <rect x="42" y="164" width="494" height="24" rx="5" className="fill-surface stroke-line" />
                <path
                  d={`M42 188 ${cyclePts.map((p) => `L${cx(p.d).toFixed(1)} ${(188 - p.endo * 22).toFixed(1)}`).join(" ")} L536 188 Z`}
                  fill="var(--bad)"
                  opacity="0.28"
                />
                <text x="50" y="180" fontSize="9" fontWeight="700" className="fill-ink">
                  Endometrium thickness
                </text>

                {[1, 7, 14, 21, 28].map((d) => (
                  <text key={d} x={cx(d)} y="203" fontSize="9.5" textAnchor="middle" className="fill-ink-2">
                    Day {d}
                  </text>
                ))}

                {/* Legend */}
                <line x1="48" y1="216" x2="64" y2="216" stroke="var(--info)" strokeWidth="2.2" />
                <text x="68" y="219" fontSize="9.5" className="fill-ink">FSH</text>
                <line x1="120" y1="216" x2="136" y2="216" stroke="var(--bad)" strokeWidth="2.4" />
                <text x="140" y="219" fontSize="9.5" className="fill-ink">LH</text>
                <line x1="188" y1="216" x2="204" y2="216" stroke="var(--good)" strokeWidth="2.3" />
                <text x="208" y="219" fontSize="9.5" className="fill-ink">Oestrogen</text>
                <line x1="286" y1="216" x2="302" y2="216" stroke="#8b5cf6" strokeWidth="2.5" />
                <text x="306" y="219" fontSize="9.5" className="fill-ink">Progesterone</text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Readout label="Phase" value={phaseLabel} tone="brand" />
              <Readout label="Feedback" value={feedbackLabel} tone={day >= 12 && day <= 14 && cycleCond !== "pill" ? "bad" : "good"} />
              <Readout label="LH Relative" value={`${Math.round(curH.lh * 100)}%`} tone="bad" />
              <Readout label="Progesterone" value={`${Math.round(curH.progesterone * 100)}%`} tone="ink" />
            </div>
          </>
        ) : null}

        {tab === "glucose" ? (
          <>
            <Segmented
              label="Metabolic state"
              value={diabCond}
              onChange={setDiabCond}
              options={[
                { value: "healthy", label: "Healthy" },
                { value: "type1", label: "Type 1 Diabetes" },
                { value: "type2", label: "Type 2 Diabetes" },
              ]}
            />
            <Slider
              label="Meal Carbohydrate Load"
              value={carbLoad}
              min={0}
              max={100}
              step={10}
              onChange={setCarbLoad}
              format={(v) => (v === 0 ? "Fasting (0 g)" : `${v} g glucose`)}
            />

            <div className="rounded-xl border border-line bg-surface-2/60 p-2 sm:p-3">
              <svg
                viewBox="0 0 560 210"
                className="h-auto w-full"
                role="img"
                aria-label={`Blood glucose curve for ${diabCond} after ${carbLoad}g carbohydrate load peaking at ${peakG.toFixed(1)} mmol per dm cubed`}
              >
                <rect x="46" y="32" width="340" height="144" rx="6" className="fill-surface stroke-line" />
                {/* Normal setpoint band 4.0–5.5 */}
                <rect x="46" y={gy(5.5)} width="340" height={gy(4.0) - gy(5.5)} fill="var(--good)" opacity="0.16" />
                <text x="380" y={gy(4.75) + 3} fontSize="8.5" textAnchor="end" fill="var(--good)" fontWeight="700">
                  Setpoint 4–5.5
                </text>
                {/* Renal threshold ~10 mmol/dm3 */}
                <line x1="46" x2="386" y1={gy(10)} y2={gy(10)} stroke="var(--bad)" strokeDasharray="4 3" strokeWidth="1.1" />
                <text x="52" y={gy(10) - 4} fontSize="8.5" fill="var(--bad)">Renal threshold (~10)</text>

                {[4, 8, 12, 16].map((v) => (
                  <text key={v} x="40" y={gy(v) + 3} fontSize="9.5" textAnchor="end" className="fill-ink-2">
                    {v}
                  </text>
                ))}
                <text x="216" y="20" fontSize="11" fontWeight="700" textAnchor="middle" className="fill-ink">
                  Blood Glucose Response (mmol dm⁻³)
                </text>
                <path d={gPath} fill="none" stroke={diabCond === "healthy" ? "var(--good)" : "var(--bad)"} strokeWidth="2.8" />
                {[0, 60, 120, 180, 240].map((t) => (
                  <text key={t} x={gx(t)} y="192" fontSize="9.5" textAnchor="middle" className="fill-ink-2">
                    {t}m
                  </text>
                ))}

                {/* Right panel: Pancreatic Hormone Output */}
                <text x="476" y="20" fontSize="11" fontWeight="700" textAnchor="middle" className="fill-ink">
                  Pancreatic Hormones
                </text>
                <line x1="414" y1="176" x2="542" y2="176" className="stroke-ink-2" strokeWidth="1.2" />
                <rect x="428" y={176 - insulinLevel * 126} width="42" height={Math.max(4, insulinLevel * 126)} rx="4" fill="var(--info)" />
                <text x="449" y="192" fontSize="9.5" fontWeight="700" textAnchor="middle" className="fill-ink">Insulin</text>
                <text x="449" y="204" fontSize="8.5" textAnchor="middle" className="fill-ink-2">(β cells)</text>

                <rect x="488" y={176 - glucagonLevel * 126} width="42" height={Math.max(4, glucagonLevel * 126)} rx="4" fill="#8b5cf6" />
                <text x="509" y="192" fontSize="9.5" fontWeight="700" textAnchor="middle" className="fill-ink">Glucagon</text>
                <text x="509" y="204" fontSize="8.5" textAnchor="middle" className="fill-ink-2">(α cells)</text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Readout label="Peak Glucose" value={`${peakG.toFixed(1)} mM`} tone={peakG > 9.5 ? "bad" : "good"} />
              <Readout label="Active Cells" value={carbLoad === 0 ? "α cells" : diabCond === "type1" ? "β cells lost" : "β cells"} tone="brand" />
              <Readout label="Main Hormone" value={carbLoad === 0 ? "Glucagon" : diabCond === "type1" ? "No Insulin" : "Insulin"} tone="ink" />
              <Readout label="Liver Effect" value={carbLoad === 0 ? "Glycogenolysis" : diabCond === "healthy" ? "Glycogenesis" : "Impaired"} tone={diabCond === "healthy" ? "good" : "bad"} />
            </div>
          </>
        ) : null}

        {tab === "osmoregulation" ? (
          <>
            <Slider
              label="Body Fluid Balance"
              value={fluidBal}
              min={-2}
              max={2}
              step={0.5}
              onChange={setFluidBal}
              format={(v) => (v < 0 ? `${v.toFixed(1)} L (Dehydrated)` : v > 0 ? `+${v.toFixed(1)} L (Overhydrated)` : "0.0 L (Balanced)")}
            />

            <div className="rounded-xl border border-line bg-surface-2/60 p-2 sm:p-3">
              <svg
                viewBox="0 0 560 198"
                className="h-auto w-full"
                role="img"
                aria-label={`ADH osmoregulation model showing blood osmolarity ${osmolarity} mOsm, ${aquaCount} aquaporin channels in the collecting duct, and urine concentration ${urineOsm} mOsm`}
              >
                <text x="280" y="18" fontSize="11.5" fontWeight="700" textAnchor="middle" className="fill-ink">
                  Hypothalamus → Posterior Pituitary ADH → Collecting Duct Aquaporins
                </text>

                {/* Step 1: Blood osmolarity */}
                <rect x="16" y="34" width="122" height="142" rx="8" className="fill-surface stroke-line" />
                <text x="77" y="54" fontSize="9.5" fontWeight="700" textAnchor="middle" className="fill-ink">1. Blood Solute</text>
                <text x="77" y="96" fontSize="18" fontWeight="800" textAnchor="middle" fill={osmolarity > 294 ? "var(--bad)" : osmolarity < 286 ? "var(--info)" : "var(--good)"}>
                  {osmolarity}
                </text>
                <text x="77" y="112" fontSize="9" textAnchor="middle" className="fill-ink-2">mOsm kg⁻¹</text>
                <text x="77" y="142" fontSize="8.8" textAnchor="middle" className="fill-ink-2">
                  {osmolarity > 294 ? "Hypertonic blood" : osmolarity < 286 ? "Hypotonic blood" : "Isotonic (~290)"}
                </text>

                {/* Step 2: ADH Bar */}
                <rect x="154" y="34" width="116" height="142" rx="8" className="fill-surface stroke-line" />
                <text x="212" y="54" fontSize="9.5" fontWeight="700" textAnchor="middle" className="fill-ink">2. Pituitary ADH</text>
                <rect x="192" y="68" width="40" height="84" rx="5" className="fill-surface-2 stroke-line" />
                <rect x="192" y={152 - adhNorm * 84} width="40" height={adhNorm * 84} rx="5" fill="#8b5cf6" />
                <text x="212" y="168" fontSize="9" fontWeight="700" textAnchor="middle" className="fill-ink">
                  {Math.round(adhNorm * 100)}%
                </text>

                {/* Step 3: Collecting Duct Aquaporins */}
                <rect x="286" y="34" width="136" height="142" rx="8" className="fill-surface stroke-line" />
                <text x="354" y="54" fontSize="9.5" fontWeight="700" textAnchor="middle" className="fill-ink">3. Aquaporin Pores</text>
                <rect x="304" y="66" width="100" height="84" rx="6" fill="var(--info-soft)" stroke="var(--info)" strokeWidth="1.4" />
                {Array.from({ length: aquaCount }).map((_, idx) => {
                  const col = idx % 3;
                  const row = Math.floor(idx / 3);
                  return (
                    <circle
                      key={idx}
                      cx={324 + col * 30}
                      cy={84 + row * 24}
                      r="7"
                      fill="var(--brand)"
                      opacity="0.9"
                    />
                  );
                })}
                <text x="354" y="168" fontSize="9" fontWeight="700" textAnchor="middle" className="fill-ink">
                  {aquaCount} active channels
                </text>

                {/* Step 4: Urine Output */}
                <rect x="438" y="34" width="106" height="142" rx="8" className="fill-surface stroke-line" />
                <text x="491" y="54" fontSize="9.5" fontWeight="700" textAnchor="middle" className="fill-ink">4. Urine Output</text>
                <text x="491" y="92" fontSize="16" fontWeight="800" textAnchor="middle" fill={urineOsm > 700 ? "var(--bad)" : "var(--info)"}>
                  {urineOsm}
                </text>
                <text x="491" y="107" fontSize="8.8" textAnchor="middle" className="fill-ink-2">mOsm kg⁻¹</text>
                <text x="491" y="136" fontSize="12" fontWeight="700" textAnchor="middle" className="fill-ink">
                  {urineRate} cm³/min
                </text>
                <text x="491" y="156" fontSize="8.8" textAnchor="middle" className="fill-ink-2">
                  {urineOsm > 700 ? "Small, concentrated" : urineOsm < 450 ? "Large, dilute" : "Moderate volume"}
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Readout label="Blood Osmolarity" value={`${osmolarity} mOsm`} tone={osmolarity > 294 ? "bad" : "good"} />
              <Readout label="ADH Secretion" value={adhNorm > 0.65 ? "High" : adhNorm < 0.35 ? "Low" : "Moderate"} tone="brand" />
              <Readout label="Duct Permeability" value={`${Math.round(adhNorm * 100)}%`} tone="ink" />
              <Readout label="Urine Rate" value={`${urineRate} cm³/m`} tone={urineRate < 1.0 ? "bad" : "good"} />
            </div>
          </>
        ) : null}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "hardy-weinberg-selection-sim",
    title: "Hardy–Weinberg & Selection Simulator [HL]",
    blurb: "Simulate HWE equilibrium, directional selection, heterozygote advantage, and disruptive selection across generations.",
    Component: HardyWeinbergSelectionSim,
  },
  {
    id: "menstrual-homeostasis-grapher",
    title: "Menstrual Cycle & Homeostasis Grapher [SL/HL]",
    blurb: "Explore the 28-day menstrual hormone cycle, blood glucose feedback in diabetes, and ADH nephron osmoregulation.",
    Component: MenstrualHomeostasisGrapher,
  },
];

export default widgets;
