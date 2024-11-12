import Image, { StaticImageData } from 'next/image';

export interface ProjectImageProps {
  ProjectImageIcon: StaticImageData;
}

export const ProjectImage = ({ ProjectImageIcon }: ProjectImageProps) => (
  <div className="md:max-w-[600px] md:max-h-[500px] lg:w-[600px] lg:h-[500px] flex">
    <Image src={ProjectImageIcon} alt="project image object-contain" />
  </div>
);
