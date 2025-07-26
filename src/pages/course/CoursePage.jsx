import { Layout, Card, Text, Badge, Button, Divider } from '@shopify/polaris'
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, HomeIcon } from '@shopify/polaris-icons'
import { useCourse } from '../../hooks/course/useCourse'
import LessonContent from '../../components/course/LessonContent'
import { Container, ResponsiveShow } from '../../components/layout/ResponsiveLayout'

function CoursePage({ onBackToHome }) {
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
    isLessonCompleted,
    navigateToLesson
  } = useCourse()

  if (!currentModule || !currentLesson) {
    return (
      <Container>
        <Card>
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <Text variant="headingMd">Chargement du contenu du cours...</Text>
          </div>
        </Card>
      </Container>
    )
  }

  const hasNextLesson = currentLessonIndex < currentModule?.lessons.length - 1 || 
                       currentModuleIndex < courseModules.length - 1
  const hasPreviousLesson = currentLessonIndex > 0 || currentModuleIndex > 0
  const isCurrentLessonCompleted = isLessonCompleted(currentModuleIndex, currentLessonIndex)

  // Header avec breadcrumb et infos leçon
  const lessonHeader = (
    <Card>
      <div style={{ padding: '1.5rem' }}>
        {/* Breadcrumb */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          marginBottom: '1rem',
          flexWrap: 'wrap'
        }}>
          <Button 
            plain 
            icon={HomeIcon}
            onClick={onBackToHome}
          >
            Accueil
          </Button>
          <Text variant="bodySm" color="subdued">→</Text>
          <Text variant="bodySm" fontWeight="medium">{currentModule.title}</Text>
          <Text variant="bodySm" color="subdued">→</Text>
          <Text variant="bodySm">{currentLesson.title}</Text>
        </div>

        {/* Titre et badges */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: '1rem',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>{currentModule.icon}</span>
              <Text variant="headingLg">{currentLesson.title}</Text>
            </div>
            <Text variant="bodyMd" color="subdued">
              {currentLesson.description || 'Apprenez les concepts essentiels étape par étape'}
            </Text>
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Badge status="info">
              Leçon {currentLessonIndex + 1}/{currentModule.lessons.length}
            </Badge>
            <Badge>{currentLesson.duration}</Badge>
            <Badge status={currentLesson.type === 'theory' ? 'neutral' : 'warning'}>
              {currentLesson.type === 'theory' ? 'Théorie' : 'Pratique'}
            </Badge>
            {isCurrentLessonCompleted && (
              <Badge status="success">
                <CheckIcon /> Terminé
              </Badge>
            )}
          </div>
        </div>

        {/* Barre de progression du module */}
        <div style={{ 
          background: '#f3f3f3', 
          borderRadius: '8px', 
          height: '6px',
          overflow: 'hidden',
          marginBottom: '0.5rem'
        }}>
          <div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #00a96e, #00b894)',
              borderRadius: '8px',
              width: `${getProgressPercentage(currentModuleIndex)}%`,
              transition: 'width 0.3s ease'
            }}
          />
        </div>
        <Text variant="bodySm" color="subdued">
          Progression du module : {Math.round(getProgressPercentage(currentModuleIndex))}%
        </Text>
      </div>
    </Card>
  )

  // Navigation entre les leçons
  const lessonNavigation = (
    <Card>
      <div style={{ padding: '1rem' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '1rem'
        }}>
          {/* Bouton précédent */}
          <Button
            icon={ArrowLeftIcon}
            disabled={!hasPreviousLesson}
            onClick={goToPreviousLesson}
          >
            Précédent
          </Button>

          {/* Bouton terminer la leçon */}
          {!isCurrentLessonCompleted ? (
            <Button
              primary
              icon={CheckIcon}
              onClick={completeLesson}
            >
              Terminer la leçon
            </Button>
          ) : (
            <Badge status="success">Leçon terminée ✓</Badge>
          )}

          {/* Bouton suivant */}
          <Button
            primary={isCurrentLessonCompleted}
            disabled={!hasNextLesson}
            onClick={goToNextLesson}
          >
            Suivant
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </Card>
  )

  // Sidebar avec liste des leçons
  const lessonSidebar = (
    <Card>
      <div style={{ padding: '1rem' }}>
        <Text variant="headingMd" style={{ marginBottom: '1rem' }}>
          Leçons du module
        </Text>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {currentModule.lessons.map((lesson, index) => (
            <div
              key={index}
              onClick={() => navigateToLesson(currentModuleIndex, index)}
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: index === currentLessonIndex ? '#f0f8ff' : 'transparent',
                border: index === currentLessonIndex ? '2px solid #2c5aa0' : '1px solid #e1e5e9',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <Text variant="bodySm" fontWeight={index === currentLessonIndex ? 'semibold' : 'regular'}>
                    {index + 1}. {lesson.title}
                  </Text>
                  <Text variant="caption" color="subdued">
                    {lesson.duration}
                  </Text>
                </div>
                {isLessonCompleted(currentModuleIndex, index) && (
                  <CheckIcon style={{ color: '#00a96e' }} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )

  return (
    <Container>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
        {/* Header avec infos de la leçon */}
        <div
          className="slide-in-top"
          style={{ marginBottom: '1.5rem' }}
        >
          {lessonHeader}
        </div>

        <Layout>
          {/* Sidebar avec liste des leçons - Desktop */}
          <ResponsiveShow on={['desktop', 'large']}>
            <Layout.Section variant="oneThird">
              <div
                className="slide-in-left"
                style={{ 
                  position: 'sticky',
                  top: '1rem',
                  animationDelay: '0.2s'
                }}
              >
                {lessonSidebar}
              </div>
            </Layout.Section>
          </ResponsiveShow>

          {/* Contenu principal */}
          <Layout.Section>
            {/* Contenu de la leçon */}
            <div
              className="slide-in-bottom"
              style={{ 
                marginBottom: '1.5rem',
                animationDelay: '0.1s'
              }}
            >
              <LessonContent lesson={currentLesson} />
            </div>

            {/* Navigation entre leçons */}
            <div
              className="slide-in-bottom"
              style={{ animationDelay: '0.3s' }}
            >
              {lessonNavigation}
            </div>
          </Layout.Section>
        </Layout>

        {/* Sidebar mobile - Liste des leçons */}
        <ResponsiveShow on={['mobile', 'tablet']}>
          <div
            className="slide-in-bottom"
            style={{ 
              marginTop: '1.5rem',
              animationDelay: '0.4s'
            }}
          >
            {lessonSidebar}
          </div>
        </ResponsiveShow>
      </div>
    </Container>
  )
}

export default CoursePage