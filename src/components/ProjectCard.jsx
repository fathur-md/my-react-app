import { Link } from "react-router-dom";
import IdovDesktop from "../assets/idovDesktop.png";
import IdovMobile from "../assets/idovMobile.png";
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
    // {
    //   title: "Weather App",
    //   description: "Check real-time weather using OpenWeather API.",
    //   image:
    //     "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    //   link: "#",
    // },
    // {
    //   title: "E-commerce Store",
    //   description: "A full-stack shop built with Next.js & Stripe.",
    //   image:
    //     "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    //   link: "#",
    // },
  ];

  return (
    <div className="grid grid-cols-1 gap-2 px-2 lg:gap-4 lg:p-4">
      {projects.map((p, i) => (
        <div className="overflow-hidden rounded-md">
          <h1 className="py-10 text-3xl font-light lg:text-5xl">{p.title}</h1>
          <br />
          <div className="flex flex-wrap items-center justify-center gap-4 p-4">
            <img
              src={p.image?.mobile}
              alt={p.title}
              className="mx-auto w-full max-w-xs rounded-4xl border-4 border-gray-400 object-cover"
            />
            <img
              src={p.image?.desktop}
              alt={p.title}
              className="h-full max-w-4xl rounded-lg max-xl:mt-12"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
