import { GetToKnowMeComponent } from '../components/GetToKnowMeComponent';
import { MySkillsComponent } from '../components/MySkillsComponent';
import { PageTitle } from '../components/PageTitle';

export const AboutPage = () => {
  return (
    <section id="about" className="bg-blue min-h-screen ">
      <div className="container py-10 ">
        <PageTitle
          title="About me"
          subtitle="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
        />

        <div className="flex sm:flex-col lg:flex-row justify-evenly sm:gap-10 sm:mt-10 md:mt-24 h-full">
          <GetToKnowMeComponent />
          <MySkillsComponent />
        </div>
      </div>
    </section>
  );
};
