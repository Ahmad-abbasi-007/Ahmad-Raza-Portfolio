import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  School, 
  Award, 
  Eye, 
  ExternalLink,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { educationData } from '../../data/portfolioData';
import { Modal } from '../common/Modal';
import type { EducationItem } from '../../types/portfolio';

export const EducationSection: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<EducationItem | null>(null);

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC &amp; PROFESSIONAL CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Education <span className="gradient-text">&amp; Credentials</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3">
            Academic qualifications, verified industry internships, and computer science foundation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800 space-y-12">
          {educationData.map((item, idx) => {
            const isFirst = idx === 0;
            const isCert = !!item.isCertificate;

            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-4 border-[#090D16] flex items-center justify-center transition-transform duration-300 group-hover:scale-125 ${
                    isCert
                      ? 'bg-gradient-to-tr from-amber-400 to-orange-500 shadow-[0_0_15px_rgba(245,158,11,0.6)]'
                      : isFirst
                      ? 'bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]'
                      : 'bg-slate-700'
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Timeline Content Card */}
                <div 
                  className={`glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden transition-all duration-300 ${
                    isCert
                      ? 'border-amber-500/30 hover:border-amber-400/60 bg-gradient-to-br from-[#0e1628]/95 via-[#0b101d]/95 to-[#121324]/95 shadow-[0_0_30px_rgba(245,158,11,0.06)]'
                      : 'group-hover:border-cyan-500/40'
                  }`}
                >
                  
                  {/* Top Meta info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                        isCert
                          ? 'bg-amber-500/10 border border-amber-500/30 text-amber-400'
                          : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                      }`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>

                      {isCert && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-semibold">
                          <ShieldCheck className="w-3 h-3" />
                          <span>Verified</span>
                        </span>
                      )}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Degree / Certificate Title */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className={`text-lg sm:text-xl font-bold font-display transition-colors ${
                      isCert
                        ? 'text-amber-100 group-hover:text-amber-300'
                        : 'text-white group-hover:text-cyan-300'
                    }`}>
                      {item.degree}
                    </h3>

                    {/* (View Certificate) Action Button on header */}
                    {item.certificateImage && (
                      <button
                        onClick={() => setSelectedCertificate(item)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-amber-200 text-xs font-semibold transition-all active:scale-95 shadow-sm"
                        title="Click to view full certificate"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>(view certificate)</span>
                      </button>
                    )}
                  </div>

                  {/* Institution / Company */}
                  <div className={`text-sm font-medium mb-4 flex items-center gap-2 ${
                    isCert ? 'text-amber-400/90' : 'text-cyan-400/90'
                  }`}>
                    {isCert ? (
                      <Briefcase className="w-4 h-4 text-amber-400" />
                    ) : (
                      <School className="w-4 h-4 text-cyan-500" />
                    )}
                    <span className="font-semibold">{item.institution}</span>
                    {item.certificateId && (
                      <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                        ID: {item.certificateId}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Certificate Interactive Thumbnail Preview (if applicable) */}
                  {item.certificateImage && (
                    <div className="mb-4 pt-2">
                      <div 
                        onClick={() => setSelectedCertificate(item)}
                        className="group/cert relative inline-block rounded-xl overflow-hidden border border-amber-500/30 hover:border-amber-400 cursor-pointer shadow-lg transition-all transform hover:scale-[1.01]"
                      >
                        <div className="relative max-w-sm sm:max-w-md aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-slate-950">
                          <img
                            src={item.certificateImage}
                            alt={item.degree}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/cert:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end justify-between p-3">
                            <span className="text-[11px] font-mono text-amber-300 font-semibold flex items-center gap-1.5">
                              <Award className="w-3.5 h-3.5 text-amber-400" />
                              Fentix Tech Certificate
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-amber-500 text-slate-950 text-[10px] font-bold shadow-md">
                              <Eye className="w-3 h-3" />
                              (view certificate)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="pt-4 border-t border-slate-800/80 space-y-2">
                      {item.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isCert ? 'text-amber-400' : 'text-cyan-400'
                          }`} />
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

      {/* Certificate Viewer Modal */}
      {selectedCertificate && (
        <Modal
          isOpen={selectedCertificate !== null}
          onClose={() => setSelectedCertificate(null)}
          title={`${selectedCertificate.degree} • ${selectedCertificate.institution}`}
          maxWidth="max-w-4xl"
        >
          <div className="space-y-4">
            
            {/* Certificate Top Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-amber-500/20 text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Official Verified Credential</span>
                {selectedCertificate.certificateId && (
                  <span className="text-amber-400">• ID: {selectedCertificate.certificateId}</span>
                )}
              </div>

              {selectedCertificate.certificateImage && (
                <a
                  href={selectedCertificate.certificateImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Resolution</span>
                </a>
              )}
            </div>

            {/* High-Res Certificate Image Container */}
            {selectedCertificate.certificateImage && (
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-white/5 p-2 shadow-2xl flex items-center justify-center">
                <img
                  src={selectedCertificate.certificateImage}
                  alt={selectedCertificate.degree}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-md"
                />
              </div>
            )}

            {/* Certificate Meta Details Footer */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1">
              <p>
                <strong className="text-white">Organization:</strong> {selectedCertificate.institution} (Abbottabad, KPK, Pakistan)
              </p>
              <p>
                <strong className="text-white">Designation:</strong> Web Development Intern (Two-Month Remote Internship)
              </p>
              <p>
                <strong className="text-white">Issued To:</strong> Ahmad Raza
              </p>
            </div>

          </div>
        </Modal>
      )}
    </section>
  );
};
