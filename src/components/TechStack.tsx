import React from "react";

interface TechStackProps {
  techs: string[];
}

export const TechStack = ({ techs }: TechStackProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map((tech) => (
        <div
          key={tech}
          className="bg-lightBlue bg-opacity-50 py-2 px-4 rounded-xl w-fit"
        >
          <span className="opacity-100">{tech}</span>
        </div>
      ))}
    </div>
  );
};
