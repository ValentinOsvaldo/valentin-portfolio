import { useContext } from 'react';
import { ProjectCard, ProjectModal } from '.';
import { ProjectModalContext } from '@/context/project-modal';
import projects from '../data/projects.json';

export const Projects = () => {
  const { closeModal, openModal, project, isVisible } =
    useContext(ProjectModalContext);

  return (
    <section
      className="flex flex-col gap-2 min-h-screen max-w-screen-lg px-4"
      id="projects"
    >
      <h2 className="text-4xl lg:text-6xl font-medium text-gray-300">
        Projects
      </h2>

      <article className='flex flex-col gap-4'>
        <nav className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <button
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                All
              </button>
            </li>
          </ul>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              key={project.title}
              delayAnimation={+`.${index + 1 + 5}`}
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      </article>

      <ProjectModal
        project={project}
        visible={isVisible}
        onDismiss={closeModal}
      />
    </section>
  );
};
