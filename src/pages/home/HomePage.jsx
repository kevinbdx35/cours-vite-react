import { Page, Layout, Card, Button, Text, Badge, Divider } from '@shopify/polaris'
import { ClockIcon, PlayIcon } from '@shopify/polaris-icons'
import { motion } from 'framer-motion'
import { courseStats, courseModules } from '../../constants/courseData'
import { useCourse } from '../../hooks/course/useCourse'
import { Container, ResponsiveGrid } from '../../components/layout/ResponsiveLayout'

function HomePage({ onStartCourse }) {
  const { getProgressPercentage, completedLessons, navigateToLesson } = useCourse()
  
  const handleModuleClick = (moduleIndex) => {
    navigateToLesson(moduleIndex, 0)
    onStartCourse()
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <Page 
      title="Cours Interactif Vite + React"
      subtitle="Maîtrisez le développement web moderne avec un apprentissage pratique"
    >
      <Layout>
        <Layout.Section>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Card>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ textAlign: 'center' }}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ display: 'inline-block', fontSize: '2.5rem', marginBottom: '0.5rem' }}
                      >
                        ⚡⚛️
                      </motion.div>
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
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5 }}
                      >
                        <div style={{ 
                          background: '#f3f3f3', 
                          borderRadius: '10px', 
                          height: '8px',
                          overflow: 'hidden'
                        }}>
                          <motion.div
                            style={{
                              height: '100%',
                              background: 'linear-gradient(90deg, #00a96e, #00b894)',
                              borderRadius: '10px'
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${getProgressPercentage()}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                        <Text variant="bodySm" color="subdued" alignment="center">
                          Progression : {Math.round(getProgressPercentage())}% ({completedLessons.size}/{courseStats.totalLessons} leçons)
                        </Text>
                      </motion.div>
                    )}
                    
                    <div style={{ textAlign: 'center' }}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          primary
                          size="large"
                          icon={PlayIcon}
                          onClick={onStartCourse}
                        >
                          {getProgressPercentage() > 0 ? 'Continuer l\'apprentissage' : 'Commencer le cours'}
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} style={{ marginTop: '2rem' }}>
              <Text variant="headingMd" as="h2">
                Modules du cours
              </Text>
            </motion.div>

            <Layout.Section>
              <ResponsiveGrid>
                {courseModules.map((module, index) => (
                  <motion.div key={module.id} variants={itemVariants}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleModuleClick(index)}
                    >
                      <Card>
                        <div style={{ padding: '1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                style={{ fontSize: '2rem' }}
                              >
                                {module.icon}
                              </motion.div>
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
                              <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                style={{ marginLeft: '0.5rem' }}
                              >
                                <Text variant="bodySm" color="subdued">→</Text>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </ResponsiveGrid>
            </Layout.Section>

            {/* Section de test pour le scroll */}
            <motion.div variants={itemVariants} style={{ marginTop: '3rem' }}>
              <Text variant="headingMd" as="h2">
                À propos du cours
              </Text>
            </motion.div>


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

          </motion.div>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

export default HomePage