import React, { useState, lazy, Suspense } from 'react'

import Waves from './Waves'
import Header from './Header'
import Hero from './sections/Hero'

const About = lazy(() => import('./sections/About'))
const Projects = lazy(() => import('./sections/Projects'))
// const Skills = lazy(() => import('./sections/Skills'))
const Setup = lazy(() => import('./sections/Setup'))
const Contact = lazy(() => import('./sections/Contact'))

function App() {
  const [waves, setWaves] = useState([])

  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Header waves={waves} />
        <div className="section section-placeholder" />
        <Hero />
        <Waves setWaves={setWaves} waves={waves} />
        <Projects />
        {/* <Skills /> */}
        <Setup />
        <About />
        <Contact />
      </Suspense>
    </div>
  )
}

export default App
