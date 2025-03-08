import ProjectDetailPage from '../../../components/ProjectOverviewPageLayout/ProjectPageLayoutNew';
import { WishListProject } from '../../../helpers/constants';

const page = () => {
  return <ProjectDetailPage project={WishListProject} />;
};

export default page;
