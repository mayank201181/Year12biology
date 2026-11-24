"use client";
import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: Oxygen Dissociation & Bohr-Shift Curve Explorer [HL]
// =============================================================================

const P50_REF = 3.5; // Adult HbA P50 at pH 7.40 (kPa)
const HILL_HBA = 2.8;
const P50_HBF = 2.5; // Fetal HbF left-shifted P50 (kPa)
const HILL_HBF = 2.7;
const P50_MB = 0.4; // Monomeric Myoglobin P50 (kPa)

function hillSat(po2: number, p50: number, n: number): number {
  if (po2 <= 0) return 0;
  const pn = po2 ** n;
  return (100 * pn) / (pn + p50 ** n);
}

function bohrP50(ph: number): number {
  // Standard physiological Bohr coefficient: Δlog10(P50) ≈ −0.48 × (pH − 7.40)
  return P50_REF * 10 ** (-0.48 * (ph - 7.4));
}

function buildCurvePath(
  p50: number,
  n: number,
  toX: (po2: number) => number,
  toY: (sat: number) => number,
): string {
  const pts: string[] = [];
  for (let i = 0; i <= 70; i++) {
    const p = i * 0.2;
    const s = hillSat(p, p50, n);
    pts.push(`${i === 0 ? "M" : "L"}${toX(p).toFixed(1)} ${toY(s).toFixed(1)}`);
  }
  return pts.join(" ");
}

type BohrPreset = "rest" | "sprint" | "extreme" | "alkaline";

