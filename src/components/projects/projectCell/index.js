import React from 'react'
import {Link} from "react-router-dom"


export default function ProjectCell(props) {
  const {project, projectIndex} = props
  return (
    <Link
    to={`/projects/single-project/${projectIndex}`}
    className="
      rounded-xl
      shadow-lg
      hover:shadow-xl
      cursor-pointer
      mb-10
      sm:mb-0
      bg-secondary-light
      dark:bg-secondary-dark
    "
    aria-label="Single Project"
  >
   {/* Project's display image */}
    <div>
      <img
        src={project.displayImg}
        alt={project.title}
        className="rounded-t-xl border-none"
      />
    </div>
    {/* Project's title and category */}
    <div className="text-center px-4 py-6">
      <p
        className="
          font-general-semibold
          text-xl text-primary-dark
          dark:text-primary-light
          font-semibold
          mb-2
        "
      >
        { project.title }
      </p>
      <span
        className="
          font-general-medium
          text-lg text-primary-dark
          dark:text-primary-light
        "
        >{ project.category }</span
      >
    </div>
  </Link>
  )
}



