import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AnimationsLayout } from "./AnimationsLayout";
import { AnimatePresence } from "framer-motion";

export const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-dvh flex-col antialiased">
      <Navbar />
      <AnimatePresence mode="wait">
        <AnimationsLayout key={location.key}>
          <Outlet />
        </AnimationsLayout>
      </AnimatePresence>
    </div>
  );
};
