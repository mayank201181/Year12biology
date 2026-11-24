import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // DIAGNOSTIC QUIZ (10 Qs — 6 short + 4 balanced MCQ [0, 2, 1, 3])
  // ===========================================================================
  quiz: [
    {
      id: "b3-b4-form-organisms-ecosystems-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "gas-exchange-haemoglobin",
      question:
        "A resting student breathes 15 times per minute with a tidal volume of {{0.48 dm^3}}. Calculate their pulmonary ventilation rate in {{dm^3 min^(-1)}}.",
      answer: { type: "number", value: 7.2, tolerance: 0.05, display: "7.2 dm³ min⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 31.25, tolerance: 0.1 },
          feedback: "You divided breathing rate by tidal volume—multiply them: V_E = V_T × f.",
        },
        {
          spec: { type: "number", value: 15.48, tolerance: 0.05 },
          feedback: "Multiply tidal volume by breathing frequency rather than adding them.",
        },
      ],
      solution: [
        "Use the ventilation rate formula: {{V_E = V_T * f}}.",
        "{{V_E = 0.48 * 15 = 7.2 dm^3 min^(-1)}}.",
      ],
      hints: [
        "Multiply tidal volume (volume per breath) by breathing rate (breaths per minute).",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "gas-exchange-haemoglobin",
      question: "What is the primary role of **pulmonary surfactant** secreted by type II pneumocytes?",
      options: [
        "Lowering alveolar water surface tension so alveoli do not collapse during exhalation",
        "Catalysing conversion of dissolved carbon dioxide into bicarbonate ions inside plasma",
        "Pumping oxygen actively from alveolar air into pulmonary venules using cellular ATP",
        "Contracting smooth muscle rings around bronchioles to drive passive thoracic expansion",
      ],
      answerIndex: 0,
      explanation:
        "Pulmonary surfactant is a phospholipid-protein monolayer secreted by type II pneumocytes that disrupts hydrogen bonding at the air–water interface, lowering surface tension and preventing alveolar collapse.",
      hints: [
        "Think about the cohesive surface tension of the thin water film lining tiny spherical alveoli.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "gas-exchange-haemoglobin",
      question:
        "Spirometry yields tidal volume {{0.55 dm^3}}, inspiratory reserve volume {{2.75 dm^3}}, expiratory reserve volume {{1.15 dm^3}}, and residual volume {{1.25 dm^3}}. Calculate the **vital capacity** in {{dm^3}}.",
      answer: { type: "number", value: 4.45, tolerance: 0.02, display: "4.45 dm³" },
      traps: [
        {
          spec: { type: "number", value: 5.7, tolerance: 0.02 },
          feedback: "5.70 dm³ is total lung capacity—vital capacity excludes residual volume, which cannot be exhaled.",
        },
      ],
      solution: [
        "Vital capacity equals the sum of all movable lung volumes: {{VC = V_T + IRV + ERV}}.",
        "{{VC = 0.55 + 2.75 + 1.15 = 4.45 dm^3}} (residual volume is excluded).",
      ],
      hints: [
        "Vital capacity is the maximum air forcibly exhaled after a deepest inhalation.",
        "Exclude residual volume (RV), which stays trapped inside the alveoli.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "transport-circulation-plants",
      question:
        "At rest, a person's heart rate is 72 beats min⁻¹ and stroke volume is {{75 cm^3}}. Calculate their cardiac output in {{dm^3 min^(-1)}}.",
      answer: { type: "number", value: 5.4, tolerance: 0.05, display: "5.4 dm³ min⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 5400, tolerance: 5 },
          feedback: "5400 is in cm³ min⁻¹—divide by 1000 to convert to dm³ min⁻¹.",
        },
      ],
      solution: [
        "Calculate cardiac output in {{cm^3 min^(-1)}}: {{CO = HR * SV = 72 * 75 = 5400 cm^3 min^(-1)}}.",
        "Convert to {{dm^3 min^(-1)}} by dividing by 1000: {{5400 / 1000 = 5.4 dm^3 min^(-1)}}.",
      ],
      hints: [
        "Use {{CO = HR * SV}}.",
        "Remember {{1 dm^3 = 1000 cm^3}}.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-quiz-q05",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "transport-circulation-plants",
      question: "Which structural adaptation specifically prevents backward blood flow inside low-pressure mammalian veins?",
      options: [
        "Thick muscular tunica media resisting peak left-ventricular systolic surges",
        "Fenestrated single-cell endothelium maximizing tissue ultrafiltration",
        "One-way semilunar pocket valves spaced along the wide venous lumen",
        "Lignified spiral wall thickenings withstanding negative suction tension",
      ],
      answerIndex: 2,
      explanation:
        "Veins operate under very low blood pressure (~1–2 kPa); one-way pocket (semilunar) valves close whenever gravity threatens backflow, ensuring skeletal muscle contractions drive blood solely back toward the heart.",
      hints: [
        "Recall what stops venous blood in leg veins from pooling downward under gravity.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "gas-exchange-haemoglobin",
      question:
        "Haemoglobin leaves lung capillaries 97% saturated. At a muscle {{pO_2}} of {{4.0 kPa}}, saturation is 65% at resting pH 7.4 and 43% at exercising pH 7.2. Calculate the **extra percentage points** of O₂ unloaded because of the Bohr shift.",
      answer: { type: "number", value: 22, tolerance: 0.5, display: "22%" },
      traps: [
        {
          spec: { type: "number", value: 54, tolerance: 0.5 },
          feedback: "54% is the total O₂ unloaded at pH 7.2—subtract the 32% already unloaded at pH 7.4.",
        },
        {
          spec: { type: "number", value: 32, tolerance: 0.5 },
          feedback: "32% is the O₂ unloaded at pH 7.4 before the Bohr shift.",
        },
      ],
      solution: [
        "O₂ unloaded at pH 7.4: {{97% - 65% = 32%}}.",
        "O₂ unloaded at pH 7.2: {{97% - 43% = 54%}}.",
        "Extra O₂ unloaded due to Bohr shift: {{54% - 32% = 22}} percentage points.",
      ],
      hints: [
        "Find how much O₂ is unloaded at pH 7.4 versus pH 7.2.",
        "Take the difference between the two saturations at 4.0 kPa: {{65 - 43}}.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "muscle-motility-hl",
      question:
        "A relaxed sarcomere is {{2.50 μm}} long with a constant A-band of {{1.60 μm}}. When the sarcomere contracts to {{2.05 μm}}, calculate the new combined width of its I-band (two half I-bands) in μm.",
      answer: { type: "number", value: 0.45, tolerance: 0.01, display: "0.45 μm" },
      traps: [
        {
          spec: { type: "number", value: 0.9, tolerance: 0.01 },
          feedback: "0.90 μm was the relaxed I-band width before contraction.",
        },
      ],
      solution: [
        "Inside one sarcomere, {{L_sarcomere = A + I_combined}}.",
        "The A-band stays constant at {{1.60 μm}}, so {{I_combined = 2.05 - 1.60 = 0.45 μm}}.",
      ],
      hints: [
        "Remember that A-band width never changes during sarcomere contraction.",
        "Subtract the constant A-band from the contracted sarcomere length.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-quiz-q08",
      kind: "mcq",
      difficulty: "warmup",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "muscle-motility-hl",
      question: "Which sarcomere protein directly binds {{Ca^(2+)}} ions released from the sarcoplasmic reticulum to initiate muscle contraction?",
      options: [
        "Titin",
        "Troponin",
        "Myosin ATPase",
        "Elastin",
      ],
      answerIndex: 1,
      explanation:
        "Ca²⁺ ions bind specifically to troponin on the thin filament, inducing a conformational change that moves tropomyosin off the myosin-binding sites on actin.",
      hints: [
        "Distinguish the Ca²⁺-binding switch from the filamentous protein (tropomyosin) that it moves.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "adaptation-biomes-niches",
      question:
        "A wetland sedge survives soil pH 4.5 to 8.5 without competitors, but interspecific competition restricts it to pH 5.7 to 7.3. Calculate the percentage of its fundamental pH niche width occupied as its realized niche.",
      answer: { type: "number", value: 40, tolerance: 0.5, display: "40%" },
      traps: [
        {
          spec: { type: "number", value: 60, tolerance: 0.5 },
          feedback: "60% is the percentage lost to competition; the question asks for the percentage occupied as the realized niche.",
        },
      ],
      solution: [
        "Fundamental width = {{8.5 - 4.5 = 4.0}} pH units.",
        "Realized width = {{7.3 - 5.7 = 1.6}} pH units.",
        "Percentage occupied = {{(1.6 / 4.0) * 100 = 40%}}.",
      ],
      hints: [
        "Calculate the width (max − min) of both the fundamental and realized pH ranges.",
        "Divide realized width by fundamental width and multiply by 100.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-quiz-q10",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "adaptation-biomes-niches",
      question: "Which terrestrial biome corresponds to a mean annual temperature of 27 °C and annual precipitation of 2800 mm?",
      options: [
        "Hot desert",
        "Arctic tundra",
        "Taiga (boreal forest)",
        "Tropical rainforest",
      ],
      answerIndex: 3,
      explanation:
        "High year-round temperatures of 25–30 °C combined with abundant annual precipitation above 2000 mm define the tropical rainforest biome on a Whittaker chart.",
      hints: [
        "Check the high-temperature, high-precipitation corner of the Whittaker biome chart.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS P1 (SL Core, 15 Qs) & P2 (SL + HL Extension, 15 Qs)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER P1 — SL Core Paper 1B & Paper 2 (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "b3-b4-form-organisms-ecosystems-p1",
      title: "Paper 1B & 2 · SL Core — Gas Exchange, Vascular Transport & Ecology",
      level: "SL",
      questions: [
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q01",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "gas-exchange-haemoglobin",
          question:
            "A resting spirometer trace records 9 complete breaths over 45 seconds, with a mean tidal volume of {{520 cm^3}}. Calculate the pulmonary ventilation rate in {{dm^3 min^(-1)}}.",
          answer: { type: "number", value: 6.24, tolerance: 0.02, display: "6.24 dm³ min⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 6240, tolerance: 10 },
              feedback: "You left the answer in cm³ min⁻¹—divide by 1000 to express in dm³ min⁻¹.",
            },
            {
              spec: { type: "number", value: 4.68, tolerance: 0.02 },
              feedback: "4.68 dm³ is the volume moved in 45 seconds—scale up to 60 seconds (× 60/45).",
            },
          ],
          solution: [
            "Convert 9 breaths in 45 s to breaths per minute: {{f = 9 * (60 / 45) = 12}} breaths min⁻¹.",
            "Convert tidal volume to {{dm^3}}: {{V_T = 520 / 1000 = 0.52 dm^3}}.",
            "Multiply: {{V_E = 0.52 * 12 = 6.24 dm^3 min^(-1)}}.",
          ],
          hints: [
            "First scale the breath count from 45 seconds to 60 seconds (1 minute).",
            "Convert {{cm^3}} into {{dm^3}} by dividing by 1000 before multiplying.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q02",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "gas-exchange-haemoglobin",
          marks: 3,
          question:
            "Explain three structural features of mammalian alveoli that maximize the rate of passive gas exchange.",
          modelAnswer:
            "Millions of spherical alveoli create a vast cumulative surface area for diffusion. Their walls consist of a single layer of extremely flat type I pneumocytes fused tightly to capillary endothelium, minimizing the diffusion path to under 1 μm. Type II pneumocytes secrete amphipathic surfactant into the moist lining film, lowering water surface tension to prevent alveolar collapse while gases dissolve readily, and dense surrounding capillary perfusion paired with continuous ventilation preserves steep concentration gradients.",
          markScheme: [
            {
              point: "Huge total surface area created by millions of tiny spherical sacs",
              keywords: ["surface area", "millions"],
            },
            {
              point: "Extremely short diffusion distance via single-cell-thick flat type I pneumocytes (and capillary wall)",
              keywords: ["type i", "one cell thick", "short diffusion", "squamous", "minimizing the diffusion"],
            },
            {
              point: "Moist surface with surfactant from type II pneumocytes preventing collapse, and/or dense capillary network maintaining steep concentration gradient",
              keywords: ["surfactant", "type ii", "concentration gradient", "steep"],
            },
          ],
          hints: [
            "Map each structural feature directly onto Fick's diffusion factors: area, thickness, moisture, and gradient.",
            "Name both Type I and Type II pneumocytes explicitly for full IB credit.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q03",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "gas-exchange-haemoglobin",
          marks: 4,
          question:
            "Compare and contrast the muscular actions and thoracic pressure changes during human **inspiration** and **forced expiration**.",
          modelAnswer:
            "Both processes rely on antagonistic skeletal muscles changing thoracic volume to move air down a pressure gradient by Boyle's law. During inspiration, the diaphragm contracts and flattens downward while the external intercostal muscles contract to lift the ribcage up and outward; thoracic volume increases, causing alveolar pressure to fall below atmospheric pressure so air enters. In contrast, during forced expiration the diaphragm relaxes upward and external intercostals relax, while the internal intercostals and abdominal wall muscles contract actively to pull the ribcage down and inward; thoracic volume drops sharply, raising alveolar pressure above atmospheric pressure to expel reserve air.",
          markScheme: [
            {
              point: "Similarity: both use antagonistic muscle action changing thoracic volume to drive passive airflow down a pressure gradient",
              keywords: ["antagonistic", "pressure gradient", "boyle"],
            },
            {
              point: "Inspiration muscles: diaphragm contracts/flattens AND external intercostals contract (lifting ribcage up/out)",
              keywords: ["diaphragm contracts", "external intercostal"],
            },
            {
              point: "Forced expiration muscles: internal intercostals AND abdominal muscles contract (while diaphragm/externals relax)",
              keywords: ["internal intercostal", "abdominal"],
            },
            {
              point: "Opposite volume/pressure outcomes: inspiration raises volume and lowers pressure below atmospheric; forced expiration lowers volume and raises pressure above atmospheric",
              keywords: ["below atmospheric", "above atmospheric"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No creditworthy biological comparison or mechanism." },
            { band: "1–2", marks: [1, 2], descriptor: "States basic muscle contraction for one phase or omits pressure-gradient causality." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly includes a similarity plus accurate antagonistic external vs internal intercostal, diaphragm, abdominal, volume, and atmospheric-pressure contrasts." },
          ],
          hints: [
            "'Compare and contrast' requires BOTH at least one similarity AND clear point-by-point differences.",
            "Always specify *external* versus *internal* intercostals and state whether alveolar pressure moves above or below atmospheric pressure.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q04",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "gas-exchange-haemoglobin",
          question:
            "Using a light microscope with a field-of-view area of {{0.16 mm^2}}, a student counts 44 stomata on a nail-varnish impression of a leaf's lower epidermis. Calculate the stomatal density in stomata mm⁻² (enter the number only).",
          answer: { type: "number", value: 275, tolerance: 1, display: "275" },
          traps: [
            {
              spec: { type: "number", value: 7.04, tolerance: 0.05 },
              feedback: "Divide count by field-of-view area rather than multiplying.",
            },
          ],
          solution: [
            "Stomatal density = number of stomata ÷ field area.",
            "{{44 / 0.16 = 275}} stomata mm⁻².",
          ],
          hints: [
            "Divide the count of stomata by the area of the field of view in {{mm^2}}.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "gas-exchange-haemoglobin",
          marks: 3,
          question:
            "Outline the physiological sequence by which leaf guard cells close a stoma during drought stress.",
          modelAnswer:
            "Water deficit triggers synthesis and release of the plant hormone abscisic acid (ABA), which binds guard-cell receptors and stimulates potassium ions (K⁺) to exit the guard cells. Solute loss raises internal water potential above that of neighbouring epidermal cells, causing water to leave the guard cells by osmosis. The resulting loss of turgor makes the guard cells become flaccid so their unevenly thickened inner cellulose walls straighten together, sealing the stomatal pore.",
          markScheme: [
            {
              point: "Abscisic acid (ABA) hormone signalling triggers K⁺ ion efflux out of guard cells",
              keywords: ["abscisic acid", "aba", "potassium", "k+"],
            },
            {
              point: "Higher internal water potential causes water to exit guard cells by osmosis",
              keywords: ["osmosis", "water potential"],
            },
            {
              point: "Loss of turgor renders guard cells flaccid so inner walls straighten and close the pore",
              keywords: ["flaccid", "turgor"],
            },
          ],
          hints: [
            "Name the drought-stress plant hormone that starts the cascade.",
            "Link ion movement → water potential → osmosis → turgor state of guard cells.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "transport-circulation-plants",
          question:
            "A leafy shoot is sealed into a potometer with a capillary cross-sectional area of {{0.025 cm^2}}. Over 5.0 minutes, the air bubble advances {{6.0 cm}}. Calculate the rate of water uptake in {{cm^3 min^(-1)}}.",
          answer: { type: "number", value: 0.03, tolerance: 0.001, display: "0.03 cm³ min⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 0.15, tolerance: 0.005 },
              feedback: "0.15 cm³ is the total volume absorbed in 5 minutes—divide by 5.0 minutes to obtain the rate.",
            },
            {
              spec: { type: "number", value: 1.2, tolerance: 0.05 },
              feedback: "1.2 cm min⁻¹ is linear bubble speed—multiply by cross-sectional area (0.025 cm²) to get volume rate.",
            },
          ],
          solution: [
            "Calculate total volume of water absorbed: {{V = A * d = 0.025 * 6.0 = 0.15 cm^3}}.",
            "Divide by elapsed time: {{Rate = 0.15 / 5.0 = 0.03 cm^3 min^(-1)}}.",
          ],
          hints: [
            "First compute the volume of the cylinder of water moved: volume = cross-sectional area × distance.",
            "Divide the total volume by the 5.0-minute time interval.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "transport-circulation-plants",
          marks: 4,
          question:
            "Explain how water is transported continuously from soil roots to the canopy of a tall tree inside xylem vessels.",
          modelAnswer:
            "Evaporation of water from wet spongy mesophyll cell walls into leaf air spaces and diffusion out through stomata (transpiration) generates strong negative pressure (tension) at the top of xylem vessels. Polar water molecules form hydrogen bonds with one another (cohesion), holding an unbroken liquid column inside dead, hollow, continuous xylem vessels lacking end walls. Adhesion between water molecules and hydrophilic cellulose or lignin walls counters gravity, while tough spiral lignin thickenings prevent vessel walls from collapsing inward under negative tension.",
          markScheme: [
            {
              point: "Evaporation / transpiration from mesophyll walls generates negative pressure (tension) pulling water upward",
              keywords: ["transpiration", "evaporation", "tension", "negative pressure"],
            },
            {
              point: "Hydrogen bonding causes cohesion between water molecules forming an unbroken column",
              keywords: ["cohesion", "hydrogen bond"],
            },
            {
              point: "Adhesion of water to hydrophilic xylem vessel walls opposes gravity",
              keywords: ["adhesion", "hydrophilic"],
            },
            {
              point: "Xylem vessel adaptation: dead hollow continuous tubes reinforced with lignin resisting inward collapse",
              keywords: ["lignin", "collapse", "hollow"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant transport mechanism described." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions transpiration or cohesion without linking tension, adhesion, or lignified vessel structure." },
            { band: "3–4", marks: [3, 4], descriptor: "Coherently explains transpiration-driven negative tension, hydrogen-bond cohesion, wall adhesion, and dead lignified xylem vessel anatomy." },
          ],
          hints: [
            "Connect the driving force in the leaf (evaporation/tension) to the two intermolecular forces inside the xylem column.",
            "Include one structural adaptation of dead lignified xylem vessels.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "transport-circulation-plants",
          question:
            "An athlete's resting heart rate is 60 beats min⁻¹ (stroke volume {{70 cm^3}}). During intense rowing, heart rate climbs to 160 beats min⁻¹ and stroke volume reaches {{115 cm^3}}. Calculate the **increase** in cardiac output in {{dm^3 min^(-1)}}.",
          answer: { type: "number", value: 14.2, tolerance: 0.05, display: "14.2 dm³ min⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 18.4, tolerance: 0.05 },
              feedback: "18.4 dm³ min⁻¹ is the exercise cardiac output—subtract the resting value (4.2 dm³ min⁻¹) to find the increase.",
            },
            {
              spec: { type: "number", value: 14200, tolerance: 20 },
              feedback: "14 200 is in cm³ min⁻¹—divide by 1000 to convert to dm³ min⁻¹.",
            },
          ],
          solution: [
            "Resting cardiac output: {{60 * 70 = 4200 cm^3 min^(-1) = 4.2 dm^3 min^(-1)}}.",
            "Exercise cardiac output: {{160 * 115 = 18400 cm^3 min^(-1) = 18.4 dm^3 min^(-1)}}.",
            "Increase = {{18.4 - 4.2 = 14.2 dm^3 min^(-1)}}.",
          ],
          hints: [
            "Compute resting cardiac output and exercise cardiac output separately in {{dm^3 min^(-1)}}.",
            "Subtract resting output from exercise output.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "transport-circulation-plants",
          marks: 4,
          question:
            "Compare and contrast the structural adaptations of mammalian arteries, capillaries, and veins in relation to blood pressure and function.",
          modelAnswer:
            "All three vessels share an inner endothelial lining that minimizes friction with flowing blood. Arteries withstand high pulsatile pressure leaving the heart via a narrow lumen and a thick tunica media rich in smooth muscle and elastic fibres that stretch and recoil to sustain diastolic flow. Veins return low-pressure blood through a wide lumen with thin muscular walls and one-way semilunar pocket valves preventing backflow. Capillaries specialize in rapid tissue exchange using microscopic lumens and one-cell-thick fenestrated endothelium with no muscle layer to shorten diffusion distance.",
          markScheme: [
            {
              point: "Similarity: all lined internally by smooth endothelium (or transport blood in closed vascular network)",
              keywords: ["endotheli", "closed"],
            },
            {
              point: "Arteries: narrow lumen with thick elastic fibres and smooth muscle withstanding/recoiling from high pressure",
              keywords: ["elastic", "recoil", "thick", "high pressure"],
            },
            {
              point: "Veins: wide lumen, thin walls, and pocket/semilunar valves preventing backflow at low pressure",
              keywords: ["valve", "backflow", "wide lumen"],
            },
            {
              point: "Capillaries: one-cell-thick wall with fenestrations/pores for short diffusion distance and exchange",
              keywords: ["one-cell-thick", "one cell thick", "fenestration", "diffusion distance"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No accurate structural-functional comparison." },
            { band: "1–2", marks: [1, 2], descriptor: "Describes wall thickness or valves for one or two vessel types without linking to pressure/exchange." },
            { band: "3–4", marks: [3, 4], descriptor: "Provides a similarity plus clear structure–function contrasts covering arteries (elastic recoil), veins (wide lumen/valves), and capillaries (one-cell-thick fenestrated exchange)." },
          ],
          hints: [
            "Include one shared feature (like endothelium) before contrasting arteries, veins, and capillaries.",
            "Link every structural feature explicitly to blood pressure or diffusion.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "transport-circulation-plants",
          marks: 3,
          question:
            "Explain why mammalian double circulation supports faster systemic oxygen delivery than single circulation in bony fish, and outline how a coronary thrombus causes myocardial infarction.",
          modelAnswer:
            "In single circulation, blood pressure drops steeply across gill capillaries before flowing sluggishly to body tissues. Double circulation returns freshly oxygenated blood from lung capillaries back to the thick-walled left ventricle so it is re-pressurized to high systemic pressure while keeping pulmonary pressure safely low. If an atherosclerotic plaque ruptures inside a coronary artery, a thrombus (blood clot) occludes the lumen, starving downstream cardiac muscle of oxygen and glucose needed for aerobic ATP synthesis and causing myocardial tissue death.",
          markScheme: [
            {
              point: "Single circulation suffers pressure drop across gill capillaries before reaching body tissues",
              keywords: ["gill", "pressure drop", "drops steeply", "low pressure"],
            },
            {
              point: "Double circulation returns oxygenated blood to the left heart to re-pressurize it for high-pressure systemic flow",
              keywords: ["re-pressurize", "left ventricle", "high systemic", "separate"],
            },
            {
              point: "Coronary plaque/thrombus blocks lumen, depriving cardiomyocytes of O₂/glucose for aerobic respiration (cell death)",
              keywords: ["atherosclerotic", "plaque", "oxygen and glucose", "aerobic", "tissue death"],
            },
          ],
          hints: [
            "Explain what happens to pressure after blood passes through fish gill capillaries versus mammalian lungs.",
            "Trace plaque → clot/occlusion → loss of O₂ and glucose → failure of aerobic respiration in heart muscle.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q11",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "adaptation-biomes-niches",
          question:
            "A yeast species performs aerobic cellular respiration when oxygen is plentiful and switches to alcoholic fermentation when oxygen disappears. State the exact two-word biological term for this oxygen-metabolism niche.",
          answer: {
            type: "text",
            accept: ["facultative anaerobe", "facultative anaerobes"],
            display: "facultative anaerobe",
          },
          solution: [
            "Organisms capable of switching between aerobic respiration (with O₂) and anaerobic respiration/fermentation (without O₂) are **facultative anaerobes**.",
          ],
          hints: [
            "Compare obligate aerobe, obligate anaerobe, and the flexible third category.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "adaptation-biomes-niches",
          marks: 4,
          question:
            "Explain four adaptations that reduce water loss or enhance water storage in xerophytic plants inhabiting hot deserts or dry coastal sand dunes.",
          modelAnswer:
            "A thick waxy cuticle covers the epidermis as a hydrophobic barrier minimizing cuticular evaporation. Rolled leaves with sunken stomatal pits and dense epidermal hairs (trichomes) trap a still humid boundary layer around stomata, flattening the water-vapour concentration gradient. Reducing leaves to sharp spines slashes transpiring surface area while deterring herbivores, whereas fleshy succulent stems store water reserves. Many desert succulents also use CAM photosynthesis, opening stomata only during cool humid nights to fix CO₂ and keeping them shut under scorching daytime heat.",
          markScheme: [
            {
              point: "Thick waxy cuticle providing a hydrophobic waterproof barrier reducing cuticular water loss",
              keywords: ["waxy cuticle", "hydrophobic", "cuticular"],
            },
            {
              point: "Rolled leaves, sunken stomata, or trichomes trapping humid air to reduce water-vapour diffusion gradient",
              keywords: ["humid", "boundary layer", "sunken", "trichome", "rolled"],
            },
            {
              point: "Reduced leaf surface area (spines/needles) and/or fleshy succulent tissues storing water",
              keywords: ["spine", "succulent", "surface area"],
            },
            {
              point: "CAM stomatal timing (opening at night, closing by day) or extensive shallow/deep root systems",
              keywords: ["cam", "night", "deep root", "shallow root"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid xerophytic adaptations explained." },
            { band: "1–2", marks: [1, 2], descriptor: "Lists 1–2 structural traits without linking them to water-vapour gradients or evaporation." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains four distinct xerophytic adaptations with explicit physiological links to lowering transpiration or conserving water." },
          ],
          hints: [
            "For each adaptation, state BOTH the structure/behaviour AND how it lowers transpiration or stores water.",
            "Draw from cuticle, rolled leaves/sunken pits/hairs, spines/succulence, roots, and nocturnal CAM opening.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "adaptation-biomes-niches",
          question:
            "Along a salt-marsh belt transect, *Salicornia* spans {{0 m}} to {{14.0 m}} in the absence of competitors, but when *Spartina* grass colonizes the upper marsh, *Salicornia* is restricted to {{0 m}} to {{7.7 m}}. Calculate the **percentage reduction** in *Salicornia*'s transect range.",
          answer: { type: "number", value: 45, tolerance: 0.5, display: "45%" },
          traps: [
            {
              spec: { type: "number", value: 55, tolerance: 0.5 },
              feedback: "55% is the percentage of the fundamental range *remaining*—subtract from 100% for the percentage reduction.",
            },
          ],
          solution: [
            "Range lost = {{14.0 - 7.7 = 6.3 m}}.",
            "Percentage reduction = {{(6.3 / 14.0) * 100 = 45%}}.",
          ],
          hints: [
            "Find the metres of transect lost: fundamental width minus realized width.",
            "Divide the lost distance by the original 14.0 m fundamental width, then multiply by 100.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "adaptation-biomes-niches",
          marks: 3,
          question:
            "Outline three abiotic factors that limit the global geographical distribution of reef-building corals, linking each factor to coral biology.",
          modelAnswer:
            "Corals require shallow, clear, low-turbidity water so sufficient sunlight penetrates to power photosynthesis in their mutualistic intracellular zooxanthellae algae. They require warm tropical sea temperatures between roughly 20 °C and 28 °C because excessive heat causes coral bleaching (expulsion of symbionts) while cold slows calcification. Finally, they depend on alkaline seawater (pH ~8.1–8.4) and stable salinity (32–42‰) so ample carbonate ions are available to precipitate calcium carbonate (CaCO₃) skeletons without osmotic stress.",
          markScheme: [
            {
              point: "Shallow, clear water / high light intensity required for photosynthetic zooxanthellae symbionts",
              keywords: ["zooxanthellae", "light", "photosynthe", "shallow", "clear"],
            },
            {
              point: "Narrow warm temperature range (~20–28 °C); excess heat triggers bleaching / loss of symbionts",
              keywords: ["20", "28", "bleaching", "temperature", "warm"],
            },
            {
              point: "Alkaline pH (~8.1–8.4) for CaCO₃ skeleton calcification and/or narrow salinity preventing osmotic damage",
              keywords: ["alkaline", "carbonate", "caco", "salinity", "calcification"],
            },
          ],
          hints: [
            "Think about light/depth, temperature, pH, and salinity on tropical reefs.",
            "Tie light directly to zooxanthellae and pH directly to CaCO₃ skeleton deposition.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "adaptation-biomes-niches",
          marks: 6,
          question:
            "Using named biological examples, discuss the distinction between a fundamental niche and a realized niche, and evaluate the possible ecological outcomes when two species compete for identical resources.",
          modelAnswer:
            "A species' fundamental niche encompasses the entire theoretical set of abiotic tolerances and resources it could exploit in the complete absence of competitors or predators, whereas its realized niche is the narrower space actually occupied in nature after biotic interactions. In Connell's rocky-shore study, the barnacle Chthamalus can physiologically survive from high tide down to low tide (broad fundamental niche), yet faster-growing Semibalanus crowds it off the lower rock, restricting Chthamalus to a smaller upper-shore realized niche while desiccation limits Semibalanus at the top. According to Gause's competitive exclusion principle, two species cannot permanently occupy completely overlapping niches: in mixed laboratory cultures, Paramecium aurelia outcompetes and drives Paramecium caudatum to local extinction. However, extinction is not inevitable—natural selection often favours resource partitioning (niche differentiation), as seen in MacArthur's forest warblers foraging at distinct spruce-canopy heights so stable coexistence persists.",
          markScheme: [
            {
              point: "Defines fundamental niche as full theoretical abiotic/resource range without biotic competitors/predators",
              keywords: ["theoretical", "absence of competitors", "full range", "without competitors"],
            },
            {
              point: "Defines realized niche as the narrower actual range occupied under biotic competition/interactions",
              keywords: ["narrower", "actual", "biotic", "restricted"],
            },
            {
              point: "Named field example showing biotic compression vs abiotic limit (e.g. Connell's Chthamalus vs Semibalanus)",
              keywords: ["chthamalus", "semibalanus", "connell", "barnacle"],
            },
            {
              point: "States Gause's competitive exclusion principle: identical niches cannot coexist indefinitely",
              keywords: ["competitive exclusion", "gause", "cannot permanently", "coexist"],
            },
            {
              point: "Outcome 1 with example: local extinction / elimination of inferior competitor (e.g. Paramecium aurelia vs P. caudatum)",
              keywords: ["paramecium", "extinction", "outcompetes", "eliminat"],
            },
            {
              point: "Outcome 2 with example: resource partitioning / niche differentiation permitting coexistence (e.g. warblers in canopy zones)",
              keywords: ["resource partitioning", "niche differentiation", "warbler", "coexistence"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant niche concepts or examples." },
            { band: "1–2", marks: [1, 2], descriptor: "Defines fundamental vs realized niche in general terms without accurate examples or outcomes." },
            { band: "3–4", marks: [3, 4], descriptor: "Distinguishes both niches with one named example and mentions competitive exclusion." },
            { band: "5–6", marks: [5, 6], descriptor: "Thoroughly contrasts both niches using named empirical studies (e.g. barnacles, Paramecium, warblers) and evaluates both local exclusion and resource partitioning." },
          ],
          hints: [
            "Start with crisp definitions of fundamental versus realized niche.",
            "Include Connell's barnacles (*Chthamalus* vs *Semibalanus*) to separate abiotic from biotic boundaries.",
            "Contrast BOTH outcomes of Gause's principle: local exclusion (*Paramecium*) versus resource partitioning (warblers).",
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER P2 — SL & HL Extension Paper 2 (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "b3-b4-form-organisms-ecosystems-p2",
      title: "Paper 2 · HL Extension — Bohr Shift, Cardiac Cycle, Phloem & Sarcomeres",
      level: "HL",
      questions: [
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "gas-exchange-haemoglobin",
          question:
            "At a placental oxygen partial pressure of {{3.5 kPa}}, fetal haemoglobin (HbF) is 79% saturated whereas maternal adult haemoglobin (HbA) is 58% saturated. Calculate the percentage-point difference in saturation between HbF and HbA at this {{pO_2}}.",
          answer: { type: "number", value: 21, tolerance: 0.5, display: "21%" },
          solution: [
            "Subtract maternal saturation from fetal saturation: {{79% - 58% = 21}} percentage points.",
          ],
          hints: [
            "Take the direct difference between the two % saturation readings at 3.5 kPa.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q02",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "gas-exchange-haemoglobin",
          marks: 5,
          question:
            "Explain the biochemical mechanism and physiological advantage of the **Bohr shift** inside capillaries supplying vigorously sprinting leg muscles.",
          modelAnswer:
            "Rapid aerobic respiration in contracting leg muscle releases large quantities of carbon dioxide, which diffuses into red blood cells. Inside erythrocytes, the enzyme carbonic anhydrase catalyses the reaction of CO₂ with water to form carbonic acid (H₂CO₃), which dissociates into hydrogen ions (H⁺) and hydrogencarbonate ions (HCO₃⁻), lowering local blood pH. Excess H⁺ ions bind to amino-acid side chains on haemoglobin, altering its tertiary and quaternary conformation and reducing its affinity for O₂. This shifts the oxygen dissociation curve to the right (raising P₅₀), causing oxyhaemoglobin to dissociate and unload substantially more O₂ at the exact same muscle pO₂ to sustain ATP production.",
          markScheme: [
            {
              point: "High aerobic respiration releases elevated CO₂ diffusing into erythrocytes",
              keywords: ["co2", "carbon dioxide", "respiration"],
            },
            {
              point: "Carbonic anhydrase forms carbonic acid (H₂CO₃) dissociating into H⁺ + HCO₃⁻, lowering blood pH",
              keywords: ["carbonic anhydrase", "carbonic acid", "h+", "lower", "ph"],
            },
            {
              point: "H⁺ binding alters haemoglobin conformation, reducing its affinity for O₂",
              keywords: ["affinity", "conformation", "shape"],
            },
            {
              point: "Oxygen dissociation curve shifts to the right (higher P₅₀)",
              keywords: ["right", "p50"],
            },
            {
              point: "Advantage: more O₂ is unloaded/dissociated at the same tissue pO₂ to support active aerobic ATP synthesis",
              keywords: ["unload", "dissociat", "more o2", "more oxygen", "atp"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant biochemical or physiological explanation." },
            { band: "1–2", marks: [1, 2], descriptor: "States the curve shifts right in exercise without explaining carbonic acid, H⁺ binding, or affinity." },
            { band: "3–4", marks: [3, 4], descriptor: "Links CO₂ → lower pH → lower affinity → rightward shift, missing enzyme detail or conformational/ATP rationale." },
            { band: "5", marks: [5, 5], descriptor: "Complete chain from muscular CO₂ through carbonic anhydrase, H⁺ protonation, conformational affinity drop, rightward shift, and enhanced O₂ unloading." },
          ],
          hints: [
            "Name the enzyme inside red blood cells that converts CO₂ + H₂O into carbonic acid.",
            "Trace the full chain: CO₂ ↑ → H⁺ ↑ / pH ↓ → conformational change → affinity ↓ → curve shifts right → more O₂ released.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "gas-exchange-haemoglobin",
          question:
            "At 100% saturation, {{1 dm^3}} of arterial blood binds {{200 cm^3}} of oxygen. Blood leaves the lungs 98% saturated and leaves an active muscle capillary bed 38% saturated. Calculate the volume of {{O_2}} (in {{cm^3}}) unloaded per {{dm^3}} of blood.",
          answer: { type: "number", value: 120, tolerance: 0.5, display: "120 cm³" },
          traps: [
            {
              spec: { type: "number", value: 60, tolerance: 0.5 },
              feedback: "60% is the percentage of capacity unloaded—multiply 0.60 by 200 cm³ dm⁻³ to get the O₂ volume.",
            },
            {
              spec: { type: "number", value: 76, tolerance: 0.5 },
              feedback: "76 cm³ is the O₂ remaining bound to venous blood (0.38 × 200), not the volume unloaded.",
            },
          ],
          solution: [
            "Percentage of haemoglobin O₂ capacity unloaded: {{98% - 38% = 60%}}.",
            "Volume unloaded per {{dm^3}} of blood: {{0.60 * 200 = 120 cm^3}}.",
          ],
          hints: [
            "First calculate the drop in % saturation from lungs to active muscle.",
            "Multiply that decimal fraction by the 100% carrying capacity ({{200 cm^3}}).",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "transport-circulation-plants",
          question:
            "A Wiggers cardiac-cycle recording shows atrial systole lasting {{0.10 s}}, ventricular systole lasting {{0.28 s}}, and diastole lasting {{0.42 s}}. Calculate the heart rate in beats min⁻¹ (bpm).",
          answer: { type: "number", value: 75, tolerance: 0.5, display: "75 bpm" },
          traps: [
            {
              spec: { type: "number", value: 48, tolerance: 0.5 },
              feedback: "You multiplied 60 × 0.80 instead of dividing 60 by the cycle time T.",
            },
          ],
          solution: [
            "Sum phase durations to get one cardiac cycle time: {{T = 0.10 + 0.28 + 0.42 = 0.80 s}}.",
            "Calculate heart rate: {{HR = 60 / 0.80 = 75}} beats min⁻¹.",
          ],
          hints: [
            "Add all three phase durations to find the total period T of one heartbeat in seconds.",
            "Divide 60 seconds by T.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q05",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "transport-circulation-plants",
          marks: 6,
          question:
            "Explain the sequence of chamber pressure changes and valve events occurring in the left side of the heart across one cardiac cycle, linking them to both audible heart sounds.",
          modelAnswer:
            "During atrial systole, the left atrium contracts slightly, raising atrial pressure above relaxed ventricular pressure to finish pushing blood through the open bicuspid (AV) valve into the left ventricle. As ventricular systole begins, thick ventricular myocardium contracts sharply so ventricular pressure rises above atrial pressure, passively snapping the AV valve shut and producing the first heart sound (S1, 'lub'). Continued isovolumetric contraction drives ventricular pressure higher until it surpasses aortic pressure, forcing the aortic semilunar valve open to eject blood into the systemic aorta. At the onset of ventricular diastole, the ventricle relaxes and its pressure falls below aortic pressure; incipient backflow snaps the semilunar valve closed, generating the second heart sound (S2, 'dub') and the aortic dicrotic notch. Finally, ventricular pressure falls below atrial pressure, passively reopening the AV valve so passive venous filling begins the next cycle.",
          markScheme: [
            {
              point: "Atrial systole tops up ventricular blood volume through open bicuspid / AV valve",
              keywords: ["atrial systole", "bicuspid", "av valve"],
            },
            {
              point: "Ventricular systole raises ventricular pressure above atrial pressure, snapping AV valve shut",
              keywords: ["above atrial", "snapping", "shut", "closes"],
            },
            {
              point: "AV valve closure causes first heart sound (S1 / 'lub')",
              keywords: ["lub", "s1", "first heart sound"],
            },
            {
              point: "Ventricular pressure exceeds aortic pressure, opening the aortic semilunar valve for ejection",
              keywords: ["exceeds aortic", "surpasses aortic", "semilunar valve open", "ejection"],
            },
            {
              point: "Ventricular diastole drops pressure below aortic pressure, snapping semilunar valve shut = second heart sound (S2 / 'dub')",
              keywords: ["dub", "s2", "below aortic", "second heart sound"],
            },
            {
              point: "Ventricular pressure drops below atrial pressure, passively reopening the AV valve for passive filling",
              keywords: ["below atrial", "reopen", "passive"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant cardiac cycle events explained." },
            { band: "1–2", marks: [1, 2], descriptor: "Names phases of systole/diastole without linking pressure crossovers to valve mechanics." },
            { band: "3–4", marks: [3, 4], descriptor: "Describes AV and semilunar valve closure with heart sounds but omits pressure-crossover conditions or passive refilling." },
            { band: "5–6", marks: [5, 6], descriptor: "Complete chronological pressure-driven account of atrial systole, AV closure (S1), semilunar opening/ejection, diastole/semilunar closure (S2), and passive AV reopening." },
          ],
          hints: [
            "Walk chronologically through atrial systole → ventricular systole → diastole.",
            "Every time a valve opens or shuts, explicitly state WHICH chamber/artery pressure just became greater than the other.",
            "Link AV closure to S1 ('lub') and semilunar closure to S2 ('dub').",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "transport-circulation-plants",
          question:
            "Along a systemic capillary, blood hydrostatic pressure drops from {{4.5 kPa}} at the arteriolar end to {{1.6 kPa}} at the venular end, while plasma oncotic pressure stays constant at {{3.1 kPa}}. Calculate the magnitude of the net inward osmotic reabsorption pressure at the venular end in kPa.",
          answer: { type: "number", value: 1.5, tolerance: 0.05, display: "1.5 kPa" },
          traps: [
            {
              spec: { type: "number", value: 1.4, tolerance: 0.05 },
              feedback: "1.4 kPa (4.5 − 3.1) is the net outward filtration pressure at the arteriolar end, not the venular end.",
            },
          ],
          solution: [
            "At the venular end, inward oncotic pull ({{3.1 kPa}}) exceeds outward hydrostatic push ({{1.6 kPa}}).",
            "Net inward reabsorption pressure = {{3.1 - 1.6 = 1.5 kPa}}.",
          ],
          hints: [
            "Use the venular-end hydrostatic pressure (1.6 kPa) and the constant plasma oncotic pressure (3.1 kPa).",
            "Subtract the smaller outward push from the larger inward oncotic pull.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "transport-circulation-plants",
          marks: 4,
          question:
            "Explain how interstitial tissue fluid is generated from blood at a capillary bed and how the fluid is returned to the bloodstream.",
          modelAnswer:
            "At the arteriolar end of a capillary, blood hydrostatic pressure generated by ventricular pumping exceeds plasma oncotic (colloid osmotic) pressure, driving ultrafiltration of water, glucose, amino acids, and dissolved gases out through endothelial fenestrations while large plasma proteins like albumin and red blood cells remain inside. Friction along the narrow capillary lowers hydrostatic pressure so that at the venular end hydrostatic pressure falls below constant oncotic pressure; roughly 90% of the water therefore returns into the capillary by osmosis. The remaining ~10% of excess fluid and any leaked proteins drain into blind-ended lymphatic capillaries, travel as lymph through valved lymph vessels, and re-enter venous blood near the vena cava.",
          markScheme: [
            {
              point: "Arteriolar end: hydrostatic pressure exceeds oncotic pressure, forcing water and small solutes out through fenestrations",
              keywords: ["arteriolar", "hydrostatic", "ultrafiltration", "fenestration"],
            },
            {
              point: "Large plasma proteins (albumin) and erythrocytes stay in the capillary, maintaining plasma oncotic pressure",
              keywords: ["albumin", "plasma protein", "oncotic"],
            },
            {
              point: "Venular end: hydrostatic pressure drops below oncotic pressure so ~90% of fluid returns by osmosis",
              keywords: ["venular", "osmosis", "90%", "returns"],
            },
            {
              point: "Remaining ~10% drains into blind-ended lymphatic capillaries / lymph vessels back to venous circulation",
              keywords: ["lymphatic", "lymph", "10%"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant explanation of capillary fluid exchange." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies pressure forcing fluid out or lymphatic drainage without contrasting hydrostatic vs oncotic forces." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains arteriolar ultrafiltration, retained plasma proteins, venular osmotic return, and lymphatic recovery." },
          ],
          hints: [
            "Compare hydrostatic pressure against oncotic pressure at BOTH the arteriolar end and the venular end.",
            "Remember the ~10% that does not return directly into capillaries—which vessel system drains it?",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "transport-circulation-plants",
          marks: 6,
          question:
            "Explain the Münch pressure-flow hypothesis of organic solute translocation in phloem and outline one piece of experimental evidence supporting it.",
          modelAnswer:
            "Photosynthesizing leaves or mobilized storage organs act as sources where nucleated companion cells use ATP-driven proton pumps and H⁺/sucrose cotransporters to actively load sucrose into adjacent living sieve tube elements. High sucrose concentration makes sieve-tube water potential strongly negative, drawing water in by osmosis from nearby xylem vessels and building high positive hydrostatic pressure. At actively growing roots, fruits, or meristems (sinks), sucrose is unloaded and either respired or converted into insoluble starch, which raises sieve-tube water potential so water exits back into xylem and drops local hydrostatic pressure. This hydrostatic pressure gradient drives bidirectional bulk mass flow of phloem sap from source to sink through perforated sieve plates. Experimental support comes from laser-severed aphid stylets embedded in single sieve tubes, from which pure sucrose sap exudes continuously under positive pressure—or radioactive ¹⁴CO₂ tracing showing rapid labelled sucrose movement from source leaves to sinks.",
          markScheme: [
            {
              point: "Active ATP-dependent loading of sucrose by companion cells into sieve tube elements at a source",
              keywords: ["companion cell", "active", "sucrose", "atp"],
            },
            {
              point: "High solute concentration lowers water potential, drawing water in from xylem by osmosis",
              keywords: ["water potential", "osmosis", "xylem"],
            },
            {
              point: "Water entry generates high positive hydrostatic pressure at the source end",
              keywords: ["hydrostatic pressure", "positive"],
            },
            {
              point: "Unloading sucrose at a sink (converted to starch / respired) raises water potential so water exits and pressure drops",
              keywords: ["unload", "starch", "sink", "drops"],
            },
            {
              point: "Bulk mass flow moves phloem sap through perforated sieve plates down the pressure gradient",
              keywords: ["mass flow", "sieve plate", "gradient"],
            },
            {
              point: "Valid experimental evidence: severed aphid stylet exudation (positive pressure) or ¹⁴C/radioactive CO₂ autoradiography",
              keywords: ["aphid", "stylet", "radioactive", "14c", "autoradiography"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant phloem translocation mechanism." },
            { band: "1–2", marks: [1, 2], descriptor: "States sugars move from source to sink without linking active loading, osmosis, or hydrostatic pressure." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains active loading, osmotic water influx, and pressure flow, omitting sink starch/unloading or experimental proof." },
            { band: "5–6", marks: [5, 6], descriptor: "Full Münch pressure-flow chain (companion-cell active loading, xylem osmosis, hydrostatic gradient, sink unloading, sieve plates) plus solid experimental evidence." },
          ],
          hints: [
            "Trace the 5-step source → sink chain: active loading → water potential ↓ → xylem osmosis → hydrostatic pressure ↑ → sink unloading.",
            "Remember classic experimental proofs: aphid stylets proving positive pressure, or ¹⁴CO₂ radioisotope tracing.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q09",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "muscle-motility-hl",
          question:
            "A relaxed sarcomere measures {{2.70 μm}} with an A-band of {{1.60 μm}} and an H-zone of {{0.80 μm}}. During contraction, **each** Z-line moves inward by {{0.25 μm}} toward the M-line. Calculate the new width of the **H-zone** in μm.",
          answer: { type: "number", value: 0.3, tolerance: 0.01, display: "0.30 μm" },
          traps: [
            {
              spec: { type: "number", value: 0.55, tolerance: 0.01 },
              feedback: "Each Z-line slides inward by 0.25 μm, so actin enters the H-zone from BOTH sides (total narrowing = 2 × 0.25 = 0.50 μm).",
            },
          ],
          solution: [
            "Because BOTH Z-lines move inward by {{0.25 μm}}, total sarcomere shortening is {{2 * 0.25 = 0.50 μm}}.",
            "Thin filaments advance {{0.25 μm}} from each side of the H-zone, narrowing it by {{0.50 μm}}: {{0.80 - 0.50 = 0.30 μm}}.",
          ],
          hints: [
            "Notice the word '**each** Z-line'—how many Z-lines bound one sarcomere?",
            "Subtract twice {{0.25 μm}} from the relaxed H-zone width.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "muscle-motility-hl",
          question:
            "A skeletal muscle myofibril is {{1.10 mm}} long when every sarcomere along it is relaxed to a length of {{2.20 μm}}. Calculate the number of sarcomeres arranged end-to-end in this myofibril.",
          answer: { type: "number", value: 500, tolerance: 1, display: "500" },
          traps: [
            {
              spec: { type: "number", value: 0.5, tolerance: 0.02 },
              feedback: "Convert 1.10 mm to micrometres first (1 mm = 1000 μm → 1100 μm).",
            },
          ],
          solution: [
            "Convert myofibril length into micrometres: {{1.10 mm * 1000 = 1100 μm}}.",
            "Divide total length by single sarcomere length: {{1100 / 2.20 = 500}} sarcomeres.",
          ],
          hints: [
            "Convert millimetres to micrometres using {{1 mm = 1000 μm}}.",
            "Divide total length in μm by {{2.20 μm}}.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q11",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "muscle-motility-hl",
          marks: 7,
          question:
            "Explain the sliding-filament mechanism of striated muscle contraction from sarcolemma depolarization through cross-bridge cycling and subsequent relaxation.",
          modelAnswer:
            "An action potential depolarizes the sarcolemma and propagates down T-tubules, triggering the sarcoplasmic reticulum (SR) to release stored calcium ions (Ca²⁺) into the sarcoplasm. Ca²⁺ binds to troponin on the thin actin filaments, causing a conformational change that moves filamentous tropomyosin away from the myosin-binding sites on actin. Energized, cocked myosin heads holding ADP and Pᵢ attach to the exposed actin sites to form actomyosin cross-bridges. Release of Pᵢ and ADP drives the power stroke: myosin heads pivot inward, pulling thin actin filaments toward the central M-line so Z-lines approach each other while the A-band stays constant and I-band and H-zone shorten. Binding of a fresh ATP molecule to the myosin head breaks the cross-bridge (detachment from actin). Myosin ATPase then hydrolyses ATP into ADP and Pᵢ, re-cocking the myosin head to its high-energy state for another cycle. When nerve stimulation ceases, Ca²⁺-ATPase pumps actively transport Ca²⁺ back into the SR so tropomyosin re-blocks actin sites and the fibre relaxes.",
          markScheme: [
            {
              point: "Action potential down T-tubules triggers Ca²⁺ release from sarcoplasmic reticulum",
              keywords: ["sarcoplasmic reticulum", "t-tubule", "ca2+", "calcium"],
            },
            {
              point: "Ca²⁺ binds troponin, displacing tropomyosin off actin's myosin-binding sites",
              keywords: ["troponin", "tropomyosin"],
            },
            {
              point: "Cocked myosin heads bind exposed actin sites, forming cross-bridges",
              keywords: ["cross-bridge", "cross bridge"],
            },
            {
              point: "Release of ADP + Pᵢ triggers the power stroke pulling actin inward toward the M-line",
              keywords: ["power stroke", "m-line", "pivot"],
            },
            {
              point: "Binding of fresh ATP detaches the myosin head from actin",
              keywords: ["detach", "fresh atp", "atp molecule"],
            },
            {
              point: "ATP hydrolysis by myosin ATPase (ATP → ADP + Pᵢ) re-cocks the myosin head",
              keywords: ["hydrolys", "re-cock", "recock", "atpase"],
            },
            {
              point: "Relaxation: active pumping of Ca²⁺ back into SR lets tropomyosin re-block actin binding sites",
              keywords: ["active", "pump", "re-block", "relax"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No creditworthy account of sliding-filament contraction." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions actin sliding over myosin or Ca²⁺/ATP involvement without biochemical precision." },
            { band: "3–5", marks: [3, 5], descriptor: "Covers Ca²⁺–troponin–tropomyosin and cross-bridge power stroke, but conflates ATP detachment with hydrolysis or omits SR relaxation." },
            { band: "6–7", marks: [6, 7], descriptor: "Complete, accurate 7-step IB HL sequence: T-tubule/SR Ca²⁺ release, troponin/tropomyosin shift, cross-bridge, power stroke, ATP detachment, ATP-hydrolysis re-cocking, and Ca²⁺-ATPase relaxation." },
          ],
          hints: [
            "Keep the two jobs of ATP cleanly separated: ATP *binding* = detachment; ATP *hydrolysis* = re-cocking.",
            "Do not say Ca²⁺ binds tropomyosin—specify Ca²⁺ → troponin → shifts tropomyosin.",
            "Finish with how Ca²⁺ returns to the SR for relaxation.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Outline",
          guideRef: "muscle-motility-hl",
          marks: 4,
          question:
            "Outline the roles of three named tissues inside a synovial joint and explain why skeletal muscles work in antagonistic pairs.",
          modelAnswer:
            "Smooth articular (hyaline) cartilage caps bone ends to absorb compressive shock and reduce bone-on-bone friction, while the synovial membrane secretes lubricating synovial fluid that also nourishes cartilage. Tough fibrous ligaments connect bone to bone across the joint capsule to stabilize alignment and prevent dislocation, whereas inelastic collagen tendons anchor muscle to bone to transfer force cleanly. Because contracting muscle fibres can only exert pulling tension and cannot actively push themselves longer, skeletal muscles must act in antagonistic pairs (such as biceps flexing and triceps extending the elbow) so contraction of one muscle stretches its relaxed partner back out.",
          markScheme: [
            {
              point: "Articular/hyaline cartilage reduces friction and absorbs shock",
              keywords: ["cartilage", "friction", "shock"],
            },
            {
              point: "Synovial membrane secretes lubricating synovial fluid (or tendons attach muscle to bone transmitting pulling force)",
              keywords: ["synovial fluid", "lubricat", "tendon"],
            },
            {
              point: "Ligaments connect bone to bone stabilizing the joint / limiting excess motion",
              keywords: ["ligament", "bone to bone", "dislocation"],
            },
            {
              point: "Muscles only pull (cannot push), so an antagonistic partner contracts to move the joint in the opposite direction and re-extend the relaxed muscle",
              keywords: ["only pull", "cannot push", "cannot actively push", "biceps", "opposite"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant joint anatomy or antagonistic muscle principle." },
            { band: "1–2", marks: [1, 2], descriptor: "Names 1–2 joint structures accurately or gives vague muscle explanation." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly outlines three joint tissues (distinguishing ligaments vs tendons/cartilage/synovial fluid) and explains why pulling-only fibres require antagonistic pairs." },
          ],
          hints: [
            "Pick three from: articular cartilage, synovial fluid/membrane, ligaments, and tendons—never mix up ligaments and tendons!",
            "State clearly that muscle fibres can only pull when contracting, never push.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q13",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "State",
          guideRef: "muscle-motility-hl",
          question:
            "State the name of the giant elastic sarcomere protein that tethers thick myosin filaments to the Z-lines and prevents mechanical overstretching.",
          answer: { type: "text", accept: ["titin"], display: "titin" },
          solution: [
            "**Titin** anchors thick myosin filaments to Z-discs, keeps myosin centred, prevents overstretching, and provides elastic recoil.",
          ],
          hints: [
            "It is the largest known protein in the human body, acting like a molecular spring from Z-line to myosin.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "adaptation-biomes-niches",
          marks: 4,
          question:
            "Explain how coastal mangrove halophytes overcome both saline seawater and waterlogged anaerobic estuarine mud.",
          modelAnswer:
            "Mangrove roots employ selective membrane ultrafiltration to exclude over 90% of seawater sodium and chloride ions before they enter the xylem, while species such as Avicennia pump excess absorbed salt out onto leaf surfaces via specialized salt-excreting glands. To absorb water osmotically from salty soil, root cells accumulate compatible organic solutes (and sequester ions inside vacuoles) so internal water potential stays more negative than surrounding seawater. Because waterlogged mud is nearly anoxic, mangroves grow vertical snorkel-like aerial roots called pneumatophores studded with lenticels above the tide line to conduct atmospheric O₂ down to submerged root tissues for aerobic respiration.",
          markScheme: [
            {
              point: "Root ultrafiltration excludes excess salt / NaCl at uptake",
              keywords: ["ultrafiltration", "exclude", "filter"],
            },
            {
              point: "Specialized salt-excreting glands on leaves remove excess absorbed salt (or salt accumulation in sacrificed senescing leaves)",
              keywords: ["salt-excreting", "salt gland", "excrete", "sacrific"],
            },
            {
              point: "High internal osmolarity / organic solutes maintain more negative water potential than seawater for osmotic water uptake",
              keywords: ["water potential", "osmolarity", "osmotic", "vacuole"],
            },
            {
              point: "Pneumatophores (aerial breathing roots) with lenticels supply atmospheric O₂ for aerobic root respiration in anoxic mud",
              keywords: ["pneumatophore", "lenticel", "aerobic"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant halophyte adaptations explained." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions salt removal or breathing roots superficially without linking to water potential or aerobic respiration." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains both salinity-control mechanisms (exclusion, salt glands, negative water potential) and pneumatophore O₂ delivery." },
          ],
          hints: [
            "Address BOTH abiotic hazards mentioned in the stem: high salinity (osmotic/toxic stress) AND waterlogged mud (oxygen deficit).",
            "Use exact IB terms: ultrafiltration, salt-excreting glands, water potential, and pneumatophores with lenticels.",
          ],
        },
        {
          id: "b3-b4-form-organisms-ecosystems-p2-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "adaptation-biomes-niches",
          marks: 5,
          question:
            "Compare and contrast the abiotic climate drivers and resulting plant adaptations of a **tropical rainforest** versus a **hot desert**, including one example of convergent evolution.",
          modelAnswer:
            "Both biomes experience high mean annual temperatures (~25–30 °C) and intense solar radiation, yet they lie at opposite extremes of annual precipitation: tropical rainforests receive over 2000 mm yr⁻¹ with minimal seasonality, whereas hot deserts receive under 250 mm yr⁻¹ with extreme diurnal temperature swings. In rainforests, intense light competition and heavy rainfall favour tall stratified canopies, epiphytes perched high for light, shallow buttress roots stabilizing trees in leached thin soils, and waxy drip-tip leaves shedding excess water to prevent fungal growth. In hot deserts, acute water scarcity favours xerophytic adaptations such as thick cuticles, leaf spines, water-storing succulent stems, and nocturnal CAM photosynthesis. Identical arid selection pressures on separate continents produce convergent evolution—for instance, distantly related American cacti and African Euphorbia both evolved leafless succulent stems and sharp spines.",
          markScheme: [
            {
              point: "Similarity: both experience high mean temperatures / intense solar irradiance",
              keywords: ["high mean", "intense solar", "hot", "warm"],
            },
            {
              point: "Precipitation contrast: rainforest >2000 mm yr⁻¹ vs desert <250 mm yr⁻¹ (plus high diurnal temperature range)",
              keywords: ["2000", "250", "precipitation", "rainfall"],
            },
            {
              point: "Rainforest adaptations linked to light/rain: stratified canopy, epiphytes, buttress roots, drip tips",
              keywords: ["drip-tip", "drip tip", "buttress", "epiphyte", "canopy"],
            },
            {
              point: "Desert adaptations linked to water conservation: spines, succulence, thick cuticle, CAM photosynthesis",
              keywords: ["succulent", "spine", "cam", "xerophyt"],
            },
            {
              point: "Named convergent evolution example (e.g. American cacti and African Euphorbia)",
              keywords: ["cacti", "cactus", "euphorbia", "analogous"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant biome comparison." },
            { band: "1–2", marks: [1, 2], descriptor: "Contrasts rainfall broadly with minimal plant-adaptation detail." },
            { band: "3–4", marks: [3, 4], descriptor: "Contrasts climate and named adaptations for both biomes, omitting a similarity or convergent example." },
            { band: "5", marks: [5, 5], descriptor: "Balanced similarity + rainfall contrast, specific rainforest & desert plant traits, and a named convergent evolution pair." },
          ],
          hints: [
            "Start with a similarity (high temperature/sunlight) before contrasting precipitation totals.",
            "Give at least two named plant adaptations per biome plus a convergent pair across continents (cacti vs *Euphorbia*).",
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 Qs — ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "b3-b4-form-organisms-ecosystems-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "gas-exchange-haemoglobin",
      question:
        "During maximal running, an athlete's cardiac output is {{20 dm^3 min^(-1)}}. Fully saturated blood carries {{200 cm^3}} of {{O_2}} per {{dm^3}}. Blood leaves the lungs at 96% saturation and leaves exercising muscle at 36% saturation due to the Bohr shift. Calculate the total volume of {{O_2}} unloaded into tissues per minute in {{dm^3 min^(-1)}}.",
      answer: { type: "number", value: 2.4, tolerance: 0.05, display: "2.4 dm³ min⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 2400, tolerance: 10 },
          feedback: "2400 is in cm³ min⁻¹—divide by 1000 to convert to dm³ min⁻¹.",
        },
        {
          spec: { type: "number", value: 4.0, tolerance: 0.05 },
          feedback: "4.0 dm³ min⁻¹ assumes 100% of bound oxygen is unloaded—only 96% − 36% = 60% is released.",
        },
      ],
      solution: [
        "Percentage of O₂ capacity unloaded per pass: {{96% - 36% = 60%}}.",
        "O₂ released per {{dm^3}} of blood: {{0.60 * 200 = 120 cm^3 = 0.12 dm^3}}.",
        "Total O₂ delivered per minute: {{20 * 0.12 = 2.4 dm^3 min^(-1)}}.",
      ],
      hints: [
        "First find the % of total O₂ capacity unloaded: arterial saturation minus venous saturation.",
        "Multiply that fraction by {{200 cm^3}} to get O₂ released per {{dm^3}} of blood.",
        "Multiply by cardiac output ({{20 dm^3 min^(-1)}}) and convert {{cm^3}} to {{dm^3}}.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-ch-q02",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Compare and contrast",
      guideRef: "gas-exchange-haemoglobin",
      marks: 6,
      question:
        "Compare and contrast the quaternary structures, oxygen dissociation curve shapes, affinities, and physiological functions of adult haemoglobin (HbA), fetal haemoglobin (HbF), and skeletal-muscle myoglobin.",
      modelAnswer:
        "All three molecules are globular haemoproteins containing iron (Fe²⁺) haem prosthetic groups that bind O₂ reversibly. Both HbA (α₂β₂) and HbF (α₂γ₂) are tetramers of four subunits exhibiting positive cooperative binding and therefore sigmoidal dissociation curves, whereas myoglobin is a single-chain monomer with one haem group displaying a non-cooperative hyperbolic curve. Positioned farthest to the left, myoglobin has the highest O₂ affinity (lowest P₅₀), functioning as an intracellular oxygen store inside endurance muscle that releases O₂ only when severe exertion drives muscle pO₂ close to zero. HbF sits to the left of maternal HbA, giving fetal blood higher O₂ affinity so O₂ diffuses from maternal to fetal capillaries across the placenta at low placental pO₂. Adult HbA sits furthest right (lowest affinity of the three) and undergoes a pronounced rightward Bohr shift under high CO₂, making it ideal for loading O₂ at high alveolar pO₂ and unloading generously across active systemic tissues.",
      markScheme: [
        {
          point: "Similarity: all are globular proteins with Fe²⁺ haem groups that reversibly bind O₂",
          keywords: ["haem", "fe2+", "iron", "reversibl"],
        },
        {
          point: "Quaternary contrast: HbA (α₂β₂) and HbF (α₂γ₂) are cooperative tetramers vs monomeric myoglobin (1 subunit)",
          keywords: ["tetramer", "monomer", "cooperative"],
        },
        {
          point: "Curve shape contrast: HbA and HbF produce sigmoidal curves vs hyperbolic curve for myoglobin",
          keywords: ["sigmoidal", "hyperbolic"],
        },
        {
          point: "Relative curve position / affinity order: myoglobin farthest left (highest affinity), HbF intermediate-left, HbA farthest right",
          keywords: ["farthest left", "highest", "left of"],
        },
        {
          point: "HbF function: higher affinity pulls O₂ from maternal blood across the placenta",
          keywords: ["placenta", "maternal"],
        },
        {
          point: "Myoglobin vs HbA functions: myoglobin stores intracellular O₂ for extreme muscle hypoxia vs HbA transports O₂ in blood and responds to Bohr shift",
          keywords: ["store", "reserve", "bohr", "systemic"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant comparison of oxygen-binding proteins." },
        { band: "1–2", marks: [1, 2], descriptor: "Identifies curve positions without explaining structural cooperativity or physiological roles." },
        { band: "3–4", marks: [3, 4], descriptor: "Contrasts sigmoidal vs hyperbolic shapes and placental/muscle roles, omitting subunit structure or similarity." },
        { band: "5–6", marks: [5, 6], descriptor: "Comprehensive comparison uniting shared Fe²⁺ haem chemistry, tetramer vs monomer cooperativity, curve geometry/positions, and tailored physiological roles." },
      ],
      hints: [
        "Open with what all three oxygen-binding proteins share chemically (Fe²⁺ haem prosthetic group).",
        "Contrast tetrameric cooperative binding (sigmoidal) against monomeric binding (hyperbolic).",
        "Rank them left-to-right on the dissociation graph and explain WHY each position matches its physiological job.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "transport-circulation-plants",
      question:
        "In still laboratory air, a potometer bubble inside a capillary of cross-sectional area {{0.020 cm^2}} moves {{18.0 cm}} in 24 minutes. When a fan blows air across the leaves, the transpiration rate triples. Calculate the new rate of water uptake under the fan in {{cm^3 min^(-1)}}.",
      answer: { type: "number", value: 0.045, tolerance: 0.001, display: "0.045 cm³ min⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 0.015, tolerance: 0.001 },
          feedback: "0.015 cm³ min⁻¹ is the still-air rate—remember to triple it for the fan condition.",
        },
        {
          spec: { type: "number", value: 0.36, tolerance: 0.01 },
          feedback: "0.36 cm³ is the total volume absorbed in 24 minutes before dividing by time or tripling.",
        },
      ],
      solution: [
        "Still-air water volume absorbed in 24 min: {{V = 0.020 * 18.0 = 0.36 cm^3}}.",
        "Still-air rate: {{0.36 / 24 = 0.015 cm^3 min^(-1)}}.",
        "Tripled fan rate: {{3 * 0.015 = 0.045 cm^3 min^(-1)}}.",
      ],
      hints: [
        "Compute the still-air volume absorbed ({{A * d}}) and divide by 24 min.",
        "Multiply the still-air rate by 3 to account for the fan sweeping away the humid boundary layer.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Compare and contrast",
      guideRef: "transport-circulation-plants",
      marks: 6,
      question:
        "Compare and contrast vascular transport in **xylem vessels** versus **phloem sieve tubes** across cell viability, wall anatomy, transported substances, pressure sign, directionality, and ATP dependence.",
      modelAnswer:
        "Both xylem and phloem form elongated tubular vascular bundles running throughout roots, stems, and leaves to achieve long-distance mass flow in plants. However, mature xylem vessels are dead hollow tubes lacking cytoplasm and end walls, reinforced with waterproof lignin rings to resist collapse, whereas phloem sieve tube elements remain living cells with perforated end-wall sieve plates, peripheral cytoplasm, and metabolically active nucleated companion cells connected via plasmodesmata. Xylem transports water and dissolved mineral ions unidirectionally from roots to leaves, whereas phloem translocates organic assimilates such as sucrose and amino acids bidirectionally from any source to any sink. Physically, xylem flow is passive (solar-driven transpiration evaporation requiring no plant ATP) and operates under negative pressure (tension) stabilized by cohesion and adhesion; conversely, phloem translocation depends on ATP-powered active loading at sources to draw water in by osmosis and generate positive hydrostatic pressure.",
      markScheme: [
        {
          point: "Similarity: both are continuous tubular vascular tissues driving bulk mass flow throughout the plant",
          keywords: ["mass flow", "vascular", "tubular", "long-distance"],
        },
        {
          point: "Cell viability & structure: dead hollow lignified xylem without end walls vs living phloem sieve tubes with sieve plates & companion cells",
          keywords: ["dead", "living", "lignin", "sieve plate", "companion"],
        },
        {
          point: "Substances: water & mineral ions in xylem vs sucrose & amino acids in phloem",
          keywords: ["mineral", "sucrose", "amino acid"],
        },
        {
          point: "Directionality: unidirectional (roots → leaves) in xylem vs bidirectional (source → sink) in phloem",
          keywords: ["unidirectional", "bidirectional", "source"],
        },
        {
          point: "Pressure regime: negative pressure (tension) in xylem vs positive hydrostatic pressure in phloem",
          keywords: ["negative", "tension", "positive", "hydrostatic"],
        },
        {
          point: "Energy requirement: passive solar-evaporation driven in xylem vs ATP-dependent active loading in phloem",
          keywords: ["passive", "atp", "active"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant comparison between xylem and phloem." },
        { band: "1–2", marks: [1, 2], descriptor: "States substances carried (water vs sugar) without addressing pressure, viability, or ATP." },
        { band: "3–4", marks: [3, 4], descriptor: "Contrasts 3–4 dimensions accurately but omits a similarity or confuses pressure sign / living status." },
        { band: "5–6", marks: [5, 6], descriptor: "Systematic, accurate contrast across all six criteria plus an explicit structural/functional similarity." },
      ],
      hints: [
        "Include one explicit similarity before marching through all five contrasting dimensions.",
        "Use crisp opposing pairs: dead vs living, negative tension vs positive hydrostatic, unidirectional vs bidirectional, passive vs ATP-dependent.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "muscle-motility-hl",
      question:
        "A skeletal muscle myofibril contains 400 sarcomeres in series. Each relaxed sarcomere measures {{2.50 μm}} with an A-band of {{1.60 μm}} and an H-zone of {{0.60 μm}}. During intense contraction, every H-zone narrows to {{0.05 μm}}. Calculate the **total shortening** of the entire myofibril in μm.",
      answer: { type: "number", value: 220, tolerance: 1, display: "220 μm" },
      traps: [
        {
          spec: { type: "number", value: 0.55, tolerance: 0.02 },
          feedback: "0.55 μm is the shortening of ONE sarcomere—multiply by all 400 sarcomeres arranged in series.",
        },
        {
          spec: { type: "number", value: 780, tolerance: 2 },
          feedback: "780 μm is the final contracted myofibril length (400 × 1.95 μm), not the total shortening.",
        },
      ],
      solution: [
        "Shortening of one sarcomere equals the narrowing of its H-zone: {{Delta L = 0.60 - 0.05 = 0.55 μm}}.",
        "Across 400 sarcomeres in series, shortenings add directly: {{400 * 0.55 = 220 μm}}.",
      ],
      hints: [
        "Recall the sarcomere band identity: {{Delta L_sarcomere = Delta H}}.",
        "Find how much one sarcomere shortens, then multiply by 400 sarcomeres in series.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "muscle-motility-hl",
      marks: 6,
      question:
        "Analyse why (i) post-mortem ATP depletion (**rigor mortis**) and (ii) a drug that blocks sarcoplasmic-reticulum **{{Ca^(2+)}}-ATPase** pumps both prevent skeletal muscle relaxation, yet stall the cross-bridge cycle via distinct biochemical mechanisms.",
      modelAnswer:
        "Normal relaxation requires both detachment of myosin heads from actin (driven by fresh ATP binding) and active removal of sarcoplasmic Ca²⁺ back into the sarcoplasmic reticulum so tropomyosin can re-cover actin's binding sites. During post-mortem rigor mortis, aerobic respiration stops and intracellular ATP drops to zero; Ca²⁺ leaks passively out of the degenerating SR, exposing actin sites so myosin heads bind, but with no ATP available to bind myosin, the actomyosin cross-bridges cannot detach and freeze statically without further cycling or power strokes. Conversely, when a selective toxin blocks SR Ca²⁺-ATPase pumps inside a living, respiring fibre, ATP remains plentiful in the sarcoplasm so cross-bridges still bind, pivot, detach, and re-cock rapidly; however, because cytosolic Ca²⁺ cannot be pumped back into the SR, Ca²⁺ stays bound to troponin and tropomyosin cannot move back to block actin, producing continuous active cycling (tetanic spasm/contracture) rather than static ATP-starved locking.",
      markScheme: [
        {
          point: "Identifies both requirements for relaxation: ATP binding for cross-bridge detachment AND active Ca²⁺ sequestration into SR",
          keywords: ["detach", "sequest", "pump", "re-cover", "re-block"],
        },
        {
          point: "Rigor mortis: post-mortem ATP exhaustion + passive Ca²⁺ leakage from SR allows cross-bridges to form",
          keywords: ["leak", "exhaust", "deplet", "zero"],
        },
        {
          point: "Rigor mortis arrest point: lack of fresh ATP prevents myosin detachment, locking static cross-bridges permanently",
          keywords: ["cannot detach", "static", "locked", "freeze"],
        },
        {
          point: "SR Ca²⁺-ATPase block: living fibre still has ATP, so cross-bridge detachment and re-cocking continue",
          keywords: ["still has atp", "plentiful", "continue", "re-cock"],
        },
        {
          point: "SR Ca²⁺-ATPase mechanism: cytosolic Ca²⁺ stays high, keeping troponin bound and tropomyosin displaced off actin",
          keywords: ["troponin", "tropomyosin", "cytosolic", "stays bound"],
        },
        {
          point: "Clear contrast: rigor mortis is static locking with no ATP cycling vs Ca²⁺-pump block causes sustained active cycling/spasm",
          keywords: ["spasm", "contracture", "sustained", "versus", "conversely"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant biochemical analysis." },
        { band: "1–2", marks: [1, 2], descriptor: "Explains either rigor mortis or Ca²⁺ removal briefly without contrasting the arrest states." },
        { band: "3–4", marks: [3, 4], descriptor: "Explains both disruptions accurately but does not contrast static cross-bridge lock against ongoing ATP-fuelled cycling." },
        { band: "5–6", marks: [5, 6], descriptor: "Sharp biochemical contrast showing static ATP-less detachment failure in rigor mortis versus continuous Ca²⁺-activated cycling when SR pumps are inhibited." },
      ],
      hints: [
        "Ask: in each scenario, is ATP still available in the sarcoplasm, and is Ca²⁺ high or low?",
        "Contrast static locked cross-bridges (cannot detach) against continuously cycling cross-bridges (tropomyosin cannot re-block).",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-ch-q07",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "gas-exchange-haemoglobin",
      question:
        "Transitioning from quiet rest to maximal sprinting, an athlete raises tidal volume from {{0.50 dm^3}} to {{2.40 dm^3}} and increases breathing rate from 12 to 45 breaths min⁻¹. Calculate the factor by which their pulmonary ventilation rate increases.",
      answer: { type: "number", value: 18, tolerance: 0.1, display: "18" },
      traps: [
        {
          spec: { type: "number", value: 102, tolerance: 0.5 },
          feedback: "102 dm³ min⁻¹ is the absolute difference (108 − 6), not the multiplicative factor (108 ÷ 6).",
        },
        {
          spec: { type: "number", value: 4.8, tolerance: 0.1 },
          feedback: "4.8 is the factor for tidal volume alone—multiply by the breathing-rate factor (45 / 12 = 3.75) as well.",
        },
      ],
      solution: [
        "Resting ventilation rate: {{0.50 * 12 = 6.0 dm^3 min^(-1)}}.",
        "Maximal sprint ventilation rate: {{2.40 * 45 = 108.0 dm^3 min^(-1)}}.",
        "Increase factor: {{108.0 / 6.0 = 18}} (an 18-fold increase).",
      ],
      hints: [
        "Compute ventilation rate ({{V_T * f}}) at rest and during sprinting.",
        "Divide the sprint ventilation rate by the resting ventilation rate to obtain the factor.",
      ],
    },
    {
      id: "b3-b4-form-organisms-ecosystems-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "adaptation-biomes-niches",
      marks: 8,
      question:
        "Evaluate how physiological form–function adaptations and ecological niche constraints jointly govern whether a colonizing species can establish successfully in an extreme new biome, using at least two named biological examples from Theme B.",
      modelAnswer:
        "Successful establishment in a harsh biome first requires crossing hard abiotic tolerance filters via matched anatomical and physiological form–function adaptations. For example, a coastal mangrove such as Avicennia colonizing saline intertidal mud survives only because root ultrafiltration and salt-excreting leaf glands maintain a negative internal water potential against seawater, while vertical pneumatophores with lenticels supply O₂ for aerobic root respiration in anoxic mud; similarly, a xerophyte like marram grass (*Ammophila*) or a desert cactus endures arid zones (<250 mm yr⁻¹) only through rolled leaves, sunken stomata, thick cuticles, or nocturnal CAM photosynthesis that slash transpirational loss. At high altitude, physiological shifts such as left-shifted high-affinity haemoglobin in bar-headed geese overcome severe alveolar hypoxia where sea-level species fail. However, surviving abiotic limits defines merely the fundamental niche and is never sufficient by itself: biotic interactions such as interspecific competition, herbivory, and predation narrow survival to a smaller realized niche. As Connell demonstrated in intertidal barnacles (*Chthamalus* vs *Semibalanus*) and Gause showed in *Paramecium*, a colonizer whose niche overlaps an entrenched native competitor faces competitive exclusion unless it outcompetes the resident or diverges via resource partitioning (as in MacArthur's canopy warblers). In conclusion, abiotic physiology acts as the primary gatekeeper determining whether survival is even possible, while biotic competition and niche availability ultimately decide persistence and abundance—meaning invasive species often succeed precisely when they possess broad abiotic tolerance AND escape native predators or competitors.",
      markScheme: [
        {
          point: "Explains abiotic tolerance limits as primary physiological filter defining the fundamental niche",
          keywords: ["abiotic", "tolerance", "fundamental niche", "filter"],
        },
        {
          point: "Detailed Example 1 linking form–function physiology to abiotic survival (e.g. mangrove ultrafiltration/salt glands/pneumatophores OR xerophyte sunken stomata/CAM)",
          keywords: ["pneumatophore", "ultrafiltration", "xerophyt", "cuticle", "cam"],
        },
        {
          point: "Detailed Example 2 from another Theme B system (e.g. high-altitude left-shifted haemoglobin, coral zooxanthellae/pH, or marram grass/cactus)",
          keywords: ["haemoglobin", "hypoxia", "zooxanthellae", "marram", "cactus", "cacti"],
        },
        {
          point: "Explains biotic constraints (interspecific competition, predation, herbivory) compressing fundamental niche into realized niche",
          keywords: ["realized niche", "competition", "predation", "biotic"],
        },
        {
          point: "Applies competitive exclusion principle with named evidence (e.g. Connell barnacles or Gause Paramecium)",
          keywords: ["competitive exclusion", "connell", "gause", "paramecium", "chthamalus"],
        },
        {
          point: "Discusses resource partitioning / niche differentiation enabling stable coexistence",
          keywords: ["resource partitioning", "niche differentiation", "warbler", "coexist"],
        },
        {
          point: "Evaluative weighing: distinguishes abiotic survival as necessary prerequisite vs biotic interactions determining final distribution/abundance",
          keywords: ["prerequisite", "gatekeeper", "sufficient", "ultimately", "necessary"],
        },
        {
          point: "Reasoned conclusion linking broad tolerance / enemy release to invasive or colonizing success",
          keywords: ["conclusion", "invasive", "broad", "escape"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant physiological or ecological evaluation." },
        { band: "1–2", marks: [1, 2], descriptor: "Lists a few adaptations or mentions niches superficially with little synthesis." },
        { band: "3–5", marks: [3, 5], descriptor: "Explains physiological adaptations and fundamental/realized niches with examples, but limited evaluative weighing." },
        { band: "6–8", marks: [6, 8], descriptor: "Authoritative synoptic evaluation weaving specific Theme B physiological mechanisms with abiotic filters, biotic competitive exclusion/partitioning, and a clear reasoned judgement." },
      ],
      hints: [
        "Treat 'Evaluate' as a structured argument: (1) Abiotic physiological gatekeepers (fundamental niche), (2) Biotic competition/partitioning (realized niche), (3) Weighed judgement.",
        "Anchor both halves with at least two named Theme B examples (e.g. mangroves/xerophytes/high-altitude Hb + Connell's barnacles/Gause's *Paramecium*/warblers).",
      ],
    },
  ],
};
