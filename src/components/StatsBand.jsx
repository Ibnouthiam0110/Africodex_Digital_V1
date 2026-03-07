import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 6,   suffix: "+",  label: "Services digitaux" },
  { target: 100, suffix: "%",  label: "Orienté résultats" },
  { target: 54,  suffix: "",   label: "Pays africains à servir" },
  { target: 24,  suffix: "h",  label: "Réponse garantie" },
];

function AnimatedCounter({ target, suffix, label, visible }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [visible, target]);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "2.8rem", color: "#b8860b",
        letterSpacing: "0.06em", display: "block",
        transition: "all 0.1s",
      }}>
        {count}{suffix}
      </span>
      <span style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}

export default function StatsBand() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      background: "#111110",
      padding: "2.8rem 5rem",
      display: "flex", justifyContent: "space-around",
      alignItems: "center", flexWrap: "wrap", gap: "2rem",
    }}>
      {STATS.map((s, i) => (
        <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <AnimatedCounter {...s} visible={visible} />
          {i < STATS.length - 1 && (
            <div style={{ width: "1px", height: "48px", background: "rgba(255,255,255,0.08)" }} />
          )}
        </div>
      ))}
    </div>
  );
}
