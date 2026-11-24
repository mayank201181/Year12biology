import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ — 10 QUESTIONS (7 short + 3 written)
  // ===========================================================================
  quiz: [
    {
      id: "d3-d4-continuity-organisms-ecosystems-quiz-q01",
      kind: "short",
      level: "SL",
      commandTerm: "State",
      difficulty: "warmup",
      guideRef: "reproduction-homeostasis",
      question:
        "State the name (or standard abbreviation) of the anterior pituitary hormone whose sharp surge around Day 14 directly triggers ovulation in the human menstrual cycle.",
      answer: {
        type: "text",
        accept: ["LH", "luteinising hormone", "luteinizing hormone"],
        display: "LH (luteinising hormone)",
      },
      hints: [
        "This gonadotropin rises sharply in response to sustained high oestrogen positive feedback.",
        "It also stimulates the ruptured follicle to form the corpus luteum.",
      ],
      solution: [
        "Sustained high oestrogen exerts positive feedback on the hypothalamus and anterior pituitary.",
        "The resulting surge of **LH (luteinising hormone)** ruptures the Graafian follicle (ovulation) and initiates corpus luteum development.",
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-quiz-q02",
      kind: "short",
      level: "SL",
      commandTerm: "Identify",
      difficulty: "warmup",
      guideRef: "reproduction-homeostasis",
      question:
        "Identify the specific cells in the pancreatic islets of Langerhans that detect elevated blood glucose concentration and secrete insulin.",
      answer: {
        type: "text",
        accept: ["beta cells", "beta", "β cells", "β", "pancreatic beta cells", "beta-cells"],
        display: "Beta (β) cells",
      },
      hints: [
        "The islets of Langerhans contain two antagonistic endocrine cell types named after the first two Greek letters.",
        "α cells secrete glucagon during fasting; the other type secretes insulin after a meal.",
      ],
      solution: [
        "**Beta (β) cells** in the islets of Langerhans detect rising blood glucose and secrete **insulin**.",
        "Insulin stimulates cellular glucose uptake and hepatic glycogenesis, lowering blood glucose via negative feedback.",
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-quiz-q03",
      kind: "short",
      level: "SL",
      commandTerm: "Calculate",
      difficulty: "core",
      guideRef: "inheritance-linked-chi",
      question:
        "Oculocutaneous albinism is an autosomal recessive trait (`aa`). Two heterozygous unaffected parents (`Aa × Aa`) plan to have a child. Calculate the percentage probability (`%`) that the child inherits albinism.",
      answer: { type: "number", value: 25, display: "25%" },
      traps: [
        {
          spec: { type: "number", value: 50 },
          feedback: "50% is the probability of being a heterozygous carrier (Aa), not homozygous recessive (aa).",
        },
        {
          spec: { type: "number", value: 75 },
          feedback: "75% is the probability of having the dominant unaffected phenotype (AA or Aa).",
        },
      ],
      hints: [
        "Write the two possible gametes (`A` or `a`) from each heterozygous parent.",
        "Count how many of the four Punnett grid squares are `aa`.",
      ],
      solution: [
        "Gametes from `Aa × Aa`: (`A`, `a`) × (`A`, `a`).",
        "Offspring genotypes: `AA`, `Aa`, `Aa`, `aa` (1 : 2 : 1).",
        "Probability of `aa` = {{1/4 = 25%}}.",
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-quiz-q04",
      kind: "short",
      level: "SL",
      commandTerm: "Calculate",
      difficulty: "core",
      guideRef: "inheritance-linked-chi",
      question:
        "One parent has blood group AB (`I^A I^B`) and the other parent has blood group O (`ii`). Calculate the percentage probability (`%`) that their child has blood group A.",
      answer: { type: "number", value: 50, display: "50%" },
      traps: [
        {
          spec: { type: "number", value: 25 },
          feedback: "Every gamete from the group O parent carries `i`, so only two genotypes are possible: `I^A i` (A) and `I^B i` (B).",
        },
      ],
      hints: [
        "The `I^A I^B` parent passes either `I^A` or `I^B`; the `ii` parent can only pass `i`.",
        "Determine the phenotypes of `I^A i` and `I^B i`.",
      ],
      solution: [
        "Cross: `I^A I^B × ii` produces 50% `I^A i` (blood group A) and 50% `I^B i` (blood group B).",
        "Therefore, the probability of blood group A is **50%**.",
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-quiz-q05",
      kind: "short",
      level: "HL",
      commandTerm: "State",
      difficulty: "warmup",
      guideRef: "inheritance-linked-chi",
      question:
        "A student performs a χ² goodness-of-fit test on a dihybrid cross with 4 distinct phenotypic categories. State the number of degrees of freedom (`df`) for this test.",
      answer: { type: "number", value: 3, display: "3" },
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "Subtract 1 from the number of phenotypic categories: df = n − 1.",
        },
      ],
      hints: [
        "Recall the goodness-of-fit degrees of freedom formula `df = n − 1`.",
        "Substitute `n = 4` phenotypic categories.",
      ],
      solution: [
        "For a goodness-of-fit χ² test, {{df = n - 1}}, where `n` is the number of phenotypic categories.",
        "With `n = 4`, {{df = 4 - 1 = 3}}.",
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-quiz-q06",
      kind: "short",
      level: "HL",
      commandTerm: "Calculate",
      difficulty: "warmup",
      guideRef: "natural-selection-hardy-weinberg",
      question:
        "In a diploid population with two alleles at a locus (`p + q = 1`), the recessive allele frequency is `q = 0.25`. Calculate the dominant allele frequency `p` as a decimal.",
      answer: { type: "number", value: 0.75, tolerance: 0.005, display: "0.75" },
      hints: [
        "All allele frequencies at a two-allele locus sum to 1.",
        "Compute `p = 1 − q`.",
      ],
      solution: [
        "Using {{p + q = 1}}: {{p = 1 - 0.25 = 0.75}}.",
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-quiz-q07",
      kind: "short",
      level: "SL",
      commandTerm: "Calculate",
      difficulty: "core",
      guideRef: "stability-climate-change",
      question:
        "Wetland water contains {{0.002}} ppm of DDT, while adipose tissue in a fish-eating heron contains {{18}} ppm of DDT. Calculate the overall biomagnification factor (BMF) from water to heron.",
      answer: { type: "number", value: 9000, display: "9000" },
      traps: [
        {
          spec: { type: "number", value: 900 },
          feedback: "Check decimal places when dividing 18 by 0.002: 18 ÷ 0.002 = 18,000 ÷ 2 = 9,000.",
        },
      ],
      hints: [
        "Biomagnification factor = predator concentration ÷ starting concentration.",
        "Divide `18` by `0.002` carefully (multiply numerator and denominator by 1,000).",
      ],
      solution: [
        "{{BMF = C_heron / C_water = 18 / 0.002 = 9000}}.",
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-quiz-q08",
      kind: "written",
      level: "SL",
      commandTerm: "Outline",
      difficulty: "core",
      guideRef: "reproduction-homeostasis",
      marks: 2,
      question:
        "Outline two distinct physiological functions of progesterone during Days 15–24 of a human menstrual cycle.",
      hints: [
        "First describe progesterone's direct effect on the uterine lining.",
        "Second describe its negative-feedback effect on anterior pituitary gonadotropins.",
      ],
      modelAnswer:
        "Secreted by the corpus luteum, progesterone maintains a thick, vascular, secretory endometrium ready for embryo implantation. Simultaneously, it exerts negative feedback on the hypothalamus and anterior pituitary, inhibiting FSH and LH release so additional ovarian follicles cannot mature.",
      markScheme: [
        {
          point: "Maintains a thick, vascular endometrium suitable for implantation",
          keywords: ["endometrium", "implantation", "vascular"],
        },
        {
          point: "Exerts negative feedback inhibiting FSH and LH secretion (preventing further follicle development/ovulation)",
          keywords: ["inhibiting fsh", "inhibits fsh", "negative feedback", "inhibit fsh"],
        },
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-quiz-q09",
      kind: "written",
      level: "SL",
      commandTerm: "Outline",
      difficulty: "core",
      guideRef: "natural-selection-hardy-weinberg",
      marks: 3,
      question:
        "During a severe 1977 drought on Daphne Major in the Galápagos, small soft seeds became scarce while large hard seeds remained. Outline how natural selection increased mean beak depth in *Geospiza fortis* finches.",
      hints: [
        "Begin with pre-existing heritable variation in beak size before the drought.",
        "Link survival and reproductive advantage directly to passing alleles to offspring.",
        "Conclude with the shift in allele frequency across generations.",
      ],
      modelAnswer:
        "Heritable genetic variation in beak depth already existed within the finch population before drought struck. Birds possessing deeper, stronger beaks cracked large hard seeds more efficiently, giving them higher survival and reproductive success than shallow-beaked competitors. Survivors passed deeper-beak alleles to offspring, raising the frequency of those alleles and shifting mean beak depth upward in subsequent generations.",
      markScheme: [
        {
          point: "Pre-existing heritable genetic variation in beak depth within the population",
          keywords: ["heritable", "genetic variation"],
        },
        {
          point: "Birds with deeper beaks crack hard seeds, achieving differential survival and higher reproductive success",
          keywords: ["survival", "reproductive success", "reproduce"],
        },
        {
          point: "Advantageous alleles are passed to offspring, increasing allele frequency across generations",
          keywords: ["allele", "frequency", "offspring"],
        },
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-quiz-q10",
      kind: "written",
      level: "SL",
      commandTerm: "Explain",
      difficulty: "core",
      guideRef: "stability-climate-change",
      marks: 3,
      question:
        "Explain the biological steps by which heavy agricultural fertiliser leaching into a freshwater pond leads to fish suffocation.",
      hints: [
        "Start with how nitrates and phosphates affect surface phytoplankton growth.",
        "Explain what happens to submerged plants when sunlight is blocked.",
        "Name the organisms responsible for decomposing dead biomass and depleting dissolved oxygen.",
      ],
      modelAnswer:
        "Leached nitrates and phosphates fuel a dense surface algal bloom that blocks sunlight from reaching submerged aquatic plants. Deprived of photosynthesis, submerged macrophytes and short-lived algae die and sink. Aerobic saprotrophic bacteria proliferate to decompose this organic matter, dramatically elevating biochemical oxygen demand (BOD) and stripping dissolved oxygen from the water, causing hypoxia that suffocates fish.",
      markScheme: [
        {
          point: "Nutrient enrichment triggers an algal bloom that blocks light to submerged plants",
          keywords: ["algal bloom", "blocks sunlight", "block light"],
        },
        {
          point: "Submerged plants and algae die; aerobic saprotrophic bacteria multiply during decomposition",
          keywords: ["saprotrophic", "decompos", "bacteria"],
        },
        {
          point: "High aerobic respiration / BOD depletes dissolved oxygen (hypoxia/anoxia), killing fish",
          keywords: ["dissolved oxygen", "hypoxia", "bod"],
        },
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS — p1 (15 Qs SL) & p2 (15 Qs HL)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1: SL CORE STRUCTURED & QUANTITATIVE (15 questions)
    // -------------------------------------------------------------------------
    {
      id: "d3-d4-continuity-organisms-ecosystems-p1",
      title: "Practice Paper 1 — SL Core Structured & Quantitative",
      level: "SL",
      questions: [
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q01",
          kind: "short",
          level: "SL",
          commandTerm: "State",
          difficulty: "warmup",
          guideRef: "reproduction-homeostasis",
          question:
            "State the name of the plant hormone released by a hydrated cereal embryo during germination that stimulates the aleurone layer to synthesise amylase.",
          answer: {
            type: "text",
            accept: ["gibberellin", "gibberellins", "gibberellic acid", "GA"],
            display: "Gibberellin",
          },
          hints: [
            "This growth hormone mobilises starch reserves after imbibition of water.",
            "Do not confuse it with auxin (phototropism) or ethylene (fruit ripening).",
          ],
          solution: [
            "Water absorption triggers the embryo to secrete **gibberellin**, which induces aleurone cells to produce **amylase** to hydrolyse starch into maltose and glucose.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q02",
          kind: "short",
          level: "SL",
          commandTerm: "State",
          difficulty: "warmup",
          guideRef: "reproduction-homeostasis",
          question:
            "During a 16-hour fast, a healthy person's blood glucose falls to {{3.6}} mmol dm⁻³. State the hormone secreted by pancreatic α cells to restore blood glucose concentration.",
          answer: {
            type: "text",
            accept: ["glucagon"],
            display: "Glucagon",
          },
          hints: [
            "Remember the mnemonic: when glucose is GONE, α cells release this hormone.",
            "Check your spelling carefully — do not write the storage polysaccharide *glycogen*.",
          ],
          solution: [
            "Pancreatic α cells secrete **glucagon**, which stimulates hepatic **glycogenolysis** (glycogen → glucose) and gluconeogenesis.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q03",
          kind: "short",
          level: "SL",
          commandTerm: "Calculate",
          difficulty: "core",
          guideRef: "inheritance-linked-chi",
          question:
            "In garden peas, tall stem (`T`) is completely dominant over dwarf stem (`t`). Two heterozygous tall plants (`Tt × Tt`) are crossed and produce 360 seedlings. Calculate the expected number of dwarf (`tt`) seedlings.",
          answer: { type: "number", value: 90, display: "90" },
          traps: [
            {
              spec: { type: "number", value: 270 },
              feedback: "270 is the expected number of tall seedlings (3/4 of 360); dwarf seedlings make up 1/4.",
            },
            {
              spec: { type: "number", value: 180 },
              feedback: "180 is half of 360 (which matches a test cross Tt × tt, not Tt × Tt).",
            },
          ],
          hints: [
            "Recall the Mendelian F₂ phenotypic ratio for `Tt × Tt`.",
            "Multiply the fraction of `tt` offspring (`1/4`) by the total `360`.",
          ],
          solution: [
            "Crossing `Tt × Tt` yields a 3 : 1 ratio (3/4 tall : 1/4 dwarf).",
            "Expected dwarf seedlings = {{(1/4) * 360 = 90}}.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q04",
          kind: "short",
          level: "SL",
          commandTerm: "Calculate",
          difficulty: "core",
          guideRef: "inheritance-linked-chi",
          question:
            "A mother has genotype `I^A i` (blood group A) and a father has genotype `I^A I^B` (blood group AB). Calculate the percentage probability (`%`) that their child has blood group A.",
          answer: { type: "number", value: 50, display: "50%" },
          traps: [
            {
              spec: { type: "number", value: 25 },
              feedback: "Remember BOTH `I^A I^A` and `I^A i` produce blood group A — count both squares in the Punnett grid!",
            },
          ],
          hints: [
            "Draw the 2 × 2 Punnett grid for gametes (`I^A`, `i`) × (`I^A`, `I^B`).",
            "Count every offspring genotype whose phenotype is blood group A (both homozygous and heterozygous).",
          ],
          solution: [
            "Offspring genotypes: `I^A I^A` (A), `I^A I^B` (AB), `I^A i` (A), `I^B i` (B).",
            "Two of the four outcomes yield blood group A → {{2/4 = 50%}}.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q05",
          kind: "short",
          level: "SL",
          commandTerm: "Calculate",
          difficulty: "core",
          guideRef: "inheritance-linked-chi",
          question:
            "Red–green colour blindness is X-linked recessive (`X^b`). A carrier woman (`X^B X^b`) and an unaffected man (`X^B Y`) have a **son**. Calculate the percentage probability (`%`) that this son is colour-blind.",
          answer: { type: "number", value: 50, display: "50%" },
          traps: [
            {
              spec: { type: "number", value: 25 },
              feedback: "25% is the chance out of ALL children (boys and girls). Because the child is known to be a son, only consider the two male outcomes (X^B Y and X^b Y).",
            },
          ],
          hints: [
            "Read the wording carefully: the child is already specified to be a **son**.",
            "Every son receives `Y` from the father; what are the chances he receives `X^b` from his carrier mother?",
          ],
          solution: [
            "All sons inherit `Y` from their father (`X^B Y`) and either `X^B` (50%) or `X^b` (50%) from their carrier mother (`X^B X^b`).",
            "Therefore, **50%** of their sons are expected to be colour-blind (`X^b Y`).",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q06",
          kind: "short",
          level: "SL",
          commandTerm: "Deduce",
          difficulty: "core",
          guideRef: "inheritance-linked-chi",
          diagram:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 175" role="img" aria-label="Pedigree chart with unaffected parents I-1 and I-2 producing an affected son II-1, an affected daughter II-2, and an unaffected son II-3">' +
            '<rect x="0" y="0" width="310" height="175" fill="#ffffff" rx="8"/>' +
            '<text x="155" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Family Pedigree Chart (Shaded = Affected)</text>' +
            '<rect x="94" y="40" width="24" height="24" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>' +
            '<line x1="118" y1="52" x2="180" y2="52" stroke="#0f172a" stroke-width="1.8"/>' +
            '<circle cx="192" cy="52" r="12" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>' +
            '<text x="106" y="34" text-anchor="middle" font-size="9" fill="#334155">I-1</text>' +
            '<text x="192" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="#0369a1">I-2 (?)</text>' +
            '<line x1="149" y1="52" x2="149" y2="94" stroke="#0f172a" stroke-width="1.8"/>' +
            '<line x1="70" y1="94" x2="228" y2="94" stroke="#0f172a" stroke-width="1.8"/>' +
            '<line x1="70" y1="94" x2="70" y2="114" stroke="#0f172a" stroke-width="1.8"/>' +
            '<line x1="149" y1="94" x2="149" y2="114" stroke="#0f172a" stroke-width="1.8"/>' +
            '<line x1="228" y1="94" x2="228" y2="114" stroke="#0f172a" stroke-width="1.8"/>' +
            '<rect x="58" y="114" width="24" height="24" fill="#0f172a" stroke="#0f172a" stroke-width="2"/>' +
            '<circle cx="149" cy="126" r="12" fill="#0f172a" stroke="#0f172a" stroke-width="2"/>' +
            '<rect x="216" y="114" width="24" height="24" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>' +
            '<text x="70" y="155" text-anchor="middle" font-size="9" fill="#334155">II-1</text>' +
            '<text x="149" y="155" text-anchor="middle" font-size="9" fill="#334155">II-2</text>' +
            '<text x="228" y="155" text-anchor="middle" font-size="9" fill="#334155">II-3</text>' +
            '</svg>',
          question:
            "In the pedigree chart above, unaffected parents I-1 and I-2 have an affected son (II-1), an affected daughter (II-2), and an unaffected son (II-3). Using `A` for the dominant allele and `a` for the recessive allele, state the genotype of individual **I-2**.",
          answer: {
            type: "text",
            accept: ["Aa", "aA"],
            display: "Aa",
          },
          hints: [
            "Two unaffected parents have affected children — so the condition must be recessive (`aa`).",
            "Individual I-2 is unaffected (must have at least one `A`) yet passed a recessive allele to II-1 and II-2.",
          ],
          solution: [
            "Because unaffected parents produce affected children (`aa`), the allele is recessive (and autosomal because affected daughter II-2 has an unaffected father).",
            "I-2 is unaffected so has at least one `A`, and must donate `a` to her affected children → genotype is **Aa**.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q07",
          kind: "short",
          level: "SL",
          commandTerm: "Calculate",
          difficulty: "core",
          guideRef: "stability-climate-change",
          question:
            "Marine phytoplankton contain {{0.04}} ppm of persistent PCBs. Across a 4-level food chain (**phytoplankton → krill → herring → seal**), each trophic transfer multiplies PCB concentration by a factor of **15**. Calculate the PCB concentration in seal tissue in `ppm`.",
          answer: { type: "number", value: 135, display: "135 ppm" },
          traps: [
            {
              spec: { type: "number", value: 2025 },
              feedback: "There are 3 trophic transfers across 4 trophic levels (multiply by 15³, not 15⁴).",
            },
            {
              spec: { type: "number", value: 1.8 },
              feedback: "Biomagnification multiplies by 15 at each step (0.04 × 15³), rather than adding 15 × 3.",
            },
          ],
          hints: [
            "Count the number of feeding transfers from level 1 (phytoplankton) to level 4 (seal): there are 3 steps.",
            "Multiply `0.04 × 15 × 15 × 15` step by step.",
          ],
          solution: [
            "Krill = {{0.04 * 15 = 0.6}} ppm.",
            "Herring = {{0.6 * 15 = 9.0}} ppm.",
            "Seal = {{9.0 * 15 = 135}} ppm.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q08",
          kind: "short",
          level: "SL",
          commandTerm: "Calculate",
          difficulty: "core",
          guideRef: "stability-climate-change",
          question:
            "Summer solar radiation strikes the Greenland ice sheet at {{400}} W m⁻². Clean snow has an albedo of {{0.80}}, whereas soot-darkened melting ice has an albedo of {{0.45}}. Calculate the **increase** in absorbed solar power (`W m⁻²`) when clean snow turns into soot-darkened ice.",
          answer: { type: "number", value: 140, display: "140" },
          traps: [
            {
              spec: { type: "number", value: 220 },
              feedback: "220 W m⁻² is the total power absorbed by soot-darkened ice — subtract the 80 W m⁻² already absorbed by clean snow.",
            },
          ],
          hints: [
            "Fraction absorbed = `1 − albedo`.",
            "Find solar power absorbed by clean snow and by soot-darkened ice, then take the difference.",
          ],
          solution: [
            "Clean snow absorbs {{400 * (1 - 0.80) = 400 * 0.20 = 80}} W m⁻².",
            "Soot-darkened ice absorbs {{400 * (1 - 0.45) = 400 * 0.55 = 220}} W m⁻².",
            "Increase in absorbed solar power = {{220 - 80 = 140}} W m⁻².",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q09",
          kind: "short",
          level: "SL",
          commandTerm: "State",
          difficulty: "warmup",
          guideRef: "stability-climate-change",
          question:
            "State the ecological term for a stable grassland or heather moorland community prevented from succeeding to woodland by ongoing sheep grazing or controlled burning.",
          answer: {
            type: "text",
            accept: ["arrested climax", "plagioclimax", "arrested climax community", "deflected succession"],
            display: "Arrested climax (plagioclimax)",
          },
          hints: [
            "Human land management halts or deflects ecological succession before the natural climatic climax.",
            "Both the plain English two-word term and the Greek-root term starting with *plagio-* are accepted.",
          ],
          solution: [
            "Continuous human management (grazing, mowing, burning) creates an **arrested climax** (also known as a **plagioclimax**).",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q10",
          kind: "written",
          level: "SL",
          commandTerm: "Explain",
          difficulty: "core",
          guideRef: "reproduction-homeostasis",
          marks: 4,
          question:
            "Explain how negative and positive feedback interactions between FSH, oestrogen, LH, and progesterone regulate the 28-day human menstrual cycle.",
          hints: [
            "Trace the sequence chronologically: Days 1–12 (follicular), Day 13–14 (ovulation), Days 15–26 (luteal), Days 27–28 (without fertilisation).",
            "Explicitly label where **positive feedback** occurs and where **negative feedback** occurs.",
          ],
          modelAnswer:
            "At the start of the cycle, anterior pituitary FSH stimulates an ovarian follicle to mature and secrete oestrogen, which rebuilds the uterine endometrium and initially lowers FSH by negative feedback. Around Day 12–13, sustained peak oestrogen switches to positive feedback on the hypothalamus and pituitary, triggering an explosive LH surge that causes ovulation on Day 14. LH transforms the ruptured follicle into the corpus luteum, which releases progesterone to preserve the thickened vascular lining while inhibiting FSH and LH via negative feedback. Absent fertilisation, the corpus luteum degenerates, progesterone drops, menstruation begins, and FSH rises again.",
          markScheme: [
            {
              point: "FSH stimulates ovarian follicle development and oestrogen secretion (which repairs endometrium)",
              keywords: ["follicle", "endometrium"],
            },
            {
              point: "High oestrogen switches to positive feedback, triggering the pituitary LH surge and ovulation (Day 14)",
              keywords: ["lh surge", "ovulation", "positive feedback"],
            },
            {
              point: "LH converts ruptured follicle to corpus luteum, which secretes progesterone maintaining the lining and inhibiting FSH/LH via negative feedback",
              keywords: ["corpus luteum", "negative feedback", "inhibiting fsh"],
            },
            {
              point: "Without fertilisation, corpus luteum degenerates → progesterone drops → menstruation and FSH rises",
              keywords: ["degenerates", "menstruation"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant hormonal sequence or feedback mechanism described." },
            { band: "1–2", marks: [1, 2], descriptor: "Names core hormones and basic functions (e.g. LH causes ovulation) but omits or confuses feedback loops." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately links FSH, oestrogen, LH, and progesterone across follicular, ovulatory, and luteal stages, clearly distinguishing positive (LH surge) and negative (progesterone) feedback." },
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q11",
          kind: "written",
          level: "SL",
          commandTerm: "Compare and contrast",
          difficulty: "core",
          guideRef: "reproduction-homeostasis",
          marks: 4,
          question:
            "Compare and contrast Type 1 and Type 2 diabetes with reference to their biological causes, effects on blood glucose homeostasis, and clinical management.",
          hints: [
            "Include at least one clear similarity (what goes wrong with blood glucose in both conditions?).",
            "Contrast pancreatic β-cell destruction vs target-cell receptor insulin resistance, plus typical treatments.",
          ],
          modelAnswer:
            "Both disorders result in chronic hyperglycaemia (dangerously high blood glucose) because liver and muscle cells fail to take up glucose and store glycogen normally. However, Type 1 diabetes is an autoimmune disorder that destroys pancreatic beta cells, eliminating insulin production; it typically begins in childhood and requires regular blood monitoring plus exogenous insulin injections. Conversely, Type 2 diabetes develops primarily from target-cell insulin resistance where cell-surface receptors respond poorly despite ongoing insulin secretion, linked to genetics, obesity, and sedentary habits, and is managed through dietary control, exercise, and sensitising drugs.",
          markScheme: [
            {
              point: "Similarity: both cause persistent hyperglycaemia due to impaired cellular glucose uptake / glycogenesis",
              keywords: ["hyperglycaemia", "hyperglycemia", "uptake", "glycogen"],
            },
            {
              point: "Type 1 cause: autoimmune destruction of pancreatic beta cells resulting in absent/insufficient insulin",
              keywords: ["autoimmune", "beta cells"],
            },
            {
              point: "Type 2 cause: target cells become insulin-resistant (unresponsive receptors) associated with diet/lifestyle/genetics",
              keywords: ["insulin resistance", "insulin-resistant", "receptors"],
            },
            {
              point: "Management contrast: Type 1 requires insulin injections whereas Type 2 is managed initially by diet, exercise, and medication",
              keywords: ["injections", "diet", "exercise"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid physiological distinction or similarity given." },
            { band: "1–2", marks: [1, 2], descriptor: "States a basic cause or treatment for one type without structured comparison." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly identifies a shared homeostatic failure (hyperglycaemia) and contrasts autoimmune β-cell loss vs receptor resistance and respective treatments." },
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q12",
          kind: "written",
          level: "SL",
          commandTerm: "Explain",
          difficulty: "core",
          guideRef: "inheritance-linked-chi",
          marks: 3,
          question:
            "Explain why human adult height shows a smooth bell-shaped distribution across a population whereas ABO blood group falls into four sharp categories.",
          hints: [
            "Contrast single-gene inheritance with polygenic inheritance.",
            "Mention additive effects of multiple loci AND environmental influence on height.",
          ],
          modelAnswer:
            "ABO blood group is governed by a single gene locus with three alleles (`I^A`, `I^B`, `i`), producing discrete discontinuous phenotypes (A, B, AB, O) unaffected by environment. By contrast, human adult height is polygenic: numerous distinct genes contribute small additive effects to skeletal growth, generating many intermediate phenotypes. Environmental factors such as childhood nutrition and health further smooth variation across a continuous bell-shaped normal curve.",
          markScheme: [
            {
              point: "ABO blood group is controlled by a single gene producing discrete/discontinuous categories",
              keywords: ["single gene", "discontinuous", "discrete"],
            },
            {
              point: "Height is polygenic, controlled by multiple genes with additive effects",
              keywords: ["polygenic", "additive"],
            },
            {
              point: "Environmental factors (e.g. nutrition) further smooth height into continuous variation",
              keywords: ["environmental", "nutrition", "continuous"],
            },
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q13",
          kind: "written",
          level: "SL",
          commandTerm: "Explain",
          difficulty: "core",
          guideRef: "natural-selection-hardy-weinberg",
          marks: 4,
          question:
            "Explain how natural selection leads to antibiotic-resistant bacterial strains in hospitals, and state one key difference between natural selection and artificial selection.",
          hints: [
            "Avoid saying antibiotics *cause* mutation — specify when variation arises.",
            "Describe survival, reproduction, and allele frequency increase, then contrast who imposes the selection pressure in artificial selection.",
          ],
          modelAnswer:
            "Random DNA mutations or plasmid uptake generate rare resistant variants within a bacterial population prior to drug exposure. Administering an antibiotic imposes a strong abiotic selection pressure that kills susceptible cells while sparing resistant individuals. Surviving resistant bacteria experience reduced competition, divide rapidly by binary fission, and pass resistance genes to daughter cells, raising resistance allele frequency over generations. Unlike natural selection driven by environmental survival pressures, artificial selection involves humans intentionally choosing breeding parents for desired traits.",
          markScheme: [
            {
              point: "Pre-existing random mutation (or plasmid transfer) confers resistance prior to antibiotic exposure",
              keywords: ["random", "mutation", "plasmid"],
            },
            {
              point: "Antibiotic acts as selection pressure killing susceptible bacteria",
              keywords: ["selection pressure", "susceptible"],
            },
            {
              point: "Resistant bacteria survive, divide/reproduce, increasing resistance allele frequency",
              keywords: ["allele frequency", "reproduce", "binary fission"],
            },
            {
              point: "Artificial selection involves humans deliberately choosing breeding parents rather than environmental pressures",
              keywords: ["humans", "choosing", "breed"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Lamarckian explanation only (e.g. bacteria mutate because they need to become immune)." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions survival of resistant bacteria but omits random pre-existing variation or allele frequency shift." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurate Darwinian mechanism (pre-existing mutation → selection pressure → differential reproduction → allele frequency shift) plus crisp contrast with human-directed artificial selection." },
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q14",
          kind: "written",
          level: "SL",
          commandTerm: "Explain",
          difficulty: "core",
          guideRef: "stability-climate-change",
          marks: 4,
          question:
            "Explain why sea otters are classified as a keystone species in North Pacific kelp ecosystems, and distinguish bioaccumulation from biomagnification.",
          hints: [
            "Define keystone species in terms of disproportionate impact relative to abundance, then trace the otter → urchin → kelp trophic cascade.",
            "Clearly separate within-one-organism buildup from across-trophic-level amplification.",
          ],
          modelAnswer:
            "A keystone species exerts a disproportionately large stabilising influence on community structure relative to its biomass. Sea otters regulate herbivorous sea urchins through top-down predation; removing otters allows urchin populations to explode and overgraze giant kelp forests into barren reefs (a trophic cascade). Separately, bioaccumulation describes the buildup of persistent, non-biodegradable toxins inside a single organism over its lifetime, whereas biomagnification describes the increasing concentration of those persistent fat-soluble toxins at successively higher trophic levels across a food web.",
          markScheme: [
            {
              point: "Keystone species has a disproportionately large impact on community structure relative to biomass/abundance",
              keywords: ["disproportionately", "community"],
            },
            {
              point: "Otters control sea urchins, preventing overgrazing and preserving kelp forest biodiversity (trophic cascade)",
              keywords: ["urchin", "kelp", "trophic cascade"],
            },
            {
              point: "Bioaccumulation is buildup of persistent toxin inside one individual organism over time",
              keywords: ["single organism", "one organism", "lifetime"],
            },
            {
              point: "Biomagnification is increasing toxin concentration across successively higher trophic levels",
              keywords: ["trophic levels", "higher trophic"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid explanation of keystone role or toxin terminology." },
            { band: "1–2", marks: [1, 2], descriptor: "Describes sea otters eating urchins OR partially defines bioaccumulation/biomagnification." },
            { band: "3–4", marks: [3, 4], descriptor: "Defines keystone species with the otter–urchin–kelp cascade AND accurately distinguishes bioaccumulation (within an individual) from biomagnification (across trophic levels)." },
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p1-q15",
          kind: "written",
          level: "SL",
          commandTerm: "Discuss",
          difficulty: "challenge",
          guideRef: "stability-climate-change",
          marks: 6,
          question:
            "Discuss how enhanced greenhouse warming triggers positive feedback loops in polar regions and causes both phenological mismatch on land and decline of tropical coral reefs.",
          hints: [
            "Explain the greenhouse mechanism briefly (long-wave IR trapped by CO₂/CH₄).",
            "Detail TWO polar positive feedbacks: ice–albedo loss AND permafrost thawing releasing CH₄/CO₂.",
            "Explain phenological mismatch (temperature vs photoperiod cues) AND distinguish coral bleaching (warming) from impaired calcification (ocean acidification lowering CO₃²⁻).",
          ],
          modelAnswer:
            "Combustion of fossil fuels raises atmospheric CO₂ and CH₄, which absorb and re-emit outgoing long-wave infrared radiation from Earth's surface. In polar regions, warming triggers two powerful positive feedbacks: first, melting bright high-albedo sea ice exposes dark low-albedo seawater that absorbs far more solar energy, accelerating warming; second, thawing permafrost permits anaerobic methanogens and saprotrophs to decompose ancient organic carbon, releasing methane and CO₂ that intensify warming further. On land, warmer springs advance plant budburst and insect caterpillar peaks (cued by temperature), whereas migratory birds still rely on unchanged photoperiod (day length), creating a phenological mismatch that starves nestlings. In tropical oceans, marine heatwaves cause corals to expel photosynthetic zooxanthellae (bleaching), while dissolved CO₂ forms carbonic acid, reducing pH and carbonate ions (`CO₃²⁻`) essential for CaCO₃ skeleton calcification.",
          markScheme: [
            {
              point: "Greenhouse gases (CO₂/CH₄) absorb and re-emit outgoing long-wave infrared radiation",
              keywords: ["long-wave", "infrared"],
            },
            {
              point: "Ice–albedo feedback: melting high-albedo ice exposes dark low-albedo ocean absorbing more sunlight",
              keywords: ["albedo", "dark", "solar"],
            },
            {
              point: "Permafrost thaw enables microbial/methanogen decomposition releasing CH₄ and CO₂",
              keywords: ["permafrost", "methane", "methanogen"],
            },
            {
              point: "Phenological mismatch arises because prey/plants respond to temperature while migrants rely on unchanged photoperiod",
              keywords: ["photoperiod", "temperature", "mismatch"],
            },
            {
              point: "Coral bleaching: elevated ocean temperatures trigger expulsion of mutualistic zooxanthellae",
              keywords: ["zooxanthellae", "bleaching"],
            },
            {
              point: "Ocean acidification: dissolved CO₂ forms carbonic acid lowering pH and carbonate ions needed for CaCO₃ calcification",
              keywords: ["carbonic acid", "carbonate", "calcification"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant climate feedback or ecological mechanism presented." },
            { band: "1–2", marks: [1, 2], descriptor: "States general climate impacts (melting ice, dying corals) with minimal biological or physical mechanism." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains at least one polar positive feedback loop accurately alongside either phenological mismatch or coral bleaching/acidification." },
            { band: "5–6", marks: [5, 6], descriptor: "Comprehensive, mechanistic synthesis covering long-wave IR trapping, BOTH ice-albedo and permafrost CH₄ feedbacks, temperature vs photoperiod phenological mismatch, AND both thermal coral bleaching and carbonate-ion acidification." },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2: HL QUANTITATIVE GENETICS, HARDY–WEINBERG & DATA ANALYSIS (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "d3-d4-continuity-organisms-ecosystems-p2",
      title: "Practice Paper 2 — HL Quantitative Genetics, Hardy–Weinberg & Nephron",
      level: "HL",
      questions: [
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q01",
          kind: "short",
          level: "HL",
          commandTerm: "Calculate",
          difficulty: "core",
          guideRef: "reproduction-homeostasis",
          question:
            "A runner's glomerular filtration rate (GFR) is {{125}} cm³ min⁻¹. Under intense dehydration and high ADH secretion, {{99.6%}} of the filtrate volume is reabsorbed along the nephron and collecting duct. Calculate the urine production rate in `cm³ min⁻¹`.",
          answer: { type: "number", value: 0.5, tolerance: 0.01, display: "0.5 cm³ min⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 124.5 },
              feedback: "124.5 cm³ min⁻¹ is the volume REABSORBED — subtract it from 125 to get the urine excreted.",
            },
          ],
          hints: [
            "Find the percentage of filtrate NOT reabsorbed: `100% − 99.6%`.",
            "Multiply `0.004` by `125 cm³ min⁻¹`.",
          ],
          solution: [
            "Percentage excreted as urine = {{100% - 99.6% = 0.4% = 0.004}}.",
            "Urine rate = {{125 * 0.004 = 0.5}} cm³ min⁻¹.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q02",
          kind: "short",
          level: "HL",
          commandTerm: "State",
          difficulty: "warmup",
          guideRef: "reproduction-homeostasis",
          question:
            "State the name (or standard abbreviation) of the hormone secreted by an implanting human embryo that maintains the corpus luteum during early pregnancy.",
          answer: {
            type: "text",
            accept: ["hCG", "human chorionic gonadotropin", "human chorionic gonadotrophin"],
            display: "hCG (human chorionic gonadotropin)",
          },
          hints: [
            "This hormone prevents progesterone from dropping in early pregnancy and is detected by pregnancy tests.",
            "Its three-letter abbreviation begins with a lowercase *h*.",
          ],
          solution: [
            "The implanting blastocyst secretes **hCG (human chorionic gonadotropin)**, maintaining corpus luteum progesterone secretion until the placenta takes over.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q03",
          kind: "short",
          level: "HL",
          commandTerm: "Calculate",
          difficulty: "core",
          guideRef: "inheritance-linked-chi",
          question:
            "Two unlinked autosomal genes assort independently in a dihybrid cross `AaBb × AaBb` that produces **320** offspring. Calculate the expected number of offspring showing the dominant trait A and the recessive trait b (`A_bb`).",
          answer: { type: "number", value: 60, display: "60" },
          traps: [
            {
              spec: { type: "number", value: 180 },
              feedback: "180 is 9/16 (both dominant traits A_B_); A_bb makes up 3/16 of the 9 : 3 : 3 : 1 ratio.",
            },
            {
              spec: { type: "number", value: 20 },
              feedback: "20 is 1/16 (double recessive aabb); A_bb represents 3/16.",
            },
          ],
          hints: [
            "In an unlinked 9 : 3 : 3 : 1 dihybrid ratio, what fraction is `A_bb`?",
            "Calculate `(3/16) × 320`.",
          ],
          solution: [
            "Fraction for `A_bb` = {{(3/4) * (1/4) = 3/16}}.",
            "Expected count = {{(3/16) * 320 = 3 * 20 = 60}} offspring.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q04",
          kind: "short",
          level: "HL",
          commandTerm: "Calculate",
          difficulty: "core",
          guideRef: "inheritance-linked-chi",
          question:
            "A test cross of sweet peas heterozygous for two linked genes (`PR / pr × pr / pr`) yields **800** offspring: 344 purple long, 336 red round, 62 purple round, and 58 red long. Calculate the recombination frequency (`%`).",
          answer: { type: "number", value: 15, display: "15%" },
          traps: [
            {
              spec: { type: "number", value: 85 },
              feedback: "85% is the parental frequency — recombination frequency uses the two least frequent recombinant classes (62 + 58).",
            },
          ],
          hints: [
            "Identify the two recombinant classes (the two smallest counts).",
            "Sum the recombinants, divide by 800, and multiply by 100%.",
          ],
          solution: [
            "Total recombinants = {{62 + 58 = 120}}.",
            "{{RF = (120 / 800) * 100% = 15%}}.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q05",
          kind: "short",
          level: "HL",
          commandTerm: "Calculate",
          difficulty: "core",
          guideRef: "inheritance-linked-chi",
          question:
            "A dihybrid test cross of 160 tomato plants (`TtRr × ttrr`) tests a 1 : 1 : 1 : 1 unlinked hypothesis (expected count `E = 40` per class). Observed counts across the four phenotypes are **46, 34, 44, and 36**. Calculate `χ²` (give your answer to 2 decimal places).",
          answer: { type: "number", value: 2.6, tolerance: 0.02, display: "2.60" },
          hints: [
            "Find `(O − E)` for each of the four classes: `+6, −6, +4, −4`.",
            "Square each deviation, sum them, and divide by `E = 40`.",
          ],
          solution: [
            "{{(O - E)^2}} values: {{36, 36, 16, 16}}; sum = {{104}}.",
            "{{χ^2 = 104 / 40 = 2.60}} (since {{2.60 <= 7.815}}, fail to reject `H₀`).",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q06",
          kind: "short",
          level: "HL",
          commandTerm: "Calculate",
          difficulty: "challenge",
          guideRef: "inheritance-linked-chi",
          question:
            "An F₂ dihybrid cross (`AaBb × AaBb`) yields **160** plants with observed counts **84, 36, 24, and 16** against an unlinked 9 : 3 : 3 : 1 expected ratio (**90, 30, 30, 10**). Calculate `χ²` (to 2 decimal places).",
          answer: { type: "number", value: 6.4, tolerance: 0.02, display: "6.40" },
          traps: [
            {
              spec: { type: "number", value: 3.6 },
              feedback: "3.60 is only the final category's contribution (36/10) — sum all four (O − E)² / E terms!",
            },
          ],
          hints: [
            "Notice every single `(O − E)` has magnitude `6`, so every `(O − E)² = 36`!",
            "Divide `36` by each separate expected value (`90`, `30`, `30`, `10`) and add all four quotients.",
          ],
          solution: [
            "Term 1: {{(-6)^2 / 90 = 36 / 90 = 0.40}}.",
            "Term 2: {{6^2 / 30 = 36 / 30 = 1.20}}; Term 3: {{(-6)^2 / 30 = 1.20}}.",
            "Term 4: {{6^2 / 10 = 36 / 10 = 3.60}}.",
            "Total {{χ^2 = 0.40 + 1.20 + 1.20 + 3.60 = 6.40}} (below `7.815`, so fail to reject `H₀`).",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q07",
          kind: "short",
          level: "HL",
          commandTerm: "Calculate",
          difficulty: "core",
          guideRef: "natural-selection-hardy-weinberg",
          question:
            "In a large woodland moth population in Hardy–Weinberg equilibrium, **4%** of moths show the autosomal recessive light-wing phenotype (`dd`). Calculate the frequency of the dominant dark-wing allele `p` (as a decimal).",
          answer: { type: "number", value: 0.8, tolerance: 0.005, display: "0.80" },
          traps: [
            {
              spec: { type: "number", value: 0.96 },
              feedback: "4% (0.04) is q², NOT q! Take the square root first: q = √0.04 = 0.20, then p = 1 − 0.20.",
            },
            {
              spec: { type: "number", value: 0.2 },
              feedback: "0.20 is the recessive allele frequency q — the question asks for dominant allele frequency p = 1 − q.",
            },
          ],
          hints: [
            "Convert 4% to a decimal: `q² = 0.04`.",
            "Take `sqrt(0.04)` to find `q`, then compute `p = 1 − q`.",
          ],
          solution: [
            "{{q^2 = 0.04}}, so {{q = sqrt(0.04) = 0.20}}.",
            "{{p = 1 - q = 1 - 0.20 = 0.80}}.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q08",
          kind: "short",
          level: "HL",
          commandTerm: "Calculate",
          difficulty: "core",
          guideRef: "natural-selection-hardy-weinberg",
          question:
            "In a meadow of **2,000** wildflowers in Hardy–Weinberg equilibrium, **720** plants have recessive white petals (`ww`). Calculate the percentage (`%`) of plants in the meadow that are heterozygous carriers (`Ww`).",
          answer: { type: "number", value: 48, display: "48%" },
          traps: [
            {
              spec: { type: "number", value: 24 },
              feedback: "Remember heterozygote frequency is 2pq, not pq — multiply by 2!",
            },
          ],
          hints: [
            "Compute `q² = 720 / 2000`, then find `q = sqrt(q²)` and `p = 1 − q`.",
            "Multiply `2 × p × q` and convert to a percentage.",
          ],
          solution: [
            "{{q^2 = 720 / 2000 = 0.36}} → {{q = sqrt(0.36) = 0.60}} and {{p = 0.40}}.",
            "{{2pq = 2 * 0.40 * 0.60 = 0.48 = 48%}}.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q09",
          kind: "short",
          level: "HL",
          commandTerm: "Calculate",
          difficulty: "challenge",
          guideRef: "natural-selection-hardy-weinberg",
          question:
            "In a large herd of **5,000** cattle in Hardy–Weinberg equilibrium, **32** animals exhibit an autosomal recessive coat condition (`hh`). Calculate the expected number of heterozygous carrier cattle (`Hh`) in the herd.",
          answer: { type: "number", value: 736, display: "736" },
          traps: [
            {
              spec: { type: "number", value: 368 },
              feedback: "You computed pq × 5000 — heterozygotes have frequency 2pq (double 368).",
            },
          ],
          hints: [
            "First find {{q^2 = 32 / 5000 = 0.0064}}.",
            "Take `sqrt(0.0064) = 0.08` for `q`, compute `p = 0.92`, then evaluate `2pq × 5000`.",
          ],
          solution: [
            "{{q^2 = 32 / 5000 = 0.0064}} → {{q = sqrt(0.0064) = 0.08}}.",
            "{{p = 1 - 0.08 = 0.92}}.",
            "Heterozygote frequency = {{2pq = 2 * 0.92 * 0.08 = 0.1472}}.",
            "Expected carriers = {{0.1472 * 5000 = 736}} cattle.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q10",
          kind: "short",
          level: "HL",
          commandTerm: "Calculate",
          difficulty: "core",
          guideRef: "natural-selection-hardy-weinberg",
          question:
            "A geneticist genotypes **200** coastal snails directly and counts **90 `BB`**, **80 `Bb`**, and **30 `bb`**. Without assuming Hardy–Weinberg equilibrium, calculate the exact frequency of the recessive allele `b` (`q`, as a decimal to 2 d.p.).",
          answer: { type: "number", value: 0.35, tolerance: 0.005, display: "0.35" },
          traps: [
            {
              spec: { type: "number", value: 0.39 },
              feedback: "Do not take √(30/200) — when all three genotype counts are known, count the actual alleles directly!",
            },
          ],
          hints: [
            "Each diploid snail carries 2 alleles, so 200 snails carry 400 alleles in total.",
            "Each `Bb` carries one `b` allele and each `bb` carries two `b` alleles.",
          ],
          solution: [
            "Total alleles = {{2 * 200 = 400}}.",
            "Total `b` alleles = {{80 + 2 * 30 = 140}}.",
            "{{q = 140 / 400 = 0.35}}.",
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q11",
          kind: "written",
          level: "HL",
          commandTerm: "Explain",
          difficulty: "core",
          guideRef: "reproduction-homeostasis",
          marks: 5,
          question:
            "Explain how the Loop of Henle and antidiuretic hormone (ADH) work together to conserve water and produce hypertonic urine during dehydration.",
          hints: [
            "Explain the distinct permeabilities of the descending and ascending limbs of the Loop of Henle.",
            "Connect elevated blood solute concentration → hypothalamus → posterior pituitary → ADH → aquaporins in the collecting duct.",
          ],
          modelAnswer:
            "In the Loop of Henle, the ascending limb is impermeable to water and actively pumps Na⁺ and Cl⁻ ions into the kidney medulla, generating a steep hypertonic interstitial solute gradient. As filtrate moves down the water-permeable descending limb, water exits by osmosis into this salty medulla. During dehydration, elevated blood osmolarity stimulates hypothalamic osmoreceptors, prompting the posterior pituitary gland to secrete ADH into the bloodstream. ADH binds receptors on collecting duct epithelial cells, inducing vesicles to insert aquaporin channels into apical membranes. Water moves rapidly out of the collecting duct by osmosis down the medullary osmotic gradient into capillaries, returning blood water potential toward normal and producing a small volume of concentrated urine.",
          markScheme: [
            {
              point: "Ascending limb is impermeable to water and actively pumps Na⁺/Cl⁻ into medulla, creating a hypertonic medullary gradient",
              keywords: ["ascending", "pumps", "medulla"],
            },
            {
              point: "Descending limb is permeable to water, allowing osmotic water exit into the salty medulla",
              keywords: ["descending", "osmosis"],
            },
            {
              point: "Hypothalamic osmoreceptors detect high blood solute concentration and trigger posterior pituitary ADH release",
              keywords: ["osmoreceptors", "posterior pituitary"],
            },
            {
              point: "ADH induces insertion of aquaporins into collecting duct cell membranes",
              keywords: ["aquaporin", "collecting duct"],
            },
            {
              point: "Increased water reabsorption into hypertonic medulla yields small volume of concentrated/hypertonic urine",
              keywords: ["reabsorption", "concentrated"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid nephron or ADH osmoregulatory mechanism stated." },
            { band: "1–2", marks: [1, 2], descriptor: "States that ADH increases water reabsorption in the kidney without explaining Loop of Henle gradient or aquaporins." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately explains either the countercurrent Loop of Henle OR the hypothalamic–pituitary–aquaporin ADH pathway in detail." },
            { band: "5", marks: [5, 5], descriptor: "Full mechanistic integration of descending/ascending limb permeabilities, medullary osmotic gradient, hypothalamic osmoreceptors, posterior pituitary ADH, collecting duct aquaporins, and concentrated urine output." },
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q12",
          kind: "written",
          level: "HL",
          commandTerm: "Compare and contrast",
          difficulty: "core",
          guideRef: "reproduction-homeostasis",
          marks: 4,
          question:
            "Contrast spermatogenesis with oogenesis in humans, and explain how the acrosome and cortical reactions ensure successful monospermic fertilisation.",
          hints: [
            "Contrast timing (puberty vs fetus), number of functional gametes per meiosis, and cytokinesis symmetry.",
            "Explain what enzymes from the sperm head digest, and how the egg membrane prevents a second sperm entering.",
          ],
          modelAnswer:
            "Spermatogenesis operates continuously from puberty onward with equal cytokinesis yielding four small motile spermatozoa per primary spermatocyte, whereas oogenesis begins before birth, pauses in prophase I and metaphase II, and uses unequal cytokinesis to yield one large nutrient-rich ovum plus degenerating polar bodies. At fertilisation, the sperm's acrosome releases hydrolytic enzymes that digest a channel through the egg's zona pellucida so plasma membranes fuse. Immediately afterward, cortical granules beneath the egg membrane exocytose enzymes that cross-link glycoproteins, hardening the zona pellucida to block polyspermy.",
          markScheme: [
            {
              point: "Equal cytokinesis yielding 4 sperm per meiosis vs unequal cytokinesis yielding 1 large ovum plus polar bodies",
              keywords: ["unequal", "polar bodies", "four"],
            },
            {
              point: "Timing contrast: continuous from puberty in males vs fetal start with meiotic arrests in females",
              keywords: ["puberty", "fetal", "prophase", "before birth"],
            },
            {
              point: "Acrosome releases hydrolytic enzymes digesting the zona pellucida for sperm entry",
              keywords: ["hydrolytic", "zona pellucida", "digest"],
            },
            {
              point: "Cortical granules exocytose enzymes hardening the zona pellucida to block polyspermy",
              keywords: ["cortical granules", "polyspermy", "harden"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant gametogenesis contrast or fertilisation mechanism." },
            { band: "1–2", marks: [1, 2], descriptor: "Gives one valid difference between sperm and egg formation OR names one fertilisation reaction." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly contrasts cytokinesis/timing in gametogenesis AND explains both zona pellucida digestion (acrosome) and polyspermy prevention (cortical hardening)." },
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q13",
          kind: "written",
          level: "HL",
          commandTerm: "Explain",
          difficulty: "core",
          guideRef: "inheritance-linked-chi",
          marks: 5,
          question:
            "Explain why two genes located close together on the same autosome fail to produce a 1 : 1 : 1 : 1 test-cross ratio, and outline how a χ² goodness-of-fit test is used to assess this departure.",
          hints: [
            "Connect shared chromosome position to co-segregation in meiosis I.",
            "Explain how rare recombinants arise via prophase I crossing over at chiasmata.",
            "State the null hypothesis, expected values, `df = 3`, and decision rule against the `p = 0.05` critical value.",
          ],
          modelAnswer:
            "Because linked genes reside physically on the same chromosome, parental allele combinations travel together during meiosis rather than assorting independently, making parental phenotypes far more abundant than expected. Recombinant allele combinations form only when crossing over exchanges DNA between non-sister chromatids at a chiasma lying between the two loci during prophase I — a rare event when loci sit closely spaced. To test significance, state the null hypothesis (`H₀`) of independent assortment (1 : 1 : 1 : 1), calculate equal expected counts (`E = N/4`), compute `Σ(O − E)² / E`, and compare with the `p = 0.05` critical value (7.815) at `df = 3` (`n − 1`). If `χ²` exceeds 7.815, reject `H₀` as statistically significant evidence of linkage.",
          markScheme: [
            {
              point: "Genes on the same chromosome are inherited together (do not assort independently), giving excess parental phenotypes",
              keywords: ["same chromosome", "parental"],
            },
            {
              point: "Rare recombinants form only via crossing over between non-sister chromatids at a chiasma in prophase I",
              keywords: ["crossing over", "chiasma", "prophase"],
            },
            {
              point: "State null hypothesis H₀ (no significant difference / independent assortment 1:1:1:1) and compute E = N/4",
              keywords: ["null hypothesis", "independent assortment"],
            },
            {
              point: "Compute χ² = Σ(O − E)²/E with degrees of freedom df = n − 1 = 3",
              keywords: ["df = 3", "n - 1", "degrees of freedom"],
            },
            {
              point: "Compare against critical value (7.815 at p = 0.05): reject H₀ if χ² > critical value",
              keywords: ["7.815", "reject", "critical value"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid chromosomal linkage or statistical test explanation." },
            { band: "1–2", marks: [1, 2], descriptor: "States that linked genes are on the same chromosome OR mentions χ² formula without mechanism or decision rule." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains crossing-over recombinants clearly AND outlines most steps of the χ² test." },
            { band: "5", marks: [5, 5], descriptor: "Precise chromosomal explanation (co-segregation + prophase I chiasma between non-sister chromatids) integrated with full χ² workflow (H₀, E, df = 3, critical value 7.815, reject H₀)." },
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q14",
          kind: "written",
          level: "HL",
          commandTerm: "Compare and contrast",
          difficulty: "core",
          guideRef: "natural-selection-hardy-weinberg",
          marks: 5,
          question:
            "Compare stabilizing, directional, and disruptive selection using a biological example for each, and distinguish natural selection from genetic drift.",
          hints: [
            "Specify how each selection mode affects the trait mean and variance/shape.",
            "Give classic examples (birth weight, antibiotic resistance / finch beaks, African seedcrackers).",
            "Explain why genetic drift is non-adaptive and strongest in small populations.",
          ],
          modelAnswer:
            "Stabilizing selection removes both trait extremes while favouring intermediate phenotypes, keeping the mean steady and narrowing variance — as seen in human birth weight. Directional selection favours one extreme over the mean, shifting the average phenotype across generations — illustrated by deeper beaks in drought-hit Galápagos finches or bacterial antibiotic resistance. Disruptive selection favours both extremes over intermediates, generating a bimodal curve — as seen in African seedcracker finches feeding on either soft or very hard seeds. Whereas natural selection causes adaptive, directional shifts driven by differential fitness, genetic drift produces random, non-adaptive allele fluctuations due to sampling error, acting most powerfully in small populations via bottlenecks or founder effects.",
          markScheme: [
            {
              point: "Stabilizing selection favours intermediates, narrows variance around unchanged mean (e.g. human birth weight)",
              keywords: ["birth weight", "variance", "intermediate"],
            },
            {
              point: "Directional selection favours one extreme, shifting mean (e.g. antibiotic resistance or finch beaks)",
              keywords: ["shifts", "shifting", "antibiotic", "beak"],
            },
            {
              point: "Disruptive selection favours both extremes over intermediate, creating bimodal distribution (e.g. seedcracker finches)",
              keywords: ["bimodal", "seedcracker", "both extremes"],
            },
            {
              point: "Natural selection is adaptive and driven by differential survival/reproductive fitness",
              keywords: ["adaptive", "fitness"],
            },
            {
              point: "Genetic drift is random/non-adaptive sampling error strongest in small populations (bottleneck/founder effect)",
              keywords: ["random", "small populations", "sampling"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid selection modes or drift distinction." },
            { band: "1–2", marks: [1, 2], descriptor: "Describes one or two selection modes without clear examples or genetic drift contrast." },
            { band: "3–4", marks: [3, 4], descriptor: "Correctly describes all three selection modes with examples OR two modes plus a solid adaptive vs random-drift distinction." },
            { band: "5", marks: [5, 5], descriptor: "Complete, accurate comparison of stabilizing, directional, and disruptive selection (mean/variance + named examples) AND clear contrast between adaptive fitness selection and small-population random genetic drift." },
          ],
        },
        {
          id: "d3-d4-continuity-organisms-ecosystems-p2-q15",
          kind: "written",
          level: "HL",
          commandTerm: "Explain",
          difficulty: "core",
          guideRef: "natural-selection-hardy-weinberg",
          marks: 4,
          question:
            "State four assumptions required for a population to remain in Hardy–Weinberg equilibrium, and explain what biologists infer when observed genotype counts deviate significantly from `p² : 2pq : q²`.",
          hints: [
            "Recall the 5 assumptions: population size, mating pattern, mutation, migration, selection.",
            "Explain how Hardy–Weinberg acts as a null model of zero evolution.",
          ],
          modelAnswer:
            "Hardy–Weinberg equilibrium requires a very large population (negligible genetic drift), completely random mating, absence of net mutation, zero immigration or emigration (no gene flow), and no natural selection acting on any genotype. Because these conditions hold allele and genotype frequencies constant across generations, HWE serves as an evolutionary null model. When a χ² test shows observed genotype frequencies differ significantly from `p² : 2pq : q²`, at least one assumption is violated — providing quantitative evidence that evolution (selection, drift, gene flow) or non-random mating is actively operating.",
          markScheme: [
            {
              point: "States two valid assumptions (e.g. large population / no drift, random mating)",
              keywords: ["large population", "random mating"],
            },
            {
              point: "States two further valid assumptions (e.g. no mutation, no migration/gene flow, no natural selection)",
              keywords: ["no mutation", "gene flow", "no natural selection", "migration"],
            },
            {
              point: "Explains HWE acts as a null baseline of constant allele/genotype frequencies (no evolution)",
              keywords: ["constant", "null model", "baseline"],
            },
            {
              point: "Significant departure indicates at least one assumption is violated — evolution or non-random mating is occurring",
              keywords: ["violated", "non-random", "evolution"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid HWE assumptions or evolutionary interpretation." },
            { band: "1–2", marks: [1, 2], descriptor: "Lists 2–3 assumptions without explaining significance of deviation." },
            { band: "3–4", marks: [3, 4], descriptor: "States four accurate assumptions AND explains HWE as a zero-evolution baseline whose violation signals active evolutionary forces or non-random mating." },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET — 8 QUESTIONS (4 short + 4 extended written)
  // ===========================================================================
  challenge: [
    {
      id: "d3-d4-continuity-organisms-ecosystems-ch-q01",
      kind: "short",
      level: "HL",
      commandTerm: "Calculate",
      difficulty: "challenge",
      guideRef: "inheritance-linked-chi",
      question:
        "A dihybrid test cross (`GgBb × ggbb`) produces **400** *Drosophila* offspring: **176** grey brown, **164** black ebony, **28** grey ebony, and **32** black brown. Testing against an unlinked 1 : 1 : 1 : 1 null hypothesis (`E = 100` each), calculate `χ²` (to 1 decimal place).",
      answer: { type: "number", value: 196.8, tolerance: 0.1, display: "196.8" },
      hints: [
        "Compute `(O − 100)` for each class: `+76, +64, −72, −68`.",
        "Square each deviation: `5776, 4096, 5184, 4624`.",
        "Sum all four squares and divide by `E = 100`.",
      ],
      solution: [
        "Expected count `E = 400 / 4 = 100` per phenotype.",
        "{{(176 - 100)^2 = 5776}}; {{(164 - 100)^2 = 4096}}; {{(28 - 100)^2 = 5184}}; {{(32 - 100)^2 = 4624}}.",
        "{{χ^2 = (5776 + 4096 + 5184 + 4624) / 100 = 19680 / 100 = 196.8}} (far above `7.815`, strongly rejecting `H₀`; `RF = 60/400 = 15%`).",
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-ch-q02",
      kind: "short",
      level: "HL",
      commandTerm: "Determine",
      difficulty: "challenge",
      guideRef: "natural-selection-hardy-weinberg",
      question:
        "A large diploid population starts in Hardy–Weinberg equilibrium with recessive allele frequency {{q_0 = 0.25}} (so `p₀ = 0.75`). A sudden environmental shift becomes **100% lethal** to homozygous recessive (`aa`) individuals before reproduction, while `AA` and `Aa` survive fully. Determine the recessive allele frequency {{q_1}} among the surviving reproducing adults (as a decimal to 2 d.p.).",
      answer: { type: "number", value: 0.2, tolerance: 0.005, display: "0.20" },
      traps: [
        {
          spec: { type: "number", value: 0 },
          feedback: "Recessive alleles hide safely inside heterozygous carriers (Aa), so a single generation of complete lethal selection never drops q to 0!",
        },
        {
          spec: { type: "number", value: 0.125 },
          feedback: "Remember to divide by the TOTAL surviving population (p² + 2pq = 0.9375), not by 1.00!",
        },
      ],
      hints: [
        "Calculate starting proportions: `AA = 0.75² = 9/16`, `Aa = 2(0.75)(0.25) = 6/16`, `aa = 1/16`.",
        "Eliminate `aa` (`1/16`): remaining survivors total `15/16`, split as `9/15 AA` and `6/15 Aa`.",
        "Each `Aa` carries one `a` allele out of two alleles per diploid individual: `q₁ = (1/2) × (6/15)`.",
      ],
      solution: [
        "Initial genotype proportions: `AA = 9/16`, `Aa = 6/16`, `aa = 1/16`.",
        "After lethal selection removes `aa`, survivors are `9/15` `AA` and `6/15` `Aa`.",
        "Frequency of allele `a` in surviving gene pool: {{q_1 = (1/2) * (6/15) = 3/15 = 0.20}} (matches the general lethal-selection formula {{q_1 = q_0 / (1 + q_0) = 0.25 / 1.25 = 0.20}}).",
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-ch-q03",
      kind: "short",
      level: "SL",
      commandTerm: "Calculate",
      difficulty: "challenge",
      guideRef: "inheritance-linked-chi",
      question:
        "Phenylketonuria (PKU) is autosomal recessive (`aa`). Two heterozygous carrier parents (`Aa × Aa`) have an **unaffected** daughter, Maya. Maya later marries a man who is a known heterozygous carrier (`Aa`). Calculate the probability (`%`, to 1 decimal place) that their first child inherits PKU (`aa`).",
      answer: { type: "number", value: 16.7, tolerance: 0.15, display: "16.7%" },
      traps: [
        {
          spec: { type: "number", value: 25 },
          feedback: "25% assumes Maya is definitely Aa — she could be AA (1/3 chance) or Aa (2/3 chance) given she is unaffected!",
        },
        {
          spec: { type: "number", value: 12.5 },
          feedback: "12.5% uses 1/2 × 1/4, forgetting that Maya is KNOWN to be unaffected (so `aa` is ruled out, making P(Maya is Aa) = 2/3, not 1/2).",
        },
      ],
      hints: [
        "Step 1: From `Aa × Aa`, the three unaffected genotypes are `AA`, `Aa`, `Aa` — so what is `P(Maya is Aa)`?",
        "Step 2: If Maya is `Aa` and her husband is `Aa`, what is `P(child is aa)`?",
        "Step 3: Multiply the two independent probabilities and convert to a percentage.",
      ],
      solution: [
        "Given Maya is unaffected (`aa` excluded), her genotype probabilities from `Aa × Aa` are {{1/3}} `AA` and {{2/3}} `Aa`.",
        "If Maya is `Aa`, crossing `Aa × Aa` gives {{1/4}} chance of an `aa` child.",
        "Combined probability = {{(2/3) * (1/4) = 2/12 = 1/6 = 16.7%}}.",
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-ch-q04",
      kind: "short",
      level: "HL",
      commandTerm: "Calculate",
      difficulty: "challenge",
      guideRef: "reproduction-homeostasis",
      question:
        "An untreated Type 1 diabetic patient has a glomerular filtration rate (GFR) of {{120}} cm³ min⁻¹ and an elevated plasma glucose concentration of {{3.0}} mg cm⁻³. If the proximal convoluted tubule (PCT) Na⁺-glucose cotransporters saturate at a maximum reabsorption rate of {{300}} mg min⁻¹, calculate the rate at which glucose is excreted in the urine (`mg min⁻¹`).",
      answer: { type: "number", value: 60, display: "60" },
      traps: [
        {
          spec: { type: "number", value: 360 },
          feedback: "360 mg min⁻¹ is the total glucose FILTERED into Bowman's capsule — subtract the 300 mg min⁻¹ reabsorbed in the PCT.",
        },
      ],
      hints: [
        "Glucose passes freely during ultrafiltration, so filtrate glucose concentration equals plasma glucose concentration.",
        "Compute filtered glucose load = `GFR × plasma glucose`.",
        "Subtract the maximum PCT reabsorption rate (`300 mg min⁻¹`) from the filtered load.",
      ],
      solution: [
        "Filtered glucose load = {{120 * 3.0 = 360}} mg min⁻¹.",
        "Maximum PCT reabsorption = {{300}} mg min⁻¹.",
        "Urinary glucose excretion = {{360 - 300 = 60}} mg min⁻¹ (glycosuria).",
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-ch-q05",
      kind: "written",
      level: "HL",
      commandTerm: "Analyse",
      difficulty: "challenge",
      guideRef: "reproduction-homeostasis",
      marks: 6,
      question:
        "Analyse why untreated Type 1 diabetes produces BOTH glucose in the urine (glycosuria) and unusually large volumes of urine (polyuria), linking endocrine failure with nephron physiology.",
      hints: [
        "Start with autoimmune β-cell loss → absent insulin → persistently high blood glucose.",
        "Explain why glucose enters Bowman's capsule freely yet overwhelms PCT Na⁺-cotransport.",
        "Connect leftover glucose inside the collecting duct lumen to a reduced osmotic water-potential gradient → osmotic diuresis.",
      ],
      modelAnswer:
        "Autoimmune destruction of pancreatic beta cells eliminates insulin secretion, preventing skeletal muscle and liver uptake and hepatic glycogenesis so blood glucose rises sharply. Because glucose is a small uncharged solute, it passes freely across the glomerular basement membrane into Bowman's capsule at concentrations matching plasma. In the proximal convoluted tubule, Na⁺-glucose cotransport carriers become fully saturated beyond their transport maximum, leaving unabsorbed glucose inside the tubular filtrate (causing glycosuria). As this glucose-rich filtrate travels through the Loop of Henle and collecting duct, the dissolved glucose raises filtrate solute concentration and lowers its water potential. Consequently, the osmotic gradient between lumen and hypertonic medulla shrinks, reducing water reabsorption even when ADH inserts aquaporins — resulting in osmotic diuresis and high urine volume (polyuria).",
      markScheme: [
        {
          point: "Autoimmune loss of pancreatic β cells stops insulin secretion, elevating blood glucose",
          keywords: ["autoimmune", "beta cells", "insulin"],
        },
        {
          point: "Glucose freely crosses glomerular filtration barrier into Bowman's capsule filtrate",
          keywords: ["bowman", "basement membrane", "filtrate"],
        },
        {
          point: "Excess filtered glucose saturates PCT Na⁺-glucose cotransporters (exceeding transport maximum), leaving glucose in urine",
          keywords: ["saturat", "cotransport", "proximal convoluted"],
        },
        {
          point: "Unabsorbed glucose raises tubular solute concentration / lowers filtrate water potential",
          keywords: ["water potential", "solute concentration"],
        },
        {
          point: "Smaller osmotic gradient reduces water reabsorption across collecting duct into medulla",
          keywords: ["osmotic gradient", "collecting duct", "reabsorption"],
        },
        {
          point: "Water remains in filtrate (osmotic diuresis), causing excessive urine volume",
          keywords: ["diuresis", "volume"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid physiological link between insulin lack and nephron function." },
        { band: "1–2", marks: [1, 2], descriptor: "Mentions lack of insulin causing high blood glucose and glucose appearing in urine without explaining saturation or osmosis." },
        { band: "3–4", marks: [3, 4], descriptor: "Correctly explains PCT cotransporter saturation for glycosuria OR osmotic water retention in collecting duct for polyuria." },
        { band: "5–6", marks: [5, 6], descriptor: "Seamless HL integration linking β-cell autoimmune failure, free glomerular filtration, PCT carrier saturation, lowered filtrate water potential, impaired collecting-duct osmotic reabsorption, and osmotic diuresis." },
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-ch-q06",
      kind: "written",
      level: "HL",
      commandTerm: "Evaluate",
      difficulty: "challenge",
      guideRef: "inheritance-linked-chi",
      marks: 6,
      question:
        "Explain how meiosis generates recombinant genetic variation for natural selection, and explain mathematically why the measured recombination frequency between two linked loci on the same chromosome cannot exceed 50%.",
      hints: [
        "Explain BOTH crossing over in prophase I (between linked loci) and independent orientation in metaphase I (between unlinked chromosomes).",
        "Consider a single crossover event between 4 chromatids in a bivalent: how many of the 4 resulting gametes are recombinant vs parental?",
        "Mention what happens when two loci sit very far apart on the same chromosome (multiple crossovers).",
      ],
      modelAnswer:
        "During prophase I of meiosis, homologous chromosomes pair as bivalents and non-sister chromatids exchange DNA segments at chiasmata (**crossing over**), creating novel allele combinations along individual chromosomes. Subsequently, **random orientation** of homologous pairs along the metaphase I equator independently assorts maternal and paternal chromosomes into haploid gametes (`2^n` combinations). For two loci on the same chromosome, each single crossover involves only two of the four chromatids in a bivalent, leaving the other two chromatids intact as parental types; therefore, even if a chiasma occurs between those loci in 100% of meioses, only 2 of 4 gametes (**50%**) can be recombinant. When loci are very far apart, double crossovers restore parental combinations, capping observed recombination frequency at 50% — indistinguishable from unlinked independent assortment.",
      markScheme: [
        {
          point: "Crossing over between non-sister chromatids at chiasmata in prophase I creates new linked allele combinations",
          keywords: ["non-sister", "chiasma", "prophase"],
        },
        {
          point: "Random orientation of bivalents at metaphase I generates independent assortment across chromosomes",
          keywords: ["random orientation", "metaphase"],
        },
        {
          point: "A single crossover involves only 2 of the 4 chromatids in a bivalent",
          keywords: ["two of the four", "2 of 4", "two chromatids", "four chromatids"],
        },
        {
          point: "Even with crossing over in every meiosis, half the gametes remain parental (capping RF at 50%)",
          keywords: ["parental", "50%"],
        },
        {
          point: "Double crossovers between distant loci restore parental allele combinations",
          keywords: ["double crossover", "restore"],
        },
        {
          point: "RF = 50% behaves identically to unlinked independent assortment",
          keywords: ["independent assortment", "unlinked"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid meiotic or mathematical recombination reasoning." },
        { band: "1–2", marks: [1, 2], descriptor: "Names crossing over and random orientation without explaining the 50% ceiling." },
        { band: "3–4", marks: [3, 4], descriptor: "Accurately explains meiotic mechanisms and gives a partial explanation of why RF caps at 50%." },
        { band: "5–6", marks: [5, 6], descriptor: "Full synthesis combining prophase I crossing over, metaphase I random orientation, the 2-of-4 chromatid proof of the 50% limit, double crossovers, and equivalence to independent assortment." },
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-ch-q07",
      kind: "written",
      level: "HL",
      commandTerm: "Discuss",
      difficulty: "challenge",
      guideRef: "natural-selection-hardy-weinberg",
      marks: 6,
      question:
        "In West African regions with endemic *Plasmodium falciparum* malaria, the sickle-cell allele (`Hb^S`) persists at frequencies around 10–15% despite severe mortality in `Hb^S Hb^S` homozygotes. Discuss how heterozygote advantage maintains this allele, contrasting it with Hardy–Weinberg equilibrium and genetic drift.",
      hints: [
        "Explain the distinct fitness of all three genotypes (`Hb^A Hb^A`, `Hb^A Hb^S`, `Hb^S Hb^S`) in a malaria zone.",
        "Explain how balancing selection preserves BOTH alleles above simple mutation–selection balance.",
        "Contrast how Hardy–Weinberg assumes equal fitness and how genetic drift acts randomly regardless of malaria.",
      ],
      modelAnswer:
        "In malaria-endemic zones, `Hb^A Hb^A` homozygotes produce normal haemoglobin but face high mortality from severe *Plasmodium* infection, whereas `Hb^S Hb^S` homozygotes suffer debilitating sickle-cell anaemia that drastically lowers fitness. Heterozygous carriers (`Hb^A Hb^S`) enjoy the highest net survival and reproductive fitness (**heterozygote advantage / balancing selection**) because partially sickled red blood cells suppress parasite replication while preventing severe anaemia. Consequently, selection maintains both `Hb^A` and `Hb^S` at a stable polymorphic equilibrium, keeping `Hb^S` frequencies far higher than in malaria-free regions where directional selection purges it. This directly violates the Hardy–Weinberg no-selection assumption, yielding excess heterozygotes above `2pq`. Unlike random, non-adaptive genetic drift in tiny populations, sickle-cell polymorphism is a predictable, adaptive response tied specifically to malaria prevalence.",
      markScheme: [
        {
          point: "`Hb^A Hb^A` faces high malaria mortality while `Hb^S Hb^S` suffers severe sickle-cell anaemia",
          keywords: ["anaemia", "anemia", "mortality"],
        },
        {
          point: "Heterozygotes (`Hb^A Hb^S`) gain highest fitness by resisting severe malaria without severe anaemia",
          keywords: ["highest", "fitness", "suppress", "resisting"],
        },
        {
          point: "Balancing selection maintains both alleles at a stable polymorphism",
          keywords: ["balancing selection", "polymorph", "both alleles"],
        },
        {
          point: "Violates Hardy–Weinberg no-selection assumption, producing excess heterozygotes relative to `2pq`",
          keywords: ["no-selection", "assumption", "2pq"],
        },
        {
          point: "In malaria-free regions, `Hb^S` declines via directional selection against homozygotes",
          keywords: ["malaria-free", "directional"],
        },
        {
          point: "Contrasts adaptive deterministic selection with random non-adaptive genetic drift",
          keywords: ["non-adaptive", "random", "adaptive"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid evolutionary or genetic explanation." },
        { band: "1–2", marks: [1, 2], descriptor: "Notes that carriers resist malaria without analysing all three genotypes or comparing HWE/drift." },
        { band: "3–4", marks: [3, 4], descriptor: "Explains heterozygote advantage across the three genotypes AND makes one valid link to HWE or genetic drift." },
        { band: "5–6", marks: [5, 6], descriptor: "Thorough HL analysis covering all three genotypes' relative fitness, balancing polymorphism, HWE violation (excess heterozygotes), geographic contrast in malaria-free areas, and distinction from random genetic drift." },
      ],
    },
    {
      id: "d3-d4-continuity-organisms-ecosystems-ch-q08",
      kind: "written",
      level: "SL",
      commandTerm: "Evaluate",
      difficulty: "challenge",
      guideRef: "stability-climate-change",
      marks: 8,
      question:
        "Evaluate how deforestation tipping points in the Amazon rainforest and Arctic positive climate feedbacks threaten long-term biosphere stability, and discuss the biological mechanisms and limitations of afforestation and peatland restoration as carbon sequestration strategies.",
      hints: [
        "Explain the Amazon evapotranspiration–rainfall tipping point (forest → savanna).",
        "Explain Arctic ice–albedo loss AND permafrost methane/CO₂ release.",
        "Explain HOW afforestation (net photosynthesis > respiration) and peatland rewetting (anaerobic acidic waterlogging halting saprotrophic decay) sequester carbon.",
        "Include a critical evaluation/limitation of each mitigation strategy (e.g., monoculture biodiversity loss / wildfire risk for afforestation; agricultural land-use trade-offs / methane release initially for peatlands).",
      ],
      modelAnswer:
        "Amazon forest stability depends on internal water recycling via dense tree transpiration. Clearing beyond a ~20–25% tipping point reduces regional humidity and rainfall, extending dry seasons and fuelling wildfires that push surviving rainforest into a self-reinforcing dry savanna state — releasing massive stored biomass carbon. Simultaneously, Arctic warming drives two amplifying feedbacks: melting bright high-albedo sea ice exposes dark low-albedo ocean water that absorbs extra solar radiation, while thawing permafrost allows anaerobic methanogens and saprotrophs to oxidise ancient peat into CH₄ and CO₂. Together, these cross-biome positive feedbacks risk pushing global climate past irreversible thresholds.\n\n**Afforestation and reforestation** sequester atmospheric CO₂ because growing trees fix carbon via photosynthesis faster than cellular respiration releases it, locking carbon in wood and soil humus; however, poorly planned monoculture plantations reduce native biodiversity, take decades to mature, and remain vulnerable to drought-driven wildfires. **Peatland restoration** blocks drainage canals to rewet bogs, re-establishing waterlogged, anaerobic, acidic conditions that suppress aerobic saprotrophic decomposition and rapidly halt huge carbon emissions; however, rewetting competes with agricultural land use and can briefly emit small pulses of methane before delivering strong long-term net cooling. Both biological solutions are valuable yet insufficient unless paired with rapid fossil-fuel phase-out.",
      markScheme: [
        {
          point: "Amazon deforestation cuts evapotranspiration/rainfall, driving drought/fire toward an irreversible savanna tipping point",
          keywords: ["transpiration", "savanna", "rainfall"],
        },
        {
          point: "Ice–albedo positive feedback: melting reflective ice exposes dark ocean absorbing more solar energy",
          keywords: ["albedo", "dark", "solar"],
        },
        {
          point: "Permafrost thaw enables methanogens/saprotrophs to release CH₄ and CO₂ amplifying warming",
          keywords: ["permafrost", "methanogen", "ch₄", "methane"],
        },
        {
          point: "Afforestation mechanism: net carbon uptake where photosynthesis exceeds respiration, storing carbon in wood/soil",
          keywords: ["photosynthesis", "respiration", "wood"],
        },
        {
          point: "Afforestation limitation: slow timescale, monoculture biodiversity loss, or wildfire/drought reversal risk",
          keywords: ["monoculture", "wildfire", "decades"],
        },
        {
          point: "Peatland restoration mechanism: rewetting restores anaerobic, waterlogged, acidic conditions inhibiting saprotrophic decay",
          keywords: ["rewet", "anaerobic", "waterlogged", "acidic"],
        },
        {
          point: "Peatland limitation: land-use conflict with agriculture or short-term methane emission pulse",
          keywords: ["land use", "agricultural", "pulse"],
        },
        {
          point: "Balanced evaluative conclusion: biological sequestration must complement cutting fossil-fuel emissions",
          keywords: ["fossil-fuel", "fossil fuel", "insufficient"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant ecological tipping points, feedbacks, or mitigation mechanisms." },
        { band: "1–2", marks: [1, 2], descriptor: "Mentions rainforest loss and tree planting superficially without biological mechanisms or limitations." },
        { band: "3–5", marks: [3, 5], descriptor: "Explains tipping points/feedbacks clearly and outlines how afforestation and peatland restoration store carbon, with limited critical evaluation." },
        { band: "6–8", marks: [6, 8], descriptor: "Authoritative IB extended response integrating Amazon transpiration tipping point, ice-albedo and permafrost feedbacks, mechanistic photosynthesis/anaerobic-acidic sequestration, concrete limitations of both strategies, and balanced evaluation." },
      ],
    },
  ],
};
