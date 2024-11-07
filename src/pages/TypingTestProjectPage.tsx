import { Seo } from '@/components/Seo/Seo';

import { ProjectPageLayout } from '../components/ProjectPageLayout/ProjectPageLayout';
import { TypingTestProject } from '../helpers/constants';

export const TypingTestProjectPage = () => {
  const project = TypingTestProject;
  return (
    <>
      <Seo
        title="Typing Test Project"
        description="Typing Test Project Showcase by Skydan Dmytro"
        url="https://skydmytro.vercel.app/projects/typingTest"
      />
      <ProjectPageLayout project={project} />
    </>
  );
};
