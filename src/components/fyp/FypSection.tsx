import React from 'react';
import { 
  GraduationCap, 
  ExternalLink, 
  Sparkles, 
  Calculator, 
  ShieldCheck, 
  Users, 
  Layers, 
  ArrowUpRight,
  School,
  Globe
} from 'lucide-react';
import { fypProjectData } from '../../data/portfolioData';

export const FypSection: React.FC = () => {
  return (
    <section 
      id="fyp-project" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#090D16] via-[#0B0F1E] to-[#090D16] border-t border-slate-800/60"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono font-semibold mb-3.5 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span>FINAL YEAR PROJECT (FYP)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span className="text-slate-400 font-sans">CAPSTONE SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight max-w-4xl">
            FYP <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">Project</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3.5">
            A centralized, automated scholarship portal &amp; intelligent merit computation engine developed for COMSATS University Islamabad.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Main Showcase Hero Card */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-purple-500/30 via-cyan-500/20 to-blue-600/30 shadow-[0_0_50px_rgba(147,51,234,0.12)]">
          <div className="rounded-[22px] bg-[#0c1222]/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 border border-slate-700/60 overflow-hidden">
            
            {/* Top Bar / Meta info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <School className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-medium text-purple-400 uppercase tracking-wider">
                    Academic Institution
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    {fypProjectData.institution}
                  </div>
                </div>
              </div>

              {/* Status & Live Link Badge */}
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Live on Vercel</span>
                </div>

                <a
                  href={fypProjectData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-semibold transition-all active:scale-95 group/link"
                >
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Visit App</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Clickable Title */}
            <div className="my-6">
              <a
                href={fypProjectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to open Automated Merit List Generation System in a new tab"
                className="group/title inline-flex items-start sm:items-center gap-2.5 text-left"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white group-hover/title:text-transparent group-hover/title:bg-clip-text group-hover/title:bg-gradient-to-r group-hover/title:from-cyan-300 group-hover/title:via-purple-300 group-hover/title:to-pink-300 transition-all duration-300 leading-tight">
                  {fypProjectData.title}
                </h3>
                <ExternalLink className="w-6 h-6 text-cyan-400 shrink-0 opacity-70 group-hover/title:opacity-100 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all mt-1 sm:mt-0" />
              </a>
              <p className="text-sm sm:text-base text-slate-300 mt-2.5 max-w-3xl leading-relaxed">
                {fypProjectData.tagline}
              </p>
            </div>

            {/* Showcase Visual & Interactive Clickable Image */}
            <div className="my-8">
              <a
                href={fypProjectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Click photo to open live portal at https://comsats-scholarship-system.vercel.app/"
                className="group/image relative block rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl transition-all duration-300 hover:border-cyan-400/80 hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]"
              >
                {/* Browser Top Window Simulation */}
                <div className="px-4 py-3 bg-[#0d1424] border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline-block">
                      COMSATS Scholarship Portal • Automated Merit System
                    </span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-cyan-400">
                    <span className="text-slate-500">https://</span>
                    <span>comsats-scholarship-system.vercel.app</span>
                    <ArrowUpRight className="w-3 h-3 text-cyan-400 ml-1" />
                  </div>
                </div>

                {/* Screenshot with Zoom and Hover Overlay */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={fypProjectData.image}
                    alt={fypProjectData.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/image:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Hover Overlay Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/90 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(6,182,212,0.6)] transform translate-y-2 group-hover/image:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="w-4 h-4 text-slate-950" />
                      <span>Click to Open Live Portal in New Tab</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Feature Capabilities Grid */}
            <div className="mt-10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                <span>System Capabilities &amp; Architecture</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fypProjectData.features.map((feature, idx) => {
                  const icons = [Calculator, Users, ShieldCheck, Layers];
                  const Icon = icons[idx % icons.length];

                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex gap-3.5 items-start"
                    >
                      <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-display mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack & Badges */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-1">Technologies:</span>
                {fypProjectData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-cyan-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Direct CTA Action Button */}
              <div className="flex items-center gap-3">
                <a
                  href={fypProjectData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all transform hover:scale-[1.02] active:scale-95"
                >
                  <span>Launch Live FYP System</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
