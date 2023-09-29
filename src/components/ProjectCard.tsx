import Image from 'next/image';
import { FC } from 'react';

interface Props {
  title: string;
  image?: string;
}

export const ProjectCard: FC<Props> = ({ title, image }) => {
  return (
    <a href="#" rel="noopener noreferrer" target="_blank" className="group">
      <div className="bg-zinc-900 rounded-lg p-4 relative bg-clip-padding before:absolute before:transition-all before:inset-0 before:opacity-0 group-hover:before:opacity-100 before:bg-gradient-to-br before:from-zinc-400/90 before:to-zinc-900 before:rounded-lg before:content-[''] before:z-[-1] before:m-[-1px]">
        {!!image ? (
          <Image
            src={image}
            alt="Project Name"
            width={500}
            height={300}
            className="w-full rounded-lg mb-4 grayscale transition-all group-hover:grayscale-0"
            loading="lazy"
          />
        ) : (
          <div className='w-full h-[250px] rounded-lg bg-zinc-950/70 flex items-center justify-center mb-4'>
            <h4 className='text-xl font-bold drop-shadow-[0px_0px_16px_rgba(255,255,255,0.5)] tracking-widest'>{ title }</h4>
          </div>
        )}
        <h3 className="text-lg font-medium text-zinc-400">{ title }</h3>
        <p className="text-zinc-500 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
          libero officia illum quam magni aperiam voluptatibus laborum ducimus
          tempora error ad repellat quasi, vel rem hic! Eaque eligendi porro ea.
        </p>
      </div>
    </a>
  );
};
