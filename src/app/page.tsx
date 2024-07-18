const page = () => {
  return (
    <main className="max-w-screen-md mx-auto p-4">
      <section className="pt-8 flex flex-row gap-4">
        <article>
          <h1 className="text-xl lg:text-3xl font-medium text-neutral-200">
            Osvaldo Valentin Garcia
          </h1>
          <h2 className="font-mono text-neutral-300">
            Software Engineer | Front-End Developer | React | React Native
          </h2>

          <hr className="my-2 border-neutral-500" />

          <p className="font-mono text-neutral-400 text-xs">
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
      </section>

      <section className="pt-8">
        <h3 className="text-xl font-medium mb-4">Work experience</h3>

        <ol className="relative border-s border-neutral-200 dark:border-neutral-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              February 2022 - At present
            </time>
            <h3 className="text-lg font-semibold">
              FrontEnd Developer in AETO
            </h3>
            <p className="font-mono text-neutral-400 text-sm">
              {['Typescript', 'React', 'React Native', 'NextJs'].map(
                (tech, index, array) => (
                  <>
                    <span>{tech}</span>
                    {index < array.length - 1 && ' | '}
                  </>
                )
              )}
            </p>
            <ul className="list-disc pl-8 text-neutral-400">
              <li>
                Irure dolor commodo fugiat reprehenderit aliqua ut aute dolor
                aliqua pariatur Lorem dolor cillum anim.
              </li>
              <li>
                Irure dolor commodo fugiat reprehenderit aliqua ut aute dolor
                aliqua pariatur Lorem dolor cillum anim.
              </li>
              <li>
                Irure dolor commodo fugiat reprehenderit aliqua ut aute dolor
                aliqua pariatur Lorem dolor cillum anim.
              </li>
            </ul>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              2023
            </time>
            <h3 className="text-lg font-semibold">
              FrontEnd Developer in ProAgro
            </h3>
            <p className="font-mono text-neutral-400 text-sm">
              {['HTML', 'CSS', 'TailwindCSS', 'Javascript'].map(
                (tech, index, array) => (
                  <>
                    <span>{tech}</span>
                    {index < array.length - 1 && ' | '}
                  </>
                )
              )}
            </p>
            <ul className="list-disc pl-8 text-neutral-400">
              <li>
                Irure dolor commodo fugiat reprehenderit aliqua ut aute dolor
                aliqua pariatur Lorem dolor cillum anim.
              </li>
              <li>
                Irure dolor commodo fugiat reprehenderit aliqua ut aute dolor
                aliqua pariatur Lorem dolor cillum anim.
              </li>
              <li>
                Irure dolor commodo fugiat reprehenderit aliqua ut aute dolor
                aliqua pariatur Lorem dolor cillum anim.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-xl font-medium mb-4">Projects</h3>

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-neutral-800 rounded-lg p-4 font-mono">
            <h4 className="font-medium">New project</h4>
            <p className="text-xs text-neutral-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              excepturi cum neque laboriosam obcaecati placeat, dolorum
              voluptatem facere aut officia odit perspiciatis consequuntur
              dolore sunt fugit quam autem et. Minima!
            </p>
          </div>
        </article>
      </section>

      <section className="pt-8">
        <h3 className="text-xl font-medium mb-4">Education</h3>

        <ol className="relative border-s border-neutral-200 ">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              May 2024 - At present (2027 finished estimated)
            </time>
            <h3 className="text-lg font-semibold">
              Software Engineer in Universidad Ciudadana de Nuevo León
            </h3>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              August 2017 - June 2020
            </time>
            <h3 className="text-lg font-semibold">
              Computer Science in CONALEP
            </h3>
          </li>
        </ol>
      </section>
    </main>
  );
};

export default page;
