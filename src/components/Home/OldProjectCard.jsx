import { motion } from "framer-motion";
import { Link2 } from "lucide-react";
import idovDesktop from "@/assets/IdovDesktop.png";
import idovMobile from "@/assets/IdovMobile.png";

export const ProjectCard = () => {
  const projects = [
    {
      title: "IDOV - Movie & TV Trailer Platform Demo",
      description:
        "Explore a demo movie and TV trailer platform designed like Netflix. Built as a portfolio project with React and IMDb API. Only trailers, not full films",
      image: {
        desktop: idovDesktop,
        mobile: idovMobile,
      },
      link: "https://idov-site.web.app",
    },
    {
      title: "Medium Clone – Blogging Platform with Sanity CMS",
      description:
        "A showcase demo of a Medium-style blogging platform with a custom Sanity CMS admin dashboard. While some features are incomplete and not fully functional, the project highlights dynamic content management, a rich text editor, and responsive design.",
      image:
        "https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png",
      bg: "bg-amber-200",
      link: "https://medium-demo-proj.vercel.app",
    },
    {
      title: "iOS App",
      description:
        "A demo iOS news application that fetches and displays the latest news using an external API.",
      image:
        "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logosu.png",
      bg: "bg-white",
      link: "https://github.com/fathur-m/ios-app.git",
    },
  ];

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 2 }}
      className="grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      {projects.map((p, i) =>
        i === 0 ? (
          <div
            key={i}
            className="overflow-hidden rounded-md px-2 md:col-span-2 lg:col-span-3 2xl:col-span-4"
          >
            <h1 className="py-4 text-3xl font-light lg:text-5xl">{p.title}</h1>
            <p className="mx-auto max-w-3xl px-2 text-base font-extralight">
              {p.description}
            </p>
            <br />
            <a
              href={p.link}
              target="_blank"
              className="dark:hover: mx-auto flex w-fit items-center gap-3 rounded-full border border-gray-200 px-4 py-2 text-lg shadow-sm transition hover:bg-blue-500 hover:text-white dark:border-gray-700"
            >
              <Link2 className="size-6" />
              Open Demo
            </a>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-5 flex items-center justify-center gap-4 overflow-x-scroll p-4 2xl:gap-10"
            >
              <img
                src={p.image?.mobile}
                alt={p.title}
                className="pointer-events-none relative z-10 block w-full max-w-xs rounded-4xl border-4 border-gray-400 object-cover select-none md:hidden 2xl:block"
              />
              <img
                src={p.image?.desktop}
                alt={p.title}
                className="pointer-events-none container hidden h-auto w-full max-w-5xl rounded-xl select-none md:block"
              />
            </motion.div>

            <div className="px-4 py-30">
              <h1 className="mx-auto mt-2 max-w-3xl text-2xl leading-tight tracking-tight text-gray-500 md:text-3xl lg:text-4xl">
                Thoughtfully designed projects that combine clean interfaces,
                seamless interactions, and modern web technologies.
              </h1>
            </div>
          </div>
        ) : (
          <div
            key={i}
            className={`${p.bg ?? "bg-primary dark:bg-primary-dark"} group relative overflow-hidden`}
          >
            <div className="h-96 p-4">
              <div className="flex h-full w-full items-center overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-contain transition-transform group-hover:scale-110"
                />
                {/* Overlay */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-4 text-center opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100"
                >
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-lg text-gray-200">{p.description}</p>
                  <span className="mt-4 inline-block rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-black hover:bg-white">
                    View Project →
                  </span>
                </a>
              </div>
            </div>
          </div>
        ),
      )}
    </motion.div>
  );
};
