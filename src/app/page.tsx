import { getLocale, getTranslations } from 'next-intl/server';
import { TimelineItem, TimelineList } from '@/components/resume/timeline';

const Page = async () => {
  const locale = await getLocale();
  const t = await getTranslations();

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
        <h3 className="text-xl font-medium mb-4">
          {t('work-experience.title')}
        </h3>

        <TimelineList>
          <TimelineItem
            company="Aeto"
            endDate={t('work-experience.at-present')}
            jobTitle="Front-End Developer"
            starDate={new Date('February 2022').toLocaleDateString(locale, {
              month: 'long',
              year: 'numeric',
            })}
            technologies={[
              'NextJs',
              'React Native',
              'React',
              'Redux',
              'Typescript',
            ]}
            featured={[
              t('aeto.features.1'),
              t('aeto.features.2'),
              t('aeto.features.3'),
              t('aeto.features.4'),
            ]}
          />
        </TimelineList>
      </section>

      <section className="pt-8">
        <h3 className="text-xl font-medium mb-4">Education</h3>

        <TimelineList>
          <TimelineItem
            starDate={new Date('May 2022').toLocaleDateString(locale, {
              month: 'long',
              year: 'numeric',
            })}
            jobTitle={t('education.software-engineer')}
            company="Universidad Ciudadana de Nuevo León"
          />
        </TimelineList>
      </section>
    </main>
  );
};

export default Page;
