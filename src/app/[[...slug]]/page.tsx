import { ClientOnly } from './client';

export function generateStaticParams() {
  return [
    { slug: [''] },
    { slug: ['typingTest'] },
    { slug: ['starWars'] },
    { slug: ['chat'] },
  ];
}

export default function Page() {
  return <ClientOnly />;
}
