import { useCallback, useRef } from "react";
import { HeroSection } from "@/components/Home/HeroSection";
import { ProjectSection } from "@/components/Home/ProjectSection";

export const Home = () => {
  const projectRef = useRef(null);
  const scrollToProjects = useCallback(() => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="relative flex w-full flex-col items-center justify-start overflow-hidden">
      <HeroSection scrollToProjects={scrollToProjects} />
      <ProjectSection projectRef={projectRef} />
    </div>
  );
};
