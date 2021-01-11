/* eslint-disable no-new */
import React, { lazy, Suspense, useRef, useState, useEffect } from 'react'

import Header from './Header'
import Hero from './sections/Hero'
import Waves from './Waves'

const About = lazy(() => import('./sections/About'))
const Projects = lazy(() => import('./sections/Projects'))
const Skills = lazy(() => import('./sections/Skills'))
const Setup = lazy(() => import('./sections/Setup'))
const Contact = lazy(() => import('./sections/Contact'))

function App() {
  const wavesRef = useRef(null)
  const appRef = useRef(null)
  const [isFixed, setIsFixed] = useState(false)

  const handleScroll = (e) => {
    if (wavesRef.current.getBoundingClientRect().top < 400) {
      setIsFixed(true)
    } else {
      setIsFixed(false)
    }
  }

  const scrollToTop = () => {
    appRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleScroll(e))
  }, [])

  return (
    <div className="app" ref={appRef}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header isFixed={isFixed} />
        <div className="section section-placeholder" />
        <Hero />
        <div ref={wavesRef}>
          <Waves />
        </div>
        <Projects />
        <Skills />
        <Setup />
        <About />
        <Contact />
        {isFixed && <button onClick={scrollToTop} className="scrolltop"><i className="bi bi-chevron-up"></i></button>}
      </Suspense>
    </div>
  )
}

export default App
