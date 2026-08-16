import React from 'react';
import { Github, Instagram, ArrowUp, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { LiveClock } from './LiveClock';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative bg-[#02050e] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-cyan-600/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-white/10">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center font-mono text-cyan-400 font-bold text-sm">
                US
              </div>
              <span className="font-display font-black text-xl text-white tracking-wider">
                UMAIZ SUFIYAN
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm font-light leading-relaxed">
              Student Developer & AI Builder crafting intelligent software, reactive web systems, and experimental digital products.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="footer-github-link"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 text-slate-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                id="footer-instagram-link"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-orange-400/50 hover:text-orange-400 text-slate-300 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-300 font-semibold">
              NAVIGATION
            </span>
            <div className="flex flex-col gap-2 text-xs font-mono text-slate-400">
              <a href="#home" className="hover:text-cyan-400 transition-colors">01 // Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">02 // About</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">03 // Selected Work</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">04 // Technical Arsenal</a>
              <a href="#github" className="hover:text-cyan-400 transition-colors">05 // Code Activity</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">06 // Connect</a>
            </div>
          </div>

          {/* Real-time Dynamic Clock */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end">
            <div className="p-4 rounded-2xl glass-panel-subtle border border-white/10 w-full max-w-xs">
              <LiveClock variant="footer" />
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Umaiz Sufiyan. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors p-1"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
