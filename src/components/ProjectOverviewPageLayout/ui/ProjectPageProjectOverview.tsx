import { Github, Globe } from 'lucide-react';
import Link from 'next/link';

import { cn } from '../../../lib/utils';

const buttonBg = 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 ';

export const ProjectPageProjectOverview = ({
  projectDescription,
  projectUrl,
  githubUrl,
}: {
  projectDescription: string;
  projectUrl?: string;
  githubUrl: string;
}) => {
  return (
    <section className="mb-12 ">
      <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
      <p className="text-secondaryFont mb-4">{projectDescription}</p>
      <div className=" flex space-x-4 font-bold">
        {projectUrl && (
          <Link
            href={projectUrl}
            target="_blank"
            className={cn(
              'bg-lightBlue text-sm hover:bg-primaryFont hover:text-lightBlue px-4 py-2 rounded-md flex items-center',
              buttonBg
            )}
          >
            <Globe className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        )}
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className={cn(
              'bg-primaryFont border-lightBlue text-sm text-lightBlue hover:bg-lightBlue hover:text-primaryFont px-4 py-2 rounded-md flex items-center',
              buttonBg
            )}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub Repo
          </Link>
        )}
      </div>
    </section>
  );
};
