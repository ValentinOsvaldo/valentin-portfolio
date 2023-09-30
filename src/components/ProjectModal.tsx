import Image from 'next/image';
import { Project } from '@/models';
import { FaGithub, FaLink } from 'react-icons/fa';

interface Props {
  project: Project | null;
  visible: boolean;
  onDismiss?: () => void;
}

export const ProjectModal = ({ project, visible, onDismiss }: Props) => {
  if (!visible) {
    return null;
  }

  return (
    <section
      className="fixed inset-0 backdrop-blur-md bg-zinc-800/75 z-50 flex justify-center items-center p-4 overflow-auto"
      onClick={onDismiss}
    >
      <article
        className="rounded-lg shadow-lg bg-zinc-900 w-full max-w-screen-sm m-auto overflow-hidden"
        onClick={(ev) => ev.stopPropagation()}
      >
        {project?.image && <Image src={project?.image} alt={project?.title} />}
        <div className="p-4">
          <header className="flex flex-row justify-between items-center mb-2">
            <h3 className="text-2xl font-bold text-zinc-400">
              {project?.title}
            </h3>

            <div className="flex flex-row gap-x-4 text-zinc-500 text-xl">
              <a
                href={project?.code}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors cursor-pointer hover:text-zinc-400"
              >
                <FaGithub />
              </a>
              <a
                href={project?.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors cursor-pointer hover:text-zinc-400"
              >
                <FaLink />
              </a>
            </div>
          </header>
          <p className="text-sm text-zinc-500">{project?.description}</p>
          <ul className="flex flex-row flex-wrap gap-2 text-gray-400 text-xs mt-2">
            {project?.stack.map((tech) => (
              <li
                className="py-2 px-4 bg-zinc-800 rounded-full select-none"
                key={tech}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};
