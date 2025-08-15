import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
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
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <nav className="fixed inset-x-0 top-0 z-40 flex">
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
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="flex size-8 cursor-pointer items-center justify-center rounded-md transition hover:bg-gray-200 focus:outline-none dark:hover:bg-zinc-700"
          >
            <Grip className="size-6" />
          </button>
        </div>
      </div>
      <MotionConfig
        transition={{
          type: "spring",
          bounce: 0.3,
          duration: isOpen ? 0.7 : 0.4,
        }}
      >
        <AnimatePresence initial={false}>
          {isOpen && (
            <Dialog
              as={motion.div}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative"
              open={isOpen}
              onClose={setIsOpen}
            >
              <motion.div
                variants={{
                  closed: { opacity: 0 },
                  open: { opacity: 1 },
                }}
                className="fixed inset-0 z-50 pt-14"
              >
                <div className="flex min-h-full sm:mx-auto sm:max-w-5xl sm:justify-end sm:px-4">
                  <DialogPanel
                    as={motion.div}
                    variants={{
                      closed: {
                        opacity: "var(--opacity-from)",
                        scale: "var(--scale-from, 1)",
                        y: "var(--y-from, 0px)",
                      },
                      open: {
                        opacity: "var(--opacity-to)",
                        scale: "var(--scale-to, 1)",
                        y: "var(--y-to, 0px)",
                      },
                    }}
                    className="w-full rounded-t-3xl border border-gray-500/20 bg-white [--opacity-from:0%] [--opacity-to:100%] max-sm:[--y-from:50px] max-sm:[--y-to:0px] sm:h-fit sm:max-w-xs sm:origin-top-right sm:rounded-lg sm:border-0 sm:shadow-sm sm:[--scale-from:80%] sm:[--scale-to:100%] dark:border-gray-200/10 dark:bg-zinc-900"
                  >
                    <div className="flex flex-col p-4">
                      <button
                        onClick={toggleIsOpen}
                        className="ml-auto flex size-8 cursor-pointer items-center justify-center rounded-lg hover:bg-gray-200 sm:hidden"
                      >
                        <X className="size-6" />
                      </button>
                      <div className="flex flex-col gap-3 pt-8 pl-8 text-xl font-medium antialiased sm:p-0 sm:text-base">
                        {links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            onClick={handleLinkClick}
                            className="max-w-sm rounded-lg px-4 py-2 hover:bg-gray-200"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </DialogPanel>
                </div>
              </motion.div>
            </Dialog>
          )}
        </AnimatePresence>
      </MotionConfig>
    </nav>
  );
};
