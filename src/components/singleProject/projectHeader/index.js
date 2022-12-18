import React from "react";
import { Clock, Tag } from "react-feather";

export default function ProjectHeader(props) {
  const { projectSummary } = props;
  return (
    <div>
      {/* Project tile */}
      <p
        className="
                  font-general-medium
                  mt-14 mb-7
                  text-left
                  text-3xl
                  font-bold
                  text-primary-dark
                  dark:text-primary-light
                  sm:mt-20
                  sm:text-4xl
                  "
      >
        {projectSummary.title}
      </p>

      {/* Project date & category */}
      <div className="flex items-center">
        <div className="mr-10 flex items-center">
          <i
            className="
                      h-4 
                      w-4 
                      text-ternary-dark 
                      dark:text-ternary-light
                      "
          >
            <Clock size={16}/>
          </i>
          <span
            className="
                      font-general-medium
                      ml-2
                      leading-none
                      text-primary-dark
                      dark:text-primary-light
                      "
          >
            {projectSummary.date}
          </span>

          {/* display category only when it's defined */}
        </div>
        {projectSummary.category.trim() === "" ? (
          " "
        ) : (
          <div className="flex items-center">
            <i
              className="
                        h-4 
                        w-4 
                        text-ternary-dark 
                        dark:text-ternary-light
                        "
            >
              <Tag size={16}/>
            </i>
            <span
              className="
                        font-general-medium
                        ml-2
                        leading-none
                        text-primary-dark
                        dark:text-primary-light
                        "
            >
              {projectSummary.category}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
