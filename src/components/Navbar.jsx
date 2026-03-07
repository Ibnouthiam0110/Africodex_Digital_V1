import { useState, useEffect } from "react";
import LOGO from "../data/logo.js";

const NAV_LINKS = [
  ["#about",        "À propos"],
  ["#services",     "Services"],
  ["#realisations", "Réalisations"],
  ["#process",      "Approche"],
  ["#contact",      "Contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0.7rem 4rem",
      background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.94)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid #e5dfd3",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
      transition: "box-shadow 0.3s",
    }}>
      <a href="#home" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
        <img src={LOGO} alt="Africodex Digital" style={{ height: "70px", width: "auto", objectFit: "contain" }} />
      </a>
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
        {NAV_LINKS.map(([href, label]) => (
          <li key={href}>
            <a href={href} style={{ color: "#7a7a74", textDecoration: "none", fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700, transition: "color 0.3s", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              onMouseEnter={e => e.target.style.color = "#b8860b"}
              onMouseLeave={e => e.target.style.color = "#7a7a74"}
            >{label}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" style={{ background: "#111110", color: "#fff", padding: "0.6rem 1.5rem", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "4px", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "background 0.3s, transform 0.2s", whiteSpace: "nowrap" }}
        onMouseEnter={e => { e.target.style.background = "#b8860b"; e.target.style.transform = "translateY(-2px)"; }}
        onMouseLeave={e => { e.target.style.background = "#111110"; e.target.style.transform = "translateY(0)"; }}
      >Démarrer un projet</a>
    </nav>
  );
}
