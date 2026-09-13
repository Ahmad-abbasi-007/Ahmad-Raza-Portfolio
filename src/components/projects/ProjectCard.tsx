import React from 'react';
import { ExternalLink, ArrowUpRight, Eye } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import type { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="group rounded-2xl bg-[#0F172A]/70 hover:bg-[#131F37] border border-slate-800/80 hover:border-cyan-500/50 shadow-xl hover:shadow-[0_20px_40px_rgba(6,182,212,0.12)] transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Project Image Banner with Overlay */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900 cursor-pointer" onClick={() => onSelect(project)}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
        
        {/* Quick hover action button */}
        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Explore Details</span>
          </button>
        </div>

        {/* Subtitle tag */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md bg-slate-900/90 text-cyan-400 text-[11px] font-mono border border-cyan-500/30 backdrop-blur-md">
            {project.subtitle}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          {/* Title */}
          <h3
            onClick={() => onSelect(project)}
            className="text-lg font-bold text-white font-display mb-2 group-hover:text-cyan-300 cursor-pointer transition-colors flex items-center justify-between"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>
        </div>

        <div>
          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md bg-slate-900/80 border border-slate-700/60 text-[11px] font-medium text-cyan-300/90"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <button
              onClick={() => onSelect(project)}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
            >
              <span>View Breakdown</span>
            </button>

            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                title="View GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>

              {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-colors"
                  title="Live Demo"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
