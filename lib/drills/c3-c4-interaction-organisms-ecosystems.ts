import type { Drill, Rng } from "./types.ts";
import { big, clean, num, roundTo } from "./helpers.ts";

const ACTIVITIES = [
  "quiet resting",
  "brisk walking",
  "steady jogging",
  "lap swimming",
  "uphill cycling",
  "ergometer rowing",
  "interval sprinting",
] as const;

const PATHOGENS = [
  "an airborne respiratory virus",
  "a measles-like viral strain",
  "a rubella variant",
  "a pertussis bacterial outbreak",
  "an influenza A subtype",
  "a mumps cluster",
  "a diphtheria outbreak",
  "a parainfluenza strain",
] as const;

const COMMUNITIES = [
  "island community",
  "coastal city",
  "regional district",
  "university campus",
  "metropolitan borough",
  "valley township",
] as const;

const MOTILE_SPECIES = [
  "woodlice",
  "marsh frogs",
  "pond snails",
  "ground beetles",
  "meadow voles",
  "house sparrows",
  "perch fish",
  "field grasshoppers",
  "shore crabs",
] as const;

const SESSILE_SPECIES = [
  "dandelions",
  "white clover plants",
  "acorn barnacles",
  "rocky-shore limpets",
  "glasswort shoots",
  "heather clumps",
  "marram grass tufts",
  "wood sorrel plants",
] as const;

const HABITATS = [
  "meadow",
  "pasture",
  "salt marsh",
  "rocky shore plot",
  "woodland clearing",
  "coastal dune grid",
] as const;

const SPECIES_PAIRS: ReadonlyArray<readonly [string, string]> = [
  ["acorn barnacles", "dogwhelks"],
  ["heather", "bracken"],
  ["limpets", "green algae"],
  ["woodland moss", "wood sorrel"],
  ["marram grass", "sea holly"],
  ["white clover", "daisies"],
  ["mussels", "bladderwrack"],
  ["glasswort", "sea purslane"],
];

const BIOMES = [
  "temperate meadow",
  "tropical rainforest",
  "boreal spruce forest",
  "coral reef lagoon",
  "coastal salt marsh",
  "savannah grassland",
  "coastal kelp forest",
  "freshwater lake",
] as const;

