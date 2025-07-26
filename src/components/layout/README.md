# 🎨 Système de Layouts

Un système de layouts complet et responsive pour l'application Cours Interactif Vite + React.

## 📦 Composants Disponibles

### 🏗️ MainLayout
Layout principal pour les pages générales (accueil, etc.)

```jsx
import { MainLayout } from '../components/layout'

<MainLayout 
  currentPage="home" 
  onNavigate={handleNavigate}
  showNavigation={true}
>
  <HomePage />
</MainLayout>
```

**Props :**
- `currentPage` : Page actuelle ('home', 'course', etc.)
- `onNavigate` : Fonction de navigation
- `showNavigation` : Afficher/masquer la navigation sidebar

### 📚 CourseLayout
Layout spécialisé pour les pages de cours avec header enrichi et navigation de leçons

```jsx
import { CourseLayout } from '../components/layout'

<CourseLayout 
  currentPage="course" 
  onNavigate={handleNavigate}
>
  <CoursePage />
</CourseLayout>
```

**Fonctionnalités :**
- Header avec progression et infos de leçon
- Navigation précédent/suivant
- Bouton de completion automatique
- Breadcrumbs et retour à l'accueil

### 🚀 AdvancedLayout
Layout intelligent avec gestion automatique du type

```jsx
import { AdvancedLayout, useLayout } from '../components/layout'

function MyComponent() {
  const { showToast, showModal, startLoading, layoutProps } = useLayout()
  
  return (
    <AdvancedLayout
      type="auto" // Détection automatique
      currentPage="course"
      onNavigate={handleNavigate}
      {...layoutProps}
    >
      <MyContent />
    </AdvancedLayout>
  )
}
```

### 📱 Composants Responsive

#### Container
Conteneur responsive avec tailles prédéfinies

```jsx
import { Container } from '../components/layout'

<Container size="desktop" padding={true}>
  <Content />
</Container>
```

**Tailles disponibles :**
- `mobile` : 100% width
- `tablet` : 768px max-width
- `desktop` : 1024px max-width
- `large` : 1200px max-width
- `full` : 100% width

#### ResponsiveGrid
Grid adaptatif selon la taille d'écran

```jsx
import { ResponsiveGrid } from '../components/layout'

<ResponsiveGrid>
  {items.map(item => <Card key={item.id} {...item} />)}
</ResponsiveGrid>
```

#### ResponsiveShow / ResponsiveHide
Affichage conditionnel selon la taille d'écran

```jsx
import { ResponsiveShow, ResponsiveHide } from '../components/layout'

<ResponsiveShow on={['desktop', 'large']}>
  <DesktopSidebar />
</ResponsiveShow>

<ResponsiveHide on={['mobile']}>
  <AdvancedFeatures />
</ResponsiveHide>
```

### 🎯 Hook useResponsive
Hook pour détecter la taille d'écran

```jsx
import { useResponsive } from '../components/layout'

function MyComponent() {
  const { screenSize, isMobile, isTablet, isDesktop } = useResponsive()
  
  return (
    <div>
      {isMobile && <MobileView />}
      {isDesktop && <DesktopView />}
    </div>
  )
}
```

## 🎨 Styles CSS

### Classes Utilitaires

```css
/* Containers responsive */
.responsive-container--mobile
.responsive-container--tablet  
.responsive-container--desktop
.responsive-container--large

/* Grids responsive */
.responsive-grid--mobile
.responsive-grid--tablet
.responsive-grid--desktop
.responsive-grid--large

/* Cards animées */
.animated-card
.animated-card--course
.animated-card--module
.animated-card--lesson

/* Animations */
.fade-in-up
.fade-in-left
.fade-in-right

/* Responsive utilities */
.responsive-hide-mobile
.responsive-hide-tablet
.responsive-show-desktop-only
```

### Variables CSS Personnalisées

```css
:root {
  --progress: 75; /* Pour les indicateurs de progression */
}
```

## 📋 Exemples d'Usage

### Page avec Layout Principal

```jsx
import { MainLayout, Container, ResponsiveGrid } from '../components/layout'

function HomePage({ onStartCourse }) {
  return (
    <MainLayout currentPage="home" onNavigate={handleNavigate}>
      <Container size="large">
        <h1>Bienvenue</h1>
        
        <ResponsiveGrid>
          {modules.map(module => (
            <Card key={module.id} className="animated-card">
              {module.content}
            </Card>
          ))}
        </ResponsiveGrid>
      </Container>
    </MainLayout>
  )
}
```

### Page de Cours avec Sidebar Responsive

```jsx
import { CourseLayout, ResponsiveShow } from '../components/layout'

function CoursePage() {
  return (
    <CourseLayout currentPage="course" onNavigate={handleNavigate}>
      <Layout>
        <ResponsiveShow on={['desktop', 'large']}>
          <Layout.Section variant="oneThird">
            <Sidebar />
          </Layout.Section>
        </ResponsiveShow>
        
        <Layout.Section>
          <MainContent />
        </Layout.Section>
      </Layout>
    </CourseLayout>
  )
}
```

### Layout Avancé avec Contrôles

```jsx
import { AdvancedLayout, useLayout } from '../components/layout'

function App() {
  const { 
    showToast, 
    showModal, 
    startLoading, 
    stopLoading,
    layoutProps 
  } = useLayout()
  
  const handleAction = async () => {
    startLoading()
    try {
      await performAction()
      showToast('Action terminée avec succès !', { duration: 3000 })
    } catch (error) {
      showToast('Erreur : ' + error.message, { error: true })
    } finally {
      stopLoading()
    }
  }
  
  return (
    <AdvancedLayout
      type="auto"
      currentPage={currentPage}
      onNavigate={handleNavigate}
      {...layoutProps}
    >
      <MyApp />
    </AdvancedLayout>
  )
}
```

## 🚀 Breakpoints

```javascript
const breakpoints = {
  mobile: '< 480px',
  tablet: '480px - 768px', 
  desktop: '768px - 1024px',
  large: '> 1024px'
}
```

## 🎯 Bonnes Pratiques

1. **Utilisez `MainLayout`** pour les pages générales
2. **Utilisez `CourseLayout`** pour les pages de cours
3. **Utilisez `AdvancedLayout`** pour une gestion automatique
4. **Préférez `Container`** aux divs avec styles inline
5. **Utilisez `ResponsiveGrid`** pour les layouts adaptatifs
6. **Testez sur toutes les tailles** d'écran
7. **Optimisez les animations** pour les performances

## 🔧 Personnalisation

Pour personnaliser les layouts, modifiez les fichiers :
- `src/styles/layout.css` - Styles CSS
- `src/components/layout/MainLayout.jsx` - Layout principal
- `src/components/layout/CourseLayout.jsx` - Layout de cours
- `src/components/layout/ResponsiveLayout.jsx` - Utilitaires responsive