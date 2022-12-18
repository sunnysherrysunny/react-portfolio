import React from "react";
import ProjectCell from "../projectCell";
import projectSummaries from "../../../data/projectSummaries";

export default function ProjectGrid() {
  return (
    <section className="pt-10 sm:pt-14">
      {/* title: Projects */}
      <div className="text-center">
        <p
          className="
                    font-general-semibold
                    mb-12
                    text-4xl
                    font-semibold
                    text-primary-dark
                    dark:text-primary-light
                    md:text-5xl
                    "
        >
          Projects
        </p>
      </div>

      {/* Projects grid  */}
      <div
        className="
                  mt-6 
                  grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  sm:gap-10 
                  lg:grid-cols-3
                  "
      >
        {projectSummaries.map((project, index) => {
          return (
            <ProjectCell
              key={project.id}
              project={project}
              projectIndex={index}
            />
          );
        })}
      </div>
    </section>
  );
}
