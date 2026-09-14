import React from 'react';
import { ExternalLink, CheckCircle, Code2, Layers, Cpu, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { Modal } from '../common/Modal';
import type { Project } from '../../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} maxWidth="max-w-3xl">
      <div className="space-y-6">
        {/* Top Header Technical Card (No Photo) */}
        <div className="p-5 rounded-xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded-md bg-cyan-950/40 text-cyan-300 text-xs font-mono border border-cyan-500/30 mb-1 inline-block">
                {project.subtitle}
              </span>
              <h3 className="text-lg font-bold text-white font-display">
                {project.title}
              </h3>
            </div>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all active:scale-95 shrink-0"
          >
            <GithubIcon className="w-4 h-4 text-slate-950" />
            <span>Open Repository</span>
          </a>
        </div>

        {/* Description */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-cyan-400" />
            Project Overview
          </h4>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Technologies Used */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            Technologies &amp; Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            Key Features &amp; Implementation Details
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/70 border border-slate-800/80 text-xs text-slate-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            Frontend Architecture Highlights
          </h4>
          <div className="space-y-2">
            {project.architectureHighlights.map((arch, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/60 text-xs text-slate-300 flex items-start gap-2"
              >
                <span className="text-cyan-400 font-mono">0{idx + 1}.</span>
                <span>{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>

            {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold shadow-md transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Preview</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors ml-auto"
          >
            Close Window
          </button>
        </div>
      </div>
    </Modal>
  );
};
