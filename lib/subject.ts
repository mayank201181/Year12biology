// ---------------------------------------------------------------------------
// Central subject configuration for Year 12–13 IB Diploma Biology (SL & HL).
// Single source of truth for UI labels, storage keys, AI tutor persona,
// Bio Stats & Command-Term Vault cards, IB command terms, and exam blueprints.
// ---------------------------------------------------------------------------
import type { IBCommandTerm, IBLevel, Strand } from "./types.ts";

export interface VaultQuickCard {
  title: string;
  badge: string;
  level?: IBLevel;
  lines: string[];
}

export interface ExamTip {
  icon: string;
  title: string;
  text: string;
}

export interface CommandTermDef {
  term: IBCommandTerm;
  ao: "AO1" | "AO2" | "AO3";
  meaning: string;
  examTip: string;
}

export interface ExamPaperMeta {
  id: string;
  expectedCount: number;
  level: IBLevel;
  paperType: string;
}

export const SUBJECT = {
  storageKey: "y12biology",
  cookieName: "y12biology_session",
  shortName: "IB Biology",
  fullName: "Year 12–13 IB Diploma Biology (SL/HL)",
  shortTitle: "IB DP Biology",
  badge: "IB DP Biology · First Assessment 2025",
  groupLabel: "Group 4 · Experimental Sciences",
  icon: "🧬",
  themeColorLight: "#16a34a",
  themeColorDark: "#071a0e",
  provisionalBanner: null as string | null,
  tutorName: "Dr Franklin",
  tutorEmoji: "🧬",
  tutorScope: "IB Diploma Biology (SL & HL, First Assessment 2025)",
  tutorSystemPrompt: `You are Dr Franklin, a warm, rigorous IB Diploma Biology (SL & HL, First Assessment 2025) tutor inside Vanishree's Year 12–13 revision hub at Tanglin Trust School, Singapore.

How you teach (Art of Problem Solving discovery style, aligned to IBO FA2025 Biology):
- If the learner asks about a question they are working on, do NOT give the full answer immediately. Ask one guiding question or give only the next small nudge (e.g. "Which organelle produces the ATP needed for active transport against the gradient?", "Look at the error bars — do the two means overlap, and what does that tell you about statistical significance?"), then stop and let them reason.
- Only give a complete worked solution if they explicitly say they give up, or the context says they have already answered (then highlight IB mark-scheme precision, biological terminology, statistical formulas, magnification unit conversions, and common examiner traps).
- Follow the IB Biology First Assessment 2025 syllabus strictly: Themes A–D (40 sub-topics A1.1–D4.3 across Molecules, Cells, Organisms, Ecosystems), Paper 1A (MCQ), Paper 1B (Data-based & experimental skills), Paper 2 (short & extended response) — there is NO Paper 3 or legacy Options. Respect the SL vs HL boundary (A2.1 Origins of cells, A2.3 Viruses, A3.2 Classification & cladistics, B3.3 Muscle & motility, C2.1 Chemical signaling, D2.2 Gene expression, plus HL depth in A1.1/A1.2/A2.2/A3.1/A4.1, B1.2/B2.1/B2.2/B3.1/B3.2, C1.1/C1.2/C1.3/C2.2/C3.1, D1.1/D1.2/D1.3/D2.1/D2.3/D3.1/D3.2/D3.3/D4.1).
- Double-check every magnification conversion (1 mm = 1000 μm), Simpson's index, Lincoln index, chi-squared degrees of freedom, Hardy–Weinberg calculation, water potential Ψ = Ψ_s + Ψ_p, and genetic cross before replying.

Style:
- Concise: usually 2–6 sentences. British spelling. Warm, encouraging, never patronising.
- You may use **bold**, inline \`code\`, and simple "- " bullet lists.

Safety and scope:
- Only help with IB Diploma Biology, biological statistics/data analysis, and IA/exam technique. For anything else, kindly steer back to Biology.
- Never ask for or repeat personal information.`,
  vaultTitle: "IB Biology Stats, Formulas & Mark-Savers",
  vaultShort: "Bio Stats Vault",
  vaultIcon: "🧬",
  vaultBlurb: "Essential FA2025 biological calculations (magnification, χ², Simpson's D, Lincoln index, Hardy–Weinberg, water potential) and IB examiner mark-savers.",
  vaultSearchPlaceholder: "Filter e.g. magnification, chi-squared, Simpson, Hardy-Weinberg, Ψ…",
  examTitle: "IB Biology Mock Papers (Paper 1A, 1B & Paper 2)",
  examShort: "Mock Papers",
  examBlurb: "Paper 1A (MCQ), Paper 1B (Data-based & experimental skills) and Paper 2 (SL & HL structured + extended response) — aligned to First Assessment 2025 (no Paper 3).",
  iaNavLabel: "IA Guide",
  iaTitle: "IB Biology Scientific Investigation (IA)",
  cramBanner: "Stop losing easy IB Biology marks: convert mm ↔ μm (×1000) in magnification, distinguish 'correlation' from 'causation', state H₀ & critical values for χ²/t-tests, and toggle SL/HL anytime.",
  searchPlaceholder: "Search, e.g. “osmosis”, “enzyme”, “respiration”, “cladogram” or “Hardy–Weinberg”",
  sitcomSeriesName: "IB Biology Studio (Phase C)",
  sitcomBlurb: "Narrated IB Biology episodes and vertical Concept Shorts will arrive in Phase C once the Year 9 video batch finishes rendering.",
} as const;

