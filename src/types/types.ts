import { Feature } from './featureTypes';

export interface ProjectType {
  name: string;
  url?: string;
  description: string;
  githubUrl: string;
  screenshots: string[];
  keyFeatures: Feature[];
  techStack: string[];
  conclusion?: string;
}
