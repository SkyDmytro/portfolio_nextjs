'use client';

import { ArrowUp } from 'lucide-react';

export const ScrollButton = () => {
  const handleScrollOnTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      onClick={handleScrollOnTop}
      className="fixed bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-medium hover:from-emerald-500 hover:to-cyan-500 transition-colors sm:bottom-12 sm:right-5 md:bottom-5 md:right-5 h-8 w-8 cursor-pointer rounded-full flex items-center justify-center"
    >
      <ArrowUp className="w-5 h-5" />
    </div>
  );
};
