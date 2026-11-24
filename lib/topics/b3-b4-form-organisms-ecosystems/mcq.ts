import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER M1 — SL Core Paper 1A (15 MCQs)
  // Planned answerIndex: [2, 0, 3, 1, 2, 0, 1, 3, 0, 2, 1, 0, 3, 1, 2]
  // ===========================================================================
  {
    id: "b3-b4-form-organisms-ecosystems-m1",
    title: "Paper 1A · SL Core — Gas Exchange, Transport, Biomes & Niches",
    level: "SL",
    questions: [
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "gas-exchange-haemoglobin",
        question: "Which statement correctly links a mammalian alveolar cell type to its primary role in gas exchange?",
        options: [
          "Type I pneumocytes secrete amphipathic surfactant to reduce alveolar surface tension",
          "Type II pneumocytes form an ultra-thin squamous barrier minimizing diffusion distance",
          "Type II pneumocytes secrete pulmonary surfactant to prevent alveolar collapse on exhalation",
          "Type I pneumocytes actively pump dissolved oxygen across capillary walls using ATP",
        ],
        answerIndex: 2,
        explanation:
          "Type II pneumocytes are cuboidal secretory cells that release pulmonary surfactant into the moist alveolar film, lowering water surface tension and preventing collapse. Type I pneumocytes form the thin squamous diffusion barrier (passive diffusion, never active transport).",
        hints: [
          "Recall the difference between Type I (flat structural lining) and Type II (cuboidal secretory) alveolar cells.",
          "Gas exchange across alveoli is entirely passive diffusion, never ATP-driven pumping.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "gas-exchange-haemoglobin",
        question: "Which combination of muscle actions and thoracic changes occurs during normal human **inspiration**?",
        options: [
          "Diaphragm and external intercostals contract; thoracic volume increases and alveolar pressure falls",
          "Diaphragm and internal intercostals contract; thoracic volume increases and alveolar pressure rises",
          "Diaphragm relaxes upward and external intercostals contract; thoracic volume decreases sharply",
          "Internal intercostals and abdominals contract; ribcage moves upward and alveolar pressure falls",
        ],
        answerIndex: 0,
        explanation:
          "During inspiration, the diaphragm contracts and flattens while the external intercostal muscles contract to lift the ribcage up and out. Thoracic volume increases, causing alveolar pressure to drop below atmospheric pressure so air enters down the pressure gradient.",
        hints: [
          "By Boyle's law, air flows into the lungs only when alveolar pressure drops below atmospheric pressure.",
          "Remember the mnemonic: EXternal intercostals pull the ribcage EXternally during inspiration.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "gas-exchange-haemoglobin",
        question: "Why do guard cells open a leaf stoma when exposed to morning sunlight?",
        options: [
          "Active efflux of potassium ions causes water to leave guard cells by osmosis so they shrink apart",
          "Starch synthesis raises water potential inside guard cells, flattening their thickened outer walls",
          "Abscisic acid stimulates closure of proton pumps, forcing water into surrounding epidermal cells",
          "Uptake of potassium ions lowers water potential so osmotic water entry bows the unevenly thick walls",
        ],
        answerIndex: 3,
        explanation:
          "Light activates proton pumps in guard-cell membranes, driving K⁺ uptake. The resulting drop in water potential draws water in by osmosis; increased turgor causes guard cells with thicker inner walls and radial microfibrils to bow apart and open the stomatal pore.",
        hints: [
          "Does opening a stoma require guard cells to become turgid or flaccid?",
          "Solute accumulation lowers water potential, pulling water inward by osmosis.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "gas-exchange-haemoglobin",
        question:
          "A spirometer trace shows an athlete breathing 16 times per minute with a mean tidal volume of {{0.55 dm^3}}. What is the athlete's pulmonary ventilation rate?",
        options: [
          "{{4.4 dm^3 min^(-1)}}",
          "{{8.8 dm^3 min^(-1)}}",
          "{{16.55 dm^3 min^(-1)}}",
          "{{29.1 dm^3 min^(-1)}}",
        ],
        answerIndex: 1,
        explanation:
          "Pulmonary ventilation rate equals tidal volume multiplied by breathing frequency: 0.55 dm³ × 16 min⁻¹ = 8.8 dm³ min⁻¹. Adding the two quantities (16.55) or dividing (29.1) gives dimensionally meaningless values.",
        hints: [
          "Use {{V_E = V_T * f}}, where {{V_T}} is tidal volume and {{f}} is breaths per minute.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "gas-exchange-haemoglobin",
        question:
          "An adult has a tidal volume of {{0.50 dm^3}}, an inspiratory reserve volume of {{2.90 dm^3}}, an expiratory reserve volume of {{1.20 dm^3}}, and a residual volume of {{1.30 dm^3}}. What is their **vital capacity**?",
        options: [
          "{{3.40 dm^3}}",
          "{{4.10 dm^3}}",
          "{{4.60 dm^3}}",
          "{{5.90 dm^3}}",
        ],
        answerIndex: 2,
        explanation:
          "Vital capacity is the maximum air forcibly exhaled after a maximal inhalation: VC = V_T + IRV + ERV = 0.50 + 2.90 + 1.20 = 4.60 dm³. Including residual volume gives 5.90 dm³, which is total lung capacity rather than vital capacity.",
        hints: [
          "Can residual volume ever be exhaled into a spirometer?",
          "Sum only the three movable lung volumes: tidal volume + IRV + ERV.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "transport-circulation-plants",
        question: "Which structural feature of mammalian **arteries** directly maintains continuous blood flow during ventricular diastole?",
        options: [
          "Abundant elastic fibres in the tunica media that stretch during systole and recoil during diastole",
          "One-cell-thick fenestrated endothelium that minimizes resistance along systemic arterial branches",
          "Pocket semilunar valves spaced along the lumen that prevent gravity-driven venous backflow",
          "Extremely wide internal lumen that drops blood velocity to maximize oxygen unloading into tissues",
        ],
        answerIndex: 0,
        explanation:
          "Elastic fibres in the thick tunica media expand under high systolic pressure and elastically recoil during ventricular diastole, smoothing pressure fluctuations and keeping blood moving forward. Pocket valves belong to veins, and fenestrated one-cell-thick walls belong to capillaries.",
        hints: [
          "Think about how an elastic hose stores mechanical energy during peak pumping pressure.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "transport-circulation-plants",
        question: "Why does mammalian **double circulation** sustain higher metabolic rates than the **single circulation** of bony fish?",
        options: [
          "Fish hearts pump oxygenated blood directly from the ventricle into systemic muscles at higher pressure",
          "Mammalian blood returns to the heart after lung capillaries to be re-pressurized for systemic delivery",
          "Mammalian pulmonary arteries carry blood at higher pressure than the aorta to speed alveolar exchange",
          "Fish lack capillaries in their gills, causing deoxygenated and oxygenated blood to mix in systemic veins",
        ],
        answerIndex: 1,
        explanation:
          "In single circulation, blood pressure drops steeply across gill capillaries before reaching body tissues. In double circulation, oxygenated blood returns from the lungs to the left heart and is pumped out at high systemic pressure, supplying rapid O₂ and glucose delivery.",
        hints: [
          "What happens to fluid pressure whenever blood passes through a dense capillary bed?",
          "Compare how many times blood passes through the heart per complete circuit in fish versus mammals.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "transport-circulation-plants",
        question: "Which mechanism explains how water ascends uninterrupted through tall xylem vessels under negative pressure?",
        options: [
          "Active pumping by living xylem parenchyma cells pushes water upward through perforated sieve plates",
          "Root pressure generated by mineral diffusion forces liquid water over 100 metres up dead woody trunks",
          "Osmotic loading of sucrose into xylem vessels builds positive hydrostatic pressure toward leaf sinks",
          "Transpiration generates tension while hydrogen-bond cohesion and wall adhesion sustain the water column",
        ],
        answerIndex: 3,
        explanation:
          "According to the cohesion–tension theory, evaporation from leaf mesophyll cell walls creates negative pressure (tension) in dead lignified xylem vessels. Hydrogen bonds between water molecules (cohesion) and attraction to hydrophilic cell walls (adhesion) pull a continuous water column upward.",
        hints: [
          "Are mature xylem vessels living or dead, and is their pressure positive or negative?",
          "Identify the two intermolecular hydrogen-bond forces that prevent the water column from snapping.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "transport-circulation-plants",
        question: "A leafy shoot is sealed into a bubble potometer. Which environmental change will **decrease** the speed of the air bubble along the capillary tube?",
        options: [
          "Enclosing the shoot inside a transparent polythene bag misted with water droplets",
          "Directing a steady electric fan breeze across the lower leaf surfaces",
          "Increasing room temperature from 18 °C to 28 °C under bright laboratory lamps",
          "Switching from dim green light to high-intensity white light on the upper epidermis",
        ],
        answerIndex: 0,
        explanation:
          "A misted polythene bag raises ambient relative humidity around the stomata, flattening the water-vapour concentration gradient between the spongy mesophyll air spaces and external air, which slows transpiration and water uptake. Wind, warmth, and bright light all increase transpiration.",
        hints: [
          "Transpiration is diffusion of water vapour down a concentration gradient out of stomata.",
          "Which treatment makes the air outside the stomata nearly as humid as the air inside the leaf?",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "transport-circulation-plants",
        question: "How does **coronary artery occlusion** lead directly to a myocardial infarction?",
        options: [
          "Backflow across incompetent semilunar valves floods the left atrium with deoxygenated venous blood",
          "Increased elastic recoil in the aorta ruptures pulmonary capillaries and blocks alveolar ventilation",
          "An atherosclerotic plaque and thrombus block blood flow, depriving cardiac muscle cells of O₂ and glucose",
          "Excess smooth muscle relaxation dilates coronary veins so platelets cannot initiate fibrin clotting",
        ],
        answerIndex: 2,
        explanation:
          "Coronary arteries nourish the heart wall itself. When an atherosclerotic plaque narrows the lumen and ruptures to trigger a thrombus (blood clot), downstream cardiomyocytes are starved of O₂ and glucose for aerobic respiration and undergo tissue death (myocardial infarction).",
        hints: [
          "Which tissue do the coronary arteries directly supply?",
          "Link atherosclerosis + thrombus formation to cellular aerobic respiration in heart muscle.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "adaptation-biomes-niches",
        question: "How do **rolled leaves, sunken stomata, and epidermal trichomes** reduce water loss in marram grass (*Ammophila arenaria*)?",
        options: [
          "They reflect all solar radiation so chloroplasts cease photosynthesis during summer months",
          "They trap a still microclimate of humid air, reducing the water-vapour diffusion gradient",
          "They pump liquid seawater from the epidermis into vascular xylem vessels by active transport",
          "They increase internal leaf temperature to speed stomatal closure via rapid abscisic acid decay",
        ],
        answerIndex: 1,
        explanation:
          "In xerophytes like sand-dune marram grass, rolled leaves, sunken pits, and hairs shield stomata from drying wind and trap moist air, shrinking the water-vapour concentration gradient between inside and outside the leaf and cutting transpiration rate.",
        hints: [
          "Think about how wind normally speeds transpiration by stripping away the humid boundary layer.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "adaptation-biomes-niches",
        question: "Which adaptation specifically allows coastal mangrove trees (*Avicennia*) to perform aerobic root respiration in waterlogged, anoxic intertidal mud?",
        options: [
          "Vertical aerial pneumatophores studded with lenticels projecting above the tidal mud",
          "Thick waxy cuticles and leaf spines eliminating all daytime stomatal gas exchange",
          "Shallow buttress roots spreading across leached acidic soils beneath a tall closed canopy",
          "Permafrost-tolerant woody cushions growing close to the ground to avoid freezing wind chill",
        ],
        answerIndex: 0,
        explanation:
          "Waterlogged estuarine mud contains almost no dissolved O₂. Mangroves grow vertical snorkel-like roots (**pneumatophores**) bearing pores (**lenticels**) that rise into the air at low tide to conduct O₂ down to submerged root tissues.",
        hints: [
          "Why is oxygen scarce inside saturated intertidal mud?",
          "Recall the specialized breathing roots found in halophyte mangroves.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "adaptation-biomes-niches",
        question:
          "A terrestrial region records a mean annual temperature of −6 °C, annual precipitation of 190 mm, permanently frozen subsoil, and treeless low-growing vegetation. Which biome is described?",
        options: [
          "Taiga (boreal coniferous forest)",
          "Temperate deciduous woodland",
          "Tropical savanna grassland",
          "Arctic tundra",
        ],
        answerIndex: 3,
        explanation:
          "Mean temperature below 0 °C, very low precipitation (<250 mm yr⁻¹), permafrost (permanently frozen subsoil), and absence of trees define the Arctic tundra. Taiga is slightly warmer and wetter (400–800 mm) and supports dense coniferous trees.",
        hints: [
          "Locate mean temperature −6 °C and precipitation 190 mm on the Whittaker biome chart.",
          "Which single biome is characterized by permafrost preventing deep tree roots?",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "adaptation-biomes-niches",
        question: "Which organism is correctly matched to its oxygen-metabolism or nutritional niche?",
        options: [
          "Baker's yeast (*Saccharomyces*): obligate anaerobe killed immediately by atmospheric oxygen",
          "Venus flytrap (*Dionaea*): mixotroph combining photosynthesis with heterotrophic insect digestion",
          "Bracket fungus (*Trametes*): holozoic consumer ingesting solid wood particles into an internal gut",
          "Tetanus bacterium (*Clostridium*): obligate aerobe requiring high arterial oxygen tensions to divide",
        ],
        answerIndex: 1,
        explanation:
          "The Venus flytrap photosynthesizes for organic carbon/energy while trapping and digesting insects to obtain scarce nitrogen in bog soils, making it a mixotroph. Yeast is a facultative anaerobe, fungi are saprotrophs (external digestion), and *Clostridium* is an obligate anaerobe.",
        hints: [
          "Distinguish saprotrophs (external enzyme secretion) from holozoic consumers (internal digestion).",
          "Check which organisms switch metabolism in oxygen versus those poisoned by oxygen.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "adaptation-biomes-niches",
        question:
          "In Connell's rocky-shore study, removing *Semibalanus* from the lower intertidal zone allowed *Chthamalus* to expand across the entire shore. What does this demonstrate?",
        options: [
          "The fundamental niche of *Chthamalus* is narrower than its realized niche on exposed shores",
          "Abiotic wave action strictly prevents *Chthamalus* larvae from settling in the lower intertidal zone",
          "Interspecific competition compresses *Chthamalus* from a broad fundamental niche into a smaller realized niche",
          "Competitive exclusion eliminates *Semibalanus* whenever *Chthamalus* colonizes upper rocky ledges",
        ],
        answerIndex: 2,
        explanation:
          "*Chthamalus* is physiologically able to survive down to low tide (broad fundamental niche), but faster-growing *Semibalanus* crowds it off the lower rock, restricting *Chthamalus* to a narrower upper-shore realized niche.",
        hints: [
          "Is the realized niche larger or smaller than the fundamental niche?",
          "Did removing a competitor change an abiotic factor or a biotic interaction?",
        ],
      },
    ],
  },

  // ===========================================================================
  // PAPER M2 — SL & HL Mixed Paper 1A (15 MCQs)
  // Planned answerIndex: [1, 3, 0, 2, 1, 3, 2, 0, 3, 1, 2, 0, 1, 2, 3]
  // ===========================================================================
  {
    id: "b3-b4-form-organisms-ecosystems-m2",
    title: "Paper 1A · SL & HL Mixed — Bohr Shift, Cardiac Cycle, Sarcomeres & Ecology",
    questions: [
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "gas-exchange-haemoglobin",
        question: "Why is the oxygen dissociation curve of adult haemoglobin (HbA) **sigmoidal** rather than hyperbolic?",
        options: [
          "Each haemoglobin polypeptide contains only one haem group that binds oxygen independently",
          "Binding the first O₂ triggers a conformational shift increasing the affinity of remaining subunits",
          "High plasma carbonic anhydrase concentrations inhibit oxygen binding until pO₂ exceeds 10 kPa",
          "Adult haemoglobin permanently denatures below 4 kPa, dumping all four O₂ molecules simultaneously",
        ],
        answerIndex: 1,
        explanation:
          "Haemoglobin is a tetramer displaying positive cooperativity: binding the first O₂ changes its quaternary conformation so the second and third O₂ molecules bind much more readily, producing an S-shaped (sigmoidal) dissociation curve. Monomeric myoglobin gives a hyperbolic curve.",
        hints: [
          "How many haem groups does one haemoglobin molecule possess, and do they act independently?",
          "Contrast cooperative tetrameric haemoglobin with monomeric myoglobin.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "gas-exchange-haemoglobin",
        question: "How does a steep rise in blood {{CO_2}} inside vigorously contracting leg muscles alter the oxygen dissociation curve of adult haemoglobin?",
        options: [
          "It shifts the curve to the left, increasing haemoglobin O₂ affinity to conserve arterial reserves",
          "It turns the sigmoidal curve into a straight line by blocking erythrocyte carbonic anhydrase",
          "It shifts the curve upward beyond 100% saturation so each haem group carries two O₂ molecules",
          "It shifts the curve to the right, lowering O₂ affinity so more O₂ dissociates at the same tissue pO₂",
        ],
        answerIndex: 3,
        explanation:
          "Elevated CO₂ reacts with water via carbonic anhydrase to generate H⁺ ions (lowering pH). Protonation of haemoglobin induces the **Bohr shift** to the right—lowering O₂ affinity and unloading more oxygen into respiring muscle at the same pO₂.",
        hints: [
          "Remember 'CADET faces RIGHT' (CO₂, Acid/H⁺, Exercise, Temperature).",
          "Does a lower affinity at tissue pO₂ release more or less oxygen to cells?",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "transport-circulation-plants",
        question: "Which pressure event immediately causes the **second heart sound (S2, 'dub')** on a left-heart cardiac cycle trace?",
        options: [
          "Left ventricular pressure falls below aortic pressure, slamming the aortic semilunar valve shut",
          "Left ventricular pressure rises above left atrial pressure, snapping the bicuspid AV valve shut",
          "Left atrial systole pushes blood through open semilunar valves into the relaxed aorta",
          "Aortic pressure drops below left atrial pressure, forcing both AV valves to open simultaneously",
        ],
        answerIndex: 0,
        explanation:
          "At the onset of ventricular diastole, left ventricular pressure drops below aortic pressure. Blood momentarily begins to flow backward, snapping the semilunar valves shut to produce the second heart sound (S2, 'dub') and the aortic dicrotic notch.",
        hints: [
          "Match S1 ('lub') and S2 ('dub') to AV valves versus semilunar valves.",
          "Valves close passively the instant downstream pressure exceeds upstream pressure.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "transport-circulation-plants",
        question:
          "During brisk cycling, one complete cardiac cycle lasts {{0.60 s}} and left-ventricular stroke volume is {{80 cm^3}}. What is the cyclist's cardiac output?",
        options: [
          "{{4.8 dm^3 min^(-1)}}",
          "{{6.4 dm^3 min^(-1)}}",
          "{{8.0 dm^3 min^(-1)}}",
          "{{13.3 dm^3 min^(-1)}}",
        ],
        answerIndex: 2,
        explanation:
          "Heart rate = 60 / 0.60 = 100 beats min⁻¹. Cardiac output = HR × SV = 100 × 80 = 8000 cm³ min⁻¹. Dividing by 1000 converts to 8.0 dm³ min⁻¹. Multiplying 60 × 0.60 × 80 gives a false value.",
        hints: [
          "First find heart rate in beats per minute using {{HR = 60 / T}}.",
          "Then multiply HR × SV and convert {{cm^3}} to {{dm^3}} by dividing by 1000.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "transport-circulation-plants",
        question: "In the Münch pressure-flow model of phloem translocation, what directly builds the high hydrostatic pressure inside sieve tubes at a leaf source?",
        options: [
          "Evaporation of water through sieve-plate pores creating strong negative tension along the stem",
          "Active sucrose loading lowers sieve-tube water potential, drawing water in by osmosis from xylem",
          "Contraction of muscular companion cells squeezing sucrose solution downward through plasmodesmata",
          "Conversion of insoluble starch into glucose inside xylem tracheids pushing fluid into phloem",
        ],
        answerIndex: 1,
        explanation:
          "Companion cells use ATP to actively load sucrose into sieve tube elements at the source. High solute concentration makes sieve-tube water potential strongly negative, so water flows in osmotically from nearby xylem, building high positive hydrostatic pressure.",
        hints: [
          "Is phloem pressure positive (pushing) or negative (pulling)?",
          "Trace the link: active sucrose loading → solute concentration ↑ → water potential ↓ → osmosis.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "muscle-motility-hl",
        question: "What is the exact sequence of molecular events triggered immediately after {{Ca^(2+)}} ions are released from the sarcoplasmic reticulum?",
        options: [
          "Ca²⁺ binds myosin heads → ATP detaches actin → tropomyosin binds Z-lines → H-zone widens",
          "Ca²⁺ binds actin directly → troponin hydrolyses ATP → myosin filaments shorten → power stroke occurs",
          "Ca²⁺ binds tropomyosin → titin contracts actively → Z-lines move apart → cross-bridges break",
          "Ca²⁺ binds troponin → tropomyosin shifts off actin binding sites → cocked myosin heads form cross-bridges",
        ],
        answerIndex: 3,
        explanation:
          "Ca²⁺ ions bind specifically to **troponin**, causing a conformational change that moves the filamentous **tropomyosin** away from the myosin-binding sites on actin so pre-energized myosin heads can attach and form cross-bridges.",
        hints: [
          "Which regulatory protein is the Ca²⁺ sensor, and which protein physically blocks actin's binding sites?",
          "Once tropomyosin shifts aside, pre-cocked myosin heads can immediately bind actin.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "muscle-motility-hl",
        question: "Which statement accurately describes the direct roles of **ATP** during one cross-bridge cycle in skeletal muscle?",
        options: [
          "ATP binding triggers the power stroke while ATP hydrolysis releases Ca²⁺ from troponin",
          "ATP binding forms the cross-bridge while ADP phosphorylation shortens the thick myosin rod",
          "ATP binding detaches myosin from actin while ATP hydrolysis re-cocks the myosin head",
          "ATP hydrolysis detaches tropomyosin from actin while ATP binding pulls Z-lines together",
        ],
        answerIndex: 2,
        explanation:
          "Binding of a new ATP molecule to myosin breaks the cross-bridge (detachment from actin). Myosin ATPase then hydrolyses ATP to ADP + Pᵢ, using the released energy to re-cock the myosin head into its high-energy position ready for the next attachment.",
        hints: [
          "Remember rigor mortis: when a muscle runs out of ATP, do myosin heads fail to attach or fail to detach?",
          "Distinguish ATP *binding* from ATP *hydrolysis*.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "State",
        guideRef: "muscle-motility-hl",
        question: "Which structural protein tethers thick myosin filaments to the Z-lines, preventing sarcomere over-stretching and providing elastic recoil?",
        options: [
          "Titin",
          "Tropomyosin",
          "Troponin",
          "Collagen",
        ],
        answerIndex: 0,
        explanation:
          "Titin is a giant spring-like protein linking myosin thick filaments directly to Z-discs, maintaining central alignment of the A-band and preventing mechanical over-extension. Tropomyosin and troponin regulate actin binding; collagen forms extracellular tendons/ligaments.",
        hints: [
          "Think of the giant elastic 'molecular spring' spanning from Z-line to myosin inside every sarcomere.",
          "Eliminate regulatory actin proteins (troponin/tropomyosin) and extracellular matrix collagen.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "muscle-motility-hl",
        question:
          "A relaxed sarcomere measures {{2.40 μm}} between Z-lines, with an A-band of {{1.60 μm}} and an H-zone of {{0.50 μm}}. When the sarcomere contracts to {{2.00 μm}}, what are the new widths of the **A-band** and **H-zone**?",
        options: [
          "A-band = {{1.20 μm}}; H-zone = {{0.10 μm}}",
          "A-band = {{1.60 μm}}; H-zone = {{0.30 μm}}",
          "A-band = {{1.20 μm}}; H-zone = {{0.50 μm}}",
          "A-band = {{1.60 μm}}; H-zone = {{0.10 μm}}",
        ],
        answerIndex: 3,
        explanation:
          "The sarcomere shortens by 2.40 − 2.00 = 0.40 μm (0.20 μm sliding inward from each Z-line). The A-band equals myosin length and stays constant at 1.60 μm, whereas the H-zone narrows from both sides by the full 0.40 μm: 0.50 − 0.40 = 0.10 μm.",
        hints: [
          "Does the A-band ever shorten during contraction?",
          "Both thin-filament tips advance inward toward the M-line, so the H-zone narrows by the FULL sarcomere shortening ΔL.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q10",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "gas-exchange-haemoglobin",
        question: "Why does the spongy mesophyll of a dicot leaf contain extensive interconnected air spaces beneath the palisade layer?",
        options: [
          "To store liquid xylem sap under positive pressure for nighttime root transport",
          "To allow rapid gas-phase diffusion of CO₂ and O₂ across a large moist cell surface area",
          "To shade palisade chloroplasts from excess ultraviolet radiation during midday sun",
          "To trap hydrophobic waxy lipids that block water evaporation from lower stomata",
        ],
        answerIndex: 1,
        explanation:
          "Gases diffuse ~10 000 times faster in air than in water. Spongy mesophyll air spaces allow CO₂ entering through stomata to diffuse rapidly throughout the leaf to reach moist cell walls with a huge cumulative surface area for dissolution.",
        hints: [
          "Compare diffusion speed in air versus liquid water, and apply Fick's gas-exchange principles.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "adaptation-biomes-niches",
        question: "Which combination of dental features best indicates a fossil mammal was an **obligate carnivore** rather than a grazing herbivore?",
        options: [
          "Wide flat ridged molars, a pronounced diastema gap, and chisel-like continuously growing incisors",
          "Small blunt canines, rounded bunodont molars, and a shortened jaw adapted for mixed seeds and tubers",
          "Long pointed canines for seizing prey and sharp blade-like carnassials that shear flesh past each other",
          "Complete absence of incisors paired with broad horny pads for stripping fibrous woody bark",
        ],
        answerIndex: 2,
        explanation:
          "Carnivores possess long pointed canines for gripping/killing prey and scissor-like carnassial cheek teeth for slicing meat and tendons. Broad flat molars and a diastema are hallmarks of grazing herbivores; bunodont generalized teeth typify omnivores.",
        hints: [
          "Match tooth shape to mechanical function: shearing meat versus grinding tough cellulose cell walls.",
          "Carnivores rely on pointed canines and scissor-like carnassials rather than flat ridged grinders.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "adaptation-biomes-niches",
        question: "American desert cacti (*Cactaceae*) and African desert spurges (*Euphorbiaceae*) are distantly related yet both have leafless succulent stems and sharp spines. What evolutionary process explains this?",
        options: [
          "Convergent evolution driven by similar arid abiotic selection pressures in separate hot-desert biomes",
          "Divergent adaptive radiation from a single recent succulent ancestor dispersed across the Atlantic",
          "Competitive exclusion forcing both plant families into identical nocturnal photosynthetic niches",
          "Horizontal gene transfer of cactus spine genes into African euphorbs via shared desert pollinators",
        ],
        answerIndex: 0,
        explanation:
          "When unrelated lineages inhabit the same biome type on different continents, identical abiotic selection pressures (extreme aridity, intense sunlight, herbivory) select for analogous adaptations—**convergent evolution**.",
        hints: [
          "Are shared adaptations in unrelated lineages homologous or analogous?",
          "Connect identical biome climates on separate continents to the matching evolutionary term.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "adaptation-biomes-niches",
        question: "Why are reef-building scleractinian corals strictly restricted to shallow, clear, warm, alkaline tropical waters?",
        options: [
          "Deep cold waters contain too much dissolved oxygen, poisoning coral polyp mitochondria",
          "Mutualistic zooxanthellae require bright light for photosynthesis and alkaline pH aids CaCO₃ deposition",
          "High turbidity provides essential nitrogen that slows skeletal aragonite formation in warm seas",
          "Freshwater river mouths supply lower salinity required to prevent osmotic lysis of coral skeletons",
        ],
        answerIndex: 1,
        explanation:
          "Reef-building corals rely on intracellular photosynthetic zooxanthellae (*Symbiodinium*), requiring clear shallow water for light penetration and warm temperatures (20–28 °C), while alkaline seawater (~pH 8.1–8.4) supplies carbonate ions needed to precipitate CaCO₃ skeletons.",
        hints: [
          "Consider both the photosynthetic symbiont inside coral tissue and the chemistry of calcium carbonate skeletons.",
          "Turbid water blocks sunlight for zooxanthellae, and low pH inhibits CaCO₃ aragonite precipitation.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "adaptation-biomes-niches",
        question:
          "Five closely related species of insect-eating warblers coexist indefinitely in the same spruce forest without competitive exclusion. Which ecological mechanism most likely enables their coexistence?",
        options: [
          "All five warblers expand their fundamental niches until their diets overlap completely",
          "All five warblers switch from holozoic insectivory to saprotrophic fungal digestion in winter",
          "Resource partitioning, with each species foraging for insects at distinct heights and branch zones",
          "Abiotic temperature limits freeze out all five species equally every spring during nesting",
        ],
        answerIndex: 2,
        explanation:
          "As demonstrated in MacArthur's classic warbler study, species avoid competitive exclusion by **resource partitioning** (niche differentiation)—feeding in different microhabitats (outer needles vs inner twigs vs upper crown) so their realized niches do not fully overlap.",
        hints: [
          "Recall Gause's competitive exclusion principle: what is the alternative to local extinction?",
          "When species divide microhabitats or feeding heights, their realized niches stop overlapping completely.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "transport-circulation-plants",
        question: "Which blood vessels carry **oxygenated blood** in a healthy adult human?",
        options: [
          "Pulmonary artery and superior vena cava",
          "Right coronary vein and hepatic portal vein",
          "Pulmonary artery and renal vein",
          "Pulmonary vein and systemic aorta",
        ],
        answerIndex: 3,
        explanation:
          "The pulmonary vein returns freshly oxygenated blood from the lungs to the left atrium, and the aorta distributes oxygenated blood from the left ventricle to the body. The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs.",
        hints: [
          "Remember: 'artery' means away from the heart and 'vein' means toward the heart—check the pulmonary circuit carefully!",
          "Blood leaving the lungs toward the left atrium is oxygenated; blood pumped from the left ventricle into the body is also oxygenated.",
        ],
      },
    ],
  },

  // ===========================================================================
  // PAPER M3 — HL Extension & Data-Based Paper 1A (15 MCQs, all HL)
  // Planned answerIndex: [3, 0, 2, 0, 3, 1, 2, 0, 1, 3, 2, 3, 0, 1, 2]
  // ===========================================================================
  {
    id: "b3-b4-form-organisms-ecosystems-m3",
    title: "Paper 1A · HL Extension & Data Analysis",
    level: "HL",
    questions: [
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "gas-exchange-haemoglobin",
        question:
          "At a placental partial pressure of {{3.5 kPa}}, fetal haemoglobin (HbF) is 76% saturated while maternal adult haemoglobin (HbA) is 54% saturated. What explains this difference and its functional consequence?",
        options: [
          "HbF has a lower affinity for O₂ than HbA, causing O₂ to diffuse back into maternal uterine veins",
          "HbF contains eight haem groups per tetramer, doubling its maximal oxygen saturation above 100%",
          "Maternal carbonic anhydrase destroys HbA in the placenta so only dissolved plasma O₂ reaches the fetus",
          "HbF has a higher O₂ affinity (left-shifted curve), driving net O₂ diffusion from maternal to fetal blood",
        ],
        answerIndex: 3,
        explanation:
          "Because HbF (α₂γ₂) has higher O₂ affinity than maternal HbA (α₂β₂), its dissociation curve sits to the left: at placental pO₂ (3.5 kPa), HbA releases O₂ while HbF binds it readily, maintaining a steep diffusion gradient across the placenta.",
        hints: [
          "Higher % saturation at the same pO₂ means higher or lower affinity?",
          "Which direction must net O₂ diffusion run across the placenta?",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "gas-exchange-haemoglobin",
        diagram: `<svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Oxygen dissociation curves at pH 7.4 and pH 7.2 showing saturations at 4 kPa and 13 kPa">
  <rect x="0" y="0" width="380" height="210" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <line x1="48" y1="172" x2="352" y2="172" stroke="var(--ink-2)" stroke-width="1.4"/>
  <line x1="48" y1="22" x2="48" y2="172" stroke="var(--ink-2)" stroke-width="1.4"/>
  <text x="200" y="198" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">pO₂ (kPa)</text>
  <text x="15" y="100" text-anchor="middle" font-size="10.5" fill="var(--ink-2)" transform="rotate(-90 15 100)">% O₂ Sat.</text>
  <text x="42" y="28" text-anchor="end" font-size="9.5" fill="var(--ink-2)">100</text>
  <text x="42" y="100" text-anchor="end" font-size="9.5" fill="var(--ink-2)">50</text>
  <text x="42" y="175" text-anchor="end" font-size="9.5" fill="var(--ink-2)">0</text>
  <text x="134" y="185" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">4.0</text>
  <text x="328" y="185" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">13.0</text>
  <!-- pH 7.4 curve -->
  <path d="M48 172 C76 168, 96 112, 134 64 C168 34, 240 27, 344 25" fill="none" stroke="#16a34a" stroke-width="2.5"/>
  <!-- pH 7.2 curve -->
  <path d="M48 172 C90 170, 114 134, 134 100 C176 52, 244 31, 344 27" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <!-- Vertical guide at 4.0 kPa -->
  <line x1="134" y1="64" x2="134" y2="172" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="3,3"/>
  <circle cx="134" cy="64" r="4" fill="#16a34a"/>
  <text x="142" y="62" font-size="9.5" font-weight="700" fill="#16a34a">72% (pH 7.4)</text>
  <circle cx="134" cy="100" r="4" fill="#dc2626"/>
  <text x="142" y="104" font-size="9.5" font-weight="700" fill="#dc2626">48% (pH 7.2)</text>
  <circle cx="328" cy="25" r="4" fill="#0284c7"/>
  <text x="322" y="42" text-anchor="end" font-size="9.5" font-weight="700" fill="#0284c7">98% (Lungs)</text>
</svg>`,
        question:
          "Using the dissociation curves shown, blood leaves the lungs at 98% saturation ({{13.0 kPa}}). How many **additional percentage points** of haemoglobin's O₂ load are released in an active muscle at {{4.0 kPa}} when blood pH drops from 7.4 to 7.2?",
        options: [
          "24 percentage points (unloading rises from 26% to 50%)",
          "48 percentage points (unloading rises from 26% to 74%)",
          "26 percentage points (unloading rises from 48% to 74%)",
          "50 percentage points (unloading rises from 48% to 98%)",
        ],
        answerIndex: 0,
        explanation:
          "At pH 7.4, blood unloads 98% − 72% = 26% of its O₂ capacity. At pH 7.2 (Bohr shift), blood unloads 98% − 48% = 50% of its O₂ capacity. The additional release caused by the pH drop is 50% − 26% = 24 percentage points (= 72% − 48%).",
        hints: [
          "Unloaded % = (Lung saturation) − (Tissue saturation).",
          "Compute unloaded % at pH 7.4 and at pH 7.2, then take the difference.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "gas-exchange-haemoglobin",
        question: "Why is **myoglobin** well suited as an intracellular oxygen reserve inside endurance skeletal muscle rather than as a circulatory blood transporter?",
        options: [
          "Its curve sits far to the right of adult HbA, so it cannot saturate even at 13 kPa in lung alveoli",
          "It exhibits strong Bohr shifting, releasing all bound oxygen the moment capillary pH drops to 7.35",
          "Its far-left hyperbolic curve binds O₂ tightly at normal tissue pO₂ and releases O₂ only when muscle pO₂ drops very low",
          "It contains four non-cooperative iron-free haem rings that transport CO₂ instead of O₂ through veins",
        ],
        answerIndex: 2,
        explanation:
          "Monomeric myoglobin has a single haem group and a hyperbolic dissociation curve far to the left of HbA (very high O₂ affinity). It strips O₂ from capillary haemoglobin and holds onto it until intense respiration drives intracellular muscle pO₂ close to 0.5–1 kPa—making it ideal as an emergency reserve but useless for routine blood unloading.",
        hints: [
          "Check myoglobin's position relative to HbA on an oxygen dissociation graph.",
          "If a pigment only releases O₂ below ~1 kPa, why would that be bad for routine capillary delivery but great for an emergency reserve?",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "transport-circulation-plants",
        diagram: `<svg viewBox="0 0 380 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left heart pressure curves labelled with intervals W, X, Y and Z across one cardiac cycle">
  <rect x="0" y="0" width="380" height="205" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <line x1="46" y1="168" x2="356" y2="168" stroke="var(--ink-2)" stroke-width="1.4"/>
  <line x1="46" y1="22" x2="46" y2="168" stroke="var(--ink-2)" stroke-width="1.4"/>
  <!-- Shaded phase intervals -->
  <rect x="46" y="22" width="44" height="146" fill="#e0f2fe" opacity="0.5"/>
  <rect x="90" y="22" width="34" height="146" fill="#fef3c7" opacity="0.65"/>
  <rect x="124" y="22" width="84" height="146" fill="#ffedd5" opacity="0.55"/>
  <rect x="208" y="22" width="144" height="146" fill="#dcfce7" opacity="0.45"/>
  <text x="68" y="36" text-anchor="middle" font-size="11" font-weight="700" fill="#0369a1">W</text>
  <text x="107" y="36" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">X</text>
  <text x="166" y="36" text-anchor="middle" font-size="11" font-weight="700" fill="#9a3412">Y</text>
  <text x="280" y="36" text-anchor="middle" font-size="11" font-weight="700" fill="#15803d">Z</text>
  <!-- Aorta -->
  <path d="M46 84 L124 94 C142 50, 174 44, 208 72 L214 78 L222 71 C264 78, 308 86, 352 92" fill="none" stroke="#ea580c" stroke-width="2.2" stroke-dasharray="5,3"/>
  <!-- Ventricle -->
  <path d="M46 158 L76 152 L90 156 L124 94 C142 46, 174 40, 208 72 L226 160 C272 162, 314 160, 352 158" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <!-- Atrium -->
  <path d="M46 154 Q66 138 90 154 Q152 158 224 146 Q282 154 352 154" fill="none" stroke="#0284c7" stroke-width="2"/>
  <text x="200" y="192" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Time across one cardiac cycle</text>
  <text x="16" y="96" text-anchor="middle" font-size="10" fill="var(--ink-2)" transform="rotate(-90 16 96)">Pressure</text>
</svg>`,
        question:
          "In the left-heart pressure graph, during which labelled interval are **both** the bicuspid (AV) valve and the aortic semilunar valve **closed** while ventricular pressure surges rapidly (isovolumetric contraction)?",
        options: [
          "Interval X (between AV valve closure and semilunar valve opening)",
          "Interval W (during atrial systole while blood fills the ventricle)",
          "Interval Y (while left ventricular pressure exceeds aortic pressure)",
          "Interval Z (during late ventricular diastole and passive venous filling)",
        ],
        answerIndex: 0,
        explanation:
          "At the start of interval X, ventricular pressure rises above atrial pressure and snaps the AV valve shut, yet remains below aortic pressure so the semilunar valve is still closed. Blood volume stays constant while ventricular pressure rockets upward until it crosses the aortic curve at the start of Y.",
        hints: [
          "Find where ventricular pressure has already crossed ABOVE atrial pressure, yet is still BELOW aortic pressure.",
          "Look at the steep rising vertical section of the red ventricular curve.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "transport-circulation-plants",
        question:
          "At the arteriolar end of a capillary, blood hydrostatic pressure is {{4.4 kPa}} and plasma oncotic pressure is {{3.2 kPa}}. At the venular end, hydrostatic pressure falls to {{1.7 kPa}} while oncotic pressure remains {{3.2 kPa}}. What is the net fluid movement?",
        options: [
          "Net reabsorption of 1.2 kPa at the arteriolar end and net filtration of 1.5 kPa at the venular end",
          "Net filtration outward along the entire capillary length because hydrostatic pressure stays positive",
          "Zero net movement at either end because plasma proteins diffuse freely through fenestrations",
          "Net filtration outward (1.2 kPa) at the arteriolar end and net osmotic reabsorption (1.5 kPa) at the venular end",
        ],
        answerIndex: 3,
        explanation:
          "Net filtration pressure = P_hydrostatic − P_oncotic. At the arteriolar end: 4.4 − 3.2 = +1.2 kPa (net ultrafiltration out into tissue space). At the venular end: 1.7 − 3.2 = −1.5 kPa (net osmotic return into the capillary; excess ~10% drains via lymphatics).",
        hints: [
          "Hydrostatic pressure pushes fluid OUT of capillaries; oncotic pressure pulls water IN by osmosis.",
          "Subtract oncotic pressure from hydrostatic pressure at each end.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "transport-circulation-plants",
        question:
          "Severe protein malnutrition lowers blood plasma albumin concentration dramatically. What physiological consequence directly follows in systemic capillary beds?",
        options: [
          "Arteriolar hydrostatic pressure drops to zero, halting tissue fluid formation completely",
          "Plasma oncotic pressure drops, reducing venular osmotic reabsorption and causing tissue oedema",
          "Lymphatic valves invert and pump red blood cells backward into interstitial spaces",
          "Plasma oncotic pressure rises sharply, dehydrating surrounding tissues and raising blood viscosity",
        ],
        answerIndex: 1,
        explanation:
          "Plasma proteins (chiefly albumin) are too large to exit capillary fenestrations and generate plasma oncotic pressure. Losing albumin lowers oncotic pressure, so excess ultrafiltrate leaves capillaries and far less returns at the venular end, accumulating as interstitial fluid (**oedema**).",
        hints: [
          "Which solute creates plasma oncotic (colloid osmotic) pressure?",
          "If oncotic pull inward weakens, does more or less fluid remain trapped in tissues?",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "transport-circulation-plants",
        question:
          "Aphid stylets inserted into a woody stem exude sucrose-rich sap continuously for hours after the aphid's body is severed. What feature of phloem transport does this directly demonstrate?",
        options: [
          "Phloem sap moves under strong negative tension generated by leaf stomatal evaporation",
          "Phloem sieve tubes are dead hollow conduits lacking cell membranes or osmotic gradients",
          "Phloem sap flows under positive hydrostatic pressure maintained by active loading at sources",
          "Aphid salivary enzymes actively pull water out of adjacent xylem tracheids after stylet severing",
        ],
        answerIndex: 2,
        explanation:
          "Continuous outward exudation of sap from a severed stylet proves that phloem contents are under **positive hydrostatic pressure** (unlike xylem, which would suck air inward if punctured under negative tension).",
        hints: [
          "What would happen if you poked a tiny hole into a pipe under negative suction (tension) versus positive pressure?",
          "Continuous outward bleeding of sap requires higher hydrostatic pressure inside the sieve tube than outside.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "transport-circulation-plants",
        question:
          "A respiratory inhibitor (cyanide) is applied locally to companion cells in a mature leaf while transpiration continues normally. Which immediate effect occurs in the plant's vascular tissues?",
        options: [
          "Phloem sucrose loading and pressure-flow translocation halt, while xylem transpiration flow continues",
          "Xylem cohesion–tension transport stops immediately, while phloem translocation speeds up passively",
          "Both xylem and phloem stop instantly because both tissues require companion-cell ATP hydrolysis",
          "Neither xylem nor phloem is affected because both depend strictly on passive diffusion down gradients",
        ],
        answerIndex: 0,
        explanation:
          "Xylem vessels are dead and move water passively via solar-powered transpiration pull, so cyanide has no immediate effect on xylem flow. Phloem loading relies on ATP-driven H⁺-ATPase pumps in living companion cells, so blocking ATP synthesis halts translocation.",
        hints: [
          "Which vascular transport mechanism requires metabolic ATP from living cells, and which is passive?",
          "Dead xylem tubes rely on solar evaporation, whereas companion-cell sucrose loading uses ATP-driven proton pumps.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "muscle-motility-hl",
        question: "Why does **rigor mortis** cause skeletal muscles to lock rigidly several hours after death?",
        options: [
          "Post-mortem ATP surges force myosin heads to detach permanently from actin binding sites",
          "Ca²⁺ leaks from the sarcoplasmic reticulum allowing cross-bridges to form, but lack of ATP prevents detachment",
          "Titin springs rapidly hydrolyse into rigid collagen cords linking opposing Z-lines permanently",
          "Excess acetylcholine stays bound to troponin so myosin filaments irreversibly shrink by half",
        ],
        answerIndex: 1,
        explanation:
          "After death, aerobic respiration ceases and ATP depletes. Ca²⁺ leaks out of the SR into the sarcoplasm, exposing actin sites so myosin heads bind—but without fresh ATP molecules to bind myosin, the cross-bridges cannot detach, locking the sarcomeres rigidly.",
        hints: [
          "Which specific step of the cross-bridge cycle requires a fresh ATP molecule to bind to myosin?",
          "Without fresh ATP, myosin heads stay locked onto actin after Ca²⁺ leaks from the sarcoplasmic reticulum.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "muscle-motility-hl",
        question:
          "A toxin selectively blocks the **{{Ca^(2+)}}-ATPase pumps** in the sarcoplasmic reticulum membrane while leaving voltage-gated {{Ca^(2+)}} release channels intact. What is the immediate effect after a single motor-neuron action potential?",
        options: [
          "The muscle fibre fails to depolarize and cannot initiate any cross-bridge formation",
          "Tropomyosin permanently detaches from actin so the sarcomere stretches past its elastic limit",
          "Myosin ATPase stops hydrolysing ATP so cross-bridges break immediately without a power stroke",
          "Sarcoplasmic Ca²⁺ stays elevated, preventing tropomyosin from re-blocking actin and delaying relaxation",
        ],
        answerIndex: 3,
        explanation:
          "Muscle relaxation requires active pumping of Ca²⁺ back into the sarcoplasmic reticulum by Ca²⁺-ATPase so Ca²⁺ unbinds from troponin and tropomyosin re-covers actin's binding sites. Blocking those pumps keeps Ca²⁺ high and traps the muscle in sustained contraction.",
        hints: [
          "What must happen to cytosolic Ca²⁺ concentration for a contracted muscle fibre to relax?",
          "If Ca²⁺ remains bound to troponin, tropomyosin cannot move back to cover actin's binding sites.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "muscle-motility-hl",
        question:
          "In a relaxed sarcomere of length {{2.60 μm}}, the A-band measures {{1.60 μm}}. The sarcomere then contracts by {{0.40 μm}}. What is the new width of **one half I-band** (the actin-only gap between one Z-line and the edge of the A-band)?",
        options: [
          "{{0.10 μm}}",
          "{{0.20 μm}}",
          "{{0.30 μm}}",
          "{{0.60 μm}}",
        ],
        answerIndex: 2,
        explanation:
          "Contracted sarcomere length = 2.60 − 0.40 = 2.20 μm. Since the A-band stays constant at 1.60 μm, the combined actin-only regions (two half I-bands) total 2.20 − 1.60 = 0.60 μm. Dividing by 2 gives 0.30 μm for one half I-band.",
        hints: [
          "One sarcomere contains ONE A-band plus TWO symmetric half I-bands (one adjacent to each Z-line).",
          "Subtract the constant A-band from the new sarcomere length, then divide by 2.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "muscle-motility-hl",
        question: "Which structural pairing correctly matches synovial joint tissues to their biomechanical roles?",
        options: [
          "Ligaments connect muscle to bone using elastic elastin; tendons lubricate articular cartilage",
          "Synovial membrane absorbs axial bone shock; hyaline cartilage actively pulls bones during flexion",
          "Tendons connect bone to bone preventing dislocation; articular cartilage secretes synovial fluid",
          "Ligaments stabilize bone-to-bone alignment; inelastic tendons transmit muscle pulling force to bone",
        ],
        answerIndex: 3,
        explanation:
          "Ligaments are tough fibrous bands linking bone to bone to stabilize the joint and limit unsafe motion; tendons are inelastic collagen cords linking skeletal muscle to bone so contraction force transfers efficiently without energy loss.",
        hints: [
          "Keep bone-to-bone (ligament) distinct from muscle-to-bone (tendon).",
          "Tendons must be inelastic so muscular contraction force is transferred directly to bone rather than stretching the cord.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "muscle-motility-hl",
        question: "Why does a mammalian **hip joint** (ball-and-socket) permit a far wider range of movement than a **knee or elbow joint** (hinge)?",
        options: [
          "The spherical femoral head rotates inside a cup-shaped acetabulum across multiple anatomical planes",
          "Hip joints completely lack ligaments and joint capsules, allowing bones to detach slightly when sprinting",
          "Knee joints contain only one skeletal muscle instead of antagonistic flexor–extensor muscle pairs",
          "Hip synovial fluid has lower viscosity than elbow synovial fluid, eliminating all muscular resistance",
        ],
        answerIndex: 0,
        explanation:
          "In a ball-and-socket joint (hip/shoulder), the rounded head of the femur articulates inside the hemispherical socket (acetabulum) of the pelvis, enabling flexion, extension, abduction, adduction, and rotation across three axes—whereas a hinge joint restricts motion primarily to one plane.",
        hints: [
          "Compare the 3D geometry of a spherical ball in a socket versus a cylindrical hinge.",
          "A hinge joint constrains motion to flexion and extension in one plane, whereas a ball-and-socket permits multi-planar rotation.",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "gas-exchange-haemoglobin",
        question:
          "Bar-headed geese migrate over the Himalayas at 8000 m altitude where ambient {{pO_2}} is under one-third of sea level. Which haemoglobin adaptation best supports oxygen uptake during such high-altitude flight?",
        options: [
          "A right-shifted dissociation curve with higher P₅₀ so lungs reject excess oxygen at low altitude",
          "A left-shifted dissociation curve with lower P₅₀, enhancing O₂ loading in hypoxic mountain air",
          "Loss of cooperative binding so haemoglobin behaves like plasma and carries O₂ linearly with pO₂",
          "Complete replacement of haemoglobin with myoglobin inside circulating nucleated red blood cells",
        ],
        answerIndex: 1,
        explanation:
          "In severely hypoxic high-altitude air, loading O₂ in the lungs is the primary bottleneck. Amino-acid substitutions in bar-headed goose haemoglobin shift its dissociation curve to the **left** (lower P₅₀, higher O₂ affinity), allowing high saturation even at low alveolar pO₂.",
        hints: [
          "At 8000 m altitude, is the biggest challenge loading O₂ in the lungs or keeping O₂ out of tissues?",
          "Which curve shift increases % saturation at a low pO₂?",
        ],
      },
      {
        id: "b3-b4-form-organisms-ecosystems-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "muscle-motility-hl",
        question:
          "During a rapid dive, a bottlenose dolphin (*Tursiops truncatus*) minimizes swimming energy expenditure. Which combination of musculoskeletal and morphological traits directly reduces viscous drag and generates propulsion?",
        options: [
          "Rigid external chitin exoskeleton paired with wide flat dorsal fins creating maximum turbulent eddies",
          "Dense heavy bone marrow cavities eliminating buoyancy and antagonistic intercostals driving tail kicks",
          "Fusiform streamlined body shape minimizing drag paired with powerful epaxial/hypaxial muscles flexing horizontal flukes",
          "Sessile holdfast structures anchoring the tail while passive blood-vessel recoil oscillates pectoral flippers",
        ],
        answerIndex: 2,
        explanation:
          "Aquatic mammals achieve efficient locomotion through a streamlined fusiform silhouette that reduces water drag, low-density blubber aiding neutral buoyancy, and huge antagonistic dorsal/ventral trunk muscles driving vertical sweeps of the horizontal tail flukes.",
        hints: [
          "Connect marine form-function adaptations (streamlining, thrust generation, buoyancy) to B3.3 locomotion.",
          "Look for fusiform hydrodynamics paired with powerful antagonistic trunk muscles driving horizontal tail flukes.",
        ],
      },
    ],
  },
];
