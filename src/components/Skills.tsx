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
    <section id="skills" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full glass-panel-subtle border border-cyan-500/30 w-fit mb-3">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyan-300 font-semibold">
                TECHNICAL CAPABILITIES
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
              SKILLS & ARSENAL
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mt-2">
              VERIFIED CORE COMPETENCIES & DEVELOPMENT TECHNOLOGIES
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-white/10">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ALL
            </button>
            {SKILLS_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
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
                className="rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/30 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-slate-900 border border-white/10 text-cyan-400 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed">
                    {category.subtitle}
                  </p>

                  {/* Skills Pills / Chips */}
                  <div className="flex flex-col gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900 transition-all group/item"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70 group-hover/item:scale-125 transition-transform" />
                          <span className="text-xs font-semibold text-slate-200 font-display group-hover/item:text-white">
                            {skill.name}
                          </span>
                        </div>

                        {skill.tag && (
                          <span className="font-mono text-[10px] text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5 group-hover/item:text-cyan-300">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of card */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <span>{category.skills.length} CORE MODULES</span>
                  <span className="text-cyan-400">READY</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
