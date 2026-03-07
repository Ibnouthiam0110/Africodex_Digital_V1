import { useState } from "react";
import { services } from "../data/services";
import SectionHeader from "./SectionHeader";
import ServiceModal from "./ServiceModal";

const ServiceCard = ({ service, featured = false, onOpen }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: featured ? "#111110" : hovered ? "#fff" : "#faf8f4",
        border: `1px solid ${featured ? "#111110" : "#e5dfd3"}`,
        borderRadius: "18px", padding: "2.2rem",
        transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.1)" : "none",
        cursor: "default",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* Icon */}
      <div style={{
        width: "52px", height: "52px",
        background: featured ? "rgba(212,160,23,0.15)" : "#fdf6e3",
        borderRadius: "14px", display: "flex",
        alignItems: "center", justifyContent: "center",
        marginBottom: "1.5rem",
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="2">
          <rect x="3" y="3" width="18" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      </div>

      <div style={{
        fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em",
        color: featured ? "rgba(255,255,255,0.3)" : "#7a7a74",
        marginBottom: "0.4rem",
      }}>
        {service.num}
      </div>

      <div style={{
        fontSize: "1.1rem", fontWeight: 700,
        color: featured ? "#fff" : "#111110",
        marginBottom: "0.8rem",
      }}>
        {service.name}
      </div>

      <p style={{
        fontSize: "0.86rem",
        color: featured ? "rgba(255,255,255,0.45)" : "#7a7a74",
        lineHeight: 1.75, flexGrow: 1,
      }}>
        {service.shortDesc}
      </p>

      <button
        onClick={() => onOpen(service)}
        style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          fontSize: "0.8rem", fontWeight: 700, color: "#b8860b",
          marginTop: "1.5rem", background: "none", border: "none",
          cursor: "pointer", padding: 0,
          transition: "gap 0.3s",
        }}
        onMouseEnter={e => e.currentTarget.style.gap = "0.8rem"}
        onMouseLeave={e => e.currentTarget.style.gap = "0.4rem"}
      >
        En savoir plus →
      </button>
    </div>
  );
};

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" style={{ padding: "7rem 5rem", background: "#fff" }}>
      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-end", flexWrap: "wrap", gap: "2rem",
        marginBottom: "3.5rem",
      }}>
        <SectionHeader label="Expertise" title="Nos <em style='font-family:Fraunces,serif;font-style:italic;color:#b8860b'>services</em>" />
        <p style={{
          fontSize: "0.92rem", color: "#7a7a74",
          maxWidth: "280px", textAlign: "right", lineHeight: 1.7,
        }}>
          Solutions complètes pour votre transformation numérique.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.5rem",
      }}>
        {services.map((s, i) => (
          <ServiceCard
            key={s.id}
            service={s}
            featured={i === 1}
            onOpen={setActiveService}
          />
        ))}
      </div>

      {/* Modal */}
      {activeService && (
        <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      )}
    </section>
  );
}
