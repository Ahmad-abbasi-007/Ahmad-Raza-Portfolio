import React from 'react';
import { ArrowUpRight, FolderGit2, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import type { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="group rounded-2xl bg-[#0c1222]/90 hover:bg-[#0f172a] border border-slate-800/90 hover:border-cyan-500/50 shadow-xl hover:shadow-[0_15px_35px_rgba(6,182,212,0.12)] transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden">
      
      {/* Top ambient glow on hover */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all shrink-0">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 text-cyan-300 text-[11px] font-mono border border-slate-700/80 truncate">
              {project.subtitle}
            </span>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all hover:scale-105 shrink-0"
            title="Open GitHub Repository"
            aria-label="View GitHub Repository"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Project Title */}
        <h3
          onClick={() => onSelect(project)}
          className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-cyan-300 cursor-pointer transition-colors flex items-center justify-between mb-2.5"
        >
          <span className="truncate">{project.title}</span>
          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
        </h3>

        {/* Project Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Quick Highlights / Bullet Points */}
        <div className="space-y-1.5 mb-5">
          {project.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/80">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-md bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons Row */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <button
            onClick={() => onSelect(project)}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Details &amp; Architecture</span>
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 hover:border-slate-600 transition-all active:scale-95"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

    </div>
  );
};
