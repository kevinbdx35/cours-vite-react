import { useResponsive } from '../../hooks/layout/useResponsive'

// Composant Grid responsif
export function ResponsiveGrid({ children, className = '' }) {
  const { screenSize } = useResponsive()
  
  const gridStyles = {
    mobile: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '0.5rem'
    },
    tablet: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1rem'
    },
    desktop: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '1.5rem'
    },
    large: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
      gap: '2rem'
    }
  }

  return (
    <div 
      className={className}
      style={gridStyles[screenSize]}
    >
      {children}
    </div>
  )
}

// Composant pour afficher sur certaines tailles d'écran
export function ResponsiveShow({ on = [], children }) {
  const { screenSize } = useResponsive()
  
  if (!on.includes(screenSize)) {
    return null
  }
  
  return children
}

// Composant pour masquer sur certaines tailles d'écran  
export function ResponsiveHide({ on = [], children }) {
  const { screenSize } = useResponsive()
  
  if (on.includes(screenSize)) {
    return null
  }
  
  return children
}

// Container responsive simple
export function Container({ children, className = '' }) {
  const { screenSize } = useResponsive()
  
  const containerStyles = {
    mobile: {
      padding: '0.5rem',
      maxWidth: '100%',
      margin: '0'
    },
    tablet: {
      padding: '1rem',
      maxWidth: '768px',
      margin: '0 auto'
    },
    desktop: {
      padding: '1.5rem',
      maxWidth: '1024px',
      margin: '0 auto'
    },
    large: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }

  return (
    <div 
      className={className}
      style={containerStyles[screenSize]}
    >
      {children}
    </div>
  )
}