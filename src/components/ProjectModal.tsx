import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import { Project } from '@/models';

interface Props {
  project: Project | null;
  visible: boolean;
  onDismiss?: () => void;
}

export const ProjectModal = ({ project, visible, onDismiss }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.section
          className="fixed inset-0 backdrop-blur-md bg-zinc-800/75 z-50 flex justify-center items-center p-4 pt-14 overflow-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute top-4 right-4 text-2xl rounded-full p-1 hover:bg-zinc-400/25"
            onClick={onDismiss}
          >
            <MdClose />
          </button>
          <motion.article
            className="rounded-lg shadow-lg bg-zinc-900 w-full max-w-screen-sm m-auto relative"
            onClick={(ev) => ev.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {project?.image && (
              <Image
                src={project?.image}
                alt={project?.title}
                width={500}
                height={300}
                className="rounded-t-lg w-full"
              />
            )}
            <div className="p-4">
              <header className="flex flex-row justify-between items-center mb-2">
                <h3 className="text-2xl font-medium text-zinc-400">
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
          </motion.article>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
