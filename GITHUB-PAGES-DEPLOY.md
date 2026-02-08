# 🚀 Déploiement sur GitHub Pages

## ✅ Configuration terminée !

Votre projet est maintenant **prêt** pour GitHub Pages. Tout est configuré automatiquement.

---

## 📋 Ce qui a été fait

✅ Workflow GitHub Actions créé (`.github/workflows/deploy-github-pages.yml`)
✅ Next.js configuré pour export statique (`next.config.ts`)
✅ Fichier `.nojekyll` créé (nécessaire pour GitHub Pages)
✅ Build testé et validé

---

## 🎯 Étapes pour activer GitHub Pages

### **Étape 1 : Commit et push les changements**

Ces commandes sont déjà prêtes à exécuter :

```bash
git add .
git commit -m "feat: Configuration GitHub Pages pour portfolio"
git push origin main
```

### **Étape 2 : Activer GitHub Pages sur GitHub.com**

1. Allez sur votre repository GitHub :
   https://github.com/Studio-Auralis/Site-Web-Aménagement-Extérieur-63-

2. Cliquez sur **"Settings"** (en haut à droite)

3. Dans le menu de gauche, cliquez sur **"Pages"**

4. Sous **"Build and deployment"** :
   - **Source** : Sélectionnez **"GitHub Actions"**
   - (Le workflow que j'ai créé sera détecté automatiquement)

5. Cliquez sur **"Save"**

### **Étape 3 : Attendre le déploiement**

1. Allez dans l'onglet **"Actions"** de votre repository
2. Vous verrez le workflow **"Deploy to GitHub Pages"** en cours
3. Attendez 2-3 minutes (première fois)
4. ✅ Le déploiement est terminé quand vous voyez un ✔️ vert

### **Étape 4 : Accéder à votre site**

Votre site sera accessible à l'URL :

```
https://studio-auralis.github.io/Site-Web-Am-nagement-Ext-rieur-63-/
```

---

## 🔄 Déploiements futurs (automatique)

**Chaque fois que vous push sur `main`, le site se met à jour automatiquement !**

```bash
# Faites vos modifications...
git add .
git commit -m "Update: ..."
git push origin main

# GitHub Pages se met à jour automatiquement en 2-3 minutes !
```

---

## 📝 Pour votre portfolio

### URL à partager :
```
https://studio-auralis.github.io/Site-Web-Am-nagement-Ext-rieur-63-/
```

### Description suggérée :
```
Site vitrine moderne pour entreprise d'aménagement extérieur

Stack : Next.js 15, React 19, TypeScript, Tailwind CSS
Fonctionnalités : Carte interactive (Leaflet), formulaire avec upload photos,
design responsive, transitions fluides, optimisations performance

Déployé sur GitHub Pages avec CI/CD automatique
```

---

## ⚠️ Limitations GitHub Pages (normales)

- ❌ Formulaire de contact ne fonctionne pas (pas de backend)
  → Mais visuellement, tout est là !

- ❌ API routes désactivées (site 100% statique)
  → C'est normal pour un portfolio

- ✅ Tout le reste fonctionne parfaitement :
  - Navigation fluide
  - Carte interactive
  - Galerie photos
  - Responsive design
  - Animations

---

## 🐛 Dépannage

### Le site ne s'affiche pas ?
1. Vérifiez que le workflow a réussi (onglet Actions)
2. Attendez 2-3 minutes après le déploiement
3. Rafraîchissez avec Ctrl+Shift+R (cache)

### Les images ne s'affichent pas ?
- C'est normal si elles viennent d'APIs externes
- Les images du dossier `public/` fonctionnent toujours

### Le formulaire ne fonctionne pas ?
- C'est attendu ! C'est purement visuel pour le portfolio
- Ajoutez une note : "Version démo - Formulaire non fonctionnel"

---

## ✨ Prochaines étapes

1. **Commit et push** (commandes ci-dessus)
2. **Activer GitHub Pages** (Settings > Pages)
3. **Attendre 2-3 minutes**
4. **Profiter** de votre site en ligne ! 🎉

---

## 💡 Bonus : Badge pour votre README

Ajoutez ce badge dans votre README.md :

```markdown
[![GitHub Pages](https://img.shields.io/badge/demo-live-success?style=flat-square&logo=github)](https://studio-auralis.github.io/Site-Web-Am-nagement-Ext-rieur-63-/)
```

Résultat : Un beau badge cliquable vers votre démo ! 🎯
