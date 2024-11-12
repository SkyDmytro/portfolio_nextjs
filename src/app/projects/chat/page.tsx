import { Metadata } from 'next';

import { ProjectPageLayout } from '../../../components/ProjectPageLayout/ProjectPageLayout';
import { mobileChatProject } from '../../../helpers/constants';

export const metadata: Metadata = {
  title: 'Chat App Project',
  description:
    'Educational messaging platform designed to facilitate seamless communication, built with React Native and WebSockets.',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'Chat App Project',
    description:
      'Educational messaging platform designed to facilitate seamless communication, built with React Native and WebSockets.',
    url: 'https://skytype.vercel.app/projects/chat',
    images: [
      {
        url: 'https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/skytype.vercel.app/Chat%20App%20Project/Educational%20messaging%20platform/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F3da578a1-6fcd-43d8-ae8e-f3fff78c73b6.png%3Ftoken%3DWedvKgGbQkFgZ0hb9e2BLTbXPWjPjNlnIabEvhAa8Gk%26height%3D625%26width%3D1200%26expires%3D33265524857/og.png',
        alt: 'Chat App Project image preview',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chat App Project',
    description:
      'Educational messaging platform designed to facilitate seamless communication, built with React Native and WebSockets.',
    images: [
      {
        url: 'https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/skytype.vercel.app/Chat%20App%20Project/Educational%20messaging%20platform/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F3da578a1-6fcd-43d8-ae8e-f3fff78c73b6.png%3Ftoken%3DWedvKgGbQkFgZ0hb9e2BLTbXPWjPjNlnIabEvhAa8Gk%26height%3D625%26width%3D1200%26expires%3D33265524857/og.png',
        alt: 'Twitter image preview',
      },
    ],
  },
};
const page = () => {
  return <ProjectPageLayout project={mobileChatProject} />;
};
export default page;
