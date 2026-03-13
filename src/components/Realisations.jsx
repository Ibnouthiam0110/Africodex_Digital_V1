import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";

const CATEGORIES = ["Tous", "Site Vitrine", "E-commerce", "Application Mobile", "Dashboard"];

const TEMPLATES = [
  { id: 1, title: "Site Vitrine Restaurant", category: "Site Vitrine", tag: "Bientôt disponible", desc: "Site élégant pour restaurant avec menu, réservations en ligne et galerie photos.", tech: ["React", "Node.js", "Figma"], color: "#fdf6e3", accent: "#b8860b", icon: "🍽️" },
  { id: 2, title: "Boutique Mode Africaine", category: "E-commerce", tag: "Bientôt disponible", desc: "Boutique en ligne complète avec catalogue, panier et paiement Wave et Orange Money.", tech: ["React", "Stripe", "MongoDB"], color: "#f0f7ff", accent: "#2563eb", icon: "👗" },
  { id: 3, title: "App Livraison Locale", category: "Application Mobile", tag: "Bientôt disponible", desc: "Application mobile de livraison avec géolocalisation, tracking et paiement mobile.", tech: ["React Native", "Firebase", "Maps"], color: "#f0fdf4", accent: "#16a34a", icon: "🛵" },
  { id: 4, title: "Cabinet Médical", category: "Site Vitrine", tag: "Bientôt disponible", desc: "Site professionnel pour cabinet médical avec prise de rendez-vous en ligne.", tech: ["Next.js", "Tailwind", "Cal.com"], color: "#fdf6e3", accent: "#b8860b", icon: "🏥" },
  { id: 5, title: "Marketplace Artisanat", category: "E-commerce", tag: "Bientôt disponible", desc: "Marketplace multi-vendeurs dédiée à l'artisanat africain avec gestion des commissions.", tech: ["Next.js", "Prisma", "Wave API"], color: "#fdf4ff", accent: "#9333ea", icon: "🎨" },
  { id: 6, title: "Dashboard Analytics", category: "Dashboard", tag: "Bientôt disponible", desc: "Tableau de bord avec statistiques en temps réel et rapports personnalisés.", tech: ["React", "Chart.js", "REST API"], color: "#f0f7ff", accent: "#2563eb", icon: "📊" },
];

const TemplateCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: "#fff", border: "1px solid " + (hovered ? item.accent : "#e5dfd3"), borderRadius: "18px", overflow: "hidden", transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s", transform: hovered ? "translateY(-6px)" : "translateY(0)", boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.12)" : "0 2px 12px rgba(0,0,0,0.05)", cursor: "default" }}
    >
      <div style={{ height: "160px", background: item.color, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
          <div style={{ position: "absolute", top: "20px", left: "20px", right: "20px", height: "10px", background: item.accent, borderRadius: "5px" }} />
          <div style={{ position: "absolute", top: "44px", left: "20px", width: "60%", height: "6px", background: item.accent, borderRadius: "3px" }} />
          <div style={{ position: "absolute", top: "70px", left: "20px", right: "20px", height: "40px", background: item.accent, borderRadius: "8px" }} />
        </div>
        <div style={{ width: "48px", height: "48px", background: item.accent, borderRadius: "12px", opacity: 0.2, position: "relative", zIndex: 1 }} />
        <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(17,17,16,0.75)", color: "#fff", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.3rem 0.75rem", borderRadius: "100px", backdropFilter: "blur(4px)" }}>{item.tag}</div>
      </div>
      <div style={{ padding: "1.5rem" }}>
        <div style={{ display: "inline-block", background: item.color, color: item.accent, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.25rem 0.75rem", borderRadius: "100px", marginBottom: "0.75rem", border: "1px solid " + item.accent + "22" }}>{item.category}</div>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111110", marginBottom: "0.6rem" }}>{item.title}</h3>
        <p style={{ fontSize: "0.84rem", color: "#7a7a74", lineHeight: 1.65, marginBottom: "1.2rem" }}>{item.desc}</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.3rem" }}>
          {item.tech.map(t => <span key={t} style={{ background: "#faf8f4", color: "#7a7a74", fontSize: "0.72rem", fontWeight: 600, padding: "0.25rem 0.6rem", borderRadius: "6px", border: "1px solid #e5dfd3" }}>{t}</span>)}
        </div>
        <button style={{ width: "100%", padding: "0.75rem", background: hovered ? item.accent : "#f5f0e8", color: hovered ? "#fff" : "#111110", border: "none", borderRadius: "8px", fontFamily: "inherit", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer", transition: "background 0.3s, color 0.3s" }}>
          Voir le template →
        </button>
      </div>
    </div>
  );
};

export default function Realisations() {
  const [active, setActive] = useState("Tous");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const filtered = active === "Tous" ? TEMPLATES : TEMPLATES.filter(t => t.category === active);

  return (
    <section id="realisations" style={{ padding: isMobile ? "4rem 1.2rem" : "7rem 5rem", background: "#fff" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <SectionHeader label="Nos Réalisations" title="Templates & <em style='font-family:Fraunces,serif;font-style:italic;color:#b8860b'>Projets</em>" subtitle="Découvrez nos modèles et réalisations. Des templates prêts à personnaliser pour lancer votre projet rapidement." />
      </div>
      <div style={{ display: "flex", gap: "0.6rem", flexWrap: isMobile ? "nowrap" : "wrap", overflowX: isMobile ? "auto" : "visible", paddingBottom: isMobile ? "0.5rem" : 0, marginBottom: "2.5rem", WebkitOverflowScrolling: "touch" }}>
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setActive(cat)} style={{ padding: "0.5rem 1rem", background: active === cat ? "#111110" : "#faf8f4", color: active === cat ? "#fff" : "#7a7a74", border: "1.5px solid " + (active === cat ? "#111110" : "#e5dfd3"), borderRadius: "100px", fontFamily: "inherit", fontWeight: 600, fontSize: "0.84rem", cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap", flexShrink: 0 }}>{cat}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "1.5rem" }}>
        {filtered.map(item => <TemplateCard key={item.id} item={item} />)}
      </div>
      <div style={{ textAlign: "center", marginTop: "3rem", padding: isMobile ? "2rem 1.2rem" : "3rem", background: "#faf8f4", borderRadius: "20px", border: "1px solid #e5dfd3" }}>
        <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#111110", marginBottom: "0.8rem" }}>Vous avez un projet en tête ?</h3>
        <p style={{ fontSize: "0.97rem", color: "#7a7a74", marginBottom: "1.8rem", maxWidth: "480px", margin: "0 auto 1.8rem" }}>Ces templates vous inspirent ? Parlons de votre projet sur-mesure.</p>
        <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#111110", color: "#fff", padding: "0.95rem 2rem", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textDecoration: "none", borderRadius: "8px" }}
          onMouseEnter={e => e.currentTarget.style.background = "#b8860b"}
          onMouseLeave={e => e.currentTarget.style.background = "#111110"}
        >Démarrer mon projet →</a>
      </div>
    </section>
  );
}