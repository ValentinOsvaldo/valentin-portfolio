import { MdEmail } from 'react-icons/md';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col gap-2 items-center justify-center min-h-screen max-w-screen-lg px-4"
    >
      <h2 className="text-4xl lg:text-6xl font-medium text-zinc-400">
        Contact
      </h2>
      <p className="text-zinc-500 text-lg text-center">
        Thank you for exploring my portfolio! If you're interested in my work or
        have any inquiries, I would love to connect with you. Feel free to reach
        out to me via{' '}
        <a
          href="https://www.linkedin.com/in/valentin-osvaldo/"
          target="_blank"
          rel="noopener noreferrer"
          className='text-zinc-300 font-medium hover:underline'
        >
          LinkedIn
        </a>{' '}
        or email. I'm always open to new opportunities, collaborations, or even
        just a friendly chat.
      </p>

      <a
        href="mailto:valentingarcia.osvaldo@gmail.com"
        className="font-medium text-xl text-zinc-400 flex flex-row items-center gap-x-2 transition-all duration-500 hover:underline"
      >
        <span>
          <MdEmail />
        </span>
        <span className='text-sm md:text-lg lg:text-xl inline'>
          valentingarcia.osvaldo@gmail.com
        </span>
      </a>
    </section>
  );
};
