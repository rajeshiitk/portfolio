import { ProjectCard } from "@/components/project/ProjectCarf";
import React from "react";
import { projects } from "../data/Projects";
import { Separator } from "@/components/ui/separator";

interface Props {}

const ProjectPage = (props: Props) => {
  return (
    <section>
      <Separator />
      <h1 className="text-4xl p-2 text-center font-bold">Projects</h1>
      <div className="flex flex-wrap  justify-center min-h-screen items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
