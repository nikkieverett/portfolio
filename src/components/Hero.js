import React from 'react'

const Hero = () => {
  return (
    <div className="hero section section-fixed">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="hero__content">
              <div className="hero__title">
                <h1>
                  Hello, world! <span className="hero__icon" />
                </h1>
                <h1>I'm Nikki.</h1>
              </div>
              <div className="hero__subtitle">
                <p>Front End Software Engineer & UX Developer</p>
              </div>
              <div className="hero__btn">
                <button className="btn btn--primary" type="button">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="hero__image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
