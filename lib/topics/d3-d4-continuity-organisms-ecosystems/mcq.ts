import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1 — SL CORE (15 questions)
  // answerIndex distribution: [2,0,3,1,0, 2,1,3,2,0, 3,1,0,2,1] -> 0:4, 1:4, 2:4, 3:3
  // ===========================================================================
  {
    id: "d3-d4-continuity-organisms-ecosystems-m1",
    title: "MCQ Paper 1 — Reproduction, Homeostasis & Inheritance (SL Core)",
    level: "SL",
    questions: [
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q01",
        kind: "mcq",
        level: "SL",
        commandTerm: "Explain",
        difficulty: "warmup",
        guideRef: "reproduction-homeostasis",
        question:
          "Around Day 13 of a 28-day human menstrual cycle, what hormonal change directly triggers ovulation on Day 14?",
        options: [
          "High progesterone from the corpus luteum inhibits anterior pituitary FSH release",
          "Falling oestrogen from the follicle triggers rapid uterine endometrium shedding",
          "Sustained high oestrogen exerts positive feedback causing a sharp pituitary LH surge",
          "Low FSH from the hypothalamus stimulates immediate rupture of the corpus luteum",
        ],
        answerIndex: 2,
        hints: [
          "Identify which hormone shows the tallest narrow spike right at Day 14.",
          "Recall how oestrogen's feedback effect switches once the dominant follicle peaks.",
        ],
        explanation:
          "Sustained high oestrogen secreted by the mature Graafian follicle flips hypothalamic–pituitary feedback from negative to **positive**, triggering a massive **LH surge** that causes ovulation. Progesterone only rises *after* ovulation once the corpus luteum forms.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q02",
        kind: "mcq",
        level: "SL",
        commandTerm: "Deduce",
        difficulty: "core",
        guideRef: "reproduction-homeostasis",
        question:
          "If fertilisation does not occur during a menstrual cycle, what directly causes the uterine endometrium to break down and shed during menstruation?",
        options: [
          "Degeneration of the corpus luteum causes progesterone and oestrogen concentrations to fall",
          "A surge in anterior pituitary FSH directly digests the thickened endometrial blood vessels",
          "Continuous secretion of progesterone by the ovary forces contraction of the uterine wall",
          "Rising luteinising hormone from the hypothalamus blocks capillary flow to the endometrium",
        ],
        answerIndex: 0,
        hints: [
          "Which ovarian structure maintains the endometrium during Days 15–26?",
          "What happens to its hormone output if no embryonic hCG signal arrives?",
        ],
        explanation:
          "Without fertilisation, the **corpus luteum** degenerates around Days 24–26, causing **progesterone** and oestrogen levels to drop sharply. Because progesterone is required to maintain the vascular endometrium, its withdrawal initiates menstruation (and lifts negative feedback on FSH).",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q03",
        kind: "mcq",
        level: "SL",
        commandTerm: "Outline",
        difficulty: "core",
        guideRef: "reproduction-homeostasis",
        question:
          "During the initial hormone-stimulation phase of in vitro fertilisation (IVF), why is the patient given daily injections of FSH after suppressing their natural pituitary cycle?",
        options: [
          "To trigger immediate shedding of the uterine lining before egg retrieval surgery",
          "To stimulate the corpus luteum to secrete progesterone before any eggs are collected",
          "To block fertilisation by more than one sperm inside the laboratory culture dish",
          "To induce superovulation so multiple ovarian follicles mature simultaneously for harvest",
        ],
        answerIndex: 3,
        hints: [
          "Normally only one dominant follicle matures per menstrual cycle.",
          "Think about the primary biological target of follicle-stimulating hormone (FSH).",
        ],
        explanation:
          "Injecting supraphysiological **FSH** stimulates **superovulation** — maturing many follicles simultaneously so several oocytes can be harvested, increasing the chance of obtaining viable embryos. Progesterone support is given later *after* embryo transfer.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q04",
        kind: "mcq",
        level: "SL",
        commandTerm: "Outline",
        difficulty: "core",
        guideRef: "reproduction-homeostasis",
        question:
          "When a cereal seed absorbs water at the start of germination, which biochemical sequence mobilises stored food reserves for the growing embryo?",
        options: [
          "Water activates auxin, which stimulates stomata to open and start leaf photosynthesis",
          "Water triggers gibberellin release, inducing amylase synthesis to hydrolyse starch to maltose",
          "Water inhibits amylase enzymes so insoluble cellulose can form cell walls immediately",
          "Water stimulates abscisic acid secretion, converting stored glucose directly into starch",
        ],
        answerIndex: 1,
        hints: [
          "Seeds lack green leaves at germination, so they must mobilise stored starch.",
          "Which plant hormone induces the aleurone layer to produce amylase?",
        ],
        explanation:
          "Imbibition of water activates the embryo to release **gibberellin**, which stimulates aleurone cells to transcribe and secrete **amylase**. Amylase hydrolyses insoluble starch reserves into soluble maltose and glucose for aerobic respiration. Photosynthesis cannot begin until shoots emerge into light.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q05",
        kind: "mcq",
        level: "SL",
        commandTerm: "Identify",
        difficulty: "warmup",
        guideRef: "reproduction-homeostasis",
        question:
          "Thirty minutes after a carbohydrate-rich meal, which pancreatic response restores elevated blood glucose concentration toward its homeostatic setpoint?",
        options: [
          "Beta cells secrete insulin, promoting cellular glucose uptake and liver glycogenesis",
          "Alpha cells secrete glucagon, promoting liver glycogenolysis and glucose release",
          "Beta cells secrete glucagon, accelerating breakdown of stored muscle glycogen",
          "Alpha cells secrete insulin, inhibiting glucose transport into skeletal muscle cells",
        ],
        answerIndex: 0,
        hints: [
          "Match β cells with lowering blood glucose and α cells with raising blood glucose.",
          "Check the suffix: *genesis* means synthesis (building glycogen from glucose).",
        ],
        explanation:
          "High blood glucose stimulates pancreatic **β cells** in the islets of Langerhans to secrete **insulin**, which opens GLUT4 uptake channels in muscle/adipose tissue and stimulates **glycogenesis** (converting glucose to stored glycogen) in the liver. Glucagon from α cells acts during fasting to *raise* blood glucose.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q06",
        kind: "mcq",
        level: "SL",
        commandTerm: "Distinguish",
        difficulty: "core",
        guideRef: "reproduction-homeostasis",
        question:
          "Which statement accurately contrasts the primary physiological cause of Type 1 diabetes with that of Type 2 diabetes?",
        options: [
          "Type 1 results from excess glucagon secretion, whereas Type 2 results from liver failure",
          "Type 1 results from insulin receptor resistance, whereas Type 2 is an autoimmune attack",
          "Type 1 results from autoimmune beta-cell loss, whereas Type 2 involves target-cell insulin resistance",
          "Type 1 results from excess glycogen storage, whereas Type 2 results from absent alpha cells",
        ],
        answerIndex: 2,
        hints: [
          "One type involves virtually zero endogenous insulin production.",
          "The other type often has normal or elevated blood insulin early on, yet cells fail to respond.",
        ],
        explanation:
          "**Type 1 diabetes** is caused by autoimmune destruction of pancreatic **β cells**, eliminating insulin synthesis. **Type 2 diabetes** involves **insulin resistance**, where liver, muscle, and adipose receptors respond poorly to insulin despite insulin still being secreted initially.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q07",
        kind: "mcq",
        level: "SL",
        commandTerm: "Predict",
        difficulty: "warmup",
        guideRef: "reproduction-homeostasis",
        question:
          "A hiker is exposed to freezing alpine wind and core body temperature begins to fall below 37 °C. Which pair of hypothalamic effector responses helps conserve and generate heat?",
        options: [
          "Vasodilation of skin arterioles together with increased sweat gland secretion",
          "Vasoconstriction of skin arterioles together with involuntary skeletal muscle shivering",
          "Vasodilation of skin arterioles together with reduced cellular respiration in brown fat",
          "Vasoconstriction of pulmonary veins together with complete cessation of muscle tone",
        ],
        answerIndex: 1,
        hints: [
          "To conserve heat, should blood flow near the cold skin surface increase or decrease?",
          "Rapid involuntary skeletal muscle contractions release thermal energy from respiration.",
        ],
        explanation:
          "Cold detection by the hypothalamus triggers **vasoconstriction** of skin arterioles (shunting warm blood away from the surface to cut radiation loss) and **shivering** (rapid antagonistic skeletal muscle contractions releasing respiratory heat). Vasodilation and sweating cool the body when overheated.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q08",
        kind: "mcq",
        level: "SL",
        commandTerm: "Calculate",
        difficulty: "core",
        guideRef: "inheritance-linked-chi",
        question:
          "A mother with genotype `I^A i` (blood group A) and a father with genotype `I^B i` (blood group B) have children. What percentage of their children are expected to have blood group O?",
        options: [
          "0% because both parents carry dominant surface antigen alleles",
          "50% because each parent carries one recessive allele",
          "75% because `i` is expressed alongside `I^A` and `I^B`",
          "25% because only one of four equally likely combinations is `ii`",
        ],
        answerIndex: 3,
        hints: [
          "List the two gamete alleles produced by each parent.",
          "Draw the 2 × 2 Punnett grid for (`I^A`, `i`) × (`I^B`, `i`).",
        ],
        explanation:
          "Crossing `I^A i × I^B i` yields four equally probable genotypes: `I^A I^B` (AB), `I^A i` (A), `I^B i` (B), and `ii` (O). Exactly 1 in 4 (**25%**) has blood group O. A common trap is 50%, confusing the single-parent gamete probability with the joint probability of receiving `i` from *both* parents ({{1/2 * 1/2 = 1/4}}).",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q09",
        kind: "mcq",
        level: "SL",
        commandTerm: "Deduce",
        difficulty: "core",
        guideRef: "inheritance-linked-chi",
        question:
          "Haemophilia is an X-linked recessive condition (`X^h`). An affected father (`X^h Y`) and a homozygous unaffected mother (`X^H X^H`) have children. Which outcome is predicted?",
        options: [
          "All sons inherit haemophilia and all daughters are completely allele-free",
          "Half of the sons inherit haemophilia and half of the daughters are affected",
          "None of the sons inherit haemophilia and all daughters are unaffected carriers",
          "Half of the daughters inherit haemophilia and all sons are unaffected carriers",
        ],
        answerIndex: 2,
        hints: [
          "Which sex chromosome does a father pass to his sons, and which to his daughters?",
          "Determine the genotypes `X^H X^h` and `X^H Y` from the Punnett grid.",
        ],
        explanation:
          "A father passes his **Y chromosome** to every son (so sons inherit `X^H` from the mother → `X^H Y`, 0% affected) and passes his **`X^h` chromosome** to every daughter (so every daughter is `X^H X^h`, an obligate unaffected carrier). Males can never be carriers of an X-linked trait.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q10",
        kind: "mcq",
        level: "SL",
        commandTerm: "Deduce",
        difficulty: "core",
        guideRef: "inheritance-linked-chi",
        diagram:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 170" role="img" aria-label="Two-generation pedigree chart showing two unaffected parents I-1 and I-2 with three children: an unaffected son II-1, an affected daughter II-2, and an unaffected daughter II-3">' +
          '<rect x="0" y="0" width="300" height="170" fill="#ffffff" rx="8"/>' +
          '<text x="150" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Family Pedigree (Shaded = Affected)</text>' +
          '<rect x="92" y="38" width="24" height="24" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>' +
          '<line x1="116" y1="50" x2="176" y2="50" stroke="#0f172a" stroke-width="1.8"/>' +
          '<circle cx="188" cy="50" r="12" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>' +
          '<text x="104" y="33" text-anchor="middle" font-size="9" fill="#334155">I-1</text>' +
          '<text x="188" y="33" text-anchor="middle" font-size="9" fill="#334155">I-2</text>' +
          '<line x1="146" y1="50" x2="146" y2="92" stroke="#0f172a" stroke-width="1.8"/>' +
          '<line x1="68" y1="92" x2="224" y2="92" stroke="#0f172a" stroke-width="1.8"/>' +
          '<line x1="68" y1="92" x2="68" y2="112" stroke="#0f172a" stroke-width="1.8"/>' +
          '<line x1="146" y1="92" x2="146" y2="112" stroke="#0f172a" stroke-width="1.8"/>' +
          '<line x1="224" y1="92" x2="224" y2="112" stroke="#0f172a" stroke-width="1.8"/>' +
          '<rect x="56" y="112" width="24" height="24" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>' +
          '<circle cx="146" cy="124" r="12" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>' +
          '<circle cx="224" cy="124" r="12" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>' +
          '<text x="68" y="152" text-anchor="middle" font-size="9" fill="#334155">II-1</text>' +
          '<text x="146" y="152" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">II-2</text>' +
          '<text x="224" y="152" text-anchor="middle" font-size="9" fill="#334155">II-3</text>' +
          '</svg>',
        question:
          "Based on the pedigree chart above (squares = males, circles = females, shaded = affected), what is the ONLY consistent mode of inheritance?",
        options: [
          "Autosomal recessive, because unaffected parents have an affected daughter",
          "X-linked recessive, because only female offspring can inherit two X chromosomes",
          "Autosomal dominant, because the trait skips generation I to appear in generation II",
          "X-linked dominant, because an unaffected father transmitted the allele to his daughter",
        ],
        answerIndex: 0,
        hints: [
          "First test dominance: can two unaffected parents pass a dominant allele?",
          "Next test X-linked recessive: if II-2 were `X^a X^a`, what would her father I-1 have to be?",
        ],
        explanation:
          "Two unaffected parents producing an affected child prove the trait is **recessive** (ruling out dominant modes). If it were X-linked recessive, an affected daughter (`X^a X^a`) would have to inherit `X^a` from her father I-1, making I-1 affected (`X^a Y`). Since I-1 is unaffected, the trait must be **autosomal recessive**.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q11",
        kind: "mcq",
        level: "SL",
        commandTerm: "Explain",
        difficulty: "warmup",
        guideRef: "inheritance-linked-chi",
        question:
          "Why does human skin pigmentation display continuous variation across a smooth bell-shaped distribution rather than a few discrete categories?",
        options: [
          "Skin pigmentation is controlled solely by one X-linked gene with complete dominance",
          "Skin pigmentation is determined purely by UV sunlight without any heritable alleles",
          "Skin pigmentation arises from random somatic mutations occurring only after birth",
          "Skin pigmentation is polygenic, with additive alleles at multiple loci modified by environment",
        ],
        answerIndex: 3,
        hints: [
          "Contrast single-gene traits (like ABO blood groups) with multi-gene traits.",
          "Does UV exposure also modify melanin production alongside genetics?",
        ],
        explanation:
          "Human skin colour is **polygenic**: multiple genes contribute additive amounts of melanin, generating many intermediate phenotypes that approach a normal curve, further smoothed by **environmental interaction** (UV radiation). Single-gene traits produce discontinuous categories.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q12",
        kind: "mcq",
        level: "SL",
        commandTerm: "Explain",
        difficulty: "core",
        guideRef: "natural-selection-hardy-weinberg",
        question:
          "Which statement correctly explains how a bacterial population evolves resistance to an antibiotic during prolonged clinical use?",
        options: [
          "The antibiotic induces specific beneficial mutations so bacteria can adapt to survive",
          "Pre-existing random resistant mutants survive antibiotic exposure and reproduce disproportionately",
          "Individual bacteria develop active immunity and pass acquired antibodies to daughter cells",
          "Susceptible bacteria intentionally transfer chromosomal genes to neutralise the antibiotic",
        ],
        answerIndex: 1,
        hints: [
          "Do mutations happen *before* or *because of* exposure to an antibiotic?",
          "Check for Lamarckian phrasing ('intentionally' or 'become immune').",
        ],
        explanation:
          "Resistance alleles arise through **random mutation** (or pre-existing plasmid transfer) *before* antibiotic exposure. The antibiotic acts as a **selection pressure** killing susceptible cells while resistant variants survive, divide, and increase the resistance allele frequency. Bacteria lack immune systems.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q13",
        kind: "mcq",
        level: "SL",
        commandTerm: "Identify",
        difficulty: "warmup",
        guideRef: "natural-selection-hardy-weinberg",
        question:
          "Male peacocks grow heavy, brightly coloured tail trains that increase predation risk yet persist across generations. Which evolutionary mechanism best accounts for this trait?",
        options: [
          "Sexual selection through female mate choice favouring elaborate plumage despite survival cost",
          "Stabilizing natural selection eliminating both very short and very long tail feathers",
          "Artificial selection imposed by predators selectively hunting drab-feathered males",
          "Ecological succession favouring larger bird body sizes in mature climax woodlands",
        ],
        answerIndex: 0,
        hints: [
          "Natural selection maximizes lifetime reproductive success, not just survival alone.",
          "Which type of selection operates through mate preference?",
        ],
        explanation:
          "**Intersexual selection** (female mate choice) favours males with elaborate trains because the mating advantage outweighs the increased predation cost, increasing net reproductive success and maintaining alleles for ornate plumage.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q14",
        kind: "mcq",
        level: "SL",
        commandTerm: "Explain",
        difficulty: "core",
        guideRef: "stability-climate-change",
        question:
          "Following heavy nitrate and phosphate fertiliser runoff into a freshwater lake, what directly causes widespread fish mortality during eutrophication?",
        options: [
          "Fertiliser nitrates bind directly to fish haemoglobin preventing oxygen transport in blood",
          "Living phytoplankton consume all dissolved carbon dioxide so fish cannot excrete waste",
          "Aerobic saprotrophic bacteria decompose dead algae and plants, depleting dissolved oxygen",
          "Excess phosphate precipitates into solid rock crystals that physically block fish gill filaments",
        ],
        answerIndex: 2,
        hints: [
          "Algae release oxygen while photosynthesising in daylight — what happens when the bloom shades lower plants and dies?",
          "Connect decomposition by saprotrophs to biochemical oxygen demand (BOD).",
        ],
        explanation:
          "Nutrient enrichment triggers an algal bloom that blocks light to submerged macrophytes; as plants and short-lived algae die, **aerobic saprotrophic bacteria** multiply rapidly, creating high **BOD** that strips dissolved O₂ from the water (hypoxia/anoxia), suffocating fish.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m1-q15",
        kind: "mcq",
        level: "SL",
        commandTerm: "Distinguish",
        difficulty: "core",
        guideRef: "stability-climate-change",
        question:
          "Why does methylmercury reach much higher concentrations (ppm) in apex predators like tuna than in phytoplankton at the base of the marine food web?",
        options: [
          "Apex predators absorb mercury directly through their gills at faster rates than algae",
          "Persistent fat-soluble toxins are not excreted and concentrate as biomass drops up trophic levels",
          "Phytoplankton metabolise methylmercury into harmless carbon dioxide within minutes of uptake",
          "Energy transfer efficiency increases to 90% at top trophic levels, amplifying chemical synthesis",
        ],
        answerIndex: 1,
        hints: [
          "Recall the ~10% energy/biomass transfer rule between trophic levels.",
          "If a tuna eats 10 kg of small fish to build 1 kg of tuna, what happens to a non-excretable fat-soluble toxin?",
        ],
        explanation:
          "Because methylmercury is persistent, non-biodegradable, and lipophilic, it is retained in tissues while ~90% of consumed biomass is respired away at each trophic step. Predators therefore concentrate the toxin from large masses of prey — **biomagnification**.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2 — MIXED SL & HL (15 questions)
  // answerIndex distribution: [1,3,0,2,3, 1,2,0,3,2, 0,1,3,0,2] -> 0:4, 1:3, 2:4, 3:4
  // ===========================================================================
  {
    id: "d3-d4-continuity-organisms-ecosystems-m2",
    title: "MCQ Paper 2 — Natural Selection, Stability & Climate Change (SL & HL)",
    questions: [
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q01",
        kind: "mcq",
        level: "SL",
        commandTerm: "Explain",
        difficulty: "warmup",
        guideRef: "reproduction-homeostasis",
        question:
          "What is the primary ecological advantage of seed dispersal mechanisms (such as wind-borne wings or fleshy animal-eaten fruits) in flowering plants?",
        options: [
          "They ensure pollen grains reach the stigma of the exact same flower for self-pollination",
          "They reduce intraspecific competition with the parent plant and aid colonisation of new habitats",
          "They eliminate the need for water and oxygen during embryo germination in dry soils",
          "They prevent double fertilisation so every seed develops directly into a haploid clone",
        ],
        answerIndex: 1,
        hints: [
          "Think about what happens if all seeds fall directly beneath the shaded canopy of their parent tree.",
          "Remember that pollination occurs *before* seeds form.",
        ],
        explanation:
          "Dispersing seeds away from the parent plant reduces **intraspecific competition** for light, water, and mineral ions and allows offspring to colonise new suitable habitats. Pollination is a separate earlier process.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q02",
        kind: "mcq",
        level: "HL",
        commandTerm: "Compare and contrast",
        difficulty: "core",
        guideRef: "reproduction-homeostasis",
        question:
          "Which statement accurately contrasts human oogenesis with spermatogenesis?",
        options: [
          "Oogenesis produces four equal functional ova per meiosis, whereas spermatogenesis produces one",
          "Oogenesis begins only after puberty, whereas spermatogenesis begins during early fetal development",
          "Oogenesis completes meiosis II prior to ovulation, whereas spermatogenesis pauses until fertilisation",
          "Oogenesis involves unequal cytokinesis yielding one large ovum, whereas spermatogenesis forms four sperm",
        ],
        answerIndex: 3,
        hints: [
          "Why does an egg cell need abundant cytoplasm and nutrient reserves compared to a motile sperm?",
          "Recall when meiosis arrests and resumes in females vs males.",
        ],
        explanation:
          "**Oogenesis** begins in the fetus, arrests in prophase I and metaphase II, and uses **unequal cytokinesis** to concentrate cytoplasm into **one functional ovum** plus degenerating polar bodies. **Spermatogenesis** starts at puberty and runs continuously, yielding **four equal haploid sperm** per primary spermatocyte.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q03",
        kind: "mcq",
        level: "SL",
        commandTerm: "Calculate",
        difficulty: "challenge",
        guideRef: "inheritance-linked-chi",
        question:
          "Cystic fibrosis is autosomal recessive (`cc`). Two heterozygous carrier parents (`Cc × Cc`) have a healthy, unaffected child. Given that the child is unaffected, what is the probability that this child is a heterozygous carrier (`Cc`)?",
        options: [
          "{{2/3}} (66.7%), because `cc` is ruled out leaving `CC`, `Cc`, and `Cc`",
          "{{1/2}} (50.0%), because half of all offspring from `Cc × Cc` are heterozygotes",
          "{{1/4}} (25.0%), because only one quadrant of the Punnett grid is unaffected",
          "{{3/4}} (75.0%), because three of the four Punnett outcomes show the dominant allele",
        ],
        answerIndex: 0,
        hints: [
          "Write all 4 equally likely genotypes from `Cc × Cc`: `CC`, `Cc`, `Cc`, `cc`.",
          "Now cross out `cc` because you ALREADY know the child is unaffected!",
        ],
        explanation:
          "From `Cc × Cc`, the four genotypes are `CC`, `Cc`, `Cc`, `cc`. Because the child is known to be **unaffected**, `cc` is excluded, leaving 3 equally likely genotypes (`CC`, `Cc`, `Cc`), of which **2 are carriers** → {{2/3}} (66.7%). The 50% distractor ignores the conditional information.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q04",
        kind: "mcq",
        level: "SL",
        commandTerm: "Calculate",
        difficulty: "core",
        guideRef: "inheritance-linked-chi",
        question:
          "Red–green colour blindness is X-linked recessive (`X^b`). A carrier woman (`X^B X^b`) and a colour-blind man (`X^b Y`) have a daughter. What is the probability that their daughter is colour-blind?",
        options: [
          "0%, because females can never express an X-linked recessive allele",
          "25%, because only one of four total gametes carries the recessive allele",
          "50%, because the daughter gets `X^b` from her father and has a 1/2 chance of `X^b` from her mother",
          "100%, because an affected father transmits colour blindness to every daughter",
        ],
        answerIndex: 2,
        hints: [
          "Notice the question specifies *given the child is a daughter* (only consider female offspring genotypes!).",
          "The father MUST give `X^b` to a daughter; what can the carrier mother give?",
        ],
        explanation:
          "Daughters receive `X^b` from their affected father (`X^b Y`) and receive either `X^B` or `X^b` with equal probability from their carrier mother (`X^B X^b`). Thus daughters are 50% `X^B X^b` (unaffected carrier) and **50% `X^b X^b` (colour-blind)**.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q05",
        kind: "mcq",
        level: "SL",
        commandTerm: "Evaluate",
        difficulty: "core",
        guideRef: "natural-selection-hardy-weinberg",
        question:
          "Selective breeding of *Brassica oleracea* over centuries produced cabbage, broccoli, kale, and cauliflower, yet intensive artificial selection in livestock and crops often creates a major biological risk. What is this risk?",
        options: [
          "Complete elimination of all point mutations across every chromosome in the genome",
          "Immediate reproductive isolation preventing domesticated animals from ever producing gametes",
          "Spontaneous transformation of recessive alleles into lethal dominant alleles during meiosis",
          "Reduced genetic diversity and inbreeding depression that increase vulnerability to disease",
        ],
        answerIndex: 3,
        hints: [
          "What happens to the gene pool when only a few elite individuals are allowed to breed each generation?",
          "Consider homozygosity for rare deleterious recessive alleles and resistance to new pathogens.",
        ],
        explanation:
          "Artificial selection breeds repeatedly from a narrow subset of individuals, stripping away alternative alleles (**reduced genetic diversity**). This raises homozygosity for harmful recessive alleles (**inbreeding depression**) and leaves monoculture crops or herds vulnerable to emerging pathogens.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q06",
        kind: "mcq",
        level: "HL",
        commandTerm: "Identify",
        difficulty: "core",
        guideRef: "natural-selection-hardy-weinberg",
        diagram:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 155" role="img" aria-label="Frequency distribution curve comparing an original broad bell curve in dashed grey with a narrower, taller curve centred on the same mean in solid green">' +
          '<rect x="0" y="0" width="320" height="155" fill="#ffffff" rx="8"/>' +
          '<line x1="34" y1="122" x2="294" y2="122" stroke="#475569" stroke-width="1.5"/>' +
          '<line x1="34" y1="22" x2="34" y2="122" stroke="#475569" stroke-width="1.5"/>' +
          '<path d="M46 121 Q164 25 282 121" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 3"/>' +
          '<path d="M98 121 Q164 8 230 121" fill="#dcfce7" fill-opacity="0.7" stroke="#15803d" stroke-width="2.5"/>' +
          '<line x1="164" y1="24" x2="164" y2="122" stroke="#15803d" stroke-width="1" stroke-dasharray="3 3"/>' +
          '<text x="164" y="140" text-anchor="middle" font-size="10" fill="#334155">Trait Value (Continuous Phenotype)</text>' +
          '<text x="72" y="42" font-size="9" fill="#64748b">--- Before</text>' +
          '<text x="234" y="42" font-size="9" font-weight="700" fill="#15803d">— After</text>' +
          '</svg>',
        question:
          "The graph above compares a trait distribution before (dashed) and after (solid) several generations of selection. Which mode of selection is shown?",
        options: [
          "Directional selection shifting the population mean toward one extreme",
          "Stabilizing selection removing both extremes and narrowing trait variance",
          "Disruptive selection favouring both extremes over intermediate phenotypes",
          "Artificial selection creating a bimodal distribution across two distinct niches",
        ],
        answerIndex: 1,
        hints: [
          "Check whether the peak (mean) moved left/right or stayed centred at the same value.",
          "Compare the width (variance) of the curve before and after selection.",
        ],
        explanation:
          "In **stabilizing selection**, both very low and very high extreme phenotypes suffer higher mortality (e.g., very low and very high human birth weights), leaving the population **mean unchanged** while **narrowing variance**.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q07",
        kind: "mcq",
        level: "HL",
        commandTerm: "Explain",
        difficulty: "core",
        guideRef: "natural-selection-hardy-weinberg",
        question:
          "A storm blows 12 lizards from a large mainland population onto an uninhabited volcanic island. By chance, 4 of the 12 carry a rare neutral allele found in only 1% of the mainland population, so the new island population reaches 33% frequency. Which evolutionary mechanism occurred?",
        options: [
          "Directional natural selection favouring adaptive traits on volcanic rock",
          "Continuous gene flow equalising allele frequencies between island and mainland",
          "Founder effect (genetic drift) producing a random shift in allele frequency",
          "Stabilizing selection preserving the original mainland heterozygote frequency",
        ],
        answerIndex: 2,
        hints: [
          "Notice the allele is described as *neutral* (gives no survival or reproductive advantage).",
          "What do we call genetic drift when a tiny subgroup colonises a new isolated habitat?",
        ],
        explanation:
          "Because the allele is neutral and rose solely through random sampling of 12 colonists, this is the **founder effect** — a form of **genetic drift** that alters allele frequencies randomly without natural selection.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q08",
        kind: "mcq",
        level: "SL",
        commandTerm: "Explain",
        difficulty: "warmup",
        guideRef: "stability-climate-change",
        question:
          "Along the North Pacific coast, local extinction of sea otters leads to explosive sea urchin population growth and collapse of giant kelp forests into urchin barrens. What ecological term best describes sea otters in this community?",
        options: [
          "Keystone species exerting disproportionately strong top-down control on community structure",
          "Pioneer species initiating primary succession on bare submerged volcanic bedrock",
          "Primary producer converting dissolved inorganic carbon into marine kelp biomass",
          "Saprotrophic decomposer recycling organic nutrients from dead kelp fronds",
        ],
        answerIndex: 0,
        hints: [
          "Removing this single predator triggers a dramatic trophic cascade across the entire ecosystem.",
          "Recall the architectural metaphor for a single stone holding up an entire arch.",
        ],
        explanation:
          "A **keystone species** has a disproportionately large impact on community biodiversity and stability relative to its abundance. Sea otters suppress grazing sea urchins, protecting kelp forest habitat for hundreds of marine species.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q09",
        kind: "mcq",
        level: "SL",
        commandTerm: "Compare and contrast",
        difficulty: "core",
        guideRef: "stability-climate-change",
        question:
          "Why does secondary ecological succession after a forest wildfire typically reach a mature woodland community much faster than primary succession on newly cooled volcanic lava?",
        options: [
          "Wildfires sterilise all saprotrophic decomposers so nutrients stay permanently locked in ash",
          "Primary succession has higher biodiversity from the outset, increasing competitive exclusion",
          "Woodland climax trees can germinate directly on bare unweathered basalt without lichens",
          "Soil, organic humus, microbial communities, and a dormant seed bank already remain intact",
        ],
        answerIndex: 3,
        hints: [
          "What critical resource takes centuries for pioneer lichens and mosses to build during primary succession?",
          "Think about what survives underground after a wildfire or farm abandonment.",
        ],
        explanation:
          "**Secondary succession** begins where disturbance removes vegetation while leaving **intact soil, organic nutrients, microorganisms, and dormant seeds/roots**. Primary succession starts on lifeless bare rock and must slowly build soil via weathering and pioneer decay.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q10",
        kind: "mcq",
        level: "SL",
        commandTerm: "Identify",
        difficulty: "core",
        guideRef: "stability-climate-change",
        question:
          "Upland moorlands in Scotland are kept as open heather shrubland instead of developing into native birch and oak woodland through regular sheep grazing and controlled burning. What is this ecological state called?",
        options: [
          "Primary pioneer stage maintained by glacial retreat and rock weathering",
          "Natural climatic climax community determined solely by regional rainfall",
          "Arrested climax (plagioclimax) halted by ongoing human management",
          "Eutrophic dead zone driven by excessive agricultural nitrate leaching",
        ],
        answerIndex: 2,
        hints: [
          "Would succession continue to woodland if grazing and burning stopped?",
          "Recall the IB term for succession deflected or halted by human activity.",
        ],
        explanation:
          "When human activities such as grazing, mowing, or controlled burning repeatedly remove tree seedlings and halt succession before the natural climatic climax, the resulting stable community is an **arrested climax (plagioclimax)**.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q11",
        kind: "mcq",
        level: "SL",
        commandTerm: "Explain",
        difficulty: "warmup",
        guideRef: "stability-climate-change",
        question:
          "How do atmospheric greenhouse gases such as carbon dioxide (`CO₂`) and methane (`CH₄`) warm Earth's lower atmosphere?",
        options: [
          "They transmit incoming short-wave sunlight but absorb and re-emit outgoing long-wave infrared",
          "They reflect incoming short-wave ultraviolet rays back toward Earth's rocky surface",
          "They react exothermically with stratospheric ozone to release heat directly into oceans",
          "They block incoming visible sunlight from reaching photosynthetic plants on land",
        ],
        answerIndex: 0,
        hints: [
          "Distinguish the wavelength of incoming solar radiation from the radiation emitted by warm Earth.",
          "Greenhouse gases vibrate and absorb energy specifically in the infrared band.",
        ],
        explanation:
          "Short-wave solar radiation passes largely unimpeded through the atmosphere to warm Earth's surface; Earth then radiates **long-wave infrared (IR)** energy, which greenhouse gases absorb and re-emit in all directions — including back downward.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q12",
        kind: "mcq",
        level: "SL",
        commandTerm: "Explain",
        difficulty: "core",
        guideRef: "stability-climate-change",
        question:
          "Why does rapid melting of Arctic sea ice act as a positive feedback loop accelerating global warming?",
        options: [
          "Melting sea ice releases massive volumes of dissolved CFCs that destroy polar ozone",
          "Replacing high-albedo white ice with low-albedo dark seawater increases solar heat absorption",
          "Liquid seawater reflects a higher percentage of sunlight back to space than bright snow",
          "Freshwater melt from floating sea ice absorbs infrared radiation more strongly than CO₂",
        ],
        answerIndex: 1,
        hints: [
          "Compare the surface reflectivity (**albedo**) of bright white sea ice (~0.85) with dark open ocean (~0.06).",
          "Does lower albedo mean more reflection or more absorption of sunlight?",
        ],
        explanation:
          "Bright ice has a **high albedo (~0.85)**, reflecting most solar energy, whereas dark open seawater has a **low albedo (~0.06)** and absorbs ~94% of incident sunlight. Melting ice therefore boosts heat absorption, driving further warming and more melting (**positive feedback**).",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q13",
        kind: "mcq",
        level: "SL",
        commandTerm: "Predict",
        difficulty: "core",
        guideRef: "stability-climate-change",
        question:
          "As Arctic temperatures rise, deep layers of frozen peat and permafrost thaw. Which microbial process turns thawing permafrost into a potent positive climate feedback?",
        options: [
          "Enhanced photosynthesis by frozen lichens locking atmospheric nitrogen into bedrock",
          "Rapid calcification by marine corals converting methane gas into solid limestone",
          "Increased nitrogen fixation converting soil methane directly into atmospheric oxygen",
          "Microbial decomposition of thawed organic matter releasing methane (CH₄) and carbon dioxide",
        ],
        answerIndex: 3,
        hints: [
          "Permafrost contains vast reserves of ancient undecayed organic matter.",
          "Which greenhouse gas do anaerobic methanogenic archaea produce in waterlogged thawed soils?",
        ],
        explanation:
          "Thawing permafrost wakes dormant saprotrophs and **anaerobic methanogens** that decompose ancient organic carbon, releasing **CH₄** (which has a much stronger per-molecule warming impact than CO₂) and **CO₂**, amplifying greenhouse warming further.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q14",
        kind: "mcq",
        level: "SL",
        commandTerm: "Explain",
        difficulty: "core",
        guideRef: "stability-climate-change",
        question:
          "In warming European springs, oak budburst and winter moth caterpillar peaks occur two weeks earlier than in 1980, yet migratory pied flycatchers still arrive on almost the same calendar dates, lowering chick survival. What causes this phenological mismatch?",
        options: [
          "Plants and insects respond to rising spring temperatures, whereas bird migration is cued by photoperiod",
          "Migratory birds respond faster to warming temperatures than oak trees can shift budburst",
          "Climate warming has shortened spring day length in northern Europe by roughly two weeks",
          "Winter moth caterpillars have evolved resistance to digestive enzymes in bird stomachs",
        ],
        answerIndex: 0,
        hints: [
          "Does global climate change alter the length of day (photoperiod) on a given calendar date?",
          "Compare the environmental cue used by insects/plants with the cue used by long-distance migrants.",
        ],
        explanation:
          "Oak trees and caterpillars time development using **temperature** (advancing earlier as springs warm), whereas migratory birds trigger departure using **photoperiod (day length)**, which is unaffected by climate warming — uncoupling predator breeding from peak prey abundance.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m2-q15",
        kind: "mcq",
        level: "SL",
        commandTerm: "Distinguish",
        difficulty: "challenge",
        guideRef: "stability-climate-change",
        question:
          "Which statement accurately explains BOTH how ocean warming causes coral bleaching AND how dissolved atmospheric CO₂ impairs coral skeleton growth?",
        options: [
          "Warming dissolves CaCO₃ skeletons directly, while higher ocean pH kills coral polyps",
          "Lower pH expels zooxanthellae algae, while ocean warming increases carbonate ion supply",
          "Warming triggers expulsion of mutualistic zooxanthellae, while carbonic acid lowers carbonate ions",
          "Warming increases dissolved oxygen toxicity, while CO₂ promotes excessive coral calcification",
        ],
        answerIndex: 2,
        hints: [
          "Identify what corals lose when they turn white ('bleach') during marine heatwaves.",
          "Write the ocean acidification equilibrium: `CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻`, and check what extra `H⁺` does to `CO₃²⁻`.",
        ],
        explanation:
          "Marine heat stress causes corals to expel photosynthetic ***Symbiodinium* zooxanthellae** (**coral bleaching**), depriving corals of organic nutrients. Separately, absorbed CO₂ forms **carbonic acid**, releasing `H⁺` ions that lower pH and bind carbonate ions (`CO₃²⁻`), hindering **CaCO₃** calcification.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3 — HL EXTENSIONS (15 questions)
  // answerIndex distribution: [3,1,2,0,1, 3,0,2,1,3, 2,0,3,1,2] -> 0:3, 1:4, 2:4, 3:4
  // ===========================================================================
  {
    id: "d3-d4-continuity-organisms-ecosystems-m3",
    title: "MCQ Paper 3 — HL Mastery: Nephron, Linked Genes, χ² & Hardy–Weinberg",
    level: "HL",
    questions: [
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q01",
        kind: "mcq",
        level: "HL",
        commandTerm: "Distinguish",
        difficulty: "core",
        guideRef: "reproduction-homeostasis",
        question:
          "During human fertilisation, what are the distinct roles of the acrosome reaction and the cortical reaction?",
        options: [
          "Acrosome prevents polyspermy by hardening the membrane; cortical digests follicle cells",
          "Acrosome triggers meiosis I in the egg; cortical releases progesterone into the oviduct",
          "Acrosome fuses sperm and egg nuclei directly; cortical propels the sperm flagellum forward",
          "Acrosome digests the zona pellucida for entry; cortical hardens it to prevent polyspermy",
        ],
        answerIndex: 3,
        hints: [
          "Order the two events: first one sperm must penetrate the glycoprotein coat; second, extra sperm must be locked out.",
          "Where are cortical granules located — in the sperm head or beneath the egg plasma membrane?",
        ],
        explanation:
          "Hydrolytic enzymes released during the sperm's **acrosome reaction** digest a path through the **zona pellucida**. Immediately upon sperm–egg membrane fusion, egg **cortical granules** release enzymes that cross-link glycoproteins, hardening the zona pellucida to block **polyspermy**.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q02",
        kind: "mcq",
        level: "HL",
        commandTerm: "Explain",
        difficulty: "core",
        guideRef: "reproduction-homeostasis",
        question:
          "Why does an implanting human blastocyst secrete human chorionic gonadotropin (hCG) during the first eight weeks of pregnancy?",
        options: [
          "To trigger uterine myometrium contractions that move the embryo down the oviduct",
          "To prevent degeneration of the corpus luteum so progesterone maintains the endometrium",
          "To stimulate anterior pituitary FSH release so new follicles ovulate during pregnancy",
          "To replace placental oxygen transport across the umbilical artery before week eight",
        ],
        answerIndex: 1,
        hints: [
          "What normally happens to the corpus luteum around Day 25 if no pregnancy occurs?",
          "Which hormone is detected by home pregnancy test strips and keeps progesterone high early on?",
        ],
        explanation:
          "**hCG** mimics LH to rescue the **corpus luteum**, ensuring continuous **progesterone** and oestrogen secretion that preserves the uterine endometrium until the developing **placenta** takes over hormone synthesis around weeks 8–12.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q03",
        kind: "mcq",
        level: "HL",
        commandTerm: "Explain",
        difficulty: "core",
        guideRef: "reproduction-homeostasis",
        question:
          "Which hormonal sequence accurately represents the positive feedback loop driving human childbirth (parturition)?",
        options: [
          "High progesterone stimulates oxytocin secretion, which relaxes uterine smooth muscle",
          "Cervical stretch triggers FSH release, which softens the fetal skull during delivery",
          "Cervical stretch triggers oxytocin release, strengthening myometrium contractions and stretch",
          "Oxytocin stimulates corpus luteum growth, raising progesterone to halt labour contractions",
        ],
        answerIndex: 2,
        hints: [
          "Does progesterone inhibit or promote uterine contractions during pregnancy?",
          "Follow the loop: fetal head presses cervix → stretch receptors → posterior pituitary → hormone → uterine wall.",
        ],
        explanation:
          "At term, falling progesterone lifts uterine inhibition; pressure of the fetal head stretches the cervix, sending nerve impulses to the posterior pituitary to secrete **oxytocin**. Oxytocin drives stronger **myometrium** contractions, increasing cervical stretch and triggering even more oxytocin until birth completes.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q04",
        kind: "mcq",
        level: "HL",
        commandTerm: "Explain",
        difficulty: "core",
        guideRef: "reproduction-homeostasis",
        question:
          "Why are plasma proteins such as albumin normally absent from glomerular filtrate in Bowman's capsule despite high filtration pressure?",
        options: [
          "The negatively charged basement membrane and podocyte slits block large plasma proteins",
          "Plasma proteins are actively pumped back out of Bowman's capsule by ATP carrier pumps",
          "The afferent arteriole is narrower than the efferent arteriole, preventing protein entry",
          "Proteases inside capillary fenestrations hydrolyse plasma proteins before filtration",
        ],
        answerIndex: 0,
        hints: [
          "Identify the three physical layers of the glomerular filtration barrier.",
          "Which structural feature acts as the primary molecular size-and-charge filter?",
        ],
        explanation:
          "Although a wider afferent arteriole and narrower efferent arteriole generate high hydrostatic pressure, the negatively charged **basement membrane** and narrow filtration slits between **podocyte** foot processes retain large plasma proteins and blood cells inside the capillary.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q05",
        kind: "mcq",
        level: "HL",
        commandTerm: "Explain",
        difficulty: "core",
        guideRef: "reproduction-homeostasis",
        question:
          "How are epithelial cells of the proximal convoluted tubule (PCT) structurally adapted to selectively reabsorb 100% of filtered glucose and amino acids?",
        options: [
          "Thick impermeable keratinised walls preventing any osmotic movement of water",
          "Dense apical microvilli for large surface area and abundant mitochondria for Na⁺-cotransport",
          "Wide fenestrated pores allowing bulk passive flow of blood cells back into capillaries",
          "ADH-sensitive aquaporin channels that actively pump glucose directly into the medulla",
        ],
        answerIndex: 1,
        hints: [
          "Selective reabsorption relies on active Na⁺ pumping to power secondary cotransport.",
          "Which organelle supplies ATP, and which membrane foldings maximise transport area?",
        ],
        explanation:
          "PCT epithelial cells possess a brush border of **microvilli** (maximising surface area for cotransporters) and abundant **mitochondria** supplying ATP for basolateral Na⁺/K⁺ pumps that drive Na⁺-linked **glucose and amino acid** reabsorption.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q06",
        kind: "mcq",
        level: "HL",
        commandTerm: "Explain",
        difficulty: "challenge",
        guideRef: "reproduction-homeostasis",
        question:
          "How does the countercurrent multiplier of the Loop of Henle establish a hypertonic interstitial fluid in the kidney medulla?",
        options: [
          "The descending limb actively pumps Na⁺ out while remaining completely impermeable to water",
          "Both descending and ascending limbs actively transport water out into surrounding capillaries",
          "The ascending limb passively absorbs urea while releasing water by osmosis into the cortex",
          "The descending limb loses water by osmosis while the water-impermeable ascending limb pumps out Na⁺/Cl⁻",
        ],
        answerIndex: 3,
        hints: [
          "Match each limb (descending vs ascending) with its permeability to water and ions.",
          "Which limb builds the salty medulla without letting water dilute it?",
        ],
        explanation:
          "The **descending limb** is permeable to water (water exits by osmosis into the salty medulla, concentrating filtrate) while the **ascending limb** is **impermeable to water** and actively pumps **Na⁺ and Cl⁻** out into the medulla, multiplying the osmotic gradient up to ~1,200 mOsm kg⁻¹.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q07",
        kind: "mcq",
        level: "HL",
        commandTerm: "Predict",
        difficulty: "core",
        guideRef: "reproduction-homeostasis",
        question:
          "After sweating heavily during a marathon without drinking fluids, what homeostatic response occurs in a healthy runner's kidneys?",
        options: [
          "Posterior pituitary ADH rises, inserting collecting duct aquaporins to produce concentrated urine",
          "Anterior pituitary ADH falls, closing collecting duct aquaporins to produce dilute urine",
          "Posterior pituitary ADH falls, increasing water excretion to lower blood solute potential",
          "Adrenal ADH rises, stopping glomerular ultrafiltration completely until water is consumed",
        ],
        answerIndex: 0,
        hints: [
          "Sweating raises blood solute concentration (lowers blood water potential).",
          "Recall which gland releases ADH and what ADH does to collecting duct permeability.",
        ],
        explanation:
          "High blood osmolarity stimulates hypothalamic osmoreceptors → **posterior pituitary** secretes more **ADH** → collecting duct cells insert **aquaporins** → increased osmotic water reabsorption into the hypertonic medulla → small volume of **concentrated (hypertonic) urine**.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q08",
        kind: "mcq",
        level: "HL",
        commandTerm: "Calculate",
        difficulty: "core",
        guideRef: "inheritance-linked-chi",
        question:
          "In pea plants, tall stem (`T`) is dominant to dwarf (`t`), and round seed (`R`) is dominant to wrinkled (`r`). The two genes assort independently. In the dihybrid cross `TtRr × TtRr`, what percentage of offspring are expected to be tall with wrinkled seeds (`T_rr`)?",
        options: [
          "6.25% ({{1/16}} of the offspring)",
          "56.25% ({{9/16}} of the offspring)",
          "18.75% ({{3/16}} of the offspring)",
          "25.0% ({{4/16}} of the offspring)",
        ],
        answerIndex: 2,
        hints: [
          "Multiply the two independent monohybrid probabilities: `P(T_)` × `P(rr)`.",
          "From `Tt × Tt`, `P(T_) = 3/4`; from `Rr × Rr`, `P(rr) = 1/4`.",
        ],
        explanation:
          "Under independent assortment (`9 : 3 : 3 : 1`), the probability of tall (`T_`) is {{3/4}} and wrinkled (`rr`) is {{1/4}}, giving {{(3/4) * (1/4) = 3/16 = 18.75%}}. Note that `9/16` (56.25%) is tall round, and `1/16` (6.25%) is dwarf wrinkled.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q09",
        kind: "mcq",
        level: "HL",
        commandTerm: "Calculate",
        difficulty: "core",
        guideRef: "inheritance-linked-chi",
        question:
          "A test cross of a dihybrid heterozygous fly (`AB / ab × ab / ab`) yields 1,000 offspring: 415 `AB`, 405 `ab`, 92 `Ab`, and 88 `aB`. What is the recombination frequency between loci A and B?",
        options: [
          "9.2% based solely on the single largest recombinant phenotype class",
          "18.0% based on combining both recombinant classes divided by 1,000",
          "41.5% based on the most abundant parental phenotype class in the cross",
          "82.0% based on summing the two parental classes divided by 1,000",
        ],
        answerIndex: 1,
        hints: [
          "Which two classes are the **recombinants** — the abundant pair or the rare pair?",
          "Add BOTH recombinant counts together before dividing by total offspring (1,000).",
        ],
        explanation:
          "The two rare classes (`92 Ab + 88 aB = 180`) are the **recombinants** formed by prophase I crossing over. Recombination frequency = {{(180 / 1000) * 100% = 18.0%}}. Using 82.0% mistakenly uses the parental types.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q10",
        kind: "mcq",
        level: "HL",
        commandTerm: "Evaluate",
        difficulty: "core",
        guideRef: "inheritance-linked-chi",
        question:
          "A student conducts a χ² goodness-of-fit test on a dihybrid cross with 4 phenotypic categories (`p = 0.05` critical values: `df = 2 → 5.991`, `df = 3 → 7.815`, `df = 4 → 9.488`) and obtains {{χ^2 = 12.40}}. What is the correct statistical conclusion?",
        options: [
          "Use `df = 4`; fail to reject `H₀` because deviation is due to random sampling chance",
          "Use `df = 2`; accept `H₀` because the genes definitely assort independently",
          "Use `df = 3`; fail to reject `H₀` because `12.40` is larger than `7.815`",
          "Use `df = 3`; reject `H₀` because observed counts differ significantly from expected",
        ],
        answerIndex: 3,
        hints: [
          "Recall {{df = n - 1}}, where `n` is the number of phenotypic categories.",
          "When {{χ^2 > χ^2_crit}}, is the difference statistically significant (`p < 0.05`)?",
        ],
        explanation:
          "With 4 phenotypic categories, {{df = 4 - 1 = 3}}, giving critical value **7.815** at `p = 0.05`. Since {{12.40 > 7.815}}, `p < 0.05` and we **reject the null hypothesis (`H₀`)**: the observed ratio departs significantly from expected independent assortment.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q11",
        kind: "mcq",
        level: "HL",
        commandTerm: "Calculate",
        difficulty: "challenge",
        guideRef: "inheritance-linked-chi",
        question:
          "An unlinked dihybrid test cross (`AaBb × aabb`) produces 200 offspring distributed across the 4 phenotypes as: **58, 42, 54, and 46**. What is the calculated χ² value against a 1 : 1 : 1 : 1 hypothesis (critical value at `df = 3`, `p = 0.05` is `7.815`)?",
        options: [
          "{{χ^2 = 1.60}}, so reject the null hypothesis of independent assortment",
          "{{χ^2 = 16.0}}, so reject the null hypothesis and infer autosomal linkage",
          "{{χ^2 = 3.20}}, so fail to reject the null hypothesis of independent assortment",
          "{{χ^2 = 6.40}}, so reject the null hypothesis at the 5% significance level",
        ],
        answerIndex: 2,
        hints: [
          "Expected count per category is {{E = 200 / 4 = 50}}.",
          "Square the deviations `(O − E)`: `+8`, `−8`, `+4`, `−4`, sum their squares, and divide by `50`.",
        ],
        explanation:
          "Expected count `E = 50` for each class. Deviations are `+8, −8, +4, −4`. {{χ^2 = (64 + 64 + 16 + 16) / 50 = 160 / 50 = 3.20}}. Since {{3.20 <= 7.815}}, we **fail to reject `H₀`** — the variation is consistent with random chance under independent assortment.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q12",
        kind: "mcq",
        level: "HL",
        commandTerm: "Calculate",
        difficulty: "core",
        guideRef: "natural-selection-hardy-weinberg",
        question:
          "In a large population in Hardy–Weinberg equilibrium, **16%** of individuals exhibit a recessive autosomal phenotype (`aa`). What percentage of the population are heterozygous carriers (`Aa`)?",
        options: [
          "48%, because `q = 0.4`, `p = 0.6`, and `2pq = 0.48`",
          "24%, because `q = 0.4`, `p = 0.6`, and `pq = 0.24`",
          "32%, because doubling the 16% recessive phenotype gives carriers",
          "36%, because `p = 0.6` and `p² = 0.36` represents heterozygotes",
        ],
        answerIndex: 0,
        hints: [
          "Start with {{q^2 = 0.16}} and take the square root to get `q`.",
          "Remember heterozygote frequency is **`2pq`**, not `pq` or `p²`!",
        ],
        explanation:
          "{{q^2 = 0.16}} → {{q = sqrt(0.16) = 0.4}} → {{p = 1 - 0.4 = 0.6}}. Heterozygote frequency is {{2pq = 2 * 0.6 * 0.4 = 0.48}} (**48%**). The 24% trap omits the factor of 2 in `2pq`, while 36% is `p²` (`AA`).",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q13",
        kind: "mcq",
        level: "HL",
        commandTerm: "Calculate",
        difficulty: "challenge",
        guideRef: "natural-selection-hardy-weinberg",
        question:
          "A recessive genetic disorder occurs in **1 in 400** individuals ({{q^2 = 0.0025}}) in a city of 10,000 people assumed to be in Hardy–Weinberg equilibrium. How many heterozygous carriers (`Aa`) are expected in this city?",
        options: [
          "25 carriers, equal to the number of homozygous recessive individuals",
          "50 carriers, obtained by doubling the number of affected individuals",
          "475 carriers, calculated from `pq × 10,000` without the factor of 2",
          "950 carriers, calculated from `q = 0.05`, `p = 0.95`, and `2pq × 10,000`",
        ],
        answerIndex: 3,
        hints: [
          "Find {{q = sqrt(1 / 400) = sqrt(0.0025)}} first.",
          "Compute {{p = 1 - q}}, then multiply {{2pq}} by `10,000`.",
        ],
        explanation:
          "{{q^2 = 1/400 = 0.0025}} → {{q = 0.05}} and {{p = 0.95}}. Carrier frequency is {{2pq = 2 * 0.95 * 0.05 = 0.095}} (9.5%). Out of 10,000 people, expected carriers = {{0.095 * 10000 = 950}}.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q14",
        kind: "mcq",
        level: "HL",
        commandTerm: "Evaluate",
        difficulty: "core",
        guideRef: "natural-selection-hardy-weinberg",
        question:
          "Which condition directly violates one of the five Hardy–Weinberg equilibrium assumptions and shifts observed genotype proportions away from `p² : 2pq : q²`?",
        options: [
          "Random mating across an isolated population of one million diploid individuals",
          "Assortative mating in which organisms preferentially mate with similar phenotypes",
          "Equal survival and equal reproductive output across all three diploid genotypes",
          "Absence of immigration, emigration, and new point mutations over ten generations",
        ],
        answerIndex: 1,
        hints: [
          "Review the 5 HWE assumptions: large size, random mating, no mutation, no gene flow, no selection.",
          "Three choices actually *satisfy* HWE assumptions — pick the single violation!",
        ],
        explanation:
          "**Assortative mating** (preferential mating with similar phenotypes) violates the **random mating** assumption, increasing homozygosity (`AA` and `aa`) and depressing heterozygote frequency (`2pq`) relative to Hardy–Weinberg expectations.",
      },
      {
        id: "d3-d4-continuity-organisms-ecosystems-m3-q15",
        kind: "mcq",
        level: "HL",
        commandTerm: "Analyse",
        difficulty: "core",
        guideRef: "natural-selection-hardy-weinberg",
        question:
          "In Cameroon, African black-bellied seedcracker finches feed on either very soft sedge seeds or very hard sedge seeds, with no intermediate seed hardness available. Birds with medium-sized beaks crack both poorly and starve more often. What evolutionary pattern results?",
        options: [
          "Stabilizing selection converging all finches onto a single intermediate beak width",
          "Genetic drift eliminating both small-beaked and large-beaked homozygotes randomly",
          "Disruptive selection generating a bimodal beak-size distribution with two distinct peaks",
          "Hardy–Weinberg equilibrium maintaining constant intermediate beak frequencies forever",
        ],
        answerIndex: 2,
        hints: [
          "Which phenotypes have the highest survival: small, medium, or large beaks?",
          "Selection against the intermediate phenotype splits the distribution into two peaks.",
        ],
        explanation:
          "When **both extremes** (very small and very large beaks) outperform the intermediate phenotype, **disruptive selection** increases variance and produces a **bimodal distribution**, potentially driving reproductive divergence.",
      },
    ],
  },
];
