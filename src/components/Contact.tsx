import React, { useState } from 'react';
import { Github, Instagram, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [copiedHandle, setCopiedHandle] = useState(false);

  const handleCopyHandle = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHandle(true);
    setTimeout(() => setCopiedHandle(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#02040a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-mono text-cyan-400 font-bold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white uppercase mb-4">
            LET'S BUILD SOMETHING.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
            Have an idea or project worth exploring?
          </p>
        </div>

        {/* Contact Action Cards */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl glass border border-white/10 flex flex-col gap-6 bg-white/[0.02]">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* GitHub Button Card */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="contact-github-btn"
                className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/5 flex items-center justify-between transition-all duration-200 min-h-[64px]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-mono text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      GITHUB →
                    </div>
                    <div className="font-mono text-[11px] text-gray-400">
                      {PERSONAL_INFO.githubUsername}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Instagram Button Card */}
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                id="contact-instagram-btn"
                className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400/50 hover:bg-orange-400/5 flex items-center justify-between transition-all duration-200 min-h-[64px]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white/10 text-orange-400 group-hover:bg-orange-400 group-hover:text-black transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-mono text-xs font-bold text-white group-hover:text-orange-300 transition-colors">
                      INSTAGRAM →
                    </div>
                    <div className="font-mono text-[11px] text-gray-400">
                      {PERSONAL_INFO.instagramUsername}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

            </div>

            {/* Quick Copy Info */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400">Developer Username</span>
                <span className="font-mono text-xs font-semibold text-gray-200">sufiyan-sabeel</span>
              </div>
              <button
                onClick={() => handleCopyHandle('sufiyan-sabeel')}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono bg-white/10 border border-white/10 text-gray-300 hover:text-white hover:bg-white/15 transition-colors min-h-[36px]"
              >
                {copiedHandle ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied</span>
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

      </div>
    </section>
  );
};
