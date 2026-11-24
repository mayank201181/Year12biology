import type { Drill } from "./types.ts";
import { clean, roundTo } from "./helpers.ts";

const SPECIES_2N: ReadonlyArray<{ name: string; diploid: number }> = [
  { name: "fruit fly (*Drosophila melanogaster*)", diploid: 8 },
  { name: "thale cress (*Arabidopsis thaliana*)", diploid: 10 },
  { name: "garden pea (*Pisum sativum*)", diploid: 14 },
  { name: "einkorn wheat (*Triticum monococcum*)", diploid: 14 },
  { name: "common onion (*Allium cepa*)", diploid: 16 },
  { name: "cabbage (*Brassica oleracea*)", diploid: 18 },
  { name: "maize (*Zea mays*)", diploid: 20 },
  { name: "cultivated rice (*Oryza sativa*)", diploid: 24 },
  { name: "common frog (*Rana temporaria*)", diploid: 26 },
  { name: "honeybee queen (*Apis mellifera*)", diploid: 32 },
  { name: "sunflower (*Helianthus annuus*)", diploid: 34 },
  { name: "African clawed frog (*Xenopus laevis*)", diploid: 36 },
  { name: "domestic cat (*Felis catus*)", diploid: 38 },
  { name: "lion (*Panthera leo*)", diploid: 38 },
  { name: "domestic pig (*Sus scrofa*)", diploid: 38 },
  { name: "house mouse (*Mus musculus*)", diploid: 40 },
  { name: "rhesus macaque (*Macaca mulatta*)", diploid: 42 },
  { name: "brown rat (*Rattus norvegicus*)", diploid: 42 },
  { name: "plains zebra (*Equus quagga*)", diploid: 44 },
  { name: "human (*Homo sapiens*)", diploid: 46 },
  { name: "chimpanzee (*Pan troglodytes*)", diploid: 48 },
  { name: "western gorilla (*Gorilla gorilla*)", diploid: 48 },
  { name: "potato (*Solanum tuberosum*)", diploid: 48 },
  { name: "zebrafish (*Danio rerio*)", diploid: 50 },
  { name: "domestic sheep (*Ovis aries*)", diploid: 54 },
  { name: "Asian elephant (*Elephas maximus*)", diploid: 56 },
  { name: "domestic cattle (*Bos taurus*)", diploid: 60 },
  { name: "donkey (*Equus africanus*)", diploid: 62 },
  { name: "domestic horse (*Equus ferus caballus*)", diploid: 64 },
  { name: "domestic dog (*Canis lupus familiaris*)", diploid: 78 },
];

const HABITAT_COMMUNITIES: ReadonlyArray<{ habitat: string; taxa: readonly string[] }> = [
  { habitat: "rocky-shore tide pool", taxa: ["limpets", "barnacles", "periwinkles", "sea anemones", "chitons"] },
  { habitat: "intertidal reef flat", taxa: ["limpets", "barnacles", "top shells", "sea anemones", "mussels"] },
  { habitat: "primary dipterocarp forest plot", taxa: ["dipterocarps", "strangler figs", "wild orchids", "tree ferns", "rattan palms"] },
  { habitat: "montane cloud-forest plot", taxa: ["oaks", "tree ferns", "epiphytic orchids", "moss cushions", "wild figs"] },
  { habitat: "freshwater rainforest stream", taxa: ["mayfly larvae", "caddisfly larvae", "stonefly larvae", "dragonfly nymphs", "water beetles"] },
  { habitat: "upland river kick-sample", taxa: ["mayfly larvae", "caddisfly larvae", "stonefly larvae", "freshwater shrimps", "riffle beetles"] },
  { habitat: "coral reef transect", taxa: ["damselfish", "butterflyfish", "wrasses", "parrotfish", "gobies"] },
  { habitat: "coastal lagoon reef survey", taxa: ["damselfish", "angelfish", "wrasses", "surgeonfish", "cardinalfish"] },
  { habitat: "mangrove mudflat quadrat", taxa: ["fiddler crabs", "mudskippers", "mangrove snails", "hermit crabs", "polychaetes"] },
  { habitat: "estuarine tidal mudflat", taxa: ["fiddler crabs", "mudskippers", "telescope snails", "shore crabs", "bivalves"] },
  { habitat: "woodland leaf-litter quadrat", taxa: ["ground beetles", "wolf spiders", "millipedes", "woodlice", "springtails"] },
  { habitat: "tropical grassland pitfall trap", taxa: ["ground beetles", "wolf spiders", "ants", "crickets", "earwigs"] },
];

const HOMOLOGOUS_PAIRS: ReadonlyArray<[string, string]> = [
  ["a human arm", "a bat's wing skeleton"],
  ["a bottlenose dolphin's flipper", "a domestic dog's foreleg"],
  ["an eagle's wing bones", "a lizard's forelimb"],
  ["a harbour seal's flipper", "a horse's foreleg"],
  ["a mole's digging forepaw", "a frog's forelimb"],
  ["a tiger's forepaw", "a humpback whale's flipper"],
  ["a fruit bat's forelimb", "a penguin's wing skeleton"],
  ["a chimpanzee's hand", "a tortoise's foreleg"],
  ["a crocodile's forelimb", "a falcon's wing skeleton"],
  ["a rabbit's foreleg", "a sea lion's flipper"],
  ["a kangaroo's forelimb", "a human arm"],
  ["a salamander's forelimb", "an orca's flipper"],
  ["an ostrich's wing bones", "a gorilla's arm"],
  ["a grizzly bear's forepaw", "a flying fox's wing skeleton"],
];

