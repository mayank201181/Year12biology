// ---------------------------------------------------------------------------
// Engagement extras for Theme B (1–2): Form & Function — Molecules & Cells
// Separate from audited exam content.
// ---------------------------------------------------------------------------
import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Flip a single **−OH group** on carbon-1 of glucose and the starch in your lunch turns into the wood of your desk. Fold a 20-letter amino-acid alphabet along hydrophobic and hydrophilic rules and it builds both oxygen-hauling haemoglobin and tendon-reinforcing collagen. And divide one giant blob into trillions of microscopic rooms and you bypass the brutal `6/L` geometric wall that stops any amoeba from growing as big as a whale.",
  didYouKnow: [
    "Roughly **20–40% of your resting daily ATP budget** (and up to **60% inside active neurons**) is consumed by a single membrane protein: the **Na⁺/K⁺-ATPase pump** exporting 3 Na⁺ and importing 2 K⁺ every cycle.",
    "Unfolding all ~300 million alveoli in a pair of human lungs spreads out roughly **70 m² of wafer-thin Type I pneumocyte surface area** — almost half a doubles tennis court folded inside your ribcage.",
    "Antarctic icefish living in **−1.8 °C** polar oceans pack up to twice as many **cis-polyunsaturated omega-3 fatty acids** into their neuronal membranes as tropical fish so their bilayers stay fluid instead of freezing solid.",
    "A single mature human red blood cell ejects its nucleus and mitochondria during maturation so it can pack roughly **270 million haemoglobin tetramers** inside a high-SA:V biconcave disc — carrying over a billion O₂ molecules at once without burning a single one.",
    "Because cellulose uses β-1,4 linkages with alternating 180° monomer flips, a strand of plant cellulose has a **tensile strength per unit mass comparable to steel**, yet is assembled purely from glucose and hydrogen bonds.",
    "Premature infants born before ~32 weeks of gestation often lack mature **Type II pneumocytes**, leaving alveoli with dangerously high surface tension; administering intratracheal **pulmonary surfactant** revolutionized neonatal survival worldwide.",
  ],
  activities: [
    {
      title: "Agar-Cube Phenolphthalein Diffusion Race (SA:V Lab)",
      emoji: "🧊",
      materials: [
        "Alkaline agar gel block tinted pink with phenolphthalein indicator",
        "Plastic ruler and sharp scalpel or knife",
        "100 cm³ beaker of 0.1 mol dm⁻³ dilute hydrochloric acid (or white vinegar)",
        "Stopwatch and paper towels",
      ],
      steps: [
        "Cut three exact agar cubes with side lengths **1.0 cm**, **2.0 cm**, and **3.0 cm**.",
        "Submerge all three cubes simultaneously in dilute acid for exactly **10 minutes**, gently swirling so fresh acid contacts every face.",
        "Remove the cubes, blot dry, slice each cleanly down the centre, and measure the **depth of colourless acid penetration (`d`)** and the width of the remaining **pink core (`L − 2d`)**.",
        "Compare the **percentage of total volume reached by diffusion** across all three cubes — notice that `d` is identical in every cube, yet the 3 cm cube remains mostly unpenetrated!",
      ],
      maths:
        "For each cube of side `L`, compute {{SA / V = 6 / L}} and percentage volume penetrated {{100 * (L^3 - (L - 2d)^3) / L^3}}. Doubling `L` halves `SA:V` and leaves a dramatically larger starved core.",
    },
    {
      title: "Beetroot Membrane Fluidity & Thermal Disruption Challenge",
      emoji: "🌡️",
      materials: [
        "Fresh raw beetroot cylinders (equal 1 cm cores washed until rinse water is clear)",
        "5 boiling tubes in water baths at 20 °C, 40 °C, 50 °C, 60 °C, and 70 °C (plus one room-temperature tube with 30% ethanol)",
        "Colorimeter (or smartphone light-meter app / white card colour scale)",
      ],
      steps: [
        "Place one washed beetroot core into each equilibrated tube of distilled water for **15 minutes**.",
        "Remove the cores gently and compare the intensity of purple **betalain** pigment leaked from the central vacuole into the surrounding water.",
        "Observe the sharp jump in pigment leakage above **50–60 °C** and in the **30% ethanol** solvent tube.",
        "Relate the sudden spike to **phospholipid kinetic energy** increasing bilayer fluidity AND **thermal denaturation of integral membrane proteins**, creating leaky pores.",
      ],
      maths:
        "Plot absorbance (arbitrary units) against temperature (°C) to identify the steep **inflection threshold** (~55 °C) where membrane integrity fails, and compare against the lipid-dissolving effect of non-polar ethanol.",
    },
    {
      title: "Paper-Strip R-Group Folding Model [HL]",
      emoji: "🧬",
      materials: [
        "2 cm × 30 cm strip of paper representing a linear polypeptide backbone (1° structure)",
        "Blue pen (hydrophilic polar R-groups), red pen (hydrophobic non-polar R-groups), and 2 paperclips (cysteine disulfide bridges)",
      ],
      steps: [
        "Label 12 evenly spaced positions along your paper strip as alternating blue (hydrophilic) and red (hydrophobic) R-groups, placing two 'Cys' marks at positions 3 and 10.",
        "Coil sections into a tight spiral (**α-helix**, 2° structure) stabilized by backbone folds.",
        "Now fold the strip as if dropped into **water** (soluble globular protein): tuck ALL red hydrophobic marks inside the core, leave ALL blue hydrophilic marks facing out, and clip positions 3 and 10 together with a paperclip (**disulfide bridge**, 3° structure).",
        "Finally, refold the same strip as an **integral transmembrane channel**: point red hydrophobic marks outward around the middle belt (facing lipid tails) and blue hydrophilic marks inward along the water-filled central pore!",
      ],
      maths:
        "With 20 standard amino acids, even a tiny 12-residue peptide has {{20^12 = 4.096 * 10^15}} possible primary sequences — demonstrating how R-group chemistry encodes virtually unlimited 3D shapes.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Four Levels of Protein Structure (1° → 2° → 3° → 4°) [HL]",
      svg:
        '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four levels of protein structure from primary amino acid chain through secondary alpha helix and beta sheet to tertiary folded domain and quaternary haemoglobin tetramer">' +
        '<rect x="0" y="0" width="640" height="240" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="23" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Protein Structural Hierarchy [HL]</text>' +
        // 1° box
        '<rect x="14" y="38" width="140" height="186" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="1.6"/>' +
        '<text x="84" y="57" text-anchor="middle" font-size="11" font-weight="700" fill="#5b21b6">1° Primary</text>' +
        '<line x1="30" y1="118" x2="138" y2="118" stroke="#7c3aed" stroke-width="3"/>' +
        '<circle cx="36" cy="118" r="9" fill="#c4b5fd" stroke="#6d28d9" stroke-width="1.4"/>' +
        '<circle cx="60" cy="118" r="9" fill="#a78bfa" stroke="#6d28d9" stroke-width="1.4"/>' +
        '<circle cx="84" cy="118" r="9" fill="#ddd6fe" stroke="#6d28d9" stroke-width="1.4"/>' +
        '<circle cx="108" cy="118" r="9" fill="#c4b5fd" stroke="#6d28d9" stroke-width="1.4"/>' +
        '<circle cx="132" cy="118" r="9" fill="#8b5cf6" stroke="#6d28d9" stroke-width="1.4"/>' +
        '<text x="84" y="168" text-anchor="middle" font-size="9.5" font-weight="700" fill="#334155">Amino-acid sequence</text>' +
        '<text x="84" y="184" text-anchor="middle" font-size="9" fill="#475569">Covalent peptide bonds</text>' +
        '<text x="84" y="198" text-anchor="middle" font-size="9" fill="#475569">(encoded by DNA)</text>' +
        // Arrow 1->2
        '<polygon points="158,124 168,130 158,136" fill="#64748b"/>' +
        // 2° box
        '<rect x="172" y="38" width="140" height="186" rx="10" fill="#ffffff" stroke="#0284c7" stroke-width="1.6"/>' +
        '<text x="242" y="57" text-anchor="middle" font-size="11" font-weight="700" fill="#0369a1">2° Secondary</text>' +
        '<path d="M196,82 C216,82 216,96 196,96 C216,96 216,110 196,110 C216,110 216,124 196,124" fill="none" stroke="#0284c7" stroke-width="3.5"/>' +
        '<text x="206" y="142" text-anchor="middle" font-size="9" font-weight="700" fill="#0369a1">α-helix</text>' +
        '<polyline points="246,84 260,96 274,84 288,96 300,84" fill="none" stroke="#0ea5e9" stroke-width="3"/>' +
        '<polyline points="246,112 260,124 274,112 288,124 300,112" fill="none" stroke="#0ea5e9" stroke-width="3"/>' +
        '<line x1="260" y1="98" x2="260" y2="120" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="2 2"/>' +
        '<line x1="288" y1="98" x2="288" y2="120" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="2 2"/>' +
        '<text x="274" y="142" text-anchor="middle" font-size="9" font-weight="700" fill="#0369a1">β-sheet</text>' +
        '<text x="242" y="172" text-anchor="middle" font-size="9.5" font-weight="700" fill="#334155">Backbone H-bonds</text>' +
        '<text x="242" y="187" text-anchor="middle" font-size="9" fill="#475569">C=O ··· H–N only</text>' +
        '<text x="242" y="201" text-anchor="middle" font-size="9" fill="#475569">(no R-groups)</text>' +
        // Arrow 2->3
        '<polygon points="316,124 326,130 316,136" fill="#64748b"/>' +
        // 3° box
        '<rect x="330" y="38" width="140" height="186" rx="10" fill="#ffffff" stroke="#059669" stroke-width="1.6"/>' +
        '<text x="400" y="57" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">3° Tertiary</text>' +
        '<path d="M356,122 C352,82 396,74 406,102 C416,130 448,118 440,90 C432,74 396,136 376,134" fill="none" stroke="#059669" stroke-width="4" stroke-linecap="round"/>' +
        '<line x1="366" y1="100" x2="404" y2="100" stroke="#d97706" stroke-width="2.2"/>' +
        '<text x="385" y="95" text-anchor="middle" font-size="8.5" font-weight="700" fill="#b45309">−S−S−</text>' +
        '<text x="400" y="166" text-anchor="middle" font-size="9.5" font-weight="700" fill="#334155">R-group 3D folding</text>' +
        '<text x="400" y="181" text-anchor="middle" font-size="9" fill="#475569">H-bond · ionic · S–S</text>' +
        '<text x="400" y="196" text-anchor="middle" font-size="9" fill="#475569">hydrophobic core</text>' +
        // Arrow 3->4
        '<polygon points="474,124 484,130 474,136" fill="#64748b"/>' +
        // 4° box
        '<rect x="488" y="38" width="138" height="186" rx="10" fill="#ffffff" stroke="#dc2626" stroke-width="1.6"/>' +
        '<text x="557" y="57" text-anchor="middle" font-size="11" font-weight="700" fill="#b91c1c">4° Quaternary</text>' +
        '<circle cx="536" cy="96" r="20" fill="#fecaca" stroke="#dc2626" stroke-width="1.6"/>' +
        '<circle cx="578" cy="96" r="20" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.6"/>' +
        '<circle cx="536" cy="132" r="20" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.6"/>' +
        '<circle cx="578" cy="132" r="20" fill="#fecaca" stroke="#dc2626" stroke-width="1.6"/>' +
        '<circle cx="536" cy="96" r="4.5" fill="#991b1b"/><circle cx="578" cy="96" r="4.5" fill="#991b1b"/>' +
        '<circle cx="536" cy="132" r="4.5" fill="#991b1b"/><circle cx="578" cy="132" r="4.5" fill="#991b1b"/>' +
        '<text x="557" y="170" text-anchor="middle" font-size="9.5" font-weight="700" fill="#334155">≥2 Subunits (± haem)</text>' +
        '<text x="557" y="185" text-anchor="middle" font-size="9" fill="#475569">Haemoglobin (2α + 2β)</text>' +
        '<text x="557" y="199" text-anchor="middle" font-size="9" fill="#475569">or Collagen (3 chains)</text>' +
        '</svg>',
      caption:
        "From peptide-bonded primary sequence (1°) to backbone-hydrogen-bonded α-helices/β-sheets (2°), R-group-stabilized tertiary 3D domains (3°), and multi-subunit quaternary assemblies such as haemoglobin (4°).",
    },
    {
      title: "Coupled Intestinal Glucose Absorption: Na⁺/K⁺ Pump + SGLT1 + GLUT2 [HL]",
      svg:
        '<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Intestinal epithelial cell showing apical SGLT1 sodium glucose cotransporter, basolateral Na K ATPase pump, and GLUT2 facilitated diffusion into blood capillary">' +
        '<rect x="0" y="0" width="640" height="245" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="23" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Secondary Active Transport in an Intestinal Enterocyte [HL]</text>' +
        // Gut lumen
        '<rect x="16" y="38" width="150" height="190" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>' +
        '<text x="91" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Gut Lumen</text>' +
        '<text x="91" y="75" text-anchor="middle" font-size="9.5" fill="#b45309">High [Na⁺]</text>' +
        '<text x="91" y="90" text-anchor="middle" font-size="9.5" fill="#b45309">Low [Glucose]</text>' +
        // Enterocyte cytoplasm
        '<rect x="184" y="38" width="272" height="190" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>' +
        '<text x="320" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#0369a1">Enterocyte Cytoplasm</text>' +
        '<text x="320" y="75" text-anchor="middle" font-size="9.5" fill="#0369a1">Low [Na⁺] · High [Glucose]</text>' +
        // Blood capillary
        '<rect x="474" y="38" width="150" height="190" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>' +
        '<text x="549" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">Blood Capillary</text>' +
        '<text x="549" y="75" text-anchor="middle" font-size="9.5" fill="#b91c1c">High [Na⁺]</text>' +
        '<text x="549" y="90" text-anchor="middle" font-size="9.5" fill="#b91c1c">Lower [Glucose]</text>' +
        // Apical SGLT1
        '<rect x="160" y="106" width="48" height="66" rx="10" fill="#7c3aed" stroke="#4c1d95" stroke-width="1.8"/>' +
        '<text x="184" y="143" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">SGLT1</text>' +
        '<line x1="122" y1="126" x2="250" y2="126" stroke="#b45309" stroke-width="2.2"/>' +
        '<polygon points="244,121 254,126 244,131" fill="#b45309"/>' +
        '<text x="118" y="122" text-anchor="end" font-size="9.5" font-weight="700" fill="#92400e">Na⁺ (down)</text>' +
        '<line x1="122" y1="154" x2="250" y2="154" stroke="#059669" stroke-width="2.2"/>' +
        '<polygon points="244,149 254,154 244,159" fill="#059669"/>' +
        '<text x="118" y="158" text-anchor="end" font-size="9.5" font-weight="700" fill="#047857">Glucose (uphill)</text>' +
        '<text x="184" y="188" text-anchor="middle" font-size="9" font-weight="700" fill="#4c1d95">Apical microvilli</text>' +
        // Basolateral Na/K pump
        '<rect x="432" y="92" width="54" height="58" rx="10" fill="#dc2626" stroke="#991b1b" stroke-width="1.8"/>' +
        '<text x="459" y="118" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">Na⁺/K⁺</text>' +
        '<text x="459" y="131" text-anchor="middle" font-size="8.5" font-weight="700" fill="#fecaca">ATPase</text>' +
        '<line x1="382" y1="108" x2="530" y2="108" stroke="#991b1b" stroke-width="2.2"/>' +
        '<polygon points="524,103 534,108 524,113" fill="#991b1b"/>' +
        '<text x="536" y="112" font-size="9.5" font-weight="700" fill="#991b1b">3 Na⁺</text>' +
        '<line x1="530" y1="134" x2="382" y2="134" stroke="#1d4ed8" stroke-width="2.2"/>' +
        '<polygon points="388,129 378,134 388,139" fill="#1d4ed8"/>' +
        '<text x="374" y="138" text-anchor="end" font-size="9.5" font-weight="700" fill="#1d4ed8">2 K⁺</text>' +
        '<text x="372" y="102" text-anchor="end" font-size="8.8" font-weight="700" fill="#b45309">1 ATP → ADP + Pᵢ</text>' +
        // Basolateral GLUT2
        '<rect x="432" y="166" width="54" height="44" rx="10" fill="#059669" stroke="#065f46" stroke-width="1.8"/>' +
        '<text x="459" y="192" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">GLUT2</text>' +
        '<line x1="382" y1="188" x2="530" y2="188" stroke="#047857" stroke-width="2.2"/>' +
        '<polygon points="524,183 534,188 524,193" fill="#047857"/>' +
        '<text x="536" y="192" font-size="9.5" font-weight="700" fill="#047857">Glucose (down)</text>' +
        '<text x="320" y="216" text-anchor="middle" font-size="9" fill="#334155">Basolateral ATP pumping maintains the apical Na⁺ gradient</text>' +
        '</svg>',
      caption:
        "Primary active transport by basolateral Na⁺/K⁺-ATPase keeps cytoplasmic [Na⁺] low, powering apical SGLT1 secondary active glucose uptake before passive GLUT2 exit into capillaries.",
    },
  ],
  history: {
    title: "How Scientists Falsified the Membrane 'Sandwich' (1925–1972)",
    story:
      "In 1925, Dutch physiologists Evert Gorter and François Grendel extracted the lipids from red blood cells and spread them into a single-molecule-thick film on water — discovering the lipid surface area was almost exactly **twice** the total surface area of the cells, proving membranes are a **lipid bilayer**. Ten years later, Hugh Davson and James Danielli proposed a 'protein–lipid–protein sandwich' model in which flat sheets of protein coated both outer surfaces of the bilayer. That sandwich model survived for decades until **freeze-fracture electron microscopy** split frozen membranes right down their hydrophobic midline and revealed scattered globular protein bumps embedded *inside* the core, while David Frye and Michael Edidin (1970) fused fluorescently tagged mouse and human cells and watched membrane proteins drift and intermix within 40 minutes. In **1972**, Jonathan Singer and Garth Nicolson synthesized these discoveries into the **Fluid Mosaic Model** — a triumph of falsification in modern cell biology.",
  },
};