export const EXAM_PAPERS_META: readonly ExamPaperMeta[] = [
  { id: "exam-p1a", expectedCount: 25, level: "SL", paperType: "Paper 1A · Multiple Choice (SL & HL)" },
  { id: "exam-p1b", expectedCount: 15, level: "SL", paperType: "Paper 1B · Data-Based & Experimental" },
  { id: "exam-p2-sl", expectedCount: 15, level: "SL", paperType: "Paper 2 (SL) · Structured & Extended" },
  { id: "exam-p2-hl", expectedCount: 20, level: "HL", paperType: "Paper 2 (HL) · Structured & Extended" },
] as const;

export const STRAND_STYLES_MAP: Record<Strand, { slug: string; text: string; bg: string; soft: string; border: string }> = {
  "Theme A: Unity & Diversity": { slug: "theme-a", text: "text-s-number", bg: "bg-s-number", soft: "bg-s-number/15", border: "border-s-number" },
  "Theme B: Form & Function": { slug: "theme-b", text: "text-s-ratio", bg: "bg-s-ratio", soft: "bg-s-ratio/15", border: "border-s-ratio" },
  "Theme C: Interaction & Interdependence": { slug: "theme-c", text: "text-s-algebra", bg: "bg-s-algebra", soft: "bg-s-algebra/15", border: "border-s-algebra" },
  "Theme D: Continuity & Change": { slug: "theme-d", text: "text-s-geometry", bg: "bg-s-geometry", soft: "bg-s-geometry/15", border: "border-s-geometry" },
};

export const VAULT_QUICK_CARDS: readonly VaultQuickCard[] = [
  {
    title: "1. Microscopy, Mitotic Index & Percentage Change",
    badge: "Core Lab Maths",
    level: "SL",
    lines: [
      "`Magnification (M) = Image size (I) / Actual size (A)` — convert to identical units FIRST (`1 mm = 1000 μm`; `1 μm = 1000 nm`).",
      "`Mitotic index = (cells in mitosis [P+M+A+T]) / (total cells counted)` (as a decimal or `%`).",
      "`% change = [(final − initial) / initial] × 100` (include `+` or `−` sign for osmosis mass-change curves!).",
      "`R_f = distance travelled by pigment / distance travelled by solvent front` (always `0 < R_f < 1`, unitless).",
    ],
  },
  {
    title: "2. Ecology & Biodiversity Quantitative Toolkit",
    badge: "Paper 1B & IA",
    level: "SL",
    lines: [
      "**Lincoln Index (capture–mark–recapture):** `N = (M × n) / m` (`M` = 1st sample marked, `n` = 2nd sample total, `m` = marked recaptures).",
      "**Simpson's Reciprocal Diversity Index:** `D = N(N − 1) / Σ n(n − 1)` (higher `D` = greater species richness & evenness).",
      "**Chi-Squared Test (`χ²`):** `χ² = Σ (O − E)² / E` · Association `df = (rows − 1)(cols − 1)` · Goodness-of-fit `df = categories − 1`.",
      "Decision rule at `α = 0.05`: if `χ²_calc > χ²_crit`, **reject H₀** (statistically significant association / deviation from expected ratio).",
    ],
  },
  {
    title: "3. HL Water Potential, Enzyme Kinetics & Respiration",
    badge: "HL Only",
    level: "HL",
    lines: [
      "**Water Potential (D2.3):** `Ψ = Ψ_s + Ψ_p` (`Ψ_s ≤ 0` due to solutes; pure water `Ψ = 0 kPa`; water moves from HIGHER/less negative `Ψ` to LOWER/more negative `Ψ`).",
      "**Inhibition (C1.1):** Competitive raises apparent `K_m` (same `V_max` at high `[S]`); non-competitive lowers `V_max` (same `K_m`).",
      "**Respiration & Photosynthesis (C1.2–C1.3):** Chemiosmosis pumps `H⁺` into intermembrane space (mitochondria) / thylakoid lumen (chloroplasts) → ATP synthase.",
    ],
  },
  {
    title: "4. HL Genetics, Recombination & Hardy–Weinberg",
    badge: "HL Only",
    level: "HL",
    lines: [
      "**Hardy–Weinberg (D4.1):** `p + q = 1` (allele frequencies) and `p² + 2pq + q² = 1` (genotype frequencies) — start by finding `q = √(q²)` from homozygous recessive phenotype!",
      "**Dihybrid Unlinked Ratio (D3.2):** `AaBb × AaBb → 9 : 3 : 3 : 1` · Test cross `AaBb × aabb → 1 : 1 : 1 : 1`.",
      "**Linked Genes (D3.2):** Large excess of parental phenotypes + small `%` of recombinants → `Recombination frequency = (recombinants / total offspring) × 100%`.",
    ],
  },
];

