import { ExternalLink, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import mobileChatImage from '../../../public/Chat_App_overview_1.png';
import starWarsImage from '../../../public/StarWars_overview_1.png';
import typingTestImage from '../../../public/TypingTest_overview_1.png';

export const ProjectPageNew = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-20"></div>
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              PROJECTS
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </p>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Project 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-zinc-900 rounded-lg overflow-hidden">
                <Image
                  src={typingTestImage}
                  alt="Typing Speed Training Web Application"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Typing Speed Training Web Application
              </h2>

              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Sass', 'Vite', 'Jest'].map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-zinc-400 leading-relaxed">
                This is an educational web application developed using{' '}
                <span className="text-emerald-400">React</span> and{' '}
                <span className="text-emerald-400">TypeScript</span>, inspired
                by MonkeyType. The app provides typing practice with the top
                1000 most common words in both English and Ukrainian. Users can
                take timed tests of 15, 30, 45, or 60 seconds, and the app
                tracks key statistics like{' '}
                <span className="text-emerald-400">WPM, accuracy</span>, and
                accuracy counts of correct and incorrect characters.
              </p>

              <p className="text-zinc-400 leading-relaxed">
                The project helped me improve my understanding of{' '}
                <span className="text-emerald-400">React</span> performance and
                component management.
              </p>

              <Link
                href="/projects/typingTest"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg text-white font-medium hover:from-emerald-500 hover:to-cyan-500 transition-colors"
              >
                Project Showcase
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-zinc-900 rounded-lg overflow-hidden">
                <Image
                  src={starWarsImage}
                  alt="Star Wars Data Base"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl font-bold">Star Wars Data Base</h2>

              <div className="flex flex-wrap gap-2">
                {[
                  'Vite',
                  'React',
                  'TypeScript',
                  'Jest',
                  'React Testing Library',
                  'React Flow',
                ].map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-zinc-400 leading-relaxed">
                This is an educational web application developed using{' '}
                <span className="text-cyan-400">Vite</span>,{' '}
                <span className="text-cyan-400">React</span>, and{' '}
                <span className="text-cyan-400">TypeScript</span>. The app
                allows users to explore a vast database of Star Wars heroes
                through an infinite scroll feature that loads more heroes as the
                user scrolls down, providing a seamless browsing experience.
              </p>

              <p className="text-zinc-400 leading-relaxed">
                When a hero is selected, a detailed graph is displayed using{' '}
                <span className="text-cyan-400">React Flow</span>, illustrating
                connections between the selected hero, the movies they appear
                in, and the starships they have traveled on. The project
                incorporates <span className="text-cyan-400">Jest</span> and{' '}
                <span className="text-cyan-400">React Testing Library</span> for
                testing the app's core components and logic, ensuring
                reliability and stability as the codebase evolves.
              </p>

              <p className="text-zinc-400 leading-relaxed">
                Overall, this project enhanced my skills in{' '}
                <span className="text-cyan-400">React</span> development and
                component management.
              </p>

              <Link
                href="/projects/starWars"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-500 hover:to-blue-500 transition-colors"
              >
                Project Showcase
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
