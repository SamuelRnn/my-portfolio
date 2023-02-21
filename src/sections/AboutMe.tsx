export default function AboutMe() {
  return (
    <div className="h-full w-full pt-16">
      <div className="w-main mx-auto bg-main-dark">
        <h3 className="font-titles bg-gradient-to-r from-indigo-500 to-rose-500 bg-clip-text w-fit text-transparent text-3xl">
          who am i
        </h3>
        <div className="mt-10 flex flex-col lg:flex-row gap-6 text-justify md:text-lg items-center">
          <img
            src="./code.png"
            alt="a"
            className="rounded-md w-full max-w-[500px] mx-auto object-cover object-left-top"
          />
          <div>
            <p className="font-mono font-bold text-zinc-400">
              Hello! I'm a passionate Full-Stack developer who's always seeking
              to expand my knowledge and skills in the field. With my high-end
              skillset, I aim to deliver the best and most scalable results for
              every project I work on. Whether it's developing robust back-end
              solutions or crafting engaging user interfaces, I'm always up for
              a challenge.
            </p>
            <p className="font-mono font-bold text-zinc-400">
              I'm always eager to learn new technologies and approaches, and I
              believe that continuous learning is critical to staying ahead in
              the fast-paced world of software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
