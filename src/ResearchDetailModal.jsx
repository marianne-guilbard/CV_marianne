import { useEffect } from "react";

const linkStyle = {
  color: "#2a6b7c",
  textDecoration: "none",
  borderBottom: "1px solid #c0dde3",
  transition: "color 0.2s",
};

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={linkStyle}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a2e")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#2a6b7c")}
    >
      {children} ↗
    </a>
  );
}
export { ExternalLink };

function ModalSectionTitle({ children }) {
  return (
    <div style={{ marginBottom: "1rem", marginTop: "2.2rem" }}>
      <h3
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "#1a1a2e",
          letterSpacing: "-0.01em",
          marginBottom: "0.5rem",
        }}
      >
        {children}
      </h3>
      <div style={{ width: "2.5rem", height: "2px", background: "#2a6b7c" }} />
    </div>
  );
}

function Card({ children, style = {} }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #dde6e8",
        borderLeft: "3px solid #2a6b7c",
        borderRadius: "2px",
        padding: "1.3rem 1.5rem",
        marginBottom: "1.1rem",
        fontFamily: "Georgia, serif",
        fontSize: "0.95rem",
        lineHeight: 1.8,
        color: "#333",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
export { Card };

function MethodsTable({ rows }) {
  return (
    <Card style={{ padding: 0, marginBottom: "1rem" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {rows.map(({ method, detail }, i) => (
            <tr
              key={method}
              style={{
                borderBottom: i < rows.length - 1 ? "1px solid #eef0f2" : "none",
              }}
            >
              <td
                style={{
                  padding: "0.85rem 1.4rem",
                  width: "30%",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  color: "#1a1a2e",
                  verticalAlign: "top",
                }}
              >
                {method}
              </td>
              <td
                style={{
                  padding: "0.85rem 1.4rem",
                  fontFamily: "Georgia, serif",
                  fontSize: "0.9rem",
                  color: "#444",
                  verticalAlign: "top",
                  borderLeft: "1px solid #eef0f2",
                }}
              >
                {detail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

function GraphicalAbstract({ src, alt, caption, description, width = "85%" }) {
  return (
    <div style={{ textAlign: "center", margin: "1.2rem 0" }}>
      <div style={{ display: "inline-block", width }}>
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            borderRadius: "4px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            border: "1px solid #dde6e8",
            display: "block",
          }}
        />
        {caption && (
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "0.92rem",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.6,
              margin: "1.1rem 0 0.5rem",
              textAlign: "center",
            }}
          >
            {caption}
          </p>
        )}
        {description && (
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.88rem",
              color: "#555",
              fontStyle: "italic",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}


/* ----------------------------------------------------------------- */
/* Modal shell                                                        */
/* ----------------------------------------------------------------- */

export default function ResearchDetailModal({ project, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(26,26,46,0.55)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#f7f5f0",
          width: "min(1150px, 96%)",
          maxHeight: "97vh",
          overflowY: "auto",
          borderRadius: "6px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
            padding: "2.2rem 2.6rem",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "1.2rem",
              right: "1.4rem",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              fontSize: "1.1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
          >
            ✕
          </button>
          <div
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "0.8rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#7ecfdf",
              marginBottom: "0.7rem",
              paddingRight: "2.5rem",
            }}
          >
            {project.emoji} {project.eyebrow}
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              paddingRight: "2.5rem",
            }}
          >
            {project.title}
          </h2>
        </div>

        {/* Body */}
        <div style={{ padding: "0.5rem 2.6rem 2.6rem" }}>
          <ModalSectionTitle>🏛️ Institute & Team</ModalSectionTitle>
          {project.institute}

          <ModalSectionTitle>👤 Supervisor</ModalSectionTitle>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", color: "#333" }}>
            <ExternalLink href={project.supervisorLink}>{project.supervisor}</ExternalLink>
          </p>

          <ModalSectionTitle>🧪 Project Overview</ModalSectionTitle>
          <Card>
            <p style={{ textAlign: "justify" }}>{project.overview}</p>
          </Card>

          {project.abstract && (
            <>
              <ModalSectionTitle>🧬 Graphical Abstract</ModalSectionTitle>
              <GraphicalAbstract {...project.abstract} />
            </>
          )}

          <ModalSectionTitle>🔬 Methods</ModalSectionTitle>
          {project.methodsGroups.map((group) => (
            <div key={group.label} style={{ marginBottom: "0.5rem" }}>
              {project.methodsGroups.length > 1 && (
                <div
                  style={{
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#2a6b7c",
                    marginBottom: "0.6rem",
                  }}
                >
                  {group.label}
                </div>
              )}
              <MethodsTable rows={group.rows} />
            </div>
          ))}

          <ModalSectionTitle>📄 {project.document.label}</ModalSectionTitle>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: 1.8, color: "#333", marginBottom: "0.8rem" }}>
            {project.document.intro}
          </p>
          <a
            href={project.document.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", color: "#2a6b7c", textDecoration: "none", borderBottom: "1px solid #c0dde3" }}
          >
            {project.document.kind === "download" ? "↓" : "↗"} {project.document.linkLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
