import type { Drill } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

const ENZYMES = ["catalase", "salivary amylase", "pepsin", "trypsin", "lactase", "lipase"] as const;
const PIGMENTS = ["chlorophyll a", "chlorophyll b", "xanthophyll", "β-carotene", "phaeophytin"] as const;
const SEEDS = ["germinating peas", "germinating barley seeds", "mung-bean seedlings", "woodlice"] as const;

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: ENZYME INITIAL RATES & % INHIBITION (SL, Level 1)
  // =========================================================================
  {
    id: "c1-c2-interaction-molecules-cells.enzyme-rates-inhibition",
    topicId: "c1-c2-interaction-molecules-cells",
    title: "Enzyme Initial Rates & % Inhibition",
    level: 1,
    ibLevel: "SL",
    guideRef: "enzymes-metabolism",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // Initial rate in cm³ min⁻¹ from volume in clean time (15, 30, 45, 60 s)
          const secs = rng.pick([15, 30, 45, 60] as const);
          const mins = roundTo(secs / 60, 2);
          const rate = rng.int(8, 60);
          const vol = roundTo(rate * mins, 2);
          const enzyme = rng.pick(["catalase", "yeast catalase", "potato catalase"] as const);
          const perSecTrap = roundTo(vol / secs, 2);
          return {
            prompt: `During an assay of ${enzyme} at 37 °C, ${num(vol)} cm³ of oxygen is collected in the first ${secs} s. Calculate the initial rate in {{cm^3 min^(-1)}}.`,
            answer: { type: "number", value: rate, tolerance: 0.1, display: `${rate} cm³ min⁻¹` },
            hint: `Convert ${secs} s to minutes (${secs} ÷ 60), then divide ${num(vol)} cm³ by the time in minutes.`,
            solution: [
              `Convert time to minutes: {{${secs} / 60 = ${num(mins)} min}}.`,
              `Initial rate: {{${num(vol)} / ${num(mins)} = ${rate} cm^3 min^(-1)}}.`,
            ],
            traps:
              Math.abs(perSecTrap - rate) > 1
                ? [
                    {
                      spec: { type: "number", value: perSecTrap, tolerance: 0.05 },
                      feedback: "That is the rate in cm³ s⁻¹ — multiply by 60 to convert to cm³ min⁻¹.",
                    },
                  ]
                : undefined,
          };
        } else {
          // Simple % inhibition with clean denominator 20, 25, 40, 50, 100
          const v0 = rng.pick([20, 25, 40, 50, 80, 100] as const);
          const pct = rng.int(3, 17) * 5; // 15% to 85% in steps of 5%
          const vi = roundTo(v0 * (1 - pct / 100), 2);
          const enzyme = rng.pick(ENZYMES);
          const remaining = 100 - pct;
          return {
            prompt: `An assay of ${enzyme} gives an uninhibited rate of ${v0} μmol min⁻¹. Adding an inhibitor reduces the rate to ${num(vi)} μmol min⁻¹ under identical conditions. Calculate the percentage inhibition.`,
            answer: { type: "number", value: pct, tolerance: 0.1, display: `${pct}%` },
            hint: "Use % inhibition = ((v₀ − vᵢ) / v₀) × 100.",
            solution: [
              `Decrease in rate: {{${v0} - ${num(vi)} = ${num(roundTo(v0 - vi, 2))}}} μmol min⁻¹.`,
              `Percentage inhibition: {{(${num(roundTo(v0 - vi, 2))} / ${v0}) * 100 = ${pct}%}}.`,
            ],
            traps:
              remaining !== pct
                ? [
                    {
                      spec: { type: "number", value: remaining, tolerance: 0.1 },
                      feedback: `${remaining}% is the remaining activity — subtract from 100% for percentage inhibition.`,
                    },
                  ]
                : undefined,
          };
        }
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // Rate conversion with wider clean times (12, 24, 36, 48, 75, 90 s)
          const secs = rng.pick([12, 24, 36, 48, 75, 90] as const);
          const mins = roundTo(secs / 60, 2);
          const rate = rng.int(15, 95);
          const mass = roundTo(rate * mins, 2);
          const enzyme = rng.pick(["salivary amylase", "pepsin", "trypsin", "lactase"] as const);
          const perSecTrap = roundTo(mass / secs, 2);
          return {
            prompt: `At its optimum pH, ${enzyme} breaks down ${num(mass)} mg of substrate in ${secs} s. Calculate the initial rate in {{mg min^(-1)}} (enter the number only).`,
            answer: { type: "number", value: rate, tolerance: 0.15, display: `${rate}` },
            hint: `Convert ${secs} s into minutes first (${secs} / 60 = ${num(mins)} min).`,
            solution: [
              `Time in minutes: {{${secs} / 60 = ${num(mins)} min}}.`,
              `Initial rate: {{${num(mass)} / ${num(mins)} = ${rate}}} mg min⁻¹.`,
            ],
            traps:
              Math.abs(perSecTrap - rate) > 1
                ? [
                    {
                      spec: { type: "number", value: perSecTrap, tolerance: 0.05 },
                      feedback: "Remember to convert seconds into minutes (multiply rate per second by 60).",
                    },
                  ]
                : undefined,
          };
        } else {
          // Two-step: volumes collected in same time t → % inhibition
          const secs = rng.pick([30, 40, 45, 50, 60] as const);
          const v0 = rng.int(6, 20) * 5; // 30..100 cm³
          const pct = rng.int(4, 16) * 5; // 20..80%
          const vi = roundTo(v0 * (1 - pct / 100), 2);
          const remaining = 100 - pct;
          return {
            prompt: `Catalase releases ${v0} cm³ of O₂ in ${secs} s without inhibitor, and ${num(vi)} cm³ of O₂ in ${secs} s when a non-competitive inhibitor is added. Calculate the percentage inhibition.`,
            answer: { type: "number", value: pct, tolerance: 0.1, display: `${pct}%` },
            hint: "Because both volumes are measured over the exact same time, the ratio of volumes equals the ratio of rates.",
            solution: [
              `Drop in product over ${secs} s: {{${v0} - ${num(vi)} = ${num(roundTo(v0 - vi, 2))}}} cm³.`,
              `Percentage inhibition: {{(${num(roundTo(v0 - vi, 2))} / ${v0}) * 100 = ${pct}%}}.`,
            ],
            traps:
              remaining !== pct
                ? [
                    {
                      spec: { type: "number", value: remaining, tolerance: 0.1 },
                      feedback: `${remaining}% is the fraction of activity still remaining, not the percentage inhibited.`,
                    },
                  ]
                : undefined,
          };
        }
      }

      // Tier 3: Michaelis-Menten rate & competitive/non-competitive % inhibition
      const mode = rng.int(0, 1);
      if (mode === 0) {
        // Competitive inhibitor raises Km -> Km' at given [S]
        const km = rng.pick([5, 10, 15, 20] as const);
        const s = rng.pick([10, 15, 20, 30, 40] as const);
        const mult = rng.pick([2, 3, 4] as const);
        const kmApp = km * mult;
        const vmax = rng.pick([60, 80, 100, 120, 150] as const);
        const v0 = (vmax * s) / (km + s);
        const vi = (vmax * s) / (kmApp + s);
        const pct = roundTo(((v0 - vi) / v0) * 100, 1);
        const rem = roundTo(100 - pct, 1);
        return {
          prompt: `An enzyme follows {{v = (V_max * [S]) / (K_m + [S])}} with {{V_max = ${vmax}}} μmol min⁻¹ and {{K_m = ${km}}} mmol dm⁻³. A competitive inhibitor raises apparent {{K_m}} to ${kmApp} mmol dm⁻³ without changing {{V_max}}. Calculate the percentage inhibition at {{[S] = ${s}}} mmol dm⁻³ to 1 decimal place.`,
          answer: { type: "number", value: pct, tolerance: 0.15, display: `${num(pct)}%` },
          hint: "Compute both v₀ (using Km) and vᵢ (using apparent Km) at [S], then apply ((v₀ − vᵢ) / v₀) × 100.",
          solution: [
            `Uninhibited rate: {{v_0 = (${vmax} * ${s}) / (${km} + ${s}) = ${num(roundTo(v0, 2))}}} μmol min⁻¹.`,
            `Competitive rate: {{v_i = (${vmax} * ${s}) / (${kmApp} + ${s}) = ${num(roundTo(vi, 2))}}} μmol min⁻¹.`,
            `Percentage inhibition: {{((${num(roundTo(v0, 2))} - ${num(roundTo(vi, 2))}) / ${num(roundTo(v0, 2))}) * 100 = ${num(pct)}%}}.`,
          ],
          traps:
            Math.abs(rem - pct) > 1
              ? [
                  {
                    spec: { type: "number", value: rem, tolerance: 0.15 },
                    feedback: `${num(rem)}% is the remaining activity — subtract from 100% for percentage inhibition.`,
                  },
                ]
              : undefined,
        };
      } else {
        // Non-competitive inhibitor halves/reduces Vmax at saturating [S] → find inhibited rate v_i
        const vmax = rng.int(6, 20) * 10; // 60..200
        const pct = rng.int(3, 15) * 5; // 15..75%
        const km = rng.pick([5, 10, 20] as const);
        const s = rng.pick([10, 20, 30, 40] as const);
        const vmaxApp = roundTo(vmax * (1 - pct / 100), 2);
        const vi = roundTo((vmaxApp * s) / (km + s), 1);
        const v0 = roundTo((vmax * s) / (km + s), 1);
        return {
          prompt: `An enzyme has {{V_max = ${vmax}}} μmol min⁻¹ and {{K_m = ${km}}} mmol dm⁻³. A pure non-competitive inhibitor lowers {{V_max}} by ${pct}% while leaving {{K_m}} unchanged. Using {{v = (V_max * [S]) / (K_m + [S])}}, calculate the inhibited rate at {{[S] = ${s}}} mmol dm⁻³ to 1 decimal place (number only).`,
          answer: { type: "number", value: vi, tolerance: 0.15, display: `${num(vi)}` },
          hint: `First reduce Vmax by ${pct}% to find apparent Vmax = ${num(vmaxApp)}, then substitute into the Michaelis–Menten equation.`,
          solution: [
            `Apparent {{V_max = ${vmax} * (1 - ${num(clean(pct / 100))}) = ${num(vmaxApp)}}} μmol min⁻¹.`,
            `Substitute {{[S] = ${s}}} and unchanged {{K_m = ${km}}}: {{v_i = (${num(vmaxApp)} * ${s}) / (${km} + ${s}) = ${num(vi)}}} μmol min⁻¹.`,
          ],
          traps:
            Math.abs(v0 - vi) > 1
              ? [
                  {
                    spec: { type: "number", value: v0, tolerance: 0.15 },
                    feedback: "That is the uninhibited rate — remember to reduce Vmax by the given percentage first.",
                  },
                ]
              : undefined,
        };
      }
    },
  },

  // =========================================================================
  // DRILL 2: CHROMATOGRAPHY Rf, RESPIROMETER & BIOENERGETICS (SL, Level 2)
  // =========================================================================
  {
    id: "c1-c2-interaction-molecules-cells.respiration-photosynthesis-math",
    topicId: "c1-c2-interaction-molecules-cells",
    title: "Chromatography Rf, Respirometers & Bioenergetics",
    level: 2,
    ibLevel: "SL",
    guideRef: "cell-respiration-photosynthesis",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Chromatography Rf
          const solvent = rng.pick([5.0, 8.0, 10.0, 12.0, 12.5, 16.0] as const);
          const rfHundredths = rng.int(22, 94);
          const rf = roundTo(rfHundredths / 100, 2);
          const pigDist = roundTo(solvent * rf, 2);
          const realRf = roundTo(pigDist / solvent, 2);
          const pigment = rng.pick(PIGMENTS);
          const invTrap = roundTo(solvent / pigDist, 2);
          return {
            prompt: `On a leaf chromatogram, ${pigment} travels ${num(pigDist)} cm from the origin line while the solvent front travels ${num(solvent)} cm. Calculate the {{R_f}} value of ${pigment} to 2 decimal places.`,
            answer: { type: "number", value: realRf, tolerance: 0.01, display: `${realRf.toFixed(2)}` },
            hint: "Rf = (distance moved by pigment) ÷ (distance moved by solvent front).",
            solution: [
              `Apply {{R_f = d_pigment / d_solvent}}.`,
              `{{R_f = ${num(pigDist)} / ${num(solvent)} = ${realRf.toFixed(2)}}} (unitless).`,
            ],
            traps: [
              {
                spec: { type: "number", value: invTrap, tolerance: 0.02 },
                feedback: "Inverted ratio! Pigment distance goes in the numerator so Rf is always strictly less than 1.",
              },
            ],
          };
        } else if (mode === 1) {
          // Net vs Gross photosynthesis
          const resp = roundTo(rng.int(12, 55) / 10, 1); // 1.2..5.5
          const net = roundTo(rng.int(65, 280) / 10, 1); // 6.5..28.0
          const gross = roundTo(net + resp, 1);
          const wrongSub = roundTo(net - resp, 1);
          return {
            prompt: `In bright light, a pondweed shoot produces oxygen at a net rate of ${num(net)} mm³ min⁻¹. In darkness at the same temperature, it consumes oxygen at ${num(resp)} mm³ min⁻¹. Calculate the gross rate of photosynthesis in {{mm^3 min^(-1)}} (number only).`,
            answer: { type: "number", value: gross, tolerance: 0.1, display: `${num(gross)}` },
            hint: "Gross photosynthesis = Net oxygen release + Respiration oxygen uptake.",
            solution: [
              `Plants respire continuously in both light and dark.`,
              `{{Gross = ${num(net)} + ${num(resp)} = ${num(gross)}}} mm³ min⁻¹.`,
            ],
            traps: [
              {
                spec: { type: "number", value: wrongSub, tolerance: 0.1 },
                feedback: "Add respiration rather than subtracting: chloroplasts must supply the O₂ used by respiration PLUS the net O₂ released.",
              },
            ],
          };
        } else {
          // Yeast anaerobic vs aerobic CO2 stoichiometry
          const mol = rng.int(2, 18);
          const aerobic = rng.bool();
          const ans = aerobic ? mol * 6 : mol * 2;
          const wrongAlt = aerobic ? mol * 2 : mol * 6;
          return {
            prompt: aerobic
              ? `During complete aerobic respiration, how many moles of {{CO_2}} are produced from ${mol} moles of glucose ({{C_6H_12O_6}})?`
              : `During anaerobic fermentation in yeast, how many moles of {{CO_2}} are released from ${mol} moles of glucose ({{C_6H_12O_6}})?`,
            answer: { type: "number", value: ans, display: `${ans}` },
            hint: aerobic
              ? "Balanced aerobic respiration releases 6 CO₂ per glucose."
              : "Yeast fermentation converts 1 glucose → 2 ethanol + 2 CO₂.",
            solution: [
              aerobic
                ? `Aerobic stoichiometry: 1 glucose → 6 {{CO_2}}.`
                : `Yeast anaerobic stoichiometry: 1 glucose → 2 ethanol + 2 {{CO_2}}.`,
              `Total {{CO_2}}: {{${mol} * ${aerobic ? 6 : 2} = ${ans}}} moles.`,
            ],
            traps: [
              {
                spec: { type: "number", value: wrongAlt },
                feedback: aerobic
                  ? "2 CO₂ per glucose is anaerobic yeast fermentation; complete aerobic respiration releases 6 CO₂ per glucose."
                  : "6 CO₂ per glucose is complete aerobic respiration; anaerobic yeast fermentation releases only 2 CO₂ per glucose.",
              },
            ],
          };
        }
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // Respirometer rate V = A * d / (t * m)
          const area = rng.pick([1.0, 1.5, 2.0, 2.5] as const);
          const time = rng.pick([10, 12, 15, 20] as const);
          const mass = rng.pick([2.0, 2.5, 4.0, 5.0] as const);
          const dist = rng.int(12, 60);
          const vol = roundTo(area * dist, 2);
          const rate = roundTo(vol / (time * mass), 2);
          const noMassTrap = roundTo(vol / time, 2);
          const org = rng.pick(SEEDS);
          return {
            prompt: `A respirometer holding ${num(mass)} g of ${org} and KOH has a capillary of cross-sectional area ${num(area)} mm². In ${time} min, the meniscus moves ${dist} mm. Calculate the O₂ uptake rate in {{mm^3 g^(-1) min^(-1)}} to 2 decimal places (number only).`,
            answer: { type: "number", value: rate, tolerance: 0.02, display: `${num(rate)}` },
            hint: "First compute O₂ volume = area × distance, then divide by (time × mass).",
            solution: [
              `O₂ volume consumed: {{V = ${num(area)} * ${dist} = ${num(vol)} mm^3}}.`,
              `Rate per gram per minute: {{${num(vol)} / (${time} * ${num(mass)}) = ${num(rate)}}} mm³ g⁻¹ min⁻¹.`,
            ],
            traps:
              Math.abs(noMassTrap - rate) > 0.1
                ? [
                    {
                      spec: { type: "number", value: noMassTrap, tolerance: 0.05 },
                      feedback: `You divided by time (${time} min) but forgot to divide by mass (${num(mass)} g).`,
                    },
                  ]
                : undefined,
          };
        } else {
          // Aerobic cellular respiration HL/bridge exact stoichiometry per N glucose
          const n = rng.int(2, 12);
          const stage = rng.pick([
            { label: "glycolysis, link reaction, and Krebs cycle combined", item: "NADH", perGlu: 10 },
            { label: "the Krebs cycle alone", item: "NADH", perGlu: 6 },
            { label: "the Krebs cycle alone", item: "FADH₂", perGlu: 2 },
            { label: "the Krebs cycle alone", item: "CO₂", perGlu: 4 },
            { label: "the link reaction alone", item: "CO₂", perGlu: 2 },
          ] as const);
          const ans = n * stage.perGlu;
          const halfTrap = n * (stage.perGlu / 2);
          return {
            prompt: `When ${n} molecules of glucose undergo complete aerobic respiration, how many molecules of ${stage.item} are produced in total during ${stage.label}?`,
            answer: { type: "number", value: ans, display: `${ans}` },
            hint: `Remember that 1 glucose forms 2 pyruvates (2 turns of link & Krebs). Find the yield per 1 glucose first, then multiply by ${n}.`,
            solution: [
              `Per 1 glucose in ${stage.label}: {{${stage.perGlu}}} ${stage.item}.`,
              `For ${n} glucose molecules: {{${n} * ${stage.perGlu} = ${ans}}} ${stage.item}.`,
            ],
            traps:
              Number.isInteger(halfTrap) && halfTrap !== ans
                ? [
                    {
                      spec: { type: "number", value: halfTrap },
                      feedback: "Remember to double per-pyruvate yields — every glucose molecule yields TWO pyruvates.",
                    },
                  ]
                : undefined,
          };
        }
      }

      // Tier 3: Respirometer cylinder radius (V = pi r^2 d) OR Calvin cycle ATP/NADPH budget
      const mode = rng.int(0, 1);
      if (mode === 0) {
        const dia = rng.pick([1.0, 1.2, 1.4, 1.6, 2.0] as const);
        const r = clean(dia / 2);
        const dist = rng.int(15, 50);
        const time = rng.pick([10, 15, 20, 25] as const);
        const mass = rng.pick([2.0, 4.0, 5.0] as const);
        const vol = Math.PI * r * r * dist;
        const rate = roundTo(vol / (time * mass), 2);
        const diaTrap = roundTo((Math.PI * dia * dia * dist) / (time * mass), 2);
        return {
          prompt: `A respirometer with ${num(mass)} g of germinating seeds and KOH uses a capillary tube of internal diameter ${num(dia)} mm. Over ${time} min, the droplet advances ${dist} mm. Using {{pi = 3.142}}, calculate O₂ uptake in {{mm^3 g^(-1) min^(-1)}} to 2 decimal places (number only).`,
          answer: { type: "number", value: rate, tolerance: 0.02, display: `${num(rate)}` },
          hint: `Halve the diameter to get radius r = ${num(r)} mm, compute V = π r² d, then divide by (time × mass).`,
          solution: [
            `Radius: {{r = ${num(dia)} / 2 = ${num(r)} mm}}.`,
            `O₂ volume: {{V = 3.142 * (${num(r)})^2 * ${dist} = ${num(roundTo(vol, 2))} mm^3}}.`,
            `Rate: {{${num(roundTo(vol, 2))} / (${time} * ${num(mass)}) = ${num(rate)}}} mm³ g⁻¹ min⁻¹.`,
          ],
          traps:
            Math.abs(diaTrap - rate) > 0.1
              ? [
                  {
                    spec: { type: "number", value: diaTrap, tolerance: 0.04 },
                    feedback: `You plugged diameter (${num(dia)} mm) into π r² d instead of radius (${num(r)} mm)!`,
                  },
                ]
              : undefined,
        };
      } else {
        const askATP = rng.bool();
        const co2 = rng.int(3, 20) * 3; // 9..60 CO2 (multiples of 3)
        const ans = askATP ? co2 * 3 : co2 * 2;
        const trapVal = askATP ? co2 * 2 : co2 * 3;
        return {
          prompt: `In the chloroplast Calvin cycle, RuBisCO fixes ${co2} molecules of {{CO_2}} continuously. How many total molecules of ${askATP ? "ATP (reduction + RuBP regeneration)" : "NADPH"} are consumed?`,
          answer: { type: "number", value: ans, display: `${ans}` },
          hint: askATP
            ? "Fixing 3 CO₂ consumes 6 ATP for reduction plus 3 ATP for RuBP regeneration = 9 ATP (3 ATP per CO₂)."
            : "Fixing 3 CO₂ consumes 6 NADPH during GP → TP reduction (2 NADPH per CO₂).",
          solution: [
            askATP
              ? `Every 3 {{CO_2}} fixed consumes 9 ATP (3 ATP per {{CO_2}}).`
              : `Every 3 {{CO_2}} fixed consumes 6 NADPH (2 NADPH per {{CO_2}}).`,
            `Total consumed: {{${co2} * ${askATP ? 3 : 2} = ${ans}}}.`,
          ],
          traps: [
            {
              spec: { type: "number", value: trapVal },
              feedback: askATP
                ? "That counts only the 2 ATP per CO₂ for GP reduction (or NADPH); include the extra 1 ATP per CO₂ for RuBP regeneration!"
                : "That is the total ATP count (3 per CO₂); Calvin cycle consumes 2 NADPH per CO₂ fixed.",
            },
          ],
        };
      }
    },
  },

  // =========================================================================
  // DRILL 3: NEURAL CONDUCTION SPEED, DELAY & POTENTIALS (SL, Level 1)
  // =========================================================================
  {
    id: "c1-c2-interaction-molecules-cells.neural-conduction-potentials",
    topicId: "c1-c2-interaction-molecules-cells",
    title: "Neural Conduction Speed & Membrane Potentials",
    level: 1,
    ibLevel: "SL",
    guideRef: "neural-signaling",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Conduction time t = d / v in ms
          const speed = rng.pick([40, 50, 60, 75, 80, 100] as const);
          const timeMs = rng.int(6, 30);
          const dist = roundTo((speed * timeMs) / 1000, 3);
          const secTrap = roundTo(timeMs / 1000, 4);
          return {
            prompt: `A myelinated motor axon is ${num(dist)} m long and conducts action potentials at {{${speed} m s^(-1)}}. Calculate the conduction time in milliseconds (ms).`,
            answer: { type: "number", value: timeMs, tolerance: 0.1, display: `${timeMs} ms` },
            hint: "Use t = d / v in seconds, then multiply by 1000 to convert to ms.",
            solution: [
              `Time in seconds: {{t = ${num(dist)} / ${speed} = ${num(secTrap)} s}}.`,
              `Convert to milliseconds: {{${num(secTrap)} * 1000 = ${timeMs} ms}}.`,
            ],
            traps: [
              {
                spec: { type: "number", value: secTrap, tolerance: 0.001 },
                feedback: "That is the time in seconds — multiply by 1000 to convert to milliseconds.",
              },
            ],
          };
        } else if (mode === 1) {
          // Speed v = d / t
          const v = roundTo(rng.int(8, 30) / 10, 1); // 0.8..3.0 m/s unmyelinated
          const t = roundTo(rng.int(2, 12) / 10, 1); // 0.2..1.2 s
          const d = roundTo(v * t, 2);
          return {
            prompt: `An unmyelinated sensory fibre transmits an impulse over ${num(d)} m in ${num(t)} s. Calculate its conduction velocity in {{m s^(-1)}}.`,
            answer: { type: "number", value: v, tolerance: 0.05, display: `${num(v)} m s⁻¹` },
            hint: "Conduction velocity v = distance ÷ time.",
            solution: [
              `{{v = d / t = ${num(d)} / ${num(t)} = ${num(v)} m s^(-1)}}.`,
            ],
          };
        } else {
          // Depolarization swing ΔV from rest to peak
          const rest = -rng.int(65, 78);
          const peak = rng.int(25, 42);
          const swing = peak - rest;
          const wrongSub = Math.abs(rest) - peak;
          return {
            prompt: `During an action potential, an axon depolarizes from a resting potential of ${num(rest)} mV to a peak of +${peak} mV. Calculate the total magnitude of this voltage change in mV.`,
            answer: { type: "number", value: swing, tolerance: 0.1, display: `${swing} mV` },
            hint: "Subtract the negative resting potential from the positive peak: V_peak − V_rest.",
            solution: [
              `{{ΔV = +${peak} - (${num(rest)}) = ${swing} mV}}.`,
            ],
            traps: [
              {
                spec: { type: "number", value: wrongSub },
                feedback: "Remember to add across 0 mV: subtracting a negative resting potential adds its magnitude.",
              },
            ],
          };
        }
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // Axon + n synapses total latency
          const speed = rng.pick([50, 60, 75, 80, 100] as const);
          const axonMs = rng.int(8, 25);
          const dist = roundTo((speed * axonMs) / 1000, 3);
          const nSyn = rng.int(1, 4);
          const synDelay = roundTo(rng.int(5, 12) / 10, 1); // 0.5..1.2 ms
          const total = roundTo(axonMs + nSyn * synDelay, 2);
          return {
            prompt: `An impulse travels ${num(dist)} m along a myelinated neuron at {{${speed} m s^(-1)}} and crosses ${nSyn} chemical synapse${nSyn > 1 ? "s" : ""}, each adding a ${num(synDelay)} ms delay. Calculate the total transmission time in ms.`,
            answer: { type: "number", value: total, tolerance: 0.05, display: `${num(total)} ms` },
            hint: "Find axonal travel time in ms, then add (number of synapses × synaptic delay).",
            solution: [
              `Axonal time: {{(${num(dist)} / ${speed}) * 1000 = ${axonMs} ms}}.`,
              `Synaptic delay: {{${nSyn} * ${num(synDelay)} = ${num(roundTo(nSyn * synDelay, 2))} ms}}.`,
              `Total time: {{${axonMs} + ${num(roundTo(nSyn * synDelay, 2))} = ${num(total)} ms}}.`,
            ],
            traps: [
              {
                spec: { type: "number", value: axonMs, tolerance: 0.05 },
                feedback: "Do not forget to add the synaptic delay across the chemical synapse(s)!",
              },
            ],
          };
        } else {
          // Spatial summation EPSP + IPSP
          const rest = rng.pick([-70, -72, -68] as const);
          const nEpsp = rng.int(2, 4);
          const epsp = rng.int(4, 9);
          const ipsp = -rng.int(3, 10);
          const netDelta = nEpsp * epsp + ipsp;
          const vm = rest + netDelta;
          return {
            prompt: `A postsynaptic neuron rests at ${num(rest)} mV. It simultaneously receives ${nEpsp} EPSPs of +${epsp} mV each and one IPSP of ${num(ipsp)} mV. Calculate the resulting membrane potential in mV (include the minus sign if negative).`,
            answer: { type: "number", value: vm, tolerance: 0.1, display: `${num(vm)} mV` },
            hint: "Add all EPSPs and the negative IPSP to find net ΔV, then add ΔV to the resting potential.",
            solution: [
              `Net change: {{${nEpsp} * (+${epsp}) + (${num(ipsp)}) = ${netDelta >= 0 ? "+" : ""}${num(netDelta)} mV}}.`,
              `Membrane potential: {{${num(rest)} + (${num(netDelta)}) = ${num(vm)} mV}}.`,
            ],
            traps:
              netDelta !== vm
                ? [
                    {
                      spec: { type: "number", value: netDelta },
                      feedback: "That is the net change ΔV — remember to add it to the resting potential.",
                    },
                  ]
                : undefined,
          };
        }
      }

      // Tier 3: Max firing frequency from refractory period OR depolarization slope OR 2-axon chain
      const mode = rng.int(0, 1);
      if (mode === 0) {
        const tRef = rng.pick([1.0, 1.25, 1.6, 2.0, 2.5, 4.0, 5.0] as const);
        const fMax = roundTo(1000 / tRef, 1);
        const msTrap = roundTo(1 / tRef, 3);
        const neuronType = rng.pick(["motor axon", "sensory A-fibre", "cortical pyramidal axon", "interneuron"] as const);
        return {
          prompt: `A ${neuronType} has an absolute refractory period of ${num(tRef)} ms. Calculate its maximum theoretical firing frequency in hertz (impulses per second; enter the number only).`,
          answer: { type: "number", value: fMax, tolerance: 0.5, display: `${num(fMax)}` },
          hint: "Convert the refractory period to seconds (÷ 1000), or simply divide 1000 ms by the refractory period in ms.",
          solution: [
            `Convert period to seconds: {{${num(tRef)} / 1000 = ${num(clean(tRef / 1000))} s}}.`,
            `Maximum frequency: {{1000 / ${num(tRef)} = ${num(fMax)}}} Hz.`,
          ],
          traps: [
            {
              spec: { type: "number", value: msTrap, tolerance: 0.01 },
              feedback: "That is impulses per millisecond — multiply by 1000 for hertz (impulses per second).",
            },
          ],
        };
      } else {
        // Two-neuron myelinated + unmyelinated reflex latency
        const dMyel = roundTo(rng.int(6, 16) / 10, 1); // 0.6..1.6 m
        const vMyel = rng.pick([50, 80, 100] as const);
        const dUn = roundTo(rng.int(2, 10) / 100, 2); // 0.02..0.10 m
        const vUn = rng.pick([1.0, 2.0, 2.5] as const);
        const nSyn = rng.int(2, 3);
        const synMs = rng.pick([0.5, 0.6, 0.8, 1.0] as const);
        const t1 = roundTo((dMyel / vMyel) * 1000, 2);
        const t2 = roundTo((dUn / vUn) * 1000, 2);
        const tSyn = roundTo(nSyn * synMs, 2);
        const total = roundTo(t1 + t2 + tSyn, 1);
        const noSynTrap = roundTo(t1 + t2, 1);
        return {
          prompt: `A reflex pathway comprises ${num(dMyel)} m of myelinated axon ({{${vMyel} m s^(-1)}}), ${num(dUn)} m of unmyelinated interneuron ({{${num(vUn)} m s^(-1)}}), and ${nSyn} chemical synapses (${num(synMs)} ms each). Calculate total latency in ms to 1 decimal place.`,
          answer: { type: "number", value: total, tolerance: 0.15, display: `${num(total)} ms` },
          hint: "Compute each axonal segment time separately in ms, then add the synaptic delays.",
          solution: [
            `Myelinated segment: {{(${num(dMyel)} / ${vMyel}) * 1000 = ${num(t1)} ms}}.`,
            `Unmyelinated segment: {{(${num(dUn)} / ${num(vUn)}) * 1000 = ${num(t2)} ms}}.`,
            `Synaptic delays: {{${nSyn} * ${num(synMs)} = ${num(tSyn)} ms}}.`,
            `Total latency: {{${num(t1)} + ${num(t2)} + ${num(tSyn)} = ${num(total)} ms}}.`,
          ],
          traps: [
            {
              spec: { type: "number", value: noSynTrap, tolerance: 0.1 },
              feedback: "You omitted the chemical synaptic delays — add them to the axonal conduction times.",
            },
          ],
        };
      }
    },
  },

  // =========================================================================
  // DRILL 4: CHEMICAL SIGNALING AMPLIFICATION & OCCUPANCY [HL] (Level 3)
  // =========================================================================
  {
    id: "c1-c2-interaction-molecules-cells.signaling-cascades-hl",
    topicId: "c1-c2-interaction-molecules-cells",
    title: "GPCR Cascades, Receptor Occupancy & Quorum Thresholds [HL]",
    level: 3,
    ibLevel: "HL",
    guideRef: "chemical-signaling-hl",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // Receptor occupancy %
          const totalRec = rng.pick([400, 500, 800, 1000, 2000, 2500] as const);
          const pct = rng.int(4, 18) * 5; // 20%..90%
          const bound = roundTo((totalRec * pct) / 100, 0);
          const hormone = rng.pick(["epinephrine", "insulin", "glucagon", "oestradiol"] as const);
          const unboundPct = 100 - pct;
          return {
            prompt: `A target cell carries ${totalRec} specific ${hormone} receptors. At a given hormone concentration, ${bound} receptors have ligand bound. Calculate the percentage receptor occupancy.`,
            answer: { type: "number", value: pct, tolerance: 0.1, display: `${pct}%` },
            hint: "Percentage occupancy = (bound receptors ÷ total receptors) × 100.",
            solution: [
              `Occupancy = {{(${bound} / ${totalRec}) * 100 = ${pct}%}}.`,
            ],
            traps:
              unboundPct !== pct
                ? [
                    {
                      spec: { type: "number", value: unboundPct, tolerance: 0.1 },
                      feedback: `${unboundPct}% is the percentage of UNOCCUPIED receptors.`,
                    },
                  ]
                : undefined,
          };
        } else {
          // 2-step GPCR -> cAMP amplification
          const ligands = rng.int(1, 6);
          const gProts = rng.int(4, 15);
          const cAMPperAC = rng.pick([20, 25, 40, 50, 60, 80, 100] as const);
          const total = ligands * gProts * cAMPperAC;
          const singleTrap = gProts * cAMPperAC;
          return {
            prompt: `In a liver cell GPCR pathway, each bound epinephrine molecule activates ${gProts} G-proteins, and each resulting adenylyl cyclase synthesizes ${cAMPperAC} cAMP molecules. How many cAMP molecules are generated by ${ligands} bound epinephrine molecule${ligands > 1 ? "s" : ""}?`,
            answer: { type: "number", value: total, display: `${total}` },
            hint: "Multiply the number of hormone molecules by G-proteins per hormone and cAMP per adenylyl cyclase.",
            solution: [
              `Total cAMP = {{${ligands} * ${gProts} * ${cAMPperAC} = ${total}}}.`,
            ],
            traps:
              ligands > 1
                ? [
                    {
                      spec: { type: "number", value: singleTrap },
                      feedback: `That is for 1 epinephrine molecule — multiply by ${ligands} bound molecules.`,
                    },
                  ]
                : undefined,
          };
        }
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // 3-step GPCR phosphorylation cascade
          const ligands = rng.int(2, 8);
          const gProts = rng.int(5, 12);
          const cAMP = rng.pick([20, 40, 50, 60, 80] as const);
          const kinases = rng.pick([10, 15, 20, 25] as const);
          const total = ligands * gProts * cAMP * kinases;
          const perOne = gProts * cAMP * kinases;
          return {
            prompt: `In an epinephrine cascade, 1 ligand activates ${gProts} G-proteins, each active adenylyl cyclase makes ${cAMP} cAMP molecules, and each cAMP triggers phosphorylation of ${kinases} glycogen phosphorylase enzymes. How many enzymes are activated by ${ligands} epinephrine ligands?`,
            answer: { type: "number", value: total, display: `${total}` },
            hint: "Multiply all three amplification steps together for 1 ligand, then multiply by the number of ligands.",
            solution: [
              `Per 1 ligand: {{${gProts} * ${cAMP} * ${kinases} = ${perOne}}} active enzymes.`,
              `For ${ligands} ligands: {{${ligands} * ${perOne} = ${total}}} active enzymes.`,
            ],
            traps: [
              {
                spec: { type: "number", value: perOne },
                feedback: `You calculated for 1 ligand — multiply by ${ligands} ligands.`,
              },
            ],
          };
        } else {
          // Vibrio fischeri quorum-sensing density threshold
          const ratePerCell = rng.pick([2, 4, 5, 8, 10] as const); // arbitrary units per 10^6 cells
          const threshold = rng.int(4, 15) * ratePerCell * 5; // exact multiple
          const neededMillions = roundTo(threshold / ratePerCell, 0);
          return {
            prompt: `Inside a squid light organ, every {{10^6}} *Vibrio fischeri* bacteria maintain ${ratePerCell} nmol dm⁻³ of extracellular autoinducer. If bioluminescence genes switch on at a quorum threshold of ${threshold} nmol dm⁻³, how many millions of bacteria (in units of {{10^6}} cells) are needed to trigger glowing?`,
            answer: { type: "number", value: neededMillions, display: `${neededMillions}` },
            hint: "Divide the quorum threshold concentration by the autoinducer contribution per 10⁶ cells.",
            solution: [
              `Required cell count (in millions): {{${threshold} / ${ratePerCell} = ${neededMillions}}} (i.e., {{${neededMillions} * 10^6}} cells).`,
            ],
          };
        }
      }

      // Tier 3: Reverse-calculating minimum ligands for a target glucose release OR competitive antagonist occupancy drop
      const mode = rng.int(0, 1);
      if (mode === 0) {
        const gProts = rng.pick([5, 8, 10, 12] as const);
        const cAMP = rng.pick([25, 40, 50, 100] as const);
        const glucPerCamp = rng.pick([10, 20, 25] as const);
        const perLigand = gProts * cAMP * glucPerCamp;
        const neededLigands = rng.int(3, 18);
        const targetGlucose = neededLigands * perLigand;
        return {
          prompt: `Each epinephrine molecule activates ${gProts} G-proteins, each active adenylyl cyclase produces ${cAMP} cAMP molecules, and each cAMP ultimately mobilises ${glucPerCamp} glucose-1-phosphate molecules. How many epinephrine molecules are required to mobilise ${targetGlucose.toLocaleString("en-GB")} glucose-1-phosphate molecules?`,
          answer: { type: "number", value: neededLigands, display: `${neededLigands}` },
          hint: "First calculate the amplification factor (glucose molecules released per 1 epinephrine ligand), then divide the target by that factor.",
          solution: [
            `Amplification per 1 epinephrine: {{${gProts} * ${cAMP} * ${glucPerCamp} = ${perLigand}}} glucose-1-phosphate molecules.`,
            `Epinephrine ligands required: {{${targetGlucose} / ${perLigand} = ${neededLigands}}}.`,
          ],
        };
      } else {
        // Competitive antagonist reduces occupied receptors from R1 to R2 → % drop in receptor signaling
        const totalRec = rng.pick([500, 800, 1000, 2000] as const);
        const occ1Pct = rng.int(10, 18) * 5; // 50..90%
        const dropPct = rng.int(4, 14) * 5; // 20..70% relative reduction
        const r1 = roundTo((totalRec * occ1Pct) / 100, 0);
        const r2 = roundTo(r1 * (1 - dropPct / 100), 1);
        const realDrop = roundTo(((r1 - r2) / r1) * 100, 1);
        const rem = roundTo(100 - realDrop, 1);
        return {
          prompt: `In a breast-tissue cell with ${totalRec} intracellular oestradiol receptors, ${r1} receptors are bound to oestradiol. Adding a competitive anti-oestrogen antagonist reduces oestradiol-bound receptors to ${num(r2)}. Calculate the percentage reduction in active oestradiol–receptor complexes to 1 decimal place.`,
          answer: { type: "number", value: realDrop, tolerance: 0.15, display: `${num(realDrop)}%` },
          hint: "Percentage reduction = ((initial bound − remaining bound) ÷ initial bound) × 100.",
          solution: [
            `Lost complexes: {{${r1} - ${num(r2)} = ${num(roundTo(r1 - r2, 1))}}}.`,
            `Percentage reduction: {{(${num(roundTo(r1 - r2, 1))} / ${r1}) * 100 = ${num(realDrop)}%}}.`,
          ],
          traps:
            Math.abs(rem - realDrop) > 1
              ? [
                  {
                    spec: { type: "number", value: rem, tolerance: 0.15 },
                    feedback: `${num(rem)}% is the remaining fraction still bound — subtract from 100% for the percentage reduction.`,
                  },
                ]
              : undefined,
        };
      }
    },
  },
];
