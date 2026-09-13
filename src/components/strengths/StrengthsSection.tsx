import React from 'react';
import { 
  Smartphone, 
  Boxes, 
  LayoutTemplate, 
  BrainCircuit, 
  TrendingUp, 
  ShieldCheck, 
  Check, 
  Zap
} from 'lucide-react';
import { strengthsData } from '../../data/portfolioData';

const strengthIconMap = {
  Smartphone: Smartphone,
  Boxes: Boxes,
  LayoutTemplate: LayoutTemplate,
  BrainCircuit: BrainCircuit,
  TrendingUp: TrendingUp,
};

export const StrengthsSection: React.FC = () => {
  return (
    <section id="strengths" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-800/40">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Key <span className="gradient-text">Strengths</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3">
            Frontend development principles and technical mindset I bring to engineering teams.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengthsData.map((strength, index) => {
            const Icon = strengthIconMap[strength.iconName as keyof typeof strengthIconMap] || ShieldCheck;
            const isWide = index === 4;

            return (
              <div
                key={strength.id}
                className={`glass-card p-6 sm:p-7 rounded-2xl group flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-500/20">
                      {strength.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                    {strength.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {strength.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Verified Core Skill</span>
                  </span>
                  <span>0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
