import { AnimatePresence, motion } from "framer-motion";
import { Frame, Grip, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/project", label: "Project" },
    { to: "/about", label: "About" },
  ];

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="z50 fixed inset-x-0 top-0 flex">
      <div className="flex h-12 w-full bg-white/60 shadow-sm backdrop-blur-3xl dark:bg-zinc-800/60">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <Frame />
            <h1 className="gradient-animated gradient-x text-xl font-light">
              Fathur. <span className="text-base font-semibold">DEV</span>
            </h1>
          </Link>
          <button
            onClick={toggleIsOpen}
            className="flex size-8 cursor-pointer items-center justify-center rounded-md transition hover:bg-gray-200 dark:hover:bg-zinc-700"
          >
            <Grip className="size-6" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={toggleIsOpen}
            className="fixed inset-0 flex pt-14"
          >
            <div className="flex w-full sm:mx-auto sm:max-w-5xl sm:px-4">
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-full rounded-t-3xl border border-gray-500/10 bg-white/40 backdrop-blur-3xl sm:ml-auto sm:h-fit sm:max-w-xs sm:rounded-lg sm:border-0 sm:shadow-sm dark:border-gray-200/10 dark:bg-zinc-900/60"
              >
                <div className="flex flex-col p-6">
                  <button
                    onClick={toggleIsOpen}
                    className="cursor-pointer sm:hidden"
                  >
                    <X className="ml-auto" />
                  </button>
                  <div className="flex flex-col gap-3 pt-8 pl-8 text-lg font-medium text-shadow-xs sm:p-0">
                    {links.map((link) => (
                      <Link key={link.to} to={link.to} onClick={toggleIsOpen}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
