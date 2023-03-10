import ContactBar from "@/components/ContactBar";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";

export default function Start() {
  const navigateToNext = () => {
    window.scroll({
      top: window.innerHeight,
    });
  };
  return (
    <div className="w-main mx-auto grid place-items-center relative overflow-x-hidden h-full">
      <div className="flex flex-col items-center justify-around h-start-banner">
        <div className="mx-4 text-center">
          <center>
            <img
              src="./image.jpeg"
              alt="picture"
              className="sm:h-[250px] sm:w-[250px] h-[200px] w-[200px] rounded-t-full rounded-bl-full border-b-8 border-t-8 border-accent mb-3"
            />
          </center>
          <h1
            className="sm:text-5xl text-4xl text-zinc-300/80 font-titles hero glitch layers"
            data-text="samuel rnn"
          >
            <span>samuel rnn</span>
          </h1>
          <h2 className="text-lg h-6 sm:text-right text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500 font-mono font-bold">
            <Typewriter words={["Sam Perez", "Front End Developer"]} />
          </h2>

          <div className="h-2 bg-accent mt-5 rounded-full relative">
            <div className="h-6 w-6 rounded-sm absolute top-[-8px] bg-accent"></div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 mt-8">
          <motion.button
            onClick={navigateToNext}
            className="grid place-items-center bg-zinc-800 rounded-full text-zinc-200 w-12 h-12 text-2xl"
            whileInView={{ scale: [1, 1.14, 1] }}
            transition={{
              damping: 30,
              stiffness: 300,
              duration: 1,
              repeat: Infinity,
            }}
          >
            <BsChevronDown />
          </motion.button>
          <p className="uppercase font-thin tracking-[.2rem] text-zinc-400 text-sm">
            about me
          </p>
        </div>
      </div>

      {/* stripe */}
      <motion.div
        className="ml-4 hidden lg:flex items-start gap-4 flex-col absolute left-0 top-0 opacity-20 h-[95vh] -z-10"
        initial={{ y: -800 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="bg-white h-full w-[2.65rem]"></div>
        <span className="writing rotate-180 font-titles">reactdev</span>
      </motion.div>

      <ContactBar className="max-md:hidden fixed" mode="fixed" />
    </div>
  );
}
