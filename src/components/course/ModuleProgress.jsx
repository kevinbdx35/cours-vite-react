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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
        </motion.div>

        {/* Progression par Module */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {courseModules.map((module, moduleIndex) => {
            const status = getModuleStatus(moduleIndex)
            const progress = getModuleProgress(moduleIndex)
            const statusBadge = getStatusBadge(status, progress)
            const isActive = moduleIndex === currentModuleIndex
            
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: moduleIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
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
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    style={{ 
                      fontSize: '1.5rem',
                      filter: status === 'not-started' ? 'grayscale(50%)' : 'none'
                    }}
                  >
                    {module.icon}
                  </motion.div>
                  
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
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.8, delay: moduleIndex * 0.1 }}
                        style={{
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
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                          >
                            <CheckIcon color="success" />
                            <Text variant="caption" color="success">
                              Terminé
                            </Text>
                          </motion.div>
                        </>
                      )}
                    </div>
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

export default ModuleProgress