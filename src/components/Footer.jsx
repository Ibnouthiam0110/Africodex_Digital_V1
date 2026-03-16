import { useState, useEffect } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <footer style={{ background: "#111110", color: "#fff", padding: isMobile ? "2.5rem 1.2rem" : "3rem 5rem", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", flexWrap: "wrap", gap: "1.5rem" }}>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", letterSpacing: "0.1em" }}>
        AFRICODEX <span style={{ color: "#b8860b" }}>DIGITAL</span>
      </div>
      <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.32)" }}>
        2026 Africodex Digital. Tous droits réservés. Dakar, Sénégal
      </p>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {["Mentions légales", "Confidentialité", "LinkedIn"].map(link => (
          <a key={link} href="#" style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.32)", textDecoration: "none", transition: "color 0.3s" }}
            onMouseEnter={e => e.target.style.color = "#b8860b"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.32)"}
          >{link}</a>
        ))}
      </div>
    </footer>
  );
}