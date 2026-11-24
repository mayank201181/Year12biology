import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  {
    id: "c3-c4-interaction-organisms-ecosystems-m1",
    title: "Paper 1A · Set 1: Core Coordination, Immunity & Ecology",
    level: "SL",
    questions: [
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "integration-body-systems",
        strategy: "Trace the spinal reflex arc in anatomical order",
        question:
          "Which sequence accurately traces the pathway of nerve impulses during an involuntary spinal pain-withdrawal reflex?",
        options: [
          "Receptor → motor neuron → spinal relay neuron → sensory neuron → effector muscle",
          "Receptor → cerebral cortex → sensory neuron → motor neuron → effector muscle",
          "Receptor → sensory neuron → spinal relay neuron → motor neuron → effector muscle",
          "Receptor → sensory neuron → cerebellum → ventral root ganglion → effector muscle",
        ],
        answerIndex: 2,
        hints: [
          "Sensory (afferent) neurons always carry impulses from a receptor toward the central nervous system.",
          "A spinal reflex arc uses an interneuron inside spinal cord grey matter before signalling the motor neuron.",
        ],
        explanation:
          "Pain withdrawal begins at skin nociceptors, travels along a sensory neuron via the dorsal root to a relay (inter)neuron in spinal cord grey matter, and exits along a motor neuron via the ventral root to contract the effector muscle. Routing through the cerebral cortex or cerebellum first would add critical delay and describes voluntary or postural processing rather than a spinal reflex.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "integration-body-systems",
        strategy: "Link blood CO₂ chemistry to chemoreceptor feedback",
        question:
          "During vigorous running, what primary chemical stimulus is detected by chemoreceptors to instruct the medulla oblongata to increase ventilation rate?",
        options: [
          "A fall in blood plasma pH caused by dissolved CO₂ forming carbonic acid",
          "A sharp fall in arterial haemoglobin oxygen saturation below 50 percent",
          "A rise in plasma glucose concentration released from skeletal muscle fibres",
          "A drop in venous blood pressure detected inside the right ventricular wall",
        ],
        answerIndex: 0,
        hints: [
          "Think about what waste gas increases rapidly in venous and arterial blood during intense aerobic respiration.",
          "Dissolved CO₂ reacts with water to produce H₂CO₃, which dissociates into H⁺ and HCO₃⁻ ions.",
        ],
        explanation:
          "Increased cellular respiration adds CO₂ to blood plasma, forming carbonic acid and H⁺ ions that lower blood pH; carotid, aortic, and medullary chemoreceptors detect this acidity and stimulate the medulla to accelerate breathing and heart rate. Arterial oxygen saturation remains near 98% during normal exercise, so low O₂ is not the primary ventilation trigger.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "State",
        guideRef: "integration-body-systems",
        strategy: "Match each endocrine hormone to its gland and target role",
        question:
          "Which statement correctly describes the origin and physiological regulation of melatonin in humans?",
        options: [
          "Secreted by the adrenal medulla in bright sunlight to raise metabolic heart rate",
          "Secreted by the anterior pituitary gland during exercise to dilate bronchioles",
          "Secreted by the hypothalamus during meals to trigger hepatic glycogen storage",
          "Secreted by the pineal gland in darkness to coordinate circadian sleep rhythms",
        ],
        answerIndex: 3,
        hints: [
          "Melatonin is commonly associated with sleep timing and jet lag recovery.",
          "Light detected by the retina signals the suprachiasmatic nucleus to suppress this hormone.",
        ],
        explanation:
          "The pineal gland secretes melatonin in response to darkness (inhibited by blue light detected by retinal ganglion cells signalling the suprachiasmatic nucleus), entraining circadian sleep–wake rhythms. Adrenal medulla secretes epinephrine for fight-or-flight, not melatonin.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "integration-body-systems",
        strategy: "Locate the shaded flank of a unilaterally lit shoot",
        question:
          "A young oat coleoptile is illuminated from the right side only. Why does the shoot curve toward the right over the next several hours?",
        options: [
          "Auxin accumulates on the illuminated right flank and stimulates faster cell division there",
          "Auxin accumulates on the shaded left flank and stimulates faster cell elongation there",
          "Auxin is destroyed completely by sunlight so shaded cells shrink by osmotic plasmolysis",
          "Auxin moves upward from roots exclusively along the right side to stiffen xylem vessels",
        ],
        answerIndex: 1,
        hints: [
          "To bend toward the right, which side of the cylindrical stem must become longer?",
          "In shoots, higher auxin (IAA) concentration promotes cell elongation rather than inhibiting it.",
        ],
        explanation:
          "Unilateral light from the right redistributes auxin (IAA) laterally to the shaded left side of the coleoptile, where elevated auxin promotes faster cell elongation; the longer left flank forces the shoot to bend toward the right light source. Auxin is not destroyed on the lit side, nor does bending depend on faster elongation on the lit side.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "defense-against-disease",
        strategy: "Recall the enzyme cascade from platelets to insoluble fibrin",
        question:
          "In the mammalian blood clotting cascade, what is the immediate catalytic role of active thrombin?",
        options: [
          "Converting soluble plasma fibrinogen into insoluble fibrous fibrin strands",
          "Triggering damaged endothelial cells to release circulating platelets into plasma",
          "Hydrolysing bacterial peptidoglycan cell walls trapped inside open skin wounds",
          "Stimulating hepatic cells to synthesize prothrombin from dietary vitamin K",
        ],
        answerIndex: 0,
        hints: [
          "Clotting factors activate prothrombin into thrombin first; what happens in the very next step?",
          "Look for the soluble plasma precursor that polymerizes into an insoluble fibrous mesh.",
        ],
        explanation:
          "Platelet clotting factors trigger conversion of inactive prothrombin into active thrombin, and thrombin directly catalyses the conversion of soluble fibrinogen into insoluble fibrin strands that trap red blood cells. Lysozyme—not thrombin—digests bacterial cell walls.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "defense-against-disease",
        strategy: "Contrast non-specific innate phagocytes with specific adaptive lymphocytes",
        question:
          "Which cellular interaction directly bridges innate pathogen ingestion and adaptive antibody production?",
        options: [
          "Neutrophils secreting polyclonal antibodies directly into infected tissue fluid",
          "Erythrocytes binding free bacterial toxins and transferring them to red bone marrow",
          "Macrophages presenting digested pathogen antigens to complementary helper T-cells",
          "Platelets releasing histamine to activate resting memory B-cells inside capillaries",
        ],
        answerIndex: 2,
        hints: [
          "Which phagocytic white blood cell acts as an antigen-presenting cell (APC)?",
          "Helper T-cells must recognize presented antigens before secreting cytokines to activate B-cells.",
        ],
        explanation:
          "After phagocytosing and digesting a pathogen, macrophages display antigenic peptide fragments on surface MHC proteins to helper T-cells carrying complementary receptors; those T-helper cells then secrete cytokines activating matching B-lymphocytes. Neutrophils do not secrete antibodies, and erythrocytes lack nuclei and antigen-presentation machinery.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "populations-communities-chi",
        strategy: "Apply Lincoln capture–mark–recapture formula N = (M × n) / m",
        question:
          "Ecologists capture, mark, and release 45 marsh frogs in a wetland reserve. Five days later they capture 60 marsh frogs, of which 9 carry marks. What is the Lincoln index estimate of the frog population?",
        options: [
          "240 marsh frogs",
          "300 marsh frogs",
          "360 marsh frogs",
          "540 marsh frogs",
        ],
        answerIndex: 1,
        hints: [
          "Identify M = 45, n = 60, and m = 9 in the Lincoln index equation.",
          "Compute {{N = (M * n) / m = (45 * 60) / 9}}.",
        ],
        explanation:
          "Using the Lincoln index {{N = (45 * 60) / 9 = 2700 / 9 = 300}} marsh frogs. A common slip is multiplying 45 by 9 or dividing in the wrong order, which violates the proportion {{M / N = m / n}}.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "defense-against-disease",
        strategy: "Check biological targets of antibiotics vs viral structure",
        question:
          "Why are antibiotics such as penicillin completely ineffective for treating influenza or HIV infections?",
        options: [
          "Human blood plasma rapidly breaks down antibiotics whenever viral proteins appear",
          "Viruses possess thickened peptidoglycan walls that block antibiotic diffusion entirely",
          "Antibiotics stimulate viral reverse transcriptase and accelerate host cell lysis",
          "Viruses lack prokaryotic cell walls, 70S ribosomes, and independent metabolic pathways",
        ],
        answerIndex: 3,
        hints: [
          "What cellular structures do penicillin and streptomycin specifically inhibit?",
          "Are viruses cellular prokaryotes or acellular parasites using host eukaryotic machinery?",
        ],
        explanation:
          "Antibiotics disrupt prokaryotic-specific structures such as peptidoglycan cell-wall cross-linking or bacterial 70S ribosomes. Viruses are acellular, lack cell walls and ribosomes, and replicate using host eukaryotic enzymes, leaving antibiotics with no viral target. Viruses never possess peptidoglycan walls.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "populations-communities-chi",
        strategy: "Trace how violating a Lincoln assumption changes denominator m",
        question:
          "In a capture–mark–recapture study of meadow voles, the paint marks used on the first sample flake off half of the marked voles before recapture. How does this error affect the Lincoln index estimate?",
        options: [
          "It causes an underestimate because the numerator M is halved during calculation",
          "It leaves the estimate unchanged because unmarked voles mix at identical rates",
          "It causes an overestimate because fewer marked voles m are recorded in recapture",
          "It causes an underestimate because recaptured sample size n becomes artificially large",
        ],
        answerIndex: 2,
        hints: [
          "Look at {{N = (M * n) / m}}: which variable actually drops when marks rub off before the second capture?",
          "When the denominator m decreases while M and n stay similar, what happens to the quotient N?",
        ],
        explanation:
          "Flaking marks reduce the number of visibly marked recaptures (m) in the denominator of {{N = (M * n) / m}}, inflating the calculated ratio and causing a substantial overestimate of the true population. The initial count M was already recorded during the first capture.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "populations-communities-chi",
        strategy: "Match sigmoid growth phase to birth/death balance",
        question:
          "Which statement accurately characterizes the plateau phase of a sigmoid population growth curve?",
        options: [
          "Natality plus immigration approximately equals mortality plus emigration around K",
          "Density-independent storms permanently push natality to zero across all habitats",
          "Abundant unlimited resources keep population doubling time constant each generation",
          "Interspecific mutualism eliminates predation so population size rises exponentially",
        ],
        answerIndex: 0,
        hints: [
          "In the plateau phase, the population graph levels off horizontally with small fluctuations.",
          "Net population change ΔN = (b + i) − (d + e) is approximately zero at carrying capacity K.",
        ],
        explanation:
          "During the plateau phase, density-dependent limiting factors balance inputs and outputs so (natality + immigration) ≈ (mortality + emigration) around carrying capacity K. Constant doubling time describes the earlier exponential phase, not the plateau.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "populations-communities-chi",
        strategy: "Verify mutual benefit (+/+) in classic IB symbiosis pairs",
        question:
          "Which ecological partnership exemplifies mutualism in which a bacterium fixes atmospheric nitrogen inside specialized plant root nodules?",
        options: [
          "Mycorrhizal fungi exchanging soil nitrate for xylem sap with coniferous trees",
          "Zooxanthellae dinoflagellates fixing gaseous nitrogen inside reef-building corals",
          "Saprotrophic soil bacteria decomposing dead cellulose around orchid root hairs",
          "Rhizobium bacteria supplying fixed ammonium to legumes in return for sugars",
        ],
        answerIndex: 3,
        hints: [
          "Which plant family forms root nodules containing leghaemoglobin to keep oxygen low for nitrogenase?",
          "Distinguish Rhizobium (nitrogen-fixing bacteria) from mycorrhizal fungi (water and phosphate uptake).",
        ],
        explanation:
          "Rhizobium bacteria live inside legume root nodules, fixing atmospheric N₂ into ammonium usable by the plant while receiving photosynthetic carbohydrates and an anaerobic environment. Mycorrhizal fungi assist primarily with water and phosphate uptake rather than N₂ fixation, and zooxanthellae perform photosynthesis in corals.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "transfers-energy-matter",
        strategy: "Apply NPP = GPP − R",
        question:
          "A temperate grassland has a gross primary productivity (GPP) of 18,500 kJ m⁻² yr⁻¹ and loses 11,200 kJ m⁻² yr⁻¹ via producer cellular respiration. What is its net primary productivity (NPP)?",
        options: [
          "29,700 kJ m⁻² yr⁻¹",
          "7,300 kJ m⁻² yr⁻¹",
          "1,850 kJ m⁻² yr⁻¹",
          "6,050 kJ m⁻² yr⁻¹",
        ],
        answerIndex: 1,
        hints: [
          "Net primary productivity is the chemical energy left over after plants use some for their own respiration.",
          "Subtract producer respiration R from gross primary productivity GPP.",
        ],
        explanation:
          "Using {{NPP = GPP - R = 18500 - 11200 = 7300}} kJ m⁻² yr⁻¹. Adding GPP and R (29,700) double-counts respiratory loss, while taking 10% of GPP confuses trophic transfer efficiency with producer respiration.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "transfers-energy-matter",
        strategy: "Apply thermodynamic energy flow vs nutrient recycling",
        question:
          "Why is an ecological pyramid of energy always upright even in pelagic ocean ecosystems where standing zooplankton biomass briefly exceeds phytoplankton biomass?",
        options: [
          "Energy is continuously lost as respiratory heat at every trophic transfer over time",
          "Top marine predators recycle thermal energy back to photosynthetic algae at night",
          "Phytoplankton absorb solar energy at 90 percent efficiency across all ocean depths",
          "Zooplankton gain extra chemical energy directly from dissolved oceanic carbonate",
        ],
        answerIndex: 0,
        hints: [
          "Think about the units of a pyramid of energy: kJ m⁻² yr⁻¹ integrates energy flow over an entire year.",
          "Can living organisms reconvert dissipated respiratory heat back into usable chemical energy?",
        ],
        explanation:
          "Pyramids of energy measure total energy flow per unit area per year (kJ m⁻² yr⁻¹); because cellular respiration dissipates most chemical energy as unrecyclable heat at every trophic step, each higher trophic level inevitably receives far less annual energy than the level below. Phytoplankton reproduce so rapidly that their annual energy output still dwarfs zooplankton even if standing biomass looks briefly inverted.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "defense-against-disease",
        strategy: "Apply herd-immunity threshold formula p_c = 1 − 1/R₀",
        question:
          "A newly emerging respiratory virus has a basic reproduction number {{R_0 = 4}}. What minimum percentage of the population must be immune to achieve herd immunity?",
        options: [
          "25 percent of the population",
          "50 percent of the population",
          "75 percent of the population",
          "80 percent of the population",
        ],
        answerIndex: 2,
        hints: [
          "Recall the herd-immunity threshold equation {{p_c = 1 - 1/R_0}}.",
          "Substitute {{R_0 = 4}} to find {{1 - 1/4}}, then convert the decimal to a percentage.",
        ],
        explanation:
          "Substituting {{R_0 = 4}} gives {{p_c = 1 - 1/4 = 0.75 = 75}}% immune required so each infected host transmits on average to fewer than 1 susceptible individual. Choosing 25% gives {{1/R_0}}, which is the maximum susceptible fraction rather than the required immune fraction.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "integration-body-systems",
        strategy: "Connect PIN3 efflux carriers to H⁺-ATPase wall acidification [HL]",
        question:
          "[HL] Which intracellular mechanism directly links elevated auxin (IAA) concentration on the shaded side of a shoot to irreversible cell elongation?",
        options: [
          "Auxin inhibits plasma-membrane aquaporins, preventing water exit during daylight",
          "Auxin triggers rapid mitotic spindle assembly inside shaded cortical vacuoles",
          "Auxin activates lignin synthase enzymes that thicken secondary xylem walls",
          "Auxin activates H⁺-ATPase pumps that acidify cell walls so expansins loosen cellulose",
        ],
        answerIndex: 3,
        hints: [
          "Recall the acid-growth hypothesis for shoot phototropism at HL.",
          "Lower pH inside the cell wall activates wall-loosening proteins that break hydrogen bonds between cellulose microfibrils.",
        ],
        explanation:
          "In shaded shoot cells receiving laterally pumped IAA from PIN3 carriers, auxin activates plasma-membrane H⁺-ATPase proton pumps, lowering apoplastic cell-wall pH so expansins break hydrogen bonds between cellulose microfibrils and hemicelluloses; osmotic turgor then stretches the loosened wall. Bending arises from cell elongation rather than mitosis or lignification.",
      },
    ],
  },

  {
    id: "c3-c4-interaction-organisms-ecosystems-m2",
    title: "Paper 1A · Set 2: Applied Data, Sampling & Carbon Fluxes",
    level: "SL",
    questions: [
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "integration-body-systems",
        strategy: "Compare sympathetic epinephrine action vs parasympathetic vagus action",
        question:
          "Which physiological combination occurs immediately when epinephrine (adrenaline) is secreted from the adrenal medulla during acute stress?",
        options: [
          "Heart rate decreases, bronchioles constrict, and blood flow shifts toward the small intestine",
          "Heart rate increases, bronchioles dilate, and hepatic glycogenolysis raises blood glucose",
          "Heart rate increases, bronchioles constrict, and insulin secretion surges from beta cells",
          "Heart rate decreases, bronchioles dilate, and pineal melatonin secretion rises sharply",
        ],
        answerIndex: 1,
        hints: [
          "Epinephrine prepares skeletal muscles for rapid aerobic ATP production ('fight or flight').",
          "To fuel muscles quickly, the body needs more oxygen delivery and more circulating glucose.",
        ],
        explanation:
          "Epinephrine accelerates sinoatrial node firing (increasing cardiac output), dilates bronchioles to maximize O₂ ventilation, diverts blood from the gut to skeletal muscles, and stimulates liver glycogen breakdown into glucose. Bronchoconstriction and gut vasodilation correspond to parasympathetic rest-and-digest control.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "integration-body-systems",
        strategy: "Multiply heart rate by stroke volume and convert cm³ to dm³",
        question:
          "During a rowing time trial, an athlete's heart rate reaches 150 beats min⁻¹ with an average stroke volume of 120 cm³. What is the athlete's cardiac output in dm³ min⁻¹?",
        options: [
          "1.8 dm³ min⁻¹",
          "12.5 dm³ min⁻¹",
          "15.0 dm³ min⁻¹",
          "18.0 dm³ min⁻¹",
        ],
        answerIndex: 3,
        hints: [
          "Cardiac output equals heart rate multiplied by stroke volume ({{CO = HR * SV}}).",
          "Divide the result in cm³ min⁻¹ by 1,000 because {{1 dm^3 = 1000 cm^3}}.",
        ],
        explanation:
          "Multiplying {{150 * 120 = 18000}} cm³ min⁻¹ and dividing by 1,000 converts to 18.0 dm³ min⁻¹. Choosing 1.8 dm³ min⁻¹ comes from dividing by 10,000 instead of 1,000.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "defense-against-disease",
        strategy: "Apply F-H-L (Faster, Higher, Longer) for secondary immune responses",
        question:
          "A vaccinated adult is exposed to the same viral antigen six months after an initial vaccine dose. How does the secondary antibody response compare with the primary response?",
        options: [
          "Shorter lag phase, dramatically higher peak antibody concentration, and slower decline",
          "Longer lag phase, identical peak antibody concentration, and faster plasma clearance",
          "Zero lag phase, lower peak antibody concentration, and reliance solely on phagocytes",
          "Shorter lag phase, lower peak antibody concentration, and exclusively IgM secretion",
        ],
        answerIndex: 0,
        hints: [
          "Which specialized lymphocytes persist after the primary response to recognize the antigen immediately?",
          "Memory B-cells proliferate rapidly into huge numbers of antibody-secreting plasma cells.",
        ],
        explanation:
          "Long-lived memory B-cells bypass slow naïve clonal selection, rapidly differentiating into plasma cells so the secondary response shows a much shorter lag phase (1–2 days), a vastly higher peak antibody titre (mostly IgG), and prolonged persistence. Relying solely on phagocytes describes non-specific innate defence.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "defense-against-disease",
        strategy: "Explain AMR via pre-existing variation and Darwinian selection",
        question:
          "Which statement accurately explains how methicillin-resistant *Staphylococcus aureus* (MRSA) becomes dominant inside a hospital ward?",
        options: [
          "Methicillin chemically mutates bacterial ribosomes so every cell adapts intentionally",
          "Hospital patients produce fewer antibodies after taking repeated courses of penicillin",
          "Pre-existing resistant mutants survive antibiotic exposure and reproduce disproportionately",
          "Resistant bacteria convert viral capsids into impermeable peptidoglycan cell walls",
        ],
        answerIndex: 2,
        hints: [
          "Does the antibiotic create the resistance mutation, or does it act as a selective pressure?",
          "Apply natural selection: random heritable variation exists before selective elimination of susceptible cells.",
        ],
        explanation:
          "Random mutations (or resistance plasmids transferred via conjugation) arise independently before antibiotic exposure; methicillin kills susceptible bacteria while resistant variants survive and pass resistance alleles to offspring. Antibiotics do not intentionally induce resistance mutations.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "defense-against-disease",
        strategy: "Identify HIV's exact lymphocyte target and downstream cascade",
        question:
          "Why does untreated HIV infection eventually leave patients vulnerable to rare opportunistic fungal and bacterial infections?",
        options: [
          "HIV destroys platelet precursors in bone marrow, preventing all wound clotting",
          "HIV binds to circulating antibodies in plasma and permanently neutralizes lysozyme",
          "HIV infects mature red blood cells, blocking oxygen transport to lymph nodes",
          "HIV destroys CD4⁺ helper T-cells, impairing cytokine activation of B- and T-cells",
        ],
        answerIndex: 3,
        hints: [
          "Which specific white blood cell carries the CD4 receptor targeted by HIV?",
          "Without helper T-cells secreting cytokines, what happens to adaptive B-cell and cytotoxic T-cell responses?",
        ],
        explanation:
          "HIV specifically infects and progressively depletes CD4⁺ helper T-lymphocytes; when counts fall critically low, B-cells and cytotoxic T-cells lack cytokine activation, collapsing adaptive immunity (AIDS) and allowing opportunistic infections to thrive. HIV does not target erythrocytes or megakaryocytes.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "populations-communities-chi",
        strategy: "Scale mean quadrat count by (habitat area / quadrat area)",
        question:
          "Students survey a 20 m × 15 m meadow using ten randomly placed 0.5 m × 0.5 m quadrats and find a mean of 6.5 clover plants per quadrat. What is the estimated total clover population in the meadow?",
        options: [
          "1,950 clover plants",
          "7,800 clover plants",
          "3,900 clover plants",
          "975 clover plants",
        ],
        answerIndex: 1,
        hints: [
          "First find both areas in m²: meadow = {{20 * 15 = 300}} m², and one quadrat = {{0.5 * 0.5 = 0.25}} m².",
          "How many 0.25 m² quadrats fit inside 300 m²? Multiply that factor by 6.5.",
        ],
        explanation:
          "Total meadow area is 300 m² and each quadrat has area {{0.5 * 0.5 = 0.25}} m², so {{300 / 0.25 = 1200}} quadrats fit in the meadow; multiplying {{6.5 * 1200 = 7800}} clover plants. Taking quadrat area as 0.5 m² instead of 0.25 m² yields the tempting distractor 3,900.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "populations-communities-chi",
        strategy: "Distinguish density-dependent vs density-independent limiting factors",
        question:
          "Which limiting factor acts in a density-independent manner on a coastal seabird colony?",
        options: [
          "A severe category-4 typhoon flooding every coastal nesting cliff simultaneously",
          "Rapid transmission of avian mites spreading across crowded nesting burrows",
          "Intraspecific competition among chicks for limited shoreline fish deliveries",
          "Increased predation by coastal foxes drawn to dense fledgling aggregations",
        ],
        answerIndex: 0,
        hints: [
          "A density-independent factor kills a similar fraction of organisms regardless of whether the population is sparse or crowded.",
          "Weather catastrophes are abiotic events unaffected by population size.",
        ],
        explanation:
          "An extreme typhoon destroys nests regardless of seabird population density, making it density-independent. Parasitism, intraspecific food competition, and predator attraction all intensify as population density rises (density-dependent).",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "populations-communities-chi",
        strategy: "Compute contingency-table expected count E = (row × col) / grand total",
        question:
          "Across 100 random rocky-shore quadrats, limpets occur in 50 quadrats and green algae occur in 40 quadrats. Under the null hypothesis of independence, what is the expected number of quadrats containing *both* species?",
        options: [
          "10 quadrats",
          "25 quadrats",
          "20 quadrats",
          "45 quadrats",
        ],
        answerIndex: 2,
        hints: [
          "Use {{E = (" + '"row total"' + " * " + '"column total"' + ") / " + '"grand total"' + "}}.",
          "Multiply the number of limpet-present quadrats (50) by algae-present quadrats (40) and divide by 100.",
        ],
        explanation:
          "Under independence, {{E = (50 * 40) / 100 = 2000 / 100 = 20}} quadrats expected to contain both species. Averaging 50 and 40 (45) or taking a quarter of 100 (25) ignores the actual marginal species frequencies.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "populations-communities-chi",
        strategy: "Identify top-down predator cascades vs bottom-up nutrient limits",
        question:
          "When sea otters were hunted out of a Pacific kelp reef, sea urchin numbers exploded and stripped the kelp forest down to bare rock. Which ecological control mechanism does this collapse illustrate?",
        options: [
          "Loss of top-down control triggering a trophic cascade through herbivores",
          "Loss of bottom-up control caused by depleted coastal sunlight intensity",
          "Interspecific mutualism between sea otters and photosynthetic kelp blades",
          "Competitive exclusion of sea urchins by invasive planktonic algae",
        ],
        answerIndex: 0,
        hints: [
          "Does the disturbance begin at a high trophic level (predator) or at abiotic nutrients/producers?",
          "Removing a keystone predator releases herbivores from predation, cascading downward to producers.",
        ],
        explanation:
          "Sea otters exert top-down control by preying on sea urchins; removing the predator released urchins to overgraze kelp producers in a classic trophic cascade. Bottom-up control would involve changes in nutrients, light, or primary productivity driving higher levels.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "populations-communities-chi",
        strategy: "Check predator–prey phase lag on population time-series",
        question:
          "In a 40-year trapping record of snowshoe hares and Canadian lynx, how do the two oscillating population curves relate in time?",
        options: [
          "Lynx peaks occur strictly ahead of hare peaks because predators stimulate prey births",
          "Lynx peaks consistently lag behind hare peaks due to delayed reproductive feedback",
          "Hare and lynx populations peak identically on the exact same month every decade",
          "Lynx numbers remain flat at carrying capacity while only hares oscillate annually",
        ],
        answerIndex: 1,
        hints: [
          "Can predator numbers boom *before* abundant food is available, or *after* prey multiply?",
          "Predator reproduction takes time after prey abundance peaks, creating a phase lag.",
        ],
        explanation:
          "Predator populations expand only after high prey abundance boosts survival and reproduction, then crash after over-consuming prey—producing coupled cycles in which lynx peaks lag behind hare peaks. Synchronous or predator-leading peaks contradict consumer resource dependence.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "transfers-energy-matter",
        strategy: "Compute (energy at trophic level 2 / energy at level 1) × 100",
        question:
          "In a woodland ecosystem, producer net primary productivity is 12,500 kJ m⁻² yr⁻¹ and primary consumers convert 1,500 kJ m⁻² yr⁻¹ into new biomass. What is the trophic energy-transfer efficiency?",
        options: [
          "8.3 percent",
          "10.0 percent",
          "15.0 percent",
          "12.0 percent",
        ],
        answerIndex: 3,
        hints: [
          "Divide the energy at the higher trophic level (1,500) by the energy at the lower trophic level (12,500).",
          "Multiply the resulting decimal by 100 to obtain the percentage.",
        ],
        explanation:
          "Trophic efficiency = {{(1500 / 12500) * 100 = 0.12 * 100 = 12.0}}%. Choosing 8.3% comes from inverting the ratio ({{12500 / 1500 = 8.33}}), a classic calculation slip.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "transfers-energy-matter",
        strategy: "Connect anaerobic acidic waterlogged bog chemistry to saprotroph inhibition",
        question:
          "Why do waterlogged peat bogs act as major long-term terrestrial carbon sinks?",
        options: [
          "Peat mosses perform chemoautotrophy using dissolved granite rather than sunlight",
          "High water temperatures rapidly crystallize plant starch directly into limestone",
          "Anaerobic and acidic conditions inhibit saprotrophs, leaving organic matter undecayed",
          "Peatland herbivores digest cellulose completely without releasing any respiratory CO₂",
        ],
        answerIndex: 2,
        hints: [
          "What organisms normally decompose dead plant litter and release CO₂ back to the atmosphere?",
          "Why can aerobic saprotrophic fungi and bacteria barely function in acidic, oxygen-starved waterlogged soil?",
        ],
        explanation:
          "Waterlogged peatlands are anaerobic and acidic, suppressing aerobic saprotrophic bacteria and fungi so dead *Sphagnum* moss and plant tissues accumulate only partially decomposed, sequestering organic carbon for millennia. Limestone forms from marine CaCO₃ shells, not plant starch.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "transfers-energy-matter",
        strategy: "Separate annual Northern Hemisphere seasonality from multi-decade fossil trend",
        question:
          "What primarily causes the regular annual drop in atmospheric CO₂ between May and September visible on the Mauna Loa Keeling curve?",
        options: [
          "Complete global shutdown of industrial fossil-fuel combustion during summer holidays",
          "Peak terrestrial photosynthesis across extensive Northern Hemisphere forests drawing down CO₂",
          "Increased solubility of CO₂ gas in warmer tropical surface ocean waters in July",
          "Enhanced volcanic absorption of atmospheric carbon dioxide during summer solstices",
        ],
        answerIndex: 1,
        hints: [
          "Which hemisphere holds roughly two-thirds of Earth's landmass and huge boreal/temperate forests?",
          "During May–September, is it summer or winter in the Northern Hemisphere, and does photosynthesis exceed respiration?",
        ],
        explanation:
          "Because the Northern Hemisphere contains most of Earth's terrestrial forest biomass, spring and summer leaf-out (May–September) drives net photosynthetic CO₂ uptake exceeding global respiration, producing the annual dip. Warmer oceans actually hold *less* dissolved CO₂ gas, not more.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "transfers-energy-matter",
        strategy: "Sum carbon outputs and compare against photosynthetic carbon uptake",
        question:
          "A regional forest absorbs 12.4 Gt C yr⁻¹ via photosynthesis while losing 6.1 Gt C yr⁻¹ to plant respiration, 5.8 Gt C yr⁻¹ to soil decomposition, and 1.2 Gt C yr⁻¹ to wildfires. What is the region's net carbon status?",
        options: [
          "Net carbon source releasing 0.7 Gt C yr⁻¹ to the atmosphere",
          "Net carbon sink absorbing 0.7 Gt C yr⁻¹ from the atmosphere",
          "Net carbon sink absorbing 0.5 Gt C yr⁻¹ from the atmosphere",
          "Net carbon source releasing 1.2 Gt C yr⁻¹ to the atmosphere",
        ],
        answerIndex: 0,
        hints: [
          "Add all three carbon-release fluxes: autotrophic respiration + soil decomposition + wildfires.",
          "Subtract total carbon release from photosynthetic uptake (12.4); a negative value means net release (source).",
        ],
        explanation:
          "Total carbon release is {{6.1 + 5.8 + 1.2 = 13.1}} Gt C yr⁻¹, exceeding photosynthetic uptake of 12.4 Gt C yr⁻¹ by 0.7 Gt C yr⁻¹, so the region acts as a net carbon source of 0.7 Gt C yr⁻¹. Ignoring wildfires gives the tempting +0.5 Gt C yr⁻¹ sink figure.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "integration-body-systems",
        strategy: "Identify positive feedback amplification in climacteric ethylene signalling [HL]",
        question:
          "[HL] Placing one ripe banana inside a sealed paper bag with green bananas accelerates ripening of every banana inside. Which regulatory mechanism explains this observation?",
        options: [
          "Negative feedback in which starch breakdown inhibits gaseous auxin diffusion",
          "Antagonistic competition between root cytokinins and shaded-side PIN3 pumps",
          "Positive feedback in which gaseous ethylene triggers further ethylene synthesis",
          "Autonomic reflex signalling carried along vascular phloem companion cells",
        ],
        answerIndex: 2,
        hints: [
          "Which gaseous plant hormone diffuses through air from ripe climacteric fruits?",
          "When a hormone stimulates its own increased production, is that negative or positive feedback?",
        ],
        explanation:
          "Ripe climacteric fruits emit gaseous ethylene (C₂H₄), which diffuses to adjacent green fruits, activates ripening enzymes (cell-wall softening and starch-to-sugar hydrolysis), and stimulates even more ethylene production in a self-amplifying positive feedback loop. Negative feedback would suppress rather than amplify ethylene release.",
      },
    ],
  },

  {
    id: "c3-c4-interaction-organisms-ecosystems-m3",
    title: "Paper 1A · Set 3: HL Extensions & Synoptic Synthesis",
    level: "HL",
    questions: [
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "integration-body-systems",
        strategy: "Apply PIN3 lateral efflux and basipetal IAA transport to barrier tests [HL]",
        question:
          "[HL] A botanist inserts an impermeable mica blade horizontally halfway into the *shaded* side of a coleoptile below the tip, then illuminates the shoot unilaterally from the left. What growth pattern results?",
        options: [
          "Strong bending toward the left light because PIN3 pumps bypass the mica completely",
          "Immediate death of the apical meristem due to blocked phloem sucrose translocation",
          "Rapid downward positive gravitropism because light converts auxin into ethylene",
          "Failure to bend toward the left light because shaded-side downward IAA flow is blocked",
        ],
        answerIndex: 3,
        hints: [
          "Light shines from the left, so auxin is pumped laterally by PIN3 proteins toward the shaded right side.",
          "If an impermeable mica barrier sits on the shaded right side below the tip, can IAA reach the elongation zone below?",
        ],
        explanation:
          "Unilateral light from the left directs IAA via PIN3 efflux carriers onto the shaded right side, but the impermeable mica barrier blocks basipetal IAA movement down that shaded flank, preventing acid-growth cell elongation below and stopping positive phototropic bending. Porous agar—unlike mica—would still permit IAA diffusion.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "integration-body-systems",
        strategy: "Contrast roles of cerebellum, medulla oblongata, and hypothalamus",
        question:
          "A patient suffers localized damage to the cerebellum while the medulla oblongata and spinal reflex arcs remain intact. Which deficit is most likely to appear?",
        options: [
          "Complete inability to withdraw a hand reflexively from a painfully hot surface",
          "Loss of smooth balance, posture, and coordinated voluntary motor precision",
          "Immediate cessation of resting diaphragmatic ventilation and cardiac pacemaker input",
          "Total absence of melatonin secretion from the pineal gland during nighttime darkness",
        ],
        answerIndex: 1,
        hints: [
          "Match each brain region to its distinct specialization: medulla (autonomic HR/breathing), cerebellum (balance/coordination), spinal cord (reflexes).",
          "Which function specifically relies on integrating proprioception with fine-motor output?",
        ],
        explanation:
          "The cerebellum coordinates posture, balance, and smooth voluntary movement; localized cerebellar injury causes ataxia (uncoordinated movement) without halting medulla-controlled breathing/heart rate or spinal pain-withdrawal reflexes.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "integration-body-systems",
        strategy: "Contrast shoot vs root auxin sensitivity in tropisms [HL]",
        question:
          "[HL] A germinating bean seedling is laid horizontally in complete darkness so gravity concentrates auxin along the lower side of both shoot and root. Why does the shoot curve upward while the root curves downward?",
        options: [
          "High auxin promotes cell elongation in shoots but inhibits cell elongation in roots",
          "Auxin accumulates on the lower side of roots but exclusively on the upper side of shoots",
          "Shoot cells lack plasma-membrane H⁺-ATPase pumps whereas root cells rely on expansins",
          "Gravity destroys PIN3 proteins in roots so only illuminated shoots can transport auxin",
        ],
        answerIndex: 0,
        hints: [
          "Auxin moves to the *lower* side of both horizontal organs due to statolith-guided PIN3 redistribution.",
          "Think about how high auxin concentration has opposite effects on elongation in shoot tissue vs root tissue.",
        ],
        explanation:
          "Gravity directs auxin to the lower side of both organs, but shoots and roots have different auxin sensitivity optima: high lower-side auxin stimulates elongation in shoots (bending upward, negative gravitropism) while inhibiting elongation in roots so the upper side grows faster (bending downward, positive gravitropism).",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "integration-body-systems",
        strategy: "Trace arterial baroreceptor negative feedback through the medulla",
        question:
          "When arterial blood pressure rises suddenly above normal resting levels, how do baroreceptors and the medulla oblongata restore homeostasis?",
        options: [
          "Sympathetic cardiac accelerator firing increases to raise sinoatrial node frequency",
          "Adrenal medulla secretes additional epinephrine to strengthen ventricular systole",
          "Parasympathetic vagus nerve impulses increase, releasing acetylcholine to slow heart rate",
          "Pineal melatonin secretion surges to constrict systemic skeletal-muscle arterioles",
        ],
        answerIndex: 2,
        hints: [
          "Restoring high blood pressure back down to normal requires *negative* feedback.",
          "Which autonomic cranial nerve slows the sinoatrial (SA) node using acetylcholine?",
        ],
        explanation:
          "Stretched carotid sinus and aortic arch baroreceptors signal the medulla oblongata to increase parasympathetic vagus nerve output (releasing acetylcholine at the SA node) and reduce sympathetic tone, slowing heart rate and lowering blood pressure back to its set point.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "defense-against-disease",
        strategy: "Evaluate zoonotic spillover mechanisms and pathogen transmission",
        question:
          "Which statement accurately characterizes a zoonotic infectious disease such as rabies or Ebola?",
        options: [
          "A genetic disorder inherited strictly through autosomal recessive human alleles",
          "A pathogen transmitted naturally from vertebrate animal hosts to human populations",
          "A bacterial infection that occurs exclusively inside sterile hospital intensive care units",
          "An autoimmune attack in which human plasma cells destroy host pancreatic beta cells",
        ],
        answerIndex: 1,
        hints: [
          "Notice the root 'zoo-' (animal) in the term zoonotic.",
          "Habitat loss and close wildlife–livestock–human interfaces heighten spillover risk.",
        ],
        explanation:
          "Zoonotic diseases (zoonoses) are infectious diseases transmitted naturally from non-human vertebrate animals to humans—such as rabies from dogs/bats, Ebola from fruit bats/primates, and avian influenza. Autoimmune and genetic conditions are non-infectious.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "defense-against-disease",
        strategy: "Link plasma cell ultrastructure to rapid immunoglobulin export",
        question:
          "An electron micrograph of a newly differentiated plasma cell shows vastly expanded rough endoplasmic reticulum and numerous Golgi stacks compared with a resting B-lymphocyte. What functional advantage does this ultrastructure provide?",
        options: [
          "Rapid anaerobic ATP generation during prolonged phagocytic engulfment of bacteria",
          "Intracellular storage of fibrin monomers ready for immediate arterial clot formation",
          "High-rate mitochondrial β-oxidation to power amoeboid migration across tight junctions",
          "Massive synthesis, folding, glycosylation, and exocytic secretion of specific antibodies",
        ],
        answerIndex: 3,
        hints: [
          "What macromolecule class are antibodies (immunoglobulins)?",
          "Which organelles synthesize, fold, package, and export secreted glycoproteins?",
        ],
        explanation:
          "Antibodies are large secreted glycoproteins; activated plasma cells expand their rough ER (ribosome-bound polypeptide synthesis and folding) and Golgi apparatus (modification and secretory vesicle packaging) to export thousands of identical antibody molecules per second. Plasma cells do not perform phagocytosis or store fibrin.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "transfers-energy-matter",
        strategy: "Chain two consecutive trophic transfer efficiencies sequentially",
        question:
          "In a freshwater lake, phytoplankton NPP is 25,000 kJ m⁻² yr⁻¹. Energy transfer efficiency is 12% from phytoplankton to zooplankton, and 8% from zooplankton to small predatory fish. How much energy reaches the predatory fish?",
        options: [
          "2,000 kJ m⁻² yr⁻¹",
          "250 kJ m⁻² yr⁻¹",
          "240 kJ m⁻² yr⁻¹",
          "500 kJ m⁻² yr⁻¹",
        ],
        answerIndex: 2,
        hints: [
          "First find zooplankton energy: 12% of 25,000 kJ m⁻² yr⁻¹.",
          "Next take 8% of that zooplankton value (do NOT average 12% and 8%!).",
        ],
        explanation:
          "Zooplankton receive {{25000 * 0.12 = 3000}} kJ m⁻² yr⁻¹, and predatory fish receive {{3000 * 0.08 = 240}} kJ m⁻² yr⁻¹. Using the generic 10% rule twice gives the close distractor 250 kJ m⁻² yr⁻¹ instead of the data-specific value 240.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "transfers-energy-matter",
        strategy: "Trace dissolved CO₂ carbonate equilibrium in ocean acidification",
        question:
          "Why does rising atmospheric CO₂ impair calcification in reef-building corals and shelled marine molluscs?",
        options: [
          "Dissolved CO₂ forms carbonic acid, releasing H⁺ that depletes carbonate ions (CO₃²⁻)",
          "Dissolved CO₂ raises seawater pH above 9.5, precipitating excess calcium hydroxide",
          "Dissolved CO₂ blocks zooxanthellae chlorophyll from absorbing blue underwater light",
          "Dissolved CO₂ converts insoluble limestone reefs directly into methane gas bubbles",
        ],
        answerIndex: 0,
        hints: [
          "Write the seawater reaction: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻.",
          "Extra H⁺ ions react with CO₃²⁻ to form HCO₃⁻, reducing the ion needed to make CaCO₃ shells.",
        ],
        explanation:
          "Absorbed atmospheric CO₂ reacts with seawater to form carbonic acid, releasing H⁺ ions that lower pH and bind carbonate ions (H⁺ + CO₃²⁻ → HCO₃⁻); with fewer free CO₃²⁻ ions available, corals and molluscs struggle to deposit calcium carbonate (CaCO₃) skeletons.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "transfers-energy-matter",
        strategy: "Contrast photoautotrophs, chemoautotrophs, detritivores, and saprotrophs",
        question:
          "Deep-sea hydrothermal vent ecosystems thrive at 2,500 m depth in complete darkness. Which primary producer group fixes inorganic CO₂ into organic biomass there?",
        options: [
          "Saprotrophic fungi digesting sunken whale bones via extracellular proteases",
          "Detritivorous polychaete worms ingesting dead pelagic plankton sediment",
          "Photoautotrophic red algae harvesting faint infrared geothermal glow",
          "Chemoautotrophic bacteria oxidizing hydrogen sulfide (H₂S) for chemical energy",
        ],
        answerIndex: 3,
        hints: [
          "No sunlight reaches 2,500 m depth, so photosynthesis cannot drive primary production.",
          "Which autotrophs oxidize inorganic chemical compounds like H₂S or Fe²⁺ to drive carbon fixation?",
        ],
        explanation:
          "At hydrothermal vents, chemoautotrophic bacteria (often living symbiotically inside giant tube worms) oxidize reduced inorganic molecules such as H₂S to generate ATP and fix CO₂ into organic molecules without sunlight. Saprotrophs and detritivores are heterotrophs, not primary producers.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "populations-communities-chi",
        strategy: "Diagnose direction of bias from trap-happy recapture behaviour",
        question:
          "Small forest mice quickly learn that capture traps contain tasty peanut butter, so previously marked mice re-enter traps far more readily than unmarked mice. How does this behaviour bias the Lincoln index estimate?",
        options: [
          "It causes an overestimate because fewer total mice are caught in the second sample",
          "It has no mathematical bias because marked and unmarked probabilities cancel out",
          "It causes an underestimate because recaptured marked mice m is artificially inflated",
          "It causes an overestimate because initial sample size M increases retroactively",
        ],
        answerIndex: 2,
        hints: [
          "If marked mice love the baited traps ('trap-happy'), does the recaptured marked count m become larger or smaller than expected by chance?",
          "Check {{N = (M * n) / m}} when denominator m is artificially high.",
        ],
        explanation:
          "Trap-happy marked mice enter traps disproportionately often, inflating the denominator m in {{N = (M * n) / m}} and therefore causing an **underestimate** of the true mouse population. Trap-shyness (avoiding traps after first capture) has the opposite effect, causing an overestimate.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "populations-communities-chi",
        strategy: "Compute full 2×2 χ² statistic and compare to critical value 3.841",
        question:
          "In 80 random woodland quadrats, observed counts for moss (A) and fern (B) are: Both present = 30, Moss only = 10, Fern only = 10, Neither = 30. What is the calculated χ² value and conclusion at p = 0.05 (critical value = 3.841)?",
        options: [
          "χ² = 10.0; fail to reject H₀ because both species have identical row totals",
          "χ² = 20.0; reject H₀ and conclude a significant positive species association",
          "χ² = 20.0; reject H₀ and conclude a significant negative species association",
          "χ² = 5.0; accept H₀ because degrees of freedom equal three in a 4-cell table",
        ],
        answerIndex: 1,
        hints: [
          "Each row total and column total is 40 out of 80, so every cell has expected frequency {{E = (40 * 40) / 80 = 20}}.",
          "Compute {{(O - E)^2 / E = 10^2 / 20 = 5}} for each of the four cells and sum them; check whether 'Both present' O (30) > E (20).",
        ],
        explanation:
          "All four cells have {{E = 20}} and {{|O - E| = 10}}, so each contributes {{100 / 20 = 5}}, giving {{χ^2 = 4 * 5 = 20.0}} with {{df = (2 - 1)(2 - 1) = 1}}. Since {{20.0 > 3.841}}, we reject H₀; because observed 'Both present' (30) exceeds expected (20), the association is significantly **positive**.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "populations-communities-chi",
        strategy: "Link enemy-release and rapid reproduction to invasive alien impact",
        question:
          "Why do invasive alien species such as cane toads or Indo-Pacific lionfish often outcompete endemic native species after introduction to a new region?",
        options: [
          "They escape co-evolved natural predators, parasites, and pathogens from their home range",
          "They immediately undergo polyploidy upon arrival, doubling photosynthetic productivity",
          "They always form obligate mutualisms with native apex predators upon first contact",
          "They convert all density-independent weather disasters into stable resource buffers",
        ],
        answerIndex: 0,
        hints: [
          "What normally keeps a species' population in check inside its native ecosystem?",
          "Without native predators or diseases, an introduced species can grow exponentially and monopolize resources.",
        ],
        explanation:
          "Introduced alien species typically arrive without the specialized predators, herbivores, parasites, and diseases that regulated them natively ('enemy release'), enabling rapid population growth that outcompetes or preys heavily upon naïve endemic species.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "defense-against-disease",
        strategy: "Compare herd-immunity percentages across two different R₀ values",
        question:
          "[HL] Pathogen X has {{R_0 = 10}} and Pathogen Y has {{R_0 = 2.5}}. How many percentage points higher is the herd-immunity threshold for Pathogen X than for Pathogen Y?",
        options: [
          "15 percentage points higher",
          "25 percentage points higher",
          "30 percentage points higher",
          "50 percentage points higher",
        ],
        answerIndex: 2,
        hints: [
          "Compute {{p_c = 1 - 1/R_0}} separately for Pathogen X ({{R_0 = 10}}) and Pathogen Y ({{R_0 = 2.5}}).",
          "For X: {{1 - 0.1 = 0.90}} (90%). For Y: {{1 - 1/2.5 = 1 - 0.4 = 0.60}} (60%). Find the difference.",
        ],
        explanation:
          "Pathogen X requires {{(1 - 1/10) * 100 = 90}}% immunity while Pathogen Y requires {{(1 - 1/2.5) * 100 = 60}}% immunity, a difference of {{90 - 60 = 30}} percentage points. Note that herd-immunity thresholds rise nonlinearly as {{R_0}} increases.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "integration-body-systems",
        strategy: "Trace circadian light signalling from retina to SCN to pineal gland [HL]",
        question:
          "[HL] Why does prolonged exposure to bright blue-wavelength phone screens at midnight delay sleep onset?",
        options: [
          "Blue light stimulates spinal reflex arcs that contract skeletal muscles involuntarily",
          "Blue light directly oxidizes circulating melatonin molecules inside retinal capillaries",
          "Blue light activates adrenal cortisol release through carotid chemoreceptor pH drops",
          "Blue light stimulates retinal ganglion cells signalling the SCN to inhibit pineal melatonin",
        ],
        answerIndex: 3,
        hints: [
          "Which brain structure acts as the master circadian pacemaker inside the hypothalamus?",
          "Light signals from specialized retinal ganglion cells suppress melatonin output from the pineal gland.",
        ],
        explanation:
          "Blue light activates melanopsin-containing retinal ganglion cells, which signal the hypothalamic suprachiasmatic nucleus (SCN) to inhibit pineal gland melatonin secretion, delaying the circadian sleep drive. Light does not chemically oxidize melatonin in blood.",
      },
      {
        id: "c3-c4-interaction-organisms-ecosystems-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "populations-communities-chi",
        strategy: "Separate statistical association from causal mutualism in χ² interpretation",
        question:
          "[HL] A field survey of 120 coastal quadrats finds a statistically significant positive χ² association ({{χ^2 = 16.4, p < 0.001}}) between glasswort (*Salicornia*) and sea purslane (*Halimione*). Which conclusion is scientifically valid?",
        options: [
          "The two plant species definitively share an obligate nutrient-exchange mutualism",
          "The two species co-occur more often than chance, possibly due to shared saline niche",
          "Glasswort actively attracts sea purslane seeds through positive ethylene feedback",
          "The null hypothesis of independence should be accepted because χ² exceeds 3.841",
        ],
        answerIndex: 1,
        hints: [
          "Remember that statistical correlation or association does not automatically prove direct biological mutualism.",
          "Could two halophyte plants co-occur simply because both tolerate salty tidal mud?",
        ],
        explanation:
          "Because {{χ^2 = 16.4 > 3.841}}, we reject H₀ and conclude the two species co-occur significantly more often than random chance; however, χ² alone cannot distinguish direct mutualism from shared abiotic tolerance (both are salt-marsh halophytes requiring saline mud). Experimental removal trials would be needed to test mutualism.",
      },
    ],
  },
];
