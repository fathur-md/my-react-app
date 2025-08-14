import { Frame } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 h-12 flex">
      <div className="w-full bg-white/60 dark:bg-zinc-950/60 backdrop-blur-3xl shadow-sm flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Frame />
          <h1 className="font-light text-lg">
            Fathur. <span className="font-semibold text-base">DEV</span>
          </h1>
        </Link>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};
