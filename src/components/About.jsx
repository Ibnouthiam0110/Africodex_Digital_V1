import SectionHeader from "./SectionHeader";

const FloatCard = ({ style, children }) => (
  <div style={{
    position: "absolute",
    background: "#fff", border: "1px solid #e5dfd3",
    borderRadius: "16px", padding: "1.5rem",
    boxShadow: "0 8px 36px rgba(0,0,0,0.10)",
    ...style,
  }}>{children}</div>
);

const CardIcon = ({ children }) => (
  <div style={{ width: "38px", height: "38px", background: "#fdf6e3", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.8rem" }}>
    {children}
  </div>
);

const AboutItem = ({ title, desc }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", padding: "1.3rem", background: "#fff", borderRadius: "12px", border: "1px solid #e5dfd3", transition: "border-color 0.3s" }}
    onMouseEnter={e => e.currentTarget.style.borderColor = "#f0d9a0"}
    onMouseLeave={e => e.currentTarget.style.borderColor = "#e5dfd3"}
  >
    <div style={{ width: "8px", height: "8px", background: "#b8860b", borderRadius: "50%", flexShrink: 0, marginTop: "6px" }} />
    <div>
      <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111110", marginBottom: "0.25rem" }}>{title}</h4>
      <p style={{ fontSize: "0.83rem", color: "#7a7a74", lineHeight: 1.65 }}>{desc}</p>
    </div>
  </div>
);

export default function About() {
  return (
    <section id="about" style={{ padding: "7rem 5rem", background: "#faf8f4" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>

        {/* ── Visual: real photo ── */}
        <div style={{ position: "relative", height: "460px" }}>
          {/* Main photo */}
          <div style={{
            width: "100%", height: "100%",
            borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 16px 56px rgba(0,0,0,0.13)",
          }}>
            <img
              src="src/images/AFRICODEX_Image.jpeg"
              alt="Équipe Africodex Digital"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Gold overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(184,134,11,0.15) 100%)", borderRadius: "20px" }} />
          </div>

        </div>

        {/* ── Content ── */}
        <div>
          <SectionHeader
            label="Notre Histoire"
            title="Ancrés en Afrique,<br/>tournés vers <em style='font-family:Fraunces,serif;font-style:italic;color:#b8860b'>demain</em>"
            subtitle="Africodex Digital est née d'une conviction simple : l'Afrique mérite des solutions numériques à la hauteur de son potentiel. Nous combinons expertise technique et compréhension profonde des réalités locales."
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
            <AboutItem title="Expertise locale, standards globaux" desc="Les défis du marché africain compris, les meilleures pratiques internationales appliquées." />
            <AboutItem title="Équipe passionnée & engagée" desc="Des talents africains dédiés à construire des produits qui changent concrètement la vie des utilisateurs." />
            <AboutItem title="Partenariat sur le long terme" desc="Nous ne livrons pas un produit, nous bâtissons une relation. Votre succès est notre réussite." />
          </div>
        </div>

      </div>
    </section>
  );
}
