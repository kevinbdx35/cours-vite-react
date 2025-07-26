# 🚀 Guide de Déploiement sur GitHub Pages

Ce guide vous explique comment déployer l'application Cours Interactif Vite + React sur GitHub Pages.

## 📋 Prérequis

- Un compte GitHub
- Le repository de votre projet sur GitHub
- Node.js installé localement

## ⚙️ Configuration

### 1. Configuration du Repository

1. **Forkez ou clonez** ce repository sur votre compte GitHub
2. **Renommez le repository** si nécessaire (le nom sera utilisé dans l'URL)

### 2. Configuration des Fichiers

#### A. Modifier `vite.config.js`
```javascript
// Ligne 7 - Remplacez par le nom de votre repository
base: '/votre-nom-de-repo/',
```

#### B. Modifier `package.json`
```json
// Ligne 14 - Remplacez par votre username et nom de repo
"homepage": "https://votre-username.github.io/votre-nom-de-repo",
```

### 3. Configuration GitHub Pages

1. Allez dans **Settings** > **Pages** de votre repository
2. Sélectionnez **Source** : "GitHub Actions"
3. Le workflow se déclenchera automatiquement

## 🚀 Méthodes de Déploiement

### Méthode 1: Déploiement Automatique (Recommandée)

Le déploiement se fait automatiquement via GitHub Actions à chaque push sur `main`:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Méthode 2: Déploiement Manuel

```bash
# 1. Build du projet
npm run build

# 2. Déploiement manuel avec gh-pages
npm run deploy
```

## 📁 Structure du Déploiement

```
votre-repo/
├── .github/workflows/
│   └── deploy.yml          # Workflow GitHub Actions
├── dist/                   # Build de production (généré)
├── public/
│   └── CNAME              # Domaine personnalisé (optionnel)
├── src/                   # Code source
├── vite.config.js         # Configuration Vite
└── package.json          # Scripts de déploiement
```

## 🔧 Scripts Disponibles

```json
{
  "dev": "vite",                    // Développement local
  "build": "vite build",            // Build de production
  "preview": "vite preview",        // Prévisualisation du build
  "deploy": "npm run build && gh-pages -d dist",  // Déploiement manuel
  "predeploy": "npm run build"      // Build automatique avant déploiement
}
```

## 🌐 URLs d'Accès

Une fois déployé, votre application sera accessible à :

- **URL GitHub Pages** : `https://votre-username.github.io/votre-nom-de-repo/`
- **URL personnalisée** : Si vous configurez un CNAME

## 🔍 Vérification du Déploiement

1. **GitHub Actions** : Vérifiez que le workflow se termine avec succès
2. **Pages Settings** : L'URL doit être affichée et active
3. **Test** : Naviguez vers l'URL pour tester l'application

## 🐛 Résolution de Problèmes

### Problème : Page 404

**Cause** : Configuration du `base` incorrecte dans `vite.config.js`

**Solution** :
```javascript
// vite.config.js
base: '/nom-exact-du-repository/',
```

### Problème : Ressources non trouvées

**Cause** : Chemins absolus dans le code

**Solution** : Utilisez des chemins relatifs ou la variable `base`

### Problème : Workflow GitHub Actions échoue

**Vérifications** :
1. Permissions GitHub Pages activées
2. Node.js version compatible (18+)
3. Dépendances installables (`npm ci`)

### Problème : Build trop volumineux

**Solutions** :
1. Code splitting activé (déjà configuré)
2. Lazy loading des composants
3. Optimisation des images

## 📊 Optimisations de Production

### Optimisations Activées

- ✅ **Minification** avec Terser
- ✅ **Code splitting** automatique
- ✅ **Compression gzip**
- ✅ **Suppression des console.log**
- ✅ **Chunking manuel** des librairies

### Métriques du Build

```bash
dist/index.html                       0.90 kB │ gzip:   0.39 kB
dist/assets/index-*.css              451.02 kB │ gzip:  54.51 kB
dist/assets/animations-*.js          115.06 kB │ gzip:  37.01 kB
dist/assets/index-*.js               123.96 kB │ gzip:  32.65 kB
dist/assets/vendor-*.js              139.34 kB │ gzip:  45.04 kB
dist/assets/ui-*.js                  266.20 kB │ gzip:  57.76 kB
dist/assets/markdown-*.js            745.67 kB │ gzip: 261.41 kB
```

## 🔒 Sécurité

- ✅ Variables d'environnement exclues
- ✅ Source maps désactivées en production
- ✅ Console.log supprimés
- ✅ Dépendances à jour

## 🆘 Support

En cas de problème :

1. Vérifiez les **GitHub Actions logs**
2. Consultez la **documentation Vite**
3. Vérifiez les **permissions du repository**

## 📚 Ressources Utiles

- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Documentation Vite](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions](https://docs.github.com/en/actions)