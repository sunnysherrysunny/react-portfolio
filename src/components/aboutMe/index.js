import React, { Fragment } from "react";
import "./index.css";
import experiences from "../../data/experiences";

function isLeftContainer(index) {
  if (index % 2 === 1) {
    return "timeline-container-left";
  }
}

function isLeftPointer(index) {
  if (index % 2 === 1) {
    return "timeline-pointer-left";
  }
}

export default function AboutMe() {
  return (
    <Fragment>
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div
          className="
                    absolute
                    z-0
                    w-2
                    h-full
                    bg-secondary-light
                    dark:bg-secondary-dark
                    shadow-md
                    inset-0
                    left-17
                    md:mx-auto md:right-0 md:left-0
                  "
        >
          <span></span>
        </div>

        {experiences.map((experience, index) => {
          return (
            <div className="relative z-10" key={experience.id}>
              {/* experience image */}
              <a href={experience.website}>
                <img
                  src={experience.imgSrc}
                  className="timeline-img"
                  alt="dummy"
                />
              </a>

              <div className={`${isLeftContainer(index)} timeline-container`}>
                <div
                  className={`${isLeftPointer(index)} timeline-pointer`}
                  aria-hidden="true"
                ></div>
                <div
                  className="
                            bg-neutral-100
                             dark:bg-secondary-dark
                              p-6 rounded-md 
                              shadow-md 
                              text-center"
                >
                  {/* Date */}
                  <span
                    className="
                                font-bold
                                text-ternary-dark
                                dark:text-ternary-light
                                text-md
                                tracking-wide
                              "
                  >
                    {experience.startDate}
                  </span>

                  {/* Title */}
                  <h1
                    className="
                                text-2xl
                                font-bold
                                text-secondary-dark
                                dark:text-primary-light
                                pt-1
                              "
                  >
                    {experience.title}
                  </h1>

                  {/* Details */}
                  {experience.detail.length === 1 ? (
                    <p
                      className="
                                  pt-1
                                  text-primary-dark
                                  dark:text-primary-light
                                  text-left
                                  xl:text-center
                                "
                    >
                      {experience.detail[0]}
                    </p>
                  ) : (
                    <Fragment>
                      {experience.detail.map((d, index) => {
                        return (
                          <li
                            className="
                                      pt-1
                                      text-primary-dark
                                      dark:text-primary-light
                                      text-left
                                      list-none
                                      "
                            key={index}
                          >
                            {d}
                          </li>
                        );
                      })}
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
