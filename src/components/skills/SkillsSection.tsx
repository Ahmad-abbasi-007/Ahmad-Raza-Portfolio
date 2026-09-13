import React, { useState } from 'react';
import { Cpu, Code2, Layout, Server, Wrench, Sparkles, BookOpen } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';
import { SkillCard } from './SkillCard';
import type { SkillCategory } from '../../types/portfolio';

const categories: { id: 'all' | SkillCategory; label: string; icon: React.ElementType }[] = [
  { id: 'all', label: 'All Technologies', icon: Sparkles },
  { id: 'frontend', label: 'Frontend Core', icon: Code2 },
  { id: 'ui', label: 'UI Frameworks', icon: Layout },
  { id: 'backend', label: 'Backend / Runtime', icon: Server },
  { id: 'tools', label: 'Developer Tools', icon: Wrench },
];

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | SkillCategory>('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-cyan-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Skills &amp; <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3">
            Verified technologies from my hands-on project work and Computer Science degree curriculum.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        {/* Currently Learning Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90 border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                  Continuous Learning
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                Currently Deepening Knowledge
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Advanced React Design Patterns • Complex TypeScript Generics • Node JS Backend Integration
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300/90 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Lifelong Learner</span>
          </div>
        </div>

      </div>
    </section>
  );
};
