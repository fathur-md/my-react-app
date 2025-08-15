import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import { AnimationsLayout } from "./AnimationsLayout";

export const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-dvh flex-col antialiased">
      <Navbar />
      <AnimatePresence mode="wait">
        <AnimationsLayout pathname={location.key}>
          <Outlet />
        </AnimationsLayout>
      </AnimatePresence>
    </div>
  );
};

{
  /* <motion.div
          key={location.pathname}
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: -10 }}
          // transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex-1 flex"
        > 
         </motion.div> */
}
