import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, FileCode, Code2 } from 'lucide-react';
import { useToast } from '../common/Toast';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'code' | 'terminal'>('profile');
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const codeSnippets = {
    profile: `// AhmadRaza.config.ts
import { Developer } from '@ar/frontend-core';

export const ahmadRaza: Developer = {
  name: 'Ahmad Raza',
  title: 'Frontend Web Developer',
  education: 'BS Computer Science (COMSATS Abbottabad)',
  status: 'Seeking 1st Frontend Role',
  location: 'Lahore, Pakistan',
  primaryStack: ['React JS', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3'],
  uiFrameworks: ['MUI', 'Bootstrap'],
  passions: [
    'Clean Component Architecture',
    'Responsive & Accessible UI',
    'Continuous Learning & Growth'
  ],
  readyToContribute: true
};`,
    code: `// useInteractiveUI.tsx
import { useState, useCallback } from 'react';

export function useResponsiveExperience() {
  const [isEngaged, setIsEngaged] = useState(true);
  
  const renderPixelPerfectUI = useCallback(() => {
    return {
      performance: 'High',
      accessibility: 'WCAG Compliant',
      cleanCode: true,
      readyForProduction: true
    };
  }, []);

  return { isEngaged, renderPixelPerfectUI };
}`,
    terminal: `$ npx create-react-app modern-experience
✓ Initialized TypeScript & Tailwind ecosystem
✓ Resolved components: Hero, Skills, Projects, Strengths
✓ Compiling production build... Done in 240ms!
✓ Status: All tests passed with 100% type safety.
$ ready --role="Frontend Developer"`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    showToast('Code snippet copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Interactive Badges */}
      <div className="absolute -top-6 -right-2 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)] backdrop-blur-xl animate-float">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] font-mono font-medium text-slate-200">
          Open to Frontend Roles
        </span>
      </div>

      <div className="absolute -bottom-5 -left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-indigo-500/40 shadow-xl backdrop-blur-xl animate-float-delayed">
        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        <span className="text-xs font-mono text-cyan-300 font-semibold">React + TypeScript</span>
      </div>

      {/* Main Terminal Box */}
      <div className="relative z-10 rounded-2xl overflow-hidden bg-[#0A0F1D] border border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#080C17] border-b border-slate-800/80">
          {/* Window dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 bg-slate-900/70 p-1 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-2.5 py-1 rounded-md font-mono transition-colors flex items-center gap-1.5 ${
                activeTab === 'profile'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Developer.ts</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 rounded-md font-mono transition-colors flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>ReactHook.tsx</span>
            </button>

            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-2.5 py-1 rounded-md font-mono transition-colors flex items-center gap-1.5 ${
                activeTab === 'terminal'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>bash</span>
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopyCode}
            aria-label="Copy snippet"
            className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Code Content Area */}
        <div className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed max-h-[380px] custom-scrollbar bg-[#090D1A]/95 text-slate-300">
          <pre className="text-left font-mono">
            {activeTab === 'profile' && (
              <code>
                <span className="text-slate-500">// AhmadRaza.config.ts</span>
                {'\n'}
                <span className="text-purple-400">import</span> {'{ Developer }'}{' '}
                <span className="text-purple-400">from</span>{' '}
                <span className="text-emerald-300">'@ar/frontend-core'</span>;{'\n\n'}
                <span className="text-purple-400">export const</span>{' '}
                <span className="text-blue-400">ahmadRaza</span>: <span className="text-amber-300">Developer</span> = {'{'}{'\n'}
                {'  '}name: <span className="text-emerald-300">'Ahmad Raza'</span>,{'\n'}
                {'  '}role: <span className="text-emerald-300">'Frontend Web Developer'</span>,{'\n'}
                {'  '}education: <span className="text-emerald-300">'BS Computer Science (COMSATS)'</span>,{'\n'}
                {'  '}location: <span className="text-emerald-300">'Lahore, Pakistan'</span>,{'\n'}
                {'  '}coreStack: [{'\n'}
                {'    '}<span className="text-emerald-300">'React JS'</span>,{' '}
                <span className="text-emerald-300">'TypeScript'</span>,{' '}
                <span className="text-emerald-300">'JavaScript ES6+'</span>,{'\n'}
                {'    '}<span className="text-emerald-300">'HTML5'</span>,{' '}
                <span className="text-emerald-300">'CSS3'</span>,{' '}
                <span className="text-emerald-300">'MUI'</span>,{' '}
                <span className="text-emerald-300">'Bootstrap'</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}status: <span className="text-cyan-400">'Seeking First Frontend Role'</span>,{'\n'}
                {'  '}readyToBuild: <span className="text-amber-400">true</span>{'\n'}
                {'}'};
              </code>
            )}

            {activeTab === 'code' && (
              <code>
                <span className="text-slate-500">// useInteractiveUI.tsx</span>
                {'\n'}
                <span className="text-purple-400">import</span> {'{ useState, useCallback }'}{' '}
                <span className="text-purple-400">from</span>{' '}
                <span className="text-emerald-300">'react'</span>;{'\n\n'}
                <span className="text-purple-400">export function</span>{' '}
                <span className="text-blue-400">useResponsiveExperience</span>() {'{\n'}
                {'  '}<span className="text-purple-400">const</span> [isEngaged] = <span className="text-blue-400">useState</span>(<span className="text-amber-400">true</span>);{'\n\n'}
                {'  '}<span className="text-purple-400">const</span> renderModernUI = <span className="text-blue-400">useCallback</span>(() =&gt; {'{\n'}
                {'    '}<span className="text-purple-400">return</span> {'{\n'}
                {'      '}responsive: <span className="text-amber-400">true</span>,{'\n'}
                {'      '}cleanArchitecture: <span className="text-emerald-300">'Modular'</span>,{'\n'}
                {'      '}pixelPrecision: <span className="text-emerald-300">'100%'</span>,{'\n'}
                {'      '}performance: <span className="text-emerald-300">'Optimized'</span>{'\n'}
                {'    }'};{'\n'}
                {'  }'}, []);{'\n\n'}
                {'  '}<span className="text-purple-400">return</span> {'{ isEngaged, renderModernUI }'};{'\n'}
                {'}'}
              </code>
            )}

            {activeTab === 'terminal' && (
              <code className="text-emerald-400">
                <span className="text-slate-400">$ npx create-react-app ahmad-portfolio</span>{'\n'}
                <span className="text-cyan-400">✓</span> Loaded TypeScript & Tailwind configuration{'\n'}
                <span className="text-cyan-400">✓</span> Initialized modules: About, Skills, Projects, Education, Contact{'\n'}
                <span className="text-cyan-400">✓</span> Bundled with Vite v6.0 & React 19{'\n'}
                <span className="text-amber-300">➜</span> Local: http://localhost:5173/{'\n'}
                <span className="text-emerald-400">✓ Status: Ready for Production & Opportunities</span>
              </code>
            )}
          </pre>
        </div>

        {/* Footer Status bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#070B14] border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>UTF-8</span>
            <span>•</span>
            <span>TypeScript React</span>
          </div>
          <div className="flex items-center gap-1.5 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frontend Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};
