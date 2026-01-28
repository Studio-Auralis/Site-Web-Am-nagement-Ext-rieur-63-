# Architecture Technique - Site Aménagement Extérieur (63)

## 🎯 Stack Retenue : Next.js 15 + TypeScript + Tailwind CSS

### Vue d'ensemble
Application web moderne orientée performance et SEO local, construite avec Next.js 15 (App Router) pour transformer un portfolio de ~50 réalisations en outil de conversion client.

---

## 📐 Architecture Globale

```
┌─────────────────────────────────────────────────────────┐
│                    Utilisateur Final                     │
│              (Particuliers Puy-de-Dôme)                  │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │    Vercel Edge CDN     │ ← Mise en cache globale
        └────────────┬───────────┘
                     │
                     ▼
┌────────────────────────────────────────────────────────┐
│              Next.js 15 Application                     │
│  ┌──────────────────────────────────────────────────┐  │
│  │  App Router (SSR/SSG)                            │  │
│  │  - Pages statiques (SEO)                         │  │
│  │  - API Routes (formulaires, upload)              │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Components React 19                             │  │
│  │  - Galerie photos (50 max)                       │  │
│  │  - Formulaire contact + upload                   │  │
│  │  - Configurateur visuel (V1)                     │  │
│  │  - Carte interactive (V1)                        │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
                     │
         ┌───────────┴───────────┐
         │                       │
         ▼                       ▼
┌─────────────────┐    ┌──────────────────┐
│  Payload CMS    │    │  Resend (Email)  │
│  (Photos Admin) │    │  + Attachments   │
└─────────────────┘    └──────────────────┘
```

---

## 🛠 Stack Technique Détaillée

### Frontend Core

```json
{
  "framework": "Next.js 15.x (App Router)",
  "runtime": "React 19.x",
  "language": "TypeScript 5.x",
  "styling": "Tailwind CSS 3.x",
  "ui-components": "shadcn/ui (composants réutilisables)",
  "icons": "lucide-react",
  "animations": "Framer Motion (optionnel)"
}
```

**Justification :**
- Next.js 15 : SSR/SSG natif pour SEO, Image Optimization, API Routes
- TypeScript : Réduction bugs, meilleure DX
- Tailwind : Développement rapide, bundle optimisé
- shadcn/ui : Composants accessibles, personnalisables, sans dépendance NPM lourde

---

### Gestion des Images (50 photos)

**✅ Choix Retenu : Payload CMS (Self-hosted sur Vercel)**

**Besoin identifié :** Interface d'administration pour que vous (et votre client futur) puissiez ajouter/modifier/supprimer les photos du portfolio sans intervention développeur.

#### Architecture Payload CMS

```typescript
// Collections Payload
collections: [
  {
    slug: 'realisations',
    fields: [
      { name: 'titre', type: 'text', required: true },
      { name: 'description', type: 'textarea' },
      { name: 'ville', type: 'select', options: ['Clermont-Ferrand', 'Riom', ...] },
      { name: 'categorie', type: 'select', options: ['Portail', 'Terrasse', 'Clôture'] },
      { name: 'photo', type: 'upload', relationTo: 'media' },
      { name: 'featured', type: 'checkbox' } // Mise en avant page d'accueil
    ]
  }
]
```

**Accès Admin :** `votre-site.com/admin`

**Avantages :**
- ✅ Interface moderne et intuitive (drag & drop upload)
- ✅ Optimisation images automatique (WebP, resize)
- ✅ 100% gratuit (self-hosted sur Vercel)
- ✅ Pas de limite de photos (stockage Vercel Blob inclus)
- ✅ TypeScript natif (types auto-générés pour Next.js)
- ✅ Backup automatique avec base MongoDB Atlas (gratuit 512MB)
- ✅ Multi-utilisateurs (vous + client avec permissions différentes)

**Coût Total :**
- Payload CMS : 0€ (open-source)
- MongoDB Atlas : 0€ (plan gratuit suffisant)
- Vercel Blob Storage : 0€ (1GB inclus = ~200 photos haute qualité)

