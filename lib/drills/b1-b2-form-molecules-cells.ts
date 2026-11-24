// ---------------------------------------------------------------------------
// Procedural Skill Drills for Theme B (1–2): Form & Function — Molecules & Cells
// 4 drills covering all 4 sections (3 SL + 1 HL, all level 1–2 for Sprints)
// ---------------------------------------------------------------------------
import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

const TOPIC = "b1-b2-form-molecules-cells";

// Clean cube/sphere lengths whose 6/L and 3/r terminate cleanly with no rounding ambiguity
const CLEAN_L = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 25, 30, 40, 50, 60] as const;

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1 (SL, level 1): Condensation, Hydrolysis & Biomolecule Stoichiometry
  // =========================================================================
  {
    id: `${TOPIC}.condensation-stoichiometry`,
    topicId: TOPIC,
    title: "Condensation, Hydrolysis & Biomolecule Stoichiometry",
    level: 1,
    ibLevel: "SL",
    guideRef: "carbohydrates-lipids-proteins",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const n = rng.int(12, 180);
          const ans = n - 1;
          const polymer = rng.pick([
            { name: "linear polypeptide", mono: "amino acids", bond: "peptide bonds" },
            { name: "unbranched amylose chain", mono: "α-glucose monomers", bond: "α-1,4 glycosidic bonds" },
            { name: "linear cellulose chain", mono: "β-glucose monomers", bond: "β-1,4 glycosidic bonds" },
          ]);
          const askWater = rng.bool();
          return {
            prompt: askWater
              ? `A single ${polymer.name} is assembled by condensing ${n} ${polymer.mono}. How many **water molecules** are released? Give an integer.`
              : `A single ${polymer.name} is assembled from ${n} ${polymer.mono}. How many **${polymer.bond}** are present in this chain? Give an integer.`,
            answer: { type: "number", value: ans },
            hint: "Joining `n` monomers into one open linear chain requires `n − 1` condensation reactions.",
            traps: [
              { spec: { type: "number", value: n }, feedback: "Don't equate monomer count with bond count — an open chain of n monomers has n − 1 links." },
            ],
            solution: [
              `A single linear polymer of ${n} monomers forms {{${n} - 1 = ${ans}}} covalent bonds.`,
              `Each condensation releases 1 H₂O, giving **${ans}**.`,
            ],
          };
        }
        if (mode === 1) {
          const n = rng.int(15, 160);
          const ans = n - 1;
          const sub = rng.pick([
            { name: "an amylose chain", mono: "α-glucose" },
            { name: "a polypeptide", mono: "amino-acid" },
          ]);
          return {
            prompt: `Complete enzymatic hydrolysis breaks ${sub.name} of ${n} ${sub.mono} monomers into free monomers. How many **water molecules** are consumed? Give an integer.`,
            answer: { type: "number", value: ans },
            hint: "Hydrolysis consumes 1 H₂O for each covalent bond broken (`n − 1` bonds).",
            traps: [
              { spec: { type: "number", value: n }, feedback: "There are n − 1 covalent bonds holding n monomers together, not n." },
            ],
            solution: [
              `The chain contains {{${n} - 1 = ${ans}}} covalent bonds.`,
              `Hydrolysing every bond consumes **${ans}** water molecules.`,
            ],
          };
        }
        const k = rng.int(3, 45);
        const ans = 3 * k;
        const askEsters = rng.bool();
        return {
          prompt: askEsters
            ? `An adipocyte synthesizes ${k} triglyceride molecules from glycerol and fatty acids. How many **ester bonds** form in total? Give an integer.`
            : `Synthesizing ${k} complete triglyceride molecules from glycerol and fatty acids releases how many **water molecules** in total? Give an integer.`,
          answer: { type: "number", value: ans },
          hint: "Each triglyceride condenses 1 glycerol with 3 fatty acids (3 ester bonds, 3 H₂O).",
          traps: [
            { spec: { type: "number", value: k }, feedback: "Each triglyceride uses 3 fatty acids, forming 3 ester bonds and releasing 3 H₂O." },
            { spec: { type: "number", value: 2 * k }, feedback: "Phospholipids have 2 fatty-acid tails; triglycerides have 3 fatty acids each." },
          ],
          solution: [
            "Each triglyceride requires 3 condensation reactions (3 ester bonds, 3 H₂O).",
            `For ${k} triglycerides: {{${k} * 3 = ${ans}}}.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const chains = rng.int(2, 4);
          const lengths: number[] = [];
          for (let i = 0; i < chains; i++) lengths.push(rng.int(22, 95));
          const totalAA = lengths.reduce((a, b) => a + b, 0);
          const ans = totalAA - chains;
          return {
            prompt: `A quaternary protein consists of ${chains} separate polypeptide chains containing ${lengths.join(", ")} amino acids respectively. How many **peptide bonds** exist in one complete molecule? Give an integer.`,
            answer: { type: "number", value: ans },
            hint: "Subtract 1 per separate polypeptide chain: `total amino acids − number of chains`.",
            traps: [
              { spec: { type: "number", value: totalAA - 1 }, feedback: "That treats all amino acids as a single chain — subtract 1 for EACH of the separate chains." },
              { spec: { type: "number", value: totalAA }, feedback: `${totalAA} is the total amino-acid count; subtract ${chains} for the ${chains} chains.` },
            ],
            solution: [
              `Total amino acids = ${lengths.join(" + ")} = ${totalAA}.`,
              `Across ${chains} separate chains: {{${totalAA} - ${chains} = ${ans}}} peptide bonds.`,
            ],
          };
        }
        if (mode === 1) {
          const mLip = rng.int(5, 35);
          const mCarb = rng.int(6, 45);
          const ans = mLip * 38 + mCarb * 17;
          const swapped = mLip * 17 + mCarb * 38;
          const traps = swapped !== ans ? [{ spec: { type: "number" as const, value: swapped }, feedback: "Check which density is lipid (38 kJ g⁻¹) vs carbohydrate (17 kJ g⁻¹)." }] : [];
          return {
            prompt: `During exercise, a mammal oxidizes ${mLip} g of lipid (38 kJ g⁻¹) and ${mCarb} g of carbohydrate (17 kJ g⁻¹). Calculate the total energy released, in **kJ**. Give an integer.`,
            answer: { type: "number", value: ans },
            hint: "Multiply lipid mass by 38 kJ g⁻¹ and carbohydrate mass by 17 kJ g⁻¹, then add.",
            traps,
            solution: [
              `Lipid energy = {{${mLip} * 38 = ${mLip * 38}}} kJ; carbohydrate energy = {{${mCarb} * 17 = ${mCarb * 17}}} kJ.`,
              `Total = {{${mLip * 38} + ${mCarb * 17} = ${ans}}} kJ.`,
            ],
          };
        }
        const h = rng.pick([1.5, 1.6, 1.75, 1.8, 2.0]);
        const targetBmi = clean(rng.int(36, 64) * 0.5); // 18.0 .. 32.0 step 0.5
        const mass = roundTo(targetBmi * h * h, 1);
        const ans = roundTo(mass / (h * h), 1);
        const noSquare = roundTo(mass / h, 1);
        return {
          prompt: `Calculate the Body Mass Index (BMI = mass / height², in kg m⁻², to 1 decimal place) of an adult with mass ${num(mass)} kg and height ${h.toFixed(2)} m.`,
          answer: { type: "number", value: ans, tolerance: 0.06 },
          hint: "Square the height in metres first, then divide mass by `h²`.",
          traps: [
            { spec: { type: "number", value: noSquare, tolerance: 0.1 }, feedback: "You forgot to square height before dividing!" },
          ],
          solution: [
            `Square height: {{${h.toFixed(2)}^2 = ${clean(h * h)}}} m².`,
            `{{BMI = ${num(mass)} / ${clean(h * h)} = ${num(ans)}}} kg m⁻².`,
          ],
        };
      }

      // Tier 3: Molecular formula atom counts OR polypeptide mass in Da OR lipid↔carb equivalent mass
      const mode = rng.int(0, 2);
      if (mode === 0) {
        const n = rng.int(8, 55);
        const askH = rng.bool();
        const ans = askH ? 10 * n + 2 : 5 * n + 1;
        const noLoss = askH ? 12 * n : 6 * n;
        const offByOne = askH ? 10 * n : 5 * n;
        const elem = askH ? "hydrogen" : "oxygen";
        return {
          prompt: `An unbranched polysaccharide is synthesized by condensing ${n} glucose (C₆H₁₂O₆) monomers. How many **${elem} atoms** are present in one complete molecule? Give an integer.`,
          answer: { type: "number", value: ans },
          hint: `Start from ${n} × C₆H₁₂O₆ and subtract (${n} − 1) water molecules (each H₂O removes 2 H and 1 O).`,
          traps: [
            { spec: { type: "number", value: noLoss }, feedback: "You forgot to subtract the atoms lost in (n − 1) water molecules during condensation." },
            { spec: { type: "number", value: offByOne }, feedback: "Only n − 1 water molecules are lost in a linear chain, not n." },
          ],
          solution: [
            `Condensing ${n} glucose monomers removes {{${n} - 1 = ${n - 1}}} water molecules.`,
            askH
              ? `Hydrogen atoms = {{${n} * 12 - ${n - 1} * 2 = ${12 * n} - ${2 * (n - 1)} = ${ans}}}.`
              : `Oxygen atoms = {{${n} * 6 - ${n - 1} * 1 = ${6 * n} - ${n - 1} = ${ans}}}.`,
          ],
        };
      }
      if (mode === 1) {
        const n = rng.int(35, 195);
        const avg = rng.pick([118, 120, 124, 128, 130]);
        const ans = n * avg - (n - 1) * 18;
        return {
          prompt: `A linear polypeptide contains ${n} amino acids (average molar mass ${avg} Da). Given that each water molecule removed weighs 18 Da, calculate the molecular mass (in **Da**) of the polypeptide. Give an integer.`,
          answer: { type: "number", value: ans },
          hint: "Compute `n × avg` and subtract `(n − 1) × 18` for the water molecules eliminated.",
          traps: [
            { spec: { type: "number", value: n * avg }, feedback: "Remember to subtract (n − 1) × 18 Da for the water released in condensation." },
            { spec: { type: "number", value: n * avg - n * 18 }, feedback: "Only n − 1 peptide bonds form, so subtract (n − 1) × 18 rather than n × 18." },
          ],
          solution: [
            `Free amino-acid mass = {{${n} * ${avg} = ${n * avg}}} Da.`,
            `Water lost = {{${n - 1} * 18 = ${(n - 1) * 18}}} Da → polypeptide mass = {{${n * avg} - ${(n - 1) * 18} = ${ans}}} Da.`,
          ],
        };
      }
      const mLip = rng.int(8, 52);
      const ans = roundTo((mLip * 38) / 17, 1);
      const inv = roundTo((mLip * 17) / 38, 1);
      return {
        prompt: `A migratory bird stores ${mLip} g of triglyceride (38 kJ g⁻¹). What mass of dry carbohydrate (17 kJ g⁻¹), in **g** to 1 decimal place, would hold the exact same energy?`,
        answer: { type: "number", value: ans, tolerance: 0.06 },
        hint: "Find total energy (`m × 38`), then divide by `17 kJ g⁻¹`.",
        traps: [
          { spec: { type: "number", value: inv, tolerance: 0.06 }, feedback: "Carbohydrates store LESS energy per gram, so you need MORE grams (multiply by 38/17, not 17/38)." },
        ],
        solution: [
          `Total lipid energy = {{${mLip} * 38 = ${mLip * 38}}} kJ.`,
          `Equivalent carbohydrate mass = {{${mLip * 38} / 17 = ${num(ans)}}} g (to 1 d.p.).`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2 (SL, level 1): Cell Surface-Area-to-Volume (SA:V) Ratio Scaling
  // =========================================================================
  {
    id: `${TOPIC}.sav-scaling`,
    topicId: TOPIC,
    title: "Cell Surface-Area-to-Volume (SA:V) Ratio Scaling",
    level: 1,
    ibLevel: "SL",
    guideRef: "cell-specialization-sav",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const L = rng.pick(CLEAN_L);
        const context = rng.pick([
          "a cuboidal epithelial cell",
          "a cubic agar diffusion block",
          "a plant meristem cell modelled as a cube",
        ]);
        const ask = rng.int(0, 2);
        if (ask === 0) {
          const ans = clean(6 / L);
          const inv = roundTo(L / 6, 3);
          const traps = Math.abs(inv - ans) > 0.05
            ? [{ spec: { type: "number" as const, value: inv, tolerance: 0.01 }, feedback: "You computed V / SA (L / 6) instead of SA / V (6 / L)." }]
            : [];
          return {
            prompt: `Calculate the surface-area-to-volume ratio (in μm⁻¹) of ${context} with side length ${L} μm. Give an exact number or decimal.`,
            answer: { type: "number", value: ans, tolerance: 0.002 },
            hint: "For a cube of side `L`, `SA = 6L²` and `V = L³`, so {{SA / V = 6 / L}}.",
            traps,
            solution: [
              `For any cube, {{SA / V = 6L^2 / L^3 = 6 / L}}.`,
              `Substitute L = ${L}: {{6 / ${L} = ${num(ans)}}} μm⁻¹.`,
            ],
          };
        }
        if (ask === 1) {
          const sa = 6 * L * L;
          const vol = L * L * L;
          const traps = vol !== sa ? [{ spec: { type: "number" as const, value: vol }, feedback: "That is the volume (L³); total surface area of a cube is 6L²." }] : [];
          return {
            prompt: `Calculate the total **surface area** (in μm²) of ${context} with side length ${L} μm. Give an integer.`,
            answer: { type: "number", value: sa },
            hint: "A cube has 6 faces, each of area `L²`.",
            traps,
            solution: [
              `Area of one face = {{${L}^2 = ${L * L}}} μm².`,
              `Total surface area = {{6 * ${L * L} = ${sa}}} μm².`,
            ],
          };
        }
        const vol = L * L * L;
        const sa = 6 * L * L;
        const traps = vol !== sa ? [{ spec: { type: "number" as const, value: sa }, feedback: "That is the surface area (6L²); cube volume is L³." }] : [];
        return {
          prompt: `Calculate the **volume** (in μm³) of ${context} with side length ${L} μm. Give an integer.`,
          answer: { type: "number", value: vol },
          hint: "Volume of a cube is `L × L × L = L³`.",
          traps,
          solution: [`Volume = {{${L}^3 = ${vol}}} μm³.`],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          const r = rng.pick(CLEAN_L);
          const ans = clean(3 / r);
          const cell = rng.pick(["a spherical coccus bacterium", "a spherical lymphocyte", "a spherical sea-urchin egg"]);
          const wrongCube = clean(6 / r);
          return {
            prompt: `Calculate the surface-area-to-volume ratio (in μm⁻¹) of ${cell} of radius ${r} μm. Give an exact number or decimal.`,
            answer: { type: "number", value: ans, tolerance: 0.002 },
            hint: "For a sphere, `π` cancels out: {{SA / V = (4 pi r^2) / ((4/3) pi r^3) = 3 / r}}.",
            traps: [
              { spec: { type: "number", value: wrongCube, tolerance: 0.002 }, feedback: "6 / r is for a cube; for a sphere of radius r, SA:V = 3 / r." },
            ],
            solution: [
              "For any sphere, {{SA / V = 3 / r}}.",
              `Substitute r = ${r}: {{3 / ${r} = ${num(ans)}}} μm⁻¹.`,
            ],
          };
        }
        const a = rng.pick([10, 16, 20, 25, 40, 50]);
        const h = rng.pick([1, 2, 4, 5, 8]);
        const sa = 2 * (a * a + 2 * a * h);
        const vol = a * a * h;
        const ans = clean(sa / vol);
        const halfSa = clean(ans / 2);
        return {
          prompt: `A flattened squamous cell is modelled as a rectangular prism of dimensions ${a} μm × ${a} μm × ${h} μm. Calculate its surface-area-to-volume ratio (in μm⁻¹).`,
          answer: { type: "number", value: ans, tolerance: 0.005 },
          hint: "Compute `SA = 2(a² + 2ah)` and `V = a²h`, then divide `SA / V`.",
          traps: [
            { spec: { type: "number", value: halfSa, tolerance: 0.005 }, feedback: "Remember each pair of opposite faces counts twice: SA = 2(lw + lh + wh)." },
          ],
          solution: [
            `SA = {{2 * (${a * a} + ${a * h} + ${a * h}) = ${sa}}} μm²; V = {{${a} * ${a} * ${h} = ${vol}}} μm³.`,
            `SA:V = {{${sa} / ${vol} = ${num(ans)}}} μm⁻¹.`,
          ],
        };
      }

      // Tier 3: Multi-step scaling factor OR subdivision OR unpenetrated core %
      const mode = rng.int(0, 2);
      if (mode === 0) {
        const r1 = rng.int(2, 12);
        const k = rng.int(2, 10);
        const r2 = r1 * k;
        const shape = rng.bool() ? "spherical" : "cubic";
        const dim = shape === "spherical" ? "radius" : "side length";
        return {
          prompt: `Two ${shape} cells have ${dim} ${r1} μm (Cell A) and ${r2} μm (Cell B). By what factor is Cell A's SA:V ratio larger than Cell B's? Give an integer.`,
          answer: { type: "number", value: k },
          hint: "Since `SA:V` is inversely proportional to linear size (`∝ 1/L`), the SA:V ratio factor equals `r_B / r_A`.",
          traps: [
            { spec: { type: "number", value: k * k }, feedback: `${k * k} is the surface-area ratio (k²); SA:V scales linearly as 1/k.` },
            { spec: { type: "number", value: k * k * k }, feedback: `${k * k * k} is the volume ratio (k³); SA:V scales as 1/k.` },
          ],
          solution: [
            `SA:V is inversely proportional to ${dim}.`,
            `Ratio = {{${r2} / ${r1} = ${k}}} times larger in Cell A.`,
          ],
        };
      }
      if (mode === 1) {
        const s = rng.int(1, 5);
        const k = rng.int(2, 7);
        const L = s * k;
        const cubes = k * k * k;
        const askFactor = rng.bool();
        const newSa = cubes * 6 * s * s;
        return {
          prompt: askFactor
            ? `A cubic tissue block of side ${L} cm is cut into ${cubes} identical smaller cubes of side ${s} cm (same total volume). By what factor does the **total combined surface area** increase? Give an integer.`
            : `A cubic tissue block of side ${L} cm is cut into ${cubes} identical smaller cubes of side ${s} cm. Calculate the **new total combined surface area** (in cm²). Give an integer.`,
          answer: { type: "number", value: askFactor ? k : newSa },
          hint: askFactor
            ? "Compare original `6L²` with new total `k³ × 6(L/k)²`."
            : "Each small cube has surface area `6s²`; multiply by the total number of small cubes.",
          traps: askFactor
            ? [{ spec: { type: "number", value: cubes }, feedback: "Each small cube has smaller surface area than the big cube; divide new total SA by original SA." }]
            : [{ spec: { type: "number", value: 6 * L * L }, feedback: "That is the original surface area before cutting — multiply 6s² by the number of small cubes." }],
          solution: askFactor
            ? [
                `Original SA = {{6 * ${L}^2 = ${6 * L * L}}} cm²; new total SA = {{${cubes} * ${6 * s * s} = ${newSa}}} cm².`,
                `Increase factor = {{${newSa} / ${6 * L * L} = ${k}}}.`,
              ]
            : [
                `Each ${s} cm cube has SA = {{6 * ${s}^2 = ${6 * s * s}}} cm².`,
                `Total SA of ${cubes} cubes = {{${cubes} * ${6 * s * s} = ${newSa}}} cm².`,
              ],
        };
      }
      const L = rng.pick([2, 4, 5, 10]);
      const dSteps = L === 2 ? [0.1, 0.2, 0.3, 0.4, 0.5] : L === 4 ? [0.2, 0.4, 0.6, 0.8, 1.0] : L === 5 ? [0.25, 0.5, 0.75, 1.0, 1.25] : [0.5, 1.0, 1.5, 2.0, 2.5];
      const d = rng.pick(dSteps);
      const inner = clean(L - 2 * d);
      const fracUnpen = Math.pow(inner / L, 3);
      const pctPen = roundTo(100 * (1 - fracUnpen), 1);
      const pctUnpen = roundTo(100 * fracUnpen, 1);
      const traps = Math.abs(pctUnpen - pctPen) > 0.2
        ? [{ spec: { type: "number" as const, value: pctUnpen, tolerance: 0.1 }, feedback: "That is the UNPENETRATED core percentage — subtract from 100% to get the volume reached by acid." }]
        : [];
      return {
        prompt: `Acid diffuses ${num(d)} cm inward from every face of a ${L} cm cubic agar block (leaving an unpenetrated inner cube of side ${num(inner)} cm). Calculate the **percentage of total volume penetrated** by acid, to 1 decimal place.`,
        answer: { type: "number", value: pctPen, tolerance: 0.1 },
        hint: "Compute `100 × (L³ − (L − 2d)³) / L³`.",
        traps,
        solution: [
          `Total volume = {{${L}^3 = ${clean(L ** 3)}}} cm³; unpenetrated core volume = {{${num(inner)}^3 = ${clean(inner ** 3)}}} cm³.`,
          `Percentage penetrated = {{100 * (${clean(L ** 3)} - ${clean(inner ** 3)}) / ${clean(L ** 3)} = ${num(pctPen)}}}%.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3 (HL, level 2): Membrane Transport Gradients & Na⁺/K⁺ Pump Stoichiometry
  // =========================================================================
  {
    id: `${TOPIC}.membrane-transport-pumps`,
    topicId: TOPIC,
    title: "Membrane Transport Gradients & Na⁺/K⁺ Pump Stoichiometry [HL]",
    level: 2,
    ibLevel: "HL",
    guideRef: "membranes-transport",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const atp = rng.int(4, 55);
        const mode = rng.int(0, 3);
        const cell = rng.pick(["an axon", "a kidney tubule cell", "an intestinal enterocyte", "a cardiac myocyte"]);
        if (mode === 0) {
          return {
            prompt: `Na⁺/K⁺-ATPase pumps in ${cell} hydrolyse ${atp} molecules of ATP. How many **Na⁺ ions** are pumped OUT of the cell? Give an integer.`,
            answer: { type: "number", value: 3 * atp },
            hint: "Recall 3-2-1: each ATP hydrolysed exports 3 Na⁺ ions and imports 2 K⁺ ions.",
            traps: [
              { spec: { type: "number", value: 2 * atp }, feedback: "2 per ATP is K⁺ imported; Na⁺ is exported at 3 per ATP." },
            ],
            solution: [`1 ATP exports 3 Na⁺ → {{${atp} * 3 = ${3 * atp}}} Na⁺ ions pumped out.`],
          };
        }
        if (mode === 1) {
          return {
            prompt: `Na⁺/K⁺-ATPase pumps in ${cell} hydrolyse ${atp} molecules of ATP. How many **K⁺ ions** are pumped INTO the cell? Give an integer.`,
            answer: { type: "number", value: 2 * atp },
            hint: "Each ATP cycle imports 2 K⁺ ions (and exports 3 Na⁺ ions).",
            traps: [
              { spec: { type: "number", value: 3 * atp }, feedback: "3 per ATP is Na⁺ exported; K⁺ is imported at 2 per ATP." },
            ],
            solution: [`1 ATP imports 2 K⁺ → {{${atp} * 2 = ${2 * atp}}} K⁺ ions pumped in.`],
          };
        }
        if (mode === 2) {
          return {
            prompt: `Na⁺/K⁺-ATPase pumps in ${cell} export ${3 * atp} Na⁺ ions. How many **ATP molecules** were hydrolysed? Give an integer.`,
            answer: { type: "number", value: atp },
            hint: "Divide Na⁺ exported by 3 (since 3 Na⁺ leave per ATP).",
            traps: [
              { spec: { type: "number", value: 9 * atp }, feedback: "Divide by 3 instead of multiplying by 3 — each ATP moves 3 Na⁺ ions." },
            ],
            solution: [`ATP hydrolysed = {{${3 * atp} / 3 = ${atp}}} molecules.`],
          };
        }
        return {
          prompt: `Na⁺/K⁺-ATPase pumps in ${cell} hydrolyse ${atp} ATP molecules. What is the **total number of ions** (Na⁺ + K⁺ combined) moved across the membrane? Give an integer.`,
          answer: { type: "number", value: 5 * atp },
          hint: "Each cycle moves 3 Na⁺ out + 2 K⁺ in = 5 ions total.",
          traps: [
            { spec: { type: "number", value: atp }, feedback: `${atp} is the NET charge exported (3 − 2 = 1 per ATP); total ions moved is 3 + 2 = 5 per ATP.` },
          ],
          solution: [`Each ATP moves 3 + 2 = 5 ions → {{${atp} * 5 = ${5 * atp}}} ions total.`],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const k = rng.int(6, 65);
          const askNa = rng.bool();
          return askNa
            ? {
                prompt: `During active ion recovery, Na⁺/K⁺-ATPase pumps import ${2 * k} K⁺ ions into a neuron. How many **Na⁺ ions** are simultaneously exported? Give an integer.`,
                answer: { type: "number", value: 3 * k },
                hint: "First divide K⁺ by 2 to find ATP cycles, then multiply by 3.",
                traps: [
                  { spec: { type: "number", value: k }, feedback: `${k} is the number of ATP cycles — multiply by 3 for Na⁺ exported.` },
                ],
                solution: [
                  `ATP cycles = {{${2 * k} / 2 = ${k}}}.`,
                  `Na⁺ exported = {{${k} * 3 = ${3 * k}}} ions.`,
                ],
              }
            : {
                prompt: `During active ion recovery, Na⁺/K⁺-ATPase pumps export ${3 * k} Na⁺ ions out of a neuron. How many **K⁺ ions** are simultaneously imported? Give an integer.`,
                answer: { type: "number", value: 2 * k },
                hint: "First divide Na⁺ by 3 to find ATP cycles, then multiply by 2.",
                traps: [
                  { spec: { type: "number", value: k }, feedback: `${k} is the number of ATP cycles — multiply by 2 for K⁺ imported.` },
                ],
                solution: [
                  `ATP cycles = {{${3 * k} / 3 = ${k}}}.`,
                  `K⁺ imported = {{${k} * 2 = ${2 * k}}} ions.`,
                ],
              };
        }
        if (mode === 1) {
          const outC = rng.int(12, 48);
          const inC = rng.int(2, 9);
          const scenario = rng.int(0, 2);
          if (scenario === 0) {
            return {
              prompt: `A small non-polar gas (external ${outC} μmol dm⁻³, cytosolic ${inC} μmol dm⁻³) enters cells at a linear rate unaffected by respiratory inhibitors. Name the transport mechanism.`,
              answer: { type: "text", accept: ["simple diffusion", "passive diffusion", "diffusion"] },
              hint: "Small non-polar, down gradient, linear (non-saturating), zero ATP needed.",
              solution: [
                "Small non-polar solutes moving down a concentration gradient linearly without ATP cross by **simple diffusion**.",
              ],
            };
          }
          if (scenario === 1) {
            return {
              prompt: `A polar monosaccharide (external ${outC} mmol dm⁻³, cytosolic ${inC} mmol dm⁻³) enters erythrocytes passively, unaffected by cyanide, but reaches a saturation plateau at high concentration. Name the transport mechanism.`,
              answer: { type: "text", accept: ["facilitated diffusion"] },
              hint: "Passive down-gradient transport that saturates a finite number of carrier proteins.",
              solution: [
                "Down-gradient, ATP-independent transport showing protein saturation is **facilitated diffusion**.",
              ],
            };
          }
          return {
            prompt: `Mineral ion M⁺ (external ${inC} mmol dm⁻³, cytosolic ${outC} mmol dm⁻³) accumulates rapidly inside root hair cells until cyanide blocks ATP synthesis and uptake ceases. Name the transport mechanism.`,
            answer: { type: "text", accept: ["active transport", "primary active transport"] },
            hint: "Moving from lower to higher concentration and halted by an ATP inhibitor.",
            solution: [
              `Moving from ${inC} to ${outC} mmol dm⁻³ (against the gradient) and stopping without ATP confirms **active transport**.`,
            ],
          };
        }
        // Osmosis scenario with varied solute concentrations
        const lowS = rng.int(20, 140);
        const highS = lowS + rng.int(80, 250);
        return {
          prompt: `Pure water moves rapidly across aquaporin channels from an external bath (${lowS} mOsm) into a cell (${highS} mOsm) without ATP hydrolysis. Name this membrane transport process.`,
          answer: { type: "text", accept: ["osmosis"] },
          hint: "Passive net movement of water down its water potential gradient across a selectively permeable membrane.",
          solution: [
            `Water moves passively from lower osmolarity (${lowS} mOsm) to higher osmolarity (${highS} mOsm) via **osmosis**.`,
          ],
        };
      }

      // Tier 3: Multi-pump rate calculation OR coupled SGLT1 + Na⁺/K⁺ ATP stoichiometry
      const mode = rng.int(0, 1);
      if (mode === 0) {
        const pumps = rng.pick([40, 50, 80, 100, 150, 200, 250, 300, 400, 500]);
        const rate = rng.pick([10, 20, 25, 30, 40, 50, 60]);
        const sec = rng.int(2, 12);
        const cycles = pumps * rate * sec;
        const ask = rng.int(0, 2);
        if (ask === 0) {
          return {
            prompt: `An axon segment has ${pumps} Na⁺/K⁺-ATPase pumps, each completing ${rate} cycles s⁻¹. How many **Na⁺ ions** are exported in ${sec} seconds? Give an integer.`,
            answer: { type: "number", value: 3 * cycles },
            hint: "Compute `pumps × rate × seconds` for total cycles, then multiply by 3 Na⁺ per cycle.",
            traps: [
              { spec: { type: "number", value: cycles }, feedback: `${cycles} is total ATP cycles — multiply by 3 Na⁺ exported per cycle.` },
              { spec: { type: "number", value: 2 * cycles }, feedback: "That uses 2 per cycle (K⁺ imported); Na⁺ exports 3 per cycle." },
            ],
            solution: [
              `Total cycles = {{${pumps} * ${rate} * ${sec} = ${cycles}}}.`,
              `Na⁺ exported = {{${cycles} * 3 = ${3 * cycles}}} ions.`,
            ],
          };
        }
        if (ask === 1) {
          return {
            prompt: `An axon segment has ${pumps} Na⁺/K⁺-ATPase pumps, each completing ${rate} cycles s⁻¹. How many **K⁺ ions** are imported in ${sec} seconds? Give an integer.`,
            answer: { type: "number", value: 2 * cycles },
            hint: "Compute `pumps × rate × seconds` for total cycles, then multiply by 2 K⁺ per cycle.",
            traps: [
              { spec: { type: "number", value: 3 * cycles }, feedback: "3 per cycle is Na⁺ exported; K⁺ is imported at 2 per cycle." },
            ],
            solution: [
              `Total cycles = {{${pumps} * ${rate} * ${sec} = ${cycles}}}.`,
              `K⁺ imported = {{${cycles} * 2 = ${2 * cycles}}} ions.`,
            ],
          };
        }
        return {
          prompt: `An axon segment has ${pumps} Na⁺/K⁺-ATPase pumps, each completing ${rate} cycles s⁻¹. What **net number of positive elementary charges** is exported across the membrane in ${sec} seconds? Give an integer.`,
          answer: { type: "number", value: cycles },
          hint: "Each cycle exports 3 Na⁺ and imports 2 K⁺, giving a net export of `3 − 2 = +1` positive charge per cycle.",
          traps: [
            { spec: { type: "number", value: 3 * cycles }, feedback: "Remember 2 K⁺ positive charges enter during each cycle, offsetting 2 of the 3 Na⁺ exported." },
          ],
          solution: [
            `Total cycles = {{${pumps} * ${rate} * ${sec} = ${cycles}}}.`,
            `Net positive charge exported per cycle = 3 − 2 = +1 → **${cycles}** net charges.`,
          ],
        };
      }
      // SGLT1 coupled ATP cost (ratio explicitly stated in stem for 100% precision)
      const naPerGlucose = rng.pick([1, 2]);
      const mult = rng.int(4, 30);
      const glucose = 3 * mult;
      const naIn = glucose * naPerGlucose;
      const atpNeeded = naIn / 3;
      return {
        prompt: `An apical sodium–glucose cotransporter imports ${naPerGlucose} Na⁺ ion(s) for every 1 glucose molecule absorbed. If an enterocyte absorbs ${glucose} glucose molecules, how many **ATP molecules** must basolateral Na⁺/K⁺-ATPase pumps hydrolyse to pump all those entered Na⁺ ions back out? Give an integer.`,
        answer: { type: "number", value: atpNeeded },
        hint: "Find total Na⁺ entering (`glucose × stoichiometry`), then divide by 3 Na⁺ exported per ATP.",
        traps: [
          { spec: { type: "number", value: naIn }, feedback: `${naIn} is the number of Na⁺ ions entering — each ATP exports 3 Na⁺ ions, so divide by 3.` },
        ],
        solution: [
          `Total Na⁺ co-imported = {{${glucose} * ${naPerGlucose} = ${naIn}}} Na⁺ ions.`,
          `Since 1 ATP exports 3 Na⁺: ATP required = {{${naIn} / 3 = ${atpNeeded}}} molecules.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4 (SL, level 2): Organelle Ultrastructure, Compartmentalization & Protein Levels
  // =========================================================================
  {
    id: `${TOPIC}.organelles-ultrastructure`,
    topicId: TOPIC,
    title: "Organelle Ultrastructure, Compartmentalization & Protein Levels",
    level: 2,
    ibLevel: "SL",
    guideRef: "organelles-compartmentalization",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const specimen = rng.pick([
          "hepatocyte sample",
          "pancreatic biopsy",
          "leaf mesophyll micrograph",
          "human epithelial culture",
          "mammalian kidney section",
          "cultured yeast micrograph",
        ]);
        const code = rng.int(101, 989);
        const items: Array<{ clue: string; accept: string[]; explain: string }> = [
          {
            clue: `double-membrane organelle with folded inner cristae (${rng.int(15, 38)}% of cell volume) housing ETC complexes and ATP synthase`,
            accept: ["mitochondrion", "mitochondria"],
            explain: "The **mitochondrion** folds its inner membrane into cristae for oxidative phosphorylation.",
          },
          {
            clue: `double-membrane organelle containing chlorophyll-rich stacked thylakoid grana (${rng.int(12, 34)}% of volume) and fluid stroma`,
            accept: ["chloroplast", "chloroplasts"],
            explain: "The **chloroplast** houses grana/thylakoids for light-dependent reactions and stroma for the Calvin cycle.",
          },
          {
            clue: `double-membrane organelle perforated by protein pores (${rng.int(8, 22)}% of cell volume) enclosing linear chromosomes`,
            accept: ["nucleus", "nuclei"],
            explain: "The **nucleus** encloses eukaryotic chromosomes within a perforated double nuclear envelope.",
          },
          {
            clue: `network of flattened single-membrane sacs studded with 80S ribosomes (${rng.int(20, 48)}% of membrane area) synthesizing proteins for export`,
            accept: ["rough endoplasmic reticulum", "rough er", "rer"],
            explain: "**Rough endoplasmic reticulum (rER)** carries bound 80S ribosomes translating secreted and membrane proteins.",
          },
          {
            clue: `tubular single-membrane network lacking ribosomes (${rng.int(18, 44)}% of membrane area) synthesizing phospholipids and steroid hormones`,
            accept: ["smooth endoplasmic reticulum", "smooth er", "ser"],
            explain: "**Smooth endoplasmic reticulum (sER)** synthesizes lipids/steroids and stores Ca²⁺ without attached ribosomes.",
          },
          {
            clue: `curved stack of ${rng.int(4, 9)} flattened cisternae modifying glycoproteins from transport vesicles and packaging secretory vesicles`,
            accept: ["golgi apparatus", "golgi body", "golgi", "golgi complex"],
            explain: "The **Golgi apparatus** modifies, sorts, and packages proteins from the rER into secretory vesicles or lysosomes.",
          },
          {
            clue: `single-membrane spherical vesicle (${rng.int(200, 650)} nm diameter) at acidic pH ~5 filled with hydrolytic enzymes for autophagy`,
            accept: ["lysosome", "lysosomes"],
            explain: "**Lysosomes** sequester acid hydrolases at pH ~5 to digest pathogens and recycle damaged organelles.",
          },
          {
            clue: `non-membranous ribonucleoprotein complex (80S, ~${rng.int(22, 30)} nm wide) translating mRNA codons into polypeptide chains`,
            accept: ["ribosome", "ribosomes", "80s ribosome"],
            explain: "**Ribosomes** have no membrane and catalyze peptide-bond formation during translation.",
          },
        ];
        const picked = rng.pick(items);
        return {
          prompt: `Electron microscopy of ${specimen} #${code} highlights a ${picked.clue}. Name this organelle.`,
          answer: { type: "text", accept: picked.accept },
          hint: "Focus on the membrane count (0, 1, or 2) and the primary biochemical role described.",
          solution: [picked.explain],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const basePh = rng.pick([7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.8, 8.0]);
          const diff = rng.pick([1, 2, 3]);
          const acidPh = clean(basePh - diff);
          const ans = Math.pow(10, diff);
          const pair = rng.pick([
            { inner: "lysosome", outer: "cytosol" },
            { inner: "thylakoid lumen", outer: "chloroplast stroma" },
            { inner: "mitochondrial intermembrane space", outer: "mitochondrial matrix" },
          ]);
          const traps = [
            { spec: { type: "number" as const, value: diff }, feedback: `${diff} is ΔpH — because pH is a base-10 log scale, raise 10 to the power ${diff}.` },
            ...(diff > 1
              ? [{ spec: { type: "number" as const, value: 10 * diff }, feedback: "Each 1 pH unit multiplies [H⁺] by 10 (10^ΔpH), not 10 × ΔpH." }]
              : []),
          ];
          return {
            prompt: `A ${pair.inner} maintains pH ${acidPh.toFixed(1)} while the surrounding ${pair.outer} sits at pH ${basePh.toFixed(1)}. How many times higher is [H⁺] inside the ${pair.inner}? Give an integer.`,
            answer: { type: "number", value: ans },
            hint: "Subtract the two pH values (`ΔpH`), then raise 10 to the power `ΔpH`.",
            traps,
            solution: [
              `pH difference = {{${basePh.toFixed(1)} - ${acidPh.toFixed(1)} = ${diff}}}.`,
              `Fold increase in [H⁺] = {{10^${diff} = ${ans}}} times higher.`,
            ],
          };
        }
        if (mode === 1) {
          const cell = rng.pick(["a hepatocyte", "a palisade mesophyll cell", "a pancreatic acinar cell", "a skeletal muscle fibre"]);
          const org = rng.pick([
            { name: "mitochondrion", count: 2 },
            { name: "chloroplast", count: 2 },
            { name: "nucleus", count: 2 },
            { name: "lysosome", count: 1 },
            { name: "Golgi apparatus cisterna", count: 1 },
            { name: "rough ER cisterna", count: 1 },
            { name: "secretory vesicle", count: 1 },
            { name: "cytoplasmic 80S ribosome", count: 0 },
          ]);
          return {
            prompt: `In ${cell}, how many **phospholipid bilayers** (0, 1, or 2) form the boundary envelope around a single ${org.name}? Give an integer.`,
            answer: { type: "number", value: org.count },
            hint: "Recall NMC (Nucleus, Mitochondria, Chloroplasts) = 2 membranes; endomembrane sacs = 1; ribosomes = 0.",
            solution: [
              `A ${org.name} is bounded by **${org.count}** phospholipid bilayer(s).`,
            ],
          };
        }
        const outerArea = rng.int(4, 24);
        const foldFactor = rng.int(3, 12);
        const ans = outerArea * foldFactor;
        const org = rng.bool() ? "mitochondrion (inner cristae)" : "chloroplast (internal thylakoid system)";
        return {
          prompt: `A single ${org} has a smooth outer membrane surface area of ${outerArea} μm². If internal membrane folding multiplies surface area by a factor of ${foldFactor}, calculate the total internal membrane area in **μm²**. Give an integer.`,
          answer: { type: "number", value: ans },
          hint: "Multiply outer membrane area by the folding factor.",
          solution: [`Internal membrane surface area = {{${outerArea} * ${foldFactor} = ${ans}}} μm².`],
        };
      }

      // Tier 3: Total bioenergetic membrane surface area across N organelles OR structural protein level matching
      const mode = rng.int(0, 1);
      if (mode === 0) {
        const count = rng.pick([50, 80, 100, 120, 150, 200, 250, 300, 400, 500, 600, 800]);
        const areaEach = rng.int(12, 48);
        const ans = count * areaEach;
        const cell = rng.pick(["a cardiac myocyte", "an active liver hepatocyte", "a proximal kidney tubule cell", "a flight-muscle fibre"]);
        return {
          prompt: `Morphometric imaging of ${cell} counts ${count} mitochondria, each containing ${areaEach} μm² of folded cristae membrane. Calculate the **total cristae membrane area** (in μm²) available for oxidative phosphorylation in this cell. Give an integer.`,
          answer: { type: "number", value: ans },
          hint: "Multiply the number of mitochondria by the cristae surface area per mitochondrion.",
          solution: [`Total cristae area = {{${count} * ${areaEach} = ${ans}}} μm².`],
        };
      }
      const aa = rng.int(50, 320);
      const subs = rng.int(2, 6);
      const levelCase = rng.pick([
        {
          desc: `linear sequence of ${aa} amino acids joined strictly by covalent peptide bonds`,
          accept: ["primary", "primary structure", "1°", "1st"],
          explain: "The exact amino-acid sequence linked by peptide bonds defines **primary** structure.",
        },
        {
          desc: `regular α-helices and β-pleated sheets across a ${aa}-residue chain stabilized purely by backbone C=O···H–N hydrogen bonds`,
          accept: ["secondary", "secondary structure", "2°", "2nd"],
          explain: "Backbone hydrogen bonding (independent of R-groups) defines **secondary** structure.",
        },
        {
          desc: `overall 3D globular fold of a single ${aa}-residue polypeptide locked by disulfide bridges, ionic bonds, and a hydrophobic R-group core`,
          accept: ["tertiary", "tertiary structure", "3°", "3rd"],
          explain: "R-group interactions folding a single polypeptide into its 3D shape define **tertiary** structure.",
        },
        {
          desc: `functional complex assembled from ${subs} separate polypeptide subunits (each ~${aa} residues long) plus iron-containing haem prosthetic groups`,
          accept: ["quaternary", "quaternary structure", "4°", "4th"],
          explain: "Assembly of two or more polypeptide subunits (± prosthetic groups) defines **quaternary** structure.",
        },
      ]);
      return {
        prompt: `Biochemical analysis of a protein reveals a ${levelCase.desc}. Identify the **level of protein structure** (primary, secondary, tertiary, or quaternary).`,
        answer: { type: "text", accept: levelCase.accept },
        hint: "Distinguish peptide sequence (1°), backbone H-bonds (2°), single-chain R-group folding (3°), and multi-subunit assembly (4°).",
        solution: [levelCase.explain],
      };
    },
  },
];
