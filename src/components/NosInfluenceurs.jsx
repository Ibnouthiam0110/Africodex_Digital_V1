import { useState, useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import influenceurX from "../data/influenceurX.js";
import Leliaphoto from "../data/Leliaphoto.js";
import Fatou from "../data/Fatou.js";
import Aissatou from "../data/Aissatou.js";

const INFLUENCEURS = [
  {
    id: 1,
    nom: "Mouhamed SARR",
    role: "Influenceur Social",
    description:
      "Mouhamed Sarr est un influenceur social engagé et créateur de contenu actif sur X. À travers ses publications, il aborde des enjeux de société en suscitant la réflexion et le débat au sein de sa communauté. Par sa capacité à mobiliser, sensibiliser et fédérer autour de thématiques d’intérêt général, il contribue à amplifier la visibilité de causes et d’initiatives à portée publique et sociale.",
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
      "Lelia Sagna est une influenceuse dynamique et inspirante, active sur TikTok et Snapchat. À travers ses contenus, elle partage avec authenticité des conseils beauté ainsi que des recommandations autour de l’entrepreneuriat.Entre esthétique et ambition, Lelia incarne une nouvelle génération de créatrices qui allient style, confiance en soi et esprit business, en accompagnant sa communauté vers une meilleure version d’elle-même, tant sur le plan personnel que professionnel.",
    reseau: "TikTok",
    abonnes: "24 700 abonnés",
    photo: Leliaphoto,
    photoPosition: "center",
  },
  {
    id: 3,
    nom: "Fatou lebou Mbaye",
    role: "Créatrice de Contenu",
    description:
      "Fatou Lebou Mbaye est une influenceuse beauté et maquilleuse professionnelle reconnue, à la tête de son propre salon. Son talent et son exigence lui valent une visibilité à l’échelle africaine, avec des nominations au Rwanda et à Ouagadougou.Créative, engagée et incontournable, elle est le choix idéal pour toute marque souhaitant s’imposer dans l’univers de la beauté.",
    reseau: "TikTok",
    abonnes: "49 900 abonnés",
    photo: Fatou,
    photoPosition: "center -0%",
  },
  {
    id: 4,
    nom: "Mme Aissatou Barry",
    role: "Créatrice de Contenu",
    description:
      "Mme Aissatou Barry est une créatrice de contenu culinaire reconnue pour l’authenticité de ses plats, sa bonne humeur et sa capacité naturelle à capter l’attention de son audience. À travers ses contenus, elle met en valeur une cuisine généreuse, accessible et chaleureuse, avec un univers visuel simple, engageant et proche du quotidien. Sa manière de présenter les recettes et d’intégrer les produits avec naturel en fait un profil particulièrement intéressant pour les marques souhaitant toucher leur public de façon crédible et humaine.",
    reseau: "TikTok",
    abonnes: "180 600 abonnés",
    photo: Aissatou,
    photoPosition: "center -0%",
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
        transition: "0.3s",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 25px 60px rgba(0,0,0,0.12)"
          : "0 3px 15px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {item.reseau && (
        <div
          style={{
            position: "absolute",
            top: "1px",
            left: "0px",
            background: "#000",
            color: "#fff",
            padding: "0.3rem 0.6rem", // 🔥 réduit
            borderRadius: "0 10px 10px 0",
            display: "flex",
            alignItems: "center",
            gap: "5px", // 🔥 réduit
            fontSize: "0.75rem", // 🔥 texte plus petit
            zIndex: 3,
          }}
        >
          <BadgeIcon reseau={item.reseau} />
          <span>{item.abonnes}</span>
        </div>
      )}

      <div
        style={{
          height: "320px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #fdf6e3 0%, #f0d9a0 100%)",
        }}
      >
        <img
          src={item.photo}
          alt={item.nom}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: item.photoPosition,
          }}
        />
      </div>

      <div style={{ padding: "2.4rem" }}>
        <div style={{ color: "#b8860b", fontWeight: 700 }}>
          {item.role}
        </div>
        <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>
          {item.nom}
        </h3>
        <p style={{ color: "#7a7a74" }}>{item.description}</p>
      </div>
    </div>
  );
};

export default function Influenceurs() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 350;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section style={{ padding: "7rem 5rem", background: "#faf8f4" }}>
      <SectionHeader
        label="Nos Influenceurs"
        title="Ils parleront de vous"
        subtitle="Des créateurs engagés pour booster votre visibilité"
      />

      <div style={{ position: "relative", marginTop: "3rem" }}>
        {/* bouton gauche */}
        <button
          onClick={() => scroll("left")}
          style={{
            position: "absolute",
            left: "-10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 5,
            background: "#000",
            color: "#fff",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          ←
        </button>

        {/* scroll horizontal */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "2.2rem",
            overflowX: "auto",
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory", // 🔥 clé mobile
            paddingBottom: "10px",
          }}
        >
          {INFLUENCEURS.map((item) => (
           <div
              key={item.id}
              style={{
              minWidth: window.innerWidth < 768 ? "85%" : "320px",
                scrollSnapAlign: "start", // 🔥 aligne au début

                
              }}

            >
              
              <InfluenceurCard item={item} />
            </div>
          ))}
        </div>

        {/* bouton droite */}
        <button
          onClick={() => scroll("right")}
          style={{
            position: "absolute",
            right: "-10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 5,
            background: "#000",
            color: "#fff",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          →
        </button>
      </div>
    </section>
  );
}