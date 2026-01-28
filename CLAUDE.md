# Instructions pour Claude Code

## Aperçu de l'objectif du projet

Site web vitrine moderne pour une entreprise familiale d'aménagement extérieur (45 ans d'expérience) basée dans le Puy-de-Dôme (63).

**Objectif principal :** Transformer un portfolio de réalisations en un outil de vente crédible et rapide pour capturer des leads qualifiés de particuliers.

**Proposition de valeur unique :**
- Fabricant-Poseur (Direct Usine)
- Passage TV (notoriété)
- Expertise locale (Puy-de-Dôme)
- Portfolio de ~50 réalisations (portails, terrasses, clôtures)

**Phases :**
- **MVP** : Site vitrine performant avec galerie photos, formulaire de contact avec upload photos client, SEO local
- **V1** : Configurateur visuel, carte interactive des interventions, génération PDF lookbook, expansion SEO par villes

## Aperçu de l'architecture globale

**Stack Technique :**
- **Framework** : Next.js 15 (App Router) + React 19
- **Langage** : TypeScript 5.x
- **Styling** : Tailwind CSS 3.x
- **Composants UI** : shadcn/ui + lucide-react
- **Formulaires** : React Hook Form + Zod validation
- **Upload client** : react-dropzone

**Gestion des contenus :**
- **CMS** : Payload CMS (self-hosted sur Vercel)
- **Base de données** : MongoDB Atlas (gratuit 512MB) - uniquement pour Payload CMS
- **Stockage images portfolio** : Vercel Blob Storage (1GB gratuit)

**Services tiers :**
- **Email** : Resend (envoi formulaires + pièces jointes photos client)
- **Hébergement** : Vercel (plan Hobby gratuit)
- **Maps (V1)** : Leaflet (gratuit) ou Mapbox (freemium)
- **PDF (V1)** : @react-pdf/renderer

**Architecture des données :**
- Photos portfolio : gérées via Payload CMS (interface admin)
- Photos clients (upload formulaire) : envoyées directement par email en pièces jointes (pas de stockage permanent)
- Leads : pas de base de données, envoi email uniquement

## Style visuel

**Palette de couleurs :**
- **Primaire** : Vert Forêt Auvergne (`primary-600: #16a34a`) - nature, extérieur, durabilité
- **Accent** : Ambre/Bois (`#d97706`) - chaleur, artisanat
- **Neutre** : Gris Anthracite (`neutral-700: #404040`) - métal, modernité

**Typographie :**
- **Headings** : Montserrat (SemiBold/Bold)
- **Body** : Inter (Regular)

**Principes de design :**
- Interface claire et minimaliste
- Pas de mode sombre pour le MVP
- Design responsive mobile-first
- Bouton d'appel persistant sur mobile

## Contraintes et Politiques

### Sécurité
- **NE JAMAIS exposer les clés API au client** (toujours côté serveur dans .env.local)
- Validation stricte des uploads client (MIME type, taille max 5MB par photo, 3 photos max)
- Rate limiting sur API routes (formulaires)
- CSRF protection sur formulaires

### RGPD
- Pas de stockage permanent des données clients (email uniquement)
- Cookie banner si Google Analytics (non nécessaire avec Vercel Analytics)
- Mentions légales + Politique de confidentialité
- Consentement explicite pour traitement des données

### Performance
- Core Web Vitals : LCP <2.5s, FID <100ms, CLS <0.1
- Images optimisées (WebP/AVIF via Next/Image)
- Lighthouse mobile score >90

## Dépendances

**Principe directeur :**
- Préférer les composants existants (shadcn/ui) plutôt que d'ajouter de nouvelles bibliothèques UI
- Maximiser l'utilisation de Next.js features natives (Image, Metadata API, API Routes)
- Éviter les dépendances lourdes sauf si justifiées

