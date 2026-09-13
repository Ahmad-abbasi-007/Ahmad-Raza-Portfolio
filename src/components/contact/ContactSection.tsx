import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { contactData } from '../../data/portfolioData';
import { ContactForm } from './ContactForm';
import { useToast } from '../common/Toast';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { showToast } = useToast();

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      showToast('Email address copied to clipboard!', 'success');
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      showToast('Phone number copied to clipboard!', 'success');
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lights */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Let's Build <span className="gradient-text">Something Together</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mt-3">
            Have a project idea or a frontend opportunity? Feel free to reach out directly or drop a message below.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Available for full-time frontend developer opportunities, remote positions, and collaborative web projects.
              </p>

              <div className="space-y-4">
                
                {/* Email Item with Copy Button */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-slate-400 block">Email Address</span>
                      <a
                        href={`mailto:${contactData.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(contactData.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 border border-slate-700 transition-colors shrink-0 ml-2"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-slate-400 block">Phone / WhatsApp</span>
                      <a
                        href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                      >
                        {contactData.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(contactData.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 border border-slate-700 transition-colors shrink-0 ml-2"
                    title="Copy phone to clipboard"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {contactData.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Online Profiles
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={contactData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800/60 transition-all text-xs font-medium"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={contactData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#0A66C2] hover:border-slate-700 hover:bg-slate-800/60 transition-all text-xs font-medium"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};
