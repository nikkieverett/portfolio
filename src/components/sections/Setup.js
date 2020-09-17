import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es'

import { ReactComponent as DeskSetup } from '../../images/desk-space.svg'

import deskObjects from '../../data/setup'

const Setup = () => {
  useEffect(() => {
    const mouse = document.querySelector('#Mouse')
    const laptop = document.querySelector('#Laptop')
    const monitorLeft = document.querySelector('#Monitor-Left')
    const monitorRight = document.querySelector('#Monitor-Right')
    const keyBoard = document.querySelector('#Wireless-KeyBoard')
    const coffee = document.querySelector('#Coffee')
    const glasses = document.querySelector('#Glasses')
    const plant1 = document.querySelector('#Plant-1')
    const plant2 = document.querySelector('#Plant-2')
    const plant3 = document.querySelector('#Plant-3')
    const journal = document.querySelector('#Journal')
    const screenSaver = [mouse, laptop, monitorLeft, monitorRight, keyBoard]
    const growShrink = [glasses, plant1, plant2, plant3, journal]

    coffee.addEventListener('mouseenter', () => {
      anime({
        targets: '#Steam',
        opacity: 1,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
      })
    })

    keyBoard.addEventListener('mouseenter', () => {
      anime({
        targets: '#Terminal, #Website',
        opacity: 1,
        easing: 'easeInQuad'
      })

      anime({
        targets: '#Cursor',
        opacity: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
      })
    })

    keyBoard.addEventListener('mouseleave', () => {
      anime({
        targets: '#Terminal, #Website',
        opacity: 0,
        easing: 'easeInQuad'
      })
    })

    growShrink.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        anime({
          targets: item,
          easing: 'easeOutElastic',
          scale: 1.1
        })
      })

      item.addEventListener('mouseleave', () => {
        anime({
          targets: item,
          easing: 'easeOutElastic',
          scale: 1
        })
      })
    })

    screenSaver.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        anime({
          targets: '.screensaver',
          opacity: 1,
          easing: 'easeOutBounce'
        })
      })

      item.addEventListener('mouseleave', () => {
        anime({
          targets: '.screensaver',
          opacity: 0,
          easing: 'easeInSine'
        })
      })
    })
  }, [])

  return (
    <div className="section section-static setup" id="section3">
      <div className="row">
        <h2 className="section__title">Setup</h2>
        <DeskSetup />
      </div>
    </div>
  )
}

export default Setup
