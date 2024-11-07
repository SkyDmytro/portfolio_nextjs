import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  url: string;
}

export const Seo = ({ title, description, url }: SeoProps) => {
  return (
    <Helmet defer={false}>
      <title>{title} </title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
    </Helmet>
  );
};
