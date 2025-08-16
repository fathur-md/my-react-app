import { Frame, Grip } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavMenu } from "./NavMenu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/project", label: "Project" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-30 flex">
      <div className="bg-primary/80 dark:bg-primary-dark/50 flex h-12 w-full backdrop-blur-[14px]">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4">
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to="/"
            className="flex items-center gap-0.5"
          >
            <Frame />
            <h1 className="text-xl font-medium">
              Fathur.
              <span className="text-base font-semibold">DEV</span>
            </h1>
          </Link>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex size-8 items-center justify-center rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700"
          >
            <Grip className="size-6" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <NavMenu isOpen={isOpen} onClose={setIsOpen} links={links} />
    </nav>
  );
};
