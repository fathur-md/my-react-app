import { motion } from "framer-motion";

export const AnimationsLayout = ({ pathname, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 1 }}
      key={pathname}
      className="flex flex-1"
    >
      {children}
    </motion.div>
  );
};
