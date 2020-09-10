/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'

const Header = () => {
  const handleLinkClicks = (e) => {
    const elementRef = e.target.getAttribute('data-link')
    // fullpage_api.moveTo(elementRef)
  }

  return (
    <div className="header">
      <div className="container">
        <span className="header__logo" />
        <ul className="header__links" onClick={(e) => handleLinkClicks(e)}>
          <li className="link btn btn--no-outline" data-link="section1">
            Projects
          </li>
          <li className="link btn btn--no-outline" data-link="section2">
            About
          </li>
          <li className="link btn btn--no-outline" data-link="section3">
            Skills
          </li>
          <li className="link btn btn--no-outline" data-link="section4">
            Setup
          </li>
          <li className="link btn btn--secondary" data-link="section5">
            Contact Me
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
