import { ArrowRight, ChevronDown, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

import { gitHubLink, linkedInLink } from '../../helpers/constants';

export const HomePageNew = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="min-h-screen flex flex-col justify-center items-center relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Dmytro Skydan
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-4 text-zinc-300">
            Frontend Developer
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
            Building Scalable Web Applications
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg text-white font-medium hover:from-emerald-500 hover:to-cyan-500 transition-colors flex items-center justify-center"
            >
              View My Work
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 bg-transparent border border-zinc-700 hover:border-zinc-500 rounded-lg text-zinc-300 font-medium transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 animate-bounce">
          <ChevronDown size={24} />
        </div>
      </section>

      <div className="fixed left-6 bottom-0 flex flex-col items-center space-y-6">
        <Link
          href={gitHubLink}
          className="text-zinc-500 hover:text-white transition-colors"
        >
          <Github size={24} />
        </Link>
        <Link
          href={linkedInLink}
          className="text-zinc-500 hover:text-white transition-colors"
        >
          <Linkedin size={24} />
        </Link>
        <div className="w-px h-24 bg-zinc-700"></div>
      </div>
    </div>
  );
};
