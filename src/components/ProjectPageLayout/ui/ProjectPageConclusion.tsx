export const ProjectPageConclusion = ({
  conclusion,
}: {
  conclusion: string;
}) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
      <p className="text-secondaryFont mb-4">{conclusion}</p>
    </section>
  );
};
