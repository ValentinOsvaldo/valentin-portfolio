import Image from 'next/image';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

import image from '../assets/portfolio.jpg';
import { useAnimateComponent } from '@/hooks';

export const Hero = () => {
  const [titleRef, titleControls] = useAnimateComponent<HTMLHeadingElement>();
  const [subTitleRef, subControls] = useAnimateComponent<HTMLHeadingElement>();
  const [summaryRef, summaryControls] =
    useAnimateComponent<HTMLParagraphElement>();
  const [elementRef, elementControls] = useAnimateComponent<HTMLDivElement>();
  const [photoRef, photoControls] = useAnimateComponent<HTMLDivElement>();

  return (
    <section className="flex items-center h-screen p-4 max-w-screen-lg relative overflow-hidden">
      <article className="flex flex-col items-center gap-8 lg:flex-row-reverse">
        <motion.div
          className="hidden select-none lg:block"
          ref={photoRef}
          animate={photoControls}
          initial="hidden"
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Image
            src={image}
            alt="Osvaldo Valentin"
            className="rounded-full w-full grayscale max-w-[400px]"
            loading="lazy"
          />
        </motion.div>
        <div className="flex flex-col items-center justify-center lg:items-start gap-3">
          <motion.h2
            ref={titleRef}
            className="text-center lg:text-left text-5xl font-extrabold"
            animate={titleControls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Osvaldo Valentin Garcia
          </motion.h2>
          <motion.h3
            className="text-center lg:text-left text-3xl font-bold text-gray-400"
            ref={subTitleRef}
            animate={subControls}
            initial="hidden"
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            FrontEnd Developer
          </motion.h3>
          <motion.p
            className="text-center lg:text-left font-medium text-lg text-gray-500"
            ref={summaryRef}
            animate={summaryControls}
            initial="hidden"
            transition={{ duration: 1, delay: 0.75 }}
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Experienced{' '}
            <span className="font-bold text-gray-400">JavaScript</span> and{' '}
            <span className="font-bold text-gray-400">TypeScript</span>{' '}
            developer specializing in{' '}
            <span className="font-bold text-gray-400">React</span> and{' '}
            <span className="font-bold text-gray-400">React Native</span>. Team
            lead of a mobile project in{' '}
            <a
              href="https://www.aeto.com.mx/"
              className="underline underline-offset-4 decoration-dashed hover:text-gray-300"
            >
              Aeto
            </a>{' '}
            and a resilient developer.
          </motion.p>
          <motion.div
            className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mt-1"
            ref={elementRef}
            animate={elementControls}
            initial="hidden"
            transition={{ duration: 1, delay: 1 }}
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <a
              href="https://github.com/ValentinOsvaldo"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-500 transition-all hover:text-gray-300 hover:drop-shadow-[0px_0px_8px_rgba(255,255,255,0.35)]"
            >
              <FaGithub size={36} />
            </a>
            <a
              href="https://www.linkedin.com/in/valentin-osvaldo/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-500 transition-all hover:text-gray-300 hover:drop-shadow-[0px_0px_8px_rgba(255,255,255,0.35)]"
            >
              <FaLinkedin size={36} />
            </a>
          </motion.div>
        </div>
      </article>
    </section>
  );
};
