import { Metadata } from 'next';

import { ProjectPageLayout } from '../../../components/ProjectOverviewPageLayout/ProjectPageLayout';
import { TypingTestProject } from '../../../helpers/constants';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Typing Test Project',
  description:
    'Typing speed training web application inspired by MonkeyType, built with React, TypeScript, and Vite',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'Typing Test Project',
    description:
      'Typing speed training web application inspired by MonkeyType, built with React, TypeScript, and Vite',
    url: 'https://skytype.vercel.app/projects/typingTest',
    images: [
      {
        url: 'https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/skytype.vercel.app/Typing%20Test%20Project/Typing%20speed%20training%20web%20application/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F3da578a1-6fcd-43d8-ae8e-f3fff78c73b6.png%3Ftoken%3DWedvKgGbQkFgZ0hb9e2BLTbXPWjPjNlnIabEvhAa8Gk%26height%3D625%26width%3D1200%26expires%3D33265524857/og.png',
        alt: 'Typing Test Project image preview',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Typing Test Project',
    description:
      'Typing speed training web application inspired by MonkeyType, built with React, TypeScript, and Vite',
    images: [
      {
        url: 'https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/skytype.vercel.app/Typing%20Test%20Project/Typing%20speed%20training%20web%20application/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F3da578a1-6fcd-43d8-ae8e-f3fff78c73b6.png%3Ftoken%3DWedvKgGbQkFgZ0hb9e2BLTbXPWjPjNlnIabEvhAa8Gk%26height%3D625%26width%3D1200%26expires%3D33265524857/og.png',
        alt: 'Twitter image preview',
      },
    ],
  },
};
const TypingTestProjectPage = () => {
  const project = TypingTestProject;
  return (
    <>
      <ProjectPageLayout project={project} />
    </>
  );
};

export default TypingTestProjectPage;
