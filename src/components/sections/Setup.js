import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es'

import { ReactComponent as DeskSetup } from '../../images/desk-space.svg'

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
    const fireScreenSaver = [mouse, laptop, monitorLeft, monitorRight, keyBoard]
    const fireWiggle = [glasses, plant1, plant2, plant3, journal]

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

    fireWiggle.forEach((item) => {
      let originalTranslateValue = item.getAttribute('transform')
      originalTranslateValue = originalTranslateValue.replace('translate(', '')
      originalTranslateValue = originalTranslateValue.replace(')', '')
      originalTranslateValue = originalTranslateValue.split(', ')
      console.log(originalTranslateValue[0])

      item.addEventListener('mouseenter', () => {
        anime({
          targets: item,
          scale: 1.2,
          translateX: originalTranslateValue[0],
          translateY: originalTranslateValue[1],
          easing: 'easeOutElastic',
          loop: 1,
          direction: 'alternate'
        })
      })
    })

    fireScreenSaver.forEach((item) => {
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
          easing: 'easeOutBounce'
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
