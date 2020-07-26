import React, { useRef, useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'

import '../styles/waves.scss'

export default function Waves() {
  const wave1 = useRef(null)
  const wave2 = useRef(null)
  const wave3 = useRef(null)
  const wave4 = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      anime({
        targets: [wave1.current, wave2.current, wave3.current, wave4.current],
        backgroundPositionX: anime.stagger([1000, 1400]),
        loop: true,
        keyframes: [{ backgroundPositionX: 0 }, { backgroundPositionX: 1400 }],
        duration: (target, index) => {
          if (index === 0 || index === 2) {
            return 30000
          }

          return 15000
        },
      })
    }

    window.addEventListener('scroll', onScroll)

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
