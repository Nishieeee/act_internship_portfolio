'use client';

import { ProjectCard } from './project-card';

interface Project {
  title: string;
  description: string;
  purpose: string;
  contributors: string[];
  screenshots: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const project = projects[0];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Featured Project</h2>
          <div className="h-1 w-16 bg-accent rounded-full"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-full lg:max-w-3xl">
            <ProjectCard {...project} />
          </div>
        </div>
      </div>
    </section>
  );
}
