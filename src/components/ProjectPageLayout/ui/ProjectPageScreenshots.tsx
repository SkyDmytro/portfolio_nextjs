import "../../../styles/border.css";
export const ProjectPageScreenshots = ({
  screenshots,
}: {
  screenshots: string[];
}) => {
  console.log(screenshots);
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {screenshots.map((screen, idx) => {
          return (
            <img
              src={screen}
              alt="project image"
              key={idx}
              className="rounded-lg ring ring-lightBlue ring-offset-1 max-h-[700px]"
            />
          );
        })}
      </div>
    </section>
  );
};
