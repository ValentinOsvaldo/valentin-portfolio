import React, { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

import { TimeLine } from '.';

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 100px -50px 0px',
  });
  const aboutControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      aboutControls.start('visible');
    }
  }, [isInView]);

  return (
    <section
      id="about"
      className="flex flex-col gap-4 min-h-screen max-w-screen-lg mb-10 px-4 relative overflow-hidden"
      ref={ref}
    >
      <motion.article
        className="flex flex-col gap-2"
        animate={aboutControls}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="text-4xl lg:text-6xl font-medium text-gray-300 mb-2">
          About
        </h2>
        <h3 className="text-2xl lg:text-3xl font-medium text-gray-400 mb-2">
          Summary
        </h3>
        <p className="text-gray-500 lg:text-lg">
          Experienced Frontend Developer with 2+ years of expertise in
          JavaScript and TypeScript, including proficiency in unit testing with
          Jest and Vite Test. Skilled in implementing software architecture,
          design patterns, and maintaining clean, SOLID code.
        </p>
        <p className="text-gray-500 lg:text-lg">
          Proficient in Git version control and seasoned as a lead developer in
          React and React Native projects. Committed to delivering exceptional
          user experiences and staying current with industry trends.
        </p>
      </motion.article>

      <motion.article
        id="experience"
        className="flex flex-col gap-4"
        initial="hidden"
        animate={aboutControls}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h3 className="text-2xl lg:text-3xl font-medium text-gray-400 mb-2">
          Experience
        </h3>
        <TimeLine>
          <TimeLine.Element
            date="February 2022 - Present"
            title="FrontEnd Developer in Aeto"
          >
            <p className="text-gray-500">
              As a Frontend Developer specializing in React and React Native
              with TypeScript, leadership is demonstrated by guiding a team of
              two professionals in the development of a mobile application.
              Embracing industry best practices, this role enforces Git flow,
              design patterns, testing, clean code, and the SOLID principle.
            </p>

            <ul className="flex flex-row flex-wrap gap-x-4 mt-2 text-gray-400 font-medium">
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
        animate={aboutControls}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 175 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h3 className="text-2xl lg:text-3xl font-medium text-gray-400 mb-2">
          Education
        </h3>
        <TimeLine>
          <TimeLine.Element
            title="Informática Administrativa in Universidad Ciudadana de Nuevo León"
            date="May 2023"
          ></TimeLine.Element>
        </TimeLine>
      </motion.article>
    </section>
  );
};
