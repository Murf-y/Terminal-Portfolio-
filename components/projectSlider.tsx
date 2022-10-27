import { Project } from '@models/project'
import React, { FC } from 'react'
import ProjectCard from './projectCard'

const projectSlider: FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <>
      {projects.map((p) => {
        return <ProjectCard project={p} />
      })}
    </>
  )
}

export default projectSlider
