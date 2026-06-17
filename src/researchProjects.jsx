import { ExternalLink, Card } from "./ResearchDetailModal.jsx";

/* ----------------------------------------------------------------- */
/* Project data — full detail content for each research experience    */
/* These builder functions are kept separate from the modal component */
/* so that ResearchDetailModal.jsx only exports components (fast       */
/* refresh friendly).                                                  */
/* ----------------------------------------------------------------- */

export function buildPhDProject() {
  return {
    emoji: "🎓",
    eyebrow: "PhD Thesis · University of Bordeaux · BRIC · 2023–2026",
    title: "Study of the functions of the secreted protein disulfide isomerase, AGR2, in tumor adaptation",
    institute: (
      <>
        <Card style={{ marginBottom: "0.8rem" }}>
          <p>
            <strong>Institute</strong>
          </p>
          <p style={{ marginTop: "0.4rem", textAlign: "justify" }}>
            This PhD was carried out at <ExternalLink href="https://www.bergonie.fr/">Institut Bergonié</ExternalLink> in
            Bordeaux, a comprehensive cancer centre affiliated with Unicancer and a leading institution for oncology
            research and patient care in the Nouvelle-Aquitaine region. The institute hosts the{" "}
            <ExternalLink href="https://www.bricbordeaux.com/en/">
              Bordeaux Institute of Oncology (BRIC, Inserm U1312)
            </ExternalLink>
            , within which my research was conducted.
          </p>
        </Card>
        <Card>
          <p>
            <strong>Research Team</strong>
          </p>
          <p style={{ marginTop: "0.4rem", textAlign: "justify" }}>
            I joined the{" "}
            <ExternalLink href="https://www.bricbordeaux.com/en/bric-team/reprogrammation-de-lactivite-tumorale-et-du-microenvironnement-associe-rytme/">
              OncoGyne laboratory
            </ExternalLink>{" "}
            (Oncology & Gynaecology), led by Frédéric Delom, which focuses on translational research into malignant
            gynaecological tumours. Combining fundamental, translational, and clinical approaches, the laboratory
            works to better understand the molecular and cellular mechanisms underlying these cancers and to improve
            patient care. A central focus of the group lies in the biology of Anterior Gradient (AGR) proteins,
            particularly AGR2, whose roles in tumour progression, protein secretion, and the tumour microenvironment
            are actively investigated as potential prognostic markers and therapeutic targets.
          </p>
        </Card>
      </>
    ),
    supervisor: "Dr. Frédéric Delom",
    supervisorLink: "https://www.researchgate.net/profile/Frederic-Delom",
    overview:
      "Tumor cells evolve under chronic stress imposed by sustained proliferation, elevated biosynthetic demand, and persistent perturbations of proteostasis. Central to this adaptation is the endoplasmic reticulum (ER) stress response and its downstream effectors, including protein disulfide isomerases (PDIs). This thesis investigates the role of the PDI family member Anterior Gradient 2 (AGR2) in epithelial cancer, with a particular focus on how its biological functions are shaped by subcellular localization. Integrative analyses of human transcriptomic and proteomic datasets identify AGR2 as one of the most consistently upregulated PDIs across epithelial malignancies, reflecting its close association with secretory stress adaptation. Although AGR2 is canonically described as an ER-resident folding factor, accumulating evidence indicates that it can access the extracellular space and acquire distinct biological activities. Within this framework, our experimental analyses using epithelial ovarian cancer models examine the biological impact of extracellular AGR2 (eAGR2). Functional perturbation of eAGR2 demonstrates a direct contribution to tumor cell behavior, as antibody-mediated neutralization reduces proliferation and migration, whereas exogenous supplementation partially restores these properties, supporting a pro-tumorigenic role for eAGR2. At the molecular level, quantitative proteomic analyses, complemented by analysis of the TCGA database, indicate that eAGR2 signaling is associated with altered expression of proteins involved in intracellular trafficking and autophagy-related processes. These changes suggest that eAGR2 supports degradative activity and amino acid availability under metabolic stress, thereby sustaining biosynthetic capacity. Consistent with this interpretation, enhanced translational activity is observed in cells exposed to eAGR2. Together, these findings define two distinct yet complementary roles for AGR2. While iAGR2 functions as an endoplasmic reticulum–resident protein disulfide isomerase that promotes protein folding and quality control, eAGR2 acts as an extracellular signal that supports metabolic and translational programs. This dual-compartment organization provides a mechanistic framework in which intracellular and extracellular AGR2 cooperate to reinforce epithelial stress adaptation and promote tumor progression.",
    abstract: {
      src: `${import.meta.env.BASE_URL}image_phd.png`,
      alt: "Graphical abstract – Dual-compartment model of AGR2",
      width: "75%",
      caption:
        "Dual-compartment model of AGR2 coupling ER proteostasis (iAGR2) and extracellular metabolic activation (eAGR2) in a self-reinforcing loop that enhances tumour cell aggressiveness.",
      description:
        "Intracellular AGR2 (iAGR2), functions as an ER-resident PDI that promotes protein folding, catalyses disulphide bond formation, alleviates ER stress, and regulates the unfolded protein response (UPR), thereby maintaining proteostasis and supporting cell survival under stress. Meanwhile, extracellular AGR2 (eAGR2) modulates the autophagy–lysosome axis, enhancing amino acid recycling and sustaining global protein synthesis. By linking intracellular folding capacity with extracellular metabolic and translational control, iAGR2 and eAGR2 establish a self-reinforcing loop that coordinates protein homeostasis and translation. Collectively, this dual-compartment regulation supports the high biosynthetic activity characteristic of tumour cells and drives tumour cell aggressiveness, integrating ER homeostasis, vesicular trafficking, and metabolic activation into a unified regulatory model.",
    },
    methodsGroups: [
      {
        label: "Experimental Models",
        rows: [
          { method: "Ovarian cancer", detail: "Human ovarian cancer cell lines: SKOV3, OVCAR3" },
          { method: "Colorectal cancer", detail: "Human colorectal cancer cell lines: RKO, LS174T, HCT116, HT29" },
          { method: "Lung cancer", detail: "Human lung cancer cell line: A549" },
          { method: "Cell engineering", detail: "Stable lentiviral cell engineering" },
          { method: "Organoids", detail: "Patient-derived tumor organoids (PDTOs)" },
        ],
      },
      {
        label: "Wet-Lab Techniques",
        rows: [
          {
            method: "Imaging & expression",
            detail: "Immunofluorescence microscopy, Western blotting, immunohistochemistry (IHC), RT-qPCR",
          },
          {
            method: "Secretome analysis",
            detail: "Gyrolab automated immunoassay, Conditioned medium protein precipitation",
          },
          {
            method: "Functional assays",
            detail:
              "Cell proliferation assays, Wound-healing assay, Puromycin incorporation assay (SUnSET) to assess global protein synthesis, Dose–response assays and IC50 determination",
          },
          {
            method: "Protein biochemistry",
            detail: "FPLC-based recombinant protein purification (Fast Protein Liquid Chromatography)",
          },
        ],
      },
      {
        label: "Omics & Data Analysis",
        rows: [
          { method: "Proteomics", detail: "Label-free quantitative proteomics (nanoLC-MS/MS)" },
          {
            method: "Transcriptomics",
            detail: "Pan-cancer transcriptomic analyses using TCGA, GTEx, CCLE, and Human Protein Atlas",
          },
          {
            method: "Gene & pathway analysis",
            detail: "Gene correlation analyses (Pearson/Spearman), gene set enrichment analysis (GSEA, ssGSEA)",
          },
          {
            method: "Functional enrichment",
            detail: "Ontology-based interpretation (GO:BP, GO:CC) with network-based visualization (Cytoscape / ClueGO)",
          },
          {
            method: "Genomic analyses",
            detail:
              "EMT-state classification from transcriptomic signatures; integrative genomic/epigenomic analyses (somatic mutation, CNV, promoter methylation)",
          },
          { method: "Survival analyses", detail: "Kaplan–Meier survival curves" },
          { method: "Multi-omics & visualization", detail: "Multi-omics data integration and visualization in R" },
        ],
      },
    ],
    document: {
      label: "Thesis Manuscript",
      intro: "The full thesis manuscript is available here:",
      href: "https://theses.hal.science/tel-05558177",
      linkLabel: "View Thesis on HAL Thèses",
      kind: "link",
    },
  };
}

