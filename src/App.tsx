import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './components/common/Toast';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { BackToTop } from './components/common/BackToTop';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { FypSection } from './components/fyp/FypSection';
import { EducationSection } from './components/education/EducationSection';
import { StrengthsSection } from './components/strengths/StrengthsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { ResumeModal } from './components/resume/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="relative min-h-screen bg-[#090D16] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
          
          {/* Scroll Progress Indicator at the very top */}
          <ScrollProgress />

          {/* Desktop Custom Follower Cursor */}
          <CustomCursor />

          {/* Sticky Navbar with Active Indicator & Glass Effect */}
          <Navbar onOpenResume={() => setIsResumeOpen(true)} />

          {/* Main Content Sections */}
          <main>
            {/* 1. Hero Section with Interactive Terminal & CTAs */}
            <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

            {/* 2. About Me Section with CS Graduation & Focus Cards */}
            <AboutSection />

            {/* 3. Skills / Tech Stack Section with Category Filter */}
            <SkillsSection />

            {/* 4. Featured Projects Section (Grocifier, E-Commerce React, Vanilla E-Commerce, Portfolio) */}
            <ProjectsSection />

            {/* 5. FYP Final Year Project Section (COMSATS Automated Merit System) */}
            <FypSection />

            {/* 5. Education Timeline (COMSATS, PGC, Matric) */}
            <EducationSection />

            {/* 6. Key Strengths Cards */}
            <StrengthsSection />

            {/* 7. Contact Section with Direct Details & Validated Form */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Back-To-Top Button */}
          <BackToTop />

          {/* Full Resume / CV Modal (Printable & Copyable) */}
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />

        </div>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
