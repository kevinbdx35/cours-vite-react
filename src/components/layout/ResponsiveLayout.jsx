import { useResponsive } from '../../hooks/layout/useResponsive'

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
    <div
      className={`fade-in ${className}`}
      style={{
        ...containerStyles[screenSize],
        transition: 'all 0.3s ease'
      }}
    >
      {typeof children === 'function' 
        ? children({ screenSize, isMobile, isTablet, isDesktop, gridStyles: gridStyles[screenSize] })
        : children
      }
    </div>
  )
}

export default ResponsiveLayout