**Alternative si budget très serré :**
- Sanity CMS (hébergé) : 0€ jusqu'à 3 utilisateurs, puis 20€/mois
- Cloudinary : 25GB gratuit (mais pas de CMS complet)

---

### Formulaires & Validation

```json
{
  "forms": "React Hook Form 7.x",
  "validation": "Zod 3.x",
  "upload-client": "react-dropzone",
  "upload-backend": "[À DÉFINIR]"
}
```

**Exemple de validation :**
```typescript
const contactSchema = z.object({
  nom: z.string().min(2, "Nom requis"),
  ville: z.string().regex(/63\d{3}/, "Code postal 63 requis"),
  typeProjet: z.enum(["Portail", "Terrasse", "Clôture", "Autre"]),
  budget: z.enum(["< 5k€", "5-10k€", "10-20k€", "> 20k€"]),
  photos: z.array(z.instanceof(File)).max(3, "3 photos max")
});
```

**✅ Upload Photos Client (2-3 images) : Email Uniquement**

**Choix Retenu :** Pas de stockage permanent, photos jointes directement à l'email de demande.

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();

  // Conversion photos en base64 pour attachments
  const photos = [];
  for (let i = 0; i < 3; i++) {
    const file = formData.get(`photo${i}`);
    if (file) {
      const buffer = await file.arrayBuffer();
      photos.push({
        filename: file.name,
        content: Buffer.from(buffer).toString('base64'),
      });
    }
  }

  await resend.emails.send({
    from: 'contact@votre-domaine.fr',
    to: 'commercial@entreprise.fr',
    subject: `Demande ${formData.get('ville')} - ${formData.get('projet')}`,
    attachments: photos, // Photos jointes directement
    html: `<html>...</html>`
  });
}
```

**Avantages :**
- ✅ Simplicité maximale (pas de DB, pas de stockage tiers)
- ✅ 0€ de coût (3000 emails/mois gratuit avec Resend)
- ✅ Pas de RGPD complexe (données non conservées)
- ✅ Réception instantanée avec pièces jointes

**Limites acceptées :**
- Taille max 10MB par email (largement suffisant pour 3 photos compressées)
- Pas d'historique centralisé (acceptable selon vos réponses)

---

### Base de Données

**✅ Choix Retenu : MongoDB Atlas (Gratuit) - Uniquement pour Payload CMS**

**Précision importante :**
- ❌ **Pas de stockage des leads** dans la base (email uniquement)
- ✅ **Base de données nécessaire** uniquement pour le CMS Payload (gestion des photos portfolio)

```typescript
// Configuration Payload CMS
database: {
  provider: 'mongodb',
  url: process.env.MONGODB_URI // MongoDB Atlas gratuit (512MB)
}
```

**Collections stockées :**
- `realisations` : Les 50 photos du portfolio + métadonnées
- `media` : Fichiers uploadés (photos)
- `users` : Comptes admin (vous + client)

**Pas de collection `leads` :**
- Les demandes de contact vont directement par email
- Pas d'historique centralisé (choix validé pour simplicité)

**MongoDB Atlas (Gratuit) :**
- 512MB de stockage
- Largement suffisant pour 50 photos (métadonnées) + utilisateurs
- Backup automatique
- Hébergé en UE (RGPD compliant)

---

### SEO & Analytics

#### SEO
```json
{
  "sitemap": "next-sitemap (auto-génération)",
  "metadata": "Next.js Metadata API (native)",
  "structured-data": "JSON-LD Schema.org LocalBusiness",
  "robots": "Configuration par environnement"
}
```

**Pages SEO Locales (V1) :**
```
/villes/clermont-ferrand
/villes/riom
/villes/issoire
/villes/thiers
```

#### Analytics

**Option A : Vercel Analytics** (Payant après seuil)
- 2500 événements/mois gratuit
- Puis 10€/mois

**Option B : Plausible Analytics** (RGPD-friendly)
- 10k vues/mois : 9€/mois
- Hébergé en UE

**Option C : Google Analytics 4** (Gratuit)
- Gratuit illimité
- Nécessite cookie banner RGPD

**❓ Question : Budget analytics mensuel acceptable ?**

---

### API Routes & Serverless Functions

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json();

  // Validation Zod
  const validated = contactSchema.parse(body);

  // Envoi email
  await resend.emails.send({
    from: 'contact@votre-domaine.fr',
    to: 'commercial@entreprise.fr',
    subject: `Nouveau lead ${validated.ville}`,
    html: emailTemplate(validated)
  });

  // Stockage DB (optionnel)
  await db.leads.create(validated);

  return Response.json({ success: true });
}
```

