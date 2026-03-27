import { useState } from "react";

// ─── CONTENU DE L'ARTICLE ─────────────────────────────────
const ARTICLE = {
  label: "Marketing Digital",
  date: "Mars 2025",
  readTime: "7 min de lecture",
  tags: ["SEO", "Google Business", "Visibilité", "PME"],

  intro: `Aujourd'hui, au Sénégal, une grande partie des clients commence sa recherche sur Google. Qu'il s'agisse d'un restaurant à Dakar, d'un salon de coiffure, d'une boutique, d'un cabinet ou d'une entreprise de services, le réflexe est souvent le même : taper une recherche sur internet avant de se déplacer, d'appeler ou de réserver.\n\nSi votre entreprise n'apparaît pas correctement sur Google, vous passez à côté d'une clientèle potentielle tous les jours. Être visible en ligne n'est plus un luxe. C'est devenu un levier essentiel pour développer son activité, améliorer sa notoriété et augmenter son chiffre d'affaires.`,

  sections: [
    {
      num: "01",
      title: "Pourquoi Google est devenu incontournable pour trouver des clients",
      body: "Lorsqu'une personne cherche un restaurant à Dakar, un traiteur, un développeur ou un service, elle passe souvent par Google. Elle veut voir rapidement les informations sur l'entreprise, les produits proposés, les horaires, l'adresse et les avis clients. Google est devenu une vitrine digitale permanente. Même quand votre entreprise est fermée, Google continue de travailler pour vous — le soir, le week-end ou depuis l'étranger.",
      tipsLabel: "Ce que les clients cherchent sur Google :",
      tips: [
        "Les informations sur l'entreprise et les services proposés",
        "Les horaires, l'adresse et le numéro de téléphone",
        "Les avis clients, les photos et le menu pour un restaurant",
        "Le site internet et la localisation sur Maps",
      ],
    },
    {
      num: "02",
      title: "Avoir un site internet professionnel pour être visible sur Google",
      body: "La première étape pour attirer plus de clients grâce à Google est d'avoir un site internet professionnel. Sans site web, votre entreprise manque de crédibilité et de visibilité. Un site vitrine est souvent le meilleur point de départ — il permet d'exister sur internet, d'être mieux référencé sur Google et de transformer les visiteurs en prospects.",
      tipsLabel: "Un site internet permet de :",
      tips: [
        "Présenter votre activité et expliquer vos services",
        "Rassurer les clients avec vos photos et réalisations",
        "Afficher vos coordonnées, tarifs ou demander un devis",
        "Permettre la réservation ou la prise de contact directe",
      ],
    },
    {
      num: "03",
      title: "Le référencement naturel SEO : la clé pour apparaître sur Google",
      body: "Avoir un site internet ne suffit pas. Il faut aussi qu'il soit optimisé pour le SEO — le référencement naturel sur Google. Le but n'est pas seulement d'avoir un beau site. Le but est que Google comprenne votre activité et propose votre site aux bonnes personnes au bon moment.",
      tipsLabel: "Le référencement repose sur :",
      tips: [
        "Des titres clairs et des pages bien structurées",
        "Des mots-clés pertinents et des textes utiles",
        "Un site rapide et parfaitement adapté au mobile",
        "Une bonne expérience utilisateur et des liens internes",
      ],
    },
    {
      num: "04",
      title: "Google Business Profile : un outil puissant pour les entreprises locales",
      body: "Pour attirer des clients grâce à Google au Sénégal, il est très important de créer et d'optimiser votre Google Business Profile. C'est la fiche qui apparaît sur Google Maps quand quelqu'un cherche une entreprise locale. Pour un restaurant, un traiteur, une boutique ou un cabinet, cette fiche peut générer beaucoup de contacts.",
      tipsLabel: "La fiche Google affiche :",
      tips: [
        "Le nom, l'adresse et le numéro de téléphone",
        "Vos horaires et votre site internet",
        "Vos photos et votre localisation sur Google Maps",
        "Vos avis clients visibles directement dans les résultats",
      ],
    },
    {
      num: "05",
      title: "Les avis clients et les photos professionnelles",
      body: "Les avis Google jouent un rôle très important. Beaucoup de clients regardent les notes et les commentaires avant de choisir une entreprise. Des photos de qualité peuvent fortement améliorer l'attractivité de votre activité — c'est particulièrement vrai pour les restaurants, hôtels, boutiques et salons. Un client qui voit une image propre et professionnelle sera beaucoup plus enclin à cliquer, appeler ou réserver.",
      tipsLabel: "Des avis positifs permettent de :",
      tips: [
        "Rassurer et améliorer votre image de marque",
        "Augmenter le taux de contact et de conversion",
        "Renforcer votre crédibilité auprès des prospects",
        "Améliorer votre visibilité locale sur Google",
      ],
    },
    {
      num: "06",
      title: "Un site mobile et une stratégie digitale cohérente",
      body: "Au Sénégal, beaucoup d'internautes naviguent principalement sur smartphone. Votre site internet doit donc être parfaitement adapté au mobile. Google tient compte de cela — un site lent ou difficile à utiliser sur téléphone peut perdre des positions dans les résultats. Pour attirer plus de clients, connectez intelligemment tous vos canaux : site internet, Google Business Profile, Instagram, Facebook, TikTok et WhatsApp.",
      tipsLabel: "Une bonne stratégie mobile inclut :",
      tips: [
        "Une lecture facile et un chargement rapide sur smartphone",
        "Un bouton d'appel direct et un accès simple à WhatsApp",
        "Une présence cohérente sur tous vos canaux digitaux",
        "Des informations à jour sur votre fiche et vos réseaux",
      ],
    },
  ],

  highlight: "Beaucoup d'entreprises perdent des clients tous les jours simplement parce qu'elles ne sont pas visibles sur Google. Le problème n'est pas toujours la qualité du service — c'est souvent le manque de présence en ligne. Aujourd'hui, être absent de Google, c'est laisser de l'argent à la concurrence.",

  africodex: {
    title: "Comment Africodex Digital vous aide à attirer plus de clients",
    body: "Chez Africodex Digital, nous accompagnons les entreprises, commerces, restaurants, traiteurs et entrepreneurs au Sénégal dans leur développement digital. Que vous soyez à Dakar ou ailleurs au Sénégal, notre objectif est simple : vous aider à développer votre activité avec des outils digitaux accessibles, efficaces et professionnels.",
    services: [
      "Créer un site internet professionnel",
      "Améliorer votre visibilité sur Google",
      "Structurer vos pages pour le SEO",
      "Créer une présence en ligne crédible",
      "Attirer plus de prospects qualifiés",
      "Convertir vos visiteurs en clients",
    ],
  },

  conclusion: `Attirer plus de clients grâce à Google au Sénégal n'est pas une question de chance. C'est une question de stratégie, de visibilité et de présence digitale.\n\nAvec un site internet bien conçu, un bon référencement naturel, une fiche Google optimisée, des contenus utiles, des photos de qualité et une vraie cohérence digitale, votre entreprise peut toucher plus de monde, inspirer confiance et générer plus d'opportunités.\n\nAujourd'hui, les clients cherchent sur Google. La vraie question est donc simple : est-ce qu'ils vous trouvent ?`,

  toc: [
    "Pourquoi Google est incontournable",
    "Avoir un site internet professionnel",
    "Le référencement naturel (SEO)",
    "Google Business Profile",
    "Avis clients et photos",
    "Site mobile et stratégie cohérente",
  ],

  related: [
    { icon: "🚀", title: "5 erreurs SEO que font les PME africaines", date: "Février 2025" },
    { icon: "📱", title: "Marketing WhatsApp au Sénégal : guide complet", date: "Janvier 2025" },
    { icon: "💡", title: "Comment créer un site web qui convertit à Dakar", date: "Décembre 2024" },
  ],
};

