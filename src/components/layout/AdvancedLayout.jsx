import { useState } from 'react'
import { Frame, Loading, Toast, Modal } from '@shopify/polaris'
import { useResponsive } from '../../hooks/layout/useResponsive'
import Header from './Header'
import MainLayout from './MainLayout'
import CourseLayout from './CourseLayout'

/**
 * Layout avancé avec gestion automatique du type selon le contexte
 * @param {Object} props - Props du composant
 * @param {React.ReactNode} props.children - Contenu à afficher
 * @param {'auto'|'main'|'course'} props.type - Type de layout
 * @param {string} props.currentPage - Page actuelle
 * @param {Function} props.onNavigate - Fonction de navigation
 * @param {boolean} props.loading - Affichage du loader
 * @param {Object} props.toast - Configuration du toast
 * @param {Object} props.modal - Configuration du modal
 */
function AdvancedLayout({
  children,
  type = 'auto',
  currentPage = 'home',
  onNavigate,
  loading = false,
  toast = null,
  modal = null,
  ...layoutProps
}) {
  useResponsive()
  const [isLoading, _setIsLoading] = useState(loading)

  // Détection automatique du type de layout
  const getLayoutType = () => {
    if (type !== 'auto') return type
    
    // Auto-détection basée sur la page actuelle
    if (currentPage === 'course') return 'course'
    return 'main'
  }

  const layoutType = getLayoutType()

  // Gestion du loading global
  const loadingMarkup = isLoading && (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000
    }}>
      <Loading />
    </div>
  )

  // Gestion du toast
  const toastMarkup = toast && (
    <Toast
      content={toast.content}
      error={toast.error}
      onDismiss={toast.onDismiss}
      duration={toast.duration}
    />
  )

  // Gestion du modal
  const modalMarkup = modal && (
    <Modal
      open={modal.open}
      onClose={modal.onClose}
      title={modal.title}
      primaryAction={modal.primaryAction}
      secondaryActions={modal.secondaryActions}
      large={modal.large}
      small={modal.small}
      instant={modal.instant}
    >
      {modal.children && (
        <Modal.Section>
          {modal.children}
        </Modal.Section>
      )}
    </Modal>
  )

  // Animation du contenu principal
  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.98,
      transition: { 
        duration: 0.3, 
        ease: "easeIn" 
      }
    }
  }

  // Sélection du composant de layout
  const LayoutComponent = layoutType === 'course' ? CourseLayout : MainLayout

  return (
    <>
      <LayoutComponent
        currentPage={currentPage}
        onNavigate={onNavigate}
        {...layoutProps}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </LayoutComponent>

      {/* Overlays */}
      <AnimatePresence>
        {loadingMarkup}
      </AnimatePresence>
      
      {toastMarkup}
      {modalMarkup}
    </>
  )
}


export default AdvancedLayout