function BohrShiftExplorer() {
  const [ph, setPh] = useState(7.2);
  const [probePo2, setProbePo2] = useState(4.0);
  const [showFetal, setShowFetal] = useState(true);
  const [showMyoglobin, setShowMyoglobin] = useState(false);

  const preset: BohrPreset | "custom" =
    Math.abs(ph - 7.4) < 0.005
      ? "rest"
      : Math.abs(ph - 7.2) < 0.005
        ? "sprint"
        : Math.abs(ph - 7.05) < 0.005
          ? "extreme"
          : Math.abs(ph - 7.55) < 0.005
            ? "alkaline"
            : "custom";

  const applyPreset = (mode: BohrPreset) => {
    if (mode === "rest") {
      setPh(7.4);
      setProbePo2(5.0);
    } else if (mode === "sprint") {
      setPh(7.2);
      setProbePo2(4.0);
    } else if (mode === "extreme") {
      setPh(7.05);
      setProbePo2(3.0);
    } else {
      setPh(7.55);
      setProbePo2(4.0);
    }
  };

  const p50Shift = bohrP50(ph);
  const satRef = hillSat(probePo2, P50_REF, HILL_HBA);
  const satShift = hillSat(probePo2, p50Shift, HILL_HBA);
  const satFetal = hillSat(probePo2, P50_HBF, HILL_HBF);
  const satMb = hillSat(probePo2, P50_MB, 1.0);
  const lungSat = hillSat(13.0, P50_REF, HILL_HBA);
  const bohrGain = satRef - satShift; // Positive when shifted right (more O2 unloaded)

  // SVG coordinate system
  const W = 520;
  const H = 290;
  const padL = 48;
  const padR = 18;
  const padT = 22;
  const padB = 42;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const toX = (po2: number) => padL + (po2 / 14) * plotW;
  const toY = (sat: number) => padT + plotH - (sat / 100) * plotH;

  const refPath = buildCurvePath(P50_REF, HILL_HBA, toX, toY);
  const shiftPath = buildCurvePath(p50Shift, HILL_HBA, toX, toY);
  const fetalPath = buildCurvePath(P50_HBF, HILL_HBF, toX, toY);
  const mbPath = buildCurvePath(P50_MB, 1.0, toX, toY);

  const probeX = toX(probePo2);
  const yRef = toY(satRef);
  const yShift = toY(satShift);
  const yFetal = toY(satFetal);
  const yMb = toY(satMb);

  const shiftDir =
    ph < 7.39 ? "right (lower O₂ affinity → enhanced unloading)" : ph > 7.41 ? "left (higher O₂ affinity → tighter binding)" : "unshifted (normal arterial pH 7.40)";

  return (
    <WidgetFrame
      title="Oxygen Dissociation & Bohr-Shift Curve Explorer [HL]"
      tryThis={[
        "Drop blood **pH from 7.40 to 7.20** (rising CO₂ in sprinting muscle) at **pO₂ = 4.0 kPa** and watch how many extra percentage points of O₂ unload automatically.",
        "Move the **pO₂ probe to 3.5 kPa** (placenta) with **Fetal Hb** shown to compare maternal vs fetal saturation.",
        "Toggle **Myoglobin** and slide pO₂ down to **1.0 kPa** to see why myoglobin acts as an emergency muscle reserve.",
      ]}
      caption={
        <div>
          At <strong>pH {ph.toFixed(2)}</strong>, adult haemoglobin P₅₀ is{" "}
          <strong>{p50Shift.toFixed(2)} kPa</strong> — shifted <strong>{shiftDir}</strong>. Leaving lungs at{" "}
          <strong>{lungSat.toFixed(0)}%</strong> saturation and reaching tissue at{" "}
          <strong>{probePo2.toFixed(1)} kPa</strong>, HbA unloads{" "}
          <strong>{Math.max(0, lungSat - satShift).toFixed(1)}%</strong> of its O₂ capacity (
          {bohrGain >= 0 ? `+${bohrGain.toFixed(1)}` : bohrGain.toFixed(1)} percentage points relative to pH 7.40).
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented<BohrPreset | "custom">
            label="Physiological scenario"
            value={preset}
            onChange={(v) => {
              if (v !== "custom") applyPreset(v);
            }}
            options={[
              { value: "rest", label: "Rest (pH 7.40)" },
              { value: "sprint", label: "Sprint (pH 7.20)" },
              { value: "extreme", label: "Max Effort (7.05)" },
              { value: "alkaline", label: "Low CO₂ (7.55)" },
            ]}
          />
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setShowFetal((v) => !v)}
              aria-pressed={showFetal}
              className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                showFetal
                  ? "border-sky-600 bg-sky-50 text-sky-800 dark:bg-sky-950/60 dark:text-sky-200"
                  : "border-line bg-surface-2 text-ink-2"
              }`}
            >
              {showFetal ? "✓ " : "+ "}Fetal Hb (HbF)
            </button>
            <button
              type="button"
              onClick={() => setShowMyoglobin((v) => !v)}
              aria-pressed={showMyoglobin}
              className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                showMyoglobin
                  ? "border-violet-600 bg-violet-50 text-violet-800 dark:bg-violet-950/60 dark:text-violet-200"
                  : "border-line bg-surface-2 text-ink-2"
              }`}
            >
              {showMyoglobin ? "✓ " : "+ "}Myoglobin
            </button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider
            label="Blood pH (↑CO₂ lowers pH)"
            value={ph}
            min={7.0}
            max={7.6}
            step={0.05}
            onChange={setPh}
            format={(v) => `pH ${v.toFixed(2)}`}
          />
          <Slider
            label="Probe partial pressure (pO₂)"
            value={probePo2}
            min={0.5}
            max={14.0}
            step={0.5}
            onChange={setProbePo2}
            format={(v) => `${v.toFixed(1)} kPa`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Oxygen dissociation graph at pH ${ph.toFixed(2)} and probe pO2 ${probePo2.toFixed(1)} kPa`}
            className="h-auto w-full max-w-full"
          >
            {/* Shaded physiological zones */}
            <rect
              x={toX(2.0)}
              y={padT}
              width={toX(5.0) - toX(2.0)}
              height={plotH}
              fill="#fef3c7"
              opacity={0.45}
            />
            <text x={toX(3.5)} y={padT + 13} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#92400e">
              Active Tissues
            </text>
            <rect
              x={toX(12.0)}
              y={padT}
              width={toX(14.0) - toX(12.0)}
              height={plotH}
              fill="#dcfce7"
              opacity={0.55}
            />
            <text x={toX(13.0)} y={padT + 13} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#15803d">
              Alveoli
            </text>

            {/* Horizontal grid lines */}
            {[0, 25, 50, 75, 100].map((s) => (
              <g key={`hy-${s}`}>
                <line
                  x1={padL}
                  x2={W - padR}
                  y1={toY(s)}
                  y2={toY(s)}
                  stroke="var(--line)"
                  strokeWidth={s === 50 ? 1.4 : 1}
                  strokeDasharray={s === 50 ? "4,3" : undefined}
                />
                <text x={padL - 7} y={toY(s) + 3.5} textAnchor="end" fontSize={10} fill="var(--ink-2)">
                  {s}
                </text>
              </g>
            ))}

            {/* Vertical grid lines */}
            {[0, 2, 4, 6, 8, 10, 12, 14].map((p) => (
              <g key={`vx-${p}`}>
                <line x1={toX(p)} x2={toX(p)} y1={padT} y2={padT + plotH} stroke="var(--line)" strokeWidth={1} />
                <text x={toX(p)} y={padT + plotH + 15} textAnchor="middle" fontSize={10} fill="var(--ink-2)">
                  {p}
                </text>
              </g>
            ))}

            {/* Axes */}
            <line x1={padL} x2={W - padR} y1={padT + plotH} y2={padT + plotH} stroke="var(--ink-2)" strokeWidth={1.6} />
            <line x1={padL} x2={padL} y1={padT} y2={padT + plotH} stroke="var(--ink-2)" strokeWidth={1.6} />
            <text x={padL + plotW / 2} y={H - 8} textAnchor="middle" fontSize={11} fontWeight={600} fill="var(--ink-2)">
              Partial Pressure of Oxygen, pO₂ (kPa)
            </text>
            <text
              x={14}
              y={padT + plotH / 2}
              textAnchor="middle"
              fontSize={11}
              fontWeight={600}
              fill="var(--ink-2)"
              transform={`rotate(-90 14 ${padT + plotH / 2})`}
            >
              % O₂ Saturation
            </text>

            {/* Optional curves */}
            {showMyoglobin ? (
              <path d={mbPath} fill="none" stroke="#7c3aed" strokeWidth={2.2} strokeDasharray="6,3" />
            ) : null}
            {showFetal ? <path d={fetalPath} fill="none" stroke="#0284c7" strokeWidth={2.5} /> : null}

            {/* Adult HbA reference curve (pH 7.40) */}
            <path d={refPath} fill="none" stroke="#16a34a" strokeWidth={2.6} />

            {/* Adult HbA shifted curve (active pH) */}
            <path d={shiftPath} fill="none" stroke="#dc2626" strokeWidth={2.8} />

            {/* Bohr shift arrow along 50% saturation line */}
            {Math.abs(p50Shift - P50_REF) > 0.15 ? (
              <g>
                <line
                  x1={toX(P50_REF)}
                  x2={toX(p50Shift)}
                  y1={toY(50)}
                  y2={toY(50)}
                  stroke="#dc2626"
                  strokeWidth={2.4}
                />
                <circle cx={toX(p50Shift)} cy={toY(50)} r={3.8} fill="#dc2626" />
              </g>
            ) : null}

            {/* Interactive probe line */}
            <line
              x1={probeX}
              x2={probeX}
              y1={padT}
              y2={padT + plotH}
              stroke="var(--ink)"
              strokeWidth={1.3}
              strokeDasharray="3,3"
            />

            {/* Highlight Bohr unloading delta bar on probe */}
            {Math.abs(yShift - yRef) > 4 ? (
              <line x1={probeX} x2={probeX} y1={yRef} y2={yShift} stroke="#dc2626" strokeWidth={4.5} opacity={0.45} />
            ) : null}

            {/* Probe dots */}
            {showMyoglobin ? <circle cx={probeX} cy={yMb} r={4.5} fill="#7c3aed" stroke="#ffffff" strokeWidth={1.4} /> : null}
            {showFetal ? <circle cx={probeX} cy={yFetal} r={4.5} fill="#0284c7" stroke="#ffffff" strokeWidth={1.4} /> : null}
            <circle cx={probeX} cy={yRef} r={5} fill="#16a34a" stroke="#ffffff" strokeWidth={1.5} />
            <circle cx={probeX} cy={yShift} r={5} fill="#dc2626" stroke="#ffffff" strokeWidth={1.5} />

            {/* Inline legend box (bottom right) */}
            <g transform="translate(306, 174)">
              <rect
                x={0}
                y={0}
                width={190}
                height={showFetal && showMyoglobin ? 68 : showFetal || showMyoglobin ? 54 : 38}
                rx={8}
                fill="var(--surface)"
                stroke="var(--line)"
                strokeWidth={1}
                opacity={0.94}
              />
              <line x1={10} x2={28} y1={13} y2={13} stroke="#16a34a" strokeWidth={2.6} />
              <text x={34} y={16.5} fontSize={9.5} fontWeight={700} fill="var(--ink)">Adult HbA (pH 7.40 ref)</text>
              <line x1={10} x2={28} y1={28} y2={28} stroke="#dc2626" strokeWidth={2.8} />
              <text x={34} y={31.5} fontSize={9.5} fontWeight={700} fill="#dc2626">Active HbA (pH {ph.toFixed(2)})</text>
              {showFetal ? (
                <>
                  <line x1={10} x2={28} y1={43} y2={43} stroke="#0284c7" strokeWidth={2.4} />
                  <text x={34} y={46.5} fontSize={9.5} fontWeight={700} fill="#0284c7">Fetal HbF (α₂γ₂)</text>
                </>
              ) : null}
              {showMyoglobin ? (
                <>
                  <line x1={10} x2={28} y1={showFetal ? 56 : 43} y2={showFetal ? 56 : 43} stroke="#7c3aed" strokeWidth={2.2} strokeDasharray="5,2" />
                  <text x={34} y={showFetal ? 59.5 : 46.5} fontSize={9.5} fontWeight={700} fill="#7c3aed">Myoglobin (monomer)</text>
                </>
              ) : null}
            </g>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Active P₅₀" value={`${p50Shift.toFixed(2)} kPa`} tone="ink" />
          <Readout label="HbA (pH 7.40)" value={`${satRef.toFixed(1)}%`} tone="good" />
          <Readout label={`HbA (pH ${ph.toFixed(2)})`} value={`${satShift.toFixed(1)}%`} tone={ph < 7.4 ? "bad" : "brand"} />
          <Readout
            label={showFetal && Math.abs(ph - 7.4) < 0.01 ? "HbF − HbA Gap" : "Bohr O₂ Bonus"}
            value={
              showFetal && Math.abs(ph - 7.4) < 0.01
                ? `+${(satFetal - satRef).toFixed(1)}%`
                : `${bohrGain >= 0 ? "+" : ""}${bohrGain.toFixed(1)}%`
            }
            tone={bohrGain > 0 ? "good" : "ink"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: Sarcomere Sliding-Filament Contraction Lab [HL]
// =============================================================================

type CycleStep = "ca" | "bind" | "power" | "detach" | "recock";
type MuscleMode = "normal" | "rigor";

const STEP_INFO: Record<CycleStep, { label: string; title: string; detail: string; rigorNote?: string }> = {
  ca: {
    label: "1. Ca²⁺",
    title: "Ca²⁺ release from SR → binds Troponin",
    detail:
      "Action potential travels down T-tubules, triggering the sarcoplasmic reticulum to release Ca²⁺. Ca²⁺ binds troponin, displacing tropomyosin off actin's myosin-binding sites.",
  },
  bind: {
    label: "2. Bind",
    title: "Cross-bridge formation (Actomyosin)",
    detail:
      "Pre-energized ('cocked') myosin heads carrying ADP + Pᵢ bind to exposed actin sites, forming cross-bridges.",
  },
  power: {
    label: "3. Stroke",
    title: "Power stroke (ADP + Pᵢ released)",
    detail:
      "Release of Pᵢ and ADP pivots the myosin heads ~45°, pulling thin actin filaments inward toward the central M-line. Z-lines approach, I-band and H-zone shorten, A-band stays constant!",
  },
  detach: {
    label: "4. ATP Detach",
    title: "Fresh ATP binding detaches Myosin",
    detail:
      "A fresh ATP molecule binds to the myosin head, lowering its affinity for actin so the cross-bridge cleanly detaches.",
    rigorNote:
      "RIGOR MORTIS BLOCK: With zero ATP available after death, myosin heads cannot detach from actin—cross-bridges lock statically!",
  },
  recock: {
    label: "5. Re-Cock",
    title: "ATP hydrolysis re-cocks Myosin head",
    detail:
      "Myosin ATPase hydrolyses ATP → ADP + Pᵢ, storing energy to swing the myosin head back into its cocked high-energy conformation ready for another stroke.",
    rigorNote:
      "RIGOR MORTIS BLOCK: Without ATP binding and hydrolysis, myosin heads remain stuck in their post-stroke bound angle.",
  },
};

function SarcomereContractionLab() {
  const [contractionPct, setContractionPct] = useState(35);
  const [step, setStep] = useState<CycleStep>("power");
  const [mode, setMode] = useState<MuscleMode>("normal");

  // Physiological sarcomere dimensions (μm):
  // Relaxed (0%): L = 2.60, A = 1.60 (constant!), actin length = 0.95 each -> H = 0.70, combined I = 1.00 (0.50 each half)
  // Full contraction (100%): ΔL = 0.70 -> L = 1.90, A = 1.60, H = 0.00, combined I = 0.30 (0.15 each half)
  const frac = contractionPct / 100;
  const deltaL = 0.7 * frac;
  const sarcLen = 2.6 - deltaL;
  const aBand = 1.6;
  const hZone = 0.7 - deltaL;
  const iCombined = sarcLen - aBand;
  const halfI = iCombined / 2;

  // Map μm to SVG pixels (centre at x = 260, scale = 160 px per μm)
  const cx = 260;
  const scale = 160;
  const aHalfPx = (aBand / 2) * scale; // 128 px -> A-band spans 132 to 388 (CONSTANT!)
  const aLeft = cx - aHalfPx;
  const aRight = cx + aHalfPx;
  const zHalfPx = (sarcLen / 2) * scale;
  const zLeft = cx - zHalfPx;
  const zRight = cx + zHalfPx;
  const actinPx = 0.95 * scale; // 152 px constant actin rod length!
  const actinLeftEnd = zLeft + actinPx;
  const actinRightStart = zRight - actinPx;

  // Build wavy titin spring between x1 and x2 at y
  const titinPath = (x1: number, x2: number, y: number) => {
    const segs = 8;
    const dx = (x2 - x1) / segs;
    let d = `M${x1.toFixed(1)} ${y}`;
    for (let i = 1; i < segs; i++) {
      const px = x1 + i * dx;
      const py = y + (i % 2 === 1 ? -4.5 : 4.5);
      d += ` L${px.toFixed(1)} ${py.toFixed(1)}`;
    }
    d += ` L${x2.toFixed(1)} ${y}`;
    return d;
  };

  // Visual cross-bridge head tilt depends on step
  const headEngaged = step === "bind" || step === "power" || (mode === "rigor" && (step === "detach" || step === "recock"));
  const headTilt = step === "power" || (mode === "rigor" && step !== "ca") ? 7 : -7;
  const info = STEP_INFO[step];
  const isRigorBlocked = mode === "rigor" && (step === "detach" || step === "recock");

  return (
    <WidgetFrame
      title="Sarcomere Sliding-Filament Contraction Lab [HL]"
      tryThis={[
        "Drag **Contraction %** from **0% to 100%** and watch the red dashed **A-band** guides: notice A-band stays locked at **1.60 μm** while **I-band** and **H-zone** shrink equally.",
        "Walk through steps **1 → 5** of the cross-bridge cycle, then switch to **Rigor Mortis (No ATP)** on Step 4 to see why muscles freeze rigidly after death.",
      ]}
      caption={
        <div className="space-y-1">
          <div className="font-bold text-ink">{info.title}</div>
          <div>{isRigorBlocked && info.rigorNote ? info.rigorNote : info.detail}</div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Cross-bridge step"
            value={step}
            onChange={setStep}
            options={[
              { value: "ca", label: STEP_INFO.ca.label },
              { value: "bind", label: STEP_INFO.bind.label },
              { value: "power", label: STEP_INFO.power.label },
              { value: "detach", label: STEP_INFO.detach.label },
              { value: "recock", label: STEP_INFO.recock.label },
            ]}
          />
          <Segmented
            label="ATP availability"
            value={mode}
            onChange={setMode}
            options={[
              { value: "normal", label: "Normal ATP" },
              { value: "rigor", label: "Rigor Mortis (0 ATP)" },
            ]}
          />
        </div>

        <Slider
          label="Sarcomere Contraction"
          value={contractionPct}
          min={0}
          max={100}
          step={5}
          onChange={setContractionPct}
          format={(v) => `${v}% (ΔL = −${deltaL.toFixed(2)} μm)`}
        />

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 520 250"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Interactive sarcomere diagram at ${contractionPct}% contraction: length ${sarcLen.toFixed(2)} micrometres, A-band 1.60 micrometres, H-zone ${hZone.toFixed(2)} micrometres`}
            className="h-auto w-full max-w-full"
          >
            {/* Constant A-band vertical guide lines */}
            <line x1={aLeft} x2={aLeft} y1={24} y2={208} stroke="#dc2626" strokeWidth={1.2} strokeDasharray="4,3" opacity={0.6} />
            <line x1={aRight} x2={aRight} y1={24} y2={208} stroke="#dc2626" strokeWidth={1.2} strokeDasharray="4,3" opacity={0.6} />

            {/* M-line */}
            <line x1={cx} x2={cx} y1={34} y2={162} stroke="var(--ink-2)" strokeWidth={1.5} strokeDasharray="3,2" />
            <text x={cx} y={24} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--ink-2)">
              M-line
            </text>

            {/* Z-lines */}
            <line x1={zLeft} x2={zLeft} y1={34} y2={166} stroke="var(--ink)" strokeWidth={5} strokeLinecap="round" />
            <line x1={zRight} x2={zRight} y1={34} y2={166} stroke="var(--ink)" strokeWidth={5} strokeLinecap="round" />
            <text x={zLeft} y={24} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--ink)">
              Z-line
            </text>
            <text x={zRight} y={24} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--ink)">
              Z-line
            </text>

            {/* Thin Actin Filaments (3 rows, constant 0.95 μm length) */}
            {[52, 98, 144].map((y) => (
              <g key={`actin-${y}`}>
                <line x1={zLeft} x2={actinLeftEnd} y1={y} y2={y} stroke="#0284c7" strokeWidth={4} strokeLinecap="round" />
                <line x1={actinRightStart} x2={zRight} y1={y} y2={y} stroke="#0284c7" strokeWidth={4} strokeLinecap="round" />
                {/* Ca2+ ions glowing on troponin during active Ca/bind/power steps */}
                {step !== "recock" ? (
                  <>
                    <circle cx={zLeft + 92} cy={y - 5} r={2.5} fill="#eab308" />
                    <circle cx={zRight - 92} cy={y - 5} r={2.5} fill="#eab308" />
                  </>
                ) : null}
              </g>
            ))}

            {/* Elastic Titin springs (Z-line to thick myosin ends) */}
            {[75, 121].map((y) => (
              <g key={`titin-${y}`}>
                <path d={titinPath(zLeft, aLeft, y)} fill="none" stroke="#d97706" strokeWidth={1.8} />
                <path d={titinPath(aRight, zRight, y)} fill="none" stroke="#d97706" strokeWidth={1.8} />
              </g>
            ))}

            {/* Thick Myosin Filaments (CONSTANT 1.60 μm = aLeft to aRight) */}
            {[75, 121].map((y) => (
              <g key={`myosin-${y}`}>
                <rect x={aLeft} y={y - 4.5} width={aRight - aLeft} height={9} rx={4.5} fill="#dc2626" />
                {/* Left-half & Right-half cross-bridge myosin heads */}
                {[-106, -78, -50, 50, 78, 106].map((offset) => {
                  const hx = cx + offset;
                  const dir = offset < 0 ? -1 : 1;
                  const tipShift = headTilt * dir;
                  const reach = headEngaged ? 17 : 10;
                  return (
                    <g key={`hd-${y}-${offset}`}>
                      <line
                        x1={hx}
                        y1={y - 4}
                        x2={hx + tipShift}
                        y2={y - 4 - reach}
                        stroke={isRigorBlocked ? "#7f1d1d" : "#ef4444"}
                        strokeWidth={2.2}
                        strokeLinecap="round"
                      />
                      <circle cx={hx + tipShift} cy={y - 4 - reach} r={2.6} fill={isRigorBlocked ? "#7f1d1d" : "#dc2626"} />
                      <line
                        x1={hx}
                        y1={y + 4}
                        x2={hx + tipShift}
                        y2={y + 4 + reach}
                        stroke={isRigorBlocked ? "#7f1d1d" : "#ef4444"}
                        strokeWidth={2.2}
                        strokeLinecap="round"
                      />
                      <circle cx={hx + tipShift} cy={y + 4 + reach} r={2.6} fill={isRigorBlocked ? "#7f1d1d" : "#dc2626"} />
                    </g>
                  );
                })}
              </g>
            ))}

            {/* Dynamic H-zone bracket */}
            {hZone > 0.03 ? (
              <g>
                <line x1={actinLeftEnd} x2={actinRightStart} y1={174} y2={174} stroke="#7c3aed" strokeWidth={2.2} />
                <text x={cx} y={187} textAnchor="middle" fontSize={10} fontWeight={700} fill="#7c3aed">
                  H-zone = {hZone.toFixed(2)} μm
                </text>
              </g>
            ) : (
              <text x={cx} y={185} textAnchor="middle" fontSize={10} fontWeight={700} fill="#7c3aed">
                H-zone = 0.00 μm (fully overlapped!)
              </text>
            )}

            {/* Dynamic Half I-band & Constant A-band brackets */}
            <line x1={zLeft} x2={aLeft} y1={202} y2={202} stroke="#0284c7" strokeWidth={2.2} />
            <text x={aLeft - 6} y={216} textAnchor="end" fontSize={9.5} fontWeight={700} fill="#0284c7">
              ½I: {halfI.toFixed(2)} μm
            </text>

            <line x1={aLeft} x2={aRight} y1={202} y2={202} stroke="#dc2626" strokeWidth={2.6} />
            <text x={cx} y={216} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#dc2626">
              A-band = 1.60 μm (CONSTANT)
            </text>

            <line x1={aRight} x2={zRight} y1={202} y2={202} stroke="#0284c7" strokeWidth={2.2} />
            <text x={aRight + 6} y={216} textAnchor="start" fontSize={9.5} fontWeight={700} fill="#0284c7">
              ½I: {halfI.toFixed(2)} μm
            </text>

            {/* Color key along bottom */}
            <text x={260} y={240} textAnchor="middle" fontSize={9.5} fill="var(--ink-2)">
              Blue = Actin · Red = Myosin · Gold = Titin · Yellow dots = Ca²⁺ on Troponin
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Sarcomere (Z–Z)" value={`${sarcLen.toFixed(2)} μm`} tone="ink" />
          <Readout label="A-band (Fixed)" value="1.60 μm" tone="good" />
          <Readout label="Combined I-band" value={`${iCombined.toFixed(2)} μm`} tone="brand" />
          <Readout label="H-zone" value={`${hZone.toFixed(2)} μm`} tone={hZone < 0.05 ? "bad" : "brand"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "bohr-shift-explorer",
    title: "Oxygen Dissociation & Bohr-Shift Curve Explorer [HL]",
    blurb: "Drag blood pH (CO₂) and tissue pO₂ to measure cooperative unloading, fetal Hb affinity, and myoglobin storage.",
    Component: BohrShiftExplorer,
  },
  {
    id: "sarcomere-sliding-filament",
    title: "Sarcomere Sliding-Filament Contraction Lab [HL]",
    blurb: "Slide actin past myosin to see why the A-band stays constant while I-band and H-zone narrow—and test rigor mortis.",
    Component: SarcomereContractionLab,
  },
];

export default widgets;