export const drills: Drill[] = [
  {
    id: "c3-c4-interaction-organisms-ecosystems.coordination-cardiac-ventilation",
    topicId: "c3-c4-interaction-organisms-ecosystems",
    title: "Cardiac Output & Ventilation Rate",
    level: 1,
    ibLevel: "SL",
    guideRef: "integration-body-systems",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const activity = rng.pick(ACTIVITIES);

      if (tier === 1) {
        if (rng.bool(0.55)) {
          const hr = rng.int(6, 16) * 10; // 60..160 bpm (multiples of 10 → exact 2 d.p. in dm³)
          const sv = rng.int(12, 24) * 5; // 60..120 cm³
          const coCm3 = hr * sv;
          const coDm3 = clean(coCm3 / 1000);
          return {
            prompt: `During ${activity}, an athlete has a heart rate of ${hr} beats min⁻¹ and a stroke volume of ${sv} cm³. Calculate the cardiac output in dm³ min⁻¹.`,
            answer: { type: "number", value: coDm3, tolerance: 0.02, display: `${num(coDm3)} dm³ min⁻¹` },
            hint: "Use {{CO = HR * SV}} to get cm³ min⁻¹, then divide by 1,000 to convert to dm³ min⁻¹.",
            traps: [
              {
                spec: { type: "number", value: coCm3, tolerance: 1 },
                feedback: `${big(coCm3)} is in cm³ min⁻¹ — divide by 1,000 to convert to dm³ min⁻¹.`,
              },
            ],
            solution: [
              `Multiply heart rate by stroke volume: {{${hr} * ${sv} = ${coCm3}}} cm³ min⁻¹.`,
              `Convert cm³ to dm³ by dividing by 1,000: {{${coCm3} / 1000 = ${num(coDm3)}}} dm³ min⁻¹.`,
            ],
          };
        }

        const tv = roundTo(rng.int(8, 22) * 0.05, 2); // 0.40..1.10 dm³
        const br = rng.int(6, 18) * 2; // 12..36 breaths min⁻¹
        const vent = roundTo(tv * br, 2);
        return {
          prompt: `During ${activity}, chemoreceptors adjust ventilation so a student's tidal volume is ${num(tv)} dm³ and breathing frequency is ${br} breaths min⁻¹. Calculate the minute ventilation rate in dm³ min⁻¹.`,
          answer: { type: "number", value: vent, tolerance: 0.05, display: `${num(vent)} dm³ min⁻¹` },
          hint: "Minute ventilation rate = tidal volume × breathing frequency.",
          solution: [
            `Multiply tidal volume by breathing frequency: {{${num(tv)} * ${br} = ${num(vent)}}} dm³ min⁻¹.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          const hr = rng.int(8, 18) * 10; // 80..180 bpm (multiples of 10 so hr*sv/1000 is exact to 2 d.p.!)
          const sv = rng.int(14, 24) * 5; // 70..120 cm³
          const co = clean((hr * sv) / 1000);
          return {
            prompt: `Sympathetic cardiac acceleration during ${activity} raises cardiac output to ${num(co)} dm³ min⁻¹ at a heart rate of ${hr} beats min⁻¹. Calculate the stroke volume in cm³.`,
            answer: { type: "number", value: sv, tolerance: 0.5, display: `${sv} cm³` },
            hint: "Convert cardiac output from dm³ min⁻¹ to cm³ min⁻¹ (× 1,000), then divide by heart rate.",
            traps: [
              {
                spec: { type: "number", value: roundTo(sv / 1000, 4), tolerance: 0.002 },
                feedback: "That value is in dm³ — multiply by 1,000 to express stroke volume in cm³.",
              },
            ],
            solution: [
              `Convert cardiac output to cm³ min⁻¹: {{${num(co)} * 1000 = ${hr * sv}}} cm³ min⁻¹.`,
              `Divide by heart rate: {{${hr * sv} / ${hr} = ${sv}}} cm³.`,
            ],
          };
        }

        const restHr = rng.int(6, 8) * 10; // 60..80 bpm
        const restSv = rng.int(12, 16) * 5; // 60..80 cm³
        const exHr = restHr + rng.int(5, 11) * 10;
        const exSv = restSv + rng.int(4, 10) * 5;
        const restCo = clean((restHr * restSv) / 1000);
        const exCo = clean((exHr * exSv) / 1000);
        const diff = clean(exCo - restCo);
        return {
          prompt: `During ${activity}, epinephrine and sympathetic nerves raise an athlete's heart rate from ${restHr} to ${exHr} beats min⁻¹ and stroke volume from ${restSv} to ${exSv} cm³. Calculate the *increase* in cardiac output in dm³ min⁻¹ (to 2 decimal places).`,
          answer: { type: "number", value: diff, tolerance: 0.05, display: `${num(diff)} dm³ min⁻¹` },
          hint: "Compute resting cardiac output and exercise cardiac output in dm³ min⁻¹, then subtract.",
          traps: [
            {
              spec: { type: "number", value: exCo, tolerance: 0.05 },
              feedback: `${num(exCo)} dm³ min⁻¹ is the exercise cardiac output — subtract the resting cardiac output (${num(restCo)} dm³ min⁻¹) to get the increase.`,
            },
          ],
          solution: [
            `Resting CO = {{(${restHr} * ${restSv}) / 1000 = ${num(restCo)}}} dm³ min⁻¹.`,
            `Exercise CO = {{(${exHr} * ${exSv}) / 1000 = ${num(exCo)}}} dm³ min⁻¹.`,
            `Increase = {{${num(exCo)} - ${num(restCo)} = ${num(diff)}}} dm³ min⁻¹.`,
          ],
        };
      }

      // Tier 3: multi-step alveolar ventilation or percentage-scaling cardiac output
      if (rng.bool(0.5)) {
        const restHr = rng.pick([60, 65, 70, 75, 80]);
        const restSv = rng.pick([60, 70, 75, 80]);
        const hrInc = rng.pick([50, 80, 100, 120, 150]); // %
        const svInc = rng.pick([20, 25, 40, 50]); // %
        const newHr = clean(restHr * (1 + hrInc / 100));
        const newSv = clean(restSv * (1 + svInc / 100));
        const newCo = roundTo((newHr * newSv) / 1000, 2);
        const wrongAdd = roundTo(((restHr * restSv) / 1000) * (1 + (hrInc + svInc) / 100), 2);
        const traps =
          Math.abs(wrongAdd - newCo) > 0.1
            ? [
                {
                  spec: { type: "number" as const, value: wrongAdd, tolerance: 0.05 },
                  feedback: "Percentage increases multiply rather than add — calculate the new HR and new SV first, then multiply them.",
                },
              ]
            : undefined;
        return {
          prompt: `At rest, a runner has HR = ${restHr} beats min⁻¹ and SV = ${restSv} cm³. During ${activity}, chemoreceptor stimulation increases heart rate by ${hrInc}% and stroke volume by ${svInc}%. Calculate the new cardiac output in dm³ min⁻¹ (to 2 decimal places).`,
          answer: { type: "number", value: newCo, tolerance: 0.05, display: `${num(newCo)} dm³ min⁻¹` },
          hint: "Apply each percentage increase separately to HR and SV, multiply them, and divide by 1,000.",
          traps,
          solution: [
            `New HR = {{${restHr} * ${num(1 + hrInc / 100)} = ${num(newHr)}}} beats min⁻¹.`,
            `New SV = {{${restSv} * ${num(1 + svInc / 100)} = ${num(newSv)}}} cm³.`,
            `New CO = {{(${num(newHr)} * ${num(newSv)}) / 1000 = ${num(newCo)}}} dm³ min⁻¹.`,
          ],
        };
      }

      const deadSpace = 0.15; // dm³ anatomical dead space
      const tv = roundTo(rng.int(10, 30) * 0.05, 2); // 0.50..1.50 dm³
      const br = rng.int(12, 34); // breaths min⁻¹
      const alveolar = roundTo((tv - deadSpace) * br, 2);
      const totalVent = roundTo(tv * br, 2);
      return {
        prompt: `During ${activity}, a rower's tidal volume is ${num(tv)} dm³ and breathing rate is ${br} breaths min⁻¹. Given an anatomical dead space of 0.15 dm³ per breath (air that never reaches alveoli), calculate the *alveolar* ventilation rate in dm³ min⁻¹ (to 2 decimal places).`,
        answer: { type: "number", value: alveolar, tolerance: 0.05, display: `${num(alveolar)} dm³ min⁻¹` },
        hint: "Subtract anatomical dead space (0.15 dm³) from tidal volume first, then multiply by breathing rate.",
        traps: [
          {
            spec: { type: "number", value: totalVent, tolerance: 0.05 },
            feedback: `${num(totalVent)} dm³ min⁻¹ is total minute ventilation — subtract the 0.15 dm³ dead space from each breath first.`,
          },
        ],
        solution: [
          `Fresh air reaching alveoli per breath = {{${num(tv)} - 0.15 = ${num(roundTo(tv - deadSpace, 2))}}} dm³.`,
          `Alveolar ventilation rate = {{${num(roundTo(tv - deadSpace, 2))} * ${br} = ${num(alveolar)}}} dm³ min⁻¹.`,
        ],
      };
    },
  },

  {
    id: "c3-c4-interaction-organisms-ecosystems.immunity-herd-threshold",
    topicId: "c3-c4-interaction-organisms-ecosystems",
    title: "Herd-Immunity Threshold (1 − 1/R₀)",
    level: 1,
    ibLevel: "SL",
    guideRef: "defense-against-disease",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const pathogen = rng.pick(PATHOGENS);
      const community = rng.pick(COMMUNITIES);

      if (tier === 1) {
        const r0 = rng.pick([1.25, 1.6, 2, 2.5, 3, 4, 5, 6, 6.25, 8, 9, 10, 12, 12.5, 15, 16, 18, 20]);
        const pc = roundTo((1 - 1 / r0) * 100, 1);
        const inv = roundTo((1 / r0) * 100, 1);
        const traps =
          Math.abs(inv - pc) > 0.5
            ? [
                {
                  spec: { type: "number" as const, value: inv, tolerance: 0.2 },
                  feedback: `${num(inv)}% is 1/R₀ (maximum susceptible fraction) — subtract from 100% to get the required immune percentage.`,
                },
              ]
            : undefined;
        return {
          prompt: `Public-health modellers estimate {{R_0 = ${num(r0)}}} for ${pathogen} entering a ${community}. Calculate the minimum percentage of residents who must be immune to reach the herd-immunity threshold (to 1 decimal place).`,
          answer: { type: "number", value: pc, tolerance: 0.15, display: `${num(pc)}%` },
          hint: "Apply {{p_c = (1 - 1/R_0) * 100}}.",
          traps,
          solution: [
            `Use the herd-immunity threshold formula: {{p_c = 1 - 1/R_0 = 1 - 1/${num(r0)}}}.`,
            `Convert to a percentage (1 d.p.): {{(1 - 1/${num(r0)}) * 100 ≈ ${num(pc)}}}%.`,
          ],
        };
      }

      if (tier === 2) {
        const r0 = rng.pick([2, 2.5, 4, 5, 8, 10, 12.5, 16, 20]);
        const pop = rng.int(4, 40) * 4000; // 16,000..160,000 (divisible by 16 and 25 and 100)
        const need = roundTo(pop * (1 - 1 / r0), 0);
        if (rng.bool(0.55)) {
          const susc = pop - need;
          const traps =
            susc !== need
              ? [
                  {
                    spec: { type: "number" as const, value: susc, tolerance: 5 },
                    feedback: `${big(susc)} is the maximum number of susceptible residents (pop / R₀) — subtract from ${big(pop)} for immune residents.`,
                  },
                ]
              : undefined;
          return {
            prompt: `A ${community} of ${big(pop)} residents faces ${pathogen} with {{R_0 = ${num(r0)}}}. Calculate the minimum number of immune residents required for herd immunity.`,
            answer: { type: "number", value: need, tolerance: 2, display: `${need} individuals` },
            hint: "Compute {{p_c = 1 - 1/R_0}}, then multiply by the total population.",
            traps,
            solution: [
              `Critical immune fraction: {{p_c = 1 - 1/${num(r0)} = ${num(roundTo(1 - 1 / r0, 4))}}}.`,
              `Minimum immune residents: {{${num(roundTo(1 - 1 / r0, 4))} * ${pop} = ${need}}} individuals.`,
            ],
          };
        }

        const currPct = rng.int(20, Math.min(70, Math.floor((1 - 1 / r0) * 100) - 5));
        const currImmune = roundTo((pop * currPct) / 100, 0);
        const gap = need - currImmune;
        return {
          prompt: `A ${community} of ${big(pop)} people faces ${pathogen} ({{R_0 = ${num(r0)}}}). Currently ${big(currImmune)} residents (${currPct}%) are immune. How many *additional* residents must gain immunity to reach the herd-immunity threshold?`,
          answer: { type: "number", value: gap, tolerance: 2, display: `${gap} individuals` },
          hint: "Find total immune residents required via {{P * (1 - 1/R_0)}}, then subtract the currently immune residents.",
          traps: [
            {
              spec: { type: "number", value: need, tolerance: 2 },
              feedback: `${big(need)} is the *total* immune residents required — subtract the ${big(currImmune)} already immune to find the additional number needed.`,
            },
          ],
          solution: [
            `Total immune required = {{${pop} * (1 - 1/${num(r0)}) = ${need}}} individuals.`,
            `Additional immune residents needed = {{${need} - ${currImmune} = ${gap}}} individuals.`,
          ],
        };
      }

      // Tier 3: Vaccine efficacy adjustment OR solving for R₀ from p_c
      if (rng.bool(0.55)) {
        const pair = rng.pick([
          { r0: 2, eff: 80 },
          { r0: 2, eff: 75 },
          { r0: 2, eff: 60 },
          { r0: 2.5, eff: 80 },
          { r0: 2.5, eff: 75 },
          { r0: 2.5, eff: 90 },
          { r0: 4, eff: 80 },
          { r0: 4, eff: 85 },
          { r0: 4, eff: 90 },
          { r0: 5, eff: 85 },
          { r0: 5, eff: 90 },
          { r0: 5, eff: 95 },
          { r0: 6.25, eff: 90 },
          { r0: 6.25, eff: 95 },
          { r0: 8, eff: 90 },
          { r0: 8, eff: 95 },
          { r0: 10, eff: 95 },
        ]);
        const pcPct = roundTo((1 - 1 / pair.r0) * 100, 2);
        const vaccPct = roundTo(pcPct / (pair.eff / 100), 1);
        return {
          prompt: `In a ${community}, ${pathogen} has {{R_0 = ${num(pair.r0)}}}. If the available vaccine has ${pair.eff}% efficacy (only ${pair.eff}% of vaccinated people become immune), calculate the minimum percentage of the population that must be vaccinated to reach herd immunity (to 1 decimal place).`,
          answer: { type: "number", value: vaccPct, tolerance: 0.15, display: `${num(vaccPct)}%` },
          hint: "First find the immune threshold {{p_c = (1 - 1/R_0) * 100}}, then divide by vaccine efficacy as a decimal.",
          traps: [
            {
              spec: { type: "number", value: pcPct, tolerance: 0.15 },
              feedback: `${num(pcPct)}% assumes 100% vaccine efficacy — divide by ${num(pair.eff / 100)} to adjust for ${pair.eff}% efficacy.`,
            },
          ],
          solution: [
            `Required immune fraction: {{p_c = (1 - 1/${num(pair.r0)}) * 100 = ${num(pcPct)}}}%.`,
            `Adjust for ${pair.eff}% vaccine efficacy: {{${num(pcPct)} / ${num(pair.eff / 100)} ≈ ${num(vaccPct)}}}%.`,
          ],
        };
      }

      const r0 = rng.pick([1.6, 2, 2.5, 4, 5, 6.25, 8, 10, 12.5, 16, 20]);
      const pcPct = roundTo((1 - 1 / r0) * 100, 2);
      return {
        prompt: `Epidemiologists determine that ${pathogen} in a ${community} requires at least ${num(pcPct)}% of the population to be immune for herd immunity. Deduce the pathogen's basic reproduction number ({{R_0}}).`,
        answer: { type: "number", value: r0, tolerance: 0.05, display: `${num(r0)}` },
        hint: "Rearrange {{p_c = 1 - 1/R_0}} to get {{R_0 = 1 / (1 - p_c)}} (using {{p_c}} as a decimal).",
        solution: [
          `Convert percentage to decimal: {{p_c = ${num(roundTo(pcPct / 100, 4))}}}.`,
          `Rearrange: {{1 / R_0 = 1 - ${num(roundTo(pcPct / 100, 4))} = ${num(roundTo(1 - pcPct / 100, 4))}}}.`,
          `Take reciprocal: {{R_0 = 1 / ${num(roundTo(1 - pcPct / 100, 4))} = ${num(r0)}}}.`,
        ],
      };
    },
  },

  {
    id: "c3-c4-interaction-organisms-ecosystems.lincoln-quadrat",
    topicId: "c3-c4-interaction-organisms-ecosystems",
    title: "Lincoln Index & Quadrat Population Density",
    level: 2,
    ibLevel: "SL",
    guideRef: "populations-communities-chi",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        if (rng.bool(0.55)) {
          const species = rng.pick(MOTILE_SPECIES);
          const d1 = rng.int(2, 5);
          const d2 = rng.int(2, 4);
          const m = d1 * d2; // 4..20
          const k1 = rng.int(3, 8);
          const k2 = rng.int(3, 8);
          const M = k1 * d1 * 2;
          const n = k2 * d2 * 2;
          const N = (M * n) / m;
          return {
            prompt: `Ecologists capture, mark, and release ${M} ${species}. One week later they catch ${n} ${species}, of which ${m} are marked. Use the Lincoln index to estimate the total population.`,
            answer: { type: "number", value: N, tolerance: 0.5, display: `${N} individuals` },
            hint: "Apply {{N = (M * n) / m}}.",
            solution: [
              `Identify {{M = ${M}}}, {{n = ${n}}}, and {{m = ${m}}}.`,
              `{{N = (${M} * ${n}) / ${m} = ${M * n} / ${m} = ${N}}} individuals.`,
            ],
          };
        }

        const plant = rng.pick(SESSILE_SPECIES);
        const habitat = rng.pick(HABITATS);
        const len = rng.int(10, 35);
        const wid = rng.int(8, 25);
        const area = len * wid;
        const mean = roundTo(rng.int(6, 24) * 0.5, 1);
        const total = roundTo(mean * area, 0);
        return {
          prompt: `Students sample a ${len} m × ${wid} m ${habitat} using random 1 m × 1 m quadrats and find a mean of ${num(mean)} ${plant} per quadrat. Estimate the total number of ${plant} in the ${habitat}.`,
          answer: { type: "number", value: total, tolerance: 1, display: `${total} individuals` },
          hint: "Calculate the habitat area in m² and multiply by the mean count per 1 m² quadrat.",
          solution: [
            `Total habitat area = {{${len} * ${wid} = ${area}}} m².`,
            `Estimated population = {{${num(mean)} * ${area} = ${total}}} individuals.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          const plant = rng.pick(SESSILE_SPECIES);
          const habitat = rng.pick(HABITATS);
          const len = rng.int(4, 14) * 5; // 20..70 m
          const wid = rng.int(3, 10) * 5; // 15..50 m
          const area = len * wid;
          const qSide = rng.pick([0.5, 0.25]);
          const qArea = clean(qSide * qSide);
          const mean = roundTo(rng.int(4, 24) * 0.25, 2);
          const total = roundTo(mean * (area / qArea), 0);
          const wrongAreaTrap = roundTo(mean * area, 0);
          return {
            prompt: `A ${len} m × ${wid} m ${habitat} is sampled with random ${num(qSide)} m × ${num(qSide)} m quadrats, yielding a mean of ${num(mean)} ${plant} per quadrat. Estimate the total population in the ${habitat}.`,
            answer: { type: "number", value: total, tolerance: 2, display: `${total} individuals` },
            hint: `Find habitat area (${area} m²) and quadrat area ({{${num(qSide)} * ${num(qSide)} = ${num(qArea)}}} m²), then scale mean × (habitat area / quadrat area).`,
            traps: [
              {
                spec: { type: "number", value: wrongAreaTrap, tolerance: 2 },
                feedback: `Remember each quadrat is ${num(qArea)} m², not 1 m² — divide habitat area by ${num(qArea)} before multiplying by the mean.`,
              },
            ],
            solution: [
              `Habitat area = {{${len} * ${wid} = ${area}}} m²; quadrat area = {{${num(qSide)} * ${num(qSide)} = ${num(qArea)}}} m².`,
              `Quadrat equivalents = {{${area} / ${num(qArea)} = ${area / qArea}}}.`,
              `Estimated population = {{${num(mean)} * ${area / qArea} = ${total}}} individuals.`,
            ],
          };
        }

        const species = rng.pick(MOTILE_SPECIES);
        const qCount = rng.pick([10, 12, 15, 20]);
        const len = rng.int(4, 12) * 5;
        const wid = rng.int(3, 8) * 5;
        const area = len * wid;
        const plant = rng.pick(SESSILE_SPECIES);
        const habitat = rng.pick(HABITATS);
        if (rng.bool(0.5)) {
          const mean = roundTo(rng.int(6, 20) * 0.5, 1);
          const sumCount = roundTo(mean * qCount, 0);
          const total = roundTo(mean * (area / 0.25), 0);
          return {
            prompt: `Ecologists place ${qCount} random 0.5 m × 0.5 m quadrats in a ${len} m × ${wid} m ${habitat} and count a *combined total* of ${sumCount} ${plant} across all ${qCount} quadrats. Estimate the total population.`,
            answer: { type: "number", value: total, tolerance: 2, display: `${total} individuals` },
            hint: "First divide the combined count by the number of quadrats to get the mean per 0.25 m² quadrat, then scale up.",
            traps: [
              {
                spec: { type: "number", value: total * qCount, tolerance: 10 },
                feedback: `You forgot to divide ${sumCount} by ${qCount} to get the mean count per quadrat first.`,
              },
            ],
            solution: [
              `Mean per quadrat = {{${sumCount} / ${qCount} = ${num(mean)}}}.`,
              `Scale factor = {{(${len} * ${wid}) / 0.25 = ${area * 4}}}.`,
              `Total population = {{${num(mean)} * ${area * 4} = ${total}}} individuals.`,
            ],
          };
        }

        const d1 = rng.int(3, 6);
        const d2 = rng.int(3, 6);
        const m = d1 * d2;
        const M = rng.int(4, 9) * d1 * 2;
        const n = rng.int(4, 9) * d2 * 2;
        const N = (M * n) / m;
        return {
          prompt: `During a mark–recapture study of ${species}, ${M} individuals are marked and released. In the second sample of ${n} individuals, ${m} carry marks. Estimate the total population of ${species}.`,
          answer: { type: "number", value: N, tolerance: 1, display: `${N} individuals` },
          hint: "Apply {{N = (M * n) / m}}.",
          solution: [
            `{{N = (${M} * ${n}) / ${m} = ${M * n} / ${m} = ${N}}} individuals.`,
          ],
        };
      }

      // Tier 3: Tag-loss Lincoln bias OR reverse Lincoln finding expected m
      const species = rng.pick(MOTILE_SPECIES);
      if (rng.bool(0.6)) {
        const lossPct = rng.pick([20, 25]);
        const keepFrac = (100 - lossPct) / 100; // 0.8 or 0.75
        const mUnbiased = lossPct === 20 ? rng.int(2, 6) * 5 : rng.int(2, 6) * 4; // divisible cleanly
        const mObs = roundTo(mUnbiased * keepFrac, 0);
        const k1 = rng.int(3, 6);
        const k2 = rng.int(3, 6);
        // Ensure (M * n) is divisible by mObs AND mUnbiased!
        // Let M = mObs * k1, n = mUnbiased * k2 -> N_true = M*n / mUnbiased = mObs * k1 * k2; N_biased = M*n / mObs = mUnbiased * k1 * k2!
        const M = mObs * k1;
        const n = mUnbiased * k2;
        const nTrue = mObs * k1 * k2;
        const nBiased = mUnbiased * k1 * k2;
        return {
          prompt: `A habitat truly holds ${nTrue} ${species}. Ecologists mark ${M} individuals and later catch ${n} individuals. Without tag loss, ${mUnbiased} would be marked, but ${lossPct}% of marks rub off so only ${mObs} marked recaptures are counted. Calculate the biased Lincoln index estimate.`,
          answer: { type: "number", value: nBiased, tolerance: 1, display: `${nBiased} individuals` },
          hint: "Plug the recorded values {{M}}, {{n}}, and reduced {{m}} into {{N = (M * n) / m}}.",
          traps: [
            {
              spec: { type: "number", value: roundTo(nTrue * keepFrac, 0), tolerance: 1 },
              feedback: "Losing marks lowers the denominator m, which *overestimates* N rather than underestimating it.",
            },
          ],
          solution: [
            `Recorded values: {{M = ${M}}}, {{n = ${n}}}, observed {{m = ${mObs}}}.`,
            `Biased Lincoln estimate: {{N = (${M} * ${n}) / ${mObs} = ${nBiased}}} individuals (an overestimate above the true ${nTrue}).`,
          ],
        };
      }

      const m = rng.int(6, 24);
      const k1 = rng.int(3, 7);
      const k2 = rng.int(3, 7);
      const M = m * k1;
      const n = m * k2;
      const N = m * k1 * k2;
      return {
        prompt: `A reserve is known to contain ${N} ${species}. If ecologists mark ${M} individuals initially and later capture a second random sample of ${n} individuals (with all Lincoln assumptions satisfied), how many marked ${species} ({{m}}) should they expect to recapture?`,
        answer: { type: "number", value: m, tolerance: 0.5, display: `${m} individuals` },
        hint: "Rearrange {{N = (M * n) / m}} to solve for {{m = (M * n) / N}}.",
        solution: [
          `Rearrange Lincoln's equation: {{m = (M * n) / N}}.`,
          `{{m = (${M} * ${n}) / ${N} = ${m}}} marked individuals.`,
        ],
      };
    },
  },

  {
    id: "c3-c4-interaction-organisms-ecosystems.chi-squared-association",
    topicId: "c3-c4-interaction-organisms-ecosystems",
    title: "2 × 2 Chi-Squared Expected Value & χ²",
    level: 2,
    ibLevel: "SL",
    guideRef: "populations-communities-chi",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const [spA, spB] = rng.pick(SPECIES_PAIRS);

      if (tier === 1) {
        const total = rng.pick([50, 80, 100, 120, 150, 200]);
        const rPct = rng.pick([30, 40, 50, 60, 70]);
        const cPct = rng.pick([20, 30, 40, 50, 60, 70, 80]);
        const rowA = roundTo((total * rPct) / 100, 0);
        const colB = roundTo((total * cPct) / 100, 0);
        const askBoth = rng.bool(0.65);
        const targetCol = askBoth ? colB : total - colB;
        const expected = roundTo((rowA * targetCol) / total, 1);
        const cellLabel = askBoth ? `both ${spA} and ${spB}` : `${spA} only (without ${spB})`;
        return {
          prompt: `Across ${total} random quadrats, ${spA} occur in ${rowA} quadrats and ${spB} occur in ${colB} quadrats. Under the null hypothesis of independence, calculate the expected number of quadrats containing ${cellLabel}.`,
          answer: { type: "number", value: expected, tolerance: 0.1, display: `${num(expected)} quadrats` },
          hint: askBoth
            ? "Use {{E = (" + '"row total"' + " * " + '"column total"' + ") / " + '"grand total"' + "}}."
            : `First find quadrats *without* ${spB} (${total} − ${colB} = ${targetCol}), then apply {{E = (row * col) / total}}.`,
          solution: [
            askBoth
              ? `Row total (${spA} present) = ${rowA}; Column total (${spB} present) = ${colB}; Grand total = ${total}.`
              : `Row total (${spA} present) = ${rowA}; Column total (${spB} absent) = {{${total} - ${colB} = ${targetCol}}}; Grand total = ${total}.`,
            `Expected frequency {{E = (${rowA} * ${targetCol}) / ${total} = ${num(expected)}}} quadrats.`,
          ],
        };
      }

      if (tier === 2) {
        // Symmetric 2x2 table: all margins = T/2, every E = T/4
        const total = rng.pick([40, 60, 80, 100, 120, 160, 200]);
        const E = total / 4; // exact integer: 10, 15, 20, 25, 30, 40, 50
        const maxShift = Math.min(E - 4, 18);
        const shift = rng.int(3, maxShift);
        const positive = rng.bool(0.5);
        const both = positive ? E + shift : E - shift;
        const aOnly = positive ? E - shift : E + shift;
        const bOnly = aOnly;
        const neither = both;
        const cellContrib = roundTo((shift * shift) / E, 4);
        const chi2 = roundTo(4 * ((shift * shift) / E), 2);
        const singleCellTrap = roundTo(cellContrib, 2);
        return {
          prompt: `In ${total} random quadrats, observed counts for ${spA} (A) and ${spB} (B) are: Both present = ${both}, A only = ${aOnly}, B only = ${bOnly}, Neither = ${neither}. Calculate the chi-squared test statistic ({{χ^2}}) to 2 decimal places.`,
          answer: { type: "number", value: chi2, tolerance: 0.05, display: `${num(chi2)}` },
          hint: `All four marginal totals equal ${total / 2}, so every cell has {{E = ${E}}} and {{|O - E| = ${shift}}}. Sum {{(O - E)^2 / E}} across all 4 cells.`,
          traps: [
            {
              spec: { type: "number", value: singleCellTrap, tolerance: 0.05 },
              feedback: `${num(singleCellTrap)} is the value for a single cell — sum across all four cells of the 2 × 2 table.`,
            },
          ],
          solution: [
            `Row and column totals are all ${total / 2} out of ${total}, so every cell has expected count {{E = (${total / 2} * ${total / 2}) / ${total} = ${E}}}.`,
            `In each cell, {{|O - E| = ${shift}}}, giving {{${shift}^2 / ${E} = ${num(roundTo((shift * shift) / E, 3))}}}.`,
            `Sum all 4 cells: {{χ^2 = 4 * (${shift * shift} / ${E}) = ${num(chi2)}}} (${chi2 > 3.841 ? "exceeds 3.841 → reject H₀" : "≤ 3.841 → fail to reject H₀"}).`,
          ],
        };
      }

      // Tier 3: Asymmetric 2x2 table with unequal margins
      const total = rng.pick([100, 200]);
      const scale = total / 100;
      const r1 = rng.pick([40, 60]) * scale;
      const r2 = total - r1;
      const c1 = rng.pick([40, 50, 60]) * scale;
      const c2 = total - c1;
      const e11 = (r1 * c1) / total;
      const e12 = (r1 * c2) / total;
      const e21 = (r2 * c1) / total;
      const e22 = (r2 * c2) / total;
      const minE = Math.min(e11, e12, e21, e22);
      const shift = rng.int(3, Math.min(12, minE - 5));
      const positive = rng.bool(0.5);
      const o11 = positive ? e11 + shift : e11 - shift;
      const o12 = positive ? e12 - shift : e12 + shift;
      const o21 = positive ? e21 - shift : e21 + shift;
      const o22 = positive ? e22 + shift : e22 - shift;
      const t1 = (shift * shift) / e11;
      const t2 = (shift * shift) / e12;
      const t3 = (shift * shift) / e21;
      const t4 = (shift * shift) / e22;
      const chi2 = roundTo(t1 + t2 + t3 + t4, 2);
      return {
        prompt: `In ${total} random quadrats, observed counts for ${spA} (A) and ${spB} (B) are: Both present = ${o11}, A only = ${o12}, B only = ${o21}, Neither = ${o22}. Calculate the chi-squared statistic ({{χ^2}}) to 2 decimal places.`,
        answer: { type: "number", value: chi2, tolerance: 0.05, display: `${num(chi2)}` },
        hint: `Find unequal marginal totals (A present = ${r1}, A absent = ${r2}; B present = ${c1}, B absent = ${c2}), compute each cell's E, and sum {{(O - E)^2 / E}}.`,
        solution: [
          `Marginal totals: A present = ${r1}, A absent = ${r2}; B present = ${c1}, B absent = ${c2} (total = ${total}).`,
          `Expected counts: Both = ${e11}, A only = ${e12}, B only = ${e21}, Neither = ${e22}; every cell has {{|O - E| = ${shift}}}.`,
          `{{χ^2 = ${shift * shift}/${e11} + ${shift * shift}/${e12} + ${shift * shift}/${e21} + ${shift * shift}/${e22} = ${num(chi2)}}}.`,
        ],
      };
    },
  },

  {
    id: "c3-c4-interaction-organisms-ecosystems.energy-productivity-carbon",
    topicId: "c3-c4-interaction-organisms-ecosystems",
    title: "NPP/GPP, Trophic Efficiency & Carbon Flux",
    level: 2,
    ibLevel: "SL",
    guideRef: "transfers-energy-matter",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const biome = rng.pick(BIOMES);

      if (tier === 1) {
        if (rng.bool(0.5)) {
          const gpp = rng.int(12, 48) * 500; // 6,000..24,000
          const rPct = rng.int(40, 68);
          const resp = roundTo((gpp * rPct) / 100, 0);
          const npp = gpp - resp;
          return {
            prompt: `In a ${biome}, producers have a gross primary productivity (GPP) of ${big(gpp)} kJ m⁻² yr⁻¹ and lose ${big(resp)} kJ m⁻² yr⁻¹ in autotrophic respiration. Calculate the net primary productivity (NPP) in kJ m⁻² yr⁻¹.`,
            answer: { type: "number", value: npp, tolerance: 1, display: `${npp} kJ m⁻² yr⁻¹` },
            hint: "Use {{NPP = GPP - R}}.",
            traps: [
              {
                spec: { type: "number", value: gpp + resp, tolerance: 2 },
                feedback: "Autotrophic respiration is lost as heat — subtract R from GPP rather than adding them.",
              },
            ],
            solution: [
              `Apply {{NPP = GPP - R = ${gpp} - ${resp} = ${npp}}} kJ m⁻² yr⁻¹.`,
            ],
          };
        }

        const npp = rng.int(10, 40) * 500; // 5,000..20,000
        const eff = rng.int(6, 18); // exact integer %
        const t2 = roundTo((npp * eff) / 100, 0);
        return {
          prompt: `In a ${biome}, producer NPP is ${big(npp)} kJ m⁻² yr⁻¹ and primary consumers accumulate ${big(t2)} kJ m⁻² yr⁻¹ of new biomass. Calculate the percentage trophic energy-transfer efficiency.`,
          answer: { type: "number", value: eff, tolerance: 0.1, display: `${eff}%` },
          hint: "Compute {{(T_2 / T_1) * 100}}.",
          solution: [
            `Trophic efficiency = {{(${t2} / ${npp}) * 100 = ${eff}}}%.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const npp = rng.int(10, 45) * 1000;
          const e1 = rng.pick([8, 10, 12, 14, 15, 16]);
          const e2 = rng.pick([5, 8, 10, 12, 15]);
          const t2 = roundTo((npp * e1) / 100, 0);
          const t3 = roundTo((t2 * e2) / 100, 1);
          return {
            prompt: `In a ${biome}, producer NPP is ${big(npp)} kJ m⁻² yr⁻¹. Energy transfer efficiency is ${e1}% from producers to primary consumers and ${e2}% from primary to secondary consumers. Calculate the energy reaching secondary consumers in kJ m⁻² yr⁻¹.`,
            answer: { type: "number", value: t3, tolerance: 0.5, display: `${num(t3)} kJ m⁻² yr⁻¹` },
            hint: "Multiply sequentially: first take the primary efficiency, then take the secondary efficiency of that result.",
            solution: [
              `Primary consumers: {{${npp} * ${num(e1 / 100)} = ${t2}}} kJ m⁻² yr⁻¹.`,
              `Secondary consumers: {{${t2} * ${num(e2 / 100)} = ${num(t3)}}} kJ m⁻² yr⁻¹.`,
            ],
          };
        }

        if (mode === 1) {
          const ingested = rng.int(12, 40) * 100;
          const faeces = rng.int(3, 10) * 100;
          const assim = ingested - faeces;
          const resp = roundTo((assim * rng.int(55, 80)) / 100, 0);
          const nsp = assim - resp;
          return {
            prompt: `Herbivores in a ${biome} ingest ${big(ingested)} kJ m⁻² yr⁻¹ of plant tissue, egest ${big(faeces)} kJ m⁻² yr⁻¹ in faeces, and lose ${big(resp)} kJ m⁻² yr⁻¹ via cellular respiration. Calculate their net secondary productivity in kJ m⁻² yr⁻¹.`,
            answer: { type: "number", value: nsp, tolerance: 1, display: `${nsp} kJ m⁻² yr⁻¹` },
            hint: "Subtract both faeces (egestion) and respiration from ingested energy.",
            traps: [
              {
                spec: { type: "number", value: assim, tolerance: 1 },
                feedback: `${big(assim)} kJ m⁻² yr⁻¹ is assimilated energy — remember to subtract respiration (${big(resp)}) too.`,
              },
            ],
            solution: [
              `Assimilated energy = {{${ingested} - ${faeces} = ${assim}}} kJ m⁻² yr⁻¹.`,
              `Net secondary productivity = {{${assim} - ${resp} = ${nsp}}} kJ m⁻² yr⁻¹.`,
            ],
          };
        }

        // Carbon flux balance (signed net uptake)
        const photo = roundTo(rng.int(60, 160) * 0.1, 1); // 6.0..16.0 Gt C yr⁻¹
        const rAuto = roundTo(photo * rng.pick([0.45, 0.5, 0.55]), 2);
        const rSoil = roundTo(rng.int(25, 75) * 0.1, 1);
        const fire = roundTo(rng.int(0, 25) * 0.1, 1);
        const totalOut = roundTo(rAuto + rSoil + fire, 2);
        const net = roundTo(photo - totalOut, 2);
        return {
          prompt: `A regional ${biome} absorbs ${num(photo)} Gt C yr⁻¹ by photosynthesis while releasing ${num(rAuto)} Gt C yr⁻¹ via plant respiration, ${num(rSoil)} Gt C yr⁻¹ via soil decomposition, and ${num(fire)} Gt C yr⁻¹ from wildfires. Calculate the net carbon uptake (photosynthesis minus total release) in Gt C yr⁻¹ (use a minus sign if net source).`,
          answer: { type: "number", value: net, tolerance: 0.05, display: num(net) },
          hint: "Sum all three carbon-release pathways first, then subtract that sum from photosynthetic uptake.",
          solution: [
            `Total carbon release = {{${num(rAuto)} + ${num(rSoil)} + ${num(fire)} = ${num(totalOut)}}} Gt C yr⁻¹.`,
            `Net carbon uptake = {{${num(photo)} - ${num(totalOut)} = ${num(net)}}} Gt C yr⁻¹ (${net >= 0 ? "net carbon sink" : "net carbon source"}).`,
          ],
        };
      }

      // Tier 3: Reverse pyramid to find required producer GPP!
      const gpp = rng.int(10, 45) * 2000; // 20,000..90,000
      const respPct = rng.pick([50, 60]);
      const nppPct = 100 - respPct; // 50% or 40%
      const npp = roundTo((gpp * nppPct) / 100, 0);
      const e1 = rng.pick([10, 12, 15, 20]);
      const e2 = rng.pick([5, 8, 10]);
      const t2 = roundTo((npp * e1) / 100, 0);
      const t3 = roundTo((t2 * e2) / 100, 1);
      return {
        prompt: `In a ${biome}, secondary predators require ${num(t3)} kJ m⁻² yr⁻¹. Trophic transfer efficiencies are ${e1}% (producer NPP → primary consumers) and ${e2}% (primary → secondary consumers). Producers lose ${respPct}% of their GPP to autotrophic respiration. Calculate the minimum producer GPP required in kJ m⁻² yr⁻¹.`,
        answer: { type: "number", value: gpp, tolerance: 10, display: `${gpp} kJ m⁻² yr⁻¹` },
        hint: `Work backwards: divide by ${num(e2 / 100)}, then by ${num(e1 / 100)} to get NPP, then divide by ${num(nppPct / 100)} (since NPP is ${nppPct}% of GPP).`,
        traps: [
          {
            spec: { type: "number", value: npp, tolerance: 5 },
            feedback: `${big(npp)} kJ m⁻² yr⁻¹ is the required *NPP* — remember ${respPct}% of GPP is respired, so divide NPP by ${num(nppPct / 100)} to get GPP.`,
          },
        ],
        solution: [
          `Primary consumer energy needed = {{${num(t3)} / ${num(e2 / 100)} = ${t2}}} kJ m⁻² yr⁻¹.`,
          `Producer NPP needed = {{${t2} / ${num(e1 / 100)} = ${npp}}} kJ m⁻² yr⁻¹.`,
          `Since ${respPct}% of GPP is respired, {{NPP = ${num(nppPct / 100)} * GPP}} → {{GPP = ${npp} / ${num(nppPct / 100)} = ${gpp}}} kJ m⁻² yr⁻¹.`,
        ],
      };
    },
  },
];
