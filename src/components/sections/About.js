import React from 'react'

const About = () => {
  return (
    <div className="section section-static about" id="section4">
      <div className="row">
        <div className="col-sm-8">
          <h3 className="section__title">About Me</h3>
          <p className="section__text">
            I’m a Texas-based front-end developer currently working as a UI Engineer at Modernize Home Services. I have a genuine passion for building user-facing products and I'm very fond of the little details that make using the web fun. I like interactivity, accessibility, UI & UX, as well as performant code and semantic markup. I’ve spent just over 4 years solving problems with web technologies and I’m always interested in finding new ways to develop challenging and innovative web products.
          </p>
        </div>
        <div className="col-sm-4">
          <h3 className="section__title">Currently...</h3>
          <ul className="section__list">
            <li className="section__list-item">
              <b>Reading</b>
              <br />
              Fire & Blood by George R. R. Martin
            </li>
            <li className="section__list-item">
              <b>(re)Watching</b>
              <br />
              Six Feet Under
            </li>
            <li className="section__list-item">
              <b>Listening to</b>
              <br />
              Syntax hosted by<br />Scott Tolinski and Wes Bos
            </li>
            <li className="section__list-item">
              <b>Playing</b>
              <br />
              Terraforming Mars
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
