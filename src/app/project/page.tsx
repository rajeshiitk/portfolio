import { ProjectCard } from "@/components/project/ProjectCarf";
import React from "react";
import { projects } from "../data/Projects";

interface Props {}

const ProjectPage = (props: Props) => {
  return (
    <div className="flex flex-wrap  justify-center min-h-screen items-center">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectPage;
