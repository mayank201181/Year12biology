"use client";
// Interactive explorables for Theme B (1–2): Form & Function — Molecules & Cells
import { useState } from "react";
import { M, Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type CholLevel = "none" | "optimal" | "high";
type TransportMode = "simple" | "facilitated" | "pump" | "sglt1";

function MembraneFluidityLab() {
  const [temp, setTemp] = useState(20);
  const [unsatPct, setUnsatPct] = useState(50);
  const [chol, setChol] = useState<CholLevel>("optimal");
  const [transport, setTransport] = useState<TransportMode>("pump");

  // Biophysical fluidity index (0–100): rises with T and cis-unsaturated tails;
  // cholesterol pulls fluidity toward the optimal physiological window (~52–55).
  const rawFluidity = 16 + (temp / 45) * 54 + (unsatPct / 100) * 32;
  const fluidity = Math.max(
    4,
    Math.min(
      98,
      Math.round(
        chol === "none"
          ? rawFluidity
          : chol === "optimal"
            ? rawFluidity + 0.42 * (54 - rawFluidity)
            : rawFluidity + 0.56 * (46 - rawFluidity),
      ),
    ),
  );

  const stateLabel =
    fluidity < 30 ? "Rigid / Gel" : fluidity <= 75 ? "Optimal Fluid" : "Hyper-Fluid / Leaky";
  const stateTone: "good" | "bad" = fluidity >= 30 && fluidity <= 75 ? "good" : "bad";

  // Visual lipid spacing expands smoothly outward from the integral protein as fluidity rises
  const spacing = 22.5 + ((fluidity - 50) / 50) * 2.2;
  const cols = [0, 1, 2, 3, 4, 5, 6, 7];

  const isKinked = (idx: number) => ((idx * 37 + 13) % 100) < unsatPct;

  const atpLabel =
    transport === "simple" || transport === "facilitated"
      ? "0 ATP (Passive)"
      : transport === "pump"
        ? "1 ATP → 3 Na⁺ / 2 K⁺"
        : "Indirect (Na⁺ gradient)";

  const gradientLabel =
    transport === "simple"
      ? "Down gradient (lipid core)"
      : transport === "facilitated"
        ? "Down gradient (channel)"
        : transport === "pump"
          ? "Both ions uphill"
          : "Na⁺ down · Glucose up";

  const renderLipidPair = (cx: number, idx: number) => {
    const kink = isKinked(idx);
    return (
      <g key={`lip-${cx.toFixed(1)}-${idx}`}>
        {/* Top leaflet */}
        <circle cx={cx} cy={92} r={8.5} fill="#38bdf8" stroke="#0284c7" strokeWidth={1.4} />
        <path
          d={kink ? `M${cx - 3},100 L${cx - 3},126 M${cx + 3},100 L${cx + 3},112 L${cx + 8},125` : `M${cx - 3},100 L${cx - 3},126 M${cx + 3},100 L${cx + 3},126`}
          fill="none"
          stroke={kink ? "#0284c7" : "#b45309"}
          strokeWidth={1.7}
          strokeLinecap="round"
        />
        {/* Bottom leaflet */}
        <circle cx={cx} cy={164} r={8.5} fill="#38bdf8" stroke="#0284c7" strokeWidth={1.4} />
        <path
          d={kink ? `M${cx - 3},156 L${cx - 3},130 M${cx + 3},156 L${cx + 3},144 L${cx + 8},131` : `M${cx - 3},156 L${cx - 3},130 M${cx + 3},156 L${cx + 3},130`}
          fill="none"
          stroke={kink ? "#0284c7" : "#b45309"}
          strokeWidth={1.7}
          strokeLinecap="round"
        />
      </g>
    );
  };

  return (
    <WidgetFrame
      title="Fluid Mosaic Membrane & Transport Fluidity Lab [SL/HL]"
      tryThis={[
        "Drop temperature to **4 °C** with **10% unsaturated tails** and **No cholesterol** — then raise unsaturated tails (like Arctic fish) or add **Optimal cholesterol** to rescue fluidity.",
        "Switch between **Simple**, **Facilitated**, **Na⁺/K⁺ Pump**, and **SGLT1** to compare gradient directions and ATP use.",
      ]}
      caption={
        <span>
          At <strong>{temp} °C</strong> with <strong>{unsatPct}% cis-unsaturated tails</strong> and{" "}
          <strong>{chol === "none" ? "no" : chol}</strong> cholesterol, the bilayer is{" "}
          <strong>{stateLabel.toLowerCase()}</strong> (index {fluidity}/100).{" "}
          {chol !== "none"
            ? temp <= 12
              ? "Cholesterol disrupts tight tail packing at low temperature, preventing crystallization."
              : temp >= 34
                ? "Cholesterol's rigid steroid rings restrain excessive phospholipid motion at high temperature."
                : "Cholesterol stabilizes lateral motion inside the physiological fluidity zone."
            : "Without cholesterol buffering, extreme cold solidifies the bilayer and heat makes it leaky."}{" "}
          Active pathway: <strong>{gradientLabel}</strong> ({atpLabel}).
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider label="Temperature" value={temp} min={0} max={45} step={1} onChange={setTemp} format={(v) => `${v} °C`} />
          <Slider
            label="cis-Unsaturated Tails"
            value={unsatPct}
            min={0}
            max={100}
            step={5}
            onChange={setUnsatPct}
            format={(v) => `${v}%`}
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Cholesterol Buffer [HL]</div>
            <Segmented<CholLevel>
              label="Cholesterol content"
              value={chol}
              onChange={setChol}
              options={[
                { value: "none", label: "None (0%)" },
                { value: "optimal", label: "Optimal (30%)" },
                { value: "high", label: "High (45%)" },
              ]}
            />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Transport Pathway</div>
            <Segmented<TransportMode>
              label="Membrane transport pathway"
              value={transport}
              onChange={setTransport}
              options={[
                { value: "simple", label: "Simple" },
                { value: "facilitated", label: "Facilitated" },
                { value: "pump", label: "Na⁺/K⁺ Pump" },
                { value: "sglt1", label: "SGLT1" },
              ]}
            />
          </div>
        </div>

        <svg
          viewBox="0 0 600 245"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Interactive fluid mosaic phospholipid bilayer with dynamic tail kinks, cholesterol, and membrane transport protein"
          className="h-auto w-full rounded-xl border border-line bg-surface"
        >
          {/* Extracellular & Cytoplasmic zones */}
          <rect x={8} y={8} width={584} height={74} rx={8} fill="#e0f2fe" />
          <text x={20} y={26} fontSize={11} fontWeight={700} fill="#0369a1">
            Extracellular Fluid {transport === "pump" || transport === "sglt1" ? "(High Na⁺, Low K⁺)" : "(High Solute)"}
          </text>
          <rect x={8} y={174} width={584} height={63} rx={8} fill="#fef9c3" />
          <text x={20} y={226} fontSize={11} fontWeight={700} fill="#854d0e">
            Cytoplasm {transport === "pump" || transport === "sglt1" ? "(Low Na⁺, High K⁺)" : "(Low Solute)"}
          </text>

          {/* Hydrophobic core background */}
          <rect
            x={8}
            y={82}
            width={584}
            height={92}
            fill={fluidity < 30 ? "#e2e8f0" : fluidity > 75 ? "#fee2e2" : "#fffbeb"}
          />

          {/* Left phospholipids (hugging central transport site outward) */}
          {cols.map((c) => renderLipidPair(216 - c * spacing, c))}

          {/* Right phospholipids */}
          {cols.map((c) => renderLipidPair(384 + c * spacing, c + 10))}

          {/* Cholesterol wedges */}
          {chol !== "none" ? (
            <g>
              {[1, 3, 5].map((pos) => (
                <g key={`chol-l-${pos}`}>
                  <rect x={216 - pos * spacing - spacing * 0.5 - 4} y={98} width={8} height={26} rx={3} fill="#f59e0b" stroke="#92400e" strokeWidth={1.2} />
                  <rect x={384 + pos * spacing + spacing * 0.5 - 4} y={132} width={8} height={26} rx={3} fill="#f59e0b" stroke="#92400e" strokeWidth={1.2} />
                </g>
              ))}
              {chol === "high" ? (
                <g>
                  {[2, 4].map((pos) => (
                    <g key={`chol-h-${pos}`}>
                      <rect x={216 - pos * spacing - spacing * 0.5 - 4} y={132} width={8} height={26} rx={3} fill="#f59e0b" stroke="#92400e" strokeWidth={1.2} />
                      <rect x={384 + pos * spacing + spacing * 0.5 - 4} y={98} width={8} height={26} rx={3} fill="#f59e0b" stroke="#92400e" strokeWidth={1.2} />
                    </g>
                  ))}
                </g>
              ) : null}
            </g>
          ) : null}

          {/* Central Transport Feature */}
          {transport === "simple" ? (
            <g>
              {/* Extra lipids across the middle for direct lipid-core diffusion */}
              {[0, 1, 2, 3, 4].map((c) => renderLipidPair(242 + c * 29, c + 25))}
              <line x1={300} y1={38} x2={300} y2={200} stroke="#0f766e" strokeWidth={2.6} strokeDasharray="5 3" />
              <polygon points="294,193 306,193 300,205" fill="#0f766e" />
              <rect x={238} y={34} width={124} height={22} rx={6} fill="#ccfbf1" stroke="#0d9488" strokeWidth={1.2} />
              <text x={300} y={49} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#115e59">
                O₂ / CO₂ / Steroids
              </text>
              <text x={300} y={220} textAnchor="middle" fontSize={10} fontWeight={700} fill="#0f766e">
                Simple Diffusion (No protein · No ATP)
              </text>
            </g>
          ) : null}

          {transport === "facilitated" ? (
            <g>
              <rect x={256} y={72} width={30} height={112} rx={12} fill="#6366f1" stroke="#4338ca" strokeWidth={1.8} />
              <rect x={314} y={72} width={30} height={112} rx={12} fill="#6366f1" stroke="#4338ca" strokeWidth={1.8} />
              <rect x={286} y={74} width={28} height={108} fill="#eef2ff" />
              <line x1={300} y1={42} x2={300} y2={200} stroke="#4338ca" strokeWidth={2.6} />
              <polygon points="294,193 306,193 300,205" fill="#4338ca" />
              <text x={300} y={36} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#3730a3">
                Hydrophilic Channel / Aquaporin
              </text>
              <text x={300} y={220} textAnchor="middle" fontSize={10} fontWeight={700} fill="#3730a3">
                Facilitated Diffusion (Down gradient · 0 ATP)
              </text>
            </g>
          ) : null}

          {transport === "pump" ? (
            <g>
              <rect x={232} y={70} width={136} height={116} rx={20} fill="#fee2e2" stroke="#dc2626" strokeWidth={2} />
              <text x={300} y={124} textAnchor="middle" fontSize={11} fontWeight={700} fill="#991b1b">
                Na⁺/K⁺-ATPase
              </text>
              <text x={300} y={139} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#b91c1c">
                Primary Active Pump
              </text>
              {/* 3 Na+ out */}
              <line x1={266} y1={198} x2={266} y2={48} stroke="#dc2626" strokeWidth={2.5} />
              <polygon points="260,54 272,54 266,42" fill="#dc2626" />
              <text x={266} y={36} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#dc2626">
                3 Na⁺ OUT
              </text>
              {/* 2 K+ in */}
              <line x1={334} y1={48} x2={334} y2={198} stroke="#2563eb" strokeWidth={2.5} />
              <polygon points="328,192 340,192 334,204" fill="#2563eb" />
              <text x={334} y={219} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#1d4ed8">
                2 K⁺ IN
              </text>
              <rect x={212} y={206} width={92} height={20} rx={6} fill="#fef3c7" stroke="#d97706" strokeWidth={1.2} />
              <text x={258} y={220} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#92400e">
                1 ATP → ADP+Pᵢ
              </text>
            </g>
          ) : null}

          {transport === "sglt1" ? (
            <g>
              <rect x={232} y={70} width={136} height={116} rx={20} fill="#ede9fe" stroke="#7c3aed" strokeWidth={2} />
              <text x={300} y={124} textAnchor="middle" fontSize={11} fontWeight={700} fill="#5b21b6">
                SGLT1 Symporter
              </text>
              <text x={300} y={139} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#6d28d9">
                Secondary Active [HL]
              </text>
              <line x1={266} y1={48} x2={266} y2={198} stroke="#b45309" strokeWidth={2.5} />
              <polygon points="260,192 272,192 266,204" fill="#b45309" />
              <text x={262} y={36} textAnchor="middle" fontSize={10} fontWeight={700} fill="#92400e">
                Na⁺ (down)
              </text>
              <line x1={334} y1={48} x2={334} y2={198} stroke="#059669" strokeWidth={2.5} />
              <polygon points="328,192 340,192 334,204" fill="#059669" />
              <text x={340} y={36} textAnchor="middle" fontSize={10} fontWeight={700} fill="#047857">
                Glucose (uphill)
              </text>
              <text x={300} y={220} textAnchor="middle" fontSize={9.8} fontWeight={700} fill="#5b21b6">
                Powered by basolateral Na⁺/K⁺ pump gradient
              </text>
            </g>
          ) : null}
        </svg>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Readout label="Fluidity Index" value={`${fluidity} / 100`} tone={stateTone} />
          <Readout label="Membrane State" value={stateLabel} tone={stateTone} />
          <div className="col-span-2 sm:col-span-1">
            <Readout label="ATP Cost" value={atpLabel} tone="brand" />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

type CellShape = "cube" | "sphere" | "flat" | "microvilli";

function SavDiffusionExplorer() {
  const [shape, setShape] = useState<CellShape>("cube");
  const [size, setSize] = useState(12);
  const [depth, setDepth] = useState(4);
  const [foldFactor, setFoldFactor] = useState(4);

  let sa = 0;
  let vol = 0;
  let sav = 0;
  let corePenPct = 100;

  if (shape === "cube") {
    sa = 6 * size * size;
    vol = size * size * size;
    sav = 6 / size;
    const inner = Math.max(0, size - 2 * depth);
    corePenPct = 100 * (1 - Math.pow(inner / size, 3));
  } else if (shape === "sphere") {
    sa = 4 * Math.PI * size * size;
    vol = (4 / 3) * Math.PI * size * size * size;
    sav = 3 / size;
    const inner = Math.max(0, size - depth);
    corePenPct = 100 * (1 - Math.pow(inner / size, 3));
  } else if (shape === "flat") {
    // Wafer-thin Type I pneumocyte sheet: size × size × 2 μm
    const h = 2;
    sa = 2 * (size * size + 2 * size * h);
    vol = size * size * h;
    sav = sa / vol;
    corePenPct = depth >= h / 2 ? 100 : 100 * ((2 * depth) / h);
  } else {
    // Enterocyte cube with apical microvilli multiplying top-face SA by foldFactor
    sa = (5 + foldFactor) * size * size;
    vol = size * size * size;
    sav = (5 + foldFactor) / size;
    const inner = Math.max(0, size - 2 * depth);
    corePenPct = 100 * (1 - Math.pow(inner / size, 3));
  }

  const savTone: "good" | "bad" = sav >= 0.3 ? "good" : "bad";
  const statusLabel =
    sav >= 0.5 ? "Fast Exchange" : sav >= 0.3 ? "Viable Limit" : "Diffusion-Limited";

  // Graph scaling for right half (x: 325..575 maps size 2..60; y: 200..36 maps SA:V 0..3.0)
  const gx = (s: number) => 325 + ((s - 2) / 58) * 250;
  const gy = (ratio: number) => 200 - (Math.min(3, ratio) / 3) * 164;

  const curvePoints: string[] = [];
  for (let s = 2; s <= 60; s += 2) {
    const r =
      shape === "cube"
        ? 6 / s
        : shape === "sphere"
          ? 3 / s
          : shape === "flat"
            ? 1 + 4 / s
            : (5 + foldFactor) / s;
    curvePoints.push(`${gx(s).toFixed(1)},${gy(r).toFixed(1)}`);
  }

  // Left-panel cell visual scaling (max box ~136 px)
  const drawSize = 36 + ((size - 2) / 58) * 100;
  const innerFrac =
    shape === "cube" || shape === "microvilli"
      ? Math.max(0, (size - 2 * depth) / size)
      : shape === "sphere"
        ? Math.max(0, (size - depth) / size)
        : 0;

  return (
    <WidgetFrame
      title="SA:V Ratio & Diffusion Limit Explorer [SL]"
      tryThis={[
        "Slide a **Cube** from `6 μm` up to `40 μm` and watch `SA:V = 6/L` plunge below the `0.30 μm⁻¹` metabolic threshold while the hypoxic red core grows.",
        "Keep size at `40 μm` and switch to **Flattened (Type I)** or **Microvilli Border** to see how specialized cells rescue exchange capacity.",
      ]}
      caption={
        <span>
          Formula:{" "}
          {shape === "cube" ? (
            <M>{"SA/V = 6/L"}</M>
          ) : shape === "sphere" ? (
            <M>{"SA/V = 3/r"}</M>
          ) : shape === "flat" ? (
            <M>{"SA/V = 1 + 4/L"}</M>
          ) : (
            <M>{`SA/V = ${5 + foldFactor}/L`}</M>
          )}
          . At {shape === "sphere" ? `radius r = ${size} μm` : `width L = ${size} μm`}, SA:V is{" "}
          <strong>{sav.toFixed(2)} μm⁻¹</strong> ({statusLabel}) and diffusion reaches{" "}
          <strong>{corePenPct.toFixed(1)}%</strong> of cell volume.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Cell Geometry / Adaptation</div>
          <Segmented<CellShape>
            label="Cell geometry"
            value={shape}
            onChange={setShape}
            options={[
              { value: "cube", label: "Cube" },
              { value: "sphere", label: "Sphere" },
              { value: "flat", label: "Flattened (Type I)" },
              { value: "microvilli", label: "Microvilli" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label={shape === "sphere" ? "Cell Radius r" : "Cell Side / Width L"}
            value={size}
            min={2}
            max={60}
            step={1}
            onChange={setSize}
            format={(v) => `${v} μm`}
          />
          {shape === "microvilli" ? (
            <Stepper
              label="Apical Microvilli Area Fold"
              value={foldFactor}
              min={1}
              max={6}
              step={1}
              onChange={setFoldFactor}
              format={(v) => `${v}×`}
            />
          ) : (
            <Stepper
              label="O₂ Diffusion Penetration d"
              value={depth}
              min={1}
              max={15}
              step={1}
              onChange={setDepth}
              format={(v) => `${v} μm`}
            />
          )}
        </div>

        <svg
          viewBox="0 0 600 240"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Cell cross-section showing oxygenated diffusion rim and hypoxic core beside a live surface area to volume ratio curve"
          className="h-auto w-full rounded-xl border border-line bg-surface"
        >
          {/* Left panel: cell visual */}
          <rect x={8} y={8} width={268} height={224} rx={10} fill="#f8fafc" stroke="#cbd5e1" strokeWidth={1.2} />
          <text x={142} y={26} textAnchor="middle" fontSize={11} fontWeight={700} fill="#0f172a">
            Diffusion Cross-Section (Green = Reached)
          </text>

          {shape === "cube" ? (
            <g>
              <rect
                x={142 - drawSize / 2}
                y={122 - drawSize / 2}
                width={drawSize}
                height={drawSize}
                rx={6}
                fill="#10b981"
                stroke="#047857"
                strokeWidth={2}
              />
              {innerFrac > 0.02 ? (
                <rect
                  x={142 - (drawSize * innerFrac) / 2}
                  y={122 - (drawSize * innerFrac) / 2}
                  width={drawSize * innerFrac}
                  height={drawSize * innerFrac}
                  rx={3}
                  fill="#f43f5e"
                  stroke="#9f1239"
                  strokeWidth={1.4}
                />
              ) : null}
            </g>
          ) : null}

          {shape === "sphere" ? (
            <g>
              <circle cx={142} cy={122} r={drawSize / 2} fill="#10b981" stroke="#047857" strokeWidth={2} />
              {innerFrac > 0.02 ? (
                <circle cx={142} cy={122} r={(drawSize * innerFrac) / 2} fill="#f43f5e" stroke="#9f1239" strokeWidth={1.4} />
              ) : null}
            </g>
          ) : null}

          {shape === "flat" ? (
            <g>
              <rect
                x={142 - Math.min(110, drawSize * 0.9)}
                y={114}
                width={Math.min(220, drawSize * 1.8)}
                height={16}
                rx={7}
                fill="#10b981"
                stroke="#047857"
                strokeWidth={2}
              />
              <text x={142} y={154} textAnchor="middle" fontSize={10} fontWeight={700} fill="#047857">
                2 μm thin sheet → 100% O₂ reach
              </text>
            </g>
          ) : null}

          {shape === "microvilli" ? (
            <g>
              <rect
                x={142 - drawSize / 2}
                y={132 - drawSize / 2}
                width={drawSize}
                height={drawSize * 0.85}
                rx={5}
                fill="#10b981"
                stroke="#047857"
                strokeWidth={2}
              />
              {/* Apical microvilli fingers */}
              {Array.from({ length: foldFactor * 2 + 2 }, (_, i) => {
                const count = foldFactor * 2 + 2;
                const xPos = 142 - drawSize / 2 + ((i + 0.5) / count) * drawSize;
                return (
                  <rect
                    key={`mv-${i}`}
                    x={xPos - 2.5}
                    y={132 - drawSize / 2 - 14}
                    width={5}
                    height={16}
                    rx={2.5}
                    fill="#34d399"
                    stroke="#047857"
                    strokeWidth={1}
                  />
                );
              })}
              {innerFrac > 0.02 ? (
                <rect
                  x={142 - (drawSize * innerFrac) / 2}
                  y={132 - drawSize * 0.075 - (drawSize * 0.85 * innerFrac) / 2}
                  width={drawSize * innerFrac}
                  height={drawSize * 0.85 * innerFrac}
                  rx={3}
                  fill="#f43f5e"
                  stroke="#9f1239"
                  strokeWidth={1.2}
                />
              ) : null}
            </g>
          ) : null}

          <text x={142} y={216} textAnchor="middle" fontSize={10} fontWeight={700} fill={corePenPct < 70 ? "#be123c" : "#047857"}>
            {corePenPct.toFixed(1)}% of volume reached by diffusion
          </text>

          {/* Right panel: live SA:V curve */}
          <rect x={286} y={8} width={306} height={224} rx={10} fill="#ffffff" stroke="#cbd5e1" strokeWidth={1.2} />
          <text x={445} y={24} textAnchor="middle" fontSize={11} fontWeight={700} fill="#0f172a">
            SA:V Ratio (μm⁻¹) vs Size (μm)
          </text>
          {/* Axes */}
          <line x1={325} y1={200} x2={580} y2={200} stroke="#64748b" strokeWidth={1.4} />
          <line x1={325} y1={36} x2={325} y2={200} stroke="#64748b" strokeWidth={1.4} />
          {/* Threshold line at SA:V = 0.30 */}
          <line x1={325} y1={gy(0.3)} x2={580} y2={gy(0.3)} stroke="#dc2626" strokeWidth={1.3} strokeDasharray="4 3" />
          <text x={576} y={gy(0.3) - 4} textAnchor="end" fontSize={8.5} fontWeight={700} fill="#dc2626">
            0.30 μm⁻¹ threshold
          </text>
          {/* Y-axis ticks */}
          {[0, 1, 2, 3].map((v) => (
            <g key={`yt-${v}`}>
              <line x1={320} y1={gy(v)} x2={325} y2={gy(v)} stroke="#64748b" strokeWidth={1.2} />
              <text x={317} y={gy(v) + 3} textAnchor="end" fontSize={9} fill="#475569">
                {v}
              </text>
            </g>
          ))}
          {/* X-axis ticks */}
          {[10, 20, 40, 60].map((v) => (
            <g key={`xt-${v}`}>
              <line x1={gx(v)} y1={200} x2={gx(v)} y2={205} stroke="#64748b" strokeWidth={1.2} />
              <text x={gx(v)} y={217} textAnchor="middle" fontSize={9} fill="#475569">
                {v}
              </text>
            </g>
          ))}
          <text x={452} y={228} textAnchor="middle" fontSize={9} fontWeight={700} fill="#475569">
            {shape === "sphere" ? "Radius r (μm)" : "Side length L (μm)"}
          </text>

          {/* Curve polyline */}
          <polyline fill="none" stroke="#0284c7" strokeWidth={2.4} points={curvePoints.join(" ")} />
          {/* Live current point */}
          <circle
            cx={gx(size)}
            cy={gy(sav)}
            r={6}
            fill={savTone === "good" ? "#10b981" : "#e11d48"}
            stroke="#ffffff"
            strokeWidth={2}
          />
        </svg>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout label="Surface Area" value={`${Math.round(sa).toLocaleString("en-GB")} μm²`} tone="ink" />
          <Readout label="Volume" value={`${Math.round(vol).toLocaleString("en-GB")} μm³`} tone="ink" />
          <Readout label="SA:V Ratio" value={`${sav.toFixed(2)} μm⁻¹`} tone={savTone} />
          <Readout label="Exchange Status" value={statusLabel} tone={savTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "membrane-fluidity-transport-lab",
    title: "Fluid Mosaic Membrane & Transport Fluidity Lab [SL/HL]",
    blurb: "Tune temperature, cis-unsaturated fatty-acid kinks, cholesterol buffering, and active/passive transport pathways.",
    Component: MembraneFluidityLab,
  },
  {
    id: "sav-diffusion-explorer",
    title: "SA:V Ratio & Diffusion Limit Explorer [SL]",
    blurb: "Compare cube, sphere, flattened Type I pneumocyte, and microvilli brush-border scaling against the diffusion limit.",
    Component: SavDiffusionExplorer,
  },
];

export default widgets;
