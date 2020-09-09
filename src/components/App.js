/* eslint-disable no-new */
import React, { useState, lazy, Suspense, useEffect } from 'react'
import fullpage from 'fullpage.js/dist/fullpage.extensions.min'

import Header from './Header'
import Hero from './sections/Hero'

const About = lazy(() => import('./sections/About'))
const Projects = lazy(() => import('./sections/Projects'))
const Skills = lazy(() => import('./sections/Skills'))
const Setup = lazy(() => import('./sections/Setup'))
const Contact = lazy(() => import('./sections/Contact'))

function App() {
  useEffect(() => {
    // eslint-disable-next-line new-cap
    new fullpage('#fullpage', {
      licenseKey: 'EE11C0E5-1D934A52-AE1033F6-CC23CF10',
      autoScrolling: true
    })
  }, [])

  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <div id="fullpage">
          <div className="section-placeholder" />
          <Hero />
          <Projects />
          <Skills />
          <Setup />
          <About />
          <Contact />
        </div>
      </Suspense>
    </div>
  )
}

export default App
