/* eslint-disable no-new */
import React, { lazy, Suspense } from 'react'

import Header from './Header'
import Hero from './sections/Hero'
import Waves from './Waves'

const About = lazy(() => import('./sections/About'))
const Projects = lazy(() => import('./sections/Projects'))
const Skills = lazy(() => import('./sections/Skills'))
const Setup = lazy(() => import('./sections/Setup'))
const Contact = lazy(() => import('./sections/Contact'))

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <div className="section section-placeholder" />
        <Hero />
        <Waves />
        <Projects />
        <Skills />
        <Setup />
        <About />
        <Contact />
      </Suspense>
    </div>
  )
}

export default App
