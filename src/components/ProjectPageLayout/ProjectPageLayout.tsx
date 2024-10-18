import { ReactElement } from "react";
import { ProjectPageHeader } from "./ui/ProjectPageHeader";
import { ProjectPageProjectOverview } from "./ui/ProjectPageProjectOverview";
import { ProjectPageScreenshots } from "./ui/ProjectPageScreenshots";
import { ProjectPageKeyFeatures } from "./ui/ProjectPageKeyFeatures";
import { ProjectPageTechStack } from "./ui/ProjectPageTechStack";
import { ProjectType } from "../../types/types";
import { ProjectPageConclusion } from "./ui/ProjectPageConclusion";
import { ProjectPageFooter } from "./ui/ProjectPageFooter";

interface ProjectPageLayoutProps {
  project: ProjectType;
}

export const ProjectPageLayout = ({
  project: {
    description,
    githubUrl,
    keyFeatures,
    name: projectName,
    screenshots,
    techStack,
    url: projectUrl,
    conclusion,
  },
}: ProjectPageLayoutProps): ReactElement => (
  <div className="min-h-screen bg-darkBlue text-white">
    <ProjectPageHeader projectName={projectName} />
    <main className="container mx-auto px-4 py-8 text-lg">
      <ProjectPageProjectOverview
        projectDescription={description}
        projectUrl={projectUrl}
        githubUrl={githubUrl}
      />
      <ProjectPageScreenshots screenshots={screenshots} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <ProjectPageKeyFeatures features={keyFeatures} />
        <ProjectPageTechStack techStack={techStack} />
      </div>

      {conclusion && <ProjectPageConclusion conclusion={conclusion} />}
    </main>
    <ProjectPageFooter />
  </div>
);
