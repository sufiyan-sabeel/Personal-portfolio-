import React from 'react';
import { motion } from 'motion/react';
import { Bot, Terminal, Code2, Sparkles, Cpu, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#02040a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 md:mb-12">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-mono text-cyan-400 font-bold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>PROFILE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            ABOUT
          </h2>
        </div>

        {/* Concise Bio Content Card */}
        <div className="max-w-4xl">
          <div className="p-8 sm:p-10 rounded-2xl glass border border-white/10 relative overflow-hidden bg-white/[0.02]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium font-display leading-relaxed">
              {PERSONAL_INFO.about.bio}
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-gray-300 font-semibold">Student Developer & AI Builder</span>
              </div>
              <div className="flex items-center gap-4">
                <span>AI • Software • Automation</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
