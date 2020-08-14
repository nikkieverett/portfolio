import React from 'react'

const ProjectCard = project => {
	const { date, name, subtitle, description, tech, tags } = project.project

	return (
    <div className="project row">
      <div className="col-sm-2">
        <div className="project__timeline">
          <div className="project__timeline-date">{date}</div>
        </div>
      </div>
      <div className="col-sm-10">
        <div className="project__card row" key={name}>
          <div className="col-sm-9">
            <div className="project__card-name">{name}</div>
            <div className="project__card-subtitle">{subtitle}</div>
            <div className="project__card-description">{description}</div>
            <div className="project__card-tech">{tech}</div>
            <button className="project__card-btn project__card-btn--showmore">Show More</button>
            <div className="project__card-tags">
              {tags.map((tag) => (
                <span className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="col-sm-3">
            <div className="project__card-image"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
