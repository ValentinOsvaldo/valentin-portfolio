import Image from 'next/image';
import { ProjectCard } from '.';

export const Projects = () => {
  return (
    <section
      className="flex flex-col gap-4 min-h-screen max-w-screen-lg pt-20 pb-10 px-4"
      id="projects"
    >
      <h2 className="text-4xl lg:text-6xl font-medium text-gray-300 mb-2">
        Projects
      </h2>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          image="https://store-images.s-microsoft.com/image/apps.50670.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.d205e025-5444-4eb1-ae46-571ae6895928?q=90&w=480&h=270"
          title="Card Title"
        />
        <ProjectCard title="Card Title" />
        <ProjectCard title="Card Title" />
        <ProjectCard title="Card Title" />
        <ProjectCard title="Card Title" />
      </article>
    </section>
  );
};
