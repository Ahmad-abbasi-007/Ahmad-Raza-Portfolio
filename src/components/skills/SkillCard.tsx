import React from 'react';
import { 
  FileCode, 
  Palette, 
  FileJson, 
  FileCode2, 
  Atom, 
  Layers, 
  LayoutGrid, 
  Server, 
  GitBranch, 
  Terminal, 
  PackageCheck,
  Code
} from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import type { Skill } from '../../types/portfolio';

const iconComponents: Record<string, React.ElementType> = {
  FileCode,
  Palette,
  FileJson,
  FileCode2,
  Atom,
  Layers,
  LayoutGrid,
  Server,
  GitBranch,
  GithubIcon,
  Terminal,
  PackageCheck
};

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const Icon = iconComponents[skill.iconName] || Code;

  return (
    <div
      className="group relative p-5 rounded-2xl bg-[#0F172A]/70 hover:bg-[#131F37] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg hover:shadow-[0_15px_30px_rgba(6,182,212,0.12)] flex flex-col justify-between"
    >
      {/* Top row: Icon + Name */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm"
            style={{
              backgroundColor: `${skill.accentColor}18`,
              borderColor: `${skill.accentColor}35`,
              borderWidth: '1px'
            }}
          >
            <Icon
              className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6"
              style={{ color: skill.accentColor }}
            />
          </div>

          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700/60 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
            {skill.category}
          </span>
        </div>

        <h3 className="text-base font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
          {skill.name}
        </h3>

        <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
          {skill.description}
        </p>
      </div>

      {/* Bottom accent indicator */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-500 group-hover:text-slate-300">
          Proficiency: <span className="text-cyan-400 font-semibold">Active</span>
        </span>
        <div
          className="w-2 h-2 rounded-full transition-transform group-hover:scale-150"
          style={{ backgroundColor: skill.accentColor }}
        />
      </div>
    </div>
  );
};
