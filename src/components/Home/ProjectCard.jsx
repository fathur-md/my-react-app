import { motion } from "framer-motion";
import idovDesktop from "@/assets/IdovDesktop.png";
import idovMobile from "@/assets/IdovMobile.png";

const projects = [
  {
    title: "IDOV - Movie & TV Trailer Platform Demo",
    desc: "Explore a demo movie and TV trailer platform designed like Netflix. Built as a portfolio project with React and IMDb API. Only trailers, not full films",
    image: {
      desktop: idovDesktop,
      mobile: idovMobile,
    },
    link: "https://idov-site.web.app",
  },
  {
    title: "Medium Clone – Blogging Platform with Sanity CMS",
    desc: "A showcase demo of a Medium-style blogging platform with a custom Sanity CMS admin dashboard. While some features are incomplete and not fully functional, the project highlights dynamic content management, a rich text editor, and responsive design.",
    image: "https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png",
    bg: "bg-amber-200",
    link: "https://medium-demo-proj.vercel.app",
  },
  {
    title: "iOS App",
    desc: "A demo iOS news application that fetches and displays the latest news using an external API.",
    image: "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logosu.png",
    bg: "bg-white",
    link: "https://github.com/fathur-m/ios-app.git",
  },
];

const HighlightedProject = ({ projects }) => {
  return (
    <div className="overflow-hidden py-8 md:col-span-2 lg:col-span-3 2xl:col-span-4">
      {/* Overlay */}
      <div className="px-2 tracking-tight">
        <h1 className="py-4 text-3xl font-light lg:text-6xl">
          {projects.title}
        </h1>
        <p className="mx-auto max-w-3xl px-2 text-base font-normal md:text-2xl">
          {projects.desc}
        </p>
        <br />
        <br />
        <a
          href={projects.link}
          target="_blank"
          className="rounded-full bg-blue-500 px-8 py-3 text-base font-medium text-white shadow-sm"
        >
          Visit Project
        </a>

        <div className="relative mx-auto mt-8 max-w-sm rounded-lg bg-gray-200 p-4 pl-8 text-left text-gray-600 dark:bg-gray-900 dark:text-gray-400">
          <span className="absolute top-1/2 left-3 h-[80%] w-2 -translate-y-1/2 rounded-full bg-gray-300 dark:bg-gray-800"></span>
          <p className="text-xl font-semibold">Note</p>
          <p className="mt-2 text-base">
            features in this project are incomplete, as I have stopped
            maintaining it.
          </p>
        </div>
        <br />
        <br />
      </div>
      {/* Image */}
      <div className="container mx-auto flex items-center justify-center gap-6 overflow-hidden p-4">
        <img
          src={projects.image.mobile}
          alt={projects.title}
          className="max-w-2xs rounded-4xl border-4 border-gray-400 md:max-w-sm lg:max-w-2xs"
        />
        <div className="hidden lg:block">
          <img
            src={projects.image.desktop}
            alt={projects.title}
            className="w-full max-w-5xl rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

const DefaultProject = ({ project }) => {
  return (
    <div className="hidden border">
      <h1>{project.title}</h1>
    </div>
  );
};

export const ProjectCard = () => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 2 }}
      className="grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      {projects.map((project, index) =>
        index === 0 ? (
          <HighlightedProject key={index} projects={project} />
        ) : (
          <DefaultProject key={index} project={project} />
        ),
      )}
    </motion.div>
  );
};
