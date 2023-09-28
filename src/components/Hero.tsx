import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../assets/portfolio.jpg";

export const Hero = () => {
  return (
    <section className="flex items-center h-screen p-4 max-w-screen-lg">
      <article className="flex flex-col items-center gap-4 lg:flex-row-reverse">
        <div className="hidden lg:block">
          <Image
            src={image}
            alt="Osvaldo Valentin"
            className="rounded-full w-full grayscale max-w-[400px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:items-start gap-3">
          <h2 className="text-center lg:text-left text-5xl font-extrabold">
            Osvaldo Valentin Garcia
          </h2>
          <h3 className="text-center lg:text-left text-3xl font-bold text-gray-400">
            FrontEnd Developer
          </h3>
          <p className="text-center lg:text-left font-medium text-lg text-gray-500">
            Experienced <span className="text-yellow-300">JavaScript</span> and{" "}
            <span className="text-cyan-400">TypeScript</span> developer
            specializing in <span className="text-blue-400">React</span> and{" "}
            <span className="text-blue-500">React Native</span>. Team lead of a
            mobile project in Aeto and a resilient developer.
          </p>
          <div className="flex flex-row gap-4">
            <button className="btn-primary">
              Experience
            </button>
            <button className="btn-outline">
              Summary
            </button>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mt-1">
            <a
              href="#"
              className="text-gray-500 transition-all hover:text-gray-300 hover:drop-shadow-[0px_0px_8px_rgba(255,255,255,0.35)]"
            >
              <FaGithub size={36} />
            </a>
            <a
              href="#"
              className="text-gray-500 transition-all hover:text-gray-300 hover:drop-shadow-[0px_0px_8px_rgba(255,255,255,0.35)]"
            >
              <FaLinkedin size={36} />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
