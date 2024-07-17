const page = () => {
  return (
    <main className="max-w-screen-md mx-auto p-4">
      <section className="pt-8 flex flex-row gap-4">
        <article>
          <h1 className="text-xl lg:text-3xl font-medium text-neutral-200">
            Osvaldo Valentin Garcia
          </h1>
          <h2 className="font-mono text-neutral-300">
            Software engineer | Front-End Developer | React | React Native
          </h2>
          <p className="font-mono text-neutral-400 text-sm">
            <span>🌍 Monterrey, Nuevo León, México</span>
            <span>{' | '}</span>
            <a href="mailto:valentingarcia.osvaldo@gmail.com">
              📧 valentingarcia.osvaldo@gmail.com
            </a>
            <span>{' | '}</span>
            <a href="tel:+528123236394">📞+52-81-2323-6394</a>
            <span>{' | '}</span>
            <a
              href="https://github.com/ValentinOsvaldo"
              target="_blank"
              rel="noopener noreferrer"
            >
              🐈 Github
            </a>
            <span>{' | '}</span>
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
            <div className="absolute w-3 h-3 bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-neutral-900 dark:bg-neutral-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">
              February 2022 - At present
            </time>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              FrontEnd Developer in AETO
            </h3>
            {/* <p className="mb-4 text-base font-normal text-neutral-500 dark:text-neutral-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda laudantium pariatur vitae, mollitia fuga quam modi saepe
              accusantium necessitatibus quaerat ut sequi incidunt optio
              distinctio minus id perspiciatis, perferendis eius?
            </p> */}
            <ul className="list-disc pl-8">
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
              <li>Task 4</li>
              <li>Task 5</li>
            </ul>
          </li>
        </ol>
      </section>
    </main>
  );
};

export default page;
