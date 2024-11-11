import { ProjectPageLayout } from '../components/ProjectPageLayout/ProjectPageLayout';
import { starWarsProject } from '../helpers/constants';

export const StarWarsPage = () => {
  return (
    <>
      <ProjectPageLayout project={starWarsProject} />;
    </>
  );
};
