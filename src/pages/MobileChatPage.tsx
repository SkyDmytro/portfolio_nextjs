import { ProjectPageLayout } from "../components/ProjectPageLayout/ProjectPageLayout";
import { mobileChatProject } from "../helpers/constants";
import { Helmet } from "react-helmet-async";
export const MobileChatPage = () => {
  return (
    <>
      <Helmet>
        <title>Mobile Chat App | Skydan Dmytro</title>
        <link rel="canonical" href="https://skydmytro.vercel.app/chat" />
        <meta
          name="description"
          content="Mobile Chat App Showcase by Skydan Dmytro"
        />
        <meta name="robots" content="index,follow" />

        <meta property="og:title" content="Mobile Chat App" />
        <meta
          property="og:description"
          content="Mobile Chat App Showcase by Skydan Dmytro"
        />
        <meta
          property="og:url"
          content="https://skydmytro.vercel.app/mobile-chat-app"
        />

        <meta property="og:image:alt" content="Mobile Chat App image preview" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Skydan Dmytro" />
      </Helmet>
      {/* <Seo
        title="Mobile Chat Project"
        description="Mobile Chat Project Showcase"
        image="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/Typing%20Test%20Showcase/Skydan%20Dmytro/Typing%20Test%20Projcet/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa68be212-d9d4-4326-98f7-37661db56ba1.png%3Ftoken%3DyPVRqt9JEbohyfm0V8cE55StrYN0j-g7JcRWyvHOAFs%26height%3D625%26width%3D1200%26expires%3D33265525242/og.png"
        imageAlt="Mobile chat image preview"
        url="https://skydmytro.vercel.app/"
      /> */}
      <ProjectPageLayout project={mobileChatProject} />;
    </>
  );
};
