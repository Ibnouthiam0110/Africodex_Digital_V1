import { useState, useEffect } from "react";
import { whyItems, processSteps } from "../data/services";
import SectionHeader from "./SectionHeader";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return isMobile;
}

const WhyCard = ({ item, wide = false }) => (
  <div style={{ background: wide ? "#111110" : "#fff", border: `1px solid ${wide ? "#111110" : "#e5dfd3"}`, borderRadius: "16px", padding: "1.8rem", gridColumn: wide ? "1 / -1" : undefined, transition: "transform 0.3s, box-shadow 0.3s" }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.08)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
  >
    <div style={{ width: "40px", height: "40px", background: wide ? "rgba(212,160,23,0.15)" : "#fdf6e3", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    </div>
    <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem", color: wide ? "#fff" : "#111110" }}>{item.title}</h4>
    <p style={{ fontSize: "0.84rem", color: wide ? "rgba(255,255,255,0.42)" : "#7a7a74", lineHeight: 1.7 }}>{item.desc}</p>
  </div>
);

export function WhyUs() {
  const isMobile = useIsMobile();
  return (
    <section id="why" style={{ padding: isMobile ? "4rem 1.2rem" : "7rem 5rem", background: "#f2ede4" }}>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2.5rem" : "5rem", alignItems: "center" }}>
        <SectionHeader
          label="Pourquoi nous"
          title="Ce qui nous <em style='font-family:Fraunces,serif;font-style:italic;color:#b8860b'>distingue</em>"
          subtitle="Nous sommes des partenaires de croissance qui partagent votre ambition de construire quelque chose de grand."
        />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
          {whyItems.map((item, i) => <WhyCard key={item.title} item={item} wide={i === 0} />)}
        </div>
      </div>
    </section>
  );
}

const ProcessStep = ({ step }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#fff", border: "2px solid #b8860b", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.25rem", color: "#b8860b", position: "relative", zIndex: 1, boxShadow: "0 0 0 6px #fff", transition: "background 0.3s, color 0.3s", cursor: "default" }}
      onMouseEnter={e => { e.currentTarget.style.background = "#b8860b"; e.currentTarget.style.color = "#fff"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#b8860b"; }}
    >{step.num}</div>
    <div style={{ fontSize: "1rem", fontWeight: 700, color: "#111110", marginBottom: "0.6rem" }}>{step.title}</div>
    <p style={{ fontSize: "0.84rem", color: "#7a7a74", lineHeight: 1.7 }}>{step.desc}</p>
  </div>
);

export function Process() {
  const isMobile = useIsMobile();
  return (
    <section id="process" style={{ padding: isMobile ? "4rem 1.2rem" : "7rem 5rem", background: "#fff" }}>
      <SectionHeader label="Notre approche" title="De l'idee au <em style='font-family:Fraunces,serif;font-style:italic;color:#b8860b'>lancement</em>" subtitle="Un processus clair, transparent et collaboratif pour des resultats a la hauteur de vos ambitions." centered />
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: "2rem", marginTop: "4rem", position: "relative" }}>
        {!isMobile && <div style={{ position: "absolute", top: "27px", left: "13%", right: "13%", height: "1.5px", background: "linear-gradient(90deg, #f0d9a0, #b8860b, #f0d9a0)" }} />}
        {processSteps.map(step => <ProcessStep key={step.num} step={step} />)}
      </div>
    </section>
  );
}