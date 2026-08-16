import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Instagram, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { LiveClock } from './LiveClock';
import heroPortrait from '../assets/images/umaiz_portrait_1786864188838.jpg';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      const navOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic Dual-Tone Background Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Deep Navy/Black Base Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
        
        {/* Left/Top Fiery Orange Rim Light Glow */}
        <div className="absolute -top-24 -left-24 w-[450px] h-[450px] rounded-full bg-orange-600/15 blur-[140px]" />
        
        {/* Right/Bottom Electric Blue & Cyan Atmosphere */}
        <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] rounded-full bg-blue-600/20 blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/15 blur-[130px]" />

        {/* Subtle cinematic vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030712]/60 to-[#030712] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Personal Brand & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            
            {/* Top Status and Live Clock row */}
            <div className="flex flex-wrap items-center gap-3">
              <div
                id="hero-status-badge"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle border border-emerald-500/30 text-xs text-slate-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-300 font-medium">
                  {PERSONAL_INFO.status}
                </span>
              </div>

              <LiveClock variant="hero" />
            </div>

            {/* Micro Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gradient-to-r from-orange-500 to-cyan-500"></span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                HELLO, I'M
              </span>
            </div>

            {/* Hero Main Name */}
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white uppercase leading-[1.05]">
                {PERSONAL_INFO.name.split(' ')[0]}{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name.split(' ')[1]}
                </span>
              </h1>
              
              <p className="text-lg sm:text-2xl font-semibold text-slate-300 font-display flex items-center gap-2 mt-1">
                <span className="text-cyan-400">⚡</span>
                <span>{PERSONAL_INFO.title}</span>
              </p>
            </div>

            {/* Concise Introduction Quote */}
            <div className="relative pl-4 border-l-2 border-cyan-500/40 my-1">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-light">
                "{PERSONAL_INFO.tagline}"
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                id="hero-primary-cta"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-display font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:200%_auto] hover:bg-[position:right_center] shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-cyan-300/40 w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-slate-200 glass-panel-interactive border border-white/15 hover:border-orange-500/40 transition-all duration-300 hover:text-white w-full sm:w-auto"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>

            {/* Social handles quick bar */}
            <div className="flex items-center gap-6 pt-4 border-t border-white/10 w-full">
              <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400 font-medium">
                FIND ME ON:
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-github-link"
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="font-mono font-medium">{PERSONAL_INFO.githubUsername}</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-instagram-link"
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-orange-400 transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-slate-400 group-hover:text-orange-400 transition-colors" />
                  <span className="font-mono font-medium">{PERSONAL_INFO.instagramUsername}</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Cinematic Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px]">
              
              {/* Dual-Tone Ambient Backlight Glows */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-orange-500/20 via-transparent to-cyan-500/30 blur-2xl opacity-80" />
              
              {/* Outer Glass Card Housing */}
              <div
                id="hero-portrait-card"
                className="relative rounded-3xl p-3 sm:p-4 glass-panel border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden group"
              >
                {/* Subtle Grid overlay within card */}
                <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

                {/* Top Corner Technical Accents */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 border border-white/10 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-300">
                    IDENTITY • PORTRAIT
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20 font-mono text-[9px] text-orange-400 font-semibold px-2 py-1 rounded bg-slate-950/80 border border-orange-500/30 backdrop-blur-md">
                  DEV // 2026
                </div>

                {/* Portrait Image Container */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
                  <img
                    src={heroPortrait}
                    alt="Umaiz Sufiyan - Student Developer & AI Builder"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  
                  {/* Cinematic gradient overlays to integrate with ambient lighting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
                </div>

                {/* Floating Micro Tag Badge - Bottom Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display text-xs font-bold text-white leading-tight">
                        Umaiz Sufiyan
                      </div>
                      <div className="font-mono text-[10px] text-slate-400">
                        AI & Software Developer
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 font-mono text-[10px] text-orange-400 bg-orange-500/10 px-2 py-1 rounded border border-orange-500/20 font-medium">
                    <Code2 className="w-3 h-3" />
                    <span>BUILDER</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
