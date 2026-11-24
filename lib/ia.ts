// ---------------------------------------------------------------------------
// Internal Assessment (IA) Guidance — IB Diploma Biology (First Assessment 2025).
// Scientific Investigation: 20% of final grade (SL & HL), max 3,000 words,
// 24 marks across 4 equal criteria (6 marks each).
// ---------------------------------------------------------------------------

export interface IaCriterionBand {
  marks: string;
  descriptor: string;
}

export interface IaCriterion {
  code: string;
  name: string;
  maxMarks: number;
  summary: string;
  topBandMustHave: string[];
  bands: IaCriterionBand[];
}

export interface IaMilestone {
  phase: string;
  timing: string;
  tasks: string[];
}

export interface IaSectionGuide {
  heading: string;
  targetWords: string;
  whatToInclude: string;
}

export const IA_GUIDE = {
  title: "IB Biology Scientific Investigation (IA)",
  subtitle: "First Assessment 2025 · 20% of final grade (SL & HL) · 24 marks total · Max 3,000 words",
  hoursNote: "10 hours dedicated to the IA investigation within the statutory practical programme (40 h SL / 60 h HL total, including 10 h Collaborative Sciences Project).",
  wordLimit: 3000,
  totalMarks: 24,
  weightSL: "20%",
  weightHL: "20%",
  keyChanges2025: [
    "Old 'Personal Engagement' and 'Communication' standalone criteria are GONE — replaced by 4 equally weighted 6-mark criteria (A Research Design, B Data Analysis, C Conclusion, D Evaluation).",
    "Strict **3,000-word cap** replaces the old 12-page limit (data tables, graphs, statistical formulas, citations, and bibliography are excluded; examiners stop reading at 3,000 words).",
    "Collaborative data collection (up to 3 students sharing a fieldwork transect or lab protocol) is permitted ONLY if each student chooses a distinct **independent or dependent variable** and writes a 100% independent report.",
    "Wet-lab biology, ecological fieldwork, validated bioinformatics/simulations, or open biological databases (e.g. NCBI GenBank, WHO epidemiology, GBIF biodiversity, NOAA reef datasets) are all eligible.",
  ],
  criteria: [
    {
      code: "A",
      name: "Research Design",
      maxMarks: 6,
      summary: "Formulates a focused, measurable biological Research Question naming the exact species/organism, reproducible methodology, justified controls, and strict IB ethical/safety compliance.",
      topBandMustHave: [
        "RQ explicitly states the Independent Variable (IV with units/range), Dependent Variable (DV with measurement method & units), and exact organism with **binomial name** (e.g. *Saccharomyces cerevisiae*, *Solanum tuberosum*).",
        "Biological theory predicting the expected mechanism (e.g. enzyme active-site kinetics, osmotic water potential gradient, stomatal conductance) with cited scientific context.",
        "Control variables table covering WHAT is controlled, HOW it is kept constant (e.g. thermostatted water bath, pH buffer, identical cultivar/age), and WHY varying it biases the DV.",
        "Biologically valid sample size: ≥ 5 IV increments × ≥ 5 replicates per level (biological variation requires at least 5 trials per condition to calculate meaningful SD and run statistical tests!).",
        "Explicit **IB Animal Experimentation Policy** & biosafety compliance (no pain/stress to live animals, no culturing unknown human pathogens at 37 °C, safe bleach/autoclave disposal of microorganisms).",
      ],
      bands: [
        { marks: "5–6", descriptor: "RQ is explained in a specific biological context naming the organism/system; methodology provides complete, justified controls, ethical/safety care, and sufficient biological replicates." },
        { marks: "3–4", descriptor: "RQ is stated in a broad context; methodology yields relevant data but lacks key variable justifications, sample-size depth, or ethical/safety specifics." },
        { marks: "1–2", descriptor: "RQ is vague or unmeasurable; methodology omits essential controls, organism details, or adequate replicates." },
      ],
    },
    {
      code: "B",
      name: "Data Analysis",
      maxMarks: 6,
      summary: "Records raw quantitative & qualitative biological data cleanly with uncertainties, computes descriptive & inferential statistics (mean, SD, t-test / ANOVA / χ² / Pearson r), and graphs error bars cleanly.",
      topBandMustHave: [
        "Raw data table showing all individual replicates (≥ 5 per IV level), units, ± apparatus uncertainties, consistent decimal places, AND rich qualitative observations (turgidity, browning, foam height, organism behaviour).",
        "Appropriate descriptive statistics: mean + **standard deviation (SD)** (not just range!) for each condition, plus one full worked sample calculation (e.g. `%` mass change or reaction rate).",
        "Appropriate **inferential statistical test** matched to the RQ (`t-test` / `ANOVA` for comparing means, `χ²` for categorical frequencies, `Pearson r` / `Spearman ρ` for correlation) with explicitly stated `H₀`, `H₁`, `df`, test statistic, `p`-value (or critical value at `α = 0.05`), and clear statistical decision.",
        "Clean scatter or bar chart with descriptive title, labelled axes + units, **±1 SD error bars** (explicitly labelled in the caption!), and trendline where appropriate.",
        "No misleading graph choices (never join unrelated categorical bars with lines; never treat tiny `n = 3` trials as proving statistical significance).",
      ],
      bands: [
        { marks: "5–6", descriptor: "Recording and processing are clear, accurate, and biologically appropriate; uncertainties, SD error bars, and statistical tests are executed cleanly and their impact on data is addressed." },
        { marks: "3–4", descriptor: "Data are processed appropriately with minor omissions or inconsistencies in decimal places, error bars, or statistical test selection/interpretation." },
        { marks: "1–2", descriptor: "Major processing/statistical errors, missing uncertainties or SD, or inappropriate graph choice." },
      ],
    },
    {
      code: "C",
      name: "Conclusion",
      maxMarks: 6,
      summary: "Answers the RQ directly citing processed means, SD overlap, and p-values/critical values, then evaluates biological mechanisms against peer-reviewed scientific literature.",
      topBandMustHave: [
        "Direct answer to the RQ quoting processed means ± SD, trend shape (e.g. plateau/optimum), AND statistical verdict (`p < 0.05` → reject `H₀`, or `p > 0.05` → fail to reject `H₀`).",
        "Explicitly discusses **error-bar overlap / biological variability (SD)** and distinguishes statistical significance from biological significance — never claims 'proves'!",
        "Compares results quantitatively against **accepted peer-reviewed biological literature** (e.g. published optimum pH/T for catalase, isotonic osmolarity of potato tissue, or published biodiversity baselines).",
        "Links the observed outcome back to the cellular/molecular/ecological mechanism explained in Criterion A.",
      ],
      bands: [
        { marks: "5–6", descriptor: "Conclusion is fully justified by processed data, variability, and statistical testing, directly answers the RQ, and is rigorously compared with scientific literature." },
        { marks: "3–4", descriptor: "Conclusion is relevant and uses processed data, but literature comparison or treatment of variability/statistical significance is superficial." },
        { marks: "1–2", descriptor: "Conclusion merely restates raw numbers without statistical or biological justification." },
      ],
    },
    {
      code: "D",
      name: "Evaluation",
      maxMarks: 6,
      summary: "Critically evaluates specific biological & methodological weaknesses (distinguishing systematic directional bias vs biological/random variation) and proposes realistic, targeted lab improvements.",
      topBandMustHave: [
        "Identifies 3–5 specific methodological weaknesses anchored in YOUR data/SD bars/qualitative notes (NEVER write 'human error'!).",
        "Distinguishes **systematic errors** (and states direction of bias! e.g. incomplete blotting leaves surface water on potato cylinders, artificially inflating final mass) from **random biological variation** (genetic/age differences inflating SD).",
        "Evaluates the **relative impact** of each limitation (e.g. natural biological variation among seeds or enzymatic substrate depletion vs minor ruler uncertainty).",
        "Proposes concrete, realistic biological improvements targeting each named weakness (e.g. colorimeter/O₂ data-logger instead of counting bubbles, standardized single-cultivar clonal tissue, buffered pH solutions, larger `n ≥ 10` sample size).",
        "Concise, realistic biological extension within the 3,000-word budget.",
      ],
      bands: [
        { marks: "5–6", descriptor: "Specific biological and methodological limitations are clearly explained with relative impact and direction of bias; realistic, directly linked improvements are justified." },
        { marks: "3–4", descriptor: "Relevant limitations and improvements are stated, but relative significance or directional impact on results is incomplete." },
        { marks: "1–2", descriptor: "Generic remarks ('human error', 'be more careful', 'do more trials') with little connection to biological data." },
      ],
    },
  ] as IaCriterion[],
  milestones: [
    {
      phase: "1. Proposal, Ethics & Pilot Study",
      timing: "DP1 Term 3 (Apr–Jun)",
      tasks: [
        "Pick a focused biological system with measurable quantitative DV and zero ethical/biosafety violations (no live-animal distress, no human pathogen culturing).",
        "Run a quick pilot test to verify your IV range spans the physiological response (e.g. enzyme active zone to denaturation, or hypotonic to hypertonic).",
        "Obtain teacher approval on RQ, organism, statistical plan, and risk/ethics sheet.",
      ],
    },
    {
      phase: "2. Experimental / Fieldwork Collection",
      timing: "DP2 Term 1 Early (Aug–Sep)",
      tasks: [
        "Collect ≥ 5 IV levels × ≥ 5 biological replicates each (≥ 25 measurements minimum) with standardized controls.",
        "Record raw values, apparatus ± uncertainties, and qualitative biological notes live in your lab book.",
        "Check mean & SD spread immediately so you can spot biological outliers or extend your range before organisms spoil.",
      ],
    },
    {
      phase: "3. Statistical Processing & First Draft",
      timing: "DP2 Term 1 Mid (Oct)",
      tasks: [
        "Calculate means, SDs, and run your chosen inferential test (`t-test`, `ANOVA`, `χ²`, or `r`/`ρ`) with `H₀` and `α = 0.05`.",
        "Plot clean graphs with labelled ±1 SD error bars and compare findings against peer-reviewed papers.",
        "Submit full first draft (≤ 3,000 words) for your single formal teacher feedback round.",
      ],
    },
    {
      phase: "4. Final Polish & Submission",
      timing: "DP2 Term 2 (Jan–Feb)",
      tasks: [
        "Verify italicised binomial species names (*Genus species*), unit consistency, and directional systematic-error analysis.",
        "Confirm prose word count is ≤ 3,000 words (tables, graphs, formulas & bibliography excluded).",
        "Complete the self-audit checklist below before uploading.",
      ],
    },
  ] as IaMilestone[],
  exemplarStructure: [
    { heading: "1. Focused RQ & Biological Context", targetWords: "350–450 words", whatToInclude: "Exact IV (units/range), DV (units/method), italicised binomial species name, underlying biological mechanism, and cited literature baseline." },
    { heading: "2. Variables, Methodology, Ethics & Safety", targetWords: "650–800 words", whatToInclude: "Control table (what/how/why), ≥ 5 IV levels × ≥ 5 biological replicates, reproducible numbered method, and IB ethical/biosafety/disposal compliance." },
    { heading: "3. Raw Data, Processing & Statistical Analysis", targetWords: "500–650 words", whatToInclude: "Clean raw tables with ± uncertainties, qualitative notes, worked sample calculation, mean ± SD, inferential test (`H₀`, `df`, `p`-value), and graph with ±1 SD error bars." },
    { heading: "4. Conclusion & Peer-Reviewed Comparison", targetWords: "450–550 words", whatToInclude: "Direct answer to RQ citing means, error-bar overlap & `p`-value verdict, quantitative comparison with published literature, and mechanistic explanation." },
    { heading: "5. Evaluation & Targeted Improvements", targetWords: "600–750 words", whatToInclude: "3–5 specific systematic (direction of bias!) & random biological limitations ranked by impact, paired with concrete realistic improvements + brief extension." },
  ] as IaSectionGuide[],
  moderatorTraps: [
    "Violating the IB Animal Experimentation Policy or culturing unknown swabs at 37 °C — automatic safety/ethics disqualification or severe Criterion A penalty!",
    "Using only 3 replicates per condition — biological variability demands ≥ 5 replicates so standard deviation and t-tests/ANOVA are statistically meaningful.",
    "Writing 'the data proves my hypothesis' or conflating correlation with causation instead of evaluating `p`-values and error-bar overlap.",
    "Blaming 'human error' instead of specific biological/methodological mechanisms (e.g. stomatal closure under lamp heat, incomplete blotting, or varying fruit ripeness).",
    "Exceeding 3,000 words — moderators stop reading at word 3,000, forfeiting Criterion D Evaluation marks!",
  ],
  checklist: [
    "RQ states exact IV (range & units), DV (units/method), and italicised binomial organism name.",
    "Biological theory explains the expected mechanism and cites peer-reviewed context.",
    "Control variables table details WHAT, HOW controlled, and WHY it biases the DV.",
    "Collected ≥ 5 IV levels × ≥ 5 biological replicates per level (≥ 25 trials total).",
    "Complies 100% with IB Animal Experimentation Policy, biosafety, and waste disposal guidelines.",
    "Raw data tables include ± apparatus uncertainties, consistent decimal places, and qualitative notes.",
    "Processed data include means, standard deviations (SD), and one complete worked sample calculation.",
    "Correct inferential statistical test (`t-test`/`ANOVA`/`χ²`/`r`) states `H₀`, `df`, `p`/critical value, and verdict.",
    "Graph includes informative title, labelled axes/units, and explicitly captioned ±1 SD error bars.",
    "Conclusion compares results quantitatively to peer-reviewed literature without claiming 'proves'.",
    "Evaluation names specific systematic (with HIGH/LOW bias direction) vs random errors — zero 'human error'.",
    "Prose word count verified ≤ 3,000 words (tables, graphs, calculations & bibliography excluded).",
  ],
};
