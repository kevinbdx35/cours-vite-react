import { Card, Text, Badge } from '@shopify/polaris'
import { CheckIcon } from '@shopify/polaris-icons'
import { useCourse } from '../../hooks/course/useCourseHook'

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
              <div
                key={lesson.id}
                className="lesson-item"
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
                          <div className="check-icon">
                            <CheckIcon color="success" />
                          </div>
                        )}
                      </div>
                      <Text variant="caption" color="subdued">
                        {lesson.description}
                      </Text>
                    </div>
                    
                    <Badge>{lesson.duration}</Badge>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}

export default LessonSelector