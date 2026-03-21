import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import M1Internship from "./M1Internship.jsx";
import M2Internship from "./M2Internship.jsx";
import PhDThesis from "./PhDThesis.jsx";
import OtherExperiences from "./OtherExperiences.jsx";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "funding", label: "Funding" },
  { id: "publications", label: "Publications" },
  { id: "conferences", label: "Conferences" },
  { id: "teaching", label: "Teaching" },
  { id: "education", label: "Education" },
  { id: "beyond", label: "Beyond Research" },
  { id: "contact", label: "Contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const observers = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);
  return active;
}

function SectionTitle({ children }) {
  return (
    <div style={{ marginBottom: "2rem", textAlign: "left" }}>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "1.6rem",
        fontWeight: 700,
        color: "#1a1a2e",
        letterSpacing: "-0.01em",
        marginBottom: "0.5rem",
      }}>{children}</h2>
      <div style={{ width: "3rem", height: "2px", background: "#2a6b7c" }} />
    </div>
  );
}

function Tag({ children }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "0.15rem 0.65rem",
      fontSize: "0.7rem",
      fontFamily: "'Source Serif 4', Georgia, serif",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      background: "#e8f4f6",
      color: "#2a6b7c",
      borderRadius: "2px",
      border: "1px solid #c0dde3",
      marginRight: "0.4rem",
      marginBottom: "0.3rem",
    }}>{children}</span>
  );
}

function ResearchCard({ emoji, title, institution, supervisor, supervisorLink, project, projectLink, period }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #dde6e8",
      borderLeft: "3px solid #2a6b7c",
      padding: "1.4rem 1.6rem",
      marginBottom: "1.2rem",
      borderRadius: "2px",
      transition: "box-shadow 0.2s",
    }}
    onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(42,107,124,0.1)"}
    onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem" }}>
        <span style={{ fontSize: "1.3rem", marginTop: "0.1rem" }}>{emoji}</span>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "0.3rem" }}>{title}</h3>
            {period && <Tag>{period}</Tag>}
          </div>
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1rem", color: "#4a5568", marginBottom: "0.5rem" }}>
            {institution}
          </p>
          {supervisor && (
            <p style={{ fontSize: "0.88rem", color: "#666", marginBottom: "0.3rem", fontFamily: "Georgia, serif" }}>
              Supervisor: <a href={supervisorLink} target="_blank" rel="noopener noreferrer" style={{ color: "#2a6b7c", textDecoration: "none", borderBottom: "1px solid #c0dde3" }}>{supervisor}</a>
            </p>
          )}
          {project && (
            <p style={{ fontSize: "0.88rem", color: "#666", fontFamily: "Georgia, serif" }}>
              Project:{" "}
              {projectLink
                ? <Link to={projectLink} style={{ color: "#2a6b7c", textDecoration: "none", borderBottom: "1px solid #c0dde3" }}>{project}</Link>
                : <span style={{ color: "#444" }}>{project}</span>
              }
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function AwardCard({ year, title, org, detail }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "4rem 1fr",
      gap: "1rem",
      padding: "1.2rem 0",
      borderBottom: "1px solid #eef0f2",
    }}>
      <div style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "1rem",
        fontWeight: 700,
        color: "#2a6b7c",
        paddingTop: "0.15rem",
        letterSpacing: "0.05em",
      }}>{year}</div>
      <div>
        <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "0.2rem" }}>{title}</div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "#2a6b7c", marginBottom: "0.2rem" }}>{org}</div>
        {detail && <div style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "#666", fontStyle: "italic" }}>{detail}</div>}
      </div>
    </div>
  );
}

