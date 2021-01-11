import React from 'react'

const Hero = () => {
  const handleLinkClicks = () => {
    const scrollToElement = document.querySelector('#section5')

    scrollToElement.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div className="hero section section-fixed">
      <div className="container">
        <div className="row flex-column-reverse">
          <div className="col-md-12 col-lg-6">
            <div className="hero__content">
              <div className="hero__title">
                <h1>
                  Hello, world!
                  <br />
                  I'm Nikki.
                </h1>
              </div>
              <div className="hero__subtitle">Front End Software Engineer & UX&nbsp;Developer</div>
              <div className="hero__btn">
                <button className="btn btn--secondary" type="button" onClick={handleLinkClicks}>
                  Contact Me
                </button>
              </div>
              <div className="hero__links">
                <a href="https://www.linkedin.com/in/nikki-everett-96881412a/" className="link link--linkedin" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/nikkieverett" className="link link--github" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://codepen.io/nikkieverett" className="link link--codepen" target="_blank" rel="noopener noreferrer">
                  CodePen
                </a>
                <a href="https://www.instagram.com/knikki_knack/" className="link link--instagram" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="hero__image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
