import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import redirect from '../../../../public/icons8-share-24.png';
import { TechStack } from '../../ui/TechStack';
import '../styles/buttonAnimation.css';

export interface ProjectDescriptionLayoutProps {
  children: ReactNode;
  title: string;
  projectUrl: string;
  techStack: string[];
}

export const ProjectDescriptionLayout = ({
  children,
  title,
  projectUrl,
  techStack,
}: ProjectDescriptionLayoutProps) => {
  return (
    <div className="flex flex-col gap-5 max-w-2xl hover-animation text-lg">
      <span className="font-bold">{title}</span>
      <TechStack techs={techStack} />
      <div className="max-w-2xl">{children}</div>
      <div className="hover-button-animation rounded-xl w-fit  ">
        <Link
          href={projectUrl}
          className="opacity-100 flex items-center gap-2 rounded-xl"
        >
          <span className="opacity-100">Project Showcase</span>
          <Image src={redirect} alt="redirect" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};
