import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Code2, Wrench, Sparkles } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolio';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'development':
        return Code2;
      case 'ai':
        return Cpu;
      case 'tools':
        return Wrench;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="skills" className="relative py-20 md:py-28 bg-[#02040a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-mono text-cyan-400 font-bold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>TECHNICAL PROFICIENCIES</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
              SKILLS
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mt-2">
              DEVELOPMENT • AI • TOOLS
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 rounded-xl glass border border-white/10 w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all min-h-[40px] flex items-center justify-center whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              ALL
            </button>
            {SKILLS_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all min-h-[40px] flex items-center justify-center whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.filter(
            (cat) => selectedCategory === 'all' || selectedCategory === cat.id
          ).map((category) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <div
                key={category.id}
                id={`skill-category-${category.id}`}
                className="rounded-2xl glass border border-white/10 hover:border-cyan-400/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 bg-white/[0.02] group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mb-6 font-normal leading-relaxed">
                    {category.subtitle}
                  </p>

                  {/* Skills List */}
                  <div className="flex flex-col gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all group/item min-h-[44px]"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span className="text-xs font-semibold text-gray-200 font-display group-hover/item:text-white">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of card */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-gray-500">
                  <span>{category.skills.length} TECHNOLOGIES</span>
                  <span className="text-cyan-400 font-bold">READY</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