---

## 🗺 Fonctionnalités Spécifiques

### 1. Bouton d'Appel Mobile Persistant

```typescript
// components/mobile-call-button.tsx
'use client';

export function MobileCallButton() {
  return (
    <a
      href="tel:+33473000000"
      className="fixed bottom-4 right-4 z-50 bg-primary text-white
                 px-6 py-3 rounded-full shadow-lg md:hidden
                 hover:scale-105 transition-transform"
    >
      📞 Appeler
    </a>
  );
}
```

---

### 2. Galerie Photos (50 max)

**Approche Simple :**
```typescript
// app/realisations/page.tsx
import Image from 'next/image';

const realisations = [
  { id: 1, titre: "Portail moderne Clermont", image: "/realisations/portail-1.webp" },
  // ... 50 max
];

export default function RealisationsPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {realisations.map(real => (
        <Image
          key={real.id}
          src={real.image}
          alt={real.titre}
          width={400}
          height={300}
          className="rounded-lg hover:scale-105 transition"
          loading="lazy"
        />
      ))}
    </div>
  );
}
```

**Pas besoin de :** Pagination, virtualisation, CDN complexe (50 photos OK pour bundle)

---

### 3. Configurateur Visuel (V1)

**📌 Statut : À implémenter une fois les images disponibles**

**Besoin :** Permettre aux clients de visualiser différentes couleurs/styles sur vos modèles de portails/terrasses.

#### Approche Recommandée : Switch d'Images Simple

```typescript
// components/configurateur.tsx
'use client';

const COULEURS_RAL = [
  { code: '7016', nom: 'Gris Anthracite', hex: '#383e42' },
  { code: '9005', nom: 'Noir Profond', hex: '#0a0a0a' },
  { code: '9006', nom: 'Aluminium Blanc', hex: '#a5a5a5' },
  { code: '6005', nom: 'Vert Mousse', hex: '#2f4538' },
];

export function ConfigurateurPortail() {
  const [couleur, setCouleur] = useState('7016');
  const [modele, setModele] = useState('moderne');

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Preview */}
      <div className="relative aspect-video">
        <Image
          src={`/configurateur/${modele}-${couleur}.webp`}
          alt={`Portail ${modele} RAL ${couleur}`}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Sélecteurs */}
      <div className="space-y-6">
        <div>
          <label>Couleur RAL</label>
          <div className="grid grid-cols-4 gap-3 mt-3">
            {COULEURS_RAL.map(c => (
              <button
                key={c.code}
                onClick={() => setCouleur(c.code)}
                className={`aspect-square rounded-lg border-2 transition
                  ${couleur === c.code ? 'border-primary-600' : 'border-neutral-200'}`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>

        <Button>Demander ce Modèle</Button>
      </div>
    </div>
  );
}
```

**Prérequis pour V1 :**
1. Vous fournissez 2-3 modèles de portails (photos)
2. Pour chaque modèle, 4-5 variantes de couleur
3. Total : ~12-15 images à préparer (peut être fait dans Photoshop/GIMP)

**Alternative si pas d'images variantes :**
- Afficher une seule photo + liste couleurs disponibles
- Texte : "Disponible en RAL 7016, 9005, 9006..."
- Implémentation configurateur complet en V2

