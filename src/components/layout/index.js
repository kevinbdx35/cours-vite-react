// Exports des composants de layout
export { default as MainLayout } from './MainLayout'
export { default as CourseLayout } from './CourseLayout'
export { default as AdvancedLayout } from './AdvancedLayout'
export { default as Header } from './Header'
export { default as Logo } from './Logo'
export { default as Navigation } from './Navigation'

// Exports des composants responsive
export { default as ResponsiveLayout } from './ResponsiveLayout'
export { 
  ResponsiveGrid,
  ResponsiveShow,
  ResponsiveHide,
  Container
} from './ResponsiveUtils'

// Exports des hooks
export { useResponsive } from '../../hooks/layout/useResponsive'
export { useLayout } from '../../hooks/layout/useLayout'