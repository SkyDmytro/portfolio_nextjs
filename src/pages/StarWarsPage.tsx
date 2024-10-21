import { starWarsProject } from "../helpers/constants";
import { ProjectPageLayout } from "../components/ProjectPageLayout/ProjectPageLayout";
import { Seo } from "@/components/Seo/Seo";

export const StarWarsPage = () => {
  return (
    <>
      <Seo
        title="Star Wars Data Base"
        description="Star Wars Data Base Showcase by Skydan Dmytro"
        url="https://star-wars-database-tt.netlify.app/"
        image="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/Star%20Wars%20Data%20Base%20Showcase/Skydan%20Dmytro/Star%20Wars%20Data%20Base/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa028500a-45c7-499a-9bda-67dd2f5c61bb.png%3Ftoken%3D71ftTwmBXcraArlRCAOQXAVZHnHEO1sCIwDxfurmbfA%26height%3D625%26width%3D1200%26expires%3D33265525242/og.png"
        imageAlt="Star Wars Data Base image preview"
      />
      <ProjectPageLayout project={starWarsProject} />;
    </>
  );
};
