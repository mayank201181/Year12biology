import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "d3-d4-continuity-organisms-ecosystems",
  title: "Theme D (3–4): Continuity & Change — Organisms & Ecosystems",
  strand: "Theme D: Continuity & Change",
  icon: "🌍",
  level: "SL",
  summary:
    "How organisms maintain internal stability and pass heritable traits across generations, and how natural selection, ecological stability, and anthropogenic climate change reshape populations and ecosystems.",
  intro:
    "Living systems perform a remarkable balancing act: they preserve **continuity** — through regulated reproduction, faithful Mendelian and chromosomal inheritance, and tight negative-feedback homeostasis — while simultaneously undergoing **change** across evolutionary and ecological timescales. In IB Diploma Biology Theme D (Levels 3 & 4, First Assessment 2025), you connect hormone feedback loops and nephron osmoregulation (D3.1 & D3.3) with pedigrees, linked genes, and χ² goodness-of-fit testing (D3.2), then scale up to Hardy–Weinberg population genetics (D4.1), keystone species, biomagnification, succession, and planetary climate tipping points (D4.2–D4.3).",
  guide: [
    // =========================================================================
    // SECTION 1: D3.1 & D3.3
    // =========================================================================
    {
      id: "reproduction-homeostasis",
      heading: "D3.1 & D3.3 Reproduction, Menstrual Hormones & Homeostasis",
      level: "SL",
      discovery: {
        problem:
          "During Days 5–11 of the human menstrual cycle, rising oestrogen **suppresses** FSH and LH secretion from the anterior pituitary. Yet around Day 13, an even higher peak of oestrogen triggers an explosive **LH surge** that causes ovulation on Day 14. How can the *same* hormone first inhibit and then stimulate the pituitary — and why do combined oral contraceptive pills prevent ovulation?",
        idea:
          "Moderate oestrogen exerts **negative feedback** on the hypothalamus and anterior pituitary, preventing extra follicles from maturing. Once a dominant Graafian follicle sustains high oestrogen above a threshold for ~48 hours, the hypothalamic–pituitary response flips to **positive feedback**, triggering a massive LH surge (and smaller FSH spike) that ruptures the follicle. Combined contraceptive pills supply steady synthetic oestrogen and progesterone that keep negative feedback locked on, suppressing FSH and LH so no follicle matures and no LH surge occurs.",
      },
      body:
        "### 1. Asexual vs Sexual Reproduction (D3.1)\n" +
        "- **Asexual reproduction** (mitosis, binary fission, budding, vegetative propagation) produces genetically identical clones rapidly from a single parent — advantageous in stable habitats, but leaves populations vulnerable to new pathogens or environmental shifts.\n" +
        "- **Sexual reproduction** combines haploid gametes produced by meiosis (crossing over in prophase I + random orientation in metaphase I) via random fertilisation, generating vast heritable variation on which natural selection can act.\n\n" +
        "### 2. The Human Menstrual Cycle & IVF (SL)\n" +
        "Four hormones coordinate ovarian follicle development and uterine endometrium preparation over ~28 days:\n" +
        "| Hormone | Source | Primary target & effect | Feedback role |\n" +
        "|---|---|---|---|\n" +
        "| **FSH** | Anterior pituitary | Stimulates ovarian follicle growth and oestrogen secretion | Inhibited by moderate oestrogen and progesterone |\n" +
        "| **Oestrogen** | Developing ovarian follicle | Repairs and thickens uterine endometrium; stimulates LH receptors | Negative feedback on FSH early; **positive feedback** at peak (Day 12–13) → LH surge |\n" +
        "| **LH** | Anterior pituitary | Surge triggers **ovulation** (Day 14) and converts ruptured follicle into **corpus luteum** | Driven by oestrogen positive feedback; later suppressed by progesterone |\n" +
        "| **Progesterone** | Corpus luteum (later placenta) | Maintains vascular, secretory endometrium ready for implantation | Strong **negative feedback** inhibiting FSH and LH so no new follicle develops |\n\n" +
        "If fertilisation does not occur, the corpus luteum degenerates around Day 24–26. Progesterone and oestrogen drop sharply, endometrium breaks down (**menstruation**, Days 1–5), and negative feedback is lifted so FSH rises to start the next cycle.\n\n" +
        "**In vitro fertilisation (IVF):** Daily GnRH agonist/antagonist drugs first halt the patient's natural pituitary cycle; injected **FSH** (often with LH) stimulates **superovulation** of multiple follicles; an hCG/LH trigger matures oocytes before surgical collection; eggs are fertilised with prepared sperm in a dish; healthy embryos are transferred to the uterus supported by supplemental **progesterone**.\n\n" +
        "### 3. Flowering Plant Reproduction (SL)\n" +
        "- **Pollination** is the transfer of pollen grains from anther to stigma (distinct from fertilisation!). **Cross-pollination** increases genetic diversity; insect-pollinated flowers show bright petals, scent, nectar, and sticky pollen (a classic mutualism), whereas wind-pollinated grasses have feathery stigmas, exposed anthers, and abundant light pollen.\n" +
        "- **Fertilisation:** A pollen tube grows down the style to the ovule in the ovary; a male gamete nucleus fuses with the egg nucleus to form a diploid zygote (embryo), while the ovule develops into a **seed** and the ovary becomes a **fruit**.\n" +
        "- **Seed dispersal** (wind, water, animal ingestion/hooks, explosive pods) reduces intraspecific competition with the parent plant and colonises new habitats.\n" +
        "- **Germination** requires **water** (rehydrates tissues and triggers **gibberellin** release), **oxygen** (aerobic respiration for ATP), and a suitable **temperature** (enzyme activity). Gibberellin induces aleurone cells to synthesise **amylase**, hydrolysing insoluble starch reserves into soluble maltose and glucose for the growing embryo.\n\n" +
        "### 4. Homeostasis: Negative Feedback, Blood Glucose & Thermoregulation (D3.3 SL)\n" +
        "**Homeostasis** maintains internal physiological variables within narrow tolerance limits despite external fluctuations using **negative feedback**: a receptor detects deviation from a setpoint, a control centre compares against the setpoint, and effectors reverse the change.\n\n" +
        "- **Blood glucose regulation (islets of Langerhans in the pancreas):**\n" +
        "  - *High blood glucose (after a meal):* Pancreatic **β cells** secrete **insulin** into the blood → target cells (liver, skeletal muscle, adipose) insert GLUT4 glucose channels and increase uptake → liver and muscle convert glucose into insoluble **glycogen** (**glycogenesis**) and increase respiration → blood glucose falls back toward ~5 mmol dm⁻³.\n" +
        "  - *Low blood glucose (fasting/exercise):* Pancreatic **α cells** secrete **glucagon** → liver cells hydrolyse glycogen back to glucose (**glycogenolysis**) and synthesise glucose from amino acids/glycerol (**gluconeogenesis**) → glucose enters blood.\n" +
        "  - **Type 1 diabetes:** Autoimmune destruction of pancreatic β cells (usually early onset); no insulin produced; treated with monitored insulin injections.\n" +
        "  - **Type 2 diabetes:** Target cells develop **insulin resistance** (downregulated/unresponsive insulin receptors), strongly linked to diet, obesity, and genetics; managed through diet, exercise, and insulin-sensitising medication.\n" +
        "- **Thermoregulation:** Peripheral skin thermoreceptors and core **hypothalamus** thermoreceptors detect deviation from ~37 °C. *Too hot:* **vasodilation** of skin arterioles increases heat radiation, **sweat glands** secrete water for evaporative cooling, metabolic rate decreases. *Too cold:* **vasoconstriction** shunts blood away from skin, **shivering** (rapid antagonistic skeletal muscle contractions) generates metabolic heat, **thyroxin** and brown adipose tissue increase cellular respiration, and hair erector muscles contract.\n\n" +
        "### 5. [HL] Gametogenesis, Fertilisation & Positive Feedback in Birth\n" +
        "- **Spermatogenesis** (in seminiferous tubules of testes): Continuous from puberty; mitosis of spermatogonia → meiosis produces **4 equal haploid spermatozoa** per primary spermatocyte; **Sertoli cells** nourish developing sperm; **Leydig cells** secrete testosterone.\n" +
        "- **Oogenesis** (in ovaries): Begins in fetal life (arrested in prophase I); resumes one follicle per cycle from puberty (arrested in metaphase II until fertilisation); **unequal cytokinesis** concentrates cytoplasm and nutrients into **1 large ovum** plus tiny degenerating polar bodies.\n" +
        "- **Fertilisation:** Sperm penetrates follicle cells; **acrosome reaction** releases hydrolytic enzymes digesting the **zona pellucida**; sperm and egg plasma membranes fuse; **cortical reaction** releases enzymes from cortical granules that cross-link glycoproteins, hardening the zona pellucida into a fertilisation membrane to **prevent polyspermy**.\n" +
        "- **Pregnancy & Birth:** The implanting blastocyst secretes **hCG**, preventing degeneration of the corpus luteum so progesterone and oestrogen stay high until the **placenta** takes over hormone production (~weeks 8–12). At term, falling progesterone removes uterine inhibition and rising oestrogen increases **oxytocin** receptors. Fetal head pressure stretches the cervix → nerve impulses to the posterior pituitary → **oxytocin** release → stronger myometrium contractions → greater cervical stretch → more oxytocin (**positive feedback** until birth).\n\n" +
        "### 6. [HL] Kidney Nephron & ADH Osmoregulation\n" +
        "- **Ultrafiltration (Bowman's capsule):** A wider **afferent arteriole** and narrower **efferent arteriole** create high glomerular hydrostatic pressure, forcing water, glucose, amino acids, salts, and urea across capillary **fenestrations**, the negatively charged **basement membrane** (size/charge filter), and **podocyte** filtration slits while retaining plasma proteins and blood cells.\n" +
        "- **Selective reabsorption (Proximal Convoluted Tubule, PCT):** Microvilli provide huge surface area and abundant mitochondria supply ATP for active Na⁺ pumping, driving **100% reabsorption of glucose and amino acids** by Na⁺-cotransport and ~80% of water by osmosis.\n" +
        "- **Loop of Henle (countercurrent multiplier):** The **descending limb** is permeable to water (water leaves by osmosis into the salty medulla) but impermeable to ions; the **ascending limb** is impermeable to water and actively pumps Na⁺ and Cl⁻ out into the medullary interstitial fluid, establishing a steep osmotic gradient (300 → 1200 mOsm kg⁻¹).\n" +
        "- **Osmoregulation via ADH:** When blood water potential drops (dehydration/high solute concentration), **hypothalamus osmoreceptors** signal the **posterior pituitary** to secrete **ADH** (antidiuretic hormone). ADH binds receptors on **collecting duct** cells, triggering vesicles to fuse and insert **aquaporins** into the apical membrane. Water moves out by osmosis down the medullary gradient into vasa recta capillaries, returning blood osmolarity to normal and producing a small volume of **hypertonic (concentrated) urine**.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 340" role="img" aria-label="Dual diagram showing the 28-day menstrual hormone cycle on the left and kidney nephron ultrafiltration, Loop of Henle countercurrent gradient, and ADH aquaporin action on the right">' +
        '<rect x="0" y="0" width="680" height="340" fill="#ffffff" rx="10"/>' +
        '<rect x="10" y="10" width="330" height="320" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>' +
        '<text x="175" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">28-Day Menstrual Hormone Cycle (SL)</text>' +
        '<line x1="42" y1="245" x2="322" y2="245" stroke="#475569" stroke-width="1.5"/>' +
        '<line x1="42" y1="55" x2="42" y2="245" stroke="#475569" stroke-width="1.5"/>' +
        '<line x1="182" y1="55" x2="182" y2="245" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="4 3"/>' +
        '<text x="182" y="50" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">Ovulation (Day 14)</text>' +
        '<rect x="42" y="247" width="50" height="14" fill="#fecaca"/>' +
        '<text x="67" y="257" text-anchor="middle" font-size="8.5" fill="#991b1b">Menses</text>' +
        '<rect x="92" y="247" width="90" height="14" fill="#dcfce7"/>' +
        '<text x="137" y="257" text-anchor="middle" font-size="8.5" fill="#166534">Follicular</text>' +
        '<rect x="182" y="247" width="140" height="14" fill="#fef3c7"/>' +
        '<text x="252" y="257" text-anchor="middle" font-size="8.5" fill="#92400e">Luteal phase</text>' +
        '<path d="M42 215 Q95 190 140 205 Q172 195 182 140 Q194 205 245 215 Q290 220 322 205" fill="none" stroke="#0284c7" stroke-width="2"/>' +
        '<path d="M42 225 Q130 222 162 210 Q176 160 182 70 Q188 165 202 215 Q260 226 322 225" fill="none" stroke="#dc2626" stroke-width="2.4"/>' +
        '<path d="M42 230 Q105 220 155 130 Q172 115 185 190 Q235 160 275 185 Q305 220 322 230" fill="none" stroke="#16a34a" stroke-width="2.2"/>' +
        '<path d="M42 236 L175 234 Q205 210 245 125 Q280 120 305 205 L322 234" fill="none" stroke="#7c3aed" stroke-width="2.4"/>' +
        '<text x="42" y="274" text-anchor="middle" font-size="9" fill="#334155">1</text>' +
        '<text x="112" y="274" text-anchor="middle" font-size="9" fill="#334155">7</text>' +
        '<text x="182" y="274" text-anchor="middle" font-size="9" fill="#334155">14</text>' +
        '<text x="252" y="274" text-anchor="middle" font-size="9" fill="#334155">21</text>' +
        '<text x="322" y="274" text-anchor="middle" font-size="9" fill="#334155">28</text>' +
        '<text x="182" y="288" text-anchor="middle" font-size="9.5" fill="#475569">Day of Cycle</text>' +
        '<text x="16" y="150" text-anchor="middle" font-size="9.5" fill="#475569" transform="rotate(-90 16 150)">Relative Concentration</text>' +
        '<line x1="30" y1="305" x2="46" y2="305" stroke="#0284c7" stroke-width="2.2"/><text x="50" y="308" font-size="9" fill="#0f172a">FSH</text>' +
        '<line x1="92" y1="305" x2="108" y2="305" stroke="#dc2626" stroke-width="2.4"/><text x="112" y="308" font-size="9" fill="#0f172a">LH surge</text>' +
        '<line x1="170" y1="305" x2="186" y2="305" stroke="#16a34a" stroke-width="2.2"/><text x="190" y="308" font-size="9" fill="#0f172a">Oestrogen</text>' +
        '<line x1="252" y1="305" x2="268" y2="305" stroke="#7c3aed" stroke-width="2.4"/><text x="272" y="308" font-size="9" fill="#0f172a">Progest.</text>' +
        '<rect x="350" y="10" width="320" height="320" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>' +
        '<text x="510" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Kidney Nephron &amp; ADH Osmoregulation (HL)</text>' +
        '<rect x="362" y="42" width="296" height="108" fill="#fefce8" stroke="#fde68a" rx="4"/>' +
        '<rect x="362" y="150" width="296" height="145" fill="#ffedd5" stroke="#fdba74" rx="4"/>' +
        '<text x="370" y="56" font-size="9" font-weight="700" fill="#854d0e">Cortex (~300 mOsm)</text>' +
        '<text x="370" y="165" font-size="9" font-weight="700" fill="#9a3412">Medulla (300 → 1200 mOsm)</text>' +
        '<circle cx="408" cy="88" r="18" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>' +
        '<text x="408" y="91" text-anchor="middle" font-size="8.5" font-weight="700" fill="#991b1b">Glom.</text>' +
        '<path d="M426 88 C448 64 468 64 472 105 L472 268 C472 282 512 282 512 268 L512 105 C512 72 560 72 580 102 L580 282" fill="none" stroke="#0369a1" stroke-width="7" stroke-linecap="round"/>' +
        '<path d="M426 88 C448 64 468 64 472 105 L472 268 C472 282 512 282 512 268 L512 105 C512 72 560 72 580 102 L580 282" fill="none" stroke="#e0f2fe" stroke-width="3.5" stroke-linecap="round"/>' +
        '<text x="454" y="64" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0369a1">PCT (100% gluc.)</text>' +
        '<text x="424" y="210" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0284c7">H₂O out →</text>' +
        '<text x="424" y="222" text-anchor="middle" font-size="8" fill="#334155">(Desc. limb)</text>' +
        '<text x="546" y="205" text-anchor="middle" font-size="8.5" font-weight="700" fill="#c2410c">← Na⁺/Cl⁻</text>' +
        '<text x="546" y="217" text-anchor="middle" font-size="8" fill="#334155">(Asc. ATP)</text>' +
        '<text x="548" y="66" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0369a1">DCT</text>' +
        '<text x="625" y="128" text-anchor="middle" font-size="8.5" font-weight="700" fill="#7c3aed">Collecting</text>' +
        '<text x="625" y="139" text-anchor="middle" font-size="8.5" font-weight="700" fill="#7c3aed">Duct</text>' +
        '<rect x="592" y="182" width="62" height="58" fill="#ede9fe" stroke="#7c3aed" rx="5"/>' +
        '<text x="623" y="198" text-anchor="middle" font-size="8.5" font-weight="700" fill="#5b21b6">+ADH</text>' +
        '<text x="623" y="210" text-anchor="middle" font-size="8" fill="#4c1d95">Aquaporins</text>' +
        '<text x="623" y="222" text-anchor="middle" font-size="8" fill="#0284c7">H₂O out →</text>' +
        '<text x="623" y="233" text-anchor="middle" font-size="7.5" fill="#4c1d95">Conc. urine</text>' +
        '<text x="510" y="314" text-anchor="middle" font-size="9" fill="#334155">Ultrafiltration → Selective Reabsorption → Countercurrent → ADH</text>' +
        '</svg>',
      diagramCaption:
        "Left: Negative and positive feedback coordinate FSH, LH, oestrogen, and progesterone across 28 days. Right (HL): Nephron zones showing ultrafiltration, Loop of Henle countercurrent multiplier, and ADH-regulated aquaporins.",
      workedExamples: [
        {
          title: "SL — Diagnosing Hormonal Feedback in the Menstrual Cycle",
          problem:
            "A patient's blood test on Day 21 of a 28-day cycle shows high progesterone, moderate oestrogen, and very low FSH and LH. Explain why FSH and LH are low and predict what will happen on Day 28 if fertilisation has NOT occurred.",
          steps: [
            "Identify the Day 21 structure: following ovulation on Day 14, the ruptured follicle has become the **corpus luteum**, which actively secretes progesterone and moderate oestrogen.",
            "Apply negative feedback: high **progesterone** (with oestrogen) inhibits the hypothalamus (less GnRH) and anterior pituitary, suppressing **FSH** and **LH** so no second follicle matures during the luteal phase.",
            "Predict Day 28 without fertilisation: without embryonic hCG, the corpus luteum degenerates around Days 24–26, causing progesterone and oestrogen to plummet.",
            "Consequence: the vascular endometrium can no longer be maintained and sheds (**menstruation**), while removal of negative feedback allows FSH to rise again.",
          ],
          answer:
            "Progesterone from the corpus luteum inhibits pituitary FSH and LH via negative feedback. Without fertilisation, corpus luteum degeneration drops progesterone, triggering menstruation and allowing FSH to rise.",
        },
        {
          title: "HL — Nephron Filtrate Reabsorption & ADH Effect",
          problem:
            "An adult's kidneys produce glomerular filtrate at {{120}} cm³ min⁻¹. Under hydrated conditions (low ADH), {{99.0%}} of the filtrate volume is reabsorbed. After a hot run without water (high ADH), {{99.6%}} is reabsorbed. Calculate the urine production rate (in cm³ min⁻¹) in each state and explain the cellular mechanism.",
          steps: [
            "Hydrated urine fraction = {{100% - 99.0% = 1.0% = 0.010}}.",
            "Hydrated urine rate = {{120 * 0.010 = 1.2}} cm³ min⁻¹ (dilute, larger volume).",
            "Dehydrated urine fraction = {{100% - 99.6% = 0.4% = 0.004}}.",
            "Dehydrated urine rate = {{120 * 0.004 = 0.48}} cm³ min⁻¹ (concentrated, 60% less urine volume).",
            "Mechanism: high blood solute concentration stimulates hypothalamic osmoreceptors → posterior pituitary releases **ADH** → collecting duct cells insert **aquaporins** into apical membranes → more water leaves by osmosis into the hypertonic medulla.",
          ],
          answer:
            "1.2 cm³ min⁻¹ (hydrated) vs 0.48 cm³ min⁻¹ (dehydrated), driven by ADH-induced aquaporin insertion in the collecting duct.",
          yourTurn: {
            question:
              "Glomerular filtrate forms at 125 cm³ min⁻¹, and 99.2% of its volume is reabsorbed along the nephron and collecting duct. Calculate the urine production rate in cm³ min⁻¹.",
            answer: { type: "number", value: 1, tolerance: 0.01, display: "1.0 cm³ min⁻¹" },
            solution:
              "Unreabsorbed fraction = {{100% - 99.2% = 0.8% = 0.008}}. Urine rate = {{125 * 0.008 = 1.0}} cm³ min⁻¹.",
          },
        },
      ],
      keyPoints: [
        "Negative feedback reverses a deviation from a setpoint (insulin/glucagon, thermoregulation, ADH, luteal progesterone); positive feedback amplifies a change toward a completion event (pre-ovulatory oestrogen → LH surge, cervical stretch → oxytocin in labour).",
        "Pancreatic **β cells** secrete **insulin** (lowers blood glucose via uptake & glycogenesis); **α cells** secrete **glucagon** (raises blood glucose via glycogenolysis & gluconeogenesis).",
        "Pollination (pollen transfer to stigma) precedes fertilisation (gamete nuclear fusion); germination uses gibberellin → amylase → starch hydrolysis into maltose/glucose.",
        "**[HL]** Ultrafiltration retains plasma proteins and blood cells because of the negatively charged basement membrane and podocyte slits; the PCT reabsorbs 100% of glucose by Na⁺-cotransport.",
        "**[HL]** The Loop of Henle generates a hypertonic medulla (ascending limb pumps Na⁺/Cl⁻ out, impermeable to water); ADH increases collecting duct permeability via aquaporins.",
      ],
      whyItWorks:
        "Homeostatic loops rely on **antagonistic effectors** (insulin vs glucagon, vasodilation vs vasoconstriction) so the body can actively push a variable both up and down rather than waiting passively for drift. Similarly, separating the Loop of Henle's salt-pumping ascending limb from its water-permeable descending limb creates a multiplier effect that lets mammals conserve water on dry land.",
      strategies: [
        "On menstrual cycle graphs, always locate **Day 14 (the sharp red LH spike)** first — everything before it is follicular (oestrogen rising) and everything after it is luteal (progesterone plateau).",
        "Never confuse **glucagon** (the hormone), **glycogen** (the storage polysaccharide), and **glucose** (the monosaccharide) — IB mark schemes penalise spelling mix-ups.",
        "For HL osmoregulation 4–6 mark questions, trace the full 5-step chain: blood solute ↑ → hypothalamus osmoreceptors → posterior pituitary releases ADH → aquaporins inserted in collecting duct → water reabsorbed by osmosis → small volume of hypertonic urine.",
      ],
      thinkDeeper:
        "Why does Type 1 diabetes cause sweet-smelling, high-volume urine (**polyuria**)? Because blood glucose exceeds the PCT Na⁺-cotransport maximum (renal threshold); unabsorbed glucose remains in the collecting duct filtrate, raising filtrate solute concentration and reducing the osmotic gradient for water reabsorption!",
    },

    // =========================================================================
    // SECTION 2: D3.2
    // =========================================================================
    {
      id: "inheritance-linked-chi",
      heading: "D3.2 Mendelian Genetics, Pedigrees, Linked Genes & χ²",
      level: "SL",
      discovery: {
        problem:
          "You cross a heterozygous grey-bodied, long-winged *Drosophila* (`GgLl`) with a homozygous recessive black-bodied, vestigial-winged fly (`ggll`). Under Mendel's Law of Independent Assortment, 1000 offspring should split roughly **250 : 250 : 250 : 250**. Instead you count **420 grey long, 410 black vestigial, 85 grey vestigial, and 85 black long**. Why did the 1 : 1 : 1 : 1 ratio fail — and where did those 170 unexpected flies come from?",
        idea:
          "The genes for body colour and wing length lie on the **same autosome** (**autosomal linkage**), so alleles `G` and `L` (and `g` and `l`) travel together into gametes unless separated by **crossing over** between non-sister chromatids in prophase I of meiosis. The abundant classes (420 and 410) are **parental phenotypes**, while the 85 + 85 = 170 rare flies are **recombinants**, giving a recombination frequency of {{170 / 1000 * 100% = 17%}}.",
      },
      body:
        "### 1. Core Mendelian Genetics & Notation (SL)\n" +
        "- A **gene** occupies a specific **locus** on a chromosome; alternative versions of a gene are **alleles**. Organisms with two identical alleles (`AA` or `aa`) are **homozygous**; two different alleles (`Aa`) are **heterozygous**.\n" +
        "- In a monohybrid cross between two heterozygotes (`Aa × Aa`), the F₂ **genotypic ratio** is **1 : 2 : 1** (`AA : Aa : aa`) and the **phenotypic ratio** (complete dominance) is **3 : 1**.\n" +
        "- A **test cross** crosses an individual showing a dominant phenotype (`A_`) with a homozygous recessive (`aa`): if any recessive offspring appear (1 : 1 ratio), the parent must be heterozygous (`Aa`).\n\n" +
        "### 2. Codominance, Multiple Alleles & Sex-Linked Inheritance (SL)\n" +
        "- **ABO blood groups** combine **multiple alleles** (`I^A`, `I^B`, `i` at one locus) and **codominance** (`I^A` and `I^B` are both fully expressed in phenotype AB, while both are dominant over `i`):\n" +
        "| Blood Group (Phenotype) | Possible Genotypes | Surface Antigens on RBC |\n" +
        "|---|---|---|\n" +
        "| **A** | `I^A I^A` or `I^A i` | A antigen |\n" +
        "| **B** | `I^B I^B` or `I^B i` | B antigen |\n" +
        "| **AB** | `I^A I^B` | Both A and B antigens (codominant) |\n" +
        "| **O** | `i i` | Neither A nor B antigen |\n\n" +
        "- **Sex-linked recessive inheritance** (e.g., **haemophilia** `X^H / X^h` and **red–green colour blindness** `X^B / X^b`): the locus sits on the non-homologous region of the X chromosome. Males (`XY`) are **hemizygous** — a single recessive allele (`X^h Y`) expresses the condition. Always write the X and Y chromosomes with superscript alleles! Key diagnostic patterns:\n" +
        "  - Males are affected far more frequently than females.\n" +
        "  - An affected father **never** passes the X-linked allele to his sons (they inherit his Y), but **all** of his daughters inherit his `X^h` (obligate carriers).\n" +
        "  - An affected mother (`X^h X^h`) passes `X^h` to **100%** of her sons.\n\n" +
        "### 3. Pedigree Chart Deduction Rules (SL)\n" +
        "Always test hypotheses systematically from **trio clues**:\n" +
        "1. **Two unaffected parents → affected child:** the trait MUST be **recessive** (both parents carry a hidden recessive allele).\n" +
        "2. **Two affected parents → unaffected child:** the trait MUST be **dominant** (both parents are heterozygous `Aa` and pass `a`).\n" +
        "3. **Ruling out X-linked recessive:** if an **affected daughter** (`X^h X^h`) has an **unaffected father** (`X^H Y`), or an **affected mother** (`X^h X^h`) has an **unaffected son** (`X^H Y`), X-linked recessive is impossible → must be **autosomal recessive**.\n\n" +
        "### 4. Polygenic Inheritance & Continuous Variation (SL)\n" +
        "Single-gene traits produce **discontinuous variation** (distinct discrete categories such as ABO blood group). Traits controlled by **two or more genes** acting additively (e.g., human skin pigmentation, adult height, wheat kernel colour) produce **continuous variation** forming a bell-shaped normal distribution — further smoothed by **environmental factors** (UV light, nutrition, soil pH).\n\n" +
        "### 5. [HL] Dihybrid Crosses, Autosomal Linkage & Recombinants\n" +
        "- **Unlinked dihybrid crosses** (genes on different chromosomes assort independently during metaphase I): `AaBb × AaBb` → **9 : 3 : 3 : 1** phenotypic ratio; test cross `AaBb × aabb` → **1 : 1 : 1 : 1**.\n" +
        "- **Autosomal gene linkage:** when two loci lie on the same chromosome, write genotypes in chromosome-pair form: `AB / ab` (coupling/cis) or `Ab / aB` (repulsion/trans). Without crossing over, `AB / ab × ab / ab` yields only 1 : 1 parental offspring. Occasional **crossing over** between non-sister chromatids at a chiasma in prophase I generates **recombinant gametes** (`Ab`, `aB`).\n" +
        "- **Recombination frequency (RF):** {{RF = (\"recombinant offspring\" / \"total offspring\") * 100%}}. Greater distance between two loci on a chromosome means higher probability of a chiasma forming between them, so larger RF (capped at 50% for independent assortment).\n\n" +
        "### 6. [HL] Chi-Squared (χ²) Goodness-of-Fit Test in Genetics\n" +
        "Use `χ²` to test whether observed phenotype counts (`O`) differ significantly from expected Mendelian ratios (`E`):\n" +
        "1. State the **null hypothesis (`H₀`)**: no significant difference between observed and expected ratios (genes assort independently / deviation is due to chance).\n" +
        "2. Calculate expected count `E` for each phenotype from the theoretical ratio (e.g. `9/16, 3/16, 3/16, 1/16` or `1/4` each).\n" +
        "3. Compute {{χ^2 = Σ((O - E)^2 / E)}}.\n" +
        "4. Determine **degrees of freedom**: {{df = n - 1}}, where `n` is the number of phenotypic categories (for 4 dihybrid classes, `df = 3`; critical value at `p = 0.05` is **7.815**; for `df = 1`, **3.841**; for `df = 2`, **5.991**).\n" +
        "5. **Decision:** If {{χ^2 > χ^2_crit}} (`p < 0.05`), **reject `H₀`** — the difference is statistically significant (e.g., evidence of gene linkage or differential viability). If {{χ^2 <= χ^2_crit}} (`p >= 0.05`), **fail to reject `H₀`** — observed counts are consistent with the expected ratio.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 330" role="img" aria-label="Dual genetics diagram showing a 3-generation autosomal recessive pedigree on the left and linked-gene crossing over producing parental and recombinant gametes on the right">' +
        '<rect x="0" y="0" width="680" height="330" fill="#ffffff" rx="10"/>' +
        '<rect x="10" y="10" width="320" height="310" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>' +
        '<text x="170" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Pedigree Chart Deduction (SL)</text>' +
        '<text x="26" y="76" font-size="10" font-weight="700" fill="#64748b">I</text>' +
        '<rect x="78" y="60" width="24" height="24" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>' +
        '<line x1="102" y1="72" x2="152" y2="72" stroke="#0f172a" stroke-width="1.8"/>' +
        '<circle cx="164" cy="72" r="12" fill="#0f172a" stroke="#0f172a" stroke-width="2"/>' +
        '<text x="90" y="55" text-anchor="middle" font-size="8.5" fill="#475569">I-1 (Aa)</text>' +
        '<text x="164" y="55" text-anchor="middle" font-size="8.5" fill="#475569">I-2 (aa)</text>' +
        '<line x1="127" y1="72" x2="127" y2="120" stroke="#0f172a" stroke-width="1.8"/>' +
        '<line x1="78" y1="120" x2="180" y2="120" stroke="#0f172a" stroke-width="1.8"/>' +
        '<line x1="78" y1="120" x2="78" y2="140" stroke="#0f172a" stroke-width="1.8"/>' +
        '<line x1="180" y1="120" x2="180" y2="140" stroke="#0f172a" stroke-width="1.8"/>' +
        '<text x="26" y="156" font-size="10" font-weight="700" fill="#64748b">II</text>' +
        '<circle cx="78" cy="152" r="12" fill="#0f172a" stroke="#0f172a" stroke-width="2"/>' +
        '<rect x="168" y="140" width="24" height="24" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>' +
        '<line x1="192" y1="152" x2="246" y2="152" stroke="#0f172a" stroke-width="1.8"/>' +
        '<circle cx="258" cy="152" r="12" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>' +
        '<text x="78" y="176" text-anchor="middle" font-size="8.5" fill="#475569">II-1 (aa)</text>' +
        '<text x="180" y="135" text-anchor="middle" font-size="8.5" fill="#15803d" font-weight="700">II-2 (Aa)</text>' +
        '<text x="258" y="135" text-anchor="middle" font-size="8.5" fill="#15803d" font-weight="700">II-3 (Aa)</text>' +
        '<line x1="219" y1="152" x2="219" y2="196" stroke="#0f172a" stroke-width="1.8"/>' +
        '<line x1="175" y1="196" x2="265" y2="196" stroke="#0f172a" stroke-width="1.8"/>' +
        '<line x1="175" y1="196" x2="175" y2="214" stroke="#0f172a" stroke-width="1.8"/>' +
        '<line x1="265" y1="196" x2="265" y2="214" stroke="#0f172a" stroke-width="1.8"/>' +
        '<text x="26" y="230" font-size="10" font-weight="700" fill="#64748b">III</text>' +
        '<rect x="163" y="214" width="24" height="24" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>' +
        '<circle cx="265" cy="226" r="12" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>' +
        '<text x="175" y="250" text-anchor="middle" font-size="8.5" fill="#475569">III-1 (A_)</text>' +
        '<text x="265" y="250" text-anchor="middle" font-size="8.5" font-weight="700" fill="#dc2626">III-2 (aa)</text>' +
        '<rect x="22" y="264" width="296" height="44" fill="#fef2f2" stroke="#fca5a5" rx="6"/>' +
        '<text x="170" y="280" text-anchor="middle" font-size="8.8" font-weight="700" fill="#991b1b">Key Clue: II-2 &amp; II-3 unaffected → III-2 affected</text>' +
        '<text x="170" y="294" text-anchor="middle" font-size="8.4" fill="#7f1d1d">Must be recessive; affected female with unaffected dad</text>' +
        '<text x="170" y="304" text-anchor="middle" font-size="8.4" fill="#7f1d1d">rules out X-linked recessive → Autosomal recessive</text>' +
        '<rect x="342" y="10" width="328" height="310" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>' +
        '<text x="506" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Linked Genes &amp; Crossing Over (HL)</text>' +
        '<text x="415" y="52" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">Prophase I Chiasma</text>' +
        '<line x1="378" y1="68" x2="378" y2="178" stroke="#0284c7" stroke-width="6" stroke-linecap="round"/>' +
        '<line x1="398" y1="68" x2="398" y2="122" stroke="#0284c7" stroke-width="6" stroke-linecap="round"/>' +
        '<line x1="398" y1="122" x2="432" y2="178" stroke="#0284c7" stroke-width="6" stroke-linecap="round"/>' +
        '<line x1="432" y1="68" x2="432" y2="122" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>' +
        '<line x1="432" y1="122" x2="398" y2="178" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>' +
        '<line x1="452" y1="68" x2="452" y2="178" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>' +
        '<circle cx="378" cy="84" r="5" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/><text x="364" y="88" font-size="9.5" font-weight="700" fill="#0369a1">A</text>' +
        '<circle cx="398" cy="84" r="5" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/><text x="408" y="88" font-size="9.5" font-weight="700" fill="#0369a1">A</text>' +
        '<circle cx="432" cy="84" r="5" fill="#ffffff" stroke="#ea580c" stroke-width="1.5"/><text x="421" y="88" font-size="9.5" font-weight="700" fill="#c2410c">a</text>' +
        '<circle cx="452" cy="84" r="5" fill="#ffffff" stroke="#ea580c" stroke-width="1.5"/><text x="462" y="88" font-size="9.5" font-weight="700" fill="#c2410c">a</text>' +
        '<circle cx="378" cy="162" r="5" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/><text x="364" y="166" font-size="9.5" font-weight="700" fill="#0369a1">B</text>' +
        '<circle cx="452" cy="162" r="5" fill="#ffffff" stroke="#ea580c" stroke-width="1.5"/><text x="462" y="166" font-size="9.5" font-weight="700" fill="#c2410c">b</text>' +
        '<text x="415" y="198" text-anchor="middle" font-size="8.5" fill="#475569">Exchange between non-sister chromatids</text>' +
        '<text x="580" y="52" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">4 Resulting Gametes</text>' +
        '<rect x="506" y="64" width="148" height="48" fill="#dcfce7" stroke="#16a34a" rx="6"/>' +
        '<text x="580" y="82" text-anchor="middle" font-size="9.5" font-weight="700" fill="#166534">Parental (abundant)</text>' +
        '<text x="580" y="99" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">AB   and   ab</text>' +
        '<rect x="506" y="124" width="148" height="48" fill="#ffedd5" stroke="#ea580c" rx="6"/>' +
        '<text x="580" y="142" text-anchor="middle" font-size="9.5" font-weight="700" fill="#9a3412">Recombinant (rare)</text>' +
        '<text x="580" y="159" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">Ab   and   aB</text>' +
        '<rect x="356" y="216" width="300" height="88" fill="#ffffff" stroke="#cbd5e1" rx="6"/>' +
        '<text x="506" y="236" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0f172a">Test Cross (AB/ab × ab/ab) Diagnostic</text>' +
        '<text x="506" y="254" text-anchor="middle" font-size="8.8" fill="#334155">Unlinked expected: 1 : 1 : 1 : 1  (df = 3, crit = 7.815)</text>' +
        '<text x="506" y="272" text-anchor="middle" font-size="8.8" fill="#334155">Linked observed: high AB, ab; low Ab, aB → χ² &gt; 7.815</text>' +
        '<text x="506" y="291" text-anchor="middle" font-size="9" font-weight="700" fill="#7c3aed">RF = (Recombinants ÷ Total) × 100%</text>' +
        '</svg>',
      diagramCaption:
        "Left: Pedigree showing unaffected parents (II-2, II-3) with an affected daughter (III-2) — confirming autosomal recessive inheritance. Right (HL): Crossing over between linked loci produces abundant parental gametes and fewer recombinant gametes.",
      workedExamples: [
        {
          title: "SL — ABO Blood Group & Sex-Linked Crosses",
          problem:
            "A woman with blood group A (whose father was blood group O) marries a man with blood group B (whose mother was blood group O). Determine the expected phenotypic ratio of their children's blood groups.",
          steps: [
            "Deduce the woman's genotype: blood group A must have `I^A`, and her blood group O (`ii`) father could only pass `i` → she is `I^A i`.",
            "Deduce the man's genotype: blood group B must have `I^B`, and his blood group O (`ii`) mother could only pass `i` → he is `I^B i`.",
            "Draw the 2 × 2 Punnett grid for gametes (`I^A`, `i`) × (`I^B`, `i`): offspring genotypes are `I^A I^B`, `I^A i`, `I^B i`, `i i`.",
            "Translate genotypes to phenotypes: 25% AB, 25% A, 25% B, 25% O — a **1 : 1 : 1 : 1** ratio.",
          ],
          answer: "1 AB : 1 A : 1 B : 1 O (25% probability of each blood group).",
          yourTurn: {
            question:
              "A woman who is a carrier for X-linked recessive haemophilia (XᴴXʰ) and an unaffected man (XᴴY) have a child. What is the percentage probability that the child is a son with haemophilia (XʰY)?",
            answer: { type: "number", value: 25, display: "25%" },
            solution:
              "Punnett grid of gametes (`X^H`, `X^h`) × (`X^H`, `Y`) gives 4 equally likely outcomes: `X^H X^H` (unaffected girl), `X^H X^h` (carrier girl), `X^H Y` (unaffected boy), `X^h Y` (affected boy). Probability = {{1/4 = 25%}}.",
          },
        },
        {
          title: "HL — Dihybrid Chi-Squared Test & Recombination Frequency",
          problem:
            "A test cross `GgLl × ggll` in *Drosophila* yields 400 offspring: 168 grey long, 172 black vestigial, 32 grey vestigial, and 28 black long. Calculate `χ²` against an unlinked 1 : 1 : 1 : 1 hypothesis, evaluate significance at `p = 0.05` (critical value `7.815`), and find the recombination frequency.",
          steps: [
            "Expected count per class under 1 : 1 : 1 : 1 independent assortment: {{E = 400 / 4 = 100}}.",
            "Compute {{(O - E)^2 / E}} for each class:\n  - Grey long: {{(168 - 100)^2 / 100 = 4624 / 100 = 46.24}}\n  - Black vestigial: {{(172 - 100)^2 / 100 = 5184 / 100 = 51.84}}\n  - Grey vestigial: {{(32 - 100)^2 / 100 = 4624 / 100 = 46.24}}\n  - Black long: {{(28 - 100)^2 / 100 = 5184 / 100 = 51.84}}",
            "Sum to obtain {{χ^2 = 46.24 + 51.84 + 46.24 + 51.84 = 196.16}} with {{df = 4 - 1 = 3}}.",
            "Compare: {{196.16 > 7.815}} (`p < 0.05`), so **reject `H₀`** — the deviation is statistically significant, indicating the two loci are **autosomally linked**.",
            "Identify the two least frequent classes as recombinants (32 + 28 = 60): {{RF = (60 / 400) * 100% = 15%}}.",
          ],
          answer: "χ² = 196.16 (reject H₀; genes are linked); RF = 15%.",
          yourTurn: {
            question:
              "A dihybrid test cross of 500 maize plants produces 215 parental type 1, 205 parental type 2, 42 recombinant type 1, and 38 recombinant type 2. Calculate the recombination frequency as a percentage.",
            answer: { type: "number", value: 16, display: "16%" },
            solution:
              "Total recombinants = {{42 + 38 = 80}}. Recombination frequency = {{(80 / 500) * 100% = 16%}}.",
          },
        },
      ],
      keyPoints: [
        "Use `I^A`, `I^B`, `i` for ABO blood groups and `X^H`, `X^h`, `Y` for X-linked traits — IB examiners deduct marks for omitting chromosome symbols in sex-linked crosses.",
        "Unaffected parents producing an affected child prove the trait is **recessive**; affected parents producing an unaffected child prove the trait is **dominant**.",
        "Continuous variation arises from **polygenic inheritance** (multiple additive loci) interacting with **environmental factors**.",
        "**[HL]** Linked genes deviate sharply from 9 : 3 : 3 : 1 or 1 : 1 : 1 : 1 because parental allele combinations stay together unless separated by crossing over in prophase I.",
        "**[HL]** For a χ² goodness-of-fit test on `n` phenotype classes, `df = n − 1`; `χ² > χ²_crit` rejects `H₀` (significant deviation, NOT 'proves linkage').",
      ],
      whyItWorks:
        "Mendel's 9 : 3 : 3 : 1 ratio only emerges when chromosomes orient independently along the metaphase I equator. When two genes share the same physical DNA molecule, only a physical break-and-rejoin event (chiasma) between them creates recombinant combinations — and the probability of a random break falling between two loci grows linearly with their physical distance along the chromosome.",
      strategies: [
        "Always check whether a genetics question asks for probability among **all offspring** (e.g. 25% chance of an affected son) or **given the child is a boy** (e.g. 50% of sons are affected).",
        "In a `χ²` table, double-check that your expected values `E` sum to the exact same total `N` as your observed values `O` before squaring differences.",
        "Never write that `χ² > χ²_crit` 'proves' linkage — always phrase conclusions statistically: 'reject the null hypothesis; observed ratio differs significantly from expected independent assortment at p = 0.05.'",
      ],
      thinkDeeper:
        "What if two genes sit at opposite ends of a very long chromosome so that at least one crossover almost always happens between them in every meiosis? Their recombination frequency approaches 50%, making them statistically indistinguishable from unlinked genes on separate chromosomes without intermediate marker loci!",
    },

    // =========================================================================
    // SECTION 3: D4.1
    // =========================================================================
    {
      id: "natural-selection-hardy-weinberg",
      heading: "D4.1 Natural Selection, Selection Modes & Hardy–Weinberg",
      level: "SL",
      discovery: {
        problem:
          "Cystic fibrosis is an autosomal recessive condition affecting roughly **1 in 2,500** newborns ({{q^2 = 0.0004}}) in a large randomly mating population. Does that mean carriers are also extremely rare (around 1 in 2,500)? Calculate how many healthy-looking individuals out of 2,500 carry one hidden recessive allele.",
        idea:
          "Since {{q^2 = 0.0004}}, the recessive allele frequency is {{q = sqrt(0.0004) = 0.02}} (2%), and {{p = 1 - 0.02 = 0.98}}. The heterozygous carrier frequency is {{2pq = 2 * 0.98 * 0.02 = 0.0392}} — nearly **4%** (almost **1 in 25**, or **98 carriers** per 2,500 people!). Carriers outnumber affected individuals almost 100 to 1, explaining why recessive alleles persist for millennia even under strong negative selection.",
      },
      body:
        "### 1. Natural Selection Mechanism (D4.1 SL)\n" +
        "Evolution by natural selection is a **change in heritable allele frequencies** across generations driven by five linked steps:\n" +
        "1. **Heritable genetic variation** already exists in a population (generated randomly by mutation, crossing over, random orientation in meiosis, and random fertilisation — **never** created 'in response to need').\n" +
        "2. **Overproduction of offspring** creates more individuals than local resources can support.\n" +
        "3. **Competition & selection pressures** — both **abiotic** (drought, temperature, antibiotics) and **biotic** (predation, pathogens, competition for mates/food) — create a struggle for survival.\n" +
        "4. **Differential survival and reproduction:** individuals with advantageous heritable alleles survive longer and leave more fertile offspring.\n" +
        "5. **Allele frequency shift:** advantageous alleles increase in proportion in the gene pool over successive generations.\n\n" +
        "**Classic IB Case Studies:**\n" +
        "- **Antibiotic resistance (e.g. MRSA):** A random mutation (or horizontal plasmid transfer) confers resistance *before* antibiotic exposure. Antibiotics kill susceptible bacteria, releasing resistant cells from competition so resistant alleles rapidly dominate.\n" +
        "- **Galápagos finches (*Geospiza fortis* on Daphne Major):** During the 1977 drought, small soft seeds disappeared; birds with slightly deeper, stronger beaks cracked large hard *Tribulus* seeds, survived, and passed deeper-beak alleles to the next generation.\n" +
        "- **Peppered moths (*Biston betularia*):** Soot-darkened tree trunks in industrial Britain shifted bird predation onto light-coloured moths, raising the frequency of the melanic allele; Clean Air legislation later reversed the trend.\n\n" +
        "### 2. Sexual Selection & Artificial Selection (SL)\n" +
        "- **Sexual selection** favours traits that increase mating success even when they reduce survival (trade-off): **intrasexual competition** (e.g., male stag antlers fighting rivals) and **intersexual mate choice** (e.g., peahens choosing elaborate peacock trains as honest indicators of health).\n" +
        "- **Artificial selection (selective breeding):** Humans intentionally choose breeding parents with desirable traits over generations (e.g., *Brassica oleracea* bred into broccoli, kale, cabbage, and Brussels sprouts; dairy cattle; high-yield rice). Selection is rapid, but narrowing the breeding pool reduces genetic diversity and elevates **inbreeding depression**.\n\n" +
        "### 3. [HL] Modes of Natural Selection\n" +
        "| Mode | Phenotypes favoured | Effect on mean & variance | Classic IB example |\n" +
        "|---|---|---|---|\n" +
        "| **Stabilizing** | Intermediate phenotypes; both extremes selected against | Mean unchanged; variance **narrows** | Human birth weight (too low = hypothermia/infection; too high = birth trauma) |\n" +
        "| **Directional** | One extreme favoured over mean and opposite extreme | Mean **shifts** toward favoured extreme | Bacterial antibiotic resistance; *Geospiza* beak depth during drought |\n" +
        "| **Disruptive** | Both extremes favoured; intermediate selected against | **Bimodal** curve (variance widens); can initiate sympatric speciation | African black-bellied seedcracker finches (small soft vs large hard seeds) |\n\n" +
        "### 4. [HL] Hardy–Weinberg Equilibrium (HWE)\n" +
        "For a gene with two alleles (`A` with frequency `p`, `a` with frequency `q`):\n" +
        "- **Allele frequencies:** {{p + q = 1}}\n" +
        "- **Genotype frequencies:** {{p^2 + 2pq + q^2 = 1}}, where `p²` = homozygous dominant (`AA`), `2pq` = heterozygous (`Aa`), and `q²` = homozygous recessive (`aa`).\n\n" +
        "**Five strict assumptions for HWE (zero evolution):**\n" +
        "1. **Very large population size** (negligible genetic drift).\n" +
        "2. **Random mating** (no sexual selection or inbreeding).\n" +
        "3. **No net mutation** (no new alleles introduced).\n" +
        "4. **No migration / gene flow** (closed population).\n" +
        "5. **No natural selection** (all genotypes have equal survival and reproductive fitness).\n\n" +
        "If observed genotype counts deviate significantly from HWE predictions (tested with `χ²`), at least one assumption is violated — proving the population is **evolving** or mating non-randomly.\n\n" +
        "### 5. [HL] Genetic Drift, Bottleneck & Founder Effect\n" +
        "**Genetic drift** is random, non-adaptive change in allele frequencies caused by sampling error in finite populations — its effect is dramatic in **small populations**, where even beneficial alleles can be lost by chance.\n" +
        "- **Population bottleneck:** A catastrophic event (disease, hunting, volcanic eruption) slashes population size; survivors carry only a small random sample of original alleles (e.g., northern elephant seals, cheetahs).\n" +
        "- **Founder effect:** A tiny subgroup colonises an isolated island or community with unrepresentative allele frequencies (e.g., high prevalence of Ellis–van Creveld polydactyly in Old Order Amish populations).",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 330" role="img" aria-label="Dual evolutionary diagram showing stabilizing, directional, and disruptive selection curves on the left and Hardy-Weinberg genotype frequencies p squared, 2pq, and q squared on the right">' +
        '<rect x="0" y="0" width="680" height="330" fill="#ffffff" rx="10"/>' +
        '<rect x="10" y="10" width="330" height="310" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>' +
        '<text x="175" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Three Modes of Selection (HL)</text>' +
        '<text x="72" y="54" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">Stabilizing</text>' +
        '<line x1="24" y1="118" x2="120" y2="118" stroke="#64748b" stroke-width="1.2"/>' +
        '<path d="M26 117 Q72 52 118 117" fill="none" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 2"/>' +
        '<path d="M44 117 Q72 42 100 117" fill="#dcfce7" fill-opacity="0.7" stroke="#15803d" stroke-width="2.2"/>' +
        '<text x="72" y="131" text-anchor="middle" font-size="8" fill="#334155">Narrower variance</text>' +
        '<text x="178" y="54" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">Directional</text>' +
        '<line x1="130" y1="118" x2="226" y2="118" stroke="#64748b" stroke-width="1.2"/>' +
        '<path d="M134 117 Q166 56 198 117" fill="none" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 2"/>' +
        '<path d="M158 117 Q190 56 222 117" fill="#e0f2fe" fill-opacity="0.7" stroke="#0369a1" stroke-width="2.2"/>' +
        '<text x="178" y="131" text-anchor="middle" font-size="8" fill="#334155">Mean shifts →</text>' +
        '<text x="284" y="54" text-anchor="middle" font-size="9.5" font-weight="700" fill="#c2410c">Disruptive</text>' +
        '<line x1="236" y1="118" x2="332" y2="118" stroke="#64748b" stroke-width="1.2"/>' +
        '<path d="M240 117 Q284 56 328 117" fill="none" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 2"/>' +
        '<path d="M238 117 Q260 54 284 106 Q308 54 330 117" fill="#ffedd5" fill-opacity="0.75" stroke="#c2410c" stroke-width="2.2"/>' +
        '<text x="284" y="131" text-anchor="middle" font-size="8" fill="#334155">Bimodal split</text>' +
        '<rect x="24" y="150" width="302" height="156" fill="#ffffff" stroke="#cbd5e1" rx="6"/>' +
        '<text x="175" y="170" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">Hardy–Weinberg Punnett Area (p = 0.7, q = 0.3)</text>' +
        '<rect x="65" y="182" width="112" height="72" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>' +
        '<text x="121" y="216" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">AA = p² = 0.49</text>' +
        '<rect x="177" y="182" width="48" height="72" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>' +
        '<text x="201" y="215" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">Aa</text>' +
        '<text x="201" y="227" text-anchor="middle" font-size="8.5" fill="#0369a1">0.21</text>' +
        '<rect x="65" y="254" width="112" height="32" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>' +
        '<text x="121" y="274" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">Aa = pq = 0.21</text>' +
        '<rect x="177" y="254" width="48" height="32" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>' +
        '<text x="201" y="274" text-anchor="middle" font-size="9" font-weight="700" fill="#c2410c">aa 0.09</text>' +
        '<text x="275" y="210" text-anchor="middle" font-size="9" font-weight="700" fill="#0f172a">2pq = 0.42</text>' +
        '<text x="275" y="226" text-anchor="middle" font-size="8.5" fill="#475569">(42% carriers)</text>' +
        '<text x="275" y="254" text-anchor="middle" font-size="9" font-weight="700" fill="#0f172a">Sum = 1.00</text>' +
        '<text x="175" y="300" text-anchor="middle" font-size="8.2" fill="#475569">Dashed grey = original population · Shaded = after selection</text>' +
        '<rect x="350" y="10" width="320" height="310" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>' +
        '<text x="510" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Genotype Proportions vs Allele Freq q (HL)</text>' +
        '<line x1="390" y1="245" x2="640" y2="245" stroke="#475569" stroke-width="1.5"/>' +
        '<line x1="390" y1="65" x2="390" y2="245" stroke="#475569" stroke-width="1.5"/>' +
        '<line x1="390" y1="155" x2="640" y2="155" stroke="#cbd5e1" stroke-dasharray="3 3"/>' +
        '<line x1="515" y1="65" x2="515" y2="245" stroke="#cbd5e1" stroke-dasharray="3 3"/>' +
        '<path d="M390 65 Q452 155 515 200 Q577 234 640 245" fill="none" stroke="#16a34a" stroke-width="2.5"/>' +
        '<path d="M390 245 Q452 234 515 200 Q577 155 640 65" fill="none" stroke="#ea580c" stroke-width="2.5"/>' +
        '<path d="M390 245 Q452 155 515 155 Q577 155 640 245" fill="none" stroke="#0284c7" stroke-width="2.6"/>' +
        '<circle cx="515" cy="155" r="4" fill="#0284c7"/>' +
        '<text x="515" y="144" text-anchor="middle" font-size="8.8" font-weight="700" fill="#0369a1">Max 2pq = 0.50 (q = 0.5)</text>' +
        '<text x="415" y="92" font-size="9.5" font-weight="700" fill="#16a34a">p² (AA)</text>' +
        '<text x="605" y="92" font-size="9.5" font-weight="700" fill="#ea580c">q² (aa)</text>' +
        '<text x="390" y="260" text-anchor="middle" font-size="9" fill="#334155">0.0</text>' +
        '<text x="515" y="260" text-anchor="middle" font-size="9" fill="#334155">0.5</text>' +
        '<text x="640" y="260" text-anchor="middle" font-size="9" fill="#334155">1.0</text>' +
        '<text x="515" y="275" text-anchor="middle" font-size="9.5" fill="#475569">Recessive Allele Frequency (q)</text>' +
        '<text x="378" y="248" text-anchor="end" font-size="8.5" fill="#334155">0</text>' +
        '<text x="378" y="158" text-anchor="end" font-size="8.5" fill="#334155">0.5</text>' +
        '<text x="378" y="68" text-anchor="end" font-size="8.5" fill="#334155">1.0</text>' +
        '<text x="510" y="302" text-anchor="middle" font-size="9" fill="#334155">p + q = 1  and  p² + 2pq + q² = 1</text>' +
        '</svg>',
      diagramCaption:
        "Left: Stabilizing, directional, and disruptive selection plus Hardy–Weinberg Punnett area model. Right: Genotype frequencies across all values of q, showing heterozygotes (2pq) peaking at 0.50 when p = q = 0.5.",
      workedExamples: [
        {
          title: "SL — Explaining Antibiotic Resistance Without Lamarckian Language",
          problem:
            "Explain how a population of *Staphylococcus aureus* in a hospital evolves resistance to methicillin over several months of antibiotic treatment.",
          steps: [
            "Pre-existing variation: random DNA mutation (or horizontal plasmid acquisition) produces a small number of bacteria carrying a resistance allele (e.g., altered penicillin-binding protein) **before** exposure.",
            "Selection pressure: methicillin kills susceptible bacteria by blocking cell wall synthesis, removing competitors.",
            "Differential survival and reproduction: resistant individuals survive, divide rapidly by binary fission, and pass the resistance allele to daughter cells.",
            "Evolutionary outcome: over generations, the frequency of the resistance allele rises sharply until most of the population is methicillin-resistant (MRSA).",
          ],
          answer:
            "Pre-existing random mutation provides resistance; methicillin selects against susceptible bacteria; resistant cells survive and reproduce, increasing resistance allele frequency.",
        },
        {
          title: "HL — Full Hardy–Weinberg Carrier Calculation",
          problem:
            "In an isolated flock of 2,500 sheep assumed to be in Hardy–Weinberg equilibrium, 100 sheep have recessive black fleece (`bb`) and 2,400 have white fleece (`BB` or `Bb`). Calculate `q`, `p`, the carrier frequency `2pq`, and the expected number of heterozygous white sheep.",
          steps: [
            "Always start from the unambiguous recessive phenotype (`bb`): {{q^2 = 100 / 2500 = 0.04}}.",
            "Take the square root to obtain the recessive allele frequency: {{q = sqrt(0.04) = 0.20}}.",
            "Find the dominant allele frequency using {{p + q = 1}}: {{p = 1 - 0.20 = 0.80}}.",
            "Calculate heterozygous carrier frequency: {{2pq = 2 * 0.80 * 0.20 = 0.32}} (32%).",
            "Multiply by population size: expected `Bb` carriers = {{0.32 * 2500 = 800}} sheep (and `BB` = {{0.64 * 2500 = 1600}}; check {{1600 + 800 + 100 = 2500}}).",
          ],
          answer: "q = 0.20, p = 0.80, 2pq = 0.32, expected heterozygous carriers = 800 sheep.",
          yourTurn: {
            question:
              "In a population of 1,000 mice in Hardy–Weinberg equilibrium, 90 mice have recessive white fur (aa). Calculate the expected number of heterozygous (Aa) mice in this population.",
            answer: { type: "number", value: 420, display: "420" },
            solution:
              "{{q^2 = 90 / 1000 = 0.09}}, so {{q = sqrt(0.09) = 0.3}} and {{p = 1 - 0.3 = 0.7}}. Heterozygote frequency {{2pq = 2 * 0.7 * 0.3 = 0.42}}. Expected carriers = {{0.42 * 1000 = 420}} mice.",
          },
        },
      ],
      keyPoints: [
        "Natural selection acts on **phenotypes of individuals**, but **populations evolve** as allele frequencies change over generations.",
        "Mutations are **random**, never triggered 'so organisms can adapt' or 'because bacteria become immune to antibiotics' (bacteria do not have immune systems!).",
        "**[HL]** Always begin Hardy–Weinberg problems with the homozygous recessive proportion `q²`, then take `sqrt(q²)` to find `q` — NEVER set `q` equal to the recessive phenotype proportion.",
        "**[HL]** Stabilizing selection reduces variance around an unchanged mean; directional shifts the mean; disruptive favours both extremes over the mean.",
        "**[HL]** Genetic drift (bottlenecks & founder effects) shifts allele frequencies **by chance** in small populations, independently of fitness.",
      ],
      whyItWorks:
        "Hardy–Weinberg works as biology's **null model** — just like Newton's First Law describes motion with zero net force, HWE describes a gene pool with zero evolutionary forces. Measuring departure from `p² : 2pq : q²` lets evolutionary biologists detect selection, non-random mating, or migration quantitatively.",
      strategies: [
        "Ban three words from your IB natural-selection answers: *need*, *try*, and *immune* (for bacteria). Replace them with *random mutation*, *selection pressure*, *differential survival/reproduction*, and *allele frequency*.",
        "Always check your Hardy–Weinberg arithmetic by verifying `p + q = 1` AND `p² + 2pq + q² = 1`.",
        "If an IB question gives you counts of ALL THREE genotypes (e.g. 120 AA, 60 Aa, 20 aa), compute `p` and `q` directly by counting alleles: `q = (60 + 2×20) / (2×200) = 100/400 = 0.25` — do NOT assume HWE!",
      ],
      thinkDeeper:
        "In regions with endemic *Plasmodium falciparum* malaria, sickle-cell heterozygotes (`Hb^A Hb^S`) survive malaria better than `Hb^A Hb^A` homozygotes while avoiding severe sickle-cell disease (`Hb^S Hb^S`). This **heterozygote advantage** (balancing selection) keeps the `Hb^S` allele at an equilibrium frequency far above HWE predictions for a deleterious recessive allele.",
    },

    // =========================================================================
    // SECTION 4: D4.2–D4.3
    // =========================================================================
    {
      id: "stability-climate-change",
      heading: "D4.2–D4.3 Ecosystem Stability, Succession & Climate Change",
      level: "SL",
      discovery: {
        problem:
          "Ecologists warn that clearing just **20–25%** of the Amazon rainforest could push the *remaining* 75–80% across an irreversible **tipping point** into dry tropical savanna — even if deforestation stopped immediately. How can intact forest collapse on its own once clearing passes a threshold?",
        idea:
          "Amazon trees recycle up to half of the basin's rainfall through **transpiration** ('flying rivers'). Clearing forest reduces regional evapotranspiration, creating longer dry seasons and lower humidity. Drier forests suffer tree mortality and fires, which remove even more trees and cut transpiration further — a self-reinforcing **positive feedback loop** that flips the ecosystem into a new stable savanna state.",
      },
      body:
        "### 1. Ecosystem Sustainability, Keystone Species & Tipping Points (D4.2 SL)\n" +
        "- **Requirements for ecosystem stability:** (1) continuous external **energy supply** (sunlight), (2) closed **nutrient cycling** by saprotrophic bacteria and fungi, (3) **biodiversity & functional redundancy** (multiple species performing similar roles buffer disturbances), and (4) relative climatic stability. Sealed **mesocosms** test self-sustainability experimentally.\n" +
        "- **Keystone species** exert a disproportionately large controlling effect on community structure relative to their abundance or biomass. Classic example: **sea otters** prey on sea urchins along the Pacific coast; removing otters causes sea urchin explosions that overgraze giant **kelp forests** into barren reefs (a **trophic cascade**).\n" +
        "- **Ecosystem tipping points:** beyond a critical disturbance threshold, positive feedbacks lock an ecosystem into an alternative state (e.g., Amazon rainforest → savanna; clear coral reef → algae-dominated reef).\n\n" +
        "### 2. Eutrophication & Biomagnification (D4.2 SL)\n" +
        "- **Eutrophication sequence:** Excess agricultural **nitrates and phosphates** leach into lakes/estuaries → rapid **algal bloom** blocks sunlight to deeper water → submerged aquatic plants die → **aerobic saprotrophic bacteria** multiply decomposing dead algae and plants → **biochemical oxygen demand (BOD)** surges → dissolved O₂ collapses (**hypoxia/anoxia**) → fish and aquatic invertebrates suffocate.\n" +
        "- **Bioaccumulation** is the progressive buildup of persistent, non-biodegradable, lipophilic (fat-soluble) toxins — such as **DDT**, **methylmercury**, PCBs, or **microplastics** — inside a **single organism** over its lifetime because uptake exceeds excretion/metabolism.\n" +
        "- **Biomagnification** is the exponential increase in toxin concentration at **successively higher trophic levels** across a food chain: because ~90% of biomass/energy is lost as respiratory heat at each trophic transfer, a top predator must consume huge total biomass of prey while retaining nearly 100% of the persistent toxin. {{BMF = C_predator / C_prey}}.\n\n" +
        "### 3. Ecological Succession (D4.2 SL)\n" +
        "- **Primary succession** begins on lifeless mineral substrate with **no soil** (cooled volcanic lava, retreating glacial moraine, bare sand dunes). **Pioneer species** (lichens, mosses) tolerate extreme abiotic stress, weather rock, trap dust, and add organic humus when they die. Soil deepens, water retention improves, and herbaceous plants → shrubs → fast-growing trees → stable **climax community** succeed one another. Across succession, **soil organic matter, gross primary productivity, total biomass, species richness, and food-web complexity all increase**.\n" +
        "- **Secondary succession** occurs where an existing community is cleared (wildfire, storm, abandoned farmland) but **soil and a seed bank remain**, so recovery is far faster.\n" +
        "- **Arrested climax (plagioclimax):** Human intervention — livestock grazing, mowing, or controlled heather burning — halts succession before woodland establishes.\n\n" +
        "### 4. Anthropogenic Climate Change & Positive Feedback Loops (D4.3 SL)\n" +
        "- **Greenhouse effect:** Short-wave solar radiation passes through the atmosphere and warms Earth's surface; Earth re-emits **long-wave infrared (IR) radiation**, which greenhouse gases (**CO₂, CH₄, H₂O vapour, N₂O**) absorb and re-radiate in all directions, warming the troposphere. Burning fossil fuels, deforestation, and ruminant livestock amplify this into the **enhanced greenhouse effect**.\n" +
        "- **Positive climate feedback loops** amplify initial warming:\n" +
        "  1. **Ice–albedo feedback:** Rising temperatures melt bright snow and sea ice (**high albedo ~0.85**, reflecting 85% of sunlight), exposing dark ocean water or tundra (**low albedo ~0.06**). More solar radiation is absorbed → faster warming → faster ice melt.\n" +
        "  2. **Permafrost thaw feedback:** Warming thaws frozen Arctic soils; anaerobic **methanogenic archaea** and saprotrophs decompose ancient organic matter, releasing **CH₄** (a potent greenhouse gas) and **CO₂** → stronger greenhouse warming → deeper thaw.\n" +
        "  3. **Boreal forest browning & wildfires:** Heat and drought stress northern conifers, increasing wildfires and insect outbreaks that convert carbon sinks into net CO₂ sources.\n\n" +
        "### 5. Ecological Impacts & Carbon Sequestration (D4.3 SL)\n" +
        "- **Range shifts:** Warming pushes terrestrial and marine species **poleward** (higher latitudes) and **upslope** (higher altitudes). High-altitude montane species face a 'summit trap' as suitable cool habitat shrinks.\n" +
        "- **Ocean warming & acidification:** Higher sea-surface temperatures stress reef-building corals, triggering expulsion of mutualistic *Symbiodinium* zooxanthellae (**coral bleaching**). Dissolved atmospheric CO₂ forms carbonic acid ({{CO_2 + H_2O -> H_2CO_3 -> H^+ + HCO_3^-}}), lowering ocean pH and reducing carbonate ions (`CO₃²⁻`) needed for **CaCO₃** calcification in corals and molluscs.\n" +
        "- **Phenological mismatch:** Biological timing (**phenology**) shifts differently across trophic levels because temperature cues plants/insects while **photoperiod (day length)** cues many migratory birds and mammals. Earlier springs shift winter moth caterpillar peaks earlier; great tits (*Parus major*) or migratory caribou arrive too late, reducing offspring survival.\n" +
        "- **Carbon sequestration:** **Afforestation/reforestation** locks atmospheric CO₂ into woody biomass and soil organic carbon; **peatland restoration** (blocking drainage ditches to rewet bogs) restores waterlogged, anaerobic, acidic conditions that inhibit saprotrophic decomposers and preserve millennia of accumulated carbon.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 340" role="img" aria-label="Dual ecological diagram showing ice-albedo and permafrost positive climate feedback loops on the left and trophic biomagnification plus eutrophication cascade on the right">' +
        '<rect x="0" y="0" width="680" height="340" fill="#ffffff" rx="10"/>' +
        '<rect x="10" y="10" width="330" height="320" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>' +
        '<text x="175" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Positive Climate Feedback Loops (D4.3)</text>' +
        '<rect x="95" y="46" width="160" height="32" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8" rx="6"/>' +
        '<text x="175" y="66" text-anchor="middle" font-size="10" font-weight="700" fill="#991b1b">Global Temperature ↑</text>' +
        '<path d="M112 78 Q58 104 58 134" fill="none" stroke="#dc2626" stroke-width="2"/>' +
        '<polygon points="58,140 53,130 63,130" fill="#dc2626"/>' +
        '<rect x="20" y="142" width="145" height="44" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="6"/>' +
        '<text x="92" y="159" text-anchor="middle" font-size="9" font-weight="700" fill="#0369a1">Arctic Sea Ice Melts</text>' +
        '<text x="92" y="172" text-anchor="middle" font-size="8" fill="#0f172a">Ice albedo 0.85 → Ocean 0.06</text>' +
        '<path d="M92 186 L92 214" fill="none" stroke="#0284c7" stroke-width="2"/>' +
        '<polygon points="92,220 87,210 97,210" fill="#0284c7"/>' +
        '<rect x="20" y="222" width="145" height="42" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5" rx="6"/>' +
        '<text x="92" y="239" text-anchor="middle" font-size="9" font-weight="700" fill="#9a3412">More Solar Energy</text>' +
        '<text x="92" y="252" text-anchor="middle" font-size="8.2" fill="#7c2d12">Absorbed by Dark Water</text>' +
        '<path d="M165 243 Q175 243 175 84" fill="none" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="4 2"/>' +
        '<polygon points="175,78 170,88 180,88" fill="#ea580c"/>' +
        '<path d="M238 78 Q292 104 292 134" fill="none" stroke="#dc2626" stroke-width="2"/>' +
        '<polygon points="292,140 287,130 297,130" fill="#dc2626"/>' +
        '<rect x="186" y="142" width="145" height="44" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" rx="6"/>' +
        '<text x="258" y="159" text-anchor="middle" font-size="9" font-weight="700" fill="#92400e">Permafrost Thaws</text>' +
        '<text x="258" y="172" text-anchor="middle" font-size="8" fill="#0f172a">Anaerobic decay resumes</text>' +
        '<path d="M258 186 L258 214" fill="none" stroke="#d97706" stroke-width="2"/>' +
        '<polygon points="258,220 253,210 263,210" fill="#d97706"/>' +
        '<rect x="186" y="222" width="145" height="42" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5" rx="6"/>' +
        '<text x="258" y="239" text-anchor="middle" font-size="9" font-weight="700" fill="#5b21b6">CH₄ &amp; CO₂ Released</text>' +
        '<text x="258" y="252" text-anchor="middle" font-size="8.2" fill="#4c1d95">More IR Trapped</text>' +
        '<path d="M186 243 Q175 243 175 84" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="4 2"/>' +
        '<text x="175" y="294" text-anchor="middle" font-size="9" font-weight="700" fill="#991b1b">Amplifying loops accelerate change</text>' +
        '<text x="175" y="309" text-anchor="middle" font-size="8.5" fill="#475569">Both loops push ecosystems closer to tipping points</text>' +
        '<rect x="350" y="10" width="320" height="320" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>' +
        '<text x="510" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Biomagnification &amp; Eutrophication (D4.2)</text>' +
        '<polygon points="510,48 456,82 564,82" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>' +
        '<text x="510" y="75" text-anchor="middle" font-size="8.5" font-weight="700" fill="#991b1b">Tuna: 20 ppm</text>' +
        '<polygon points="456,82 430,116 590,116 564,82" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>' +
        '<text x="510" y="103" text-anchor="middle" font-size="8.8" font-weight="700" fill="#9a3412">Small Fish: 2.0 ppm</text>' +
        '<polygon points="430,116 404,150 616,150 590,116" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>' +
        '<text x="510" y="137" text-anchor="middle" font-size="8.8" font-weight="700" fill="#92400e">Zooplankton: 0.2 ppm</text>' +
        '<polygon points="404,150 378,184 642,184 616,150" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>' +
        '<text x="510" y="171" text-anchor="middle" font-size="8.8" font-weight="700" fill="#166534">Phytoplankton: 0.02 ppm Hg</text>' +
        '<text x="510" y="200" text-anchor="middle" font-size="8.5" fill="#475569">Biomass ↓ ~90% per level → persistent toxin conc. ↑ ×10</text>' +
        '<rect x="364" y="212" width="292" height="104" fill="#ffffff" stroke="#cbd5e1" rx="6"/>' +
        '<text x="510" y="230" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">Eutrophication Cascade</text>' +
        '<text x="510" y="248" text-anchor="middle" font-size="8.5" fill="#0f172a">1. NO₃⁻ / PO₄³⁻ runoff → Algal bloom blocks light</text>' +
        '<text x="510" y="266" text-anchor="middle" font-size="8.5" fill="#0f172a">2. Submerged plants &amp; algae die → Saprotrophs surge</text>' +
        '<text x="510" y="284" text-anchor="middle" font-size="8.5" fill="#0f172a">3. High aerobic respiration (BOD ↑) → Dissolved O₂ ↓</text>' +
        '<text x="510" y="302" text-anchor="middle" font-size="8.5" font-weight="700" fill="#dc2626">4. Hypoxia / anoxia → Fish &amp; invertebrate mortality</text>' +
        '</svg>',
      diagramCaption:
        "Left: Ice-albedo and permafrost CH₄ positive feedback loops amplify climate warming. Right: Trophic biomagnification of persistent toxins (×10 per level) and the four-step eutrophication cascade.",
      workedExamples: [
        {
          title: "SL — Biomagnification Concentration Across Trophic Levels",
          problem:
            "Phytoplankton in an estuary contain {{0.02}} ppm of methylmercury. Each trophic transfer up the chain (phytoplankton → zooplankton → small fish → tuna) multiplies concentration by a factor of 10. Calculate the methylmercury concentration in tuna and the overall biomagnification factor (BMF) from phytoplankton to tuna.",
          steps: [
            "Count trophic transfers from producer (level 1) to tertiary consumer tuna (level 4): **3 transfers**.",
            "Zooplankton = {{0.02 * 10 = 0.2}} ppm; small fish = {{0.2 * 10 = 2.0}} ppm; tuna = {{2.0 * 10 = 20}} ppm.",
            "Overall biomagnification factor: {{BMF = C_tuna / C_phytoplankton = 20 / 0.02 = 1000}} (which equals {{10^3}}).",
          ],
          answer: "Tuna concentration = 20 ppm; overall BMF = 1,000.",
          yourTurn: {
            question:
              "Coastal lagoon water contains 0.005 ppm of DDT. An osprey at the top of the food web accumulates 12.5 ppm of DDT in its lipid tissue. Calculate the overall biomagnification factor (BMF) from water to osprey.",
            answer: { type: "number", value: 2500, display: "2500" },
            solution:
              "{{BMF = 12.5 / 0.005 = 2500}}. The toxin is 2,500 times more concentrated in the apex predator than in the water.",
          },
        },
        {
          title: "SL — Quantifying Ice–Albedo Solar Energy Absorption",
          problem:
            "Arctic summer sunlight delivers {{300}} W m⁻² to the ocean surface. Sea ice has an albedo of {{0.85}} (reflects 85%), whereas open Arctic seawater has an albedo of {{0.06}} (reflects 6%). Calculate the solar power absorbed per m² by each surface and explain why melting ice creates a positive feedback loop.",
          steps: [
            "Fraction absorbed = {{1 - \"albedo\"}}.",
            "Sea ice absorbs {{300 * (1 - 0.85) = 300 * 0.15 = 45}} W m⁻².",
            "Open seawater absorbs {{300 * (1 - 0.06) = 300 * 0.94 = 282}} W m⁻².",
            "Difference = {{282 - 45 = 237}} W m⁻² extra heat absorbed (over 6× more energy!).",
            "Feedback: extra absorbed heat warms the Arctic ocean and air, melting more bright ice and exposing even more dark water, amplifying warming.",
          ],
          answer: "Sea ice absorbs 45 W m⁻² vs 282 W m⁻² for open ocean (+237 W m⁻²), driving positive ice-albedo feedback.",
        },
      ],
      keyPoints: [
        "Ecosystem stability requires solar energy input, nutrient cycling by saprotrophs, and biodiversity/functional redundancy; removing a **keystone species** triggers a trophic cascade.",
        "Eutrophication kills aquatic animals indirectly via **aerobic bacterial decomposition** raising BOD and depleting dissolved O₂ — not because algae directly poison all fish.",
        "**Bioaccumulation** happens within one organism over time; **biomagnification** increases toxin concentration up trophic levels.",
        "Primary succession starts on bare rock (no soil; slow); secondary succession starts on intact soil/seed bank (fast); grazing/burning creates an **arrested climax**.",
        "Greenhouse gases absorb **long-wave infrared** re-emitted by Earth (not incoming short-wave sunlight); ice-albedo loss and permafrost CH₄ release are **positive feedback loops**.",
      ],
      whyItWorks:
        "Both biomagnification and ecological tipping points stem from **non-linear amplification**. In food webs, losing 90% of carbon as CO₂ at each trophic step while retaining 100% of persistent lipophilic toxins multiplies concentration ~10× per step; in climate systems, positive feedbacks amplify small temperature forcings until threshold shifts occur.",
      strategies: [
        "Always distinguish **bioaccumulation** (within 1 organism's lifetime) from **biomagnification** (across trophic levels) — IB Paper 2 frequently awards separate marks for both.",
        "In **phenological mismatch** answers, explicitly state the **two different cues**: temperature (shifting plants/insects earlier) vs **photoperiod / day length** (unchanged by climate warming, keeping migration timing fixed).",
        "In **coral acidification** answers, connect CO₂ → carbonic acid → more H⁺ (lower pH) → fewer carbonate ions (`CO₃²⁻`) → reduced CaCO₃ skeleton deposition.",
      ],
      thinkDeeper:
        "Why is rewetting drained tropical or temperate peatlands one of the highest-impact per-hectare climate mitigations? Drained peat exposes ancient organic matter to oxygen, allowing aerobic saprotrophs to oxidise thousands of years of stored carbon into CO₂ in decades; rewetting instantly suppresses aerobic decay and halts massive carbon emissions.",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Which hormone surge triggers ovulation on Day 14, and what causes that surge?",
        back: "An **LH surge** from the anterior pituitary, triggered by **positive feedback** from sustained high **oestrogen** secreted by the mature Graafian follicle.",
        level: "SL",
      },
      {
        front: "State the source and two key functions of progesterone in the menstrual cycle.",
        back: "Secreted by the **corpus luteum** (and later the placenta); maintains a thick, vascular **endometrium** and exerts **negative feedback** inhibiting FSH and LH.",
        level: "SL",
      },
      {
        front: "Contrast pancreatic α cells and β cells in blood glucose homeostasis.",
        back: "**β cells** detect high blood glucose and secrete **insulin** (uptake + glycogenesis); **α cells** detect low blood glucose and secrete **glucagon** (glycogenolysis + gluconeogenesis).",
        level: "SL",
      },
      {
        front: "Distinguish Type 1 and Type 2 diabetes.",
        back: "**Type 1:** autoimmune destruction of pancreatic β cells (no insulin produced). **Type 2:** target cells become **insulin-resistant** (receptors fail to respond normally).",
        level: "SL",
      },
      {
        front: "How do the acrosome and cortical reactions coordinate fertilisation?",
        back: "**Acrosome reaction** releases enzymes digesting the zona pellucida so one sperm fuses with the egg; **cortical reaction** hardens the zona pellucida to **prevent polyspermy**.",
        level: "HL",
      },
      {
        front: "Explain how the Loop of Henle and ADH produce concentrated urine.",
        back: "The ascending limb actively pumps Na⁺/Cl⁻ into the medulla (impermeable to water), creating a hypertonic gradient; **ADH** inserts **aquaporins** in the collecting duct so water leaves by osmosis.",
        level: "HL",
      },
      {
        front: "Why does ultrafiltration retain plasma proteins in glomerular capillaries?",
        back: "The negatively charged **basement membrane** and narrow **podocyte** filtration slits act as a size-and-charge barrier blocking large plasma proteins and blood cells.",
        level: "HL",
      },
      {
        front: "What pedigree clue proves a trait is autosomal recessive rather than X-linked recessive?",
        back: "Two unaffected parents produce an **affected daughter** (she needs two recessive alleles, so her unaffected father cannot be `X^h Y` — ruling out X-linked recessive).",
        level: "SL",
      },
      {
        front: "Why is ABO blood group inheritance an example of both codominance and multiple alleles?",
        back: "Three alleles (`I^A`, `I^B`, `i`) exist in the population (**multiple alleles**), and `I^A` and `I^B` are equally expressed together in heterozygote AB (**codominance**).",
        level: "SL",
      },
      {
        front: "How do autosomal linked genes differ from unlinked genes in a dihybrid test cross?",
        back: "Unlinked `AaBb × aabb` gives **1 : 1 : 1 : 1**; linked `AB/ab × ab/ab` produces mostly **parental** offspring and fewer **recombinant** offspring created only by prophase I crossing over.",
        level: "HL",
      },
      {
        front: "What is the formula for degrees of freedom (`df`) and the decision rule in a genetic χ² test?",
        back: "{{df = n - 1}} (phenotype classes minus 1). If {{χ^2 > χ^2_crit}} at `p = 0.05`, **reject `H₀`** (observed differs significantly from expected Mendelian ratio).",
        level: "HL",
      },
      {
        front: "Why does polygenic inheritance produce continuous variation?",
        back: "Multiple genes contribute **additive** effects to the same phenotype, generating many intermediate values that form a bell-shaped curve (further smoothed by environment).",
        level: "SL",
      },
      {
        front: "List the 5 assumptions required for Hardy–Weinberg equilibrium.",
        back: "(1) Large population (no genetic drift), (2) Random mating, (3) No mutation, (4) No migration/gene flow, (5) No natural selection.",
        level: "HL",
      },
      {
        front: "Contrast stabilizing, directional, and disruptive selection.",
        back: "**Stabilizing:** favours mean, narrows variance. **Directional:** favours one extreme, shifts mean. **Disruptive:** favours both extremes, creates bimodal curve.",
        level: "HL",
      },
      {
        front: "What is a keystone species? Give one IB example.",
        back: "A species with a disproportionately large effect on community stability relative to its biomass — e.g. **sea otters** controlling sea urchins to maintain kelp forests.",
        level: "SL",
      },
      {
        front: "Distinguish bioaccumulation from biomagnification.",
        back: "**Bioaccumulation:** buildup of persistent toxins in **one organism** over its lifetime. **Biomagnification:** increasing toxin concentration across **higher trophic levels**.",
        level: "SL",
      },
      {
        front: "Explain the ice–albedo positive feedback loop.",
        back: "Warming melts bright, high-albedo ice (~0.85) exposing dark, low-albedo ocean (~0.06) → more solar radiation absorbed → further warming → more melting.",
        level: "SL",
      },
      {
        front: "Why does climate warming cause phenological mismatch between migratory birds and caterpillars?",
        back: "Plant budburst and caterpillar peaks are cued by **temperature** (shifting earlier), whereas bird migration is cued by **photoperiod** (unchanged), so chicks hatch after peak food.",
        level: "SL",
      },
    ],
    mustKnow: [
      "FSH grows follicles; oestrogen repairs endometrium and flips from negative to **positive feedback** to trigger the Day-14 **LH surge** (ovulation); **progesterone** from the corpus luteum maintains endometrium and inhibits FSH/LH.",
      "Negative feedback restores setpoints in **blood glucose** (β cells/insulin vs α cells/glucagon) and **thermoregulation** (hypothalamus, skin arterioles, sweat glands, shivering).",
      "**[HL]** Nephron flow: **ultrafiltration** (Bowman's capsule) → **selective reabsorption** (PCT: 100% glucose) → **countercurrent multiplier** (Loop of Henle) → **ADH aquaporin osmoregulation** (collecting duct).",
      "Always write `I^A / I^B / i` for ABO blood groups and `X^H / X^h / Y` for X-linked traits; unaffected parents with an affected child prove **recessive** inheritance.",
      "**[HL]** Recombination frequency {{RF = (\"recombinants\" / \"total\") * 100%}}; `χ²` goodness-of-fit uses {{df = n - 1}} (`df = 3` → critical value `7.815` at `p = 0.05`).",
      "Natural selection acts on **pre-existing random variation**; differential survival and reproduction shift **allele frequencies** over generations (never say organisms 'adapt because they need to').",
      "**[HL]** Hardy–Weinberg: {{p + q = 1}} and {{p^2 + 2pq + q^2 = 1}}; ALWAYS start from recessive phenotype proportion `q²`, take `sqrt(q²)` for `q`, then compute `p = 1 − q` and `2pq`.",
      "Eutrophication kills fish via **saprotrophic bacterial decomposition** raising BOD and depleting dissolved O₂.",
      "**Bioaccumulation** occurs within an individual; **biomagnification** multiplies persistent lipophilic toxins (DDT, methylmercury) across trophic levels.",
      "Primary succession starts on bare rock (no soil); secondary succession starts on intact soil and seed bank; grazing/fire maintains an **arrested climax**.",
      "Greenhouse gases trap **long-wave infrared** re-emitted by Earth; ice-albedo loss and permafrost CH₄ release are **positive feedback loops**.",
      "Ocean CO₂ absorption lowers pH and depletes carbonate ions (`CO₃²⁻`) needed for coral calcification, while warming causes **coral bleaching** (expulsion of zooxanthellae).",
    ],
    misconceptions: [
      {
        wrong: "Antibiotics cause bacteria to mutate and become immune to the drug.",
        right: "Mutations occur **randomly before exposure**; antibiotics act as a **selection pressure** killing susceptible bacteria so pre-existing resistant bacteria survive and reproduce (bacteria do not have immune systems).",
        level: "SL",
      },
      {
        wrong: "In Hardy–Weinberg problems, if 9% of a population has a recessive disorder, then `q = 0.09`.",
        right: "The recessive phenotype frequency is `q² = 0.09`, so the recessive allele frequency is `q = sqrt(0.09) = 0.30` and `p = 0.70`.",
        level: "HL",
      },
      {
        wrong: "In eutrophication, algal blooms suffocate fish directly because algae consume all the oxygen while alive.",
        right: "Living algae photosynthesise and release O₂ in daylight; hypoxia occurs mainly when blooms block light, plants and algae **die**, and **aerobic saprotrophic bacteria** consume O₂ during decomposition (high BOD).",
        level: "SL",
      },
      {
        wrong: "Greenhouse gases trap incoming short-wave UV and visible sunlight from the Sun.",
        right: "The atmosphere is largely transparent to incoming short-wave solar radiation; greenhouse gases absorb and re-emit **long-wave infrared radiation** radiated back from Earth's warmed surface.",
        level: "SL",
      },
      {
        wrong: "High ADH secretion causes a person to produce large volumes of dilute urine.",
        right: "ADH is *anti*-diuretic: it inserts aquaporins in the collecting duct so **more water is reabsorbed** into the blood, yielding a **small volume of concentrated (hypertonic) urine**.",
        level: "HL",
      },
      {
        wrong: "Pollination and fertilisation are the same event in flowering plants.",
        right: "**Pollination** is the transfer of pollen from anther to stigma; **fertilisation** occurs later when the pollen tube delivers a male gamete nucleus to fuse with the egg nucleus inside the ovule.",
        level: "SL",
      },
      {
        wrong: "When χ² exceeds the critical value, it proves that two genes are linked.",
        right: "Statistical tests never 'prove' a mechanism — `χ² > χ²_crit` lets you **reject the null hypothesis** at `p = 0.05`, providing strong evidence of non-independent assortment (such as linkage).",
        level: "HL",
      },
      {
        wrong: "Coral bleaching means the coral skeleton dissolves from ocean acidification.",
        right: "**Coral bleaching** is caused primarily by **thermal stress (warming)** triggering expulsion of photosynthetic *Symbiodinium* zooxanthellae; **ocean acidification** separately impairs CaCO₃ calcification by lowering `CO₃²⁻` availability.",
        level: "SL",
      },
    ],
    examMistakes: [
      "Writing **glucagon** instead of **glycogen** (or vice versa) in blood glucose answers — double-check every spelling before moving on.",
      "Omitting `X` and `Y` chromosome symbols in sex-linked Punnett squares (writing `Hh × h` instead of `X^H X^h × X^h Y`), which immediately forfeits IB genotype marks.",
      "Forgetting to take `sqrt(q²)` in Hardy–Weinberg questions or omitting the factor of `2` in `2pq` when calculating heterozygous carriers.",
      "Using `df = n` instead of `df = n − 1` in a genetic `χ²` goodness-of-fit test (4 dihybrid classes have `df = 3`, critical value `7.815`, not `df = 4`).",
      "Saying 'positive feedback is good for the body and negative feedback is bad' — in biology, **positive** means *amplifying* a deviation (e.g., oxytocin, ice-albedo warming) and **negative** means *reversing* a deviation toward a setpoint.",
      "Confusing **ozone layer depletion** (CFCs and UV radiation) with the **enhanced greenhouse effect** (CO₂/CH₄ trapping long-wave IR).",
      "Describing natural selection in Lamarckian terms ('giraffes stretched their necks so their offspring inherited longer necks') instead of heritable variation → differential reproductive success → allele frequency shift.",
      "Giving probability out of *all* children when the question asks specifically 'what percentage of their **sons** will be affected?' (or vice versa).",
    ],
    mnemonics: [
      {
        topic: "Menstrual Hormone Sequence",
        device: "FO-LP: Follicle → Oestrogen → LH surge → Progesterone",
        explanation:
          "**F**SH grows the follicle, which secretes **O**estrogen; high oestrogen triggers the **L**H surge (ovulation + corpus luteum), which secretes **P**rogesterone.",
        level: "SL",
      },
      {
        topic: "5 Hardy–Weinberg Equilibrium Assumptions",
        device: "Large Random Mutations Migrate Never (No Selection)",
        explanation:
          "**L**arge population (no drift), **R**andom mating, no **M**utation, no **M**igration (gene flow), and **N**o natural selection.",
        level: "HL",
      },
      {
        topic: "Glucagon vs Insulin",
        device: "Glucagon = Glucose is GONE · Insulin = Glucose goes IN",
        explanation:
          "When blood glucose is **gone** (low), α cells release **glucagon** to break down glycogen; when blood glucose is high, β cells release **insulin** to move glucose **in** to cells.",
        level: "SL",
      },
      {
        topic: "Nephron Sequence",
        device: "Filter, Pick-up, Loop-salt, Duct-ADH",
        explanation:
          "Bowman's capsule **filters** (ultrafiltration); **P**CT **picks up** 100% glucose; **Loop** of Henle pumps **salt** into medulla; Collecting **Duct** responds to **ADH** via aquaporins.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Singapore's NEWater & Glomerular Ultrafiltration",
        detail:
          "Singapore's NEWater plants force reclaimed water under high pressure across semi-permeable microfiltration and reverse-osmosis membranes — an engineering mirror of the kidney's glomerular basement membrane retaining large molecules while letting pure filtrate pass.",
        emoji: "💧",
      },
      {
        title: "40 Years on Daphne Major: Evolution Measured Live",
        detail:
          "Peter and Rosemary Grant banded almost every *Geospiza fortis* finch on Daphne Major in the Galápagos. After the 1977 drought wiped out 85% of birds, average beak depth jumped by ~4% in a single generation — textbook directional natural selection.",
        emoji: "🐦",
      },
      {
        title: "Sea Otters, Kelp Forests & Blue Carbon",
        detail:
          "Restoring sea otters along the Pacific coast suppresses grazing sea urchins, allowing giant kelp forests to rebound and sequester up to 12× more atmospheric CO₂ than urchin-dominated barrens.",
        emoji: "🦦",
      },
      {
        title: "Cystic Fibrosis Carrier Screening & Hardy–Weinberg",
        detail:
          "Clinical geneticists use `p² + 2pq + q² = 1` to estimate carrier prevalence across populations (~1 in 25 in Northern European ancestry) and counsel prospective parents using conditional Mendelian probabilities.",
        emoji: "🧬",
      },
      {
        title: "Southeast Asian Peatland Rewetting",
        detail:
          "Tropical peat swamps in Borneo and Sumatra store vast ancient carbon reserves. Blocking drainage canals to rewet peatlands prevents aerobic decomposition and peat fires, cutting CO₂ emissions rapidly.",
        emoji: "🌿",
      },
      {
        title: "Coral Bleaching Watch on Singapore's Southern Islands",
        detail:
          "Marine biologists monitor sea-surface degree-heating weeks around Pulau Hantu and Sisters' Islands Marine Park, tracking *Symbiodinium* thermal tolerance as global ocean temperatures rise.",
        emoji: "🪸",
      },
    ],
    videos: [
      {
        title: "IB Biology D3.1 & D3.3 — Menstrual Cycle, Homeostasis & Kidney Nephron",
        channel: "YouTube IB Biology Search",
        url: "https://www.youtube.com/results?search_query=IB+Biology+FA2025+D3.1+D3.3+menstrual+cycle+homeostasis+nephron",
      },
      {
        title: "IB Biology D3.2 — Pedigrees, Linked Genes & Chi-Squared Test",
        channel: "YouTube IB Biology Search",
        url: "https://www.youtube.com/results?search_query=IB+Biology+D3.2+dihybrid+linked+genes+chi+squared+test",
      },
      {
        title: "IB Biology D4.1 — Natural Selection & Hardy–Weinberg Equilibrium",
        channel: "YouTube IB Biology Search",
        url: "https://www.youtube.com/results?search_query=IB+Biology+D4.1+Hardy+Weinberg+equilibrium+natural+selection",
      },
      {
        title: "IB Biology D4.2 & D4.3 — Ecosystem Stability, Succession & Climate Feedbacks",
        channel: "YouTube IB Biology Search",
        url: "https://www.youtube.com/results?search_query=IB+Biology+D4.2+D4.3+ecosystem+stability+climate+change+feedback",
      },
    ],
    formulas: [
      {
        name: "Hardy–Weinberg Allele Frequencies",
        formula: "{{p + q = 1}}",
        note: "p = frequency of dominant allele; q = frequency of recessive allele.",
        level: "HL",
      },
      {
        name: "Hardy–Weinberg Genotype Frequencies",
        formula: "{{p^2 + 2pq + q^2 = 1}}",
        note: "p² = homozygous dominant (AA), 2pq = heterozygous carriers (Aa), q² = homozygous recessive (aa).",
        level: "HL",
      },
      {
        name: "Recessive Allele Frequency from Phenotype",
        formula: "{{q = sqrt(q^2)}}",
        note: "Always extract q from the observed homozygous recessive proportion q².",
        level: "HL",
      },
      {
        name: "Chi-Squared Goodness-of-Fit",
        formula: "{{χ^2 = Σ((O - E)^2 / E)}}",
        note: "O = observed count, E = expected count under Mendelian ratio.",
        level: "HL",
      },
      {
        name: "Chi-Squared Degrees of Freedom",
        formula: "{{df = n - 1}}",
        note: "n = number of phenotypic classes (for 4 dihybrid phenotypes, df = 3, crit = 7.815 at p = 0.05).",
        level: "HL",
      },
      {
        name: "Recombination Frequency (Linked Genes)",
        formula: "{{RF = (\"recombinants\" / \"total\") * 100%}}",
        note: "1% RF ≈ 1 map unit (cM); values < 50% indicate autosomal linkage.",
        level: "HL",
      },
      {
        name: "Biomagnification Factor (BMF)",
        formula: "{{BMF = C_predator / C_prey}}",
        note: "Concentration of persistent toxin in higher trophic level divided by lower trophic level.",
        level: "SL",
      },
      {
        name: "Solar Radiation Absorbed (Albedo)",
        formula: "{{I_abs = I_in * (1 - a)}}",
        note: "a = surface albedo (fraction reflected: sea ice ~0.85, dark ocean ~0.06).",
        level: "SL",
      },
      {
        name: "Monohybrid F₂ Phenotypic Ratio",
        formula: "{{3 : 1}}",
        note: "From Aa × Aa under complete dominance (genotypic ratio 1 : 2 : 1).",
        level: "SL",
      },
      {
        name: "Unlinked Dihybrid Ratios",
        formula: "{{9 : 3 : 3 : 1}}",
        note: "From AaBb × AaBb; unlinked test cross AaBb × aabb yields 1 : 1 : 1 : 1.",
        level: "HL",
      },
    ],
  },
};
