import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

import { gitHubLink, linkedInLink } from '../../helpers/constants';

export const Footer = () => {
  return (
    <footer className="w-full bg-black py-4">
      <div className="container flex items-center justify-between font-bold">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Skydan Dmytro
        </Link>
        <div className="flex gap-6 justify-center align-center">
          <a
            href={gitHubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <Github size={24} />
          </a>
          <a
            href={linkedInLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
