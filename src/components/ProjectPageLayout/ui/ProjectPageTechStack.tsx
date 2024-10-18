import { TechStack } from "../../TechStack";

export const ProjectPageTechStack = ({
  techStack,
}: {
  techStack: string[];
}) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
      <div className="flex flex-wrap gap-2">
        <TechStack techs={techStack} />
      </div>
    </section>
  );
};
