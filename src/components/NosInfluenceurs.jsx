import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";

const INFLUENCEURS = [
  {
    id: 1,
    nom: "Prénom Nom",
    role: "Influenceur Tech",
    description: "Spécialiste tech et innovation africaine. Partage nos solutions auprès de sa communauté et génère de la visibilité pour nos clients.",
    reseau: "",
    abonnes: "",
    photo: null,
  },
  {
    id: 2,
    nom: "Prénom Nom",
    role: "Créateur de contenu",
    description: "Expert en contenu digital et storytelling. Présente nos réalisations avec authenticité et engage une audience qualifiée.",
    reseau: "",
    abonnes: "",
    photo: null,
  },
  {
    id: 3,
    nom: "Prénom Nom",
    role: "Entrepreneur digital",
    description: "Entrepreneur et formateur, il recommande nos services à son réseau de PME africaines cherchant à se digitaliser.",
    reseau: "",
    abonnes: "",
    photo: null,
  },
];

const InfluenceurCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1px solid ${hovered ? "#f0d9a0" : "#e5dfd3"}`,
        borderRadius: "20px",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.10)" : "0 2px 12px rgba(0,0,0,0.05)",
      }}
    >
      {/* Photo */}
      <div style={{
        height: "220px",
        background: item.photo ? `url(${item.photo}) center/cover` : "linear-gradient(135deg, #fdf6e3 0%, #f0d9a0 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative",
      }}>
        {!item.photo && (
          <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#fff", border: "3px solid #b8860b", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        )}
        <div style={{ position: "absolute", top: "12px", right: "12px",  color: "#fff", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.3rem 0.8rem", borderRadius: "100px" }}>
          {item.reseau} · {item.abonnes}
        </div>
      </div>

      {/* Contenu */}
      <div style={{ padding: "1.8rem" }}>
        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#b8860b", marginBottom: "0.4rem" }}>{item.role}</div>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#111110", marginBottom: "0.8rem" }}>{item.nom}</h3>
        <p style={{ fontSize: "0.85rem", color: "#7a7a74", lineHeight: 1.7 }}>{item.description}</p>
      </div>
    </div>
  );
};

export default function Influenceurs() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <section id="influenceurs" style={{ padding: isMobile ? "4rem 1.2rem" : "7rem 5rem", background: "#faf8f4" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3.5rem" }}>
        <SectionHeader
          label="Nos Influenceurs"
          title="Ils parleront de <em style='font-family:Fraunces,serif;font-style:italic;color:#b8860b'>vous</em>"
          subtitle="Des créateurs de contenu et entrepreneurs qui partagent notre vision du numérique africain et qui sont prêts à rendre votre business plus visible."
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "1.8rem" }}>
        {INFLUENCEURS.map(item => <InfluenceurCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}