import type { Drill } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1 (SL, level 1): Spirometer Ventilation, Vital Capacity & O2 Unloading
  // ===========================================================================
  {
    id: "b3-b4-form-organisms-ecosystems.spirometer-ventilation",
    topicId: "b3-b4-form-organisms-ecosystems",
    title: "Spirometer Ventilation Rate & Lung Volumes",
    level: 1,
    ibLevel: "SL",
    guideRef: "gas-exchange-haemoglobin",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool(0.55)) {
          const vt = roundTo(rng.int(8, 15) * 0.05, 2); // 0.40 to 0.75 dm³
          const f = rng.int(10, 22);
          const ve = roundTo(vt * f, 2);
          const sumTrap = roundTo(vt + f, 2);
          return {
            prompt: `A spirometer trace shows a tidal volume of {{${vt} dm^3}} and a breathing rate of ${f} breaths min⁻¹. Calculate the pulmonary ventilation rate in {{dm^3 min^(-1)}}.`,
            answer: { type: "number", value: ve, tolerance: 0.02, display: `${num(ve)} dm³ min⁻¹` },
            traps: [
              {
                spec: { type: "number", value: sumTrap, tolerance: 0.02 },
                feedback: "Multiply tidal volume by breathing rate rather than adding them.",
              },
            ],
            hint: "Use {{V_E = V_T * f}} (tidal volume × breaths per minute).",
            solution: [
              `Apply {{V_E = V_T * f}}.`,
              `{{V_E = ${vt} * ${f} = ${num(ve)} dm^3 min^(-1)}}.`,
            ],
          };
        }
        // Vital capacity (with residual volume distractor)
        const vt = roundTo(rng.int(8, 14) * 0.05, 2); // 0.40–0.70
        const irv = roundTo(rng.int(22, 34) * 0.1, 1); // 2.2–3.4
        const erv = roundTo(rng.int(8, 16) * 0.1, 1); // 0.8–1.6
        const rv = roundTo(rng.int(10, 15) * 0.1, 1); // 1.0–1.5
        const vc = roundTo(vt + irv + erv, 2);
        const tlc = roundTo(vc + rv, 2);
        return {
          prompt: `A student has tidal volume {{${vt} dm^3}}, inspiratory reserve volume {{${irv} dm^3}}, expiratory reserve volume {{${erv} dm^3}}, and residual volume {{${rv} dm^3}}. Calculate their **vital capacity** in {{dm^3}}.`,
          answer: { type: "number", value: vc, tolerance: 0.02, display: `${num(vc)} dm³` },
          traps: [
            {
              spec: { type: "number", value: tlc, tolerance: 0.02 },
              feedback: `${num(tlc)} dm³ is total lung capacity—exclude residual volume when calculating vital capacity.`,
            },
          ],
          hint: "Vital capacity sums only the three movable air volumes: {{VC = V_T + IRV + ERV}}.",
          solution: [
            `Vital capacity excludes residual volume: {{VC = V_T + IRV + ERV}}.`,
            `{{VC = ${vt} + ${irv} + ${erv} = ${num(vc)} dm^3}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.55)) {
          // Breaths in 15s, 20s, or 30s + tidal volume in cm³
          const windowSec = rng.pick([15, 20, 30] as const);
          const scale = 60 / windowSec;
          const breaths = windowSec === 15 ? rng.int(3, 7) : windowSec === 20 ? rng.int(4, 9) : rng.int(6, 12);
          const vtCm3 = rng.int(21, 35) * 20; // 420–700 cm³
          const f = breaths * scale;
          const vtDm3 = roundTo(vtCm3 / 1000, 3);
          const ve = roundTo(vtDm3 * f, 2);
          const unscaled = roundTo(vtDm3 * breaths, 2);
          const cm3Trap = roundTo(vtCm3 * f, 1);
          return {
            prompt: `A spirometer records ${breaths} complete breaths in ${windowSec} seconds, with a mean tidal volume of {{${vtCm3} cm^3}}. Calculate the pulmonary ventilation rate in {{dm^3 min^(-1)}}.`,
            answer: { type: "number", value: ve, tolerance: 0.02, display: `${num(ve)} dm³ min⁻¹` },
            traps: [
              {
                spec: { type: "number", value: cm3Trap, tolerance: 1 },
                feedback: "Divide by 1000 to convert cm³ min⁻¹ into dm³ min⁻¹.",
              },
              {
                spec: { type: "number", value: unscaled, tolerance: 0.02 },
                feedback: `Scale the ${windowSec}-second breath count up to 60 seconds (× ${scale}).`,
              },
            ],
            hint: `Scale breaths in ${windowSec} s to per minute (× ${scale}) and convert cm³ to dm³ (÷ 1000).`,
            solution: [
              `Breathing rate: {{f = ${breaths} * (60 / ${windowSec}) = ${f}}} breaths min⁻¹.`,
              `Tidal volume in {{dm^3}}: {{${vtCm3} / 1000 = ${num(vtDm3)} dm^3}}.`,
              `Ventilation rate: {{${num(vtDm3)} * ${f} = ${num(ve)} dm^3 min^(-1)}}.`,
            ],
          };
        }
        // Reverse: find tidal volume in dm³ from ventilation rate and breathing rate
        const f = rng.int(12, 24);
        const vt = roundTo(rng.int(9, 18) * 0.05, 2); // 0.45–0.90
        const ve = roundTo(f * vt, 2);
        return {
          prompt: `During light walking, a subject's pulmonary ventilation rate is {{${num(ve)} dm^3 min^(-1)}} at a breathing frequency of ${f} breaths min⁻¹. Calculate their mean tidal volume in {{dm^3}}.`,
          answer: { type: "number", value: vt, tolerance: 0.02, display: `${num(vt)} dm³` },
          hint: "Rearrange {{V_E = V_T * f}} to {{V_T = V_E / f}}.",
          solution: [
            `Rearrange {{V_E = V_T * f}} to solve for {{V_T}}.`,
            `{{V_T = ${num(ve)} / ${f} = ${num(vt)} dm^3}}.`,
          ],
        };
      }

      // Tier 3: Exercise ventilation increase OR Bohr-shift O2 unloading volume
      if (rng.bool(0.55)) {
        const vtRest = roundTo(rng.int(8, 12) * 0.05, 2); // 0.40–0.60
        const fRest = rng.int(10, 15);
        const vtEx = roundTo(rng.int(30, 50) * 0.05, 2); // 1.50–2.50
        const fEx = rng.int(28, 44);
        const veRest = roundTo(vtRest * fRest, 2);
        const veEx = roundTo(vtEx * fEx, 2);
        const diff = roundTo(veEx - veRest, 2);
        return {
          prompt: `Moving from rest (tidal volume {{${vtRest} dm^3}}, ${fRest} breaths min⁻¹) to vigorous running (tidal volume {{${vtEx} dm^3}}, ${fEx} breaths min⁻¹), calculate the **increase** in pulmonary ventilation rate in {{dm^3 min^(-1)}}.`,
          answer: { type: "number", value: diff, tolerance: 0.05, display: `${num(diff)} dm³ min⁻¹` },
          traps: [
            {
              spec: { type: "number", value: veEx, tolerance: 0.05 },
              feedback: `${num(veEx)} dm³ min⁻¹ is the total running ventilation rate—subtract the resting rate (${num(veRest)} dm³ min⁻¹).`,
            },
          ],
          hint: "Calculate resting V_E and running V_E separately, then subtract.",
          solution: [
            `Resting {{V_E = ${vtRest} * ${fRest} = ${num(veRest)} dm^3 min^(-1)}}.`,
            `Running {{V_E = ${vtEx} * ${fEx} = ${num(veEx)} dm^3 min^(-1)}}.`,
            `Increase = {{${num(veEx)} - ${num(veRest)} = ${num(diff)} dm^3 min^(-1)}}.`,
          ],
        };
      }

      const lungSat = rng.int(95, 99);
      const restSat = rng.int(64, 78);
      const bohrDrop = rng.int(14, 28);
      const exSat = restSat - bohrDrop;
      const cap = 200; // cm³ O₂ per dm³ blood at 100% sat
      const unloadedEx = roundTo(((lungSat - exSat) / 100) * cap, 1);
      const pctUnloaded = lungSat - exSat;
      return {
        prompt: `Arterial blood holds {{${cap} cm^3}} of O₂ per {{dm^3}} at 100% saturation. Blood leaves alveoli ${lungSat}% saturated and leaves sprinting muscle ${exSat}% saturated under the Bohr shift (down from ${restSat}% at resting pH). Calculate the volume of O₂ (in {{cm^3}}) unloaded per {{dm^3}} of blood in sprinting muscle.`,
        answer: { type: "number", value: unloadedEx, tolerance: 0.5, display: `${num(unloadedEx)} cm³` },
        traps: [
          {
            spec: { type: "number", value: pctUnloaded, tolerance: 0.5 },
            feedback: `${pctUnloaded}% is the percentage unloaded—multiply by ${cap} cm³ dm⁻³ to get volume in cm³.`,
          },
        ],
        hint: "Find (% saturation unloaded) = lung % − muscle %, then multiply that decimal fraction by 200 cm³.",
        solution: [
          `Fraction of capacity unloaded: {{${lungSat}% - ${exSat}% = ${pctUnloaded}%}}.`,
          `Volume of O₂ unloaded per {{dm^3}}: {{(${pctUnloaded} / 100) * ${cap} = ${num(unloadedEx)} cm^3}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2 (SL, level 2): Cardiac Output & Potometer Transpiration Rate
  // ===========================================================================
  {
    id: "b3-b4-form-organisms-ecosystems.cardiac-potometer",
    topicId: "b3-b4-form-organisms-ecosystems",
    title: "Cardiac Output & Potometer Transpiration Rates",
    level: 2,
    ibLevel: "SL",
    guideRef: "transport-circulation-plants",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool(0.55)) {
          const hr = rng.pick([60, 65, 70, 72, 75, 80, 85, 90, 96, 100, 110, 120] as const);
          const sv = rng.pick([60, 65, 70, 75, 80, 85, 90, 95, 100] as const);
          const coCm3 = hr * sv;
          const coDm3 = roundTo(coCm3 / 1000, 3);
          return {
            prompt: `A mammal's heart beats at ${hr} beats min⁻¹ with a stroke volume of {{${sv} cm^3}}. Calculate the cardiac output in {{dm^3 min^(-1)}}.`,
            answer: { type: "number", value: coDm3, tolerance: 0.02, display: `${num(coDm3)} dm³ min⁻¹` },
            traps: [
              {
                spec: { type: "number", value: coCm3, tolerance: 5 },
                feedback: `${coCm3} is in cm³ min⁻¹—divide by 1000 to convert to dm³ min⁻¹.`,
              },
            ],
            hint: "Multiply heart rate × stroke volume, then divide by 1000 to convert cm³ to dm³.",
            solution: [
              `{{CO = HR * SV = ${hr} * ${sv} = ${coCm3} cm^3 min^(-1)}}.`,
              `Convert to {{dm^3 min^(-1)}}: {{${coCm3} / 1000 = ${num(coDm3)} dm^3 min^(-1)}}.`,
            ],
          };
        }
        // Potometer clean volume rate
        const area = rng.pick([0.01, 0.02, 0.025, 0.04, 0.05] as const);
        const time = rng.pick([4, 5, 8, 10, 12, 15, 20] as const);
        const mult = rng.int(2, 9);
        const dist = roundTo(mult * (time / 10), 2); // ensures clean numbers
        const vol = roundTo(area * dist, 4);
        const rate = roundTo(vol / time, 4);
        return {
          prompt: `In a potometer with capillary cross-sectional area {{${area} cm^2}}, the meniscus travels {{${num(dist)} cm}} in ${time} minutes. Calculate the rate of water uptake in {{cm^3 min^(-1)}}.`,
          answer: { type: "number", value: rate, tolerance: roundTo(Math.max(0.0005, rate * 0.02), 5), display: `${num(rate)} cm³ min⁻¹` },
          traps: [
            {
              spec: { type: "number", value: vol, tolerance: roundTo(Math.max(0.0005, vol * 0.02), 5) },
              feedback: `${num(vol)} cm³ is the total volume taken up—divide by ${time} minutes to get the rate.`,
            },
          ],
          hint: "Volume = cross-sectional area × distance; then divide by time in minutes.",
          solution: [
            `Volume absorbed: {{V = ${area} * ${num(dist)} = ${num(vol)} cm^3}}.`,
            `Rate of water uptake: {{${num(vol)} / ${time} = ${num(rate)} cm^3 min^(-1)}}.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(1, 3);
        if (mode === 1) {
          // Cardiac cycle T -> HR -> CO
          const T = rng.pick([0.5, 0.6, 0.75, 0.8, 1.0] as const);
          const hr = roundTo(60 / T, 1);
          const sv = rng.int(13, 24) * 5; // 65–120 cm³
          const co = roundTo((hr * sv) / 1000, 2);
          const wrongHrTrap = roundTo((60 * T * sv) / 1000, 2);
          return {
            prompt: `A cardiac pressure trace shows one complete cycle lasting {{${T} s}}, with a stroke volume of {{${sv} cm^3}}. Calculate the cardiac output in {{dm^3 min^(-1)}}.`,
            answer: { type: "number", value: co, tolerance: 0.03, display: `${num(co)} dm³ min⁻¹` },
            traps: wrongHrTrap !== co ? [
              {
                spec: { type: "number", value: wrongHrTrap, tolerance: 0.03 },
                feedback: "Heart rate is 60 ÷ cycle duration (not 60 × cycle duration).",
              },
            ] : undefined,
            hint: "First compute {{HR = 60 / T}}, then compute {{CO = (HR * SV) / 1000}}.",
            solution: [
              `Heart rate: {{HR = 60 / ${T} = ${num(hr)}}} beats min⁻¹.`,
              `Cardiac output: {{CO = (${num(hr)} * ${sv}) / 1000 = ${num(co)} dm^3 min^(-1)}}.`,
            ],
          };
        }
        if (mode === 2) {
          // Capillary Starling net pressure
          const pOnc = roundTo(rng.int(28, 35) * 0.1, 1); // 2.8–3.5 kPa
          const isArteriolar = rng.bool(0.5);
          if (isArteriolar) {
            const pHyd = roundTo(pOnc + rng.int(6, 18) * 0.1, 1);
            const net = roundTo(pHyd - pOnc, 1);
            return {
              prompt: `At the **arteriolar end** of a capillary, blood hydrostatic pressure is {{${num(pHyd)} kPa}} and plasma oncotic pressure is {{${num(pOnc)} kPa}}. Calculate the net outward filtration pressure in kPa.`,
              answer: { type: "number", value: net, tolerance: 0.05, display: `${num(net)} kPa` },
              hint: "Outward filtration pressure = hydrostatic pressure − oncotic pressure.",
              solution: [
                `{{P_net = P_hydrostatic - P_oncotic = ${num(pHyd)} - ${num(pOnc)} = ${num(net)} kPa}} outward.`,
              ],
            };
          }
          const pHyd = roundTo(pOnc - rng.int(7, 19) * 0.1, 1);
          const netIn = roundTo(pOnc - pHyd, 1);
          return {
            prompt: `At the **venular end** of a capillary, blood hydrostatic pressure is {{${num(pHyd)} kPa}} and plasma oncotic pressure is {{${num(pOnc)} kPa}}. Calculate the magnitude of the net inward osmotic reabsorption pressure in kPa.`,
            answer: { type: "number", value: netIn, tolerance: 0.05, display: `${num(netIn)} kPa` },
            hint: "At the venular end, oncotic pull inward exceeds hydrostatic push outward: subtract {{P_hydrostatic}} from {{P_oncotic}}.",
            solution: [
              `Net inward reabsorption pressure = {{${num(pOnc)} - ${num(pHyd)} = ${num(netIn)} kPa}}.`,
            ],
          };
        }
        // Potometer with varied plant context
        const plant = rng.pick(["hibiscus", "geranium", "privet", "oleander", "coleus"] as const);
        const env = rng.pick(["under bright lamps", "beside a gentle fan", "in a warm 28 °C room", "on a shaded bench"] as const);
        const area = rng.pick([0.015, 0.02, 0.025, 0.03, 0.04] as const);
        const time = rng.pick([5, 6, 10, 12, 15, 20] as const);
        const dist = roundTo(rng.int(4, 18) * 0.5, 1);
        const vol = roundTo(area * dist, 4);
        const rate = roundTo(vol / time, 4);
        return {
          prompt: `A ${plant} shoot ${env} is fitted to a potometer (capillary area {{${area} cm^2}}). The air bubble moves {{${num(dist)} cm}} in ${time} minutes. Calculate the water uptake rate in {{cm^3 min^(-1)}} (round to 4 d.p. if needed).`,
          answer: { type: "number", value: rate, tolerance: roundTo(Math.max(0.0005, rate * 0.02), 5), display: `${num(rate)} cm³ min⁻¹` },
          hint: "Multiply cross-sectional area by distance to get volume in cm³, then divide by time in minutes.",
          solution: [
            `Volume absorbed: {{V = ${area} * ${num(dist)} = ${num(vol)} cm^3}}.`,
            `Rate: {{${num(vol)} / ${time} = ${num(rate)} cm^3 min^(-1)}}.`,
          ],
        };
      }

      // Tier 3: Exercise cardiac output increase OR potometer environmental multiplier
      if (rng.bool(0.55)) {
        const hr1 = rng.pick([55, 60, 65, 70, 75] as const);
        const sv1 = rng.pick([65, 70, 75, 80] as const);
        const hr2 = rng.pick([140, 150, 160, 170, 180] as const);
        const sv2 = rng.pick([100, 110, 115, 120, 125] as const);
        const co1 = roundTo((hr1 * sv1) / 1000, 3);
        const co2 = roundTo((hr2 * sv2) / 1000, 3);
        const inc = roundTo(co2 - co1, 3);
        return {
          prompt: `An athlete's resting heart rate is ${hr1} bpm (stroke volume {{${sv1} cm^3}}). During sprinting, heart rate rises to ${hr2} bpm and stroke volume reaches {{${sv2} cm^3}}. Calculate the **increase** in cardiac output in {{dm^3 min^(-1)}}.`,
          answer: { type: "number", value: inc, tolerance: 0.03, display: `${num(inc)} dm³ min⁻¹` },
          traps: [
            {
              spec: { type: "number", value: co2, tolerance: 0.03 },
              feedback: `${num(co2)} dm³ min⁻¹ is the total sprint output—subtract the resting output (${num(co1)} dm³ min⁻¹).`,
            },
          ],
          hint: "Calculate resting CO and sprint CO in dm³ min⁻¹, then subtract.",
          solution: [
            `Resting CO: {{(${hr1} * ${sv1}) / 1000 = ${num(co1)} dm^3 min^(-1)}}.`,
            `Sprint CO: {{(${hr2} * ${sv2}) / 1000 = ${num(co2)} dm^3 min^(-1)}}.`,
            `Increase: {{${num(co2)} - ${num(co1)} = ${num(inc)} dm^3 min^(-1)}}.`,
          ],
        };
      }

      const area = rng.pick([0.02, 0.025, 0.04] as const);
      const time = rng.pick([10, 12, 15, 20] as const);
      const dist = rng.pick([6, 9, 12, 15, 18] as const);
      const factor = rng.pick([2, 3, 0.5] as const);
      const changeDesc =
        factor === 2
          ? "switching on a fan doubles the transpiration rate"
          : factor === 3
            ? "moving the shoot into bright windy air triples the transpiration rate"
            : "covering the shoot with a humid polythene bag halves the transpiration rate";
      const baseRate = roundTo((area * dist) / time, 4);
      const newRate = roundTo(baseRate * factor, 4);
      return {
        prompt: `In control conditions, a potometer bubble (capillary area {{${area} cm^2}}) moves {{${dist} cm}} in ${time} minutes. Next, ${changeDesc}. Calculate the new water uptake rate in {{cm^3 min^(-1)}}.`,
        answer: { type: "number", value: newRate, tolerance: roundTo(Math.max(0.0005, newRate * 0.02), 5), display: `${num(newRate)} cm³ min⁻¹` },
        traps: [
          {
            spec: { type: "number", value: baseRate, tolerance: roundTo(Math.max(0.0005, baseRate * 0.02), 5) },
            feedback: `${num(baseRate)} cm³ min⁻¹ is the baseline rate—apply the ×${factor} environmental factor.`,
          },
        ],
        hint: `Compute the baseline rate {{(area * distance) / time}}, then multiply by ${factor}.`,
        solution: [
          `Baseline rate: {{(${area} * ${dist}) / ${time} = ${num(baseRate)} cm^3 min^(-1)}}.`,
          `New rate: {{${num(baseRate)} * ${factor} = ${num(newRate)} cm^3 min^(-1)}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3 (HL, level 3): Sarcomere Band Changes & Myofibril Shortening [HL]
  // ===========================================================================
  {
    id: "b3-b4-form-organisms-ecosystems.sarcomere-sliding-hl",
    topicId: "b3-b4-form-organisms-ecosystems",
    title: "Sarcomere Band Widths & Sliding Filament Contraction [HL]",
    level: 3,
    ibLevel: "HL",
    guideRef: "muscle-motility-hl",
    generate(rng, tier) {
      const A = 1.6;
      if (tier === 1) {
        const L0 = roundTo(rng.int(23, 29) * 0.1, 2); // 2.30–2.90 μm
        const dL = roundTo(rng.int(3, 10) * 0.05, 2); // 0.15–0.50 μm
        const L1 = roundTo(L0 - dL, 2);
        const H0 = roundTo(L0 - 1.9, 2); // ensures H0 in 0.40–1.00 and H1 > 0
        if (rng.bool(0.45) && H0 - dL >= 0.05) {
          const H1 = roundTo(H0 - dL, 2);
          return {
            prompt: `A relaxed sarcomere measures {{${num(L0)} μm}} with an A-band of {{1.60 μm}} and an H-zone of {{${num(H0)} μm}}. When the sarcomere contracts to {{${num(L1)} μm}}, calculate the new width of the **H-zone** in μm.`,
            answer: { type: "number", value: H1, tolerance: 0.01, display: `${num(H1)} μm` },
            hint: "The H-zone narrows by the exact total shortening of the sarcomere: {{Delta H = Delta L}}.",
            solution: [
              `Sarcomere shortening: {{Delta L = ${num(L0)} - ${num(L1)} = ${num(dL)} μm}}.`,
              `New H-zone: {{${num(H0)} - ${num(dL)} = ${num(H1)} μm}}.`,
            ],
          };
        }
        // Combined I-band after contraction
        const I1 = roundTo(L1 - A, 2);
        const I0 = roundTo(L0 - A, 2);
        return {
          prompt: `A relaxed sarcomere is {{${num(L0)} μm}} long with a constant A-band of {{1.60 μm}}. When stimulated, it contracts to {{${num(L1)} μm}}. Calculate the new combined width of the **I-band** (two half I-bands) in μm.`,
          answer: { type: "number", value: I1, tolerance: 0.01, display: `${num(I1)} μm` },
          traps: [
            {
              spec: { type: "number", value: I0, tolerance: 0.01 },
              feedback: `${num(I0)} μm was the relaxed I-band width before contraction.`,
            },
          ],
          hint: "Because the A-band stays constant at 1.60 μm, combined I-band = contracted sarcomere length − 1.60 μm.",
          solution: [
            `A-band remains constant at {{1.60 μm}}.`,
            `Combined I-band = {{${num(L1)} - 1.60 = ${num(I1)} μm}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.55)) {
          // Each Z-line moves inward by d -> total shortening = 2d
          const L0 = roundTo(rng.int(24, 30) * 0.1, 2); // 2.40–3.00
          const H0 = roundTo(L0 - 1.8, 2); // 0.60–1.20
          const dEach = roundTo(rng.int(2, 5) * 0.05, 2); // 0.10–0.25
          const dTotal = roundTo(2 * dEach, 2);
          if (rng.bool(0.55)) {
            const H1 = roundTo(H0 - dTotal, 2);
            const forgotDouble = roundTo(H0 - dEach, 2);
            return {
              prompt: `A relaxed sarcomere measures {{${num(L0)} μm}} with an A-band of {{1.60 μm}} and an H-zone of {{${num(H0)} μm}}. During contraction, **each** Z-line slides inward by {{${num(dEach)} μm}}. Calculate the new **H-zone** width in μm.`,
              answer: { type: "number", value: H1, tolerance: 0.01, display: `${num(H1)} μm` },
              traps: [
                {
                  spec: { type: "number", value: forgotDouble, tolerance: 0.01 },
                  feedback: `Both Z-lines advance inward by ${num(dEach)} μm, so subtract 2 × ${num(dEach)} = ${num(dTotal)} μm from the H-zone.`,
                },
              ],
              hint: "Thin filaments slide inward from BOTH Z-lines, so total sarcomere shortening is {{2 * d}}.",
              solution: [
                `Total shortening: {{2 * ${num(dEach)} = ${num(dTotal)} μm}}.`,
                `New H-zone: {{${num(H0)} - ${num(dTotal)} = ${num(H1)} μm}}.`,
              ],
            };
          }
          // One half I-band width after contraction
          const L1 = roundTo(L0 - dTotal, 2);
          const halfI1 = roundTo((L1 - A) / 2, 2);
          const fullI1 = roundTo(L1 - A, 2);
          return {
            prompt: `A relaxed sarcomere of length {{${num(L0)} μm}} (A-band {{1.60 μm}}) shortens by a total of {{${num(dTotal)} μm}}. Calculate the new width of **one half I-band** (between one Z-line and the edge of the A-band) in μm.`,
            answer: { type: "number", value: halfI1, tolerance: 0.01, display: `${num(halfI1)} μm` },
            traps: [
              {
                spec: { type: "number", value: fullI1, tolerance: 0.01 },
                feedback: `${num(fullI1)} μm is BOTH half I-bands combined—divide by 2 for one half I-band.`,
              },
            ],
            hint: "Subtract the constant 1.60 μm A-band from the new sarcomere length, then divide by 2.",
            solution: [
              `Contracted sarcomere length: {{${num(L0)} - ${num(dTotal)} = ${num(L1)} μm}}.`,
              `Combined I-band: {{${num(L1)} - 1.60 = ${num(fullI1)} μm}}; one half I-band = {{${num(fullI1)} / 2 = ${num(halfI1)} μm}}.`,
            ],
          };
        }
        // Number of sarcomeres in series along a myofibril
        const sLen = rng.pick([2.0, 2.2, 2.4, 2.5] as const);
        const count = rng.int(12, 48) * 25; // 300–1200 sarcomeres
        const mmLen = roundTo((count * sLen) / 1000, 3);
        const noConv = roundTo(mmLen / sLen, 3);
        return {
          prompt: `A relaxed myofibril measures {{${num(mmLen)} mm}} in total length, and each sarcomere measures {{${num(sLen)} μm}}. Calculate the number of sarcomeres arranged end-to-end along this myofibril.`,
          answer: { type: "number", value: count, tolerance: 1, display: `${count}` },
          traps: [
            {
              spec: { type: "number", value: noConv, tolerance: 0.05 },
              feedback: "Convert millimetres to micrometres first (× 1000).",
            },
          ],
          hint: "Convert mm to μm (1 mm = 1000 μm), then divide by the length of one sarcomere.",
          solution: [
            `Myofibril length in μm: {{${num(mmLen)} * 1000 = ${clean(mmLen * 1000)} μm}}.`,
            `Number of sarcomeres: {{${clean(mmLen * 1000)} / ${num(sLen)} = ${count}}}.`,
          ],
        };
      }

      // Tier 3: Multi-sarcomere myofibril total shortening OR reverse per-sarcomere H-zone
      const n = rng.int(8, 25) * 25; // 200–625 sarcomeres
      const H0 = roundTo(rng.int(11, 18) * 0.05, 2); // 0.55–0.90 μm
      const dL = roundTo(rng.int(6, 10) * 0.05, 2); // 0.30–0.50 μm
      const H1 = roundTo(H0 - dL, 2);
      const totalShort = roundTo(n * dL, 2);
      if (rng.bool(0.55)) {
        return {
          prompt: `A myofibril contains ${n} identical sarcomeres in series. During contraction, each sarcomere's H-zone narrows from {{${num(H0)} μm}} to {{${num(H1)} μm}}. Calculate the **total shortening** of the entire myofibril in μm.`,
          answer: { type: "number", value: totalShort, tolerance: 0.5, display: `${num(totalShort)} μm` },
          traps: [
            {
              spec: { type: "number", value: dL, tolerance: 0.02 },
              feedback: `${num(dL)} μm is the shortening of ONE sarcomere—multiply by all ${n} sarcomeres in series.`,
            },
          ],
          hint: "Each sarcomere shortens by ΔH, and shortenings in series add across all sarcomeres.",
          solution: [
            `Shortening per sarcomere: {{Delta L = ${num(H0)} - ${num(H1)} = ${num(dL)} μm}}.`,
            `Total myofibril shortening: {{${n} * ${num(dL)} = ${num(totalShort)} μm}}.`,
          ],
        };
      }
      return {
        prompt: `A myofibril built from ${n} identical sarcomeres in series shortens overall by {{${num(totalShort)} μm}}. If every sarcomere started with a relaxed H-zone of {{${num(H0)} μm}}, calculate the new H-zone width of each contracted sarcomere in μm.`,
        answer: { type: "number", value: H1, tolerance: 0.01, display: `${num(H1)} μm` },
        hint: "Divide total myofibril shortening by the number of sarcomeres, then subtract from the relaxed H-zone.",
        solution: [
          `Shortening per sarcomere: {{${num(totalShort)} / ${n} = ${num(dL)} μm}}.`,
          `New H-zone width: {{${num(H0)} - ${num(dL)} = ${num(H1)} μm}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4 (SL, level 1): Biomes, Abiotic Profiles & Ecological Niches
  // ===========================================================================
  {
    id: "b3-b4-form-organisms-ecosystems.biomes-niches",
    topicId: "b3-b4-form-organisms-ecosystems",
    title: "Whittaker Biomes & Fundamental vs Realized Niches",
    level: 1,
    ibLevel: "SL",
    guideRef: "adaptation-biomes-niches",
    generate(rng, tier) {
      const BIOMES = [
        {
          name: "tropical rainforest",
          accept: ["tropical rainforest", "rainforest", "tropical rain forest"],
          temp: () => rng.int(25, 30),
          rain: () => rng.int(22, 40) * 100,
          cue: "layered canopy, buttress roots, and waxy drip-tip leaves",
        },
        {
          name: "hot desert",
          accept: ["hot desert", "desert", "subtropical desert"],
          temp: () => rng.int(22, 32),
          rain: () => rng.int(4, 22) * 10,
          cue: "CAM succulent stems, leaf spines, and nocturnal burrowing fauna",
        },
        {
          name: "tundra",
          accept: ["tundra", "arctic tundra"],
          temp: () => rng.int(-12, -3),
          rain: () => rng.int(10, 22) * 10,
          cue: "permanently frozen permafrost subsoil and treeless cushion plants",
        },
        {
          name: "taiga",
          accept: ["taiga", "boreal forest", "boreal", "coniferous forest", "taiga / boreal forest"],
          temp: () => rng.int(-2, 4),
          rain: () => rng.int(42, 76) * 10,
          cue: "evergreen coniferous trees with waxy needle leaves and conical crowns",
        },
        {
          name: "temperate deciduous forest",
          accept: ["temperate deciduous forest", "temperate forest", "deciduous forest"],
          temp: () => rng.int(9, 16),
          rain: () => rng.int(85, 145) * 10,
          cue: "broadleaf trees that shed leaves in autumn to avoid frost damage",
        },
      ] as const;

      if (tier === 1) {
        if (rng.bool(0.6)) {
          const b = rng.pick(BIOMES);
          const t = b.temp();
          const r = b.rain();
          return {
            prompt: `A terrestrial region records a mean annual temperature of ${num(t)} °C and annual precipitation of ${r} mm. Identify the terrestrial biome on a Whittaker chart.`,
            answer: { type: "text", accept: [...b.accept], display: b.name },
            hint: "Match both mean annual temperature (°C) and annual precipitation (mm) to the Whittaker biome zones.",
            solution: [
              `Mean annual temperature ${num(t)} °C and annual precipitation ${r} mm match **${b.name}** (${b.cue}).`,
            ],
          };
        }
        // Simple realized niche width (max - min)
        const minV = roundTo(rng.int(4, 24) * 0.5, 1);
        const width = roundTo(rng.int(4, 18) * 0.5, 1);
        const maxV = roundTo(minV + width, 1);
        const factor = rng.pick(["soil salinity (‰)", "intertidal height (m)", "water temperature (°C)"] as const);
        return {
          prompt: `Along a coastal belt transect, a species occupies a realized niche from ${num(minV)} to ${num(maxV)} in ${factor}. Calculate the width of its realized niche (enter the number only).`,
          answer: { type: "number", value: width, tolerance: 0.05, display: num(width) },
          hint: "Subtract the lower tolerance boundary from the upper boundary: max − min.",
          solution: [
            `Realized niche width = {{${num(maxV)} - ${num(minV)} = ${num(width)}}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.6)) {
          // Exact clean % of fundamental niche occupied as realized niche
          const fundWidth = rng.pick([2.0, 2.5, 4.0, 5.0, 8.0, 10.0, 20.0, 40.0] as const);
          const pct = rng.pick([20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80] as const);
          const realWidth = roundTo((fundWidth * pct) / 100, 2);
          const base = roundTo(rng.int(1, 10) * 0.5, 1);
          const fMax = roundTo(base + fundWidth, 2);
          const rMin = roundTo(fMax - realWidth, 2);
          const axis = rng.pick([
            { label: "tidal elevation", unit: "m", species: "an intertidal barnacle" },
            { label: "soil salinity", unit: "‰", species: "a coastal halophyte" },
            { label: "soil pH", unit: "pH units", species: "a wetland sedge" },
            { label: "water temperature", unit: "°C", species: "a stream invertebrate" },
          ] as const);
          const lostPct = 100 - pct;
          return {
            prompt: `Without competitors, ${axis.species} survives across ${axis.label} from ${num(base)} to ${num(fMax)} (${axis.unit}). When a dominant competitor is present, it is restricted to ${num(rMin)}–${num(fMax)}. Calculate the **percentage of its fundamental niche** occupied as its realized niche.`,
            answer: { type: "number", value: pct, tolerance: 0.5, display: `${pct}%` },
            traps: lostPct !== pct ? [
              {
                spec: { type: "number", value: lostPct, tolerance: 0.5 },
                feedback: `${lostPct}% is the percentage lost to competition—the question asks for the percentage still occupied.`,
              },
            ] : undefined,
            hint: "Compute realized width ÷ fundamental width × 100.",
            solution: [
              `Fundamental width = {{${num(fMax)} - ${num(base)} = ${num(fundWidth)}}}.`,
              `Realized width = {{${num(fMax)} - ${num(rMin)} = ${num(realWidth)}}}.`,
              `Percentage occupied = {{(${num(realWidth)} / ${num(fundWidth)}) * 100 = ${pct}%}}.`,
            ],
          };
        }
        // Biome with climate + ecological cue
        const b = rng.pick(BIOMES);
        const t = b.temp();
        const r = b.rain();
        return {
          prompt: `A biome has mean temperature ${num(t)} °C, annual rainfall ${r} mm, and dominant flora exhibiting ${b.cue}. Name this biome.`,
          answer: { type: "text", accept: [...b.accept], display: b.name },
          hint: "Combine the temperature/precipitation data with the characteristic plant adaptation.",
          solution: [
            `Both the Whittaker climate profile (${num(t)} °C, ${r} mm) and flora (${b.cue}) identify **${b.name}**.`,
          ],
        };
      }

      // Tier 3: Percentage niche reduction due to competition OR stomatal density
      if (rng.bool(0.6)) {
        const fundWidth = rng.pick([4.0, 5.0, 8.0, 10.0, 16.0, 20.0, 25.0, 40.0] as const);
        const lostPct = rng.pick([20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75] as const);
        const remPct = 100 - lostPct;
        const realWidth = roundTo((fundWidth * remPct) / 100, 2);
        const lostWidth = roundTo(fundWidth - realWidth, 2);
        const base = rng.int(0, 6);
        const fMax = roundTo(base + fundWidth, 2);
        const rMax = roundTo(base + realWidth, 2);
        const org = rng.pick([
          "barnacle *Chthamalus*",
          "halophyte *Salicornia*",
          "alpine cushion plant",
          "canopy warbler",
          "intertidal alga",
        ] as const);
        return {
          prompt: `Along a gradient transect, ${org} spans ${base} to ${num(fMax)} units in monoculture, but interspecific competition restricts it to ${base} to ${num(rMax)} units. Calculate the **percentage reduction** in its occupied niche width.`,
          answer: { type: "number", value: lostPct, tolerance: 0.5, display: `${lostPct}%` },
          traps: remPct !== lostPct ? [
            {
              spec: { type: "number", value: remPct, tolerance: 0.5 },
              feedback: `${remPct}% is the realized niche remaining—subtract from 100% to get the percentage reduction.`,
            },
          ] : undefined,
          hint: "Percentage reduction = ((fundamental width − realized width) ÷ fundamental width) × 100.",
          solution: [
            `Fundamental width = {{${num(fundWidth)}}}; realized width = {{${num(realWidth)}}}; lost width = {{${num(lostWidth)}}}.`,
            `Percentage reduction = {{(${num(lostWidth)} / ${num(fundWidth)}) * 100 = ${lostPct}%}}.`,
          ],
        };
      }

      // Stomatal density across leaf habitats
      const area = rng.pick([0.08, 0.1, 0.125, 0.16, 0.2, 0.25] as const);
      const count = rng.int(16, 68);
      const density = roundTo(count / area, 1);
      const multTrap = roundTo(count * area, 2);
      const leafType = rng.pick(["sun-exposed xerophyte", "tropical rainforest understory", "temperate oak", "coastal mangrove"] as const);
      return {
        prompt: `On a lower-epidermis cast of a ${leafType} leaf, a student counts ${count} stomata inside a microscope field of view of area {{${area} mm^2}}. Calculate the stomatal density in stomata mm⁻² (enter the number only).`,
        answer: { type: "number", value: density, tolerance: 0.5, display: num(density) },
        traps: [
          {
            spec: { type: "number", value: multTrap, tolerance: 0.1 },
            feedback: "Divide the stomatal count by the field-of-view area rather than multiplying.",
          },
        ],
        hint: "Stomatal density = count ÷ field-of-view area ({{mm^2}}).",
        solution: [
          `Stomatal density = {{${count} / ${area} = ${num(density)}}} stomata mm⁻².`,
        ],
      };
    },
  },
];