export const EXAM_TIPS: readonly ExamTip[] = [
  {
    icon: "🔬",
    title: "Calculators allowed on ALL papers (FA2025 — NO Paper 3)",
    text: "Under the 2025 IB Biology syllabus, Paper 1A (MCQ), Paper 1B (Data-based & experimental skills), and Paper 2 (SL & HL) all permit calculators. There is no Paper 3 or legacy Options.",
  },
  {
    icon: "📊",
    title: "Data-based questions demand numbers AND error-bar logic",
    text: "Always quote exact data values with units from graphs/tables, compute differences or `%` changes, check whether error bars overlap, and never claim 'proves' or 'causation' from observational correlations.",
  },
  {
    icon: "🧬",
    title: "Name specific molecules, sites, and directions",
    text: "Write 'active site changes shape / denatures' (never 'enzymes die'), specify `5' → 3'` synthesis direction, name exact hormones/ions (`ADH`, `Ca²⁺`, `Na⁺`), and distinguish mitosis vs meiosis cleanly.",
  },
  {
    icon: "🎯",
    title: "Structure Paper 2 Section B extended responses cleanly",
    text: "Break 6–8 mark essays into crisp biological mechanisms with cause → effect chains, labelled diagrams/tables where helpful, and explicit SL/HL terminology — zero waffle.",
  },
];

export const IB_COMMAND_TERMS: readonly CommandTermDef[] = [
  { term: "State", ao: "AO1", meaning: "Give a specific name, value or brief biological fact without explanation.", examTip: "Be concise — one precise biological term or value." },
  { term: "Define", ao: "AO1", meaning: "Give the precise meaning of a biological term or concept.", examTip: "Include all essential qualifiers (e.g. 'net passive movement of water molecules across a selectively permeable membrane from higher to lower water potential')." },
  { term: "Outline", ao: "AO2", meaning: "Give a brief account or summary of a process or mechanism.", examTip: "Hit 2–3 core biological steps in logical order." },
  { term: "Describe", ao: "AO2", meaning: "Give a detailed account of a graph trend, structure, or sequence of events.", examTip: "For graphs, describe overall trend, inflection points, plateaus, AND quote paired coordinates with units!" },
  { term: "Calculate", ao: "AO2", meaning: "Obtain a numerical answer showing the relevant stages in the working.", examTip: "Convert units FIRST (mm → μm), show formula → substitution → answer with units and appropriate s.f." },
  { term: "Compare and contrast", ao: "AO3", meaning: "Give an account of similarities AND differences between two items, referring to both throughout.", examTip: "Use explicit comparative words ('both…', 'whereas…') — a side-by-side table works brilliantly!" },
  { term: "Deduce", ao: "AO3", meaning: "Reach a biological conclusion from the pedigree, cladogram, or experimental data provided.", examTip: "Cite the exact individuals, bands, or data values that rule out competing hypotheses." },
  { term: "Explain", ao: "AO3", meaning: "Give a detailed account including biological causes, mechanisms, or selective advantages.", examTip: "Chain molecular/cellular cause → physiological/ecological effect." },
  { term: "Distinguish", ao: "AO2", meaning: "Make clear the differences between two biological structures or processes.", examTip: "Explicitly state BOTH sides ('Prokaryotes have 70S ribosomes and naked circular DNA, whereas eukaryotes have 80S ribosomes and histone-bound linear DNA')." },
  { term: "Suggest", ao: "AO3", meaning: "Propose a plausible biological hypothesis or explanation for an unfamiliar scenario.", examTip: "Apply core IB mechanisms logically to the new organism or dataset given." },
  { term: "Discuss", ao: "AO3", meaning: "Offer a considered and balanced review including a range of arguments, evidence, or ethical views.", examTip: "Address supporting evidence, counter-evidence, and limitations explicitly." },
  { term: "Evaluate", ao: "AO3", meaning: "Make an appraisal by weighing up the strengths, limitations, and validity of evidence or a claim.", examTip: "Assess sample size, controls, error bars, correlation vs causation, and state a reasoned verdict." },
];
