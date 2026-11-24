import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "b3-b4-form-organisms-ecosystems",
  title: "Theme B (3–4): Form & Function — Organisms & Ecosystems",
  strand: "Theme B: Form & Function",
  icon: "🫀",
  level: "SL",
  summary:
    "How multicellular organisms engineer rapid gas exchange, vascular transport, and sarcomere-driven movement—and how abiotic limits, biomes, and ecological niches shape species across ecosystems.",
  intro:
    "Once an organism grows larger than a few millimetres, simple diffusion from its outer surface fails because its surface-area-to-volume ratio plummets. Evolution solved that physics bottleneck twice in parallel: animals built ventilated alveoli, muscular four-chambered pumps, cooperative haemoglobin, and sliding-filament sarcomeres, while vascular plants built stomatal air spaces, tension-pulled xylem columns, and pressure-driven phloem tubes. Zooming out to the biosphere, the very same **form–function principle** governs which species survive extreme deserts, mangroves, and coral reefs, and how competition carves a broad fundamental niche into a sharper realized niche.",
  guide: [
    // =========================================================================
    // SECTION 1 — B3.1 Gas Exchange, Ventilation, Stomata & Bohr Shift
    // =========================================================================
    {
      id: "gas-exchange-haemoglobin",
      heading: "B3.1 Gas Exchange, Ventilation, Stomata & Bohr Shift",
      level: "SL",
      discovery: {
        problem:
          "At rest, a human adult needs roughly {{250 cm^3}} of oxygen every minute—yet dissolved {{O_2}} in pure water at 37 °C is only about {{3 cm^3}} per {{dm^3}} of plasma. Meanwhile, a leaf must pull {{CO_2}} out of air that is just 0.04% {{CO_2}} without drying to a crisp. Before reading on, think: what **three physical variables** must both lungs and leaves maximize or minimize to keep diffusion fast, and why would plasma alone force your heart to pump over {{80 dm^3}} of blood every minute?",
        idea:
          "Diffusion rate scales with surface area and concentration gradient, and inversely with membrane thickness (Fick's principle). Both alveoli (~70 m² packed into your chest, walls ~0.5 μm thick) and spongy leaf mesophyll maximize surface area and moist thin barriers while constantly renewing the concentration gradient. And because plasma carries barely {{3 cm^3}} {{O_2}} per {{dm^3}}, red blood cells pack ~270 million haemoglobin molecules per cell, multiplying blood's {{O_2}} capacity ~65-fold—and using cooperative binding plus the **Bohr shift** [HL] to unload extra oxygen exactly where tissues respire hardest.",
      },
      body: `Every gas-exchange organ—whether mammalian alveoli, fish lamellae, or the spongy mesophyll of a leaf—obeys the same diffusion physics (**Fick's principles**):

- **Large surface area** packed into a compact volume (hundreds of millions of spherical alveoli; loose air spaces around spongy mesophyll cells).
- **Thin diffusion barrier** (single-cell-thick **type I pneumocytes** fused with capillary endothelium give a ~0.5 μm path; thin cell walls in mesophyll).
- **Moist surface** so gases dissolve before diffusing across phospholipid bilayers (**type II pneumocytes** secrete amphipathic **pulmonary surfactant** into this water film to break hydrogen bonds, lower surface tension, and prevent alveoli from collapsing during exhalation).
- **Steep concentration gradient** continuously maintained by **ventilation** (renewing alveolar air) and **dense capillary networks** (sweeping oxygenated blood away and delivering {{CO_2}}-rich venous blood).

### Antagonistic Mechanics of Human Ventilation
Lungs contain no skeletal muscle of their own; air moves purely down pressure gradients created by changing thoracic volume (**Boyle's law**: volume ↑ ⇒ pressure ↓):

| Phase | Diaphragm | External intercostals | Internal intercostals & abdominals | Ribcage movement | Thoracic volume & alveolar pressure |
|---|---|---|---|---|---|
| **Inspiration (inhalation)** | Contracts & flattens downward | Contract | Relax | Moves **up and out** | Volume ↑ ⇒ Pressure drops below atmospheric ⇒ Air flows **in** |
| **Quiet expiration** | Relaxes & domes upward | Relax | Relax (passive elastic recoil) | Moves **down and in** | Volume ↓ ⇒ Pressure rises above atmospheric ⇒ Air flows **out** |
| **Forced expiration** | Relaxes upward (pushed by viscera) | Relax | **Contract** actively | Pulled sharply **down and in** | Volume ↓ sharply ⇒ High positive pressure forces reserve air **out** |

A **spirometer** records lung volumes over time:
- **Tidal volume ({{V_T}})**: volume of air inhaled or exhaled in one normal resting breath (~{{0.5 dm^3}}).
- **Ventilation rate (minute ventilation)**: total air moved per minute, {{V_E = V_T * f}}, where {{f}} is breathing frequency in {{breaths min^(-1)}}.
- **Vital capacity (VC)**: maximum air forcibly exhaled after a maximum inhalation, {{VC = V_T + IRV + ERV}} (typically {{3.5}}–{{5.0 dm^3}}).
- **Residual volume (RV)**: air that always remains trapped in alveoli (~{{1.2 dm^3}}) so lungs never fully collapse; cannot be measured directly by a simple spirometer.

### Gas Exchange & Transpiration in Leaves
Leaves balance **{{CO_2}} uptake** for photosynthesis against inevitable **transpiration** (evaporation of water vapour from moist spongy mesophyll walls through **stomata**):
- The upper **waxy cuticle** waterproofs the leaf; tightly packed **palisade mesophyll** maximizes light capture; loose **spongy mesophyll** provides huge internal air-space surface area.
- **Guard cells** flank each stoma and have **unevenly thickened inner cellulose walls** plus radially oriented cellulose microfibrils. In daylight, proton pumps drive {{K^+}} ion uptake, lowering water potential so water enters by osmosis; the turgid guard cells bow outward and **open the stoma**. Under drought stress, **abscisic acid (ABA)** triggers {{K^+}} efflux, guard cells become flaccid, and the stoma closes.

### [HL] Cooperative Haemoglobin, Fetal Hb & the Bohr Shift
Adult haemoglobin (**HbA**, α₂β₂) is a quaternary tetramer with **four polypeptide subunits**, each holding a **haem group** with a central Fe²⁺ ion that binds one O₂ molecule reversibly.
- **Cooperative binding**: Binding the first O₂ induces a conformational change across the tetramer that makes the second and third O₂ molecules bind much more easily, producing a **sigmoidal (S-shaped)** oxygen dissociation curve. At alveolar pO₂ (~13 kPa) Hb is ~97% saturated; over the steep mid-section (2–6 kPa in active tissues), a small drop in pO₂ unloads a massive fraction of carried O₂.
- **Bohr shift**: Actively respiring tissues release CO₂, which enters erythrocytes where **carbonic anhydrase** catalyses {{CO_2 + H_2O -> H_2CO_3 -> H^+ + HCO_3^-}}. Excess H⁺ binds to histidine side chains on haemoglobin, stabilizing the low-affinity (tense) conformation and shifting the dissociation curve **to the right** (higher P₅₀, lower O₂ affinity). At the same tissue pO₂, blood unloads substantially **more O₂** precisely where metabolism is fastest.
- **Fetal haemoglobin (HbF, α₂γ₂)** shifts **to the left** of adult HbA: its higher O₂ affinity allows fetal blood to pull O₂ across the placenta from maternal blood at low placental pO₂ (~3–4 kPa).
- **Myoglobin** (monomeric protein in skeletal muscle, 1 haem group) has a **hyperbolic** curve far to the left: it acts as an emergency intracellular {{O_2}} store, releasing {{O_2}} only when muscle {{pO_2}} plummets during intense exercise.`,
      diagram: `<svg viewBox="0 0 720 295" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spirometer lung volume trace on the left and oxygen dissociation curves showing myoglobin, fetal haemoglobin, adult haemoglobin and the Bohr shift on the right">
  <rect x="0" y="0" width="720" height="295" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <!-- Left Panel: Spirometer Trace -->
  <text x="175" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Spirometer Lung Volume Trace (SL)</text>
  <line x1="52" y1="245" x2="328" y2="245" stroke="var(--ink-2)" stroke-width="1.5"/>
  <line x1="52" y1="44" x2="52" y2="245" stroke="var(--ink-2)" stroke-width="1.5"/>
  <text x="190" y="274" text-anchor="middle" font-size="11" fill="var(--ink-2)">Time (s)</text>
  <text x="18" y="148" text-anchor="middle" font-size="11" fill="var(--ink-2)" transform="rotate(-90 18 148)">Lung Volume (dm³)</text>
  <!-- Residual volume shaded band -->
  <rect x="53" y="208" width="274" height="36" fill="var(--surface-2)"/>
  <text x="190" y="230" text-anchor="middle" font-size="10" font-weight="600" fill="var(--ink-2)">Residual Volume (RV ≈ 1.2 dm³)</text>
  <!-- Y ticks -->
  <text x="46" y="62" text-anchor="end" font-size="10" fill="var(--ink-2)">6.0</text>
  <text x="46" y="138" text-anchor="end" font-size="10" fill="var(--ink-2)">3.0</text>
  <text x="46" y="212" text-anchor="end" font-size="10" fill="var(--ink-2)">1.2</text>
  <!-- Spirometer waveform -->
  <path d="M58 156 Q72 132 86 156 Q100 180 114 156 Q128 132 142 156 Q156 180 170 144 Q188 54 202 58 Q218 62 234 206 Q244 210 256 156 Q270 132 284 156 Q298 180 314 156" fill="none" stroke="#16a34a" stroke-width="2.6" stroke-linecap="round"/>
  <!-- Tidal volume bracket -->
  <line x1="114" y1="142" x2="114" y2="170" stroke="#0284c7" stroke-width="1.6"/>
  <line x1="109" y1="142" x2="119" y2="142" stroke="#0284c7" stroke-width="1.6"/>
  <line x1="109" y1="170" x2="119" y2="170" stroke="#0284c7" stroke-width="1.6"/>
  <text x="86" y="128" text-anchor="middle" font-size="10" font-weight="700" fill="#0284c7">Tidal Vol (V_T)</text>
  <!-- Vital Capacity bracket -->
  <line x1="252" y1="58" x2="252" y2="206" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="3,2"/>
  <line x1="246" y1="58" x2="258" y2="58" stroke="#ea580c" stroke-width="1.8"/>
  <line x1="246" y1="206" x2="258" y2="206" stroke="#ea580c" stroke-width="1.8"/>
  <text x="292" y="102" text-anchor="middle" font-size="10" font-weight="700" fill="#ea580c">Vital Capacity</text>
  <text x="292" y="114" text-anchor="middle" font-size="9.5" fill="#ea580c">(IRV+V_T+ERV)</text>
  <!-- Divider -->
  <line x1="354" y1="18" x2="354" y2="278" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4,4"/>
  <!-- Right Panel: Oxygen Dissociation Curves -->
  <text x="542" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Oxygen Dissociation &amp; Bohr Shift [HL]</text>
  <line x1="408" y1="245" x2="692" y2="245" stroke="var(--ink-2)" stroke-width="1.5"/>
  <line x1="408" y1="46" x2="408" y2="245" stroke="var(--ink-2)" stroke-width="1.5"/>
  <text x="550" y="274" text-anchor="middle" font-size="11" fill="var(--ink-2)">Partial pressure of O₂ (kPa)</text>
  <text x="373" y="148" text-anchor="middle" font-size="11" fill="var(--ink-2)" transform="rotate(-90 373 148)">% O₂ Saturation</text>
  <!-- Grid & axis labels -->
  <line x1="408" y1="145" x2="692" y2="145" stroke="var(--line)" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="402" y="54" text-anchor="end" font-size="9.5" fill="var(--ink-2)">100</text>
  <text x="402" y="149" text-anchor="end" font-size="9.5" fill="var(--ink-2)">50</text>
  <text x="402" y="248" text-anchor="end" font-size="9.5" fill="var(--ink-2)">0</text>
  <text x="408" y="259" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">0</text>
  <text x="488" y="259" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">4</text>
  <text x="568" y="259" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">8</text>
  <text x="648" y="259" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">12</text>
  <!-- Myoglobin (hyperbolic, far left) -->
  <path d="M408 245 Q414 78 446 60 Q510 51 686 50" fill="none" stroke="#7c3aed" stroke-width="2.2" stroke-dasharray="5,3"/>
  <!-- Fetal Hb (left-shifted sigmoidal) -->
  <path d="M408 245 C424 238, 434 150, 464 94 C490 60, 560 53, 686 52" fill="none" stroke="#0284c7" stroke-width="2.4"/>
  <!-- Adult Hb pH 7.4 (sigmoidal) -->
  <path d="M408 245 C436 242, 456 175, 492 108 C524 64, 588 55, 686 53" fill="none" stroke="#16a34a" stroke-width="2.6"/>
  <!-- Adult Hb Bohr right shift pH 7.2 / high CO2 -->
  <path d="M408 245 C450 244, 484 198, 526 128 C562 76, 616 60, 686 56" fill="none" stroke="#dc2626" stroke-width="2.6"/>
  <!-- Bohr shift arrow -->
  <line x1="484" y1="138" x2="522" y2="138" stroke="#dc2626" stroke-width="2"/>
  <polygon points="522,134 530,138 522,142" fill="#dc2626"/>
  <text x="572" y="136" font-size="10" font-weight="700" fill="#dc2626">Bohr shift</text>
  <text x="572" y="148" font-size="9.5" fill="#dc2626">(↑CO₂ / ↓pH)</text>
  <!-- Legend -->
  <text x="424" y="69" font-size="9.5" font-weight="700" fill="#7c3aed">Myoglobin</text>
  <text x="448" y="88" font-size="9.5" font-weight="700" fill="#0284c7">Fetal Hb</text>
  <text x="515" y="80" font-size="9.5" font-weight="700" fill="#16a34a">Adult Hb (pH 7.4)</text>
  <text x="536" y="176" font-size="9.5" font-weight="700" fill="#dc2626">Adult Hb (pH 7.2)</text>
</svg>`,
      diagramCaption:
        "Left: Spirometer trace distinguishing tidal volume (V_T), vital capacity (VC), and unmeasurable residual volume (RV). Right [HL]: Monomeric myoglobin (hyperbolic), fetal haemoglobin (left-shifted, higher affinity), adult HbA (sigmoidal), and the Bohr right-shift under elevated CO₂ / low pH.",
      workedExamples: [
        {
          title: "Spirometer Ventilation Rate & Vital Capacity Calculation",
          problem:
            "A resting spirometer trace shows 6 complete breaths in 30 seconds with a tidal volume of {{0.50 dm^3}}. During a subsequent maximal breath, the inspiratory reserve volume (IRV) is {{2.80 dm^3}} and the expiratory reserve volume (ERV) is {{1.10 dm^3}}. Calculate (a) the resting pulmonary ventilation rate in {{dm^3 min^(-1)}} and (b) the vital capacity in {{dm^3}}.",
          steps: [
            "Convert breathing frequency to breaths per minute: {{f = 6 * (60/30) = 12}} breaths min⁻¹.",
            "Multiply tidal volume by breathing frequency: {{V_E = V_T * f = 0.50 * 12 = 6.0 dm^3 min^(-1)}}.",
            "Sum the three movable lung volumes for vital capacity: {{VC = V_T + IRV + ERV = 0.50 + 2.80 + 1.10 = 4.40 dm^3}}.",
          ],
          answer: "Ventilation rate = {{6.0 dm^3 min^(-1)}}; Vital capacity = {{4.40 dm^3}}",
          yourTurn: {
            question:
              "A resting student takes 14 breaths per minute with a tidal volume of {{0.45 dm^3}}. Calculate their pulmonary ventilation rate in {{dm^3 min^(-1)}}.",
            answer: { type: "number", value: 6.3, tolerance: 0.05, display: "6.3 dm³ min⁻¹" },
            solution: "Ventilation rate = tidal volume × breathing rate = 0.45 × 14 = 6.3 dm³ min⁻¹.",
          },
        },
        {
          title: "[HL] Quantifying Extra O₂ Unloaded by the Bohr Shift",
          problem:
            "At the pulmonary capillaries ({{pO_2 = 13 kPa}}), adult haemoglobin is 98% saturated. In a resting tissue ({{pO_2 = 4.0 kPa}}, pH 7.4), saturation drops to 74%. During vigorous sprinting ({{pO_2 = 4.0 kPa}}, pH 7.2 due to high {{CO_2}}), the Bohr shift lowers saturation to 52%. Calculate the percentage-point increase in {{O_2}} unloaded from haemoglobin caused specifically by the Bohr shift.",
          steps: [
            "O₂ unloaded at pH 7.4 (resting): {{98% - 74% = 24%}} of total capacity.",
            "O₂ unloaded at pH 7.2 (sprinting, same {{pO_2}}): {{98% - 52% = 46%}} of total capacity.",
            "Extra O₂ unloaded due specifically to the Bohr shift: {{46% - 24% = 22}} percentage points (almost doubling oxygen delivery without even changing tissue {{pO_2}}!).",
          ],
          answer: "22 percentage points extra O₂ unloaded (from 24% to 46% unloaded)",
        },
      ],
      keyPoints: [
        "Gas-exchange surfaces maximize **surface area** and **concentration gradient** while minimizing **diffusion distance** and keeping membranes **moist**.",
        "**Type I pneumocytes** form the thin squamous epithelium for diffusion; **type II pneumocytes** secrete **surfactant** to reduce water surface tension and stop alveolar collapse.",
        "Antagonistic muscles drive ventilation: inspiration contracts the **diaphragm** and **external intercostals** (volume ↑, pressure ↓); forced expiration recruits **internal intercostals** and **abdominal muscles**.",
        "Stomata open when guard cells accumulate {{K^+}}, draw in water by osmosis, and bow outward because of unevenly thickened inner walls; **ABA** triggers closure during drought.",
        "[HL] Cooperative binding gives haemoglobin a **sigmoidal** curve; **fetal Hb** shifts **left** (higher affinity for placental uptake); high {{CO_2}} / low pH triggers a **rightward Bohr shift** (lower affinity, greater unloading in active tissues).",
      ],
      whyItWorks:
        "Why does haemoglobin need a **sigmoidal** curve instead of a linear or hyperbolic one like myoglobin? Because a steep middle slope between 2 kPa and 6 kPa acts like an automatic delivery valve: at 13 kPa in the lungs it saturates completely (~98%), yet even a modest drop in tissue {{pO_2}} releases huge volumes of {{O_2}}—and coupling histidine protonation to {{CO_2}}-derived {{H^+}} ions guarantees that hard-working muscles automatically receive priority oxygen delivery.",
      strategies: [
        "Always check **units** on spirometer questions: convert {{cm^3}} to {{dm^3}} (divide by 1000) and scale breathing counts from 15 s or 30 s traces to **per minute**.",
        "Never write that 'the lungs inflate so they suck air in'—examiners require the causal chain: **muscle contraction → thoracic volume increases → alveolar pressure falls below atmospheric pressure → air moves down the pressure gradient**.",
        "[HL] For any dissociation-curve question, draw a **vertical line at a fixed {{pO_2}}** (e.g. 4 kPa) to compare % saturation: **Left = higher affinity (holds {{O_2}} tighter); Right = lower affinity (releases {{O_2}} more readily)**.",
      ],
      thinkDeeper:
        "High-altitude birds like the bar-headed goose fly over Mount Everest where atmospheric {{pO_2}} is one-third of sea level. Predict whether their haemoglobin dissociation curve sits to the left or right of sea-level geese, and explain the trade-off that high affinity creates when unloading {{O_2}} in flight muscles.",
    },

    // =========================================================================
    // SECTION 2 — B3.2 Vascular Transport in Animals & Plants
    // =========================================================================
    {
      id: "transport-circulation-plants",
      heading: "B3.2 Vascular Transport in Animals & Plants",
      level: "SL",
      discovery: {
        problem:
          "A coastal redwood (*Sequoia sempervirens*) lifts water over 110 metres straight up into the sky without a single moving mechanical pump—while a mammal's left ventricle fires blood at ~16 kPa into an elastic aorta. Think before reading: **how can water be pulled more than 10 metres upward** (the theoretical limit of a vacuum suction pump on Earth), and why do arteries need thick elastic walls while veins need pocket valves?",
        idea:
          "A vacuum pump pushes water using atmospheric pressure (~101 kPa, supporting at most a 10.3 m water column). Xylem vessels bypass that limit completely because **cohesive hydrogen-bonded water columns inside microscopic lignified tubes can sustain huge negative pressures (tension)** without snapping, pulled continuously by solar-powered evaporation in leaves! Meanwhile, mammalian **double circulation** separates pulmonary and systemic circuits so elastic arteries smooth systolic pressure surges while low-pressure veins rely on pocket valves and skeletal muscle contraction to return blood to the heart.",
      },
      body: `### Blood Vessels & Single vs Double Circulation
Each blood vessel class matches its structural form precisely to local blood pressure and exchange function:

| Vessel | Lumen & Wall Structure | Functional Adaptation |
|---|---|---|
| **Arteries** | Narrow lumen; thick **tunica media** rich in **smooth muscle** and **elastic fibres** | Withstand high systolic pressure (~16 kPa); elastic fibres stretch during systole and **recoil** during diastole to maintain continuous flow; smooth muscle regulates vasoconstriction/vasodilation |
| **Capillaries** | Extremely narrow lumen (~7–8 μm, single-file erythrocytes); **one-cell-thick endothelium** with **fenestrations** (pores) and basement membrane | Minimizes diffusion distance; slows blood velocity for maximal nutrient/gas exchange; fenestrations permit fluid filtration |
| **Veins** | Wide lumen; thin smooth muscle/elastic layer; **semilunar (pocket) valves** | Low pressure (~1–2 kPa); wide lumen cuts resistance; valves prevent backflow when surrounding skeletal muscles squeeze veins |

- **Single circulation (bony fish)**: Blood passes through the two-chambered heart **once** per circuit (heart → gill capillaries → systemic capillaries → heart). Passage through gill capillaries drops blood pressure sharply, limiting systemic flow rate.
- **Double circulation (mammals & birds)**: A four-chambered heart with a complete **septum** drives two separate loops: the low-pressure **pulmonary circuit** (right ventricle → lungs → left atrium, protecting delicate alveoli from oedema) and the high-pressure **systemic circuit** (left ventricle with a much thicker myocardium → body → right atrium).
- **Coronary occlusion**: Heart muscle is supplied by **coronary arteries** branching off the aorta. Deposition of cholesterol-rich **atherosclerotic plaques** narrows the lumen; plaque rupture triggers **thrombus** (blood clot) formation, cutting off {{O_2}} and glucose to downstream myocardium and causing a **myocardial infarction** (heart attack).

### Xylem & Cohesion–Tension Water Transport
- **Xylem vessels** are dead, hollow, continuous pipes with no end walls or cytoplasm, reinforced by **lignin** rings/spirals that resist inward collapse under tension, and perforated by **pits** for lateral flow.
- **Cohesion–tension mechanism**: Water evaporates from wet spongy mesophyll cell walls into air spaces and diffuses out through open stomata (**transpiration**). Curved menisci in cell-wall nanopores generate strong **negative pressure (tension)** that pulls water out of leaf xylem. **Hydrogen bonds** provide **cohesion** (water-to-water pulling an unbroken column) and **adhesion** (water-to-hydrophilic cellulose/lignin walls opposing gravity).
- **Potometers** measure the rate of **water uptake** by a leafy shoot (a close proxy for transpiration rate, since >95% of absorbed water transpires and <5% is used in photosynthesis/turgor). Increasing **light intensity** (opens stomata), **temperature** (raises kinetic energy/evaporation), or **wind speed** (sweeps away the humid boundary layer) increases transpiration rate; increasing **humidity** reduces the water-vapour concentration gradient and lowers transpiration rate.

### [HL] Cardiac Cycle, Tissue Fluid & Phloem Translocation
- **Cardiac cycle (~0.8 s at 75 bpm)**:
  1. **Atrial systole (~0.1 s)**: Atria contract, topping up ventricular volume through open **atrioventricular (AV) valves** (bicuspid/tricuspid).
  2. **Ventricular systole (~0.3 s)**: Ventricular pressure spikes above atrial pressure → **AV valves slam shut ("lub" / S1)**. Pressure climbs until it exceeds aortic/pulmonary pressure → **semilunar valves open** and blood is ejected.
  3. **Diastole (~0.4 s)**: Ventricles relax; ventricular pressure falls below aortic pressure → **semilunar valves snap shut ("dub" / S2)** (producing the **dicrotic notch** on the aortic trace). When ventricular pressure falls below atrial pressure, AV valves reopen and passive filling resumes.
  - **Cardiac output**: {{CO = HR * SV}} (heart rate × stroke volume).
- **Tissue fluid & lymph**: At the **arteriolar end** of a capillary bed, blood **hydrostatic pressure** (~4.3 kPa) exceeds plasma **oncotic (colloid osmotic) pressure** (~3.3 kPa from large plasma proteins like albumin), driving ultrafiltration of water, glucose, amino acids, and {{O_2}} out through fenestrations. At the **venular end**, hydrostatic pressure drops (~1.6 kPa) below oncotic pressure (~3.3 kPa), so ~90% of fluid returns by osmosis; the remaining ~10% (plus leaked proteins) drains into blind-ended **lymphatic capillaries** and re-enters the vena cava via the thoracic duct.
- **Phloem pressure-flow (Münch) translocation**: Living **sieve tube elements** (perforated **sieve plates**, reduced cytoplasm, no nucleus) are metabolically supported via plasmodesmata by mitochondria-rich **companion cells**. At a **source** (photosynthesizing leaf or mobilized storage root), companion cells actively pump {{H^+}} ions out using ATP and cotransport **sucrose** into sieve tubes. High solute concentration lowers water potential, drawing water from adjacent xylem by osmosis and creating high **hydrostatic pressure**. At a **sink** (growing shoot tip, fruit, root), sucrose is actively or passively unloaded and respired or polymerized into insoluble **starch**, raising water potential so water exits back into xylem, sustaining bidirectional bulk mass flow along the pressure gradient.`,
      diagram: `<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left heart Wiggers cardiac cycle pressure graph on the left and phloem source to sink pressure-flow translocation beside xylem on the right">
  <rect x="0" y="0" width="720" height="300" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <!-- Left Panel: Wiggers Pressure Graph -->
  <text x="182" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Left-Heart Cardiac Cycle Pressure [HL]</text>
  <line x1="52" y1="242" x2="346" y2="242" stroke="var(--ink-2)" stroke-width="1.5"/>
  <line x1="52" y1="46" x2="52" y2="242" stroke="var(--ink-2)" stroke-width="1.5"/>
  <text x="199" y="274" text-anchor="middle" font-size="11" fill="var(--ink-2)">Time (s) — one cycle = 0.8 s</text>
  <text x="18" y="146" text-anchor="middle" font-size="11" fill="var(--ink-2)" transform="rotate(-90 18 146)">Pressure (kPa)</text>
  <!-- Y ticks -->
  <text x="46" y="66" text-anchor="end" font-size="9.5" fill="var(--ink-2)">16</text>
  <text x="46" y="128" text-anchor="end" font-size="9.5" fill="var(--ink-2)">10</text>
  <text x="46" y="206" text-anchor="end" font-size="9.5" fill="var(--ink-2)">2</text>
  <text x="46" y="244" text-anchor="end" font-size="9.5" fill="var(--ink-2)">0</text>
  <!-- X ticks -->
  <text x="52" y="256" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">0</text>
  <text x="125" y="256" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">0.2</text>
  <text x="199" y="256" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">0.4</text>
  <text x="272" y="256" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">0.6</text>
  <text x="342" y="256" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">0.8</text>
  <!-- Aorta pressure curve -->
  <path d="M52 122 L114 134 C132 76, 162 60, 198 100 L204 108 L212 99 C244 108, 294 118, 342 126" fill="none" stroke="#ea580c" stroke-width="2.4" stroke-dasharray="5,3"/>
  <!-- Left Ventricle pressure curve -->
  <path d="M52 232 L82 224 L94 230 L108 134 C124 72, 160 56, 198 100 L216 232 C254 236, 300 234, 342 230" fill="none" stroke="#dc2626" stroke-width="2.7"/>
  <!-- Left Atrium pressure curve -->
  <path d="M52 226 Q72 204 94 224 Q146 228 214 212 Q256 224 342 224" fill="none" stroke="#0284c7" stroke-width="2.2"/>
  <!-- Valve closure dots -->
  <circle cx="94" cy="224" r="4" fill="#16a34a"/>
  <text x="94" y="198" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">AV close (S1)</text>
  <circle cx="114" cy="134" r="4" fill="#7c3aed"/>
  <text x="147" y="142" font-size="9" font-weight="700" fill="#7c3aed">SL open</text>
  <circle cx="204" cy="106" r="4" fill="#ea580c"/>
  <text x="255" y="92" font-size="9" font-weight="700" fill="#ea580c">SL close (S2)</text>
  <!-- Legend -->
  <text x="64" y="54" font-size="9.5" font-weight="700" fill="#dc2626">─ L. Ventricle</text>
  <text x="152" y="54" font-size="9.5" font-weight="700" fill="#ea580c">--- Aorta</text>
  <text x="228" y="54" font-size="9.5" font-weight="700" fill="#0284c7">─ L. Atrium</text>
  <!-- Divider -->
  <line x1="366" y1="18" x2="366" y2="282" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4,4"/>
  <!-- Right Panel: Phloem Source-to-Sink -->
  <text x="544" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Phloem Pressure-Flow &amp; Xylem [HL]</text>
  <!-- Xylem column -->
  <rect x="404" y="52" width="44" height="214" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
  <text x="426" y="45" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0284c7">Xylem</text>
  <line x1="426" y1="244" x2="426" y2="76" stroke="#0284c7" stroke-width="2.2"/>
  <polygon points="421,80 426,68 431,80" fill="#0284c7"/>
  <text x="426" y="164" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1" transform="rotate(-90 426 164)">Tension (H₂O up)</text>
  <!-- Phloem sieve tube -->
  <rect x="498" y="52" width="54" height="214" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="525" y="45" text-anchor="middle" font-size="10.5" font-weight="700" fill="#15803d">Phloem</text>
  <!-- Sieve plates -->
  <line x1="498" y1="124" x2="552" y2="124" stroke="#15803d" stroke-width="2" stroke-dasharray="5,4"/>
  <line x1="498" y1="194" x2="552" y2="194" stroke="#15803d" stroke-width="2" stroke-dasharray="5,4"/>
  <line x1="525" y1="74" x2="525" y2="236" stroke="#15803d" stroke-width="2.4"/>
  <polygon points="520,232 525,246 530,232" fill="#15803d"/>
  <text x="525" y="106" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">High P</text>
  <text x="525" y="218" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">Low P</text>
  <!-- Source box -->
  <rect x="598" y="58" width="102" height="58" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
  <text x="649" y="77" text-anchor="middle" font-size="10.5" font-weight="700" fill="#92400e">SOURCE (Leaf)</text>
  <text x="649" y="92" text-anchor="middle" font-size="9.2" fill="#92400e">Active sucrose</text>
  <text x="649" y="104" text-anchor="middle" font-size="9.2" fill="#92400e">loading (ATP)</text>
  <!-- Source to Phloem arrow -->
  <line x1="596" y1="86" x2="558" y2="86" stroke="#d97706" stroke-width="2.2"/>
  <polygon points="562,81 552,86 562,91" fill="#d97706"/>
  <!-- Osmosis Xylem -> Phloem at source -->
  <line x1="450" y1="86" x2="492" y2="86" stroke="#0284c7" stroke-width="2.2"/>
  <polygon points="488,81 498,86 488,91" fill="#0284c7"/>
  <text x="474" y="78" text-anchor="middle" font-size="9" font-weight="700" fill="#0284c7">H₂O</text>
  <!-- Sink box -->
  <rect x="598" y="200" width="102" height="58" rx="8" fill="#ffedd5" stroke="#ea580c" stroke-width="1.8"/>
  <text x="649" y="219" text-anchor="middle" font-size="10.5" font-weight="700" fill="#9a3412">SINK (Root/Fruit)</text>
  <text x="649" y="234" text-anchor="middle" font-size="9.2" fill="#9a3412">Sucrose unloaded</text>
  <text x="649" y="246" text-anchor="middle" font-size="9.2" fill="#9a3412">→ starch / resp.</text>
  <!-- Phloem to Sink arrow -->
  <line x1="554" y1="229" x2="592" y2="229" stroke="#ea580c" stroke-width="2.2"/>
  <polygon points="588,224 598,229 588,234" fill="#ea580c"/>
  <!-- Osmosis Phloem -> Xylem at sink -->
  <line x1="496" y1="229" x2="454" y2="229" stroke="#0284c7" stroke-width="2.2"/>
  <polygon points="458,224 448,229 458,234" fill="#0284c7"/>
  <text x="474" y="221" text-anchor="middle" font-size="9" font-weight="700" fill="#0284c7">H₂O</text>
</svg>`,
      diagramCaption:
        "Left [HL]: Left-heart pressure graph showing valve events (AV close = S1 'lub', SL close = S2 'dub') across a 0.8 s cardiac cycle. Right [HL]: Münch pressure-flow model linking active sucrose loading/unloading in phloem with osmotic water exchange across adjacent xylem.",
      workedExamples: [
        {
          title: "[HL] Heart Rate & Cardiac Output from a Pressure Graph",
          problem:
            "A Wiggers pressure trace shows one complete cardiac cycle lasting {{0.75 s}}, and the left ventricle ejects {{72 cm^3}} of blood per beat (stroke volume). Calculate (a) the heart rate in beats min⁻¹ and (b) the cardiac output in {{dm^3 min^(-1)}}.",
          steps: [
            "Calculate heart rate from cycle duration: {{HR = 60 / 0.75 = 80}} beats min⁻¹.",
            "Compute cardiac output in {{cm^3 min^(-1)}}: {{CO = HR * SV = 80 * 72 = 5760 cm^3 min^(-1)}}.",
            "Convert {{cm^3}} to {{dm^3}} by dividing by 1000: {{5760 / 1000 = 5.76 dm^3 min^(-1)}}.",
          ],
          answer: "Heart rate = 80 beats min⁻¹; Cardiac output = {{5.76 dm^3 min^(-1)}}",
          yourTurn: {
            question:
              "During moderate exercise, an athlete's heart rate is 150 beats min⁻¹ and their stroke volume is {{120 cm^3}}. Calculate their cardiac output in {{dm^3 min^(-1)}}.",
            answer: { type: "number", value: 18, tolerance: 0.05, display: "18 dm³ min⁻¹" },
            solution: "CO = HR × SV = 150 × 120 = 18 000 cm³ min⁻¹. Divide by 1000 → 18 dm³ min⁻¹.",
          },
        },
        {
          title: "Potometer Volume Transpiration Rate Calculation",
          problem:
            "In a capillary potometer of internal radius {{r = 0.50 mm}}, an air bubble travels {{40 mm}} in 10 minutes. Calculate the rate of water uptake in {{mm^3 min^(-1)}} (use {{pi = 3.14}}).",
          steps: [
            "Cross-sectional area of capillary: {{A = pi * r^2 = 3.14 * 0.50^2 = 0.785 mm^2}}.",
            "Volume of water taken up in 10 min: {{V = A * d = 0.785 * 40 = 31.4 mm^3}}.",
            "Divide by time (10 min): {{Rate = 31.4 / 10 = 3.14 mm^3 min^(-1)}}.",
          ],
          answer: "{{3.14 mm^3 min^(-1)}}",
        },
      ],
      keyPoints: [
        "Arteries have thick elastic and muscular walls to smooth high pulsatile pressure; capillaries have a one-cell-thick fenestrated endothelium for exchange; veins have wide lumens and valves for low-pressure return.",
        "Double circulation keeps pulmonary pressure low (preventing alveolar fluid leakage) while generating high systemic pressure from the thick-walled left ventricle.",
        "Xylem transport is passive and unidirectional (roots → leaves), driven by evaporation-induced **tension**, water **cohesion**, and wall **adhesion** inside dead lignified tubes.",
        "[HL] Heart valves open and close purely passively whenever pressure on one side exceeds the other: **AV closure = S1 ('lub')**, **semilunar closure = S2 ('dub')**.",
        "[HL] Phloem translocation is **active and bidirectional** (source → sink): active sucrose loading lowers water potential, drawing xylem water in by osmosis to build hydrostatic pressure.",
      ],
      whyItWorks:
        "Why does phloem transport **sucrose** instead of glucose? Glucose is a reactive reducing sugar that would quickly enter cellular respiration or alter osmotic balance during long-distance travel. Sucrose is a chemically non-reducing disaccharide—metabolically inert in transit—so sieve tubes can safely pack it to >0.5 mol dm⁻³, creating huge osmotic turgor gradients without losing carbon along the stem.",
      strategies: [
        "On a Wiggers pressure curve, locate **where two curves cross**: every intersection between atrial & ventricular pressure marks an **AV valve** event; every intersection between ventricular & aortic pressure marks a **semilunar valve** event.",
        "Remember the potometer caveat for IB Paper 1B/Paper 2: a potometer measures **rate of water uptake**, not directly transpiration, because a small fraction of water is consumed in photosynthesis and cell expansion.",
        "Contrast **xylem vs phloem** across four dimensions: dead vs living cells, tension (negative pressure) vs positive hydrostatic pressure, unidirectional vs bidirectional, passive vs ATP-dependent loading.",
      ],
      thinkDeeper:
        "Why does kwashiorkor (severe protein deficiency in diet) cause fluid accumulation (**oedema**) in the abdomen and tissues? Trace the effect of reduced plasma albumin on capillary oncotic pressure at the venular end.",
    },

    // =========================================================================
    // SECTION 3 — B3.3 Sarcomeres, Sliding Filament Mechanism & Locomotion [HL]
    // =========================================================================
    {
      id: "muscle-motility-hl",
      heading: "B3.3 Sarcomeres, Sliding Filament Mechanism & Locomotion",
      level: "HL",
      discovery: {
        problem:
          "Under an electron microscope, a contracting skeletal muscle visibly shortens by up to 40%—yet when researchers measured the lengths of individual **actin** and **myosin** protein filaments inside contracted vs relaxed muscle, **neither filament had shortened by even a single nanometre**! How can a whole muscle shorten dramatically if its molecular rods remain completely fixed in length?",
        idea:
          "Just like an extension telescope or interlocking combs, the thin **actin** filaments slide deeper between the thick **myosin** filaments! Consequently, the **A-band** (the full length of myosin) stays completely constant, whereas the **I-band** (actin-only region), the **H-zone** (myosin-only gap), and the distance between **Z-lines** all shrink by the exact same amount.",
      },
      body: `### Striated Muscle Fibre & Sarcomere Architecture
A skeletal muscle is built from bundles of multinucleated **muscle fibres** (cells enclosed by a **sarcolemma** with deep invaginations called **T-tubules**, wrapped by a Ca²⁺-storing **sarcoplasmic reticulum**, and packed with mitochondria for ATP synthesis). Inside each fibre run cylindrical **myofibrils**, segmented into repeating contractile units called **sarcomeres** stretching from one **Z-line (Z-disc)** to the next:

- **Thin filaments (actin)**: Anchored to each Z-line, wrapped with regulatory proteins **tropomyosin** (a filamentous strand physically covering myosin-binding sites at rest) and **troponin** (a Ca²⁺-sensing switch complex).
- **Thick filaments (myosin)**: Centred at the **M-line** with flexible, protruding **myosin heads** that have both an actin-binding site and an **ATPase** catalytic site.
- **Titin**: An enormous molecular spring connecting each thick myosin filament to the Z-line; it keeps myosin centred, prevents sarcomere over-extension, and supplies passive elastic recoil.

| Band / Zone | Molecular Composition | Change During Contraction |
|---|---|---|
| **A-band** (dark) | Full length of thick **myosin** filaments (plus overlapping actin) | **Stays constant** (myosin filaments do not shorten) |
| **I-band** (light) | Thin **actin** filaments only (straddling a Z-line) | **Shortens** (actin slides further into A-band) |
| **H-zone** (lighter centre of A-band) | Thick **myosin** only (no actin overlap) | **Shortens** (can disappear at maximal contraction) |
| **Z-line to Z-line** | One complete **sarcomere** | **Shortens** by the exact amount I-band and H-zone decrease |

### The Sliding Filament Mechanism (Step-by-Step)
1. **Excitation & {{Ca^(2+)}} release**: An action potential arrives at the neuromuscular junction, depolarizes the sarcolemma, travels down **T-tubules**, and triggers voltage-sensitive channels in the **sarcoplasmic reticulum (SR)** to release {{Ca^(2+)}} ions into the sarcoplasm.
2. **Exposing binding sites**: {{Ca^(2+)}} binds to **troponin**, causing a conformational change that pulls **tropomyosin** off the myosin-binding sites on **actin**.
3. **Cross-bridge formation**: Pre-energized ("cocked") myosin heads—already holding hydrolysed **ADP + {{P_i}}**—bind to the exposed actin sites, forming **actomyosin cross-bridges**.
4. **Power stroke**: Release of {{P_i}} and ADP causes the myosin head to pivot ~45°, pulling the thin actin filament inward toward the **M-line** and shortening the sarcomere.
5. **ATP-driven detachment**: A **fresh ATP molecule** binds to the myosin head, reducing its affinity for actin so the cross-bridge **detaches**. *(Without ATP after death, cross-bridges stay permanently locked—**rigor mortis**!)*
6. **Re-cocking**: Myosin **ATPase** hydrolyses {{ATP -> ADP + P_i}}, storing energy to swing the myosin head back into its cocked high-energy position ready to grab a further site along actin.
7. **Relaxation**: Once motor-neuron firing stops, {{Ca^(2+)}}-ATPase pumps actively return {{Ca^(2+)}} into the SR; troponin releases {{Ca^(2+)}}, tropomyosin slides back over actin's binding sites, and an antagonistic muscle stretches the sarcomere back out.

### Antagonistic Pairs, Synovial Joints & Locomotion
- Because muscle fibres can **only exert pulling force when contracting** (they cannot actively push to lengthen), skeletal muscles work in **antagonistic pairs** across joints—such as the **biceps** (flexor) and **triceps** (extensor) at the elbow, or the **external** and **internal intercostals** around the ribcage.
- **Synovial joints** (e.g. human hip ball-and-socket allowing multi-planar rotation; elbow/knee hinge joint allowing flexion–extension in one plane) unite movable bones via:
  - **Articular (hyaline) cartilage**: smooth, elastic cap over bone ends reducing friction and absorbing shock.
  - **Synovial membrane & synovial fluid**: lubricates cartilage and supplies nutrients.
  - **Joint capsule & ligaments**: tough fibrous collagen bands connecting **bone to bone** to prevent dislocation while permitting controlled range of motion.
  - **Tendons**: inelastic collagen cords connecting **muscle to bone**, transmitting force without wasting energy in stretching.
- **Locomotion adaptations**: Aquatic swimmers (dolphins, tuna) evolve fusiform **streamlined bodies** to cut viscous drag, broad flippers/flukes for thrust, and buoyancy control (swim bladders or low-density blubber/lipids); terrestrial vertebrates use rigid endoskeletal levers anchored at limb girdles; **sessile organisms** (plants, reef corals, barnacles) conserve locomotion energy and instead disperse via wind/water-borne seeds, spores, or planktonic larvae.`,
      diagram: `<svg viewBox="0 0 720 305" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of a relaxed sarcomere above and a contracted sarcomere below showing constant A-band and shortening I-band and H-zone">
  <rect x="0" y="0" width="720" height="305" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <!-- Top: Relaxed Sarcomere -->
  <text x="360" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Relaxed Sarcomere (e.g. 2.6 μm) [HL]</text>
  <!-- Z-lines (relaxed at x=80 and x=640) -->
  <line x1="80" y1="36" x2="80" y2="120" stroke="#112416" stroke-width="4.5"/>
  <line x1="640" y1="36" x2="640" y2="120" stroke="#112416" stroke-width="4.5"/>
  <text x="80" y="32" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Z-line</text>
  <text x="640" y="32" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Z-line</text>
  <!-- M-line -->
  <line x1="360" y1="42" x2="360" y2="114" stroke="var(--ink-2)" stroke-width="1.6" stroke-dasharray="3,2"/>
  <text x="360" y="36" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-2)">M-line</text>
  <!-- Thin actin filaments (relaxed: length 210 from each Z-line -> ends at 290 and 430) -->
  <line x1="80" y1="50" x2="290" y2="50" stroke="#0284c7" stroke-width="3.2"/>
  <line x1="80" y1="78" x2="290" y2="78" stroke="#0284c7" stroke-width="3.2"/>
  <line x1="80" y1="106" x2="290" y2="106" stroke="#0284c7" stroke-width="3.2"/>
  <line x1="430" y1="50" x2="640" y2="50" stroke="#0284c7" stroke-width="3.2"/>
  <line x1="430" y1="78" x2="640" y2="78" stroke="#0284c7" stroke-width="3.2"/>
  <line x1="430" y1="106" x2="640" y2="106" stroke="#0284c7" stroke-width="3.2"/>
  <!-- Titin springs (relaxed: Z-line to myosin ends at 200 and 520) -->
  <path d="M80 64 L96 60 L112 68 L128 60 L144 68 L160 60 L176 68 L200 64" fill="none" stroke="#d97706" stroke-width="1.6"/>
  <path d="M520 64 L536 60 L552 68 L568 60 L584 68 L600 60 L616 68 L640 64" fill="none" stroke="#d97706" stroke-width="1.6"/>
  <path d="M80 92 L96 88 L112 96 L128 88 L144 96 L160 88 L176 96 L200 92" fill="none" stroke="#d97706" stroke-width="1.6"/>
  <path d="M520 92 L536 88 L552 96 L568 88 L584 96 L600 88 L616 96 L640 92" fill="none" stroke="#d97706" stroke-width="1.6"/>
  <!-- Thick myosin filaments (A-band = 200 to 520, width 320, CONSTANT!) -->
  <rect x="200" y="60" width="320" height="8" rx="4" fill="#dc2626"/>
  <rect x="200" y="88" width="320" height="8" rx="4" fill="#dc2626"/>
  <!-- Relaxed brackets -->
  <line x1="80" y1="130" x2="200" y2="130" stroke="#0284c7" stroke-width="1.8"/>
  <text x="140" y="143" text-anchor="middle" font-size="10" font-weight="700" fill="#0284c7">½ I-band (wide)</text>
  <line x1="200" y1="130" x2="520" y2="130" stroke="#dc2626" stroke-width="1.8"/>
  <text x="360" y="143" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">A-band (CONSTANT = 1.6 μm)</text>
  <line x1="290" y1="118" x2="430" y2="118" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="360" y="114" text-anchor="middle" font-size="9.5" font-weight="700" fill="#7c3aed">H-zone (wide)</text>
  <!-- Constant A-band vertical guide lines -->
  <line x1="200" y1="132" x2="200" y2="274" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="4,4"/>
  <line x1="520" y1="132" x2="520" y2="274" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="4,4"/>
  <!-- Bottom: Contracted Sarcomere -->
  <text x="360" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Contracted Sarcomere (e.g. 1.9 μm) — Z-lines Pulled Inward</text>
  <!-- Z-lines moved inward by 60 px each -> x=140 and x=580 -->
  <line x1="140" y1="184" x2="140" y2="266" stroke="#112416" stroke-width="4.5"/>
  <line x1="580" y1="184" x2="580" y2="266" stroke="#112416" stroke-width="4.5"/>
  <text x="140" y="180" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Z-line</text>
  <text x="580" y="180" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Z-line</text>
  <!-- M-line -->
  <line x1="360" y1="190" x2="360" y2="260" stroke="var(--ink-2)" stroke-width="1.6" stroke-dasharray="3,2"/>
  <!-- Actin filaments (same length 210 -> ends at 350 and 370!) -->
  <line x1="140" y1="198" x2="350" y2="198" stroke="#0284c7" stroke-width="3.2"/>
  <line x1="140" y1="226" x2="350" y2="226" stroke="#0284c7" stroke-width="3.2"/>
  <line x1="140" y1="254" x2="350" y2="254" stroke="#0284c7" stroke-width="3.2"/>
  <line x1="370" y1="198" x2="580" y2="198" stroke="#0284c7" stroke-width="3.2"/>
  <line x1="370" y1="226" x2="580" y2="226" stroke="#0284c7" stroke-width="3.2"/>
  <line x1="370" y1="254" x2="580" y2="254" stroke="#0284c7" stroke-width="3.2"/>
  <!-- Compressed Titin springs -->
  <path d="M140 212 L150 207 L160 217 L170 207 L180 217 L190 207 L200 212" fill="none" stroke="#d97706" stroke-width="1.6"/>
  <path d="M520 212 L530 207 L540 217 L550 207 L560 217 L570 207 L580 212" fill="none" stroke="#d97706" stroke-width="1.6"/>
  <path d="M140 240 L150 235 L160 245 L170 235 L180 245 L190 235 L200 240" fill="none" stroke="#d97706" stroke-width="1.6"/>
  <path d="M520 240 L530 235 L540 245 L550 235 L560 245 L570 235 L580 240" fill="none" stroke="#d97706" stroke-width="1.6"/>
  <!-- Thick myosin filaments (STILL 200 to 520!) -->
  <rect x="200" y="208" width="320" height="8" rx="4" fill="#dc2626"/>
  <rect x="200" y="236" width="320" height="8" rx="4" fill="#dc2626"/>
  <!-- Legend & contracted annotations -->
  <line x1="140" y1="276" x2="200" y2="276" stroke="#0284c7" stroke-width="1.8"/>
  <text x="170" y="291" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0284c7">½ I-band ↓</text>
  <line x1="200" y1="276" x2="520" y2="276" stroke="#dc2626" stroke-width="1.8"/>
  <text x="360" y="291" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">A-band UNCHANGED · H-zone nearly gone</text>
  <!-- Mini color legend -->
  <text x="648" y="210" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0284c7">Blue = Actin</text>
  <text x="648" y="226" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">Red = Myosin</text>
  <text x="648" y="242" text-anchor="middle" font-size="9.5" font-weight="700" fill="#d97706">Gold = Titin</text>
</svg>`,
      diagramCaption:
        "Dashed red guide lines confirm that the A-band (myosin length) never changes during contraction, while actin slides inward to narrow both the I-band and the central H-zone as titin compresses.",
      workedExamples: [
        {
          title: "[HL] Predicting Band Widths During Sarcomere Contraction",
          problem:
            "An electron micrograph shows a relaxed sarcomere measuring {{2.60 μm}} between Z-lines, with an A-band of {{1.60 μm}} and an H-zone of {{0.70 μm}}. When stimulated, the sarcomere shortens to {{2.10 μm}}. Calculate the new widths of (a) the A-band, (b) the H-zone, and (c) the combined I-band (two half I-bands per sarcomere).",
          steps: [
            "Total sarcomere shortening: {{Delta L = 2.60 - 2.10 = 0.50 μm}} ({{0.25 μm}} sliding inward from each Z-line).",
            "(a) The A-band equals thick myosin filament length, which never shortens ⇒ **A-band = {{1.60 μm}}**.",
            "(b) Both ends of the H-zone narrow by {{0.25 μm}}, so total H-zone narrows by {{0.50 μm}}: {{0.70 - 0.50 = 0.20 μm}}.",
            "(c) Combined I-band inside one sarcomere = sarcomere length − A-band = {{2.10 - 1.60 = 0.50 μm}} (down from {{2.60 - 1.60 = 1.00 μm}}, a drop of {{0.50 μm}}).",
          ],
          answer: "A-band = {{1.60 μm}}; H-zone = {{0.20 μm}}; combined I-band = {{0.50 μm}}",
          yourTurn: {
            question:
              "A relaxed sarcomere measures {{2.50 μm}} with an A-band of {{1.60 μm}} and an H-zone of {{0.60 μm}}. If the sarcomere contracts by {{0.40 μm}}, calculate the new H-zone width in μm.",
            answer: { type: "number", value: 0.2, tolerance: 0.01, display: "0.20 μm" },
            solution: "The H-zone shortens by the exact amount the sarcomere contracts: 0.60 − 0.40 = 0.20 μm.",
          },
        },
      ],
      keyPoints: [
        "During contraction, **A-band stays constant**, while **sarcomere length (Z–Z), I-band, and H-zone all shorten** by equal amounts.",
        "**{{Ca^(2+)}}** binds **troponin** (not tropomyosin directly!), displacing **tropomyosin** so myosin heads can bind exposed sites on **actin**.",
        "**ATP plays two distinct roles**: binding of ATP **detaches** the myosin head from actin, and hydrolysis of ATP ({{ATP -> ADP + P_i}}) **re-cocks** the myosin head for the next power stroke.",
        "**Titin** tethers thick myosin filaments to Z-lines, preventing overstretching and aiding passive recoil.",
        "Muscles operate in **antagonistic pairs** across lubricated **synovial joints** because contracting fibres can only pull, never push.",
      ],
      whyItWorks:
        "Why does **rigor mortis** stiffen muscles for hours after death if ATP is supposedly 'needed for contraction'? Because ATP's direct job in the cross-bridge cycle is actually **detachment** and **re-cocking**—the power stroke itself releases energy already stored from the previous ATP hydrolysis. When cellular respiration halts, {{Ca^(2+)}} leaks out of the SR and cross-bridges form, but without fresh ATP to detach them, actin and myosin remain chemically welded together until enzymes digest the proteins.",
      strategies: [
        "Use the mnemonic **'A = Always the same; I and H = Inwardly shrinking'** whenever interpreting striated-muscle electron micrographs.",
        "In 6–8 mark IB Paper 2 extended responses on muscle contraction, hit all **seven sequential milestones**: nerve impulse/SR → {{Ca^(2+)}} release → troponin/tropomyosin shift → cross-bridge formation → power stroke (ADP + {{P_i}} release) → ATP binding & detachment → ATP hydrolysis re-cocking.",
        "Never confuse **ligaments** (bone-to-bone, stabilizing joints) with **tendons** (muscle-to-bone, transmitting contraction force).",
      ],
      thinkDeeper:
        "Endurance marathoners have mostly slow-twitch oxidative muscle fibres packed with myoglobin and mitochondria, whereas 100 m sprinters have abundant fast-twitch glycolytic fibres with extensive sarcoplasmic reticulum. Connect both fibre designs back to B3.1 (myoglobin dissociation) and B3.3 ({{Ca^(2+)}} cycling speed).",
    },

    // =========================================================================
    // SECTION 4 — B4.1–B4.2 Abiotic Adaptations, Biomes & Ecological Niches
    // =========================================================================
    {
      id: "adaptation-biomes-niches",
      heading: "B4.1–B4.2 Abiotic Adaptations, Biomes & Ecological Niches",
      level: "SL",
      discovery: {
        problem:
          "Joseph Connell pried away the heavy barnacle *Semibalanus balanoides* from the lower intertidal zone of Scottish rocky shores. Within months, the delicate upper-shore barnacle *Chthamalus stellatus* colonized all the way down to low tide—even though it is **never** naturally found there! Meanwhile, *Semibalanus* transplanted up to the hot upper shore quickly dried out and died. What two very different forces—one **abiotic**, one **biotic**—control the upper vs lower boundaries of a species' distribution?",
        idea:
          "The upper limit of *Semibalanus* is enforced by **abiotic tolerance** (desiccation and heat), whereas the lower limit of *Chthamalus* is enforced by **interspecific competition** from faster-growing *Semibalanus*. Thus *Chthamalus* has a broad **fundamental niche** spanning the whole shore, but competition squeezes it into a narrower **realized niche** at the top!",
      },
      body: `### Abiotic Tolerance Limits & Extreme-Habitat Adaptations
Every species exhibits a **range of tolerance** for each abiotic factor (temperature, water availability, salinity, light, soil pH, dissolved {{O_2}}): an **optimal range** where populations thrive, flanked by **zones of physiological stress** and **zones of intolerance**. Ecologists map how abiotic gradients shape species distributions using **belt transects** (placing contiguous or regular quadrats along a line from e.g. low tide to high tide, or dune front to inland woodland).

- **Xerophytes (arid sand dunes & hot deserts — e.g. marram grass *Ammophila arenaria*, cacti)**:
  - **Rolled leaves** with stomata on the sheltered inner surface, **sunken stomatal pits**, and **epidermal hairs (trichomes)** trap a still layer of humid air, flattening the water-vapour concentration gradient.
  - **Thick waxy cuticle** minimizes cuticular evaporation; leaves reduced to **spines** cut surface area and deter herbivores while photosynthetic stems store water (**succulence**).
  - **CAM photosynthesis** (many cacti/succulents) opens stomata at night to fix {{CO_2}} as malate when air is cool and humid, keeping stomata shut under daytime heat.
- **Halophytes (saline coastal marshes & mangroves)**:
  - Root membranes exclude excess {{Na^+}} and {{Cl^-}} via selective **ultrafiltration** or pump excess salt out through specialized **salt-excreting glands** on leaves.
  - High internal osmolarity (accumulating compatible organic solutes) keeps root water potential more negative than seawater so osmosis still draws water inward.
  - **Pneumatophores** (vertical snorkel roots studded with **lenticels**) rise above waterlogged, anoxic mud to supply {{O_2}} to submerged root cells for aerobic respiration.
- **Coral reefs**: Restricted to shallow, clear tropical seas (~20–28 °C, narrow salinity 32–42‰, alkaline pH ~8.1–8.4) because reef-building corals depend on mutualistic photosynthetic **zooxanthellae** (*Symbiodinium*) needing intense light and on dissolved carbonate ions to precipitate {{CaCO_3}} skeletons.

### Global Biomes & Convergent Evolution
A **biome** is a large geographical community defined primarily by two climate variables—**mean annual temperature** and **mean annual precipitation** (plotted on a **Whittaker biome chart**):

| Biome | Climate Profile | Hallmark Plant & Animal Adaptations |
|---|---|---|
| **Tropical rainforest** | Hot (25–30 °C), very wet (>2000 mm yr⁻¹) | Emergent/canopy stratification, **drip tips** shedding heavy rain, shallow **buttress roots**, epiphytes climbing for light |
| **Hot desert** | Very hot days / cold nights, arid (<250 mm yr⁻¹) | Xerophytes (spines, deep/shallow roots, CAM), nocturnal/burrowing animals, concentrated urine (long Loops of Henle) |
| **Temperate deciduous forest** | Moderate temp, seasonal 750–1500 mm rain | Broadleaf trees shed leaves in autumn to cut winter water loss and frost damage; hibernation / migration |
| **Taiga (boreal forest)** | Cold long winters, moderate 400–800 mm precip. | Evergreen conifers with waxy needle leaves, conical snow-shedding canopies, thick fur/insulating fat |
| **Tundra** | Freezing (<0 °C mean), low precip. (<250 mm) | **Permafrost** prevents deep roots; low cushion plants resisting wind chill; white seasonal camouflage |
| **Grassland / Savanna** | Warm–hot, seasonal dry periods (300–1000 mm) | Deep fibrous grass roots surviving grazing & fire; fast cursorial grazers and herding behaviour |

Unrelated lineages evolving in the same biome on separate continents develop strikingly similar traits via **convergent evolution** (e.g. American cacti vs African *Euphorbia* both evolving leafless succulent stems and spines).

### Ecological Niches, Metabolic Diversity & Competitive Exclusion (B4.2)
An **ecological niche** is a species' complete functional role—combining its abiotic requirements, habitat space, timing, nutrition, and biotic interactions:
- **Oxygen requirements**: **Obligate aerobes** require {{O_2}} for aerobic respiration; **obligate anaerobes** (e.g. *Clostridium*, deep-sediment methanogens) are poisoned by {{O_2}} and use fermentation/anaerobic respiration; **facultative anaerobes** (e.g. yeast *Saccharomyces*, *E. coli*) respire aerobically when {{O_2}} is present and switch to anaerobic pathways when {{O_2}} runs out.
- **Modes of nutrition**: **Photoautotrophs** (plants, algae, cyanobacteria), **holozoic heterotrophs** (internal ingestion & digestion—animals), **saprotrophs** (external enzyme secretion & absorption—fungi & decomposer bacteria), and **mixotrophs** (both autotrophic and heterotrophic—e.g. *Euglena* photosynthesizing in light or ingesting organic matter in darkness, and carnivorous pitcher plants/Venus flytraps digesting insects for **nitrogen** in acidic nutrient-poor bogs).
- **Dentition & herbivore–plant arms race**: Mammalian teeth reveal diet even in fossils—**herbivores** have broad flat ridged molars for grinding cellulose and a **diastema** gap; **carnivores** have long pointed canines for seizing prey and blade-like **carnassials** for shearing flesh; **omnivores** (including hominins) combine generalized incisors, modest canines, and bunodont molars. Plants counter herbivory with physical spines/thorns and toxic **secondary metabolites** (alkaloids, tannins), while specialist herbivores evolve detoxification enzymes.
- **Fundamental vs realized niche & competitive exclusion**: The **fundamental niche** is the full theoretical range a species *could* occupy without competitors or predators; the **realized niche** is the narrower actual niche occupied under biotic pressure. By **Gause's competitive exclusion principle**, two species with identical niches cannot coexist indefinitely (e.g. *Paramecium aurelia* outcompetes *P. caudatum* in mixed culture); coexistence requires **resource partitioning** (niche differentiation in food size, microhabitat, or feeding time).`,
      diagram: `<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Whittaker biome temperature versus precipitation chart on the left and Connell barnacle fundamental versus realized niche diagram on the right">
  <rect x="0" y="0" width="720" height="300" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <!-- Left Panel: Whittaker Biome Chart -->
  <text x="208" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Whittaker Biome Chart (Temp vs Precipitation)</text>
  <!-- Axes -->
  <line x1="60" y1="250" x2="380" y2="250" stroke="var(--ink-2)" stroke-width="1.6"/>
  <line x1="60" y1="44" x2="60" y2="250" stroke="var(--ink-2)" stroke-width="1.6"/>
  <text x="220" y="280" text-anchor="middle" font-size="11" fill="var(--ink-2)">Mean Annual Temperature (°C)</text>
  <text x="19" y="148" text-anchor="middle" font-size="11" fill="var(--ink-2)" transform="rotate(-90 19 148)">Annual Precipitation (mm)</text>
  <!-- Biome Polygons -->
  <!-- Tundra (cold, dry) -->
  <polygon points="62,250 112,250 118,214 62,226" fill="#cbd5e1" stroke="#64748b" stroke-width="1.3"/>
  <text x="88" y="240" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1e293b">Tundra</text>
  <!-- Taiga / Boreal (cool, moderate) -->
  <polygon points="112,250 176,250 184,166 118,180 112,214" fill="#99f6e4" stroke="#0d9488" stroke-width="1.3"/>
  <text x="148" y="216" text-anchor="middle" font-size="10" font-weight="700" fill="#115e59">Taiga</text>
  <text x="148" y="228" text-anchor="middle" font-size="8.5" fill="#115e59">(Boreal)</text>
  <!-- Temperate Deciduous Forest -->
  <polygon points="184,166 262,150 264,200 176,214" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.3"/>
  <text x="222" y="182" text-anchor="middle" font-size="9.5" font-weight="700" fill="#14532d">Temperate</text>
  <text x="222" y="194" text-anchor="middle" font-size="9.5" font-weight="700" fill="#14532d">Forest</text>
  <!-- Grassland / Savanna -->
  <polygon points="176,214 264,200 318,220 318,250 176,250" fill="#fef08a" stroke="#ca8a04" stroke-width="1.3"/>
  <text x="246" y="232" text-anchor="middle" font-size="9.5" font-weight="700" fill="#713f12">Grassland / Savanna</text>
  <!-- Hot Desert (hot, dry) -->
  <polygon points="318,220 374,218 374,250 318,250" fill="#fed7aa" stroke="#ea580c" stroke-width="1.3"/>
  <text x="346" y="238" text-anchor="middle" font-size="9.5" font-weight="700" fill="#9a3412">Hot Desert</text>
  <!-- Tropical Rainforest (hot, very wet) -->
  <polygon points="262,150 278,56 374,56 374,218 318,220 264,200" fill="#4ade80" stroke="#15803d" stroke-width="1.5"/>
  <text x="322" y="128" text-anchor="middle" font-size="10.5" font-weight="700" fill="#052e16">Tropical</text>
  <text x="322" y="142" text-anchor="middle" font-size="10.5" font-weight="700" fill="#052e16">Rainforest</text>
  <!-- Axis tick labels -->
  <text x="72" y="264" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">−10</text>
  <text x="148" y="264" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">0</text>
  <text x="224" y="264" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">10</text>
  <text x="300" y="264" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">20</text>
  <text x="368" y="264" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">30</text>
  <text x="54" y="64" text-anchor="end" font-size="9" fill="var(--ink-2)">4000</text>
  <text x="54" y="156" text-anchor="end" font-size="9" fill="var(--ink-2)">2000</text>
  <text x="54" y="250" text-anchor="end" font-size="9" fill="var(--ink-2)">0</text>
  <!-- Divider -->
  <line x1="402" y1="18" x2="402" y2="282" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4,4"/>
  <!-- Right Panel: Fundamental vs Realized Niche -->
  <text x="561" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Fundamental vs Realized Niche</text>
  <!-- Tidal markers -->
  <line x1="422" y1="62" x2="698" y2="62" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="696" y="57" text-anchor="end" font-size="9.5" font-weight="700" fill="#0284c7">High Tide (Dry / Stress)</text>
  <line x1="422" y1="244" x2="698" y2="244" stroke="#0284c7" stroke-width="1.5"/>
  <text x="696" y="258" text-anchor="end" font-size="9.5" font-weight="700" fill="#0284c7">Low Tide (Submerged)</text>
  <!-- Chthamalus fundamental -->
  <rect x="434" y="66" width="52" height="174" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="460" y="148" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">Fundamental</text>
  <text x="460" y="160" text-anchor="middle" font-size="9" fill="#15803d">Chthamalus</text>
  <!-- Chthamalus realized -->
  <rect x="514" y="66" width="52" height="68" rx="6" fill="#16a34a" stroke="#14532d" stroke-width="1.8"/>
  <text x="540" y="96" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">Realized</text>
  <text x="540" y="109" text-anchor="middle" font-size="8.8" fill="#ffffff">Chthamalus</text>
  <!-- Competitive exclusion arrow -->
  <rect x="514" y="140" width="52" height="100" rx="6" fill="#ffedd5" stroke="#ea580c" stroke-width="1.6" stroke-dasharray="3,2"/>
  <text x="540" y="185" text-anchor="middle" font-size="8.8" font-weight="700" fill="#9a3412">Excluded by</text>
  <text x="540" y="197" text-anchor="middle" font-size="8.8" font-weight="700" fill="#9a3412">competition</text>
  <!-- Semibalanus realized -->
  <rect x="594" y="140" width="58" height="100" rx="6" fill="#0284c7" stroke="#0369a1" stroke-width="1.8"/>
  <text x="623" y="186" text-anchor="middle" font-size="9.2" font-weight="700" fill="#ffffff">Semibalanus</text>
  <text x="623" y="199" text-anchor="middle" font-size="8.5" fill="#ffffff">(Lower shore)</text>
  <!-- Abiotic limit note -->
  <text x="623" y="102" text-anchor="middle" font-size="8.8" font-weight="700" fill="#dc2626">Abiotic limit:</text>
  <text x="623" y="114" text-anchor="middle" font-size="8.5" fill="#dc2626">desiccation</text>
  <text x="623" y="126" text-anchor="middle" font-size="8.5" fill="#dc2626">kills Semibalanus</text>
</svg>`,
      diagramCaption:
        "Left: Whittaker biome chart mapping mean annual temperature against annual precipitation. Right: Connell's intertidal barnacle experiment illustrating abiotic limits vs competitive exclusion shaping the realized niche.",
      workedExamples: [
        {
          title: "Quantifying Niche Compression & Interpreting a Whittaker Profile",
          problem:
            "A coastal survey finds that sea-plant species A grows across soil salinities from 5‰ to 45‰ in monoculture, but when competitor B is present, species A is found only from 29‰ to 45‰. (a) Calculate the width of A's fundamental and realized salinity niches. (b) State what percentage of its fundamental salinity niche is lost to interspecific competition.",
          steps: [
            "Fundamental niche width = {{45 - 5 = 40}}‰.",
            "Realized niche width = {{45 - 29 = 16}}‰.",
            "Range lost to competition = {{40 - 16 = 24}}‰ ⇒ Percentage lost = {{(24 / 40) * 100 = 60%}}.",
          ],
          answer: "Fundamental = 40‰; Realized = 16‰; 60% of fundamental niche lost to competition",
          yourTurn: {
            question:
              "In a rocky-shore transect, barnacle species X survives from {{0.5 m}} to {{3.5 m}} above chart datum when competitors are removed, but only from {{2.3 m}} to {{3.5 m}} when species Y is present. Calculate the percentage of its fundamental vertical niche width that species X occupies as its realized niche.",
            answer: { type: "number", value: 40, tolerance: 0.5, display: "40%" },
            solution: "Fundamental width = 3.5 − 0.5 = 3.0 m; Realized width = 3.5 − 2.3 = 1.2 m. Percentage occupied = (1.2 / 3.0) × 100 = 40%.",
          },
        },
      ],
      keyPoints: [
        "Species distributions are bounded by **abiotic tolerance limits** (temperature, salinity, moisture, light, pH) and **biotic interactions** (competition, predation, mutualism).",
        "**Xerophytes** minimize transpiration (rolled leaves, sunken stomata, trichomes, thick cuticle, CAM); **halophytes** manage osmotic stress and anoxia (salt glands, root ultrafiltration, pneumatophores).",
        "**Temperature and annual precipitation** determine global **biomes**, driving **convergent evolution** of analogous adaptations on separate continents.",
        "Microbes and organisms span oxygen niches (**obligate aerobes, obligate anaerobes, facultative anaerobes**) and nutritional niches (**photoautotrophs, holozoic heterotrophs, saprotrophs, mixotrophs**).",
        "By **competitive exclusion**, two species cannot permanently share an identical niche: one is excluded or both diverge via **resource partitioning**, narrowing each **fundamental niche** into a **realized niche**.",
      ],
      whyItWorks:
        "Why don't mangroves simply dilute seawater by letting salt flood into their cells? Uncontrolled cytosolic {{Na^+}} disrupts enzyme tertiary structure and destabilizes membranes. Instead, halophytes either reject >90% of salt at the root endodermis or sequester {{Na^+}} inside central **vacuoles** while filling the cytosol with non-toxic organic osmolytes (like proline)—maintaining a negative water potential without poisoning metabolism.",
      strategies: [
        "Whenever an exam asks you to **explain** a xerophyte or halophyte adaptation, link the physical structure explicitly to the **physics of water potential or diffusion gradient** (e.g. 'trichomes trap humid air → smaller water-vapour concentration gradient → slower transpiration').",
        "Keep **habitat** (the physical address where an organism lives) distinct from **niche** (its complete functional role—abiotic tolerances + resources + interactions).",
        "When comparing **fundamental vs realized niche**, remember that the realized niche is always a **subset** of (less than or equal to) the fundamental niche.",
      ],
      thinkDeeper:
        "If climate change warms tropical seas by +2 °C and ocean acidification drops surface pH from 8.1 to 7.8, explain which two separate biological mechanisms push reef-building corals beyond their abiotic tolerance range.",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Contrast the functions of Type I and Type II pneumocytes in mammalian alveoli.",
        back: "**Type I pneumocytes** are extremely thin squamous epithelial cells minimizing the gas diffusion path (~0.5 μm). **Type II pneumocytes** are cuboidal secretory cells producing amphipathic **pulmonary surfactant**, which lowers water surface tension and prevents alveolar collapse.",
        level: "SL",
      },
      {
        front: "Which muscles contract during **forced expiration** (beyond quiet passive exhalation)?",
        back: "The **internal intercostal muscles** (pulling the ribcage downward and inward) and the **abdominal wall muscles** (pushing abdominal organs upward against the relaxed diaphragm), sharply decreasing thoracic volume and raising alveolar pressure.",
        level: "SL",
      },
      {
        front: "Define **vital capacity** and write its equation in terms of spirometer volumes.",
        back: "**Vital capacity (VC)** is the maximum volume of air that can be forcibly exhaled after a maximum inhalation: {{VC = V_T + IRV + ERV}} (tidal volume + inspiratory reserve volume + expiratory reserve volume). It excludes residual volume.",
        level: "SL",
      },
      {
        front: "How do guard cells open a stoma in daylight?",
        back: "Active proton pumping drives {{K^+}} ion uptake into guard cells, lowering their water potential. Water enters by osmosis, increasing turgor; because the **inner cell wall is thicker** and cellulose microfibrils are radially arranged, the guard cells bow outward, opening the pore.",
        level: "SL",
      },
      {
        front: "Explain the **Bohr shift** and its physiological advantage in exercising muscle.",
        back: "High {{CO_2}} from rapid respiration forms carbonic acid ({{H^+ + HCO_3^-}}), lowering blood pH. {{H^+}} ions bind haemoglobin and reduce its {{O_2}} affinity, shifting the dissociation curve **to the right** so more {{O_2}} is unloaded at the same tissue {{pO_2}}.",
        level: "HL",
      },
      {
        front: "Why does **fetal haemoglobin (HbF)** sit to the **left** of adult haemoglobin (HbA)?",
        back: "HbF (α₂γ₂) has a **higher affinity for O₂** than maternal HbA (α₂β₂) at any given pO₂, enabling net oxygen transfer from maternal blood to fetal blood across the placenta at low placental pO₂.",
        level: "HL",
      },
      {
        front: "How does the structure of an **artery** differ from a **vein**, and why?",
        back: "Arteries have a **narrower lumen** and a much **thicker tunica media** rich in elastic fibres and smooth muscle to withstand and smooth high systolic pressure via elastic recoil. Veins have a **wide lumen**, thin walls, and **pocket valves** to prevent backflow under low pressure.",
        level: "SL",
      },
      {
        front: "Outline the **cohesion–tension theory** of water transport in xylem.",
        back: "Evaporation of water from leaf mesophyll cell walls creates negative pressure (**tension**) at the top of xylem vessels. **Hydrogen bonds** provide **cohesion** between water molecules and **adhesion** to hydrophilic xylem walls, pulling a continuous unbroken water column up from the roots.",
        level: "SL",
      },
      {
        front: "What causes the first (S1 'lub') and second (S2 'dub') heart sounds during the cardiac cycle?",
        back: "**S1 ('lub')**: closure of the **atrioventricular (AV) valves** at the start of ventricular systole when ventricular pressure exceeds atrial pressure. **S2 ('dub')**: closure of the **semilunar valves** at the start of diastole when ventricular pressure drops below aortic/pulmonary pressure.",
        level: "HL",
      },
      {
        front: "How is **tissue fluid** formed at the arteriolar end of a capillary and mostly recovered at the venular end?",
        back: "At the arteriolar end, **hydrostatic pressure > oncotic pressure**, forcing water and small solutes out through fenestrations. At the venular end, hydrostatic pressure falls **below oncotic pressure**, so ~90% of water returns by osmosis while ~10% drains into **lymphatic capillaries**.",
        level: "HL",
      },
      {
        front: "Summarize the **Münch pressure-flow hypothesis** for phloem translocation.",
        back: "Companion cells actively load **sucrose** into sieve tubes at a **source**, lowering water potential so water enters by osmosis from xylem, creating high hydrostatic pressure. Unloading sucrose at a **sink** raises water potential so water exits, driving mass flow from high to low pressure.",
        level: "HL",
      },
      {
        front: "During sarcomere contraction, what happens to the **A-band**, **I-band**, **H-zone**, and **Z-lines**?",
        back: "**A-band** stays **constant** (myosin length does not change). **I-band** narrows, **H-zone** narrows (or disappears), and **Z-lines** move closer together as actin slides inward.",
        level: "HL",
      },
      {
        front: "State the two distinct roles of **ATP** in the sliding-filament cross-bridge cycle.",
        back: "1. **Binding** of a fresh ATP molecule to the myosin head breaks the actomyosin cross-bridge (**detachment** from actin). 2. **Hydrolysis** of ATP ({{ATP -> ADP + P_i}}) by myosin ATPase **re-cocks** the myosin head to its high-energy conformation.",
        level: "HL",
      },
      {
        front: "What is the role of **titin** inside a sarcomere?",
        back: "**Titin** is a giant elastic protein anchoring thick myosin filaments to the Z-lines; it keeps myosin aligned centrally, prevents over-stretching of the sarcomere, and stores passive elastic energy for recoil.",
        level: "HL",
      },
      {
        front: "Distinguish **obligate aerobes**, **obligate anaerobes**, and **facultative anaerobes**.",
        back: "**Obligate aerobes** require {{O_2}} to survive; **obligate anaerobes** cannot tolerate {{O_2}} and use anaerobic pathways exclusively; **facultative anaerobes** (e.g. yeast, *E. coli*) use aerobic respiration when {{O_2}} is available and switch to fermentation when {{O_2}} is absent.",
        level: "SL",
      },
      {
        front: "Distinguish a species' **fundamental niche** from its **realized niche**.",
        back: "The **fundamental niche** is the full theoretical range of abiotic conditions and resources a species can occupy without competitors or predators. The **realized niche** is the narrower actual range occupied in nature after **interspecific competition** and biotic limits.",
        level: "SL",
      },
    ],
    mustKnow: [
      "Fick's gas-exchange design rules: **large surface area, thin diffusion barrier, moist membrane, steep concentration gradient** (maintained by ventilation + perfusion).",
      "Ventilation is driven by **antagonistic muscles** changing thoracic volume and pressure (Boyle's law): diaphragm + external intercostals for inspiration; passive recoil (or internal intercostals + abdominals in forced expiration) for exhalation.",
      "Double circulation separates low-pressure pulmonary perfusion from high-pressure systemic pumping; vessel wall thickness and valves match local pressure.",
      "Xylem water columns move passively under **negative pressure (tension)** via **cohesion** and **adhesion** driven by leaf **transpiration**.",
      "[HL] Sigmoidal haemoglobin binding reflects **cooperativity**; **fetal Hb** shifts **left** (higher affinity); elevated {{CO_2}} / low pH drives the **rightward Bohr shift** (enhanced unloading).",
      "[HL] Cardiac valve opening/closing is purely passive, governed by **pressure crossover points** across atrial systole, ventricular systole, and diastole.",
      "[HL] Phloem translocation uses **ATP-dependent sucrose loading** at sources to create **positive osmotic hydrostatic pressure** pushing sap toward sinks.",
      "[HL] In a contracting sarcomere, **A-band stays constant** while **I-band, H-zone, and Z–Z spacing shorten**; {{Ca^(2+)}} binds **troponin** to move **tropomyosin**, and ATP drives **detachment** and **re-cocking**.",
      "Xerophytes cut transpiration by flattening the leaf-to-air water-vapour gradient; halophytes use salt exclusion/glands, high internal osmolarity, and **pneumatophores**.",
      "Global **biomes** track mean annual **temperature and precipitation**; **competitive exclusion** prevents permanent coexistence in identical niches, squeezing fundamental niches into realized niches or driving **resource partitioning**.",
    ],
    misconceptions: [
      {
        wrong: "Air enters the lungs because the lungs actively expand and suck air inside.",
        right: "Lung tissue contains no skeletal muscle. Contraction of the **diaphragm** and **external intercostals** expands the **thoracic cavity**, lowering alveolar pressure below atmospheric pressure so external air flows passively down the pressure gradient.",
        level: "SL",
      },
      {
        wrong: "Arteries always carry oxygenated blood and veins always carry deoxygenated blood.",
        right: "Arteries carry blood **away from the heart** and veins carry blood **toward the heart**. The **pulmonary artery** (and umbilical arteries) carry deoxygenated blood, while the **pulmonary vein** (and umbilical vein) carry oxygenated blood.",
        level: "SL",
      },
      {
        wrong: "A potometer directly measures the rate of transpiration from a leafy shoot.",
        right: "A potometer measures the **rate of water uptake**. It is only an indirect estimate of transpiration because ~1–5% of absorbed water is retained for photosynthesis, hydrolysis, and maintaining cell turgor.",
        level: "SL",
      },
      {
        wrong: "When the Bohr shift moves the oxygen dissociation curve to the right, haemoglobin binds oxygen more tightly.",
        right: "A **rightward** shift means a **higher {{P_50}}** and **lower affinity** for {{O_2}}: at any given tissue {{pO_2}}, haemoglobin holds *less* {{O_2}}, meaning it **releases more {{O_2}}** to respiring cells.",
        level: "HL",
      },
      {
        wrong: "During muscle contraction, actin and myosin filaments both shrink in length.",
        right: "Neither filament changes length! Thin actin filaments **slide** past thick myosin filaments, so the **A-band** stays completely constant while the **I-band** and **H-zone** narrow.",
        level: "HL",
      },
      {
        wrong: "ATP hydrolysis happens during the power stroke to pull actin inward, and ATP is not needed for relaxation.",
        right: "The power stroke is driven by release of **ADP + {{P_i}}** from a *previously* cocked myosin head. Binding of a fresh **ATP** detaches the cross-bridge (preventing rigor mortis), ATP hydrolysis **re-cocks** the head, and ATP also powers **{{Ca^(2+)}}-ATPase** pumps needed for relaxation.",
        level: "HL",
      },
      {
        wrong: "Phloem only transports sugars downward from leaves to roots.",
        right: "Phloem translocation is **bidirectional**—it always moves from **source** to **sink**. In early spring before new leaves unfold, underground storage tubers act as **sources** exporting sucrose **upward** to growing shoot buds (sinks).",
        level: "HL",
      },
    ],
    examMistakes: [
      "Forgetting to convert **{{cm^3}} to {{dm^3}}** (÷ 1000) or scaling a 15 s / 30 s spirometer trace to **per minute** when computing ventilation rate or cardiac output.",
      "Writing 'intercostal muscles contract' without specifying **external** (inspiration) vs **internal** (forced expiration)—IB mark schemes explicitly penalize omitting the qualifier!",
      "Confusing **type I pneumocytes** (thin squamous gas-exchange barrier) with **type II pneumocytes** (cuboidal surfactant-secreting cells).",
      "Saying heart valves 'actively open/close using muscles' instead of stating that they snap shut **passively due to a reversal in the pressure gradient** across them.",
      "Writing that **{{Ca^(2+)}} binds directly to tropomyosin** instead of stating that {{Ca^(2+)}} binds **troponin**, which shifts **tropomyosin** off actin's myosin-binding sites.",
      "Calling **xylem** transport 'active' or saying **phloem** sieve tubes are 'dead hollow cells'—xylem vessels are dead/passive while phloem sieve tubes are living with active companion-cell loading.",
      "Describing a species' **niche** as merely its physical location ('where it lives') instead of its **functional role, abiotic limits, resources, and biotic interactions**.",
      "Claiming two competitors with overlapping niches must always cause extinction, forgetting **resource partitioning** (niche differentiation) as an alternative evolutionary outcome.",
    ],
    mnemonics: [
      {
        topic: "Ventilation Muscles",
        device: "EXternal pulls ribcage EXternally (INspiration); INternal pulls IN (forced EXpiration)",
        explanation:
          "Contracting **EXternal** intercostals swings the ribcage outward and upward for inhalation; contracting **INternal** intercostals pulls the ribcage inward and downward during forced exhalation.",
        level: "SL",
      },
      {
        topic: "Oxygen Dissociation Shifts [HL]",
        device: "CADET faces RIGHT (CO₂, Acid/H⁺, 2,3-DPG, Exercise, Temperature)",
        explanation:
          "Any increase in **C**O₂, **A**cidity (lower pH), 2,3-**D**PG, **E**xercise, or **T**emperature shifts the haemoglobin curve **right** (lower affinity → more O₂ released to active tissues).",
        level: "HL",
      },
      {
        topic: "Sarcomere Contraction Bands [HL]",
        device: "A = Always the same; I & H = Inwardly Halving",
        explanation:
          "During sliding-filament contraction, the **A-band** width never changes, whereas both the **I-band** and the **H-zone** shrink as Z-lines slide inward.",
        level: "HL",
      },
      {
        topic: "Cardiac Valves & Heart Sounds [HL]",
        device: "LUB = Lower (AV) valves shut; DUB = Departing (Semilunar) valves shut",
        explanation:
          "S1 (**LUB**) happens when ventricular systole slams the **AV valves** shut; S2 (**DUB**) happens when diastole snaps the **semilunar valves** shut as blood attempts to backflow from the departing arteries.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Premature Babies & Artificial Surfactant",
        emoji: "👶",
        detail:
          "Type II pneumocytes begin secreting pulmonary surfactant late in fetal gestation (~week 28–34). Premature neonates often suffer Infant Respiratory Distress Syndrome (IRDS) because high alveolar surface tension collapses air sacs; administering exogenous surfactant saves thousands of newborn lives every year.",
      },
      {
        title: "Aphid Stylets & Phloem Sap Sampling",
        emoji: "🪲",
        detail:
          "Biologists anaesthetize sap-feeding aphids with CO₂ and sever their needle-like stylets with a laser while embedded in a single phloem sieve tube. Positive hydrostatic pressure pushes pure phloem sap straight out of the cut stylet—proving Münch pressure flow directly.",
      },
      {
        title: "Sungei Buloh Mangroves in Singapore",
        emoji: "🌿",
        detail:
          "Singapore's coastal mangroves (*Avicennia* and *Sonneratia*) showcase classic B4.1 halophyte form-function engineering: vertical pencil-like pneumatophores pierce anoxic tidal mud for oxygen, salt-excreting leaves glitter with salt crystals at noon, and buoyant viviparous propagules germinate on the parent tree before dropping into tidal currents.",
      },
      {
        title: "Coronary Stents & Bypass Surgery",
        emoji: "🩺",
        detail:
          "When atherosclerotic plaques narrow coronary arteries and starve myocardium of oxygen, cardiologists inflate balloon angioplasty catheters to deploy wire-mesh **stents** that reopen the lumen, or graft a saphenous vein / internal mammary artery around the blockage.",
      },
      {
        title: "Botulinum Toxin & Sarcomere Paralysis",
        emoji: "⚡",
        detail:
          "Botulinum toxin cleaves SNARE vesicle proteins at neuromuscular junctions, halting acetylcholine release so T-tubules never depolarize and the sarcoplasmic reticulum never releases Ca²⁺—blocking troponin activation and causing flaccid paralysis (used in micro-doses medically for muscle spasms).",
      },
    ],
    videos: [
      {
        title: "IB Biology B3.1 Gas Exchange, Ventilation & Bohr Shift Explained",
        channel: "YouTube Search · IB Biology FA2025",
        url: "https://www.youtube.com/results?search_query=IB+Biology+B3.1+gas+exchange+ventilation+Bohr+shift",
      },
      {
        title: "IB Biology B3.2 Cardiac Cycle, Xylem Cohesion-Tension & Phloem Translocation",
        channel: "YouTube Search · IB Biology FA2025",
        url: "https://www.youtube.com/results?search_query=IB+Biology+B3.2+transport+cardiac+cycle+xylem+phloem",
      },
      {
        title: "IB Biology B3.3 Muscle Contraction & Sliding Filament Theory (HL)",
        channel: "YouTube Search · IB Biology HL",
        url: "https://www.youtube.com/results?search_query=IB+Biology+B3.3+sliding+filament+sarcomere+contraction+HL",
      },
      {
        title: "IB Biology B4.1 & B4.2 Adaptation, Biomes, Xerophytes & Ecological Niches",
        channel: "YouTube Search · IB Biology FA2025",
        url: "https://www.youtube.com/results?search_query=IB+Biology+B4.1+B4.2+adaptations+biomes+fundamental+realized+niche",
      },
    ],
    formulas: [
      {
        name: "Pulmonary Ventilation Rate",
        formula: "{{V_E = V_T * f}}",
        note: "Tidal volume (dm³) × breathing frequency (breaths min⁻¹) = dm³ min⁻¹",
        level: "SL",
      },
      {
        name: "Vital Capacity (Spirometry)",
        formula: "{{VC = V_T + IRV + ERV}}",
        note: "Maximum air exhaled after maximum inhalation (excludes residual volume RV)",
        level: "SL",
      },
      {
        name: "Total Lung Capacity",
        formula: "{{TLC = VC + RV}}",
        note: "Vital capacity + residual volume (~6.0 dm³ in an average adult)",
        level: "SL",
      },
      {
        name: "Cardiac Output [HL]",
        formula: "{{CO = HR * SV}}",
        note: "Heart rate (beats min⁻¹) × stroke volume (cm³ or dm³); divide cm³ min⁻¹ by 1000 for dm³ min⁻¹",
        level: "HL",
      },
      {
        name: "Heart Rate from Cardiac Cycle Duration",
        formula: "{{HR = 60 / T}}",
        note: "T = duration of one complete cardiac cycle in seconds",
        level: "HL",
      },
      {
        name: "Potometer Capillary Water Uptake Rate",
        formula: "{{Rate = (pi * r^2 * d) / t}}",
        note: "r = capillary radius, d = distance bubble moves, t = time elapsed",
        level: "SL",
      },
      {
        name: "Carbonic Acid Dissociation (Bohr Shift)",
        formula: "{{CO_2 + H_2O -> H_2CO_3 -> H^+ + HCO_3^-}}",
        note: "Catalysed by carbonic anhydrase in RBCs; H⁺ lowers pH and shifts Hb curve right",
        level: "HL",
      },
      {
        name: "Net Capillary Filtration Pressure [HL]",
        formula: "{{P_net = P_hydrostatic - P_oncotic}}",
        note: "Positive at arteriolar end (ultrafiltration out); negative at venular end (osmotic reabsorption in)",
        level: "HL",
      },
      {
        name: "Sarcomere Contraction Band Identity [HL]",
        formula: "{{Delta L_sarcomere = Delta I = Delta H}}",
        note: "A-band stays constant (ΔA = 0); combined I-band = sarcomere length − A-band",
        level: "HL",
      },
      {
        name: "Realized Niche Proportion",
        formula: "{{% Realized = (W_realized / W_fundamental) * 100}}",
        note: "Always ≤ 100% because biotic competition/predation restricts the fundamental niche",
        level: "SL",
      },
    ],
  },
};
