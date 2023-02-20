import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import ContactBar from "./ContactBar";

const scrollToSection = (section: string) => {
  if (section === "start") {
    window?.scroll({ top: 0 });
  } else {
    let sec = document.getElementById(section);
    sec?.scrollIntoView(true);
  }
};
export function Nav() {
  const [navTranslate, setNavTranslate] = useState(-70);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) setNavTranslate(0);
      else setNavTranslate(-70);
    };
  }, []);
  return (
    <>
      <motion.nav
        className="text-accent w-main fixed top-0 bg-main-dark z-50 hidden sm:block"
        initial={{ y: -70 }}
        animate={{ y: navTranslate }}
        transition={{ bounce: false }}
      >
        <ul className="flex ml-auto w-fit items-center justify-end gap-8 h-16 font-accent uppercase font-bold text-transparent bg-gradient-to-r from-indigo-500 to-rose-500 mr-4 bg-clip-text">
          <motion.li
            onClick={() => scrollToSection("start")}
            className="cursor-pointer hover:text-zinc-300 transition-colors ease-out duration-300"
            whileHover={{ textShadow: "0 0 6px" }}
          >
            start
          </motion.li>

          <motion.li
            onClick={() => scrollToSection("aboutme")}
            className="cursor-pointer hover:text-zinc-300 transition-colors ease-out duration-300"
            whileHover={{ textShadow: "0 0 6px" }}
          >
            about me
          </motion.li>

          <motion.li
            onClick={() => scrollToSection("mystack")}
            className="cursor-pointer hover:text-zinc-300 transition-colors ease-out duration-300"
            whileHover={{ textShadow: "0 0 6px" }}
          >
            my stack
          </motion.li>

          <motion.li
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer hover:text-zinc-300 transition-colors ease-out duration-300"
            whileHover={{ textShadow: "0 0 6px" }}
          >
            projects
          </motion.li>
        </ul>
      </motion.nav>

      {/* mobile nav */}
      <MobileNav />
    </>
  );
}

export function MobileNav() {
  const scrollBlocked = "scroll-blocked";

  const [active, setActive] = useState(false);

  const toggleModal = () => {
    setActive(!active);
    document.body.classList.toggle(scrollBlocked);
  };
  const scrollToSection = (section: string) => {
    if (section === "start") {
      window?.scroll({ top: 0 });
    } else {
      let sec = document.getElementById(section);
      sec?.scrollIntoView(true);
    }
    toggleModal();
  };
  const linkClass =
    "cursor-pointer transition-colors ease-out duration-300 w-full active:bg-slate-zinc-300/20 h-10 flex justify-center items-center text-transparent font-accent uppercase border-b border-zinc-400/20";

  return (
    <>
      <nav className="sm:hidden h-16 fixed top-0 w-full flex justify-center items-center text-2xl bg-main-dark z-50">
        <button
          className={`mt-3 w-16 h-8 grid place-items-center rounded-md transition-colors duration-500 ${
            active && "bg-zinc-800"
          }`}
          onClick={toggleModal}
        >
          <FiMenu />
        </button>
      </nav>
      <AnimatePresence>
        {active && (
          // modal
          <>
            <motion.div
              className="fixed h-screen w-full bg-main-dark/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
            />
            <motion.div
              className="fixed top-0 h-[21rem] w-full bg-zinc-900 pt-16 overflow-hidden shadow-xl shadow-black/20 border-b-8 border-accent rounded-2xl"
              initial={{ y: "-20rem" }}
              animate={{ y: 0 }}
              exit={{ y: "-20rem" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <nav className="relative h-full w-[95%] mx-auto">
                <ul className="flex flex-col bg-gradient-to-b from-indigo-500 to-rose-500 bg-clip-text">
                  <li
                    onClick={() => scrollToSection("start")}
                    className={linkClass}
                  >
                    start
                  </li>

                  <li
                    onClick={() => scrollToSection("aboutme")}
                    className={linkClass}
                  >
                    about me
                  </li>

                  <li
                    onClick={() => scrollToSection("mystack")}
                    className={linkClass}
                  >
                    my stack
                  </li>

                  <li
                    onClick={() => scrollToSection("projects")}
                    className={linkClass}
                  >
                    projects
                  </li>
                </ul>
                <ContactBar className="absolute" mode="static" />
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* <div>
        
      </div> */}
    </>
  );
}
