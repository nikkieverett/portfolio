import React, { useRef, useEffect } from 'react'
import anime from 'animejs/lib/anime.es'

import '../styles/waves.scss'

export default function Waves() {
  const wave1 = useRef(null)
  const wave2 = useRef(null)
  const wave3 = useRef(null)
  const wave4 = useRef(null)

  const onScroll = (e, waves) => {
    anime({
      targets: waves,
      direction: 'alternate',
      backgroundPositionX: (el, i) => {
        const positions = [
          { start: 800, end: 900 },
          { start: 400, end: 500 },
          { start: 700, end: 800 },
          { start: 500, end: 600 }
        ]

        const randInt = anime.random(positions[i].start, positions[i].end) + window.pageYOffset

        return randInt + window.pageYOffset
      },
      duration: (el, i) => {
        const durations = [3000, 5000, 3000, 4000]

        return durations[i]
      },
      delay: (el, i) => {
        const delays = [0, 2, 0, 1]

        return delays[i]
      }
    })
  }

  useEffect(() => {
    const waves = [wave1.current, wave2.current, wave3.current, wave4.current]

    document.body.addEventListener('wheel', (e) => {
      onScroll(e, waves)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="waves">
      <div className="wave wave--1" ref={wave1} />
      <div className="wave wave--2" ref={wave2} />
      <div className="wave wave--3" ref={wave3} />
      <div className="wave wave--4" ref={wave4} />
    </div>
  )
}
