import React from 'react'
import ReactDOM from 'react-dom/client'
import GradientBackground from './GradientBackground'
import NavBar from './NavBar'
import Hero from './HeroSection'
import AboutMe from './AboutMe'
import Projects from './Projects'
import SkillSection from './SkillSection.jsx'
import Contact from './Contact'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  	<GradientBackground />
  	<NavBar />
  	<Hero />
  	<AboutMe />
  	<Projects />
  	<SkillSection />
  	<Contact />
    
  </React.StrictMode>
)
