import React, { useMemo } from 'react';
import { Sparkles, Terminal, Compass, Layers, Bot, Cpu, Smartphone, Wrench, Globe, ShieldCheck, BookOpen, Clock } from 'lucide-react';
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
  // Dynamically calculate the reading time and word count for the entire About section
  const readingStats = useMemo(() => {
    const allText = [
      PERSONAL_INFO.about.heading,
      PERSONAL_INFO.about.subheading,
      ...PERSONAL_INFO.about.bio,
      ...PERSONAL_INFO.about.interests,
      ...PERSONAL_INFO.about.focusMetrics.flatMap((m) => [m.label, m.value, m.description]),
      ...INTEREST_CARDS.flatMap((c) => [c.title, c.description, c.badge]),
    ].join(' ');

    const words = allText.trim().split(/\s+/).filter(Boolean).length;
    // Standard adult reading speed is ~200-250 words per minute
    const wordsPerMinute = 200;
    const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));

    return { words, minutes };
  }, []);

  return (
    <section id="about" className="relative py-24 bg-[#02040a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-mono text-cyan-400 font-bold mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
              <span>About The Developer</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-display">
              {PERSONAL_INFO.about.heading}
            </h2>
            <p className="text-sm tracking-wide text-gray-400 font-mono">
              {PERSONAL_INFO.about.subheading}
            </p>
          </div>

          {/* Reading Time Badge */}
          <div
            id="about-reading-time"
            className="flex items-center gap-3 px-4 py-2 rounded-sm glass border border-white/10 text-xs font-mono text-gray-300 w-fit"
          >
            <div className="flex items-center gap-1.5 text-cyan-400">
              <BookOpen className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider font-semibold">Reading Time:</span>
            </div>
            <span className="text-white font-bold">{readingStats.minutes} min read</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">{readingStats.words} words</span>
          </div>
        </div>

        {/* Top Grid: Bio narrative + Focal Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Bio Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="p-8 rounded-2xl glass border border-white/10 relative overflow-hidden">
              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                {PERSONAL_INFO.about.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Interests tag cloud */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-3 font-bold">
                  KEY AREAS OF EXPLORATION //
                </span>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.about.interests.map((interest, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1 rounded-sm text-xs font-mono bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/50 hover:text-white transition-colors"
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
                className="p-6 rounded-2xl glass border border-white/10 flex flex-col justify-between h-full group hover:border-cyan-400/30 transition-all duration-200"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400 font-bold mb-2">
                    {item.label}
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                    {item.value}
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 border-t border-white/10 pt-3 leading-snug">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Pillars / Technical Disciplines Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gray-400 font-bold flex items-center gap-2">
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
                  className="p-6 rounded-2xl glass border border-white/10 flex flex-col justify-between group h-full hover:border-cyan-400/40 transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest px-2.5 py-1 rounded-sm bg-white/5 border border-white/10">
                        {card.badge}
                      </span>
                    </div>

                    <h4 className="font-display text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h4>

                    <p className="text-xs text-gray-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">ACTIVE DEV</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
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
