import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import influenceurX from "../data/influenceurX.js";
import Leliaphoto from "../data/Leliaphoto.js";

const INFLUENCEURS = [
  {
    id: 1,
    nom: "Mouhamed SARR",
    role: "Influenceur Social",
    description:
      "Mouhamed Sarr est un influenceur social engagé et créateur de contenu actif sur X. À travers ses publications, il aborde des enjeux de société en suscitant la réflexion et le débat au sein de sa communauté. Par sa capacité à mobiliser, sensibiliser et fédérer autour de thématiques d'intérêt général, il contribue à amplifier la visibilité de causes et d'initiatives à portée publique et sociale.",
    reseau: "X",
    abonnes: "361 848 abonnés",
    photo: influenceurX,
    photoPosition: "center -0%",
  },
  {
    id: 2,
    nom: "Lelia Sagna",
    role: "Créatrice de contenu",
    description:
      "Lelia Sagna est une influenceuse dynamique et inspirante, active sur TikTok et Snapchat. À travers ses contenus, elle partage avec authenticité des conseils beauté ainsi que des recommandations autour de l'entrepreneuriat. Entre esthétique et ambition, Lelia incarne une nouvelle génération de créatrices qui allient style, confiance en soi et esprit business, en accompagnant sa communauté vers une meilleure version d'elle-même, tant sur le plan personnel que professionnel.",
    reseau: "TikTok",
    abonnes: "14 700 abonnés",
    photo: Leliaphoto,
    photoPosition: "center", 
  },
  {
    id: 3,
    nom: "Prénom Nom",
    role: "Entrepreneur digital",
    description:
      "Entrepreneur et formateur, il recommande nos services à son réseau de PME africaines cherchant à se digitaliser.",
    reseau: "",
    abonnes: "",
    photo: null,
  },
];

const BadgeIcon = ({ reseau }) => {
  if (reseau === "X") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2H21l-6.56 7.49L22 22h-6.828l-5.345-6.99L3.8 22H1l7.02-8.02L2 2h6.828l4.82 6.3L18.244 2z" />
      </svg>
    );
  }
  if (reseau === "TikTok") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    );
  }
  return null;
};

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
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 25px 60px rgba(0,0,0,0.12)"
          : "0 3px 15px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Badge réseau */}
      {item.reseau && (
        <div
          style={{
            position: "absolute",
            top: "1px",
            right: "0px",
            background: "#000",
            color: "#fff",
            fontSize: "0.85rem",
            fontWeight: 700,
            padding: "0.5rem 1rem",
            borderRadius: "10px 0 0 10px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            zIndex: 3,
            boxShadow: "-4px 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <BadgeIcon reseau={item.reseau} />
          <span>{item.abonnes}</span>
        </div>
      )}

      {/* Zone Photo */}
      <div
        style={{
          height: "320px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #fdf6e3 0%, #f0d9a0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {item.photo ? (
          <img
            src={item.photo}
            alt={item.nom}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: item.photoPosition || "center top",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: "#fff",
              border: "3px solid #b8860b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b8860b"
              strokeWidth="1.5"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        )}
      </div>

      {/* Zone Texte */}
      <div style={{ padding: "2.4rem" }}>
        <div
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#b8860b",
            marginBottom: "0.5rem",
          }}
        >
          {item.role}
        </div>

        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#111110",
            marginBottom: "1rem",
          }}
        >
          {item.nom}
        </h3>

        <p
          style={{
            fontSize: "1rem",
            color: "#7a7a74",
            lineHeight: 1.8,
          }}
        >
          {item.description}
        </p>
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
    <section
      id="influenceurs"
      style={{
        padding: isMobile ? "4rem 1.2rem" : "7rem 5rem",
        background: "#faf8f4",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "3.5rem",
        }}
      >
        <SectionHeader
          label="Nos Influenceurs"
          title="Ils parleront de <em style='font-family:Fraunces,serif;font-style:italic;color:#b8860b'>vous</em>"
          subtitle="Des créateurs de contenu et entrepreneurs qui partagent notre vision du numérique africain et prêts à rendre votre business plus visible."
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: "2.2rem",
        }}
      >
        {INFLUENCEURS.map((item) => (
          <InfluenceurCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}