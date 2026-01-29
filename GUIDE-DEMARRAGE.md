# 🚀 Guide de Démarrage - Site Vitrine Aménagement Extérieur

## ✅ Statut du Projet

Votre site vitrine est **100% fonctionnel** et prêt à être testé !

### Ce qui a été créé

✅ **Architecture complète** :
- Next.js 15 + React 19 + TypeScript
- Tailwind CSS avec design system personnalisé
- Toutes les dépendances installées

✅ **Composants UI** :
- Button, Input, Textarea, Label (basés sur shadcn/ui)
- Design system avec couleurs Vert Forêt et Ambre/Bois
- Composants réutilisables et accessibles

✅ **Pages et Sections** :
- Header avec navigation responsive + menu mobile
- Hero Section avec badges de confiance
- Section Réalisations avec galerie photos et filtres
- Section Savoir-Faire avec process en 4 étapes
- Section Contact avec formulaire complet
- Footer avec informations légales
- Bouton d'appel flottant (visible uniquement sur mobile)

✅ **Formulaire de Contact** :
- Validation complète avec React Hook Form + Zod
- Upload de photos (max 3, 5MB chacune)
- Prévisualisation des photos uploadées
- Messages de succès/erreur
- API Route prête pour l'envoi d'emails

✅ **Optimisations** :
- Responsive mobile-first
- Smooth scroll
- Design cohérent et professionnel
- SEO optimisé (metadata)
- Build de production réussi ✓

---

## 🎬 Comment Tester le Site

### Option 1 : Serveur de Développement (Recommandé)

1. **Ouvrir un terminal dans le projet** :
   ```bash
   cd C:\Users\samue\Documents\Claude-code\projet-b
   ```

2. **Lancer le serveur** :
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur** :
   - Le terminal affichera l'URL (ex: http://localhost:3000)
   - Ouvrir cette URL dans votre navigateur

