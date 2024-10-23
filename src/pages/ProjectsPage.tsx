import { ProjectDescriptionLayout } from "../components/ProjectDescriptionLayout";
import { PageTitle } from "../components/PageTitle";
// import mobileChat from "../assets/MobileChat.svg";
import mobileChat from "../assets/Chat_Project_new.png";
import starWars from "../assets/StarWarsProject_new.png";
import { ProjectImage } from "../components/ProjectImage";
import typingTest from "../assets/Typing_testProject_new2.png";
import {
  keyTechnologiesTypingTestProject,
  mobilChatKeyTechnologies,
  starWarstechnologies,
} from "../helpers/constants";
import { MobileChatDescription } from "../components/MobileChatDescription";
import { StarWarsDescription } from "../components/StarWarsDescription";
import { TypingTestDescription } from "../components/TypingTestDescription";

export const ProjectsPage = () => {
  return (
    <section id="projects" className="bg-darkBlue ">
      <div className="container flex flex-col gap-24 pt-10 pb-10">
        <PageTitle
          title="Projects"
          subtitle="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
        />
        <div className="typing-test flex justify-evenly flex-wrap sm:gap-16 xl:gap-10  ">
          <ProjectImage ProjectImageIcon={typingTest} />

          <ProjectDescriptionLayout
            projectUrl="/projects/typingTest"
            title="Typing Speed Training Web Application"
            key={"typingTest"}
            techStack={keyTechnologiesTypingTestProject}
          >
            <TypingTestDescription />
          </ProjectDescriptionLayout>
        </div>
        <div className="typing-test flex justify-evenly flex-wrap sm:gap-16 xl:gap-10  ">
          <ProjectImage ProjectImageIcon={starWars} />

          <ProjectDescriptionLayout
            projectUrl="/projects/starWars"
            title="Star Wars Data Base"
            key={"starWars"}
            techStack={starWarstechnologies}
          >
            <StarWarsDescription />
          </ProjectDescriptionLayout>
        </div>
        <div className="typing-test flex justify-evenly flex-wrap sm:gap-16 xl:gap-10  ">
          <ProjectImage ProjectImageIcon={mobileChat} />

          <ProjectDescriptionLayout
            techStack={mobilChatKeyTechnologies}
            projectUrl="/projects/chat"
            title="Mobile Mock Chat"
            key={"chat"}
          >
            <MobileChatDescription />
          </ProjectDescriptionLayout>
        </div>
      </div>
    </section>
  );
};
