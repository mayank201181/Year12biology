// ---------------------------------------------------------------------------
// 60-second Fluency Sprint: quick-fire IB Biology recall across Themes A–D
// (magnification, DNA/RNA base pairing, mitotic index, Simpson's D, Lincoln
// index, water potential, Hardy–Weinberg, genetics ratios & χ² degrees of freedom).
//
// Pure (no React, no registry import) so it can be unit-tested directly by
// Node: callers pass in the drills (ALL_DRILLS in the app).
// ---------------------------------------------------------------------------
import type { Drill, Rng } from "./drills/types.ts";
import type { AnswerSpec, IBLevel, Strand, Trap } from "./types.ts";
import { displayAnswer } from "./answerCheck.ts";
import { TOPIC_META } from "./topics/meta.ts";

export type SprintMode = "themeA" | "themeB" | "themeC" | "themeD" | "mixed";
/** A mode tied to one strand (everything except "mixed"). */
export type SprintStrandMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["themeA", "themeB", "themeC", "themeD", "mixed"];

/** Which strand each mode draws from. */
export const SPRINT_MODE_STRAND: Record<SprintStrandMode, Strand> = {
  themeA: "Theme A: Unity & Diversity",
  themeB: "Theme B: Form & Function",
  themeC: "Theme C: Interaction & Interdependence",
  themeD: "Theme D: Continuity & Change",
};

/** Length of a timed sprint. */
export const SPRINT_SECONDS = 60;

/** Highest drill level used (1 = basics, 2 = core) — sprint items must be quick. */
export const SPRINT_MAX_LEVEL = 2;
/** Generation tier used for every sprint item (friendly numbers, core facts). */
export const SPRINT_TIER = 1;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  /** Two sample prompts (plain text). */
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  themeA: {
    label: "Theme A: Unity & Diversity",
    icon: "🔬",
    description: "Magnification M = I/A, mm ↔ μm conversions, Chargaff DNA base %, cladistics & Simpson's D.",
    example: "Actual size of a 40 mm image at ×2000 · % Guanine when Adenine = 22%",
  },
  themeB: {
    label: "Theme B: Form & Function",
    icon: "🫀",
    description: "SA:V ratio, membrane transport, cardiac/spirometer volumes, Bohr shift & ecological niches.",
    example: "SA:V ratio of a 2 cm cube · Vital capacity from spirometer trace",
  },
  themeC: {
    label: "Theme C: Interaction & Interdependence",
    icon: "⚡",
    description: "Chromatography R_f, enzyme rates, Lincoln index N = Mn/m, 10% energy transfer & χ² df.",
    example: "Lincoln population estimate from M=40, n=50, m=10 · 10% energy across 2 trophic levels",
  },
  themeD: {
    label: "Theme D: Continuity & Change",
    icon: "🧬",
    description: "DNA→mRNA transcription, mitotic index, water potential Ψ = Ψ_s + Ψ_p, Punnett & Hardy–Weinberg.",
    example: "Mitotic index of 18 dividing cells out of 120 · Carrier frequency 2pq when q = 0.2",
  },
  mixed: {
    label: "Full IB Biology Mixed",
    icon: "🎲",
    description: "Themes A–D interleaved — rapid quantitative & biological recall across the FA2025 course.",
    example: "Magnification, SA:V, Lincoln index, mitotic index & genetics in 60 seconds",
  },
};

export interface SprintItem {
  /** Identity for repeat-avoidance, retries and the missed list. */
  key: string;
  /** Question shown to the learner (markdown-lite + {{maths}}). */
  prompt: string;
  /** How the answer is checked (lib/answerCheck.ts). */
  answer: AnswerSpec;
  /** The correct answer as display text (may contain {{maths}}). */
  answerText: string;
  /** Predictable wrong answers with targeted feedback (from the drill). */
  traps?: Trap[];
  /** Optional inline SVG from the drill. */
  diagram?: string;
  drillId: string;
  topicId: string;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

/** Personal-best key in ProgressDoc.bests. */
export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

/** Idempotency key for the once-per-mode-per-day star award. */
export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

/** Stars for a sprint score: 1 per 5 correct, at most 5. */
export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

const STRAND_OF_TOPIC = new Map<string, Strand>(TOPIC_META.map((t) => [t.id, t.strand]));
const LEVEL_OF_TOPIC = new Map<string, IBLevel>(TOPIC_META.map((t) => [t.id, t.level]));

/** The strand a topic belongs to (undefined for an unknown topic). */
export function strandOfTopic(topicId: string): Strand | undefined {
  return STRAND_OF_TOPIC.get(topicId);
}

/** The drills a mode draws from: level 1–2, in the mode's strand ("mixed": any known topic), respecting SL/HL. */
export function sprintPool(mode: SprintMode, drills: readonly Drill[], ibLevel: IBLevel = "HL"): Drill[] {
  return drills.filter((d) => {
    if (d.level > SPRINT_MAX_LEVEL) return false;
    const strand = strandOfTopic(d.topicId);
    if (!strand) return false;
    const drillLevel = d.ibLevel ?? LEVEL_OF_TOPIC.get(d.topicId) ?? "SL";
    if (ibLevel === "SL" && drillLevel === "HL") return false;
    return mode === "mixed" || strand === SPRINT_MODE_STRAND[mode];
  });
}

/** Number of drills each mode can draw from (0 = not available yet). */
export function sprintPoolSizes(drills: readonly Drill[], ibLevel: IBLevel = "HL"): Record<SprintMode, number> {
  return {
    themeA: sprintPool("themeA", drills, ibLevel).length,
    themeB: sprintPool("themeB", drills, ibLevel).length,
    themeC: sprintPool("themeC", drills, ibLevel).length,
    themeD: sprintPool("themeD", drills, ibLevel).length,
    mixed: sprintPool("mixed", drills, ibLevel).length,
  };
}

/**
 * Draw one quick-fire item from a pool (typically sprintPool(mode, ALL_DRILLS)).
 * Avoids repeating prompts already seen in `avoid` when the pool can offer something else.
 */
export function sprintItem(pool: readonly Drill[], rng: Rng, avoid: ReadonlySet<string> = new Set()): SprintItem | null {
  if (!pool.length) return null;
  let fallback: SprintItem | null = null;
  const tries = Math.min(18, Math.max(8, pool.length * 3));
  for (let i = 0; i < tries; i++) {
    const drill = rng.pick(pool);
    try {
      const gen = drill.generate(rng, SPRINT_TIER);
      const key = `${drill.id}::${gen.prompt}`;
      const item: SprintItem = {
        key,
        prompt: gen.prompt,
        answer: gen.answer,
        answerText: displayAnswer(gen.answer),
        traps: gen.traps,
        diagram: gen.diagram,
        drillId: drill.id,
        topicId: drill.topicId,
      };
      if (!avoid.has(key)) return item;
      fallback ??= item;
    } catch {
      /* skip a broken generator rather than crashing the sprint */
    }
  }
  return fallback;
}
