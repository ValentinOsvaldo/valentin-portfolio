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
          title="Country Quiz App"
          description="In excepteur et duis proident fugiat sit et ea veniam et dolore excepteur. Id exercitation sint ad occaecat. Qui laboris nulla voluptate Lorem. Est qui Lorem eiusmod ex dolor.
          Est esse elit commodo labore. Laborum cillum et et excepteur esse ad occaecat laboris veniam. Duis qui voluptate et amet aliquip. Culpa ad dolore cupidatat occaecat deserunt cillum. Proident sit ad minim aliquip id ullamco consectetur ea tempor nisi amet duis.
          Lorem labore minim reprehenderit exercitation sunt sint commodo ad adipisicing nulla occaecat nulla fugiat. Laborum consectetur commodo pariatur occaecat commodo incididunt nostrud. Incididunt occaecat dolore sint adipisicing eiusmod in dolor. Dolore mollit sunt qui in veniam velit."
          stack={['React', 'Typescript']}
        />
        <ProjectCard
          title="Card Title"
          description="In excepteur et duis proident fugiat sit et ea veniam et dolore excepteur. Id exercitation sint ad occaecat. Qui laboris nulla voluptate Lorem. Est qui Lorem eiusmod ex dolor.
          Est esse elit commodo labore. Laborum cillum et et excepteur esse ad occaecat laboris veniam. Duis qui voluptate et amet aliquip. Culpa ad dolore cupidatat occaecat deserunt cillum. Proident sit ad minim aliquip id ullamco consectetur ea tempor nisi amet duis.
          Lorem labore minim reprehenderit exercitation sunt sint commodo ad adipisicing nulla occaecat nulla fugiat. Laborum consectetur commodo pariatur occaecat commodo incididunt nostrud. Incididunt occaecat dolore sint adipisicing eiusmod in dolor. Dolore mollit sunt qui in veniam velit."
          stack={['React', 'Typescript']}
        />
      </article>
    </section>
  );
};
