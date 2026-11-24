import type { ExamPaper } from "../types.ts";

const SVG_MOLECULAR_CLOCK_Q03 = `<svg viewBox="0 0 460 232" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hominid cladogram and molecular clock calibration showing Orangutan diverging 14.0 million years ago with 28 mitochondrial nucleotide substitutions and Gorilla differing from Human by 16 substitutions">
  <rect x="0" y="0" width="460" height="232" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="230" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Hominid Cladogram &amp; Mitochondrial Molecular Clock</text>
  <!-- Time axis at bottom (x=55 is 16 Ma, x=325 is 0 Ma; 16.875 px per Ma) -->
  <line x1="55" y1="186" x2="335" y2="186" stroke="#0f172a" stroke-width="1.5"/>
  <text x="89" y="203" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">14 Ma</text>
  <line x1="89" y1="182" x2="89" y2="190" stroke="#0f172a" stroke-width="1.4"/>
  <text x="190" y="203" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b91c1c">? Ma</text>
  <line x1="190" y1="182" x2="190" y2="190" stroke="#b91c1c" stroke-width="1.6"/>
  <text x="224" y="203" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">6 Ma</text>
  <line x1="224" y1="182" x2="224" y2="190" stroke="#0f172a" stroke-width="1.4"/>
  <text x="325" y="203" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">0 Ma (Present)</text>
  <line x1="325" y1="182" x2="325" y2="190" stroke="#0f172a" stroke-width="1.4"/>
  <text x="195" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#0f172a">Time before present (millions of years ago, Ma)</text>
  <!-- Tree branches -->
  <!-- Root to 14 Ma split (x=89, y=134) -->
  <line x1="55" y1="134" x2="89" y2="134" stroke="#0f172a" stroke-width="2.4"/>
  <!-- Orangutan branch up to y=54 -->
  <line x1="89" y1="134" x2="89" y2="54" stroke="#0f172a" stroke-width="2.4"/>
  <line x1="89" y1="54" x2="325" y2="54" stroke="#0f172a" stroke-width="2.4"/>
  <text x="334" y="58" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">Orangutan</text>
  <circle cx="89" cy="134" r="4.5" fill="#16a34a"/>
  <line x1="89" y1="138" x2="89" y2="182" stroke="#16a34a" stroke-width="1.2" stroke-dasharray="3,3"/>
  <!-- Line to Gorilla split (x=190, y=134) -->
  <line x1="89" y1="134" x2="190" y2="134" stroke="#0f172a" stroke-width="2.4"/>
  <line x1="190" y1="134" x2="190" y2="90" stroke="#0f172a" stroke-width="2.4"/>
  <line x1="190" y1="90" x2="325" y2="90" stroke="#0f172a" stroke-width="2.4"/>
  <text x="334" y="94" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">Gorilla</text>
  <circle cx="190" cy="134" r="4.5" fill="#dc2626"/>
  <line x1="190" y1="138" x2="190" y2="182" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
  <!-- Line to Chimp/Human split (x=224, y=134) -->
  <line x1="190" y1="134" x2="224" y2="134" stroke="#0f172a" stroke-width="2.4"/>
  <line x1="224" y1="134" x2="224" y2="122" stroke="#0f172a" stroke-width="2.4"/>
  <line x1="224" y1="122" x2="325" y2="122" stroke="#0f172a" stroke-width="2.4"/>
  <text x="334" y="126" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">Chimpanzee</text>
  <line x1="224" y1="134" x2="224" y2="154" stroke="#0f172a" stroke-width="2.4"/>
  <line x1="224" y1="154" x2="325" y2="154" stroke="#0f172a" stroke-width="2.4"/>
  <text x="334" y="158" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">Human</text>
  <circle cx="224" cy="134" r="4" fill="#2563eb"/>
  <!-- Calibration pill -->
  <rect x="102" y="34" width="218" height="16" rx="4" fill="#ecfdf5" stroke="#86efac" stroke-width="1"/>
  <text x="211" y="45" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#166534">Human–Orangutan: 28 substitutions (14.0 Ma)</text>
</svg>`;

const SVG_BOHR_SHIFT_Q07 = `<svg viewBox="0 0 460 272" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Oxygen-haemoglobin dissociation curves showing Fetal Hb, Adult Hb at pH 7.4 (58 percent saturation at 4.0 kPa), and Adult Hb at pH 7.2 Bohr-shifted right (38 percent saturation at 4.0 kPa)">
  <rect x="0" y="0" width="460" height="272" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="235" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Oxygen–Haemoglobin Dissociation Curves &amp; Bohr Shift</text>
  <!-- Gridlines (x=70 is 0 kPa, 25px per 1 kPa; y=224 is 0%, 1.8px per 1%) -->
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="70" y1="44" x2="424" y2="44"/>
    <line x1="70" y1="80" x2="424" y2="80"/>
    <line x1="70" y1="116" x2="424" y2="116"/>
    <line x1="70" y1="152" x2="424" y2="152"/>
    <line x1="70" y1="188" x2="424" y2="188"/>
    <line x1="120" y1="40" x2="120" y2="224"/>
    <line x1="170" y1="40" x2="170" y2="224"/>
    <line x1="220" y1="40" x2="220" y2="224"/>
    <line x1="270" y1="40" x2="270" y2="224"/>
    <line x1="320" y1="40" x2="320" y2="224"/>
    <line x1="370" y1="40" x2="370" y2="224"/>
    <line x1="420" y1="40" x2="420" y2="224"/>
  </g>
  <!-- Vertical guide at pO2 = 4.0 kPa (x=170) -->
  <line x1="170" y1="42" x2="170" y2="224" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,3"/>
  <!-- Axes -->
  <line x1="70" y1="40" x2="70" y2="224" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="70" y1="224" x2="428" y2="224" stroke="#0f172a" stroke-width="1.8"/>
  <!-- Y labels -->
  <text x="62" y="48" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#334155">100</text>
  <text x="62" y="84" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#334155">80</text>
  <text x="62" y="120" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#334155">60</text>
  <text x="62" y="156" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#334155">40</text>
  <text x="62" y="192" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#334155">20</text>
  <text x="62" y="228" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#334155">0</text>
  <text x="19" y="132" text-anchor="middle" transform="rotate(-90 19 132)" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">O₂ saturation of Hb (%)</text>
  <!-- X labels -->
  <text x="70" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">0</text>
  <text x="120" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">2</text>
  <text x="170" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a">4</text>
  <text x="220" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">6</text>
  <text x="270" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">8</text>
  <text x="320" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">10</text>
  <text x="370" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">12</text>
  <text x="420" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">14</text>
  <text x="245" y="261" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">Partial pressure of oxygen, pO₂ (kPa)</text>
  <!-- Fetal Hb curve -->
  <polyline points="70,224 95,190 120,148.4 170,83.6 220,58.4 270,51.2 320,47.6 395,46.2 420,45.8" fill="none" stroke="#7c3aed" stroke-width="2.4" stroke-dasharray="6,3"/>
  <!-- Adult pH 7.4 curve -->
  <polyline points="70,224 95,212 120,184.4 170,119.6 220,76.4 270,58.4 320,51.2 395,47.6 420,46.7" fill="none" stroke="#16a34a" stroke-width="2.8"/>
  <!-- Adult pH 7.2 Bohr-shifted curve -->
  <polyline points="70,224 95,217 120,202.4 170,155.6 220,107 270,76.4 320,60.2 395,49.4 420,47.6" fill="none" stroke="#dc2626" stroke-width="2.8"/>
  <!-- Highlighted points at 4.0 kPa -->
  <circle cx="170" cy="119.6" r="4" fill="#16a34a" stroke="#ffffff" stroke-width="1"/>
  <text x="180" y="117" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d">58%</text>
  <circle cx="170" cy="155.6" r="4" fill="#dc2626" stroke="#ffffff" stroke-width="1"/>
  <text x="180" y="160" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b91c1c">38%</text>
  <!-- Legend -->
  <rect x="266" y="156" width="148" height="58" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="274" y1="170" x2="294" y2="170" stroke="#7c3aed" stroke-width="2.4" stroke-dasharray="5,2"/>
  <text x="300" y="174" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#0f172a">Fetal Hb (pH 7.4)</text>
  <line x1="274" y1="186" x2="294" y2="186" stroke="#16a34a" stroke-width="2.8"/>
  <text x="300" y="190" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#0f172a">Adult Hb (pH 7.4)</text>
  <line x1="274" y1="202" x2="294" y2="202" stroke="#dc2626" stroke-width="2.8"/>
  <text x="300" y="206" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#0f172a">Adult Hb (pH 7.2)</text>
</svg>`;

const SVG_LINKED_CROSS_Q16 = `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Autosomal linkage chromosome diagram for Drosophila grey body normal wings crossed with black body vestigial wings yielding 415 and 425 parental offspring and 78 and 82 recombinant offspring">
  <rect x="0" y="0" width="460" height="220" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="230" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Drosophila Linked-Gene Test Cross (BbVv × bbvv, n = 1000)</text>
  <!-- Left: Parental homologous chromosomes in BbVv -->
  <rect x="20" y="38" width="166" height="162" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="103" y="56" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">Linked Loci (Cis: BV / bv)</text>
  <!-- Chromatid 1 (BV) -->
  <rect x="64" y="68" width="18" height="106" rx="9" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
  <line x1="64" y1="98" x2="82" y2="98" stroke="#15803d" stroke-width="2"/>
  <text x="52" y="102" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d">B</text>
  <line x1="64" y1="146" x2="82" y2="146" stroke="#15803d" stroke-width="2"/>
  <text x="52" y="150" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d">V</text>
  <!-- Chromatid 2 (bv) -->
  <rect x="122" y="68" width="18" height="106" rx="9" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="122" y1="98" x2="140" y2="98" stroke="#1d4ed8" stroke-width="2"/>
  <text x="150" y="102" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1d4ed8">b</text>
  <line x1="122" y1="146" x2="140" y2="146" stroke="#1d4ed8" stroke-width="2"/>
  <text x="150" y="150" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1d4ed8">v</text>
  <!-- Crossing-over X -->
  <line x1="84" y1="112" x2="120" y2="132" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,2"/>
  <line x1="84" y1="132" x2="120" y2="112" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,2"/>
  <text x="103" y="191" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Prophase I chiasma</text>
  <!-- Right: Progeny count table -->
  <rect x="200" y="38" width="240" height="162" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <rect x="200" y="38" width="240" height="28" rx="8" fill="#e2e8f0"/>
  <rect x="200" y="56" width="240" height="10" fill="#e2e8f0"/>
  <text x="275" y="56" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a">Offspring phenotype</text>
  <text x="396" y="56" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a">Count</text>
  <line x1="354" y1="38" x2="354" y2="200" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="200" y1="98" x2="440" y2="98" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="200" y1="132" x2="440" y2="132" stroke="#cbd5e1" stroke-width="1.2"/>
  <line x1="200" y1="166" x2="440" y2="166" stroke="#e2e8f0" stroke-width="1"/>
  <text x="210" y="86" font-family="system-ui, sans-serif" font-size="10.5" fill="#0f172a">Grey body, normal (BbVv)</text>
  <text x="396" y="86" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d">415</text>
  <text x="210" y="119" font-family="system-ui, sans-serif" font-size="10.5" fill="#0f172a">Black body, vestigial (bbvv)</text>
  <text x="396" y="119" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d">425</text>
  <text x="210" y="153" font-family="system-ui, sans-serif" font-size="10.5" fill="#0f172a">Grey body, vestigial (Bbvv)</text>
  <text x="396" y="153" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626">78</text>
  <text x="210" y="187" font-family="system-ui, sans-serif" font-size="10.5" fill="#0f172a">Black body, normal (bbVv)</text>
  <text x="396" y="187" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626">82</text>
</svg>`;

