import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "c3-c4-interaction-organisms-ecosystems-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "integration-body-systems",
      strategy: "Match autonomic cardiac and respiratory regulation to its brainstem centre",
      question:
        "State the name of the brainstem region that receives chemoreceptor input about blood pH and autonomously adjusts heart rate and ventilation rate.",
      answer: {
        type: "text",
        accept: ["medulla oblongata", "medulla"],
        display: "medulla oblongata",
      },
      hints: [
        "This region sits at the base of the brainstem directly above the spinal cord.",
        "Unlike the cerebellum (balance and fine motor control), this centre regulates involuntary breathing and heart rate.",
      ],
      solution: [
        "The **medulla oblongata** integrates signals from arterial and central chemoreceptors and baroreceptors.",
        "It modulates heart rate via sympathetic accelerator and parasympathetic vagus nerves, and adjusts diaphragm/intercostal contraction frequency.",
      ],
      commonError: "Confusing the medulla oblongata with the cerebellum or the cerebral cortex.",
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "integration-body-systems",
      strategy: "Multiply heart rate by stroke volume and convert cm³ to dm³",
      question:
        "At rest, a student has a heart rate of 72 beats min⁻¹ and a stroke volume of 75 cm³. Calculate the student's cardiac output in dm³ min⁻¹ (to 1 decimal place).",
      answer: {
        type: "number",
        value: 5.4,
        tolerance: 0.05,
        display: "5.4 dm³ min⁻¹",
      },
      traps: [
        {
          spec: { type: "number", value: 5400, tolerance: 5 },
          feedback: "5,400 is in cm³ min⁻¹ — divide by 1,000 to convert to dm³ min⁻¹.",
        },
        {
          spec: { type: "number", value: 0.54, tolerance: 0.01 },
          feedback: "Check your unit conversion: 1 dm³ = 1,000 cm³, not 10,000 cm³.",
        },
      ],
      hints: [
        "Use {{CO = HR * SV}} to find volume pumped per minute in cm³ min⁻¹.",
        "Convert cm³ to dm³ by dividing by 1,000.",
      ],
      solution: [
        "Cardiac output in cm³ min⁻¹: {{72 * 75 = 5400}} cm³ min⁻¹.",
        "Convert to dm³ min⁻¹: {{5400 / 1000 = 5.4}} dm³ min⁻¹.",
      ],
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "defense-against-disease",
      strategy: "Recall the active protease enzyme in the blood clotting cascade",
      question:
        "State the name of the active plasma enzyme in the blood clotting cascade that directly converts soluble fibrinogen into insoluble fibrin threads.",
      answer: {
        type: "text",
        accept: ["thrombin"],
        display: "thrombin",
      },
      hints: [
        "Clotting factors from platelets convert an inactive 'pro-' precursor into this active enzyme.",
        "Its name removes the 'pro-' prefix from prothrombin.",
      ],
      solution: [
        "Platelet clotting factors trigger activation of inactive **prothrombin** into active **thrombin**.",
        "**Thrombin** then catalyses the conversion of soluble fibrinogen into insoluble fibrin polymers.",
      ],
      commonError: "Writing prothrombin (the inactive precursor) instead of thrombin (the active enzyme).",
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "defense-against-disease",
      strategy: "Apply herd-immunity threshold p_c = 1 − 1/R₀",
      question:
        "An infectious childhood virus has a basic reproduction number {{R_0 = 8}}. Calculate the minimum percentage of the population that must be immune to reach the herd-immunity threshold (give your answer to 1 decimal place).",
      answer: {
        type: "number",
        value: 87.5,
        tolerance: 0.1,
        display: "87.5%",
      },
      traps: [
        {
          spec: { type: "number", value: 12.5, tolerance: 0.1 },
          feedback: "12.5% is 1/R₀ (the maximum susceptible fraction) — subtract from 100% to get the immune threshold.",
        },
        {
          spec: { type: "number", value: 0.875, tolerance: 0.005 },
          feedback: "0.875 is the correct proportion — multiply by 100 to express it as a percentage.",
        },
      ],
      hints: [
        "Use the herd-immunity threshold equation {{p_c = 1 - 1/R_0}}.",
        "Evaluate {{1 - 1/8 = 7/8 = 0.875}}, then multiply by 100 for a percentage.",
      ],
      solution: [
        "{{p_c = 1 - 1/R_0 = 1 - 1/8 = 0.875}}.",
        "Multiply by 100 to express as a percentage: **87.5%**.",
      ],
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "populations-communities-chi",
      strategy: "Apply the Lincoln capture–mark–recapture index N = (M × n) / m",
      question:
        "In a grassland survey, 80 beetles are captured, harmlessly marked, and released. Three days later, 55 beetles are caught and 11 bear marks. Calculate the Lincoln index estimate of the beetle population.",
      answer: {
        type: "number",
        value: 400,
        tolerance: 0.5,
        display: "400 individuals",
      },
      traps: [
        {
          spec: { type: "number", value: 16, tolerance: 0.2 },
          feedback: "You divided M by (n/m) or inverted the fraction — multiply M × n and divide by m.",
        },
      ],
      hints: [
        "Assign {{M = 80}}, {{n = 55}}, and {{m = 11}}.",
        "Compute {{N = (M * n) / m}}.",
      ],
      solution: [
        "Identify {{M = 80}}, {{n = 55}}, {{m = 11}}.",
        "{{N = (80 * 55) / 11 = 4400 / 11 = 400}} individuals.",
      ],
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "transfers-energy-matter",
      strategy: "Apply NPP = GPP − R",
      question:
        "A boreal conifer stand has a gross primary productivity (GPP) of 14,200 kJ m⁻² yr⁻¹ and loses 8,600 kJ m⁻² yr⁻¹ via plant respiration. Calculate its net primary productivity (NPP) in kJ m⁻² yr⁻¹.",
      answer: {
        type: "number",
        value: 5600,
        tolerance: 1,
        display: "5600 kJ m⁻² yr⁻¹",
      },
      traps: [
        {
          spec: { type: "number", value: 22800, tolerance: 5 },
          feedback: "Respiration is lost as heat, so subtract R from GPP rather than adding them.",
        },
      ],
      hints: [
        "Recall {{NPP = GPP - R}}.",
        "Subtract autotrophic respiration (8,600) from GPP (14,200).",
      ],
      solution: [
        "{{NPP = GPP - R = 14200 - 8600 = 5600}} kJ m⁻² yr⁻¹.",
      ],
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-quiz-q07",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Outline",
      guideRef: "integration-body-systems",
      strategy: "Trace receptor → sensory → relay → motor → effector clearly",
      marks: 3,
      question:
        "Outline the neural pathway that withdraws a human hand involuntarily after touching a sharp thorn.",
      hints: [
        "Name the three types of neurons involved and where the central synapse occurs.",
        "Include the spinal roots (dorsal vs ventral) and the final contracting effector.",
      ],
      modelAnswer:
        "Pain nociceptors in the skin generate action potentials conducted along a sensory neuron entering the spinal cord via the dorsal root. Inside spinal grey matter, the sensory neuron synapses with a relay interneuron, which passes the impulse directly to a motor neuron exiting through the ventral root. The motor neuron stimulates the skeletal muscle effector (biceps) to contract and pull the hand away rapidly without waiting for conscious cortical processing.",
      markScheme: [
        {
          point: "Pain receptor / nociceptor triggers impulse along sensory neuron into spinal cord (via dorsal root)",
          keywords: ["nociceptor", "sensory neuron", "dorsal root"],
        },
        {
          point: "Synapses with relay / interneuron inside spinal cord grey matter",
          keywords: ["relay", "interneuron", "grey matter"],
        },
        {
          point: "Motor neuron carries impulse (via ventral root) to skeletal muscle effector causing contraction",
          keywords: ["motor neuron", "ventral root", "effector", "contract"],
        },
      ],
      commonError: "Omitting the relay neuron in spinal grey matter or stating that the impulse must reach the brain before muscle contraction occurs.",
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-quiz-q08",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "defense-against-disease",
      strategy: "Use F-H-L (Faster lag, Higher peak, Longer persistence) + memory cells",
      marks: 3,
      question:
        "Distinguish between the primary and secondary humoral antibody responses to the same pathogen antigen.",
      hints: [
        "Compare lag time before detectable antibodies appear, maximum antibody concentration, and duration.",
        "Explain which lymphocyte population drives the faster secondary surge.",
      ],
      modelAnswer:
        "The secondary response has a much shorter lag phase (1–2 days compared with 5–10 days in the primary response) because pre-existing memory B-cells immediately recognize the antigen and rapidly divide into plasma cells. It reaches a dramatically higher peak antibody concentration in blood plasma than the modest primary peak. Finally, antibodies persist at protective levels for a far longer duration during the secondary response.",
      markScheme: [
        {
          point: "Shorter lag phase / faster onset in secondary response compared with primary",
          keywords: ["shorter lag", "faster", "1–2 days", "1-2 days"],
        },
        {
          point: "Higher peak antibody concentration / titre in secondary response",
          keywords: ["higher peak", "greater concentration", "titre", "higher concentration"],
        },
        {
          point: "Longer persistence of antibodies driven by memory B-cells rapidly forming plasma cells",
          keywords: ["memory b", "memory cell", "persist", "longer duration"],
        },
      ],
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "populations-communities-chi",
      strategy: "Link rising population density to density-dependent limiting factors and K",
      marks: 3,
      question:
        "Explain why a colonizing population in a finite habitat slows down after an exponential phase and stabilizes in a plateau phase.",
      hints: [
        "Identify density-dependent limiting factors that intensify as crowding rises.",
        "State the relationship between birth/immigration and death/emigration rates at carrying capacity K.",
      ],
      modelAnswer:
        "As population density increases, density-dependent limiting factors such as intraspecific competition for food and space, disease transmission, waste buildup, and predation intensify during the transitional phase. These environmental resistances reduce natality and increase mortality, slowing net growth. Eventually the population stabilizes around carrying capacity K in the plateau phase, where natality plus immigration roughly equals mortality plus emigration.",
      markScheme: [
        {
          point: "Density-dependent limiting factors intensify (competition for food/space, disease, predation, waste)",
          keywords: ["density-dependent", "competition", "disease", "predation"],
        },
        {
          point: "Growth slows during the transitional phase as mortality rises and/or natality falls",
          keywords: ["transitional", "mortality", "natality", "environmental resistance"],
        },
        {
          point: "Stabilizes around carrying capacity K where (natality + immigration) ≈ (mortality + emigration)",
          keywords: ["carrying capacity", "equals", "balance", "immigration"],
        },
      ],
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "transfers-energy-matter",
      strategy: "List the three distinct biological energy-loss pathways per trophic step",
      marks: 3,
      question:
        "Explain why only around 10% of chemical energy passes from one trophic level to the next in terrestrial food chains.",
      hints: [
        "What happens to most assimilated chemical energy inside cells during metabolism?",
        "Also account for uneaten body parts and indigestible waste.",
      ],
      modelAnswer:
        "First, organisms use most assimilated chemical energy in cellular respiration, releasing thermal energy (heat) to the surroundings that cannot be reconverted into chemical biomass. Second, not every organism or body part at the lower trophic level is consumed—structures such as woody stems, roots, bones, and fur die unconsumed and enter detritus. Third, ingested food is never 100% digested or absorbed; indigestible components like cellulose are egested in faeces and nitrogenous wastes are excreted.",
      markScheme: [
        {
          point: "Cellular respiration dissipates chemical energy as heat that cannot be recycled by organisms",
          keywords: ["respiration", "heat", "thermal"],
        },
        {
          point: "Not all organisms or tissues are consumed (e.g., roots, wood, bones, fur)",
          keywords: ["not consumed", "uneaten", "bones", "roots", "detritus"],
        },
        {
          point: "Incomplete digestion/assimilation leads to energy loss in egested faeces and excreted waste",
          keywords: ["faeces", "feces", "egested", "excreted", "indigestible"],
        },
      ],
    },
  ],

  papers: [
    {
      id: "c3-c4-interaction-organisms-ecosystems-p1",
      title: "Paper 1B / 2 · Set 1: Quantitative Ecology, Immunity & Coordination",
      level: "SL",
      questions: [
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "integration-body-systems",
          strategy: "Multiply tidal volume by breathing frequency",
          question:
            "During brisk uphill walking, a hiker's tidal volume is 0.65 dm³ and breathing frequency is 28 breaths min⁻¹. Calculate the minute ventilation rate in dm³ min⁻¹ (to 1 decimal place).",
          answer: {
            type: "number",
            value: 18.2,
            tolerance: 0.05,
            display: "18.2 dm³ min⁻¹",
          },
          hints: [
            "Ventilation rate = tidal volume × breathing rate.",
            "Multiply {{0.65 * 28}}.",
          ],
          solution: [
            "Ventilation rate = {{0.65 * 28 = 18.2}} dm³ min⁻¹.",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "integration-body-systems",
          strategy: "Recall the pineal circadian hormone",
          question:
            "State the name of the hormone secreted by the pineal gland in darkness to synchronize human circadian sleep–wake rhythms.",
          answer: {
            type: "text",
            accept: ["melatonin"],
            display: "melatonin",
          },
          hints: [
            "Exposure to bright blue light at night suppresses secretion of this hormone via the suprachiasmatic nucleus.",
            "It is sometimes prescribed in small doses to help travellers adjust to jet lag.",
          ],
          solution: [
            "**Melatonin** is secreted by the pineal gland during darkness to coordinate the ~24-hour sleep–wake cycle.",
          ],
          commonError: "Confusing melatonin (circadian hormone) with melanin (skin pigment).",
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q03",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "integration-body-systems",
          strategy: "Link CO₂ → blood pH → chemoreceptors → medulla → sympathetic/SA node + vagus recovery",
          marks: 4,
          question:
            "Explain how involuntary nervous and hormonal mechanisms increase heart rate during vigorous running and return it to baseline during recovery.",
          hints: [
            "Start with how rising muscle respiration alters arterial CO₂ and plasma pH.",
            "Name the sensors, brain control centre, specific autonomic nerves, and cardiac pacemaker.",
          ],
          modelAnswer:
            "Vigorous muscle respiration raises dissolved blood CO₂, forming carbonic acid that dissociates into H⁺ ions and lowers blood pH. Carotid, aortic, and central chemoreceptors detect this pH decrease and send impulses to the cardiovascular centre in the medulla oblongata. The medulla increases sympathetic cardiac accelerator nerve firing (releasing noradrenaline) alongside adrenal medulla epinephrine secretion, accelerating sinoatrial (SA) node depolarization and raising heart rate. During recovery, as CO₂ falls and pH normalizes, the medulla increases parasympathetic vagus nerve firing (releasing acetylcholine) to slow the SA node back to resting rhythm.",
          markScheme: [
            {
              point: "Increased cellular respiration raises blood CO₂, lowering blood pH (carbonic acid / H⁺)",
              keywords: ["carbonic acid", "blood ph", "ph drops", "lowers blood ph", "h+"],
            },
            {
              point: "Chemoreceptors detect pH drop and signal the medulla oblongata",
              keywords: ["chemoreceptor", "medulla"],
            },
            {
              point: "Sympathetic accelerator nerve (noradrenaline) and/or epinephrine increases sinoatrial (SA) node firing",
              keywords: ["sympathetic", "sinoatrial", "sa node", "epinephrine", "noradrenaline"],
            },
            {
              point: "During recovery, parasympathetic vagus nerve (acetylcholine) slows the SA node",
              keywords: ["parasympathetic", "vagus", "acetylcholine"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant biological mechanism identified.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies elevated CO₂ or adrenaline raising heart rate but omits chemoreceptor–medulla–SA node pathway or recovery control.",
              indicators: ["Mentions CO₂ or epinephrine without full neural pathway"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately links blood pH drop, chemoreceptors, medulla oblongata, sympathetic/epinephrine acceleration of the SA node, and vagus parasympathetic deceleration.",
              indicators: ["Includes chemical trigger (pH), specific autonomic nerves, SA node, and recovery brake"],
            },
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "defense-against-disease",
          strategy: "Apply p_c = 1 − 1/R₀",
          question:
            "A highly contagious airborne pathogen has {{R_0 = 12.5}}. Calculate the minimum percentage of the population that must be immune to establish herd immunity.",
          answer: {
            type: "number",
            value: 92,
            tolerance: 0.1,
            display: "92%",
          },
          traps: [
            {
              spec: { type: "number", value: 8, tolerance: 0.1 },
              feedback: "8% is 1/12.5 — subtract from 100% to obtain the required immune percentage.",
            },
          ],
          hints: [
            "Compute {{1 / 12.5 = 0.08}}.",
            "Substitute into {{p_c = (1 - 0.08) * 100}}.",
          ],
          solution: [
            "{{1 / 12.5 = 0.08}}.",
            "{{p_c = 1 - 0.08 = 0.92}}, which equals **92%**.",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "defense-against-disease",
          strategy: "Step through platelets → clotting factors → prothrombin → thrombin → fibrinogen → fibrin + protective roles",
          marks: 4,
          question:
            "Outline the sequence of events in blood clotting after a deep skin cut and explain why this cascade is vital for defence against disease.",
          hints: [
            "Name the cell fragments that initiate the cascade and both precursor/product protein pairs.",
            "Remember to specify 'soluble fibrinogen' and 'insoluble fibrin', plus how the clot protects against pathogens.",
          ],
          modelAnswer:
            "When a blood vessel is severed, platelets adhere to exposed collagen and release clotting factors (requiring Ca²⁺ ions). These clotting factors trigger an enzyme cascade converting inactive plasma prothrombin into the active protease thrombin. Thrombin catalyses the conversion of soluble fibrinogen into insoluble fibrin threads, which weave a fibrous mesh trapping erythrocytes and platelets to form a solid clot. This rapid seal prevents fatal blood loss and restores a physical barrier blocking entry of opportunistic bacteria and viruses into the bloodstream.",
          markScheme: [
            {
              point: "Platelets adhere to damaged vessel and release clotting factors",
              keywords: ["platelet", "clotting factor"],
            },
            {
              point: "Clotting factors convert inactive prothrombin into active thrombin",
              keywords: ["prothrombin", "thrombin"],
            },
            {
              point: "Thrombin converts soluble fibrinogen into insoluble fibrin mesh trapping blood cells",
              keywords: ["soluble fibrinogen", "insoluble fibrin", "fibrin mesh"],
            },
            {
              point: "Seals wound to prevent excessive blood loss AND block entry of pathogens",
              keywords: ["blood loss", "pathogen", "barrier", "seal"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No accurate steps of the clotting cascade described.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Mentions platelets or fibrin clot forming to stop bleeding, but misses intermediate enzymatic steps.",
              indicators: ["Omits prothrombin/thrombin or soluble/insoluble distinction"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Traces platelets → clotting factors → prothrombin → thrombin → soluble fibrinogen → insoluble fibrin mesh and links clotting to haemostasis and pathogen exclusion.",
              indicators: ["Exact enzyme sequence plus dual protective significance"],
            },
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "defense-against-disease",
          strategy: "Trace APC → T-helper cytokines → B-cell clonal expansion → plasma/memory cells, then link HIV CD4⁺ loss",
          marks: 5,
          question:
            "Explain how clonal selection produces pathogen-specific antibodies during an infection, and explain why HIV progressively destroys this adaptive response.",
          hints: [
            "Start with macrophage phagocytosis and antigen presentation on MHC proteins.",
            "Include helper T-cell cytokines, B-cell mitotic clonal expansion, plasma cells vs memory cells, and HIV targeting CD4⁺ T-helper cells.",
          ],
          modelAnswer:
            "Macrophages engulf invading pathogens by phagocytosis, digest them using lysosomal enzymes, and display foreign peptide antigens on their surface membrane as antigen-presenting cells. A helper T-lymphocyte (CD4⁺) with a complementary receptor binds this presented antigen and secretes cytokines. These cytokines stimulate specific B-lymphocytes that have bound the same antigen to undergo rapid mitotic clonal expansion, differentiating into antibody-secreting plasma cells and long-lived memory B-cells. Because HIV specifically infects and destroys helper T-cells, progressive T-helper depletion removes the cytokine signalling needed to activate B-cells and cytotoxic T-cells, causing AIDS and lethal opportunistic infections.",
          markScheme: [
            {
              point: "Macrophage phagocytoses pathogen and presents foreign antigens on surface (APC)",
              keywords: ["macrophage", "phagocyt", "antigen-presenting", "presents"],
            },
            {
              point: "Helper T-cell with complementary receptor binds antigen and secretes cytokines",
              keywords: ["helper t", "cytokine", "complementary"],
            },
            {
              point: "Specific B-lymphocytes undergo mitosis / clonal expansion upon activation",
              keywords: ["b-lymphocyte", "b-cell", "mitosis", "clonal expansion"],
            },
            {
              point: "Differentiate into plasma cells secreting specific antibodies and memory B-cells",
              keywords: ["plasma cell", "memory"],
            },
            {
              point: "HIV infects and destroys CD4⁺ helper T-cells, blocking activation of adaptive immunity and allowing opportunistic infections",
              keywords: ["cd4", "opportunistic", "aids", "destroys helper"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid explanation of adaptive immunity or HIV.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States that white blood cells make antibodies and HIV weakens the immune system without cellular mechanisms.",
              indicators: ["Vague references to white blood cells; no clonal selection"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explains antigen presentation, T-helper cytokines, and B-cell differentiation into plasma/memory cells, with partial link to HIV.",
              indicators: ["Accurate lymphocyte cascade; misses either memory cells or opportunistic AIDS consequence"],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Complete, precise cellular mechanism linking macrophage APCs, T-helper cytokines, B-cell clonal expansion into plasma and memory cells, and HIV destruction of CD4⁺ helper T-cells.",
              indicators: ["All five mechanistic stages clearly connected"],
            },
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "populations-communities-chi",
          strategy: "Scale mean quadrat count by (habitat area / quadrat area)",
          question:
            "A rectangular pasture measures 40 m by 25 m. Students place 16 random 0.5 m × 0.5 m quadrats and count a mean of 4.25 dandelions per quadrat. Estimate the total dandelion population in the pasture.",
          answer: {
            type: "number",
            value: 17000,
            tolerance: 10,
            display: "17000 individuals",
          },
          traps: [
            {
              spec: { type: "number", value: 4250, tolerance: 5 },
              feedback: "Remember each 0.5 m × 0.5 m quadrat has area 0.25 m² (not 1 m²), so multiply by 4,000 rather than 1,000.",
            },
            {
              spec: { type: "number", value: 8500, tolerance: 5 },
              feedback: "Quadrat area is 0.5 × 0.5 = 0.25 m², not 0.5 m².",
            },
          ],
          hints: [
            "Total pasture area = {{40 * 25 = 1000}} m²; area of one quadrat = {{0.5 * 0.5 = 0.25}} m².",
            "Calculate {{4.25 * (1000 / 0.25)}}.",
          ],
          solution: [
            "Pasture area = {{40 * 25 = 1000}} m²; quadrat area = {{0.5 * 0.5 = 0.25}} m².",
            "Number of quadrat equivalents = {{1000 / 0.25 = 4000}}.",
            "Estimated population = {{4.25 * 4000 = 17000}} individuals.",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "populations-communities-chi",
          strategy: "Use Lincoln index N = (M × n) / m",
          question:
            "Ornithologists mist-net and ring 120 house sparrows in a park. Two weeks later they capture 90 sparrows, of which 18 carry rings. Calculate the Lincoln index population estimate.",
          answer: {
            type: "number",
            value: 600,
            tolerance: 1,
            display: "600 individuals",
          },
          hints: [
            "Set {{M = 120}}, {{n = 90}}, and {{m = 18}}.",
            "Compute {{(120 * 90) / 18}}.",
          ],
          solution: [
            "{{N = (120 * 90) / 18 = 10800 / 18 = 600}} individuals.",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "populations-communities-chi",
          strategy: "Compute expected frequency E = (row total × column total) / grand total",
          question:
            "Across 150 random forest quadrats, Species P is present in 90 quadrats and Species Q is present in 70 quadrats. Calculate the expected number of quadrats containing both species under the null hypothesis of independence.",
          answer: {
            type: "number",
            value: 42,
            tolerance: 0.1,
            display: "42 quadrats",
          },
          traps: [
            {
              spec: { type: "number", value: 80, tolerance: 0.5 },
              feedback: "80 is the average of 90 and 70 — instead compute (row total × column total) / grand total.",
            },
          ],
          hints: [
            "Apply {{E = (" + '"row total"' + " * " + '"column total"' + ") / " + '"grand total"' + "}}.",
            "Evaluate {{(90 * 70) / 150}}.",
          ],
          solution: [
            "{{E = (90 * 70) / 150 = 6300 / 150 = 42}} quadrats.",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q10",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "populations-communities-chi",
          strategy: "Apply df = (rows − 1)(columns − 1)",
          question:
            "State the number of degrees of freedom (df) used when performing a 2 × 2 presence–absence chi-squared test of association between two species.",
          answer: {
            type: "number",
            value: 1,
            tolerance: 0,
            display: "1",
          },
          traps: [
            {
              spec: { type: "number", value: 3, tolerance: 0 },
              feedback: "4 − 1 = 3 applies to a 4-category goodness-of-fit test; a 2 × 2 contingency table uses (r − 1)(c − 1).",
            },
          ],
          hints: [
            "Use the contingency-table formula {{df = (r - 1)(c - 1)}} with {{r = 2}} and {{c = 2}}.",
          ],
          solution: [
            "{{df = (2 - 1)(2 - 1) = 1 * 1 = 1}}.",
          ],
          commonError: "Using n − 1 = 4 − 1 = 3 instead of (r − 1)(c − 1) = 1.",
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "populations-communities-chi",
          strategy: "Compute E for all 4 cells and sum (O − E)² / E",
          question:
            "In 100 random quadrats across a moorland, observed frequencies for heather (A) and bilberry (B) are: Both present = 36, Heather only = 14, Bilberry only = 14, Neither = 36. Calculate the chi-squared statistic ({{χ^2}}) to 2 decimal places.",
          answer: {
            type: "number",
            value: 19.36,
            tolerance: 0.05,
            display: "19.36",
          },
          traps: [
            {
              spec: { type: "number", value: 4.84, tolerance: 0.05 },
              feedback: "4.84 is the contribution of a single cell — sum across all four cells of the 2 × 2 table.",
            },
          ],
          hints: [
            "Find row and column totals: each is 50 out of 100, so every cell has {{E = (50 * 50) / 100 = 25}}.",
            "Each cell has {{|O - E| = 11}}, contributing {{11^2 / 25 = 121 / 25 = 4.84}}; sum all four cells.",
          ],
          solution: [
            "Row totals are 50 and 50; column totals are 50 and 50; grand total is 100, so every cell has {{E = 25}}.",
            "Each cell gives {{(O - E)^2 / E = 11^2 / 25 = 4.84}}.",
            "Sum across all 4 cells: {{χ^2 = 4 * 4.84 = 19.36}} (exceeds critical value 3.841 → reject H₀; significant positive association).",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "populations-communities-chi",
          strategy: "Specify exact reciprocal resource benefits (+/+) for two named IB mutualisms",
          marks: 4,
          question:
            "Explain how both organisms benefit in two distinct named examples of biological mutualism.",
          hints: [
            "Choose two classic IB pairs: legume root nodules + *Rhizobium*, mycorrhizae + orchids/trees, or reef corals + zooxanthellae.",
            "For each pair, explicitly state what Partner A supplies to Partner B AND what Partner B supplies back to Partner A.",
          ],
          modelAnswer:
            "First, in legume root nodules, *Rhizobium* bacteria fix atmospheric nitrogen gas (N₂) into ammonium compounds that the host plant uses to synthesize amino acids; in return, the legume supplies photosynthetic carbohydrates and a protected low-oxygen nodule environment containing leghaemoglobin. Second, in reef-building corals, intracellular zooxanthellae dinoflagellates perform photosynthesis and export glucose, amino acids, and O₂ to the coral polyps; in return, the coral provides physical shelter in sunlit shallow water alongside metabolic CO₂ and nitrogenous wastes needed for algal growth.",
          markScheme: [
            {
              point: "Example 1 named accurately with benefit to host (e.g., Rhizobium fixes N₂ to ammonium for legumes OR mycorrhizae supply phosphate/water)",
              keywords: ["rhizobium", "nitrogen", "ammonium", "mycorrhiz", "phosphate"],
            },
            {
              point: "Reciprocal benefit to symbiont in Example 1 (e.g., plant supplies photosynthetic carbohydrates/sugars and anaerobic protection)",
              keywords: ["carbohydrate", "sugar", "leghaemoglobin", "anaerobic", "glucose"],
            },
            {
              point: "Example 2 named accurately with benefit to host (e.g., zooxanthellae photosynthesize supplying organic carbon/O₂ to corals)",
              keywords: ["zooxanthellae", "coral", "photosynth", "dinoflagellate"],
            },
            {
              point: "Reciprocal benefit to symbiont in Example 2 (e.g., coral supplies shelter/light exposure, CO₂, and nitrogenous waste)",
              keywords: ["shelter", "co2", "nitrogenous", "protection"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid mutualism examples described.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Names one or two mutualisms but states only one-way benefits or omits specific exchanged substances.",
              indicators: ["Vague statements such as 'both help each other survive'"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Names two distinct IB mutualisms and accurately specifies the exact reciprocal chemical/ecological benefit received by each partner.",
              indicators: ["Explicit bidirectional exchange for both named pairs"],
            },
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "transfers-energy-matter",
          strategy: "Compute (higher trophic energy / lower trophic energy) × 100",
          question:
            "In a salt-marsh ecosystem, cordgrass producers have a net primary productivity of 16,000 kJ m⁻² yr⁻¹, and herbivorous marsh insects produce 1,360 kJ m⁻² yr⁻¹ of new biomass. Calculate the percentage energy-transfer efficiency (to 1 decimal place).",
          answer: {
            type: "number",
            value: 8.5,
            tolerance: 0.1,
            display: "8.5%",
          },
          traps: [
            {
              spec: { type: "number", value: 11.8, tolerance: 0.1 },
              feedback: "Check which number goes in the numerator: divide consumer energy (1,360) by producer NPP (16,000).",
            },
          ],
          hints: [
            "Use {{ " + '"Efficiency (%)"' + " = (1360 / 16000) * 100 }}.",
            "Check that your answer falls within the typical ecological range of 5–20%.",
          ],
          solution: [
            "{{ (1360 / 16000) * 100 = 0.085 * 100 = 8.5 }}%.",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "transfers-energy-matter",
          strategy: "Explain BOTH the annual seasonal sawtooth AND the multi-decade upward fossil trend",
          marks: 4,
          question:
            "Explain the two distinct patterns observed in the Mauna Loa Keeling curve of atmospheric CO₂ concentration from 1958 to the present.",
          hints: [
            "Pattern 1 is the annual sawtooth oscillation (~5–7 ppm): link it to Northern Hemisphere forest seasonality.",
            "Pattern 2 is the steady upward baseline rise (~315 to >420 ppm): link it to human combustion and land-use change.",
          ],
          modelAnswer:
            "First, the curve exhibits a regular annual sawtooth oscillation driven by seasonal carbon fluxes across the Northern Hemisphere, which holds roughly two-thirds of Earth's terrestrial landmass. Between May and September (northern spring/summer), peak forest photosynthesis draws down atmospheric CO₂ faster than respiration releases it; between October and April (northern autumn/winter), leaf-fall decomposition and respiration exceed photosynthesis so CO₂ rises. Second, superimposed on this cycle is a steep multi-decade upward trend from ~315 ppm in 1958 past 420 ppm today, caused by anthropogenic combustion of fossil fuels and deforestation transferring long-sequestered carbon into the atmosphere faster than natural ocean and forest sinks can absorb it.",
          markScheme: [
            {
              point: "Identifies annual seasonal sawtooth oscillation dominated by Northern Hemisphere landmass",
              keywords: ["sawtooth", "seasonal", "northern hemisphere"],
            },
            {
              point: "May–September dip due to photosynthesis exceeding respiration; October–April rise due to respiration/decay exceeding photosynthesis",
              keywords: ["photosynthesis", "respiration", "summer", "winter"],
            },
            {
              point: "Identifies steep long-term upward baseline trend (from ~315 ppm past 420 ppm)",
              keywords: ["upward", "long-term", "315", "420", "rising"],
            },
            {
              point: "Caused by anthropogenic fossil-fuel combustion and deforestation releasing carbon faster than sinks absorb it",
              keywords: ["fossil fuel", "combustion", "deforestation", "anthropogenic"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Neither pattern of the Keeling curve is accurately explained.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Explains the long-term fossil-fuel rise OR mentions seasonal change without identifying Northern Hemisphere photosynthesis/respiration balance.",
              indicators: ["Addresses only one of the two superimposed patterns"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly explains both the Northern Hemisphere seasonal photosynthesis–respiration sawtooth and the anthropogenic combustion/deforestation upward trend.",
              indicators: ["Explicitly names Northern Hemisphere seasonality and fossil combustion"],
            },
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "transfers-energy-matter",
          strategy: "Give explicit similarities (trophic links, biological transfers) AND key differences (open flow vs closed cycling)",
          marks: 4,
          question:
            "Compare and contrast the movement of energy and carbon through a terrestrial woodland ecosystem.",
          hints: [
            "Include at least one clear similarity (how both enter producers and pass through food webs).",
            "Contrast open one-way energy flow (dissipated as heat) with closed cyclic carbon recycling (via saprotrophs).",
          ],
          modelAnswer:
            "Both energy and carbon enter the woodland through photoautotrophs during photosynthesis and move together through feeding links in organic carbon compounds along food webs, with both undergoing transformations during cellular respiration. However, the ecosystem is an open system for energy—sunlight must enter continuously and chemical energy flows strictly one way, dissipating irreversibly as respiratory heat to space and never being recycled. By contrast, the woodland is largely a closed system for matter: carbon atoms are never destroyed and are continuously recycled between atmospheric CO₂, living biomass, detritus, and soil pools by saprotrophic decomposers.",
          markScheme: [
            {
              point: "Similarity: both enter via autotrophic photosynthesis and transfer together in organic molecules through food chains/webs",
              keywords: ["photosynthesis", "organic", "food web", "feeding"],
            },
            {
              point: "Energy moves through an open system in a one-way flow requiring continuous external sunlight input",
              keywords: ["open system", "one-way", "unidirectional", "sunlight"],
            },
            {
              point: "Energy is lost irreversibly as respiratory heat and cannot be recycled",
              keywords: ["heat", "not recycled", "never recycled", "irreversibly"],
            },
            {
              point: "Carbon moves in a closed system and is continuously recycled between inorganic CO₂ and biomass via saprotrophic decomposers",
              keywords: ["closed system", "recycled", "saprotroph", "decomposer"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid comparison or contrast made.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States differences only (e.g., energy flows, carbon cycles) without biological mechanisms or similarities.",
              indicators: ["Missing explicit similarity or open/closed thermodynamic basis"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Provides clear similarities (photosynthetic entry and organic trophic transfer) and sharp contrasts (open one-way heat-dissipating energy vs closed saprotroph-recycled carbon).",
              indicators: ["Balanced compare AND contrast with precise IB terminology"],
            },
          ],
        },
      ],
    },

    {
      id: "c3-c4-interaction-organisms-ecosystems-p2",
      title: "Paper 2 · Set 2: Data Analysis, Extended Response & HL Synthesis",
      level: "HL",
      questions: [
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "State",
          guideRef: "integration-body-systems",
          strategy: "Recall the specific auxin efflux transporter protein [HL]",
          question:
            "[HL] State the name of the membrane-bound auxin efflux pump protein that relocalizes laterally in plant shoot cells under unilateral blue light.",
          answer: {
            type: "text",
            accept: ["PIN3", "PIN3 protein", "PIN3 efflux pump", "PIN3 proteins", "PIN proteins"],
            display: "PIN3",
          },
          hints: [
            "This carrier protein has a three-letter-plus-digit code named after the 'pin-formed' mutant phenotype in *Arabidopsis*.",
            "It actively pumps IAA out of cells toward the shaded flank of the coleoptile.",
          ],
          solution: [
            "**PIN3** auxin efflux proteins relocalize to the shaded-side plasma membrane, actively exporting IAA laterally to build an auxin gradient.",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q02",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "integration-body-systems",
          strategy: "Connect blue-light phototropins → PIN3 lateral efflux → IAA gene expression → H⁺-ATPase wall acidification → expansins → turgor elongation",
          marks: 6,
          question:
            "[HL] Explain the cellular and molecular mechanism by which unilateral blue light causes a plant shoot to bend toward the light source.",
          hints: [
            "Start with apical phototropin perception and PIN3 efflux pump redistribution.",
            "Trace the acid-growth hypothesis: H⁺-ATPase proton pumps, apoplastic pH drop, expansins breaking hydrogen bonds in cellulose walls, and osmotic turgor stretching.",
          ],
          modelAnswer:
            "Phototropin receptors in the shoot apex detect unilateral blue light and trigger lateral relocalization of PIN3 auxin efflux proteins to the shaded-side plasma membrane of cells. PIN3 carriers actively export indole-3-acetic acid (IAA) laterally so auxin accumulates at higher concentration on the shaded flank and moves basipetally into the elongation zone. Inside shaded-side cells, IAA binds intracellular receptors to alter gene transcription and activate plasma-membrane H⁺-ATPase proton pumps. Pumping H⁺ ions into the cell wall lowers apoplastic pH, activating expansin proteins that break hydrogen bonds between cellulose microfibrils and hemicelluloses. With cell walls loosened, osmotic water uptake increases turgor pressure and irreversibly elongates shaded-side cells faster than illuminated cells, curving the shoot toward the light.",
          markScheme: [
            {
              point: "Phototropin receptors in shoot tip detect unilateral blue light",
              keywords: ["phototropin", "blue light", "apex", "shoot tip"],
            },
            {
              point: "PIN3 auxin efflux pumps relocalize laterally to transport IAA to the shaded side",
              keywords: ["pin3", "efflux", "shaded"],
            },
            {
              point: "Elevated auxin regulates gene expression and activates plasma-membrane H⁺-ATPase proton pumps",
              keywords: ["h+-atpase", "proton pump", "gene", "transcription"],
            },
            {
              point: "H⁺ pumping acidifies the cell wall / lowers apoplastic pH",
              keywords: ["acidif", "ph", "apoplast", "cell wall"],
            },
            {
              point: "Low pH activates expansins that loosen cellulose microfibril hydrogen bonds",
              keywords: ["expansin", "hydrogen bond", "cellulose", "loosen"],
            },
            {
              point: "Osmotic water influx / turgor pressure elongates shaded cells faster than lit cells, bending shoot toward light",
              keywords: ["turgor", "elongat", "faster", "curv"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid phototropism mechanism described.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States only SL outline (auxin moves to shaded side causing faster elongation) without HL molecular transport or acid-growth steps.",
              indicators: ["Omits PIN3 pumps, H⁺ pumps, and expansins"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Includes PIN3 lateral auxin efflux AND partial acid-growth mechanism (proton pumps or wall loosening) but misses full sequence.",
              indicators: ["Includes PIN3 and H⁺ pumping but omits expansins or turgor link"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Full HL molecular pathway: phototropin perception → PIN3 lateral efflux → IAA gene/H⁺-ATPase activation → cell-wall acidification → expansin cleavage of H-bonds → turgor-driven differential elongation.",
              indicators: ["All six molecular and mechanical links cleanly sequenced"],
            },
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q03",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "integration-body-systems",
          strategy: "Define ethylene positive feedback, list ripening changes, and link to commercial transport",
          marks: 4,
          question:
            "[HL] Explain how ethylene coordinates ripening in climacteric fruits via positive feedback and why agricultural shippers remove ethylene from refrigerated fruit containers.",
          hints: [
            "Explain what makes ethylene signalling a *positive* feedback loop.",
            "Include enzyme-driven biochemical changes (starch → sugar, cell-wall pectin softening) and why removing gaseous ethylene prevents premature spoilage.",
          ],
          modelAnswer:
            "Ethylene (C₂H₄) is a gaseous plant hormone emitted by ripening climacteric fruits such as bananas and apples. Binding of ethylene stimulates transcription of ripening enzymes—including amylase converting starch to sweet soluble sugars and pectinase softening cell walls—while simultaneously triggering increased synthesis of even more ethylene. Because the hormonal output amplifies its own production and diffuses through air to nearby fruits, this positive feedback loop drives rapid, synchronized ripening. Shippers keep containers cool and scrub ethylene gas to prevent this self-amplifying cascade from triggering early over-ripening and spoilage during long sea voyages.",
          markScheme: [
            {
              point: "Ethylene is a gaseous hormone diffusing between adjacent climacteric fruits",
              keywords: ["gaseous", "diffus", "climacteric"],
            },
            {
              point: "Triggers ripening enzymes (starch → sugars via amylase; wall softening via pectinase; chlorophyll breakdown)",
              keywords: ["starch", "sugar", "pectinase", "soften", "enzyme"],
            },
            {
              point: "Positive feedback: ethylene stimulates further ethylene synthesis, amplifying and synchronizing ripening",
              keywords: ["further ethylene", "more ethylene", "amplif", "synchroniz"],
            },
            {
              point: "Removing/scrubbing ethylene in transit prevents premature cascade activation and extends shelf life",
              keywords: ["spoilage", "premature", "shelf life", "over-ripening"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant explanation of ethylene or positive feedback.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States that ethylene ripens fruit and shippers remove it to keep fruit fresh, without explaining positive feedback or enzymatic changes.",
              indicators: ["Missing self-amplifying feedback definition"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explains gaseous diffusion, enzyme-mediated ripening changes, positive feedback self-amplification, and commercial scrubbing logic.",
              indicators: ["Connects molecular ripening cascade to logistical ethylene scrubbing"],
            },
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "defense-against-disease",
          strategy: "Compute p_c = 1 − 1/R₀, then multiply by total town population",
          question:
            "A coastal town has 50,000 residents. Public-health officials model a pathogen with {{R_0 = 5}}. Calculate the minimum number of immune residents required to reach herd immunity.",
          answer: {
            type: "number",
            value: 40000,
            tolerance: 10,
            display: "40000 individuals",
          },
          traps: [
            {
              spec: { type: "number", value: 80, tolerance: 0.5 },
              feedback: "80% is the threshold percentage — multiply 0.80 by the town population of 50,000 to find the number of residents.",
            },
            {
              spec: { type: "number", value: 10000, tolerance: 10 },
              feedback: "10,000 is the maximum susceptible count (1/5 of 50,000) — subtract from 50,000 to get immune residents.",
            },
          ],
          hints: [
            "First find the critical immune fraction {{p_c = 1 - 1/5 = 0.80}}.",
            "Multiply {{0.80 * 50000}}.",
          ],
          solution: [
            "Herd-immunity threshold fraction: {{p_c = 1 - 1/5 = 0.80}} (80%).",
            "Minimum immune residents: {{0.80 * 50000 = 40000}} individuals.",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "defense-against-disease",
          strategy: "Explain Darwinian AMR selection (random prior mutation + plasmids + selective pressure) AND why viruses lack antibiotic targets",
          marks: 6,
          question:
            "Explain how antibiotic resistance evolves in bacterial populations and why antibiotics cannot treat viral diseases.",
          hints: [
            "Make sure you state that resistance mutations arise *randomly before* antibiotic exposure (or arrive via horizontal plasmid transfer).",
            "Explain how misuse/incomplete courses select for resistant strains, and contrast prokaryotic antibiotic targets with viral structure.",
          ],
          modelAnswer:
            "Within any large bacterial population, random DNA mutations arise spontaneously—or resistance genes spread horizontally on plasmids via bacterial conjugation—producing pre-existing heritable variation in antibiotic susceptibility. When an antibiotic is administered, it acts as a strong selective pressure, killing susceptible bacteria while resistant variants survive, replicate rapidly by binary fission, and pass resistance alleles to offspring, increasing resistance allele frequency across the population. Over-prescription, routine livestock use, and unfinished antibiotic courses accelerate this selection (producing strains such as MRSA). Antibiotics cannot cure viral infections because they specifically inhibit prokaryotic machinery—such as peptidoglycan cell-wall cross-linking (penicillin) or bacterial 70S ribosomes—whereas viruses are acellular, lack cell walls and ribosomes, and hijack host eukaryotic enzymes.",
          markScheme: [
            {
              point: "Random pre-existing mutations (or plasmid gene transfer / conjugation) create heritable variation before drug exposure",
              keywords: ["random", "mutation", "plasmid", "conjugation", "pre-existing"],
            },
            {
              point: "Antibiotic acts as selective pressure killing susceptible bacteria",
              keywords: ["selective pressure", "susceptible", "kills"],
            },
            {
              point: "Resistant bacteria survive, reproduce (binary fission), and increase resistance allele frequency",
              keywords: ["survive", "reproduce", "binary fission", "allele frequency", "offspring"],
            },
            {
              point: "Human misuse (over-prescription, incomplete courses, agricultural use) accelerates AMR spread",
              keywords: ["incomplete", "over-prescription", "livestock", "mrsa", "misuse"],
            },
            {
              point: "Antibiotics target prokaryotic structures (peptidoglycan cell walls, 70S ribosomes)",
              keywords: ["peptidoglycan", "70s", "prokaryotic", "cell wall"],
            },
            {
              point: "Viruses are acellular, lack cell walls/ribosomes, and use host eukaryotic machinery",
              keywords: ["acellular", "lack cell wall", "host", "eukaryotic"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid evolutionary or structural explanation provided.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Describes resistance in Lamarckian terms ('bacteria learn to resist') or states only that antibiotics do not kill viruses without naming prokaryotic targets.",
              indicators: ["Lamarckian phrasing or missing peptidoglycan/70S specificity"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Applies natural selection accurately to bacterial resistance and gives one reason why viruses are unaffected.",
              indicators: ["Correct Darwinian selection; omits plasmids/misuse or prokaryotic target details"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Complete Darwinian account (pre-existing random mutation/plasmids, selection, allele-frequency rise, human stewardship factors) plus clear structural contrast between prokaryotes and acellular viruses.",
              indicators: ["Zero Lamarckian slips; both AMR evolution and viral non-susceptibility thorough"],
            },
          ],
          commonError: "Writing that antibiotics 'cause bacteria to mutate' or that 'bacteria adapt on purpose'—a Lamarckian misconception penalized by IB examiners.",
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "populations-communities-chi",
          strategy: "Compute mean per quadrat from total count, then scale by area ratio",
          question:
            "Ecologists sample a 60 m × 30 m salt marsh using 20 random 0.5 m × 0.5 m quadrats and count a *combined total* of 130 glasswort plants across all 20 quadrats. Estimate the total glasswort population in the salt marsh.",
          answer: {
            type: "number",
            value: 46800,
            tolerance: 20,
            display: "46800 individuals",
          },
          traps: [
            {
              spec: { type: "number", value: 936000, tolerance: 500 },
              feedback: "130 is the total across 20 quadrats — divide by 20 first to get the mean per quadrat (6.5) before scaling!",
            },
            {
              spec: { type: "number", value: 11700, tolerance: 10 },
              feedback: "Each 0.5 m × 0.5 m quadrat is 0.25 m² (not 1 m²), so multiply density per m² properly.",
            },
          ],
          hints: [
            "First find the mean count per quadrat: {{130 / 20 = 6.5}} plants.",
            "Salt marsh area = {{60 * 30 = 1800}} m²; quadrat area = {{0.25}} m² → scale factor = {{1800 / 0.25 = 7200}}.",
          ],
          solution: [
            "Mean per quadrat = {{130 / 20 = 6.5}} plants.",
            "Habitat area = {{60 * 30 = 1800}} m²; quadrat area = {{0.5 * 0.5 = 0.25}} m².",
            "Total population = {{6.5 * (1800 / 0.25) = 6.5 * 7200 = 46800}} individuals.",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "populations-communities-chi",
          strategy: "Calculate unequal marginal totals, all 4 expected values E, and sum (O − E)² / E",
          question:
            "In 100 random rocky-shore quadrats, observed counts for barnacles (A) and mussels (B) are: Both present = 30, Barnacles only = 30, Mussels only = 10, Neither = 30. Calculate the chi-squared statistic ({{χ^2}}) to 2 decimal places.",
          answer: {
            type: "number",
            value: 6.25,
            tolerance: 0.05,
            display: "6.25",
          },
          hints: [
            "Find row totals (Barnacles present = 60, absent = 40) and column totals (Mussels present = 40, absent = 60); grand total = 100.",
            "Expected frequencies: Both = 24, Barnacles only = 36, Mussels only = 16, Neither = 24; notice {{|O - E| = 6}} in every cell.",
            "Sum {{36/24 + 36/36 + 36/16 + 36/24}}.",
          ],
          solution: [
            "Totals: A present = 60, A absent = 40; B present = 40, B absent = 60; grand total = 100.",
            "Expected counts: Both = {{(60 * 40)/100 = 24}}; A only = {{(60 * 60)/100 = 36}}; B only = {{(40 * 40)/100 = 16}}; Neither = {{(40 * 60)/100 = 24}}.",
            "{{χ^2 = (30 - 24)^2/24 + (30 - 36)^2/36 + (10 - 16)^2/16 + (30 - 24)^2/24 = 1.50 + 1.00 + 2.25 + 1.50 = 6.25}}.",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "populations-communities-chi",
          strategy: "State 4 core Lincoln assumptions AND trace mathematical bias via denominator m",
          marks: 4,
          question:
            "Evaluate four assumptions required for a valid Lincoln capture–mark–recapture estimate and predict the direction of error if two of these assumptions are violated.",
          hints: [
            "Recall the four assumptions: closed population, permanent/harmless marks, random remixing, and equal catchability.",
            "Link each violation explicitly to whether recaptured marks m increase (underestimate) or decrease (overestimate).",
          ],
          modelAnswer:
            "A valid Lincoln estimate requires: (1) a closed population with negligible births, deaths, immigration, or emigration between captures; (2) marks that are non-toxic, permanent, and do not increase predation visibility; (3) sufficient time for complete random remixing; and (4) equal catchability of marked and unmarked individuals. If bright tags increase predation or wash off, fewer marked animals are recaptured (smaller denominator m in {{N = (M * n)/m}}), causing an overestimate of true population size. Conversely, if baited traps make marked individuals trap-happy so they re-enter preferentially, m becomes artificially inflated, causing an underestimate.",
          markScheme: [
            {
              point: "Lists closed population (no migration/births/deaths) AND permanent, non-harmful/inconspicuous marks",
              keywords: ["closed", "immigration", "permanent", "predation"],
            },
            {
              point: "Lists complete random mixing AND equal catchability (no trap-shy/trap-happy bias)",
              keywords: ["random mix", "equal catchability", "trap-happy", "trap-shy"],
            },
            {
              point: "Correctly predicts an overestimate when m decreases (e.g., mark loss, immigration, higher marked mortality)",
              keywords: ["overestimate", "fewer marked", "smaller", "denominator"],
            },
            {
              point: "Correctly predicts an underestimate when m increases (e.g., trap-happy behaviour or incomplete mixing near trap site)",
              keywords: ["underestimate", "inflated", "trap-happy", "re-enter"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid Lincoln assumptions or bias directions stated.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Lists 2–3 assumptions but omits or reverses the mathematical direction of estimation bias.",
              indicators: ["Confuses overestimate with underestimate when m drops"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately evaluates all four core assumptions and rigorously derives both overestimate and underestimate mechanisms via denominator m.",
              indicators: ["Explicit inverse link between m and N for two contrasting violations"],
            },
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "populations-communities-chi",
          strategy: "Explain lagged negative feedback in predator–prey cycles AND contrast top-down vs bottom-up control with examples",
          marks: 5,
          question:
            "Analyse how predator–prey oscillations, top-down control, and bottom-up control shape community structure, illustrating your answer with named ecological examples.",
          hints: [
            "Explain *why* predator peaks lag behind prey peaks (using e.g., snowshoe hare and Canadian lynx).",
            "Define top-down control (e.g., sea otters–urchins–kelp) vs bottom-up control (e.g., nutrient upwelling–phytoplankton–fish).",
          ],
          modelAnswer:
            "In coupled predator–prey systems such as snowshoe hares and Canadian lynx, abundant prey increase predator survival and reproduction after a reproductive delay, causing predator peaks to lag behind prey peaks; heavy predation then depresses prey numbers, triggering a subsequent predator crash through negative feedback. Community biomass can be regulated via top-down control, where higher-trophic predators suppress herbivores and indirectly protect producers—for instance, sea otters preying on sea urchins prevent overgrazing and maintain kelp forest biodiversity. Alternatively, bottom-up control occurs when abiotic resources such as mineral nitrates, upwelling phosphates, or sunlight limit primary productivity (such as coastal phytoplankton), cascading upward to cap herbivore and fish populations. Natural ecosystems typically experience simultaneous interaction between both controls.",
          markScheme: [
            {
              point: "Predator peaks lag behind prey peaks due to delayed reproductive response and negative feedback",
              keywords: ["lag", "negative feedback", "reproduct"],
            },
            {
              point: "Named predator–prey cycle example (e.g., snowshoe hare and Canadian lynx)",
              keywords: ["hare", "lynx", "wolf", "moose"],
            },
            {
              point: "Defines top-down control: predators/consumers limit lower trophic levels (trophic cascade)",
              keywords: ["top-down", "predators", "trophic cascade", "suppress"],
            },
            {
              point: "Named top-down example (e.g., sea otters controlling sea urchins to protect kelp forests)",
              keywords: ["sea otter", "urchin", "kelp", "yellowstone"],
            },
            {
              point: "Defines bottom-up control with example: abiotic nutrients/light limit primary producers and cascade upward (e.g., nitrate/upwelling → phytoplankton → fish)",
              keywords: ["bottom-up", "nutrient", "nitrate", "phytoplankton", "upwelling"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid analysis of community controls.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Defines predator–prey feeding or one control type briefly without phase lag or named examples.",
              indicators: ["Missing lag explanation or lacks examples"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explains lagged predator–prey cycles and distinguishes top-down vs bottom-up control, with at least one named example.",
              indicators: ["Accurate mechanisms; missing one named ecological example"],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Thorough analysis linking negative-feedback predator lag, top-down trophic cascades, and bottom-up resource limitation with precise named IB examples.",
              indicators: ["All three concepts richly supported by specific organisms"],
            },
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "transfers-energy-matter",
          strategy: "Rearrange NPP = GPP − R to solve for R = GPP − NPP",
          question:
            "A tropical rainforest canopy has a gross primary productivity (GPP) of 42,500 kJ m⁻² yr⁻¹ and a net primary productivity (NPP) of 16,150 kJ m⁻² yr⁻¹. Calculate the energy lost via autotrophic respiration (R) in kJ m⁻² yr⁻¹.",
          answer: {
            type: "number",
            value: 26350,
            tolerance: 10,
            display: "26350 kJ m⁻² yr⁻¹",
          },
          hints: [
            "Rearrange {{NPP = GPP - R}} to get {{R = GPP - NPP}}.",
            "Compute {{42500 - 16150}}.",
          ],
          solution: [
            "{{R = GPP - NPP = 42500 - 16150 = 26350}} kJ m⁻² yr⁻¹.",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "transfers-energy-matter",
          strategy: "Subtract both egested waste and respiration from ingested energy",
          question:
            "A grassland herbivore population ingests 2,400 kJ m⁻² yr⁻¹ of plant matter, egests 900 kJ m⁻² yr⁻¹ in faeces, and loses 1,140 kJ m⁻² yr⁻¹ as respiratory heat. Calculate its net secondary productivity (new biomass) in kJ m⁻² yr⁻¹.",
          answer: {
            type: "number",
            value: 360,
            tolerance: 1,
            display: "360 kJ m⁻² yr⁻¹",
          },
          traps: [
            {
              spec: { type: "number", value: 1500, tolerance: 5 },
              feedback: "1,500 is assimilated energy — you still need to subtract respiratory heat loss (1,140) to find net secondary productivity.",
            },
          ],
          hints: [
            "First find assimilated energy: {{2400 - 900 = 1500}} kJ m⁻² yr⁻¹.",
            "Subtract respiration (1,140) from assimilated energy.",
          ],
          solution: [
            "Assimilated energy = {{2400 - 900 = 1500}} kJ m⁻² yr⁻¹.",
            "Net secondary productivity = {{1500 - 1140 = 360}} kJ m⁻² yr⁻¹.",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "transfers-energy-matter",
          strategy: "Multiply sequentially across three trophic transfer efficiencies",
          question:
            "In a marine coastal web, kelp NPP is 40,000 kJ m⁻² yr⁻¹. Trophic transfer efficiency is 15% to primary consumers, 10% to secondary consumers, and 5% to tertiary consumers. Calculate the energy available at the tertiary consumer level in kJ m⁻² yr⁻¹.",
          answer: {
            type: "number",
            value: 30,
            tolerance: 0.1,
            display: "30 kJ m⁻² yr⁻¹",
          },
          traps: [
            {
              spec: { type: "number", value: 40, tolerance: 0.5 },
              feedback: "40 comes from assuming 10% at every step — apply the exact given efficiencies 15%, 10%, and 5%.",
            },
          ],
          hints: [
            "Primary consumers: {{40000 * 0.15 = 6000}} kJ m⁻² yr⁻¹.",
            "Secondary consumers: {{6000 * 0.10 = 600}}; tertiary consumers: {{600 * 0.05}}.",
          ],
          solution: [
            "Primary consumers: {{40000 * 0.15 = 6000}} kJ m⁻² yr⁻¹.",
            "Secondary consumers: {{6000 * 0.10 = 600}} kJ m⁻² yr⁻¹.",
            "Tertiary consumers: {{600 * 0.05 = 30}} kJ m⁻² yr⁻¹.",
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "transfers-energy-matter",
          strategy: "Cover all four specified carbon-cycle processes with chemical and ecological precision",
          marks: 6,
          question:
            "Explain the roles of peat formation, limestone deposition, fossil-fuel combustion, and ocean acidification in the global carbon cycle.",
          hints: [
            "Address each of the four processes explicitly—two geological sinks and two anthropogenic disruptions.",
            "Include anaerobic acidic inhibition of saprotrophs (peat), marine CaCO₃ shells (limestone), rapid lithospheric oxidation (combustion), and H⁺ depleting CO₃²⁻ (ocean acidification).",
          ],
          modelAnswer:
            "Peat forms in waterlogged, anaerobic, acidic soils where saprotrophic decomposers are inhibited, preventing complete decay of dead plant material and locking organic carbon into a long-term terrestrial sink (which can eventually compress into coal). Limestone deposition occurs when marine organisms such as corals, molluscs, and foraminifera precipitate calcium carbonate (CaCO₃) shells that sink upon death and lithify into vast sedimentary rock reservoirs. Fossil-fuel combustion rapidly oxidizes millions of years of buried coal, oil, and natural gas back into atmospheric CO₂, shifting lithospheric sinks into major anthropogenic carbon sources. Excess atmospheric CO₂ dissolves in seawater to form carbonic acid, releasing H⁺ ions that lower ocean pH and react with carbonate ions (CO₃²⁻), impairing marine calcification and weakening oceanic buffering capacity.",
          markScheme: [
            {
              point: "Peat forms under waterlogged, anaerobic, acidic conditions inhibiting saprotrophic decomposition",
              keywords: ["waterlogged", "anaerobic", "acidic", "saprotroph"],
            },
            {
              point: "Partially undecayed organic matter accumulates as a long-term carbon sink (precursor to coal)",
              keywords: ["organic carbon", "sink", "coal", "undecayed"],
            },
            {
              point: "Marine calcifiers (corals/molluscs) form CaCO₃ shells/skeletons that lithify into limestone rock sinks",
              keywords: ["caco3", "calcium carbonate", "shell", "corals", "molluscs"],
            },
            {
              point: "Combustion rapidly oxidizes buried fossil carbon into atmospheric CO₂ (major carbon source)",
              keywords: ["oxidiz", "atmospheric co2", "source", "buried"],
            },
            {
              point: "Dissolved CO₂ forms carbonic acid releasing H⁺ ions that lower seawater pH",
              keywords: ["carbonic acid", "h+", "lower", "seawater ph"],
            },
            {
              point: "Excess H⁺ depletes carbonate ions (CO₃²⁻), reducing calcification in corals and shelled molluscs",
              keywords: ["co3", "carbonate ion", "calcification", "deplet"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid carbon-cycle processes explained.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Mentions 1–2 processes briefly (e.g., burning fossil fuels adds CO₂) without biochemical or ecological mechanisms.",
              indicators: ["Superficial descriptions lacking chemistry or saprotroph role"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explains 3 of the 4 processes accurately or all 4 with partial chemical detail.",
              indicators: ["Accurate sinks and sources; omits either saprotroph inhibition or carbonate depletion"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Thoroughly explains anaerobic/acidic peat sequestration, biogenic CaCO₃ limestone formation, rapid fossil combustion, and H⁺/CO₃²⁻ ocean acidification.",
              indicators: ["All four processes clearly linked as pools, sinks, sources, and fluxes"],
            },
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "integration-body-systems",
          strategy: "Structure around signal type, transport route, speed/duration, target specificity, plus shared coordination role",
          marks: 4,
          question:
            "Compare and contrast nervous coordination and endocrine (hormonal) coordination in mammals, citing named physiological examples.",
          hints: [
            "Include a similarity (both use chemical messengers binding complementary receptors to maintain homeostasis) AND sharp contrasts.",
            "Contrast electrical/synaptic speed & localization (e.g., spinal reflex) against bloodstream transport, slower onset, and prolonged widespread action (e.g., epinephrine or melatonin).",
          ],
          modelAnswer:
            "Both systems coordinate responses to stimuli via chemical messengers (neurotransmitters or hormones) binding complementary target-cell receptors to maintain homeostasis, and they interact directly via the hypothalamus–pituitary axis. However, nervous coordination transmits rapid electrical action potentials along dedicated axons across narrow synapses, acting within milliseconds on localized effectors for short durations (such as a spinal pain-withdrawal reflex). Conversely, endocrine coordination secretes chemical hormones from glands into blood plasma for slower transport across the entire body, producing longer-lasting widespread effects on distant target cells with matching receptors (such as pineal melatonin regulating sleep cycles or adrenal epinephrine sustaining fight-or-flight metabolism).",
          markScheme: [
            {
              point: "Similarity: both rely on receptor-specific chemical signalling (neurotransmitters/hormones) to maintain homeostasis / interact at hypothalamus",
              keywords: ["receptor", "homeostasis", "hypothalamus", "neurotransmitter"],
            },
            {
              point: "Signal & transport: nervous uses electrical impulses along axons; endocrine uses chemical hormones in blood plasma",
              keywords: ["action potential", "axon", "blood", "plasma"],
            },
            {
              point: "Speed & duration: nervous is millisecond-fast and short-lived; endocrine is slower and longer-lasting",
              keywords: ["millisecond", "fast", "short-lived", "longer-lasting", "slower"],
            },
            {
              point: "Specificity & examples: nervous is localized (spinal reflex arc); endocrine is widespread (melatonin or epinephrine)",
              keywords: ["localized", "widespread", "reflex", "melatonin", "epinephrine"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid comparison or contrast between nervous and endocrine systems.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States basic speed difference (nerves fast, hormones slow) without similarities, transport routes, or named examples.",
              indicators: ["Contrasts only without receptor similarity or physiological examples"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Balanced comparison and contrast covering signal modality, bloodstream vs axon transport, speed/duration, localization, and named examples.",
              indicators: ["Includes explicit similarity plus three crisp contrast axes and examples"],
            },
          ],
        },
        {
          id: "c3-c4-interaction-organisms-ecosystems-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "defense-against-disease",
          strategy: "Integrate active vaccination memory, herd-immunity R₀ maths, eradication successes, and viral immune-evasion limits (HIV, influenza)",
          marks: 8,
          question:
            "[HL] Discuss how vaccination programmes utilize immunological memory and herd immunity to control infectious diseases, evaluating biological factors that make pathogens such as HIV and influenza harder to eradicate than smallpox.",
          hints: [
            "Part 1: Explain vaccine antigens → primary clonal selection → memory B/T cells → fast, high-titre secondary response.",
            "Part 2: Explain herd immunity ({{p_c = 1 - 1/R_0}}), shielding vulnerable people, and why smallpox succeeded (stable DNA genome, human-only reservoir, clear symptoms).",
            "Part 3: Evaluate biological barriers for influenza (high RNA mutation rate / antigenic drift & shift, animal reservoirs) and HIV (retroviral reverse transcriptase error rate, integration into host DNA, targeting CD4⁺ T-helper cells).",
          ],
          modelAnswer:
            "Vaccines introduce harmless antigens—such as attenuated pathogens, purified protein subunits, or mRNA encoding viral surface proteins—to stimulate an active primary adaptive immune response without causing severe illness. Macrophage antigen presentation, helper T-cell cytokines, and B-cell clonal expansion generate long-lived memory B- and T-lymphocytes. Upon subsequent natural exposure, these memory cells mount a secondary response with a drastically shorter lag phase, far higher peak antibody titre, and prolonged persistence, neutralizing the pathogen before clinical disease or transmission occurs. At the population scale, vaccinating above the critical herd-immunity threshold ({{p_c = 1 - 1/R_0}}) drops average secondary transmission below one, breaking epidemic chains and indirectly protecting unvaccinated infants and immunocompromised patients. Smallpox was globally eradicated because it had a stable double-stranded DNA genome with invariant surface antigens, exclusively infected humans (no zoonotic animal reservoir), and produced unmistakable diagnostic lesions enabling ring vaccination. By contrast, influenza is an RNA virus with an error-prone polymerase and segmented genome undergoing continual antigenic drift and shift—plus huge avian and swine zoonotic reservoirs—requiring annual vaccine reformulation. HIV poses even steeper challenges because reverse transcriptase generates extraordinary antigenic hypervariability within a single host, proviral DNA integrates latently into host chromosomes escaping antibody surveillance, and the virus directly destroys the very CD4⁺ helper T-cells needed to coordinate adaptive immunity.",
          markScheme: [
            {
              point: "Vaccines deliver harmless antigens (attenuated, subunit, mRNA) triggering active primary immunity safely",
              keywords: ["attenuated", "subunit", "mrna", "primary"],
            },
            {
              point: "Produces long-lived memory B- and T-cells via clonal selection",
              keywords: ["memory", "clonal"],
            },
            {
              point: "Secondary response is faster (shorter lag), higher peak antibody concentration, and longer-lasting",
              keywords: ["shorter lag", "higher peak", "secondary", "prolonged"],
            },
            {
              point: "Herd immunity threshold p_c = 1 − 1/R₀ breaks transmission chains and shields vulnerable/immunocompromised individuals",
              keywords: ["1 - 1/r", "transmission chain", "immunocompromised", "threshold"],
            },
            {
              point: "Smallpox eradication factors: stable DNA genome / invariant antigens AND human-only host (no zoonotic animal reservoir)",
              keywords: ["stable", "dna genome", "reservoir", "ring vaccination"],
            },
            {
              point: "Influenza challenge: high RNA mutation rate (antigenic drift/shift) requiring frequent reformulation and animal reservoirs",
              keywords: ["antigenic drift", "segmented", "avian", "swine", "reformulat"],
            },
            {
              point: "HIV challenge 1: reverse transcriptase high mutation rate / extreme antigenic variability",
              keywords: ["reverse transcriptase", "hypervariab", "variability", "mutation rate"],
            },
            {
              point: "HIV challenge 2: proviral latency in host DNA and direct destruction of CD4⁺ helper T-cells",
              keywords: ["proviral", "latent", "cd4", "helper t"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid immunological or epidemiological discussion.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic recall that vaccines cause memory cells and viruses mutate, with little mechanistic or comparative depth.",
              indicators: ["Mentions memory cells or mutation superficially"],
            },
            {
              band: "3–5",
              marks: [3, 5],
              descriptor: "Accurately explains primary/secondary vaccine memory and herd immunity, plus partial biological comparison with smallpox, influenza, or HIV.",
              indicators: ["Solid vaccination mechanism; missing either quantitative R₀ logic or viral reservoir/latency distinctions"],
            },
            {
              band: "6–8",
              marks: [6, 8],
              descriptor: "Comprehensive, synoptic HL discussion integrating vaccine immunology, herd-immunity R₀ dynamics, smallpox eradication advantages, and distinct molecular/ecological barriers in influenza and HIV.",
              indicators: ["Evaluates antigenic stability, zoonotic reservoirs, proviral latency, and CD4⁺ targeting cohesively"],
            },
          ],
        },
      ],
    },
  ],

  challenge: [
    {
      id: "c3-c4-interaction-organisms-ecosystems-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "populations-communities-chi",
      strategy: "Compute unbiased expected m first, apply 20% mark loss, then re-evaluate Lincoln N",
      question:
        "[HL] A lake actually holds exactly 400 perch. Ecologists capture, tag, and release 100 perch, then later sample 80 perch. Without tag loss, they would expect 20 tagged recaptures, but 20% of tags fall off before the second capture (leaving only 16 tagged recaptures). Calculate the biased Lincoln index population estimate produced by this tag loss.",
      answer: {
        type: "number",
        value: 500,
        tolerance: 1,
        display: "500 individuals",
      },
      traps: [
        {
          spec: { type: "number", value: 320, tolerance: 1 },
          feedback: "Tag loss shrinks the denominator m, which *increases* (overestimates) N rather than shrinking it to 320.",
        },
        {
          spec: { type: "number", value: 480, tolerance: 1 },
          feedback: "20% tag loss causes a 25% overestimate (1 / 0.80 = 1.25 × 400 = 500), not a 20% increase!",
        },
      ],
      hints: [
        "The ecologists do not know tags fell off, so they still plug {{M = 100}}, {{n = 80}}, and observed {{m = 16}} into {{N = (M * n) / m}}.",
        "Evaluate {{(100 * 80) / 16}}.",
      ],
      solution: [
        "Observed recaptures with 20% tag loss: {{20 * 0.80 = 16}} tagged fish.",
        "Biased Lincoln calculation: {{N = (100 * 80) / 16 = 8000 / 16 = 500}} individuals.",
        "Notice a 20% tag loss produces a **25% overestimate** above the true 400 fish because {{1 / 0.80 = 1.25}}.",
      ],
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "defense-against-disease",
      strategy: "Divide critical immune threshold p_c = 1 − 1/R₀ by vaccine efficacy",
      question:
        "[HL] A viral disease has {{R_0 = 4}}. A newly licensed vaccine has 80% efficacy (meaning 80% of vaccinated individuals actually develop protective immunity). Calculate the minimum percentage of the total population that must be vaccinated to achieve herd immunity (give your answer to 2 decimal places).",
      answer: {
        type: "number",
        value: 93.75,
        tolerance: 0.05,
        display: "93.75%",
      },
      traps: [
        {
          spec: { type: "number", value: 75, tolerance: 0.1 },
          feedback: "75% is the required *immune* fraction assuming 100% vaccine efficacy — divide by 0.80 to adjust for 80% efficacy.",
        },
        {
          spec: { type: "number", value: 60, tolerance: 0.1 },
          feedback: "Imperfect efficacy means you must vaccinate *more* people, not fewer — divide 75% by 0.80 instead of multiplying.",
        },
      ],
      hints: [
        "First find the required immune fraction: {{p_c = 1 - 1/4 = 0.75}} (75%).",
        "If fraction {{v}} of the population is vaccinated and 80% of them gain immunity, solve {{0.80 * v = 75}}.",
      ],
      solution: [
        "Required immune threshold: {{p_c = 1 - 1/4 = 0.75}} (75%).",
        "Adjust for 80% vaccine efficacy: {{v = 75 / 0.80 = 93.75}}%.",
        "Check: {{93.75 * 0.80 = 75}}% of the population becomes immune.",
      ],
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "populations-communities-chi",
      strategy: "Compute asymmetric expected counts E across 200 quadrats and sum (O − E)² / E",
      question:
        "[HL] In 200 random dune quadrats, observed counts for marram grass (A) and sea holly (B) are: Both present = 54, Marram only = 26, Sea holly only = 66, Neither = 54. Calculate the chi-squared statistic ({{χ^2}}) to 3 decimal places.",
      answer: {
        type: "number",
        value: 3.125,
        tolerance: 0.01,
        display: "3.125",
      },
      hints: [
        "Find totals: A present = 80, A absent = 120; B present = 120, B absent = 80; grand total = 200.",
        "Calculate expected counts: Both = 48, A only = 32, B only = 72, Neither = 48. Notice {{|O - E| = 6}} in every cell.",
        "Compute {{36/48 + 36/32 + 36/72 + 36/48}}.",
      ],
      solution: [
        "Marginal totals: A present = 80, A absent = 120; B present = 120, B absent = 80; total = 200.",
        "Expected counts: Both = {{(80 * 120)/200 = 48}}; A only = {{(80 * 80)/200 = 32}}; B only = {{(120 * 120)/200 = 72}}; Neither = {{(120 * 80)/200 = 48}}.",
        "{{χ^2 = 36/48 + 36/32 + 36/72 + 36/48 = 0.75 + 1.125 + 0.50 + 0.75 = 3.125}} (less than 3.841 → fail to reject H₀; no statistically significant association at p = 0.05).",
      ],
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "transfers-energy-matter",
      strategy: "Work backwards down three trophic levels and convert NPP back to GPP",
      question:
        "[HL] A tertiary apex-predator population requires 18 kJ m⁻² yr⁻¹ of biomass energy. Trophic transfer efficiencies are 15% (producers NPP → primary consumers), 10% (primary → secondary), and 6% (secondary → tertiary). Producers lose 60% of their GPP to cellular respiration. Calculate the minimum producer GPP required in kJ m⁻² yr⁻¹.",
      answer: {
        type: "number",
        value: 50000,
        tolerance: 50,
        display: "50000 kJ m⁻² yr⁻¹",
      },
      traps: [
        {
          spec: { type: "number", value: 20000, tolerance: 20 },
          feedback: "20,000 kJ m⁻² yr⁻¹ is the required *NPP* — remember NPP is only 40% of GPP because 60% is lost to plant respiration!",
        },
        {
          spec: { type: "number", value: 33333, tolerance: 50 },
          feedback: "If 60% of GPP is respired, NPP = 40% of GPP — divide 20,000 by 0.40, not 0.60.",
        },
      ],
      hints: [
        "Step backwards one trophic level at a time: Secondary = {{18 / 0.06 = 300}}, Primary = {{300 / 0.10 = 3000}}, Producer NPP = {{3000 / 0.15 = 20000}}.",
        "If 60% of GPP is respired, then NPP represents 40% of GPP ({{0.40 * GPP = 20000}}).",
      ],
      solution: [
        "Secondary consumer energy required = {{18 / 0.06 = 300}} kJ m⁻² yr⁻¹.",
        "Primary consumer energy required = {{300 / 0.10 = 3000}} kJ m⁻² yr⁻¹.",
        "Producer NPP required = {{3000 / 0.15 = 20000}} kJ m⁻² yr⁻¹.",
        "Since 60% of GPP is lost to respiration, {{NPP = 0.40 * GPP}} → {{GPP = 20000 / 0.40 = 50000}} kJ m⁻² yr⁻¹.",
      ],
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "integration-body-systems",
      strategy: "Deduce tip perception, permeable agar diffusion, and shaded-side PIN3/IAA blockage systematically",
      marks: 6,
      question:
        "[HL] Four oat coleoptiles receive unilateral blue light from the left under distinct treatments: (1) intact control, (2) opaque foil cap over tip, (3) permeable agar block inserted below tip, (4) impermeable mica blade inserted halfway into the *shaded right* side below tip. Analyse the predicted growth outcome of all four treatments using PIN3 auxin transport and acid-growth mechanics.",
      hints: [
        "Predict growth direction (curves left / grows straight) for each of the four treatments.",
        "Tie your analysis to phototropin light perception in the tip, chemical diffusion through agar, lateral PIN3 auxin efflux, and H⁺-ATPase/expansin elongation on the shaded flank.",
      ],
      modelAnswer:
        "In Treatment 1 (intact control), apical phototropins detect blue light from the left and trigger PIN3 efflux carriers to pump IAA laterally to the shaded right flank; downward IAA transport activates H⁺-ATPase proton pumps, lowering cell-wall pH so expansins loosen cellulose microfibrils and turgor elongates right-side cells faster, curving the shoot left toward the light. In Treatment 2 (opaque tip cap), light perception at the apex is blocked so PIN3 remains symmetrically distributed, IAA descends evenly down both sides, and the shoot grows straight upward. In Treatment 3 (permeable agar block), water-soluble IAA diffuses freely across the agar down the shaded right side, proving the signal is a diffusible chemical and preserving normal leftward curvature. In Treatment 4 (impermeable mica on the shaded right flank), downward IAA flow into the right elongation zone is physically blocked, preventing shaded-side acid growth and stopping leftward phototropic bending.",
      markScheme: [
        {
          point: "Treatment 1 (control): curves left toward light via PIN3 lateral IAA accumulation on shaded right side",
          keywords: ["pin3", "shaded right", "curves left", "bends left"],
        },
        {
          point: "Links shaded-side IAA to H⁺-ATPase proton pumps, cell-wall acidification, expansins, and turgor elongation",
          keywords: ["h+-atpase", "proton pump", "expansin", "turgor"],
        },
        {
          point: "Treatment 2 (opaque cap): grows straight upright because tip phototropins cannot detect unilateral light",
          keywords: ["straight", "phototropin", "symmetric", "opaque"],
        },
        {
          point: "Treatment 3 (agar block): still curves left toward light because water-soluble IAA diffuses across permeable agar",
          keywords: ["diffus", "water-soluble", "chemical", "agar"],
        },
        {
          point: "Treatment 4 (shaded-side mica): fails to curve toward light because impermeable mica blocks downward IAA transport on shaded side",
          keywords: ["impermeable", "blocks downward", "prevents", "fails to curve", "stopping"],
        },
        {
          point: "Synthesizes conclusion: light sensing occurs in apex while differential acid-growth elongation occurs in sub-apical zone via mobile IAA",
          keywords: ["sub-apical", "elongation zone", "apex", "mobile"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid predictions or phototropic explanations given.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Predicts bending outcomes for 2–3 treatments correctly without HL PIN3 or acid-growth mechanisms.",
          indicators: ["Basic predictions only; lacks molecular wall-loosening pathway"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly analyses all four treatments using IAA redistribution and diffusion, with partial HL molecular detail.",
          indicators: ["All four treatments accurate; misses either PIN3 or expansins"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Rigorous HL analysis predicting all four treatments accurately and integrating phototropin perception, PIN3 efflux, H⁺-ATPase wall acidification, expansins, and separation of sensing vs growth zones.",
          indicators: ["Complete experimental logic plus full HL molecular pathway"],
        },
      ],
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "defense-against-disease",
      strategy: "Contrast Darwinian bacterial AMR selection against epidemiological herd-immunity breakdown in measles",
      marks: 6,
      question:
        "[HL] Two modern public-health crises threaten hospital wards: rising methicillin-resistant *Staphylococcus aureus* (MRSA) driven by broad-spectrum antibiotic overuse, and recurring measles outbreaks where MMR vaccination drops from 95% to 85%. Evaluate the distinct evolutionary and epidemiological mechanisms behind these two threats and justify targeted interventions for each.",
      hints: [
        "For MRSA: random pre-existing mutation / plasmid conjugation + intense antibiotic selection + stewardship/hygiene interventions.",
        "For measles: very high {{R_0}} (12–18) requiring ~94% immunity ({{p_c = 1 - 1/R_0}}); dropping to 85% breaches herd immunity even though the virus did *not* mutate away from vaccine memory.",
      ],
      modelAnswer:
        "MRSA represents rapid microevolution driven by strong directional natural selection: random mutations or horizontally transferred resistance plasmids arise prior to drug exposure, and routine broad-spectrum antibiotic overuse eliminates susceptible commensals and competitors, allowing resistant clones to proliferate and spread across patients. Effective countermeasures target selective pressure and transmission—strict antibiotic stewardship (narrow-spectrum prescriptions, completing courses, eliminating unnecessary viral prescriptions), rigorous hand hygiene, and patient isolation. By contrast, measles resurgence at 85% coverage is not caused by vaccine-escape evolution (measles surface antigens remain highly stable) but by epidemiological threshold mathematics: with {{R_0 ≈ 15}}, the critical herd-immunity threshold {{p_c = 1 - 1/15 ≈ 93.3%}}. Dropping uptake from 95% to 85% more than triples the susceptible pool, pushing effective transmission above 1 and allowing explosive school/ward clusters that endanger unvaccinated infants and immunocompromised patients. Countermeasures therefore require restoring >95% two-dose MMR vaccine coverage and countering vaccine hesitancy rather than redesigning the vaccine.",
      markScheme: [
        {
          point: "MRSA driven by Darwinian selection of pre-existing random mutations / resistance plasmids under antibiotic overuse",
          keywords: ["natural selection", "plasmid", "pre-existing", "directional"],
        },
        {
          point: "Broad-spectrum overuse eliminates susceptible competitors, increasing resistant bacterial frequency",
          keywords: ["susceptible", "competitor", "proliferate", "frequency"],
        },
        {
          point: "MRSA interventions justified: antibiotic stewardship (narrow-spectrum, full courses, zero viral use) and hospital hygiene/isolation",
          keywords: ["stewardship", "hygiene", "isolation", "narrow-spectrum"],
        },
        {
          point: "Measles resurgence is epidemiological rather than antigenic escape (measles antigens remain stable)",
          keywords: ["stable", "antigenic", "epidemiological", "threshold"],
        },
        {
          point: "Quantifies measles herd-immunity breach: high R₀ (~12–18) needs ~93–95% immunity (p_c = 1 − 1/R₀), so 85% allows R_eff > 1 outbreaks",
          keywords: ["93", "94", "1 - 1/r", "susceptible pool", "r_0"],
        },
        {
          point: "Measles interventions justified: restoring ≥95% two-dose MMR coverage to rebuild herd immunity and protect vulnerable groups",
          keywords: ["95%", "two-dose", "hesitancy", "immunocompromised", "infants"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid evaluation of MRSA or measles mechanisms.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Describes antibiotic misuse or low vaccination generally without contrasting natural selection vs R₀ herd-immunity maths.",
          indicators: ["Lacks evolutionary precision or quantitative threshold logic"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately explains both mechanisms and proposes realistic interventions, though quantitative herd-immunity contrast or antigenic stability is incomplete.",
          indicators: ["Good dual coverage; missing quantitative p_c evaluation"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Sharp HL evaluation contrasting bacterial evolutionary selection (MRSA) against epidemiological R₀ threshold breach (measles) with rigorously justified, distinct public-health interventions.",
          indicators: ["Explicitly separates evolution from herd-immunity breach with mathematical grounding"],
        },
      ],
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Design",
      guideRef: "populations-communities-chi",
      strategy: "Specify grid randomization, large sample size, standardized presence rule, exact χ² workflow, and statistical limitation",
      marks: 6,
      question:
        "Design a rigorous field investigation using random quadrat sampling and a 2 × 2 chi-squared test to determine whether two named sessile rocky-shore or woodland plant species exhibit a significant spatial association, including bias controls and limits of interpretation.",
      hints: [
        "Include: gridded coordinate axes + random number generator, consistent quadrat size & boundary rule, large sample size (≥50–100 quadrats so expected values E ≥ 5).",
        "Outline hypotheses (H₀/H₁), expected formula E, χ² statistic, df = 1 critical value 3.841, positive vs negative check, and why χ² cannot prove causal mutualism or competition alone.",
      ],
      modelAnswer:
        "Select two sessile intertidal species such as acorn barnacles (*Semibalanus*) and bladderwrack seaweed (*Fucus*) across a defined 20 m × 20 m rocky-shore zone. Lay two perpendicular 20 m tape measures as x- and y-axes and use a random number generator to select at least 80 random coordinate pairs, eliminating human placement bias. At each coordinate, place a standardized 0.5 m × 0.5 m quadrat and apply a consistent boundary rule (count organisms touching only the top and left edges) to record presence or absence of each species into a 2 × 2 contingency table (Both, A only, B only, Neither). State H₀ (species are distributed independently) and H₁ (significant association). Compute each cell's expected frequency {{E = (" + '"row total"' + " * " + '"col total"' + ") / " + '"grand total"' + "}} (verifying all E ≥ 5), calculate {{χ^2 = Σ((O - E)^2 / E)}}, and compare against the critical value 3.841 for {{df = (2 - 1)(2 - 1) = 1}} at p = 0.05. If χ² > 3.841, reject H₀ and compare observed vs expected 'Both present' to diagnose positive (O > E) or negative (O < E) association—noting that χ² reveals statistical co-occurrence only, not direct biological causation such as mutualism versus shared microhabitat abiotic preferences.",
      markScheme: [
        {
          point: "Names two sessile species and defines gridded study area with perpendicular tape measures",
          keywords: ["tape", "grid", "barnacle", "seaweed", "heather", "moss", "sessile"],
        },
        {
          point: "Eliminates sampling bias using random number generator coordinates, fixed quadrat size, consistent edge rule, and large sample size (ensuring E ≥ 5)",
          keywords: ["random number", "bias", "edge", "standardized", "e ≥ 5", "e >= 5"],
        },
        {
          point: "Records presence/absence into 2 × 2 contingency table and states H₀ (independence) and H₁ (association)",
          keywords: ["contingency", "h₀", "h0", "independent", "presence"],
        },
        {
          point: "Specifies expected frequency E = (row × col) / total and χ² = Σ(O − E)² / E",
          keywords: ["row", "expected", "(o - e)", "grand total"],
        },
        {
          point: "Applies df = 1 and critical value 3.841 (p = 0.05) to decide rejection of H₀ and distinguish positive (O > E) vs negative (O < E) association",
          keywords: ["3.841", "df = 1", "reject", "positive", "negative"],
        },
        {
          point: "Notes limitation: significant association does not prove direct biotic interaction (could reflect shared/opposing abiotic microhabitat tolerances)",
          keywords: ["causation", "abiotic", "microhabitat", "does not prove"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid field design or statistical workflow described.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Mentions throwing quadrats randomly and running a chi-squared test without coordinate randomization, equations, or decision criteria.",
          indicators: ["'Throw quadrats' (biased!) or missing 3.841 / df = 1"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Sound random-coordinate sampling design and accurate χ² procedure, but misses either E ≥ 5 / boundary control or causation limitation.",
          indicators: ["Good field method and statistics; lacks epistemological caution"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Rigorous IB IA-grade experimental design integrating unbiased random coordinate grids, edge rules, E ≥ 5 sample sizing, full χ² hypothesis testing, positive/negative diagnosis, and causal limits.",
          indicators: ["Zero biased throwing; mathematically and ecologically watertight"],
        },
      ],
      commonError: "Describing 'throwing a quadrat over your shoulder' as random sampling—IB explicitly penalizes throwing because it is non-random and biased toward reachable areas.",
    },
    {
      id: "c3-c4-interaction-organisms-ecosystems-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Discuss",
      guideRef: "transfers-energy-matter",
      strategy: "Integrate terrestrial permafrost/peatland/forest sink-to-source flips, marine ocean acidification, and open energy vs closed carbon dynamics",
      marks: 8,
      question:
        "[HL] Discuss how human-driven warming and land-use changes can convert major natural carbon sinks—including Arctic permafrost, tropical peatlands, forests, and surface oceans—into positive climate feedback sources, evaluating implications for global carbon budgets and ecosystem energy flow.",
      hints: [
        "Explain how permafrost thaw and peatland drainage restore oxygen/warmth to saprotrophic decomposers (releasing CO₂ and CH₄ → positive feedback).",
        "Explain deforestation/wildfire loss of photosynthetic GPP uptake, plus warming oceans holding less dissolved CO₂ and experiencing H⁺/CO₃²⁻ acidification.",
        "Evaluate how altered NPP cascades up ecological energy pyramids (because energy cannot be recycled and ~90% is lost per trophic step).",
      ],
      modelAnswer:
        "Earth's carbon cycle relies on vast natural sinks where photosynthetic uptake or inhibited decomposition historically exceeded respiratory release. In Arctic permafrost, sub-zero soils freeze ancient plant detritus; anthropogenic warming thaws these soils, activating aerobic saprotrophic respiration (releasing CO₂) and anaerobic methanogenesis (releasing methane, CH₄, a potent greenhouse gas). Similarly, draining tropical peatlands for agriculture introduces oxygen into previously waterlogged, acidic bogs, unleashing rapid aerobic microbial oxidation and deep peat fires that flip millennia-old carbon sinks into massive carbon sources. Deforestation and climate-intensified wildfires simultaneously oxidize standing woody biomass and permanently slash regional gross and net primary productivity (NPP), reducing future photosynthetic drawdown. In surface oceans, two limits compound: warmer water holds less dissolved CO₂ gas physically, while absorbed CO₂ forms carbonic acid whose H⁺ ions deplete carbonate ions (CO₃²⁻), impairing coral and plankton calcification and weakening the biological carbon pump. Together, these sink-to-source flips operate as amplifying positive feedbacks—higher atmospheric CO₂ drives further warming, which accelerates further carbon release, pushing ecosystems toward irreversible tipping points. Because ecosystems are open systems for energy with ~90% loss per trophic transfer, any climate- or acidification-driven collapse in producer NPP (such as coral-zooxanthellae bleaching or drought-stressed forests) immediately starves upper trophic levels, demonstrating why protecting intact peatlands, forests, and oceans alongside rapid fossil-fuel phase-out is essential to stabilize global carbon budgets.",
      markScheme: [
        {
          point: "Permafrost thaw activates microbial decomposition releasing CO₂ and potent greenhouse gas CH₄",
          keywords: ["permafrost", "methane", "ch4", "methanogen"],
        },
        {
          point: "Peatland drainage restores oxygen to previously anaerobic acidic soils, enabling rapid aerobic saprotroph oxidation / peat fires",
          keywords: ["drain", "anaerobic", "saprotroph", "oxygen"],
        },
        {
          point: "Deforestation/wildfires release stored biomass carbon AND reduce photosynthetic carbon drawdown (NPP)",
          keywords: ["deforestation", "wildfire", "drawdown", "biomass"],
        },
        {
          point: "Ocean warming lowers physical CO₂ gas solubility while ocean acidification (H⁺ depleting CO₃²⁻) impairs calcification / marine carbon pump",
          keywords: ["solubility", "co3", "calcification", "acidification"],
        },
        {
          point: "Explains positive climate feedback loop: warming releases more carbon → stronger greenhouse warming → further sink collapse",
          keywords: ["positive feedback", "amplif", "tipping point", "greenhouse"],
        },
        {
          point: "Distinguishes carbon sink-to-source flux reversal (respiration/release exceeding photosynthesis/uptake)",
          keywords: ["sink", "source", "exceed", "flux"],
        },
        {
          point: "Links reduced producer NPP to trophic collapse via one-way energy flow and ~90% loss per trophic level",
          keywords: ["trophic", "90%", "open system", "bleaching", "starve"],
        },
        {
          point: "Evaluates mitigation imperative: protecting natural sinks AND rapidly cutting fossil combustion to prevent runaway feedbacks",
          keywords: ["fossil", "mitigation", "phase-out", "protecting", "stabilize"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid discussion of carbon sinks, feedbacks, or ecosystem consequences.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Mentions deforestation or melting ice adding CO₂ without saprotrophic mechanisms, ocean chemistry, or feedback evaluation.",
          indicators: ["General climate statements lacking biological carbon-cycle detail"],
        },
        {
          band: "3–5",
          marks: [3, 5],
          descriptor: "Explains 2–3 sink-to-source mechanisms accurately and defines positive feedback, with limited integration of ocean chemistry or trophic energy flow.",
          indicators: ["Covers terrestrial sinks well; misses either marine acidification or NPP trophic cascade"],
        },
        {
          band: "6–8",
          marks: [6, 8],
          descriptor: "Synoptic HL discussion integrating permafrost/peatland saprotrophic activation, forest NPP loss, marine solubility/acidification chemistry, positive feedback tipping points, trophic energy constraints, and mitigation evaluation.",
          indicators: ["Cohesive synthesis across all four sinks plus energy-flow evaluation"],
        },
      ],
    },
  ],
};
