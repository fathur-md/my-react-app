import { motion } from "framer-motion";

export const SlideDiv = ({ directions = "left", className = "", children }) => {
  const variants = {
    left: {
      initial: { x: "-40px", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: "40px", opacity: 0 },
    },
    right: {
      initial: { x: "40px", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: "-40px", opacity: 0 },
    },
    up: {
      initial: { y: "-40px", opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: "40px", opacity: 0 },
    },
    down: {
      initial: { y: "40px", opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: "-40px", opacity: 0 },
    },
  };

  const { initial, animate, exit } = variants[directions] || variants.left;

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
