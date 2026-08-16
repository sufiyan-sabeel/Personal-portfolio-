import React from 'react';
import { Sparkles, Terminal, Compass, Layers, Bot, Cpu, Smartphone, Wrench, Globe, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

const INTEREST_CARDS = [
  {
    icon: Bot,
    title: 'Artificial Intelligence',
    description: 'Exploring neural architectures, LLM orchestration, agentic frameworks, and smart automation workflows.',
    badge: 'Core Focus',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
  },
  {
    icon: Globe,
    title: 'Software & Web Systems',
    description: 'Engineering responsive, high-performance web applications using modern TypeScript and React component paradigms.',
    badge: 'Architecture',
    color: 'text-blue-400',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: Smartphone,
    title: 'Android & Mobile',
    description: 'Investigating mobile ecosystems, modern Android architectures, and seamless cross-device user experiences.',
    badge: 'Mobile Systems',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
  },
  {
    icon: Wrench,
    title: 'Automation & Dev Tools',
    description: 'Creating productivity scripts, CLI utilities, and automated pipelines to optimize the development workflow.',
    badge: 'Productivity',
    color: 'text-orange-400',
    borderColor: 'border-orange-500/20',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full glass-panel-subtle border border-cyan-500/30">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-cyan-300 font-semibold">
              ABOUT THE DEVELOPER
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            {PERSONAL_INFO.about.heading}
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest text-slate-400 font-medium">
            {PERSONAL_INFO.about.subheading}
          </p>
        </div>

        {/* Top Grid: Bio narrative + Focal Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Bio Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Terminal className="w-24 h-24 text-white" />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="font-display text-lg font-bold text-white tracking-wide">
                  The Journey & Philosophy
                </h3>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {PERSONAL_INFO.about.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Interests tag cloud */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <span className="block font-mono text-[11px] uppercase tracking-widest text-slate-400 mb-3 font-medium">
                  KEY AREAS OF EXPLORATION:
                </span>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.about.interests.map((interest, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900/80 border border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Focal Metric Pillars (Clean, non-fabricated cards) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PERSONAL_INFO.about.focusMetrics.map((item, idx) => (
              <div
                key={idx}
                id={`focus-metric-${idx}`}
                className="p-5 rounded-2xl glass-panel-interactive border border-white/10 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-orange-400 font-semibold mb-2">
                    {item.label}
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                    {item.value}
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-4 border-t border-white/5 pt-3 leading-snug">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Pillars / Technical Disciplines Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>TECHNICAL DOMAINS & INTERESTS</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {INTEREST_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  id={`interest-card-${idx}`}
                  className={`p-5 rounded-2xl glass-panel-interactive border ${card.borderColor} flex flex-col justify-between group h-full`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2.5 rounded-xl bg-slate-900/80 border border-white/10 ${card.color} shadow-sm`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-400 uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5">
                        {card.badge}
                      </span>
                    </div>

                    <h4 className="font-display text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-500">ACTIVE DEV</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80"></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
