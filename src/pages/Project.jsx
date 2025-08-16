import { motion } from "framer-motion";

export const Project = () => {
  return (
    <div className="flex w-full pt-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="w-full"
        >
          <div>
            <h1 className="text-3xl md:text-5xl">From concept to execution</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