4. **Tester toutes les fonctionnalités** :
   - ✓ Navigation (menu desktop et mobile)
   - ✓ Bouton d'appel flottant (scroll vers le bas sur mobile)
   - ✓ Filtres de la galerie Réalisations
   - ✓ Formulaire de contact
   - ✓ Upload de photos (max 3)
   - ✓ Responsive (tester sur différentes tailles d'écran)

### Option 2 : Build de Production

```bash
npm run build
npm run start
```

Puis ouvrir http://localhost:3000

---

## 📱 Tests Responsive à Effectuer

### Mobile (375px - 767px)
- [ ] Menu hamburger fonctionne
- [ ] Bouton d'appel flottant visible après scroll
- [ ] Formulaire utilisable avec clavier mobile
- [ ] Images responsive
- [ ] Sections empilées correctement

### Tablette (768px - 1023px)
- [ ] Navigation desktop visible
- [ ] Grille de réalisations sur 2 colonnes
- [ ] Formulaire sur 2 colonnes

### Desktop (1024px+)
- [ ] Navigation complète visible
- [ ] Grille de réalisations sur 3 colonnes
- [ ] Formulaire sur 2 colonnes avec sidebar
- [ ] Toutes les sections bien espacées

---

## 🔧 Configuration Email (Optionnel pour MVP)

Pour activer l'envoi réel d'emails via Resend :

1. **Créer un compte Resend** :
   - Aller sur https://resend.com
   - Créer un compte gratuit

2. **Obtenir la clé API** :
   - Dans le dashboard Resend, créer une clé API

3. **Configurer .env.local** :
   ```env
   RESEND_API_KEY=re_votre_cle_api
   RESEND_FROM_EMAIL=contact@votredomaine.fr
   RESEND_TO_EMAIL=votre-email@exemple.fr
   ```

4. **Installer Resend** :
   ```bash
   npm install resend
   ```

5. **Décommenter le code Resend** :
   - Ouvrir `app/api/contact/route.ts`
   - Décommenter les lignes 51-77 (section Resend)
   - Commenter la ligne 82 (console.log)

6. **Redémarrer le serveur** :
   ```bash
   npm run dev
   ```

---

## 📸 Remplacement des Images de Démonstration

Les images actuelles utilisent Unsplash (placeholder). Pour utiliser vos vraies photos :

### Méthode Simple (sans CMS)

1. Placer vos photos dans `public/realisations/`
2. Modifier `components/RealisationsSection.tsx` :
   ```typescript
   const realisations = [
     {
       id: 1,
       title: "Portail aluminium moderne",
       category: "Portails",
       image: "/realisations/portail-1.jpg", // ← Votre photo
     },
     // ...
   ];
   ```

### Méthode Avancée (avec Payload CMS) - V1

À implémenter dans la version 1 selon ARCHITECTURE.md

---

## 🚀 Déploiement sur Vercel

### Déploiement Rapide (via Interface)

1. **Créer un compte Vercel** :
   - Aller sur https://vercel.com
   - S'inscrire avec GitHub

2. **Importer le projet** :
   - Cliquer "New Project"
   - Importer depuis Git
   - Sélectionner ce repository

3. **Configurer** :
   - Framework Preset : Next.js (détecté automatiquement)
   - Build Command : `npm run build`
   - Output Directory : `.next`

4. **Ajouter les variables d'environnement** :
   - Si vous avez configuré Resend, ajouter :
     - `RESEND_API_KEY`
     - `RESEND_FROM_EMAIL`
     - `RESEND_TO_EMAIL`

5. **Déployer** :
   - Cliquer "Deploy"
   - Attendre 2-3 minutes
   - Votre site est en ligne ! 🎉

### Déploiement via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

---

## 📝 Personnalisation du Contenu

### Informations de Contact

Modifier dans plusieurs fichiers :

1. **Header.tsx** (ligne 33) :
   ```tsx
   <a href="tel:+33473000000">  // ← Votre numéro
   ```

2. **Footer.tsx** (lignes 28-40) :
   ```tsx
   href="tel:+33473000000"     // ← Votre numéro
   href="mailto:contact@votredomaine.fr"  // ← Votre email
   ```

3. **ContactSection.tsx** (mêmes modifications)

4. **FloatingCallButton.tsx** (ligne 19) :
   ```tsx
   href="tel:+33473000000"     // ← Votre numéro
   ```

### Textes et Descriptions

- **Hero Section** : `components/HeroSection.tsx`
- **Savoir-Faire** : `components/SavoirFaireSection.tsx`
- **Metadata SEO** : `app/layout.tsx` (lignes 16-19)

---

## 🎨 Personnalisation des Couleurs

Si vous souhaitez ajuster la palette de couleurs :

Modifier `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    600: '#16a34a',  // Vert principal
    // ...
  },
  accent: {
    600: '#d97706',  // Ambre accent
    // ...
  },
}
```

---

## 🐛 Dépannage

### Le serveur ne démarre pas

```bash
# Nettoyer le cache
rm -rf .next node_modules
npm install
npm run dev
```

### Erreurs TypeScript

```bash
# Vérifier les types
npm run build
```

### Port déjà utilisé

```bash
# Utiliser un autre port
PORT=3001 npm run dev
```

---

## 📊 Métriques de Performance

Build de production actuel :

- **Taille totale** : ~180 KB First Load JS
- **Pages statiques** : 5/5 générées avec succès
- **Optimisations** : Activées (minification, tree-shaking)

---

## 🎯 Prochaines Étapes (V1)

Après validation du MVP :

1. [ ] Intégration Payload CMS pour gérer le portfolio
2. [ ] Configurateur visuel (choix couleurs/styles)
3. [ ] Carte interactive des interventions
4. [ ] Générateur PDF Lookbook
5. [ ] Pages SEO par ville
6. [ ] Expansion portfolio complet (50+ photos)

---

## 🤝 Support

En cas de question ou problème :

1. Consulter la documentation :
   - [README.md](./README.md)
   - [ARCHITECTURE.md](./ARCHITECTURE.md)
   - [PRD.md](./PRD.md)

2. Vérifier les logs :
   ```bash
   npm run dev  # Voir les erreurs en temps réel
   ```

3. Build de test :
   ```bash
   npm run build  # Vérifier s'il y a des erreurs
   ```

---

**🎉 Votre site est prêt ! Bon test ! 🚀**
