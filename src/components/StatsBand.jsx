import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 15,   suffix: "+",  label: "Services digitaux" },
  { target: 100, suffix: "%",  label: "Orienté résultats" },
  { target: 0,  suffix: "",   label: "Compromis sur la qualité" },
  { target: 24,  suffix: "h",  label: "Réponse garantie" },
];

function AnimatedCounter({ target, suffix, label, visible }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const duration = 1800, steps = 60, increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [visible, target]);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.8rem", color: "#b8860b", letterSpacing: "0.06em", display: "block" }}>{count}{suffix}</span>
      <span style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

export default function StatsBand() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const ref = useRef(null);

  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ background: "#111110", padding: isMobile ? "2.5rem 1.2rem" : "2.8rem 5rem", display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: "2rem", alignItems: "center" }}>
      {STATS.map(s => (
        <div key={s.label} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <AnimatedCounter {...s} visible={visible} />
        </div>
      ))}
    </div>
  );
}