import { starWarsProject } from "../helpers/constants";
import { ProjectPageLayout } from "../components/ProjectPageLayout/ProjectPageLayout";
import { Helmet } from "react-helmet-async";

export const StarWarsPage = () => {
  return (
    <>
      <Helmet>
        <title>Star Wars Data Base | Skydan Dmytro</title>
        <link
          rel="canonical"
          href="https://star-wars-database-tt.netlify.app/"
        />
        <meta
          name="description"
          content="Star Wars Data Base Showcase by Skydan Dmytro"
        />
        <meta name="robots" content="index,follow" />

        <meta property="og:title" content="Star Wars Data Base" />
        <meta
          property="og:description"
          content="Star Wars Data Base Showcase by Skydan Dmytro"
        />
        <meta
          property="og:url"
          content="https://star-wars-database-tt.netlify.app/"
        />
        <meta
          property="og:image"
          content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/Star%20Wars%20Data%20Base%20Showcase/Skydan%20Dmytro/Star%20Wars%20Data%20Base/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa028500a-45c7-499a-9bda-67dd2f5c61bb.png%3Ftoken%3D71ftTwmBXcraArlRCAOQXAVZHnHEO1sCIwDxfurmbfA%26h"
        />
        <meta
          property="og:image:alt"
          content="Star Wars Data Base image preview"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Skydan Dmytro" />
      </Helmet>
      {/* <Seo
        title="Star Wars Data Base"
        description="Star Wars Data Base Showcase by Skydan Dmytro"
        url="https://star-wars-database-tt.netlify.app/"
        image="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/Star%20Wars%20Data%20Base%20Showcase/Skydan%20Dmytro/Star%20Wars%20Data%20Base/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa028500a-45c7-499a-9bda-67dd2f5c61bb.png%3Ftoken%3D71ftTwmBXcraArlRCAOQXAVZHnHEO1sCIwDxfurmbfA%26height%3D625%26width%3D1200%26expires%3D33265525242/og.png"
        imageAlt="Star Wars Data Base image preview"
      /> */}
      <ProjectPageLayout project={starWarsProject} />;
    </>
  );
};
