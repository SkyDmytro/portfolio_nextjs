import { Github, Globe } from "lucide-react";

export const ProjectPageProjectOverview = ({
  projectDescription,
  projectUrl,
  githubUrl,
}: {
  projectDescription: string;
  projectUrl?: string;
  githubUrl: string;
}) => {
  return (
    <section className="mb-12 ">
      <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
      <p className="text-secondaryFont mb-4">{projectDescription}</p>
      <div className="flex space-x-4 font-bold">
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            className="bg-lightBlue text-sm hover:bg-primaryFont hover:text-lightBlue px-4 py-2 rounded-md flex items-center"
          >
            <Globe className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        )}
        <a
          href={githubUrl}
          target="_blank"
          className="bg-primaryFont border-lightBlue text-sm text-lightBlue hover:bg-lightBlue hover:text-primaryFont px-4 py-2 rounded-md flex items-center"
        >
          <Github className="mr-2 h-4 w-4" />
          GitHub Repo
        </a>
      </div>
    </section>
  );
};
