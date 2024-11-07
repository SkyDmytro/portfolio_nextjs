import { Feature } from '../../../types/featureTypes';

export const ProjectPageKeyFeatures = ({
  features,
}: {
  features: Feature[];
}) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      <ul className="list-disc list-inside text-secondaryFont space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="mb-4">
            <h2 className="font-semibold">{feature.title}</h2>
            <ul className="list-disc list-inside ml-6">
              {feature.details.map((detail, idx) => (
                <li key={idx} className="text-secondaryFont">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </section>
  );
};