**Stack validée :**
```json
{
  "core": ["next@15", "react@19", "typescript@5", "tailwindcss@3"],
  "ui": ["shadcn/ui", "lucide-react", "framer-motion (optionnel)"],
  "forms": ["react-hook-form", "zod", "react-dropzone"],
  "cms": ["payload", "@payloadcms/db-mongodb"],
  "email": ["resend"],
  "maps-v1": ["react-leaflet | react-map-gl"],
  "pdf-v1": ["@react-pdf/renderer"]
}
```

**Nouvelles dépendances :**
- Documenter la justification avant l'ajout
- Vérifier l'impact bundle size
- Privilégier les alternatives natives

## Tests et Validation

### Tests d'interface (obligatoire après chaque développement UI)

À la fin de chaque développement qui implique l'interface graphique :
- Tester avec playwright-skill (ou outils Playwright MCP disponibles)
- L'interface doit être :
  - **Responsive** : fonctionnelle sur mobile (375px), tablette (768px), desktop (1280px+)
  - **Fonctionnelle** : tous les boutons, formulaires, interactions fonctionnent
  - **Conforme au besoin** : répond exactement aux spécifications développées

**Exemple de tests obligatoires :**
- Bouton d'appel mobile : visible et cliquable sur mobile uniquement
- Formulaire contact : validation, upload photos, soumission
- Galerie photos : affichage, lightbox, performance avec 50 images
- Navigation : menu responsive, transitions fluides

## Documentation

### Fichiers de référence

- **[PRD.md](./PRD.md)** : Spécifications fonctionnelles du projet (vision, étapes MVP/V1, fonctionnalités)
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** : Architecture technique détaillée (stack, design system, structure projet, roadmap)

**Ordre de consultation :**
1. Lire PRD.md pour comprendre les besoins métier
2. Consulter ARCHITECTURE.md pour les choix techniques
3. Se référer à CLAUDE.md (ce fichier) pour les directives de développement

## Context7

**Utilisation automatique des outils MCP Context7 :**

Utilise toujours Context7 lorsque j'ai besoin de :
- Génération de code avec une bibliothèque spécifique
- Étapes de configuration ou d'installation
- Documentation de bibliothèque/API à jour

**Processus :**
1. Utiliser `mcp__context7__resolve-library-id` pour obtenir l'ID de bibliothèque Context7
2. Utiliser `mcp__context7__query-docs` avec l'ID obtenu pour récupérer la documentation

**Cela signifie que tu dois automatiquement utiliser les outils MCP Context7 pour résoudre l'identifiant de bibliothèque et obtenir la documentation de bibliothèque sans que j'aie à le demander explicitement.**

**Exemples de cas d'usage :**
- Configuration Payload CMS : chercher la doc Context7
- Intégration Resend : récupérer les exemples de code à jour
- Setup React Hook Form + Zod : consulter les patterns recommandés
- Mapbox/Leaflet : vérifier l'API actuelle

**Limite :** Ne pas appeler les outils Context7 plus de 3 fois par question.

## Conventions de Spécifications

**Langue :**
- Toutes les spécifications doivent être rédigées en **français**
- Cela inclut les specs OpenSpec (sections Purpose et Scenarios)
- **Exception** : Les titres de Requirements dans OpenSpec doivent rester en **anglais** avec les mots-clés `SHALL`/`MUST` pour la validation OpenSpec

**Exemple de spec OpenSpec valide :**
```yaml
purpose: |
  Permettre aux utilisateurs de télécharger jusqu'à 3 photos de leur terrain
  pour qualifier leur demande de devis.

scenarios:
  - description: L'utilisateur upload 2 photos valides
    given: Un formulaire de contact affiché
    when: L'utilisateur sélectionne 2 fichiers JPEG < 5MB
    then: Les photos sont attachées et l'indicateur "2/3" s'affiche

requirements:
  - id: REQ-001
    title: SHALL validate file MIME types  # Anglais avec SHALL
    description: Le système doit valider que les fichiers sont de type image/jpeg, image/png ou image/webp
```

---

**Document vivant - Dernière mise à jour : 2026-01-28**
