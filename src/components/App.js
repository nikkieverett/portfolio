import React, { useEffect, useRef } from 'react'

import Waves from './Waves'

function App() {
  const $app = useRef(null)

  // useEffect(() => {
  //   // Set up vars
  //   const sections = document.querySelectorAll('.section')
  //   const sectionsY = []

  //   // Cache position of each panel
  //   sections.forEach((el) => {
  //     sectionsY.push(el.offsetTop)
  //   })

  //   // Update the window
  //   function updateWindow() {
  //     console.log(window)
  //     var y = $app.scrollTop
  //     var i;
  //     var l;
  //     console.log(y)

  //     // Loop through our section positions
  //     for (i = 0, l = sections.length; i < l; i++) {
  //       /*
  //           Firstly, we break if we're checking our last section,
  //           otherwise we compare if he y position is in between
  //           two panels
  //       */

  //       if (i === l - 1 || (y >= sectionsY[i] && y <= sectionsY[i + 1])) {
  //         break
  //       }
  //     }

  //     // Update classes
  //     // sections.forEach((section) => {
  //     //   section.classList.remove('section-fixed')
  //     // })
  //     // sections[i].classList.add('section-fixed')
  //   }

  //   // Bind our function to window scroll
  //   $app.current.addEventListener('scroll', () => {
  //     updateWindow()
  //   })
  // }, [])

  return (
    <div className="app" ref={$app}>
      <div className="header" />
      <div className="section section-placeholder" />
      <div className="section section-fixed">
        <div className="section-inner">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="content">
                  <div className="content__title">
                    <h1>
                      Hello, world! <span className="wave-hello" />
                    </h1>
                    <h1>I'm Nikki.</h1>
                  </div>
                  <div className="content__subtitle">
                    <p>
                      Front End Software Engineer
                      <br />
                      && UX Developer
                    </p>
                  </div>
                  <div className="content__btn">
                    <button className="btn btn--secondary" type="button">
                      Contact Me
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="content">
                  <div className="content__image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Waves />
      <div className="section">
        <h1>Section 2</h1>
      </div>
      <div className="section">
        <h1>Section 3</h1>
      </div>
      <div className="section">
        <h1>Section 4</h1>
      </div>
    </div>
  )
}

export default App
