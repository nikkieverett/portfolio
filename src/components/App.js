import React, { useState } from 'react'

import Waves from './Waves'
import Header from './Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
// import Skills from './sections/Skills'
import Setup from './sections/Setup'
import Contact from './sections/Contact'

function App() {
  const [waves, setWaves] = useState([])

  return (
    <div className="app">
      <Header waves={waves} />
      <div className="section section-placeholder" />
      <Hero />
      <Waves setWaves={setWaves} waves={waves} />
      <Projects />
      {/* <Skills /> */}
      <Setup />
      <About />
      <Contact />
    </div>
  )
}

export default App
