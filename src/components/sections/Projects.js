import React, { useMemo } from 'react'

import ProjectCard from '../ProjectCard'

import projectData from '../../data/projects'

const Projects = () => {
  const setProjects = () => {
    const projectsArr = projectData.map((project) => <ProjectCard project={project} key={project.name} />)

    return projectsArr
  }

  const projects = useMemo(() => setProjects(), [])

  return (
    <div className="section section-static projects fp-auto-height">
      <div className="row-container">
        <div className="projects__container">
          <div className="project row">
            <div className="col-sm-2">
              <div className="project__timeline">
                <div className="project__timeline-date">PRESENT</div>
              </div>
            </div>
            <div className="col-sm-10" />
          </div>
          {projects}
          <div className="project row">
            <div className="col-sm-2">
              <div className="project__timeline" />
            </div>
            <div className="col-sm-10">
              <button className="projects__btn" type="button">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
