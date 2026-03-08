import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative flex flex-col h-full rounded-[1rem] overflow-hidden bg-white border border-border/50 shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      {/* Image: fixed height at top, expands to fill card on hover */}
      <div className="absolute top-0 left-0 w-full h-[200px] group-hover:h-full transition-all duration-700 ease-custom z-0 overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Spacer: holds layout so content sits below image */}
      <div className="relative w-full h-[200px] shrink-0 z-0 pointer-events-none" />

      {/* Text content — sits below image normally, becomes overlay on hover */}
      <div className="relative z-10 flex-1 flex flex-col justify-end p-5 pt-4 pointer-events-none">
        {/* Status badge */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full transition-colors duration-500
              ${
                project.status === "ongoing"
                  ? "bg-amber-100 text-amber-700 group-hover:bg-amber-400/20 group-hover:text-amber-300"
                  : "bg-green-100 text-green-700 group-hover:bg-green-400/20 group-hover:text-green-300"
              }`}
          >
            {project.status === "ongoing" ? "Ongoing" : "Completed"}
          </span>
        </div>

        {/* Category */}
        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary group-hover:text-gold mb-2 block transition-colors duration-500 truncate">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-base font-bold text-foreground group-hover:text-white leading-snug line-clamp-2 transition-colors duration-500 mb-1">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-xs text-muted-foreground group-hover:text-gray-200 leading-relaxed line-clamp-2 transition-colors duration-500 mb-3">
          {project.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground/70 group-hover:text-white/50 transition-colors duration-500 truncate max-w-[60%]">
            {project.location} · {project.year}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-white transition-colors duration-500">
            View <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
