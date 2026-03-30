import { useState, useRef, useEffect } from "react";
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
    description: "Mouhamed Sarr est un influenceur social engagé et créateur de contenu actif sur X. À travers ses publications, il aborde des enjeux de société en suscitant la réflexion et le débat au sein de sa communauté. Par sa capacité à mobiliser, sensibiliser et fédérer autour de thématiques d'intérêt général, il contribue à amplifier la visibilité de causes et d'initiatives à portée publique et sociale.",
    reseau: "X",
    abonnes: "361 848 abonnés",
    photo: influenceurX,
    photoPosition: "center top ",
  },
  {
    id: 2,
    nom: "Lelia Sagna",
    role: "Créatrice de contenu",
    description: "Lelia Sagna est une influenceuse dynamique et inspirante, active sur TikTok et Snapchat. À travers ses contenus, elle partage avec authenticité des conseils beauté ainsi que des recommandations autour de l'entrepreneuriat. Entre esthétique et ambition, Lelia incarne une nouvelle génération de créatrices qui allient style, confiance en soi et esprit business.",
    reseau: "TikTok",
    abonnes: "24 700 abonnés",
    photo: Leliaphoto,
    photoPosition: "center",
  },
  {
    id: 3,
    nom: "Fatou Lebou Mbaye",
    role: "Créatrice de Contenu",
    description: "Fatou Lebou Mbaye est une influenceuse beauté et maquilleuse professionnelle reconnue, à la tête de son propre salon. Son talent et son exigence lui valent une visibilité à l'échelle africaine, avec des nominations au Rwanda et à Ouagadougou. Créative, engagée et incontournable, elle est le choix idéal pour toute marque souhaitant s'imposer dans l'univers de la beauté.",
    reseau: "TikTok",
    abonnes: "49 900 abonnés",
    photo: Fatou,
    photoPosition: "center top",
  },
  {
    id: 4,
    nom: "Mme Aissatou Barry",
    role: "Créatrice de Contenu",
    description: "Mme Aissatou Barry est une créatrice de contenu culinaire reconnue pour l'authenticité de ses plats, sa bonne humeur et sa capacité naturelle à capter l'attention de son audience. Sa manière de présenter les recettes et d'intégrer les produits avec naturel en fait un profil particulièrement intéressant pour les marques souhaitant toucher leur public de façon crédible et humaine.",
    reseau: "TikTok",
    abonnes: "180 600 abonnés",
    photo: Aissatou,
    photoPosition: "center top",
  },
];

const BadgeIcon = ({ reseau }) => {
  if (reseau === "X") return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
      <path d="M18.244 2H21l-6.56 7.49L22 22h-6.828l-5.345-6.99L3.8 22H1l7.02-8.02L2 2h6.828l4.82 6.3L18.244 2z" />
    </svg>
  );
  if (reseau === "TikTok") return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
  return null;
};

const Modal = ({ item, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)",
        zIndex: 1000, display: "flex", alignItems: "center",
        justifyContent: "center", padding: "1rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff", borderRadius: "20px",
          maxWidth: "500px", width: "100%",
          padding: "2rem", position: "relative",
          maxHeight: "85vh", overflowY: "auto",
          boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "14px", right: "16px",
            background: "none", border: "none", fontSize: "24px",
            cursor: "pointer", color: "#999", lineHeight: 1,
          }}
        >×</button>
        <div style={{ color: "#b8860b", fontWeight: 700, fontSize: "13px", marginBottom: "4px" }}>
          {item.role}
        </div>
        <h3 style={{ fontSize: "1.4rem", fontWeight: 800, margin: "0 0 14px" }}>
          {item.nom}
        </h3>
        <p style={{ color: "#555", lineHeight: "1.75", fontSize: "15px", margin: 0 }}>
          {item.description}
        </p>
      </div>
    </div>
  );
};

