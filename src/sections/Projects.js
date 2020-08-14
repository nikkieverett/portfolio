import React, { useMemo } from 'react'

import ProjectCard from '../components/ProjectCard'

import projectData from '../data/projects'

const Projects = () => {
  const setProjects = () => {
    const projectsArr = projectData.map(project => (
        <ProjectCard project={project} key={project.name} />
      ))

    return projectsArr
  }

  const projects = useMemo(() => setProjects(), [])

  return (
    <div className="section-static">
      <div className="container">
        <div className="projects">
          {projects}
        </div>
      </div>
    </div>
  )
}

export default Projects
