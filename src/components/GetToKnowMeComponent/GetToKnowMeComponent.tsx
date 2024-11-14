'use client';

import { MouseEvent } from 'react';

import download from '../../../public/download-2-24.png';
import { cvLink, linkedInLink } from '../../helpers/constants';
import { TitleSkillsPage } from '../ui/TitleSkillsPageComponent';
import { CvButton } from './ui/CVButton';

export const GetToKnowMeComponent = () => {
  const getCV = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = cvLink;
  };

  return (
    <div className="sm:w-full lg:w-1/3 flex flex-col gap-8 justify-start p-4">
      <TitleSkillsPage text="Get to know me!" />
      <div className="text-xl flex flex-col gap-4">
        <p>
          Hello! I’m a Ukrainian Frontend Web Developer living in Poland. I love
          creating websites and web applications that are both attractive and
          easy to use. My main focus is on the front end, where I enjoy turning
          ideas into functional online experiences.
        </p>
        <p>
          I’m always keeping up with the latest trends to expand my skills and
          knowledge. I’m passionate about tackling challenges and enjoy
          collaborating with other developers to bring projects to life.
        </p>
        <p>You can explore my portfolio below to see examples of my work.</p>
        <p>
          Feel free to connect with me on{' '}
          <a
            href={linkedInLink}
            className="font-bold underline"
            target="_blank"
          >
            LinkedIn.
          </a>{' '}
          I'm open to job opportunities where I can contribute, learn and grow.
        </p>
      </div>
      <CvButton text="CV" icon={download} onClick={getCV} />
    </div>
  );
};
