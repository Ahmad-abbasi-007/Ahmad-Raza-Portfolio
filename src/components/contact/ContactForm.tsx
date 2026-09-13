import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useToast } from '../common/Toast';
import { contactData } from '../../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const { showToast } = useToast();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      showToast('Please fix the errors in the form before sending', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable frontend submission & trigger mailto option
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      showToast('Thank you! Your message has been prepared.', 'success');

      // Confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // Confetti fallback
      }

      // Reset form after short delay
      setTimeout(() => {
        const mailtoUrl = `mailto:${contactData.email}?subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(
          `Hi Ahmad,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.open(mailtoUrl, '_blank');
      }, 800);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSent(false);
  };

  return (
    <div className="glass-card p-6 sm:p-8 rounded-2xl relative">
      {isSent ? (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white font-display mb-2">
            Message Prepared Successfully!
          </h3>
          <p className="text-sm text-slate-300 max-w-md mb-6">
            Your email client has been prompted to send your message directly to{' '}
            <span className="text-cyan-400 font-mono">{contactData.email}</span>.
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                Your Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? 'border-rose-500/80 focus:ring-rose-500/40'
                    : 'border-slate-700/80 focus:border-cyan-500/80 focus:ring-cyan-500/20'
                }`}
              />
              {errors.name && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3 h-3" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                Your Email <span className="text-rose-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. recruiter@company.com"
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'border-rose-500/80 focus:ring-rose-500/40'
                    : 'border-slate-700/80 focus:border-cyan-500/80 focus:ring-cyan-500/20'
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject field */}
          <div>
            <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
              Subject <span className="text-rose-400">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Frontend Developer Opportunity / Collaboration"
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                errors.subject
                  ? 'border-rose-500/80 focus:ring-rose-500/40'
                  : 'border-slate-700/80 focus:border-cyan-500/80 focus:ring-cyan-500/20'
              }`}
            />
            {errors.subject && (
              <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                <AlertCircle className="w-3 h-3" /> {errors.subject}
              </p>
            )}
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
              Message <span className="text-rose-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Ahmad, we saw your portfolio and would like to discuss a frontend role..."
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                errors.message
                  ? 'border-rose-500/80 focus:ring-rose-500/40'
                  : 'border-slate-700/80 focus:border-cyan-500/80 focus:ring-cyan-500/20'
              }`}
            />
            {errors.message && (
              <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                <AlertCircle className="w-3 h-3" /> {errors.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-slate-400 text-center font-mono mt-2">
            Form validated on client-side • Directly prepares and delivers to {contactData.email}
          </p>

        </form>
      )}
    </div>
  );
};
