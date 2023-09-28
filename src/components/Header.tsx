import { useCallback, useEffect, useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    const event = () => {
      if (window.innerWidth >= 768) {
        if (isOpenMenu) setIsOpenMenu((prevState) => !prevState);
      }
    };

    window.addEventListener("resize", event);

    return () => {
      window.removeEventListener("resize", event);
    };
  }, [isOpenMenu]);

  return (
    <header className="px-4 py-4 w-full fixed top-0 bg-inherit">
      <nav className="flex justify-between items-center max-w-screen-lg m-auto">
        <h1 className="text-2xl font-bold">Osvaldo Valentin</h1>

        <button
          className="lg:hidden"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          {isOpenMenu ? <MdClose size={32} /> : <MdOutlineMenu size={32} />}
        </button>

        <div className="hidden lg:flex lg:gap-4">
          <a href="#about" className="header-tag">
            about
          </a>
          <a href="#projects" className="header-tag">
            projects
          </a>
          <a href="#contact" className="header-tag">
            contact
          </a>
          <a
            href="#"
            className="capitalize font-medium px-4 py-2 rounded-md transition-all bg-white text-black"
          >
            Resume
          </a>
        </div>
      </nav>

      <section
        className={`bg-zinc-900 flex flex-col justify-center items-center gap-2 fixed w-full h-full left-0 transition-all duration-300 z-50 ${
          isOpenMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="#about" className="header-tag">
          about
        </a>
        <a href="#projects" className="header-tag">
          projects
        </a>
        <a href="#contact" className="header-tag">
          contact
        </a>
        <a
          href="#"
          className="capitalize text-xl font-medium px-4 py-2 rounded-md transition-all bg-white text-black"
        >
          Resume
        </a>
      </section>
    </header>
  );
};
