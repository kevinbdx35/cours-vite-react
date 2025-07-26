import { Card, Text, Badge } from '@shopify/polaris'
import { CheckIcon } from '@shopify/polaris-icons'
import { useCourse } from '../../hooks/course/useCourse'

function LessonSelector() {
  const { 
    currentModule,
    currentModuleIndex,
    currentLessonIndex,
    navigateToLesson,
    isLessonCompleted 
  } = useCourse()

  if (!currentModule) return null

  return (
    <Card>
      <div style={{ padding: '1rem' }}>
        <Text variant="headingMd" as="h3" style={{ marginBottom: '1rem' }}>
          📖 Leçons du Module
        </Text>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {currentModule.lessons.map((lesson, index) => {
            const isActive = index === currentLessonIndex
            const isCompleted = isLessonCompleted(currentModuleIndex, index)
            
            return (
              <motion.div
                key={lesson.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  onClick={() => navigateToLesson(currentModuleIndex, index)}
                  style={{
                    padding: '0.75rem',
                    border: isActive ? '2px solid #00a96e' : '1px solid #e1e5e9',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    backgroundColor: isActive ? '#f8fffe' : 'transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Text variant="bodySm" fontWeight={isActive ? 'semibold' : 'regular'}>
                          {index + 1}. {lesson.title}
                        </Text>
                        {isCompleted && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <CheckIcon color="success" />
                          </motion.div>
                        )}
                      </div>
                      <Text variant="caption" color="subdued">
                        {lesson.description}
                      </Text>
                    </div>
                    
                    <Badge>{lesson.duration}</Badge>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}

export default LessonSelector