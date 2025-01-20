import { Project } from '../types/project.type';
import { projects } from './get-projects.server';

export function getProjectByName(name: string): Project {
  return (
    projects['all'].find((project) => project.slug === name) || ({} as Project)
  );
}
