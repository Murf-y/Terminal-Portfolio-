import { Project } from '@models/project'
import React, { FC } from 'react'

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const getTagColor = () => {
    const colors = ['bg-red', 'bg-primary-greyish ', 'bg-yellow']
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
  }

  return (
    <div
      className="flex flex-col justify-betweenborder-primary border-4 rounded-md w-[14.5rem] md:w-72 h-80 shadow-primary shadow-xl cursor-pointer"
      onClick={() => {
        window.open(project.link, '_blank')
      }}
    >
      <div className="relative border-b-primary border-b-2 h-2/3 w-auto">
        <img
          src={project.image_path}
          alt={project.title}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="p-2 bg-blue-lighter flex flex-col flex-1 gap-4 justify-center items-start">
        <h2 className="text-primary-lighter text-xl">{project.title}</h2>
        <div className="flex flex-row gap-2">
          {project?.tags?.map((tag, i) => (
            <span
              key={tag + i}
              className={'text-blue rounded-xl text-base font-bold px-2 ' + getTagColor()}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
