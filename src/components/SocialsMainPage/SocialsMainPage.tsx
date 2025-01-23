'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import githubIcon from '../../../public/githubIcon.svg';
import linkedInIcon from '../../../public/linkedInIcon.svg';

export const SocialsMainPage = () => {
  return (
    <motion.div
      className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        <Image src={githubIcon} alt="GitHub icon" className="h-10 w-10" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        <Image src={linkedInIcon} alt="LinkedIn icon" className="h-10 w-10" />
      </a>
    </motion.div>
  );
};
