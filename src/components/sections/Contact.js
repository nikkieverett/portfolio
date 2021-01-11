import React, { useState } from 'react'

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <div className="section section-static contact" id="section5">
      <div className="row">
        <div className="col-sm-6">
          <h2 className="section__title">Let's build something cool together.</h2>
          <p className="section__text">
            Drop me a line with details
            <br />
            about your project and I'll get
            <br />
            back to you asap!
          </p>
        </div>
        <div className="col-sm-6">
          {formSubmitted && (
            <div className="thankyou">
              <h1>Thanks!</h1>
              <h2>I'll be in touch</h2>
            </div>
          )}
          {!formSubmitted && (
            <form method="post" encType="text/plain" action="mailto:nikki.everett@outlook.com" className="section__form">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" name="name" required placeholder="First and Last" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="text" name="email" required placeholder="email@domain.com" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="projectDetails" className="textarea-label">
                  Tell me about your project...
                </label>
                <textarea className="form-control textarea-label" required name="projectDetails" cols="30" rows="10" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt." />
              </div>
              <button type="submit" className="btn btn--secondary">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
