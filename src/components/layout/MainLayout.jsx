import { Frame, TopBar, Navigation as PolarisNavigation, Toast } from '@shopify/polaris'
import { HomeIcon, BookOpenIcon, SettingsIcon } from '@shopify/polaris-icons'
import { useState } from 'react'
import { useCourse } from '../../hooks/course/useCourseHook'
import Logo from './Logo'

function MainLayout({ children, currentPage, onNavigate, showNavigation = true }) {
  const { getProgressPercentage, courseModules, currentModuleIndex } = useCourse()
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false)
  const [toastActive, setToastActive] = useState(false)
  const [toastMessage, _setToastMessage] = useState('')


  // Navigation items dynamiques
  const navigationItems = [
    {
      label: 'Accueil',
      icon: HomeIcon,
      onClick: () => {
        onNavigate('home')
        setMobileNavigationActive(false)
      },
      selected: currentPage === 'home'
    },
    {
      label: 'Cours',
      icon: BookOpenIcon,
      onClick: () => {
        onNavigate('course')
        setMobileNavigationActive(false)
      },
      selected: currentPage === 'course',
      badge: getProgressPercentage() > 0 ? `${Math.round(getProgressPercentage())}%` : undefined
    }
  ]

  // Top bar avec logo et actions
  const topBarMarkup = (
    <div className="slide-in-top" style={{ animationDelay: '0.1s' }}>
      <TopBar
        showNavigationToggle={showNavigation}
        onNavigationToggle={() => setMobileNavigationActive(!mobileNavigationActive)}
        logo={{
          topBarSource: <Logo />,
          contextualSaveBarSource: <Logo />,
          url: '#',
          accessibilityLabel: 'Vite + React Course',
          onClick: () => onNavigate('home')
        }}
      />
    </div>
  )

  // Navigation sidebar avec animations
  const navigationMarkup = showNavigation ? (
    <div className="slide-in-left" style={{ animationDelay: '0.2s' }}>
      <PolarisNavigation location={currentPage}>
        <PolarisNavigation.Section
          items={navigationItems}
          fill
        />
        
        {/* Section progression */}
        {getProgressPercentage() > 0 && (
          <PolarisNavigation.Section
            title="Progression"
            items={[
              {
                label: `${Math.round(getProgressPercentage())}% complété`,
                icon: () => (
                  <div style={{ 
                    width: '20px', 
                    height: '20px', 
                    borderRadius: '50%',
                    background: `conic-gradient(#00a96e 0deg ${getProgressPercentage() * 3.6}deg, #e1e5e9 ${getProgressPercentage() * 3.6}deg 360deg)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ 
                      width: '12px', 
                      height: '12px', 
                      backgroundColor: 'white',
                      borderRadius: '50%'
                    }} />
                  </div>
                ),
                disabled: true
              }
            ]}
          />
        )}
        
        {/* Section modules si on est dans le cours */}
        {currentPage === 'course' && courseModules.length > 0 && (
          <PolarisNavigation.Section
            title="Modules"
            items={courseModules.slice(0, 3).map((module, index) => ({
              label: module.title,
              icon: () => module.icon,
              selected: currentModuleIndex === index,
              disabled: true
            }))}
          />
        )}
      </PolarisNavigation>
    </div>
  ) : null

  // Toast notifications
  const toastMarkup = toastActive && (
    <Toast
      content={toastMessage}
      onDismiss={() => setToastActive(false)}
    />
  )

  return (
    <div className="main-layout">
      <Frame
        topBar={topBarMarkup}
        navigation={navigationMarkup}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={() => setMobileNavigationActive(false)}
      >
        <div
          className="scrollable fade-in"
          style={{ 
            minHeight: 'calc(100vh - 56px)',
            width: '100%',
            padding: '0'
          }}
        >
          <div
            key={currentPage}
            className="content-enter"
            style={{ minHeight: '100%' }}
          >
            {children}
          </div>
        </div>
        
        {toastMarkup}
      </Frame>
    </div>
  )
}

export default MainLayout