import { motion } from "framer-motion";

export const Project = () => {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="h-full w-full"
      >
        <div className="mx-auto flex w-full max-w-5xl p-4">
          <h1 className="mx-auto text-5xl">Cooming soon</h1>
        </div>
      </motion.div>
    </div>
  );
};
