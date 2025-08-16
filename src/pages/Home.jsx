import { ArrowRight } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { useRef } from "react";

export const Home = () => {
  const projectRef = useRef(null);
  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative flex min-h-dvh w-full flex-col items-center justify-start overflow-hidden bg-white dark:bg-zinc-900">
      {/* HERO */}
      <section className="relative z-10 mt-12 w-full px-6 py-20 text-center">
        <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
          Hi, I'm Fathur.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 md:text-xl dark:text-gray-400">
          Still learning, always improving, always creating.
        </p>
        <button
          onClick={scrollToProjects}
          className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-black px-6 py-3 text-white shadow transition hover:scale-105 hover:bg-gray-800 dark:bg-gray-300 dark:text-gray-800 dark:hover:text-white"
        >
          Say hi <ArrowRight size={18} />
        </button>
      </section>
      <hr className="w-full border-4 border-zinc-200 dark:border-zinc-800" />
      {/* SECTION 1 */}
      <section
        className="w-full bg-slate-100 text-center dark:bg-zinc-950"
        ref={projectRef}
      >
        {/* TITLE */}
        <div className="px-4 pt-10 pb-5">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Projects
          </h2>
          <p className="mt-2 text-xl text-gray-600 md:text-3xl">
            A few things I've built
          </p>
        </div>
        {/* CARD */}
        <ProjectCard />
        {/* <div className="grid grid-cols-1 gap-2 px-2 py-4 md:grid-cols-4">
          <div className="bg h-80 rounded-sm p-4 text-gray-200">
            <h1>Card</h1>
          </div>
        </div> */}
      </section>
    </div>
  );
};
