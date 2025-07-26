import { Layout, Card, Text, Badge, ProgressBar, Divider } from '@shopify/polaris'
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, HomeIcon } from '@shopify/polaris-icons'
import { useCourse } from '../../hooks/course/useCourse'
import MainLayout from './MainLayout'

function CourseLayout({ children, currentPage, onNavigate }) {
  const { 
    currentModule, 
    currentLesson, 
    currentModuleIndex,
    currentLessonIndex,
    courseModules,
    goToNextLesson,
    goToPreviousLesson,
    completeLesson,
    getProgressPercentage,
    isLessonCompleted 
  } = useCourse()

  const hasNextLesson = currentLessonIndex < currentModule?.lessons.length - 1 || 
                       currentModuleIndex < courseModules.length - 1
  const hasPreviousLesson = currentLessonIndex > 0 || currentModuleIndex > 0
  const isCurrentLessonCompleted = isLessonCompleted(currentModuleIndex, currentLessonIndex)


  // Header de progression du cours
  const courseHeaderMarkup = currentModule && currentLesson && (
    <div className="slide-in-top">
      <Card>
        <div style={{ padding: '1.5rem' }}>
          {/* Breadcrumb et titre */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            marginBottom: '1rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}>
                <span
                  className="hover-scale"
                  style={{ 
                    fontSize: '1.5rem',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                  }}
                >
                  {currentModule.icon}
                </span>
                <Text variant="headingLg">{currentModule.title}</Text>
              </div>
              
              <Text variant="headingMd" color="subdued">
                {currentLesson.title}
              </Text>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginTop: '0.5rem',
                flexWrap: 'wrap'
              }}>
                <Badge status="info">
                  Leçon {currentLessonIndex + 1}/{currentModule.lessons.length}
                </Badge>
                <Badge>
                  {currentLesson.duration}
                </Badge>
                <Badge status={currentLesson.type === 'theory' ? 'neutral' : 
                               currentLesson.type === 'practical' ? 'warning' : 'attention'}>
                  {currentLesson.type === 'theory' ? 'Théorie' :
                   currentLesson.type === 'practical' ? 'Pratique' :
                   currentLesson.type === 'advanced' ? 'Avancé' : 'Projet'}
                </Badge>
                {isCurrentLessonCompleted && (
                  <div className="scale-in">
                    <Badge status="success">
                      <CheckIcon /> Terminé
                    </Badge>
                  </div>
                )}
              </div>
            </div>
            
            {/* Bouton retour à l'accueil */}
            <div
              onClick={() => onNavigate('home')}
              className="hover-scale clickable"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                backgroundColor: '#f6f6f7',
                cursor: 'pointer',
                border: '1px solid #e1e5e9',
                transition: 'all 0.2s ease'
              }}
            >
              <HomeIcon />
              <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                Accueil
              </span>
            </div>
          </div>
          
          {/* Barre de progression globale */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '0.5rem'
            }}>
              <Text variant="bodySm" fontWeight="semibold">
                Progression du cours
              </Text>
              <Text variant="bodySm" color="subdued">
                {Math.round(getProgressPercentage())}%
              </Text>
            </div>
            <ProgressBar 
              progress={getProgressPercentage()} 
              size="large"
            />
          </div>
          
          {/* Description de la leçon */}
          {currentLesson.description && (
            <Text variant="bodyMd" color="subdued">
              {currentLesson.description}
            </Text>
          )}
        </div>
      </Card>
    </div>
  )

  // Footer de navigation entre leçons
  const navigationFooterMarkup = (
    <div
      className="slide-in-bottom"
      style={{ animationDelay: '0.3s' }}
    >
      <Card>
        <div style={{ padding: '1rem' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            gap: '1rem'
          }}>
            {/* Bouton précédent */}
            <div
              onClick={hasPreviousLesson ? goToPreviousLesson : undefined}
              className={hasPreviousLesson ? 'hover-scale clickable' : ''}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                backgroundColor: hasPreviousLesson ? '#f6f6f7' : '#fafbfb',
                color: hasPreviousLesson ? '#202223' : '#8c9196',
                cursor: hasPreviousLesson ? 'pointer' : 'not-allowed',
                border: '1px solid #e1e5e9',
                transition: 'all 0.2s ease',
                minWidth: '120px'
              }}
            >
              <ArrowLeftIcon />
              <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                Précédent
              </span>
            </div>

            {/* Bouton terminer la leçon */}
            {!isCurrentLessonCompleted && (
              <div
                onClick={completeLesson}
                className="hover-scale clickable"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  backgroundColor: '#00a96e',
                  color: 'white',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all 0.2s ease',
                  fontWeight: '500'
                }}
              >
                <CheckIcon />
                <span style={{ fontSize: '0.875rem' }}>
                  Terminer la leçon
                </span>
              </div>
            )}

            {/* Bouton suivant */}
            <div
              onClick={hasNextLesson ? goToNextLesson : undefined}
              className={hasNextLesson ? 'hover-scale clickable' : ''}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                backgroundColor: hasNextLesson ? '#2c5aa0' : '#fafbfb',
                color: hasNextLesson ? 'white' : '#8c9196',
                cursor: hasNextLesson ? 'pointer' : 'not-allowed',
                border: hasNextLesson ? 'none' : '1px solid #e1e5e9',
                transition: 'all 0.2s ease',
                minWidth: '120px',
                justifyContent: 'flex-end'
              }}
            >
              <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                Suivant
              </span>
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )

  return (
    <MainLayout currentPage={currentPage} onNavigate={onNavigate}>
      <div className="course-layout scrollable" style={{ padding: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Layout>
          <Layout.Section>
            {courseHeaderMarkup}
          </Layout.Section>
          
          <Layout.Section>
            <div className="fade-in" style={{ marginTop: '1rem' }}>
              <div
                key={`${currentModuleIndex}-${currentLessonIndex}`}
                className="slide-in-right"
              >
                {children}
              </div>
            </div>
          </Layout.Section>
          
          <Layout.Section>
            <div style={{ marginTop: '2rem' }}>
              {navigationFooterMarkup}
            </div>
          </Layout.Section>
        </Layout>
      </div>
    </MainLayout>
  )
}

export default CourseLayout