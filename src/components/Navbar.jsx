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
    <nav className="fixed inset-x-0 top-0 z-30 flex">
      <div className="flex h-12 w-full bg-[rgba(248,248,252,0.4)] backdrop-blur-[14px] dark:bg-[rgba(56,56,61,0.5)]">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-0.5">
            <Frame />
            <h1 className="text-xl font-medium">
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
              static
              initial="closed"
              animate="open"
              exit="closed"
              className="relative flex justify-center"
              open={isOpen}
              onClose={setIsOpen}
            >
              <div className="sm:px4 fixed inset-0 z-50 mx-auto max-w-5xl pt-14 sm:px-4">
                {/* Backdrop */}
                <motion.div
                  variants={{
                    closed: { opacity: 0 },
                    open: { opacity: 1 },
                  }}
                  className="h-full w-full backdrop-blur-2xl sm:float-right sm:h-fit sm:max-w-xs sm:rounded-lg sm:bg-none sm:backdrop-blur-none dark:border-gray-200/10"
                >
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
                    className="h-full origin-top-right rounded-lg rounded-t-3xl border-t border-gray-500/20 [--opacity-from:0%] [--opacity-to:100%] max-sm:[--y-from:50px] max-sm:[--y-to:0px] sm:rounded-lg sm:border sm:bg-white sm:shadow-sm sm:[--scale-from:80%] sm:[--scale-to:100%] sm:dark:bg-zinc-900"
                  >
                    <div className="flex flex-col p-4">
                      <button
                        onClick={toggleIsOpen}
                        className="ml-auto flex size-8 cursor-pointer items-center justify-center rounded-lg hover:bg-gray-200 sm:hidden dark:hover:bg-zinc-800"
                      >
                        <X className="size-6" />
                      </button>
                      <div className="flex flex-col gap-3 pt-8 pl-8 text-xl font-medium antialiased sm:p-0 sm:text-base">
                        {links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            onClick={handleLinkClick}
                            className="w-full max-w-sm rounded-lg px-4 py-2 hover:bg-gray-200 dark:hover:bg-zinc-800"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </DialogPanel>
                </motion.div>
              </div>
            </Dialog>
          )}
        </AnimatePresence>
      </MotionConfig>
    </nav>
  );
};
