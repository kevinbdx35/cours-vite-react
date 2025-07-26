import { useState } from 'react'
import { TopBar, TextField, Button, Popover, ActionList, Badge } from '@shopify/polaris'
import { SearchIcon, BellIcon, QuestionCircleIcon, SettingsIcon } from '@shopify/polaris-icons'
import { useCourse } from '../../hooks/course/useCourseHook'
import { useResponsive } from '../../hooks/layout/useResponsive'
import Logo from './Logo'

function Header({ 
  onNavigate, 
  showSearch = true, 
  showNotifications = true,
  onToggleMobileNav 
}) {
  const { 
    courseModules, 
    getProgressPercentage,
    completedLessons 
  } = useCourse()
  
  const { isMobile, isTablet } = useResponsive()
  
  // États pour les popovers
  const [searchPopoverActive, setSearchPopoverActive] = useState(false)
  const [notificationPopoverActive, setNotificationPopoverActive] = useState(false)
  const [userMenuActive, setUserMenuActive] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  
  // Notifications factices
  const [notifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Leçon terminée !',
      message: 'Vous avez terminé "Introduction à React"',
      time: '2 min',
      read: false
    },
    {
      id: 2,
      type: 'info',
      title: 'Nouveau module disponible',
      message: 'Le module "React Router" est maintenant accessible',
      time: '1h',
      read: false
    },
    {
      id: 3,
      type: 'tip',
      title: 'Conseil du jour',
      message: 'Pratiquez régulièrement pour mémoriser les concepts',
      time: '1j',
      read: true
    }
  ])
  
  const unreadCount = notifications.filter(n => !n.read).length

  // Recherche dans les modules/leçons
  const filteredResults = searchValue.length > 0 
    ? courseModules.flatMap((module, moduleIndex) => 
        module.lessons
          .filter(lesson => 
            lesson.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            lesson.description.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map(lesson => ({
            ...lesson,
            moduleIndex,
            moduleTitle: module.title,
            moduleIcon: module.icon
          }))
      ).slice(0, 5)
    : []

  // Menu utilisateur
  const userMenuMarkup = (
    <Popover
      active={userMenuActive}
      activator={
        <Button
          onClick={() => setUserMenuActive(!userMenuActive)}
          disclosure
          plain
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            padding: '0.25rem'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00a96e, #00b894)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.875rem'
            }}>
              É
            </div>
            {!isMobile && (
              <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                Étudiant
              </span>
            )}
          </div>
        </Button>
      }
      onClose={() => setUserMenuActive(false)}
    >
      <ActionList
        items={[
          {
            content: 'Mon profil',
            icon: SettingsIcon,
            onAction: () => {
              setUserMenuActive(false)
              // Action profil
            }
          },
          {
            content: 'Aide et support',
            icon: QuestionCircleIcon,
            onAction: () => {
              setUserMenuActive(false)
              // Action aide
            }
          },
          {
            content: `Progression: ${Math.round(getProgressPercentage())}%`,
            disabled: true,
            suffix: (
              <Badge status="info">
                {completedLessons.size} leçons
              </Badge>
            )
          }
        ]}
      />
    </Popover>
  )

  // Recherche
  const searchMarkup = showSearch && !isMobile && (
    <Popover
      active={searchPopoverActive}
      activator={
        <div style={{ width: '300px' }}>
          <TextField
            value={searchValue}
            onChange={setSearchValue}
            onFocus={() => setSearchPopoverActive(true)}
            placeholder="Rechercher dans le cours..."
            prefix={<SearchIcon />}
            clearButton
            onClearButtonClick={() => {
              setSearchValue('')
              setSearchPopoverActive(false)
            }}
          />
        </div>
      }
      onClose={() => setSearchPopoverActive(false)}
      sectioned
    >
      {filteredResults.length > 0 ? (
        <ActionList
          items={filteredResults.map(result => ({
            content: result.title,
            helpText: `${result.moduleIcon} ${result.moduleTitle}`,
            onAction: () => {
              // Navigation vers la leçon
              setSearchPopoverActive(false)
              setSearchValue('')
              onNavigate('course')
            }
          }))}
        />
      ) : searchValue.length > 0 ? (
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          Aucun résultat trouvé pour "{searchValue}"
        </div>
      ) : (
        <div style={{ padding: '1rem', textAlign: 'center', color: '#6d7175' }}>
          Tapez pour rechercher dans le cours...
        </div>
      )}
    </Popover>
  )

  // Notifications
  const notificationMarkup = showNotifications && (
    <Popover
      active={notificationPopoverActive}
      activator={
        <Button
          onClick={() => setNotificationPopoverActive(!notificationPopoverActive)}
          plain
        >
          <div style={{ position: 'relative' }}>
            <BellIcon />
            {unreadCount > 0 && (
              <div
                className="notification-badge"
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: '#dc2626',
                  color: 'white',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}
              >
                {unreadCount}
              </div>
            )}
          </div>
        </Button>
      }
      onClose={() => setNotificationPopoverActive(false)}
      sectioned
    >
      <div style={{ width: '320px' }}>
        <div style={{ 
          padding: '1rem', 
          borderBottom: '1px solid #e1e5e9',
          fontWeight: '600'
        }}>
          Notifications {unreadCount > 0 && `(${unreadCount})`}
        </div>
        
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {notifications.map(notification => (
            <div
              key={notification.id}
              className="notification-item"
              style={{
                padding: '1rem',
                borderBottom: '1px solid #f6f6f7',
                backgroundColor: notification.read ? 'transparent' : '#f8fffe',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ 
                  fontWeight: '500', 
                  fontSize: '0.875rem',
                  opacity: notification.read ? 0.7 : 1
                }}>
                  {notification.title}
                </span>
                <span style={{ 
                  fontSize: '0.75rem', 
                  color: '#8c9196' 
                }}>
                  {notification.time}
                </span>
              </div>
              <p style={{ 
                margin: 0, 
                fontSize: '0.8rem', 
                color: '#6d7175',
                opacity: notification.read ? 0.7 : 1
              }}>
                {notification.message}
              </p>
              {!notification.read && (
                <div style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#00a96e',
                  borderRadius: '50%',
                  marginTop: '0.5rem'
                }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </Popover>
  )

  return (
    <TopBar
      showNavigationToggle={isMobile || isTablet}
      onNavigationToggle={onToggleMobileNav}
      logo={{
        topBarSource: <Logo size={isMobile ? 'small' : 'medium'} />,
        contextualSaveBarSource: <Logo size="small" />,
        url: '#',
        accessibilityLabel: 'Vite + React Course',
        onClick: () => onNavigate('home')
      }}
      searchField={searchMarkup}
      secondaryMenu={
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Recherche mobile */}
          {showSearch && isMobile && (
            <Button
              onClick={() => setSearchPopoverActive(true)}
              plain
            >
              <SearchIcon />
            </Button>
          )}
          
          {/* Notifications */}
          {notificationMarkup}
          
          {/* Menu utilisateur */}
          {userMenuMarkup}
        </div>
      }
    />
  )
}

export default Header