"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type EcoMode = "lincoln" | "chi";
type BiasMode = "unbiased" | "tagloss" | "traphappy";

function LincolnChiLab() {
  const [mode, setMode] = useState<EcoMode>("lincoln");

  // Lincoln capture-mark-recapture state
  const [markedFirst, setMarkedFirst] = useState(60);
  const [secondSample, setSecondSample] = useState(80);
  const [recapturedRaw, setRecapturedRaw] = useState(12);
  const [biasMode, setBiasMode] = useState<BiasMode>("unbiased");

  // 2x2 Chi-squared observed quadrat counts
  const [bothPresent, setBothPresent] = useState(42);
  const [onlyA, setOnlyA] = useState(18);
  const [onlyB, setOnlyB] = useState(14);
  const [neither, setNeither] = useState(26);

  // Lincoln calculations
  const maxRecap = Math.max(2, Math.min(markedFirst, secondSample));
  const baseM = Math.min(recapturedRaw, maxRecap);
  const observedM =
    biasMode === "tagloss"
      ? Math.max(1, Math.floor(baseM * 0.75))
      : biasMode === "traphappy"
        ? Math.min(maxRecap, Math.max(baseM + (baseM < maxRecap ? 1 : 0), Math.round(baseM * 1.3)))
        : baseM;
  const trueEstimate = Math.round((markedFirst * secondSample) / baseM);
  const displayedEstimate = Math.round((markedFirst * secondSample) / observedM);
  const recapPct = ((observedM / secondSample) * 100).toFixed(1);
  const biasDeltaPct = (((displayedEstimate - trueEstimate) / trueEstimate) * 100).toFixed(0);

  // Deterministic habitat dot positions for visual sample
  const dotCount = 48;
  const markedDotRatio = Math.min(0.85, markedFirst / Math.max(markedFirst, trueEstimate));
  const markedDotsCount = Math.max(2, Math.round(dotCount * markedDotRatio));

  // Chi-squared 2x2 calculations
  const rowA = bothPresent + onlyA;
  const rowNoA = onlyB + neither;
  const colB = bothPresent + onlyB;
  const colNoB = onlyA + neither;
  const grandTotal = rowA + rowNoA;

  const eBoth = (rowA * colB) / grandTotal;
  const eOnlyA = (rowA * colNoB) / grandTotal;
  const eOnlyB = (rowNoA * colB) / grandTotal;
  const eNeither = (rowNoA * colNoB) / grandTotal;

  const cBoth = eBoth > 0 ? (bothPresent - eBoth) ** 2 / eBoth : 0;
  const cOnlyA = eOnlyA > 0 ? (onlyA - eOnlyA) ** 2 / eOnlyA : 0;
  const cOnlyB = eOnlyB > 0 ? (onlyB - eOnlyB) ** 2 / eOnlyB : 0;
  const cNeither = eNeither > 0 ? (neither - eNeither) ** 2 / eNeither : 0;
  const chi2 = cBoth + cOnlyA + cOnlyB + cNeither;
  const crit = 3.841;
  const significant = chi2 > crit;
  const minExpected = Math.min(eBoth, eOnlyA, eOnlyB, eNeither);
  const assocType = !significant
    ? "Independent (fail to reject H₀)"
    : bothPresent > eBoth
      ? "Positive association (O > E)"
      : "Negative association (O < E)";

  // Gauge scale for chi2 bar (0..20)
  const chiClamped = Math.min(20, chi2);
  const gaugeWidth = 420;
  const xForChi = (v: number) => 20 + (Math.min(20, v) / 20) * gaugeWidth;

  const applyChiPreset = (preset: "pos" | "ind" | "neg") => {
    if (preset === "pos") {
      setBothPresent(42);
      setOnlyA(18);
      setOnlyB(14);
      setNeither(26);
    } else if (preset === "ind") {
      setBothPresent(26);
      setOnlyA(24);
      setOnlyB(24);
      setNeither(26);
    } else {
      setBothPresent(10);
      setOnlyA(40);
      setOnlyB(38);
      setNeither(12);
    }
  };

  return (
    <WidgetFrame
      title="Lincoln Index & 2 × 2 Chi-Squared Association Lab [SL]"
      tryThis={[
        "In **Lincoln mode**, switch to **25% tag loss** and see why shrinking denominator {{m}} causes a **+33% overestimate** of population size.",
        "In **Chi-Squared mode**, test the **Competitive Exclusion** preset and check how {{O < E}} in 'Both present' produces a significant negative association ({{χ^2 > 3.841}}).",
      ]}
      caption={
        mode === "lincoln" ? (
          <span>
            With <M>{`M = ${markedFirst}`}</M>, <M>{`n = ${secondSample}`}</M>, and recorded recaptures <M>{`m = ${observedM}`}</M>, the Lincoln index estimates{" "}
            <strong>{displayedEstimate.toLocaleString()} individuals</strong>.{" "}
            {biasMode === "unbiased"
              ? "All four assumptions hold (closed population, durable marks, random mixing, equal catchability)."
              : biasMode === "tagloss"
                ? `Losing 25% of marks reduces m from ${baseM} to ${observedM}, causing a +${biasDeltaPct}% overestimate above ${trueEstimate}.`
                : `Trap-happy animals re-enter traps readily, inflating m from ${baseM} to ${observedM} and causing a ${biasDeltaPct}% underestimate below ${trueEstimate}.`}
          </span>
        ) : (
          <span>
            For <M>{"df = (2 - 1)(2 - 1) = 1"}</M>, the critical value at <M>{"p = 0.05"}</M> is <strong>3.841</strong>. Calculated{" "}
            <M>{`χ^2 = ${chi2.toFixed(2)}`}</M>{" "}
            {significant ? (
              <>
                exceeds 3.841 → <strong>reject H₀</strong> ({assocType}). Remember: statistical association alone does not prove direct mutualism or competition!
              </>
            ) : (
              <>
                is ≤ 3.841 → <strong>fail to reject H₀</strong> (co-occurrence is consistent with random chance).
              </>
            )}
            {minExpected < 5 ? " ⚠️ Warning: at least one expected count E < 5, which reduces χ² validity." : ""}
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Ecological lab mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "lincoln", label: "Lincoln Index (N = Mn/m)" },
            { value: "chi", label: "2 × 2 Chi-Squared (χ²)" },
          ]}
        />

        {mode === "lincoln" ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Slider
                label="Initial marked (M)"
                value={markedFirst}
                min={20}
                max={150}
                step={5}
                onChange={(v) => {
                  setMarkedFirst(v);
                  if (recapturedRaw > v) setRecapturedRaw(v);
                }}
              />
              <Slider
                label="Second sample (n)"
                value={secondSample}
                min={20}
                max={150}
                step={5}
                onChange={(v) => {
                  setSecondSample(v);
                  if (recapturedRaw > v) setRecapturedRaw(v);
                }}
              />
              <Slider
                label="Unbiased recaptures (m)"
                value={baseM}
                min={2}
                max={maxRecap}
                step={1}
                onChange={setRecapturedRaw}
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wide text-ink-2">Assumption test:</span>
              <Segmented
                label="Lincoln bias scenario"
                value={biasMode}
                onChange={setBiasMode}
                options={[
                  { value: "unbiased", label: "Unbiased" },
                  { value: "tagloss", label: "25% Tag Loss" },
                  { value: "traphappy", label: "Trap-Happy (+30% m)" },
                ]}
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              <Readout
                label="Estimated N"
                value={displayedEstimate.toLocaleString()}
                tone={biasMode === "unbiased" ? "brand" : "bad"}
              />
              <Readout label="Recorded m" value={observedM} tone="ink" />
              <Readout label="Marked in 2nd" value={`${recapPct}%`} tone="ink" />
              <Readout
                label="Bias Direction"
                value={biasMode === "unbiased" ? "None" : biasMode === "tagloss" ? "Overestimate" : "Underestimate"}
                tone={biasMode === "unbiased" ? "good" : "bad"}
              />
            </div>

            <div className="rounded-xl border border-line bg-surface-2 p-2.5">
              <svg
                viewBox="0 0 540 165"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Visual simulation of Lincoln capture mark recapture showing marked and unmarked individuals mixing inside a habitat"
                className="block h-auto w-full"
              >
                <rect x="6" y="6" width="528" height="153" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
                <text x="155" y="24" fontSize="11" fontWeight="700" textAnchor="middle" fill="#0f172a">
                  Habitat Population Pool (Estimated N = {displayedEstimate})
                </text>
                {/* Habitat rectangle */}
                <rect x="18" y="34" width="274" height="106" rx="8" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.4" />
                {Array.from({ length: dotCount }, (_, i) => {
                  const col = i % 8;
                  const row = Math.floor(i / 8);
                  const cx = 36 + col * 33 + ((row % 2) * 8);
                  const cy = 48 + row * 16;
                  const isMarked = i < markedDotsCount;
                  const lostTag = isMarked && biasMode === "tagloss" && i % 4 === 0;
                  return (
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r={4.5}
                      fill={isMarked && !lostTag ? "#f59e0b" : "#0d9488"}
                      stroke={lostTag ? "#dc2626" : isMarked ? "#b45309" : "#0f766e"}
                      strokeWidth={lostTag ? 1.6 : 1}
                      strokeDasharray={lostTag ? "2 1" : undefined}
                    />
                  );
                })}
                {/* Recapture Net Box */}
                <rect x="314" y="34" width="208" height="106" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.4" />
                <text x="418" y="54" fontSize="11" fontWeight="700" textAnchor="middle" fill="#0f172a">
                  Second Sample (n = {secondSample})
                </text>
                {/* Stacked bar showing marked fraction */}
                <rect x="334" y="66" width="168" height="24" rx="5" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1.2" />
                <rect
                  x="334"
                  y="66"
                  width={Math.max(8, Math.min(168, (observedM / secondSample) * 168))}
                  height="24"
                  rx="5"
                  fill="#f59e0b"
                />
                <text x="418" y="108" fontSize="10" fontWeight="700" textAnchor="middle" fill="#334155">
                  Marked recaptured: m = {observedM} ({recapPct}%)
                </text>
                <text x="418" y="126" fontSize="9.5" textAnchor="middle" fill="#475569">
                  N = ({markedFirst} × {secondSample}) ÷ {observedM} = {displayedEstimate}
                </text>
                {/* Legend */}
                <circle cx="28" cy="150" r="4" fill="#f59e0b" />
                <text x="36" y="153" fontSize="9" fill="#334155">Marked (M)</text>
                <circle cx="108" cy="150" r="4" fill="#0d9488" />
                <text x="116" y="153" fontSize="9" fill="#334155">Unmarked</text>
                {biasMode === "tagloss" ? (
                  <>
                    <circle cx="182" cy="150" r="4" fill="#0d9488" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="2 1" />
                    <text x="190" y="153" fontSize="9" fill="#b91c1c">Lost mark (looks unmarked)</text>
                  </>
                ) : null}
              </svg>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-1.5">
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => applyChiPreset("pos")}>
                Preset: Positive Association
              </button>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => applyChiPreset("ind")}>
                Preset: Random / Independent
              </button>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => applyChiPreset("neg")}>
                Preset: Competitive Exclusion
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Stepper label="Both Present (O₁₁)" value={bothPresent} min={1} max={80} onChange={setBothPresent} />
              <Stepper label="Species A Only (O₁₂)" value={onlyA} min={1} max={80} onChange={setOnlyA} />
              <Stepper label="Species B Only (O₂₁)" value={onlyB} min={1} max={80} onChange={setOnlyB} />
              <Stepper label="Neither Present (O₂₂)" value={neither} min={1} max={80} onChange={setNeither} />
            </div>

            <div className="overflow-x-auto">
              <table className="rich-table w-full text-xs sm:text-sm">
                <thead>
                  <tr>
                    <th>Observed / (Expected)</th>
                    <th>Species B Present</th>
                    <th>Species B Absent</th>
                    <th>Row Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">Species A Present</td>
                    <td>
                      <strong>{bothPresent}</strong> <span className="text-ink-2">({eBoth.toFixed(1)})</span>
                    </td>
                    <td>
                      <strong>{onlyA}</strong> <span className="text-ink-2">({eOnlyA.toFixed(1)})</span>
                    </td>
                    <td className="font-bold">{rowA}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Species A Absent</td>
                    <td>
                      <strong>{onlyB}</strong> <span className="text-ink-2">({eOnlyB.toFixed(1)})</span>
                    </td>
                    <td>
                      <strong>{neither}</strong> <span className="text-ink-2">({eNeither.toFixed(1)})</span>
                    </td>
                    <td className="font-bold">{rowNoA}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Column Total</td>
                    <td className="font-bold">{colB}</td>
                    <td className="font-bold">{colNoB}</td>
                    <td className="font-extrabold text-brand">{grandTotal}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              <Readout label="χ² Statistic" value={chi2.toFixed(2)} tone={significant ? "good" : "ink"} />
              <Readout label="Critical (df=1, p=0.05)" value="3.841" tone="ink" />
              <Readout
                label="Decision"
                value={significant ? "Reject H₀" : "Keep H₀"}
                tone={significant ? "good" : "brand"}
              />
            </div>

            <div className="rounded-xl border border-line bg-surface-2 p-2.5">
              <svg
                viewBox="0 0 460 88"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Chi-squared scale comparing calculated chi-squared against the critical value 3.841"
                className="block h-auto w-full"
              >
                <rect x="4" y="4" width="452" height="80" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                {/* Fail to reject zone */}
                <rect x="20" y="32" width={xForChi(crit) - 20} height="18" rx="4" fill="#e2e8f0" />
                {/* Reject H0 zone */}
                <rect x={xForChi(crit)} y="32" width={440 - xForChi(crit)} height="18" rx="4" fill="#dcfce7" />
                {/* Critical line */}
                <line x1={xForChi(crit)} y1="22" x2={xForChi(crit)} y2="62" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
                <text x={xForChi(crit)} y="17" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#b91c1c">
                  Critical = 3.841
                </text>
                {/* Calculated χ² marker */}
                <circle cx={xForChi(chiClamped)} cy="41" r="7" fill={significant ? "#15803d" : "#475569"} stroke="#ffffff" strokeWidth="2" />
                <text
                  x={Math.min(410, Math.max(55, xForChi(chiClamped)))}
                  y="73"
                  fontSize="10"
                  fontWeight="700"
                  textAnchor="middle"
                  fill={significant ? "#15803d" : "#334155"}
                >
                  χ² = {chi2.toFixed(2)} {chi2 > 20 ? "(off scale right)" : ""} · {assocType}
                </text>
              </svg>
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

