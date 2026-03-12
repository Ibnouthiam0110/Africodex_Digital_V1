import { useState } from "react";
import SectionHeader from "./SectionHeader";

// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_7qklb2t";
const EMAILJS_TEMPLATE_ID = "template_rox1c4r"; // ← remplace
const EMAILJS_PUBLIC_KEY  = "ye6YG9_SJgUTsO0rA";    // ← remplace
// ─────────────────────────────────────────────────────────────

const ContactItem = ({ icon, label, value, href }) => (
  <a href={href} target="_blank" rel="noreferrer"
    style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.2rem 1.5rem", background: "#fff", border: "1px solid #e5dfd3", borderRadius: "14px", textDecoration: "none", transition: "border-color 0.3s, transform 0.3s" }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "#b8860b"; e.currentTarget.style.transform = "translateX(5px)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5dfd3"; e.currentTarget.style.transform = "translateX(0)"; }}
  >
    <div style={{ width: "44px", height: "44px", background: "#fdf6e3", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
    <div>
      <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a7a74", marginBottom: "0.2rem" }}>{label}</div>
      <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111110" }}>{value}</div>
    </div>
  </a>
);

const inputBase = {
  width: "100%", padding: "0.9rem 1.1rem",
  background: "#faf8f4", border: "1.5px solid #e5dfd3",
  borderRadius: "8px", fontFamily: "inherit",
  fontSize: "0.9rem", color: "#2c2c2b", outline: "none",
  transition: "border-color 0.3s, background 0.3s",
  boxSizing: "border-box",
};

const labelStyle = {
  fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.08em",
  textTransform: "uppercase", color: "#7a7a74",
  display: "flex", gap: "0.2rem", marginBottom: "0.5rem",
};

export default function Contact() {
  const [form, setForm]     = useState({ nom: "", email: "", projet: "", type: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const errs = {};
    if (!form.nom.trim())     errs.nom     = true;
    if (!form.email.trim())   errs.email   = true;
    if (!form.projet.trim())  errs.projet  = true;
    if (!form.type)           errs.type    = true;
    if (!form.message.trim()) errs.message = true;
    return errs;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");

    try {
      if (!window.emailjs) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
        window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      }

      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:    form.nom,
        from_email:   form.email,
        project_name: form.projet,
        project_type: form.type,
        message:      form.message,
      });

      setStatus("success");
      setForm({ nom: "", email: "", projet: "", type: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);

    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const fieldStyle = (name) => ({
    ...inputBase,
    borderColor: errors[name] ? "#c0392b" : "#e5dfd3",
    background:  errors[name] ? "#fff5f5" : "#faf8f4",
  });

  const onFocus = (e) => { e.target.style.borderColor = "#b8860b"; e.target.style.background = "#fff"; };
  const onBlur  = (name) => (e) => {
    e.target.style.borderColor = errors[name] ? "#c0392b" : "#e5dfd3";
    e.target.style.background  = errors[name] ? "#fff5f5" : "#faf8f4";
  };

  const btnBg = { idle: "#111110", sending: "#888", success: "#1a5c3a", error: "#c0392b" };

  return (
    <section id="contact" style={{ padding: "7rem 5rem", background: "#faf8f4" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

        <div>
          <SectionHeader
            label="Contact"
            title="Lançons votre<br/>projet <em style='font-family:Fraunces,serif;font-style:italic;color:#b8860b'>ensemble</em>"
            subtitle="Première consultation gratuite. Notre équipe vous répond sous 24h."
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginTop: "2rem" }}>
            <ContactItem href="mailto:africodexdigital@gmail.com" label="Email" value="africodexdigital@gmail.com"
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>} />
            <ContactItem href="https://wa.me/33766389311" label="WhatsApp" value="+33 7 66 38 93 11"
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18H6.6a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 17z"/></svg>} />
            <ContactItem href="#" label="Localisation" value="Dakar, Sénégal"
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>} />
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e5dfd3", borderRadius: "22px", padding: "2.5rem", boxShadow: "0 6px 32px rgba(0,0,0,0.06)" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#111110", marginBottom: "0.3rem" }}>
            Parlez-nous de votre projet
          </h3>
          <p style={{ fontSize: "0.82rem", color: "#7a7a74", marginBottom: "1.8rem" }}>
            Tous les champs sont obligatoires <span style={{ color: "#c0392b" }}>*</span>
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", marginBottom: "1.2rem" }}>
              <div>
                <label style={labelStyle}>Nom <span style={{ color: "#c0392b" }}>*</span></label>
                <input name="nom" value={form.nom} onChange={handleChange} type="text" placeholder="Votre nom" style={fieldStyle("nom")} onFocus={onFocus} onBlur={onBlur("nom")} />
                {errors.nom && <span style={{ fontSize: "0.72rem", color: "#c0392b" }}>Champ obligatoire</span>}
              </div>
              <div>
                <label style={labelStyle}>Email <span style={{ color: "#c0392b" }}>*</span></label>
                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="email@exemple.com" style={fieldStyle("email")} onFocus={onFocus} onBlur={onBlur("email")} />
                {errors.email && <span style={{ fontSize: "0.72rem", color: "#c0392b" }}>Champ obligatoire</span>}
              </div>
            </div>

            <div style={{ marginBottom: "1.2rem" }}>
              <label style={labelStyle}>Entreprise / Projet <span style={{ color: "#c0392b" }}>*</span></label>
              <input name="projet" value={form.projet} onChange={handleChange} type="text" placeholder="Nom de votre entreprise" style={fieldStyle("projet")} onFocus={onFocus} onBlur={onBlur("projet")} />
              {errors.projet && <span style={{ fontSize: "0.72rem", color: "#c0392b" }}>Champ obligatoire</span>}
            </div>

            <div style={{ marginBottom: "1.2rem" }}>
              <label style={labelStyle}>Type de projet <span style={{ color: "#c0392b" }}>*</span></label>
              <select name="type" value={form.type} onChange={handleChange} style={{ ...fieldStyle("type"), appearance: "none", cursor: "pointer" }} onFocus={onFocus} onBlur={onBlur("type")}>
                <option value="">Choisissez...</option>
                {["Site Web","Application Mobile","E-commerce","Stratégie Digitale","UI/UX Design","Formation","Autre"].map(o => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              {errors.type && <span style={{ fontSize: "0.72rem", color: "#c0392b" }}>Champ obligatoire</span>}
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={labelStyle}>Message <span style={{ color: "#c0392b" }}>*</span></label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Décrivez votre projet, vos besoins..." rows={4} style={{ ...fieldStyle("message"), resize: "vertical" }} onFocus={onFocus} onBlur={onBlur("message")} />
              {errors.message && <span style={{ fontSize: "0.72rem", color: "#c0392b" }}>Champ obligatoire</span>}
            </div>

            <button type="submit" disabled={status === "sending"} style={{ width: "100%", padding: "1rem", background: btnBg[status] ?? "#111110", color: "#fff", border: "none", borderRadius: "8px", fontFamily: "inherit", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", cursor: status === "sending" ? "not-allowed" : "pointer", transition: "background 0.3s", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem" }}
              onMouseEnter={e => { if (status === "idle") e.currentTarget.style.background = "#b8860b"; }}
              onMouseLeave={e => { if (status === "idle") e.currentTarget.style.background = "#111110"; }}
            >
              {status === "sending" && <span style={{ width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.8s linear infinite" }} />}
              {status === "idle"    && "Envoyer le message →"}
              {status === "sending" && "Envoi en cours..."}
              {status === "success" && "✓ Message envoyé ! On vous répond sous 24h."}
              {status === "error"   && "❌ Erreur — vérifiez la configuration EmailJS"}
            </button>
          </form>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}