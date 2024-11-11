import { ProjectPageLayout } from '../components/ProjectPageLayout/ProjectPageLayout';
import { TypingTestProject } from '../helpers/constants';

export const TypingTestProjectPage = () => {
  const project = TypingTestProject;
  return (
    <>
      <ProjectPageLayout project={project} />
    </>
  );
};
