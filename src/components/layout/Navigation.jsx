import { Frame, TopBar, Navigation as PolarisNavigation } from '@shopify/polaris'
import { HomeFilledIcon } from '@shopify/polaris-icons'
import { useCourse } from '../../hooks/course/useCourseHook'

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
    <div className="topbar-enter">
      <TopBar 
        showNavigationToggle={false}
      />
    </div>
  )

  const navigationMarkup = (
    <div className="navigation-enter">
      <PolarisNavigation location="/">
        <PolarisNavigation.Section
          items={navigationItems}
          fill
        />
      </PolarisNavigation>
    </div>
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