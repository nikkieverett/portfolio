import React from 'react'

const Header = (waves) => {
  return (
    <div className="header">
      <div className="container">
        <span className="header__logo" />
        <ul className="header__links">
          <li className="header__links-link">
            <a className="btn btn--no-outline" href="#section1">
              Projects
            </a>
          </li>
          <li className="header__links-link">
            <a className="btn btn--no-outline" href="#section1">
              About
            </a>
          </li>
          <li className="header__links-link">
            <a className="btn btn--no-outline" href="#section1">
              Skills
            </a>
          </li>
          <li className="header__links-link">
            <a className="btn btn--no-outline" href="#section1">
              Setup
            </a>
          </li>
          <li className="header__links-link">
            <a className="btn btn--secondary" href="#section1">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