const ANALOGOUS_PAIRS: ReadonlyArray<[string, string]> = [
  ["a bottlenose dolphin's dorsal fin", "a great white shark's dorsal fin"],
  ["a robin's feathered wing", "a honeybee's chitinous wing"],
  ["a bat's skin-membrane wing", "a dragonfly's veined wing"],
  ["a North American cactus's protective spines", "a southern African euphorbia's protective spines"],
  ["an octopus's camera eye", "a human's vertebrate camera eye"],
  ["a penguin's streamlined flipper", "a tuna's pectoral fin"],
  ["a marsupial sugar glider's gliding membrane", "a placental flying squirrel's gliding membrane"],
  ["a mammalian mole's digging forepaw", "an insect mole-cricket's digging leg"],
  ["an extinct ichthyosaur's fusiform body", "a modern dolphin's streamlined body"],
  ["a hummingbird's hovering wing", "a hawkmoth's hovering wing"],
  ["a monarch butterfly's wing", "a golden eagle's wing"],
  ["a desert kangaroo's elongated hopping hindlegs", "a placental jerboa's hopping hindlegs"],
  ["a South American giant anteater's sticky tongue", "an Asian Sunda pangolin's sticky tongue"],
  ["a duck's webbed foot", "a platypus's webbed foot"],
];

const ALLOPATRIC_CASES: ReadonlyArray<string> = [
  "the Congo River permanently dividing ancestral apes into northern chimpanzees and southern bonobos",
  "the uplift of the Isthmus of Panama splitting marine snapping-shrimp populations into Pacific and Caribbean groups",
  "rising post-glacial sea levels isolating squirrels on an offshore island from mainland relatives",
  "a deepening desert canyon preventing terrestrial lizards on opposite rims from ever meeting",
  "a newly formed volcanic mountain chain blocking wind-borne pollen between two alpine plant populations",
  "expanding glaciers dividing a single forest bird population into isolated eastern and western refugia",
  "the deep ocean trench of the Wallace Line separating ancestral mammals on Bali and Lombok",
  "continental rifting widening a saltwater sea between two populations of flightless tortoises",
];

const SYMPATRIC_CASES: ReadonlyArray<string> = [
  "two *Howea* palm populations growing side-by-side on Lord Howe Island flowering six weeks apart due to soil pH",
  "two colour morphs of cichlid fish sharing one African crater lake mating exclusively with their own colour display",
  "spontaneous genome doubling in an interspecific *Allium* grass hybrid creating a fertile tetraploid inside the parent meadow",
  "two apple-maggot fly subpopulations in the same orchard switching to host fruits that ripen in different months",
  "two frog subpopulations living in the same rainforest pond diverging into distinct mating-call frequencies",
  "two insect subpopulations sharing one forest canopy becoming active at dawn versus midnight so they never mate",
  "spontaneous allopolyploidy in wild *Triticum* wheat grasses restoring fertility in a single generation on the same hillside",
  "two sympatric firefly populations in one wetland evolving incompatible flash-code rhythms for mate recognition",
];

const ANIMAL_GENES = [
  "cytochrome *c* gene",
  "mitochondrial *COI* locus",
  "β-haemoglobin gene",
  "α-globin locus",
  "conserved nuclear intron",
];

const PLANT_GENES = [
  "chloroplast *rbcL* gene",
  "chloroplast *matK* locus",
  "chloroplast *ndhF* gene",
  "conserved nuclear ITS locus",
];

