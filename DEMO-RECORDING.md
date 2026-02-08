# Guide : Créer une vidéo de démo pour votre portfolio

## 🎥 Option A : OBS Studio (Gratuit et professionnel)

### Installation
1. Téléchargez OBS Studio : https://obsproject.com/
2. Installez et lancez OBS

### Configuration pour démo web
1. **Créer une scène** :
   - Cliquez sur "+" sous "Scenes"
   - Nommez : "Demo Site Aménagement"

2. **Ajouter une source** :
   - Cliquez sur "+" sous "Sources"
   - Sélectionnez "Window Capture" ou "Display Capture"
   - Choisissez votre navigateur

3. **Paramètres vidéo** :
   - Résolution : 1920x1080 (Full HD)
   - FPS : 30 ou 60
   - Format : MP4

### Scénario de démonstration (2-3 minutes)

**Introduction (10s)**
- Écran sur la page d'accueil
- Logo et titre visibles

**Navigation (30s)**
- Scroll fluide vers "Nos Services"
- Survol des cartes services (montrer les transitions)
- Scroll vers "Notre Histoire"

**Carte interactive (20s)**
- Zoom sur la carte du Puy-de-Dôme
- Clic sur un marqueur
- Montrer les statistiques

**Galerie réalisations (20s)**
- Filtrer par catégorie (Portails, Terrasses, Clôtures)
- Montrer les images

**Formulaire de contact (40s)**
- Remplir un formulaire exemple
- Upload de photos (drag & drop)
- Montrer la validation
- Afficher le message de succès

**Responsive (30s)**
- Ouvrir DevTools (F12)
- Basculer en mode mobile
- Montrer le menu hamburger
- Bouton d'appel flottant

**Conclusion (10s)**
- Retour à la page d'accueil
- Fade out

### Enregistrement
1. Cliquez sur "Start Recording"
2. Suivez le scénario
3. Cliquez sur "Stop Recording"
4. Fichier dans : Vidéos/OBS

---

## 🎥 Option B : Windows Game Bar (Rapide)

1. Lancez votre site : `npm run dev`
2. Ouvrez le navigateur sur `http://localhost:3000`
3. Appuyez sur **Win + G**
4. Cliquez sur le bouton "Enregistrer"
5. Naviguez sur le site (2-3 minutes)
6. Appuyez sur **Win + Alt + R** pour arrêter
7. Vidéo dans : Vidéos/Captures

---

## 🎥 Option C : Loom (En ligne, très simple)

1. Installez l'extension Chrome : https://loom.com
2. Cliquez sur l'icône Loom
3. Sélectionnez "Screen + Camera" ou "Screen Only"
4. Choisissez l'onglet du navigateur
5. Enregistrez votre démo
6. Loom génère automatiquement un lien partageable

---

## 📐 Dimensions recommandées

- **Desktop** : 1920x1080 (Full HD)
- **Tablette** : 768x1024
- **Mobile** : 375x667 (iPhone)

## 🎨 Post-production (optionnel)

**Logiciels gratuits** :
- **DaVinci Resolve** : montage professionnel gratuit
- **Shotcut** : simple et efficace
- **Clipchamp** : en ligne, intégré à Windows 11

**Améliorations** :
- Ajouter un titre au début (nom du projet)
- Ajouter des annotations pour highlights
- Musique de fond discrète
- Transition fade in/out

---

## 💡 Conseils

✅ Nettoyez votre navigateur (pas d'onglets parasites)
✅ Mettez en plein écran (F11)
✅ Désactivez notifications Windows
✅ Testez votre parcours avant d'enregistrer
✅ Gardez les mouvements de souris fluides et lents
✅ Ne parlez pas (sauf si voix-off professionnelle)
✅ Durée idéale : 1m30 à 3 minutes maximum

---

## 📤 Formats d'export

**Pour portfolio en ligne** :
- Format : MP4 (H.264)
- Résolution : 1920x1080
- Bitrate : 5-10 Mbps
- Compression : Moyenne

**Pour upload rapide** :
- YouTube (unlisted) → lien à partager
- Vimeo → intégration propre
- MP4 optimisé pour le web
