import { Seo } from "@/components/Seo/Seo";
import { ProjectPageLayout } from "../components/ProjectPageLayout/ProjectPageLayout";
import { mobileChatProject } from "../helpers/constants";
export const MobileChatPage = () => {
  return (
    <>
      <Seo
        title="Mobile Chat Project"
        description="Mobile Chat Project Showcase"
        image="https://skydmytro.vercel.app/assets/MobileChatSeoPreview.png"
        imageAlt="Mobile chat image preview"
        url="https://skydmytro.vercel.app/"
      />
      <ProjectPageLayout project={mobileChatProject} />;
    </>
  );
};
