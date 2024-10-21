import { starWarsProject } from "../helpers/constants";
import { ProjectPageLayout } from "../components/ProjectPageLayout/ProjectPageLayout";
import { Seo } from "@/components/Seo/Seo";

export const StarWarsPage = () => {
  return (
    <>
      <Seo
        title="Star Wars Project"
        description="Star Wars Project Showcase"
        image="https://skydmytro.vercel.app/assets/StarWarsSeoPreview.png"
        imageAlt="Star Wars image preview"
        url="https://skydmytro.vercel.app/"
      />
      <ProjectPageLayout project={starWarsProject} />;
    </>
  );
};
