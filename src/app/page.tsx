import { TimelineItem, TimelineList } from '@/components/resume/timeline';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const page = () => {
  return (
    <main className="max-w-screen-md mx-auto p-4">
      <header className="pt-8 flex flex-row gap-4">
        <article>
          <h1 className="text-xl lg:text-3xl font-medium dark:text-neutral-200">
            Osvaldo Valentin Garcia
          </h1>
          <h2 className="font-mono dark:text-neutral-300">
            Software Engineer | Front-End Developer | React | React Native
          </h2>

          <hr className="my-2 dark:border-neutral-500" />

          <p className="font-mono dark:text-neutral-400 text-xs">
            <span>🌍 Monterrey, Nuevo León, México</span>
            <span>{' · '}</span>
            <a href="mailto:valentingarcia.osvaldo@gmail.com">
              📧 valentingarcia.osvaldo@gmail.com
            </a>
            <span>{' · '}</span>
            <a href="tel:+528123236394">📞+52-81-2323-6394</a>
            <span>{' · '}</span>
            <a
              href="https://github.com/ValentinOsvaldo"
              target="_blank"
              rel="noopener noreferrer"
            >
              🐈 Github
            </a>
            <span>{' · '}</span>
            <a
              href="https://www.linkedin.com/in/valentin-osvaldo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              👷‍♂️ LinkedIn
            </a>
          </p>
        </article>
      </header>

      <section className="pt-8">
        <h3 className="text-xl font-medium mb-4">Work experience</h3>

        <TimelineList>
          <TimelineItem
            company="Aeto"
            endDate="At present"
            jobTitle="Front-End Developer"
            starDate="February 2022"
            technologies={[
              'NextJs',
              'React Native',
              'React',
              'Redux',
              'Typescript',
            ]}
            featured={[
              'Ut laborum et anim dolor mollit fugiat elit.',
              'Pariatur ea reprehenderit aliquip non ad nostrud consequat aute et consectetur amet deserunt.',
              'Ut laborum et anim dolor mollit fugiat elit.',
              'Pariatur ea reprehenderit aliquip non ad nostrud consequat aute et consectetur amet deserunt.',
              'Ut laborum et anim dolor mollit fugiat elit.',
            ]}
          />
        </TimelineList>
      </section>

      <section>
        <h3 className="text-xl font-medium mb-4">Projects</h3>

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
                excepturi cum neque laboriosam obcaecati placeat, dolorum
                voluptatem facere aut officia odit perspiciatis consequuntur
                dolore sunt fugit quam autem et. Minima!
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
                excepturi cum neque laboriosam obcaecati placeat, dolorum
                voluptatem facere aut officia odit perspiciatis consequuntur
                dolore sunt fugit quam autem et. Minima!
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <Button variant="outline">Code</Button>
              <Button variant="default">Demo</Button>
            </div>
          </div>
        </article>
      </section>

       <section className="pt-8">
        <h3 className="text-xl font-medium mb-4">Education</h3>

        <TimelineList>
          <TimelineItem
            starDate="May 2024"
            jobTitle="Software Engineer"
            company="Universidad Ciudadana de Nuevo León"
          />
        </TimelineList>
      </section>
    </main>
  );
};

export default page;
