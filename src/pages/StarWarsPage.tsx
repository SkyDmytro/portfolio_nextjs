import { Seo } from '@/components/Seo/Seo';

import { ProjectPageLayout } from '../components/ProjectPageLayout/ProjectPageLayout';
import { starWarsProject } from '../helpers/constants';

export const StarWarsPage = () => {
  return (
    <>
      {' '}
      <Seo
        title="Star Wars Data Base"
        description="Star Wars Data Base Showcase by Skydan Dmytro"
        url="https://skydmytro.vercel.app/projects/starWars"
      />
      <ProjectPageLayout project={starWarsProject} />;
    </>
  );
};