**Option Avancée (V2+) :**
- Canvas API pour recoloration dynamique (1 seule image source)
- React Three Fiber pour vue 3D rotative
- ARKit pour visualisation dans le jardin du client (mobile)

---

### 4. Carte Interactive Département 63 (V1)

**Besoin :** Montrer zones d'intervention avec heatmap

#### Option A : Leaflet (Gratuit 100%)
```typescript
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

<MapContainer center={[45.77, 3.08]} zoom={9}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  {interventions.map(point => <Marker position={point} />)}
</MapContainer>
```
- **Coût** : 0€
- **Limites** : Style basique, customisation CSS

#### Option B : Mapbox GL (Freemium)
```typescript
import Map from 'react-map-gl';

<Map
  mapboxAccessToken={token}
  initialViewState={{ latitude: 45.77, longitude: 3.08, zoom: 9 }}
  mapStyle="mapbox://styles/mapbox/streets-v12"
/>
```
- **Coût** : 50k loads/mois gratuit (largement suffisant)
- **Avantages** : Styles pro, heatmap natif, animations

**❓ Question : Budget pour carte (gratuit Leaflet ou Mapbox freemium) ?**

---

### 5. Génération PDF Lookbook (V1)

**Besoin :** Lead magnet - catalogue d'inspiration contre email

#### Option A : @react-pdf/renderer (Serveur)
```typescript
import { Document, Page, Image, Text } from '@react-pdf/renderer';

const LookbookPDF = () => (
  <Document>
    <Page>
      <Text>Nos Plus Belles Réalisations</Text>
      {photos.map(p => <Image src={p.url} />)}
    </Page>
  </Document>
);
```
- Génération côté serveur (API Route)
- Qualité pro, custom layout

#### Option B : jsPDF (Client)
```typescript
import jsPDF from 'jspdf';

const pdf = new jsPDF();
pdf.addImage(photo, 'JPEG', 10, 10);
pdf.save('lookbook.pdf');
```
- Génération côté client (plus rapide)
- Moins flexible pour layout complexe

**Recommandation :** @react-pdf/renderer pour qualité professionnelle

---

## 🏗 Structure du Projet

```
projet-amenagement-63/
├── app/
│   ├── (marketing)/              # Routes publiques
│   │   ├── page.tsx              # Accueil
│   │   ├── layout.tsx            # Layout avec CTA mobile
│   │   ├── realisations/
│   │   │   ├── page.tsx          # Galerie 50 photos
│   │   │   └── [slug]/page.tsx   # Détail réalisation (optionnel)
│   │   ├── savoir-faire/
│   │   │   └── page.tsx          # Process Conception > Fab > Pose
│   │   ├── contact/
│   │   │   └── page.tsx          # Formulaire + upload
│   │   └── villes/               # V1 - SEO local
│   │       └── [slug]/page.tsx   # /villes/clermont-ferrand
│   │
│   ├── configurateur/            # V1
│   │   └── page.tsx              # Configurateur visuel
│   │
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts          # POST formulaire
│   │   ├── upload/
│   │   │   └── route.ts          # Upload photos client
│   │   └── generate-pdf/         # V1
│   │       └── route.ts          # Génération lookbook
│   │
│   ├── layout.tsx                # Root layout (metadata globale)
│   └── globals.css               # Styles Tailwind
│
├── components/
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── galerie-photos.tsx
│   ├── formulaire-contact.tsx
│   ├── mobile-call-button.tsx
│   ├── carte-interventions.tsx   # V1
│   └── configurateur.tsx         # V1
│
├── lib/
│   ├── utils.ts                  # Helpers (cn, formatters)
│   ├── validations.ts            # Schémas Zod
│   ├── email.ts                  # Service email (Resend)
│   └── db.ts                     # Client DB (si nécessaire)
│
├── public/
│   ├── realisations/             # 50 photos optimisées
│   │   ├── portail-1.webp
│   │   └── ...
│   └── configurateur/            # Images configurateur (V1)
│
├── types/
│   └── index.ts                  # Types TypeScript globaux
│
├── .env.local                    # Variables d'environnement
├── next.config.ts                # Config Next.js
├── tailwind.config.ts            # Config Tailwind
├── tsconfig.json                 # Config TypeScript
└── package.json
```

