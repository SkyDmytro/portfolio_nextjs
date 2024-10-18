import { ProjectPageLayout } from "../components/ProjectPageLayout/ProjectPageLayout";
import {
  keyFeaturesTypingTest,
  keyTechnologiesTypingTestProject,
  descriptionTypingTestProject,
  typingTestOverviewScreenshots,
  conclusionTypingTestProject,
} from "../helpers/constants";
import { ProjectType } from "../types/types";

export const TypingTestProjectPage = () => {
  const project: ProjectType = {
    url: "https://skytype.vercel.app/",
    githubUrl: "https://github.com/SkyDmytro/typing_test",
    description: descriptionTypingTestProject,
    conclusion: conclusionTypingTestProject,
    name: "Typing Speed Training Web Application",
    screenshots: typingTestOverviewScreenshots,
    keyFeatures: keyFeaturesTypingTest,
    techStack: keyTechnologiesTypingTestProject,
  };
  return <ProjectPageLayout project={project} />;
};
