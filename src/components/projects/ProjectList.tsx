import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

export const ProjectList = () => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border dark:border-neutral-800 rounded-lg p-4">
        <Image
          alt="X"
          src="https://res.cloudinary.com/dmwnb8bns/image/upload/v1677472157/uikyi35opa2afid7c8qk.jpg"
          width={150}
          height={200}
          loading="lazy"
          className="w-full mb-2 rounded-lg"
        />

        <div className="mb-2">
          <h4 className="font-medium text-lg mb-2">New project</h4>
          <p className="text-xs text-neutral-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            excepturi cum neque laboriosam obcaecati placeat, dolorum voluptatem
            facere aut officia odit perspiciatis consequuntur dolore sunt fugit
            quam autem et. Minima!
          </p>
        </div>

        <div className="flex flex-row gap-4">
          <Button variant="outline">Code</Button>
          <Button variant="default">Demo</Button>
        </div>
      </div>
      <div className="border dark:border-neutral-800 rounded-lg p-4">
        <Image
          alt="X"
          src="https://res.cloudinary.com/dmwnb8bns/image/upload/v1677472157/uikyi35opa2afid7c8qk.jpg"
          width={150}
          height={200}
          loading="lazy"
          className="w-full mb-2 rounded-lg"
        />

        <div className="mb-2">
          <h4 className="font-medium text-lg mb-2">New project</h4>
          <p className="text-xs text-neutral-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            excepturi cum neque laboriosam obcaecati placeat, dolorum voluptatem
            facere aut officia odit perspiciatis consequuntur dolore sunt fugit
            quam autem et. Minima!
          </p>
        </div>

        <div className="flex flex-row gap-4">
          <Button variant="outline">Code</Button>
          <Button variant="default">Demo</Button>
        </div>
      </div>
    </article>
  );
};
