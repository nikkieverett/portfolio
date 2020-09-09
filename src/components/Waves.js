import React, { useRef, useEffect, useState } from 'react'
import anime from 'animejs/lib/anime.es'

const Waves = () => {
  const wave1 = useRef(null)
  const wave2 = useRef(null)
  const wave3 = useRef(null)
  const wave4 = useRef(null)
  const waveContainer = useRef(null)
  const [waves, setWaves] = useState([])

  const waveData = {
    targets: waves,
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
  }
  const stretchData = {
    targets: waves,
    scaleX: [
      { value: 1.3, duration: 500, delay: 0, easing: 'easeInOutCirc' },
      { value: 1, duration: 1000, delay: -2, easing: 'easeInOutCirc' },
      { value: 1.1, duration: 1000, delay: 0, easing: 'easeInOutCirc' },
      { value: 1, duration: 800, delay: -2, easing: 'easeOutCirc' }
    ],
    skewY: [
      { value: 5, duration: 500, delay: 0, easing: 'easeInOutCirc' },
      { value: -4.5, duration: 1000, delay: -2, easing: 'easeInOutCirc' },
      { value: 3, duration: 1000, delay: 0, easing: 'easeInOutCirc' },
      { value: 0, duration: 1000, delay: -2, easing: 'easeOutBack' }
    ]
  }

  useEffect(() => {
    const waves = [wave1.current, wave2.current, wave3.current, wave4.current]

    setWaves(waves)
  }, [setWaves])

  useEffect(() => {
    if (waves.length > 0) {
      waveContainer.current.addEventListener('mouseover', () => {
        anime(waveData)
      })
      window.addEventListener('scroll', () => {
        anime(stretchData)
        anime(waveData)
      })
    }
  }, [waves, stretchData, waveData])

  return (
    <div className="waves" ref={waveContainer}>
      <div className="wave wave--1" ref={wave1} />
      <div className="wave wave--2" ref={wave2} />
      <div className="wave wave--3" ref={wave3} />
      <div className="wave wave--4" ref={wave4} />
    </div>
  )
}

export default Waves
