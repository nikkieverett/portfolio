/* eslint-disable no-new */
import React, { useState, lazy, Suspense, useEffect } from 'react'

import IScroll from 'fullpage.js/vendors/scrolloverflow.min.js'
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
    setTimeout(() => {
      // eslint-disable-next-line new-cap
      new fullpage('#fullpage', {
        licenseKey: 'EE11C0E5-1D934A52-AE1033F6-CC23CF10',
        autoScrolling: true,
        scrollOverflow: true,
        scrollOverflowResetKey: 'C89E274E-34D847F8-BAC0D19A-A44705A2',
        fitToSection: false,
        onLeave: (origin, destination) => {
          const list = destination.item.classList
          list.forEach((item) => {
            if (item === 'projects') {
              console.log(destination.item.classList)
            }
          })
        }
      })
    }, 100)
  }, [])

  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <div id="fullpage">
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
