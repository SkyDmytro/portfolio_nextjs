import { ClientOnly } from './client';

export function generateStaticParams() {
  return [{ slug: [''] }, { slug: ['typingTest'] }, { slug: ['starWars'] }];
}

export default function Page() {
  return <ClientOnly />;
}
