import { starWarsProject } from "../helpers/constants";
import { ProjectPageLayout } from "../components/ProjectPageLayout/ProjectPageLayout";

export const StarWarsPage = () => {
  return <ProjectPageLayout project={starWarsProject} />;
};
