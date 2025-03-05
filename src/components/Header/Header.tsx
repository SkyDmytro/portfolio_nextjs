'use client';

import Link from 'next/link';
import { ReactElement, useState } from 'react';

export const Header = (): ReactElement => {
  const [currentLocation, setCurrentLocation] = useState('home');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Skydan Dmytro
        </Link>
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Projects', 'Contact'].map(item => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setCurrentLocation(item.toLowerCase())}
              className={`text-zinc-400 hover:text-white transition-colors relative group ${
                item.toLowerCase() === currentLocation.slice(1)
                  ? 'text-white'
                  : ''
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ${
                  item.toLowerCase() === currentLocation
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-zinc-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};
