import { Seo } from "@/components/Seo/Seo";
import { ProjectPageLayout } from "../components/ProjectPageLayout/ProjectPageLayout";
import { TypingTestProject } from "../helpers/constants";

export const TypingTestProjectPage = () => {
  const project = TypingTestProject;
  return (
    <>
      <Seo
        title="Typing Test Project"
        description="Typing Test Project Showcase"
        image="https://skydmytro.vercel.app/assets/TypingTestSeoPreview.png"
        imageAlt="Typing test image preview"
        url="https://skydmytro.vercel.app/"
      />
      <ProjectPageLayout project={project} />
    </>
  );
};
