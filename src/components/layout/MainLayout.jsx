import { Frame, TopBar, Navigation as PolarisNavigation, Toast } from '@shopify/polaris'
import { HomeIcon, BookOpenIcon, SettingsIcon } from '@shopify/polaris-icons'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useCourse } from '../../hooks/course/useCourse'
import Logo from './Logo'

function MainLayout({ children, currentPage, onNavigate, showNavigation = true }) {
  const { getProgressPercentage, courseModules, currentModuleIndex } = useCourse()
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false)
  const [toastActive, setToastActive] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  // Animation variants pour le contenu principal
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  }

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
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
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
        secondaryMenu={
          currentPage === 'course' && courseModules[currentModuleIndex] && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div style={{ 
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                backgroundColor: '#f6f6f7',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                  Module: {courseModules[currentModuleIndex].title}
                </span>
              </div>
            </motion.div>
          )
        }
      />
    </motion.div>
  )

  // Navigation sidebar avec animations
  const navigationMarkup = showNavigation ? (
    <motion.div
      initial={{ x: -280, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
    >
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
    </motion.div>
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
        <motion.div
          className="scrollable"
          style={{ 
            minHeight: 'calc(100vh - 56px)',
            width: '100%',
            padding: '0'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ minHeight: '100%' }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {toastMarkup}
      </Frame>
    </div>
  )
}

export default MainLayout