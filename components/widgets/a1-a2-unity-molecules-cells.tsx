"use client";

import { useMemo, useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: MICROSCOPE MAGNIFICATION & SCALE-BAR LAB (A2.2 SL)
// =============================================================================
type ScopeKey = "lm" | "sem" | "tem";
type SpecimenKey = "ribosome" | "virus" | "mito" | "ecoli" | "rbc" | "plant";

interface ScopeSpec {
  name: string;
  short: string;
  resNm: number;
  maxUsefulMag: number;
  mode: string;
  specimenState: string;
}

const SCOPES: Record<ScopeKey, ScopeSpec> = {
  lm: {
    name: "Light Microscope (LM)",
    short: "LM (200 nm)",
    resNm: 200,
    maxUsefulMag: 1500,
    mode: "Visible light (400–700 nm)",
    specimenState: "Living or stained cells in colour",
  },
  sem: {
    name: "Scanning EM (SEM)",
    short: "SEM (5 nm)",
    resNm: 5,
    maxUsefulMag: 100_000,
    mode: "Reflected electrons · 3D surface",
    specimenState: "Dead, metal-coated specimen in vacuum",
  },
  tem: {
    name: "Transmission EM (TEM)",
    short: "TEM (0.2 nm)",
    resNm: 0.2,
    maxUsefulMag: 1_000_000,
    mode: "Transmitted electrons · 2D ultrastructure",
    specimenState: "Dead, ultrathin section in vacuum",
  },
};

interface SpecimenSpec {
  id: SpecimenKey;
  label: string;
  actualNm: number;
  barNm: number;
  barLabel: string;
  note: string;
}

const SPECIMENS: SpecimenSpec[] = [
  {
    id: "ribosome",
    label: "Ribosome (25 nm)",
    actualNm: 25,
    barNm: 20,
    barLabel: "20 nm",
    note: "70S/80S protein-synthesis complex — far smaller than visible light's 200 nm diffraction wall.",
  },
  {
    id: "virus",
    label: "SARS-CoV-2 (100 nm)",
    actualNm: 100,
    barNm: 100,
    barLabel: "100 nm",
    note: "Enveloped +ssRNA virion studded with spike glycoproteins — requires EM or cryo-EM.",
  },
  {
    id: "mito",
    label: "Mitochondrion (1.5 μm)",
    actualNm: 1500,
    barNm: 500,
    barLabel: "0.5 μm",
    note: "Internal cristae (~20 nm spacing) require TEM even though overall length exceeds 200 nm.",
  },
  {
    id: "ecoli",
    label: "E. coli (2.5 μm)",
    actualNm: 2500,
    barNm: 1000,
    barLabel: "1.0 μm",
    note: "Prokaryotic rod — outline barely visible under high-power LM; nucleoid & 70S require TEM.",
  },
  {
    id: "rbc",
    label: "Red Blood Cell (7.5 μm)",
    actualNm: 7500,
    barNm: 5000,
    barLabel: "5.0 μm",
    note: "Anucleate biconcave erythrocyte — easily resolved by LM; SEM reveals its 3D dimple.",
  },
  {
    id: "plant",
    label: "Plant Cell (45 μm)",
    actualNm: 45_000,
    barNm: 20_000,
    barLabel: "20 μm",
    note: "Eukaryotic palisade cell with cellulose wall, chloroplasts, and large central vacuole.",
  },
];

function fmtMag(m: number): string {
  if (m >= 1_000_000) return `×${(m / 1_000_000).toFixed(2)}M`;
  if (m >= 10_000) return `×${Math.round(m).toLocaleString("en-GB")}`;
  if (m >= 100) return `×${Math.round(m)}`;
  return `×${m.toFixed(1)}`;
}

function fmtSize(nm: number): string {
  if (nm >= 1000) {
    const um = nm / 1000;
    return `${um >= 10 ? um.toFixed(0) : um.toFixed(1)} μm`;
  }
  return `${nm} nm`;
}

function MicroscopeScaleLab() {
  const [specimenId, setSpecimenId] = useState<SpecimenKey>("mito");
  const [scopeId, setScopeId] = useState<ScopeKey>("tem");
  const [imageMm, setImageMm] = useState<number>(45);

  const specimen = useMemo(
    () => SPECIMENS.find((s) => s.id === specimenId) ?? SPECIMENS[2],
    [specimenId],
  );
  const scope = SCOPES[scopeId];

  const calc = useMemo(() => {
    const imageNm = imageMm * 1_000_000;
    const magnification = imageNm / specimen.actualNm;
    const barMm = (specimen.barNm * magnification) / 1_000_000;
    const resolved = specimen.actualNm >= scope.resNm;
    const exceedsUseful = magnification > scope.maxUsefulMag;
    const specPx = Math.max(90, Math.min(280, (imageMm / 80) * 280));
    const barPx = Math.max(24, Math.min(240, (specimen.barNm / specimen.actualNm) * specPx));
    const useNmUnits = specimen.actualNm < 1000;
    const imageUnitStr = useNmUnits
      ? `${(imageMm * 1_000_000).toLocaleString("en-GB")} nm`
      : `${(imageMm * 1000).toLocaleString("en-GB")} μm`;
    const actualUnitStr = useNmUnits
      ? `${specimen.actualNm} nm`
      : `${(specimen.actualNm / 1000).toFixed(specimen.actualNm % 1000 === 0 ? 1 : 2)} μm`;
    return {
      magnification,
      barMm,
      resolved,
      exceedsUseful,
      specPx,
      barPx,
      imageUnitStr,
      actualUnitStr,
    };
  }, [imageMm, scope.maxUsefulMag, scope.resNm, specimen.actualNm, specimen.barNm]);

  const statusTone: "brand" | "good" | "bad" | "ink" = !calc.resolved
    ? "bad"
    : calc.exceedsUseful
      ? "brand"
      : "good";
  const statusText = !calc.resolved
    ? "Unresolvable"
    : calc.exceedsUseful
      ? "Empty Mag"
      : "Resolved ✓";

  const cx = 240;
  const cy = 104;
  const halfW = calc.specPx / 2;

  return (
    <WidgetFrame
      title="Microscope Magnification & Scale-Bar Lab [SL]"
      tryThis={[
        "Select **SARS-CoV-2 (100 nm)** under **LM (200 nm)** — why does increasing printed image size fail to sharpen it?",
        "Switch **Mitochondrion (1.5 μm)** to **TEM** and set printed length to **60 mm** — verify {{M = 60000 / 1.5 = 40000}} and check the 0.5 μm scale bar measures **20 mm**.",
        "Compare **Red Blood Cell** and **Plant Cell** at the same 45 mm printed length to see how magnification drops as actual size rises.",
      ]}
      caption={
        <span>
          <strong>{scope.name}</strong> ({scope.mode}; {scope.specimenState}).{" "}
          {!calc.resolved ? (
            <>
              Because {specimen.label} is smaller than this microscope&apos;s{" "}
              <strong>{scope.resNm} nm resolution limit</strong>, waves diffract around it and it
              cannot be resolved — switch to an electron microscope!
            </>
          ) : calc.exceedsUseful ? (
            <>
              The overall outline is above the {scope.resNm} nm limit, but{" "}
              <strong>{fmtMag(calc.magnification)}</strong> exceeds this microscope&apos;s useful
              magnification ({fmtMag(scope.maxUsefulMag)}), producing empty magnification without
              extra detail.
            </>
          ) : (
            <>{specimen.note}</>
          )}
        </span>
      }
    >
      <div className="space-y-4">
        {/* Microscope segmented picker */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-semibold text-ink-2">Microscope:</span>
          <Segmented<ScopeKey>
            label="Microscope type"
            value={scopeId}
            onChange={setScopeId}
            options={[
              { value: "lm", label: SCOPES.lm.short },
              { value: "sem", label: SCOPES.sem.short },
              { value: "tem", label: SCOPES.tem.short },
            ]}
          />
        </div>

        {/* Specimen presets — responsive wrap */}
        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3" role="radiogroup" aria-label="Biological specimen">
          {SPECIMENS.map((s) => {
            const active = s.id === specimenId;
            return (
              <button
                key={s.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setSpecimenId(s.id)}
                className={`rounded-xl border px-2.5 py-2 text-left text-xs font-bold transition sm:text-sm ${
                  active
                    ? "border-brand bg-brand-soft text-brand shadow-sm"
                    : "border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Printed image size slider */}
        <Slider
          label="Measured printed image length (I)"
          value={imageMm}
          min={10}
          max={80}
          step={1}
          onChange={setImageMm}
          format={(v) => `${v} mm`}
        />

        {/* Interactive SVG micrograph viewport */}
        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 220"
            className="h-auto w-full"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Simulated ${scope.name} micrograph of ${specimen.label} at magnification ${fmtMag(calc.magnification)}`}
          >
            <defs>
              <filter id="bio-diffraction-blur">
                <feGaussianBlur stdDeviation="5.5" />
              </filter>
            </defs>
            {/* Background field: warm brightfield for LM, crisp slate for EM */}
            <rect
              x="0"
              y="0"
              width="560"
              height="220"
              rx="10"
              fill={scopeId === "lm" ? "#fefce8" : "#0f172a"}
            />
            {/* Circular eyepiece vignette */}
            <circle
              cx={cx}
              cy={cy}
              r="94"
              fill={scopeId === "lm" ? "#ffffff" : "#1e293b"}
              stroke={scopeId === "lm" ? "#cbd5e1" : "#334155"}
              strokeWidth="2"
            />

            {/* Specimen graphic (blurred if unresolvable!) */}
            <g filter={!calc.resolved ? "url(#bio-diffraction-blur)" : undefined} opacity={!calc.resolved ? 0.55 : 1}>
              {specimen.id === "ribosome" && (
                <g>
                  <ellipse cx={cx} cy={cy - 10} rx={halfW * 0.72} ry={halfW * 0.45} fill="#8b5cf6" stroke="#c4b5fd" strokeWidth="2" />
                  <ellipse cx={cx} cy={cy + 14} rx={halfW * 0.56} ry={halfW * 0.34} fill="#6d28d9" stroke="#ddd6fe" strokeWidth="2" />
                  <line x1={cx - halfW * 0.9} y1={cy + 2} x2={cx + halfW * 0.9} y2={cy + 2} stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="4,3" />
                </g>
              )}
              {specimen.id === "virus" && (
                <g>
                  <circle cx={cx} cy={cy} r={halfW * 0.62} fill="#f59e0b" fillOpacity="0.28" stroke="#f59e0b" strokeWidth="3" />
                  <path
                    d={`M ${cx - halfW * 0.35} ${cy} Q ${cx - halfW * 0.15} ${cy - 16} ${cx} ${cy} T ${cx + halfW * 0.35} ${cy}`}
                    fill="none"
                    stroke="#fb7185"
                    strokeWidth="3"
                  />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                    const rad = (deg * Math.PI) / 180;
                    const x1 = cx + Math.cos(rad) * halfW * 0.62;
                    const y1 = cy + Math.sin(rad) * halfW * 0.62;
                    const x2 = cx + Math.cos(rad) * halfW * 0.88;
                    const y2 = cy + Math.sin(rad) * halfW * 0.88;
                    return (
                      <g key={deg}>
                        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ef4444" strokeWidth="2.5" />
                        <circle cx={x2} cy={y2} r="4.5" fill="#ef4444" />
                      </g>
                    );
                  })}
                </g>
              )}
              {specimen.id === "mito" && (
                <g>
                  <ellipse cx={cx} cy={cy} rx={halfW} ry={Math.max(24, halfW * 0.44)} fill="#ef4444" fillOpacity="0.25" stroke="#f87171" strokeWidth="3" />
                  <path
                    d={`M ${cx - halfW * 0.8} ${cy} Q ${cx - halfW * 0.6} ${cy - 22} ${cx - halfW * 0.4} ${cy} T ${cx} ${cy} T ${cx + halfW * 0.4} ${cy} T ${cx + halfW * 0.8} ${cy}`}
                    fill="none"
                    stroke="#fca5a5"
                    strokeWidth="2.5"
                  />
                  <circle cx={cx - halfW * 0.25} cy={cy + 12} r="7" fill="none" stroke="#a78bfa" strokeWidth="1.8" />
                </g>
              )}
              {specimen.id === "ecoli" && (
                <g>
                  <rect
                    x={cx - halfW}
                    y={cy - Math.max(22, halfW * 0.34)}
                    width={calc.specPx}
                    height={Math.max(44, halfW * 0.68)}
                    rx={Math.max(22, halfW * 0.34)}
                    fill="#14b8a6"
                    fillOpacity="0.25"
                    stroke="#2dd4bf"
                    strokeWidth="3.5"
                  />
                  <path
                    d={`M ${cx - halfW * 0.5} ${cy - 6} C ${cx - halfW * 0.2} ${cy - 18} ${cx + halfW * 0.2} ${cy + 18} ${cx + halfW * 0.45} ${cy - 4}`}
                    fill="none"
                    stroke="#c084fc"
                    strokeWidth="2.4"
                  />
                  <circle cx={cx + halfW * 0.6} cy={cy + 6} r="6" fill="none" stroke="#f472b6" strokeWidth="2" />
                </g>
              )}
              {specimen.id === "rbc" && (
                <g>
                  <circle cx={cx} cy={cy} r={halfW * 0.72} fill="#dc2626" fillOpacity="0.82" stroke="#fca5a5" strokeWidth="2.5" />
                  <circle cx={cx} cy={cy} r={halfW * 0.34} fill="#991b1b" fillOpacity="0.65" />
                </g>
              )}
              {specimen.id === "plant" && (
                <g>
                  <rect
                    x={cx - halfW}
                    y={cy - Math.max(32, halfW * 0.52)}
                    width={calc.specPx}
                    height={Math.max(64, halfW * 1.04)}
                    rx="10"
                    fill="#22c55e"
                    fillOpacity="0.22"
                    stroke="#16a34a"
                    strokeWidth="4.5"
                  />
                  <rect
                    x={cx - halfW * 0.68}
                    y={cy - Math.max(16, halfW * 0.28)}
                    width={calc.specPx * 0.56}
                    height={Math.max(32, halfW * 0.56)}
                    rx="8"
                    fill="#38bdf8"
                    fillOpacity="0.35"
                    stroke="#0284c7"
                    strokeWidth="1.5"
                  />
                  <circle cx={cx + halfW * 0.52} cy={cy - 12} r="11" fill="#7c3aed" fillOpacity="0.7" />
                  <ellipse cx={cx + halfW * 0.5} cy={cy + 16} rx="12" ry="6" fill="#15803d" />
                  <ellipse cx={cx - halfW * 0.76} cy={cy} rx="6" ry="11" fill="#15803d" />
                </g>
              )}
            </g>

            {/* Unresolvable diffraction warning badge */}
            {!calc.resolved && (
              <g>
                <rect x="115" y="84" width="250" height="40" rx="8" fill="#991b1b" fillOpacity="0.92" />
                <text x="240" y="101" fontSize="11.5" fontWeight="700" textAnchor="middle" fill="#ffffff">
                  BELOW {scope.resNm} nm RESOLUTION LIMIT
                </text>
                <text x="240" y="116" fontSize="10" textAnchor="middle" fill="#fecaca">
                  Light waves diffract — switch to SEM or TEM
                </text>
              </g>
            )}

            {/* Measured caliper line */}
            <line
              x1={cx - halfW}
              y1="178"
              x2={cx + halfW}
              y2="178"
              stroke={scopeId === "lm" ? "#0f172a" : "#e2e8f0"}
              strokeWidth="1.8"
            />
            <line x1={cx - halfW} y1="172" x2={cx - halfW} y2="184" stroke={scopeId === "lm" ? "#0f172a" : "#e2e8f0"} strokeWidth="1.8" />
            <line x1={cx + halfW} y1="172" x2={cx + halfW} y2="184" stroke={scopeId === "lm" ? "#0f172a" : "#e2e8f0"} strokeWidth="1.8" />
            <text
              x={cx}
              y="196"
              fontSize="11.5"
              fontWeight="700"
              textAnchor="middle"
              fill={scopeId === "lm" ? "#0f172a" : "#f8fafc"}
            >
              Image I = {imageMm} mm
            </text>

            {/* Right panel: Calibrated Scale Bar + M = I/A live card */}
            <rect
              x="368"
              y="22"
              width="176"
              height="176"
              rx="10"
              fill={scopeId === "lm" ? "#f8fafc" : "#1e293b"}
              stroke={scopeId === "lm" ? "#cbd5e1" : "#475569"}
              strokeWidth="1.2"
            />
            <text
              x="456"
              y="44"
              fontSize="11.5"
              fontWeight="700"
              textAnchor="middle"
              fill={scopeId === "lm" ? "#0f172a" : "#f8fafc"}
            >
              Calibrated Scale Bar
            </text>
            {/* Dynamic proportional scale bar clamped inside box */}
            <line
              x1={456 - Math.min(72, calc.barPx / 2)}
              y1="72"
              x2={456 + Math.min(72, calc.barPx / 2)}
              y2="72"
              stroke="#ef4444"
              strokeWidth="4.5"
            />
            <text x="456" y="62" fontSize="11.5" fontWeight="700" textAnchor="middle" fill="#ef4444">
              {specimen.barLabel}
            </text>
            <text
              x="456"
              y="91"
              fontSize="10.5"
              textAnchor="middle"
              fill={scopeId === "lm" ? "#475569" : "#cbd5e1"}
            >
              Prints at {calc.barMm >= 10 ? calc.barMm.toFixed(1) : calc.barMm.toFixed(2)} mm
            </text>

            <line x1="384" y1="108" x2="528" y2="108" stroke={scopeId === "lm" ? "#e2e8f0" : "#334155"} strokeWidth="1" />
            <text
              x="456"
              y="128"
              fontSize="10.5"
              fontWeight="700"
              textAnchor="middle"
              fill={scopeId === "lm" ? "#0f172a" : "#f8fafc"}
            >
              M = I ÷ A (same units)
            </text>
            <text
              x="456"
              y="148"
              fontSize="10"
              textAnchor="middle"
              fill={scopeId === "lm" ? "#334155" : "#cbd5e1"}
            >
              {calc.imageUnitStr}
            </text>
            <text
              x="456"
              y="163"
              fontSize="10"
              textAnchor="middle"
              fill={scopeId === "lm" ? "#334155" : "#cbd5e1"}
            >
              ÷ {calc.actualUnitStr}
            </text>
            <text x="456" y="184" fontSize="12" fontWeight="800" textAnchor="middle" fill="#3b82f6">
              = {fmtMag(calc.magnification)}
            </text>
          </svg>
        </div>

        {/* Live Readout strip */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Actual Size (A)" value={fmtSize(specimen.actualNm)} tone="ink" />
          <Readout label="Magnification" value={fmtMag(calc.magnification)} tone="brand" />
          <Readout
            label="Scale Bar Length"
            value={`${calc.barMm >= 10 ? calc.barMm.toFixed(1) : calc.barMm.toFixed(2)} mm`}
            tone="ink"
          />
          <Readout label="Resolution Check" value={statusText} tone={statusTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: DNA/RNA ANTIPARALLEL BASE-PAIRING & NUCLEOSOME BUILDER (A1.2 SL/HL)
// =============================================================================
type NucleicMode = "dna" | "rna" | "nucleosome";
type Base = "A" | "T" | "C" | "G";

const NEXT_BASE: Record<Base, Base> = { A: "T", T: "C", C: "G", G: "A" };
const COMP_DNA: Record<Base, Base> = { A: "T", T: "A", C: "G", G: "C" };

const BASE_COLORS: Record<string, { bg: string; border: string; text: string; isPurine: boolean }> = {
  A: { bg: "#dcfce7", border: "#16a34a", text: "#166534", isPurine: true },
  G: { bg: "#dbeafe", border: "#2563eb", text: "#1e40af", isPurine: true },
  T: { bg: "#fee2e2", border: "#dc2626", text: "#991b1b", isPurine: false },
  U: { bg: "#fae8ff", border: "#c026d3", text: "#86198f", isPurine: false },
  C: { bg: "#fef3c7", border: "#d97706", text: "#92400e", isPurine: false },
};

const SEQ_PRESETS: Array<{ label: string; bases: Base[] }> = [
  { label: "Balanced (50% GC)", bases: ["A", "T", "G", "C", "C", "A", "T", "G"] },
  { label: "Thermophile (75% GC)", bases: ["G", "C", "G", "G", "C", "A", "C", "T"] },
  { label: "AT-Rich Origin (25% GC)", bases: ["A", "T", "A", "A", "T", "G", "T", "C"] },
];

function DnaRnaNucleosomeBuilder() {
  const [mode, setMode] = useState<NucleicMode>("dna");
  const [seq, setSeq] = useState<Base[]>(["A", "T", "G", "C", "C", "A", "T", "G"]);
  const [dnaLengthBp, setDnaLengthBp] = useState<number>(3600);
  const [linkerBp, setLinkerBp] = useState<number>(53);

  const toggleBase = (idx: number) => {
    setSeq((prev) => prev.map((b, i) => (i === idx ? NEXT_BASE[b] : b)));
  };

  const stats = useMemo(() => {
    const gcCount = seq.filter((b) => b === "G" || b === "C").length;
    const atCount = seq.length - gcCount;
    const gcPct = Math.round((gcCount / seq.length) * 100);
    const totalHBonds = gcCount * 3 + atCount * 2;
    const compAligned = seq.map((b) => COMP_DNA[b]);
    const comp5to3 = [...compAligned].reverse().join("");

    // Single-stranded RNA composition (T -> U)
    const rnaSeq = seq.map((b) => (b === "T" ? "U" : b));
    const rnaPurines = rnaSeq.filter((b) => b === "A" || b === "G").length;
    const rnaPurPct = Math.round((rnaPurines / rnaSeq.length) * 100);
    const aCount = rnaSeq.filter((b) => b === "A").length;
    const uCount = rnaSeq.filter((b) => b === "U").length;
    const chargaffHoldsRna = aCount === uCount && seq.filter((b) => b === "C").length === seq.filter((b) => b === "G").length;

    // Nucleosome math [HL]
    const coreBp = 147;
    const repeatBp = coreBp + linkerBp;
    const nucleosomes = Math.floor(dnaLengthBp / repeatBp);
    const coreHistones = nucleosomes * 8;
    const wrappedPct = ((coreBp / repeatBp) * 100).toFixed(1);

    return {
      gcCount,
      atCount,
      gcPct,
      totalHBonds,
      compAligned,
      comp5to3,
      rnaSeq,
      rnaPurPct,
      chargaffHoldsRna,
      repeatBp,
      nucleosomes,
      coreHistones,
      wrappedPct,
    };
  }, [dnaLengthBp, linkerBp, seq]);

  const beadCountVis = Math.min(6, Math.max(2, Math.round(stats.nucleosomes / 4)));

  return (
    <WidgetFrame
      title="DNA/RNA Base-Pairing & Nucleosome Builder [SL/HL]"
      tryThis={[
        "Switch from **AT-Rich Origin (25% GC)** to **Thermophile (75% GC)** — watch **Total H-Bonds** climb from **18** to **22** (higher thermal stability!).",
        "Check the **5′ → 3′ Partner** readout after changing base 1 — notice how antiparallel reading reverses the strand!",
        "Switch to **RNA Strand** and observe why single-stranded RNA can break Chargaff's {{%A = %U}} rule, then open **Nucleosome [HL]** to adjust linker DNA.",
      ]}
      caption={
        mode === "dna" ? (
          <span>
            Every rung pairs a <strong>2-ring purine (A, G)</strong> with a{" "}
            <strong>1-ring pyrimidine (T, C)</strong> to maintain a constant <strong>2.0 nm</strong>{" "}
            helix width, while <strong>C≡G</strong> (3 H-bonds) adds extra thermal stability over{" "}
            <strong>A=T</strong> (2 H-bonds). Antiparallel partner (<M>{"5' -> 3'"}</M>):{" "}
            <strong className="font-mono">5&prime;-{stats.comp5to3}-3&prime;</strong>.
          </span>
        ) : mode === "rna" ? (
          <span>
            RNA is <strong>single-stranded</strong>, contains <strong>ribose (with a reactive 2&prime;-OH)</strong>,
            and uses <strong>uracil (U)</strong> instead of thymine. Because there is no mandatory
            partner strand, Chargaff&apos;s equalities{" "}
            {stats.chargaffHoldsRna ? "happen to balance by chance here — click any base to break them!" : "do NOT hold here!"}
          </span>
        ) : (
          <span>
            In eukaryotes, <strong>147 bp</strong> of negatively charged phosphate DNA wrap ~1.65
            turns around each positively charged <strong>8-histone octamer</strong>, clamped by{" "}
            <strong>H1</strong>. With a <strong>{stats.repeatBp} bp</strong> repeat unit,{" "}
            <strong>{dnaLengthBp.toLocaleString("en-GB")} bp</strong> forms{" "}
            <strong>{stats.nucleosomes} nucleosomes</strong> containing{" "}
            <strong>{stats.coreHistones}</strong> individual core histone proteins.
          </span>
        )
      }
    >
      <div className="space-y-4">
        {/* Mode switcher */}
        <Segmented<NucleicMode>
          label="Nucleic acid mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "dna", label: "DNA Helix (SL/HL)" },
            { value: "rna", label: "RNA Strand (SL)" },
            { value: "nucleosome", label: "Nucleosomes (HL)" },
          ]}
        />

        {mode !== "nucleosome" ? (
          <>
            {/* Preset buttons */}
            <div className="flex flex-wrap gap-1.5">
              {SEQ_PRESETS.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setSeq([...p.bases])}
                  className="rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-bold text-ink-2 transition hover:border-brand hover:text-brand"
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Interactive 8-base editor buttons */}
            <div>
              <p className="mb-1.5 text-xs font-semibold text-ink-2">
                Tap any nucleotide on the 5&prime; → 3&prime; strand to mutate it (A → T → C → G):
              </p>
              <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-8">
                {seq.map((b, i) => {
                  const shown = mode === "rna" && b === "T" ? "U" : b;
                  const c = BASE_COLORS[shown];
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleBase(i)}
                      style={{ backgroundColor: c.bg, borderColor: c.border, color: c.text }}
                      className="rounded-xl border-2 py-2 text-center font-mono text-base font-extrabold transition hover:scale-105"
                      aria-label={`Position ${i + 1}, base ${shown}. Click to mutate.`}
                    >
                      {shown}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live SVG molecular view */}
            <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
              <svg
                viewBox="0 0 560 210"
                className="h-auto w-full"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={
                  mode === "dna"
                    ? `Antiparallel DNA segment 5-prime ${seq.join("")} 3-prime paired with complementary strand`
                    : `Single-stranded RNA segment 5-prime ${stats.rnaSeq.join("")} 3-prime`
                }
              >
                <rect x="0" y="0" width="560" height="210" rx="10" fill="#ffffff" />
                {/* Top backbone (5' -> 3') */}
                <line x1="44" y1="40" x2="516" y2="40" stroke="#4f46e5" strokeWidth="4.5" />
                <text x="24" y="45" fontSize="13" fontWeight="800" fill="#4338ca">5&prime;</text>
                <text x="526" y="45" fontSize="13" fontWeight="800" fill="#4338ca">3&prime;</text>

                {mode === "dna" ? (
                  <>
                    {/* Bottom antiparallel backbone (3' <- 5') */}
                    <line x1="44" y1="170" x2="516" y2="170" stroke="#0d9488" strokeWidth="4.5" />
                    <text x="24" y="175" fontSize="13" fontWeight="800" fill="#0f766e">3&prime;</text>
                    <text x="526" y="175" fontSize="13" fontWeight="800" fill="#0f766e">5&prime;</text>
                    {seq.map((b, i) => {
                      const comp = COMP_DNA[b];
                      const x = 72 + i * 59;
                      const topC = BASE_COLORS[b];
                      const botC = BASE_COLORS[comp];
                      const topH = topC.isPurine ? 44 : 30;
                      const botH = botC.isPurine ? 44 : 30;
                      const hb = b === "G" || b === "C" ? 3 : 2;
                      const gapTop = 44 + topH + 3;
                      const gapBot = 166 - botH - 3;
                      return (
                        <g key={i}>
                          <circle cx={x} cy="40" r="6" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.6" />
                          <rect x={x - 16} y="44" width="32" height={topH} rx="6" fill={topC.bg} stroke={topC.border} strokeWidth="1.8" />
                          <text x={x} y={44 + topH / 2 + 4} fontSize="13" fontWeight="800" textAnchor="middle" fill={topC.text}>
                            {b}
                          </text>
                          {/* Hydrogen bonds */}
                          {hb === 2 ? (
                            <>
                              <line x1={x - 5} y1={gapTop} x2={x - 5} y2={gapBot} stroke="#64748b" strokeWidth="2" strokeDasharray="3,3" />
                              <line x1={x + 5} y1={gapTop} x2={x + 5} y2={gapBot} stroke="#64748b" strokeWidth="2" strokeDasharray="3,3" />
                            </>
                          ) : (
                            <>
                              <line x1={x - 8} y1={gapTop} x2={x - 8} y2={gapBot} stroke="#0f172a" strokeWidth="2" strokeDasharray="3,3" />
                              <line x1={x} y1={gapTop} x2={x} y2={gapBot} stroke="#0f172a" strokeWidth="2" strokeDasharray="3,3" />
                              <line x1={x + 8} y1={gapTop} x2={x + 8} y2={gapBot} stroke="#0f172a" strokeWidth="2" strokeDasharray="3,3" />
                            </>
                          )}
                          <rect x={x - 16} y={166 - botH} width="32" height={botH} rx="6" fill={botC.bg} stroke={botC.border} strokeWidth="1.8" />
                          <text x={x} y={166 - botH / 2 + 4} fontSize="13" fontWeight="800" textAnchor="middle" fill={botC.text}>
                            {comp}
                          </text>
                          <circle cx={x} cy="170" r="6" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.6" />
                        </g>
                      );
                    })}
                    <text x="280" y="198" fontSize="10.5" fontWeight="600" textAnchor="middle" fill="#475569">
                      Taller blocks = 2-ring Purines (A, G) · Shorter blocks = 1-ring Pyrimidines (T, C) · Uniform 2.0 nm width
                    </text>
                  </>
                ) : (
                  <>
                    {/* Single-stranded RNA view with 2'-OH tags */}
                    {stats.rnaSeq.map((b, i) => {
                      const x = 72 + i * 59;
                      const c = BASE_COLORS[b];
                      const h = c.isPurine ? 56 : 38;
                      return (
                        <g key={i}>
                          <circle cx={x} cy="40" r="8" fill="#fae8ff" stroke="#a21caf" strokeWidth="1.8" />
                          <text x={x} y="23" fontSize="9" fontWeight="700" textAnchor="middle" fill="#a21caf">
                            2&prime;-OH
                          </text>
                          <rect x={x - 16} y="50" width="32" height={h} rx="6" fill={c.bg} stroke={c.border} strokeWidth="2" />
                          <text x={x} y={50 + h / 2 + 5} fontSize="14" fontWeight="800" textAnchor="middle" fill={c.text}>
                            {b}
                          </text>
                          <text x={x} y="132" fontSize="9.5" textAnchor="middle" fill="#64748b">
                            {c.isPurine ? "Purine" : "Pyrim."}
                          </text>
                        </g>
                      );
                    })}
                    <text x="280" y="168" fontSize="11.5" fontWeight="700" textAnchor="middle" fill="#86198f">
                      Single-stranded RNA · Ribose sugar (reactive 2&prime;-OH) · Uracil replaces Thymine
                    </text>
                    <text x="280" y="188" fontSize="10.5" textAnchor="middle" fill="#475569">
                      Unpaired bases can fold internally to form catalytic 3D ribozymes [HL]
                    </text>
                  </>
                )}
              </svg>
            </div>

            {/* Live Readouts */}
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              <Readout label="GC Content" value={`${stats.gcPct}%`} tone="brand" />
              {mode === "dna" ? (
                <>
                  <Readout label="Total H-Bonds" value={`${stats.totalHBonds}`} tone={stats.gcPct >= 60 ? "good" : "ink"} />
                  <Readout label="Purines : Pyrim." value="50% : 50%" tone="good" />
                  <Readout label="5′ → 3′ Partner" value={stats.comp5to3} tone="ink" />
                </>
              ) : (
                <>
                  <Readout label="4⁸ Sequences" value="65,536" tone="ink" />
                  <Readout label="Purine Share" value={`${stats.rnaPurPct}%`} tone={stats.rnaPurPct === 50 ? "good" : "brand"} />
                  <Readout label="Chargaff Rule?" value={stats.chargaffHoldsRna ? "Coincidental" : "Broken ✓"} tone="ink" />
                </>
              )}
            </div>
          </>
        ) : (
          /* NUCLEOSOME SUPERCOILING MODE [HL] */
          <>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Slider
                label="Total eukaryotic DNA length"
                value={dnaLengthBp}
                min={1000}
                max={10000}
                step={200}
                onChange={setDnaLengthBp}
                format={(v) => `${v.toLocaleString("en-GB")} bp`}
              />
              <Slider
                label="Linker DNA between nucleosomes"
                value={linkerBp}
                min={20}
                max={80}
                step={3}
                onChange={setLinkerBp}
                format={(v) => `${v} bp`}
              />
            </div>

            <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
              <svg
                viewBox="0 0 560 190"
                className="h-auto w-full"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={`Eukaryotic beads-on-a-string chromatin diagram showing ${stats.nucleosomes} nucleosomes with 147 bp core DNA and ${linkerBp} bp linker DNA`}
              >
                <rect x="0" y="0" width="560" height="190" rx="10" fill="#ffffff" />
                <text x="280" y="24" fontSize="12" fontWeight="700" textAnchor="middle" fill="#0f172a">
                  Eukaryotic Chromatin: Beads-on-a-String Nucleosomes [HL]
                </text>
                {/* Linker DNA strand connecting beads */}
                <line x1="32" y1="92" x2="528" y2="92" stroke="#2563eb" strokeWidth="4" />
                {Array.from({ length: beadCountVis }, (_, idx) => {
                  const spacing = 460 / beadCountVis;
                  const bx = 50 + spacing * (idx + 0.5);
                  return (
                    <g key={idx}>
                      {/* Histone octamer spool */}
                      <circle cx={bx} cy="92" r="24" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
                      <text x={bx} y="89" fontSize="10" fontWeight="800" textAnchor="middle" fill="#92400e">
                        8× Hist.
                      </text>
                      <text x={bx} y="102" fontSize="10" fontWeight="700" textAnchor="middle" fill="#b45309">
                        (+)
                      </text>
                      {/* ~1.65 DNA coils wrapped around spool */}
                      <ellipse cx={bx} cy="84" rx="28" ry="8" fill="none" stroke="#2563eb" strokeWidth="3.2" />
                      <ellipse cx={bx} cy="100" rx="28" ry="8" fill="none" stroke="#1d4ed8" strokeWidth="3.2" />
                      {/* H1 linker histone clamp */}
                      <rect x={bx - 12} y="114" width="24" height="13" rx="4" fill="#16a34a" />
                      <text x={bx} y="124" fontSize="9" fontWeight="800" textAnchor="middle" fill="#ffffff">
                        H1
                      </text>
                    </g>
                  );
                })}
                <text x="280" y="156" fontSize="10.5" fontWeight="600" textAnchor="middle" fill="#1e40af">
                  DNA (− phosphate) wrapped 147 bp (~1.65 turns) · Linker DNA = {linkerBp} bp · Repeat = {stats.repeatBp} bp
                </text>
                <text x="280" y="174" fontSize="10" textAnchor="middle" fill="#64748b">
                  Electrostatic attraction between (−) DNA and (+) lysine/arginine histones drives supercoiling &amp; gene control
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              <Readout label="Nucleosomes" value={`${stats.nucleosomes}`} tone="brand" />
              <Readout label="Core Histones (8×)" value={`${stats.coreHistones}`} tone="ink" />
              <Readout label="% DNA Wrapped" value={`${stats.wrappedPct}%`} tone="good" />
              <Readout label="Repeat Unit" value={`${stats.repeatBp} bp`} tone="ink" />
            </div>
          </>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "microscope-magnification-scale-lab",
    title: "Microscope Magnification & Scale-Bar Lab [SL]",
    blurb:
      "Compare LM, SEM, and TEM resolution across ribosomes, viruses, organelles, and cells while calculating M = I / A and live scale-bar lengths.",
    Component: MicroscopeScaleLab,
  },
  {
    id: "dna-rna-nucleosome-builder",
    title: "DNA/RNA Antiparallel Base-Pairing & Nucleosome Builder [SL/HL]",
    blurb:
      "Mutate DNA or RNA nucleotides to inspect purine–pyrimidine geometry, H-bond stability, 5′ → 3′ antiparallel reversal, and eukaryotic histone packaging.",
    Component: DnaRnaNucleosomeBuilder,
  },
];

export default widgets;
