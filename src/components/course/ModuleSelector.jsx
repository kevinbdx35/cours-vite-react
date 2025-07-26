import { Card, Text, Badge } from '@shopify/polaris'
import { useCourse } from '../../hooks/course/useCourseHook'

function ModuleSelector() {
  const { 
    courseModules, 
    currentModuleIndex, 
    navigateToLesson,
    isLessonCompleted
  } = useCourse()

  const getModuleProgress = (moduleIndex) => {
    const module = courseModules[moduleIndex]
    const totalLessons = module.lessons.length
    const completedInModule = module.lessons.filter((_, lessonIndex) => 
      isLessonCompleted(moduleIndex, lessonIndex)
    ).length
    return Math.round((completedInModule / totalLessons) * 100)
  }

  return (
    <Card>
      <div style={{ padding: '1rem' }}>
        <Text variant="headingMd" as="h3" style={{ marginBottom: '1rem' }}>
          📚 Sélectionner un Module
        </Text>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {courseModules.map((module, index) => {
            const progress = getModuleProgress(index)
            const isActive = index === currentModuleIndex
            
            return (
              <motion.div
                key={module.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  onClick={() => navigateToLesson(index, 0)}
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>{module.icon}</span>
                      <div>
                        <Text variant="bodySm" fontWeight={isActive ? 'semibold' : 'regular'}>
                          {module.title}
                        </Text>
                        {progress > 0 && (
                          <div style={{ marginTop: '0.25rem' }}>
                            <Badge status={progress === 100 ? 'success' : 'info'}>
                              {progress}% complété
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Badge>{module.lessons.length} leçons</Badge>
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

export default ModuleSelector