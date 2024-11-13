import { Metadata } from 'next';

import { ProjectPageLayout } from '../../../components/ProjectOverviewPageLayout/ProjectPageLayout';
import { starWarsProject } from '../../../helpers/constants';

export const metadata: Metadata = {
  title: 'Star Wars Project',
  description:
    'Interactive Star Wars Database with infinite scroll and hero connections displayed as a graph, built with React, TypeScript, and Vite',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'Star Wars Project',
    description:
      'Interactive Star Wars Database with infinite scroll and hero connections displayed as a graph, built with React, TypeScript, and Vite',
    url: 'https://skytype.vercel.app/projects/starWars',
    images: [
      {
        url: 'https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/skytype.vercel.app/Star%20Wars%20Project/Interactive%20Star%20Wars%20Database/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F3da578a1-6fcd-43d8-ae8e-f3fff78c73b6.png%3Ftoken%3DWedvKgGbQkFgZ0hb9e2BLTbXPWjPjNlnIabEvhAa8Gk%26height%3D625%26width%3D1200%26expires%3D33265524857/og.png',
        alt: 'Star Wars Project image preview',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star Wars Project',
    description:
      'Interactive Star Wars Database with infinite scroll and hero connections displayed as a graph, built with React, TypeScript, and Vite',
    images: [
      {
        url: 'https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/skytype.vercel.app/Star%20Wars%20Project/Interactive%20Star%20Wars%20Database/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F3da578a1-6fcd-43d8-ae8e-f3fff78c73b6.png%3Ftoken%3DWedvKgGbQkFgZ0hb9e2BLTbXPWjPjNlnIabEvhAa8Gk%26height%3D625%26width%3D1200%26expires%3D33265524857/og.png',
        alt: 'Twitter image preview',
      },
    ],
  },
};

const page = () => {
  return <ProjectPageLayout project={starWarsProject} />;
};

export default page;
