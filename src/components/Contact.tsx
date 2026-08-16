import React, { useState } from 'react';
import { Mail, Send, Github, Instagram, ArrowUpRight, CheckCircle, MessageSquare, Sparkles, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedHandle, setCopiedHandle] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setSubmitted(true);
  };

  const handleCopyHandle = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHandle(true);
    setTimeout(() => setCopiedHandle(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#02040a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-mono text-cyan-400 font-bold mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Start a Conversation</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white uppercase mb-4">
            LET'S BUILD SOMETHING.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
            "Have an idea, project, or collaboration in mind?"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Connection Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Social direct cards */}
            <div className="p-7 sm:p-8 rounded-2xl glass border border-white/10 flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold font-display text-white mb-2">
                  Direct Channels
                </h3>
                <p className="text-xs text-gray-400 font-normal leading-relaxed">
                  Connect directly with me on GitHub or Instagram for quick discussions, collaborations, or tech talks.
                </p>
              </div>

              {/* GitHub Card */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="contact-github-card"
                className="group p-4 rounded-sm bg-white/5 border border-white/10 hover:border-cyan-400/40 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-sm bg-white/10 text-cyan-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-white group-hover:text-cyan-300">
                      GitHub
                    </div>
                    <div className="font-mono text-[11px] text-gray-400">
                      @{PERSONAL_INFO.githubUsername}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Instagram Card */}
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                id="contact-instagram-card"
                className="group p-4 rounded-sm bg-white/5 border border-white/10 hover:border-orange-400/40 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-sm bg-white/10 text-orange-400">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-white group-hover:text-orange-300">
                      Instagram
                    </div>
                    <div className="font-mono text-[11px] text-gray-400">
                      {PERSONAL_INFO.instagramUsername}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Quick Copy Info */}
              <div className="p-4 rounded-sm bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400">Primary Developer Handle</span>
                  <span className="font-mono text-xs font-semibold text-gray-200">sufiyan-sabeel</span>
                </div>
                <button
                  onClick={() => handleCopyHandle('sufiyan-sabeel')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors"
                >
                  {copiedHandle ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Collaboration Message Box */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl glass border border-white/10 relative">
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Send a Message or Project Brief
              </h3>
              <p className="text-xs text-gray-400 font-normal mb-6">
                Fill out the form below to propose a project, request a collaboration, or ask a question.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center gap-3">
                  <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white">
                    Message Prepared!
                  </h4>
                  <p className="text-xs text-gray-300 font-normal max-w-sm">
                    Thank you, <strong className="text-white">{name}</strong>. You can reach out directly via my connected Instagram or GitHub for immediate response.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="mt-4 px-4 py-2 rounded-sm text-xs font-mono text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Alex Johnson"
                        className="w-full px-4 py-3 rounded-sm bg-white/5 border border-white/10 focus:border-cyan-400 text-sm text-gray-100 placeholder-gray-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-1.5">
                        Topic / Subject
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g., AI Collaboration / Web App"
                        className="w-full px-4 py-3 rounded-sm bg-white/5 border border-white/10 focus:border-cyan-400 text-sm text-gray-100 placeholder-gray-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your idea, inquiry, or project..."
                      className="w-full px-4 py-3 rounded-sm bg-white/5 border border-white/10 focus:border-cyan-400 text-sm text-gray-100 placeholder-gray-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <span className="font-mono text-[10px] text-gray-500">
                      ⚡ Quick response via Instagram & GitHub
                    </span>

                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="px-8 py-3.5 rounded-sm font-mono font-bold text-xs uppercase tracking-wider text-black bg-white hover:bg-cyan-400 transition-all inline-flex items-center justify-center gap-2"
                    >
                      <span>Get In Touch</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
