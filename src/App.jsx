import React from 'react'
import HeroSection from './components/views/home/HeroSection'
import HowItWorks from './components/views/home/HowItWorks'
import SupervisorHighlights from './components/views/home/SupervisorHighlights'
import StudentFeedback from './components/views/home/StudentFeedback'
import CallTOAction from './components/views/home/CallTOAction'

const App = () => {
  return (
    <>
    <HeroSection/>
    <HowItWorks/>
    <SupervisorHighlights/>
    <StudentFeedback/>
    <CallTOAction/>    
    </>
  )
}

export default App