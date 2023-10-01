import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';

import { motion, useAnimation, useInView } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';

import { Project } from '@/models';

interface Props {
  project: Project;
  onClick?: () => void;
  delayAnimation?: number;
}

export const ProjectCard: FC<Props> = ({
  project,
  delayAnimation = 1,
  onClick,
}) => {
  const { description, stack, title, code, demo, image } = project;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '0px 100px -50px 0px' });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) animationControls.start('visible');
  }, [isInView]);

  return (
    <motion.div
      className="bg-zinc-900 rounded-lg p-4 relative bg-clip-padding group"
      ref={ref}
      animate={animationControls}
      initial="hidden"
      transition={{ duration: 0.75, delay: delayAnimation }}
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {!!image ? (
        <Image
          src={image}
          alt="Project Name"
          width={500}
          height={300}
          className="w-full rounded-lg object-cover mb-4 grayscale transition-all cursor-pointer max-h-[300px] group-hover:grayscale-0"
          priority={true}
          onClick={onClick}
        />
      ) : (
        <div
          className="w-full h-[300px] cursor-pointer rounded-lg bg-zinc-950/70 flex items-center justify-center mb-4"
          onClick={onClick}
        >
          <h4 className="text-xl font-bold drop-shadow-[0px_0px_24px_rgba(255,255,255,0.75)] tracking-widest select-none">
            {title}
          </h4>
        </div>
      )}
      <header className="flex flex-row items-center justify-between mb-1">
        <h3 className="text-lg font-medium text-zinc-400">{title}</h3>

        <div className="flex flex-row gap-x-4 text-zinc-500 text-xl">
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors cursor-pointer hover:text-zinc-400"
          >
            <FaGithub />
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors cursor-pointer hover:text-zinc-400"
          >
            <FaLink />
          </a>
        </div>
      </header>

      {description && (
        <p className="text-zinc-500 text-sm">
          {description?.length >= 250 ? (
            <>
              {description.slice(0, 250).trim()}...{' '}
              <a
                className="text-zinc-300 hover:underline cursor-pointer"
                onClick={onClick}
              >
                learn more
              </a>
            </>
          ) : (
            description
          )}
        </p>
      )}

      {stack && (
        <ul className="flex flex-row flex-wrap gap-2 text-gray-400 text-xs mt-2">
          {stack.map((tech) => (
            <li
              className="py-2 px-4 bg-zinc-800 rounded-full select-none"
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};
