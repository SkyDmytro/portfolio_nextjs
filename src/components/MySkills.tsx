interface MySkillsComponentProps {
  skills: string[];
}

export const MySkills = ({ skills }: MySkillsComponentProps) => {
  return (
    <div className="flex flex-wrap  gap-x-2 gap-y-4 ">
      {skills.map((skill: string) => (
        <div
          key={skill}
          className="bg-lightBlue text-lg  bg-opacity-75 py-3 px-5 rounded-xl w-fit"
        >
          <span className="opacity-100">{skill}</span>
        </div>
      ))}
    </div>
  );
};
