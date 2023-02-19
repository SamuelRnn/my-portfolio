import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [navTranslate, setNavTranslate] = useState(-70);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) setNavTranslate(0);
      else setNavTranslate(-70);
    };
  }, []);
  return (
    <motion.nav
      className="text-accent w-main fixed top-0 bg-main-dark z-50"
      initial={{ y: -70 }}
      animate={{ y: navTranslate }}
      transition={{ bounce: false }}
    >
      <ul className="ml-auto flex w-fit items-center justify-end gap-8 h-16 font-accent uppercase font-bold text-transparent bg-gradient-to-r from-indigo-500 to-rose-500 mr-4 bg-clip-text">
        <li>
          <a href="#start">start</a>
        </li>
        <li>about me</li>
        <li>projects</li>
        <li>my stack</li>
      </ul>
    </motion.nav>
  );
}
