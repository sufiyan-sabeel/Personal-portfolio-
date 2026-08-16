import React, { useState } from 'react';
import { Cpu, Code2, Wrench, Sparkles, Check, Terminal } from 'lucide-react';
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
    <section id="skills" className="relative py-24 bg-[#02040a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-mono text-cyan-400 font-bold mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
              <span>Technical Capabilities</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-display">
              SKILLS & ARSENAL
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mt-2">
              VERIFIED CORE COMPETENCIES & DEVELOPMENT TECHNOLOGIES
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 p-1 rounded-sm glass border border-white/10">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-black font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ALL
            </button>
            {SKILLS_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS_DATA.filter(
            (cat) => selectedCategory === 'all' || selectedCategory === cat.id
          ).map((category) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <div
                key={category.id}
                id={`skill-category-${category.id}`}
                className="rounded-2xl glass border border-white/10 hover:border-cyan-400/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
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

                  {/* Skills Pills / Chips */}
                  <div className="flex flex-col gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-3 rounded-sm bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all group/item"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span className="text-xs font-semibold text-gray-200 font-display group-hover/item:text-white">
                            {skill.name}
                          </span>
                        </div>

                        {skill.tag && (
                          <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 px-2.5 py-0.5 rounded-sm bg-white/5 border border-white/10 group-hover/item:text-cyan-300">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of card */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-gray-500">
                  <span>{category.skills.length} CORE MODULES</span>
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
