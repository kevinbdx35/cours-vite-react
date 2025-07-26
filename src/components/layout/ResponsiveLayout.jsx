import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Hook personnalisé pour détecter la taille d'écran
function useResponsive() {
  const [screenSize, setScreenSize] = useState('desktop')
  
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      if (width < 480) {
        setScreenSize('mobile')
      } else if (width < 768) {
        setScreenSize('tablet')
      } else if (width < 1024) {
        setScreenSize('desktop')
      } else {
        setScreenSize('large')
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return {
    screenSize,
    isMobile: screenSize === 'mobile',
    isTablet: screenSize === 'tablet',
    isDesktop: screenSize === 'desktop' || screenSize === 'large',
    isLarge: screenSize === 'large'
  }
}

function ResponsiveLayout({ children, className = '' }) {
  const { screenSize, isMobile, isTablet, isDesktop } = useResponsive()

  // Styles responsifs
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

  // Grid responsif
  const gridStyles = {
    mobile: {
      gridTemplateColumns: '1fr',
      gap: '0.5rem'
    },
    tablet: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1rem'
    },
    desktop: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '1.5rem'
    },
    large: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem'
    }
  }

  return (
    <motion.div
      className={className}
      style={{
        ...containerStyles[screenSize],
        transition: 'all 0.3s ease'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {typeof children === 'function' 
        ? children({ screenSize, isMobile, isTablet, isDesktop, gridStyles: gridStyles[screenSize] })
        : children
      }
    </motion.div>
  )
}

// Composant Grid responsif
function ResponsiveGrid({ children, className = '' }) {
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
      style={{
        ...gridStyles[screenSize],
        transition: 'all 0.3s ease'
      }}
    >
      {children}
    </div>
  )
}

// Composant pour masquer/afficher selon la taille d'écran
function ResponsiveShow({ on = [], children }) {
  const { screenSize } = useResponsive()
  
  if (!on.includes(screenSize)) {
    return null
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

// Composant pour masquer selon la taille d'écran
function ResponsiveHide({ on = [], children }) {
  const { screenSize } = useResponsive()
  
  if (on.includes(screenSize)) {
    return null
  }
  
  return children
}

// Composant conteneur avec breakpoints
function Container({ 
  children, 
  size = 'desktop', 
  padding = true,
  className = ''
}) {
  const { isMobile, isTablet } = useResponsive()
  
  const maxWidths = {
    mobile: '100%',
    tablet: '768px',
    desktop: '1024px',
    large: '1200px',
    full: '100%'
  }
  
  const paddings = {
    mobile: padding ? '0.5rem' : '0',
    tablet: padding ? '1rem' : '0',
    desktop: padding ? '1.5rem' : '0'
  }
  
  const currentPadding = isMobile ? paddings.mobile : 
                        isTablet ? paddings.tablet : 
                        paddings.desktop
  
  return (
    <div
      className={className}
      style={{
        maxWidth: maxWidths[size],
        margin: '0 auto',
        padding: currentPadding,
        width: '100%',
        transition: 'all 0.3s ease'
      }}
    >
      {children}
    </div>
  )
}

export default ResponsiveLayout
export { 
  useResponsive, 
  ResponsiveGrid, 
  ResponsiveShow, 
  ResponsiveHide, 
  Container 
}