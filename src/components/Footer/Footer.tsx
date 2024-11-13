import Image from 'next/image';

import githubIcon from '../../../public/githubIcon.svg';
import linkedInIcon from '../../../public/linkedInIcon.svg';
import { gitHubLink, linkedInLink } from '../../helpers/constants';

export const Footer = () => {
  return (
    <footer className="w-full bg-darkBlue py-4">
      <div className="container flex items-center justify-between font-bold">
        <a href="/" className="flex items-center gap-2">
          <span>Skydan Dmytro</span>
        </a>
        <div className="flex gap-6 justify-center align-center">
          <a
            href={gitHubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <Image src={githubIcon} alt="GitHub icon" className="h-8 w-8" />
          </a>
          <a
            href={linkedInLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <Image src={linkedInIcon} alt="LinkedIn icon" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};
