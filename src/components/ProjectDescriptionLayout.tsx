import React from "react";
import { TechStack } from "./TechStack";

export interface ProjectDescriptionLayoutProps {
  children: React.ReactNode;
  title: string;
  projectUrl: string;
  techStack: string[];
}

export const ProjectDescriptionLayout: React.FC<
  ProjectDescriptionLayoutProps
> = ({
  children,
  title,
  projectUrl,
  techStack,
}: ProjectDescriptionLayoutProps) => {
  return (
    <div className="flex flex-col gap-5 max-w-2xl">
      <span className="font-bold">{title}</span>
      <TechStack techs={techStack} />
      <div className="max-w-2xl">{children}</div>
      <span className="font-bold">
        <a href={projectUrl}>Show More</a>
      </span>
    </div>
  );
};
