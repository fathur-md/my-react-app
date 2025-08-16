import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-white relative flex min-h-dvh w-full flex-col items-center justify-start overflow-hidden pt-12 dark:bg-zinc-900">
      <section className="relative z-10 w-full px-6 py-20 text-center">
        <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
          Hi, I'm Fathur.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 md:text-xl dark:text-gray-400">
          Still learning, always improving, always creating.
        </p>
        <Link
          to="#"
          className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-black px-6 py-3 text-white shadow transition hover:scale-105 hover:bg-gray-800 dark:bg-gray-300 dark:text-gray-800"
        >
          Designed & Developed <ArrowRight size={18} />
        </Link>
      </section>
      <section className="w-full max-w-5xl px-6 text-center">
        <div>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Projects
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            A few things I've built
          </p>
        </div>
      </section>
    </div>
  );
};
