import React, { useState } from 'react'

import Waves from './Waves'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

function App() {
  const [waves, setWaves] = useState([])

  return (
    <div className="app">
      <Header waves={waves} />
      <div className="section section-placeholder" />
      <Hero />
      <Waves setWaves={setWaves} waves={waves} />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}

export default App
