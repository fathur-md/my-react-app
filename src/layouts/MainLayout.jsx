import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";

export const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-dvh flex flex-col antialiased">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex-1 flex"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
