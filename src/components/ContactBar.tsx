import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsHandIndexFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
  mode?: "fixed" | "static";
}

export default function ContactBar({ className = "", mode }: Props) {
  const [open, setOpen] = useState(true);
  const urls = {
    github: "https://github.com/SamuelRnn",
    instagram: "https://www.instagram.com/samuelrnnv1/",
    linkedin: "https://www.linkedin.com/in/sam-p-quino/",
    mail: "mailto:ricardo.reinn@outlook.com",
    whatsapp: "https://wa.me/51940673811",
  };
  useEffect(() => {
    if (mode === "fixed") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          setOpen(false);
        } else setOpen(true);
      });
    }
  }, []);
  return (
    <>
      {/* normal */}
      {mode === "fixed" && (
        <div
          className={`flex justify-center md:justify-end fixed bottom-0 w-main mx-auto ${className}`}
        >
          <motion.div
            className={`overflow-hidden rounded-t-3xl mx-4 pb-8 transition-colors duration-200 ease-out ${
              !open && "bg-zinc-800"
            }`}
            animate={{ y: open ? 0 : 85 }}
            whileHover={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
            <motion.div
              className="w-full grid place-items-center bg-zinc-800 mb-4 h-10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: open ? 0 : 1,
              }}
            >
              <h5 className="uppercase font-thin tracking-[.2rem] text-zinc-300 text-sm flex gap-x-2 items-center">
                Get in touch
                <BsHandIndexFill className="text-zinc-400" />
              </h5>
            </motion.div>

            <div className="flex gap-x-3 px-2 items-end">
              <motion.a
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0,
                  ease: "backInOut",
                  duration: 0.75,
                }}
                href={urls.github}
                target="_blank"
                className="bg-zinc-800 rounded-full h-12 w-12 grid place-items-center text-2xl text-violet-500 shadow-md shadow-zinc-900 hover:text-zinc-300 transition-colors duration-300 ease-out"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.1,
                  ease: "backInOut",
                  duration: 0.75,
                }}
                href={urls.instagram}
                target="_blank"
                className="bg-zinc-800 rounded-full h-12 w-12 grid place-items-center text-2xl text-rose-500 shadow-md shadow-zinc-900 hover:text-zinc-300 transition-colors duration-300 ease-out"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.2,
                  ease: "backInOut",
                  duration: 0.75,
                }}
                href={urls.linkedin}
                target="_blank"
                className="bg-zinc-800 rounded-full h-12 w-12 grid place-items-center text-2xl text-blue-500 shadow-md shadow-zinc-900 hover:text-zinc-300 transition-colors duration-300 ease-out"
              >
                <FaLinkedinIn />
              </motion.a>

              <motion.a
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.3,
                  ease: "backInOut",
                  duration: 0.75,
                }}
                href={urls.whatsapp}
                target="_blank"
                className="bg-zinc-800 rounded-full h-12 w-12 grid place-items-center text-2xl text-emerald-500 shadow-md shadow-zinc-900 hover:text-zinc-300 transition-colors duration-300 ease-out"
              >
                <FaWhatsapp />
              </motion.a>

              <motion.a
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.4,
                  ease: "backInOut",
                  duration: 0.75,
                }}
                href={urls.mail}
                target="_blank"
                className="bg-zinc-800 rounded-full h-12 w-12 grid place-items-center text-2xl text-slate-500 shadow-md shadow-zinc-900 hover:text-zinc-300 transition-colors duration-300 ease-out"
              >
                <FiMail />
              </motion.a>
            </div>
          </motion.div>
        </div>
      )}

      {/* static (no close effect on scroll) */}
      {mode === "static" && (
        <div
          className={`flex justify-center md:justify-end fixed bottom-0 pb-8 w-main mx-auto ${className}`}
        >
          <div className="flex gap-x-3 px-4">
            <motion.a
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{
                delay: 0,
                ease: "backInOut",
                duration: 0.75,
              }}
              href={urls.github}
              target="_blank"
              className="bg-zinc-800 rounded-full h-12 w-12 grid place-items-center text-2xl text-violet-500 shadow-md shadow-zinc-900 hover:text-zinc-300 transition-colors duration-300 ease-out"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.1,
                ease: "backInOut",
                duration: 0.75,
              }}
              href={urls.instagram}
              target="_blank"
              className="bg-zinc-800 rounded-full h-12 w-12 grid place-items-center text-2xl text-rose-500 shadow-md shadow-zinc-900 hover:text-zinc-300 transition-colors duration-300 ease-out"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.2,
                ease: "backInOut",
                duration: 0.75,
              }}
              href={urls.linkedin}
              target="_blank"
              className="bg-zinc-800 rounded-full h-12 w-12 grid place-items-center text-2xl text-blue-500 shadow-md shadow-zinc-900 hover:text-zinc-300 transition-colors duration-300 ease-out"
            >
              <FaLinkedinIn />
            </motion.a>

            <motion.a
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.3,
                ease: "backInOut",
                duration: 0.75,
              }}
              href={urls.whatsapp}
              target="_blank"
              className="bg-zinc-800 rounded-full h-12 w-12 grid place-items-center text-2xl text-emerald-500 shadow-md shadow-zinc-900 hover:text-zinc-300 transition-colors duration-300 ease-out"
            >
              <FaWhatsapp />
            </motion.a>

            <motion.a
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.4,
                ease: "backInOut",
                duration: 0.75,
              }}
              href={urls.mail}
              target="_blank"
              className="bg-zinc-800 rounded-full h-12 w-12 grid place-items-center text-2xl text-slate-500 shadow-md shadow-zinc-900 hover:text-zinc-300 transition-colors duration-300 ease-out"
            >
              <FiMail />
            </motion.a>
          </div>
        </div>
      )}
    </>
  );
}
