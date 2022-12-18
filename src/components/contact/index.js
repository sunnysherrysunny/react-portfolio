import React from "react";
import { Mail } from "react-feather";

export default function ContactDetails() {
  return (
    <div className="w-full md:w-1/2">
      <div className="text-left max-w-xl px-6">
        <h2
          className="
          font-general-medium
          text-2xl text-primary-dark
          dark:text-primary-light
          mt-12
          mb-8
        "
        >
          Contact details
        </h2>
        <ul className="font-general-regular">
          <li className="flex">
            <i className="w-5 text-gray-500 dark:text-gray-400 mr-4">
              <Mail />
            </i>
            <a
              href="mailto:sunnyguan2018@gmail.com"
              className="
              text-lg
              mb-4
              text-primary-dark
              dark:text-primary-light
              hover:underline
              cursor-pointer
            "
              aria-label="Email"
            >
              sunnyguan2018@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
