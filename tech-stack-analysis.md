# Analyse Tech Stack - Site Aménagement Extérieur (63)

## 📋 Résumé des Besoins Techniques

### MVP (Phase 1)
- Galerie photos optimisée (100→3000 images)
- Formulaire avec upload de fichiers (2-3 photos)
- Bouton d'appel mobile permanent
- SEO local fort (Puy-de-Dôme)
- Performance critique
- Mise en ligne rapide

### V1 (Phase 2)
- Configurateur visuel (couleurs/styles)
- Carte interactive (département 63)
- Génération PDF (lead magnet)
- Pages SEO multi-villes
- Filtres portfolio avancés

---

## 🔍 Options Comparées

### Option 1 : Next.js 15 + React + Vercel/Netlify

**Stack Technique :**
- Frontend : Next.js 15 (App Router), React 19, TypeScript
- Styling : Tailwind CSS
- Images : Next/Image (optimisation automatique)
- Forms : React Hook Form + Zod
- Uploads : Uploadthing ou Cloudinary
- CMS : Sanity ou Contentful
- Database : PostgreSQL (Supabase/Vercel Postgres)
- Maps : Mapbox GL ou Leaflet
- PDF : jsPDF ou Puppeteer
- Hosting : Vercel ou Netlify

**Forces :**
- SEO excellent (SSR/SSG natif)
- Performance : Image Optimization automatique, lazy loading
- Developer Experience : Hot reload, TypeScript, debugging
- Scalabilité : 3000 photos gérables avec CDN
- Écosystème riche : Libraires pour configurateur, maps, PDF
- Déploiement continu automatisé
- Analytics intégrés (Vercel Analytics)

**Faiblesses :**
- Courbe d'apprentissage si nouveau à React
- Coûts variables selon trafic (Vercel Pro ~20€/mois + CDN)
- Nécessite développeur pour modifications

**Coût Estimé :**
- Dev initial : 8-12k€ (freelance) ou 15-25k€ (agence)
- Hébergement : 0-50€/mois selon trafic
- Maintenance : 100-200€/mois

**Temps MVP :** 3-4 semaines


---

### Option 2 : WordPress + Page Builder

**Stack Technique :**
- CMS : WordPress 6.4+
- Builder : Elementor Pro ou Bricks Builder
- Theme : GeneratePress ou Astra
- Galerie : Envira Gallery ou Modula
- Forms : WPForms ou Gravity Forms
- SEO : Rank Math ou Yoast
- Uploads : WP Media Library + Cloudinary
- Maps : WP Google Maps
- PDF : PDF Generator for WP
- Hosting : Kinsta, WP Engine ou O2Switch (FR)

**Forces :**
- Mise en ligne ultra-rapide (1-2 semaines possible)
- Interface de gestion familière (non-technique)
- Plugins pour tout (configurateur, galerie, SEO)
- Coût initial faible
- Écosystème mature pour PME
- Nombreux développeurs disponibles

**Faiblesses :**
- Performance variable (plugins lourds)
- 3000 photos = nécessite optimisation agressive
- Sécurité : maintenance continue requise
- SEO : bon mais configuration manuelle importante
- Configurateur visuel : plugins limités ou développement custom
- Scalabilité incertaine avec grosse galerie

**Coût Estimé :**
- Dev initial : 3-6k€ (thème custom + config)
- Plugins : 200-500€/an (licences)
- Hébergement : 30-100€/mois (géré)
- Maintenance : 150-300€/mois (updates, sécurité)

**Temps MVP :** 1-2 semaines


---

### Option 3 : Astro + React Islands

**Stack Technique :**
- Framework : Astro 4.x
- UI Interactive : React islands (configurateur, formulaires)
- Styling : Tailwind CSS
- CMS : Decap CMS (ex-Netlify CMS) ou Storyblok
- Images : Astro Image Optimization
- Database : Supabase ou Firebase
- Maps : Leaflet
- PDF : Puppeteer
- Hosting : Netlify, Vercel ou Cloudflare Pages

