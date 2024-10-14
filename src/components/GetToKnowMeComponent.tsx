import download from "../assets/download-2-24.png";
import { CvButton } from "./CVButton";
import { downloadCv as downloadCvApi } from "../api/downloadCv";
import { TitleSkillsPage } from "./TitleSkillsPageComponent";
import { linkedInLink } from "../helpers/constants";

export const GetToKnowMeComponent = () => {
  const downloadCv = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    downloadCvApi();
  };

  return (
    <div className="sm:w-full lg:w-1/3 flex flex-col gap-8 justify-start hover-animation p-4">
      <TitleSkillsPage text="Get to know me!" />
      <div className="text-xl flex flex-col gap-4">
        <p>
          I'm a Frontend Focused Web Developer with a passion for building and
          managing the Front-end of websites and web applications.
        </p>
        <p>
          Check out some of my projects below. I also like sharing content
          related to web development on my blog.
        </p>
        <p>
          Feel free to connect with me on{" "}
          <a
            href={linkedInLink}
            className="font-bold underline"
            target="_blank"
          >
            LinkedIn.
          </a>{" "}
          I'm open to job opportunities where I can contribute, learn and grow.
        </p>
      </div>
      <CvButton text="CV" icon={download} onClick={downloadCv} />
    </div>
  );
};
