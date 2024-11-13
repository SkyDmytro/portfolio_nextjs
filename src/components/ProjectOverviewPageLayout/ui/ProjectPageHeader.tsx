import { ChevronLeft } from 'lucide-react';

export const ProjectPageHeader = ({ projectName }: { projectName: string }) => {
  return (
    <header className="bg-blue py-6">
      <div className=" relative container mx-auto px-4">
        <h1 className="text-3xl font-bold">Project Showcase: {projectName}</h1>
        <a href="/" className="absolute top-[25%] right-0 ">
          <ChevronLeft />
        </a>
      </div>
    </header>
  );
};