**Forces :**
- Performance exceptionnelle (MPA, hydratation partielle)
- SEO excellent (pages statiques par défaut)
- Légèreté : JS uniquement où nécessaire
- Coûts d'hébergement très bas (sites statiques)
- Flexibilité : Mix de frameworks possible
- Images : compression/optimisation automatique

**Faiblesses :**
- Écosystème moins mature que Next.js
- Moins de développeurs maîtrisant Astro
- Configurateur complexe : nécessite plus de dev custom
- CMS : options moins riches que WordPress

**Coût Estimé :**
- Dev initial : 7-10k€
- Hébergement : 0-20€/mois
- Maintenance : 80-150€/mois

**Temps MVP :** 3-4 semaines


---

### Option 4 : Webflow + Custom Code

**Stack Technique :**
- Platform : Webflow CMS
- Custom Code : JavaScript vanilla pour configurateur
- Forms : Webflow Forms ou Formspree
- Galerie : Webflow CMS + Finsweet Attributes
- Maps : Mapbox embed
- PDF : Zapier + DocuPilot ou code custom
- Hosting : Webflow CDN

**Forces :**
- Rapidité de mise en ligne (2 semaines)
- Design visuel sans code
- Hébergement ultra-performant (CDN global)
- SEO : bonne structure par défaut
- Client peut modifier contenu facilement
- Pas de maintenance technique (updates auto)

**Faiblesses :**
- CMS limité à 2000 items (problème pour 3000 photos)
- Configurateur : nécessite code custom JavaScript
- Coûts récurrents obligatoires
- Moins flexible pour features avancées
- Verrouillage plateforme (vendor lock-in)

**Coût Estimé :**
- Dev initial : 5-8k€
- Abonnement : 40-75€/mois (CMS plan)
- Maintenance : 50-100€/mois

**Temps MVP :** 2-3 semaines

**Limitation critique :** Limite de 2000 items CMS incompatible avec 3000 photos.


---

### Option 5 : Laravel + Inertia + Vue

**Stack Technique :**
- Backend : Laravel 11
- Frontend : Inertia.js + Vue 3
- Styling : Tailwind CSS
- Images : Laravel Media Library + Cloudinary
- Database : MySQL/PostgreSQL
- Maps : Leaflet + Laravel
- PDF : Laravel-DomPDF ou Puppeteer
- Admin : Laravel Nova ou Filament
- Hosting : Forge + DigitalOcean/Hetzner

**Forces :**
- Contrôle total du backend (custom features faciles)
- Admin puissant pour gérer 3000 photos
- Sécurité : framework mature et sécurisé
- Configurateur : Vue.js très adapté
- Génération PDF native (Laravel)
- Filtres/recherche : faciles avec Eloquent

**Faiblesses :**
- SEO : nécessite configuration SSR (Inertia SSR)
- Hébergement : serveur requis (pas de static)
- Maintenance serveur nécessaire
- Courbe d'apprentissage (PHP + Vue)
- Coûts serveur continus

**Coût Estimé :**
- Dev initial : 10-15k€
- Serveur : 20-50€/mois (VPS)
- Maintenance : 150-250€/mois

**Temps MVP :** 4-6 semaines


---

## 📊 Tableau Comparatif

| Critère | Next.js | WordPress | Astro | Webflow | Laravel |
|---------|---------|-----------|-------|---------|---------|
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **SEO** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Rapidité MVP** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Gestion 3000 photos** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Configurateur** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Autonomie Client** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Coût Initial** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| **Coût Récurrent** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Scalabilité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Maintenance** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

**Légende :** 5⭐ = Excellent | 4⭐ = Très bon | 3⭐ = Bon | 2⭐ = Moyen | 1⭐ = Faible


---

## 🎯 Recommandation Finale

### **Option Recommandée : Next.js 15 + Sanity CMS + Vercel**

**Justification :**

1. **Performance avec 3000 photos**
   - Next/Image optimise automatiquement (WebP, responsive, lazy loading)
   - CDN Vercel distribue mondialement
   - Pagination/virtualisation facile pour galeries

