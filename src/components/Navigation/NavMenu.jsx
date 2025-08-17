import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const backdropVariants = { closed: { opacity: 0 }, open: { opacity: 1 } };
const panelVariants = {
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
};
export const NavMenu = ({ isOpen, onClose, links }) => {
  return (
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
            onClose={onClose}
          >
            <div className="fixed inset-0 z-50 mx-auto max-w-5xl pt-14 sm:px-4">
              <motion.div
                variants={backdropVariants}
                className="h-full backdrop-blur-2xl sm:h-fit sm:bg-none sm:backdrop-blur-none"
              >
                <DialogPanel
                  as={motion.div}
                  variants={panelVariants}
                  className="bg-primary/80 dark:bg-primary-dark/80 h-full w-full origin-top-right rounded-t-3xl border-t border-gray-500/20 [--opacity-from:0%] [--opacity-to:100%] max-sm:[--y-from:50px] max-sm:[--y-to:0px] sm:float-right sm:max-w-xs sm:rounded-lg sm:border sm:bg-white sm:shadow-sm sm:[--scale-from:80%] sm:[--scale-to:100%] sm:dark:bg-zinc-900"
                >
                  <div className="flex flex-col p-4">
                    <button
                      onClick={() => onClose(false)}
                      className="ml-auto flex w-fit items-center justify-center rounded-lg p-2 hover:bg-gray-200 sm:hidden dark:hover:bg-zinc-800"
                    >
                      <X className="size-6" />
                    </button>
                    <ul className="flex flex-col gap-3 pt-8 pl-8 text-xl font-medium antialiased sm:p-0 sm:text-base">
                      {links.map((link) => (
                        <li
                          key={link.to}
                          className="flex w-full max-w-2xs flex-col"
                        >
                          <Link
                            to={link.to}
                            onClick={() => onClose(false)}
                            className="rounded-lg px-4 py-2 hover:bg-gray-200 dark:hover:bg-zinc-800"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </DialogPanel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};
