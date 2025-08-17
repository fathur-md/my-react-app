import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { memo } from "react";

export const HeroSection = memo(({ scrollToProjects }) => {
  return (
    <section className="relative z-10 w-full bg-gradient-to-b from-transparent to-gray-100 px-6 py-36 text-center dark:to-neutral-900">
      <motion.div
        initial={{ scaleY: 0.5, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="font-semibold tracking-tight"
      >
        <p className="text-2xl text-sky-700 md:text-4xl dark:text-sky-400">
          Hello World
        </p>
        <h1 className="mt-3 text-4xl md:text-7xl">
          I'm Fathur.
          <br />I build, I design, I learn.
        </h1>
        <p className="py-6 text-lg font-medium tracking-normal text-gray-400 italic md:text-2xl">
          "Still learning, always improving, always creating"
        </p>
      </motion.div>

      <button
        onClick={scrollToProjects}
        aria-label="Scroll to Projects"
        className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full bg-black px-6 py-3 text-white shadow transition hover:bg-gray-800 dark:bg-gray-300 dark:text-gray-800 dark:hover:text-white"
      >
        Explore my digital world <ArrowRight size={18} />
      </button>
    </section>
  );
});
