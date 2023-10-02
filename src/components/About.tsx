import { motion } from 'framer-motion';
import {
  Angular,
  Dart,
  Firebase,
  Git,
  Github,
  Jest,
  Js,
  Node,
  Reactjs,
  Reactts,
  Tailwind,
  TypeScript,
} from '@react-symbols/icons';

import { useAnimateComponent } from '@/hooks';
import { TimeLine } from '.';

const options = {
  unique: true,
  margin: '0px 200px -50px 0px',
};

export const About = () => {
  const [aboutRef, aboutControls] = useAnimateComponent<HTMLElement>(options);
  const [experienceRef, experienceControls] =
    useAnimateComponent<HTMLElement>(options);
  const [eduRef, eduControls] = useAnimateComponent<HTMLElement>(options);
  const [skillsRef, skillsAnimation] =
    useAnimateComponent<HTMLElement>(options);

  return (
    <section
      id="about"
      className="flex flex-col gap-4 min-h-screen max-w-screen-lg mb-10 px-4 relative overflow-hidden"
    >
      <motion.article
        className="flex flex-col gap-2"
        ref={aboutRef}
        animate={aboutControls}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="text-4xl lg:text-6xl font-medium text-zinc-300 mb-2">
          About
        </h2>
        <h3 className="text-2xl lg:text-3xl font-medium text-zinc-400 mb-2">
          Summary
        </h3>
        <p className="text-zinc-500 lg:text-lg">
          Experienced Frontend Developer with 2+ years of expertise in
          JavaScript and TypeScript, including proficiency in unit testing with
          Jest and Vite Test. Skilled in implementing software architecture,
          design patterns, and maintaining clean, SOLID code.
        </p>
        <p className="text-zinc-500 lg:text-lg">
          Proficient in Git version control and seasoned as a lead developer in
          React and React Native projects. Committed to delivering exceptional
          user experiences and staying current with industry trends.
        </p>
      </motion.article>

      <motion.article
        id="experience"
        className="flex flex-col gap-4"
        ref={experienceRef}
        initial="hidden"
        animate={experienceControls}
        transition={{ duration: 1, delay: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h3 className="text-2xl lg:text-3xl font-medium text-zinc-400 mb-2">
          Experience
        </h3>
        <TimeLine>
          <TimeLine.Element
            date="February 2022 - Present"
            title="FrontEnd Developer in Aeto"
          >
            <p className="text-zinc-500">
              As a Frontend Developer specializing in React and React Native
              with TypeScript, leadership is demonstrated by guiding a team of
              two professionals in the development of a mobile application.
              Embracing industry best practices, this role enforces Git flow,
              design patterns, testing, clean code, and the SOLID principle.
            </p>

            <ul className="flex flex-row flex-wrap gap-x-4 mt-2 text-zinc-400 font-medium">
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Redux-Toolkit</li>
            </ul>
          </TimeLine.Element>
        </TimeLine>
      </motion.article>

      <motion.article
        id="experience"
        className="flex flex-col gap-4"
        initial="hidden"
        ref={eduRef}
        animate={eduControls}
        transition={{ duration: 1, delay: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h3 className="text-2xl lg:text-3xl font-medium text-zinc-400 mb-2">
          Education
        </h3>
        <TimeLine>
          <TimeLine.Element
            title="Informática Administrativa in Universidad Ciudadana de Nuevo León"
            date="May 2023"
          >
            <p className="text-zinc-500">
              I delved into subjects such as Accounting, Business
              Administration, Microeconomics, Macroeconomics, and other key
              administrative topics. Additionally, I honed my hard skills in
              areas like database management, algorithms, Object-Oriented
              Programming (OOP), web development, and computer networks. These
              studies not only equipped me with technical expertise but also
              enhanced my soft skills, such as problem-solving, strategic
              thinking, and effective communication.
            </p>
          </TimeLine.Element>
        </TimeLine>
      </motion.article>

      <motion.article
        ref={skillsRef}
        animate={skillsAnimation}
        initial="hidden"
        transition={{ duration: 1, delay: 0.75 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h3 className="text-2xl lg:text-3xl font-medium text-zinc-400 mb-2">
          Stack
        </h3>

        <ul className="flex flex-row flex-wrap items-center gap-4">
          <li className="icon">
            <Js width={64} />
          </li>
          <li className="icon">
            <TypeScript width={64} />
          </li>
          <li className="icon">
            <Reactjs width={64} />
          </li>
          <li className="icon">
            <Reactts width={64} />
          </li>
          <li className="icon">
            <Angular width={64} />
          </li>
          <li className="icon">
            <Jest width={64} />
          </li>
          <li className="icon">
            <Node width={64} />
          </li>
          <li className="icon">
            <Tailwind width={64} />
          </li>
          <li className="icon">
            <Firebase width={64} />
          </li>
          <li className="icon">
            <Git width={64} />
          </li>
          <li className="icon">
            <Github width={64} />
          </li>
        </ul>
      </motion.article>
    </section>
  );
};
