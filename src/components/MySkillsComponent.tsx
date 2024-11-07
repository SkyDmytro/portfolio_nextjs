import { mySkills } from '../helpers/constants';
import { TitleSkillsPage } from './TitleSkillsPageComponent';
import { MySkills } from './MySkills';

export const MySkillsComponent = () => {
  return (
    <div className="sm:w-full lg:w-1/3 hover-animation p-4 ">
      <div className="mb-8">
        <TitleSkillsPage text="My Skills" />
      </div>
      <MySkills skills={mySkills} />
    </div>
  );
};
