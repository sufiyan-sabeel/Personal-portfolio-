import React from 'react';
import { Github, Instagram, ArrowUp, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { LiveClock } from './LiveClock';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative bg-[#02040a] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-white/10">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-white/10 border border-white/15 flex items-center justify-center font-mono text-cyan-400 font-bold text-xs">
                US
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                UMAIZ SUFIYAN
              </span>
            </div>

            <p className="text-xs text-gray-400 max-w-sm font-normal leading-relaxed">
              Student Developer & AI Builder crafting intelligent software, reactive web systems, and experimental digital products.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="footer-github-link"
                className="p-2.5 rounded-sm bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 text-gray-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                id="footer-instagram-link"
                className="p-2.5 rounded-sm bg-white/5 border border-white/10 hover:border-orange-400/50 hover:text-orange-400 text-gray-300 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-bold">
              Navigation
            </span>
            <div className="flex flex-col gap-2 text-xs font-mono text-gray-400">
              <a href="#home" className="hover:text-white transition-colors">01 // Home</a>
              <a href="#about" className="hover:text-white transition-colors">02 // About</a>
              <a href="#projects" className="hover:text-white transition-colors">03 // Selected Work</a>
              <a href="#skills" className="hover:text-white transition-colors">04 // Technical Arsenal</a>
              <a href="#github" className="hover:text-white transition-colors">05 // Code Activity</a>
              <a href="#contact" className="hover:text-white transition-colors">06 // Connect</a>
            </div>
          </div>

          {/* Real-time Dynamic Clock */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end">
            <div className="p-5 rounded-2xl glass border border-white/10 w-full max-w-xs">
              <LiveClock variant="footer" />
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © 2026 Umaiz Sufiyan. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-1.5 text-gray-400 hover:text-cyan-400 transition-colors p-1 uppercase tracking-widest text-[11px]"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
