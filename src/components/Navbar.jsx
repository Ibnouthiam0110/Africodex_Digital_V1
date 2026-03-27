import { useState, useEffect } from "react";
import LOGO from "../data/logo.js";

const NAV_LINKS = [
  ["#about",        "A propos"],
  ["#services",     "Services"],
  ["#realisations", "Realisations"],
  ["#process",      "Approche"],
  ["#blog",         "Blog"],       // ← AJOUTÉ
  ["#contact",      "Contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: isMobile ? "0.7rem 1.2rem" : "0.7rem 4rem",
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.94)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid #e5dfd3",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
        transition: "box-shadow 0.3s",
      }}>
        <a href="#home" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img src={LOGO} alt="Africodex Digital" style={{ height: "50px", width: "auto", objectFit: "contain" }} />
        </a>

        {!isMobile && (
          <>
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

            <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
              <a href="#rejoignez-nous" style={{ background: "transparent", color: "#b8860b", padding: "0.6rem 1.5rem", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "4px", border: "1.5px solid #b8860b", whiteSpace: "nowrap", transition: "background 0.3s, color 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#b8860b"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#b8860b"; }}
              >Rejoignez-nous</a>

              <a href="#contact" style={{ background: "#111110", color: "#fff", padding: "0.6rem 1.5rem", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "4px", whiteSpace: "nowrap", transition: "background 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#b8860b"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#111110"; }}
              >Demarrer un projet</a>
            </div>
          </>
        )}

        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0.4rem", display: "flex", flexDirection: "column", gap: "5px" }}>
            <span style={{ display: "block", width: "24px", height: "2px", background: "#111110", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "#111110", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "#111110", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={{ position: "fixed", top: "66px", left: 0, right: 0, zIndex: 99, background: "rgba(255,255,255,0.98)", backdropFilter: "blur(16px)", borderBottom: "1px solid #e5dfd3", padding: "1.5rem 1.2rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {NAV_LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ color: "#111110", textDecoration: "none", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</a>
          ))}
          <a href="#rejoignez-nous" onClick={() => setMenuOpen(false)} style={{ background: "transparent", color: "#b8860b", padding: "0.9rem 1.5rem", fontSize: "0.85rem", fontWeight: 700, textAlign: "center", textDecoration: "none", borderRadius: "4px", border: "1.5px solid #b8860b", marginTop: "0.5rem" }}>Rejoignez-nous</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{ background: "#111110", color: "#fff", padding: "0.9rem 1.5rem", fontSize: "0.85rem", fontWeight: 700, textAlign: "center", textDecoration: "none", borderRadius: "4px" }}>Demarrer un projet</a>
        </div>
      )}
    </>
  );
}