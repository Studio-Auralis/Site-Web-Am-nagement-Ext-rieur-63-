# Site Vitrine - Aménagement Extérieur

Site web vitrine moderne pour une entreprise familiale d'aménagement extérieur (45 ans d'expérience) basée dans le Puy-de-Dôme (63).

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
projet-b/
├── app/                      # App Router Next.js
│   ├── api/                  # API Routes
│   │   └── contact/          # Endpoint formulaire contact
│   ├── globals.css           # Styles globaux
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Page d'accueil
├── components/               # Composants React
│   ├── ui/                   # Composants UI de base (shadcn/ui)
│   ├── Header.tsx            # En-tête avec navigation
│   ├── Footer.tsx            # Pied de page
│   ├── HeroSection.tsx       # Section héro
│   ├── RealisationsSection.tsx  # Galerie réalisations
│   ├── SavoirFaireSection.tsx   # Section savoir-faire
│   ├── ContactSection.tsx    # Section contact
│   ├── ContactForm.tsx       # Formulaire avec upload
│   └── FloatingCallButton.tsx   # Bouton d'appel mobile
├── lib/                      # Utilitaires
│   └── utils.ts              # Helpers (cn)
└── public/                   # Assets statiques
```

## 🎨 Stack Technique

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19 + TypeScript
- **Styling**: Tailwind CSS 3.x
- **Composants**: shadcn/ui + lucide-react
- **Formulaires**: React Hook Form + Zod
- **Upload**: react-dropzone

## ✨ Fonctionnalités MVP

- ✅ Header avec navigation responsive
- ✅ Section Hero avec badges de confiance
- ✅ Galerie de réalisations avec filtres
- ✅ Section savoir-faire (process)
- ✅ Formulaire de contact avec validation
- ✅ Upload de photos client (max 3, 5MB chacune)
- ✅ Bouton d'appel flottant mobile
- ✅ Design responsive mobile-first
- ✅ Optimisations SEO (metadata)

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` :

```env
# Resend (Email)
RESEND_API_KEY=votre_clé_api_resend
RESEND_FROM_EMAIL=contact@votredomaine.fr
RESEND_TO_EMAIL=votre-email@exemple.fr

# MongoDB (pour Payload CMS - V1)
MONGODB_URI=votre_uri_mongodb

# Vercel Blob (pour stockage images - V1)
BLOB_READ_WRITE_TOKEN=votre_token_blob
```

### Activation de l'envoi d'emails

1. Créer un compte sur [Resend](https://resend.com)
2. Obtenir une clé API
3. Ajouter les variables d'environnement
4. Décommenter le code Resend dans `app/api/contact/route.ts`
5. Installer Resend : `npm install resend`

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

Ou connecter directement depuis [vercel.com](https://vercel.com).

### Build de production

```bash
npm run build
npm run start
```

## 📝 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Linter ESLint

## 🎯 Prochaines Étapes (V1)

- [ ] Intégration Payload CMS
- [ ] Configurateur visuel express
- [ ] Carte interactive des interventions
- [ ] Générateur de PDF lookbook
- [ ] Pages SEO par ville
- [ ] Portfolio complet (50 photos)

## 📚 Documentation

- [PRD.md](./PRD.md) - Spécifications fonctionnelles
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Architecture technique
- [CLAUDE.md](./CLAUDE.md) - Instructions pour Claude Code

## 🤝 Support

Pour toute question ou assistance :
- Email: contact@exemple.fr
- Téléphone: +33 0 00 00 00 00

---

**© 2026 Aménagement Extérieur - Tous droits réservés**
