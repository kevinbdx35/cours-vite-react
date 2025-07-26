import { Layout, Card, Text } from '@shopify/polaris'
import { motion } from 'framer-motion'
import { useCourse } from '../../hooks/course/useCourse'
import LessonContent from '../../components/course/LessonContent'
import ModuleProgress from '../../components/course/ModuleProgress'
import ModuleSelector from '../../components/course/ModuleSelector'
import LessonSelector from '../../components/course/LessonSelector'
import { Container, ResponsiveShow, ResponsiveHide } from '../../components/layout/ResponsiveLayout'

function CoursePage({ onBackToHome }) {
  const { 
    currentModule, 
    currentLesson
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

  return (
    <Layout>
      {/* Sidebar pour desktop */}
      <ResponsiveShow on={['desktop', 'large']}>
        <Layout.Section variant="oneThird">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              position: 'sticky',
              top: '1rem'
            }}
          >
            <ModuleSelector />
            <LessonSelector />
            <ModuleProgress />
          </motion.div>
        </Layout.Section>
      </ResponsiveShow>

      {/* Contenu principal */}
      <Layout.Section>
        {/* Selectors pour mobile/tablet */}
        <ResponsiveShow on={['mobile', 'tablet']}>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              marginBottom: '1rem'
            }}
          >
            <ModuleSelector />
            <LessonSelector />
          </motion.div>
        </ResponsiveShow>

        {/* Contenu de la leçon */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <LessonContent lesson={currentLesson} />
        </motion.div>

        {/* Progress pour mobile/tablet */}
        <ResponsiveShow on={['mobile', 'tablet']}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ marginTop: '1rem' }}
          >
            <ModuleProgress />
          </motion.div>
        </ResponsiveShow>
      </Layout.Section>
    </Layout>
  )
}

export default CoursePage