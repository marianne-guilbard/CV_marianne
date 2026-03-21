import { useNavigate } from "react-router-dom";

export default function PhDThesis() {
  const navigate = useNavigate();

  const goToResearch = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const backLinkStyle = {
    background: "none", border: "none", cursor: "pointer",
    fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.8rem",
    color: "#2a6b7c", letterSpacing: "0.04em", padding: 0,
    borderBottom: "1px solid transparent", transition: "border-color 0.2s",
  };

  const linkStyle = {
    color: "#2a6b7c", textDecoration: "none",
    borderBottom: "1px solid #c0dde3", transition: "color 0.2s",
  };

  return (
    <div style={{ background: "#f7f5f0", minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #f7f5f0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f0ede6; }
        ::-webkit-scrollbar-thumb { background: #2a6b7c; border-radius: 3px; }
       @media (max-width: 900px) {
        .phd-sidebar { display: none !important; }
        .phd-content { margin-left: 0 !important; }
        .about-grid { grid-template-columns: 1fr !important; }
        .about-img { display: block; margin: 1.5rem auto 0; }
        .abstract-container { width: 100% !important; }
      }
      `}</style>

      {/* Top bar */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(247,245,240,0.96)", backdropFilter: "blur(8px)",
        borderBottom: "1px solid #dde0d8",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2rem", height: "52px",
      }}>
        <button onClick={goToResearch} style={{ ...backLinkStyle, fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1a1a2e", letterSpacing: "normal" }}>
          Marianne Guilbard
        </button>
        <button onClick={goToResearch} style={backLinkStyle}
          onMouseEnter={e => e.currentTarget.style.borderBottomColor = "#2a6b7c"}
          onMouseLeave={e => e.currentTarget.style.borderBottomColor = "transparent"}
        >← Back to main page</button>
      </header>

      {/* Sidebar */}
      <nav className="phd-sidebar" style={{
        position: "fixed", top: "52px", left: 0, bottom: 0, width: "200px",
        padding: "2.5rem 0 2rem",
        borderRight: "1px solid #dde0d8",
        background: "#f7f5f0",
        overflowY: "auto",
        zIndex: 50,
      }}>
        <div style={{ padding: "0 1.5rem 1.5rem", borderBottom: "1px solid #eef0f2", marginBottom: "1.5rem" }}>
          <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#999" }}>Contents</div>
        </div>
        {[
          { id: "institute", label: "🏛️ Institute & Team" },
          { id: "overview", label: "🧪 Project Overview" },
          { id: "abstract", label: "🧬 Graphical Abstract" },
          { id: "methods", label: "🔬 Methods" },
          { id: "manuscript", label: "📄 Thesis Manuscript" },
        ].map(({ id, label }) => (
          <a key={id} href={`#${id}`} style={{
            display: "block", padding: "0.5rem 1.5rem",
            fontFamily: "Georgia, serif", fontSize: "0.92rem",
            color: "#555", textDecoration: "none",
            borderLeft: "2px solid transparent",
            transition: "all 0.15s",
          }}
          onMouseEnter={e => { e.currentTarget.style.color = "#2a6b7c"; e.currentTarget.style.borderLeftColor = "#2a6b7c"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "#555"; e.currentTarget.style.borderLeftColor = "transparent"; }}
          >{label}</a>
        ))}
        <div style={{ padding: "2rem 1.5rem 0", marginTop: "1rem", borderTop: "1px solid #eef0f2" }}>
          <button onClick={goToResearch} style={{ ...backLinkStyle, fontFamily: "Georgia, serif" }}>
            ← Back to main page
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="phd-content" style={{ marginLeft: "200px", paddingTop: "52px" }}>

        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
          padding: "3rem 4rem",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px", pointerEvents: "none",
          }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.88rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7ecfdf", marginBottom: "0.8rem" }}>
              PhD Thesis · University of Bordeaux · BRIC · 2023–2026
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Study of the functions of the secreted protein disulfide isomerase, AGR2, in tumor adaptation
            </h1>
          </div>
        </section>

        {/* Content */}
        <div style={{ padding: "3rem 4rem 5rem" }}>

          {/* Institute & Team */}
          <div id="institute">
            <SectionTitle>🏛️ Institute & Team</SectionTitle>
            <Card style={{ marginBottom: "0.8rem" }}>
              <p><strong>Institute</strong></p>
              <p style={{ marginTop: "0.4rem" , textAlign: "justify"}}>
                This PhD was carried out at <a href="https://www.bergonie.fr/" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = "#1a1a2e"} onMouseLeave={e => e.currentTarget.style.color = "#2a6b7c"}>Institut Bergonié ↗</a> in Bordeaux, a comprehensive cancer centre affiliated with Unicancer and a leading institution for oncology research and patient care in the Nouvelle-Aquitaine region. The institute hosts the <a href="https://www.bricbordeaux.com/en/" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = "#1a1a2e"} onMouseLeave={e => e.currentTarget.style.color = "#2a6b7c"}>Bordeaux Institute of Oncology (BRIC, Inserm U1312) ↗</a>, within which my research was conducted.
              </p>
            </Card>
            <Card>
              <p><strong>Research Team</strong></p>
              <p style={{ marginTop: "0.4rem" , textAlign: "justify"}}>
                I joined the <a href="https://www.bricbordeaux.com/en/bric-team/reprogrammation-de-lactivite-tumorale-et-du-microenvironnement-associe-rytme/" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = "#1a1a2e"} onMouseLeave={e => e.currentTarget.style.color = "#2a6b7c"}>OncoGyne laboratory ↗</a> (Oncology & Gynaecology), led by Frédéric Delom, which focuses on translational research into malignant gynaecological tumours. Combining fundamental, translational, and clinical approaches, the laboratory works to better understand the molecular and cellular mechanisms underlying these cancers and to improve patient care. A central focus of the group lies in the biology of Anterior Gradient (AGR) proteins, particularly AGR2, whose roles in tumour progression, protein secretion, and the tumour microenvironment are actively investigated as potential prognostic markers and therapeutic targets.
              </p>
            </Card>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #dde0d8", margin: "2.5rem 0" }} />

        {/* Project Overview */}
        <div id="overview">
          <SectionTitle>🧪 Project Overview</SectionTitle>
          <Card>
            <p style={{ textAlign: "justify" }}>Tumor cells evolve under chronic stress imposed by sustained proliferation, elevated biosynthetic demand, and persistent perturbations of proteostasis. Central to this adaptation is the endoplasmic reticulum (ER) stress response and its downstream effectors, including protein disulfide isomerases (PDIs). This thesis investigates the role of the PDI family member Anterior Gradient 2 (AGR2) in epithelial cancer, with a particular focus on how its biological functions are shaped by subcellular localization. Integrative analyses of human transcriptomic and proteomic datasets identify AGR2 as one of the most consistently upregulated PDIs across epithelial malignancies, reflecting its close association with secretory stress adaptation. Although AGR2 is canonically described as an ER-resident folding factor, accumulating evidence indicates that it can access the extracellular space and acquire distinct biological activities. Within this framework, our experimental analyses using epithelial ovarian cancer models examine the biological impact of extracellular AGR2 (eAGR2). Functional perturbation of eAGR2 demonstrates a direct contribution to tumor cell behavior, as antibody-mediated neutralization reduces proliferation and migration, whereas exogenous supplementation partially restores these properties, supporting a pro-tumorigenic role for eAGR2. At the molecular level, quantitative proteomic analyses, complemented by analysis of the TCGA database, indicate that eAGR2 signaling is associated with altered expression of proteins involved in intracellular trafficking and autophagy-related processes. These changes suggest that eAGR2 supports degradative activity and amino acid availability under metabolic stress, thereby sustaining biosynthetic capacity. Consistent with this interpretation, enhanced translational activity is observed in cells exposed to eAGR2. Together, these findings define two distinct yet complementary roles for AGR2. While iAGR2 functions as an endoplasmic reticulum–resident protein disulfide isomerase that promotes protein folding and quality control, eAGR2 acts as an extracellular signal that supports metabolic and translational programs. This dual-compartment organization provides a mechanistic framework in which intracellular and extracellular AGR2 cooperate to reinforce epithelial stress adaptation and promote tumor progression.</p>
          </Card>
        </div>

          {/* Graphical Abstract */}
          <div id="abstract">
            <SectionTitle>🧬 Graphical Abstract</SectionTitle>
            <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
              <div className="abstract-container" style={{ display: "inline-block", width: "80%" }}>
                <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "#999", fontStyle: "italic" }}>Coming soon...</p>
              </div>
            </div>
          </div>

          {/* Methods */}
          <div id="methods">
            <SectionTitle>🔬 Methods</SectionTitle>

            {/* Experimental Models */}
            <div style={{ marginBottom: "0.5rem" }}>
              <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#2a6b7c", marginBottom: "0.6rem" }}>Experimental Models</div>
              <Card style={{ padding: 0, marginBottom: "1rem" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {[
                      { method: "Ovarian cancer", detail: "Human ovarian cancer cell lines: SKOV3, OVCAR3" },
                      { method: "Colorectal cancer", detail: "Human colorectal cancer cell lines: RKO, LS174T, HCT116, HT29" },
                      { method: "Lung cancer", detail: "Human lung cancer cell line: A549" },
                      { method: "Cell engineering", detail: "Stable lentiviral cell engineering" },
                      { method: "Organoids", detail: "Patient-derived tumor organoids (PDTOs)" },
                    ].map(({ method, detail }, i, arr) => (
                      <tr key={method} style={{ borderBottom: i < arr.length - 1 ? "1px solid #eef0f2" : "none" }}>
                        <td style={{ padding: "0.9rem 1.6rem", width: "28%", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "0.9rem", color: "#1a1a2e", verticalAlign: "top" }}>{method}</td>
                        <td style={{ padding: "0.9rem 1.6rem", fontFamily: "Georgia, serif", fontSize: "0.92rem", color: "#444", verticalAlign: "top", borderLeft: "1px solid #eef0f2" }}>{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>

            {/* Wet-lab techniques */}
            <div style={{ marginBottom: "0.5rem" }}>
              <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#2a6b7c", marginBottom: "0.6rem" }}>Wet-Lab Techniques</div>
              <Card style={{ padding: 0, marginBottom: "1rem" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {[
                      { method: "Imaging & expression", detail: "Immunofluorescence microscopy, Western blotting, immunohistochemistry (IHC), RT-qPCR" },
                      { method: "Secretome analysis", detail: "Gyrolab automated immunoassay, Conditioned medium protein precipitation" },
                      { method: "Functional assays", detail: "Cell proliferation assays, Wound-healing assay, Puromycin incorporation assay (SUnSET) to assess global protein synthesis, Dose–response assays and IC50 determination" },
                      { method: "Protein biochemistry", detail: "FPLC-based recombinant protein purification (Fast Protein Liquid Chromatography)" },
                    ].map(({ method, detail }, i, arr) => (
                      <tr key={method} style={{ borderBottom: i < arr.length - 1 ? "1px solid #eef0f2" : "none" }}>
                        <td style={{ padding: "0.9rem 1.6rem", width: "28%", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "0.9rem", color: "#1a1a2e", verticalAlign: "top" }}>{method}</td>
                        <td style={{ padding: "0.9rem 1.6rem", fontFamily: "Georgia, serif", fontSize: "0.92rem", color: "#444", verticalAlign: "top", borderLeft: "1px solid #eef0f2" }}>{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>

            {/* Omics & Data Analysis */}
            <div style={{ marginBottom: "0.5rem" }}>
              <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#2a6b7c", marginBottom: "0.6rem" }}>Omics & Data Analysis</div>
              <Card style={{ padding: 0, marginBottom: "1rem" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {[
                      { method: "Proteomics", detail: "Label-free quantitative proteomics (nanoLC-MS/MS)" },
                      { method: "Transcriptomics", detail: "Pan-cancer transcriptomic analyses using TCGA, GTEx, CCLE, and Human Protein Atlas" },
                      { method: "Gene & pathway analysis", detail: "Gene correlation analyses (Pearson/Spearman), gene set enrichment analysis (GSEA, ssGSEA)" },
                      { method: "Functional enrichment", detail: "Ontology-based interpretation (GO:BP, GO:CC) with network-based visualization (Cytoscape / ClueGO)" },
                      { method: "Genomic analyses", detail: "EMT-state classification from transcriptomic signatures; integrative genomic/epigenomic analyses (somatic mutation, CNV, promoter methylation)" },
                      { method: "Survival analyses", detail: "Kaplan–Meier survival curves" },
                      { method: "Multi-omics & visualization", detail: "Multi-omics data integration and visualization in R" },
                    ].map(({ method, detail }, i, arr) => (
                      <tr key={method} style={{ borderBottom: i < arr.length - 1 ? "1px solid #eef0f2" : "none" }}>
                        <td style={{ padding: "0.9rem 1.6rem", width: "28%", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "0.9rem", color: "#1a1a2e", verticalAlign: "top" }}>{method}</td>
                        <td style={{ padding: "0.9rem 1.6rem", fontFamily: "Georgia, serif", fontSize: "0.92rem", color: "#444", verticalAlign: "top", borderLeft: "1px solid #eef0f2" }}>{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          </div>

          {/* Thesis Manuscript */}
          <div id="manuscript">
            <SectionTitle>📄 Thesis Manuscript</SectionTitle>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "1rem", lineHeight: 1.8, color: "#333", marginBottom: "0.8rem" }}>
              The full thesis manuscript is available here:
            </p>
            <a href="https://theses.hal.science/tel-05558177"
              target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", color: "#2a6b7c", textDecoration: "none", borderBottom: "1px solid #c0dde3" }}>
              ↗ View Thesis on HAL Thèses
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #dde0d8", margin: "2.5rem 0" }} />

          {/* Footer */}
          <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#999" }}>© 2026 Marianne Guilbard</span>
            <button onClick={goToResearch} style={{ ...backLinkStyle, fontFamily: "Georgia, serif", fontSize: "0.78rem", borderBottom: "1px solid #c0dde3" }}>
              ← Back to main page
            </button>
          </footer>

        </div>
      </main>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ marginBottom: "1.2rem", marginTop: "2.5rem" }}>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a1a2e", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>{children}</h2>
      <div style={{ width: "3rem", height: "2px", background: "#2a6b7c" }} />
    </div>
  );
}

function Card({ children, style = {} }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #dde6e8",
      borderLeft: "3px solid #2a6b7c",
      borderRadius: "2px",
      padding: "1.4rem 1.6rem",
      marginBottom: "1.2rem",
      fontFamily: "Georgia, serif",
      fontSize: "0.95rem",
      lineHeight: 1.8,
      color: "#333",
      ...style,
    }}>{children}</div>
  );
}