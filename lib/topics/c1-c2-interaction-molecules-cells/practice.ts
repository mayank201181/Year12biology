import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK DIAGNOSTIC QUIZ (10 Qs)
  // =========================================================================
  quiz: [
    {
      id: "c1-c2-interaction-molecules-cells-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "enzymes-metabolism",
      question:
        "Catalase decomposes hydrogen peroxide, releasing 45.0 cm³ of oxygen gas during the first 75 seconds at 37 °C. Calculate the initial reaction rate in {{cm^3 min^(-1)}}.",
      answer: { type: "number", value: 36, tolerance: 0.1, display: "36 cm³ min⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 0.6, tolerance: 0.01 },
          feedback: "That is the rate in cm³ s⁻¹ (45 / 75) — multiply by 60 to convert to cm³ min⁻¹.",
        },
        {
          spec: { type: "number", value: 56.25, tolerance: 0.2 },
          feedback: "Check your conversion: 75 s = 1.25 min, so divide 45.0 by 1.25 rather than multiplying.",
        },
      ],
      solution: [
        "Convert time to minutes: {{75 / 60 = 1.25 min}}.",
        "Divide oxygen volume by time: {{45.0 / 1.25 = 36 cm^3 min^(-1)}}.",
      ],
      hints: [
        "Convert 75 seconds into minutes before dividing.",
        "Rate = volume ÷ time = 45.0 ÷ 1.25.",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-quiz-q02",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "enzymes-metabolism",
      question:
        "An enzyme catalyses a reaction at 50 μmol min⁻¹ without an inhibitor, and at 32 μmol min⁻¹ in the presence of an inhibitor under identical conditions. Calculate the percentage inhibition.",
      answer: { type: "number", value: 36, tolerance: 0.1, display: "36%" },
      traps: [
        {
          spec: { type: "number", value: 64, tolerance: 0.1 },
          feedback: "64% is the percentage of activity REMAINING (32 / 50 × 100); subtract from 100% to get percentage inhibition.",
        },
      ],
      solution: [
        "Find the decrease in rate: {{50 - 32 = 18}} μmol min⁻¹.",
        "Calculate percentage inhibition: {{(18 / 50) * 100 = 36%}}.",
      ],
      hints: [
        "Use % inhibition = ((v₀ − vᵢ) / v₀) × 100.",
        "First subtract 32 from 50, then divide by the original rate 50.",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "cell-respiration-photosynthesis",
      question:
        "On a leaf pigment chromatogram, xanthophyll migrates 4.8 cm from the origin line while the solvent front migrates 7.5 cm. Calculate the {{R_f}} value of xanthophyll to 2 decimal places.",
      answer: { type: "number", value: 0.64, tolerance: 0.005, display: "0.64" },
      traps: [
        {
          spec: { type: "number", value: 1.56, tolerance: 0.02 },
          feedback: "That is inverted (solvent ÷ pigment). An Rf value must always be less than 1.",
        },
      ],
      solution: [
        "Apply {{R_f = d_pigment / d_solvent}}.",
        "{{R_f = 4.8 / 7.5 = 0.64}} (dimensionless — no units).",
      ],
      hints: [
        "Divide pigment distance by solvent front distance.",
        "Check that your answer lies strictly between 0 and 1.",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "cell-respiration-photosynthesis",
      question:
        "During anaerobic fermentation in dough, baker's yeast breaks down 4 moles of glucose completely into ethanol and carbon dioxide. How many moles of {{CO_2}} gas are released?",
      answer: { type: "number", value: 8, display: "8" },
      traps: [
        {
          spec: { type: "number", value: 24 },
          feedback: "24 moles of CO₂ would require complete aerobic respiration (6 CO₂ per glucose); yeast anaerobic fermentation releases only 2 CO₂ per glucose.",
        },
      ],
      solution: [
        "Yeast anaerobic equation: {{C_6H_12O_6 -> 2 C_2H_5OH + 2 CO_2}}.",
        "Each mole of glucose produces 2 moles of {{CO_2}}, so 4 moles yield {{4 * 2 = 8}} moles of {{CO_2}}.",
      ],
      hints: [
        "Recall the stoichiometry of yeast ethanol fermentation per glucose molecule.",
        "Each glucose yields 2 ethanol and 2 CO₂.",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "cell-respiration-photosynthesis",
      question:
        "Three molecules of glucose undergo complete aerobic respiration. How many molecules of {{FADH_2}} are produced in total during the Krebs cycle?",
      answer: { type: "number", value: 6, display: "6 FADH₂" },
      traps: [
        {
          spec: { type: "number", value: 3 },
          feedback: "Remember that each glucose produces TWO acetyl-CoA molecules, so the Krebs cycle turns twice per glucose.",
        },
      ],
      solution: [
        "Each turn of the Krebs cycle produces 1 {{FADH_2}}.",
        "Each glucose forms 2 acetyl-CoA → 2 turns = 2 {{FADH_2}} per glucose.",
        "For 3 glucose molecules: {{3 * 2 = 6}} {{FADH_2}}.",
      ],
      hints: [
        "How many turns of the Krebs cycle occur for ONE molecule of glucose?",
        "Multiply 2 FADH₂ per glucose by 3 glucose molecules.",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "State",
      guideRef: "chemical-signaling-hl",
      question:
        "State the specific class of transmembrane receptor protein that insulin binds on skeletal muscle cells to trigger autophosphorylation and GLUT4 exocytosis.",
      answer: {
        type: "text",
        accept: ["receptor tyrosine kinase", "tyrosine kinase receptor", "tyrosine kinase", "rtk"],
        display: "receptor tyrosine kinase",
      },
      solution: [
        "Insulin binds a **receptor tyrosine kinase** (RTK), causing intracellular tyrosine domains to autophosphorylate and recruit GLUT4 vesicles to the plasma membrane.",
      ],
      hints: [
        "It is not a GPCR or a ligand-gated ion channel; its name includes the amino acid phosphorylated on its cytoplasmic tail.",
        "Two words starting with 'tyrosine' (or three starting with 'receptor').",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-quiz-q07",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "neural-signaling",
      question:
        "An action potential travels 0.72 m along a myelinated motor axon at {{90 m s^(-1)}}. Calculate the conduction time in milliseconds (ms).",
      answer: { type: "number", value: 8, tolerance: 0.05, display: "8 ms" },
      traps: [
        {
          spec: { type: "number", value: 0.008, tolerance: 0.0005 },
          feedback: "That is the time in seconds — multiply by 1000 to convert to milliseconds.",
        },
      ],
      solution: [
        "Calculate time in seconds: {{t = 0.72 / 90 = 0.008 s}}.",
        "Convert to milliseconds: {{0.008 * 1000 = 8 ms}}.",
      ],
      hints: [
        "Use t = d / v.",
        "Multiply the time in seconds by 1000 to get milliseconds.",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "neural-signaling",
      question:
        "A neuron rests at −70 mV and simultaneously receives two excitatory postsynaptic potentials of +8 mV each alongside one inhibitory postsynaptic potential of −4 mV. Calculate the resulting membrane potential in mV.",
      answer: { type: "number", value: -58, tolerance: 0.1, display: "−58 mV" },
      traps: [
        {
          spec: { type: "number", value: 12 },
          feedback: "+12 mV is the net change (ΔV); add it to the resting potential of −70 mV.",
        },
      ],
      solution: [
        "Net voltage change from spatial summation: {{(+8) + (+8) + (-4) = +12 mV}}.",
        "Resulting membrane potential: {{-70 + 12 = -58 mV}}.",
      ],
      hints: [
        "Sum all three postsynaptic changes first, paying attention to signs.",
        "Add the net change to −70 mV.",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "enzymes-metabolism",
      marks: 3,
      question: "Explain why shifting a solution far away from an enzyme's optimum pH sharply reduces its catalytic rate. [3 marks]",
      modelAnswer:
        "Changing pH alters the concentration of H⁺ ions, which changes the ionization and electrical charges of amino-acid R-groups. This disrupts ionic and hydrogen bonds maintaining the globular tertiary structure, altering the shape of the active site (denaturation). Consequently, the substrate is no longer complementary to the active site, so fewer enzyme–substrate complexes form per unit time.",
      markScheme: [
        {
          point: "Alters ionization / electrical charges of amino-acid R-groups",
          keywords: ["ionization", "ionisation", "charge", "charges", "r-group", "r-groups"],
        },
        {
          point: "Disrupts ionic or hydrogen bonds maintaining 3D tertiary structure (denaturation)",
          keywords: ["ionic", "hydrogen bonds", "tertiary", "denaturation", "denatures"],
        },
        {
          point: "Active site shape changes so substrate no longer fits / fewer enzyme–substrate complexes form",
          keywords: ["active site", "complementary", "enzyme-substrate", "complexes"],
        },
      ],
      hints: [
        "Start at the chemical level: how do excess H⁺ or OH⁻ ions affect amino-acid R-groups?",
        "Connect broken ionic/hydrogen bonds to tertiary folding, active-site shape, and enzyme–substrate complexes.",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Outline",
      guideRef: "neural-signaling",
      marks: 3,
      question:
        "Outline three sequential events at a cholinergic synapse between the arrival of a nerve impulse at the presynaptic knob and depolarization of the postsynaptic membrane. [3 marks]",
      modelAnswer:
        "Voltage-gated Ca²⁺ channels open in the presynaptic terminal and calcium ions diffuse inward. Ca²⁺ influx causes synaptic vesicles containing acetylcholine to fuse with the membrane by exocytosis. Acetylcholine diffuses across the synaptic cleft and binds to complementary ligand-gated Na⁺ receptors on the postsynaptic cell, opening them so sodium ions rush inward.",
      markScheme: [
        {
          point: "Voltage-gated Ca²⁺ channels open and Ca²⁺ ions enter the presynaptic terminal",
          keywords: ["ca2+", "calcium", "channels open"],
        },
        {
          point: "Synaptic vesicles release acetylcholine into the cleft via exocytosis",
          keywords: ["vesicles", "exocytosis", "fuse", "acetylcholine"],
        },
        {
          point: "Neurotransmitter diffuses across the cleft and binds postsynaptic ligand-gated Na⁺ receptors so Na⁺ enters",
          keywords: ["diffuses", "cleft", "ligand-gated", "na+", "sodium"],
        },
      ],
      hints: [
        "Include the divalent ion that triggers vesicle fusion.",
        "Name the transport mechanism releasing ACh and the ion that enters the postsynaptic neuron.",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (p1: 15 Qs, p2: 15 Qs)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1: ENZYMES, RESPIRATION & PHOTOSYNTHESIS (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "c1-c2-interaction-molecules-cells-p1",
      title: "Practice Paper 1 · Enzymes, Respiration & Photosynthesis [SL/HL]",
      level: "SL",
      questions: [
        {
          id: "c1-c2-interaction-molecules-cells-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "enzymes-metabolism",
          question:
            "A protease solution digests 16.8 mg of casein protein during the initial 24 seconds of incubation at 37 °C. Calculate the initial rate of protein digestion in {{mg min^(-1)}} (give the numerical value).",
          answer: { type: "number", value: 42, tolerance: 0.1, display: "42" },
          traps: [
            {
              spec: { type: "number", value: 0.7, tolerance: 0.01 },
              feedback: "0.7 is the rate in mg s⁻¹ — multiply by 60 to express it per minute.",
            },
          ],
          solution: [
            "Convert 24 s to minutes: {{24 / 60 = 0.40 min}}.",
            "Divide mass by time: {{16.8 / 0.40 = 42}} mg min⁻¹.",
          ],
          hints: [
            "First express 24 seconds as a decimal fraction of a minute (24 / 60).",
            "Divide 16.8 by 0.40.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q02",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "enzymes-metabolism",
          marks: 3,
          question:
            "Distinguish between anabolism and catabolism in living cells, providing one specific biological example of each process. [3 marks]",
          modelAnswer:
            "Anabolism synthesizes complex macromolecules from smaller monomers through condensation reactions and requires an input of ATP energy, whereas catabolism breaks large compounds down into smaller subunits via hydrolysis or oxidation and releases energy. An example of anabolism is assembling polypeptides from amino acids at ribosomes (or synthesizing glycogen from glucose); an example of catabolism is hydrolysing starch into maltose or oxidising glucose during cellular respiration.",
          markScheme: [
            {
              point: "Anabolism builds larger molecules via condensation and consumes energy (ATP)",
              keywords: ["condensation", "builds", "synthesizes", "monomers", "requires", "input"],
            },
            {
              point: "Catabolism breaks down large molecules via hydrolysis/oxidation and releases energy",
              keywords: ["hydrolysis", "oxidation", "breaks", "releases energy", "subunits"],
            },
            {
              point: "One valid biological example for each (e.g., protein/glycogen/photosynthesis vs digestion/respiration)",
              keywords: ["polypeptides", "glycogen", "photosynthesis", "respiration", "starch", "maltose"],
            },
          ],
          hints: [
            "Contrast BOTH chemical direction (condensation vs hydrolysis) and energy flow (requires vs releases energy).",
            "Give one named biochemical example for each branch.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "enzymes-metabolism",
          question:
            "In an assay of HMG-CoA reductase at 10 mmol dm⁻³ substrate, the control initial rate is 85 μmol min⁻¹. Adding a statin drug reduces the initial rate to 51 μmol min⁻¹. Calculate the percentage inhibition.",
          answer: { type: "number", value: 40, tolerance: 0.1, display: "40%" },
          traps: [
            {
              spec: { type: "number", value: 60, tolerance: 0.1 },
              feedback: "60% is the remaining enzyme activity (51 / 85 × 100), not the percentage inhibition.",
            },
          ],
          solution: [
            "Rate reduction: {{85 - 51 = 34}} μmol min⁻¹.",
            "Percentage inhibition: {{(34 / 85) * 100 = 40%}}.",
          ],
          hints: [
            "Find the drop in rate (85 − 51).",
            "Divide the drop by the uninhibited control rate (85) and multiply by 100.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "State",
          guideRef: "enzymes-metabolism",
          question:
            "State the name of the bacterial cell-wall enzyme covalently and irreversibly inactivated by penicillin.",
      answer: {
        type: "text",
        accept: ["transpeptidase", "dd-transpeptidase", "dd-peptidase"],
        display: "transpeptidase",
      },
          solution: [
            "Penicillin acts as a mechanism-based irreversible inhibitor of bacterial **transpeptidase** (DD-peptidase), blocking peptidoglycan cross-linking.",
          ],
          hints: [
            "It cross-links short peptide chains within bacterial peptidoglycan.",
            "One word starting with 'trans-' and ending with '-ase'.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q05",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Compare and contrast",
          guideRef: "enzymes-metabolism",
          marks: 5,
          question:
            "Compare and contrast reversible competitive inhibition and reversible non-competitive inhibition, including their binding sites, effects on {{V_max}} and apparent {{K_m}}, and one named biological or clinical example of each. [5 marks]",
          modelAnswer:
            "Both modes bind enzymes via reversible non-covalent interactions and lower the reaction rate at low substrate levels. However, a competitive inhibitor resembles the substrate and occupies the active site directly, whereas a non-competitive inhibitor attaches to a distinct allosteric site and distorts active-site conformation. Increasing substrate concentration outcompetes a competitive inhibitor so Vmax stays unchanged while apparent Km rises; in contrast, high substrate cannot displace a non-competitive inhibitor, so Vmax drops permanently while Km remains unchanged. Clinical and metabolic examples include statins competitively inhibiting HMG-CoA reductase, and isoleucine acting as an allosteric end-product inhibitor on threonine deaminase.",
          markScheme: [
            {
              point: "Similarity: both bind reversibly via non-covalent bonds / reduce initial reaction rate",
              keywords: ["reversible", "non-covalent", "both"],
            },
            {
              point: "Competitive binds the active site (structural mimic) whereas non-competitive binds an allosteric site",
              keywords: ["active site", "allosteric", "distorts"],
            },
            {
              point: "Competitive: high [S] restores Vmax (unchanged) while apparent Km increases",
              keywords: ["outcompetes", "vmax stays unchanged", "unchanged", "km rises"],
            },
            {
              point: "Non-competitive: high [S] cannot overcome inhibition so Vmax decreases while Km stays unchanged",
              keywords: ["vmax drops", "decreases", "cannot displace"],
            },
            {
              point: "Named valid examples: statins (HMG-CoA reductase) and isoleucine (threonine deaminase)",
              keywords: ["statins", "hmg-coa", "isoleucine", "threonine deaminase"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant biological knowledge demonstrated.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States basic binding-site difference only; kinetic effects on Vmax/Km or named examples missing or confused.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately contrasts binding sites and Vmax/Km kinetics with at least one similarity or named example.",
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Complete, accurate comparison covering similarity, binding sites, both Vmax/Km outcomes, and named IB examples for each.",
            },
          ],
          hints: [
            "Because the command term is 'Compare and contrast', include at least ONE similarity before listing differences.",
            "Cover binding site, effect of high [S], Vmax, Km, and IB examples (statins; threonine → isoleucine).",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q06",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "cell-respiration-photosynthesis",
          question:
            "In a paper chromatography separation of leaf pigments, chlorophyll a travels 6.3 cm while the solvent front travels 10.5 cm from the origin. Calculate the {{R_f}} value of chlorophyll a to 2 decimal places.",
          answer: { type: "number", value: 0.6, tolerance: 0.005, display: "0.60" },
          solution: [
            "Use {{R_f = d_pigment / d_solvent}}.",
            "{{R_f = 6.3 / 10.5 = 0.60}}.",
          ],
          hints: [
            "Divide 6.3 cm by 10.5 cm.",
            "Leave the answer dimensionless (no cm).",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "cell-respiration-photosynthesis",
          question:
            "A respirometer containing 5.0 g of germinating peas and KOH pellets has a capillary tube of uniform cross-sectional area {{2.0 mm^2}}. Over 15 minutes, the coloured droplet moves 45 mm toward the peas. Calculate the oxygen uptake rate in {{mm^3 g^(-1) min^(-1)}} (enter the number only).",
          answer: { type: "number", value: 1.2, tolerance: 0.02, display: "1.2" },
          traps: [
            {
              spec: { type: "number", value: 6, tolerance: 0.05 },
              feedback: "6.0 mm³ min⁻¹ is the total rate for all 5.0 g — remember to divide by the mass (5.0 g) to get per gram.",
            },
            {
              spec: { type: "number", value: 90, tolerance: 0.5 },
              feedback: "90 mm³ is the total oxygen volume consumed — now divide by time (15 min) and mass (5.0 g).",
            },
          ],
          solution: [
            "Calculate oxygen volume consumed: {{V = A * d = 2.0 * 45 = 90 mm^3}}.",
            "Divide by time and mass: {{Rate = 90 / (15 * 5.0) = 90 / 75 = 1.2}} mm³ g⁻¹ min⁻¹.",
          ],
          hints: [
            "First find the volume of O₂ taken up: Volume = cross-sectional area × distance moved.",
            "Divide that volume by BOTH 15 minutes and 5.0 grams.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "cell-respiration-photosynthesis",
          marks: 3,
          question:
            "Explain why an identical control tube containing dead glass beads and KOH (thermobarometer) is run alongside living seeds in a respirometer experiment. [3 marks]",
          modelAnswer:
            "Glass beads do not respire and match the displacement volume of the living seeds. Any meniscus shift in the control tube reveals passive expansion or contraction of air caused by ambient temperature or atmospheric pressure fluctuations. Subtracting this control shift from the experimental reading isolates volume change caused strictly by biological oxygen uptake, improving validity.",
          markScheme: [
            {
              point: "Inert glass beads do not respire and match the physical volume of the seeds",
              keywords: ["do not respire", "volume", "non-living", "inert"],
            },
            {
              point: "Detects gas volume shifts caused by external temperature or atmospheric pressure changes",
              keywords: ["temperature", "pressure", "fluctuations", "expansion"],
            },
            {
              point: "Control reading is subtracted from the test reading to isolate true biological oxygen consumption",
              keywords: ["subtract", "subtracting", "isolates", "oxygen uptake", "validity"],
            },
          ],
          hints: [
            "What physical gas laws affect sealed air volumes even without living organisms?",
            "How is the control tube's movement used mathematically to correct the experimental reading?",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "cell-respiration-photosynthesis",
          question:
            "In bright light at 22 °C, an *Elodea* aquatic shoot releases oxygen at a net rate of 18.5 mm³ min⁻¹. Placed in darkness at the exact same temperature, the shoot consumes oxygen at 3.5 mm³ min⁻¹. Calculate the gross rate of oxygen production by photosynthesis in {{mm^3 min^(-1)}} (enter the number only).",
          answer: { type: "number", value: 22, tolerance: 0.1, display: "22" },
          traps: [
            {
              spec: { type: "number", value: 15, tolerance: 0.1 },
              feedback: "Gross photosynthesis equals net output PLUS respiration (not minus), because the plant respires continuously in the light too.",
            },
          ],
          solution: [
            "Use {{Gross photosynthesis = Net O_2 output + Respiration O_2 uptake}}.",
            "{{Gross = 18.5 + 3.5 = 22.0}} mm³ min⁻¹.",
          ],
          hints: [
            "Remember that plants continue cellular respiration during daylight.",
            "Total O₂ made by chloroplasts = O₂ escaping to water (net) + O₂ immediately used by mitochondria (respiration).",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "cell-respiration-photosynthesis",
          marks: 4,
          question:
            "Explain the shape of photosynthetic rate curves when (a) light intensity or {{CO_2}} concentration is increased, versus (b) temperature is increased from 5 °C to 50 °C. [4 marks]",
          diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 190" role="img" aria-label="Two limiting factor sketches showing a plateau curve for light or carbon dioxide and an optimum peak curve for temperature">
  <rect x="0" y="0" width="560" height="190" fill="#ffffff" rx="6"/>
  <text x="140" y="20" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#112416" text-anchor="middle">(a) Light intensity or [CO₂]</text>
  <line x1="42" y1="158" x2="255" y2="158" stroke="#334155" stroke-width="1.8"/>
  <line x1="42" y1="158" x2="42" y2="34" stroke="#334155" stroke-width="1.8"/>
  <path d="M 42 158 C 76 92, 118 62, 175 60 L 248 60" fill="none" stroke="#16a34a" stroke-width="2.8"/>
  <text x="150" y="178" font-family="system-ui,sans-serif" font-size="10" fill="#334155" text-anchor="middle">Light or [CO₂]</text>
  <text x="18" y="98" font-family="system-ui,sans-serif" font-size="10" fill="#334155" text-anchor="middle" transform="rotate(-90 18 98)">Rate</text>
  <text x="200" y="52" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#15803d">Plateau</text>

  <text x="420" y="20" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#112416" text-anchor="middle">(b) Temperature (5–50 °C)</text>
  <line x1="322" y1="158" x2="535" y2="158" stroke="#334155" stroke-width="1.8"/>
  <line x1="322" y1="158" x2="322" y2="34" stroke="#334155" stroke-width="1.8"/>
  <path d="M 332 148 C 378 130, 416 55, 445 55 C 472 55, 492 108, 515 154" fill="none" stroke="#c2410c" stroke-width="2.8"/>
  <text x="430" y="178" font-family="system-ui,sans-serif" font-size="10" fill="#334155" text-anchor="middle">Temperature (°C)</text>
  <text x="445" y="46" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#c2410c" text-anchor="middle">Optimum</text>
</svg>`,
          modelAnswer:
            "At low light or CO₂ levels, rate rises proportionally because photon supply or carbon fixation is limiting. Above saturation the curve plateaus because a different environmental variable becomes the limiting factor. Raising temperature initially boosts kinetic energy and successful enzyme–substrate collisions up to the optimum temperature. Beyond the optimum, enzymes such as RuBisCO denature as hydrogen bonds break, causing the photosynthetic rate to collapse rapidly.",
          markScheme: [
            {
              point: "Along the rising slope of (a), light or CO₂ is the limiting factor increasing photon excitation or carbon fixation",
              keywords: ["limiting", "proportionally", "photon", "fixation"],
            },
            {
              point: "At the plateau of (a), another factor (e.g., CO₂, light, or temperature) becomes limiting",
              keywords: ["plateau", "another factor", "different"],
            },
            {
              point: "In (b), rising temperature increases kinetic energy and collision frequency up to the optimum",
              keywords: ["kinetic energy", "collisions", "optimum"],
            },
            {
              point: "Above optimum temperature, photosynthetic enzymes (e.g., RuBisCO) denature so rate falls sharply",
              keywords: ["denature", "rubisco", "collapse", "hydrogen bonds"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant explanation." },
            { band: "1–2", marks: [1, 2], descriptor: "Describes one curve accurately or names limiting factors without explaining molecular causes." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains both the plateau mechanism (limiting-factor shift) and the thermal optimum/denaturation curve clearly." },
          ],
          hints: [
            "Explain BOTH the rising portion and the flat/falling portion of each graph.",
            "Link temperature directly to kinetic collisions below optimum and enzyme denaturation (e.g., RuBisCO) above optimum.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "cell-respiration-photosynthesis",
          question:
            "Four molecules of glucose are completely oxidised via glycolysis, the link reaction, and the Krebs cycle. Calculate the total number of NADH molecules generated across all three stages combined.",
          answer: { type: "number", value: 40, display: "40 NADH" },
          traps: [
            {
              spec: { type: "number", value: 24 },
              feedback: "24 counts only the Krebs cycle (6 × 4); also include glycolysis (2 per glucose) and the link reaction (2 per glucose).",
            },
            {
              spec: { type: "number", value: 32 },
              feedback: "32 counts link + Krebs (8 × 4) but omits glycolysis (2 NADH per glucose).",
            },
          ],
          solution: [
            "Per 1 glucose: glycolysis = 2 NADH, link reaction = 2 NADH, Krebs cycle = 6 NADH → total = {{10}} NADH.",
            "For 4 glucose molecules: {{4 * 10 = 40}} NADH.",
          ],
          hints: [
            "Count NADH per 1 glucose in each stage: glycolysis (2), link reaction (2), Krebs cycle (6).",
            "Multiply the per-glucose total (10) by 4.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "cell-respiration-photosynthesis",
          question:
            "Five molecules of glucose undergo complete aerobic respiration. How many molecules of {{CO_2}} are released strictly during the **Krebs cycle alone** (excluding the link reaction)?",
          answer: { type: "number", value: 20, display: "20" },
          traps: [
            {
              spec: { type: "number", value: 30 },
              feedback: "30 includes the 10 CO₂ released in the link reaction; the question asks strictly for the Krebs cycle alone.",
            },
            {
              spec: { type: "number", value: 10 },
              feedback: "Each glucose produces TWO acetyl-CoA molecules, so the Krebs cycle releases 4 CO₂ per glucose (not 2).",
            },
          ],
          solution: [
            "Each turn of the Krebs cycle releases 2 {{CO_2}}.",
            "Each glucose feeds 2 turns → 4 {{CO_2}} per glucose in the Krebs cycle.",
            "For 5 glucose molecules: {{5 * 4 = 20}} {{CO_2}}.",
          ],
          hints: [
            "Remember: per glucose, 2 CO₂ come from the link reaction and 4 CO₂ come from the Krebs cycle.",
            "Multiply 4 CO₂ per glucose by 5.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "cell-respiration-photosynthesis",
          question:
            "During active photosynthesis, a chloroplast fixes 18 molecules of {{CO_2}} through the Calvin cycle. Calculate the total number of ATP molecules consumed (including both GP reduction and RuBP regeneration).",
          answer: { type: "number", value: 54, display: "54 ATP" },
          traps: [
            {
              spec: { type: "number", value: 36 },
              feedback: "36 ATP covers only the reduction of GP to TP (2 ATP per CO₂); do not forget the extra 1 ATP per CO₂ required to regenerate RuBP!",
            },
          ],
          solution: [
            "Fixing 3 {{CO_2}} consumes 6 ATP for reduction + 3 ATP for RuBP regeneration = 9 ATP (i.e., 3 ATP per {{CO_2}}).",
            "For 18 {{CO_2}}: {{18 * 3 = 54}} ATP.",
          ],
          hints: [
            "Recall that 6 CO₂ (for 1 glucose) requires 18 ATP in total — that is 3 ATP per CO₂.",
            "Multiply 18 CO₂ by 3 ATP per CO₂.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "cell-respiration-photosynthesis",
          marks: 6,
          question:
            "Explain how ATP is synthesized by chemiosmosis across the inner mitochondrial membrane during oxidative phosphorylation, including the role of molecular oxygen. [6 marks]",
          modelAnswer:
            "Reduced coenzymes NADH and FADH₂ donate high-energy electrons to carrier proteins embedded in the cristae (inner membrane). As electrons pass down the electron transport chain through redox reactions, released energy pumps H⁺ ions actively from the mitochondrial matrix into the small intermembrane space. This builds a steep electrochemical proton gradient (proton-motive force) with lower pH in the intermembrane space. Protons diffuse back into the matrix exclusively through transmembrane ATP synthase channels. Proton flow drives conformational rotation of ATP synthase, catalysing phosphorylation of ADP plus inorganic phosphate into ATP. At the end of the chain, oxygen serves as the terminal electron acceptor, combining with electrons and matrix protons to form water so electron flow continues uninterrupted.",
          markScheme: [
            {
              point: "NADH and FADH₂ deliver high-energy electrons to the electron transport chain on cristae",
              keywords: ["nadh", "fadh2", "electron transport chain", "cristae"],
            },
            {
              point: "Energy from electron transfer pumps H⁺ from the matrix into the intermembrane space",
              keywords: ["pumps", "h+", "intermembrane space", "matrix"],
            },
            {
              point: "Establishes a steep proton / electrochemical gradient across the inner membrane",
              keywords: ["gradient", "electrochemical", "proton-motive"],
            },
            {
              point: "H⁺ ions diffuse back into the matrix through ATP synthase",
              keywords: ["diffuse", "atp synthase"],
            },
            {
              point: "Proton flow drives phosphorylation of ADP + Pi into ATP",
              keywords: ["phosphorylation", "adp", "inorganic phosphate"],
            },
            {
              point: "Oxygen acts as the terminal electron acceptor, combining with H⁺ and e⁻ to form water",
              keywords: ["terminal electron acceptor", "water", "h2o"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant biochemistry presented." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions ETC or ATP synthase in outline without correct compartments or proton pumping." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately traces electron donation, H⁺ pumping into intermembrane space, and ATP synthase, with minor omissions." },
            { band: "5–6", marks: [5, 6], descriptor: "Complete, rigorous chemiosmotic account naming NADH/FADH₂, exact compartments, proton gradient, ATP synthase phosphorylation, and O₂ forming H₂O." },
          ],
          hints: [
            "Name the exact compartments: matrix vs intermembrane space.",
            "Include all six steps: electron donors → ETC pumping H⁺ → gradient → diffusion via ATP synthase → ADP phosphorylation → O₂ forming H₂O.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "cell-respiration-photosynthesis",
          marks: 6,
          question:
            "Explain the sequence of biochemical stages in the Calvin cycle inside the chloroplast stroma, accounting for carbon numbers and the roles of ATP and NADPH. [6 marks]",
          modelAnswer:
            "In carbon fixation, the enzyme RuBisCO attaches carbon dioxide (1C) to ribulose bisphosphate, RuBP (5C), forming an unstable 6-carbon intermediate that immediately splits into two molecules of glycerate 3-phosphate, GP (3C). During the reduction phase, GP is phosphorylated using ATP and reduced using NADPH supplied by the light-dependent reactions to form triose phosphate, TP (3C). For every three CO₂ fixed (yielding six TP), one net TP exits the cycle to synthesize glucose (two TP build one 6C hexose) and other organic compounds. The remaining five TP molecules (15 carbons total) undergo enzyme-catalysed rearrangement using three additional ATP molecules to regenerate three molecules of RuBP (5C), allowing carbon fixation to continue cyclically.",
          markScheme: [
            {
              point: "RuBisCO catalyses fixation of CO₂ (1C) onto RuBP (5C)",
              keywords: ["rubisco", "rubp", "5c", "fixation"],
            },
            {
              point: "Unstable 6C intermediate splits into two 3C glycerate 3-phosphate (GP) molecules",
              keywords: ["glycerate 3-phosphate", "gp", "unstable", "splits"],
            },
            {
              point: "GP is reduced to triose phosphate (TP, 3C) using ATP and NADPH from light-dependent reactions",
              keywords: ["reduced", "triose phosphate", "tp", "nadph"],
            },
            {
              point: "One out of six TP exits per 3 CO₂ fixed (two TP synthesize one glucose)",
              keywords: ["one net tp", "exits", "glucose", "hexose"],
            },
            {
              point: "Five of every six TP (15C) are rearranged to regenerate three RuBP (5C)",
              keywords: ["five", "rearranged", "regenerate", "three molecules of rubp"],
            },
            {
              point: "Regeneration of RuBP consumes additional ATP (3 ATP per 3 RuBP)",
              keywords: ["additional atp", "three additional atp", "consumes", "regeneration"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No accurate Calvin cycle stages given." },
            { band: "1–2", marks: [1, 2], descriptor: "Names RuBisCO or CO₂ fixation vaguely without GP/TP stoichiometry." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains fixation (RuBP → GP) and reduction (GP → TP with ATP/NADPH) accurately, with partial detail on regeneration." },
            { band: "5–6", marks: [5, 6], descriptor: "Full, accurate carbon-counted explanation across fixation, reduction, 1/6 TP export, and ATP-driven 5/6 TP → RuBP regeneration." },
          ],
          hints: [
            "Track carbon numbers explicitly: 1C + 5C → (6C) → 2 × 3C.",
            "Explain BOTH where ATP is spent (reduction AND RuBP regeneration) and the 1:5 export-to-regeneration split of TP.",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2: CHEMICAL SIGNALING [HL] & NEURAL SIGNALING (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "c1-c2-interaction-molecules-cells-p2",
      title: "Practice Paper 2 · Chemical Signaling [HL] & Neural Signaling [SL/HL]",
      level: "SL",
      questions: [
        {
          id: "c1-c2-interaction-molecules-cells-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "State",
          guideRef: "chemical-signaling-hl",
          question:
            "State the name (or standard abbreviation) of the intracellular second messenger synthesized from ATP by adenylyl cyclase in response to epinephrine binding a GPCR.",
          answer: {
            type: "text",
            accept: ["camp", "cyclic amp", "cyclic adenosine monophosphate"],
            display: "cAMP",
          },
          solution: [
            "Activated adenylyl cyclase converts ATP into **cyclic AMP (cAMP)**, which diffuses through the cytosol to activate protein kinase A.",
          ],
          hints: [
            "It is a cyclic nucleotide formed directly from ATP.",
            "Abbreviated with one lowercase letter followed by three capital letters.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "chemical-signaling-hl",
          question:
            "In a simplified hepatocyte GPCR cascade model, each epinephrine ligand activates 12 G-proteins (each switching on 1 adenylyl cyclase), each active adenylyl cyclase generates 80 cAMP molecules (each activating 1 kinase), and each activated kinase switches on 15 glycogen phosphorylase enzymes. Calculate the total number of glycogen phosphorylase enzymes activated by 5 epinephrine molecules.",
          answer: { type: "number", value: 72000, display: "72000" },
          traps: [
            {
              spec: { type: "number", value: 14400 },
              feedback: "14,400 is the yield from ONE epinephrine molecule — multiply by 5 ligands.",
            },
          ],
          solution: [
            "Per single epinephrine ligand: {{12 * 80 * 15 = 14400}} activated enzymes.",
            "For 5 epinephrine ligands: {{5 * 14400 = 72000}} activated enzymes.",
          ],
          hints: [
            "Multiply the amplification factors sequentially: 12 × 80 × 15.",
            "Then multiply by the 5 starting hormone molecules.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q03",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "chemical-signaling-hl",
          marks: 4,
          question:
            "Explain how bacterial quorum sensing enables *Vibrio fischeri* living in a squid light organ to activate bioluminescence only at high population density. [4 marks]",
          modelAnswer:
            "Individual Vibrio fischeri cells continuously synthesize and secrete small autoinducer signaling molecules into their environment. At low bacterial density, autoinducers diffuse away into seawater so intracellular concentration remains below threshold. As the population grows inside the confined light organ, extracellular autoinducer accumulates above a critical threshold and diffuses back into cells. Autoinducer binds specific intracellular receptor proteins, forming complexes that activate transcription of lux genes encoding luciferase so the whole colony glows synchronously.",
          markScheme: [
            {
              point: "Bacteria continuously produce and secrete autoinducer ligands",
              keywords: ["autoinducer", "secrete", "synthesize"],
            },
            {
              point: "At low density, ligand diffuses away and stays below threshold concentration",
              keywords: ["low", "diffuses away", "below threshold"],
            },
            {
              point: "At high density inside the organ, autoinducer accumulates above threshold and binds intracellular receptors",
              keywords: ["accumulates", "threshold", "receptors"],
            },
            {
              point: "Ligand–receptor complex activates transcription of lux / luciferase genes synchronously",
              keywords: ["transcription", "luciferase", "lux", "synchronously"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant quorum sensing mechanism described." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions chemical release by bacteria at high density without threshold or transcriptional mechanism." },
            { band: "3–4", marks: [3, 4], descriptor: "Clear mechanistic sequence covering autoinducer secretion, density threshold, receptor binding, and luciferase transcription." },
          ],
          hints: [
            "Name the secreted signaling molecule (autoinducer) and explain why low density fails to trigger light.",
            "Finish at the gene-expression level: receptor binding activates luciferase transcription.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "chemical-signaling-hl",
          question:
            "A liver cell surface contains 2500 functional transmembrane receptors for a peptide hormone. At a physiological blood concentration, 850 of those receptors have bound ligand. Calculate the percentage receptor occupancy.",
          answer: { type: "number", value: 34, tolerance: 0.1, display: "34%" },
          solution: [
            "Percentage occupancy = {{(850 / 2500) * 100 = 0.34 * 100 = 34%}}.",
          ],
          hints: [
            "Divide bound receptors (850) by total receptors (2500).",
            "Multiply by 100 to convert the decimal into a percentage.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q05",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "chemical-signaling-hl",
          marks: 5,
          question:
            "Explain the molecular mechanism by which insulin stimulates skeletal muscle and adipose cells to take up glucose rapidly from blood plasma. [5 marks]",
          modelAnswer:
            "Because insulin is a hydrophilic polypeptide, it cannot cross the phospholipid bilayer and instead binds the extracellular domain of a transmembrane receptor tyrosine kinase. Ligand binding activates intracellular tyrosine kinase domains, causing autophosphorylation of tyrosine residues using ATP. This initiates an intracellular phosphorylation cascade that signals cytoplasmic vesicles carrying GLUT4 glucose carrier proteins to migrate to the plasma membrane. The vesicles fuse with the plasma membrane via exocytosis, embedding GLUT4 channels into the surface. Increased GLUT4 density accelerates facilitated diffusion of glucose down its concentration gradient into the cytoplasm.",
          markScheme: [
            {
              point: "Hydrophilic insulin binds extracellular domain of transmembrane receptor tyrosine kinase",
              keywords: ["hydrophilic", "polypeptide", "tyrosine kinase", "transmembrane"],
            },
            {
              point: "Triggers autophosphorylation of intracellular tyrosine residues",
              keywords: ["autophosphorylation", "phosphorylation", "tyrosine residues"],
            },
            {
              point: "Intracellular signaling cascade mobilises cytoplasmic vesicles containing GLUT4",
              keywords: ["cascade", "vesicles", "glut4"],
            },
            {
              point: "Vesicles fuse with the plasma membrane by exocytosis, inserting GLUT4 transporters",
              keywords: ["fuse", "exocytosis", "plasma membrane"],
            },
            {
              point: "Glucose enters the cell faster via facilitated diffusion down its concentration gradient",
              keywords: ["facilitated diffusion", "concentration gradient"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No accurate receptor or transport mechanism given." },
            { band: "1–2", marks: [1, 2], descriptor: "States that insulin binds a membrane receptor and increases glucose uptake without GLUT4 or tyrosine kinase." },
            { band: "3–4", marks: [3, 4], descriptor: "Describes receptor tyrosine kinase and GLUT4 insertion accurately with minor omissions." },
            { band: "5", marks: [5, 5], descriptor: "Complete molecular pathway from polar ligand binding → autophosphorylation → vesicle exocytosis → facilitated diffusion via GLUT4." },
          ],
          hints: [
            "Name the exact receptor class (tyrosine kinase) and intracellular glucose transporter (GLUT4).",
            "Specify BOTH vesicle exocytosis AND facilitated diffusion of glucose.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q06",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Compare and contrast",
          guideRef: "chemical-signaling-hl",
          marks: 6,
          question:
            "Compare and contrast the cellular signaling mechanisms of epinephrine and oestradiol in mammalian target cells. [6 marks]",
          modelAnswer:
            "Both hormones travel in the bloodstream and bind non-covalently to specific complementary receptor proteins in target cells only. Epinephrine is a hydrophilic amine unable to cross the phospholipid bilayer, so it binds a transmembrane GPCR on the cell surface; oestradiol is a hydrophobic steroid that crosses the bilayer by simple diffusion to bind an intracellular receptor in the cytoplasm or nucleus. Epinephrine relies on a G-protein and adenylyl cyclase to produce the second messenger cAMP, triggering a rapid kinase phosphorylation cascade that modifies pre-existing enzymes (glycogenolysis). In contrast, oestradiol requires no second messenger: its hormone–receptor complex acts directly as a transcription factor on nuclear DNA to regulate mRNA synthesis and build new proteins. Consequently, epinephrine produces a rapid, short-lived response (seconds), whereas oestradiol produces a slower-onset but longer-lasting response (hours to days).",
          markScheme: [
            {
              point: "Similarity: both bind specific complementary receptor proteins (non-covalently) in target cells",
              keywords: ["both", "specific", "complementary", "target cells"],
            },
            {
              point: "Polarity difference: epinephrine is hydrophilic (blocked by bilayer) vs oestradiol is hydrophobic (simple diffusion)",
              keywords: ["hydrophilic", "hydrophobic", "simple diffusion", "steroid"],
            },
            {
              point: "Receptor location: plasma-membrane GPCR for epinephrine vs intracellular/nuclear receptor for oestradiol",
              keywords: ["gpcr", "transmembrane", "intracellular"],
            },
            {
              point: "Second messenger: epinephrine generates cAMP via adenylyl cyclase; oestradiol uses no second messenger",
              keywords: ["camp", "adenylyl cyclase", "second messenger"],
            },
            {
              point: "Cellular target: epinephrine phosphorylates existing enzymes (glycogenolysis) vs oestradiol acts as a transcription factor altering gene expression",
              keywords: ["phosphorylation", "glycogenolysis", "transcription factor", "mrna"],
            },
            {
              point: "Kinetics: epinephrine acts rapidly/briefly (seconds) whereas oestradiol acts more slowly/persistently (hours)",
              keywords: ["rapid", "seconds", "slower", "longer-lasting", "hours"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid biological comparison." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies membrane vs intracellular receptor locations only." },
            { band: "3–4", marks: [3, 4], descriptor: "Contrasts polarity, receptor location, and cAMP vs transcription accurately, lacking either a similarity or speed/duration link." },
            { band: "5–6", marks: [5, 6], descriptor: "Comprehensive IB comparison covering similarity, solubility, receptor sites, cAMP cascade vs transcription factor, and speed/duration." },
          ],
          hints: [
            "Include at least one explicit similarity (specificity/blood transport) for 'Compare and contrast'.",
            "Contrast 5 dimensions: polarity, receptor site, second messenger, downstream target (enzyme vs DNA), and response timing.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q07",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "neural-signaling",
          question:
            "During depolarization of a squid giant axon, the membrane potential swings from a resting value of −70 mV to a peak of +32 mV. Calculate the total magnitude of this voltage change in mV.",
          answer: { type: "number", value: 102, tolerance: 0.1, display: "102 mV" },
          traps: [
            {
              spec: { type: "number", value: 38 },
              feedback: "You subtracted 32 from 70 instead of adding across 0 mV: from −70 mV up to +32 mV is 32 − (−70) = 102 mV.",
            },
          ],
          solution: [
            "{{ΔV = V_peak - V_rest = +32 - (-70) = 102 mV}}.",
          ],
          hints: [
            "Cross zero carefully: 70 mV to get from −70 to 0, plus another 32 mV to reach +32.",
            "Calculate 32 − (−70).",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "neural-signaling",
          question:
            "A nerve impulse travels 1.05 m along a myelinated axon at {{70 m s^(-1)}} and crosses 2 chemical synapses, each imposing a synaptic delay of 0.8 ms. Calculate the total transmission time in milliseconds (ms).",
          answer: { type: "number", value: 16.6, tolerance: 0.05, display: "16.6 ms" },
          traps: [
            {
              spec: { type: "number", value: 15, tolerance: 0.05 },
              feedback: "15 ms is only the axonal travel time — add the 2 × 0.8 = 1.6 ms synaptic delay.",
            },
            {
              spec: { type: "number", value: 15.8, tolerance: 0.05 },
              feedback: "You added only ONE synapse (0.8 ms); there are TWO chemical synapses in this pathway.",
            },
          ],
          solution: [
            "Axonal travel time: {{1.05 / 70 = 0.015 s = 15.0 ms}}.",
            "Total synaptic delay: {{2 * 0.8 = 1.6 ms}}.",
            "Total time: {{15.0 + 1.6 = 16.6 ms}}.",
          ],
          hints: [
            "Find axonal travel time in ms using (d / v) × 1000.",
            "Add 2 × 0.8 ms for the two synapses.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "neural-signaling",
          question:
            "An action potential takes 0.48 s to travel 0.60 m along an unmyelinated C-fibre carrying dull ache signals. Calculate its conduction velocity in {{m s^(-1)}}.",
          answer: { type: "number", value: 1.25, tolerance: 0.01, display: "1.25 m s⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 0.8, tolerance: 0.01 },
              feedback: "That is t / d instead of d / t — speed equals distance divided by time.",
            },
          ],
          solution: [
            "{{v = d / t = 0.60 / 0.48 = 1.25 m s^(-1)}}.",
          ],
          hints: [
            "Use v = distance ÷ time.",
            "Divide 0.60 m by 0.48 s.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "neural-signaling",
          marks: 4,
          question:
            "Explain how a resting membrane potential of approximately −70 mV is established and maintained across a neuron's axon membrane. [4 marks]",
          modelAnswer:
            "The Na⁺/K⁺ ATPase pump hydrolyses ATP to actively transport 3 Na⁺ ions out of the axon for every 2 K⁺ ions pumped in, creating steep concentration gradients and exporting net positive charge. At rest, the membrane contains many open K⁺ leak channels but very few open Na⁺ channels, so K⁺ diffuses passively outward down its concentration gradient far faster than Na⁺ leaks inward. Meanwhile, large negatively charged organic proteins and phosphate anions remain trapped inside the cytoplasm. Together, net outward positive ion loss and retained intracellular anions leave the inside about 70 mV negative relative to the exterior.",
          markScheme: [
            {
              point: "Na⁺/K⁺ pump actively transports 3 Na⁺ out and 2 K⁺ in using ATP",
              keywords: ["3 na+", "2 k+", "active", "atp"],
            },
            {
              point: "Membrane is much more permeable to K⁺ than Na⁺ due to open K⁺ leak channels",
              keywords: ["leak channels", "permeable", "diffuses"],
            },
            {
              point: "Net efflux of K⁺ ions leaves excess negative charge inside",
              keywords: ["outward", "efflux", "negative"],
            },
            {
              point: "Large negatively charged intracellular proteins / organic anions cannot cross the membrane",
              keywords: ["proteins", "anions", "trapped"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No accurate resting-potential mechanism." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions the Na⁺/K⁺ pump without exact 3:2 stoichiometry or selective K⁺ permeability." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains active 3 Na⁺/2 K⁺ pumping, selective K⁺ leak efflux, and trapped intracellular anions." },
          ],
          hints: [
            "Give the exact 3:2 stoichiometry of the Na⁺/K⁺ ATPase pump.",
            "Do not stop at the pump — also explain K⁺ leak channels and large intracellular organic anions.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "neural-signaling",
          marks: 5,
          question:
            "Outline the ionic events driving depolarization, repolarization, unidirectional propagation, and saltatory conduction along a myelinated axon. [5 marks]",
          modelAnswer:
            "Once local depolarization crosses threshold, voltage-gated Na⁺ channels open rapidly so sodium ions rush inward down their electrochemical gradient, reversing polarity to roughly +30 mV. At the peak, voltage-gated Na⁺ channels inactivate and voltage-gated K⁺ channels open, allowing potassium ions to flood outward and repolarize the membrane back toward −70 mV. Because inactivated Na⁺ channels create a brief refractory period behind the wave, local currents can only depolarize the resting region ahead, enforcing strictly unidirectional propagation. Along a myelinated axon, insulating Schwann-cell myelin blocks ion flux across internodes, so action potentials regenerate solely at gaps called nodes of Ranvier and leap rapidly from node to node (saltatory conduction).",
          markScheme: [
            {
              point: "Depolarization: voltage-gated Na⁺ channels open and Na⁺ rushes in to ~+30 mV",
              keywords: ["voltage-gated na+", "rush inward", "+30", "inward"],
            },
            {
              point: "Repolarization: Na⁺ channels inactivate and voltage-gated K⁺ channels open so K⁺ exits",
              keywords: ["voltage-gated k+", "outward", "inactivate", "potassium"],
            },
            {
              point: "Refractory period prevents backward re-excitation, ensuring unidirectional propagation",
              keywords: ["refractory period", "unidirectional", "ahead"],
            },
            {
              point: "Myelin insulates internodes, restricting voltage-gated channels to nodes of Ranvier",
              keywords: ["insulates", "internodes", "nodes of ranvier"],
            },
            {
              point: "Local currents leap from node to node (saltatory conduction), greatly increasing conduction speed",
              keywords: ["saltatory", "leap", "local currents"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid ionic mechanism." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies Na⁺ influx and K⁺ efflux with minimal explanation of directionality or myelination." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately covers depolarization, repolarization, and either refractory directionality or saltatory conduction." },
            { band: "5", marks: [5, 5], descriptor: "Complete, accurate account integrating voltage-gated Na⁺/K⁺ kinetics, refractory period, nodes of Ranvier, and saltatory conduction." },
          ],
          hints: [
            "Keep channel directions crystal clear: Na⁺ IN → depolarization; K⁺ OUT → repolarization.",
            "Include BOTH the refractory period (one-way travel) and nodes of Ranvier (saltatory leaping).",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "neural-signaling",
          question:
            "A mammalian motor axon has an absolute refractory period of 2.5 ms during which no second action potential can be initiated. Calculate its maximum theoretical firing frequency in hertz (impulses per second; enter the number only).",
          answer: { type: "number", value: 400, tolerance: 0.5, display: "400" },
          traps: [
            {
              spec: { type: "number", value: 0.4, tolerance: 0.01 },
              feedback: "0.4 is impulses per millisecond — multiply by 1000 ms s⁻¹ to get hertz (impulses per second).",
            },
          ],
          solution: [
            "Convert 2.5 ms to seconds: {{2.5 / 1000 = 0.0025 s}}.",
            "Maximum frequency: {{f_max = 1 / 0.0025 = 1000 / 2.5 = 400}} Hz.",
          ],
          hints: [
            "Frequency (Hz) = 1 ÷ period (in seconds).",
            "Equivalently, divide 1000 ms by 2.5 ms.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q13",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "neural-signaling",
          question:
            "On an oscilloscope trace of an action potential, membrane voltage rises from threshold (−55 mV) to its peak (+30 mV) over a duration of 0.50 ms. Calculate the average rate of depolarization in {{mV ms^(-1)}} (enter the number only).",
          answer: { type: "number", value: 170, tolerance: 0.5, display: "170" },
          traps: [
            {
              spec: { type: "number", value: 42.5, tolerance: 0.2 },
              feedback: "You multiplied 85 by 0.50 instead of dividing by 0.50 ms.",
            },
          ],
          solution: [
            "Voltage change: {{+30 - (-55) = 85 mV}}.",
            "Average rate: {{85 / 0.50 = 170}} mV ms⁻¹.",
          ],
          hints: [
            "First find ΔV from −55 mV up to +30 mV.",
            "Divide ΔV by 0.50 ms.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "neural-signaling",
          marks: 4,
          question:
            "Distinguish between EPSPs and IPSPs, and explain how spatial and temporal summation determine whether a postsynaptic neuron fires an action potential. [4 marks]",
          modelAnswer:
            "An excitatory postsynaptic potential (EPSP) occurs when excitatory neurotransmitters open ligand-gated Na⁺ channels, depolarizing the membrane closer to threshold, whereas an inhibitory postsynaptic potential (IPSP) opens Cl⁻ or K⁺ channels, hyperpolarizing the membrane further away from threshold. Spatial summation integrates simultaneous EPSPs and IPSPs arriving from multiple different presynaptic neurons converging on the cell body. Temporal summation integrates rapid consecutive potentials arriving from a single presynaptic neuron before earlier voltage shifts decay. Only if the combined voltage at the axon hillock reaches or exceeds the −55 mV threshold does an all-or-nothing action potential fire.",
          markScheme: [
            {
              point: "EPSP opens Na⁺ channels to depolarize toward threshold; IPSP opens Cl⁻ or K⁺ channels to hyperpolarize away from threshold",
              keywords: ["depolarizing", "hyperpolarizing", "cl-", "k+"],
            },
            {
              point: "Spatial summation combines simultaneous inputs from multiple presynaptic neurons",
              keywords: ["simultaneous", "multiple", "different presynaptic"],
            },
            {
              point: "Temporal summation adds rapid consecutive impulses from a single presynaptic neuron",
              keywords: ["rapid", "consecutive", "single presynaptic"],
            },
            {
              point: "Action potential fires only if net summed potential reaches threshold (−55 mV) at the axon hillock",
              keywords: ["threshold", "-55", "axon hillock", "all-or-nothing"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No accurate summation or postsynaptic potential concepts." },
            { band: "1–2", marks: [1, 2], descriptor: "Defines EPSP/IPSP or spatial/temporal summation partially without threshold integration." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately distinguishes EPSP vs IPSP ion fluxes, spatial vs temporal summation, and threshold firing decision." },
          ],
          hints: [
            "Name the specific ions causing EPSP (Na⁺ in) vs IPSP (Cl⁻ in or K⁺ out).",
            "Contrast multiple synapses at once (spatial) vs one synapse firing rapidly (temporal), ending at the −55 mV threshold.",
          ],
        },
        {
          id: "c1-c2-interaction-molecules-cells-p2-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Predict",
          guideRef: "neural-signaling",
          marks: 4,
          question:
            "Explain the normal function of acetylcholinesterase (AChE) in a cholinergic synapse, and predict how a neonicotinoid pesticide binding insect ACh receptors permanently disrupts synaptic transmission. [4 marks]",
          modelAnswer:
            "Acetylcholinesterase resides in the synaptic cleft and rapidly hydrolyses acetylcholine into inactive acetate and choline. This clears neurotransmitter from postsynaptic receptors so ligand-gated Na⁺ channels close, allowing repolarization and preventing continuous firing, while choline is recycled presynaptically. Neonicotinoid insecticides mimic acetylcholine and bind irreversibly to insect nicotinic receptors, yet cannot be broken down by acetylcholinesterase. Consequently, postsynaptic Na⁺ channels remain locked open, causing overstimulation, paralysis, and death in insects.",
          markScheme: [
            {
              point: "AChE hydrolyses acetylcholine in the cleft into acetate and choline",
              keywords: ["hydrolyses", "acetate", "choline"],
            },
            {
              point: "Closes postsynaptic Na⁺ channels / stops continuous depolarization / permits choline recycling",
              keywords: ["close", "repolarization", "recycled", "preventing continuous"],
            },
            {
              point: "Neonicotinoids bind insect ACh receptors irreversibly and resist breakdown by AChE",
              keywords: ["irreversibly", "resist", "cannot be broken down", "mimic"],
            },
            {
              point: "Postsynaptic Na⁺ channels stay open, causing continuous overstimulation, convulsions, or paralysis",
              keywords: ["locked open", "overstimulation", "paralysis"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant synaptic pharmacology." },
            { band: "1–2", marks: [1, 2], descriptor: "Explains AChE breakdown vaguely or states neonicotinoids harm insects without receptor mechanism." },
            { band: "3–4", marks: [3, 4], descriptor: "Clear explanation of AChE hydrolysis/reset and neonicotinoid irreversible receptor activation causing paralysis." },
          ],
          hints: [
            "Name the two hydrolysis products of ACh (acetate + choline) and why clearing ACh matters.",
            "Note that neonicotinoids are NOT broken down by AChE and bind insect receptors tightly.",
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 Qs — all difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "c1-c2-interaction-molecules-cells-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "enzymes-metabolism",
      question:
        "An enzyme obeys Michaelis–Menten kinetics {{v = (V_max * [S]) / (K_m + [S])}} with {{V_max = 100 μmol min^(-1)}} and {{K_m = 10 mmol dm^(-3)}}. Adding a competitive inhibitor raises apparent {{K_m}} to {{25 mmol dm^(-3)}} without changing {{V_max}}. Calculate the percentage inhibition at {{[S] = 15 mmol dm^(-3)}}.",
      answer: { type: "number", value: 37.5, tolerance: 0.1, display: "37.5%" },
      traps: [
        {
          spec: { type: "number", value: 62.5, tolerance: 0.1 },
          feedback: "62.5% is the remaining activity (37.5 / 60 × 100) — subtract from 100% for percentage inhibition.",
        },
      ],
      solution: [
        "Uninhibited rate at {{[S] = 15}}: {{v_0 = (100 * 15) / (10 + 15) = 1500 / 25 = 60}} μmol min⁻¹.",
        "Competitive inhibited rate at {{[S] = 15}}: {{v_i = (100 * 15) / (25 + 15) = 1500 / 40 = 37.5}} μmol min⁻¹.",
        "Percentage inhibition: {{((60 - 37.5) / 60) * 100 = (22.5 / 60) * 100 = 37.5%}}.",
      ],
      hints: [
        "First compute the uninhibited rate v₀ using Km = 10 and [S] = 15.",
        "Next compute the inhibited rate vᵢ using apparent Km = 25 and [S] = 15.",
        "Finally apply % inhibition = ((v₀ − vᵢ) / v₀) × 100.",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-ch-q02",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Design",
      guideRef: "enzymes-metabolism",
      marks: 7,
      question:
        "A biochemist finds that a new antimicrobial compound, Drug D, slows Enzyme E. Design an experimental protocol to determine whether Drug D is a reversible competitive or reversible non-competitive inhibitor, predict the diagnostic rate-versus-substrate curves for both possibilities, and contrast reversible allosteric feedback regulation with penicillin's irreversible mechanism. [7 marks]",
      modelAnswer:
        "Measure initial reaction rate of Enzyme E across a wide range of substrate concentrations from low to saturating while holding enzyme concentration, temperature, and buffer pH strictly constant. Repeat the entire [S] series with a fixed concentration of Drug D added and perform at least five replicates per level to calculate means and error bars. Plot initial rate against [S] for control and Drug D curves. If Drug D is competitive, the inhibited curve starts flatter (higher apparent Km) but climbs to reach the exact same Vmax plateau as the control at saturating [S]. If Drug D is non-competitive, the curve levels off at a permanently lower Vmax plateau even at saturating [S] while Km stays unchanged. In metabolic homeostasis, reversible allosteric end-product inhibition (such as isoleucine binding threonine deaminase) uses weak non-covalent bonds so the pathway resumes whenever product levels fall, whereas penicillin forms a permanent covalent bond inside bacterial transpeptidase's active site, irreversibly destroying catalytic function until new enzyme is synthesized.",
      markScheme: [
        {
          point: "Measure initial reaction rate across low-to-saturating substrate concentrations with and without fixed Drug D",
          keywords: ["initial reaction rate", "saturating", "fixed concentration"],
        },
        {
          point: "Control key variables (temperature, buffer pH, enzyme concentration) and run replicates",
          keywords: ["temperature", "buffer ph", "replicates"],
        },
        {
          point: "Competitive curve prediction: same Vmax plateau at high [S], higher apparent Km",
          keywords: ["same vmax", "higher apparent km", "flatter"],
        },
        {
          point: "Non-competitive curve prediction: permanently lower Vmax plateau at saturating [S], unchanged Km",
          keywords: ["lower vmax", "unchanged", "levels off"],
        },
        {
          point: "Reversible allosteric feedback binds non-covalently to an allosteric site so inhibition lifts when end-product drops",
          keywords: ["non-covalent", "resumes", "isoleucine", "threonine deaminase"],
        },
        {
          point: "Penicillin acts by mechanism-based irreversible inhibition, forming a covalent bond inside transpeptidase's active site",
          keywords: ["covalent", "transpeptidase", "permanently", "irreversibly"],
        },
        {
          point: "Cell must synthesize new enzyme molecules to restore activity after irreversible inhibition",
          keywords: ["new enzyme", "synthesized", "destroying"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No coherent experimental design or inhibition analysis." },
        { band: "1–2", marks: [1, 2], descriptor: "Proposes adding Drug D without varying [S] up to saturation or misstates Vmax/Km outcomes." },
        { band: "3–5", marks: [3, 5], descriptor: "Sound [S]-variation design with controlled variables and accurate competitive vs non-competitive curves; partial contrast with penicillin." },
        { band: "6–7", marks: [6, 7], descriptor: "Exemplary IB experimental design with replicates, exact Vmax/Km curve diagnostics, and sharp covalent vs reversible allosteric contrast." },
      ],
      hints: [
        "The key independent variable that separates competitive from non-competitive inhibition is substrate concentration [S] up to saturation!",
        "State controlled variables (temp, pH, [E]) and replicates, then sketch in words both curve asymptotes.",
        "Contrast bond strength and reversibility between isoleucine (non-covalent allosteric) and penicillin (covalent active-site).",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "cell-respiration-photosynthesis",
      question:
        "A leaf exports carbon as sucrose ({{C_12H_22O_11}}, built from 2 hexoses = 4 net triose phosphates). Calculate the total number of NADPH molecules consumed in the Calvin cycle to synthesize 15 molecules of sucrose.",
      answer: { type: "number", value: 360, display: "360" },
      traps: [
        {
          spec: { type: "number", value: 180 },
          feedback: "180 NADPH makes 15 molecules of GLUCOSE (6C); sucrose is a 12-carbon disaccharide requiring twice as much carbon fixation.",
        },
        {
          spec: { type: "number", value: 540 },
          feedback: "540 is the number of ATP molecules consumed (36 ATP per sucrose × 15); the question asks for NADPH (24 per sucrose × 15).",
        },
      ],
      solution: [
        "Each sucrose contains 12 carbons, requiring {{12}} {{CO_2}} fixed (= 4 net TP).",
        "Each 3 {{CO_2}} fixed consumes 6 NADPH (so 2 NADPH per {{CO_2}}).",
        "Per sucrose: {{12 * 2 = 24}} NADPH.",
        "For 15 sucrose molecules: {{15 * 24 = 360}} NADPH.",
      ],
      hints: [
        "How many carbon atoms (and therefore CO₂ molecules fixed) are in ONE sucrose disaccharide?",
        "Each CO₂ fixed consumes 2 NADPH during GP → TP reduction.",
        "Multiply 24 NADPH per sucrose by 15.",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "cell-respiration-photosynthesis",
      question:
        "A respirometer containing 4.0 g of germinating barley seeds and KOH is fitted with a capillary tube of internal diameter 1.4 mm. Over 20 minutes, the meniscus advances 30.0 mm. Using {{pi = 3.142}}, calculate the rate of oxygen uptake in {{mm^3 g^(-1) min^(-1)}} to 2 decimal places (enter the number only).",
      answer: { type: "number", value: 0.58, tolerance: 0.015, display: "0.58" },
      traps: [
        {
          spec: { type: "number", value: 2.31, tolerance: 0.03 },
          feedback: "You used the diameter (1.4 mm) instead of the radius (r = 0.70 mm) in V = π r² d!",
        },
      ],
      solution: [
        "Find capillary radius: {{r = 1.4 / 2 = 0.70 mm}}.",
        "Calculate O₂ volume: {{V = pi * r^2 * d = 3.142 * (0.70)^2 * 30.0 = 46.19 mm^3}}.",
        "Divide by time (20 min) and mass (4.0 g): {{Rate = 46.19 / (20 * 4.0) = 46.19 / 80 = 0.58}} mm³ g⁻¹ min⁻¹.",
      ],
      hints: [
        "Convert internal diameter (1.4 mm) to radius (0.70 mm) first!",
        "Use the cylinder volume formula V = π r² d, then divide by (time × mass).",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Compare and contrast",
      guideRef: "cell-respiration-photosynthesis",
      marks: 7,
      question:
        "Compare and contrast chemiosmosis in mitochondria and chloroplasts, and explain the physiological effect of an uncoupling protein (such as thermogenin in hibernating mammals' brown adipose tissue) on ATP output, oxygen consumption, and heat generation. [7 marks]",
      modelAnswer:
        "In both organelles, high-energy electrons move along membrane electron transport chains to pump protons across an impermeable internal membrane, creating an electrochemical H⁺ gradient that drives ATP synthesis as protons diffuse back through ATP synthase. However, in mitochondria electrons originate from oxidation of organic substrates (NADH and FADH₂), H⁺ ions accumulate in the intermembrane space, and oxygen acts as the terminal electron acceptor forming water. In chloroplasts, light excites chlorophyll electrons replaced by photolysis of water, H⁺ ions accumulate inside the thylakoid lumen, and NADP⁺ acts as the terminal acceptor forming NADPH (used in the Calvin cycle rather than general cellular work). Thermogenin inserts leaky proton channels into the inner mitochondrial membrane, allowing H⁺ ions to return to the matrix while bypassing ATP synthase. Consequently, the proton gradient dissipates and ATP synthesis collapses; with reduced back-pressure on proton pumps, electron transport and oxygen consumption accelerate dramatically, converting the oxidised fuel energy directly into thermal heat to warm the hibernating mammal.",
      markScheme: [
        {
          point: "Similarity: both use an ETC to build an electrochemical H⁺ gradient driving phosphorylation via ATP synthase",
          keywords: ["both", "etc", "gradient", "atp synthase"],
        },
        {
          point: "Electron source difference: organic NADH/FADH₂ in mitochondria vs light-excited chlorophyll/photolysis of water in chloroplasts",
          keywords: ["nadh", "fadh2", "photolysis", "chlorophyll"],
        },
        {
          point: "Proton compartment difference: intermembrane space (mitochondria) vs thylakoid lumen (chloroplasts)",
          keywords: ["intermembrane space", "thylakoid lumen"],
        },
        {
          point: "Terminal electron acceptor difference: O₂ → H₂O in mitochondria vs NADP⁺ → NADPH in chloroplasts",
          keywords: ["oxygen", "water", "nadp+", "nadph"],
        },
        {
          point: "Uncoupler opens a proton leak bypassing ATP synthase, dissipating the H⁺ gradient",
          keywords: ["bypassing", "leaky", "dissipates", "proton channels"],
        },
        {
          point: "ATP synthesis falls sharply while electron transport and O₂ consumption accelerate",
          keywords: ["atp synthesis collapses", "oxygen consumption accelerate", "back-pressure"],
        },
        {
          point: "Energy released from electron flow dissipates directly as heat (non-shivering thermogenesis)",
          keywords: ["heat", "warm", "thermal"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid chemiosmotic comparison or uncoupling mechanism." },
        { band: "1–2", marks: [1, 2], descriptor: "Lists basic organelle locations or states heat increases without proton-gradient reasoning." },
        { band: "3–5", marks: [3, 5], descriptor: "Accurately contrasts mitochondrial vs chloroplast chemiosmosis and outlines uncoupler ATP loss and heat release." },
        { band: "6–7", marks: [6, 7], descriptor: "Mastery-level synthesis contrasting electron donors, H⁺ pockets, terminal acceptors, and predicting uncoupler effects on ATP, O₂, and thermogenesis." },
      ],
      hints: [
        "Build a systematic comparison: similarity first, then electron source, H⁺ accumulation pocket, and terminal electron acceptor.",
        "For thermogenin, trace what happens to the H⁺ gradient, ATP synthase, ETC speed/O₂ consumption, and energy conservation (heat!).",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "chemical-signaling-hl",
      marks: 6,
      question:
        "Cholera toxin locks G-proteins in intestinal epithelial cells permanently in their GTP-bound active state, whereas an anti-oestrogen drug blocks oestradiol from binding its intracellular receptor. Analyse the cellular consequences of each agent and explain why their onset times differ dramatically. [6 marks]",
      modelAnswer:
        "In intestinal cells, permanently active GTP-bound G-proteins continuously stimulate adenylyl cyclase even without extracellular ligand, causing sustained overproduction of cAMP from ATP. High cAMP persistently activates protein kinase A, opening apical Cl⁻ channels so chloride ions and water rush osmotically into the gut lumen, producing severe watery diarrhoea within hours. Conversely, an anti-oestrogen drug competitively occupies intracellular oestradiol receptors without activating them, preventing formation of functional hormone–receptor transcription factor complexes. Target DNA hormone-response elements are therefore not activated, halting transcription of oestradiol-responsive mRNAs and preventing synthesis of growth-promoting proteins (used clinically against oestrogen-receptor-positive breast cancers). Cholera toxin acts far faster because cAMP phosphorylation cascades rapidly alter pre-existing membrane ion channels, whereas blocking steroid receptors manifests slowly over days as existing mRNAs and proteins gradually turn over.",
      markScheme: [
        {
          point: "Cholera: permanently active G-protein continuously stimulates adenylyl cyclase to overproduce cAMP",
          keywords: ["adenylyl cyclase", "overproduction", "camp"],
        },
        {
          point: "Elevated cAMP activates kinases/ion channels, driving Cl⁻ secretion and osmotic water loss (diarrhoea)",
          keywords: ["kinase", "cl-", "water", "diarrhoea"],
        },
        {
          point: "Anti-oestrogen occupies intracellular receptors, blocking functional hormone–receptor complex formation",
          keywords: ["intracellular", "occupies", "preventing", "complex"],
        },
        {
          point: "Prevents DNA binding / transcription factor activity, halting target mRNA and new protein synthesis",
          keywords: ["transcription factor", "mrna", "protein synthesis"],
        },
        {
          point: "Fast onset of cholera: second-messenger cascade modifies pre-existing channels/enzymes rapidly",
          keywords: ["pre-existing", "faster", "rapidly"],
        },
        {
          point: "Slow onset of steroid blocker: depends on gradual turnover of existing mRNA and proteins",
          keywords: ["slowly", "days", "turn over", "existing mrnas"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No accurate molecular signaling analysis." },
        { band: "1–2", marks: [1, 2], descriptor: "Mentions cAMP rise or blocked transcription without mechanistic chain or timing comparison." },
        { band: "3–4", marks: [3, 4], descriptor: "Analyses both cholera GPCR and steroid receptor block accurately, with limited kinetic comparison." },
        { band: "5–6", marks: [5, 6], descriptor: "Complete molecular analysis of both pathways linked explicitly to osmotic/transcriptional outcomes and enzyme-modification vs protein-turnover timing." },
      ],
      hints: [
        "Trace cholera step-by-step: GTP-locked G-protein → adenylyl cyclase → cAMP → kinase → ion/water efflux.",
        "Trace the steroid antagonist: intracellular receptor blocked → no transcription factor → no new mRNA/proteins.",
        "Compare modifying existing proteins (fast) vs halting new protein synthesis (slow turnover).",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-ch-q07",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "neural-signaling",
      question:
        "A spinal withdrawal reflex involves a 0.80 m myelinated sensory axon ({{80 m s^(-1)}}), a 0.06 m unmyelinated interneuron ({{2.0 m s^(-1)}}), a 0.90 m myelinated motor axon ({{60 m s^(-1)}}), and 3 chemical synapses (including the neuromuscular junction), each adding a 0.70 ms synaptic delay. Calculate the total reflex latency in milliseconds (ms).",
      answer: { type: "number", value: 57.1, tolerance: 0.1, display: "57.1 ms" },
      traps: [
        {
          spec: { type: "number", value: 55, tolerance: 0.1 },
          feedback: "55.0 ms is only the axonal travel sum — add 3 × 0.70 = 2.1 ms for the three chemical synapses.",
        },
        {
          spec: { type: "number", value: 27.1, tolerance: 0.1 },
          feedback: "Check the unmyelinated interneuron time: 0.06 m ÷ 2.0 m s⁻¹ = 0.030 s = 30.0 ms!",
        },
      ],
      solution: [
        "Sensory axon: {{0.80 / 80 = 0.010 s = 10.0 ms}}.",
        "Unmyelinated interneuron: {{0.06 / 2.0 = 0.030 s = 30.0 ms}}.",
        "Motor axon: {{0.90 / 60 = 0.015 s = 15.0 ms}}.",
        "Synaptic delays: {{3 * 0.70 = 2.1 ms}}.",
        "Total latency: {{10.0 + 30.0 + 15.0 + 2.1 = 57.1 ms}}.",
      ],
      hints: [
        "Calculate travel time for each of the three axons separately using t = d / v, and convert each to ms.",
        "Notice how even a tiny 6 cm unmyelinated interneuron takes 30 ms — longer than 1.7 m of myelinated axon combined!",
        "Add the three axonal times plus 3 × 0.70 ms.",
      ],
    },
    {
      id: "c1-c2-interaction-molecules-cells-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "neural-signaling",
      marks: 8,
      question:
        "Evaluate how axonal myelination, voltage-gated ion channels, postsynaptic integration (EPSPs, IPSPs, summation), and local anaesthetics coordinate to regulate pain perception and emergent conscious awareness. [8 marks]",
      modelAnswer:
        "Nociceptors detect damaging stimuli and trigger action potentials once depolarization exceeds the −55 mV threshold, opening voltage-gated Na⁺ channels for rapid influx (+30 mV) followed by voltage-gated K⁺ efflux for repolarization. Sharp initial pain travels rapidly via myelinated axons using saltatory conduction between nodes of Ranvier, whereas slower dull ache travels along unmyelinated fibres with continuous depolarization. Within spinal cord and brain relay synapses, excitatory neurotransmitters generate Na⁺-driven EPSPs while inhibitory pathways (such as endogenous descending signals or GABA) release Cl⁻/K⁺-driven IPSPs. Spatial and temporal summation at the axon hillock determines whether pain signals cross threshold and ascend to the cerebral cortex, explaining why pain intensity can be modulated or gated rather than acting as a fixed wire. Local anaesthetics such as lidocaine selectively block voltage-gated Na⁺ channels in peripheral sensory axons, halting depolarization and preventing pain impulses from reaching the CNS without suppressing general brain activity. However, local anaesthetics carry limitations such as temporary numbness of non-pain mechanoreceptors and finite duration as the drug clears. Ultimately, subjective pain experience and consciousness are emergent properties arising from integrated activity across billions of interacting cortical and subcortical neurons, impossible to predict from any single ion channel or isolated axon.",
      markScheme: [
        {
          point: "Threshold (−55 mV) triggers all-or-nothing voltage-gated Na⁺ influx (+30 mV) and K⁺ efflux repolarization",
          keywords: ["-55", "voltage-gated na+", "+30", "k+ efflux"],
        },
        {
          point: "Myelination enables fast saltatory conduction across nodes of Ranvier (sharp pain) vs slow unmyelinated conduction (dull ache)",
          keywords: ["saltatory", "nodes of ranvier", "unmyelinated"],
        },
        {
          point: "Excitatory EPSPs (Na⁺) and inhibitory IPSPs (Cl⁻/K⁺, e.g., GABA) modulate synaptic transmission",
          keywords: ["epsps", "ipsps", "gaba", "inhibitory"],
        },
        {
          point: "Spatial and temporal summation at the axon hillock determines whether threshold is crossed to reach the brain",
          keywords: ["spatial", "temporal", "axon hillock", "gated"],
        },
        {
          point: "Local anaesthetics (e.g., lidocaine) block voltage-gated Na⁺ channels in sensory axons, preventing impulse propagation",
          keywords: ["lidocaine", "block", "preventing"],
        },
        {
          point: "Evaluative strength: targets peripheral pain pathways without unconsciousness / general anaesthesia",
          keywords: ["peripheral", "without suppressing"],
        },
        {
          point: "Evaluative limitation: temporary duration or blocks touch/motor axons locally as well",
          keywords: ["limitations", "temporary", "numbness"],
        },
        {
          point: "Consciousness and subjective pain are emergent properties of integrated large-scale neural networks",
          keywords: ["emergent", "billions", "single", "network"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant neurobiology." },
        { band: "1–2", marks: [1, 2], descriptor: "Basic description of action potentials or anaesthetics without integration or evaluation." },
        { band: "3–5", marks: [3, 5], descriptor: "Explains conduction speed, EPSP/IPSP summation, and local anaesthetic channel block accurately with limited evaluative commentary." },
        { band: "6–8", marks: [6, 8], descriptor: "Cohesive IB HL evaluation synthesizing saltatory conduction, synaptic gating via summation, strengths/limits of local anaesthetics, and emergent consciousness." },
      ],
      hints: [
        "Cover all four elements in the stem: myelination speed, voltage-gated channels, EPSP/IPSP summation, and local anaesthetics.",
        "For 'Evaluate', include BOTH a benefit and a limitation of local anaesthetics.",
        "Finish by defining consciousness as an emergent property of neural networks.",
      ],
    },
  ],
};
