import { FC } from 'react';
import Image from 'next/image';

import { FaGithub, FaLink } from 'react-icons/fa';

interface Props {
  title: string;
  image?: string;
  description?: string;
  stack?: string[];
  demo?: string;
  code?: string;
}

export const ProjectCard: FC<Props> = ({
  description,
  title,
  image,
  stack,
  code,
  demo,
}) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 relative bg-clip-padding group before:absolute before:transition-all before:inset-0 before:opacity-0 hover:before:opacity-100 before:bg-gradient-to-br before:from-zinc-400/90 before:to-zinc-900 before:rounded-lg before:content-[''] before:z-[-1] before:m-[-1px]">
      {!!image ? (
        <Image
          src={image}
          alt="Project Name"
          width={500}
          height={300}
          className="w-full rounded-lg mb-4 grayscale transition-all cursor-pointer group-hover:grayscale-0"
          priority={true}
        />
      ) : (
        <div className="w-full h-[250px] rounded-lg bg-zinc-950/70 flex items-center justify-center mb-4">
          <h4 className="text-xl font-bold drop-shadow-[0px_0px_24px_rgba(255,255,255,0.75)] tracking-widest">
            {title}
          </h4>
        </div>
      )}
      <header className="flex flex-row items-center justify-between mb-1">
        <h3 className="text-lg font-medium text-zinc-400">{title}</h3>

        <div className="flex flex-row gap-x-4 text-zinc-500 text-xl">
          <a href={code} target="_blank" rel="noopener noreferrer" className='transition-colors cursor-pointer hover:text-zinc-400'>
            <FaGithub />
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer" className='transition-colors cursor-pointer hover:text-zinc-400'>
            <FaLink />
          </a>
        </div>
      </header>

      {description && (
        <p className="text-zinc-500 text-sm">
          {description?.length >= 250 ? (
            <>
              {description.slice(0, 250).trim()}...{' '}
              <a className="text-zinc-300 hover:underline cursor-pointer">
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
    </div>
  );
};