---

## 🔐 Variables d'Environnement

```bash
# .env.local

# Payload CMS
PAYLOAD_SECRET=votre_secret_aleatoire_32_chars
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/amenagement63

# Email (Resend)
RESEND_API_KEY=re_xxx
CONTACT_EMAIL_FROM=contact@votre-domaine.fr
CONTACT_EMAIL_TO=commercial@entreprise.fr

# Contact
CONTACT_PHONE=+33473000000

# Vercel Blob (storage photos CMS)
BLOB_READ_WRITE_TOKEN=vercel_blob_xxx

# Maps V1 (si Mapbox - optionnel, Leaflet gratuit suffit)
NEXT_PUBLIC_MAPBOX_TOKEN=pk.xxx

# Site
NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr
```

---

## 📦 Dépendances Principales

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.0.0",

    "tailwindcss": "^3.4.0",
    "lucide-react": "^0.400.0",
    "framer-motion": "^11.0.0",

    "react-hook-form": "^7.51.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",

    "react-dropzone": "^14.2.0",

    "resend": "^3.2.0",

    "payload": "^2.8.0",
    "@payloadcms/db-mongodb": "^1.0.0",
    "@payloadcms/richtext-slate": "^1.0.0",
    "@payloadcms/bundler-webpack": "^1.0.0",

    "[À CHOISIR - Maps - V1]": {
      "react-leaflet": "^4.2.1",
      "leaflet": "^1.9.4",
      "react-map-gl": "^7.1.0",
      "mapbox-gl": "^3.1.0"
    },

    "[V1 - PDF]": {
      "@react-pdf/renderer": "^3.3.0"
    }
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^15.0.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

---

## 🚀 Déploiement & Hébergement

### Hébergement

**✅ Choix Retenu : Vercel**

```bash
# Déploiement automatique depuis GitHub
git push origin main
# → Vercel détecte, build et déploie automatiquement
```

**Configuration :**
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["cdg1"] // Paris (plus proche du 63)
}
```

**Plan Hobby (Gratuit) inclut :**
- ✅ 100GB bandwidth/mois (largement suffisant pour site local)
- ✅ Unlimited requests
- ✅ Vercel Analytics : 2500 events/mois
- ✅ Automatic HTTPS (SSL gratuit)
- ✅ Edge CDN global (150+ locations)
- ✅ Preview deployments (test avant prod)
- ✅ Vercel Blob : 1GB storage (pour Payload CMS)

**Coût estimé :**
- **MVP (0-10k visites/mois)** : 0€/mois
- **Production (10-50k visites/mois)** : 0€/mois (sous les 100GB)
- **Si forte croissance (>100GB)** : Vercel Pro 20€/mois

**Domaine personnalisé :**
- Configuration DNS simple (CNAME + A record)
- SSL automatique via Let's Encrypt

---

## 🎨 Design System

**✅ Identité Visuelle Proposée**

### Palette de Couleurs "Artisan Moderne"

**Inspirée du secteur :** Matériaux nobles (bois, métal, pierre) + verdure Auvergne

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Couleur principale : Vert Forêt Auvergne
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',  // Principal
          600: '#16a34a',
          700: '#15803d',  // Hover states
          800: '#166534',
          900: '#14532d',
        },

        // Accent : Bois Chaud (CTA secondaire)
        accent: {
          DEFAULT: '#d97706', // Ambre/Bois
          foreground: '#ffffff',
        },

        // Neutre : Gris Anthracite (Métal/Pierre)
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },

        // État succès (formulaires)
        success: '#10b981',

        // État erreur
        error: '#ef4444',
      },

      // Ombres adaptées secteur BTP
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'strong': '0 8px 24px rgba(0, 0, 0, 0.18)',
      }
    }
  }
}
```

