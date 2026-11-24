"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ===========================================================================
// Widget 1: Simpson's Reciprocal Diversity Index (D) & Evenness Lab [SL]
// ===========================================================================

const FOREST_SPECIES = [
  { name: "Dipterocarp", short: "Dipt.", color: "#10b981" },
  { name: "Strangler Fig", short: "Fig", color: "#0ea5e9" },
  { name: "Wild Orchid", short: "Orchid", color: "#8b5cf6" },
  { name: "Tree Fern", short: "Fern", color: "#f59e0b" },
  { name: "Rattan Palm", short: "Rattan", color: "#ec4899" },
] as const;

type CommunityPreset = "even" | "dominated" | "reef" | "monoculture";

const PRESET_COUNTS: Record<CommunityPreset, number[]> = {
  even: [20, 20, 20, 20, 20],
  dominated: [80, 5, 5, 5, 5],
  reef: [16, 14, 10, 6, 4],
  monoculture: [50, 0, 0, 0, 0],
};

function SimpsonsDiversityLab() {
  const [counts, setCounts] = useState<number[]>([20, 20, 20, 20, 20]);
  const [preset, setPreset] = useState<CommunityPreset>("even");

  const applyPreset = (p: CommunityPreset) => {
    setPreset(p);
    setCounts([...PRESET_COUNTS[p]]);
  };

  const updateCount = (index: number, value: number) => {
    setCounts((prev) => prev.map((c, i) => (i === index ? value : c)));
  };

  const richness = counts.filter((c) => c > 0).length;
  const N = counts.reduce((acc, c) => acc + c, 0);
  const numer = N * (N - 1);
  const denom = counts.reduce((acc, c) => acc + c * (c - 1), 0);
  const validD = N >= 2 && denom > 0;
  const D = validD ? numer / denom : null;
  const maxBar = Math.max(10, ...counts);

  // Theoretical finite-sample D for an evenly distributed community with same S and N
  const dMax = richness > 0 && N > richness ? (richness * (N - 1)) / (N - richness) : Math.max(1, richness);
  const gaugeMax = Math.max(5.5, Math.min(7, dMax));
  const gaugeFrac = D !== null ? Math.min(1, Math.max(0, (D - 1) / Math.max(1, gaugeMax - 1))) : 0;

  const tone: "good" | "brand" | "bad" =
    D === null ? "brand" : D >= 3.5 ? "good" : D >= 2.0 ? "brand" : "bad";

  const statusText =
    D === null
      ? "Increase counts so at least one species has 2+ individuals to compute Simpson's D."
      : D >= 3.8
        ? "High diversity & high evenness — resilient community buffered against species-specific blight or disturbance."
        : D >= 2.2
          ? "Moderate diversity — balanced partly across species, though more dominant taxa lower evenness."
          : "Low diversity — heavy dominance by one species (or monoculture), signalling disturbance, pollution, or low resilience.";

  return (
    <WidgetFrame
      title="Simpson's Reciprocal Diversity Index (D) & Evenness Lab [SL]"
      tryThis={[
        "Compare **Even Forest** (20, 20, 20, 20, 20) vs **Dominated** (80, 5, 5, 5, 5): same richness (S = 5) and N = 100, yet D plunges more than 3-fold!",
        "Switch to **Monoculture** and check why the minimum possible value of D is **1.00**, never 0.",
        "Start from **Dominated** and shift individuals out of Dipterocarp into rarer species — watch the denominator Σn(n − 1) shrink as D climbs.",
      ]}
      caption={
        <span>
          <strong>Live interpretation:</strong> {statusText}{" "}
          {validD && D !== null ? (
            <>
              Formula: <M>{`D = (${N} * ${N - 1}) / ${denom} = ${D.toFixed(2)}`}</M>.
            </>
          ) : null}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented<CommunityPreset>
            label="Preset community"
            value={preset}
            onChange={applyPreset}
            options={[
              { value: "even", label: "Even Forest" },
              { value: "dominated", label: "Dominated" },
              { value: "reef", label: "Mixed Plot" },
              { value: "monoculture", label: "Monoculture" },
            ]}
          />
        </div>

        <svg
          viewBox="0 0 460 205"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Live bar chart of five rainforest species abundances alongside a Simpson reciprocal diversity gauge"
          className="h-auto w-full rounded-xl border border-line bg-surface-2"
        >
          {/* Left panel: abundance bars */}
          <text x="148" y="20" textAnchor="middle" fontSize="11.5" fontWeight="700" className="fill-ink">
            Species Counts (n)
          </text>
          <line x1="28" y1="166" x2="274" y2="166" stroke="#94a3b8" strokeWidth="1.4" />
          <line x1="28" y1="166" x2="28" y2="34" stroke="#94a3b8" strokeWidth="1.4" />

          {FOREST_SPECIES.map((sp, i) => {
            const count = counts[i] ?? 0;
            const barH = (count / maxBar) * 118;
            const x = 40 + i * 46;
            const y = 166 - barH;
            const pct = N > 0 ? Math.round((count / N) * 100) : 0;
            return (
              <g key={sp.name}>
                <rect x={x} y={y} width={32} height={Math.max(0, barH)} rx={4} fill={sp.color} opacity={count > 0 ? 0.92 : 0.2} />
                <text x={x + 16} y={Math.max(38, y - 5)} textAnchor="middle" fontSize="10" fontWeight="700" className="fill-ink">
                  {count}
                </text>
                <text x={x + 16} y="180" textAnchor="middle" fontSize="9.5" fontWeight="600" className="fill-ink-2">
                  {sp.short}
                </text>
                <text x={x + 16} y="193" textAnchor="middle" fontSize="8.8" className="fill-ink-2">
                  {pct}%
                </text>
              </g>
            );
          })}

          {/* Divider */}
          <line x1="290" y1="16" x2="290" y2="192" stroke="#cbd5e1" strokeDasharray="4 4" strokeWidth="1.2" />

          {/* Right panel: Simpson's D gauge */}
          <text x="375" y="20" textAnchor="middle" fontSize="11.5" fontWeight="700" className="fill-ink">
            Simpson&apos;s D Gauge
          </text>
          <path
            d="M 314 134 A 61 61 0 0 1 436 134"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M 314 134 A 61 61 0 0 1 436 134"
            fill="none"
            stroke={tone === "good" ? "#10b981" : tone === "bad" ? "#ef4444" : "#2563eb"}
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={`${(gaugeFrac * 191.6).toFixed(1)} 200`}
          />
          <text x="375" y="114" textAnchor="middle" fontSize="24" fontWeight="800" className="fill-ink">
            {D !== null ? D.toFixed(2) : "—"}
          </text>
          <text x="375" y="132" textAnchor="middle" fontSize="9.5" fontWeight="600" className="fill-ink-2">
            Reciprocal Index D
          </text>
          <text x="314" y="154" textAnchor="middle" fontSize="9" className="fill-ink-2">
            1.0
          </text>
          <text x="436" y="154" textAnchor="middle" fontSize="9" className="fill-ink-2">
            {gaugeMax.toFixed(1)}
          </text>
          <text x="375" y="175" textAnchor="middle" fontSize="9.5" className="fill-ink-2">
            N(N−1) = {numer}
          </text>
          <text x="375" y="190" textAnchor="middle" fontSize="9.5" className="fill-ink-2">
            Σn(n−1) = {denom}
          </text>
        </svg>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {FOREST_SPECIES.map((sp, i) => (
            <Slider
              key={sp.name}
              label={sp.name}
              value={counts[i] ?? 0}
              min={0}
              max={80}
              step={1}
              onChange={(v) => updateCount(i, v)}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Richness (S)" value={richness} tone="ink" />
          <Readout label="Total (N)" value={N} tone="ink" />
          <Readout label="Σ n(n − 1)" value={denom} tone="brand" />
          <Readout label="Simpson's D" value={D !== null ? D.toFixed(2) : "—"} tone={tone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// Widget 2: Cladogram & Molecular-Clock Explorer [HL]
// ===========================================================================

type ExplorerMode = "cladogram" | "clock";
type CladeNodeId = "n1" | "n2" | "n3" | "n4";

const NODE_INFO: Record<
  CladeNodeId,
  {
    label: string;
    synapomorphy: string;
    members: string[];
    explanation: string;
  }
> = {
  n1: {
    label: "Node 1 (Root)",
    synapomorphy: "Vertebrae & jaws",
    members: ["Shark", "Frog", "Mammal", "Lizard", "Bird"],
    explanation: "The deepest root node unites all five jawed vertebrates (Gnathostomata) into one all-inclusive clade.",
  },
  n2: {
    label: "Node 2 (Tetrapods)",
    synapomorphy: "Four pentadactyl limbs",
    members: ["Frog", "Mammal", "Lizard", "Bird"],
    explanation: "Snipping the branch just below Node 2 captures all four tetrapods while leaving out the outgroup Shark.",
  },
  n3: {
    label: "Node 3 (Amniotes)",
    synapomorphy: "Amniotic egg",
    members: ["Mammal", "Lizard", "Bird"],
    explanation: "Amniotes form a true monophyletic clade uniting Mammals with Sauropsids (Lizards + Birds). Notice rotating Node 3 flips tip order without altering clade membership!",
  },
  n4: {
    label: "Node 4 (Sauropsids)",
    synapomorphy: "Keratin scales / diapsid lineage",
    members: ["Lizard", "Bird"],
    explanation: "Lizard and Bird are sister taxa sharing their most recent common ancestor at Node 4 — which is why excluding Birds from 'Reptilia' makes it paraphyletic!",
  },
};

function CladogramMolecularClockExplorer() {
  const [mode, setMode] = useState<ExplorerMode>("cladogram");
  const [selectedNode, setSelectedNode] = useState<CladeNodeId>("n3");
  const [flipN3, setFlipN3] = useState(false);
  const [flipN4, setFlipN4] = useState(false);

  // Molecular clock state
  const [calAge, setCalAge] = useState(40); // Ma
  const [calDiff, setCalDiff] = useState(20); // bp
  const [testDiff, setTestDiff] = useState(32); // bp

  const info = NODE_INFO[selectedNode];
  const inClade = (taxon: string) => info.members.includes(taxon);

  // Compute tip x-positions under optional node rotations at N3 and N4
  const sauropsidTips: [string, string] = flipN4 ? ["Bird", "Lizard"] : ["Lizard", "Bird"];
  const amnioteTips: [string, string, string] = flipN3
    ? [sauropsidTips[0], sauropsidTips[1], "Mammal"]
    : ["Mammal", sauropsidTips[0], sauropsidTips[1]];

  const tipX = {
    Shark: 54,
    Frog: 136,
    slot2: 224,
    slot3: 316,
    slot4: 404,
  };

  // Node coordinates depend smoothly on flipN3 so geometry stays clean and tangle-free
  const n1 = { x: 84, y: 174 };
  const n2 = { x: 172, y: 138 };
  const n3 = { x: 282, y: 102 };
  const n4 = flipN3 ? { x: 270, y: 68 } : { x: 360, y: 68 };
  const mammalTipX = flipN3 ? tipX.slot4 : tipX.slot2;
  const sLeftX = flipN3 ? tipX.slot2 : tipX.slot3;
  const sRightX = flipN3 ? tipX.slot3 : tipX.slot4;

  // Molecular clock math
  const pairwiseRate = calDiff / calAge; // bp per Ma
  const perLineageRate = pairwiseRate / 2;
  const estAge = testDiff / pairwiseRate;

  // SVG plot scaling for molecular clock
  const maxPlotAge = Math.max(100, Math.ceil((Math.max(calAge, estAge) * 1.15) / 20) * 20);
  const maxPlotDiff = Math.max(80, Math.ceil((Math.max(calDiff, testDiff) * 1.15) / 20) * 20);
  const plotX = (age: number) => 56 + (age / maxPlotAge) * 372;
  const plotY = (diff: number) => 176 - (diff / maxPlotDiff) * 144;

  // Line endpoint inside plot box
  const lineEndAge = Math.min(maxPlotAge, maxPlotDiff / pairwiseRate);
  const lineEndDiff = lineEndAge * pairwiseRate;

  const isEdgeHighlighted = (edge: "n1-n2" | "n2-n3" | "n3-n4" | "n1-shark" | "n2-frog" | "n3-mammal" | "n4-left" | "n4-right") => {
    if (selectedNode === "n1") return true;
    if (selectedNode === "n2") return edge !== "n1-shark" && edge !== "n1-n2";
    if (selectedNode === "n3") return edge === "n3-n4" || edge === "n3-mammal" || edge === "n4-left" || edge === "n4-right";
    return edge === "n4-left" || edge === "n4-right";
  };

  const strokeFor = (active: boolean) => (active ? "#059669" : "#64748b");
  const widthFor = (active: boolean) => (active ? 3.2 : 2);

  return (
    <WidgetFrame
      title="Cladogram & Molecular-Clock Explorer [HL]"
      tryThis={[
        "Click **Rotate Node 3** or **Rotate Node 4**: the tip order across the top flips, yet every clade and MRCA remains 100% unchanged!",
        "Select **Node 4 (Sauropsids)** to verify why Lizard and Bird are sister taxa even when Mammal sits beside Lizard.",
        "Switch to **Molecular Clock**, double the Fossil Calibration Age while keeping Calibration Differences fixed, and observe how the estimated divergence time scales.",
      ]}
      caption={
        mode === "cladogram" ? (
          <span>
            <strong>{info.label}:</strong> {info.explanation}
          </span>
        ) : (
          <span>
            <strong>Clock calibration:</strong> Pairwise rate{" "}
            <M>{`r = ${calDiff} / ${calAge} = ${pairwiseRate.toFixed(2)}`}</M> bp/Ma ({" "}
            <M>{`r_L = ${perLineageRate.toFixed(2)}`}</M> bp/Ma per lineage). A pair differing at{" "}
            <strong>{testDiff} bp</strong> yields estimated divergence{" "}
            <M>{`t = ${testDiff} / ${pairwiseRate.toFixed(2)} = ${estAge.toFixed(1)}`}</M> Ma.
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<ExplorerMode>
            label="Explorer mode"
            value={mode}
            onChange={setMode}
            options={[
              { value: "cladogram", label: "Cladogram & Clades" },
              { value: "clock", label: "Molecular Clock" },
            ]}
          />
        </div>

        {mode === "cladogram" ? (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Segmented<CladeNodeId>
                label="Select ancestral node"
                value={selectedNode}
                onChange={setSelectedNode}
                options={[
                  { value: "n1", label: "Node 1 (Root)" },
                  { value: "n2", label: "Node 2 (Tetrapods)" },
                  { value: "n3", label: "Node 3 (Amniotes)" },
                  { value: "n4", label: "Node 4 (Sauropsids)" },
                ]}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setFlipN3((v) => !v)}
                className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-bold text-ink transition hover:bg-surface-2"
              >
                ↻ Rotate Node 3 (Swap Mammal ↔ Sauropsids)
              </button>
              <button
                type="button"
                onClick={() => setFlipN4((v) => !v)}
                className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-bold text-ink transition hover:bg-surface-2"
              >
                ↻ Rotate Node 4 (Swap Lizard ↔ Bird)
              </button>
            </div>

            <svg
              viewBox="0 0 460 212"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Interactive rooted vertebrate cladogram allowing node selection and branch rotation"
              className="h-auto w-full rounded-xl border border-line bg-surface-2"
            >
              {/* Root stem */}
              <line x1={n1.x} y1="198" x2={n1.x} y2={n1.y} stroke={selectedNode === "n1" ? "#059669" : "#334155"} strokeWidth="2.8" />

              {/* Branches */}
              <line x1={n1.x} y1={n1.y} x2={tipX.Shark} y2="42" stroke={strokeFor(isEdgeHighlighted("n1-shark"))} strokeWidth={widthFor(isEdgeHighlighted("n1-shark"))} />
              <line x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} stroke={strokeFor(isEdgeHighlighted("n1-n2"))} strokeWidth={widthFor(isEdgeHighlighted("n1-n2"))} />
              <line x1={n2.x} y1={n2.y} x2={tipX.Frog} y2="42" stroke={strokeFor(isEdgeHighlighted("n2-frog"))} strokeWidth={widthFor(isEdgeHighlighted("n2-frog"))} />
              <line x1={n2.x} y1={n2.y} x2={n3.x} y2={n3.y} stroke={strokeFor(isEdgeHighlighted("n2-n3"))} strokeWidth={widthFor(isEdgeHighlighted("n2-n3"))} />
              <line x1={n3.x} y1={n3.y} x2={mammalTipX} y2="42" stroke={strokeFor(isEdgeHighlighted("n3-mammal"))} strokeWidth={widthFor(isEdgeHighlighted("n3-mammal"))} />
              <line x1={n3.x} y1={n3.y} x2={n4.x} y2={n4.y} stroke={strokeFor(isEdgeHighlighted("n3-n4"))} strokeWidth={widthFor(isEdgeHighlighted("n3-n4"))} />
              <line x1={n4.x} y1={n4.y} x2={sLeftX} y2="42" stroke={strokeFor(isEdgeHighlighted("n4-left"))} strokeWidth={widthFor(isEdgeHighlighted("n4-left"))} />
              <line x1={n4.x} y1={n4.y} x2={sRightX} y2="42" stroke={strokeFor(isEdgeHighlighted("n4-right"))} strokeWidth={widthFor(isEdgeHighlighted("n4-right"))} />

              {/* Synapomorphy tick marks */}
              <line x1="120" y1="150" x2="132" y2="162" stroke="#dc2626" strokeWidth="2.4" />
              <text x="135" y="168" fontSize="9" fontWeight="700" fill="#b91c1c">4 limbs</text>
              <line x1="222" y1="114" x2="232" y2="126" stroke="#dc2626" strokeWidth="2.4" />
              <text x="235" y="132" fontSize="9" fontWeight="700" fill="#b91c1c">Amniotic egg</text>

              {/* Clickable node dots */}
              {(
                [
                  { id: "n1" as const, pt: n1, lbl: "N1" },
                  { id: "n2" as const, pt: n2, lbl: "N2" },
                  { id: "n3" as const, pt: n3, lbl: "N3" },
                  { id: "n4" as const, pt: n4, lbl: "N4" },
                ] as const
              ).map((nd) => {
                const active = selectedNode === nd.id;
                return (
                  <g
                    key={nd.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${NODE_INFO[nd.id].label}`}
                    onClick={() => setSelectedNode(nd.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedNode(nd.id);
                      }
                    }}
                    className="cursor-pointer"
                  >
                    <circle cx={nd.pt.x} cy={nd.pt.y} r={active ? 8 : 6} fill={active ? "#059669" : "#2563eb"} stroke="#ffffff" strokeWidth="2" />
                    <text x={nd.pt.x + 12} y={nd.pt.y + 4} fontSize="9.5" fontWeight="700" className="fill-ink">
                      {nd.lbl}
                    </text>
                  </g>
                );
              })}

              {/* Terminal taxa badges */}
              {(
                [
                  { name: "Shark", x: tipX.Shark },
                  { name: "Frog", x: tipX.Frog },
                  { name: amnioteTips[0], x: tipX.slot2 },
                  { name: amnioteTips[1], x: tipX.slot3 },
                  { name: amnioteTips[2], x: tipX.slot4 },
                ] as const
              ).map((tip) => {
                const highlighted = inClade(tip.name);
                return (
                  <g key={tip.name}>
                    <rect
                      x={tip.x - 32}
                      y="14"
                      width="64"
                      height="24"
                      rx="7"
                      fill={highlighted ? "#d1fae5" : "#f1f5f9"}
                      stroke={highlighted ? "#059669" : "#94a3b8"}
                      strokeWidth={highlighted ? 1.8 : 1.2}
                    />
                    <text
                      x={tip.x}
                      y="30"
                      textAnchor="middle"
                      fontSize="10.5"
                      fontWeight="700"
                      fill={highlighted ? "#065f46" : "#334155"}
                    >
                      {tip.name}
                    </text>
                  </g>
                );
              })}

              <text x="230" y="202" textAnchor="middle" fontSize="9.5" className="fill-ink-2">
                Tip order: Shark · Frog · {amnioteTips.join(" · ")} (5 taxa → 4 internal nodes)
              </text>
            </svg>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              <Readout label="Clade Size" value={`${info.members.length} taxa`} tone="good" />
              <Readout label="Synapomorphy" value={<span className="text-sm">{info.synapomorphy}</span>} tone="brand" />
              <Readout label="Clade Members" value={<span className="text-sm">{info.members.join(", ")}</span>} tone="ink" />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <svg
              viewBox="0 0 460 215"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Interactive fossil-calibrated molecular clock plot mapping nucleotide differences to divergence age in millions of years"
              className="h-auto w-full rounded-xl border border-line bg-surface-2"
            >
              {/* Axes */}
              <line x1="56" y1="176" x2="432" y2="176" stroke="#334155" strokeWidth="1.6" />
              <line x1="56" y1="176" x2="56" y2="26" stroke="#334155" strokeWidth="1.6" />

              {/* Grid ticks */}
              {[0.25, 0.5, 0.75, 1].map((frac) => {
                const ageTick = Math.round(maxPlotAge * frac);
                const diffTick = Math.round(maxPlotDiff * frac);
                return (
                  <g key={frac}>
                    <line x1={plotX(ageTick)} y1="176" x2={plotX(ageTick)} y2="30" stroke="#e2e8f0" strokeWidth="1" />
                    <text x={plotX(ageTick)} y="191" textAnchor="middle" fontSize="9" className="fill-ink-2">
                      {ageTick}
                    </text>
                    <line x1="56" y1={plotY(diffTick)} x2="428" y2={plotY(diffTick)} stroke="#e2e8f0" strokeWidth="1" />
                    <text x="48" y={plotY(diffTick) + 3} textAnchor="end" fontSize="9" className="fill-ink-2">
                      {diffTick}
                    </text>
                  </g>
                );
              })}

              {/* Clock regression line */}
              <line x1={plotX(0)} y1={plotY(0)} x2={plotX(lineEndAge)} y2={plotY(lineEndDiff)} stroke="#2563eb" strokeWidth="2.5" />

              {/* Calibration fossil point */}
              <circle cx={plotX(calAge)} cy={plotY(calDiff)} r="6" fill="#1d4ed8" stroke="#ffffff" strokeWidth="1.8" />
              <text
                x={Math.min(370, plotX(calAge) + 8)}
                y={Math.max(36, plotY(calDiff) - 8)}
                fontSize="9.5"
                fontWeight="700"
                fill="#1d4ed8"
              >
                Fossil ({calAge} Ma, {calDiff} bp)
              </text>

              {/* Unknown pair projection */}
              {estAge <= maxPlotAge && testDiff <= maxPlotDiff ? (
                <g>
                  <line
                    x1={plotX(0)}
                    y1={plotY(testDiff)}
                    x2={plotX(estAge)}
                    y2={plotY(testDiff)}
                    stroke="#dc2626"
                    strokeDasharray="4 3"
                    strokeWidth="1.8"
                  />
                  <line
                    x1={plotX(estAge)}
                    y1={plotY(testDiff)}
                    x2={plotX(estAge)}
                    y2={plotY(0)}
                    stroke="#dc2626"
                    strokeDasharray="4 3"
                    strokeWidth="1.8"
                  />
                  <circle cx={plotX(estAge)} cy={plotY(testDiff)} r="5.5" fill="#dc2626" stroke="#ffffff" strokeWidth="1.8" />
                  <text
                    x={Math.min(375, plotX(estAge) + 8)}
                    y={Math.min(168, plotY(testDiff) + 14)}
                    fontSize="9.5"
                    fontWeight="700"
                    fill="#b91c1c"
                  >
                    Est: {estAge.toFixed(1)} Ma
                  </text>
                </g>
              ) : null}

              <text x="244" y="208" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-ink">
                Divergence Time (Ma)
              </text>
              <text x="16" y="102" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-ink" transform="rotate(-90 16 102)">
                DNA Differences (bp)
              </text>
            </svg>

            <div className="space-y-3">
              <Slider
                label="Fossil Calibration Age (Ma)"
                value={calAge}
                min={10}
                max={100}
                step={5}
                onChange={setCalAge}
                format={(v) => `${v} Ma`}
              />
              <Slider
                label="Calibration Pair Differences (bp)"
                value={calDiff}
                min={5}
                max={60}
                step={1}
                onChange={setCalDiff}
                format={(v) => `${v} bp`}
              />
              <Slider
                label="Mystery Pair Differences (bp)"
                value={testDiff}
                min={2}
                max={80}
                step={1}
                onChange={setTestDiff}
                format={(v) => `${v} bp`}
              />
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              <Readout label="Pairwise Rate (r)" value={`${pairwiseRate.toFixed(2)} bp/Ma`} tone="brand" />
              <Readout label="Per-Lineage Rate" value={`${perLineageRate.toFixed(2)} bp/Ma`} tone="ink" />
              <Readout label="Estimated Divergence" value={`${estAge.toFixed(1)} Ma`} tone="good" />
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "simpsons-diversity-lab",
    title: "Simpson's Diversity & Evenness Lab",
    blurb: "Adjust species counts across five forest taxa to see how richness and evenness drive Simpson's reciprocal index D.",
    Component: SimpsonsDiversityLab,
  },
  {
    id: "cladogram-molecular-clock",
    title: "Cladogram & Molecular-Clock Explorer [HL]",
    blurb: "Inspect monophyletic clades, rotate cladogram nodes without altering ancestry, and calibrate a live molecular clock.",
    Component: CladogramMolecularClockExplorer,
  },
];

export default widgets;
