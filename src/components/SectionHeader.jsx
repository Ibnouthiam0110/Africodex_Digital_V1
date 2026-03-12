export default function SectionHeader({ label, title, subtitle, centered = false }) {
  return (
    <div style={{
      textAlign: centered ? "center" : "left",
      maxWidth: centered ? "550px" : undefined,
      margin: centered ? "0 auto 1rem" : undefined,
      padding: "0 1rem",          // ✅ évite que le texte touche les bords
      boxSizing: "border-box",    // ✅ padding inclus dans la largeur
      width: "100%",              // ✅ ne dépasse jamais l'écran
    }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "0.5rem",
        fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em",
        textTransform: "uppercase", color: "#b8860b", marginBottom: "1rem",
      }}>
        <span style={{ width: "18px", height: "2px", background: "#b8860b", borderRadius: "2px", display: "inline-block" }} />
        {label}
      </div>
      <h2 style={{
        fontSize: "clamp(1.5rem, 5vw, 3rem)", // ✅ min réduit pour petit écran
        fontWeight: 800,
        color: "#111110", lineHeight: 1.1, marginBottom: "1.2rem",
        wordBreak: "break-word",  // ✅ les longs mots ne débordent pas
      }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p style={{
          fontSize: "clamp(0.875rem, 2.5vw, 1rem)", // ✅ s'adapte au mobile
          color: "#7a7a74", lineHeight: 1.8,
          maxWidth: "500px",
          margin: centered ? "0 auto" : undefined, // ✅ centré si besoin
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}