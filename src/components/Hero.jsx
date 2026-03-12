import { useState, useEffect } from "react";
import HERO_IMAGE from "../data/heroImage.js";
import LOGO from "../data/logo.js";

const HeroCard = ({ dark = false, children }) => (
  <div style={{
    background: dark ? "linear-gradient(135deg, #111110 0%, #2a2a28 100%)" : "#fff",
    border: dark ? "none" : "1px solid #e5dfd3",
    borderRadius: "18px", padding: "2rem",
    boxShadow: "0 4px 28px rgba(0,0,0,0.07)",
    color: dark ? "#fff" : "inherit",
  }}>{children}</div>
);

const MiniCard = ({ num, suffix, label }) => (
  <div style={{ flex: 1, background: "#fff", border: "1px solid #e5dfd3", borderRadius: "14px", padding: "1rem 0.8rem", boxShadow: "0 2px 14px rgba(0,0,0,0.05)", minWidth: 0 }}>
    <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#111110", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
      {num}<span style={{ color: "#b8860b" }}>{suffix}</span>
    </div>
    <p style={{ fontSize: "0.72rem", color: "#7a7a74", marginTop: "0.2rem" }}>{label}</p>
  </div>
);

const Pill = ({ label }) => (
  <span style={{ background: "rgba(212,160,23,0.15)", color: "#d4a017", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", padding: "0.3rem 0.8rem", borderRadius: "100px", border: "1px solid rgba(212,160,23,0.3)" }}>{label}</span>
);

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",  // ✅ colonne sur mobile
      alignItems: "center",
      padding: isMobile ? "6rem 1.2rem 3rem" : "8rem 5rem 5rem", // ✅ padding mobile
      position: "relative", overflow: "hidden",
      gap: isMobile ? "2rem" : "4rem",
    }}>

      {/* Background photo */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        filter: "brightness(0.25) saturate(0.8)",
        zIndex: 0,
      }} />

      {/* Dégradé */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: isMobile
          ? "linear-gradient(180deg, rgba(250,248,244,0.98) 0%, rgba(250,248,244,0.90) 100%)"
          : "linear-gradient(105deg, rgba(250,248,244,0.98) 0%, rgba(250,248,244,0.93) 42%, rgba(250,248,244,0.35) 70%, rgba(250,248,244,0.05) 100%)",
      }} />

      {/* Dot pattern */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, backgroundImage: "radial-gradient(circle, #b8860b 1.2px, transparent 1.2px)", backgroundSize: "36px 36px", opacity: 0.05, pointerEvents: "none" }} />

      {/* Gold glow — masqué sur mobile */}
      {!isMobile && (
        <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(240,217,160,0.5) 0%, transparent 65%)", right: "-80px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", zIndex: 0 }} />
      )}

      {/* ── Colonne gauche ── */}
      <div style={{ position: "relative", zIndex: 1, animation: "heroFadeUp 0.9s ease forwards" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "#fdf6e3", border: "1px solid #f0d9a0",
          color: "#b8860b", fontSize: "0.72rem", fontWeight: 700,
          letterSpacing: "0.1em", textTransform: "uppercase",
          padding: "0.45rem 1rem", borderRadius: "100px", marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}>
          <span style={{ width: "6px", height: "6px", background: "#b8860b", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite", flexShrink: 0 }} />
          🌍 Startup Africaine · Dakar, Sénégal
        </div>

        <h1 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: isMobile ? "clamp(2rem, 9vw, 3rem)" : "clamp(2.8rem, 5vw, 5rem)", // ✅ plus petit sur mobile
          fontWeight: 800, lineHeight: 1.06,
          color: "#111110", marginBottom: "1.2rem",
          wordBreak: "break-word",
        }}>
          Votre vision,{" "}
          <em style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", color: "#b8860b" }}>notre code</em>,
          <br />l'Afrique connectée.
        </h1>

        <p style={{
          fontSize: "0.95rem", color: "#7a7a74", lineHeight: 1.8,
          maxWidth: "480px", marginBottom: "2rem",
        }}>
          Africodex Digital transforme vos idées en solutions numériques percutantes — sites web, applications mobiles et stratégie digitale pensés pour le marché africain.
        </p>

        <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
          <a href="#services" style={{ background: "#111110", color: "#fff", padding: "0.9rem 1.8rem", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textDecoration: "none", borderRadius: "6px", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>Nos Services →</a>
          <a href="#contact" style={{ background: "#fff", color: "#2c2c2b", border: "1.5px solid #e5dfd3", padding: "0.9rem 1.8rem", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", borderRadius: "6px" }}>Parler de mon projet</a>
        </div>
      </div>

      {/* ── Colonne droite — cards ── */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <HeroCard dark>
          <div style={{ color: "rgba(212,160,23,0.85)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.8rem", fontWeight: 700 }}>🚀 Notre Mission</div>
          <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>Bâtir le numérique africain</h3>
          <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>Des solutions digitales sur-mesure adaptées aux réalités et ambitions de l'Afrique d'aujourd'hui.</p>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "1rem" }}>
            {["Web", "Mobile", "E-commerce", "Design"].map(p => <Pill key={p} label={p} />)}
          </div>
        </HeroCard>
        <div style={{ display: "flex", gap: "0.8rem" }}>
          <MiniCard num="100" suffix="%" label="Made in Africa" />
          <MiniCard num="360" suffix="°" label="Accompagnement" />
          <MiniCard num="∞" suffix="" label="Innovation" />
        </div>
      </div>

      <style>{`
        @keyframes heroFadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
      `}</style>
    </section>
  );
}