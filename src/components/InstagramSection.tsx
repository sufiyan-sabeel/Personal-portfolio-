import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const InstagramSection: React.FC = () => {
  return (
    <section id="social" className="relative py-16 bg-[#02040a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        <div className="rounded-2xl glass border border-white/10 hover:border-orange-500/30 p-8 sm:p-12 transition-all duration-200 relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left info */}
            <div className="lg:col-span-8 flex flex-col items-start gap-4">
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-mono text-orange-400 font-bold">
                <Instagram className="w-3.5 h-3.5" />
                <span>Community & Visuals</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                Connect on Instagram
              </h3>

              <p className="text-gray-300 text-sm sm:text-base font-normal max-w-xl leading-relaxed">
                Follow my personal journey, tech updates, behind-the-scenes engineering experiments, and creative snapshots on Instagram.
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-gray-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                  <span>Handle: <strong className="text-white font-medium">{PERSONAL_INFO.instagramUsername}</strong></span>
                </span>
                <span>•</span>
                <span className="text-gray-500">Active Creator</span>
              </div>
            </div>

            {/* Right action card */}
            <div className="lg:col-span-4 flex flex-col items-stretch justify-center">
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                id="instagram-follow-btn"
                className="glass px-8 py-4 rounded-sm font-bold text-xs tracking-widest uppercase text-white hover:bg-white hover:text-black border border-white/20 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <Instagram className="w-4 h-4 text-orange-400" />
                <span>Follow on Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
