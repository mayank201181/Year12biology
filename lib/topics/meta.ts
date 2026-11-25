// ---------------------------------------------------------------------------
// Topic registry for Year 12–13 IB Diploma Biology (SL & HL, First Assessment 2025).
// Pure data — safe to import from Node scripts.
//
// Covers all 4 IBO Themes (A–D) × 4 Levels of Organization = ALL 40 official
// sub-topics (A1.1–D4.3). HL-only sections are explicitly tagged level: "HL".
// ---------------------------------------------------------------------------
import type { IBLevel, Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  level?: IBLevel;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** Which IB Diploma year normally finishes this topic (1 = DP1 / Year 12, 2 = DP2 / Year 13). */
  dpYear: 1 | 2;
  /** Teaching/revision order used when ?dp=2 is active (DP2 first, then DP1). */
  dpOrder: number;
  level: IBLevel;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Theme A: Unity & Diversity",
  "Theme B: Form & Function",
  "Theme C: Interaction & Interdependence",
  "Theme D: Continuity & Change",
];

export const TOPIC_META: TopicMeta[] = [
  // ===================== THEME A: UNITY & DIVERSITY ========================
  {
    id: "a1-a2-unity-molecules-cells",
    title: "Theme A (1–2): Unity & Diversity — Molecules & Cells",
    strand: "Theme A: Unity & Diversity",
    icon: "🔬",
    dpYear: 1,
    dpOrder: 5,
    level: "SL",
    curriculum: "IB Biology FA2025 A1.1 Water, A1.2 Nucleic acids, A2.1 Origins of cells [HL], A2.2 Cell structure, A2.3 Viruses [HL]",
    sections: [
      {
        id: "water-nucleic-acids",
        heading: "A1.1–A1.2 Water Properties & Nucleic Acids (DNA & RNA)",
        level: "SL",
        covers: "Hydrogen bonding in water: cohesion, adhesion, capillary action, solvent polarity, high specific heat capacity, buoyancy/viscosity & Goldilocks zone [HL]; nucleotide structure, sugar–phosphate backbone, DNA double helix vs RNA, complementary base pairing (A–T/U, C–G), universal genetic code; [HL] Hershey–Chase experiment, Chargaff's ratios, nucleosomes & 5'→3' antiparallel directionality.",
      },
      {
        id: "cell-structure-microscopy",
        heading: "A2.2 Cell Structure, Microscopy & Endosymbiosis",
        level: "SL",
        covers: "Cell theory & atypical cells, light vs electron microscopy (resolution, magnification M = I/A, scale bars), prokaryotic vs eukaryotic ultrastructure (70S vs 80S ribosomes, nucleoid, binary fission), plant/animal/fungal differences; [HL] endosymbiotic theory evidence (mitochondria & chloroplasts), cell differentiation & evolution of multicellularity.",
      },
      {
        id: "origins-of-cells-hl",
        heading: "A2.1 Origins of Cells, RNA World & LUCA",
        level: "HL",
        covers: "Prebiotic Earth conditions, spontaneous formation of carbon compounds (Miller–Urey experiment), vesicles/membranes & amphipathic fatty acids, RNA as first genetic & catalytic molecule (ribozymes), hydrothermal vents & Last Universal Common Ancestor (LUCA), fossil & molecular-clock dating of early life.",
      },
      {
        id: "viruses-diversity-hl",
        heading: "A2.3 Structural Diversity, Replication & Rapid Evolution of Viruses",
        level: "HL",
        covers: "Viral structural diversity (DNA vs RNA genomes, single vs double stranded, capsid, envelope, obligate intracellular parasites), bacteriophage lambda lytic vs lysogenic cycles, retrovirus HIV (reverse transcriptase) vs influenza & SARS-CoV-2, convergent origins of viruses, and rapid viral mutation/antigenic drift & shift.",
      },
    ],
  },
  {
    id: "a3-a4-unity-organisms-ecosystems",
    title: "Theme A (3–4): Unity & Diversity — Organisms & Ecosystems",
    strand: "Theme A: Unity & Diversity",
    icon: "🌿",
    dpYear: 1,
    dpOrder: 8,
    level: "SL",
    curriculum: "IB Biology FA2025 A3.1 Diversity of organisms, A3.2 Classification & cladistics [HL], A4.1 Evolution & speciation, A4.2 Conservation",
    sections: [
      {
        id: "diversity-genomes-karyograms",
        heading: "A3.1 Variation, Species Concept, Genomes & Dichotomous Keys",
        level: "SL",
        covers: "Continuous vs discontinuous variation, biological species concept & limitations (asexual organisms, hybrids, horizontal gene transfer), binomial nomenclature, diploid chromosome numbers, karyograms (Down syndrome trisomy 21 & sex determination), genome unity vs SNP diversity, dichotomous keys; [HL] environmental DNA (eDNA), DNA barcoding & chromosome fusion/speciation.",
      },
      {
        id: "classification-cladistics-hl",
        heading: "A3.2 Classification, Three Domains & Cladistics",
        level: "HL",
        covers: "Traditional hierarchy vs cladistics (monophyletic clades), Bacteria / Archaea / Eukarya based on rRNA sequencing, reading & constructing cladograms (nodes, root, shared derived traits), molecular clocks (mutation rate proportionality), distinguishing homologous vs analogous structures, and reclassification examples (e.g. figwort family Scrophulariaceae).",
      },
      {
        id: "evolution-speciation",
        heading: "A4.1 Evidence for Evolution & Mechanisms of Speciation",
        level: "SL",
        covers: "Darwin–Wallace evolution via heritable change, pentadactyl limb homology, selective breeding, convergent evolution & analogous traits (e.g. wings, streamlined marine bodies), geographical isolation & allopatric speciation; [HL] temporal/behavioural reproductive isolation, sympatric speciation, adaptive radiation (Darwin's finches), and polyploidy in plants (Allium / wheat).",
      },
      {
        id: "conservation-biodiversity",
        heading: "A4.2 Biodiversity Crisis, Simpson's Index & Conservation",
        level: "SL",
        covers: "Ecosystem, species & genetic diversity, anthropogenic drivers of the sixth mass extinction (habitat loss, overexploitation, invasive species, pollution, climate change), Simpson's reciprocal diversity index D = N(N−1)/Σn(n−1), in-situ (protected reserves, rewilding) vs ex-situ (seed banks, zoos, captive breeding) conservation, and EDGE species prioritization.",
      },
    ],
  },

  // ===================== THEME B: FORM & FUNCTION ==========================
  {
    id: "b1-b2-form-molecules-cells",
    title: "Theme B (1–2): Form & Function — Molecules & Cells",
    strand: "Theme B: Form & Function",
    icon: "🧫",
    dpYear: 1,
    dpOrder: 6,
    level: "SL",
    curriculum: "IB Biology FA2025 B1.1 Carbs & lipids, B1.2 Proteins, B2.1 Membranes, B2.2 Organelles, B2.3 Cell specialization",
    sections: [
      {
        id: "carbohydrates-lipids-proteins",
        heading: "B1.1–B1.2 Carbohydrates, Lipids & Protein Structure",
        level: "SL",
        covers: "Carbon tetravalency, condensation vs hydrolysis, monosaccharides (α/β-glucose, ribose), starch (amylose/amylopectin), glycogen, cellulose, glycoproteins; triglycerides (saturated/unsaturated fatty acids), phospholipids, amphipathic bilayers, steroids; 20 amino acids, peptide bonds, denaturation, proteome; [HL] R-group chemistry, primary → secondary (α-helix/β-pleated) → tertiary → quaternary structure, globular (insulin/haemoglobin) vs fibrous (collagen).",
      },
      {
        id: "membranes-transport",
        heading: "B2.1 Fluid Mosaic Membranes & Transport Mechanisms",
        level: "SL",
        covers: "Phospholipid bilayer, integral & peripheral proteins, simple diffusion, facilitated diffusion (channels/carriers), osmosis (aquaporins), active transport (ATP pumps), endocytosis & exocytosis (vesicle fusion); [HL] membrane fluidity (saturated vs unsaturated tails, cholesterol regulation), gated ion channels (voltage/ligand), sodium–potassium pump (3 Na⁺ out / 2 K⁺ in), sodium–glucose cotransporter, and cell adhesion molecules.",
      },
      {
        id: "organelles-compartmentalization",
        heading: "B2.2 Organelles, Compartmentalization & Ultrastructure",
        level: "SL",
        covers: "Functional adaptations of nucleus (double membrane, pores), mitochondria (cristae, small matrix volume), chloroplasts (thylakoid stacks/grana, stroma), rough/smooth ER, Golgi apparatus, lysosomes & ribosomes; [HL] separation of transcription and translation in eukaryotes, advantages of compartmentalization (concentrated enzymes, pH isolation), and clathrin-coated vesicles.",
      },
      {
        id: "cell-specialization-sav",
        heading: "B2.3 Stem Cells, Surface-Area-to-Volume Ratio & Specialization",
        level: "SL",
        covers: "Totipotent, pluripotent & multipotent stem cells and stem-cell niches (bone marrow, hair follicle), SA:V ratio mathematical limits on cell size & exchange adaptations (microvilli, biconcave erythrocytes), specialized cell structure–function links (type I & II pneumocytes, cardiac & striated muscle fibres, sperm & egg gametes).",
      },
    ],
  },
  {
    id: "b3-b4-form-organisms-ecosystems",
    title: "Theme B (3–4): Form & Function — Organisms & Ecosystems",
    strand: "Theme B: Form & Function",
    icon: "🫀",
    dpYear: 2,
    dpOrder: 1,
    level: "SL",
    curriculum: "IB Biology FA2025 B3.1 Gas exchange, B3.2 Transport, B3.3 Muscle & motility [HL], B4.1 Adaptation, B4.2 Niches",
    sections: [
      {
        id: "gas-exchange-haemoglobin",
        heading: "B3.1 Gas Exchange, Ventilation, Stomata & Bohr Shift",
        level: "SL",
        covers: "Properties of gas-exchange surfaces (Fick's principles), mammalian alveoli & surfactant, antagonistic intercostal/diaphragm ventilation mechanics, spirometer lung volumes (tidal volume, vital capacity, ventilation rate), leaf mesophyll & stomatal guard cells / transpiration; [HL] cooperative oxygen binding in haemoglobin, fetal vs adult dissociation curves, and Bohr shift under elevated CO₂ / low pH.",
      },
      {
        id: "transport-circulation-plants",
        heading: "B3.2 Vascular Transport in Animals & Plants",
        level: "SL",
        covers: "Capillary fenestrations, artery elastic/muscular walls vs vein valves, single vs double circulation & coronary occlusion; xylem vessels & cohesion–tension transpiration stream, root mineral uptake; [HL] cardiac cycle (atrial/ventricular systole & diastole, AV/semilunar valves, pressure graphs), tissue fluid formation & lymphatic drainage, and phloem pressure-flow translocation (source → sink active loading).",
      },
      {
        id: "muscle-motility-hl",
        heading: "B3.3 Sarcomeres, Sliding Filament Mechanism & Locomotion",
        level: "HL",
        covers: "Myofibril sarcomere banding (Z-lines, A-band, I-band, H-zone, actin, myosin, titin), sliding filament theory: Ca²⁺ release from sarcoplasmic reticulum → troponin/tropomyosin shift → cross-bridge formation → ATP-driven power stroke & detachment, antagonistic muscle pairs (biceps/triceps, intercostals), synovial joint anatomy, and swimming/terrestrial locomotion adaptations.",
      },
      {
        id: "adaptation-biomes-niches",
        heading: "B4.1–B4.2 Abiotic Adaptations, Biomes & Ecological Niches",
        level: "SL",
        covers: "Abiotic tolerance limits & transect distributions, extreme-habitat adaptations (xerophytes/marram grass, halophytes/mangroves, coral reefs, tropical rainforest, hot desert, taiga/tundra biomes); obligate anaerobes/aerobes & facultative anaerobes, photosynthesis vs holozoic/saprotrophic/mixotrophic nutrition, dentition & herbivore–plant adaptations, fundamental vs realized niche, and competitive exclusion.",
      },
    ],
  },

  // ===================== THEME C: INTERACTION & INTERDEPENDENCE ============
  {
    id: "c1-c2-interaction-molecules-cells",
    title: "Theme C (1–2): Interaction & Interdependence — Molecules & Cells",
    strand: "Theme C: Interaction & Interdependence",
    icon: "⚡",
    dpYear: 1,
    dpOrder: 7,
    level: "SL",
    curriculum: "IB Biology FA2025 C1.1 Enzymes, C1.2 Respiration, C1.3 Photosynthesis, C2.1 Chemical signaling [HL], C2.2 Neural signaling",
    sections: [
      {
        id: "enzymes-metabolism",
        heading: "C1.1 Enzymes, Activation Energy & Inhibition Kinetics",
        level: "SL",
        covers: "Anabolic vs catabolic metabolism, globular enzymes lowering activation energy E_a, induced-fit model & active-site specificity, effects of temperature, pH & substrate concentration on rate, immobilization; [HL] intracellular vs extracellular enzymes, linear vs cyclic pathways, competitive (statins) vs non-competitive inhibition, end-product allosteric feedback (threonine → isoleucine), and mechanism-based irreversible inhibition (penicillin).",
      },
      {
        id: "cell-respiration-photosynthesis",
        heading: "C1.2–C1.3 Cell Respiration & Photosynthesis",
        level: "SL",
        covers: "ATP hydrolysis/synthesis, aerobic vs anaerobic respiration (lactate in humans, ethanol + CO₂ in yeast), respirometers; photosynthesis pigments, chromatography R_f, absorption vs action spectra, limiting factors (light, CO₂, temperature), FACE enrichment experiments; [HL] glycolysis, link reaction, Krebs cycle, ETC & chemiosmosis (NADH/FADH₂, O₂ terminal acceptor), lipid vs carbohydrate substrates; photosystems I & II, photolysis, photophosphorylation & Calvin cycle (RuBisCO, GP → TP → RuBP).",
      },
      {
        id: "chemical-signaling-hl",
        heading: "C2.1 Chemical Signaling, Receptors & Second Messengers",
        level: "HL",
        covers: "Ligand–receptor specificity (quorum sensing in Vibrio fischeri bacteria, hormones, neurotransmitters), transmembrane receptors (G-protein coupled receptors activating cAMP second messenger, tyrosine kinase/insulin receptors, ion-channel acetylcholine receptors) vs intracellular hydrophobic receptors (oestradiol, progesterone, testosterone altering gene transcription), and epinephrine vs oestradiol pathway contrast.",
      },
      {
        id: "neural-signaling",
        heading: "C2.2 Neurons, Action Potentials & Synaptic Transmission",
        level: "SL",
        covers: "Neuron anatomy, resting potential (−70 mV via Na⁺/K⁺ pump & K⁺ leak), depolarization (voltage-gated Na⁺ influx → +30 mV), repolarization (K⁺ efflux), refractory period & saltatory conduction along myelinated axons, cholinergic synapse (Ca²⁺ influx, exocytosis, neurotransmitter binding, acetylcholinesterase); [HL] threshold (−55 mV) & oscilloscope traces, excitatory (EPSP) vs inhibitory (IPSP) postsynaptic potentials, spatial/temporal summation, local anaesthetics, pain & consciousness.",
      },
    ],
  },
  {
    id: "c3-c4-interaction-organisms-ecosystems",
    title: "Theme C (3–4): Interaction & Interdependence — Organisms & Ecosystems",
    strand: "Theme C: Interaction & Interdependence",
    icon: "🛡️",
    dpYear: 2,
    dpOrder: 2,
    level: "SL",
    curriculum: "IB Biology FA2025 C3.1 Integration of systems, C3.2 Defense against disease, C4.1 Populations & communities, C4.2 Energy & matter",
    sections: [
      {
        id: "integration-body-systems",
        heading: "C3.1 Nervous & Hormonal Coordination & Plant Tropisms",
        level: "SL",
        covers: "CNS vs PNS, spinal reflex arc (pain withdrawal), cerebellum & medulla oblongata, hypothalamus–pituitary endocrine axis, melatonin & circadian rhythms, epinephrine fight-or-flight, chemoreceptor/baroreceptor control of heart & ventilation rate, plant phototropism & auxin; [HL] auxin efflux pumps (PIN3 proteins) causing cell elongation via proton-pump wall loosening, and positive feedback of ethylene in fruit ripening.",
      },
      {
        id: "defense-against-disease",
        heading: "C3.2 Innate Immunity, Adaptive Immunity, Vaccines & AMR",
        level: "SL",
        covers: "Primary barriers (skin, mucous membranes), blood clotting cascade (platelets → clotting factors → prothrombin → thrombin → fibrinogen → fibrin), innate phagocytes vs adaptive clonal selection (antigen presentation, helper T-cells, B-cell activation, plasma cells & antibodies, memory cells), primary vs secondary response, vaccines & herd immunity, HIV targeting T-helper cells, antibiotics (prokaryotic targets only) & antibiotic resistance, and zoonotic diseases.",
      },
      {
        id: "populations-communities-chi",
        heading: "C4.1 Populations, Sampling, Chi-Squared & Community Interactions",
        level: "SL",
        covers: "Random quadrat sampling, Lincoln capture–mark–recapture index N = Mn/m, carrying capacity & sigmoid growth (exponential/transitional/plateau phases), density-dependent vs density-independent limiting factors, chi-squared test of association between two species, intraspecific vs interspecific competition, mutualism (root nodules, mycorrhizae, coral zooxanthellae), predator–prey cycles, top-down vs bottom-up control, and invasive species.",
      },
      {
        id: "transfers-energy-matter",
        heading: "C4.2 Food Webs, Energy Pyramids, Productivity & Carbon Cycle",
        level: "SL",
        covers: "Open vs closed systems, autotrophs (photo- vs chemoautotrophs) & heterotrophs, trophic levels & ~10% energy-transfer efficiency (respiratory heat loss, unassimilated waste), pyramids of energy (kJ m⁻² yr⁻¹), primary & secondary productivity, carbon sinks/sources & fluxes (photosynthesis, respiration, combustion, ocean acidification, peat/limestone), and the Keeling curve seasonal & long-term atmospheric CO₂ trends.",
      },
    ],
  },

  // ===================== THEME D: CONTINUITY & CHANGE ======================
  {
    id: "d1-d2-continuity-molecules-cells",
    title: "Theme D (1–2): Continuity & Change — Molecules & Cells",
    strand: "Theme D: Continuity & Change",
    icon: "🧬",
    dpYear: 2,
    dpOrder: 3,
    level: "SL",
    curriculum: "IB Biology FA2025 D1.1 DNA replication, D1.2 Protein synthesis, D1.3 Mutations, D2.1 Cell division, D2.2 Gene expression [HL], D2.3 Water potential",
    sections: [
      {
        id: "dna-replication-protein-synthesis",
        heading: "D1.1–D1.2 DNA Replication, PCR & Protein Synthesis",
        level: "SL",
        covers: "Semi-conservative replication (Meselson–Stahl evidence), helicase & DNA polymerase, PCR (denaturation/annealing/extension with Taq polymerase) & gel electrophoresis DNA profiling; transcription (RNA polymerase, antisense vs sense strand) & translation (mRNA codons, tRNA anticodons, ribosome A/P/E sites, degeneracy of genetic code); [HL] 5'→3' synthesis on leading vs lagging strand (primase, RNA primers, DNA Pol III & I, Okazaki fragments, DNA ligase, proofreading), promoter/intron splicing, polysomes, and post-translational modification.",
      },
      {
        id: "mutations-division-cancer",
        heading: "D1.3 & D2.1 Mutations, CRISPR, Mitosis, Meiosis & Tumours",
        level: "SL",
        covers: "Base substitution (silent/missense/nonsense — sickle cell GAG→GTG), insertion/deletion frameshifts, mutagens, somatic vs germ-line mutations; [HL] gene knockout & CRISPR–Cas9 editing, conserved sequences; mitosis (PMAT), cytokinesis (cleavage furrow vs cell plate), mitotic index, meiosis I & II (crossing over, random orientation, non-disjunction); [HL] cyclins/CDKs, proto-oncogenes vs tumour suppressor genes, metastasis.",
      },
      {
        id: "gene-expression-epigenetics-hl",
        heading: "D2.2 Epigenetics & Regulation of Gene Expression",
        level: "HL",
        covers: "Differential gene expression driving cell differentiation despite identical genomes, transcription factors & enhancers, epigenetic tags (DNA methylation silences transcription vs histone tail acetylation loosens chromatin & activates transcription), epigenetic reprogramming vs transgenerational inheritance, environmental effects on phenotype (diet, stress, air pollution), and phenotypic divergence of monozygotic twins over time.",
      },
      {
        id: "water-potential-osmosis",
        heading: "D2.3 Osmolarity, Tonicity & Water Potential (Ψ = Ψ_s + Ψ_p)",
        level: "SL",
        covers: "Osmolarity (mol dm⁻³), isotonic/hypotonic/hypertonic solutions, animal cell lysis vs crenation, plant turgor vs plasmolysis, IV medical saline isotonicity & organ-transport bathing solutions; [HL] quantitative water potential Ψ = Ψ_s + Ψ_p (kPa or MPa), incipient plasmolysis (Ψ_p = 0, Ψ_cell = Ψ_s), and predicting net water movement direction across tissues.",
      },
    ],
  },
  {
    id: "d3-d4-continuity-organisms-ecosystems",
    title: "Theme D (3–4): Continuity & Change — Organisms & Ecosystems",
    strand: "Theme D: Continuity & Change",
    icon: "🌍",
    dpYear: 2,
    dpOrder: 4,
    level: "SL",
    curriculum: "IB Biology FA2025 D3.1 Reproduction, D3.2 Inheritance, D3.3 Homeostasis, D4.1 Natural selection, D4.2 Stability, D4.3 Climate change",
    sections: [
      {
        id: "reproduction-homeostasis",
        heading: "D3.1 & D3.3 Reproduction, Menstrual Hormones & Homeostasis",
        level: "SL",
        covers: "Asexual vs sexual reproduction, menstrual cycle negative/positive feedback (FSH, LH, oestrogen, progesterone), IVF, flowering-plant pollination/fertilisation/seed dispersal & germination; negative feedback homeostasis: blood glucose (pancreatic α/β cells, insulin, glucagon, Type 1 & 2 diabetes) & thermoregulation; [HL] spermatogenesis vs oogenesis, acrosome & cortical reactions, hCG/placenta/oxytocin positive feedback; kidney nephron ultrafiltration, selective reabsorption, Loop of Henle countercurrent & ADH aquaporin osmoregulation.",
      },
      {
        id: "inheritance-linked-chi",
        heading: "D3.2 Mendelian Genetics, Pedigrees, Linked Genes & χ²",
        level: "SL",
        covers: "Alleles, genotype/phenotype, monohybrid Punnett grids, codominance & multiple alleles (ABO blood groups), sex-linked recessive inheritance (haemophilia, red-green colour blindness), pedigree chart deduction, continuous polygenic variation (skin colour/height) & environmental interaction; [HL] dihybrid crosses (9:3:3:1 & 1:1:1:1), autosomal gene linkage & crossing-over recombinants, and χ² goodness-of-fit tests on genetic ratios.",
      },
      {
        id: "natural-selection-hardy-weinberg",
        heading: "D4.1 Natural Selection, Selection Modes & Hardy–Weinberg",
        level: "SL",
        covers: "Heritable variation, overproduction, competition, differential survival/reproduction & allele frequency shifts (antibiotic resistance, peppered moth, Darwin's finches), sexual selection (peacock plumage, antlers), artificial selection; [HL] Hardy–Weinberg equilibrium equations (p + q = 1, p² + 2pq + q² = 1) & its 5 assumptions, stabilizing vs directional vs disruptive selection, and genetic drift / founder effect.",
      },
      {
        id: "stability-climate-change",
        heading: "D4.2–D4.3 Ecosystem Stability, Succession & Climate Change",
        level: "SL",
        covers: "Ecosystem sustainability & tipping points (Amazon deforestation), keystone species (sea otters/kelp), eutrophication & algal blooms, biomagnification/bioaccumulation (DDT, mercury, microplastics), primary vs secondary ecological succession & arrested climax; enhanced greenhouse effect, positive climate feedbacks (ice-albedo loss, permafrost CH₄ release), poleward range shifts, phenological mismatch (caribou/great tits), coral bleaching, and afforestation/peatland carbon sequestration.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
