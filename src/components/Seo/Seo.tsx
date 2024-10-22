import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
  canonical?: string;
}

export const Seo = ({
  title,
  canonical,
  description,
  url,
  image,
  imageAlt,
}: SeoProps) => {
  return (
    <Helmet defer={false}>
      <title>{title} </title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Portfolio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
};
