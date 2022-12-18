import React from "react";
import ContactDetails from "../components/contact";

export default function Contact() {
  return (
    <div
      className="
                container
                mx-auto
                flex flex-col-reverse
                py-5
                md:mt-10
                md:flex-row md:py-10
                "
    >
      <ContactDetails />
    </div>
  );
}
