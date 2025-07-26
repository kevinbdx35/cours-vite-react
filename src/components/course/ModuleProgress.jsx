import { Card, Text, Badge, ProgressBar } from '@shopify/polaris'
import { CheckIcon, ClockIcon } from '@shopify/polaris-icons'
import { useCourse } from '../../hooks/course/useCourseHook'

function ModuleProgress() {
  const { 
    courseModules, 
    currentModuleIndex, 
    completedLessons,
    isLessonCompleted 
  } = useCourse()

  // Calculer la progression globale
  const totalLessons = courseModules.reduce((total, module) => total + module.lessons.length, 0)
  const completedCount = completedLessons.size
  const overallProgress = Math.round((completedCount / totalLessons) * 100)

  // Calculer la progression par module
  const getModuleProgress = (moduleIndex) => {
    const module = courseModules[moduleIndex]
    const moduleCompletedCount = module.lessons.filter((_, lessonIndex) => 
      isLessonCompleted(moduleIndex, lessonIndex)
    ).length
    return Math.round((moduleCompletedCount / module.lessons.length) * 100)
  }

  const getModuleStatus = (moduleIndex) => {
    const progress = getModuleProgress(moduleIndex)
    if (progress === 100) return 'completed'
    if (progress > 0) return 'in-progress'
    if (moduleIndex === currentModuleIndex) return 'current'
    return 'not-started'
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#00a96e'
      case 'in-progress': return '#2c5aa0'
      case 'current': return '#bf5af2'
      default: return '#e1e5e9'
    }
  }

  const getStatusBadge = (status, progress) => {
    switch (status) {
      case 'completed': return { content: 'Terminé', status: 'success' }
      case 'in-progress': return { content: `${progress}%`, status: 'info' }
      case 'current': return { content: 'En cours', status: 'attention' }
      default: return { content: 'À venir', status: 'neutral' }
    }
  }

  return (
    <Card>
      <div style={{ padding: '1rem' }}>
        <Text variant="headingMd" as="h3" style={{ marginBottom: '1rem' }}>
          📊 Progression du Cours
        </Text>
        
        {/* Progression Globale */}
        <div
          className="progress-global"
          style={{
            padding: '1rem',
            backgroundColor: '#f8fffe',
            borderRadius: '12px',
            border: '2px solid #00a96e',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <Text variant="headingSm" fontWeight="bold">
              Progression Totale
            </Text>
            <Badge status="success" size="large">
              {completedCount}/{totalLessons} leçons
            </Badge>
          </div>
          
          <ProgressBar progress={overallProgress} size="large" />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
            <Text variant="bodySm" color="subdued">
              {overallProgress}% complété
            </Text>
            <Text variant="bodySm" color="subdued">
              🎯 {totalLessons - completedCount} leçons restantes
            </Text>
          </div>
        </div>

        {/* Progression par Module */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {courseModules.map((module, moduleIndex) => {
            const status = getModuleStatus(moduleIndex)
            const progress = getModuleProgress(moduleIndex)
            const statusBadge = getStatusBadge(status, progress)
            const isActive = moduleIndex === currentModuleIndex
            
            return (
              <div
                key={module.id}
                className="module-item"
                style={{
                  padding: '0.75rem',
                  backgroundColor: isActive ? '#f8fffe' : '#fafbfb',
                  borderRadius: '8px',
                  border: `2px solid ${isActive ? '#00a96e' : '#e1e5e9'}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    className="module-icon"
                    style={{ 
                      fontSize: '1.5rem',
                      filter: status === 'not-started' ? 'grayscale(50%)' : 'none'
                    }}
                  >
                    {module.icon}
                  </div>
                  
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <Text 
                        variant="bodySm" 
                        fontWeight={isActive ? 'semibold' : 'medium'}
                        truncate
                      >
                        {module.title}
                      </Text>
                      <Badge status={statusBadge.status} size="small">
                        {statusBadge.content}
                      </Badge>
                    </div>
                    
                    {/* Barre de progression mini */}
                    <div style={{
                      width: '100%',
                      height: '4px',
                      backgroundColor: '#e1e5e9',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      marginBottom: '0.25rem'
                    }}>
                      <div
                        className="progress-bar"
                        style={{
                          width: `${progress}%`,
                          height: '100%',
                          backgroundColor: getStatusColor(status),
                          borderRadius: '2px'
                        }}
                      />
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Text variant="caption" color="subdued">
                        {module.lessons.length} leçons
                      </Text>
                      <span style={{ color: '#e1e5e9' }}>•</span>
                      <Text variant="caption" color="subdued">
                        {module.duration}
                      </Text>
                      {status === 'completed' && (
                        <>
                          <span style={{ color: '#e1e5e9' }}>•</span>
                          <div
                            className="completion-badge"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                          >
                            <CheckIcon color="success" />
                            <Text variant="caption" color="success">
                              Terminé
                            </Text>
                          </div>
                        </>
                      )}
                    </div>
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

export default ModuleProgress