function PubCard({ title, href }) {
  return (
    <div style={{
      padding: "1rem 0",
      borderBottom: "1px solid #eef0f2",
      display: "flex",
      gap: "0.8rem",
      alignItems: "flex-start",
    }}>
      <span style={{ color: "#2a6b7c", fontSize: "1rem", marginTop: "0.1rem", flexShrink: 0 }}>📄</span>
      <a href={href} target="_blank" rel="noopener noreferrer" style={{
        fontFamily: "Georgia, serif",
        fontSize: "0.96rem",
        color: "#1a1a2e",
        textDecoration: "none",
        lineHeight: 1.5,
        borderBottom: "1px solid transparent",
        transition: "border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={e => { e.currentTarget.style.color = "#2a6b7c"; e.currentTarget.style.borderBottomColor = "#2a6b7c"; }}
      onMouseLeave={e => { e.currentTarget.style.color = "#1a1a2e"; e.currentTarget.style.borderBottomColor = "transparent"; }}
      >{title}</a>
    </div>
  );
}

function ConfEntry({ title, venue, topic }) {
  return (
    <div style={{ padding: "0.9rem 0", borderBottom: "1px solid #eef0f2" }}>
      <div style={{ fontFamily: "Georgia, serif", fontSize: "0.96rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "0.2rem" }}>{title}</div>
      <div style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "#2a6b7c", marginBottom: "0.2rem" }}>{venue}</div>
      {topic && <div style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "#555", fontStyle: "italic" }}>"{topic}"</div>}
    </div>
  );
}

function EduCard({ degree, institution, years, description, link }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #dde6e8",
      borderRadius: "2px",
      marginBottom: "1rem",
      overflow: "hidden",
    }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          padding: "1.2rem 1.5rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          background: open ? "#f4f9fa" : "#fff",
          transition: "background 0.2s",
        }}
      >
        <div>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "0.25rem" }}>{degree}</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "#2a6b7c" }}>{institution}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.4rem", flexShrink: 0, marginLeft: "1rem" }}>
          <Tag>{years}</Tag>
          <span style={{ color: "#2a6b7c", fontSize: "0.8rem" }}>{open ? "▲" : "▼"}</span>
        </div>
      </div>
      {open && (
        <div style={{ padding: "0 1.5rem 1.2rem", borderTop: "1px solid #eef0f2" }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.94rem", color: "#444", lineHeight: 1.7, marginTop: "1rem" }}>{description}</p>
          {link && <a href={link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "#2a6b7c", textDecoration: "none", borderBottom: "1px solid #c0dde3" }}>View Programme →</a>}
        </div>
      )}
    </div>
  );
}

