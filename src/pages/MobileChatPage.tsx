import { Seo } from '@/components/Seo/Seo';

import { ProjectPageLayout } from '../components/ProjectPageLayout/ProjectPageLayout';
import { mobileChatProject } from '../helpers/constants';

export const MobileChatPage = () => {
  return (
    <>
      <Seo
        title="Mobile Chat Project"
        description="Mobile Chat Project Showcase"
        url="https://skydmytro.vercel.app/projects/chat"
      />
      <ProjectPageLayout project={mobileChatProject} />;
    </>
  );
};
