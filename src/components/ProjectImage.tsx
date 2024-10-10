import React from "react";

export interface ProjectImageProps {
  ProjectImageIcon: string;
}

export const ProjectImage = ({ ProjectImageIcon }: ProjectImageProps) => (
  <div className="w-[400px] h-[250px] flex justify-center">
    <img src={ProjectImageIcon} alt="project image" />
  </div>
);