**Pourquoi ces couleurs :**
- **Vert forêt** : Évoque Puy-de-Dôme, nature, extérieur, durabilité
- **Ambre/Bois** : Chaleur, artisanat, bois (terrasses)
- **Gris anthracite** : Métal (portails), modernité, professionnalisme

---

### Typographie

```typescript
// tailwind.config.ts
fonts: {
  sans: [
    'Inter Variable',
    'system-ui',
    '-apple-system',
    'sans-serif'
  ],
  heading: [
    'Montserrat',
    'Inter Variable',
    'sans-serif'
  ],
  mono: ['Geist Mono', 'monospace'] // Pour prix/devis si besoin
}
```

**Hiérarchie :**
- **H1 (Accueil)** : Montserrat Bold, 48px mobile / 72px desktop
- **H2 (Sections)** : Montserrat SemiBold, 32px mobile / 48px desktop
- **H3 (Cards)** : Montserrat Medium, 24px
- **Body** : Inter Regular, 16px (lisibilité optimale)
- **CTA** : Inter SemiBold, 18px

**Import :**
```typescript
// app/layout.tsx
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-heading' });
```

---

### Composants UI Clés

#### Bouton Principal (CTA)
```typescript
<Button className="bg-primary-600 hover:bg-primary-700 text-white
                   shadow-soft hover:shadow-card transition-all
                   px-8 py-4 text-lg font-semibold rounded-lg">
  Demander un Devis Gratuit
</Button>
```

#### Carte Réalisation
```typescript
<Card className="overflow-hidden border border-neutral-200
                 hover:shadow-card transition-shadow
                 rounded-xl">
  <Image ... />
  <CardContent className="p-6">
    <h3 className="font-heading text-2xl text-neutral-900">
      Portail Moderne Clermont-Ferrand
    </h3>
    <p className="text-neutral-600 mt-2">
      Aluminium RAL 7016 • Motorisation intégrée
    </p>
  </CardContent>
</Card>
```

#### Badges Confiance (Accueil)
```typescript
<div className="flex gap-4 flex-wrap">
  <Badge variant="outline" className="px-4 py-2 border-primary-600 text-primary-700">
    ✓ 45 ans d'expérience
  </Badge>
  <Badge variant="outline" className="px-4 py-2 border-accent text-accent">
    ⚡ Vu à la TV
  </Badge>
  <Badge variant="outline" className="px-4 py-2 border-neutral-600 text-neutral-700">
    🇫🇷 Fabrication Française
  </Badge>
</div>
```

---

### Logo Temporaire

En attendant votre logo définitif, je propose un logo texte simple :

```typescript
// components/logo.tsx
export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800
                      rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">A</span>
      </div>
      <div>
        <div className="font-heading font-bold text-xl text-neutral-900">
          Aménagement 63
        </div>
        <div className="text-xs text-neutral-600">
          45 ans d'expérience
        </div>
      </div>
    </div>
  );
}
```

**Note :** Remplaçable facilement par votre logo réel (SVG/PNG)

---

## 📊 Performance Targets

### Objectifs Lighthouse (Mobile)

- **Performance** : >90
- **Accessibility** : >95
- **Best Practices** : 100
- **SEO** : 100

### Core Web Vitals

- **LCP** (Largest Contentful Paint) : <2.5s
- **FID** (First Input Delay) : <100ms
- **CLS** (Cumulative Layout Shift) : <0.1

**Stratégies :**
- Images WebP/AVIF via Next/Image
- Fonts système ou Fontsource (self-hosted)
- CSS-in-JS minimal (Tailwind compilé)
- Code splitting automatique (Next.js)

---

## 🔒 Sécurité & RGPD

### Mesures de Sécurité

1. **Upload Photos Client**
   ```typescript
   // Validation MIME type
   const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
   if (!allowedTypes.includes(file.type)) throw new Error('Type invalide');

   // Limite taille
   const maxSize = 5 * 1024 * 1024; // 5MB
   if (file.size > maxSize) throw new Error('Trop volumineux');
   ```

