import { useState } from 'react'
import { AppProvider } from '@shopify/polaris'
import { CourseProvider } from './hooks/course/useCourse'
import CoursePage from './pages/course/CoursePage'
import HomePage from './pages/home/HomePage'
import MainLayout from './components/layout/MainLayout'
import CourseLayout from './components/layout/CourseLayout'
import './styles/App.css'
import './styles/layout.css'

function AppContent() {
  const [currentView, setCurrentView] = useState('home')
  
  const handleStartCourse = () => {
    setCurrentView('course')
  }
  
  const handleBackToHome = () => {
    setCurrentView('home')
  }

  const handleNavigate = (view) => {
    setCurrentView(view)
  }

  return (
    <>
      {currentView === 'home' ? (
        <MainLayout 
          currentPage="home" 
          onNavigate={handleNavigate}
          showNavigation={true}
        >
          <HomePage onStartCourse={handleStartCourse} />
        </MainLayout>
      ) : (
        <CourseLayout 
          currentPage="course" 
          onNavigate={handleNavigate}
        >
          <CoursePage onBackToHome={handleBackToHome} />
        </CourseLayout>
      )}
    </>
  )
}

function App() {
  return (
    <AppProvider>
      <CourseProvider>
        <AppContent />
      </CourseProvider>
    </AppProvider>
  )
}

export default App