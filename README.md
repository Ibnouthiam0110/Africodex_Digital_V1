# Africodex Digital — Site Vitrine React

Site vitrine officiel d'Africodex Digital, développé avec React + Vite.

## Structure du projet

```
africodex/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # Point d'entrée
    ├── App.jsx               # Composant racine
    ├── styles/
    │   └── global.css        # Styles globaux & variables CSS
    ├── data/
    │   └── services.js       # Données : services, stats, étapes process
    └── components/
        ├── Navbar.jsx        # Barre de navigation fixe
        ├── Hero.jsx          # Section hero avec cards
        ├── StatsBand.jsx     # Bande de statistiques
        ├── About.jsx         # Section à propos
        ├── Services.jsx      # Grille de services
        ├── ServiceModal.jsx  # Modale détail service
        ├── SectionHeader.jsx # Composant réutilisable header de section
        ├── WhyAndProcess.jsx # Sections "Pourquoi nous" et "Processus"
        ├── Contact.jsx       # Formulaire de contact
        └── Footer.jsx        # Pied de page
```

## Installation & démarrage

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## Technologies utilisées

- **React 18** — UI
- **Vite** — Build tool ultra-rapide
- **CSS-in-JS** — Styles inline pour les composants
- **Google Fonts** — Bebas Neue, Plus Jakarta Sans, Fraunces

## Personnalisation

- **Données & contenus** → `src/data/services.js`
- **Couleurs & typographie** → `src/styles/global.css` (variables CSS)
- **Composants** → `src/components/`

## Contact

- Email : contact@africodex.digital
- WhatsApp : +33 7 66 38 93 11
- Localisation : Dakar, Sénégal
