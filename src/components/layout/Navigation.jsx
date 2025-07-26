import { Frame, TopBar, Navigation as PolarisNavigation } from '@shopify/polaris'
import { HomeFilledIcon } from '@shopify/polaris-icons'
import { motion } from 'framer-motion'
import { useCourse } from '../../hooks/course/useCourse'

function Navigation({ currentPage, onNavigate }) {
  const { getProgressPercentage } = useCourse()
  
  const navigationItems = [
    {
      label: 'Home',
      icon: HomeFilledIcon,
      onClick: () => onNavigate('home'),
      selected: currentPage === 'home'
    },
    {
      label: 'Course',
      icon: () => '📚',
      onClick: () => onNavigate('course'),
      selected: currentPage === 'course',
      badge: `${Math.round(getProgressPercentage())}%`
    }
  ]

  const topBarMarkup = (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <TopBar 
        showNavigationToggle={false}
      />
    </motion.div>
  )

  const navigationMarkup = (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <PolarisNavigation location="/">
        <PolarisNavigation.Section
          items={navigationItems}
          fill
        />
      </PolarisNavigation>
    </motion.div>
  )

  return (
    <Frame
      topBar={topBarMarkup}
      navigation={navigationMarkup}
      showMobileNavigation={false}
    >
      <div />
    </Frame>
  )
}

export default Navigation