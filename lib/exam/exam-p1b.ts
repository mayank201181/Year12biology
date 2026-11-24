import type { ExamPaper } from "../types.ts";

const SVG_OSMOSIS_DATASET1 = `<svg viewBox="0 0 460 272" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of mean percentage mass change of potato cylinders against sucrose concentration from 0.0 to 0.6 mol dm^-3 with plus or minus 1 SD error bars">
  <rect x="0" y="0" width="460" height="272" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="240" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Dataset 1: Potato Tissue Mass Change vs Sucrose Concentration (n = 5)</text>
  <!-- Horizontal gridlines (y=40 is +20%, y=140 is 0%, 5px per 1%) -->
  <line x1="70" y1="40" x2="438" y2="40" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="65" x2="438" y2="65" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="90" x2="438" y2="90" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="115" x2="438" y2="115" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="140" x2="438" y2="140" stroke="#0f172a" stroke-width="1.6"/>
  <line x1="70" y1="165" x2="438" y2="165" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="190" x2="438" y2="190" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="215" x2="438" y2="215" stroke="#e2e8f0" stroke-width="1"/>
  <!-- Vertical gridlines (x=70 is 0.0, 60px per 0.1, minor ticks every 0.05) -->
  <line x1="100" y1="40" x2="100" y2="225" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="130" y1="40" x2="130" y2="225" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="160" y1="40" x2="160" y2="225" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="190" y1="40" x2="190" y2="225" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="40" x2="220" y2="225" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="250" y1="40" x2="250" y2="225" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="280" y1="40" x2="280" y2="225" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="310" y1="40" x2="310" y2="225" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="340" y1="40" x2="340" y2="225" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="370" y1="40" x2="370" y2="225" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="400" y1="40" x2="400" y2="225" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="430" y1="40" x2="430" y2="225" stroke="#e2e8f0" stroke-width="1"/>
  <!-- Y axis -->
  <line x1="70" y1="38" x2="70" y2="225" stroke="#0f172a" stroke-width="1.8"/>
  <!-- Y labels -->
  <text x="62" y="44" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">+20</text>
  <text x="62" y="69" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">+15</text>
  <text x="62" y="94" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">+10</text>
  <text x="62" y="119" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">+5</text>
  <text x="62" y="144" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a">0</text>
  <text x="62" y="169" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">−5</text>
  <text x="62" y="194" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">−10</text>
  <text x="62" y="219" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">−15</text>
  <text x="19" y="132" text-anchor="middle" transform="rotate(-90 19 132)" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">Mean mass change (% ± 1 SD)</text>
  <!-- X labels -->
  <text x="70" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">0.0</text>
  <text x="130" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">0.1</text>
  <text x="190" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">0.2</text>
  <text x="250" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">0.3</text>
  <text x="310" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">0.4</text>
  <text x="370" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">0.5</text>
  <text x="430" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">0.6</text>
  <text x="250" y="261" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">Sucrose concentration (mol dm⁻³)</text>
  <!-- Curve connecting means -->
  <polyline points="70,65 130,95 190,125 250,155 310,182.5 370,200 430,205" fill="none" stroke="#16a34a" stroke-width="2.6"/>
  <!-- Error bars (±1 SD) & points -->
  <g stroke="#0f172a" stroke-width="1.3">
    <line x1="70" y1="57" x2="70" y2="73"/><line x1="66" y1="57" x2="74" y2="57"/><line x1="66" y1="73" x2="74" y2="73"/>
    <line x1="130" y1="88" x2="130" y2="102"/><line x1="126" y1="88" x2="134" y2="88"/><line x1="126" y1="102" x2="134" y2="102"/>
    <line x1="190" y1="119" x2="190" y2="131"/><line x1="186" y1="119" x2="194" y2="119"/><line x1="186" y1="131" x2="194" y2="131"/>
    <line x1="250" y1="149" x2="250" y2="161"/><line x1="246" y1="149" x2="254" y2="149"/><line x1="246" y1="161" x2="254" y2="161"/>
    <line x1="310" y1="175" x2="310" y2="190"/><line x1="306" y1="175" x2="314" y2="175"/><line x1="306" y1="190" x2="314" y2="190"/>
    <line x1="370" y1="191.5" x2="370" y2="208.5"/><line x1="366" y1="191.5" x2="374" y2="191.5"/><line x1="366" y1="208.5" x2="374" y2="208.5"/>
    <line x1="430" y1="195.5" x2="430" y2="214.5"/><line x1="426" y1="195.5" x2="434" y2="195.5"/><line x1="426" y1="214.5" x2="434" y2="214.5"/>
  </g>
  <g fill="#16a34a" stroke="#ffffff" stroke-width="1.2">
    <circle cx="70" cy="65" r="4"/>
    <circle cx="130" cy="95" r="4"/>
    <circle cx="190" cy="125" r="4"/>
    <circle cx="250" cy="155" r="4"/>
    <circle cx="310" cy="182.5" r="4"/>
    <circle cx="370" cy="200" r="4"/>
    <circle cx="430" cy="205" r="4"/>
  </g>
</svg>`;

