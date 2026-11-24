// ---------------------------------------------------------------------------
// Topic B1–B2: Theme B (1–2) Form & Function — Molecules & Cells
// IB Diploma Biology (SL & HL, First Assessment 2025)
// Covers: B1.1 Carbs & lipids, B1.2 Proteins, B2.1 Membranes, B2.2 Organelles,
//         B2.3 Cell specialization.
// ---------------------------------------------------------------------------
import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "b1-b2-form-molecules-cells",
  title: "Theme B (1–2): Form & Function — Molecules & Cells",
  strand: "Theme B: Form & Function",
  icon: "🧫",
  level: "SL",
  summary:
    "How carbon-based molecular geometry builds carbohydrates, lipids, proteins, fluid mosaic membranes, compartmentalized organelles, and SA:V-optimized specialized cells.",
  intro:
    "In IB Biology Theme B, **form dictates function** across every scale. Flip a single hydroxyl group on carbon-1 of glucose and digestible starch transforms into structural cellulose. Arrange amphipathic phospholipids in water and a self-sealing, selectively permeable bilayer appears spontaneously. Divide a eukaryotic cell into membrane-bound compartments and incompatible metabolic reactions can proceed side by side. Finally, geometry imposes a strict surface-area-to-volume limit that drives stem cells to differentiate into flattened pneumocytes, microvilli-lined enterocytes, and contractile muscle fibres.",
  guide: [
    // =========================================================================
    // SECTION 1: B1.1–B1.2 Carbohydrates, Lipids & Protein Structure
    // =========================================================================
    {
      id: "carbohydrates-lipids-proteins",
      heading: "B1.1–B1.2 Carbohydrates, Lipids & Protein Structure",
      level: "SL",
      discovery: {
        problem:
          "Starch (found in rice) and cellulose (found in wood and cotton) are both unbranched or branched polymers built from the exact same chemical formula, C₆H₁₂O₆. Yet humans digest starch rapidly for energy while cellulose passes through the gut untouched and can support a 100-metre redwood tree. Before reading further, predict what tiny structural difference between two glucose monomers could produce such opposite properties.",
        idea:
          "On carbon-1 of the glucose ring, the **−OH group points below the ring plane in α-glucose** and **above the ring plane in β-glucose**. Linking α-glucose monomers curves the chain into a compact helix (starch) whose α-1,4 bonds match human amylase. Linking β-glucose monomers forces every alternate glucose to flip 180°, producing rigid, straight chains (cellulose) that pack side-by-side via dense hydrogen bonds into high-tensile microfibrils that human enzymes cannot fit.",
      },
      body:
        "### Carbon's Molecular Versatility & Condensation vs Hydrolysis\n\n" +
        "Every biological macromolecule rests on **carbon tetravalency**: a carbon atom has four valence electrons and forms **four strong covalent bonds** (single, double, or triple) with other carbons or with H, O, N, P, and S. This enables straight chains, branched chains, and stable rings of virtually unlimited diversity.\n\n" +
        "- **Condensation (anabolic):** joins two monomers by forming a covalent bond and **releasing one H₂O molecule** per bond formed. Forming a linear polymer of `n` monomers releases `n − 1` water molecules.\n" +
        "- **Hydrolysis (catabolic):** breaks a covalent bond by **adding one H₂O molecule**, splitting polymers back into monomers (e.g. during enzymatic digestion).\n\n" +
        "### Carbohydrates (B1.1)\n\n" +
        "Monosaccharides have the general formula `(CH₂O)_n` and are polar, water-soluble, and readily transported in blood or phloem. **Ribose** (`C₅H₁₀O₅`) is a pentose sugar in RNA and ATP; **glucose** (`C₆H₁₂O₆`) is a hexose energy substrate existing as **α-D-glucose** (C1 −OH down) and **β-D-glucose** (C1 −OH up).\n\n" +
        "| Polysaccharide | Monomer | Glycosidic bonds | 3D shape | Biological function |\n" +
        "|---|---|---|---|---|\n" +
        "| **Amylose** (starch) | α-glucose | α-1,4 only | Unbranched helix | Compact, osmotically inactive plant energy store |\n" +
        "| **Amylopectin** (starch) | α-glucose | α-1,4 and α-1,6 | Branched helix | Plant energy store with more terminal ends for faster hydrolysis |\n" +
        "| **Glycogen** | α-glucose | α-1,4 and frequent α-1,6 | Highly branched | Rapidly mobilised animal energy store in liver and skeletal muscle |\n" +
        "| **Cellulose** | β-glucose | β-1,4 (alternating 180° flips) | Straight parallel chains + H-bonds | High tensile strength plant cell-wall microfibrils |\n\n" +
        "**Glycoproteins** are membrane proteins covalently linked to short carbohydrate chains on the extracellular face; they mediate **cell–cell recognition** (for example, ABO blood-group antigens on erythrocytes).\n\n" +
        "### Lipids (B1.1)\n\n" +
        "Lipids are diverse, largely **hydrophobic** (non-polar) carbon compounds insoluble in water but soluble in non-polar solvents:\n\n" +
        "- **Triglycerides:** formed by **3 condensation reactions** joining **1 glycerol** and **3 fatty acids** via **3 ester bonds**, releasing **3 H₂O**. Fatty acids may be **saturated** (no C=C double bonds; straight chains pack tightly → higher melting point, solid animal fats), **monounsaturated** (one C=C), or **polyunsaturated** (multiple C=C). Natural unsaturated fatty acids are predominantly **cis-isomers**, introducing a kink that prevents tight packing and lowers the melting point; **trans-isomers** are straighter and pack more tightly. Triglycerides excel at **long-term energy storage** (~38 kJ g⁻¹ vs ~17 kJ g⁻¹ for carbohydrates, stored anhydrously with zero osmotic draw), thermal insulation (blubber/adipose), buoyancy, and organ cushioning.\n" +
        "- **Phospholipids:** 1 glycerol + 2 fatty acids + 1 polar phosphate group. They are **amphipathic** (hydrophilic phosphate head + hydrophobic fatty-acid tails), so they spontaneously self-assemble into bilayers in aqueous environments.\n" +
        "- **Steroids:** four fused carbon rings (e.g. cholesterol, oestradiol, testosterone). Their hydrophobic nature allows steroid hormones to diffuse directly through phospholipid bilayers to bind intracellular receptors.\n\n" +
        "### Proteins & Amino Acids (B1.2)\n\n" +
        "All **20 genetically encoded amino acids** share a central α-carbon bonded to an **amine group (−NH₂)**, a **carboxyl group (−COOH)**, a hydrogen atom (−H), and a variable **R-group (side chain)**. Condensation between the −COOH of one amino acid and the −NH₂ of the next forms a **peptide bond (−CO−NH−)** and releases H₂O. Humans synthesize non-essential amino acids but must obtain **essential amino acids** from diet (vegan diets combine complementary plant proteins such as legumes and grains). A chain of length `n` has `20^n` possible sequences; an organism's entire complement of expressed proteins is its **proteome** (unique to each individual and cell type).\n\n" +
        "**Denaturation** occurs when extremes of **temperature** or **pH** disrupt weak intramolecular interactions (hydrogen bonds, ionic bonds, hydrophobic interactions), causing the protein to lose its native 3D conformation and biological function **without breaking covalent peptide bonds**.\n\n" +
        "### [HL] R-Group Chemistry & Four Levels of Protein Structure\n\n" +
        "1. **Primary (1°) structure:** exact linear sequence of amino acids linked by **peptide bonds**, encoded by DNA; determines every higher folding level.\n" +
        "2. **Secondary (2°) structure:** local regular folding into **α-helices** or **β-pleated sheets**, stabilized strictly by **hydrogen bonds between backbone C=O and N–H groups** (independent of R-groups).\n" +
        "3. **Tertiary (3°) structure:** overall 3D conformation of a single polypeptide, stabilized by **R-group interactions**: hydrogen bonds (polar R-groups), ionic bonds (positively and negatively charged R-groups), covalent **disulfide bridges** (between cysteine thiol groups), and **hydrophobic interactions** clustering non-polar R-groups into the interior away from water (or facing lipid tails in integral membrane proteins).\n" +
        "4. **Quaternary (4°) structure:** assembly of **two or more polypeptide subunits** (and optionally non-polypeptide prosthetic groups), such as **haemoglobin** (2 α-chains + 2 β-chains + 4 Fe²⁺-containing haem groups) or **collagen** (three left-handed helices wound into a right-handed rope).\n\n" +
        "- **Globular proteins** (e.g. **insulin**, **haemoglobin**, enzymes): compact, rounded, hydrophilic R-groups on the outer surface → **water-soluble**, metabolic/transport/signalling roles, relatively sensitive to pH/temperature denaturation.\n" +
        "- **Fibrous proteins** (e.g. **collagen**, keratin): elongated, repetitive amino-acid sequences (Gly–X–Y in collagen), many exposed non-polar R-groups → **insoluble in water**, high tensile strength, structural roles.",
      diagram:
        '<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Alpha and beta glucose ring isomers beside peptide bond condensation between two amino acids">' +
        '<rect x="0" y="0" width="640" height="270" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="160" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">α-Glucose vs β-Glucose (C1 −OH flip)</text>' +
        '<text x="480" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Peptide Bond Condensation</text>' +
        '<line x1="316" y1="16" x2="316" y2="254" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5 4"/>' +
        // Alpha glucose hexagon
        '<g transform="translate(22,52)">' +
        '<text x="58" y="0" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0369a1">α-D-Glucose (Starch/Glycogen)</text>' +
        '<polygon points="34,42 74,42 94,72 74,102 34,102 14,72" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>' +
        '<circle cx="74" cy="42" r="9" fill="#ffffff" stroke="#0284c7" stroke-width="1.8"/>' +
        '<text x="74" y="46" text-anchor="middle" font-size="11" font-weight="700" fill="#0369a1">O</text>' +
        '<text x="94" y="60" text-anchor="middle" font-size="9.5" font-weight="700" fill="#334155">C1</text>' +
        '<line x1="94" y1="72" x2="94" y2="48" stroke="#334155" stroke-width="1.5"/>' +
        '<text x="94" y="44" text-anchor="middle" font-size="10" fill="#334155">H</text>' +
        '<line x1="94" y1="72" x2="94" y2="98" stroke="#dc2626" stroke-width="2.2"/>' +
        '<rect x="78" y="99" width="32" height="16" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>' +
        '<text x="94" y="111" text-anchor="middle" font-size="10" font-weight="700" fill="#b91c1c">OH ↓</text>' +
        '<text x="54" y="138" text-anchor="middle" font-size="10" fill="#475569">α-1,4 → helical starch</text>' +
        '</g>' +
        // Beta glucose hexagon
        '<g transform="translate(174,52)">' +
        '<text x="58" y="0" text-anchor="middle" font-size="11.5" font-weight="700" fill="#047857">β-D-Glucose (Cellulose)</text>' +
        '<polygon points="34,42 74,42 94,72 74,102 34,102 14,72" fill="#d1fae5" stroke="#059669" stroke-width="2"/>' +
        '<circle cx="74" cy="42" r="9" fill="#ffffff" stroke="#059669" stroke-width="1.8"/>' +
        '<text x="74" y="46" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">O</text>' +
        '<text x="94" y="88" text-anchor="middle" font-size="9.5" font-weight="700" fill="#334155">C1</text>' +
        '<line x1="94" y1="72" x2="94" y2="46" stroke="#dc2626" stroke-width="2.2"/>' +
        '<rect x="78" y="29" width="32" height="16" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>' +
        '<text x="94" y="41" text-anchor="middle" font-size="10" font-weight="700" fill="#b91c1c">OH ↑</text>' +
        '<line x1="94" y1="72" x2="94" y2="98" stroke="#334155" stroke-width="1.5"/>' +
        '<text x="94" y="110" text-anchor="middle" font-size="10" fill="#334155">H</text>' +
        '<text x="54" y="138" text-anchor="middle" font-size="10" fill="#475569">β-1,4 → straight microfibrils</text>' +
        '</g>' +
        // Bottom left summary pill
        '<rect x="20" y="210" width="280" height="44" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>' +
        '<text x="160" y="228" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Same formula C₆H₁₂O₆, opposite geometry</text>' +
        '<text x="160" y="244" text-anchor="middle" font-size="10" fill="#475569">Every condensation removes H₂O: n monomers → n − 1 bonds</text>' +
        // Right side: Peptide condensation
        '<g transform="translate(334,48)">' +
        // Reactants row
        '<rect x="2" y="10" width="128" height="62" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.6"/>' +
        '<text x="66" y="27" text-anchor="middle" font-size="10" font-weight="700" fill="#5b21b6">Amino Acid 1</text>' +
        '<text x="66" y="46" text-anchor="middle" font-size="11" fill="#1e293b">H₂N−CH(R₁)−C=O</text>' +
        '<text x="106" y="63" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">−OH</text>' +
        '<text x="143" y="46" text-anchor="middle" font-size="14" font-weight="700" fill="#475569">+</text>' +
        '<rect x="156" y="10" width="132" height="62" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.6"/>' +
        '<text x="222" y="27" text-anchor="middle" font-size="10" font-weight="700" fill="#5b21b6">Amino Acid 2</text>' +
        '<text x="176" y="63" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">H−</text>' +
        '<text x="231" y="46" text-anchor="middle" font-size="11" fill="#1e293b">HN−CH(R₂)−COOH</text>' +
        // Highlight ellipse for H2O removal
        '<rect x="92" y="51" width="96" height="17" rx="8" fill="none" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="3 2"/>' +
        // Down arrow
        '<line x1="145" y1="80" x2="145" y2="114" stroke="#0f172a" stroke-width="2"/>' +
        '<polygon points="139,108 151,108 145,118" fill="#0f172a"/>' +
        '<text x="156" y="102" font-size="10.5" font-weight="700" fill="#0369a1">Condensation (−H₂O)</text>' +
        // Dipeptide product
        '<rect x="4" y="124" width="218" height="58" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>' +
        '<text x="113" y="142" text-anchor="middle" font-size="10.5" font-weight="700" fill="#92400e">Dipeptide (Peptide Bond Highlighted)</text>' +
        '<text x="113" y="164" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1e293b">H₂N−CH(R₁)−<tspan fill="#dc2626">CO−NH</tspan>−CH(R₂)−COOH</text>' +
        '<text x="234" y="157" text-anchor="middle" font-size="13" font-weight="700" fill="#475569">+</text>' +
        '<rect x="246" y="135" width="44" height="36" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.6"/>' +
        '<text x="268" y="157" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0369a1">H₂O</text>' +
        '<text x="145" y="204" text-anchor="middle" font-size="10" fill="#475569">Reverse reaction = Hydrolysis (+H₂O breaks −CO−NH−)</text>' +
        '</g>' +
        '</svg>',
      diagramCaption:
        "Left: C1 −OH orientation distinguishes α-glucose (helical starch/glycogen) from β-glucose (straight cellulose microfibrils). Right: Peptide bond formation links −COOH and −NH₂ via condensation, eliminating H₂O.",
      workedExamples: [
        {
          title: "Condensation Stoichiometry & Polymer Formula",
          problem:
            "Human insulin consists of two polypeptide chains: Chain A (21 amino acids) and Chain B (30 amino acids), linked together by disulfide bridges. How many **peptide bonds** are present in mature insulin, and how many **water molecules** were released when those peptide bonds formed?",
          steps: [
            "Each separate linear polypeptide chain of `n` amino acids contains `n − 1` peptide bonds.",
            "Chain A has {{21 - 1 = 20}} peptide bonds; Chain B has {{30 - 1 = 29}} peptide bonds.",
            "Disulfide bridges (−S−S−) are tertiary/quaternary links between cysteine R-groups, not peptide bonds.",
            "Total peptide bonds = {{20 + 29 = 49}}, so exactly **49 water molecules** were released during condensation of the two chains.",
          ],
          answer: "49 peptide bonds and 49 water molecules",
          yourTurn: {
            question:
              "An unbranched amylose molecule is synthesized by condensing 85 α-glucose monomers. How many water molecules are released? Give an integer.",
            answer: { type: "number", value: 84 },
            solution:
              "A single linear chain of `n` monomers requires `n − 1` condensation reactions, so {{85 - 1 = 84}} water molecules are released.",
          },
        },
        {
          title: "Energy Density & Body Mass Index (BMI) Calculation",
          problem:
            "A migrating bird stores 12.0 g of lipid (energy density 38 kJ g⁻¹). What mass of carbohydrate (17 kJ g⁻¹) would be required to store the same amount of chemical energy? Give your answer to 3 significant figures.",
          steps: [
            "Calculate total energy stored in lipid: {{12.0 * 38 = 456}} kJ.",
            "Divide by carbohydrate energy density: {{456 / 17 = 26.8235}} g.",
            "Round to 3 significant figures: **26.8 g** (plus carbohydrates attract water of hydration, making glycogen ~6× heavier in vivo than dry lipid for the same energy!).",
          ],
          answer: "26.8 g of carbohydrate",
          yourTurn: {
            question:
              "Calculate the Body Mass Index (BMI = mass / height², in kg m⁻²) of an adult with mass 68.6 kg and height 1.75 m. Give your answer to 1 decimal place.",
            answer: { type: "number", value: 22.4, tolerance: 0.05 },
            solution:
              "Square the height first: {{1.75^2 = 3.0625}} m². Then divide mass by height squared: {{68.6 / 3.0625 = 22.4}} kg m⁻².",
          },
        },
      ],
      keyPoints: [
        "Condensation joins monomers and releases H₂O (glycosidic in carbs, ester in lipids, peptide in proteins); hydrolysis adds H₂O to break those covalent bonds.",
        "Starch (amylose/amylopectin) and glycogen use α-glucose for compact, osmotically inactive energy storage; cellulose uses β-glucose (alternating 180° flips) for high-tensile straight microfibrils.",
        "Triglycerides (1 glycerol + 3 fatty acids, 3 ester bonds) store ~2.2× more energy per gram than carbohydrates and are stored anhydrously.",
        "Denaturation alters 3D tertiary/quaternary structure via heat or pH without breaking covalent peptide bonds.",
        "[HL] Secondary structure relies on backbone H-bonds (α-helix, β-pleated sheet); tertiary structure relies on R-group interactions (H-bonds, ionic, disulfide bridges, hydrophobic clustering).",
      ],
      whyItWorks:
        "Water molecules form a hydrogen-bonded network that energetically excludes non-polar groups (**the hydrophobic effect**). That single thermodynamic push drives amphipathic phospholipids into bilayers, packs non-polar amino-acid R-groups into the core of water-soluble globular proteins, and lets non-polar triglycerides sit inside adipocytes as pure anhydrous droplets without altering cellular osmolarity.",
      strategies: [
        "When counting water molecules or bonds in condensation, always check the **number of separate chains**: for `c` linear chains containing `n` total monomers, bonds = `n − c`.",
        "Distinguish starch vs glycogen vs cellulose in IB comparison tables by naming **monomer (α vs β)**, **bond type (1,4 vs 1,6)**, **branching**, and **function**.",
        "[HL] To tell secondary from tertiary stabilization, ask: are the bonds between the **repeating peptide backbone** (2°) or between **variable R-groups** (3°)?",
      ],
      thinkDeeper:
        "Why does substituting a single polar glutamate (Glu) for non-polar valine (Val) on the outer surface of haemoglobin's β-chain (sickle-cell mutation) cause haemoglobin tetramers to polymerize into rigid fibres under low oxygen?",
    },

    // =========================================================================
    // SECTION 2: B2.1 Fluid Mosaic Membranes & Transport Mechanisms
    // =========================================================================
    {
      id: "membranes-transport",
      heading: "B2.1 Fluid Mosaic Membranes & Transport Mechanisms",
      level: "SL",
      discovery: {
        problem:
          "Phospholipid bilayers are impermeable to polar glucose molecules and charged Na⁺ ions, yet red blood cells absorb glucose rapidly without spending ATP and axons actively maintain a 10× higher Na⁺ concentration outside than inside. How can one lipid barrier be simultaneously watertight to ions yet selectively permeable to specific nutrients?",
        idea:
          "The hydrophobic fatty-acid core acts as the default barrier, while **integral transmembrane proteins** span the bilayer with hydrophobic outer helices and hydrophilic inner pores or binding pockets. Channel and carrier proteins enable passive facilitated diffusion down gradients, whereas ATP-driven protein pumps change conformation to move solutes uphill against their gradient.",
      },
      body:
        "### The Fluid Mosaic Model (B2.1)\n\n" +
        "Biological membranes follow the **Singer–Nicolson fluid mosaic model**: phospholipids form a flexible, two-dimensional liquid bilayer (*fluid*) studded with diverse proteins and glycoproteins (*mosaic*).\n\n" +
        "- **Phospholipids:** amphipathic molecules oriented with hydrophilic phosphate heads facing the extracellular fluid and cytoplasm, and hydrophobic fatty-acid tails tucked inside the core.\n" +
        "- **Integral proteins:** amphipathic proteins embedded in or spanning the bilayer (transmembrane channels, carriers, pumps, receptors); non-polar R-groups anchor them among fatty-acid tails.\n" +
        "- **Peripheral proteins:** loosely bound to the hydrophilic surface of the bilayer or to integral proteins (cytoskeletal anchors, surface enzymes).\n" +
        "- **Glycoproteins & glycolipids:** carbohydrate-tagged molecules on the exterior face enabling cell recognition, immune identification, and hormone reception.\n\n" +
        "### Core Membrane Transport Mechanisms (SL)\n\n" +
        "| Mechanism | Gradient direction | Membrane protein? | ATP required? | Typical examples |\n" +
        "|---|---|---|---|---|\n" +
        "| **Simple diffusion** | High → Low (down) | No (through lipid core) | No (passive) | O₂, CO₂, N₂, hydrophobic steroids |\n" +
        "| **Facilitated diffusion** | High → Low (down) | Yes (channel or carrier) | No (passive) | Glucose (GLUT), polar solutes, ions (K⁺, Cl⁻) |\n" +
        "| **Osmosis** | Higher → Lower water potential | Accelerated by **aquaporins** | No (passive) | Water across kidney collecting duct & RBCs |\n" +
        "| **Active transport** | Low → High (against) | Yes (protein pump) | **Yes (ATP)** | Mineral uptake in roots, Na⁺/K⁺ pump |\n" +
        "| **Endo- / Exocytosis** | Bulk vesicle transport | Membrane fusion machinery | **Yes (ATP)** | Phagocytosis, neurotransmitter / insulin secretion |\n\n" +
        "Membrane **fluidity** allows the bilayer to bend, pinch off inward (**endocytosis**), and fuse outward (**exocytosis**) without rupturing.\n\n" +
        "### [HL] Membrane Fluidity, Cholesterol, Gated Channels, Pumps & CAMs\n\n" +
        "- **Fatty-acid composition & temperature:** **Unsaturated fatty acids** (with cis-C=C kinks) prevent tight hydrophobic packing and **increase fluidity** (cold-adapted fish and plants increase unsaturated tails so membranes stay fluid at low temperatures). **Saturated fatty acids** pack tightly and **decrease fluidity** (beneficial at high temperatures).\n" +
        "- **Cholesterol as a fluidity buffer (in animal membranes):** amphipathic cholesterol sits with its −OH group beside phospholipid heads and its rigid steroid rings among tails. At **high temperatures**, it restricts excessive phospholipid movement (reduces fluidity/leakiness); at **low temperatures**, it disrupts regular packing and prevents crystallization (maintains fluidity).\n" +
        "- **Gated ion channels:** open or close reversibly in response to a stimulus — **voltage-gated** Na⁺ and K⁺ channels open during neuronal action potentials; **ligand-gated** channels (e.g. nicotinic acetylcholine receptors) open when a specific neurotransmitter binds.\n" +
        "- **Sodium–potassium pump (Na⁺/K⁺-ATPase):** a primary active transport antiporter that hydrolyses **1 ATP** to pump **3 Na⁺ ions out** of the cell and **2 K⁺ ions into** the cell per cycle, both against their concentration gradients. Because 3 positive charges leave for every 2 entering, the pump is **electrogenic** and helps maintain the negative resting potential in neurons.\n" +
        "- **Sodium–glucose cotransporter (SGLT1):** an example of **indirect (secondary) active transport** in intestinal epithelial and kidney proximal tubule cells. The Na⁺/K⁺ pump on the basolateral membrane keeps intracellular [Na⁺] low; Na⁺ then flows down its steep electrochemical gradient through apical SGLT1, providing the free energy to pull **glucose uphill against its concentration gradient** into the cell.\n" +
        "- **Cell Adhesion Molecules (CAMs):** transmembrane glycoproteins (such as cadherins and integrins) that bind cells to neighbouring cells or the extracellular matrix, forming stable tissues and preventing uncontrolled cell detachment (loss of CAMs promotes cancer metastasis).",
      diagram:
        '<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fluid mosaic phospholipid bilayer showing unsaturated kinked tails, cholesterol, aquaporin channel, and sodium potassium ATPase pump">' +
        '<rect x="0" y="0" width="640" height="280" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<rect x="12" y="12" width="616" height="72" rx="8" fill="#e0f2fe"/>' +
        '<text x="26" y="32" font-size="11.5" font-weight="700" fill="#0369a1">Extracellular Fluid (High Na⁺, Low K⁺)</text>' +
        '<rect x="12" y="196" width="616" height="72" rx="8" fill="#fef9c3"/>' +
        '<text x="26" y="256" font-size="11.5" font-weight="700" fill="#854d0e">Cytoplasm (Low Na⁺, High K⁺)</text>' +
        // Hydrophobic core band
        '<rect x="12" y="84" width="616" height="112" fill="#fffbeb" stroke="#fcd34d" stroke-width="1"/>' +
        // Left phospholipids (saturated & unsaturated kinked + cholesterol)
        '<g stroke="#b45309" stroke-width="1.8" fill="none">' +
        '<circle cx="42" cy="96" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M38,106 L38,136 M46,106 L46,120 L52,135"/>' +
        '<circle cx="70" cy="96" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M66,106 L66,136 M74,106 L74,136"/>' +
        '<circle cx="112" cy="96" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M108,106 L108,121 L101,136 M116,106 L116,136"/>' +
        '<circle cx="140" cy="96" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M136,106 L136,136 M144,106 L144,136"/>' +
        // Bottom leaflet left
        '<circle cx="42" cy="184" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M38,174 L38,144 M46,174 L46,158 L52,144"/>' +
        '<circle cx="70" cy="184" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M66,174 L66,144 M74,174 L74,144"/>' +
        '<circle cx="112" cy="184" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M108,174 L108,144 M116,174 L116,158 L122,144"/>' +
        '<circle cx="140" cy="184" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M136,174 L136,144 M144,174 L144,144"/>' +
        '</g>' +
        // Cholesterol wedge
        '<rect x="86" y="102" width="12" height="34" rx="4" fill="#f59e0b" stroke="#92400e" stroke-width="1.4"/>' +
        '<text x="92" y="152" text-anchor="middle" font-size="9.5" font-weight="700" fill="#92400e">Cholesterol</text>' +
        '<text x="42" y="75" text-anchor="middle" font-size="9.5" fill="#0369a1">cis-kink</text>' +
        // Glycoprotein chain
        '<path d="M140,86 L140,68 L152,58 L140,48" fill="none" stroke="#16a34a" stroke-width="2"/>' +
        '<circle cx="140" cy="68" r="4" fill="#22c55e"/><circle cx="152" cy="58" r="4" fill="#22c55e"/><circle cx="140" cy="48" r="4" fill="#22c55e"/>' +
        '<text x="164" y="54" font-size="9.5" font-weight="700" fill="#15803d">Glycolipid</text>' +
        // Integral Channel / Aquaporin
        '<rect x="178" y="74" width="24" height="132" rx="10" fill="#6366f1" stroke="#4338ca" stroke-width="1.8"/>' +
        '<rect x="218" y="74" width="24" height="132" rx="10" fill="#6366f1" stroke="#4338ca" stroke-width="1.8"/>' +
        '<rect x="202" y="76" width="16" height="128" fill="#eef2ff"/>' +
        '<line x1="210" y1="54" x2="210" y2="218" stroke="#4338ca" stroke-width="2"/>' +
        '<polygon points="205,212 215,212 210,222" fill="#4338ca"/>' +
        '<text x="210" y="47" text-anchor="middle" font-size="10" font-weight="700" fill="#3730a3">Facilitated Channel</text>' +
        '<text x="210" y="236" text-anchor="middle" font-size="9.5" fill="#3730a3">Passive (down gradient)</text>' +
        // Middle phospholipids
        '<g stroke="#b45309" stroke-width="1.8" fill="none">' +
        '<circle cx="272" cy="96" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M268,106 L268,136 M276,106 L276,136"/>' +
        '<circle cx="300" cy="96" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M296,106 L296,120 L302,135 M304,106 L304,136"/>' +
        '<circle cx="328" cy="96" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M324,106 L324,136 M332,106 L332,136"/>' +
        '<circle cx="272" cy="184" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M268,174 L268,144 M276,174 L276,144"/>' +
        '<circle cx="300" cy="184" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M296,174 L296,144 M304,174 L304,158 L310,144"/>' +
        '<circle cx="328" cy="184" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M324,174 L324,144 M332,174 L332,144"/>' +
        '</g>' +
        // Simple diffusion arrow (O2/CO2)
        '<line x1="300" y1="48" x2="300" y2="216" stroke="#0f766e" stroke-width="2" stroke-dasharray="4 3"/>' +
        '<polygon points="295,210 305,210 300,220" fill="#0f766e"/>' +
        '<text x="300" y="42" text-anchor="middle" font-size="10" font-weight="700" fill="#0f766e">O₂ / CO₂</text>' +
        '<text x="300" y="236" text-anchor="middle" font-size="9.5" fill="#0f766e">Simple diffusion</text>' +
        // Na+/K+ ATPase Pump [HL]
        '<rect x="372" y="70" width="116" height="140" rx="18" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>' +
        '<text x="430" y="136" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">Na⁺/K⁺-ATPase</text>' +
        '<text x="430" y="151" text-anchor="middle" font-size="9.5" font-weight="700" fill="#991b1b">Active Pump [HL]</text>' +
        // 3 Na+ out arrow
        '<line x1="402" y1="214" x2="402" y2="54" stroke="#dc2626" stroke-width="2.4"/>' +
        '<polygon points="396,60 408,60 402,48" fill="#dc2626"/>' +
        '<text x="402" y="42" text-anchor="middle" font-size="10.5" font-weight="700" fill="#dc2626">3 Na⁺ OUT</text>' +
        // 2 K+ in arrow
        '<line x1="458" y1="54" x2="458" y2="214" stroke="#2563eb" stroke-width="2.4"/>' +
        '<polygon points="452,208 464,208 458,220" fill="#2563eb"/>' +
        '<text x="458" y="236" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d4ed8">2 K⁺ IN</text>' +
        // ATP hydrolysis pill
        '<rect x="364" y="242" width="132" height="20" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.2"/>' +
        '<text x="430" y="256" text-anchor="middle" font-size="9.5" font-weight="700" fill="#92400e">ATP → ADP + Pᵢ</text>' +
        // Right phospholipids + peripheral protein
        '<g stroke="#b45309" stroke-width="1.8" fill="none">' +
        '<circle cx="520" cy="96" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M516,106 L516,136 M524,106 L524,136"/>' +
        '<circle cx="548" cy="96" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M544,106 L544,120 L550,135 M552,106 L552,136"/>' +
        '<circle cx="576" cy="96" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M572,106 L572,136 M580,106 L580,136"/>' +
        '<circle cx="604" cy="96" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M600,106 L600,136 M608,106 L608,136"/>' +
        '<circle cx="520" cy="184" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M516,174 L516,144 M524,174 L524,144"/>' +
        '<circle cx="548" cy="184" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M544,174 L544,144 M552,174 L552,144"/>' +
        '<circle cx="576" cy="184" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M572,174 L572,144 M580,174 L580,144"/>' +
        '<circle cx="604" cy="184" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>' +
        '<path d="M600,174 L600,144 M608,174 L608,144"/>' +
        '</g>' +
        '<ellipse cx="562" cy="212" rx="44" ry="15" fill="#d8b4fe" stroke="#7e22ce" stroke-width="1.5"/>' +
        '<text x="562" y="216" text-anchor="middle" font-size="9.5" font-weight="700" fill="#581c87">Peripheral protein</text>' +
        '</svg>',
      diagramCaption:
        "Fluid mosaic bilayer showing cis-unsaturated kinks and cholesterol buffering fluidity, alongside simple diffusion (O₂/CO₂), passive facilitated channel transport, and the HL electrogenic Na⁺/K⁺-ATPase pump (3 Na⁺ out : 2 K⁺ in per ATP).",
      workedExamples: [
        {
          title: "Diagnosing Membrane Transport from Experimental Data",
          problem:
            "Isolated epithelial cells are placed in a solution containing 2.0 mmol dm⁻³ of Solute X while intracellular [Solute X] is 14.0 mmol dm⁻³. Net uptake of X continues rapidly until cyanide (an inhibitor of aerobic ATP synthesis) is added, whereupon uptake drops to zero. Deduce the transport mechanism.",
          steps: [
            "Compare concentrations: [X] is lower outside (2.0) than inside (14.0), so uptake moves **against** the concentration gradient.",
            "Adding a metabolic poison (cyanide) halts ATP production and stops uptake completely, confirming direct or indirect **ATP dependence**.",
            "Passive processes (simple diffusion, facilitated diffusion, osmosis) cannot move solutes uphill and do not require ATP.",
            "Therefore Solute X is transported by **active transport** (via a specific membrane protein pump).",
          ],
          answer: "Active transport",
          yourTurn: {
            question:
              "Name the passive process by which water moves rapidly down its water potential gradient across a plasma membrane via aquaporins.",
            answer: { type: "text", accept: ["osmosis", "osmotic transport"] },
            solution:
              "**Osmosis** is the passive net diffusion of water across a selectively permeable membrane, greatly accelerated by aquaporin water channels.",
          },
        },
        {
          title: "[HL] Na⁺/K⁺-ATPase Stoichiometry & Net Charge Export",
          problem:
            "During repolarization recovery, a segment of axon membrane hydrolyses 40 molecules of ATP exclusively via Na⁺/K⁺-ATPase pumps. Calculate (a) the number of Na⁺ ions pumped out, (b) the number of K⁺ ions pumped in, and (c) the net number of positive elementary charges exported.",
          steps: [
            "Recall the fixed stoichiometry per cycle: **1 ATP → 3 Na⁺ out + 2 K⁺ in**.",
            "(a) Na⁺ exported = {{40 * 3 = 120}} ions.",
            "(b) K⁺ imported = {{40 * 2 = 80}} ions.",
            "(c) Net positive charges exported = {{120 - 80 = 40}} (i.e. +1 net charge exported per ATP, helping keep the inside of the axon negative).",
          ],
          answer: "120 Na⁺ out, 80 K⁺ in, net +40 charges exported",
          yourTurn: {
            question:
              "How many Na⁺ ions are exported across an axon membrane when Na⁺/K⁺-ATPase hydrolyses 15 molecules of ATP? Give an integer.",
            answer: { type: "number", value: 45 },
            solution:
              "Each ATP hydrolysed exports 3 Na⁺ ions, so {{15 * 3 = 45}} Na⁺ ions are pumped out.",
          },
        },
      ],
      keyPoints: [
        "Phospholipids are amphipathic and self-assemble into a selectively permeable bilayer permeable to small non-polar molecules (O₂, CO₂) but impermeable to ions and large polar solutes.",
        "Facilitated diffusion uses specific channel or carrier proteins, is passive (no ATP), moves down a concentration gradient, and shows saturation at high solute concentrations.",
        "[HL] Unsaturated cis fatty-acid tails increase membrane fluidity; saturated tails decrease it; cholesterol buffers fluidity at both high and low temperatures.",
        "[HL] The Na⁺/K⁺ pump exports 3 Na⁺ and imports 2 K⁺ per ATP hydrolysed, generating the inward Na⁺ gradient that drives secondary active SGLT1 sodium–glucose cotransport.",
        "[HL] Cell adhesion molecules (CAMs) anchor cells together to form coherent tissues.",
      ],
      whyItWorks:
        "A membrane must live in a narrow **Goldilocks fluidity window**: too solid and carrier proteins freeze and vesicles cannot fuse; too fluid and ions leak uncontrollably across the bilayer. Tuning cis-unsaturated tail percentages and wedging rigid cholesterol rings among the tails stabilizes viscosity across fluctuating temperatures.",
      strategies: [
        "When classifying transport from a graph: a **linear** rate-vs-concentration line = simple diffusion; a **hyperbolic plateau (V_max)** without ATP sensitivity = facilitated diffusion; movement **against gradient** or blocked by respiratory inhibitors = active transport.",
        "[HL] Never say cholesterol simply 'increases' or 'decreases' fluidity — IB examiners award full marks only when you state its **dual temperature-dependent buffering role**.",
      ],
      thinkDeeper:
        "Oral rehydration therapy (ORT) saves millions of lives from cholera dehydration by giving patients a solution of **both glucose and NaCl** rather than pure water. How does the apical SGLT1 cotransporter explain why sodium and glucose together accelerate water absorption across the intestinal wall?",
    },

    // =========================================================================
    // SECTION 3: B2.2 Organelles, Compartmentalization & Ultrastructure
    // =========================================================================
    {
      id: "organelles-compartmentalization",
      heading: "B2.2 Organelles, Compartmentalization & Ultrastructure",
      level: "SL",
      discovery: {
        problem:
          "Lysosomes contain digestive enzymes (acid hydrolases) that destroy proteins, lipids, and nucleic acids at pH 5, while the surrounding cytoplasm sits at pH 7.2 and is packed with vital enzymes. What would happen if eukaryotic cells lacked internal membranes — and why is a single leaking lysosome rarely fatal to the cell?",
        idea:
          "Without internal membranes, hydrolytic enzymes would digest the cell itself and metabolic pathways requiring conflicting pH or ion gradients (like oxidative phosphorylation in mitochondria) could never operate. Because lysosomes are membrane-bound, their acidic interior stays isolated; even if one ruptures, its enzymes are poorly active at neutral cytosolic pH 7.2.",
      },
      body:
        "### Organelle Structure–Function Adaptations (B2.2 SL)\n\n" +
        "Eukaryotic organelles are specialized membrane-bound (or macromolecular) structures whose ultrastructure directly boosts biochemical efficiency:\n\n" +
        "- **Nucleus:** enclosed by a **double nuclear membrane** perforated by **nuclear pores** that regulate entry of transcription factors/nucleotides and export of mRNA and ribosomal subunits. During mitosis, the nuclear envelope disassembles into vesicles so spindle fibres can attach to chromosomes, then reassembles around each daughter nucleus.\n" +
        "- **Mitochondrion:** bounded by a double membrane. The inner membrane folds into **cristae**, massively expanding surface area for electron transport chains and ATP synthase. The **intermembrane space** has a tiny volume so pumping H⁺ ions rapidly builds a steep proton gradient for chemiosmosis. The **matrix** concentrates Krebs cycle enzymes, circular DNA, and 70S ribosomes.\n" +
        "- **Chloroplast:** double membrane enclosing a fluid **stroma** (rich in RuBisCO and Calvin-cycle enzymes, circular DNA, 70S ribosomes, starch grains) and flattened **thylakoid discs** stacked into **grana**. Thylakoid membranes maximize light-harvesting area for photosystems and ATP synthase; their tiny **thylakoid lumen** lets H⁺ accumulate rapidly.\n" +
        "- **Free vs Bound Ribosomes (80S):** **free cytoplasmic ribosomes** synthesize proteins that function within the cytosol (e.g. glycolytic enzymes); **rough ER (rER)-bound ribosomes** synthesize proteins destined for secretion (e.g. insulin, digestive enzymes), insertion into membranes, or lysosomes.\n" +
        "- **Smooth ER (sER):** lacks ribosomes; synthesizes phospholipids and steroid hormones, detoxifies drugs in liver hepatocytes, and stores Ca²⁺ ions (sarcoplasmic reticulum in muscle).\n" +
        "- **Golgi apparatus:** curved stack of flattened membrane sacs (**cisternae**). Receives transport vesicles from the rER at its *cis* face, chemically modifies proteins (e.g. glycosylation, cleavage), sorts and packages them at the *trans* face into **secretory vesicles** (for exocytosis) or **lysosomes**.\n" +
        "- **Lysosomes:** single-membrane vesicles filled with hydrolytic enzymes (proteases, lipases, nucleases) at acidic pH ~5 that digest phagocytosed pathogens and recycle worn-out organelles (autophagy).\n\n" +
        "### [HL] Advantages of Compartmentalization, Separated Gene Expression & Clathrin Vesicles\n\n" +
        "- **Advantages of compartmentalization:**\n" +
        "  1. **Concentrated enzymes & substrates** in small volumes accelerate collision frequency and reaction rates.\n" +
        "  2. **Isolated microenvironments** maintain distinct optimal pH (lysosome pH 5 vs cytosol pH 7.2) and ion gradients (H⁺ gradients in mitochondria/chloroplasts) without interference.\n" +
        "  3. **Sequestration of toxic or lytic substances** protects the rest of the cell from self-digestion.\n" +
        "  4. **Extensive internal membrane surfaces** anchor ordered multi-enzyme complexes (cristae, thylakoids, rER).\n" +
        "- **Separation of transcription and translation in eukaryotes:** In prokaryotes (no nucleus), ribosomes translate an mRNA strand *while* RNA polymerase is still transcribing it (coupled). In eukaryotes, the **nuclear envelope** separates **transcription** (inside the nucleus) from **translation** (in the cytoplasm). This crucial delay enables **post-transcriptional modification** of pre-mRNA — **intron removal and alternative exon splicing**, 5' capping, and poly-A tail addition — allowing a single gene to generate multiple protein isoforms before reaching an 80S ribosome.\n" +
        "- **Clathrin-coated vesicles:** During receptor-mediated endocytosis (e.g. uptake of LDL cholesterol), membrane receptors bind specific cargo ligands. On the cytosolic face, **clathrin** triskelion proteins assemble into a geodesic basket-like lattice that pulls the plasma membrane inward into a **coated pit** until it pinches off as a **clathrin-coated vesicle**. Once inside, the clathrin coat disassembles and recycles back to the membrane so the bare vesicle can fuse with an endosome.",
      diagram:
        '<svg viewBox="0 0 640 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Eukaryotic cell compartmentalization map showing secretory pathway from nucleus to rough ER, Golgi, vesicle, lysosome, plus mitochondrion and chloroplast insets">' +
        '<rect x="0" y="0" width="640" height="285" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="23" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Eukaryotic Compartmentalization &amp; Organelle Adaptations</text>' +
        // Left panel: Secretory pathway
        '<rect x="14" y="34" width="388" height="238" rx="12" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>' +
        '<text x="208" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">Endomembrane Secretory Pathway</text>' +
        // Nucleus
        '<circle cx="78" cy="128" r="46" fill="#ede9fe" stroke="#6d28d9" stroke-width="2.5" stroke-dasharray="14 4"/>' +
        '<circle cx="78" cy="128" r="40" fill="none" stroke="#6d28d9" stroke-width="1.2" stroke-dasharray="12 4"/>' +
        '<circle cx="74" cy="126" r="14" fill="#c4b5fd"/>' +
        '<text x="78" y="130" text-anchor="middle" font-size="10" font-weight="700" fill="#4c1d95">Nucleus</text>' +
        '<text x="78" y="188" text-anchor="middle" font-size="9" fill="#4c1d95">Double membrane + pores</text>' +
        '<text x="78" y="200" text-anchor="middle" font-size="9" fill="#6d28d9">mRNA splicing [HL]</text>' +
        // Rough ER
        '<path d="M134,88 Q154,88 154,106 Q154,124 134,124 Q156,124 156,142 Q156,160 134,160" fill="none" stroke="#0284c7" stroke-width="6" stroke-linecap="round"/>' +
        '<circle cx="145" cy="84" r="2.2" fill="#0f172a"/><circle cx="158" cy="100" r="2.2" fill="#0f172a"/><circle cx="158" cy="116" r="2.2" fill="#0f172a"/>' +
        '<circle cx="159" cy="136" r="2.2" fill="#0f172a"/><circle cx="159" cy="154" r="2.2" fill="#0f172a"/>' +
        '<text x="152" y="74" text-anchor="middle" font-size="10" font-weight="700" fill="#0369a1">Rough ER</text>' +
        '<text x="152" y="176" text-anchor="middle" font-size="8.8" fill="#475569">80S ribosomes</text>' +
        // Transport vesicle arrow
        '<line x1="168" y1="126" x2="206" y2="126" stroke="#334155" stroke-width="1.6"/>' +
        '<polygon points="201,122 209,126 201,130" fill="#334155"/>' +
        '<circle cx="187" cy="113" r="8" fill="#bae6fd" stroke="#0284c7" stroke-width="1.3"/>' +
        // Golgi
        '<path d="M222,92 Q238,126 222,160" fill="none" stroke="#d97706" stroke-width="6" stroke-linecap="round"/>' +
        '<path d="M236,88 Q254,126 236,164" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>' +
        '<path d="M250,92 Q266,126 250,160" fill="none" stroke="#d97706" stroke-width="6" stroke-linecap="round"/>' +
        '<text x="242" y="74" text-anchor="middle" font-size="10" font-weight="700" fill="#b45309">Golgi Apparatus</text>' +
        '<text x="242" y="178" text-anchor="middle" font-size="8.8" fill="#475569">Modify &amp; package</text>' +
        // Secretory vesicle to plasma membrane
        '<line x1="268" y1="115" x2="342" y2="104" stroke="#334155" stroke-width="1.6"/>' +
        '<polygon points="336,100 345,103 338,108" fill="#334155"/>' +
        '<circle cx="308" cy="108" r="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>' +
        '<text x="308" y="92" text-anchor="middle" font-size="9" font-weight="700" fill="#92400e">Exocytosis</text>' +
        // Plasma membrane right edge
        '<line x1="358" y1="62" x2="358" y2="256" stroke="#0f172a" stroke-width="3" stroke-dasharray="6 3"/>' +
        '<text x="378" y="152" text-anchor="middle" font-size="9" font-weight="700" fill="#334155" transform="rotate(-90 378 152)">Plasma Membrane</text>' +
        // Lysosome branch
        '<line x1="264" y1="150" x2="296" y2="206" stroke="#dc2626" stroke-width="1.6"/>' +
        '<circle cx="306" cy="222" r="20" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>' +
        '<text x="306" y="220" text-anchor="middle" font-size="9.5" font-weight="700" fill="#991b1b">Lysosome</text>' +
        '<text x="306" y="232" text-anchor="middle" font-size="8.5" fill="#991b1b">pH ~5</text>' +
        // Clathrin pit [HL]
        '<path d="M358,200 C340,204 340,228 358,232" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2" stroke-dasharray="3 2"/>' +
        '<text x="348" y="252" text-anchor="middle" font-size="8.8" font-weight="700" fill="#4338ca">Clathrin pit [HL]</text>' +
        // Cytosol pH label
        '<rect x="26" y="224" width="208" height="36" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/>' +
        '<text x="130" y="240" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0f172a">Cytosol pH ~7.2 · Free 80S ribosomes</text>' +
        '<text x="130" y="253" text-anchor="middle" font-size="9" fill="#475569">Protects cytosol from acidic hydrolases</text>' +
        // Right top: Mitochondrion inset
        '<rect x="412" y="34" width="214" height="114" rx="12" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>' +
        '<text x="519" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#9a3412">Mitochondrion (ATP)</text>' +
        '<ellipse cx="519" cy="96" rx="76" ry="32" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>' +
        '<path d="M456,96 Q470,74 480,96 Q490,116 502,94 Q514,72 526,96 Q538,116 550,94 Q562,74 576,96" fill="none" stroke="#9a3412" stroke-width="2.5"/>' +
        '<text x="519" y="140" text-anchor="middle" font-size="9" fill="#7c2d12">Cristae (high SA) · tiny intermembrane space</text>' +
        // Right bottom: Chloroplast inset
        '<rect x="412" y="158" width="214" height="114" rx="12" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>' +
        '<text x="519" y="176" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">Chloroplast (Photosynthesis)</text>' +
        '<ellipse cx="519" cy="218" rx="76" ry="30" fill="#a7f3d0" stroke="#047857" stroke-width="2"/>' +
        '<rect x="470" y="206" width="26" height="6" rx="2" fill="#047857"/><rect x="470" y="214" width="26" height="6" rx="2" fill="#047857"/><rect x="470" y="222" width="26" height="6" rx="2" fill="#047857"/>' +
        '<line x1="496" y1="217" x2="524" y2="217" stroke="#047857" stroke-width="2"/>' +
        '<rect x="524" y="204" width="26" height="6" rx="2" fill="#047857"/><rect x="524" y="212" width="26" height="6" rx="2" fill="#047857"/><rect x="524" y="220" width="26" height="6" rx="2" fill="#047857"/>' +
        '<text x="519" y="263" text-anchor="middle" font-size="9" fill="#065f46">Grana/thylakoids (light) · Stroma (Calvin)</text>' +
        '</svg>',
      diagramCaption:
        "Left: Secretory pathway linking nuclear envelope, rER (80S bound ribosomes), Golgi cisternae, exocytic vesicles, lysosomes (pH 5), and HL clathrin-coated pits. Right: Double-membrane bioenergetic organelles adapted for proton-gradient generation.",
      workedExamples: [
        {
          title: "Deducing Cell Function from Organelle Abundance",
          problem:
            "Electron micrographs of a mammalian exocrine pancreatic acinar cell reveal unusually dense stacks of rough ER, an enlarged Golgi apparatus, numerous secretory vesicles near the apical membrane, and abundant mitochondria. Explain how these four organelles cooperate to perform the cell's specialized role.",
          steps: [
            "Pancreatic acinar cells synthesize and secrete large quantities of digestive **enzyme proteins** (e.g. amylase, trypsinogen, lipase).",
            "**Rough ER (with 80S ribosomes):** translates and folds polypeptide chains destined for export into its lumen.",
            "**Golgi apparatus:** receives vesicles from the rER, modifies/glycosylates the enzymes, and packages them into **secretory vesicles**.",
            "**Secretory vesicles & mitochondria:** vesicles move to the apical plasma membrane and release enzymes by **exocytosis**, an active process fuelled by ATP from the abundant **mitochondria**.",
          ],
          answer: "Coordinated synthesis (rER), modification/packaging (Golgi), and ATP-driven exocytosis (mitochondria + vesicles) of digestive enzymes.",
          yourTurn: {
            question:
              "Name the double-membrane organelle whose inner membrane folds into cristae to maximize surface area for oxidative phosphorylation.",
            answer: { type: "text", accept: ["mitochondrion", "mitochondria"] },
            solution:
              "The **mitochondrion** has inner-membrane folds called cristae that house electron transport chain complexes and ATP synthase.",
          },
        },
        {
          title: "[HL] Quantitative Compartmentalization: Lysosomal H⁺ Gradient",
          problem:
            "A lysosome maintains an internal pH of 5.0 while the surrounding cytosol is pH 7.0. How many times greater is the hydrogen ion concentration [H⁺] inside the lysosome than in the cytosol, and how is this gradient maintained?",
          steps: [
            "Recall that pH is a base-10 logarithmic scale: every drop of 1 pH unit equals a 10-fold increase in [H⁺].",
            "Difference in pH: {{7.0 - 5.0 = 2.0}} pH units.",
            "Concentration factor: {{10^2 = 100}} times higher [H⁺] inside the lysosome.",
            "The gradient is maintained by **proton pumps (V-type H⁺-ATPases)** in the lysosomal membrane actively pumping H⁺ from cytosol into the lumen using ATP.",
          ],
          answer: "100 times greater [H⁺], maintained by active proton pumps (ATP)",
          yourTurn: {
            question:
              "Name the coat protein that polymerizes into a lattice on the cytosolic side of the plasma membrane to pinch off receptor-mediated endocytic vesicles.",
            answer: { type: "text", accept: ["clathrin", "clathrin protein", "clathrin triskelion"] },
            solution:
              "**Clathrin** forms a cage-like lattice around invaginating coated pits to bud off endocytic vesicles before uncoating inside the cell.",
          },
        },
      ],
      keyPoints: [
        "Double-membrane organelles are the **nucleus**, **mitochondria**, and **chloroplasts**; ER, Golgi, lysosomes, and vesicles have single membranes; ribosomes have **no membrane**.",
        "Mitochondrial cristae and chloroplast thylakoids both maximize surface area while trapping tiny internal spaces (intermembrane space / thylakoid lumen) for rapid H⁺ gradient buildup.",
        "Free 80S ribosomes make cytosolic proteins; rER-bound 80S ribosomes make secreted, membrane, or lysosomal proteins.",
        "[HL] Separating transcription (nucleus) from translation (cytoplasm) enables pre-mRNA splicing and post-transcriptional gene regulation before translation.",
        "[HL] Clathrin-coated vesicles mediate targeted endocytosis by forming a temporary curved protein coat that buds off from the plasma membrane.",
      ],
      whyItWorks:
        "Biochemical efficiency scales with collision rate and gradient steepness. Confining enzymes inside small compartments raises local substrate concentration dramatically, while shrinking the mitochondrial intermembrane space or thylakoid lumen means pumping only a small number of H⁺ ions creates a steep chemiosmotic potential.",
      strategies: [
        "When an IB question asks 'how structure adapts organelle X for function Y', pair **every named structural feature** (e.g. cristae, small intermembrane space, nuclear pores) with its **direct functional consequence**.",
        "Trace protein export strictly in order: **DNA (nucleus) → mRNA (nuclear pore) → rER ribosome → rER lumen → transport vesicle → Golgi (cis → trans) → secretory vesicle → exocytosis**.",
      ],
      thinkDeeper:
        "Why do mitochondria and chloroplasts contain **70S ribosomes and circular naked DNA** (just like bacteria), whereas the eukaryotic cytoplasm outside them contains **80S ribosomes**?",
    },

    // =========================================================================
    // SECTION 4: B2.3 Stem Cells, Surface-Area-to-Volume Ratio & Specialization
    // =========================================================================
    {
      id: "cell-specialization-sav",
      heading: "B2.3 Stem Cells, Surface-Area-to-Volume Ratio & Specialization",
      level: "SL",
      discovery: {
        problem:
          "Imagine a cubic cell growing from side length 1 μm to 10 μm — ten times wider. By what factor does its **surface area** (its membrane for taking in oxygen and removing CO₂) increase, and by what factor does its **volume** (its respiring cytoplasm demanding oxygen) increase? Why does this simple geometry forbid single-celled amoebae from growing to the size of a basketball?",
        idea:
          "Surface area scales as `L²` (increases by {{10^2 = 100}}×), whereas volume scales as `L³` (increases by {{10^3 = 1000}}×). Thus the **surface-area-to-volume (SA:V) ratio drops by 10×** (from 6 to 0.6 μm⁻¹) while the diffusion distance to the cell centre increases 10×. Past a critical size, membrane exchange cannot keep up with metabolic demand, forcing cells to divide or adopt specialized high-SA:V shapes.",
      },
      body:
        "### Surface-Area-to-Volume (SA:V) Ratio Limits on Cell Size (B2.3)\n\n" +
        "Metabolic rate (O₂ consumption, nutrient need, heat and CO₂ production) is proportional to **cell volume**, whereas exchange rate across the plasma membrane is proportional to **surface area**.\n\n" +
        "- For a **cube** of side length `L`: `SA = 6L²`, `V = L³`, so `SA:V = 6 / L`.\n" +
        "- For a **sphere** of radius `r`: `SA = 4πr²`, `V = (4/3)πr³`, so `SA:V = 3 / r`.\n\n" +
        "As `L` or `r` increases, **SA:V falls inversely** (`∝ 1/L`) and **internal diffusion distance increases**. Because passive diffusion is only fast over micrometre distances, cells remain microscopic or evolve structural adaptations to boost SA:V:\n\n" +
        "- **Flattening:** squamous cells and **Type I pneumocytes** become wafer-thin (~0.1–0.2 μm), minimizing diffusion distance.\n" +
        "- **Biconcave disc shape:** mammalian **erythrocytes (red blood cells)** dent inward on both faces (raising SA:V and shortening O₂ diffusion distance to haemoglobin) and eject their nucleus/mitochondria to maximize haemoglobin packing.\n" +
        "- **Membrane folding:** **microvilli** (brush border) on intestinal enterocytes and kidney proximal tubule cells multiply apical absorptive surface area without significantly adding volume.\n" +
        "- **Elongation & branching:** root hair cells, neurons, and phloem sieve tubes stay thin along one or two dimensions while extending far along another.\n\n" +
        "### Stem Cells, Potency & Niches (B2.3)\n\n" +
        "Multicellular organisms arise from a single fertilized egg (**zygote**) through cell division and **differentiation** — the selective expression of different subsets of the same genome. **Stem cells** remain undifferentiated and retain the ability to divide repeatedly (self-renewal) and differentiate along specialized pathways:\n\n" +
        "| Potency Level | Capabilities | Biological Source |\n" +
        "|---|---|---|\n" +
        "| **Totipotent** | Can form **every cell type** of the organism *plus* extra-embryonic tissues (placenta, umbilical cord) | Zygote and early embryo up to ~8-cell stage (morula) |\n" +
        "| **Pluripotent** | Can form **any body tissue cell type** (all three germ layers), but *not* a whole organism/placenta | Inner cell mass (embryonic stem cells) of blastocyst; induced pluripotent stem cells (iPSCs) |\n" +
        "| **Multipotent** | Restricted to differentiating into a **limited family of related cell types** | Adult stem-cell niches: **bone marrow** (haematopoietic stem cells → RBCs, WBCs, platelets) and **hair follicles** (hair shaft & epidermis repair) |\n\n" +
        "A **stem-cell niche** (such as red bone marrow or the hair follicle bulge) is a specialized tissue microenvironment providing chemical signals and physical anchorage that maintain stem cells in an undifferentiated, dividing reservoir until needed for growth or tissue repair.\n\n" +
        "### Specialized Cell Structure–Function Adaptations (B2.3)\n\n" +
        "- **Alveolar Pneumocytes:**\n" +
        "  - **Type I pneumocytes:** extremely thin (~0.15 μm), broad, flattened squamous cells covering ~95% of alveolar surface area to minimize gas diffusion distance for O₂ and CO₂.\n" +
        "  - **Type II pneumocytes:** rounded, cuboidal secretory cells rich in rER, Golgi, and **lamellar bodies** that secrete **pulmonary surfactant** (a phospholipid–protein film) by exocytosis, lowering alveolar surface tension to prevent alveoli from collapsing during exhalation; they can also divide and differentiate into Type I cells to repair lung injury.\n" +
        "- **Muscle Fibres:**\n" +
        "  - **Striated (skeletal) muscle fibres:** long, cylindrical, **multinucleated** syncytia formed by fusion of embryonic myoblasts, packed with parallel sarcomere-bearing **myofibrils**, abundant mitochondria, and sarcoplasmic reticulum for powerful voluntary contraction.\n" +
        "  - **Cardiac muscle cells:** shorter, **branched**, typically **uninucleate** cells connected end-to-end by **intercalated discs** (containing gap junctions and desmosomes) so electrical impulses spread rapidly and the heart contracts as a coordinated wave.\n" +
        "- **Gametes (Sperm & Egg):**\n" +
        "  - **Spermatozoa:** tiny, streamlined motile cells containing a condensed haploid nucleus, an **acrosome** (lysosome-like vesicle of hydrolytic enzymes to digest the egg coat), a **midpiece packed with mitochondria** for ATP, and a **flagellum** (microtubule axoneme) for swimming.\n" +
        "  - **Ova (egg cells):** large, non-motile cells rich in cytoplasm, lipid droplets, and nutrient yolk reserves to sustain early embryo cleavage; surrounded by the **zona pellucida** glycoprotein coat and lined with **cortical granules** that undergo exocytosis after fertilization to harden the zona pellucida and block polyspermy.",
      diagram:
        '<svg viewBox="0 0 640 275" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Surface area to volume ratio cube scaling from 1 to 3 micrometres alongside alveolar Type I and Type II pneumocytes">' +
        '<rect x="0" y="0" width="640" height="275" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="172" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Cube Scaling: SA:V = 6 / L</text>' +
        '<text x="488" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Alveolus: Type I vs Type II Pneumocytes</text>' +
        '<line x1="344" y1="16" x2="344" y2="260" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5 4"/>' +
        // 1x1x1 cube
        '<g transform="translate(26,118)">' +
        '<polygon points="10,20 34,20 34,44 10,44" fill="#bae6fd" stroke="#0284c7" stroke-width="1.6"/>' +
        '<polygon points="10,20 20,11 44,11 34,20" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.6"/>' +
        '<polygon points="34,20 44,11 44,35 34,44" fill="#7dd3fc" stroke="#0284c7" stroke-width="1.6"/>' +
        '<text x="26" y="64" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">L = 1 μm</text>' +
        '<text x="26" y="80" text-anchor="middle" font-size="9.5" fill="#475569">SA = 6 · V = 1</text>' +
        '<text x="26" y="96" text-anchor="middle" font-size="10.5" font-weight="700" fill="#059669">SA:V = 6.0</text>' +
        '</g>' +
        // 2x2x2 cube
        '<g transform="translate(106,94)">' +
        '<polygon points="8,24 56,24 56,72 8,72" fill="#fed7aa" stroke="#ea580c" stroke-width="1.6"/>' +
        '<polygon points="8,24 24,10 72,10 56,24" fill="#ffedd5" stroke="#ea580c" stroke-width="1.6"/>' +
        '<polygon points="56,24 72,10 72,58 56,72" fill="#fdba74" stroke="#ea580c" stroke-width="1.6"/>' +
        '<text x="38" y="88" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">L = 2 μm</text>' +
        '<text x="38" y="104" text-anchor="middle" font-size="9.5" fill="#475569">SA = 24 · V = 8</text>' +
        '<text x="38" y="120" text-anchor="middle" font-size="10.5" font-weight="700" fill="#d97706">SA:V = 3.0</text>' +
        '</g>' +
        // 3x3x3 cube
        '<g transform="translate(206,66)">' +
        '<polygon points="6,30 78,30 78,102 6,102" fill="#fecaca" stroke="#dc2626" stroke-width="1.6"/>' +
        '<polygon points="6,30 28,10 100,10 78,30" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>' +
        '<polygon points="78,30 100,10 100,82 78,102" fill="#fca5a5" stroke="#dc2626" stroke-width="1.6"/>' +
        '<text x="52" y="116" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">L = 3 μm</text>' +
        '<text x="52" y="132" text-anchor="middle" font-size="9.5" fill="#475569">SA = 54 · V = 27</text>' +
        '<text x="52" y="148" text-anchor="middle" font-size="10.5" font-weight="700" fill="#dc2626">SA:V = 2.0</text>' +
        '</g>' +
        '<rect x="20" y="228" width="306" height="34" rx="8" fill="#ffffff" stroke="#cbd5e1"/>' +
        '<text x="173" y="249" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">Doubling size halves SA:V → cells divide or flatten</text>' +
        // Right panel: Alveolus cross section
        '<circle cx="490" cy="144" r="76" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>' +
        '<circle cx="490" cy="144" r="70" fill="#f0f9ff" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>' +
        '<text x="490" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="#0369a1">Alveolar Air Space</text>' +
        '<text x="490" y="155" text-anchor="middle" font-size="9.5" fill="#0369a1">(surfactant film lining)</text>' +
        // Type I pneumocyte (thin flattened cell + capillary below)
        '<ellipse cx="490" cy="218" rx="46" ry="5" fill="#fde68a" stroke="#d97706" stroke-width="1.4"/>' +
        '<ellipse cx="490" cy="238" rx="44" ry="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>' +
        '<ellipse cx="480" cy="238" rx="10" ry="6" fill="#ef4444"/><ellipse cx="504" cy="238" rx="10" ry="6" fill="#ef4444"/>' +
        '<text x="490" y="264" text-anchor="middle" font-size="9.5" font-weight="700" fill="#991b1b">Capillary + Biconcave RBCs (O₂ ↔ CO₂)</text>' +
        '<line x1="420" y1="205" x2="450" y2="216" stroke="#b45309" stroke-width="1.4"/>' +
        '<text x="394" y="202" text-anchor="middle" font-size="9.5" font-weight="700" fill="#92400e">Type I (~0.15 μm)</text>' +
        // Type II pneumocyte (cuboidal secretory cell)
        '<rect x="536" y="76" width="38" height="34" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="2"/>' +
        '<circle cx="555" cy="91" r="7" fill="#6ee7b7" stroke="#047857" stroke-width="1"/>' +
        '<circle cx="545" cy="100" r="3" fill="#047857"/><circle cx="564" cy="100" r="3" fill="#047857"/>' +
        '<path d="M540,104 L526,118" stroke="#059669" stroke-width="1.6"/>' +
        '<polygon points="524,113 531,119 523,121" fill="#059669"/>' +
        '<text x="556" y="64" text-anchor="middle" font-size="9.5" font-weight="700" fill="#047857">Type II Pneumocyte</text>' +
        '<text x="588" y="122" text-anchor="middle" font-size="8.8" fill="#065f46">Secretes</text>' +
        '<text x="588" y="133" text-anchor="middle" font-size="8.8" fill="#065f46">surfactant</text>' +
        '</svg>',
      diagramCaption:
        "Left: Increasing cube side length from 1 to 3 μm cuts SA:V from 6.0 to 2.0 μm⁻¹. Right: Alveoli pair wafer-thin Type I pneumocytes (rapid gas exchange) with cuboidal Type II pneumocytes (surfactant secretion to prevent collapse).",
      workedExamples: [
        {
          title: "Comparing SA:V Ratios of a Bacterium vs a Eukaryotic Cell",
          problem:
            "Model a spherical coccus bacterium as a sphere of radius `r = 1.0 μm` and a spherical mammalian ovum as a sphere of radius `r = 50.0 μm`. Calculate the SA:V ratio (in μm⁻¹) of each cell and state how many times larger the bacterium's SA:V ratio is.",
          steps: [
            "For any sphere, {{SA / V = (4 pi r^2) / ((4/3) pi r^3) = 3 / r}} (notice that `π` cancels completely!).",
            "Bacterium (`r = 1.0 μm`): {{3 / 1.0 = 3.0}} μm⁻¹.",
            "Mammalian ovum (`r = 50.0 μm`): {{3 / 50.0 = 0.06}} μm⁻¹.",
            "Ratio comparison: {{3.0 / 0.06 = 50}} times larger SA:V in the bacterium (matching the 50× smaller radius).",
          ],
          answer: "Bacterium = 3.0 μm⁻¹, Ovum = 0.06 μm⁻¹ (50× larger in bacterium)",
          yourTurn: {
            question:
              "Calculate the surface-area-to-volume ratio (in μm⁻¹) of a cuboidal epithelial cell modelled as a cube of side length 12 μm. Give a decimal.",
            answer: { type: "number", value: 0.5, tolerance: 0.005 },
            solution:
              "For a cube of side `L`, {{SA / V = 6 / L = 6 / 12 = 0.5}} μm⁻¹.",
          },
        },
        {
          title: "Evaluating Stem-Cell Potency & Specialized Cell Adaptations",
          problem:
            "A premature infant born at 27 weeks' gestation develops Neonatal Respiratory Distress Syndrome (NRDS) in which alveoli collapse at the end of each breath. Identify which specialized alveolar cell type has not yet matured sufficiently and explain how its product prevents collapse.",
          steps: [
            "Identify the cell type: **Type II pneumocytes**.",
            "Identify the secretion: **pulmonary surfactant** (a mixture of amphipathic phospholipids and proteins released by exocytosis from lamellar bodies).",
            "Explain the physics: water lining the moist alveolar wall forms hydrogen bonds creating high **surface tension** that pulls alveolar walls inward.",
            "Surfactant monolayers disrupt hydrogen bonding between water molecules at the air–water interface, lowering surface tension so alveoli stay inflated and require less muscular work to open.",
          ],
          answer: "Type II pneumocytes; pulmonary surfactant lowers alveolar surface tension to prevent collapse.",
          yourTurn: {
            question:
              "Which type of alveolar epithelial cell secretes pulmonary surfactant to reduce surface tension?",
            answer: {
              type: "text",
              accept: [
                "type ii pneumocyte",
                "type 2 pneumocyte",
                "type ii pneumocytes",
                "type 2 pneumocytes",
                "type ii alveolar cell",
                "type 2 alveolar cell",
              ],
            },
            solution:
              "**Type II pneumocytes** are cuboidal secretory cells that synthesize and release pulmonary surfactant by exocytosis.",
          },
        },
      ],
      keyPoints: [
        "For cubes `SA:V = 6 / L` and for spheres `SA:V = 3 / r`; as cell size rises, volume (metabolic demand) outpaces surface area (exchange capacity).",
        "Cells overcome SA:V limits by staying small, flattening (Type I pneumocytes), adopting biconcave discs (RBCs), or folding membranes (microvilli).",
        "Potency hierarchy: **totipotent** (zygote/morula — whole organism + placenta) > **pluripotent** (embryonic ICM — any body cell) > **multipotent** (adult niches like bone marrow & hair follicle — limited lineages).",
        "Type I pneumocytes minimize diffusion distance; Type II pneumocytes secrete surfactant to cut surface tension and can regenerate Type I cells.",
        "Skeletal muscle fibres are multinucleated cylindrical syncytia; cardiac muscle cells are branched, uninucleate, and linked by intercalated discs for synchronized beating.",
      ],
      whyItWorks:
        "Diffusion time scales with the **square of distance** (`t ∝ d²`). Doubling a cell's radius not only halves its membrane surface area per unit volume, it also quadruples the time required for an oxygen molecule to diffuse to the cell's core — making large unspecialized spheres metabolically impossible.",
      strategies: [
        "Always check whether a question asks for **SA:V as a decimal/rate (`6/L`)** or **as a simplified ratio (`6 : 1`)**, and keep units consistent (`μm` vs `mm` vs `cm`) before substituting.",
        "Never confuse **Type I** (thin gas-exchange sheet, '1 = thin') with **Type II** (cuboidal surfactant-secreting cell, '2 = two jobs: surfactant + repair').",
      ],
      thinkDeeper:
        "If an embryonic zygote divides three times by cleavage without growing in overall volume (forming an 8-cell morula of the same total volume as the original egg), how does the **total surface area** and **SA:V ratio** of the embryo change?",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "How do α-D-glucose and β-D-glucose differ structurally, and what polymers does each form?",
        back: "On C1, α-glucose has −OH pointing **down** (forms helical starch & branched glycogen via α-1,4/α-1,6 bonds); β-glucose has −OH pointing **up** (alternating monomers flip 180° to form straight β-1,4 cellulose chains cross-linked by H-bonds).",
        level: "SL",
      },
      {
        front: "Compare amylose, amylopectin, and glycogen in structure and function.",
        back: "All are α-glucose energy stores (insoluble, osmotically inactive). **Amylose** is unbranched α-1,4 (plants); **amylopectin** has moderate α-1,6 branching (plants); **glycogen** is highly branched α-1,4/α-1,6 in animal liver/muscle for rapid glucose mobilization.",
        level: "SL",
      },
      {
        front: "Why are triglycerides superior to glycogen for long-term energy storage?",
        back: "Lipids release **~38 kJ g⁻¹** (vs ~17 kJ g⁻¹ for carbs — more than double), and because they are hydrophobic they are stored **anhydrously** (no bound water weight and zero osmotic effect).",
        level: "SL",
      },
      {
        front: "What does 'amphipathic' mean in phospholipids, and what does it cause in water?",
        back: "Having both a **hydrophilic** polar phosphate head and two **hydrophobic** non-polar fatty-acid tails. In water, phospholipids spontaneously self-assemble into bilayers with heads facing water and tails shielded inside.",
        level: "SL",
      },
      {
        front: "What is denaturation, and which bonds are broken vs kept intact?",
        back: "Heat or extreme pH disrupts weak **hydrogen, ionic, and hydrophobic interactions**, altering a protein's 3D conformation and abolishing function — **without breaking covalent peptide bonds** (primary sequence stays intact).",
        level: "SL",
      },
      {
        front: "[HL] Distinguish the stabilizing bonds of 1°, 2°, 3°, and 4° protein structure.",
        back: "**1°:** peptide bonds. **2°:** backbone C=O···H–N hydrogen bonds (α-helix, β-pleated sheet). **3°:** R-group interactions (H-bonds, ionic bonds, disulfide bridges, hydrophobic clustering). **4°:** interactions linking ≥2 polypeptide subunits (± prosthetic groups like haem).",
        level: "HL",
      },
      {
        front: "[HL] Contrast globular (insulin/haemoglobin) and fibrous (collagen) proteins.",
        back: "**Globular:** rounded, hydrophilic outer R-groups, water-soluble, metabolic/transport/signalling roles, sensitive to pH/heat. **Fibrous:** elongated repetitive sequences, mostly insoluble, high tensile strength, structural roles (collagen triple helix).",
        level: "HL",
      },
      {
        front: "Contrast simple diffusion, facilitated diffusion, and active transport across membranes.",
        back: "**Simple diffusion:** passive, down gradient, directly through lipid core (O₂, CO₂). **Facilitated diffusion:** passive, down gradient, via specific channel/carrier proteins (glucose, ions, water via aquaporins). **Active transport:** requires ATP, moves **against** gradient via protein pumps.",
        level: "SL",
      },
      {
        front: "[HL] How does cholesterol regulate animal membrane fluidity across temperatures?",
        back: "It acts as a **bidirectional fluidity buffer**: at **high T** its rigid rings restrict phospholipid movement (preventing excessive fluidity); at **low T** it disrupts tight tail packing (preventing solidification/crystallization).",
        level: "HL",
      },
      {
        front: "[HL] State the exact stoichiometry of the Na⁺/K⁺-ATPase pump and how it powers SGLT1.",
        back: "Per **1 ATP** hydrolysed, Na⁺/K⁺-ATPase pumps **3 Na⁺ out** and **2 K⁺ in** (electrogenic). The resulting steep inward Na⁺ gradient powers **SGLT1** to cotransport glucose uphill into intestinal/kidney epithelial cells (secondary active transport).",
        level: "HL",
      },
      {
        front: "How are mitochondrial and chloroplast ultrastructures adapted for chemiosmosis?",
        back: "Both have **extensive internal membranes** (cristae / thylakoids) holding electron transport chains and ATP synthase, enclosing a **tiny internal volume** (intermembrane space / thylakoid lumen) so H⁺ pumping rapidly builds a steep proton gradient.",
        level: "SL",
      },
      {
        front: "Distinguish the roles of free cytoplasmic 80S ribosomes vs rough ER-bound 80S ribosomes.",
        back: "**Free ribosomes** synthesize proteins that stay inside the cytosol (e.g. glycolytic enzymes); **rER-bound ribosomes** synthesize proteins for secretion, insertion into membranes, or packaging into lysosomes via the Golgi apparatus.",
        level: "SL",
      },
      {
        front: "[HL] Why is separating transcription from translation advantageous in eukaryotes?",
        back: "The nuclear envelope lets eukaryotes perform **post-transcriptional modification** of pre-mRNA (removing introns and splicing exons into alternative isoforms) before mature mRNA exits through nuclear pores to 80S ribosomes.",
        level: "HL",
      },
      {
        front: "[HL] Describe the role of clathrin in endocytosis.",
        back: "**Clathrin** triskelions assemble into a curved lattice on the cytosolic face of the plasma membrane, pulling cargo-bound receptors inward into a coated pit that pinches off as a **clathrin-coated vesicle** before uncoating.",
        level: "HL",
      },
      {
        front: "Compare totipotent, pluripotent, and multipotent stem cells with examples.",
        back: "**Totipotent** (zygote/morula): any embryonic + extra-embryonic/placental cell. **Pluripotent** (blastocyst inner cell mass): any body tissue cell, not placenta. **Multipotent** (bone marrow, hair follicle niches): limited related lineages (e.g. blood cells).",
        level: "SL",
      },
      {
        front: "Contrast Type I and Type II pneumocytes in the mammalian alveolus.",
        back: "**Type I:** extremely thin (~0.15 μm) flattened squamous cells minimizing gas diffusion distance. **Type II:** cuboidal secretory cells producing **pulmonary surfactant** (lowers surface tension, prevents collapse) and capable of dividing to replace damaged Type I cells.",
        level: "SL",
      },
    ],
    mustKnow: [
      "Carbon forms 4 covalent bonds, enabling chains, branches, and rings across all biomolecules.",
      "Condensation forms covalent bonds (glycosidic, ester, peptide) and releases 1 H₂O per bond; hydrolysis consumes 1 H₂O to break each bond.",
      "α-glucose forms energy stores (amylose, amylopectin, glycogen); β-glucose forms structural cellulose microfibrils via alternating 180° flips and inter-chain H-bonds.",
      "Triglycerides contain 1 glycerol + 3 fatty acids (3 ester bonds, 3 H₂O released) and store ~38 kJ g⁻¹ vs ~17 kJ g⁻¹ for carbohydrates.",
      "Phospholipids are amphipathic; membrane fluidity rises with cis-unsaturated fatty-acid kinks and is buffered across temperatures by cholesterol [HL].",
      "Simple and facilitated diffusion (channels/carriers/aquaporins) are passive and down-gradient; active transport (Na⁺/K⁺ pump: 3 Na⁺ out, 2 K⁺ in per ATP [HL]) and endo-/exocytosis require ATP.",
      "Eukaryotic compartmentalization isolates incompatible pH/enzymes (lysosome pH 5 vs cytosol pH 7.2), maximizes reaction surfaces (cristae, thylakoids, rER), and separates nuclear transcription/splicing from cytoplasmic translation [HL].",
      "SA:V = 6/L (cube) and 3/r (sphere); as cell size increases, volume outpaces surface area, limiting cell size and driving adaptations like flattening, biconcave erythrocytes, and microvilli.",
      "Stem-cell potency declines from totipotent (zygote) → pluripotent (embryonic ICM) → multipotent (adult bone marrow & hair follicle niches).",
      "Specialized structure reflects function: Type I vs Type II pneumocytes, multinucleated skeletal vs branched intercalated-disc cardiac muscle, and streamlined flagellated sperm vs nutrient-rich cortical-granule ova.",
    ],
    misconceptions: [
      {
        wrong: "Denaturation breaks the peptide bonds of a protein, turning it back into individual amino acids.",
        right: "Denaturation disrupts weak non-covalent bonds (H-bonds, ionic bonds, hydrophobic interactions) altering 3D tertiary/quaternary shape; **covalent peptide bonds remain intact** (only hydrolysis breaks peptide bonds).",
        level: "SL",
      },
      {
        wrong: "Cholesterol always makes animal cell membranes more rigid (less fluid).",
        right: "Cholesterol is a **temperature-dependent buffer**: it reduces fluidity at high temperatures (restraining tails) but **increases/maintains fluidity at low temperatures** by preventing tight phospholipid packing.",
        level: "HL",
      },
      {
        wrong: "Facilitated diffusion requires ATP because it uses a membrane protein.",
        right: "Facilitated diffusion is strictly **passive** (zero ATP); channels and carriers only provide a hydrophilic pathway for solutes moving **down** their concentration gradient.",
        level: "SL",
      },
      {
        wrong: "Water cannot cross the hydrophobic phospholipid bilayer at all, so osmosis only happens through aquaporins.",
        right: "Small water molecules can slowly cross the lipid core by simple diffusion, but **aquaporins** are specialized hydrophilic channel proteins that dramatically **accelerate** osmotic water flux in cells like kidney tubules and RBCs.",
        level: "SL",
      },
      {
        wrong: "Cellulose and starch are indigestible/digestible because they are made of different monosaccharides.",
        right: "Both are built exclusively from **glucose (C₆H₁₂O₆)**; the difference is purely the **C1 −OH isomerism** (α-glucose in starch vs β-glucose in cellulose) creating incompatible glycosidic bond geometries.",
        level: "SL",
      },
      {
        wrong: "Secondary protein structure (α-helix and β-pleated sheet) is held together by interactions between R-groups.",
        right: "Secondary structure is stabilized solely by **hydrogen bonds between C=O and N–H groups of the repeating polypeptide backbone**; R-group interactions govern **tertiary** structure.",
        level: "HL",
      },
      {
        wrong: "Larger cells have a larger surface-area-to-volume ratio because they have more surface area.",
        right: "Although absolute surface area grows (`∝ L²`), volume grows much faster (`∝ L³`), so the **SA:V ratio (`6/L`) gets strictly smaller** as a cell grows larger.",
        level: "SL",
      },
    ],
    examMistakes: [
      "Counting `n` water molecules instead of `n − 1` for a linear chain of `n` monomers (or forgetting to subtract `c` for a multi-chain protein of `c` polypeptides).",
      "Writing that a triglyceride releases 1 water molecule instead of **3 water molecules** (one for each of the 3 ester bonds).",
      "Reversing the Na⁺/K⁺ pump stoichiometry — always verify **3 Na⁺ OUT** and **2 K⁺ IN** per ATP hydrolysed.",
      "Describing membrane proteins as 'pumps' during facilitated diffusion or saying active transport moves 'down' a gradient.",
      "Confusing **cis** (kinked, lower melting point, more fluid) and **trans** (straighter, higher melting point) unsaturated fatty acids.",
      "Listing organelles without linking each structural feature to its functional advantage (e.g. stating 'mitochondria have cristae' without adding 'to increase surface area for ETC / ATP synthase').",
      "Forgetting to square height (or leaving height in cm instead of metres) when calculating `BMI = mass (kg) / height² (m²)`.",
      "Saying pluripotent embryonic stem cells can grow into a whole baby/placenta — only **totipotent** cells form extra-embryonic tissues like the placenta.",
    ],
    mnemonics: [
      {
        topic: "Sodium–Potassium Pump Direction & Ratio [HL]",
        device: "3-2-1 NOKIA (3 Na⁺ Out, 2 K⁺ In, 1 ATP)",
        explanation: "3 letters in 'OUT' → 3 Na⁺ out; 2 letters in 'IN' → 2 K⁺ in; costs 1 ATP per cycle.",
        level: "HL",
      },
      {
        topic: "α-Glucose vs β-Glucose C1 −OH Orientation",
        device: "ABBA: Alpha Below, Beta Above",
        explanation: "On carbon-1 of the standard Haworth ring, α-glucose has −OH pointing **Below** the ring; β-glucose has −OH pointing **Above**.",
        level: "SL",
      },
      {
        topic: "Double-Membrane Organelles",
        device: "NMC — Nucleus, Mitochondria, Chloroplasts",
        explanation: "Only these three eukaryotic organelles are enclosed by a double membrane; all other endomembrane sacs (ER, Golgi, lysosomes, vesicles) are single-membrane.",
        level: "SL",
      },
      {
        topic: "Pneumocyte Roles",
        device: "Type I = thin sheet (1 layer thin) · Type II = Two jobs (Surfactant + Repair)",
        explanation: "Type I covers ~95% of alveolar area for rapid gas exchange; Type II secretes surfactant and divides to replace damaged Type I cells.",
        level: "SL",
      },
    ],
    realWorld: [
      {
        emoji: "🐟",
        title: "Cold-Water Fish & Omega-3 Membrane Fluidity",
        detail: "Antarctic icefish living at −1.8 °C enrich their cell membranes with polyunsaturated cis-fatty acids (EPA/DHA) so their lipid bilayers remain fluid enough for nerve conduction and enzyme transport without freezing solid.",
      },
      {
        emoji: "💧",
        title: "Oral Rehydration Therapy (ORT) & SGLT1 Cotransport",
        detail: "WHO oral rehydration packets combine glucose and sodium chloride because intestinal SGLT1 cotransporters couple Na⁺ influx to active glucose uptake, raising tissue osmolarity so water follows rapidly by osmosis through aquaporins.",
      },
      {
        emoji: "🏥",
        title: "Surfactant Therapy in Premature Infants (NRDS)",
        detail: "In Singapore's NICUs (such as KK Women's and Children's Hospital), preterm babies born before Type II pneumocytes mature receive intratracheal pulmonary surfactant to slash alveolar surface tension and prevent lung collapse.",
      },
      {
        emoji: "🩸",
        title: "Bone Marrow Transplants & Multipotent Niches",
        detail: "Leukaemia patients undergo chemotherapy followed by haematopoietic stem-cell transplantation; these multipotent adult stem cells home to the bone-marrow niche and regenerate every red blood cell, white blood cell, and platelet lineage.",
      },
      {
        emoji: "🧬",
        title: "Familial Hypercholesterolaemia & Clathrin Endocytosis [HL]",
        detail: "Mutations that stop LDL receptors from binding clathrin adaptor proteins prevent clathrin-coated endocytosis of blood LDL cholesterol, causing dangerously high plasma cholesterol and early atherosclerosis.",
      },
    ],
    videos: [
      {
        title: "IB Biology FA2025 B1.1–B1.2 Carbohydrates, Lipids & Proteins",
        channel: "Cheryl Hickman / IB Biology Search",
        url: "https://www.youtube.com/results?search_query=IB+Biology+2025+B1.1+B1.2+carbohydrates+lipids+proteins",
      },
      {
        title: "IB Biology FA2025 B2.1 Membranes & Membrane Transport (SL & HL)",
        channel: "Alex Lee / IB Biology Search",
        url: "https://www.youtube.com/results?search_query=IB+Biology+2025+B2.1+membranes+transport+fluid+mosaic",
      },
      {
        title: "IB Biology FA2025 B2.2 Organelles & Compartmentalization",
        channel: "Amoeba Sisters / IB Biology Search",
        url: "https://www.youtube.com/results?search_query=IB+Biology+2025+B2.2+organelles+compartmentalization+clathrin",
      },
      {
        title: "IB Biology FA2025 B2.3 Cell Specialization & SA:V Ratio",
        channel: "Bozeman Science / IB Biology Search",
        url: "https://www.youtube.com/results?search_query=IB+Biology+2025+B2.3+cell+specialization+surface+area+volume+ratio",
      },
    ],
    formulas: [
      {
        name: "Linear Polymer Condensation Stoichiometry",
        formula: "{{H_2O = n - 1}} (for {{c}} separate chains: {{n - c}})",
        note: "Applies to amylose, cellulose, and polypeptides (peptide/glycosidic bonds formed = water molecules released).",
        level: "SL",
      },
      {
        name: "Polysaccharide Formula from n Hexoses",
        formula: "C₆ₙH₁₀ₙ₊₂O₅ₙ₊₁ (subtract (n − 1) H₂O from n × C₆H₁₂O₆)",
        note: "Example: maltose (n = 2) is C₁₂H₂₂O₁₁.",
        level: "SL",
      },
      {
        name: "Triglyceride Condensation",
        formula: "1 glycerol + 3 fatty acids → 1 triglyceride + 3 H₂O (3 ester bonds)",
        note: "Hydrolysis of k triglycerides consumes 3k water molecules.",
        level: "SL",
      },
      {
        name: "Macronutrient Energy Density Comparison",
        formula: "Lipids ≈ 38 kJ g⁻¹ vs Carbohydrates ≈ 17 kJ g⁻¹ ({{38/17 ≈ 2.2}}×)",
        note: "Plus lipids are anhydrous, avoiding the ~2 g water stored per gram of glycogen.",
        level: "SL",
      },
      {
        name: "Body Mass Index (BMI)",
        formula: "{{BMI = m / h^2}} (kg m⁻²)",
        note: "Convert height in cm to metres before squaring.",
        level: "SL",
      },
      {
        name: "Polypeptide Sequence Diversity",
        formula: "Possible sequences = {{20^n}}",
        note: "For a polypeptide of length n built from the 20 standard amino acids.",
        level: "SL",
      },
      {
        name: "Cube Surface Area, Volume & SA:V",
        formula: "{{SA = 6L^2}}, {{V = L^3}}, {{SA / V = 6 / L}}",
        note: "Doubling side length L halves SA:V.",
        level: "SL",
      },
      {
        name: "Sphere Surface Area, Volume & SA:V",
        formula: "{{SA = 4 pi r^2}}, {{V = (4/3) pi r^3}}, {{SA / V = 3 / r}}",
        note: "π cancels out in SA:V, leaving a simple inverse relation with radius r.",
        level: "SL",
      },
      {
        name: "Na⁺/K⁺-ATPase Pump Stoichiometry",
        formula: "1 ATP → 3 Na⁺ OUT + 2 K⁺ IN (net +1 charge exported)",
        note: "Maintains resting electrochemical gradients and powers SGLT1 secondary active transport.",
        level: "HL",
      },
      {
        name: "Qualitative Fick's Diffusion Proportionality",
        formula: "{{Rate ∝ (SA * ΔC) / d}}",
        note: "High SA (microvilli), steep ΔC (circulation), and tiny distance d (Type I pneumocyte) maximize flux.",
        level: "SL",
      },
    ],
  },
};
