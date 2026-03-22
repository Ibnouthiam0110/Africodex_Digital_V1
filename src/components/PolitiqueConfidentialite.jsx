export default function PolitiqueConfidentialite() {
  return (
    <section
      id="politique-confidentialite"
      style={{
        padding: "5rem 5rem",
        background: "#faf8f4",
        maxWidth: "860px",
        margin: "0 auto",
        fontFamily: "inherit",
      }}
    >
      <div style={{ marginBottom: "3rem" }}>
        <span
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#b8860b",
          }}
        >
          Légal
        </span>
        <h1
          style={{
            fontSize: "2.4rem",
            fontWeight: 800,
            color: "#111110",
            marginTop: "0.6rem",
            marginBottom: "0.8rem",
            lineHeight: 1.2,
          }}
        >
          Politique de Confidentialité
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#7a7a74" }}>
          Dernière mise à jour : mars 2026
        </p>
      </div>

      {[
        {
          title: "1. Qui sommes-nous ?",
          content: (
            <>
              <p>
                <strong>Africodex Digital</strong> est une agence de conception
                de solutions informatiques basée à Dakar, Sénégal. Nous
                concevons des sites web, applications mobiles, solutions
                e-commerce et stratégies digitales pour nos clients.
              </p>
              <p style={{ marginTop: "0.8rem" }}>
                Contact :{" "}
                <a
                  href="mailto:africodexdigital@gmail.com"
                  style={{ color: "#b8860b", textDecoration: "none" }}
                >
                  africodexdigital@gmail.com
                </a>
              </p>
            </>
          ),
        },
        {
          title: "2. Quelles données collectons-nous ?",
          content: (
            <>
              <p>
                Via notre formulaire de contact, nous collectons uniquement les
                informations que vous nous transmettez volontairement :
              </p>
              <ul style={{ marginTop: "0.8rem", paddingLeft: "1.4rem", lineHeight: 2 }}>
                <li>Votre nom</li>
                <li>Votre adresse e-mail</li>
                <li>Le nom de votre entreprise ou projet</li>
                <li>Le type de projet souhaité</li>
                <li>Votre message</li>
              </ul>
              <p style={{ marginTop: "0.8rem" }}>
                Nous ne collectons aucune donnée de navigation, aucun cookie de
                traçage, et aucune information sensible (mot de passe, données
                bancaires, etc.).
              </p>
            </>
          ),
        },
        {
          title: "3. Pourquoi collectons-nous ces données ?",
          content: (
            <p>
              Ces informations sont utilisées <strong>uniquement pour vous
              recontacter</strong> suite à votre demande et vous fournir un
              devis ou une consultation. Nous n'utilisons pas vos données à des
              fins commerciales tierces, et nous ne les revendons jamais.
            </p>
          ),
        },
        {
          title: "4. Comment sont traitées vos données ?",
          content: (
            <>
              <p>
                Votre message est transmis via{" "}
                <strong>EmailJS</strong>, un service tiers sécurisé, directement
                à notre boîte mail professionnelle. Vos données ne sont pas
                stockées dans une base de données par notre soin.
              </p>
              <p style={{ marginTop: "0.8rem" }}>
                Pour en savoir plus sur les pratiques d'EmailJS :{" "}
                <a
                  href="https://www.emailjs.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#b8860b", textDecoration: "none" }}
                >
                  emailjs.com/legal/privacy-policy
                </a>
              </p>
            </>
          ),
        },
        {
          title: "5. Combien de temps conservons-nous vos données ?",
          content: (
            <p>
              Vos données sont conservées dans notre boîte mail le temps
              nécessaire au traitement de votre demande, et au maximum{" "}
              <strong>12 mois</strong>. Passé ce délai, elles sont supprimées.
            </p>
          ),
        },
        {
          title: "6. Vos droits",
          content: (
            <>
              <p>
                Conformément aux principes généraux de protection des données,
                vous disposez des droits suivants :
              </p>
              <ul
                style={{ marginTop: "0.8rem", paddingLeft: "1.4rem", lineHeight: 2 }}
              >
                <li>
                  <strong>Droit d'accès</strong> — savoir quelles données nous
                  détenons sur vous
                </li>
                <li>
                  <strong>Droit de rectification</strong> — corriger vos
                  informations
                </li>
                <li>
                  <strong>Droit à l'effacement</strong> — demander la
                  suppression de vos données
                </li>
                <li>
                  <strong>Droit d'opposition</strong> — vous opposer à tout
                  traitement
                </li>
              </ul>
              <p style={{ marginTop: "0.8rem" }}>
                Pour exercer ces droits, écrivez-nous à{" "}
                <a
                  href="mailto:africodexdigital@gmail.com"
                  style={{ color: "#b8860b", textDecoration: "none" }}
                >
                  africodexdigital@gmail.com
                </a>
                . Nous répondons sous 72h.
              </p>
            </>
          ),
        },
        {
          title: "7. Modifications de cette politique",
          content: (
            <p>
              Nous nous réservons le droit de mettre à jour cette politique à
              tout moment. La date de dernière mise à jour est indiquée en haut
              de cette page. Nous vous encourageons à la consulter
              périodiquement.
            </p>
          ),
        },
      ].map(({ title, content }) => (
        <div
          key={title}
          style={{
            marginBottom: "2.5rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid #e5dfd3",
          }}
        >
          <h2
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "#111110",
              marginBottom: "1rem",
            }}
          >
            {title}
          </h2>
          <div style={{ fontSize: "0.92rem", color: "#444442", lineHeight: 1.8 }}>
            {content}
          </div>
        </div>
      ))}

      <div
        style={{
          background: "#fff",
          border: "1px solid #e5dfd3",
          borderRadius: "14px",
          padding: "1.5rem 2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            background: "#fdf6e3",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b8860b"
            strokeWidth="2"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>
        <div>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#7a7a74",
              marginBottom: "0.2rem",
            }}
          >
            Une question ?
          </div>
          <a
            href="mailto:africodexdigital@gmail.com"
            style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111110" }}
          >
            africodexdigital@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}