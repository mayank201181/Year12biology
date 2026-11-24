import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Every day your two kidneys filter roughly **180 litres** of blood plasma — enough to fill an entire bathtub — yet carefully recover 99% of that water down to the millilitre. Across the same biological principle of feedback and continuity, a single drought in 1977 reshaped the beaks of Galápagos finches within one generation, and clearing just one quarter of the Amazon rainforest could flip the remaining forest into dry savanna. Theme D (Levels 3–4) reveals how feedback loops, genes, and selection govern life from a single nephron to the whole biosphere.",
  didYouKnow: [
    "Your kidneys filter about **180 dm³** of plasma every 24 hours, yet healthy adults excrete only ~1.5 dm³ of urine — meaning **99.2%** of glomerular filtrate is reabsorbed along the PCT, Loop of Henle, and collecting duct.",
    "The North American desert **kangaroo rat** (*Dipodomys*) has extraordinarily long Loops of Henle extending deep into its renal medulla, concentrating urine to over **5,000 mOsm kg⁻¹** so it survives its entire life without drinking liquid water — relying solely on metabolic water from cellular respiration.",
    "In populations where autosomal recessive cystic fibrosis affects roughly **1 in 2,500** newborns ({{q^2 = 0.0004}}), Hardy–Weinberg equilibrium predicts almost **1 in 25** healthy adults ({{2pq ≈ 0.0392}}) are silent heterozygous carriers — nearly **100× more carriers** than affected individuals.",
    "Male fruit flies (*Drosophila melanogaster*) perform **zero crossing over** during meiosis, which helped early geneticists cleanly separate linked-gene recombination in females from complete linkage in males.",
    "Amazon rainforest trees transpire roughly **20 billion tonnes of water vapour** into the atmosphere every single day — creating 'flying rivers' of rainfall that exceed the daily freshwater discharge of the Amazon River itself.",
    "Fresh polar snow and sea ice reflect up to **85%** of incoming sunlight (albedo ~0.85), whereas exposed dark Arctic ocean water reflects only **6%** (albedo ~0.06) — absorbing more than **six times** as much solar energy per square metre.",
  ],
  activities: [
    {
      title: "Bean-Bag Hardy–Weinberg & Genetic Drift Lab",
      emoji: "🫘",
      materials: [
        "100 dried beans: 60 white (dominant allele A) and 40 dark (recessive allele a)",
        "Opaque cloth bag or cup",
        "Notebook & calculator for χ² check",
      ],
      steps: [
        "Mix the 60 white (`p = 0.60`) and 40 dark (`q = 0.40`) beans thoroughly in the bag.",
        "Draw pairs of beans **with replacement** 50 times to simulate 50 random fertilisations in a large population, tallying `AA`, `Aa`, and `aa`.",
        "Compare your observed counts to Hardy–Weinberg expectations (`AA = 18`, `Aa = 24`, `aa = 8`).",
        "Now simulate a **founder effect**: blindly pull just **6 beans** (3 founders) into a second cup and recalculate `p` and `q` — repeat 5 times to watch random genetic drift diverge wildly from 0.60 / 0.40!",
      ],
      maths:
        "Expected genotypes under HWE: {{p^2 = 0.36}} (18 AA), {{2pq = 0.48}} (24 Aa), {{q^2 = 0.16}} (8 aa). Compute {{χ^2 = Σ((O - E)^2 / E)}} with {{df = 1}} (critical value `3.841` at `p = 0.05`).",
    },
    {
      title: "Corn-Kernel Dihybrid χ² Goodness-of-Fit Investigation",
      emoji: "🌽",
      materials: [
        "Genetic maize ear from an F₂ dihybrid cross (purple/yellow × smooth/shrunken) or photo printout",
        "Push-pin marker for starting row",
        "Tally table & calculator",
      ],
      steps: [
        "Count at least 160 kernels across consecutive rows, sorting into the 4 phenotypes: Purple Smooth, Purple Shrunken, Yellow Smooth, Yellow Shrunken.",
        "Calculate expected counts `E` for an unlinked **9 : 3 : 3 : 1** ratio (divide total `N` by 16, then multiply by 9, 3, 3, and 1).",
        "Compute `χ² = Σ(O − E)² / E` and compare against the `df = 3`, `p = 0.05` critical value of **7.815**.",
        "If `χ² > 7.815`, inspect whether parental phenotypes vastly outnumber recombinants (indicating chromosomal linkage between the aleurone-colour and endosperm-starch loci!).",
      ],
      maths:
        "For total `N` kernels: {{E_1 = (9/16)N}}, {{E_2 = (3/16)N}}, {{E_3 = (3/16)N}}, {{E_4 = (1/16)N}}; {{df = 4 - 1 = 3}}; reject `H₀` when {{χ^2 > 7.815}}.",
    },
    {
      title: "Ice–Albedo Lamp & Sealed Jar Mesocosm",
      emoji: "🌡️",
      materials: [
        "Two identical glass beakers: one lined with white paper (ice, high albedo) and one with matte black paper (dark ocean, low albedo)",
        "Desk lamp and two digital thermometers",
        "Optional: sealed transparent jar with pond water, *Elodea*, sediment, and a single aquatic snail (mesocosm)",
      ],
      steps: [
        "Position both paper-lined beakers at the exact same distance (25 cm) from the desk lamp and record initial air temperature.",
        "Switch on the lamp and log temperatures every 2 minutes for 14 minutes.",
        "Plot both warming curves on one graph and compare the steady-state temperature difference caused solely by surface albedo.",
        "For the sealed mesocosm, place near indirect sunlight and observe dissolved oxygen bubbles and stability over 4 weeks without adding food or opening the lid.",
      ],
      maths:
        "Absorbed solar flux {{I_abs = I_in * (1 - a)}}. Dropping surface albedo from {{a = 0.85}} to {{a = 0.06}} raises absorbed energy fraction from {{15%}} to {{94%}} (a **6.3×** jump).",
    },
  ],
  bonusDiagrams: [
    {
      title: "Blood Glucose Negative Feedback Loop (Islets of Langerhans)",
      svg:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 280" role="img" aria-label="Circular negative feedback diagram of blood glucose regulation showing pancreatic beta cells secreting insulin for glycogenesis and alpha cells secreting glucagon for glycogenolysis">' +
        '<rect x="0" y="0" width="640" height="280" fill="#ffffff" rx="10"/>' +
        '<text x="320" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Antagonistic Negative Feedback: Blood Glucose Homeostasis (D3.3)</text>' +
        '<rect x="235" y="114" width="170" height="48" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="10"/>' +
        '<text x="320" y="135" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">Homeostatic Setpoint</text>' +
        '<text x="320" y="151" text-anchor="middle" font-size="10" fill="#14532d">Blood glucose ≈ 5.0 mmol dm⁻³</text>' +
        '<rect x="26" y="42" width="180" height="44" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8" rx="8"/>' +
        '<text x="116" y="61" text-anchor="middle" font-size="10" font-weight="700" fill="#991b1b">High Blood Glucose (Meal)</text>' +
        '<text x="116" y="75" text-anchor="middle" font-size="9" fill="#7f1d1d">Detected by Pancreatic β Cells</text>' +
        '<rect x="434" y="42" width="180" height="44" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8" rx="8"/>' +
        '<text x="524" y="61" text-anchor="middle" font-size="10" font-weight="700" fill="#0369a1">Insulin Secreted into Blood</text>' +
        '<text x="524" y="75" text-anchor="middle" font-size="9" fill="#0c4a6e">GLUT4 uptake + Liver Glycogenesis</text>' +
        '<path d="M206 64 L426 64" fill="none" stroke="#dc2626" stroke-width="2.2"/>' +
        '<polygon points="432,64 422,59 422,69" fill="#dc2626"/>' +
        '<path d="M524 86 Q524 138 411 138" fill="none" stroke="#0284c7" stroke-width="2.2"/>' +
        '<polygon points="405,138 415,133 415,143" fill="#0284c7"/>' +
        '<text x="488" y="128" font-size="9" font-weight="700" fill="#0369a1">Glucose ↓</text>' +
        '<path d="M235 128 Q116 128 116 92" fill="none" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4 3"/>' +
        '<polygon points="116,86 111,96 121,96" fill="#dc2626"/>' +
        '<rect x="434" y="196" width="180" height="44" fill="#fef3c7" stroke="#d97706" stroke-width="1.8" rx="8"/>' +
        '<text x="524" y="215" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">Low Blood Glucose (Fast)</text>' +
        '<text x="524" y="229" text-anchor="middle" font-size="9" fill="#78350f">Detected by Pancreatic α Cells</text>' +
        '<rect x="26" y="196" width="180" height="44" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8" rx="8"/>' +
        '<text x="116" y="215" text-anchor="middle" font-size="10" font-weight="700" fill="#5b21b6">Glucagon Secreted into Blood</text>' +
        '<text x="116" y="229" text-anchor="middle" font-size="9" fill="#4c1d95">Liver Glycogenolysis + Gluconeogenesis</text>' +
        '<path d="M405 150 Q524 150 524 190" fill="none" stroke="#d97706" stroke-width="1.8" stroke-dasharray="4 3"/>' +
        '<polygon points="524,196 519,186 529,186" fill="#d97706"/>' +
        '<path d="M434 218 L214 218" fill="none" stroke="#d97706" stroke-width="2.2"/>' +
        '<polygon points="208,218 218,213 218,223" fill="#d97706"/>' +
        '<path d="M116 196 Q116 148 229 148" fill="none" stroke="#7c3aed" stroke-width="2.2"/>' +
        '<polygon points="235,148 225,143 225,153" fill="#7c3aed"/>' +
        '<text x="148" y="160" font-size="9" font-weight="700" fill="#5b21b6">Glucose ↑</text>' +
        '<text x="320" y="266" text-anchor="middle" font-size="9" fill="#475569">Type 1 Diabetes: β cells destroyed · Type 2 Diabetes: target receptors insulin-resistant</text>' +
        '</svg>',
      caption:
        "Antagonistic control by pancreatic β cells (insulin) and α cells (glucagon) keeps blood glucose tightly buffered around ~5.0 mmol dm⁻³.",
    },
    {
      title: "Ecological Succession & Amazon Rainforest Tipping Point",
      svg:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 265" role="img" aria-label="Dual ecological diagram comparing primary and secondary ecological succession on the left with the Amazon deforestation evapotranspiration tipping point loop on the right">' +
        '<rect x="0" y="0" width="640" height="265" fill="#ffffff" rx="10"/>' +
        '<rect x="10" y="10" width="310" height="245" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>' +
        '<text x="165" y="29" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Primary vs Secondary Succession (D4.2)</text>' +
        '<rect x="22" y="168" width="286" height="20" fill="#94a3b8" rx="3"/>' +
        '<text x="165" y="182" text-anchor="middle" font-size="8.5" font-weight="700" fill="#ffffff">Bedrock → Deepening Organic Soil &amp; Humus →</text>' +
        '<rect x="26" y="148" width="44" height="20" fill="#cbd5e1" rx="3"/><text x="48" y="161" text-anchor="middle" font-size="8" fill="#0f172a">Lichens</text>' +
        '<rect x="78" y="132" width="48" height="36" fill="#bbf7d0" rx="3"/><text x="102" y="153" text-anchor="middle" font-size="8" fill="#166534">Grasses</text>' +
        '<rect x="134" y="108" width="52" height="60" fill="#86efac" rx="3"/><text x="160" y="140" text-anchor="middle" font-size="8" fill="#14532d">Shrubs</text>' +
        '<rect x="194" y="64" width="110" height="104" fill="#16a34a" rx="5"/><text x="249" y="112" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">Climax Woodland</text>' +
        '<text x="249" y="126" text-anchor="middle" font-size="8" fill="#dcfce7">Max Biomass &amp; Diversity</text>' +
        '<path d="M26 52 L296 52" fill="none" stroke="#0369a1" stroke-width="1.8"/>' +
        '<polygon points="302,52 293,48 293,56" fill="#0369a1"/>' +
        '<text x="165" y="47" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0369a1">Primary: Bare rock (centuries) · Secondary: Intact soil (decades)</text>' +
        '<rect x="22" y="198" width="286" height="46" fill="#fef3c7" stroke="#f59e0b" rx="5"/>' +
        '<text x="165" y="215" text-anchor="middle" font-size="8.8" font-weight="700" fill="#92400e">Arrested Climax (Plagioclimax)</text>' +
        '<text x="165" y="230" text-anchor="middle" font-size="8.2" fill="#78350f">Grazing / mowing / burning halts progression at grass/shrub stage</text>' +
        '<rect x="330" y="10" width="300" height="245" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>' +
        '<text x="480" y="29" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Amazon Deforestation Tipping Point</text>' +
        '<rect x="385" y="42" width="190" height="32" fill="#fee2e2" stroke="#dc2626" rx="6"/>' +
        '<text x="480" y="62" text-anchor="middle" font-size="9.5" font-weight="700" fill="#991b1b">Forest Clearing (&gt;20–25%)</text>' +
        '<line x1="480" y1="74" x2="480" y2="94" stroke="#dc2626" stroke-width="2"/><polygon points="480,100 475,91 485,91" fill="#dc2626"/>' +
        '<rect x="385" y="100" width="190" height="34" fill="#ffedd5" stroke="#ea580c" rx="6"/>' +
        '<text x="480" y="116" text-anchor="middle" font-size="9" font-weight="700" fill="#9a3412">Transpiration Drops sharply</text>' +
        '<text x="480" y="128" text-anchor="middle" font-size="8" fill="#7c2d12">Less atmospheric moisture recycled</text>' +
        '<line x1="480" y1="134" x2="480" y2="154" stroke="#ea580c" stroke-width="2"/><polygon points="480,160 475,151 485,151" fill="#ea580c"/>' +
        '<rect x="385" y="160" width="190" height="34" fill="#fef3c7" stroke="#d97706" rx="6"/>' +
        '<text x="480" y="176" text-anchor="middle" font-size="9" font-weight="700" fill="#92400e">Longer Dry Season &amp; Fires</text>' +
        '<text x="480" y="188" text-anchor="middle" font-size="8" fill="#78350f">Remaining trees die → positive feedback</text>' +
        '<line x1="480" y1="194" x2="480" y2="212" stroke="#b91c1c" stroke-width="2"/><polygon points="480,218 475,209 485,209" fill="#b91c1c"/>' +
        '<rect x="365" y="218" width="230" height="28" fill="#991b1b" rx="6"/>' +
        '<text x="480" y="236" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">Regime Shift → Dry Savanna State</text>' +
        '</svg>',
      caption:
        "Left: Progressive build-up of soil, biomass, and biodiversity during ecological succession. Right: Self-reinforcing evapotranspiration feedback pushing deforested rainforest across a tipping point.",
    },
  ],
  history: {
    title: "The Fly Room & the World's First Chromosome Map (1910–1913)",
    story:
      "In a cramped, banana-scented laboratory at Columbia University nicknamed the **Fly Room**, biologist **Thomas Hunt Morgan** bred millions of *Drosophila melanogaster* fruit flies in recycled milk bottles. When a single white-eyed male appeared in 1910, Morgan's crosses revealed that eye colour segregated strictly with biological sex — providing the first direct proof that Mendelian genes physically sit on chromosomes (X-linked inheritance). Soon after, Morgan's group crossed flies for two traits on the same chromosome and noticed a stunning anomaly: instead of Mendel's 1 : 1 : 1 : 1 test-cross ratio, parental combinations dominated while rare recombinant flies appeared in fixed percentages. In 1913, Morgan's 19-year-old undergraduate **Alfred Sturtevant** realised that recombination frequency measures physical distance along a chromosome; skipping his homework for one sleepless night, he drew the world's very first linear genetic map — establishing the exact recombination-frequency method still tested in IB Biology HL today.",
  },
};
