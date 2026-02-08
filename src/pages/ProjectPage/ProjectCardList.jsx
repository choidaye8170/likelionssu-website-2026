import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function ProjectCardList({ projects, selectedFilter }) {
  const filteredProjects =
    selectedFilter === "전체"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[60px] gap-y-[40px] w-full max-w-[66rem] mx-auto justify-items-center">
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          number={project.number}
          category={project.category}
          description={project.description}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
}
