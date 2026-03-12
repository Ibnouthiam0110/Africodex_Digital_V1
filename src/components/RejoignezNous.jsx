import { useState, useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

const POSTES = [
  {
    id: "apporteur",
    titre: "Apporteur d'affaires",
    missions: [
      "Identifier et prospecter de nouveaux clients potentiels (PME, startups, entrepreneurs) dans votre reseau",
      "Presenter les services d'Africodex Digital et mettre en relation avec notre equipe commerciale",
      "Suivre les opportunites jusqu'a la signature du contrat",
      "Participer a des evenements networking et salons professionnels pour developper la notoriete",
      "Remonter les retours du marche pour ameliorer notre offre",
    ],
    profil: [
      "Bonne aisance relationnelle et sens du contact",
      "Reseau professionnel actif (entrepreneurs, dirigeants de PME, associations)",
      "Motivation et autonomie — remuneration a la commission",
      "Connaissance basique du digital appreciee, mais non obligatoire",
    ],
    remuneration: "Commission attractive sur chaque contrat signe",
    couleur: "#fdf6e3",
    accent: "#b8860b",
  },
  {
    id: "developpeur",
    titre: "Developpeur Web/Mobile",
    missions: [
      "Concevoir et developper des sites web, applications web et mobiles pour nos clients",
      "Collaborer avec l'equipe design pour integrer des maquettes UI/UX avec precision",
      "Ecrire du code propre, maintenable et bien documente",
      "Participer aux revues de code et aux reunions techniques",
      "Assurer la maintenance, le debogage et les mises a jour des projets livres",
      "Respecter les delais et communiquer regulierement sur l'avancement",
    ],
    profil: [
      "Maitrise de React.js, React Native ou Next.js",
      "Connaissance de Node.js, MongoDB ou autres technologies backend",
      "Experience avec Git et les bonnes pratiques de developpement",
      "Portfolio ou projets personnels demontrant vos competences",
      "Esprit d'equipe, rigueur et curiosite technique",
    ],
    remuneration: "Remuneration selon profil et experience",
    couleur: "#f0f7ff",
    accent: "#2563eb",
  },
];

const inputBase = { width: "100%", padding: "0.9rem 1.1rem", background: "#faf8f4", border: "1.5px solid #e5dfd3", borderRadius: "8px", fontFamily: "inherit", fontSize: "0.9rem", color: "#2c2c2b", outline: "none", transition: "border-color 0.3s, background 0.3s", boxSizing: "border-box" };
const labelStyle = { fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7a7a74", display: "block", marginBottom: "0.5rem" };
const onFocus = (e) => { e.target.style.borderColor = "#b8860b"; e.target.style.background = "#fff"; };
const onBlur  = (e) => { e.target.style.borderColor = "#e5dfd3"; e.target.style.background = "#faf8f4"; };

function PosteCard({ poste, selected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(poste.id)}
      style={{ background: selected ? poste.couleur : "#fff", border: `2px solid ${selected ? poste.accent : "#e5dfd3"}`, borderRadius: "20px", padding: "2rem", cursor: "pointer", transition: "all 0.3s", boxShadow: selected ? `0 8px 32px ${poste.accent}22` : "0 2px 12px rgba(0,0,0,0.04)" }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.2rem" }}>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: poste.accent }}>{poste.titre}</div>
        <div style={{ width: "20px", height: "20px", borderRadius: "50%", border: `2px solid ${poste.accent}`, background: selected ? poste.accent : "transparent", transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
        <div style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a7a74", marginBottom: "0.7rem" }}>Profil recherche</div>
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
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", cv: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
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

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: false }));
  };

  const validate = () => {
    const errs = {};
    if (!form.nom.trim())    errs.nom    = true;
    if (!form.prenom.trim()) errs.prenom = true;
    if (!form.email.trim())  errs.email  = true;
    if (!form.cv.trim())     errs.cv     = true;
    if (!selected)           errs.poste  = true;
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});

    const posteNom = POSTES.find(p => p.id === selected)?.titre || selected;
    const sujet = encodeURIComponent(`Candidature - ${posteNom} - ${form.prenom} ${form.nom}`);
    const corps = encodeURIComponent(
      `Bonjour,\n\nJe souhaite postuler au poste de : ${posteNom}\n\nNom : ${form.nom}\nPrenom : ${form.prenom}\nEmail : ${form.email}\n\nLien CV : ${form.cv}\n\nCordialement,\n${form.prenom} ${form.nom}`
    );

    window.location.href = `mailto:africodexdigital@gmail.com?subject=${sujet}&body=${corps}`;
    setStatus("success");
    setForm({ nom: "", prenom: "", email: "", cv: "" });
    setSelected(null);
    setTimeout(() => setStatus("idle"), 5000);
  };

  const fieldStyle = (name) => ({ ...inputBase, borderColor: errors[name] ? "#c0392b" : "#e5dfd3", background: errors[name] ? "#fff5f5" : "#faf8f4" });
  const btnBg = { idle: "#111110", success: "#1a5c3a", error: "#c0392b" };

  return (
    <section id="rejoignez-nous" style={{ padding: isMobile ? "4rem 1.2rem" : "7rem 5rem", background: "#fff" }}>
      <SectionHeader
        label="Rejoignez-nous"
        title="Construisons <em style='font-family:Fraunces,serif;font-style:italic;color:#b8860b'>ensemble</em>"
        subtitle="Que vous soyez commercial, developpeur ou createur — il y a une place pour vous chez Africodex Digital."
        centered
      />

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.8rem", marginTop: "3.5rem" }}>
        {POSTES.map(poste => (
          <PosteCard key={poste.id} poste={poste} selected={selected === poste.id} onSelect={handleSelect} />
        ))}
      </div>

      <div ref={formRef} style={{ marginTop: "4rem", background: "#faf8f4", border: "1px solid #e5dfd3", borderRadius: "24px", padding: isMobile ? "2rem 1.2rem" : "3rem" }}>
        <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#111110", marginBottom: "0.4rem" }}>
          Postuler maintenant
        </h3>
        <p style={{ fontSize: "0.88rem", color: "#7a7a74", marginBottom: "2rem" }}>
          {selected
            ? `Vous postulez pour : ${POSTES.find(p => p.id === selected)?.titre}`
            : "Selectionnez un poste ci-dessus, puis remplissez le formulaire."}
        </p>

        {errors.poste && (
          <div style={{ background: "#fff5f5", border: "1px solid #c0392b", borderRadius: "8px", padding: "0.8rem 1.2rem", marginBottom: "1.5rem", fontSize: "0.85rem", color: "#c0392b", fontWeight: 600 }}>
            Veuillez selectionner un poste avant d'envoyer.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.2rem", marginBottom: "1.2rem" }}>
            <div>
              <label style={labelStyle}>Prenom *</label>
              <input name="prenom" value={form.prenom} onChange={handleChange} type="text" placeholder="Votre prenom" style={fieldStyle("prenom")} onFocus={onFocus} onBlur={onBlur} />
              {errors.prenom && <span style={{ fontSize: "0.72rem", color: "#c0392b" }}>Champ obligatoire</span>}
            </div>
            <div>
              <label style={labelStyle}>Nom *</label>
              <input name="nom" value={form.nom} onChange={handleChange} type="text" placeholder="Votre nom" style={fieldStyle("nom")} onFocus={onFocus} onBlur={onBlur} />
              {errors.nom && <span style={{ fontSize: "0.72rem", color: "#c0392b" }}>Champ obligatoire</span>}
            </div>
          </div>

          <div style={{ marginBottom: "1.2rem" }}>
            <label style={labelStyle}>Email *</label>
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="votre@email.com" style={fieldStyle("email")} onFocus={onFocus} onBlur={onBlur} />
            {errors.email && <span style={{ fontSize: "0.72rem", color: "#c0392b" }}>Champ obligatoire</span>}
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={labelStyle}>Lien vers votre CV *</label>
            <input name="cv" value={form.cv} onChange={handleChange} type="url" placeholder="https://drive.google.com/votre-cv" style={fieldStyle("cv")} onFocus={onFocus} onBlur={onBlur} />
            <span style={{ fontSize: "0.75rem", color: "#7a7a74", marginTop: "0.4rem", display: "block" }}>
              Partagez votre CV sur Google Drive et collez le lien ici.
            </span>
            {errors.cv && <span style={{ fontSize: "0.72rem", color: "#c0392b" }}>Veuillez joindre le lien de votre CV</span>}
          </div>

          <button type="submit" style={{ width: "100%", padding: "1rem", background: btnBg[status] ?? "#111110", color: "#fff", border: "none", borderRadius: "8px", fontFamily: "inherit", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", cursor: "pointer", transition: "background 0.3s", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem" }}
            onMouseEnter={e => { if (status === "idle") e.currentTarget.style.background = "#b8860b"; }}
            onMouseLeave={e => { if (status === "idle") e.currentTarget.style.background = "#111110"; }}
          >
            {status === "idle"    && "Envoyer ma candidature →"}
            {status === "success" && "Candidature envoyee ! On vous contacte bientot."}
            {status === "error"   && "Erreur — reessayez ou ecrivez-nous directement"}
          </button>
        </form>
      </div>
    </section>
  );
}