import React from "react";

export const ProjectPageHeader = ({ projectName }: { projectName: string }) => {
  return (
    <header className="bg-blue py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">Project Showcase: {projectName}</h1>
      </div>
    </header>
  );
};
