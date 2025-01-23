'use client';

import { motion } from 'framer-motion';
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
      <motion.div
        className="rounded-xl w-fit  text-white shadow-lg"
        whileHover={{ scale: 1.05, backgroundColor: '#336D8B' }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Link
          href={projectUrl}
          className="opacity-100 flex items-center gap-2 rounded-xl p-3"
        >
          <span className="opacity-100">Project Showcase</span>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image src={redirect} alt="redirect" className="h-4 w-4" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};
