import { useState } from 'react'
import { CourseContext } from '../../contexts/CourseContext'
import { courseModules } from '../../constants/courseData'

export function CourseProvider({ children }) {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [completedLessons, setCompletedLessons] = useState(new Set())
  const [userProgress, setUserProgress] = useState({
    totalLessons: 0,
    completedLessons: 0,
    currentStreak: 0
  })

  const currentModule = courseModules[currentModuleIndex]
  const currentLesson = currentModule?.lessons[currentLessonIndex]

  const completeLesson = () => {
    const lessonId = `${currentModuleIndex}-${currentLessonIndex}`
    setCompletedLessons(prev => new Set([...prev, lessonId]))
    
    setUserProgress(prev => ({
      ...prev,
      completedLessons: prev.completedLessons + 1,
      currentStreak: prev.currentStreak + 1
    }))

    goToNextLesson()
  }

  const goToNextLesson = () => {
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setCurrentLessonIndex(prev => prev + 1)
    } else if (currentModuleIndex < courseModules.length - 1) {
      setCurrentModuleIndex(prev => prev + 1)
      setCurrentLessonIndex(0)
    }
  }

  const goToPreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prev => prev - 1)
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(prev => prev - 1)
      setCurrentLessonIndex(courseModules[currentModuleIndex - 1].lessons.length - 1)
    }
  }

  const navigateToLesson = (moduleIndex, lessonIndex) => {
    setCurrentModuleIndex(moduleIndex)
    setCurrentLessonIndex(lessonIndex)
  }

  const isLessonCompleted = (moduleIndex, lessonIndex) => {
    return completedLessons.has(`${moduleIndex}-${lessonIndex}`)
  }

  const getProgressPercentage = () => {
    const totalLessons = courseModules.reduce((total, module) => total + module.lessons.length, 0)
    return (completedLessons.size / totalLessons) * 100
  }

  const value = {
    currentModule,
    currentLesson,
    currentModuleIndex,
    currentLessonIndex,
    completedLessons,
    userProgress,
    courseModules,
    completeLesson,
    goToNextLesson,
    goToPreviousLesson,
    navigateToLesson,
    isLessonCompleted,
    getProgressPercentage
  }

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  )
}


