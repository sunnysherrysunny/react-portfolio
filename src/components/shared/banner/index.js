import React from "react";
import { ArrowDownCircle } from "react-feather";
import developerLight from "../../../assets/images/developer-light.svg";

export default function Banner() {
  return (
    <section
      className="
      mt-12 flex
      flex-col
      items-center
      sm:mt-10
      sm:flex-row
      sm:justify-between
    "
    >
      {/* Banner left contents */}
      <div className="w-full text-left md:w-1/3">
        <h1
          className="
                    font-general-semibold
                    text-center
                    text-3xl
                    uppercase
                    text-primary-dark
                    dark:text-primary-light
                    sm:text-left
                    md:text-4xl
                    xl:text-4xl
                    "
        >
          Hi, I am Feiyang (Sunny)
        </h1>
        <p
          className="
                      font-general-medium
                      mt-2
                      text-center
                      text-lg
                      leading-none
                      text-gray-400
                      sm:text-left
                      sm:text-xl
                      xl:text-2xl
                      "
        >
          A Full-Stack Developer
        </p>
        <div className="flex justify-center sm:block">
          <a
            download="Feiyang (Sunny) Guan-Resume.pdf"
            href="/files/Feiyang (Sunny) Guan-Resume.pdf"
            className="
                        mt-12
                        mb-6
                        flex
                        w-36
                        items-center
                        justify-center
                        rounded-lg
                        bg-teal-600
                        py-2.5
                        text-lg
                        text-gray-100
                        shadow-lg
                        duration-500
                        hover:bg-teal-700
                        hover:text-gray-200
                        focus:ring-1
                        focus:ring-rose-600 dark:border-ternary-dark
                        dark:bg-cyan-100
                        dark:text-gray-500
                        dark:hover:bg-cyan-300
                        dark:hover:text-gray-700
                        sm:mb-0
                        sm:w-48
                        sm:py-3
                        "
            aria-label="Download Resume"
          >
            <i className="ml-0 mr-2 w-5 duration-100 sm:ml-1 sm:mr-3 sm:w-6">
              <ArrowDownCircle />
            </i>
            <span className="font-general-medium text-sm duration-100 sm:text-lg">
              Download CV
            </span>
          </a>
        </div>
      </div>

      {/* Banner right illustration */}
      <div className="float-right w-full text-right md:w-2/3">
        <img src={developerLight} alt="Developer" />
        {/* <img
            v-else
            src="@/assets/images/developer-dark.svg"
            alt="Developer"
          /> */}
      </div>
    </section>
  );
}
