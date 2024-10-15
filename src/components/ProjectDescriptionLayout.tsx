import { ReactNode } from "react";
import { TechStack } from "./TechStack";

export interface ProjectDescriptionLayoutProps {
  children: ReactNode;
  title: string;
  projectUrl: string;
  techStack: string[];
}

export const ProjectDescriptionLayout = ({
  children,
  title,
  projectUrl,
  techStack,
}: ProjectDescriptionLayoutProps) => {
  return (
    <div className="flex flex-col gap-5 max-w-2xl hover-animation text-lg">
      <span className="font-bold">{title}</span>
      <TechStack techs={techStack} />
      <div className="max-w-2xl">{children}</div>
      <div className="bg-lightBlue py-2 px-4 rounded-xl w-fit font-bold hover:bg-primaryFont hover:text-blue transition duration-500 bg-opacity-75">
        <a href={projectUrl} target="_blank" className="opacity-100">
          <span className="opacity-100">Show Project</span>
        </a>
      </div>
    </div>
  );
};
