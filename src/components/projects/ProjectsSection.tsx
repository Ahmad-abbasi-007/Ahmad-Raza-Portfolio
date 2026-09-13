import React, { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { projectsData, contactData } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import type { Project, ProjectCategory } from '../../types/portfolio';

const filterOptions: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'react', label: 'React JS' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'ui', label: 'UI Frameworks (MUI/Bootstrap)' },
];

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-800/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3">
            Real-world frontend applications and component systems built using React, TypeScript, MUI, and modern web standards.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.id;
            const count = filter.id === 'all'
              ? projectsData.length
              : projectsData.filter((p) => p.category.includes(filter.id)).length;

            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-slate-950 text-cyan-400 font-bold' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* GitHub Repository Banner */}
        <div className="p-6 rounded-2xl bg-[#0B101D] border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-200 shrink-0">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display">
                Explore More on GitHub
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Check out source code, commits, and experiments on my verified GitHub profile.
              </p>
            </div>
          </div>

          <a
            href={contactData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold border border-slate-700 hover:border-cyan-500/50 transition-all active:scale-95"
          >
            <GithubIcon className="w-4 h-4" />
            <span>github.com/Ahmad-abbasi-007</span>
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
