import React, { useState } from 'react'

import Waves from './Waves'

function App() {
  const [waves, setWaves] = useState([])

  return (
    <div className="app">
      <div className="header" waves={waves} />
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
      <Waves setWaves={setWaves} waves={waves} />
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
