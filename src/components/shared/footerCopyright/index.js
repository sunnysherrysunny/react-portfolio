import React from "react";

export default function FooterCopyright() {
  return (
    <div className="flex items-center justify-center text-center">
      <div
        className="
                  font-general-regular
                  text-sm 
                  text-primary-dark
                  dark:text-primary-light
                  sm:text-lg
                  "
      >
        <span>View source code </span>
        <a
          href="https://github.com/sunnysherrysunny/sunny-portfolio"
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
        <span>. Developed by </span>
        <span className="font-general-medium uppercase text-gray-800 dark:text-gray-200">
          Sunny Guan
        </span>
        .
      </div>
    </div>
  );
}
