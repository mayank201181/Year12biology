import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "c3-c4-interaction-organisms-ecosystems",
  title: "Theme C (3–4): Interaction & Interdependence — Organisms & Ecosystems",
  strand: "Theme C: Interaction & Interdependence",
  icon: "🛡️",
  level: "SL",
  summary:
    "How nervous and endocrine systems integrate whole-organism responses, how innate and adaptive immunity defend against pathogens, how ecological populations are sampled and tested with χ², and how energy flows while carbon cycles through ecosystems.",
  intro:
    "Living organisms never act as isolated bags of cells. Inside your body, spinal reflex arcs fire in milliseconds while hormones coordinate heart rate, sleep, and stress; immune cells distinguish self from foreign invaders and remember past infections for decades. Zoom out to an ecosystem, and the same theme of interaction scales up: plants bend toward sunlight via auxin gradients, predators track prey in lagged cycles, two species either associate or compete across habitats, energy cascades with ~90% loss per trophic step, and carbon loops between forests, oceans, rock, and the atmosphere.",
  guide: [
    {
      id: "integration-body-systems",
      heading: "C3.1 Nervous & Hormonal Coordination & Plant Tropisms",
      level: "SL",
      discovery: {
        problem:
          "You accidentally brush a boiling kettle and snatch your hand away *before* you even register the stinging pain. Meanwhile, on the windowsill next to the kettle, a basil seedling silently bends toward the morning sun—despite having no brain, no nerves, and no muscles. How can an animal react faster than conscious thought, and how can a plant move without a single muscle fibre?",
        idea:
          "The hand withdrawal bypasses the cerebral cortex completely via a three-neuron **spinal reflex arc**, routing sensory input straight through a spinal relay neuron to motor effectors in ~30 ms while a parallel ascending signal informs the brain afterwards. The plant bends by **differential cell elongation**: unilateral blue light redistributes the hormone **auxin (IAA)** to the shaded side of the shoot, loosening cell walls there so shaded cells elongate faster than illuminated cells.",
      },
      body: `Multicellular organisms integrate internal and external signals through two complementary animal systems—the **nervous system** (fast, millisecond electrical impulses along specific axons, short-lived localized effects) and the **endocrine system** (slower blood-borne chemical hormones targeting distant cells with complementary receptors, longer-lasting widespread effects)—while plants coordinate growth through mobile phytohormones such as **auxin** and **ethylene**.

### 1. CNS, PNS & the Spinal Reflex Arc
- **Central Nervous System (CNS)**: Brain and spinal cord (integrates sensory data and coordinates output).
- **Peripheral Nervous System (PNS)**: Cranial and spinal nerves split into **sensory (afferent)** neurons carrying impulses *to* the CNS and **motor (efferent)** neurons carrying impulses *away* from the CNS (subdivided into voluntary **somatic** and involuntary **autonomic** sympathetic/parasympathetic branches).
- **Pain-withdrawal spinal reflex arc**:
  1. **Receptor** (pain nociceptor in skin) detects damaging heat/pressure and generates an action potential.
  2. **Sensory neuron** enters the spinal cord via the **dorsal root** (cell body sits in the dorsal root ganglion).
  3. **Relay (inter)neuron** in the spinal cord **grey matter** synapses directly with the motor neuron (and sends a separate collateral branch up white-matter tracts to the brain).
  4. **Motor neuron** exits via the **ventral root** to the **effector** (e.g., biceps muscle), triggering immediate withdrawal.

### 2. Brain Centres & Hypothalamus–Pituitary Endocrine Axis
- **Cerebellum**: Coordinates unconscious balance, posture, and smooth fine-motor execution by comparing intended movement with proprioceptive feedback.
- **Medulla oblongata**: Autonomic control centre regulating **heart rate** and **ventilation rate** via negative feedback:
  - During exercise, cellular respiration releases CO₂ into blood plasma (CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻), lowering blood pH.
  - **Chemoreceptors** in the carotid bodies, aortic bodies, and medulla detect the pH drop (elevated CO₂); **baroreceptors** in the carotid sinus and aortic arch monitor arterial blood pressure.
  - The medulla sends impulses down the **sympathetic cardiac accelerator nerve** (releasing noradrenaline at the sinoatrial node, increasing heart rate) and increases firing frequency to the diaphragm and external intercostal muscles (raising ventilation rate and tidal depth). Once blood CO₂ normalizes, **parasympathetic vagus nerve** impulses (releasing acetylcholine) slow the SA node.
- **Hypothalamus & Pituitary Gland**: The hypothalamus links nervous and endocrine control. Its neurosecretory cells release hormones into a tiny portal capillary bed controlling the **anterior pituitary** (e.g., TSH, FSH, LH), and extend axons directly into the **posterior pituitary** to secrete ADH and oxytocin.
- **Melatonin & Circadian Rhythms**: The **pineal gland** secretes melatonin in darkness (regulated by light-sensitive retinal ganglion cells signalling the **suprachiasmatic nucleus, SCN**, in the hypothalamus). Melatonin induces drowsiness and synchronizes the ~24-hour sleep–wake cycle; bright blue light at night suppresses melatonin secretion, and rapid time-zone shifts cause **jet lag** until the SCN re-entrains.
- **Epinephrine (Adrenaline)**: Secreted by the **adrenal medulla** upon sympathetic stimulation during threat or intense exercise. It elevates heart rate and stroke volume, dilates bronchioles and skeletal-muscle arterioles, constricts gut arterioles, and stimulates hepatic glycogenolysis to raise blood glucose.

### 3. Plant Phototropism & Auxin (IAA)
Shoot tips detect unilateral blue light using **phototropin** receptors. The plant hormone **auxin (indole-3-acetic acid, IAA)** is synthesized in the shoot apical meristem and transported downward (basipetally). Under unilateral illumination, auxin accumulates on the **shaded side** of the stem, where it promotes faster cell elongation than on the illuminated side—curving the shoot *toward* light (**positive phototropism**). Conversely, in roots, high auxin concentrations *inhibit* cell elongation, causing the lower side of a horizontal root to elongate less so the root bends *downward* (**positive gravitropism**).

### 4. [HL] PIN3 Auxin Efflux, Acid-Growth Wall Loosening & Ethylene Positive Feedback
- **[HL] PIN3 Efflux Pumps**: Unilateral blue light triggers lateral relocalization of **PIN3 auxin efflux carrier proteins** to the plasma membrane on the shaded side of shoot cells. PIN3 proteins actively pump IAA laterally across tissues, establishing a steep auxin concentration gradient toward the shaded side.
- **[HL] Acid-Growth Mechanism**: Inside shaded-side cells, auxin activates gene transcription and stimulates **plasma-membrane H⁺-ATPase proton pumps** to pump H⁺ ions into the cell wall (apoplast). The resulting drop in wall pH (~4.5–5.0) activates **expansin** proteins, which disrupt hydrogen bonds between cellulose microfibrils and hemicelluloses. The loosened cell wall yields to internal osmotic **turgor pressure**, irreversibly stretching the shaded-side cells.
- **[HL] Ethylene & Positive Feedback in Fruit Ripening**: Climacteric fruits (bananas, apples, tomatoes, mangoes) release the gaseous hormone **ethylene (C₂H₄)**. Ethylene activates ripening genes (pectinase softening walls, amylase converting starch to sweet sugars, chlorophyll breakdown) *and* stimulates further ethylene synthesis. This **positive feedback loop** amplifies the signal rapidly and synchronizes ripening across neighbouring fruits.`,
      diagram: `<svg viewBox="0 0 640 275" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dual diagram comparing a human spinal pain-withdrawal reflex arc on the left and plant shoot positive phototropism with PIN3 auxin redistribution on the right">
  <rect x="4" y="4" width="632" height="267" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="335" y1="16" x2="335" y2="259" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- LEFT PANEL: SPINAL REFLEX ARC -->
  <text x="170" y="26" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">A. Spinal Pain-Withdrawal Reflex Arc (SL)</text>
  <!-- Spinal cord cross-section -->
  <ellipse cx="220" cy="112" rx="74" ry="50" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
  <path d="M188 86 C205 94 210 105 220 105 C230 105 235 94 252 86 C258 98 250 108 242 112 C250 116 258 128 250 139 C235 132 230 121 220 121 C210 121 205 132 190 139 C182 128 190 116 198 112 C190 108 182 98 188 86 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
  <text x="220" y="176" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#475569">Spinal cord (grey &amp; white matter)</text>
  <!-- Pain stimulus / skin receptor -->
  <rect x="20" y="54" width="70" height="36" rx="7" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="55" y="70" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#991b1b">Hot Stimulus</text>
  <text x="55" y="83" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#b91c1c">Skin receptor</text>
  <!-- Sensory neuron (blue) through dorsal root ganglion -->
  <path d="M90 72 L135 72 C158 72 172 82 196 96" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="138" cy="64" r="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="138" y="49" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#1d4ed8">Dorsal root ganglion</text>
  <text x="122" y="88" font-family="sans-serif" font-size="9" font-weight="700" fill="#1d4ed8">Sensory</text>
  <!-- Relay neuron (purple) -->
  <path d="M198 98 C206 108 206 116 199 124" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  <circle cx="204" cy="111" r="4" fill="#7c3aed"/>
  <text x="248" y="114" font-family="sans-serif" font-size="9" font-weight="700" fill="#6d28d9">Relay</text>
  <!-- Ascending tract to brain -->
  <path d="M204 104 L204 42" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 2"/>
  <polygon points="204,36 200,44 208,44" fill="#64748b"/>
  <text x="253" y="46" font-family="sans-serif" font-size="9" fill="#475569">To brain (pain perceived)</text>
  <!-- Motor neuron (green) via ventral root -->
  <path d="M198 126 C172 142 156 196 104 202" fill="none" stroke="#15803d" stroke-width="2.5"/>
  <polygon points="94,202 105,197 105,207" fill="#15803d"/>
  <text x="155" y="212" font-family="sans-serif" font-size="9" font-weight="700" fill="#15803d">Motor neuron (ventral root)</text>
  <!-- Effector muscle -->
  <rect x="20" y="184" width="74" height="36" rx="7" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="57" y="200" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#14532d">Effector</text>
  <text x="57" y="213" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#166534">Muscle contracts</text>
  <text x="170" y="250" font-family="sans-serif" font-size="9.5" text-anchor="middle" fill="#334155">Fast (~30 ms), involuntary; bypasses conscious cortex</text>

  <!-- RIGHT PANEL: PHOTOTROPISM & AUXIN -->
  <text x="488" y="26" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">B. Shoot Phototropism &amp; Auxin [SL/HL]</text>
  <!-- Sun & light arrows -->
  <circle cx="378" cy="68" r="14" fill="#fde047" stroke="#ca8a04" stroke-width="1.8"/>
  <line x1="396" y1="68" x2="438" y2="78" stroke="#d97706" stroke-width="2"/>
  <polygon points="444,79 435,74 436,82" fill="#d97706"/>
  <line x1="395" y1="80" x2="435" y2="96" stroke="#d97706" stroke-width="2"/>
  <polygon points="441,99 432,92 430,99" fill="#d97706"/>
  <text x="378" y="102" font-family="sans-serif" font-size="9.5" font-weight="700" text-anchor="middle" fill="#b45309">Unilateral</text>
  <text x="378" y="113" font-family="sans-serif" font-size="9.5" font-weight="700" text-anchor="middle" fill="#b45309">blue light</text>
  <!-- Bending shoot outline -->
  <path d="M466 226 C468 175 462 125 436 86 C434 74 452 66 462 76 C490 116 502 172 504 226 Z" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
  <!-- Illuminated side shorter cells -->
  <path d="M448 92 L463 87 M456 112 L473 107 M462 134 L480 130 M465 158 L483 155 M466 184 L484 182" stroke="#16a34a" stroke-width="1.2"/>
  <!-- Center divider -->
  <path d="M450 82 C474 118 483 170 484 226" fill="none" stroke="#15803d" stroke-width="1.4" stroke-dasharray="3 2"/>
  <!-- Shaded side elongated cells shaded amber -->
  <path d="M454 80 C478 118 486 170 486 226 L504 226 C502 172 490 116 462 76 Z" fill="#fde68a" opacity="0.65"/>
  <!-- PIN3 lateral efflux arrow -->
  <path d="M452 88 Q468 92 478 104" fill="none" stroke="#dc2626" stroke-width="2"/>
  <polygon points="482,108 474,104 479,99" fill="#dc2626"/>
  <!-- Callout annotations -->
  <text x="515" y="88" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#b91c1c">PIN3 pumps [HL]</text>
  <text x="515" y="101" font-family="sans-serif" font-size="9" fill="#7f1d1d">shift IAA laterally</text>
  <text x="515" y="113" font-family="sans-serif" font-size="9" fill="#7f1d1d">to shaded side</text>
  <rect x="512" y="132" width="114" height="62" rx="7" fill="#fef3c7" stroke="#d97706" stroke-width="1.2"/>
  <text x="569" y="147" font-family="sans-serif" font-size="9.5" font-weight="700" text-anchor="middle" fill="#92400e">Shaded Side</text>
  <text x="569" y="160" font-family="sans-serif" font-size="8.8" text-anchor="middle" fill="#78350f">High [IAA] → H⁺ pumps</text>
  <text x="569" y="172" font-family="sans-serif" font-size="8.8" text-anchor="middle" fill="#78350f">loosen cell walls [HL]</text>
  <text x="569" y="184" font-family="sans-serif" font-size="8.8" text-anchor="middle" fill="#78350f">→ faster elongation</text>
  <text x="412" y="186" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#166534">Lit side:</text>
  <text x="412" y="198" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#166534">shorter cells</text>
  <!-- Soil base -->
  <line x1="428" y1="226" x2="540" y2="226" stroke="#78350f" stroke-width="3"/>
  <text x="488" y="250" font-family="sans-serif" font-size="9.5" text-anchor="middle" fill="#334155">Differential elongation bends shoot toward light</text>
</svg>`,
      diagramCaption:
        "Left: Three-neuron spinal pain-withdrawal reflex arc bypassing conscious processing. Right: Unilateral blue light redirects auxin (IAA) to the shaded side via PIN3 efflux pumps [HL], promoting faster cell elongation and positive phototropism.",
      workedExamples: [
        {
          title: "Autonomic Regulation & Cardiac Output During Exercise",
          problem:
            "At rest, an athlete has a heart rate of 60 beats min⁻¹ and a stroke volume of 75 cm³. During a 400 m sprint, chemoreceptors trigger sympathetic acceleration, raising heart rate to 160 beats min⁻¹ and stroke volume to 115 cm³. (a) Calculate the cardiac output during the sprint in dm³ min⁻¹. (b) Explain the physiological signal pathway that drove this increase.",
          steps: [
            "Use cardiac output formula: {{CO = HR * SV}}.",
            "Sprint cardiac output in cm³ min⁻¹: {{160 * 115 = 18400}} cm³ min⁻¹.",
            "Convert cm³ to dm³ by dividing by 1000: {{18400 / 1000 = 18.4}} dm³ min⁻¹ (compare with resting {{60 * 75 / 1000 = 4.5}} dm³ min⁻¹—more than a 4-fold increase!).",
            "Signal pathway: Rapid aerobic respiration in muscle cells increases dissolved blood CO₂ → forms H₂CO₃ → dissociates into H⁺, lowering blood pH → detected by chemoreceptors in carotid/aortic bodies and medulla → medulla oblongata increases sympathetic accelerator nerve firing (and epinephrine release from adrenal medulla) → sinoatrial (SA) node fires faster and ventricular contraction strengthens.",
          ],
          answer: "18.4 dm³ min⁻¹",
          yourTurn: {
            question:
              "During moderate cycling, a student's heart rate rises to 140 beats min⁻¹ and stroke volume reaches 105 cm³. Calculate the student's cardiac output in dm³ min⁻¹ (give your answer to 1 decimal place).",
            answer: { type: "number", value: 14.7, tolerance: 0.05, display: "14.7 dm³ min⁻¹" },
            solution:
              "{{CO = 140 * 105 = 14700}} cm³ min⁻¹. Divide by 1000 to convert to dm³ min⁻¹: {{14700 / 1000 = 14.7}} dm³ min⁻¹.",
          },
        },
        {
          title: "[HL] Predicting Outcomes of Coleoptile Auxin Barrier Experiments",
          problem:
            "An impermeable mica sheet is inserted halfway into the shaded side of a grass coleoptile just below the tip, while unilateral light shines from the left. Predict and explain the growth outcome.",
          steps: [
            "Unilateral light from the left causes PIN3 auxin efflux proteins in the tip to pump IAA laterally to the shaded (right) side.",
            "Normally, IAA diffuses basipetally down the shaded (right) side to activate H⁺-ATPase proton pumps and wall loosening.",
            "Because the impermeable mica sheet blocks basipetal auxin transport on the shaded (right) side, IAA cannot reach the elongation zone beneath the barrier.",
            "Result: Differential elongation is prevented; the shoot fails to bend toward the light (it either grows straight up slowly or bends slightly away if trace IAA only descends the lit side).",
          ],
          answer: "No phototropic bending toward the light because impermeable mica blocks downward IAA transport on the shaded side.",
        },
      ],
      keyPoints: [
        "Spinal reflex arc pathway: stimulus → receptor → sensory neuron (dorsal root) → relay neuron (spinal grey matter) → motor neuron (ventral root) → effector.",
        "Medulla oblongata regulates heart rate and ventilation rate primarily in response to blood CO₂/pH detected by chemoreceptors, NOT directly to low O₂.",
        "Melatonin (pineal gland) is secreted in darkness and inhibited by light via the SCN, synchronizing circadian rhythms.",
        "Auxin (IAA) promotes cell elongation in shoots (higher on shaded side → bends toward light) but inhibits elongation at high concentrations in roots.",
        "[HL] PIN3 efflux carriers redistribute IAA laterally; auxin activates plasma-membrane H⁺ pumps, acidifying cell walls so expansins loosen cellulose microfibrils.",
        "[HL] Ethylene drives climacteric fruit ripening via a self-amplifying positive feedback loop.",
      ],
      whyItWorks:
        "Separation of fast reflex circuits (local spinal loops) from slower endocrine coordination (hypothalamus–pituitary–adrenal/pineal axes) balances survival speed against energy-efficient whole-body homeostasis. In plants, decoupling light perception (apical tip) from mechanical growth (elongation zone below) via a diffusible chemical messenger (auxin) solves directional movement without nerves or muscles.",
      strategies: [
        "Trace every reflex-arc question in strict order: Receptor → Sensory (Dorsal) → Relay (CNS) → Motor (Ventral) → Effector.",
        "When explaining exercise heart/breathing increases, always link CO₂ → carbonic acid → H⁺ → pH drop → chemoreceptors → medulla oblongata → autonomic nerves.",
        "In phototropism diagrams, locate the shaded side first: in shoots, shaded side = more auxin = longer cells = bends toward light.",
      ],
      thinkDeeper:
        "Why do athletes experience a temporary overshoot in breathing rate even *before* blood CO₂ rises at the starting blocks? Anticipatory motor cortex commands (" +
        "central command) and epinephrine secretion prime the medulla ahead of metabolic demand—a feed-forward mechanism complementing negative feedback.",
    },

    {
      id: "defense-against-disease",
      heading: "C3.2 Innate Immunity, Adaptive Immunity, Vaccines & AMR",
      level: "SL",
      discovery: {
        problem:
          "Two siblings step on rusty garden thorns on the same afternoon. One has never had a tetanus booster; the other had a booster three years ago. Both experience blood clotting within minutes, yet only the vaccinated sibling neutralizes the toxin before symptoms appear—and if the unvaccinated sibling instead caught measles virus, taking penicillin would do nothing at all. Why?",
        idea:
          "Blood clotting and phagocytes are **non-specific innate defences** that act identically in both siblings. Only the vaccinated sibling carries **memory B-cells** capable of mounting a rapid, high-titre **secondary antibody response** upon re-exposure. Meanwhile, antibiotics like penicillin disrupt prokaryotic structures (peptidoglycan cell walls, 70S ribosomes) that viruses completely lack.",
      },
      body: `Human defence against pathogens operates in layered tiers: immediate physical/chemical barriers and clotting, rapid non-specific innate phagocytosis, and targeted adaptive lymphocyte immunity with long-term memory.

### 1. Primary Barriers & the Blood Clotting Cascade
- **Primary (surface) barriers**: Intact **skin** (dry keratinized epidermis, acidic sebum, protective microbiome) and **mucous membranes** (sticky mucus trapping inhaled/ingested microbes, ciliated respiratory epithelium sweeping mucus away, **lysozyme** in tears/saliva digesting bacterial cell walls, stomach HCl at pH ~2).
- **Blood clotting cascade** (seals breaks in skin/vessels to prevent bleeding and pathogen entry):
  1. Vessel damage exposes sub-endothelial collagen → **platelets** adhere, form a temporary plug, and release **clotting factors**.
  2. Clotting factors (with Ca²⁺) trigger an enzyme cascade converting inactive soluble plasma **prothrombin** into active protease **thrombin**.
  3. **Thrombin** catalyses conversion of soluble plasma **fibrinogen** into insoluble **fibrin** polymers.
  4. **Fibrin** threads weave a mesh trapping red blood cells and platelets into a stable clot (drying into a scab).
  - *Clinical link*: A clot forming inside an unbroken **coronary artery** over a ruptured fatty plaque causes **coronary thrombosis**, starving downstream myocardium of O₂ and glucose (myocardial infarction).

### 2. Innate Phagocytosis vs Adaptive Clonal Selection
- **Innate immunity** (fast, non-specific, no memory): **Phagocytes** (neutrophils and macrophages) exit capillaries by amoeboid movement, engulf pathogens into a vesicle (**phagosome**) via endocytosis, and fuse it with **lysosomes** containing hydrolytic enzymes. Macrophages then display digested pathogen fragments on surface MHC proteins, acting as **antigen-presenting cells (APCs)**.
- **Adaptive immunity** (specific to molecular **antigens**, develops **memory**):
  1. An APC presents a specific foreign antigen to a **helper T-lymphocyte (T_H cell)** carrying the matching complementary receptor.
  2. Activated T_H cells divide and secrete **cytokines** that activate **B-lymphocytes** whose surface receptors have bound the same antigen.
  3. Activated B-cells undergo rapid mitosis (**clonal expansion**) and differentiate into:
     - **Plasma cells** (packed with rough ER and Golgi) secreting vast quantities of specific **antibodies** (immunoglobulins) that agglutinate pathogens, neutralize toxins, and opsonize microbes for phagocytes.
     - **Memory B-cells** (and memory T-cells) remaining dormant in circulation/lymph nodes for years.

### 3. Primary vs Secondary Response, Vaccines & Herd Immunity
- **Primary response** (first encounter): Long lag phase (5–10 days) while clonal selection occurs; modest peak antibody concentration; rapid decline; clinical illness often occurs.
- **Secondary response** (subsequent encounter with the same antigen): Memory cells bypass initial clonal search → **much shorter lag phase** (1–2 days), **dramatically higher peak antibody concentration**, and **prolonged persistence**, eliminating the pathogen before symptoms emerge.
- **Vaccines**: Deliberately expose the immune system to a harmless antigen (weakened/attenuated pathogen, inactivated pathogen, purified protein subunit, toxoid, or mRNA encoding an antigenic protein) to induce active primary immunity and memory cells safely.
- **Herd immunity**: If the fraction of immune individuals in a population exceeds the critical threshold {{p_c = 1 - 1/R_0}} (where {{R_0}} is the pathogen's basic reproduction number—average secondary cases from one infected person in a fully susceptible population), transmission chains collapse, indirectly shielding newborns and immunocompromised people.

### 4. HIV, Antibiotics, AMR & Zoonotic Diseases
- **HIV & AIDS**: HIV is a retrovirus that specifically infects and destroys **CD4⁺ helper T-cells**. As T_H counts fall over years, B-cells and cytotoxic T-cells can no longer be effectively activated → progressive immunodeficiency (**AIDS**), leaving patients vulnerable to opportunistic infections.
- **Antibiotics vs Viruses**: Antibiotics inhibit **prokaryotic-specific** targets (e.g., penicillin blocks peptidoglycan cell-wall cross-linking; tetracyclines/streptomycin block bacterial 70S ribosomes). Viruses are acellular obligate parasites with no cell wall, no ribosomes, and no independent metabolism—so antibiotics have **zero effect** on viral infections.
- **Antimicrobial Resistance (AMR)**: Arises by **Darwinian natural selection**, NOT because bacteria "learn" to resist. Pre-existing random mutations (or resistance genes transferred on plasmids via conjugation) confer survival in the presence of an antibiotic. Over-prescription, incomplete courses, and routine agricultural use kill susceptible cells, allowing resistant strains (e.g., MRSA, MDR-TB) to dominate.
- **Zoonotic diseases**: Infectious diseases naturally transmissible from vertebrate animals to humans (e.g., rabies, Ebola, influenza, SARS-CoV-2, bovine tuberculosis), often emerging where deforestation or intensive livestock farming increases human–wildlife contact.`,
      diagram: `<svg viewBox="0 0 640 275" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dual diagram showing the blood clotting cascade on the left and a log-scale primary versus secondary antibody concentration graph on the right">
  <rect x="4" y="4" width="632" height="267" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="278" y1="16" x2="278" y2="259" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- LEFT PANEL: BLOOD CLOTTING CASCADE -->
  <text x="141" y="26" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">A. Blood Clotting Cascade</text>
  <rect x="42" y="40" width="198" height="30" rx="7" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="141" y="59" font-family="sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#991b1b">Vessel damage → Platelets adhere</text>
  <line x1="141" y1="70" x2="141" y2="86" stroke="#475569" stroke-width="2"/>
  <polygon points="141,92 136,84 146,84" fill="#475569"/>
  <rect x="42" y="92" width="198" height="28" rx="7" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="141" y="110" font-family="sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#92400e">Release of clotting factors (+ Ca²⁺)</text>
  <line x1="141" y1="120" x2="141" y2="138" stroke="#475569" stroke-width="2"/>
  <polygon points="141,144 136,136 146,136" fill="#475569"/>
  <!-- Prothrombin -> Thrombin -->
  <rect x="20" y="144" width="102" height="30" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="71" y="158" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#075985">Prothrombin</text>
  <text x="71" y="169" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#0369a1">(inactive)</text>
  <line x1="122" y1="159" x2="152" y2="159" stroke="#0284c7" stroke-width="2"/>
  <polygon points="158,159 150,154 150,164" fill="#0284c7"/>
  <rect x="158" y="144" width="102" height="30" rx="6" fill="#bae6fd" stroke="#0369a1" stroke-width="1.8"/>
  <text x="209" y="158" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#0c4a6e">Thrombin</text>
  <text x="209" y="169" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#075985">(active enzyme)</text>
  <!-- Thrombin catalyses Fibrinogen -> Fibrin -->
  <path d="M209 174 L209 188 L141 188 L141 198" fill="none" stroke="#0369a1" stroke-width="1.8"/>
  <polygon points="141,204 136,196 146,196" fill="#0369a1"/>
  <rect x="20" y="204" width="102" height="30" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="71" y="218" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#166534">Fibrinogen</text>
  <text x="71" y="229" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#15803d">(soluble plasma)</text>
  <line x1="122" y1="219" x2="152" y2="219" stroke="#15803d" stroke-width="2"/>
  <polygon points="158,219 150,214 150,224" fill="#15803d"/>
  <rect x="158" y="204" width="102" height="30" rx="6" fill="#bbf7d0" stroke="#15803d" stroke-width="1.8"/>
  <text x="209" y="218" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#14532d">Fibrin mesh</text>
  <text x="209" y="229" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#166534">(insoluble clot)</text>
  <text x="141" y="255" font-family="sans-serif" font-size="9.2" text-anchor="middle" fill="#334155">Traps erythrocytes &amp; seals wound against pathogens</text>

  <!-- RIGHT PANEL: PRIMARY VS SECONDARY ANTIBODY RESPONSE -->
  <text x="458" y="26" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">B. Primary vs Secondary Antibody Response</text>
  <!-- Axes -->
  <line x1="330" y1="226" x2="615" y2="226" stroke="#334155" stroke-width="1.8"/>
  <line x1="330" y1="226" x2="330" y2="48" stroke="#334155" stroke-width="1.8"/>
  <text x="472" y="254" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#334155">Time / days</text>
  <text x="305" y="138" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#334155" transform="rotate(-90 305 138)">Antibody concentration (log scale)</text>
  <!-- Gridlines -->
  <line x1="330" y1="180" x2="610" y2="180" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="330" y1="130" x2="610" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="330" y1="80" x2="610" y2="80" stroke="#e2e8f0" stroke-width="1"/>
  <!-- Exposure arrows -->
  <line x1="348" y1="238" x2="348" y2="228" stroke="#dc2626" stroke-width="2"/>
  <polygon points="348,225 344,232 352,232" fill="#dc2626"/>
  <text x="352" y="246" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#dc2626">1st exposure</text>
  <line x1="474" y1="238" x2="474" y2="228" stroke="#15803d" stroke-width="2"/>
  <polygon points="474,225 470,232 478,232" fill="#15803d"/>
  <text x="478" y="246" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#15803d">2nd exposure (same Ag)</text>
  <!-- Primary response curve -->
  <path d="M332 224 L374 224 C384 224 396 154 410 150 C424 146 438 192 474 206" fill="none" stroke="#2563eb" stroke-width="2.8"/>
  <!-- Secondary response curve -->
  <path d="M474 206 C482 204 492 72 514 62 C536 54 562 96 608 118" fill="none" stroke="#15803d" stroke-width="3"/>
  <!-- Lag annotations -->
  <line x1="348" y1="214" x2="374" y2="214" stroke="#2563eb" stroke-width="1.5"/>
  <text x="361" y="209" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#1d4ed8">Long lag</text>
  <text x="412" y="139" font-family="sans-serif" font-size="9.5" font-weight="700" text-anchor="middle" fill="#1d4ed8">Primary peak</text>
  <text x="412" y="128" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#3b82f6">(slow clonal selection)</text>
  <text x="546" y="54" font-family="sans-serif" font-size="9.5" font-weight="700" text-anchor="middle" fill="#15803d">Secondary peak</text>
  <text x="556" y="76" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#166534">Fast, huge &amp; sustained</text>
  <text x="556" y="88" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#166534">(memory B-cells)</text>
</svg>`,
      diagramCaption:
        "Left: Enzyme cascade converting soluble fibrinogen into an insoluble fibrin clot. Right: Memory B-cells make the secondary antibody response faster (shorter lag), much higher in peak concentration, and longer-lasting than the primary response.",
      workedExamples: [
        {
          title: "Calculating Herd-Immunity Thresholds from R₀",
          problem:
            "Measles has a basic reproduction number {{R_0 = 16}}, whereas seasonal influenza typically has {{R_0 = 1.6}}. Calculate the minimum percentage of a population that must be immune to achieve herd immunity for each disease, and explain why small drops in MMR vaccine uptake rapidly trigger measles outbreaks.",
          steps: [
            "Apply the herd-immunity threshold formula: {{p_c = 1 - 1/R_0}}.",
            "For measles ({{R_0 = 16}}): {{p_c = 1 - 1/16 = 15/16 = 0.9375}}, which is **93.8%**.",
            "For seasonal influenza ({{R_0 = 1.6}}): {{p_c = 1 - 1/1.6 = 1 - 0.625 = 0.375}}, which is **37.5%**.",
            "Explanation: Because measles is extraordinarily contagious ({{R_0 = 16}}), nearly 94% of the community must be immune to keep effective transmission below 1. Even a modest drop from 95% to 88% coverage creates enough susceptible contacts for rapid epidemic spread.",
          ],
          answer: "Measles: 93.8%; Seasonal influenza: 37.5%",
          yourTurn: {
            question:
              "A respiratory pathogen has a basic reproduction number {{R_0 = 5}}. Calculate the minimum percentage of the population that must be immune to reach the herd-immunity threshold.",
            answer: { type: "number", value: 80, tolerance: 0.1, display: "80%" },
            solution:
              "{{p_c = 1 - 1/5 = 1 - 0.2 = 0.80}}. Multiply by 100 to express as a percentage: **80%**.",
          },
        },
        {
          title: "Tracing Adaptive Immunity & Why HIV Causes AIDS",
          problem:
            "Outline the sequence of cellular events from a macrophage engulfing a bacterium to antibody secretion, and explain why HIV infection impairs this pathway.",
          steps: [
            "Phagocytosis & antigen presentation: A macrophage engulfs the bacterium into a phagosome, digests it with lysosomal enzymes, and displays foreign peptide antigens on its plasma membrane (becoming an APC).",
            "T-helper activation: A helper T-cell (CD4⁺) with a complementary receptor binds the presented antigen and secretes cytokines.",
            "B-cell clonal expansion: Cytokines stimulate B-lymphocytes bound to the same antigen to divide by mitosis into antibody-secreting **plasma cells** and long-lived **memory B-cells**.",
            "HIV disruption: HIV specifically infects and destroys helper T-cells; without sufficient T_H cytokines, B-cells cannot efficiently differentiate into plasma cells, crippling antibody-mediated immunity against opportunistic infections.",
          ],
          answer: "Macrophage APC → Helper T-cell cytokines → B-cell clonal expansion → Plasma cells secrete specific antibodies; HIV destroys helper T-cells, blocking this activation.",
        },
      ],
      keyPoints: [
        "Clotting cascade order: platelets → clotting factors → prothrombin → thrombin → fibrinogen (soluble) → fibrin (insoluble mesh).",
        "Innate immunity is rapid, non-specific, and lacks memory; adaptive immunity is antigen-specific and produces long-lived memory B- and T-cells.",
        "Secondary immune responses have a shorter lag phase, much higher peak antibody concentration, and slower decline than primary responses.",
        "Herd-immunity threshold is {{p_c = 1 - 1/R_0}}: higher {{R_0}} requires a higher vaccinated fraction to stop spread.",
        "Antibiotics target prokaryotic features (peptidoglycan cell walls, 70S ribosomes) and never work against viruses; AMR evolves by natural selection of pre-existing resistant variants.",
        "HIV targets CD4⁺ helper T-lymphocytes, reducing cytokine activation of both B-cells and cytotoxic T-cells.",
      ],
      whyItWorks:
        "Maintaining huge standing armies of antibodies against every possible pathogen would drain enormous amino-acid and ATP budgets. Clonal selection solves this by keeping just a few naïve lymphocytes per antigen, expanding only the exact clone needed, and storing cheap long-lived memory cells so repeat threats are crushed before disease takes hold.",
      strategies: [
        "Never confuse **antigen** (foreign surface marker on a pathogen), **antibody** (host immunoglobulin secreted by plasma cells), and **antibiotic** (drug targeting bacterial machinery).",
        "In AMR questions, ALWAYS state that resistance mutations arise **randomly before** antibiotic exposure—antibiotics act as the **selective pressure**, never as the cause of the mutation.",
        "When comparing primary vs secondary graphs, score all 3 marks: (1) shorter lag phase, (2) higher peak titre, (3) longer persistence.",
      ],
      thinkDeeper:
        "Why must seasonal influenza vaccines be reformulated nearly every year whereas two childhood doses of the MMR vaccine protect against measles for life? Influenza's RNA polymerase has a high error rate and segmented genome (**antigenic drift and shift**), altering surface haemagglutinin/neuraminidase epitopes so prior memory B-cell antibodies no longer bind effectively, whereas measles surface proteins are functionally constrained against escape mutations.",
    },

    {
      id: "populations-communities-chi",
      heading: "C4.1 Populations, Sampling, Chi-Squared & Community Interactions",
      level: "SL",
      discovery: {
        problem:
          "Suppose you catch 50 woodland snails, dab a harmless waterproof dot on each shell, and release them. A week later you collect 60 snails and find 10 of them carry your dot. What is your best estimate of the total snail population—and what happens to your estimate if rain washes half the dots off?",
        idea:
          "If the marked snails mixed randomly, the proportion marked in your second sample ({{10/60 = 1/6}}) estimates the proportion of the whole woodland population you marked initially ({{50/N}}). Solving {{50/N = 10/60}} gives {{N = (50 * 60)/10 = 300}} snails! If rain washes dots off, you recapture *fewer* marked snails (smaller denominator {{m}}), causing the Lincoln index to **overestimate** the true population.",
      },
      body: `Ecologists quantify population size, growth dynamics, and species interactions using standardized field sampling and statistical hypothesis testing.

### 1. Estimating Population Size: Quadrats vs Lincoln Index
- **Random quadrat sampling** (sessile/slow organisms: plants, barnacles, coral): Lay two perpendicular tape measures to form a coordinate grid, use a random number generator to pick (x, y) coordinates (eliminating observer bias), count individuals in each quadrat, and scale up:
  - {{N = "mean per quadrat" * ("total habitat area" / "quadrat area")}}.
- **Capture–Mark–Recapture & Lincoln Index** (motile animals: insects, birds, fish, small mammals):
  - Capture and mark {{M}} individuals → release and allow random mixing → recapture a second sample of {{n}} individuals, of which {{m}} are marked:
  - {{N = (M * n) / m}}.
  - **Key assumptions**: (1) Closed population (no births, deaths, immigration, or emigration between samples); (2) marks are non-toxic, permanent, and do not alter predation risk; (3) complete random mixing; (4) equal catchability (no "trap-happy" or "trap-shy" behavioural bias).

### 2. Sigmoid Population Growth & Carrying Capacity (K)
When a population colonizes a finite habitat, numbers typically follow an **S-shaped (sigmoid / logistic) curve**:
1. **Exponential (log) phase**: Abundant food/space and little disease/predation → (natality + immigration) ≫ (mortality + emigration); population accelerates steeply.
2. **Transitional phase**: Increasing population density intensifies competition, waste accumulation, parasitism, and predation → growth rate decelerates.
3. **Plateau phase**: Population fluctuates around **carrying capacity (K)**—the maximum population size the environment can sustainably support—where (natality + immigration) ≈ (mortality + emigration).
- **Density-dependent limiting factors** (scale with population density, regulating K via negative feedback): intraspecific competition, infectious disease, predation, parasitism.
- **Density-independent limiting factors** (act regardless of density): wildfires, flash floods, hurricanes, volcanic eruptions, sudden frosts.

### 3. Chi-Squared Test of Association (2 × 2 Contingency Table)
To test whether two species (e.g., heather and bracken) are associated across N random quadrats:
1. State hypotheses: **{{H_0}}** = the two species are distributed **independently** (no association); **{{H_1}}** = there is a statistically significant **association** between the two species.
2. Build a 2 × 2 table of **observed frequencies ({{O}})** (Both present / Only A / Only B / Neither) with row totals, column totals, and grand total {{T}}.
3. Compute each cell's **expected frequency**: {{E = ("row total" * "column total") / "grand total"}}.
4. Compute **chi-squared**: {{χ^2 = Σ((O - E)^2 / E)}} across all 4 cells.
5. Degrees of freedom: {{df = ("rows" - 1)("columns" - 1) = (2 - 1)(2 - 1) = 1}}. At significance level {{p = 0.05}} and {{df = 1}}, the critical value is **3.841**.
6. **Conclusion**: If {{χ^2 > 3.841}}, **reject {{H_0}}** (accept {{H_1}}). Compare {{O}} vs {{E}} in the "Both present" cell: {{O > E}} indicates a **positive association** (shared microhabitat or mutualism); {{O < E}} indicates a **negative association** (competitive exclusion or opposing abiotic tolerances).

### 4. Community Interactions, Cycles & Control
- **Competition**: **Intraspecific** (within one species—intense because niches are identical) vs **interspecific** (between different species—leads to resource partitioning or competitive exclusion). **Allelopathy** occurs when organisms secrete chemical inhibitors to suppress competitors (e.g., *Penicillium* secreting penicillin; black walnut secreting juglone).
- **Mutualism (+/+) — three classic IB examples**:
  - **Root nodules in legumes** (*Fabaceae* + *Rhizobium* bacteria): bacteria fix atmospheric N₂ into NH₃ for the plant; the plant provides sugars and low-O₂ leghaemoglobin protection.
  - **Mycorrhizae in orchids & forest trees**: fungal hyphae dramatically boost water and phosphate absorption; the plant supplies photosynthetic carbohydrates.
  - **Reef-building corals & zooxanthellae** (*Symbiodinium*): photosynthetic dinoflagellates supply organic carbon and O₂; coral polyps provide shelter, CO₂, and nitrogenous wastes.
- **Predator–prey oscillations**: Coupled negative-feedback cycles (e.g., snowshoe hare and Canadian lynx) in which **predator population peaks lag behind prey peaks** because predators reproduce only after prey become abundant and crash after over-consuming prey.
- **Top-down vs Bottom-up control**: **Top-down** = predators/herbivores limit lower trophic levels (e.g., sea otters suppressing sea urchins so kelp forests thrive); **bottom-up** = abiotic nutrients/light limit primary producers and cascade upward (e.g., algal blooms after nitrate runoff).
- **Invasive alien species**: Non-native species introduced by humans that spread aggressively because they lack natural predators, parasites, or competitors in the new ecosystem (e.g., cane toads in Australia, lionfish in the Caribbean), reducing endemic biodiversity.`,
      diagram: `<svg viewBox="0 0 640 275" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dual ecological graph showing a sigmoid population growth curve with carrying capacity K on the left and lagged predator-prey oscillations on the right">
  <rect x="4" y="4" width="632" height="267" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="322" y1="16" x2="322" y2="259" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- LEFT PANEL: SIGMOID CURVE -->
  <text x="163" y="26" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">A. Sigmoid Population Growth Curve</text>
  <!-- Axes -->
  <line x1="48" y1="226" x2="300" y2="226" stroke="#334155" stroke-width="1.8"/>
  <line x1="48" y1="226" x2="48" y2="48" stroke="#334155" stroke-width="1.8"/>
  <text x="174" y="252" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#334155">Time</text>
  <text x="24" y="138" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#334155" transform="rotate(-90 24 138)">Population size (N)</text>
  <!-- Phase shading -->
  <rect x="49" y="50" width="76" height="175" fill="#dcfce7" opacity="0.45"/>
  <rect x="125" y="50" width="76" height="175" fill="#fef3c7" opacity="0.45"/>
  <rect x="201" y="50" width="98" height="175" fill="#e0f2fe" opacity="0.45"/>
  <!-- Carrying capacity K -->
  <line x1="48" y1="84" x2="300" y2="84" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="6 4"/>
  <text x="296" y="76" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="end" fill="#b91c1c">Carrying capacity (K)</text>
  <!-- Logistic S-curve -->
  <path d="M52 222 C86 220 112 204 132 156 C152 108 176 88 206 85 C232 82 246 89 266 82 C280 78 290 87 298 84" fill="none" stroke="#15803d" stroke-width="3"/>
  <!-- Phase labels -->
  <text x="87" y="64" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#166534">Exponential</text>
  <text x="163" y="64" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#92400e">Transitional</text>
  <text x="250" y="64" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#075985">Plateau</text>
  <text x="87" y="213" font-family="sans-serif" font-size="8.2" text-anchor="middle" fill="#166534">b+i ≫ d+e</text>
  <text x="250" y="106" font-family="sans-serif" font-size="8.2" text-anchor="middle" fill="#075985">b+i ≈ d+e</text>

  <!-- RIGHT PANEL: PREDATOR-PREY OSCILLATION -->
  <text x="480" y="26" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">B. Predator–Prey Oscillation Cycle</text>
  <!-- Axes -->
  <line x1="364" y1="226" x2="618" y2="226" stroke="#334155" stroke-width="1.8"/>
  <line x1="364" y1="226" x2="364" y2="48" stroke="#334155" stroke-width="1.8"/>
  <text x="491" y="252" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#334155">Time / years</text>
  <text x="342" y="138" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#334155" transform="rotate(-90 342 138)">Relative population</text>
  <!-- Prey curve (teal, peaks first) -->
  <path d="M366 176 C384 112 398 76 416 76 C434 76 452 198 476 198 C500 198 518 76 540 76 C562 76 582 198 614 196" fill="none" stroke="#0d9488" stroke-width="2.8"/>
  <!-- Predator curve (orange, lags prey peak) -->
  <path d="M366 202 C394 202 418 112 442 112 C466 112 484 210 508 210 C532 210 548 112 570 112 C590 112 602 182 616 204" fill="none" stroke="#ea580c" stroke-width="2.8" stroke-dasharray="6 3"/>
  <!-- Lag indicator -->
  <line x1="416" y1="70" x2="442" y2="70" stroke="#7c3aed" stroke-width="1.8"/>
  <line x1="416" y1="70" x2="416" y2="76" stroke="#7c3aed" stroke-width="1.4"/>
  <line x1="442" y1="70" x2="442" y2="110" stroke="#7c3aed" stroke-width="1.4" stroke-dasharray="2 2"/>
  <text x="430" y="63" font-family="sans-serif" font-size="8.5" font-weight="700" text-anchor="middle" fill="#6d28d9">Lag</text>
  <!-- Legend -->
  <rect x="478" y="42" width="136" height="36" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="486" y1="54" x2="508" y2="54" stroke="#0d9488" stroke-width="2.8"/>
  <text x="514" y="57" font-family="sans-serif" font-size="9" font-weight="700" fill="#0f766e">Prey (e.g., hare)</text>
  <line x1="486" y1="68" x2="508" y2="68" stroke="#ea580c" stroke-width="2.8" stroke-dasharray="5 2"/>
  <text x="514" y="71" font-family="sans-serif" font-size="9" font-weight="700" fill="#c2410c">Predator (e.g., lynx)</text>
</svg>`,
      diagramCaption:
        "Left: Logistic (sigmoid) growth plateaus around carrying capacity K as density-dependent limiting factors match natality and mortality. Right: Predator population peaks lag behind prey peaks in a negative-feedback oscillation.",
      workedExamples: [
        {
          title: "Capture–Mark–Recapture (Lincoln Index) & Bias Analysis",
          problem:
            "Field ecologists trap, mark, and release 75 woodlice in a forest plot. Two days later they capture 80 woodlice, of which 15 bear marks. (a) Estimate the population size. (b) Explain how the estimate would be biased if marked woodlice were easier for robins to spot and eat.",
          steps: [
            "Identify values: {{M = 75}} (initial marked), {{n = 80}} (second sample size), {{m = 15}} (marked recaptures).",
            "Apply Lincoln index: {{N = (M * n) / m = (75 * 80) / 15 = 6000 / 15 = 400}} woodlice.",
            "Bias analysis: Higher predation on marked woodlice removes marked individuals before the second sample, **reducing {{m}}** in the denominator.",
            "Since {{N}} is inversely proportional to {{m}}, a smaller {{m}} produces an **overestimate** of the true woodlouse population.",
          ],
          answer: "400 woodlice; higher predation on marked animals causes an overestimate.",
          yourTurn: {
            question:
              "In a pond survey, 60 water beetles are captured, marked, and released. One week later, 80 beetles are caught and 12 are marked. Use the Lincoln index to estimate the pond's water-beetle population.",
            answer: { type: "number", value: 400, tolerance: 0.5, display: "400 individuals" },
            solution:
              "{{N = (M * n) / m = (60 * 80) / 12 = 4800 / 12 = 400}} water beetles.",
          },
        },
        {
          title: "Complete 2 × 2 Chi-Squared Test of Species Association",
          problem:
            "Students place 100 random quadrats across a rocky shore and record presence/absence of barnacles (Species A) and dogwhelks (Species B): Both present = 45, Barnacles only = 15, Dogwhelks only = 15, Neither = 25. Test for an association at {{p = 0.05}} (critical value for {{df = 1}} is 3.841).",
          steps: [
            "Compute row and column totals: Barnacles present = {{45 + 15 = 60}}; Barnacles absent = {{15 + 25 = 40}}; Dogwhelks present = {{45 + 15 = 60}}; Dogwhelks absent = {{15 + 25 = 40}}; Grand total = 100.",
            "Calculate expected frequencies {{E = (" + '"row total"' + " * " + '"col total"' + ") / 100}}: Both = {{(60 * 60)/100 = 36}}; Barnacles only = {{(60 * 40)/100 = 24}}; Dogwhelks only = {{(40 * 60)/100 = 24}}; Neither = {{(40 * 40)/100 = 16}}.",
            "Compute {{(O - E)^2 / E}} for each cell: Both = {{(45 - 36)^2 / 36 = 81/36 = 2.25}}; Barnacles only = {{(15 - 24)^2 / 24 = 81/24 = 3.375}}; Dogwhelks only = {{(15 - 24)^2 / 24 = 3.375}}; Neither = {{(25 - 16)^2 / 16 = 81/16 = 5.0625}}.",
            "Sum all four terms: {{χ^2 = 2.25 + 3.375 + 3.375 + 5.0625 = 14.0625}} (≈ 14.1). Degrees of freedom: {{df = (2 - 1)(2 - 1) = 1}}.",
            "Compare: {{14.06 > 3.841}} → **reject {{H_0}}** at {{p < 0.05}}. Because observed 'Both present' (45) exceeds expected (36), there is a **statistically significant positive association** (dogwhelks prey on barnacles and share the same intertidal zone).",
          ],
          answer: "χ² = 14.06 (df = 1) > 3.841 → reject H₀; significant positive association.",
        },
      ],
      keyPoints: [
        "Use random quadrats for sessile organisms ({{N = " + '"mean"' + " * " + '"total area"' + " / " + '"quadrat area"' + "}}) and the Lincoln index ({{N = (M * n) / m}}) for motile animals.",
        "Any violation that reduces recaptured marks {{m}} (mark loss, immigration, births, higher predation on marked animals) **overestimates** {{N}}; trap-happiness inflates {{m}} and **underestimates** {{N}}.",
        "Sigmoid growth has exponential, transitional, and plateau phases regulated around carrying capacity {{K}} by density-dependent factors.",
        "For a 2 × 2 chi-squared test of association, {{df = 1}} and critical value = 3.841 ({{p = 0.05}}); reject {{H_0}} when {{χ^2 > 3.841}}.",
        "Know three mutualisms (legume root nodules + *Rhizobium*, mycorrhizal fungi + orchids/trees, corals + zooxanthellae) and distinguish top-down vs bottom-up control.",
      ],
      whyItWorks:
        "Ecological sampling replaces impossible total censuses with probability ratios: Lincoln's index exploits equal recapture odds, while χ² measures how far observed co-occurrences deviate from the product of independent probabilities. Recognizing positive vs negative feedback explains why populations stabilize around K or oscillate with their predators.",
      strategies: [
        "Always check that your four expected values {{E}} sum to the exact grand total {{T}} before squaring differences in χ².",
        "Never say a χ² test 'proves' mutualism or competition—it only shows a statistically significant **association**; ecological reasons must be argued separately.",
        "On predator–prey graphs, identify the prey curve immediately: it reaches higher absolute numbers (usually) AND always peaks *earlier* than the predator curve.",
      ],
      thinkDeeper:
        "Why do ecologists avoid using χ² when any cell has an expected frequency {{E < 5}}? The discrete counts deviate too far from the continuous χ² distribution, inflating Type I error rates (false positives); in small samples, Fisher's exact test must be used instead.",
    },

    {
      id: "transfers-energy-matter",
      heading: "C4.2 Food Webs, Energy Pyramids, Productivity & Carbon Cycle",
      level: "SL",
      discovery: {
        problem:
          "Over 10 million kilojoules of sunlight hit a square metre of tropical grassland each year, yet lions sit at the very top of a food chain rarely longer than four links—and meanwhile the Mauna Loa CO₂ record rises every winter and dips every summer even while climbing relentlessly since 1958. Why can't food chains have ten trophic levels, and what makes Earth's atmosphere 'breathe' once a year?",
        idea:
          "At every trophic transfer, ~90% of chemical energy is lost—mostly as **respiratory heat** that cannot be re-captured—so by the 4th or 5th trophic level too little energy remains to support a viable predator population. Meanwhile, the annual CO₂ sawtooth reflects the **Northern Hemisphere growing season** (huge forests draw down CO₂ in May–September and release it via respiration/decay in October–April), superimposed on the long-term rise from burning fossil carbon.",
      },
      body: `Ecosystems obey two contrasting conservation laws: **energy flows one way** through an **open system** (entering as sunlight or chemical energy and leaving as heat), whereas **matter cycles continuously** within a largely **closed system**.

### 1. Autotrophs, Heterotrophs & Food Webs
- **Autotrophs (Producers)** synthesize organic carbon compounds from inorganic CO₂:
  - **Photoautotrophs** (plants, algae, cyanobacteria) harness sunlight via photosynthesis.
  - **Chemoautotrophs** (e.g., deep-sea hydrothermal vent iron- or sulfur-oxidizing bacteria) harness energy from inorganic chemical oxidation (such as H₂S) in total darkness.
- **Heterotrophs** obtain organic carbon from other organisms: **consumers** (ingest living/recently killed prey), **detritivores** (ingest dead organic matter internally, e.g., earthworms, dung beetles), and **saprotrophs** (decomposers—fungi and bacteria—that secrete extracellular enzymes onto dead matter and absorb digested products, recycling mineral nutrients).
- **Food chains & food webs**: Arrows represent the **direction of energy and biomass transfer** (never "who eats whom" backwards!). Real ecosystems form food webs because omnivores and opportunistic predators feed across multiple trophic levels.

### 2. Energy Transfer Efficiency, Pyramids of Energy & Productivity
- Only **~10%** (typically 5–20%) of chemical energy moves from one trophic level to the next:
  - {{ "Efficiency (%)" = ("Energy at level " n / "Energy at level " (n - 1)) * 100 }}.
  - Why ~90% is lost at each step: (1) **Cellular respiration** releases **thermal energy (heat)** that dissipates to the environment and cannot be reconverted into chemical energy by living organisms; (2) parts of organisms are **not consumed** (roots, bones, wood); (3) consumed tissues are **not fully digested/assimilated** (egested in faeces or excreted as urea).
- **Pyramids of Energy**:
  - Standard units: **kJ m⁻² yr⁻¹** (energy per unit area per unit time).
  - Drawn as stepped horizontal bars (never sloping triangles), with bar lengths proportional to energy values.
  - **Always upright** (cannot be inverted, unlike pyramids of numbers or standing biomass) because of the laws of thermodynamics.
- **Primary & Secondary Productivity**:
  - **Gross Primary Productivity (GPP)**: Total rate at which producers convert light energy into chemical biomass via photosynthesis.
  - **Net Primary Productivity (NPP)**: Rate of new producer biomass accumulation remaining after autotrophic cellular respiration ({{R}}):
    - {{NPP = GPP - R}}.
  - **Secondary productivity**: Rate at which heterotrophs convert assimilated chemical energy into new consumer biomass (always far lower than NPP due to high consumer respiration and egestion).

### 3. The Carbon Cycle: Pools, Sinks, Sources & Ocean Acidification
- **Major carbon pools (sinks/reservoirs)**: Atmosphere (CO₂, CH₄), biosphere (biomass & soil organic matter), hydrosphere (dissolved CO₂, H₂CO₃, HCO₃⁻, CO₃²⁻), and lithosphere (fossil fuels—coal, oil, natural gas; peat; carbonate limestone CaCO₃).
- **Carbon sink** = net carbon uptake exceeds release (e.g., regrowing forest, surface oceans, waterlogged acidic anaerobic **peat bogs** where lack of O₂ and low pH inhibit saprotrophs so dead plant matter accumulates partially undecayed, marine organisms precipitating CaCO₃ shells → limestone).
- **Carbon source** = net carbon release exceeds uptake (e.g., burning fossil fuels, deforestation/wildfires, draining peatlands which exposes organic carbon to aerobic decomposers).
- **Ocean acidification**: Roughly a quarter of anthropogenic CO₂ dissolves in seawater (CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻). Excess H⁺ lowers ocean pH and reacts with carbonate ions (H⁺ + CO₃²⁻ → HCO₃⁻), depleting CO₃²⁻ required by reef-building corals and shelled molluscs to build calcium carbonate (CaCO₃) skeletons.

### 4. Interpreting the Keeling Curve
Continuous atmospheric CO₂ measurements at Mauna Loa Observatory (Hawaii) since 1958 reveal two distinct superimposed patterns:
1. **Annual sawtooth oscillation (~5–7 ppm each year)**: Driven by Northern Hemisphere seasonality (the Northern Hemisphere contains ~68% of global land area and vast boreal/temperate forests). From **May to September** (northern spring/summer), global photosynthesis exceeds respiration → atmospheric CO₂ dips; from **October to April** (northern autumn/winter), leaf-fall decomposition and respiration exceed photosynthesis → atmospheric CO₂ climbs.
2. **Steady accelerating upward trend (~315 ppm in 1958 → >420 ppm today)**: Caused by anthropogenic **combustion of fossil fuels**, cement production, and deforestation transferring long-sequestered lithospheric/biospheric carbon into the atmosphere faster than natural sinks can absorb it.`,
      diagram: `<svg viewBox="0 0 640 275" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dual diagram showing a stepped pyramid of energy with respiratory heat losses on the left and the Mauna Loa Keeling Curve of atmospheric CO2 on the right">
  <rect x="4" y="4" width="632" height="267" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="316" y1="16" x2="316" y2="259" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- LEFT PANEL: PYRAMID OF ENERGY -->
  <text x="158" y="26" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">A. Pyramid of Energy (kJ m⁻² yr⁻¹)</text>
  <!-- Stepped bars (log/exaggerated visual clarity with exact values labelled) -->
  <!-- Tertiary consumers -->
  <rect x="122" y="54" width="32" height="30" rx="3" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="138" y="73" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#991b1b">10</text>
  <text x="114" y="72" font-family="sans-serif" font-size="8.5" text-anchor="end" fill="#475569">Tertiary (T4)</text>
  <!-- Secondary consumers -->
  <rect x="100" y="90" width="76" height="32" rx="3" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
  <text x="138" y="110" font-family="sans-serif" font-size="9.5" font-weight="700" text-anchor="middle" fill="#9a3412">100</text>
  <text x="93" y="109" font-family="sans-serif" font-size="8.5" text-anchor="end" fill="#475569">Secondary (T3)</text>
  <!-- Primary consumers -->
  <rect x="70" y="128" width="136" height="34" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="138" y="149" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#854d0e">1,000 (Primary, T2)</text>
  <!-- Producers -->
  <rect x="24" y="168" width="228" height="38" rx="3" fill="#bbf7d0" stroke="#15803d" stroke-width="1.8"/>
  <text x="138" y="191" font-family="sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#14532d">10,000 (Producers, T1)</text>
  <!-- Sunlight arrow -->
  <line x1="138" y1="234" x2="138" y2="212" stroke="#d97706" stroke-width="2.5"/>
  <polygon points="138,207 133,215 143,215" fill="#d97706"/>
  <text x="138" y="248" font-family="sans-serif" font-size="9.5" font-weight="700" text-anchor="middle" fill="#b45309">Sunlight energy input (~10% transferred/level)</text>
  <!-- Heat loss arrows -->
  <line x1="158" y1="69" x2="262" y2="69" stroke="#ef4444" stroke-width="1.6"/>
  <polygon points="268,69 260,65 260,73" fill="#ef4444"/>
  <line x1="180" y1="106" x2="262" y2="106" stroke="#ef4444" stroke-width="1.6"/>
  <polygon points="268,106 260,102 260,110" fill="#ef4444"/>
  <line x1="210" y1="145" x2="262" y2="145" stroke="#ef4444" stroke-width="1.6"/>
  <polygon points="268,145 260,141 260,149" fill="#ef4444"/>
  <line x1="256" y1="187" x2="274" y2="187" stroke="#ef4444" stroke-width="1.6"/>
  <polygon points="280,187 272,183 272,191" fill="#ef4444"/>
  <text x="292" y="122" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#dc2626" transform="rotate(90 292 122)">Respiratory heat loss (~90%)</text>

  <!-- RIGHT PANEL: KEELING CURVE -->
  <text x="478" y="26" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">B. Keeling Curve (Mauna Loa CO₂)</text>
  <!-- Axes -->
  <line x1="364" y1="226" x2="616" y2="226" stroke="#334155" stroke-width="1.8"/>
  <line x1="364" y1="226" x2="364" y2="48" stroke="#334155" stroke-width="1.8"/>
  <text x="490" y="252" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#334155">Year (1960 → 2025)</text>
  <text x="336" y="138" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#334155" transform="rotate(-90 336 138)">Atmospheric CO₂ / ppm</text>
  <!-- Y ticks -->
  <text x="358" y="216" font-family="sans-serif" font-size="8.5" text-anchor="end" fill="#475569">315</text>
  <text x="358" y="142" font-family="sans-serif" font-size="8.5" text-anchor="end" fill="#475569">370</text>
  <text x="358" y="68" font-family="sans-serif" font-size="8.5" text-anchor="end" fill="#475569">425</text>
  <!-- X ticks -->
  <text x="372" y="238" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#475569">1960</text>
  <text x="448" y="238" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#475569">1980</text>
  <text x="526" y="238" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#475569">2000</text>
  <text x="606" y="238" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#475569">2025</text>
  <!-- Rising baseline trend -->
  <path d="M368 212 Q478 168 608 66" fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4 3"/>
  <!-- Sawtooth seasonal oscillation on rising trend -->
  <polyline points="368,215 376,205 384,213 392,201 400,208 408,196 416,202 424,189 432,195 440,180 448,187 456,171 464,178 472,162 480,169 488,151 496,158 504,139 512,147 520,127 528,135 536,115 544,123 552,102 560,111 568,89 576,98 584,76 592,86 600,63 608,73" fill="none" stroke="#dc2626" stroke-width="2"/>
  <!-- Inset callout box explaining annual sawtooth -->
  <rect x="376" y="54" width="152" height="58" rx="7" fill="#ffffff" stroke="#0284c7" stroke-width="1.3"/>
  <text x="452" y="69" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#075985">Annual Sawtooth (~6 ppm)</text>
  <text x="452" y="83" font-family="sans-serif" font-size="8.4" text-anchor="middle" fill="#15803d">May–Sep: N. summer uptake ↓</text>
  <text x="452" y="96" font-family="sans-serif" font-size="8.4" text-anchor="middle" fill="#b91c1c">Oct–Apr: N. winter respiration ↑</text>
  <text x="452" y="107" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#475569">Upward trend = fossil fuels</text>
</svg>`,
      diagramCaption:
        "Left: Upright stepped pyramid of energy showing ~90% loss per trophic level (mainly respiratory heat). Right: The Keeling curve combines an annual Northern Hemisphere photosynthesis/respiration sawtooth with a steep anthropogenic upward trend.",
      workedExamples: [
        {
          title: "Primary Productivity (NPP = GPP − R) & Trophic Transfer Efficiency",
          problem:
            "In a temperate meadow, grasses have a gross primary productivity (GPP) of 24,000 kJ m⁻² yr⁻¹ and lose 14,400 kJ m⁻² yr⁻¹ through plant cellular respiration. Primary consumers (voles and grasshoppers) accumulate 1,152 kJ m⁻² yr⁻¹ as net secondary productivity. (a) Calculate the meadow's NPP. (b) Calculate the percentage energy transfer efficiency from producers (NPP) to primary consumers.",
          steps: [
            "Apply {{NPP = GPP - R}}: {{NPP = 24000 - 14400 = 9600}} kJ m⁻² yr⁻¹.",
            "Apply trophic transfer efficiency: {{ (1152 / 9600) * 100 = 0.12 * 100 = 12 }}%.",
            "Check reasonableness: 12% lies cleanly within the typical 5–20% ecological range, with 88% lost via consumer respiration, uneaten plant tissues, and faeces.",
          ],
          answer: "NPP = 9,600 kJ m⁻² yr⁻¹; trophic transfer efficiency = 12%",
          yourTurn: {
            question:
              "A coral-reef algal community has an NPP of 8,500 kJ m⁻² yr⁻¹. Herbivorous reef fish convert 1,020 kJ m⁻² yr⁻¹ into new fish biomass. Calculate the percentage trophic energy-transfer efficiency.",
            answer: { type: "number", value: 12, tolerance: 0.1, display: "12%" },
            solution:
              "{{ (1020 / 8500) * 100 = 0.12 * 100 = 12 }}%.",
          },
        },
        {
          title: "Carbon Sink vs Carbon Source Budget Analysis",
          problem:
            "A boreal spruce forest absorbs 8.4 t C ha⁻¹ yr⁻¹ via photosynthesis. Autotrophic respiration releases 4.6 t C ha⁻¹ yr⁻¹ and soil saprotroph respiration releases 3.1 t C ha⁻¹ yr⁻¹. (a) Determine whether this forest is currently a net carbon sink or carbon source and calculate the net flux. (b) What happens if warming thaws underlying permafrost and doubles soil microbial respiration?",
          steps: [
            "Total respiratory carbon output: {{4.6 + 3.1 = 7.7}} t C ha⁻¹ yr⁻¹.",
            "Net carbon uptake = Photosynthesis − Total respiration = {{8.4 - 7.7 = +0.7}} t C ha⁻¹ yr⁻¹.",
            "Because uptake exceeds release, the forest is currently a **net carbon sink** sequestering 0.7 t C ha⁻¹ yr⁻¹.",
            "If soil microbial respiration doubles to {{6.2}} t C ha⁻¹ yr⁻¹, total output becomes {{4.6 + 6.2 = 10.8}} t C ha⁻¹ yr⁻¹ > 8.4 → net flux is −2.4 t C ha⁻¹ yr⁻¹, flipping the forest into a **net carbon source** (a positive climate feedback).",
          ],
          answer: "Net carbon sink (+0.7 t C ha⁻¹ yr⁻¹); doubling soil respiration flips it to a net carbon source (−2.4 t C ha⁻¹ yr⁻¹).",
        },
      ],
      keyPoints: [
        "Ecosystems are **open systems for energy** (one-way flow, dissipated as heat) and **closed systems for matter** (nutrients recycled by saprotrophs).",
        "Pyramids of energy use units **kJ m⁻² yr⁻¹**, are drawn as proportional stepped horizontal bars, and can never be inverted.",
        "{{NPP = GPP - R}}; only NPP is available as chemical energy for primary consumers.",
        "Only ~10% of energy transfers between trophic levels due to respiratory heat loss, uneaten material, and egested/excreted waste.",
        "Peat forms in waterlogged, acidic, anaerobic conditions that inhibit saprotrophic decomposers, locking away organic carbon as a major sink.",
        "The Keeling curve shows both an annual Northern Hemisphere seasonal sawtooth and a steep multi-decade rise from fossil fuel combustion.",
      ],
      whyItWorks:
        "The Second Law of Thermodynamics guarantees that every metabolic energy transformation (photosynthesis, cellular respiration, biosynthesis) converts part of the chemical energy into unusable heat—preventing energy recycling and capping food chains. By contrast, carbon atoms are never destroyed; they merely change oxidation states and chemical reservoirs between CO₂, biomass, bicarbonate, and rock.",
      strategies: [
        "Always check units on energy pyramids and productivity questions: IB strictly expects **kJ m⁻² yr⁻¹** (energy per area per time), not plain kJ.",
        "When explaining the Keeling curve's annual zig-zag, specify **Northern Hemisphere** summer photosynthesis vs winter respiration—do NOT say Earth's distance from the Sun!",
        "Remember: food-web arrows point **from prey to predator** (direction of energy flow), never from predator to prey.",
      ],
      thinkDeeper:
        "Can a pyramid of **biomass** ever be inverted even though a pyramid of **energy** cannot? Yes! In open-ocean pelagic ecosystems, microscopic phytoplankton reproduce and get grazed so rapidly that their *instantaneous standing biomass* (g m⁻²) is smaller than the zooplankton feeding on them—yet integrated over a full year (`yr⁻¹`), phytoplankton energy production (kJ m⁻² yr⁻¹) is still vastly larger.",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Sequence of neurons and structures in a spinal pain-withdrawal reflex arc",
        back: "Pain receptor → sensory neuron (dorsal root ganglion) → relay (inter)neuron in spinal grey matter → motor neuron (ventral root) → effector muscle.",
        level: "SL",
      },
      {
        front: "How does the medulla oblongata detect intense exercise and speed up heart & ventilation rates?",
        back: "Higher blood CO₂ forms carbonic acid (H⁺), lowering blood pH; chemoreceptors signal the medulla → sympathetic cardiac accelerator nerve speeds the SA node and motor nerves increase diaphragm/intercostal contraction rate.",
        level: "SL",
      },
      {
        front: "Role of melatonin and the gland that secretes it",
        back: "Secreted by the pineal gland in darkness (inhibited by blue light via the SCN); regulates circadian sleep–wake cycles.",
        level: "SL",
      },
      {
        front: "[HL] How do PIN3 efflux pumps and H⁺ pumps cause shoot phototropism?",
        back: "Unilateral light relocalizes PIN3 carriers to pump auxin (IAA) laterally to the shaded side; IAA activates plasma-membrane H⁺-ATPase pumps, acidifying walls so expansins loosen cellulose microfibrils and turgor elongates shaded cells.",
        level: "HL",
      },
      {
        front: "[HL] Why is ethylene-driven fruit ripening an example of positive feedback?",
        back: "Ethylene triggers ripening enzymes AND stimulates even more ethylene production, rapidly amplifying and synchronizing ripening across fruits.",
        level: "HL",
      },
      {
        front: "Exact enzyme cascade of blood clotting",
        back: "Damaged vessel → platelets release clotting factors (+ Ca²⁺) → prothrombin converted to active thrombin → thrombin converts soluble fibrinogen into insoluble fibrin mesh trapping RBCs.",
        level: "SL",
      },
      {
        front: "Difference between plasma cells and memory B-cells in adaptive immunity",
        back: "Plasma cells rapidly secrete large quantities of specific antibodies during active infection; memory B-cells persist long-term to mount a faster, stronger secondary response upon re-exposure.",
        level: "SL",
      },
      {
        front: "Three ways the secondary antibody response differs from the primary response",
        back: "1. Much shorter lag phase (1–2 days vs 5–10 days). 2. Far higher peak antibody concentration. 3. Prolonged persistence of antibodies in plasma.",
        level: "SL",
      },
      {
        front: "Why do antibiotics fail against viral diseases like influenza or HIV?",
        back: "Antibiotics target prokaryotic structures/processes (peptidoglycan cell walls, 70S ribosomes); viruses are acellular, lack walls/ribosomes, and use host eukaryotic machinery.",
        level: "SL",
      },
      {
        front: "How does HIV progress to AIDS?",
        back: "HIV infects and destroys CD4⁺ helper T-lymphocytes; depleted T_H cells cannot secrete cytokines to activate B-cells and cytotoxic T-cells, causing severe opportunistic infections.",
        level: "SL",
      },
      {
        front: "Lincoln capture–mark–recapture index formula and what each symbol represents",
        back: "{{N = (M * n) / m}}, where M = initially captured and marked, n = total caught in second sample, m = marked individuals recaptured in second sample.",
        level: "SL",
      },
      {
        front: "Three phases of a sigmoid population growth curve",
        back: "Exponential (rapid growth, b+i ≫ d+e) → Transitional (growth slows as density-dependent factors intensify) → Plateau (oscillates around carrying capacity K, b+i ≈ d+e).",
        level: "SL",
      },
      {
        front: "Three mandatory IB examples of mutualism (+/+)",
        back: "1. Legume root nodules + Rhizobium bacteria (N₂ fixation). 2. Mycorrhizal fungi + orchids/trees (phosphate/water ↔ sugars). 3. Reef corals + zooxanthellae algae (photosynthates ↔ shelter/CO₂).",
        level: "SL",
      },
      {
        front: "Decision rule for a 2 × 2 chi-squared test of species association at p = 0.05",
        back: "df = (2−1)(2−1) = 1; critical value = 3.841. If χ² > 3.841, reject H₀ (significant association); check if O > E (positive) or O < E (negative) for 'both present'.",
        level: "SL",
      },
      {
        front: "Difference between Gross Primary Productivity (GPP) and Net Primary Productivity (NPP)",
        back: "GPP is total chemical energy fixed by photosynthesis; NPP = GPP − R is remaining producer biomass energy after plant respiration, available to primary consumers.",
        level: "SL",
      },
      {
        front: "Why does the Keeling curve show a yearly sawtooth oscillation?",
        back: "Northern Hemisphere forests draw down CO₂ via peak photosynthesis in May–September (summer dip) and release CO₂ via respiration and decay in October–April (winter rise).",
        level: "SL",
      },
    ],
    mustKnow: [
      "Spinal reflex arcs bypass the brain for speed: receptor → sensory neuron (dorsal root) → relay neuron (grey matter) → motor neuron (ventral root) → effector.",
      "Blood CO₂ drop in pH—not low O₂—is the main chemoreceptor trigger instructing the medulla oblongata to raise heart rate and ventilation rate.",
      "Blood clotting converts soluble fibrinogen to insoluble fibrin via thrombin, triggered by clotting factors from platelets.",
      "Adaptive immunity depends on antigen presentation by macrophages to helper T-cells, whose cytokines activate B-cell clonal expansion into plasma cells and memory cells.",
      "Antibiotic resistance evolves by natural selection of pre-existing randomly mutated bacteria under antibiotic selective pressure—never by bacteria 'deciding' to adapt.",
      "Random quadrats sample sessile organisms; the Lincoln index {{N = (M * n) / m}} samples motile animals and overestimates N if marks are lost or animals immigrate.",
      "For a 2 × 2 chi-squared association test, {{df = 1}} and critical value = 3.841 at {{p = 0.05}}; always distinguish positive (O > E) vs negative (O < E) association.",
      "Energy flows one way through open ecosystems (~10% transferred per trophic level; ~90% lost mainly as respiratory heat), whereas carbon cycles within closed matter loops.",
      "Pyramids of energy always have units kJ m⁻² yr⁻¹, stepped horizontal bars, and an upright shape.",
      "Anaerobic, acidic, waterlogged conditions inhibit saprotrophic decomposers, allowing undecayed organic carbon to accumulate as peat (a major carbon sink).",
    ],
    misconceptions: [
      {
        wrong: "We breathe faster during exercise primarily because blood oxygen levels plummet.",
        right: "Chemoreceptors respond primarily to rising blood CO₂ (which lowers blood pH via carbonic acid formation), triggering the medulla to increase ventilation and heart rate well before O₂ drops dangerously.",
        level: "SL",
      },
      {
        wrong: "Auxin moves to the sunlit side of a stem to make it bend toward the light.",
        right: "Auxin (IAA) accumulates on the **shaded** side of a shoot, stimulating faster cell elongation on the shaded flank so the shoot curves *toward* the light source.",
        level: "SL",
      },
      {
        wrong: "Antibiotics cause bacteria to mutate and become resistant, and can help fight off stubborn viral colds.",
        right: "Antibiotic resistance mutations arise randomly *before* drug exposure; antibiotics merely select for resistant survivors. Antibiotics have zero effect on viruses, which lack prokaryotic cell walls and 70S ribosomes.",
        level: "SL",
      },
      {
        wrong: "Vaccines contain antibodies that stay in your blood forever to kill pathogens.",
        right: "Standard vaccines contain harmless **antigens** (or mRNA encoding them) that stimulate your own lymphocytes to produce **memory B- and T-cells** (active immunity), not pre-made antibodies.",
        level: "SL",
      },
      {
        wrong: "If marks wash off half the animals in a capture–mark–recapture study, the Lincoln index will underestimate population size.",
        right: "Lost marks decrease {{m}} (the denominator in {{N = (M * n) / m}}), which makes the calculated estimate **larger**—an **overestimate** of the true population.",
        level: "SL",
      },
      {
        wrong: "A significant χ² test between two plant species proves they have a mutualistic relationship.",
        right: "A significant positive χ² association only shows the species co-occur more often than chance; it could reflect shared abiotic preferences (e.g., wet acidic soil) rather than direct mutualism.",
        level: "SL",
      },
      {
        wrong: "Energy is recycled by decomposers back to producers in an ecosystem.",
        right: "**Matter** (carbon, nitrogen, minerals) is recycled by saprotrophic decomposers, whereas **energy** flows one way and is ultimately lost as unusable heat.",
        level: "SL",
      },
    ],
    examMistakes: [
      "Writing 'fibrinogen turns into fibrin' without naming **thrombin** as the enzyme or stating that fibrinogen is **soluble** and fibrin is **insoluble**.",
      "Confusing **antigen** (foreign marker on pathogen) with **antibody** (immunoglobulin secreted by plasma cells) in Paper 2 immunity essays.",
      "Drawing food-web arrows from predator to prey instead of from organism eaten → consumer (direction of energy flow).",
      "Omitting area and time from pyramid-of-energy units—writing 'kJ' instead of **kJ m⁻² yr⁻¹** loses the unit mark every time.",
      "Drawing a pyramid of energy as a smooth triangle instead of stepped horizontal bars with widths proportional to values.",
      "Calculating {{df}} in a 2 × 2 chi-squared table as 4 − 1 = 3 instead of {{(2 - 1)(2 - 1) = 1}}.",
      "Forgetting to state both the comparison ({{χ^2 > 3.841}}) AND the statistical decision (reject {{H_0}}) AND whether the association is positive or negative.",
      "Explaining the Keeling curve's annual oscillation using 'summer heating' or 'Earth's orbit' instead of Northern Hemisphere seasonal photosynthesis vs respiration.",
    ],
    mnemonics: [
      {
        topic: "Blood Clotting Cascade",
        device: "Please Call Professor To Fix Fractures",
        explanation: "**P**latelets → **C**lotting factors → **P**rothrombin → **T**hrombin → **F**ibrinogen → **F**ibrin.",
        level: "SL",
      },
      {
        topic: "Spinal Reflex Arc Direction",
        device: "Dorsal = In (Sensory), Ventral = Out (Motor) — SAME DAVE",
        explanation: "**S**ensory **A**fferent, **M**otor **E**fferent; **D**orsal **A**fferent, **V**entral **E**fferent.",
        level: "SL",
      },
      {
        topic: "Secondary Immune Response Marks",
        device: "F-H-L (Faster, Higher, Longer)",
        explanation: "Compared with primary immunity, the secondary antibody response has a **F**aster onset (shorter lag), **H**igher peak titre, and **L**onger persistence.",
        level: "SL",
      },
      {
        topic: "Sigmoid Growth Phases",
        device: "E-T-P (Exponential → Transitional → Plateau)",
        explanation: "Exponential (unrestricted), Transitional (limiting factors slow growth), Plateau (oscillates around carrying capacity K).",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Measles Resurgence & Herd-Immunity Maths",
        detail: "Because measles has an R₀ of 12–18, herd immunity demands ~93–95% vaccination coverage. Communities where MMR uptake drops even to 85% quickly experience explosive school outbreaks despite most children still being vaccinated.",
        emoji: "💉",
      },
      {
        title: "Banana Ripening Rooms & Ethylene Control",
        detail: "Supermarket distributors ship bananas green under chilled, ethylene-scrubbed air, then inject tiny bursts of ethylene gas in ripening rooms so positive feedback turns thousands of crates yellow simultaneously right before store delivery.",
        emoji: "🍌",
      },
      {
        title: "Sea Otters, Urchins & Kelp Forests (Top-Down Cascade)",
        detail: "Along the Pacific Northwest coast, hunting sea otters removed top-down predation on sea urchins; urchin populations exploded and grazed lush underwater kelp forests down to barren rock—demonstrating trophic cascades in action.",
        emoji: "🦦",
      },
      {
        title: "Mauna Loa Observatory & Global Carbon Tracking",
        detail: "High atop a Hawaiian volcano far from local smokestacks, Charles Keeling's CO₂ analyzer has logged Earth's breathing seasons and steady fossil-fuel rise from 315 ppm (1958) past 420 ppm—the single most famous time series in climate biology.",
        emoji: "🌋",
      },
      {
        title: "Singapore's Dengue Wolbachia Project & Ecological Control",
        detail: "Rather than relying solely on chemical insecticides, Singapore's NEA releases male *Aedes aegypti* mosquitoes carrying *Wolbachia* bacteria whose matings produce non-viable eggs—applying population-ecology dynamics to curb viral transmission.",
        emoji: "🦟",
      },
    ],
    videos: [
      {
        title: "IB Biology C3.1 Integration of Body Systems & Plant Tropisms",
        channel: "Cheryl Hickman / Sirius Revision (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Biology+C3.1+integration+of+body+systems+auxin+phototropism",
      },
      {
        title: "IB Biology C3.2 Defense Against Disease — Clotting, Clonal Selection & AMR",
        channel: "Bioninja / Alex Lee (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Biology+C3.2+defense+against+disease+adaptive+immunity+clotting",
      },
      {
        title: "IB Biology C4.1 Lincoln Index, Quadrat Sampling & Chi-Squared Association",
        channel: "OSC / Sirius Revision (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Biology+C4.1+Lincoln+index+chi+squared+association+populations",
      },
      {
        title: "IB Biology C4.2 Energy Pyramids, Productivity & the Carbon Cycle",
        channel: "Bozeman Science / IB Biology (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Biology+C4.2+transfers+of+energy+and+matter+Keeling+curve",
      },
    ],
    formulas: [
      {
        name: "Lincoln Capture–Mark–Recapture Index",
        formula: "{{N = (M * n) / m}}",
        note: "M = marked in 1st sample, n = total in 2nd sample, m = marked recaptured in 2nd sample.",
        level: "SL",
      },
      {
        name: "Quadrat Population Estimate",
        formula: "{{N = " + '"mean count"' + " * (" + '"total habitat area"' + " / " + '"quadrat area"' + ")}}",
        note: "Use random coordinates for sessile organisms; keep both areas in the same units (e.g., m²).",
        level: "SL",
      },
      {
        name: "Chi-Squared Expected Frequency",
        formula: "{{E = (" + '"row total"' + " * " + '"column total"' + ") / " + '"grand total"' + "}}",
        note: "Computed for each cell of a contingency table assuming species independence (H₀).",
        level: "SL",
      },
      {
        name: "Chi-Squared Test Statistic",
        formula: "{{χ^2 = Σ((O - E)^2 / E)}}",
        note: "Sum across all cells; reject H₀ if χ² exceeds the critical value at p = 0.05.",
        level: "SL",
      },
      {
        name: "Contingency Table Degrees of Freedom",
        formula: "{{df = (r - 1)(c - 1)}}",
        note: "For a 2 × 2 presence/absence table, df = 1 and critical value = 3.841 (p = 0.05).",
        level: "SL",
      },
      {
        name: "Trophic Energy-Transfer Efficiency",
        formula: "{{ " + '"Efficiency (%)"' + " = (" + '"Energy at trophic level n"' + " / " + '"Energy at level n-1"' + ") * 100}}",
        note: "Typically ~10% (range 5–20%); both energy fluxes must share identical units (kJ m⁻² yr⁻¹).",
        level: "SL",
      },
      {
        name: "Net Primary Productivity (NPP)",
        formula: "{{NPP = GPP - R}}",
        note: "GPP = gross primary productivity; R = autotrophic cellular respiration (kJ m⁻² yr⁻¹).",
        level: "SL",
      },
      {
        name: "Herd-Immunity Threshold",
        formula: "{{p_c = 1 - 1/R_0}}",
        note: "Minimum immune fraction required to halt epidemic spread; multiply by 100 for percentage.",
        level: "SL",
      },
      {
        name: "Cardiac Output",
        formula: "{{CO = HR * SV}}",
        note: "Heart rate (beats min⁻¹) × stroke volume (cm³); divide by 1000 for dm³ min⁻¹.",
        level: "SL",
      },
      {
        name: "Population Growth Balance",
        formula: "{{ΔN = (b + i) - (d + e)}}",
        note: "b = natality, i = immigration, d = mortality, e = emigration; at plateau (K), ΔN ≈ 0.",
        level: "SL",
      },
    ],
  },
};
