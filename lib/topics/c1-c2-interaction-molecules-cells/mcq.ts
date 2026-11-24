import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: SL CORE — ENZYMES, RESPIRATION, PHOTOSYNTHESIS & NEURONS
  // answerIndex: [2, 0, 3, 1, 0, 2, 1, 3, 0, 2, 3, 1, 2, 0, 3] (4,3,4,4)
  // =========================================================================
  {
    id: "c1-c2-interaction-molecules-cells-m1",
    title: "Paper 1 · Core Enzymes, Bioenergetics & Neurons [SL]",
    level: "SL",
    questions: [
      {
        id: "c1-c2-interaction-molecules-cells-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "enzymes-metabolism",
        question: "Which statement accurately describes how a globular enzyme accelerates a biochemical reaction?",
        options: [
          "It supplies extra thermal kinetic energy to push reactants over the barrier",
          "It shifts the equilibrium position to make the net free-energy change larger",
          "It lowers the activation energy required to form the unstable transition state",
          "It is permanently consumed as a reactant during condensation or hydrolysis",
        ],
        answerIndex: 2,
        explanation:
          "Enzymes bind substrates at their active site and stabilise the transition state, lowering activation energy (Ea) so more collisions succeed at body temperature. They do not supply heat, alter ΔG, or get consumed in the reaction.",
        hints: [
          "Compare the uncatalysed and catalysed curves on a free-energy reaction profile.",
          "Both curves start and finish at the exact same energy levels, so only the peak height changes.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "enzymes-metabolism",
        question: "What distinguishes the induced-fit model of enzyme catalysis from the older lock-and-key model?",
        options: [
          "Initial substrate binding causes a slight conformational change in the active site",
          "The active site accepts virtually any macromolecule regardless of 3D shape",
          "Peptide bonds in the enzyme backbone hydrolyse temporarily during substrate entry",
          "Only catabolic enzymes alter their shape while anabolic enzymes stay rigid",
        ],
        answerIndex: 0,
        explanation:
          "In the induced-fit model, initial binding triggers a subtle conformational shift in both the enzyme's active site and the substrate, straining target bonds to lower Ea. Enzymes remain highly specific and never break their own peptide bonds.",
        hints: [
          "Think about how a flexible glove adapts to a hand compared with a rigid metal keyhole.",
          "Does the enzyme change primary covalent structure, or subtle 3D conformation?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "enzymes-metabolism",
        question:
          "In an enzyme assay at 37 °C, salivary amylase hydrolyses 28.0 mg of starch in the first 40 seconds. What is the initial rate of starch hydrolysis in {{mg min^(-1)}}?",
        options: [
          "18.7 mg min⁻¹",
          "28.0 mg min⁻¹",
          "36.0 mg min⁻¹",
          "42.0 mg min⁻¹",
        ],
        answerIndex: 3,
        explanation:
          "Convert 40 seconds into minutes: 40 / 60 = 2/3 min. Divide mass hydrolysed by time in minutes: 28.0 ÷ (2/3) = 28.0 × 1.5 = 42.0 mg min⁻¹. Dividing 28.0 by 1.5 instead gives the common reciprocal slip of 18.7 mg min⁻¹.",
        hints: [
          "First convert 40 s into a fraction of a minute.",
          "Divide 28.0 mg by (40 / 60) min.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "enzymes-metabolism",
        question: "Why does enzyme reaction rate fall sharply when temperature rises well above the enzyme's optimum?",
        options: [
          "Covalent peptide bonds between adjacent amino acids snap due to heat energy",
          "Non-covalent bonds stabilising tertiary structure break, distorting the active site",
          "Substrate molecules lose kinetic energy and stop colliding with enzyme active sites",
          "The enzyme irreversibly converts into a competitive inhibitor blocking its own site",
        ],
        answerIndex: 1,
        explanation:
          "Excess thermal vibration disrupts weak hydrogen bonds, ionic interactions, and hydrophobic interactions maintaining 3D tertiary structure, denaturing the active site. Covalent peptide bonds in the primary structure remain intact at physiological denaturation temperatures.",
        hints: [
          "Distinguish primary structure (peptide bonds) from tertiary structure (hydrogen, ionic, hydrophobic bonds).",
          "At high temperatures, kinetic energy actually increases — what breaks instead?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Outline",
        guideRef: "enzymes-metabolism",
        question: "What is a major industrial advantage of using immobilized lactase beads to produce lactose-free milk?",
        options: [
          "The enzyme beads can be recovered easily, reused, and kept out of the final milk",
          "Immobilization removes the enzyme's need for any optimum pH or temperature range",
          "Alginate beads convert lactose directly into sucrose without releasing galactose",
          "Immobilized enzymes permanently increase the free-energy yield of hydrolysis",
        ],
        answerIndex: 0,
        explanation:
          "Immobilizing lactase in inert calcium alginate beads lets milk flow continuously over the catalyst so the enzyme is neither lost nor left contaminating the product, and can be reused across batches.",
        hints: [
          "Think about separating soluble enzyme from liquid milk after processing.",
          "Immobilization improves practical handling and stability, not thermodynamics.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "cell-respiration-photosynthesis",
        question: "How do the end products of anaerobic respiration differ between human skeletal muscle cells and yeast cells?",
        options: [
          "Muscle cells produce ethanol plus carbon dioxide while yeast produces lactate only",
          "Muscle cells produce carbon dioxide plus water while yeast produces lactate only",
          "Muscle cells produce lactate without carbon dioxide while yeast produces ethanol plus carbon dioxide",
          "Muscle cells produce pyruvate plus oxygen while yeast produces ethanol without carbon dioxide",
        ],
        answerIndex: 2,
        explanation:
          "Human muscle cells reduce pyruvate to lactate (3C → 3C, releasing zero CO₂), whereas yeast decarboxylates pyruvate into ethanal and reduces it to ethanol (2C) plus CO₂ (1C). Both pathways yield 2 net ATP per glucose.",
        hints: [
          "Count the carbons in pyruvate (3C), lactate (3C), and ethanol (2C).",
          "Where does the missing carbon go when yeast turns 3C pyruvate into 2C ethanol?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "cell-respiration-photosynthesis",
        question:
          "During thin-layer chromatography of a leaf extract, the solvent front moves 9.0 cm from the origin and chlorophyll a moves 5.4 cm. What is the {{R_f}} value of chlorophyll a?",
        options: [
          "0.40",
          "0.60",
          "1.67",
          "3.60",
        ],
        answerIndex: 1,
        explanation:
          "The retention factor is Rf = (distance travelled by pigment) ÷ (distance travelled by solvent front) = 5.4 / 9.0 = 0.60. Dividing solvent distance by pigment distance gives the impossible value 1.67 (Rf must always be less than 1).",
        hints: [
          "Remember that Rf is always a dimensionless ratio between 0 and 1.",
          "Divide the pigment distance (5.4 cm) by the solvent front distance (9.0 cm).",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "cell-respiration-photosynthesis",
        question:
          "In a closed respirometer containing germinating mung-bean seeds, why is a pellet of potassium hydroxide (KOH) placed inside the sealed chamber?",
        options: [
          "To supply extra oxygen gas so the germinating seeds respire aerobically",
          "To absorb water vapour produced during transpiration of the seedlings",
          "To neutralise lactic acid secreted into the chamber during anaerobic bursts",
          "To absorb respired carbon dioxide so net volume decrease equals oxygen uptake",
        ],
        answerIndex: 3,
        explanation:
          "During aerobic respiration of carbohydrates, 6 O₂ are consumed for every 6 CO₂ released — giving zero net gas volume change unless CO₂ is removed. KOH absorbs all CO₂ so the manometer shift directly measures O₂ consumption.",
        hints: [
          "Look at the balanced aerobic respiration equation: compare moles of O₂ taken in and CO₂ given out.",
          "Without a CO₂ absorber, would the total gas volume change at all?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "cell-respiration-photosynthesis",
        question:
          "A plant's rate of photosynthesis increases linearly with rising light intensity at first, then levels off into a flat plateau despite further increases in light. What explains the plateau region?",
        options: [
          "Another factor such as carbon dioxide concentration or temperature has become limiting",
          "Chlorophyll molecules reflect all incoming blue and red photons above saturation",
          "Stomata close automatically whenever light intensity exceeds the compensation point",
          "Cellular respiration stops completely once chloroplasts reach full photon absorption",
        ],
        answerIndex: 0,
        explanation:
          "Along the rising slope, light intensity is the limiting factor. Once the curve flattens, raising light no longer increases the rate because another requirement — typically CO₂ supply or temperature-controlled enzyme kinetics — now limits photosynthesis.",
        hints: [
          "Recall Blackman's law of limiting factors on a rate vs factor graph.",
          "If increasing the x-axis variable no longer raises y, can the x-axis variable still be limiting?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "cell-respiration-photosynthesis",
        question: "How do the absorption spectrum of chlorophyll and the action spectrum of photosynthesis compare across visible light?",
        options: [
          "Both peak strongly in the green region around 550 nm and drop to zero in red light",
          "Absorption peaks in blue and red light whereas the action spectrum stays flat across all colours",
          "Both peak in blue and red wavelengths with a trough in green, though accessory pigments broaden the action spectrum",
          "Absorption occurs only in ultraviolet light whereas the action spectrum peaks solely in orange light",
        ],
        answerIndex: 2,
        explanation:
          "Chlorophyll a and b absorb strongly in blue (~430–450 nm) and red (~650–680 nm) and reflect green (~550 nm), closely matching the peaks and trough of the action spectrum. Accessory pigments (carotenoids, xanthophylls) harvest additional blue-green wavelengths.",
        hints: [
          "Why do healthy leaves look green to human eyes?",
          "Compare the wavelengths absorbed by pigments with the wavelengths that drive O₂ production.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "neural-signaling",
        question: "Which combination of membrane transport processes maintains a neuron's resting potential of approximately −70 mV?",
        options: [
          "Active pumping of 3 K⁺ out and 2 Na⁺ in, combined with open Na⁺ leak channels",
          "Passive diffusion of Cl⁻ out of the axon, combined with closed K⁺ leak channels",
          "Active pumping of Ca²⁺ into synaptic vesicles, combined with open voltage-gated Na⁺ channels",
          "Active pumping of 3 Na⁺ out and 2 K⁺ in, combined with open K⁺ leak channels",
        ],
        answerIndex: 3,
        explanation:
          "The Na⁺/K⁺ ATPase actively exports 3 Na⁺ for every 2 K⁺ imported per ATP, while numerous open K⁺ leak channels let K⁺ diffuse outward down its gradient, leaving the cytoplasm roughly −70 mV relative to extracellular fluid.",
        hints: [
          "Remember the stoichiometry of the Na⁺/K⁺ pump: which ion moves out in groups of 3?",
          "At rest, the membrane is far more permeable to K⁺ than to Na⁺.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "neural-signaling",
        question:
          "An action potential propagates down a 1.5 m myelinated motor axon at a constant conduction velocity of {{75 m s^(-1)}}. How long does the impulse take to travel the full length of the axon?",
        options: [
          "5.0 ms",
          "20 ms",
          "50 ms",
          "112.5 ms",
        ],
        answerIndex: 1,
        explanation:
          "Time = distance ÷ speed = 1.5 m ÷ 75 m s⁻¹ = 0.020 s. Multiplying by 1000 converts seconds to milliseconds: 0.020 × 1000 = 20 ms.",
        hints: [
          "Use t = d / v with d = 1.5 m and v = 75 m s⁻¹.",
          "Convert your answer from seconds to milliseconds by multiplying by 1000.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "neural-signaling",
        question: "During an action potential, what ion movement directly causes the rapid repolarization phase from +30 mV back toward −70 mV?",
        options: [
          "Rapid influx of Na⁺ ions through open voltage-gated Na⁺ channels",
          "Active transport of 3 Na⁺ ions outward by the Na⁺/K⁺ ATPase pump",
          "Rapid efflux of K⁺ ions outward through open voltage-gated K⁺ channels",
          "Rapid influx of Ca²⁺ ions across the myelin sheath internodes",
        ],
        answerIndex: 2,
        explanation:
          "At +30 mV, voltage-gated Na⁺ channels inactivate and voltage-gated K⁺ channels open, allowing K⁺ ions to diffuse rapidly out of the axon down their electrochemical gradient — repolarizing the membrane.",
        hints: [
          "Think about which positive ion is concentrated INSIDE the axon and exits to make the inside negative again.",
          "Is repolarization driven by fast passive channels or the slower active pump?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Outline",
        guideRef: "neural-signaling",
        question: "Why does myelination increase the conduction speed of an action potential along a mammalian axon?",
        options: [
          "Myelin insulates internodes so local currents jump rapidly between nodes of Ranvier",
          "Myelin secretes acetylcholine continuously along the entire axon plasma membrane",
          "Myelin widens the synaptic cleft so neurotransmitter diffuses at higher kinetic energy",
          "Myelin increases the amplitude of each action potential from +30 mV up to +120 mV",
        ],
        answerIndex: 0,
        explanation:
          "Lipid-rich Schwann cell myelin prevents transmembrane ion leakage along internodes, forcing depolarization to occur only at gaps (nodes of Ranvier) via fast saltatory conduction without altering spike amplitude.",
        hints: [
          "Recall the meaning of 'saltatory' (from Latin saltare, to leap).",
          "Where are voltage-gated Na⁺ channels concentrated along a myelinated axon?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "neural-signaling",
        question: "At a cholinergic synapse, what immediately triggers synaptic vesicles to fuse with the presynaptic membrane and release acetylcholine?",
        options: [
          "Binding of acetylcholinesterase to receptors on the presynaptic terminal",
          "Efflux of K⁺ ions from the postsynaptic dendrite across the synaptic cleft",
          "Direct electrical fusion of presynaptic and postsynaptic phospholipid bilayers",
          "Influx of Ca²⁺ ions through voltage-gated calcium channels in the presynaptic knob",
        ],
        answerIndex: 3,
        explanation:
          "Arrival of an action potential depolarizes the presynaptic terminal, opening voltage-gated Ca²⁺ channels. Ca²⁺ diffuses inward and triggers vesicle fusion (exocytosis), releasing ACh into the synaptic cleft.",
        hints: [
          "Which divalent cation links electrical arrival at the axon terminal to chemical exocytosis?",
          "Trace the exact event immediately between depolarization of the presynaptic knob and vesicle fusion.",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER 2: MIXED SL & HL — BIOENERGETICS, KINETICS, SIGNALING & SYNAPSES
  // answerIndex: [1, 3, 0, 2, 1, 0, 3, 2, 1, 3, 0, 1, 2, 3, 0] (4,4,3,4)
  // =========================================================================
  {
    id: "c1-c2-interaction-molecules-cells-m2",
    title: "Paper 2 · Kinetics, Respiration, Signaling & Synapses [SL/HL]",
    level: "SL",
    questions: [
      {
        id: "c1-c2-interaction-molecules-cells-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "enzymes-metabolism",
        question:
          "An enzyme-catalysed reaction is run with excess substrate at its optimum temperature and pH. If the researcher doubles the enzyme concentration while keeping all other conditions constant, what happens to the initial reaction rate?",
        options: [
          "It remains completely unchanged because substrate is already in excess",
          "It approximately doubles because twice as many active sites are available",
          "It drops by half because enzyme molecules competitively inhibit one another",
          "It falls to zero because excess enzyme lowers the optimum pH of the solution",
        ],
        answerIndex: 1,
        explanation:
          "When substrate is in excess (saturating [S]), active-site availability limits the rate. Doubling enzyme concentration doubles the number of active sites forming enzyme–substrate complexes per unit time, doubling initial rate.",
        hints: [
          "When [S] is saturating, what is the limiting factor?",
          "Twice as many enzymes with plenty of substrate means twice as many collisions at active sites.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "enzymes-metabolism",
        question: "How does a reversible competitive inhibitor affect {{V_max}} and apparent {{K_m}} on a Michaelis–Menten curve?",
        options: [
          "It lowers Vmax permanently while leaving apparent Km completely unchanged",
          "It lowers both Vmax and apparent Km by binding covalently to the allosteric site",
          "It raises Vmax above normal while lowering apparent Km at all substrate concentrations",
          "It leaves Vmax unchanged at high substrate concentrations while raising apparent Km",
        ],
        answerIndex: 3,
        explanation:
          "Because a competitive inhibitor competes with substrate for the active site, high [S] outcompetes it so Vmax is still reached; however, more substrate is needed to hit half-Vmax, so apparent Km increases.",
        hints: [
          "Ask what happens when substrate molecules hugely outnumber inhibitor molecules.",
          "Does the enzyme still reach the same maximum plateau, or a lower ceiling?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "enzymes-metabolism",
        question:
          "In the bacterial pathway converting threonine to isoleucine, rising isoleucine levels slow down the first enzyme (threonine deaminase). What type of regulation is this?",
        options: [
          "End-product feedback inhibition via reversible allosteric non-competitive binding",
          "Irreversible mechanism-based inhibition via covalent active-site destruction",
          "Competitive inhibition where isoleucine mimics glucose at the active site",
          "Thermal denaturation triggered by heat released during amino-acid synthesis",
        ],
        answerIndex: 0,
        explanation:
          "Isoleucine binds reversibly to an allosteric site on threonine deaminase, altering the active site's conformation to throttle the pathway when isoleucine is abundant — classic end-product feedback inhibition.",
        hints: [
          "Does isoleucine bind the active site or a separate regulatory (allosteric) site on Enzyme 1?",
          "Must the pathway be able to switch back on when isoleucine levels fall?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "enzymes-metabolism",
        question: "Why does the antibiotic penicillin kill dividing bacteria without harming human cells?",
        options: [
          "Penicillin competitively inhibits human ATP synthase only inside red blood cells",
          "Penicillin hydrolyses bacterial DNA polymerase while ignoring eukaryotic histones",
          "Penicillin irreversibly inhibits bacterial transpeptidase needed for peptidoglycan walls",
          "Penicillin blocks human voltage-gated Na⁺ channels while activating bacterial flagella",
        ],
        answerIndex: 2,
        explanation:
          "Penicillin is a mechanism-based irreversible inhibitor that covalently binds bacterial transpeptidase, blocking cross-linking in peptidoglycan cell walls so growing bacteria burst osmotically. Human cells lack peptidoglycan walls and transpeptidase.",
        hints: [
          "Which structural feature do bacteria possess that animal cells completely lack?",
          "Recall penicillin's target enzyme involved in cell-wall cross-linking.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "enzymes-metabolism",
        question:
          "Without an inhibitor, an enzyme shows an initial rate of 40 μmol min⁻¹. After adding a fixed dose of inhibitor at the same substrate concentration, the rate drops to 14 μmol min⁻¹. What is the percentage inhibition?",
        options: [
          "35%",
          "65%",
          "26%",
          "74%",
        ],
        answerIndex: 1,
        explanation:
          "Percentage inhibition = ((v₀ − vᵢ) / v₀) × 100 = ((40 − 14) / 40) × 100 = (26 / 40) × 100 = 65%. Note that 35% is the remaining activity (14 / 40 × 100), not the percentage inhibited.",
        hints: [
          "Find the reduction in rate first: 40 − 14 = 26 μmol min⁻¹.",
          "Divide the reduction (26) by the original uninhibited rate (40), then multiply by 100.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "cell-respiration-photosynthesis",
        question: "Why do ecologists use Free-Air {{CO_2}} Enrichment (FACE) rings in open forests rather than relying solely on sealed greenhouse pots?",
        options: [
          "FACE tests elevated CO₂ under natural light, soil nutrients, rainfall, and root competition",
          "FACE eliminates cellular respiration completely so gross photosynthesis is measured directly",
          "FACE increases atmospheric oxygen concentration to 40% to accelerate RuBisCO fixation",
          "FACE prevents any insect herbivores or mycorrhizal fungi from interacting with tree roots",
        ],
        answerIndex: 0,
        explanation:
          "Open-air FACE rings expose intact field ecosystems to elevated CO₂ without artificial pot boundaries, greenhouse glass shading, or altered humidity, revealing whether water or nitrogen limits long-term carbon uptake.",
        hints: [
          "Think about what artificial walls and small pots distort in greenhouse experiments.",
          "What realistic abiotic and biotic variables remain intact in an open forest?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "cell-respiration-photosynthesis",
        question: "During intense sprinting when oxygen delivery lags behind demand, why must muscle cells convert pyruvate into lactate rather than letting pyruvate accumulate?",
        options: [
          "Converting pyruvate to lactate directly generates 32 additional ATP inside mitochondria",
          "Lactate is required as the direct terminal electron acceptor of the inner membrane ETC",
          "Lactate immediately diffuses into chloroplasts to regenerate RuBP during exercise",
          "Reducing pyruvate to lactate oxidises NADH back to NAD⁺ so glycolysis can continue",
        ],
        answerIndex: 3,
        explanation:
          "Glycolysis requires a continuous supply of oxidised NAD⁺ to accept electrons from triose phosphate. Converting pyruvate to lactate regenerates NAD⁺ from NADH, keeping glycolysis producing 2 net ATP per glucose anaerobically.",
        hints: [
          "Which coenzyme gets reduced to NADH during glycolysis and would quickly run out without O₂?",
          "Does the pyruvate → lactate step make ATP itself, or enable glycolysis to keep running?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "cell-respiration-photosynthesis",
        question: "What is the exact role of molecular oxygen ({{O_2}}) in aerobic cellular respiration?",
        options: [
          "It splits glucose into two triose phosphate molecules during glycolysis in the cytosol",
          "It binds directly to oxaloacetate in the Krebs cycle to release carbon dioxide",
          "It acts as the terminal electron acceptor at the end of the ETC, combining with H⁺ to form water",
          "It phosphorylates ADP directly into ATP without any involvement of ATP synthase",
        ],
        answerIndex: 2,
        explanation:
          "At complex IV of the inner mitochondrial membrane, O₂ accepts spent electrons from the electron transport chain and combines with matrix protons (½ O₂ + 2e⁻ + 2H⁺ → H₂O), keeping electron flow and proton pumping running.",
        hints: [
          "In which stage and compartment of aerobic respiration is O₂ actually consumed?",
          "What molecule is formed when O₂ accepts electrons and protons at the end of the ETC?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "cell-respiration-photosynthesis",
        question: "During the light-dependent reactions of photosynthesis, what is the immediate purpose of photolysis of water at Photosystem II?",
        options: [
          "To fix atmospheric carbon dioxide directly into glycerate 3-phosphate in the stroma",
          "To supply replacement electrons to excited PSII chlorophyll while releasing H⁺ and O₂",
          "To hydrolyse ATP into ADP so protons can be actively pumped out of the thylakoid lumen",
          "To reduce RuBP directly into glucose without using the Calvin cycle enzymes",
        ],
        answerIndex: 1,
        explanation:
          "Photolysis splits water (2 H₂O → 4 H⁺ + 4 e⁻ + O₂) in the thylakoid lumen, replacing electrons photo-excited out of PSII, adding to the luminal proton gradient, and releasing O₂ as a by-product.",
        hints: [
          "When light excites electrons out of Photosystem II, where do replacement electrons come from?",
          "Photolysis occurs in the thylakoid space — what gas is released as a by-product?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "cell-respiration-photosynthesis",
        question:
          "Inside the mitochondrial matrix, how many molecules of {{CO_2}} and NADH are produced in total by the link reaction and Krebs cycle combined from **one molecule of glucose**?",
        options: [
          "3 CO₂ and 4 NADH",
          "4 CO₂ and 6 NADH",
          "6 CO₂ and 10 NADH",
          "6 CO₂ and 8 NADH",
        ],
        answerIndex: 3,
        explanation:
          "One glucose yields 2 pyruvates entering the matrix. Link reaction (×2): 2 CO₂ + 2 NADH. Krebs cycle (×2): 4 CO₂ + 6 NADH. Combined mitochondrial matrix total = 6 CO₂ and 8 NADH (the remaining 2 NADH are made in cytosol glycolysis).",
        hints: [
          "Remember that 1 glucose produces TWO pyruvates, so double both the link reaction and the Krebs cycle.",
          "Do NOT include the 2 NADH produced in the cytosol during glycolysis — the question specifies inside the mitochondrial matrix.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "chemical-signaling-hl",
        question: "Why must polar hormones such as epinephrine and insulin bind transmembrane receptors rather than intracellular nuclear receptors?",
        options: [
          "Their hydrophilic structure prevents simple diffusion across the hydrophobic bilayer core",
          "They are larger than nuclear pores and therefore cannot bind regulatory DNA sequences",
          "Intracellular cytoplasm rapidly hydrolyses all hormones into fatty acids upon entry",
          "Transmembrane receptors are the only proteins in cells capable of binding ligands specifically",
        ],
        answerIndex: 0,
        explanation:
          "The non-polar hydrocarbon tails inside the phospholipid bilayer repel polar and charged molecules like epinephrine and polypeptide insulin, requiring transmembrane receptors to transduce signals across the membrane.",
        hints: [
          "Recall the chemical property of the core of a phospholipid bilayer.",
          "Which molecules cross membranes by simple diffusion: hydrophilic or hydrophobic?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Outline",
        guideRef: "chemical-signaling-hl",
        question: "In the marine bacterium *Vibrio fischeri*, what directly triggers the population to switch on bioluminescence genes via quorum sensing?",
        options: [
          "Direct synaptic transmission of acetylcholine between adjacent bacterial flagella",
          "Accumulation of secreted autoinducer above a threshold at high bacterial cell density",
          "Depletion of dissolved oxygen below 1% inside the squid's digestive stomach",
          "Binding of steroid hormones released by deep-sea predators into the seawater",
        ],
        answerIndex: 1,
        explanation:
          "Each Vibrio fischeri cell secretes autoinducer. Only when population density is high does extracellular autoinducer cross the threshold needed to enter cells, bind intracellular receptors, and activate luciferase gene transcription.",
        hints: [
          "What does the word 'quorum' mean in a meeting — a minimum number of members present!",
          "How do bacteria 'count' how many neighbours are nearby?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "neural-signaling",
        question: "What prevents an action potential from travelling backward along an axon toward the cell body?",
        options: [
          "Acetylcholinesterase along the axon destroys sodium ions immediately behind the spike",
          "Myelin sheaths act as one-way mechanical valves blocking backward fluid diffusion",
          "Voltage-gated Na⁺ channels just behind the impulse remain inactivated during the refractory period",
          "The Na⁺/K⁺ pump reverses direction behind the impulse to force K⁺ back into the axon",
        ],
        answerIndex: 2,
        explanation:
          "Immediately after depolarizing, voltage-gated Na⁺ channels enter an inactivated state (refractory period) and cannot reopen even if local currents spread backward, guaranteeing strictly unidirectional propagation.",
        hints: [
          "Think about the state of voltage-gated Na⁺ channels right after peak depolarization.",
          "What is the name of the brief recovery window when that membrane patch cannot fire again?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "neural-signaling",
        question:
          "A neurotoxin specifically inhibits the enzyme acetylcholinesterase (AChE) inside a neuromuscular junction. What is the immediate effect on the postsynaptic muscle fibre?",
        options: [
          "Acetylcholine cannot be packaged into vesicles so the muscle becomes immediately flaccid",
          "Voltage-gated Ca²⁺ channels in the presynaptic knob stay permanently closed",
          "Postsynaptic Cl⁻ channels open continuously, hyperpolarizing the muscle to −95 mV",
          "Acetylcholine persists in the cleft, causing continuous Na⁺ influx and sustained contraction",
        ],
        answerIndex: 3,
        explanation:
          "Without AChE hydrolysing acetylcholine into acetate and choline, ACh remains bound to postsynaptic ligand-gated Na⁺ channels, producing continuous depolarization and spastic/tetanic muscle contraction.",
        hints: [
          "What is the normal job of acetylcholinesterase in the synaptic cleft?",
          "If ACh is never cleared, what stays open on the postsynaptic membrane?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "neural-signaling",
        question: "How does a local anaesthetic such as lidocaine prevent a patient from feeling pain during minor dental surgery?",
        options: [
          "It blocks voltage-gated Na⁺ channels in sensory axons so action potentials cannot propagate",
          "It destroys myelin sheaths around pain fibres permanently so impulses leak away",
          "It hydrolyses all neurotransmitters inside the cerebral cortex before pain is processed",
          "It opens postsynaptic Ca²⁺ channels continuously to exhaust cellular ATP reserves",
        ],
        answerIndex: 0,
        explanation:
          "Local anaesthetics bind and block voltage-gated Na⁺ channels in peripheral nociceptor axons, stopping depolarization so pain action potentials never reach the central nervous system.",
        hints: [
          "Which channel must open first for an axon to depolarize past −55 mV?",
          "Local anaesthetics act reversibly on peripheral sensory nerves, not by destroying myelin or brain tissue.",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER 3: HL DEEP DIVE — INHIBITION, CHEMIOSMOSIS, SIGNALING & INTEGRATION
  // answerIndex: [3, 1, 2, 0, 3, 1, 0, 2, 1, 0, 2, 3, 1, 2, 0] (4,4,4,3)
  // =========================================================================
  {
    id: "c1-c2-interaction-molecules-cells-m3",
    title: "Set 3 · HL Inhibition, Chemiosmosis & Cell Signaling [HL]",
    level: "HL",
    questions: [
      {
        id: "c1-c2-interaction-molecules-cells-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "enzymes-metabolism",
        question:
          "An enzyme has {{V_max = 120 μmol min^(-1)}} and {{K_m = 10 mmol dm^(-3)}} without inhibitor. With Inhibitor Z present, {{V_max}} drops to {{60 μmol min^(-1)}} while {{K_m}} stays at {{10 mmol dm^(-3)}}. Which mechanism best describes Inhibitor Z?",
        options: [
          "Competitive binding to the active site that is displaced by excess substrate",
          "Allosteric activation that increases substrate affinity without changing rate",
          "Denaturation by low temperature that lowers kinetic collisions proportionally",
          "Non-competitive binding to an allosteric site reducing functional enzyme molecules",
        ],
        answerIndex: 3,
        explanation:
          "A drop in Vmax (120 → 60) with unchanged Km (10 mmol dm⁻³) is the diagnostic kinetic signature of pure non-competitive inhibition: binding at an allosteric site knocks out a fraction of enzyme molecules regardless of [S].",
        hints: [
          "Check both parameters: Vmax halved, while Km stayed identical.",
          "Which type of inhibitor lowers Vmax because substrate cannot outcompete it?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "enzymes-metabolism",
        question: "How do statin medications lower blood cholesterol synthesis in liver cells?",
        options: [
          "They irreversibly cross-link dietary lipids in the stomach lumen before absorption",
          "They competitively inhibit HMG-CoA reductase by binding its active site reversibly",
          "They bind intracellular steroid receptors to stop transcription of insulin genes",
          "They act as non-competitive inhibitors of catalase inside hepatocyte peroxisomes",
        ],
        answerIndex: 1,
        explanation:
          "Statins share structural similarity with HMG-CoA and reversibly occupy the active site of HMG-CoA reductase — the rate-limiting enzyme in cholesterol biosynthesis — acting as competitive inhibitors.",
        hints: [
          "Recall the specific IB Biology HL clinical example of competitive inhibition.",
          "Which enzyme catalyses the key early step of cholesterol synthesis?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "cell-respiration-photosynthesis",
        question: "Why does complete aerobic oxidation of 1 gram of lipid release roughly twice as much energy as 1 gram of carbohydrate?",
        options: [
          "Lipids enter glycolysis directly in the cytosol without requiring mitochondrial oxygen",
          "Fatty acids contain higher proportions of oxygen atoms, lowering activation energy",
          "Fatty acids have far more reduced C–H bonds per gram, generating more NADH and FADH₂",
          "Lipid molecules hydrolyse directly into ATP without passing through the Krebs cycle",
        ],
        answerIndex: 2,
        explanation:
          "Long hydrocarbon fatty-acid chains are highly reduced (rich in C–H bonds and low in oxygen), yielding numerous 2C acetyl-CoA units and far more NADH and FADH₂ per gram to drive oxidative phosphorylation.",
        hints: [
          "Compare the chemical structure of a saturated fatty acid (mostly –CH₂–) with glucose (CH₂O).",
          "More reduced C–H bonds mean more high-energy electrons donated to NAD⁺ and FAD.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "cell-respiration-photosynthesis",
        question:
          "In the Calvin cycle, how many molecules of ATP and NADPH are consumed in total to achieve a net export of **3 molecules of triose phosphate (TP)**?",
        options: [
          "27 ATP and 18 NADPH",
          "18 ATP and 12 NADPH",
          "9 ATP and 6 NADPH",
          "36 ATP and 24 NADPH",
        ],
        answerIndex: 0,
        explanation:
          "Each net TP (3C) requires fixing 3 CO₂, which consumes 6 ATP + 6 NADPH (reducing 6 GP → 6 TP) plus 3 ATP (regenerating 3 RuBP from 5 TP) = 9 ATP and 6 NADPH. For 3 net TP: 3 × 9 = 27 ATP and 3 × 6 = 18 NADPH.",
        hints: [
          "Start with 1 net TP: 3 CO₂ fixed uses 6 ATP + 6 NADPH for reduction, plus 3 ATP for RuBP regeneration.",
          "Multiply the 1-TP budget (9 ATP, 6 NADPH) by 3.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "cell-respiration-photosynthesis",
        question:
          "A suspension of illuminated algae is suddenly deprived of {{CO_2}} while bright light continues. What happens immediately to the concentrations of RuBP and glycerate 3-phosphate (GP) in the stroma?",
        options: [
          "RuBP falls rapidly while GP rises sharply because photolysis accelerates",
          "Both RuBP and GP fall immediately to zero because ATP production stops",
          "Both RuBP and GP increase rapidly because RuBisCO switches to making glucose",
          "RuBP rises while GP falls because RuBP is still regenerated but not fixed with CO₂",
        ],
        answerIndex: 3,
        explanation:
          "Without CO₂, RuBisCO cannot convert RuBP into GP, so GP drops as existing GP is reduced to TP (using ongoing light-dependent ATP/NADPH). Meanwhile TP continues regenerating RuBP, causing RuBP to accumulate.",
        hints: [
          "Trace the Calvin cycle ring: CO₂ enters at the step converting RuBP → GP.",
          "If that single arrow is blocked while ATP and NADPH still run the rest of the circle, what piles up before the block and what drains after it?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "cell-respiration-photosynthesis",
        question:
          "An uncoupling agent makes the inner mitochondrial membrane freely permeable to {{H^+}} ions so protons leak back into the matrix bypassing ATP synthase. What happens to ATP synthesis and {{O_2}} consumption?",
        options: [
          "Both ATP synthesis and O₂ consumption immediately drop to zero",
          "ATP synthesis collapses while O₂ consumption increases and extra heat is released",
          "ATP synthesis doubles while O₂ consumption drops by half due to low pH",
          "Both ATP synthesis and O₂ consumption remain unchanged because glycolysis compensates",
        ],
        answerIndex: 1,
        explanation:
          "Dissipating the proton gradient collapses oxidative phosphorylation (ATP synthesis drops), but removing back-pressure on the ETC lets electron transport and O₂ reduction run even faster, releasing the energy as heat (as in brown adipose tissue thermogenin).",
        hints: [
          "If protons bypass ATP synthase, can ATP synthase still spin to phosphorylate ADP?",
          "With no steep proton back-pressure opposing the ETC pumps, electron flow to O₂ speeds up and energy escapes as heat.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "cell-respiration-photosynthesis",
        question: "Which row correctly matches the site of proton accumulation and the terminal electron acceptor in mitochondria versus chloroplasts?",
        options: [
          "Mitochondria: intermembrane space & O₂; Chloroplasts: thylakoid lumen & NADP⁺",
          "Mitochondria: matrix & NAD⁺; Chloroplasts: stroma & O₂",
          "Mitochondria: intermembrane space & H₂O; Chloroplasts: stroma & ATP",
          "Mitochondria: cytosol & O₂; Chloroplasts: thylakoid lumen & CO₂",
        ],
        answerIndex: 0,
        explanation:
          "Mitochondria pump H⁺ from matrix to intermembrane space and pass electrons terminally to O₂ (forming H₂O). Chloroplasts accumulate H⁺ in the thylakoid lumen and pass electrons terminally to NADP⁺ (forming NADPH).",
        hints: [
          "Use the mnemonic Mito-IMS, Chloro-Lumen for the high-[H⁺] compartment.",
          "In non-cyclic photophosphorylation, what molecule is reduced at the end of PSI?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Outline",
        guideRef: "chemical-signaling-hl",
        question: "Which sequence correctly traces the epinephrine signaling cascade inside a liver cell?",
        options: [
          "Epinephrine diffuses into nucleus → binds DNA → transcribes adenylyl cyclase → exports glucose",
          "Epinephrine opens voltage-gated Ca²⁺ channels → activates RuBisCO → hydrolyses sucrose",
          "Epinephrine binds GPCR → activates G-protein → adenylyl cyclase makes cAMP → kinase cascade",
          "Epinephrine binds receptor tyrosine kinase → fuses GLUT4 vesicles → increases glycogen storage",
        ],
        answerIndex: 2,
        explanation:
          "Polar epinephrine binds a transmembrane GPCR, activating a G-protein that stimulates adenylyl cyclase to convert ATP into the second messenger cAMP, triggering a rapid protein kinase phosphorylation cascade that breaks down glycogen.",
        hints: [
          "First identify epinephrine's receptor class: GPCR, tyrosine kinase, or intracellular steroid receptor?",
          "Which enzyme converts ATP into the second messenger cAMP?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Outline",
        guideRef: "chemical-signaling-hl",
        question: "How does binding of insulin to its transmembrane receptor tyrosine kinase increase glucose uptake by skeletal muscle cells?",
        options: [
          "It converts ATP directly into extracellular glucose transporters via photolysis",
          "Autophosphorylation triggers a cascade causing GLUT4 vesicles to fuse with the plasma membrane",
          "The insulin–receptor complex enters the nucleus to block transcription of glycolysis enzymes",
          "Insulin opens ligand-gated Na⁺ channels to reverse membrane voltage to +30 mV",
        ],
        answerIndex: 1,
        explanation:
          "Insulin binding activates intracellular tyrosine kinase domains to autophosphorylate, initiating a signaling cascade that recruits intracellular vesicles bearing GLUT4 carrier proteins to fuse with the plasma membrane by exocytosis.",
        hints: [
          "Recall the name of the glucose transport protein stored in cytoplasmic vesicles of muscle and fat cells.",
          "Does insulin cause immediate exocytosis of pre-made GLUT4 channels or wait hours for transcription?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "chemical-signaling-hl",
        question: "Why does oestradiol typically produce a slower-onset but longer-lasting cellular response than epinephrine?",
        options: [
          "Oestradiol regulates gene transcription and synthesis of new proteins, whereas epinephrine phosphorylates existing enzymes",
          "Oestradiol must wait for adenylyl cyclase to synthesize cAMP before crossing the phospholipid bilayer",
          "Epinephrine binds directly to chromatin DNA whereas oestradiol acts only at ligand-gated ion channels",
          "Oestradiol has a much higher molecular mass than epinephrine and diffuses slowly through blood capillaries",
        ],
        answerIndex: 0,
        explanation:
          "Hydrophobic oestradiol forms an intracellular hormone–receptor complex acting as a transcription factor, requiring mRNA transcription and translation (hours, lasting longer). Epinephrine rapidly modifies pre-existing enzymes via a cAMP kinase cascade (seconds).",
        hints: [
          "Compare modifying an enzyme that is already sitting in the cytoplasm versus transcribing and translating brand-new proteins.",
          "Which hormone uses an intracellular nuclear receptor?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "chemical-signaling-hl",
        question:
          "Researchers mutate a target cell so its G-protein cannot hydrolyse bound GTP back to GDP (locking it permanently active). What is the most likely consequence even in the absence of epinephrine?",
        options: [
          "Adenylyl cyclase stays permanently inactive and intracellular cAMP drops to zero",
          "Epinephrine diffuses directly across the bilayer to bypass the defective G-protein",
          "Adenylyl cyclase remains continuously active, elevating cAMP and glycogen breakdown",
          "Intracellular steroid receptors stop entering the nucleus and halt all transcription",
        ],
        answerIndex: 2,
        explanation:
          "G-proteins are active when GTP-bound and switch off by hydrolysing GTP → GDP. Locking the G-protein in its GTP-bound state keeps adenylyl cyclase permanently stimulated, continuously producing cAMP and driving downstream cascades (the mechanism of cholera toxin).",
        hints: [
          "Is a G-protein ON or OFF when bound to GTP?",
          "If it cannot switch back to GDP, what happens to the enzyme immediately downstream (adenylyl cyclase)?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "neural-signaling",
        question:
          "A postsynaptic neuron at −70 mV (threshold −55 mV) simultaneously receives three EPSPs of +7 mV each and one IPSP of −5 mV at its axon hillock. What is the resulting postsynaptic outcome?",
        options: [
          "Membrane potential reaches −56 mV, which stays subthreshold so no spike fires",
          "Membrane potential reaches −54 mV, producing a small graded spike peaking at +16 mV",
          "Membrane potential drops to −75 mV because inhibitory signals always override EPSPs",
          "Membrane potential reaches −54 mV, exceeding threshold to fire a full +30 mV spike",
        ],
        answerIndex: 3,
        explanation:
          "Spatial summation gives net ΔV = 3(+7) + (−5) = +16 mV. Adding to resting potential: −70 + 16 = −54 mV, which exceeds the −55 mV threshold. Under the all-or-nothing law, a full action potential peaking at +30 mV fires.",
        hints: [
          "Sum all four simultaneous inputs: (+7) + (+7) + (+7) + (−5).",
          "Add that net change to −70 mV, compare against −55 mV, and remember the all-or-nothing rule.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "neural-signaling",
        question: "How does temporal summation differ from spatial summation at a postsynaptic neuron?",
        options: [
          "Temporal summation uses only inhibitory GABA whereas spatial summation uses only ACh",
          "Temporal summation adds rapid sequential impulses from one presynaptic neuron; spatial adds simultaneous inputs from multiple neurons",
          "Temporal summation occurs only along myelinated internodes; spatial occurs only inside muscle fibres",
          "Temporal summation raises action potential peak voltage above +30 mV; spatial lowers threshold to −70 mV",
        ],
        answerIndex: 1,
        explanation:
          "Temporal ('time') summation happens when a single presynaptic neuron fires rapid bursts before earlier EPSPs decay. Spatial ('space') summation combines simultaneous EPSPs/IPSPs arriving from multiple distinct presynaptic terminals.",
        hints: [
          "Use the Latin roots: temporal = time; spatial = space/location.",
          "Compare one synapse firing repeatedly fast vs several separate synapses firing at the same instant.",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "neural-signaling",
        question: "How does an inhibitory neurotransmitter such as GABA generate an inhibitory postsynaptic potential (IPSP)?",
        options: [
          "It opens ligand-gated Na⁺ channels so positive charge enters and depolarizes the membrane",
          "It closes all K⁺ leak channels so the membrane voltage rises smoothly toward −55 mV",
          "It opens Cl⁻ or K⁺ channels, making the inside more negative and further from threshold",
          "It activates the presynaptic Ca²⁺ pump to prevent acetylcholinesterase synthesis",
        ],
        answerIndex: 2,
        explanation:
          "Inhibitory neurotransmitters bind receptors that open Cl⁻ channels (Cl⁻ influx) or K⁺ channels (K⁺ efflux), hyperpolarizing the postsynaptic membrane (e.g., −70 → −78 mV) and making threshold harder to reach.",
        hints: [
          "An IPSP moves the membrane potential AWAY from −55 mV (more negative inside).",
          "Which ion movements make the interior of a cell more negative?",
        ],
      },
      {
        id: "c1-c2-interaction-molecules-cells-m3-q15",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Outline",
        guideRef: "neural-signaling",
        question: "Why do neurobiologists classify human consciousness as an emergent property of the nervous system?",
        options: [
          "It arises from complex network interactions across billions of neurons and cannot be predicted from one neuron alone",
          "It is encoded inside a single giant pacemaker neuron located in the spinal cord reflex arc",
          "It is produced exclusively by passive diffusion of steroid hormones across synaptic clefts",
          "It appears whenever a single unmyelinated axon reaches +30 mV during depolarization",
        ],
        answerIndex: 0,
        explanation:
          "An emergent property exists at the whole-system level due to dynamic interactions among components: consciousness emerges from integrated synaptic signalling across vast neural networks, not from any isolated neuron.",
        hints: [
          "Recall the IB definition of an emergent property: the whole exhibits capabilities absent from isolated parts.",
          "Can a single isolated neuron experience consciousness?",
        ],
      },
    ],
  },
];
