import { ArrowRight } from "lucide-react";

export const Home = () => {
  return (
    <div className="bg-whites relative flex min-h-dvh w-full flex-col items-center justify-start overflow-hidden pt-12 dark:bg-zinc-900">
      <section className="relative z-10 w-full px-6 py-20 text-center">
        <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
          Hi, I'm Fathur.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 md:text-xl dark:text-gray-400">
          Still learning, always improving, always creating.
        </p>
        <a className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-black px-6 py-3 text-white shadow transition hover:bg-gray-800">
          Designed & Developed <ArrowRight size={18} />
        </a>
      </section>
    </div>
  );
};
