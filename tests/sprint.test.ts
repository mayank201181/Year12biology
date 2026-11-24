import test from "node:test";
import assert from "node:assert/strict";
import {
  SPRINT_MODES,
  SPRINT_MODE_INFO,
  SPRINT_MODE_STRAND,
  isSprintMode,
  sprintAwardKey,
  sprintBestKey,
  sprintItem,
  sprintPool,
  sprintPoolSizes,
  sprintStars,
} from "../lib/sprint.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { checkAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";
import type { Drill } from "../lib/drills/types.ts";

function bankDrill(topicId: string, level: 1 | 2 | 3, slug = "terms", ibLevel?: "SL" | "HL"): Drill {
  const bank = [
    ["Organelle responsible for aerobic ATP synthesis?", "mitochondrion"],
    ["Vessel transporting water upward in plants?", "xylem"],
    ["Complementary RNA base to adenine?", "uracil"],
    ["Enzyme that unwinds the DNA double helix?", "helicase"],
  ] as const;
  return {
    id: `${topicId}.${slug}`,
    topicId,
    title: "Fake Biology drill",
    level,
    ibLevel,
    generate(rng, tier) {
      assert.equal(tier, 1, "sprints always generate at tier 1");
      const [prompt, term] = rng.pick(bank);
      return { prompt: `${prompt} (${topicId})`, answer: { type: "text", accept: [term] }, solution: [term] };
    },
  };
}

function numberDrill(topicId: string): Drill {
  return {
    id: `${topicId}.magnification`,
    topicId,
    title: "Fake magnification drill",
    level: 1,
    generate(rng) {
      const m = rng.int(2, 9);
      return {
        prompt: `Actual length of a cell appearing ${m * 10} mm wide at ×1000 magnification (in μm)?`,
        answer: { type: "number", value: m * 10, tolerance: 0 },
        solution: [`A = I / M = ${m * 10 * 1000} μm / 1000 = ${m * 10} μm`],
      };
    },
  };
}

const firstTopic = (strand: string) => TOPIC_META.find((t) => t.strand === strand)!.id;

test("modes are Themes A–D plus mixed, with info and storage keys", () => {
  assert.deepEqual([...SPRINT_MODES], ["themeA", "themeB", "themeC", "themeD", "mixed"]);
  for (const m of SPRINT_MODES) {
    assert.ok(isSprintMode(m));
    assert.ok(SPRINT_MODE_INFO[m].label && SPRINT_MODE_INFO[m].icon);
    assert.equal(sprintBestKey(m), `sprint:${m}`);
    assert.equal(sprintAwardKey(m, "2026-01-02"), `sprint:2026-01-02:${m}`);
  }
  for (const strand of Object.values(SPRINT_MODE_STRAND)) assert.ok(TOPIC_META.some((t) => t.strand === strand), strand);
  assert.ok(!isSprintMode("paper1"));
  assert.ok(!isSprintMode(undefined));
});

test("stars: 1 per 5 correct, capped at 5", () => {
  assert.deepEqual([0, 4, 5, 12, 25, 99].map(sprintStars), [0, 0, 1, 2, 5, 5]);
});

test("no drills: every pool is empty and sprintItem returns null", () => {
  const sizes = sprintPoolSizes([]);
  for (const m of SPRINT_MODES) assert.equal(sizes[m], 0);
  assert.equal(sprintItem([], makeRng(1)), null);
});

test("pools: strand modes take their strand's level 1–2 drills; SL hides HL drills", () => {
  const tA = firstTopic("Theme A: Unity & Diversity");
  const tB = firstTopic("Theme B: Form & Function");
  const drills = [
    bankDrill(tA, 1, "sl", "SL"),
    bankDrill(tA, 2, "hl", "HL"),
    bankDrill(tA, 3, "hard", "SL"),
    bankDrill(tB, 2, "b", "SL"),
    bankDrill("not-a-topic", 1),
  ];
  assert.deepEqual(sprintPool("themeA", drills, "HL").map((d) => d.id), [`${tA}.sl`, `${tA}.hl`]);
  assert.deepEqual(sprintPool("themeA", drills, "SL").map((d) => d.id), [`${tA}.sl`]);
  assert.deepEqual(sprintPool("themeB", drills, "HL").map((d) => d.id), [`${tB}.b`]);
  assert.deepEqual(sprintPool("mixed", drills, "SL").map((d) => d.id).sort(), [`${tA}.sl`, `${tB}.b`].sort());
});

test("items carry a checkable answer, preserve tolerance, and display the correct answer", () => {
  const tA = firstTopic("Theme A: Unity & Diversity");
  const pool = [numberDrill(tA), bankDrill(tA, 2)];
  const rng = makeRng(42);
  const seen = new Set<string>();
  for (let i = 0; i < 20; i++) {
    const it = sprintItem(pool, rng, seen);
    assert.ok(it);
    seen.add(it.key);
    assert.ok(it.prompt.length > 0);
    assert.equal(checkAnswer(it.answer, it.answerText).status, "correct", it.answerText);
  }
});

test("a drill that throws is skipped, not fatal", () => {
  const tA = firstTopic("Theme A: Unity & Diversity");
  const broken: Drill = {
    id: `${tA}.broken`,
    topicId: tA,
    title: "Broken",
    level: 1,
    generate() {
      throw new Error("boom");
    },
  };
  const it = sprintItem([broken, numberDrill(tA)], makeRng(7));
  assert.ok(it && it.drillId === `${tA}.magnification`);
  assert.equal(sprintItem([broken], makeRng(7)), null);
});
