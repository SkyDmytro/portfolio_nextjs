import { ProjectPageLayout } from '../../../components/ProjectOverviewPageLayout/ProjectPageLayout';
import { WishListProject } from '../../../helpers/constants';

const page = () => {
  return <ProjectPageLayout project={WishListProject} key="skyWishes" />;
};

export default page;
