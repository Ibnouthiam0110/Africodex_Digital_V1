export default function Footer() {
  return (
    <footer style={{
      background: "#111110", color: "#fff",
      padding: "3rem 5rem",
      display: "flex", justifyContent: "space-between",
      alignItems: "center", flexWrap: "wrap", gap: "2rem",
    }}>
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "1.4rem", letterSpacing: "0.1em",
      }}>
        AFRICODEX <span style={{ color: "#b8860b" }}>DIGITAL</span>
      </div>

      <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.32)" }}>
        © 2025 Africodex Digital. Tous droits réservés. — Dakar, Sénégal
      </p>

      <div style={{ display: "flex", gap: "2rem" }}>
        {["Mentions légales", "Confidentialité", "LinkedIn"].map(link => (
          <a key={link} href="#" style={{
            fontSize: "0.82rem", color: "rgba(255,255,255,0.32)",
            textDecoration: "none", transition: "color 0.3s",
          }}
            onMouseEnter={e => e.target.style.color = "#b8860b"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.32)"}
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
