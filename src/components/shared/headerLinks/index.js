import React from "react";
import { Link } from "react-router-dom";

export default function HeaderLinks(props) {
  const { isOpen, toggleMenu } = props;
  return (
    <div>
      {/* Header links */}
      <div
        className={`
                  ${isOpen ? "block" : "hidden"}
                    m-0
                    mt-5
                    items-center
                    justify-center p-5
                    shadow-lg
                    sm:ml-4
                    sm:mt-3
                    sm:flex
                    sm:p-0
                    sm:shadow-none
                  `}
      >
        <Link
          to="/projects"
          className="
                    font-general-medium
                    mb-2
                    block text-left
                    text-lg
                    font-medium
                    text-primary-dark
                    hover:text-teal-600
                    dark:text-primary-light
                    dark:hover:text-cyan-100
                    sm:mx-4
                    sm:py-2
                    "
          aria-label="Projects"
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className="
                    font-general-medium
                    mb-2
                    block border-t-2
                    border-secondary-light
                    pt-3
                    text-left
                    text-lg
                    font-medium
                    text-primary-dark
                    hover:text-teal-600
                    dark:border-secondary-dark
                    dark:text-primary-light
                    dark:hover:text-cyan-100
                    sm:mx-4 sm:border-t-0
                    sm:py-2
                    sm:pt-2
                    "
          aria-label="About Me"
          onClick={toggleMenu}
        >
          About Me
        </Link>
        <Link
          to="/contact"
          className="
                    font-general-medium
                    mb-2
                    block border-t-2
                    border-secondary-light
                    pt-3
                    text-left
                    text-lg
                    font-medium
                    text-primary-dark
                    hover:text-teal-600
                    dark:border-secondary-dark
                    dark:text-primary-light
                    dark:hover:text-cyan-100
                    sm:mx-4 sm:border-t-0
                    sm:py-2
                    sm:pt-2
                    "
          aria-label="Contact"
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <div
          className="
                    border-t-2
                    border-secondary-light
                    pt-3 dark:border-secondary-dark
                    sm:border-t-0
                    sm:pt-0
                    "
        ></div>
      </div>
    </div>
  );
}
