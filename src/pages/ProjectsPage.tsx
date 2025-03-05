// import mobileChat from "../assets/MobileChat.svg";
import { ProjectPageNew } from '../components/ProjectsPageNew/ProjectPageNew';

const ProjectsPage = () => {
  return (
    <section id="projects" className="bg-black ">
      <ProjectPageNew />
      {/* <div className="container flex flex-col gap-24 pt-14 pb-10">
        <PageTitle
          title="Projects"
          subtitle="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
        />
        <div className="typing-test flex justify-evenly flex-wrap sm:gap-16 xl:gap-10  ">
          <ProjectImage ProjectImageIcon={typingTest} />

          <ProjectDescriptionLayout
            projectUrl="/projects/typingTest"
            title="Typing Speed Training Web Application"
            key={'typingTest'}
            techStack={keyTechnologiesTypingTestProject}
          >
            <TypingTestDescription />
          </ProjectDescriptionLayout>
        </div>
        <div className=" flex justify-evenly flex-wrap sm:gap-16 xl:gap-10  ">
          <ProjectImage ProjectImageIcon={starWars} />

          <ProjectDescriptionLayout
            projectUrl="/projects/starWars"
            title="Star Wars Data Base"
            key={'starWars'}
            techStack={starWarstechnologies}
          >
            <StarWarsDescription />
          </ProjectDescriptionLayout>
        </div>
        <div className="flex justify-evenly flex-wrap sm:gap-16 xl:gap-10  ">
          <ProjectImage ProjectImageIcon={mobileChat} />

          <ProjectDescriptionLayout
            techStack={mobilChatKeyTechnologies}
            projectUrl="/projects/chat"
            title="Mobile Mock Chat"
            key={'chat'}
          >
            <MobileChatDescription />
          </ProjectDescriptionLayout>
        </div>
      </div> */}
    </section>
  );
};

export default ProjectsPage;
