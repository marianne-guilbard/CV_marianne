import { useNavigate } from "react-router-dom";

export default function M1Internship() {
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
        .m1-sidebar { display: none !important; }
        .m1-content { margin-left: 0 !important; }
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
      <nav className="m1-sidebar" style={{
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
      <main className="m1-content" style={{ marginLeft: "200px", paddingTop: "52px" }}>

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
              Master 1 Internship · University of Grenoble Alpes · IAB
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Lysine Methylation-Based Signalling in Triple-Negative Breast Cancer
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
            <p style={{ marginTop: "0.4rem", textAlign: "justify" }}>
                This internship was carried out at the <a href="https://iab-grenoble.fr/en" target="_blank" rel="noopener noreferrer" style={{ color: "#2a6b7c", textDecoration: "none", borderBottom: "1px solid #c0dde3" }} onMouseEnter={e => e.currentTarget.style.color = "#1a1a2e"} onMouseLeave={e => e.currentTarget.style.color = "#2a6b7c"}>Institute for Advanced Biosciences (IAB) ↗</a> in Grenoble, a joint research unit affiliated with Inserm, CNRS, and Université Grenoble Alpes. The IAB brings together multidisciplinary teams working at the interface of fundamental biology and translational medicine, with a strong focus on cancer, infectious diseases, and immunology.
            </p>
            </Card>
            <Card>
            <p><strong>Research Team</strong></p>
            <p style={{ marginTop: "0.4rem", textAlign: "justify" }}>
                I joined the team led by <a href="https://iab-grenoble.fr/en/recherche/equipes/dynamique-de-la-methylation-des-proteines-dans-le-cancer" target="_blank" rel="noopener noreferrer" style={{ color: "#2a6b7c", textDecoration: "none", borderBottom: "1px solid #c0dde3" }} onMouseEnter={e => e.currentTarget.style.color = "#1a1a2e"} onMouseLeave={e => e.currentTarget.style.color = "#2a6b7c"}>Nicolas Reynoird ↗</a>, whose research focuses on the dynamics of protein methylation in cancer. The team investigates how post-translational methylation events regulate key cellular processes including gene expression, metabolism, and cell proliferation and how their dysregulation contributes to tumour development and progression.
            </p>
            </Card>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #dde0d8", margin: "2.5rem 0" }} />

         {/* Project Overview */}
        <div id="overview">
        <SectionTitle>🧪 Project Overview</SectionTitle>
        <Card>
            <p style={{ textAlign: "justify" }}>Breast cancer remains the leading cause of cancer-related death among women worldwide. While early-stage interventions targeting the primary tumour have improved, strategies to prevent or treat aggressive breast cancer and metastasis remain less effective. Tumour dissemination is a major contributor to mortality in breast cancer patients. Dr. Reynoird's team observed that BCAR3 methylation by the lysine methyltransferase SMYD2 enhances cancer cell migration and invasiveness. Their work demonstrated that SMYD2 contributes to breast cancer metastasis and that BCAR3 methylation facilitates its interaction with the actin nucleator FMNL3. In this project, we investigated the role of BCAR1 in the SMYD2–BCAR3 pathway by assessing whether BCAR1/BCAR3 perturbation impacts cytoskeletal remodelling. We found that BCAR1 and BCAR3 are expressed and interact in aggressive breast cancer cell lines. Using specific mutants, we demonstrated that BCAR1 interacts with FMNL3 through BCAR3, highlighting the importance of this complex in cytoskeletal dynamics.</p>
        </Card>
        </div>

        {/* Graphical Abstract */}
        <div id="abstract">
        <SectionTitle>🧬 Graphical Abstract</SectionTitle>
        <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
            <div className="abstract-container" style={{ display: "inline-block", width: "60%" }}>
            <img
                src={`${import.meta.env.BASE_URL}image_M1.png`}
                alt="Graphical abstract"
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
                BCAR1/BCAR3-dependent regulation of the SMYD2–FMNL axis during breast cancer cell migration
            </p>
            <p style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.90rem",
                color: "#555",
                fontStyle: "italic",
                lineHeight: 1.7,
                textAlign: "justify",
            }}>
                This model illustrates a signaling mechanism proposed to promote migration and invasion in aggressive breast cancer cells. SMYD2-mediated methylation of BCAR3 is thought to facilitate the recruitment of FMNL proteins, which stimulate actin remodeling and strengthen lamellipodia dynamics. Because BCAR3 interacts with BCAR1 at weak adhesion sites, my project investigated whether the BCAR1–BCAR3 complex is required for this pathway to efficiently reorganize the cytoskeleton and sustain metastatic behavior. Overall, the work links lysine methylation signaling, adhesion complex organization, and actin-driven cell motility in breast cancer.
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
                { method: "Cell culture", detail: "MDA-MB-231 and 293T cell lines" },
                { method: "Molecular cloning / DNA manipulation", detail: "Restriction cloning, Gibson assembly, Gateway cloning, bacterial transformation, plasmid purification" },
                { method: "Mutagenesis", detail: "Site-directed mutagenesis" },
                { method: "DNA analysis", detail: "NanoDrop spectrophotometry, restriction digestion, agarose gel electrophoresis, Sanger sequencing" },
                { method: "Protein interaction / analysis", detail: "Co-immunoprecipitation, Western blotting, Bradford assay" },
                { method: "Viral transduction", detail: "Lentiviral production and transduction" },
                { method: "Cell sorting", detail: "FACS" },
                ].map(({ method, detail }, i, arr) => (
                <tr key={method} style={{ borderBottom: i < arr.length - 1 ? "1px solid #eef0f2" : "none" }}>
                    <td style={{ padding: "0.9rem 1.6rem", width: "32%", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "0.9rem", color: "#1a1a2e", verticalAlign: "top" }}>{method}</td>
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
            <a href="https://github.com/marianne-guilbard/marianne-cv/raw/main/M1%20report%20-%20Marianne%20Guilbard.pdf"
              target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", color: "#2a6b7c", textDecoration: "none", borderBottom: "1px solid #c0dde3" }}>
              ↓ Download M1 Internship Report (PDF)
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