function CV() {
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: "#f7f5f0", minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; font-size: 106%; }
        body { background: #f7f5f0; font-size: 17px; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f0ede6; }
        ::-webkit-scrollbar-thumb { background: #2a6b7c; border-radius: 3px; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.15s ease both; }
     @media (max-width: 900px) {
        .sidebar { display: none !important; }
        .main-content { margin-left: 0 !important; }
        .mobile-nav { display: flex !important; }
        .edu-grid { grid-template-columns: 1fr !important; }
        .about-grid { grid-template-columns: 1fr !important; }
        .about-img { display: block; margin: 1.5rem auto 0; width: 180px !important; }
        .edu-img { display: block; margin: 1.5rem auto 0; width: 60% !important; }
      }

      @media (max-width: 600px) {
        .about-grid { grid-template-columns: 1fr !important; }
        .about-img { display: block; margin: 1.5rem auto 0; width: 180px !important; }
      }
      `}</style>

      {/* Top bar */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(247,245,240,0.96)", backdropFilter: "blur(8px)",
        borderBottom: "1px solid #dde0d8",
        display: "flex", alignItems: "center", justifyContent: "flex-end",
        padding: "0 2rem", height: "52px",
      }}>
        <button
          className="mobile-nav"
          onClick={() => setMenuOpen(o => !o)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", fontSize: "1.3rem", color: "#1a1a2e" }}
        >☰</button>
      </header>

      {/* Mobile Nav dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "52px", left: 0, right: 0, zIndex: 99,
          background: "#f7f5f0", borderBottom: "1px solid #dde0d8",
          padding: "0.5rem 0",
        }}>
          {NAV_ITEMS.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "0.6rem 2rem",
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "Georgia, serif", fontSize: "0.9rem",
              color: active === id ? "#2a6b7c" : "#444",
              fontWeight: active === id ? 600 : 400,
            }}>{label}</button>
          ))}
        </div>
      )}

      {/* Sidebar */}
      <nav className="sidebar" style={{
        position: "fixed", top: "52px", left: 0, bottom: 0, width: "200px",
        padding: "2.5rem 0 2rem 0",
        borderRight: "1px solid #dde0d8",
        background: "#f7f5f0",
        overflowY: "auto",
        zIndex: 50,
      }}>
        <div style={{ padding: "0 1.5rem 1.5rem", borderBottom: "1px solid #eef0f2", marginBottom: "1.5rem" }}>
          <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#999" }}>Contents</div>
        </div>
        {NAV_ITEMS.map(({ id, label }) => (
          <button key={id} onClick={() => scrollTo(id)} style={{
            display: "block", width: "100%", textAlign: "left",
            padding: "0.5rem 1.5rem",
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "Georgia, serif", fontSize: "0.92rem",
            color: active === id ? "#2a6b7c" : "#555",
            fontWeight: active === id ? 600 : 400,
            borderLeft: active === id ? "2px solid #2a6b7c" : "2px solid transparent",
            transition: "all 0.15s",
          }}>{label}</button>
        ))}
        <div style={{ padding: "2rem 1.5rem 0", marginTop: "1rem", borderTop: "1px solid #eef0f2" }}>
          <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: "0.8rem" }}>Links</div>
          {[
            { label: "Google Scholar", href: "https://scholar.google.com/citations?user=8LgCwdwAAAAJ&hl=fr" },
            { label: "ResearchGate", href: "https://www.researchgate.net/profile/Marianne-Guilbard" },
            { label: "Email", href: "mailto:marianne.guilbard@gmail.com" },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
              display: "block", fontFamily: "Georgia, serif", fontSize: "0.8rem",
              color: "#2a6b7c", textDecoration: "none", padding: "0.3rem 0",
              borderBottom: "1px solid transparent", transition: "border-color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.borderBottomColor = "#2a6b7c"}
            onMouseLeave={e => e.currentTarget.style.borderBottomColor = "transparent"}
            >↗ {label}</a>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <main className="main-content" style={{ marginLeft: "200px", paddingTop: "52px" }}>

        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
          padding: "2.5rem 4rem",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px", pointerEvents: "none",
          }} />
          <div style={{ position: "relative", textAlign: "left" }}>
            <h1 className="fade-up" style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 700, color: "#fff", lineHeight: 1.15,
              marginBottom: "0.9rem", letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}>
              Marianne Guilbard
            </h1>
            <div className="fade-up-2" style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "1.05rem", letterSpacing: "0.08em",
              color: "#7ecfdf", fontWeight: 300,
            }}>
              PhD · Life Sciences
            </div>
          </div>
        </section>

        <div style={{ padding: "0 4rem 4rem" }}>

        {/* About */}
      <section id="about" style={{ paddingTop: "4rem" }}>
        <div className="about-grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr auto", 
          gap: "3rem", 
          alignItems: "center"  
        }}>
          <div>
            <SectionTitle>About Me</SectionTitle>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: 1.8, color: "#333", marginBottom: "1rem" , textAlign: "justify"}}>
              My research interests focus on cellular adaptation mechanisms under stress conditions, particularly <strong>endoplasmic reticulum (ER) stress</strong>, <strong>unfolded protein response (UPR) signalling</strong>, and proteostasis regulation in pathological contexts.
            </p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: 1.8, color: "#333", marginBottom: "1rem" , textAlign: "justify"}}>
              I am especially interested in how stress-adaptive pathways shape cellular plasticity and functional remodelling in diseased tissues. More broadly, I aim to investigate how fundamental stress response mechanisms can be leveraged to better understand pathological progression and identify new points of therapeutic vulnerability.
            </p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: 1.8, color: "#333" , textAlign: "justify"}}>
              I am currently <strong>seeking postdoctoral opportunities</strong> to expand my expertise, address new biological questions, and contribute to collaborative research environments.
            </p>
          </div>
          <img
            className="about-img"
            src={`${import.meta.env.BASE_URL}image_intro.jpg`}
            alt="Marianne Guilbard"
            style={{
              width: "220px",
              height: "auto",
              objectFit: "contain",
              flexShrink: 0,
              border: "none",
              boxShadow: "none",
              borderRadius: "2px",
            }}
          />
        </div>
      </section>

          {/* Research */}
          <section id="research" style={{ paddingTop: "4rem" }}>
            <SectionTitle>Research Experience</SectionTitle>
            <ResearchCard
              emoji="🎓"
              title="PhD Position"
              institution="University of Bordeaux · Institut Bergonié · BRIC"
              supervisor="Dr. Frédéric Delom"
              supervisorLink="https://www.researchgate.net/profile/Frederic-Delom"
              project="Study of the functions of the secreted protein disulfide isomerase, AGR2, in tumor adaptation"
              projectLink="/phd-thesis"
              period="02/23 – 02/26"
            />
            <ResearchCard
              emoji="🧫"
              title="Master 2 Internship"
              institution="University of Bordeaux · Institut Bergonié · BRIC"
              supervisor="Dr. Frédéric Delom"
              supervisorLink="https://www.researchgate.net/profile/Frederic-Delom"
              project="Role of AGR2 in Therapy-Induced Senescence in Breast Cancer"
              projectLink="/m2-internship"
              period="01/22 – 01/23"
            />
            <ResearchCard
              emoji="🧫"
              title="Master 1 Internship"
              institution="University of Grenoble Alpes · IAB"
              supervisor="Dr. Nicolas Reynoird"
              supervisorLink="https://www.researchgate.net/profile/Nicolas-Reynoird-2"
              project="Lysine methylation-based signalling in triple-negative breast cancer"
              projectLink="/m1-internship"
              period="03/21 – 07/21"
            />
          </section>

          {/* Funding */}
          <section id="funding" style={{ paddingTop: "4rem" }}>
            <SectionTitle>Funding & Awards</SectionTitle>
            <AwardCard year="2025" title="FEBS Travel Grant" org="Federation of European Biochemical Societies" detail="Awarded to attend and present research at the FEBS-IUBMB-ENABLE conference, Glasgow, UK." />
            <AwardCard year="2023" title="Best Poster Award" org="14th International Calreticulin Workshop · Saint-Malo, France" detail='"AGR2: A link between ER proteostasis and cancer proliferation"' />
            <AwardCard year="2023" title="CIFRE Doctoral Fellowship" org="ANRT & Thabor Therapeutics" detail="Industrial–academic grant supporting a collaborative PhD between an academic research laboratory and a pharmaceutical partner." />
            <AwardCard year="2020" title="Erasmus+ Mobility Scholarship" org="European Commission" detail="Awarded for a full academic year of international study at the University of Galway, Ireland." />
          </section>

          {/* Publications */}
          <section id="publications" style={{ paddingTop: "4rem" }}>
            <SectionTitle>Publications</SectionTitle>
            <PubCard title="PhD Thesis — Compartmentalised functions of AGR2 in cancer progression" href="https://theses.hal.science/tel-05558177" />
            <PubCard title="Modulation of PDI Functions by Localization: The Example of the Anterior Gradient Family" href="https://doi.org/10.1089/ars.2024.0561" />
            <PubCard title="Endoplasmic Reticulum Homeostasis — From Molecules to Organisms: Report on the 14th International Calreticulin Workshop" href="https://doi.org/10.1111/jcmm.17840" />
          </section>

          {/* Conferences */}
          <section id="conferences" style={{ paddingTop: "4rem" }}>
            <SectionTitle>Conferences</SectionTitle>
            <div style={{ background: "#fff", border: "1px solid #dde6e8", borderLeft: "3px solid #2a6b7c", borderRadius: "2px", padding: "1.4rem 1.6rem", marginBottom: "1.2rem" }}>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "0.3rem" }}>🗣️ Oral Communications</h3>
              <div style={{ width: "2rem", height: "1px", background: "#2a6b7c", marginBottom: "1.2rem" }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
                <div>
                  <div style={{ marginBottom: "0.8rem" }}><Tag>International</Tag></div>
                  <ConfEntry title="3rd Bordeaux Cancer Research Meeting" venue="Bordeaux, France · October 2024" topic="Endoplasmic reticulum proteostasis in high grade serous ovarian cancer" />
                  <ConfEntry title="ENLIGHT Congress" venue="Bordeaux, France · September 2023" topic="AGR2 & Gynecological cancers" />
                </div>
                <div>
                  <div style={{ marginBottom: "0.8rem" }}><Tag>National</Tag></div>
                  <ConfEntry title="BRIC Scientific Seminar" venue="Bordeaux, France · January 2026" topic="Complementary intra- and extracellular activities of the protein disulfide isomerase AGR2 in tumorigenesis" />
                  <ConfEntry title="Biological and Medical Sciences Department Annual Day" venue="Bordeaux, France · December 2024" />
                  <ConfEntry title="BRIC Scientific Seminar" venue="Bordeaux, France · December 2026" topic="Endoplasmic reticulum proteostasis in high grade serous ovarian cancer" />
                </div>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde6e8", borderLeft: "3px solid #2a6b7c", borderRadius: "2px", padding: "1.4rem 1.6rem" }}>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "0.3rem" }}>📌 Poster Presentations</h3>
              <div style={{ width: "2rem", height: "1px", background: "#2a6b7c", marginBottom: "1.2rem" }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
                <div>
                  <div style={{ marginBottom: "0.8rem" }}><Tag>International</Tag></div>
                  <ConfEntry title="5th Endoplasmic Reticulum International Symposium" venue="Paris, France · October 2025" topic="Extracellular AGR2 enhances protein synthesis and supports tumorigenic behaviours" />
                  <ConfEntry title="FEBS-IUBMB-ENABLE Conference" venue="Glasgow, UK · September 2025" topic="Bridging Minds: Interdisciplinary research for the future of life sciences" />
                  <ConfEntry title="14th International Calreticulin Workshop" venue="Saint-Malo, France · May 2023" topic="AGR2: A link between ER proteostasis and cancer proliferation" />
                </div>
                <div>
                  <div style={{ marginBottom: "0.8rem" }}><Tag>National</Tag></div>
                  <ConfEntry title="Biological and Medical Sciences Department Annual Day" venue="Bordeaux, France · December 2024" />
                  <ConfEntry title="Biological and Medical Sciences Department Annual Day" venue="Bordeaux, France · December 2023" />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
              <img
                src={`${import.meta.env.BASE_URL}image_conf.png`}
                alt="Conference presentations"
                style={{ width: "100%", borderRadius: "4px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #dde6e8" }}
              />
            </div>
          </section>

          {/* Teaching */}
          <section id="teaching" style={{ paddingTop: "4rem" }}>
            <SectionTitle>Teaching & Mentorship</SectionTitle>
            <ResearchCard
              emoji="🤝"
              title="Mentor — International Internship Exchange Programme"
              institution="Mentorship of an international pharmacy student during a research internship"
              period="June – July 2025"
            />
            <ResearchCard
              emoji="🎤"
              title="Guest Lecturer — Metastatic Dissemination"
              institution="5th-year pharmacy students · University of Bordeaux Pharmacy Curriculum"
              period="December 2024"
            />
          </section>

        {/* Education */}
          <section id="education" style={{ paddingTop: "4rem" }}>
            <SectionTitle>Education</SectionTitle>
            <EduCard
              degree="PhD in Life Sciences"
              institution="University of Bordeaux, France"
              years="2023–2026"
              description="This PhD represented a meaningful step in my academic journey, undertaken to consolidate my training through long-term immersion in research and to develop genuine scientific independence. The doctoral project gave me the opportunity to fully integrate the knowledge and skills built during my Bachelor's and Master's degrees — from experimental design to critical data analysis and scientific communication. Through sustained involvement in a complete research cycle, from conceptualisation to publication, I was able to structure and disseminate scientific results and grow into a more autonomous and confident researcher."
            />
            <EduCard
              degree="Master's in Physiology, Epigenetics, Differentiation & Cancer"
              institution="University of Grenoble Alpes, France"
              years="2020–2022"
              description="I pursued this Master's degree to deepen my understanding of advanced biological mechanisms within a fully English-taught curriculum designed for international research environments. The programme combined in-depth coursework with rigorous examinations and oral presentations, which helped me develop critical thinking, scientific autonomy, and clear scientific communication. This training gave me a strong methodological and conceptual foundation for tackling complex biological questions and ultimately prepared me to move toward doctoral-level research."
              link="https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-biologie-IAQKB0GE/parcours-physiology-epigenetics-differentiation-and-cancer-2e-annee-IBAVFFMU.html"
            />
            <EduCard
              degree="Bachelor's in Cellular Biology, Genetics, Microbiology & Animal Physiology"
              institution="University of Rennes 1, France · Erasmus+ at University of Galway, Ireland"
              years="2017–2020"
              description="I chose this Bachelor's degree for its broad and integrative approach to the life sciences, which offered me a wide range of courses spanning cellular biology, genetics, microbiology, and physiology. Courses were conducted entirely in English, providing early immersion in scientific English. The programme also gave me the opportunity to complete my final year abroad through Erasmus+, an experience that fostered my adaptability, scientific openness, and early exposure to diverse research and teaching cultures."
              link="https://sve.univ-rennes.fr/undergraduate-exchange-program-molecular-and-cellular-biology-and-physiology#p-462"
            />
           <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <img
            className="edu-img"
            src={`${import.meta.env.BASE_URL}image_study.png`}
            alt="Academic journey"
            style={{ width: "40%", borderRadius: "4px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #dde6e8" }}
          />
        </div>
          </section>

          {/* Beyond Research */}
          <section id="beyond" style={{ paddingTop: "4rem" }}>
            <SectionTitle>Beyond Research</SectionTitle>
            <div style={{
              background: "#fff", border: "1px solid #dde6e8",
              borderLeft: "3px solid #2a6b7c", borderRadius: "2px",
              padding: "1.8rem 2rem",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              gap: "2rem", flexWrap: "wrap",
              transition: "box-shadow 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(42,107,124,0.1)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: 1.8, color: "#333" }}>
                Beyond the laboratory, I have engaged in <strong>international coordination</strong>, <strong>science outreach</strong>, and <strong>educational mentoring</strong> activities, experiences that have shaped my interpersonal skills, cross-cultural awareness, and commitment to science communication.
              </p>
              <Link to="/other-experiences" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                flexShrink: 0, fontFamily: "Georgia, serif", fontSize: "0.88rem",
                color: "#2a6b7c", textDecoration: "none",
                padding: "0.6rem 1.2rem", border: "1px solid #c0dde3",
                borderRadius: "2px", transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#e8f4f6"; e.currentTarget.style.borderColor = "#2a6b7c"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#c0dde3"; }}
              >Discover my other experiences →</Link>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <SectionTitle>Contact</SectionTitle>
            <div style={{ background: "#1a1a2e", padding: "3rem", borderRadius: "2px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <div>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", marginBottom: "0.8rem" }}>
                  Open to Postdoctoral Opportunities
                </p>
                <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>
                  Looking forward to exciting collaborations and new research adventures. Let's connect!
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", justifyContent: "center" }}>
                {[
                  { label: "📧 Email", href: "mailto:marianne.guilbard@gmail.com" },
                  { label: "🔗 Google Scholar", href: "https://scholar.google.com/citations?user=8LgCwdwAAAAJ&hl=fr" },
                  { label: "🔗 ResearchGate", href: "https://www.researchgate.net/profile/Marianne-Guilbard" },
                ].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: "Georgia, serif", fontSize: "0.88rem",
                    color: "#7ecfdf", textDecoration: "none",
                    padding: "0.6rem 1rem", border: "1px solid rgba(126,207,223,0.3)",
                    borderRadius: "2px", transition: "background 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(126,207,223,0.08)"; e.currentTarget.style.borderColor = "#7ecfdf"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(126,207,223,0.3)"; }}
                  >{label}</a>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer style={{ borderTop: "1px solid #dde0d8", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#999" }}>© 2026 Marianne Guilbard</span>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#bbb" }}>Built with React · Hosted on GitHub Pages</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CV />} />
      <Route path="/m1-internship" element={<M1Internship />} />
      <Route path="/m2-internship" element={<M2Internship />} />
      <Route path="/phd-thesis" element={<PhDThesis />} />
      <Route path="/other-experiences" element={<OtherExperiences />} />
    </Routes>
  );
}