import React from 'react';
import { Instagram, ArrowUpRight, Sparkles, Camera, Heart, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const InstagramSection: React.FC = () => {
  return (
    <section id="social" className="relative py-16 bg-[#030712] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <div className="rounded-3xl glass-panel border border-white/10 hover:border-orange-500/30 p-8 sm:p-12 transition-all duration-300 relative overflow-hidden group">
          
          {/* Subtle Orange and Blue Ambient glow on corners */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-600/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left info */}
            <div className="lg:col-span-8 flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono">
                <Instagram className="w-3.5 h-3.5" />
                <span>COMMUNITY & VISUALS</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
                Connect on Instagram
              </h3>

              <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl leading-relaxed">
                Follow my personal journey, tech updates, behind-the-scenes engineering experiments, and creative snapshots on Instagram.
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                  <span>Handle: <strong className="text-white font-medium">{PERSONAL_INFO.instagramUsername}</strong></span>
                </span>
                <span>•</span>
                <span className="text-slate-500">Active Creator</span>
              </div>
            </div>

            {/* Right action card */}
            <div className="lg:col-span-4 flex flex-col items-stretch justify-center">
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                id="instagram-follow-btn"
                className="group/insta flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-display font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-95 shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Instagram className="w-5 h-5" />
                <span>FOLLOW ON INSTAGRAM</span>
                <ArrowUpRight className="w-4 h-4 group-hover/insta:translate-x-0.5 group-hover/insta:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