2. **Rate Limiting (API Routes)**
   ```typescript
   import { Ratelimit } from '@upstash/ratelimit';
   // Limite soumissions formulaire
   ```

3. **CSRF Protection** : Token dans formulaires

### RGPD

1. **Cookie Banner** : (si Google Analytics)
   - Utiliser `@cookie3/banner` ou custom

2. **Mentions Légales** : Page dédiée

3. **Politique de Confidentialité**

4. **Consentement Upload** : Checkbox "J'accepte le traitement de mes données"

---

## 📅 Roadmap de Développement

### Phase 0 : Setup (Jours 1-2)
```bash
npx create-next-app@latest projet-amenagement-63 \
  --typescript \
  --tailwind \
  --app \
  --eslint

cd projet-amenagement-63
npx shadcn@latest init
npx shadcn@latest add button form input textarea label
```

### Phase MVP (Semaines 1-3)

**Semaine 1 : Fondations**
- [ ] Structure pages (Accueil, Réalisations, Savoir-Faire, Contact)
- [ ] Design system (couleurs, typo, composants de base)
- [ ] Layout responsive avec mobile CTA
- [ ] Navigation

**Semaine 2 : Contenu Core**
- [ ] Galerie 50 photos + lightbox
- [ ] Page "Le Savoir-Faire" (timeline process)
- [ ] Formulaire contact + validation Zod
- [ ] Upload photos client (2-3 max)
- [ ] Intégration email (Resend)

**Semaine 3 : SEO & Finitions**
- [ ] Métadonnées SEO par page
- [ ] Sitemap + robots.txt
- [ ] Schema.org LocalBusiness
- [ ] Optimisation images (WebP)
- [ ] Tests mobile/desktop
- [ ] Déploiement Vercel/Cloudflare

### Phase V1 (Semaines 4-7)

**Semaine 4 : Expansion SEO**
- [ ] Pages locales (10 villes du 63)
- [ ] Contenu SEO unique par ville
- [ ] Internal linking

**Semaine 5 : Configurateur**
- [ ] Interface sélection couleurs
- [ ] Preview modèles (4-5 variantes)
- [ ] Export/partage configuration

**Semaine 6 : Carte Interactive**
- [ ] Intégration Mapbox/Leaflet
- [ ] Heatmap zones intervention
- [ ] Markers projets réalisés

**Semaine 7 : Lead Magnet PDF**
- [ ] Génération PDF lookbook
- [ ] Formulaire capture email
- [ ] Automatisation envoi

---

## ✅ Décisions Validées

### Architecture Core
1. **✅ Gestion Photos Portfolio** : Payload CMS (interface admin pour vous + client futur)
2. **✅ Upload Photos Clients** : Email uniquement avec pièces jointes (Resend)
3. **✅ Tableau de Bord Leads** : Non nécessaire, email suffit
4. **✅ Hébergement** : Vercel (0€ MVP, 0-20€ production)
5. **✅ Base de Données** : MongoDB Atlas (gratuit, uniquement pour Payload CMS)

### Design & Identité
6. **✅ Palette de Couleurs** : Vert Forêt Auvergne + Ambre Bois + Gris Anthracite
7. **✅ Typographie** : Montserrat (headings) + Inter (body)
8. **✅ Logo Temporaire** : Logo texte simple en attendant logo définitif

