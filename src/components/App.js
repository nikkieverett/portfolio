import React from 'react';

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <div className="header__container">
          <div className='logo'></div>
          <ul className='nav'>
            <li className='nav__item'>
              <button class='btn btn--secondary'>Projects</button>
            </li>
            <li className='nav__item'>
              <button class='btn btn--secondary'>About Me</button>
            </li>
            <li className='nav__item'>
              <button class='btn btn--secondary'>Skills</button>
            </li>
            <li className='nav__item'>
              <button class='btn btn--secondary'>My Setup</button>
            </li>
            <li className='nav__item'>
              <button class='btn btn--primary'>Contact Me</button>
            </li>
          </ul>
        </div>
      </div>
      <div className='container'>
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
              <button class='btn btn--secondary'>Contact Me</button>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='content'>
            <div className='content__image'></div>
          </div>
        </div>
      </div>
      <div className='wave wave--1'></div>
      <div className='wave wave--2'></div>
      <div className='wave wave--3'></div>
      <div className='wave wave--4'></div>
    </div>
  )
}

export default App;