const SVG_ENZYME_DATASET2 = `<svg viewBox="0 0 460 276" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Michaelis-Menten rate vs substrate concentration graph for catalase with Curve X (no inhibitor), Curve Y (Inhibitor 1), and Curve Z (Inhibitor 2)">
  <rect x="0" y="0" width="460" height="276" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="235" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Dataset 2: Catalase Rate vs [H₂O₂] With and Without Inhibitors</text>
  <!-- Gridlines (x=70 is 0.0, 40px per 0.2; y=224 is 0, 4px per 1 cm3 min-1) -->
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="70" y1="64" x2="434" y2="64"/>
    <line x1="70" y1="104" x2="434" y2="104"/>
    <line x1="70" y1="144" x2="434" y2="144"/>
    <line x1="70" y1="184" x2="434" y2="184"/>
    <line x1="110" y1="42" x2="110" y2="224"/>
    <line x1="150" y1="42" x2="150" y2="224"/>
    <line x1="190" y1="42" x2="190" y2="224"/>
    <line x1="230" y1="42" x2="230" y2="224"/>
    <line x1="270" y1="42" x2="270" y2="224"/>
    <line x1="310" y1="42" x2="310" y2="224"/>
    <line x1="350" y1="42" x2="350" y2="224"/>
    <line x1="390" y1="42" x2="390" y2="224"/>
    <line x1="430" y1="42" x2="430" y2="224"/>
  </g>
  <!-- Vmax and 1/2 Vmax guide lines -->
  <line x1="70" y1="64" x2="434" y2="64" stroke="#64748b" stroke-width="1.3" stroke-dasharray="5,4"/>
  <text x="432" y="59" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#475569">Vmax (X &amp; Y) = 40</text>
  <line x1="70" y1="144" x2="434" y2="144" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,4"/>
  <text x="432" y="139" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">½ Vmax (X &amp; Y) = 20</text>
  <!-- Axes -->
  <line x1="70" y1="40" x2="70" y2="224" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="70" y1="224" x2="436" y2="224" stroke="#0f172a" stroke-width="1.8"/>
  <!-- Y labels -->
  <text x="62" y="68" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">40</text>
  <text x="62" y="108" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">30</text>
  <text x="62" y="148" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">20</text>
  <text x="62" y="188" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">10</text>
  <text x="62" y="228" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">0</text>
  <text x="19" y="132" text-anchor="middle" transform="rotate(-90 19 132)" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">Rate of O₂ release (cm³ min⁻¹)</text>
  <!-- X labels -->
  <text x="70" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">0.0</text>
  <text x="110" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">0.2</text>
  <text x="150" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">0.4</text>
  <text x="190" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">0.6</text>
  <text x="230" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">0.8</text>
  <text x="270" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">1.0</text>
  <text x="310" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">1.2</text>
  <text x="350" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">1.4</text>
  <text x="390" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">1.6</text>
  <text x="430" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">1.8</text>
  <text x="250" y="261" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">Substrate concentration [H₂O₂] (mol dm⁻³)</text>
  <!-- Curve X: No inhibitor (Vmax=40, Km=0.20) -->
  <polyline points="70,224 90,170.7 110,144 150,117.3 190,104 230,96 270,90.7 310,86.9 350,84 390,81.8 430,80" fill="none" stroke="#16a34a" stroke-width="2.8"/>
  <!-- Curve Y: Inhibitor 1 (Vmax=40, Km=0.60) -->
  <polyline points="70,224 110,184 150,160 190,144 230,132.6 270,124 310,117.3 350,112 390,107.6 430,104" fill="none" stroke="#2563eb" stroke-width="2.8"/>
  <!-- Curve Z: Inhibitor 2 (Vmax=20, Km=0.20) -->
  <polyline points="70,224 90,197.3 110,184 150,170.7 190,164 230,160 270,157.3 310,155.4 350,154 390,152.9 430,152" fill="none" stroke="#dc2626" stroke-width="2.8"/>
  <!-- Highlight Km dots -->
  <circle cx="110" cy="144" r="3.8" fill="#16a34a"/>
  <circle cx="190" cy="144" r="3.8" fill="#2563eb"/>
  <circle cx="110" cy="184" r="3.8" fill="#dc2626"/>
  <!-- Legend -->
  <rect x="268" y="176" width="154" height="42" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="276" y1="187" x2="294" y2="187" stroke="#16a34a" stroke-width="2.8"/>
  <text x="300" y="191" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#0f172a">Curve X: No inhibitor</text>
  <line x1="276" y1="199" x2="294" y2="199" stroke="#2563eb" stroke-width="2.8"/>
  <text x="300" y="203" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#0f172a">Curve Y: Inhibitor 1</text>
  <line x1="276" y1="211" x2="294" y2="211" stroke="#dc2626" stroke-width="2.8"/>
  <text x="300" y="215" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#0f172a">Curve Z: Inhibitor 2</text>
</svg>`;

