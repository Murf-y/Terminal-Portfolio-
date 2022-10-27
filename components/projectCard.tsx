import { Project } from '@models/project'
import React, { FC } from 'react'

const ProjectCard : FC<{project: Project}> = ({project}) => {
    console.log(project)
  return (
    <div>{project.title}</div>
  )
}

export default ProjectCard