### Fonctionnalités V1
9. **✅ Configurateur** : À implémenter en V1 une fois images disponibles (switch simple d'images)

---

## ❓ Décisions Restantes (Non-bloquantes)

### Peuvent être décidées progressivement :

1. **Carte Interactive (V1)** :
   - Option A : Leaflet (100% gratuit, style OSM basique)
   - Option B : Mapbox (50k loads/mois gratuit, styles premium)
   - **Recommandation** : Leaflet pour MVP, Mapbox si besoin styles avancés

2. **Nom de Domaine** :
   - Déjà enregistré ? (ex: votre-entreprise.fr)
   - Sinon : À acheter (~12€/an .fr)

3. **Email Expéditeur** :
   - Adresse pro configurée ? (contact@votre-domaine.fr)
   - Sinon : Configuration DNS SPF/DKIM nécessaire

4. **Téléphone** :
   - Numéro direct à afficher sur le site
   - Format : +33 4 73 XX XX XX

5. **Analytics** :
   - Google Analytics 4 (gratuit, nécessite cookie banner)
   - Plausible (9€/mois, RGPD-friendly, sans cookies)
   - Vercel Analytics (2500 events/mois gratuit)
   - **Recommandation MVP** : Vercel Analytics (inclus gratuit)

---

## 🎯 Next Steps - Prêt à Démarrer !

### Phase Immédiate (Cette semaine)

1. **✅ Architecture finalisée** - Toutes les décisions critiques validées
2. **🚀 Setup projet Next.js + Payload CMS**
   ```bash
   npx create-next-app@latest amenagement-63 --typescript --tailwind --app
   cd amenagement-63
   npm install payload @payloadcms/db-mongodb
   npx shadcn@latest init
   ```

3. **🎨 Implémenter Design System**
   - Configuration Tailwind avec palette validée
   - Import fonts (Montserrat + Inter)
   - Création composants UI de base (Button, Card, Badge)

4. **📦 Configuration Services Tiers**
   - Créer compte MongoDB Atlas (gratuit)
   - Créer compte Resend (gratuit)
   - Connecter GitHub à Vercel

### Phase Développement MVP (Semaines 1-3)

**Semaine 1 : Structure + CMS**
- Configuration Payload CMS + collections
- Pages : Accueil, Réalisations, Savoir-Faire, Contact
- Navigation responsive + mobile CTA
- Layout global avec design system

**Semaine 2 : Fonctionnalités**
- Galerie photos (connectée à Payload)
- Formulaire contact + validation Zod
- Upload photos client (2-3 max)
- Intégration Resend (email avec pièces jointes)
- Page "Le Savoir-Faire" (timeline process)

**Semaine 3 : SEO & Déploiement**
- Métadonnées SEO par page
- Schema.org LocalBusiness
- Sitemap automatique
- Tests mobile/desktop
- Déploiement Vercel production

### Prérequis Avant Lancement

**Vous devrez fournir :**
1. **Contenus texte** :
   - Texte page d'accueil (accroche, présentation)
   - Description "Le Savoir-Faire" (process conception > fab > pose)
   - Villes à cibler (ex: Clermont-Ferrand, Riom, Issoire, Thiers)

2. **Informations contact** :
   - Numéro de téléphone à afficher
   - Email de réception des demandes
   - Adresse entreprise (pour Schema.org)

3. **Photos** (peuvent être ajoutées progressivement via CMS) :
   - Minimum 5-10 photos pour lancer le MVP
   - Complément des 40 autres photos en V1

4. **Nom de domaine** (si déjà acheté) :
   - Pour configuration DNS
   - Sinon : site accessible via sous-domaine Vercel temporaire

### Décisions Non-Bloquantes

Ces choix peuvent être faits pendant le développement :
- Carte V1 : Leaflet ou Mapbox (défaut: Leaflet gratuit)
- Analytics : Vercel Analytics (défaut gratuit)
- Logo définitif (temporaire texte en attendant)

---

## 📚 Ressources & Documentation

### Documentation Technique
- Next.js 15 : https://nextjs.org/docs
- Tailwind CSS : https://tailwindcss.com/docs
- shadcn/ui : https://ui.shadcn.com
- React Hook Form : https://react-hook-form.com

### Services Tiers
- Resend (Email) : https://resend.com/docs
- Supabase : https://supabase.com/docs
- Uploadthing : https://uploadthing.com/docs
- Vercel Deployment : https://vercel.com/docs

### Tutoriels
- Grafikart Next.js (FR) : https://grafikart.fr/tutoriels/nextjs
- Next.js Learn : https://nextjs.org/learn

---

**Document vivant - Dernière mise à jour : 2026-01-28**