const InfluenceurCard = ({ item, onVoirPlus, mobile }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1px solid ${hovered ? "#f0d9a0" : "#e5dfd3"}`,
        borderRadius: "16px",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.12)" : "0 2px 12px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "absolute", top: "2px", left: 0,
          background: "#000", color: "#fff",
          padding: "4px 10px", borderRadius: "0 8px 8px 0",
          display: "flex", alignItems: "center", gap: "5px",
          fontSize: "12px", zIndex: 3,
        }}
      >
        <BadgeIcon reseau={item.reseau} />
        <span>{item.abonnes}</span>
      </div>

      <div style={{
        height: mobile ? "260px" : "300px",
        overflow: "hidden",
        background: "linear-gradient(135deg, #fdf6e3, #f0d9a0)",
        flexShrink: 0,
      }}>
        <img
          src={item.photo}
          alt={item.nom}
          style={{
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: item.photoPosition,
          }}
        />
      </div>

      <div style={{ padding: mobile ? "1.2rem" : "1.4rem 1.6rem" }}>
        <div style={{ color: "#b8860b", fontWeight: 700, fontSize: "13px", marginBottom: "4px" }}>
          {item.role}
        </div>
        <h3 style={{ fontSize: mobile ? "1.1rem" : "1.2rem", fontWeight: 800, margin: "0 0 8px", color: "#111" }}>
          {item.nom}
        </h3>
        <p
          style={{
            color: "#7a7a74", lineHeight: "1.6", fontSize: "14px",
            margin: "0 0 8px",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.description}
        </p>
        <button
          onClick={() => onVoirPlus(item)}
          style={{
            background: "none", border: "none",
            color: "#b8860b", fontSize: "13px", fontWeight: 700,
            cursor: "pointer", padding: 0, textDecoration: "underline",
          }}
        >
          Voir plus →
        </button>
      </div>
    </div>
  );
};

export default function Influenceurs() {
  const scrollRef = useRef();
  const [mobile, setMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalItem, setModalItem] = useState(null);

  // ✅ Réactif au resize — détecte mobile correctement
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

const scrollTo = (index) => {
  if (!scrollRef.current) return;
  const el = scrollRef.current;
  const cardWidth = el.offsetWidth * 0.78 + 16;
  el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
};

  const scroll = (direction) => {
    if (mobile) {
      const total = INFLUENCEURS.length;
      let next;
      if (direction === "right") {
        next = currentIndex >= total - 1 ? 0 : currentIndex + 1;
      } else {
        next = currentIndex <= 0 ? total - 1 : currentIndex - 1;
      }
      setCurrentIndex(next);
      scrollTo(next);
    } else {
      scrollRef.current?.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
  <section style={{
  padding: mobile ? "4rem 1.2rem 2rem" : "7rem 5rem 3rem",  // ← réduit le padding-bottom
  background: "#faf8f4",
}}>
      <SectionHeader
        label="Nos Influenceurs"
        title="Ils parleront de vous"
        subtitle="Des créateurs engagés pour booster votre visibilité"
      />

      <div style={{ position: "relative", marginTop: "2rem" }}>
        {/* Bouton gauche */}
        <button
          onClick={() => scroll("left")}
          style={{
            position: "absolute",
            left: mobile ? "-4px" : "-20px",
            top: "38%",
            transform: "translateY(-50%)",
            zIndex: 5,
            background: "#000", color: "#fff", border: "none",
            borderRadius: "50%", width: "42px", height: "42px",
            cursor: "pointer", fontSize: "18px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >←</button>

       {/* Conteneur scroll */}
<div
  ref={scrollRef}
  style={{
    display: "flex",
    gap: "1rem",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    paddingBottom: "8px",
  }}
>
  {INFLUENCEURS.map((item) => (
    <div
      key={item.id}
      style={{
        flex: mobile ? "0 0 78%" : "0 0 calc(25% - 0.75rem)",
        minWidth: mobile ? "78%" : "220px",
        scrollSnapAlign: "start",
      }}
    >
      <InfluenceurCard item={item} onVoirPlus={setModalItem} mobile={mobile} />
    </div>
  ))}
</div>

        {/* Bouton droite */}
        <button
          onClick={() => scroll("right")}
          style={{
            position: "absolute",
            right: mobile ? "-4px" : "-20px",
            top: "38%",
            transform: "translateY(-50%)",
            zIndex: 5,
            background: "#000", color: "#fff", border: "none",
            borderRadius: "50%", width: "42px", height: "42px",
            cursor: "pointer", fontSize: "18px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >→</button>
      </div>

      {modalItem && (
        <Modal item={modalItem} onClose={() => setModalItem(null)} />
      )}
    </section>
  );
}