const SVG_ECOLOGY_DATASET3 = `<svg viewBox="0 0 460 228" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="2 by 2 contingency table showing observed quadrat frequencies for dog whelks and barnacles across 100 rocky shore quadrats">
  <rect x="0" y="0" width="460" height="228" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="230" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Dataset 3: Rocky Shore Quadrat Survey (100 Random Quadrats)</text>
  <!-- Contingency table box -->
  <rect x="24" y="42" width="412" height="132" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.3"/>
  <!-- Header row background -->
  <rect x="24" y="42" width="412" height="34" rx="8" fill="#e2e8f0"/>
  <rect x="24" y="66" width="412" height="10" fill="#e2e8f0"/>
  <!-- Horizontal dividers -->
  <line x1="24" y1="76" x2="436" y2="76" stroke="#94a3b8" stroke-width="1.2"/>
  <line x1="24" y1="110" x2="436" y2="110" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="24" y1="144" x2="436" y2="144" stroke="#94a3b8" stroke-width="1.2"/>
  <!-- Vertical dividers -->
  <line x1="166" y1="42" x2="166" y2="174" stroke="#94a3b8" stroke-width="1.2"/>
  <line x1="262" y1="42" x2="262" y2="174" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="358" y1="42" x2="358" y2="174" stroke="#94a3b8" stroke-width="1.2"/>
  <!-- Header texts -->
  <text x="95" y="63" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">Species presence</text>
  <text x="214" y="56" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a">Barnacles</text>
  <text x="214" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Present</text>
  <text x="310" y="56" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a">Barnacles</text>
  <text x="310" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Absent</text>
  <text x="397" y="63" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">Row total</text>
  <!-- Row 1 -->
  <text x="95" y="97" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">Dog whelks present</text>
  <text x="214" y="98" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#16a34a">42</text>
  <text x="310" y="98" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">18</text>
  <text x="397" y="98" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155">60</text>
  <!-- Row 2 -->
  <text x="95" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">Dog whelks absent</text>
  <text x="214" y="132" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a">18</text>
  <text x="310" y="132" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#16a34a">22</text>
  <text x="397" y="132" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155">40</text>
  <!-- Totals row -->
  <text x="95" y="163" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">Column total</text>
  <text x="214" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155">60</text>
  <text x="310" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155">40</text>
  <text x="397" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">100</text>
  <!-- Critical values note -->
  <rect x="24" y="186" width="412" height="28" rx="6" fill="#ecfdf5" stroke="#86efac" stroke-width="1"/>
  <text x="230" y="204" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#166534">Critical values (α = 0.05): df = 1 → 3.841  ·  df = 2 → 5.991  ·  df = 3 → 7.815</text>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-p1b",
  title: "Mock Paper 1B — Data-Based & Experimental Skills",
  level: "SL",
  paperType: "Paper 1B · Data-Based & Experimental",
  calculator: true,
  minutes: 45,
  questions: [
    // =============== DATASET 1: POTATO OSMOSIS & WATER POTENTIAL (Q01–Q05) ===============
    {
      id: "exam-p1b-q01",
      kind: "short",
      topicId: "d1-d2-continuity-molecules-cells",
      guideRef: "water-potential-osmosis",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Percentage change = [(final − initial) / initial] × 100",
      diagram: SVG_OSMOSIS_DATASET1,
      question:
        "**Dataset 1 (Potato Tissue Osmosis):** Cylinders of *Solanum tuberosum* tuber tissue (`5 mm × 40 mm`) were blotted dry, weighed, immersed for `90 min` at `22 °C` in sucrose solutions (`0.0` to `0.6 mol dm⁻³`, `n = 5` replicates each), blotted dry again, and reweighed.\n\nReplicate Cylinder A in `0.4 mol dm⁻³` sucrose had an initial mass of `2.50 g` and a final mass of `2.28 g`. Calculate the percentage change in mass of Cylinder A, including the `+` or `−` sign, to one decimal place.",
      answer: {
        type: "number",
        value: -8.8,
        tolerance: 0.05,
        display: "−8.8%",
      },
      traps: [
        {
          spec: { type: "number", value: 8.8, tolerance: 0.05 },
          feedback: "Check the sign: final mass (`2.28 g`) is LESS than initial mass (`2.50 g`), so the percentage change is negative.",
        },
        {
          spec: { type: "number", value: -9.6, tolerance: 0.1 },
          feedback: "Divide by the INITIAL mass (`2.50 g`), not the final mass (`2.28 g`).",
        },
      ],
      hints: [
        "Use the percentage-change formula: `[(final mass − initial mass) / initial mass] × 100`.",
        "Calculate `(2.28 − 2.50) / 2.50`, then multiply by `100` and keep the negative sign.",
      ],
      solution: [
        "Change in mass `= 2.28 − 2.50 = −0.22 g`.",
        "Percentage change `=` {{(-0.22)/2.50}} `× 100 = −8.8%`.",
      ],
      commonError: "Dividing mass change by final mass instead of initial mass, or omitting the negative sign when tissue loses water.",
    },
    {
      id: "exam-p1b-q02",
      kind: "short",
      topicId: "d1-d2-continuity-molecules-cells",
      guideRef: "water-potential-osmosis",
      level: "SL",
      difficulty: "core",
      commandTerm: "Determine",
      strategy: "Read x-intercept where mean percentage mass change equals 0%",
      question:
        "Using the Dataset 1 osmosis graph above (where the plotted line passes through `+3.0%` at `0.2 mol dm⁻³` and `−3.0%` at `0.3 mol dm⁻³`), determine the estimated isotonic sucrose concentration of the potato tissue in `mol dm⁻³` (to 2 decimal places).",
      answer: {
        type: "number",
        value: 0.25,
        tolerance: 0.01,
        display: "0.25 mol dm⁻³",
      },
      traps: [
        {
          spec: { type: "number", value: 0.2, tolerance: 0.005 },
          feedback: "At `0.20 mol dm⁻³`, the tissue still gained `+3.0%` mass (hypotonic), so the isotonic point lies further right.",
        },
        {
          spec: { type: "number", value: 0.3, tolerance: 0.005 },
          feedback: "At `0.30 mol dm⁻³`, the tissue lost `−3.0%` mass (hypertonic), so the isotonic point lies halfway between `0.2` and `0.3`.",
        },
      ],
      hints: [
        "At the isotonic concentration, there is zero net movement of water, so mean percentage mass change is `0%`.",
        "Find where the curve crosses the bold horizontal `0%` axis between `0.2` and `0.3 mol dm⁻³`.",
      ],
      solution: [
        "Isotonic osmolarity corresponds to `0%` net mass change.",
        "Between `(0.20, +3.0%)` and `(0.30, −3.0%)`, the curve crosses `0%` midway at `0.25 mol dm⁻³`.",
      ],
      commonError: "Reading the lowest concentration tested or the concentration with largest mass loss instead of the `0%` intercept.",
    },
    {
      id: "exam-p1b-q03",
      kind: "short",
      topicId: "d1-d2-continuity-molecules-cells",
      guideRef: "water-potential-osmosis",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Water potential Ψ = Ψ_s + Ψ_p (D2.3 HL)",
      question:
        "**[HL]** A separate batch of cortical potato cells has an internal solute potential `Ψ_s = −720 kPa` and a turgor pressure potential `Ψ_p = +180 kPa` before immersion into an open beaker of sucrose solution with `Ψ_s = −640 kPa` (`Ψ_p = 0 kPa`). Calculate the initial water potential (`Ψ`) of these potato cells (before osmosis occurs) in `kPa`.",
      answer: {
        type: "number",
        value: -540,
        tolerance: 1,
        display: "−540 kPa",
      },
      traps: [
        {
          spec: { type: "number", value: -900, tolerance: 1 },
          feedback: "Add `Ψ_p` (`+180 kPa`) to `Ψ_s` (`−720 kPa`), do not subtract it: `−720 + 180 = −540 kPa`.",
        },
        {
          spec: { type: "number", value: 540, tolerance: 1 },
          feedback: "Check the sign: plant cells with dissolved solutes almost always have a negative total water potential (`≤ 0 kPa`).",
        },
      ],
      hints: [
        "Apply the water-potential equation `Ψ = Ψ_s + Ψ_p`.",
        "Substitute `Ψ_s = −720 kPa` and `Ψ_p = +180 kPa`, paying careful attention to signs.",
      ],
      solution: [
        "Apply `Ψ = Ψ_s + Ψ_p`.",
        "`Ψ_cell = −720 kPa + 180 kPa = −540 kPa`.",
        "Note: Because `Ψ_cell (−540 kPa)` is higher (less negative) than `Ψ_solution (−640 kPa)`, water will leave these cells by osmosis.",
      ],
      commonError: "Ignoring signs when adding negative `Ψ_s` and positive `Ψ_p`, or mistaking `-640 kPa` for being higher than `-540 kPa`.",
    },
    {
      id: "exam-p1b-q04",
      kind: "written",
      topicId: "b1-b2-form-molecules-cells",
      guideRef: "membranes-transport",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Plasmolysis limit + SD error-bar overlap analysis",
      marks: 3,
      question:
        "Referring to Dataset 1 above, explain why the mean percentage mass change flattens out between `0.5 mol dm⁻³` (`−12.0 ± 1.7%`) and `0.6 mol dm⁻³` (`−13.0 ± 1.9%`), and state what the overlapping error bars indicate about the difference between these two concentrations.",
      hints: [
        "What happens to plant cell membranes and vacuoles once most osmotically available water has already exited in strongly hypertonic solutions?",
        "Compare the vertical span of the `±1 SD` error bars at `0.5` and `0.6 mol dm⁻³`: do they overlap, and what does that imply statistically?",
      ],
      modelAnswer:
        "At high hypertonic concentrations (`0.5–0.6 mol dm⁻³`), cells undergo full plasmolysis as the plasma membrane pulls away from the rigid cellulose cell wall and the vacuole loses almost all extractable water, leaving little further free water to exit within 90 minutes (approaching osmotic equilibrium). Because the ±1 SD error bars overlap extensively (`−10.3%` to `−13.7%` versus `−11.1%` to `−14.9%`), the spread among replicates is large relative to the `1.0%` gap between means, indicating that the difference between `0.5` and `0.6 mol dm⁻³` is unlikely to be statistically significant.",
      markScheme: [
        {
          point: "Cells become fully plasmolysed (membrane detaches from cell wall) / most available free water has already left the vacuole, approaching osmotic equilibrium.",
          keywords: ["plasmolysis", "plasmolysed", "pulls away", "equilibrium"],
        },
        {
          point: "Large overlap of the ±1 SD error bars shows high variability among replicates compared with the small difference between means.",
          keywords: ["variability", "variation", "spread", "replicates"],
        },
        {
          point: "Concludes that the difference between the two means is unlikely to be statistically significant.",
          keywords: ["statistically significant", "not significant", "unlikely to be significant"],
        },
      ],
      commonError: "Claiming overlapping SD error bars 'prove there is no difference' — IB examiners require cautious language such as 'unlikely to be statistically significant' until a statistical test (e.g. t-test) is performed.",
    },
    {
      id: "exam-p1b-q05",
      kind: "written",
      topicId: "d1-d2-continuity-molecules-cells",
      guideRef: "water-potential-osmosis",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      strategy: "Pair each experimental flaw with its directional error & concrete improvement",
      marks: 4,
      question:
        "Evaluate two methodological limitations in this potato osmosis investigation (considering blotting technique, tissue variability, or immersion conditions) and propose a specific, practical improvement for each.",
      hints: [
        "Consider how excess surface sucrose remaining on cylinders—or squeezing too hard with paper towels—biases measured final mass.",
        "Consider biological variability across different potatoes or regions (skin vs pith), temperature drift, or whether `90 min` is enough for full equilibrium.",
        "Ensure you give TWO distinct limitations AND one concrete, workable fix matched to each limitation.",
      ],
      modelAnswer:
        "First, inconsistent blotting with paper towel introduces random and systematic mass errors: under-blotting leaves residual surface sucrose solution that artificially inflates final mass, whereas pressing too firmly squeezes intracellular sap out of damaged outer cells. Improvement: roll each cylinder gently on fresh filter paper for a standardised duration (e.g. `10 s`) under uniform light pressure. Second, cylinders cut from different tubers or depths (cortex versus pith) differ in starch content and internal solute concentration, widening standard deviations; furthermore, open beakers allow water evaporation that gradually raises bath molarity. Improvement: bore all cylinders from the central cortex of a single fresh tuber, remove all epidermis, cover vessels with parafilm, and maintain `22 °C` in a thermostatic water bath.",
      markScheme: [
        {
          point: "Identifies inconsistent blotting error (residual liquid adds mass OR vigorous squeezing expels cell sap).",
          keywords: ["residual", "surface", "expels", "squeezes", "inflates"],
        },
        {
          point: "Suggests a standardised gentle blotting protocol (e.g. rolling on filter paper for a fixed time).",
          keywords: ["filter paper", "standardised", "uniform", "fixed time", "roll"],
        },
        {
          point: "Identifies biological variation across tubers/regions OR evaporation/temperature drift changing solution concentration or osmosis rate.",
          keywords: ["different tubers", "cortex", "evaporation", "water bath", "molarity"],
        },
        {
          point: "Proposes a matched improvement (single tuber cortex without skin, covered/sealed tubes, or thermostatic water bath).",
          keywords: ["single", "parafilm", "seal", "cover", "thermostatic"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant methodological limitation or improvement identified.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies one valid limitation with an improvement, or lists two vague errors (e.g. 'human error') without concrete fixes.",
          indicators: ["Generic phrases like 'be more careful' do not earn improvement marks."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly explains how two specific methodological flaws bias mass/osmolarity measurements and matches each with a realistic, controlled improvement.",
          indicators: ["Explicitly links flaw → direction of error → targeted control."],
        },
      ],
      commonError: "Writing vague errors like 'human error' or 'wrong measurements' instead of identifying specific biological/procedural variables such as residual surface liquid or tuber heterogeneity.",
    },

    // =============== DATASET 2: CATALASE ENZYME KINETICS (Q06–Q10) ===============
    {
      id: "exam-p1b-q06",
      kind: "short",
      topicId: "c1-c2-interaction-molecules-cells",
      guideRef: "enzymes-metabolism",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Convert collection time in seconds to minutes for rate in cm³ min⁻¹",
      question:
        "**Dataset 2 (Catalase Activity vs pH and Inhibitors):** Yeast catalase catalyses `2H₂O₂ → 2H₂O + O₂`. In Experiment A, a buffered mixture at `25 °C` produced the following volumes of oxygen collected in a gas syringe over `40 s`:\n\n| Buffer pH | 3.0 | 5.0 | 7.0 | 9.0 | 11.0 |\n|---|---|---|---|---|---|\n| Volume of O₂ in 40 s (cm³) | 3.2 | 14.8 | 26.0 | 19.2 | 4.4 |\n\nCalculate the mean rate of oxygen production at `pH 7.0` in `cm³ min⁻¹`.",
      answer: {
        type: "number",
        value: 39,
        tolerance: 0.1,
        display: "39 cm³ min⁻¹",
      },
      traps: [
        {
          spec: { type: "number", value: 0.65, tolerance: 0.01 },
          feedback: "`0.65` is in `cm³ s⁻¹` — multiply by `60` to convert to `cm³ min⁻¹` as requested.",
        },
        {
          spec: { type: "number", value: 17.3, tolerance: 0.2 },
          feedback: "Do not multiply by `40/60`; `40 s` is `2/3` of a minute, so in a full minute MORE oxygen (`26.0 × 60/40`) is released.",
        },
      ],
      hints: [
        "First find the rate per second (`26.0 cm³ ÷ 40 s`), or note that `40 s = 2/3 min`.",
        "Multiply the per-second rate by `60 s min⁻¹` to express the answer in `cm³ min⁻¹`.",
      ],
      solution: [
        "Rate per second `=` {{26.0/40}} `= 0.65 cm³ s⁻¹`.",
        "Convert to per minute: `0.65 × 60 = 39 cm³ min⁻¹`.",
      ],
      commonError: "Reporting `0.65` (`cm³ s⁻¹`) without converting seconds to minutes when the question specifies `cm³ min⁻¹`.",
    },
    {
      id: "exam-p1b-q07",
      kind: "written",
      topicId: "c1-c2-interaction-molecules-cells",
      guideRef: "enzymes-metabolism",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "pH → R-group ionisation → disrupted ionic/H-bonds → active-site denaturation",
      marks: 3,
      question:
        "Using the Experiment A pH table in Dataset 2, explain why catalase activity falls sharply at `pH 3.0` (`3.2 cm³`) and `pH 11.0` (`4.4 cm³`) compared with `pH 7.0`.",
      hints: [
        "What does an extreme pH alter on the side chains (R-groups) of acidic and basic amino acids?",
        "Explain the chain: altered side-chain charges → broken tertiary bonds → distorted active site → fewer enzyme–substrate complexes.",
      ],
      modelAnswer:
        "Extreme acidic (`pH 3.0`, excess `H⁺`) or alkaline (`pH 11.0`, excess `OH⁻`) conditions alter the ionisation and electrical charges on amino acid R-groups within the catalase polypeptide. This disrupts the ionic bonds and hydrogen bonds that stabilise its three-dimensional tertiary structure, causing the active site to change shape (denaturation). Because the active site is no longer complementary to `H₂O₂`, far fewer enzyme–substrate complexes form per unit time.",
      markScheme: [
        {
          point: "Extreme H⁺ or OH⁻ concentrations alter ionisation/charges on amino acid R-groups.",
          keywords: ["ionisation", "ionization", "charge", "r-group", "side chain"],
        },
        {
          point: "Disrupts ionic bonds and hydrogen bonds stabilising tertiary structure.",
          keywords: ["ionic bond", "hydrogen bond", "tertiary"],
        },
        {
          point: "Active site changes shape (denatures) so substrate H₂O₂ can no longer bind complementarily / fewer enzyme–substrate complexes form.",
          keywords: ["denatur", "active site", "complementary", "enzyme-substrate", "enzyme–substrate"],
        },
      ],
      commonError: "Writing that 'the enzyme dies at extreme pH' (enzymes are non-living proteins, not organisms) or claiming covalent peptide bonds break.",
    },
    {
      id: "exam-p1b-q08",
      kind: "short",
      topicId: "c1-c2-interaction-molecules-cells",
      guideRef: "enzymes-metabolism",
      level: "HL",
      difficulty: "core",
      commandTerm: "Determine",
      strategy: "Read apparent K_m as [S] where rate equals ½ V_max (C1.1 HL)",
      diagram: SVG_ENZYME_DATASET2,
      question:
        "**[HL]** In Experiment B of Dataset 2 (graph above), catalase initial reaction rate was measured across substrate concentrations `[H₂O₂]` without inhibitor (Curve X), with Inhibitor 1 (Curve Y), and with Inhibitor 2 (Curve Z). Both Curve X and Curve Y approach `V_max = 40 cm³ min⁻¹` at saturating `[H₂O₂]`.\n\nDetermine the apparent Michaelis constant (`K_m`) of catalase in the presence of **Inhibitor 1 (Curve Y)** in `mol dm⁻³` (to 2 decimal places).",
      answer: {
        type: "number",
        value: 0.6,
        tolerance: 0.02,
        display: "0.60 mol dm⁻³",
      },
      traps: [
        {
          spec: { type: "number", value: 0.2, tolerance: 0.02 },
          feedback: "`0.20 mol dm⁻³` is the `K_m` of Curve X (no inhibitor) and Curve Z — trace across `½ V_max = 20 cm³ min⁻¹` to the blue Curve Y.",
        },
        {
          spec: { type: "number", value: 20, tolerance: 0.5 },
          feedback: "`20 cm³ min⁻¹` is `½ V_max` on the y-axis; `K_m` is the corresponding substrate concentration on the x-axis.",
        },
      ],
      hints: [
        "`K_m` is defined as the substrate concentration `[S]` at which the reaction rate reaches `½ V_max`.",
        "Follow the dashed horizontal line at `½ V_max = 20 cm³ min⁻¹` until it intersects Curve Y (blue), then read straight down to the horizontal axis.",
      ],
      solution: [
        "For Curve Y, `V_max = 40 cm³ min⁻¹`, so `½ V_max = 20 cm³ min⁻¹`.",
        "Curve Y crosses `20 cm³ min⁻¹` directly above `[H₂O₂] = 0.60 mol dm⁻³`.",
        "Therefore, apparent `K_m = 0.60 mol dm⁻³` (three times higher than the uninhibited `0.20 mol dm⁻³`).",
      ],
      commonError: "Reporting `½ V_max` (a rate from the y-axis) instead of `K_m` (a substrate concentration from the x-axis).",
    },
    {
      id: "exam-p1b-q09",
      kind: "written",
      topicId: "c1-c2-interaction-molecules-cells",
      guideRef: "enzymes-metabolism",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Compare and contrast",
      strategy: "Binding site + effect on V_max + effect on K_m + high-[S] reversibility (C1.1 HL)",
      marks: 4,
      question:
        "**[HL]** Compare and contrast the binding mechanisms and kinetic effects (`V_max` and `K_m`) of Inhibitor 1 (Curve Y) and Inhibitor 2 (Curve Z) shown in Dataset 2.",
      hints: [
        "Start with a similarity: both inhibitors lower the reaction rate at low-to-moderate substrate concentrations.",
        "Identify which curve shows competitive inhibition (same `V_max`, higher apparent `K_m`) versus non-competitive inhibition (lower `V_max`, unchanged `K_m`).",
        "Connect each kinetic signature to where the inhibitor binds (active site vs allosteric site) and whether high `[H₂O₂]` overcomes inhibition.",
      ],
      modelAnswer:
        "Both Inhibitor 1 and Inhibitor 2 reduce the initial rate of catalase activity at low substrate concentrations compared with the uninhibited control. However, Inhibitor 1 (Curve Y) is a competitive inhibitor structurally similar to `H₂O₂` that binds directly to the active site; increasing `[H₂O₂]` outcompetes it, so `V_max` remains unchanged (`40 cm³ min⁻¹`) while apparent `K_m` increases. In contrast, Inhibitor 2 (Curve Z) is a non-competitive inhibitor that binds to an allosteric site away from the active site, distorting active-site conformation; adding excess substrate cannot restore full activity, so `V_max` drops by half (`20 cm³ min⁻¹`) while `K_m` for the remaining functional enzyme molecules stays unchanged.",
      markScheme: [
        {
          point: "Similarity: both inhibitors decrease reaction rate at sub-saturating substrate concentrations.",
          keywords: ["both", "reduce", "decrease", "lower rate"],
        },
        {
          point: "Identifies Inhibitor 1 (Curve Y) as competitive: binds active site, overcome by high [S], unchanged V_max, increased apparent K_m.",
          keywords: ["competitive", "outcompetes", "overcome", "apparent"],
        },
        {
          point: "Identifies Inhibitor 2 (Curve Z) as non-competitive: binds allosteric site, alters active-site conformation/shape.",
          keywords: ["non-competitive", "allosteric", "conformation", "distort"],
        },
        {
          point: "Correctly contrasts V_max and K_m for Curve Z: lowers V_max (cannot be overcome by excess substrate) while K_m remains unchanged.",
          keywords: ["unchanged", "cannot restore", "drops", "half"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid identification or kinetic comparison of the two inhibitors.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Names competitive and non-competitive inhibition correctly OR compares only binding sites without accurately linking to `V_max` and `K_m`.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Includes a similarity and thoroughly contrasts binding location, high-substrate reversibility, `V_max`, and `K_m` for both curves.",
          indicators: ["Explicitly uses comparative language and pairs mechanism with kinetic parameter changes."],
        },
      ],
      commonError: "Forgetting to include at least one similarity when the command term is 'Compare and contrast', or claiming non-competitive inhibition increases `K_m`.",
    },
    {
      id: "exam-p1b-q10",
      kind: "written",
      topicId: "c1-c2-interaction-molecules-cells",
      guideRef: "enzymes-metabolism",
      level: "SL",
      difficulty: "core",
      commandTerm: "Evaluate",
      strategy: "Control variables (temperature, cross-contamination) + boiled-enzyme negative control",
      marks: 4,
      question:
        "During a trial run of Dataset 2, a student left the reaction boiling tube on an open bench without a water bath and reused the same unwashed syringe between `pH 3.0` and `pH 11.0` buffers. Evaluate how these two flaws affect the validity of the data and design an appropriate negative control for this assay.",
      hints: [
        "Hydrogen peroxide decomposition is exothermic and room temperature fluctuates — how does temperature drift confound the effect of pH?",
        "How does residual buffer inside an unwashed syringe distort the actual pH of subsequent trials?",
        "What negative control checks whether `H₂O₂` decomposes spontaneously into `O₂` without active catalase?",
      ],
      modelAnswer:
        "Omitting a thermostatic water bath allows ambient temperature fluctuations and exothermic reaction heat to alter kinetic energy and collision frequency, confounding whether rate shifts stem from pH or temperature and reducing internal validity. Reusing an unwashed syringe transfers residual acidic or alkaline buffer (and catalase) between mixtures, shifting the true pH of subsequent runs and introducing systematic cross-contamination error; separate labelled syringes or triple distilled-water rinses are needed. An appropriate negative control replaces active catalase with an equal volume of boiled (denatured) catalase suspension—or buffer alone—with `H₂O₂` at each pH, measuring any spontaneous non-enzymatic decomposition of `H₂O₂` so it can be subtracted from experimental gas volumes.",
      markScheme: [
        {
          point: "No water bath permits temperature drift/exothermic warming, altering kinetic energy/collision rate and confounding the independent variable (pH).",
          keywords: ["temperature", "kinetic energy", "collision", "confound"],
        },
        {
          point: "Unwashed syringe causes buffer/enzyme cross-contamination, shifting actual pH of subsequent trials.",
          keywords: ["cross-contamination", "contaminat", "residual", "shift"],
        },
        {
          point: "Specifies a valid negative control using boiled/denatured enzyme (or buffer without enzyme) plus identical H₂O₂ volume.",
          keywords: ["boiled", "denatured", "without enzyme", "buffer alone"],
        },
        {
          point: "Explains the purpose of the control: to quantify spontaneous/non-enzymatic breakdown of H₂O₂.",
          keywords: ["spontaneous", "non-enzymatic", "baseline", "subtract"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant evaluation of flaws or negative control.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Mentions temperature or contamination superficially, or proposes water-only control without explaining its purpose.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly links both procedural flaws to validity/confounding and justifies a boiled-enzyme negative control to measure spontaneous decomposition.",
        },
      ],
      commonError: "Proposing 'do the experiment without `H₂O₂`' as the only control instead of using boiled catalase + `H₂O₂` to check spontaneous substrate decomposition.",
    },

    // =============== DATASET 3: ECOLOGY SAMPLING & STATISTICS (Q11–Q15) ===============
    {
      id: "exam-p1b-q11",
      kind: "short",
      topicId: "c3-c4-interaction-organisms-ecosystems",
      guideRef: "populations-communities-chi",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Lincoln Index N = (M × n) / m",
      question:
        "**Dataset 3A (Woodland Capture–Mark–Recapture):** Ecologists investigating a coastal woodland captured `80` woodlice (*Oniscus asellus*) on Day 1, marked each gently with non-toxic acrylic paint, and released them. On Day 4, they captured `65` woodlice, of which `16` carried the paint mark.\n\nUse the Lincoln index (`N = M × n / m`) to calculate the estimated woodlouse population size.",
      answer: {
        type: "number",
        value: 325,
        tolerance: 0.5,
        display: "325 individuals",
      },
      traps: [
        {
          spec: { type: "number", value: 129, tolerance: 0.5 },
          feedback: "`80 + 65 − 16 = 129` counts only the unique individuals caught, not the estimated total population (`N = M × n / m`).",
        },
        {
          spec: { type: "number", value: 20, tolerance: 0.5 },
          feedback: "Check the numerator and denominator: multiply the two sample totals (`80 × 65`) and divide by the recaptured marked count (`16`).",
        },
      ],
      hints: [
        "Identify `M = 80` (first sample marked), `n = 65` (second sample total), and `m = 16` (marked recaptures).",
        "Compute `(80 × 65) ÷ 16`.",
      ],
      solution: [
        "Lincoln index: `N =` {{(M * n)/m}}.",
        "`N =` {{(80 * 65)/16}} `=` {{5200/16}} `= 325` individuals.",
      ],
      commonError: "Swapping `n` and `m` or adding the two samples together instead of applying proportional recapture.",
    },
    {
      id: "exam-p1b-q12",
      kind: "short",
      topicId: "a3-a4-unity-organisms-ecosystems",
      guideRef: "conservation-biodiversity",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Simpson's reciprocal diversity index D = N(N − 1) / Σ n(n − 1)",
      question:
        "**Dataset 3B (Ground-Beetle Biodiversity):** Pitfall traps at protected Woodland Site A recorded four carabid beetle species with individual counts `n` as shown below (for comparison, disturbed Site B yielded `D = 1.85`):\n\n| Beetle species | *Carabus violaceus* | *Nebria brevicollis* | *Pterostichus madidus* | *Abax parallelepipedus* |\n|---|---|---|---|---|\n| Count (`n`) | 12 | 10 | 10 | 8 |\n\nCalculate Simpson's reciprocal diversity index, `D =` {{(N(N - 1))/(Σ n(n - 1))}}, for Woodland Site A to 2 decimal places.",
      answer: {
        type: "number",
        value: 4.24,
        tolerance: 0.02,
        display: "4.24",
      },
      traps: [
        {
          spec: { type: "number", value: 3.92, tolerance: 0.02 },
          feedback: "Use `N(N − 1)` and `n(n − 1)`, not `N²` and `n²`.",
        },
        {
          spec: { type: "number", value: 0.24, tolerance: 0.02 },
          feedback: "That is the reciprocal (`1 / D`); Simpson's reciprocal diversity index puts `N(N − 1)` in the numerator.",
        },
      ],
      hints: [
        "Find total individuals `N = 12 + 10 + 10 + 8 = 40`, then compute the numerator `N(N − 1) = 40 × 39`.",
        "Compute `n(n − 1)` for each species (`12×11`, `10×9`, `10×9`, `8×7`), sum them, and divide `N(N − 1)` by that sum.",
      ],
      solution: [
        "`N = 12 + 10 + 10 + 8 = 40`, so `N(N − 1) = 40 × 39 = 1560`.",
        "`Σ n(n − 1) = (12 × 11) + (10 × 9) + (10 × 9) + (8 × 7) = 132 + 90 + 90 + 56 = 368`.",
        "`D =` {{1560/368}} `= 4.239… ≈ 4.24` (higher diversity than disturbed Site B's `1.85`).",
      ],
      commonError: "Squaring `N` and `n` instead of multiplying by `(N − 1)` and `(n − 1)`, or inverting the fraction.",
    },
    {
      id: "exam-p1b-q13",
      kind: "short",
      topicId: "c3-c4-interaction-organisms-ecosystems",
      guideRef: "populations-communities-chi",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Expected E = (row total × col total) / grand total; χ² = Σ (O − E)² / E",
      diagram: SVG_ECOLOGY_DATASET3,
      question:
        "**Dataset 3C (Intertidal Species Association):** Across `100` random `0.5 m × 0.5 m` quadrats on a rocky shore, ecologists recorded presence/absence of barnacles (*Semibalanus balanoides*) and predatory dog whelks (*Nucella lapillus*), summarised in the contingency table above.\n\nCalculate the chi-squared (`χ²`) test statistic to 2 decimal places.",
      answer: {
        type: "number",
        value: 6.25,
        tolerance: 0.02,
        display: "6.25",
      },
      traps: [
        {
          spec: { type: "number", value: 1.44, tolerance: 0.05 },
          feedback: "Check each expected value `E = (row total × col total) / 100` (`36, 24, 24, 16`) and sum `(O − E)² / E` across all 4 cells.",
        },
        {
          spec: { type: "number", value: 0.0, tolerance: 0.01 },
          feedback: "Remember to SQUARE `(O − E)` before dividing by `E`; otherwise positive and negative deviations cancel to zero.",
        },
      ],
      hints: [
        "Compute the four expected counts using `E = (row total × column total) / 100`: `(60×60)/100 = 36`, `(60×40)/100 = 24`, `(40×60)/100 = 24`, `(40×40)/100 = 16`.",
        "Notice `|O − E| = 6` in every cell, so `(O − E)² = 36` for all four cells.",
        "Sum `36/36 + 36/24 + 36/24 + 36/16`.",
      ],
      solution: [
        "Expected counts: `E₁₁ = 36`, `E₁₂ = 24`, `E₂₁ = 24`, `E₂₂ = 16`.",
        "Each cell has `|O − E| = 6`, so `(O − E)² = 36`.",
        "`χ² =` {{36/36}} `+` {{36/24}} `+` {{36/24}} `+` {{36/16}} `= 1.00 + 1.50 + 1.50 + 2.25 = 6.25`.",
      ],
      commonError: "Dividing `(O − E)²` by `O` instead of `E`, or assuming equal expected counts of `25` in every cell despite unequal row and column totals.",
    },
    {
      id: "exam-p1b-q14",
      kind: "written",
      topicId: "c3-c4-interaction-organisms-ecosystems",
      guideRef: "populations-communities-chi",
      level: "SL",
      difficulty: "core",
      commandTerm: "Deduce",
      strategy: "State H₀, compute df = (r−1)(c−1), compare χ²_calc vs χ²_crit, interpret ecology",
      marks: 4,
      question:
        "For the rocky-shore survey in Dataset 3C, state the null hypothesis (`H₀`), determine the degrees of freedom (`df`), and — comparing your calculated `χ²` statistic against the relevant `α = 0.05` critical value shown beneath the table — deduce the statistical conclusion and its biological explanation.",
      hints: [
        "`H₀` states there is NO statistically significant association (the two species are distributed independently).",
        "For a `2 × 2` contingency table, `df = (rows − 1)(columns − 1)`.",
        "Compare observed co-occurrence (`42` quadrats with both species) to expected (`36`) to decide whether the association is positive or negative, and link to predator–prey feeding.",
      ],
      modelAnswer:
        "The null hypothesis (`H₀`) is that there is no statistically significant association between the distributions of barnacles and dog whelks (they are distributed independently). For a `2 × 2` table, degrees of freedom `df = (2 − 1)(2 − 1) = 1`, giving a critical value of `3.841` at `α = 0.05`. Because the calculated `χ²` statistic exceeds `3.841`, we reject `H₀` and conclude there is a statistically significant positive association between the two species (both co-occur in `42` quadrats versus `36` expected). Biologically, dog whelks are specialist predators that aggregate on rock surfaces colonised by their sessile barnacle prey (and both share overlapping mid-shore abiotic tolerances).",
      markScheme: [
        {
          point: "States H₀ correctly: no association between the distributions of barnacles and dog whelks (independent distribution).",
          keywords: ["no association", "no statistically significant association", "independent"],
        },
        {
          point: "Determines df = (2 − 1)(2 − 1) = 1 and selects critical value 3.841.",
          keywords: ["3.841", "3.84", "df = 1", "degree of freedom"],
        },
        {
          point: "Rejects H₀ because calculated χ² exceeds critical value, indicating a statistically significant positive association.",
          keywords: ["reject", "positive association", "exceeds"],
        },
        {
          point: "Provides biological explanation: predator–prey relationship (dog whelks feed on barnacles) or shared microhabitat preference.",
          keywords: ["predator", "prey", "feed", "microhabitat"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid hypothesis, degrees of freedom, or ecological deduction.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States `H₀` or `df = 1` correctly, but misapplies critical value or omits the ecological direction/reason.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately integrates `H₀`, `df = 1` (`3.841`), rejection of `H₀`, positive association, and predator–prey biology.",
        },
      ],
      commonError: "Using `df = 3` (`4 − 1`, the goodness-of-fit formula) instead of `df = (2 − 1)(2 − 1) = 1` for a `2 × 2` test of association.",
    },
    {
      id: "exam-p1b-q15",
      kind: "written",
      topicId: "a3-a4-unity-organisms-ecosystems",
      guideRef: "diversity-genomes-karyograms",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      strategy: "Lincoln index assumptions vs eDNA metabarcoding strengths & limits (A3.1 HL)",
      marks: 4,
      question:
        "**[HL]** Evaluate the use of capture–mark–recapture (Lincoln index) compared with **environmental DNA (eDNA) metabarcoding** for monitoring elusive woodland and coastal animals. Explain two specific assumptions of the Lincoln index whose violation biases population estimates, and weigh one strength against one limitation of eDNA sampling.",
      hints: [
        "Recall closed-population assumptions: no migration/births/deaths, marks neither wash off nor make animals easier for predators to spot, and full random remixing.",
        "Think about what eDNA detects (trace shed cells/mucus/faeces in soil or water) — why is it non-invasive and sensitive, yet difficult for estimating exact headcount?",
      ],
      modelAnswer:
        "The Lincoln index assumes a closed population with negligible births, deaths, immigration, or emigration between sampling days, and assumes that paint marks neither wear off nor increase predation risk or trap avoidance. If marks wash off or marked woodlice suffer higher predation, fewer marked individuals are recaptured (`m` decreases), causing `N = Mn/m` to overestimate true population size; conversely, trap-happy individuals inflate `m` and underestimate `N`. By comparison, eDNA metabarcoding amplifies trace shed DNA from soil or water without ever trapping or stressing animals, detecting rare, nocturnal, or cryptic species with high sensitivity. However, eDNA cannot directly determine exact abundance, age structure, or whether detected DNA came from a living resident versus transported detritus or dead tissue.",
      markScheme: [
        {
          point: "Explains one Lincoln index assumption and directional bias (e.g. closed population / no migration/death, or marks do not wear off / increase predation / alter trap behaviour).",
          keywords: ["closed population", "migration", "predation", "wash off", "wear off"],
        },
        {
          point: "Explains a second distinct Lincoln index assumption or directional bias on m and N.",
          keywords: ["overestimate", "underestimate", "remix", "trap"],
        },
        {
          point: "States a strength of eDNA: non-invasive, avoids trapping stress, or highly sensitive for rare/elusive/cryptic species.",
          keywords: ["non-invasive", "rare", "cryptic", "elusive", "without trapping"],
        },
        {
          point: "States a limitation of eDNA: cannot give exact population counts/age/sex or DNA may persist/transport from dead organisms.",
          keywords: ["abundance", "exact", "dead", "transported", "age"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid evaluation of mark–recapture assumptions or eDNA.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Lists Lincoln index assumptions without explaining bias direction, or mentions eDNA without balancing strength and limitation.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly links two Lincoln index assumption violations to over/underestimation bias and evaluates both a strength and limitation of eDNA.",
        },
      ],
      commonError: "Stating eDNA gives exact population counts — eDNA primarily establishes presence/absence and relative barcode read abundance rather than precise headcount.",
    },
  ],
};
