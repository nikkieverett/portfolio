import React from 'react'

const About = () => {
  return (
    <div className="section section-static about" id="section4">
      <div className="row">
        <div className="col-sm-8">
          <h3 className="section__title">About Me</h3>
          <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.</p>
        </div>
        <div className="col-sm-4">
          <h3 className="section__title">Currently...</h3>
          <ul className="section__list">
            <li className="section__list-item">
              <b>Reading</b>
              <br />
              50 Shades of Grey
            </li>
            <li className="section__list-item">
              <b>Watching</b>
              <br />
              50 Shades of Grey
            </li>
            <li className="section__list-item">
              <b>Listening to</b>
              <br />
              50 Shades of Grey
            </li>
            <li className="section__list-item">
              <b>Playing</b>
              <br />
              50 Shades of Grey
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
