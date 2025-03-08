'use client';

import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import type { ProjectType } from '../../types/types';

interface ProjectDetailProps {
  project: ProjectType;
}

export default function ProjectDetailPage({ project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(prev =>
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <Link
          href="/"
          className="inline-flex items-center text-zinc-400 hover:text-white transition-colors"
        >
          <ChevronLeft size={20} className="mr-1" />
          Back to Home page
        </Link>
      </div>

      <section className="pb-16 relative">
        <div className="container mx-auto px-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-20"></div>
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {project.name}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8"></div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-zinc-900 rounded-lg overflow-hidden">
              {project.screenshots.length > 0 && (
                <div className="relative aspect-video">
                  <Image
                    src={
                      project.screenshots[currentImageIndex] ||
                      '/placeholder.svg'
                    }
                    alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                    fill
                    className=""
                  />

                  {project.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {project.screenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full ${
                              index === currentImageIndex
                                ? 'bg-white'
                                : 'bg-white/50'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Left Column - Description */}
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-1 h-8 bg-emerald-400"></div>
                <h2 className="text-3xl font-bold">Project Overview</h2>
              </div>

              <div className="prose prose-invert prose-emerald max-w-none">
                <p className="text-zinc-300 leading-relaxed text-lg">
                  {project.description}
                </p>

                {project.conclusion && (
                  <>
                    <h3 className="text-xl font-semibold mt-8 mb-4">
                      Conclusion
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      {project.conclusion}
                    </p>
                  </>
                )}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg text-white font-medium hover:from-emerald-500 hover:to-cyan-500 transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-transparent border border-zinc-700 hover:border-zinc-500 rounded-lg text-zinc-300 font-medium transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                )}
              </div>
            </div>

            {/* Right Column - Tech Stack & Features */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-1 h-8 bg-cyan-400"></div>
                  <h2 className="text-2xl font-bold">Tech Stack</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-1 h-8 bg-emerald-400"></div>
                  <h2 className="text-2xl font-bold">Key Features</h2>
                </div>

                <ul className="space-y-4">
                  {project.keyFeatures.map((feature, index) => (
                    <li
                      key={`${project.name}` + index}
                      className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4"
                    >
                      <h3 className="font-semibold text-emerald-400 mb-2">
                        {feature.title}
                      </h3>
                      {feature.details.map((detail, idx) => (
                        <p className="text-zinc-400 text-sm mb-1" key={idx}>
                          {detail}
                        </p>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
