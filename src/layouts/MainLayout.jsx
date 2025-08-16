import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

export const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-dvh flex-col antialiased">
      {/* <Navbar /> */}
      <Navbar />
      <AnimatePresence mode="wait">
        <main key={location.key}>
          <Outlet />
        </main>
      </AnimatePresence>
    </div>
  );
};