// ─── STYLES ───────────────────────────────────────────────
const S = {
  wrap: { fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#faf9f7", paddingTop: "80px" },

  hero: { background: "#111110", padding: "5rem 4rem 4rem", position: "relative", overflow: "hidden" },
  heroGlow: {
    position: "absolute", inset: 0, pointerEvents: "none",
    background: "radial-gradient(ellipse 55% 70% at 85% 50%, rgba(184,134,11,0.14) 0%, transparent 65%), radial-gradient(ellipse 40% 55% at 10% 80%, rgba(184,134,11,0.07) 0%, transparent 60%)",
  },
  heroInner: { maxWidth: "1100px", margin: "0 auto", position: "relative" },
  heroLabel: {
    display: "inline-block", fontSize: "0.68rem", fontWeight: 700,
    letterSpacing: "0.2em", textTransform: "uppercase", color: "#b8860b",
    border: "1px solid rgba(184,134,11,0.4)", padding: "0.35rem 1rem",
    borderRadius: "2px", marginBottom: "1.4rem",
  },
  heroTitle: { fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff", lineHeight: 1.2, fontWeight: 800, maxWidth: "750px", margin: 0 },
  heroAccent: { color: "#b8860b", fontStyle: "italic" },
  heroMeta: { display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.8rem", flexWrap: "wrap", color: "rgba(245,237,216,0.45)", fontSize: "0.78rem" },
  heroTag: { background: "rgba(184,134,11,0.18)", color: "#b8860b", padding: "0.2rem 0.7rem", borderRadius: "2px", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase" },
  dot: { width: 3, height: 3, background: "#b8860b", borderRadius: "50%", display: "inline-block" },

  layout: { maxWidth: "1100px", margin: "0 auto", padding: "4rem 4rem 7rem", display: "grid", gridTemplateColumns: "1fr 290px", gap: "3.5rem", alignItems: "start" },

  featImg: {
    width: "100%", aspectRatio: "16/6",
    background: "linear-gradient(135deg, #1a0f05 0%, #3d1f08 45%, #b8860b 100%)",
    borderRadius: "6px", marginBottom: "2.8rem",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "3.5rem", letterSpacing: "0.4rem", color: "rgba(255,255,255,0.12)",
  },

  intro: { fontSize: "1.02rem", lineHeight: 1.9, color: "#6b5e4e", borderLeft: "3px solid #b8860b", paddingLeft: "1.4rem", marginBottom: "3rem", whiteSpace: "pre-line" },

  section: { marginBottom: "2.8rem" },
  sectionNum: { fontSize: "3.2rem", fontWeight: 800, color: "rgba(184,134,11,0.08)", lineHeight: 1, marginBottom: "-0.9rem", display: "block" },
  sectionTitle: { fontSize: "1.3rem", fontWeight: 800, color: "#111110", marginBottom: "0.8rem", lineHeight: 1.3 },
  sectionBody: { fontSize: "0.95rem", lineHeight: 1.9, color: "#3a2e22", marginBottom: "0.9rem" },
  tipsLabel: { fontSize: "0.75rem", fontWeight: 700, color: "#b8860b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6rem" },
  tipsList: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" },
  tipItem: { display: "flex", alignItems: "flex-start", gap: "0.8rem", fontSize: "0.9rem", lineHeight: 1.6, color: "#3a2e22" },
  tipBullet: { flexShrink: 0, width: "22px", height: "22px", background: "#b8860b", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.6rem", fontWeight: 700, marginTop: "0.15rem" },

  divider: { width: "48px", height: "2px", background: "linear-gradient(to right, #b8860b, #d4a438)", margin: "2rem 0", borderRadius: "2px" },

  highlight: { background: "#111110", borderRadius: "6px", padding: "1.8rem 2rem 1.8rem 2.2rem", margin: "2.5rem 0", position: "relative", overflow: "hidden" },
  highlightBar: { position: "absolute", top: 0, left: 0, width: "4px", height: "100%", background: "linear-gradient(to bottom, #b8860b, #d4a438)" },
  highlightText: { color: "#faf9f7", fontSize: "0.98rem", lineHeight: 1.8, fontStyle: "italic", margin: 0 },
  highlightCite: { display: "block", marginTop: "0.7rem", color: "#b8860b", fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontStyle: "normal" },

  africoBox: { background: "#fff", border: "1px solid rgba(184,134,11,0.15)", borderRadius: "8px", padding: "2.2rem", margin: "2.5rem 0", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" },
  africoTitle: { fontSize: "1.15rem", fontWeight: 800, color: "#111110", marginBottom: "0.7rem" },
  africoBody: { fontSize: "0.93rem", lineHeight: 1.8, color: "#3a2e22", marginBottom: "1.2rem" },
  africoGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.55rem" },
  africoItem: { display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.88rem", lineHeight: 1.5, color: "#3a2e22" },
  africoArrow: { color: "#b8860b", fontWeight: 700, flexShrink: 0 },

  conclusionBox: { background: "linear-gradient(135deg, #111110 0%, #2a1a05 100%)", borderRadius: "8px", padding: "2.5rem", margin: "2.5rem 0" },
  conclusionLabel: { fontSize: "0.72rem", fontWeight: 700, color: "#b8860b", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" },
  conclusionText: { color: "rgba(245,237,216,0.82)", fontSize: "0.93rem", lineHeight: 1.85, whiteSpace: "pre-line", margin: 0 },

  cta: { background: "linear-gradient(135deg, #b8860b 0%, #8B6508 100%)", borderRadius: "8px", padding: "2.5rem 2rem", textAlign: "center", marginTop: "2.5rem" },
  ctaTitle: { fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "0.7rem" },
  ctaText: { color: "rgba(255,255,255,0.82)", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.5rem" },
  ctaBtn: { display: "inline-block", textDecoration: "none", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.85rem 2.2rem", borderRadius: "4px", border: "none", cursor: "pointer", transition: "all 0.25s" },

  sidebar: { position: "sticky", top: "100px" },
  sideCard: { background: "#fff", borderRadius: "6px", padding: "1.5rem", marginBottom: "1.2rem", border: "1px solid rgba(184,134,11,0.12)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" },
  sideTitle: { fontSize: "0.88rem", fontWeight: 800, color: "#111110", marginBottom: "1rem", paddingBottom: "0.65rem", borderBottom: "2px solid #f0ebe0" },
  tocLink: { display: "flex", gap: "0.45rem", alignItems: "flex-start", textDecoration: "none", color: "#7a7a74", fontSize: "0.8rem", lineHeight: 1.5, marginBottom: "0.5rem", transition: "color 0.2s" },
  tocArrow: { color: "#b8860b", flexShrink: 0, fontSize: "0.68rem", marginTop: "0.15rem" },
  relatedItem: { display: "flex", gap: "0.8rem", marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid #f0ebe0", alignItems: "flex-start" },
  relatedThumb: { width: "48px", height: "40px", borderRadius: "3px", flexShrink: 0, background: "#faf6ee", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" },
  relatedLink: { textDecoration: "none", color: "#111110", fontSize: "0.78rem", lineHeight: 1.45, fontWeight: 600, transition: "color 0.2s", display: "block" },
  relatedDate: { fontSize: "0.68rem", color: "#7a7a74", marginTop: "0.15rem" },
  tagCloud: { display: "flex", flexWrap: "wrap", gap: "0.4rem" },
  tagPill: { background: "#f0ebe0", color: "#7a7a74", fontSize: "0.7rem", padding: "0.28rem 0.7rem", borderRadius: "2px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", cursor: "pointer", border: "none", transition: "background 0.2s, color 0.2s" },
};

export default function Blog() {
  const [ctaHover, setCtaHover] = useState(false);

  return (
    <section id="blog" style={S.wrap}>

      {/* HERO */}
      <div style={S.hero}>
        <div style={S.heroGlow} />
        <div style={S.heroInner}>
          <span style={S.heroLabel}>Article · {ARTICLE.label}</span>
          <h1 style={S.heroTitle}>
            Comment attirer plus de clients grâce à{" "}
            <em style={S.heroAccent}>Google</em> au Sénégal&nbsp;?
          </h1>
          <div style={S.heroMeta}>
            {ARTICLE.tags.map(t => <span key={t} style={S.heroTag}>{t}</span>)}
            <span style={S.dot} />
            <span>{ARTICLE.date}</span>
            <span style={S.dot} />
            <span>{ARTICLE.readTime}</span>
          </div>
        </div>
      </div>

      {/* LAYOUT */}
      <div style={S.layout}>
        <main>
          {/* Image vedette */}
          <div style={S.featImg}>🌍</div>

          {/* Intro */}
          <p style={S.intro}>{ARTICLE.intro}</p>

          {/* Sections */}
          {ARTICLE.sections.map((sec, i) => (
            <div key={sec.num}>
              <div style={S.section}>
                <span style={S.sectionNum}>{sec.num}</span>
                <h2 style={S.sectionTitle}>{sec.title}</h2>
                <p style={S.sectionBody}>{sec.body}</p>
                <p style={S.tipsLabel}>{sec.tipsLabel}</p>
                <ul style={S.tipsList}>
                  {sec.tips.map((tip, j) => (
                    <li key={j} style={S.tipItem}>
                      <span style={S.tipBullet}>✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlight encadré après section 3 */}
              {i === 2 && (
                <div style={S.highlight}>
                  <div style={S.highlightBar} />
                  <p style={S.highlightText}>{ARTICLE.highlight}</p>
                  <cite style={S.highlightCite}>— Africodex Digital</cite>
                </div>
              )}

              {i < ARTICLE.sections.length - 1 && <div style={S.divider} />}
            </div>
          ))}

          {/* Bloc Africodex */}
          <div style={S.africoBox}>
            <h3 style={S.africoTitle}>{ARTICLE.africodex.title}</h3>
            <p style={S.africoBody}>{ARTICLE.africodex.body}</p>
            <div style={S.africoGrid}>
              {ARTICLE.africodex.services.map((s, i) => (
                <div key={i} style={S.africoItem}>
                  <span style={S.africoArrow}>→</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div style={S.conclusionBox}>
            <p style={S.conclusionLabel}>Conclusion</p>
            <p style={S.conclusionText}>{ARTICLE.conclusion}</p>
          </div>

          {/* CTA */}
          <div style={S.cta}>
            <h3 style={S.ctaTitle}>Prêt à attirer plus de clients&nbsp;?</h3>
            <p style={S.ctaText}>
              Vous voulez améliorer votre visibilité sur Google et attirer plus de clients au Sénégal ?<br />
              Contactez Africodex Digital pour créer un site internet professionnel et faire grandir votre activité.
            </p>
            <a
              href="#contact"
              style={{
                ...S.ctaBtn,
                background: ctaHover ? "#fff" : "#111110",
                color: ctaHover ? "#111110" : "#fff",
              }}
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
            >
              Nous contacter →
            </a>
          </div>
        </main>

        {/* SIDEBAR */}
        <aside style={S.sidebar}>
          <div style={S.sideCard}>
            <div style={S.sideTitle}>Dans cet article</div>
            {ARTICLE.toc.map((item, i) => (
              <a key={i} href="#blog" style={S.tocLink}
                onMouseEnter={e => e.currentTarget.style.color = "#b8860b"}
                onMouseLeave={e => e.currentTarget.style.color = "#7a7a74"}
              >
                <span style={S.tocArrow}>→</span>{item}
              </a>
            ))}
          </div>

          <div style={S.sideCard}>
            <div style={S.sideTitle}>À lire aussi</div>
            {ARTICLE.related.map((r, i) => (
              <div key={i} style={{ ...S.relatedItem, ...(i === ARTICLE.related.length - 1 ? { borderBottom: "none", marginBottom: 0, paddingBottom: 0 } : {}) }}>
                <div style={S.relatedThumb}>{r.icon}</div>
                <div>
                  <a href="#blog" style={S.relatedLink}
                    onMouseEnter={e => e.currentTarget.style.color = "#b8860b"}
                    onMouseLeave={e => e.currentTarget.style.color = "#111110"}
                  >{r.title}</a>
                  <div style={S.relatedDate}>{r.date}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={S.sideCard}>
            <div style={S.sideTitle}>Thèmes</div>
            <div style={S.tagCloud}>
              {["SEO", "Google Ads", "Dakar", "Sénégal", "PME", "Local", "Marketing", "Web"].map(t => (
                <button key={t} style={S.tagPill}
                  onMouseEnter={e => { e.currentTarget.style.background = "#b8860b"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#f0ebe0"; e.currentTarget.style.color = "#7a7a74"; }}
                >{t}</button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}