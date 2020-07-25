import React, { useRef, useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'

export default function Waves() {
	const wave1 = useRef(null)
	const wave2 = useRef(null)
	const wave3 = useRef(null)
	const wave4 = useRef(null)


	useEffect(() => {
		const topPosition = wave1.current.getBoundingClientRect().top

		const onScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight

			if (topPosition < scrollPosition) {
				console.log('hi')
				// trigger animation
			}
		}

		window.addEventListener('scroll', onScroll)

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [])

	return (
    <div className="waves">
      <div className='wave wave--1' ref={wave1}></div>
      <div className='wave wave--2' ref={wave2}></div>
      <div className='wave wave--3' ref={wave3}></div>
      <div className='wave wave--4' ref={wave4}></div>
    </div>
  )
}
