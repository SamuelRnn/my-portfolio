import Nav from "./Nav";
import pfp from "@/assets/image.jpeg";
import ContactBar from "./ContactBar";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="w-main mx-auto h-screen relative snap" id="start">
      {/* line */}
      <motion.div
        className="ml-4 hidden lg:flex items-start gap-4 flex-col absolute top-0 opacity-20 h-[95vh] -z-10"
        initial={{ y: -800 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white h-full w-[2.65rem]"></div>
        <span className="writing rotate-180 font-titles">reactdev</span>
      </motion.div>

      <ContactBar />

      <Nav />

      <section className="flex flex-col items-center gap-y-4 pt-16">
        <img
          src={pfp}
          alt="picture"
          className="h-[250px] w-[250px] rounded-t-full rounded-bl-full border-b-4 border-t-8 border-accent"
        />

        <div className="w-[370px] text-right mr-4">
          <h1
            className="text-5xl text-zinc-300/80 font-titles hero glitch layers"
            data-text="samuel rnn"
          >
            <span>samuel rnn</span>
          </h1>
          <h2
            className="text-xl font-accent bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 
          to-rose-500"
          >
            Sam Perez | Front End Developer
          </h2>

          <div className="h-2 bg-accent mt-5 rounded-full relative">
            <div className="h-6 w-6 rounded-sm absolute top-[-8px] bg-accent"></div>
          </div>
        </div>
      </section>
    </header>
  );
}
