import { ProjectCard } from "@/components/Home/ProjectCard";
import { motion } from "framer-motion";

export const ProjectSection = ({ projectRef }) => {
  return (
    <section
      className="w-full bg-white text-center dark:bg-black"
      ref={projectRef}
    >
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="px-4 pt-20 pb-5"
      >
        <p className="text-2xl font-medium text-gray-600 md:text-4xl">
          A few things I've built
        </p>
      </motion.div>
      <ProjectCard />
    </section>
  );
};
