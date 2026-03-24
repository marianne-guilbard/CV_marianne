import { useNavigate } from "react-router-dom";

export default function OtherExperiences() {
  const navigate = useNavigate();

  const goToBeyond = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("beyond")?.scrollIntoView({ behavior: "smooth" });
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
          .exp-sidebar { display: none !important; }
          .exp-content { margin-left: 0 !important; }
          .exp-img { width: 85% !important; }
        }

        @media (max-width: 600px) {
          .exp-img { width: 100% !important; }
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
        <button onClick={goToBeyond} style={{ ...backLinkStyle, fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1a1a2e", letterSpacing: "normal" }}>
          Marianne Guilbard
        </button>
        <button onClick={goToBeyond} style={backLinkStyle}
          onMouseEnter={e => e.currentTarget.style.borderBottomColor = "#2a6b7c"}
          onMouseLeave={e => e.currentTarget.style.borderBottomColor = "transparent"}
        >← Back to main page</button>
      </header>

      {/* Sidebar */}
      <nav className="exp-sidebar" style={{
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
          { id: "international", label: "🌍 International" },
          { id: "outreach", label: "🧬 Outreach" },
          { id: "teaching", label: "👩‍🏫 Teaching" },
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
          <button onClick={goToBeyond} style={{ ...backLinkStyle, fontFamily: "Georgia, serif" }}>
            ← Back to main page
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="exp-content" style={{ marginLeft: "200px", paddingTop: "52px" }}>

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
            <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7ecfdf", marginBottom: "0.8rem" }}>
              Beyond Research
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Professional & Volunteering Experience
            </h1>
          </div>
        </section>

        {/* Content */}
        <div style={{ padding: "3rem 4rem 5rem" }}>

          {/* International */}
          <div id="international">
            <SectionTitle>🌍 International & Coordination Experience</SectionTitle>

            <ExperienceCard
              title="CLC — Club Langues & Civilisations"
              role="Co-Head of a Linguistic Stay"
              location="Bournemouth & Oxford, UK"
              year="2019"
              description="Coordinated and supervised a cultural and language immersion programme, ensuring participant safety, logistical organisation, and an enriching educational experience in an international setting."
              skills={["Programme coordination", "Team leadership", "Intercultural communication", "Logistics management"]}
              link="https://www.clc.fr/"
              linkLabel="Learn more about CLC"
              image={`${import.meta.env.BASE_URL}CLC_picture.png`}
              imageAlt="CLC — linguistic stay"
              imageWidth="55%"
            />

            <ExperienceCard
              title="Windsor Mountain International"
              role="Camp Counselor & Science Team Co-Head"
              location="New Hampshire, USA"
              year="2018"
              description="Led and coordinated STEM-related activities within an international summer camp, fostering teamwork, scientific curiosity, and engagement among campers from diverse backgrounds."
              skills={["STEM facilitation", "Cross-cultural teamwork", "Youth engagement", "Scientific communication"]}
              link="https://windsormountain.org/"
              linkLabel="Learn more about Windsor Mountain"
              image={`${import.meta.env.BASE_URL}WM.png`}
              imageAlt="Windsor Mountain — science activities"
              imageWidth="75%"
            />
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #dde0d8", margin: "2.5rem 0" }} />

          {/* Outreach */}
          <div id="outreach">
            <SectionTitle>🧬 Science Communication & Outreach</SectionTitle>

            <ExperienceCard
              title="Opération Déclics"
              role="Speaker"
              location="Bordeaux, France"
              year="2023–2024"
              description="Presented my research to high-school students, promoting scientific curiosity, facilitating discussions on biology-related topics, and raising awareness about research careers."
              skills={["Science communication", "Public speaking", "Science outreach", "Career mentoring"]}
              link="https://www.cerclefser.org/fr/declics/"
              linkLabel="Learn more about DECLICS"
            />

            <ExperienceCard
              title="GoodPlanet Foundation"
              role="Volunteer"
              location="Paris, France"
              year="2022"
              description="Contributed to environmental awareness initiatives linking sustainability, health, and societal engagement through public outreach activities."
              skills={["Environmental awareness", "Public engagement", "Volunteering", "Sustainability"]}
              link="https://www.goodplanet.org/fr/"
              linkLabel="Learn more about GoodPlanet"
              image={`${import.meta.env.BASE_URL}Goodplanet.png`}
              imageAlt="GoodPlanet Foundation"
              imageWidth="100%"
            />
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #dde0d8", margin: "2.5rem 0" }} />

          {/* Teaching */}
          <div id="teaching">
            <SectionTitle>👩‍🏫 Teaching & Mentorship</SectionTitle>

            <ExperienceCard
              title="L'Âge d'Or"
              role="Digital Literacy Mentor"
              location="Grenoble, France"
              year="2020"
              description="Supported senior participants in developing digital skills through individualised guidance, promoting autonomy and confidence in the use of digital tools."
              skills={["Digital literacy", "Patience & pedagogy", "Individualised support", "Social engagement"]}
              link="https://www.cyberdeclic.org/"
              linkLabel="Learn more about L'Âge d'Or"
            />

            <ExperienceCard
              title="Cercle Paul Bert"
              role="Academic Mentor"
              location="Rennes, France"
              year="2018"
              description="Provided academic support and mentorship to middle- and high-school students, contributing to educational follow-up and academic confidence."
              skills={["Academic tutoring", "Mentoring", "Communication", "Educational support"]}
              link="https://cerclepaulbert.asso.fr/"
              linkLabel="Learn more about CPB"
            />
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #dde0d8", margin: "2.5rem 0" }} />

          {/* Footer */}
          <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#999" }}>© 2026 Marianne Guilbard</span>
            <button onClick={goToBeyond} style={{ ...backLinkStyle, fontFamily: "Georgia, serif", fontSize: "0.78rem", borderBottom: "1px solid #c0dde3" }}>
              ← Back to main page
            </button>
          </footer>

        </div>
      </main>
    </div>
  );
}

function ExperienceCard({ title, role, location, year, description, skills, link, linkLabel, image, imageAlt, imageWidth = "100%" }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #dde6e8",
      borderLeft: "3px solid #2a6b7c",
      borderRadius: "2px",
      padding: "1.4rem 1.6rem",
      marginBottom: "1.2rem",
      transition: "box-shadow 0.2s",
    }}
    onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(42,107,124,0.1)"}
    onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.8rem" }}>
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "0.2rem" }}>{title}</h3>
          <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.88rem", color: "#2a6b7c" }}>{role}</div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1git initrem", fontWeight: 700, color: "#2a6b7c" }}>{year}</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "0.92rem", color: "#888", marginTop: "0.2rem" }}>{location}</div>
        </div>
      </div>

      {/* Description */}
      <p style={{ fontFamily: "Georgia, serif", fontSize: "0.92rem", lineHeight: 1.75, color: "#333", marginBottom: "1rem" }}>
        {description}
      </p>

      {/* Skills */}
      <div style={{ marginBottom: "1rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {skills.map(skill => (
          <span key={skill} style={{
            display: "inline-block",
            padding: "0.15rem 0.65rem",
            fontSize: "0.7rem",
            fontFamily: "'Source Serif 4', Georgia, serif",
            letterSpacing: "0.06em",
            background: "#e8f4f6",
            color: "#2a6b7c",
            borderRadius: "2px",
            border: "1px solid #c0dde3",
          }}>{skill}</span>
        ))}
      </div>

      {/* Link */}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{
          fontFamily: "Georgia, serif", fontSize: "0.85rem",
          color: "#2a6b7c", textDecoration: "none",
          borderBottom: "1px solid #c0dde3", transition: "color 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.color = "#1a1a2e"}
        onMouseLeave={e => e.currentTarget.style.color = "#2a6b7c"}
        >↗ {linkLabel}</a>
      )}
      {/* Image */}
      {image && (
        <div style={{ marginTop: "1.2rem", textAlign: "center" }}>
          <img src={image} alt={imageAlt} className="exp-img" style={{
            width: "70%",
            borderRadius: "4px",
            border: "1px solid #dde6e8",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }} />
        </div>
      )}
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