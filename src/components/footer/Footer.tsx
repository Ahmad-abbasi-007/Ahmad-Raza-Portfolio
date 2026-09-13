import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { contactData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#070B14] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-800/60">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-display font-extrabold text-slate-950 text-sm">
                AR
              </div>
              <span className="text-lg font-bold text-white font-display tracking-tight">
                {contactData.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Frontend Web Developer • Lahore, Pakistan
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={contactData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={contactData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-[#0A66C2] border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${contactData.email}`}
              className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
              aria-label="Email Ahmad Raza"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Tech note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left font-mono">
          <p>
            © 2026 {contactData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with</span>
            <span className="text-cyan-400 font-semibold">React</span>
            <span>&amp;</span>
            <span className="text-blue-400 font-semibold">TypeScript</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