export function buildM2Project() {
  return {
    emoji: "🧫",
    eyebrow: "Master 2 Internship · University of Bordeaux · BRIC",
    title: "Role of AGR2 in Therapy-Induced Senescence in Breast Cancer",
    institute: (
      <>
        <Card style={{ marginBottom: "0.8rem" }}>
          <p>
            <strong>Institute</strong>
          </p>
          <p style={{ marginTop: "0.4rem", textAlign: "justify" }}>
            This internship was carried out at the <ExternalLink href="https://www.bergonie.fr/">Institut Bergonié</ExternalLink> in
            Bordeaux, a comprehensive cancer centre affiliated with Unicancer and a leading institution for oncology
            research and patient care in the Nouvelle-Aquitaine region. The institute hosts the{" "}
            <ExternalLink href="https://www.bricbordeaux.com/en/">
              Bordeaux Institute of Oncology (BRIC, Inserm U1312)
            </ExternalLink>
            , within which my research was conducted.
          </p>
        </Card>
        <Card>
          <p>
            <strong>Research Team</strong>
          </p>
          <p style={{ marginTop: "0.4rem", textAlign: "justify" }}>
            I joined the{" "}
            <ExternalLink href="https://www.bricbordeaux.com/en/bric-team/reprogrammation-de-lactivite-tumorale-et-du-microenvironnement-associe-rytme/">
              OncoGyne laboratory
            </ExternalLink>{" "}
            (Oncology & Gynaecology), led by Frédéric Delom, which focuses on translational research into malignant
            gynaecological tumours, with a central focus on the biology of Anterior Gradient (AGR) proteins,
            particularly AGR2.
          </p>
        </Card>
      </>
    ),
    supervisor: "Dr. Frédéric Delom",
    supervisorLink: "https://www.researchgate.net/profile/Frederic-Delom",
    overview:
      "The endoplasmic reticulum–resident protein AGR2 (Anterior Gradient 2), a member of the protein disulfide isomerase (PDI) family, is frequently overexpressed in breast cancer and implicated in tumour growth, invasion, and metastasis. In addition to its intracellular functions, AGR2 is secreted into the tumour microenvironment as extracellular AGR2 (eAGR2), where it acts as a pro-oncogenic factor. Previous work from our team showed that inhibition of AGR2 expression in lung cancer cells induces a senescent phenotype. Building on these observations, this project investigated the role of AGR2 in therapy-induced senescence (TIS) in breast cancer cells. We found that TIS leads to proliferative arrest, senescence entry, and a marked reduction of AGR2 at both intra- and extracellular levels. Importantly, supplementation with recombinant eAGR2 in doxorubicin-treated MCF7 cells significantly reduced senescence entry, indicating that extracellular AGR2 promotes escape from TIS. Overall, these results suggest that AGR2 contributes to resistance to therapy-induced senescence in breast cancer through its extracellular activity.",
    abstract: {
      src: `${import.meta.env.BASE_URL}image_M2.png`,
      alt: "Graphical abstract – AGR2 and therapy-induced senescence",
      width: "68%",
      caption: "Schematic representation of the dual role of AGR2 in therapy-induced senescence (TIS) in breast cancer cells.",
      description:
        "Breast cancer cells constitutively express AGR2 in two distinct compartments: an intracellular form (iAGR2) and a secreted extracellular form (eAGR2). Treatment with doxorubicin (100nM) induces therapy-induced senescence (TIS), characterized by proliferative arrest and a senescent morphology, which is accompanied by a significant downregulation of both iAGR2 and eAGR2 expression, establishing a correlation between AGR2 loss and senescence entry. Building on this observation, exogenous addition of recombinant eAGR2 to doxorubicin-treated cells was sufficient to significantly reduce senescence entry and revert the effect of TIS, identifying eAGR2 as a potential anti-senescence factor. Together, these findings suggest that secreted eAGR2 can mediate resistance to therapy-induced senescence by preventing breast cancer cells from committing to a senescent fate, and that targeting eAGR2 secretion may represent a strategy to counteract TIS resistance in AGR2-overexpressing breast tumor.",
    },
    methodsGroups: [
      {
        label: "Methods & Techniques",
        rows: [
          { method: "Cell culture", detail: "MCF7 breast cancer cell line" },
          { method: "Gene editing", detail: "CRISPR/Cas9, lipid-mediated transfection" },
          { method: "Molecular biology", detail: "Plasmid cloning" },
          { method: "Protein analysis", detail: "Western blotting, Bradford assay" },
          {
            method: "Functional assays",
            detail: "Senescence-associated β-galactosidase staining, Cell proliferation assays",
          },
          { method: "Microscopy", detail: "Fluorescence microscopy, high-content imaging" },
          { method: "Secretome analysis", detail: "Conditioned medium protein precipitation" },
          { method: "Recombinant protein", detail: "Recombinant AGR2 production and purification" },
          { method: "Data analysis", detail: "Statistical analysis (GraphPad Prism)" },
        ],
      },
    ],
    document: {
      label: "Full Report",
      intro: "The complete internship report is available here:",
      href: `${import.meta.env.BASE_URL}M2 report - marianne guilbard.pdf`,
      linkLabel: "Download M2 Internship Report (PDF)",
      kind: "download",
    },
  };
}

