import React from "react";

export default function FooterCopyright() {
  return (
    <div
      className="
                  font-general-regular
                  flex-col
                  items-center
                  justify-center
                  text-center
                  text-sm
                  text-primary-dark 
                  dark:text-primary-light 
                  sm:text-lg
                  "
    >
      <div>
        <span>View source code </span>
        <a
          href="https://github.com/sunnysherrysunny/react-portfolio"
          target="_blank"
          rel="noreferrer"
          className="
                    font-general-medium
                    uppercase
                    text-gray-800
                    underline
                    duration-500
                    hover:text-teal-700
                    dark:text-gray-200
                    dark:hover:text-cyan-200
                    "
        >
          Here
        </a>
        <span>. </span>
      </div>
      <div>
        <span>Developed by </span>
        <a
          className="
                    font-general-medium uppercase 
                    text-gray-800 underline 
                    dark:text-gray-200
                    "
          href="https://github.com/sunnysherrysunny"
          target="_blank"
          rel="noreferrer"
        >
          Feiyang (Sunny) Guan
        </a>
        .
      </div>
    </div>
  );
}
