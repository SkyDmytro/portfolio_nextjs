'use client';

import { Skeleton } from '../components/ui/skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="flex items-center justify-between p-4">
        <Skeleton className="h-6 w-32" />
        <div className="flex gap-6">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-16" />
          ))}
        </div>
      </nav>

      <main className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
        <div className="fixed left-6 top-1/2 -translate-y-1/2 space-y-4">
          {[...Array(2)].map((_, i) => (
            <Skeleton key={i} className="h-8 w-8 rounded-full" />
          ))}
        </div>

        <div className="space-y-6">
          <Skeleton className="mx-auto h-12 w-96 max-w-full" />
          <Skeleton className="mx-auto h-16 w-[600px] max-w-full" />
        </div>
      </main>

      <div className="fixed bottom-6 right-6">
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </div>
  );
}