2. **SEO Local (critère #1)**
   - SSG pour pages statiques (villes, réalisations)
   - Metadata API Next.js 15 pour SEO programmatique
   - Sitemap automatique
   - Structure URL propre pour pages locales

3. **Évolutivité MVP → V1**
   - Configurateur : React Three Fiber ou Fabric.js
   - Carte interactive : Mapbox GL (performant)
   - PDF : @react-pdf/renderer ou Puppeteer
   - Filtres : React Query + algolia ou meilisearch

4. **Expérience Utilisateur**
   - Mobile-first natif
   - Bouton d'appel sticky simple à implémenter
   - Formulaire upload : react-dropzone + Uploadthing
   - Transitions fluides

5. **Business**
   - TCO 3 ans : ~8k€ dev + 1.8k€ hosting = 9.8k€
   - Pas de surprise technique
   - Passage à l'échelle sans refonte

**Stack Détaillée Recommandée :**
```
Frontend:
- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)

Backend/CMS:
- Sanity.io (CMS headless, gérer photos)
- Uploadthing (upload client photos)

Database:
- Supabase (PostgreSQL + Storage)

Outils:
- Mapbox GL (carte 63)
- react-dropzone (upload)
- @react-pdf/renderer (lookbook)
- React Hook Form + Zod (validation)

Hosting:
- Vercel (frontend)
- Sanity Cloud (CMS)
- Supabase Cloud (database/storage)

Analytics:
- Vercel Analytics
- Google Tag Manager

SEO:
- next-sitemap
- Structured data (JSON-LD)
```

---

## 🔄 Alternative Budget Serré

**Si budget < 5k€ : WordPress + Bricks Builder**

Configuration optimisée :
- Theme : Bricks Builder (performance native)
- Galerie : WP Media Folders + ShortPixel (compression)
- SEO : Rank Math Pro
- Forms : Fluent Forms
- Cache : LiteSpeed Cache
- Hosting : O2Switch (français, illimité, 7€/mois HT)

Limites acceptées :
- Configurateur simplifié (slider images)
- PDF basique (WP PDF Generator)
- Maintenance requise (3-4h/mois)

**Coût total :** 4k€ dev + 300€/an plugins + 84€/an hosting = 4.4k€ première année

---

## 📅 Roadmap Suggérée (Next.js)

### Phase 0 : Setup (Semaine 1)
- Environnement dev
- Design system (Figma → Tailwind)
- Configuration Sanity CMS
- Upload 100 premières photos

### Phase MVP (Semaines 2-4)
- Pages : Accueil, Réalisations, Savoir-Faire, Contact
- Galerie 100 photos + lightbox
- Formulaire contact + upload
- Bouton appel mobile
- SEO local (meta, sitemap)
- Tests mobile/desktop

### Phase V1 (Mois 2-3)
- Upload 2900 photos restantes
- Filtres portfolio (matériau, ville, style)
- Configurateur couleurs v1
- Carte interactive 63
- Lead magnet PDF
- Pages SEO villes (x10)
- A/B testing formulaires

### Phase V2+ (Mois 4+)
- Espace client (devis en ligne)
- Blog/actualités
- Avis clients intégrés
- Configurateur avancé (3D)
- Integration CRM (HubSpot/Pipedrive)

---

## ⚠️ Points d'Attention

1. **Droits Photos** : Vérifier compression/watermarking pour 3000 images
2. **RGPD** : Consentement cookies, stockage formulaires (Supabase UE)
3. **Accessibilité** : WCAG 2.1 AA (contraste, navigation clavier)
4. **Backup** : Automatisation snapshots Sanity + Supabase
5. **Analytics** : Tracking conversions (appels, formulaires, PDF)

---

## 💡 Conclusion

Pour un site devant gérer 3000 photos avec performance, SEO local fort et évolution vers configurateur/carte/PDF, **Next.js + Sanity offre le meilleur ratio performance/scalabilité/coût**.

WordPress reste pertinent si budget très limité et acceptation des compromis performance/scalabilité.

Éviter Webflow (limite 2000 items CMS) et Laravel (complexité/coûts pour ce use case).