const SVG_SELECTION_MODES_Q19 = `<svg viewBox="0 0 460 198" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-panel phenotype frequency curves comparing original and post-selection distributions for stabilizing, directional, and disruptive natural selection">
  <rect x="0" y="0" width="460" height="198" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="230" y="21" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">Modes of Natural Selection (Dashed = Original · Solid = After Selection)</text>
  <!-- Panel 1: Stabilizing -->
  <rect x="16" y="34" width="136" height="148" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
  <text x="84" y="51" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d">Mode A</text>
  <line x1="26" y1="158" x2="142" y2="158" stroke="#0f172a" stroke-width="1.3"/>
  <path d="M 30 157 Q 58 154 70 112 Q 84 68 98 112 Q 110 154 138 157" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,3"/>
  <path d="M 46 157 Q 68 152 76 96 Q 84 56 92 96 Q 100 152 122 157" fill="none" stroke="#16a34a" stroke-width="2.6"/>
  <text x="84" y="174" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Phenotype value</text>
  <!-- Panel 2: Directional -->
  <rect x="162" y="34" width="136" height="148" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
  <text x="230" y="51" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8">Mode B</text>
  <line x1="172" y1="158" x2="288" y2="158" stroke="#0f172a" stroke-width="1.3"/>
  <path d="M 174 157 Q 198 154 208 112 Q 220 68 232 112 Q 242 154 266 157" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,3"/>
  <path d="M 200 157 Q 224 154 234 112 Q 246 68 258 112 Q 268 154 288 157" fill="none" stroke="#2563eb" stroke-width="2.6"/>
  <text x="230" y="174" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Phenotype value</text>
  <!-- Panel 3: Disruptive -->
  <rect x="308" y="34" width="136" height="148" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
  <text x="376" y="51" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c">Mode C</text>
  <line x1="318" y1="158" x2="434" y2="158" stroke="#0f172a" stroke-width="1.3"/>
  <path d="M 322 157 Q 350 154 362 112 Q 376 68 390 112 Q 402 154 430 157" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,3"/>
  <path d="M 320 157 Q 336 146 346 88 Q 356 80 366 138 Q 376 150 386 138 Q 396 80 406 88 Q 416 146 432 157" fill="none" stroke="#dc2626" stroke-width="2.6"/>
  <text x="376" y="174" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Phenotype value</text>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-p2-hl",
  title: "Mock Paper 2 (HL) — Structured & Extended Response",
  level: "HL",
  paperType: "Paper 2 (HL) · Structured & Extended",
  calculator: true,
  minutes: 150,
  questions: [
    // =============== THEME A1–A2: NUCLEIC ACIDS, RNA WORLD & VIRUSES ===============
    {
      id: "exam-p2-hl-q01",
      kind: "short",
      topicId: "a1-a2-unity-molecules-cells",
      guideRef: "water-nucleic-acids",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Chargaff's rules: %C = %G, %A = %T, total = 100% (A1.2 HL)",
      question:
        "**[HL]** A double-stranded DNA bacteriophage genome contains `48 000` nucleotides in total (`24 000` base pairs). Biochemical analysis shows that cytosine (`C`) accounts for `22%` of all nucleotides. Calculate the total number of **adenine (`A`)** nucleotides in this viral genome.",
      answer: {
        type: "number",
        value: 13440,
        tolerance: 1,
        display: "13440 nucleotides",
      },
      traps: [
        {
          spec: { type: "number", value: 6720, tolerance: 1 },
          feedback: "Use the TOTAL nucleotide count (`48 000`), not the base-pair count (`24 000`) — `28%` of `48 000` equals `13 440`.",
        },
        {
          spec: { type: "number", value: 10560, tolerance: 1 },
          feedback: "`10 560` is `22%` of `48 000` (the count of cytosine or guanine). Find `%A = (100% − 44%) / 2 = 28%` first.",
        },
      ],
      hints: [
        "By Chargaff's complementary pairing rules, `%G = %C = 22%`, so `%C + %G = 44%`.",
        "Find `%A = (100% − 44%) ÷ 2 = 28%`, then compute `28%` of `48 000` nucleotides.",
      ],
      solution: [
        "`%C = %G = 22%`, so `%A + %T = 100% − 44% = 56%`, giving `%A = 28%`.",
        "Number of adenine nucleotides `= 0.28 × 48 000 = 13 440` nucleotides.",
      ],
      commonError: "Multiplying `%A` by `24 000` base pairs instead of `48 000` total nucleotides.",
    },
    {
      id: "exam-p2-hl-q02",
      kind: "written",
      topicId: "a1-a2-unity-molecules-cells",
      guideRef: "origins-of-cells-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      strategy: "RNA dual role (ribozymes + template) + vesicle compartmentalization + RNA virus mutation rates (A2.1 & A2.3 HL)",
      marks: 6,
      question:
        "**[HL]** Explain the evidence supporting the **RNA world hypothesis** for the origin of early cellular life (including self-assembling compartments and LUCA), and discuss why the high mutation rate of RNA viruses such as influenza and HIV complicates vaccine development.",
      hints: [
        "Explain why early life faced a 'chicken-and-egg' paradox between DNA and protein enzymes, and how catalytic RNA (**ribozymes**) solves it.",
        "Mention spontaneous assembly of amphipathic fatty-acid **vesicles** and hydrothermal-vent evidence for **LUCA** (universal genetic code and shared core genes).",
        "Explain why RNA-dependent RNA polymerase / reverse transcriptase lack proofreading exonuclease activity, driving rapid **antigenic drift** and **antigenic shift**.",
      ],
      modelAnswer:
        "Modern cells rely on DNA for information storage and protein enzymes for catalysis, raising a paradox about which arose first. The **RNA world hypothesis** resolves this because RNA can perform both roles: single-stranded RNA stores hereditary sequences through complementary base pairing and folds into three-dimensional catalytic **ribozymes** capable of self-replication and catalysing peptide-bond formation (as still preserved in the ribosomal RNA core of modern ribosomes). Prebiotic catalysis was compartmentalised when amphipathic fatty acids spontaneously self-assembled into lipid-bilayer **vesicles**, trapping replicating RNA molecules near alkaline **hydrothermal vents** where proton gradients provided free energy; comparative genomics of conserved metabolic genes and the universal genetic code trace all modern domains back to the Last Universal Common Ancestor (**LUCA**), before more chemically stable double-stranded DNA eventually replaced RNA as the primary genome.\n\nConversely, modern RNA viruses such as influenza and HIV retain RNA genomes replicated by error-prone RNA polymerases or **reverse transcriptase** that lack `3' → 5'` proofreading capability. Resulting rapid mutations continuously alter viral surface glycoproteins (such as haemagglutinin/neuraminidase or gp120) through **antigenic drift** (and segmented-genome reassortment causing **antigenic shift** in influenza), allowing new variants to evade pre-existing memory B-cell antibodies and requiring frequently reformulated vaccines or multi-target strategies.",
      markScheme: [
        {
          point: "Explains dual capacity of RNA: stores genetic information (base-pairing template) AND acts as a biological catalyst (ribozyme).",
          keywords: ["ribozyme", "catalys", "catalyst", "dual", "both roles"],
        },
        {
          point: "Cites modern molecular relic evidence (rRNA catalyses peptide bonds in ribosomes) or transition to more chemically stable DNA.",
          keywords: ["ribosom", "rrna", "peptide bond", "stable dna", "more chemically stable"],
        },
        {
          point: "Explains compartmentalization via spontaneous self-assembly of amphipathic fatty-acid/lipid vesicles (protocell membranes).",
          keywords: ["amphipathic", "vesicle", "self-assembl", "bilayer"],
        },
        {
          point: "Links conserved genes/universal genetic code/alkaline hydrothermal vents to LUCA.",
          keywords: ["hydrothermal", "universal genetic code", "proton gradient", "conserved"],
        },
        {
          point: "Explains high viral mutation rate: viral RNA polymerase / reverse transcriptase lacks proofreading activity.",
          keywords: ["proofreading", "reverse transcriptase", "error-prone", "rna polymerase"],
        },
        {
          point: "Connects altered surface antigens (antigenic drift/shift) to immune evasion / memory antibodies failing to recognise new strains.",
          keywords: ["antigenic drift", "antigenic shift", "surface", "evade", "antibodies"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant account of the RNA world hypothesis or viral evolution.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States RNA preceded DNA or that viruses mutate fast, without explaining ribozymes, vesicles, proofreading absence, or antigen evasion.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Covers RNA world mechanisms clearly OR RNA virus immune evasion well, with limited depth on the other half.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Integrates ribozymes, rRNA relics, fatty-acid vesicles, LUCA/vents, lack of viral polymerase proofreading, and antigenic drift/shift vaccine challenges accurately.",
        },
      ],
      commonError: "Claiming viruses evolved before cells as free-living organisms — viruses are obligate intracellular parasites whose origins are polyphyletic/convergent alongside or from cellular genetic elements.",
    },

    // =============== THEME A3–A4: CLADISTICS & MOLECULAR CLOCK ===============
    {
      id: "exam-p2-hl-q03",
      kind: "short",
      topicId: "a3-a4-unity-organisms-ecosystems",
      guideRef: "classification-cladistics-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Molecular clock rate = substitutions / calibration time; t = diff / rate (A3.2 HL)",
      diagram: SVG_MOLECULAR_CLOCK_Q03,
      question:
        "**[HL]** In the hominid cladogram above, fossil calibration establishes that the Orangutan and Human lineages diverged `14.0 million years ago` (`Ma`), accumulating `28` nucleotide substitutions in a conserved mitochondrial gene. If Human and Gorilla differ by `16` substitutions in the exact same gene, estimate the divergence time (in `Ma`, as a whole number only) between the Human and Gorilla lineages assuming a constant molecular clock.",
      answer: {
        type: "number",
        value: 8,
        tolerance: 0.1,
      },
      traps: [
        {
          spec: { type: "number", value: 24.5, tolerance: 0.2 },
          feedback: "Fewer substitutions (`16` vs `28`) means a MORE RECENT divergence time (less than `14.0 Ma`), not older.",
        },
        {
          spec: { type: "number", value: 4, tolerance: 0.1 },
          feedback: "Check the substitution rate: `28 substitutions ÷ 14.0 Ma = 2.0 substitutions per Ma`, so `16 ÷ 2.0 = 8 Ma`.",
        },
      ],
      hints: [
        "First find the molecular-clock rate from the Human–Orangutan calibration: `28 substitutions ÷ 14.0 Ma`.",
        "Divide the `16` Human–Gorilla substitutions by that substitution rate to find divergence time in `Ma`.",
      ],
      solution: [
        "Molecular clock rate `=` {{28/14.0}} `= 2.0` substitutions per million years.",
        "Human–Gorilla divergence time `=` {{16/2.0}} `= 8.0 Ma` (`8`).",
      ],
      commonError: "Dividing `14.0 / 28` and then dividing `16` by `0.5` to get `32 Ma`, violating the cladogram topology where Gorilla diverged AFTER Orangutan.",
    },
    {
      id: "exam-p2-hl-q04",
      kind: "written",
      topicId: "a3-a4-unity-organisms-ecosystems",
      guideRef: "classification-cladistics-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Cladistics (monophyletic clades, rRNA 3 domains, homologous vs analogous, Scrophulariaceae reclassification) (A3.2 HL)",
      marks: 5,
      question:
        "**[HL]** Explain why molecular cladistics using ribosomal RNA (`rRNA`) and DNA base sequences superseded traditional morphological classification in establishing the three-domain system and in reclassifying plant families such as the figworts (*Scrophulariaceae*).",
      hints: [
        "Explain why convergent evolution creates misleading **analogous** morphological traits that falsely group unrelated taxa together.",
        "Explain how cladistics defines a **monophyletic clade** (single common ancestor + all descendants) using shared derived molecular sequences.",
        "Include BOTH Woese's rRNA split of prokaryotes into **Bacteria** and **Archaea** (plus **Eukarya**) AND how DNA sequencing split the paraphyletic/polyphyletic figwort family (*Scrophulariaceae*).",
      ],
      modelAnswer:
        "Traditional morphological classification relied on visible anatomical features, which can be misleading because convergent evolution produces similar **analogous** structures in distantly related lineages experiencing comparable selection pressures (while adaptive radiation can mask closely related **homologous** lineages). Cladistics instead groups organisms strictly into **monophyletic clades**—each containing a single common ancestor and all of its descendants—using objective DNA, amino-acid, and ribosomal RNA (`rRNA`) sequence homologies whose mutation differences track divergence time. Comparing conserved `16S/18S rRNA` sequences revealed that prokaryotes actually comprise two deeply distinct evolutionary lineages, prompting reclassification from five kingdoms into three domains: **Bacteria**, **Archaea** (which share key transcription/histone similarities with eukaryotes), and **Eukarya**. Similarly, chloroplast DNA sequencing of the figwort family (*Scrophulariaceae*) showed its traditional flower morphology had evolved convergently across multiple clades, leading taxonomists to transfer over half its genera into separate monophyletic families such as *Plantaginaceae* and *Orobanchaceae*.",
      markScheme: [
        {
          point: "Explains flaw of morphology: convergent evolution produces analogous traits in unrelated species, obscuring true ancestry.",
          keywords: ["analogous", "convergent", "misleading", "unrelated"],
        },
        {
          point: "Defines clade accurately: a monophyletic group containing a common ancestor and ALL of its descendants.",
          keywords: ["monophyletic", "all of its descendants", "single common ancestor"],
        },
        {
          point: "Explains molecular advantage: conserved DNA/rRNA sequences provide objective homologous data reflecting mutation accumulation over time.",
          keywords: ["homologous", "objective", "mutation", "conserved"],
        },
        {
          point: "Links rRNA sequencing to the three domains: splitting prokaryotes into Bacteria and Archaea alongside Eukarya.",
          keywords: ["bacteria", "archaea", "eukarya"],
        },
        {
          point: "Explains figwort (Scrophulariaceae) reclassification: chloroplast DNA proved shared floral traits were convergent, so genera were redistributed into true clades.",
          keywords: ["chloroplast", "genera", "redistributed", "transfer", "plantaginaceae"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid explanation of molecular cladistics or reclassification.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States DNA is more accurate than appearance without explaining convergent analogy, clades, or concrete examples.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Contrasts analogous vs homologous evidence and explains either the three-domain rRNA shift or figwort reclassification accurately.",
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Seamlessly connects convergent analogy, monophyletic clades, rRNA three-domain taxonomy (Bacteria/Archaea/Eukarya), and figwort DNA reclassification.",
        },
      ],
      commonError: "Calling Bacteria and Archaea 'kingdoms' instead of domains, or forgetting that a true clade must include ALL descendants of a common ancestor.",
    },

    // =============== THEME B1–B2: PROTEIN FOLDING & Na⁺/K⁺ PUMP ===============
    {
      id: "exam-p2-hl-q05",
      kind: "short",
      topicId: "b1-b2-form-molecules-cells",
      guideRef: "membranes-transport",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Na⁺/K⁺ ATPase pump stoichiometry: 3 Na⁺ exported : 2 K⁺ imported per ATP (B2.1 HL)",
      question:
        "**[HL]** During recovery from nerve impulses, active sodium–potassium (`Na⁺/K⁺`) pumps in a neuronal membrane patch export `750 Na⁺` ions out of the axon. Calculate the number of potassium (`K⁺`) ions simultaneously imported into the axon by these pump cycles.",
      answer: {
        type: "number",
        value: 500,
        tolerance: 0,
        display: "500",
      },
      traps: [
        {
          spec: { type: "number", value: 1125, tolerance: 1 },
          feedback: "Check the ratio direction: `3 Na⁺` go OUT for every `2 K⁺` coming IN, so fewer `K⁺` ions are imported than `Na⁺` ions exported.",
        },
        {
          spec: { type: "number", value: 250, tolerance: 0 },
          feedback: "`250` is the number of ATP molecules hydrolysed (`750 ÷ 3`); multiply by `2 K⁺` per cycle to get `500`.",
        },
        {
          spec: { type: "number", value: 750, tolerance: 0 },
          feedback: "The `Na⁺/K⁺` pump is electrogenic (`3 Na⁺ out : 2 K⁺ in`), not a `1 : 1` exchange.",
        },
      ],
      hints: [
        "Each cycle of the `Na⁺/K⁺` pump hydrolyses `1 ATP` to pump `3 Na⁺` OUT and `2 K⁺` IN.",
        "Divide `750 Na⁺` by `3` to find the number of pump cycles, then multiply by `2` to find imported `K⁺` ions.",
      ],
      solution: [
        "Pump cycles `=` {{750/3}} `= 250` cycles (consuming `250 ATP`).",
        "`K⁺` ions imported `= 250 × 2 = 500` ions.",
      ],
      commonError: "Swapping the `3 : 2` stoichiometry (`2 Na⁺` out, `3 K⁺` in) — remember `3 Na⁺` out / `2 K⁺` in helps keep the interior negatively charged.",
    },
    {
      id: "exam-p2-hl-q06",
      kind: "written",
      topicId: "b1-b2-form-molecules-cells",
      guideRef: "carbohydrates-lipids-proteins",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Compare and contrast",
      strategy: "Four structural levels + globular haemoglobin vs fibrous collagen + ATP conformational pump cycle (B1.2 & B2.1 HL)",
      marks: 6,
      question:
        "**[HL]** Explain how primary, secondary, tertiary, and quaternary protein structures produce the contrasting functional properties of globular **haemoglobin** and fibrous **collagen**, and outline how ATP phosphorylation drives conformational changes in the integral **`Na⁺/K⁺` pump**.",
      hints: [
        "Define primary (amino acid sequence), secondary (backbone H-bonded `α-helix`/`β-sheet`), tertiary (R-group folding: hydrophobic core, hydrophilic exterior), and quaternary (multiple polypeptides ± prosthetic haem groups).",
        "Contrast soluble, oxygen-binding globular haemoglobin (`2α + 2β` subunits + `Fe²⁺` haem groups) with insoluble, high-tensile fibrous collagen (triple helix of Gly–X–Y repeats).",
        "Outline the `Na⁺/K⁺` pump cycle: `3 Na⁺` bind intracellularly → ATP phosphorylates pump → conformational flip releases `Na⁺` outside → `2 K⁺` bind → dephosphorylation flips pump back to release `K⁺` inside.",
      ],
      modelAnswer:
        "A protein's **primary structure** (specific amino-acid sequence linked by peptide bonds) dictates local backbone hydrogen bonding into **secondary** motifs (`α-helices` and `β-pleated` sheets) and determines R-group interactions (hydrophobic clustering, ionic, hydrogen, and disulphide bonds) forming **tertiary** 3D folds, while **quaternary** structure assembles multiple polypeptides (and non-protein prosthetic groups).\n\nIn **haemoglobin** (globular), folding buries non-polar R-groups inside and exposes polar hydrophilic R-groups on the exterior, making it water-soluble in erythrocyte cytoplasm; its quaternary assembly of four subunits (`2α, 2β`), each holding a prosthetic **haem** group with an `Fe²⁺` ion, allows reversible cooperative oxygen binding. By contrast, **collagen** (fibrous) has a repetitive primary sequence rich in glycine and proline forming three wound polypeptide chains in an insoluble **triple helix** cross-linked by covalent bonds into fibrils of high tensile strength for tendons, skin, and artery walls.\n\nIn the transmembrane **`Na⁺/K⁺` pump**, three intracellular `Na⁺` ions bind high-affinity sites on the inward-facing conformation; ATP hydrolysis **phosphorylates** the pump protein, inducing a conformational change that opens it toward the exterior and lowers `Na⁺` affinity so `3 Na⁺` are released outside. Two extracellular `K⁺` ions then bind, triggering **dephosphorylation** (release of inorganic phosphate `P_i`), which snaps the pump back to its inward-facing shape and releases `2 K⁺` into the cytosol against both ions' electrochemical gradients.",
      markScheme: [
        {
          point: "Links primary sequence → secondary backbone H-bonds (α-helix/β-sheet) → tertiary R-group folding (hydrophobic/ionic/disulphide).",
          keywords: ["peptide", "backbone", "r-group", "disulphide", "hydrophobic"],
        },
        {
          point: "Globular haemoglobin: hydrophilic exterior confers water solubility; quaternary 4 subunits (2α, 2β) with prosthetic Fe²⁺ haem groups bind O₂.",
          keywords: ["soluble", "hydrophilic", "four subunits", "haem", "fe2+", "fe²+"],
        },
        {
          point: "Fibrous collagen: repetitive glycine/proline sequence forms insoluble triple helix fibrils conferring high tensile strength.",
          keywords: ["triple helix", "insoluble", "tensile", "glycine"],
        },
        {
          point: "Na⁺/K⁺ pump binds 3 intracellular Na⁺ ions and undergoes ATP phosphorylation.",
          keywords: ["3 na", "three", "phosphorylat"],
        },
        {
          point: "Phosphorylation triggers a conformational shift opening outward, lowering Na⁺ affinity and releasing 3 Na⁺ outside.",
          keywords: ["outward", "exterior", "affinity", "released outside"],
        },
        {
          point: "Binding of 2 extracellular K⁺ triggers dephosphorylation (Pi release), restoring inward conformation to release 2 K⁺ inside.",
          keywords: ["dephosphorylat", "2 k", "two", "inward"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid structural explanation of haemoglobin, collagen, or the Na⁺/K⁺ pump.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Names structural levels superficially or mentions active transport without linking R-groups, quaternary features, or phosphorylation.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Contrasts haemoglobin and collagen accurately OR details the phosphorylated Na⁺/K⁺ conformational cycle thoroughly.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Integrates all four folding levels, soluble haem-bearing haemoglobin vs insoluble triple-helix collagen, and exact `3 Na⁺ / 2 K⁺` phosphorylation–dephosphorylation pump cycling.",
        },
      ],
      commonError: "Describing haemoglobin as having no hydrophobic amino acids — globular proteins actually contain many hydrophobic R-groups buried in the interior core, while hydrophilic R-groups face water on the outside.",
    },

    // =============== THEME B3–B4: BOHR SHIFT & SARCOMERE SLIDING FILAMENT ===============
    {
      id: "exam-p2-hl-q07",
      kind: "short",
      topicId: "b3-b4-form-organisms-ecosystems",
      guideRef: "gas-exchange-haemoglobin",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Compare percentage saturation drop at identical tissue pO₂ across pH curves (B3.1 HL)",
      diagram: SVG_BOHR_SHIFT_Q07,
      question:
        "**[HL]** Using the oxygen–haemoglobin dissociation curves above, arterial blood leaves the lungs at `98%` oxygen saturation. At an actively respiring skeletal muscle (`pO₂ = 4.0 kPa`), adult haemoglobin saturation is `58%` at resting blood `pH 7.4` versus `38%` at exercising tissue `pH 7.2`.\n\nCalculate the **percentage-point increase** in oxygen unloaded to the muscle caused by the Bohr shift from `pH 7.4` to `pH 7.2` at `pO₂ = 4.0 kPa`.",
      answer: {
        type: "number",
        value: 20,
        tolerance: 0.5,
        display: "20%",
      },
      traps: [
        {
          spec: { type: "number", value: 60, tolerance: 0.5 },
          feedback: "`60%` (`98 − 38`) is the TOTAL percentage unloaded at `pH 7.2` — subtract the `40%` (`98 − 58`) already unloaded at `pH 7.4` to get the extra `20%`.",
        },
        {
          spec: { type: "number", value: 40, tolerance: 0.5 },
          feedback: "`40%` is the oxygen unloaded at resting `pH 7.4` (`98 − 58`), not the additional unloading caused by the Bohr shift.",
        },
      ],
      hints: [
        "At `pH 7.4`, haemoglobin unloads `98% − 58% = 40%` of its oxygen capacity; at `pH 7.2`, it unloads `98% − 38% = 60%`.",
        "Find the extra percentage points unloaded (`60% − 40%`, or directly `58% − 38%`).",
      ],
      solution: [
        "Oxygen unloaded at `pH 7.4`: `98% − 58% = 40%`.",
        "Oxygen unloaded at `pH 7.2`: `98% − 38% = 60%`.",
        "Bohr-shift increase in unloading `= 60% − 40% = 20%` (`20` percentage points).",
      ],
      commonError: "Reporting total oxygen unloaded at `pH 7.2` (`60%`) rather than the extra unloading gained from the pH drop (`20%`).",
    },
    {
      id: "exam-p2-hl-q08",
      kind: "written",
      topicId: "b3-b4-form-organisms-ecosystems",
      guideRef: "muscle-motility-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      strategy: "Ca²⁺ → troponin/tropomyosin → actin–myosin cross-bridge + power stroke + ATP detachment/recocking + Bohr shift CO₂/H⁺ mechanism (B3.3 & B3.1 HL)",
      marks: 7,
      question:
        "**[HL]** Explain the molecular events of skeletal muscle sarcomere contraction according to the **sliding filament theory** (from `Ca²⁺` release to cross-bridge cycling and sarcomere shortening), and explain how the **Bohr shift** supports sustained aerobic ATP synthesis in contracting muscle fibres.",
      hints: [
        "Trace the exact regulatory protein chain: sarcoplasmic reticulum releases `Ca²⁺` → binds **troponin** → shifts **tropomyosin** → exposes myosin-binding sites on **actin**.",
        "Detail the two distinct jobs of ATP: **ATP hydrolysis** (`ADP + P_i`) cocks the myosin head for the power stroke pulling actin toward the M-line, while binding of a **fresh ATP** molecule detaches the myosin head from actin.",
        "Explain the Bohr shift chemically: respiring muscle releases `CO₂` → forms carbonic acid (`H₂CO₃ → H⁺ + HCO₃⁻`) → lower pH alters haemoglobin tertiary conformation, reducing `O₂` affinity and shifting the dissociation curve right so more `O₂` unloads to mitochondria.",
      ],
      modelAnswer:
        "**Sliding filament mechanism:** When a motor neuron depolarizes the sarcolemma and T-tubules, the **sarcoplasmic reticulum** releases **`Ca²⁺`** ions into the sarcoplasm. `Ca²⁺` binds to **troponin**, causing a conformational shift that moves **tropomyosin** away from the myosin-binding sites along the thin **actin** filaments. Energised myosin heads (already carrying bound `ADP + P_i` from prior ATP hydrolysis) bind exposed actin sites to form **actomyosin cross-bridges**. Release of `P_i` and `ADP` triggers the **power stroke**, pivoting myosin heads and sliding thin actin filaments inward over thick myosin filaments toward the M-line, drawing **Z-lines** closer and shortening the sarcomere (narrowing the H-zone and I-band while A-band length remains constant). Binding of a **new ATP** molecule to the myosin head breaks the cross-bridge (detachment), and hydrolysis of that ATP re-cocks the myosin head for the next cycle (with ATP also driving active re-uptake of `Ca²⁺` into the sarcoplasmic reticulum for relaxation).\n\n**Bohr shift support:** Vigorous aerobic respiration in contracting muscle generates abundant **`CO₂`**, which diffuses into erythrocytes and reacts with water (via carbonic anhydrase) to form carbonic acid (`H₂CO₃`), dissociating into **`H⁺`** and `HCO₃⁻` and lowering blood pH. Binding of `H⁺` ions to haemoglobin alters its allosteric conformation, decreasing its **affinity** for `O₂` and shifting the oxygen dissociation curve to the **right**; consequently, haemoglobin unloads substantially more `O₂` at low tissue `pO₂`, supplying muscle mitochondria for oxidative phosphorylation and continuous ATP regeneration.",
      markScheme: [
        {
          point: "Sarcoplasmic reticulum releases Ca²⁺ ions, which bind to troponin.",
          keywords: ["sarcoplasmic reticulum", "troponin"],
        },
        {
          point: "Tropomyosin shifts/moves aside, exposing myosin-binding sites on actin filaments.",
          keywords: ["tropomyosin", "binding site", "actin"],
        },
        {
          point: "Myosin heads bind actin to form cross-bridges and perform the power stroke (releasing ADP + Pi) pulling actin inward toward the M-line / Z-lines closer.",
          keywords: ["cross-bridge", "power stroke", "z-line", "m-line"],
        },
        {
          point: "Binding of a fresh ATP molecule detaches myosin from actin, and ATP hydrolysis recocks the myosin head.",
          keywords: ["detaches", "breaks", "recock", "re-cock", "hydrolysis"],
        },
        {
          point: "Respiring muscle releases elevated CO₂, forming carbonic acid / H⁺ ions that lower blood pH.",
          keywords: ["carbonic", "co2", "co₂", "h+", "h⁺", "lower blood ph"],
        },
        {
          point: "H⁺ binding alters haemoglobin conformation, lowering O₂ affinity and shifting the dissociation curve to the right.",
          keywords: ["affinity", "right", "conformation", "allosteric"],
        },
        {
          point: "Increased O₂ unloading supplies muscle mitochondria for oxidative phosphorylation / ATP regeneration.",
          keywords: ["unloads", "mitochondria", "oxidative phosphorylation", "regeneration"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid account of sliding filament contraction or the Bohr shift.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Mentions actin/myosin sliding or higher CO₂ loosely without regulatory proteins, ATP roles, or pH-affinity chemistry.",
        },
        {
          band: "3–5",
          marks: [3, 5],
          descriptor: "Explains either the sliding filament cycle or the Bohr shift thoroughly while giving partial detail on the second process.",
        },
        {
          band: "6–7",
          marks: [6, 7],
          descriptor: "Accurately traces SR `Ca²⁺`, troponin/tropomyosin, cross-bridge power stroke, dual ATP roles (detachment + recocking), AND `CO₂ → H⁺ →` lower Hb affinity right-shift feeding mitochondrial ATP synthesis.",
        },
      ],
      commonError: "Claiming ATP hydrolysis causes detachment (binding of intact ATP causes detachment; hydrolysis recocks the head) or claiming actin/myosin filaments themselves shrink in length.",
    },

    // =============== THEME C1–C2: KREBS, CHEMIOSMOSIS, CALVIN CYCLE & SIGNALING ===============
    {
      id: "exam-p2-hl-q09",
      kind: "short",
      topicId: "c1-c2-interaction-molecules-cells",
      guideRef: "cell-respiration-photosynthesis",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Calvin cycle stoichiometry: 3 ATP + 2 NADPH per CO₂ fixed → 18 ATP + 12 NADPH per hexose (C1.3 HL)",
      question:
        "**[HL]** In the chloroplast stroma, fixing each molecule of `CO₂` through the Calvin cycle (reduction of glycerate-3-phosphate to triose phosphate plus regeneration of `RuBP`) consumes `3 ATP` and `2 NADPH` overall. Calculate the total number of **ATP** molecules required by the Calvin cycle to synthesise **one molecule of glucose** (`C₆H₁₂O₆`, requiring fixation of `6 CO₂`).",
      answer: {
        type: "number",
        value: 18,
        tolerance: 0,
        display: "18 ATP",
      },
      traps: [
        {
          spec: { type: "number", value: 9, tolerance: 0 },
          feedback: "`9 ATP` produces only ONE 3-carbon triose phosphate (`TP`, from `3 CO₂`); a 6-carbon glucose requires TWO `TP` (`6 CO₂`), consuming `18 ATP`.",
        },
        {
          spec: { type: "number", value: 12, tolerance: 0 },
          feedback: "`12` is the number of `NADPH` molecules consumed (`6 × 2`), not `ATP` (`6 × 3 = 18`).",
        },
      ],
      hints: [
        "Glucose (`C₆H₁₂O₆`) contains `6` carbon atoms, so `6` turns (`6 CO₂` fixed) are needed to net `2` three-carbon triose phosphates (`TP`).",
        "Multiply `6 CO₂` by `3 ATP` per `CO₂` (`12 ATP` in reduction of `12 GP → 12 TP` plus `6 ATP` in regenerating `6 RuBP` from `10 TP`).",
      ],
      solution: [
        "Synthesising `1` glucose (`6 C`) requires fixing `6 CO₂` (producing `12 GP → 12 TP`; `2 TP` form `1` glucose and `10 TP` regenerate `6 RuBP`).",
        "ATP consumed `= 12 ATP` (reduction) `+ 6 ATP` (RuBP regeneration) `= 18 ATP` (equivalently `6 × 3 = 18 ATP`).",
      ],
      commonError: "Reporting `9 ATP` (for one `TP` instead of one hexose glucose) or confusing `12 NADPH` with `18 ATP`.",
    },
    {
      id: "exam-p2-hl-q10",
      kind: "written",
      topicId: "c1-c2-interaction-molecules-cells",
      guideRef: "cell-respiration-photosynthesis",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Compare and contrast",
      strategy: "Section B HL (8m): Chemiosmosis similarities + mitochondrial vs chloroplast contrasts + Krebs NADH/FADH₂ + Calvin cycle stages (C1.2 & C1.3 HL)",
      marks: 8,
      question:
        "**[HL]** Compare and contrast **chemiosmosis** in mitochondria (oxidative phosphorylation) and chloroplasts (photophosphorylation), explaining how reduced coenzymes from the **Krebs cycle** power mitochondrial ATP synthesis and how light-dependent products drive the **Calvin cycle**.",
      hints: [
        "Similarities: both pass high-energy electrons along a membrane electron transport chain (ETC) to pump `H⁺` ions against their gradient into a small confined compartment, generating a proton-motive force that drives `H⁺` down its gradient through **ATP synthase** to phosphorylate `ADP + P_i → ATP`.",
        "Contrasts: membrane/compartment (cristae → intermembrane space vs thylakoid membrane → thylakoid lumen), original electron source (`NADH`/`FADH₂` from glycolysis/link/Krebs vs photolysis of `H₂O` at Photosystem II), terminal electron acceptor (`O₂` forming `H₂O` vs `NADP⁺` forming `NADPH`).",
        "Calvin cycle link: `RuBisCO` fixes `CO₂` to `RuBP` forming `GP`; light-dependent **`ATP`** and **`NADPH`** reduce `GP → TP`, and extra **`ATP`** regenerates `RuBP` from five-sixths of the `TP`.",
      ],
      modelAnswer:
        "**Similarities in chemiosmosis:** In both mitochondria and chloroplasts, high-energy electrons flow through a series of redox carriers in an internal **electron transport chain (ETC)**, releasing energy to actively pump **`H⁺` (protons)** across an impermeable membrane into a small enclosed space. The resulting electrochemical proton gradient diffuses back passively through transmembrane **ATP synthase** channels, driving rotary phosphorylation of `ADP + P_i` into **ATP**.\n\n**Contrasts in chemiosmosis:**\n- *Membrane & proton reservoir:* Mitochondria pump `H⁺` from the **matrix** across the **inner mitochondrial membrane (cristae)** into the narrow **intermembrane space**; chloroplasts pump `H⁺` from the **stroma** across the **thylakoid membrane** into the tiny **thylakoid lumen**.\n- *Electron donors & energy source:* Mitochondrial oxidative phosphorylation harvests chemical energy from **NADH** and **FADH₂** oxidised at the ETC—produced primarily during oxidative decarboxylation in the link reaction and **Krebs cycle** in the matrix. Chloroplast photophosphorylation uses light energy absorbed by **Photosystems II and I** to excite electrons replaced by **photolysis of water** (`2H₂O → 4H⁺ + 4e⁻ + O₂`).\n- *Terminal electron acceptor:* In mitochondria, **`O₂`** is the terminal electron acceptor, combining with electrons and protons to form metabolic water (`H₂O`). In non-cyclic photophosphorylation, **`NADP⁺`** is the terminal acceptor, reduced to **NADPH** in the stroma.\n\n**Driving the Calvin cycle:** In the chloroplast stroma, the enzyme **RuBisCO** catalyses carboxylation of 5-carbon **RuBP** with `CO₂`, producing two 3-carbon **glycerate-3-phosphate (GP)** molecules. Light-dependent **ATP** and **NADPH** then supply energy and reducing power to convert `GP` into **triose phosphate (TP)**. One-sixth of the `TP` exits to synthesise glucose and other organic compounds, while the remaining five-sixths are rearranged using additional light-dependent **ATP** to **regenerate RuBP**, keeping the cycle continuous.",
      markScheme: [
        {
          point: "Similarity: both use an ETC to pump H⁺ protons creating an electrochemical gradient that flows through ATP synthase to phosphorylate ADP into ATP.",
          keywords: ["atp synthase", "gradient", "etc", "electron transport chain"],
        },
        {
          point: "Location contrast: inner mitochondrial membrane/cristae pumping H⁺ into intermembrane space vs thylakoid membrane pumping H⁺ into thylakoid lumen.",
          keywords: ["intermembrane space", "thylakoid lumen", "cristae"],
        },
        {
          point: "Mitochondrial electron input: Krebs cycle (and link reaction/glycolysis) generates reduced coenzymes NADH and FADH₂ that donate electrons to the ETC.",
          keywords: ["nadh", "fadh2", "fadh₂", "matrix"],
        },
        {
          point: "Chloroplast electron input: light excites electrons in photosystems II/I and photolysis of water splits H₂O into O₂, H⁺, and replacement electrons.",
          keywords: ["photolysis", "photosystem", "water"],
        },
        {
          point: "Terminal acceptor contrast: O₂ accepts electrons in mitochondria (forming H₂O) whereas NADP⁺ accepts electrons in chloroplasts (forming NADPH).",
          keywords: ["terminal", "nadp+", "nadp⁺", "nadph"],
        },
        {
          point: "Calvin cycle fixation: RuBisCO fixes CO₂ to 5C RuBP to yield 3C glycerate-3-phosphate (GP).",
          keywords: ["rubisco", "rubp", "glycerate"],
        },
        {
          point: "Calvin cycle reduction: light-dependent ATP and NADPH reduce GP into triose phosphate (TP).",
          keywords: ["triose phosphate", "reduce", "reducing"],
        },
        {
          point: "Calvin cycle regeneration: most (5/6) TP is converted back into RuBP using further ATP while remaining TP forms hexose/organic molecules.",
          keywords: ["regenerate", "five-sixths", "hexose", "glucose"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No accurate comparison of chemiosmosis or explanation of Krebs/Calvin links.",
        },
        {
          band: "1–3",
          marks: [1, 3],
          descriptor: "States that both make ATP or names stages vaguely, with compartment/acceptor errors.",
        },
        {
          band: "4–6",
          marks: [4, 6],
          descriptor: "Accurately compares chemiosmosis compartments and electron donors/acceptors, with partial detail on Krebs-ETC or Calvin cycle molecules.",
        },
        {
          band: "7–8",
          marks: [7, 8],
          descriptor: "Comprehensive synthesis comparing chemiosmosis mechanics, exact compartments (intermembrane space vs thylakoid lumen), terminal acceptors (`O₂` vs `NADP⁺`), Krebs `NADH`/`FADH₂`, and all three Calvin stages (`RuBisCO`, `GP → TP`, `RuBP` regeneration).",
        },
      ],
      commonError: "Reversing proton pumping direction (protons accumulate INSIDE the intermembrane space and INSIDE the thylakoid lumen, then flow back to matrix/stroma through ATP synthase).",
    },
    {
      id: "exam-p2-hl-q11",
      kind: "written",
      topicId: "c1-c2-interaction-molecules-cells",
      guideRef: "chemical-signaling-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Compare and contrast",
      strategy: "GPCR hydrophilic cascade (epinephrine → G-protein → adenylyl cyclase → cAMP → kinase amplification) vs hydrophobic steroid intracellular receptor (oestradiol → gene transcription) (C2.1 HL)",
      marks: 6,
      question:
        "**[HL]** Compare and contrast signal transduction by a hydrophilic hormone acting through a **G-protein coupled receptor (GPCR)** (such as epinephrine) and a hydrophobic **steroid hormone** acting through an intracellular receptor (such as oestradiol or progesterone), referring to receptor location, signal amplification, cellular mechanism, and speed/duration of response.",
      hints: [
        "Similarity: both rely on complementary **ligand–receptor specificity**, so only target cells expressing the matching receptor respond.",
        "GPCR pathway: plasma-membrane receptor → G-protein activates **adenylyl cyclase** → synthesises **cAMP** second messenger → protein kinase **phosphorylation cascade** amplifying the signal rapidly (seconds) to activate existing enzymes (e.g. glycogen breakdown).",
        "Steroid pathway: lipid-soluble hormone diffuses directly across the **phospholipid bilayer** → binds cytosolic/nuclear **intracellular receptor** → hormone–receptor complex acts as a **transcription factor** binding DNA regulatory elements → slower onset (hours) but longer-lasting changes via new mRNA/protein synthesis.",
      ],
      modelAnswer:
        "**Similarity:** Both epinephrine and steroid hormones act as specific chemical ligands that bind reversibly only to complementary protein receptors, ensuring tissue specificity so non-target cells remain unaffected.\n\n**Receptor location & membrane crossing:** Hydrophilic epinephrine cannot diffuse through the hydrophobic fatty-acid core of the phospholipid bilayer, so it binds an extracellular binding site on a transmembrane **G-protein coupled receptor (GPCR)**. By contrast, lipid-soluble steroid hormones such as oestradiol diffuse freely across the plasma membrane (and nuclear envelope) to bind **intracellular receptors** in the cytoplasm or nucleus.\n\n**Mechanism & signal amplification:** Ligand binding to a GPCR causes a conformational change that activates an associated **G-protein** (via GTP binding), stimulating **adenylyl cyclase** to convert ATP into many molecules of the second messenger **cAMP**. cAMP activates protein kinase A, triggering an enzymatic **phosphorylation cascade** that massively **amplifies** a single hormone molecule into rapid activation of pre-existing target enzymes (such as glycogen phosphorylase in hepatocytes). Conversely, the steroid hormone–receptor complex translocates to specific DNA response elements and acts directly as a **transcription factor**, altering RNA polymerase recruitment to up- or down-regulate transcription of target genes and synthesis of new proteins.\n\n**Speed & duration:** Because GPCR cascades modify existing cytoplasmic enzymes, epinephrine produces a very **rapid** (seconds) but short-lived fight-or-flight response, whereas steroid signalling requires transcription and translation, yielding a **slower** onset (hours) with **longer-lasting** developmental or physiological effects.",
      markScheme: [
        {
          point: "Similarity: both require complementary ligand–receptor binding conferring target-cell specificity.",
          keywords: ["both", "complementary", "specificity", "specific"],
        },
        {
          point: "Contrasts solubility and receptor location: hydrophilic hormone binds transmembrane GPCR vs hydrophobic steroid diffuses across bilayer to intracellular receptor.",
          keywords: ["transmembrane", "diffuses", "bilayer", "intracellular"],
        },
        {
          point: "Outlines GPCR transduction: activated G-protein stimulates adenylyl cyclase to produce second messenger cAMP.",
          keywords: ["g-protein", "adenylyl cyclase", "camp", "second messenger"],
        },
        {
          point: "Explains enzymatic phosphorylation cascade and signal amplification activating pre-existing enzymes.",
          keywords: ["kinase", "phosphorylation", "amplif", "cascade"],
        },
        {
          point: "Explains steroid mechanism: hormone–receptor complex binds DNA as a transcription factor to alter mRNA/protein synthesis.",
          keywords: ["transcription factor", "dna", "mrna", "gene"],
        },
        {
          point: "Contrasts kinetics: GPCR gives rapid, short-lived response vs steroid giving slower-onset, longer-lasting response.",
          keywords: ["rapid", "short-lived", "slower", "longer-lasting"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid comparison of GPCR and intracellular steroid signalling.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Distinguishes membrane vs inside-cell receptors without detailing cAMP cascades, transcription factors, or speed/amplification.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Describes both pathways clearly with minor omissions in adenylyl cyclase/kinase amplification or response kinetics.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Thoroughly integrates shared specificity, bilayer permeability, G-protein/adenylyl cyclase/cAMP kinase amplification, steroid transcription-factor action, and speed/duration contrast.",
        },
      ],
      commonError: "Stating that epinephrine enters the cell to activate adenylyl cyclase — epinephrine never crosses the plasma membrane; it acts as the first messenger while cAMP is the intracellular second messenger.",
    },

    // =============== THEME C3–C4: ENERGY TRANSFER & INTEGRATION ===============
    {
      id: "exam-p2-hl-q12",
      kind: "short",
      topicId: "c3-c4-interaction-organisms-ecosystems",
      guideRef: "transfers-energy-matter",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Trophic transfer efficiency (%) = (higher trophic productivity / lower trophic productivity) × 100",
      question:
        "In a temperate Pacific kelp forest, kelp primary producers fix `18 000 kJ m⁻² yr⁻¹` of net primary productivity. Grazing sea urchins assimilate `2700 kJ m⁻² yr⁻¹` as secondary productivity, and keystone sea otters assimilate `216 kJ m⁻² yr⁻¹`. Calculate the **percentage energy transfer efficiency** from sea urchins to sea otters.",
      answer: {
        type: "number",
        value: 8,
        tolerance: 0.1,
        display: "8%",
      },
      traps: [
        {
          spec: { type: "number", value: 1.2, tolerance: 0.1 },
          feedback: "`1.2%` (`216 / 18 000`) is the efficiency from KELP to sea otters across two steps — divide sea otter productivity (`216`) by sea urchin productivity (`2700`).",
        },
        {
          spec: { type: "number", value: 15, tolerance: 0.1 },
          feedback: "`15%` (`2700 / 18 000`) is the transfer from kelp to sea urchins, not from sea urchins to sea otters.",
        },
      ],
      hints: [
        "Select the two adjacent trophic levels requested: sea urchins (`2700`) → sea otters (`216`).",
        "Compute `(216 ÷ 2700) × 100`.",
      ],
      solution: [
        "Transfer efficiency `=` {{216/2700}} `× 100 = 8.0%` (`8%`).",
      ],
      commonError: "Dividing sea otter energy by producer energy (`18 000`) instead of the immediately preceding sea urchin trophic level (`2700`).",
    },

    // =============== THEME D1–D2: WATER POTENTIAL, OKAZAKI 5'→3' & EPIGENETICS ===============
    {
      id: "exam-p2-hl-q13",
      kind: "short",
      topicId: "d1-d2-continuity-molecules-cells",
      guideRef: "water-potential-osmosis",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "At osmotic equilibrium Ψ_cell = Ψ_bath = Ψ_s + Ψ_p → solve for Ψ_p (D2.3 HL)",
      question:
        "**[HL]** A flaccid plant leaf mesophyll cell (`Ψ_p = 0 kPa`) with an internal solute potential `Ψ_s = −850 kPa` is submerged in a dilute solution of water potential `Ψ = −250 kPa`. Assuming `Ψ_s` inside the cell remains effectively unchanged at `−850 kPa`, calculate the turgor **pressure potential (`Ψ_p`)** of the cell in `kPa` once it reaches osmotic equilibrium.",
      answer: {
        type: "number",
        value: 600,
        tolerance: 1,
        display: "600 kPa",
      },
      traps: [
        {
          spec: { type: "number", value: -600, tolerance: 1 },
          feedback: "Turgor pressure potential (`Ψ_p`) exerted by a plant cell wall against water influx is POSITIVE (`+600 kPa`), not negative.",
        },
        {
          spec: { type: "number", value: 1100, tolerance: 1 },
          feedback: "Solve `−250 = −850 + Ψ_p`: adding `850` to both sides gives `Ψ_p = 850 − 250 = +600 kPa`, not `850 + 250`.",
        },
      ],
      hints: [
        "At osmotic equilibrium, net water movement stops because `Ψ_cell = Ψ_solution = −250 kPa`.",
        "Substitute into `Ψ_cell = Ψ_s + Ψ_p`: `−250 = −850 + Ψ_p`, then solve for `Ψ_p`.",
      ],
      solution: [
        "At equilibrium, `Ψ_cell = Ψ_solution = −250 kPa`.",
        "`Ψ_p = Ψ_cell − Ψ_s = −250 − (−850) = +600 kPa`.",
      ],
      commonError: "Giving a negative value for turgor pressure potential `Ψ_p` or adding magnitudes (`850 + 250 = 1100`).",
    },
    {
      id: "exam-p2-hl-q14",
      kind: "written",
      topicId: "d1-d2-continuity-molecules-cells",
      guideRef: "dna-replication-protein-synthesis",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      strategy: "5'→3' DNA Pol III directionality + leading vs lagging Okazaki enzymes + epigenetic methylation/acetylation in MZ twins (D1.1 & D2.2 HL)",
      marks: 7,
      question:
        "**[HL]** Explain why DNA replication proceeds continuously on the leading strand but discontinuously as **Okazaki fragments** on the lagging strand (naming the key enzymes and strand polarity), and explain how **epigenetic modifications** can generate distinct phenotypes in genetically identical monozygotic twins.",
      hints: [
        "State why DNA polymerase III can ONLY add deoxyribonucleotides to a free **`3'-OH`** end (extending exclusively `5' → 3'`), and explain how antiparallel strands force the lagging strand to be synthesised away from the replication fork.",
        "Name ALL five core HL replication enzymes in sequence: **helicase**, **DNA primase** (RNA primers), **DNA polymerase III**, **DNA polymerase I** (replaces RNA primers with DNA), and **DNA ligase** (seals phosphodiester nicks).",
        "For epigenetics in monozygotic twins: same DNA sequence, different environmental exposures (diet, stress, toxins) alter **DNA methylation** (silences promoters) and **histone acetylation** (loosens euchromatin to activate transcription) without mutating base sequences.",
      ],
      modelAnswer:
        "**Leading vs lagging strand replication:** After **DNA helicase** unwinds the double helix by breaking hydrogen bonds (with gyrase/topoisomerase relieving supercoiling and single-strand binding proteins keeping strands apart), **DNA polymerase III** can only catalyse phosphodiester bond formation by adding deoxynucleoside triphosphates to a free `3'-OH` end, meaning all new DNA is synthesised strictly in the **`5' → 3'`** direction. Because the two parental template strands are **antiparallel**, the **leading strand** is synthesised continuously toward the advancing replication fork from a single RNA primer laid down by **DNA primase**. On the opposite **lagging strand**, DNA polymerase III must move *away* from the opening replication fork, requiring **primase** to lay down repeated short **RNA primers** so DNA polymerase III synthesises short discontinuous **`5' → 3'` Okazaki fragments**. **DNA polymerase I** then removes the RNA primers and replaces them with DNA nucleotides, and **DNA ligase** seals the remaining sugar–phosphate backbone nicks with covalent phosphodiester bonds.\n\n**Epigenetic divergence in monozygotic twins:** Monozygotic twins begin life with identical DNA base sequences, yet differing lifetime environments (nutrition, stress, smoking, infections) modify heritable **epigenetic tags** on chromatin without changing the nucleotide sequence. Adding methyl groups to cytosine bases in gene promoters (**DNA methylation**) recruits chromatin-condensing factors and represses transcription, whereas adding acetyl groups to positively charged lysine residues on **histone tails (histone acetylation)** weakens DNA–histone attraction, loosening chromatin into accessible euchromatin and enhancing transcription. Over decades, divergent epigenomes alter gene-expression profiles between twins, causing differing disease susceptibilities or physical traits.",
      markScheme: [
        {
          point: "Helicase unwinds DNA/breaks H-bonds, and DNA polymerase III adds nucleotides only to the 3'-OH end (strictly 5' → 3' synthesis).",
          keywords: ["helicase", "5' -> 3'", "5' → 3'", "3'-oh", "5' to 3'"],
        },
        {
          point: "Antiparallel template strands allow continuous leading-strand synthesis toward the fork vs discontinuous lagging-strand synthesis away from the fork.",
          keywords: ["antiparallel", "toward", "away from"],
        },
        {
          point: "RNA primase lays down repeated RNA primers on the lagging strand for DNA polymerase III to extend Okazaki fragments.",
          keywords: ["primase", "rna primer", "dna polymerase iii"],
        },
        {
          point: "DNA polymerase I replaces RNA primers with DNA nucleotides, and DNA ligase joins fragments via phosphodiester bonds.",
          keywords: ["dna polymerase i", "ligase", "phosphodiester"],
        },
        {
          point: "Epigenetic changes alter gene expression in response to environmental factors without changing the underlying DNA base sequence.",
          keywords: ["without changing", "environmental", "gene expression", "base sequence"],
        },
        {
          point: "DNA methylation of promoter regions silences/reduces transcription.",
          keywords: ["methylation", "silenc", "repress"],
        },
        {
          point: "Histone tail acetylation neutralises positive charges / loosens chromatin (euchromatin), increasing transcription.",
          keywords: ["acetylation", "histone", "loosens", "euchromatin"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid molecular explanation of DNA replication or epigenetics.",
        },
        {
          band: "1–3",
          marks: [1, 3],
          descriptor: "Names enzymes or mentions twin environments without linking `5' → 3'` polarity, Pol I/ligase roles, or methylation/acetylation mechanisms.",
        },
        {
          band: "4–5",
          marks: [4, 5],
          descriptor: "Explains lagging-strand Okazaki synthesis accurately OR epigenetic chromatin regulation clearly, with partial detail on the other topic.",
        },
        {
          band: "6–7",
          marks: [6, 7],
          descriptor: "Accurately integrates antiparallel `5' → 3'` polarity, all five enzymes (helicase, primase, Pol III, Pol I, ligase), and environmental DNA methylation vs histone acetylation in identical twins.",
        },
      ],
      commonError: "Confusing DNA polymerase III (main `5'→3'` synthesising enzyme) with DNA polymerase I (primer replacement), or stating that epigenetic tags mutate the DNA nucleotide sequence.",
    },

    // =============== THEME D3–D4: NEPHRON/ADH, LINKED χ², HARDY–WEINBERG ===============
    {
      id: "exam-p2-hl-q15",
      kind: "written",
      topicId: "d3-d4-continuity-organisms-ecosystems",
      guideRef: "reproduction-homeostasis",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      strategy: "Glomerular ultrafiltration → PCT selective reabsorption → Loop of Henle countercurrent medulla gradient → ADH collecting-duct aquaporins (D3.3 HL)",
      marks: 7,
      question:
        "**[HL]** Explain how the mammalian kidney nephron produces hypertonic (concentrated) urine during dehydration, tracing **ultrafiltration**, **selective reabsorption**, the **Loop of Henle**, and the hormonal action of **ADH** on the collecting duct.",
      hints: [
        "Ultrafiltration: wider afferent arteriole vs narrower efferent arteriole creates high hydrostatic pressure in the glomerulus forcing water, glucose, ions, and urea through fenestrated endothelium, **basement membrane** (blocks large plasma proteins/RBCs), and podocyte slits into Bowman's capsule.",
        "PCT selective reabsorption: microvilli + abundant mitochondria drive active transport (`Na⁺/glucose` cotransport) of `100%` of glucose and amino acids plus osmotic water reabsorption.",
        "Loop of Henle countercurrent multiplier: ascending limb actively pumps `Na⁺/Cl⁻` out (impermeable to water) creating a **hypertonic medulla**; descending limb loses water passively.",
        "ADH osmoregulation: hypothalamus osmoreceptors detect elevated blood osmolarity → posterior pituitary secretes **ADH** → stimulates fusion of vesicles carrying **aquaporins** into collecting-duct cell membranes → water reabsorbed by osmosis into hypertonic medulla.",
      ],
      modelAnswer:
        "**1. Ultrafiltration:** A wider afferent arteriole entering the glomerulus and narrower efferent arteriole leaving it generate high hydrostatic blood pressure. This forces water, urea, glucose, amino acids, and mineral ions across capillary fenestrations, the negatively charged **basement membrane** (the primary filtration barrier retaining large plasma proteins and blood cells), and filtration slits between **podocytes** into Bowman's capsule as glomerular filtrate.\n\n**2. Selective reabsorption (PCT):** Epithelial cells of the proximal convoluted tubule possess dense **microvilli** (high surface area) and numerous mitochondria to power active transport and sodium–glucose cotransport, reabsorbing `100%` of glucose and amino acids and most `Na⁺` back into peritubular capillaries, with water following passively by osmosis.\n\n**3. Loop of Henle (countercurrent multiplier):** The thick **ascending limb** is impermeable to water and actively pumps `Na⁺` and `Cl⁻` ions out into the surrounding tissue fluid, establishing a steep osmotic gradient (highly **hypertonic medulla**). As filtrate descends the water-permeable **descending limb**, water exits passively by osmosis into the salty medulla, concentrating the filtrate.\n\n**4. ADH and the collecting duct:** During dehydration, rising blood solute concentration is detected by **osmoreceptors** in the **hypothalamus**, prompting the **posterior pituitary** gland to secrete **antidiuretic hormone (ADH)**. ADH binds collecting-duct epithelial receptors, triggering insertion of water-channel proteins (**aquaporins**) into the luminal plasma membrane. Water flows rapidly out of the collecting duct by osmosis down the medullary gradient back into the vasa recta blood vessels, returning blood osmolarity to normal and excreting a small volume of concentrated, hypertonic urine.",
      markScheme: [
        {
          point: "Ultrafiltration: high hydrostatic pressure (wider afferent vs narrower efferent arteriole) forces small solutes/water into Bowman's capsule.",
          keywords: ["hydrostatic", "afferent", "efferent", "bowman"],
        },
        {
          point: "Basement membrane (and fenestrations/podocytes) prevents large plasma proteins and red blood cells from entering filtrate.",
          keywords: ["basement membrane", "podocyte", "plasma protein"],
        },
        {
          point: "PCT selectively reabsorbs all glucose/amino acids via active transport/cotransport (microvilli & mitochondria) with osmotic water uptake.",
          keywords: ["proximal", "microvilli", "100%", "glucose", "cotransport"],
        },
        {
          point: "Ascending limb of Loop of Henle is water-impermeable and actively pumps Na⁺/Cl⁻ out, generating a hypertonic medulla.",
          keywords: ["ascending", "impermeable", "hypertonic medulla", "medulla"],
        },
        {
          point: "Descending limb is permeable to water, losing water by osmosis into the hypertonic medulla.",
          keywords: ["descending", "permeable to water", "exits passively", "loses water"],
        },
        {
          point: "Hypothalamus osmoreceptors detect high blood osmolarity and trigger ADH secretion from the posterior pituitary.",
          keywords: ["osmoreceptor", "hypothalamus", "posterior pituitary"],
        },
        {
          point: "ADH inserts aquaporins into collecting-duct membranes, increasing water reabsorption by osmosis into blood and yielding small volume of concentrated urine.",
          keywords: ["aquaporin", "reabsorb", "small volume", "vasa recta"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No accurate nephron or ADH osmoregulation mechanism.",
        },
        {
          band: "1–3",
          marks: [1, 3],
          descriptor: "Names nephron parts superficially without explaining basement-membrane filtration, ascending vs descending Loop limbs, or aquaporins.",
        },
        {
          band: "4–5",
          marks: [4, 5],
          descriptor: "Covers ultrafiltration, PCT reabsorption, and ADH well, with partial accuracy on the Loop of Henle countercurrent gradient.",
        },
        {
          band: "6–7",
          marks: [6, 7],
          descriptor: "Complete, accurate physiological sequence from afferent/efferent pressure and basement membrane through PCT active transport, ascending/descending Loop of Henle hypertonic medulla, hypothalamus/posterior pituitary ADH, and collecting-duct aquaporins.",
        },
      ],
      commonError: "Swapping the ascending and descending limbs of the Loop of Henle (descending = water out passively; ascending = `Na⁺/Cl⁻` pumped out, impermeable to water) or writing that the anterior pituitary secretes ADH (it is the posterior pituitary).",
    },
    {
      id: "exam-p2-hl-q16",
      kind: "short",
      topicId: "d3-d4-continuity-organisms-ecosystems",
      guideRef: "inheritance-linked-chi",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Recombination frequency (%) = (sum of recombinant phenotypes / total offspring) × 100 (D3.2 HL)",
      diagram: SVG_LINKED_CROSS_Q16,
      question:
        "**[HL]** In *Drosophila melanogaster*, grey body (`B`) is dominant to black body (`b`) and normal wings (`V`) is dominant to vestigial wings (`v`). A dihybrid test cross (`BbVv × bbvv`, `n = 1000`) yielded the progeny counts shown in the diagram above (`415` grey/normal, `425` black/vestigial, `78` grey/vestigial, `82` black/normal).\n\nCalculate the **percentage recombination frequency** between the body-colour and wing-length loci.",
      answer: {
        type: "number",
        value: 16,
        tolerance: 0.1,
        display: "16%",
      },
      traps: [
        {
          spec: { type: "number", value: 84, tolerance: 0.1 },
          feedback: "`84%` (`840 / 1000`) is the PARENTAL phenotype percentage — recombinants are the two rare crossover classes (`78 + 82 = 160`).",
        },
        {
          spec: { type: "number", value: 7.8, tolerance: 0.1 },
          feedback: "Sum BOTH recombinant classes (`78 + 82 = 160`) before dividing by `1000`.",
        },
      ],
      hints: [
        "Identify the two much smaller recombinant phenotype classes formed by crossing over (`78` and `82`).",
        "Add `78 + 82`, divide by the total offspring (`1000`), and multiply by `100`.",
      ],
      solution: [
        "Total recombinant offspring `= 78 + 82 = 160`.",
        "Recombination frequency `=` {{160/1000}} `× 100 = 16%` (corresponding to `16` map units / centimorgans apart).",
      ],
      commonError: "Calculating the parental proportion (`84%`) or using only one of the two recombinant classes.",
    },
    {
      id: "exam-p2-hl-q17",
      kind: "short",
      topicId: "d3-d4-continuity-organisms-ecosystems",
      guideRef: "inheritance-linked-chi",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      strategy: "Goodness-of-fit χ² = Σ (O − E)² / E against unlinked 1:1:1:1 test-cross expectation (D3.2 HL)",
      question:
        "**[HL]** In a separate dihybrid test cross of `400` fruit flies testing the null hypothesis (`H₀`) that two genes assort independently in a `1 : 1 : 1 : 1` phenotypic ratio (`E = 100` per class), the observed offspring counts are `160`, `140`, `50`, and `50`.\n\nCalculate the chi-squared (`χ²`) goodness-of-fit test statistic (exact whole number).",
      answer: {
        type: "number",
        value: 102,
        tolerance: 0.1,
        display: "102",
      },
      traps: [
        {
          spec: { type: "number", value: 0, tolerance: 0.1 },
          feedback: "Remember to SQUARE each `(O − E)` term (`+60`, `+40`, `−50`, `−50`) before dividing by `100`.",
        },
        {
          spec: { type: "number", value: 2, tolerance: 0.1 },
          feedback: "Compute `(O − E)² / E` for EACH of the four phenotypes and sum: `36 + 16 + 25 + 25 = 102`.",
        },
      ],
      hints: [
        "For `n = 400` under a `1 : 1 : 1 : 1` ratio, the expected count in every class is `E = 400 ÷ 4 = 100`.",
        "Calculate `(160−100)²/100 + (140−100)²/100 + (50−100)²/100 + (50−100)²/100`.",
      ],
      solution: [
        "Expected count per class under `1 : 1 : 1 : 1`: `E = 400 / 4 = 100`.",
        "`χ² =` {{60^2/100}} `+` {{40^2/100}} `+` {{(-50)^2/100}} `+` {{(-50)^2/100}} `= 36 + 16 + 25 + 25 = 102`.",
        "Note: With `df = 4 − 1 = 3` and `χ²_crit = 7.815` (`α = 0.05`), `102 > 7.815`, decisively rejecting independent assortment and confirming autosomal linkage.",
      ],
      commonError: "Using `9 : 3 : 3 : 1` expected ratios for a test cross (`AaBb × aabb` expects `1 : 1 : 1 : 1`, whereas `AaBb × AaBb` expects `9 : 3 : 3 : 1`).",
    },
    {
      id: "exam-p2-hl-q18",
      kind: "short",
      topicId: "d3-d4-continuity-organisms-ecosystems",
      guideRef: "natural-selection-hardy-weinberg",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "q² = recessive count / N → q = √(q²) → p = 1 − q → heterozygotes = 2pq × N (D4.1 HL)",
      question:
        "**[HL]** In an isolated island population of `2500` seabirds in Hardy–Weinberg equilibrium, `400` birds exhibit an autosomal recessive dark-plumage phenotype (`dd`). Calculate the expected number of **heterozygous (`Dd`)** birds in this population.",
      answer: {
        type: "number",
        value: 1200,
        tolerance: 1,
        display: "1200 individuals",
      },
      traps: [
        {
          spec: { type: "number", value: 600, tolerance: 1 },
          feedback: "Remember the factor of `2` in `2pq` (`2 × 0.6 × 0.4 = 0.48`, giving `0.48 × 2500 = 1200`, not `600`).",
        },
        {
          spec: { type: "number", value: 900, tolerance: 1 },
          feedback: "`900` (`p² × 2500 = 0.36 × 2500`) is the number of homozygous dominant (`DD`) birds, not heterozygotes (`Dd`).",
        },
        {
          spec: { type: "number", value: 0.48, tolerance: 0.01 },
          feedback: "`0.48` is the frequency `2pq` — multiply by total population size (`2500`) to obtain the expected NUMBER of birds.",
        },
      ],
      hints: [
        "Calculate the homozygous recessive frequency `q² = 400 ÷ 2500 = 0.16`, then take `q = √0.16`.",
        "Find `p = 1 − q`, compute heterozygote frequency `2pq`, and multiply by `2500` birds.",
      ],
      solution: [
        "`q² =` {{400/2500}} `= 0.16`, so `q =` {{sqrt(0.16)}} `= 0.40` and `p = 1 − 0.40 = 0.60`.",
        "Heterozygote frequency `2pq = 2 × 0.60 × 0.40 = 0.48`.",
        "Expected heterozygotes `= 0.48 × 2500 = 1200` individuals.",
      ],
      commonError: "Omitting the factor of `2` in `2pq` or giving the decimal frequency (`0.48`) instead of multiplying by population size (`2500`).",
    },
    {
      id: "exam-p2-hl-q19",
      kind: "written",
      topicId: "d3-d4-continuity-organisms-ecosystems",
      guideRef: "natural-selection-hardy-weinberg",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      strategy: "Identify all 3 selection modes (A=stabilizing, B=directional, C=disruptive) with biological examples + evaluate 2+ violated Hardy–Weinberg assumptions (D4.1 HL)",
      diagram: SVG_SELECTION_MODES_Q19,
      marks: 6,
      question:
        "**[HL]** Using the three phenotype distribution curves above (Modes A, B, and C), identify and distinguish **stabilizing**, **directional**, and **disruptive** selection with a named biological example of each, and explain why wild populations rarely satisfy **Hardy–Weinberg equilibrium** (discussing at least two specific assumptions).",
      hints: [
        "Match each panel: Mode A narrows around the mean (**stabilizing**), Mode B shifts the mean toward one extreme (**directional**), and Mode C selects against intermediates to create two bimodal peaks (**disruptive**).",
        "Give a crisp example for each: e.g. human birth weight / clutch size (stabilizing), peppered moths / bacterial antibiotic resistance (directional), African seedcracker beak sizes / salmon body sizes (disruptive).",
        "List and evaluate two concrete Hardy–Weinberg assumptions violated in nature (no natural selection, infinitely large population / no genetic drift, random mating, no migration/gene flow, no mutation).",
      ],
      modelAnswer:
        "**Three modes of selection:**\n- **Mode A — Stabilizing selection:** Favours intermediate phenotypes and selects against both extremes, narrowing variance around an unchanged mean (e.g. human birth weight, where very low birth weight increases neonatal mortality and very high weight causes obstetric complications).\n- **Mode B — Directional selection:** Favours one extreme phenotype when environmental conditions change, shifting the population mean toward that extreme (e.g. dark melanic peppered moths *Biston betularia* increasing in soot-darkened industrial woodlands, or evolving antibiotic resistance in bacteria).\n- **Mode C — Disruptive (diversifying) selection:** Selects against intermediate phenotypes and favours both opposite extremes simultaneously, creating a bimodal distribution that can drive sympatric speciation (e.g. African black-bellied seedcrackers having either large bills for hard sedge seeds or small bills for soft seeds, with intermediate bills inefficient at both).\n\n**Why wild populations violate Hardy–Weinberg equilibrium:** Hardy–Weinberg equilibrium requires five idealised conditions (no natural selection, no mutation, no gene flow/migration, infinitely large population size without genetic drift, and strictly random mating). In real wild populations, **natural selection** continuously changes allele frequencies whenever phenotypes differ in survival or fertility, and **non-random mating** (such as sexual selection, territoriality, or mate choice by plumage/song) alters genotype proportions. Additionally, finite or fragmented populations experience random **genetic drift** (such as bottlenecks or founder effects), and ongoing **migration (gene flow)** or spontaneous **mutations** continually introduce or remove alleles, preventing static equilibrium.",
      markScheme: [
        {
          point: "Identifies Mode A as stabilizing selection (favours intermediate, narrows variance) with a valid example (e.g. human birth weight / bird clutch size).",
          keywords: ["mode a", "intermediate", "birth weight", "clutch", "narrows"],
        },
        {
          point: "Identifies Mode B as directional selection (favours one extreme, shifts mean) with a valid example (e.g. peppered moth, antibiotic resistance, drought finch beaks).",
          keywords: ["mode b", "shifts", "peppered moth", "antibiotic", "one extreme"],
        },
        {
          point: "Identifies Mode C as disruptive selection (favours both extremes over intermediate, bimodal) with a valid example (e.g. seedcracker beaks, coho salmon, limpets).",
          keywords: ["mode c", "bimodal", "both", "seedcracker", "salmon"],
        },
        {
          point: "Names and explains violation of one Hardy–Weinberg assumption (e.g. natural selection / differential reproductive success shifts allele frequencies).",
          keywords: ["differential", "survival", "allele frequenc", "selection"],
        },
        {
          point: "Names and explains a second violated assumption (e.g. non-random mating/sexual selection OR small population/genetic drift).",
          keywords: ["non-random", "sexual selection", "genetic drift", "founder", "bottleneck"],
        },
        {
          point: "Notes a third assumption (migration/gene flow or ongoing mutation) or evaluates that Hardy–Weinberg serves as a null baseline to detect evolution.",
          keywords: ["migration", "gene flow", "mutation", "baseline", "null"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid identification of selection modes or Hardy–Weinberg assumptions.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Matches curve names without biological examples or merely lists Hardy–Weinberg assumptions without explaining why wild populations break them.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately distinguishes all three modes with examples OR thoroughly evaluates violated Hardy–Weinberg assumptions.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Correctly matches Modes A/B/C with crisp biological examples and critically explains multiple real-world violations of Hardy–Weinberg assumptions.",
        },
      ],
      commonError: "Swapping stabilizing and disruptive selection, or claiming Hardy–Weinberg assumes 'no evolution' as an independent condition rather than naming the five concrete mechanisms (selection, drift, mutation, migration, non-random mating).",
    },
    {
      id: "exam-p2-hl-q20",
      kind: "written",
      topicId: "c3-c4-interaction-organisms-ecosystems",
      guideRef: "integration-body-systems",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      strategy: "Postsynaptic EPSP/IPSP spatial & temporal summation + medullary chemoreceptor negative feedback vs ethylene/oxytocin positive feedback (C2.2 & C3.1 HL)",
      marks: 6,
      question:
        "**[HL]** Explain how **excitatory (EPSPs)** and **inhibitory (IPSPs)** postsynaptic potentials integrate synaptic decisions via **spatial and temporal summation**, and contrast **negative feedback** in medullary chemoreceptor regulation of ventilation with **positive feedback** in ethylene-mediated fruit ripening.",
      hints: [
        "Explain what EPSPs do (`Na⁺` influx depolarizing toward `−55 mV` threshold) versus IPSPs (`Cl⁻` influx or `K⁺` efflux hyperpolarizing away from threshold).",
        "Distinguish **spatial summation** (simultaneous inputs from multiple presynaptic terminals) from **temporal summation** (rapid successive impulses from a single presynaptic neuron).",
        "Contrast negative feedback (rising blood `CO₂` / low pH detected by medulla chemoreceptors → faster ventilation expels `CO₂` → returns pH to set point) with positive feedback (ripening fruit releases gaseous **ethylene** → activates ripening genes and MORE ethylene synthesis → rapid synchronised ripening).",
      ],
      modelAnswer:
        "**Synaptic integration (EPSPs, IPSPs & summation):** Excitatory neurotransmitters (such as acetylcholine or glutamate) open postsynaptic `Na⁺` channels, causing local depolarization (**EPSP**) that brings the axon hillock closer to the `−55 mV` threshold; inhibitory neurotransmitters (such as GABA) open `Cl⁻` or `K⁺` channels, causing **hyperpolarization (IPSP)** that moves membrane potential further below threshold. Because a single EPSP is usually too small to trigger an action potential, neurons integrate inputs through **spatial summation** (adding simultaneous EPSPs and IPSPs arriving from multiple different presynaptic neurons) and **temporal summation** (adding rapid successive EPSPs arriving from one presynaptic neuron before previous depolarizations decay). An action potential fires along the postsynaptic axon only if the net summed potential at the axon hillock reaches or exceeds threshold (`−55 mV`).\n\n**Negative vs positive feedback:** In **negative feedback**, medullary chemoreceptors detect rising blood `CO₂` (which lowers plasma pH via carbonic acid) during exercise and send impulses to the diaphragm and intercostal muscles to increase ventilation rate and depth; expelling excess `CO₂` raises blood pH back toward its homeostatic set point, dampening the stimulus. By contrast, in **positive feedback** during climacteric fruit ripening (e.g. bananas or apples), initial production of the gaseous plant hormone **ethylene** stimulates enzymes that soften cell walls, convert starch to sugars, and up-regulate further ethylene synthesis—amplifying the signal rapidly across the fruit and neighbouring fruit until ripening completes.",
      markScheme: [
        {
          point: "Explains EPSP (Na⁺ influx causing depolarization toward threshold) vs IPSP (Cl⁻ influx or K⁺ efflux causing hyperpolarization away from threshold).",
          keywords: ["hyperpolariz", "hyperpolaris", "depolariz", "depolaris", "cl-", "cl⁻"],
        },
        {
          point: "Distinguishes spatial summation (multiple presynaptic neurons firing simultaneously) from temporal summation (one presynaptic neuron firing rapidly in succession).",
          keywords: ["multiple", "simultaneous", "successive", "rapid"],
        },
        {
          point: "Action potential initiates only if net summed potential at the axon hillock reaches threshold (≈ −55 mV).",
          keywords: ["threshold", "-55", "−55", "axon hillock"],
        },
        {
          point: "Negative feedback in ventilation: chemoreceptors detect high CO₂ / low pH, increasing breathing rate/depth to expel CO₂ and restore pH.",
          keywords: ["chemoreceptor", "co2", "co₂", "set point", "expel"],
        },
        {
          point: "Positive feedback in fruit ripening: gaseous ethylene stimulates ripening enzymes AND further ethylene synthesis.",
          keywords: ["gaseous", "starch", "further ethylene", "more ethylene"],
        },
        {
          point: "Explicitly contrasts outcome: negative feedback opposes deviation to maintain stability, whereas positive feedback amplifies the initial change to rapid completion.",
          keywords: ["oppose", "amplif", "stability", "completion"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid explanation of postsynaptic summation or feedback contrast.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Defines EPSP/IPSP or positive/negative feedback superficially without ion flows, spatial vs temporal distinction, or physiological mechanisms.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explains synaptic summation accurately OR contrasts medullary ventilation and ethylene ripening well, with minor omissions in the other half.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Thoroughly integrates EPSP/IPSP ion currents, spatial vs temporal summation to `−55 mV` threshold, medullary `CO₂`/pH negative feedback, and self-amplifying ethylene positive feedback.",
        },
      ],
      commonError: "Swapping spatial summation (multiple synapses at once) and temporal summation (one synapse firing repeatedly over time), or assuming positive feedback is always harmful.",
    },
  ],
};
