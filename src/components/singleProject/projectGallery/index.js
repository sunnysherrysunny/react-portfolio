import React from "react";
import { nanoid } from "nanoid";

export default function ProjectGallery(props) {
  const { galleryImages } = props;
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 sm:gap-10">
      {galleryImages.map((galleryImage) => {
        return (
          <div className="mb-10 sm:mb-0" key={nanoid()}>
            <img
              src={galleryImage}
              className="cursor-pointer rounded-xl shadow-lg sm:shadow-none"
              alt="galleryImage"
            />
          </div>
        );
      })}
    </div>
  );
}
