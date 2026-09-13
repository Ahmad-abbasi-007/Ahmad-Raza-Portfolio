import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, School } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Education <span className="gradient-text">&amp; Credentials</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3">
            Academic qualifications and computer science education foundation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800 space-y-12">
          {educationData.map((item, idx) => {
            const isFirst = idx === 0;

            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-4 border-[#090D16] flex items-center justify-center transition-transform duration-300 group-hover:scale-125 ${
                    isFirst
                      ? 'bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]'
                      : 'bg-slate-700'
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Timeline Content Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden group-hover:border-cyan-500/40">
                  
                  {/* Top Meta info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Degree / Institution */}
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>

                  <div className="text-sm font-medium text-cyan-400/90 mb-4 flex items-center gap-2">
                    <School className="w-4 h-4 text-cyan-500" />
                    <span>{item.institution}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="pt-4 border-t border-slate-800/80 space-y-2">
                      {item.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
