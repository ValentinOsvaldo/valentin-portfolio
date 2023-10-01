import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';

import { useAnimateComponent } from '@/hooks';

export const Contact = () => {
  const [titleRef, titleControls] = useAnimateComponent<HTMLHeadingElement>();
  const [textRef, textControls] = useAnimateComponent<HTMLHeadingElement>();
  const [emailRef, emailControls] = useAnimateComponent<HTMLAnchorElement>();

  return (
    <section
      id="contact"
      className="flex flex-col gap-2 items-center justify-center overflow-hidden min-h-screen max-w-screen-lg px-4"
    >
      <motion.h2
        className="text-4xl lg:text-6xl font-medium text-zinc-400"
        ref={titleRef}
        initial="hidden"
        animate={titleControls}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        Contact
      </motion.h2>
      <motion.p
        className="text-zinc-500 text-lg text-center"
        ref={textRef}
        initial="hidden"
        animate={textControls}
        transition={{ duration: 1, delay: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        Thank you for exploring my portfolio! If you're interested in my work or
        have any inquiries, I would love to connect with you. Feel free to reach
        out to me via{' '}
        <a
          href="https://www.linkedin.com/in/valentin-osvaldo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 font-medium hover:underline"
        >
          LinkedIn
        </a>{' '}
        or email. I'm always open to new opportunities, collaborations, or even
        just a friendly chat.
      </motion.p>

      <motion.a
        href="mailto:valentingarcia.osvaldo@gmail.com"
        className="font-medium text-xl text-zinc-400 flex flex-row items-center gap-x-2 hover:underline"
        ref={emailRef}
        animate={emailControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.5 }}
        variants={{
          hidden: { opacity: 0, scale: 0.75 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <span>
          <MdEmail />
        </span>
        <span className="text-sm md:text-lg lg:text-xl inline">
          valentingarcia.osvaldo@gmail.com
        </span>
      </motion.a>
    </section>
  );
};
