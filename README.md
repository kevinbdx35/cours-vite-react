# Cours Interactif Vite + React

Une plateforme d'apprentissage interactive conçue pour enseigner le développement web moderne en utilisant Vite et React. Ce cours pour débutants offre une expérience pratique avec des exemples concrets, des micro-animations et un design responsive.

![vite+react](https://github.com/kevinbdx35/cours-vite-react/blob/main/img.png?raw=true)


## ✨ Fonctionnalités

- **📚 Apprentissage Interactif** : Leçons pratiques avec des exemples de code en temps réel
- **⚡ Stack Moderne** : Construit avec Vite pour un développement ultra-rapide
- **⚛️ Fondamentaux React** : Couverture complète des concepts de base aux avancés
- **🎨 Système de Design Polaris** : Composants UI professionnels de Shopify
- **📱 Entièrement Responsive** : Optimisé pour tous les appareils et tailles d'écran
- **🎭 Micro-animations** : Transitions fluides et interactions engageantes
- **🎯 Suivi de Progression** : Surveillez votre parcours d'apprentissage
- **🧩 Architecture Modulaire** : Code propre et maintenable suivant les principes SOLID

## 🚀 Démarrage

### Prérequis

- Node.js (version 18 ou supérieure)
- Gestionnaire de paquets npm ou yarn

### Installation

1. Clonez le dépôt :
```bash
git clone <repository-url>
cd vite-react-course
```

2. Installez les dépendances :
```bash
npm install
```

3. Démarrez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur et naviguez vers `http://localhost:5173`

## 📖 Structure du Cours

### Module 1 : Fondamentaux de Vite (30 min)
- Qu'est-ce que Vite ?
- Vite vs Bundlers Traditionnels
- Structure d'un Projet
- Commandes Essentielles

### Module 2 : Fondamentaux de React (45 min)
- Qu'est-ce que React ?
- Syntaxe JSX
- Composants et Props
- State et Gestion d'Événements

### Module 3 : Concepts React Avancés (60 min)
- Hook useEffect
- Hooks Personnalisés
- API Context

### Module 4 : Bonnes Pratiques Vite + React (30 min)
- Configuration de Projet Optimale
- Optimisation des Performances

## 🛠️ Technologies Utilisées

- **[Vite](https://vitejs.dev/)** - Outillage frontend de nouvelle génération
- **[React 18](https://reactjs.org/)** - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **[Shopify Polaris](https://polaris.shopify.com/)** - Système de design professionnel
- **CSS Animations** - Animations performantes avec CSS natif
- **[React Markdown](https://remarkjs.github.io/react-markdown/)** - Composant Markdown pour React
- **[React Syntax Highlighter](https://react-syntax-highlighter.github.io/react-syntax-highlighter/)** - Coloration syntaxique du code

## 📁 Structure du Projet

```
src/
├── components/         # Composants UI réutilisables
│   ├── course/        # Composants spécifiques au cours
│   ├── layout/        # Composants de mise en page
│   └── ui/           # Éléments UI de base
├── pages/            # Composants de page
│   ├── home/         # Page d'accueil
│   └── course/       # Page de cours
├── hooks/            # Hooks React personnalisés
│   └── course/       # Hooks liés au cours
├── constants/        # Constantes de l'application
├── styles/           # Styles globaux et CSS
├── utils/            # Fonctions utilitaires
└── types/            # Définitions de types TypeScript
```

## 🎯 Objectifs d'Apprentissage Clés

En complétant ce cours, vous allez :

- ✅ Comprendre les fondamentaux de Vite et ses avantages
- ✅ Maîtriser les composants React, props et gestion du state
- ✅ Apprendre les hooks React modernes (useState, useEffect, hooks personnalisés)
- ✅ Implémenter les principes de design responsive
- ✅ Créer des animations fluides et des micro-interactions
- ✅ Suivre les bonnes pratiques d'organisation du code
- ✅ Construire une application web interactive complète

## 🎨 Principes de Design

Ce projet suit les principes établis de l'ingénierie logicielle :

- **KISS (Keep It Simple, Stupid)** : Composants simples et ciblés
- **DRY (Don't Repeat Yourself)** : Composants et utilitaires réutilisables
- **YAGNI (You Aren't Gonna Need It)** : Construire seulement ce qui est nécessaire
- **Principes SOLID** : Architecture modulaire et maintenable
- **Code Propre** : Code lisible et bien documenté
- **Design Responsive** : Approche mobile-first

## 🚀 Scripts Disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Builder pour la production
- `npm run preview` - Prévisualiser le build de production
- `npm run lint` - Exécuter ESLint

## 📱 Points de Rupture Responsive

- **Mobile** : < 480px
- **Tablette** : 480px - 768px  
- **Desktop** : 768px - 1024px
- **Large Desktop** : > 1024px

## 🎭 Fonctionnalités d'Animation

- Transitions de page avec CSS natif
- Effets de survol sur les éléments interactifs
- Animations de progression
- Micro-interactions pour une meilleure UX
- Support de mouvement réduit pour l'accessibilité

## 🧪 Support Navigateur

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)

## 🚀 Déploiement

### Déploiement sur GitHub Pages

Ce projet est configuré pour être déployé automatiquement sur GitHub Pages.

**Configuration requise :**
1. Modifiez `vite.config.js` : `base: '/votre-nom-de-repo/'`
2. Modifiez `package.json` : `homepage: "https://votre-username.github.io/votre-nom-de-repo"`
3. Activez GitHub Pages dans les paramètres du repository

**Déploiement automatique :**
```bash
git push origin main  # Déclenche le déploiement automatique
```

**Déploiement manuel :**
```bash
npm run deploy
```

📖 **Guide complet** : Voir [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🤝 Contribution

1. Forkez le dépôt
2. Créez une branche de fonctionnalité (`git checkout -b feature/fonctionnalite-incroyable`)
3. Committez vos changements (`git commit -m 'Ajouter une fonctionnalité incroyable'`)
4. Poussez vers la branche (`git push origin feature/fonctionnalite-incroyable`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

## 🔗 Ressources Utiles

- [Documentation Vite](https://vitejs.dev/guide/)
- [Documentation React](https://reactjs.org/docs/)
- [Système de Design Polaris](https://polaris.shopify.com/)
- [CSS Animations](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Animations)
- [Fonctionnalités JavaScript Modernes](https://developer.mozilla.org/fr/docs/Web/JavaScript)

## 💡 Conseils pour Réussir

1. **Pratiquez Régulièrement** : Codez avec les exemples
2. **Expérimentez** : Essayez de modifier le code pour voir ce qui se passe
3. **Posez des Questions** : Utilisez les démos interactives pour explorer les concepts
4. **Construisez des Projets** : Appliquez ce que vous apprenez à vos propres projets
5. **Restez à Jour** : Suivez les mises à jour de React et Vite

---

**Bon Apprentissage !** 🎉

Construit avec ❤️ pour les développeurs web en herbe
