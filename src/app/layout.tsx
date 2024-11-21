import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import '../index.css';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Skydan Dmytro',
  description: 'Portfolio Website for Skydan Dmytro',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'Skydan Dmytro',
    description: 'Portfolio Website',
    url: 'https://skydmytro.vercel.app/',
    images: [
      {
        url: 'https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/skydmytro.vercel.app/Skydan%20Dmytro/Portfolio%20website/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F3da578a1-6fcd-43d8-ae8e-f3fff78c73b6.png%3Ftoken%3DWedvKgGbQkFgZ0hb9e2BLTbXPWjPjNlnIabEvhAa8Gk%26height%3D625%26width%3D1200%26expires%3D33265524857/og.png',
        alt: 'Portfolio website image preview',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skydan Dmytro',
    description: 'Portfolio Website',
    images: [
      {
        url: 'https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/skydmytro.vercel.app/Skydan%20Dmytro/Portfolio%20website/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F3da578a1-6fcd-43d8-ae8e-f3fff78c73b6.png%3Ftoken%3DWedvKgGbQkFgZ0hb9e2BLTbXPWjPjNlnIabEvhAa8Gk%26height%3D625%26width%3D1200%26expires%3D33265524857/og.png',
        alt: 'Twitter image preview',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
