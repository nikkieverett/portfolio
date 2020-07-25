import React from 'react';

import Waves from './Waves'

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <div className="header__container">
          <div className='logo'></div>
          <ul className='nav'>
            <li className='nav__item'>
              <button className='btn btn--secondary'>Projects</button>
            </li>
            <li className='nav__item'>
              <button className='btn btn--secondary'>About Me</button>
            </li>
            <li className='nav__item'>
              <button className='btn btn--secondary'>Skills</button>
            </li>
            <li className='nav__item'>
              <button className='btn btn--secondary'>My Setup</button>
            </li>
            <li className='nav__item'>
              <button className='btn btn--primary'>Contact Me</button>
            </li>
          </ul>
        </div>
      </div>
      <div className='parallax-container'>
        <div className="row">
          <div className='col'>
            <div className='content'>
              <div className='content__title'>
                <h1>
                  Hello, world! <span className='wave-hello'></span>
                </h1>
                <h1>I'm Nikki.</h1>
              </div>
              <div className='content__subtitle'>
                <p>
                  Front End Software Engineer
                  <br />
                  && UX Developer
                </p>
              </div>
              <div className='content__btn'>
                <button className='btn btn--secondary'>Contact Me</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='content'>
              <div className='content__image'></div>
            </div>
          </div>
        </div>
      </div>
    <Waves />
    </div>
  )
}

export default App;
