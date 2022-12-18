import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "react-feather";

import lightLogo from "../../../assets/images/logo.png";
import HeaderLinks from "../headerLinks";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  // console.log(isOpen)

  function toggleMenu() {
    setOpen(!isOpen);
  }

  return (
    <Fragment>
      <nav id="nav" className="sm:mx-auto">
        {/* Header start */}
        <div
          className=" 
                    z-10
                    my-6
                    block
                    max-w-screen-lg
                    sm:flex sm:items-center sm:justify-between
                    xl:max-w-screen-xl
                    "
        >
          <div className="flex items-center justify-between px-4 max-sm:hidden sm:px-0">
            <Link to="/">
              <img src={lightLogo} className="w-36" alt="Light Logo" />
            </Link>
          </div>
          {/* Header menu links and small screen hamburger menu */}
          <div className="flex items-center justify-between px-4 sm:hidden sm:px-0">
            {/* Header logos */}
            <div className="flex items-center px-2 sm:px-0">
              <Link to="/">
                <img src={lightLogo} className="w-36" alt="Light Logo" />
              </Link>
            </div>

            <div className="flex items-center justify-between">
              {/* Small screen hamburger menu */}
              <div>
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="ml-1 focus:outline-none"
                  aria-label="Hamburger Menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="
                              h-7 
                              w-7 
                              fill-current 
                              text-secondary-dark 
                              dark:text-secondary-light
                    "
                  >
                    {isOpen ? (
                      <path
                        fillRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        clipRule="evenodd"
                      ></path>
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      ></path>
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Header links */}
          <HeaderLinks isOpen={isOpen} toggleMenu={toggleMenu} />
          <div className="flex justify-center space-x-2">
            <a
              href="https://github.com/sunnysherrysunny/react-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="
                          flex
                          w-40
                          items-center
                          justify-center
                          rounded-lg
                          bg-teal-600
                          py-2
                          text-lg
                          text-gray-100
                          shadow-lg
                          duration-500
                          hover:bg-teal-700
                          hover:text-gray-200
                          dark:border-ternary-dark
                          dark:bg-cyan-100
                          dark:text-gray-500
                          dark:hover:bg-cyan-300
                          dark:hover:text-gray-700
                          max-sm:hidden
                          xl:w-44
                          "
              >
                <span className="
                                font-general-medium 
                                pr-3 
                                text-sm 
                                duration-100 
                                sm:text-lg
                                ">
                  Source code
                </span>
                <i>
                  <ArrowUpRight size={24} />
                </i>
              </button>
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
