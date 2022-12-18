import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import lightLogo from "../../../assets/images/logo.png";
import HeaderLinks from "../headerLinks";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  // console.log(isOpen)

  function toggleMenu () {
    setOpen(!isOpen)
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
          {/* Header menu links and small screen hamburger menu */}
          <div className="flex items-center justify-between px-4 sm:px-0">
            {/* Header logos */}
            <div>
              <Link to="/">
                <img src={lightLogo} className="w-36" alt="Light Logo" />
              </Link>
            </div>

            <div className="flex items-center justify-between">
              {/* Theme switcher small screen*/}

              {/* Small screen hamburger menu */}
              <div className="sm:hidden">
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

          {/* Header right section buttons */}
          <div className="hidden flex-col items-center justify-between sm:flex md:flex-row"></div>
        </div>
      </nav>
    </Fragment>
  );
}
