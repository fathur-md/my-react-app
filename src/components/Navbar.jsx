import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 h-12 flex">
      <div className="w-full backdrop-blur-sm shadow-sm flex items-center justify-between px-4">
        <Link to="/">
          <h1>Navbar Logo</h1>
        </Link>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};
