"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: ENZYME KINETICS & COMPETITIVE / NON-COMPETITIVE INHIBITOR PLOTTER
// =============================================================================

type InhibitorMode = "none" | "competitive" | "noncompetitive";

const BASE_VMAX = 100;
const BASE_KM = 15;
const MAX_S = 120;

function mmRate(s: number, vmax: number, km: number): number {
  return (vmax * s) / (km + s);
}

function EnzymeKineticsPlotter() {
  const [mode, setMode] = useState<InhibitorMode>("competitive");
  const [inhibitorConc, setInhibitorConc] = useState<number>(1.5);
  const [substrate, setSubstrate] = useState<number>(30);

  const effectiveI = mode === "none" ? 0 : inhibitorConc;
  const appVmax = mode === "noncompetitive" ? BASE_VMAX / (1 + effectiveI) : BASE_VMAX;
  const appKm = mode === "competitive" ? BASE_KM * (1 + effectiveI) : BASE_KM;

  const baseRateAtS = mmRate(substrate, BASE_VMAX, BASE_KM);
  const activeRateAtS = mmRate(substrate, appVmax, appKm);
  const pctInhibition = baseRateAtS > 0 ? ((baseRateAtS - activeRateAtS) / baseRateAtS) * 100 : 0;

  // SVG plot coordinates
  const W = 460;
  const H = 250;
  const padL = 48;
  const padR = 18;
  const padT = 22;
  const padB = 42;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const px = (s: number) => padL + (s / MAX_S) * plotW;
  const py = (v: number) => H - padB - (v / 110) * plotH;

  const buildPath = (vmax: number, km: number): string => {
    const pts: string[] = [];
    for (let s = 0; s <= MAX_S; s += 2) {
      pts.push(`${s === 0 ? "M" : "L"} ${px(s).toFixed(1)} ${py(mmRate(s, vmax, km)).toFixed(1)}`);
    }
    return pts.join(" ");
  };

  const basePath = buildPath(BASE_VMAX, BASE_KM);
  const activePath = buildPath(appVmax, appKm);
  const halfAppVmax = appVmax / 2;
  const clampedKmX = Math.min(appKm, MAX_S);

  const curveStroke =
    mode === "competitive" ? "stroke-info" : mode === "noncompetitive" ? "stroke-bad" : "stroke-brand";
  const dotFill =
    mode === "competitive" ? "fill-info" : mode === "noncompetitive" ? "fill-bad" : "fill-brand";

  const captionText =
    mode === "none"
      ? `No inhibitor present: Vmax stays at ${BASE_VMAX} μmol min⁻¹ and Km is ${BASE_KM} mmol dm⁻³. As [S] increases, active sites fill until enzyme saturation produces the plateau.`
      : mode === "competitive"
        ? `Competitive inhibition (like statins on HMG-CoA reductase): inhibitor competes reversibly for the active site, raising apparent Km to ${appKm.toFixed(1)} mmol dm⁻³ while Vmax stays ${BASE_VMAX} μmol min⁻¹. Push [S] to 120 mmol dm⁻³ and watch % inhibition shrink!`
        : `Non-competitive inhibition (like isoleucine binding an allosteric site on threonine deaminase): active sites are distorted so Vmax drops permanently to ${appVmax.toFixed(1)} μmol min⁻¹ while Km stays ${BASE_KM} mmol dm⁻³. Even saturating [S] cannot restore the uninhibited ceiling!`;

  return (
    <WidgetFrame
      title="Enzyme Kinetics & Inhibitor Plotter [SL/HL]"
      tryThis={[
        "Switch between **Competitive** and **Non-competitive** at `[I] = 2.0`, then drag `[S]` from `15` to `120 mmol dm⁻³`.",
        "Compare how `% Inhibition` behaves at saturating `[S]`: which inhibitor can high substrate overcome?",
      ]}
      caption={captionText}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented
            label="Inhibitor type"
            value={mode}
            onChange={setMode}
            options={[
              { value: "none", label: "No inhibitor" },
              { value: "competitive", label: "Competitive" },
              { value: "noncompetitive", label: "Non-competitive" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Substrate concentration [S]"
            value={substrate}
            min={5}
            max={MAX_S}
            step={5}
            onChange={setSubstrate}
            format={(v) => `${v} mmol dm⁻³`}
          />
          <Slider
            label="Inhibitor concentration [I] / Ki"
            value={mode === "none" ? 0 : inhibitorConc}
            min={0}
            max={4}
            step={0.2}
            onChange={(v) => {
              if (mode === "none" && v > 0) setMode("competitive");
              setInhibitorConc(v);
            }}
            format={(v) => `${v.toFixed(1)} × Ki`}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${W} ${H}`}
            role="img"
            aria-label="Interactive Michaelis-Menten rate versus substrate concentration graph comparing uninhibited and inhibited enzyme kinetics"
            className="h-auto w-full"
          >
            {/* Horizontal grid lines */}
            {[0, 25, 50, 75, 100].map((v) => (
              <g key={`y-${v}`}>
                <line x1={padL} x2={W - padR} y1={py(v)} y2={py(v)} className="stroke-line" strokeWidth={1} />
                <text x={padL - 7} y={py(v) + 3.5} fontSize={10} textAnchor="end" className="fill-ink-2">
                  {v}
                </text>
              </g>
            ))}

            {/* Vertical grid lines */}
            {[0, 30, 60, 90, 120].map((s) => (
              <g key={`x-${s}`}>
                <line x1={px(s)} x2={px(s)} y1={padT} y2={H - padB} className="stroke-line" strokeWidth={1} />
                <text x={px(s)} y={H - padB + 15} fontSize={10} textAnchor="middle" className="fill-ink-2">
                  {s}
                </text>
              </g>
            ))}

            {/* Axes */}
            <line x1={padL} x2={W - padR} y1={H - padB} y2={H - padB} className="stroke-ink" strokeWidth={1.6} />
            <line x1={padL} x2={padL} y1={padT} y2={H - padB} className="stroke-ink" strokeWidth={1.6} />
            <text x={padL + plotW / 2} y={H - 8} fontSize={11} fontWeight={700} textAnchor="middle" className="fill-ink-2">
              Substrate concentration [S] (mmol dm⁻³)
            </text>
            <text
              x={13}
              y={padT + plotH / 2}
              fontSize={11}
              fontWeight={700}
              textAnchor="middle"
              transform={`rotate(-90 13 ${padT + plotH / 2})`}
              className="fill-ink-2"
            >
              Rate v (μmol min⁻¹)
            </text>

            {/* Vmax asymptotes */}
            <line
              x1={padL}
              x2={W - padR}
              y1={py(BASE_VMAX)}
              y2={py(BASE_VMAX)}
              className="stroke-brand"
              strokeWidth={1.1}
              strokeDasharray="4 3"
              opacity={0.7}
            />
            {mode === "noncompetitive" && effectiveI > 0 ? (
              <line
                x1={padL}
                x2={W - padR}
                y1={py(appVmax)}
                y2={py(appVmax)}
                className="stroke-bad"
                strokeWidth={1.2}
                strokeDasharray="4 3"
              />
            ) : null}

            {/* Apparent Km drop line */}
            <line
              x1={padL}
              x2={px(clampedKmX)}
              y1={py(halfAppVmax)}
              y2={py(halfAppVmax)}
              className="stroke-accent"
              strokeWidth={1.1}
              strokeDasharray="3 3"
            />
            <line
              x1={px(clampedKmX)}
              x2={px(clampedKmX)}
              y1={py(halfAppVmax)}
              y2={H - padB}
              className="stroke-accent"
              strokeWidth={1.1}
              strokeDasharray="3 3"
            />
            <text x={Math.min(px(clampedKmX) + 4, W - 70)} y={H - padB - 5} fontSize={9.5} fontWeight={700} className="fill-warn">
              Km′={appKm.toFixed(0)}
            </text>

            {/* Uninhibited baseline curve */}
            {mode !== "none" ? (
              <path
                d={basePath}
                fill="none"
                className="stroke-brand"
                strokeWidth={2}
                strokeDasharray="6 4"
                opacity={0.75}
              />
            ) : null}

            {/* Active curve */}
            <path d={activePath} fill="none" className={curveStroke} strokeWidth={3} />

            {/* Probe vertical line at current [S] */}
            <line
              x1={px(substrate)}
              x2={px(substrate)}
              y1={py(baseRateAtS)}
              y2={H - padB}
              className="stroke-ink-2"
              strokeWidth={1.2}
              strokeDasharray="3 3"
            />
            {mode !== "none" ? (
              <circle cx={px(substrate)} cy={py(baseRateAtS)} r={4.5} className="fill-brand" opacity={0.85} />
            ) : null}
            <circle cx={px(substrate)} cy={py(activeRateAtS)} r={5.5} className={dotFill} />

            {/* Compact legend */}
            <text x={W - padR - 4} y={padT + 11} fontSize={9.5} fontWeight={700} textAnchor="end" className="fill-brand">
              --- Control (Vmax=100)
            </text>
            {mode !== "none" ? (
              <text
                x={W - padR - 4}
                y={padT + 24}
                fontSize={9.5}
                fontWeight={700}
                textAnchor="end"
                className={mode === "competitive" ? "fill-info" : "fill-bad"}
              >
                — {mode === "competitive" ? "Competitive" : "Non-competitive"}
              </text>
            ) : null}
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Rate at [S]" value={`${activeRateAtS.toFixed(1)}`} tone="brand" />
          <Readout label="Apparent Vmax" value={`${appVmax.toFixed(1)}`} tone={mode === "noncompetitive" && effectiveI > 0 ? "bad" : "good"} />
          <Readout label="Apparent Km" value={`${appKm.toFixed(1)} mM`} tone={mode === "competitive" && effectiveI > 0 ? "bad" : "ink"} />
          <Readout
            label="% Inhibition"
            value={`${pctInhibition.toFixed(1)}%`}
            tone={pctInhibition > 35 ? "bad" : pctInhibition > 5 ? "brand" : "good"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: ACTION POTENTIAL OSCILLOSCOPE & ION-CHANNEL SIMULATOR
// =============================================================================

type AxonCondition = "normal" | "anaesthetic" | "ipsp";

interface TracePoint {
  v: number;
  phase: string;
  naState: string;
  kState: string;
}

function evalTrace(t: number, stimMv: number, condition: AxonCondition): TracePoint {
  const rest = -70;
  const threshold = -55;
  const ipspOffset = condition === "ipsp" ? -10 : 0;
  const netInput = stimMv + ipspOffset;
  const peakSub = Math.max(-82, rest + netInput);
  const fires = condition !== "anaesthetic" && peakSub >= threshold;

  if (t < 0.8) {
    return {
      v: rest,
      phase: "Resting",
      naState: condition === "anaesthetic" ? "BLOCKED (Lidocaine)" : "Closed",
      kState: "Closed (K⁺ leak open)",
    };
  }

  if (!fires) {
    // Subthreshold graded potential or anaesthetic-blocked depolarization
    let v = rest;
    if (t <= 1.3) {
      const f = (t - 0.8) / 0.5;
      v = rest + (peakSub - rest) * Math.sin((f * Math.PI) / 2);
    } else {
      v = rest + (peakSub - rest) * Math.exp(-(t - 1.3) / 0.75);
    }
    const isBlocked = condition === "anaesthetic" && peakSub >= threshold;
    return {
      v,
      phase: isBlocked
        ? "Na⁺ Blocked"
        : netInput < 0
          ? "IPSP Dip"
          : "Subthreshold",
      naState: condition === "anaesthetic" ? "BLOCKED (Lidocaine)" : "Closed (below −55 mV)",
      kState: "Closed (K⁺ leak open)",
    };
  }

  // Fires all-or-nothing action potential!
  if (t < 1.2) {
    const f = (t - 0.8) / 0.4;
    const v = rest + (threshold - rest) * f;
    return {
      v,
      phase: "Threshold",
      naState: "Opening at −55 mV",
      kState: "Closed",
    };
  }
  if (t <= 1.8) {
    const f = (t - 1.2) / 0.6;
    const v = threshold + (30 - threshold) * Math.sin((f * Math.PI) / 2);
    return {
      v,
      phase: "Depolarizing",
      naState: "OPEN — Na⁺ influx",
      kState: "Closed",
    };
  }
  if (t <= 2.9) {
    const f = (t - 1.8) / 1.1;
    // Smooth drop from +30 down to -80
    const v = 30 - 110 * (0.5 - 0.5 * Math.cos(f * Math.PI));
    return {
      v,
      phase: "Repolarizing",
      naState: "Inactivated (Refractory)",
      kState: "OPEN — K⁺ efflux",
    };
  }
  if (t <= 5.0) {
    const f = (t - 2.9) / 2.1;
    const v = -80 + 10 * (1 - Math.exp(-3.2 * f));
    return {
      v,
      phase: "Refractory",
      naState: t < 3.6 ? "Inactivated (Abs. ref.)" : "Resetting (Rel. ref.)",
      kState: t < 3.6 ? "Closing slowly (K⁺ out)" : "Closed (Pump restoring)",
    };
  }
  return {
    v: rest,
    phase: "Resting",
    naState: "Closed (ready)",
    kState: "Closed (K⁺ leak open)",
  };
}

function ActionPotentialOscilloscope() {
  const [condition, setCondition] = useState<AxonCondition>("normal");
  const [stimMv, setStimMv] = useState<number>(20);
  const [timeMs, setTimeMs] = useState<number>(1.6);

  const ipspOffset = condition === "ipsp" ? -10 : 0;
  const netInput = stimMv + ipspOffset;
  const reachesThreshold = -70 + netInput >= -55;
  const fires = condition !== "anaesthetic" && reachesThreshold;

  const probe = evalTrace(timeMs, stimMv, condition);
  const roundedV = Math.round(probe.v);
  const formattedVm = `${roundedV > 0 ? "+" : roundedV < 0 ? "−" : ""}${Math.abs(roundedV)} mV`;
  const formattedNet = `${netInput > 0 ? "+" : netInput < 0 ? "−" : ""}${Math.abs(netInput)} mV`;

  const W = 460;
  const H = 245;
  const padL = 48;
  const padR = 16;
  const padT = 20;
  const padB = 40;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const px = (t: number) => padL + (t / 6.0) * plotW;
  const py = (v: number) => H - padB - ((v - -90) / 130) * plotH;

  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const t = (i / 120) * 6.0;
    const { v } = evalTrace(t, stimMv, condition);
    pts.push(`${i === 0 ? "M" : "L"} ${px(t).toFixed(1)} ${py(v).toFixed(1)}`);
  }
  const wavePath = pts.join(" ");

  const captionText =
    condition === "anaesthetic"
      ? "Local anaesthetic (e.g., lidocaine) plugs voltage-gated Na⁺ channels. Even when stimulus depolarization reaches or passes −55 mV, Na⁺ cannot rush in — so no action potential fires and pain impulses never reach the brain."
      : condition === "ipsp"
        ? `Spatial summation active: an inhibitory GABA synapse contributes a −10 mV IPSP opposing your +${stimMv} mV EPSP (net ${netInput >= 0 ? "+" : ""}${netInput} mV → ${(-70 + netInput)} mV). Raise EPSP to at least +25 mV to cross −55 mV threshold!`
        : fires
          ? `All-or-nothing spike fired! Because net input (+${netInput} mV) pushed the axon hillock past −55 mV, voltage-gated Na⁺ channels snapped open to +30 mV. Notice that raising stimulus further to +35 mV does NOT make the spike any taller!`
          : `Subthreshold stimulus (+${netInput} mV reaches ${-70 + netInput} mV, still below −55 mV): voltage-gated Na⁺ channels remain closed and the small EPSP decays back to −70 mV without firing an action potential.`;

  return (
    <WidgetFrame
      title="Action Potential Oscilloscope & Ion-Channel Simulator [SL/HL]"
      tryThis={[
        "Slide Excitatory Stimulus from `+10 mV` to `+15 mV` to watch the **all-or-nothing threshold (−55 mV)** snap into a `+30 mV` spike.",
        "Scrub the **Time cursor** from `0.5 ms` to `4.0 ms` to track `Na⁺` and `K⁺` channels through depolarization, repolarization, and the refractory undershoot.",
        "Switch to **IPSP Summation** or **Local Anaesthetic** to see how GABA inhibition and lidocaine stop firing.",
      ]}
      caption={captionText}
    >
      <div className="space-y-4">
        <Segmented
          label="Axon condition"
          value={condition}
          onChange={setCondition}
          options={[
            { value: "normal", label: "Normal Axon" },
            { value: "ipsp", label: "EPSP + IPSP (−10 mV)" },
            { value: "anaesthetic", label: "Local Anaesthetic" },
          ]}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Excitatory stimulus (EPSP)"
            value={stimMv}
            min={0}
            max={35}
            step={1}
            onChange={setStimMv}
            format={(v) => `+${v} mV`}
          />
          <Slider
            label="Oscilloscope time cursor"
            value={timeMs}
            min={0}
            max={6}
            step={0.1}
            onChange={setTimeMs}
            format={(v) => `${v.toFixed(1)} ms`}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${W} ${H}`}
            role="img"
            aria-label="Interactive neuron action potential oscilloscope showing membrane voltage in millivolts over time in milliseconds"
            className="h-auto w-full"
          >
            {/* Horizontal voltage gridlines */}
            {[-90, -70, -55, 0, 30].map((v) => (
              <g key={`mv-${v}`}>
                <line
                  x1={padL}
                  x2={W - padR}
                  y1={py(v)}
                  y2={py(v)}
                  className={v === -55 ? "stroke-accent" : "stroke-line"}
                  strokeWidth={v === -55 ? 1.5 : 1}
                  strokeDasharray={v === -55 ? "5 3" : v === -70 ? "3 3" : undefined}
                />
                <text
                  x={padL - 7}
                  y={py(v) + 3.5}
                  fontSize={9.5}
                  fontWeight={v === -55 ? 700 : 500}
                  textAnchor="end"
                  className={v === -55 ? "fill-warn" : "fill-ink-2"}
                >
                  {v > 0 ? `+${v}` : v}
                </text>
              </g>
            ))}

            {/* Time gridlines */}
            {[0, 1, 2, 3, 4, 5, 6].map((t) => (
              <g key={`ms-${t}`}>
                <line x1={px(t)} x2={px(t)} y1={padT} y2={H - padB} className="stroke-line" strokeWidth={1} />
                <text x={px(t)} y={H - padB + 15} fontSize={10} textAnchor="middle" className="fill-ink-2">
                  {t}
                </text>
              </g>
            ))}

            {/* Axes */}
            <line x1={padL} x2={W - padR} y1={H - padB} y2={H - padB} className="stroke-ink" strokeWidth={1.6} />
            <line x1={padL} x2={padL} y1={padT} y2={H - padB} className="stroke-ink" strokeWidth={1.6} />
            <text x={padL + plotW / 2} y={H - 8} fontSize={11} fontWeight={700} textAnchor="middle" className="fill-ink-2">
              Time (ms)
            </text>
            <text
              x={13}
              y={padT + plotH / 2}
              fontSize={11}
              fontWeight={700}
              textAnchor="middle"
              transform={`rotate(-90 13 ${padT + plotH / 2})`}
              className="fill-ink-2"
            >
              Membrane potential (mV)
            </text>

            {/* Threshold label */}
            <text x={W - padR - 4} y={py(-55) - 4} fontSize={9.5} fontWeight={700} textAnchor="end" className="fill-warn">
              Threshold (−55 mV)
            </text>

            {/* Action potential waveform */}
            <path d={wavePath} fill="none" className={fires ? "stroke-brand" : "stroke-bad"} strokeWidth={3} />

            {/* Live time cursor */}
            <line
              x1={px(timeMs)}
              x2={px(timeMs)}
              y1={padT}
              y2={H - padB}
              className="stroke-info"
              strokeWidth={1.5}
              strokeDasharray="4 3"
            />
            <circle cx={px(timeMs)} cy={py(probe.v)} r={5.5} className="fill-info" />
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 rounded-xl border border-line bg-surface p-3 text-xs sm:grid-cols-3">
          <div>
            <div className="font-bold uppercase tracking-wide text-ink-2">Voltage-gated Na⁺</div>
            <div className="mt-0.5 font-extrabold text-ink">{probe.naState}</div>
          </div>
          <div>
            <div className="font-bold uppercase tracking-wide text-ink-2">Voltage-gated K⁺</div>
            <div className="mt-0.5 font-extrabold text-ink">{probe.kState}</div>
          </div>
          <div>
            <div className="font-bold uppercase tracking-wide text-ink-2">Na⁺/K⁺ ATPase Pump</div>
            <div className="mt-0.5 font-extrabold text-ink">Active (3 Na⁺ out / 2 K⁺ in)</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Membrane Vm" value={formattedVm} tone={roundedV > 0 ? "good" : "brand"} />
          <Readout label="Current Phase" value={probe.phase} tone="ink" />
          <Readout label="Net Input" value={formattedNet} tone={reachesThreshold ? "good" : "bad"} />
          <Readout label="Outcome" value={fires ? "Fires (+30 mV)" : "No Spike"} tone={fires ? "good" : "bad"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// EXPORTED WIDGET LIST (BOTH NAMED & DEFAULT EXPORTS)
// =============================================================================

export const widgets: WidgetDef[] = [
  {
    id: "enzyme-kinetics-inhibitor-plotter",
    title: "Enzyme Kinetics & Competitive/Non-Competitive Inhibitor Plotter [SL/HL]",
    blurb: "Vary inhibitor mode, [I], and substrate [S] to see why competitive inhibition preserves Vmax while non-competitive lowers it permanently.",
    Component: EnzymeKineticsPlotter,
  },
  {
    id: "action-potential-oscilloscope",
    title: "Action Potential Oscilloscope & Ion-Channel Simulator [SL/HL]",
    blurb: "Test threshold (−55 mV), EPSP/IPSP spatial summation, local anaesthetic Na⁺-channel block, and scrub through ion-channel states in real time.",
    Component: ActionPotentialOscilloscope,
  },
];

export default widgets;
