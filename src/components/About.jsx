import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import TeamImage from "../images/Afri.jpeg";



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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <section id="about" style={{ padding: isMobile ? "4rem 1.2rem" : "7rem 5rem", background: "#faf8f4" }}>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2.5rem" : "6rem", alignItems: "center" }}>
        <div style={{ position: "relative", height: isMobile ? "260px" : "460px" }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "20px", overflow: "hidden", boxShadow: "0 16px 56px rgba(0,0,0,0.13)" }}>
            <img src={TeamImage} alt="Équipe Africodex Digital" style={{ width: "100%", height: "100%", objectFit: "contain"  }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(184,134,11,0.15) 100%)", borderRadius: "20px" }} />
          </div>
        </div>
        <div>
          <SectionHeader
            label="Notre Histoire"
            title="Ancrés en Afrique,<br/>tournés vers <em style='font-family:Fraunces,serif;font-style:italic;color:#b8860b'>demain</em>"
            subtitle="Africodex Digital est née d'une conviction simple : l'Afrique mérite des solutions numériques à la hauteur de son potentiel."
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
            <AboutItem title="Expertise locale, standards globaux" desc="Les défis du marché africain compris, les meilleures pratiques internationales appliquées." />
            <AboutItem title="Équipe passionnée et engagée" desc="Des talents africains dédiés à construire des produits qui changent concrètement la vie des utilisateurs." />
            <AboutItem title="Partenariat sur le long terme" desc="Nous ne livrons pas un produit, nous bâtissons une relation. Votre succès est notre réussite." />
          </div>
        </div>
      </div>
    </section>
  );
}