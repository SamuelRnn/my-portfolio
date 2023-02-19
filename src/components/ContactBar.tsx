import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactBar() {
  const urls = {
    github: "https://github.com/SamuelRnn",
    instagram: "https://www.instagram.com/samuelrnnv1/",
    linkedin: "https://www.linkedin.com/in/sam-p-quino/",
    mail: "#con",
  };

  return (
    <div className="fixed bottom-8 pr-4 w-main mx-auto">
      <motion.div className="flex gap-3 justify-end">
        <motion.a
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          transition={{ delay: 0, ease: "backInOut", duration: 0.4 }}
          href={urls.github}
          target="_blank"
          className="bg-zinc-200/10 rounded-full h-12 w-12 grid place-items-center text-2xl text-violet-500"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1, ease: "backInOut", duration: 0.4 }}
          href={urls.instagram}
          target="_blank"
          className="bg-zinc-200/10 rounded-full h-12 w-12 grid place-items-center text-2xl text-rose-500"
        >
          <FaInstagram />
        </motion.a>

        <motion.a
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, ease: "backInOut", duration: 0.4 }}
          href={urls.linkedin}
          target="_blank"
          className="bg-zinc-200/10 rounded-full h-12 w-12 grid place-items-center text-2xl text-blue-500"
        >
          <FaLinkedinIn />
        </motion.a>

        <motion.a
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, ease: "backInOut", duration: 0.4 }}
          href={"https://wa.me/51940673811"}
          target="_blank"
          className="bg-zinc-200/10 rounded-full h-12 w-12 grid place-items-center text-2xl text-emerald-500"
        >
          <FaWhatsapp />
        </motion.a>

        <motion.a
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, ease: "backInOut", duration: 0.4 }}
          href={"/" /*boton que abra modal del mail*/}
          target="_blank"
          className="bg-zinc-200/10 rounded-full h-12 w-12 grid place-items-center text-2xl text-slate-500"
        >
          <FiMail />
        </motion.a>
      </motion.div>
    </div>
  );
}
