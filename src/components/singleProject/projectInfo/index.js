import React from "react";
import { GitHub, Monitor } from "react-feather";

export default function ProjectInfo(props) {
  const { projectDetail } = props;
  const languageDto = projectDetail.language.join(", ");
  const techDto = projectDetail.tech.join(", ");
  return (
    <div className="mt-14 block gap-0 sm:flex sm:gap-10">
      <div className="w-full text-left sm:w-1/3">
        {/* project languages  */}
        {languageDto.trim() === "" ? (
          ""
        ) : (
          <div className="mb-7">
            <p
              className="
                        font-general-medium
                        mb-2 text-2xl
                        text-secondary-dark
                        dark:text-secondary-light
                        "
            >
              Language
            </p>
            <p
              className="
                          font-general-regular 
                          text-primary-dark 
                          dark:text-ternary-light
                          "
            >
              {languageDto}
            </p>
          </div>
        )}

        {/* tools and tech */}
        {techDto.trim() === "" ? (
          ""
        ) : (
          <div className="mb-7">
            <p
              className="
                        font-general-medium
                        mb-2 text-2xl
                        text-secondary-dark
                        dark:text-secondary-light
                        "
            >
              Tools & Technologies
            </p>
            <p
              className="
                          font-general-regular 
                          text-primary-dark 
                          dark:text-ternary-light
                          "
            >
              {techDto}
            </p>
          </div>
        )}

        <div className="mb-3">
          <span>
            {/* Source code button */}
            {projectDetail.src ? (
              <a href={projectDetail.src} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="
                            font-general-regular
                            mr-2
                            inline-flex
                            items-center
                            rounded-lg
                            bg-primary-dark
                            px-3
                            py-2
                            text-primary-light
                            shadow-lg
                            duration-300
                            hover:bg-primary-dark/90
                            hover:shadow-xl
                            dark:bg-primary-light
                            dark:text-primary-dark
                            dark:hover:bg-primary-light/90
                            "
                >
                  <i className="mr-2 h-4 w-4">
                    <GitHub size={16} />
                  </i>
                  Source code
                </button>
              </a>
            ) : (
              ""
            )}

            {/* Demo Button */}
            {projectDetail.demo ? (
              <a href={projectDetail.demo} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="
                            font-general-regular
                            inline-flex
                            items-center
                            rounded-lg
                            bg-teal-600
                            px-3
                            py-2
                            text-white
                            shadow-lg
                            duration-300
                            hover:bg-teal-700
                            hover:shadow-xl
                            dark:bg-cyan-100
                            dark:text-gray-500
                            dark:hover:bg-cyan-300
                            "
                >
                  <i className="mr-2 h-4 w-4">
                    <Monitor size={16} />
                  </i>
                  Live Demo
                </button>
              </a>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>

      {/* project description */}
      <div className="mt-10 w-full text-left sm:mt-0 sm:w-2/3">
        <p
          className="
          font-general-medium
          mb-7
          text-2xl
          font-bold
          text-primary-dark
          dark:text-primary-light
        "
        >
          Description
        </p>
        <p
          className="
                    font-general-regular
                    mb-5
                    text-lg text-primary-dark
                    dark:text-primary-light
                    "
        >
          {projectDetail.description}
        </p>
      </div>
    </div>
  );
}
