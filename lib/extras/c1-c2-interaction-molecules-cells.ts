import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Inside your body right now, catalase enzymes are tearing apart up to 40 million hydrogen peroxide molecules every second, trillions of rotary ATP synthase turbines are spinning at roughly 9,000 rpm across your mitochondrial cristae, and myelinated axons are firing all-or-nothing electrical spikes at over 100 metres per second. Theme C (1–2) reveals the molecular machinery that turns raw chemistry into instant cellular coordination.",
  didYouKnow: [
    "Every day, an average adult human synthesizes and hydrolyses roughly their own body mass (50–70 kg) in ATP — recycling each individual ATP molecule over 1,000 times per day.",
    "RuBisCO is the most abundant protein on Earth (making up up to 50% of soluble leaf protein) precisely because it is relatively slow (~3–10 CO₂ fixed per second) and plants must pack chloroplasts with enormous quantities of it.",
    "The Hawaiian bobtail squid (Euprymna scolopes) expels ~95% of its glowing Vibrio fischeri bacteria every dawn; by dusk, the remaining cells multiply back above the quorum-sensing threshold so the squid glows again for night hunting.",
    "Giant squid (Architeuthis and Loligo) evolved unmyelinated motor axons up to 1 mm wide — thick enough to see with the naked eye — to lower internal electrical resistance and trigger jet-propulsion escapes rapidly; Alan Hodgkin and Andrew Huxley used them to crack the action potential.",
    "Brown adipose tissue in newborn babies and hibernating bears expresses thermogenin (UCP1), an intentional proton leak in the inner mitochondrial membrane that uncouples chemiosmosis so fuel oxidation produces life-saving warmth instead of ATP.",
    "A single puff of pufferfish tetrodotoxin (TTX) selectively plugs voltage-gated Na⁺ channels just like an ultra-potent local anaesthetic — demonstrating how dependent human breathing and consciousness are on sodium influx.",
  ],
  activities: [
    {
      title: "Potato Catalase Initial Rate & Temperature Assay",
      emoji: "🥔",
      materials: [
        "Fresh raw potato cubes (source of intracellular catalase)",
        "3% hydrogen peroxide (H₂O₂) solution",
        "Measuring cylinder, boiling tube, delivery tube & inverted water-filled burette (or gas syringe)",
        "Water baths at 10 °C, 25 °C, 37 °C, 50 °C, and 70 °C + stopwatch",
      ],
      steps: [
        "Pre-equilibrate 10 cm³ of 3% H₂O₂ and equal-mass potato cubes (e.g., 2.0 g cut identically) at each target temperature for 5 minutes.",
        "Drop the potato into the peroxide, seal immediately, and record the volume of O₂ gas evolved every 10 seconds for 60 seconds.",
        "Plot volume of O₂ against time for each temperature and measure the steepest tangent gradient over the first 20–30 s (initial rate, before substrate depletes).",
        "Repeat with a boiled potato control (80 °C for 5 min) to verify irreversible thermal denaturation.",
      ],
      maths:
        "Calculate initial rate {{v = ΔV / Δt}} in {{cm^3 min^(-1)}} and plot initial rate vs temperature to identify the optimum and denaturation drop-off.",
    },
    {
      title: "Spinach Leaf Pigment Chromatography (Rf Lab)",
      emoji: "🍃",
      materials: [
        "Fresh spinach or dark green leaves + mortar & pestle",
        "Propanone (acetone) or ethanol extraction solvent (well-ventilated area)",
        "Chromatography paper strip or TLC silica plate + pencil & ruler",
        "Sealed glass jar with chromatography mobile phase (e.g., petroleum ether : propanone 9:1)",
      ],
      steps: [
        "Draw a light pencil origin line 1.5 cm from the bottom of the paper strip (never use ink, which dissolves!).",
        "Grind leaves with a few drops of solvent to form a concentrated dark-green pigment extract and spot repeatedly onto the pencil line, drying between drops.",
        "Suspend the strip inside the jar so the solvent sits BELOW the pigment spot; cap tightly and wait until the solvent front climbs near the top.",
        "Mark the solvent front immediately with pencil, dry the chromatogram, and measure from the origin line to the centre of each coloured band (β-carotene orange, xanthophyll yellow, chlorophyll a blue-green, chlorophyll b olive-green).",
      ],
      maths:
        "Compute each dimensionless retention factor {{R_f = d_pigment / d_solvent}} (always between 0 and 1) and rank pigments from least polar (highest {{R_f}}) to most polar (lowest {{R_f}}).",
    },
    {
      title: "Ruler-Drop Neural Reaction & Conduction Lab",
      emoji: "⚡",
      materials: [
        "30 cm ruler",
        "Partner to release the ruler without warning",
        "Calculator + data table for 10 trials",
      ],
      steps: [
        "Rest your forearm flat on a desk with thumb and index finger hovering 2 cm apart at the 0 cm mark of a vertical ruler held by your partner.",
        "Your partner drops the ruler at an unpredictable moment; pinch it shut as fast as possible and record the distance d (in cm) fallen.",
        "Repeat 10 times to calculate mean reaction distance and compare visual cue vs auditory cue (eyes closed, partner says 'Go').",
        "Estimate what fraction of your ~180–220 ms reaction time is spent on myelinated axonal conduction (~15–20 ms) versus central synaptic integration across dozens of cortical and spinal synapses!",
      ],
      maths:
        "Convert fall distance {{d}} (in metres) to reaction time using {{t = sqrt(2d / 9.81)}} seconds, then multiply by 1000 for milliseconds.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Simple Respirometer & Thermobarometer Control (SL)",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 230" role="img" aria-label="Respirometer apparatus showing living seeds with KOH pellets connected via a capillary manometer to a glass-bead thermobarometer control">
  <rect x="0" y="0" width="600" height="230" fill="#ffffff" rx="8"/>
  <text x="300" y="21" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#112416" text-anchor="middle">Differential Respirometer Setup (C1.2)</text>
  <!-- Experimental tube -->
  <rect x="48" y="48" width="120" height="148" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" rx="14"/>
  <text x="108" y="66" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#14532d" text-anchor="middle">Experimental Tube</text>
  <!-- Wire gauze -->
  <line x1="54" y1="142" x2="162" y2="142" stroke="#64748b" stroke-width="2" stroke-dasharray="4 2"/>
  <!-- Germinating seeds -->
  <ellipse cx="86" cy="126" rx="11" ry="7" fill="#15803d"/>
  <ellipse cx="110" cy="124" rx="11" ry="7" fill="#16a34a"/>
  <ellipse cx="132" cy="127" rx="11" ry="7" fill="#15803d"/>
  <text x="108" y="108" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#14532d" text-anchor="middle">Germinating seeds</text>
  <!-- KOH pellets -->
  <rect x="64" y="156" width="88" height="28" fill="#fef3c7" stroke="#d97706" stroke-width="1.2" rx="6"/>
  <text x="108" y="174" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#92400e" text-anchor="middle">KOH (absorbs CO₂)</text>

  <!-- Control tube -->
  <rect x="432" y="48" width="120" height="148" fill="#f8fafc" stroke="#64748b" stroke-width="2" rx="14"/>
  <text x="492" y="66" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#334155" text-anchor="middle">Control Tube</text>
  <line x1="438" y1="142" x2="546" y2="142" stroke="#64748b" stroke-width="2" stroke-dasharray="4 2"/>
  <!-- Glass beads -->
  <circle cx="472" cy="126" r="8" fill="#cbd5e1" stroke="#64748b" stroke-width="1.2"/>
  <circle cx="494" cy="124" r="8" fill="#cbd5e1" stroke="#64748b" stroke-width="1.2"/>
  <circle cx="516" cy="126" r="8" fill="#cbd5e1" stroke="#64748b" stroke-width="1.2"/>
  <text x="492" y="108" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#334155" text-anchor="middle">Inert glass beads</text>
  <rect x="448" y="156" width="88" height="28" fill="#fef3c7" stroke="#d97706" stroke-width="1.2" rx="6"/>
  <text x="492" y="174" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#92400e" text-anchor="middle">KOH pellets</text>

  <!-- Connecting U-tube manometer -->
  <path d="M 108 48 L 108 36 L 238 36 L 238 164 C 238 184, 362 184, 362 164 L 362 36 L 492 36 L 492 48" fill="none" stroke="#334155" stroke-width="3"/>
  <!-- Coloured manometer fluid (higher on left due to O2 uptake) -->
  <path d="M 238 98 L 238 164 C 238 184, 362 184, 362 164 L 362 134" fill="none" stroke="#0284c7" stroke-width="6"/>
  <!-- Scale ticks -->
  <line x1="252" y1="98" x2="262" y2="98" stroke="#c2410c" stroke-width="1.8"/>
  <line x1="252" y1="134" x2="262" y2="134" stroke="#64748b" stroke-width="1.5"/>
  <line x1="257" y1="132" x2="257" y2="100" stroke="#c2410c" stroke-width="1.8"/>
  <polygon points="257,98 253,105 261,105" fill="#c2410c"/>
  <text x="300" y="114" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#c2410c" text-anchor="middle">Fluid rises</text>
  <text x="300" y="128" font-family="system-ui,sans-serif" font-size="9.5" fill="#0369a1" text-anchor="middle">toward seeds</text>
  <text x="300" y="142" font-family="system-ui,sans-serif" font-size="9.5" fill="#0369a1" text-anchor="middle">(O₂ uptake = ΔV)</text>
  <text x="300" y="214" font-family="system-ui,sans-serif" font-size="10" fill="#475569" text-anchor="middle">Both tubes immersed in a constant-temperature water bath</text>
</svg>`,
      caption:
        "KOH absorbs all respired CO₂ so reduced pressure in the experimental tube pulls manometer fluid upward by a volume equal to O₂ consumed, while the glass-bead control cancels temperature/pressure drift.",
    },
    {
      title: "Saltatory Conduction Along a Myelinated Axon (SL)",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" role="img" aria-label="Myelinated axon diagram showing Schwann cell myelin internodes, nodes of Ranvier with voltage-gated sodium influx, and leaping saltatory local currents">
  <rect x="0" y="0" width="600" height="200" fill="#ffffff" rx="8"/>
  <text x="300" y="21" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#112416" text-anchor="middle">Saltatory Conduction Between Nodes of Ranvier (C2.2)</text>
  <!-- Central axon cylinder -->
  <rect x="26" y="92" width="548" height="36" fill="#fef3c7" stroke="#b45309" stroke-width="1.6" rx="4"/>
  <!-- Myelin sheaths -->
  <rect x="44" y="76" width="136" height="68" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="16"/>
  <text x="112" y="114" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">Myelin sheath</text>
  <rect x="232" y="76" width="136" height="68" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="16"/>
  <text x="300" y="114" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">Myelin sheath</text>
  <rect x="420" y="76" width="136" height="68" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="16"/>
  <text x="488" y="114" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">Myelin sheath</text>
  <!-- Node 1 (Active depolarization) -->
  <text x="206" y="114" font-family="system-ui,sans-serif" font-size="10.5" font-weight="800" fill="#c2410c" text-anchor="middle">+30</text>
  <line x1="206" y1="62" x2="206" y2="90" stroke="#c2410c" stroke-width="2.2"/>
  <polygon points="206,93 202,85 210,85" fill="#c2410c"/>
  <text x="206" y="54" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#c2410c" text-anchor="middle">Na⁺ influx</text>
  <text x="206" y="164" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#14532d" text-anchor="middle">Node of Ranvier 1</text>
  <text x="206" y="177" font-family="system-ui,sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">(Depolarizing)</text>
  <!-- Node 2 (Next target) -->
  <text x="394" y="114" font-family="system-ui,sans-serif" font-size="10.5" font-weight="800" fill="#15803d" text-anchor="middle">−55</text>
  <line x1="394" y1="62" x2="394" y2="90" stroke="#16a34a" stroke-width="2.2"/>
  <polygon points="394,93 390,85 398,85" fill="#16a34a"/>
  <text x="394" y="54" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">Next Na⁺ spike</text>
  <text x="394" y="164" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#14532d" text-anchor="middle">Node of Ranvier 2</text>
  <text x="394" y="177" font-family="system-ui,sans-serif" font-size="9" fill="#15803d" text-anchor="middle">(Reaches threshold)</text>
  <!-- Leaping saltatory arc -->
  <path d="M 218 86 Q 300 32 380 86" fill="none" stroke="#16a34a" stroke-width="2.6" stroke-dasharray="6 3"/>
  <polygon points="384,88 375,86 380,79" fill="#16a34a"/>
  <text x="300" y="48" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">Fast saltatory jump (50–120 m s⁻¹)</text>
</svg>`,
      caption:
        "Lipid myelin prevents transmembrane ion flow along internodes, concentrating voltage-gated Na⁺ and K⁺ channels at nodes of Ranvier so depolarization leaps rapidly forward.",
    },
  ],
  history: {
    title: "Otto Loewi's Midnight Dream & the Discovery of Acetylcholine (1921)",
    story:
      "In the early 1920s, physiologists were locked in a bitter debate: do neurons pass messages across synapses by direct electrical sparks, or by releasing chemical molecules? Austrian-German pharmacologist Otto Loewi woke from a vivid dream on Easter Eve 1921 with a simple experimental design — jotted down unreadable notes in the dark — and couldn't decipher them the next morning. Remarkably, the exact same dream returned the very next night at 3 a.m.! Loewi ran straight to his laboratory in Graz, dissected two beating frog hearts into separate glass chambers filled with Ringer's saline, and electrically stimulated the vagus nerve attached only to Heart 1, slowing its beat. He then pipetted saline from Heart 1's bath into Heart 2 (whose nerves had been completely removed). Within seconds, Heart 2 slowed down identically! A soluble chemical he called 'Vagusstoff' — soon identified as **acetylcholine** — had carried the signal across the fluid gap, proving chemical synaptic transmission and earning Loewi the 1936 Nobel Prize in Physiology or Medicine.",
  },
};
