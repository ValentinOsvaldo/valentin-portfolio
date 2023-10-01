import { useEffect, useState } from "react";
import { Link }  from 'react-scroll';
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
    <header className="w-full fixed top-0 z-50">
      <nav className={`${!isOpenMenu && "bg-zinc-900/50 backdrop-blur"} p-4`}>
        <section className="flex justify-end items-center max-w-screen-lg m-auto relative z-50">
          <button
            className="lg:hidden"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            {isOpenMenu ? <MdClose size={32} /> : <MdOutlineMenu size={32} />}
          </button>
          <div className="hidden lg:flex items-center lg:gap-4">
            <Link to="about" smooth spy className="header-tag" offset={-100} duration={100}>
              about
            </Link>
            <Link to="projects" smooth spy className="header-tag" offset={-100} duration={100}>
              projects
            </Link>
            <Link to="contact" smooth spy className="header-tag" offset={-100} duration={100}>
              contact
            </Link>
            <a
              href="#"
              className="btn-outline"
            >
              Resume
            </a>
          </div>
        </section>
      </nav>

      <section
        className={`flex flex-col justify-center items-center top-0 gap-2 fixed w-full h-full left-0 transition-all duration-300 bg-zinc-900/50 backdrop-blur ${
          isOpenMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a
          href="#about"
          className="header-tag"
          onClick={() => setIsOpenMenu(false)}
        >
          about
        </a>
        <a
          href="#projects"
          className="header-tag"
          onClick={() => setIsOpenMenu(false)}
        >
          projects
        </a>
        <a
          href="#contact"
          className="header-tag"
          onClick={() => setIsOpenMenu(false)}
        >
          contact
        </a>
        <a
          href="#"
          className="btn-outline"
          onClick={() => setIsOpenMenu(false)}
        >
          Resume
        </a>
      </section>
    </header>
  );
};
