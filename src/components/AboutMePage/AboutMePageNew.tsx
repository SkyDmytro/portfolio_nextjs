import {
  ChevronDown,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
} from 'lucide-react';
import Link from 'next/link';

import { cvLink, gitHubLink, linkedInLink } from '../../helpers/constants';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-20"></div>
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              ABOUT ME
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
            <div className="mt-12">
              <a
                href="#content"
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span className="mr-2">Explore more</span>
                <ChevronDown size={18} className="animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="content" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* About Me */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-1 h-8 bg-emerald-400"></div>
                <h2 className="text-3xl font-bold">Get to know me!</h2>
              </div>

              <div className="space-y-6 text-zinc-300">
                <p className="leading-relaxed">
                  Hello! I'm a Ukrainian Frontend Web Developer living in
                  Poland. I love creating websites and web applications that are
                  both attractive and easy to use. My main focus is on the front
                  end, where I enjoy turning ideas into functional online
                  experiences.
                </p>
                <p className="leading-relaxed">
                  I'm always keeping up with the latest trends to expand my
                  skills and knowledge. I'm passionate about tackling challenges
                  and enjoy collaborating with other developers to bring
                  projects to life.
                </p>
                <p className="leading-relaxed">
                  You can explore my portfolio below to see examples of my work.
                </p>
              </div>

              <div className="pt-4">
                <p className="mb-4">
                  Feel free to connect with me on{' '}
                  <Link
                    href={linkedInLink}
                    className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                  >
                    LinkedIn
                  </Link>
                  . I'm open to job opportunities where I can contribute, learn
                  and grow.
                </p>

                <div className="flex space-x-4 mt-8">
                  <Link
                    href={gitHubLink}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Github size={20} />
                  </Link>
                  <Link
                    href={linkedInLink}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Linkedin size={20} />
                  </Link>
                  <Link
                    href={cvLink}
                    className="flex items-center justify-center px-5 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <FileText size={18} className="mr-2" />
                    <span>Open CV</span>
                    <ExternalLink size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-1 h-8 bg-cyan-400"></div>
                <h2 className="text-3xl font-bold">My Skills</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  {
                    name: 'HTML',
                    color: 'bg-gradient-to-r from-orange-500 to-red-500',
                  },
                  {
                    name: 'CSS',
                    color: 'bg-gradient-to-r from-blue-500 to-indigo-500',
                  },
                  {
                    name: 'SCSS',
                    color: 'bg-gradient-to-r from-pink-500 to-purple-500',
                  },
                  {
                    name: 'JavaScript',
                    color: 'bg-gradient-to-r from-yellow-400 to-amber-500',
                  },
                  {
                    name: 'TypeScript',
                    color: 'bg-gradient-to-r from-blue-400 to-blue-600',
                  },
                  {
                    name: 'React.js',
                    color: 'bg-gradient-to-r from-cyan-400 to-sky-500',
                  },
                  {
                    name: 'React Native',
                    color: 'bg-gradient-to-r from-sky-400 to-blue-500',
                  },
                  {
                    name: 'Next.js',
                    color: 'bg-gradient-to-r from-zinc-600 to-zinc-800',
                  },
                  {
                    name: 'Node.js',
                    color: 'bg-gradient-to-r from-green-500 to-emerald-600',
                  },
                  {
                    name: 'WebSockets',
                    color: 'bg-gradient-to-r from-purple-500 to-indigo-500',
                  },
                  {
                    name: 'Redux',
                    color: 'bg-gradient-to-r from-purple-600 to-indigo-700',
                  },
                  {
                    name: 'Material-UI',
                    color: 'bg-gradient-to-r from-blue-500 to-indigo-600',
                  },
                  {
                    name: 'Tailwind',
                    color: 'bg-gradient-to-r from-cyan-500 to-sky-600',
                  },
                  {
                    name: 'JEST',
                    color: 'bg-gradient-to-r from-red-500 to-rose-600',
                  },
                  {
                    name: 'React Testing Library',
                    color: 'bg-gradient-to-r from-red-600 to-orange-600',
                  },
                  {
                    name: 'GIT',
                    color: 'bg-gradient-to-r from-orange-600 to-red-700',
                  },
                ].map(skill => (
                  <div
                    key={skill.name}
                    className={`${skill.color} p-0.5 rounded-lg group transition-transform hover:scale-105`}
                  >
                    <div className="bg-zinc-900 rounded-md p-3 h-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
