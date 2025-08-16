import { motion } from "framer-motion";
import IdovDesktop from "../assets/idovDesktop.png";
import IdovMobile from "../assets/idovMobile.png";
import { Link, Link2 } from "lucide-react";
export const ProjectCard = () => {
  const projects = [
    {
      title: "IDOV - Movie & TV Trailer Platform Demo",
      description:
        "Explore a demo movie and TV trailer platform designed like Netflix. Built as a portfolio project with React and IMDb API. Only trailers, not full films",
      image: {
        desktop: IdovDesktop,
        mobile: IdovMobile,
      },
      link: "https://idov-site.web.app",
    },
    {
      title: "Test",
    },
  ];

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 2 }}
      className="grid grid-cols-1 place-content-center gap-2 lg:gap-4 lg:p-4"
    >
      {projects.map((p, i) =>
        i === 0 ? (
          <div key={i} className="overflow-hidden rounded-md px-2">
            <h1 className="py-4 text-3xl font-light lg:text-5xl">{p.title}</h1>
            <p>{p.description}</p>
            <br />
            <a
              href={p.link}
              target="_blank"
              className="dark:hover: mx-auto flex w-fit items-center gap-3 rounded-full border border-gray-200 px-4 py-2 text-lg shadow-sm transition hover:bg-blue-500 hover:text-white dark:border-gray-700"
            >
              <Link2 className="size-6" />
              Open Demo
            </a>
            {/* Animate this */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 flex items-center justify-center gap-4 overflow-x-scroll p-4"
            >
              <img
                src={p.image?.mobile}
                alt={p.title}
                className="pointer-events-none relative z-10 mx-auto block w-full max-w-xs rounded-4xl border-4 border-gray-400 object-cover select-none md:hidden"
              />
              <img
                src={p.image?.desktop}
                alt={p.title}
                className="pointer-events-none container hidden h-auto w-full rounded-xl select-none md:block"
              />
            </motion.div>
            {/* Animate this */}
            <div className="px-4 pt-12 pb-5">
              <h1 className="mx-auto mt-2 max-w-3xl text-2xl leading-normal tracking-tight text-gray-600 md:text-5xl">
                A selection of projects showcasing my skills in web development,
                design, and interactive UI.
              </h1>
            </div>
          </div>
        ) : (
          <div key={i} className="">
            <div>
              <h1>{p.title}</h1>
            </div>
          </div>
        ),
      )}
    </motion.div>
  );
};