type ImmuneTab = "antibody" | "herd";
type ExposureMode = "both" | "primary" | "secondary";
type AntigenMatch = "same" | "mutated";
type HelperStatus = "normal" | "hiv";

/** Smooth unimodal antibody curve (log titre 0..100) for clean interactive visualization. */
function makeAntibodyPath(lagDays: number, peakDay: number, peakHeight: number, decayRate: number): string {
  const pts: string[] = [];
  for (let d = 0; d <= 40; d += 0.5) {
    let yVal = 2;
    if (d > lagDays) {
      const t = d - lagDays;
      const riseSpan = Math.max(1.5, peakDay - lagDays);
      if (d <= peakDay) {
        const u = t / riseSpan;
        yVal = 2 + (peakHeight - 2) * (u * u * (3 - 2 * u));
      } else {
        const dt = d - peakDay;
        yVal = 2 + (peakHeight - 2) * Math.exp(-decayRate * dt);
      }
    }
    const px = 46 + (d / 40) * 448;
    const py = 188 - (yVal / 100) * 144;
    pts.push(`${d === 0 ? "M" : "L"}${px.toFixed(1)} ${py.toFixed(1)}`);
  }
  return pts.join(" ");
}

function ImmunityHerdSimulator() {
  const [tab, setTab] = useState<ImmuneTab>("antibody");

  // Antibody response explorer state
  const [exposureMode, setExposureMode] = useState<ExposureMode>("both");
  const [antigenMatch, setAntigenMatch] = useState<AntigenMatch>("same");
  const [helperStatus, setHelperStatus] = useState<HelperStatus>("normal");

  // Herd immunity simulator state
  const [r0, setR0] = useState(6.0);
  const [immunePct, setImmunePct] = useState(80);
  const [efficacyPct, setEfficacyPct] = useState(90);

  // Antibody kinetic parameters
  const hivFactor = helperStatus === "hiv" ? 0.28 : 1.0;
  const primaryLag = 7;
  const primaryPeak = Math.round(46 * hivFactor);
  const primaryPath = makeAntibodyPath(primaryLag, 15, primaryPeak, 0.085);

  const secondaryLag = antigenMatch === "same" ? 1.5 : 6.5;
  const secondaryPeakDay = antigenMatch === "same" ? 6.5 : 14.5;
  const secondaryPeak = Math.round((antigenMatch === "same" ? 94 : 48) * hivFactor);
  const secondaryDecay = antigenMatch === "same" ? 0.014 : 0.08;
  const secondaryPath = makeAntibodyPath(secondaryLag, secondaryPeakDay, secondaryPeak, secondaryDecay);

  const protectiveY = 188 - (38 / 100) * 144;

  // Herd immunity calculations
  const pcPct = (1 - 1 / r0) * 100;
  const rEff = r0 * (1 - immunePct / 100);
  const herdReached = rEff < 1;
  const requiredVaccPct = pcPct / (efficacyPct / 100);
  const approxSecondaryCases = Math.min(12, Math.round(rEff));

  // Deterministic 10x10 citizen grid layout (index case at cell 44)
  const immuneCount = Math.min(99, Math.max(0, Math.round(immunePct)));
  // Pick immune indices using a fixed coprime permutation so immune citizens scatter evenly
  const isImmuneCell = (idx: number): boolean => {
    if (idx === 44) return false; // index case
    const rank = ((idx * 37 + 13) % 99);
    return rank < immuneCount;
  };
  const susceptibleNeighbors = [34, 45, 54, 43, 35, 55, 53, 33, 24, 46, 64, 42, 25, 36, 56, 65, 63, 52, 32, 23];
  const infectedTargets = susceptibleNeighbors.filter((idx) => !isImmuneCell(idx)).slice(0, approxSecondaryCases);

  return (
    <WidgetFrame
      title="Primary-vs-Secondary Antibody & Herd-Immunity Simulator [SL]"
      tryThis={[
        "In **Antibody Response**, switch to **Mutated Variant** and watch how antigenic drift erases memory-cell speed—then switch to **Depleted CD4⁺ (HIV)** to see why helper T-cells are essential.",
        "In **Herd Immunity**, select **Measles (R₀ = 15)** and drag **Population Immunity** from 85% up to 95% until {{R_eff < 1}} breaks transmission chains.",
      ]}
      caption={
        tab === "antibody" ? (
          <span>
            {helperStatus === "hiv" ? (
              <>
                <strong>Depleted CD4⁺ helper T-cells (AIDS):</strong> Without helper T-cell cytokines, B-cell clonal expansion into plasma cells collapses—neither primary nor secondary antibodies reliably clear the protective threshold.
              </>
            ) : antigenMatch === "mutated" ? (
              <>
                <strong>Antigenic Drift (e.g., seasonal influenza):</strong> Existing memory B-cell receptors no longer complement the mutated surface epitope, forcing a slow ~7-day primary-like lag phase all over again.
              </>
            ) : (
              <>
                <strong>Memory B-cells in action (F-H-L):</strong> On secondary exposure to the same antigen, lag time drops from ~7 days to ~1.5 days, peak antibody titre jumps dramatically above the protective threshold, and immunity persists far longer.
              </>
            )}
          </span>
        ) : (
          <span>
            At <M>{`R_0 = ${r0.toFixed(1)}`}</M>, herd immunity requires <M>{`p_c = (1 - 1/${r0.toFixed(1)}) * 100 = ${pcPct.toFixed(1)}%`}</M>{" "}
            immune residents. At {immunePct}% current immunity, each case infects an average of{" "}
            <strong>{rEff.toFixed(2)} people</strong> ({herdReached ? "outbreak dies out!" : "epidemic keeps growing!"}). With {efficacyPct}% vaccine efficacy,{" "}
            {requiredVaccPct > 100
              ? `vaccination alone (>100%) cannot reach herd immunity without extra public-health measures.`
              : `at least ${requiredVaccPct.toFixed(1)}% of the population must be vaccinated.`}
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Immunology simulator mode"
          value={tab}
          onChange={setTab}
          options={[
            { value: "antibody", label: "Antibody Response Kinetics" },
            { value: "herd", label: "Herd Immunity (1 − 1/R₀)" },
          ]}
        />

        {tab === "antibody" ? (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Segmented
                label="Curve visibility"
                value={exposureMode}
                onChange={setExposureMode}
                options={[
                  { value: "both", label: "Compare Both" },
                  { value: "primary", label: "Primary Only" },
                  { value: "secondary", label: "Secondary Only" },
                ]}
              />
              <Segmented
                label="Antigen recognition"
                value={antigenMatch}
                onChange={setAntigenMatch}
                options={[
                  { value: "same", label: "Same Antigen" },
                  { value: "mutated", label: "Mutated Variant" },
                ]}
              />
              <Segmented
                label="Helper T-cell status"
                value={helperStatus}
                onChange={setHelperStatus}
                options={[
                  { value: "normal", label: "Normal CD4⁺ T-Helper" },
                  { value: "hiv", label: "Depleted CD4⁺ (HIV)" },
                ]}
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              <Readout
                label="Secondary Lag Phase"
                value={`${secondaryLag} days`}
                tone={antigenMatch === "same" && helperStatus === "normal" ? "good" : "bad"}
              />
              <Readout
                label="Secondary Peak"
                value={`${secondaryPeak} a.u.`}
                tone={secondaryPeak >= 38 ? "good" : "bad"}
              />
              <Readout
                label="Clinical Protection"
                value={
                  helperStatus === "hiv"
                    ? "Immunodeficient"
                    : antigenMatch === "same"
                      ? "Blocked Rapidly"
                      : "Delayed (Symptoms)"
                }
                tone={helperStatus === "normal" && antigenMatch === "same" ? "good" : "bad"}
              />
            </div>

            <div className="rounded-xl border border-line bg-surface-2 p-2.5">
              <svg
                viewBox="0 0 520 220"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Log-scale plasma antibody concentration over 40 days comparing primary and secondary immune responses"
                className="block h-auto w-full"
              >
                <rect x="4" y="4" width="512" height="212" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
                {/* Gridlines */}
                {[50, 96, 142].map((y) => (
                  <line key={y} x1="46" y1={y} x2="494" y2={y} stroke="#f1f5f9" strokeWidth="1" />
                ))}
                {/* Protective threshold */}
                <line x1="46" y1={protectiveY} x2="494" y2={protectiveY} stroke="#d97706" strokeWidth="1.5" strokeDasharray="5 3" />
                <text x="492" y={protectiveY - 5} fontSize="9" fontWeight="700" textAnchor="end" fill="#b45309">
                  Protective antibody threshold
                </text>
                {/* Axes */}
                <line x1="46" y1="188" x2="494" y2="188" stroke="#334155" strokeWidth="1.8" />
                <line x1="46" y1="188" x2="46" y2="32" stroke="#334155" strokeWidth="1.8" />
                <text x="270" y="209" fontSize="10" fontWeight="700" textAnchor="middle" fill="#334155">
                  Days After Antigen Exposure (Day 0)
                </text>
                <text x="18" y="110" fontSize="10" fontWeight="700" textAnchor="middle" fill="#334155" transform="rotate(-90 18 110)">
                  Antibody Titre (log scale)
                </text>
                {[0, 10, 20, 30, 40].map((d) => {
                  const x = 46 + (d / 40) * 448;
                  return (
                    <text key={d} x={x} y="199" fontSize="8.5" textAnchor="middle" fill="#64748b">
                      {d}
                    </text>
                  );
                })}
                {/* Curves */}
                {exposureMode !== "secondary" ? (
                  <path d={primaryPath} fill="none" stroke="#2563eb" strokeWidth="2.8" strokeDasharray="6 3" />
                ) : null}
                {exposureMode !== "primary" ? (
                  <path
                    d={secondaryPath}
                    fill="none"
                    stroke={helperStatus === "hiv" ? "#dc2626" : "#15803d"}
                    strokeWidth="3.2"
                  />
                ) : null}
                {/* Legend */}
                <rect x="304" y="14" width="192" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="312" y1="27" x2="334" y2="27" stroke="#2563eb" strokeWidth="2.6" strokeDasharray="5 2" />
                <text x="340" y="30" fontSize="9" fontWeight="700" fill="#1d4ed8">
                  Primary (naïve B-cells)
                </text>
                <line
                  x1="312"
                  y1="43"
                  x2="334"
                  y2="43"
                  stroke={helperStatus === "hiv" ? "#dc2626" : "#15803d"}
                  strokeWidth="3"
                />
                <text x="340" y="46" fontSize="9" fontWeight="700" fill={helperStatus === "hiv" ? "#b91c1c" : "#15803d"}>
                  Secondary ({antigenMatch === "same" ? "memory B-cells" : "drifted variant"})
                </text>
              </svg>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-1.5">
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => setR0(1.6)}>
                Seasonal Flu (R₀=1.6)
              </button>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => setR0(3.0)}>
                SARS-CoV-2 (R₀=3.0)
              </button>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => setR0(6.0)}>
                Polio (R₀=6.0)
              </button>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => setR0(15.0)}>
                Measles (R₀=15.0)
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Slider
                label="Basic Reproduction (R₀)"
                value={r0}
                min={1.2}
                max={18}
                step={0.2}
                format={(v) => v.toFixed(1)}
                onChange={setR0}
              />
              <Slider
                label="Population Immunity"
                value={immunePct}
                min={0}
                max={98}
                step={1}
                format={(v) => `${v}%`}
                onChange={setImmunePct}
              />
              <Slider
                label="Vaccine Efficacy"
                value={efficacyPct}
                min={60}
                max={100}
                step={5}
                format={(v) => `${v}%`}
                onChange={setEfficacyPct}
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              <Readout label={<>Threshold p<sub>c</sub></>} value={`${pcPct.toFixed(1)}%`} tone="brand" />
              <Readout label={<>Effective R<sub>eff</sub></>} value={rEff.toFixed(2)} tone={herdReached ? "good" : "bad"} />
              <Readout
                label="Min Vaccine Coverage"
                value={requiredVaccPct > 100 ? ">100%" : `${requiredVaccPct.toFixed(1)}%`}
                tone={requiredVaccPct > 100 ? "bad" : "ink"}
              />
              <Readout
                label="Epidemic Status"
                value={herdReached ? "Contained" : "Spreading"}
                tone={herdReached ? "good" : "bad"}
              />
            </div>

            <div className="rounded-xl border border-line bg-surface-2 p-2.5">
              <svg
                viewBox="0 0 540 215"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Split diagram showing a 10 by 10 community immunity grid on the left and the nonlinear herd immunity threshold curve on the right"
                className="block h-auto w-full"
              >
                <rect x="4" y="4" width="532" height="207" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
                {/* LEFT: 10x10 Community Grid */}
                <text x="122" y="23" fontSize="11" fontWeight="700" textAnchor="middle" fill="#0f172a">
                  Community Grid (100 Citizens)
                </text>
                {/* Transmission spokes from cell 44 */}
                {infectedTargets.map((tIdx) => {
                  const x1 = 32 + (44 % 10) * 20;
                  const y1 = 38 + Math.floor(44 / 10) * 16;
                  const x2 = 32 + (tIdx % 10) * 20;
                  const y2 = 38 + Math.floor(tIdx / 10) * 16;
                  return <line key={tIdx} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ef4444" strokeWidth="1.6" />;
                })}
                {Array.from({ length: 100 }, (_, idx) => {
                  const cx = 32 + (idx % 10) * 20;
                  const cy = 38 + Math.floor(idx / 10) * 16;
                  const isIndex = idx === 44;
                  const isHit = infectedTargets.includes(idx);
                  const isImm = isImmuneCell(idx);
                  const fill = isIndex ? "#b91c1c" : isHit ? "#f97316" : isImm ? "#16a34a" : "#cbd5e1";
                  return <circle key={idx} cx={cx} cy={cy} r={isIndex ? 6 : 4.8} fill={fill} />;
                })}
                {/* Grid Legend */}
                <circle cx="28" cy="200" r="4" fill="#16a34a" />
                <text x="36" y="203" fontSize="8.5" fill="#334155">Immune ({immunePct}%)</text>
                <circle cx="108" cy="200" r="4" fill="#cbd5e1" />
                <text x="116" y="203" fontSize="8.5" fill="#334155">Susceptible</text>
                <circle cx="174" cy="200" r="4" fill="#b91c1c" />
                <text x="182" y="203" fontSize="8.5" fill="#334155">Cases</text>

                {/* RIGHT: p_c = 1 - 1/R0 curve */}
                <line x1="252" y1="16" x2="252" y2="198" stroke="#e2e8f0" strokeWidth="1.2" strokeDasharray="4 3" />
                <text x="394" y="23" fontSize="11" fontWeight="700" textAnchor="middle" fill="#0f172a">
                  Threshold Curve: (1 − 1/R₀) × 100%
                </text>
                <line x1="286" y1="176" x2="516" y2="176" stroke="#334155" strokeWidth="1.6" />
                <line x1="286" y1="176" x2="286" y2="38" stroke="#334155" strokeWidth="1.6" />
                <text x="401" y="198" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#334155">
                  Basic Reproduction Number (R₀)
                </text>
                <text x="278" y="46" fontSize="8" textAnchor="end" fill="#64748b">100%</text>
                <text x="278" y="110" fontSize="8" textAnchor="end" fill="#64748b">50%</text>
                <text x="278" y="178" fontSize="8" textAnchor="end" fill="#64748b">0%</text>
                {/* Curve points */}
                <path
                  d={Array.from({ length: 35 }, (_, i) => {
                    const r = 1.0 + i * 0.5;
                    const p = (1 - 1 / r) * 100;
                    const x = 286 + ((r - 1) / 17) * 224;
                    const y = 176 - (p / 100) * 134;
                    return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
                  }).join(" ")}
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.6"
                />
                {/* Current (R0, immunePct) dot vs threshold dot */}
                {(() => {
                  const curX = 286 + ((r0 - 1) / 17) * 224;
                  const critY = 176 - (pcPct / 100) * 134;
                  const immY = 176 - (immunePct / 100) * 134;
                  return (
                    <g>
                      <line x1={curX} y1="176" x2={curX} y2="38" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
                      <circle cx={curX} cy={critY} r="5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                      <circle
                        cx={curX}
                        cy={immY}
                        r="6.5"
                        fill={herdReached ? "#16a34a" : "#dc2626"}
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                      <text
                        x={Math.min(486, Math.max(326, curX))}
                        y={Math.max(48, Math.min(168, immY - 10))}
                        fontSize="9"
                        fontWeight="700"
                        textAnchor="middle"
                        fill={herdReached ? "#15803d" : "#b91c1c"}
                      >
                        You: {immunePct}% ({herdReached ? "≥ threshold" : "< threshold"})
                      </text>
                    </g>
                  );
                })()}
              </svg>
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "lincoln-chi-lab",
    title: "Lincoln Index & 2 × 2 Chi-Squared Association Lab",
    blurb:
      "Test how mark loss or trap-happy behaviour biases {{N = (M * n)/m}}, and explore how quadrat counts move {{χ^2}} across the {{p = 0.05}} critical threshold (3.841).",
    Component: LincolnChiLab,
  },
  {
    id: "immunity-herd-sim",
    title: "Primary-vs-Secondary Antibody & Herd-Immunity Simulator",
    blurb:
      "Compare naïve vs memory antibody kinetics (including antigenic drift and HIV T-helper depletion), then simulate {{p_c = 1 - 1/R_0}} across a 100-person community.",
    Component: ImmunityHerdSimulator,
  },
];

export default widgets;
