import { useState, useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

const POSTES = [
  {
    id: "apporteur",
    titre: "Apporteur d'affaires",
    missions: [
      "Identifier et prospecter de nouveaux clients potentiels (PME, startups, entrepreneurs) dans votre réseau",
      "Présenter les services d'Africodex Digital et mettre en relation avec notre équipe commerciale",
      "Suivre les opportunités jusqu'à la signature du contrat",
      "Participer à des événements networking et salons professionnels pour développer la notoriété",
      "Remonter les retours du marché pour améliorer notre offre",
    ],
    profil: [
      "Bonne aisance relationnelle et sens du contact",
      "Réseau professionnel actif (entrepreneurs, dirigeants de PME, associations)",
      "Motivation et autonomie — rémunération à la commission",
      "Connaissance basique du digital appréciée, mais non obligatoire",
    ],
    remuneration: "Commission attractive de 10% sur chaque contrat signé",
    couleur: "#fdf6e3",
    accent: "#b8860b",
  },
  {
    id: "developpeur",
    titre: "Développeur Web/Mobile",
    missions: [
      "Concevoir et développer des sites web, applications web et mobiles pour nos clients",
      "Collaborer avec l'équipe design pour intégrer des maquettes UI/UX avec précision",
      "Écrire du code propre, maintenable et bien documenté",
      "Participer aux revues de code et aux réunions techniques",
      "Assurer la maintenance, le débogage et les mises à jour des projets livrés",
      "Respecter les délais et communiquer régulièrement sur l'avancement",
    ],
    profil: [
      "Maîtrise de React.js, React Native ou Next.js",
      "Connaissance de Node.js, MongoDB ou autres technologies backend",
      "Expérience avec Git et les bonnes pratiques de développement",
      "Portfolio ou projets personnels démontrant vos compétences",
      "Esprit d'équipe, rigueur et curiosité technique",
    ],
    remuneration: "Rémunération selon le projet à développer",
    couleur: "#f0f7ff",
    accent: "#2563eb",
  },
];

function PosteCard({ poste, selected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(poste.id)}
      style={{ background: selected ? poste.couleur : "#fff", border: "2px solid " + (selected ? poste.accent : "#e5dfd3"), borderRadius: "20px", padding: "2rem", cursor: "pointer", transition: "all 0.3s", boxShadow: selected ? "0 8px 32px " + poste.accent + "22" : "0 2px 12px rgba(0,0,0,0.04)" }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.2rem" }}>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: poste.accent }}>{poste.titre}</div>
        <div style={{ width: "20px", height: "20px", borderRadius: "50%", border: "2px solid " + poste.accent, background: selected ? poste.accent : "transparent", transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {selected && <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />}
        </div>
      </div>
      <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#111110", marginBottom: "1.2rem" }}>{poste.titre}</h3>
      <div style={{ marginBottom: "1.2rem" }}>
        <div style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a7a74", marginBottom: "0.7rem" }}>Missions</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {poste.missions.map((m, i) => (
            <li key={i} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", fontSize: "0.84rem", color: "#4a4a45", lineHeight: 1.6 }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: poste.accent, flexShrink: 0, marginTop: "7px" }} />
              {m}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginBottom: "1.2rem" }}>
        <div style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a7a74", marginBottom: "0.7rem" }}>Profil recherché</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {poste.profil.map((p, i) => (
            <li key={i} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", fontSize: "0.84rem", color: "#4a4a45", lineHeight: 1.6 }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: poste.accent, flexShrink: 0, marginTop: "7px" }} />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", background: poste.accent + "18", color: poste.accent, fontSize: "0.78rem", fontWeight: 700, padding: "0.4rem 0.9rem", borderRadius: "100px" }}>
        {poste.remuneration}
      </div>
    </div>
  );
}

export default function RejoignezNous() {
  const [selected, setSelected] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const formRef = useRef(null);

  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const handleSelect = (id) => {
    setSelected(id);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const posteSelectionne = selected ? POSTES.find(p => p.id === selected) : null;
  const mailSubject = encodeURIComponent("Candidature - " + (posteSelectionne ? posteSelectionne.titre : "Poste qui vous intéresse"));
  const mailHref = "mailto:africodexdigital@gmail.com?subject=" + mailSubject;

  return (
    <section id="rejoignez-nous" style={{ padding: isMobile ? "4rem 1.2rem 0" : "7rem 5rem 0", background: "#fff" }}>
      <SectionHeader
        label="Rejoignez-nous"
        title="Construisons <em style='font-family:Fraunces,serif;font-style:italic;color:#b8860b'>ensemble</em>"
        subtitle="Que vous soyez commercial, développeur ou créateur — il y a une place pour vous chez Africodex Digital."
        centered
      />

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.8rem", marginTop: "3.5rem" }}>
        {POSTES.map(poste => (
          <PosteCard key={poste.id} poste={poste} selected={selected === poste.id} onSelect={handleSelect} />
        ))}
      </div>

      <div ref={formRef} style={{ marginTop: "4rem", background: "#faf8f4", border: "1px solid #e5dfd3", borderRadius: "24px", padding: isMobile ? "2rem 1.2rem" : "3rem", textAlign: "center" }}>
        <div style={{ width: "56px", height: "56px", background: "#fdf6e3", border: "2px solid #f0d9a0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </div>
        <div style={{ background: "#fdf6e3", border: "1px solid #e8d89a", borderRadius: "8px", padding: "0.9rem 1.1rem", marginBottom: "1.5rem", textAlign: "center" }}>
  <p style={{ fontSize: "0.82rem", color: "#5a4a1a", lineHeight: 1.6, margin: 0 }}>
    <strong>Africodex Digital</strong> est une agence légitime enregistrée à Dakar, Sénégal. 
    Nous ne demandons jamais de paiement pour postuler. 
    Toute candidature se fait uniquement par email à{" "}
    <a href="mailto:africodexdigital@gmail.com" style={{ color: "#b8860b" }}>
      africodexdigital@gmail.com
    </a>
  </p>
</div>
        <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#111110", marginBottom: "0.8rem" }}>
          Envoyez votre candidature
        </h3>

        <p style={{ fontSize: "0.95rem", color: "#7a7a74", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 0.8rem" }}>
          Envoyez votre CV accompagné d'un message indiquant le poste qui vous intéresse à l'adresse suivante :
        </p>

        <a href={mailHref} style={{ display: "inline-block", fontSize: "1.05rem", fontWeight: 800, color: "#b8860b", marginBottom: "1.5rem", textDecoration: "none", borderBottom: "2px solid #b8860b", paddingBottom: "2px" }}>
          africodexdigital@gmail.com
        </a>

        <p style={{ fontSize: "0.82rem", color: "#7a7a74", maxWidth: "400px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
          Précisez en objet : <strong style={{ color: "#111110" }}>Candidature - [Poste qui vous intéresse]</strong>
        </p>
      </div>
    </section>
  );
}