const MOLECULAR_CONTEXTS: ReadonlyArray<{ kind: "animal" | "plant"; pair1: string; pair2: string }> = [
  { kind: "animal", pair1: "two tropical fruit-bat species", pair2: "two insectivorous bat species" },
  { kind: "animal", pair1: "two rainforest frog species", pair2: "two montane frog species" },
  { kind: "animal", pair1: "two primate lineages", pair2: "two lemur lineages" },
  { kind: "animal", pair1: "two songbird species", pair2: "two hornbill species" },
  { kind: "animal", pair1: "two coral-reef wrasse species", pair2: "two reef damselfish species" },
  { kind: "animal", pair1: "two gecko species", pair2: "two skink species" },
  { kind: "animal", pair1: "two marine whale lineages", pair2: "two dolphin lineages" },
  { kind: "plant", pair1: "two dipterocarp tree species", pair2: "two figwort plant species" },
  { kind: "plant", pair1: "two Lord Howe palm species", pair2: "two tropical orchid species" },
  { kind: "plant", pair1: "two wild grass species", pair2: "two alpine fern species" },
];

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: Karyograms, Diploid/Haploid & Chromosome Counts (SL, Level 1)
  // =========================================================================
  {
    id: "a3-a4-unity-organisms-ecosystems.karyograms-ploidy",
    topicId: "a3-a4-unity-organisms-ecosystems",
    title: "Chromosomes, Karyograms & Ploidy",
    level: 1,
    ibLevel: "SL",
    guideRef: "diversity-genomes-karyograms",
    generate(rng, tier) {
      if (tier === 1) {
        const sp = rng.pick(SPECIES_2N);
        const n = sp.diploid / 2;
        const mode = rng.int(0, 2);
        if (mode === 0) {
          return {
            prompt: `A ${sp.name} has diploid chromosome number {{2n = ${sp.diploid}}}. How many chromosomes are present in one normal haploid gamete?`,
            answer: { type: "number", value: n, display: String(n) },
            traps: [
              { spec: { type: "number", value: sp.diploid * 2 }, feedback: "Meiosis halves the diploid count rather than doubling it." },
              { spec: { type: "number", value: sp.diploid }, feedback: `${sp.diploid} is the diploid count (2n); halve it for a haploid gamete (n).` },
            ],
            solution: [
              `Meiosis halves the diploid somatic count: {{n = ${sp.diploid} / 2 = ${n}}} chromosomes.`,
            ],
            hint: "Haploid gametes carry half the diploid (2n) chromosome count.",
          };
        }
        if (mode === 1) {
          return {
            prompt: `A normal haploid gamete of a ${sp.name} contains {{n = ${n}}} chromosomes. State the diploid chromosome number ({{2n}}) in a somatic cell.`,
            answer: { type: "number", value: sp.diploid, display: String(sp.diploid) },
            traps: [
              ...(n % 2 === 0 ? [{ spec: { type: "number" as const, value: n / 2 }, feedback: "A gamete is already haploid (n); double it to find diploid 2n." }] : []),
            ],
            solution: [
              `Diploid somatic cells carry two homologous sets: {{2n = 2 * ${n} = ${sp.diploid}}} chromosomes.`,
            ],
            hint: "Multiply the haploid number (n) by 2 to get diploid (2n).",
          };
        }
        const trisomy = sp.diploid + 1;
        return {
          prompt: `A ${sp.name} normally has {{2n = ${sp.diploid}}} chromosomes. If meiotic non-disjunction produces an {{n + 1}} gamete that fuses with a normal gamete, how many chromosomes appear in the resulting trisomy karyogram?`,
          answer: { type: "number", value: trisomy, display: String(trisomy) },
          traps: [
            { spec: { type: "number", value: sp.diploid + 2 }, feedback: "Only one gamete carries an extra chromosome: {{(n + 1) + n = 2n + 1}}." },
            { spec: { type: "number", value: sp.diploid - 1 }, feedback: "Adding one extra chromosome increases 2n by 1 (trisomy), not minus 1." },
          ],
          solution: [
            `Normal gamete ({{n = ${n}}}) + non-disjunction gamete ({{n + 1 = ${n + 1}}}) = {{${trisomy}}} chromosomes ({{2n + 1}}).`,
          ],
          hint: "Trisomy adds one extra chromosome to the normal diploid count: {{2n + 1}}.",
        };
      }

      if (tier === 2) {
        const sp = rng.pick(SPECIES_2N);
        const n = sp.diploid / 2;
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const autosomePairs = n - 1;
          return {
            prompt: `A mammal species has diploid chromosome number {{2n = ${sp.diploid}}}, including one pair of sex chromosomes (XX or XY). How many **homologous pairs of autosomes** appear in its karyogram?`,
            answer: { type: "number", value: autosomePairs, display: String(autosomePairs) },
            traps: [
              { spec: { type: "number", value: n }, feedback: `${n} is the total number of pairs — subtract the 1 pair of sex chromosomes.` },
              { spec: { type: "number", value: autosomePairs * 2 }, feedback: `${autosomePairs * 2} is the number of individual autosomes, not pairs.` },
            ],
            solution: [
              `Total homologous pairs = {{${sp.diploid} / 2 = ${n}}}.`,
              `Subtract 1 sex-chromosome pair: {{${n} - 1 = ${autosomePairs}}} pairs of autosomes.`,
            ],
            hint: "Halve 2n to get total pairs, then subtract the 1 sex-chromosome pair.",
          };
        }
        if (mode === 1) {
          const chromatids = sp.diploid * 2;
          return {
            prompt: `A ${sp.name} ({{2n = ${sp.diploid}}}) somatic cell is arrested in **metaphase of mitosis** to prepare a karyogram. How many individual **sister chromatids** are present in that cell?`,
            answer: { type: "number", value: chromatids, display: String(chromatids) },
            traps: [
              { spec: { type: "number", value: sp.diploid }, feedback: "Each condensed metaphase chromosome consists of TWO sister chromatids after S-phase DNA replication." },
              { spec: { type: "number", value: n }, feedback: "Metaphase mitotic cells are diploid and replicated: multiply 2n by 2." },
            ],
            solution: [
              `Each of the {{${sp.diploid}}} diploid chromosomes has already replicated into 2 sister chromatids during S phase.`,
              `Total sister chromatids = {{${sp.diploid} * 2 = ${chromatids}}}.`,
            ],
            hint: "Every chromosome in mitotic metaphase is X-shaped, consisting of 2 sister chromatids.",
          };
        }
        const monosomy = sp.diploid - 1;
        return {
          prompt: `A ${sp.name} normally has {{2n = ${sp.diploid}}} chromosomes. If non-disjunction forms an {{n - 1}} gamete that is fertilised by a normal haploid gamete, how many chromosomes are present in the resulting monosomy zygote?`,
          answer: { type: "number", value: monosomy, display: String(monosomy) },
          traps: [
            { spec: { type: "number", value: sp.diploid + 1 }, feedback: "An {{n - 1}} gamete is missing a chromosome, producing {{2n - 1}} (monosomy), not {{2n + 1}}." },
          ],
          solution: [
            `Normal gamete ({{n = ${n}}}) + deficient gamete ({{n - 1 = ${n - 1}}}) = {{${monosomy}}} chromosomes ({{2n - 1}}).`,
          ],
          hint: "Sum {{n}} and {{n - 1}} to obtain {{2n - 1}}.",
        };
      }

      // Tier 3: interspecific hybrids & ancestral chromosome fusion [HL]
      if (rng.bool(0.55)) {
        const a = rng.pick(SPECIES_2N);
        let b = rng.pick(SPECIES_2N);
        while (b.diploid === a.diploid) b = rng.pick(SPECIES_2N);
        const hybrid = a.diploid / 2 + b.diploid / 2;
        return {
          prompt: `Suppose Species A ({{2n = ${a.diploid}}}) hybridises with closely related Species B ({{2n = ${b.diploid}}}). How many chromosomes are present in a somatic cell of the F₁ hybrid?`,
          answer: { type: "number", value: hybrid, display: String(hybrid) },
          traps: [
            { spec: { type: "number", value: a.diploid + b.diploid }, feedback: "Gametes are haploid (n), so halve each parent's diploid number before adding." },
          ],
          solution: [
            `Gamete from Species A has {{n_A = ${a.diploid} / 2 = ${a.diploid / 2}}}; gamete from Species B has {{n_B = ${b.diploid} / 2 = ${b.diploid / 2}}}.`,
            `F₁ hybrid somatic count = {{${a.diploid / 2} + ${b.diploid / 2} = ${hybrid}}} chromosomes.`,
          ],
          hint: "Halve both diploid numbers to get the haploid gamete counts, then add them.",
        };
      }
      const ancN = rng.int(8, 36);
      const anc2n = ancN * 2;
      const derivedN = ancN - 1;
      return {
        prompt: `[HL] An ancestral primate lineage has {{2n = ${anc2n}}} chromosomes. Following one end-to-end fusion of two non-homologous ancestral chromosome pairs into a single pair (as in human chromosome 2), how many chromosomes are present in a normal haploid gamete of the derived species?`,
        answer: { type: "number", value: derivedN, display: String(derivedN) },
        traps: [
          { spec: { type: "number", value: anc2n - 2 }, feedback: `${anc2n - 2} is the new diploid count (2n); halve it for a haploid gamete.` },
          { spec: { type: "number", value: ancN }, feedback: "Fusion reduced the diploid count by 2 (one fewer pair), so haploid n decreases by 1." },
        ],
        solution: [
          `Fusing two chromosome pairs into one reduces diploid count from {{${anc2n}}} to {{${anc2n - 2}}}.`,
          `Haploid gamete count = {{${anc2n - 2} / 2 = ${derivedN}}} chromosomes.`,
        ],
        hint: "Fusing two pairs into one lowers 2n by 2, so haploid n drops by 1.",
      };
    },
  },

  // =========================================================================
  // DRILL 2: Simpson's Reciprocal Diversity Index D (SL, Level 2)
  // =========================================================================
  {
    id: "a3-a4-unity-organisms-ecosystems.simpsons-diversity",
    topicId: "a3-a4-unity-organisms-ecosystems",
    title: "Simpson's Reciprocal Diversity Index (D)",
    level: 2,
    ibLevel: "SL",
    guideRef: "conservation-biodiversity",
    generate(rng, tier) {
      const { habitat, taxa } = rng.pick(HABITAT_COMMUNITIES);

      if (tier === 1) {
        if (rng.bool(0.5)) {
          // Sprint-friendly pre-summed exact clean D
          const cases: Array<[number, number]> = [
            [10, 30], [10, 45], [10, 18], [12, 44], [12, 33], [12, 22], [12, 66],
            [15, 60], [15, 70], [15, 42], [15, 35], [15, 105], [16, 48], [16, 60],
            [16, 80], [16, 40], [16, 120], [20, 76], [20, 95], [20, 190], [21, 84],
            [21, 105], [21, 140], [21, 70], [24, 138], [24, 184], [24, 276], [25, 100],
            [25, 120], [25, 150], [25, 200], [25, 300],
          ];
          const [N, sumNN] = rng.pick(cases);
          const numer = N * (N - 1);
          const D = clean(numer / sumNN);
          const inv = roundTo(sumNN / numer, 2);
          return {
            prompt: `In a ${habitat}, ecologists count {{N = ${N}}} individuals in total and compute {{Σ n(n - 1) = ${sumNN}}}. Calculate Simpson's reciprocal diversity index {{D}} (exact value).`,
            answer: { type: "number", value: D, tolerance: 0.02, display: String(D) },
            traps: Math.abs(inv - D) > 0.1
              ? [{ spec: { type: "number", value: inv, tolerance: 0.02 }, feedback: "You inverted the formula! Divide {{N(N - 1)}} by {{Σ n(n - 1)}}." }]
              : undefined,
            solution: [
              `Compute numerator: {{N(N - 1) = ${N} * ${N - 1} = ${numer}}}.`,
              `Divide: {{D = ${numer} / ${sumNN} = ${D}}}.`,
            ],
            hint: "Use {{D = (N(N - 1)) / (Σ n(n - 1))}}.",
          };
        }
        // Small 3-species counts
        const c1 = rng.int(2, 6);
        const c2 = rng.int(2, 6);
        const c3 = rng.int(1, 5);
        const counts = [c1, c2, c3];
        const N = c1 + c2 + c3;
        const numer = N * (N - 1);
        const denom = counts.reduce((s, n) => s + n * (n - 1), 0);
        const D = roundTo(numer / denom, 2);
        const inv = roundTo(denom / numer, 2);
        const noMinus = roundTo((N * N) / counts.reduce((s, n) => s + n * n, 0), 2);
        const traps = [];
        if (Math.abs(inv - D) > 0.08) traps.push({ spec: { type: "number" as const, value: inv, tolerance: 0.02 }, feedback: "You inverted Simpson's formula — divide {{N(N - 1)}} by {{Σ n(n - 1)}}." });
        if (Math.abs(noMinus - D) > 0.08) traps.push({ spec: { type: "number" as const, value: noMinus, tolerance: 0.02 }, feedback: "Remember to subtract 1 from N and from each species count n." });
        return {
          prompt: `A ${habitat} records 3 species: ${c1} ${taxa[0]}, ${c2} ${taxa[1]}, and ${c3} ${taxa[2]}. Calculate Simpson's reciprocal diversity index {{D}} to 2 decimal places.`,
          answer: { type: "number", value: D, tolerance: 0.02, display: D.toFixed(2) },
          traps: traps.length ? traps : undefined,
          solution: [
            `{{N = ${c1} + ${c2} + ${c3} = ${N}}}, so {{N(N - 1) = ${N} * ${N - 1} = ${numer}}}.`,
            `{{Σ n(n - 1) = (${c1}*${c1 - 1}) + (${c2}*${c2 - 1}) + (${c3}*${c3 - 1}) = ${denom}}}.`,
            `{{D = ${numer} / ${denom} ≈ ${D.toFixed(2)}}}.`,
          ],
          hint: "Sum all counts for N, compute N(N − 1), and divide by the sum of n(n − 1).",
        };
      }

      if (tier === 2) {
        const counts = [rng.int(3, 14), rng.int(2, 12), rng.int(1, 10), rng.int(1, 8)];
        const N = counts.reduce((a, b) => a + b, 0);
        const numer = N * (N - 1);
        const denom = counts.reduce((s, n) => s + n * (n - 1), 0);
        const D = roundTo(numer / denom, 2);
        const inv = roundTo(denom / numer, 2);
        const noMinus = roundTo((N * N) / counts.reduce((s, n) => s + n * n, 0), 2);
        const traps = [];
        if (Math.abs(inv - D) > 0.08) traps.push({ spec: { type: "number" as const, value: inv, tolerance: 0.02 }, feedback: "You calculated {{1 / D}} instead of {{D}}." });
        if (Math.abs(noMinus - D) > 0.08) traps.push({ spec: { type: "number" as const, value: noMinus, tolerance: 0.02 }, feedback: "You used {{N^2 / Σ n^2}} instead of {{N(N - 1) / Σ n(n - 1)}}." });
        return {
          prompt: `In a ${habitat}, students record ${counts[0]} ${taxa[0]}, ${counts[1]} ${taxa[1]}, ${counts[2]} ${taxa[2]}, and ${counts[3]} ${taxa[3]}. Calculate Simpson's reciprocal diversity index {{D}} to 2 decimal places.`,
          answer: { type: "number", value: D, tolerance: 0.02, display: D.toFixed(2) },
          traps: traps.length ? traps : undefined,
          solution: [
            `Total individuals: {{N = ${counts.join(" + ")} = ${N}}}, so {{N(N - 1) = ${N} * ${N - 1} = ${numer}}}.`,
            `{{Σ n(n - 1) = ${counts.map((n) => `(${n}*${n - 1})`).join(" + ")} = ${denom}}}.`,
            `{{D = ${numer} / ${denom} ≈ ${D.toFixed(2)}}}.`,
          ],
          hint: "Compute N(N − 1) first, then sum n(n − 1) for all four species (remembering 1 × 0 = 0).",
        };
      }

      // Tier 3: 5-species quadrat OR reverse-solve Σn(n−1)
      if (rng.bool(0.55)) {
        const counts = [rng.int(4, 18), rng.int(2, 14), rng.int(2, 12), rng.int(1, 9), rng.int(1, 7)];
        const N = counts.reduce((a, b) => a + b, 0);
        const numer = N * (N - 1);
        const denom = counts.reduce((s, n) => s + n * (n - 1), 0);
        const D = roundTo(numer / denom, 2);
        const inv = roundTo(denom / numer, 2);
        return {
          prompt: `A 5-species ${habitat} records ${counts[0]} ${taxa[0]}, ${counts[1]} ${taxa[1]}, ${counts[2]} ${taxa[2]}, ${counts[3]} ${taxa[3]}, and ${counts[4]} ${taxa[4]}. Calculate Simpson's reciprocal diversity index {{D}} to 2 decimal places.`,
          answer: { type: "number", value: D, tolerance: 0.02, display: D.toFixed(2) },
          traps: Math.abs(inv - D) > 0.08
            ? [{ spec: { type: "number", value: inv, tolerance: 0.02 }, feedback: "Check numerator vs denominator: {{D}} must be ≥ 1." }]
            : undefined,
          solution: [
            `{{N = ${counts.join(" + ")} = ${N}}}, so {{N(N - 1) = ${N} * ${N - 1} = ${numer}}}.`,
            `{{Σ n(n - 1) = ${counts.map((n) => `${n * (n - 1)}`).join(" + ")} = ${denom}}}.`,
            `{{D = ${numer} / ${denom} ≈ ${D.toFixed(2)}}}.`,
          ],
          hint: "Build a table of n(n − 1) for all five species, sum it, and divide N(N − 1) by that sum.",
        };
      }
      // Reverse solve Σn(n-1)
      const revCases: Array<[number, number]> = [
        [15, 3], [15, 3.5], [15, 5], [16, 4], [16, 5], [16, 6], [20, 4], [20, 5],
        [21, 3], [21, 4], [21, 5], [21, 6], [24, 3], [24, 4], [25, 3], [25, 4],
        [25, 5], [25, 6], [28, 3], [28, 4], [30, 3], [30, 5], [30, 6], [36, 4], [36, 5], [36, 6],
      ];
      const [N, D] = rng.pick(revCases);
      const numer = N * (N - 1);
      const ans = clean(numer / D);
      return {
        prompt: `In a ${habitat} containing {{N = ${N}}} total organisms, Simpson's reciprocal diversity index is {{D = ${D}}}. Rearrange the formula to calculate the exact value of {{Σ n(n - 1)}}.`,
        answer: { type: "number", value: ans, display: String(ans) },
        traps: [
          { spec: { type: "number", value: clean(numer * D) }, feedback: "Divide {{N(N - 1)}} by {{D}} rather than multiplying." },
        ],
        solution: [
          `Compute {{N(N - 1) = ${N} * ${N - 1} = ${numer}}}.`,
          `Rearrange: {{Σ n(n - 1) = (N(N - 1)) / D = ${numer} / ${D} = ${ans}}}.`,
        ],
        hint: "Rearrange {{D = (N(N - 1)) / (Σ n(n - 1))}} to make {{Σ n(n - 1)}} the subject.",
      };
    },
  },

  // =========================================================================
  // DRILL 3: Speciation, Homology vs Analogy & Polyploidy (SL, Level 2)
  // =========================================================================
  {
    id: "a3-a4-unity-organisms-ecosystems.speciation-evolution",
    topicId: "a3-a4-unity-organisms-ecosystems",
    title: "Speciation, Homology & Polyploidy",
    level: 2,
    ibLevel: "SL",
    guideRef: "evolution-speciation",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const [a, b] = rng.pick(HOMOLOGOUS_PAIRS);
          return {
            prompt: `Compare ${a} and ${b}. Because both derive from the shared ancestral tetrapod pentadactyl forelimb, type **homologous** or **analogous**.`,
            answer: {
              type: "text",
              accept: ["homologous", "homologous structures", "homologous traits"],
              display: "homologous",
            },
            traps: [
              { spec: { type: "text", accept: ["analogous", "analogous structures"] }, feedback: "Shared ancestral skeletal blueprint modified for different roles = homologous." },
            ],
            solution: [
              `Both structures inherit the same underlying pentadactyl bone layout from a common tetrapod ancestor → **homologous** (divergent evolution).`,
            ],
            hint: "Shared common ancestry + divergent function = homologous.",
          };
        }
        if (mode === 1) {
          const [a, b] = rng.pick(ANALOGOUS_PAIRS);
          return {
            prompt: `Compare ${a} and ${b}. Because both evolved independently in unrelated lineages under similar environmental pressures, type **homologous** or **analogous**.`,
            answer: {
              type: "text",
              accept: ["analogous", "analogous structures", "analogous traits"],
              display: "analogous",
            },
            traps: [
              { spec: { type: "text", accept: ["homologous", "homologous structures"] }, feedback: "Independent evolution in unrelated lineages produces analogous structures, not homologous ones." },
            ],
            solution: [
              `These traits evolved independently under similar selection pressures without a shared structural ancestor → **analogous** (convergent evolution).`,
            ],
            hint: "Convergent evolution without shared trait ancestry = analogous.",
          };
        }
        const isAllo = rng.bool(0.5);
        const scenario = isAllo ? rng.pick(ALLOPATRIC_CASES) : rng.pick(SYMPATRIC_CASES);
        const ans = isAllo ? "allopatric" : "sympatric";
        const wrong = isAllo ? "sympatric" : "allopatric";
        return {
          prompt: `Consider ${scenario}. Does this represent **allopatric** or **sympatric** speciation?`,
          answer: {
            type: "text",
            accept: [ans, `${ans} speciation`],
            display: ans,
          },
          traps: [
            {
              spec: { type: "text", accept: [wrong, `${wrong} speciation`] },
              feedback: isAllo
                ? "A physical geographical barrier divides the populations, which defines allopatric speciation."
                : "No physical geographic barrier separates the populations; divergence within the same habitat is sympatric speciation.",
            },
          ],
          solution: [
            isAllo
              ? "A physical/geographical barrier halts gene flow between separated populations → **allopatric** speciation."
              : "Reproductive isolation arises within the same geographical area without a physical barrier → **sympatric** speciation.",
          ],
          hint: "Ask: is a physical/geographical barrier splitting the populations (allopatric), or do they occupy the same habitat (sympatric)?",
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          const isHom = rng.bool(0.5);
          const [a, b] = isHom ? rng.pick(HOMOLOGOUS_PAIRS) : rng.pick(ANALOGOUS_PAIRS);
          const ans = isHom ? "divergent" : "convergent";
          const wrong = isHom ? "convergent" : "divergent";
          return {
            prompt: `Which pattern of evolution produced the structural relationship between ${a} and ${b}? Type **divergent** or **convergent**.`,
            answer: {
              type: "text",
              accept: [ans, `${ans} evolution`],
              display: `${ans} evolution`,
            },
            traps: [
              {
                spec: { type: "text", accept: [wrong, `${wrong} evolution`] },
                feedback: isHom
                  ? "Modification of one ancestral limb into different functions is divergent evolution."
                  : "Unrelated lineages evolving similar adaptations independently is convergent evolution.",
              },
            ],
            solution: [
              isHom
                ? "Homologous pentadactyl limbs radiating from one ancestral tetrapod into diverse roles illustrate **divergent evolution**."
                : "Analogous traits evolving independently in unrelated lineages under matching environmental pressures illustrate **convergent evolution**.",
            ],
            hint: "Homologous structures ↔ divergent evolution; analogous structures ↔ convergent evolution.",
          };
        }
        const nA = rng.int(6, 30);
        let nB = rng.int(6, 30);
        while (nB === nA) nB = rng.int(6, 30);
        const dipA = 2 * nA;
        const dipB = 2 * nB;
        const hybrid = nA + nB;
        return {
          prompt: `Two closely related diploid species with {{2n = ${dipA}}} and {{2n = ${dipB}}} interbreed to produce an interspecific F₁ hybrid. How many chromosomes are present in each somatic cell of the hybrid?`,
          answer: { type: "number", value: hybrid, display: String(hybrid) },
          traps: [
            { spec: { type: "number", value: dipA + dipB }, feedback: "Gametes are haploid — halve each diploid count before summing." },
          ],
          solution: [
            `Haploid gametes carry {{n_1 = ${nA}}} and {{n_2 = ${nB}}} chromosomes.`,
            `Hybrid somatic cell has {{${nA} + ${nB} = ${hybrid}}} chromosomes.`,
          ],
          hint: "Add half of the first diploid count to half of the second diploid count.",
        };
      }

      // Tier 3: [HL] allopolyploidy & triploid backcrosses
      if (rng.bool(0.6)) {
        const nA = rng.int(5, 18);
        let nB = rng.int(5, 18);
        while (nB === nA) nB = rng.int(5, 18);
        const f1 = nA + nB;
        const allo = 2 * f1;
        return {
          prompt: `[HL] Wild diploid plant species X ({{2n = ${2 * nA}}}) hybridises with diploid species Y ({{2n = ${2 * nB}}}), forming a sterile F₁ hybrid. Spontaneous genome doubling (allopolyploidy) then restores fertility. Calculate the somatic chromosome number of the new fertile polyploid species.`,
          answer: { type: "number", value: allo, display: String(allo) },
          traps: [
            { spec: { type: "number", value: f1 }, feedback: `${f1} is the sterile F₁ hybrid count — multiply by 2 after genome doubling.` },
            { spec: { type: "number", value: 4 * f1 }, feedback: "Halve both diploid parent counts to get gametes before summing and doubling." },
          ],
          solution: [
            `Gametes carry {{n_X = ${nA}}} and {{n_Y = ${nB}}}; sterile F₁ hybrid has {{${nA} + ${nB} = ${f1}}} chromosomes.`,
            `Spontaneous genome doubling produces {{2 * ${f1} = ${allo}}} chromosomes (${f1} homologous pairs).`,
          ],
          hint: "Find gametes ({{n_X}} and {{n_Y}}), sum for the F₁ hybrid, then double.",
        };
      }
      const n = rng.int(5, 18);
      const triploid = 3 * n;
      return {
        prompt: `[HL] A fertile autotetraploid flowering plant ({{4n = ${4 * n}}}) backcrosses with its original diploid parent species ({{2n = ${2 * n}}}). Calculate the somatic chromosome number of the resulting sterile triploid offspring.`,
        answer: { type: "number", value: triploid, display: String(triploid) },
        traps: [
          { spec: { type: "number", value: 6 * n }, feedback: "Both parents undergo meiosis first — halve 4n and 2n before adding." },
          { spec: { type: "number", value: 2 * n }, feedback: "Tetraploid gametes carry 2n chromosomes and diploid gametes carry n, summing to 3n." },
        ],
        solution: [
          `Tetraploid gamete carries {{${4 * n} / 2 = ${2 * n}}} chromosomes; diploid gamete carries {{${2 * n} / 2 = ${n}}} chromosomes.`,
          `Triploid zygote has {{${2 * n} + ${n} = ${triploid}}} chromosomes (sterile odd ploidy).`,
        ],
        hint: "Halve both parent somatic counts to find their gametes, then add.",
      };
    },
  },

  // =========================================================================
  // DRILL 4: Cladograms & Molecular-Clock Dating (HL, Level 2)
  // =========================================================================
  {
    id: "a3-a4-unity-organisms-ecosystems.cladistics-molecular-clock",
    topicId: "a3-a4-unity-organisms-ecosystems",
    title: "Cladograms & Molecular-Clock Dating [HL]",
    level: 2,
    ibLevel: "HL",
    guideRef: "classification-cladistics-hl",
    generate(rng, tier) {
      const ctx = rng.pick(MOLECULAR_CONTEXTS);
      const gene = ctx.kind === "animal" ? rng.pick(ANIMAL_GENES) : rng.pick(PLANT_GENES);
      const { pair1, pair2 } = ctx;

      if (tier === 1) {
        if (rng.bool(0.75)) {
          const rates = [0.2, 0.25, 0.4, 0.5, 0.6, 0.8, 1.0, 1.2, 1.5, 2.0];
          const r = rng.pick(rates);
          // Pick t so d = r * t is an exact integer >= 4
          const step = r === 0.25 ? 4 : r === 0.2 || r === 0.4 || r === 0.6 || r === 0.8 || r === 1.2 ? 5 : 2;
          const mult = rng.int(3, 18);
          const t = step * mult;
          const d = clean(r * t);
          return {
            prompt: `In a ${gene}, neutral substitutions accumulate at a **pairwise** rate of {{${r}}} differences per million years. If ${pair1} differ at {{${d}}} nucleotide sites, estimate how many million years ago they diverged.`,
            answer: { type: "number", value: t, tolerance: 0.05, display: `${t} Ma` },
            traps: [
              ...(Math.abs(clean(d * r) - t) > 1 ? [{ spec: { type: "number" as const, value: clean(d * r), tolerance: 0.05 }, feedback: "Divide sequence differences by the substitution rate ({{t = d / r}}), rather than multiplying." }] : []),
            ],
            solution: [
              `Apply the pairwise molecular clock: {{t = d / r = ${d} / ${r} = ${t}}} Ma.`,
            ],
            hint: "Divide the pairwise number of base differences by the pairwise rate per Ma.",
          };
        }
        const k = rng.int(4, 28);
        const nodes = k - 1;
        return {
          prompt: `A strictly bifurcating rooted cladogram includes {{${k}}} terminal species across a clade of vertebrates. How many internal branching nodes (speciation events) does this cladogram contain?`,
          answer: { type: "number", value: nodes, display: String(nodes) },
          traps: [
            { spec: { type: "number", value: k }, feedback: "A bifurcating rooted tree with k tips always has k − 1 internal nodes." },
          ],
          solution: [
            `A strictly bifurcating rooted cladogram with {{k = ${k}}} terminal taxa contains {{k - 1 = ${k} - 1 = ${nodes}}} internal nodes.`,
          ],
          hint: "Every speciation split adds 1 tip starting from 1 ancestral lineage: {{nodes = k - 1}}.",
        };
      }

      if (tier === 2) {
        if (rng.bool(0.65)) {
          // Fossil-calibrated 2-step molecular clock
          const rates = [0.2, 0.25, 0.4, 0.5, 0.6, 0.8, 1.0, 1.2, 1.5];
          const r = rng.pick(rates);
          const step = r === 0.25 ? 4 : r === 0.2 || r === 0.4 || r === 0.6 || r === 0.8 || r === 1.2 ? 5 : 2;
          const m1 = rng.int(3, 12);
          let m2 = rng.int(3, 16);
          while (m2 === m1) m2 = rng.int(3, 16);
          const t1 = step * m1;
          const t2 = step * m2;
          const d1 = clean(r * t1);
          const d2 = clean(r * t2);
          const inverted = roundTo((t1 * d1) / d2, 1);
          return {
            prompt: `Fossil dating shows ${pair1} diverged {{${t1}}} Ma ago and differ at {{${d1}}} sites in a ${gene}. In the same gene, ${pair2} differ at {{${d2}}} sites. Assuming a constant molecular clock, estimate how many million years ago the second pair diverged.`,
            answer: { type: "number", value: t2, tolerance: 0.05, display: `${t2} Ma` },
            traps: Math.abs(inverted - t2) > 1
              ? [{ spec: { type: "number", value: inverted, tolerance: 0.1 }, feedback: "Check proportionality: more base differences must correspond to an OLDER divergence time." }]
              : undefined,
            solution: [
              `Calibrate pairwise clock rate: {{r = ${d1} / ${t1} = ${r}}} substitutions per Ma.`,
              `Apply rate to second pair: {{t = ${d2} / ${r} = ${t2}}} Ma.`,
            ],
            hint: "First divide calibration differences by calibration age to get rate r, then divide the new differences by r.",
          };
        }
        // Sequence % identity
        const L = rng.pick([200, 250, 400, 500, 800, 1000]);
        const pctDiff = rng.int(2, 24);
        const d = clean((L * pctDiff) / 100);
        const pctId = 100 - pctDiff;
        return {
          prompt: `Across an aligned {{${L}}}-base-pair ${gene}, ${pair1} differ at {{${d}}} base positions. Calculate the percentage sequence identity between the two species.`,
          answer: { type: "number", value: pctId, display: `${pctId}%` },
          traps: [
            { spec: { type: "number", value: pctDiff }, feedback: `${pctDiff}% is the percentage DIFFERENCE — subtract from 100% for percentage identity.` },
          ],
          solution: [
            `Identical bases = {{${L} - ${d} = ${L - d}}}.`,
            `Percentage identity = {{(${L - d} / ${L}) * 100 = ${pctId}}}%.`,
          ],
          hint: "Subtract the differing bases from total length L, divide by L, and multiply by 100.",
        };
      }

      // Tier 3: Per-lineage rate molecular clock (watch factor of 2!)
      if (rng.bool(0.6)) {
        const rL = rng.pick([0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8]);
        const rPair = clean(2 * rL);
        const step = rPair === 0.3 || rPair === 0.6 || rPair === 1.2 || rPair === 0.2 || rPair === 0.4 || rPair === 0.8 || rPair === 1.6 ? 5 : 2;
        const t = step * rng.int(3, 14);
        const d = clean(rPair * t);
        return {
          prompt: `A ${gene} mutates at a constant rate of **{{${rL}}} substitutions per lineage per million years**. If ${pair1} differ at {{${d}}} sites in this gene, estimate how many million years ago they diverged.`,
          answer: { type: "number", value: t, tolerance: 0.05, display: `${t} Ma` },
          traps: [
            { spec: { type: "number", value: clean(2 * t), tolerance: 0.05 }, feedback: "Watch the factor of 2! Because BOTH lineages mutate independently after diverging, pairwise rate = {{2 * r_L}}." },
          ],
          solution: [
            `Pairwise divergence rate across both lineages = {{2 * ${rL} = ${rPair}}} substitutions per Ma.`,
            `Divergence time: {{t = ${d} / ${rPair} = ${t}}} Ma.`,
          ],
          hint: "Double the per-lineage rate before dividing into the pairwise differences.",
        };
      }

      // Solve for per-lineage rate from % divergence, L, and fossil age
      const rL = rng.pick([0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1.0]);
      const t = rng.pick([20, 25, 40, 50]);
      const d = clean(2 * rL * t);
      const L = rng.pick([1000, 2000]);
      const pctDiff = clean((d / L) * 100);
      return {
        prompt: `Fossil dating shows ${pair1} diverged {{${t}}} Ma ago. Across an aligned {{${L}}}-bp ${gene}, they differ at {{${pctDiff}}}% of positions. Calculate the **per-lineage** substitution rate (in substitutions per lineage per Ma).`,
        answer: { type: "number", value: rL, tolerance: 0.01, display: String(rL) },
        traps: [
          { spec: { type: "number", value: clean(2 * rL), tolerance: 0.01 }, feedback: `${clean(2 * rL)} is the pairwise divergence rate — divide by 2 to get the per-lineage rate.` },
        ],
        solution: [
          `Total pairwise differences: {{d = (${pctDiff} / 100) * ${L} = ${d}}} substitutions.`,
          `Pairwise rate = {{${d} / ${t} = ${clean(2 * rL)}}} substitutions per Ma.`,
          `Per-lineage rate = {{${clean(2 * rL)} / 2 = ${rL}}} substitutions per lineage per Ma.`,
        ],
        hint: "Convert % difference into base count d, divide by t to get pairwise rate, then halve for per-lineage rate.",
      };
    },
  },
];
