import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "In 30 milliseconds, a three-neuron spinal loop jerks your fingers off a hot stove before your brain even knows you were burned. Over decades, microscopic memory B-cells patrol your blood ready to crush viruses you met in primary school. And across an entire hemisphere, billions of trees inhale and exhale 6 parts per million of CO₂ every year—proving that interaction and feedback govern biology at every scale from a single synapse to the whole biosphere.",
  didYouKnow: [
    "Memory B-cells can outlive nearly every other dividing cell lineage in your body: survivors of the 1918 influenza pandemic still possessed circulating memory B-cells capable of making neutralizing 1918-specific antibodies 90 years later!",
    "Wild measles infection causes 'immune amnesia'—destroying 11–73% of a child's pre-existing memory antibodies against *other* diseases, whereas the MMR vaccine triggers measles memory safely without erasing prior immunity.",
    "Waterlogged peatlands cover only ~3% of Earth's land surface, yet their anaerobic acidic inhibition of saprotrophs locks away roughly twice as much organic carbon as all the world's standing forests combined.",
    "Charles Darwin and his son Francis first deduced the existence of a mobile phototropic messenger in 1880 by placing tiny foil caps on canary-grass tips—more than 45 years before Frits Went isolated auxin (IAA) into agar blocks.",
    "Over 90 years of fur-trading pelts logged by the Hudson's Bay Company (1845–1935) provided ecologists with the most famous empirical proof of lagged ~10-year predator–prey oscillations between snowshoe hares and Canadian lynx.",
  ],
  activities: [
    {
      title: "Bean-Jar Lincoln Index & Mark-Loss Bias Lab",
      emoji: "🫘",
      materials: [
        "1 opaque bowl or cloth bag",
        "200–400 dried white beans (unknown exact count at start)",
        "1 washable marker pen (or 50 coloured beads/beans to swap in)",
        "Calculator and notebook",
      ],
      steps: [
        "Scoop out a first sample of {{M = 50}} beans, mark each one clearly (or swap them for 50 coloured beans), and return them to the bowl.",
        "Shake thoroughly for 30 seconds to simulate complete random remixing.",
        "Without looking, draw a second sample of {{n = 60}} beans and count how many are marked ({{m}}).",
        "Estimate the bowl's population using {{N = (M * n) / m}}, then repeat 3 trials and average your estimates.",
        "Now simulate 30% tag loss: remove 15 marked beans and replace them with unmarked white beans (keeping total bowl count identical), remix, resample {{n = 60}}, and watch your Lincoln estimate shoot upward into a systematic overestimate!",
        "Finally, empty the bowl and count the true exact number of beans to compute your percentage error.",
      ],
      maths:
        "Unbiased estimate: {{N = (M * n) / m}}. If fraction {{f}} of marks disappear before recapture, observed recaptures drop to {{m' = (1 - f) * m}}, so the biased estimate becomes {{N' = N / (1 - f)}} — a 30% tag loss causes a {{1 / 0.70 - 1 = 42.9}}% overestimate!",
    },
    {
      title: "Paper-Bag Ethylene Positive Feedback Trial [HL]",
      emoji: "🍌",
      materials: [
        "2 unripe green bananas (or firm green tomatoes) from the same bunch",
        "1 very ripe spotted banana",
        "1 brown paper bag and 1 open kitchen plate",
      ],
      steps: [
        "Place Green Banana A alone on an open plate as your control.",
        "Place Green Banana B inside a folded paper bag alongside the ripe spotted banana (the paper bag traps ethylene gas while allowing oxygen in for aerobic respiration).",
        "Photograph both green bananas and record peel colour and firmness every 12 hours for 3 days.",
        "Compare the accelerating rate of yellowing and softening in Bag B vs Control A: once Green Banana B begins synthesizing its own ethylene, ripening speeds up nonlinearly via positive feedback.",
      ],
      maths:
        "Positive feedback rate increases proportionally with existing signal: as ethylene concentration {{[C_2H_4]}} rises, ripening enzyme transcription and new ethylene synthesis accelerate exponentially rather than stabilizing around a negative-feedback set point.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Clonal Selection & HIV Disruption of Adaptive Immunity",
      svg: `<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart of adaptive immunity clonal selection showing macrophage antigen presentation to CD4 helper T-cells, B-cell differentiation into plasma and memory cells, and where HIV disrupts helper T-cells">
  <rect x="4" y="4" width="632" height="237" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="25" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">Adaptive Clonal Selection &amp; Where HIV Strikes</text>
  <!-- Step 1: Macrophage APC -->
  <rect x="18" y="64" width="128" height="72" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
  <text x="82" y="86" font-family="sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#075985">1. Macrophage</text>
  <text x="82" y="101" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#0369a1">Engulfs pathogen &amp;</text>
  <text x="82" y="114" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#0369a1">displays antigens</text>
  <text x="82" y="127" font-family="sans-serif" font-size="8.5" font-weight="700" text-anchor="middle" fill="#0c4a6e">(APC · Innate → Adaptive)</text>
  <!-- Arrow 1->2 -->
  <line x1="146" y1="100" x2="180" y2="100" stroke="#334155" stroke-width="2"/>
  <polygon points="186,100 178,95 178,105" fill="#334155"/>
  <!-- Step 2: Helper T-cell (CD4+) -->
  <rect x="186" y="64" width="132" height="72" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="252" y="86" font-family="sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#92400e">2. Helper T-Cell</text>
  <text x="252" y="101" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#78350f">Complementary CD4⁺</text>
  <text x="252" y="114" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#78350f">receptor binds Ag &amp;</text>
  <text x="252" y="127" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#b45309">secretes cytokines</text>
  <!-- HIV attack callout -->
  <rect x="182" y="168" width="140" height="54" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
  <text x="252" y="185" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#991b1b">HIV Target Site!</text>
  <text x="252" y="199" font-family="sans-serif" font-size="8.6" text-anchor="middle" fill="#7f1d1d">Destroys CD4⁺ T-helper</text>
  <text x="252" y="211" font-family="sans-serif" font-size="8.6" text-anchor="middle" fill="#7f1d1d">cells → AIDS collapse</text>
  <line x1="252" y1="168" x2="252" y2="142" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 2"/>
  <polygon points="252,136 247,144 257,144" fill="#dc2626"/>
  <!-- Arrow 2->3 -->
  <line x1="318" y1="100" x2="352" y2="100" stroke="#334155" stroke-width="2"/>
  <polygon points="358,100 350,95 350,105" fill="#334155"/>
  <!-- Step 3: B-cell Clonal Expansion -->
  <rect x="358" y="64" width="112" height="72" rx="10" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="414" y="86" font-family="sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#5b21b6">3. B-Cell</text>
  <text x="414" y="101" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#6d28d9">Clonal selection</text>
  <text x="414" y="114" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#6d28d9">&amp; rapid mitotic</text>
  <text x="414" y="127" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#6d28d9">expansion</text>
  <!-- Split arrows 3 -> 4a / 4b -->
  <path d="M470 86 L502 68" fill="none" stroke="#15803d" stroke-width="2"/>
  <polygon points="507,65 498,65 503,73" fill="#15803d"/>
  <path d="M470 114 L502 156" fill="none" stroke="#0369a1" stroke-width="2"/>
  <polygon points="507,162 504,153 497,158" fill="#0369a1"/>
  <!-- Step 4a: Plasma cells -->
  <rect x="508" y="42" width="116" height="66" rx="9" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="566" y="61" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#14532d">Plasma Cells</text>
  <text x="566" y="75" font-family="sans-serif" font-size="8.6" text-anchor="middle" fill="#166534">Abundant rER &amp; Golgi</text>
  <text x="566" y="88" font-family="sans-serif" font-size="8.6" text-anchor="middle" fill="#166534">Secrete specific Y-</text>
  <text x="566" y="100" font-family="sans-serif" font-size="8.6" font-weight="700" text-anchor="middle" fill="#14532d">shaped antibodies</text>
  <!-- Step 4b: Memory B-cells -->
  <rect x="508" y="138" width="116" height="66" rx="9" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>
  <text x="566" y="157" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#1e3a8a">Memory B-Cells</text>
  <text x="566" y="171" font-family="sans-serif" font-size="8.6" text-anchor="middle" fill="#1d4ed8">Persist for years</text>
  <text x="566" y="184" font-family="sans-serif" font-size="8.6" text-anchor="middle" fill="#1d4ed8">Drive faster, higher</text>
  <text x="566" y="196" font-family="sans-serif" font-size="8.6" font-weight="700" text-anchor="middle" fill="#1e3a8a">secondary response</text>
</svg>`,
      caption:
        "Clonal selection links innate antigen presentation to adaptive antibody secretion and long-term immunological memory—and reveals why HIV destruction of CD4⁺ helper T-cells collapses the entire downstream cascade.",
    },
    {
      title: "Global Carbon Reservoirs, Sinks & Anthropogenic Fluxes",
      svg: `<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Systems diagram of the global carbon cycle showing atmospheric CO2 connected to terrestrial biosphere, anaerobic peatlands, fossil fuels, surface ocean dissolution, and marine CaCO3 limestone sinks">
  <rect x="4" y="4" width="632" height="237" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="25" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">Global Carbon Pools, Natural Sinks &amp; Human Perturbations</text>
  <!-- Atmosphere Pool -->
  <rect x="210" y="38" width="220" height="40" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
  <text x="320" y="55" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#0c4a6e">Atmosphere (CO₂ &amp; CH₄)</text>
  <text x="320" y="69" font-family="sans-serif" font-size="8.8" text-anchor="middle" fill="#0369a1">~880 Gt C · Rising >420 ppm</text>
  <!-- Terrestrial Biosphere -->
  <rect x="22" y="112" width="166" height="46" rx="9" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="105" y="131" font-family="sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#14532d">Terrestrial Biosphere</text>
  <text x="105" y="146" font-family="sans-serif" font-size="8.6" text-anchor="middle" fill="#166534">Forests, soils &amp; saprotrophs</text>
  <!-- Peat & Fossil Fuels -->
  <rect x="22" y="182" width="236" height="46" rx="9" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>
  <text x="140" y="201" font-family="sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#78350f">Peat &amp; Lithospheric Fossil Fuels</text>
  <text x="140" y="216" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#92400e">Anaerobic acidic bogs → coal, oil, gas</text>
  <!-- Surface & Deep Ocean -->
  <rect x="444" y="112" width="174" height="46" rx="9" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>
  <text x="531" y="131" font-family="sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1e3a8a">Oceans (Dissolved Carbon)</text>
  <text x="531" y="146" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#1d4ed8">CO₂ ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (pH ↓)</text>
  <!-- Marine Limestone -->
  <rect x="412" y="182" width="206" height="46" rx="9" fill="#f1f5f9" stroke="#475569" stroke-width="1.8"/>
  <text x="515" y="201" font-family="sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0f172a">Marine Limestone (CaCO₃)</text>
  <text x="515" y="216" font-family="sans-serif" font-size="8.5" text-anchor="middle" fill="#475569">Coral &amp; mollusc shells (long-term sink)</text>
  <!-- Arrows Atmosphere <-> Biosphere -->
  <path d="M210 60 L122 108" fill="none" stroke="#15803d" stroke-width="2.2"/>
  <polygon points="117,111 126,111 121,103" fill="#15803d"/>
  <text x="116" y="79" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#15803d">Photosynthesis ↓</text>
  <path d="M150 112 L236 80" fill="none" stroke="#ea580c" stroke-width="2"/>
  <polygon points="241,78 232,77 236,85" fill="#ea580c"/>
  <text x="206" y="107" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#c2410c">Respiration ↑</text>
  <!-- Biosphere -> Peat/Fossils -->
  <line x1="94" y1="158" x2="94" y2="177" stroke="#92400e" stroke-width="2"/>
  <polygon points="94,182 89,174 99,174" fill="#92400e"/>
  <text x="86" y="173" font-family="sans-serif" font-size="8" text-anchor="end" fill="#78350f">Burial</text>
  <!-- Combustion arrow Fossil -> Atmosphere -->
  <path d="M258 192 C298 168 312 128 316 84" fill="none" stroke="#dc2626" stroke-width="2.6"/>
  <polygon points="316,78 311,86 321,86" fill="#dc2626"/>
  <rect x="270" y="132" width="128" height="24" rx="5" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
  <text x="334" y="147" font-family="sans-serif" font-size="8.6" font-weight="700" text-anchor="middle" fill="#991b1b">Fossil combustion ↑</text>
  <!-- Atmosphere <-> Oceans -->
  <path d="M430 62 L505 108" fill="none" stroke="#2563eb" stroke-width="2.2"/>
  <polygon points="510,111 501,111 506,103" fill="#2563eb"/>
  <text x="536" y="82" font-family="sans-serif" font-size="8.5" font-weight="700" text-anchor="middle" fill="#1d4ed8">Air–sea exchange</text>
  <text x="536" y="94" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#1d4ed8">(Ocean acidification)</text>
  <!-- Oceans -> Limestone -->
  <line x1="531" y1="158" x2="531" y2="177" stroke="#475569" stroke-width="2"/>
  <polygon points="531,182 526,174 536,174" fill="#475569"/>
  <text x="539" y="173" font-family="sans-serif" font-size="8" fill="#334155">Calcification</text>
</svg>`,
      caption:
        "Natural photosynthesis, peat accumulation, and marine CaCO₃ limestone formation sequester carbon over decades to millions of years—whereas fossil-fuel combustion returns ancient lithospheric carbon to the atmosphere in a single century.",
    },
  ],
  history: {
    title: "Charles David Keeling (1958) — Listening to Earth Breathe Atop a Volcano",
    story:
      "In the mid-1950s, most atmospheric scientists believed measuring global CO₂ accurately was impossible because local chimneys, traffic, and soil microbes made readings jump wildly from hour to hour. Young geochemist Charles David Keeling disagreed: he hand-built an ultra-precise manometric gas analyzer and installed it 3,400 metres high on the barren lava slopes of Mauna Loa, Hawaii, thousands of kilometres from continental industry. Within just two years (1958–1960), his chart paper revealed two astonishing discoveries simultaneously—a crisp seasonal pulse dipping every Northern Hemisphere summer and rising every winter as boreal forests inhaled and exhaled, riding atop a relentless upward staircase driven by human coal and oil combustion. Despite repeated funding threats in the 1960s and 1970s, Keeling kept the Mauna Loa record unbroken for nearly half a century; today the Keeling Curve stands as the foundational benchmark connecting C4.2 ecosystem carbon fluxes to global climate science.",
  },
};
