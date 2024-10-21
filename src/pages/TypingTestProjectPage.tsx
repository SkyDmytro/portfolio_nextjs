import { Seo } from "@/components/Seo/Seo";
import { ProjectPageLayout } from "../components/ProjectPageLayout/ProjectPageLayout";
import { TypingTestProject } from "../helpers/constants";

export const TypingTestProjectPage = () => {
  const project = TypingTestProject;
  return (
    <>
      <Seo
        imageAlt="Typing Test image preview"
        title="Typing Test Project"
        description="Typing Test Project Showcase by Skydan Dmytro"
        url="https://skydmytro.vercel.app/"
        image="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/Typing%20Test%20Showcase/Skydan%20Dmytro/Typing%20Test%20Projcet/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa028500a-45c7-499a-9bda-67dd2f5c61bb.png%3Ftoken%3D71ftTwmBXcraArlRCAOQXAVZHnHEO1sCIwDxfurmbfA%26height%3D625%26width%3D1200%26expires%3D33265525242/og.png"
      />
      <ProjectPageLayout project={project} />
    </>
  );
};
