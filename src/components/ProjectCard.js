import React, { useRef, useState } from 'react'
import anime from 'animejs/lib/anime.es'

const ProjectCard = project => {
  const { date, name, subtitle, description, tech, tags, id, link } = project.project
  const [descriptionVisible, setDescriptionVisible] = useState(false)
  const $descriptionContainer = useRef(null)
  const $descriptionText = useRef(null)

  const toggleShowMore = () => {
    if (descriptionVisible) {
      const timeline = anime.timeline({
        targets: `[data-text-container=${id}-text]`,
        easing: 'easeInExpo',
        duration: 450
      })

      anime()

      timeline
        .add({
          targets: `[data-card-image=${id}-image]`,
          scale: 1
        })
        .add(
          {
            opacity: 0
          },
          -100
        )
        .add(
          {
            height: 0
          },
          100
        )
    } else {
      anime({
        targets: `[data-text-container=${id}-text]`,
        height: $descriptionText.current.offsetHeight,
        opacity: 1
      })

      anime({
        targets: `[data-card-image=${id}-image]`,
        scale: 1.2
      })
    }

    setDescriptionVisible(!descriptionVisible)
  }

	return (
    <div className="project row">
      <div className="col-sm-2">
        <div className="project__timeline">
          <div className="project__timeline-date">{date}</div>
        </div>
      </div>
      <div className="col-sm-10">
        <div className="project__card row" key={name}>
          <div className="col-sm-7">
            <div className="project__card-name">{name}</div>
            <div className="project__card-subtitle">{subtitle}</div>
            <div className="project__card-description" ref={$descriptionContainer} data-text-container={id + '-text'}>
              <div className="text" ref={$descriptionText} data-textbox={id + '-text'}>
                {description}
                <div className="project__card-tech">{tech}</div>
              </div>
            </div>
            <button className={`project__card-btn ${descriptionVisible ? 'project__card-btn--showless' : 'project__card-btn--showmore'}`} onClick={toggleShowMore}>
              {descriptionVisible ? 'Show Less' : 'Show More'}
            </button>
            <div className="project__card-tags">
              {tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="col-sm-5">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="project__card-image" data-card-image={id + '-image'}>
                <img src={`./projects/${id}.png`} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