export function buildM1Project() {
  return {
    emoji: "🧫",
    eyebrow: "Master 1 Internship · University of Grenoble Alpes · IAB",
    title: "Lysine Methylation-Based Signalling in Triple-Negative Breast Cancer",
    institute: (
      <>
        <Card style={{ marginBottom: "0.8rem" }}>
          <p>
            <strong>Institute</strong>
          </p>
          <p style={{ marginTop: "0.4rem", textAlign: "justify" }}>
            This internship was carried out at the <ExternalLink href="https://iab-grenoble.fr/en">Institute for Advanced Biosciences (IAB)</ExternalLink> in
            Grenoble, a joint research unit affiliated with Inserm, CNRS, and Université Grenoble Alpes. The IAB
            brings together multidisciplinary teams working at the interface of fundamental biology and
            translational medicine, with a strong focus on cancer, infectious diseases, and immunology.
          </p>
        </Card>
        <Card>
          <p>
            <strong>Research Team</strong>
          </p>
          <p style={{ marginTop: "0.4rem", textAlign: "justify" }}>
            I joined the team led by{" "}
            <ExternalLink href="https://iab-grenoble.fr/en/recherche/equipes/dynamique-de-la-methylation-des-proteines-dans-le-cancer">
              Nicolas Reynoird
            </ExternalLink>
            , whose research focuses on the dynamics of protein methylation in cancer. The team investigates how
            post-translational methylation events regulate key cellular processes including gene expression,
            metabolism, and cell proliferation and how their dysregulation contributes to tumour development and
            progression.
          </p>
        </Card>
      </>
    ),
    supervisor: "Dr. Nicolas Reynoird",
    supervisorLink: "https://www.researchgate.net/profile/Nicolas-Reynoird-2",
    overview:
      "Breast cancer remains the leading cause of cancer-related death among women worldwide. While early-stage interventions targeting the primary tumour have improved, strategies to prevent or treat aggressive breast cancer and metastasis remain less effective. Tumour dissemination is a major contributor to mortality in breast cancer patients. Dr. Reynoird's team observed that BCAR3 methylation by the lysine methyltransferase SMYD2 enhances cancer cell migration and invasiveness. Their work demonstrated that SMYD2 contributes to breast cancer metastasis and that BCAR3 methylation facilitates its interaction with the actin nucleator FMNL3. In this project, we investigated the role of BCAR1 in the SMYD2–BCAR3 pathway by assessing whether BCAR1/BCAR3 perturbation impacts cytoskeletal remodelling. We found that BCAR1 and BCAR3 are expressed and interact in aggressive breast cancer cell lines. Using specific mutants, we demonstrated that BCAR1 interacts with FMNL3 through BCAR3, highlighting the importance of this complex in cytoskeletal dynamics.",
    abstract: {
      src: `${import.meta.env.BASE_URL}image_M1.png`,
      alt: "Graphical abstract",
      width: "58%",
      caption: "BCAR1/BCAR3-dependent regulation of the SMYD2–FMNL axis during breast cancer cell migration",
      description:
        "This model illustrates a signaling mechanism proposed to promote migration and invasion in aggressive breast cancer cells. SMYD2-mediated methylation of BCAR3 is thought to facilitate the recruitment of FMNL proteins, which stimulate actin remodeling and strengthen lamellipodia dynamics. Because BCAR3 interacts with BCAR1 at weak adhesion sites, my project investigated whether the BCAR1–BCAR3 complex is required for this pathway to efficiently reorganize the cytoskeleton and sustain metastatic behavior. Overall, the work links lysine methylation signaling, adhesion complex organization, and actin-driven cell motility in breast cancer.",
    },
    methodsGroups: [
      {
        label: "Methods & Techniques",
        rows: [
          { method: "Cell culture", detail: "MDA-MB-231 and 293T cell lines" },
          {
            method: "Molecular cloning / DNA manipulation",
            detail: "Restriction cloning, Gibson assembly, Gateway cloning, bacterial transformation, plasmid purification",
          },
          { method: "Mutagenesis", detail: "Site-directed mutagenesis" },
          {
            method: "DNA analysis",
            detail: "NanoDrop spectrophotometry, restriction digestion, agarose gel electrophoresis, Sanger sequencing",
          },
          { method: "Protein interaction / analysis", detail: "Co-immunoprecipitation, Western blotting, Bradford assay" },
          { method: "Viral transduction", detail: "Lentiviral production and transduction" },
          { method: "Cell sorting", detail: "FACS" },
        ],
      },
    ],
    document: {
      label: "Full Report",
      intro: "The complete internship report is available here:",
      href: `${import.meta.env.BASE_URL}M1 report - Marianne Guilbard.pdf`,
      linkLabel: "Download M1 Internship Report (PDF)",
      kind: "download",
    },
  };
}