import React, { useState } from 'react';
import { Printer, Copy, Check, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { Modal } from '../common/Modal';
import { contactData, projectsData, educationData, fypProjectData } from '../../data/portfolioData';
import { useToast } from '../common/Toast';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const plainText = `================================================
AHMAD RAZA — FRONTEND WEB DEVELOPER
================================================
Email: ${contactData.email} | Phone: ${contactData.phone}
Location: ${contactData.location}
GitHub: https://${contactData.githubUsername}
LinkedIn: ${contactData.linkedinUrl}

PROFESSIONAL SUMMARY
--------------------
Motivated Frontend Web Developer and recent Computer Science graduate from COMSATS University Islamabad (Abbottabad Campus). Proficient in building responsive, user-friendly, and accessible web applications using React JS, JavaScript (ES6+), HTML5, CSS3, and TypeScript. Eager to contribute to modern frontend teams and continuously expand engineering skills through real-world projects.

TECHNICAL SKILLS
----------------
- Frontend: HTML5, CSS3, JavaScript (ES6+), TypeScript, React JS
- UI Frameworks: Material UI (MUI), Bootstrap, Tailwind CSS
- Backend/Runtime: Node JS
- Tools: Git, GitHub, VS Code, npm

FINAL YEAR PROJECT (CAPSTONE)
------------------------------
Title: ${fypProjectData.title}
Institution: ${fypProjectData.institution}
Live App: ${fypProjectData.liveUrl}
Tech: React JS, JavaScript ES6+, Tailwind CSS, Node.js, Express, REST APIs
- Developed an automated scholarship and merit calculation portal for Undergraduate and Graduate students.
- Implemented real-time criteria verification, automated merit list generation, and responsive student/admin dashboards.

FEATURED PROJECTS
-----------------
1. Personal Portfolio Website
   Tech: HTML, CSS, JavaScript, React JS
   - Designed and developed a fully responsive personal portfolio showcasing frontend skills, projects, and contact information.
   - Implemented smooth animations and interactive UI elements to enhance the user experience across different device sizes.

2. Responsive E-Commerce UI
   Tech: React JS, MUI, CSS, JavaScript
   - Built a multi-page e-commerce frontend with product listing, cart, and checkout UI components using React JS and MUI.
   - Applied reusable component architecture and React state management for dynamic product filtering and cart interactions.

3. Interactive Web Landing Pages
   Tech: HTML, CSS, Bootstrap, JavaScript
   - Created multiple pixel-perfect, mobile-responsive landing pages focusing on layout, typography, and cross-browser compatibility.
   - Integrated JavaScript-driven features including modals, carousels, and form validation.

4. React Component Library
   Tech: React JS, TypeScript, MUI
   - Built a collection of reusable, typed React components including buttons, inputs, cards, and modals using TypeScript.
   - Demonstrated understanding of props, hooks, and component composition.

EXPERIENCE & CERTIFICATIONS
----------------------------
- Web Development Intern — Fentix Tech (April 2026 – June 2026)
  Location: Abbottabad, KPK, Pakistan (Remote)
  Certificate ID: FT-WDI-2026-0122 | Completed: 29 June 2026
  - Two-month remote web development internship focusing on frontend workflows, modern component design, and project execution.

EDUCATION
---------
- Bachelor of Science in Computer Science (2022 – 2026)
  COMSATS University Islamabad — Abbottabad Campus
  Focus: Frontend web development, software engineering principles, and modern web technologies.

- FSc (2020 – 2022)
  Punjab Group of Colleges, Lahore

- Matriculation — Computer Science (2018 – 2020)
  Lahore Board

KEY STRENGTHS
-------------
- Responsive & Mobile-First Development
- Component-Based Architecture
- UI Framework Proficiency (MUI & Bootstrap)
- Problem-Solving Mindset
- Continuous Learner (TypeScript, Advanced React, Node JS)
================================================`;

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    showToast('Clean plain-text CV copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Curriculum Vitae (CV)" maxWidth="max-w-4xl">
      <div className="space-y-6">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>ATS-Formatted • Verified Information</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
              title="Copy plain-text CV"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Formatted CV Document Container (Printable) */}
        <div id="printable-cv" className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 text-sm leading-relaxed space-y-6">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-white mb-1">
              {contactData.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-400 font-mono mb-3">
              {contactData.role}
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" /> {contactData.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-cyan-400" /> {contactData.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-cyan-400" /> {contactData.phone}
              </span>
              <a
                href={contactData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-cyan-300 hover:underline"
              >
                <GithubIcon className="w-3 h-3" /> github.com/Ahmad-abbasi-007
              </a>
              <a
                href={contactData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-cyan-300 hover:underline"
              >
                <LinkedinIcon className="w-3 h-3" /> linkedin.com/in/ahmad-raza-8b23a7264
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-slate-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Motivated Frontend Web Developer and recent Computer Science graduate from COMSATS University Islamabad (Abbottabad Campus). Proficient in building responsive, user-friendly, and accessible web applications using React JS, JavaScript (ES6+), HTML5, CSS3, and TypeScript. Eager to contribute to modern frontend teams and continuously expand engineering skills through real-world projects. Seeking first professional frontend developer role.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2.5 border-b border-slate-800 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong className="text-white">Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript, React JS
              </div>
              <div>
                <strong className="text-white">UI Frameworks:</strong> Material UI (MUI), Bootstrap
              </div>
              <div>
                <strong className="text-white">Backend / Runtime:</strong> Node JS
              </div>
              <div>
                <strong className="text-white">Developer Tools:</strong> Git, GitHub, VS Code, npm
              </div>
            </div>
          </div>

          {/* Final Year Project (Capstone) */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-3 border-b border-slate-800 pb-1 flex items-center justify-between">
              <span>Final Year Project (Capstone)</span>
              <span className="text-[10px] text-cyan-400 font-mono">COMSATS University</span>
            </h2>
            <div className="p-3.5 rounded-xl bg-slate-800/40 border border-purple-500/20 text-xs">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <a
                  href={fypProjectData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white text-sm hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>{fypProjectData.title}</span>
                  <span className="text-[10px] text-cyan-400 font-mono">↗</span>
                </a>
                <span className="text-[11px] font-mono text-purple-300">
                  React JS, JavaScript, Tailwind CSS, Node.js, Vercel
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">
                {fypProjectData.summary}
              </p>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-slate-800 pb-1">
              Featured Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="text-xs">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-bold text-white text-sm">
                      {project.title}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {project.technologies.join(', ')}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-slate-800 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu) => (
                <div key={edu.id} className="text-xs">
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-white">
                      {edu.degree}
                    </span>
                    <span className="font-mono text-slate-400">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-cyan-300 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-slate-400 mt-0.5">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Strengths */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-slate-800 pb-1">
              Core Strengths
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
              <li>Responsive &amp; Mobile-First Development across all screen sizes</li>
              <li>Modular component-based architecture in React with typed props</li>
              <li>Proficiency with Material UI (MUI) &amp; Bootstrap design systems</li>
              <li>Analytical problem-solving and clean code discipline</li>
              <li>Continuous learner (TypeScript, advanced React patterns, Node JS)</li>
            </ul>
          </div>

        </div>

      </div>
    </Modal>
  );
};
