import { useEffect } from "react";

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "rgba(17,17,16,0.72)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "2rem",
        animation: "fadeIn 0.25s ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#fff", borderRadius: "24px",
          maxWidth: "680px", width: "100%",
          maxHeight: "88vh", overflowY: "auto",
          boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
          animation: "slideUp 0.3s ease",
        }}
      >
        {/* Header */}
        <div style={{
          padding: "2.5rem 2.5rem 0",
          display: "flex", alignItems: "flex-start",
          justifyContent: "space-between", gap: "1rem",
        }}>
          <div style={{
            width: "60px", height: "60px", background: "#fdf6e3",
            borderRadius: "16px", display: "flex",
            alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <button
            onClick={onClose}
            style={{
              width: "38px", height: "38px", borderRadius: "50%",
              background: "#faf8f4", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.1rem", color: "#7a7a74", flexShrink: 0,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#f2ede4"}
            onMouseLeave={e => e.currentTarget.style.background = "#faf8f4"}
          >
            âœ•
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "1.5rem 2.5rem 2.5rem" }}>
          <div style={{
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#b8860b", marginBottom: "0.5rem",
          }}>
            Service {service.num}
          </div>
          <h2 style={{
            fontSize: "1.7rem", fontWeight: 800, color: "#111110",
            marginBottom: "1rem", lineHeight: 1.2,
          }}>
            {service.name}
          </h2>
          <p style={{
            fontSize: "0.97rem", color: "#7a7a74",
            lineHeight: 1.8, marginBottom: "1.8rem",
          }}>
            {service.fullDesc}
          </p>

          {/* Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginBottom: "2rem" }}>
            {service.features.map((f) => (
              <div key={f.title} style={{
                display: "flex", alignItems: "flex-start", gap: "0.9rem",
                padding: "1.1rem 1.3rem", background: "#faf8f4",
                borderRadius: "12px", border: "1px solid #e5dfd3",
              }}>
                <div style={{
                  width: "32px", height: "32px", background: "#fdf6e3",
                  borderRadius: "8px", display: "flex",
                  alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <CheckIcon />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#111110", marginBottom: "0.2rem" }}>
                    {f.title}
                  </h4>
                  <p style={{ fontSize: "0.82rem", color: "#7a7a74", lineHeight: 1.6 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={onClose}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "#111110", color: "#fff",
              padding: "1rem 2rem", borderRadius: "8px",
              fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em",
              textDecoration: "none", width: "100%",
              transition: "background 0.3s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#b8860b"}
            onMouseLeave={e => e.currentTarget.style.background = "#111110"}
          >
            Demander un devis gratuit â†’
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
