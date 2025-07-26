export const courseModules = [
  {
    id: 'vite-basics',
    title: 'Fondamentaux de Vite',
    description: 'Apprenez les bases de Vite - un outil de build moderne pour le développement web',
    icon: '⚡',
    duration: '30 min',
    lessons: [
      {
        id: 'what-is-vite',
        title: 'Qu\'est-ce que Vite ?',
        description: 'Introduction à Vite et ses avantages',
        type: 'theory',
        duration: '5 min',
        content: {
          theory: `
Vite est un outil de build moderne qui offre une expérience de développement plus rapide pour les projets web modernes.

**Avantages clés :**
- ⚡ **Ultra Rapide** : Démarrage instantané du serveur et remplacement de module à chaud
- 🔧 **Configuration Simple** : Configuration minimale requise
- 📦 **Builds Optimisés** : Utilise Rollup pour les builds de production
- 🔌 **Écosystème de Plugins** : Système de plugins riche

**Pourquoi Vite ?**
Les bundlers traditionnels comme Webpack doivent traiter toute votre application avant de la servir. Vite sert le code source via des modules ES natifs pendant le développement, ce qui le rend incroyablement rapide.
          `,
          codeExample: `
// Approche traditionnelle (lente)
// Bundler toute l'app → Servir

// Approche Vite (rapide)  
// Servir les modules ES natifs → Bundler seulement ce qui est nécessaire
          `
        }
      },
      {
        id: 'vite-vs-webpack',
        title: 'Vite vs Bundlers Traditionnels',
        description: 'Comparez Vite avec les bundlers traditionnels comme Webpack',
        type: 'comparison',
        duration: '7 min',
        content: {
          theory: `
**Comparaison de vitesse de développement :**

| Fonctionnalité | Webpack | Vite |
|---------|---------|------|
| Démarrage à froid | 30-60s | <1s |
| Rechargement à chaud | 1-3s | <100ms |
| Taille du bundle | Grande | Optimisée |
| Configuration | Complexe | Simple |

**Quand utiliser Vite :**
- Nouveaux projets
- Navigateurs modernes
- Développement rapide nécessaire

**Quand rester avec Webpack :**
- Support des navigateurs anciens
- Exigences de build complexes
- Projets existants importants
          `
        }
      },
      {
        id: 'project-structure',
        title: 'Structure de Projet Vite',
        description: 'Comprendre la structure typique d\'un projet Vite',
        type: 'practical',
        duration: '8 min',
        content: {
          theory: `
**Structure Standard d'un Projet Vite :**

\`\`\`
mon-app-vite/
├── public/          # Ressources statiques
├── src/            # Code source
│   ├── components/ # Composants React
│   ├── assets/     # Images, styles
│   └── main.jsx    # Point d'entrée
├── index.html      # Template HTML
├── package.json    # Dépendances
└── vite.config.js  # Configuration Vite
\`\`\`

**Fichiers Clés :**
- **index.html** : Le point d'entrée (contrairement à Webpack)
- **vite.config.js** : Fichier de configuration
- **main.jsx** : Point d'entrée JavaScript
          `,
          interactive: {
            type: 'file-explorer',
            files: [
              { name: 'index.html', type: 'file', content: '<!DOCTYPE html>...' },
              { name: 'src/', type: 'folder', children: [
                { name: 'main.jsx', type: 'file' },
                { name: 'App.jsx', type: 'file' }
              ]},
              { name: 'public/', type: 'folder' },
              { name: 'vite.config.js', type: 'file' }
            ]
          }
        }
      },
      {
        id: 'vite-commands',
        title: 'Commandes Essentielles Vite',
        description: 'Apprenez les commandes CLI Vite les plus importantes',
        type: 'practical',
        duration: '10 min',
        content: {
          theory: `
**Commandes Essentielles Vite :**

\`\`\`bash
# Créer un nouveau projet
npm create vite@latest mon-app

# Démarrer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build de production
npm run preview
\`\`\`

**Développement vs Production :**
- **Développement** : Rebuild rapides, source maps, rechargement à chaud
- **Production** : Optimisé, minifié, tree-shaking
          `,
          interactive: {
            type: 'terminal-simulator',
            commands: [
              { command: 'npm run dev', output: 'Local: http://localhost:5173/' },
              { command: 'npm run build', output: 'dist/ folder created' }
            ]
          }
        }
      }
    ]
  },
  {
    id: 'react-fundamentals',
    title: 'Fondamentaux de React',
    description: 'Maîtrisez les concepts fondamentaux du développement React',
    icon: '⚛️',
    duration: '45 min',
    lessons: [
      {
        id: 'what-is-react',
        title: 'Qu\'est-ce que React ?',
        description: 'Introduction à React et à l\'architecture basée sur les composants',
        type: 'theory',
        duration: '8 min',
        content: {
          theory: `
React est une bibliothèque JavaScript pour construire des interfaces utilisateur, particulièrement des applications web.

**Concepts Fondamentaux :**
- 🧩 **Composants** : Éléments d'interface réutilisables
- 🔄 **DOM Virtuel** : Mises à jour efficaces
- 📊 **État (State)** : Données de composant qui peuvent changer
- ⚡ **Props** : Données transmises aux composants

**Architecture Basée sur les Composants :**
Divisez votre interface en pièces indépendantes et réutilisables qui peuvent être assemblées ensemble.
          `,
          codeExample: `
// Composant React Simple
function Welcome(props) {
  return <h1>Bonjour, {props.name} !</h1>;
}

// Utilisation du composant
<Welcome name="Sarah" />
          `
        }
      },
      {
        id: 'jsx-syntax',
        title: 'Syntaxe JSX',
        description: 'Apprenez JSX - l\'extension de syntaxe pour JavaScript',
        type: 'practical',
        duration: '12 min',
        content: {
          theory: `
JSX est une extension de syntaxe pour JavaScript qui vous permet d'écrire du code similaire à HTML dans vos fichiers JavaScript.

**Règles JSX :**
- Doit retourner un seul élément parent
- Utilisez camelCase pour les attributs
- Utilisez {} pour les expressions JavaScript
- className au lieu de class

**JSX vs HTML :**
\`\`\`jsx
// JSX
<div className="container">
  <h1>{title}</h1>
  <button onClick={handleClick}>Cliquez-moi</button>
</div>

// HTML
<div class="container">
  <h1>Titre Statique</h1>
  <button onclick="handleClick()">Cliquez-moi</button>
</div>
\`\`\`
          `,
          interactive: {
            type: 'code-editor',
            initialCode: `function MyComponent() {
  const name = "World";
  
  return (
    <div>
      <h1>Hello {name}!</h1>
    </div>
  );
}`,
            solution: `function MyComponent() {
  const name = "World";
  const isLoggedIn = true;
  
  return (
    <div className="welcome">
      <h1>Hello {name}!</h1>
      {isLoggedIn && <p>Welcome back!</p>}
    </div>
  );
}`
          }
        }
      },
      {
        id: 'components-props',
        title: 'Components and Props',
        description: 'Create reusable components and pass data with props',
        type: 'practical',
        duration: '15 min',
        content: {
          theory: `
Components are the building blocks of React applications. Props (properties) are how you pass data to components.

**Function Components:**
\`\`\`jsx
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>You are {age} years old</p>
    </div>
  );
}
\`\`\`

**Props Best Practices:**
- Props are read-only
- Use destructuring for cleaner code
- Provide default values when needed
- Use PropTypes for type checking
          `,
          interactive: {
            type: 'component-builder',
            task: 'Create a UserCard component that displays user information',
            template: `function UserCard({ name, email, avatar }) {
  return (
    <div className="user-card">
      {/* Add your code here */}
    </div>
  );
}`
          }
        }
      },
      {
        id: 'state-events',
        title: 'State and Event Handling',
        description: 'Manage component state and handle user interactions',
        type: 'practical',
        duration: '10 min',
        content: {
          theory: `
State allows components to store and manage data that can change over time.

**useState Hook:**
\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
\`\`\`

**Event Handling:**
- Use camelCase event names (onClick, onChange)
- Pass function references, not calls
- Use arrow functions for inline handlers
          `,
          interactive: {
            type: 'live-coding',
            challenge: 'Build a simple todo app with add/remove functionality'
          }
        }
      }
    ]
  },
  {
    id: 'react-advanced',
    title: 'Concepts Avancés de React',
    description: 'Approfondissez React avec les hooks, le contexte et l\'optimisation des performances',
    icon: '🚀',
    duration: '60 min',
    lessons: [
      {
        id: 'useeffect-hook',
        title: 'useEffect Hook',
        description: 'Manage side effects in functional components',
        type: 'practical',
        duration: '20 min',
        content: {
          theory: `
useEffect lets you perform side effects in functional components (data fetching, subscriptions, manually changing the DOM).

**Basic Syntax:**
\`\`\`jsx
import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Side effect code
    fetchData().then(setData);
    
    // Cleanup function (optional)
    return () => {
      cleanup();
    };
  }, []); // Dependency array
  
  return <div>{data ? data.title : 'Loading...'}</div>;
}
\`\`\`

**Dependency Array:**
- [] = Run once on mount
- [value] = Run when value changes  
- No array = Run on every render
          `,
          interactive: {
            type: 'effect-visualizer',
            examples: [
              { deps: '[]', description: 'Mount only' },
              { deps: '[count]', description: 'When count changes' },
              { deps: 'none', description: 'Every render' }
            ]
          }
        }
      },
      {
        id: 'custom-hooks',
        title: 'Custom Hooks',
        description: 'Create reusable stateful logic with custom hooks',
        type: 'practical',
        duration: '20 min',
        content: {
          theory: `
Custom hooks let you extract component logic into reusable functions.

**Creating Custom Hooks:**
\`\`\`jsx
// useCounter.js
import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Using the custom hook
function Counter() {
  const { count, increment, decrement, reset } = useCounter(10);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
\`\`\`

**Hook Rules:**
- Only call hooks at the top level
- Only call hooks from React functions
- Custom hook names must start with "use"
          `,
          interactive: {
            type: 'hook-builder',
            challenge: 'Create a useLocalStorage hook'
          }
        }
      },
      {
        id: 'context-api',
        title: 'Context API',
        description: 'Share data across components without prop drilling',
        type: 'practical',
        duration: '20 min',
        content: {
          theory: `
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

**Creating Context:**
\`\`\`jsx
import { createContext, useContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();

// Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const value = {
    theme,
    toggleTheme: () => setTheme(t => t === 'light' ? 'dark' : 'light')
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Using Context
function Button() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      className={theme}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
}
\`\`\`

**When to Use Context:**
- Theme data (color, locale)
- User authentication
- App-wide settings
- Avoid for frequently changing data
          `,
          interactive: {
            type: 'context-diagram',
            showPropDrilling: true,
            showContext: true
          }
        }
      },
      {
        id: 'error-boundaries',
        title: 'Error Boundaries',
        description: 'Handle JavaScript errors in your React component tree',
        type: 'advanced',
        duration: '15 min',
        content: {
          theory: `
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.

**Creating an Error Boundary:**
\`\`\`jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Oops! Something went wrong.</h2>
          <p>We've been notified about this error.</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <Header />
      <MainContent />
      <Sidebar />
    </ErrorBoundary>
  );
}
\`\`\`

**What Error Boundaries Catch:**
- Errors during rendering
- Errors in lifecycle methods
- Errors in constructors

**What They Don't Catch:**
- Event handlers
- Asynchronous code (setTimeout, promises)
- Errors during server-side rendering
- Errors thrown in the error boundary itself
          `,
          interactive: {
            type: 'error-boundary-demo',
            component: 'BuggyComponent',
            showFallback: true
          }
        }
      },
      {
        id: 'react-portals',
        title: 'React Portals',
        description: 'Render components outside the normal DOM hierarchy',
        type: 'advanced',
        duration: '15 min',
        content: {
          theory: `
Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

**Creating Portals:**
\`\`\`jsx
import { createPortal } from 'react-dom';

function Modal({ children, isOpen }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Target DOM node
  );
}

// Usage
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      
      <Modal isOpen={showModal}>
        <h2>Modal Content</h2>
        <button onClick={() => setShowModal(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
}
\`\`\`

**Common Use Cases:**
- Modals and dialogs
- Tooltips and popovers
- Notifications/toasts
- Dropdown menus that need to escape parent containers

**HTML Setup:**
\`\`\`html
<!-- index.html -->
<div id="root"></div>
<div id="modal-root"></div>
<div id="tooltip-root"></div>
\`\`\`

**Benefits:**
- Escape CSS overflow/z-index issues
- Better semantic HTML structure
- Event bubbling still works through React tree
          `,
          interactive: {
            type: 'portal-demo',
            components: ['Modal', 'Tooltip', 'Toast']
          }
        }
      },
      {
        id: 'react-refs',
        title: 'Refs and DOM Manipulation',
        description: 'Access DOM elements and component instances directly',
        type: 'advanced',
        duration: '20 min',
        content: {
          theory: `
Refs provide a way to access DOM nodes or React elements created in the render method.

**useRef Hook:**
\`\`\`jsx
import { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus input on mount
    inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>
        Focus Input
      </button>
    </div>
  );
}
\`\`\`

**Forwarding Refs:**
\`\`\`jsx
import { forwardRef, useRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className="custom-input"
      {...props}
    />
  );
});

function App() {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Custom input" />
      <button onClick={() => inputRef.current.focus()}>
        Focus Custom Input
      </button>
    </div>
  );
}
\`\`\`

**Common Use Cases:**
- Managing focus, text selection, media playback
- Triggering imperative animations
- Integrating with third-party DOM libraries
- Measuring DOM elements

**Best Practices:**
- Don't overuse refs - prefer declarative approach
- Don't access refs during rendering
- Use callback refs for dynamic lists
- Clean up refs in useEffect cleanup
          `,
          interactive: {
            type: 'refs-playground',
            examples: ['Focus Management', 'Scroll Position', 'Animation Trigger']
          }
        }
      },
      {
        id: 'react-memo-optimization',
        title: 'Performance Optimization',
        description: 'Optimize React apps with React.memo, useMemo, and useCallback',
        type: 'advanced',
        duration: '25 min',
        content: {
          theory: `
React provides several tools for optimizing performance by preventing unnecessary re-renders.

**React.memo:**
\`\`\`jsx
import { memo } from 'react';

const ExpensiveComponent = memo(function ExpensiveComponent({ data, onAction }) {
  console.log('ExpensiveComponent rendered');
  
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <button onClick={onAction}>Action</button>
    </div>
  );
});

// Custom comparison function
const OptimizedComponent = memo(function OptimizedComponent({ user }) {
  return <div>{user.name}</div>;
}, (prevProps, nextProps) => {
  // Return true if props are equal (skip re-render)
  return prevProps.user.id === nextProps.user.id;
});
\`\`\`

**useMemo Hook:**
\`\`\`jsx
import { useMemo } from 'react';

function ExpensiveList({ items, filter }) {
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]); // Only recalculate when items or filter change

  const itemCount = useMemo(() => {
    return filteredItems.length;
  }, [filteredItems]);

  return (
    <div>
      <p>Found {itemCount} items</p>
      {filteredItems.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
\`\`\`

**useCallback Hook:**
\`\`\`jsx
import { useCallback, useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');

  // Without useCallback, this function is recreated on every render
  const addTodo = useCallback((text) => {
    setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
  }, []); // No dependencies, function never changes

  const toggleTodo = useCallback((id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []); // No dependencies needed since we use functional update

  return (
    <div>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}
\`\`\`

**When to Use:**
- **React.memo**: For components that receive the same props frequently
- **useMemo**: For expensive calculations
- **useCallback**: For functions passed to optimized child components

**Performance Tips:**
- Don't optimize prematurely - measure first
- Profile with React DevTools
- Consider code splitting for large components
- Use React.Profiler for detailed analysis
          `,
          interactive: {
            type: 'performance-comparison',
            scenarios: ['Without Optimization', 'With React.memo', 'With useMemo/useCallback']
          }
        }
      }
    ]
  },
  {
    id: 'vite-react-integration',
    title: 'Meilleures Pratiques Vite + React',
    description: 'Optimisez votre flux de développement Vite + React',
    icon: '⚡⚛️',
    duration: '30 min',
    lessons: [
      {
        id: 'project-setup',
        title: 'Optimal Project Setup',
        description: 'Configure Vite and React for maximum productivity',
        type: 'practical',
        duration: '15 min',
        content: {
          theory: `
**Recommended Project Structure:**
\`\`\`
src/
├── components/     # Reusable UI components
│   ├── ui/        # Basic UI elements
│   └── layout/    # Layout components
├── pages/         # Page components
├── hooks/         # Custom hooks
├── services/      # API calls
├── utils/         # Helper functions
├── constants/     # App constants
└── styles/        # Global styles
\`\`\`

**Essential Vite Plugins:**
\`\`\`js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
})
\`\`\`
          `,
          interactive: {
            type: 'project-scaffolder',
            allowCustomization: true
          }
        }
      },
      {
        id: 'performance-optimization',
        title: 'Performance Optimization',
        description: 'Optimize your React app with Vite',
        type: 'advanced',
        duration: '15 min',
        content: {
          theory: `
**Code Splitting:**
\`\`\`jsx
import { lazy, Suspense } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

**Asset Optimization:**
- Use \`import.meta.glob()\` for dynamic imports
- Optimize images with Vite plugins
- Use tree shaking for smaller bundles

**Development Optimizations:**
- Enable Fast Refresh
- Use source maps
- Configure proxy for API calls

**Production Optimizations:**
- Enable gzip compression
- Use CDN for static assets
- Implement proper caching strategies
          `,
          interactive: {
            type: 'performance-analyzer',
            metrics: ['Bundle Size', 'Load Time', 'First Paint']
          }
        }
      }
    ]
  },
  {
    id: 'react-router',
    title: 'React Router',
    description: 'Maîtrisez le routage côté client dans les applications React',
    icon: '🛣️',
    duration: '50 min',
    lessons: [
      {
        id: 'router-basics',
        title: 'Bases de React Router',
        description: 'Apprenez les fondamentaux du routage côté client',
        type: 'practical',
        duration: '15 min',
        content: {
          theory: `
React Router permet la navigation entre différentes vues de composants dans une application React, permet de changer l'URL du navigateur et maintient l'interface utilisateur synchronisée avec l'URL.

**Installation :**
\`\`\`bash
npm install react-router-dom
\`\`\`

**Configuration de base :**
\`\`\`jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Page d'Accueil</h1>;
}

function About() {
  return <h1>Page À Propos</h1>;
}

function Contact() {
  return <h1>Page Contact</h1>;
}
\`\`\`

**Composants Principaux :**
- **BrowserRouter** : Fournit le contexte de routage utilisant l'API HTML5 history
- **Routes** : Conteneur pour tous les composants Route
- **Route** : Définit une route et son composant correspondant
- **Link** : Composant de navigation (remplace les balises <a>)
- **NavLink** : Lien avec style d'état actif

**Navigation avec Link :**
\`\`\`jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">À Propos</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
\`\`\`
          `,
          interactive: {
            type: 'router-setup',
            routes: ['/', '/about', '/contact'],
            showNavigation: true
          }
        }
      },
      {
        id: 'dynamic-routes',
        title: 'Routes Dynamiques et Paramètres',
        description: 'Gérez les URLs dynamiques avec des paramètres',
        type: 'practical',
        duration: '20 min',
        content: {
          theory: `
Les routes dynamiques vous permettent de capturer des valeurs depuis l'URL et de les utiliser dans vos composants.

**Paramètres d'URL :**
\`\`\`jsx
import { useParams } from 'react-router-dom';

// Définition de route
<Route path="/user/:id" element={<UserProfile />} />

// Composant
function UserProfile() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Profil Utilisateur</h1>
      <p>ID Utilisateur : {id}</p>
    </div>
  );
}
\`\`\`

**Paramètres Multiples :**
\`\`\`jsx
// Route: /post/:category/:slug
<Route path="/post/:category/:slug" element={<BlogPost />} />

function BlogPost() {
  const { category, slug } = useParams();
  
  return (
    <div>
      <h1>Article de Blog</h1>
      <p>Catégorie : {category}</p>
      <p>Slug : {slug}</p>
    </div>
  );
}
\`\`\`

**Paramètres Optionnels :**
\`\`\`jsx
// Paramètre de page optionnel
<Route path="/products/:category/:page?" element={<Products />} />

function Products() {
  const { category, page = '1' } = useParams();
  
  return (
    <div>
      <h1>Produits dans {category}</h1>
      <p>Page : {page}</p>
    </div>
  );
}
\`\`\`

**Query Parameters:**
\`\`\`jsx
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  const filter = searchParams.get('filter');
  
  const updateFilter = (newFilter) => {
    setSearchParams({ q: query, filter: newFilter });
  };
  
  return (
    <div>
      <h1>Search Results for: {query}</h1>
      <p>Filter: {filter}</p>
      <button onClick={() => updateFilter('popular')}>
        Popular Items
      </button>
    </div>
  );
}
\`\`\`
          `,
          interactive: {
            type: 'dynamic-routes-demo',
            routes: ['/user/:id', '/post/:category/:slug'],
            showParams: true
          }
        }
      },
      {
        id: 'nested-routes',
        title: 'Routes Imbriquées et Layouts',
        description: 'Créez des layouts complexes avec du routage imbriqué',
        type: 'advanced',
        duration: '15 min',
        content: {
          theory: `
Les routes imbriquées permettent de construire des interfaces complexes avec plusieurs niveaux de routage et des layouts partagés.

**Structure de Routes Imbriquées :**
\`\`\`jsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<ProductsLayout />}>
            <Route index element={<ProductsList />} />
            <Route path=":id" element={<ProductDetail />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Composant Layout avec Outlet
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="app-layout">
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer>
        <p>&copy; 2024 My App</p>
      </footer>
    </div>
  );
}

function ProductsLayout() {
  return (
    <div className="products-layout">
      <aside>
        <ProductsSidebar />
      </aside>
      <div className="products-content">
        <Outlet /> {/* Nested product routes */}
      </div>
    </div>
  );
}
\`\`\`

**Index Routes:**
Index routes render when the parent route path matches exactly:
\`\`\`jsx
<Route path="/products" element={<ProductsLayout />}>
  <Route index element={<ProductsList />} /> {/* /products */}
  <Route path="new" element={<NewProduct />} /> {/* /products/new */}
</Route>
\`\`\`

**Route Context:**
Share data between parent and child routes:
\`\`\`jsx
import { Outlet, useOutletContext } from 'react-router-dom';

function ParentRoute() {
  const [user, setUser] = useState(null);
  
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet context={{ user, setUser }} />
    </div>
  );
}

function ChildRoute() {
  const { user, setUser } = useOutletContext();
  
  return <div>Welcome, {user?.name}</div>;
}
\`\`\`
          `,
          interactive: {
            type: 'nested-routes-builder',
            showOutlet: true,
            showLayout: true
          }
        }
      }
    ]
  },
  {
    id: 'forms-data-fetching',
    title: 'Formulaires et Récupération de Données',
    description: 'Gérez les saisies utilisateur et la communication API dans React',
    icon: '📝',
    duration: '60 min',
    lessons: [
      {
        id: 'controlled-components',
        title: 'Composants Contrôlés et Formulaires',
        description: 'Maîtrisez la gestion de formulaires en React avec les composants contrôlés',
        type: 'practical',
        duration: '20 min',
        content: {
          theory: `
Les composants contrôlés sont des éléments de formulaire dont les valeurs sont contrôlées par l'état React.

**Input Contrôlé de Base :**
\`\`\`jsx
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis :', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows={4}
        required
      />
      
      <button type="submit">Send Message</button>
    </form>
  );
}
\`\`\`

**Form Validation:**
\`\`\`jsx
function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid, submitting...');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      
      <button type="submit">Sign Up</button>
    </form>
  );
}
\`\`\`

**Custom Form Hook:**
\`\`\`jsx
function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  };

  return { values, errors, handleChange, handleSubmit };
}
\`\`\`
          `,
          interactive: {
            type: 'form-builder',
            fields: ['text', 'email', 'textarea', 'select'],
            showValidation: true
          }
        }
      },
      {
        id: 'data-fetching',
        title: 'Récupération de Données avec useEffect',
        description: 'Récupérez des données depuis des APIs et gérez les états de chargement',
        type: 'practical',
        duration: '25 min',
        content: {
          theory: `
Data fetching is a common side effect that requires careful handling of loading states, errors, and cleanup.

**Basic Data Fetching:**
\`\`\`jsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const userData = await response.json();
        setUsers(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Users ({users.length})</h1>
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
\`\`\`

**Custom Data Fetching Hook:**
\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(url, {
          signal: controller.signal
        });
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

// Usage
function PostDetail({ postId }) {
  const { data: post, loading, error } = useFetch(\`/api/posts/\${postId}\`);
  
  if (loading) return <div>Loading post...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <small>By {post.author} on {post.date}</small>
    </article>
  );
}
\`\`\`

**Handling Different HTTP Methods:**
\`\`\`jsx
function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (url, options = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const get = (url) => request(url);
  const post = (url, data) => request(url, {
    method: 'POST',
    body: JSON.stringify(data)
  });
  const put = (url, data) => request(url, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
  const del = (url) => request(url, { method: 'DELETE' });

  return { loading, error, get, post, put, delete: del };
}
\`\`\`

**Error Boundaries for API Errors:**
\`\`\`jsx
class ApiErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="api-error">
          <h2>Something went wrong with the API</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
\`\`\`
          `,
          interactive: {
            type: 'api-playground',
            endpoints: ['/api/users', '/api/posts', '/api/comments'],
            showStates: ['loading', 'success', 'error']
          }
        }
      }
    ]
  },
  {
    id: 'state-management',
    title: 'Gestion d\'État',
    description: 'Modèles et librairies avancés de gestion d\'état',
    icon: '🗃️',
    duration: '70 min',
    lessons: [
      {
        id: 'global-state-patterns',
        title: 'Modèles de Gestion d\'État Global',
        description: 'Comprendre quand et comment gérer l\'état global',
        type: 'theory',
        duration: '15 min',
        content: {
          theory: `
La gestion d'état global devient nécessaire lorsque plusieurs composants doivent partager et synchroniser l'état.

**Quand Utiliser l'État Global :**
- Statut d'authentification utilisateur
- Préférences de thème
- Données du panier d'achat
- Paramètres à l'échelle de l'application
- Données dont plusieurs composants déconnectés ont besoin

**Arbre de Décision État Local vs Global :**
\`\`\`
L'état doit-il être partagé entre les composants ?
├─ Non → Utiliser l'état local (useState)
└─ Oui
   ├─ Les composants sont-ils parent/enfant ? → Utiliser prop drilling ou remonter l'état
   └─ Les composants sont-ils déconnectés ? → Utiliser la gestion d'état global
\`\`\`

**Options Intégrées de React :**
1. **Context API** - Pour un état global simple
2. **useReducer + Context** - Pour une logique d'état complexe
3. **Librairies Externes** - Redux, Zustand, Jotai pour les besoins avancés

**Modèles de Gestion d'État :**
- **Architecture Flux** : Flux de données unidirectionnel
- **Event Sourcing** : Stocker les changements d'état comme événements
- **CQRS** : Séparer les opérations de lecture et d'écriture
- **État Atomique** : Diviser l'état en petits atomes indépendants
          `,
          codeExample: `
// Anti-pattern : Prop drilling
function App() {
  const [user, setUser] = useState(null);
  return <Dashboard user={user} setUser={setUser} />;
}

function Dashboard({ user, setUser }) {
  return <Sidebar user={user} setUser={setUser} />;
}

function Sidebar({ user, setUser }) {
  return <UserProfile user={user} setUser={setUser} />;
}

// Better: Context API
const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function UserProfile() {
  const { user, setUser } = useContext(UserContext);
  return <div>{user?.name}</div>;
}
          `
        }
      },
      {
        id: 'zustand-basics',
        title: 'Zustand pour la Gestion d\'État Simple',
        description: 'Apprenez Zustand - une solution légère de gestion d\'état',
        type: 'practical',
        duration: '25 min',
        content: {
          theory: `
Zustand is a small, fast, and scalable state management solution that doesn't require providers or boilerplate.

**Installation:**
\`\`\`bash
npm install zustand
\`\`\`

**Basic Store:**
\`\`\`javascript
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// Using in components
function Counter() {
  const { count, increment, decrement, reset } = useStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
\`\`\`

**Async Actions:**
\`\`\`javascript
const useUserStore = create((set, get) => ({
  users: [],
  loading: false,
  error: null,
  
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/users');
      const users = await response.json();
      set({ users, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
  addUser: async (userData) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      const newUser = await response.json();
      set((state) => ({ 
        users: [...state.users, newUser] 
      }));
    } catch (error) {
      set({ error: error.message });
    }
  },
  
  removeUser: (userId) => set((state) => ({
    users: state.users.filter(user => user.id !== userId)
  })),
}));
\`\`\`

**Computed Values:**
\`\`\`javascript
const useShoppingCart = create((set, get) => ({
  items: [],
  
  addItem: (product) => set((state) => ({
    items: [...state.items, { ...product, quantity: 1 }]
  })),
  
  removeItem: (productId) => set((state) => ({
    items: state.items.filter(item => item.id !== productId)
  })),
  
  // Computed values as getters
  get totalItems() {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },
  
  get totalPrice() {
    return get().items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },
}));

// Usage with computed values
function CartSummary() {
  const totalItems = useShoppingCart((state) => state.totalItems);
  const totalPrice = useShoppingCart((state) => state.totalPrice);
  
  return (
    <div>
      <p>Items: {totalItems}</p>
      <p>Total: \${totalPrice.toFixed(2)}</p>
    </div>
  );
}
\`\`\`

**Selective Subscriptions:**
\`\`\`javascript
// Only subscribe to specific parts of state
function UserName() {
  const userName = useUserStore((state) => state.user?.name);
  return <span>{userName}</span>;
}

function UserEmail() {
  const userEmail = useUserStore((state) => state.user?.email);
  return <span>{userEmail}</span>;
}
\`\`\`

**Zustand Benefits:**
- No providers needed
- TypeScript friendly
- Small bundle size (~1KB)
- Works outside React
- Simple API
- Built-in devtools support
          `,
          interactive: {
            type: 'zustand-playground',
            stores: ['counter', 'todo-list', 'user-management'],
            showDevtools: true
          }
        }
      },
      {
        id: 'redux-toolkit',
        title: 'Redux Toolkit',
        description: 'Redux moderne avec Redux Toolkit pour applications complexes',
        type: 'advanced',
        duration: '30 min',
        content: {
          theory: `
Redux Toolkit (RTK) is the official, recommended way to write Redux logic with less boilerplate.

**Installation:**
\`\`\`bash
npm install @reduxjs/toolkit react-redux
\`\`\`

**Store Setup:**
\`\`\`javascript
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  // Built-in middleware includes redux-thunk, serializable check, etc.
});
\`\`\`

**Creating Slices:**
\`\`\`javascript
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    step: 1,
  },
  reducers: {
    increment: (state) => {
      // RTK uses Immer internally, so we can "mutate" state
      state.value += state.step;
    },
    decrement: (state) => {
      state.value -= state.step;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    reset: (state) => {
      state.value = 0;
      state.step = 1;
    },
  },
});

export const { increment, decrement, incrementByAmount, setStep, reset } = counterSlice.actions;
export default counterSlice.reducer;
\`\`\`

**Async Actions with createAsyncThunk:**
\`\`\`javascript
// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/addUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchUsers
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle addUser
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      });
  },
});

export const { clearError } = userSlice.actions;
export default userSlice.reducer;
\`\`\`

**Provider Setup:**
\`\`\`javascript
// main.jsx
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
\`\`\`

**Using Redux in Components:**
\`\`\`javascript
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';
import { fetchUsers, addUser } from './userSlice';

function Counter() {
  const { value, step } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {value} (Step: {step})</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

function UserList() {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    dispatch(addUser({ name: 'New User', email: 'user@example.com' }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
\`\`\`

**RTK Query for Data Fetching:**
\`\`\`javascript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['User', 'Post'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['User'],
    }),
    addUser: builder.mutation({
      query: (userData) => ({
        url: '/users',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = apiSlice;
\`\`\`
          `,
          interactive: {
            type: 'redux-toolkit-demo',
            features: ['slice-creation', 'async-thunks', 'rtk-query'],
            showDevtools: true
          }
        }
      }
    ]
  },
  {
    id: 'react-testing',
    title: 'Tests d\'Applications React',
    description: 'Apprenez à écrire des tests complets pour les composants et applications React',
    icon: '🧪',
    duration: '65 min',
    lessons: [
      {
        id: 'testing-fundamentals',
        title: 'Fondamentaux des Tests',
        description: 'Comprendre les concepts de test et la pyramide de tests',
        type: 'theory',
        duration: '15 min',
        content: {
          theory: `
Les tests garantissent que vos applications React fonctionnent correctement et restent stables au fur et à mesure qu'elles grandissent.

**Types de Tests :**
1. **Tests Unitaires** - Testent des composants ou fonctions individuels en isolation
2. **Tests d'Intégration** - Testent comment plusieurs composants fonctionnent ensemble
3. **Tests End-to-End (E2E)** - Testent des workflows complets d'utilisateur

**La Pyramide des Tests :**
\`\`\`
     /\\
    /E2E\\     <- Peu, lents, coûteux
   /______\\
  /        \\
 /Intégration\\  <- Quelques-uns, vitesse moyenne
/____________\\
/            \\
/  Unitaires  \\   <- Nombreux, rapides, peu coûteux
/______________\\
\`\`\`

**Que Tester :**
- Rendu des composants
- Interactions utilisateur
- Changements d'état
- Gestion des props
- Limites d'erreur
- Intégrations API

**Que NE PAS Tester :**
- Détails d'implémentation
- Librairies tierces
- Styles (sauf si critique)
- Algorithmes complexes (tester séparément)

**Écosystème d'Outils de Test :**
- **Jest** - Framework de test et exécuteur de tests
- **React Testing Library** - Utilitaires de test de composants
- **Vitest** - Exécuteur de tests rapide natif Vite
- **Cypress/Playwright** - Frameworks de tests E2E
- **MSW** - Mocking d'API pour les tests

**Principes de Test :**
- Écrire des tests qui se comportent comme les utilisateurs
- Tester le comportement, pas l'implémentation
- Garder les tests simples et lisibles
- Tester l'important, pas tout
- Échouer rapidement avec des messages d'erreur clairs
          `,
          codeExample: `
// Bon : Tester le comportement
test('affiche un message de bienvenue quand l\\'utilisateur se connecte', () => {
  render(<LoginForm />);
  
  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: 'john' }
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'password123' }
  });
  fireEvent.click(screen.getByRole('button', { name: /log in/i }));
  
  expect(screen.getByText(/welcome john/i)).toBeInTheDocument();
});

// Mauvais : Tester l'implémentation
test('définit l\\'état isLoggedIn à true', () => {
  const { result } = renderHook(() => useAuth());
  
  act(() => {
    result.current.setIsLoggedIn(true); // Tester l'état interne
  });
  
  expect(result.current.isLoggedIn).toBe(true);
});
          `
        }
      },
      {
        id: 'react-testing-library',
        title: 'React Testing Library',
        description: 'Maîtrisez les tests de composants avec React Testing Library',
        type: 'practical',
        duration: '25 min',
        content: {
          theory: `
React Testing Library provides utilities for testing React components in a way that resembles how users interact with your app.

**Installation:**
\`\`\`bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
\`\`\`

**Basic Component Test:**
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Counter from '../Counter';

test('renders counter with initial value', () => {
  render(<Counter initialValue={5} />);
  
  expect(screen.getByText('Count: 5')).toBeInTheDocument();
});

test('increments counter when button clicked', async () => {
  const user = userEvent.setup();
  render(<Counter initialValue={0} />);
  
  const incrementButton = screen.getByRole('button', { name: /increment/i });
  await user.click(incrementButton);
  
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
\`\`\`

**Query Methods:**
\`\`\`javascript
// getBy* - Throws error if not found (use for elements that should exist)
const button = screen.getByRole('button', { name: /submit/i });
const input = screen.getByLabelText(/username/i);
const heading = screen.getByText(/welcome/i);

// queryBy* - Returns null if not found (use for elements that shouldn't exist)
const error = screen.queryByText(/error/i);
expect(error).not.toBeInTheDocument();

// findBy* - Async, waits for element (use for elements that appear later)
const message = await screen.findByText(/success/i);

// getAllBy* - Returns array of elements
const listItems = screen.getAllByRole('listitem');
expect(listItems).toHaveLength(3);
\`\`\`

**Testing Forms:**
\`\`\`javascript
test('submits form with correct data', async () => {
  const mockSubmit = jest.fn();
  const user = userEvent.setup();
  
  render(<ContactForm onSubmit={mockSubmit} />);
  
  await user.type(screen.getByLabelText(/name/i), 'John Doe');
  await user.type(screen.getByLabelText(/email/i), 'john@example.com');
  await user.type(screen.getByLabelText(/message/i), 'Hello world');
  
  await user.click(screen.getByRole('button', { name: /send/i }));
  
  expect(mockSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello world'
  });
});
\`\`\`

**Testing with Context:**
\`\`\`javascript
import { ThemeProvider } from '../contexts/ThemeContext';

const renderWithTheme = (ui, theme = 'light') => {
  return render(
    <ThemeProvider initialTheme={theme}>
      {ui}
    </ThemeProvider>
  );
};

test('renders with dark theme', () => {
  renderWithTheme(<Button>Click me</Button>, 'dark');
  
  const button = screen.getByRole('button');
  expect(button).toHaveClass('dark-theme');
});
\`\`\`

**Testing Custom Hooks:**
\`\`\`javascript
import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../hooks/useCounter';

test('useCounter increments value', () => {
  const { result } = renderHook(() => useCounter(0));
  
  expect(result.current.count).toBe(0);
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});

test('useCounter with custom step', () => {
  const { result } = renderHook(() => useCounter(0, 5));
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(5);
});
\`\`\`

**Mocking API Calls:**
\`\`\`javascript
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('displays users from API', async () => {
  render(<UserList />);
  
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
  const users = await screen.findAllByTestId('user-item');
  expect(users).toHaveLength(2);
  expect(screen.getByText('John')).toBeInTheDocument();
  expect(screen.getByText('Jane')).toBeInTheDocument();
});
\`\`\`

**Common Matchers:**
\`\`\`javascript
// DOM assertions
expect(element).toBeInTheDocument();
expect(element).toHaveTextContent('Hello');
expect(element).toHaveClass('active');
expect(element).toBeDisabled();
expect(element).toHaveValue('input value');

// Array/Object assertions
expect(array).toHaveLength(3);
expect(mockFn).toHaveBeenCalledWith(expectedArgs);
expect(mockFn).toHaveBeenCalledTimes(1);
\`\`\`
          `,
          interactive: {
            type: 'testing-playground',
            components: ['Counter', 'TodoList', 'UserProfile'],
            showQueries: true,
            showMatchers: true
          }
        }
      },
      {
        id: 'advanced-testing',
        title: 'Modèles de Tests Avancés',
        description: 'Apprenez des techniques de test avancées pour des scénarios complexes',
        type: 'advanced',
        duration: '25 min',
        content: {
          theory: `
Advanced testing patterns help you handle complex scenarios like async operations, error states, and performance testing.

**Testing Error Boundaries:**
\`\`\`javascript
const ThrowError = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

test('error boundary catches errors', () => {
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  
  render(
    <ErrorBoundary>
      <ThrowError shouldThrow={true} />
    </ErrorBoundary>
  );
  
  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  expect(screen.queryByText('No error')).not.toBeInTheDocument();
  
  consoleSpy.mockRestore();
});
\`\`\`

**Testing Async Components:**
\`\`\`javascript
test('shows loading state then data', async () => {
  const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => ({ users: [{ id: 1, name: 'John' }] })
  });
  
  render(<AsyncUserList />);
  
  // Check loading state
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
  // Wait for data to load
  await waitFor(() => {
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });
  
  expect(screen.getByText('John')).toBeInTheDocument();
  
  mockFetch.mockRestore();
});

test('handles API errors gracefully', async () => {
  const mockFetch = jest.spyOn(global, 'fetch').mockRejectedValue(
    new Error('API Error')
  );
  
  render(<AsyncUserList />);
  
  const errorMessage = await screen.findByText(/failed to load users/i);
  expect(errorMessage).toBeInTheDocument();
  
  mockFetch.mockRestore();
});
\`\`\`

**Testing React Router:**
\`\`\`javascript
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const renderWithRouter = (ui, { initialEntries = ['/'] } = {}) => {
  const history = createMemoryHistory({ initialEntries });
  
  return {
    ...render(
      <Router history={history}>
        {ui}
      </Router>
    ),
    history,
  };
};

test('navigates to user profile', async () => {
  const user = userEvent.setup();
  const { history } = renderWithRouter(<App />);
  
  const profileLink = screen.getByRole('link', { name: /profile/i });
  await user.click(profileLink);
  
  expect(history.location.pathname).toBe('/profile');
  expect(screen.getByText(/user profile/i)).toBeInTheDocument();
});
\`\`\`

**Performance Testing:**
\`\`\`javascript
import { Profiler } from 'react';

test('component renders efficiently', () => {
  const onRender = jest.fn();
  
  render(
    <Profiler id="ExpensiveComponent" onRender={onRender}>
      <ExpensiveComponent data={largeDataSet} />
    </Profiler>
  );
  
  expect(onRender).toHaveBeenCalledTimes(1);
  
  const [id, phase, actualDuration] = onRender.mock.calls[0];
  expect(actualDuration).toBeLessThan(100); // ms
});
\`\`\`

**Snapshot Testing:**
\`\`\`javascript
test('matches snapshot', () => {
  const { container } = render(<UserCard user={mockUser} />);
  expect(container.firstChild).toMatchSnapshot();
});

// For dynamic content, use property matchers
test('matches snapshot with dynamic content', () => {
  const component = render(<Article article={mockArticle} />);
  expect(component).toMatchSnapshot({
    createdAt: expect.any(String),
    id: expect.any(Number)
  });
});
\`\`\`

**Visual Regression Testing:**
\`\`\`javascript
// With @storybook/test-runner or similar tools
test('visual regression test', async () => {
  await page.goto('http://localhost:6006/iframe.html?id=button--primary');
  
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchImageSnapshot({
    threshold: 0.2,
    thresholdType: 'percent'
  });
});
\`\`\`

**Testing with React Query:**
\`\`\`javascript
import { QueryClient, QueryClientProvider } from 'react-query';

const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: { retry: false },
    mutations: { retry: false },
  },
});

const renderWithQueryClient = (ui) => {
  const testQueryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={testQueryClient}>
      {ui}
    </QueryClientProvider>
  );
};

test('fetches and displays data with React Query', async () => {
  const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => ({ data: 'test data' })
  });
  
  renderWithQueryClient(<DataComponent />);
  
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
  const data = await screen.findByText('test data');
  expect(data).toBeInTheDocument();
  
  mockFetch.mockRestore();
});
\`\`\`

**Accessibility Testing:**
\`\`\`javascript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('should not have accessibility violations', async () => {
  const { container } = render(<LoginForm />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
\`\`\`
          `,
          interactive: {
            type: 'advanced-testing-lab',
            scenarios: ['Error Boundaries', 'Async Components', 'Router Testing', 'Performance'],
            showMocking: true
          }
        }
      }
    ]
  },
  {
    id: 'mini-project',
    title: 'Mini Projet : Gestionnaire de Tâches',
    description: 'Construisez une application complète de gestion de tâches étape par étape',
    icon: '🚀',
    duration: '120 min',
    lessons: [
      {
        id: 'project-setup',
        title: 'Configuration du Projet',
        description: 'Initialisation et structure du projet',
        type: 'project',
        duration: '20 min',
        content: {
          theory: `
Nous allons construire un **Gestionnaire de Tâches** complet qui intègre tous les concepts appris dans ce cours.

**Fonctionnalités de l'Application :**
- ✅ Ajouter, modifier et supprimer des tâches
- 🏷️ Organiser par catégories et priorités
- 🔍 Recherche et filtrage avancés
- 📊 Statistiques et progression
- 🎨 Thème sombre/clair
- 💾 Persistance des données (localStorage)
- 📱 Design responsive

**Stack Technologique :**
- **Vite + React** - Base du projet
- **React Router** - Navigation entre les pages
- **Zustand** - Gestion d'état global
- **Framer Motion** - Animations
- **React Hook Form** - Gestion des formulaires
- **React Testing Library** - Tests

**Structure du Projet :**
\`\`\`
src/
├── components/
│   ├── TaskCard.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── CategoryFilter.jsx
│   ├── SearchBar.jsx
│   └── ThemeToggle.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── TaskDetails.jsx
│   └── Statistics.jsx
├── store/
│   └── taskStore.js
├── hooks/
│   ├── useLocalStorage.js
│   └── useDebounce.js
└── utils/
    ├── taskHelpers.js
    └── dateHelpers.js
\`\`\`
          `,
          steps: [
            {
              step: 1,
              title: "Créer la structure de base",
              code: `// src/components/TaskCard.jsx
import { Card, Button, Badge, Text } from '@shopify/polaris';
import { DeleteIcon, EditIcon } from '@shopify/polaris-icons';
import { motion } from 'framer-motion';

function TaskCard({ task, onEdit, onDelete, onToggle }) {
  const priorityColors = {
    low: 'success',
    medium: 'warning', 
    high: 'critical'
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card>
        <div style={{ padding: '1rem' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            marginBottom: '0.5rem'
          }}>
            <Text 
              variant="headingSm" 
              style={{ 
                textDecoration: task.completed ? 'line-through' : 'none',
                opacity: task.completed ? 0.6 : 1
              }}
            >
              {task.title}
            </Text>
            <Badge status={priorityColors[task.priority]}>
              {task.priority}
            </Badge>
          </div>
          
          <Text variant="bodySm" color="subdued">
            {task.description}
          </Text>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '1rem'
          }}>
            <Badge>{task.category}</Badge>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button 
                size="slim" 
                onClick={() => onToggle(task.id)}
              >
                {task.completed ? 'Annuler' : 'Terminer'}
              </Button>
              <Button 
                size="slim" 
                icon={EditIcon}
                onClick={() => onEdit(task)}
              />
              <Button 
                size="slim" 
                icon={DeleteIcon}
                destructive
                onClick={() => onDelete(task.id)}
              />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default TaskCard;`
            }
          ]
        }
      },
      {
        id: 'state-management',
        title: 'Gestion d\'État avec Zustand',
        description: 'Configuration du store global pour les tâches',
        type: 'project', 
        duration: '25 min',
        content: {
          theory: `
Nous allons utiliser **Zustand** pour gérer l'état global de notre application de manière simple et efficace.

**Fonctionnalités du Store :**
- 📝 CRUD complet des tâches
- 🔍 Filtrage et recherche
- 📊 Calculs statistiques
- 🎨 Gestion du thème
- 💾 Persistance automatique
          `,
          steps: [
            {
              step: 1,
              title: "Installation de Zustand",
              code: `npm install zustand`
            },
            {
              step: 2,
              title: "Création du store de tâches",
              code: `// src/store/taskStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTaskStore = create(
  persist(
    (set, get) => ({
      // État initial
      tasks: [],
      filter: 'all', // all, active, completed
      searchTerm: '',
      selectedCategory: 'all',
      theme: 'light',
      
      // Actions pour les tâches
      addTask: (task) => set((state) => ({
        tasks: [...state.tasks, {
          id: Date.now().toString(),
          ...task,
          completed: false,
          createdAt: new Date().toISOString()
        }]
      })),
      
      updateTask: (id, updates) => set((state) => ({
        tasks: state.tasks.map(task => 
          task.id === id ? { ...task, ...updates } : task
        )
      })),
      
      deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter(task => task.id !== id)
      })),
      
      toggleTask: (id) => set((state) => ({
        tasks: state.tasks.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      })),
      
      // Actions pour les filtres
      setFilter: (filter) => set({ filter }),
      setSearchTerm: (searchTerm) => set({ searchTerm }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      
      // Action pour le thème
      toggleTheme: () => set((state) => ({
        theme: state.theme === 'light' ? 'dark' : 'light'
      })),
      
      // Sélecteurs calculés
      getFilteredTasks: () => {
        const { tasks, filter, searchTerm, selectedCategory } = get();
        
        return tasks.filter(task => {
          // Filtre par statut
          const statusMatch = filter === 'all' || 
            (filter === 'active' && !task.completed) ||
            (filter === 'completed' && task.completed);
            
          // Filtre par recherche
          const searchMatch = searchTerm === '' ||
            task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.description.toLowerCase().includes(searchTerm.toLowerCase());
            
          // Filtre par catégorie
          const categoryMatch = selectedCategory === 'all' || 
            task.category === selectedCategory;
            
          return statusMatch && searchMatch && categoryMatch;
        });
      },
      
      getStatistics: () => {
        const { tasks } = get();
        const total = tasks.length;
        const completed = tasks.filter(task => task.completed).length;
        const active = total - completed;
        
        return {
          total,
          completed,
          active,
          completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
        };
      },
      
      getCategories: () => {
        const { tasks } = get();
        const categories = [...new Set(tasks.map(task => task.category))];
        return categories.filter(Boolean);
      }
    }),
    {
      name: 'task-manager-storage',
      version: 1
    }
  )
);

export default useTaskStore;`
            }
          ]
        }
      },
      {
        id: 'components-forms',
        title: 'Composants et Formulaires',
        description: 'Création des composants principaux et formulaires',
        type: 'project',
        duration: '30 min',
        content: {
          theory: `
Nous allons créer les composants essentiels de notre application :
- **TaskForm** - Formulaire d'ajout/modification de tâches
- **TaskList** - Liste des tâches avec animations
- **SearchBar** - Barre de recherche avec debounce
- **CategoryFilter** - Filtres par catégorie
          `,
          steps: [
            {
              step: 1,
              title: "Formulaire de tâche avec validation",
              code: `// src/components/TaskForm.jsx
import { useState } from 'react';
import { Card, FormLayout, TextField, Select, Button, ButtonGroup } from '@shopify/polaris';
import useTaskStore from '../store/taskStore';

function TaskForm({ task = null, onClose }) {
  const { addTask, updateTask } = useTaskStore();
  
  const [formData, setFormData] = useState({
    title: task?.title || '',
    description: task?.description || '',
    category: task?.category || '',
    priority: task?.priority || 'medium'
  });
  
  const [errors, setErrors] = useState({});
  
  const priorityOptions = [
    { label: 'Faible', value: 'low' },
    { label: 'Moyenne', value: 'medium' },
    { label: 'Élevée', value: 'high' }
  ];
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Le titre est obligatoire';
    }
    
    if (!formData.category.trim()) {
      newErrors.category = 'La catégorie est obligatoire';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    if (task) {
      updateTask(task.id, formData);
    } else {
      addTask(formData);
    }
    
    onClose();
  };
  
  const handleChange = (field) => (value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };
  
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div style={{ padding: '1.5rem' }}>
          <FormLayout>
            <TextField
              label="Titre de la tâche"
              value={formData.title}
              onChange={handleChange('title')}
              error={errors.title}
              autoComplete="off"
            />
            
            <TextField
              label="Description"
              value={formData.description}
              onChange={handleChange('description')}
              multiline={3}
              autoComplete="off"
            />
            
            <TextField
              label="Catégorie"
              value={formData.category}
              onChange={handleChange('category')}
              error={errors.category}
              placeholder="ex: Travail, Personnel, Études..."
              autoComplete="off"
            />
            
            <Select
              label="Priorité"
              options={priorityOptions}
              value={formData.priority}
              onChange={handleChange('priority')}
            />
            
            <ButtonGroup>
              <Button 
                variant="primary" 
                submit
              >
                {task ? 'Modifier' : 'Ajouter'}
              </Button>
              <Button onClick={onClose}>
                Annuler
              </Button>
            </ButtonGroup>
          </FormLayout>
        </div>
      </form>
    </Card>
  );
}

export default TaskForm;`
            },
            {
              step: 2,
              title: "Hook personnalisé pour debounce",
              code: `// src/hooks/useDebounce.js
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;`
            }
          ]
        }
      },
      {
        id: 'routing-navigation',
        title: 'Navigation avec React Router',
        description: 'Configuration du routage et des pages',
        type: 'project',
        duration: '25 min',
        content: {
          theory: `
Nous allons ajouter la navigation entre différentes vues :
- **Dashboard** - Vue principale avec toutes les tâches
- **Statistics** - Statistiques et graphiques
- **TaskDetails** - Détails d'une tâche spécifique

**Installation :**
\`\`\`bash
npm install react-router-dom
\`\`\`
          `,
          steps: [
            {
              step: 1,
              title: "Configuration du routeur principal",
              code: `// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from '@shopify/polaris';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import TaskDetails from './pages/TaskDetails';
import Layout from './components/Layout';
import useTaskStore from './store/taskStore';

function App() {
  const { theme } = useTaskStore();
  
  return (
    <AppProvider 
      theme={theme === 'dark' ? 'dark' : undefined}
      features={{ newDesignLanguage: true }}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/task/:id" element={<TaskDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;`
            },
            {
              step: 2,
              title: "Composant Layout avec navigation",
              code: `// src/components/Layout.jsx
import { Frame, Navigation, TopBar } from '@shopify/polaris';
import { HomeIcon, AnalyticsIcon, SettingsIcon } from '@shopify/polaris-icons';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useTaskStore from '../store/taskStore';
import ThemeToggle from './ThemeToggle';

function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { getStatistics } = useTaskStore();
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  
  const stats = getStatistics();
  
  const navigationMarkup = (
    <Navigation location={location.pathname}>
      <Navigation.Section
        items={[
          {
            label: 'Tableau de bord',
            icon: HomeIcon,
            url: '/dashboard',
            selected: location.pathname === '/dashboard',
            onClick: () => navigate('/dashboard')
          },
          {
            label: 'Statistiques',
            icon: AnalyticsIcon,
            url: '/statistics',
            selected: location.pathname === '/statistics',
            onClick: () => navigate('/statistics'),
            badge: stats.total > 0 ? stats.total.toString() : undefined
          }
        ]}
      />
    </Navigation>
  );
  
  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      onNavigationToggle={() => setMobileNavigationActive(!mobileNavigationActive)}
      secondaryMenu={<ThemeToggle />}
    />
  );
  
  return (
    <Frame
      topBar={topBarMarkup}
      navigation={navigationMarkup}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={() => setMobileNavigationActive(false)}
    >
      {children}
    </Frame>
  );
}

export default Layout;`
            }
          ]
        }
      },
      {
        id: 'dashboard-page',
        title: 'Page Dashboard Complète',
        description: 'Assemblage de tous les composants sur la page principale',
        type: 'project',
        duration: '20 min',
        content: {
          theory: `
La page Dashboard sera le cœur de notre application. Elle intégrera :
- **Filtres et recherche** en temps réel
- **Liste de tâches** avec animations
- **Formulaire modal** pour ajouter/modifier
- **Statistiques rapides** en en-tête
          `,
          steps: [
            {
              step: 1,
              title: "Page Dashboard complète",
              code: `// src/pages/Dashboard.jsx
import { useState } from 'react';
import { Page, Layout, Card, Button, Modal, EmptyState, Text, Badge, ButtonGroup } from '@shopify/polaris';
import { PlusIcon, SearchIcon } from '@shopify/polaris-icons';
import { AnimatePresence, motion } from 'framer-motion';
import useTaskStore from '../store/taskStore';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

function Dashboard() {
  const {
    getFilteredTasks,
    deleteTask,
    toggleTask,
    filter,
    setFilter,
    getStatistics,
    getCategories
  } = useTaskStore();
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  
  const tasks = getFilteredTasks();
  const stats = getStatistics();
  const categories = getCategories();
  
  const filterOptions = [
    { label: 'Toutes', value: 'all' },
    { label: 'Actives', value: 'active' },
    { label: 'Terminées', value: 'completed' }
  ];
  
  const handleEdit = (task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };
  
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingTask(null);
  };
  
  const primaryAction = {
    content: 'Nouvelle tâche',
    icon: PlusIcon,
    onAction: () => setIsFormOpen(true)
  };
  
  return (
    <Page
      title="Gestionnaire de Tâches"
      subtitle={\`\${stats.total} tâches au total • \${stats.completed} terminées • \${stats.active} actives\`}
      primaryAction={primaryAction}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <div style={{ padding: '1rem' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <Text variant="headingLg">{stats.total}</Text>
                  <Text variant="bodySm" color="subdued">Total</Text>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Text variant="headingLg" style={{ color: '#00a96e' }}>{stats.completed}</Text>
                  <Text variant="bodySm" color="subdued">Terminées</Text>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Text variant="headingLg" style={{ color: '#2c5aa0' }}>{stats.active}</Text>
                  <Text variant="bodySm" color="subdued">Actives</Text>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Text variant="headingLg">{stats.completionRate}%</Text>
                  <Text variant="bodySm" color="subdued">Progression</Text>
                </div>
              </div>
            </div>
          </Card>
        </Layout.Section>
        
        <Layout.Section>
          <Card>
            <div style={{ padding: '1rem' }}>
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1rem',
                flexWrap: 'wrap'
              }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <SearchBar />
                </div>
                <CategoryFilter categories={categories} />
              </div>
              
              <ButtonGroup segmented>
                {filterOptions.map(option => (
                  <Button
                    key={option.value}
                    pressed={filter === option.value}
                    onClick={() => setFilter(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </ButtonGroup>
            </div>
          </Card>
        </Layout.Section>
        
        <Layout.Section>
          {tasks.length === 0 ? (
            <Card>
              <EmptyState
                heading="Aucune tâche trouvée"
                image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                action={{
                  content: 'Créer une tâche',
                  onAction: () => setIsFormOpen(true)
                }}
              >
                <p>Commencez par créer votre première tâche pour organiser votre travail.</p>
              </EmptyState>
            </Card>
          ) : (
            <div style={{
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))'
            }}>
              <AnimatePresence>
                {tasks.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={handleEdit}
                    onDelete={deleteTask}
                    onToggle={toggleTask}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </Layout.Section>
      </Layout>
      
      <Modal
        open={isFormOpen}
        onClose={handleCloseForm}
        title={editingTask ? 'Modifier la tâche' : 'Nouvelle tâche'}
        large
      >
        <Modal.Section>
          <TaskForm
            task={editingTask}
            onClose={handleCloseForm}
          />
        </Modal.Section>
      </Modal>
    </Page>
  );
}

export default Dashboard;`
            }
          ]
        }
      },
      {
        id: 'testing-deployment',
        title: 'Tests et Déploiement',
        description: 'Tests unitaires et préparation pour la production',
        type: 'project',
        duration: '20 min',
        content: {
          theory: `
Pour finaliser notre projet, nous ajouterons :
- **Tests unitaires** pour les composants principaux
- **Tests d'intégration** pour le store
- **Optimisations** pour la production
- **Scripts de déploiement**
          `,
          steps: [
            {
              step: 1,
              title: "Tests du store Zustand",
              code: `// src/store/__tests__/taskStore.test.js
import { describe, it, expect, beforeEach } from 'vitest';
import { act } from '@testing-library/react';
import useTaskStore from '../taskStore';

describe('Task Store', () => {
  beforeEach(() => {
    useTaskStore.setState({
      tasks: [],
      filter: 'all',
      searchTerm: '',
      selectedCategory: 'all'
    });
  });

  it('should add a new task', () => {
    const { addTask, tasks } = useTaskStore.getState();
    
    act(() => {
      addTask({
        title: 'Test Task',
        description: 'Test Description',
        category: 'Test',
        priority: 'medium'
      });
    });

    const updatedTasks = useTaskStore.getState().tasks;
    expect(updatedTasks).toHaveLength(1);
    expect(updatedTasks[0].title).toBe('Test Task');
    expect(updatedTasks[0].completed).toBe(false);
  });

  it('should toggle task completion', () => {
    const { addTask, toggleTask } = useTaskStore.getState();
    
    act(() => {
      addTask({
        title: 'Test Task',
        description: 'Test Description',
        category: 'Test',
        priority: 'medium'
      });
    });

    const taskId = useTaskStore.getState().tasks[0].id;
    
    act(() => {
      toggleTask(taskId);
    });

    const updatedTask = useTaskStore.getState().tasks[0];
    expect(updatedTask.completed).toBe(true);
  });

  it('should calculate statistics correctly', () => {
    const { addTask, toggleTask, getStatistics } = useTaskStore.getState();
    
    act(() => {
      addTask({ title: 'Task 1', description: '', category: 'Work', priority: 'high' });
      addTask({ title: 'Task 2', description: '', category: 'Personal', priority: 'low' });
    });

    const taskId = useTaskStore.getState().tasks[0].id;
    
    act(() => {
      toggleTask(taskId);
    });

    const stats = getStatistics();
    expect(stats.total).toBe(2);
    expect(stats.completed).toBe(1);
    expect(stats.active).toBe(1);
    expect(stats.completionRate).toBe(50);
  });
});`
            },
            {
              step: 2,
              title: "Test du composant TaskCard",
              code: `// src/components/__tests__/TaskCard.test.jsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AppProvider } from '@shopify/polaris';
import TaskCard from '../TaskCard';

const mockTask = {
  id: '1',
  title: 'Test Task',
  description: 'Test Description',
  category: 'Work',
  priority: 'high',
  completed: false
};

const renderWithProviders = (component) => {
  return render(
    <AppProvider>
      {component}
    </AppProvider>
  );
};

describe('TaskCard', () => {
  const mockProps = {
    task: mockTask,
    onEdit: vi.fn(),
    onDelete: vi.fn(),
    onToggle: vi.fn()
  };

  it('renders task information correctly', () => {
    renderWithProviders(<TaskCard {...mockProps} />);
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('high')).toBeInTheDocument();
  });

  it('calls onToggle when toggle button is clicked', () => {
    renderWithProviders(<TaskCard {...mockProps} />);
    
    const toggleButton = screen.getByText('Terminer');
    fireEvent.click(toggleButton);
    
    expect(mockProps.onToggle).toHaveBeenCalledWith('1');
  });

  it('calls onDelete when delete button is clicked', () => {
    renderWithProviders(<TaskCard {...mockProps} />);
    
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    
    expect(mockProps.onDelete).toHaveBeenCalledWith('1');
  });

  it('shows different text for completed tasks', () => {
    const completedTask = { ...mockTask, completed: true };
    
    renderWithProviders(
      <TaskCard {...mockProps} task={completedTask} />
    );
    
    expect(screen.getByText('Annuler')).toBeInTheDocument();
  });
});`
            },
            {
              step: 3,
              title: "Configuration Vite pour la production",
              code: `// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@shopify/polaris'],
          router: ['react-router-dom'],
          animation: ['framer-motion'],
          store: ['zustand']
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js']
  }
});

// package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "lint": "eslint src",
    "deploy": "npm run build && npm run preview"
  }
}`
            }
          ]
        }
      }
    ]
  }
];

export const courseStats = {
  totalModules: courseModules.length,
  totalLessons: courseModules.reduce((total, module) => total + module.lessons.length, 0),
  estimatedDuration: courseModules.reduce((total, module) => {
    const moduleDuration = parseInt(module.duration.replace(' min', ''));
    return total + moduleDuration;
  }, 0)
};