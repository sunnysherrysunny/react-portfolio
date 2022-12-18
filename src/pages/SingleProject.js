import React from "react";
import { useParams } from "react-router-dom";
import ProjectHeader from "../components/singleProject/projectHeader";
import ProjectGallery from "../components/singleProject/projectGallery";
import ProjectInfo from "../components/singleProject/projectInfo";
import projectSummaries from "../data/projectSummaries";
import projectDetails from "../data/projectDetails";

export default function SingleProject() {
  const {projectIndex} = useParams()
  const projectSummary = projectSummaries[projectIndex]
  const projectDetail = projectDetails[projectIndex]

  return (
    <div className=" mt-10 sm:mt-20">
      {/* Project header  */}
      <ProjectHeader projectSummary={projectSummary} />

      {/* display galleryImages only when the path to images exists */}
      {projectSummary.galleryImg ? (
        <ProjectGallery galleryImages={projectSummary.galleryImg} />
      ) : (
        ""
      )}

      {/* Project information  */}
      <ProjectInfo projectDetail={projectDetail} />
    </div>
  );
}
