import { AboutMe, Start, MyStack, Projects } from "@/sections";
import { Nav, Progress } from "@/components";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.scrollY > 0) {
      window.scroll({
        top: 0,
      });
    }
  }, []);
  return (
    <>
      <div className="fixed md:bottom-0 max-md:top-0 w-full z-[90] h-3 bg-zinc-800">
        <Progress />
      </div>

      <Nav />

      <section className="h-screen" id="start">
        <Start />
      </section>
      <section className="" id="aboutme">
        <AboutMe />
      </section>
      <section className="" id="mystack">
        <MyStack />
      </section>
      <section className="" id="projects">
        <Projects />
      </section>
    </>
  );
}
