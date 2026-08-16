import React from 'react';
import { Github, Instagram, ArrowUp, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { LiveClock } from './LiveClock';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative bg-[#02040a] border-t border-white/10 pt-12 pb-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Minimal Footer Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Left: Brand Identity & Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="font-display font-bold text-lg text-white tracking-tight">
              UMAIZ SUFIYAN
            </span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="footer-github-link"
                className="text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-gray-600">•</span>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                id="footer-instagram-link"
                className="text-xs font-mono text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-1"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Right: Live Clock Display */}
          <div className="flex items-center gap-3">
            <LiveClock variant="hero" />
          </div>

        </div>

        {/* Bottom row: Copyright & Back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
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
