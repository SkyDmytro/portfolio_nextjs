import { ProjectPageLayout } from '../../../components/ProjectPageLayout/ProjectPageLayout';
import { starWarsProject } from '../../../helpers/constants';

const page = () => {
  return <ProjectPageLayout project={starWarsProject} />;
};

export default page;
