import { Seo } from "@/components/Seo/Seo";
import { ProjectPageLayout } from "../components/ProjectPageLayout/ProjectPageLayout";
import { mobileChatProject } from "../helpers/constants";
export const MobileChatPage = () => {
  return (
    <>
      <Seo
        title="Mobile Chat Project"
        description="Mobile Chat Project Showcase"
        image="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/Typing%20Test%20Showcase/Skydan%20Dmytro/Typing%20Test%20Projcet/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa68be212-d9d4-4326-98f7-37661db56ba1.png%3Ftoken%3DyPVRqt9JEbohyfm0V8cE55StrYN0j-g7JcRWyvHOAFs%26height%3D625%26width%3D1200%26expires%3D33265525242/og.png"
        imageAlt="Mobile chat image preview"
        url="https://skydmytro.vercel.app/"
      />
      <ProjectPageLayout project={mobileChatProject} />;
    </>
  );
};
