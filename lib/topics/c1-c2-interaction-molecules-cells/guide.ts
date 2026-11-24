import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "c1-c2-interaction-molecules-cells",
  title: "Theme C (1–2): Interaction & Interdependence — Molecules & Cells",
  strand: "Theme C: Interaction & Interdependence",
  icon: "⚡",
  level: "SL",
  summary:
    "How enzymes lower activation energy to steer metabolism, how respiration and photosynthesis transfer chemical energy through ATP and chemiosmosis, how chemical signals reprogram cells [HL], and how neurons fire all-or-nothing action potentials across synapses.",
  intro:
    "Living cells are not static bags of molecules — they are tightly coordinated chemical and electrical networks. Every second, globular enzymes accelerate thousands of anabolic and catabolic reactions by millions of times without altering overall energy change. Mitochondria and chloroplasts harvest energy from carbon compounds and sunlight to phosphorylate ADP into ATP, while receptor proteins and excitable neuron membranes convert extracellular cues into rapid cellular and behavioural responses. In Theme C (Levels 1–2), you will connect molecular structure directly to reaction kinetics, bioenergetics, cell signaling [HL], and neural impulse transmission.",
  guide: [
    // =========================================================================
    // SECTION 1: C1.1 ENZYMES & METABOLISM
    // =========================================================================
    {
      id: "enzymes-metabolism",
      heading: "C1.1 Enzymes, Activation Energy & Inhibition Kinetics",
      level: "SL",
      discovery: {
        problem:
          "Sucrose dissolved in sterile water at 37 °C can sit on a lab bench for years without noticeably breaking down into glucose and fructose, even though hydrolysis releases free energy. Yet the moment you add a trace of the enzyme sucrase, the same solution hydrolyses within seconds. Why does a thermodynamically favourable reaction stall without an enzyme, and why does heating the enzyme to 80 °C permanently stop catalysis?",
        idea:
          "Every chemical reaction must first pass through an unstable **transition state** whose energy barrier is the **activation energy** ({{E_a}}). At 37 °C, almost no sucrose molecules have enough kinetic energy to cross that barrier spontaneously. Sucrase binds sucrose at its complementary **active site**, straining glycosidic bonds and stabilising the transition state so {{E_a}} drops dramatically — without changing the net energy difference ({{ΔG}}) between reactants and products. Heating to 80 °C disrupts the weak hydrogen, ionic, and hydrophobic bonds maintaining sucrase's 3D tertiary structure, **denaturing** the active site permanently.",
      },
      body: `**Metabolism** is the web of all enzyme-catalysed reactions inside a cell or organism. It divides into two complementary branches:
- **Anabolism** builds complex macromolecules from smaller monomers via condensation reactions and requires energy (usually from ATP hydrolysis) — e.g., protein synthesis from amino acids, glycogen synthesis from glucose, or photosynthesis fixing {{CO_2}} into triose phosphate.
- **Catabolism** breaks complex molecules into smaller subunits via hydrolysis or oxidation, releasing energy — e.g., digestion of starch by amylase, or cellular respiration oxidising glucose to {{CO_2}} and {{H_2O}}.

### Globular Structure, Induced Fit & Activation Energy
Enzymes are **globular proteins** (plus rare catalytic RNAs called ribozymes) with a specific cleft called the **active site**, formed by folding of the polypeptide chain so particular amino-acid R-groups come close together. Under the **induced-fit model**, the active site is not a rigid keyhole: initial binding of the substrate triggers a subtle **conformational change** in both enzyme and substrate. This conformational shift positions catalytic R-groups to weaken target bonds in the substrate, lowering the **activation energy ({{E_a}})** required to reach the transition state and increasing the proportion of collisions that succeed. Crucially, enzymes are **not consumed** and do **not** alter the overall free-energy change ({{ΔG}}) or equilibrium position.

### Factors Affecting Enzyme Activity
- **Temperature:** Raising temperature increases kinetic energy, producing more frequent, higher-energy enzyme–substrate collisions up to the **optimum temperature**. Beyond the optimum, excessive thermal vibration breaks hydrogen bonds and hydrophobic interactions, altering the tertiary structure and **denaturing** the active site (usually irreversible).
- **pH:** Each enzyme has an **optimum pH** (e.g., pepsin ≈ pH 2 in the stomach; amylase ≈ pH 7 in saliva; trypsin ≈ pH 8 in the small intestine). Shifting pH alters the ionization (charge) of acidic and basic R-groups in the active site, disrupting ionic and hydrogen bonds and reducing substrate binding or denaturing the enzyme.
- **Substrate concentration ([S]):** At low [S], rate rises steeply because many active sites are unoccupied. At high [S], all active sites become saturated with substrate, so the reaction rate plateaus at its maximum velocity (**{{V_max}}**); enzyme concentration is now the limiting factor.
- **Enzyme immobilization:** Attaching enzymes to inert supports (such as calcium alginate beads, e.g., immobilized lactase producing lactose-free milk) allows easy separation from products, reuse across batches, and often improved thermal/pH stability.

### [HL] Pathways, Compartmentalization & Enzyme Inhibition
- **Intracellular vs extracellular enzymes:** Intracellular enzymes operate inside cells (e.g., glycolysis in the cytosol, Krebs cycle in the mitochondrial matrix, catalase in peroxisomes), whereas extracellular enzymes are secreted by exocytosis to act outside cells (e.g., digestive proteases and lipases in the gut lumen, fungal cellulases).
- **Linear vs cyclic metabolic pathways:** In a **linear pathway**, each product becomes the next enzyme's substrate (e.g., glycolysis: glucose → pyruvate). In a **cyclic pathway**, the final intermediate regenerates the starting acceptor molecule (e.g., the Krebs cycle regenerating oxaloacetate; the Calvin cycle regenerating RuBP).
- **Competitive inhibition:** An inhibitor structurally resembles the substrate and binds reversibly to the **active site**, blocking substrate entry. Increasing substrate concentration [S] outcompetes the inhibitor, so **{{V_max}} is unchanged** while the apparent **{{K_m}} increases** (more substrate is needed to reach {{1/2}} {{V_max}}). Clinical example: **statins** competitively inhibit **HMG-CoA reductase**, reducing cholesterol synthesis.
- **Non-competitive inhibition:** An inhibitor binds to an **allosteric site** (a site distinct from the active site), causing a conformational change that distorts the active site so catalysis fails even if substrate binds. Because substrate cannot displace the inhibitor from the allosteric site, **{{V_max}} decreases** regardless of how high [S] rises, while apparent **{{K_m}} stays unchanged** (for pure non-competitive inhibition).
- **End-product (feedback) inhibition:** The final product of a pathway acts as a reversible **allosteric non-competitive inhibitor** of the first committed enzyme, preventing wasteful overproduction. Classic IB example: in bacteria, **isoleucine** (end product) binds allosterically to **threonine deaminase** (Enzyme 1), halting the conversion of threonine → isoleucine when isoleucine levels are high.
- **Mechanism-based (irreversible) inhibition:** Some inhibitors form permanent **covalent bonds** within the active site. **Penicillin** covalently binds the active site of bacterial **transpeptidase** (DD-peptidase), blocking peptidoglycan cell-wall cross-linking so dividing bacteria lyse osmotically — while human cells, lacking peptidoglycan walls, remain unharmed.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 270" role="img" aria-label="Side by side graphs of activation energy with and without an enzyme, and Michaelis-Menten curves showing no inhibitor, competitive inhibition, and non-competitive inhibition">
  <rect x="0" y="0" width="640" height="270" fill="#ffffff" rx="8"/>
  <!-- Left Panel: Activation Energy -->
  <text x="160" y="22" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#112416" text-anchor="middle">A. Activation Energy Profile (SL)</text>
  <line x1="45" y1="225" x2="295" y2="225" stroke="#334155" stroke-width="2"/>
  <line x1="45" y1="225" x2="45" y2="40" stroke="#334155" stroke-width="2"/>
  <text x="170" y="252" font-family="system-ui,sans-serif" font-size="11" fill="#334155" text-anchor="middle">Reaction progress</text>
  <text x="16" y="135" font-family="system-ui,sans-serif" font-size="11" fill="#334155" text-anchor="middle" transform="rotate(-90 16 135)">Free energy</text>
  <!-- Reactant & Product levels -->
  <line x1="55" y1="145" x2="285" y2="145" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="210" y1="200" x2="285" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <!-- Uncatalysed curve -->
  <path d="M 55 145 C 100 145, 115 55, 155 55 C 195 55, 205 200, 275 200" fill="none" stroke="#c2410c" stroke-width="2.5" stroke-dasharray="6 4"/>
  <!-- Catalysed curve -->
  <path d="M 55 145 C 95 145, 120 105, 155 105 C 190 105, 210 200, 275 200" fill="none" stroke="#16a34a" stroke-width="3"/>
  <!-- Ea arrows -->
  <line x1="155" y1="145" x2="155" y2="57" stroke="#c2410c" stroke-width="1.5"/>
  <polygon points="155,55 151,63 159,63" fill="#c2410c"/>
  <text x="163" y="75" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#c2410c">Ea (uncatalysed)</text>
  <line x1="138" y1="145" x2="138" y2="107" stroke="#16a34a" stroke-width="1.5"/>
  <polygon points="138,105 134,113 142,113" fill="#16a34a"/>
  <text x="72" y="102" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#15803d">Ea (enzyme)</text>
  <!-- Delta G arrow -->
  <line x1="255" y1="146" x2="255" y2="198" stroke="#0369a1" stroke-width="1.6"/>
  <polygon points="255,200 251,192 259,192" fill="#0369a1"/>
  <text x="262" y="177" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#0369a1">ΔG</text>
  <text x="60" y="138" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Reactants</text>
  <text x="228" y="214" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Products</text>

  <!-- Divider -->
  <line x1="320" y1="20" x2="320" y2="255" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Right Panel: Inhibition Kinetics [HL] -->
  <text x="480" y="22" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#112416" text-anchor="middle">B. Inhibitor Kinetics [HL]</text>
  <line x1="360" y1="225" x2="618" y2="225" stroke="#334155" stroke-width="2"/>
  <line x1="360" y1="225" x2="360" y2="40" stroke="#334155" stroke-width="2"/>
  <text x="490" y="252" font-family="system-ui,sans-serif" font-size="11" fill="#334155" text-anchor="middle">Substrate concentration [S]</text>
  <text x="336" y="135" font-family="system-ui,sans-serif" font-size="11" fill="#334155" text-anchor="middle" transform="rotate(-90 336 135)">Initial rate (v)</text>
  <!-- Vmax asymptotes -->
  <line x1="360" y1="62" x2="615" y2="62" stroke="#16a34a" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="366" y="56" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#15803d">Vmax (same for competitive)</text>
  <line x1="360" y1="138" x2="615" y2="138" stroke="#c2410c" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="512" y="132" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#c2410c">Lower Vmax</text>
  <!-- No inhibitor curve -->
  <path d="M 360 225 C 378 130, 415 74, 480 67 C 530 63, 575 63, 612 63" fill="none" stroke="#16a34a" stroke-width="2.8"/>
  <!-- Competitive inhibitor curve -->
  <path d="M 360 225 C 395 175, 445 110, 515 84 C 555 71, 585 67, 612 66" fill="none" stroke="#0369a1" stroke-width="2.5" stroke-dasharray="6 3"/>
  <!-- Non-competitive inhibitor curve -->
  <path d="M 360 225 C 380 175, 420 148, 485 142 C 535 140, 580 140, 612 140" fill="none" stroke="#c2410c" stroke-width="2.5"/>
  <!-- Labels -->
  <text x="412" y="88" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#15803d">No inhibitor</text>
  <text x="475" y="112" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#0369a1">Competitive</text>
  <text x="485" y="164" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#c2410c">Non-competitive</text>
</svg>`,
      diagramCaption:
        "Left: enzymes lower activation energy (Ea) without altering free-energy change (ΔG). Right [HL]: competitive inhibitors raise apparent Km but reach the same Vmax at high [S], whereas non-competitive inhibitors lower Vmax permanently.",
      workedExamples: [
        {
          title: "Initial Reaction Rate & Percentage Inhibition [SL/HL]",
          problem:
            "Catalase catalyses the breakdown of hydrogen peroxide into water and oxygen. Without an inhibitor, {{36.0 cm^3}} of oxygen is collected in the first {{45 s}}. When an inhibitor is added under identical conditions, {{12.6 cm^3}} of oxygen is collected in {{45 s}}. Calculate (a) the initial rate without inhibitor in {{cm^3 min^(-1)}} and (b) the percentage inhibition.",
          steps: [
            "Convert time to minutes: {{45 s = 45/60 = 0.75 min}}.",
            "Uninhibited initial rate: {{v_0 = 36.0 / 0.75 = 48.0 cm^3 min^(-1)}}.",
            "Inhibited initial rate: {{v_i = 12.6 / 0.75 = 16.8 cm^3 min^(-1)}}.",
            "Percentage inhibition: {{((v_0 - v_i) / v_0) * 100 = ((48.0 - 16.8) / 48.0) * 100 = (31.2 / 48.0) * 100 = 65%}}.",
          ],
          answer: "(a) 48.0 cm³ min⁻¹; (b) 65% inhibition",
          yourTurn: {
            question:
              "In a similar trial, catalase releases 30.0 cm³ of oxygen in 30 s without inhibitor, and 18.0 cm³ in 30 s with a non-competitive inhibitor. Calculate the percentage inhibition.",
            answer: { type: "number", value: 40, tolerance: 0.1, display: "40%" },
            solution:
              "Uninhibited rate = 30.0 / 0.5 = 60 cm³ min⁻¹; inhibited rate = 18.0 / 0.5 = 36 cm³ min⁻¹. Percentage inhibition = ((60 − 36) / 60) × 100 = 40%.",
          },
        },
        {
          title: "Distinguishing Competitive vs Non-Competitive Inhibition from Rate Data [HL]",
          problem:
            "At low substrate concentration (5 mmol dm⁻³), Inhibitor X reduces enzyme rate from 20 to 8 μmol min⁻¹. When substrate concentration is raised to saturation (200 mmol dm⁻³), the uninhibited rate is 80 μmol min⁻¹ and the rate with Inhibitor X reaches 78 μmol min⁻¹. Deduce the type of inhibition.",
          steps: [
            "Calculate % inhibition at low [S]: {{((20 - 8)/20) * 100 = 60%}} inhibition.",
            "Calculate % inhibition at saturating [S]: {{((80 - 78)/80) * 100 = 2.5%}} inhibition — rate approaches the original {{V_max}} (80 μmol min⁻¹).",
            "Because high [S] overcomes Inhibitor X and restores {{V_max}}, Inhibitor X binds reversibly to the active site and is a **competitive inhibitor**.",
          ],
          answer: "Competitive inhibition",
        },
      ],
      keyPoints: [
        "Enzymes lower activation energy (Ea) by forming an enzyme–substrate complex via induced fit; they do NOT alter ΔG.",
        "Denaturation breaks hydrogen, ionic, and hydrophobic bonds (tertiary structure), NOT peptide bonds (primary structure).",
        "At saturating [S], active sites are fully occupied and rate plateaus at Vmax unless more enzyme is added.",
        "[HL] Competitive inhibitors bind the active site (Vmax unchanged, apparent Km increases; e.g., statins on HMG-CoA reductase).",
        "[HL] Non-competitive inhibitors bind an allosteric site (Vmax decreases; e.g., isoleucine inhibiting threonine deaminase via end-product feedback).",
        "[HL] Penicillin is a mechanism-based irreversible inhibitor that covalently blocks bacterial transpeptidase.",
      ],
      whyItWorks:
        "Catalysis works by geometry and charge complementarity at the transition state, not by heating up molecules. Stabilising the distorted transition state lowers the peak of the energy hill, exponentially boosting the fraction of ambient-temperature collisions that yield product.",
      strategies: [
        "On rate vs [S] graphs, always check the right-hand asymptote first: same plateau → competitive; lower plateau → non-competitive.",
        "Always distinguish reversible kinetic slowing at low temperature (low kinetic energy, NOT denatured) from high-temperature denaturation (tertiary bonds broken).",
        "Use exact IB examples when asked for real-world inhibition: statins (competitive), threonine → isoleucine (allosteric end-product), penicillin (irreversible).",
      ],
      thinkDeeper:
        "Why does fever (39–40 °C) help fight some infections, yet prolonged core temperature above 42 °C becomes life-threatening even though mammalian enzymes evolved for warmth?",
    },

    // =========================================================================
    // SECTION 2: C1.2–C1.3 CELL RESPIRATION & PHOTOSYNTHESIS
    // =========================================================================
    {
      id: "cell-respiration-photosynthesis",
      heading: "C1.2–C1.3 Cell Respiration & Photosynthesis",
      level: "SL",
      discovery: {
        problem:
          "Burning one mole of glucose in a calorimeter releases 2870 kJ of heat in a single violent flash, which would cook any cell instantly. Conversely, a living leaf captures diffuse sunlight and builds glucose from atmospheric CO₂ at room temperature. How do cells break glucose down in controlled steps — and run the reverse chemistry in sunlight — without losing all energy as heat?",
        idea:
          "Cells couple oxidation and light absorption to **proton gradients** across folded internal membranes (mitochondrial **cristae** and chloroplast **thylakoids**). Instead of releasing 2870 kJ at once, electron transport chains pump {{H^+}} ions into a tiny compartment; as protons flow back down their electrochemical gradient through **ATP synthase** (**chemiosmosis**), energy is packaged into usable **ATP** packets (~30.5 kJ mol⁻¹ each).",
      },
      body: `### ATP: The Universal Energy Currency
**Adenosine triphosphate (ATP)** consists of adenine, ribose, and three phosphate groups. Hydrolysis of the terminal phosphate bond ({{ATP + H_2O -> ADP + P_i}}) releases immediate free energy to power active transport (e.g., {{Na^+/K^+}} pump), anabolic macromolecule synthesis, and mechanical movement (e.g., myosin cross-bridges). Because ATP is water-soluble, diffuses rapidly within cells, and is continuously regenerated by **phosphorylation** of ADP, cells turn over their own mass in ATP every day.

### Cell Respiration (SL)
**Cell respiration** is the controlled release of energy from organic compounds to produce ATP:
- **Aerobic respiration** (requires {{O_2}}, cytosol + mitochondria, high ATP yield ~32–36 ATP per glucose):
  {{C_6H_12O_6 + 6O_2 -> 6CO_2 + 6H_2O}} (+ ATP + heat).
- **Anaerobic respiration** (no {{O_2}}, cytosol only, fast but low yield = **2 net ATP** per glucose via glycolysis; restores {{NAD^+}} so glycolysis continues):
  - **Mammals (skeletal muscle):** glucose → **2 lactate** (lactic acid), **no {{CO_2}} released**.
  - **Yeast & plants:** glucose → **2 ethanol + 2 {{CO_2}}** (used in bread-making and brewing).
- **Respirometers** measure aerobic respiration rate by enclosing germinating seeds or invertebrates with **potassium hydroxide (KOH)** or soda lime to absorb all respired {{CO_2}}. Any inward movement of the manometer liquid therefore equals the volume of **{{O_2}} consumed**, controlled against a glass-bead thermobarometer for temperature/pressure fluctuations.

### [HL] Stages of Aerobic Respiration & Substrates
1. **Glycolysis (cytosol):** Glucose (6C) is phosphorylated using **2 ATP**, lysed into two 3C triose phosphates, and oxidised to **2 pyruvate (3C)**, yielding **4 ATP gross (2 ATP net)** and **2 NADH**.
2. **Link reaction (mitochondrial matrix):** Each pyruvate (3C) undergoes oxidative decarboxylation → **acetyl-CoA (2C) + 1 {{CO_2}} + 1 NADH** (so **2 {{CO_2}}, 2 NADH, 2 acetyl-CoA** per glucose).
3. **Krebs cycle (mitochondrial matrix):** Each acetyl-CoA (2C) combines with **oxaloacetate (4C)** to form **citrate (6C)**, then undergoes two decarboxylations and four oxidations back to oxaloacetate. Per turn: **2 {{CO_2}}, 3 NADH, 1 {{FADH_2}}, 1 ATP** (so **4 {{CO_2}}, 6 NADH, 2 {{FADH_2}}, 2 ATP** per glucose).
4. **Electron transport chain & chemiosmosis (inner mitochondrial membrane / cristae):** NADH and {{FADH_2}} donate high-energy electrons to membrane carriers. Energy released as electrons pass down the chain pumps **{{H^+}}** from the matrix into the tiny **intermembrane space**, building a steep proton-motive force. Protons diffuse back into the matrix through **ATP synthase**, driving **oxidative phosphorylation** of ADP → ATP. **Oxygen** acts as the **terminal electron acceptor** ({{1/2 O_2 + 2e^- + 2H^+ -> H_2O}}). Without {{O_2}}, the ETC backs up, NADH cannot be re-oxidised, and both the link reaction and Krebs cycle stall.
- **Lipids vs carbohydrates:** Fatty acids undergo β-oxidation into numerous 2C acetyl-CoA units and have far more C–H bonds per gram, yielding **~2× more energy per gram** than carbohydrates, but require strictly **aerobic** oxidation.

### Photosynthesis (SL)
Photosynthesis converts light energy into chemical energy stored in carbon compounds ({{6CO_2 + 6H_2O -> C_6H_12O_6 + 6O_2}}).
- **Photosynthetic pigments & chromatography:** Chlorophyll a, chlorophyll b, xanthophylls, and carotenoids absorb mainly **blue (~430–450 nm)** and **red (~650–680 nm)** wavelengths while reflecting green (~550 nm). Thin-layer/paper chromatography separates pigments by solubility and affinity for the stationary phase, quantified by the retention factor: {{R_f = d_pigment / d_solvent}}.
- **Absorption vs action spectrum:** The **absorption spectrum** plots % light absorbed by each pigment against wavelength; the **action spectrum** plots overall rate of photosynthesis against wavelength. Their close match proves that absorbed wavelengths drive photosynthesis, while accessory pigments broaden the action spectrum across blue-green wavelengths.
- **Limiting factors & FACE experiments:** Light intensity, {{CO_2}} concentration, and temperature each limit photosynthesis when in shortest supply (creating characteristic plateau curves, or a bell-shaped optimum curve for temperature due to enzyme denaturation). **Free-Air {{CO_2}} Enrichment (FACE)** rings pump elevated {{CO_2}} into open forest or crop plots to test long-term ecosystem photosynthesis and carbon sequestration under realistic field conditions.

### [HL] Light-Dependent Reactions & Calvin Cycle
- **Light-dependent reactions (thylakoid membranes):**
  1. Photosystem II (PSII) absorbs photons, exciting electrons to a higher energy level. **Photolysis** splits water ({{2H_2O -> 4H^+ + 4e^- + O_2}}), replacing PSII's lost electrons and releasing {{O_2}} gas.
  2. Excited electrons travel down an ETC to Photosystem I (PSI), pumping **{{H^+}}** from the stroma into the **thylakoid lumen**. Protons flow back into the stroma through **ATP synthase** (**photophosphorylation**).
  3. PSI re-excites electrons to reduce **{{NADP^+}} → NADPH** (non-cyclic photophosphorylation). In **cyclic photophosphorylation**, electrons cycle back from PSI to the ETC to produce extra ATP without making NADPH or {{O_2}}.
- **Light-independent reactions — Calvin cycle (stroma):**
  1. **Carbon fixation:** **RuBisCO** catalyses fixation of {{CO_2}} (1C) onto **RuBP (5C)**, forming an unstable 6C intermediate that immediately splits into **2 glycerate 3-phosphate (GP, 3C)**.
  2. **Reduction:** Each GP is reduced to **triose phosphate (TP, 3C)** using **ATP** and **NADPH** from the light-dependent reactions (per 3 {{CO_2}} fixed → 6 GP → 6 TP using **6 ATP** and **6 NADPH**).
  3. **Export & regeneration:** Out of every **6 TP** formed (per 3 {{CO_2}}), **1 TP** exits to synthesize glucose (2 TP = 1 glucose, so 1 glucose requires **6 {{CO_2}}, 18 ATP, 12 NADPH**), while **5 TP (15C)** are rearranged using **3 ATP** to regenerate **3 RuBP (15C)**.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 280" role="img" aria-label="Dual diagram comparing mitochondrial chemiosmosis across the inner membrane and the chloroplast Calvin cycle in the stroma">
  <rect x="0" y="0" width="640" height="280" fill="#ffffff" rx="8"/>
  <!-- LEFT PANEL: Mitochondrial Chemiosmosis -->
  <text x="160" y="22" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#112416" text-anchor="middle">A. Mitochondrial Chemiosmosis [HL]</text>
  <!-- Intermembrane space -->
  <rect x="18" y="34" width="284" height="58" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2" rx="6"/>
  <text x="160" y="51" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#92400e" text-anchor="middle">Intermembrane Space (High [H⁺], low pH)</text>
  <text x="80" y="76" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#b45309">H⁺   H⁺   H⁺</text>
  <text x="200" y="76" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#b45309">H⁺   H⁺</text>
  <!-- Inner membrane -->
  <rect x="18" y="92" width="284" height="52" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
  <text x="30" y="122" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#334155">Crista</text>
  <!-- ETC complexes -->
  <rect x="75" y="86" width="32" height="64" fill="#0284c7" rx="6"/>
  <text x="91" y="121" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">I</text>
  <rect x="122" y="86" width="32" height="64" fill="#0284c7" rx="6"/>
  <text x="138" y="121" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">III</text>
  <rect x="169" y="86" width="32" height="64" fill="#0284c7" rx="6"/>
  <text x="185" y="121" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">IV</text>
  <!-- Electron flow arrow -->
  <path d="M 91 108 L 138 108 L 185 108" fill="none" stroke="#fde047" stroke-width="2.2" stroke-dasharray="4 2"/>
  <text x="138" y="102" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#fef08a" text-anchor="middle">e⁻ flow</text>
  <!-- ATP synthase -->
  <rect x="234" y="84" width="48" height="68" fill="#16a34a" rx="10"/>
  <text x="258" y="114" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">ATP</text>
  <text x="258" y="126" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Synthase</text>
  <!-- H+ pump up arrows -->
  <line x1="91" y1="158" x2="91" y2="78" stroke="#c2410c" stroke-width="1.8"/>
  <polygon points="91,75 87,83 95,83" fill="#c2410c"/>
  <line x1="185" y1="158" x2="185" y2="78" stroke="#c2410c" stroke-width="1.8"/>
  <polygon points="185,75 181,83 189,83" fill="#c2410c"/>
  <!-- H+ flow down ATP synthase -->
  <line x1="258" y1="74" x2="258" y2="168" stroke="#15803d" stroke-width="2.4"/>
  <polygon points="258,172 253,163 263,163" fill="#15803d"/>
  <!-- Matrix -->
  <rect x="18" y="144" width="284" height="118" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.2" rx="6"/>
  <text x="160" y="252" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#14532d" text-anchor="middle">Mitochondrial Matrix (Low [H⁺])</text>
  <text x="68" y="178" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">NADH → NAD⁺</text>
  <text x="68" y="192" font-family="system-ui,sans-serif" font-size="9.5" fill="#0369a1" text-anchor="middle">+ H⁺ + 2e⁻</text>
  <text x="168" y="182" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#c2410c" text-anchor="middle">½O₂ + 2H⁺ + 2e⁻</text>
  <text x="168" y="196" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#c2410c" text-anchor="middle">→ H₂O</text>
  <text x="256" y="192" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">ADP + Pi</text>
  <text x="256" y="206" font-family="system-ui,sans-serif" font-size="10.5" font-weight="800" fill="#15803d" text-anchor="middle">→ ATP</text>

  <!-- Divider -->
  <line x1="320" y1="18" x2="320" y2="264" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- RIGHT PANEL: Calvin Cycle -->
  <text x="480" y="22" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#112416" text-anchor="middle">B. Chloroplast Calvin Cycle (Stroma) [HL]</text>
  <!-- Cycle ring -->
  <circle cx="480" cy="148" r="72" fill="none" stroke="#16a34a" stroke-width="3" stroke-dasharray="180 18"/>
  <!-- Top: CO2 + RuBP -->
  <rect x="432" y="38" width="96" height="28" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.4" rx="6"/>
  <text x="480" y="56" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#0369a1" text-anchor="middle">3 CO₂ (1C)</text>
  <line x1="480" y1="66" x2="480" y2="82" stroke="#0369a1" stroke-width="1.8"/>
  <polygon points="480,85 476,78 484,78" fill="#0369a1"/>
  <text x="536" y="83" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#7c3aed">RuBisCO</text>
  <!-- Right: 6 GP -->
  <rect x="526" y="106" width="96" height="36" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="6"/>
  <text x="574" y="122" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#14532d" text-anchor="middle">6 GP (3C)</text>
  <text x="574" y="135" font-family="system-ui,sans-serif" font-size="9" fill="#15803d" text-anchor="middle">Glycerate 3-P</text>
  <!-- Bottom: 6 TP -->
  <rect x="430" y="206" width="100" height="34" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="6"/>
  <text x="480" y="221" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#14532d" text-anchor="middle">6 TP (3C)</text>
  <text x="480" y="233" font-family="system-ui,sans-serif" font-size="9" fill="#15803d" text-anchor="middle">Triose phosphate</text>
  <!-- Reduction input -->
  <text x="578" y="176" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#c2410c" text-anchor="middle">6 ATP + 6 NADPH</text>
  <text x="578" y="189" font-family="system-ui,sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">(Reduction)</text>
  <!-- Left: 3 RuBP -->
  <rect x="336" y="106" width="96" height="36" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" rx="6"/>
  <text x="384" y="122" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#92400e" text-anchor="middle">3 RuBP (5C)</text>
  <text x="384" y="135" font-family="system-ui,sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Regenerated</text>
  <!-- Regeneration input -->
  <text x="380" y="178" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#b45309" text-anchor="middle">5 TP + 3 ATP</text>
  <text x="380" y="191" font-family="system-ui,sans-serif" font-size="9" fill="#b45309" text-anchor="middle">(Regeneration)</text>
  <!-- Export -->
  <line x1="480" y1="240" x2="480" y2="258" stroke="#15803d" stroke-width="2"/>
  <polygon points="480,261 476,254 484,254" fill="#15803d"/>
  <text x="480" y="273" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">1 TP net export (2 TP → 1 glucose)</text>
</svg>`,
      diagramCaption:
        "Left [HL]: electron transport pumps H⁺ across the inner mitochondrial membrane to drive ATP synthase while O₂ accepts terminal electrons. Right [HL]: three turns of the Calvin cycle fix 3 CO₂ using 9 ATP and 6 NADPH to export 1 net triose phosphate (TP).",
      workedExamples: [
        {
          title: "Chromatography Rf Calculation [SL]",
          problem:
            "A student separates spinach leaf pigments by thin-layer chromatography. The solvent front travels {{8.0 cm}} from the origin line. Chlorophyll b travels {{3.6 cm}} and β-carotene travels {{7.6 cm}}. Calculate the {{R_f}} value of chlorophyll b.",
          steps: [
            "Recall the retention factor equation: {{R_f = d_pigment / d_solvent}}.",
            "Substitute distances for chlorophyll b: {{R_f = 3.6 / 8.0 = 0.45}}.",
            "Check bounds: {{0 < R_f < 1}} and {{R_f}} is dimensionless (no units).",
          ],
          answer: "0.45",
          yourTurn: {
            question:
              "Using the same chromatogram (solvent front = 8.0 cm), calculate the Rf value of β-carotene (distance travelled = 7.6 cm).",
            answer: { type: "number", value: 0.95, tolerance: 0.005, display: "0.95" },
            solution: "Rf = 7.6 / 8.0 = 0.95 (β-carotene is highly non-polar and very soluble in the organic solvent).",
          },
        },
        {
          title: "Calvin Cycle & Aerobic Respiration Stoichiometry [HL]",
          problem:
            "How many molecules of (a) ATP and (b) NADPH are consumed in the Calvin cycle to synthesize {{2}} molecules of glucose ({{C_6H_12O_6}})?",
          steps: [
            "Fixing 3 {{CO_2}} produces 1 net TP (3C) and consumes 6 ATP + 6 NADPH (reduction) plus 3 ATP (RuBP regeneration) = 9 ATP and 6 NADPH.",
            "One glucose (6C) requires 2 net TP (= 6 {{CO_2}}), consuming {{2 * 9 = 18}} ATP and {{2 * 6 = 12}} NADPH.",
            "For 2 molecules of glucose: {{2 * 18 = 36}} ATP and {{2 * 12 = 24}} NADPH.",
          ],
          answer: "(a) 36 ATP; (b) 24 NADPH",
        },
      ],
      keyPoints: [
        "Anaerobic respiration yields 2 net ATP per glucose in the cytosol: lactate (0 CO₂) in mammals vs ethanol + 2 CO₂ in yeast.",
        "Respirometers use KOH / soda lime to absorb CO₂ so manometer volume drop measures O₂ consumption directly.",
        "Chromatography Rf = distance moved by pigment ÷ distance moved by solvent front (always between 0 and 1, unitless).",
        "[HL] Per glucose in aerobic respiration: glycolysis (2 net ATP, 2 NADH), link reaction (2 CO₂, 2 NADH), Krebs cycle (4 CO₂, 2 ATP, 6 NADH, 2 FADH₂).",
        "[HL] In mitochondria H⁺ accumulates in the intermembrane space (O₂ is terminal acceptor); in chloroplasts H⁺ accumulates in the thylakoid lumen (NADP⁺ is terminal acceptor).",
        "[HL] Synthesizing 1 glucose via the Calvin cycle fixes 6 CO₂ and consumes 18 ATP and 12 NADPH.",
      ],
      whyItWorks:
        "Both mitochondria and chloroplasts share Peter Mitchell's chemiosmotic mechanism because both evolved via endosymbiosis from prokaryotes. Pumping protons into a tiny enclosed space (intermembrane space or thylakoid lumen) builds a large concentration gradient rapidly using minimal ions.",
      strategies: [
        "Always check whether a respiration stoichiometry question asks per **pyruvate** (1 turn) or per **glucose** (2 turns of link reaction & Krebs cycle)!",
        "Never confuse the site of proton accumulation: intermembrane space in mitochondria vs thylakoid lumen in chloroplasts.",
        "When interpreting limiting-factor graphs, the factor on the x-axis is limiting ONLY along the rising slope; once the curve plateaus, a different factor is limiting.",
      ],
      thinkDeeper:
        "If an uncoupling protein (like thermogenin in brown fat of hibernating mammals) opens proton channels across the inner mitochondrial membrane bypassing ATP synthase, what happens to oxygen consumption, ATP synthesis, and heat production?",
    },

    // =========================================================================
    // SECTION 3: C2.1 CHEMICAL SIGNALING [HL]
    // =========================================================================
    {
      id: "chemical-signaling-hl",
      heading: "C2.1 Chemical Signaling, Receptors & Second Messengers",
      level: "HL",
      discovery: {
        problem:
          "Epinephrine (adrenaline) is a hydrophilic amine hormone that triggers liver cells to break down glycogen within seconds. Oestradiol is a hydrophobic steroid hormone that reshapes uterine tissue over hours. Neither hormone can act unless target cells express the right receptor — yet epinephrine's receptor sits on the outer plasma membrane while oestradiol's receptor sits deep inside the cell. Why does chemical polarity dictate completely different receptor locations and response speeds?",
        idea:
          "The hydrophobic fatty-acid core of the phospholipid bilayer blocks polar, water-soluble ligands like **epinephrine**, **insulin**, and **acetylcholine**, forcing them to bind **transmembrane receptors** that relay messages across the membrane via **second messengers** (such as cAMP) or ion flow — producing rapid enzyme activation. Non-polar **steroid hormones** (oestradiol, progesterone, testosterone) diffuse straight through the bilayer to bind **intracellular receptors** that act directly as **transcription factors**, switching genes on or off more slowly but with longer-lasting effects.",
      },
      body: `### Ligand–Receptor Specificity & Quorum Sensing [HL]
Chemical signaling requires a **ligand** (signaling molecule) to bind non-covalently to a complementary **receptor protein**. Cells lacking the specific receptor ignore the signal entirely; cells expressing different intracellular effectors can even produce opposite responses to the same ligand.

Even unicellular prokaryotes coordinate group behaviour via **quorum sensing**. The marine bacterium *Vibrio fischeri*, living inside the light organ of the Hawaiian bobtail squid, continuously secretes a small autoinducer ligand. At low cell density, autoinducer diffuses away. Once population density crosses a critical threshold, extracellular autoinducer accumulates, diffuses back into cells, binds intracellular receptor proteins, and activates transcription of *lux* genes encoding luciferase — switching on **bioluminescence** synchronously across the colony.

### Categories of Transmembrane Receptors (Hydrophilic Ligands) [HL]
Because peptide hormones, catecholamines, and neurotransmitters are polar or charged, they bind extracellular domains of integral membrane proteins:
1. **Ligand-gated ion channels (e.g., nicotinic acetylcholine receptor):** Binding of two acetylcholine (ACh) molecules causes a conformational change opening a central transmembrane pore. {{Na^+}} rushes into the postsynaptic cell, rapidly depolarizing the membrane within milliseconds.
2. **G-protein coupled receptors — GPCRs (e.g., epinephrine / β-adrenergic receptor):** Epinephrine binds the extracellular site of a 7-transmembrane GPCR → activates an intracellular **G-protein** (exchanging GDP for GTP) → the G-protein activates membrane-bound **adenylyl cyclase** → catalyses conversion of **ATP → cyclic AMP (cAMP)**, an intracellular **second messenger** → cAMP activates protein kinase A (PKA), initiating a **phosphorylation cascade** that massively amplifies the signal and activates glycogen phosphorylase (glycogen → glucose-1-phosphate).
3. **Receptor tyrosine kinases (e.g., insulin receptor):** Insulin binds two transmembrane receptor subunits, triggering **autophosphorylation** of intracellular tyrosine residues. This activates an intracellular signaling cascade causing vesicles carrying **GLUT4 glucose transporter channels** to fuse with the plasma membrane by exocytosis, accelerating facilitated diffusion of glucose into muscle and adipose cells.

### Intracellular Receptors (Hydrophobic Steroid Ligands) [HL]
Lipid-soluble steroid hormones — **oestradiol**, **progesterone**, and **testosterone** — cross the plasma membrane by simple diffusion and bind specific **intracellular receptors** in the cytoplasm or nucleus:
- Binding induces a conformational change in the receptor, forming a **hormone–receptor complex** that enters the nucleus (if cytoplasmic).
- The complex binds specific regulatory DNA sequences (**hormone-response elements**) upstream of target genes, acting as a **transcription factor** to recruit RNA polymerase and increase (or inhibit) transcription of specific mRNAs.
- Translation of those mRNAs into new proteins alters cell structure and metabolism over hours to days — slower onset than GPCR cascades, but far longer duration.

### Comparing Epinephrine vs Oestradiol Signaling [HL]
| Feature | Epinephrine (GPCR pathway) | Oestradiol (Steroid pathway) |
|---|---|---|
| Chemical nature | Hydrophilic amine (cannot cross bilayer) | Hydrophobic steroid (diffuses across bilayer) |
| Receptor location | Plasma membrane (transmembrane GPCR) | Intracellular (cytoplasm / nucleus) |
| Second messenger | Yes — cAMP activates kinase cascade | No — hormone–receptor complex acts directly |
| Primary cellular mechanism | Phosphorylation of existing enzymes (glycogenolysis) | Regulation of gene transcription & protein synthesis |
| Speed & duration | Rapid (seconds), short-lived | Slower (hours), longer-lasting |`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 280" role="img" aria-label="Comparison of hydrophilic epinephrine GPCR cAMP signaling pathway and hydrophobic oestradiol intracellular nuclear receptor pathway">
  <rect x="0" y="0" width="640" height="280" fill="#ffffff" rx="8"/>
  <!-- Left: Epinephrine GPCR -->
  <text x="160" y="21" font-family="system-ui,sans-serif" font-size="12.5" font-weight="700" fill="#112416" text-anchor="middle">A. Epinephrine (Transmembrane GPCR)</text>
  <!-- Bilayer -->
  <rect x="16" y="72" width="288" height="24" fill="#fde68a" stroke="#d97706" stroke-width="1.2"/>
  <text x="24" y="88" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#92400e">Membrane</text>
  <!-- Ligand -->
  <circle cx="116" cy="48" r="10" fill="#c2410c"/>
  <text x="166" y="51" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#c2410c">Epinephrine (polar)</text>
  <!-- GPCR -->
  <rect x="98" y="60" width="36" height="48" fill="#0284c7" rx="8"/>
  <text x="116" y="87" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">GPCR</text>
  <!-- G-protein -->
  <ellipse cx="152" cy="120" rx="22" ry="13" fill="#7c3aed"/>
  <text x="152" y="124" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">G-prot</text>
  <!-- Adenylyl cyclase -->
  <rect x="200" y="64" width="54" height="44" fill="#16a34a" rx="6"/>
  <text x="227" y="83" font-family="system-ui,sans-serif" font-size="8.5" font-weight="700" fill="#ffffff" text-anchor="middle">Adenylyl</text>
  <text x="227" y="95" font-family="system-ui,sans-serif" font-size="8.5" font-weight="700" fill="#ffffff" text-anchor="middle">cyclase</text>
  <!-- Arrow G-prot to AC -->
  <path d="M 174 116 L 208 108" fill="none" stroke="#334155" stroke-width="1.6"/>
  <polygon points="210,107 202,106 205,112" fill="#334155"/>
  <!-- ATP -> cAMP -->
  <line x1="227" y1="108" x2="227" y2="146" stroke="#15803d" stroke-width="1.8"/>
  <polygon points="227,149 223,141 231,141" fill="#15803d"/>
  <text x="262" y="132" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#15803d">ATP</text>
  <rect x="172" y="150" width="110" height="26" fill="#dcfce7" stroke="#16a34a" stroke-width="1.4" rx="6"/>
  <text x="227" y="167" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">cAMP (2nd messenger)</text>
  <!-- Cascade -->
  <line x1="227" y1="176" x2="227" y2="196" stroke="#334155" stroke-width="1.8"/>
  <polygon points="227,199 223,192 231,192" fill="#334155"/>
  <rect x="148" y="200" width="144" height="26" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.3" rx="6"/>
  <text x="220" y="217" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#0369a1" text-anchor="middle">Kinase cascade (amplified)</text>
  <line x1="220" y1="226" x2="220" y2="243" stroke="#334155" stroke-width="1.8"/>
  <polygon points="220,246 216,239 224,239" fill="#334155"/>
  <text x="160" y="262" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#112416" text-anchor="middle">Rapid glycogen → glucose release</text>

  <!-- Divider -->
  <line x1="320" y1="18" x2="320" y2="266" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Right: Oestradiol Steroid -->
  <text x="480" y="21" font-family="system-ui,sans-serif" font-size="12.5" font-weight="700" fill="#112416" text-anchor="middle">B. Oestradiol (Intracellular Receptor)</text>
  <!-- Bilayer -->
  <rect x="336" y="72" width="288" height="24" fill="#fde68a" stroke="#d97706" stroke-width="1.2"/>
  <text x="562" y="88" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#92400e">Membrane</text>
  <!-- Hydrophobic steroid diffusing through -->
  <polygon points="440,36 452,44 448,56 432,56 428,44" fill="#db2777"/>
  <text x="526" y="51" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#be185d" text-anchor="middle">Oestradiol (non-polar)</text>
  <line x1="440" y1="58" x2="440" y2="114" stroke="#db2777" stroke-width="2" stroke-dasharray="4 2"/>
  <polygon points="440,118 436,110 444,110" fill="#db2777"/>
  <!-- Intracellular receptor -->
  <rect x="404" y="120" width="96" height="28" fill="#fce7f3" stroke="#db2777" stroke-width="1.4" rx="8"/>
  <text x="452" y="138" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#9d174d" text-anchor="middle">Hormone–Receptor</text>
  <!-- Nucleus box -->
  <rect x="356" y="166" width="248" height="98" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.6" stroke-dasharray="6 3" rx="12"/>
  <text x="372" y="182" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#6d28d9">Nucleus</text>
  <line x1="452" y1="148" x2="452" y2="188" stroke="#7c3aed" stroke-width="1.8"/>
  <polygon points="452,191 448,184 456,184" fill="#7c3aed"/>
  <!-- DNA & Transcription -->
  <line x1="380" y1="210" x2="584" y2="210" stroke="#4f46e5" stroke-width="3"/>
  <rect x="424" y="196" width="60" height="20" fill="#db2777" rx="4"/>
  <text x="454" y="209" font-family="system-ui,sans-serif" font-size="8.5" font-weight="700" fill="#ffffff" text-anchor="middle">TF complex</text>
  <text x="538" y="204" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#4f46e5" text-anchor="middle">Target gene (DNA)</text>
  <line x1="510" y1="216" x2="510" y2="236" stroke="#15803d" stroke-width="1.8"/>
  <polygon points="510,239 506,232 514,232" fill="#15803d"/>
  <text x="480" y="253" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">mRNA transcription → new proteins</text>
</svg>`,
      diagramCaption:
        "Left [HL]: Polar epinephrine binds a transmembrane GPCR, generating cAMP to trigger a fast phosphorylation cascade. Right [HL]: Non-polar oestradiol diffuses into the cell and binds an intracellular receptor that regulates gene transcription.",
      workedExamples: [
        {
          title: "Signal Amplification in a GPCR Cascade [HL]",
          problem:
            "Suppose 1 molecule of epinephrine activates {{10}} G-proteins, each activated adenylyl cyclase synthesizes {{100}} molecules of cAMP, and each cAMP-activated kinase phosphorylates {{50}} glycogen phosphorylase enzymes. How many glycogen phosphorylase enzymes are activated by {{3}} epinephrine molecules?",
          steps: [
            "Amplification per 1 epinephrine molecule: {{10 * 100 * 50 = 50000}} active enzymes.",
            "Multiply by 3 epinephrine molecules: {{3 * 50000 = 150000}}.",
            "Notice how a nanomolar hormone concentration in blood yields a massive cellular glucose release within seconds.",
          ],
          answer: "150,000 glycogen phosphorylase enzymes",
          yourTurn: {
            question:
              "If 1 epinephrine ligand activates 8 G-proteins, each producing 50 cAMP molecules, and each cAMP activates 25 enzyme molecules, how many enzyme molecules are activated by 2 epinephrine ligands?",
            answer: { type: "number", value: 20000, display: "20000" },
            solution: "Per ligand: 8 × 50 × 25 = 10,000 enzymes. For 2 ligands: 2 × 10,000 = 20,000 enzymes.",
          },
        },
        {
          title: "Predicting Receptor Location & Effect of a Pathway Blocker [HL]",
          problem:
            "A newly discovered hormone H is a 42-amino-acid polypeptide. Researchers treat target cells with an inhibitor of adenylyl cyclase and observe that Hormone H no longer stimulates enzyme activation, though direct addition of membrane-permeable cAMP restores the response. Deduce the receptor class of Hormone H and why direct cAMP bypassed the block.",
          steps: [
            "A 42-amino-acid polypeptide is large and hydrophilic, so it cannot cross the phospholipid bilayer — it must bind a **transmembrane receptor**.",
            "Blocking adenylyl cyclase halts the response, proving that adenylyl cyclase lies downstream of the receptor, characteristic of a **G-protein coupled receptor (GPCR)**.",
            "Adding cAMP directly supplies the **second messenger** downstream of adenylyl cyclase, activating protein kinases without needing receptor or adenylyl cyclase activity.",
          ],
          answer: "Transmembrane GPCR; cAMP acts downstream of adenylyl cyclase.",
        },
      ],
      keyPoints: [
        "[HL] Chemical signaling depends on specific non-covalent ligand–receptor binding; cells without the receptor do not respond.",
        "[HL] Quorum sensing in Vibrio fischeri uses secreted autoinducers to trigger bioluminescence only above a threshold bacterial density.",
        "[HL] Hydrophilic ligands use transmembrane receptors: ligand-gated ion channels (ACh), GPCRs (epinephrine → cAMP), or receptor tyrosine kinases (insulin → GLUT4 exocytosis).",
        "[HL] Hydrophobic steroid hormones (oestradiol, progesterone, testosterone) cross the membrane and bind intracellular receptors acting as transcription factors.",
        "[HL] Second-messenger phosphorylation cascades provide rapid, massive signal amplification compared with direct transcriptional control.",
      ],
      whyItWorks:
        "Why doesn't epinephrine just turn on genes? When a predator appears, transcribing and translating new proteins would take far too long. Phosphorylating pre-existing glycogen phosphorylase via a cAMP cascade amplifies a tiny extracellular signal by 10⁵-fold in under a second.",
      strategies: [
        "Always check solubility first: peptide / amine / neurotransmitter → transmembrane receptor; steroid / lipid-soluble → intracellular receptor.",
        "When contrasting epinephrine and oestradiol in IB Paper 2, explicitly link (1) polarity, (2) receptor site, (3) cAMP vs transcription factor, and (4) speed/duration.",
        "Remember insulin's exact mechanism: receptor tyrosine kinase → autophosphorylation → vesicle fusion inserting GLUT4 transporters into the plasma membrane.",
      ],
      thinkDeeper:
        "Cholera toxin chemically locks the G-protein of intestinal epithelial cells permanently in its active GTP-bound state. Trace the cascade from adenylyl cyclase to cAMP and explain why cholera causes severe watery diarrhoea.",
    },

    // =========================================================================
    // SECTION 4: C2.2 NEURAL SIGNALING
    // =========================================================================
    {
      id: "neural-signaling",
      heading: "C2.2 Neurons, Action Potentials & Synaptic Transmission",
      level: "SL",
      discovery: {
        problem:
          "Electrical signals travel down copper wires at nearly the speed of light, yet a neuron's cytoplasm is a salty, leaky solution that would lose a passive voltage pulse within a few millimetres. How does a 1-metre-long human motor neuron carry a sharp, undiminished signal from your spinal cord to your toe in under 15 milliseconds?",
        idea:
          "Axons actively regenerate the electrical pulse at every step — or leap between insulated **nodes of Ranvier** — via an **action potential**. Voltage-gated {{Na^+}} channels snap open once membrane voltage hits threshold (−55 mV), flipping the local voltage to **+30 mV** (**depolarization**), while voltage-gated {{K^+}} channels restore **−70 mV** (**repolarization**). Because the impulse regenerates to the exact same peak at each node, it never fades with distance.",
      },
      body: `### Resting Potential (−70 mV)
Neurons transmit electrical impulses along slender projections called **axons** (often wrapped in an insulating **myelin sheath** produced by Schwann cells, interrupted by gaps called **nodes of Ranvier**). When a neuron is not firing, its plasma membrane maintains a **resting potential of approximately −70 mV** (inside negative relative to outside) through three mechanisms:
1. **Sodium–potassium pump ({{Na^+/K^+}} ATPase):** Actively pumps **3 {{Na^+}} out** and **2 {{K^+}} in** per ATP hydrolysed, creating a steep inward {{Na^+}} gradient and outward {{K^+}} gradient (and a net export of positive charge).
2. **Selective permeability:** The resting membrane has many open **{{K^+}} leak channels** (allowing {{K^+}} to diffuse out down its concentration gradient, leaving negatively charged intracellular proteins behind) and very few open {{Na^+}} channels.
3. **Negatively charged intracellular anions** (organic proteins and phosphates) are trapped inside the cytoplasm.

### Action Potential Phases & Unidirectional Propagation
1. **Threshold & Depolarization:** Local currents depolarize the axon membrane from −70 mV to the **threshold potential (−55 mV)** [HL]. This opens **voltage-gated {{Na^+}} channels** rapidly (positive feedback): {{Na^+}} floods into the axon down its electrochemical gradient, reversing polarity to roughly **+30 mV**.
2. **Repolarization:** At ~+30 mV, voltage-gated {{Na^+}} channels inactivate while **voltage-gated {{K^+}} channels** open. {{K^+}} rushes out of the axon, driving the membrane potential back down past −70 mV.
3. **Hyperpolarization (undershoot) & Refractory Period:** Because voltage-gated {{K^+}} channels close slowly, the membrane briefly dips to ~−80 mV before the {{Na^+/K^+}} pump and leak channels restore −70 mV. While {{Na^+}} channels remain inactivated during the **refractory period**, that membrane patch cannot fire again — guaranteeing **unidirectional propagation** and setting a maximum impulse frequency.
- **Saltatory conduction:** In myelinated axons, myelin blocks ion flow across internodes, forcing local currents to jump rapidly from one **node of Ranvier** to the next. Conduction speeds reach **50–120 m s⁻¹** compared with **0.5–2 m s⁻¹** in unmyelinated axons of comparable diameter (giant squid axons achieve high speed without myelin only by evolving a huge diameter that reduces internal resistance).

### Cholinergic Synaptic Transmission
At a chemical synapse (such as a neuromuscular junction or cholinergic CNS synapse), the electrical impulse converts into a chemical signal across the **synaptic cleft**:
1. An action potential arrives at the **presynaptic terminal**, opening **voltage-gated {{Ca^{2+}}} channels**.
2. **{{Ca^{2+}}} ions diffuse into** the presynaptic knob, triggering synaptic vesicles containing **acetylcholine (ACh)** to fuse with the presynaptic membrane (**exocytosis**).
3. ACh diffuses across the synaptic cleft and binds **ligand-gated {{Na^+}} channel receptors** on the postsynaptic membrane.
4. Channels open, {{Na^+}} diffuses into the postsynaptic neuron, depolarizing it; if threshold (−55 mV) is reached, a new postsynaptic action potential fires.
5. **Acetylcholinesterase (AChE)** in the synaptic cleft rapidly hydrolyses ACh into **acetate + choline**, closing postsynaptic channels so stimulation stops cleanly; choline is reabsorbed by the presynaptic neuron to resynthesize ACh. (Neonicotinoid pesticides bind insect ACh receptors irreversibly and resist AChE, causing lethal overstimulation.)

### [HL] Integration, Summation, Pain & Consciousness
- **Oscilloscope traces & All-or-Nothing Law:** Any stimulus failing to reach **−55 mV** produces no action potential; any stimulus reaching or exceeding −55 mV triggers an identical **+30 mV** spike. Stronger stimuli are encoded by a higher **frequency** of action potentials, not larger amplitude.
- **EPSPs, IPSPs & Summation:** Excitatory neurotransmitters (e.g., ACh, glutamate) open {{Na^+}} channels to generate an **excitatory postsynaptic potential (EPSP)** (depolarization toward threshold). Inhibitory neurotransmitters (e.g., GABA) open {{Cl^-}} or {{K^+}} channels to generate an **inhibitory postsynaptic potential (IPSP)** (hyperpolarization away from threshold). A postsynaptic neuron integrates all inputs at its axon hillock via **spatial summation** (simultaneous inputs from multiple presynaptic neurons) and **temporal summation** (rapid sequential inputs from one presynaptic neuron).
- **Local anaesthetics & pain:** Nociceptors detect tissue damage and transmit impulses to the CNS. **Local anaesthetics** (e.g., lidocaine, novocaine) diffuse into neurons and block **voltage-gated {{Na^+}} channels**, preventing depolarization so pain impulses never reach the brain.
- **Consciousness as an emergent property:** Consciousness arises from complex, integrated patterns of neural interactions across billions of neurons and trillions of synapses — it cannot be predicted from studying any single neuron in isolation.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 280" role="img" aria-label="Action potential oscilloscope trace from minus 70 to plus 30 millivolts alongside a diagram of a cholinergic synapse">
  <rect x="0" y="0" width="640" height="280" fill="#ffffff" rx="8"/>
  <!-- LEFT PANEL: Action Potential Trace -->
  <text x="165" y="21" font-family="system-ui,sans-serif" font-size="12.5" font-weight="700" fill="#112416" text-anchor="middle">A. Action Potential Oscilloscope Trace</text>
  <!-- Axes -->
  <line x1="52" y1="240" x2="305" y2="240" stroke="#334155" stroke-width="2"/>
  <line x1="52" y1="240" x2="52" y2="38" stroke="#334155" stroke-width="2"/>
  <text x="180" y="266" font-family="system-ui,sans-serif" font-size="10.5" fill="#334155" text-anchor="middle">Time (ms)</text>
  <text x="15" y="140" font-family="system-ui,sans-serif" font-size="10.5" fill="#334155" text-anchor="middle" transform="rotate(-90 15 140)">Membrane potential (mV)</text>
  <!-- Y ticks: +30 at y=58, 0 at y=106, -55 at y=194, -70 at y=218 -->
  <line x1="52" y1="58" x2="302" y2="58" stroke="#e2e8f0" stroke-width="1"/>
  <text x="46" y="62" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155" text-anchor="end">+30</text>
  <line x1="52" y1="106" x2="302" y2="106" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="46" y="110" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155" text-anchor="end">0</text>
  <line x1="52" y1="194" x2="302" y2="194" stroke="#f59e0b" stroke-width="1.3" stroke-dasharray="5 3"/>
  <text x="46" y="198" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#b45309" text-anchor="end">−55</text>
  <text x="298" y="189" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#b45309" text-anchor="end">Threshold</text>
  <line x1="52" y1="218" x2="302" y2="218" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="46" y="222" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155" text-anchor="end">−70</text>
  <!-- Waveform -->
  <path d="M 54 218 L 96 218 C 108 218, 114 202, 122 194 C 134 148, 144 58, 154 58 C 166 58, 178 158, 194 226 C 204 236, 224 232, 246 218 L 298 218" fill="none" stroke="#16a34a" stroke-width="3"/>
  <!-- Annotations -->
  <text x="104" y="128" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#0369a1" text-anchor="middle">Depolarization</text>
  <text x="104" y="140" font-family="system-ui,sans-serif" font-size="9" fill="#0369a1" text-anchor="middle">(Na⁺ influx)</text>
  <text x="218" y="114" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#c2410c" text-anchor="middle">Repolarization</text>
  <text x="218" y="126" font-family="system-ui,sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">(K⁺ efflux)</text>
  <text x="230" y="236" font-family="system-ui,sans-serif" font-size="8.5" font-weight="700" fill="#7c3aed" text-anchor="middle">Refractory / undershoot</text>
  <text x="76" y="211" font-family="system-ui,sans-serif" font-size="9" fill="#334155" text-anchor="middle">Resting</text>

  <!-- Divider -->
  <line x1="322" y1="18" x2="322" y2="266" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- RIGHT PANEL: Cholinergic Synapse -->
  <text x="480" y="21" font-family="system-ui,sans-serif" font-size="12.5" font-weight="700" fill="#112416" text-anchor="middle">B. Cholinergic Synapse</text>
  <!-- Presynaptic bulb -->
  <path d="M 410 34 L 410 105 C 410 132, 550 132, 550 105 L 550 34" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
  <text x="480" y="52" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">Presynaptic terminal</text>
  <!-- Ca2+ channel & influx -->
  <rect x="403" y="80" width="14" height="22" fill="#f59e0b" rx="3"/>
  <line x1="366" y1="91" x2="424" y2="91" stroke="#b45309" stroke-width="2"/>
  <polygon points="427,91 419,87 419,95" fill="#b45309"/>
  <text x="366" y="83" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#b45309" text-anchor="middle">Ca²⁺</text>
  <!-- Vesicles -->
  <circle cx="468" cy="84" r="13" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
  <circle cx="464" cy="82" r="2.5" fill="#16a34a"/>
  <circle cx="472" cy="85" r="2.5" fill="#16a34a"/>
  <circle cx="468" cy="89" r="2.5" fill="#16a34a"/>
  <circle cx="508" cy="100" r="13" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
  <circle cx="504" cy="99" r="2.5" fill="#16a34a"/>
  <circle cx="512" cy="102" r="2.5" fill="#16a34a"/>
  <text x="560" y="92" font-family="system-ui,sans-serif" font-size="9" fill="#0369a1">ACh</text>
  <text x="560" y="103" font-family="system-ui,sans-serif" font-size="9" fill="#0369a1">vesicles</text>
  <!-- Synaptic cleft + ACh molecules -->
  <text x="368" y="154" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#475569" text-anchor="middle">Synaptic</text>
  <text x="368" y="165" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#475569" text-anchor="middle">cleft</text>
  <circle cx="456" cy="148" r="3.5" fill="#16a34a"/>
  <circle cx="480" cy="156" r="3.5" fill="#16a34a"/>
  <circle cx="506" cy="146" r="3.5" fill="#16a34a"/>
  <text x="576" y="156" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#c2410c" text-anchor="middle">AChE breaks</text>
  <text x="576" y="167" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#c2410c" text-anchor="middle">down ACh</text>
  <!-- Postsynaptic membrane -->
  <path d="M 386 254 L 386 190 C 386 176, 574 176, 574 190 L 574 254" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="480" y="242" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">Postsynaptic neuron (EPSP → Na⁺ influx)</text>
  <!-- Ligand-gated Na+ channels -->
  <rect x="442" y="172" width="24" height="22" fill="#7c3aed" rx="4"/>
  <rect x="494" y="172" width="24" height="22" fill="#7c3aed" rx="4"/>
  <line x1="454" y1="164" x2="454" y2="216" stroke="#7c3aed" stroke-width="2"/>
  <polygon points="454,220 450,212 458,212" fill="#7c3aed"/>
  <text x="480" y="216" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#6d28d9" text-anchor="middle">Na⁺ in</text>
</svg>`,
      diagramCaption:
        "Left: oscilloscope trace showing resting potential (−70 mV), threshold (−55 mV), depolarization (+30 mV via Na⁺ influx), repolarization (K⁺ efflux), and refractory undershoot. Right: cholinergic synapse driven by Ca²⁺-triggered ACh exocytosis.",
      workedExamples: [
        {
          title: "Myelinated vs Unmyelinated Conduction Time [SL]",
          problem:
            "A motor axon is {{1.2 m}} long. Compare the impulse travel time in milliseconds if the axon is (a) myelinated with conduction speed {{80 m s^(-1)}} versus (b) unmyelinated with speed {{1.5 m s^(-1)}}.",
          steps: [
            "Use {{t = d / v}}.",
            "Myelinated: {{t = 1.2 / 80 = 0.015 s = 15 ms}}.",
            "Unmyelinated: {{t = 1.2 / 1.5 = 0.80 s = 800 ms}}.",
            "Myelination makes this reflex over {{53}} times faster!",
          ],
          answer: "(a) 15 ms; (b) 800 ms",
          yourTurn: {
            question:
              "An action potential travels along a 0.90 m myelinated sensory axon at 60 m s⁻¹. Calculate the conduction time in milliseconds (ms).",
            answer: { type: "number", value: 15, tolerance: 0.1, display: "15 ms" },
            solution: "t = d / v = 0.90 / 60 = 0.015 s. Multiply by 1000 to convert to ms: 0.015 × 1000 = 15 ms.",
          },
        },
        {
          title: "Summation of EPSPs and IPSPs at the Axon Hillock [HL]",
          problem:
            "A postsynaptic neuron sits at its resting potential of {{−70 mV}} with a threshold of {{−55 mV}}. It simultaneously receives two EPSPs of {{+9 mV}} each and one IPSP of {{−6 mV}}. Determine the resulting membrane potential and predict whether an action potential fires.",
          steps: [
            "Sum the postsynaptic potentials (spatial summation): {{ΔV = (+9) + (+9) + (-6) = +12 mV}}.",
            "Add to resting potential: {{V_m = -70 + 12 = -58 mV}}.",
            "Compare with threshold: {{−58 mV}} is still more negative than {{−55 mV}}, so threshold is NOT reached and **no action potential fires**.",
          ],
          answer: "−58 mV; no action potential fires (below −55 mV threshold).",
        },
      ],
      keyPoints: [
        "Resting potential (−70 mV) depends on the Na⁺/K⁺ pump (3 Na⁺ out, 2 K⁺ in per ATP) and open K⁺ leak channels.",
        "Depolarization (+30 mV) is caused by rapid Na⁺ influx through voltage-gated Na⁺ channels; repolarization by K⁺ efflux through voltage-gated K⁺ channels.",
        "The refractory period prevents backward propagation and limits maximum firing frequency.",
        "Saltatory conduction leaps between nodes of Ranvier, raising velocity dramatically without needing huge axon diameters.",
        "Synaptic sequence: action potential → voltage-gated Ca²⁺ influx → vesicle exocytosis of ACh → diffusion across cleft → ligand-gated Na⁺ channels open → AChE breakdown.",
        "[HL] Postsynaptic neurons integrate EPSPs and IPSPs by spatial and temporal summation; crossing −55 mV triggers an all-or-nothing spike.",
      ],
      whyItWorks:
        "Why does the Na⁺/K⁺ pump not directly cause depolarization or repolarization? Active transport moves only ~10² ions per second per pump, whereas open voltage-gated channels allow passive facilitated diffusion at ~10⁷ ions per second — fast enough to flip membrane voltage in under 1 millisecond.",
      strategies: [
        "Always check ion direction carefully: depolarization = **Na⁺ IN**; repolarization = **K⁺ OUT**; presynaptic neurotransmitter release = **Ca²⁺ IN**.",
        "Never write that the Na⁺/K⁺ pump 'causes repolarization' — repolarization is caused by **K⁺ efflux through voltage-gated K⁺ channels**; the pump restores long-term concentration gradients.",
        "In oscilloscope questions, read threshold (−55 mV), peak (+30 mV), and duration (~2–3 ms) straight off the axes before naming each phase.",
      ],
      thinkDeeper:
        "In multiple sclerosis, autoimmune attack strips myelin sheaths off CNS axons. Why do action potentials slow down or fail completely even though the neuron's cell body and synapses remain intact?",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "How does an enzyme speed up a reaction thermodynamically?",
        back: "It lowers the activation energy (Ea) by stabilising the transition state via induced fit, without changing ΔG or the equilibrium position.",
      },
      {
        front: "Induced-fit model vs lock-and-key model",
        back: "In induced fit, substrate binding causes a conformational change in the active site (and strains substrate bonds), enhancing catalytic specificity rather than fitting a rigid mould.",
      },
      {
        front: "Competitive vs non-competitive inhibition on Vmax and Km [HL]",
        back: "Competitive: binds active site, Vmax unchanged, apparent Km increases (overcome by high [S]). Non-competitive: binds allosteric site, Vmax decreases permanently, Km unchanged.",
        level: "HL",
      },
      {
        front: "Give one IB example each of competitive, end-product allosteric, and irreversible inhibition [HL]",
        back: "Competitive: statins inhibiting HMG-CoA reductase. End-product allosteric: isoleucine inhibiting threonine deaminase. Irreversible (mechanism-based): penicillin covalently blocking bacterial transpeptidase.",
        level: "HL",
      },
      {
        front: "Compare anaerobic respiration products in mammals vs yeast (per glucose)",
        back: "Both yield 2 net ATP in the cytosol. Mammals produce 2 lactate (0 CO₂); yeast produces 2 ethanol + 2 CO₂.",
      },
      {
        front: "Why is KOH or soda lime placed inside a respirometer?",
        back: "It absorbs all CO₂ produced by respiration so that any net decrease in gas volume directly equals the volume of O₂ consumed.",
      },
      {
        front: "Chromatography Rf formula and why pigments have different Rf values",
        back: "Rf = (distance travelled by pigment) ÷ (distance travelled by solvent front). Pigments differ in molecular polarity, solubility in the mobile solvent, and adsorption to the stationary phase.",
      },
      {
        front: "Exact yield of glycolysis, link reaction, and Krebs cycle per 1 glucose [HL]",
        back: "Glycolysis: 2 net ATP, 2 NADH, 2 pyruvate. Link reaction: 2 CO₂, 2 NADH, 2 acetyl-CoA. Krebs cycle: 4 CO₂, 2 ATP, 6 NADH, 2 FADH₂.",
        level: "HL",
      },
      {
        front: "Where do H⁺ ions accumulate during chemiosmosis in mitochondria vs chloroplasts? [HL]",
        back: "Mitochondria: intermembrane space (pumped from matrix). Chloroplasts: thylakoid lumen (pumped from stroma + released by photolysis).",
        level: "HL",
      },
      {
        front: "Role of RuBisCO and stoichiometry to make 1 glucose in the Calvin cycle [HL]",
        back: "RuBisCO fixes CO₂ onto RuBP (5C) → 2 GP (3C). Synthesizing 1 glucose (2 net TP) fixes 6 CO₂ and consumes 18 ATP and 12 NADPH.",
        level: "HL",
      },
      {
        front: "What is quorum sensing in Vibrio fischeri? [HL]",
        back: "Bacteria secrete autoinducer ligands; once population density passes a threshold, autoinducer binds intracellular receptors and activates bioluminescence genes synchronously.",
        level: "HL",
      },
      {
        front: "Contrast epinephrine vs oestradiol signaling pathways [HL]",
        back: "Epinephrine (polar) binds a plasma-membrane GPCR → adenylyl cyclase → cAMP second messenger → fast kinase cascade (glycogenolysis). Oestradiol (non-polar steroid) crosses the bilayer → intracellular receptor → nuclear transcription factor → slower, longer-lasting gene expression.",
        level: "HL",
      },
      {
        front: "How does insulin lower blood glucose at the cellular receptor level? [HL]",
        back: "Insulin binds a transmembrane receptor tyrosine kinase, triggering autophosphorylation and a cascade that fuses GLUT4-containing vesicles with the plasma membrane to boost facilitated diffusion of glucose.",
        level: "HL",
      },
      {
        front: "Ion movements during resting potential, depolarization, and repolarization",
        back: "Resting (−70 mV): Na⁺/K⁺ pump (3 Na⁺ out, 2 K⁺ in) + K⁺ leak out. Depolarization (+30 mV): voltage-gated Na⁺ channels open, Na⁺ rushes IN. Repolarization: voltage-gated K⁺ channels open, K⁺ rushes OUT.",
      },
      {
        front: "Role of Ca²⁺ and acetylcholinesterase (AChE) at a cholinergic synapse",
        back: "Action potential opens presynaptic voltage-gated Ca²⁺ channels; Ca²⁺ influx triggers exocytosis of ACh vesicles. AChE hydrolyses ACh in the cleft so postsynaptic Na⁺ channels close and stimulation ceases.",
      },
      {
        front: "How do local anaesthetics prevent pain sensation? [HL]",
        back: "They block voltage-gated Na⁺ channels in sensory neuron axons, preventing depolarization so action potentials cannot be initiated or propagated to the CNS.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Enzymes lower activation energy (Ea) via induced fit without changing ΔG; denaturation breaks tertiary non-covalent bonds, not peptide bonds.",
      "High substrate concentration [S] overcomes competitive inhibition (Vmax unchanged) but NEVER overcomes non-competitive inhibition (Vmax lowered) [HL].",
      "Aerobic respiration oxidises glucose completely (C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O); anaerobic respiration runs glycolysis alone (2 net ATP; lactate in humans, ethanol + CO₂ in yeast).",
      "Absorption spectrum = light absorbed by pigments vs wavelength; action spectrum = rate of photosynthesis vs wavelength (both peak in blue and red, dip in green).",
      "In oxidative phosphorylation [HL], O₂ is the terminal electron acceptor forming H₂O; without O₂, the ETC, Krebs cycle, and link reaction all halt.",
      "In the Calvin cycle [HL], 3 CO₂ → 6 GP → 6 TP (uses 6 ATP + 6 NADPH) → 1 net TP exported + 5 TP regenerated into 3 RuBP (uses 3 ATP).",
      "Hydrophilic ligands (epinephrine, insulin, ACh) bind transmembrane receptors; hydrophobic steroids (oestradiol, testosterone, progesterone) bind intracellular nuclear receptors [HL].",
      "Action potential voltages: resting −70 mV, threshold −55 mV [HL], peak depolarization +30 mV (Na⁺ influx), repolarization (K⁺ efflux), undershoot ~−80 mV.",
      "Myelination enables saltatory conduction between nodes of Ranvier, increasing speed by >20× while conserving ATP used by the Na⁺/K⁺ pump.",
      "Synaptic transmission is strictly one-way because neurotransmitter vesicles exist only in the presynaptic knob and receptors exist only on the postsynaptic membrane.",
    ],
    misconceptions: [
      {
        wrong: "Enzymes are 'killed' at high temperatures, and cold temperatures also denature enzymes.",
        right: "Enzymes are non-living proteins, so they cannot be killed — they **denature** at high temperatures. Cold temperatures merely reduce kinetic energy and collision frequency reversibly without denaturing the enzyme.",
      },
      {
        wrong: "Increasing substrate concentration eventually overcomes all types of enzyme inhibition.",
        right: "Increasing [S] overcomes **competitive** inhibition (active-site competition) only. It cannot overcome **non-competitive** inhibition because the inhibitor binds a separate allosteric site.",
        level: "HL",
      },
      {
        wrong: "Plants only photosynthesize during the day and only respire at night.",
        right: "Plant cells carry out **cell respiration continuously (24 hours a day)** to supply ATP for active transport and biosynthesis; during bright daylight, photosynthesis exceeds respiration so net CO₂ is absorbed.",
      },
      {
        wrong: "Light-independent reactions (Calvin cycle) happen only in the dark.",
        right: "The Calvin cycle does not absorb photons directly, but it stops within seconds in darkness because it rapidly exhausts ATP and NADPH supplied by the light-dependent reactions.",
        level: "HL",
      },
      {
        wrong: "Steroid hormones act faster than peptide hormones because they enter the cell directly.",
        right: "Steroid hormones act **more slowly** (hours) because they must alter DNA transcription and synthesize new proteins, whereas GPCR/cAMP cascades activate pre-existing enzymes within seconds.",
        level: "HL",
      },
      {
        wrong: "The Na⁺/K⁺ pump causes repolarization during an action potential.",
        right: "Repolarization is driven by rapid **passive efflux of K⁺ through voltage-gated K⁺ channels**. The Na⁺/K⁺ pump maintains resting ion gradients over the longer term.",
      },
      {
        wrong: "A stronger stimulus produces a taller action potential (higher than +30 mV).",
        right: "Action potentials are **all-or-nothing** (~+30 mV peak regardless of stimulus size once threshold is crossed); stronger stimuli increase the **frequency** of action potentials.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Writing that enzymes 'give energy to substrates' instead of 'lower the activation energy Ea'.",
      "Forgetting to double link-reaction and Krebs-cycle outputs when an exam question asks for yields **per molecule of glucose** (2 pyruvates enter mitochondria!).",
      "Putting units on a chromatography Rf value — Rf is a dimensionless ratio of two distances.",
      "Confusing the direction of H⁺ pumping in mitochondria (matrix → intermembrane space) with chloroplasts (stroma → thylakoid lumen).",
      "Saying acetylcholine 'diffuses into the postsynaptic neuron' — ACh only **binds extracellular receptors** on the postsynaptic membrane; it is **Na⁺** that enters the postsynaptic cell!",
      "Omitting Ca²⁺ influx when explaining synaptic vesicle exocytosis — IB markschemes consistently award a dedicated mark to voltage-gated Ca²⁺ channels opening.",
      "Confusing spatial summation (multiple presynaptic neurons firing simultaneously) with temporal summation (one presynaptic neuron firing repeatedly in rapid succession) [HL].",
      "Forgetting to convert seconds to minutes (or metres to millimetres / seconds to milliseconds) in enzyme rate and conduction-speed calculations.",
    ],
    mnemonics: [
      {
        topic: "Enzyme Inhibition Kinetics [HL]",
        device: "Comp-Same-Top, NonComp-Drop",
        explanation: "Competitive reaches the Same Top (Vmax unchanged, higher Km); Non-Competitive Drops the ceiling (Vmax reduced).",
        level: "HL",
      },
      {
        topic: "Chemiosmosis Proton Pockets [HL]",
        device: "Mito-IMS, Chloro-Lumen",
        explanation: "H⁺ builds up in the InterMembrane Space in mitochondria and the thylakoid Lumen in chloroplasts before flowing back through ATP synthase.",
        level: "HL",
      },
      {
        topic: "Action Potential Ion Flow",
        device: "Salty Banana → Na⁺ IN to spike, K⁺ OUT to recover",
        explanation: "Like a salty banana (lots of K⁺ inside, Na⁺ outside at rest): depolarization lets Na⁺ rush IN (+30 mV), repolarization lets K⁺ rush OUT (−70 mV).",
      },
      {
        topic: "Cholinergic Synapse Steps",
        device: "AP → Ca²⁺ → Fuse → Diff → Bind → Na⁺ → AChE",
        explanation: "Action Potential triggers Ca²⁺ influx → vesicles Fuse (exocytosis) → ACh Diffuses → Binds receptors → Na⁺ influx (EPSP) → AChE breaks down ACh.",
      },
    ],
    realWorld: [
      {
        title: "Statins & Cardiovascular Prevention [HL]",
        emoji: "💊",
        detail: "Atorvastatin and simvastatin mimic HMG-CoA and competitively inhibit HMG-CoA reductase in hepatocytes, reducing LDL cholesterol synthesis and lowering coronary occlusion risk.",
      },
      {
        title: "Lactose-Free Milk via Immobilized Lactase",
        emoji: "🥛",
        detail: "Passing milk over calcium-alginate beads holding immobilized lactase hydrolyses lactose into sweeter glucose and galactose without contaminating the milk with enzyme.",
      },
      {
        title: "FACE Forests & Global Carbon Budgets",
        emoji: "🌳",
        detail: "Free-Air CO₂ Enrichment (FACE) towers elevate atmospheric CO₂ to ~550 ppm inside mature forests to test whether nitrogen or water availability eventually limits carbon fixation.",
      },
      {
        title: "Hawaiian Bobtail Squid & Quorum Sensing [HL]",
        emoji: "🦑",
        detail: "Dense colonies of Vibrio fischeri inside the squid's ventral light organ activate bioluminescence at night via quorum sensing, camouflaging the squid's shadow from predators below.",
      },
      {
        title: "Dental Lidocaine & Neonicotinoid Pollinator Decline",
        emoji: "🐝",
        detail: "Lidocaine reversibly blocks voltage-gated Na⁺ channels to stop pain signals, whereas neonicotinoid pesticides irreversibly overstimulate insect cholinergic synapses, impairing bee navigation.",
      },
    ],
    videos: [
      {
        title: "IB Biology C1.1 Enzymes & Inhibition Kinetics (FA 2025)",
        channel: "Cheryl Hickman / Sirius Revision",
        url: "https://www.youtube.com/results?search_query=IB+Biology+C1.1+enzymes+inhibition+kinetics+2025",
      },
      {
        title: "IB Biology C1.2 & C1.3 Cellular Respiration & Photosynthesis HL",
        channel: "OSC / Alex Lee",
        url: "https://www.youtube.com/results?search_query=IB+Biology+C1.2+C1.3+cell+respiration+photosynthesis+chemiosmosis",
      },
      {
        title: "IB Biology C2.1 Chemical Signaling HL: GPCRs & Steroid Receptors",
        channel: "IB Biology Revision",
        url: "https://www.youtube.com/results?search_query=IB+Biology+C2.1+chemical+signaling+GPCR+epinephrine+oestradiol+HL",
      },
      {
        title: "IB Biology C2.2 Neural Signaling: Action Potentials & Synapses",
        channel: "Amoeba Sisters / Sirius Revision",
        url: "https://www.youtube.com/results?search_query=IB+Biology+C2.2+neural+signaling+action+potential+cholinergic+synapse",
      },
    ],
    formulas: [
      {
        name: "Initial enzyme reaction rate",
        formula: "{{v = ΔP / Δt}}  or  {{v = 1 / t}}",
        note: "Measure tangent gradient at t = 0 before substrate depletion or product inhibition occurs.",
      },
      {
        name: "Percentage enzyme inhibition",
        formula: "{{% inhibition = ((v_0 - v_i) / v_0) * 100}}",
        note: "v₀ = uninhibited rate; vᵢ = inhibited rate under identical temperature, pH, and [S].",
        level: "HL",
      },
      {
        name: "Chromatography retention factor",
        formula: "{{R_f = d_pigment / d_solvent}}",
        note: "Dimensionless ratio (0 < Rf < 1) measured from origin line to pigment spot centre and solvent front.",
      },
      {
        name: "Aerobic cell respiration",
        formula: "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O (+ ~32–36 ATP)",
        note: "Complete oxidation across cytosol and mitochondria; O₂ is the terminal electron acceptor.",
      },
      {
        name: "Anaerobic respiration (mammals vs yeast)",
        formula: "Mammals: C₆H₁₂O₆ → 2 C₃H₆O₃ (lactate) + 2 ATP; Yeast: C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂ + 2 ATP",
        note: "Cytosol only; regenerates NAD⁺ so glycolysis continues without O₂.",
      },
      {
        name: "Respirometer O₂ uptake rate",
        formula: "{{Rate = V / (t * m)}}  where  {{V = pi * r^2 * d}}",
        note: "KOH absorbs CO₂; r = capillary inner radius, d = meniscus shift, t = time, m = organism mass.",
      },
      {
        name: "Photosynthesis & Net Productivity",
        formula: "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂;  {{Net rate = Gross photosynthesis - Respiration}}",
        note: "At the light compensation point, gross photosynthesis equals respiration (net gas exchange = 0).",
      },
      {
        name: "Calvin cycle glucose budget [HL]",
        formula: "6 CO₂ + 18 ATP + 12 NADPH → 1 C₆H₁₂O₆ (2 net TP) + 18 ADP + 18 Pᵢ + 12 NADP⁺",
        note: "12 ATP + 12 NADPH reduce 12 GP → 12 TP; 6 ATP regenerate 6 RuBP from 10 TP.",
        level: "HL",
      },
      {
        name: "Axonal conduction velocity",
        formula: "{{v = d / t}}  (total pathway time: {{t_total = d / v + n * t_syn}})",
        note: "Speed in m s⁻¹; each chemical synapse adds ~0.5–1.0 ms synaptic delay.",
      },
      {
        name: "Postsynaptic membrane potential summation [HL]",
        formula: "{{V_m = V_rest + Σ(EPSP) + Σ(IPSP)}}",
        note: "Action potential fires iff Vm ≥ −55 mV (threshold); resting potential Vrest ≈ −70 mV.",
        level: "HL",
      },
    ],
  },
};
