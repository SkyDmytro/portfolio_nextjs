interface TechStackProps {
  techs: string[];
}

export const TechStack = ({ techs }: TechStackProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map(tech => (
        <div
          key={tech}
          className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-md text-zinc-300"
        >
          <span className="opacity-100">{tech}</span>
        </div>
      ))}
    </div>
  );
};
