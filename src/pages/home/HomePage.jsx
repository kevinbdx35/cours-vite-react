import { Page, Layout, Card, Button, Text, Badge, Divider } from '@shopify/polaris'
import { ClockIcon, PlayIcon } from '@shopify/polaris-icons'
import { courseStats, courseModules } from '../../constants/courseData'
import { useCourse } from '../../hooks/course/useCourseHook'
import { Container, ResponsiveGrid } from '../../components/layout/ResponsiveUtils'

function HomePage({ onStartCourse }) {
  const { getProgressPercentage, completedLessons, navigateToLesson } = useCourse()
  
  const handleModuleClick = (moduleIndex) => {
    navigateToLesson(moduleIndex, 0)
    onStartCourse()
  }
  

  return (
    <Page 
      title="Cours Interactif Vite + React"
      subtitle="Maîtrisez le développement web moderne avec un apprentissage pratique"
    >
      <Layout>
        <Layout.Section>
          <div className="home-container">
            <div className="home-item">
              <Card>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div
                        className="hero-icon"
                        style={{ display: 'inline-block', fontSize: '2.5rem', marginBottom: '0.5rem' }}
                      >
                        ⚡⚛️
                      </div>
                      <Text variant="headingXl" as="h1">
                        Apprendre Vite + React
                      </Text>
                      <Text variant="bodyLg" color="subdued">
                        Créez des applications web modernes et rapides avec des leçons interactives
                      </Text>
                    </div>
                    
                    <Divider />
                    
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
                      <div style={{ textAlign: 'center' }}>
                        <Badge status="info">
                          📚
                        </Badge>
                        <Text variant="bodyMd" alignment="center">
                          {courseStats.totalModules} Modules
                        </Text>
                      </div>
                      
                      <div style={{ textAlign: 'center' }}>
                        <Badge status="success">
                          <ClockIcon />
                        </Badge>
                        <Text variant="bodyMd" alignment="center">
                          {courseStats.estimatedDuration} minutes
                        </Text>
                      </div>
                      
                      <div style={{ textAlign: 'center' }}>
                        <Badge status="attention">
                          📚
                        </Badge>
                        <Text variant="bodyMd" alignment="center">
                          {courseStats.totalLessons} Leçons
                        </Text>
                      </div>
                    </div>
                    
                    {getProgressPercentage() > 0 && (
                      <div className="progress-container">
                        <div style={{ 
                          background: '#f3f3f3', 
                          borderRadius: '10px', 
                          height: '8px',
                          overflow: 'hidden'
                        }}>
                          <div
                            className="progress-bar"
                            style={{
                              width: `${getProgressPercentage()}%`,
                              height: '100%',
                              background: 'linear-gradient(90deg, #00a96e, #00b894)',
                              borderRadius: '10px'
                            }}
                          />
                        </div>
                        <Text variant="bodySm" color="subdued" alignment="center">
                          Progression : {Math.round(getProgressPercentage())}% ({completedLessons.size}/{courseStats.totalLessons} leçons)
                        </Text>
                      </div>
                    )}
                    
                    <div style={{ textAlign: 'center' }}>
                      <div className="button-container">
                        <Button
                          primary
                          size="large"
                          icon={PlayIcon}
                          onClick={onStartCourse}
                        >
                          {getProgressPercentage() > 0 ? 'Continuer l\'apprentissage' : 'Commencer le cours'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="home-item" style={{ marginTop: '2rem' }}>
              <Text variant="headingMd" as="h2">
                Modules du cours
              </Text>
            </div>

            <Layout.Section>
              <ResponsiveGrid>
                {courseModules.map((module, index) => (
                  <div key={module.id} className="home-item">
                    <div
                      className="module-card"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleModuleClick(index)}
                    >
                      <Card>
                        <div style={{ padding: '1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                              <div
                                className="module-icon"
                                style={{ fontSize: '2rem' }}
                              >
                                {module.icon}
                              </div>
                              <div>
                                <Text variant="headingSm">{module.title}</Text>
                                <Text variant="bodySm" color="subdued">
                                  {module.description}
                                </Text>
                              </div>
                            </div>
                            
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                              <Badge status="info">{module.lessons.length} leçons</Badge>
                              <Badge>{module.duration}</Badge>
                              <div
                                className="arrow-indicator"
                                style={{ marginLeft: '0.5rem' }}
                              >
                                <Text variant="bodySm" color="subdued">→</Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </ResponsiveGrid>
            </Layout.Section>

            {/* Section de test pour le scroll */}
            <div className="home-item" style={{ marginTop: '3rem' }}>
              <Text variant="headingMd" as="h2">
                À propos du cours
              </Text>
            </div>


            {/* Plus de contenu pour tester le scroll */}
            <Layout.Section>
              <Card>
                <div style={{ padding: '2rem' }}>
                  <Text variant="headingMd" style={{ marginBottom: '1rem' }}>
                    🎯 Pourquoi choisir ce cours ?
                  </Text>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      'Apprentissage interactif avec des exemples pratiques',
                      'Progression guidée étape par étape',
                      'Exercices pratiques et projets réels',
                      'Support moderne avec les dernières technologies',
                      'Communauté active et support continu'
                    ].map((feature, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#00a96e', fontSize: '1.2rem' }}>✓</span>
                        <Text variant="bodyMd">{feature}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Layout.Section>

            {/* Marge en bas de page */}
            <div style={{ height: '3rem' }} />

          </div>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

export default HomePage