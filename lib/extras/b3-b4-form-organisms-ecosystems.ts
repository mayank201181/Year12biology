import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "How does a 110-metre coastal redwood haul hundreds of litres of water into the sky with zero moving parts, while a 100-metre sprinter ramps oxygen delivery 18-fold in seconds and Singapore's Sungei Buloh mangroves breathe through snorkel roots stuck in oxygen-free mud? Every single one is a masterclass in **form matching physical law**.",
  didYouKnow: [
    "If you laid every single blood capillary in one adult human end to end, the network would stretch roughly **100 000 km**—more than twice around Earth's equator—yet capillary walls are just one endothelial cell (~1 μm) thick.",
    "**Titin**, the elastic sarcomere spring linking thick myosin filaments to Z-lines, is the largest known protein in nature: a single human titin polypeptide contains over **34 000 amino acids** and has a molecular mass near 3.8 megadaltons.",
    "A single **red blood cell** packs roughly **270 million haemoglobin tetramers**, meaning one drop of blood carries over a billion oxygen-binding haem sites—multiplying blood's O₂ capacity ~65-fold above dissolved plasma alone.",
    "A **coastal redwood** generates negative xylem pressures down to **−1.5 MPa** (−15 atmospheres of tension); if an air bubble breaks that hydrogen-bonded water column (**cavitation**), adjacent bordered pits seal off the embolized vessel like submarine bulkheads.",
    "During Himalayan migration, **bar-headed geese** cruise above Mount Everest (~8 800 m) using a single amino-acid mutation in haemoglobin that shifts their dissociation curve left, letting them load oxygen where human climbers need bottled tanks.",
    "Severed **aphid stylets** embedded inside a single willow phloem sieve tube can continue bleeding pure sucrose-rich sap for over 24 hours—providing direct visual proof of positive Münch hydrostatic pressure.",
  ],
  activities: [
    {
      title: "Resting vs Sprint Ventilation Rate Lab",
      emoji: "🫁",
      materials: [
        "Stopwatch or phone timer",
        "Optional simple water-displacement spirometer or peak-flow / volume bag",
        "Notebook & calculator",
      ],
      steps: [
        "Sit calmly for 2 minutes and count the exact number of complete breaths you take in **30 seconds**; multiply by 2 to record resting breathing rate {{f_rest}}.",
        "Perform 60 seconds of brisk star jumps or stair stepping, then immediately count complete breaths over the next **30 seconds** and double it for {{f_ex}}.",
        "Using typical resting tidal volume ({{0.50 dm^3}}) and moderate-exercise tidal volume ({{1.50 dm^3}}), compute your resting and exercise pulmonary ventilation rates.",
        "Palpate the sides of your lower ribcage during a forced exhalation to feel your internal intercostal and abdominal wall muscles contract actively.",
      ],
      maths:
        "Use {{V_E = V_T * f}} for both states and compute the fold increase {{V_(E,ex) / V_(E,rest)}}. Notice that ventilation climbs dramatically because **both** tidal volume and breathing frequency rise multiplicatively.",
    },
    {
      title: "Nail-Varnish Stomatal Density Transect",
      emoji: "🍃",
      materials: [
        "Clear nail varnish & transparent sticky tape",
        "Leaves from a sunny exposed shrub vs a shaded indoor plant (or waxy xerophyte)",
        "Compound light microscope & stage micrometer",
      ],
      steps: [
        "Paint a 1 cm² patch of clear nail varnish onto the **lower epidermis** (and a second patch onto the **upper epidermis**) of each leaf and let dry for 5 minutes.",
        "Press transparent tape firmly over each dry patch, peel gently to lift the stomatal cast, and mount flat on a microscope slide.",
        "Measure the field-of-view diameter {{d}} with a stage micrometer at ×400 magnification and calculate field area {{A = pi * (d/2)^2}} in {{mm^2}}.",
        "Count stomata in 5 random fields per surface, find the mean count, and compare stomatal density across sun vs shade and upper vs lower surfaces.",
      ],
      maths:
        "Stomatal density = {{(mean count) / (pi * r^2)}} in stomata mm⁻². Discuss why xerophytes and sun leaves concentrate stomata on the shaded lower epidermis or inside sunken pits.",
    },
    {
      title: "Forearm Antagonistic Lever Audit",
      emoji: "💪",
      materials: [
        "1 kg water bottle or textbook",
        "Ruler or tape measure",
      ],
      steps: [
        "Hold the 1 kg mass in your palm with your elbow bent at 90° and gently palpate your upper arm: feel the anterior **biceps brachii** bulge hard while the posterior **triceps** remains soft.",
        "Press your palm firmly downward onto a desk while keeping your elbow bent: notice the biceps softens instantly while the **triceps** tightens hard—proving antagonistic reciprocity.",
        "Measure the distance from your elbow hinge pivot to your biceps tendon insertion (~4 cm) versus the distance from your elbow to the mass in your palm (~32 cm).",
      ],
      maths:
        "Because the effort arm (~4 cm) is ~8× shorter than the load arm (~32 cm), your biceps must pull with roughly **8× the weight of the book** (~80 N for 1 kg)—trading force for rapid hand speed and wide range of motion.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Capillary Ultrafiltration, Osmotic Reabsorption & Lymphatic Drainage [HL]",
      svg: `<svg viewBox="0 0 680 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Systemic capillary showing arteriolar ultrafiltration, venular osmotic reabsorption, and lymphatic drainage of excess tissue fluid">
  <rect x="0" y="0" width="680" height="235" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="340" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Tissue Fluid Formation &amp; Lymphatic Return (Starling Pressures)</text>
  <!-- Capillary tube -->
  <rect x="64" y="54" width="552" height="52" rx="22" fill="#fee2e2" stroke="#dc2626" stroke-width="2.2"/>
  <!-- Gradient indicator arteriolar -> venular -->
  <rect x="340" y="56" width="274" height="48" rx="20" fill="#dbeafe" opacity="0.72"/>
  <text x="150" y="75" text-anchor="middle" font-size="10.5" font-weight="700" fill="#991b1b">Arteriolar End</text>
  <text x="150" y="92" text-anchor="middle" font-size="9.5" fill="#991b1b">P_hydro = 4.3 kPa &gt; P_onc = 3.3 kPa</text>
  <text x="530" y="75" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e40af">Venular End</text>
  <text x="530" y="92" text-anchor="middle" font-size="9.5" fill="#1e40af">P_hydro = 1.6 kPa &lt; P_onc = 3.3 kPa</text>
  <!-- Blood flow arrow -->
  <line x1="278" y1="80" x2="394" y2="80" stroke="#112416" stroke-width="2.2"/>
  <polygon points="390,75 402,80 390,85" fill="#112416"/>
  <!-- Tissue cells -->
  <rect x="195" y="154" width="84" height="46" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.6"/>
  <text x="237" y="181" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Tissue Cells</text>
  <rect x="298" y="154" width="84" height="46" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.6"/>
  <text x="340" y="181" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Tissue Cells</text>
  <!-- Outward filtration arrows -->
  <line x1="150" y1="108" x2="150" y2="148" stroke="#dc2626" stroke-width="2.4"/>
  <polygon points="145,144 150,155 155,144" fill="#dc2626"/>
  <text x="148" y="176" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">Ultrafiltration OUT</text>
  <text x="148" y="190" text-anchor="middle" font-size="9" fill="var(--ink-2)">(+1.0 kPa net: H₂O, O₂, glucose)</text>
  <!-- Inward reabsorption arrow (~90%) -->
  <line x1="510" y1="150" x2="510" y2="112" stroke="#0284c7" stroke-width="2.4"/>
  <polygon points="505,116 510,106 515,116" fill="#0284c7"/>
  <text x="512" y="170" text-anchor="middle" font-size="10" font-weight="700" fill="#0284c7">~90% Osmosis IN</text>
  <text x="512" y="184" text-anchor="middle" font-size="9" fill="var(--ink-2)">(−1.7 kPa net return)</text>
  <!-- Lymphatic capillary (~10%) -->
  <path d="M404 206 C428 206, 456 206, 634 206" fill="none" stroke="#16a34a" stroke-width="12" stroke-linecap="round" opacity="0.25"/>
  <path d="M404 206 L634 206" fill="none" stroke="#16a34a" stroke-width="2.2"/>
  <polygon points="628,201 640,206 628,211" fill="#16a34a"/>
  <text x="520" y="224" text-anchor="middle" font-size="9.8" font-weight="700" fill="#15803d">~10% excess fluid + leaked proteins → Lymphatic Capillary → Vena Cava</text>
</svg>`,
      caption:
        "Plasma albumin remains trapped inside capillary walls, maintaining steady ~3.3 kPa oncotic pressure while blood hydrostatic pressure falls along the vessel—driving arteriolar filtration out and venular osmotic reabsorption in.",
    },
    {
      title: "Antagonistic Biceps–Triceps Pair & Synovial Elbow Hinge Joint [HL]",
      svg: `<svg viewBox="0 0 680 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Human elbow synovial hinge joint showing humerus, radius, ulna, articular cartilage, synovial cavity, ligament, tendons, contracting biceps flexor and relaxing triceps extensor">
  <rect x="0" y="0" width="680" height="235" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="340" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Antagonistic Muscle Pair &amp; Synovial Hinge Joint (Elbow Flexion)</text>
  <!-- Humerus (upper arm bone) -->
  <rect x="130" y="42" width="28" height="122" rx="12" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
  <text x="100" y="96" text-anchor="end" font-size="10.5" font-weight="700" fill="var(--ink)">Humerus</text>
  <!-- Radius / Ulna (forearm bones angled slightly up) -->
  <rect x="148" y="156" width="210" height="24" rx="10" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
  <text x="276" y="198" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Radius &amp; Ulna (Forearm Lever)</text>
  <!-- Articular cartilage & Synovial joint capsule -->
  <circle cx="148" cy="166" r="22" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,2"/>
  <path d="M134 156 Q148 148 160 160" fill="none" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
  <text x="90" y="172" text-anchor="end" font-size="9.5" font-weight="700" fill="#0284c7">Synovial Fluid &amp;</text>
  <text x="90" y="185" text-anchor="end" font-size="9.5" font-weight="700" fill="#0284c7">Hyaline Cartilage</text>
  <!-- Ligament (bone to bone) -->
  <line x1="130" y1="150" x2="156" y2="180" stroke="#7c3aed" stroke-width="3.2"/>
  <text x="128" y="212" text-anchor="middle" font-size="9.5" font-weight="700" fill="#7c3aed">Ligament (bone→bone)</text>
  <!-- Biceps (contracted flexor) -->
  <path d="M156 56 C198 70, 206 116, 178 134 C166 116, 162 84, 156 56 Z" fill="#dc2626" opacity="0.82" stroke="#991b1b" stroke-width="1.8"/>
  <!-- Biceps tendon to radius -->
  <line x1="178" y1="134" x2="210" y2="156" stroke="#d97706" stroke-width="3.4"/>
  <text x="272" y="88" font-size="10.5" font-weight="700" fill="#dc2626">Biceps (Flexor): CONTRACTS</text>
  <text x="272" y="102" font-size="9.2" fill="var(--ink-2)">Pulls forearm upward via inelastic tendon</text>
  <text x="268" y="142" font-size="9.5" font-weight="700" fill="#d97706">Tendon (muscle→bone)</text>
  <!-- Triceps (relaxed extensor) -->
  <path d="M128 54 C106 86, 108 124, 128 156" fill="none" stroke="#16a34a" stroke-width="9" stroke-linecap="round" opacity="0.65"/>
  <text x="518" y="88" text-anchor="middle" font-size="10.5" font-weight="700" fill="#15803d">Triceps (Extensor): RELAXES</text>
  <text x="518" y="103" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Stretched passively by biceps pull;</text>
  <text x="518" y="117" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">contracts later to straighten elbow</text>
  <!-- Flexion motion arc -->
  <path d="M368 164 Q388 134 366 108" fill="none" stroke="#ea580c" stroke-width="2.4"/>
  <polygon points="362,114 364,102 373,110" fill="#ea580c"/>
  <text x="414" y="138" font-size="10" font-weight="700" fill="#ea580c">Flexion</text>
</svg>`,
      caption:
        "Because skeletal muscle fibres can only exert pulling force, biceps flexion simultaneously stretches the relaxed triceps; during elbow extension, the roles reverse.",
    },
  ],
  history: {
    title: "22 May 1954 — Two Unrelated Huxleys Solve How Muscles Move",
    story:
      "For over a century, physiologists assumed muscle contracted because long protein fibres curled up like tiny heated rubber bands. Then, on **22 May 1954**, two back-to-back papers in *Nature* overturned the entire field. **Andrew Huxley** (using an interference microscope he built by hand in Cambridge) and **Hugh Huxley** with **Jean Hanson** (using cutting-edge electron microscopy at MIT)—no close relation between the two Huxleys!—independently published the exact same startling measurement: as a striated muscle shortened dramatically, its dark **A-band stayed 100% unchanged in width** while the light **I-band and H-zone shrank**. Neither actin nor myosin was folding up at all; they were **sliding** past one another like molecular pistons—giving birth to the **sliding-filament theory** still taught in every IB HL Biology classroom today.",
  },
};
