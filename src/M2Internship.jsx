import { useNavigate } from "react-router-dom";

export default function M2Internship() {
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
        .m2-sidebar { display: none !important; }
        .m2-content { margin-left: 0 !important; }
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
      <nav className="m2-sidebar" style={{
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
          { id: "report", label: "📄 Full Report" },
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
      <main className="m2-content" style={{ marginLeft: "200px", paddingTop: "52px" }}>

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
              Master 2 Internship · University of Bordeaux · BRIC
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Role of AGR2 in Therapy-Induced Senescence in Breast Cancer
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
                This internship was carried out at the <a href="https://www.bergonie.fr/" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = "#1a1a2e"} onMouseLeave={e => e.currentTarget.style.color = "#2a6b7c"}>Institut Bergonié ↗</a> in Bordeaux, a comprehensive cancer centre affiliated with Unicancer and a leading institution for oncology research and patient care in the Nouvelle-Aquitaine region. The institute hosts the <a href="https://www.bricbordeaux.com/en/" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = "#1a1a2e"} onMouseLeave={e => e.currentTarget.style.color = "#2a6b7c"}>Bordeaux Institute of Oncology (BRIC, Inserm U1312) ↗</a>, within which my research was conducted.
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
                <p style={{ textAlign: "justify" }}>The endoplasmic reticulum–resident protein AGR2 (Anterior Gradient 2), a member of the protein disulfide isomerase (PDI) family, is frequently overexpressed in breast cancer and implicated in tumour growth, invasion, and metastasis. In addition to its intracellular functions, AGR2 is secreted into the tumour microenvironment as extracellular AGR2 (eAGR2), where it acts as a pro-oncogenic factor. Previous work from our team showed that inhibition of AGR2 expression in lung cancer cells induces a senescent phenotype. Building on these observations, this project investigated the role of AGR2 in therapy-induced senescence (TIS) in breast cancer cells. We found that TIS leads to proliferative arrest, senescence entry, and a marked reduction of AGR2 at both intra- and extracellular levels. Importantly, supplementation with recombinant eAGR2 in doxorubicin-treated MCF7 cells significantly reduced senescence entry, indicating that extracellular AGR2 promotes escape from TIS. Overall, these results suggest that AGR2 contributes to resistance to therapy-induced senescence in breast cancer through its extracellular activity.</p>
            </Card>
          </div>

        {/* Graphical Abstract */}
        <div id="abstract">
          <SectionTitle>🧬 Graphical Abstract</SectionTitle>
          <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
            <div className="abstract-container" style={{ display: "inline-block", width: "70%" }}>
              <img
                src={`${import.meta.env.BASE_URL}image_M2.png`}
                alt="Graphical abstract – AGR2 and therapy-induced senescence"
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid #dde6e8",
                  display: "block",
                }}
              />
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#1a1a2e",
                lineHeight: 1.6,
                margin: "1.2rem 0 0.6rem",
                textAlign: "center",
              }}>
                Schematic representation of the dual role of AGR2 in therapy-induced senescence (TIS) in breast cancer cells.
              </p>
              <p style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.90rem",
                color: "#555",
                fontStyle: "italic",
                lineHeight: 1.7,
                textAlign: "justify",
              }}>
                Breast cancer cells constitutively express AGR2 in two distinct compartments: an intracellular form (iAGR2) and a secreted extracellular form (eAGR2). Treatment with doxorubicin (100nM) induces therapy-induced senescence (TIS), characterized by proliferative arrest and a senescent morphology, which is accompanied by a significant downregulation of both iAGR2 and eAGR2 expression, establishing a correlation between AGR2 loss and senescence entry. Building on this observation, exogenous addition of recombinant eAGR2 to doxorubicin-treated cells was sufficient to significantly reduce senescence entry and revert the effect of TIS, identifying eAGR2 as a potential anti-senescence factor. Together, these findings suggest that secreted eAGR2 can mediate resistance to therapy-induced senescence by preventing breast cancer cells from committing to a senescent fate, and that targeting eAGR2 secretion may represent a strategy to counteract TIS resistance in AGR2-overexpressing breast tumor.
              </p>
            </div>
          </div>
        </div>

        {/* Methods */}
        <div id="methods">
          <SectionTitle>🔬 Methods</SectionTitle>
       <Card style={{ padding: 0 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {[
              { method: "Cell culture", detail: "MCF7 breast cancer cell line" },
              { method: "Gene editing", detail: "CRISPR/Cas9, lipid-mediated transfection" },
              { method: "Molecular biology", detail: "Plasmid cloning" },
              { method: "Protein analysis", detail: "Western blotting, Bradford assay" },
              { method: "Functional assays", detail: "Senescence-associated β-galactosidase staining, Cell proliferation assays" },
              { method: "Microscopy", detail: "Fluorescence microscopy, high-content imaging" },
              { method: "Secretome analysis", detail: "Conditioned medium protein precipitation" },
              { method: "Recombinant protein", detail: "Recombinant AGR2 production and purification" },
              { method: "Data analysis", detail: "Statistical analysis (GraphPad Prism)" },
            ].map(({ method, detail }, i, arr) => (
              <tr key={method} style={{ borderBottom: i < arr.length - 1 ? "1px solid #eef0f2" : "none" }}>
                <td style={{ padding: "0.9rem 1.6rem", width: "30%", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "0.9rem", color: "#1a1a2e", verticalAlign: "top", whiteSpace: "nowrap" }}>{method}</td>
                <td style={{ padding: "0.9rem 1.6rem", fontFamily: "Georgia, serif", fontSize: "0.92rem", color: "#444", verticalAlign: "top", borderLeft: "1px solid #eef0f2" }}>{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
        </div>

          {/* Full Report */}
          <div id="report">
            <SectionTitle>📄 Full Report</SectionTitle>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "1rem", lineHeight: 1.8, color: "#333", marginBottom: "0.8rem" }}>
              The complete internship report is available here:
            </p>
            <a href="https://github.com/marianne-guilbard/marianne-cv/raw/main/M2%20report%20-%20marianne%20guilbard.pdf"
              target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", color: "#2a6b7c", textDecoration: "none", borderBottom: "1px solid #c0dde3" }}>
              ↓ Download M2 Internship Report (PDF)
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