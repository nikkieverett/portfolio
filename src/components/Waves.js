import React, { useRef, useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'

import '../styles/waves.scss'

export default function Waves() {
  const wave1 = useRef(null)
  const wave2 = useRef(null)
  const wave3 = useRef(null)
  const wave4 = useRef(null)

  const onScroll = (e, waves) => {
    anime({
      targets: waves[0],
      backgroundPositionX: anime.random(800, 900) + window.pageYOffset,
      direction: 'alternate',
      duration: 3000,
    })
    anime({
      targets: waves[1],
      backgroundPositionX: anime.random(400, 500) + window.pageYOffset,
      duration: 5000,
      direction: 'alternate',
      delay: 2,
    })
    anime({
      targets: waves[2],
      backgroundPositionX: anime.random(700, 800) + window.pageYOffset,
      direction: 'alternate',
      duration: 3000,
    })
    anime({
      targets: waves[3],
      backgroundPositionX: anime.random(500, 600) + window.pageYOffset,
      duration: 4000,
      direction: 'alternate',
      delay: 1,
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
