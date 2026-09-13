import React from 'react';
import { Code2, Atom, GraduationCap, Sparkles, CheckCircle2, UserCheck, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { aboutData } from '../../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Atom: Atom,
  GraduationCap: GraduationCap,
  Sparkles: Sparkles,
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-800/40">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio & Core Philosophy */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 shadow-md">
                  <UserCheck className="w-5 h-5 text-slate-950" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">
                    Computer Science Graduate &amp; Frontend Developer
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">COMSATS University Islamabad (Abbottabad)</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutData.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Status Note */}
              <div className="mt-6 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs text-cyan-200 leading-normal">
                  <strong className="font-semibold text-white">Career Goal:</strong> Actively seeking my first professional Frontend Developer role. Eager to contribute clean React/TypeScript code, learn from senior engineers, and build scalable products.
                </p>
              </div>
            </div>

            {/* Key Focus Badges */}
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Key Focus &amp; Specializations
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {aboutData.focusAreas.map((focus) => (
                  <div
                    key={focus}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 4 Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.highlights.map((highlight, index) => {
              const IconComponent = iconMap[highlight.icon as keyof typeof iconMap] || Code2;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/50 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors" />
                  
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono text-cyan-400/90 font-medium block mb-1">
                      {highlight.tagline}
                    </span>

                    <h3 className="text-base font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                      {highlight.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                    <span>0{index + 1} // FOCUS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
