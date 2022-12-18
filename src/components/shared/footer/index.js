import React, { Fragment } from "react";
import { GitHub, Linkedin, Film, Code } from "react-feather";
import FooterCopyright from "../footerCopyright";

export default function Footer() {
  const socials = [
    {
      id: "QcnueoKztfOGAfLv5Z0ic",
      name: "GitHub",
      icon: "GitHub",
      url: "https://github.com/sunnysherrysunny",
    },
    {
      id: "HLOb-KTkinXfj4Ah-_Tbf",
      name: "Linkedin",
      icon: "Linkedin",
      url: "https://www.linkedin.com/in/feiyang-guan",
    },
    {
      id: "_aaswTHC2HTS2aL4P9axr",
      name: "Bangumi",
      icon: "Film",
      url: "https://bgm.tv/user/634782",
    },
    {
      id: "xd0Ljws_hn4ICX5nQQS1k",
      name: "Leetcode",
      icon: "Code",
      url: "https://leetcode.com/sunnysherrysunny/",
    },
  ];

  // return feather-icons based on index
  function getIcon(index) {
    switch (index) {
      case 0:
        return <GitHub />;
      case 1:
        return <Linkedin />;
      case 2:
        return <Film />;
      default:
        return <Code />;
    }
  }

  return (
    <Fragment>
      <div className="container mx-auto">
        <div
          className="
                    sm:pt-15
                    mt-10
                    border-t-2
                    border-secondary-light
                    pt-10 pb-4
                    dark:border-secondary-dark
                    "
        >
          {/* Footer social links  */}
          <div className="mb-5 flex flex-col items-center justify-center sm:mb-10">
            <p
              className="
                        font-general-semibold
                        mb-5
                        text-3xl
                        font-semibold
                        text-primary-dark
                        dark:text-primary-light
                        sm:text-4xl
                        "
            >
              Follow me
            </p>
            <div className="flex gap-4 sm:gap-8">
              {socials.map((social, index) => {
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                              cursor-pointer
                              rounded-lg
                              bg-primary-light
                              p-4
                              text-gray-400
                              shadow-sm
                              duration-500
                              hover:bg-gray-100
                              hover:text-teal-600
                              dark:bg-primary-dark
                              dark:hover:text-cyan-100
                              "
                  >
                    <i className="h-5 w-5 sm:h-8 sm:w-8">{getIcon(index)}</i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <FooterCopyright />
      </div>
    </Fragment>
  );
}
