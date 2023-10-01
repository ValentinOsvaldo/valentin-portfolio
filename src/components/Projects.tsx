import { useContext } from 'react';
import { ProjectCard, ProjectModal } from '.';
import { ProjectModalContext } from '@/context/project-modal';
import projects from '../data/projects.json';

export const Projects = () => {
  const { closeModal, openModal, project, isVisible } =
    useContext(ProjectModalContext);

  return (
    <section
      className="flex flex-col gap-4 min-h-screen max-w-screen-lg mb-10 px-4"
      id="projects"
    >
      <h2 className="text-4xl lg:text-6xl font-medium text-gray-300 mb-2">
        Projects
      </h2>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            key={project.title}
            delayAnimation={+`.${(index + 1) + 5}`}
            onClick={() => openModal(project)}
          />
        ))}
      </article>

      <ProjectModal
        project={project}
        visible={isVisible}
        onDismiss={closeModal}
      />
    </section>
  );
};
