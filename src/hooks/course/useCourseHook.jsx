import { createContext, useContext, useState } from 'react'
import { courseModules } from '../../constants/courseData'

const CourseContext = createContext()

export function CourseProvider({ children }) {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [completedLessons, setCompletedLessons] = useState(new Set())

  const currentModule = courseModules[currentModuleIndex]
  const currentLesson = currentModule?.lessons[currentLessonIndex]

  const navigateToLesson = (moduleIndex, lessonIndex) => {
    setCurrentModuleIndex(moduleIndex)
    setCurrentLessonIndex(lessonIndex)
  }

  const navigateToNextLesson = () => {
    const currentModuleLessons = courseModules[currentModuleIndex].lessons
    if (currentLessonIndex < currentModuleLessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
    } else if (currentModuleIndex < courseModules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1)
      setCurrentLessonIndex(0)
    }
  }

  const navigateToPreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1)
      setCurrentLessonIndex(courseModules[currentModuleIndex - 1].lessons.length - 1)
    }
  }

  const hasNextLesson = () => {
    const currentModuleLessons = courseModules[currentModuleIndex].lessons
    return currentLessonIndex < currentModuleLessons.length - 1 || 
           currentModuleIndex < courseModules.length - 1
  }

  const hasPreviousLesson = () => {
    return currentLessonIndex > 0 || currentModuleIndex > 0
  }

  const markLessonAsCompleted = (moduleIndex, lessonIndex) => {
    const lessonKey = `${moduleIndex}-${lessonIndex}`
    setCompletedLessons(prev => new Set([...prev, lessonKey]))
  }

  const isLessonCompleted = (moduleIndex, lessonIndex) => {
    const lessonKey = `${moduleIndex}-${lessonIndex}`
    return completedLessons.has(lessonKey)
  }

  const getProgressPercentage = (moduleIndex = null) => {
    if (moduleIndex !== null) {
      const module = courseModules[moduleIndex]
      const completedInModule = module.lessons.filter((_, index) => 
        isLessonCompleted(moduleIndex, index)
      ).length
      return Math.round((completedInModule / module.lessons.length) * 100)
    }
    
    const totalLessons = courseModules.reduce((total, module) => total + module.lessons.length, 0)
    return Math.round((completedLessons.size / totalLessons) * 100)
  }

  const value = {
    courseModules,
    currentModule,
    currentLesson,
    currentModuleIndex,
    currentLessonIndex,
    completedLessons,
    navigateToLesson,
    navigateToNextLesson,
    navigateToPreviousLesson,
    hasNextLesson: hasNextLesson(),
    hasPreviousLesson: hasPreviousLesson(),
    markLessonAsCompleted,
    isLessonCompleted,
    getProgressPercentage
  }

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  )
}

export function useCourse() {
  const context = useContext(CourseContext)
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider')
  }
  return context
}