/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'

const Header = ({ isFixed }) => {
  const handleLinkClicks = (e) => {
    const elementRef = e.target.getAttribute('data-link')
    const scrollToElement = document.querySelector(elementRef)

    scrollToElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className={`header${isFixed ? ' header--fixed' : ''}`}>
      <div className="container">
        <span className="header__logo" />
        <ul className="header__links" onClick={(e) => handleLinkClicks(e)}>
          <li className="link btn btn--no-outline" data-link="#section1">
            Projects
          </li>
          <li className="link btn btn--no-outline" data-link="#section2">
            Skills
          </li>
          <li className="link btn btn--no-outline" data-link="#section3">
            Setup
          </li>
          <li className="link btn btn--no-outline" data-link="#section4">
            About
          </li>
          <li className="link btn btn--secondary" data-link="#section5">
            Contact Me
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
