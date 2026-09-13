import React from 'react';
import { ArrowRight, Download, Send, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { contactData } from '../../data/portfolioData';
import { InteractiveTerminal } from './InteractiveTerminal';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden mesh-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 shadow-md backdrop-blur-md mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                CS Graduate • COMSATS University Islamabad
              </span>
              <span className="text-xs text-cyan-400 font-mono font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3 inline" /> Lahore, PK
              </span>
            </div>

            {/* Main Greeting & Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 font-display leading-[1.15]">
              Hi, I'm{' '}
              <span className="gradient-text">
                {contactData.name}
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 font-display">
                Frontend Web Developer
              </span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold border border-cyan-500/20">
                React • TypeScript
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              I build <span className="text-cyan-400 font-medium">responsive</span>, <span className="text-blue-400 font-medium">interactive</span>, and <span className="text-indigo-300 font-medium">user-friendly</span> web experiences with modern frontend technologies. Passionate about transforming ideas into clean, component-driven interfaces.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('fyp-project')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore FYP Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500/50 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/60 transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Tech Badges & Social Links */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500">Core Stack:</span>
                <span className="px-2 py-1 rounded bg-slate-800/70 border border-slate-700/60 text-cyan-300">React</span>
                <span className="px-2 py-1 rounded bg-slate-800/70 border border-slate-700/60 text-blue-300">TypeScript</span>
                <span className="px-2 py-1 rounded bg-slate-800/70 border border-slate-700/60 text-yellow-300">JavaScript</span>
                <span className="px-2 py-1 rounded bg-slate-800/70 border border-slate-700/60 text-purple-300">MUI</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={contactData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/60 hover:border-slate-600 transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={contactData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-[#0A66C2] border border-slate-700/60 hover:border-slate-600 transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${contactData.email}`}
                  className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-700/60 hover:border-slate-600 transition-all hover:scale-105"
                  aria-label="Email Ahmad Raza"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Hero Visual (Interactive Terminal) */}
          <div className="lg:col-span-5 w-full">
            <InteractiveTerminal />
          </div>

        </div>
      </div>
    </section>
  );
};
