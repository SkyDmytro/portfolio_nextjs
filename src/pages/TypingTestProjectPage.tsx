import { ProjectPageLayout } from "../components/ProjectPageLayout/ProjectPageLayout";
import { TypingTestProject } from "../helpers/constants";
import { Helmet } from "react-helmet";

export const TypingTestProjectPage = () => {
  const project = TypingTestProject;
  return (
    <>
      <Helmet>
        <title>Typing Test Project</title>
        <meta
          name="description"
          content="Typing Test Project Showcase by Skydan Dmytro"
        />

        <meta property="og:url" content="https://skydmytro.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Typing Test Project" />
        <meta
          property="og:description"
          content="Typing Test Project Showcase by Skydan Dmytro"
        />
        <meta
          property="og:image"
          content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/Typing%20Test%20Showcase/Skydan%20Dmytro/Typing%20Test%20Projcet/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa028500a-45c7-499a-9bda-67dd2f5c61bb.png%3Ftoken%3D71ftTwmBXcraArlRCAOQXAVZHnHEO1sCIwDxfurmbfA%26height%3D625%26width%3D1200%26expires%3D33265525242/og.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="skydmytro.vercel.app" />
        <meta property="twitter:url" content="https://skydmytro.vercel.app/" />
        <meta name="twitter:title" content="Typing Test Project" />
        <meta
          name="twitter:description"
          content="Typing Test Project Showcase by Skydan Dmytro"
        />
        <meta
          name="twitter:image"
          content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/Typing%20Test%20Showcase/Skydan%20Dmytro/Typing%20Test%20Projcet/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa028500a-45c7-499a-9bda-67dd2f5c61bb.png%3Ftoken%3D71ftTwmBXcraArlRCAOQXAVZHnHEO1sCIwDxfurmbfA%26height%3D625%26width%3D1200%26expires%3D33265525242/og.png"
        />
      </Helmet>
      <ProjectPageLayout project={project} />
    </>
  );
};
