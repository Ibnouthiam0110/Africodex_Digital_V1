import LOGO from "../data/logo.js";
import HERO_IMAGE from "../data/heroImage.js";

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
  <div style={{ flex: 1, background: "#fff", border: "1px solid #e5dfd3", borderRadius: "14px", padding: "1.4rem 1.2rem", boxShadow: "0 2px 14px rgba(0,0,0,0.05)" }}>
    <div style={{ fontSize: "2rem", fontWeight: 800, color: "#111110", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
      {num}<span style={{ color: "#b8860b" }}>{suffix}</span>
    </div>
    <p style={{ fontSize: "0.76rem", color: "#7a7a74", marginTop: "0.2rem" }}>{label}</p>
  </div>
);

const Pill = ({ label }) => (
  <span style={{ background: "rgba(212,160,23,0.15)", color: "#d4a017", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", padding: "0.3rem 0.8rem", borderRadius: "100px", border: "1px solid rgba(212,160,23,0.3)" }}>{label}</span>
);

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      padding: "8rem 5rem 5rem",
      position: "relative", overflow: "hidden",
      gap: "4rem",
    }}>

      {/* ── Background: photo développeur africain ── */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        filter: "brightness(0.25) saturate(0.8)",
        zIndex: 0,
      }} />

      {/* Dégradé crème : lisible à gauche, photo visible à droite */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "linear-gradient(105deg, rgba(250,248,244,0.98) 0%, rgba(250,248,244,0.93) 42%, rgba(250,248,244,0.35) 70%, rgba(250,248,244,0.05) 100%)",
      }} />

      {/* Dot pattern */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(circle, #b8860b 1.2px, transparent 1.2px)",
        backgroundSize: "36px 36px", opacity: 0.05, pointerEvents: "none",
      }} />

      {/* Gold glow */}
      <div style={{
        position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,217,160,0.5) 0%, transparent 65%)",
        right: "-80px", top: "50%", transform: "translateY(-50%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* ── Left column ── */}
      <div style={{ position: "relative", zIndex: 1, animation: "heroFadeUp 0.9s ease forwards" }}>

        {/* <img src={LOGO} alt="Africodex Digital" style={{ height: "64px", width: "auto", marginBottom: "2rem", objectFit: "contain" }} /> */}

        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "#fdf6e3", border: "1px solid #f0d9a0",
          color: "#b8860b", fontSize: "0.75rem", fontWeight: 700,
          letterSpacing: "0.14em", textTransform: "uppercase",
          padding: "0.45rem 1rem", borderRadius: "100px", marginBottom: "2rem",
        }}>
          <span style={{ width: "6px", height: "6px", background: "#b8860b", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
          🌍 Startup Africaine · Dakar, Sénégal
        </div>

        <h1 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(2.8rem, 5vw, 5rem)",
          fontWeight: 800, lineHeight: 1.06,
          color: "#111110", marginBottom: "1.6rem",
          animation: "heroFadeUp 0.9s 0.15s ease both",
        }}>
          Votre vision,{" "}
          <em style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", color: "#b8860b" }}>notre code</em>,
          <br />l'Afrique connectée.
        </h1>

        <p style={{
          fontSize: "1.05rem", color: "#7a7a74", lineHeight: 1.8,
          maxWidth: "480px", marginBottom: "2.5rem",
          animation: "heroFadeUp 0.9s 0.3s ease both",
        }}>
          Africodex Digital transforme vos idées en solutions numériques percutantes — sites web, applications mobiles et stratégie digitale pensés pour le marché africain.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "heroFadeUp 0.9s 0.45s ease both" }}>
          <a href="#services" style={{ background: "#111110", color: "#fff", padding: "0.95rem 2.2rem", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textDecoration: "none", borderRadius: "6px", display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "background 0.3s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#b8860b"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#111110"; e.currentTarget.style.transform = "translateY(0)"; }}
          >Nos Services →</a>
          <a href="#contact" style={{ background: "#fff", color: "#2c2c2b", border: "1.5px solid #e5dfd3", padding: "0.95rem 2.2rem", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", borderRadius: "6px", transition: "border-color 0.3s, transform 0.2s, color 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#b8860b"; e.currentTarget.style.color = "#b8860b"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5dfd3"; e.currentTarget.style.color = "#2c2c2b"; e.currentTarget.style.transform = "translateY(0)"; }}
          >Parler de mon projet</a>
        </div>
      </div>

      {/* ── Right column — cards ── */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "1.2rem", animation: "heroFadeUp 0.9s 0.55s ease both" }}>
        <HeroCard dark>
          <div style={{ color: "rgba(212,160,23,0.85)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.8rem", fontWeight: 700 }}>🚀 Notre Mission</div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>Bâtir le numérique africain</h3>
          <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>Des solutions digitales sur-mesure adaptées aux réalités et ambitions de l'Afrique d'aujourd'hui.</p>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "1.1rem" }}>
            {["Web", "Mobile", "E-commerce", "Design"].map(p => <Pill key={p} label={p} />)}
          </div>
        </HeroCard>
        <div style={{ display: "flex", gap: "1rem" }}>
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
