import { useState, useEffect } from 'react'

// Hook personnalisé pour détecter la taille d'écran
export function useResponsive() {
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