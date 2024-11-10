import { ProjectPageLayout } from '../../../components/ProjectPageLayout/ProjectPageLayout';
import { TypingTestProject } from '../../../helpers/constants';

const TypingTestProjectPage = () => {
  const project = TypingTestProject;
  return (
    <>
      <ProjectPageLayout project={project} />
    </>
  );
};

export default TypingTestProjectPage;
