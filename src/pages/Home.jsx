import { ArrowRight } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Home = () => {
  const projectRef = useRef(null);
  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative flex w-full flex-col items-center justify-start overflow-hidden bg-white dark:bg-zinc-900">
      {/* HERO */}
      <motion.section
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative z-10 w-full px-6 py-40 text-center"
      >
        <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
          Hi, I'm Fathur.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 md:text-xl dark:text-gray-400">
          Still learning, always improving, always creating.
        </p>
        <button
          onClick={scrollToProjects}
          className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-black px-6 py-3 text-white shadow transition hover:bg-gray-800 dark:bg-gray-300 dark:text-gray-800 dark:hover:text-white"
        >
          Explore Projects <ArrowRight size={18} />
        </button>
      </motion.section>
      <hr className="w-full border-4 border-zinc-200 dark:border-zinc-800" />
      {/* SECTION 1 */}
      <section
        className="w-full bg-slate-100 pt-10 text-center dark:bg-zinc-950"
        ref={projectRef}
      >
        {/* TITLE */}
        <div className="px-4 pt-4 pb-5">
          <p className="mt-2 text-2xl text-gray-600 md:text-3xl">
            A few things I've built
          </p>
        </div>
        {/* CARD */}
        <ProjectCard />
      </section>
      {/* SECTION 2 */}
    </div>
  );
};
